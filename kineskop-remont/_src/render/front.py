import sys, os
sys.path.insert(0, "/opt/autopasha/.tmp/kin3/r")
import bpy, kin
from mathutils import Vector
aid, out = sys.argv[sys.argv.index("--") + 1:][:2]
kin.reset()
kin.world(strength=1.0)
root, objs = kin.append(aid)
lo, hi = kin.place(root, objs)
c = bpy.data.cameras.new("c"); c.type = 'ORTHO'
w, h = hi.x - lo.x, hi.z - lo.z
c.ortho_scale = max(w, h)
o = bpy.data.objects.new("c", c); bpy.context.scene.collection.objects.link(o)
o.location = ((lo.x + hi.x) / 2, lo.y - 2, (lo.z + hi.z) / 2); kin.aim(o, ((lo.x + hi.x) / 2, 0, (lo.z + hi.z) / 2))
bpy.context.scene.camera = o
s = bpy.context.scene
s.render.resolution_x = 1000; s.render.resolution_y = round(1000 * h / w)
print("BOX", w, h)
s.render.engine = 'CYCLES'; s.cycles.samples = 8
s.render.filepath = out; bpy.ops.render.render(write_still=True)
