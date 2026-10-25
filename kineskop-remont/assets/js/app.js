var Nh=Object.defineProperty;var Fh=(i,t,e)=>t in i?Nh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Pt=(i,t,e)=>Fh(i,typeof t!="symbol"?t+"":t,e);var Hr="180";var kl=0,Ea=1,Hl=2;var wa=1,Vl=2,xn=3,In=0,be=1,je=2,Un=0,ti=1,Aa=2,Ra=3,Ca=4,Gl=5,Vn=100,Wl=101,Xl=102,ql=103,Yl=104,$l=200,Zl=201,Jl=202,Kl=203,_r=204,xr=205,Ql=206,jl=207,tc=208,ec=209,nc=210,ic=211,sc=212,rc=213,oc=214,Vr=0,Gr=1,Wr=2,ei=3,Xr=4,qr=5,Yr=6,$r=7,Zr=0,ac=1,lc=2,un=0,cc=1,hc=2,uc=3,dc=4,fc=5,pc=6,mc=7;var Ia=300,ri=301,oi=302,Jr=303,Kr=304,Ds=306,Pi=1e3,gn=1001,yr=1002,Oe=1003,gc=1004;var Us=1005;var Me=1006,Qr=1007;var yn=1008;var dn=1009,Pa=1010,La=1011,Hi=1012,jr=1013,qn=1014,fn=1015,tn=1016,to=1017,eo=1018,Vi=1020,Da=35902,Ua=35899,Na=1021,Fa=1022,en=1023,Li=1026,Gi=1027,no=1028,io=1029,Oa=1030,so=1031;var ro=1033,Ns=33776,Fs=33777,Os=33778,Bs=33779,oo=35840,ao=35841,lo=35842,co=35843,ho=36196,uo=37492,fo=37496,po=37808,mo=37809,go=37810,vo=37811,_o=37812,xo=37813,yo=37814,Mo=37815,So=37816,bo=37817,To=37818,Eo=37819,wo=37820,Ao=37821,Ro=36492,Co=36494,Io=36495,Po=36283,Lo=36284,Do=36285,Uo=36286;var us=2300,Mr=2301,gr=2302,va=2400,_a=2401,xa=2402;var vc=3200,_c=3201;var No=0,xc=1,De="",pe="srgb",cn="srgb-linear",ds="linear",ne="srgb";var jn=7680;var ya=519,yc=512,Mc=513,Sc=514,Ba=515,bc=516,Tc=517,Ec=518,wc=519,Ma=35044;var za="300 es",ln=2e3,fs=2001;var Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=1234567,cs=Math.PI/180,Di=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function ka(i,t){return(i%t+t)%t}function Oh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bh(i,t,e){return i!==t?(e-i)/(t-i):0}function hs(i,t,e){return(1-e)*i+e*t}function zh(i,t,e,n){return hs(i,t,1-Math.exp(-e*n))}function kh(i,t=1){return t-Math.abs(ka(i,t*2)-t)}function Hh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wh(i,t){return i+Math.random()*(t-i)}function Xh(i){return i*(.5-Math.random())}function qh(i){i!==void 0&&(vl=i);let t=vl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yh(i){return i*cs}function $h(i){return i*Di}function Zh(i){return(i&i-1)===0&&i!==0}function Jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ha={DEG2RAD:cs,RAD2DEG:Di,generateUUID:Wi,clamp:Zt,euclideanModulo:ka,mapLinear:Oh,inverseLerp:Bh,lerp:hs,damp:zh,pingpong:kh,smoothstep:Hh,smootherstep:Vh,randInt:Gh,randFloat:Wh,randFloatSpread:Xh,seededRandom:qh,degToRad:Yh,radToDeg:$h,isPowerOfTwo:Zh,ceilPowerOfTwo:Jh,floorPowerOfTwo:Kh,setQuaternionFromProperEuler:Qh,normalize:Ie,denormalize:Ci},Lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=x;return}if(h!==x||l!==f||c!==p||u!==_){let m=1-a,d=l*f+c*p+u*_+h*x,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let I=Math.sqrt(b),w=Math.atan2(I,d*E);m=Math.sin(m*w)/I,a=Math.sin(a*w)/I}let M=a*E;if(l=l*m+f*M,c=c*m+p*M,u=u*m+_*M,h=h*m+x*M,m===1-a){let I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+u*h+l*p-c*f,t[e+1]=l*_+u*f+c*h-a*p,t[e+2]=c*_+u*p+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_l.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_l.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $o.copy(this).projectOnVector(t),this.sub($o)}reflect(t){return this.sub($o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new H,_l=new Ln,Ht=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],x=s[0],m=s[3],d=s[6],E=s[1],b=s[4],M=s[7],I=s[2],w=s[5],D=s[8];return r[0]=o*x+a*E+l*I,r[3]=o*m+a*b+l*w,r[6]=o*d+a*M+l*D,r[1]=c*x+u*E+h*I,r[4]=c*m+u*b+h*w,r[7]=c*d+u*M+h*D,r[2]=f*x+p*E+_*I,r[5]=f*m+p*b+_*w,r[8]=f*d+p*M+_*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=e*h+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zo.makeScale(t,e)),this}rotate(t){return this.premultiply(Zo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Zo=new Ht;function Va(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ui(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ac(){let i=Ui("canvas");return i.style.display="block",i}var xl={};function Ni(i){i in xl||(xl[i]=!0,console.warn(i))}function Rc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var yl=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ml=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){let i={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===De?ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ni("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ni("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cn]:{primaries:t,whitePoint:n,transfer:ds,toXYZ:yl,fromXYZ:Ml,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pe},outputColorSpaceConfig:{drawingBufferColorSpace:pe}},[pe]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:yl,fromXYZ:Ml,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pe}}}),i}var jt=jh();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mi,Sr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mi===void 0&&(mi=Ui("canvas")),mi.width=t.width,mi.height=t.height;let s=mi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ui("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tu=0,Fi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Jo(s[o].image)):r.push(Jo(s[o]))}else r=Jo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eu=0,Ko=new H,ge=class i extends Pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=Me,o=yn,a=en,l=dn,c=i.DEFAULT_ANISOTROPY,u=De){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Wi(),this.name="",this.source=new Fi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ia)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pi:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pi:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ge.DEFAULT_IMAGE=null;ge.DEFAULT_MAPPING=Ia;ge.DEFAULT_ANISOTROPY=1;var Qt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,M=(p+1)/2,I=(d+1)/2,w=(u+f)/4,D=(h+x)/4,F=(_+m)/4;return b>M&&b>I?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=D/n):M>I?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=F/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=D/r,s=F/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(h-x)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},br=class extends Pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Me,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new ge(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Me,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},we=class extends br{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ps=class extends ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tr=class extends ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ns),Qs.subVectors(this.max,ns),gi.subVectors(t.a,ns),vi.subVectors(t.b,ns),_i.subVectors(t.c,ns),Nn.subVectors(vi,gi),Fn.subVectors(_i,vi),Zn.subVectors(gi,_i);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Zn.y,Zn.x,0];return!Qo(e,gi,vi,_i,Qs)||(e=[1,0,0,0,1,0,0,0,1],!Qo(e,gi,vi,_i,Qs))?!1:(js.crossVectors(Nn,Fn),e=[js.x,js.y,js.z],Qo(e,gi,vi,_i,Qs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bn=[new H,new H,new H,new H,new H,new H,new H,new H],rn=new H,Ks=new vn,gi=new H,vi=new H,_i=new H,Nn=new H,Fn=new H,Zn=new H,ns=new H,Qs=new H,js=new H,Jn=new H;function Qo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);let a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),l=t.dot(Jn),c=e.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var nu=new vn,is=new H,jo=new H,Gn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):nu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;is.subVectors(t,this.center);let e=is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(is.copy(t.center).add(jo)),this.expandByPoint(is.copy(t.center).sub(jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tn=new H,ta=new H,tr=new H,On=new H,ea=new H,er=new H,na=new H,Er=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ta.copy(t).add(e).multiplyScalar(.5),tr.copy(e).sub(t).normalize(),On.copy(this.origin).sub(ta);let r=t.distanceTo(e)*.5,o=-this.direction.dot(tr),a=On.dot(this.direction),l=-On.dot(tr),c=On.lengthSq(),u=Math.abs(1-o*o),h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){let x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ta).addScaledVector(tr,f),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){ea.subVectors(e,t),er.subVectors(n,t),na.crossVectors(ea,er);let o=this.direction.dot(na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);let l=a*this.direction.dot(er.crossVectors(On,er));if(l<0)return null;let c=a*this.direction.dot(ea.cross(On));if(c<0||l+c>o)return null;let u=-a*On.dot(na);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,o,a,l,c,u,h,f,p,_,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,f,p,_,x,m)}set(t,e,n,s,r,o,a,l,c,u,h,f,p,_,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),o=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*h,_=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,p=l*h,_=c*u,x=c*h;e[0]=f+x*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-_,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,p=l*h,_=c*u,x=c*h;e[0]=f-x*a,e[4]=-o*h,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*u,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,p=o*h,_=a*u,x=a*h;e[0]=l*u,e[4]=_*c-p,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,_=a*l,x=a*c;e[0]=l*u,e[4]=x-f*h,e[8]=_*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+_,e[10]=f-x*h}else if(t.order==="XZY"){let f=o*l,p=o*c,_=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=o*u,e[9]=p*h-_,e[2]=_*h-p,e[6]=a*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iu,t,su)}lookAt(t,e,n){let s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Bn.crossVectors(n,He),Bn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Bn.crossVectors(n,He)),Bn.normalize(),nr.crossVectors(He,Bn),s[0]=Bn.x,s[4]=nr.x,s[8]=He.x,s[1]=Bn.y,s[5]=nr.y,s[9]=He.y,s[2]=Bn.z,s[6]=nr.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],x=n[6],m=n[10],d=n[14],E=n[3],b=n[7],M=n[11],I=n[15],w=s[0],D=s[4],F=s[8],y=s[12],g=s[1],R=s[5],N=s[9],O=s[13],W=s[2],Q=s[6],A=s[10],L=s[14],C=s[3],X=s[7],$=s[11],q=s[15];return r[0]=o*w+a*g+l*W+c*C,r[4]=o*D+a*R+l*Q+c*X,r[8]=o*F+a*N+l*A+c*$,r[12]=o*y+a*O+l*L+c*q,r[1]=u*w+h*g+f*W+p*C,r[5]=u*D+h*R+f*Q+p*X,r[9]=u*F+h*N+f*A+p*$,r[13]=u*y+h*O+f*L+p*q,r[2]=_*w+x*g+m*W+d*C,r[6]=_*D+x*R+m*Q+d*X,r[10]=_*F+x*N+m*A+d*$,r[14]=_*y+x*O+m*L+d*q,r[3]=E*w+b*g+M*W+I*C,r[7]=E*D+b*R+M*Q+I*X,r[11]=E*F+b*N+M*A+I*$,r[15]=E*y+b*O+M*L+I*q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],_=t[3],x=t[7],m=t[11],d=t[15];return _*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*p-n*l*p)+x*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],_=t[12],x=t[13],m=t[14],d=t[15],E=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,b=_*f*c-u*m*c-_*l*p+o*m*p+u*l*d-o*f*d,M=u*x*c-_*h*c+_*a*p-o*x*p-u*a*d+o*h*d,I=_*h*l-u*x*l-_*a*f+o*x*f+u*a*m-o*h*m,w=e*E+n*b+s*M+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/w;return t[0]=E*D,t[1]=(x*f*r-h*m*r-x*s*p+n*m*p+h*s*d-n*f*d)*D,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*d+n*l*d)*D,t[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*p-n*l*p)*D,t[4]=b*D,t[5]=(u*m*r-_*f*r+_*s*p-e*m*p-u*s*d+e*f*d)*D,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*d-e*l*d)*D,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*D,t[8]=M*D,t[9]=(_*h*r-u*x*r-_*n*p+e*x*p+u*n*d-e*h*d)*D,t[10]=(o*x*r-_*a*r+_*n*c-e*x*c-o*n*d+e*a*d)*D,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*p-e*a*p)*D,t[12]=I*D,t[13]=(u*x*s-_*h*s+_*n*f-e*x*f-u*n*m+e*h*m)*D,t[14]=(_*a*s-o*x*s-_*n*l+e*x*l+o*n*m-e*a*m)*D,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*f+e*a*f)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,p=r*u,_=r*h,x=o*u,m=o*h,d=a*h,E=l*c,b=l*u,M=l*h,I=n.x,w=n.y,D=n.z;return s[0]=(1-(x+d))*I,s[1]=(p+M)*I,s[2]=(_-b)*I,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(f+d))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(_+b)*D,s[9]=(m-E)*D,s[10]=(1-(f+x))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);let c=1/r,u=1/o,h=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ln,l=!1){let c=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),_,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===ln)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fs)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ln,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),_,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===ln)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===fs)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xi=new H,on=new ae,iu=new H(0,0,0),su=new H(1,1,1),Bn=new H,nr=new H,He=new H,Sl=new ae,bl=new Ln,Je=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Je.DEFAULT_ORDER="XYZ";var ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ru=0,Tl=new H,yi=new Ln,En=new ae,ir=new H,ss=new H,ou=new H,au=new Ln,El=new H(1,0,0),wl=new H(0,1,0),Al=new H(0,0,1),Rl={type:"added"},lu={type:"removed"},Mi={type:"childadded",child:null},ia={type:"childremoved",child:null},Se=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Je,n=new Ln,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ht}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Al,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Al,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ss,ir,this.up):En.lookAt(ir,ss,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(En),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rl),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lu),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rl),Mi.child=t,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,t,ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,au,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Se.DEFAULT_UP=new H(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new H,wn=new H,sa=new H,An=new H,Si=new H,bi=new H,Cl=new H,ra=new H,oa=new H,aa=new H,la=new Qt,ca=new Qt,ha=new Qt,Hn=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),wn.subVectors(n,e),sa.subVectors(t,e);let o=an.dot(an),a=an.dot(wn),l=an.dot(sa),c=wn.dot(wn),u=wn.dot(sa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(la,r.x),o.addScaledVector(ca,r.y),o.addScaledVector(ha,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),wn.subVectors(t,e),an.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Si.subVectors(s,n),bi.subVectors(r,n),ra.subVectors(t,n);let l=Si.dot(ra),c=bi.dot(ra);if(l<=0&&c<=0)return e.copy(n);oa.subVectors(t,s);let u=Si.dot(oa),h=bi.dot(oa);if(u>=0&&h<=u)return e.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Si,o);aa.subVectors(t,r);let p=Si.dot(aa),_=bi.dot(aa);if(_>=0&&p<=_)return e.copy(r);let x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(bi,a);let m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return Cl.subVectors(r,s),a=(h-u)/(h-u+(p-_)),e.copy(s).addScaledVector(Cl,a);let d=1/(m+x+f);return o=x*d,a=f*d,e.copy(n).addScaledVector(Si,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=ka(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ua(o,r,t+1/3),this.g=ua(o,r,t),this.b=ua(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=Cc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return jt.workingToColorSpace(Ee.copy(this),t),Math.round(Zt(Ee.r*255,0,255))*65536+Math.round(Zt(Ee.g*255,0,255))*256+Math.round(Zt(Ee.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Ee.copy(this),e);let n=Ee.r,s=Ee.g,r=Ee.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=pe){jt.workingToColorSpace(Ee.copy(this),t);let e=Ee.r,n=Ee.g,s=Ee.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(sr);let n=hs(zn.h,sr.h,e),s=hs(zn.s,sr.s,e),r=hs(zn.l,sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ee=new Gt;Gt.NAMES=Cc;var cu=0,Dn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=ti,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_r,this.blendDst=xr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_r&&(n.blendSrc=this.blendSrc),this.blendDst!==xr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ni=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new H,rr=new Lt,hu=0,Fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rr.fromBufferAttribute(this,e),rr.applyMatrix3(t),this.setXY(e,rr.x,rr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}};var gs=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vs=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},uu=0,Ze=new ae,da=new Se,Ti=new H,Ve=new vn,rs=new vn,xe=new H,Ke=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Va(t)?vs:gs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rs.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ve.min,rs.min),Ve.expandByPoint(xe),xe.addVectors(Ve.max,rs.max),Ve.expandByPoint(xe)):(Ve.expandByPoint(rs.min),Ve.expandByPoint(rs.max))}Ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xe.fromBufferAttribute(a,c),l&&(Ti.fromBufferAttribute(t,c),xe.add(Ti)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new H,l[F]=new H;let c=new H,u=new H,h=new H,f=new Lt,p=new Lt,_=new Lt,x=new H,m=new H;function d(F,y,g){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,g),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,y),_.fromBufferAttribute(r,g),u.sub(c),h.sub(c),p.sub(f),_.sub(f);let R=1/(p.x*_.y-_.x*p.y);isFinite(R)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(R),a[F].add(x),a[y].add(x),a[g].add(x),l[F].add(m),l[y].add(m),l[g].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,y=E.length;F<y;++F){let g=E[F],R=g.start,N=g.count;for(let O=R,W=R+N;O<W;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let b=new H,M=new H,I=new H,w=new H;function D(F){I.fromBufferAttribute(s,F),w.copy(I);let y=a[F];b.copy(y),b.sub(I.multiplyScalar(I.dot(y))).normalize(),M.crossVectors(w,y);let R=M.dot(l[F])<0?-1:1;o.setXYZW(F,b.x,b.y,b.z,R)}for(let F=0,y=E.length;F<y;++F){let g=E[F],R=g.start,N=g.count;for(let O=R,W=R+N;O<W;O+=3)D(t.getX(O+0)),D(t.getX(O+1)),D(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[_++]=c[p++]}return new Fe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Il=new ae,Kn=new Er,or=new Gn,Pl=new H,ar=new H,lr=new H,cr=new H,fa=new H,hr=new H,Ll=new H,ur=new H,Yt=class extends Se{constructor(t=new Ke,e=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(fa.fromBufferAttribute(h,t),o?hr.addScaledVector(fa,u):hr.addScaledVector(fa.sub(e),u))}e.add(hr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(or.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(or,Pl)===null||Kn.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Il.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(Il),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,I=b;M<I;M+=3){let w=a.getX(M),D=a.getX(M+1),F=a.getX(M+2);s=dr(this,d,t,n,c,u,h,w,D,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){let E=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=dr(this,o,t,n,c,u,h,E,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){let m=f[_],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,I=b;M<I;M+=3){let w=M,D=M+1,F=M+2;s=dr(this,d,t,n,c,u,h,w,D,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){let E=m,b=m+1,M=m+2;s=dr(this,o,t,n,c,u,h,E,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function du(i,t,e,n,s,r,o,a){let l;if(t.side===be?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===In,a),l===null)return null;ur.copy(a),ur.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:i}}function dr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ar),i.getVertexPosition(l,lr),i.getVertexPosition(c,cr);let u=du(i,t,e,n,ar,lr,cr,Ll);if(u){let h=new H;Hn.getBarycoord(Ll,ar,lr,cr,h),s&&(u.uv=Hn.getInterpolatedAttribute(s,a,l,c,h,new Lt)),r&&(u.uv1=Hn.getInterpolatedAttribute(r,a,l,c,h,new Lt)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};Hn.getNormal(ar,lr,cr,f.normal),u.face=f,u.barycoord=h}return u}var Qe=class i extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(h,2));function _(x,m,d,E,b,M,I,w,D,F,y){let g=M/D,R=I/F,N=M/2,O=I/2,W=w/2,Q=D+1,A=F+1,L=0,C=0,X=new H;for(let $=0;$<A;$++){let q=$*R-O;for(let K=0;K<Q;K++){let st=K*g-N;X[x]=st*E,X[m]=q*b,X[d]=W,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[d]=w>0?1:-1,u.push(X.x,X.y,X.z),h.push(K/D),h.push(1-$/F),L+=1}}for(let $=0;$<F;$++)for(let q=0;q<D;q++){let K=f+q+Q*$,st=f+q+Q*($+1),Y=f+(q+1)+Q*($+1),ct=f+(q+1)+Q*$;l.push(K,st,ct),l.push(st,Y,ct),C+=6}a.addGroup(p,C,y),p+=C,f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ai(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){let t={};for(let e=0;e<i.length;e++){let n=ai(i[e]);for(let s in n)t[s]=n[s]}return t}function fu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ga(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Ic={clone:ai,merge:Ae},pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,de=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ai(t.uniforms),this.uniformsGroups=fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},_s=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new H,Dl=new Lt,Ul=new Lt,ye=class extends _s{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Di*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Dl,Ul),e.subVectors(Ul,Dl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(cs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ei=-90,wi=1,wr=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ye(Ei,wi,t,e);s.layers=this.layers,this.add(s);let r=new ye(Ei,wi,t,e);r.layers=this.layers,this.add(r);let o=new ye(Ei,wi,t,e);o.layers=this.layers,this.add(o);let a=new ye(Ei,wi,t,e);a.layers=this.layers,this.add(a);let l=new ye(Ei,wi,t,e);l.layers=this.layers,this.add(l);let c=new ye(Ei,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},xs=class extends ge{constructor(t=[],e=ri,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ar=class extends we{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qe(5,5,5),r=new de({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:Un});r.uniforms.tEquirect.value=e;let o=new Yt(s,r),a=e.minFilter;return e.minFilter===yn&&(e.minFilter=Me),new wr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Rn=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},gu={type:"move"},Oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Pe=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentIntensity=1,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ii=class extends ge{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Oe,u=Oe,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ys=class extends Fe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ai=new ae,Nl=new ae,fr=[],Fl=new vn,vu=new ae,os=new Yt,as=new Gn,Ms=class extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),Fl.copy(t.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Fl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),as.copy(t.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ai),Nl.multiplyMatrices(n,Ai),os.matrixWorld=Nl,os.raycast(t,fr);for(let o=0,a=fr.length;o<a;o++){let l=fr[o];l.instanceId=r,l.object=this,e.push(l)}fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ii(new Float32Array(s*this.count),s,this.count,no,fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pa=new H,_u=new H,xu=new Ht,mn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pa.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xu.getNormalMatrix(t),s=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qn=new Gn,yu=new Lt(.5,.5),pr=new H,Bi=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,o=new mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],_=r[8],x=r[9],m=r[10],d=r[11],E=r[12],b=r[13],M=r[14],I=r[15];if(s[0].setComponents(c-o,p-u,d-_,I-E).normalize(),s[1].setComponents(c+o,p+u,d+_,I+E).normalize(),s[2].setComponents(c+a,p+h,d+x,I+b).normalize(),s[3].setComponents(c-a,p-h,d-x,I-b).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,p-f,d-m,I-M).normalize();else if(s[4].setComponents(c-l,p-f,d-m,I-M).normalize(),e===ln)s[5].setComponents(c+l,p+f,d+m,I+M).normalize();else if(e===fs)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(t){Qn.center.set(0,0,0);let e=yu.distanceTo(t.center);return Qn.radius=.7071067811865476+e,Qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _n=class extends ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ss=class extends ge{constructor(t,e,n=qn,s,r,o,a=Oe,l=Oe,c,u=Li,h=1){if(u!==Li&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bs=class extends ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ts=class i extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],_=0,x=[],m=n/2,d=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(p,2));function E(){let M=new H,I=new H,w=0,D=(e-t)/n;for(let F=0;F<=r;F++){let y=[],g=F/r,R=g*(e-t)+t;for(let N=0;N<=s;N++){let O=N/s,W=O*l+a,Q=Math.sin(W),A=Math.cos(W);I.x=R*Q,I.y=-g*n+m,I.z=R*A,h.push(I.x,I.y,I.z),M.set(Q,D,A).normalize(),f.push(M.x,M.y,M.z),p.push(O,1-g),y.push(_++)}x.push(y)}for(let F=0;F<s;F++)for(let y=0;y<r;y++){let g=x[y][F],R=x[y+1][F],N=x[y+1][F+1],O=x[y][F+1];(t>0||y!==0)&&(u.push(g,R,O),w+=3),(e>0||y!==r-1)&&(u.push(R,N,O),w+=3)}c.addGroup(d,w,0),d+=w}function b(M){let I=_,w=new Lt,D=new H,F=0,y=M===!0?t:e,g=M===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*g,0),f.push(0,g,0),p.push(.5,.5),_++;let R=_;for(let N=0;N<=s;N++){let W=N/s*l+a,Q=Math.cos(W),A=Math.sin(W);D.x=y*A,D.y=m*g,D.z=y*Q,h.push(D.x,D.y,D.z),f.push(0,g,0),w.x=Q*.5+.5,w.y=A*.5*g+.5,p.push(w.x,w.y),_++}for(let N=0;N<s;N++){let O=I+N,W=R+N;M===!0?u.push(W,W+1,O):u.push(W+1,W,O),F+=3}c.addGroup(d,F,M===!0?1:2),d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Le=class i extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){let E=d*f-o;for(let b=0;b<c;b++){let M=b*h-r;_.push(M,-E,0),x.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){let b=E+c*d,M=E+c*(d+1),I=E+1+c*(d+1),w=E+1+c*d;p.push(b,M,w),p.push(M,I,w)}this.setIndex(p),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Es=class i extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new H,f=new H,p=[],_=[],x=[],m=[];for(let d=0;d<=n;d++){let E=[],b=d/n,M=0;d===0&&o===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){let w=I/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+b*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(w+M,1-b),E.push(c++)}u.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){let b=u[d][E+1],M=u[d][E],I=u[d+1][E],w=u[d+1][E+1];(d!==0||o>0)&&p.push(b,M,w),(d!==n-1||l<Math.PI)&&p.push(M,I,w)}this.setIndex(p),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var hn=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ws=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=No,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=Zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Rr=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cr=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function mr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ir=class extends si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:va,endingEnd:va}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _a:r=t,a=2*e-n;break;case xa:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _a:o=t,l=2*n-e;break;case xa:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),x=_*_,m=x*_,d=-f*m+2*f*x-f*_,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*_+1,b=(-1-p)*m+(1.5+p)*x+.5*_,M=p*m-p*x;for(let I=0;I!==a;++I)r[I]=d*o[u+I]+E*o[c+I]+b*o[l+I]+M*o[h+I];return r}},Pr=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Lr=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ge=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mr(e,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mr(t.times,Array),values:mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ir(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case us:e=this.InterpolantFactoryMethodDiscrete;break;case Mr:e=this.InterpolantFactoryMethodLinear;break;case gr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return us;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return gr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Mu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===gr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){let x=e[h+_];if(x!==e[f+_]||x!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Ge.prototype.ValueTypeName="";Ge.prototype.TimeBufferType=Float32Array;Ge.prototype.ValueBufferType=Float32Array;Ge.prototype.DefaultInterpolation=Mr;var Wn=class extends Ge{constructor(t,e,n){super(t,e,n)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=us;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}};Dr.prototype.ValueTypeName="color";var Ur=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}};Ur.prototype.ValueTypeName="number";var Nr=class extends si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},As=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Nr(this.times,this.values,this.getValueSize(),t)}};As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends Ge{constructor(t,e,n){super(t,e,n)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=us;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Fr=class extends Ge{constructor(t,e,n,s){super(t,e,n,s)}};Fr.prototype.ValueTypeName="vector";var vr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Or=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Pc=new Or,zi=class{constructor(t){this.manager=t!==void 0?t:Pc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ri=new WeakMap,Br=class extends zi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=vr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=Ri.get(o);h===void 0&&(h=[],Ri.set(o,h)),h.push({onLoad:e,onError:s})}return o}let a=Ui("img");function l(){u(),e&&e(this);let h=Ri.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}Ri.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),vr.remove(`image:${t}`);let f=Ri.get(this)||[];for(let p=0;p<f.length;p++){let _=f[p];_.onError&&_.onError(h)}Ri.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vr.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Rs=class extends zi{constructor(t){super(t)}load(t,e,n,s){let r=new ge,o=new Br(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ki=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var ma=new ae,Ol=new H,Bl=new H,zr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bi,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ol),Bl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bl),e.updateMatrixWorld(),ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zl=new ae,ls=new H,ga=new H,Sa=class extends zr{constructor(){super(new ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(ls),ga.copy(n.position),ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ga),n.updateMatrixWorld(),s.makeTranslation(-ls.x,-ls.y,-ls.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl,n.coordinateSystem,n.reversedDepth)}},Cs=class extends ki{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sa}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Be=class extends _s{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ba=class extends zr{constructor(){super(new Be(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new ba}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ps=class extends ki{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var kr=class extends ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ls=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Wa="\\[\\]\\.:\\/",Su=new RegExp("["+Wa+"]","g"),Xa="[^"+Wa+"]",bu="[^"+Wa.replace("\\.","")+"]",Tu=/((?:WC+[\/:])*)/.source.replace("WC",Xa),Eu=/(WCOD+)?/.source.replace("WCOD",bu),wu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xa),Au=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xa),Ru=new RegExp("^"+Tu+Eu+wu+Au+"$"),Cu=["material","materials","bones","map"],Ta=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Su,"")}static parseTrackName(t){let e=Ru.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Ta;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gg=new Float32Array(1);function qa(i,t,e,n){let s=Iu(n);switch(e){case Na:return i*t;case no:return i*t/s.components*s.byteLength;case io:return i*t/s.components*s.byteLength;case Oa:return i*t*2/s.components*s.byteLength;case so:return i*t*2/s.components*s.byteLength;case Fa:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case ro:return i*t*4/s.components*s.byteLength;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ao:case co:return Math.max(i,16)*Math.max(t,8)/4;case oo:case lo:return Math.max(i,8)*Math.max(t,8)/2;case ho:case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ro:case Co:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Po:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Do:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Iu(i){switch(i){case dn:case Pa:return{byteLength:1,components:1};case Hi:case La:case tn:return{byteLength:2,components:1};case to:case eo:return{byteLength:2,components:4};case qn:case jr:case fn:return{byteLength:4,components:1};case Da:case Ua:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hr);function eh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Pu(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){let _=h[f],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){let x=h[p];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Du=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ed=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,id=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,od=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Id=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_f=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Af=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Df=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ip=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:Lu,alphahash_pars_fragment:Du,alphamap_fragment:Uu,alphamap_pars_fragment:Nu,alphatest_fragment:Fu,alphatest_pars_fragment:Ou,aomap_fragment:Bu,aomap_pars_fragment:zu,batching_pars_vertex:ku,batching_vertex:Hu,begin_vertex:Vu,beginnormal_vertex:Gu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:Ju,color_fragment:Ku,color_pars_fragment:Qu,color_pars_vertex:ju,color_vertex:td,common:ed,cube_uv_reflection_fragment:nd,defaultnormal_vertex:id,displacementmap_pars_vertex:sd,displacementmap_vertex:rd,emissivemap_fragment:od,emissivemap_pars_fragment:ad,colorspace_fragment:ld,colorspace_pars_fragment:cd,envmap_fragment:hd,envmap_common_pars_fragment:ud,envmap_pars_fragment:dd,envmap_pars_vertex:fd,envmap_physical_pars_fragment:Td,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:vd,fog_pars_fragment:_d,gradientmap_pars_fragment:xd,lightmap_pars_fragment:yd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:Sd,lights_pars_begin:bd,lights_toon_fragment:Ed,lights_toon_pars_fragment:wd,lights_phong_fragment:Ad,lights_phong_pars_fragment:Rd,lights_physical_fragment:Cd,lights_physical_pars_fragment:Id,lights_fragment_begin:Pd,lights_fragment_maps:Ld,lights_fragment_end:Dd,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Nd,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:Od,map_fragment:Bd,map_pars_fragment:zd,map_particle_fragment:kd,map_particle_pars_fragment:Hd,metalnessmap_fragment:Vd,metalnessmap_pars_fragment:Gd,morphinstance_vertex:Wd,morphcolor_vertex:Xd,morphnormal_vertex:qd,morphtarget_pars_vertex:Yd,morphtarget_vertex:$d,normal_fragment_begin:Zd,normal_fragment_maps:Jd,normal_pars_fragment:Kd,normal_pars_vertex:Qd,normal_vertex:jd,normalmap_pars_fragment:tf,clearcoat_normal_fragment_begin:ef,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:rf,opaque_fragment:of,packing:af,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:hf,dithering_pars_fragment:uf,roughnessmap_fragment:df,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:vf,skinbase_vertex:_f,skinning_pars_vertex:xf,skinning_vertex:yf,skinnormal_vertex:Mf,specularmap_fragment:Sf,specularmap_pars_fragment:bf,tonemapping_fragment:Tf,tonemapping_pars_fragment:Ef,transmission_fragment:wf,transmission_pars_fragment:Af,uv_pars_fragment:Rf,uv_pars_vertex:Cf,uv_vertex:If,worldpos_vertex:Pf,background_vert:Lf,background_frag:Df,backgroundCube_vert:Uf,backgroundCube_frag:Nf,cube_vert:Ff,cube_frag:Of,depth_vert:Bf,depth_frag:zf,distanceRGBA_vert:kf,distanceRGBA_frag:Hf,equirect_vert:Vf,equirect_frag:Gf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:qf,meshbasic_frag:Yf,meshlambert_vert:$f,meshlambert_frag:Zf,meshmatcap_vert:Jf,meshmatcap_frag:Kf,meshnormal_vert:Qf,meshnormal_frag:jf,meshphong_vert:tp,meshphong_frag:ep,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:op,points_frag:ap,shadow_vert:lp,shadow_frag:cp,sprite_vert:hp,sprite_frag:up},gt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Mn={basic:{uniforms:Ae([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ae([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ae([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ae([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ae([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ae([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ae([gt.points,gt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ae([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ae([gt.common,gt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ae([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ae([gt.sprite,gt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ae([gt.common,gt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ae([gt.lights,gt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Mn.physical={uniforms:Ae([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Fo={r:0,b:0,g:0},li=new Je,dp=new ae;function fp(i,t,e,n,s,r,o){let a=new Gt(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1,I=_(b);I===null?d(a,l):I&&I.isColor&&(d(I,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){let I=_(M);I&&(I.isCubeTexture||I.mapping===Ds)?(u===void 0&&(u=new Yt(new Qe(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:ai(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dp.makeRotationFromEuler(li)),u.material.toneMapped=jt.getTransfer(I.colorSpace)!==ne,(h!==I||f!==I.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,f=I.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Yt(new Le(2,2),new de({name:"BackgroundMaterial",uniforms:ai(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=jt.getTransfer(I.colorSpace)!==ne,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||f!==I.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=I,f=I.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(Fo,Ga(i)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,M,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:x,addToRenderList:m,dispose:E}}function pp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(g,R,N,O,W){let Q=!1,A=h(O,N,R);r!==A&&(r=A,c(r.object)),Q=p(g,O,N,W),Q&&_(g,O,N,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(g,R,N,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function u(g){return i.deleteVertexArray(g)}function h(g,R,N){let O=N.wireframe===!0,W=n[g.id];W===void 0&&(W={},n[g.id]=W);let Q=W[R.id];Q===void 0&&(Q={},W[R.id]=Q);let A=Q[O];return A===void 0&&(A=f(l()),Q[O]=A),A}function f(g){let R=[],N=[],O=[];for(let W=0;W<e;W++)R[W]=0,N[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:O,object:g,attributes:{},index:null}}function p(g,R,N,O){let W=r.attributes,Q=R.attributes,A=0,L=N.getAttributes();for(let C in L)if(L[C].location>=0){let $=W[C],q=Q[C];if(q===void 0&&(C==="instanceMatrix"&&g.instanceMatrix&&(q=g.instanceMatrix),C==="instanceColor"&&g.instanceColor&&(q=g.instanceColor)),$===void 0||$.attribute!==q||q&&$.data!==q.data)return!0;A++}return r.attributesNum!==A||r.index!==O}function _(g,R,N,O){let W={},Q=R.attributes,A=0,L=N.getAttributes();for(let C in L)if(L[C].location>=0){let $=Q[C];$===void 0&&(C==="instanceMatrix"&&g.instanceMatrix&&($=g.instanceMatrix),C==="instanceColor"&&g.instanceColor&&($=g.instanceColor));let q={};q.attribute=$,$&&$.data&&(q.data=$.data),W[C]=q,A++}r.attributes=W,r.attributesNum=A,r.index=O}function x(){let g=r.newAttributes;for(let R=0,N=g.length;R<N;R++)g[R]=0}function m(g){d(g,0)}function d(g,R){let N=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;N[g]=1,O[g]===0&&(i.enableVertexAttribArray(g),O[g]=1),W[g]!==R&&(i.vertexAttribDivisor(g,R),W[g]=R)}function E(){let g=r.newAttributes,R=r.enabledAttributes;for(let N=0,O=R.length;N<O;N++)R[N]!==g[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function b(g,R,N,O,W,Q,A){A===!0?i.vertexAttribIPointer(g,R,N,W,Q):i.vertexAttribPointer(g,R,N,O,W,Q)}function M(g,R,N,O){x();let W=O.attributes,Q=N.getAttributes(),A=R.defaultAttributeValues;for(let L in Q){let C=Q[L];if(C.location>=0){let X=W[L];if(X===void 0&&(L==="instanceMatrix"&&g.instanceMatrix&&(X=g.instanceMatrix),L==="instanceColor"&&g.instanceColor&&(X=g.instanceColor)),X!==void 0){let $=X.normalized,q=X.itemSize,K=t.get(X);if(K===void 0)continue;let st=K.buffer,Y=K.type,ct=K.bytesPerElement,B=Y===i.INT||Y===i.UNSIGNED_INT||X.gpuType===jr;if(X.isInterleavedBufferAttribute){let k=X.data,rt=k.stride,ot=X.offset;if(k.isInstancedInterleavedBuffer){for(let at=0;at<C.locationSize;at++)d(C.location+at,k.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let at=0;at<C.locationSize;at++)m(C.location+at);i.bindBuffer(i.ARRAY_BUFFER,st);for(let at=0;at<C.locationSize;at++)b(C.location+at,q/C.locationSize,Y,$,rt*ct,(ot+q/C.locationSize*at)*ct,B)}else{if(X.isInstancedBufferAttribute){for(let k=0;k<C.locationSize;k++)d(C.location+k,X.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let k=0;k<C.locationSize;k++)m(C.location+k);i.bindBuffer(i.ARRAY_BUFFER,st);for(let k=0;k<C.locationSize;k++)b(C.location+k,q/C.locationSize,Y,$,q*ct,q/C.locationSize*k*ct,B)}}else if(A!==void 0){let $=A[L];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(C.location,$);break;case 3:i.vertexAttrib3fv(C.location,$);break;case 4:i.vertexAttrib4fv(C.location,$);break;default:i.vertexAttrib1fv(C.location,$)}}}}E()}function I(){F();for(let g in n){let R=n[g];for(let N in R){let O=R[N];for(let W in O)u(O[W].object),delete O[W];delete R[N]}delete n[g]}}function w(g){if(n[g.id]===void 0)return;let R=n[g.id];for(let N in R){let O=R[N];for(let W in O)u(O[W].object),delete O[W];delete R[N]}delete n[g.id]}function D(g){for(let R in n){let N=n[R];if(N[g.id]===void 0)continue;let O=N[g.id];for(let W in O)u(O[W].object),delete O[W];delete N[g.id]}}function F(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function mp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*f[x];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==en&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let F=D===tn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==dn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==fn&&!F)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:I,maxSamples:w}}function vp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new mn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{let E=r?0:n,b=E*4,M=d.clippingState||null;l.value=M,M=u(_,f,b,p);for(let I=0;I!==b;++I)M[I]=e[I];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,_){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let d=p+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,M=p;b!==x;++b,M+=4)o.copy(h[b]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function _p(i){let t=new WeakMap;function e(o,a){return a===Jr?o.mapping=ri:a===Kr&&(o.mapping=oi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jr||a===Kr)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ar(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var qi=4,Lc=[.125,.215,.35,.446,.526,.582],ui=20,Ya=new Be,Dc=new Gt,$a=null,Za=0,Ja=0,Ka=!1,hi=(1+Math.sqrt(5))/2,Xi=1/hi,Uc=[new H(-hi,Xi,0),new H(hi,Xi,0),new H(-Xi,0,hi),new H(Xi,0,hi),new H(0,hi,-Xi),new H(0,hi,Xi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],xp=new H,$i=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=xp}=r;$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Za,Ja),this._renderer.xr.enabled=Ka,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ri||t.mapping===oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Me,minFilter:Me,generateMipmaps:!1,type:tn,format:en,colorSpace:cn,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yp(r)),this._blurMaterial=Mp(r,t,e)}return s}_compileMaterial(t){let e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,s,r){let l=new ye(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Dc),h.toneMapping=un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new ni({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),m=new Yt(new Qe,x),d=!1,E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,d=!0):(x.color.copy(Dc),d=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let I=this._cubeSize;Oo(s,M*I,b>2?I:0,I,I),h.setRenderTarget(s),d&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ri||t.mapping===oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Oo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uc[(s-r-1)%Uc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Yt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ui-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);let d=[],E=0;for(let D=0;D<ui;++D){let F=D/x,y=Math.exp(-F*F/2);d.push(y),D===0?E+=y:D<m&&(E+=2*y)}for(let D=0;D<d.length;D++)d[D]=d[D]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;let M=this._sizeLods[s],I=3*M*(s>b-qi?s-b+qi:0),w=4*(this._cubeSize-M);Oo(e,I,w,3*M,2*M),l.setRenderTarget(e),l.render(h,Ya)}};function yp(i){let t=[],e=[],n=[],s=i,r=i-qi+1+Lc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-qi?l=Lc[o-i+qi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,x=3,m=2,d=1,E=new Float32Array(x*_*p),b=new Float32Array(m*_*p),M=new Float32Array(d*_*p);for(let w=0;w<p;w++){let D=w%3*2/3-1,F=w>2?0:-1,y=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];E.set(y,x*_*w),b.set(f,m*_*w);let g=[w,w,w,w,w,w];M.set(g,d*_*w)}let I=new Ke;I.setAttribute("position",new Fe(E,x)),I.setAttribute("uv",new Fe(b,m)),I.setAttribute("faceIndex",new Fe(M,d)),t.push(I),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(i,t,e){let n=new we(i,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mp(i,t,e){let n=new Float32Array(ui),s=new H(0,1,0);return new de({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Fc(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Oc(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Jr||l===Kr,u=l===ri||l===oi;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new $i(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new $i(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ni("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tp(i,t,e,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(h){let f=[],p=h.index,_=h.attributes.position,x=0;if(p!==null){let E=p.array;x=p.version;for(let b=0,M=E.length;b<M;b+=3){let I=E[b+0],w=E[b+1],D=E[b+2];f.push(I,w,w,D,D,I)}}else if(_!==void 0){let E=_.array;x=_.version;for(let b=0,M=E.length/3-1;b<M;b+=3){let I=b+0,w=b+1,D=b+2;f.push(I,w,w,D,D,I)}}else return;let m=new(Va(f)?vs:gs)(f,1);m.version=x;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ep(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*o,_),e.update(p,n,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];e.update(m,n,1)}function h(f,p,_,x){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,_);let d=0;for(let E=0;E<_;E++)d+=p[E]*x[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ap(i,t,e){let n=new WeakMap,s=new Qt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],b=0;p===!0&&(b=1),_===!0&&(b=2),x===!0&&(b=3);let M=a.attributes.position.count*b,I=1;M>t.maxTextureSize&&(I=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*I*4*h),D=new ps(w,M,I,h);D.type=fn,D.needsUpdate=!0;let F=b*4;for(let g=0;g<h;g++){let R=m[g],N=d[g],O=E[g],W=M*I*4*g;for(let Q=0;Q<R.count;Q++){let A=Q*F;p===!0&&(s.fromBufferAttribute(R,Q),w[W+A+0]=s.x,w[W+A+1]=s.y,w[W+A+2]=s.z,w[W+A+3]=0),_===!0&&(s.fromBufferAttribute(N,Q),w[W+A+4]=s.x,w[W+A+5]=s.y,w[W+A+6]=s.z,w[W+A+7]=0),x===!0&&(s.fromBufferAttribute(O,Q),w[W+A+8]=s.x,w[W+A+9]=s.y,w[W+A+10]=s.z,w[W+A+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:D,size:new Lt(M,I)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Rp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var nh=new ge,Bc=new Ss(1,1),ih=new ps,sh=new Tr,rh=new xs,zc=[],kc=[],Hc=new Float32Array(16),Vc=new Float32Array(9),Gc=new Float32Array(4);function Zi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zc[s];if(r===void 0&&(r=new Float32Array(s),zc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ko(i,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ip(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),_e(e,n)}}function Up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Vc.set(n),i.uniformMatrix3fv(this.addr,!1,Vc),_e(e,n)}}function Np(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),_e(e,n)}}function Fp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Op(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bc.compareFunction=Ba,r=Bc):r=nh,e.setTexture2D(t||r,s)}function Xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||sh,s)}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||rh,s)}function Yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ih,s)}function $p(i){switch(i){case 5126:return Cp;case 35664:return Ip;case 35665:return Pp;case 35666:return Lp;case 35674:return Dp;case 35675:return Up;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return kp;case 36294:return Hp;case 36295:return Vp;case 36296:return Gp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function Zp(i,t){i.uniform1fv(this.addr,t)}function Jp(i,t){let e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Kp(i,t){let e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Qp(i,t){let e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function jp(i,t){let e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tm(i,t){let e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function em(i,t){let e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nm(i,t){i.uniform1iv(this.addr,t)}function im(i,t){i.uniform2iv(this.addr,t)}function sm(i,t){i.uniform3iv(this.addr,t)}function rm(i,t){i.uniform4iv(this.addr,t)}function om(i,t){i.uniform1uiv(this.addr,t)}function am(i,t){i.uniform2uiv(this.addr,t)}function lm(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function hm(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||nh,r[o])}function um(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||sh,r[o])}function dm(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||rh,r[o])}function fm(i,t,e){let n=this.cache,s=t.length,r=ko(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ih,r[o])}function pm(i){switch(i){case 5126:return Zp;case 35664:return Jp;case 35665:return Kp;case 35666:return Qp;case 35674:return jp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return om;case 36294:return am;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}var ja=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}},tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pm(e.type)}},el=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Qa=/(\w+)(\])?(\[|\.)?/g;function Wc(i,t){i.seq.push(t),i.map[t.id]=t}function mm(i,t,e){let n=i.name,s=n.length;for(Qa.lastIndex=0;;){let r=Qa.exec(n),o=Qa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wc(e,c===void 0?new ja(a,i,t):new tl(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new el(a),Wc(e,h)),e=h}}}var Yi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);mm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Xc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var gm=37297,vm=0;function _m(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var qc=new Ht;function xm(i){jt._getMatrix(qc,jt.workingColorSpace,i);let t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case ds:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_m(i.getShaderSource(t),a)}else return r}function ym(i,t){let e=xm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mm(i,t){let e;switch(t){case cc:e="Linear";break;case hc:e="Reinhard";break;case uc:e="Cineon";break;case dc:e="ACESFilmic";break;case pc:e="AgX";break;case mc:e="Neutral";break;case fc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Bo=new H;function Sm(){jt.getLuminanceCoefficients(Bo);let i=Bo.x.toFixed(4),t=Bo.y.toFixed(4),e=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Tm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Em(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zs(i){return i!==""}function $c(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(wm,Rm)}var Am=new Map;function Rm(i,t){let e=Xt[t];if(e===void 0){let n=Am.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nl(e)}var Cm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(i){return i.replace(Cm,Im)}function Im(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ri:case oi:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case oi:t="ENVMAP_MODE_REFRACTION";break}return t}function Um(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zr:t="ENVMAP_BLENDING_MULTIPLY";break;case ac:t="ENVMAP_BLENDING_MIX";break;case lc:t="ENVMAP_BLENDING_ADD";break}return t}function Nm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Fm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Pm(e),c=Lm(e),u=Dm(e),h=Um(e),f=Nm(e),p=bm(e),_=Tm(r),x=s.createProgram(),m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zs).join(`
`),d.length>0&&(d+=`
`)):(m=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),d=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?Xt.tonemapping_pars_fragment:"",e.toneMapping!==un?Mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,ym("linearToOutputTexel",e.outputColorSpace),Sm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=nl(o),o=$c(o,e),o=Zc(o,e),a=nl(a),a=$c(a,e),a=Zc(a,e),o=Jc(o),a=Jc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===za?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=E+m+o,M=E+d+a,I=Xc(s,s.VERTEX_SHADER,b),w=Xc(s,s.FRAGMENT_SHADER,M);s.attachShader(x,I),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(I)||"",W=s.getShaderInfoLog(w)||"",Q=N.trim(),A=O.trim(),L=W.trim(),C=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(C=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,w);else{let $=Yc(s,I,"vertex"),q=Yc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Q+`
`+$+`
`+q)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(A===""||L==="")&&(X=!1);X&&(R.diagnostics={runnable:C,programLog:Q,vertexShader:{log:A,prefix:m},fragmentShader:{log:L,prefix:d}})}s.deleteShader(I),s.deleteShader(w),F=new Yi(s,x),y=Em(s,x)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(x,gm)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=w,this}var Om=0,il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sl(t),e.set(t,n)),n}},sl=class{constructor(t){this.id=Om++,this.code=t,this.usedTimes=0}};function Bm(i,t,e,n,s,r,o){let a=new ms,l=new il,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,g,R,N,O){let W=N.fog,Q=O.geometry,A=y.isMeshStandardMaterial?N.environment:null,L=(y.isMeshStandardMaterial?e:t).get(y.envMap||A),C=L&&L.mapping===Ds?L.image.height:null,X=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let $=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,q=$!==void 0?$.length:0,K=0;Q.morphAttributes.position!==void 0&&(K=1),Q.morphAttributes.normal!==void 0&&(K=2),Q.morphAttributes.color!==void 0&&(K=3);let st,Y,ct,B;if(X){let Kt=Mn[X];st=Kt.vertexShader,Y=Kt.fragmentShader}else st=y.vertexShader,Y=y.fragmentShader,l.update(y),ct=l.getVertexShaderID(y),B=l.getFragmentShaderID(y);let k=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),ot=O.isInstancedMesh===!0,at=O.isBatchedMesh===!0,Rt=!!y.map,Vt=!!y.matcap,P=!!L,qt=!!y.aoMap,Ut=!!y.lightMap,bt=!!y.bumpMap,xt=!!y.normalMap,Jt=!!y.displacementMap,Mt=!!y.emissiveMap,Wt=!!y.metalnessMap,fe=!!y.roughnessMap,Tt=y.anisotropy>0,T=y.clearcoat>0,v=y.dispersion>0,V=y.iridescence>0,j=y.sheen>0,it=y.transmission>0,et=Tt&&!!y.anisotropyMap,Ct=T&&!!y.clearcoatMap,dt=T&&!!y.clearcoatNormalMap,wt=T&&!!y.clearcoatRoughnessMap,Et=V&&!!y.iridescenceMap,ut=V&&!!y.iridescenceThicknessMap,pt=j&&!!y.sheenColorMap,Nt=j&&!!y.sheenRoughnessMap,It=!!y.specularMap,mt=!!y.specularColorMap,Ft=!!y.specularIntensityMap,U=it&&!!y.transmissionMap,lt=it&&!!y.thicknessMap,ft=!!y.gradientMap,yt=!!y.alphaMap,nt=y.alphaTest>0,tt=!!y.alphaHash,vt=!!y.extensions,Ot=un;y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let ee={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:Y,defines:y.defines,customVertexShaderID:ct,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:at,batchingColor:at&&O._colorsTexture!==null,instancing:ot,instancingColor:ot&&O.instanceColor!==null,instancingMorph:ot&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:cn,alphaToCoverage:!!y.alphaToCoverage,map:Rt,matcap:Vt,envMap:P,envMapMode:P&&L.mapping,envMapCubeUVHeight:C,aoMap:qt,lightMap:Ut,bumpMap:bt,normalMap:xt,displacementMap:f&&Jt,emissiveMap:Mt,normalMapObjectSpace:xt&&y.normalMapType===xc,normalMapTangentSpace:xt&&y.normalMapType===No,metalnessMap:Wt,roughnessMap:fe,anisotropy:Tt,anisotropyMap:et,clearcoat:T,clearcoatMap:Ct,clearcoatNormalMap:dt,clearcoatRoughnessMap:wt,dispersion:v,iridescence:V,iridescenceMap:Et,iridescenceThicknessMap:ut,sheen:j,sheenColorMap:pt,sheenRoughnessMap:Nt,specularMap:It,specularColorMap:mt,specularIntensityMap:Ft,transmission:it,transmissionMap:U,thicknessMap:lt,gradientMap:ft,opaque:y.transparent===!1&&y.blending===ti&&y.alphaToCoverage===!1,alphaMap:yt,alphaTest:nt,alphaHash:tt,combine:y.combine,mapUv:Rt&&x(y.map.channel),aoMapUv:qt&&x(y.aoMap.channel),lightMapUv:Ut&&x(y.lightMap.channel),bumpMapUv:bt&&x(y.bumpMap.channel),normalMapUv:xt&&x(y.normalMap.channel),displacementMapUv:Jt&&x(y.displacementMap.channel),emissiveMapUv:Mt&&x(y.emissiveMap.channel),metalnessMapUv:Wt&&x(y.metalnessMap.channel),roughnessMapUv:fe&&x(y.roughnessMap.channel),anisotropyMapUv:et&&x(y.anisotropyMap.channel),clearcoatMapUv:Ct&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&x(y.sheenRoughnessMap.channel),specularMapUv:It&&x(y.specularMap.channel),specularColorMapUv:mt&&x(y.specularColorMap.channel),specularIntensityMapUv:Ft&&x(y.specularIntensityMap.channel),transmissionMapUv:U&&x(y.transmissionMap.channel),thicknessMapUv:lt&&x(y.thicknessMap.channel),alphaMapUv:yt&&x(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(xt||Tt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Q.attributes.uv&&(Rt||yt),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:rt,skinning:O.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:K,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Rt&&y.map.isVideoTexture===!0&&jt.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:Mt&&y.emissiveMap.isVideoTexture===!0&&jt.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===je,flipSided:y.side===be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||at)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function d(y){let g=[];if(y.shaderID?g.push(y.shaderID):(g.push(y.customVertexShaderID),g.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)g.push(R),g.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(E(g,y),b(g,y),g.push(i.outputColorSpace)),g.push(y.customProgramCacheKey),g.join()}function E(y,g){y.push(g.precision),y.push(g.outputColorSpace),y.push(g.envMapMode),y.push(g.envMapCubeUVHeight),y.push(g.mapUv),y.push(g.alphaMapUv),y.push(g.lightMapUv),y.push(g.aoMapUv),y.push(g.bumpMapUv),y.push(g.normalMapUv),y.push(g.displacementMapUv),y.push(g.emissiveMapUv),y.push(g.metalnessMapUv),y.push(g.roughnessMapUv),y.push(g.anisotropyMapUv),y.push(g.clearcoatMapUv),y.push(g.clearcoatNormalMapUv),y.push(g.clearcoatRoughnessMapUv),y.push(g.iridescenceMapUv),y.push(g.iridescenceThicknessMapUv),y.push(g.sheenColorMapUv),y.push(g.sheenRoughnessMapUv),y.push(g.specularMapUv),y.push(g.specularColorMapUv),y.push(g.specularIntensityMapUv),y.push(g.transmissionMapUv),y.push(g.thicknessMapUv),y.push(g.combine),y.push(g.fogExp2),y.push(g.sizeAttenuation),y.push(g.morphTargetsCount),y.push(g.morphAttributeCount),y.push(g.numDirLights),y.push(g.numPointLights),y.push(g.numSpotLights),y.push(g.numSpotLightMaps),y.push(g.numHemiLights),y.push(g.numRectAreaLights),y.push(g.numDirLightShadows),y.push(g.numPointLightShadows),y.push(g.numSpotLightShadows),y.push(g.numSpotLightShadowsWithMaps),y.push(g.numLightProbes),y.push(g.shadowMapType),y.push(g.toneMapping),y.push(g.numClippingPlanes),y.push(g.numClipIntersection),y.push(g.depthPacking)}function b(y,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),g.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){let g=_[y.type],R;if(g){let N=Mn[g];R=Ic.clone(N.uniforms)}else R=y.uniforms;return R}function I(y,g){let R;for(let N=0,O=u.length;N<O;N++){let W=u[N];if(W.cacheKey===g){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Fm(i,g,y,r),u.push(R)),R}function w(y){if(--y.usedTimes===0){let g=u.indexOf(y);u[g]=u[u.length-1],u.pop(),y.destroy()}}function D(y){l.remove(y)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:I,releaseProgram:w,releaseShaderCache:D,programs:u,dispose:F}}function zm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Qc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,f,p,_,x,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=x,d.group=m),t++,d}function a(h,f,p,_,x,m){let d=o(h,f,p,_,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,f,p,_,x,m){let d=o(h,f,p,_,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||km),n.length>1&&n.sort(f||Qc),s.length>1&&s.sort(f||Qc)}function u(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Hm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new jc,i.set(n,[o])):s>=r.length?(o=new jc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Gt};break;case"SpotLight":e={position:new H,direction:new H,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function Gm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wm=0;function Xm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qm(i){let t=new Vm,e=Gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new ae,o=new ae;function a(c){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,E=0,b=0,M=0,I=0,w=0,D=0;c.sort(Xm);for(let y=0,g=c.length;y<g;y++){let R=c[y],N=R.color,O=R.intensity,W=R.distance,Q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*O,h+=N.g*O,f+=N.b*O;else if(R.isLightProbe){for(let A=0;A<9;A++)n.probe[A].addScaledVector(R.sh.coefficients[A],O);D++}else if(R.isDirectionalLight){let A=t.get(R);if(A.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let L=R.shadow,C=e.get(R);C.shadowIntensity=L.intensity,C.shadowBias=L.bias,C.shadowNormalBias=L.normalBias,C.shadowRadius=L.radius,C.shadowMapSize=L.mapSize,n.directionalShadow[p]=C,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=A,p++}else if(R.isSpotLight){let A=t.get(R);A.position.setFromMatrixPosition(R.matrixWorld),A.color.copy(N).multiplyScalar(O),A.distance=W,A.coneCos=Math.cos(R.angle),A.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),A.decay=R.decay,n.spot[x]=A;let L=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,L.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[x]=L.matrix,R.castShadow){let C=e.get(R);C.shadowIntensity=L.intensity,C.shadowBias=L.bias,C.shadowNormalBias=L.normalBias,C.shadowRadius=L.radius,C.shadowMapSize=L.mapSize,n.spotShadow[x]=C,n.spotShadowMap[x]=Q,M++}x++}else if(R.isRectAreaLight){let A=t.get(R);A.color.copy(N).multiplyScalar(O),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=A,m++}else if(R.isPointLight){let A=t.get(R);if(A.color.copy(R.color).multiplyScalar(R.intensity),A.distance=R.distance,A.decay=R.decay,R.castShadow){let L=R.shadow,C=e.get(R);C.shadowIntensity=L.intensity,C.shadowBias=L.bias,C.shadowNormalBias=L.normalBias,C.shadowRadius=L.radius,C.shadowMapSize=L.mapSize,C.shadowCameraNear=L.camera.near,C.shadowCameraFar=L.camera.far,n.pointShadow[_]=C,n.pointShadowMap[_]=Q,n.pointShadowMatrix[_]=R.shadow.matrix,b++}n.point[_]=A,_++}else if(R.isHemisphereLight){let A=t.get(R);A.skyColor.copy(R.color).multiplyScalar(O),A.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[d]=A,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==d||F.numDirectionalShadows!==E||F.numPointShadows!==b||F.numSpotShadows!==M||F.numSpotMaps!==I||F.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=D,F.directionalLength=p,F.pointLength=_,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=d,F.numDirectionalShadows=E,F.numPointShadows=b,F.numSpotShadows=M,F.numSpotMaps=I,F.numLightProbes=D,n.version=Wm++)}function l(c,u){let h=0,f=0,p=0,_=0,x=0,m=u.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){let b=c[d];if(b.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(b.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function th(i){let t=new qm(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ym(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new th(i),t.set(s,[a])):r>=o.length?(a=new th(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jm(i,t,e){let n=new Bi,s=new Lt,r=new Lt,o=new Qt,a=new Rr({depthPacking:_c}),l=new Cr,c={},u=e.maxTextureSize,h={[In]:be,[be]:In,[je]:je},f=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:$m,fragmentShader:Zm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ke;_.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Yt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let d=this.type;this.render=function(w,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=i.getRenderTarget(),g=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Un),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=d!==xn&&this.type===xn,W=d===xn&&this.type!==xn;for(let Q=0,A=w.length;Q<A;Q++){let L=w[Q],C=L.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;s.copy(C.mapSize);let X=C.getFrameExtents();if(s.multiply(X),r.copy(C.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,C.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,C.mapSize.y=r.y)),C.map===null||O===!0||W===!0){let q=this.type!==xn?{minFilter:Oe,magFilter:Oe}:{};C.map!==null&&C.map.dispose(),C.map=new we(s.x,s.y,q),C.map.texture.name=L.name+".shadowMap",C.camera.updateProjectionMatrix()}i.setRenderTarget(C.map),i.clear();let $=C.getViewportCount();for(let q=0;q<$;q++){let K=C.getViewport(q);o.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),N.viewport(o),C.updateMatrices(L,q),n=C.getFrustum(),M(D,F,C.camera,L,this.type)}C.isPointLightShadow!==!0&&this.type===xn&&E(C,F),C.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,g,R)};function E(w,D){let F=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new we(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(D,null,F,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(D,null,F,p,x,null)}function b(w,D,F,y){let g=null,R=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)g=R;else if(g=F.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let N=g.uuid,O=D.uuid,W=c[N];W===void 0&&(W={},c[N]=W);let Q=W[O];Q===void 0&&(Q=g.clone(),W[O]=Q,D.addEventListener("dispose",I)),g=Q}if(g.visible=D.visible,g.wireframe=D.wireframe,y===xn?g.side=D.shadowSide!==null?D.shadowSide:D.side:g.side=D.shadowSide!==null?D.shadowSide:h[D.side],g.alphaMap=D.alphaMap,g.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,g.map=D.map,g.clipShadows=D.clipShadows,g.clippingPlanes=D.clippingPlanes,g.clipIntersection=D.clipIntersection,g.displacementMap=D.displacementMap,g.displacementScale=D.displacementScale,g.displacementBias=D.displacementBias,g.wireframeLinewidth=D.wireframeLinewidth,g.linewidth=D.linewidth,F.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let N=i.properties.get(g);N.light=F}return g}function M(w,D,F,y,g){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&g===xn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);let O=t.update(w),W=w.material;if(Array.isArray(W)){let Q=O.groups;for(let A=0,L=Q.length;A<L;A++){let C=Q[A],X=W[C.materialIndex];if(X&&X.visible){let $=b(w,X,y,g);w.onBeforeShadow(i,w,D,F,O,$,C),i.renderBufferDirect(F,null,O,$,w,C),w.onAfterShadow(i,w,D,F,O,$,C)}}}else if(W.visible){let Q=b(w,W,y,g);w.onBeforeShadow(i,w,D,F,O,Q,null),i.renderBufferDirect(F,null,O,Q,w,null),w.onAfterShadow(i,w,D,F,O,Q,null)}}let N=w.children;for(let O=0,W=N.length;O<W;O++)M(N[O],D,F,y,g)}function I(w){w.target.removeEventListener("dispose",I);for(let F in c){let y=c[F],g=w.target.uuid;g in y&&(y[g].dispose(),delete y[g])}}}var Km={[Vr]:Gr,[Wr]:Yr,[Xr]:$r,[ei]:qr,[Gr]:Vr,[Yr]:Wr,[$r]:Xr,[qr]:ei};function Qm(i,t){function e(){let U=!1,lt=new Qt,ft=null,yt=new Qt(0,0,0,0);return{setMask:function(nt){ft!==nt&&!U&&(i.colorMask(nt,nt,nt,nt),ft=nt)},setLocked:function(nt){U=nt},setClear:function(nt,tt,vt,Ot,ee){ee===!0&&(nt*=Ot,tt*=Ot,vt*=Ot),lt.set(nt,tt,vt,Ot),yt.equals(lt)===!1&&(i.clearColor(nt,tt,vt,Ot),yt.copy(lt))},reset:function(){U=!1,ft=null,yt.set(-1,0,0,0)}}}function n(){let U=!1,lt=!1,ft=null,yt=null,nt=null;return{setReversed:function(tt){if(lt!==tt){let vt=t.get("EXT_clip_control");tt?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),lt=tt;let Ot=nt;nt=null,this.setClear(Ot)}},getReversed:function(){return lt},setTest:function(tt){tt?k(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(tt){ft!==tt&&!U&&(i.depthMask(tt),ft=tt)},setFunc:function(tt){if(lt&&(tt=Km[tt]),yt!==tt){switch(tt){case Vr:i.depthFunc(i.NEVER);break;case Gr:i.depthFunc(i.ALWAYS);break;case Wr:i.depthFunc(i.LESS);break;case ei:i.depthFunc(i.LEQUAL);break;case Xr:i.depthFunc(i.EQUAL);break;case qr:i.depthFunc(i.GEQUAL);break;case Yr:i.depthFunc(i.GREATER);break;case $r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=tt}},setLocked:function(tt){U=tt},setClear:function(tt){nt!==tt&&(lt&&(tt=1-tt),i.clearDepth(tt),nt=tt)},reset:function(){U=!1,ft=null,yt=null,nt=null,lt=!1}}}function s(){let U=!1,lt=null,ft=null,yt=null,nt=null,tt=null,vt=null,Ot=null,ee=null;return{setTest:function(Kt){U||(Kt?k(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Kt){lt!==Kt&&!U&&(i.stencilMask(Kt),lt=Kt)},setFunc:function(Kt,We,Xe){(ft!==Kt||yt!==We||nt!==Xe)&&(i.stencilFunc(Kt,We,Xe),ft=Kt,yt=We,nt=Xe)},setOp:function(Kt,We,Xe){(tt!==Kt||vt!==We||Ot!==Xe)&&(i.stencilOp(Kt,We,Xe),tt=Kt,vt=We,Ot=Xe)},setLocked:function(Kt){U=Kt},setClear:function(Kt){ee!==Kt&&(i.clearStencil(Kt),ee=Kt)},reset:function(){U=!1,lt=null,ft=null,yt=null,nt=null,tt=null,vt=null,Ot=null,ee=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,E=null,b=null,M=null,I=null,w=null,D=new Gt(0,0,0),F=0,y=!1,g=null,R=null,N=null,O=null,W=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,L=0,C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(C)[1]),A=L>=1):C.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),A=L>=2);let X=null,$={},q=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),st=new Qt().fromArray(q),Y=new Qt().fromArray(K);function ct(U,lt,ft,yt){let nt=new Uint8Array(4),tt=i.createTexture();i.bindTexture(U,tt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<ft;vt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(lt+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return tt}let B={};B[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),B[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),B[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(ei),bt(!1),xt(Ea),k(i.CULL_FACE),qt(Un);function k(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function rt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function ot(U,lt){return h[U]!==lt?(i.bindFramebuffer(U,lt),h[U]=lt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function at(U,lt){let ft=p,yt=!1;if(U){ft=f.get(lt),ft===void 0&&(ft=[],f.set(lt,ft));let nt=U.textures;if(ft.length!==nt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,vt=nt.length;tt<vt;tt++)ft[tt]=i.COLOR_ATTACHMENT0+tt;ft.length=nt.length,yt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ft)}function Rt(U){return _!==U?(i.useProgram(U),_=U,!0):!1}let Vt={[Vn]:i.FUNC_ADD,[Wl]:i.FUNC_SUBTRACT,[Xl]:i.FUNC_REVERSE_SUBTRACT};Vt[ql]=i.MIN,Vt[Yl]=i.MAX;let P={[$l]:i.ZERO,[Zl]:i.ONE,[Jl]:i.SRC_COLOR,[_r]:i.SRC_ALPHA,[nc]:i.SRC_ALPHA_SATURATE,[tc]:i.DST_COLOR,[Ql]:i.DST_ALPHA,[Kl]:i.ONE_MINUS_SRC_COLOR,[xr]:i.ONE_MINUS_SRC_ALPHA,[ec]:i.ONE_MINUS_DST_COLOR,[jl]:i.ONE_MINUS_DST_ALPHA,[ic]:i.CONSTANT_COLOR,[sc]:i.ONE_MINUS_CONSTANT_COLOR,[rc]:i.CONSTANT_ALPHA,[oc]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(U,lt,ft,yt,nt,tt,vt,Ot,ee,Kt){if(U===Un){x===!0&&(rt(i.BLEND),x=!1);return}if(x===!1&&(k(i.BLEND),x=!0),U!==Gl){if(U!==m||Kt!==y){if((d!==Vn||M!==Vn)&&(i.blendEquation(i.FUNC_ADD),d=Vn,M=Vn),Kt)switch(U){case ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFunc(i.ONE,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ca:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ra:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ca:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}E=null,b=null,I=null,w=null,D.set(0,0,0),F=0,m=U,y=Kt}return}nt=nt||lt,tt=tt||ft,vt=vt||yt,(lt!==d||nt!==M)&&(i.blendEquationSeparate(Vt[lt],Vt[nt]),d=lt,M=nt),(ft!==E||yt!==b||tt!==I||vt!==w)&&(i.blendFuncSeparate(P[ft],P[yt],P[tt],P[vt]),E=ft,b=yt,I=tt,w=vt),(Ot.equals(D)===!1||ee!==F)&&(i.blendColor(Ot.r,Ot.g,Ot.b,ee),D.copy(Ot),F=ee),m=U,y=!1}function Ut(U,lt){U.side===je?rt(i.CULL_FACE):k(i.CULL_FACE);let ft=U.side===be;lt&&(ft=!ft),bt(ft),U.blending===ti&&U.transparent===!1?qt(Un):qt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let yt=U.stencilWrite;a.setTest(yt),yt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(U){g!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),g=U)}function xt(U){U!==kl?(k(i.CULL_FACE),U!==R&&(U===Ea?i.cullFace(i.BACK):U===Hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),R=U}function Jt(U){U!==N&&(A&&i.lineWidth(U),N=U)}function Mt(U,lt,ft){U?(k(i.POLYGON_OFFSET_FILL),(O!==lt||W!==ft)&&(i.polygonOffset(lt,ft),O=lt,W=ft)):rt(i.POLYGON_OFFSET_FILL)}function Wt(U){U?k(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function fe(U){U===void 0&&(U=i.TEXTURE0+Q-1),X!==U&&(i.activeTexture(U),X=U)}function Tt(U,lt,ft){ft===void 0&&(X===null?ft=i.TEXTURE0+Q-1:ft=X);let yt=$[ft];yt===void 0&&(yt={type:void 0,texture:void 0},$[ft]=yt),(yt.type!==U||yt.texture!==lt)&&(X!==ft&&(i.activeTexture(ft),X=ft),i.bindTexture(U,lt||B[U]),yt.type=U,yt.texture=lt)}function T(){let U=$[X];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(U){st.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),st.copy(U))}function Nt(U){Y.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Y.copy(U))}function It(U,lt){let ft=c.get(lt);ft===void 0&&(ft=new WeakMap,c.set(lt,ft));let yt=ft.get(U);yt===void 0&&(yt=i.getUniformBlockIndex(lt,U.name),ft.set(U,yt))}function mt(U,lt){let yt=c.get(lt).get(U);l.get(lt)!==yt&&(i.uniformBlockBinding(lt,yt,U.__bindingPointIndex),l.set(lt,yt))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},X=null,$={},h={},f=new WeakMap,p=[],_=null,x=!1,m=null,d=null,E=null,b=null,M=null,I=null,w=null,D=new Gt(0,0,0),F=0,y=!1,g=null,R=null,N=null,O=null,W=null,st.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:rt,bindFramebuffer:ot,drawBuffers:at,useProgram:Rt,setBlending:qt,setMaterial:Ut,setFlipSided:bt,setCullFace:xt,setLineWidth:Jt,setPolygonOffset:Mt,setScissorTest:Wt,activeTexture:fe,bindTexture:Tt,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:V,texImage2D:Et,texImage3D:ut,updateUBOMapping:It,uniformBlockBinding:mt,texStorage2D:dt,texStorage3D:wt,texSubImage2D:j,texSubImage3D:it,compressedTexSubImage2D:et,compressedTexSubImage3D:Ct,scissor:pt,viewport:Nt,reset:Ft}}function jm(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,v){return p?new OffscreenCanvas(T,v):Ui("canvas")}function x(T,v,V){let j=1,it=Tt(T);if((it.width>V||it.height>V)&&(j=V/Math.max(it.width,it.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let et=Math.floor(j*it.width),Ct=Math.floor(j*it.height);h===void 0&&(h=_(et,Ct));let dt=v?_(et,Ct):h;return dt.width=et,dt.height=Ct,dt.getContext("2d").drawImage(T,0,0,et,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+et+"x"+Ct+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,v,V,j,it=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=v;if(v===i.RED&&(V===i.FLOAT&&(et=i.R32F),V===i.HALF_FLOAT&&(et=i.R16F),V===i.UNSIGNED_BYTE&&(et=i.R8)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.R8UI),V===i.UNSIGNED_SHORT&&(et=i.R16UI),V===i.UNSIGNED_INT&&(et=i.R32UI),V===i.BYTE&&(et=i.R8I),V===i.SHORT&&(et=i.R16I),V===i.INT&&(et=i.R32I)),v===i.RG&&(V===i.FLOAT&&(et=i.RG32F),V===i.HALF_FLOAT&&(et=i.RG16F),V===i.UNSIGNED_BYTE&&(et=i.RG8)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RG8UI),V===i.UNSIGNED_SHORT&&(et=i.RG16UI),V===i.UNSIGNED_INT&&(et=i.RG32UI),V===i.BYTE&&(et=i.RG8I),V===i.SHORT&&(et=i.RG16I),V===i.INT&&(et=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGB8UI),V===i.UNSIGNED_SHORT&&(et=i.RGB16UI),V===i.UNSIGNED_INT&&(et=i.RGB32UI),V===i.BYTE&&(et=i.RGB8I),V===i.SHORT&&(et=i.RGB16I),V===i.INT&&(et=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),V===i.UNSIGNED_INT&&(et=i.RGBA32UI),V===i.BYTE&&(et=i.RGBA8I),V===i.SHORT&&(et=i.RGBA16I),V===i.INT&&(et=i.RGBA32I)),v===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),v===i.RGBA){let Ct=it?ds:jt.getTransfer(j);V===i.FLOAT&&(et=i.RGBA32F),V===i.HALF_FLOAT&&(et=i.RGBA16F),V===i.UNSIGNED_BYTE&&(et=Ct===ne?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(T,v){let V;return T?v===null||v===qn||v===Vi?V=i.DEPTH24_STENCIL8:v===fn?V=i.DEPTH32F_STENCIL8:v===Hi&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qn||v===Vi?V=i.DEPTH_COMPONENT24:v===fn?V=i.DEPTH_COMPONENT32F:v===Hi&&(V=i.DEPTH_COMPONENT16),V}function I(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Oe&&T.minFilter!==Me?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function w(T){let v=T.target;v.removeEventListener("dispose",w),F(v),v.isVideoTexture&&u.delete(v)}function D(T){let v=T.target;v.removeEventListener("dispose",D),g(v)}function F(T){let v=n.get(T);if(v.__webglInit===void 0)return;let V=T.source,j=f.get(V);if(j){let it=j[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&y(T),Object.keys(j).length===0&&f.delete(V)}n.remove(T)}function y(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let V=T.source,j=f.get(V);delete j[v.__cacheKey],o.memory.textures--}function g(T){let v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let it=0;it<v.__webglFramebuffer[j].length;it++)i.deleteFramebuffer(v.__webglFramebuffer[j][it]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=T.textures;for(let j=0,it=V.length;j<it;j++){let et=n.get(V[j]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(V[j])}n.remove(T)}let R=0;function N(){R=0}function O(){let T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function W(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Q(T,v){let V=n.get(T);if(T.isVideoTexture&&Wt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(V,T,v);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function A(T,v){let V=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){B(V,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function L(T,v){let V=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){B(V,T,v);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function C(T,v){let V=n.get(T);if(T.version>0&&V.__version!==T.version){k(V,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let X={[Pi]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[yr]:i.MIRRORED_REPEAT},$={[Oe]:i.NEAREST,[gc]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[Me]:i.LINEAR,[Qr]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},q={[yc]:i.NEVER,[wc]:i.ALWAYS,[Mc]:i.LESS,[Ba]:i.LEQUAL,[Sc]:i.EQUAL,[Ec]:i.GEQUAL,[bc]:i.GREATER,[Tc]:i.NOTEQUAL};function K(T,v){if(v.type===fn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Me||v.magFilter===Qr||v.magFilter===Us||v.magFilter===yn||v.minFilter===Me||v.minFilter===Qr||v.minFilter===Us||v.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,X[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,X[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,X[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,$[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,$[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,q[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Oe||v.minFilter!==Us&&v.minFilter!==yn||v.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function st(T,v){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",w));let j=v.source,it=f.get(j);it===void 0&&(it={},f.set(j,it));let et=W(v);if(et!==T.__cacheKey){it[et]===void 0&&(it[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),it[et].usedTimes++;let Ct=it[T.__cacheKey];Ct!==void 0&&(it[T.__cacheKey].usedTimes--,Ct.usedTimes===0&&y(v)),T.__cacheKey=et,T.__webglTexture=it[et].texture}return V}function Y(T,v,V){return Math.floor(Math.floor(T/V)/v)}function ct(T,v,V,j){let et=T.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,V,j,v.data);else{et.sort((ut,pt)=>ut.start-pt.start);let Ct=0;for(let ut=1;ut<et.length;ut++){let pt=et[Ct],Nt=et[ut],It=pt.start+pt.count,mt=Y(Nt.start,v.width,4),Ft=Y(pt.start,v.width,4);Nt.start<=It+1&&mt===Ft&&Y(Nt.start+Nt.count-1,v.width,4)===mt?pt.count=Math.max(pt.count,Nt.start+Nt.count-pt.start):(++Ct,et[Ct]=Nt)}et.length=Ct+1;let dt=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),Et=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ut=0,pt=et.length;ut<pt;ut++){let Nt=et[ut],It=Math.floor(Nt.start/4),mt=Math.ceil(Nt.count/4),Ft=It%v.width,U=Math.floor(It/v.width),lt=mt,ft=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Ft,U,lt,ft,V,j,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function B(T,v,V){let j=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=i.TEXTURE_3D);let it=st(T,v),et=v.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+V);let Ct=n.get(et);if(et.version!==Ct.__version||it===!0){e.activeTexture(i.TEXTURE0+V);let dt=jt.getPrimaries(jt.workingColorSpace),wt=v.colorSpace===De?null:jt.getPrimaries(v.colorSpace),Et=v.colorSpace===De||dt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let ut=x(v.image,!1,s.maxTextureSize);ut=fe(v,ut);let pt=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),It=b(v.internalFormat,pt,Nt,v.colorSpace,v.isVideoTexture);K(j,v);let mt,Ft=v.mipmaps,U=v.isVideoTexture!==!0,lt=Ct.__version===void 0||it===!0,ft=et.dataReady,yt=I(v,ut);if(v.isDepthTexture)It=M(v.format===Gi,v.type),lt&&(U?e.texStorage2D(i.TEXTURE_2D,1,It,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,It,ut.width,ut.height,0,pt,Nt,null));else if(v.isDataTexture)if(Ft.length>0){U&&lt&&e.texStorage2D(i.TEXTURE_2D,yt,It,Ft[0].width,Ft[0].height);for(let nt=0,tt=Ft.length;nt<tt;nt++)mt=Ft[nt],U?ft&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,mt.width,mt.height,pt,Nt,mt.data):e.texImage2D(i.TEXTURE_2D,nt,It,mt.width,mt.height,0,pt,Nt,mt.data);v.generateMipmaps=!1}else U?(lt&&e.texStorage2D(i.TEXTURE_2D,yt,It,ut.width,ut.height),ft&&ct(v,ut,pt,Nt)):e.texImage2D(i.TEXTURE_2D,0,It,ut.width,ut.height,0,pt,Nt,ut.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,It,Ft[0].width,Ft[0].height,ut.depth);for(let nt=0,tt=Ft.length;nt<tt;nt++)if(mt=Ft[nt],v.format!==en)if(pt!==null)if(U){if(ft)if(v.layerUpdates.size>0){let vt=qa(mt.width,mt.height,v.format,v.type);for(let Ot of v.layerUpdates){let ee=mt.data.subarray(Ot*vt/mt.data.BYTES_PER_ELEMENT,(Ot+1)*vt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Ot,mt.width,mt.height,1,pt,ee)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,ut.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,It,mt.width,mt.height,ut.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ft&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,ut.depth,pt,Nt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,It,mt.width,mt.height,ut.depth,0,pt,Nt,mt.data)}else{U&&lt&&e.texStorage2D(i.TEXTURE_2D,yt,It,Ft[0].width,Ft[0].height);for(let nt=0,tt=Ft.length;nt<tt;nt++)mt=Ft[nt],v.format!==en?pt!==null?U?ft&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,It,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ft&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,mt.width,mt.height,pt,Nt,mt.data):e.texImage2D(i.TEXTURE_2D,nt,It,mt.width,mt.height,0,pt,Nt,mt.data)}else if(v.isDataArrayTexture)if(U){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,It,ut.width,ut.height,ut.depth),ft)if(v.layerUpdates.size>0){let nt=qa(ut.width,ut.height,v.format,v.type);for(let tt of v.layerUpdates){let vt=ut.data.subarray(tt*nt/ut.data.BYTES_PER_ELEMENT,(tt+1)*nt/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ut.width,ut.height,1,pt,Nt,vt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,pt,Nt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,ut.width,ut.height,ut.depth,0,pt,Nt,ut.data);else if(v.isData3DTexture)U?(lt&&e.texStorage3D(i.TEXTURE_3D,yt,It,ut.width,ut.height,ut.depth),ft&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,pt,Nt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,It,ut.width,ut.height,ut.depth,0,pt,Nt,ut.data);else if(v.isFramebufferTexture){if(lt)if(U)e.texStorage2D(i.TEXTURE_2D,yt,It,ut.width,ut.height);else{let nt=ut.width,tt=ut.height;for(let vt=0;vt<yt;vt++)e.texImage2D(i.TEXTURE_2D,vt,It,nt,tt,0,pt,Nt,null),nt>>=1,tt>>=1}}else if(Ft.length>0){if(U&&lt){let nt=Tt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,yt,It,nt.width,nt.height)}for(let nt=0,tt=Ft.length;nt<tt;nt++)mt=Ft[nt],U?ft&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,pt,Nt,mt):e.texImage2D(i.TEXTURE_2D,nt,It,pt,Nt,mt);v.generateMipmaps=!1}else if(U){if(lt){let nt=Tt(ut);e.texStorage2D(i.TEXTURE_2D,yt,It,nt.width,nt.height)}ft&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Nt,ut)}else e.texImage2D(i.TEXTURE_2D,0,It,pt,Nt,ut);m(v)&&d(j),Ct.__version=et.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function k(T,v,V){if(v.image.length!==6)return;let j=st(T,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);let et=n.get(it);if(it.version!==et.__version||j===!0){e.activeTexture(i.TEXTURE0+V);let Ct=jt.getPrimaries(jt.workingColorSpace),dt=v.colorSpace===De?null:jt.getPrimaries(v.colorSpace),wt=v.colorSpace===De||Ct===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Et=v.isCompressedTexture||v.image[0].isCompressedTexture,ut=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let tt=0;tt<6;tt++)!Et&&!ut?pt[tt]=x(v.image[tt],!0,s.maxCubemapSize):pt[tt]=ut?v.image[tt].image:v.image[tt],pt[tt]=fe(v,pt[tt]);let Nt=pt[0],It=r.convert(v.format,v.colorSpace),mt=r.convert(v.type),Ft=b(v.internalFormat,It,mt,v.colorSpace),U=v.isVideoTexture!==!0,lt=et.__version===void 0||j===!0,ft=it.dataReady,yt=I(v,Nt);K(i.TEXTURE_CUBE_MAP,v);let nt;if(Et){U&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Ft,Nt.width,Nt.height);for(let tt=0;tt<6;tt++){nt=pt[tt].mipmaps;for(let vt=0;vt<nt.length;vt++){let Ot=nt[vt];v.format!==en?It!==null?U?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,Ot.width,Ot.height,It,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,Ft,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,Ot.width,Ot.height,It,mt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,Ft,Ot.width,Ot.height,0,It,mt,Ot.data)}}}else{if(nt=v.mipmaps,U&&lt){nt.length>0&&yt++;let tt=Tt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Ft,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ut){U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,pt[tt].width,pt[tt].height,It,mt,pt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,pt[tt].width,pt[tt].height,0,It,mt,pt[tt].data);for(let vt=0;vt<nt.length;vt++){let ee=nt[vt].image[tt].image;U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,ee.width,ee.height,It,mt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,Ft,ee.width,ee.height,0,It,mt,ee.data)}}else{U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,It,mt,pt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ft,It,mt,pt[tt]);for(let vt=0;vt<nt.length;vt++){let Ot=nt[vt];U?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,It,mt,Ot.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,Ft,It,mt,Ot.image[tt])}}}m(v)&&d(i.TEXTURE_CUBE_MAP),et.__version=it.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function rt(T,v,V,j,it,et){let Ct=r.convert(V.format,V.colorSpace),dt=r.convert(V.type),wt=b(V.internalFormat,Ct,dt,V.colorSpace),Et=n.get(v),ut=n.get(V);if(ut.__renderTarget=v,!Et.__hasExternalTextures){let pt=Math.max(1,v.width>>et),Nt=Math.max(1,v.height>>et);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,et,wt,pt,Nt,v.depth,0,Ct,dt,null):e.texImage2D(it,et,wt,pt,Nt,0,Ct,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,it,ut.__webglTexture,0,Jt(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,it,ut.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(T,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let j=v.depthTexture,it=j&&j.isDepthTexture?j.type:null,et=M(v.stencilBuffer,it),Ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Jt(v);Mt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,et,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,T)}else{let j=v.textures;for(let it=0;it<j.length;it++){let et=j[it],Ct=r.convert(et.format,et.colorSpace),dt=r.convert(et.type),wt=b(et.internalFormat,Ct,dt,et.colorSpace),Et=Jt(v);V&&Mt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,wt,v.width,v.height):Mt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,wt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,wt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);let it=j.__webglTexture,et=Jt(v);if(v.depthTexture.format===Li)Mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(v.depthTexture.format===Gi)Mt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Rt(T){let v=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",it)};j.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=j}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let j=T.texture.mipmaps;j&&j.length>0?at(v.__webglFramebuffer[0],T):at(v.__webglFramebuffer,T)}else if(V){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=i.createRenderbuffer(),ot(v.__webglDepthbuffer[j],T,!1);else{let it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,et)}}else{let j=T.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ot(v.__webglDepthbuffer,T,!1);else{let it=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(T,v,V){let j=n.get(T);v!==void 0&&rt(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Rt(T)}function P(T){let v=T.texture,V=n.get(T),j=n.get(v);T.addEventListener("dispose",D);let it=T.textures,et=T.isWebGLCubeRenderTarget===!0,Ct=it.length>1;if(Ct||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,o.memory.textures++),et){V.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[dt]=[];for(let wt=0;wt<v.mipmaps.length;wt++)V.__webglFramebuffer[dt][wt]=i.createFramebuffer()}else V.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)V.__webglFramebuffer[dt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let dt=0,wt=it.length;dt<wt;dt++){let Et=n.get(it[dt]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Mt(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let dt=0;dt<it.length;dt++){let wt=it[dt];V.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[dt]);let Et=r.convert(wt.format,wt.colorSpace),ut=r.convert(wt.type),pt=b(wt.internalFormat,Et,ut,wt.colorSpace,T.isXRRenderTarget===!0),Nt=Jt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,V.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),K(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let wt=0;wt<v.mipmaps.length;wt++)rt(V.__webglFramebuffer[dt][wt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,wt);else rt(V.__webglFramebuffer[dt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let dt=0,wt=it.length;dt<wt;dt++){let Et=it[dt],ut=n.get(Et),pt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,ut.__webglTexture),K(pt,Et),rt(V.__webglFramebuffer,T,Et,i.COLOR_ATTACHMENT0+dt,pt,0),m(Et)&&d(pt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),K(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let wt=0;wt<v.mipmaps.length;wt++)rt(V.__webglFramebuffer[wt],T,v,i.COLOR_ATTACHMENT0,dt,wt);else rt(V.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,dt,0);m(v)&&d(dt),e.unbindTexture()}T.depthBuffer&&Rt(T)}function qt(T){let v=T.textures;for(let V=0,j=v.length;V<j;V++){let it=v[V];if(m(it)){let et=E(T),Ct=n.get(it).__webglTexture;e.bindTexture(et,Ct),d(et),e.unbindTexture()}}}let Ut=[],bt=[];function xt(T){if(T.samples>0){if(Mt(T)===!1){let v=T.textures,V=T.width,j=T.height,it=i.COLOR_BUFFER_BIT,et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(T),dt=v.length>1;if(dt)for(let Et=0;Et<v.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);let wt=T.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Et=0;Et<v.length;Et++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let ut=n.get(v[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,V,j,0,0,V,j,it,i.NEAREST),l===!0&&(Ut.length=0,bt.length=0,Ut.push(i.COLOR_ATTACHMENT0+Et),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ut.push(et),bt.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Et=0;Et<v.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Et]);let ut=n.get(v[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Jt(T){return Math.min(s.maxSamples,T.samples)}function Mt(T){let v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Wt(T){let v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function fe(T,v){let V=T.colorSpace,j=T.format,it=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==cn&&V!==De&&(jt.getTransfer(V)===ne?(j!==en||it!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=A,this.setTexture3D=L,this.setTextureCube=C,this.rebindTextures=Vt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Mt}function tg(i,t){function e(n,s=De){let r,o=jt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===to)return i.UNSIGNED_SHORT_4_4_4_4;if(n===eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Da)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ua)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pa)return i.BYTE;if(n===La)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===jr)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===tn)return i.HALF_FLOAT;if(n===Na)return i.ALPHA;if(n===Fa)return i.RGB;if(n===en)return i.RGBA;if(n===Li)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===no)return i.RED;if(n===io)return i.RED_INTEGER;if(n===Oa)return i.RG;if(n===so)return i.RG_INTEGER;if(n===ro)return i.RGBA_INTEGER;if(n===Ns||n===Fs||n===Os||n===Bs)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===ao||n===lo||n===co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ho||n===uo)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===yo||n===Mo||n===So||n===bo||n===To||n===Eo||n===wo||n===Ao)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===po)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===So)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Co||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ro)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Po||n===Lo||n===Do||n===Uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new bs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new de({vertexShader:eg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new Le(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ol=class extends Pn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null,x=typeof XRWebGLBinding<"u",m=new rl,d={},E=e.getContextAttributes(),b=null,M=null,I=[],w=[],D=new Lt,F=null,y=new ye;y.viewport=new Qt;let g=new ye;g.viewport=new Qt;let R=[y,g],N=new kr,O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let k=I[B];return k===void 0&&(k=new Oi,I[B]=k),k.getTargetRaySpace()},this.getControllerGrip=function(B){let k=I[B];return k===void 0&&(k=new Oi,I[B]=k),k.getGripSpace()},this.getHand=function(B){let k=I[B];return k===void 0&&(k=new Oi,I[B]=k),k.getHandSpace()};function Q(B){let k=w.indexOf(B.inputSource);if(k===-1)return;let rt=I[k];rt!==void 0&&(rt.update(B.inputSource,B.frame,c||o),rt.dispatchEvent({type:B.type,data:B.inputSource}))}function A(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",A),s.removeEventListener("inputsourceschange",L);for(let B=0;B<I.length;B++){let k=w[B];k!==null&&(w[B]=null,I[B].disconnect(k))}O=null,W=null,m.reset();for(let B in d)delete d[B];t.setRenderTarget(b),p=null,f=null,h=null,s=null,M=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",A),s.addEventListener("inputsourceschange",L),E.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ot=null,at=null;E.depth&&(at=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=E.stencil?Gi:Li,ot=E.stencil?Vi:qn);let Rt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Rt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new we(f.textureWidth,f.textureHeight,{format:en,type:dn,depthTexture:new Ss(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new we(p.framebufferWidth,p.framebufferHeight,{format:en,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(B){for(let k=0;k<B.removed.length;k++){let rt=B.removed[k],ot=w.indexOf(rt);ot>=0&&(w[ot]=null,I[ot].disconnect(rt))}for(let k=0;k<B.added.length;k++){let rt=B.added[k],ot=w.indexOf(rt);if(ot===-1){for(let Rt=0;Rt<I.length;Rt++)if(Rt>=w.length){w.push(rt),ot=Rt;break}else if(w[Rt]===null){w[Rt]=rt,ot=Rt;break}if(ot===-1)break}let at=I[ot];at&&at.connect(rt)}}let C=new H,X=new H;function $(B,k,rt){C.setFromMatrixPosition(k.matrixWorld),X.setFromMatrixPosition(rt.matrixWorld);let ot=C.distanceTo(X),at=k.projectionMatrix.elements,Rt=rt.projectionMatrix.elements,Vt=at[14]/(at[10]-1),P=at[14]/(at[10]+1),qt=(at[9]+1)/at[5],Ut=(at[9]-1)/at[5],bt=(at[8]-1)/at[0],xt=(Rt[8]+1)/Rt[0],Jt=Vt*bt,Mt=Vt*xt,Wt=ot/(-bt+xt),fe=Wt*-bt;if(k.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(fe),B.translateZ(Wt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),at[10]===-1)B.projectionMatrix.copy(k.projectionMatrix),B.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let Tt=Vt+Wt,T=P+Wt,v=Jt-fe,V=Mt+(ot-fe),j=qt*P/T*Tt,it=Ut*P/T*Tt;B.projectionMatrix.makePerspective(v,V,j,it,Tt,T),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function q(B,k){k===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(k.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let k=B.near,rt=B.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),N.near=g.near=y.near=k,N.far=g.far=y.far=rt,(O!==N.near||W!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,W=N.far),N.layers.mask=B.layers.mask|6,y.layers.mask=N.layers.mask&3,g.layers.mask=N.layers.mask&5;let ot=B.parent,at=N.cameras;q(N,ot);for(let Rt=0;Rt<at.length;Rt++)q(at[Rt],ot);at.length===2?$(N,y,g):N.projectionMatrix.copy(y.projectionMatrix),K(B,N,ot)};function K(B,k,rt){rt===null?B.matrix.copy(k.matrixWorld):(B.matrix.copy(rt.matrixWorld),B.matrix.invert(),B.matrix.multiply(k.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(k.projectionMatrix),B.projectionMatrixInverse.copy(k.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Di*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(B){return d[B]};let st=null;function Y(B,k){if(u=k.getViewerPose(c||o),_=k,u!==null){let rt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let ot=!1;rt.length!==N.cameras.length&&(N.cameras.length=0,ot=!0);for(let P=0;P<rt.length;P++){let qt=rt[P],Ut=null;if(p!==null)Ut=p.getViewport(qt);else{let xt=h.getViewSubImage(f,qt);Ut=xt.viewport,P===0&&(t.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(M))}let bt=R[P];bt===void 0&&(bt=new ye,bt.layers.enable(P),bt.viewport=new Qt,R[P]=bt),bt.matrix.fromArray(qt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(qt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),P===0&&(N.matrix.copy(bt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ot===!0&&N.cameras.push(bt)}let at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let P=h.getDepthInformation(rt[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(at&&at.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let P=0;P<rt.length;P++){let qt=rt[P].camera;if(qt){let Ut=d[qt];Ut||(Ut=new bs,d[qt]=Ut);let bt=h.getCameraImage(qt);Ut.sourceTexture=bt}}}}for(let rt=0;rt<I.length;rt++){let ot=w[rt],at=I[rt];ot!==null&&at!==void 0&&at.update(ot,k,c||o)}st&&st(B,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}let ct=new eh;ct.setAnimationLoop(Y),this.setAnimationLoop=function(B){st=B},this.dispose=function(){}}},ci=new Je,ig=new ae;function sg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ga(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===be&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===be&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let E=t.get(d),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,ci.copy(M),ci.x*=-1,ci.y*=-1,ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(ci)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===be&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){let M=b.program;n.uniformBlockBinding(E,M)}function c(E,b){let M=s[E.id];M===void 0&&(_(E),M=u(E),s[E.id]=M,E.addEventListener("dispose",m));let I=b.program;n.updateUBOMapping(E,I);let w=t.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function u(E){let b=h();E.__bindingPointIndex=b;let M=i.createBuffer(),I=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let b=s[E.id],M=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,D=M.length;w<D;w++){let F=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,g=F.length;y<g;y++){let R=F[y];if(p(R,w,y,I)===!0){let N=R.__offset,O=Array.isArray(R.value)?R.value:[R.value],W=0;for(let Q=0;Q<O.length;Q++){let A=O[Q],L=x(A);typeof A=="number"||typeof A=="boolean"?(R.__data[0]=A,i.bufferSubData(i.UNIFORM_BUFFER,N+W,R.__data)):A.isMatrix3?(R.__data[0]=A.elements[0],R.__data[1]=A.elements[1],R.__data[2]=A.elements[2],R.__data[3]=0,R.__data[4]=A.elements[3],R.__data[5]=A.elements[4],R.__data[6]=A.elements[5],R.__data[7]=0,R.__data[8]=A.elements[6],R.__data[9]=A.elements[7],R.__data[10]=A.elements[8],R.__data[11]=0):(A.toArray(R.__data,W),W+=L.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,M,I){let w=E.value,D=b+"_"+M;if(I[D]===void 0)return typeof w=="number"||typeof w=="boolean"?I[D]=w:I[D]=w.clone(),!0;{let F=I[D];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return I[D]=w,!0}else if(F.equals(w)===!1)return F.copy(w),!0}return!1}function _(E){let b=E.uniforms,M=0,I=16;for(let D=0,F=b.length;D<F;D++){let y=Array.isArray(b[D])?b[D]:[b[D]];for(let g=0,R=y.length;g<R;g++){let N=y[g],O=Array.isArray(N.value)?N.value:[N.value];for(let W=0,Q=O.length;W<Q;W++){let A=O[W],L=x(A),C=M%I,X=C%L.boundary,$=C+X;M+=X,$!==0&&I-$<L.storage&&(M+=I-$),N.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=L.storage}}}let w=M%I;return w>0&&(M+=I-w),E.__size=M,E.__cache={},this}function x(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var zo=class{constructor(t={}){let{canvas:e=Ac(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,I=!1;this._outputColorSpace=pe;let w=0,D=0,F=null,y=-1,g=null,R=new Qt,N=new Qt,O=null,W=new Gt(0),Q=0,A=e.width,L=e.height,C=1,X=null,$=null,q=new Qt(0,0,A,L),K=new Qt(0,0,A,L),st=!1,Y=new Bi,ct=!1,B=!1,k=new ae,rt=new H,ot=new Qt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Vt(){return F===null?C:1}let P=n;function qt(S,z){return e.getContext(S,z)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hr}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),P===null){let z="webgl2";if(P=qt(z,S),P===null)throw qt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ut,bt,xt,Jt,Mt,Wt,fe,Tt,T,v,V,j,it,et,Ct,dt,wt,Et,ut,pt,Nt,It,mt,Ft;function U(){Ut=new bp(P),Ut.init(),It=new tg(P,Ut),bt=new gp(P,Ut,t,It),xt=new Qm(P,Ut),bt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),Jt=new wp(P),Mt=new zm,Wt=new jm(P,Ut,xt,Mt,bt,It,Jt),fe=new _p(M),Tt=new Sp(M),T=new Pu(P),mt=new pp(P,T),v=new Tp(P,T,Jt,mt),V=new Rp(P,v,T,Jt),ut=new Ap(P,bt,Wt),dt=new vp(Mt),j=new Bm(M,fe,Tt,Ut,bt,mt,dt),it=new sg(M,Mt),et=new Hm,Ct=new Ym(Ut),Et=new fp(M,fe,Tt,xt,V,p,l),wt=new Jm(M,V,bt),Ft=new rg(P,Jt,bt,xt),pt=new mp(P,Ut,Jt),Nt=new Ep(P,Ut,Jt),Jt.programs=j.programs,M.capabilities=bt,M.extensions=Ut,M.properties=Mt,M.renderLists=et,M.shadowMap=wt,M.state=xt,M.info=Jt}U();let lt=new ol(M,P);this.xr=lt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=Ut.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ut.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(S){S!==void 0&&(C=S,this.setSize(A,L,!1))},this.getSize=function(S){return S.set(A,L)},this.setSize=function(S,z,Z=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=S,L=z,e.width=Math.floor(S*C),e.height=Math.floor(z*C),Z===!0&&(e.style.width=S+"px",e.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(A*C,L*C).floor()},this.setDrawingBufferSize=function(S,z,Z){A=S,L=z,C=Z,e.width=Math.floor(S*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(q)},this.setViewport=function(S,z,Z,J){S.isVector4?q.set(S.x,S.y,S.z,S.w):q.set(S,z,Z,J),xt.viewport(R.copy(q).multiplyScalar(C).round())},this.getScissor=function(S){return S.copy(K)},this.setScissor=function(S,z,Z,J){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,z,Z,J),xt.scissor(N.copy(K).multiplyScalar(C).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(S){xt.setScissorTest(st=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor(...arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,Z=!0){let J=0;if(S){let G=!1;if(F!==null){let ht=F.texture.format;G=ht===ro||ht===so||ht===io}if(G){let ht=F.texture.type,_t=ht===dn||ht===qn||ht===Hi||ht===Vi||ht===to||ht===eo,At=Et.getClearColor(),St=Et.getClearAlpha(),zt=At.r,kt=At.g,Dt=At.b;_t?(_[0]=zt,_[1]=kt,_[2]=Dt,_[3]=St,P.clearBufferuiv(P.COLOR,0,_)):(x[0]=zt,x[1]=kt,x[2]=Dt,x[3]=St,P.clearBufferiv(P.COLOR,0,x))}else J|=P.COLOR_BUFFER_BIT}z&&(J|=P.DEPTH_BUFFER_BIT),Z&&(J|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Et.dispose(),et.dispose(),Ct.dispose(),Mt.dispose(),fe.dispose(),Tt.dispose(),V.dispose(),mt.dispose(),Ft.dispose(),j.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Xe),lt.removeEventListener("sessionend",$s),qe.stop()};function ft(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let S=Jt.autoReset,z=wt.enabled,Z=wt.autoUpdate,J=wt.needsUpdate,G=wt.type;U(),Jt.autoReset=S,wt.enabled=z,wt.autoUpdate=Z,wt.needsUpdate=J,wt.type=G}function nt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function tt(S){let z=S.target;z.removeEventListener("dispose",tt),vt(z)}function vt(S){Ot(S),Mt.remove(S)}function Ot(S){let z=Mt.get(S).programs;z!==void 0&&(z.forEach(function(Z){j.releaseProgram(Z)}),S.isShaderMaterial&&j.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,Z,J,G,ht){z===null&&(z=at);let _t=G.isMesh&&G.matrixWorld.determinant()<0,At=Ch(S,z,Z,J,G);xt.setMaterial(J,_t);let St=Z.index,zt=1;if(J.wireframe===!0){if(St=v.getWireframeAttribute(Z),St===void 0)return;zt=2}let kt=Z.drawRange,Dt=Z.attributes.position,$t=kt.start*zt,ie=(kt.start+kt.count)*zt;ht!==null&&($t=Math.max($t,ht.start*zt),ie=Math.min(ie,(ht.start+ht.count)*zt)),St!==null?($t=Math.max($t,0),ie=Math.min(ie,St.count)):Dt!=null&&($t=Math.max($t,0),ie=Math.min(ie,Dt.count));let he=ie-$t;if(he<0||he===1/0)return;mt.setup(G,J,At,Z,St);let re,se=pt;if(St!==null&&(re=T.get(St),se=Nt,se.setIndex(re)),G.isMesh)J.wireframe===!0?(xt.setLineWidth(J.wireframeLinewidth*Vt()),se.setMode(P.LINES)):se.setMode(P.TRIANGLES);else if(G.isLine){let Bt=J.linewidth;Bt===void 0&&(Bt=1),xt.setLineWidth(Bt*Vt()),G.isLineSegments?se.setMode(P.LINES):G.isLineLoop?se.setMode(P.LINE_LOOP):se.setMode(P.LINE_STRIP)}else G.isPoints?se.setMode(P.POINTS):G.isSprite&&se.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ni("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Bt=G._multiDrawStarts,le=G._multiDrawCounts,te=G._multiDrawCount,ze=St?T.get(St).bytesPerElement:1,pi=Mt.get(J).currentProgram.getUniforms();for(let ke=0;ke<te;ke++)pi.setValue(P,"_gl_DrawID",ke),se.render(Bt[ke]/ze,le[ke])}else if(G.isInstancedMesh)se.renderInstances($t,he,G.count);else if(Z.isInstancedBufferGeometry){let Bt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,le=Math.min(Z.instanceCount,Bt);se.renderInstances($t,he,le)}else se.render($t,he)};function ee(S,z,Z){S.transparent===!0&&S.side===je&&S.forceSinglePass===!1?(S.side=be,S.needsUpdate=!0,Js(S,z,Z),S.side=In,S.needsUpdate=!0,Js(S,z,Z),S.side=je):Js(S,z,Z)}this.compile=function(S,z,Z=null){Z===null&&(Z=S),d=Ct.get(Z),d.init(z),b.push(d),Z.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),S!==Z&&S.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();let J=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ht=G.material;if(ht)if(Array.isArray(ht))for(let _t=0;_t<ht.length;_t++){let At=ht[_t];ee(At,Z,G),J.add(At)}else ee(ht,Z,G),J.add(ht)}),d=b.pop(),J},this.compileAsync=function(S,z,Z=null){let J=this.compile(S,z,Z);return new Promise(G=>{function ht(){if(J.forEach(function(_t){Mt.get(_t).currentProgram.isReady()&&J.delete(_t)}),J.size===0){G(S);return}setTimeout(ht,10)}Ut.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Kt=null;function We(S){Kt&&Kt(S)}function Xe(){qe.stop()}function $s(){qe.start()}let qe=new eh;qe.setAnimationLoop(We),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(S){Kt=S,lt.setAnimationLoop(S),S===null?qe.stop():qe.start()},lt.addEventListener("sessionstart",Xe),lt.addEventListener("sessionend",$s),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(z),z=lt.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,z,F),d=Ct.get(S,b.length),d.init(z),b.push(d),k.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(k,ln,z.reversedDepth),B=this.localClippingEnabled,ct=dt.init(this.clippingPlanes,B),m=et.get(S,E.length),m.init(),E.push(m),lt.enabled===!0&&lt.isPresenting===!0){let ht=M.xr.getDepthSensingMesh();ht!==null&&ts(ht,z,-1/0,M.sortObjects)}ts(S,z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(X,$),Rt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Rt&&Et.addToRenderList(m,S),this.info.render.frame++,ct===!0&&dt.beginShadows();let Z=d.state.shadowsArray;wt.render(Z,S,z),ct===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,G=m.transmissive;if(d.setupLights(),z.isArrayCamera){let ht=z.cameras;if(G.length>0)for(let _t=0,At=ht.length;_t<At;_t++){let St=ht[_t];Ue(J,G,S,St)}Rt&&Et.render(S);for(let _t=0,At=ht.length;_t<At;_t++){let St=ht[_t];Zs(m,S,St,St.viewport)}}else G.length>0&&Ue(J,G,S,z),Rt&&Et.render(S),Zs(m,S,z);F!==null&&D===0&&(Wt.updateMultisampleRenderTarget(F),Wt.updateRenderTargetMipmap(F)),S.isScene===!0&&S.onAfterRender(M,S,z),mt.resetDefaultState(),y=-1,g=null,b.pop(),b.length>0?(d=b[b.length-1],ct===!0&&dt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ts(S,z,Z,J){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){J&&ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);let _t=V.update(S),At=S.material;At.visible&&m.push(S,_t,At,Z,ot.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){let _t=V.update(S),At=S.material;if(J&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ot.copy(S.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ot.copy(_t.boundingSphere.center)),ot.applyMatrix4(S.matrixWorld).applyMatrix4(k)),Array.isArray(At)){let St=_t.groups;for(let zt=0,kt=St.length;zt<kt;zt++){let Dt=St[zt],$t=At[Dt.materialIndex];$t&&$t.visible&&m.push(S,_t,$t,Z,ot.z,Dt)}}else At.visible&&m.push(S,_t,At,Z,ot.z,null)}}let ht=S.children;for(let _t=0,At=ht.length;_t<At;_t++)ts(ht[_t],z,Z,J)}function Zs(S,z,Z,J){let G=S.opaque,ht=S.transmissive,_t=S.transparent;d.setupLightsView(Z),ct===!0&&dt.setGlobalState(M.clippingPlanes,Z),J&&xt.viewport(R.copy(J)),G.length>0&&fi(G,z,Z),ht.length>0&&fi(ht,z,Z),_t.length>0&&fi(_t,z,Z),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Ue(S,z,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new we(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?tn:dn,minFilter:yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let ht=d.state.transmissionRenderTarget[J.id],_t=J.viewport||R;ht.setSize(_t.z*M.transmissionResolutionScale,_t.w*M.transmissionResolutionScale);let At=M.getRenderTarget(),St=M.getActiveCubeFace(),zt=M.getActiveMipmapLevel();M.setRenderTarget(ht),M.getClearColor(W),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),Rt&&Et.render(Z);let kt=M.toneMapping;M.toneMapping=un;let Dt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),ct===!0&&dt.setGlobalState(M.clippingPlanes,J),fi(S,Z,J),Wt.updateMultisampleRenderTarget(ht),Wt.updateRenderTargetMipmap(ht),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ie=0,he=z.length;ie<he;ie++){let re=z[ie],se=re.object,Bt=re.geometry,le=re.material,te=re.group;if(le.side===je&&se.layers.test(J.layers)){let ze=le.side;le.side=be,le.needsUpdate=!0,pl(se,Z,J,Bt,le,te),le.side=ze,le.needsUpdate=!0,$t=!0}}$t===!0&&(Wt.updateMultisampleRenderTarget(ht),Wt.updateRenderTargetMipmap(ht))}M.setRenderTarget(At,St,zt),M.setClearColor(W,Q),Dt!==void 0&&(J.viewport=Dt),M.toneMapping=kt}function fi(S,z,Z){let J=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ht=S.length;G<ht;G++){let _t=S[G],At=_t.object,St=_t.geometry,zt=_t.group,kt=_t.material;kt.allowOverride===!0&&J!==null&&(kt=J),At.layers.test(Z.layers)&&pl(At,z,Z,St,kt,zt)}}function pl(S,z,Z,J,G,ht){S.onBeforeRender(M,z,Z,J,G,ht),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(M,z,Z,J,S,ht),G.transparent===!0&&G.side===je&&G.forceSinglePass===!1?(G.side=be,G.needsUpdate=!0,M.renderBufferDirect(Z,z,J,G,S,ht),G.side=In,G.needsUpdate=!0,M.renderBufferDirect(Z,z,J,G,S,ht),G.side=je):M.renderBufferDirect(Z,z,J,G,S,ht),S.onAfterRender(M,z,Z,J,G,ht)}function Js(S,z,Z){z.isScene!==!0&&(z=at);let J=Mt.get(S),G=d.state.lights,ht=d.state.shadowsArray,_t=G.state.version,At=j.getParameters(S,G.state,ht,z,Z),St=j.getProgramCacheKey(At),zt=J.programs;J.environment=S.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(S.isMeshStandardMaterial?Tt:fe).get(S.envMap||J.environment),J.envMapRotation=J.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",tt),zt=new Map,J.programs=zt);let kt=zt.get(St);if(kt!==void 0){if(J.currentProgram===kt&&J.lightsStateVersion===_t)return gl(S,At),kt}else At.uniforms=j.getUniforms(S),S.onBeforeCompile(At,M),kt=j.acquireProgram(At,St),zt.set(St,kt),J.uniforms=At.uniforms;let Dt=J.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Dt.clippingPlanes=dt.uniform),gl(S,At),J.needsLights=Ph(S),J.lightsStateVersion=_t,J.needsLights&&(Dt.ambientLightColor.value=G.state.ambient,Dt.lightProbe.value=G.state.probe,Dt.directionalLights.value=G.state.directional,Dt.directionalLightShadows.value=G.state.directionalShadow,Dt.spotLights.value=G.state.spot,Dt.spotLightShadows.value=G.state.spotShadow,Dt.rectAreaLights.value=G.state.rectArea,Dt.ltc_1.value=G.state.rectAreaLTC1,Dt.ltc_2.value=G.state.rectAreaLTC2,Dt.pointLights.value=G.state.point,Dt.pointLightShadows.value=G.state.pointShadow,Dt.hemisphereLights.value=G.state.hemi,Dt.directionalShadowMap.value=G.state.directionalShadowMap,Dt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Dt.spotShadowMap.value=G.state.spotShadowMap,Dt.spotLightMatrix.value=G.state.spotLightMatrix,Dt.spotLightMap.value=G.state.spotLightMap,Dt.pointShadowMap.value=G.state.pointShadowMap,Dt.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=kt,J.uniformsList=null,kt}function ml(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=Yi.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function gl(S,z){let Z=Mt.get(S);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Ch(S,z,Z,J,G){z.isScene!==!0&&(z=at),Wt.resetTextureUnits();let ht=z.fog,_t=J.isMeshStandardMaterial?z.environment:null,At=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:cn,St=(J.isMeshStandardMaterial?Tt:fe).get(J.envMap||_t),zt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,kt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Dt=!!Z.morphAttributes.position,$t=!!Z.morphAttributes.normal,ie=!!Z.morphAttributes.color,he=un;J.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(he=M.toneMapping);let re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,se=re!==void 0?re.length:0,Bt=Mt.get(J),le=d.state.lights;if(ct===!0&&(B===!0||S!==g)){let Ce=S===g&&J.id===y;dt.setState(J,S,Ce)}let te=!1;J.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==le.state.version||Bt.outputColorSpace!==At||G.isBatchedMesh&&Bt.batching===!1||!G.isBatchedMesh&&Bt.batching===!0||G.isBatchedMesh&&Bt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Bt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||G.isInstancedMesh&&Bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Bt.instancingMorph===!1&&G.morphTexture!==null||Bt.envMap!==St||J.fog===!0&&Bt.fog!==ht||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==dt.numPlanes||Bt.numIntersection!==dt.numIntersection)||Bt.vertexAlphas!==zt||Bt.vertexTangents!==kt||Bt.morphTargets!==Dt||Bt.morphNormals!==$t||Bt.morphColors!==ie||Bt.toneMapping!==he||Bt.morphTargetsCount!==se)&&(te=!0):(te=!0,Bt.__version=J.version);let ze=Bt.currentProgram;te===!0&&(ze=Js(J,z,G));let pi=!1,ke=!1,es=!1,ce=ze.getUniforms(),Ye=Bt.uniforms;if(xt.useProgram(ze.program)&&(pi=!0,ke=!0,es=!0),J.id!==y&&(y=J.id,ke=!0),pi||g!==S){xt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ce.setValue(P,"projectionMatrix",S.projectionMatrix),ce.setValue(P,"viewMatrix",S.matrixWorldInverse);let Ne=ce.map.cameraPosition;Ne!==void 0&&Ne.setValue(P,rt.setFromMatrixPosition(S.matrixWorld)),bt.logarithmicDepthBuffer&&ce.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ce.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),g!==S&&(g=S,ke=!0,es=!0)}if(G.isSkinnedMesh){ce.setOptional(P,G,"bindMatrix"),ce.setOptional(P,G,"bindMatrixInverse");let Ce=G.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ce.setValue(P,"boneTexture",Ce.boneTexture,Wt))}G.isBatchedMesh&&(ce.setOptional(P,G,"batchingTexture"),ce.setValue(P,"batchingTexture",G._matricesTexture,Wt),ce.setOptional(P,G,"batchingIdTexture"),ce.setValue(P,"batchingIdTexture",G._indirectTexture,Wt),ce.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&ce.setValue(P,"batchingColorTexture",G._colorsTexture,Wt));let $e=Z.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&ut.update(G,Z,ze),(ke||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,ce.setValue(P,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ye.envMap.value=St,Ye.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(Ye.envMapIntensity.value=z.environmentIntensity),ke&&(ce.setValue(P,"toneMappingExposure",M.toneMappingExposure),Bt.needsLights&&Ih(Ye,es),ht&&J.fog===!0&&it.refreshFogUniforms(Ye,ht),it.refreshMaterialUniforms(Ye,J,C,L,d.state.transmissionRenderTarget[S.id]),Yi.upload(P,ml(Bt),Ye,Wt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Yi.upload(P,ml(Bt),Ye,Wt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ce.setValue(P,"center",G.center),ce.setValue(P,"modelViewMatrix",G.modelViewMatrix),ce.setValue(P,"normalMatrix",G.normalMatrix),ce.setValue(P,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Ce=J.uniformsGroups;for(let Ne=0,Yo=Ce.length;Ne<Yo;Ne++){let $n=Ce[Ne];Ft.update($n,ze),Ft.bind($n,ze)}}return ze}function Ih(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Ph(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,z,Z){let J=Mt.get(S);J.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Mt.get(S.texture).__webglTexture=z,Mt.get(S.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){let Z=Mt.get(S);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};let Lh=P.createFramebuffer();this.setRenderTarget=function(S,z=0,Z=0){F=S,w=z,D=Z;let J=!0,G=null,ht=!1,_t=!1;if(S){let St=Mt.get(S);if(St.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(P.FRAMEBUFFER,null),J=!1;else if(St.__webglFramebuffer===void 0)Wt.setupRenderTarget(S);else if(St.__hasExternalTextures)Wt.rebindTextures(S,Mt.get(S.texture).__webglTexture,Mt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Dt=S.depthTexture;if(St.__boundDepthTexture!==Dt){if(Dt!==null&&Mt.has(Dt)&&(S.width!==Dt.image.width||S.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(S)}}let zt=S.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(_t=!0);let kt=Mt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(kt[z])?G=kt[z][Z]:G=kt[z],ht=!0):S.samples>0&&Wt.useMultisampledRTT(S)===!1?G=Mt.get(S).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[Z]:G=kt,R.copy(S.viewport),N.copy(S.scissor),O=S.scissorTest}else R.copy(q).multiplyScalar(C).floor(),N.copy(K).multiplyScalar(C).floor(),O=st;if(Z!==0&&(G=Lh),xt.bindFramebuffer(P.FRAMEBUFFER,G)&&J&&xt.drawBuffers(S,G),xt.viewport(R),xt.scissor(N),xt.setScissorTest(O),ht){let St=Mt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,St.__webglTexture,Z)}else if(_t){let St=z;for(let zt=0;zt<S.textures.length;zt++){let kt=Mt.get(S.textures[zt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+zt,kt.__webglTexture,Z,St)}}else if(S!==null&&Z!==0){let St=Mt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,St.__webglTexture,Z)}y=-1},this.readRenderTargetPixels=function(S,z,Z,J,G,ht,_t,At=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){xt.bindFramebuffer(P.FRAMEBUFFER,St);try{let zt=S.textures[At],kt=zt.format,Dt=zt.type;if(!bt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-J&&Z>=0&&Z<=S.height-G&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+At),P.readPixels(z,Z,J,G,It.convert(kt),It.convert(Dt),ht))}finally{let zt=F!==null?Mt.get(F).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(S,z,Z,J,G,ht,_t,At=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Mt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St)if(z>=0&&z<=S.width-J&&Z>=0&&Z<=S.height-G){xt.bindFramebuffer(P.FRAMEBUFFER,St);let zt=S.textures[At],kt=zt.format,Dt=zt.type;if(!bt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.bufferData(P.PIXEL_PACK_BUFFER,ht.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+At),P.readPixels(z,Z,J,G,It.convert(kt),It.convert(Dt),0);let ie=F!==null?Mt.get(F).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,ie);let he=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Rc(P,he,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ht),P.deleteBuffer($t),P.deleteSync(he),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,Z=0){let J=Math.pow(2,-Z),G=Math.floor(S.image.width*J),ht=Math.floor(S.image.height*J),_t=z!==null?z.x:0,At=z!==null?z.y:0;Wt.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,Z,0,0,_t,At,G,ht),xt.unbindTexture()};let Dh=P.createFramebuffer(),Uh=P.createFramebuffer();this.copyTextureToTexture=function(S,z,Z=null,J=null,G=0,ht=null){ht===null&&(G!==0?(Ni("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=G,G=0):ht=0);let _t,At,St,zt,kt,Dt,$t,ie,he,re=S.isCompressedTexture?S.mipmaps[ht]:S.image;if(Z!==null)_t=Z.max.x-Z.min.x,At=Z.max.y-Z.min.y,St=Z.isBox3?Z.max.z-Z.min.z:1,zt=Z.min.x,kt=Z.min.y,Dt=Z.isBox3?Z.min.z:0;else{let $e=Math.pow(2,-G);_t=Math.floor(re.width*$e),At=Math.floor(re.height*$e),S.isDataArrayTexture?St=re.depth:S.isData3DTexture?St=Math.floor(re.depth*$e):St=1,zt=0,kt=0,Dt=0}J!==null?($t=J.x,ie=J.y,he=J.z):($t=0,ie=0,he=0);let se=It.convert(z.format),Bt=It.convert(z.type),le;z.isData3DTexture?(Wt.setTexture3D(z,0),le=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Wt.setTexture2DArray(z,0),le=P.TEXTURE_2D_ARRAY):(Wt.setTexture2D(z,0),le=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);let te=P.getParameter(P.UNPACK_ROW_LENGTH),ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pi=P.getParameter(P.UNPACK_SKIP_PIXELS),ke=P.getParameter(P.UNPACK_SKIP_ROWS),es=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,re.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,zt),P.pixelStorei(P.UNPACK_SKIP_ROWS,kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Dt);let ce=S.isDataArrayTexture||S.isData3DTexture,Ye=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){let $e=Mt.get(S),Ce=Mt.get(z),Ne=Mt.get($e.__renderTarget),Yo=Mt.get(Ce.__renderTarget);xt.bindFramebuffer(P.READ_FRAMEBUFFER,Ne.__webglFramebuffer),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Yo.__webglFramebuffer);for(let $n=0;$n<St;$n++)ce&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(S).__webglTexture,G,Dt+$n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mt.get(z).__webglTexture,ht,he+$n)),P.blitFramebuffer(zt,kt,_t,At,$t,ie,_t,At,P.DEPTH_BUFFER_BIT,P.NEAREST);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Mt.has(S)){let $e=Mt.get(S),Ce=Mt.get(z);xt.bindFramebuffer(P.READ_FRAMEBUFFER,Dh),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Uh);for(let Ne=0;Ne<St;Ne++)ce?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$e.__webglTexture,G,Dt+Ne):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$e.__webglTexture,G),Ye?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,ht,he+Ne):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ce.__webglTexture,ht),G!==0?P.blitFramebuffer(zt,kt,_t,At,$t,ie,_t,At,P.COLOR_BUFFER_BIT,P.NEAREST):Ye?P.copyTexSubImage3D(le,ht,$t,ie,he+Ne,zt,kt,_t,At):P.copyTexSubImage2D(le,ht,$t,ie,zt,kt,_t,At);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ye?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(le,ht,$t,ie,he,_t,At,St,se,Bt,re.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(le,ht,$t,ie,he,_t,At,St,se,re.data):P.texSubImage3D(le,ht,$t,ie,he,_t,At,St,se,Bt,re):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ht,$t,ie,_t,At,se,Bt,re.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ht,$t,ie,re.width,re.height,se,re.data):P.texSubImage2D(P.TEXTURE_2D,ht,$t,ie,_t,At,se,Bt,re);P.pixelStorei(P.UNPACK_ROW_LENGTH,te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pi),P.pixelStorei(P.UNPACK_SKIP_ROWS,ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,es),ht===0&&z.generateMipmaps&&P.generateMipmap(le),xt.unbindTexture()},this.initRenderTarget=function(S){Mt.get(S).__webglFramebuffer===void 0&&Wt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Wt.setTextureCube(S,0):S.isData3DTexture?Wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Wt.setTexture2DArray(S,0):Wt.setTexture2D(S,0),xt.unbindTexture()},this.resetState=function(){w=0,D=0,F=null,xt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Ho=class extends Pe{constructor(){super();let t=new Qe;t.deleteAttribute("uv");let e=new hn({side:be}),n=new hn,s=new Cs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Yt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ms(t,n,6),a=new Se;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Yt(t,Ki(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Yt(t,Ki(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Yt(t,Ki(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Yt(t,Ki(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Yt(t,Ki(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Yt(t,Ki(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ki(i){return new ws({color:0,emissive:16777215,emissiveIntensity:i})}var og="1.3.3";function lh(i,t,e){return Math.max(i,Math.min(t,e))}function ag(i,t,e){return(1-e)*i+e*t}function lg(i,t,e,n){return ag(i,t,1-Math.exp(-e*n))}function cg(i,t){return(i%t+t)%t}var hg=class{constructor(){Pt(this,"isRunning",!1);Pt(this,"value",0);Pt(this,"from",0);Pt(this,"to",0);Pt(this,"currentTime",0);Pt(this,"lerp");Pt(this,"duration");Pt(this,"easing");Pt(this,"onUpdate")}advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;let e=lh(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=lg(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:s,onStart:r,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function ug(i,t){let e;return function(...n){let s=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(s,n)},t)}}var dg=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){Pt(this,"width",0);Pt(this,"height",0);Pt(this,"scrollHeight",0);Pt(this,"scrollWidth",0);Pt(this,"debouncedResize");Pt(this,"wrapperResizeObserver");Pt(this,"contentResizeObserver");Pt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Pt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Pt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=ug(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ch=class{constructor(){Pt(this,"events",{})}emit(i,...t){let e=this.events[i]||[];for(let n=0,s=e.length;n<s;n++)e[n]?.(...t)}on(i,t){return this.events[i]?.push(t)||(this.events[i]=[t]),()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},oh=100/6,Yn={passive:!1},fg=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){Pt(this,"touchStart",{x:0,y:0});Pt(this,"lastDelta",{x:0,y:0});Pt(this,"window",{width:0,height:0});Pt(this,"emitter",new ch);Pt(this,"onTouchStart",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});Pt(this,"onTouchMove",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:i})});Pt(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});Pt(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i,s=n===1?oh:n===2?this.window.width:1,r=n===1?oh:n===2?this.window.height:1;t*=s,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});Pt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Yn),this.element.addEventListener("touchstart",this.onTouchStart,Yn),this.element.addEventListener("touchmove",this.onTouchMove,Yn),this.element.addEventListener("touchend",this.onTouchEnd,Yn)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Yn),this.element.removeEventListener("touchstart",this.onTouchStart,Yn),this.element.removeEventListener("touchmove",this.onTouchMove,Yn),this.element.removeEventListener("touchend",this.onTouchEnd,Yn)}},ah=i=>Math.min(1,1.001-Math.pow(2,-10*i)),hh=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f="vertical",touchMultiplier:p=1,wheelMultiplier:_=1,autoResize:x=!0,prevent:m,virtualScroll:d,overscroll:E=!0,autoRaf:b=!1,anchors:M=!1,autoToggle:I=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:D=!1}={}){Pt(this,"_isScrolling",!1);Pt(this,"_isStopped",!1);Pt(this,"_isLocked",!1);Pt(this,"_preventNextNativeScrollEvent",!1);Pt(this,"_resetVelocityTimeout",null);Pt(this,"__rafID",null);Pt(this,"isTouching");Pt(this,"time",0);Pt(this,"userData",{});Pt(this,"lastVelocity",0);Pt(this,"velocity",0);Pt(this,"direction",0);Pt(this,"options");Pt(this,"targetScroll");Pt(this,"animatedScroll");Pt(this,"animate",new hg);Pt(this,"emitter",new ch);Pt(this,"dimensions");Pt(this,"virtualScroll");Pt(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});Pt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Pt(this,"onTransitionEnd",i=>{if(i.propertyName.includes("overflow")){let t=this.isHorizontal?"overflow-x":"overflow-y",e=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(e)?this.stop():this.start()}});Pt(this,"onClick",i=>{let e=i.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(e){let n=e.getAttribute("href");if(n){let s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(r=0),this.scrollTo(r,s)}}});Pt(this,"onPointerDown",i=>{i.button===1&&this.reset()});Pt(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let s=n.type.includes("touch"),r=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&s&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||s&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let p=s&&this.options.syncTouch,x=s&&n.type==="touchend"&&Math.abs(f)>5;x&&(f=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+f,{programmatic:!1,...p?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Pt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Pt(this,"raf",i=>{let t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=og,(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=ah:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:s,syncTouchLerp:r,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:p,wheelMultiplier:_,autoResize:x,prevent:m,virtualScroll:d,overscroll:E,autoRaf:b,anchors:M,autoToggle:I,allowNestedScroll:w,__experimental__naiveDimensions:D},this.dimensions=new dg(i,t,{autoResize:x}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new fg(e,{touchMultiplier:p,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,duration:s=this.options.duration,easing:r=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:u=!0,userData:h}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof i=="string"&&["top","left","start"].includes(i))i=0;else if(typeof i=="string"&&["bottom","right","end"].includes(i))i=this.limit;else{let f;if(typeof i=="string"?f=document.querySelector(i):i instanceof HTMLElement&&i?.nodeType&&(f=i),f){if(this.options.wrapper!==window){let _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}let p=f.getBoundingClientRect();i=(this.isHorizontal?p.left:p.top)+this.animatedScroll}}if(typeof i=="number"){if(i+=t,i=Math.round(i),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;let f=i-this.animatedScroll;f>this.limit/2?i=i-this.limit:f<-this.limit/2&&(i=i+this.limit)}}else i=lh(0,i,this.limit);if(i===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=i,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=i),typeof s=="number"&&typeof r!="function"?r=ah:typeof r=="function"&&typeof s!="number"&&(s=1),this.animate.fromTo(this.animatedScroll,i,{duration:s,easing:r,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(f,p)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),u&&(this.targetScroll=f),p||this.emit(),p&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(i,{deltaX:t,deltaY:e}){let n=Date.now(),s=i._lenis??(i._lenis={}),r,o,a,l,c,u,h,f,p=this.options.gestureOrientation;if(n-(s.time??0)>2e3){s.time=Date.now();let I=window.getComputedStyle(i);s.computedStyle=I;let w=I.overflowX,D=I.overflowY;if(r=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(D),s.hasOverflowX=r,s.hasOverflowY=o,!r&&!o||p==="vertical"&&!o||p==="horizontal"&&!r)return!1;c=i.scrollWidth,u=i.scrollHeight,h=i.clientWidth,f=i.clientHeight,a=c>h,l=u>f,s.isScrollableX=a,s.isScrollableY=l,s.scrollWidth=c,s.scrollHeight=u,s.clientWidth=h,s.clientHeight=f}else a=s.isScrollableX,l=s.isScrollableY,r=s.hasOverflowX,o=s.hasOverflowY,c=s.scrollWidth,u=s.scrollHeight,h=s.clientWidth,f=s.clientHeight;if(!r&&!o||!a&&!l||p==="vertical"&&(!o||!l)||p==="horizontal"&&(!r||!a))return!1;let _;if(p==="horizontal")_="x";else if(p==="vertical")_="y";else{let I=t!==0,w=e!==0;I&&r&&a&&(_="x"),w&&o&&l&&(_="y")}if(!_)return!1;let x,m,d,E,b;if(_==="x")x=i.scrollLeft,m=c-h,d=t,E=r,b=a;else if(_==="y")x=i.scrollTop,m=u-f,d=e,E=o,b=l;else return!1;return(d>0?x<m:x>0)&&E&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?cg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var ks='"Bedstead", "IBM Plex Mono", monospace';function Vo(i,t,e,n=null,s=0){i.save(),i.fillStyle="#7d7f84",i.fillRect(0,0,t,e);let r=t/20;for(let m=0;m<20;m++)i.fillStyle=m%2?"#f2f2ee":"#111",i.fillRect(m*r,0,r,r*.45),i.fillStyle=m%2?"#111":"#f2f2ee",i.fillRect(m*r,e-r*.45,r,r*.45);let o=Math.round(e/r);for(let m=0;m<o;m++)i.fillStyle=m%2?"#f2f2ee":"#111",i.fillRect(0,m*r,r*.45,r),i.fillStyle=m%2?"#111":"#f2f2ee",i.fillRect(t-r*.45,m*r,r*.45,r);i.strokeStyle="rgba(245,245,240,.9)",i.lineWidth=Math.max(1,t/512);for(let m=r;m<t;m+=r)i.beginPath(),i.moveTo(m,r*.45),i.lineTo(m,e-r*.45),i.stroke();for(let m=r;m<e;m+=r)i.beginPath(),i.moveTo(r*.45,m),i.lineTo(t-r*.45,m),i.stroke();let a=e*.13;[[.13,.17],[.87,.17],[.13,.83],[.87,.83]].forEach(([m,d])=>{let E=m*t,b=d*e;i.fillStyle="#1a1a1a",i.beginPath(),i.arc(E,b,a,0,Math.PI*2),i.fill(),i.strokeStyle="#eee",i.lineWidth=t/400,i.beginPath(),i.arc(E,b,a*.92,0,Math.PI*2),i.stroke(),i.beginPath(),i.moveTo(E-a,b),i.lineTo(E+a,b),i.moveTo(E,b-a),i.lineTo(E,b+a),i.stroke();for(let M=1;M<=3;M++)i.beginPath(),i.arc(E,b,a*M/4,0,Math.PI*2),i.stroke()});let l=e*.43,c=t/2,u=e/2;i.save(),i.beginPath(),i.arc(c,u,l,0,Math.PI*2),i.clip(),i.fillStyle="#222",i.fillRect(c-l,u-l,l*2,l*2);let h=l*2/9,f=u-l;["#f4f4f0","#e8d33a","#3bc7cf","#3fb34a","#c43fb4","#d4362f","#2d3fc9","#111"].forEach((m,d)=>{i.fillStyle=m,i.fillRect(c-l+d*(l*2/8),f,l*2/8+1,h*1.6)}),f+=h*1.6;let _=6,x=l*2/_;for(let m=0;m<_;m++){let d=Math.max(2,(_-m)*t/400);for(let E=c-l+m*x;E<c-l+(m+1)*x;E+=d*2)i.fillStyle="#eee",i.fillRect(E,f,d,h)}f+=h,i.fillStyle="#0c0c0c",i.fillRect(c-l,f,l*2,h*2.6),i.fillStyle="#f3efe6",i.textAlign="center",i.textBaseline="middle",i.font=`${Math.round(h*1.15)}px ${ks}`,i.fillText("\u041A\u0418\u041D\u0415\u0421\u041A\u041E\u041F",c,f+h*1.05),i.font=`${Math.round(h*.42)}px ${ks}`,i.fillStyle="#c9c4b8",i.fillText("\u041C\u0410\u0421\u0422\u0415\u0420\u0421\u041A\u0410\u042F \u0420\u0415\u041C\u041E\u041D\u0422\u0410 \u0422\u0415\u0425\u041D\u0418\u041A\u0418",c,f+h*2.05),f+=h*2.6;for(let m=0;m<10;m++){let d=Math.round(m/9*235+10);i.fillStyle=`rgb(${d},${d},${d})`,i.fillRect(c-l+m*(l*2/10),f,l*2/10+1,h)}if(f+=h,i.fillStyle="#151515",i.fillRect(c-l,f,l*2,h*2),i.font=`${Math.round(h*.5)}px ${ks}`,n!==null){let m=l*1.2,d=h*.55,E=c-m/2,b=f+h*.35;i.strokeStyle="#f3efe6",i.lineWidth=t/340,i.strokeRect(E,b,m,d);let M=18,I=Math.floor(n*M+1e-6);for(let w=0;w<I;w++)i.fillStyle="#f3efe6",i.fillRect(E+4+w*(m-8)/M,b+4,(m-8)/M-4,d-8);i.fillStyle="#f3efe6",i.fillText(`\u041D\u0410\u0421\u0422\u0420\u041E\u0419\u041A\u0410 ${String(Math.round(n*100)).padStart(3," ")}%`,c,f+h*1.45)}else{let m=new Date,d=String(m.getHours()).padStart(2,"0"),E=String(m.getMinutes()).padStart(2,"0"),b=String(m.getSeconds()).padStart(2,"0");i.fillStyle="#f3efe6",i.font=`${Math.round(h*.8)}px ${ks}`,i.fillText(`${d}:${E}:${b}`,c,f+h*.75),i.font=`${Math.round(h*.4)}px ${ks}`,i.fillStyle="#c9c4b8",i.fillText("\u041F\u0420\u0418\u0401\u041C \u0422\u0415\u0425\u041D\u0418\u041A\u0418 \u0421 10 \u0414\u041E 21",c,f+h*1.5)}i.restore(),i.strokeStyle="#f3efe6",i.lineWidth=t/300,i.beginPath(),i.arc(c,u,l,0,Math.PI*2),i.stroke(),i.restore()}function uh(i=1024,t=768){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");Vo(n,i,t,0);let s=new _n(e);return s.colorSpace=pe,s.anisotropy=4,{canvas:e,ctx:n,tex:s,draw(r,o){Vo(n,i,t,r,o),s.needsUpdate=!0}}}function Hs(i,t,e){let n=Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function pg(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Hs(n,s,e),u=Hs(n+1,s,e),h=Hs(n,s+1,e),f=Hs(n+1,s+1,e);return c+(u-c)*a+(h-c)*l+(c-u-h+f)*a*l}function dh(i=512,t=7){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d"),s=n.createImageData(i,i);for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=a/i,c=o/i,u=0,h=.55,f=4;for(let x=0;x<6;x++){let m=l*Math.PI*2,d=c*Math.PI*2;u+=h*pg(Math.cos(m)*f*.3+Math.sin(d)*f*.17+f,Math.sin(m)*f*.3+Math.cos(d)*f*.21+f,t+x),h*=.5,f*=2.1}let p=Math.max(0,Math.min(255,(u*.9+Hs(a,o,t)*.12)*255)),_=(o*i+a)*4;s.data[_]=s.data[_+1]=s.data[_+2]=p,s.data[_+3]=255}n.putImageData(s,0,0);let r=new _n(e);return r.wrapS=r.wrapT=Pi,r}var mg=`
  uniform float uBulge;
  varying vec2 vUv;
  varying vec3 vN;
  varying vec3 vView;
  void main() {
    vUv = uv;
    vec3 p = position;
    vec2 q = uv * 2.0 - 1.0;
    p.z += uBulge * (1.0 - 0.35 * (q.x * q.x + q.y * q.y));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    vView = normalize(-mv.xyz);
    vN = normalize(normalMatrix * vec3(-q.x * uBulge * 1.4, -q.y * uBulge * 1.4, 1.0));
    gl_Position = projectionMatrix * mv;
  }
`,gg=`
  uniform sampler2D uTest;
  uniform sampler2D uChan;
  uniform sampler2D uOsd;
  uniform float uMix;      // 0 \u2014 \u0442\u0430\u0431\u043B\u0438\u0446\u0430, 1 \u2014 \u043A\u0430\u043D\u0430\u043B
  uniform float uStatic;   // \u043F\u043E\u043C\u0435\u0445\u0438 0..1
  uniform float uPower;    // 0 \u2014 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D, 1 \u2014 \u0433\u043E\u0440\u0438\u0442
  uniform float uTime;
  uniform float uBright;
  uniform float uOsdA;
  uniform vec2 uAspect;    // \u0448\u0438\u0440\u0438\u043D\u0430/\u0432\u044B\u0441\u043E\u0442\u0430 \u044D\u043A\u0440\u0430\u043D\u0430
  uniform float uRadius;
  varying vec2 vUv;
  varying vec3 vN;
  varying vec3 vView;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float rbox(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }

  void main() {
    vec2 uv = vUv;
    // \u043B\u0451\u0433\u043A\u0430\u044F \u0431\u043E\u0447\u043A\u0430, \u043A\u0430\u043A \u0443 \u0442\u0440\u0443\u0431\u043A\u0438
    vec2 c = uv - 0.5;
    float r2 = dot(c, c);
    uv = 0.5 + c * (1.0 + 0.08 * r2);
    // \u0441\u0440\u044B\u0432 \u0441\u0442\u0440\u043E\u043A \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438
    float roll = uStatic * (hash(vec2(floor(uv.y * 60.0), floor(uTime * 30.0))) - 0.5) * 0.08;
    uv.x += roll;
    vec3 test = texture2D(uTest, uv).rgb;
    vec3 chan = texture2D(uChan, uv).rgb;
    vec3 col = mix(test, chan, uMix);
    // \u043F\u043E\u043C\u0435\u0445\u0438
    float n = hash(floor(uv * vec2(320.0, 240.0)) + floor(uTime * 40.0));
    col = mix(col, vec3(n * 0.9 + 0.05), clamp(uStatic, 0.0, 1.0));
    // \u044D\u043A\u0440\u0430\u043D\u043D\u044B\u0435 \u043D\u0430\u0434\u043F\u0438\u0441\u0438
    vec4 osd = texture2D(uOsd, uv);
    col = mix(col, osd.rgb, osd.a * uOsdA);
    // \u0441\u0442\u0440\u043E\u043A\u0438 \u0440\u0430\u0437\u0432\u0451\u0440\u0442\u043A\u0438 \u0438 \u043C\u0430\u0441\u043A\u0430
    float scan = 0.82 + 0.18 * sin(uv.y * 240.0 * 3.14159);
    col *= scan;
    float mask = 0.9 + 0.1 * sin(gl_FragCoord.x * 2.1);
    col *= mask;
    // \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435: \u0441\u0432\u0435\u0442\u043B\u0430\u044F \u043F\u043E\u043B\u043E\u0441\u0430 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043E\u0442 \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u044B
    float p = smoothstep(0.0, 1.0, uPower);
    float band = smoothstep(0.5 * p + 0.002, 0.5 * p - 0.01, abs(vUv.y - 0.5)) * smoothstep(0.5 * min(1.0, p * 3.0) + 0.002, 0.5 * min(1.0, p * 3.0) - 0.01, abs(vUv.x - 0.5));
    col *= band;
    col += vec3(1.0) * (1.0 - smoothstep(0.0, 0.25, p)) * smoothstep(0.02, 0.0, abs(vUv.y - 0.5)) * step(0.001, uPower);
    // \u043A\u0440\u0430\u044F \u0442\u0440\u0443\u0431\u043A\u0438 \u0442\u0435\u043C\u043D\u0435\u0435
    float vig = smoothstep(0.75, 0.2, length(c * vec2(1.0, 0.9)));
    col *= mix(0.55, 1.0, vig);
    col *= uBright;
    // \u0431\u043B\u0438\u043A \u0441\u0442\u0435\u043A\u043B\u0430
    float fres = pow(1.0 - max(dot(normalize(vN), normalize(vView)), 0.0), 3.0);
    col += vec3(0.9, 0.95, 1.0) * fres * 0.25;
    float glare = smoothstep(0.35, 0.0, length((vUv - vec2(0.28, 0.78)) * vec2(1.0, 1.6)));
    col += vec3(1.0) * glare * 0.05;
    // \u0441\u043A\u0440\u0443\u0433\u043B\u0451\u043D\u043D\u044B\u0435 \u0443\u0433\u043B\u044B
    vec2 q = (vUv - 0.5) * uAspect;
    float d = rbox(q, uAspect * 0.5, uRadius);
    float a = 1.0 - smoothstep(-0.004, 0.002, d);
    if (a < 0.01) discard;
    gl_FragColor = vec4(col, a);
    #include <colorspace_fragment>
  }
`;function fh({width:i,height:t,bulge:e=.02,test:n,chan:s,osd:r}){let o=new Le(i,t,32,24),a=new de({vertexShader:mg,fragmentShader:gg,transparent:!0,uniforms:{uTest:{value:n},uChan:{value:s},uOsd:{value:r},uMix:{value:0},uStatic:{value:0},uPower:{value:1},uTime:{value:0},uBright:{value:1.6},uOsdA:{value:0},uAspect:{value:new Lt(i/t,1)},uRadius:{value:.09},uBulge:{value:e}},toneMapped:!1}),l=new Yt(o,a);return l.renderOrder=2,l}function ph(i=1024,t=768){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d"),s=new _n(e);s.colorSpace=pe;function r(o,a){n.clearRect(0,0,i,t),n.font=`${Math.round(t*.09)}px "Bedstead", monospace`,n.textBaseline="top",n.textAlign="right",n.shadowColor="rgba(80,255,120,.9)",n.shadowBlur=t*.02,n.fillStyle="#7dff8a",n.fillText(String(o).padStart(2,"0"),i*.9,t*.09),n.textAlign="left",n.font=`${Math.round(t*.055)}px "Bedstead", monospace`,n.fillText(a,i*.1,t*.84),s.needsUpdate=!0}return{canvas:e,tex:s,draw:r}}var vg="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",_g=`
  precision highp float;
  uniform sampler2D uA; uniform sampler2D uDA;   // \u043A\u0430\u0434\u0440 \u0438 \u0433\u043B\u0443\u0431\u0438\u043D\u0430
  uniform sampler2D uB; uniform sampler2D uDB;   // \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0434\u0440 (\u0441\u043C\u0435\u043D\u0430 \u043A\u0430\u043D\u0430\u043B\u0430)
  uniform float uMix;
  uniform vec4 uViewA; uniform vec4 uViewB;      // \u043E\u043A\u043D\u043E \u0432 \u043A\u0430\u0434\u0440\u0435: \u0446\u0435\u043D\u0442\u0440 xy, \u0440\u0430\u0437\u043C\u0435\u0440 zw (\u0434\u043E\u043B\u0438 \u043A\u0430\u0434\u0440\u0430)
  uniform vec2 uOff;                             // \u0441\u0434\u0432\u0438\u0433 \u043A\u0430\u043C\u0435\u0440\u044B \u043F\u043E \u0433\u043B\u0443\u0431\u0438\u043D\u0435
  uniform float uDolly;                          // \u043D\u0430\u0435\u0437\u0434: \u0431\u043B\u0438\u0436\u043D\u0435\u0435 \u0440\u0430\u0441\u0442\u0451\u0442 \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0434\u0430\u043B\u044C\u043D\u0435\u0433\u043E
  uniform float uPivot;                          // \u0433\u043B\u0443\u0431\u0438\u043D\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u043E\u0438\u0442 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435
  uniform float uTime;
  uniform float uSmoke; uniform vec3 uSmokeCol;
  uniform float uDust;
  uniform float uReady;
  uniform sampler2D uScreen; uniform float uHasScreen; uniform mat3 uHom; uniform vec2 uScrAspect;
  uniform float uScrGlow;
  varying vec2 vUv;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
  }
  float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
  float rbox(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }

  // \u0442\u043E\u0447\u043A\u0430 \u043A\u0430\u0434\u0440\u0430 \u0434\u043B\u044F \u043F\u0438\u043A\u0441\u0435\u043B\u044F \u044D\u043A\u0440\u0430\u043D\u0430: \u043E\u043A\u043D\u043E, \u043D\u0430\u0435\u0437\u0434 \u0438 \u0441\u0434\u0432\u0438\u0433 \u043F\u043E \u0433\u043B\u0443\u0431\u0438\u043D\u0435 (\u0442\u0440\u0438 \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u044F)
  vec2 lookup(sampler2D D, vec4 view, out float depth) {
    vec2 base = view.xy + (vUv - 0.5) * view.zw;
    vec2 uv = base;
    float d = 0.5;
    for (int i = 0; i < 3; i++) {
      d = texture2D(D, uv).r;
      float k = d - uPivot;
      uv = view.xy + (base - view.xy) / (1.0 + uDolly * k) + uOff * k;
    }
    depth = d;
    return uv;
  }

  vec3 screenOver(vec3 col, vec2 uv) {
    vec3 p = uHom * vec3(uv, 1.0);
    vec2 s = p.xy / p.z;
    vec2 q = (s - 0.5) * uScrAspect;
    float dd = rbox(q, uScrAspect * 0.5, 0.06);
    float a = 1.0 - smoothstep(-0.003, 0.002, dd);
    vec3 scr = texture2D(uScreen, clamp(s, 0.0, 1.0)).rgb;
    col = mix(col, scr, a);
    // \u0441\u0432\u0435\u0447\u0435\u043D\u0438\u0435 \u044D\u043A\u0440\u0430\u043D\u0430 \u043D\u0430 \u0441\u0442\u043E\u043B \u0438 \u043A\u043E\u0440\u043F\u0443\u0441: \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0446\u0432\u0435\u0442 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438
    vec3 avg = texture2D(uScreen, vec2(0.5), 7.0).rgb;
    float g = exp(-max(dd, 0.0) * 9.0) * (1.0 - a);
    col += avg * g * uScrGlow;
    return col;
  }

  void main() {
    float dA, dB;
    vec2 ua = lookup(uDA, uViewA, dA);
    vec3 col = texture2D(uA, ua).rgb;
    if (uHasScreen > 0.5) col = screenOver(col, ua);
    float d = dA;
    if (uMix > 0.001) {
      vec2 ub = lookup(uDB, uViewB, dB);
      vec3 cb = texture2D(uB, ub).rgb;
      col = mix(col, cb, uMix);
      d = mix(dA, dB, uMix);
    }
    // \u0434\u044B\u043C: \u043C\u0435\u0434\u043B\u0435\u043D\u043D\u044B\u0435 \u043A\u043B\u0443\u0431\u044B, \u0433\u0443\u0449\u0435 \u0432 \u0433\u043B\u0443\u0431\u0438\u043D\u0435, \u043F\u043E\u0434\u0441\u0432\u0435\u0447\u0435\u043D\u044B \u0442\u0451\u043F\u043B\u044B\u043C \u0438\u0437-\u0437\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430
    vec2 sp = vUv * vec2(1.6, 1.0);
    float sm = fbm(sp * 2.2 + vec2(uTime * 0.018, -uTime * 0.01));
    sm = smoothstep(0.35, 0.85, sm + 0.25 * fbm(sp * 5.0 - uTime * 0.03));
    float far = 1.0 - d;
    col += uSmokeCol * sm * uSmoke * (0.35 + 0.65 * far) * (0.6 + 0.4 * smoothstep(1.0, 0.0, vUv.y));
    // \u043F\u044B\u043B\u0438\u043D\u043A\u0438 \u0432 \u0441\u0432\u0435\u0442\u0435: \u0440\u0435\u0434\u043A\u0438\u0435 \u0438\u0441\u043A\u0440\u044B, \u043F\u043B\u044B\u0432\u0443\u0442 \u0432\u0432\u0435\u0440\u0445
    vec2 g = vUv * vec2(90.0, 56.0) + vec2(0.0, -uTime * 0.6);
    vec2 cell = floor(g); vec2 f = fract(g) - 0.5;
    float h = hash(cell);
    vec2 o = vec2(hash(cell + 3.1), hash(cell + 7.7)) - 0.5;
    float dust = step(0.985, h) * smoothstep(0.08, 0.0, length(f - o * 0.6)) * (0.5 + 0.5 * sin(uTime * 2.0 + h * 40.0));
    col += uSmokeCol * dust * uDust * far;
    gl_FragColor = vec4(col * uReady, 1.0);
  }
`,xg=new Rs;function mh(i,t){return xg.loadAsync(i).then(e=>(e.colorSpace=t?pe:De,e.minFilter=Me,e.generateMipmaps=!1,e.wrapS=e.wrapT=gn,e))}function yg(i){let t=[[0,0],[1,0],[1,1],[0,1]],e=[],n=[];for(let r=0;r<4;r++){let[o,a]=i[r],[l,c]=t[r];e.push([o,a,1,0,0,0,-l*o,-l*a]),n.push(l),e.push([0,0,0,o,a,1,-c*o,-c*a]),n.push(c)}for(let r=0;r<8;r++){let o=r;for(let a=r+1;a<8;a++)Math.abs(e[a][r])>Math.abs(e[o][r])&&(o=a);[e[r],e[o]]=[e[o],e[r]],[n[r],n[o]]=[n[o],n[r]];for(let a=0;a<8;a++){if(a===r)continue;let l=e[a][r]/e[r][r];for(let c=r;c<8;c++)e[a][c]-=l*e[r][c];n[a]-=l*n[r]}}let s=n.map((r,o)=>r/e[o][o]);return new Ht().set(s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7],1)}function ll(i,t,e,n=1,s=null){let r,o;t>i?(r=1,o=i/t):(o=1,r=t/i),r/=n,o/=n;let a=s?s[0]:e[0],l=s?s[1]:e[1],c=Math.min(1-r/2,Math.max(r/2,a)),u=Math.min(1-o/2,Math.max(o/2,l));return new Qt(c,u,r,o)}function cl(){let i=new ii(new Uint8Array([0,0,0,255]),1,1);i.needsUpdate=!0;let t=new ii(new Uint8Array([128,128,128,255]),1,1);return t.needsUpdate=!0,new de({vertexShader:vg,fragmentShader:_g,uniforms:{uA:{value:i},uDA:{value:t},uB:{value:i},uDB:{value:t},uMix:{value:0},uViewA:{value:new Qt(.5,.5,1,1)},uViewB:{value:new Qt(.5,.5,1,1)},uOff:{value:new Lt},uDolly:{value:0},uPivot:{value:.55},uTime:{value:0},uSmoke:{value:.07},uSmokeCol:{value:new Gt(1,.72,.5)},uDust:{value:.6},uReady:{value:0},uScreen:{value:i},uHasScreen:{value:0},uHom:{value:new Ht},uScrAspect:{value:new Lt(1.3,1)},uScrGlow:{value:.35}},depthTest:!1,depthWrite:!1})}function hl(i){let t=new Yt(new Le(2,2),i);t.frustumCulled=!1;let e=new Pe;return e.add(t),{scene:e,camera:new Be(-1,1,1,-1,0,1)}}var Mg=typeof innerWidth<"u"&&innerHeight>innerWidth*1.1;function ul(i,t){return Mg&&(t+="-m"),Promise.all([mh(`${i}photo/${t}.jpg`,!0),mh(`${i}photo/${t}-depth.png`,!1),fetch(`${i}photo/${t}.json`).then(e=>e.json())]).then(([e,n,s])=>({color:e,depth:n,meta:s,aspect:s.size[0]/s.size[1]}))}var Go=i=>1-Math.pow(1-i,3),gh=(i,t=0,e=1)=>Math.min(e,Math.max(t,i));function Wo({base:i,name:t,mobile:e=!1,smoke:n=.07,dust:s=.6,smokeColor:r=[1,.72,.5],push:o=.1,frame:a=null}){let l=cl(),{scene:c,camera:u}=hl(l),h=l.uniforms;h.uSmoke.value=n,h.uDust.value=e?s*.6:s,h.uSmokeCol.value.setRGB(...r);let f=null,p=null,_=1,x=0,m=new Lt;function d(){return p||(p=ul(i,t).then(M=>{f=M,h.uA.value=M.color,h.uDA.value=M.depth,h.uPivot.value=.6}).catch(M=>console.warn("\u0441\u0446\u0435\u043D\u0430",t,M))),p}function E(M){_=M}function b(M,I,{p:w=0,pointer:D=null}={}){if(h.uTime.value=M,!f){h.uReady.value=0;return}x=Math.min(1,x+I*1.5),h.uReady.value=Go(x);let F=[f.meta.focus[0],1-f.meta.focus[1]],y=1.04+o*Go(gh(w));h.uViewA.value.copy(ll(f.aspect,_,F,y,a&&(_<1?null:a))),D?m.lerp(D,1-Math.pow(.02,I)):m.multiplyScalar(Math.pow(.05,I));let g=.006*Math.sin(M*.21);h.uOff.value.set(-m.x*.014+g+(w-.5)*.02,-m.y*.009),h.uDolly.value=.06*w}return{scene:c,camera:u,load:d,setAspect:E,update:b,ready:()=>p}}function vh({base:i,names:t,mobile:e=!1}){let n=cl(),{scene:s,camera:r}=hl(n),o=n.uniforms;o.uSmoke.value=.05,o.uDust.value=e?.3:.5;let a=new Array(t.length).fill(null),l=new Array(t.length).fill(null),c=1,u=-1,h=-1,f=1,p=0,_=new Lt;function x(b){return l[b]||(l[b]=ul(i,t[b]).then(M=>{a[b]=M}).catch(M=>console.warn("\u043A\u0430\u043D\u0430\u043B",t[b],M))),l[b]}function m(b){b!==u&&(x(b),h=u,u=b,f=h<0?1:0,p=0)}function d(b,M,I=0){let w=[b.meta.focus[0],1-b.meta.focus[1]];return ll(b.aspect,c,w,1.05+I)}function E(b,M,{pointer:I=null}={}){o.uTime.value=b,p+=M;let w=a[u],D=h>=0?a[h]:null;if(!w){o.uReady.value=D?1:0,D&&(o.uA.value=D.color,o.uDA.value=D.depth,o.uMix.value=0);return}f=Math.min(1,f+M*2.8),o.uA.value=w.color,o.uDA.value=w.depth,o.uViewA.value.copy(d(w,b,.04*Go(Math.min(1,p/6)))),D&&f<1?(o.uB.value=D.color,o.uDB.value=D.depth,o.uViewB.value.copy(d(D,b,.04)),o.uMix.value=1-Go(f)):o.uMix.value=0,o.uReady.value=1,I?_.lerp(I,1-Math.pow(.02,M)):_.multiplyScalar(Math.pow(.05,M)),o.uOff.value.set(-_.x*.016+.008*Math.sin(b*.25),-_.y*.01),o.uDolly.value=.04,o.uPivot.value=.6}return{scene:s,camera:r,ensure:x,show:m,update:E,setAspect(b){c=b},get current(){return u},dragStart(){},dragMove(){},dragEnd(){}}}function _h({base:i,testTex:t,chanTex:e,osdTex:n,mobile:s=!1}){let r=cl(),{scene:o,camera:a}=hl(r),l=r.uniforms;l.uSmoke.value=.085,l.uDust.value=s?.4:.7,l.uHasScreen.value=1;let c=new we(1024,790,{type:tn});c.texture.generateMipmaps=!0,c.texture.minFilter=yn;let u=fh({width:2,height:2,bulge:0,test:t,chan:e,osd:n});u.material.uniforms.uRadius.value=0;let h=new Pe;h.add(u);let f=new Be(-1,1,1,-1,-1,1);l.uScreen.value=c.texture;let p=null,_=1,x=1,m=1,d=0,E=4/3,b=new Lt,M=ul(i,"hero").then(y=>{p=y,l.uA.value=y.color,l.uDA.value=y.depth;let g=y.meta.screen.map(([O,W])=>[O,1-W]);l.uHom.value.copy(yg(g));let R=Math.hypot((g[1][0]-g[0][0])*y.aspect,g[1][1]-g[0][1]),N=Math.hypot((g[3][0]-g[0][0])*y.aspect,g[3][1]-g[0][1]);E=R/N,l.uScrAspect.value.set(E,1),u.material.uniforms.uAspect.value.set(E,1),c.setSize(Math.round(790*E),790)});function I(){let y=p.meta.screen.map(([C,X])=>[C,1-X]),g=y.map(C=>C[0]),R=y.map(C=>C[1]),N=(Math.min(...g)+Math.max(...g))/2,O=(Math.min(...R)+Math.max(...R))/2,W=(Math.max(...g)-Math.min(...g))*.86,Q=(Math.max(...R)-Math.min(...R))*.86,A=W,L=W*p.aspect/_;return L>Q&&(L=Q,A=Q*_/p.aspect),new Qt(N,O,A,L)}function w(y,g){x=y,m=g,_=y/g}function D(y,g,{dive:R=0,pointer:N=null}={}){if(l.uTime.value=y,u.material.uniforms.uTime.value=y,d=gh(R),!p){l.uReady.value=0;return}l.uReady.value=1;let O=[p.meta.focus[0],1-p.meta.focus[1]],W=_>1.05,Q=ll(p.aspect,_,O,s?1:1.02,W?null:[O[0],O[1]-.06]),A=I(),L=1-Math.pow(1-d,1.6),C=Math.exp(Math.log(Q.z)*(1-L)+Math.log(A.z)*L),X=Math.exp(Math.log(Q.w)*(1-L)+Math.log(A.w)*L),$=(Q.z-C)/Math.max(1e-5,Q.z-A.z);l.uViewA.value.set(Q.x+(A.x-Q.x)*$,Q.y+(A.y-Q.y)*$,C,X),N?b.lerp(N,1-Math.pow(.02,g)):b.multiplyScalar(Math.pow(.05,g));let q=1-L;l.uOff.value.set((-b.x*.016+.007*Math.sin(y*.2))*q,-b.y*.01*q),l.uDolly.value=.05+.25*L,l.uPivot.value=.62,l.uSmoke.value=.085*q,l.uScrGlow.value=.35*q}function F(y){y.setRenderTarget(c),y.setClearColor(0,1),y.clear(),y.render(h,f),y.setRenderTarget(null)}return{scene:o,camera:a,screen:u,setLayout:w,update:D,prepare:F,ready:()=>M,get glassAspect(){return E}}}var Sg="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",xh=`
  // \u0431\u043E\u0447\u043A\u0430: \u0441\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0440\u0430\u0441\u0442\u0451\u0442 \u043A\u0430\u043A r^3 (\u0443 Shader: 1 + k * r2 * sqrt(r2))
  vec2 lensAH(vec2 uv, float k) {
    vec2 d = uv - 0.5;
    float r2 = dot(d, d);
    return d * (1.0 + r2 * k * sqrt(r2)) + 0.5;
  }
  // border 0: \u043A\u0430\u0434\u0440 \u043F\u043E\u0434\u0442\u044F\u043D\u0443\u0442 \u0442\u0430\u043A, \u0447\u0442\u043E \u0443\u0433\u043B\u044B \u0440\u043E\u0432\u043D\u043E \u043D\u0430 \u043A\u0440\u0430\u044E; border 1: \u0443\u0433\u043B\u044B \u0443\u0445\u043E\u0434\u044F\u0442
  // \u0437\u0430 \u043A\u0440\u0430\u0439 \u0438 \u0432\u0438\u0434\u043D\u0430 \u0441\u043A\u0440\u0443\u0433\u043B\u0451\u043D\u043D\u0430\u044F \u0440\u0430\u043C\u043A\u0430 \u043A\u0438\u043D\u0435\u0441\u043A\u043E\u043F\u0430
  vec2 lensAj(vec2 uv, float k, float border) {
    float n = mix(0.3655, 0.0, border);
    return (1.0 - k * n) * lensAH(uv, k) + k * n * 0.5;
  }
  float sdRoundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }
  float lensMask(vec2 c, float border, vec2 dim) {
    float rad = mix(0.0, 0.04, border);
    float aa = mix(0.0, 0.005, border) + 1e-5;
    float s = smoothstep(-aa, aa, c.x) * smoothstep(-aa, aa, c.y) * smoothstep(-aa, aa, 1.0 - c.x) * smoothstep(-aa, aa, 1.0 - c.y);
    vec2 o = vec2(dim.x / dim.y, 1.0);
    float l = sdRoundBox((c - 0.5) * o, o * 0.5, rad);
    return (1.0 - smoothstep(-aa, aa, l)) * s;
  }
  bool inUnit(vec2 c) { return c.x >= 0.0 && c.x <= 1.0 && c.y >= 0.0 && c.y <= 1.0; }
  vec3 srgbToLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
`,bg=`
  precision highp float;
  uniform sampler2D tCur, tNext, tUi;
  uniform float uMode;          // 1 \u043E\u0434\u043D\u0430 \u0441\u0446\u0435\u043D\u0430, 2 \u043F\u0435\u0440\u0435\u0445\u043E\u0434
  uniform float uT;             // \u0445\u043E\u0434 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0430 0..1
  uniform float uType;          // 0 \u0440\u0430\u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0438\u0435, 1 \u0441\u0440\u0430\u0437\u0443, 2 \u043B\u0438\u0441\u0442 \u043F\u043E\u0432\u0435\u0440\u0445, 3 \u043B\u0438\u0441\u0442 \u0441\u043D\u0438\u0437\u0443, 4 \u0448\u0442\u043E\u0440\u043A\u0430
  uniform vec3 uCurLens;        // \u043B\u0438\u043D\u0437\u0430, \u0440\u0430\u043C\u043A\u0430, \u043D\u0430\u0441\u044B\u0449\u0435\u043D\u043D\u043E\u0441\u0442\u044C
  uniform vec3 uNextLens;
  uniform vec2 uUiLens;
  uniform float uUi;            // \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u0444\u0438\u0440\u043D\u043E\u0433\u043E \u0441\u043B\u043E\u044F \u0432 \u043A\u0430\u0434\u0440\u0435
  uniform float uUiGain;
  uniform vec3 uVig;            // \u0440\u0430\u0434\u0438\u0443\u0441, \u043C\u044F\u0433\u043A\u043E\u0441\u0442\u044C, \u0441\u0438\u043B\u0430
  uniform vec2 uDim;
  uniform float uStatic;        // \u043F\u043E\u043C\u0435\u0445\u0438 \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u043A\u0430\u043D\u0430\u043B\u0430
  uniform float uTime;
  varying vec2 vUv;
  ${xh}
  float hs(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  vec4 sceneAt(sampler2D t, vec3 L, vec2 uv) {
    float k = L.x, b = L.y;
    bool on = k > 0.01;
    vec2 c = lensAj(uv, k, b);
    bool d = inUnit(c);
    vec4 f = vec4(0.0);
    if (!on) f = texture2D(t, uv);
    else if (d) { f = texture2D(t, c); f.rgb *= lensMask(c, b, uDim); }
    float l = dot(f.rgb, vec3(0.299, 0.587, 0.114));
    return vec4(mix(vec3(l), f.rgb, L.z), f.a);
  }
  void main() {
    vec2 uv = vUv;
    vec2 su = uv;
    if (uStatic > 0.0) su.x += uStatic * (hs(vec2(floor(uv.y * 140.0), floor(uTime * 24.0))) - 0.5) * 0.05;
    vec4 a = sceneAt(tCur, uCurLens, su);
    if (uStatic > 0.0) a.rgb = mix(a.rgb, vec3(hs(floor(uv * uDim / 2.0) + floor(uTime * 50.0)) * 0.6), uStatic * 0.8);
    vec4 e = a;
    if (uMode > 1.5) {
      vec4 s = sceneAt(tNext, uNextLens, uv);
      vec4 u = mix(a, s, uT);
      if (uType > 1.5 && uType < 2.5) u = mix(a, s, s.a);
      if (uType > 2.5 && uType < 3.5) u = mix(s, a, a.a);
      // \u0448\u0442\u043E\u0440\u043A\u0430: \u043D\u043E\u0432\u0430\u044F \u0441\u0446\u0435\u043D\u0430 \u043F\u043E\u0434\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043A\u0440\u0430\u0435\u043C \u0441\u0432\u043E\u0435\u0433\u043E \u0440\u0430\u0437\u0434\u0435\u043B\u0430, \u043A\u0440\u0430\u0439 \u043C\u044F\u0433\u043A\u0438\u0439
      if (uType > 3.5) u = mix(a, s, smoothstep(1.0 - uT - 0.16, 1.0 - uT + 0.16, 1.0 - uv.y));
      e = u;
    }
    // \u0432\u0438\u043D\u044C\u0435\u0442\u043A\u0430 \u0441\u0446\u0435\u043D\u044B
    float g = uVig.x - length(uv - 0.5);
    float f = smoothstep(-uVig.y, uVig.y, g);
    vec3 p = mix(e.rgb, clamp(e.rgb * f, 0.0, 1.0), uVig.z);
    // \u044D\u0444\u0438\u0440\u043D\u044B\u0439 \u0441\u043B\u043E\u0439: \u0447\u0435\u0440\u0435\u0437 \u0442\u0443 \u0436\u0435 \u043B\u0438\u043D\u0437\u0443, \u0434\u043E \u0441\u0432\u0435\u0447\u0435\u043D\u0438\u044F \u2014 \u043D\u0430\u0434\u043F\u0438\u0441\u0438 \u0441\u0432\u0435\u0442\u044F\u0442\u0441\u044F
    vec2 ua = lensAj(uv, uUiLens.x, 1.0);
    if (uUi > 0.0) {
      // \u0437\u0430 \u043A\u0440\u0430\u0435\u043C \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u2014 \u043F\u0440\u0438\u0436\u0438\u043C \u043A \u043A\u0440\u0430\u044E: \u043F\u043E\u0434\u043B\u043E\u0436\u043A\u0438 \u043F\u043E\u0434 \u0448\u0430\u043F\u043A\u043E\u0439 \u043D\u0435 \u043E\u0431\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0440\u0430\u043C\u043A\u043E\u0439
      vec4 ui = texture2D(tUi, clamp(ua, 0.0, 1.0));
      ui.rgb = ui.a > 0.0 ? srgbToLinear(ui.rgb / ui.a) * ui.a : vec3(0.0);
      float m = uUiLens.y > 0.001 ? lensMask(ua, uUiLens.y, uDim) : 1.0;
      p = p * (1.0 - ui.a * uUi * m) + ui.rgb * uUiGain * uUi * m;
    }
    gl_FragColor = vec4(p, 1.0);
  }
`,Tg=`
  precision highp float;
  uniform sampler2D tIn; uniform vec2 uTexel; uniform float uThr, uSmooth;
  varying vec2 vUv;
  vec4 pre(vec4 c) { float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722)); return c * smoothstep(uThr, uThr + uSmooth, l); }
  void main() {
    vec2 o = uTexel * 0.5;
    vec4 s = pre(texture2D(tIn, vUv + o * vec2(-1.0, 1.0))) + pre(texture2D(tIn, vUv + o * vec2(1.0, 1.0)))
           + pre(texture2D(tIn, vUv + o * vec2(-1.0, -1.0))) + pre(texture2D(tIn, vUv + o * vec2(1.0, -1.0)));
    gl_FragColor = s * 0.25;
  }
`,Eg=`
  precision highp float;
  uniform sampler2D tIn; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec2 o = uTexel * 0.5;
    gl_FragColor = (texture2D(tIn, vUv + o * vec2(-1.0, 1.0)) + texture2D(tIn, vUv + o * vec2(1.0, 1.0))
                  + texture2D(tIn, vUv + o * vec2(-1.0, -1.0)) + texture2D(tIn, vUv + o * vec2(1.0, -1.0))) * 0.25;
  }
`,wg=`
  precision highp float;
  uniform sampler2D tIn, tSupport; uniform vec2 uTexel; uniform float uRadius;
  varying vec2 vUv;
  void main() {
    vec2 o = uTexel * 0.5;
    vec4 h = (texture2D(tIn, vUv + o * vec2(-1.0, 1.0)) + texture2D(tIn, vUv + o * vec2(1.0, 1.0))
            + texture2D(tIn, vUv + o * vec2(-1.0, -1.0)) + texture2D(tIn, vUv + o * vec2(1.0, -1.0))) * 0.25;
    gl_FragColor = mix(texture2D(tSupport, vUv), h, uRadius);
  }
`,Ag=`
  precision highp float;
  uniform sampler2D tComp, tBloom, tPrev;
  uniform float uBloom, uMotion;
  varying vec2 vUv;
  void main() {
    vec4 h = texture2D(tComp, vUv);
    vec3 b = min(texture2D(tBloom, vUv).rgb * uBloom, vec3(1.0));
    vec3 m = 1.0 - (1.0 - b) * (1.0 - h.rgb);
    m += b * vec3(1.0, 0.8, 0.0) * 0.1;
    m = mix(m, texture2D(tPrev, vUv).rgb, uMotion);
    gl_FragColor = vec4(m, 1.0);
  }
`,Rg=`
  precision highp float;
  uniform sampler2D tIn, tUi;
  uniform float uPow, uSepia, uBright, uContrast, uCA, uAspect;
  uniform vec2 uUiLens; uniform float uUi, uUiCrisp;
  uniform float uTime, uNoise, uNoiseVel;
  uniform float uExposure;
  uniform vec2 uDim;
  varying vec2 vUv;
  ${xh}
  vec3 grade(vec3 c) {
    c = pow(max(c, 0.0), vec3(uPow));
    vec3 sp = vec3(dot(c, vec3(0.393, 0.769, 0.189)), dot(c, vec3(0.349, 0.686, 0.168)), dot(c, vec3(0.272, 0.534, 0.131)));
    c = mix(c, sp, uSepia);
    c = clamp(c * uBright, 0.0, 1.0);
    return clamp((c - 0.5) * uContrast + 0.5, 0.0, 1.0);
  }
  vec3 aces(vec3 x) { x *= uExposure; const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14; return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0); }
  vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
  float gauss(float x, float s) { return 1.0 / (s * 2.5066283) * exp(x * x / (-2.0 * s * s)); }
  void main() {
    vec2 uv = vUv;
    // \u0440\u0430\u0441\u0441\u043B\u043E\u0435\u043D\u0438\u0435 \u0446\u0432\u0435\u0442\u043E\u0432 \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0438, \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u043A \u043A\u0440\u0430\u044F\u043C; \u043F\u043E\u0434 \u043D\u0430\u0434\u043F\u0438\u0441\u044F\u043C\u0438 \u0432\u0434\u0432\u043E\u0435 \u0441\u043B\u0430\u0431\u0435\u0435
    vec2 r = vec2(uAspect, 1.0) / max(uAspect, 1.0);
    float n = length((uv - 0.5) * r * 2.0);
    float a = 0.001 * n * 2.0 * uCA;
    vec2 su = lensAj(uv, uUiLens.x, 1.0);
    vec2 sc = clamp(su, 0.0, 1.0);
    float ua = max(texture2D(tUi, sc).a, max(texture2D(tUi, sc - vec2(0.0, a)).a, texture2D(tUi, sc + vec2(0.0, a)).a));
    if (ua > 0.0) a *= 0.5;
    vec3 base = grade(texture2D(tIn, uv).rgb);
    vec3 ca = vec3(grade(texture2D(tIn, uv + vec2(0.0, -a)).rgb).r, base.g, grade(texture2D(tIn, uv + vec2(0.0, a)).rgb).b);
    float p = 0.005;
    float edge = min(smoothstep(0.0, p, uv.x), smoothstep(0.0, p, 1.0 - uv.x)) * min(smoothstep(0.0, p, uv.y), smoothstep(0.0, p, 1.0 - uv.y));
    vec3 col = mix(base, ca, edge);
    // \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0432\u0442\u043E\u0440\u043E\u0439 \u0440\u0430\u0437 \u2014 \u0447\u0451\u0442\u043A\u0438\u0439, \u043F\u043E\u0432\u0435\u0440\u0445 \u0441\u0432\u0435\u0447\u0435\u043D\u0438\u044F
    if (uUi > 0.0) {
      vec4 ui = texture2D(tUi, sc);
      ui.rgb = ui.a > 0.0 ? srgbToLinear(ui.rgb / ui.a) : vec3(0.0);
      float m = (uUiLens.y > 0.001 ? lensMask(su, uUiLens.y, uDim) : 1.0) * ui.a * uUi * uUiCrisp;
      col = mix(col, ui.rgb, m);
    }
    // \u0437\u0435\u0440\u043D\u043E: \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u0435\u0442 \u0432 \u0442\u0435\u043D\u044F\u0445, \u043A\u0430\u043A \u0443 \u043F\u043B\u0451\u043D\u043A\u0438
    float h = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453 + uTime * uNoiseVel);
    float o = gauss(h, 0.49);
    col += vec3(o) * (1.0 - col) * uNoise;
    gl_FragColor = vec4(toSRGB(aces(col)), 1.0);
  }
`,Vs={boot:{noiseVelocity:1,noiseIntensity:1.4,sepiaIntensity:.25,bloomThreshold:.5,bloomIntensity:.55,bloomRadius:.82,bloomSmoothing:.5,contrast:1,brightness:1.05,saturation:.9,motionBlur:.3,lensDistortion:.25,lensDistortionBorders:1,pow:1.1,chromaticAbberationStrength:1.6,vignetteRadius:.52,vignetteSmoothness:.27,vignetteIntensity:.3,uiGain:1,uiCrisp:.85,exposure:1},hero:{noiseVelocity:1,noiseIntensity:1.12,sepiaIntensity:.22,bloomThreshold:.66,bloomIntensity:.85,bloomRadius:.78,bloomSmoothing:.3,contrast:.97,brightness:1.12,saturation:1,motionBlur:.3,lensDistortion:.16,lensDistortionBorders:0,pow:1.45,chromaticAbberationStrength:1.04,vignetteRadius:.5,vignetteSmoothness:.3,vignetteIntensity:.1,uiGain:1,uiCrisp:.85,exposure:1},chan:{noiseVelocity:1,noiseIntensity:.87,sepiaIntensity:.28,bloomThreshold:.7,bloomIntensity:.5,bloomRadius:.8,bloomSmoothing:.2,contrast:.98,brightness:1.08,saturation:.92,motionBlur:.4,lensDistortion:.16,lensDistortionBorders:1,pow:1.36,chromaticAbberationStrength:1,vignetteRadius:0,vignetteSmoothness:.32,vignetteIntensity:0,uiGain:1,uiCrisp:.85,exposure:1},tt:{noiseVelocity:1,noiseIntensity:.9,sepiaIntensity:.06,bloomThreshold:.6,bloomIntensity:.6,bloomRadius:.72,bloomSmoothing:.3,contrast:1,brightness:1,saturation:1,motionBlur:.25,lensDistortion:.16,lensDistortionBorders:1,pow:1.1,chromaticAbberationStrength:1.4,vignetteRadius:.62,vignetteSmoothness:.3,vignetteIntensity:.35,uiGain:1,uiCrisp:.8,exposure:1},work:{noiseVelocity:1,noiseIntensity:1.48,sepiaIntensity:.81,bloomThreshold:.66,bloomIntensity:.75,bloomRadius:.75,bloomSmoothing:.2,contrast:1,brightness:1,saturation:.56,motionBlur:.5,lensDistortion:.16,lensDistortionBorders:1,pow:1.34,chromaticAbberationStrength:2.5,vignetteRadius:.5,vignetteSmoothness:.83,vignetteIntensity:.45,uiGain:1,uiCrisp:.8,exposure:1},paper:{noiseVelocity:.05,noiseIntensity:1,sepiaIntensity:.4,bloomThreshold:.75,bloomIntensity:.08,bloomRadius:.74,bloomSmoothing:.65,contrast:1,brightness:1,saturation:1,motionBlur:0,lensDistortion:.16,lensDistortionBorders:0,pow:1.25,chromaticAbberationStrength:.8,vignetteRadius:.79,vignetteSmoothness:.13,vignetteIntensity:0,uiGain:1,uiCrisp:.9,exposure:1},watch:{noiseVelocity:1,noiseIntensity:1,sepiaIntensity:.26,bloomThreshold:.72,bloomIntensity:1.1,bloomRadius:.86,bloomSmoothing:.29,contrast:.95,brightness:1,saturation:.95,motionBlur:.3,lensDistortion:.16,lensDistortionBorders:0,pow:1.3,chromaticAbberationStrength:1,vignetteRadius:0,vignetteSmoothness:0,vignetteIntensity:0,uiGain:1,uiCrisp:.85,exposure:1},radio:{noiseVelocity:3.5,noiseIntensity:.7,sepiaIntensity:.4,bloomThreshold:.66,bloomIntensity:.55,bloomRadius:.72,bloomSmoothing:.3,contrast:1,brightness:.95,saturation:.85,motionBlur:.05,lensDistortion:.16,lensDistortionBorders:0,pow:1.3,chromaticAbberationStrength:1.15,vignetteRadius:0,vignetteSmoothness:0,vignetteIntensity:0,uiGain:1,uiCrisp:.88,exposure:1}};function Xo(i,t,e){let n={};for(let s in i)n[s]=i[s]+((t[s]??i[s])-i[s])*e;return n}function Qi(i,t){return new de({vertexShader:Sg,fragmentShader:i,uniforms:t,depthTest:!1,depthWrite:!1})}function yh(i,{mobile:t=!1,lite:e=!1}={}){let n=tn,s=(L={})=>new we(2,2,{type:n,depthBuffer:!1,colorSpace:cn,...L}),r=t||e?0:4,o=[s({depthBuffer:!0,samples:r}),s({depthBuffer:!0,samples:r})],a=s(),l=e?4:t?5:7,c=[],u=[];for(let L=0;L<l;L++)c.push(s()),u.push(s());let h=[s(),s()],f=0,p=new ge;p.premultiplyAlpha=!0,p.generateMipmaps=!1,p.minFilter=Me,p.colorSpace=De;let _=new Le(2,2),x=new Yt(_);x.frustumCulled=!1;let m=new Pe;m.add(x);let d=new Be(-1,1,1,-1,0,1),E=new Lt(1,1),b=Qi(bg,{tCur:{value:null},tNext:{value:null},tUi:{value:p},uMode:{value:1},uT:{value:0},uType:{value:0},uCurLens:{value:new H(0,0,1)},uNextLens:{value:new H(0,0,1)},uUiLens:{value:new Lt},uUi:{value:1},uUiGain:{value:1},uVig:{value:new H},uDim:{value:E},uStatic:{value:0},uTime:{value:0}}),M=Qi(Tg,{tIn:{value:null},uTexel:{value:new Lt},uThr:{value:.5},uSmooth:{value:.2}}),I=Qi(Eg,{tIn:{value:null},uTexel:{value:new Lt}}),w=Qi(wg,{tIn:{value:null},tSupport:{value:null},uTexel:{value:new Lt},uRadius:{value:.8}}),D=Qi(Ag,{tComp:{value:a.texture},tBloom:{value:null},tPrev:{value:null},uBloom:{value:1},uMotion:{value:0}}),F=Qi(Rg,{tIn:{value:null},tUi:{value:p},uPow:{value:1},uSepia:{value:0},uBright:{value:1},uContrast:{value:1},uCA:{value:1},uAspect:{value:1},uUiLens:{value:new Lt},uUi:{value:1},uUiCrisp:{value:.7},uTime:{value:0},uNoise:{value:.03},uNoiseVel:{value:1},uExposure:{value:1},uDim:{value:E}}),y=2,g=2,R=-1;function N(L,C,X){y=Math.max(2,Math.floor(L*X)),g=Math.max(2,Math.floor(C*X)),E.set(y,g);for(let K of o)K.setSize(y,g);a.setSize(y,g),h[0].setSize(y,g),h[1].setSize(y,g);let $=y,q=g;for(let K=0;K<l;K++)$=Math.max(1,Math.floor($/2)),q=Math.max(1,Math.floor(q/2)),c[K].setSize($,q),u[K].setSize($,q);F.uniforms.uAspect.value=L/C}function O(L,C){x.material=L,i.setRenderTarget(C),i.render(m,d)}function W(L,C,X=[0,0,0,1]){let $=o[L];return i.setRenderTarget($),i.setClearColor(new Gt(X[0],X[1],X[2]),X[3]),i.clear(!0,!0,!0),C($),$.texture}function Q(L,C){p.image!==L&&(p.image=L),p.needsUpdate=!0}function A(L){let C=L.look,X=b.uniforms;X.tCur.value=L.cur,X.tNext.value=L.next||L.cur,X.uMode.value=L.next?2:1,X.uT.value=L.t||0,X.uType.value=L.type||0,X.uCurLens.value.set(L.curLook.lensDistortion*(L.lensFactor??1),L.curLook.lensDistortionBorders*(L.borderFactor??1),L.curLook.saturation);let $=L.nextLook||L.curLook;X.uNextLens.value.set($.lensDistortion*(L.lensFactor??1),$.lensDistortionBorders*(L.borderFactor??1),$.saturation),X.uUiLens.value.set(C.lensDistortion*(L.lensFactor??1),Math.min(1,C.lensDistortionBorders*(L.borderFactor??1))),X.uUi.value=L.ui??1,X.uUiGain.value=C.uiGain,X.uVig.value.set(C.vignetteRadius,C.vignetteSmoothness,C.vignetteIntensity),X.uStatic.value=L.static||0,X.uTime.value=L.time,O(b,a),M.uniforms.tIn.value=a.texture,M.uniforms.uTexel.value.set(1/y,1/g),M.uniforms.uThr.value=C.bloomThreshold,M.uniforms.uSmooth.value=C.bloomSmoothing,O(M,c[0]);for(let rt=1;rt<l;rt++)I.uniforms.tIn.value=c[rt-1].texture,I.uniforms.uTexel.value.set(1/c[rt-1].width,1/c[rt-1].height),O(I,c[rt]);let q=c[l-1];for(let rt=l-2;rt>=0;rt--)w.uniforms.tIn.value=q.texture,w.uniforms.tSupport.value=c[rt].texture,w.uniforms.uTexel.value.set(1/q.width,1/q.height),w.uniforms.uRadius.value=C.bloomRadius,O(w,u[rt]),q=u[rt];let K=L.time,st=(Math.sin(5.3*K*.5)+Math.sin(11.7*K*.5+2.4*Math.sin(2.1*K*.5)*.5)+Math.sin(23.9*K*.5+1.3*Math.cos(7.1*K*.5)*.5))*.03*C.bloomIntensity,Y=R<0?1/60:Math.max(.001,K-R);R=K;let ct=L.reduced?0:C.motionBlur;ct=Y>1/120?ct*(1/120)/Y:Math.pow(ct,Y/(1/120));let B=D.uniforms;B.tBloom.value=q.texture,B.uBloom.value=1.5*C.bloomIntensity+st,B.tPrev.value=h[1-f].texture,B.uMotion.value=L.still?0:Math.min(.85,1.3*ct),O(D,h[f]);let k=F.uniforms;k.tIn.value=h[f].texture,k.uPow.value=C.pow,k.uSepia.value=C.sepiaIntensity,k.uBright.value=C.brightness,k.uContrast.value=C.contrast,k.uCA.value=C.chromaticAbberationStrength,k.uUiLens.value.copy(X.uUiLens.value),k.uUi.value=X.uUi.value,k.uUiCrisp.value=C.uiCrisp,k.uTime.value=L.still?.37:K,k.uNoiseVel.value=C.noiseVelocity,k.uNoise.value=.037*C.noiseIntensity*(L.noiseFactor??1),k.uExposure.value=C.exposure,O(F,null),f=1-f}return{setSize:N,renderScene:W,render:A,setUi:Q,uiTex:p,rtScene:o}}var Gs=new H;function nn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Gs.copy(t),Gs[n]=0,Gs.normalize();let c=.5*o/(o+a),u=1-Gs.angleTo(i)/l;return Math.sign(Gs[e])===1?u*c:a/(o+a)+c+c*(1-u)}var Ws=class i extends Qe{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new H,c=new H,u=new H(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,_=h.length/6,x=new H,m=.5/o;for(let d=0,E=0;d<h.length;d+=3,E+=2)switch(l.fromArray(h,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[d+0]=u.x*Math.sign(l.x)+c.x*r,h[d+1]=u.y*Math.sign(l.y)+c.y*r,h[d+2]=u.z*Math.sign(l.z)+c.z*r,f[d+0]=c.x,f[d+1]=c.y,f[d+2]=c.z,Math.floor(d/_)){case 0:x.set(1,0,0),p[E+0]=nn(x,c,"z","y",r,n),p[E+1]=1-nn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),p[E+0]=1-nn(x,c,"z","y",r,n),p[E+1]=1-nn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),p[E+0]=1-nn(x,c,"x","z",r,t),p[E+1]=nn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),p[E+0]=1-nn(x,c,"x","z",r,t),p[E+1]=1-nn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),p[E+0]=1-nn(x,c,"x","y",r,t),p[E+1]=1-nn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),p[E+0]=nn(x,c,"x","y",r,t),p[E+1]=1-nn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Mh=`
  uniform sampler2D tContent;
  uniform sampler2D tGrunge;
  uniform vec2 uDim;
  uniform vec3 uPaper;
  uniform vec3 uInk;
  uniform float uHead;   // \u0432\u044B\u0441\u043E\u0442\u0430 \u0448\u0430\u043F\u043A\u0438: \u043F\u0435\u0447\u0430\u0442\u044C \u043F\u043E\u0434 \u043D\u0435\u0439 \u0443\u0445\u043E\u0434\u0438\u0442 \u0432 \u0431\u0443\u043C\u0430\u0433\u0443
  float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }
  vec3 s2l(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
  // \u0431\u0443\u043C\u0430\u0433\u0430 \u0432 \u043B\u0438\u043D\u0435\u0439\u043D\u043E\u043C \u0446\u0432\u0435\u0442\u0435: \u043F\u044F\u0442\u043D\u0430, \u0432\u043E\u043B\u043E\u043A\u043D\u0430, \u0437\u0430\u0442\u0451\u0440\u0442\u043E\u0441\u0442\u044C \u0443 \u043A\u0440\u0430\u0451\u0432, \u043F\u0435\u0447\u0430\u0442\u044C
  vec3 paperColor(vec2 uv) {
    vec2 px = uv * uDim;
    vec2 w = px / 520.0;
    float g = texture2D(tGrunge, w).r;
    float g2 = texture2D(tGrunge, w * 3.1 + 0.37).r;
    float fib = vn(px * vec2(0.9, 0.08)) * 0.5 + vn(px * vec2(0.07, 1.1)) * 0.5;
    float speck = step(0.9965, h21(floor(px * 0.5)));
    vec3 col = uPaper * (0.9 + 0.08 * g + 0.04 * g2 - 0.035 * fib);
    col *= 1.0 - speck * 0.35;
    // \u043A \u043A\u0440\u0430\u044F\u043C \u043B\u0438\u0441\u0442 \u0442\u0435\u043C\u043D\u0435\u0435 \u0438 \u0436\u0435\u043B\u0442\u0435\u0435
    vec2 e = min(uv, 1.0 - uv);
    float edge = smoothstep(0.0, 0.08, min(e.x * uDim.x / uDim.y, e.y));
    col *= mix(vec3(0.86, 0.8, 0.68), vec3(1.0), edge);
    // \u043F\u0435\u0447\u0430\u0442\u044C: \u043A\u0440\u0430\u0441\u043A\u0430 \u043B\u043E\u0436\u0438\u0442\u0441\u044F \u043D\u0435\u0440\u043E\u0432\u043D\u043E \u043F\u043E \u0432\u043E\u043B\u043E\u043A\u043D\u0430\u043C
    vec4 ink = texture2D(tContent, uv) * (1.0 - smoothstep(uDim.y - uHead - 18.0, uDim.y - uHead + 6.0, px.y));
    float a = ink.a * (0.93 + 0.07 * smoothstep(0.2, 0.8, vn(px * 0.35))) * (0.95 + 0.05 * g);
    vec3 inkLin = ink.a > 0.0 ? s2l(ink.rgb / ink.a) : uInk;
    return mix(col, inkLin * (0.92 + 0.08 * fib), clamp(a, 0.0, 1.0));
  }
`,Cg=`
  precision highp float;
  uniform float uProg;      // 0 \u2014 \u043B\u0438\u0441\u0442\u0430 \u043D\u0435\u0442, 1 \u2014 \u043B\u0438\u0441\u0442 \u043B\u0451\u0433 \u0446\u0435\u043B\u0438\u043A\u043E\u043C
  uniform float uUp;
  uniform vec2 uDir;
  varying vec2 vUv;
  ${Mh}
  vec2 curlMap(float y, float B, vec3 E) {
    float r = 0.15;
    vec2 s = vec2(y, 1.0);
    if (y < E.z - r) return s;
    if (y > E.z + r) return vec2(-1.0);
    float o = asin(clamp((y - E.z) / r, -1.0, 1.0));
    float l = 3.14159265 - o;
    s = vec2(E.z + l * r, cos(l));
    if (s.x < B) return s;
    if (y < E.z) return vec2(y, 1.0);
    s = vec2(E.z + o * r, cos(o));
    return s.x < B ? s : vec2(-1.0);
  }
  void main() {
    vec2 uv = vUv;
    float o = 0.4;
    bool flip = uDir.x < 0.0;
    vec2 A = vec2(abs(uDir.x), uDir.y);
    vec2 c = A / length(A);
    float d = length(A);
    float m = mix(d * (1.0 + o * 4.0) - o * 2.0, -o * 2.0, clamp(1.0 - uProg, 0.0, 1.0));
    vec2 I = vec2(flip ? 1.0 - uv.x : uv.x, mix(1.0 - uv.y, uv.y, uUp));
    float y = dot(I, c);
    vec2 C = abs((vec2(1.0) - I) / c);
    float B = y + min(C.x, C.y);
    vec2 v = curlMap(y, B, vec3(c, m));
    if (v.x < 0.0) { gl_FragColor = vec4(0.0); return; }
    float S = (1.0 - smoothstep(0.0, o * 2.0, -(y - m))) * smoothstep(-o, o, B - (v.x + 3.14159265 * 1.5 * o + o));
    vec2 x = c * (v.x - y);
    if (flip) x.x = -x.x;
    x.y *= mix(-1.0, 1.0, uUp);
    vec3 w = paperColor(uv + x);
    vec3 col = v.y > 0.0 ? w * v.y * (1.0 - S * 0.85) : (w * 0.25 + uPaper * vec3(0.7, 0.67, 0.5)) * (-v.y);
    gl_FragColor = vec4(col, 1.0);
  }
`,Ig=`
  uniform float uCut;     // \u0433\u0434\u0435 \u0440\u0435\u0436\u0435\u0442 \u0448\u0440\u0435\u0434\u0435\u0440, \u0434\u043E\u043B\u044F \u0432\u044B\u0441\u043E\u0442\u044B \u044D\u043A\u0440\u0430\u043D\u0430 \u0441\u043D\u0438\u0437\u0443
  uniform float uTime;
  uniform float uAspect;
  uniform float uStrips;
  attribute float aStrip;
  attribute float aLocal; // -0.5..0.5 \u043F\u043E\u043F\u0435\u0440\u0451\u043A \u043F\u043E\u043B\u043E\u0441\u044B
  attribute vec2 aPiece;  // \u043D\u0438\u0437 \u0438 \u0432\u0435\u0440\u0445 \u043A\u0443\u0441\u043A\u0430, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043B\u043E\u0441\u0430 \u0440\u0432\u0451\u0442\u0441\u044F
  varying vec2 vUv;
  varying vec3 vN;
  varying float vCut;
  float h11(float p) { return fract(sin(p * 91.3458) * 47453.5453); }
  mat3 rotX(float a) { float c = cos(a), s = sin(a); return mat3(1, 0, 0, 0, c, s, 0, -s, c); }
  mat3 rotZ(float a) { float c = cos(a), s = sin(a); return mat3(c, s, 0, -s, c, 0, 0, 0, 1); }
  void main() {
    float y = uv.y;
    float s = max(0.0, uCut - y);
    float r1 = h11(aStrip + 1.0), r2 = h11(aStrip + 7.3), r3 = h11(aStrip + 13.1);
    float wStrip = 1.0 / uStrips;
    float xc = (aStrip + 0.5) * wStrip;
    // \u043D\u0438\u0436\u0435 \u043D\u043E\u0436\u0435\u0439 \u043F\u043E\u043B\u043E\u0441\u0430 \u0441\u0443\u0436\u0430\u0435\u0442\u0441\u044F \u2014 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u043B\u043E\u0441\u0430\u043C\u0438 \u0449\u0435\u043B\u044C
    float gap = smoothstep(0.0, 0.015, s) * 0.16;
    float lx = aLocal * wStrip * (1.0 - gap) * uAspect;
    // \u043F\u043E\u043B\u043E\u0441\u0430 \u0440\u0432\u0451\u0442\u0441\u044F \u043D\u0430 \u043A\u0443\u0441\u043A\u0438: \u043A\u0443\u0441\u043E\u043A \u0432\u0438\u0441\u0438\u0442, \u043F\u043E\u043A\u0430 \u043D\u043E\u0436\u0438 \u043D\u0435 \u043F\u0440\u043E\u0448\u043B\u0438 \u0435\u0433\u043E \u0446\u0435\u043B\u0438\u043A\u043E\u043C, \u043F\u043E\u0442\u043E\u043C \u043F\u0430\u0434\u0430\u0435\u0442
    float yTop = aPiece.y;
    float yc = (aPiece.x + aPiece.y) * 0.5;
    float k = aPiece.y * 13.0;
    float tau = max(0.0, uCut - yTop);
    vec3 p;
    vec3 n = vec3(0.0, 0.0, 1.0);
    if (s <= 0.0) {
      p = vec3(xc * uAspect + lx, y, 0.0);
    } else if (tau <= 0.0) {
      // \u0432\u0438\u0441\u0438\u0442 \u043F\u043E\u0434 \u043D\u043E\u0436\u0430\u043C\u0438 \u0438 \u0447\u0443\u0442\u044C \u043A\u043E\u043B\u044B\u0448\u0435\u0442\u0441\u044F
      float sw = sin(uTime * 2.1 + r1 * 17.0 + s * 9.0) * 0.012 * s;
      float tw = sin(uTime * 1.6 + r3 * 11.0) * 0.6 * s;
      p = vec3(xc * uAspect + lx * cos(tw) + sw, y, lx * sin(tw) + s * 0.04);
      n = vec3(-sin(tw), 0.0, cos(tw));
    } else {
      // \u043E\u0442\u043E\u0440\u0432\u0430\u043B\u0441\u044F: \u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435\u043C, \u043A\u0440\u0443\u0442\u0438\u0442\u0441\u044F \u0438 \u043A\u0443\u0432\u044B\u0440\u043A\u0430\u0435\u0442\u0441\u044F
      float hi = h11(aStrip * 3.1 + k * 7.7);
      float tw = tau * (5.0 + hi * 8.0) * (hi > 0.5 ? 1.0 : -1.0);
      float rz = tau * (hi - 0.5) * 4.0;
      float rx = tau * (1.5 + r3 * 2.5);
      vec3 v = vec3(lx * cos(tw), y - yc, lx * sin(tw));
      vec3 nn = vec3(-sin(tw), 0.0, cos(tw));
      mat3 R = rotZ(rz) * rotX(rx);
      v = R * v; nn = R * nn;
      float fall = tau * 0.5 + tau * tau * (5.0 + hi * 4.0);
      vec3 c = vec3(xc * uAspect + (xc - 0.5) * tau * 0.6 * uAspect + (hi - 0.5) * tau * 0.4, yc - fall, tau * (0.15 + hi * 0.3));
      p = c + v;
      n = nn;
    }
    vN = normalize(n);
    vUv = vec2(xc + aLocal * wStrip, y);
    vCut = s;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,Pg=`
  precision highp float;
  varying vec2 vUv;
  varying vec3 vN;
  varying float vCut;
  ${Mh}
  void main() {
    vec3 w = paperColor(vUv);
    vec3 n = gl_FrontFacing ? vN : -vN;
    float lit = 0.62 + 0.38 * max(0.0, dot(n, normalize(vec3(-0.3, 0.5, 1.0))));
    vec3 col = gl_FrontFacing ? w * lit : (w * 0.25 + uPaper * vec3(0.7, 0.67, 0.5)) * lit;
    // \u0443 \u0441\u0430\u043C\u044B\u0445 \u043D\u043E\u0436\u0435\u0439 \u043B\u0438\u0441\u0442 \u043F\u0440\u0438\u0436\u0430\u0442 \u0438 \u0447\u0443\u0442\u044C \u0442\u0435\u043C\u043D\u0435\u0435
    col *= 1.0 - (1.0 - smoothstep(0.0, 0.03, vCut)) * step(0.0001, vCut) * 0.25;
    gl_FragColor = vec4(col, 1.0);
  }
`;function Lg(){let i=document.createElement("canvas");i.width=2048,i.height=154;let t=i.getContext("2d");t.fillStyle="#1b1c1f",t.fillRect(0,0,2048,154),t.fillStyle="#d9cfb6",t.font='italic 600 70px "STIX Two Text", Georgia, serif',t.textBaseline="middle",t.fillText("\u041A\u0438\u043D\u0435\u0441\u043A\u043E\u043F",90,80),t.font='500 26px "IBM Plex Mono", monospace',t.fillStyle="#8f8a7d",t.fillText("\u0428\u0420\u0415\u0414\u0415\u0420 \xB7 \u041F\u041E\u0421\u041B\u0415 \u0420\u0415\u041C\u041E\u041D\u0422\u0410 \xB7 \u0413\u0410\u0420\u0410\u041D\u0422\u0418\u042F 6 \u041C\u0415\u0421.",470,82),t.fillStyle="#2c2d31";for(let n=0;n<26;n++)t.fillRect(1500+n*18,52,8,52);let e=new _n(i);return e.colorSpace=pe,e.anisotropy=4,e}function Sh({contentTexture:i,grungeTexture:t,mobile:e=!1}){let n={tContent:{value:i},tGrunge:{value:t},uDim:{value:new Lt(1,1)},uPaper:{value:new Gt(15655880).convertSRGBToLinear()},uInk:{value:new Gt(1907221).convertSRGBToLinear()},uHead:{value:64}},s=new de({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Cg,uniforms:{...n,uProg:{value:1},uUp:{value:1},uDir:{value:new Lt(.5,1)}},transparent:!0,depthTest:!1,depthWrite:!1}),r=new Yt(new Le(2,2),s);r.frustumCulled=!1;let o=new Pe;o.add(r);let a=new Be(-1,1,1,-1,0,1),l=e?28:64,c=56,u=[],h=[],f=[],p=[],_=[],x=[],m=$=>{let q=Math.sin($*91.3458)*47453.5453;return q-Math.floor(q)};for(let $=0;$<l;$++){let q=.16+m($+7.3)*.1,K=m($+1)*q;for(let st=0;;st++){let Y=st*q-K,ct=Y+q;if(Y>=1)break;if(ct<=0)continue;let B=Math.max(0,Y),k=Math.min(1,ct),rt=Math.max(1,Math.ceil((k-B)*c)),ot=u.length/3;for(let at=0;at<=rt;at++){let Rt=B+(k-B)*at/rt;for(let Vt of[-.5,.5])u.push(0,0,0),h.push(($+.5+Vt)/l,Rt),f.push($),p.push(Vt),_.push(Y,ct)}for(let at=0;at<rt;at++){let Rt=ot+at*2;x.push(Rt,Rt+1,Rt+2,Rt+1,Rt+3,Rt+2)}}}let d=new Ke;d.setAttribute("position",new ue(u,3)),d.setAttribute("uv",new ue(h,2)),d.setAttribute("aStrip",new ue(f,1)),d.setAttribute("aLocal",new ue(p,1)),d.setAttribute("aPiece",new ue(_,2)),d.setIndex(x);let E=new de({vertexShader:Ig,fragmentShader:Pg,uniforms:{...n,uCut:{value:-.2},uTime:{value:0},uAspect:{value:1},uStrips:{value:l}},side:je}),b=new Yt(d,E);b.frustumCulled=!1;let M=new Pe;M.add(b);let I=new ye(30,1,.05,20),w=new Rn,D=new hn({color:2763567,metalness:.55,roughness:.38}),F=new hn({color:723725,metalness:.2,roughness:.8}),y=new hn({color:10132900,metalness:1,roughness:.42}),g=new hn({map:Lg(),metalness:.2,roughness:.6}),R=new Yt(new Ws(1,.075,.13,4,.018),[D,D,D,D,g,D]);R.position.set(0,-.0375,0),w.add(R);let N=new Yt(new Ws(1,.014,.03,2,.006),y);N.position.set(0,.002,.03),w.add(N);let O=new Yt(new Qe(.98,.006,.025),F);O.position.set(0,.001,-.003),w.add(O);let W=[];for(let $ of[-.016,.013]){let q=new Ts(.01,.01,.97,20,1);q.rotateZ(Math.PI/2);let K=new Yt(q,y);K.position.set(0,.006,$),w.add(K),W.push(K)}let Q=new Yt(new Es(.005,16,8),new ni({color:new Gt(.3,3,.6)}));Q.position.set(.45,-.02,.066),w.add(Q),w.rotation.x=.38,M.add(w);let A=new Is(16773597,2.4);A.position.set(-1,2,3),M.add(A,new Ps(16777215,.35));let L=1;function C($,q,K=64){L=$/q,n.uHead.value=K,n.uDim.value.set($,q),E.uniforms.uAspect.value=L,I.aspect=L;let st=.5/Math.tan(Ha.degToRad(I.fov/2));I.position.set(L/2,.5,st),I.lookAt(L/2,.5,0),I.updateProjectionMatrix(),w.scale.setScalar(Math.max(L*1.03,.8)),w.position.x=L/2}function X($,{mode:q,prog:K=1,cut:st=0,time:Y=0,env:ct=null}){if(ct&&(M.environment=ct),q==="shred"){let B=-.12+st*1.42;E.uniforms.uCut.value=B,E.uniforms.uTime.value=Y,w.position.y=B,w.position.z=.02;for(let k of W)k.rotation.x=-Y*9;$.render(M,I)}else s.uniforms.uProg.value=q==="flat"?1:K,$.render(o,a)}return{setSize:C,render:X}}var Dg=new Set(["SCRIPT","STYLE","NOSCRIPT","TEMPLATE","OPTION","HEAD","BR"]),Ug=new Set(["INPUT","SELECT","TEXTAREA"]);function dl(i){if(!i||i==="transparent")return null;let t=i.match(/rgba?\(([^)]+)\)/);if(!t)return i;let e=t[1].split(/[ ,/]+/).filter(Boolean).map(Number);return e.length>3&&e[3]===0?null:i}function Ng(i){let t=[],e=0,n="";for(let s of i)s==="("&&e++,s===")"&&e--,s===","&&e===0?(t.push(n.trim()),n=""):n+=s;return n.trim()&&t.push(n.trim()),t}function Fg(i){if(!i||i==="none")return null;let t=i.match(/^(linear|radial)-gradient\((.*)\)$/s);if(!t)return null;let e=Ng(t[2]),n={kind:t[1],angle:180,stops:[],rx:.5,ry:.5,cx:.5,cy:.5};if(t[1]==="linear"){let r=e[0];if(/deg$/.test(r))n.angle=parseFloat(r),e.shift();else if(/^to /.test(r)){let o={"to top":0,"to right":90,"to bottom":180,"to left":270};n.angle=o[r]??180,e.shift()}}else if(!/^(rgb|#|transparent)/.test(e[0])){let r=e.shift(),o=r.split(" at ")[0].trim().split(/\s+/).map(l=>parseFloat(l)/100);o.length===2&&!isNaN(o[0])&&(n.rx=o[0]/2,n.ry=o[1]/2);let a=r.split(" at ")[1];if(a){let l=a.trim().split(/\s+/).map(c=>parseFloat(c)/100);isNaN(l[0])||(n.cx=l[0],n.cy=l[1]??.5)}}let s=e.length;return e.forEach((r,o)=>{let a=r.match(/^(rgba?\([^)]*\)|#[0-9a-f]+|transparent|[a-z]+)\s*([\d.]+%)?/i);if(!a)return;let l=a[2]?parseFloat(a[2])/100:s>1?o/(s-1):0;n.stops.push([Math.min(1,Math.max(0,l)),a[1]==="transparent"?"rgba(0,0,0,0)":a[1]])}),n.stops.length?n:null}function Re(i){let t=parseFloat(i);return isNaN(t)?0:t}function bh(i,t,e,n,s,r){let[o,a,l,c]=r.map(u=>Math.min(u,n/2,s/2));i.beginPath(),i.moveTo(t+o,e),i.lineTo(t+n-a,e),i.arcTo(t+n,e,t+n,e+a,a),i.lineTo(t+n,e+s-l),i.arcTo(t+n,e+s,t+n-l,e+s,l),i.lineTo(t+c,e+s),i.arcTo(t,e+s,t,e+s-c,c),i.lineTo(t,e+o),i.arcTo(t,e,t+o,e,o),i.closePath()}function Th({scale:i=1,html:t=document.documentElement}={}){let e=()=>{let A=document.createElement("canvas");return A.width=A.height=2,{c:A,ctx:A.getContext("2d")}},n={screen:e(),paper:e()},s="letterSpacing"in CanvasRenderingContext2D.prototype,r=new Map,o=[],a=!0,l=0,c=-1e9,u=0,h=0,f=i,p=0;function _(A,L,C=f){u=A,h=L,f=C;for(let X in n)n[X].c.width=Math.max(2,Math.round(A*C)),n[X].c.height=Math.max(2,Math.round(L*C));a=!0}function x(A=0){if(A){let L=performance.now()+A;l=l?Math.min(l,L):L}else a=!0}let m=new Set,d=new MutationObserver(A=>{let L=!1;for(let C of A){let X=C.target.nodeType===1?C.target:C.target.parentElement;if(X&&X.closest&&X.closest('[data-gl="off"]'))continue;(C.type==="characterData"||C.type==="childList"&&[...C.addedNodes,...C.removedNodes].every(q=>q.nodeType===3))&&X?m.add(X):L=!0}L&&(m.clear(),x(),x(420))});d.observe(document.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["class","hidden","aria-selected","aria-expanded"]}),t.classList&&d.observe(t,{attributes:!0,attributeFilter:["class"]});let E=A=>{A.target.closest&&A.target.closest("a,button,label,input,select")&&(x(),x(260))};document.addEventListener("pointerover",E,!0),document.addEventListener("pointerout",E,!0),document.addEventListener("focusin",()=>{x(),x(260)},!0),document.addEventListener("input",()=>x(),!0),document.fonts&&document.fonts.addEventListener&&document.fonts.addEventListener("loadingdone",()=>x());function b(A){let L=r.get(A);if(!L){let C=n.screen.ctx;C.font=A;let X=C.measureText("Hg\u0439\u0449");L={asc:X.fontBoundingBoxAscent??X.actualBoundingBoxAscent,desc:X.fontBoundingBoxDescent??X.actualBoundingBoxDescent},r.set(A,L)}return L}function M(A){for(let L=A.parentElement;L&&L!==document.body;L=L.parentElement){let C=getComputedStyle(L);if(C.overflow!=="visible"&&C.overflow!=="")return L}return null}function I(A){let L=[];for(let C=A;C&&C.nodeType===1;C=C.parentElement)L.push(getComputedStyle(C));return L}function w(A,L,C){let X=dl(A.backgroundColor),$=Fg(A.backgroundImage),q=[Re(A.borderTopWidth),Re(A.borderRightWidth),Re(A.borderBottomWidth),Re(A.borderLeftWidth)],K=[A.borderTopStyle,A.borderRightStyle,A.borderBottomStyle,A.borderLeftStyle],st=[A.borderTopColor,A.borderRightColor,A.borderBottomColor,A.borderLeftColor].map(dl),Y=q.some((B,k)=>B>0&&K[k]!=="none"&&K[k]!=="hidden"&&st[k]);if(!X&&!$&&!Y)return null;let ct=[A.borderTopLeftRadius,A.borderTopRightRadius,A.borderBottomRightRadius,A.borderBottomLeftRadius].map(Re);return{bg:X,grad:$,bw:q,bstyle:K,bc:st,hasBorder:Y,r:ct,pseudo:C}}function D(A,L,C,X,$,q){let K=A.data;if(!/\S/.test(K))return null;let st=`${C.fontStyle} ${C.fontWeight} ${C.fontSize} ${C.fontFamily}`,Y=b(st),ct=L.getBoundingClientRect(),B=document.createRange(),k=/\S+/g,rt=[],ot=null,at,Rt=C.textTransform,Vt=bt=>Rt==="uppercase"?bt.toUpperCase():Rt==="lowercase"?bt.toLowerCase():bt;for(;at=k.exec(K);){B.setStart(A,at.index),B.setEnd(A,at.index+at[0].length);let bt=B.getClientRects();if(!bt.length)continue;if(bt.length>1){for(let Jt=0;Jt<at[0].length;Jt++){B.setStart(A,at.index+Jt),B.setEnd(A,at.index+Jt+1);let Mt=B.getClientRects()[0];Mt&&(!ot||Math.abs(Mt.top-ot.top)>2?(ot={top:Mt.top,h:Mt.height,x:Mt.left,from:at.index+Jt,to:at.index+Jt+1},rt.push(ot)):ot.to=at.index+Jt+1)}continue}let xt=bt[0];xt.width!==0&&(!ot||Math.abs(xt.top-ot.top)>2?(ot={top:xt.top,h:xt.height,x:xt.left,from:at.index,to:at.index+at[0].length},rt.push(ot)):ot.to=at.index+at[0].length)}if(!rt.length)return null;let P=rt.map(bt=>({t:Vt(K.slice(bt.from,bt.to).replace(/[\s ]+/g," ")),dx:bt.x-ct.left,dy:bt.top-ct.top+(bt.h-(Y.asc+Y.desc))/2+Y.asc})),qt=C.textDecorationLine&&C.textDecorationLine.includes("underline")?{color:dl(C.textDecorationColor)||C.color,th:Math.max(1,Re(C.textDecorationThickness)||1),off:Re(C.textUnderlineOffset)||2}:null,Ut=C.letterSpacing==="normal"?0:Re(C.letterSpacing);return{type:"text",el:L,layer:X,clip:$,chain:q,font:st,color:C.color,ls:Ut,deco:qt,frags:P,w0:ct.width,h0:ct.height,fm:Y}}let F=new WeakMap;function y(A,L){let C=L.color,X=C+A.innerHTML.length,$=F.get(A);if($&&$.key===X)return $.img;let q=A.getBoundingClientRect(),K=A.cloneNode(!0);K.setAttribute("xmlns","http://www.w3.org/2000/svg"),K.setAttribute("width",Math.max(1,Math.round(q.width*2))),K.setAttribute("height",Math.max(1,Math.round(q.height*2))),K.removeAttribute("class");let st=new XMLSerializer().serializeToString(K).replace(/currentColor/g,C),Y=new Image;return Y.onload=()=>x(),Y.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(st),F.set(A,{key:X,img:Y}),Y}function g(){let A=t.classList.contains("gl-ui");t.classList.add("gl-snap"),t.offsetHeight,A&&t.classList.remove("gl-ui");let L=[],C=[],X=(q,K,st)=>{if(Dg.has(q.tagName)||q.id==="gl"||q.dataset.gl==="off")return;let Y=getComputedStyle(q);if(Y.display==="none")return;let ct=q.dataset.layer||K,B=st||Y.position==="fixed",k=B?C:$,rt=Y.visibility!=="hidden",ot=null,at=null,Rt=()=>{at||(at=I(q),ot=M(q))};if(rt){let Vt=getComputedStyle(q,"::before");if(q.dataset.glBg!=="off"&&Vt.content&&Vt.content!=="none"&&Vt.position==="absolute"&&Re(Vt.top)<=0&&Re(Vt.left)<=0){let qt=w(Vt,q,!0);qt&&(Rt(),k.push({type:"box",el:q,layer:ct,clip:ot,chain:at,...qt,pcs:Vt,inset:[Re(Vt.top),Re(Vt.right),Re(Vt.bottom),Re(Vt.left)]}))}let P=q.dataset.glBg==="off"?null:w(Y,q,!1);if(P&&(Rt(),k.push({type:"box",el:q,layer:ct,clip:ot,chain:at,...P})),q.tagName==="svg"){Rt(),k.push({type:"img",el:q,layer:ct,clip:ot,chain:at,img:y(q,Y)});return}if(q.tagName==="IMG"||q.tagName==="CANVAS"){Rt(),k.push({type:"img",el:q,layer:ct,clip:ot,chain:at,img:q});return}if(Ug.has(q.tagName)){Rt();let qt=getComputedStyle(q,"::placeholder");k.push({type:"field",el:q,layer:ct,clip:ot,chain:at,font:`${Y.fontStyle} ${Y.fontWeight} ${Y.fontSize} ${Y.fontFamily}`,color:Y.color,phColor:qt.color||Y.color,pl:Re(Y.paddingLeft),pr:Re(Y.paddingRight),fm:b(`${Y.fontStyle} ${Y.fontWeight} ${Y.fontSize} ${Y.fontFamily}`)});return}}for(let Vt of q.childNodes)if(Vt.nodeType===3&&rt){Rt();let P=D(Vt,q,Y,ct,ot,at);P&&k.push(P)}else Vt.nodeType===1&&X(Vt,ct,B)},$=L;X(document.body,"screen",!1);for(let q of C)q.front=!0;L.push(...C),A&&t.classList.add("gl-ui"),t.offsetHeight,t.classList.remove("gl-snap"),d.takeRecords(),o=L,a=!1,c=performance.now(),p++}function R(){for(let A of m){let L=o.findIndex(Y=>Y.type==="text"&&Y.el===A),C=o.filter(Y=>Y.type==="text"&&Y.el===A);if(!C.length&&L<0){m.clear(),x();break}let X=C[0],$=getComputedStyle(A),q=[];for(let Y of A.childNodes){if(Y.nodeType!==3)continue;let ct=D(Y,A,$,X.layer,X.clip,X.chain);ct&&(ct.deco=X.deco,q.push(ct))}let K=o.filter(Y=>!(Y.type==="text"&&Y.el===A)),st=Math.min(L,K.length);o=K.slice(0,st).concat(q,K.slice(st))}m.clear()}function N(A,L){let C=1;for(let X of A){let $=L.get(X);if($===void 0&&($=+X.opacity,L.set(X,$)),C*=$,C<=.003)return 0}return C}function O(A,L,C,X,$,q){if((L.bg||L.grad)&&(bh(A,C,X,$,q,L.r),L.bg&&(A.fillStyle=L.bg,A.fill()),L.grad)){let K=L.grad,st;if(K.kind==="linear"){let Y=(K.angle-90)*Math.PI/180,ct=C+$/2,B=X+q/2,k=Math.abs($*Math.cos(Y))+Math.abs(q*Math.sin(Y));st=A.createLinearGradient(ct-Math.cos(Y)*k/2,B-Math.sin(Y)*k/2,ct+Math.cos(Y)*k/2,B+Math.sin(Y)*k/2);for(let[rt,ot]of K.stops)st.addColorStop(rt,ot);A.fillStyle=st,A.fill()}else{A.save(),A.translate(C+$*K.cx,X+q*K.cy),A.scale($*K.rx,q*K.ry),st=A.createRadialGradient(0,0,0,0,0,1);for(let[Y,ct]of K.stops)st.addColorStop(Y,ct);A.fillStyle=st,A.fillRect(-1/K.rx*K.cx-1,-1/K.ry*K.cy-1,1/K.rx+2,1/K.ry+2),A.restore()}}if(L.hasBorder){let K=L.bw,st=K.every(ct=>ct===K[0])&&L.bc.every(ct=>ct===L.bc[0])&&L.bstyle.every(ct=>ct===L.bstyle[0]),Y=(ct,B)=>ct==="dashed"?[Math.max(4,B*4),Math.max(3,B*3)]:ct==="dotted"?[.01,B*2.2]:[];if(st)A.lineWidth=K[0],A.strokeStyle=L.bc[0],A.setLineDash(Y(L.bstyle[0],K[0])),A.lineCap=L.bstyle[0]==="dotted"?"round":"butt",bh(A,C+K[0]/2,X+K[0]/2,$-K[0],q-K[0],L.r.map(ct=>Math.max(0,ct-K[0]/2))),A.stroke(),A.setLineDash([]),A.lineCap="butt";else{let ct=[[C,X+K[0]/2,C+$,X+K[0]/2],[C+$-K[1]/2,X,C+$-K[1]/2,X+q],[C,X+q-K[2]/2,C+$,X+q-K[2]/2],[C+K[3]/2,X,C+K[3]/2,X+q]];for(let B=0;B<4;B++)!(K[B]>0)||!L.bc[B]||L.bstyle[B]==="none"||(A.lineWidth=K[B],A.strokeStyle=L.bc[B],A.setLineDash(Y(L.bstyle[B],K[B])),A.lineCap=L.bstyle[B]==="dotted"?"round":"butt",A.beginPath(),A.moveTo(ct[B][0],ct[B][1]),A.lineTo(ct[B][2],ct[B][3]),A.stroke());A.setLineDash([]),A.lineCap="butt"}}}function W(A,L,C,X){A.font=L.font,A.fillStyle=L.color,s&&(A.letterSpacing=L.ls?L.ls+"px":"0px");for(let $ of L.frags){let q=C+$.dx,K=X+$.dy;if(!(K<-60||K-L.fm.asc>h+60)){if(!L.ls||s)A.fillText($.t,q,K);else{let st=q;for(let Y of $.t)A.fillText(Y,st,K),st+=A.measureText(Y).width+L.ls}if(L.deco){let st=A.measureText($.t).width;A.fillStyle=L.deco.color,A.fillRect(q,K+L.deco.off,st,L.deco.th),A.fillStyle=L.color}}}}function Q(A=!1){let L=performance.now();l&&L>=l&&(a=!0,l=0),a&&L-c>120?g():m.size&&!a&&R();let C=new Map,X=new Map,$=st=>{let Y=X.get(st);return Y||(Y=st.getBoundingClientRect(),X.set(st,Y)),Y};for(let st in n){let{ctx:Y,c:ct}=n[st];Y.setTransform(1,0,0,1,0,0),Y.clearRect(0,0,ct.width,ct.height),Y.setTransform(f,0,0,f,0,0),Y.textBaseline="alphabetic"}let q=!1,K=()=>{q=!0;let st=t.querySelector(".top");if(!st)return;let Y=st.getBoundingClientRect().bottom;if(!(Y<=0))for(let ct in n){let{ctx:B}=n[ct];B.save(),B.globalAlpha=1,B.globalCompositeOperation="destination-out";let k=B.createLinearGradient(0,0,0,Y+28);k.addColorStop(0,"rgba(0,0,0,1)"),k.addColorStop(Math.max(0,(Y-6)/(Y+28)),"rgba(0,0,0,1)"),k.addColorStop(1,"rgba(0,0,0,0)"),B.fillStyle=k,B.fillRect(0,0,u,Y+28),B.restore()}};for(let st of o){st.front&&!q&&K();let Y=$(st.el);if(Y.bottom<-40||Y.top>h+40||Y.right<-40||Y.left>u+40||st.chain[0].visibility==="hidden")continue;let B=N(st.chain,C);if(st.pcs&&(B*=+st.pcs.opacity),B<=.003)continue;st.type==="text"&&(Math.abs(Y.width-st.w0)>1.5||Math.abs(Y.height-st.h0)>1.5)&&x();let k=n[st.layer].ctx;k.globalAlpha=B;let rt=!1;if(st.clip){let ot=$(st.clip);if(Y.bottom<ot.top||Y.top>ot.bottom)continue;k.save(),rt=!0,k.beginPath(),k.rect(ot.left,ot.top,ot.width,ot.height),k.clip()}if(st.type==="box"){let ot=st.inset||[0,0,0,0];O(k,st,Y.left+ot[3],Y.top+ot[0],Y.width-ot[1]-ot[3],Y.height-ot[0]-ot[2])}else if(st.type==="text")W(k,st,Y.left,Y.top);else if(st.type==="field"){let ot=st.el,at=ot.tagName==="SELECT",Rt=at?(ot.options[ot.selectedIndex]||{}).text||"":ot.value,Vt=Rt||ot.placeholder||"";if(Vt){k.font=st.font,s&&(k.letterSpacing="0px"),k.fillStyle=Rt?st.color:st.phColor;let P=Y.top+Y.height/2+(st.fm.asc-st.fm.desc)/2;k.fillText(ot.type==="password"?"\u2022".repeat(Rt.length):Vt,Y.left+st.pl,P)}if(at){k.strokeStyle=st.color,k.lineWidth=1.5;let P=Y.right-Math.max(16,st.pr),qt=Y.top+Y.height/2;k.beginPath(),k.moveTo(P-5,qt-2.5),k.lineTo(P,qt+2.5),k.lineTo(P+5,qt-2.5),k.stroke()}}else if(st.type==="img"){let ot=st.img;if(ot.complete!==!1&&(ot.naturalWidth||ot.width))try{k.drawImage(ot,Y.left,Y.top,Y.width,Y.height)}catch{}}rt&&k.restore()}q||K();for(let st in n)n[st].ctx.globalAlpha=1;return!0}return{canvas:n.screen.c,paperCanvas:n.paper.c,setSize:_,draw:Q,markDirty:x,get version(){return p},get items(){return o}}}var Xs=[{name:"\u0422\u0415\u041B\u0415\u0424\u041E\u041D\u042B",title:"\u0420\u0430\u0437\u0431\u0438\u043B\u0438 \u044D\u043A\u0440\u0430\u043D, \u0441\u0435\u043B \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440, \u043D\u0435&nbsp;\u0437\u0430\u0440\u044F\u0436\u0430\u0435\u0442\u0441\u044F",text:"\u042D\u043A\u0440\u0430\u043D \u043C\u0435\u043D\u044F\u0435\u043C \u043F\u0440\u0438 \u0432\u0430\u0441 \u0437\u0430 40 \u043C\u0438\u043D\u0443\u0442. \u0421\u0442\u0430\u0432\u0438\u043C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B \u0438\u043B\u0438 \u0445\u043E\u0440\u043E\u0448\u0443\u044E \u043A\u043E\u043F\u0438\u044E, \u0440\u0430\u0437\u043D\u0438\u0446\u0443 \u043F\u043E\u043A\u0430\u0436\u0435\u043C \u043D\u0430&nbsp;\u0441\u0442\u043E\u043B\u0435.",price:"\u043E\u0442 1 200 \u20BD",time:"\u043E\u0442 30 \u043C\u0438\u043D\u0443\u0442"},{name:"\u041D\u041E\u0423\u0422\u0411\u0423\u041A\u0418",title:"\u0413\u0440\u0435\u0435\u0442\u0441\u044F, \u0448\u0443\u043C\u0438\u0442, \u043D\u0435&nbsp;\u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F, \u0437\u0430\u043B\u0438\u043B\u0438 \u0447\u0430\u0435\u043C",text:"\u0427\u0438\u0441\u0442\u0438\u043C \u043E\u0442 \u043F\u044B\u043B\u0438 \u0441 \u043D\u043E\u0432\u043E\u0439 \u0442\u0435\u0440\u043C\u043E\u043F\u0430\u0441\u0442\u043E\u0439, \u043C\u0435\u043D\u044F\u0435\u043C \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u0438 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B, \u0441\u043F\u0430\u0441\u0430\u0435\u043C \u0437\u0430\u043B\u0438\u0442\u044B\u0435 \u043F\u043B\u0430\u0442\u044B \u0438&nbsp;\u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0430&nbsp;\u043D\u0438\u0445.",price:"\u043E\u0442 1 900 \u20BD",time:"1-2 \u0434\u043D\u044F"},{name:"\u0422\u0415\u041B\u0415\u0412\u0418\u0417\u041E\u0420\u042B",title:"\u041D\u0435\u0442 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438, \u043F\u043E\u043B\u043E\u0441\u044B, \u0449\u0451\u043B\u043A\u0430\u0435\u0442 \u0438&nbsp;\u0433\u0430\u0441\u043D\u0435\u0442",text:"\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0443 \u0438 \u0431\u043B\u043E\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u043C\u0435\u043D\u044F\u0435\u043C \u0437\u0430 \u0434\u0435\u043D\u044C. \u0411\u043E\u043B\u044C\u0448\u0438\u0435 \u044D\u043A\u0440\u0430\u043D\u044B \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u043C \u0441\u0430\u043C\u0438, \u043C\u0430\u0441\u0442\u0435\u0440 \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u0432&nbsp;\u0434\u0435\u043D\u044C \u0437\u0432\u043E\u043D\u043A\u0430.",price:"\u043E\u0442 1 200 \u20BD",time:"1-3 \u0434\u043D\u044F"},{name:"\u041F\u0420\u0418\u0421\u0422\u0410\u0412\u041A\u0418",title:"\u0420\u0435\u0432\u0451\u0442 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440, \u0443\u0432\u043E\u0434\u0438\u0442 \u0441\u0442\u0438\u043A, \u043D\u0435\u0442 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u043F\u043E&nbsp;HDMI",text:"\u0427\u0438\u0441\u0442\u0438\u043C, \u043C\u0435\u043D\u044F\u0435\u043C \u0441\u0442\u0438\u043A\u0438 \u0438 \u0440\u0430\u0437\u044A\u0451\u043C\u044B. \u041F\u043E\u0441\u043B\u0435 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u0433\u043E\u043D\u044F\u0435\u043C \u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0443 \u0447\u0430\u0441 \u043F\u043E\u0434 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439, \u0447\u0442\u043E\u0431\u044B \u043D\u0435&nbsp;\u0432\u0435\u0440\u043D\u0443\u043B\u0430\u0441\u044C.",price:"\u043E\u0442 1 300 \u20BD",time:"1 \u0434\u0435\u043D\u044C"},{name:"\u0417\u0412\u0423\u041A",title:"\u0425\u0440\u0438\u043F\u0438\u0442 \u043A\u043E\u043B\u043E\u043D\u043A\u0430, \u043C\u043E\u043B\u0447\u0438\u0442 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C, \u0436\u0443\u0451\u0442 \u043A\u0430\u0441\u0441\u0435\u0442\u0443",text:"\u041A\u043E\u043B\u043E\u043D\u043A\u0438, \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u0438, \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u0438 \u0438 \u043C\u0430\u0433\u043D\u0438\u0442\u043E\u0444\u043E\u043D\u044B. \u041F\u0430\u0441\u0441\u0438\u043A\u0438 \u0438 \u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u043D\u0430\u0439\u0434\u0451\u043C \u0434\u0430\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0441\u0442\u0430\u0440\u0448\u0435 \u0432\u0430\u0441.",price:"\u043E\u0442 900 \u20BD",time:"2-5 \u0434\u043D\u0435\u0439"},{name:"\u0412\u0421\u0401 \u041E\u0421\u0422\u0410\u041B\u042C\u041D\u041E\u0415",title:"\u0424\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442, \u043F\u0443\u043B\u044C\u0442, \u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0447\u0430\u0441\u044B",text:"\u0415\u0441\u043B\u0438 \u043E\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0440\u043E\u0437\u0435\u0442\u043A\u0443 \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043E\u0442 \u0431\u0430\u0442\u0430\u0440\u0435\u0435\u043A, \u043D\u0435\u0441\u0438\u0442\u0435. \u0427\u0435\u0441\u0442\u043D\u043E \u0441\u043A\u0430\u0436\u0435\u043C, \u0435\u0441\u0442\u044C \u043B\u0438 \u0441\u043C\u044B\u0441\u043B \u0447\u0438\u043D\u0438\u0442\u044C.",price:"\u043E\u0442 800 \u20BD",time:"\u043F\u043E \u043C\u0435\u0441\u0442\u0443"}];function Eh(){let i=document.documentElement,t=g=>document.querySelector(g),e=g=>[...document.querySelectorAll(g)],n=g=>scrollTo({top:g,behavior:"smooth"}),s=[];function r(g){let R=document.getElementById(g);return R?R.getBoundingClientRect().top+scrollY:0}function o(g){if(g==="efir")return n(0);n(r(g))}if(e("[data-go]").forEach(g=>g.addEventListener("click",R=>{R.preventDefault(),o(g.dataset.go)})),matchMedia("(pointer: coarse)").matches){let g=t(".hint span");g&&(g.textContent="\u041B\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u0432\u043D\u0438\u0437, \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u043C \u043A\u0430\u043D\u0430\u043B")}let a=t("#kanaly"),l=Object.fromEntries(e("[data-osd]").map(g=>[g.dataset.osd,g])),c=-1;function u(g){let R=r("kanaly"),N=a.offsetHeight-innerHeight;return R+N*(g+.5)/Xs.length}e(".remote [data-ch]").forEach(g=>g.addEventListener("click",()=>{let R=g.dataset.ch,N=Math.max(0,c),O=R==="prev"?Math.max(0,N-1):R==="next"?Math.min(Xs.length-1,N+1):+R;if(R==="next"&&N===Xs.length-1)return o("ceny");if(i.classList.contains("no-gl"))return h(Math.max(0,O));n(u(O),{duration:.9})}));function h(g){if(g===c||(c=g,e(".remote__keys button").forEach((O,W)=>O.classList.toggle("is-on",W===g)),g<0))return;let R=Xs[g];l.num.textContent=String(g+1).padStart(2,"0"),l.name.textContent=R.name,l.title.innerHTML=R.title,l.text.innerHTML=R.text,l.price.textContent=R.price,l.time.textContent=R.time;let N=t("#kanaly .stage");N.classList.remove("flip"),N.offsetWidth,N.classList.add("flip"),s.forEach(O=>O(g))}let f=e(".tt__page"),p=e(".tt__fast button"),_=t('[data-tt="pg"]');function x(g){f.forEach(N=>N.classList.toggle("is-on",N.dataset.page===g)),p.forEach(N=>{let O=N.dataset.goPage===g;N.classList.toggle("is-on",O),N.setAttribute("aria-selected",O)}),_.textContent=g;let R=t(".tt__screen");R.classList.remove("roll"),R.offsetWidth,R.classList.add("roll")}p.forEach(g=>g.addEventListener("click",()=>x(g.dataset.goPage)));let m=t('[data-tt="clock"]'),d=()=>{let g=new Date,R=N=>String(N).padStart(2,"0");m.textContent=`${R(g.getDate())}.${R(g.getMonth()+1)} ${R(g.getHours())}:${R(g.getMinutes())}:${R(g.getSeconds())}`};d(),setInterval(d,1e3);let E=t(".tt__screen");"IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&new IntersectionObserver((g,R)=>{g.forEach(N=>{N.isIntersecting&&(E.classList.add("tt-on"),R.disconnect())})},{threshold:0,rootMargin:"0px 0px 15% 0px"}).observe(E);let b=t(".form");b.addEventListener("submit",g=>{if(g.preventDefault(),b.phone.value.replace(/\D/g,"").length<10){b.phone.focus(),b.classList.add("bad");return}b.classList.remove("bad"),b.classList.add("sent")});let M=t("[data-endcard]");if(M){let g=()=>Vo(M.getContext("2d"),M.width,M.height,null);document.fonts.ready.then(g),setInterval(g,1e3)}let I=!1,w=null,D=(g,R)=>i.style.setProperty(g,R.toFixed(3)),F=(g,R=0,N=1)=>Math.min(N,Math.max(R,g)),y=(g,R,N)=>F((N-g)/(R-g));return{bindScroll(g){n=g},onChannel(g){s.push(g)},setChannel:h,channelLabel:g=>`\u041A\u0410\u041D\u0410\u041B ${String(g+1).padStart(2,"0")}  ${Xs[g].name}`,heroState(g,R){D("--hero-in",y(.45,1,R)),D("--hero-out",1-y(.06,.2,g))},workshopState(g){D("--ws-in",y(.06,.2,g)*(1-y(.44,.56,g)))},channelsIn(g){g!==w&&(w=g,i.style.setProperty("--ch-in",g?"1":"0"),i.style.setProperty("--ch-pe",g?"auto":"none"))},paperUnderHeader(g){g!==I&&(I=g,i.classList.toggle("ui-paper",g))},watchState(g){D("--wt-in",.35+.65*y(0,.14,g))}}}var fl=i=>document.querySelector(i),di=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),ji=(i,t,e)=>{let n=di((e-i)/(t-i));return n*n*(3-2*n)},qs=matchMedia("(prefers-reduced-motion: reduce)").matches,Rh=matchMedia("(pointer: coarse)").matches,pn=Rh||innerWidth<760,Og=document.documentElement.dataset.base||"assets/",qo=new URLSearchParams(location.search),sn=qo.has("still"),wh=qo.get("boot")==="hold",Ys=document.documentElement,Sn=Eh();function Bg(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function Ah(i){i&&console.error(i),Ys.classList.add("no-gl"),Ys.classList.remove("booting","gl-ui")}Bg()?Hg().catch(Ah):Ah();function zg(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return/swiftshader|llvmpipe|software|basic render/i.test(String(n))}catch{return!1}}function kg(){let i=new de({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      precision highp float;
      uniform float uTime; uniform vec2 uDim; varying vec2 vUv;
      void main() {
        vec2 uv = vUv;
        float r = length((uv - 0.5) * vec2(uDim.x / uDim.y, 1.0) * 0.9);
        vec3 col = vec3(0.004, 0.005, 0.012) + vec3(0.016, 0.02, 0.05) * smoothstep(0.9, 0.0, r);
        col *= 0.78 + 0.22 * (0.5 + 0.5 * sin(uv.y * uDim.y * 2.094));
        float b = fract(uv.y * 0.6 - uTime * 0.06);
        col += vec3(0.01, 0.012, 0.024) * smoothstep(0.0, 0.1, b) * smoothstep(0.24, 0.1, b);
        gl_FragColor = vec4(col, 1.0);
      }`,uniforms:{uTime:{value:0},uDim:{value:new Lt(1,1)}},depthTest:!1,depthWrite:!1}),t=new Yt(new Le(2,2),i);t.frustumCulled=!1;let e=new Pe;return e.add(t),{scene:e,camera:new Be(-1,1,1,-1,0,1),mat:i}}async function Hg(){let i=fl("#gl"),t=new zo({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance"});t.outputColorSpace=cn,t.toneMapping=un,t.autoClear=!1;let e=zg(t)&&!qo.has("full"),n=e?.6:Math.min(devicePixelRatio||1,pn?1.5:1.75),s=e?1:Math.min(devicePixelRatio||1,2);t.setPixelRatio(n);let r=new $i(t).fromScene(new Ho,.04).texture,o=["ch-phone","ch-laptop","ch-tv","ch-console","ch-audio","ch-camera"],a=Og;await Promise.race([Promise.all([document.fonts.load('40px "Bedstead"'),document.fonts.load('500 40px "STIX Two Text"'),document.fonts.load('italic 600 40px "STIX Two Text"'),document.fonts.load('500 14px "IBM Plex Mono"')]),new Promise(Tt=>setTimeout(Tt,2500))]);let l=uh(1024,820),c=ph(1024,820),u=new we(1024,820,{type:tn,samples:pn||e?0:4});e&&u.setSize(512,410);let h=0,f=_h({base:a,testTex:l.tex,chanTex:u.texture,osdTex:c.tex,mobile:pn||e});await f.ready(),h=.55;let p=vh({base:a,names:o,mobile:pn||e}),_=Wo({base:a,name:"board",mobile:pn||e,smoke:.06,push:.14}),x=Wo({base:a,name:"watch",mobile:pn||e,smoke:.05,dust:1.2,smokeColor:[1,.78,.45],push:.12}),m=Wo({base:a,name:"radio",mobile:pn||e,smoke:.07,push:.1}),d=kg(),E=Th({scale:s}),b=yh(t,{mobile:pn,lite:e}),M=new ge(E.paperCanvas);M.premultiplyAlpha=!0,M.generateMipmaps=!1,M.minFilter=Me,M.colorSpace=De;let I=dh(e?256:512,11),w=Sh({contentTexture:M,grungeTexture:I,mobile:pn||e}),D=["efir","kanaly","ceny","masterskaya","vestnik","shred","garantiya","svyaz"],F=Object.fromEntries(D.map(Tt=>[Tt,document.getElementById(Tt)])),y={},g={};function R(Tt){let T=0;for(let v=Tt;v;v=v.offsetParent)T+=v.offsetTop;return T}function N(){for(let Tt of D)y[Tt]=R(F[Tt]),g[Tt]=F[Tt].offsetHeight}let O=innerWidth,W=innerHeight,Q=1;function A(){O=innerWidth,W=innerHeight,t.setPixelRatio(n),t.setSize(O,W,!1),b.setSize(O,W,n),E.setSize(O,W,s),w.setSize(O,W,(fl(".top")?fl(".top").offsetHeight:64)+6),d.mat.uniforms.uDim.value.set(O*n,W*n),f.setLayout(O,W),p.setAspect(O/W),_.setAspect(O/W),x.setAspect(O/W),m.setAspect(O/W),Q=di(.2+(O/W-9/16)/(4/3-9/16),.25,1)*(pn?.5:1),N()}A(),addEventListener("resize",A),new ResizeObserver(()=>N()).observe(document.body),await p.ensure(0),p.show(0),h=.8;let L=window.requestIdleCallback||(Tt=>setTimeout(Tt,300));L(()=>{for(let Tt=1;Tt<o.length;Tt++)p.ensure(Tt)}),setTimeout(()=>L(()=>{_.load(),x.load(),m.load()}),sn?0:4e3);let C=!qs&&!Rh?new hh({lerp:.09,wheelMultiplier:.9}):null;Sn.bindScroll((Tt,T)=>C?C.scrollTo(Tt,{duration:1.4,...T}):scrollTo({top:Tt,behavior:qs?"auto":"smooth"}));let X=new Lt;addEventListener("pointermove",Tt=>{X.set(Tt.clientX/O*2-1,-(Tt.clientY/W*2-1))},{passive:!0});let $=performance.now(),q=qs||sn?0:1600,K=!1,st=0,Y="test",ct=0,B=0,k=0,rt=-1;Sn.onChannel(()=>{k=1});let ot=new Ls,at=0,Rt=0,Vt=!0,P=!1,qt=!1,Ut={acc:0,n:0},bt=-1,xt=0,Jt=-1,Mt={hero:{look:()=>null,draw:(Tt,T,v)=>(p.setAspect(f.glassAspect),p.update(T,v,{pointer:null,wide:!1,inScreen:!0}),t.setRenderTarget(u),t.setClearColor(0,1),t.clear(),t.render(p.scene,p.camera),p.setAspect(O/W),f.prepare(t),{scene:f.scene,camera:f.camera})},chan:{draw:(Tt,T,v)=>(p.update(T,v,{pointer:X,wide:O/W>1.05}),{scene:p.scene,camera:p.camera})},tt:{draw:(Tt,T)=>(d.mat.uniforms.uTime.value=T,{scene:d.scene,camera:d.camera})},work:{draw:(Tt,T,v)=>(_.update(T,v,{p:Tt.p??0,pointer:X,wide:O/W>1.05}),{scene:_.scene,camera:_.camera})},paper:{custom:!0,clear:[0,0,0,0]},watch:{draw:(Tt,T,v)=>(x.update(T,v,{p:Tt.p??0,pointer:X,wide:O/W>1.05}),{scene:x.scene,camera:x.camera})},radio:{draw:(Tt,T,v)=>(m.update(T,v,{p:Tt.p??0,pointer:X,wide:O/W>1.05}),{scene:m.scene,camera:m.camera})}};function Wt(Tt,T,v,V){if(T.id==="paper")return b.renderScene(Tt,()=>w.render(t,{mode:T.mode,prog:T.prog,cut:T.cut,time:v,env:r}),[0,0,0,0]);let it=Mt[T.id].draw(T,v,V);return b.renderScene(Tt,()=>t.render(it.scene,it.camera),[0,0,0,1])}function fe(){let Tt=Math.min(ot.getDelta(),.25),T=sn?.5:Math.min(Tt,.05);at+=sn?.5:Tt;let v=at;if(C&&C.raf(performance.now()),!sn&&P&&(Ut.acc+=Tt,Ut.n++,Ut.n>=90&&(Ut.acc/Ut.n>1/40&&n>(e?.5:.9)&&(n=Math.max(e?.45:.85,n-.25),A()),Ut.acc=0,Ut.n=0)),!K){let Ue=(performance.now()-$)/Math.max(1,q);h=Math.max(h,Math.min(.99,.5+Ue*.5)),wh&&(h=.62),Ue>=1&&Vt&&!wh&&(Vt=!1,h=1,K=!0,st=sn?v-10:v,Ys.classList.remove("booting"),Ys.classList.add("booted"))}v-Rt>(K?1:.05)&&(l.draw(K?null:h,v),Rt=v);let V=scrollY,j=Ue=>di((V-y[Ue])/Math.max(1,g[Ue]-W)),it=Ue=>(V+W-y[Ue])/W,et=j("efir"),Ct=K?ji(0,2.2,v-st):0,dt=qs?0:1-Ct,wt=ji(.18,.92,et),Et=Math.max(dt,wt),ut=wt>=dt?1:0;Sn.heroState(et,Ct),K&&v-st>2.6&&(Y==="test"&&(Y="channel",B=v,k=Math.max(k,.9)),!sn&&et<.05&&v-B>4.2&&(ct=(ct+1)%o.length,B=v,k=1),et>=.05&&(ct=0));let pt=f.screen.material.uniforms;pt.uMix.value+=((Y==="channel"?1:0)-pt.uMix.value)*(sn?1:1-Math.pow(5e-4,Tt)),pt.uOsdA.value=Y==="channel"?di((v-B)*2)*(1-ji(.4,.8,Et)):0,k=sn?0:Math.max(0,k-Tt*3.2),pt.uStatic.value=k*.9,pt.uPower.value=1,pt.uBright.value=1.05+.55*pt.uMix.value;let Nt=y.kanaly-V;Sn.channelsIn(Nt<=2);let It=j("kanaly"),mt=Nt<=1&&V<y.ceny,Ft=mt?Math.min(o.length-1,Math.floor(It*o.length*.999)):V<y.kanaly?ct:o.length-1;mt?Ft!==rt&&(rt!==-1&&(k=1),rt=Ft,Sn.setChannel(Ft)):V<y.kanaly&&(rt=-1,Sn.setChannel(-1)),p.current!==Ft&&p.show(Ft),c.lastI!==Ft&&(c.draw(Ft+1,Sn.channelLabel(Ft)),c.lastI=Ft),y.ceny-V<W*2.5&&_.load(),y.vestnik-V<W*2&&x.load(),y.garantiya-V<W*2&&m.load();let U=Et>.965&&K;U!==qt&&(sn||(k=Math.max(k,.8)),qt=U);let lt=j("masterskaya"),ft=ji(.42,.84,lt),yt=j("shred"),nt,tt=null,vt=0,Ot=0;V<y.kanaly+1&&!U?nt={id:"hero"}:it("ceny")<0?nt={id:"chan"}:it("masterskaya")<0?(nt={id:"chan"},tt={id:"tt"},vt=di(it("ceny")*1.08),Ot=4,vt>=1&&(nt=tt,tt=null)):lt<=0||ft<=0?(nt={id:"tt"},tt={id:"work",p:lt},vt=di(it("masterskaya")*1.08),Ot=4,vt>=1&&(nt=tt,tt=null)):ft<1?(nt={id:"work",p:lt},tt={id:"paper",mode:"curl",prog:ft},vt=ft,Ot=2):yt<=0?nt={id:"paper",mode:"flat"}:yt<1?(nt={id:"paper",mode:"shred",cut:yt},tt={id:"watch",p:j("garantiya")},vt=yt,Ot=3):it("svyaz")<0?nt={id:"watch",p:j("garantiya")}:(nt={id:"watch",p:j("garantiya")},tt={id:"radio",p:j("svyaz")},vt=di(it("svyaz")*1.08),Ot=4,vt>=1&&(nt=tt,tt=null));let ee=Ue=>{if(Ue.id==="hero"){let fi=Xo(Vs.hero,Vs.boot,dt);return Xo(fi,Vs.chan,ji(.72,.96,Et))}return Vs[Ue.id]},Kt=ee(nt),We=tt?ee(tt):null,Xe=tt?Xo(Kt,We,Ot>=2?ji(.15,.85,vt):vt):Kt,$s=nt.id==="paper"&&nt.mode!=="shred"||tt&&tt.id==="paper"&&vt>.9||nt.id==="paper"&&nt.cut<.85;Sn.paperUnderHeader($s),Sn.workshopState(lt),Sn.watchState(j("garantiya")),nt.id==="hero"&&f.update(v,T,{dive:Et,pointer:X});let qe=performance.now();V!==bt&&(bt=V,xt=qe),(qe-xt<900||qe-Jt>200||sn)&&(E.draw(),b.setUi(E.canvas),(nt.id==="paper"||tt&&tt.id==="paper")&&(M.needsUpdate=!0),Jt=qe);let ts=Wt(0,nt,v,T),Zs=tt?Wt(1,tt,v,T):null;b.render({cur:ts,next:Zs,t:vt,type:Ot,curLook:Kt,nextLook:We,look:Xe,time:v,still:sn,reduced:qs,lensFactor:Q,borderFactor:pn?.5:1,ui:qo.has("noui")?0:1,static:nt.id==="chan"?k*.6:0,noiseFactor:(devicePixelRatio||1)>=2?1:.7}),P||(P=!0,Ys.classList.add("gl-live","gl-ui")),requestAnimationFrame(fe)}requestAnimationFrame(fe),window.__kineskop={renderer:t,tv:f,ch:p,lenis:C,layer:E,film:b}}
