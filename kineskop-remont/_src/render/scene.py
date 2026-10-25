# Сцены «Кинескопа» для Cycles: кадр + глубина + разметка (камера, экран, фокус).
# blender -b --python scene.py -- <имя> <каталог> [сэмплы] [ширина]
import sys, os, json, math, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bpy, kin
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view

args = sys.argv[sys.argv.index("--") + 1:]
NAME, OUT = args[0], args[1]
SPP = int(args[2]) if len(args) > 2 else 64
WID = int(args[3]) if len(args) > 3 else 1600
# вертикальный кадр под телефон: имя сцены с хвостом -m
PORTRAIT = NAME.endswith("-m")
SCN = NAME[:-2] if PORTRAIT else NAME
HEI = round(WID * 16 / 10) if PORTRAIT else round(WID * 10 / 16)
os.makedirs(OUT, exist_ok=True)
R = math.radians
meta = {"name": NAME}

kin.reset()
# размер кадра — до любых проекций в разметку
bpy.context.scene.render.resolution_x = WID; bpy.context.scene.render.resolution_y = HEI
bpy.context.scene.render.resolution_percentage = 100


def drop_lods(objs):
    for o in objs:
        if "_LOD1" in o.name or "_LOD2" in o.name or o.name.startswith("wdg_"):
            o.hide_render = True


def backdrop(color=(0.008, 0.006, 0.005), rough=0.85, y=1.9, glow=None):
    """Циклорама: пол плавно уходит в стену, свет даёт пятно за предметом."""
    bpy.ops.mesh.primitive_plane_add(size=1)
    p = bpy.context.active_object; p.name = "cyc"
    me = p.data
    import bmesh
    bm = bmesh.new()
    W, D, Hh, r = 14, 6, 6, 1.4
    prof = []
    for i in range(0, 13):
        a = i / 12 * math.pi / 2
        prof.append((y - r + r * math.sin(a), r - r * math.cos(a)))
    pts = [(-D, 0.0)] + prof + [(y, Hh)]
    verts = []
    for (py, pz) in pts:
        verts.append((bm.verts.new((-W / 2, py, pz)), bm.verts.new((W / 2, py, pz))))
    for a, b in zip(verts, verts[1:]):
        bm.faces.new((a[0], a[1], b[1], b[0]))
    bm.to_mesh(me); bm.free()
    for f in me.polygons:
        f.use_smooth = True
    m = bpy.data.materials.new("cyc"); m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*color, 1); b.inputs["Roughness"].default_value = rough
    me.materials.append(m)
    return p, b


def top_surface(size=(6, 3), at=(0, 0, 0.74), thick=0.05, tile=0.9, tex="dark_wood", dark=0.3):
    """Столешница: тёмное дерево Poly Haven, края за кадром."""
    bpy.ops.mesh.primitive_cube_add(location=(at[0], at[1], at[2] - thick / 2))
    c = bpy.context.active_object; c.name = "desk"
    c.scale = (size[0] / 2, size[1] / 2, thick / 2)
    bpy.ops.object.transform_apply(scale=True)
    bev = c.modifiers.new("b", 'BEVEL'); bev.width = 0.008; bev.segments = 3
    m = bpy.data.materials.new("desk"); m.use_nodes = True; nt = m.node_tree
    b = nt.nodes["Principled BSDF"]
    tc = nt.nodes.new("ShaderNodeTexCoord"); mp = nt.nodes.new("ShaderNodeMapping")
    mp.inputs["Scale"].default_value = (1 / tile, 1 / tile, 1 / tile)
    nt.links.new(tc.outputs["Object"], mp.inputs[0])
    T = kin.PH + "/tex/" + tex
    def img(k, non_color=False):
        n = nt.nodes.new("ShaderNodeTexImage"); n.image = bpy.data.images.load(f"{T}_{k}.jpg")
        if non_color: n.image.colorspace_settings.name = "Non-Color"
        nt.links.new(mp.outputs[0], n.inputs[0]); return n
    d = img("diff"); r = img("rough", True); nm = img("nor_gl", True)
    mul = nt.nodes.new("ShaderNodeMixRGB"); mul.blend_type = 'MULTIPLY'; mul.inputs[0].default_value = 1
    mul.inputs[2].default_value = (dark, dark, dark, 1)
    hs = nt.nodes.new("ShaderNodeHueSaturation"); hs.inputs["Saturation"].default_value = 0.72
    nt.links.new(d.outputs[0], hs.inputs["Color"]); nt.links.new(hs.outputs[0], mul.inputs[1])
    nt.links.new(mul.outputs[0], b.inputs["Base Color"])
    rr = nt.nodes.new("ShaderNodeMapRange"); rr.inputs[3].default_value = 0.42; rr.inputs[4].default_value = 0.82
    nt.links.new(r.outputs[0], rr.inputs[0]); nt.links.new(rr.outputs[0], b.inputs["Roughness"])
    nmap = nt.nodes.new("ShaderNodeNormalMap"); nmap.inputs["Strength"].default_value = 0.6
    nt.links.new(nm.outputs[0], nmap.inputs["Color"]); nt.links.new(nmap.outputs[0], b.inputs["Normal"])
    c.data.materials.append(m)
    return c


def emit_plane(name, corners, color=(0.5, 0.8, 1.0), strength=6.0, image=None):
    """Плоскость по четырём точкам: свечение экрана (подсвечивает стол и пыль)."""
    import bmesh
    me = bpy.data.meshes.new(name); o = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(o)
    bm = bmesh.new(); vs = [bm.verts.new(c) for c in corners]; face = bm.faces.new(vs)
    uv = bm.loops.layers.uv.new()
    for l, (u, v) in zip(face.loops, [(0, 0), (1, 0), (1, 1), (0, 1)]):
        l[uv].uv = (u, v)
    bm.to_mesh(me); bm.free()
    m = bpy.data.materials.new(name); m.use_nodes = True; nt = m.node_tree; nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial"); em = nt.nodes.new("ShaderNodeEmission")
    em.inputs["Strength"].default_value = strength
    if image:
        tex = nt.nodes.new("ShaderNodeTexImage"); tex.image = bpy.data.images.load(image)
        nt.links.new(tex.outputs[0], em.inputs["Color"])
    else:
        em.inputs["Color"].default_value = (*color, 1)
    nt.links.new(em.outputs[0], out.inputs[0])
    me.materials.append(m)
    return o


def project(points):
    s = bpy.context.scene; cam = s.camera
    res = []
    for p in points:
        v = world_to_camera_view(s, cam, Vector(p))
        res.append([round(v.x, 5), round(1 - v.y, 5), round(v.z, 4)])
    return res


def depth_setup(near, far):
    """Глубина в отдельный файл: 1 — близко, 0 — далеко (для параллакса в WebGL)."""
    s = bpy.context.scene
    s.view_layers[0].use_pass_z = True
    s.use_nodes = True
    tree = s.compositing_node_group if hasattr(s, "compositing_node_group") else s.node_tree
    if tree is None:
        tree = bpy.data.node_groups.new("comp", "CompositorNodeTree")
        s.compositing_node_group = tree
    tree.nodes.clear()
    rl = tree.nodes.new("CompositorNodeRLayers")
    mr = tree.nodes.new("ShaderNodeMapRange") if bpy.app.version >= (5, 0, 0) else tree.nodes.new("CompositorNodeMapRange")
    mr.inputs[1].default_value = near; mr.inputs[2].default_value = far
    mr.inputs[3].default_value = 1.0; mr.inputs[4].default_value = 0.0
    mr.clamp = True
    tree.links.new(rl.outputs["Depth"], mr.inputs[0])
    fo = tree.nodes.new("CompositorNodeOutputFile")
    return tree, rl, mr, fo


# ---------------------------------------------------------------- сцены
def tv_screen_corners(objs, fr=(0.085, 0.70, 0.125, 0.736), push=0.004):
    """Углы стекла телевизора: доли передней грани по фронтальному кадру, глубина — лучом в стекло."""
    o = [x for x in objs if x.type == 'MESH'][0]
    lo = Vector((1e9,) * 3); hi = Vector((-1e9,) * 3)
    for c in o.bound_box:
        lo = Vector(map(min, lo, Vector(c))); hi = Vector(map(max, hi, Vector(c)))
    xl = lo.x + (hi.x - lo.x) * fr[0]; xr = lo.x + (hi.x - lo.x) * fr[1]
    zt = hi.z - (hi.z - lo.z) * fr[2]; zb = hi.z - (hi.z - lo.z) * fr[3]
    # глубина стекла: луч спереди в центр экрана (в координатах модели)
    mw = o.matrix_world; inv = mw.inverted()
    dg = bpy.context.evaluated_depsgraph_get()
    cx, cz = (xl + xr) / 2, (zt + zb) / 2
    org = mw @ Vector((cx, lo.y - 0.5, cz)); dst = mw @ Vector((cx, hi.y, cz))
    hit, loc, *_ = bpy.context.scene.ray_cast(dg, org, (dst - org).normalized())
    y = (inv @ loc).y - push if hit else lo.y - push
    loc4 = [Vector((xl, y, zb)), Vector((xr, y, zb)), Vector((xr, y, zt)), Vector((xl, y, zt))]
    return [mw @ v for v in loc4]


def warm_lights(key=150, rim=90, kick=0.4, target=(0, 0, 0.95)):
    kin.area("key", (-1.9, -1.6, 2.6), target, 1.4, key, color=(1.0, 0.8, 0.58), spread=math.radians(75))
    kin.area("rim", (target[0] + 1.25, target[1] + 0.45, target[2] + 0.55), target, 0.4, rim, color=(0.62, 0.74, 1.0), spread=math.radians(60))
    kin.area("fill", (2.2, -2.4, 1.0), target, 2.0, 35 * kick, color=(0.9, 0.85, 0.8), spread=math.radians(50))
    # пятно на стене за предметом: тот самый ореол из дыма у Shader
    kin.spot("glow", (target[0] + 0.1, target[1] + 0.75, target[2] + 0.05), (target[0] + 0.2, 1.9, target[2] + 0.25), 260, color=(1.0, 0.62, 0.36), angle=2.6, blend=1.0, radius=0.3)


def scene_hero():
    kin.world(strength=0.04, rot=1.2)
    backdrop()
    top_surface(size=(6, 3.6))
    root, objs = kin.append("Television_01")
    kin.place(root, objs, height=0.46, at=(0.22, 0.1, 0.74), rot=(0, 0, 14))
    corners = tv_screen_corners(objs)
    emit_plane("screen_glow", corners, color=(0.42, 0.62, 0.95), strength=1.6)
    s1, o1 = kin.append("screwdriver"); kin.place(s1, o1, at=(-0.2, -0.3, 0.74), rot=(90, 0, 70))
    p1, o2 = kin.append("pliers"); kin.place(p1, o2, at=(0.0, -0.42, 0.74), rot=(90, 0, -25))
    m1, o3 = kin.append("retro_multimeter"); drop_lods(o3); kin.place(m1, o3, height=0.2, at=(-0.42, 0.3, 0.74), rot=(0, 0, 25))
    warm_lights(target=(0.2, 0.1, 0.95), kick=0.15)
    if PORTRAIT:
        cam = kin.camera((-0.42, -2.05, 0.98), (0.12, 0.1, 0.74), lens=42, dof=2.2, fstop=2.8)
    else:
        cam = kin.camera((-0.66, -1.78, 0.92), (-0.13, 0.1, 0.97), lens=40, dof=1.95, fstop=2.8)
    bpy.context.view_layer.update()
    meta["screen"] = project(corners)
    meta["focus"] = project([Vector((0.2, 0.12, 0.98))])[0][:2]
    return cam, 1.4, 6.5


def channel(aid, height, rot=-30, lens=55, frac=0.5, elev=14, side=-22, extra=None, xfrac=0.64, key=1.0, high=False):
    """Предмет на столе крупным планом: камера и свет от размера предмета."""
    kin.world(strength=0.03, rot=1.2)
    backdrop()
    top_surface(size=(6, 3.6))
    root, objs = kin.append(aid); drop_lods(objs)
    kin.place(root, objs, longest=height, at=(0.0, 0.0, 0.74), rot=(0, 0, rot))
    if extra:
        extra(objs)
    lo, hi = kin.bounds([o for o in objs if not o.hide_render])
    c = (lo + hi) / 2
    d = hi - lo
    u = max(d.z, 0.55 * max(d.x, d.y)) * 0.5
    # свет: ключевой слева сверху, контровой справа сзади, подсветка стены
    k = (u / 0.35) ** 2
    kin.area("key", tuple(c + Vector((-1.5, -1.3, 1.5)) * u * 3.2), tuple(c), u * 2.2, 150 * k * key, color=(1.0, 0.8, 0.58))
    kin.area("rim", tuple(c + Vector((1.6, 0.9, 0.9)) * u * 3.0), tuple(c), u * 0.9, 110 * k, color=(0.62, 0.74, 1.0))
    kin.area("fill", tuple(c + Vector((1.4, -2.2, 0.3)) * u * 3.0), tuple(c), u * 3, 7 * k, color=(0.9, 0.85, 0.8))
    kin.area("wall", (c.x + 0.4, 1.35, 1.05), (c.x + 0.6, 1.9, 1.25), 1.0, 30, color=(1.0, 0.62, 0.38), spread=math.radians(45))
    if PORTRAIT:
        vfov = 2 * math.atan(18 / lens)
        hfov_p = 2 * math.atan(18 / lens * 10 / 16)
        dist = (2 * u / 0.6) / (2 * math.tan(hfov_p / 2))
    else:
        vfov = 2 * math.atan(18 / lens * 10 / 16)
        dist = (2 * u / frac) / (2 * math.tan(vfov / 2))
    e, sd = math.radians(elev), math.radians(side)
    dirv = Vector((math.sin(sd) * math.cos(e), -math.cos(sd) * math.cos(e), math.sin(e)))
    eye = c + dirv * dist
    # предмет правее центра: точка взгляда сдвигается влево по кадру
    hfov = 2 * math.atan(18 / lens)
    right = Vector((math.cos(sd), math.sin(sd), 0))
    if PORTRAIT:
        # предмет ниже середины: сверху место под заголовок канала
        upv = right.cross(-dirv).normalized()
        look = c + upv * (-0.2 if high else 0.12) * 2 * dist * math.tan(vfov / 2)
    else:
        look = c - right * (xfrac - 0.5) * 2 * dist * math.tan(hfov / 2)
    print("DBG", aid, "u", round(u, 3), "dist", round(dist, 3), "c", c, "eye", eye, "lo", lo, "hi", hi)
    cam = kin.camera(tuple(eye), tuple(look), lens=lens, dof=dist, fstop=max(2.0, 4.0 * u / 0.3))
    bpy.context.view_layer.update()
    meta["focus"] = project([c])[0][:2]
    return cam, dist - u * 1.5, dist + 3.0


def round_corners(obj, r, seg=12):
    """Скругляет только вертикальные рёбра коробки (углы телефона), фаской с весом."""
    import bmesh
    bm = bmesh.new(); bm.from_mesh(obj.data)
    lay = bm.edges.layers.float.get("bevel_weight_edge") or bm.edges.layers.float.new("bevel_weight_edge")
    for e in bm.edges:
        d = (e.verts[0].co - e.verts[1].co)
        e[lay] = 1.0 if abs(d.z) > 1e-6 and abs(d.x) < 1e-6 and abs(d.y) < 1e-6 else 0.0
    bm.to_mesh(obj.data); bm.free()
    m = obj.modifiers.new("c", 'BEVEL'); m.width = r; m.segments = seg; m.limit_method = 'WEIGHT'
    m.harden_normals = False
    return m


def build_phone():
    """Телефон: алюминиевая рамка, стекло с покрытием, экран блокировки с трещинами."""
    import bmesh
    W, H, T = 0.0715, 0.147, 0.0082
    bpy.ops.mesh.primitive_cube_add(location=(0, 0, T / 2))
    body = bpy.context.active_object; body.name = "phone_body"
    body.scale = (W / 2, H / 2, T / 2); bpy.ops.object.transform_apply(scale=True)
    round_corners(body, 0.0095)
    bev = body.modifiers.new("e", 'BEVEL'); bev.width = 0.0014; bev.segments = 4; bev.limit_method = 'ANGLE'
    bpy.ops.object.shade_smooth()
    m = bpy.data.materials.new("alu"); m.use_nodes = True; b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (0.09, 0.09, 0.1, 1); b.inputs["Metallic"].default_value = 1.0
    b.inputs["Roughness"].default_value = 0.32
    body.data.materials.append(m)
    # стекло-экран: тонкая плита сверху, экран светится картинкой
    bpy.ops.mesh.primitive_cube_add(location=(0, 0, T + 0.0003))
    g = bpy.context.active_object; g.name = "phone_glass"
    g.scale = ((W - 0.0016) / 2, (H - 0.0016) / 2, 0.0004); bpy.ops.object.transform_apply(scale=True)
    round_corners(g, 0.0088)
    bpy.ops.object.shade_smooth()
    me = g.data
    # развёртка сверху на весь экран
    me.uv_layers.new(name="uv")
    for poly in me.polygons:
        for li in poly.loop_indices:
            v = me.vertices[me.loops[li].vertex_index].co
            me.uv_layers["uv"].data[li].uv = ((v.x + W / 2) / W, (v.y + H / 2) / H)
    gm = bpy.data.materials.new("screen"); gm.use_nodes = True; nt = gm.node_tree
    pb = nt.nodes["Principled BSDF"]
    tex = nt.nodes.new("ShaderNodeTexImage"); tex.image = bpy.data.images.load("/opt/autopasha/.tmp/kin3/r/phone.png")
    uvn = nt.nodes.new("ShaderNodeUVMap"); uvn.uv_map = "uv"
    nt.links.new(uvn.outputs[0], tex.inputs[0])
    pb.inputs["Base Color"].default_value = (0.0, 0.0, 0.0, 1); pb.inputs["Roughness"].default_value = 0.05
    nt.links.new(tex.outputs[0], pb.inputs["Emission Color"]); pb.inputs["Emission Strength"].default_value = 1.4
    pb.inputs["Coat Weight"].default_value = 1.0; pb.inputs["Coat Roughness"].default_value = 0.03
    g.data.materials.append(gm)
    root = bpy.data.objects.new("phone", None); bpy.context.scene.collection.objects.link(root)
    body.parent = root; g.parent = root
    return root, [body, g]


def channel_phone():
    orig = kin.append
    kin.append = lambda aid, name=None: build_phone()
    try:
        return channel("phone", 0.15, rot=-14, elev=40, side=-12, frac=0.36, high=PORTRAIT)
    finally:
        kin.append = orig


def gold(objs):
    """Позолота: базовый цвет металла умножается на тёплое золото."""
    for o in objs:
        for sl in o.material_slots:
            m = sl.material
            if not m or not m.use_nodes or "glass" in m.name: continue
            nt = m.node_tree; b = next((n for n in nt.nodes if n.type == 'BSDF_PRINCIPLED'), None)
            if not b: continue
            src = b.inputs["Base Color"].links[0].from_socket if b.inputs["Base Color"].links else None
            mul = nt.nodes.new("ShaderNodeMixRGB"); mul.blend_type = 'MULTIPLY'; mul.inputs[0].default_value = 1
            mul.inputs[2].default_value = (1.0, 0.8, 0.46, 1)
            if src: nt.links.new(src, mul.inputs[1])
            else: mul.inputs[1].default_value = b.inputs["Base Color"].default_value
            nt.links.new(mul.outputs[0], b.inputs["Base Color"])


def workshop_props(objs):
    m1, o1 = kin.append("retro_multimeter"); drop_lods(o1); kin.place(m1, o1, height=0.2, at=(0.36, 0.2, 0.74), rot=(0, 0, -28))
    s1, o2 = kin.append("screwdriver"); kin.place(s1, o2, at=(-0.12, -0.3, 0.74), rot=(90, 0, 18))
    p1, o3 = kin.append("pliers"); kin.place(p1, o3, at=(0.26, -0.26, 0.74), rot=(90, 0, -58))
    # лампа над столом: тёплое пятно на плате
    kin.spot("lamp", (0.05, 0.05, 1.45), (0.0, 0.0, 0.74), 120, color=(1.0, 0.78, 0.5), angle=1.1, blend=0.7, radius=0.06)


SCENES = {
    "hero": scene_hero,
    "ch-phone": channel_phone,
    "ch-laptop": lambda: channel("classic_laptop", 0.33, rot=-28, high=PORTRAIT),
    "ch-tv": lambda: channel("television_02", 0.4, rot=-26, high=PORTRAIT),
    "ch-console": lambda: channel("gaming_console", 0.33, rot=-32, high=PORTRAIT),
    "ch-audio": lambda: channel("boombox", 0.62, rot=-22, high=PORTRAIT),
    "ch-camera": lambda: channel("Camera_01", 0.16, rot=-40, high=PORTRAIT),
    "radio": lambda: channel("vintage_radio_transceiver", 0.5, rot=-30),
    "watch": lambda: channel("digital_wrist_watch", 0.22, rot=62, elev=30, extra=gold, frac=0.95, xfrac=0.68),
    "board": lambda: channel("circuit_board", 0.4, rot=-18, elev=34, extra=workshop_props, frac=0.5, xfrac=0.72),
}

cam, near, far = SCENES[SCN]()
s = bpy.context.scene
meta["near"], meta["far"] = near, far
meta["lens"] = cam.data.lens
meta["size"] = [WID, HEI]
if os.environ.get("META_ONLY"):
    meta["near"], meta["far"] = near, far; meta["lens"] = cam.data.lens; meta["size"] = [WID, HEI]
    old = json.load(open(os.path.join(OUT, f"{NAME}.json")))
    old.update({k: meta[k] for k in ("screen", "focus") if k in meta})
    json.dump(old, open(os.path.join(OUT, f"{NAME}.json"), "w"), ensure_ascii=False, indent=1)
    print("META", NAME, meta.get("screen"), meta.get("focus")); sys.exit(0)
t = time.time()
kin.render(os.path.join(OUT, f"{NAME}.jpg"), w=WID, h=HEI, samples=SPP)
meta["render_sec"] = round(time.time() - t, 1)
# глубина отдельным быстрым проходом: 1 сэмпл, без шумодава
s.cycles.samples = 1; s.cycles.use_denoising = False
for o in bpy.data.objects:
    if o.type == 'LIGHT':
        o.hide_render = True
mw = bpy.data.materials.new("depth"); mw.use_nodes = True; nt = mw.node_tree; nt.nodes.clear()
out = nt.nodes.new("ShaderNodeOutputMaterial"); em = nt.nodes.new("ShaderNodeEmission")
cd = nt.nodes.new("ShaderNodeCameraData"); mr = nt.nodes.new("ShaderNodeMapRange")
mr.inputs[1].default_value = near; mr.inputs[2].default_value = far
mr.inputs[3].default_value = 1.0; mr.inputs[4].default_value = 0.0
nt.links.new(cd.outputs["View Z Depth"], mr.inputs[0]); nt.links.new(mr.outputs[0], em.inputs["Color"])
nt.links.new(em.outputs[0], out.inputs[0])
s.view_layers[0].material_override = mw
s.world = None
s.view_settings.view_transform = 'Standard'; s.view_settings.look = 'None'
s.render.image_settings.file_format = 'PNG'; s.render.image_settings.color_mode = 'BW'
s.render.image_settings.color_depth = '8'
s.render.filepath = os.path.join(OUT, f"{NAME}-depth.png")
s.cycles.max_bounces = 0
bpy.ops.render.render(write_still=True)
json.dump(meta, open(os.path.join(OUT, f"{NAME}.json"), "w"), ensure_ascii=False, indent=1)
print("DONE", NAME, meta["render_sec"])
