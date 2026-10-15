(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $r="170",xc=0,yo=1,vc=2,La=1,Da=2,cn=3,An=0,Re=1,$e=2,wn=0,ai=1,Eo=2,wo=3,To=4,Mc=5,On=100,Sc=101,yc=102,Ec=103,wc=104,Tc=200,Ac=201,bc=202,Rc=203,hr=204,ur=205,Cc=206,Pc=207,Lc=208,Dc=209,Ic=210,Uc=211,Nc=212,Fc=213,Oc=214,dr=0,fr=1,pr=2,hi=3,mr=4,gr=5,_r=6,xr=7,Ia=0,Bc=1,zc=2,Tn=0,Vc=1,kc=2,Gc=3,Ua=4,Hc=5,Wc=6,Xc=7,Na=300,ui=301,di=302,vr=303,Mr=304,ws=306,We=1e3,zn=1001,Sr=1002,qe=1003,Yc=1004,Wi=1005,je=1006,Ps=1007,Vn=1008,fn=1009,Fa=1010,Oa=1011,Oi=1012,jr=1013,kn=1014,hn=1015,Vi=1016,Jr=1017,Qr=1018,fi=1020,Ba=35902,za=1021,Va=1022,Ye=1023,ka=1024,Ga=1025,ci=1026,pi=1027,Ha=1028,to=1029,Wa=1030,eo=1031,no=1033,ps=33776,ms=33777,gs=33778,_s=33779,yr=35840,Er=35841,wr=35842,Tr=35843,Ar=36196,br=37492,Rr=37496,Cr=37808,Pr=37809,Lr=37810,Dr=37811,Ir=37812,Ur=37813,Nr=37814,Fr=37815,Or=37816,Br=37817,zr=37818,Vr=37819,kr=37820,Gr=37821,xs=36492,Hr=36494,Wr=36495,Xa=36283,Xr=36284,Yr=36285,qr=36286,qc=3200,Zc=3201,Ya=0,Kc=1,En="",Oe="srgb",xi="srgb-linear",Ts="linear",jt="srgb",Wn=7680,Ao=519,$c=512,jc=513,Jc=514,qa=515,Qc=516,tl=517,el=518,nl=519,bo=35044,Ro="300 es",un=2e3,Ms=2001;class vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Co=1234567;const Ii=Math.PI/180,Bi=180/Math.PI;function Mi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function ve(s,t,e){return Math.max(t,Math.min(e,s))}function io(s,t){return(s%t+t)%t}function il(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function sl(s,t,e){return s!==t?(e-s)/(t-s):0}function Ui(s,t,e){return(1-e)*s+e*t}function rl(s,t,e,n){return Ui(s,t,1-Math.exp(-e*n))}function ol(s,t=1){return t-Math.abs(io(s,t*2)-t)}function al(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function cl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ll(s,t){return s+Math.floor(Math.random()*(t-s+1))}function hl(s,t){return s+Math.random()*(t-s)}function ul(s){return s*(.5-Math.random())}function dl(s){s!==void 0&&(Co=s);let t=Co+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fl(s){return s*Ii}function pl(s){return s*Bi}function ml(s){return(s&s-1)===0&&s!==0}function gl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _l(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xl(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*m,a*c);break;case"YXY":s.set(l*m,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ae={DEG2RAD:Ii,RAD2DEG:Bi,generateUUID:Mi,clamp:ve,euclideanModulo:io,mapLinear:il,inverseLerp:sl,lerp:Ui,damp:rl,pingpong:ol,smoothstep:al,smootherstep:cl,randInt:ll,randFloat:hl,randFloatSpread:ul,seededRandom:dl,degToRad:fl,radToDeg:pl,isPowerOfTwo:ml,ceilPowerOfTwo:gl,floorPowerOfTwo:_l,setQuaternionFromProperEuler:xl,normalize:we,denormalize:ri};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,i,r,o,a,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],v=i[1],M=i[4],x=i[7],C=i[2],A=i[5],R=i[8];return r[0]=o*_+a*v+l*C,r[3]=o*p+a*M+l*A,r[6]=o*d+a*x+l*R,r[1]=c*_+h*v+u*C,r[4]=c*p+h*M+u*A,r[7]=c*d+h*x+u*R,r[2]=f*_+m*v+g*C,r[5]=f*p+m*M+g*A,r[8]=f*d+m*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ls=new Ut;function Za(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vl(){const s=Ss("canvas");return s.style.display="block",s}const Po={};function Li(s){s in Po||(Po[s]=!0,console.warn(s))}function Ml(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Sl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function yl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===jt&&(s.r=dn(s.r),s.g=dn(s.g),s.b=dn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===jt&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===En?Ts:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function li(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Lo=[.64,.33,.3,.6,.15,.06],Do=[.2126,.7152,.0722],Io=[.3127,.329],Uo=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),No=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[xi]:{primaries:Lo,whitePoint:Io,transfer:Ts,toXYZ:Uo,fromXYZ:No,luminanceCoefficients:Do,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:Lo,whitePoint:Io,transfer:jt,toXYZ:Uo,fromXYZ:No,luminanceCoefficients:Do,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let Xn;class El{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=Ss("canvas")),Xn.width=t.width,Xn.height=t.height;const n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=dn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wl=0;class Ka{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=Mi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ds(i[o].image)):r.push(Ds(i[o]))}else r=Ds(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ds(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?El.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tl=0;class Ae extends vi{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=zn,i=zn,r=je,o=Vn,a=Ye,l=fn,c=Ae.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tl++}),this.uuid=Mi(),this.name="",this.source=new Ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Na)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case We:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case Sr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case We:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case Sr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=Na;Ae.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,i=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(m+1)/2,C=(d+1)/2,A=(h+f)/4,R=(u+_)/4,P=(g+p)/4;return M>x&&M>C?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=R/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=P/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=P/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Al extends vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ae(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ka(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class $a extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bl extends Ae{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-a;const d=l*f+c*m+h*g+u*_,v=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const C=Math.sqrt(M),A=Math.atan2(C,d*v);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const x=a*v;if(l=l*p+f*x,c=c*p+m*x,h=h*p+g*x,u=u*p+_*x,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Is.copy(this).projectOnVector(t),this.sub(Is)}reflect(t){return this.sub(Is.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Is=new E,Fo=new ki;class Ee{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ke):ke.fromBufferAttribute(r,o),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),Yi.subVectors(this.max,Ti),Yn.subVectors(t.a,Ti),qn.subVectors(t.b,Ti),Zn.subVectors(t.c,Ti),_n.subVectors(qn,Yn),xn.subVectors(Zn,qn),Cn.subVectors(Yn,Zn);let e=[0,-_n.z,_n.y,0,-xn.z,xn.y,0,-Cn.z,Cn.y,_n.z,0,-_n.x,xn.z,0,-xn.x,Cn.z,0,-Cn.x,-_n.y,_n.x,0,-xn.y,xn.x,0,-Cn.y,Cn.x,0];return!Us(e,Yn,qn,Zn,Yi)||(e=[1,0,0,0,1,0,0,0,1],!Us(e,Yn,qn,Zn,Yi))?!1:(qi.crossVectors(_n,xn),e=[qi.x,qi.y,qi.z],Us(e,Yn,qn,Zn,Yi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new E,new E,new E,new E,new E,new E,new E,new E],ke=new E,Xi=new Ee,Yn=new E,qn=new E,Zn=new E,_n=new E,xn=new E,Cn=new E,Ti=new E,Yi=new E,qi=new E,Pn=new E;function Us(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Pn.fromArray(s,r);const a=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),l=t.dot(Pn),c=e.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Rl=new Ee,Ai=new E,Ns=new E;class mi{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ns.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(Ns)),this.expandByPoint(Ai.copy(t.center).sub(Ns))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new E,Fs=new E,Zi=new E,vn=new E,Os=new E,Ki=new E,Bs=new E;class so{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Fs.copy(t).add(e).multiplyScalar(.5),Zi.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(Fs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zi),a=vn.dot(this.direction),l=-vn.dot(Zi),c=vn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fs).addScaledVector(Zi,f),m}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,i,r){Os.subVectors(e,t),Ki.subVectors(n,t),Bs.crossVectors(Os,Ki);let o=this.direction.dot(Bs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vn.subVectors(this.origin,t);const l=a*this.direction.dot(Ki.crossVectors(vn,Ki));if(l<0)return null;const c=a*this.direction.dot(Os.cross(vn));if(c<0||l+c>o)return null;const h=-a*vn.dot(Bs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,r,o,a,l,c,h,u,f,m,g,_,p){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,m,g,_,p)}set(t,e,n,i,r,o,a,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),o=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cl,t,Pl)}lookAt(t,e,n){const i=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),Mn.crossVectors(n,Le),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),Mn.crossVectors(n,Le)),Mn.normalize(),$i.crossVectors(Le,Mn),i[0]=Mn.x,i[4]=$i.x,i[8]=Le.x,i[1]=Mn.y,i[5]=$i.y,i[9]=Le.y,i[2]=Mn.z,i[6]=$i.z,i[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],v=n[3],M=n[7],x=n[11],C=n[15],A=i[0],R=i[4],P=i[8],T=i[12],y=i[1],L=i[5],O=i[9],B=i[13],X=i[2],Z=i[6],W=i[10],J=i[14],H=i[3],st=i[7],ut=i[11],yt=i[15];return r[0]=o*A+a*y+l*X+c*H,r[4]=o*R+a*L+l*Z+c*st,r[8]=o*P+a*O+l*W+c*ut,r[12]=o*T+a*B+l*J+c*yt,r[1]=h*A+u*y+f*X+m*H,r[5]=h*R+u*L+f*Z+m*st,r[9]=h*P+u*O+f*W+m*ut,r[13]=h*T+u*B+f*J+m*yt,r[2]=g*A+_*y+p*X+d*H,r[6]=g*R+_*L+p*Z+d*st,r[10]=g*P+_*O+p*W+d*ut,r[14]=g*T+_*B+p*J+d*yt,r[3]=v*A+M*y+x*X+C*H,r[7]=v*R+M*L+x*Z+C*st,r[11]=v*P+M*O+x*W+C*ut,r[15]=v*T+M*B+x*J+C*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*m-n*l*m)+_*(+e*l*m-e*c*f+r*o*f-i*o*m+i*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],d=t[15],v=u*p*c-_*f*c+_*l*m-a*p*m-u*l*d+a*f*d,M=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,x=h*_*c-g*u*c+g*a*m-o*_*m-h*a*d+o*u*d,C=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,A=e*v+n*M+i*x+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=v*R,t[1]=(_*f*r-u*p*r-_*i*m+n*p*m+u*i*d-n*f*d)*R,t[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*d+n*l*d)*R,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*m-n*l*m)*R,t[4]=M*R,t[5]=(h*p*r-g*f*r+g*i*m-e*p*m-h*i*d+e*f*d)*R,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*d-e*l*d)*R,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*m+e*l*m)*R,t[8]=x*R,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*d-e*u*d)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*R,t[12]=C*R,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*p+e*u*p)*R,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*R,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,_=o*h,p=o*u,d=a*u,v=l*c,M=l*h,x=l*u,C=n.x,A=n.y,R=n.z;return i[0]=(1-(_+d))*C,i[1]=(m+x)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(m-x)*A,i[5]=(1-(f+d))*A,i[6]=(p+v)*A,i[7]=0,i[8]=(g+M)*R,i[9]=(p-v)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Kn.set(i[0],i[1],i[2]).length();const o=Kn.set(i[4],i[5],i[6]).length(),a=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ge.copy(this);const c=1/r,h=1/o,u=1/a;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,e.setFromRotationMatrix(Ge),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=un){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(a===un)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ms)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=un){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,m=(n+i)*h;let g,_;if(a===un)g=(o+r)*u,_=-2*u;else if(a===Ms)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new E,Ge=new ie,Cl=new E(0,0,0),Pl=new E(1,1,1),Mn=new E,$i=new E,Le=new E,Oo=new ie,Bo=new ki;class Qe{constructor(t=0,e=0,n=0,i=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ll=0;const zo=new E,$n=new ki,rn=new ie,ji=new E,bi=new E,Dl=new E,Il=new ki,Vo=new E(1,0,0),ko=new E(0,1,0),Go=new E(0,0,1),Ho={type:"added"},Ul={type:"removed"},jn={type:"childadded",child:null},zs={type:"childremoved",child:null};class xe extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new E,e=new Qe,n=new ki,i=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ut}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Vo,t)}rotateY(t){return this.rotateOnAxis(ko,t)}rotateZ(t){return this.rotateOnAxis(Go,t)}translateOnAxis(t,e){return zo.copy(t).applyQuaternion(this.quaternion),this.position.add(zo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vo,t)}translateY(t){return this.translateOnAxis(ko,t)}translateZ(t){return this.translateOnAxis(Go,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(bi,ji,this.up):rn.lookAt(ji,bi,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(rn),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ho),jn.child=t,this.dispatchEvent(jn),jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ul),zs.child=t,this.dispatchEvent(zs),zs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ho),jn.child=t,this.dispatchEvent(jn),jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,t,Dl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Il,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new E(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const He=new E,on=new E,Vs=new E,an=new E,Jn=new E,Qn=new E,Wo=new E,ks=new E,Gs=new E,Hs=new E,Ws=new Jt,Xs=new Jt,Ys=new Jt;class Xe{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),He.subVectors(t,e),i.cross(He);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){He.subVectors(i,e),on.subVectors(n,e),Vs.subVectors(t,e);const o=He.dot(He),a=He.dot(on),l=He.dot(Vs),c=on.dot(on),h=on.dot(Vs),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ws.setScalar(0),Xs.setScalar(0),Ys.setScalar(0),Ws.fromBufferAttribute(t,e),Xs.fromBufferAttribute(t,n),Ys.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ws,r.x),o.addScaledVector(Xs,r.y),o.addScaledVector(Ys,r.z),o}static isFrontFacing(t,e,n,i){return He.subVectors(n,e),on.subVectors(t,e),He.cross(on).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return He.subVectors(this.c,this.b),on.subVectors(this.a,this.b),He.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Jn.subVectors(i,n),Qn.subVectors(r,n),ks.subVectors(t,n);const l=Jn.dot(ks),c=Qn.dot(ks);if(l<=0&&c<=0)return e.copy(n);Gs.subVectors(t,i);const h=Jn.dot(Gs),u=Qn.dot(Gs);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Jn,o);Hs.subVectors(t,r);const m=Jn.dot(Hs),g=Qn.dot(Hs);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Qn,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Wo.subVectors(r,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(Wo,a);const d=1/(p+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Jn,o).addScaledVector(Qn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function qs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=io(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qs(o,r,t+1/3),this.g=qs(o,r,t),this.b=qs(o,r,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=ja[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Xt.fromWorkingColorSpace(ye.copy(this),t),Math.round(ve(ye.r*255,0,255))*65536+Math.round(ve(ye.g*255,0,255))*256+Math.round(ve(ye.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,r=ye.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=Oe){Xt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Sn),this.setHSL(Sn.h+t,Sn.s+e,Sn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(Ji);const n=Ui(Sn.h,Ji.h,e),i=Ui(Sn.s,Ji.s,e),r=Ui(Sn.l,Ji.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new zt;zt.NAMES=ja;let Nl=0;class Si extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=Mi(),this.name="",this.blending=ai,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hr,this.blendDst=ur,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hr&&(n.blendSrc=this.blendSrc),this.blendDst!==ur&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ne extends Si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new E,Qi=new St;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bo,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bo&&(t.usage=this.usage),t}}class Ja extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qa extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fl=0;const Fe=new ie,Zs=new xe,ti=new E,De=new Ee,Ri=new Ee,_e=new E;class Ce extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Za(t)?Qa:Ja)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Zs.lookAt(t),Zs.updateMatrix(),this.applyMatrix4(Zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ee);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ri.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(De.min,Ri.min),De.expandByPoint(_e),_e.addVectors(De.max,Ri.max),De.expandByPoint(_e)):(De.expandByPoint(Ri.min),De.expandByPoint(Ri.max))}De.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_e.fromBufferAttribute(a,c),l&&(ti.fromBufferAttribute(t,c),_e.add(ti)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new E,l[P]=new E;const c=new E,h=new E,u=new E,f=new St,m=new St,g=new St,_=new E,p=new E;function d(P,T,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(L),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(_),a[T].add(_),a[y].add(_),l[P].add(p),l[T].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,T=v.length;P<T;++P){const y=v[P],L=y.start,O=y.count;for(let B=L,X=L+O;B<X;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new E,x=new E,C=new E,A=new E;function R(P){C.fromBufferAttribute(i,P),A.copy(C);const T=a[P];M.copy(T),M.sub(C.multiplyScalar(C.dot(T))).normalize(),x.crossVectors(A,T);const L=x.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,T=v.length;P<T;++P){const y=v[P],L=y.start,O=y.count;for(let B=L,X=L+O;B<X;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,u=new E;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Je(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xo=new ie,Ln=new so,ts=new mi,Yo=new E,es=new E,ns=new E,is=new E,Ks=new E,ss=new E,qo=new E,rs=new E;class k extends xe{constructor(t=new Ce,e=new ne){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ss.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ks.fromBufferAttribute(u,t),o?ss.addScaledVector(Ks,h):ss.addScaledVector(Ks.sub(e),h))}e.add(ss)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(ts.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(ts,Yo)===null||Ln.origin.distanceToSquared(Yo)>(t.far-t.near)**2))&&(Xo.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Xo),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,C=M;x<C;x+=3){const A=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);i=os(this,d,t,n,c,h,u,A,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const v=a.getX(p),M=a.getX(p+1),x=a.getX(p+2);i=os(this,o,t,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],v=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=v,C=M;x<C;x+=3){const A=x,R=x+1,P=x+2;i=os(this,d,t,n,c,h,u,A,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const v=p,M=p+1,x=p+2;i=os(this,o,t,n,c,h,u,v,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Ol(s,t,e,n,i,r,o,a){let l;if(t.side===Re?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===An,a),l===null)return null;rs.copy(a),rs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(rs);return c<e.near||c>e.far?null:{distance:c,point:rs.clone(),object:s}}function os(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,es),s.getVertexPosition(l,ns),s.getVertexPosition(c,is);const h=Ol(s,t,e,n,es,ns,is,qo);if(h){const u=new E;Xe.getBarycoord(qo,es,ns,is,u),i&&(h.uv=Xe.getInterpolatedAttribute(i,a,l,c,u,new St)),r&&(h.uv1=Xe.getInterpolatedAttribute(r,a,l,c,u,new St)),o&&(h.normal=Xe.getInterpolatedAttribute(o,a,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new E,materialIndex:0};Xe.getNormal(es,ns,is,f.normal),h.face=f,h.barycoord=u}return h}class at extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function g(_,p,d,v,M,x,C,A,R,P,T){const y=x/R,L=C/P,O=x/2,B=C/2,X=A/2,Z=R+1,W=P+1;let J=0,H=0;const st=new E;for(let ut=0;ut<W;ut++){const yt=ut*L-B;for(let Ot=0;Ot<Z;Ot++){const Qt=Ot*y-O;st[_]=Qt*v,st[p]=yt*M,st[d]=X,c.push(st.x,st.y,st.z),st[_]=0,st[p]=0,st[d]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ot/R),u.push(1-ut/P),J+=1}}for(let ut=0;ut<P;ut++)for(let yt=0;yt<R;yt++){const Ot=f+yt+Z*ut,Qt=f+yt+Z*(ut+1),q=f+(yt+1)+Z*(ut+1),et=f+(yt+1)+Z*ut;l.push(Ot,Qt,et),l.push(Qt,q,et),H+=6}a.addGroup(m,H,T),m+=H,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new at(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Te(s){const t={};for(let e=0;e<s.length;e++){const n=gi(s[e]);for(const i in n)t[i]=n[i]}return t}function Bl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function tc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const zl={clone:gi,merge:Te};var Vl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vl,this.fragmentShader=kl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=Bl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ec extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new E,Zo=new St,Ko=new St;class Ie extends ec{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,Zo,Ko),e.subVectors(Ko,Zo)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ii*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ei=-90,ni=1;class Gl extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ie(ei,ni,t,e);i.layers=this.layers,this.add(i);const r=new Ie(ei,ni,t,e);r.layers=this.layers,this.add(r);const o=new Ie(ei,ni,t,e);o.layers=this.layers,this.add(o);const a=new Ie(ei,ni,t,e);a.layers=this.layers,this.add(a);const l=new Ie(ei,ni,t,e);l.layers=this.layers,this.add(l);const c=new Ie(ei,ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nc extends Ae{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ui,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hl extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new at(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:wn});r.uniforms.tEquirect.value=e;const o=new k(i,r),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=je),new Gl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const $s=new E,Wl=new E,Xl=new Ut;class Nn{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$s.subVectors(n,e).cross(Wl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($s),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xl.getNormalMatrix(t),i=this.coplanarPoint($s).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dn=new mi,as=new E;class oo{constructor(t=new Nn,e=new Nn,n=new Nn,i=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],v=i[13],M=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,p-m,x-d).normalize(),n[1].setComponents(l+r,f+c,p+m,x+d).normalize(),n[2].setComponents(l+o,f+h,p+g,x+v).normalize(),n[3].setComponents(l-o,f-h,p-g,x-v).normalize(),n[4].setComponents(l-a,f-u,p-_,x-M).normalize(),e===un)n[5].setComponents(l+a,f+u,p+_,x+M).normalize();else if(e===Ms)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dn)}intersectsSprite(t){return Dn.center.set(0,0,0),Dn.radius=.7071067811865476,Dn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(as.x=i.normal.x>0?t.max.x:t.min.x,as.y=i.normal.y>0?t.max.y:t.min.y,as.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ic(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Yl(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<u.length;m++){const g=u[f],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,g=u.length;m<g;m++){const _=u[m];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class ue extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const v=d*f-o;for(let M=0;M<c;M++){const x=M*u-r;g.push(x,-v,0),_.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const M=v+c*d,x=v+c*(d+1),C=v+1+c*(d+1),A=v+1+c*d;m.push(M,x,A),m.push(x,C,A)}this.setIndex(m),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.width,t.height,t.widthSegments,t.heightSegments)}}var ql=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zl=`#ifdef USE_ALPHAHASH
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
#endif`,Kl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$l=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ql=`#ifdef USE_AOMAP
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
#endif`,th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eh=`#ifdef USE_BATCHING
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
#endif`,nh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oh=`#ifdef USE_IRIDESCENCE
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
#endif`,ah=`#ifdef USE_BUMPMAP
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
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gh=`#define PI 3.141592653589793
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
} // validated`,_h=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xh=`vec3 transformedNormal = objectNormal;
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
#endif`,vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eh="gl_FragColor = linearToOutputTexel( gl_FragColor );",wh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Th=`#ifdef USE_ENVMAP
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
#endif`,Ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uh=`#ifdef USE_GRADIENTMAP
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
}`,Nh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bh=`uniform bool receiveShadow;
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
#endif`,zh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wh=`PhysicalMaterial material;
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
#endif`,Xh=`struct PhysicalMaterial {
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
}`,Yh=`
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
#endif`,qh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$h=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nu=`#if defined( USE_POINTS_UV )
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
#endif`,iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,su=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ou=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,au=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cu=`#ifdef USE_MORPHTARGETS
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
#endif`,lu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mu=`#ifdef USE_NORMALMAP
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
#endif`,gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_u=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Su=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ru=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lu=`float getShadowMask() {
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
}`,Du=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iu=`#ifdef USE_SKINNING
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
#endif`,Uu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nu=`#ifdef USE_SKINNING
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
#endif`,Fu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vu=`#ifdef USE_TRANSMISSION
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
#endif`,ku=`#ifdef USE_TRANSMISSION
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
#endif`,Gu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qu=`uniform sampler2D t2D;
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
}`,Zu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ku=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$u=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ju=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ju=`#include <common>
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
}`,Qu=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,td=`#define DISTANCE
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
}`,ed=`#define DISTANCE
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
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`uniform float scale;
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
}`,rd=`uniform vec3 diffuse;
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
}`,od=`#include <common>
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
}`,ad=`uniform vec3 diffuse;
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
}`,cd=`#define LAMBERT
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
}`,ld=`#define LAMBERT
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
}`,hd=`#define MATCAP
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
}`,ud=`#define MATCAP
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
}`,dd=`#define NORMAL
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
}`,fd=`#define NORMAL
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
}`,pd=`#define PHONG
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
}`,md=`#define PHONG
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
}`,gd=`#define STANDARD
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
}`,_d=`#define STANDARD
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
}`,xd=`#define TOON
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
}`,vd=`#define TOON
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
}`,Md=`uniform float size;
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
}`,Sd=`uniform vec3 diffuse;
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
}`,yd=`#include <common>
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
}`,Ed=`uniform vec3 color;
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
}`,wd=`uniform float rotation;
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
}`,Td=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:ql,alphahash_pars_fragment:Zl,alphamap_fragment:Kl,alphamap_pars_fragment:$l,alphatest_fragment:jl,alphatest_pars_fragment:Jl,aomap_fragment:Ql,aomap_pars_fragment:th,batching_pars_vertex:eh,batching_vertex:nh,begin_vertex:ih,beginnormal_vertex:sh,bsdfs:rh,iridescence_fragment:oh,bumpmap_pars_fragment:ah,clipping_planes_fragment:ch,clipping_planes_pars_fragment:lh,clipping_planes_pars_vertex:hh,clipping_planes_vertex:uh,color_fragment:dh,color_pars_fragment:fh,color_pars_vertex:ph,color_vertex:mh,common:gh,cube_uv_reflection_fragment:_h,defaultnormal_vertex:xh,displacementmap_pars_vertex:vh,displacementmap_vertex:Mh,emissivemap_fragment:Sh,emissivemap_pars_fragment:yh,colorspace_fragment:Eh,colorspace_pars_fragment:wh,envmap_fragment:Th,envmap_common_pars_fragment:Ah,envmap_pars_fragment:bh,envmap_pars_vertex:Rh,envmap_physical_pars_fragment:zh,envmap_vertex:Ch,fog_vertex:Ph,fog_pars_vertex:Lh,fog_fragment:Dh,fog_pars_fragment:Ih,gradientmap_pars_fragment:Uh,lightmap_pars_fragment:Nh,lights_lambert_fragment:Fh,lights_lambert_pars_fragment:Oh,lights_pars_begin:Bh,lights_toon_fragment:Vh,lights_toon_pars_fragment:kh,lights_phong_fragment:Gh,lights_phong_pars_fragment:Hh,lights_physical_fragment:Wh,lights_physical_pars_fragment:Xh,lights_fragment_begin:Yh,lights_fragment_maps:qh,lights_fragment_end:Zh,logdepthbuf_fragment:Kh,logdepthbuf_pars_fragment:$h,logdepthbuf_pars_vertex:jh,logdepthbuf_vertex:Jh,map_fragment:Qh,map_pars_fragment:tu,map_particle_fragment:eu,map_particle_pars_fragment:nu,metalnessmap_fragment:iu,metalnessmap_pars_fragment:su,morphinstance_vertex:ru,morphcolor_vertex:ou,morphnormal_vertex:au,morphtarget_pars_vertex:cu,morphtarget_vertex:lu,normal_fragment_begin:hu,normal_fragment_maps:uu,normal_pars_fragment:du,normal_pars_vertex:fu,normal_vertex:pu,normalmap_pars_fragment:mu,clearcoat_normal_fragment_begin:gu,clearcoat_normal_fragment_maps:_u,clearcoat_pars_fragment:xu,iridescence_pars_fragment:vu,opaque_fragment:Mu,packing:Su,premultiplied_alpha_fragment:yu,project_vertex:Eu,dithering_fragment:wu,dithering_pars_fragment:Tu,roughnessmap_fragment:Au,roughnessmap_pars_fragment:bu,shadowmap_pars_fragment:Ru,shadowmap_pars_vertex:Cu,shadowmap_vertex:Pu,shadowmask_pars_fragment:Lu,skinbase_vertex:Du,skinning_pars_vertex:Iu,skinning_vertex:Uu,skinnormal_vertex:Nu,specularmap_fragment:Fu,specularmap_pars_fragment:Ou,tonemapping_fragment:Bu,tonemapping_pars_fragment:zu,transmission_fragment:Vu,transmission_pars_fragment:ku,uv_pars_fragment:Gu,uv_pars_vertex:Hu,uv_vertex:Wu,worldpos_vertex:Xu,background_vert:Yu,background_frag:qu,backgroundCube_vert:Zu,backgroundCube_frag:Ku,cube_vert:$u,cube_frag:ju,depth_vert:Ju,depth_frag:Qu,distanceRGBA_vert:td,distanceRGBA_frag:ed,equirect_vert:nd,equirect_frag:id,linedashed_vert:sd,linedashed_frag:rd,meshbasic_vert:od,meshbasic_frag:ad,meshlambert_vert:cd,meshlambert_frag:ld,meshmatcap_vert:hd,meshmatcap_frag:ud,meshnormal_vert:dd,meshnormal_frag:fd,meshphong_vert:pd,meshphong_frag:md,meshphysical_vert:gd,meshphysical_frag:_d,meshtoon_vert:xd,meshtoon_frag:vd,points_vert:Md,points_frag:Sd,shadow_vert:yd,shadow_frag:Ed,sprite_vert:wd,sprite_frag:Td},nt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ke={basic:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Te([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Te([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Te([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Te([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Te([nt.points,nt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Te([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Te([nt.common,nt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Te([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Te([nt.sprite,nt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Te([nt.common,nt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Te([nt.lights,nt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ke.physical={uniforms:Te([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const cs={r:0,b:0,g:0},In=new Qe,Ad=new ie;function bd(s,t,e,n,i,r,o){const a=new zt(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const x=g(v);x===null?d(a,l):x&&x.isColor&&(d(x,1),M=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(v,M){const x=g(M);x&&(x.isCubeTexture||x.mapping===ws)?(h===void 0&&(h=new k(new at(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:gi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),In.copy(M.backgroundRotation),In.x*=-1,In.y*=-1,In.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ad.makeRotationFromEuler(In)),h.material.toneMapped=Xt.getTransfer(x.colorSpace)!==jt,(u!==x||f!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,m=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new k(new ue(2,2),new bn({name:"BackgroundMaterial",uniforms:gi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(x.colorSpace)!==jt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,m=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,M){v.getRGB(cs,tc(s)),n.buffers.color.setClear(cs.r,cs.g,cs.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:p}}function Rd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,L,O,B,X){let Z=!1;const W=u(B,O,L);r!==W&&(r=W,c(r.object)),Z=m(y,B,O,X),Z&&g(y,B,O,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(y,L,O,B),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,L,O){const B=O.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let Z=X[L.id];Z===void 0&&(Z={},X[L.id]=Z);let W=Z[B];return W===void 0&&(W=f(l()),Z[B]=W),W}function f(y){const L=[],O=[],B=[];for(let X=0;X<e;X++)L[X]=0,O[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,L,O,B){const X=r.attributes,Z=L.attributes;let W=0;const J=O.getAttributes();for(const H in J)if(J[H].location>=0){const ut=X[H];let yt=Z[H];if(yt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),ut===void 0||ut.attribute!==yt||yt&&ut.data!==yt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(y,L,O,B){const X={},Z=L.attributes;let W=0;const J=O.getAttributes();for(const H in J)if(J[H].location>=0){let ut=Z[H];ut===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));const yt={};yt.attribute=ut,ut&&ut.data&&(yt.data=ut.data),X[H]=yt,W++}r.attributes=X,r.attributesNum=W,r.index=B}function _(){const y=r.newAttributes;for(let L=0,O=y.length;L<O;L++)y[L]=0}function p(y){d(y,0)}function d(y,L){const O=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;O[y]=1,B[y]===0&&(s.enableVertexAttribArray(y),B[y]=1),X[y]!==L&&(s.vertexAttribDivisor(y,L),X[y]=L)}function v(){const y=r.newAttributes,L=r.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==y[O]&&(s.disableVertexAttribArray(O),L[O]=0)}function M(y,L,O,B,X,Z,W){W===!0?s.vertexAttribIPointer(y,L,O,X,Z):s.vertexAttribPointer(y,L,O,B,X,Z)}function x(y,L,O,B){_();const X=B.attributes,Z=O.getAttributes(),W=L.defaultAttributeValues;for(const J in Z){const H=Z[J];if(H.location>=0){let st=X[J];if(st===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(st=y.instanceColor)),st!==void 0){const ut=st.normalized,yt=st.itemSize,Ot=t.get(st);if(Ot===void 0)continue;const Qt=Ot.buffer,q=Ot.type,et=Ot.bytesPerElement,xt=q===s.INT||q===s.UNSIGNED_INT||st.gpuType===jr;if(st.isInterleavedBufferAttribute){const rt=st.data,bt=rt.stride,Lt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)d(H.location+Bt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)p(H.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let Bt=0;Bt<H.locationSize;Bt++)M(H.location+Bt,yt/H.locationSize,q,ut,bt*et,(Lt+yt/H.locationSize*Bt)*et,xt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)d(H.location+rt,st.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Qt);for(let rt=0;rt<H.locationSize;rt++)M(H.location+rt,yt/H.locationSize,q,ut,yt*et,yt/H.locationSize*rt*et,xt)}}else if(W!==void 0){const ut=W[J];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(H.location,ut);break;case 3:s.vertexAttrib3fv(H.location,ut);break;case 4:s.vertexAttrib4fv(H.location,ut);break;default:s.vertexAttrib1fv(H.location,ut)}}}}v()}function C(){P();for(const y in n){const L=n[y];for(const O in L){const B=L[O];for(const X in B)h(B[X].object),delete B[X];delete L[O]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const O in L){const B=L[O];for(const X in B)h(B[X].object),delete B[X];delete L[O]}delete n[y.id]}function R(y){for(const L in n){const O=n[L];if(O[y.id]===void 0)continue;const B=O[y.id];for(const X in B)h(B[X].object),delete B[X];delete O[y.id]}}function P(){T(),o=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Cd(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];e.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Pd(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Ye&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==fn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==hn&&!P)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function Ld(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Nn,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,M=v*4;let x=d.clippingState||null;l.value=x,x=h(g,f,M,m);for(let C=0;C!==M;++C)x[C]=e[C];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,x=m;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Dd(s){let t=new WeakMap;function e(o,a){return a===vr?o.mapping=ui:a===Mr&&(o.mapping=di),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vr||a===Mr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class sc extends ec{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const oi=4,$o=[.125,.215,.35,.446,.526,.582],Bn=20,js=new sc,jo=new zt;let Js=null,Qs=0,tr=0,er=!1;const Fn=(1+Math.sqrt(5))/2,ii=1/Fn,Jo=[new E(-Fn,ii,0),new E(Fn,ii,0),new E(-ii,0,Fn),new E(ii,0,Fn),new E(0,Fn,-ii),new E(0,Fn,ii),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),tr=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Js,Qs,tr),this._renderer.xr.enabled=er,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ui||t.mapping===di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Js=this._renderer.getRenderTarget(),Qs=this._renderer.getActiveCubeFace(),tr=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Vi,format:Ye,colorSpace:xi,depthBuffer:!1},i=ta(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ta(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Id(r)),this._blurMaterial=Ud(r,t,e)}return i}_compileMaterial(t){const e=new k(this._lodPlanes[0],t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,n,i){const a=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(jo),h.toneMapping=Tn,h.autoClear=!1;const m=new ne({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new k(new at,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(jo),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;ls(i,v*M,d>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ui||t.mapping===di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=na()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ea());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new k(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jo[(i-r-1)%Jo.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new k(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Bn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Bn;p>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bn}`);const d=[];let v=0;for(let R=0;R<Bn;++R){const P=R/_,T=Math.exp(-P*P/2);d.push(T),R===0?v+=T:R<p&&(v+=2*T)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const x=this._sizeLods[i],C=3*x*(i>M-oi?i-M+oi:0),A=4*(this._cubeSize-x);ls(e,C,A,3*x,2*x),l.setRenderTarget(e),l.render(u,js)}}function Id(s){const t=[],e=[],n=[];let i=s;const r=s-oi+1+$o.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-oi?l=$o[o-s+oi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,v=new Float32Array(_*g*m),M=new Float32Array(p*g*m),x=new Float32Array(d*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,P=A>2?0:-1,T=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(T,_*g*A),M.set(f,p*g*A);const y=[A,A,A,A,A,A];x.set(y,d*g*A)}const C=new Ce;C.setAttribute("position",new Je(v,_)),C.setAttribute("uv",new Je(M,p)),C.setAttribute("faceIndex",new Je(x,d)),t.push(C),i>oi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ta(s,t,e){const n=new Gn(s,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ud(s,t,e){const n=new Float32Array(Bn),i=new E(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ao(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ea(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function na(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ao(){return`

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
	`}function Nd(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===vr||l===Mr,h=l===ui||l===di;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Qo(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Qo(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Fd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Od(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let M=0,x=v.length;M<x;M+=3){const C=v[M+0],A=v[M+1],R=v[M+2];f.push(C,A,A,R,R,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const C=M+0,A=M+1,R=M+2;f.push(C,A,A,R,R,C)}}else return;const p=new(Za(f)?Qa:Ja)(f,1);p.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Bd(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){s.drawElements(n,m,r,f*o),e.update(m,n,1)}function c(f,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,f*o,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];e.update(p,n,1)}function u(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=m[v]*_[v];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Vd(s,t,e){const n=new WeakMap,i=new Jt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*A*4*u),P=new $a(R,C,A,u);P.type=hn,P.needsUpdate=!0;const T=x*4;for(let L=0;L<u;L++){const O=d[L],B=v[L],X=M[L],Z=C*A*4*L;for(let W=0;W<O.count;W++){const J=W*T;g===!0&&(i.fromBufferAttribute(O,W),R[Z+J+0]=i.x,R[Z+J+1]=i.y,R[Z+J+2]=i.z,R[Z+J+3]=0),_===!0&&(i.fromBufferAttribute(B,W),R[Z+J+4]=i.x,R[Z+J+5]=i.y,R[Z+J+6]=i.z,R[Z+J+7]=0),p===!0&&(i.fromBufferAttribute(X,W),R[Z+J+8]=i.x,R[Z+J+9]=i.y,R[Z+J+10]=i.z,R[Z+J+11]=X.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new St(C,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function kd(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class rc extends Ae{constructor(t,e,n,i,r,o,a,l,c,h=ci){if(h!==ci&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ci&&(n=kn),n===void 0&&h===pi&&(n=fi),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:qe,this.minFilter=l!==void 0?l:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const oc=new Ae,ia=new rc(1,1),ac=new $a,cc=new bl,lc=new nc,sa=[],ra=[],oa=new Float32Array(16),aa=new Float32Array(9),ca=new Float32Array(4);function yi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=sa[i];if(r===void 0&&(r=new Float32Array(i),sa[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function As(s,t){let e=ra[t];e===void 0&&(e=new Int32Array(t),ra[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Gd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function Wd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function Xd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function Yd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;ca.set(n),s.uniformMatrix2fv(this.addr,!1,ca),ge(e,n)}}function qd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;aa.set(n),s.uniformMatrix3fv(this.addr,!1,aa),ge(e,n)}}function Zd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;oa.set(n),s.uniformMatrix4fv(this.addr,!1,oa),ge(e,n)}}function Kd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function $d(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function jd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function Jd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function Qd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function sf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ia.compareFunction=qa,r=ia):r=oc,e.setTexture2D(t||r,i)}function rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cc,i)}function of(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lc,i)}function af(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ac,i)}function cf(s){switch(s){case 5126:return Gd;case 35664:return Hd;case 35665:return Wd;case 35666:return Xd;case 35674:return Yd;case 35675:return qd;case 35676:return Zd;case 5124:case 35670:return Kd;case 35667:case 35671:return $d;case 35668:case 35672:return jd;case 35669:case 35673:return Jd;case 5125:return Qd;case 36294:return tf;case 36295:return ef;case 36296:return nf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return rf;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return af}}function lf(s,t){s.uniform1fv(this.addr,t)}function hf(s,t){const e=yi(t,this.size,2);s.uniform2fv(this.addr,e)}function uf(s,t){const e=yi(t,this.size,3);s.uniform3fv(this.addr,e)}function df(s,t){const e=yi(t,this.size,4);s.uniform4fv(this.addr,e)}function ff(s,t){const e=yi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function pf(s,t){const e=yi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function mf(s,t){const e=yi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function gf(s,t){s.uniform1iv(this.addr,t)}function _f(s,t){s.uniform2iv(this.addr,t)}function xf(s,t){s.uniform3iv(this.addr,t)}function vf(s,t){s.uniform4iv(this.addr,t)}function Mf(s,t){s.uniform1uiv(this.addr,t)}function Sf(s,t){s.uniform2uiv(this.addr,t)}function yf(s,t){s.uniform3uiv(this.addr,t)}function Ef(s,t){s.uniform4uiv(this.addr,t)}function wf(s,t,e){const n=this.cache,i=t.length,r=As(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||oc,r[o])}function Tf(s,t,e){const n=this.cache,i=t.length,r=As(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||cc,r[o])}function Af(s,t,e){const n=this.cache,i=t.length,r=As(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lc,r[o])}function bf(s,t,e){const n=this.cache,i=t.length,r=As(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ac,r[o])}function Rf(s){switch(s){case 5126:return lf;case 35664:return hf;case 35665:return uf;case 35666:return df;case 35674:return ff;case 35675:return pf;case 35676:return mf;case 5124:case 35670:return gf;case 35667:case 35671:return _f;case 35668:case 35672:return xf;case 35669:case 35673:return vf;case 5125:return Mf;case 36294:return Sf;case 36295:return yf;case 36296:return Ef;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return Tf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return bf}}class Cf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cf(e.type)}}class Pf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rf(e.type)}}class Lf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const nr=/(\w+)(\])?(\[|\.)?/g;function la(s,t){s.seq.push(t),s.map[t.id]=t}function Df(s,t,e){const n=s.name,i=n.length;for(nr.lastIndex=0;;){const r=nr.exec(n),o=nr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){la(e,c===void 0?new Cf(a,s,t):new Pf(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Lf(a),la(e,u)),e=u}}}class vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Df(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ha(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const If=37297;let Uf=0;function Nf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ua=new Ut;function Ff(s){Xt._getMatrix(ua,Xt.workingColorSpace,s);const t=`mat3( ${ua.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case Ts:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function da(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Nf(s.getShaderSource(t),o)}else return i}function Of(s,t){const e=Ff(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bf(s,t){let e;switch(t){case Vc:e="Linear";break;case kc:e="Reinhard";break;case Gc:e="Cineon";break;case Ua:e="ACESFilmic";break;case Wc:e="AgX";break;case Xc:e="Neutral";break;case Hc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hs=new E;function zf(){Xt.getLuminanceCoefficients(hs);const s=hs.x.toFixed(4),t=hs.y.toFixed(4),e=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function kf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Di(s){return s!==""}function fa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(s){return s.replace(Hf,Xf)}const Wf=new Map;function Xf(s,t){let e=Ft[t];if(e===void 0){const n=Wf.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zr(e)}const Yf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ma(s){return s.replace(Yf,qf)}function qf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ga(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===La?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Da?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Kf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ui:case di:t="ENVMAP_TYPE_CUBE";break;case ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $f(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case di:t="ENVMAP_MODE_REFRACTION";break}return t}function jf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ia:t="ENVMAP_BLENDING_MULTIPLY";break;case Bc:t="ENVMAP_BLENDING_MIX";break;case zc:t="ENVMAP_BLENDING_ADD";break}return t}function Jf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Qf(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Zf(e),c=Kf(e),h=$f(e),u=jf(e),f=Jf(e),m=Vf(e),g=kf(r),_=i.createProgram();let p,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),d.length>0&&(d+=`
`)):(p=[ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),d=[ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Bf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Of("linearToOutputTexel",e.outputColorSpace),zf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Di).join(`
`)),o=Zr(o),o=fa(o,e),o=pa(o,e),a=Zr(a),a=fa(a,e),a=pa(a,e),o=ma(o),a=ma(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=v+p+o,x=v+d+a,C=ha(i,i.VERTEX_SHADER,M),A=ha(i,i.FRAGMENT_SHADER,x);i.attachShader(_,C),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(L){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(A).trim();let Z=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,A);else{const J=da(i,C,"vertex"),H=da(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+J+`
`+H)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||X==="")&&(W=!1);W&&(L.diagnostics={runnable:Z,programLog:O,vertexShader:{log:B,prefix:p},fragmentShader:{log:X,prefix:d}})}i.deleteShader(C),i.deleteShader(A),P=new vs(i,_),T=Gf(i,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,If)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uf++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let tp=0;class ep{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new np(t),e.set(t,n)),n}}class np{constructor(t){this.id=tp++,this.code=t,this.usedTimes=0}}function ip(s,t,e,n,i,r,o){const a=new ro,l=new ep,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,y,L,O,B){const X=O.fog,Z=B.geometry,W=T.isMeshStandardMaterial?O.environment:null,J=(T.isMeshStandardMaterial?e:t).get(T.envMap||W),H=J&&J.mapping===ws?J.image.height:null,st=g[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const ut=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=ut!==void 0?ut.length:0;let Ot=0;Z.morphAttributes.position!==void 0&&(Ot=1),Z.morphAttributes.normal!==void 0&&(Ot=2),Z.morphAttributes.color!==void 0&&(Ot=3);let Qt,q,et,xt;if(st){const $t=Ke[st];Qt=$t.vertexShader,q=$t.fragmentShader}else Qt=T.vertexShader,q=T.fragmentShader,l.update(T),et=l.getVertexShaderID(T),xt=l.getFragmentShaderID(T);const rt=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Lt=B.isInstancedMesh===!0,Bt=B.isBatchedMesh===!0,ce=!!T.map,Ht=!!T.matcap,de=!!J,N=!!T.aoMap,Ue=!!T.lightMap,Vt=!!T.bumpMap,kt=!!T.normalMap,wt=!!T.displacementMap,se=!!T.emissiveMap,Et=!!T.metalnessMap,b=!!T.roughnessMap,S=T.anisotropy>0,F=T.clearcoat>0,K=T.dispersion>0,j=T.iridescence>0,Y=T.sheen>0,vt=T.transmission>0,ot=S&&!!T.anisotropyMap,dt=F&&!!T.clearcoatMap,Wt=F&&!!T.clearcoatNormalMap,Q=F&&!!T.clearcoatRoughnessMap,ft=j&&!!T.iridescenceMap,Tt=j&&!!T.iridescenceThicknessMap,Rt=Y&&!!T.sheenColorMap,pt=Y&&!!T.sheenRoughnessMap,Gt=!!T.specularMap,Nt=!!T.specularColorMap,te=!!T.specularIntensityMap,D=vt&&!!T.transmissionMap,it=vt&&!!T.thicknessMap,G=!!T.gradientMap,$=!!T.alphaMap,ht=T.alphaTest>0,ct=!!T.alphaHash,Dt=!!T.extensions;let he=Tn;T.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(he=s.toneMapping);const Me={shaderID:st,shaderType:T.type,shaderName:T.name,vertexShader:Qt,fragmentShader:q,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:xt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Bt,batchingColor:Bt&&B._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&B.instanceColor!==null,instancingMorph:Lt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:xi,alphaToCoverage:!!T.alphaToCoverage,map:ce,matcap:Ht,envMap:de,envMapMode:de&&J.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:Ue,bumpMap:Vt,normalMap:kt,displacementMap:f&&wt,emissiveMap:se,normalMapObjectSpace:kt&&T.normalMapType===Kc,normalMapTangentSpace:kt&&T.normalMapType===Ya,metalnessMap:Et,roughnessMap:b,anisotropy:S,anisotropyMap:ot,clearcoat:F,clearcoatMap:dt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:j,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:Y,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:te,transmission:vt,transmissionMap:D,thicknessMap:it,gradientMap:G,opaque:T.transparent===!1&&T.blending===ai&&T.alphaToCoverage===!1,alphaMap:$,alphaTest:ht,alphaHash:ct,combine:T.combine,mapUv:ce&&_(T.map.channel),aoMapUv:N&&_(T.aoMap.channel),lightMapUv:Ue&&_(T.lightMap.channel),bumpMapUv:Vt&&_(T.bumpMap.channel),normalMapUv:kt&&_(T.normalMap.channel),displacementMapUv:wt&&_(T.displacementMap.channel),emissiveMapUv:se&&_(T.emissiveMap.channel),metalnessMapUv:Et&&_(T.metalnessMap.channel),roughnessMapUv:b&&_(T.roughnessMap.channel),anisotropyMapUv:ot&&_(T.anisotropyMap.channel),clearcoatMapUv:dt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(T.sheenRoughnessMap.channel),specularMapUv:Gt&&_(T.specularMap.channel),specularColorMapUv:Nt&&_(T.specularColorMap.channel),specularIntensityMapUv:te&&_(T.specularIntensityMap.channel),transmissionMapUv:D&&_(T.transmissionMap.channel),thicknessMapUv:it&&_(T.thicknessMap.channel),alphaMapUv:$&&_(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(kt||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(ce||$),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:ce&&T.map.isVideoTexture===!0&&Xt.getTransfer(T.map.colorSpace)===jt,decodeVideoTextureEmissive:se&&T.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(T.emissiveMap.colorSpace)===jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===$e,flipSided:T.side===Re,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Dt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&T.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function d(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)y.push(L),y.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(v(y,T),M(y,T),y.push(s.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function v(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function M(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const y=g[T.type];let L;if(y){const O=Ke[y];L=zl.clone(O.uniforms)}else L=T.uniforms;return L}function C(T,y){let L;for(let O=0,B=h.length;O<B;O++){const X=h[O];if(X.cacheKey===y){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Qf(s,y,T,r),h.push(L)),L}function A(T){if(--T.usedTimes===0){const y=h.indexOf(T);h[y]=h[h.length-1],h.pop(),T.destroy()}}function R(T){l.remove(T)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function sp(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function rp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _a(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function xa(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,m,g,_,p){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),t++,d}function a(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(u,f,m,g,_,p){const d=o(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||rp),n.length>1&&n.sort(f||_a),i.length>1&&i.sort(f||_a)}function h(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function op(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new xa,s.set(n,[o])):i>=r.length?(o=new xa,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ap(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new zt};break;case"SpotLight":e={position:new E,direction:new E,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function cp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let lp=0;function hp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function up(s){const t=new ap,e=cp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new ie,o=new ie;function a(c){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,v=0,M=0,x=0,C=0,A=0,R=0;c.sort(hp);for(let T=0,y=c.length;T<y;T++){const L=c[T],O=L.color,B=L.intensity,X=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*B,u+=O.g*B,f+=O.b*B;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],B);R++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,H=e.get(L);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=L.shadow.matrix,v++}n.directional[m]=W,m++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(B),W.distance=X,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const J=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,J.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,L.castShadow){const H=e.get(L);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=Z,x++}_++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(O).multiplyScalar(B),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=W,p++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const J=L.shadow,H=e.get(L);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(B),W.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[d]=W,d++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==d||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=d,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=R,n.version=lp++)}function l(c,h){let u=0,f=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const M=c[d];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),u++}else if(M.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function va(s){const t=new up(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function dp(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new va(s),t.set(i,[a])):r>=o.length?(a=new va(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class fp extends Si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pp extends Si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gp=`uniform sampler2D shadow_pass;
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
}`;function _p(s,t,e){let n=new oo;const i=new St,r=new St,o=new Jt,a=new fp({depthPacking:Zc}),l=new pp,c={},h=e.maxTextureSize,u={[An]:Re,[Re]:An,[$e]:$e},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:mp,fragmentShader:gp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new k(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let d=this.type;this.render=function(A,R,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const T=s.getRenderTarget(),y=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),O=s.state;O.setBlending(wn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=d!==cn&&this.type===cn,X=d===cn&&this.type!==cn;for(let Z=0,W=A.length;Z<W;Z++){const J=A[Z],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const st=H.getFrameExtents();if(i.multiply(st),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||B===!0||X===!0){const yt=this.type!==cn?{minFilter:qe,magFilter:qe}:{};H.map!==null&&H.map.dispose(),H.map=new Gn(i.x,i.y,yt),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ut=H.getViewportCount();for(let yt=0;yt<ut;yt++){const Ot=H.getViewport(yt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),O.viewport(o),H.updateMatrices(J,yt),n=H.getFrustum(),x(R,P,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===cn&&v(H,P),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(T,y,L)};function v(A,R){const P=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,P,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,P,m,_,null)}function M(A,R,P,T){let y=null;const L=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=y.uuid,B=R.uuid;let X=c[O];X===void 0&&(X={},c[O]=X);let Z=X[B];Z===void 0&&(Z=y.clone(),X[B]=Z,R.addEventListener("dispose",C)),y=Z}if(y.visible=R.visible,y.wireframe=R.wireframe,T===cn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=P}return y}function x(A,R,P,T,y){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===cn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=t.update(A),X=A.material;if(Array.isArray(X)){const Z=B.groups;for(let W=0,J=Z.length;W<J;W++){const H=Z[W],st=X[H.materialIndex];if(st&&st.visible){const ut=M(A,st,T,y);A.onBeforeShadow(s,A,R,P,B,ut,H),s.renderBufferDirect(P,null,B,ut,A,H),A.onAfterShadow(s,A,R,P,B,ut,H)}}}else if(X.visible){const Z=M(A,X,T,y);A.onBeforeShadow(s,A,R,P,B,Z,null),s.renderBufferDirect(P,null,B,Z,A,null),A.onAfterShadow(s,A,R,P,B,Z,null)}}const O=A.children;for(let B=0,X=O.length;B<X;B++)x(O[B],R,P,T,y)}function C(A){A.target.removeEventListener("dispose",C);for(const P in c){const T=c[P],y=A.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const xp={[dr]:fr,[pr]:_r,[mr]:xr,[hi]:gr,[fr]:dr,[_r]:pr,[xr]:mr,[gr]:hi};function vp(s,t){function e(){let D=!1;const it=new Jt;let G=null;const $=new Jt(0,0,0,0);return{setMask:function(ht){G!==ht&&!D&&(s.colorMask(ht,ht,ht,ht),G=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ct,Dt,he,Me){Me===!0&&(ht*=he,ct*=he,Dt*=he),it.set(ht,ct,Dt,he),$.equals(it)===!1&&(s.clearColor(ht,ct,Dt,he),$.copy(it))},reset:function(){D=!1,G=null,$.set(-1,0,0,0)}}}function n(){let D=!1,it=!1,G=null,$=null,ht=null;return{setReversed:function(ct){if(it!==ct){const Dt=t.get("EXT_clip_control");it?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const he=ht;ht=null,this.setClear(he)}it=ct},getReversed:function(){return it},setTest:function(ct){ct?rt(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(ct){G!==ct&&!D&&(s.depthMask(ct),G=ct)},setFunc:function(ct){if(it&&(ct=xp[ct]),$!==ct){switch(ct){case dr:s.depthFunc(s.NEVER);break;case fr:s.depthFunc(s.ALWAYS);break;case pr:s.depthFunc(s.LESS);break;case hi:s.depthFunc(s.LEQUAL);break;case mr:s.depthFunc(s.EQUAL);break;case gr:s.depthFunc(s.GEQUAL);break;case _r:s.depthFunc(s.GREATER);break;case xr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ht!==ct&&(it&&(ct=1-ct),s.clearDepth(ct),ht=ct)},reset:function(){D=!1,G=null,$=null,ht=null,it=!1}}}function i(){let D=!1,it=null,G=null,$=null,ht=null,ct=null,Dt=null,he=null,Me=null;return{setTest:function($t){D||($t?rt(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function($t){it!==$t&&!D&&(s.stencilMask($t),it=$t)},setFunc:function($t,ze,tn){(G!==$t||$!==ze||ht!==tn)&&(s.stencilFunc($t,ze,tn),G=$t,$=ze,ht=tn)},setOp:function($t,ze,tn){(ct!==$t||Dt!==ze||he!==tn)&&(s.stencilOp($t,ze,tn),ct=$t,Dt=ze,he=tn)},setLocked:function($t){D=$t},setClear:function($t){Me!==$t&&(s.clearStencil($t),Me=$t)},reset:function(){D=!1,it=null,G=null,$=null,ht=null,ct=null,Dt=null,he=null,Me=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,v=null,M=null,x=null,C=null,A=null,R=new zt(0,0,0),P=0,T=!1,y=null,L=null,O=null,B=null,X=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=J>=2);let st=null,ut={};const yt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),Qt=new Jt().fromArray(yt),q=new Jt().fromArray(Ot);function et(D,it,G,$){const ht=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<G;Dt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(it,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(it+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ct}const xt={};xt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(hi),Vt(!1),kt(yo),rt(s.CULL_FACE),N(wn);function rt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function bt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Lt(D,it){return u[D]!==it?(s.bindFramebuffer(D,it),u[D]=it,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=it),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=it),!0):!1}function Bt(D,it){let G=m,$=!1;if(D){G=f.get(it),G===void 0&&(G=[],f.set(it,G));const ht=D.textures;if(G.length!==ht.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,Dt=ht.length;ct<Dt;ct++)G[ct]=s.COLOR_ATTACHMENT0+ct;G.length=ht.length,$=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,$=!0);$&&s.drawBuffers(G)}function ce(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Ht={[On]:s.FUNC_ADD,[Sc]:s.FUNC_SUBTRACT,[yc]:s.FUNC_REVERSE_SUBTRACT};Ht[Ec]=s.MIN,Ht[wc]=s.MAX;const de={[Tc]:s.ZERO,[Ac]:s.ONE,[bc]:s.SRC_COLOR,[hr]:s.SRC_ALPHA,[Ic]:s.SRC_ALPHA_SATURATE,[Lc]:s.DST_COLOR,[Cc]:s.DST_ALPHA,[Rc]:s.ONE_MINUS_SRC_COLOR,[ur]:s.ONE_MINUS_SRC_ALPHA,[Dc]:s.ONE_MINUS_DST_COLOR,[Pc]:s.ONE_MINUS_DST_ALPHA,[Uc]:s.CONSTANT_COLOR,[Nc]:s.ONE_MINUS_CONSTANT_COLOR,[Fc]:s.CONSTANT_ALPHA,[Oc]:s.ONE_MINUS_CONSTANT_ALPHA};function N(D,it,G,$,ht,ct,Dt,he,Me,$t){if(D===wn){_===!0&&(bt(s.BLEND),_=!1);return}if(_===!1&&(rt(s.BLEND),_=!0),D!==Mc){if(D!==p||$t!==T){if((d!==On||x!==On)&&(s.blendEquation(s.FUNC_ADD),d=On,x=On),$t)switch(D){case ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eo:s.blendFunc(s.ONE,s.ONE);break;case wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case To:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Eo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case To:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,M=null,C=null,A=null,R.set(0,0,0),P=0,p=D,T=$t}return}ht=ht||it,ct=ct||G,Dt=Dt||$,(it!==d||ht!==x)&&(s.blendEquationSeparate(Ht[it],Ht[ht]),d=it,x=ht),(G!==v||$!==M||ct!==C||Dt!==A)&&(s.blendFuncSeparate(de[G],de[$],de[ct],de[Dt]),v=G,M=$,C=ct,A=Dt),(he.equals(R)===!1||Me!==P)&&(s.blendColor(he.r,he.g,he.b,Me),R.copy(he),P=Me),p=D,T=!1}function Ue(D,it){D.side===$e?bt(s.CULL_FACE):rt(s.CULL_FACE);let G=D.side===Re;it&&(G=!G),Vt(G),D.blending===ai&&D.transparent===!1?N(wn):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;a.setTest($),$&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function kt(D){D!==xc?(rt(s.CULL_FACE),D!==L&&(D===yo?s.cullFace(s.BACK):D===vc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),L=D}function wt(D){D!==O&&(W&&s.lineWidth(D),O=D)}function se(D,it,G){D?(rt(s.POLYGON_OFFSET_FILL),(B!==it||X!==G)&&(s.polygonOffset(it,G),B=it,X=G)):bt(s.POLYGON_OFFSET_FILL)}function Et(D){D?rt(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function b(D){D===void 0&&(D=s.TEXTURE0+Z-1),st!==D&&(s.activeTexture(D),st=D)}function S(D,it,G){G===void 0&&(st===null?G=s.TEXTURE0+Z-1:G=st);let $=ut[G];$===void 0&&($={type:void 0,texture:void 0},ut[G]=$),($.type!==D||$.texture!==it)&&(st!==G&&(s.activeTexture(G),st=G),s.bindTexture(D,it||xt[D]),$.type=D,$.texture=it)}function F(){const D=ut[st];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){Qt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function pt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Gt(D,it){let G=c.get(it);G===void 0&&(G=new WeakMap,c.set(it,G));let $=G.get(D);$===void 0&&($=s.getUniformBlockIndex(it,D.name),G.set(D,$))}function Nt(D,it){const $=c.get(it).get(D);l.get(it)!==$&&(s.uniformBlockBinding(it,$,D.__bindingPointIndex),l.set(it,$))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ut={},u={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,v=null,M=null,x=null,C=null,A=null,R=new zt(0,0,0),P=0,T=!1,y=null,L=null,O=null,B=null,X=null,Qt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:bt,bindFramebuffer:Lt,drawBuffers:Bt,useProgram:ce,setBlending:N,setMaterial:Ue,setFlipSided:Vt,setCullFace:kt,setLineWidth:wt,setPolygonOffset:se,setScissorTest:Et,activeTexture:b,bindTexture:S,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:ft,texImage3D:Tt,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Wt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Rt,viewport:pt,reset:te}}function Ma(s,t,e,n){const i=Mp(n);switch(e){case za:return s*t;case ka:return s*t;case Ga:return s*t*2;case Ha:return s*t/i.components*i.byteLength;case to:return s*t/i.components*i.byteLength;case Wa:return s*t*2/i.components*i.byteLength;case eo:return s*t*2/i.components*i.byteLength;case Va:return s*t*3/i.components*i.byteLength;case Ye:return s*t*4/i.components*i.byteLength;case no:return s*t*4/i.components*i.byteLength;case ps:case ms:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case gs:case _s:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Er:case Tr:return Math.max(s,16)*Math.max(t,8)/4;case yr:case wr:return Math.max(s,8)*Math.max(t,8)/2;case Ar:case br:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Lr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ur:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Nr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Or:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Br:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Gr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case xs:case Hr:case Wr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xa:case Xr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Yr:case qr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mp(s){switch(s){case fn:case Fa:return{byteLength:1,components:1};case Oi:case Oa:case Vi:return{byteLength:2,components:1};case Jr:case Qr:return{byteLength:2,components:4};case kn:case jr:case hn:return{byteLength:4,components:1};case Ba:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Sp(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return m?new OffscreenCanvas(b,S):Ss("canvas")}function _(b,S,F){let K=1;const j=Et(b);if((j.width>F||j.height>F)&&(K=F/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(K*j.width),vt=Math.floor(K*j.height);u===void 0&&(u=g(Y,vt));const ot=S?g(Y,vt):u;return ot.width=Y,ot.height=vt,ot.getContext("2d").drawImage(b,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+vt+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function p(b){return b.generateMipmaps}function d(b){s.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(b,S,F,K,j=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=S;if(S===s.RED&&(F===s.FLOAT&&(Y=s.R32F),F===s.HALF_FLOAT&&(Y=s.R16F),F===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.R8UI),F===s.UNSIGNED_SHORT&&(Y=s.R16UI),F===s.UNSIGNED_INT&&(Y=s.R32UI),F===s.BYTE&&(Y=s.R8I),F===s.SHORT&&(Y=s.R16I),F===s.INT&&(Y=s.R32I)),S===s.RG&&(F===s.FLOAT&&(Y=s.RG32F),F===s.HALF_FLOAT&&(Y=s.RG16F),F===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RG8UI),F===s.UNSIGNED_SHORT&&(Y=s.RG16UI),F===s.UNSIGNED_INT&&(Y=s.RG32UI),F===s.BYTE&&(Y=s.RG8I),F===s.SHORT&&(Y=s.RG16I),F===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),F===s.UNSIGNED_INT&&(Y=s.RGB32UI),F===s.BYTE&&(Y=s.RGB8I),F===s.SHORT&&(Y=s.RGB16I),F===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),F===s.UNSIGNED_INT&&(Y=s.RGBA32UI),F===s.BYTE&&(Y=s.RGBA8I),F===s.SHORT&&(Y=s.RGBA16I),F===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),S===s.RGBA){const vt=j?Ts:Xt.getTransfer(K);F===s.FLOAT&&(Y=s.RGBA32F),F===s.HALF_FLOAT&&(Y=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Y=vt===jt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(b,S){let F;return b?S===null||S===kn||S===fi?F=s.DEPTH24_STENCIL8:S===hn?F=s.DEPTH32F_STENCIL8:S===Oi&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===kn||S===fi?F=s.DEPTH_COMPONENT24:S===hn?F=s.DEPTH_COMPONENT32F:S===Oi&&(F=s.DEPTH_COMPONENT16),F}function C(b,S){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==qe&&b.minFilter!==je?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){const S=b.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&h.delete(S)}function R(b){const S=b.target;S.removeEventListener("dispose",R),y(S)}function P(b){const S=n.get(b);if(S.__webglInit===void 0)return;const F=b.source,K=f.get(F);if(K){const j=K[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(b),Object.keys(K).length===0&&f.delete(F)}n.remove(b)}function T(b){const S=n.get(b);s.deleteTexture(S.__webglTexture);const F=b.source,K=f.get(F);delete K[S.__cacheKey],o.memory.textures--}function y(b){const S=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let j=0;j<S.__webglFramebuffer[K].length;j++)s.deleteFramebuffer(S.__webglFramebuffer[K][j]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=b.textures;for(let K=0,j=F.length;K<j;K++){const Y=n.get(F[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(b)}let L=0;function O(){L=0}function B(){const b=L;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),L+=1,b}function X(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function Z(b,S){const F=n.get(b);if(b.isVideoTexture&&wt(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,S);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function W(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function J(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){q(F,b,S);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function H(b,S){const F=n.get(b);if(b.version>0&&F.__version!==b.version){et(F,b,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}const st={[We]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[Sr]:s.MIRRORED_REPEAT},ut={[qe]:s.NEAREST,[Yc]:s.NEAREST_MIPMAP_NEAREST,[Wi]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[Ps]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},yt={[$c]:s.NEVER,[nl]:s.ALWAYS,[jc]:s.LESS,[qa]:s.LEQUAL,[Jc]:s.EQUAL,[el]:s.GEQUAL,[Qc]:s.GREATER,[tl]:s.NOTEQUAL};function Ot(b,S){if(S.type===hn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===je||S.magFilter===Ps||S.magFilter===Wi||S.magFilter===Vn||S.minFilter===je||S.minFilter===Ps||S.minFilter===Wi||S.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,st[S.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ut[S.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===qe||S.minFilter!==Wi&&S.minFilter!==Vn||S.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qt(b,S){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const K=S.source;let j=f.get(K);j===void 0&&(j={},f.set(K,j));const Y=X(S);if(Y!==b.__cacheKey){j[Y]===void 0&&(j[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[Y].usedTimes++;const vt=j[b.__cacheKey];vt!==void 0&&(j[b.__cacheKey].usedTimes--,vt.usedTimes===0&&T(S)),b.__cacheKey=Y,b.__webglTexture=j[Y].texture}return F}function q(b,S,F){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const j=Qt(b,S),Y=S.source;e.bindTexture(K,b.__webglTexture,s.TEXTURE0+F);const vt=n.get(Y);if(Y.version!==vt.__version||j===!0){e.activeTexture(s.TEXTURE0+F);const ot=Xt.getPrimaries(Xt.workingColorSpace),dt=S.colorSpace===En?null:Xt.getPrimaries(S.colorSpace),Wt=S.colorSpace===En||ot===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Q=_(S.image,!1,i.maxTextureSize);Q=se(S,Q);const ft=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type);let Rt=M(S.internalFormat,ft,Tt,S.colorSpace,S.isVideoTexture);Ot(K,S);let pt;const Gt=S.mipmaps,Nt=S.isVideoTexture!==!0,te=vt.__version===void 0||j===!0,D=Y.dataReady,it=C(S,Q);if(S.isDepthTexture)Rt=x(S.format===pi,S.type),te&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,Tt,null));else if(S.isDataTexture)if(Gt.length>0){Nt&&te&&e.texStorage2D(s.TEXTURE_2D,it,Rt,Gt[0].width,Gt[0].height);for(let G=0,$=Gt.length;G<$;G++)pt=Gt[G],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(s.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,Tt,pt.data);S.generateMipmaps=!1}else Nt?(te&&e.texStorage2D(s.TEXTURE_2D,it,Rt,Q.width,Q.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ft,Tt,Q.data)):e.texImage2D(s.TEXTURE_2D,0,Rt,Q.width,Q.height,0,ft,Tt,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Nt&&te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,Rt,Gt[0].width,Gt[0].height,Q.depth);for(let G=0,$=Gt.length;G<$;G++)if(pt=Gt[G],S.format!==Ye)if(ft!==null)if(Nt){if(D)if(S.layerUpdates.size>0){const ht=Ma(pt.width,pt.height,S.format,S.type);for(const ct of S.layerUpdates){const Dt=pt.data.subarray(ct*ht/pt.data.BYTES_PER_ELEMENT,(ct+1)*ht/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ct,pt.width,pt.height,1,ft,Dt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,pt.width,pt.height,Q.depth,ft,Tt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,G,Rt,pt.width,pt.height,Q.depth,0,ft,Tt,pt.data)}else{Nt&&te&&e.texStorage2D(s.TEXTURE_2D,it,Rt,Gt[0].width,Gt[0].height);for(let G=0,$=Gt.length;G<$;G++)pt=Gt[G],S.format!==Ye?ft!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,G,Rt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,pt.width,pt.height,ft,Tt,pt.data):e.texImage2D(s.TEXTURE_2D,G,Rt,pt.width,pt.height,0,ft,Tt,pt.data)}else if(S.isDataArrayTexture)if(Nt){if(te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,it,Rt,Q.width,Q.height,Q.depth),D)if(S.layerUpdates.size>0){const G=Ma(Q.width,Q.height,S.format,S.type);for(const $ of S.layerUpdates){const ht=Q.data.subarray($*G/Q.data.BYTES_PER_ELEMENT,($+1)*G/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,ft,Tt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(S.isData3DTexture)Nt?(te&&e.texStorage3D(s.TEXTURE_3D,it,Rt,Q.width,Q.height,Q.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Tt,Q.data)):e.texImage3D(s.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,ft,Tt,Q.data);else if(S.isFramebufferTexture){if(te)if(Nt)e.texStorage2D(s.TEXTURE_2D,it,Rt,Q.width,Q.height);else{let G=Q.width,$=Q.height;for(let ht=0;ht<it;ht++)e.texImage2D(s.TEXTURE_2D,ht,Rt,G,$,0,ft,Tt,null),G>>=1,$>>=1}}else if(Gt.length>0){if(Nt&&te){const G=Et(Gt[0]);e.texStorage2D(s.TEXTURE_2D,it,Rt,G.width,G.height)}for(let G=0,$=Gt.length;G<$;G++)pt=Gt[G],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,G,0,0,ft,Tt,pt):e.texImage2D(s.TEXTURE_2D,G,Rt,ft,Tt,pt);S.generateMipmaps=!1}else if(Nt){if(te){const G=Et(Q);e.texStorage2D(s.TEXTURE_2D,it,Rt,G.width,G.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Tt,Q)}else e.texImage2D(s.TEXTURE_2D,0,Rt,ft,Tt,Q);p(S)&&d(K),vt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function et(b,S,F){if(S.image.length!==6)return;const K=Qt(b,S),j=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+F);const Y=n.get(j);if(j.version!==Y.__version||K===!0){e.activeTexture(s.TEXTURE0+F);const vt=Xt.getPrimaries(Xt.workingColorSpace),ot=S.colorSpace===En?null:Xt.getPrimaries(S.colorSpace),dt=S.colorSpace===En||vt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Wt&&!Q?ft[$]=_(S.image[$],!0,i.maxCubemapSize):ft[$]=Q?S.image[$].image:S.image[$],ft[$]=se(S,ft[$]);const Tt=ft[0],Rt=r.convert(S.format,S.colorSpace),pt=r.convert(S.type),Gt=M(S.internalFormat,Rt,pt,S.colorSpace),Nt=S.isVideoTexture!==!0,te=Y.__version===void 0||K===!0,D=j.dataReady;let it=C(S,Tt);Ot(s.TEXTURE_CUBE_MAP,S);let G;if(Wt){Nt&&te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Gt,Tt.width,Tt.height);for(let $=0;$<6;$++){G=ft[$].mipmaps;for(let ht=0;ht<G.length;ht++){const ct=G[ht];S.format!==Ye?Rt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Rt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,ct.width,ct.height,Rt,pt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Gt,ct.width,ct.height,0,Rt,pt,ct.data)}}}else{if(G=S.mipmaps,Nt&&te){G.length>0&&it++;const $=Et(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,it,Gt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,Rt,pt,ft[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,ft[$].width,ft[$].height,0,Rt,pt,ft[$].data);for(let ht=0;ht<G.length;ht++){const Dt=G[ht].image[$].image;Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Dt.width,Dt.height,Rt,pt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Gt,Dt.width,Dt.height,0,Rt,pt,Dt.data)}}else{Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Rt,pt,ft[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,Rt,pt,ft[$]);for(let ht=0;ht<G.length;ht++){const ct=G[ht];Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Rt,pt,ct.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Gt,Rt,pt,ct.image[$])}}}p(S)&&d(s.TEXTURE_CUBE_MAP),Y.__version=j.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function xt(b,S,F,K,j,Y){const vt=r.convert(F.format,F.colorSpace),ot=r.convert(F.type),dt=M(F.internalFormat,vt,ot,F.colorSpace),Wt=n.get(S),Q=n.get(F);if(Q.__renderTarget=S,!Wt.__hasExternalTextures){const ft=Math.max(1,S.width>>Y),Tt=Math.max(1,S.height>>Y);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,dt,ft,Tt,S.depth,0,vt,ot,null):e.texImage2D(j,Y,dt,ft,Tt,0,vt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),kt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,j,Q.__webglTexture,0,Vt(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,j,Q.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(b,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,b),S.depthBuffer){const K=S.depthTexture,j=K&&K.isDepthTexture?K.type:null,Y=x(S.stencilBuffer,j),vt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Vt(S);kt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,Y,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,b)}else{const K=S.textures;for(let j=0;j<K.length;j++){const Y=K[j],vt=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),dt=M(Y.internalFormat,vt,ot,Y.colorSpace),Wt=Vt(S);F&&kt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,dt,S.width,S.height):kt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,dt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,dt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const j=K.__webglTexture,Y=Vt(S);if(S.depthTexture.format===ci)kt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(S.depthTexture.format===pi)kt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Lt(b){const S=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=K}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");bt(S.__webglFramebuffer,b)}else if(F){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),rt(S.__webglDepthbuffer[K],b,!1);else{const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),rt(S.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(b,S,F){const K=n.get(b);S!==void 0&&xt(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Lt(b)}function ce(b){const S=b.texture,F=n.get(b),K=n.get(S);b.addEventListener("dispose",R);const j=b.textures,Y=b.isWebGLCubeRenderTarget===!0,vt=j.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let dt=0;dt<S.mipmaps.length;dt++)F.__webglFramebuffer[ot][dt]=s.createFramebuffer()}else F.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)F.__webglFramebuffer[ot]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(vt)for(let ot=0,dt=j.length;ot<dt;ot++){const Wt=n.get(j[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),o.memory.textures++)}if(b.samples>0&&kt(b)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){const dt=j[ot];F.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const Wt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),ft=M(dt.internalFormat,Wt,Q,dt.colorSpace,b.isXRRenderTarget===!0),Tt=Vt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,ft,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)xt(F.__webglFramebuffer[ot][dt],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else xt(F.__webglFramebuffer[ot],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(S)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,dt=j.length;ot<dt;ot++){const Wt=j[ot],Q=n.get(Wt);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture),Ot(s.TEXTURE_2D,Wt),xt(F.__webglFramebuffer,b,Wt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),p(Wt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),Ot(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)xt(F.__webglFramebuffer[dt],b,S,s.COLOR_ATTACHMENT0,ot,dt);else xt(F.__webglFramebuffer,b,S,s.COLOR_ATTACHMENT0,ot,0);p(S)&&d(ot),e.unbindTexture()}b.depthBuffer&&Lt(b)}function Ht(b){const S=b.textures;for(let F=0,K=S.length;F<K;F++){const j=S[F];if(p(j)){const Y=v(b),vt=n.get(j).__webglTexture;e.bindTexture(Y,vt),d(Y),e.unbindTexture()}}}const de=[],N=[];function Ue(b){if(b.samples>0){if(kt(b)===!1){const S=b.textures,F=b.width,K=b.height;let j=s.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(b),ot=S.length>1;if(ot)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);const Wt=n.get(S[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,F,K,0,0,F,K,j,s.NEAREST),l===!0&&(de.length=0,N.length=0,de.push(s.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(de.push(Y),N.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);const Wt=n.get(S[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Vt(b){return Math.min(i.maxSamples,b.samples)}function kt(b){const S=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wt(b){const S=o.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function se(b,S){const F=b.colorSpace,K=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==xi&&F!==En&&(Xt.getTransfer(F)===jt?(K!==Ye||j!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function Et(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=kt}function yp(s,t){function e(n,i=En){let r;const o=Xt.getTransfer(i);if(n===fn)return s.UNSIGNED_BYTE;if(n===Jr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Qr)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ba)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fa)return s.BYTE;if(n===Oa)return s.SHORT;if(n===Oi)return s.UNSIGNED_SHORT;if(n===jr)return s.INT;if(n===kn)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===Vi)return s.HALF_FLOAT;if(n===za)return s.ALPHA;if(n===Va)return s.RGB;if(n===Ye)return s.RGBA;if(n===ka)return s.LUMINANCE;if(n===Ga)return s.LUMINANCE_ALPHA;if(n===ci)return s.DEPTH_COMPONENT;if(n===pi)return s.DEPTH_STENCIL;if(n===Ha)return s.RED;if(n===to)return s.RED_INTEGER;if(n===Wa)return s.RG;if(n===eo)return s.RG_INTEGER;if(n===no)return s.RGBA_INTEGER;if(n===ps||n===ms||n===gs||n===_s)if(o===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yr||n===Er||n===wr||n===Tr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ar||n===br||n===Rr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ar||n===br)return o===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cr||n===Pr||n===Lr||n===Dr||n===Ir||n===Ur||n===Nr||n===Fr||n===Or||n===Br||n===zr||n===Vr||n===kr||n===Gr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ir)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ur)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Or)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Br)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gr)return o===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xs||n===Hr||n===Wr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xs)return o===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xa||n===Xr||n===Yr||n===qr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Ep extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qt extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Tp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ap=`
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

}`;class bp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ae,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:Tp,fragmentShader:Ap,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new k(new ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rp extends vi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=new bp,p=e.getContextAttributes();let d=null,v=null;const M=[],x=[],C=new St;let A=null;const R=new Ie;R.viewport=new Jt;const P=new Ie;P.viewport=new Jt;const T=[R,P],y=new Ep;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=M[q];return et===void 0&&(et=new ir,M[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=M[q];return et===void 0&&(et=new ir,M[q]=et),et.getGripSpace()},this.getHand=function(q){let et=M[q];return et===void 0&&(et=new ir,M[q]=et),et.getHandSpace()};function B(q){const et=x.indexOf(q.inputSource);if(et===-1)return;const xt=M[et];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||o),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Z);for(let q=0;q<M.length;q++){const et=x[q];et!==null&&(x[q]=null,M[q].disconnect(et))}L=null,O=null,_.reset(),t.setRenderTarget(d),m=null,f=null,u=null,i=null,v=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const et={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Gn(m.framebufferWidth,m.framebufferHeight,{format:Ye,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,xt=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?pi:ci,xt=p.stencil?fi:kn);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(bt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Gn(f.textureWidth,f.textureHeight,{format:Ye,type:fn,depthTexture:new rc(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(q){for(let et=0;et<q.removed.length;et++){const xt=q.removed[et],rt=x.indexOf(xt);rt>=0&&(x[rt]=null,M[rt].disconnect(xt))}for(let et=0;et<q.added.length;et++){const xt=q.added[et];let rt=x.indexOf(xt);if(rt===-1){for(let Lt=0;Lt<M.length;Lt++)if(Lt>=x.length){x.push(xt),rt=Lt;break}else if(x[Lt]===null){x[Lt]=xt,rt=Lt;break}if(rt===-1)break}const bt=M[rt];bt&&bt.connect(xt)}}const W=new E,J=new E;function H(q,et,xt){W.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(xt.matrixWorld);const rt=W.distanceTo(J),bt=et.projectionMatrix.elements,Lt=xt.projectionMatrix.elements,Bt=bt[14]/(bt[10]-1),ce=bt[14]/(bt[10]+1),Ht=(bt[9]+1)/bt[5],de=(bt[9]-1)/bt[5],N=(bt[8]-1)/bt[0],Ue=(Lt[8]+1)/Lt[0],Vt=Bt*N,kt=Bt*Ue,wt=rt/(-N+Ue),se=wt*-N;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(se),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=Bt+wt,b=ce+wt,S=Vt-se,F=kt+(rt-se),K=Ht*ce/b*Et,j=de*ce/b*Et;q.projectionMatrix.makePerspective(S,F,K,j,Et,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,xt=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),y.near=P.near=R.near=et,y.far=P.far=R.far=xt,(L!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,O=y.far),R.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,y.layers.mask=R.layers.mask|P.layers.mask;const rt=q.parent,bt=y.cameras;st(y,rt);for(let Lt=0;Lt<bt.length;Lt++)st(bt[Lt],rt);bt.length===2?H(y,R,P):y.projectionMatrix.copy(R.projectionMatrix),ut(q,y,rt)};function ut(q,et,xt){xt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Bi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let yt=null;function Ot(q,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const xt=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let rt=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Lt=0;Lt<xt.length;Lt++){const Bt=xt[Lt];let ce=null;if(m!==null)ce=m.getViewport(Bt);else{const de=u.getViewSubImage(f,Bt);ce=de.viewport,Lt===0&&(t.setRenderTargetTextures(v,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(v))}let Ht=T[Lt];Ht===void 0&&(Ht=new Ie,Ht.layers.enable(Lt),Ht.viewport=new Jt,T[Lt]=Ht),Ht.matrix.fromArray(Bt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Bt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ce.x,ce.y,ce.width,ce.height),Lt===0&&(y.matrix.copy(Ht.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Ht)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Lt=u.getDepthInformation(xt[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,i.renderState)}}for(let xt=0;xt<M.length;xt++){const rt=x[xt],bt=M[xt];rt!==null&&bt!==void 0&&bt.update(rt,et,c||o)}yt&&yt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Qt=new ic;Qt.setAnimationLoop(Ot),this.setAnimationLoop=function(q){yt=q},this.dispose=function(){}}}const Un=new Qe,Cp=new ie;function Pp(s,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,tc(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,v,M,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,x)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Re&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Re&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=t.get(d),M=v.envMap,x=v.envMapRotation;M&&(p.envMap.value=M,Un.copy(x),Un.x*=-1,Un.y*=-1,Un.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),p.envMapRotation.value.setFromMatrix4(Cp.makeRotationFromEuler(Un)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Re&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const v=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lp(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",p));const C=M.program;n.updateUBOMapping(v,C);const A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){const M=u();v.__bindingPointIndex=M;const x=s.createBuffer(),C=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=i[v.id],x=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,R=x.length;A<R;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,y=P.length;T<y;T++){const L=P[T];if(m(L,A,T,C)===!0){const O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let Z=0;Z<B.length;Z++){const W=B[Z],J=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,O+X,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(v,M,x,C){const A=v.value,R=M+"_"+x;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const P=C[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(v){const M=v.uniforms;let x=0;const C=16;for(let R=0,P=M.length;R<P;R++){const T=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,L=T.length;y<L;y++){const O=T[y],B=Array.isArray(O.value)?O.value:[O.value];for(let X=0,Z=B.length;X<Z;X++){const W=B[X],J=_(W),H=x%C,st=H%J.boundary,ut=H+st;x+=st,ut!==0&&C-ut<J.storage&&(x+=C-ut),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=J.storage}}}const A=x%C;return A>0&&(x+=C-A),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){const M=v.target;M.removeEventListener("dispose",p);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}class Dp{constructor(t={}){const{canvas:e=vl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Tn,this.toneMappingExposure=1;const x=this;let C=!1,A=0,R=0,P=null,T=-1,y=null;const L=new Jt,O=new Jt;let B=null;const X=new zt(0);let Z=0,W=e.width,J=e.height,H=1,st=null,ut=null;const yt=new Jt(0,0,W,J),Ot=new Jt(0,0,W,J);let Qt=!1;const q=new oo;let et=!1,xt=!1;const rt=new ie,bt=new ie,Lt=new E,Bt=new Jt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function de(){return P===null?H:1}let N=n;function Ue(w,I){return e.getContext(w,I)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$r}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),N===null){const I="webgl2";if(N=Ue(I,w),N===null)throw Ue(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,kt,wt,se,Et,b,S,F,K,j,Y,vt,ot,dt,Wt,Q,ft,Tt,Rt,pt,Gt,Nt,te,D;function it(){Vt=new Fd(N),Vt.init(),Nt=new yp(N,Vt),kt=new Pd(N,Vt,t,Nt),wt=new vp(N,Vt),kt.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),se=new zd(N),Et=new sp,b=new Sp(N,Vt,wt,Et,kt,Nt,se),S=new Dd(x),F=new Nd(x),K=new Yl(N),te=new Rd(N,K),j=new Od(N,K,se,te),Y=new kd(N,j,K,se),Rt=new Vd(N,kt,b),Q=new Ld(Et),vt=new ip(x,S,F,Vt,kt,te,Q),ot=new Pp(x,Et),dt=new op,Wt=new dp(Vt),Tt=new bd(x,S,F,wt,Y,m,l),ft=new _p(x,Y,kt),D=new Lp(N,se,kt,wt),pt=new Cd(N,Vt,se),Gt=new Bd(N,Vt,se),se.programs=vt.programs,x.capabilities=kt,x.extensions=Vt,x.properties=Et,x.renderLists=dt,x.shadowMap=ft,x.state=wt,x.info=se}it();const G=new Rp(x,N);this.xr=G,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,J,!1))},this.getSize=function(w){return w.set(W,J)},this.setSize=function(w,I,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,J=I,e.width=Math.floor(w*H),e.height=Math.floor(I*H),z===!0&&(e.style.width=w+"px",e.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(W*H,J*H).floor()},this.setDrawingBufferSize=function(w,I,z){W=w,J=I,H=z,e.width=Math.floor(w*z),e.height=Math.floor(I*z),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,I,z,V){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,I,z,V),wt.viewport(L.copy(yt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Ot)},this.setScissor=function(w,I,z,V){w.isVector4?Ot.set(w.x,w.y,w.z,w.w):Ot.set(w,I,z,V),wt.scissor(O.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(w){wt.setScissorTest(Qt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(w=!0,I=!0,z=!0){let V=0;if(w){let U=!1;if(P!==null){const tt=P.texture.format;U=tt===no||tt===eo||tt===to}if(U){const tt=P.texture.type,lt=tt===fn||tt===kn||tt===Oi||tt===fi||tt===Jr||tt===Qr,mt=Tt.getClearColor(),gt=Tt.getClearAlpha(),Ct=mt.r,It=mt.g,_t=mt.b;lt?(g[0]=Ct,g[1]=It,g[2]=_t,g[3]=gt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ct,_[1]=It,_[2]=_t,_[3]=gt,N.clearBufferiv(N.COLOR,0,_))}else V|=N.COLOR_BUFFER_BIT}I&&(V|=N.DEPTH_BUFFER_BIT),z&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Wt.dispose(),Et.dispose(),S.dispose(),F.dispose(),Y.dispose(),te.dispose(),D.dispose(),vt.dispose(),G.dispose(),G.removeEventListener("sessionstart",po),G.removeEventListener("sessionend",mo),Rn.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=se.autoReset,I=ft.enabled,z=ft.autoUpdate,V=ft.needsUpdate,U=ft.type;it(),se.autoReset=w,ft.enabled=I,ft.autoUpdate=z,ft.needsUpdate=V,ft.type=U}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const I=w.target;I.removeEventListener("dispose",Dt),he(I)}function he(w){Me(w),Et.remove(w)}function Me(w){const I=Et.get(w).programs;I!==void 0&&(I.forEach(function(z){vt.releaseProgram(z)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,z,V,U,tt){I===null&&(I=ce);const lt=U.isMesh&&U.matrixWorld.determinant()<0,mt=mc(w,I,z,V,U);wt.setMaterial(V,lt);let gt=z.index,Ct=1;if(V.wireframe===!0){if(gt=j.getWireframeAttribute(z),gt===void 0)return;Ct=2}const It=z.drawRange,_t=z.attributes.position;let Yt=It.start*Ct,ee=(It.start+It.count)*Ct;tt!==null&&(Yt=Math.max(Yt,tt.start*Ct),ee=Math.min(ee,(tt.start+tt.count)*Ct)),gt!==null?(Yt=Math.max(Yt,0),ee=Math.min(ee,gt.count)):_t!=null&&(Yt=Math.max(Yt,0),ee=Math.min(ee,_t.count));const re=ee-Yt;if(re<0||re===1/0)return;te.setup(U,V,mt,z,gt);let be,Zt=pt;if(gt!==null&&(be=K.get(gt),Zt=Gt,Zt.setIndex(be)),U.isMesh)V.wireframe===!0?(wt.setLineWidth(V.wireframeLinewidth*de()),Zt.setMode(N.LINES)):Zt.setMode(N.TRIANGLES);else if(U.isLine){let Mt=V.linewidth;Mt===void 0&&(Mt=1),wt.setLineWidth(Mt*de()),U.isLineSegments?Zt.setMode(N.LINES):U.isLineLoop?Zt.setMode(N.LINE_LOOP):Zt.setMode(N.LINE_STRIP)}else U.isPoints?Zt.setMode(N.POINTS):U.isSprite&&Zt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Zt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Mt=U._multiDrawStarts,en=U._multiDrawCounts,Kt=U._multiDrawCount,Ve=gt?K.get(gt).bytesPerElement:1,Hn=Et.get(V).currentProgram.getUniforms();for(let Pe=0;Pe<Kt;Pe++)Hn.setValue(N,"_gl_DrawID",Pe),Zt.render(Mt[Pe]/Ve,en[Pe])}else if(U.isInstancedMesh)Zt.renderInstances(Yt,re,U.count);else if(z.isInstancedBufferGeometry){const Mt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,en=Math.min(z.instanceCount,Mt);Zt.renderInstances(Yt,re,en)}else Zt.render(Yt,re)};function $t(w,I,z){w.transparent===!0&&w.side===$e&&w.forceSinglePass===!1?(w.side=Re,w.needsUpdate=!0,Hi(w,I,z),w.side=An,w.needsUpdate=!0,Hi(w,I,z),w.side=$e):Hi(w,I,z)}this.compile=function(w,I,z=null){z===null&&(z=w),d=Wt.get(z),d.init(I),M.push(d),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),w!==z&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const V=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const mt=tt[lt];$t(mt,z,U),V.add(mt)}else $t(tt,z,U),V.add(tt)}),M.pop(),d=null,V},this.compileAsync=function(w,I,z=null){const V=this.compile(w,I,z);return new Promise(U=>{function tt(){if(V.forEach(function(lt){Et.get(lt).currentProgram.isReady()&&V.delete(lt)}),V.size===0){U(w);return}setTimeout(tt,10)}Vt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let ze=null;function tn(w){ze&&ze(w)}function po(){Rn.stop()}function mo(){Rn.start()}const Rn=new ic;Rn.setAnimationLoop(tn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(w){ze=w,G.setAnimationLoop(w),w===null?Rn.stop():Rn.start()},G.addEventListener("sessionstart",po),G.addEventListener("sessionend",mo),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(I),I=G.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,I,P),d=Wt.get(w,M.length),d.init(I),M.push(d),bt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(bt),xt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,xt),p=dt.get(w,v.length),p.init(),v.push(p),G.enabled===!0&&G.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&Cs(tt,I,-1/0,x.sortObjects)}Cs(w,I,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(st,ut),Ht=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ht&&Tt.addToRenderList(p,w),this.info.render.frame++,et===!0&&Q.beginShadows();const z=d.state.shadowsArray;ft.render(z,w,I),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,U=p.transmissive;if(d.setupLights(),I.isArrayCamera){const tt=I.cameras;if(U.length>0)for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];_o(V,U,w,gt)}Ht&&Tt.render(w);for(let lt=0,mt=tt.length;lt<mt;lt++){const gt=tt[lt];go(p,w,gt,gt.viewport)}}else U.length>0&&_o(V,U,w,I),Ht&&Tt.render(w),go(p,w,I);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,I),te.resetDefaultState(),T=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],et===!0&&Q.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Cs(w,I,z,V){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){V&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);const lt=Y.update(w),mt=w.material;mt.visible&&p.push(w,lt,mt,z,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const lt=Y.update(w),mt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Bt.copy(lt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(mt)){const gt=lt.groups;for(let Ct=0,It=gt.length;Ct<It;Ct++){const _t=gt[Ct],Yt=mt[_t.materialIndex];Yt&&Yt.visible&&p.push(w,lt,Yt,z,Bt.z,_t)}}else mt.visible&&p.push(w,lt,mt,z,Bt.z,null)}}const tt=w.children;for(let lt=0,mt=tt.length;lt<mt;lt++)Cs(tt[lt],I,z,V)}function go(w,I,z,V){const U=w.opaque,tt=w.transmissive,lt=w.transparent;d.setupLightsView(z),et===!0&&Q.setGlobalState(x.clippingPlanes,z),V&&wt.viewport(L.copy(V)),U.length>0&&Gi(U,I,z),tt.length>0&&Gi(tt,I,z),lt.length>0&&Gi(lt,I,z),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function _o(w,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new Gn(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Vi:fn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const tt=d.state.transmissionRenderTarget[V.id],lt=V.viewport||L;tt.setSize(lt.z,lt.w);const mt=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(X),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Ht&&Tt.render(z);const gt=x.toneMapping;x.toneMapping=Tn;const Ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),et===!0&&Q.setGlobalState(x.clippingPlanes,V),Gi(w,z,V),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let _t=0,Yt=I.length;_t<Yt;_t++){const ee=I[_t],re=ee.object,be=ee.geometry,Zt=ee.material,Mt=ee.group;if(Zt.side===$e&&re.layers.test(V.layers)){const en=Zt.side;Zt.side=Re,Zt.needsUpdate=!0,xo(re,z,V,be,Zt,Mt),Zt.side=en,Zt.needsUpdate=!0,It=!0}}It===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}x.setRenderTarget(mt),x.setClearColor(X,Z),Ct!==void 0&&(V.viewport=Ct),x.toneMapping=gt}function Gi(w,I,z){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,tt=w.length;U<tt;U++){const lt=w[U],mt=lt.object,gt=lt.geometry,Ct=V===null?lt.material:V,It=lt.group;mt.layers.test(z.layers)&&xo(mt,I,z,gt,Ct,It)}}function xo(w,I,z,V,U,tt){w.onBeforeRender(x,I,z,V,U,tt),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,I,z,V,w,tt),U.transparent===!0&&U.side===$e&&U.forceSinglePass===!1?(U.side=Re,U.needsUpdate=!0,x.renderBufferDirect(z,I,V,U,w,tt),U.side=An,U.needsUpdate=!0,x.renderBufferDirect(z,I,V,U,w,tt),U.side=$e):x.renderBufferDirect(z,I,V,U,w,tt),w.onAfterRender(x,I,z,V,U,tt)}function Hi(w,I,z){I.isScene!==!0&&(I=ce);const V=Et.get(w),U=d.state.lights,tt=d.state.shadowsArray,lt=U.state.version,mt=vt.getParameters(w,U.state,tt,I,z),gt=vt.getProgramCacheKey(mt);let Ct=V.programs;V.environment=w.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(w.isMeshStandardMaterial?F:S).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Ct===void 0&&(w.addEventListener("dispose",Dt),Ct=new Map,V.programs=Ct);let It=Ct.get(gt);if(It!==void 0){if(V.currentProgram===It&&V.lightsStateVersion===lt)return Mo(w,mt),It}else mt.uniforms=vt.getUniforms(w),w.onBeforeCompile(mt,x),It=vt.acquireProgram(mt,gt),Ct.set(gt,It),V.uniforms=mt.uniforms;const _t=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(_t.clippingPlanes=Q.uniform),Mo(w,mt),V.needsLights=_c(w),V.lightsStateVersion=lt,V.needsLights&&(_t.ambientLightColor.value=U.state.ambient,_t.lightProbe.value=U.state.probe,_t.directionalLights.value=U.state.directional,_t.directionalLightShadows.value=U.state.directionalShadow,_t.spotLights.value=U.state.spot,_t.spotLightShadows.value=U.state.spotShadow,_t.rectAreaLights.value=U.state.rectArea,_t.ltc_1.value=U.state.rectAreaLTC1,_t.ltc_2.value=U.state.rectAreaLTC2,_t.pointLights.value=U.state.point,_t.pointLightShadows.value=U.state.pointShadow,_t.hemisphereLights.value=U.state.hemi,_t.directionalShadowMap.value=U.state.directionalShadowMap,_t.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_t.spotShadowMap.value=U.state.spotShadowMap,_t.spotLightMatrix.value=U.state.spotLightMatrix,_t.spotLightMap.value=U.state.spotLightMap,_t.pointShadowMap.value=U.state.pointShadowMap,_t.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=It,V.uniformsList=null,It}function vo(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=vs.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Mo(w,I){const z=Et.get(w);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function mc(w,I,z,V,U){I.isScene!==!0&&(I=ce),b.resetTextureUnits();const tt=I.fog,lt=V.isMeshStandardMaterial?I.environment:null,mt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xi,gt=(V.isMeshStandardMaterial?F:S).get(V.envMap||lt),Ct=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,It=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),_t=!!z.morphAttributes.position,Yt=!!z.morphAttributes.normal,ee=!!z.morphAttributes.color;let re=Tn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(re=x.toneMapping);const be=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=be!==void 0?be.length:0,Mt=Et.get(V),en=d.state.lights;if(et===!0&&(xt===!0||w!==y)){const Ne=w===y&&V.id===T;Q.setState(V,w,Ne)}let Kt=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==en.state.version||Mt.outputColorSpace!==mt||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==gt||V.fog===!0&&Mt.fog!==tt||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Ct||Mt.vertexTangents!==It||Mt.morphTargets!==_t||Mt.morphNormals!==Yt||Mt.morphColors!==ee||Mt.toneMapping!==re||Mt.morphTargetsCount!==Zt)&&(Kt=!0):(Kt=!0,Mt.__version=V.version);let Ve=Mt.currentProgram;Kt===!0&&(Ve=Hi(V,I,U));let Hn=!1,Pe=!1,Ei=!1;const oe=Ve.getUniforms(),Ze=Mt.uniforms;if(wt.useProgram(Ve.program)&&(Hn=!0,Pe=!0,Ei=!0),V.id!==T&&(T=V.id,Pe=!0),Hn||y!==w){wt.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),Sl(rt),yl(rt),oe.setValue(N,"projectionMatrix",rt)):oe.setValue(N,"projectionMatrix",w.projectionMatrix),oe.setValue(N,"viewMatrix",w.matrixWorldInverse);const mn=oe.map.cameraPosition;mn!==void 0&&mn.setValue(N,Lt.setFromMatrixPosition(w.matrixWorld)),kt.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,Pe=!0,Ei=!0)}if(U.isSkinnedMesh){oe.setOptional(N,U,"bindMatrix"),oe.setOptional(N,U,"bindMatrixInverse");const Ne=U.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),oe.setValue(N,"boneTexture",Ne.boneTexture,b))}U.isBatchedMesh&&(oe.setOptional(N,U,"batchingTexture"),oe.setValue(N,"batchingTexture",U._matricesTexture,b),oe.setOptional(N,U,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",U._indirectTexture,b),oe.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",U._colorsTexture,b));const wi=z.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&Rt.update(U,z,Ve),(Pe||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,oe.setValue(N,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ze.envMap.value=gt,Ze.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Ze.envMapIntensity.value=I.environmentIntensity),Pe&&(oe.setValue(N,"toneMappingExposure",x.toneMappingExposure),Mt.needsLights&&gc(Ze,Ei),tt&&V.fog===!0&&ot.refreshFogUniforms(Ze,tt),ot.refreshMaterialUniforms(Ze,V,H,J,d.state.transmissionRenderTarget[w.id]),vs.upload(N,vo(Mt),Ze,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vs.upload(N,vo(Mt),Ze,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(N,"center",U.center),oe.setValue(N,"modelViewMatrix",U.modelViewMatrix),oe.setValue(N,"normalMatrix",U.normalMatrix),oe.setValue(N,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ne=V.uniformsGroups;for(let mn=0,gn=Ne.length;mn<gn;mn++){const So=Ne[mn];D.update(So,Ve),D.bind(So,Ve)}}return Ve}function gc(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function _c(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,I,z){Et.get(w.texture).__webglTexture=I,Et.get(w.depthTexture).__webglTexture=z;const V=Et.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const z=Et.get(w);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,z=0){P=w,A=I,R=z;let V=!0,U=null,tt=!1,lt=!1;if(w){const gt=Et.get(w);if(gt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(gt.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(gt.__hasExternalTextures)b.rebindTextures(w,Et.get(w.texture).__webglTexture,Et.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const _t=w.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&Et.has(_t)&&(w.width!==_t.image.width||w.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Ct=w.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);const It=Et.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(It[I])?U=It[I][z]:U=It[I],tt=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?U=Et.get(w).__webglMultisampledFramebuffer:Array.isArray(It)?U=It[z]:U=It,L.copy(w.viewport),O.copy(w.scissor),B=w.scissorTest}else L.copy(yt).multiplyScalar(H).floor(),O.copy(Ot).multiplyScalar(H).floor(),B=Qt;if(wt.bindFramebuffer(N.FRAMEBUFFER,U)&&V&&wt.drawBuffers(w,U),wt.viewport(L),wt.scissor(O),wt.setScissorTest(B),tt){const gt=Et.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,gt.__webglTexture,z)}else if(lt){const gt=Et.get(w.texture),Ct=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,gt.__webglTexture,z||0,Ct)}T=-1},this.readRenderTargetPixels=function(w,I,z,V,U,tt,lt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){wt.bindFramebuffer(N.FRAMEBUFFER,mt);try{const gt=w.texture,Ct=gt.format,It=gt.type;if(!kt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-V&&z>=0&&z<=w.height-U&&N.readPixels(I,z,V,U,Nt.convert(Ct),Nt.convert(It),tt)}finally{const gt=P!==null?Et.get(P).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(w,I,z,V,U,tt,lt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Et.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=w.texture,Ct=gt.format,It=gt.type;if(!kt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-V&&z>=0&&z<=w.height-U){wt.bindFramebuffer(N.FRAMEBUFFER,mt);const _t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.bufferData(N.PIXEL_PACK_BUFFER,tt.byteLength,N.STREAM_READ),N.readPixels(I,z,V,U,Nt.convert(Ct),Nt.convert(It),0);const Yt=P!==null?Et.get(P).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,Yt);const ee=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ml(N,ee,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,tt),N.deleteBuffer(_t),N.deleteSync(ee),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,z=0){w.isTexture!==!0&&(Li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-z),U=Math.floor(w.image.width*V),tt=Math.floor(w.image.height*V),lt=I!==null?I.x:0,mt=I!==null?I.y:0;b.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,lt,mt,U,tt),wt.unbindTexture()},this.copyTextureToTexture=function(w,I,z=null,V=null,U=0){w.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let tt,lt,mt,gt,Ct,It,_t,Yt,ee;const re=w.isCompressedTexture?w.mipmaps[U]:w.image;z!==null?(tt=z.max.x-z.min.x,lt=z.max.y-z.min.y,mt=z.isBox3?z.max.z-z.min.z:1,gt=z.min.x,Ct=z.min.y,It=z.isBox3?z.min.z:0):(tt=re.width,lt=re.height,mt=re.depth||1,gt=0,Ct=0,It=0),V!==null?(_t=V.x,Yt=V.y,ee=V.z):(_t=0,Yt=0,ee=0);const be=Nt.convert(I.format),Zt=Nt.convert(I.type);let Mt;I.isData3DTexture?(b.setTexture3D(I,0),Mt=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),Mt=N.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),Mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const en=N.getParameter(N.UNPACK_ROW_LENGTH),Kt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ve=N.getParameter(N.UNPACK_SKIP_PIXELS),Hn=N.getParameter(N.UNPACK_SKIP_ROWS),Pe=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,re.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,It);const Ei=w.isDataArrayTexture||w.isData3DTexture,oe=I.isDataArrayTexture||I.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Ze=Et.get(w),wi=Et.get(I),Ne=Et.get(Ze.__renderTarget),mn=Et.get(wi.__renderTarget);wt.bindFramebuffer(N.READ_FRAMEBUFFER,Ne.__webglFramebuffer),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let gn=0;gn<mt;gn++)Ei&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(w).__webglTexture,U,It+gn),w.isDepthTexture?(oe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Et.get(I).__webglTexture,U,ee+gn),N.blitFramebuffer(gt,Ct,tt,lt,_t,Yt,tt,lt,N.DEPTH_BUFFER_BIT,N.NEAREST)):oe?N.copyTexSubImage3D(Mt,U,_t,Yt,ee+gn,gt,Ct,tt,lt):N.copyTexSubImage2D(Mt,U,_t,Yt,ee+gn,gt,Ct,tt,lt);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else oe?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Mt,U,_t,Yt,ee,tt,lt,mt,be,Zt,re.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,U,_t,Yt,ee,tt,lt,mt,be,re.data):N.texSubImage3D(Mt,U,_t,Yt,ee,tt,lt,mt,be,Zt,re):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_t,Yt,tt,lt,be,Zt,re.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_t,Yt,re.width,re.height,be,re.data):N.texSubImage2D(N.TEXTURE_2D,U,_t,Yt,tt,lt,be,Zt,re);N.pixelStorei(N.UNPACK_ROW_LENGTH,en),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Kt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,Hn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Pe),U===0&&I.generateMipmaps&&N.generateMipmap(Mt),wt.unbindTexture()},this.copyTextureToTexture3D=function(w,I,z=null,V=null,U=0){return w.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0),Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,I,z,V,U)},this.initRenderTarget=function(w){Et.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,wt.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class co{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new co(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ip extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hc extends Si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ys=new E,Es=new E,Sa=new ie,Ci=new so,us=new mi,sr=new E,ya=new E;class Up extends xe{constructor(t=new Ce,e=new hc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ys.fromBufferAttribute(e,i-1),Es.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ys.distanceTo(Es);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),us.radius+=r,t.ray.intersectsSphere(us)===!1)return;Sa.copy(i).invert(),Ci.copy(t.ray).applyMatrix4(Sa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=h.getX(_),v=h.getX(_+1),M=ds(this,t,Ci,l,d,v);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(m),d=ds(this,t,Ci,l,_,p);d&&e.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=ds(this,t,Ci,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=ds(this,t,Ci,l,g-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ds(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(ys.fromBufferAttribute(o,i),Es.fromBufferAttribute(o,r),e.distanceSqToSegment(ys,Es,sr,ya)>n)return;sr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(sr);if(!(l<t.near||l>t.far))return{distance:l,point:ya.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class si extends Ae{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,m=(o-h)/f;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new St:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new E,i=[],r=[],o=[],a=new E,l=new ie;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ve(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(ve(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class uc extends pn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new St){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*h-m*u+this.aX,c=f*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Np extends uc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function lo(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,m*=h,i(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const fs=new E,rr=new lo,or=new lo,ar=new lo;class dc extends pn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(fs.subVectors(i[0],i[1]).add(i[0]),c=fs);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(fs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=fs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),rr.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),or.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),ar.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(rr.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),or.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ar.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(rr.calc(l),or.calc(l),ar.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ea(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Fp(s,t){const e=1-s;return e*e*t}function Op(s,t){return 2*(1-s)*s*t}function Bp(s,t){return s*s*t}function Ni(s,t,e,n){return Fp(s,t)+Op(s,e)+Bp(s,n)}function zp(s,t){const e=1-s;return e*e*e*t}function Vp(s,t){const e=1-s;return 3*e*e*s*t}function kp(s,t){return 3*(1-s)*s*s*t}function Gp(s,t){return s*s*s*t}function Fi(s,t,e,n,i){return zp(s,t)+Vp(s,e)+kp(s,n)+Gp(s,i)}class Hp extends pn{constructor(t=new St,e=new St,n=new St,i=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new St){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fi(t,i.x,r.x,o.x,a.x),Fi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wp extends pn{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fi(t,i.x,r.x,o.x,a.x),Fi(t,i.y,r.y,o.y,a.y),Fi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xp extends pn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yp extends pn{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qp extends pn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ni(t,i.x,r.x,o.x),Ni(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fc extends pn{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ni(t,i.x,r.x,o.x),Ni(t,i.y,r.y,o.y),Ni(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zp extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Ea(a,l.x,c.x,h.x,u.x),Ea(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new St().fromArray(i))}return this}}var Kp=Object.freeze({__proto__:null,ArcCurve:Np,CatmullRomCurve3:dc,CubicBezierCurve:Hp,CubicBezierCurve3:Wp,EllipseCurve:uc,LineCurve:Xp,LineCurve3:Yp,QuadraticBezierCurve:qp,QuadraticBezierCurve3:fc,SplineCurve:Zp});class bs extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new E,h=new St;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pe extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(m,2));function v(){const x=new E,C=new E;let A=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const T=[],y=P/r,L=y*(e-t)+t;for(let O=0;O<=i;O++){const B=O/i,X=B*l+a,Z=Math.sin(X),W=Math.cos(X);C.x=L*Z,C.y=-y*n+p,C.z=L*W,u.push(C.x,C.y,C.z),x.set(Z,R,W).normalize(),f.push(x.x,x.y,x.z),m.push(B,1-y),T.push(g++)}_.push(T)}for(let P=0;P<i;P++)for(let T=0;T<r;T++){const y=_[T][P],L=_[T+1][P],O=_[T+1][P+1],B=_[T][P+1];(t>0||T!==0)&&(h.push(y,L,B),A+=3),(e>0||T!==r-1)&&(h.push(L,O,B),A+=3)}c.addGroup(d,A,0),d+=A}function M(x){const C=g,A=new St,R=new E;let P=0;const T=x===!0?t:e,y=x===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),g++;const L=g;for(let O=0;O<=i;O++){const X=O/i*l+a,Z=Math.cos(X),W=Math.sin(X);R.x=T*W,R.y=p*y,R.z=T*Z,u.push(R.x,R.y,R.z),f.push(0,y,0),A.x=Z*.5+.5,A.y=W*.5*y+.5,m.push(A.x,A.y),g++}for(let O=0;O<i;O++){const B=C+O,X=L+O;x===!0?h.push(X,X+1,B):h.push(X+1,X,B),P+=3}c.addGroup(d,P,x===!0?1:2),d+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zi extends pe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new zi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ho extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new E,x=new E,C=new E;for(let A=0;A<e.length;A+=3)m(e[A+0],M),m(e[A+1],x),m(e[A+2],C),l(M,x,C,v)}function l(v,M,x,C){const A=C+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const T=v.clone().lerp(x,P/A),y=M.clone().lerp(x,P/A),L=A-P;for(let O=0;O<=L;O++)O===0&&P===A?R[P][O]=T:R[P][O]=T.clone().lerp(y,O/L)}for(let P=0;P<A;P++)for(let T=0;T<2*(A-P)-1;T++){const y=Math.floor(T/2);T%2===0?(f(R[P][y+1]),f(R[P+1][y]),f(R[P][y])):(f(R[P][y+1]),f(R[P+1][y+1]),f(R[P+1][y]))}}function c(v){const M=new E;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const v=new E;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=p(v)/2/Math.PI+.5,C=d(v)/Math.PI+.5;o.push(x,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],C=o[v+4],A=Math.max(M,x,C),R=Math.min(M,x,C);A>.9&&R<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function m(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function g(){const v=new E,M=new E,x=new E,C=new E,A=new St,R=new St,P=new St;for(let T=0,y=0;T<r.length;T+=9,y+=6){v.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),A.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),C.copy(v).add(M).add(x).divideScalar(3);const L=p(C);_(A,y+0,v,L),_(R,y+2,M,L),_(P,y+4,x,L)}}function _(v,M,x,C){C<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=C/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.vertices,t.indices,t.radius,t.details)}}class uo extends ho{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new uo(t.radius,t.detail)}}class Be extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new E,f=new E,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const v=[],M=d/n;let x=0;d===0&&o===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(A+x,1-M),v.push(c++)}h.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){const M=h[d][v+1],x=h[d][v],C=h[d+1][v],A=h[d+1][v+1];(d!==0||o>0)&&m.push(M,x,A),(d!==n-1||l<Math.PI)&&m.push(x,C,A)}this.setIndex(m),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fo extends Ce{constructor(t=new fc(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new St;let h=new E;const u=[],f=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(f,3)),this.setAttribute("uv",new le(m,2));function _(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),v(),d()}function p(M){h=t.getPointAt(M/e,h);const x=o.normals[M],C=o.binormals[M];for(let A=0;A<=i;A++){const R=A/i*Math.PI*2,P=Math.sin(R),T=-Math.cos(R);l.x=T*x.x+P*C.x,l.y=T*x.y+P*C.y,l.z=T*x.z+P*C.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let M=1;M<=e;M++)for(let x=1;x<=i;x++){const C=(i+1)*(M-1)+(x-1),A=(i+1)*M+(x-1),R=(i+1)*M+x,P=(i+1)*(M-1)+x;g.push(C,A,P),g.push(A,R,P)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=i;x++)c.x=M/e,c.y=x/i,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new fo(new Kp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class At extends Si{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rs extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $p extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const cr=new ie,wa=new E,Ta=new E;class pc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wa.setFromMatrixPosition(t.matrixWorld),e.position.copy(wa),Ta.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ta),e.updateMatrixWorld(),cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Aa=new ie,Pi=new E,lr=new E;class jp extends pc{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Pi),lr.copy(n.position),lr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lr),n.updateMatrixWorld(),i.makeTranslation(-Pi.x,-Pi.y,-Pi.z),Aa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa)}}class _i extends Rs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jp extends pc{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qp extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Jp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tm extends Rs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class em{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ba(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ba();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ba(){return performance.now()}const Ra=new ie;class nm{constructor(t,e,n=0,i=1/0){this.ray=new so(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ra.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ra),this}intersectObject(t,e=!0,n=[]){return Kr(t,this,n,e),n.sort(Ca),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Kr(t[i],this,n,e);return n.sort(Ca),n}}function Ca(s,t){return s.distance-t.distance}function Kr(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Kr(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$r}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$r);class im{constructor(){this.ctx=null,this.initialized=!1,this.engineGain=null,this.engineOsc=null,this.radioOscillators=[],this.radioInterval=null,this.radioStations=[{name:"FLASH FM 105.8",genre:"pop",bpm:120,key:0},{name:"WAVE 103",genre:"synthwave",bpm:110,key:5},{name:"V-ROCK",genre:"rock",bpm:130,key:7},{name:"RADIO ESPANTOSO",genre:"latin",bpm:115,key:3}],this.currentStationIndex=0,this.isRadioPlaying=!1,this.sirenOsc=null,this.sirenGain=null,this.sirenInterval=null}init(){if(this.initialized)return;const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.initialized=!0}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playShoot(t="pistol"){if(!this.initialized)return;this.resume();const e=this.ctx.currentTime;if(t==="fist"){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(120,e),n.frequency.exponentialRampToValueAtTime(30,e+.12),i.gain.setValueAtTime(.4,e),i.gain.exponentialRampToValueAtTime(.01,e+.12),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.12);return}if(t==="pistol")this.playNoise(.12,1800,150,.5),this.playTone(320,40,.15,"sawtooth",.4);else if(t==="smg")this.playNoise(.08,2600,200,.4),this.playTone(380,50,.08,"sawtooth",.3);else if(t==="m4")this.playNoise(.2,1200,80,.6),this.playTone(220,30,.22,"sawtooth",.6),this.playTone(90,25,.28,"triangle",.8);else if(t==="shotgun")this.playNoise(.35,900,60,.8),this.playTone(180,20,.35,"sawtooth",.7),this.playTone(80,20,.45,"sine",1);else if(t==="rpg"){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(90,e),n.frequency.exponentialRampToValueAtTime(450,e+.4),i.gain.setValueAtTime(.6,e),i.gain.exponentialRampToValueAtTime(.01,e+.45),n.connect(i),i.connect(this.ctx.destination),n.start(e),n.stop(e+.45)}}playExplosion(){this.initialized&&(this.resume(),this.ctx.currentTime,this.playTone(120,18,1.2,"triangle",1),this.playNoise(1.4,400,30,.9))}playHitSound(t=!1){this.initialized&&(this.resume(),t?(this.playNoise(.08,500,100,.3),this.playTone(160,40,.09,"sine",.25)):(this.playTone(1800+Math.random()*800,600,.1,"sine",.3),this.playNoise(.05,3e3,1200,.3)))}playReload(){this.initialized&&(this.resume(),this.ctx.currentTime,this.playTone(800,300,.05,"triangle",.2),setTimeout(()=>{this.playTone(1200,600,.08,"sawtooth",.25)},280))}playMoney(){if(!this.initialized)return;this.resume();const t=this.ctx.currentTime;[987.77,1318.51].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.frequency.setValueAtTime(e,t+n*.08),r.gain.setValueAtTime(.2,t+n*.08),r.gain.exponentialRampToValueAtTime(.01,t+n*.08+.15),i.connect(r),r.connect(this.ctx.destination),i.start(t+n*.08),i.stop(t+n*.08+.15)})}playWantedAlert(){if(!this.initialized)return;this.resume();const t=this.ctx.currentTime;[440,554.37,659.25,880].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(e,t+n*.09),r.gain.setValueAtTime(.25,t+n*.09),r.gain.exponentialRampToValueAtTime(.01,t+n*.09+.18),i.connect(r),r.connect(this.ctx.destination),i.start(t+n*.09),i.stop(t+n*.09+.18)})}startEngineSound(){if(!this.initialized||this.engineOsc)return;this.resume();const t=this.ctx.currentTime;this.engineOsc=this.ctx.createOscillator(),this.engineOsc.type="sawtooth",this.engineOsc.frequency.setValueAtTime(55,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(260,t),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.25,t),this.engineOsc.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.ctx.destination),this.engineOsc.start(t)}updateEngine(t){if(!this.engineOsc||!this.engineFilter)return;const n=45+t*180;this.engineOsc.frequency.setTargetAtTime(n,this.ctx.currentTime,.08),this.engineFilter.frequency.setTargetAtTime(200+t*550,this.ctx.currentTime,.08)}stopEngineSound(){if(this.engineOsc){try{this.engineOsc.stop(),this.engineOsc.disconnect()}catch{}this.engineOsc=null}}playHorn(){if(!this.initialized)return;this.resume();const t=this.ctx.currentTime;[440,550].forEach(e=>{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(e,t),i.gain.setValueAtTime(.3,t),i.gain.exponentialRampToValueAtTime(.01,t+.45),n.connect(i),i.connect(this.ctx.destination),n.start(t),n.stop(t+.45)})}playTireSkid(){this.initialized&&this.playNoise(.2,3200,800,.2)}playCrash(){this.initialized&&(this.playNoise(.4,800,100,.7),this.playTone(120,30,.3,"sawtooth",.5))}startPoliceSiren(){if(!this.initialized||this.sirenOsc)return;this.resume();const t=this.ctx.currentTime;this.sirenOsc=this.ctx.createOscillator(),this.sirenGain=this.ctx.createGain(),this.sirenOsc.type="sine",this.sirenOsc.frequency.setValueAtTime(650,t),this.sirenGain.gain.setValueAtTime(.25,t),this.sirenOsc.connect(this.sirenGain),this.sirenGain.connect(this.ctx.destination),this.sirenOsc.start(t);let e=!1;this.sirenInterval=setInterval(()=>{if(!this.sirenOsc)return;const n=e?650:1050;this.sirenOsc.frequency.setTargetAtTime(n,this.ctx.currentTime,.2),e=!e},450)}stopPoliceSiren(){if(this.sirenInterval&&(clearInterval(this.sirenInterval),this.sirenInterval=null),this.sirenOsc){try{this.sirenOsc.stop(),this.sirenOsc.disconnect()}catch{}this.sirenOsc=null}}startRadio(){if(!this.initialized)return;this.resume(),this.stopRadio(),this.isRadioPlaying=!0;const t=this.radioStations[this.currentStationIndex],e=60/t.bpm*1e3;let n=0;const i={pop:[220,246.94,277.18,329.63,369.99,440],synthwave:[196,220,246.94,293.66,329.63,392],rock:[164.81,196,220,246.94,293.66,329.63],latin:[261.63,293.66,329.63,349.23,392,440]},r=i[t.genre]||i.pop;this.radioInterval=setInterval(()=>{if(!this.isRadioPlaying||!this.ctx)return;const o=this.ctx.currentTime;n=(n+1)%16,n%4===0?(this.playTone(r[0]/2,r[0]/4,.18,"sawtooth",.18),this.playNoise(.04,3e3,1500,.08)):n%2===0?this.playNoise(.12,1200,200,.14):this.playNoise(.03,5e3,3e3,.06);const a=n*2%r.length,l=r[a]*(n%8<4?1:1.5),c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=t.genre==="synthwave"?"sawtooth":"triangle",c.frequency.setValueAtTime(l,o),h.gain.setValueAtTime(.12,o),h.gain.exponentialRampToValueAtTime(.001,o+.22);const u=this.ctx.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(1400+Math.sin(n)*600,o),c.connect(u),u.connect(h),h.connect(this.ctx.destination),c.start(o),c.stop(o+.23)},e/4)}nextStation(){return this.currentStationIndex=(this.currentStationIndex+1)%this.radioStations.length,this.isRadioPlaying&&this.startRadio(),this.radioStations[this.currentStationIndex].name}stopRadio(){this.isRadioPlaying=!1,this.radioInterval&&(clearInterval(this.radioInterval),this.radioInterval=null)}playTone(t,e,n,i="sine",r=.3){if(!this.ctx)return;const o=this.ctx.currentTime,a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type=i,a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(Math.max(10,e),o+n),l.gain.setValueAtTime(r,o),l.gain.exponentialRampToValueAtTime(.001,o+n),a.connect(l),l.connect(this.ctx.destination),a.start(o),a.stop(o+n)}playNoise(t,e,n=100,i=.3){if(!this.ctx)return;const r=this.ctx.sampleRate*t,o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),a=o.getChannelData(0);for(let u=0;u<r;u++)a[u]=Math.random()*2-1;const l=this.ctx.createBufferSource();l.buffer=o;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(e,this.ctx.currentTime),c.Q.setValueAtTime(n,this.ctx.currentTime);const h=this.ctx.createGain();h.gain.setValueAtTime(i,this.ctx.currentTime),h.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+t),l.connect(c),c.connect(h),h.connect(this.ctx.destination),l.start(this.ctx.currentTime),l.stop(this.ctx.currentTime+t)}}const Pt=new im;class ln{static createRoadTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#22232a",e.fillRect(0,0,512,512);for(let i=0;i<2e3;i++)e.fillStyle=Math.random()>.5?"rgba(255,255,255,0.02)":"rgba(0,0,0,0.04)",e.fillRect(Math.random()*512,Math.random()*512,2,2);e.fillStyle="#ffbe0b",e.fillRect(250,0,4,512),e.fillRect(258,0,4,512),e.fillStyle="#ffffff",e.setLineDash([28,28]),e.lineWidth=4,e.strokeStyle="rgba(255,255,255,0.7)",e.beginPath(),e.moveTo(128,0),e.lineTo(128,512),e.moveTo(384,0),e.lineTo(384,512),e.stroke(),e.fillStyle="rgba(255,255,255,0.5)",e.fillRect(10,0,4,512),e.fillRect(498,0,4,512);const n=new si(t);return n.wrapS=We,n.wrapT=We,n}static createSidewalkTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#b0b2be",e.fillRect(0,0,256,256),e.strokeStyle="#858794",e.lineWidth=3,e.strokeRect(4,4,124,124),e.strokeRect(128,4,124,124),e.strokeRect(4,128,124,124),e.strokeRect(128,128,124,124);const n=new si(t);return n.wrapS=We,n.wrapT=We,n}static createSandTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#f4d06f",e.fillRect(0,0,256,256);for(let i=0;i<3e3;i++)e.fillStyle=Math.random()>.5?"rgba(255,255,255,0.06)":"rgba(212, 163, 89, 0.12)",e.fillRect(Math.random()*256,Math.random()*256,2,2);const n=new si(t);return n.wrapS=We,n.wrapT=We,n}static createBuildingTexture(t=0){const e=document.createElement("canvas");e.width=512,e.height=512;const n=e.getContext("2d"),i=[{wall:"#fcd5ce",trim:"#ff2a85",win:"#112233",winLit:"#ffbe0b"},{wall:"#cbf3f0",trim:"#00f0ff",win:"#0d1b2a",winLit:"#00f0ff"},{wall:"#ffe5ec",trim:"#962eff",win:"#161a1d",winLit:"#ff0055"},{wall:"#1b263b",trim:"#e0e1dd",win:"#0d1b2a",winLit:"#ffea00"}],r=i[t%i.length];n.fillStyle=r.wall,n.fillRect(0,0,512,512),n.fillStyle=r.trim,n.fillRect(0,0,20,512),n.fillRect(492,0,20,512),n.fillRect(246,0,20,512);const o=8,a=6,l=40,c=34,h=40,u=30;for(let m=0;m<o;m++)for(let g=0;g<a;g++){const _=35+g*(l+h),p=30+m*(c+u);n.fillStyle="#222",n.fillRect(_-2,p-2,l+4,c+4);const d=Math.random()>.45;n.fillStyle=d?r.winLit:r.win,n.fillRect(_,p,l,c),d&&(n.fillStyle="rgba(255,255,255,0.4)",n.fillRect(_+2,p+2,l/2,c/2))}const f=new si(e);return f.wrapS=We,f.wrapT=We,f}static createNeonSignTexture(t,e="#ff2a85",n=""){const i=document.createElement("canvas");i.width=512,i.height=128;const r=i.getContext("2d");return r.fillStyle="#0a0a10",r.fillRect(0,0,512,128),r.lineWidth=6,r.strokeStyle=e,r.strokeRect(6,6,500,116),r.font='900 48px "Impact", "Arial Black", sans-serif',r.textAlign="center",r.textBaseline="middle",r.shadowColor=e,r.shadowBlur=24,r.fillStyle=e,r.fillText(t,256,n?52:64),r.shadowBlur=4,r.fillStyle="#ffffff",r.fillText(t,256,n?52:64),n&&(r.font='700 20px "Arial", sans-serif',r.shadowBlur=12,r.fillStyle="#00f0ff",r.fillText(n,256,96)),new si(i)}static createPoliceCarTexture(){const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");return e.fillStyle="#ffffff",e.fillRect(0,0,512,256),e.fillStyle="#0a5c36",e.fillRect(0,80,512,60),e.fillStyle="#ffbe0b",e.beginPath(),e.arc(256,110,20,0,Math.PI*2),e.fill(),e.font='900 36px "Arial Black", sans-serif',e.fillStyle="#ffffff",e.textAlign="center",e.fillText("POLICE",160,122),e.fillText("V.C.P.D.",360,122),new si(t)}}class sm{constructor(t){this.scene=t,this.avenueX=[-180,-60,60],this.streetZ=[-200,-100,0,100,200],this.intersections=[],this.zebraCrossings=[],this.sidewalkNodes=[],this.sidewalkGraph=new Map,this.initIntersections(),this.buildZebraCrossings(),this.buildTrafficLightModels(),this.buildSidewalkGraph()}initIntersections(){let t=0;this.avenueX.forEach(e=>{this.streetZ.forEach(n=>{const i=(Math.abs(e)*.08+Math.abs(n)*.06)%28;this.intersections.push({id:t++,x:e,z:n,state:"AVE_GREEN",timer:i,durations:{AVE_GREEN:13,AVE_YELLOW:3,STREET_GREEN:11,STREET_YELLOW:3},lightMeshes:[],pointLight:null})})})}buildZebraCrossings(){const t=new At({color:16119285,roughness:.45,metalness:.1}),e=3.4,n=.85,i=.02,r=.65;this.intersections.forEach(o=>{const{x:a,z:l,id:c}=o,h=[];l>-200&&h.push({type:"across_avenue",side:"north",center:new E(a,.06,l-10),spanAxis:"x"}),l<200&&h.push({type:"across_avenue",side:"south",center:new E(a,.06,l+10),spanAxis:"x"}),a>-180&&h.push({type:"across_street",side:"west",center:new E(a-10,.06,l),spanAxis:"z"}),a<60&&h.push({type:"across_street",side:"east",center:new E(a+10,.06,l),spanAxis:"z"}),h.forEach((u,f)=>{const m=new qt,g=8,_=-10.5/2;for(let p=0;p<g;p++){const d=_+p*(n+r);let v;if(u.spanAxis==="x"){v=new at(n,i,e);const M=new k(v,t);M.position.set(d,0,0),M.receiveShadow=!0,m.add(M)}else{v=new at(e,i,n);const M=new k(v,t);M.position.set(0,0,d),M.receiveShadow=!0,m.add(M)}}m.position.copy(u.center),this.scene.add(m),this.zebraCrossings.push({id:`${c}_${u.side}`,intersectionId:c,type:u.type,side:u.side,center:u.center,box:new Ee().setFromCenterAndSize(u.center.clone().setY(1),u.spanAxis==="x"?new E(16,2,4):new E(4,2,16))})})})}buildTrafficLightModels(){const t=new At({color:2237996,metalness:.85,roughness:.25}),e=new At({color:1118999,metalness:.7,roughness:.4});this.intersections.forEach(n=>{const{x:i,z:r}=n;[{pos:new E(i-10.2,0,r-10.2),armRotY:0},{pos:new E(i+10.2,0,r+10.2),armRotY:Math.PI}].forEach(l=>{const c=new qt;c.position.copy(l.pos),c.rotation.y=l.armRotY;const h=new pe(.16,.24,6.2,8),u=new k(h,t);u.position.y=3.1,u.castShadow=!0,c.add(u);const f=new pe(.32,.38,.4,8),m=new k(f,t);m.position.y=.2,c.add(m);const g=new pe(.12,.14,4.2,8),_=new k(g,t);_.rotation.z=Math.PI/2,_.position.set(2.1,5.8,0),c.add(_);const p=this.createSignalHead(e,"ave");p.position.set(3.4,5.3,0),p.rotation.y=Math.PI,c.add(p);const d=this.createSignalHead(e,"street");d.position.set(1.4,5.3,0),d.rotation.y=-Math.PI/2,c.add(d);const v=new at(.35,.55,.25),M=new k(v,e);M.position.set(.2,2.3,.2),c.add(M);const x=new ne({color:65348}),C=new k(new ue(.22,.22),x);C.position.set(.2,2.45,.33),c.add(C);const A=new ne({color:16711714}),R=new k(new ue(.22,.22),A);R.position.set(.2,2.18,.33),c.add(R),this.scene.add(c),n.lightMeshes.push({aveRed:p.userData.red,aveYellow:p.userData.yellow,aveGreen:p.userData.green,streetRed:d.userData.red,streetYellow:d.userData.yellow,streetGreen:d.userData.green,pedWalk:C,pedDont:R})});const a=new _i(65382,.8,22);a.position.set(i,4.5,r),this.scene.add(a),n.pointLight=a})}createSignalHead(t,e){const n=new qt,i=new at(.6,1.45,.42),r=new k(i,t);n.add(r);const o=new Be(.16,12,12),a=new pe(.2,.2,.2,8,1,!0,0,Math.PI);a.rotateX(Math.PI/2);const l=new ne({color:2228224}),c=new k(o,l);c.position.set(0,.46,.16),n.add(c);const h=new ne({color:2234368}),u=new k(o,h);u.position.set(0,0,.16),n.add(u);const f=new ne({color:8712}),m=new k(o,f);return m.position.set(0,-.46,.16),n.add(m),[.46,0,-.46].forEach(g=>{const _=new k(a,t);_.position.set(0,g+.08,.2),n.add(_)}),n.userData={type:e,red:c,yellow:u,green:m},n}buildSidewalkGraph(){let t=0;const e=(r,o="sidewalk",a=null)=>{const l=t++,c={id:l,pos:r,type:o,intersectionId:a,neighbors:[]};return this.sidewalkNodes.push(c),this.sidewalkGraph.set(l,c),c},n=(r,o,a=!1,l=null,c=null)=>{!r||!o||(r.neighbors.push({targetId:o.id,isCrosswalk:a,crosswalkSide:l,intersectionId:c}),o.neighbors.push({targetId:r.id,isCrosswalk:a,crosswalkSide:l,intersectionId:c}))},i=new Map;this.intersections.forEach(r=>{const{x:o,z:a,id:l}=r,c=e(new E(o-10.2,.5,a-10.2),"corner",l),h=e(new E(o+10.2,.5,a-10.2),"corner",l),u=e(new E(o-10.2,.5,a+10.2),"corner",l),f=e(new E(o+10.2,.5,a+10.2),"corner",l);i.set(l,{nw:c,ne:h,sw:u,se:f}),n(c,h,a>-200,"north",l),n(u,f,a<200,"south",l),n(c,u,o>-180,"west",l),n(h,f,o<60,"east",l)}),this.avenueX.forEach((r,o)=>{for(let a=0;a<this.streetZ.length-1;a++){const l=this.intersections.find(p=>p.x===r&&p.z===this.streetZ[a]),c=this.intersections.find(p=>p.x===r&&p.z===this.streetZ[a+1]),h=i.get(l.id),u=i.get(c.id),f=e(new E(r-10.2,.5,this.streetZ[a]+35)),m=e(new E(r-10.2,.5,this.streetZ[a+1]-35));n(h.sw,f),n(f,m),n(m,u.nw);const g=e(new E(r+10.2,.5,this.streetZ[a]+35)),_=e(new E(r+10.2,.5,this.streetZ[a+1]-35));n(h.se,g),n(g,_),n(_,u.ne)}}),this.streetZ.forEach(r=>{for(let o=0;o<this.avenueX.length-1;o++){const a=this.intersections.find(_=>_.x===this.avenueX[o]&&_.z===r),l=this.intersections.find(_=>_.x===this.avenueX[o+1]&&_.z===r),c=i.get(a.id),h=i.get(l.id),u=e(new E(this.avenueX[o]+35,.5,r-10.2)),f=e(new E(this.avenueX[o+1]-35,.5,r-10.2));n(c.ne,u),n(u,f),n(f,h.nw);const m=e(new E(this.avenueX[o]+35,.5,r+10.2)),g=e(new E(this.avenueX[o+1]-35,.5,r+10.2));n(c.se,m),n(m,g),n(g,h.sw)}})}update(t){this.intersections.forEach(e=>{e.timer+=t;const n=e.durations[e.state];e.timer>=n&&(e.timer=0,e.state==="AVE_GREEN"?e.state="AVE_YELLOW":e.state==="AVE_YELLOW"?e.state="STREET_GREEN":e.state==="STREET_GREEN"?e.state="STREET_YELLOW":e.state==="STREET_YELLOW"&&(e.state="AVE_GREEN"));const i=e.state==="AVE_GREEN",r=e.state==="AVE_YELLOW",o=e.state==="STREET_GREEN"||e.state==="STREET_YELLOW",a=e.state==="STREET_GREEN",l=e.state==="STREET_YELLOW",c=e.state==="AVE_GREEN"||e.state==="AVE_YELLOW";e.lightMeshes.forEach(h=>{h.aveRed.material.color.setHex(o?16711714:2228224),h.aveYellow.material.color.setHex(r?16755200:2234368),h.aveGreen.material.color.setHex(i?65348:8712),h.streetRed.material.color.setHex(c?16711714:2228224),h.streetYellow.material.color.setHex(l?16755200:2234368),h.streetGreen.material.color.setHex(a?65348:8712),h.pedWalk.material.color.setHex(o||c?65382:8704),h.pedDont.material.color.setHex(i||a?16711731:2228224)}),e.pointLight&&(i?e.pointLight.color.setHex(65382):r||l?e.pointLight.color.setHex(16755200):e.pointLight.color.setHex(61695))})}shouldVehicleStopForLight(t,e){const n=new E(0,0,-1).applyAxisAngle(new E(0,1,0),e),i=Math.abs(n.z)>=Math.abs(n.x);for(let r=0;r<this.intersections.length;r++){const o=this.intersections[r],a=o.x-t.x,l=o.z-t.z;if(a*a+l*l>35*35)continue;const h=new E(a,0,l),u=h.dot(n);if(u>2.5&&u<26){if(Math.abs(h.x*n.z-h.z*n.x)>9)continue;if(i){if(o.state==="STREET_GREEN"||o.state==="STREET_YELLOW"||o.state==="AVE_YELLOW")return{shouldStop:!0,reason:"red_light",dist:u,intersection:o}}else if(o.state==="AVE_GREEN"||o.state==="AVE_YELLOW"||o.state==="STREET_YELLOW")return{shouldStop:!0,reason:"red_light",dist:u,intersection:o}}}return{shouldStop:!1}}canPedestrianCross(t,e){const n=this.intersections.find(i=>i.id===t);return n?e==="north"||e==="south"?n.state==="STREET_GREEN":e==="east"||e==="west"?n.state==="AVE_GREEN":!0:!0}}class rm{constructor(t){this.scene=t,this.colliders=[],this.roadNetwork=[],this.pedestrianPaths=[],this.interactivityZones=[],this.lampLights=[],this.palmTrees=[],this.oceanWater=null,this.initMaterials(),this.buildGroundAndOcean(),this.buildRoadsAndSidewalks(),this.traffic=new sm(this.scene),this.buildBuildings(),this.buildStreetProps(),this.buildInteractiveLocations()}initMaterials(){this.roadTex=ln.createRoadTexture(),this.roadTex.repeat.set(1,10),this.roadMat=new At({map:this.roadTex,roughness:.8,metalness:.1}),this.sidewalkTex=ln.createSidewalkTexture(),this.sidewalkTex.repeat.set(4,20),this.sidewalkMat=new At({map:this.sidewalkTex,roughness:.9}),this.sandTex=ln.createSandTexture(),this.sandTex.repeat.set(20,20),this.sandMat=new At({map:this.sandTex,roughness:.95}),this.grassMat=new At({color:4028477,roughness:.85}),this.oceanMat=new At({color:43212,roughness:.1,metalness:.3,transparent:!0,opacity:.85})}buildGroundAndOcean(){const t=new ue(600,600),e=new k(t,this.grassMat);e.rotation.x=-Math.PI/2,e.position.set(-50,-.1,0),e.receiveShadow=!0,this.scene.add(e);const n=new ue(100,600),i=new k(n,this.sandMat);i.rotation.x=-Math.PI/2,i.position.set(150,0,0),i.receiveShadow=!0,this.scene.add(i);const r=new ue(800,800,64,64);this.oceanWater=new k(r,this.oceanMat),this.oceanWater.rotation.x=-Math.PI/2,this.oceanWater.position.set(500,-1.2,0),this.scene.add(this.oceanWater)}buildRoadsAndSidewalks(){const t=[-180,-60,60],e=[-200,-100,0,100,200],n=16,i=4,r=416,o=256;t.forEach(p=>{const d=new ue(n,r),v=new k(d,this.roadMat);v.rotation.x=-Math.PI/2,v.position.set(p,.05,0),v.receiveShadow=!0,this.scene.add(v),[-1,1].forEach(M=>{const x=new ue(i,r),C=new k(x,this.sidewalkMat);C.rotation.x=-Math.PI/2,C.position.set(p+M*(n/2+i/2),.12,0),C.receiveShadow=!0,this.scene.add(C);for(let A=-190;A<=190;A+=38)this.pedestrianPaths.push(new E(p+M*(n/2+i/2),.5,A))}),this.roadNetwork.push({start:new E(p-4,0,196),end:new E(p-4,0,-196),dir:new E(0,0,-1),type:"avenue"}),this.roadNetwork.push({start:new E(p+4,0,-196),end:new E(p+4,0,196),dir:new E(0,0,1),type:"avenue"})}),e.forEach(p=>{const d=new ue(o,n),v=new k(d,this.roadMat);v.rotation.x=-Math.PI/2,v.position.set(-60,.06,p),v.receiveShadow=!0,this.scene.add(v),[-1,1].forEach(M=>{const x=new ue(o,i),C=new k(x,this.sidewalkMat);C.rotation.x=-Math.PI/2,C.position.set(-60,.12,p+M*(n/2+i/2)),C.receiveShadow=!0,this.scene.add(C);for(let A=-170;A<=50;A+=36)this.pedestrianPaths.push(new E(A,.5,p+M*(n/2+i/2)))}),this.roadNetwork.push({start:new E(-176,0,p+4),end:new E(56,0,p+4),dir:new E(1,0,0),type:"street"}),this.roadNetwork.push({start:new E(56,0,p-4),end:new E(-176,0,p-4),dir:new E(-1,0,0),type:"street"})});const a=new At({color:2632756,metalness:.6,roughness:.4}),l=new k(new ue(264,i),this.sidewalkMat);l.rotation.x=-Math.PI/2,l.position.set(-60,.12,-210),l.receiveShadow=!0,this.scene.add(l);const c=new k(new ue(264,i),this.sidewalkMat);c.rotation.x=-Math.PI/2,c.position.set(-60,.12,210),c.receiveShadow=!0,this.scene.add(c);const h=new k(new ue(i,424),this.sidewalkMat);h.rotation.x=-Math.PI/2,h.position.set(-190,.12,0),h.receiveShadow=!0,this.scene.add(h);const u=new k(new ue(i,424),this.sidewalkMat);u.rotation.x=-Math.PI/2,u.position.set(70,.12,0),u.receiveShadow=!0,this.scene.add(u);const f=new k(new at(266,.35,.45),a);f.position.set(-60,.18,-212.2),f.receiveShadow=!0,this.scene.add(f);const m=new k(new at(266,.35,.45),a);m.position.set(-60,.18,212.2),m.receiveShadow=!0,this.scene.add(m);const g=new k(new at(.45,.35,426),a);g.position.set(-192.2,.18,0),g.receiveShadow=!0,this.scene.add(g);const _=new k(new at(.45,.35,426),a);_.position.set(72.2,.18,0),_.receiveShadow=!0,this.scene.add(_)}buildBuildings(){[{name:"THE MALIBU CLUB",color:"#ff2a85",z:-150,h:28,style:0},{name:"OCEAN VIEW HOTEL",color:"#00f0ff",z:-50,h:32,style:1},{name:"VERONA HOTEL",color:"#962eff",z:50,h:26,style:2},{name:"COLON HOTEL",color:"#ffbe0b",z:150,h:30,style:0}].forEach(i=>{this.createBuilding(95,i.z,28,50,i.h,i.style,i.name,i.color)}),[{x:0,z:-150,w:60,d:60,h:42,style:1},{x:0,z:-50,w:60,d:60,h:56,style:3},{x:0,z:50,w:60,d:60,h:48,style:0},{x:0,z:150,w:60,d:60,h:38,style:2}].forEach(i=>{this.createBuilding(i.x,i.z,i.w,i.d,i.h,i.style)}),[{x:-120,z:-150,w:65,d:65,h:88,style:3,name:"VICE BANK TOWER",color:"#00f0ff"},{x:-120,z:-50,w:60,d:60,h:105,style:3,name:"CORONADO PLAZA",color:"#ff2a85"},{x:-120,z:50,w:65,d:65,h:72,style:3},{x:-120,z:150,w:60,d:60,h:62,style:3}].forEach(i=>{this.createBuilding(i.x,i.z,i.w,i.d,i.h,i.style,i.name,i.color)})}createBuilding(t,e,n,i,r,o=0,a=null,l="#ff2a85"){const c=new at(n,r,i),h=ln.createBuildingTexture(o);h.repeat.set(n/20,r/15);const u=new At({map:h,roughness:.7,metalness:.2}),f=new k(c,u);f.position.set(t,r/2,e),f.castShadow=!0,f.receiveShadow=!0,this.scene.add(f);const m=new at(n+1,1.5,i+1),g=new At({color:2236970}),_=new k(m,g);if(_.position.set(t,r+.75,e),this.scene.add(_),a){const d=ln.createNeonSignTexture(a,l),v=new ue(n*.7,8),M=new ne({map:d,transparent:!0}),x=new k(v,M);x.position.set(t,r*.75,e-i/2-.2),this.scene.add(x);const C=new _i(l,1.5,30);C.position.set(t,r*.75,e-i/2-2),this.scene.add(C)}const p=new Ee;p.setFromCenterAndSize(new E(t,r/2,e),new E(n,r,i)),this.colliders.push({box:p,type:"building",name:a||"Building"})}isRoadOrClearZone(t,e,n=4){const i=[-180,-60,60],r=[-200,-100,0,100,200],o=8;for(let a=0;a<i.length;a++){const l=i[a];if(Math.abs(t-l)<o+n&&e>=-208-n&&e<=208+n)return!0}for(let a=0;a<r.length;a++){const l=r[a];if(Math.abs(e-l)<o+n&&t>=-188-n&&t<=68+n)return!0}return!1}buildStreetProps(){for(let e=-215;e<=215;e+=24)this.createPalmTree(122,e),this.createPalmTree(145,e);const t=[-165,-150,-135,-65,-50,-35,35,50,65,135,150,165];t.forEach(e=>{this.isRoadOrClearZone(76,e,5)||this.createPalmTree(76,e)}),[-150,-50,50,150].forEach(e=>{[-26,26].forEach(n=>{this.isRoadOrClearZone(n,e,5)||this.createPalmTree(n,e)})}),[-150,-50,50,150].forEach(e=>{[-90,-150].forEach(n=>{this.isRoadOrClearZone(n,e,5)||this.createPalmTree(n,e)})}),[-160,-100,-20,40].forEach(e=>{this.createPalmTree(e,-225),this.createPalmTree(e,225)}),[-160,-80,80,160].forEach(e=>{this.createPalmTree(-204,e)}),t.forEach(e=>{Math.abs(e%30)<10&&(this.isRoadOrClearZone(71,e,2.5)||this.createStreetLamp(71,e))}),[-170,-50].forEach(e=>{[-150,-50,50,150].forEach(n=>{this.isRoadOrClearZone(e,n,2.5)||this.createStreetLamp(e,n)})}),[-200,-100,0,100,200].forEach(e=>{[-120,0].forEach(n=>{[-10,10].forEach(i=>{const r=e+i;this.isRoadOrClearZone(n,r,2)||this.createStreetLamp(n,r)})})})}createPalmTree(t,e){const n=new qt;n.position.set(t,0,e);const i=new dc([new E(0,0,0),new E(Math.random()*.6,6,Math.random()*.6),new E(Math.random()*1.5,12,Math.random()*1.2),new E(Math.random()*2,16,Math.random()*1.8)]),r=new fo(i,16,.55,8,!1),o=new At({color:9132587,roughness:.9}),a=new k(r,o);a.castShadow=!0,n.add(a);const l=i.getPoint(1),c=9,h=new At({color:2984526,roughness:.7,side:$e});for(let f=0;f<c;f++){const m=f/c*Math.PI*2,g=new zi(1.6,7,4);g.translate(0,3.5,0),g.rotateX(Math.PI/2.6);const _=new k(g,h);_.position.copy(l),_.rotation.y=m,_.rotation.z=.2,n.add(_)}this.scene.add(n),this.palmTrees.push(n);const u=new Ee;u.setFromCenterAndSize(new E(t,4,e),new E(1.4,8,1.4)),this.colliders.push({box:u,type:"prop",name:"Palm Tree"})}createStreetLamp(t,e){const n=new qt;n.position.set(t,0,e);const i=new pe(.18,.24,9,8),r=new At({color:1710628,metalness:.8,roughness:.3}),o=new k(i,r);o.position.y=4.5,n.add(o);const a=new pe(.14,.14,2.5,8),l=new k(a,r);l.rotation.z=Math.PI/3,l.position.set(.9,8.8,0),n.add(l);const c=new Be(.45,8,8),h=new ne({color:16771743}),u=new k(c,h);u.position.set(1.8,8.5,0),n.add(u);const f=new _i(16771743,.9,22);f.position.set(1.8,8.2,0),n.add(f),this.lampLights.push(f),this.scene.add(n);const m=new Ee;m.setFromCenterAndSize(new E(t,4.5,e),new E(.8,9,.8)),this.colliders.push({box:m,type:"prop",name:"Lamp Post"})}buildInteractiveLocations(){this.createPayNSpray(-215,50),this.createAmmuNation(-215,-50),this.createPoliceHQ(-120,0)}createPayNSpray(t,e){const n=new at(22,12,28),i=new At({color:3357512,roughness:.6}),r=new k(n,i);r.position.set(t,6,e),this.scene.add(r);const o=ln.createNeonSignTexture("PAY 'N' SPRAY","#4dfc54","REPAIR & RESPRAY"),a=new ue(18,6),l=new ne({map:o,transparent:!0}),c=new k(a,l);c.position.set(t+11.1,8,e),c.rotation.y=Math.PI/2,this.scene.add(c);const h=new ue(12,8),u=new ne({color:328968}),f=new k(h,u);f.position.set(t+11.05,4,e),f.rotation.y=Math.PI/2,this.scene.add(f);const m=new Ee;m.setFromCenterAndSize(new E(t+5,3,e),new E(12,6,12)),this.interactivityZones.push({type:"pay_n_spray",box:m,position:new E(t+5,0,e),name:"Pay 'n' Spray"});const g=new Ee;g.setFromCenterAndSize(new E(t-3,6,e),new E(16,12,28)),this.colliders.push({box:g,type:"building",name:"Pay 'n' Spray"})}createAmmuNation(t,e){const n=new at(22,12,28),i=new At({color:4859944,roughness:.7}),r=new k(n,i);r.position.set(t,6,e),this.scene.add(r);const o=ln.createNeonSignTexture("AMMU-NATION","#ff0055","WEAPONS & AMMO"),a=new ue(18,6),l=new ne({map:o,transparent:!0}),c=new k(a,l);c.position.set(t+11.1,8,e),c.rotation.y=Math.PI/2,this.scene.add(c);const h=new Ee;h.setFromCenterAndSize(new E(t+14,2,e),new E(6,4,6)),this.interactivityZones.push({type:"ammunation",box:h,position:new E(t+14,.5,e),name:"Ammu-Nation"});const u=new uo(1.2,0),f=new ne({color:61695,wireframe:!0});this.ammuIcon=new k(u,f),this.ammuIcon.position.set(t+14,1.8,e),this.scene.add(this.ammuIcon);const m=new Ee;m.setFromCenterAndSize(new E(t,6,e),new E(22,12,28)),this.colliders.push({box:m,type:"building",name:"Ammu-Nation"})}createPoliceHQ(t,e){const n=new at(45,24,45),i=new At({color:2042167,roughness:.6}),r=new k(n,i);r.position.set(t,12,e),this.scene.add(r);const o=ln.createNeonSignTexture("POLICE DEPT","#00f0ff","VICE CITY DISTRICT 1"),a=new ue(24,6),l=new ne({map:o,transparent:!0}),c=new k(a,l);c.position.set(t,16,e+22.6),this.scene.add(c);const h=new Ee;h.setFromCenterAndSize(new E(t,12,e),new E(45,24,45)),this.colliders.push({box:h,type:"building",name:"Police Headquarters"})}update(t,e){this.traffic&&this.traffic.update(t),this.oceanWater&&(this.oceanWater.position.y=-1.2+Math.sin(e*1.5)*.15),this.ammuIcon&&(this.ammuIcon.rotation.y+=t*1.8,this.ammuIcon.position.y=1.8+Math.sin(e*3)*.25),this.palmTrees.forEach((n,i)=>{n.rotation.z=Math.sin(e*1.8+i)*.03})}}class om{constructor(t,e,n){this.scene=t,this.camera=e,this.domElement=n,this.mesh=new qt,this.mesh.position.set(70,0,-20),this.health=100,this.armor=100,this.money=2500,this.isDead=!1,this.velocity=new E,this.walkSpeed=5.2,this.sprintSpeed=10.5,this.jumpForce=7.5,this.gravity=20,this.isGrounded=!0,this.isAiming=!1,this.isSprinting=!1,this.inVehicle=!1,this.currentVehicle=null,this.cameraMode="FIRST_PERSON",this.cameraDistance=4.2,this.cameraPitch=0,this.cameraYaw=0,this.cameraTarget=new E,this.defaultFov=65,this.aimFov=48,this.recoilZ=0,this.recoilRotX=0,this.fpBobTimer=0,this.fpWeaponRig=null,this.fpWeapons=[],this.isCarjacking=!1,this.carjackingTimer=0,this.carjackingVehicle=null,this.ejectedDriver=null,this.carjackSound1=!1,this.carjackSound2=!1,this.onCarjackComplete=null,this.animTime=0,this.box=new Ee,this.buildTommyMesh(),this.buildFirstPersonRig(),this.scene.add(this.mesh),this.setupMouseLook()}buildTommyMesh(){const t=new At({color:50380,roughness:.7}),e=new At({color:2245768,roughness:.8}),n=new At({color:14724201,roughness:.7}),i=new At({color:1708298,roughness:.6}),r=new At({color:15658734,roughness:.4}),o=new at(.58,.76,.34);this.torso=new k(o,t),this.torso.position.y=1.25,this.torso.castShadow=!0,this.mesh.add(this.torso);const a=new Be(.23,8,8);this.head=new k(a,n),this.head.position.y=1.84,this.mesh.add(this.head);const l=new at(.38,.18,.38),c=new k(l,i);c.position.set(0,1.98,-.02),this.mesh.add(c);const h=new at(.32,.08,.12),u=new ne({color:328965}),f=new k(h,u);f.position.set(0,1.86,.19),this.mesh.add(f);const m=new at(.18,.65,.18);this.leftArm=new k(m,t),this.leftArm.position.set(-.39,1.2,0),this.mesh.add(this.leftArm),this.rightArm=new k(m,t),this.rightArm.position.set(.39,1.2,0),this.mesh.add(this.rightArm),this.weaponSlot=new qt,this.weaponSlot.position.set(0,-.32,.2),this.rightArm.add(this.weaponSlot),this.buildWeaponMeshes();const g=new at(.24,.82,.24);this.leftLeg=new k(g,e),this.leftLeg.position.set(-.16,.45,0),this.leftLeg.castShadow=!0,this.mesh.add(this.leftLeg),this.rightLeg=new k(g,e),this.rightLeg.position.set(.16,.45,0),this.rightLeg.castShadow=!0,this.mesh.add(this.rightLeg);const _=new at(.24,.14,.34),p=new k(_,r);p.position.set(0,-.42,.05),this.leftLeg.add(p);const d=new k(_,r);d.position.set(0,-.42,.05),this.rightLeg.add(d)}buildWeaponMeshes(){this.weaponMeshes=[];const t=new At({color:1710628,metalness:.8,roughness:.3}),e=new At({color:7224603,roughness:.7}),n=new qt;this.weaponSlot.add(n),this.weaponMeshes.push(n);const i=new qt,r=new k(new at(.08,.12,.35),t);r.position.set(0,0,.1);const o=new k(new at(.07,.18,.1),e);o.position.set(0,-.1,0),o.rotation.x=-.2,i.add(r,o),this.weaponSlot.add(i),this.weaponMeshes.push(i);const a=new qt,l=new k(new at(.1,.16,.45),t),c=new k(new at(.06,.28,.08),t);c.position.set(0,-.16,0),a.add(l,c),this.weaponSlot.add(a),this.weaponMeshes.push(a);const h=new qt,u=new k(new at(.1,.16,.65),t),f=new k(new pe(.03,.03,.4,8),t);f.rotateX(Math.PI/2),f.position.set(0,.02,.45);const m=new k(new at(.06,.3,.14),t);m.position.set(0,-.18,.1),m.rotation.x=.2;const g=new k(new at(.09,.18,.3),t);g.position.set(0,-.04,-.38),h.add(u,f,m,g),this.weaponSlot.add(h),this.weaponMeshes.push(h);const _=new qt,p=new k(new pe(.04,.04,.8,8),t);p.rotateX(Math.PI/2),p.position.set(0,.04,.3);const d=new k(new at(.1,.1,.25),e);d.position.set(0,0,.25);const v=new k(new at(.08,.16,.45),e);v.position.set(0,-.05,-.3),_.add(p,d,v),this.weaponSlot.add(_),this.weaponMeshes.push(_);const M=new qt,x=new k(new pe(.07,.07,1.1,10),t);x.rotateX(Math.PI/2);const C=new k(new zi(.16,.4,8),e);C.rotateX(-Math.PI/2),C.position.set(0,0,.65),M.add(x,C),this.weaponSlot.add(M),this.weaponMeshes.push(M),this.setHeldWeapon(3)}buildFirstPersonRig(){this.fpWeaponRig=new qt,this.camera.add(this.fpWeaponRig),this.scene.add(this.camera);const t=new At({color:1710628,metalness:.8,roughness:.3}),e=new At({color:7224603,roughness:.7}),n=new At({color:50380,roughness:.7}),i=new At({color:14724201,roughness:.7});this.fpWeapons=[];const r=()=>{const y=new qt,L=new k(new pe(.06,.07,.35,8),n);L.position.set(.12,-.16,.12),L.rotation.x=.4;const O=new k(new at(.07,.08,.1),i);return O.position.set(.08,-.05,-.05),y.add(L,O),y},o=new qt,a=new k(new at(.09,.1,.12),i);a.position.set(-.16,-.12,-.28);const l=new k(new at(.09,.1,.12),i);l.position.set(.16,-.12,-.28),o.add(a,l),this.fpWeaponRig.add(o),this.fpWeapons.push(o);const c=new qt,h=new k(new at(.05,.09,.3),t);h.position.set(0,0,-.05);const u=new k(new at(.05,.14,.08),e);u.position.set(0,-.09,.06),u.rotation.x=-.25,c.add(h,u,r()),this.fpWeaponRig.add(c),this.fpWeapons.push(c);const f=new qt,m=new k(new at(.07,.12,.38),t),g=new k(new at(.04,.22,.06),t);g.position.set(0,-.12,0),f.add(m,g,r()),this.fpWeaponRig.add(f),this.fpWeapons.push(f);const _=new qt,p=new k(new at(.07,.12,.52),t),d=new k(new pe(.02,.02,.35,8),t);d.rotateX(Math.PI/2),d.position.set(0,.02,-.4);const v=new k(new at(.04,.24,.1),t);v.position.set(0,-.14,.08),v.rotation.x=.2;const M=new k(new at(.03,.04,.15),t);M.position.set(0,.08,-.05),_.add(p,d,v,M,r()),this.fpWeaponRig.add(_),this.fpWeapons.push(_);const x=new qt,C=new k(new pe(.03,.03,.65,8),t);C.rotateX(Math.PI/2),C.position.set(0,.02,-.22);const A=new k(new at(.08,.08,.2),e);A.position.set(0,0,-.15),x.add(C,A,r()),this.fpWeaponRig.add(x),this.fpWeapons.push(x);const R=new qt,P=new k(new pe(.05,.05,.9,10),t);P.rotateX(Math.PI/2),P.position.set(0,0,.1);const T=new k(new zi(.12,.32,8),e);T.rotateX(-Math.PI/2),T.position.set(0,0,-.45),R.add(P,T,r()),this.fpWeaponRig.add(R),this.fpWeapons.push(R),this.fpRestPos=new E(.22,-.2,-.42),this.fpAimPos=new E(0,-.13,-.32),this.fpWeaponRig.position.copy(this.fpRestPos),this.setHeldWeapon(3)}toggleCameraMode(){return this.cameraMode==="FIRST_PERSON"?this.cameraMode="THIRD_PERSON":this.cameraMode==="THIRD_PERSON"?this.cameraMode="THIRD_SHOULDER":this.cameraMode="FIRST_PERSON",this.cameraMode}triggerRecoil(){this.recoilZ=.07,this.recoilRotX=.14}setHeldWeapon(t){this.weaponMeshes&&this.weaponMeshes.forEach((e,n)=>{e.visible=n===t}),this.fpWeapons&&this.fpWeapons.forEach((e,n)=>{e.visible=n===t})}setupMouseLook(){this.isPointerLocked=!1,this.isMouseDown=!1,this.lastMouseX=0,this.lastMouseY=0,document.addEventListener("pointerlockchange",()=>{this.isPointerLocked=document.pointerLockElement===this.domElement}),document.addEventListener("mousemove",t=>{let e=0,n=0;this.isPointerLocked?(e=t.movementX,n=t.movementY):this.isMouseDown&&(e=t.clientX-this.lastMouseX,n=t.clientY-this.lastMouseY,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY),(e!==0||n!==0)&&(this.cameraYaw-=e*.0024,this.cameraPitch-=n*.0024,this.cameraPitch=Math.max(-1.42,Math.min(1.42,this.cameraPitch)))}),this.domElement.addEventListener("mousedown",t=>{this.isMouseDown=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY,this.isPointerLocked||this.requestLock()}),window.addEventListener("mouseup",()=>{this.isMouseDown=!1})}requestLock(){try{this.domElement.requestPointerLock()}catch{}}startCarjacking(t,e){if(this.isCarjacking||this.inVehicle)return;this.isCarjacking=!0,this.carjackingTimer=0,this.carjackingVehicle=t,this.carjackSound1=!1,this.carjackSound2=!1,this.onCarjackComplete=e,this.velocity.set(0,0,0);const n=new E(-1.7,0,-.2).applyAxisAngle(new E(0,1,0),t.mesh.rotation.y);this.mesh.position.copy(t.mesh.position).add(n),this.mesh.position.y=0,this.mesh.rotation.y=t.mesh.rotation.y+Math.PI/2,this.torso.visible=!0,this.head.visible=!0,this.leftArm.visible=!0,this.rightArm.visible=!0,this.leftLeg.visible=!0,this.rightLeg.visible=!0,this.fpWeaponRig&&(this.fpWeaponRig.visible=!1);const i=t.type==="police",r=i?2046812:16726832,o=i?990254:2241382,a=new At({color:r}),l=new At({color:o}),c=new At({color:13935475}),h=new qt,u=new k(new at(.5,.7,.3),a);u.position.y=1.1;const f=new k(new Be(.2,8,8),c);f.position.y=1.6;const m=new k(new at(.16,.6,.16),a);m.position.set(-.35,1.1,0);const g=new k(new at(.16,.6,.16),a);g.position.set(.35,1.1,0);const _=new k(new at(.2,.75,.2),l);_.position.set(-.15,.4,0);const p=new k(new at(.2,.75,.2),l);p.position.set(.15,.4,0),h.add(u,f,m,g,_,p);const d=new E(-.4,.2,-.1).applyAxisAngle(new E(0,1,0),t.mesh.rotation.y);h.position.copy(t.mesh.position).add(d),h.rotation.y=t.mesh.rotation.y,this.scene.add(h),this.ejectedDriver=h}enterVehicle(t){this.inVehicle=!0,this.currentVehicle=t,t.isPlayerOccupied=!0,this.mesh.visible=!1,Pt.startEngineSound(),Pt.startRadio(),t.type!=="police"&&(t.sirenActive=!1,Pt.stopPoliceSiren())}exitVehicle(){if(!this.inVehicle||!this.currentVehicle)return;this.inVehicle=!1,this.currentVehicle.isPlayerOccupied=!1,this.currentVehicle.type==="police"&&(this.currentVehicle.sirenActive=!1,this.currentVehicle.sirenLight&&(this.currentVehicle.sirenLight.intensity=0),Pt.stopPoliceSiren());const t=new E(-2.2,0,0).applyAxisAngle(new E(0,1,0),this.currentVehicle.mesh.rotation.y);this.mesh.position.copy(this.currentVehicle.mesh.position).add(t),this.mesh.position.y=0,this.velocity.set(0,0,0),this.mesh.visible=!0,Pt.stopEngineSound(),Pt.stopRadio(),this.currentVehicle=null,this.camera&&(this.camera.fov=65,this.camera.updateProjectionMatrix()),this.smoothedCamPos=null,this.smoothedCamTarget=null}takeDamage(t){if(!this.isDead){if(this.armor>0){const e=Math.min(this.armor,t*.7);this.armor-=e,t-=e}this.health=Math.max(0,this.health-t),Pt.playHitSound(!0),this.health<=0&&this.die()}}healAndArmor(){this.health=100,this.armor=100,Pt.playMoney()}die(){this.isDead=!0,this.inVehicle&&this.exitVehicle(),this.mesh.rotation.x=-Math.PI/2,this.mesh.position.y=.2,setTimeout(()=>{this.health=100,this.armor=50,this.isDead=!1,this.mesh.rotation.x=0,this.mesh.position.set(60,0,-50),this.velocity.set(0,0,0)},3500)}update(t,e,n){if(this.inVehicle){this.updateVehicleCamera(t);return}if(this.isCarjacking){this.carjackingTimer+=t;const _=this.carjackingVehicle,p=new E(-3.5,2.2,1.8).applyAxisAngle(new E(0,1,0),_.mesh.rotation.y);if(this.camera.position.lerp(_.mesh.position.clone().add(p),t*8),this.camera.lookAt(_.mesh.position.clone().add(new E(0,1.1,0))),this.carjackingTimer<.4)this.leftArm.rotation.x=-Math.PI/2.2,this.leftArm.rotation.z=.3;else if(this.carjackingTimer<.8)this.rightArm.rotation.x=-Math.PI/2,this.rightArm.rotation.z=-.4,this.carjackSound1||(this.carjackSound1=!0,Pt.playShoot("fist"));else if(this.carjackingTimer<1.25){if(this.rightArm.rotation.x=.3,this.carjackSound2||(this.carjackSound2=!0,Pt.playHitSound(!0)),this.ejectedDriver){const d=_.mesh.position.clone().add(new E(-2.2,.2,.6).applyAxisAngle(new E(0,1,0),_.mesh.rotation.y));this.ejectedDriver.position.lerp(d,t*10),this.ejectedDriver.rotation.x=ae.lerp(this.ejectedDriver.rotation.x,-Math.PI/2,t*12),this.ejectedDriver.rotation.z=ae.lerp(this.ejectedDriver.rotation.z,.8,t*10)}}else if(this.carjackingTimer<1.55){const d=_.mesh.position.clone().add(new E(-.4,.2,-.1).applyAxisAngle(new E(0,1,0),_.mesh.rotation.y));this.mesh.position.lerp(d,t*10)}else if(this.isCarjacking=!1,this.enterVehicle(_),this.onCarjackComplete&&this.onCarjackComplete(),this.ejectedDriver){const d=this.ejectedDriver;let v=0;const M=setInterval(()=>{if(v+=.05,d&&d.parent){d.rotation.x=0,d.rotation.z=0;const x=new E(-1,0,-1).normalize().applyAxisAngle(new E(0,1,0),_.mesh.rotation.y);d.position.addScaledVector(x,.35)}v>5&&(clearInterval(M),d&&d.parent&&this.scene.remove(d))},50);this.ejectedDriver=null}return}if(this.isDead)return;const{forward:i,backward:r,left:o,right:a,sprint:l,jump:c,aiming:h}=e;this.isAiming=h,this.isSprinting=l&&i&&!h;const u=new E;i&&(u.z-=1),r&&(u.z+=1),o&&(u.x-=1),a&&(u.x+=1);const f=u.lengthSq()>0;if(f){u.normalize(),u.applyAxisAngle(new E(0,1,0),this.cameraYaw);const _=this.isSprinting?this.sprintSpeed:this.walkSpeed;this.velocity.x=u.x*_,this.velocity.z=u.z*_;const p=this.isAiming?this.cameraYaw:Math.atan2(u.x,u.z);this.mesh.rotation.y=p}else this.velocity.x*=.75,this.velocity.z*=.75,this.isAiming&&(this.mesh.rotation.y=this.cameraYaw);c&&this.isGrounded&&(this.velocity.y=this.jumpForce,this.isGrounded=!1),this.velocity.y-=this.gravity*t;const m=this.mesh.position.clone();m.x+=this.velocity.x*t,m.z+=this.velocity.z*t,m.y+=this.velocity.y*t,m.y<=0&&(m.y=0,this.velocity.y=0,this.isGrounded=!0),this.box.setFromCenterAndSize(new E(m.x,m.y+1,m.z),new E(.8,1.9,.8));let g=!1;if(n){for(let _=0;_<n.length;_++)if(this.box.intersectsBox(n[_].box)){g=!0;break}}if(g?this.mesh.position.y=m.y:this.mesh.position.copy(m),f&&this.isGrounded){this.animTime+=t*(this.isSprinting?14:9);const _=Math.sin(this.animTime);this.leftArm.rotation.x=_*.8,this.rightArm.rotation.x=this.isAiming?-Math.PI/2:-_*.8,this.leftLeg.rotation.x=-_*.9,this.rightLeg.rotation.x=_*.9}else this.leftArm.rotation.x*=.8,this.rightArm.rotation.x=this.isAiming?-Math.PI/2:this.rightArm.rotation.x*.8,this.leftLeg.rotation.x*=.8,this.rightLeg.rotation.x*=.8;this.isAiming&&(this.rightArm.rotation.x=-Math.PI/2+this.cameraPitch*.6,this.leftArm.rotation.x=-Math.PI/2.8),this.updateFootCamera(t)}updateFootCamera(t){if(this.cameraMode==="FIRST_PERSON"){this.torso.visible=!1,this.head.visible=!1,this.leftArm.visible=!1,this.rightArm.visible=!1,this.leftLeg.visible=!1,this.rightLeg.visible=!1,this.fpWeaponRig.visible=!0,this.camera.position.set(this.mesh.position.x,this.mesh.position.y+1.72,this.mesh.position.z),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.cameraYaw,this.camera.rotation.x=this.cameraPitch,this.camera.rotation.z=0,this.mesh.rotation.y=this.cameraYaw;const e=this.isAiming?this.fpAimPos:this.fpRestPos,n=this.isAiming?this.aimFov:this.defaultFov;this.camera.fov=ae.lerp(this.camera.fov,n,t*14),this.camera.updateProjectionMatrix();const i=Math.abs(this.velocity.x)>.5||Math.abs(this.velocity.z)>.5;let r=0,o=0;i&&this.isGrounded&&!this.isAiming&&(this.fpBobTimer+=t*(this.isSprinting?14:9),r=Math.sin(this.fpBobTimer)*.007,o=Math.abs(Math.cos(this.fpBobTimer))*.005),this.recoilZ=ae.lerp(this.recoilZ,0,t*12),this.recoilRotX=ae.lerp(this.recoilRotX,0,t*12),this.fpWeaponRig.position.x=ae.lerp(this.fpWeaponRig.position.x,e.x+r,t*16),this.fpWeaponRig.position.y=ae.lerp(this.fpWeaponRig.position.y,e.y+o,t*16),this.fpWeaponRig.position.z=ae.lerp(this.fpWeaponRig.position.z,e.z+this.recoilZ,t*16),this.fpWeaponRig.rotation.x=this.recoilRotX}else{this.torso.visible=!0,this.head.visible=!0,this.leftArm.visible=!0,this.rightArm.visible=!0,this.leftLeg.visible=!0,this.rightLeg.visible=!0,this.fpWeaponRig.visible=!1,this.camera.fov=ae.lerp(this.camera.fov,this.defaultFov,t*12),this.camera.updateProjectionMatrix();const e=this.cameraMode==="THIRD_SHOULDER",n=this.mesh.position.clone().add(new E(0,1.6,0)),i=e?2:this.isAiming?2.6:this.cameraDistance,r=e||this.isAiming?.65:0,o=n.x+Math.sin(this.cameraYaw)*Math.cos(this.cameraPitch)*i+Math.cos(this.cameraYaw)*r,a=n.y+Math.sin(this.cameraPitch)*i+(this.isAiming||e?.2:.6),l=n.z+Math.cos(this.cameraYaw)*Math.cos(this.cameraPitch)*i-Math.sin(this.cameraYaw)*r,c=new E(o,Math.max(.4,a),l);this.camera.position.lerp(c,.22),this.camera.lookAt(n.clone().add(new E(r?Math.cos(this.cameraYaw)*.4:0,.1,r?-Math.sin(this.cameraYaw)*.4:0)))}}updateVehicleCamera(t){const e=this.currentVehicle;if(!e)return;if(this.smoothedCamPos||(this.smoothedCamPos=this.camera.position.clone(),this.smoothedCamTarget=e.mesh.position.clone().add(new E(0,1.25,0))),this.cameraMode==="FIRST_PERSON"){const r=new E(0,1.35,-.65).applyAxisAngle(new E(0,1,0),e.mesh.rotation.y),o=e.mesh.position.clone().add(r);this.camera.position.copy(o);const a=new E(0,0,-1).applyAxisAngle(new E(0,1,0),e.mesh.rotation.y);this.camera.lookAt(o.clone().addScaledVector(a,20))}else{const r=new E(0,0,1).applyAxisAngle(new E(0,1,0),e.mesh.rotation.y),o=e.mesh.position.clone().add(new E(0,1.25,0)),a=this.cameraMode==="THIRD_SHOULDER"?5.2:7.2,l=2.6,c=o.clone().addScaledVector(r,a).add(new E(0,l,0)),h=1-Math.exp(-14*t),u=1-Math.exp(-18*t);this.smoothedCamPos.lerp(c,h),this.smoothedCamTarget.lerp(o,u),this.camera.position.copy(this.smoothedCamPos),this.camera.lookAt(this.smoothedCamTarget)}const n=Math.min(1,Math.abs(e.speed)/(e.maxSpeed||40)),i=ae.lerp(65,75,n);this.camera.fov=ae.damp(this.camera.fov,i,8,t),this.camera.updateProjectionMatrix()}getFireOrigin(){return this.camera.position.clone().add(this.camera.getWorldDirection(new E).multiplyScalar(.4))}getFireDirection(){const t=new E;return this.camera.getWorldDirection(t),t}}class Pa{constructor(t,e="sports",n=new E,i=0){this.scene=t,this.type=e,this.mesh=new qt,this.mesh.position.copy(n),this.mesh.rotation.y=i,this.speed=0,this.speed=0,this.maxSpeed=e==="sports"?44:e==="police"?40:e==="muscle"?38:32,this.acceleration=e==="sports"?32:e==="police"?28:e==="muscle"?30:22,this.reverseSpeed=15,this.steeringAngle=0,this.maxSteeringAngle=.58,this.turnSpeed=4.8,this.brakeForce=42,this.isBraking=!1,this.isDrifting=!1,this.health=100,this.isWrecked=!1,this.isPlayerOccupied=!1,this.driver=null,this.lightsOn=!0,this.sirenActive=!1,this.sirenTime=0,this.smokeTimer=0,this.wheelMeshes=[],this.frontWheelGroups=[],this.bodyGroup=new qt,this.buildModel(),this.scene.add(this.mesh)}buildModel(){const t=this.type==="police",e=this.type==="sports",n=this.type==="taxi";let i=16711765;e?i=16726832:n?i=16763904:this.type==="muscle"?i=54015:t&&(i=16777215),this.mesh.add(this.bodyGroup);const r=new at(2.1,.75,4.4),o=new At({color:i,metalness:.6,roughness:.25});t&&(o.map=ln.createPoliceCarTexture());const a=new k(r,o);a.position.y=.65,a.castShadow=!0,a.receiveShadow=!0,this.bodyGroup.add(a);const l=e?new at(1.8,.55,2.2):new at(1.9,.65,2.5),c=new At({color:1121838,metalness:.9,roughness:.1}),h=new k(l,c);h.position.set(0,1.25,e?-.2:0),h.castShadow=!0,this.bodyGroup.add(h);const u=new at(1.78,.08,e?2.1:2.4),f=new k(u,o);if(f.position.set(0,e?1.55:1.6,e?-.2:0),this.bodyGroup.add(f),e){const x=new at(2.1,.08,.4),C=new k(x,o);C.position.set(0,1.25,2),this.bodyGroup.add(C),[-.8,.8].forEach(A=>{const R=new at(.08,.4,.2),P=new k(R,o);P.position.set(A,1.05,2),this.bodyGroup.add(P)})}if(t){const x=new at(1.4,.15,.35),C=new At({color:2236962}),A=new k(x,C);A.position.set(0,1.7,0),this.bodyGroup.add(A);const R=new at(.55,.18,.3);this.redLightMat=new ne({color:16711680}),this.redMesh=new k(R,this.redLightMat),this.redMesh.position.set(-.35,1.72,0),this.bodyGroup.add(this.redMesh);const P=new at(.55,.18,.3);this.blueLightMat=new ne({color:26367}),this.blueMesh=new k(P,this.blueLightMat),this.blueMesh.position.set(.35,1.72,0),this.bodyGroup.add(this.blueMesh),this.sirenLight=new _i(16711680,0,25),this.sirenLight.position.set(0,2,0),this.bodyGroup.add(this.sirenLight)}const m=new ne({color:16775917});[-.75,.75].forEach(x=>{const C=new at(.35,.2,.1),A=new k(C,m);A.position.set(x,.65,-2.22),this.bodyGroup.add(A)});const g=new ne({color:16716066});[-.75,.75].forEach(x=>{const C=new at(.35,.2,.1),A=new k(C,g);A.position.set(x,.65,2.22),this.bodyGroup.add(A)});const _=[{x:-1.05,z:-1.35,isFront:!0},{x:1.05,z:-1.35,isFront:!0},{x:-1.05,z:1.35,isFront:!1},{x:1.05,z:1.35,isFront:!1}],p=new pe(.42,.42,.35,16);p.rotateZ(Math.PI/2);const d=new At({color:1710618,roughness:.8}),v=new pe(.25,.25,.36,8);v.rotateZ(Math.PI/2);const M=new At({color:13421772,metalness:.9,roughness:.2});_.forEach(x=>{const C=new qt;C.position.set(x.x,.42,x.z);const A=new k(p,d);A.castShadow=!0;const R=new k(v,M);A.add(R),C.add(A),this.mesh.add(C),this.wheelMeshes.push(A),x.isFront&&this.frontWheelGroups.push(C)}),this.box=new Ee}updatePhysics(t,e,n){if(this.isWrecked){this.speed*=Math.exp(-2.5*t);return}const{forward:i,backward:r,left:o,right:a,handbrake:l}=e;if(o?this.steeringAngle=Math.min(this.steeringAngle+this.turnSpeed*t,this.maxSteeringAngle):a?this.steeringAngle=Math.max(this.steeringAngle-this.turnSpeed*t,-this.maxSteeringAngle):this.steeringAngle=ae.damp(this.steeringAngle,0,14,t),this.frontWheelGroups.forEach(g=>{g.rotation.y=this.steeringAngle}),this.isBraking=l,i?this.speed=Math.min(this.speed+this.acceleration*t,this.maxSpeed):r?this.speed>.5?this.speed=Math.max(0,this.speed-this.brakeForce*t):this.speed=Math.max(this.speed-this.acceleration*.7*t,-this.reverseSpeed):this.speed*=Math.exp(-.75*t),l?(this.speed=ae.damp(this.speed,0,4,t),this.isDrifting=Math.abs(this.speed)>7,this.isDrifting&&Math.random()>.6&&Pt.playTireSkid()):this.isDrifting=!1,this.bodyGroup){const g=this.steeringAngle/this.maxSteeringAngle*Math.min(1,Math.abs(this.speed)/10)*.085;let _=0;this.isBraking?_=-.045:i&&this.speed>0?_=.035:r&&this.speed<0&&(_=-.028),this.bodyGroup.rotation.z=ae.damp(this.bodyGroup.rotation.z,g,12,t),this.bodyGroup.rotation.x=ae.damp(this.bodyGroup.rotation.x,_,12,t);const p=Math.abs(this.speed)>.5?Math.sin(performance.now()*.02)*.012:0;this.bodyGroup.position.y=p}if(Math.abs(this.speed)>.15){const g=this.speed>=0?1:-1,_=this.isDrifting?1.75:1,p=Math.min(1,(Math.abs(this.speed)+2.5)/9);this.mesh.rotation.y+=this.steeringAngle*p*2.4*_*t*g}const c=new E(0,0,-1).applyAxisAngle(new E(0,1,0),this.mesh.rotation.y),h=this.speed*t,u=this.mesh.position.clone().addScaledVector(c,h);this.box.setFromCenterAndSize(new E(u.x,u.y+.8,u.z),new E(2.2,1.6,4.4));let f=!1;if(n)for(let g=0;g<n.length;g++){const _=n[g];if(this.box.intersectsBox(_.box)){f=!0,Math.abs(this.speed)>6&&(Pt.playCrash(),this.takeDamage(Math.abs(this.speed)*.8)),this.speed=-this.speed*.35;break}}f||this.mesh.position.copy(u);const m=h/.42;if(this.wheelMeshes.forEach(g=>{g.rotation.x+=m}),this.type==="police"&&this.sirenActive){this.sirenTime+=t*12;const g=Math.floor(this.sirenTime)%2===0;this.redLightMat.color.setHex(g?16711748:4456448),this.blueLightMat.color.setHex(g?4437:61695),this.sirenLight.intensity=3.5,this.sirenLight.color.setHex(g?16711680:26367)}if(this.isPlayerOccupied){const g=Math.abs(this.speed)/this.maxSpeed;Pt.updateEngine(g)}}takeDamage(t){this.health=Math.max(0,this.health-t),this.health<=0&&!this.isWrecked&&(this.isWrecked=!0,Pt.playExplosion(),this.mesh.traverse(e=>{e.isMesh&&e.material&&e.material.color.setHex(1710618)}))}repair(){this.health=100,this.isWrecked=!1;const t=[16711765,61695,16760331,9842431,5110868,16726832],e=t[Math.floor(Math.random()*t.length)];this.mesh.traverse(n=>{n.isMesh&&n.material&&n!==this.redMesh&&n!==this.blueMesh&&n.material.color.setHex(e)})}toggleSiren(){if(this.type!=="police"){this.sirenActive=!1,Pt.stopPoliceSiren(),Pt.playHorn();return}this.sirenActive=!this.sirenActive,this.sirenActive?Pt.startPoliceSiren():(Pt.stopPoliceSiren(),this.sirenLight&&(this.sirenLight.intensity=0))}}class am{constructor(t,e){this.scene=t,this.city=e,this.vehicles=[],this.sparks=[],this.spawnInitialVehicles()}spawnInitialVehicles(){[{type:"sports",x:64,z:-80,heading:0},{type:"muscle",x:56,z:20,heading:Math.PI},{type:"taxi",x:-56,z:-120,heading:Math.PI},{type:"sports",x:-64,z:80,heading:0},{type:"police",x:-115,z:25,heading:Math.PI/2},{type:"police",x:-115,z:35,heading:Math.PI/2},{type:"muscle",x:-184,z:-60,heading:0},{type:"taxi",x:-30,z:-104,heading:Math.PI/2},{type:"sports",x:-60,z:-204,heading:Math.PI/2},{type:"muscle",x:-100,z:204,heading:-Math.PI/2}].forEach(e=>{const n=new Pa(this.scene,e.type,new E(e.x,0,e.z),e.heading);this.vehicles.push(n)})}spawnPoliceCruiser(t,e=0){const n=new Pa(this.scene,"police",t,e);return n.sirenActive=!0,this.vehicles.push(n),n}spawnCrashSparks(t){const n=new Be(.08,4,4),i=new ne({color:16755200});for(let r=0;r<16;r++){const o=new k(n,i);o.position.copy(t),this.scene.add(o);const a=new E((Math.random()-.5)*12,Math.random()*8+2,(Math.random()-.5)*12);this.sparks.push({mesh:o,vel:a,life:.35})}}update(t,e,n,i,r,o=[],a=[],l=null){for(let c=this.sparks.length-1;c>=0;c--){const h=this.sparks[c];h.vel.y-=22*t,h.mesh.position.addScaledVector(h.vel,t),h.life-=t,(h.life<=0||h.mesh.position.y<.1)&&(this.scene.remove(h.mesh),h.mesh.geometry.dispose(),h.mesh.material.dispose(),this.sparks.splice(c,1))}for(let c=0;c<this.vehicles.length;c++)for(let h=c+1;h<this.vehicles.length;h++){const u=this.vehicles[c],f=this.vehicles[h];if(u.isWrecked&&f.isWrecked)continue;const m=u.mesh.position.distanceTo(f.mesh.position),g=3.2;if(m<g&&m>.05){const _=u.mesh.position.clone().sub(f.mesh.position).setY(0).normalize(),p=g-m;u.mesh.position.addScaledVector(_,p*.52),f.mesh.position.addScaledVector(_,-p*.52);const d=Math.abs(u.speed)+Math.abs(f.speed);if(d>3.5){Pt.playCrash(),u.takeDamage(d*.8),f.takeDamage(d*.8),u.speed=-u.speed*.45,f.speed=-f.speed*.45,u.mesh.rotation.y+=(Math.random()-.5)*.35,f.mesh.rotation.y+=(Math.random()-.5)*.35;const v=u.mesh.position.clone().add(f.mesh.position).multiplyScalar(.5);v.y=.8,this.spawnCrashSparks(v)}}}this.vehicles.forEach(c=>{if(c===e)return;const h={forward:!0,backward:!1,left:!1,right:!1,handbrake:!1},u=new E(0,0,-1).applyAxisAngle(new E(0,1,0),c.mesh.rotation.y),f=new E(1,0,0).applyAxisAngle(new E(0,1,0),c.mesh.rotation.y);let m=!1;if(l&&l.shouldVehicleStopForLight(c.mesh.position,c.mesh.rotation.y).shouldStop&&(m=!0,h.forward=!1,h.handbrake=!0,c.speed=Math.max(0,c.speed-36*t)),o&&o.length>0)for(let v=0;v<o.length;v++){const M=o[v];if(!M.isDead&&M.mesh){const x=M.mesh.position.clone().sub(c.mesh.position),C=x.dot(u),A=Math.abs(x.dot(f));if(C>.5&&C<18&&A<3.2){m=!0,h.forward=!1,h.handbrake=!0,c.speed=Math.max(0,c.speed-36*t),c.honkTimer=(c.honkTimer||0)+t,c.honkTimer>2.2&&(c.honkTimer=0,Pt.playHorn());break}}}if(a&&a.length>0)for(let v=0;v<a.length;v++){const M=a[v];if(!M.isDead&&M.mesh){const x=M.mesh.position.clone().sub(c.mesh.position),C=x.dot(u),A=Math.abs(x.dot(f));if(C>.5&&C<16&&A<3){m=!0,h.forward=!1,h.handbrake=!0,c.speed=Math.max(0,c.speed-36*t),c.honkTimer=(c.honkTimer||0)+t,c.honkTimer>2.5&&(c.honkTimer=0,Pt.playHorn());break}}}if(r&&i){const v=i.clone().sub(c.mesh.position),M=v.dot(u),x=Math.abs(v.dot(f));M>.5&&M<16&&x<3.2&&(m=!0,h.forward=!1,h.handbrake=!0,c.speed=Math.max(0,c.speed-32*t),c.honkTimer=(c.honkTimer||0)+t,c.honkTimer>2.5&&(c.honkTimer=0,Pt.playHorn()))}this.vehicles.forEach(v=>{if(v!==c&&c.mesh.position.distanceTo(v.mesh.position)<10){const x=v.mesh.position.clone().sub(c.mesh.position).normalize();u.dot(x)>.6&&(m=!0)}}),m&&(h.forward=!1,h.handbrake=!0);const g=v=>{for(;v>Math.PI;)v-=Math.PI*2;for(;v<-Math.PI;)v+=Math.PI*2;return v},_=Math.abs(u.z)>Math.abs(u.x);let p=c.mesh.rotation.y,d=!1;if(_?u.z<0&&c.mesh.position.z<=-192?(d=!0,c.mesh.position.x>0?(p=Math.PI/2,c.mesh.position.z=ae.damp(c.mesh.position.z,-204,4,t)):c.mesh.position.x<-120?(p=-Math.PI/2,c.mesh.position.z=ae.damp(c.mesh.position.z,-196,4,t)):(p=Math.PI/2,c.mesh.position.z=ae.damp(c.mesh.position.z,-204,4,t))):u.z>0&&c.mesh.position.z>=192&&(d=!0,c.mesh.position.x>0?(p=Math.PI/2,c.mesh.position.z=ae.damp(c.mesh.position.z,196,4,t)):(c.mesh.position.x<-120,p=-Math.PI/2,c.mesh.position.z=ae.damp(c.mesh.position.z,204,4,t))):u.x>0&&c.mesh.position.x>=52?(d=!0,c.mesh.position.z<=-50?(p=Math.PI,c.mesh.position.x=ae.damp(c.mesh.position.x,56,4,t)):(p=0,c.mesh.position.x=ae.damp(c.mesh.position.x,64,4,t))):u.x<0&&c.mesh.position.x<=-172&&(d=!0,c.mesh.position.z<=0?(p=Math.PI,c.mesh.position.x=ae.damp(c.mesh.position.x,-176,4,t)):(p=0,c.mesh.position.x=ae.damp(c.mesh.position.x,-184,4,t))),d){const v=g(p-c.mesh.rotation.y);Math.abs(v)>.04&&(c.mesh.rotation.y+=Math.sign(v)*Math.min(Math.abs(v),2.4*t),c.speed=Math.min(c.speed,11))}else{let v=0;_?v=u.z<0?0:Math.PI:v=u.x>0?-Math.PI/2:Math.PI/2;const M=g(v-c.mesh.rotation.y);c.mesh.rotation.y+=Math.sign(M)*Math.min(Math.abs(M),2*t),c.speed>21&&(c.speed=21)}c.updatePhysics(t,h,n),c.mesh.position.x>67&&(c.mesh.position.x=64,c.mesh.rotation.y=0,c.speed=Math.max(c.speed,8)),c.mesh.position.x<-187&&(c.mesh.position.x=-176,c.mesh.rotation.y=Math.PI,c.speed=Math.max(c.speed,8)),c.mesh.position.z>207&&(c.mesh.position.z=204,c.mesh.rotation.y=-Math.PI/2,c.speed=Math.max(c.speed,8)),c.mesh.position.z<-207&&(c.mesh.position.z=-204,c.mesh.rotation.y=Math.PI/2,c.speed=Math.max(c.speed,8))})}getNearestVehicle(t,e=5.5){let n=null,i=e;return this.vehicles.forEach(r=>{if(!r.isWrecked){const o=r.mesh.position.distanceTo(t);o<i&&(i=o,n=r)}}),n}checkPedestrianCollisions(t,e,n,i=.016,r=null){const o=new Set(this.vehicles);r&&o.add(r),o.forEach(a=>{if(!a||!a.mesh||a.isWrecked)return;const l=Math.abs(a.speed);if(l<.4)return;const c=a.mesh.position,h=a.mesh.rotation.y,u=Math.sin(-h),f=Math.cos(-h),m=new E(0,0,-1).applyAxisAngle(new E(0,1,0),h),g=new E(1,0,0).applyAxisAngle(new E(0,1,0),h),_=m.clone().multiplyScalar(a.speed>=0?1:-1),p=1.35,d=2.45,v=Math.max(.9,l*i*2.8),M=-(d+(a.speed>=0?v:.6)),x=d+(a.speed<0?v:.6),C=(A,R)=>{if(!A||A.isDead||!A.mesh)return;const P=A.mesh.position,T=P.x-c.x,y=P.z-c.z,L=d+v+2;if(T*T+y*y>L*L)return;const O=T*f-y*u,B=T*u+y*f;if(Math.abs(O)<p&&B>=M&&B<=x){if(!(a===r||a.isPlayerOccupied)&&l<5)return;const Z=!A.isDead;A.takeDamage(999,c),!A.isDead&&A.die&&A.die();const W=Math.max(4.5,Math.min(14,l*.45));A.mesh.position.addScaledVector(_,W),O>=0?A.mesh.position.addScaledVector(g,1.4):A.mesh.position.addScaledVector(g,-1.4),A.mesh.rotation.x=-Math.PI/2,A.mesh.rotation.y=Math.random()*Math.PI*2,A.mesh.position.y=.15,Pt.playHitSound(!0),Pt.playCrash(),a.speed*=.88,Z&&n&&n(A,R,a)}};t&&t.forEach(A=>C(A,"npc")),e&&e.forEach(A=>C(A,"police"))})}}class cm{constructor(t,e,n=null,i=null,r=null){this.scene=t,this.sidewalkGraph=n,this.trafficSystem=i,this.currentNode=r,this.previousNode=null,this.targetNode=null,this.mesh=new qt,this.mesh.position.copy(e),this.health=50,this.isDead=!1,this.state="WANDER",this.walkSpeed=2.4+Math.random()*.8,this.runSpeed=6.8+Math.random()*1.5,this.currentSpeed=this.walkSpeed,this.heading=Math.random()*Math.PI*2,this.animTime=Math.random()*10,this.fleeTimer=0,this.moneyDropped=!1,this.waitTimer=0,this.buildCharacterMesh(),this.scene.add(this.mesh),this.currentNode&&(this.targetNode=this.pickNextNode(this.currentNode))}buildCharacterMesh(){const t=[61695,16722565,16771584,16777215,5110868,9842431],e=[2241382,14540253,3355443,13935475],n=[16109749,9262372,13010498,14724201],i=t[Math.floor(Math.random()*t.length)],r=e[Math.floor(Math.random()*e.length)],o=n[Math.floor(Math.random()*n.length)],a=new At({color:o,roughness:.8}),l=new At({color:i,roughness:.7}),c=new At({color:r,roughness:.7}),h=new at(.55,.75,.32);this.torso=new k(h,l),this.torso.position.y=1.25,this.torso.castShadow=!0,this.mesh.add(this.torso);const u=new Be(.22,8,8);this.head=new k(u,a),this.head.position.y=1.82,this.mesh.add(this.head);const f=new at(.35,.16,.35),m=new At({color:2232581}),g=new k(f,m);g.position.set(0,1.95,0),this.mesh.add(g);const _=new at(.18,.65,.18);this.leftArm=new k(_,l),this.leftArm.position.set(-.38,1.2,0),this.mesh.add(this.leftArm),this.rightArm=new k(_,l),this.rightArm.position.set(.38,1.2,0),this.mesh.add(this.rightArm);const p=new at(.22,.8,.22);this.leftLeg=new k(p,c),this.leftLeg.position.set(-.16,.45,0),this.leftLeg.castShadow=!0,this.mesh.add(this.leftLeg),this.rightLeg=new k(p,c),this.rightLeg.position.set(.16,.45,0),this.rightLeg.castShadow=!0,this.mesh.add(this.rightLeg)}pickNextNode(t){if(!t||!t.neighbors||t.neighbors.length===0||!this.sidewalkGraph)return null;const e=[];for(let r=0;r<t.neighbors.length;r++){const o=t.neighbors[r],a=this.sidewalkGraph.get(o.targetId);if(a)if(o.isCrosswalk)this.trafficSystem&&this.trafficSystem.canPedestrianCross(o.intersectionId,o.crosswalkSide)&&e.push({node:a,isCrosswalk:!0,weight:2.2});else{const l=this.previousNode&&a.id===this.previousNode.id;e.push({node:a,isCrosswalk:!1,weight:l?.25:1.5})}}if(e.length===0)return null;const n=e.reduce((r,o)=>r+o.weight,0);let i=Math.random()*n;for(let r=0;r<e.length;r++)if(i-=e[r].weight,i<=0)return e[r].node;return e[0].node}takeDamage(t,e=null){if(!this.isDead){if(this.health-=t,this.health<=0)this.die();else if(this.state="FLEE",this.fleeTimer=8,e){const n=this.mesh.position.clone().sub(e).normalize();this.heading=Math.atan2(n.x,n.z)}}}die(){this.isDead=!0,this.state="DEAD",this.mesh.rotation.x=-Math.PI/2,this.mesh.position.y=.2;const t=new bs(.7,16);t.rotateX(-Math.PI/2);const e=new ne({color:8912913,transparent:!0,opacity:.85}),n=new k(t,e);n.position.set(this.mesh.position.x,.02,this.mesh.position.z),this.scene.add(n),this.dropMoney()}dropMoney(){if(this.moneyDropped)return;this.moneyDropped=!0;const t=new at(.4,.15,.3),e=new At({color:5110868,emissive:1140241,roughness:.3});this.walletMesh=new k(t,e),this.walletMesh.position.set(this.mesh.position.x+(Math.random()-.5)*1.2,.2,this.mesh.position.z+(Math.random()-.5)*1.2),this.scene.add(this.walletMesh),this.walletValue=Math.floor(Math.random()*80)+20}alertNearbyGunfire(t){if(this.isDead)return;if(this.mesh.position.distanceTo(t)<28){this.state="FLEE",this.fleeTimer=7;const n=this.mesh.position.clone().sub(t).normalize();this.heading=Math.atan2(n.x,n.z)}}update(t,e,n){if(this.isDead){this.walletMesh&&(this.walletMesh.rotation.y+=t*2.5);return}if(this.animTime+=t*(this.state==="FLEE"?14:7),this.state==="FLEE"?(this.currentSpeed=this.runSpeed,this.fleeTimer-=t,this.fleeTimer<=0&&(this.state="WANDER")):n&&this.mesh.position.distanceTo(e)<10?(this.state="COWER",this.currentSpeed=0,this.leftArm.rotation.x=-Math.PI*.8,this.rightArm.rotation.x=-Math.PI*.8):this.state="WANDER",this.state==="WANDER")if((!this.targetNode||this.mesh.position.distanceTo(this.targetNode.pos)<1.3)&&(this.targetNode&&(this.previousNode=this.currentNode,this.currentNode=this.targetNode),this.targetNode=this.pickNextNode(this.currentNode)),this.targetNode){const i=this.targetNode.pos.clone().sub(this.mesh.position);i.y=0,this.heading=Math.atan2(i.x,i.z),this.currentSpeed=this.walkSpeed}else this.currentSpeed=0,this.waitTimer+=t,this.waitTimer>1.2&&(this.waitTimer=0,this.targetNode=this.pickNextNode(this.currentNode));if(this.currentSpeed>0){this.mesh.rotation.y=this.heading;const i=new E(Math.sin(this.heading),0,Math.cos(this.heading));this.mesh.position.addScaledVector(i,this.currentSpeed*t);const r=Math.sin(this.animTime);this.leftArm.rotation.x=r*.7,this.rightArm.rotation.x=-r*.7,this.leftLeg.rotation.x=-r*.8,this.rightLeg.rotation.x=r*.8,this.torso.position.y=1.25+Math.abs(Math.sin(this.animTime*2))*.05}}}class lm{constructor(t,e,n=null){this.scene=t,this.city=e,this.trafficSystem=n||e.traffic,this.npcs=[],this.spawnPedestrians(35)}spawnPedestrians(t){const e=this.trafficSystem?this.trafficSystem.sidewalkNodes:[];if(!(!e||e.length===0))for(let n=0;n<t;n++){const i=e[Math.floor(Math.random()*e.length)],r=i.pos.clone().add(new E((Math.random()-.5)*1.5,0,(Math.random()-.5)*1.5)),o=new cm(this.scene,r,this.trafficSystem.sidewalkGraph,this.trafficSystem,i);this.npcs.push(o)}}notifyGunfire(t){this.npcs.forEach(e=>e.alertNearbyGunfire(t))}update(t,e,n){this.npcs.forEach(i=>{i.update(t,e,n)})}collectNearbyWallets(t,e=2.5){let n=0;return this.npcs.forEach(i=>{i.isDead&&i.walletMesh&&i.walletMesh.position.distanceTo(t)<e&&(n+=i.walletValue,this.scene.remove(i.walletMesh),i.walletMesh.geometry.dispose(),i.walletMesh.material.dispose(),i.walletMesh=null,Pt.playMoney())}),n}}class hm{constructor(t,e,n="pistol"){this.scene=t,this.mesh=new qt,this.mesh.position.copy(e),this.health=65,this.isDead=!1,this.weaponType=n,this.speed=6.2,this.shootCooldown=1.2,this.lastShootTime=0,this.animTime=0,this.ammoDropped=!1,this.buildOfficerMesh(),this.scene.add(this.mesh)}buildOfficerMesh(){const t=new At({color:2046812,roughness:.6}),e=new At({color:990254,roughness:.7}),n=new At({color:13935475,roughness:.8}),i=new at(.55,.75,.35);this.torso=new k(i,t),this.torso.position.y=1.25,this.mesh.add(this.torso);const r=new at(.1,.1,.04),o=new ne({color:16760331}),a=new k(r,o);a.position.set(-.15,1.35,.18),this.mesh.add(a);const l=new Be(.22,8,8),c=new k(l,n);c.position.y=1.82,this.mesh.add(c);const h=new pe(.3,.28,.16,8),u=new At({color:990254}),f=new k(h,u);f.position.set(0,1.95,0),this.mesh.add(f);const m=new at(.18,.65,.18);this.leftArm=new k(m,t),this.leftArm.position.set(-.38,1.2,0),this.mesh.add(this.leftArm),this.rightArm=new k(m,t),this.rightArm.position.set(.38,1.2,0),this.mesh.add(this.rightArm);const g=new at(.08,.12,.3),_=new At({color:1118481,metalness:.8}),p=new k(g,_);p.position.set(0,-.3,.12),this.rightArm.add(p);const d=new at(.22,.8,.22);this.leftLeg=new k(d,e),this.leftLeg.position.set(-.16,.45,0),this.mesh.add(this.leftLeg),this.rightLeg=new k(d,e),this.rightLeg.position.set(.16,.45,0),this.mesh.add(this.rightLeg)}takeDamage(t){this.isDead||(this.health-=t,this.health<=0&&this.die())}die(){this.isDead=!0,this.mesh.rotation.x=-Math.PI/2,this.mesh.position.y=.2;const t=new bs(.75,16);t.rotateX(-Math.PI/2);const e=new ne({color:8912913,transparent:!0,opacity:.85}),n=new k(t,e);n.position.set(this.mesh.position.x,.02,this.mesh.position.z),this.scene.add(n),this.dropAmmo()}dropAmmo(){if(this.ammoDropped)return;this.ammoDropped=!0;const t=new at(.45,.25,.35),e=new At({color:61695,emissive:17510,roughness:.4});this.ammoMesh=new k(t,e),this.ammoMesh.position.set(this.mesh.position.x+(Math.random()-.5)*1,.2,this.mesh.position.z+(Math.random()-.5)*1),this.scene.add(this.ammoMesh),this.ammoValue=30,this.cashValue=120}update(t,e,n){if(this.isDead)return;const i=this.mesh.position.distanceTo(e),r=e.clone().sub(this.mesh.position);if(r.y=0,this.mesh.rotation.y=Math.atan2(r.x,r.z),i>8){this.animTime+=t*12;const o=new E(Math.sin(this.mesh.rotation.y),0,Math.cos(this.mesh.rotation.y));this.mesh.position.addScaledVector(o,this.speed*t);const a=Math.sin(this.animTime);this.leftArm.rotation.x=a*.7,this.rightArm.rotation.x=-Math.PI/2.5,this.leftLeg.rotation.x=-a*.8,this.rightLeg.rotation.x=a*.8}else{this.rightArm.rotation.x=-Math.PI/2,this.leftArm.rotation.x=-Math.PI/3;const o=performance.now()/1e3;o-this.lastShootTime>this.shootCooldown&&(this.lastShootTime=o,Pt.playShoot("pistol"),n&&n(12))}}}class um{constructor(t,e){this.scene=t,this.vehicleManager=e,this.wantedStars=0,this.officers=[],this.cruisers=[],this.timeSinceCrime=0,this.spawnTimer=0}addCrime(t=1){const e=this.wantedStars;this.wantedStars=Math.min(5,Math.max(this.wantedStars,t)),this.timeSinceCrime=0,this.wantedStars>e&&Pt.playWantedAlert()}clearWantedLevel(){this.wantedStars=0,Pt.stopPoliceSiren(),this.cruisers.forEach(t=>{t.sirenActive=!1})}spawnReinforcements(t){const e=Math.random()*Math.PI*2,n=45+Math.random()*20,i=new E(t.x+Math.sin(e)*n,0,t.z+Math.cos(e)*n),r=this.vehicleManager.spawnPoliceCruiser(i,e+Math.PI);this.cruisers.push(r),[-1.8,1.8].forEach(o=>{const a=i.clone().add(new E(o,0,0)),l=new hm(this.scene,a,this.wantedStars>=3?"m4":"pistol");this.officers.push(l)})}update(t,e,n,i){let r=!1;if(n&&n.type==="police"&&n.sirenActive)r=!0;else if(this.wantedStars===5)this.cruisers.some(h=>!h.isWrecked&&!h.isPlayerOccupied&&h!==n)&&(r=!0);else if(this.wantedStars>0)for(let c=0;c<this.cruisers.length;c++){const h=this.cruisers[c];if(!h.isWrecked&&!h.isPlayerOccupied&&h!==n&&h.mesh.position.distanceTo(e)<38){r=!0;break}}if(r?Pt.startPoliceSiren():Pt.stopPoliceSiren(),this.wantedStars===0)return;this.timeSinceCrime+=t;let o=1/0;this.officers.forEach(c=>{c.isDead||(o=Math.min(o,c.mesh.position.distanceTo(e)))}),o>75&&this.timeSinceCrime>14&&(this.wantedStars=Math.max(0,this.wantedStars-1),this.timeSinceCrime=0,this.wantedStars===0&&this.clearWantedLevel()),this.spawnTimer+=t;const a=Math.max(5,18-this.wantedStars*2.5),l=this.wantedStars*2;this.spawnTimer>a&&this.cruisers.length<l&&(this.spawnTimer=0,this.spawnReinforcements(e)),this.cruisers.forEach(c=>{if(!c.isWrecked&&!c.isPlayerOccupied&&c!==n){const h=e.clone().sub(c.mesh.position);h.y=0;let f=Math.atan2(h.x,h.z)+Math.PI-c.mesh.rotation.y;for(;f<-Math.PI;)f+=Math.PI*2;for(;f>Math.PI;)f-=Math.PI*2;const m={forward:!0,backward:!1,left:f>.15,right:f<-.15,handbrake:Math.abs(f)>1.2};c.updatePhysics(t,m,null),c.mesh.position.distanceTo(e)<4&&i&&i(8*t)}}),this.officers.forEach(c=>{c.update(t,e,h=>{i&&i(h)})})}collectPoliceDrops(t,e=2.8){let n={ammo:0,cash:0};return this.officers.forEach(i=>{i.isDead&&i.ammoMesh&&i.ammoMesh.position.distanceTo(t)<e&&(n.ammo+=i.ammoValue,n.cash+=i.cashValue,this.scene.remove(i.ammoMesh),i.ammoMesh.geometry.dispose(),i.ammoMesh.material.dispose(),i.ammoMesh=null,Pt.playMoney())}),n}}const dm=[{id:0,name:"FISTS",type:"melee",damage:30,fireRate:.35,range:2.5,clip:0,maxReserve:0,sound:"fist"},{id:1,name:"9MM PISTOL",type:"pistol",damage:40,fireRate:.28,range:80,clip:17,maxReserve:150,sound:"pistol"},{id:2,name:"UZI SMG",type:"smg",damage:28,fireRate:.09,range:65,clip:30,maxReserve:300,sound:"smg"},{id:3,name:"M4 RIFLE",type:"m4",damage:52,fireRate:.12,range:140,clip:30,maxReserve:240,sound:"m4"},{id:4,name:"SPAS-12",type:"shotgun",damage:20,fireRate:.75,range:45,clip:8,maxReserve:64,sound:"shotgun"},{id:5,name:"RPG-7",type:"rpg",damage:300,fireRate:1.5,range:200,clip:1,maxReserve:12,sound:"rpg"}];class fm{constructor(t,e){this.scene=t,this.camera=e,this.weapons=dm.map(n=>({...n,currentClip:n.clip,reserveAmmo:n.maxReserve})),this.currentIndex=3,this.lastFireTime=0,this.isReloading=!1,this.activeTracers=[],this.activeRockets=[],this.activeExplosions=[],this.impactParticles=[],this.muzzleLight=new _i(16755234,0,15),this.scene.add(this.muzzleLight),this.raycaster=new nm}getCurrentWeapon(){return this.weapons[this.currentIndex]}selectWeapon(t){t>=0&&t<this.weapons.length&&(this.currentIndex=t,Pt.playReload())}nextWeapon(){this.selectWeapon((this.currentIndex+1)%this.weapons.length)}prevWeapon(){this.selectWeapon((this.currentIndex-1+this.weapons.length)%this.weapons.length)}reload(){const t=this.getCurrentWeapon();t.type==="melee"||this.isReloading||t.currentClip===t.clip||t.reserveAmmo<=0||(this.isReloading=!0,Pt.playReload(),setTimeout(()=>{const e=t.clip-t.currentClip,n=Math.min(e,t.reserveAmmo);t.currentClip+=n,t.reserveAmmo-=n,this.isReloading=!1},1e3))}refillAllAmmo(){this.weapons.forEach(t=>{t.currentClip=t.clip,t.reserveAmmo=t.maxReserve}),Pt.playReload()}fire(t,e,n,i){const r=this.getCurrentWeapon(),o=performance.now()/1e3;if(o-this.lastFireTime<r.fireRate||this.isReloading)return!1;if(r.type!=="melee"){if(r.currentClip<=0)return this.reload(),!1;r.currentClip--}if(this.lastFireTime=o,Pt.playShoot(r.sound),this.triggerMuzzleFlash(t),r.type==="rpg")return this.spawnRocket(t,e,n,i),!0;if(r.type==="melee")return this.performMelee(t,e,n,i),!0;const a=r.type==="shotgun"?8:1;for(let l=0;l<a;l++){const c=e.clone();r.type==="shotgun"?(c.x+=(Math.random()-.5)*.08,c.y+=(Math.random()-.5)*.08,c.z+=(Math.random()-.5)*.08,c.normalize()):r.type==="smg"&&(c.x+=(Math.random()-.5)*.025,c.y+=(Math.random()-.5)*.025,c.z+=(Math.random()-.5)*.025,c.normalize());const h=this.camera.position.clone();this.raycaster.set(h,c),this.raycaster.far=r.range;const u=this.performRaycast(n),f=u?u.point:h.clone().add(c.clone().multiplyScalar(r.range));this.createTracer(t,f),u&&(this.spawnImpactParticles(u.point,u.isFlesh),Pt.playHitSound(u.isFlesh),i&&i(u,r.damage))}return!0}performMelee(t,e,n,i){this.raycaster.set(t,e),this.raycaster.far=3.2;const r=this.performRaycast(n);r&&(Pt.playHitSound(!0),i&&i(r,45))}performRaycast(t){let e=null,n=1/0;const i=this.raycaster.ray;return t.npcs&&t.npcs.forEach(r=>{if(!r.isDead&&r.mesh){const o=this.raycaster.intersectObject(r.mesh,!0);if(o.length>0&&o[0].distance<n)n=o[0].distance,e={point:o[0].point,targetType:"npc",target:r,isFlesh:!0};else{const a=r.mesh.position.clone().add(new E(0,1.1,0)),l=new mi(a,.95),c=new E;if(i.intersectSphere(l,c)){const h=i.origin.distanceTo(c);h<n&&h<=this.raycaster.far&&(n=h,e={point:c,targetType:"npc",target:r,isFlesh:!0})}}}}),t.police&&t.police.forEach(r=>{if(!r.isDead&&r.mesh){const o=this.raycaster.intersectObject(r.mesh,!0);if(o.length>0&&o[0].distance<n)n=o[0].distance,e={point:o[0].point,targetType:"police",target:r,isFlesh:!0};else{const a=r.mesh.position.clone().add(new E(0,1.1,0)),l=new mi(a,.95),c=new E;if(i.intersectSphere(l,c)){const h=i.origin.distanceTo(c);h<n&&h<=this.raycaster.far&&(n=h,e={point:c,targetType:"police",target:r,isFlesh:!0})}}}}),t.vehicles&&t.vehicles.forEach(r=>{if(r.mesh){const o=this.raycaster.intersectObject(r.mesh,!0);o.length>0&&o[0].distance<n&&(n=o[0].distance,e={point:o[0].point,targetType:"vehicle",target:r,isFlesh:!1})}}),t.colliders&&t.colliders.forEach(r=>{const o=new E;if(i.intersectBox(r.box,o)){const a=i.origin.distanceTo(o);a<n&&(n=a,e={point:o,targetType:"world",target:r,isFlesh:!1})}}),e}triggerMuzzleFlash(t){this.muzzleLight.position.copy(t),this.muzzleLight.intensity=3.5,setTimeout(()=>{this.muzzleLight.intensity=0},50)}createTracer(t,e){const n=[t,e],i=new Ce().setFromPoints(n),r=new hc({color:16771584,linewidth:2,transparent:!0,opacity:.9}),o=new Up(i,r);this.scene.add(o),this.activeTracers.push({line:o,life:.08})}spawnRocket(t,e,n,i){const r=new pe(.12,.12,.9,8);r.rotateX(Math.PI/2);const o=new At({color:2241314,metalness:.7}),a=new k(r,o);a.position.copy(t),a.quaternion.setFromUnitVectors(new E(0,0,1),e),this.scene.add(a),this.activeRockets.push({mesh:a,dir:e.clone(),speed:55,life:4,targets:n,onHitCallback:i})}createExplosion(t,e,n){Pt.playExplosion();const i=new Be(1,16,16),r=new ne({color:16733440,transparent:!0,opacity:.9}),o=new k(i,r);o.position.copy(t),this.scene.add(o);const a=new _i(16733440,6,35);a.position.copy(t),this.scene.add(a),this.activeExplosions.push({mesh:o,light:a,radius:1,maxRadius:9,life:.6});const l=14,c=250;e.npcs&&e.npcs.forEach(h=>{if(!h.isDead&&h.mesh){const u=h.mesh.position.distanceTo(t);if(u<l){const f=1-u/l;h.takeDamage(c*f,t)}}}),e.police&&e.police.forEach(h=>{if(!h.isDead&&h.mesh){const u=h.mesh.position.distanceTo(t);if(u<l){const f=1-u/l;h.takeDamage(c*f)}}}),e.vehicles&&e.vehicles.forEach(h=>{if(h.mesh){const u=h.mesh.position.distanceTo(t);if(u<l){h.takeDamage(c*(1-u/l));const f=h.mesh.position.clone().sub(t).normalize().multiplyScalar(22);h.velocity.add(f),h.mesh.position.y+=1.5}}})}spawnImpactParticles(t,e=!1){const n=e?8:12,i=e?13369344:16763955,r=new Be(.06,4,4),o=new ne({color:i});for(let a=0;a<n;a++){const l=new k(r,o);l.position.copy(t),this.scene.add(l);const c=new E((Math.random()-.5)*6,Math.random()*5+2,(Math.random()-.5)*6);this.impactParticles.push({mesh:l,vel:c,life:.35})}}update(t){for(let e=this.activeTracers.length-1;e>=0;e--){const n=this.activeTracers[e];n.life-=t,n.life<=0&&(this.scene.remove(n.line),n.line.geometry.dispose(),n.line.material.dispose(),this.activeTracers.splice(e,1))}for(let e=this.activeRockets.length-1;e>=0;e--){const n=this.activeRockets[e],i=n.dir.clone().multiplyScalar(n.speed*t);n.mesh.position.add(i),n.life-=t,this.raycaster.set(n.mesh.position,n.dir),this.raycaster.far=i.length()+.5;const r=this.performRaycast(n.targets);if(r||n.mesh.position.y<=.2||n.life<=0){const o=r?r.point:n.mesh.position.clone();this.createExplosion(o,n.targets,n.onHitCallback),this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.activeRockets.splice(e,1)}}for(let e=this.activeExplosions.length-1;e>=0;e--){const n=this.activeExplosions[e];n.life-=t;const i=1-n.life/.6;n.radius=1+(n.maxRadius-1)*Math.sin(i*Math.PI*.5),n.mesh.scale.set(n.radius,n.radius,n.radius),n.mesh.material.opacity=n.life/.6,n.light.intensity=6*(n.life/.6),n.life<=0&&(this.scene.remove(n.mesh),this.scene.remove(n.light),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.activeExplosions.splice(e,1))}for(let e=this.impactParticles.length-1;e>=0;e--){const n=this.impactParticles[e];n.vel.y-=15*t,n.mesh.position.addScaledVector(n.vel,t),n.life-=t,(n.life<=0||n.mesh.position.y<0)&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.impactParticles.splice(e,1))}}}class pm{constructor(){this.healthBar=document.getElementById("hud-health"),this.armorBar=document.getElementById("hud-armor"),this.moneyText=document.getElementById("hud-money"),this.starsContainer=document.getElementById("hud-stars"),this.weaponName=document.getElementById("hud-weapon-name"),this.ammoClip=document.getElementById("hud-ammo-clip"),this.ammoReserve=document.getElementById("hud-ammo-reserve"),this.zoneText=document.getElementById("hud-zone"),this.vehicleHud=document.getElementById("vehicle-hud"),this.carName=document.getElementById("hud-car-name"),this.speedText=document.getElementById("hud-speed"),this.radioText=document.getElementById("hud-radio"),this.prompt=document.getElementById("interaction-prompt"),this.announcement=document.getElementById("announcement"),this.hitmarker=document.getElementById("hitmarker"),this.radarCanvas=document.getElementById("radar-canvas"),this.radarCtx=this.radarCanvas.getContext("2d"),this.mapModal=document.getElementById("map-modal"),this.mapCloseBtn=document.getElementById("map-close-btn"),this.fullMapCanvas=document.getElementById("full-map-canvas"),this.fullMapCtx=this.fullMapCanvas.getContext("2d"),this.isMapOpen=!1,this.waypoint=null,this.setupEventListeners()}setupEventListeners(){this.mapCloseBtn.addEventListener("click",()=>{this.toggleMap(!1)}),this.fullMapCanvas.addEventListener("click",t=>{const e=this.fullMapCanvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top,r=440/this.fullMapCanvas.width,o=520/this.fullMapCanvas.height,a=n*r-240,l=i*o-260;this.waypoint={x:a,z:l},this.showAnnouncement("GPS WAYPOINT SET")})}toggleMap(t=null){this.isMapOpen=t!==null?t:!this.isMapOpen,this.isMapOpen?(this.mapModal.classList.add("open"),document.exitPointerLock&&document.exitPointerLock()):this.mapModal.classList.remove("open")}showAnnouncement(t,e=3e3){this.announcement.innerText=t,this.announcement.classList.add("show"),clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>{this.announcement.classList.remove("show")},e)}showHitmarker(){this.hitmarker.classList.add("active"),setTimeout(()=>{this.hitmarker.classList.remove("active")},120)}setPrompt(t){t?(this.prompt.innerHTML=t,this.prompt.style.display="block"):this.prompt.style.display="none"}updateHUD(t,e,n){this.healthBar.style.width=`${Math.max(0,t.health)}%`,this.armorBar.style.width=`${Math.max(0,t.armor)}%`,this.moneyText.innerText=`$${t.money.toString().padStart(7,"0")}`;const i=this.starsContainer.children;for(let o=0;o<5;o++)o<n.wantedStars?i[o].classList.add("active"):i[o].classList.remove("active");const r=e.getCurrentWeapon();if(this.weaponName.innerText=r.name,r.type==="melee"?(this.ammoClip.innerText="∞",this.ammoReserve.innerText="∞"):(this.ammoClip.innerText=r.currentClip,this.ammoReserve.innerText=r.reserveAmmo),t.inVehicle&&t.currentVehicle){this.vehicleHud.style.display="flex";const o=t.currentVehicle,a={sports:"INFERNUS TURBO",muscle:"VOODOO CUSTOM",police:"V.C.P.D. ENFORCER",taxi:"VICE CAB CO."};this.carName.innerText=a[o.type]||"AUTOMOBILE";const l=Math.abs(Math.round(o.speed*2.3));this.speedText.innerText=l}else this.vehicleHud.style.display="none";t.mesh.position.x>30?this.zoneText.innerText="OCEAN BEACH BOULEVARD":t.mesh.position.x<-100?this.zoneText.innerText="DOWNTOWN FINANCIAL DISTRICT":this.zoneText.innerText="MIDTOWN COMMERCIAL"}drawRadar(t,e,n,i,r){const o=this.radarCtx,a=this.radarCanvas.width,l=this.radarCanvas.height,c=a/2,h=l/2,u=a/2-4;o.clearRect(0,0,a,l),o.save(),o.beginPath(),o.arc(c,h,u,0,Math.PI*2),o.clip(),o.fillStyle="#0a101d",o.fillRect(0,0,a,l);const f=t.inVehicle&&t.currentVehicle?t.currentVehicle.mesh.position:t.mesh.position,m=t.inVehicle&&t.currentVehicle?t.currentVehicle.mesh.rotation.y:t.cameraYaw;o.save(),o.translate(c,h),o.rotate(m);const g=.95,_=(100-f.x)*g;o.fillStyle="#005f73",o.fillRect(_,-300,400,600);const p=(60-f.x)*g;if(o.fillStyle="#d4a373",o.fillRect(p,-300,40*g,600),o.fillStyle="#2b2d42",[-180,-60,60].forEach(d=>{const v=(d-8-f.x)*g,M=(-208-f.z)*g;o.fillRect(v,M,16*g,416*g)}),[-200,-100,0,100,200].forEach(d=>{const v=(-188-f.x)*g,M=(d-8-f.z)*g;o.fillRect(v,M,256*g,16*g)}),o.fillStyle="#161a1d",e.colliders.forEach(d=>{if(d.type==="building"){const v=d.box.min,M=d.box.max,x=(v.x-f.x)*g,C=(v.z-f.z)*g,A=(M.x-v.x)*g,R=(M.z-v.z)*g;o.fillRect(x,C,A,R)}}),e.interactivityZones.forEach(d=>{const v=(d.position.x-f.x)*g,M=(d.position.z-f.z)*g;o.save(),o.translate(v,M),d.type==="pay_n_spray"?(o.fillStyle="#4dfc54",o.beginPath(),o.arc(0,0,5,0,Math.PI*2),o.fill()):d.type==="ammunation"&&(o.fillStyle="#ff0055",o.beginPath(),o.arc(0,0,5,0,Math.PI*2),o.fill()),o.restore()}),o.fillStyle="rgba(255, 255, 255, 0.6)",i.forEach(d=>{if(!d.isDead){const v=(d.mesh.position.x-f.x)*g,M=(d.mesh.position.z-f.z)*g;o.fillRect(v-1.5,M-1.5,3,3)}}),n.forEach(d=>{if(d!==t.currentVehicle&&!d.isWrecked){const v=(d.mesh.position.x-f.x)*g,M=(d.mesh.position.z-f.z)*g;if(d.type==="police"){const x=Math.floor(Date.now()/200)%2===0;o.fillStyle=x?"#ff0044":"#00f0ff",o.beginPath(),o.arc(v,M,4.5,0,Math.PI*2),o.fill()}else o.fillStyle="#ffbe0b",o.fillRect(v-2.5,M-2.5,5,5)}}),this.waypoint){const d=(this.waypoint.x-f.x)*g,v=(this.waypoint.z-f.z)*g;o.fillStyle="#ff00ff",o.strokeStyle="#ffffff",o.lineWidth=2,o.beginPath(),o.arc(d,v,6,0,Math.PI*2),o.fill(),o.stroke()}o.restore(),o.fillStyle="#00f0ff",o.strokeStyle="#ffffff",o.lineWidth=1.5,o.beginPath(),o.moveTo(c,h-8),o.lineTo(c+6,h+7),o.lineTo(c,h+4),o.lineTo(c-6,h+7),o.closePath(),o.fill(),o.stroke(),o.restore()}drawFullMap(t,e,n,i){if(!this.isMapOpen)return;const r=this.fullMapCtx,o=this.fullMapCanvas.width,a=this.fullMapCanvas.height;r.clearRect(0,0,o,a),r.fillStyle="#003049",r.fillRect(0,0,o,a);const l=o/440,c=a/520,h=p=>(p+240)*l,u=p=>(p+260)*c;if(r.fillStyle="#1d3557",r.beginPath(),r.roundRect(h(-220),u(-240),280*l,480*c,20),r.fill(),r.fillStyle="#e9c46a",r.fillRect(h(60),u(-240),40*l,480*c),r.fillStyle="#3d405b",[-180,-60,60].forEach(p=>{r.fillRect(h(p-8),u(-208),16*l,416*c)}),[-200,-100,0,100,200].forEach(p=>{r.fillRect(h(-188),u(p-8),256*l,16*c)}),r.strokeStyle="#5a5d7a",r.lineWidth=2,r.strokeRect(h(-188),u(-208),256*l,416*c),r.font='900 16px "Orbitron", sans-serif',r.fillStyle="rgba(255, 255, 255, 0.45)",r.textAlign="center",r.fillText("OCEAN BEACH",h(75),u(0)),r.fillText("MIDTOWN COMMERCIAL",h(0),u(-50)),r.fillText("DOWNTOWN FINANCIAL",h(-120),u(-100)),r.fillText("MARINA & PORT",h(-120),u(100)),r.fillStyle="#111827",e.colliders.forEach(p=>{if(p.type==="building"){const d=p.box.min,v=p.box.max,M=h(d.x),x=u(d.z),C=(v.x-d.x)*l,A=(v.z-d.z)*c;r.fillRect(M,x,C,A)}}),e.interactivityZones.forEach(p=>{const d=h(p.position.x),v=u(p.position.z);r.save(),r.translate(d,v),p.type==="pay_n_spray"?(r.fillStyle="#4dfc54",r.beginPath(),r.arc(0,0,9,0,Math.PI*2),r.fill(),r.font="700 11px sans-serif",r.fillStyle="#ffffff",r.fillText("Pay 'n' Spray",0,-12)):p.type==="ammunation"&&(r.fillStyle="#962eff",r.beginPath(),r.arc(0,0,9,0,Math.PI*2),r.fill(),r.font="700 11px sans-serif",r.fillStyle="#ffffff",r.fillText("Ammu-Nation",0,-12)),r.restore()}),r.fillStyle="#00f0ff",r.beginPath(),r.arc(h(-120),u(0),8,0,Math.PI*2),r.fill(),r.font="700 11px sans-serif",r.fillStyle="#ffffff",r.fillText("Police HQ",h(-120),u(0)-12),n.forEach(p=>{if(!p.isWrecked){const d=h(p.mesh.position.x),v=u(p.mesh.position.z);p.type==="police"?(r.fillStyle="#ff0055",r.beginPath(),r.arc(d,v,6,0,Math.PI*2),r.fill()):(r.fillStyle="#ffbe0b",r.fillRect(d-3,v-3,6,6))}}),this.waypoint){const p=h(this.waypoint.x),d=u(this.waypoint.z);r.fillStyle="#ff00ff",r.strokeStyle="#ffffff",r.lineWidth=3,r.beginPath(),r.arc(p,d,10,0,Math.PI*2),r.fill(),r.stroke()}const f=t.inVehicle&&t.currentVehicle?t.currentVehicle.mesh.position:t.mesh.position,m=h(f.x),g=u(f.z),_=t.inVehicle&&t.currentVehicle?t.currentVehicle.mesh.rotation.y:t.cameraYaw;r.save(),r.translate(m,g),r.rotate(_),r.fillStyle="#00f0ff",r.strokeStyle="#ffffff",r.lineWidth=2,r.beginPath(),r.moveTo(0,-12),r.lineTo(8,10),r.lineTo(0,6),r.lineTo(-8,10),r.closePath(),r.fill(),r.stroke(),r.restore()}}class mm{constructor(){this.canvas=document.getElementById("game-canvas"),this.container=document.getElementById("game-container"),this.startScreen=document.getElementById("start-screen"),this.startBtn=document.getElementById("start-btn"),this.crosshair=document.getElementById("crosshair"),this.clock=new em,this.isShooting=!1,this.isGameRunning=!1,this.inputs={forward:!1,backward:!1,left:!1,right:!1,sprint:!1,jump:!1,aiming:!1,handbrake:!1},this.initScene(),this.initSystems(),this.setupControls(),this.setupWindowResize(),this.startBtn.addEventListener("click",()=>{this.startGame()})}initScene(){this.scene=new Ip,this.scene.background=new zt(1443878),this.scene.fog=new co(2625596,.0035),this.camera=new Ie(65,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Dp({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Da,this.renderer.toneMapping=Ua,this.renderer.toneMappingExposure=1.15;const t=new tm(16742314,.65);this.scene.add(t);const e=new $p(16746683,1122884,.6);this.scene.add(e),this.sunLight=new Qp(16760331,1.6),this.sunLight.position.set(120,45,-150),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=400,this.sunLight.shadow.camera.left=-160,this.sunLight.shadow.camera.right=160,this.sunLight.shadow.camera.top=160,this.sunLight.shadow.camera.bottom=-160,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight);const n=new Be(35,16,16),i=new ne({color:16726832}),r=new k(n,i);r.position.set(400,30,-500),this.scene.add(r)}initSystems(){this.ui=new pm,this.city=new rm(this.scene),this.player=new om(this.scene,this.camera,this.canvas),this.vehicles=new am(this.scene,this.city),this.npcs=new lm(this.scene,this.city,this.city.traffic),this.police=new um(this.scene,this.vehicles),this.weapons=new fm(this.scene,this.camera)}startGame(){Pt.init(),Pt.resume(),this.startScreen.style.display="none",this.player.requestLock(),this.isGameRunning=!0,this.ui.showAnnouncement("WELCOME TO VICE CITY"),this.animate()}setupControls(){window.addEventListener("keydown",t=>{if(!this.isGameRunning)return;const e=t.code;if((e==="KeyW"||e==="ArrowUp")&&(this.inputs.forward=!0),(e==="KeyS"||e==="ArrowDown")&&(this.inputs.backward=!0),(e==="KeyA"||e==="ArrowLeft")&&(this.inputs.left=!0),(e==="KeyD"||e==="ArrowRight")&&(this.inputs.right=!0),(e==="ShiftLeft"||e==="ShiftRight")&&(this.inputs.sprint=!0),e==="Space"&&(this.inputs.jump=!0,this.inputs.handbrake=!0),(e==="KeyF"||e==="Enter")&&this.handleVehicleInteract(),e==="KeyR")if(this.player.inVehicle){const n=Pt.nextStation();this.ui.radioText.innerText=n,this.ui.showAnnouncement(`RADIO: ${n}`,2e3)}else this.weapons.reload();if(e==="KeyE"&&this.player.inVehicle&&this.player.currentVehicle)if(this.player.currentVehicle.type==="police"){this.player.currentVehicle.toggleSiren();const n=this.player.currentVehicle.sirenActive?"ON":"OFF";this.ui.showAnnouncement(`POLICE SIREN & LIGHTS: ${n}`,1500)}else Pt.playHorn(),this.ui.showAnnouncement("CAR HORN",800);if(e==="KeyM"&&this.ui.toggleMap(),e==="KeyV"||e==="KeyC"){const n=this.player.toggleCameraMode(),i={FIRST_PERSON:"CAMERA: 1ST PERSON POV",THIRD_PERSON:"CAMERA: 3RD PERSON (FAR)",THIRD_SHOULDER:"CAMERA: 3RD PERSON (SHOULDER)"};this.ui.showAnnouncement(i[n]||"CAMERA VIEW CHANGED",2e3)}e==="Digit1"&&this.switchWeapon(0),e==="Digit2"&&this.switchWeapon(1),e==="Digit3"&&this.switchWeapon(2),e==="Digit4"&&this.switchWeapon(3),e==="Digit5"&&this.switchWeapon(4),e==="Digit6"&&this.switchWeapon(5)}),window.addEventListener("keyup",t=>{const e=t.code;(e==="KeyW"||e==="ArrowUp")&&(this.inputs.forward=!1),(e==="KeyS"||e==="ArrowDown")&&(this.inputs.backward=!1),(e==="KeyA"||e==="ArrowLeft")&&(this.inputs.left=!1),(e==="KeyD"||e==="ArrowRight")&&(this.inputs.right=!1),(e==="ShiftLeft"||e==="ShiftRight")&&(this.inputs.sprint=!1),e==="Space"&&(this.inputs.jump=!1,this.inputs.handbrake=!1)}),window.addEventListener("mousedown",t=>{!this.isGameRunning||this.ui.isMapOpen||(this.player.isPointerLocked||this.player.requestLock(),t.button===0&&(this.isShooting=!0,this.handleFireWeapon()),t.button===2&&(this.inputs.aiming=!0,this.crosshair.classList.add("aiming")))}),window.addEventListener("mouseup",t=>{t.button===0&&(this.isShooting=!1),t.button===2&&(this.inputs.aiming=!1,this.crosshair.classList.remove("aiming"))}),window.addEventListener("contextmenu",t=>t.preventDefault()),window.addEventListener("wheel",t=>{t.deltaY>0?this.switchWeapon((this.weapons.currentIndex+1)%this.weapons.weapons.length):t.deltaY<0&&this.switchWeapon((this.weapons.currentIndex-1+this.weapons.weapons.length)%this.weapons.weapons.length)})}switchWeapon(t){this.weapons.selectWeapon(t),this.player.setHeldWeapon(t)}handleFireWeapon(){if(this.player.inVehicle){Pt.playShoot("smg");return}const t=this.player.getFireOrigin(),e=this.player.getFireDirection();this.npcs.notifyGunfire(t),this.weapons.fire(t,e,{npcs:this.npcs.npcs,police:this.police.officers,vehicles:this.vehicles.vehicles,colliders:this.city.colliders},(i,r)=>{if(this.ui.showHitmarker(),i.targetType==="npc"){const o=i.target.isDead;if(i.target.takeDamage(r,t),!o&&i.target.isDead){const a=Math.min(5,this.police.wantedStars+1);this.police.addCrime(a),this.ui.showAnnouncement(`WANTED: ${a} STAR(S) - NPC ELIMINATED!`)}}else if(i.targetType==="police"){const o=i.target.isDead;if(i.target.takeDamage(r),!o&&i.target.isDead){const a=Math.min(5,Math.max(2,this.police.wantedStars+1));this.police.addCrime(a),this.ui.showAnnouncement(`WANTED: ${a} STAR(S) - OFFICER DOWN!`)}}else i.targetType==="vehicle"&&i.target.takeDamage(r)})&&this.player.triggerRecoil()}handleVehicleInteract(){if(this.player.inVehicle)this.player.exitVehicle(),this.ui.showAnnouncement("EXITED VEHICLE");else{const t=this.vehicles.getNearestVehicle(this.player.mesh.position,5.5);if(t){const e=t.type==="police"?"POLICE CRUISER":t.type.toUpperCase();this.ui.showAnnouncement(`JACKING ${e}...`),this.player.startCarjacking(t,()=>{t.type==="police"?this.ui.showAnnouncement("DRIVING POLICE CRUISER - PRESS E FOR SIREN & LIGHTS!"):this.ui.showAnnouncement(`DRIVING ${e}`)})}}}setupWindowResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)})}checkInteractiveTriggers(){const t=this.player.inVehicle&&this.player.currentVehicle?this.player.currentVehicle.mesh.position:this.player.mesh.position;let e=null;if(this.player.inVehicle)e=`<span class="key-tag">F</span> EXIT VEHICLE &nbsp;|&nbsp; <span class="key-tag">R</span> RADIO${this.player.currentVehicle&&this.player.currentVehicle.type==="police"?' &nbsp;|&nbsp; <span class="key-tag">E</span> SIREN & LIGHTS':' &nbsp;|&nbsp; <span class="key-tag">E</span> HORN'}`;else{const r=this.vehicles.getNearestVehicle(t,5.5);r&&(e=`<span class="key-tag">F</span> DRIVE ${r.type==="police"?"POLICE CRUISER":r.type.toUpperCase()}`)}this.city.interactivityZones.forEach(r=>{if(r.box.containsPoint(t)){if(r.type==="ammunation"&&!this.player.inVehicle)e='<span class="key-tag">AUTO</span> AMMU-NATION: AMMO & ARMOR REFILLED',this.weapons.refillAllAmmo(),this.player.healAndArmor(),this.ui.showAnnouncement("AMMU-NATION: FULL AMMO & ARMOR RESTORED");else if(r.type==="pay_n_spray"&&this.player.inVehicle){const o=this.player.currentVehicle;(o.health<100||this.police.wantedStars>0)&&(o.repair(),this.police.clearWantedLevel(),Pt.playMoney(),this.ui.showAnnouncement("PAY 'N' SPRAY: REPAIRED & HEAT CLEARED!"))}}}),this.ui.setPrompt(e);const n=this.npcs.collectNearbyWallets(t,3);n>0&&(this.player.money+=n,this.ui.showAnnouncement(`PICKED UP $${n}`,1500));const i=this.police.collectPoliceDrops(t,3.2);if(i.ammo>0||i.cash>0){this.player.money+=i.cash;const r=this.weapons.getCurrentWeapon();r.type!=="melee"&&(r.reserveAmmo+=i.ammo),this.ui.showAnnouncement(`POLICE CRATE: +$${i.cash} & +${i.ammo} AMMO`,2e3)}}animate(){requestAnimationFrame(()=>this.animate());const t=Math.min(this.clock.getDelta(),.1),e=this.clock.getElapsedTime();if(this.isGameRunning){this.isShooting&&!this.player.inVehicle&&!this.ui.isMapOpen&&this.handleFireWeapon(),this.city.update(t,e),this.player.inVehicle&&this.player.currentVehicle&&this.player.currentVehicle.updatePhysics(t,this.inputs,this.city.colliders),this.player.update(t,this.inputs,this.city.colliders);const n=this.player.inVehicle&&this.player.currentVehicle?this.player.currentVehicle.mesh.position:this.player.mesh.position,i=!this.player.inVehicle;this.vehicles.update(t,this.player.currentVehicle,this.city.colliders,n,i,this.police.officers,this.npcs.npcs,this.city.traffic),this.vehicles.checkPedestrianCollisions(this.npcs.npcs,this.police.officers,(r,o,a)=>{if(a===this.player.currentVehicle||a.isPlayerOccupied){const l=Math.min(5,this.police.wantedStars+1);this.police.addCrime(l);const c=o==="police"?"OFFICER RUN OVER!":"VEHICULAR HOMICIDE!";this.ui.showAnnouncement(`WANTED: ${l} STAR(S) - ${c}`)}},t,this.player.currentVehicle),this.player.getFireDirection(),this.npcs.update(t,this.player.mesh.position,this.inputs.aiming),this.police.update(t,n,this.player.currentVehicle,r=>{this.player.takeDamage(r)}),this.weapons.update(t),this.checkInteractiveTriggers(),this.ui.updateHUD(this.player,this.weapons,this.police),this.ui.drawRadar(this.player,this.city,this.vehicles.vehicles,this.npcs.npcs,this.police),this.ui.isMapOpen&&this.ui.drawFullMap(this.player,this.city,this.vehicles.vehicles,this.police)}this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new mm});
