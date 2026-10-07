/* Обжарка: тёплая зернистая текстура за блоком (Grainient, ogl).
   Половинное разрешение, пауза вне экрана. */
import { Renderer, Program, Mesh, Triangle } from './lib/ogl.mjs';

const rgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || '#E3A145');
  return m ? new Float32Array([parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]) : new Float32Array([1, 1, 1]);
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);

  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));

  vec2 grainUv=uv*max(uGrainScale,0.001);
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;

  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  o=vec4(clamp(col,0.0,1.0),1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}
`;

export function createGrain(container, options) {
  const o = options || {};
  let renderer;
  try {
    renderer = new Renderer({ webgl: 2, alpha: true, antialias: false, dpr: 1 });
  } catch (e) {
    return null;
  }

  const gl = renderer.gl;
  const canvas = gl.canvas;
  canvas.style.cssText = 'width:100%;height:100%;display:block;';
  container.appendChild(canvas);

  const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new Float32Array([1, 1]) },
    uTimeSpeed: { value: 0.22 },
    uColorBalance: { value: 0.05 },
    uWarpStrength: { value: 1.1 },
    uWarpFrequency: { value: 4.2 },
    uWarpSpeed: { value: 1.6 },
    uWarpAmplitude: { value: 42 },
    uBlendAngle: { value: 12 },
    uBlendSoftness: { value: 0.16 },
    uRotationAmount: { value: 420 },
    uNoiseScale: { value: 1.6 },
    uGrainAmount: { value: 0.09 },
    uGrainScale: { value: 2.4 },
    uGrainAnimated: { value: 0 },
    uContrast: { value: 1.28 },
    uGamma: { value: 1.05 },
    uSaturation: { value: 1.05 },
    uCenterOffset: { value: new Float32Array([o.cx || 0, o.cy || 0]) },
    uZoom: { value: o.zoom || 0.95 },
    uColor1: { value: rgb(o.color1 || '#C8802C') },
    uColor2: { value: rgb(o.color2 || '#6E3B14') },
    uColor3: { value: rgb(o.color3 || '#241609') }
  };

  const mesh = new Mesh(gl, { geometry: new Triangle(gl), program: new Program(gl, { vertex, fragment, uniforms }) });

  const draw = () => { try { renderer.render({ scene: mesh }); } catch (e) { stop(); } };

  const place = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.dpr = Math.min(window.devicePixelRatio || 1, 2) * (window.innerWidth < 760 ? 0.4 : 0.6);
    renderer.setSize(w, h);
    uniforms.iResolution.value[0] = gl.drawingBufferWidth;
    uniforms.iResolution.value[1] = gl.drawingBufferHeight;
    draw();
  };

  let raf = 0;
  let onScreen = true;
  let pageOn = !document.hidden;

  const loop = (t) => { uniforms.iTime.value = t * 0.001; draw(); raf = window.requestAnimationFrame(loop); };
  const start = () => { if (!raf && onScreen && pageOn) raf = window.requestAnimationFrame(loop); };
  const stop = () => { if (raf) { window.cancelAnimationFrame(raf); raf = 0; } };

  const io = new IntersectionObserver((entries) => {
    onScreen = entries[0].isIntersecting;
    onScreen ? start() : stop();
  }, { threshold: 0 });
  io.observe(container);

  const onVis = () => { pageOn = !document.hidden; pageOn ? start() : stop(); };
  document.addEventListener('visibilitychange', onVis);
  const ro = new ResizeObserver(place);
  ro.observe(container);

  place();

  return { destroy: () => { stop(); io.disconnect(); ro.disconnect(); document.removeEventListener('visibilitychange', onVis); } };
}