var Nh=Object.defineProperty;var Fh=(i,t,e)=>t in i?Nh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var It=(i,t,e)=>Fh(i,typeof t!="symbol"?t+"":t,e);var zl=0,wa=1,kl=2;var Aa=1,Hl=2,xn=3,In=0,Te=1,Qe=2,Un=0,ei=1,Ra=2,Ca=3,Ia=4,Vl=5,Vn=100,Gl=101,Wl=102,Xl=103,ql=104,Yl=200,Zl=201,$l=202,Jl=203,yr=204,Mr=205,Kl=206,Ql=207,jl=208,tc=209,ec=210,nc=211,ic=212,sc=213,rc=214,Gr=0,Wr=1,Xr=2,ni=3,qr=4,Yr=5,Zr=6,$r=7,Jr=0,oc=1,ac=2,un=0,lc=1,cc=2,hc=3,uc=4,dc=5,fc=6,pc=7;var Pa=300,oi=301,ai=302,Kr=303,Qr=304,Ns=306,Di=1e3,gn=1001,Sr=1002,Be=1003,mc=1004;var Fs=1005;var Se=1006,jr=1007;var yn=1008;var dn=1009,La=1010,Da=1011,Gi=1012,to=1013,qn=1014,fn=1015,je=1016,eo=1017,no=1018,Wi=1020,Ua=35902,Na=35899,Fa=1021,Oa=1022,tn=1023,Ui=1026,Xi=1027,io=1028,so=1029,Ba=1030,ro=1031;var oo=1033,Os=33776,Bs=33777,zs=33778,ks=33779,ao=35840,lo=35841,co=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37808,go=37809,vo=37810,_o=37811,xo=37812,yo=37813,Mo=37814,So=37815,bo=37816,To=37817,Eo=37818,wo=37819,Ao=37820,Ro=37821,Co=36492,Io=36494,Po=36495,Lo=36283,Do=36284,Uo=36285,No=36286;var fs=2300,br=2301,_r=2302,_a=2400,xa=2401,ya=2402;var gc=3200,vc=3201;var Fo=0,_c=1,Ne="",pe="srgb",cn="srgb-linear",ps="linear",ee="srgb";var ti=7680;var Ma=519,xc=512,yc=513,Mc=514,za=515,Sc=516,bc=517,Tc=518,Ec=519,Sa=35044;var ka="300 es",ln=2e3,ms=2001;var Pn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=1234567,us=Math.PI/180,Ni=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Ha(i,t){return(i%t+t)%t}function Oh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bh(i,t,e){return i!==t?(e-i)/(t-i):0}function ds(i,t,e){return(1-e)*i+e*t}function zh(i,t,e,n){return ds(i,t,1-Math.exp(-e*n))}function kh(i,t=1){return t-Math.abs(Ha(i,t*2)-t)}function Hh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wh(i,t){return i+Math.random()*(t-i)}function Xh(i){return i*(.5-Math.random())}function qh(i){i!==void 0&&(gl=i);let t=gl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yh(i){return i*us}function Zh(i){return i*Ni}function $h(i){return(i&i-1)===0&&i!==0}function Jh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),f=o((t+n)/2),h=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),v=o((n-t)/2);switch(s){case"XYX":i.set(a*f,l*h,l*u,a*c);break;case"YZY":i.set(l*u,a*f,l*h,a*c);break;case"ZXZ":i.set(l*h,l*u,a*f,a*c);break;case"XZX":i.set(a*f,l*v,l*p,a*c);break;case"YXY":i.set(l*p,a*f,l*v,a*c);break;case"ZYZ":i.set(l*v,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Va={DEG2RAD:us,RAD2DEG:Ni,generateUUID:qi,clamp:Kt,euclideanModulo:Ha,mapLinear:Oh,inverseLerp:Bh,lerp:ds,damp:zh,pingpong:kh,smoothstep:Hh,smootherstep:Vh,randInt:Gh,randFloat:Wh,randFloatSpread:Xh,seededRandom:qh,degToRad:Yh,radToDeg:Zh,isPowerOfTwo:$h,ceilPowerOfTwo:Jh,floorPowerOfTwo:Kh,setQuaternionFromProperEuler:Qh,normalize:Le,denormalize:Pi},Lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],u=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=v,t[e+3]=_;return}if(h!==_||l!==u||c!==p||f!==v){let m=1-a,d=l*u+c*p+f*v+h*_,T=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){let C=Math.sqrt(b),w=Math.atan2(C,d*T);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}let M=a*T;if(l=l*m+u*M,c=c*m+p*M,f=f*m+v*M,h=h*m+_*M,m===1-a){let C=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=C,c*=C,f*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[o],u=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+f*h+l*p-c*u,t[e+1]=l*v+f*u+c*h-a*p,t[e+2]=c*v+f*p+a*u-l*h,t[e+3]=f*v-a*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),h=a(r/2),u=l(n/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*p*v,this._y=c*p*h-u*f*v,this._z=c*f*v+u*p*h,this._w=c*f*h-u*p*v;break;case"YXZ":this._x=u*f*h+c*p*v,this._y=c*p*h-u*f*v,this._z=c*f*v-u*p*h,this._w=c*f*h+u*p*v;break;case"ZXY":this._x=u*f*h-c*p*v,this._y=c*p*h+u*f*v,this._z=c*f*v+u*p*h,this._w=c*f*h-u*p*v;break;case"ZYX":this._x=u*f*h-c*p*v,this._y=c*p*h+u*f*v,this._z=c*f*v-u*p*h,this._w=c*f*h+u*p*v;break;case"YZX":this._x=u*f*h+c*p*v,this._y=c*p*h+u*f*v,this._z=c*f*v-u*p*h,this._w=c*f*h-u*p*v;break;case"XZY":this._x=u*f*h-c*p*v,this._y=c*p*h-u*f*v,this._z=c*f*v+u*p*h,this._w=c*f*h+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=n+a+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-e)*f)/c,u=Math.sin(e*f)/c;return this._w=o*h+this._w*u,this._x=n*h+this._x*u,this._y=s*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),f=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*f,this.y=n+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $o.copy(this).projectOnVector(t),this.sub($o)}reflect(t){return this.sub($o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new H,vl=new Ln,kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],p=n[5],v=n[8],_=s[0],m=s[3],d=s[6],T=s[1],b=s[4],M=s[7],C=s[2],w=s[5],P=s[8];return r[0]=o*_+a*T+l*C,r[3]=o*m+a*b+l*w,r[6]=o*d+a*M+l*P,r[1]=c*_+f*T+h*C,r[4]=c*m+f*b+h*w,r[7]=c*d+f*M+h*P,r[2]=u*_+p*T+v*C,r[5]=u*m+p*b+v*w,r[8]=u*d+p*M+v*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*r,p=c*r-o*l,v=e*h+n*u+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/v;return t[0]=h*_,t[1]=(s*c-f*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(f*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jo=new kt;function Ga(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wc(){let i=Fi("canvas");return i.style.display="block",i}var _l={};function Oi(i){i in _l||(_l[i]=!0,console.warn(i))}function Ac(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xl=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yl=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jh(){let i={enabled:!0,workingColorSpace:cn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ne?ps:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cn]:{primaries:t,whitePoint:n,transfer:ps,toXYZ:xl,fromXYZ:yl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pe},outputColorSpaceConfig:{drawingBufferColorSpace:pe}},[pe]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:xl,fromXYZ:yl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pe}}}),i}var jt=jh();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vi,Tr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vi===void 0&&(vi=Fi("canvas")),vi.width=t.width,vi.height=t.height;let s=vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tu=0,Bi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ko(s[o].image)):r.push(Ko(s[o]))}else r=Ko(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eu=0,Qo=new H,ge=class i extends Pn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=gn,s=gn,r=Se,o=yn,a=tn,l=dn,c=i.DEFAULT_ANISOTROPY,f=Ne){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=qi(),this.name="",this.source=new Bi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qo).x}get height(){return this.source.getSize(Qo).y}get depth(){return this.source.getSize(Qo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Di:t.x=t.x-Math.floor(t.x);break;case gn:t.x=t.x<0?0:1;break;case Sr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Di:t.y=t.y-Math.floor(t.y);break;case gn:t.y=t.y<0?0:1;break;case Sr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ge.DEFAULT_IMAGE=null;ge.DEFAULT_MAPPING=Pa;ge.DEFAULT_ANISOTROPY=1;var Qt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],v=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,M=(p+1)/2,C=(d+1)/2,w=(f+u)/4,P=(h+_)/4,O=(v+m)/4;return b>M&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=P/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=w/s,r=O/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=O/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-v)*(m-v)+(h-_)*(h-_)+(u-f)*(u-f));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(h-_)/T,this.z=(u-f)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Er=class extends Pn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new ge(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Re=class extends Er{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gs=class extends ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var wr=class extends ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),tr.subVectors(this.max,ss),_i.subVectors(t.a,ss),xi.subVectors(t.b,ss),yi.subVectors(t.c,ss),Nn.subVectors(xi,_i),Fn.subVectors(yi,xi),Jn.subVectors(_i,yi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Jn.z,Jn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Jn.z,0,-Jn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Jn.y,Jn.x,0];return!jo(e,_i,xi,yi,tr)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,_i,xi,yi,tr))?!1:(er.crossVectors(Nn,Fn),e=[er.x,er.y,er.z],jo(e,_i,xi,yi,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},bn=[new H,new H,new H,new H,new H,new H,new H,new H],rn=new H,js=new vn,_i=new H,xi=new H,yi=new H,Nn=new H,Fn=new H,Jn=new H,ss=new H,tr=new H,er=new H,Kn=new H;function jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Kn.fromArray(i,r);let a=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=t.dot(Kn),c=e.dot(Kn),f=n.dot(Kn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var nu=new vn,rs=new H,ta=new H,Gn=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):nu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);let e=rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(ta)),this.expandByPoint(rs.copy(t.center).sub(ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tn=new H,ea=new H,nr=new H,On=new H,na=new H,ir=new H,ia=new H,Ar=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ea.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),On.copy(this.origin).sub(ea);let r=t.distanceTo(e)*.5,o=-this.direction.dot(nr),a=On.dot(this.direction),l=-On.dot(nr),c=On.lengthSq(),f=Math.abs(1-o*o),h,u,p,v;if(f>0)if(h=o*l-a,u=o*a-l,v=r*f,h>=0)if(u>=-v)if(u<=v){let _=1/f;h*=_,u*=_,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ea).addScaledVector(nr,u),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){na.subVectors(e,t),ir.subVectors(n,t),ia.crossVectors(na,ir);let o=this.direction.dot(ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);let l=a*this.direction.dot(ir.crossVectors(On,ir));if(l<0)return null;let c=a*this.direction.dot(na.cross(On));if(c<0||l+c>o)return null;let f=-a*On.dot(ia);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,o,a,l,c,f,h,u,p,v,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,f,h,u,p,v,_,m)}set(t,e,n,s,r,o,a,l,c,f,h,u,p,v,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=h,d[14]=u,d[3]=p,d[7]=v,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*f,p=o*h,v=a*f,_=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=p+v*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*f,p=l*h,v=c*f,_=c*h;e[0]=u+_*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=p*a-v,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*f,p=l*h,v=c*f,_=c*h;e[0]=u-_*a,e[4]=-o*h,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*f,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*f,p=o*h,v=a*f,_=a*h;e[0]=l*f,e[4]=v*c-p,e[8]=u*c+_,e[1]=l*h,e[5]=_*c+u,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,v=a*l,_=a*c;e[0]=l*f,e[4]=_-u*h,e[8]=v*h+p,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=p*h+v,e[10]=u-_*h}else if(t.order==="XZY"){let u=o*l,p=o*c,v=a*l,_=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+_,e[5]=o*f,e[9]=p*h-v,e[2]=v*h-p,e[6]=a*f,e[10]=_*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iu,t,su)}lookAt(t,e,n){let s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Bn.crossVectors(n,Ge),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Bn.crossVectors(n,Ge)),Bn.normalize(),sr.crossVectors(Ge,Bn),s[0]=Bn.x,s[4]=sr.x,s[8]=Ge.x,s[1]=Bn.y,s[5]=sr.y,s[9]=Ge.y,s[2]=Bn.z,s[6]=sr.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],p=n[13],v=n[2],_=n[6],m=n[10],d=n[14],T=n[3],b=n[7],M=n[11],C=n[15],w=s[0],P=s[4],O=s[8],y=s[12],g=s[1],R=s[5],U=s[9],G=s[13],J=s[2],Y=s[6],E=s[10],F=s[14],L=s[3],B=s[7],X=s[11],W=s[15];return r[0]=o*w+a*g+l*J+c*L,r[4]=o*P+a*R+l*Y+c*B,r[8]=o*O+a*U+l*E+c*X,r[12]=o*y+a*G+l*F+c*W,r[1]=f*w+h*g+u*J+p*L,r[5]=f*P+h*R+u*Y+p*B,r[9]=f*O+h*U+u*E+p*X,r[13]=f*y+h*G+u*F+p*W,r[2]=v*w+_*g+m*J+d*L,r[6]=v*P+_*R+m*Y+d*B,r[10]=v*O+_*U+m*E+d*X,r[14]=v*y+_*G+m*F+d*W,r[3]=T*w+b*g+M*J+C*L,r[7]=T*P+b*R+M*Y+C*B,r[11]=T*O+b*U+M*E+C*X,r[15]=T*y+b*G+M*F+C*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],p=t[14],v=t[3],_=t[7],m=t[11],d=t[15];return v*(+r*l*h-s*c*h-r*a*u+n*c*u+s*a*p-n*l*p)+_*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*f-r*l*f)+m*(+e*c*h-e*a*p-r*o*h+n*o*p+r*a*f-n*c*f)+d*(-s*a*f-e*l*h+e*a*u+s*o*h-n*o*u+n*l*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],p=t[11],v=t[12],_=t[13],m=t[14],d=t[15],T=h*m*c-_*u*c+_*l*p-a*m*p-h*l*d+a*u*d,b=v*u*c-f*m*c-v*l*p+o*m*p+f*l*d-o*u*d,M=f*_*c-v*h*c+v*a*p-o*_*p-f*a*d+o*h*d,C=v*h*l-f*_*l-v*a*u+o*_*u+f*a*m-o*h*m,w=e*T+n*b+s*M+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/w;return t[0]=T*P,t[1]=(_*u*r-h*m*r-_*s*p+n*m*p+h*s*d-n*u*d)*P,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*P,t[3]=(h*l*r-a*u*r-h*s*c+n*u*c+a*s*p-n*l*p)*P,t[4]=b*P,t[5]=(f*m*r-v*u*r+v*s*p-e*m*p-f*s*d+e*u*d)*P,t[6]=(v*l*r-o*m*r-v*s*c+e*m*c+o*s*d-e*l*d)*P,t[7]=(o*u*r-f*l*r+f*s*c-e*u*c-o*s*p+e*l*p)*P,t[8]=M*P,t[9]=(v*h*r-f*_*r-v*n*p+e*_*p+f*n*d-e*h*d)*P,t[10]=(o*_*r-v*a*r+v*n*c-e*_*c-o*n*d+e*a*d)*P,t[11]=(f*a*r-o*h*r-f*n*c+e*h*c+o*n*p-e*a*p)*P,t[12]=C*P,t[13]=(f*_*s-v*h*s+v*n*u-e*_*u-f*n*m+e*h*m)*P,t[14]=(v*a*s-o*_*s-v*n*l+e*_*l+o*n*m-e*a*m)*P,t[15]=(o*h*s-f*a*s+f*n*l-e*h*l-o*n*u+e*a*u)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,u=r*c,p=r*f,v=r*h,_=o*f,m=o*h,d=a*h,T=l*c,b=l*f,M=l*h,C=n.x,w=n.y,P=n.z;return s[0]=(1-(_+d))*C,s[1]=(p+M)*C,s[2]=(v-b)*C,s[3]=0,s[4]=(p-M)*w,s[5]=(1-(u+d))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(v+b)*P,s[9]=(m-T)*P,s[10]=(1-(u+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Mi.set(s[0],s[1],s[2]).length(),o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);let c=1/r,f=1/o,h=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=f,on.elements[5]*=f,on.elements[6]*=f,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ln,l=!1){let c=this.elements,f=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),v,_;if(l)v=r/(o-r),_=o*r/(o-r);else if(a===ln)v=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ms)v=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ln,l=!1){let c=this.elements,f=2/(e-t),h=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),v,_;if(l)v=1/(o-r),_=o/(o-r);else if(a===ln)v=-2/(o-r),_=-(o+r)/(o-r);else if(a===ms)v=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mi=new H,on=new oe,iu=new H(0,0,0),su=new H(1,1,1),Bn=new H,sr=new H,Ge=new H,Ml=new oe,Sl=new Ln,$e=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sl.setFromEuler(this),this.setFromQuaternion(Sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ru=0,bl=new H,Si=new Ln,En=new oe,rr=new H,os=new H,ou=new H,au=new Ln,Tl=new H(1,0,0),El=new H(0,1,0),wl=new H(0,0,1),Al={type:"added"},lu={type:"removed"},bi={type:"childadded",child:null},sa={type:"childremoved",child:null},be=class i extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new $e,n=new Ln,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.multiply(Si),this}rotateOnWorldAxis(t,e){return Si.setFromAxisAngle(t,e),this.quaternion.premultiply(Si),this}rotateX(t){return this.rotateOnAxis(Tl,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,e){return bl.copy(t).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tl,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rr.copy(t):rr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(os,rr,this.up):En.lookAt(rr,os,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(En),this.quaternion.premultiply(Si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Al),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lu),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Al),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,au,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};be.DEFAULT_UP=new H(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new H,wn=new H,ra=new H,An=new H,Ti=new H,Ei=new H,Rl=new H,oa=new H,aa=new H,la=new H,ca=new Qt,ha=new Qt,ua=new Qt,Hn=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),wn.subVectors(n,e),ra.subVectors(t,e);let o=an.dot(an),a=an.dot(wn),l=an.dot(ra),c=wn.dot(wn),f=wn.dot(ra),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,p=(c*l-a*f)*u,v=(o*f-a*l)*u;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ca.setScalar(0),ha.setScalar(0),ua.setScalar(0),ca.fromBufferAttribute(t,e),ha.fromBufferAttribute(t,n),ua.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ca,r.x),o.addScaledVector(ha,r.y),o.addScaledVector(ua,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),wn.subVectors(t,e),an.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),an.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ti.subVectors(s,n),Ei.subVectors(r,n),oa.subVectors(t,n);let l=Ti.dot(oa),c=Ei.dot(oa);if(l<=0&&c<=0)return e.copy(n);aa.subVectors(t,s);let f=Ti.dot(aa),h=Ei.dot(aa);if(f>=0&&h<=f)return e.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Ti,o);la.subVectors(t,r);let p=Ti.dot(la),v=Ei.dot(la);if(v>=0&&p<=v)return e.copy(r);let _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(n).addScaledVector(Ei,a);let m=f*v-p*h;if(m<=0&&h-f>=0&&p-v>=0)return Rl.subVectors(r,s),a=(h-f)/(h-f+(p-v)),e.copy(s).addScaledVector(Rl,a);let d=1/(m+_+u);return o=_*d,a=u*d,e.copy(n).addScaledVector(Ti,o).addScaledVector(Ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},or={h:0,s:0,l:0};function da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Ha(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=da(o,r,t+1/3),this.g=da(o,r,t),this.b=da(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=Rc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return jt.workingToColorSpace(Ae.copy(this),t),Math.round(Kt(Ae.r*255,0,255))*65536+Math.round(Kt(Ae.g*255,0,255))*256+Math.round(Kt(Ae.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Ae.copy(this),e);let n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=pe){jt.workingToColorSpace(Ae.copy(this),t);let e=Ae.r,n=Ae.g,s=Ae.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(or);let n=ds(zn.h,or.h,e),s=ds(zn.s,or.s,e),r=ds(zn.l,or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new Vt;Vt.NAMES=Rc;var cu=0,Dn=class extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=ei,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yr,this.blendDst=Mr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ii=class extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Jr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var me=new H,ar=new Lt,hu=0,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sa&&(t.usage=this.usage),t}};var _s=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xs=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},uu=0,Ze=new oe,fa=new be,wi=new H,We=new vn,as=new vn,xe=new H,Je=class i extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ga(t)?xs:_s)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return fa.lookAt(t),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];as.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(We.min,as.min),We.expandByPoint(xe),xe.addVectors(We.max,as.max),We.expandByPoint(xe)):(We.expandByPoint(as.min),We.expandByPoint(as.max))}We.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)xe.fromBufferAttribute(a,c),l&&(wi.fromBufferAttribute(t,c),xe.add(wi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new H,l[O]=new H;let c=new H,f=new H,h=new H,u=new Lt,p=new Lt,v=new Lt,_=new H,m=new H;function d(O,y,g){c.fromBufferAttribute(n,O),f.fromBufferAttribute(n,y),h.fromBufferAttribute(n,g),u.fromBufferAttribute(r,O),p.fromBufferAttribute(r,y),v.fromBufferAttribute(r,g),f.sub(c),h.sub(c),p.sub(u),v.sub(u);let R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(_.copy(f).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(R),a[O].add(_),a[y].add(_),a[g].add(_),l[O].add(m),l[y].add(m),l[g].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,y=T.length;O<y;++O){let g=T[O],R=g.start,U=g.count;for(let G=R,J=R+U;G<J;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let b=new H,M=new H,C=new H,w=new H;function P(O){C.fromBufferAttribute(s,O),w.copy(C);let y=a[O];b.copy(y),b.sub(C.multiplyScalar(C.dot(y))).normalize(),M.crossVectors(w,y);let R=M.dot(l[O])<0?-1:1;o.setXYZW(O,b.x,b.y,b.z,R)}for(let O=0,y=T.length;O<y;++O){let g=T[O],R=g.start,U=g.count;for(let G=R,J=R+U;G<J;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,f=new H,h=new H;if(t)for(let u=0,p=t.count;u<p;u+=3){let v=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(f),l.add(f),c.add(f),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),p=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*f;for(let d=0;d<f;d++)u[v++]=c[p++]}return new Oe(u,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let p=c[h];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cl=new oe,Qn=new Ar,lr=new Gn,Il=new H,cr=new H,hr=new H,ur=new H,pa=new H,dr=new H,Pl=new H,fr=new H,$t=class extends be{constructor(t=new Je,e=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&(pa.fromBufferAttribute(h,t),o?dr.addScaledVector(pa,f):dr.addScaledVector(pa.sub(e),f))}e.add(dr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(lr.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(lr,Il)===null||Qn.origin.distanceToSquared(Il)>(t.far-t.near)**2))&&(Cl.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=u.length;v<_;v++){let m=u[v],d=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,C=b;M<C;M+=3){let w=a.getX(M),P=a.getX(M+1),O=a.getX(M+2);s=pr(this,d,t,n,c,f,h,w,P,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){let T=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=pr(this,o,t,n,c,f,h,T,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=u.length;v<_;v++){let m=u[v],d=o[m.materialIndex],T=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=T,C=b;M<C;M+=3){let w=M,P=M+1,O=M+2;s=pr(this,d,t,n,c,f,h,w,P,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=v,d=_;m<d;m+=3){let T=m,b=m+1,M=m+2;s=pr(this,o,t,n,c,f,h,T,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function du(i,t,e,n,s,r,o,a){let l;if(t.side===Te?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===In,a),l===null)return null;fr.copy(a),fr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fr);return c<e.near||c>e.far?null:{distance:c,point:fr.clone(),object:i}}function pr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,cr),i.getVertexPosition(l,hr),i.getVertexPosition(c,ur);let f=du(i,t,e,n,cr,hr,ur,Pl);if(f){let h=new H;Hn.getBarycoord(Pl,cr,hr,ur,h),s&&(f.uv=Hn.getInterpolatedAttribute(s,a,l,c,h,new Lt)),r&&(f.uv1=Hn.getInterpolatedAttribute(r,a,l,c,h,new Lt)),o&&(f.normal=Hn.getInterpolatedAttribute(o,a,l,c,h,new H),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new H,materialIndex:0};Hn.getNormal(cr,hr,ur,u.normal),f.face=u,f.barycoord=h}return f}var Ke=class i extends Je{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,p=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(h,2));function v(_,m,d,T,b,M,C,w,P,O,y){let g=M/P,R=C/O,U=M/2,G=C/2,J=w/2,Y=P+1,E=O+1,F=0,L=0,B=new H;for(let X=0;X<E;X++){let W=X*R-G;for(let et=0;et<Y;et++){let it=et*g-U;B[_]=it*T,B[m]=W*b,B[d]=J,c.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[d]=w>0?1:-1,f.push(B.x,B.y,B.z),h.push(et/P),h.push(1-X/O),F+=1}}for(let X=0;X<O;X++)for(let W=0;W<P;W++){let et=u+W+Y*X,it=u+W+Y*(X+1),Z=u+(W+1)+Y*(X+1),at=u+(W+1)+Y*X;l.push(et,it,at),l.push(it,Z,at),L+=6}a.addGroup(p,L,y),p+=L,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ce(i){let t={};for(let e=0;e<i.length;e++){let n=li(i[e]);for(let s in n)t[s]=n[s]}return t}function fu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wa(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Cc={clone:li,merge:Ce},pu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,de=class extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pu,this.fragmentShader=mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=li(t.uniforms),this.uniformsGroups=fu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ys=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new H,Ll=new Lt,Dl=new Lt,Me=class extends ys{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ni*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,Ll,Dl),e.subVectors(Dl,Ll)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ai=-90,Ri=1,Rr=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Me(Ai,Ri,t,e);s.layers=this.layers,this.add(s);let r=new Me(Ai,Ri,t,e);r.layers=this.layers,this.add(r);let o=new Me(Ai,Ri,t,e);o.layers=this.layers,this.add(o);let a=new Me(Ai,Ri,t,e);a.layers=this.layers,this.add(a);let l=new Me(Ai,Ri,t,e);l.layers=this.layers,this.add(l);let c=new Me(Ai,Ri,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(h,u,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Ms=class extends ge{constructor(t=[],e=oi,n,s,r,o,a,l,c,f){super(t,e,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cr=class extends Re{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ms(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),r=new de({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Un});r.uniforms.tEquirect.value=e;let o=new $t(s,r),a=e.minFilter;return e.minFilter===yn&&(e.minFilter=Se),new Rr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Rn=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},gu={type:"move"},zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var De=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var si=class extends ge{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Be,f=Be,h,u){super(null,o,a,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ss=class extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ci=new oe,Ul=new oe,mr=[],Nl=new vn,vu=new oe,ls=new $t,cs=new Gn,bs=class extends $t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),Nl.copy(t.boundingBox).applyMatrix4(Ci),this.boundingBox.union(Nl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ci),cs.copy(t.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(cs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),t.ray.intersectsSphere(cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ci),Ul.multiplyMatrices(n,Ci),ls.matrixWorld=Ul,ls.raycast(t,mr);for(let o=0,a=mr.length;o<a;o++){let l=mr[o];l.instanceId=r,l.object=this,e.push(l)}mr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new si(new Float32Array(s*this.count),s,this.count,io,fn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ma=new H,_u=new H,xu=new kt,mn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ma.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ma),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xu.getNormalMatrix(t),s=this.coplanarPoint(ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},jn=new Gn,yu=new Lt(.5,.5),gr=new H,ki=class{constructor(t=new mn,e=new mn,n=new mn,s=new mn,r=new mn,o=new mn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],p=r[7],v=r[8],_=r[9],m=r[10],d=r[11],T=r[12],b=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-o,p-f,d-v,C-T).normalize(),s[1].setComponents(c+o,p+f,d+v,C+T).normalize(),s[2].setComponents(c+a,p+h,d+_,C+b).normalize(),s[3].setComponents(c-a,p-h,d-_,C-b).normalize(),n)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,p-u,d-m,C-M).normalize();else if(s[4].setComponents(c-l,p-u,d-m,C-M).normalize(),e===ln)s[5].setComponents(c+l,p+u,d+m,C+M).normalize();else if(e===ms)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){jn.center.set(0,0,0);let e=yu.distanceTo(t.center);return jn.radius=.7071067811865476+e,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(gr.x=s.normal.x>0?t.max.x:t.min.x,gr.y=s.normal.y>0?t.max.y:t.min.y,gr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var _n=class extends ge{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ts=class extends ge{constructor(t,e,n=qn,s,r,o,a=Be,l=Be,c,f=Ui,h=1){if(f!==Ui&&f!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Es=class extends ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ws=class i extends Je{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let f=[],h=[],u=[],p=[],v=0,_=[],m=n/2,d=0;T(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(p,2));function T(){let M=new H,C=new H,w=0,P=(e-t)/n;for(let O=0;O<=r;O++){let y=[],g=O/r,R=g*(e-t)+t;for(let U=0;U<=s;U++){let G=U/s,J=G*l+a,Y=Math.sin(J),E=Math.cos(J);C.x=R*Y,C.y=-g*n+m,C.z=R*E,h.push(C.x,C.y,C.z),M.set(Y,P,E).normalize(),u.push(M.x,M.y,M.z),p.push(G,1-g),y.push(v++)}_.push(y)}for(let O=0;O<s;O++)for(let y=0;y<r;y++){let g=_[y][O],R=_[y+1][O],U=_[y+1][O+1],G=_[y][O+1];(t>0||y!==0)&&(f.push(g,R,G),w+=3),(e>0||y!==r-1)&&(f.push(R,U,G),w+=3)}c.addGroup(d,w,0),d+=w}function b(M){let C=v,w=new Lt,P=new H,O=0,y=M===!0?t:e,g=M===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*g,0),u.push(0,g,0),p.push(.5,.5),v++;let R=v;for(let U=0;U<=s;U++){let J=U/s*l+a,Y=Math.cos(J),E=Math.sin(J);P.x=y*E,P.y=m*g,P.z=y*Y,h.push(P.x,P.y,P.z),u.push(0,g,0),w.x=Y*.5+.5,w.y=E*.5*g+.5,p.push(w.x,w.y),v++}for(let U=0;U<s;U++){let G=C+U,J=R+U;M===!0?f.push(J,J+1,G):f.push(J+1,J,G),O+=3}c.addGroup(d,O,M===!0?1:2),d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ue=class i extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,h=t/a,u=e/l,p=[],v=[],_=[],m=[];for(let d=0;d<f;d++){let T=d*u-o;for(let b=0;b<c;b++){let M=b*h-r;v.push(M,-T,0),_.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<a;T++){let b=T+c*d,M=T+c*(d+1),C=T+1+c*(d+1),w=T+1+c*d;p.push(b,M,w),p.push(M,C,w)}this.setIndex(p),this.setAttribute("position",new ue(v,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var As=class i extends Je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,f=[],h=new H,u=new H,p=[],v=[],_=[],m=[];for(let d=0;d<=n;d++){let T=[],b=d/n,M=0;d===0&&o===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){let w=C/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+b*a),h.y=t*Math.cos(o+b*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+b*a),v.push(h.x,h.y,h.z),u.copy(h).normalize(),_.push(u.x,u.y,u.z),m.push(w+M,1-b),T.push(c++)}f.push(T)}for(let d=0;d<n;d++)for(let T=0;T<e;T++){let b=f[d][T+1],M=f[d][T],C=f[d+1][T],w=f[d+1][T+1];(d!==0||o>0)&&p.push(b,M,w),(d!==n-1||l<Math.PI)&&p.push(M,C,w)}this.setIndex(p),this.setAttribute("position",new ue(v,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var hn=class extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Rs=class extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Jr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ir=class extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pr=class extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Mu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ri=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lr=class extends ri{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_a,endingEnd:_a}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xa:r=t,a=2*e-n;break;case ya:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xa:o=t,l=2*n-e;break;case ya:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,v=(n-e)/(s-e),_=v*v,m=_*v,d=-u*m+2*u*_-u*v,T=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*v+1,b=(-1-p)*m+(1.5+p)*_+.5*v,M=p*m-p*_;for(let C=0;C!==a;++C)r[C]=d*o[f+C]+T*o[c+C]+b*o[l+C]+M*o[h+C];return r}},Dr=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(s-e),h=1-f;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*f;return r}},Ur=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Xe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vr(e,this.TimeBufferType),this.values=vr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vr(t.times,Array),values:vr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ur(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case fs:e=this.InterpolantFactoryMethodDiscrete;break;case br:e=this.InterpolantFactoryMethodLinear;break;case _r:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fs;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return _r}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Mu(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_r,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,u=h-n,p=h+n;for(let v=0;v!==n;++v){let _=e[h+v];if(_!==e[u+v]||_!==e[p+v]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Xe.prototype.ValueTypeName="";Xe.prototype.TimeBufferType=Float32Array;Xe.prototype.ValueBufferType=Float32Array;Xe.prototype.DefaultInterpolation=br;var Wn=class extends Xe{constructor(t,e,n){super(t,e,n)}};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=fs;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends Xe{constructor(t,e,n,s){super(t,e,n,s)}};Nr.prototype.ValueTypeName="color";var Fr=class extends Xe{constructor(t,e,n,s){super(t,e,n,s)}};Fr.prototype.ValueTypeName="number";var Or=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)Ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},Cs=class extends Xe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Or(this.times,this.values,this.getValueSize(),t)}};Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends Xe{constructor(t,e,n){super(t,e,n)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=fs;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends Xe{constructor(t,e,n,s){super(t,e,n,s)}};Br.prototype.ValueTypeName="vector";var xr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},zr=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ic=new zr,Hi=class{constructor(t){this.manager=t!==void 0?t:Ic,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ii=new WeakMap,kr=class extends Hi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=xr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=Ii.get(o);h===void 0&&(h=[],Ii.set(o,h)),h.push({onLoad:e,onError:s})}return o}let a=Fi("img");function l(){f(),e&&e(this);let h=Ii.get(this)||[];for(let u=0;u<h.length;u++){let p=h[u];p.onLoad&&p.onLoad(this)}Ii.delete(this),r.manager.itemEnd(t)}function c(h){f(),s&&s(h),xr.remove(`image:${t}`);let u=Ii.get(this)||[];for(let p=0;p<u.length;p++){let v=u[p];v.onError&&v.onError(h)}Ii.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xr.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Is=class extends Hi{constructor(t){super(t)}load(t,e,n,s){let r=new ge,o=new kr(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Vi=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var ga=new oe,Fl=new H,Ol=new H,Hr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ki,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Fl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fl),Ol.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ol),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Bl=new oe,hs=new H,va=new H,ba=class extends Hr{constructor(){super(new Me(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(hs),va.copy(n.position),va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(va),n.updateMatrixWorld(),s.makeTranslation(-hs.x,-hs.y,-hs.z),Bl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl,n.coordinateSystem,n.reversedDepth)}},Ps=class extends Vi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ba}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ze=class extends ys{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ta=class extends Hr{constructor(){super(new ze(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ls=class extends Vi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Ta}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ds=class extends Vi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vr=class extends Me{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Us=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Xa="\\[\\]\\.:\\/",Su=new RegExp("["+Xa+"]","g"),qa="[^"+Xa+"]",bu="[^"+Xa.replace("\\.","")+"]",Tu=/((?:WC+[\/:])*)/.source.replace("WC",qa),Eu=/(WCOD+)?/.source.replace("WCOD",bu),wu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qa),Au=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qa),Ru=new RegExp("^"+Tu+Eu+wu+Au+"$"),Cu=["material","materials","bones","map"],Ea=class{constructor(t,e,n){let s=n||re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Su,"")}static parseTrackName(t){let e=Ru.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=Ea;re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray];re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wg=new Float32Array(1);function Ya(i,t,e,n){let s=Iu(n);switch(e){case Fa:return i*t;case io:return i*t/s.components*s.byteLength;case so:return i*t/s.components*s.byteLength;case Ba:return i*t*2/s.components*s.byteLength;case ro:return i*t*2/s.components*s.byteLength;case Oa:return i*t*3/s.components*s.byteLength;case tn:return i*t*4/s.components*s.byteLength;case oo:return i*t*4/s.components*s.byteLength;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zs:case ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:case ho:return Math.max(i,16)*Math.max(t,8)/4;case ao:case co:return Math.max(i,8)*Math.max(t,8)/2;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Co:case Io:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lo:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Uo:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Iu(i){switch(i){case dn:case La:return{byteLength:1,components:1};case Gi:case Da:case je:return{byteLength:2,components:1};case eo:case no:return{byteLength:2,components:4};case qn:case to:case fn:return{byteLength:4,components:1};case Ua:case Na:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function th(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Lu(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,f);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){let v=h[u],_=h[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++u,h[u]=_)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){let _=h[p];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Du=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
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
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
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
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
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
#endif`,Vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nd=`#define PI 3.141592653589793
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
} // validated`,id=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sd=`vec3 transformedNormal = objectNormal;
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
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",hd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ud=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yd=`#ifdef USE_GRADIENTMAP
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
}`,Md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Td=`uniform bool receiveShadow;
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
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Id=`PhysicalMaterial material;
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
#endif`,Pd=`struct PhysicalMaterial {
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
}`,Ld=`
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Od=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vd=`#if defined( USE_POINTS_UV )
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
#endif`,Gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Kd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
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
#endif`,nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
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
}`,xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,bf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ef=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Rf=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Df=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
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
}`,Nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
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
}`,kf=`#if DEPTH_PACKING == 3200
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
}`,Hf=`#define DISTANCE
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
}`,Vf=`#define DISTANCE
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`uniform float scale;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,Zf=`uniform vec3 diffuse;
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
}`,Jf=`#define LAMBERT
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
}`,Kf=`#define MATCAP
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
}`,Qf=`#define MATCAP
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
}`,jf=`#define NORMAL
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
}`,tp=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,np=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,sp=`#define STANDARD
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
}`,rp=`#define TOON
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
}`,op=`#define TOON
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
}`,ap=`uniform float size;
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
}`,lp=`uniform vec3 diffuse;
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
}`,cp=`#include <common>
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
}`,hp=`uniform vec3 color;
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
}`,up=`uniform float rotation;
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
}`,dp=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Du,alphahash_pars_fragment:Uu,alphamap_fragment:Nu,alphamap_pars_fragment:Fu,alphatest_fragment:Ou,alphatest_pars_fragment:Bu,aomap_fragment:zu,aomap_pars_fragment:ku,batching_pars_vertex:Hu,batching_vertex:Vu,begin_vertex:Gu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:Zu,clipping_planes_pars_fragment:$u,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:Ku,color_fragment:Qu,color_pars_fragment:ju,color_pars_vertex:td,color_vertex:ed,common:nd,cube_uv_reflection_fragment:id,defaultnormal_vertex:sd,displacementmap_pars_vertex:rd,displacementmap_vertex:od,emissivemap_fragment:ad,emissivemap_pars_fragment:ld,colorspace_fragment:cd,colorspace_pars_fragment:hd,envmap_fragment:ud,envmap_common_pars_fragment:dd,envmap_pars_fragment:fd,envmap_pars_vertex:pd,envmap_physical_pars_fragment:Ed,envmap_vertex:md,fog_vertex:gd,fog_pars_vertex:vd,fog_fragment:_d,fog_pars_fragment:xd,gradientmap_pars_fragment:yd,lightmap_pars_fragment:Md,lights_lambert_fragment:Sd,lights_lambert_pars_fragment:bd,lights_pars_begin:Td,lights_toon_fragment:wd,lights_toon_pars_fragment:Ad,lights_phong_fragment:Rd,lights_phong_pars_fragment:Cd,lights_physical_fragment:Id,lights_physical_pars_fragment:Pd,lights_fragment_begin:Ld,lights_fragment_maps:Dd,lights_fragment_end:Ud,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Fd,logdepthbuf_pars_vertex:Od,logdepthbuf_vertex:Bd,map_fragment:zd,map_pars_fragment:kd,map_particle_fragment:Hd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Gd,metalnessmap_pars_fragment:Wd,morphinstance_vertex:Xd,morphcolor_vertex:qd,morphnormal_vertex:Yd,morphtarget_pars_vertex:Zd,morphtarget_vertex:$d,normal_fragment_begin:Jd,normal_fragment_maps:Kd,normal_pars_fragment:Qd,normal_pars_vertex:jd,normal_vertex:tf,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:nf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:rf,iridescence_pars_fragment:of,opaque_fragment:af,packing:lf,premultiplied_alpha_fragment:cf,project_vertex:hf,dithering_fragment:uf,dithering_pars_fragment:df,roughnessmap_fragment:ff,roughnessmap_pars_fragment:pf,shadowmap_pars_fragment:mf,shadowmap_pars_vertex:gf,shadowmap_vertex:vf,shadowmask_pars_fragment:_f,skinbase_vertex:xf,skinning_pars_vertex:yf,skinning_vertex:Mf,skinnormal_vertex:Sf,specularmap_fragment:bf,specularmap_pars_fragment:Tf,tonemapping_fragment:Ef,tonemapping_pars_fragment:wf,transmission_fragment:Af,transmission_pars_fragment:Rf,uv_pars_fragment:Cf,uv_pars_vertex:If,uv_vertex:Pf,worldpos_vertex:Lf,background_vert:Df,background_frag:Uf,backgroundCube_vert:Nf,backgroundCube_frag:Ff,cube_vert:Of,cube_frag:Bf,depth_vert:zf,depth_frag:kf,distanceRGBA_vert:Hf,distanceRGBA_frag:Vf,equirect_vert:Gf,equirect_frag:Wf,linedashed_vert:Xf,linedashed_frag:qf,meshbasic_vert:Yf,meshbasic_frag:Zf,meshlambert_vert:$f,meshlambert_frag:Jf,meshmatcap_vert:Kf,meshmatcap_frag:Qf,meshnormal_vert:jf,meshnormal_frag:tp,meshphong_vert:ep,meshphong_frag:np,meshphysical_vert:ip,meshphysical_frag:sp,meshtoon_vert:rp,meshtoon_frag:op,points_vert:ap,points_frag:lp,shadow_vert:cp,shadow_frag:hp,sprite_vert:up,sprite_frag:dp},mt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Mn={basic:{uniforms:Ce([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ce([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ce([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ce([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ce([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ce([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ce([mt.points,mt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ce([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ce([mt.common,mt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ce([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ce([mt.sprite,mt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ce([mt.common,mt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ce([mt.lights,mt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Mn.physical={uniforms:Ce([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Oo={r:0,b:0,g:0},ci=new $e,fp=new oe;function pp(i,t,e,n,s,r,o){let a=new Vt(0),l=r===!0?0:1,c,f,h=null,u=0,p=null;function v(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function _(b){let M=!1,C=v(b);C===null?d(a,l):C&&C.isColor&&(d(C,1),M=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){let C=v(M);C&&(C.isCubeTexture||C.mapping===Ns)?(f===void 0&&(f=new $t(new Ke(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:li(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),ci.copy(M.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(fp.makeRotationFromEuler(ci)),f.material.toneMapped=jt.getTransfer(C.colorSpace)!==ee,(h!==C||u!==C.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=C,u=C.version,p=i.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new $t(new Ue(2,2),new de({name:"BackgroundMaterial",uniforms:li(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=jt.getTransfer(C.colorSpace)!==ee,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||u!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=C,u=C.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,M){b.getRGB(Oo,Wa(i)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,M,o)}function T(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:_,addToRenderList:m,dispose:T}}function mp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(g,R,U,G,J){let Y=!1,E=h(G,U,R);r!==E&&(r=E,c(r.object)),Y=p(g,G,U,J),Y&&v(g,G,U,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(g,R,U,G),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function f(g){return i.deleteVertexArray(g)}function h(g,R,U){let G=U.wireframe===!0,J=n[g.id];J===void 0&&(J={},n[g.id]=J);let Y=J[R.id];Y===void 0&&(Y={},J[R.id]=Y);let E=Y[G];return E===void 0&&(E=u(l()),Y[G]=E),E}function u(g){let R=[],U=[],G=[];for(let J=0;J<e;J++)R[J]=0,U[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:G,object:g,attributes:{},index:null}}function p(g,R,U,G){let J=r.attributes,Y=R.attributes,E=0,F=U.getAttributes();for(let L in F)if(F[L].location>=0){let X=J[L],W=Y[L];if(W===void 0&&(L==="instanceMatrix"&&g.instanceMatrix&&(W=g.instanceMatrix),L==="instanceColor"&&g.instanceColor&&(W=g.instanceColor)),X===void 0||X.attribute!==W||W&&X.data!==W.data)return!0;E++}return r.attributesNum!==E||r.index!==G}function v(g,R,U,G){let J={},Y=R.attributes,E=0,F=U.getAttributes();for(let L in F)if(F[L].location>=0){let X=Y[L];X===void 0&&(L==="instanceMatrix"&&g.instanceMatrix&&(X=g.instanceMatrix),L==="instanceColor"&&g.instanceColor&&(X=g.instanceColor));let W={};W.attribute=X,X&&X.data&&(W.data=X.data),J[L]=W,E++}r.attributes=J,r.attributesNum=E,r.index=G}function _(){let g=r.newAttributes;for(let R=0,U=g.length;R<U;R++)g[R]=0}function m(g){d(g,0)}function d(g,R){let U=r.newAttributes,G=r.enabledAttributes,J=r.attributeDivisors;U[g]=1,G[g]===0&&(i.enableVertexAttribArray(g),G[g]=1),J[g]!==R&&(i.vertexAttribDivisor(g,R),J[g]=R)}function T(){let g=r.newAttributes,R=r.enabledAttributes;for(let U=0,G=R.length;U<G;U++)R[U]!==g[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function b(g,R,U,G,J,Y,E){E===!0?i.vertexAttribIPointer(g,R,U,J,Y):i.vertexAttribPointer(g,R,U,G,J,Y)}function M(g,R,U,G){_();let J=G.attributes,Y=U.getAttributes(),E=R.defaultAttributeValues;for(let F in Y){let L=Y[F];if(L.location>=0){let B=J[F];if(B===void 0&&(F==="instanceMatrix"&&g.instanceMatrix&&(B=g.instanceMatrix),F==="instanceColor"&&g.instanceColor&&(B=g.instanceColor)),B!==void 0){let X=B.normalized,W=B.itemSize,et=t.get(B);if(et===void 0)continue;let it=et.buffer,Z=et.type,at=et.bytesPerElement,k=Z===i.INT||Z===i.UNSIGNED_INT||B.gpuType===to;if(B.isInterleavedBufferAttribute){let q=B.data,ft=q.stride,st=B.offset;if(q.isInstancedInterleavedBuffer){for(let nt=0;nt<L.locationSize;nt++)d(L.location+nt,q.meshPerAttribute);g.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let nt=0;nt<L.locationSize;nt++)m(L.location+nt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let nt=0;nt<L.locationSize;nt++)b(L.location+nt,W/L.locationSize,Z,X,ft*at,(st+W/L.locationSize*nt)*at,k)}else{if(B.isInstancedBufferAttribute){for(let q=0;q<L.locationSize;q++)d(L.location+q,B.meshPerAttribute);g.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let q=0;q<L.locationSize;q++)m(L.location+q);i.bindBuffer(i.ARRAY_BUFFER,it);for(let q=0;q<L.locationSize;q++)b(L.location+q,W/L.locationSize,Z,X,W*at,W/L.locationSize*q*at,k)}}else if(E!==void 0){let X=E[F];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(L.location,X);break;case 3:i.vertexAttrib3fv(L.location,X);break;case 4:i.vertexAttrib4fv(L.location,X);break;default:i.vertexAttrib1fv(L.location,X)}}}}T()}function C(){O();for(let g in n){let R=n[g];for(let U in R){let G=R[U];for(let J in G)f(G[J].object),delete G[J];delete R[U]}delete n[g]}}function w(g){if(n[g.id]===void 0)return;let R=n[g.id];for(let U in R){let G=R[U];for(let J in G)f(G[J].object),delete G[J];delete R[U]}delete n[g.id]}function P(g){for(let R in n){let U=n[R];if(U[g.id]===void 0)continue;let G=U[g.id];for(let J in G)f(G[J].object),delete G[J];delete U[g.id]}}function O(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function gp(i,t,e){let n;function s(c){n=c}function r(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function o(c,f,h){h!==0&&(i.drawArraysInstanced(n,c,f,h),e.update(f,n,h))}function a(c,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=f[v];e.update(p,n,1)}function l(c,f,h,u){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],f[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,f,0,u,0,h);let v=0;for(let _=0;_<h;_++)v+=f[_]*u[_];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==tn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let O=P===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==dn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==fn&&!O)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:C,maxSamples:w}}function _p(i){let t=this,e=null,n=0,s=!1,r=!1,o=new mn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||n!==0||s;return s=u,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,p){let v=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||v===null||v.length===0||r&&!m)r?f(null):c();else{let T=r?0:n,b=T*4,M=d.clippingState||null;l.value=M,M=f(v,u,b,p);for(let C=0;C!==b;++C)M[C]=e[C];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,p,v){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,v!==!0||m===null){let d=p+_*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,M=p;b!==_;++b,M+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xp(i){let t=new WeakMap;function e(o,a){return a===Kr?o.mapping=oi:a===Qr&&(o.mapping=ai),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kr||a===Qr)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Cr(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zi=4,Pc=[.125,.215,.35,.446,.526,.582],di=20,Za=new ze,Lc=new Vt,$a=null,Ja=0,Ka=0,Qa=!1,ui=(1+Math.sqrt(5))/2,Yi=1/ui,Dc=[new H(-ui,Yi,0),new H(ui,Yi,0),new H(-Yi,0,ui),new H(Yi,0,ui),new H(0,ui,-Yi),new H(0,ui,Yi),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],yp=new H,Ji=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=yp}=r;$a=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Ja,Ka),this._renderer.xr.enabled=Qa,t.scissorTest=!1,Bo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:je,format:tn,colorSpace:cn,depthBuffer:!1},s=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mp(r)),this._blurMaterial=Sp(r,t,e)}return s}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,n,s,r){let l=new Me(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Lc),h.toneMapping=un,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let _=new ii({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),m=new $t(new Ke,_),d=!1,T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,d=!0):(_.color.copy(Lc),d=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[b]));let C=this._cubeSize;Bo(s,M*C,b>2?C:0,C,C),h.setRenderTarget(s),d&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===oi||t.mapping===ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Bo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Za)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dc[(s-r-1)%Dc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,h=new $t(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*di-1),_=r/v,m=isFinite(r)?1+Math.floor(f*_):di;m>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);let d=[],T=0;for(let P=0;P<di;++P){let O=P/_,y=Math.exp(-O*O/2);d.push(y),P===0?T+=y:P<m&&(T+=2*y)}for(let P=0;P<d.length;P++)d[P]=d[P]/T;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:b}=this;u.dTheta.value=v,u.mipInt.value=b-n;let M=this._sizeLods[s],C=3*M*(s>b-Zi?s-b+Zi:0),w=4*(this._cubeSize-M);Bo(e,C,w,3*M,2*M),l.setRenderTarget(e),l.render(h,Za)}};function Mp(i){let t=[],e=[],n=[],s=i,r=i-Zi+1+Pc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Zi?l=Pc[o-i+Zi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),f=-c,h=1+c,u=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,v=6,_=3,m=2,d=1,T=new Float32Array(_*v*p),b=new Float32Array(m*v*p),M=new Float32Array(d*v*p);for(let w=0;w<p;w++){let P=w%3*2/3-1,O=w>2?0:-1,y=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];T.set(y,_*v*w),b.set(u,m*v*w);let g=[w,w,w,w,w,w];M.set(g,d*v*w)}let C=new Je;C.setAttribute("position",new Oe(T,_)),C.setAttribute("uv",new Oe(b,m)),C.setAttribute("faceIndex",new Oe(M,d)),t.push(C),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uc(i,t,e){let n=new Re(i,t,e);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Sp(i,t,e){let n=new Float32Array(di),s=new H(0,1,0);return new de({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Nc(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Fc(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function bp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Kr||l===Qr,f=l===oi||l===ai;if(c||f){let h=t.get(a),u=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ji(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||f&&p&&s(p)?(e===null&&(e=new Ji(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ep(i,t,e,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(h){let u=[],p=h.index,v=h.attributes.position,_=0;if(p!==null){let T=p.array;_=p.version;for(let b=0,M=T.length;b<M;b+=3){let C=T[b+0],w=T[b+1],P=T[b+2];u.push(C,w,w,P,P,C)}}else if(v!==void 0){let T=v.array;_=v.version;for(let b=0,M=T.length/3-1;b<M;b+=3){let C=b+0,w=b+1,P=b+2;u.push(C,w,w,P,P,C)}}else return;let m=new(Ga(u)?xs:_s)(u,1);m.version=_;let d=r.get(h);d&&t.remove(d),r.set(h,m)}function f(h){let u=r.get(h);if(u){let p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function wp(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,u*o,v),e.update(p,n,v))}function f(u,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];e.update(m,n,1)}function h(u,p,v,_){if(v===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,v);let d=0;for(let T=0;T<v;T++)d+=p[T]*_[T];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Ap(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Rp(i,t,e){let n=new WeakMap,s=new Qt;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(a);if(u===void 0||u.count!==h){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],b=0;p===!0&&(b=1),v===!0&&(b=2),_===!0&&(b=3);let M=a.attributes.position.count*b,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let w=new Float32Array(M*C*4*h),P=new gs(w,M,C,h);P.type=fn,P.needsUpdate=!0;let O=b*4;for(let g=0;g<h;g++){let R=m[g],U=d[g],G=T[g],J=M*C*4*g;for(let Y=0;Y<R.count;Y++){let E=Y*O;p===!0&&(s.fromBufferAttribute(R,Y),w[J+E+0]=s.x,w[J+E+1]=s.y,w[J+E+2]=s.z,w[J+E+3]=0),v===!0&&(s.fromBufferAttribute(U,Y),w[J+E+4]=s.x,w[J+E+5]=s.y,w[J+E+6]=s.z,w[J+E+7]=0),_===!0&&(s.fromBufferAttribute(G,Y),w[J+E+8]=s.x,w[J+E+9]=s.y,w[J+E+10]=s.z,w[J+E+11]=G.itemSize===4?s.w:1)}}u={count:h,texture:P,size:new Lt(M,C)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Cp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,f=l.geometry,h=t.get(l,f);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var eh=new ge,Oc=new Ts(1,1),nh=new gs,ih=new wr,sh=new Ms,Bc=[],zc=[],kc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function Ki(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bc[s];if(r===void 0&&(r=new Float32Array(s),Bc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ho(i,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ip(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function Lp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function Dp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function Up(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Vc.set(n),i.uniformMatrix2fv(this.addr,!1,Vc),_e(e,n)}}function Np(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),_e(e,n)}}function Fp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ve(e,n))return;kc.set(n),i.uniformMatrix4fv(this.addr,!1,kc),_e(e,n)}}function Op(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function Hp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function Xp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oc.compareFunction=za,r=Oc):r=eh,e.setTexture2D(t||r,s)}function qp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ih,s)}function Yp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sh,s)}function Zp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nh,s)}function $p(i){switch(i){case 5126:return Ip;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return kp;case 5125:return Hp;case 36294:return Vp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Jp(i,t){i.uniform1fv(this.addr,t)}function Kp(i,t){let e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function Qp(i,t){let e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function jp(i,t){let e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function tm(i,t){let e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function em(i,t){let e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function nm(i,t){let e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function im(i,t){i.uniform1iv(this.addr,t)}function sm(i,t){i.uniform2iv(this.addr,t)}function rm(i,t){i.uniform3iv(this.addr,t)}function om(i,t){i.uniform4iv(this.addr,t)}function am(i,t){i.uniform1uiv(this.addr,t)}function lm(i,t){i.uniform2uiv(this.addr,t)}function cm(i,t){i.uniform3uiv(this.addr,t)}function hm(i,t){i.uniform4uiv(this.addr,t)}function um(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||eh,r[o])}function dm(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ih,r[o])}function fm(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sh,r[o])}function pm(i,t,e){let n=this.cache,s=t.length,r=Ho(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),_e(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nh,r[o])}function mm(i){switch(i){case 5126:return Jp;case 35664:return Kp;case 35665:return Qp;case 35666:return jp;case 35674:return tm;case 35675:return em;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return om;case 5125:return am;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}var tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$p(e.type)}},el=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mm(e.type)}},nl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},ja=/(\w+)(\])?(\[|\.)?/g;function Gc(i,t){i.seq.push(t),i.map[t.id]=t}function gm(i,t,e){let n=i.name,s=n.length;for(ja.lastIndex=0;;){let r=ja.exec(n),o=ja.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gc(e,c===void 0?new tl(a,i,t):new el(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new nl(a),Gc(e,h)),e=h}}}var $i=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);gm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Wc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vm=37297,_m=0;function xm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Xc=new kt;function ym(i){jt._getMatrix(Xc,jt.workingColorSpace,i);let t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case ps:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+xm(i.getShaderSource(t),a)}else return r}function Mm(i,t){let e=ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sm(i,t){let e;switch(t){case lc:e="Linear";break;case cc:e="Reinhard";break;case hc:e="Cineon";break;case uc:e="ACESFilmic";break;case fc:e="AgX";break;case pc:e="Neutral";break;case dc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var zo=new H;function bm(){jt.getLuminanceCoefficients(zo);let i=zo.x.toFixed(4),t=zo.y.toFixed(4),e=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Em(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hs(i){return i!==""}function Yc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Am=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(Am,Cm)}var Rm=new Map;function Cm(i,t){let e=Yt[t];if(e===void 0){let n=Rm.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}var Im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(Im,Pm)}function Pm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Lm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Aa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case ai:t="ENVMAP_TYPE_CUBE";break;case Ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Um(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ai&&(t="ENVMAP_MODE_REFRACTION"),t}function Nm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jr:t="ENVMAP_BLENDING_MULTIPLY";break;case oc:t="ENVMAP_BLENDING_MIX";break;case ac:t="ENVMAP_BLENDING_ADD";break}return t}function Fm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Om(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Lm(e),c=Dm(e),f=Um(e),h=Nm(e),u=Fm(e),p=Tm(e),v=Em(r),_=s.createProgram(),m,d,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Hs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Hs).join(`
`),d.length>0&&(d+=`
`)):(m=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),d=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==un?"#define TONE_MAPPING":"",e.toneMapping!==un?Yt.tonemapping_pars_fragment:"",e.toneMapping!==un?Sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Mm("linearToOutputTexel",e.outputColorSpace),bm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=il(o),o=Yc(o,e),o=Zc(o,e),a=il(a),a=Yc(a,e),a=Zc(a,e),o=$c(o),a=$c(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ka?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ka?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=T+m+o,M=T+d+a,C=Wc(s,s.VERTEX_SHADER,b),w=Wc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,C),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(R){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(C)||"",J=s.getShaderInfoLog(w)||"",Y=U.trim(),E=G.trim(),F=J.trim(),L=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,w);else{let X=qc(s,C,"vertex"),W=qc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+X+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(E===""||F==="")&&(B=!1);B&&(R.diagnostics={runnable:L,programLog:Y,vertexShader:{log:E,prefix:m},fragmentShader:{log:F,prefix:d}})}s.deleteShader(C),s.deleteShader(w),O=new $i(s,_),y=wm(s,_)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(_,vm)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_m++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}var Bm=0,sl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rl(t),e.set(t,n)),n}},rl=class{constructor(t){this.id=Bm++,this.code=t,this.usedTimes=0}};function zm(i,t,e,n,s,r,o){let a=new vs,l=new sl,c=new Set,f=[],h=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,g,R,U,G){let J=U.fog,Y=G.geometry,E=y.isMeshStandardMaterial?U.environment:null,F=(y.isMeshStandardMaterial?e:t).get(y.envMap||E),L=F&&F.mapping===Ns?F.image.height:null,B=v[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let X=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,W=X!==void 0?X.length:0,et=0;Y.morphAttributes.position!==void 0&&(et=1),Y.morphAttributes.normal!==void 0&&(et=2),Y.morphAttributes.color!==void 0&&(et=3);let it,Z,at,k;if(B){let Xt=Mn[B];it=Xt.vertexShader,Z=Xt.fragmentShader}else it=y.vertexShader,Z=y.fragmentShader,l.update(y),at=l.getVertexShaderID(y),k=l.getFragmentShaderID(y);let q=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),st=G.isInstancedMesh===!0,nt=G.isBatchedMesh===!0,At=!!y.map,Gt=!!y.matcap,I=!!F,Zt=!!y.aoMap,Ot=!!y.lightMap,St=!!y.bumpMap,_t=!!y.normalMap,qt=!!y.displacementMap,xt=!!y.emissiveMap,Wt=!!y.metalnessMap,fe=!!y.roughnessMap,ae=y.anisotropy>0,A=y.clearcoat>0,x=y.dispersion>0,D=y.iridescence>0,$=y.sheen>0,tt=y.transmission>0,Q=ae&&!!y.anisotropyMap,yt=A&&!!y.clearcoatMap,lt=A&&!!y.clearcoatNormalMap,wt=A&&!!y.clearcoatRoughnessMap,Ct=D&&!!y.iridescenceMap,ct=D&&!!y.iridescenceThicknessMap,gt=$&&!!y.sheenColorMap,Dt=$&&!!y.sheenRoughnessMap,Pt=!!y.specularMap,pt=!!y.specularColorMap,Ht=!!y.specularIntensityMap,N=tt&&!!y.transmissionMap,ht=tt&&!!y.thicknessMap,dt=!!y.gradientMap,Mt=!!y.alphaMap,ot=y.alphaTest>0,rt=!!y.alphaHash,bt=!!y.extensions,Tt=un;y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Tt=i.toneMapping);let Bt={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:it,fragmentShader:Z,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:k,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:nt,batchingColor:nt&&G._colorsTexture!==null,instancing:st,instancingColor:st&&G.instanceColor!==null,instancingMorph:st&&G.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:cn,alphaToCoverage:!!y.alphaToCoverage,map:At,matcap:Gt,envMap:I,envMapMode:I&&F.mapping,envMapCubeUVHeight:L,aoMap:Zt,lightMap:Ot,bumpMap:St,normalMap:_t,displacementMap:u&&qt,emissiveMap:xt,normalMapObjectSpace:_t&&y.normalMapType===_c,normalMapTangentSpace:_t&&y.normalMapType===Fo,metalnessMap:Wt,roughnessMap:fe,anisotropy:ae,anisotropyMap:Q,clearcoat:A,clearcoatMap:yt,clearcoatNormalMap:lt,clearcoatRoughnessMap:wt,dispersion:x,iridescence:D,iridescenceMap:Ct,iridescenceThicknessMap:ct,sheen:$,sheenColorMap:gt,sheenRoughnessMap:Dt,specularMap:Pt,specularColorMap:pt,specularIntensityMap:Ht,transmission:tt,transmissionMap:N,thicknessMap:ht,gradientMap:dt,opaque:y.transparent===!1&&y.blending===ei&&y.alphaToCoverage===!1,alphaMap:Mt,alphaTest:ot,alphaHash:rt,combine:y.combine,mapUv:At&&_(y.map.channel),aoMapUv:Zt&&_(y.aoMap.channel),lightMapUv:Ot&&_(y.lightMap.channel),bumpMapUv:St&&_(y.bumpMap.channel),normalMapUv:_t&&_(y.normalMap.channel),displacementMapUv:qt&&_(y.displacementMap.channel),emissiveMapUv:xt&&_(y.emissiveMap.channel),metalnessMapUv:Wt&&_(y.metalnessMap.channel),roughnessMapUv:fe&&_(y.roughnessMap.channel),anisotropyMapUv:Q&&_(y.anisotropyMap.channel),clearcoatMapUv:yt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(y.sheenRoughnessMap.channel),specularMapUv:Pt&&_(y.specularMap.channel),specularColorMapUv:pt&&_(y.specularColorMap.channel),specularIntensityMapUv:Ht&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:ht&&_(y.thicknessMap.channel),alphaMapUv:Mt&&_(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(_t||ae),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(At||Mt),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ft,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:et,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&jt.getTransfer(y.map.colorSpace)===ee,decodeVideoTextureEmissive:xt&&y.emissiveMap.isVideoTexture===!0&&jt.getTransfer(y.emissiveMap.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qe,flipSided:y.side===Te,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:bt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&y.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function d(y){let g=[];if(y.shaderID?g.push(y.shaderID):(g.push(y.customVertexShaderID),g.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)g.push(R),g.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(T(g,y),b(g,y),g.push(i.outputColorSpace)),g.push(y.customProgramCacheKey),g.join()}function T(y,g){y.push(g.precision),y.push(g.outputColorSpace),y.push(g.envMapMode),y.push(g.envMapCubeUVHeight),y.push(g.mapUv),y.push(g.alphaMapUv),y.push(g.lightMapUv),y.push(g.aoMapUv),y.push(g.bumpMapUv),y.push(g.normalMapUv),y.push(g.displacementMapUv),y.push(g.emissiveMapUv),y.push(g.metalnessMapUv),y.push(g.roughnessMapUv),y.push(g.anisotropyMapUv),y.push(g.clearcoatMapUv),y.push(g.clearcoatNormalMapUv),y.push(g.clearcoatRoughnessMapUv),y.push(g.iridescenceMapUv),y.push(g.iridescenceThicknessMapUv),y.push(g.sheenColorMapUv),y.push(g.sheenRoughnessMapUv),y.push(g.specularMapUv),y.push(g.specularColorMapUv),y.push(g.specularIntensityMapUv),y.push(g.transmissionMapUv),y.push(g.thicknessMapUv),y.push(g.combine),y.push(g.fogExp2),y.push(g.sizeAttenuation),y.push(g.morphTargetsCount),y.push(g.morphAttributeCount),y.push(g.numDirLights),y.push(g.numPointLights),y.push(g.numSpotLights),y.push(g.numSpotLightMaps),y.push(g.numHemiLights),y.push(g.numRectAreaLights),y.push(g.numDirLightShadows),y.push(g.numPointLightShadows),y.push(g.numSpotLightShadows),y.push(g.numSpotLightShadowsWithMaps),y.push(g.numLightProbes),y.push(g.shadowMapType),y.push(g.toneMapping),y.push(g.numClippingPlanes),y.push(g.numClipIntersection),y.push(g.depthPacking)}function b(y,g){a.disableAll(),g.supportsVertexTextures&&a.enable(0),g.instancing&&a.enable(1),g.instancingColor&&a.enable(2),g.instancingMorph&&a.enable(3),g.matcap&&a.enable(4),g.envMap&&a.enable(5),g.normalMapObjectSpace&&a.enable(6),g.normalMapTangentSpace&&a.enable(7),g.clearcoat&&a.enable(8),g.iridescence&&a.enable(9),g.alphaTest&&a.enable(10),g.vertexColors&&a.enable(11),g.vertexAlphas&&a.enable(12),g.vertexUv1s&&a.enable(13),g.vertexUv2s&&a.enable(14),g.vertexUv3s&&a.enable(15),g.vertexTangents&&a.enable(16),g.anisotropy&&a.enable(17),g.alphaHash&&a.enable(18),g.batching&&a.enable(19),g.dispersion&&a.enable(20),g.batchingColor&&a.enable(21),g.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),g.fog&&a.enable(0),g.useFog&&a.enable(1),g.flatShading&&a.enable(2),g.logarithmicDepthBuffer&&a.enable(3),g.reversedDepthBuffer&&a.enable(4),g.skinning&&a.enable(5),g.morphTargets&&a.enable(6),g.morphNormals&&a.enable(7),g.morphColors&&a.enable(8),g.premultipliedAlpha&&a.enable(9),g.shadowMapEnabled&&a.enable(10),g.doubleSided&&a.enable(11),g.flipSided&&a.enable(12),g.useDepthPacking&&a.enable(13),g.dithering&&a.enable(14),g.transmission&&a.enable(15),g.sheen&&a.enable(16),g.opaque&&a.enable(17),g.pointsUvs&&a.enable(18),g.decodeVideoTexture&&a.enable(19),g.decodeVideoTextureEmissive&&a.enable(20),g.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){let g=v[y.type],R;if(g){let U=Mn[g];R=Cc.clone(U.uniforms)}else R=y.uniforms;return R}function C(y,g){let R;for(let U=0,G=f.length;U<G;U++){let J=f[U];if(J.cacheKey===g){R=J,++R.usedTimes;break}}return R===void 0&&(R=new Om(i,g,y,r),f.push(R)),R}function w(y){if(--y.usedTimes===0){let g=f.indexOf(y);f[g]=f[f.length-1],f.pop(),y.destroy()}}function P(y){l.remove(y)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:C,releaseProgram:w,releaseShaderCache:P,programs:f,dispose:O}}function km(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,u,p,v,_,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:u,material:p,groupOrder:v,renderOrder:h.renderOrder,z:_,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=u,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,u,p,v,_,m){let d=o(h,u,p,v,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(h,u,p,v,_,m){let d=o(h,u,p,v,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,u){e.length>1&&e.sort(h||Hm),n.length>1&&n.sort(u||Kc),s.length>1&&s.sort(u||Kc)}function f(){for(let h=t,u=i.length;h<u;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:f,sort:c}}function Vm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Qc,i.set(n,[o])):s>=r.length?(o=new Qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new Vt};break;case"SpotLight":e={position:new H,direction:new H,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function Wm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Xm=0;function qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ym(i){let t=new Gm,e=Wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new oe,o=new oe;function a(c){let f=0,h=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,v=0,_=0,m=0,d=0,T=0,b=0,M=0,C=0,w=0,P=0;c.sort(qm);for(let y=0,g=c.length;y<g;y++){let R=c[y],U=R.color,G=R.intensity,J=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=U.r*G,h+=U.g*G,u+=U.b*G;else if(R.isLightProbe){for(let E=0;E<9;E++)n.probe[E].addScaledVector(R.sh.coefficients[E],G);P++}else if(R.isDirectionalLight){let E=t.get(R);if(E.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let F=R.shadow,L=e.get(R);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,n.directionalShadow[p]=L,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=E,p++}else if(R.isSpotLight){let E=t.get(R);E.position.setFromMatrixPosition(R.matrixWorld),E.color.copy(U).multiplyScalar(G),E.distance=J,E.coneCos=Math.cos(R.angle),E.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),E.decay=R.decay,n.spot[_]=E;let F=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,F.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[_]=F.matrix,R.castShadow){let L=e.get(R);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=Y,M++}_++}else if(R.isRectAreaLight){let E=t.get(R);E.color.copy(U).multiplyScalar(G),E.halfWidth.set(R.width*.5,0,0),E.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=E,m++}else if(R.isPointLight){let E=t.get(R);if(E.color.copy(R.color).multiplyScalar(R.intensity),E.distance=R.distance,E.decay=R.decay,R.castShadow){let F=R.shadow,L=e.get(R);L.shadowIntensity=F.intensity,L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,L.shadowCameraNear=F.camera.near,L.shadowCameraFar=F.camera.far,n.pointShadow[v]=L,n.pointShadowMap[v]=Y,n.pointShadowMatrix[v]=R.shadow.matrix,b++}n.point[v]=E,v++}else if(R.isHemisphereLight){let E=t.get(R);E.skyColor.copy(R.color).multiplyScalar(G),E.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[d]=E,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let O=n.hash;(O.directionalLength!==p||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==T||O.numPointShadows!==b||O.numSpotShadows!==M||O.numSpotMaps!==C||O.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,O.directionalLength=p,O.pointLength=v,O.spotLength=_,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=T,O.numPointShadows=b,O.numSpotShadows=M,O.numSpotMaps=C,O.numLightProbes=P,n.version=Xm++)}function l(c,f){let h=0,u=0,p=0,v=0,_=0,m=f.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){let b=c[d];if(b.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(b.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let M=n.rectArea[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function jc(i){let t=new Ym(i),e=[],n=[];function s(f){c.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Zm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new jc(i),t.set(s,[a])):r>=o.length?(a=new jc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jm=`uniform sampler2D shadow_pass;
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
}`;function Km(i,t,e){let n=new ki,s=new Lt,r=new Lt,o=new Qt,a=new Ir({depthPacking:vc}),l=new Pr,c={},f=e.maxTextureSize,h={[In]:Te,[Te]:In,[Qe]:Qe},u=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:$m,fragmentShader:Jm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let v=new Je;v.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $t(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Aa;let d=this.type;this.render=function(w,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=i.getRenderTarget(),g=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Un),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=d!==xn&&this.type===xn,J=d===xn&&this.type!==xn;for(let Y=0,E=w.length;Y<E;Y++){let F=w[Y],L=F.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let B=L.getFrameExtents();if(s.multiply(B),r.copy(L.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/B.x),s.x=r.x*B.x,L.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/B.y),s.y=r.y*B.y,L.mapSize.y=r.y)),L.map===null||G===!0||J===!0){let W=this.type!==xn?{minFilter:Be,magFilter:Be}:{};L.map!==null&&L.map.dispose(),L.map=new Re(s.x,s.y,W),L.map.texture.name=F.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let X=L.getViewportCount();for(let W=0;W<X;W++){let et=L.getViewport(W);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),U.viewport(o),L.updateMatrices(F,W),n=L.getFrustum(),M(P,O,L.camera,F,this.type)}L.isPointLightShadow!==!0&&this.type===xn&&T(L,O),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,g,R)};function T(w,P){let O=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Re(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,O,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,O,p,_,null)}function b(w,P,O,y){let g=null,R=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)g=R;else if(g=O.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let U=g.uuid,G=P.uuid,J=c[U];J===void 0&&(J={},c[U]=J);let Y=J[G];Y===void 0&&(Y=g.clone(),J[G]=Y,P.addEventListener("dispose",C)),g=Y}if(g.visible=P.visible,g.wireframe=P.wireframe,y===xn?g.side=P.shadowSide!==null?P.shadowSide:P.side:g.side=P.shadowSide!==null?P.shadowSide:h[P.side],g.alphaMap=P.alphaMap,g.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,g.map=P.map,g.clipShadows=P.clipShadows,g.clippingPlanes=P.clippingPlanes,g.clipIntersection=P.clipIntersection,g.displacementMap=P.displacementMap,g.displacementScale=P.displacementScale,g.displacementBias=P.displacementBias,g.wireframeLinewidth=P.wireframeLinewidth,g.linewidth=P.linewidth,O.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let U=i.properties.get(g);U.light=O}return g}function M(w,P,O,y,g){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&g===xn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);let G=t.update(w),J=w.material;if(Array.isArray(J)){let Y=G.groups;for(let E=0,F=Y.length;E<F;E++){let L=Y[E],B=J[L.materialIndex];if(B&&B.visible){let X=b(w,B,y,g);w.onBeforeShadow(i,w,P,O,G,X,L),i.renderBufferDirect(O,null,G,X,w,L),w.onAfterShadow(i,w,P,O,G,X,L)}}}else if(J.visible){let Y=b(w,J,y,g);w.onBeforeShadow(i,w,P,O,G,Y,null),i.renderBufferDirect(O,null,G,Y,w,null),w.onAfterShadow(i,w,P,O,G,Y,null)}}let U=w.children;for(let G=0,J=U.length;G<J;G++)M(U[G],P,O,y,g)}function C(w){w.target.removeEventListener("dispose",C);for(let O in c){let y=c[O],g=w.target.uuid;g in y&&(y[g].dispose(),delete y[g])}}}var Qm={[Gr]:Wr,[Xr]:Zr,[qr]:$r,[ni]:Yr,[Wr]:Gr,[Zr]:Xr,[$r]:qr,[Yr]:ni};function jm(i,t){function e(){let N=!1,ht=new Qt,dt=null,Mt=new Qt(0,0,0,0);return{setMask:function(ot){dt!==ot&&!N&&(i.colorMask(ot,ot,ot,ot),dt=ot)},setLocked:function(ot){N=ot},setClear:function(ot,rt,bt,Tt,Bt){Bt===!0&&(ot*=Tt,rt*=Tt,bt*=Tt),ht.set(ot,rt,bt,Tt),Mt.equals(ht)===!1&&(i.clearColor(ot,rt,bt,Tt),Mt.copy(ht))},reset:function(){N=!1,dt=null,Mt.set(-1,0,0,0)}}}function n(){let N=!1,ht=!1,dt=null,Mt=null,ot=null;return{setReversed:function(rt){if(ht!==rt){let bt=t.get("EXT_clip_control");rt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),ht=rt;let Tt=ot;ot=null,this.setClear(Tt)}},getReversed:function(){return ht},setTest:function(rt){rt?q(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(rt){dt!==rt&&!N&&(i.depthMask(rt),dt=rt)},setFunc:function(rt){if(ht&&(rt=Qm[rt]),Mt!==rt){switch(rt){case Gr:i.depthFunc(i.NEVER);break;case Wr:i.depthFunc(i.ALWAYS);break;case Xr:i.depthFunc(i.LESS);break;case ni:i.depthFunc(i.LEQUAL);break;case qr:i.depthFunc(i.EQUAL);break;case Yr:i.depthFunc(i.GEQUAL);break;case Zr:i.depthFunc(i.GREATER);break;case $r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=rt}},setLocked:function(rt){N=rt},setClear:function(rt){ot!==rt&&(ht&&(rt=1-rt),i.clearDepth(rt),ot=rt)},reset:function(){N=!1,dt=null,Mt=null,ot=null,ht=!1}}}function s(){let N=!1,ht=null,dt=null,Mt=null,ot=null,rt=null,bt=null,Tt=null,Bt=null;return{setTest:function(Xt){N||(Xt?q(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(Xt){ht!==Xt&&!N&&(i.stencilMask(Xt),ht=Xt)},setFunc:function(Xt,ye,ke){(dt!==Xt||Mt!==ye||ot!==ke)&&(i.stencilFunc(Xt,ye,ke),dt=Xt,Mt=ye,ot=ke)},setOp:function(Xt,ye,ke){(rt!==Xt||bt!==ye||Tt!==ke)&&(i.stencilOp(Xt,ye,ke),rt=Xt,bt=ye,Tt=ke)},setLocked:function(Xt){N=Xt},setClear:function(Xt){Bt!==Xt&&(i.clearStencil(Xt),Bt=Xt)},reset:function(){N=!1,ht=null,dt=null,Mt=null,ot=null,rt=null,bt=null,Tt=null,Bt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,f={},h={},u=new WeakMap,p=[],v=null,_=!1,m=null,d=null,T=null,b=null,M=null,C=null,w=null,P=new Vt(0,0,0),O=0,y=!1,g=null,R=null,U=null,G=null,J=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),E=!1,F=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(L)[1]),E=F>=1):L.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),E=F>=2);let B=null,X={},W=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),it=new Qt().fromArray(W),Z=new Qt().fromArray(et);function at(N,ht,dt,Mt){let ot=new Uint8Array(4),rt=i.createTexture();i.bindTexture(N,rt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<dt;bt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(ht+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return rt}let k={};k[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(ni),St(!1),_t(wa),q(i.CULL_FACE),Zt(Un);function q(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function ft(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function st(N,ht){return h[N]!==ht?(i.bindFramebuffer(N,ht),h[N]=ht,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ht),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function nt(N,ht){let dt=p,Mt=!1;if(N){dt=u.get(ht),dt===void 0&&(dt=[],u.set(ht,dt));let ot=N.textures;if(dt.length!==ot.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,bt=ot.length;rt<bt;rt++)dt[rt]=i.COLOR_ATTACHMENT0+rt;dt.length=ot.length,Mt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(dt)}function At(N){return v!==N?(i.useProgram(N),v=N,!0):!1}let Gt={[Vn]:i.FUNC_ADD,[Gl]:i.FUNC_SUBTRACT,[Wl]:i.FUNC_REVERSE_SUBTRACT};Gt[Xl]=i.MIN,Gt[ql]=i.MAX;let I={[Yl]:i.ZERO,[Zl]:i.ONE,[$l]:i.SRC_COLOR,[yr]:i.SRC_ALPHA,[ec]:i.SRC_ALPHA_SATURATE,[jl]:i.DST_COLOR,[Kl]:i.DST_ALPHA,[Jl]:i.ONE_MINUS_SRC_COLOR,[Mr]:i.ONE_MINUS_SRC_ALPHA,[tc]:i.ONE_MINUS_DST_COLOR,[Ql]:i.ONE_MINUS_DST_ALPHA,[nc]:i.CONSTANT_COLOR,[ic]:i.ONE_MINUS_CONSTANT_COLOR,[sc]:i.CONSTANT_ALPHA,[rc]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(N,ht,dt,Mt,ot,rt,bt,Tt,Bt,Xt){if(N===Un){_===!0&&(ft(i.BLEND),_=!1);return}if(_===!1&&(q(i.BLEND),_=!0),N!==Vl){if(N!==m||Xt!==y){if((d!==Vn||M!==Vn)&&(i.blendEquation(i.FUNC_ADD),d=Vn,M=Vn),Xt)switch(N){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFunc(i.ONE,i.ONE);break;case Ca:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ia:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ra:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ca:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ia:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,b=null,C=null,w=null,P.set(0,0,0),O=0,m=N,y=Xt}return}ot=ot||ht,rt=rt||dt,bt=bt||Mt,(ht!==d||ot!==M)&&(i.blendEquationSeparate(Gt[ht],Gt[ot]),d=ht,M=ot),(dt!==T||Mt!==b||rt!==C||bt!==w)&&(i.blendFuncSeparate(I[dt],I[Mt],I[rt],I[bt]),T=dt,b=Mt,C=rt,w=bt),(Tt.equals(P)===!1||Bt!==O)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Bt),P.copy(Tt),O=Bt),m=N,y=!1}function Ot(N,ht){N.side===Qe?ft(i.CULL_FACE):q(i.CULL_FACE);let dt=N.side===Te;ht&&(dt=!dt),St(dt),N.blending===ei&&N.transparent===!1?Zt(Un):Zt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Mt=N.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),xt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(N){g!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),g=N)}function _t(N){N!==zl?(q(i.CULL_FACE),N!==R&&(N===wa?i.cullFace(i.BACK):N===kl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),R=N}function qt(N){N!==U&&(E&&i.lineWidth(N),U=N)}function xt(N,ht,dt){N?(q(i.POLYGON_OFFSET_FILL),(G!==ht||J!==dt)&&(i.polygonOffset(ht,dt),G=ht,J=dt)):ft(i.POLYGON_OFFSET_FILL)}function Wt(N){N?q(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function fe(N){N===void 0&&(N=i.TEXTURE0+Y-1),B!==N&&(i.activeTexture(N),B=N)}function ae(N,ht,dt){dt===void 0&&(B===null?dt=i.TEXTURE0+Y-1:dt=B);let Mt=X[dt];Mt===void 0&&(Mt={type:void 0,texture:void 0},X[dt]=Mt),(Mt.type!==N||Mt.texture!==ht)&&(B!==dt&&(i.activeTexture(dt),B=dt),i.bindTexture(N,ht||k[N]),Mt.type=N,Mt.texture=ht)}function A(){let N=X[B];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(N){it.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),it.copy(N))}function Dt(N){Z.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function Pt(N,ht){let dt=c.get(ht);dt===void 0&&(dt=new WeakMap,c.set(ht,dt));let Mt=dt.get(N);Mt===void 0&&(Mt=i.getUniformBlockIndex(ht,N.name),dt.set(N,Mt))}function pt(N,ht){let Mt=c.get(ht).get(N);l.get(ht)!==Mt&&(i.uniformBlockBinding(ht,Mt,N.__bindingPointIndex),l.set(ht,Mt))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},B=null,X={},h={},u=new WeakMap,p=[],v=null,_=!1,m=null,d=null,T=null,b=null,M=null,C=null,w=null,P=new Vt(0,0,0),O=0,y=!1,g=null,R=null,U=null,G=null,J=null,it.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:ft,bindFramebuffer:st,drawBuffers:nt,useProgram:At,setBlending:Zt,setMaterial:Ot,setFlipSided:St,setCullFace:_t,setLineWidth:qt,setPolygonOffset:xt,setScissorTest:Wt,activeTexture:fe,bindTexture:ae,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:Ct,texImage3D:ct,updateUBOMapping:Pt,uniformBlockBinding:pt,texStorage2D:lt,texStorage3D:wt,texSubImage2D:$,texSubImage3D:tt,compressedTexSubImage2D:Q,compressedTexSubImage3D:yt,scissor:gt,viewport:Dt,reset:Ht}}function tg(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,f=new WeakMap,h,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return p?new OffscreenCanvas(A,x):Fi("canvas")}function _(A,x,D){let $=1,tt=ae(A);if((tt.width>D||tt.height>D)&&($=D/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Q=Math.floor($*tt.width),yt=Math.floor($*tt.height);h===void 0&&(h=v(Q,yt));let lt=x?v(Q,yt):h;return lt.width=Q,lt.height=yt,lt.getContext("2d").drawImage(A,0,0,Q,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Q+"x"+yt+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,x,D,$,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=x;if(x===i.RED&&(D===i.FLOAT&&(Q=i.R32F),D===i.HALF_FLOAT&&(Q=i.R16F),D===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(Q=i.R8UI),D===i.UNSIGNED_SHORT&&(Q=i.R16UI),D===i.UNSIGNED_INT&&(Q=i.R32UI),D===i.BYTE&&(Q=i.R8I),D===i.SHORT&&(Q=i.R16I),D===i.INT&&(Q=i.R32I)),x===i.RG&&(D===i.FLOAT&&(Q=i.RG32F),D===i.HALF_FLOAT&&(Q=i.RG16F),D===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(Q=i.RG8UI),D===i.UNSIGNED_SHORT&&(Q=i.RG16UI),D===i.UNSIGNED_INT&&(Q=i.RG32UI),D===i.BYTE&&(Q=i.RG8I),D===i.SHORT&&(Q=i.RG16I),D===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),D===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),D===i.UNSIGNED_INT&&(Q=i.RGB32UI),D===i.BYTE&&(Q=i.RGB8I),D===i.SHORT&&(Q=i.RGB16I),D===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),D===i.UNSIGNED_INT&&(Q=i.RGBA32UI),D===i.BYTE&&(Q=i.RGBA8I),D===i.SHORT&&(Q=i.RGBA16I),D===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),x===i.RGBA){let yt=tt?ps:jt.getTransfer($);D===i.FLOAT&&(Q=i.RGBA32F),D===i.HALF_FLOAT&&(Q=i.RGBA16F),D===i.UNSIGNED_BYTE&&(Q=yt===ee?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(A,x){let D;return A?x===null||x===qn||x===Wi?D=i.DEPTH24_STENCIL8:x===fn?D=i.DEPTH32F_STENCIL8:x===Gi&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===qn||x===Wi?D=i.DEPTH_COMPONENT24:x===fn?D=i.DEPTH_COMPONENT32F:x===Gi&&(D=i.DEPTH_COMPONENT16),D}function C(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==Se?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){let x=A.target;x.removeEventListener("dispose",w),O(x),x.isVideoTexture&&f.delete(x)}function P(A){let x=A.target;x.removeEventListener("dispose",P),g(x)}function O(A){let x=n.get(A);if(x.__webglInit===void 0)return;let D=A.source,$=u.get(D);if($){let tt=$[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(A),Object.keys($).length===0&&u.delete(D)}n.remove(A)}function y(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let D=A.source,$=u.get(D);delete $[x.__cacheKey],o.memory.textures--}function g(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let tt=0;tt<x.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let D=A.textures;for(let $=0,tt=D.length;$<tt;$++){let Q=n.get(D[$]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(D[$])}n.remove(A)}let R=0;function U(){R=0}function G(){let A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function J(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Y(A,x){let D=n.get(A);if(A.isVideoTexture&&Wt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&D.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(D,A,x);return}}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+x)}function E(A,x){let D=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){k(D,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+x)}function F(A,x){let D=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){k(D,A,x);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+x)}function L(A,x){let D=n.get(A);if(A.version>0&&D.__version!==A.version){q(D,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+x)}let B={[Di]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Sr]:i.MIRRORED_REPEAT},X={[Be]:i.NEAREST,[mc]:i.NEAREST_MIPMAP_NEAREST,[Fs]:i.NEAREST_MIPMAP_LINEAR,[Se]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[yn]:i.LINEAR_MIPMAP_LINEAR},W={[xc]:i.NEVER,[Ec]:i.ALWAYS,[yc]:i.LESS,[za]:i.LEQUAL,[Mc]:i.EQUAL,[Tc]:i.GEQUAL,[Sc]:i.GREATER,[bc]:i.NOTEQUAL};function et(A,x){if(x.type===fn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Se||x.magFilter===jr||x.magFilter===Fs||x.magFilter===yn||x.minFilter===Se||x.minFilter===jr||x.minFilter===Fs||x.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,B[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,B[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,B[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,X[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,X[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,W[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Be||x.minFilter!==Fs&&x.minFilter!==yn||x.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function it(A,x){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));let $=x.source,tt=u.get($);tt===void 0&&(tt={},u.set($,tt));let Q=J(x);if(Q!==A.__cacheKey){tt[Q]===void 0&&(tt[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),tt[Q].usedTimes++;let yt=tt[A.__cacheKey];yt!==void 0&&(tt[A.__cacheKey].usedTimes--,yt.usedTimes===0&&y(x)),A.__cacheKey=Q,A.__webglTexture=tt[Q].texture}return D}function Z(A,x,D){return Math.floor(Math.floor(A/D)/x)}function at(A,x,D,$){let Q=A.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,D,$,x.data);else{Q.sort((ct,gt)=>ct.start-gt.start);let yt=0;for(let ct=1;ct<Q.length;ct++){let gt=Q[yt],Dt=Q[ct],Pt=gt.start+gt.count,pt=Z(Dt.start,x.width,4),Ht=Z(gt.start,x.width,4);Dt.start<=Pt+1&&pt===Ht&&Z(Dt.start+Dt.count-1,x.width,4)===pt?gt.count=Math.max(gt.count,Dt.start+Dt.count-gt.start):(++yt,Q[yt]=Dt)}Q.length=yt+1;let lt=i.getParameter(i.UNPACK_ROW_LENGTH),wt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ct=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ct=0,gt=Q.length;ct<gt;ct++){let Dt=Q[ct],Pt=Math.floor(Dt.start/4),pt=Math.ceil(Dt.count/4),Ht=Pt%x.width,N=Math.floor(Pt/x.width),ht=pt,dt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Ht,N,ht,dt,D,$,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,lt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function k(A,x,D){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);let tt=it(A,x),Q=x.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+D);let yt=n.get(Q);if(Q.version!==yt.__version||tt===!0){e.activeTexture(i.TEXTURE0+D);let lt=jt.getPrimaries(jt.workingColorSpace),wt=x.colorSpace===Ne?null:jt.getPrimaries(x.colorSpace),Ct=x.colorSpace===Ne||lt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let ct=_(x.image,!1,s.maxTextureSize);ct=fe(x,ct);let gt=r.convert(x.format,x.colorSpace),Dt=r.convert(x.type),Pt=b(x.internalFormat,gt,Dt,x.colorSpace,x.isVideoTexture);et($,x);let pt,Ht=x.mipmaps,N=x.isVideoTexture!==!0,ht=yt.__version===void 0||tt===!0,dt=Q.dataReady,Mt=C(x,ct);if(x.isDepthTexture)Pt=M(x.format===Xi,x.type),ht&&(N?e.texStorage2D(i.TEXTURE_2D,1,Pt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ct.width,ct.height,0,gt,Dt,null));else if(x.isDataTexture)if(Ht.length>0){N&&ht&&e.texStorage2D(i.TEXTURE_2D,Mt,Pt,Ht[0].width,Ht[0].height);for(let ot=0,rt=Ht.length;ot<rt;ot++)pt=Ht[ot],N?dt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,pt.width,pt.height,gt,Dt,pt.data):e.texImage2D(i.TEXTURE_2D,ot,Pt,pt.width,pt.height,0,gt,Dt,pt.data);x.generateMipmaps=!1}else N?(ht&&e.texStorage2D(i.TEXTURE_2D,Mt,Pt,ct.width,ct.height),dt&&at(x,ct,gt,Dt)):e.texImage2D(i.TEXTURE_2D,0,Pt,ct.width,ct.height,0,gt,Dt,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Pt,Ht[0].width,Ht[0].height,ct.depth);for(let ot=0,rt=Ht.length;ot<rt;ot++)if(pt=Ht[ot],x.format!==tn)if(gt!==null)if(N){if(dt)if(x.layerUpdates.size>0){let bt=Ya(pt.width,pt.height,x.format,x.type);for(let Tt of x.layerUpdates){let Bt=pt.data.subarray(Tt*bt/pt.data.BYTES_PER_ELEMENT,(Tt+1)*bt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Tt,pt.width,pt.height,1,gt,Bt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,ct.depth,gt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Pt,pt.width,pt.height,ct.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,ct.depth,gt,Dt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Pt,pt.width,pt.height,ct.depth,0,gt,Dt,pt.data)}else{N&&ht&&e.texStorage2D(i.TEXTURE_2D,Mt,Pt,Ht[0].width,Ht[0].height);for(let ot=0,rt=Ht.length;ot<rt;ot++)pt=Ht[ot],x.format!==tn?gt!==null?N?dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,pt.width,pt.height,gt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Pt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?dt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,pt.width,pt.height,gt,Dt,pt.data):e.texImage2D(i.TEXTURE_2D,ot,Pt,pt.width,pt.height,0,gt,Dt,pt.data)}else if(x.isDataArrayTexture)if(N){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Pt,ct.width,ct.height,ct.depth),dt)if(x.layerUpdates.size>0){let ot=Ya(ct.width,ct.height,x.format,x.type);for(let rt of x.layerUpdates){let bt=ct.data.subarray(rt*ot/ct.data.BYTES_PER_ELEMENT,(rt+1)*ot/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ct.width,ct.height,1,gt,Dt,bt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,gt,Dt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ct.width,ct.height,ct.depth,0,gt,Dt,ct.data);else if(x.isData3DTexture)N?(ht&&e.texStorage3D(i.TEXTURE_3D,Mt,Pt,ct.width,ct.height,ct.depth),dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,gt,Dt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ct.width,ct.height,ct.depth,0,gt,Dt,ct.data);else if(x.isFramebufferTexture){if(ht)if(N)e.texStorage2D(i.TEXTURE_2D,Mt,Pt,ct.width,ct.height);else{let ot=ct.width,rt=ct.height;for(let bt=0;bt<Mt;bt++)e.texImage2D(i.TEXTURE_2D,bt,Pt,ot,rt,0,gt,Dt,null),ot>>=1,rt>>=1}}else if(Ht.length>0){if(N&&ht){let ot=ae(Ht[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Pt,ot.width,ot.height)}for(let ot=0,rt=Ht.length;ot<rt;ot++)pt=Ht[ot],N?dt&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,gt,Dt,pt):e.texImage2D(i.TEXTURE_2D,ot,Pt,gt,Dt,pt);x.generateMipmaps=!1}else if(N){if(ht){let ot=ae(ct);e.texStorage2D(i.TEXTURE_2D,Mt,Pt,ot.width,ot.height)}dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Dt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Pt,gt,Dt,ct);m(x)&&d($),yt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function q(A,x,D){if(x.image.length!==6)return;let $=it(A,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+D);let Q=n.get(tt);if(tt.version!==Q.__version||$===!0){e.activeTexture(i.TEXTURE0+D);let yt=jt.getPrimaries(jt.workingColorSpace),lt=x.colorSpace===Ne?null:jt.getPrimaries(x.colorSpace),wt=x.colorSpace===Ne||yt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let Ct=x.isCompressedTexture||x.image[0].isCompressedTexture,ct=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let rt=0;rt<6;rt++)!Ct&&!ct?gt[rt]=_(x.image[rt],!0,s.maxCubemapSize):gt[rt]=ct?x.image[rt].image:x.image[rt],gt[rt]=fe(x,gt[rt]);let Dt=gt[0],Pt=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Ht=b(x.internalFormat,Pt,pt,x.colorSpace),N=x.isVideoTexture!==!0,ht=Q.__version===void 0||$===!0,dt=tt.dataReady,Mt=C(x,Dt);et(i.TEXTURE_CUBE_MAP,x);let ot;if(Ct){N&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Ht,Dt.width,Dt.height);for(let rt=0;rt<6;rt++){ot=gt[rt].mipmaps;for(let bt=0;bt<ot.length;bt++){let Tt=ot[bt];x.format!==tn?Pt!==null?N?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Tt.width,Tt.height,Pt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Ht,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,0,0,Tt.width,Tt.height,Pt,pt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt,Ht,Tt.width,Tt.height,0,Pt,pt,Tt.data)}}}else{if(ot=x.mipmaps,N&&ht){ot.length>0&&Mt++;let rt=ae(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Ht,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ct){N?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,gt[rt].width,gt[rt].height,Pt,pt,gt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ht,gt[rt].width,gt[rt].height,0,Pt,pt,gt[rt].data);for(let bt=0;bt<ot.length;bt++){let Bt=ot[bt].image[rt].image;N?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,Bt.width,Bt.height,Pt,pt,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Ht,Bt.width,Bt.height,0,Pt,pt,Bt.data)}}else{N?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Pt,pt,gt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ht,Pt,pt,gt[rt]);for(let bt=0;bt<ot.length;bt++){let Tt=ot[bt];N?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,0,0,Pt,pt,Tt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,bt+1,Ht,Pt,pt,Tt.image[rt])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),Q.__version=tt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ft(A,x,D,$,tt,Q){let yt=r.convert(D.format,D.colorSpace),lt=r.convert(D.type),wt=b(D.internalFormat,yt,lt,D.colorSpace),Ct=n.get(x),ct=n.get(D);if(ct.__renderTarget=x,!Ct.__hasExternalTextures){let gt=Math.max(1,x.width>>Q),Dt=Math.max(1,x.height>>Q);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Q,wt,gt,Dt,x.depth,0,yt,lt,null):e.texImage2D(tt,Q,wt,gt,Dt,0,yt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),xt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,ct.__webglTexture,0,qt(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,ct.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,x,D){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let $=x.depthTexture,tt=$&&$.isDepthTexture?$.type:null,Q=M(x.stencilBuffer,tt),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=qt(x);xt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Q,x.width,x.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,A)}else{let $=x.textures;for(let tt=0;tt<$.length;tt++){let Q=$[tt],yt=r.convert(Q.format,Q.colorSpace),lt=r.convert(Q.type),wt=b(Q.internalFormat,yt,lt,Q.colorSpace),Ct=qt(x);D&&xt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,wt,x.width,x.height):xt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,wt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,wt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);let tt=$.__webglTexture,Q=qt(x);if(x.depthTexture.format===Ui)xt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Xi)xt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function At(A){let x=n.get(A),D=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=$}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");let $=A.texture.mipmaps;$&&$.length>0?nt(x.__webglFramebuffer[0],A):nt(x.__webglFramebuffer,A)}else if(D){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),st(x.__webglDepthbuffer[$],A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Q)}}else{let $=A.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,A,!1);else{let tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(A,x,D){let $=n.get(A);x!==void 0&&ft($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&At(A)}function I(A){let x=A.texture,D=n.get(A),$=n.get(x);A.addEventListener("dispose",P);let tt=A.textures,Q=A.isWebGLCubeRenderTarget===!0,yt=tt.length>1;if(yt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),Q){D.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[lt]=[];for(let wt=0;wt<x.mipmaps.length;wt++)D.__webglFramebuffer[lt][wt]=i.createFramebuffer()}else D.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let lt=0;lt<x.mipmaps.length;lt++)D.__webglFramebuffer[lt]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(yt)for(let lt=0,wt=tt.length;lt<wt;lt++){let Ct=n.get(tt[lt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&xt(A)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let lt=0;lt<tt.length;lt++){let wt=tt[lt];D.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[lt]);let Ct=r.convert(wt.format,wt.colorSpace),ct=r.convert(wt.type),gt=b(wt.internalFormat,Ct,ct,wt.colorSpace,A.isXRRenderTarget===!0),Dt=qt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,D.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),st(D.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),et(i.TEXTURE_CUBE_MAP,x);for(let lt=0;lt<6;lt++)if(x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)ft(D.__webglFramebuffer[lt][wt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,wt);else ft(D.__webglFramebuffer[lt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let lt=0,wt=tt.length;lt<wt;lt++){let Ct=tt[lt],ct=n.get(Ct),gt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,ct.__webglTexture),et(gt,Ct),ft(D.__webglFramebuffer,A,Ct,i.COLOR_ATTACHMENT0+lt,gt,0),m(Ct)&&d(gt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),et(lt,x),x.mipmaps&&x.mipmaps.length>0)for(let wt=0;wt<x.mipmaps.length;wt++)ft(D.__webglFramebuffer[wt],A,x,i.COLOR_ATTACHMENT0,lt,wt);else ft(D.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,lt,0);m(x)&&d(lt),e.unbindTexture()}A.depthBuffer&&At(A)}function Zt(A){let x=A.textures;for(let D=0,$=x.length;D<$;D++){let tt=x[D];if(m(tt)){let Q=T(A),yt=n.get(tt).__webglTexture;e.bindTexture(Q,yt),d(Q),e.unbindTexture()}}}let Ot=[],St=[];function _t(A){if(A.samples>0){if(xt(A)===!1){let x=A.textures,D=A.width,$=A.height,tt=i.COLOR_BUFFER_BIT,Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(A),lt=x.length>1;if(lt)for(let Ct=0;Ct<x.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let wt=A.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Ct=0;Ct<x.length;Ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ct]);let ct=n.get(x[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,D,$,0,0,D,$,tt,i.NEAREST),l===!0&&(Ot.length=0,St.length=0,Ot.push(i.COLOR_ATTACHMENT0+Ct),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ot.push(Q),St.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let Ct=0;Ct<x.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Ct]);let ct=n.get(x[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function qt(A){return Math.min(s.maxSamples,A.samples)}function xt(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Wt(A){let x=o.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function fe(A,x){let D=A.colorSpace,$=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==cn&&D!==Ne&&(jt.getTransfer(D)===ee?($!==tn||tt!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=E,this.setTexture3D=F,this.setTextureCube=L,this.rebindTextures=Gt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=xt}function eg(i,t){function e(n,s=Ne){let r,o=jt.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===no)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ua)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Na)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===La)return i.BYTE;if(n===Da)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===to)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===je)return i.HALF_FLOAT;if(n===Fa)return i.ALPHA;if(n===Oa)return i.RGB;if(n===tn)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===io)return i.RED;if(n===so)return i.RED_INTEGER;if(n===Ba)return i.RG;if(n===ro)return i.RG_INTEGER;if(n===oo)return i.RGBA_INTEGER;if(n===Os||n===Bs||n===zs||n===ks)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Os)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Os)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===fo)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===vo||n===_o||n===xo||n===yo||n===Mo||n===So||n===bo||n===To||n===Eo||n===wo||n===Ao||n===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Io||n===Po)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Co)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lo||n===Do||n===Uo||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
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

}`,ol=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Es(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new de({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new $t(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},al=class extends Pn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,v=null,_=typeof XRWebGLBinding<"u",m=new ol,d={},T=e.getContextAttributes(),b=null,M=null,C=[],w=[],P=new Lt,O=null,y=new Me;y.viewport=new Qt;let g=new Me;g.viewport=new Qt;let R=[y,g],U=new Vr,G=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let q=C[k];return q===void 0&&(q=new zi,C[k]=q),q.getTargetRaySpace()},this.getControllerGrip=function(k){let q=C[k];return q===void 0&&(q=new zi,C[k]=q),q.getGripSpace()},this.getHand=function(k){let q=C[k];return q===void 0&&(q=new zi,C[k]=q),q.getHandSpace()};function Y(k){let q=w.indexOf(k.inputSource);if(q===-1)return;let ft=C[q];ft!==void 0&&(ft.update(k.inputSource,k.frame,c||o),ft.dispatchEvent({type:k.type,data:k.inputSource}))}function E(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",E),s.removeEventListener("inputsourceschange",F);for(let k=0;k<C.length;k++){let q=w[k];q!==null&&(w[k]=null,C[k].disconnect(q))}G=null,J=null,m.reset();for(let k in d)delete d[k];t.setRenderTarget(b),p=null,u=null,h=null,s=null,M=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",E),s.addEventListener("inputsourceschange",F),T.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,st=null,nt=null;T.depth&&(nt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=T.stencil?Xi:Ui,st=T.stencil?Wi:qn);let At={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(At),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Re(u.textureWidth,u.textureHeight,{format:tn,type:dn,depthTexture:new Ts(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ft={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Re(p.framebufferWidth,p.framebufferHeight,{format:tn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(k){for(let q=0;q<k.removed.length;q++){let ft=k.removed[q],st=w.indexOf(ft);st>=0&&(w[st]=null,C[st].disconnect(ft))}for(let q=0;q<k.added.length;q++){let ft=k.added[q],st=w.indexOf(ft);if(st===-1){for(let At=0;At<C.length;At++)if(At>=w.length){w.push(ft),st=At;break}else if(w[At]===null){w[At]=ft,st=At;break}if(st===-1)break}let nt=C[st];nt&&nt.connect(ft)}}let L=new H,B=new H;function X(k,q,ft){L.setFromMatrixPosition(q.matrixWorld),B.setFromMatrixPosition(ft.matrixWorld);let st=L.distanceTo(B),nt=q.projectionMatrix.elements,At=ft.projectionMatrix.elements,Gt=nt[14]/(nt[10]-1),I=nt[14]/(nt[10]+1),Zt=(nt[9]+1)/nt[5],Ot=(nt[9]-1)/nt[5],St=(nt[8]-1)/nt[0],_t=(At[8]+1)/At[0],qt=Gt*St,xt=Gt*_t,Wt=st/(-St+_t),fe=Wt*-St;if(q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(fe),k.translateZ(Wt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),nt[10]===-1)k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let ae=Gt+Wt,A=I+Wt,x=qt-fe,D=xt+(st-fe),$=Zt*I/A*ae,tt=Ot*I/A*ae;k.projectionMatrix.makePerspective(x,D,$,tt,ae,A),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function W(k,q){q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let q=k.near,ft=k.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),U.near=g.near=y.near=q,U.far=g.far=y.far=ft,(G!==U.near||J!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),G=U.near,J=U.far),U.layers.mask=k.layers.mask|6,y.layers.mask=U.layers.mask&3,g.layers.mask=U.layers.mask&5;let st=k.parent,nt=U.cameras;W(U,st);for(let At=0;At<nt.length;At++)W(nt[At],st);nt.length===2?X(U,y,g):U.projectionMatrix.copy(y.projectionMatrix),et(k,U,st)};function et(k,q,ft){ft===null?k.matrix.copy(q.matrixWorld):(k.matrix.copy(ft.matrixWorld),k.matrix.invert(),k.matrix.multiply(q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(q.projectionMatrix),k.projectionMatrixInverse.copy(q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ni*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(k){return d[k]};let it=null;function Z(k,q){if(f=q.getViewerPose(c||o),v=q,f!==null){let ft=f.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let st=!1;ft.length!==U.cameras.length&&(U.cameras.length=0,st=!0);for(let I=0;I<ft.length;I++){let Zt=ft[I],Ot=null;if(p!==null)Ot=p.getViewport(Zt);else{let _t=h.getViewSubImage(u,Zt);Ot=_t.viewport,I===0&&(t.setRenderTargetTextures(M,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(M))}let St=R[I];St===void 0&&(St=new Me,St.layers.enable(I),St.viewport=new Qt,R[I]=St),St.matrix.fromArray(Zt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Zt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),I===0&&(U.matrix.copy(St.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),st===!0&&U.cameras.push(St)}let nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let I=h.getDepthInformation(ft[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(nt&&nt.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let I=0;I<ft.length;I++){let Zt=ft[I].camera;if(Zt){let Ot=d[Zt];Ot||(Ot=new Es,d[Zt]=Ot);let St=h.getCameraImage(Zt);Ot.sourceTexture=St}}}}for(let ft=0;ft<C.length;ft++){let st=w[ft],nt=C[ft];st!==null&&nt!==void 0&&nt.update(st,q,c||o)}it&&it(k,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),v=null}let at=new th;at.setAnimationLoop(Z),this.setAnimationLoop=function(k){it=k},this.dispose=function(){}}},hi=new $e,sg=new oe;function rg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Wa(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,T,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),f(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,T,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Te&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Te&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let T=t.get(d),b=T.envMap,M=T.envMapRotation;b&&(m.envMap.value=b,hi.copy(M),hi.x*=-1,hi.y*=-1,hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),m.envMapRotation.value.setFromMatrix4(sg.makeRotationFromEuler(hi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Te&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let T=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function og(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){let M=b.program;n.uniformBlockBinding(T,M)}function c(T,b){let M=s[T.id];M===void 0&&(v(T),M=f(T),s[T.id]=M,T.addEventListener("dispose",m));let C=b.program;n.updateUBOMapping(T,C);let w=t.render.frame;r[T.id]!==w&&(u(T),r[T.id]=w)}function f(T){let b=h();T.__bindingPointIndex=b;let M=i.createBuffer(),C=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){let b=s[T.id],M=T.uniforms,C=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,P=M.length;w<P;w++){let O=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,g=O.length;y<g;y++){let R=O[y];if(p(R,w,y,C)===!0){let U=R.__offset,G=Array.isArray(R.value)?R.value:[R.value],J=0;for(let Y=0;Y<G.length;Y++){let E=G[Y],F=_(E);typeof E=="number"||typeof E=="boolean"?(R.__data[0]=E,i.bufferSubData(i.UNIFORM_BUFFER,U+J,R.__data)):E.isMatrix3?(R.__data[0]=E.elements[0],R.__data[1]=E.elements[1],R.__data[2]=E.elements[2],R.__data[3]=0,R.__data[4]=E.elements[3],R.__data[5]=E.elements[4],R.__data[6]=E.elements[5],R.__data[7]=0,R.__data[8]=E.elements[6],R.__data[9]=E.elements[7],R.__data[10]=E.elements[8],R.__data[11]=0):(E.toArray(R.__data,J),J+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,b,M,C){let w=T.value,P=b+"_"+M;if(C[P]===void 0)return typeof w=="number"||typeof w=="boolean"?C[P]=w:C[P]=w.clone(),!0;{let O=C[P];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return C[P]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function v(T){let b=T.uniforms,M=0,C=16;for(let P=0,O=b.length;P<O;P++){let y=Array.isArray(b[P])?b[P]:[b[P]];for(let g=0,R=y.length;g<R;g++){let U=y[g],G=Array.isArray(U.value)?U.value:[U.value];for(let J=0,Y=G.length;J<Y;J++){let E=G[J],F=_(E),L=M%C,B=L%F.boundary,X=L+B;M+=B,X!==0&&C-X<F.storage&&(M+=C-X),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=F.storage}}}let w=M%C;return w>0&&(M+=C-w),T.__size=M,T.__cache={},this}function _(T){let b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function m(T){let b=T.target;b.removeEventListener("dispose",m);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ko=class{constructor(t={}){let{canvas:e=wc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let v=new Uint32Array(4),_=new Int32Array(4),m=null,d=null,T=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,C=!1;this._outputColorSpace=pe;let w=0,P=0,O=null,y=-1,g=null,R=new Qt,U=new Qt,G=null,J=new Vt(0),Y=0,E=e.width,F=e.height,L=1,B=null,X=null,W=new Qt(0,0,E,F),et=new Qt(0,0,E,F),it=!1,Z=new ki,at=!1,k=!1,q=new oe,ft=new H,st=new Qt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function Gt(){return O===null?L:1}let I=n;function Zt(S,z){return e.getContext(S,z)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),I===null){let z="webgl2";if(I=Zt(z,S),I===null)throw Zt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ot,St,_t,qt,xt,Wt,fe,ae,A,x,D,$,tt,Q,yt,lt,wt,Ct,ct,gt,Dt,Pt,pt,Ht;function N(){Ot=new Tp(I),Ot.init(),Pt=new eg(I,Ot),St=new vp(I,Ot,t,Pt),_t=new jm(I,Ot),St.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),qt=new Ap(I),xt=new km,Wt=new tg(I,Ot,_t,xt,St,Pt,qt),fe=new xp(M),ae=new bp(M),A=new Lu(I),pt=new mp(I,A),x=new Ep(I,A,qt,pt),D=new Cp(I,x,A,qt),ct=new Rp(I,St,Wt),lt=new _p(xt),$=new zm(M,fe,ae,Ot,St,pt,lt),tt=new rg(M,xt),Q=new Vm,yt=new Zm(Ot),Ct=new pp(M,fe,ae,_t,D,p,l),wt=new Km(M,D,St),Ht=new og(I,qt,St,_t),gt=new gp(I,Ot,qt),Dt=new wp(I,Ot,qt),qt.programs=$.programs,M.capabilities=St,M.extensions=Ot,M.properties=xt,M.renderLists=Q,M.shadowMap=wt,M.state=_t,M.info=qt}N();let ht=new al(M,I);this.xr=ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(S){S!==void 0&&(L=S,this.setSize(E,F,!1))},this.getSize=function(S){return S.set(E,F)},this.setSize=function(S,z,K=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=S,F=z,e.width=Math.floor(S*L),e.height=Math.floor(z*L),K===!0&&(e.style.width=S+"px",e.style.height=z+"px"),this.setViewport(0,0,S,z)},this.getDrawingBufferSize=function(S){return S.set(E*L,F*L).floor()},this.setDrawingBufferSize=function(S,z,K){E=S,F=z,L=K,e.width=Math.floor(S*K),e.height=Math.floor(z*K),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(W)},this.setViewport=function(S,z,K,j){S.isVector4?W.set(S.x,S.y,S.z,S.w):W.set(S,z,K,j),_t.viewport(R.copy(W).multiplyScalar(L).round())},this.getScissor=function(S){return S.copy(et)},this.setScissor=function(S,z,K,j){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,z,K,j),_t.scissor(U.copy(et).multiplyScalar(L).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(S){_t.setScissorTest(it=S)},this.setOpaqueSort=function(S){B=S},this.setTransparentSort=function(S){X=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(S=!0,z=!0,K=!0){let j=0;if(S){let V=!1;if(O!==null){let ut=O.texture.format;V=ut===oo||ut===ro||ut===so}if(V){let ut=O.texture.type,vt=ut===dn||ut===qn||ut===Gi||ut===Wi||ut===eo||ut===no,Rt=Ct.getClearColor(),Et=Ct.getClearAlpha(),Ft=Rt.r,zt=Rt.g,Ut=Rt.b;vt?(v[0]=Ft,v[1]=zt,v[2]=Ut,v[3]=Et,I.clearBufferuiv(I.COLOR,0,v)):(_[0]=Ft,_[1]=zt,_[2]=Ut,_[3]=Et,I.clearBufferiv(I.COLOR,0,_))}else j|=I.COLOR_BUFFER_BIT}z&&(j|=I.DEPTH_BUFFER_BIT),K&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Ct.dispose(),Q.dispose(),yt.dispose(),xt.dispose(),fe.dispose(),ae.dispose(),D.dispose(),pt.dispose(),Ht.dispose(),$.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ke),ht.removeEventListener("sessionend",pi),pn.stop()};function dt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=qt.autoReset,z=wt.enabled,K=wt.autoUpdate,j=wt.needsUpdate,V=wt.type;N(),qt.autoReset=S,wt.enabled=z,wt.autoUpdate=K,wt.needsUpdate=j,wt.type=V}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function rt(S){let z=S.target;z.removeEventListener("dispose",rt),bt(z)}function bt(S){Tt(S),xt.remove(S)}function Tt(S){let z=xt.get(S).programs;z!==void 0&&(z.forEach(function(K){$.releaseProgram(K)}),S.isShaderMaterial&&$.releaseShaderCache(S))}this.renderBufferDirect=function(S,z,K,j,V,ut){z===null&&(z=nt);let vt=V.isMesh&&V.matrixWorld.determinant()<0,Rt=Ch(S,z,K,j,V);_t.setMaterial(j,vt);let Et=K.index,Ft=1;if(j.wireframe===!0){if(Et=x.getWireframeAttribute(K),Et===void 0)return;Ft=2}let zt=K.drawRange,Ut=K.attributes.position,Jt=zt.start*Ft,ne=(zt.start+zt.count)*Ft;ut!==null&&(Jt=Math.max(Jt,ut.start*Ft),ne=Math.min(ne,(ut.start+ut.count)*Ft)),Et!==null?(Jt=Math.max(Jt,0),ne=Math.min(ne,Et.count)):Ut!=null&&(Jt=Math.max(Jt,0),ne=Math.min(ne,Ut.count));let he=ne-Jt;if(he<0||he===1/0)return;pt.setup(V,j,Rt,K,Et);let se,ie=gt;if(Et!==null&&(se=A.get(Et),ie=Dt,ie.setIndex(se)),V.isMesh)j.wireframe===!0?(_t.setLineWidth(j.wireframeLinewidth*Gt()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(V.isLine){let Nt=j.linewidth;Nt===void 0&&(Nt=1),_t.setLineWidth(Nt*Gt()),V.isLineSegments?ie.setMode(I.LINES):V.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else V.isPoints?ie.setMode(I.POINTS):V.isSprite&&ie.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ie.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Nt=V._multiDrawStarts,le=V._multiDrawCounts,te=V._multiDrawCount,He=Et?A.get(Et).bytesPerElement:1,gi=xt.get(j).currentProgram.getUniforms();for(let Ve=0;Ve<te;Ve++)gi.setValue(I,"_gl_DrawID",Ve),ie.render(Nt[Ve]/He,le[Ve])}else if(V.isInstancedMesh)ie.renderInstances(Jt,he,V.count);else if(K.isInstancedBufferGeometry){let Nt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,le=Math.min(K.instanceCount,Nt);ie.renderInstances(Jt,he,le)}else ie.render(Jt,he)};function Bt(S,z,K){S.transparent===!0&&S.side===Qe&&S.forceSinglePass===!1?(S.side=Te,S.needsUpdate=!0,Ee(S,z,K),S.side=In,S.needsUpdate=!0,Ee(S,z,K),S.side=Qe):Ee(S,z,K)}this.compile=function(S,z,K=null){K===null&&(K=S),d=yt.get(K),d.init(z),b.push(d),K.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),S!==K&&S.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights();let j=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ut=V.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){let Rt=ut[vt];Bt(Rt,K,V),j.add(Rt)}else Bt(ut,K,V),j.add(ut)}),d=b.pop(),j},this.compileAsync=function(S,z,K=null){let j=this.compile(S,z,K);return new Promise(V=>{function ut(){if(j.forEach(function(vt){xt.get(vt).currentProgram.isReady()&&j.delete(vt)}),j.size===0){V(S);return}setTimeout(ut,10)}Ot.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Xt=null;function ye(S){Xt&&Xt(S)}function ke(){pn.stop()}function pi(){pn.start()}let pn=new th;pn.setAnimationLoop(ye),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(S){Xt=S,ht.setAnimationLoop(S),S===null?pn.stop():pn.start()},ht.addEventListener("sessionstart",ke),ht.addEventListener("sessionend",pi),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(z),z=ht.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,z,O),d=yt.get(S,b.length),d.init(z),b.push(d),q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(q,ln,z.reversedDepth),k=this.localClippingEnabled,at=lt.init(this.clippingPlanes,k),m=Q.get(S,T.length),m.init(),T.push(m),ht.enabled===!0&&ht.isPresenting===!0){let ut=M.xr.getDepthSensingMesh();ut!==null&&ns(ut,z,-1/0,M.sortObjects)}ns(S,z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(B,X),At=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,At&&Ct.addToRenderList(m,S),this.info.render.frame++,at===!0&&lt.beginShadows();let K=d.state.shadowsArray;wt.render(K,S,z),at===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=m.opaque,V=m.transmissive;if(d.setupLights(),z.isArrayCamera){let ut=z.cameras;if(V.length>0)for(let vt=0,Rt=ut.length;vt<Rt;vt++){let Et=ut[vt];Zn(j,V,S,Et)}At&&Ct.render(S);for(let vt=0,Rt=ut.length;vt<Rt;vt++){let Et=ut[vt];Js(m,S,Et,Et.viewport)}}else V.length>0&&Zn(j,V,S,z),At&&Ct.render(S),Js(m,S,z);O!==null&&P===0&&(Wt.updateMultisampleRenderTarget(O),Wt.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(M,S,z),pt.resetDefaultState(),y=-1,g=null,b.pop(),b.length>0?(d=b[b.length-1],at===!0&&lt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function ns(S,z,K,j){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){j&&st.setFromMatrixPosition(S.matrixWorld).applyMatrix4(q);let vt=D.update(S),Rt=S.material;Rt.visible&&m.push(S,vt,Rt,K,st.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){let vt=D.update(S),Rt=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),st.copy(S.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),st.copy(vt.boundingSphere.center)),st.applyMatrix4(S.matrixWorld).applyMatrix4(q)),Array.isArray(Rt)){let Et=vt.groups;for(let Ft=0,zt=Et.length;Ft<zt;Ft++){let Ut=Et[Ft],Jt=Rt[Ut.materialIndex];Jt&&Jt.visible&&m.push(S,vt,Jt,K,st.z,Ut)}}else Rt.visible&&m.push(S,vt,Rt,K,st.z,null)}}let ut=S.children;for(let vt=0,Rt=ut.length;vt<Rt;vt++)ns(ut[vt],z,K,j)}function Js(S,z,K,j){let V=S.opaque,ut=S.transmissive,vt=S.transparent;d.setupLightsView(K),at===!0&&lt.setGlobalState(M.clippingPlanes,K),j&&_t.viewport(R.copy(j)),V.length>0&&mi(V,z,K),ut.length>0&&mi(ut,z,K),vt.length>0&&mi(vt,z,K),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Zn(S,z,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[j.id]===void 0&&(d.state.transmissionRenderTarget[j.id]=new Re(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?je:dn,minFilter:yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let ut=d.state.transmissionRenderTarget[j.id],vt=j.viewport||R;ut.setSize(vt.z*M.transmissionResolutionScale,vt.w*M.transmissionResolutionScale);let Rt=M.getRenderTarget(),Et=M.getActiveCubeFace(),Ft=M.getActiveMipmapLevel();M.setRenderTarget(ut),M.getClearColor(J),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),At&&Ct.render(K);let zt=M.toneMapping;M.toneMapping=un;let Ut=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),d.setupLightsView(j),at===!0&&lt.setGlobalState(M.clippingPlanes,j),mi(S,K,j),Wt.updateMultisampleRenderTarget(ut),Wt.updateRenderTargetMipmap(ut),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ne=0,he=z.length;ne<he;ne++){let se=z[ne],ie=se.object,Nt=se.geometry,le=se.material,te=se.group;if(le.side===Qe&&ie.layers.test(j.layers)){let He=le.side;le.side=Te,le.needsUpdate=!0,Ks(ie,K,j,Nt,le,te),le.side=He,le.needsUpdate=!0,Jt=!0}}Jt===!0&&(Wt.updateMultisampleRenderTarget(ut),Wt.updateRenderTargetMipmap(ut))}M.setRenderTarget(Rt,Et,Ft),M.setClearColor(J,Y),Ut!==void 0&&(j.viewport=Ut),M.toneMapping=zt}function mi(S,z,K){let j=z.isScene===!0?z.overrideMaterial:null;for(let V=0,ut=S.length;V<ut;V++){let vt=S[V],Rt=vt.object,Et=vt.geometry,Ft=vt.group,zt=vt.material;zt.allowOverride===!0&&j!==null&&(zt=j),Rt.layers.test(K.layers)&&Ks(Rt,z,K,Et,zt,Ft)}}function Ks(S,z,K,j,V,ut){S.onBeforeRender(M,z,K,j,V,ut),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(M,z,K,j,S,ut),V.transparent===!0&&V.side===Qe&&V.forceSinglePass===!1?(V.side=Te,V.needsUpdate=!0,M.renderBufferDirect(K,z,j,V,S,ut),V.side=In,V.needsUpdate=!0,M.renderBufferDirect(K,z,j,V,S,ut),V.side=Qe):M.renderBufferDirect(K,z,j,V,S,ut),S.onAfterRender(M,z,K,j,V,ut)}function Ee(S,z,K){z.isScene!==!0&&(z=nt);let j=xt.get(S),V=d.state.lights,ut=d.state.shadowsArray,vt=V.state.version,Rt=$.getParameters(S,V.state,ut,z,K),Et=$.getProgramCacheKey(Rt),Ft=j.programs;j.environment=S.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(S.isMeshStandardMaterial?ae:fe).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Ft===void 0&&(S.addEventListener("dispose",rt),Ft=new Map,j.programs=Ft);let zt=Ft.get(Et);if(zt!==void 0){if(j.currentProgram===zt&&j.lightsStateVersion===vt)return ml(S,Rt),zt}else Rt.uniforms=$.getUniforms(S),S.onBeforeCompile(Rt,M),zt=$.acquireProgram(Rt,Et),Ft.set(Et,zt),j.uniforms=Rt.uniforms;let Ut=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ut.clippingPlanes=lt.uniform),ml(S,Rt),j.needsLights=Ph(S),j.lightsStateVersion=vt,j.needsLights&&(Ut.ambientLightColor.value=V.state.ambient,Ut.lightProbe.value=V.state.probe,Ut.directionalLights.value=V.state.directional,Ut.directionalLightShadows.value=V.state.directionalShadow,Ut.spotLights.value=V.state.spot,Ut.spotLightShadows.value=V.state.spotShadow,Ut.rectAreaLights.value=V.state.rectArea,Ut.ltc_1.value=V.state.rectAreaLTC1,Ut.ltc_2.value=V.state.rectAreaLTC2,Ut.pointLights.value=V.state.point,Ut.pointLightShadows.value=V.state.pointShadow,Ut.hemisphereLights.value=V.state.hemi,Ut.directionalShadowMap.value=V.state.directionalShadowMap,Ut.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ut.spotShadowMap.value=V.state.spotShadowMap,Ut.spotLightMatrix.value=V.state.spotLightMatrix,Ut.spotLightMap.value=V.state.spotLightMap,Ut.pointShadowMap.value=V.state.pointShadowMap,Ut.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=zt,j.uniformsList=null,zt}function Qs(S){if(S.uniformsList===null){let z=S.currentProgram.getUniforms();S.uniformsList=$i.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function ml(S,z){let K=xt.get(S);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Ch(S,z,K,j,V){z.isScene!==!0&&(z=nt),Wt.resetTextureUnits();let ut=z.fog,vt=j.isMeshStandardMaterial?z.environment:null,Rt=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:cn,Et=(j.isMeshStandardMaterial?ae:fe).get(j.envMap||vt),Ft=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,zt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ut=!!K.morphAttributes.position,Jt=!!K.morphAttributes.normal,ne=!!K.morphAttributes.color,he=un;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(he=M.toneMapping);let se=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ie=se!==void 0?se.length:0,Nt=xt.get(j),le=d.state.lights;if(at===!0&&(k===!0||S!==g)){let Pe=S===g&&j.id===y;lt.setState(j,S,Pe)}let te=!1;j.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==le.state.version||Nt.outputColorSpace!==Rt||V.isBatchedMesh&&Nt.batching===!1||!V.isBatchedMesh&&Nt.batching===!0||V.isBatchedMesh&&Nt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Nt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Nt.instancing===!1||!V.isInstancedMesh&&Nt.instancing===!0||V.isSkinnedMesh&&Nt.skinning===!1||!V.isSkinnedMesh&&Nt.skinning===!0||V.isInstancedMesh&&Nt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Nt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Nt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Nt.instancingMorph===!1&&V.morphTexture!==null||Nt.envMap!==Et||j.fog===!0&&Nt.fog!==ut||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==lt.numPlanes||Nt.numIntersection!==lt.numIntersection)||Nt.vertexAlphas!==Ft||Nt.vertexTangents!==zt||Nt.morphTargets!==Ut||Nt.morphNormals!==Jt||Nt.morphColors!==ne||Nt.toneMapping!==he||Nt.morphTargetsCount!==ie)&&(te=!0):(te=!0,Nt.__version=j.version);let He=Nt.currentProgram;te===!0&&(He=Ee(j,z,V));let gi=!1,Ve=!1,is=!1,ce=He.getUniforms(),qe=Nt.uniforms;if(_t.useProgram(He.program)&&(gi=!0,Ve=!0,is=!0),j.id!==y&&(y=j.id,Ve=!0),gi||g!==S){_t.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ce.setValue(I,"projectionMatrix",S.projectionMatrix),ce.setValue(I,"viewMatrix",S.matrixWorldInverse);let Fe=ce.map.cameraPosition;Fe!==void 0&&Fe.setValue(I,ft.setFromMatrixPosition(S.matrixWorld)),St.logarithmicDepthBuffer&&ce.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ce.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),g!==S&&(g=S,Ve=!0,is=!0)}if(V.isSkinnedMesh){ce.setOptional(I,V,"bindMatrix"),ce.setOptional(I,V,"bindMatrixInverse");let Pe=V.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ce.setValue(I,"boneTexture",Pe.boneTexture,Wt))}V.isBatchedMesh&&(ce.setOptional(I,V,"batchingTexture"),ce.setValue(I,"batchingTexture",V._matricesTexture,Wt),ce.setOptional(I,V,"batchingIdTexture"),ce.setValue(I,"batchingIdTexture",V._indirectTexture,Wt),ce.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&ce.setValue(I,"batchingColorTexture",V._colorsTexture,Wt));let Ye=K.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&ct.update(V,K,He),(Ve||Nt.receiveShadow!==V.receiveShadow)&&(Nt.receiveShadow=V.receiveShadow,ce.setValue(I,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(qe.envMap.value=Et,qe.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(qe.envMapIntensity.value=z.environmentIntensity),Ve&&(ce.setValue(I,"toneMappingExposure",M.toneMappingExposure),Nt.needsLights&&Ih(qe,is),ut&&j.fog===!0&&tt.refreshFogUniforms(qe,ut),tt.refreshMaterialUniforms(qe,j,L,F,d.state.transmissionRenderTarget[S.id]),$i.upload(I,Qs(Nt),qe,Wt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&($i.upload(I,Qs(Nt),qe,Wt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ce.setValue(I,"center",V.center),ce.setValue(I,"modelViewMatrix",V.modelViewMatrix),ce.setValue(I,"normalMatrix",V.normalMatrix),ce.setValue(I,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Pe=j.uniformsGroups;for(let Fe=0,Zo=Pe.length;Fe<Zo;Fe++){let $n=Pe[Fe];Ht.update($n,He),Ht.bind($n,He)}}return He}function Ih(S,z){S.ambientLightColor.needsUpdate=z,S.lightProbe.needsUpdate=z,S.directionalLights.needsUpdate=z,S.directionalLightShadows.needsUpdate=z,S.pointLights.needsUpdate=z,S.pointLightShadows.needsUpdate=z,S.spotLights.needsUpdate=z,S.spotLightShadows.needsUpdate=z,S.rectAreaLights.needsUpdate=z,S.hemisphereLights.needsUpdate=z}function Ph(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,z,K){let j=xt.get(S);j.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),xt.get(S.texture).__webglTexture=z,xt.get(S.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,z){let K=xt.get(S);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};let Lh=I.createFramebuffer();this.setRenderTarget=function(S,z=0,K=0){O=S,w=z,P=K;let j=!0,V=null,ut=!1,vt=!1;if(S){let Et=xt.get(S);if(Et.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Et.__webglFramebuffer===void 0)Wt.setupRenderTarget(S);else if(Et.__hasExternalTextures)Wt.rebindTextures(S,xt.get(S.texture).__webglTexture,xt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ut=S.depthTexture;if(Et.__boundDepthTexture!==Ut){if(Ut!==null&&xt.has(Ut)&&(S.width!==Ut.image.width||S.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Wt.setupDepthRenderbuffer(S)}}let Ft=S.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(vt=!0);let zt=xt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?V=zt[z][K]:V=zt[z],ut=!0):S.samples>0&&Wt.useMultisampledRTT(S)===!1?V=xt.get(S).__webglMultisampledFramebuffer:Array.isArray(zt)?V=zt[K]:V=zt,R.copy(S.viewport),U.copy(S.scissor),G=S.scissorTest}else R.copy(W).multiplyScalar(L).floor(),U.copy(et).multiplyScalar(L).floor(),G=it;if(K!==0&&(V=Lh),_t.bindFramebuffer(I.FRAMEBUFFER,V)&&j&&_t.drawBuffers(S,V),_t.viewport(R),_t.scissor(U),_t.setScissorTest(G),ut){let Et=xt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Et.__webglTexture,K)}else if(vt){let Et=z;for(let Ft=0;Ft<S.textures.length;Ft++){let zt=xt.get(S.textures[Ft]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ft,zt.__webglTexture,K,Et)}}else if(S!==null&&K!==0){let Et=xt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Et.__webglTexture,K)}y=-1},this.readRenderTargetPixels=function(S,z,K,j,V,ut,vt,Rt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){_t.bindFramebuffer(I.FRAMEBUFFER,Et);try{let Ft=S.textures[Rt],zt=Ft.format,Ut=Ft.type;if(!St.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=S.width-j&&K>=0&&K<=S.height-V&&(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt),I.readPixels(z,K,j,V,Pt.convert(zt),Pt.convert(Ut),ut))}finally{let Ft=O!==null?xt.get(O).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(S,z,K,j,V,ut,vt,Rt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=xt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et)if(z>=0&&z<=S.width-j&&K>=0&&K<=S.height-V){_t.bindFramebuffer(I.FRAMEBUFFER,Et);let Ft=S.textures[Rt],zt=Ft.format,Ut=Ft.type;if(!St.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Jt),I.bufferData(I.PIXEL_PACK_BUFFER,ut.byteLength,I.STREAM_READ),S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt),I.readPixels(z,K,j,V,Pt.convert(zt),Pt.convert(Ut),0);let ne=O!==null?xt.get(O).__webglFramebuffer:null;_t.bindFramebuffer(I.FRAMEBUFFER,ne);let he=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ac(I,he,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ut),I.deleteBuffer(Jt),I.deleteSync(he),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,z=null,K=0){let j=Math.pow(2,-K),V=Math.floor(S.image.width*j),ut=Math.floor(S.image.height*j),vt=z!==null?z.x:0,Rt=z!==null?z.y:0;Wt.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,vt,Rt,V,ut),_t.unbindTexture()};let Dh=I.createFramebuffer(),Uh=I.createFramebuffer();this.copyTextureToTexture=function(S,z,K=null,j=null,V=0,ut=null){ut===null&&(V!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=V,V=0):ut=0);let vt,Rt,Et,Ft,zt,Ut,Jt,ne,he,se=S.isCompressedTexture?S.mipmaps[ut]:S.image;if(K!==null)vt=K.max.x-K.min.x,Rt=K.max.y-K.min.y,Et=K.isBox3?K.max.z-K.min.z:1,Ft=K.min.x,zt=K.min.y,Ut=K.isBox3?K.min.z:0;else{let Ye=Math.pow(2,-V);vt=Math.floor(se.width*Ye),Rt=Math.floor(se.height*Ye),S.isDataArrayTexture?Et=se.depth:S.isData3DTexture?Et=Math.floor(se.depth*Ye):Et=1,Ft=0,zt=0,Ut=0}j!==null?(Jt=j.x,ne=j.y,he=j.z):(Jt=0,ne=0,he=0);let ie=Pt.convert(z.format),Nt=Pt.convert(z.type),le;z.isData3DTexture?(Wt.setTexture3D(z,0),le=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Wt.setTexture2DArray(z,0),le=I.TEXTURE_2D_ARRAY):(Wt.setTexture2D(z,0),le=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);let te=I.getParameter(I.UNPACK_ROW_LENGTH),He=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gi=I.getParameter(I.UNPACK_SKIP_PIXELS),Ve=I.getParameter(I.UNPACK_SKIP_ROWS),is=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ft),I.pixelStorei(I.UNPACK_SKIP_ROWS,zt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ut);let ce=S.isDataArrayTexture||S.isData3DTexture,qe=z.isDataArrayTexture||z.isData3DTexture;if(S.isDepthTexture){let Ye=xt.get(S),Pe=xt.get(z),Fe=xt.get(Ye.__renderTarget),Zo=xt.get(Pe.__renderTarget);_t.bindFramebuffer(I.READ_FRAMEBUFFER,Fe.__webglFramebuffer),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,Zo.__webglFramebuffer);for(let $n=0;$n<Et;$n++)ce&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(S).__webglTexture,V,Ut+$n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(z).__webglTexture,ut,he+$n)),I.blitFramebuffer(Ft,zt,vt,Rt,Jt,ne,vt,Rt,I.DEPTH_BUFFER_BIT,I.NEAREST);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||xt.has(S)){let Ye=xt.get(S),Pe=xt.get(z);_t.bindFramebuffer(I.READ_FRAMEBUFFER,Dh),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,Uh);for(let Fe=0;Fe<Et;Fe++)ce?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ye.__webglTexture,V,Ut+Fe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ye.__webglTexture,V),qe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,ut,he+Fe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,ut),V!==0?I.blitFramebuffer(Ft,zt,vt,Rt,Jt,ne,vt,Rt,I.COLOR_BUFFER_BIT,I.NEAREST):qe?I.copyTexSubImage3D(le,ut,Jt,ne,he+Fe,Ft,zt,vt,Rt):I.copyTexSubImage2D(le,ut,Jt,ne,Ft,zt,vt,Rt);_t.bindFramebuffer(I.READ_FRAMEBUFFER,null),_t.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else qe?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(le,ut,Jt,ne,he,vt,Rt,Et,ie,Nt,se.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(le,ut,Jt,ne,he,vt,Rt,Et,ie,se.data):I.texSubImage3D(le,ut,Jt,ne,he,vt,Rt,Et,ie,Nt,se):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ut,Jt,ne,vt,Rt,ie,Nt,se.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ut,Jt,ne,se.width,se.height,ie,se.data):I.texSubImage2D(I.TEXTURE_2D,ut,Jt,ne,vt,Rt,ie,Nt,se);I.pixelStorei(I.UNPACK_ROW_LENGTH,te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,is),ut===0&&z.generateMipmaps&&I.generateMipmap(le),_t.unbindTexture()},this.initRenderTarget=function(S){xt.get(S).__webglFramebuffer===void 0&&Wt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Wt.setTextureCube(S,0):S.isData3DTexture?Wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Wt.setTexture2DArray(S,0):Wt.setTexture2D(S,0),_t.unbindTexture()},this.resetState=function(){w=0,P=0,O=null,_t.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Vo=class extends De{constructor(){super();let t=new Ke;t.deleteAttribute("uv");let e=new hn({side:Te}),n=new hn,s=new Ps(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new $t(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new bs(t,n,6),a=new be;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new $t(t,ji(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new $t(t,ji(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let f=new $t(t,ji(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let h=new $t(t,ji(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let u=new $t(t,ji(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let p=new $t(t,ji(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ji(i){return new Rs({color:0,emissive:16777215,emissiveIntensity:i})}var rh="1.3.27";function lh(i,t,e){return Math.max(i,Math.min(t,e))}function ag(i,t,e){return(1-e)*i+e*t}function lg(i,t,e,n){return ag(i,t,1-Math.exp(-e*n))}function cg(i,t){return(i%t+t)%t}var hg=class{constructor(){It(this,"isRunning",!1);It(this,"value",0);It(this,"from",0);It(this,"to",0);It(this,"currentTime",0);It(this,"lerp");It(this,"duration");It(this,"easing");It(this,"onUpdate")}advance(i){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=i;let e=lh(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=lg(this.value,this.to,this.lerp*60,i),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(i,t,{lerp:e,duration:n,easing:s,onStart:r,onUpdate:o}){this.from=this.value=i,this.to=t,this.lerp=e,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function ug(i,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,i.apply(this,n)},t)}}var dg=class{constructor(i,t,{autoResize:e=!0,debounce:n=250}={}){It(this,"width",0);It(this,"height",0);It(this,"scrollHeight",0);It(this,"scrollWidth",0);It(this,"debouncedResize");It(this,"wrapperResizeObserver");It(this,"contentResizeObserver");It(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});It(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});It(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=i,this.content=t,e&&(this.debouncedResize=ug(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ch=class{constructor(){It(this,"events",{})}emit(i,...t){let e=this.events[i]||[];for(let n=0,s=e.length;n<s;n++)e[n]?.(...t)}on(i,t){return this.events[i]?this.events[i].push(t):this.events[i]=[t],()=>{this.events[i]=this.events[i]?.filter(e=>t!==e)}}off(i,t){this.events[i]=this.events[i]?.filter(e=>t!==e)}destroy(){this.events={}}},fg=100/6,Yn={passive:!1};function oh(i,t){return i===1?fg:i===2?t:1}var pg=class{constructor(i,t={wheelMultiplier:1,touchMultiplier:1}){It(this,"touchStart",{x:0,y:0});It(this,"lastDelta",{x:0,y:0});It(this,"window",{width:0,height:0});It(this,"emitter",new ch);It(this,"onTouchStart",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})});It(this,"onTouchMove",i=>{let{clientX:t,clientY:e}=i.targetTouches?i.targetTouches[0]:i,n=-(t-this.touchStart.x)*this.options.touchMultiplier,s=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:i})});It(this,"onTouchEnd",i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})});It(this,"onWheel",i=>{let{deltaX:t,deltaY:e,deltaMode:n}=i,s=oh(n,this.window.width),r=oh(n,this.window.height);t*=s,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:i})});It(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=i,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Yn),this.element.addEventListener("touchstart",this.onTouchStart,Yn),this.element.addEventListener("touchmove",this.onTouchMove,Yn),this.element.addEventListener("touchend",this.onTouchEnd,Yn)}on(i,t){return this.emitter.on(i,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Yn),this.element.removeEventListener("touchstart",this.onTouchStart,Yn),this.element.removeEventListener("touchmove",this.onTouchMove,Yn),this.element.removeEventListener("touchend",this.onTouchEnd,Yn)}},ah=i=>Math.min(1,1.001-2**(-10*i)),hh=class{constructor({wrapper:i=window,content:t=document.documentElement,eventsTarget:e=i,smoothWheel:n=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:f=!1,orientation:h="vertical",gestureOrientation:u=h==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:v=1,autoResize:_=!0,prevent:m,virtualScroll:d,overscroll:T=!0,autoRaf:b=!1,anchors:M=!1,autoToggle:C=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:P=!1,naiveDimensions:O=P,stopInertiaOnNavigate:y=!1,respectReducedMotion:g=!0}={}){It(this,"_isScrolling",!1);It(this,"_isStopped",!1);It(this,"_isLocked",!1);It(this,"_preventNextNativeScrollEvent",!1);It(this,"_resetVelocityTimeout",null);It(this,"_rafId",null);It(this,"_isDraggingSelection",!1);It(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));It(this,"isTouching");It(this,"isIos");It(this,"time",0);It(this,"userData",{});It(this,"lastVelocity",0);It(this,"velocity",0);It(this,"direction",0);It(this,"options");It(this,"targetScroll");It(this,"animatedScroll");It(this,"animate",new hg);It(this,"emitter",new ch);It(this,"dimensions");It(this,"virtualScroll");It(this,"onScrollEnd",i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()});It(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});It(this,"onTransitionEnd",i=>{i.propertyName?.includes("overflow")&&i.target===this.rootElement&&this.checkOverflow()});It(this,"onClick",i=>{let t=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(s=>e.host===s.host&&e.pathname===s.pathname&&s.hash);if(n){let s=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,s);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});It(this,"onPointerDown",i=>{i.button===1&&this.reset()});It(this,"onVirtualScroll",i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:t,deltaY:e,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let s=n.type.includes("touch"),r=n.type.includes("wheel");if(s&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&s&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,f=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(v=>v instanceof HTMLElement&&(typeof c=="function"&&c?.(v)||v.hasAttribute?.("data-lenis-prevent")||f==="vertical"&&v.hasAttribute?.("data-lenis-prevent-vertical")||f==="horizontal"&&v.hasAttribute?.("data-lenis-prevent-horizontal")||s&&v.hasAttribute?.("data-lenis-prevent-touch")||r&&v.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=s&&this.options.syncTouch,p=s&&n.type==="touchend";p&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...u?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});It(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});It(this,"raf",i=>{let t=i-(this.time||i);this.time=i,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=rh,window.lenis||(window.lenis={}),window.lenis.version=rh,h==="horizontal"&&(window.lenis.horizontal=!0),s===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=ah:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:t,eventsTarget:e,smoothWheel:n,syncTouch:s,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:f,gestureOrientation:u,orientation:h,touchMultiplier:p,wheelMultiplier:v,autoResize:_,prevent:m,virtualScroll:d,overscroll:T,autoRaf:b,anchors:M,autoToggle:C,allowNestedScroll:w,naiveDimensions:O,stopInertiaOnNavigate:y,respectReducedMotion:g},this.dimensions=new dg(i,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new pg(e,{touchMultiplier:p,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,t){return this.emitter.on(i,t)}off(i,t){return this.emitter.off(i,t)}get overflow(){let i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}isTouchOnSelectionHandle(i){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=i.targetTouches[0]??i.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let s=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-s.left,e.clientY-s.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(i,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:s=!0,lerp:r=s?this.options.lerp:void 0,duration:o=s?this.options.duration:void 0,easing:a=s?this.options.easing:void 0,onStart:l,onComplete:c,force:f=!1,userData:h}={}){if(this.prefersReducedMotion&&(s?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!f)return;let u=i,p=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let v=null;if(typeof u=="string"?(v=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),v||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(v=u),v){if(this.options.wrapper!==window){let M=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?M.left:M.top}let _=v.getBoundingClientRect(),m=getComputedStyle(v),d=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),T=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(T.scrollPaddingLeft):Number.parseFloat(T.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(d)?0:d)-(Number.isNaN(b)?0:b)}}if(typeof u=="number"){if(u+=p,this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;let v=u-this.animatedScroll;v>this.limit/2?u-=this.limit:v<-this.limit/2&&(u+=this.limit)}}else u=lh(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=ah:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(v,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),s&&(this.targetScroll=v),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:t,deltaY:e}){let n=Date.now();i._lenis||(i._lenis={});let s=i._lenis,r,o,a,l,c,f,h,u,p,v;if(n-(s.time??0)>2e3){s.time=Date.now();let w=window.getComputedStyle(i);if(s.computedStyle=w,r=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),f=["auto"].includes(w.overscrollBehaviorY),s.hasOverflowX=r,s.hasOverflowY=o,!(r||o))return!1;h=i.scrollWidth,u=i.scrollHeight,p=i.clientWidth,v=i.clientHeight,a=h>p,l=u>v,s.isScrollableX=a,s.isScrollableY=l,s.scrollWidth=h,s.scrollHeight=u,s.clientWidth=p,s.clientHeight=v,s.hasOverscrollBehaviorX=c,s.hasOverscrollBehaviorY=f}else a=s.isScrollableX,l=s.isScrollableY,r=s.hasOverflowX,o=s.hasOverflowY,h=s.scrollWidth,u=s.scrollHeight,p=s.clientWidth,v=s.clientHeight,c=s.hasOverscrollBehaviorX,f=s.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,d,T,b,M,C;if(_==="horizontal")m=Math.round(i.scrollLeft),d=h-p,T=t,b=r,M=a,C=c;else if(_==="vertical")m=Math.round(i.scrollTop),d=u-v,T=e,b=o,M=l,C=f;else return!1;return!C&&(m>=d||m<=0)?!0:(T>0?m<d:m>0)&&b&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?cg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(i=>{this.rootElement.classList.add(i)})}cleanUpClassName(){for(let i of Array.from(this.rootElement.classList))(i==="lenis"||i.startsWith("lenis-"))&&this.rootElement.classList.remove(i)}};var Vs='"Bedstead", "IBM Plex Mono", monospace';function Go(i,t,e,n=null,s=0){i.save(),i.fillStyle="#7d7f84",i.fillRect(0,0,t,e);let r=t/20;for(let m=0;m<20;m++)i.fillStyle=m%2?"#f2f2ee":"#111",i.fillRect(m*r,0,r,r*.45),i.fillStyle=m%2?"#111":"#f2f2ee",i.fillRect(m*r,e-r*.45,r,r*.45);let o=Math.round(e/r);for(let m=0;m<o;m++)i.fillStyle=m%2?"#f2f2ee":"#111",i.fillRect(0,m*r,r*.45,r),i.fillStyle=m%2?"#111":"#f2f2ee",i.fillRect(t-r*.45,m*r,r*.45,r);i.strokeStyle="rgba(245,245,240,.9)",i.lineWidth=Math.max(1,t/512);for(let m=r;m<t;m+=r)i.beginPath(),i.moveTo(m,r*.45),i.lineTo(m,e-r*.45),i.stroke();for(let m=r;m<e;m+=r)i.beginPath(),i.moveTo(r*.45,m),i.lineTo(t-r*.45,m),i.stroke();let a=e*.13;[[.13,.17],[.87,.17],[.13,.83],[.87,.83]].forEach(([m,d])=>{let T=m*t,b=d*e;i.fillStyle="#1a1a1a",i.beginPath(),i.arc(T,b,a,0,Math.PI*2),i.fill(),i.strokeStyle="#eee",i.lineWidth=t/400,i.beginPath(),i.arc(T,b,a*.92,0,Math.PI*2),i.stroke(),i.beginPath(),i.moveTo(T-a,b),i.lineTo(T+a,b),i.moveTo(T,b-a),i.lineTo(T,b+a),i.stroke();for(let M=1;M<=3;M++)i.beginPath(),i.arc(T,b,a*M/4,0,Math.PI*2),i.stroke()});let l=e*.43,c=t/2,f=e/2;i.save(),i.beginPath(),i.arc(c,f,l,0,Math.PI*2),i.clip(),i.fillStyle="#222",i.fillRect(c-l,f-l,l*2,l*2);let h=l*2/9,u=f-l;["#f4f4f0","#e8d33a","#3bc7cf","#3fb34a","#c43fb4","#d4362f","#2d3fc9","#111"].forEach((m,d)=>{i.fillStyle=m,i.fillRect(c-l+d*(l*2/8),u,l*2/8+1,h*1.6)}),u+=h*1.6;let v=6,_=l*2/v;for(let m=0;m<v;m++){let d=Math.max(2,(v-m)*t/400);for(let T=c-l+m*_;T<c-l+(m+1)*_;T+=d*2)i.fillStyle="#eee",i.fillRect(T,u,d,h)}u+=h,i.fillStyle="#0c0c0c",i.fillRect(c-l,u,l*2,h*2.6),i.fillStyle="#f3efe6",i.textAlign="center",i.textBaseline="middle",i.font=`${Math.round(h*1.15)}px ${Vs}`,i.fillText("\u041A\u0418\u041D\u0415\u0421\u041A\u041E\u041F",c,u+h*1.05),i.font=`${Math.round(h*.42)}px ${Vs}`,i.fillStyle="#c9c4b8",i.fillText("\u041C\u0410\u0421\u0422\u0415\u0420\u0421\u041A\u0410\u042F \u0420\u0415\u041C\u041E\u041D\u0422\u0410 \u0422\u0415\u0425\u041D\u0418\u041A\u0418",c,u+h*2.05),u+=h*2.6;for(let m=0;m<10;m++){let d=Math.round(m/9*235+10);i.fillStyle=`rgb(${d},${d},${d})`,i.fillRect(c-l+m*(l*2/10),u,l*2/10+1,h)}if(u+=h,i.fillStyle="#151515",i.fillRect(c-l,u,l*2,h*2),i.font=`${Math.round(h*.5)}px ${Vs}`,n!==null){let m=l*1.2,d=h*.55,T=c-m/2,b=u+h*.35;i.strokeStyle="#f3efe6",i.lineWidth=t/340,i.strokeRect(T,b,m,d);let M=18,C=Math.floor(n*M+1e-6);for(let w=0;w<C;w++)i.fillStyle="#f3efe6",i.fillRect(T+4+w*(m-8)/M,b+4,(m-8)/M-4,d-8);i.fillStyle="#f3efe6",i.fillText(`\u041D\u0410\u0421\u0422\u0420\u041E\u0419\u041A\u0410 ${String(Math.round(n*100)).padStart(3," ")}%`,c,u+h*1.45)}else{let m=new Date,d=String(m.getHours()).padStart(2,"0"),T=String(m.getMinutes()).padStart(2,"0"),b=String(m.getSeconds()).padStart(2,"0");i.fillStyle="#f3efe6",i.font=`${Math.round(h*.8)}px ${Vs}`,i.fillText(`${d}:${T}:${b}`,c,u+h*.75),i.font=`${Math.round(h*.4)}px ${Vs}`,i.fillStyle="#c9c4b8",i.fillText("\u041F\u0420\u0418\u0401\u041C \u0422\u0415\u0425\u041D\u0418\u041A\u0418 \u0421 10 \u0414\u041E 21",c,u+h*1.5)}i.restore(),i.strokeStyle="#f3efe6",i.lineWidth=t/300,i.beginPath(),i.arc(c,f,l,0,Math.PI*2),i.stroke(),i.restore()}function uh(i=1024,t=768){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d");Go(n,i,t,0);let s=new _n(e);return s.colorSpace=pe,s.anisotropy=4,{canvas:e,ctx:n,tex:s,draw(r,o){Go(n,i,t,r,o),s.needsUpdate=!0}}}function Gs(i,t,e){let n=Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}function mg(i,t,e){let n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Gs(n,s,e),f=Gs(n+1,s,e),h=Gs(n,s+1,e),u=Gs(n+1,s+1,e);return c+(f-c)*a+(h-c)*l+(c-f-h+u)*a*l}function dh(i=512,t=7){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d"),s=n.createImageData(i,i);for(let o=0;o<i;o++)for(let a=0;a<i;a++){let l=a/i,c=o/i,f=0,h=.55,u=4;for(let _=0;_<6;_++){let m=l*Math.PI*2,d=c*Math.PI*2;f+=h*mg(Math.cos(m)*u*.3+Math.sin(d)*u*.17+u,Math.sin(m)*u*.3+Math.cos(d)*u*.21+u,t+_),h*=.5,u*=2.1}let p=Math.max(0,Math.min(255,(f*.9+Gs(a,o,t)*.12)*255)),v=(o*i+a)*4;s.data[v]=s.data[v+1]=s.data[v+2]=p,s.data[v+3]=255}n.putImageData(s,0,0);let r=new _n(e);return r.wrapS=r.wrapT=Di,r}var gg=`
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
`,vg=`
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
`;function fh({width:i,height:t,bulge:e=.02,test:n,chan:s,osd:r}){let o=new Ue(i,t,32,24),a=new de({vertexShader:gg,fragmentShader:vg,transparent:!0,uniforms:{uTest:{value:n},uChan:{value:s},uOsd:{value:r},uMix:{value:0},uStatic:{value:0},uPower:{value:1},uTime:{value:0},uBright:{value:1.6},uOsdA:{value:0},uAspect:{value:new Lt(i/t,1)},uRadius:{value:.09},uBulge:{value:e}},toneMapped:!1}),l=new $t(o,a);return l.renderOrder=2,l}function ph(i=1024,t=768){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d"),s=new _n(e);s.colorSpace=pe;function r(o,a){n.clearRect(0,0,i,t),n.font=`${Math.round(t*.09)}px "Bedstead", monospace`,n.textBaseline="top",n.textAlign="right",n.shadowColor="rgba(80,255,120,.9)",n.shadowBlur=t*.02,n.fillStyle="#7dff8a",n.fillText(String(o).padStart(2,"0"),i*.9,t*.09),n.textAlign="left",n.font=`${Math.round(t*.055)}px "Bedstead", monospace`,n.fillText(a,i*.1,t*.84),s.needsUpdate=!0}return{canvas:e,tex:s,draw:r}}var _g="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",xg=`
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
`,yg=new Is;function mh(i,t){return yg.loadAsync(i).then(e=>(e.colorSpace=t?pe:Ne,e.minFilter=Se,e.generateMipmaps=!1,e.wrapS=e.wrapT=gn,e))}function Mg(i){let t=[[0,0],[1,0],[1,1],[0,1]],e=[],n=[];for(let r=0;r<4;r++){let[o,a]=i[r],[l,c]=t[r];e.push([o,a,1,0,0,0,-l*o,-l*a]),n.push(l),e.push([0,0,0,o,a,1,-c*o,-c*a]),n.push(c)}for(let r=0;r<8;r++){let o=r;for(let a=r+1;a<8;a++)Math.abs(e[a][r])>Math.abs(e[o][r])&&(o=a);[e[r],e[o]]=[e[o],e[r]],[n[r],n[o]]=[n[o],n[r]];for(let a=0;a<8;a++){if(a===r)continue;let l=e[a][r]/e[r][r];for(let c=r;c<8;c++)e[a][c]-=l*e[r][c];n[a]-=l*n[r]}}let s=n.map((r,o)=>r/e[o][o]);return new kt().set(s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7],1)}function cl(i,t,e,n=1,s=null){let r,o;t>i?(r=1,o=i/t):(o=1,r=t/i),r/=n,o/=n;let a=s?s[0]:e[0],l=s?s[1]:e[1],c=Math.min(1-r/2,Math.max(r/2,a)),f=Math.min(1-o/2,Math.max(o/2,l));return new Qt(c,f,r,o)}function hl(){let i=new si(new Uint8Array([0,0,0,255]),1,1);i.needsUpdate=!0;let t=new si(new Uint8Array([128,128,128,255]),1,1);return t.needsUpdate=!0,new de({vertexShader:_g,fragmentShader:xg,uniforms:{uA:{value:i},uDA:{value:t},uB:{value:i},uDB:{value:t},uMix:{value:0},uViewA:{value:new Qt(.5,.5,1,1)},uViewB:{value:new Qt(.5,.5,1,1)},uOff:{value:new Lt},uDolly:{value:0},uPivot:{value:.55},uTime:{value:0},uSmoke:{value:.07},uSmokeCol:{value:new Vt(1,.72,.5)},uDust:{value:.6},uReady:{value:0},uScreen:{value:i},uHasScreen:{value:0},uHom:{value:new kt},uScrAspect:{value:new Lt(1.3,1)},uScrGlow:{value:.35}},depthTest:!1,depthWrite:!1})}function ul(i){let t=new $t(new Ue(2,2),i);t.frustumCulled=!1;let e=new De;return e.add(t),{scene:e,camera:new ze(-1,1,1,-1,0,1)}}var Sg=typeof innerWidth<"u"&&innerHeight>innerWidth*1.1;function dl(i,t){return Sg&&(t+="-m"),Promise.all([mh(`${i}photo/${t}.jpg`,!0),mh(`${i}photo/${t}-depth.png`,!1),fetch(`${i}photo/${t}.json`).then(e=>e.json())]).then(([e,n,s])=>({color:e,depth:n,meta:s,aspect:s.size[0]/s.size[1]}))}var Wo=i=>1-Math.pow(1-i,3),gh=(i,t=0,e=1)=>Math.min(e,Math.max(t,i));function Xo({base:i,name:t,mobile:e=!1,smoke:n=.07,dust:s=.6,smokeColor:r=[1,.72,.5],push:o=.1,frame:a=null}){let l=hl(),{scene:c,camera:f}=ul(l),h=l.uniforms;h.uSmoke.value=n,h.uDust.value=e?s*.6:s,h.uSmokeCol.value.setRGB(...r);let u=null,p=null,v=1,_=0,m=new Lt;function d(){return p||(p=dl(i,t).then(M=>{u=M,h.uA.value=M.color,h.uDA.value=M.depth,h.uPivot.value=.6}).catch(M=>console.warn("\u0441\u0446\u0435\u043D\u0430",t,M))),p}function T(M){v=M}function b(M,C,{p:w=0,pointer:P=null}={}){if(h.uTime.value=M,!u){h.uReady.value=0;return}_=Math.min(1,_+C*1.5),h.uReady.value=Wo(_);let O=[u.meta.focus[0],1-u.meta.focus[1]],y=1.04+o*Wo(gh(w));h.uViewA.value.copy(cl(u.aspect,v,O,y,a&&(v<1?null:a))),P?m.lerp(P,1-Math.pow(.02,C)):m.multiplyScalar(Math.pow(.05,C));let g=.006*Math.sin(M*.21);h.uOff.value.set(-m.x*.014+g+(w-.5)*.02,-m.y*.009),h.uDolly.value=.06*w}return{scene:c,camera:f,load:d,setAspect:T,update:b,ready:()=>p}}function vh({base:i,names:t,mobile:e=!1}){let n=hl(),{scene:s,camera:r}=ul(n),o=n.uniforms;o.uSmoke.value=.05,o.uDust.value=e?.3:.5;let a=new Array(t.length).fill(null),l=new Array(t.length).fill(null),c=1,f=-1,h=-1,u=1,p=0,v=new Lt;function _(b){return l[b]||(l[b]=dl(i,t[b]).then(M=>{a[b]=M}).catch(M=>console.warn("\u043A\u0430\u043D\u0430\u043B",t[b],M))),l[b]}function m(b){b!==f&&(_(b),h=f,f=b,u=h<0?1:0,p=0)}function d(b,M,C=0){let w=[b.meta.focus[0],1-b.meta.focus[1]];return cl(b.aspect,c,w,1.05+C)}function T(b,M,{pointer:C=null}={}){o.uTime.value=b,p+=M;let w=a[f],P=h>=0?a[h]:null;if(!w){o.uReady.value=P?1:0,P&&(o.uA.value=P.color,o.uDA.value=P.depth,o.uMix.value=0);return}u=Math.min(1,u+M*2.8),o.uA.value=w.color,o.uDA.value=w.depth,o.uViewA.value.copy(d(w,b,.04*Wo(Math.min(1,p/6)))),P&&u<1?(o.uB.value=P.color,o.uDB.value=P.depth,o.uViewB.value.copy(d(P,b,.04)),o.uMix.value=1-Wo(u)):o.uMix.value=0,o.uReady.value=1,C?v.lerp(C,1-Math.pow(.02,M)):v.multiplyScalar(Math.pow(.05,M)),o.uOff.value.set(-v.x*.016+.008*Math.sin(b*.25),-v.y*.01),o.uDolly.value=.04,o.uPivot.value=.6}return{scene:s,camera:r,ensure:_,show:m,update:T,setAspect(b){c=b},get current(){return f},dragStart(){},dragMove(){},dragEnd(){}}}function _h({base:i,testTex:t,chanTex:e,osdTex:n,mobile:s=!1}){let r=hl(),{scene:o,camera:a}=ul(r),l=r.uniforms;l.uSmoke.value=.085,l.uDust.value=s?.4:.7,l.uHasScreen.value=1;let c=new Re(1024,790,{type:je});c.texture.generateMipmaps=!0,c.texture.minFilter=yn;let f=fh({width:2,height:2,bulge:0,test:t,chan:e,osd:n});f.material.uniforms.uRadius.value=0;let h=new De;h.add(f);let u=new ze(-1,1,1,-1,-1,1);l.uScreen.value=c.texture;let p=null,v=1,_=1,m=1,d=0,T=4/3,b=new Lt,M=dl(i,"hero").then(y=>{p=y,l.uA.value=y.color,l.uDA.value=y.depth;let g=y.meta.screen.map(([G,J])=>[G,1-J]);l.uHom.value.copy(Mg(g));let R=Math.hypot((g[1][0]-g[0][0])*y.aspect,g[1][1]-g[0][1]),U=Math.hypot((g[3][0]-g[0][0])*y.aspect,g[3][1]-g[0][1]);T=R/U,l.uScrAspect.value.set(T,1),f.material.uniforms.uAspect.value.set(T,1),c.setSize(Math.round(790*T),790)});function C(){let y=p.meta.screen.map(([L,B])=>[L,1-B]),g=y.map(L=>L[0]),R=y.map(L=>L[1]),U=(Math.min(...g)+Math.max(...g))/2,G=(Math.min(...R)+Math.max(...R))/2,J=(Math.max(...g)-Math.min(...g))*.86,Y=(Math.max(...R)-Math.min(...R))*.86,E=J,F=J*p.aspect/v;return F>Y&&(F=Y,E=Y*v/p.aspect),new Qt(U,G,E,F)}function w(y,g){_=y,m=g,v=y/g}function P(y,g,{dive:R=0,pointer:U=null}={}){if(l.uTime.value=y,f.material.uniforms.uTime.value=y,d=gh(R),!p){l.uReady.value=0;return}l.uReady.value=1;let G=[p.meta.focus[0],1-p.meta.focus[1]],J=v>1.05,Y=cl(p.aspect,v,G,s?1:1.02,J?null:[G[0],G[1]-.06]),E=C(),F=1-Math.pow(1-d,1.6),L=Math.exp(Math.log(Y.z)*(1-F)+Math.log(E.z)*F),B=Math.exp(Math.log(Y.w)*(1-F)+Math.log(E.w)*F),X=(Y.z-L)/Math.max(1e-5,Y.z-E.z);l.uViewA.value.set(Y.x+(E.x-Y.x)*X,Y.y+(E.y-Y.y)*X,L,B),U?b.lerp(U,1-Math.pow(.02,g)):b.multiplyScalar(Math.pow(.05,g));let W=1-F;l.uOff.value.set((-b.x*.016+.007*Math.sin(y*.2))*W,-b.y*.01*W),l.uDolly.value=.05+.25*F,l.uPivot.value=.62,l.uSmoke.value=.085*W,l.uScrGlow.value=.35*W}function O(y){y.setRenderTarget(c),y.setClearColor(0,1),y.clear(),y.render(h,u),y.setRenderTarget(null)}return{scene:o,camera:a,screen:f,setLayout:w,update:P,prepare:O,ready:()=>M,get glassAspect(){return T}}}var bg="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",xh=`
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
`,Tg=`
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
`,Eg=`
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
`,wg=`
  precision highp float;
  uniform sampler2D tIn; uniform vec2 uTexel;
  varying vec2 vUv;
  void main() {
    vec2 o = uTexel * 0.5;
    gl_FragColor = (texture2D(tIn, vUv + o * vec2(-1.0, 1.0)) + texture2D(tIn, vUv + o * vec2(1.0, 1.0))
                  + texture2D(tIn, vUv + o * vec2(-1.0, -1.0)) + texture2D(tIn, vUv + o * vec2(1.0, -1.0))) * 0.25;
  }
`,Ag=`
  precision highp float;
  uniform sampler2D tIn, tSupport; uniform vec2 uTexel; uniform float uRadius;
  varying vec2 vUv;
  void main() {
    vec2 o = uTexel * 0.5;
    vec4 h = (texture2D(tIn, vUv + o * vec2(-1.0, 1.0)) + texture2D(tIn, vUv + o * vec2(1.0, 1.0))
            + texture2D(tIn, vUv + o * vec2(-1.0, -1.0)) + texture2D(tIn, vUv + o * vec2(1.0, -1.0))) * 0.25;
    gl_FragColor = mix(texture2D(tSupport, vUv), h, uRadius);
  }
`,Rg=`
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
`,Cg=`
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
`,Ws={boot:{noiseVelocity:1,noiseIntensity:1.4,sepiaIntensity:.25,bloomThreshold:.5,bloomIntensity:.55,bloomRadius:.82,bloomSmoothing:.5,contrast:1,brightness:1.05,saturation:.9,motionBlur:.3,lensDistortion:.25,lensDistortionBorders:1,pow:1.1,chromaticAbberationStrength:1.6,vignetteRadius:.52,vignetteSmoothness:.27,vignetteIntensity:.3,uiGain:1,uiCrisp:.85,exposure:1},hero:{noiseVelocity:1,noiseIntensity:1.12,sepiaIntensity:.22,bloomThreshold:.66,bloomIntensity:.85,bloomRadius:.78,bloomSmoothing:.3,contrast:.97,brightness:1.12,saturation:1,motionBlur:.3,lensDistortion:.16,lensDistortionBorders:0,pow:1.45,chromaticAbberationStrength:1.04,vignetteRadius:.5,vignetteSmoothness:.3,vignetteIntensity:.1,uiGain:1,uiCrisp:.85,exposure:1},chan:{noiseVelocity:1,noiseIntensity:.87,sepiaIntensity:.28,bloomThreshold:.7,bloomIntensity:.5,bloomRadius:.8,bloomSmoothing:.2,contrast:.98,brightness:1.08,saturation:.92,motionBlur:.4,lensDistortion:.16,lensDistortionBorders:1,pow:1.36,chromaticAbberationStrength:1,vignetteRadius:0,vignetteSmoothness:.32,vignetteIntensity:0,uiGain:1,uiCrisp:.85,exposure:1},tt:{noiseVelocity:1,noiseIntensity:.9,sepiaIntensity:.06,bloomThreshold:.6,bloomIntensity:.6,bloomRadius:.72,bloomSmoothing:.3,contrast:1,brightness:1,saturation:1,motionBlur:.25,lensDistortion:.16,lensDistortionBorders:1,pow:1.1,chromaticAbberationStrength:1.4,vignetteRadius:.62,vignetteSmoothness:.3,vignetteIntensity:.35,uiGain:1,uiCrisp:.8,exposure:1},work:{noiseVelocity:1,noiseIntensity:1.48,sepiaIntensity:.81,bloomThreshold:.66,bloomIntensity:.75,bloomRadius:.75,bloomSmoothing:.2,contrast:1,brightness:1,saturation:.56,motionBlur:.5,lensDistortion:.16,lensDistortionBorders:1,pow:1.34,chromaticAbberationStrength:2.5,vignetteRadius:.5,vignetteSmoothness:.83,vignetteIntensity:.45,uiGain:1,uiCrisp:.8,exposure:1},paper:{noiseVelocity:.05,noiseIntensity:1,sepiaIntensity:.4,bloomThreshold:.75,bloomIntensity:.08,bloomRadius:.74,bloomSmoothing:.65,contrast:1,brightness:1,saturation:1,motionBlur:0,lensDistortion:.16,lensDistortionBorders:0,pow:1.25,chromaticAbberationStrength:.8,vignetteRadius:.79,vignetteSmoothness:.13,vignetteIntensity:0,uiGain:1,uiCrisp:.9,exposure:1},watch:{noiseVelocity:1,noiseIntensity:1,sepiaIntensity:.26,bloomThreshold:.72,bloomIntensity:1.1,bloomRadius:.86,bloomSmoothing:.29,contrast:.95,brightness:1,saturation:.95,motionBlur:.3,lensDistortion:.16,lensDistortionBorders:0,pow:1.3,chromaticAbberationStrength:1,vignetteRadius:0,vignetteSmoothness:0,vignetteIntensity:0,uiGain:1,uiCrisp:.85,exposure:1},radio:{noiseVelocity:3.5,noiseIntensity:.7,sepiaIntensity:.4,bloomThreshold:.66,bloomIntensity:.55,bloomRadius:.72,bloomSmoothing:.3,contrast:1,brightness:.95,saturation:.85,motionBlur:.05,lensDistortion:.16,lensDistortionBorders:0,pow:1.3,chromaticAbberationStrength:1.15,vignetteRadius:0,vignetteSmoothness:0,vignetteIntensity:0,uiGain:1,uiCrisp:.88,exposure:1}};function qo(i,t,e){let n={};for(let s in i)n[s]=i[s]+((t[s]??i[s])-i[s])*e;return n}function ts(i,t){return new de({vertexShader:bg,fragmentShader:i,uniforms:t,depthTest:!1,depthWrite:!1})}function yh(i,{mobile:t=!1,lite:e=!1}={}){let n=je,s=(B={})=>new Re(2,2,{type:n,depthBuffer:!1,colorSpace:cn,...B}),r=t||e?0:4,o=[s({depthBuffer:!0,samples:r}),s({depthBuffer:!0,samples:r})],a=s(),l=e?4:t?5:7,c=[],f=[];for(let B=0;B<l;B++)c.push(s()),f.push(s());let h=[s(),s()],u=0,p=new ge;p.premultiplyAlpha=!0,p.generateMipmaps=!1,p.minFilter=Se,p.colorSpace=Ne;let v=new Ue(2,2),_=new $t(v);_.frustumCulled=!1;let m=new De;m.add(_);let d=new ze(-1,1,1,-1,0,1),T=new Lt(1,1),b=ts(Tg,{tCur:{value:null},tNext:{value:null},tUi:{value:p},uMode:{value:1},uT:{value:0},uType:{value:0},uCurLens:{value:new H(0,0,1)},uNextLens:{value:new H(0,0,1)},uUiLens:{value:new Lt},uUi:{value:1},uUiGain:{value:1},uVig:{value:new H},uDim:{value:T},uStatic:{value:0},uTime:{value:0}}),M=ts(Eg,{tIn:{value:null},uTexel:{value:new Lt},uThr:{value:.5},uSmooth:{value:.2}}),C=ts(wg,{tIn:{value:null},uTexel:{value:new Lt}}),w=ts(Ag,{tIn:{value:null},tSupport:{value:null},uTexel:{value:new Lt},uRadius:{value:.8}}),P=ts(Rg,{tComp:{value:a.texture},tBloom:{value:null},tPrev:{value:null},uBloom:{value:1},uMotion:{value:0}}),O=ts(Cg,{tIn:{value:null},tUi:{value:p},uPow:{value:1},uSepia:{value:0},uBright:{value:1},uContrast:{value:1},uCA:{value:1},uAspect:{value:1},uUiLens:{value:new Lt},uUi:{value:1},uUiCrisp:{value:.7},uTime:{value:0},uNoise:{value:.03},uNoiseVel:{value:1},uExposure:{value:1},uDim:{value:T}}),y=2,g=2,R=-1;function U(B,X,W){y=Math.max(2,Math.floor(B*W)),g=Math.max(2,Math.floor(X*W)),T.set(y,g);for(let Z of o)Z.setSize(y,g);a.setSize(y,g),h[0].setSize(y,g),h[1].setSize(y,g);let et=y,it=g;for(let Z=0;Z<l;Z++)et=Math.max(1,Math.floor(et/2)),it=Math.max(1,Math.floor(it/2)),c[Z].setSize(et,it),f[Z].setSize(et,it);O.uniforms.uAspect.value=B/X}function G(B,X){_.material=B,i.setRenderTarget(X),i.render(m,d)}function J(B,X,W=[0,0,0,1]){let et=o[B];return i.setRenderTarget(et),i.setClearColor(new Vt(W[0],W[1],W[2]),W[3]),i.clear(!0,!0,!0),X(et),et.texture}let Y=0,E=0;function F(B,X){p.image!==B&&(p.image=B),(B.width!==Y||B.height!==E)&&(Y&&p.dispose(),Y=B.width,E=B.height),p.needsUpdate=!0}function L(B){let X=B.look,W=b.uniforms;W.tCur.value=B.cur,W.tNext.value=B.next||B.cur,W.uMode.value=B.next?2:1,W.uT.value=B.t||0,W.uType.value=B.type||0,W.uCurLens.value.set(B.curLook.lensDistortion*(B.lensFactor??1),B.curLook.lensDistortionBorders*(B.borderFactor??1),B.curLook.saturation);let et=B.nextLook||B.curLook;W.uNextLens.value.set(et.lensDistortion*(B.lensFactor??1),et.lensDistortionBorders*(B.borderFactor??1),et.saturation),W.uUiLens.value.set(X.lensDistortion*(B.lensFactor??1),Math.min(1,X.lensDistortionBorders*(B.borderFactor??1))),W.uUi.value=B.ui??1,W.uUiGain.value=X.uiGain,W.uVig.value.set(X.vignetteRadius,X.vignetteSmoothness,X.vignetteIntensity),W.uStatic.value=B.static||0,W.uTime.value=B.time,G(b,a),M.uniforms.tIn.value=a.texture,M.uniforms.uTexel.value.set(1/y,1/g),M.uniforms.uThr.value=X.bloomThreshold,M.uniforms.uSmooth.value=X.bloomSmoothing,G(M,c[0]);for(let nt=1;nt<l;nt++)C.uniforms.tIn.value=c[nt-1].texture,C.uniforms.uTexel.value.set(1/c[nt-1].width,1/c[nt-1].height),G(C,c[nt]);let it=c[l-1];for(let nt=l-2;nt>=0;nt--)w.uniforms.tIn.value=it.texture,w.uniforms.tSupport.value=c[nt].texture,w.uniforms.uTexel.value.set(1/it.width,1/it.height),w.uniforms.uRadius.value=X.bloomRadius,G(w,f[nt]),it=f[nt];let Z=B.time,at=(Math.sin(5.3*Z*.5)+Math.sin(11.7*Z*.5+2.4*Math.sin(2.1*Z*.5)*.5)+Math.sin(23.9*Z*.5+1.3*Math.cos(7.1*Z*.5)*.5))*.03*X.bloomIntensity,k=R<0?1/60:Math.max(.001,Z-R);R=Z;let q=B.reduced?0:X.motionBlur;q=k>1/120?q*(1/120)/k:Math.pow(q,k/(1/120));let ft=P.uniforms;ft.tBloom.value=it.texture,ft.uBloom.value=1.5*X.bloomIntensity+at,ft.tPrev.value=h[1-u].texture,ft.uMotion.value=B.still?0:Math.min(.85,1.3*q),G(P,h[u]);let st=O.uniforms;st.tIn.value=h[u].texture,st.uPow.value=X.pow,st.uSepia.value=X.sepiaIntensity,st.uBright.value=X.brightness,st.uContrast.value=X.contrast,st.uCA.value=X.chromaticAbberationStrength,st.uUiLens.value.copy(W.uUiLens.value),st.uUi.value=W.uUi.value,st.uUiCrisp.value=X.uiCrisp,st.uTime.value=B.still?.37:Z,st.uNoiseVel.value=X.noiseVelocity,st.uNoise.value=.037*X.noiseIntensity*(B.noiseFactor??1),st.uExposure.value=X.exposure,G(O,null),u=1-u}return{setSize:U,renderScene:J,render:L,setUi:F,uiTex:p,rtScene:o}}var Xs=new H;function en(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Xs.copy(t),Xs[n]=0,Xs.normalize();let c=.5*o/(o+a),f=1-Xs.angleTo(i)/l;return Math.sign(Xs[e])===1?f*c:a/(o+a)+c+c*(1-f)}var qs=class i extends Ke{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new H,c=new H,f=new H(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,v=h.length/6,_=new H,m=.5/o;for(let d=0,T=0;d<h.length;d+=3,T+=2)switch(l.fromArray(h,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[d+0]=f.x*Math.sign(l.x)+c.x*r,h[d+1]=f.y*Math.sign(l.y)+c.y*r,h[d+2]=f.z*Math.sign(l.z)+c.z*r,u[d+0]=c.x,u[d+1]=c.y,u[d+2]=c.z,Math.floor(d/v)){case 0:_.set(1,0,0),p[T+0]=en(_,c,"z","y",r,n),p[T+1]=1-en(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),p[T+0]=1-en(_,c,"z","y",r,n),p[T+1]=1-en(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),p[T+0]=1-en(_,c,"x","z",r,t),p[T+1]=en(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),p[T+0]=1-en(_,c,"x","z",r,t),p[T+1]=1-en(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),p[T+0]=1-en(_,c,"x","y",r,t),p[T+1]=1-en(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),p[T+0]=en(_,c,"x","y",r,t),p[T+1]=1-en(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Mh=`
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
`,Ig=`
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
`,Pg=`
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
`,Lg=`
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
`;function Dg(){let i=document.createElement("canvas");i.width=2048,i.height=154;let t=i.getContext("2d");t.fillStyle="#1b1c1f",t.fillRect(0,0,2048,154),t.fillStyle="#d9cfb6",t.font='italic 600 70px "STIX Two Text", Georgia, serif',t.textBaseline="middle",t.fillText("\u041A\u0438\u043D\u0435\u0441\u043A\u043E\u043F",90,80),t.font='500 26px "IBM Plex Mono", monospace',t.fillStyle="#8f8a7d",t.fillText("\u0428\u0420\u0415\u0414\u0415\u0420 \xB7 \u041F\u041E\u0421\u041B\u0415 \u0420\u0415\u041C\u041E\u041D\u0422\u0410 \xB7 \u0413\u0410\u0420\u0410\u041D\u0422\u0418\u042F 6 \u041C\u0415\u0421.",470,82),t.fillStyle="#2c2d31";for(let n=0;n<26;n++)t.fillRect(1500+n*18,52,8,52);let e=new _n(i);return e.colorSpace=pe,e.anisotropy=4,e}function Sh({contentTexture:i,grungeTexture:t,mobile:e=!1}){let n={tContent:{value:i},tGrunge:{value:t},uDim:{value:new Lt(1,1)},uPaper:{value:new Vt(15655880).convertSRGBToLinear()},uInk:{value:new Vt(1907221).convertSRGBToLinear()},uHead:{value:64}},s=new de({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Ig,uniforms:{...n,uProg:{value:1},uUp:{value:1},uDir:{value:new Lt(.5,1)}},transparent:!0,depthTest:!1,depthWrite:!1}),r=new $t(new Ue(2,2),s);r.frustumCulled=!1;let o=new De;o.add(r);let a=new ze(-1,1,1,-1,0,1),l=e?28:64,c=56,f=[],h=[],u=[],p=[],v=[],_=[],m=X=>{let W=Math.sin(X*91.3458)*47453.5453;return W-Math.floor(W)};for(let X=0;X<l;X++){let W=.16+m(X+7.3)*.1,et=m(X+1)*W;for(let it=0;;it++){let Z=it*W-et,at=Z+W;if(Z>=1)break;if(at<=0)continue;let k=Math.max(0,Z),q=Math.min(1,at),ft=Math.max(1,Math.ceil((q-k)*c)),st=f.length/3;for(let nt=0;nt<=ft;nt++){let At=k+(q-k)*nt/ft;for(let Gt of[-.5,.5])f.push(0,0,0),h.push((X+.5+Gt)/l,At),u.push(X),p.push(Gt),v.push(Z,at)}for(let nt=0;nt<ft;nt++){let At=st+nt*2;_.push(At,At+1,At+2,At+1,At+3,At+2)}}}let d=new Je;d.setAttribute("position",new ue(f,3)),d.setAttribute("uv",new ue(h,2)),d.setAttribute("aStrip",new ue(u,1)),d.setAttribute("aLocal",new ue(p,1)),d.setAttribute("aPiece",new ue(v,2)),d.setIndex(_);let T=new de({vertexShader:Pg,fragmentShader:Lg,uniforms:{...n,uCut:{value:-.2},uTime:{value:0},uAspect:{value:1},uStrips:{value:l}},side:Qe}),b=new $t(d,T);b.frustumCulled=!1;let M=new De;M.add(b);let C=new Me(30,1,.05,20),w=new Rn,P=new hn({color:2763567,metalness:.55,roughness:.38}),O=new hn({color:723725,metalness:.2,roughness:.8}),y=new hn({color:10132900,metalness:1,roughness:.42}),g=new hn({map:Dg(),metalness:.2,roughness:.6}),R=new $t(new qs(1,.075,.13,4,.018),[P,P,P,P,g,P]);R.position.set(0,-.0375,0),w.add(R);let U=new $t(new qs(1,.014,.03,2,.006),y);U.position.set(0,.002,.03),w.add(U);let G=new $t(new Ke(.98,.006,.025),O);G.position.set(0,.001,-.003),w.add(G);let J=[];for(let X of[-.016,.013]){let W=new ws(.01,.01,.97,20,1);W.rotateZ(Math.PI/2);let et=new $t(W,y);et.position.set(0,.006,X),w.add(et),J.push(et)}let Y=new $t(new As(.005,16,8),new ii({color:new Vt(.3,3,.6)}));Y.position.set(.45,-.02,.066),w.add(Y),w.rotation.x=.38,M.add(w);let E=new Ls(16773597,2.4);E.position.set(-1,2,3),M.add(E,new Ds(16777215,.35));let F=1;function L(X,W,et=64){F=X/W,n.uHead.value=et,n.uDim.value.set(X,W),T.uniforms.uAspect.value=F,C.aspect=F;let it=.5/Math.tan(Va.degToRad(C.fov/2));C.position.set(F/2,.5,it),C.lookAt(F/2,.5,0),C.updateProjectionMatrix(),w.scale.setScalar(Math.max(F*1.03,.8)),w.position.x=F/2}function B(X,{mode:W,prog:et=1,cut:it=0,time:Z=0,env:at=null}){if(at&&(M.environment=at),W==="shred"){let k=-.12+it*1.42;T.uniforms.uCut.value=k,T.uniforms.uTime.value=Z,w.position.y=k,w.position.z=.02;for(let q of J)q.rotation.x=-Z*9;X.render(M,C)}else s.uniforms.uProg.value=W==="flat"?1:et,X.render(o,a)}return{setSize:L,render:B}}var Ug=new Set(["SCRIPT","STYLE","NOSCRIPT","TEMPLATE","OPTION","HEAD","BR"]),Ng=new Set(["INPUT","SELECT","TEXTAREA"]);function fl(i){if(!i||i==="transparent")return null;let t=i.match(/rgba?\(([^)]+)\)/);if(!t)return i;let e=t[1].split(/[ ,/]+/).filter(Boolean).map(Number);return e.length>3&&e[3]===0?null:i}function Fg(i){let t=[],e=0,n="";for(let s of i)s==="("&&e++,s===")"&&e--,s===","&&e===0?(t.push(n.trim()),n=""):n+=s;return n.trim()&&t.push(n.trim()),t}function Og(i){if(!i||i==="none")return null;let t=i.match(/^(linear|radial)-gradient\((.*)\)$/s);if(!t)return null;let e=Fg(t[2]),n={kind:t[1],angle:180,stops:[],rx:.5,ry:.5,cx:.5,cy:.5};if(t[1]==="linear"){let r=e[0];if(/deg$/.test(r))n.angle=parseFloat(r),e.shift();else if(/^to /.test(r)){let o={"to top":0,"to right":90,"to bottom":180,"to left":270};n.angle=o[r]??180,e.shift()}}else if(!/^(rgb|#|transparent)/.test(e[0])){let r=e.shift(),o=r.split(" at ")[0].trim().split(/\s+/).map(l=>parseFloat(l)/100);o.length===2&&!isNaN(o[0])&&(n.rx=o[0]/2,n.ry=o[1]/2);let a=r.split(" at ")[1];if(a){let l=a.trim().split(/\s+/).map(c=>parseFloat(c)/100);isNaN(l[0])||(n.cx=l[0],n.cy=l[1]??.5)}}let s=e.length;return e.forEach((r,o)=>{let a=r.match(/^(rgba?\([^)]*\)|#[0-9a-f]+|transparent|[a-z]+)\s*([\d.]+%)?/i);if(!a)return;let l=a[2]?parseFloat(a[2])/100:s>1?o/(s-1):0;n.stops.push([Math.min(1,Math.max(0,l)),a[1]==="transparent"?"rgba(0,0,0,0)":a[1]])}),n.stops.length?n:null}function Ie(i){let t=parseFloat(i);return isNaN(t)?0:t}function bh(i,t,e,n,s,r){let[o,a,l,c]=r.map(f=>Math.min(f,n/2,s/2));i.beginPath(),i.moveTo(t+o,e),i.lineTo(t+n-a,e),i.arcTo(t+n,e,t+n,e+a,a),i.lineTo(t+n,e+s-l),i.arcTo(t+n,e+s,t+n-l,e+s,l),i.lineTo(t+c,e+s),i.arcTo(t,e+s,t,e+s-c,c),i.lineTo(t,e+o),i.arcTo(t,e,t+o,e,o),i.closePath()}function Th({scale:i=1,html:t=document.documentElement}={}){let e=()=>{let E=document.createElement("canvas");return E.width=E.height=2,{c:E,ctx:E.getContext("2d")}},n={screen:e(),paper:e()},s="letterSpacing"in CanvasRenderingContext2D.prototype,r=new Map,o=[],a=!0,l=0,c=-1e9,f=0,h=0,u=i,p=0;function v(E,F,L=u){f=E,h=F,u=L;for(let B in n)n[B].c.width=Math.max(2,Math.round(E*L)),n[B].c.height=Math.max(2,Math.round(F*L));a=!0}function _(E=0){if(E){let F=performance.now()+E;l=l?Math.min(l,F):F}else a=!0}let m=new Set,d=new MutationObserver(E=>{let F=!1;for(let L of E){let B=L.target.nodeType===1?L.target:L.target.parentElement;if(B&&B.closest&&B.closest('[data-gl="off"]'))continue;(L.type==="characterData"||L.type==="childList"&&[...L.addedNodes,...L.removedNodes].every(W=>W.nodeType===3))&&B?m.add(B):F=!0}F&&(m.clear(),_(),_(420))});d.observe(document.body,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["class","hidden","aria-selected","aria-expanded"]}),t.classList&&d.observe(t,{attributes:!0,attributeFilter:["class"]});let T=E=>{E.target.closest&&E.target.closest("a,button,label,input,select")&&(_(),_(260))};document.addEventListener("pointerover",T,!0),document.addEventListener("pointerout",T,!0),document.addEventListener("focusin",()=>{_(),_(260)},!0),document.addEventListener("input",()=>_(),!0),document.fonts&&document.fonts.addEventListener&&document.fonts.addEventListener("loadingdone",()=>_());function b(E){let F=r.get(E);if(!F){let L=n.screen.ctx;L.font=E;let B=L.measureText("Hg\u0439\u0449");F={asc:B.fontBoundingBoxAscent??B.actualBoundingBoxAscent,desc:B.fontBoundingBoxDescent??B.actualBoundingBoxDescent},r.set(E,F)}return F}function M(E){for(let F=E.parentElement;F&&F!==document.body;F=F.parentElement){let L=getComputedStyle(F);if(L.overflow!=="visible"&&L.overflow!=="")return F}return null}function C(E){let F=[];for(let L=E;L&&L.nodeType===1;L=L.parentElement)F.push(getComputedStyle(L));return F}function w(E,F,L){let B=fl(E.backgroundColor),X=Og(E.backgroundImage),W=[Ie(E.borderTopWidth),Ie(E.borderRightWidth),Ie(E.borderBottomWidth),Ie(E.borderLeftWidth)],et=[E.borderTopStyle,E.borderRightStyle,E.borderBottomStyle,E.borderLeftStyle],it=[E.borderTopColor,E.borderRightColor,E.borderBottomColor,E.borderLeftColor].map(fl),Z=W.some((k,q)=>k>0&&et[q]!=="none"&&et[q]!=="hidden"&&it[q]);if(!B&&!X&&!Z)return null;let at=[E.borderTopLeftRadius,E.borderTopRightRadius,E.borderBottomRightRadius,E.borderBottomLeftRadius].map(Ie);return{bg:B,grad:X,bw:W,bstyle:et,bc:it,hasBorder:Z,r:at,pseudo:L}}function P(E,F,L,B,X,W){let et=E.data;if(!/\S/.test(et))return null;let it=`${L.fontStyle} ${L.fontWeight} ${L.fontSize} ${L.fontFamily}`,Z=b(it),at=F.getBoundingClientRect(),k=document.createRange(),q=/\S+/g,ft=[],st=null,nt,At=L.textTransform,Gt=St=>At==="uppercase"?St.toUpperCase():At==="lowercase"?St.toLowerCase():St;for(;nt=q.exec(et);){k.setStart(E,nt.index),k.setEnd(E,nt.index+nt[0].length);let St=k.getClientRects();if(!St.length)continue;if(St.length>1){for(let qt=0;qt<nt[0].length;qt++){k.setStart(E,nt.index+qt),k.setEnd(E,nt.index+qt+1);let xt=k.getClientRects()[0];xt&&(!st||Math.abs(xt.top-st.top)>2?(st={top:xt.top,h:xt.height,x:xt.left,from:nt.index+qt,to:nt.index+qt+1},ft.push(st)):st.to=nt.index+qt+1)}continue}let _t=St[0];_t.width!==0&&(!st||Math.abs(_t.top-st.top)>2?(st={top:_t.top,h:_t.height,x:_t.left,from:nt.index,to:nt.index+nt[0].length},ft.push(st)):st.to=nt.index+nt[0].length)}if(!ft.length)return null;let I=ft.map(St=>({t:Gt(et.slice(St.from,St.to).replace(/[\s ]+/g," ")),dx:St.x-at.left,dy:St.top-at.top+(St.h-(Z.asc+Z.desc))/2+Z.asc})),Zt=L.textDecorationLine&&L.textDecorationLine.includes("underline")?{color:fl(L.textDecorationColor)||L.color,th:Math.max(1,Ie(L.textDecorationThickness)||1),off:Ie(L.textUnderlineOffset)||2}:null,Ot=L.letterSpacing==="normal"?0:Ie(L.letterSpacing);return{type:"text",el:F,layer:B,clip:X,chain:W,font:it,color:L.color,ls:Ot,deco:Zt,frags:I,w0:at.width,h0:at.height,fm:Z}}let O=new WeakMap;function y(E,F){let L=F.color,B=L+E.innerHTML.length,X=O.get(E);if(X&&X.key===B)return X.img;let W=E.getBoundingClientRect(),et=E.cloneNode(!0);et.setAttribute("xmlns","http://www.w3.org/2000/svg"),et.setAttribute("width",Math.max(1,Math.round(W.width*2))),et.setAttribute("height",Math.max(1,Math.round(W.height*2))),et.removeAttribute("class");let it=new XMLSerializer().serializeToString(et).replace(/currentColor/g,L),Z=new Image;return Z.onload=()=>_(),Z.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(it),O.set(E,{key:B,img:Z}),Z}function g(){let E=t.classList.contains("gl-ui");t.classList.add("gl-snap"),t.offsetHeight,E&&t.classList.remove("gl-ui");let F=[],L=[],B=(W,et,it)=>{if(Ug.has(W.tagName)||W.id==="gl"||W.dataset.gl==="off")return;let Z=getComputedStyle(W);if(Z.display==="none")return;let at=W.dataset.layer||et,k=it||Z.position==="fixed",q=k?L:X,ft=Z.visibility!=="hidden",st=null,nt=null,At=()=>{nt||(nt=C(W),st=M(W))};if(ft){let Gt=getComputedStyle(W,"::before");if(W.dataset.glBg!=="off"&&Gt.content&&Gt.content!=="none"&&Gt.position==="absolute"&&Ie(Gt.top)<=0&&Ie(Gt.left)<=0){let Zt=w(Gt,W,!0);Zt&&(At(),q.push({type:"box",el:W,layer:at,clip:st,chain:nt,...Zt,pcs:Gt,inset:[Ie(Gt.top),Ie(Gt.right),Ie(Gt.bottom),Ie(Gt.left)]}))}let I=W.dataset.glBg==="off"?null:w(Z,W,!1);if(I&&(At(),q.push({type:"box",el:W,layer:at,clip:st,chain:nt,...I})),W.tagName==="svg"){At(),q.push({type:"img",el:W,layer:at,clip:st,chain:nt,img:y(W,Z)});return}if(W.tagName==="IMG"||W.tagName==="CANVAS"){At(),q.push({type:"img",el:W,layer:at,clip:st,chain:nt,img:W});return}if(Ng.has(W.tagName)){At();let Zt=getComputedStyle(W,"::placeholder");q.push({type:"field",el:W,layer:at,clip:st,chain:nt,font:`${Z.fontStyle} ${Z.fontWeight} ${Z.fontSize} ${Z.fontFamily}`,color:Z.color,phColor:Zt.color||Z.color,pl:Ie(Z.paddingLeft),pr:Ie(Z.paddingRight),fm:b(`${Z.fontStyle} ${Z.fontWeight} ${Z.fontSize} ${Z.fontFamily}`)});return}}for(let Gt of W.childNodes)if(Gt.nodeType===3&&ft){At();let I=P(Gt,W,Z,at,st,nt);I&&q.push(I)}else Gt.nodeType===1&&B(Gt,at,k)},X=F;B(document.body,"screen",!1);for(let W of L)W.front=!0;F.push(...L),E&&t.classList.add("gl-ui"),t.offsetHeight,t.classList.remove("gl-snap"),d.takeRecords(),o=F,a=!1,c=performance.now(),p++}function R(){for(let E of m){let F=o.findIndex(Z=>Z.type==="text"&&Z.el===E),L=o.filter(Z=>Z.type==="text"&&Z.el===E);if(!L.length&&F<0){m.clear(),_();break}let B=L[0],X=getComputedStyle(E),W=[];for(let Z of E.childNodes){if(Z.nodeType!==3)continue;let at=P(Z,E,X,B.layer,B.clip,B.chain);at&&(at.deco=B.deco,W.push(at))}let et=o.filter(Z=>!(Z.type==="text"&&Z.el===E)),it=Math.min(F,et.length);o=et.slice(0,it).concat(W,et.slice(it))}m.clear()}function U(E,F){let L=1;for(let B of E){let X=F.get(B);if(X===void 0&&(X=+B.opacity,F.set(B,X)),L*=X,L<=.003)return 0}return L}function G(E,F,L,B,X,W){if((F.bg||F.grad)&&(bh(E,L,B,X,W,F.r),F.bg&&(E.fillStyle=F.bg,E.fill()),F.grad)){let et=F.grad,it;if(et.kind==="linear"){let Z=(et.angle-90)*Math.PI/180,at=L+X/2,k=B+W/2,q=Math.abs(X*Math.cos(Z))+Math.abs(W*Math.sin(Z));it=E.createLinearGradient(at-Math.cos(Z)*q/2,k-Math.sin(Z)*q/2,at+Math.cos(Z)*q/2,k+Math.sin(Z)*q/2);for(let[ft,st]of et.stops)it.addColorStop(ft,st);E.fillStyle=it,E.fill()}else{E.save(),E.translate(L+X*et.cx,B+W*et.cy),E.scale(X*et.rx,W*et.ry),it=E.createRadialGradient(0,0,0,0,0,1);for(let[Z,at]of et.stops)it.addColorStop(Z,at);E.fillStyle=it,E.fillRect(-1/et.rx*et.cx-1,-1/et.ry*et.cy-1,1/et.rx+2,1/et.ry+2),E.restore()}}if(F.hasBorder){let et=F.bw,it=et.every(at=>at===et[0])&&F.bc.every(at=>at===F.bc[0])&&F.bstyle.every(at=>at===F.bstyle[0]),Z=(at,k)=>at==="dashed"?[Math.max(4,k*4),Math.max(3,k*3)]:at==="dotted"?[.01,k*2.2]:[];if(it)E.lineWidth=et[0],E.strokeStyle=F.bc[0],E.setLineDash(Z(F.bstyle[0],et[0])),E.lineCap=F.bstyle[0]==="dotted"?"round":"butt",bh(E,L+et[0]/2,B+et[0]/2,X-et[0],W-et[0],F.r.map(at=>Math.max(0,at-et[0]/2))),E.stroke(),E.setLineDash([]),E.lineCap="butt";else{let at=[[L,B+et[0]/2,L+X,B+et[0]/2],[L+X-et[1]/2,B,L+X-et[1]/2,B+W],[L,B+W-et[2]/2,L+X,B+W-et[2]/2],[L+et[3]/2,B,L+et[3]/2,B+W]];for(let k=0;k<4;k++)!(et[k]>0)||!F.bc[k]||F.bstyle[k]==="none"||(E.lineWidth=et[k],E.strokeStyle=F.bc[k],E.setLineDash(Z(F.bstyle[k],et[k])),E.lineCap=F.bstyle[k]==="dotted"?"round":"butt",E.beginPath(),E.moveTo(at[k][0],at[k][1]),E.lineTo(at[k][2],at[k][3]),E.stroke());E.setLineDash([]),E.lineCap="butt"}}}function J(E,F,L,B){E.font=F.font,E.fillStyle=F.color,s&&(E.letterSpacing=F.ls?F.ls+"px":"0px");for(let X of F.frags){let W=L+X.dx,et=B+X.dy;if(!(et<-60||et-F.fm.asc>h+60)){if(!F.ls||s)E.fillText(X.t,W,et);else{let it=W;for(let Z of X.t)E.fillText(Z,it,et),it+=E.measureText(Z).width+F.ls}if(F.deco){let it=E.measureText(X.t).width;E.fillStyle=F.deco.color,E.fillRect(W,et+F.deco.off,it,F.deco.th),E.fillStyle=F.color}}}}function Y(E=!1){let F=performance.now();l&&F>=l&&(a=!0,l=0),a&&F-c>120?g():m.size&&!a&&R();let L=new Map,B=new Map,X=it=>{let Z=B.get(it);return Z||(Z=it.getBoundingClientRect(),B.set(it,Z)),Z};for(let it in n){let{ctx:Z,c:at}=n[it];Z.setTransform(1,0,0,1,0,0),Z.clearRect(0,0,at.width,at.height),Z.setTransform(u,0,0,u,0,0),Z.textBaseline="alphabetic"}let W=!1,et=()=>{W=!0;let it=t.querySelector(".top");if(!it)return;let Z=it.getBoundingClientRect().bottom;if(!(Z<=0))for(let at in n){let{ctx:k}=n[at];k.save(),k.globalAlpha=1,k.globalCompositeOperation="destination-out";let q=k.createLinearGradient(0,0,0,Z+28);q.addColorStop(0,"rgba(0,0,0,1)"),q.addColorStop(Math.max(0,(Z-6)/(Z+28)),"rgba(0,0,0,1)"),q.addColorStop(1,"rgba(0,0,0,0)"),k.fillStyle=q,k.fillRect(0,0,f,Z+28),k.restore()}};for(let it of o){it.front&&!W&&et();let Z=X(it.el);if(Z.bottom<-40||Z.top>h+40||Z.right<-40||Z.left>f+40||it.chain[0].visibility==="hidden")continue;let k=U(it.chain,L);if(it.pcs&&(k*=+it.pcs.opacity),k<=.003)continue;it.type==="text"&&(Math.abs(Z.width-it.w0)>1.5||Math.abs(Z.height-it.h0)>1.5)&&_();let q=n[it.layer].ctx;q.globalAlpha=k;let ft=!1;if(it.clip){let st=X(it.clip);if(Z.bottom<st.top||Z.top>st.bottom)continue;q.save(),ft=!0,q.beginPath(),q.rect(st.left,st.top,st.width,st.height),q.clip()}if(it.type==="box"){let st=it.inset||[0,0,0,0];G(q,it,Z.left+st[3],Z.top+st[0],Z.width-st[1]-st[3],Z.height-st[0]-st[2])}else if(it.type==="text")J(q,it,Z.left,Z.top);else if(it.type==="field"){let st=it.el,nt=st.tagName==="SELECT",At=nt?(st.options[st.selectedIndex]||{}).text||"":st.value,Gt=At||st.placeholder||"";if(Gt){q.font=it.font,s&&(q.letterSpacing="0px"),q.fillStyle=At?it.color:it.phColor;let I=Z.top+Z.height/2+(it.fm.asc-it.fm.desc)/2;q.fillText(st.type==="password"?"\u2022".repeat(At.length):Gt,Z.left+it.pl,I)}if(nt){q.strokeStyle=it.color,q.lineWidth=1.5;let I=Z.right-Math.max(16,it.pr),Zt=Z.top+Z.height/2;q.beginPath(),q.moveTo(I-5,Zt-2.5),q.lineTo(I,Zt+2.5),q.lineTo(I+5,Zt-2.5),q.stroke()}}else if(it.type==="img"){let st=it.img;if(st.complete!==!1&&(st.naturalWidth||st.width))try{q.drawImage(st,Z.left,Z.top,Z.width,Z.height)}catch{}}ft&&q.restore()}W||et();for(let it in n)n[it].ctx.globalAlpha=1;return!0}return{canvas:n.screen.c,paperCanvas:n.paper.c,setSize:v,draw:Y,markDirty:_,get version(){return p},get items(){return o}}}var Ys=[{name:"\u0422\u0415\u041B\u0415\u0424\u041E\u041D\u042B",title:"\u0420\u0430\u0437\u0431\u0438\u043B\u0438 \u044D\u043A\u0440\u0430\u043D, \u0441\u0435\u043B \u0430\u043A\u043A\u0443\u043C\u0443\u043B\u044F\u0442\u043E\u0440, \u043D\u0435&nbsp;\u0437\u0430\u0440\u044F\u0436\u0430\u0435\u0442\u0441\u044F",text:"\u042D\u043A\u0440\u0430\u043D \u043C\u0435\u043D\u044F\u0435\u043C \u043F\u0440\u0438 \u0432\u0430\u0441 \u0437\u0430 40 \u043C\u0438\u043D\u0443\u0442. \u0421\u0442\u0430\u0432\u0438\u043C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B \u0438\u043B\u0438 \u0445\u043E\u0440\u043E\u0448\u0443\u044E \u043A\u043E\u043F\u0438\u044E, \u0440\u0430\u0437\u043D\u0438\u0446\u0443 \u043F\u043E\u043A\u0430\u0436\u0435\u043C \u043D\u0430&nbsp;\u0441\u0442\u043E\u043B\u0435.",price:"\u043E\u0442 1 200 \u20BD",time:"\u043E\u0442 30 \u043C\u0438\u043D\u0443\u0442"},{name:"\u041D\u041E\u0423\u0422\u0411\u0423\u041A\u0418",title:"\u0413\u0440\u0435\u0435\u0442\u0441\u044F, \u0448\u0443\u043C\u0438\u0442, \u043D\u0435&nbsp;\u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F, \u0437\u0430\u043B\u0438\u043B\u0438 \u0447\u0430\u0435\u043C",text:"\u0427\u0438\u0441\u0442\u0438\u043C \u043E\u0442 \u043F\u044B\u043B\u0438 \u0441 \u043D\u043E\u0432\u043E\u0439 \u0442\u0435\u0440\u043C\u043E\u043F\u0430\u0441\u0442\u043E\u0439, \u043C\u0435\u043D\u044F\u0435\u043C \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u0438 \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044B, \u0441\u043F\u0430\u0441\u0430\u0435\u043C \u0437\u0430\u043B\u0438\u0442\u044B\u0435 \u043F\u043B\u0430\u0442\u044B \u0438&nbsp;\u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0430&nbsp;\u043D\u0438\u0445.",price:"\u043E\u0442 1 900 \u20BD",time:"1-2 \u0434\u043D\u044F"},{name:"\u0422\u0415\u041B\u0415\u0412\u0418\u0417\u041E\u0420\u042B",title:"\u041D\u0435\u0442 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438, \u043F\u043E\u043B\u043E\u0441\u044B, \u0449\u0451\u043B\u043A\u0430\u0435\u0442 \u0438&nbsp;\u0433\u0430\u0441\u043D\u0435\u0442",text:"\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0443 \u0438 \u0431\u043B\u043E\u043A\u0438 \u043F\u0438\u0442\u0430\u043D\u0438\u044F \u043C\u0435\u043D\u044F\u0435\u043C \u0437\u0430 \u0434\u0435\u043D\u044C. \u0411\u043E\u043B\u044C\u0448\u0438\u0435 \u044D\u043A\u0440\u0430\u043D\u044B \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u043C \u0441\u0430\u043C\u0438, \u043C\u0430\u0441\u0442\u0435\u0440 \u043F\u0440\u0438\u0435\u0434\u0435\u0442 \u0432&nbsp;\u0434\u0435\u043D\u044C \u0437\u0432\u043E\u043D\u043A\u0430.",price:"\u043E\u0442 1 200 \u20BD",time:"1-3 \u0434\u043D\u044F"},{name:"\u041F\u0420\u0418\u0421\u0422\u0410\u0412\u041A\u0418",title:"\u0420\u0435\u0432\u0451\u0442 \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440, \u0443\u0432\u043E\u0434\u0438\u0442 \u0441\u0442\u0438\u043A, \u043D\u0435\u0442 \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438 \u043F\u043E&nbsp;HDMI",text:"\u0427\u0438\u0441\u0442\u0438\u043C, \u043C\u0435\u043D\u044F\u0435\u043C \u0441\u0442\u0438\u043A\u0438 \u0438 \u0440\u0430\u0437\u044A\u0451\u043C\u044B. \u041F\u043E\u0441\u043B\u0435 \u0440\u0435\u043C\u043E\u043D\u0442\u0430 \u0433\u043E\u043D\u044F\u0435\u043C \u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0443 \u0447\u0430\u0441 \u043F\u043E\u0434 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439, \u0447\u0442\u043E\u0431\u044B \u043D\u0435&nbsp;\u0432\u0435\u0440\u043D\u0443\u043B\u0430\u0441\u044C.",price:"\u043E\u0442 1 300 \u20BD",time:"1 \u0434\u0435\u043D\u044C"},{name:"\u0417\u0412\u0423\u041A",title:"\u0425\u0440\u0438\u043F\u0438\u0442 \u043A\u043E\u043B\u043E\u043D\u043A\u0430, \u043C\u043E\u043B\u0447\u0438\u0442 \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u044C, \u0436\u0443\u0451\u0442 \u043A\u0430\u0441\u0441\u0435\u0442\u0443",text:"\u041A\u043E\u043B\u043E\u043D\u043A\u0438, \u0443\u0441\u0438\u043B\u0438\u0442\u0435\u043B\u0438, \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u0438 \u0438 \u043C\u0430\u0433\u043D\u0438\u0442\u043E\u0444\u043E\u043D\u044B. \u041F\u0430\u0441\u0441\u0438\u043A\u0438 \u0438 \u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u043D\u0430\u0439\u0434\u0451\u043C \u0434\u0430\u0436\u0435 \u0434\u043B\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u0441\u0442\u0430\u0440\u0448\u0435 \u0432\u0430\u0441.",price:"\u043E\u0442 900 \u20BD",time:"2-5 \u0434\u043D\u0435\u0439"},{name:"\u0412\u0421\u0401 \u041E\u0421\u0422\u0410\u041B\u042C\u041D\u041E\u0415",title:"\u0424\u043E\u0442\u043E\u0430\u043F\u043F\u0430\u0440\u0430\u0442, \u043F\u0443\u043B\u044C\u0442, \u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u0447\u0430\u0441\u044B",text:"\u0415\u0441\u043B\u0438 \u043E\u043D\u043E \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u0432 \u0440\u043E\u0437\u0435\u0442\u043A\u0443 \u0438\u043B\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043E\u0442 \u0431\u0430\u0442\u0430\u0440\u0435\u0435\u043A, \u043D\u0435\u0441\u0438\u0442\u0435. \u0427\u0435\u0441\u0442\u043D\u043E \u0441\u043A\u0430\u0436\u0435\u043C, \u0435\u0441\u0442\u044C \u043B\u0438 \u0441\u043C\u044B\u0441\u043B \u0447\u0438\u043D\u0438\u0442\u044C.",price:"\u043E\u0442 800 \u20BD",time:"\u043F\u043E \u043C\u0435\u0441\u0442\u0443"}];function Eh(){let i=document.documentElement,t=g=>document.querySelector(g),e=g=>[...document.querySelectorAll(g)],n=g=>scrollTo({top:g,behavior:"smooth"}),s=[];function r(g){let R=document.getElementById(g);return R?R.getBoundingClientRect().top+scrollY:0}function o(g){if(g==="efir")return n(0);n(r(g))}if(e("[data-go]").forEach(g=>g.addEventListener("click",R=>{R.preventDefault(),o(g.dataset.go)})),matchMedia("(pointer: coarse)").matches){let g=t(".hint span");g&&(g.textContent="\u041B\u0438\u0441\u0442\u0430\u0439\u0442\u0435 \u0432\u043D\u0438\u0437, \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u043C \u043A\u0430\u043D\u0430\u043B")}let a=t("#kanaly"),l=Object.fromEntries(e("[data-osd]").map(g=>[g.dataset.osd,g])),c=-1;function f(g){let R=r("kanaly"),U=a.offsetHeight-innerHeight;return R+U*(g+.5)/Ys.length}e(".remote [data-ch]").forEach(g=>g.addEventListener("click",()=>{let R=g.dataset.ch,U=Math.max(0,c),G=R==="prev"?Math.max(0,U-1):R==="next"?Math.min(Ys.length-1,U+1):+R;if(R==="next"&&U===Ys.length-1)return o("ceny");if(i.classList.contains("no-gl"))return h(Math.max(0,G));n(f(G),{duration:.9})}));function h(g){if(g===c||(c=g,e(".remote__keys button").forEach((G,J)=>G.classList.toggle("is-on",J===g)),g<0))return;let R=Ys[g];l.num.textContent=String(g+1).padStart(2,"0"),l.name.textContent=R.name,l.title.innerHTML=R.title,l.text.innerHTML=R.text,l.price.textContent=R.price,l.time.textContent=R.time;let U=t("#kanaly .stage");U.classList.remove("flip"),U.offsetWidth,U.classList.add("flip"),s.forEach(G=>G(g))}let u=e(".tt__page"),p=e(".tt__fast button"),v=t('[data-tt="pg"]');function _(g){u.forEach(U=>U.classList.toggle("is-on",U.dataset.page===g)),p.forEach(U=>{let G=U.dataset.goPage===g;U.classList.toggle("is-on",G),U.setAttribute("aria-selected",G)}),v.textContent=g;let R=t(".tt__screen");R.classList.remove("roll"),R.offsetWidth,R.classList.add("roll")}p.forEach(g=>g.addEventListener("click",()=>_(g.dataset.goPage)));let m=t('[data-tt="clock"]'),d=()=>{let g=new Date,R=U=>String(U).padStart(2,"0");m.textContent=`${R(g.getDate())}.${R(g.getMonth()+1)} ${R(g.getHours())}:${R(g.getMinutes())}:${R(g.getSeconds())}`};d(),setInterval(d,1e3);let T=t(".tt__screen");"IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&new IntersectionObserver((g,R)=>{g.forEach(U=>{U.isIntersecting&&(T.classList.add("tt-on"),R.disconnect())})},{threshold:0,rootMargin:"0px 0px 15% 0px"}).observe(T);let b=t(".form");b.addEventListener("submit",g=>{if(g.preventDefault(),b.phone.value.replace(/\D/g,"").length<10){b.phone.focus(),b.classList.add("bad");return}b.classList.remove("bad"),b.classList.add("sent")});let M=t("[data-endcard]");if(M){let g=()=>Go(M.getContext("2d"),M.width,M.height,null);document.fonts.ready.then(g),setInterval(g,1e3)}let C=!1,w=null,P=(g,R)=>i.style.setProperty(g,R.toFixed(3)),O=(g,R=0,U=1)=>Math.min(U,Math.max(R,g)),y=(g,R,U)=>O((U-g)/(R-g));return{bindScroll(g){n=g},onChannel(g){s.push(g)},setChannel:h,channelLabel:g=>`\u041A\u0410\u041D\u0410\u041B ${String(g+1).padStart(2,"0")}  ${Ys[g].name}`,heroState(g,R){P("--hero-in",y(.45,1,R)),P("--hero-out",1-y(.06,.2,g))},workshopState(g){P("--ws-in",y(.06,.2,g)*(1-y(.44,.56,g)))},channelsIn(g){g!==w&&(w=g,i.style.setProperty("--ch-in",g?"1":"0"),i.style.setProperty("--ch-pe",g?"auto":"none"))},paperUnderHeader(g){g!==C&&(C=g,i.classList.toggle("ui-paper",g))},watchState(g){P("--wt-in",.35+.65*y(0,.14,g))}}}var pl=i=>document.querySelector(i),fi=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),es=(i,t,e)=>{let n=fi((e-i)/(t-i));return n*n*(3-2*n)},Zs=matchMedia("(prefers-reduced-motion: reduce)").matches,Rh=matchMedia("(pointer: coarse)").matches,nn=Rh||innerWidth<760,Bg=document.documentElement.dataset.base||"assets/",Yo=new URLSearchParams(location.search),sn=Yo.has("still"),wh=Yo.get("boot")==="hold",$s=document.documentElement,Sn=Eh();function zg(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function Ah(i){i&&console.error(i),$s.classList.add("no-gl"),$s.classList.remove("booting","gl-ui")}zg()?Vg().catch(Ah):Ah();function kg(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return/swiftshader|llvmpipe|software|basic render/i.test(String(n))}catch{return!1}}function Hg(){let i=new de({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
      }`,uniforms:{uTime:{value:0},uDim:{value:new Lt(1,1)}},depthTest:!1,depthWrite:!1}),t=new $t(new Ue(2,2),i);t.frustumCulled=!1;let e=new De;return e.add(t),{scene:e,camera:new ze(-1,1,1,-1,0,1),mat:i}}async function Vg(){let i=pl("#gl"),t=new ko({canvas:i,antialias:!1,alpha:!1,powerPreference:"high-performance"});t.outputColorSpace=cn,t.toneMapping=un,t.autoClear=!1;let e=kg(t)&&!Yo.has("full"),n=e?.6:Math.min(devicePixelRatio||1,nn?1.5:1.75),s=e?1:Math.min(devicePixelRatio||1,2);t.setPixelRatio(n);let r=new Ji(t).fromScene(new Vo,.04).texture,o=["ch-phone","ch-laptop","ch-tv","ch-console","ch-audio","ch-camera"],a=Bg;await Promise.race([Promise.all([document.fonts.load('40px "Bedstead"'),document.fonts.load('500 40px "STIX Two Text"'),document.fonts.load('italic 600 40px "STIX Two Text"'),document.fonts.load('500 14px "IBM Plex Mono"')]),new Promise(D=>setTimeout(D,2500))]);let l=uh(1024,820),c=ph(1024,820),f=new Re(1024,820,{type:je,samples:nn||e?0:4});e&&f.setSize(512,410);let h=0,u=_h({base:a,testTex:l.tex,chanTex:f.texture,osdTex:c.tex,mobile:nn||e});await u.ready(),h=.55;let p=vh({base:a,names:o,mobile:nn||e}),v=Xo({base:a,name:"board",mobile:nn||e,smoke:.06,push:.14}),_=Xo({base:a,name:"watch",mobile:nn||e,smoke:.05,dust:1.2,smokeColor:[1,.78,.45],push:.12}),m=Xo({base:a,name:"radio",mobile:nn||e,smoke:.07,push:.1}),d=Hg(),T=Th({scale:s}),b=yh(t,{mobile:nn,lite:e}),M=new ge(T.paperCanvas);M.premultiplyAlpha=!0,M.generateMipmaps=!1,M.minFilter=Se,M.colorSpace=Ne;let C=dh(e?256:512,11),w=Sh({contentTexture:M,grungeTexture:C,mobile:nn||e}),P=["efir","kanaly","ceny","masterskaya","vestnik","shred","garantiya","svyaz"],O=Object.fromEntries(P.map(D=>[D,document.getElementById(D)])),y={},g={};function R(D){let $=0;for(let tt=D;tt;tt=tt.offsetParent)$+=tt.offsetTop;return $}function U(){for(let D of P)y[D]=R(O[D]),g[D]=O[D].offsetHeight}let G=document.createElement("div");G.dataset.gl="off",G.setAttribute("aria-hidden","true"),G.style.cssText="position:fixed;left:0;top:0;width:0;height:100vh;height:100lvh;visibility:hidden;pointer-events:none",document.body.appendChild(G);let J=()=>nn?Math.max(innerHeight,G.offsetHeight||0):innerHeight,Y=0,E=0,F=1,L=!0;function B(D=!1){let $=innerWidth,tt=J();if(D!==!0&&$===Y&&tt===E){U();return}Y=$,E=tt,i.style.height=E+"px",t.setPixelRatio(n),t.setSize(Y,E,!1),b.setSize(Y,E,n),T.setSize(Y,E,s),M.dispose(),M.needsUpdate=!0,L=!0,w.setSize(Y,E,(pl(".top")?pl(".top").offsetHeight:64)+6),d.mat.uniforms.uDim.value.set(Y*n,E*n),u.setLayout(Y,E),p.setAspect(Y/E),v.setAspect(Y/E),_.setAspect(Y/E),m.setAspect(Y/E),F=fi(.2+(Y/E-9/16)/(4/3-9/16),.25,1)*(nn?.5:1),U()}B(),addEventListener("resize",B),new ResizeObserver(()=>U()).observe(document.body),await p.ensure(0),p.show(0),h=.8;let X=window.requestIdleCallback||(D=>setTimeout(D,300));X(()=>{for(let D=1;D<o.length;D++)p.ensure(D)}),setTimeout(()=>X(()=>{v.load(),_.load(),m.load()}),sn?0:4e3);let W=!Zs&&!Rh?new hh({lerp:.09,wheelMultiplier:.9}):null;Sn.bindScroll((D,$)=>W?W.scrollTo(D,{duration:1.4,...$}):scrollTo({top:D,behavior:Zs?"auto":"smooth"}));let et=new Lt;addEventListener("pointermove",D=>{et.set(D.clientX/Y*2-1,-(D.clientY/E*2-1))},{passive:!0});let it=performance.now(),Z=Zs||sn?0:1600,at=!1,k=0,q="test",ft=0,st=0,nt=0,At=-1;Sn.onChannel(()=>{nt=1});let Gt=new Us,I=0,Zt=0,Ot=!0,St=!1,_t=!1,qt={acc:0,n:0},xt=-1,Wt=0,fe=-1,ae={hero:{look:()=>null,draw:(D,$,tt)=>(p.setAspect(u.glassAspect),p.update($,tt,{pointer:null,wide:!1,inScreen:!0}),t.setRenderTarget(f),t.setClearColor(0,1),t.clear(),t.render(p.scene,p.camera),p.setAspect(Y/E),u.prepare(t),{scene:u.scene,camera:u.camera})},chan:{draw:(D,$,tt)=>(p.update($,tt,{pointer:et,wide:Y/E>1.05}),{scene:p.scene,camera:p.camera})},tt:{draw:(D,$)=>(d.mat.uniforms.uTime.value=$,{scene:d.scene,camera:d.camera})},work:{draw:(D,$,tt)=>(v.update($,tt,{p:D.p??0,pointer:et,wide:Y/E>1.05}),{scene:v.scene,camera:v.camera})},paper:{custom:!0,clear:[0,0,0,0]},watch:{draw:(D,$,tt)=>(_.update($,tt,{p:D.p??0,pointer:et,wide:Y/E>1.05}),{scene:_.scene,camera:_.camera})},radio:{draw:(D,$,tt)=>(m.update($,tt,{p:D.p??0,pointer:et,wide:Y/E>1.05}),{scene:m.scene,camera:m.camera})}};function A(D,$,tt,Q){if($.id==="paper")return b.renderScene(D,()=>w.render(t,{mode:$.mode,prog:$.prog,cut:$.cut,time:tt,env:r}),[0,0,0,0]);let lt=ae[$.id].draw($,tt,Q);return b.renderScene(D,()=>t.render(lt.scene,lt.camera),[0,0,0,1])}function x(){let D=Math.min(Gt.getDelta(),.25),$=sn?.5:Math.min(D,.05);I+=sn?.5:D;let tt=I;if(W&&W.raf(performance.now()),!sn&&St&&(qt.acc+=D,qt.n++,qt.n>=90&&(qt.acc/qt.n>1/40&&n>(e?.5:.9)&&(n=Math.max(e?.45:.85,n-.25),B(!0)),qt.acc=0,qt.n=0)),!at){let Ee=(performance.now()-it)/Math.max(1,Z);h=Math.max(h,Math.min(.99,.5+Ee*.5)),wh&&(h=.62),Ee>=1&&Ot&&!wh&&(Ot=!1,h=1,at=!0,k=sn?tt-10:tt,$s.classList.remove("booting"),$s.classList.add("booted"))}tt-Zt>(at?1:.05)&&(l.draw(at?null:h,tt),Zt=tt);let Q=scrollY,yt=Ee=>fi((Q-y[Ee])/Math.max(1,g[Ee]-E)),lt=Ee=>(Q+E-y[Ee])/E,wt=yt("efir"),Ct=at?es(0,2.2,tt-k):0,ct=Zs?0:1-Ct,gt=es(.18,.92,wt),Dt=Math.max(ct,gt),Pt=gt>=ct?1:0;Sn.heroState(wt,Ct),at&&tt-k>2.6&&(q==="test"&&(q="channel",st=tt,nt=Math.max(nt,.9)),!sn&&wt<.05&&tt-st>4.2&&(ft=(ft+1)%o.length,st=tt,nt=1),wt>=.05&&(ft=0));let pt=u.screen.material.uniforms;pt.uMix.value+=((q==="channel"?1:0)-pt.uMix.value)*(sn?1:1-Math.pow(5e-4,D)),pt.uOsdA.value=q==="channel"?fi((tt-st)*2)*(1-es(.4,.8,Dt)):0,nt=sn?0:Math.max(0,nt-D*3.2),pt.uStatic.value=nt*.9,pt.uPower.value=1,pt.uBright.value=1.05+.55*pt.uMix.value;let Ht=y.kanaly-Q;Sn.channelsIn(Ht<=2);let N=yt("kanaly"),ht=Ht<=1&&Q<y.ceny,dt=ht?Math.min(o.length-1,Math.floor(N*o.length*.999)):Q<y.kanaly?ft:o.length-1;ht?dt!==At&&(At!==-1&&(nt=1),At=dt,Sn.setChannel(dt)):Q<y.kanaly&&(At=-1,Sn.setChannel(-1)),p.current!==dt&&p.show(dt),c.lastI!==dt&&(c.draw(dt+1,Sn.channelLabel(dt)),c.lastI=dt),y.ceny-Q<E*2.5&&v.load(),y.vestnik-Q<E*2&&_.load(),y.garantiya-Q<E*2&&m.load();let Mt=Dt>.965&&at;Mt!==_t&&(sn||(nt=Math.max(nt,.8)),_t=Mt);let ot=yt("masterskaya"),rt=es(.42,.84,ot),bt=yt("shred"),Tt,Bt=null,Xt=0,ye=0;Q<y.kanaly+1&&!Mt?Tt={id:"hero"}:lt("ceny")<0?Tt={id:"chan"}:lt("masterskaya")<0?(Tt={id:"chan"},Bt={id:"tt"},Xt=fi(lt("ceny")*1.08),ye=4,Xt>=1&&(Tt=Bt,Bt=null)):ot<=0||rt<=0?(Tt={id:"tt"},Bt={id:"work",p:ot},Xt=fi(lt("masterskaya")*1.08),ye=4,Xt>=1&&(Tt=Bt,Bt=null)):rt<1?(Tt={id:"work",p:ot},Bt={id:"paper",mode:"curl",prog:rt},Xt=rt,ye=2):bt<=0?Tt={id:"paper",mode:"flat"}:bt<1?(Tt={id:"paper",mode:"shred",cut:bt},Bt={id:"watch",p:yt("garantiya")},Xt=bt,ye=3):lt("svyaz")<0?Tt={id:"watch",p:yt("garantiya")}:(Tt={id:"watch",p:yt("garantiya")},Bt={id:"radio",p:yt("svyaz")},Xt=fi(lt("svyaz")*1.08),ye=4,Xt>=1&&(Tt=Bt,Bt=null));let ke=Ee=>{if(Ee.id==="hero"){let Qs=qo(Ws.hero,Ws.boot,ct);return qo(Qs,Ws.chan,es(.72,.96,Dt))}return Ws[Ee.id]},pi=ke(Tt),pn=Bt?ke(Bt):null,ns=Bt?qo(pi,pn,ye>=2?es(.15,.85,Xt):Xt):pi,Js=Tt.id==="paper"&&Tt.mode!=="shred"||Bt&&Bt.id==="paper"&&Xt>.9||Tt.id==="paper"&&Tt.cut<.85;Sn.paperUnderHeader(Js),Sn.workshopState(ot),Sn.watchState(yt("garantiya")),Tt.id==="hero"&&u.update(tt,$,{dive:Dt,pointer:et});let Zn=performance.now();Q!==xt&&(xt=Q,Wt=Zn),(L||Zn-Wt<900||Zn-fe>200||sn)&&(L=!1,T.draw(),b.setUi(T.canvas),(Tt.id==="paper"||Bt&&Bt.id==="paper")&&(M.needsUpdate=!0),fe=Zn);let mi=A(0,Tt,tt,$),Ks=Bt?A(1,Bt,tt,$):null;b.render({cur:mi,next:Ks,t:Xt,type:ye,curLook:pi,nextLook:pn,look:ns,time:tt,still:sn,reduced:Zs,lensFactor:F,borderFactor:nn?.5:1,ui:Yo.has("noui")?0:1,static:Tt.id==="chan"?nt*.6:0,noiseFactor:(devicePixelRatio||1)>=2?1:.7}),St||(St=!0,$s.classList.add("gl-live","gl-ui")),requestAnimationFrame(x)}requestAnimationFrame(x),window.__kineskop={renderer:t,tv:u,ch:p,lenis:W,layer:T,film:b}}
