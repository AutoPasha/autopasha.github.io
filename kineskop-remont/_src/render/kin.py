# Общие куски сцен «Кинескопа» для Cycles: ассеты Poly Haven, свет, дым, рендер.
import bpy, math, os
from mathutils import Vector

PH = "/opt/autopasha/.cache-blender/ph"


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)


def append(aid, name=None):
    """Тянет все объекты из .blend ассета, возвращает корневой пустой объект."""
    path = os.path.join(PH, aid, f"{aid}_2k.blend")
    with bpy.data.libraries.load(path, link=False) as (src, dst):
        dst.objects = list(src.objects)
    root = bpy.data.objects.new(name or aid, None)
    bpy.context.scene.collection.objects.link(root)
    objs = [o for o in dst.objects if o is not None]
    for o in objs:
        bpy.context.scene.collection.objects.link(o)
    for o in objs:
        if o.parent is None:
            o.parent = root
    bpy.context.view_layer.update()
    return root, objs


def bounds(objs):
    lo = Vector((1e9, 1e9, 1e9)); hi = Vector((-1e9, -1e9, -1e9))
    for o in objs:
        if o.type != 'MESH':
            continue
        for c in o.bound_box:
            w = o.matrix_world @ Vector(c)
            lo = Vector(map(min, lo, w)); hi = Vector(map(max, hi, w))
    return lo, hi


def place(root, objs, height=None, at=(0, 0, 0), rot=(0, 0, 0), longest=None):
    """Поворачивает ассет (градусы), масштабирует до высоты height и ставит низом на at."""
    root.rotation_euler = tuple(math.radians(v) for v in rot)
    bpy.context.view_layer.update()
    lo, hi = bounds(objs)
    s = 1.0 if height is None else height / max(hi.z - lo.z, 1e-6)
    if longest:
        s = longest / max((hi - lo).x, (hi - lo).y, (hi - lo).z)
    root.scale = (s, s, s)
    bpy.context.view_layer.update()
    lo, hi = bounds(objs)
    c = (lo + hi) / 2
    root.location = Vector(at) - Vector((c.x, c.y, lo.z)) + root.location
    bpy.context.view_layer.update()
    return bounds(objs)


def world(hdr=os.path.join(PH, "studio.hdr"), strength=0.15, rot=0.0):
    w = bpy.data.worlds.new("w"); bpy.context.scene.world = w
    w.use_nodes = True
    nt = w.node_tree; nt.nodes.clear()
    env = nt.nodes.new("ShaderNodeTexEnvironment")
    env.image = bpy.data.images.load(hdr)
    map_ = nt.nodes.new("ShaderNodeMapping"); tc = nt.nodes.new("ShaderNodeTexCoord")
    map_.inputs["Rotation"].default_value[2] = rot
    bg = nt.nodes.new("ShaderNodeBackground"); bg.inputs[1].default_value = strength
    # камера видит тёмный фон, свет даёт карта
    lp = nt.nodes.new("ShaderNodeLightPath"); dark = nt.nodes.new("ShaderNodeBackground")
    dark.inputs[0].default_value = (0.004, 0.003, 0.0025, 1); dark.inputs[1].default_value = 1
    mix = nt.nodes.new("ShaderNodeMixShader"); out = nt.nodes.new("ShaderNodeOutputWorld")
    nt.links.new(tc.outputs["Generated"], map_.inputs[0]); nt.links.new(map_.outputs[0], env.inputs[0])
    nt.links.new(env.outputs[0], bg.inputs[0])
    nt.links.new(lp.outputs["Is Camera Ray"], mix.inputs[0])
    nt.links.new(bg.outputs[0], mix.inputs[1]); nt.links.new(dark.outputs[0], mix.inputs[2])
    nt.links.new(mix.outputs[0], out.inputs[0])


def area(name, loc, look, size, energy, color=(1, 1, 1), size_y=None, spread=None):
    l = bpy.data.lights.new(name, 'AREA'); l.energy = energy; l.color = color
    l.shape = 'RECTANGLE'; l.size = size; l.size_y = size_y or size
    if spread:
        l.spread = spread
    o = bpy.data.objects.new(name, l); bpy.context.scene.collection.objects.link(o)
    o.location = loc; aim(o, look)
    return o


def spot(name, loc, look, energy, color=(1, 1, 1), angle=0.6, blend=0.6, radius=0.05):
    l = bpy.data.lights.new(name, 'SPOT'); l.energy = energy; l.color = color
    l.spot_size = angle; l.spot_blend = blend; l.shadow_soft_size = radius
    o = bpy.data.objects.new(name, l); bpy.context.scene.collection.objects.link(o)
    o.location = loc; aim(o, look)
    return o


def aim(o, target):
    d = Vector(target) - Vector(o.location)
    o.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()


def camera(loc, look, lens=50, dof=None, fstop=2.8):
    c = bpy.data.cameras.new("cam"); c.lens = lens
    o = bpy.data.objects.new("cam", c); bpy.context.scene.collection.objects.link(o)
    o.location = loc; aim(o, look); bpy.context.scene.camera = o
    if dof:
        c.dof.use_dof = True; c.dof.focus_distance = dof; c.dof.aperture_fstop = fstop
    return o


def fog(size=(12, 12, 6), center=(0, 0, 2), density=0.03, anis=0.4, color=(1, 0.92, 0.85), noise=True):
    """Дым: куб с объёмом, плотность рвётся шумом, как пелена у Shader."""
    bpy.ops.mesh.primitive_cube_add(location=center)
    cube = bpy.context.active_object; cube.scale = (size[0] / 2, size[1] / 2, size[2] / 2); cube.name = "fog"
    m = bpy.data.materials.new("fog"); m.use_nodes = True; nt = m.node_tree; nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial"); vol = nt.nodes.new("ShaderNodeVolumePrincipled")
    vol.inputs["Color"].default_value = (*color, 1); vol.inputs["Anisotropy"].default_value = anis
    if noise:
        tc = nt.nodes.new("ShaderNodeTexCoord"); n = nt.nodes.new("ShaderNodeTexNoise")
        n.inputs["Scale"].default_value = 0.35; n.inputs["Detail"].default_value = 4; n.inputs["Roughness"].default_value = 0.6
        ramp = nt.nodes.new("ShaderNodeValToRGB")
        ramp.color_ramp.elements[0].position = 0.38; ramp.color_ramp.elements[0].color = (0, 0, 0, 1)
        ramp.color_ramp.elements[1].position = 0.75; ramp.color_ramp.elements[1].color = (1, 1, 1, 1)
        mul = nt.nodes.new("ShaderNodeMath"); mul.operation = 'MULTIPLY'; mul.inputs[1].default_value = density
        nt.links.new(tc.outputs["Object"], n.inputs["Vector"]); nt.links.new(n.outputs["Fac"], ramp.inputs[0])
        nt.links.new(ramp.outputs[0], mul.inputs[0]); nt.links.new(mul.outputs[0], vol.inputs["Density"])
        fog.noise = n
    else:
        vol.inputs["Density"].default_value = density
    nt.links.new(vol.outputs[0], out.inputs["Volume"])
    cube.data.materials.append(m)
    cube.visible_shadow = False
    return cube


def floor(color=(0.02, 0.018, 0.016), rough=0.35, size=40, z=0.0):
    bpy.ops.mesh.primitive_plane_add(size=size, location=(0, 0, z))
    p = bpy.context.active_object; p.name = "floor"
    m = bpy.data.materials.new("floor"); m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*color, 1); b.inputs["Roughness"].default_value = rough
    p.data.materials.append(m)
    return p, b


def emissive_image(obj_name_part, img_path, strength=3.0, objs=None):
    """Экран телевизора: подменяет материал стекла картинкой со свечением."""
    pass


def render(out, w=1600, h=1000, samples=96, frame=None, film=True):
    s = bpy.context.scene
    s.render.engine = 'CYCLES'; s.cycles.device = 'CPU'
    s.cycles.samples = samples; s.cycles.use_denoising = True; s.cycles.denoiser = 'OPENIMAGEDENOISE'
    s.cycles.use_adaptive_sampling = True; s.cycles.adaptive_threshold = 0.02
    s.cycles.max_bounces = 6; s.cycles.volume_bounces = 1; s.cycles.volume_step_rate = 4
    s.cycles.caustics_reflective = False; s.cycles.caustics_refractive = False
    s.render.resolution_x = w; s.render.resolution_y = h; s.render.resolution_percentage = 100
    s.view_settings.view_transform = 'AgX'; s.view_settings.look = 'AgX - Medium High Contrast'
    s.render.film_transparent = False
    s.render.image_settings.file_format = 'JPEG'; s.render.image_settings.quality = 92
    s.render.threads_mode = 'FIXED'; s.render.threads = os.cpu_count()
    if frame is not None:
        s.frame_set(frame)
    s.render.filepath = out
    bpy.ops.render.render(write_still=True)
