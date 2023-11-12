(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ii(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ne={},Zt=[],Ne=()=>{},zl=()=>!1,ql=/^on[^a-z]/,Ur=t=>ql.test(t),oi=t=>t.startsWith("onUpdate:"),ue=Object.assign,ai=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kl=Object.prototype.hasOwnProperty,q=(t,e)=>Kl.call(t,e),B=Array.isArray,en=t=>Wn(t)==="[object Map]",Fr=t=>Wn(t)==="[object Set]",Wi=t=>Wn(t)==="[object Date]",H=t=>typeof t=="function",ae=t=>typeof t=="string",xn=t=>typeof t=="symbol",te=t=>t!==null&&typeof t=="object",Ia=t=>(te(t)||H(t))&&H(t.then)&&H(t.catch),Ta=Object.prototype.toString,Wn=t=>Ta.call(t),Jl=t=>Wn(t).slice(8,-1),Sa=t=>Wn(t)==="[object Object]",ci=t=>ae(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ar=ii(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Br=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Gl=/-(\w)/g,Je=Br(t=>t.replace(Gl,(e,n)=>n?n.toUpperCase():"")),Yl=/\B([A-Z])/g,mn=Br(t=>t.replace(Yl,"-$1").toLowerCase()),$r=Br(t=>t.charAt(0).toUpperCase()+t.slice(1)),ls=Br(t=>t?`on${$r(t)}`:""),jt=(t,e)=>!Object.is(t,e),cr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},vr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Er=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zi;const Cs=()=>zi||(zi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function li(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ae(r)?eu(r):li(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ae(t)||te(t))return t}const Xl=/;(?![^(]*\))/g,Ql=/:([^]+)/,Zl=/\/\*[^]*?\*\//g;function eu(t){const e={};return t.replace(Zl,"").split(Xl).forEach(n=>{if(n){const r=n.split(Ql);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ui(t){let e="";if(ae(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=ui(t[n]);r&&(e+=r+" ")}else if(te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nu=ii(tu);function Ra(t){return!!t||t===""}function ru(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=jr(t[r],e[r]);return n}function jr(t,e){if(t===e)return!0;let n=Wi(t),r=Wi(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=xn(t),r=xn(e),n||r)return t===e;if(n=B(t),r=B(e),n||r)return n&&r?ru(t,e):!1;if(n=te(t),r=te(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!jr(t[o],e[o]))return!1}}return String(t)===String(e)}function su(t,e){return t.findIndex(n=>jr(n,e))}const Yt=t=>ae(t)?t:t==null?"":B(t)||te(t)&&(t.toString===Ta||!H(t.toString))?JSON.stringify(t,Aa,2):String(t),Aa=(t,e)=>e&&e.__v_isRef?Aa(t,e.value):en(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Fr(e)?{[`Set(${e.size})`]:[...e.values()]}:te(e)&&!B(e)&&!Sa(e)?String(e):e;let Ce;class iu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!e&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ce;try{return Ce=this,e()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ou(t,e=Ce){e&&e.active&&e.effects.push(t)}function au(){return Ce}const fi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Oa=t=>(t.w&Rt)>0,Ca=t=>(t.n&Rt)>0,cu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rt},lu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Oa(s)&&!Ca(s)?s.delete(t):e[n++]=s,s.w&=~Rt,s.n&=~Rt}e.length=n}},Ps=new WeakMap;let Tn=0,Rt=1;const xs=30;let Pe;const Ut=Symbol(""),ks=Symbol("");class di{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ou(this,r)}run(){if(!this.active)return this.fn();let e=Pe,n=wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Pe,Pe=this,wt=!0,Rt=1<<++Tn,Tn<=xs?cu(this):qi(this),this.fn()}finally{Tn<=xs&&lu(this),Rt=1<<--Tn,Pe=this.parent,wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(qi(this),this.onStop&&this.onStop(),this.active=!1)}}function qi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wt=!0;const Pa=[];function gn(){Pa.push(wt),wt=!1}function _n(){const t=Pa.pop();wt=t===void 0?!0:t}function be(t,e,n){if(wt&&Pe){let r=Ps.get(t);r||Ps.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=fi()),xa(s)}}function xa(t,e){let n=!1;Tn<=xs?Ca(t)||(t.n|=Rt,n=!Oa(t)):n=!t.has(Pe),n&&(t.add(Pe),Pe.deps.push(t))}function rt(t,e,n,r,s,i){const o=Ps.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?ci(n)&&a.push(o.get("length")):(a.push(o.get(Ut)),en(t)&&a.push(o.get(ks)));break;case"delete":B(t)||(a.push(o.get(Ut)),en(t)&&a.push(o.get(ks)));break;case"set":en(t)&&a.push(o.get(Ut));break}if(a.length===1)a[0]&&Ns(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Ns(fi(c))}}function Ns(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&Ki(r);for(const r of n)r.computed||Ki(r)}function Ki(t,e){(t!==Pe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const uu=ii("__proto__,__v_isRef,__isVue"),ka=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xn)),Ji=fu();function fu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)be(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gn();const r=K(this)[e].apply(this,n);return _n(),r}}),t}function du(t){const e=K(this);return be(e,"has",t),e.hasOwnProperty(t)}class Na{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?Su:Ua:i?La:Ma).get(e))return e;const o=B(e);if(!s){if(o&&q(Ji,n))return Reflect.get(Ji,n,r);if(n==="hasOwnProperty")return du}const a=Reflect.get(e,n,r);return(xn(n)?ka.has(n):uu(n))||(s||be(e,"get",n),i)?a:he(a)?o&&ci(n)?a:a.value:te(a)?s?Ba(a):zn(a):a}}class Da extends Na{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(cn(i)&&he(i)&&!he(r))return!1;if(!this._shallow&&(!wr(r)&&!cn(r)&&(i=K(i),r=K(r)),!B(e)&&he(i)&&!he(r)))return i.value=r,!0;const o=B(e)&&ci(n)?Number(n)<e.length:q(e,n),a=Reflect.set(e,n,r,s);return e===K(s)&&(o?jt(r,i)&&rt(e,"set",n,r):rt(e,"add",n,r)),a}deleteProperty(e,n){const r=q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&rt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!xn(n)||!ka.has(n))&&be(e,"has",n),r}ownKeys(e){return be(e,"iterate",B(e)?"length":Ut),Reflect.ownKeys(e)}}class hu extends Na{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const pu=new Da,mu=new hu,gu=new Da(!0),hi=t=>t,Hr=t=>Reflect.getPrototypeOf(t);function er(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(jt(e,i)&&be(s,"get",e),be(s,"get",i));const{has:o}=Hr(s),a=r?hi:n?gi:kn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function tr(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(jt(t,s)&&be(r,"has",t),be(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function nr(t,e=!1){return t=t.__v_raw,!e&&be(K(t),"iterate",Ut),Reflect.get(t,"size",t)}function Gi(t){t=K(t);const e=K(this);return Hr(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function Yi(t,e){e=K(e);const n=K(this),{has:r,get:s}=Hr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?jt(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function Xi(t){const e=K(this),{has:n,get:r}=Hr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function Qi(){const t=K(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function rr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?hi:t?gi:kn;return!t&&be(a,"iterate",Ut),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function sr(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=en(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?hi:e?gi:kn;return!e&&be(i,"iterate",c?ks:Ut),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[l(d[0]),l(d[1])]:l(d),done:p}},[Symbol.iterator](){return this}}}}function ft(t){return function(...e){return t==="delete"?!1:this}}function _u(){const t={get(i){return er(this,i)},get size(){return nr(this)},has:tr,add:Gi,set:Yi,delete:Xi,clear:Qi,forEach:rr(!1,!1)},e={get(i){return er(this,i,!1,!0)},get size(){return nr(this)},has:tr,add:Gi,set:Yi,delete:Xi,clear:Qi,forEach:rr(!1,!0)},n={get(i){return er(this,i,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:rr(!0,!1)},r={get(i){return er(this,i,!0,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),e[i]=sr(i,!1,!0),r[i]=sr(i,!0,!0)}),[t,n,e,r]}const[yu,bu,vu,Eu]=_u();function pi(t,e){const n=e?t?Eu:vu:t?bu:yu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(q(n,s)&&s in r?n:r,s,i)}const wu={get:pi(!1,!1)},Iu={get:pi(!1,!0)},Tu={get:pi(!0,!1)},Ma=new WeakMap,La=new WeakMap,Ua=new WeakMap,Su=new WeakMap;function Ru(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Au(t){return t.__v_skip||!Object.isExtensible(t)?0:Ru(Jl(t))}function zn(t){return cn(t)?t:mi(t,!1,pu,wu,Ma)}function Fa(t){return mi(t,!1,gu,Iu,La)}function Ba(t){return mi(t,!0,mu,Tu,Ua)}function mi(t,e,n,r,s){if(!te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Au(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tn(t){return cn(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function wr(t){return!!(t&&t.__v_isShallow)}function $a(t){return tn(t)||cn(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function ja(t){return vr(t,"__v_skip",!0),t}const kn=t=>te(t)?zn(t):t,gi=t=>te(t)?Ba(t):t;function Ha(t){wt&&Pe&&(t=K(t),xa(t.dep||(t.dep=fi())))}function Va(t,e){t=K(t);const n=t.dep;n&&Ns(n)}function he(t){return!!(t&&t.__v_isRef===!0)}function Te(t){return Wa(t,!1)}function Ou(t){return Wa(t,!0)}function Wa(t,e){return he(t)?t:new Cu(t,e)}class Cu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:kn(e)}get value(){return Ha(this),this._value}set value(e){const n=this.__v_isShallow||wr(e)||cn(e);e=n?e:K(e),jt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:kn(e),Va(this))}}function Ft(t){return he(t)?t.value:t}const Pu={get:(t,e,n)=>Ft(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return he(s)&&!he(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function za(t){return tn(t)?t:new Proxy(t,Pu)}class xu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new di(e,()=>{this._dirty||(this._dirty=!0,Va(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Ha(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ku(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Ne):(r=t.get,s=t.set),new xu(r,s,i||!s,n)}function It(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Vr(i,e,n)}return s}function De(t,e,n,r){if(H(t)){const i=It(t,e,n,r);return i&&Ia(i)&&i.catch(o=>{Vr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(De(t[i],e,n,r));return s}function Vr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){It(c,null,10,[t,o,a]);return}}Nu(t,n,s,r)}function Nu(t,e,n,r=!0){console.error(t)}let Nn=!1,Ds=!1;const de=[];let Ve=0;const nn=[];let Qe=null,Nt=0;const qa=Promise.resolve();let _i=null;function Ka(t){const e=_i||qa;return t?e.then(this?t.bind(this):t):e}function Du(t){let e=Ve+1,n=de.length;for(;e<n;){const r=e+n>>>1;Dn(de[r])<t?e=r+1:n=r}return e}function yi(t){(!de.length||!de.includes(t,Nn&&t.allowRecurse?Ve+1:Ve))&&(t.id==null?de.push(t):de.splice(Du(t.id),0,t),Ja())}function Ja(){!Nn&&!Ds&&(Ds=!0,_i=qa.then(Ya))}function Mu(t){const e=de.indexOf(t);e>Ve&&de.splice(e,1)}function Lu(t){B(t)?nn.push(...t):(!Qe||!Qe.includes(t,t.allowRecurse?Nt+1:Nt))&&nn.push(t),Ja()}function Zi(t,e=Nn?Ve+1:0){for(;e<de.length;e++){const n=de[e];n&&n.pre&&(de.splice(e,1),e--,n())}}function Ga(t){if(nn.length){const e=[...new Set(nn)];if(nn.length=0,Qe){Qe.push(...e);return}for(Qe=e,Qe.sort((n,r)=>Dn(n)-Dn(r)),Nt=0;Nt<Qe.length;Nt++)Qe[Nt]();Qe=null,Nt=0}}const Dn=t=>t.id==null?1/0:t.id,Uu=(t,e)=>{const n=Dn(t)-Dn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ya(t){Ds=!1,Nn=!0,de.sort(Uu);const e=Ne;try{for(Ve=0;Ve<de.length;Ve++){const n=de[Ve];n&&n.active!==!1&&It(n,null,14)}}finally{Ve=0,de.length=0,Ga(),Nn=!1,_i=null,(de.length||nn.length)&&Ya()}}function Fu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[l]||ne;p&&(s=n.map(_=>ae(_)?_.trim():_)),d&&(s=n.map(Er))}let a,c=r[a=ls(e)]||r[a=ls(Je(e))];!c&&i&&(c=r[a=ls(mn(e))]),c&&De(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,De(u,t,6,s)}}function Xa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=u=>{const l=Xa(u,e,!0);l&&(a=!0,ue(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(te(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):ue(o,i),te(t)&&r.set(t,o),o)}function Wr(t,e){return!t||!Ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),q(t,e[0].toLowerCase()+e.slice(1))||q(t,mn(e))||q(t,e))}let Se=null,zr=null;function Ir(t){const e=Se;return Se=t,zr=t&&t.type.__scopeId||null,e}function Qa(t){zr=t}function Za(){zr=null}function Ms(t,e=Se,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&uo(-1);const i=Ir(e);let o;try{o=t(...s)}finally{Ir(i),r._d&&uo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function us(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:d,data:p,setupState:_,ctx:g,inheritAttrs:w}=t;let N,P;const k=Ir(t);try{if(n.shapeFlag&4){const L=s||r;N=He(l.call(L,L,d,i,_,p,g)),P=c}else{const L=e;N=He(L.length>1?L(i,{attrs:c,slots:a,emit:u}):L(i,null)),P=e.props?c:Bu(c)}}catch(L){An.length=0,Vr(L,t,1),N=pe(Mn)}let V=N;if(P&&w!==!1){const L=Object.keys(P),{shapeFlag:ie}=V;L.length&&ie&7&&(o&&L.some(oi)&&(P=$u(P,o)),V=ln(V,P))}return n.dirs&&(V=ln(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),N=V,Ir(k),N}const Bu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ur(n))&&((e||(e={}))[n]=t[n]);return e},$u=(t,e)=>{const n={};for(const r in t)(!oi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ju(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?eo(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let d=0;d<l.length;d++){const p=l[d];if(o[p]!==r[p]&&!Wr(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?eo(r,o,u):!0:!!o;return!1}function eo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wr(n,i))return!0}return!1}function Hu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Vu=t=>t.__isSuspense;function Wu(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Lu(t)}const ir={};function lr(t,e,n){return ec(t,e,n)}function ec(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ne){var a;const c=au()===((a=le)==null?void 0:a.scope)?le:null;let u,l=!1,d=!1;if(he(t)?(u=()=>t.value,l=wr(t)):tn(t)?(u=()=>t,r=!0):B(t)?(d=!0,l=t.some(L=>tn(L)||wr(L)),u=()=>t.map(L=>{if(he(L))return L.value;if(tn(L))return Lt(L);if(H(L))return It(L,c,2)})):H(t)?e?u=()=>It(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),De(t,c,3,[_])}:u=Ne,e&&r){const L=u;u=()=>Lt(L())}let p,_=L=>{p=k.onStop=()=>{It(L,c,4)}},g;if(Un)if(_=Ne,e?n&&De(e,c,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const L=Bf();g=L.__watcherHandles||(L.__watcherHandles=[])}else return Ne;let w=d?new Array(t.length).fill(ir):ir;const N=()=>{if(k.active)if(e){const L=k.run();(r||l||(d?L.some((ie,oe)=>jt(ie,w[oe])):jt(L,w)))&&(p&&p(),De(e,c,3,[L,w===ir?void 0:d&&w[0]===ir?[]:w,_]),w=L)}else k.run()};N.allowRecurse=!!e;let P;s==="sync"?P=N:s==="post"?P=()=>ye(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),P=()=>yi(N));const k=new di(u,P);e?n?N():w=k.run():s==="post"?ye(k.run.bind(k),c&&c.suspense):k.run();const V=()=>{k.stop(),c&&c.scope&&ai(c.scope.effects,k)};return g&&g.push(V),V}function zu(t,e,n){const r=this.proxy,s=ae(t)?t.includes(".")?tc(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=le;un(this);const a=ec(s,i.bind(r),n);return o?un(o):Bt(),a}function tc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Lt(t,e){if(!te(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),he(t))Lt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Lt(t[n],e);else if(Fr(t)||en(t))t.forEach(n=>{Lt(n,e)});else if(Sa(t))for(const n in t)Lt(t[n],e);return t}function We(t,e){const n=Se;if(n===null)return t;const r=Yr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ne]=e[i];o&&(H(o)&&(o={mounted:o,updated:o}),o.deep&&Lt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Pt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(gn(),De(c,n,8,[t.el,a,t,e]),_n())}}/*! #__NO_SIDE_EFFECTS__ */function nc(t,e){return H(t)?(()=>ue({name:t.name},e,{setup:t}))():t}const ur=t=>!!t.type.__asyncLoader,rc=t=>t.type.__isKeepAlive;function qu(t,e){sc(t,"a",e)}function Ku(t,e){sc(t,"da",e)}function sc(t,e,n=le){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(qr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)rc(s.parent.vnode)&&Ju(r,e,n,s),s=s.parent}}function Ju(t,e,n,r){const s=qr(e,t,r,!0);ic(()=>{ai(r[e],s)},n)}function qr(t,e,n=le,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gn(),un(n);const a=De(e,n,t,o);return Bt(),_n(),a});return r?s.unshift(i):s.push(i),i}}const ct=t=>(e,n=le)=>(!Un||t==="sp")&&qr(t,(...r)=>e(...r),n),Gu=ct("bm"),Kr=ct("m"),Yu=ct("bu"),Xu=ct("u"),Qu=ct("bum"),ic=ct("um"),Zu=ct("sp"),ef=ct("rtg"),tf=ct("rtc");function nf(t,e=le){qr("ec",t,e)}const oc="components";function ac(t,e){return sf(oc,t,!0,e)||t}const rf=Symbol.for("v-ndc");function sf(t,e,n=!0,r=!1){const s=Se||le;if(s){const i=s.type;if(t===oc){const a=Lf(i,!1);if(a&&(a===e||a===Je(e)||a===$r(Je(e))))return i}const o=to(s[t]||i[t],e)||to(s.appContext[t],e);return!o&&r?i:o}}function to(t,e){return t&&(t[e]||t[Je(e)]||t[$r(Je(e))])}function of(t,e,n,r){let s;const i=n&&n[r];if(B(t)||ae(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(te(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Ls=t=>t?_c(t)?Yr(t)||t.proxy:Ls(t.parent):null,Rn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ls(t.parent),$root:t=>Ls(t.root),$emit:t=>t.emit,$options:t=>bi(t),$forceUpdate:t=>t.f||(t.f=()=>yi(t.update)),$nextTick:t=>t.n||(t.n=Ka.bind(t.proxy)),$watch:t=>zu.bind(t)}),fs=(t,e)=>t!==ne&&!t.__isScriptSetup&&q(t,e),af={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fs(r,e))return o[e]=1,r[e];if(s!==ne&&q(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&q(u,e))return o[e]=3,i[e];if(n!==ne&&q(n,e))return o[e]=4,n[e];Us&&(o[e]=0)}}const l=Rn[e];let d,p;if(l)return e==="$attrs"&&be(t,"get",e),l(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ne&&q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,q(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fs(s,e)?(s[e]=n,!0):r!==ne&&q(r,e)?(r[e]=n,!0):q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ne&&q(t,o)||fs(e,o)||(a=i[0])&&q(a,o)||q(r,o)||q(Rn,o)||q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function no(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Us=!0;function cf(t){const e=bi(t),n=t.proxy,r=t.ctx;Us=!1,e.beforeCreate&&ro(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:p,beforeUpdate:_,updated:g,activated:w,deactivated:N,beforeDestroy:P,beforeUnmount:k,destroyed:V,unmounted:L,render:ie,renderTracked:oe,renderTriggered:ve,errorCaptured:Ae,serverPrefetch:Le,expose:Ie,inheritAttrs:lt,components:Ct,directives:Ue,filters:bn}=e;if(u&&lf(u,r,null),o)for(const Q in o){const J=o[Q];H(J)&&(r[Q]=J.bind(n))}if(s){const Q=s.call(n,n);te(Q)&&(t.data=zn(Q))}if(Us=!0,i)for(const Q in i){const J=i[Q],Ye=H(J)?J.bind(n,n):H(J.get)?J.get.bind(n,n):Ne,ut=!H(J)&&H(J.set)?J.set.bind(n):Ne,Fe=xe({get:Ye,set:ut});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:_e=>Fe.value=_e})}if(a)for(const Q in a)cc(a[Q],r,n,Q);if(c){const Q=H(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(J=>{fr(J,Q[J])})}l&&ro(l,t,"c");function ce(Q,J){B(J)?J.forEach(Ye=>Q(Ye.bind(n))):J&&Q(J.bind(n))}if(ce(Gu,d),ce(Kr,p),ce(Yu,_),ce(Xu,g),ce(qu,w),ce(Ku,N),ce(nf,Ae),ce(tf,oe),ce(ef,ve),ce(Qu,k),ce(ic,L),ce(Zu,Le),B(Ie))if(Ie.length){const Q=t.exposed||(t.exposed={});Ie.forEach(J=>{Object.defineProperty(Q,J,{get:()=>n[J],set:Ye=>n[J]=Ye})})}else t.exposed||(t.exposed={});ie&&t.render===Ne&&(t.render=ie),lt!=null&&(t.inheritAttrs=lt),Ct&&(t.components=Ct),Ue&&(t.directives=Ue)}function lf(t,e,n=Ne){B(t)&&(t=Fs(t));for(const r in t){const s=t[r];let i;te(s)?"default"in s?i=st(s.from||r,s.default,!0):i=st(s.from||r):i=st(s),he(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ro(t,e,n){De(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function cc(t,e,n,r){const s=r.includes(".")?tc(n,r):()=>n[r];if(ae(t)){const i=e[t];H(i)&&lr(s,i)}else if(H(t))lr(s,t.bind(n));else if(te(t))if(B(t))t.forEach(i=>cc(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&lr(s,i,t)}}function bi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Tr(c,u,o,!0)),Tr(c,e,o)),te(e)&&i.set(e,c),c}function Tr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Tr(t,i,n,!0),s&&s.forEach(o=>Tr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=uf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const uf={data:so,props:io,emits:io,methods:Sn,computed:Sn,beforeCreate:ge,created:ge,beforeMount:ge,mounted:ge,beforeUpdate:ge,updated:ge,beforeDestroy:ge,beforeUnmount:ge,destroyed:ge,unmounted:ge,activated:ge,deactivated:ge,errorCaptured:ge,serverPrefetch:ge,components:Sn,directives:Sn,watch:df,provide:so,inject:ff};function so(t,e){return e?t?function(){return ue(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function ff(t,e){return Sn(Fs(t),Fs(e))}function Fs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ge(t,e){return t?[...new Set([].concat(t,e))]:e}function Sn(t,e){return t?ue(Object.create(null),t,e):e}function io(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:ue(Object.create(null),no(t),no(e??{})):e}function df(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=ge(t[r],e[r]);return n}function lc(){return{app:null,config:{isNativeTag:zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hf=0;function pf(t,e){return function(r,s=null){H(r)||(r=ue({},r)),s!=null&&!te(s)&&(s=null);const i=lc(),o=new WeakSet;let a=!1;const c=i.app={_uid:hf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$f,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&H(u.install)?(o.add(u),u.install(c,...l)):H(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,d){if(!a){const p=pe(r,s);return p.appContext=i,l&&e?e(p,u):t(p,u,d),a=!0,c._container=u,u.__vue_app__=c,Yr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c},runWithContext(u){Sr=c;try{return u()}finally{Sr=null}}};return c}}let Sr=null;function fr(t,e){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[t]=e}}function st(t,e,n=!1){const r=le||Se;if(r||Sr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Sr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function mf(t,e,n,r=!1){const s={},i={};vr(i,Gr,1),t.propsDefaults=Object.create(null),uc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Fa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let d=0;d<l.length;d++){let p=l[d];if(Wr(t.emitsOptions,p))continue;const _=e[p];if(c)if(q(i,p))_!==i[p]&&(i[p]=_,u=!0);else{const g=Je(p);s[g]=Bs(c,a,g,_,t,!1)}else _!==i[p]&&(i[p]=_,u=!0)}}}else{uc(t,e,s,i)&&(u=!0);let l;for(const d in a)(!e||!q(e,d)&&((l=mn(d))===d||!q(e,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(s[d]=Bs(c,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!q(e,d))&&(delete i[d],u=!0)}u&&rt(t,"set","$attrs")}function uc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ar(c))continue;const u=e[c];let l;s&&q(s,l=Je(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Wr(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=K(n),u=a||ne;for(let l=0;l<i.length;l++){const d=i[l];n[d]=Bs(s,c,d,u[d],t,!q(u,d))}}return o}function Bs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(un(s),r=u[n]=c.call(null,e),Bt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===mn(n))&&(r=!0))}return r}function fc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const l=d=>{c=!0;const[p,_]=fc(d,e,!0);ue(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return te(t)&&r.set(t,Zt),Zt;if(B(i))for(let l=0;l<i.length;l++){const d=Je(i[l]);oo(d)&&(o[d]=ne)}else if(i)for(const l in i){const d=Je(l);if(oo(d)){const p=i[l],_=o[d]=B(p)||H(p)?{type:p}:ue({},p);if(_){const g=lo(Boolean,_.type),w=lo(String,_.type);_[0]=g>-1,_[1]=w<0||g<w,(g>-1||q(_,"default"))&&a.push(d)}}}const u=[o,a];return te(t)&&r.set(t,u),u}function oo(t){return t[0]!=="$"}function ao(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function co(t,e){return ao(t)===ao(e)}function lo(t,e){return B(e)?e.findIndex(n=>co(n,t)):H(e)&&co(e,t)?0:-1}const dc=t=>t[0]==="_"||t==="$stable",vi=t=>B(t)?t.map(He):[He(t)],_f=(t,e,n)=>{if(e._n)return e;const r=Ms((...s)=>vi(e(...s)),n);return r._c=!1,r},hc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(dc(s))continue;const i=t[s];if(H(i))e[s]=_f(s,i,r);else if(i!=null){const o=vi(i);e[s]=()=>o}}},pc=(t,e)=>{const n=vi(e);t.slots.default=()=>n},yf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),vr(e,"_",n)):hc(e,t.slots={})}else t.slots={},e&&pc(t,e);vr(t.slots,Gr,1)},bf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ne;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ue(s,e),!n&&a===1&&delete s._):(i=!e.$stable,hc(e,s)),o=e}else e&&(pc(t,e),o={default:1});if(i)for(const a in s)!dc(a)&&o[a]==null&&delete s[a]};function $s(t,e,n,r,s=!1){if(B(t)){t.forEach((p,_)=>$s(p,e&&(B(e)?e[_]:e),n,r,s));return}if(ur(r)&&!s)return;const i=r.shapeFlag&4?Yr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ne?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(ae(u)?(l[u]=null,q(d,u)&&(d[u]=null)):he(u)&&(u.value=null)),H(c))It(c,a,12,[o,l]);else{const p=ae(c),_=he(c);if(p||_){const g=()=>{if(t.f){const w=p?q(d,c)?d[c]:l[c]:c.value;s?B(w)&&ai(w,i):B(w)?w.includes(i)||w.push(i):p?(l[c]=[i],q(d,c)&&(d[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else p?(l[c]=o,q(d,c)&&(d[c]=o)):_&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,ye(g,n)):g()}}}const ye=Wu;function vf(t){return Ef(t)}function Ef(t,e){const n=Cs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:p,setScopeId:_=Ne,insertStaticContent:g}=t,w=(f,h,m,y=null,E=null,I=null,O=!1,S=null,R=!!h.dynamicChildren)=>{if(f===h)return;f&&!En(f,h)&&(y=v(f),_e(f,E,I,!0),f=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:T,ref:U,shapeFlag:D}=h;switch(T){case Jr:N(f,h,m,y);break;case Mn:P(f,h,m,y);break;case ds:f==null&&k(h,m,y,O);break;case je:Ct(f,h,m,y,E,I,O,S,R);break;default:D&1?ie(f,h,m,y,E,I,O,S,R):D&6?Ue(f,h,m,y,E,I,O,S,R):(D&64||D&128)&&T.process(f,h,m,y,E,I,O,S,R,A)}U!=null&&E&&$s(U,f&&f.ref,I,h||f,!h)},N=(f,h,m,y)=>{if(f==null)r(h.el=a(h.children),m,y);else{const E=h.el=f.el;h.children!==f.children&&u(E,h.children)}},P=(f,h,m,y)=>{f==null?r(h.el=c(h.children||""),m,y):h.el=f.el},k=(f,h,m,y)=>{[f.el,f.anchor]=g(f.children,h,m,y,f.el,f.anchor)},V=({el:f,anchor:h},m,y)=>{let E;for(;f&&f!==h;)E=p(f),r(f,m,y),f=E;r(h,m,y)},L=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),s(f),f=m;s(h)},ie=(f,h,m,y,E,I,O,S,R)=>{O=O||h.type==="svg",f==null?oe(h,m,y,E,I,O,S,R):Le(f,h,E,I,O,S,R)},oe=(f,h,m,y,E,I,O,S)=>{let R,T;const{type:U,props:D,shapeFlag:F,transition:j,dirs:W}=f;if(R=f.el=o(f.type,I,D&&D.is,D),F&8?l(R,f.children):F&16&&Ae(f.children,R,null,y,E,I&&U!=="foreignObject",O,S),W&&Pt(f,null,y,"created"),ve(R,f,f.scopeId,O,y),D){for(const X in D)X!=="value"&&!ar(X)&&i(R,X,null,D[X],I,f.children,y,E,fe);"value"in D&&i(R,"value",null,D.value),(T=D.onVnodeBeforeMount)&&$e(T,y,f)}W&&Pt(f,null,y,"beforeMount");const Z=(!E||E&&!E.pendingBranch)&&j&&!j.persisted;Z&&j.beforeEnter(R),r(R,h,m),((T=D&&D.onVnodeMounted)||Z||W)&&ye(()=>{T&&$e(T,y,f),Z&&j.enter(R),W&&Pt(f,null,y,"mounted")},E)},ve=(f,h,m,y,E)=>{if(m&&_(f,m),y)for(let I=0;I<y.length;I++)_(f,y[I]);if(E){let I=E.subTree;if(h===I){const O=E.vnode;ve(f,O,O.scopeId,O.slotScopeIds,E.parent)}}},Ae=(f,h,m,y,E,I,O,S,R=0)=>{for(let T=R;T<f.length;T++){const U=f[T]=S?mt(f[T]):He(f[T]);w(null,U,h,m,y,E,I,O,S)}},Le=(f,h,m,y,E,I,O)=>{const S=h.el=f.el;let{patchFlag:R,dynamicChildren:T,dirs:U}=h;R|=f.patchFlag&16;const D=f.props||ne,F=h.props||ne;let j;m&&xt(m,!1),(j=F.onVnodeBeforeUpdate)&&$e(j,m,h,f),U&&Pt(h,f,m,"beforeUpdate"),m&&xt(m,!0);const W=E&&h.type!=="foreignObject";if(T?Ie(f.dynamicChildren,T,S,m,y,W,I):O||J(f,h,S,null,m,y,W,I,!1),R>0){if(R&16)lt(S,h,D,F,m,y,E);else if(R&2&&D.class!==F.class&&i(S,"class",null,F.class,E),R&4&&i(S,"style",D.style,F.style,E),R&8){const Z=h.dynamicProps;for(let X=0;X<Z.length;X++){const re=Z[X],Oe=D[re],Jt=F[re];(Jt!==Oe||re==="value")&&i(S,re,Oe,Jt,E,f.children,m,y,fe)}}R&1&&f.children!==h.children&&l(S,h.children)}else!O&&T==null&&lt(S,h,D,F,m,y,E);((j=F.onVnodeUpdated)||U)&&ye(()=>{j&&$e(j,m,h,f),U&&Pt(h,f,m,"updated")},y)},Ie=(f,h,m,y,E,I,O)=>{for(let S=0;S<h.length;S++){const R=f[S],T=h[S],U=R.el&&(R.type===je||!En(R,T)||R.shapeFlag&70)?d(R.el):m;w(R,T,U,null,y,E,I,O,!0)}},lt=(f,h,m,y,E,I,O)=>{if(m!==y){if(m!==ne)for(const S in m)!ar(S)&&!(S in y)&&i(f,S,m[S],null,O,h.children,E,I,fe);for(const S in y){if(ar(S))continue;const R=y[S],T=m[S];R!==T&&S!=="value"&&i(f,S,T,R,O,h.children,E,I,fe)}"value"in y&&i(f,"value",m.value,y.value)}},Ct=(f,h,m,y,E,I,O,S,R)=>{const T=h.el=f?f.el:a(""),U=h.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:F,slotScopeIds:j}=h;j&&(S=S?S.concat(j):j),f==null?(r(T,m,y),r(U,m,y),Ae(h.children,m,U,E,I,O,S,R)):D>0&&D&64&&F&&f.dynamicChildren?(Ie(f.dynamicChildren,F,m,E,I,O,S),(h.key!=null||E&&h===E.subTree)&&mc(f,h,!0)):J(f,h,m,U,E,I,O,S,R)},Ue=(f,h,m,y,E,I,O,S,R)=>{h.slotScopeIds=S,f==null?h.shapeFlag&512?E.ctx.activate(h,m,y,O,R):bn(h,m,y,E,I,O,R):zt(f,h,R)},bn=(f,h,m,y,E,I,O)=>{const S=f.component=xf(f,y,E);if(rc(f)&&(S.ctx.renderer=A),kf(S),S.asyncDep){if(E&&E.registerDep(S,ce),!f.el){const R=S.subTree=pe(Mn);P(null,R,h,m)}return}ce(S,f,h,m,E,I,O)},zt=(f,h,m)=>{const y=h.component=f.component;if(ju(f,h,m))if(y.asyncDep&&!y.asyncResolved){Q(y,h,m);return}else y.next=h,Mu(y.update),y.update();else h.el=f.el,y.vnode=h},ce=(f,h,m,y,E,I,O)=>{const S=()=>{if(f.isMounted){let{next:U,bu:D,u:F,parent:j,vnode:W}=f,Z=U,X;xt(f,!1),U?(U.el=W.el,Q(f,U,O)):U=W,D&&cr(D),(X=U.props&&U.props.onVnodeBeforeUpdate)&&$e(X,j,U,W),xt(f,!0);const re=us(f),Oe=f.subTree;f.subTree=re,w(Oe,re,d(Oe.el),v(Oe),f,E,I),U.el=re.el,Z===null&&Hu(f,re.el),F&&ye(F,E),(X=U.props&&U.props.onVnodeUpdated)&&ye(()=>$e(X,j,U,W),E)}else{let U;const{el:D,props:F}=h,{bm:j,m:W,parent:Z}=f,X=ur(h);if(xt(f,!1),j&&cr(j),!X&&(U=F&&F.onVnodeBeforeMount)&&$e(U,Z,h),xt(f,!0),D&&G){const re=()=>{f.subTree=us(f),G(D,f.subTree,f,E,null)};X?h.type.__asyncLoader().then(()=>!f.isUnmounted&&re()):re()}else{const re=f.subTree=us(f);w(null,re,m,y,f,E,I),h.el=re.el}if(W&&ye(W,E),!X&&(U=F&&F.onVnodeMounted)){const re=h;ye(()=>$e(U,Z,re),E)}(h.shapeFlag&256||Z&&ur(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&ye(f.a,E),f.isMounted=!0,h=m=y=null}},R=f.effect=new di(S,()=>yi(T),f.scope),T=f.update=()=>R.run();T.id=f.uid,xt(f,!0),T()},Q=(f,h,m)=>{h.component=f;const y=f.vnode.props;f.vnode=h,f.next=null,gf(f,h.props,y,m),bf(f,h.children,m),gn(),Zi(),_n()},J=(f,h,m,y,E,I,O,S,R=!1)=>{const T=f&&f.children,U=f?f.shapeFlag:0,D=h.children,{patchFlag:F,shapeFlag:j}=h;if(F>0){if(F&128){ut(T,D,m,y,E,I,O,S,R);return}else if(F&256){Ye(T,D,m,y,E,I,O,S,R);return}}j&8?(U&16&&fe(T,E,I),D!==T&&l(m,D)):U&16?j&16?ut(T,D,m,y,E,I,O,S,R):fe(T,E,I,!0):(U&8&&l(m,""),j&16&&Ae(D,m,y,E,I,O,S,R))},Ye=(f,h,m,y,E,I,O,S,R)=>{f=f||Zt,h=h||Zt;const T=f.length,U=h.length,D=Math.min(T,U);let F;for(F=0;F<D;F++){const j=h[F]=R?mt(h[F]):He(h[F]);w(f[F],j,m,null,E,I,O,S,R)}T>U?fe(f,E,I,!0,!1,D):Ae(h,m,y,E,I,O,S,R,D)},ut=(f,h,m,y,E,I,O,S,R)=>{let T=0;const U=h.length;let D=f.length-1,F=U-1;for(;T<=D&&T<=F;){const j=f[T],W=h[T]=R?mt(h[T]):He(h[T]);if(En(j,W))w(j,W,m,null,E,I,O,S,R);else break;T++}for(;T<=D&&T<=F;){const j=f[D],W=h[F]=R?mt(h[F]):He(h[F]);if(En(j,W))w(j,W,m,null,E,I,O,S,R);else break;D--,F--}if(T>D){if(T<=F){const j=F+1,W=j<U?h[j].el:y;for(;T<=F;)w(null,h[T]=R?mt(h[T]):He(h[T]),m,W,E,I,O,S,R),T++}}else if(T>F)for(;T<=D;)_e(f[T],E,I,!0),T++;else{const j=T,W=T,Z=new Map;for(T=W;T<=F;T++){const Ee=h[T]=R?mt(h[T]):He(h[T]);Ee.key!=null&&Z.set(Ee.key,T)}let X,re=0;const Oe=F-W+1;let Jt=!1,ji=0;const vn=new Array(Oe);for(T=0;T<Oe;T++)vn[T]=0;for(T=j;T<=D;T++){const Ee=f[T];if(re>=Oe){_e(Ee,E,I,!0);continue}let Be;if(Ee.key!=null)Be=Z.get(Ee.key);else for(X=W;X<=F;X++)if(vn[X-W]===0&&En(Ee,h[X])){Be=X;break}Be===void 0?_e(Ee,E,I,!0):(vn[Be-W]=T+1,Be>=ji?ji=Be:Jt=!0,w(Ee,h[Be],m,null,E,I,O,S,R),re++)}const Hi=Jt?wf(vn):Zt;for(X=Hi.length-1,T=Oe-1;T>=0;T--){const Ee=W+T,Be=h[Ee],Vi=Ee+1<U?h[Ee+1].el:y;vn[T]===0?w(null,Be,m,Vi,E,I,O,S,R):Jt&&(X<0||T!==Hi[X]?Fe(Be,m,Vi,2):X--)}}},Fe=(f,h,m,y,E=null)=>{const{el:I,type:O,transition:S,children:R,shapeFlag:T}=f;if(T&6){Fe(f.component.subTree,h,m,y);return}if(T&128){f.suspense.move(h,m,y);return}if(T&64){O.move(f,h,m,A);return}if(O===je){r(I,h,m);for(let D=0;D<R.length;D++)Fe(R[D],h,m,y);r(f.anchor,h,m);return}if(O===ds){V(f,h,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(I),r(I,h,m),ye(()=>S.enter(I),E);else{const{leave:D,delayLeave:F,afterLeave:j}=S,W=()=>r(I,h,m),Z=()=>{D(I,()=>{W(),j&&j()})};F?F(I,W,Z):Z()}else r(I,h,m)},_e=(f,h,m,y=!1,E=!1)=>{const{type:I,props:O,ref:S,children:R,dynamicChildren:T,shapeFlag:U,patchFlag:D,dirs:F}=f;if(S!=null&&$s(S,null,m,f,!0),U&256){h.ctx.deactivate(f);return}const j=U&1&&F,W=!ur(f);let Z;if(W&&(Z=O&&O.onVnodeBeforeUnmount)&&$e(Z,h,f),U&6)Zn(f.component,m,y);else{if(U&128){f.suspense.unmount(m,y);return}j&&Pt(f,null,h,"beforeUnmount"),U&64?f.type.remove(f,h,m,E,A,y):T&&(I!==je||D>0&&D&64)?fe(T,h,m,!1,!0):(I===je&&D&384||!E&&U&16)&&fe(R,h,m),y&&qt(f)}(W&&(Z=O&&O.onVnodeUnmounted)||j)&&ye(()=>{Z&&$e(Z,h,f),j&&Pt(f,null,h,"unmounted")},m)},qt=f=>{const{type:h,el:m,anchor:y,transition:E}=f;if(h===je){Kt(m,y);return}if(h===ds){L(f);return}const I=()=>{s(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:S}=E,R=()=>O(m,I);S?S(f.el,I,R):R()}else I()},Kt=(f,h)=>{let m;for(;f!==h;)m=p(f),s(f),f=m;s(h)},Zn=(f,h,m)=>{const{bum:y,scope:E,update:I,subTree:O,um:S}=f;y&&cr(y),E.stop(),I&&(I.active=!1,_e(O,f,h,m)),S&&ye(S,h),ye(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},fe=(f,h,m,y=!1,E=!1,I=0)=>{for(let O=I;O<f.length;O++)_e(f[O],h,m,y,E)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),C=(f,h,m)=>{f==null?h._vnode&&_e(h._vnode,null,null,!0):w(h._vnode||null,f,h,null,null,null,m),Zi(),Ga(),h._vnode=f},A={p:w,um:_e,m:Fe,r:qt,mt:bn,mc:Ae,pc:J,pbc:Ie,n:v,o:t};let M,G;return e&&([M,G]=e(A)),{render:C,hydrate:M,createApp:pf(C,M)}}function xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mc(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mt(s[i]),a.el=o.el),n||mc(o,a)),a.type===Jr&&(a.el=o.el)}}function wf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const If=t=>t.__isTeleport,je=Symbol.for("v-fgt"),Jr=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),ds=Symbol.for("v-stc"),An=[];let ke=null;function Ze(t=!1){An.push(ke=t?null:[])}function Tf(){An.pop(),ke=An[An.length-1]||null}let Ln=1;function uo(t){Ln+=t}function Sf(t){return t.dynamicChildren=Ln>0?ke||Zt:null,Tf(),Ln>0&&ke&&ke.push(t),t}function et(t,e,n,r,s,i){return Sf(x(t,e,n,r,s,i,!0))}function js(t){return t?t.__v_isVNode===!0:!1}function En(t,e){return t.type===e.type&&t.key===e.key}const Gr="__vInternal",gc=({key:t})=>t??null,dr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ae(t)||he(t)||H(t)?{i:Se,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&gc(e),ref:e&&dr(e),scopeId:zr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Se};return a?(Ei(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ae(n)?8:16),Ln>0&&!o&&ke&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ke.push(c),c}const pe=Rf;function Rf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===rf)&&(t=Mn),js(t)){const a=ln(t,e,!0);return n&&Ei(a,n),Ln>0&&!i&&ke&&(a.shapeFlag&6?ke[ke.indexOf(t)]=a:ke.push(a)),a.patchFlag|=-2,a}if(Uf(t)&&(t=t.__vccOpts),e){e=Af(e);let{class:a,style:c}=e;a&&!ae(a)&&(e.class=ui(a)),te(c)&&($a(c)&&!B(c)&&(c=ue({},c)),e.style=li(c))}const o=ae(t)?1:Vu(t)?128:If(t)?64:te(t)?4:H(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function Af(t){return t?$a(t)||Gr in t?ue({},t):t:null}function ln(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Of(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&gc(a),ref:e&&e.ref?n&&s?B(s)?s.concat(dr(e)):[s,dr(e)]:dr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Hs(t=" ",e=0){return pe(Jr,null,t,e)}function He(t){return t==null||typeof t=="boolean"?pe(Mn):B(t)?pe(je,null,t.slice()):typeof t=="object"?mt(t):pe(Jr,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ln(t)}function Ei(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ei(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Gr in e)?e._ctx=Se:s===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[Hs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Of(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ui([e.class,r.class]));else if(s==="style")e.style=li([e.style,r.style]);else if(Ur(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $e(t,e,n,r=null){De(t,e,7,[n,r])}const Cf=lc();let Pf=0;function xf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Cf,i={uid:Pf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new iu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fc(r,s),emitsOptions:Xa(r,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Fu.bind(null,i),t.ce&&t.ce(i),i}let le=null,wi,Gt,fo="__VUE_INSTANCE_SETTERS__";(Gt=Cs()[fo])||(Gt=Cs()[fo]=[]),Gt.push(t=>le=t),wi=t=>{Gt.length>1?Gt.forEach(e=>e(t)):Gt[0](t)};const un=t=>{wi(t),t.scope.on()},Bt=()=>{le&&le.scope.off(),wi(null)};function _c(t){return t.vnode.shapeFlag&4}let Un=!1;function kf(t,e=!1){Un=e;const{props:n,children:r}=t.vnode,s=_c(t);mf(t,n,s,e),yf(t,r);const i=s?Nf(t,e):void 0;return Un=!1,i}function Nf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ja(new Proxy(t.ctx,af));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Mf(t):null;un(t),gn();const i=It(r,t,0,[t.props,s]);if(_n(),Bt(),Ia(i)){if(i.then(Bt,Bt),e)return i.then(o=>{ho(t,o,e)}).catch(o=>{Vr(o,t,0)});t.asyncDep=i}else ho(t,i,e)}else yc(t,e)}function ho(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:te(e)&&(t.setupState=za(e)),yc(t,n)}let po;function yc(t,e,n){const r=t.type;if(!t.render){if(!e&&po&&!r.render){const s=r.template||bi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=ue(ue({isCustomElement:i,delimiters:a},o),c);r.render=po(s,u)}}t.render=r.render||Ne}{un(t),gn();try{cf(t)}finally{_n(),Bt()}}}function Df(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return be(t,"get","$attrs"),e[n]}}))}function Mf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Df(t)},slots:t.slots,emit:t.emit,expose:e}}function Yr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(za(ja(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}}))}function Lf(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Uf(t){return H(t)&&"__vccOpts"in t}const xe=(t,e)=>ku(t,e,Un);function bc(t,e,n){const r=arguments.length;return r===2?te(e)&&!B(e)?js(e)?pe(t,null,[e]):pe(t,e):pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&js(n)&&(n=[n]),pe(t,e,n))}const Ff=Symbol.for("v-scx"),Bf=()=>st(Ff),$f="3.3.6",jf="http://www.w3.org/2000/svg",Dt=typeof document<"u"?document:null,mo=Dt&&Dt.createElement("template"),Hf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Dt.createElementNS(jf,t):Dt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{mo.innerHTML=r?`<svg>${t}</svg>`:t;const a=mo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vf=Symbol("_vtc");function Wf(t,e,n){const r=t[Vf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const zf=Symbol("_vod");function qf(t,e,n){const r=t.style,s=ae(n);if(n&&!s){if(e&&!ae(e))for(const i in e)n[i]==null&&Vs(r,i,"");for(const i in n)Vs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),zf in t&&(r.display=i)}}const go=/\s*!important$/;function Vs(t,e,n){if(B(n))n.forEach(r=>Vs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Kf(t,e);go.test(n)?t.setProperty(mn(r),n.replace(go,""),"important"):t[r]=n}}const _o=["Webkit","Moz","ms"],hs={};function Kf(t,e){const n=hs[e];if(n)return n;let r=Je(e);if(r!=="filter"&&r in t)return hs[e]=r;r=$r(r);for(let s=0;s<_o.length;s++){const i=_o[s]+r;if(i in t)return hs[e]=i}return e}const yo="http://www.w3.org/1999/xlink";function Jf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yo,e.slice(6,e.length)):t.setAttributeNS(yo,e,n);else{const i=nu(e);n==null||i&&!Ra(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Gf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,l=n??"";u!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Ra(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Mt(t,e,n,r){t.addEventListener(e,n,r)}function Yf(t,e,n,r){t.removeEventListener(e,n,r)}const bo=Symbol("_vei");function Xf(t,e,n,r,s=null){const i=t[bo]||(t[bo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Qf(e);if(r){const u=i[e]=td(r,s);Mt(t,a,u,c)}else o&&(Yf(t,a,o,c),i[e]=void 0)}}const vo=/(?:Once|Passive|Capture)$/;function Qf(t){let e;if(vo.test(t)){e={};let r;for(;r=t.match(vo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mn(t.slice(2)),e]}let ps=0;const Zf=Promise.resolve(),ed=()=>ps||(Zf.then(()=>ps=0),ps=Date.now());function td(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(nd(r,n.value),e,5,[r])};return n.value=t,n.attached=ed(),n}function nd(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Eo=/^on[a-z]/,rd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Wf(t,r,s):e==="style"?qf(t,n,r):Ur(e)?oi(e)||Xf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sd(t,e,r,s))?Gf(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jf(t,e,r,s))};function sd(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Eo.test(e)&&H(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Eo.test(e)&&ae(n)?!1:e in t}const Rr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>cr(e,n):e};function id(t){t.target.composing=!0}function wo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rn=Symbol("_assign"),Et={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rn]=Rr(s);const i=r||s.props&&s.props.type==="number";Mt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Er(a)),t[rn](a)}),n&&Mt(t,"change",()=>{t.value=t.value.trim()}),e||(Mt(t,"compositionstart",id),Mt(t,"compositionend",wo),Mt(t,"change",wo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[rn]=Rr(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Er(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},vc={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Fr(e);Mt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Er(Ar(o)):Ar(o));t[rn](t.multiple?s?new Set(i):i:i[0])}),t[rn]=Rr(r)},mounted(t,{value:e}){Io(t,e)},beforeUpdate(t,e,n){t[rn]=Rr(n)},updated(t,{value:e}){Io(t,e)}};function Io(t,e){const n=t.multiple;if(!(n&&!B(e)&&!Fr(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=Ar(i);if(n)B(e)?i.selected=su(e,o)>-1:i.selected=e.has(o);else if(jr(Ar(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ar(t){return"_value"in t?t._value:t.value}const od=["ctrl","shift","alt","meta"],ad={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>od.some(n=>t[`${n}Key`]&&!e.includes(n))},Ec=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=ad[e[s]];if(i&&i(n,e))return}return t(n,...r)},cd=ue({patchProp:rd},Hf);let To;function ld(){return To||(To=vf(cd))}const ud=(...t)=>{const e=ld().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=fd(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function fd(t){return ae(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Xt=typeof window<"u";function dd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Y=Object.assign;function ms(t,e){const n={};for(const r in e){const s=e[r];n[r]=Me(s)?s.map(t):t(s)}return n}const On=()=>{},Me=Array.isArray,hd=/\/$/,pd=t=>t.replace(hd,"");function gs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=yd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function md(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function So(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fn(e.matched[r],n.matched[s])&&wc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_d(t[n],e[n]))return!1;return!0}function _d(t,e){return Me(t)?Ro(t,e):Me(e)?Ro(e,t):t===e}function Ro(t,e){return Me(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Fn;(function(t){t.pop="pop",t.push="push"})(Fn||(Fn={}));var Cn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Cn||(Cn={}));function bd(t){if(!t)if(Xt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pd(t)}const vd=/^[^#]+#/;function Ed(t,e){return t.replace(vd,"#")+e}function wd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Id(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ao(t,e){return(history.state?history.state.position-e:-1)+t}const Ws=new Map;function Td(t,e){Ws.set(t,e)}function Sd(t){const e=Ws.get(t);return Ws.delete(t),e}let Rd=()=>location.protocol+"//"+location.host;function Ic(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),So(c,"")}return So(n,t)+r+s}function Ad(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=Ic(t,location),g=n.value,w=e.value;let N=0;if(p){if(n.value=_,e.value=p,o&&o===g){o=null;return}N=w?p.position-w.position:0}else r(_);s.forEach(P=>{P(n.value,g,{delta:N,type:Fn.pop,direction:N?N>0?Cn.forward:Cn.back:Cn.unknown})})};function c(){o=n.value}function u(p){s.push(p);const _=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(_),_}function l(){const{history:p}=window;p.state&&p.replaceState(Y({},p.state,{scroll:Xr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function Oo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xr():null}}function Od(t){const{history:e,location:n}=window,r={value:Ic(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:Rd()+t+c;try{e[l?"replaceState":"pushState"](u,"",p),s.value=u}catch(_){console.error(_),n[l?"replace":"assign"](p)}}function o(c,u){const l=Y({},e.state,Oo(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=Y({},s.value,e.state,{forward:c,scroll:Xr()});i(l.current,l,!0);const d=Y({},Oo(r.value,c,null),{position:l.position+1},u);i(c,d,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Cd(t){t=bd(t);const e=Od(t),n=Ad(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Y({location:"",base:t,go:r,createHref:Ed.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Pd(t){return typeof t=="string"||t&&typeof t=="object"}function Tc(t){return typeof t=="string"||typeof t=="symbol"}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Sc=Symbol("");var Co;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Co||(Co={}));function dn(t,e){return Y(new Error,{type:t,[Sc]:!0},e)}function Xe(t,e){return t instanceof Error&&Sc in t&&(e==null||!!(t.type&e))}const Po="[^/]+?",xd={sensitive:!1,strict:!1,start:!0,end:!0},kd=/[.+*?^${}()[\]/\\]/g;function Nd(t,e){const n=Y({},xd,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const p=u[d];let _=40+(n.sensitive?.25:0);if(p.type===0)d||(s+="/"),s+=p.value.replace(kd,"\\$&"),_+=40;else if(p.type===1){const{value:g,repeatable:w,optional:N,regexp:P}=p;i.push({name:g,repeatable:w,optional:N});const k=P||Po;if(k!==Po){_+=10;try{new RegExp(`(${k})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${g}" (${k}): `+L.message)}}let V=w?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(V=N&&u.length<2?`(?:/${V})`:"/"+V),N&&(V+="?"),s+=V,_+=20,N&&(_+=-8),w&&(_+=-20),k===".*"&&(_+=-50)}l.push(_)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),d={};if(!l)return null;for(let p=1;p<l.length;p++){const _=l[p]||"",g=i[p-1];d[g.name]=_&&g.repeatable?_.split("/"):_}return d}function c(u){let l="",d=!1;for(const p of t){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const _ of p)if(_.type===0)l+=_.value;else if(_.type===1){const{value:g,repeatable:w,optional:N}=_,P=g in u?u[g]:"";if(Me(P)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const k=Me(P)?P.join("/"):P;if(!k)if(N)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);l+=k}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Dd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Md(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Dd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xo(r))return 1;if(xo(s))return-1}return s.length-r.length}function xo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ld={type:0,value:""},Ud=/[a-zA-Z0-9_]/;function Fd(t){if(!t)return[[]];if(t==="/")return[[Ld]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:Ud.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}function Bd(t,e,n){const r=Nd(Fd(t.path),n),s=Y(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $d(t,e){const n=[],r=new Map;e=Do({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,d,p){const _=!p,g=jd(l);g.aliasOf=p&&p.record;const w=Do(e,l),N=[g];if("alias"in l){const V=typeof l.alias=="string"?[l.alias]:l.alias;for(const L of V)N.push(Y({},g,{components:p?p.record.components:g.components,path:L,aliasOf:p?p.record:g}))}let P,k;for(const V of N){const{path:L}=V;if(d&&L[0]!=="/"){const ie=d.record.path,oe=ie[ie.length-1]==="/"?"":"/";V.path=d.record.path+(L&&oe+L)}if(P=Bd(V,d,w),p?p.alias.push(P):(k=k||P,k!==P&&k.alias.push(P),_&&l.name&&!No(P)&&o(l.name)),g.children){const ie=g.children;for(let oe=0;oe<ie.length;oe++)i(ie[oe],P,p&&p.children[oe])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return k?()=>{o(k)}:On}function o(l){if(Tc(l)){const d=r.get(l);d&&(r.delete(l),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(l);d>-1&&(n.splice(d,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let d=0;for(;d<n.length&&Md(l,n[d])>=0&&(l.record.path!==n[d].record.path||!Rc(l,n[d]));)d++;n.splice(d,0,l),l.record.name&&!No(l)&&r.set(l.record.name,l)}function u(l,d){let p,_={},g,w;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw dn(1,{location:l});w=p.record.name,_=Y(ko(d.params,p.keys.filter(k=>!k.optional).map(k=>k.name)),l.params&&ko(l.params,p.keys.map(k=>k.name))),g=p.stringify(_)}else if("path"in l)g=l.path,p=n.find(k=>k.re.test(g)),p&&(_=p.parse(g),w=p.record.name);else{if(p=d.name?r.get(d.name):n.find(k=>k.re.test(d.path)),!p)throw dn(1,{location:l,currentLocation:d});w=p.record.name,_=Y({},d.params,l.params),g=p.stringify(_)}const N=[];let P=p;for(;P;)N.unshift(P.record),P=P.parent;return{name:w,path:g,params:_,matched:N,meta:Vd(N)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ko(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Hd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Hd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function No(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vd(t){return t.reduce((e,n)=>Y(e,n.meta),{})}function Do(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Rc(t,e){return e.children.some(n=>n===t||Rc(t,n))}const Ac=/#/g,Wd=/&/g,zd=/\//g,qd=/=/g,Kd=/\?/g,Oc=/\+/g,Jd=/%5B/g,Gd=/%5D/g,Cc=/%5E/g,Yd=/%60/g,Pc=/%7B/g,Xd=/%7C/g,xc=/%7D/g,Qd=/%20/g;function Ii(t){return encodeURI(""+t).replace(Xd,"|").replace(Jd,"[").replace(Gd,"]")}function Zd(t){return Ii(t).replace(Pc,"{").replace(xc,"}").replace(Cc,"^")}function zs(t){return Ii(t).replace(Oc,"%2B").replace(Qd,"+").replace(Ac,"%23").replace(Wd,"%26").replace(Yd,"`").replace(Pc,"{").replace(xc,"}").replace(Cc,"^")}function eh(t){return zs(t).replace(qd,"%3D")}function th(t){return Ii(t).replace(Ac,"%23").replace(Kd,"%3F")}function nh(t){return t==null?"":th(t).replace(zd,"%2F")}function Or(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function rh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Oc," "),o=i.indexOf("="),a=Or(o<0?i:i.slice(0,o)),c=o<0?null:Or(i.slice(o+1));if(a in e){let u=e[a];Me(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Mo(t){let e="";for(let n in t){const r=t[n];if(n=eh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&zs(i)):[r&&zs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function sh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Me(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ih=Symbol(""),Lo=Symbol(""),Ti=Symbol(""),kc=Symbol(""),qs=Symbol("");function wn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=d=>{d===!1?a(dn(4,{from:n,to:e})):d instanceof Error?a(d):Pd(d)?a(dn(2,{from:e,to:d})):(i&&r.enterCallbacks[s]===i&&typeof d=="function"&&i.push(d),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(d=>a(d))})}function _s(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(oh(a)){const u=(a.__vccOpts||a)[e];u&&s.push(gt(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=dd(u)?u.default:u;i.components[o]=l;const p=(l.__vccOpts||l)[e];return p&&gt(p,n,r,i,o)()}))}}return s}function oh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uo(t){const e=st(Ti),n=st(kc),r=xe(()=>e.resolve(Ft(t.to))),s=xe(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const p=d.findIndex(fn.bind(null,l));if(p>-1)return p;const _=Fo(c[u-2]);return u>1&&Fo(l)===_&&d[d.length-1].path!==_?d.findIndex(fn.bind(null,c[u-2])):p}),i=xe(()=>s.value>-1&&uh(n.params,r.value.params)),o=xe(()=>s.value>-1&&s.value===n.matched.length-1&&wc(n.params,r.value.params));function a(c={}){return lh(c)?e[Ft(t.replace)?"replace":"push"](Ft(t.to)).catch(On):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const ah=nc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uo,setup(t,{slots:e}){const n=zn(Uo(t)),{options:r}=st(Ti),s=xe(()=>({[Bo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:bc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ch=ah;function lh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Me(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Fo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bo=(t,e,n)=>t??e??n,fh=nc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=st(qs),s=xe(()=>t.route||r.value),i=st(Lo,0),o=xe(()=>{let u=Ft(i);const{matched:l}=s.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=xe(()=>s.value.matched[o.value]);fr(Lo,xe(()=>o.value+1)),fr(ih,a),fr(qs,s);const c=Te();return lr(()=>[c.value,a.value,t.name],([u,l,d],[p,_,g])=>{l&&(l.instances[d]=u,_&&_!==l&&u&&u===p&&(l.leaveGuards.size||(l.leaveGuards=_.leaveGuards),l.updateGuards.size||(l.updateGuards=_.updateGuards))),u&&l&&(!_||!fn(l,_)||!p)&&(l.enterCallbacks[d]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,d=a.value,p=d&&d.components[l];if(!p)return $o(n.default,{Component:p,route:u});const _=d.props[l],g=_?_===!0?u.params:typeof _=="function"?_(u):_:null,N=bc(p,Y({},g,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return $o(n.default,{Component:N,route:u})||N}}});function $o(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dh=fh;function hh(t){const e=$d(t.routes,t),n=t.parseQuery||rh,r=t.stringifyQuery||Mo,s=t.history,i=wn(),o=wn(),a=wn(),c=Ou(dt);let u=dt;Xt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ms.bind(null,v=>""+v),d=ms.bind(null,nh),p=ms.bind(null,Or);function _(v,C){let A,M;return Tc(v)?(A=e.getRecordMatcher(v),M=C):M=v,e.addRoute(M,A)}function g(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function w(){return e.getRoutes().map(v=>v.record)}function N(v){return!!e.getRecordMatcher(v)}function P(v,C){if(C=Y({},C||c.value),typeof v=="string"){const m=gs(n,v,C.path),y=e.resolve({path:m.path},C),E=s.createHref(m.fullPath);return Y(m,y,{params:p(y.params),hash:Or(m.hash),redirectedFrom:void 0,href:E})}let A;if("path"in v)A=Y({},v,{path:gs(n,v.path,C.path).path});else{const m=Y({},v.params);for(const y in m)m[y]==null&&delete m[y];A=Y({},v,{params:d(m)}),C.params=d(C.params)}const M=e.resolve(A,C),G=v.hash||"";M.params=l(p(M.params));const f=md(r,Y({},v,{hash:Zd(G),path:M.path})),h=s.createHref(f);return Y({fullPath:f,hash:G,query:r===Mo?sh(v.query):v.query||{}},M,{redirectedFrom:void 0,href:h})}function k(v){return typeof v=="string"?gs(n,v,c.value.path):Y({},v)}function V(v,C){if(u!==v)return dn(8,{from:C,to:v})}function L(v){return ve(v)}function ie(v){return L(Y(k(v),{replace:!0}))}function oe(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:A}=C;let M=typeof A=="function"?A(v):A;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=k(M):{path:M},M.params={}),Y({query:v.query,hash:v.hash,params:"path"in M?{}:v.params},M)}}function ve(v,C){const A=u=P(v),M=c.value,G=v.state,f=v.force,h=v.replace===!0,m=oe(A);if(m)return ve(Y(k(m),{state:typeof m=="object"?Y({},G,m.state):G,force:f,replace:h}),C||A);const y=A;y.redirectedFrom=C;let E;return!f&&gd(r,M,A)&&(E=dn(16,{to:y,from:M}),Fe(M,M,!0,!1)),(E?Promise.resolve(E):Ie(y,M)).catch(I=>Xe(I)?Xe(I,2)?I:ut(I):J(I,y,M)).then(I=>{if(I){if(Xe(I,2))return ve(Y({replace:h},k(I.to),{state:typeof I.to=="object"?Y({},G,I.to.state):G,force:f}),C||y)}else I=Ct(y,M,!0,h,G);return lt(y,M,I),I})}function Ae(v,C){const A=V(v,C);return A?Promise.reject(A):Promise.resolve()}function Le(v){const C=Kt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function Ie(v,C){let A;const[M,G,f]=ph(v,C);A=_s(M.reverse(),"beforeRouteLeave",v,C);for(const m of M)m.leaveGuards.forEach(y=>{A.push(gt(y,v,C))});const h=Ae.bind(null,v,C);return A.push(h),fe(A).then(()=>{A=[];for(const m of i.list())A.push(gt(m,v,C));return A.push(h),fe(A)}).then(()=>{A=_s(G,"beforeRouteUpdate",v,C);for(const m of G)m.updateGuards.forEach(y=>{A.push(gt(y,v,C))});return A.push(h),fe(A)}).then(()=>{A=[];for(const m of f)if(m.beforeEnter)if(Me(m.beforeEnter))for(const y of m.beforeEnter)A.push(gt(y,v,C));else A.push(gt(m.beforeEnter,v,C));return A.push(h),fe(A)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),A=_s(f,"beforeRouteEnter",v,C),A.push(h),fe(A))).then(()=>{A=[];for(const m of o.list())A.push(gt(m,v,C));return A.push(h),fe(A)}).catch(m=>Xe(m,8)?m:Promise.reject(m))}function lt(v,C,A){a.list().forEach(M=>Le(()=>M(v,C,A)))}function Ct(v,C,A,M,G){const f=V(v,C);if(f)return f;const h=C===dt,m=Xt?history.state:{};A&&(M||h?s.replace(v.fullPath,Y({scroll:h&&m&&m.scroll},G)):s.push(v.fullPath,G)),c.value=v,Fe(v,C,A,h),ut()}let Ue;function bn(){Ue||(Ue=s.listen((v,C,A)=>{if(!Zn.listening)return;const M=P(v),G=oe(M);if(G){ve(Y(G,{replace:!0}),M).catch(On);return}u=M;const f=c.value;Xt&&Td(Ao(f.fullPath,A.delta),Xr()),Ie(M,f).catch(h=>Xe(h,12)?h:Xe(h,2)?(ve(h.to,M).then(m=>{Xe(m,20)&&!A.delta&&A.type===Fn.pop&&s.go(-1,!1)}).catch(On),Promise.reject()):(A.delta&&s.go(-A.delta,!1),J(h,M,f))).then(h=>{h=h||Ct(M,f,!1),h&&(A.delta&&!Xe(h,8)?s.go(-A.delta,!1):A.type===Fn.pop&&Xe(h,20)&&s.go(-1,!1)),lt(M,f,h)}).catch(On)}))}let zt=wn(),ce=wn(),Q;function J(v,C,A){ut(v);const M=ce.list();return M.length?M.forEach(G=>G(v,C,A)):console.error(v),Promise.reject(v)}function Ye(){return Q&&c.value!==dt?Promise.resolve():new Promise((v,C)=>{zt.add([v,C])})}function ut(v){return Q||(Q=!v,bn(),zt.list().forEach(([C,A])=>v?A(v):C()),zt.reset()),v}function Fe(v,C,A,M){const{scrollBehavior:G}=t;if(!Xt||!G)return Promise.resolve();const f=!A&&Sd(Ao(v.fullPath,0))||(M||!A)&&history.state&&history.state.scroll||null;return Ka().then(()=>G(v,C,f)).then(h=>h&&Id(h)).catch(h=>J(h,v,C))}const _e=v=>s.go(v);let qt;const Kt=new Set,Zn={currentRoute:c,listening:!0,addRoute:_,removeRoute:g,hasRoute:N,getRoutes:w,resolve:P,options:t,push:L,replace:ie,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:Ye,install(v){const C=this;v.component("RouterLink",ch),v.component("RouterView",dh),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(c)}),Xt&&!qt&&c.value===dt&&(qt=!0,L(s.location).catch(G=>{}));const A={};for(const G in dt)Object.defineProperty(A,G,{get:()=>c.value[G],enumerable:!0});v.provide(Ti,C),v.provide(kc,Fa(A)),v.provide(qs,c);const M=v.unmount;Kt.add(v),v.unmount=function(){Kt.delete(v),Kt.size<1&&(u=dt,Ue&&Ue(),Ue=null,c.value=dt,qt=!1,Q=!1),M()}}};function fe(v){return v.reduce((C,A)=>C.then(()=>Le(A)),Promise.resolve())}return Zn}function ph(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>fn(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>fn(u,c))||s.push(c))}return[n,r,s]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},mh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,_=u&63;c||(_=64,o||(p=64)),r.push(n[l],n[d],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Nc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw Error();const p=i<<2|a>>4;if(r.push(p),u!==64){const _=a<<4&240|u>>2;if(r.push(_),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},gh=function(t){const e=Nc(t);return Dc.encodeByteArray(e,!0)},Mc=function(t){return gh(t).replace(/\./g,"")},Lc=function(t){try{return Dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _h(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function yh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vh(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Eh(){try{return typeof indexedDB=="object"}catch{return!1}}function wh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Ih(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=()=>Ih().__FIREBASE_DEFAULTS__,Sh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lc(t[1]);return e&&JSON.parse(e)},Si=()=>{try{return Th()||Sh()||Rh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ah=t=>{var e,n;return(n=(e=Si())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Oh=()=>{var t;return(t=Si())===null||t===void 0?void 0:t.config},Uc=t=>{var e;return(e=Si())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ph,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qn.prototype.create)}}class qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ot(s,a,r)}}function xh(t,e){return t.replace(kh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kh=/\{\$([^}]+)}/g;function Nh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(jo(i)&&jo(o)){if(!Cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Dh(t,e){const n=new Mh(t,e);return n.subscribe.bind(n)}class Mh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ys),s.error===void 0&&(s.error=ys),s.complete===void 0&&(s.complete=ys);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ys(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ch;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bh(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fh(t){return t===kt?void 0:t}function Bh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const jh={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Hh=ee.INFO,Vh={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Wh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Vh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=Hh,this._logHandler=Wh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const zh=(t,e)=>e.some(n=>t instanceof n);let Ho,Vo;function qh(){return Ho||(Ho=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kh(){return Vo||(Vo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bc=new WeakMap,Ks=new WeakMap,$c=new WeakMap,bs=new WeakMap,Ri=new WeakMap;function Jh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bc.set(n,t)}).catch(()=>{}),Ri.set(e,t),e}function Gh(t){if(Ks.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ks.set(t,e)}let Js={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ks.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$c.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yh(t){Js=t(Js)}function Xh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vs(this),e,...n);return $c.set(r,e.sort?e.sort():[e]),Tt(r)}:Kh().includes(t)?function(...e){return t.apply(vs(this),e),Tt(Bc.get(this))}:function(...e){return Tt(t.apply(vs(this),e))}}function Qh(t){return typeof t=="function"?Xh(t):(t instanceof IDBTransaction&&Gh(t),zh(t,qh())?new Proxy(t,Js):t)}function Tt(t){if(t instanceof IDBRequest)return Jh(t);if(bs.has(t))return bs.get(t);const e=Qh(t);return e!==t&&(bs.set(t,e),Ri.set(e,t)),e}const vs=t=>Ri.get(t);function Zh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Tt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Tt(o.result),c.oldVersion,c.newVersion,Tt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const ep=["get","getKey","getAll","getAllKeys","count"],tp=["put","add","delete","clear"],Es=new Map;function Wo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Es.get(e))return Es.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=tp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ep.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Es.set(e,i),i}Yh(t=>({...t,get:(e,n,r)=>Wo(e,n)||t.get(e,n,r),has:(e,n)=>!!Wo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gs="@firebase/app",zo="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Fc("@firebase/app"),sp="@firebase/app-compat",ip="@firebase/analytics-compat",op="@firebase/analytics",ap="@firebase/app-check-compat",cp="@firebase/app-check",lp="@firebase/auth",up="@firebase/auth-compat",fp="@firebase/database",dp="@firebase/database-compat",hp="@firebase/functions",pp="@firebase/functions-compat",mp="@firebase/installations",gp="@firebase/installations-compat",_p="@firebase/messaging",yp="@firebase/messaging-compat",bp="@firebase/performance",vp="@firebase/performance-compat",Ep="@firebase/remote-config",wp="@firebase/remote-config-compat",Ip="@firebase/storage",Tp="@firebase/storage-compat",Sp="@firebase/firestore",Rp="@firebase/firestore-compat",Ap="firebase",Op="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="[DEFAULT]",Cp={[Gs]:"fire-core",[sp]:"fire-core-compat",[op]:"fire-analytics",[ip]:"fire-analytics-compat",[cp]:"fire-app-check",[ap]:"fire-app-check-compat",[lp]:"fire-auth",[up]:"fire-auth-compat",[fp]:"fire-rtdb",[dp]:"fire-rtdb-compat",[hp]:"fire-fn",[pp]:"fire-fn-compat",[mp]:"fire-iid",[gp]:"fire-iid-compat",[_p]:"fire-fcm",[yp]:"fire-fcm-compat",[bp]:"fire-perf",[vp]:"fire-perf-compat",[Ep]:"fire-rc",[wp]:"fire-rc-compat",[Ip]:"fire-gcs",[Tp]:"fire-gcs-compat",[Sp]:"fire-fst",[Rp]:"fire-fst-compat","fire-js":"fire-js",[Ap]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Map,Xs=new Map;function Pp(t,e){try{t.container.addComponent(e)}catch(n){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(Xs.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;Xs.set(e,t);for(const n of Pr.values())Pp(n,t);return!0}function jc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new qn("app","Firebase",xp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=Op;function Hc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ys,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});if(n||(n=Oh()),!n)throw St.create("no-options");const i=Pr.get(s);if(i){if(Cr(n,i.options)&&Cr(r,i.config))return i;throw St.create("duplicate-app",{appName:s})}const o=new $h(s);for(const c of Xs.values())o.addComponent(c);const a=new kp(n,r,o);return Pr.set(s,a),a}function Np(t=Ys){const e=Pr.get(t);if(!e&&t===Ys)return Hc();if(!e)throw St.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let s=(r=Cp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(a.join(" "));return}Bn(new hn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="firebase-heartbeat-database",Mp=1,$n="firebase-heartbeat-store";let ws=null;function Vc(){return ws||(ws=Zh(Dp,Mp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($n)}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),ws}async function Lp(t){try{return(await Vc()).transaction($n).objectStore($n).get(Wc(t))}catch(e){if(e instanceof Ot)Ht.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(n.message)}}}async function qo(t,e){try{const r=(await Vc()).transaction($n,"readwrite");return await r.objectStore($n).put(e,Wc(t)),r.done}catch(n){if(n instanceof Ot)Ht.warn(n.message);else{const r=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(r.message)}}}function Wc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=1024,Fp=30*24*60*60*1e3;class Bp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Fp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ko(),{heartbeatsToSend:n,unsentEntries:r}=$p(this._heartbeatsCache.heartbeats),s=Mc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ko(){return new Date().toISOString().substring(0,10)}function $p(t,e=Up){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eh()?wh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Lp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jo(t){return Mc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){Bn(new hn("platform-logger",e=>new np(e),"PRIVATE")),Bn(new hn("heartbeat",e=>new Bp(e),"PRIVATE")),sn(Gs,zo,t),sn(Gs,zo,"esm2017"),sn("fire-js","")}Hp("");var Vp="firebase",Wp="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(Vp,Wp,"app");function Ai(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function zc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zp=zc,qc=new qn("auth","Firebase",zc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=new Fc("@firebase/auth");function hr(t,...e){Go.logLevel<=ee.ERROR&&Go.error(`Auth (${Qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,...e){throw Oi(t,...e)}function qe(t,...e){return Oi(t,...e)}function qp(t,e,n){const r=Object.assign(Object.assign({},zp()),{[e]:n});return new qn("auth","Firebase",r).create(e,{appName:t.name})}function Oi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qc.create(t,...e)}function $(t,e,...n){if(!t)throw Oi(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hr(e),new Error(e)}function at(t,e){t||tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Map;function nt(t){at(t instanceof Function,"Expected a class definition");let e=Yo.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yo.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t,e){const n=jc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cr(i,e??{}))return s;ot(s,"already-initialized")}return n.initialize({options:e})}function Jp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gp(){return Xo()==="http:"||Xo()==="https:"}function Xo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gp()||yh()||"connection"in navigator)?navigator.onLine:!0}function Xp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=_h()||bh()}get(){return Yp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Jn(3e4,6e4);function Jc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zr(t,e,n,r,s={}){return Gc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Kn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Kc.fetch()(Xc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Gc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qp),e);try{const s=new em(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw or(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw or(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw or(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qp(t,l,u);ot(t,l)}}catch(s){if(s instanceof Ot)throw s;ot(t,"network-request-failed")}}async function Yc(t,e,n,r,s={}){const i=await Zr(t,e,n,r,s);return"mfaPendingCredential"in i&&ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Xc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ci(t.config,s):`${t.config.apiScheme}://${s}`}class em{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),Zp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function or(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qe(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function nm(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rm(t,e=!1){const n=Wt(t),r=await n.getIdToken(e),s=Pi(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pn(Is(s.auth_time)),issuedAtTime:Pn(Is(s.iat)),expirationTime:Pn(Is(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Is(t){return Number(t)*1e3}function Pi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Lc(n);return s?JSON.parse(s):(hr("Failed to decode base64 JWT payload"),null)}catch(s){return hr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function sm(t){const e=Pi(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&im(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function im({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pn(this.lastLoginAt),this.creationTime=Pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await jn(t,nm(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?lm(i.providerUserInfo):[],a=cm(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Qc(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function am(t){const e=Wt(t);await xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lm(t){return t.map(e=>{var{providerId:n}=e,r=Ai(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function um(t,e){const n=await Gc(t,{},async()=>{const r=Kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Xc(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Kc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await um(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ai(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new om(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await jn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rm(this,e)}reload(){return am(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jn(this,tm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:V,emailVerified:L,isAnonymous:ie,providerData:oe,stsTokenManager:ve}=n;$(V&&ve,e,"internal-error");const Ae=Hn.fromJSON(this.name,ve);$(typeof V=="string",e,"internal-error"),ht(d,e.name),ht(p,e.name),$(typeof L=="boolean",e,"internal-error"),$(typeof ie=="boolean",e,"internal-error"),ht(_,e.name),ht(g,e.name),ht(w,e.name),ht(N,e.name),ht(P,e.name),ht(k,e.name);const Le=new $t({uid:V,auth:e,email:p,emailVerified:L,displayName:d,isAnonymous:ie,photoURL:g,phoneNumber:_,tenantId:w,stsTokenManager:Ae,createdAt:P,lastLoginAt:k});return oe&&Array.isArray(oe)&&(Le.providerData=oe.map(Ie=>Object.assign({},Ie))),N&&(Le._redirectEventId=N),Le}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hn;s.updateFromServerResponse(n);const i=new $t({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Zc.type="NONE";const Qo=Zc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pr(this.userKey,s.apiKey,i),this.fullPersistenceKey=pr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new on(nt(Qo),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||nt(Qo);const o=pr(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const d=$t._fromJSON(e,l);u!==i&&(a=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new on(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(el(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sl(e))return"Blackberry";if(il(e))return"Webos";if(xi(e))return"Safari";if((e.includes("chrome/")||tl(e))&&!e.includes("edge/"))return"Chrome";if(rl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function el(t=me()){return/firefox\//i.test(t)}function xi(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tl(t=me()){return/crios\//i.test(t)}function nl(t=me()){return/iemobile/i.test(t)}function rl(t=me()){return/android/i.test(t)}function sl(t=me()){return/blackberry/i.test(t)}function il(t=me()){return/webos/i.test(t)}function es(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fm(t=me()){var e;return es(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dm(){return vh()&&document.documentMode===10}function ol(t=me()){return es(t)||rl(t)||il(t)||sl(t)||/windows phone/i.test(t)||nl(t)}function hm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e=[]){let n;switch(t){case"Browser":n=Zo(me());break;case"Worker":n=`${Zo(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ea(this),this.idTokenSubscription=new ea(this),this.beforeStateQueue=new pm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Wt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[nt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=al(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ts(t){return Wt(t)}class ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dh(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gm(t,e,n){const r=ts(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=cl(e),{host:o,port:a}=_m(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ym()}function cl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _m(t){const e=cl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ta(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ta(o)}}}function ta(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ym(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(t,e){return Yc(t,"POST","/v1/accounts:signInWithIdp",Jc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="http://localhost";class Vt extends ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ai(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:bm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ul{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Gn{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.GOOGLE_SIGN_IN_METHOD="google.com";yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Gn{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Gn{constructor(){super("twitter.com")}static credential(e,n){return Vt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t,e){return Yc(t,"POST","/v1/accounts:signUp",Jc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await $t._fromIdTokenResponse(e,r,s),o=na(r);return new At({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=na(r);return new At({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function na(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(t){var e;const n=ts(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new At({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await vm(n,{returnSecureToken:!0}),s=await At._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends Ot{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,kr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new kr(e,n,r,s)}}function fl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?kr._fromErrorAndOperation(t,i,e,r):i})}async function wm(t,e,n=!1){const r=await jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return At._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await jn(t,fl(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Pi(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),At._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(t,e,n=!1){const r="signIn",s=await fl(t,r,e),i=await At._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Sm(t,e,n,r){return Wt(t).onIdTokenChanged(e,n,r)}function Rm(t,e,n){return Wt(t).beforeAuthStateChanged(e,n)}function Am(t,e,n,r){return Wt(t).onAuthStateChanged(e,n,r)}const Nr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Nr,"1"),this.storage.removeItem(Nr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){const t=me();return xi(t)||es(t)}const Cm=1e3,Pm=10;class hl extends dl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Om()&&hm(),this.fallbackToPolling=ol(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Pm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Cm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hl.type="LOCAL";const xm=hl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends dl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pl.type="SESSION";const ml=pl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ns(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await km(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ns.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ki("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function Dm(t){Ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function Mm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Um(){return gl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="firebaseLocalStorageDb",Fm=1,Dr="firebaseLocalStorage",yl="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rs(t,e){return t.transaction([Dr],e?"readwrite":"readonly").objectStore(Dr)}function Bm(){const t=indexedDB.deleteDatabase(_l);return new Yn(t).toPromise()}function Zs(){const t=indexedDB.open(_l,Fm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Dr,{keyPath:yl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Dr)?e(r):(r.close(),await Bm(),e(await Zs()))})})}async function ra(t,e,n){const r=rs(t,!0).put({[yl]:e,value:n});return new Yn(r).toPromise()}async function $m(t,e){const n=rs(t,!1).get(e),r=await new Yn(n).toPromise();return r===void 0?null:r.value}function sa(t,e){const n=rs(t,!0).delete(e);return new Yn(n).toPromise()}const jm=800,Hm=3;class bl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ns._getInstance(Um()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mm(),!this.activeServiceWorker)return;this.sender=new Nm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zs();return await ra(e,Nr,"1"),await sa(e,Nr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ra(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$m(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rs(s,!1).getAll();return new Yn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bl.type="LOCAL";const Vm=bl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qe("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Wm().appendChild(r)})}function qm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Jn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){return e?nt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends ll{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jm(t){return Tm(t.auth,new Ni(t),t.bypassAuthState)}function Gm(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Im(n,new Ni(t),t.bypassAuthState)}async function Ym(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),wm(n,new Ni(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jm;case"linkViaPopup":case"linkViaRedirect":return Ym;case"reauthViaPopup":case"reauthViaRedirect":return Gm;default:ot(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Jn(2e3,1e4);class Qt extends vl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qt.currentPopupAction&&Qt.currentPopupAction.cancel(),Qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Xm.get())};e()}}Qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="pendingRedirect",mr=new Map;class Zm extends vl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mr.get(this.auth._key());if(!e){try{const r=await eg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mr.set(this.auth._key(),e)}return this.bypassAuthState||mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eg(t,e){const n=rg(e),r=ng(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tg(t,e){mr.set(t._key(),e)}function ng(t){return nt(t._redirectPersistence)}function rg(t){return pr(Qm,t.config.apiKey,t.name)}async function sg(t,e,n=!1){const r=ts(t),s=Km(r,e),o=await new Zm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=10*60*1e3;class og{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ag(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!El(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qe(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ig&&this.cachedEventUids.clear(),this.cachedEventUids.has(ia(e))}saveEventToCache(e){this.cachedEventUids.add(ia(e)),this.lastProcessedEventTime=Date.now()}}function ia(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function El({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ag(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return El(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ug=/^https?/;async function fg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cg(t);for(const n of e)try{if(dg(n))return}catch{}ot(t,"unauthorized-domain")}function dg(t){const e=Qs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ug.test(n))return!1;if(lg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Jn(3e4,6e4);function oa(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pg(t){return new Promise((e,n)=>{var r,s,i;function o(){oa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oa(),n(qe(t,"network-request-failed"))},timeout:hg.get()})}if(!((s=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ke().gapi)===null||i===void 0)&&i.load)o();else{const a=qm("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(qe(t,"network-request-failed"))},zm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw gr=null,e})}let gr=null;function mg(t){return gr=gr||pg(t),gr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new Jn(5e3,15e3),_g="__/auth/iframe",yg="emulator/auth/iframe",bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Eg(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ci(e,yg):`https://${t.config.authDomain}/${_g}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},s=vg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Kn(r).slice(1)}`}async function wg(t){const e=await mg(t),n=Ke().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Eg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qe(t,"network-request-failed"),a=Ke().setTimeout(()=>{i(o)},gg.get());function c(){Ke().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tg=500,Sg=600,Rg="_blank",Ag="http://localhost";class aa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Og(t,e,n,r=Tg,s=Sg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ig),{width:r.toString(),height:s.toString(),top:i,left:o}),u=me().toLowerCase();n&&(a=tl(u)?Rg:n),el(u)&&(e=e||Ag,c.scrollbars="yes");const l=Object.entries(c).reduce((p,[_,g])=>`${p}${_}=${g},`,"");if(fm(u)&&a!=="_self")return Cg(e||"",a),new aa(null);const d=window.open(e||"",a,l);$(d,t,"popup-blocked");try{d.focus()}catch{}return new aa(d)}function Cg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="__/auth/handler",xg="emulator/auth/handler";function ca(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:s};if(e instanceof ul){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Gn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${kg(t)}?${Kn(a).slice(1)}`}function kg({config:t}){return t.emulator?Ci(t,xg):`https://${t.authDomain}/${Pg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="webStorageSupport";class Ng{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ml,this._completeRedirectFn=sg,this._overrideRedirectResult=tg}async _openPopup(e,n,r,s){var i;at((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ca(e,n,r,Qs(),s);return Og(e,o,ki())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Dm(ca(e,n,r,Qs(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(at(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await wg(e),r=new og(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ts,{type:Ts},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ts];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ol()||xi()||es()}}const Dg=Ng;var la="@firebase/auth",ua="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ug(t){Bn(new hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:al(t)},l=new mm(a,c,u);return Jp(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bn(new hn("auth-internal",e=>{const n=ts(e.getProvider("auth").getImmediate());return(r=>new Mg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(la,ua,Lg(t)),sn(la,ua,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=5*60,Bg=Uc("authIdTokenMaxAge")||Fg;let fa=null;const $g=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bg)return;const s=n==null?void 0:n.token;fa!==s&&(fa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wl(t=Np()){const e=jc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Kp(t,{popupRedirectResolver:Dg,persistence:[Vm,xm,ml]}),r=Uc("authTokenSyncURL");if(r){const i=$g(r);Rm(n,i,()=>i(n.currentUser)),Sm(n,o=>i(o))}const s=Ah("auth");return s&&gm(n,`http://${s}`),n}Ug("Browser");const Il=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},jg={},Hg=t=>(Qa("data-v-76e18aac"),t=t(),Za(),t),Vg=Hg(()=>x("a",{id:"siteName"},"Workout Tracker",-1)),Wg={id:"siteLink"},zg={id:"siteLink"};function qg(t,e){const n=ac("router-link");return Ze(),et("nav",null,[Vg,x("a",Wg,[pe(n,{to:"/"},{default:Ms(()=>[Hs("Home")]),_:1})]),x("a",zg,[pe(n,{to:"/createExercise"},{default:Ms(()=>[Hs("Create Exercise")]),_:1})])])}const Kg=Il(jg,[["render",qg],["__scopeId","data-v-76e18aac"]]),Jg={id:"app",class:"bg-image"},Gg={__name:"App",setup(t){return Kr(()=>{let e=wl();e.currentUser==null&&Em(e).then(()=>{}).catch(n=>{const r=n.code,s=n.message;alert("Sign in failed"),console.log(r,s)})}),(e,n)=>{const r=ac("router-view");return Ze(),et("div",Jg,[pe(Kg),pe(r)])}}};const Yg=t=>(Qa("data-v-6207f31a"),t=t(),Za(),t),Xg={key:0,id:"exercises"},Qg=Yg(()=>x("thead",null,[x("tr",null,[x("th",null,"Name"),x("th",null,"Reps"),x("th",null,"Weight"),x("th",null,"Unit"),x("th",null,"Date"),x("th")])],-1)),Zg=["onClick"],e_=["onClick"],t_={key:1},n_={__name:"ExerciseList",props:{exercises:Array,onEdit:Function,onDelete:Function},setup(t){return(e,n)=>t.exercises.length>0?(Ze(),et("table",Xg,[Qg,(Ze(!0),et(je,null,of(t.exercises,r=>(Ze(),et("tbody",{key:r._id},[x("tr",null,[x("td",null,Yt(r.name),1),x("td",null,Yt(r.reps),1),x("td",null,Yt(r.weight),1),x("td",null,Yt(r.unit),1),x("td",null,Yt(new Date(r.date).toLocaleDateString("en-US")),1),x("td",null,[x("button",{class:"danger",onClick:s=>t.onDelete(r._id)},"Delete",8,Zg),x("button",{onClick:s=>t.onEdit(r)},"Edit",8,e_)])])]))),128))])):(Ze(),et("h3",t_,"No exercises found."))}},r_=Il(n_,[["__scopeId","data-v-6207f31a"]]);function Tl(t,e){return function(){return t.apply(e,arguments)}}const{toString:s_}=Object.prototype,{getPrototypeOf:Di}=Object,ss=(t=>e=>{const n=s_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ge=t=>(t=t.toLowerCase(),e=>ss(e)===t),is=t=>e=>typeof e===t,{isArray:yn}=Array,Vn=is("undefined");function i_(t){return t!==null&&!Vn(t)&&t.constructor!==null&&!Vn(t.constructor)&&Re(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Sl=Ge("ArrayBuffer");function o_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Sl(t.buffer),e}const a_=is("string"),Re=is("function"),Rl=is("number"),os=t=>t!==null&&typeof t=="object",c_=t=>t===!0||t===!1,_r=t=>{if(ss(t)!=="object")return!1;const e=Di(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},l_=Ge("Date"),u_=Ge("File"),f_=Ge("Blob"),d_=Ge("FileList"),h_=t=>os(t)&&Re(t.pipe),p_=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Re(t.append)&&((e=ss(t))==="formdata"||e==="object"&&Re(t.toString)&&t.toString()==="[object FormData]"))},m_=Ge("URLSearchParams"),g_=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Xn(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),yn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Al(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Ol=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Cl=t=>!Vn(t)&&t!==Ol;function ei(){const{caseless:t}=Cl(this)&&this||{},e={},n=(r,s)=>{const i=t&&Al(e,s)||s;_r(e[i])&&_r(r)?e[i]=ei(e[i],r):_r(r)?e[i]=ei({},r):yn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Xn(arguments[r],n);return e}const __=(t,e,n,{allOwnKeys:r}={})=>(Xn(e,(s,i)=>{n&&Re(s)?t[i]=Tl(s,n):t[i]=s},{allOwnKeys:r}),t),y_=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),b_=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},v_=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Di(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},E_=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},w_=t=>{if(!t)return null;if(yn(t))return t;let e=t.length;if(!Rl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},I_=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Di(Uint8Array)),T_=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},S_=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},R_=Ge("HTMLFormElement"),A_=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),da=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),O_=Ge("RegExp"),Pl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Xn(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},C_=t=>{Pl(t,(e,n)=>{if(Re(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Re(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},P_=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return yn(t)?r(t):r(String(t).split(e)),n},x_=()=>{},k_=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ss="abcdefghijklmnopqrstuvwxyz",ha="0123456789",xl={DIGIT:ha,ALPHA:Ss,ALPHA_DIGIT:Ss+Ss.toUpperCase()+ha},N_=(t=16,e=xl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function D_(t){return!!(t&&Re(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const M_=t=>{const e=new Array(10),n=(r,s)=>{if(os(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=yn(r)?[]:{};return Xn(r,(o,a)=>{const c=n(o,s+1);!Vn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},L_=Ge("AsyncFunction"),U_=t=>t&&(os(t)||Re(t))&&Re(t.then)&&Re(t.catch),b={isArray:yn,isArrayBuffer:Sl,isBuffer:i_,isFormData:p_,isArrayBufferView:o_,isString:a_,isNumber:Rl,isBoolean:c_,isObject:os,isPlainObject:_r,isUndefined:Vn,isDate:l_,isFile:u_,isBlob:f_,isRegExp:O_,isFunction:Re,isStream:h_,isURLSearchParams:m_,isTypedArray:I_,isFileList:d_,forEach:Xn,merge:ei,extend:__,trim:g_,stripBOM:y_,inherits:b_,toFlatObject:v_,kindOf:ss,kindOfTest:Ge,endsWith:E_,toArray:w_,forEachEntry:T_,matchAll:S_,isHTMLForm:R_,hasOwnProperty:da,hasOwnProp:da,reduceDescriptors:Pl,freezeMethods:C_,toObjectSet:P_,toCamelCase:A_,noop:x_,toFiniteNumber:k_,findKey:Al,global:Ol,isContextDefined:Cl,ALPHABET:xl,generateString:N_,isSpecCompliantForm:D_,toJSONObject:M_,isAsyncFn:L_,isThenable:U_};function z(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const kl=z.prototype,Nl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Nl[t]={value:t}});Object.defineProperties(z,Nl);Object.defineProperty(kl,"isAxiosError",{value:!0});z.from=(t,e,n,r,s,i)=>{const o=Object.create(kl);return b.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),z.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const F_=null;function ti(t){return b.isPlainObject(t)||b.isArray(t)}function Dl(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function pa(t,e,n){return t?t.concat(e).map(function(s,i){return s=Dl(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function B_(t){return b.isArray(t)&&!t.some(ti)}const $_=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function as(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,N){return!b.isUndefined(N[w])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(b.isDate(g))return g.toISOString();if(!c&&b.isBlob(g))throw new z("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(g)||b.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function l(g,w,N){let P=g;if(g&&!N&&typeof g=="object"){if(b.endsWith(w,"{}"))w=r?w:w.slice(0,-2),g=JSON.stringify(g);else if(b.isArray(g)&&B_(g)||(b.isFileList(g)||b.endsWith(w,"[]"))&&(P=b.toArray(g)))return w=Dl(w),P.forEach(function(V,L){!(b.isUndefined(V)||V===null)&&e.append(o===!0?pa([w],L,i):o===null?w:w+"[]",u(V))}),!1}return ti(g)?!0:(e.append(pa(N,w,i),u(g)),!1)}const d=[],p=Object.assign($_,{defaultVisitor:l,convertValue:u,isVisitable:ti});function _(g,w){if(!b.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+w.join("."));d.push(g),b.forEach(g,function(P,k){(!(b.isUndefined(P)||P===null)&&s.call(e,P,b.isString(k)?k.trim():k,w,p))===!0&&_(P,w?w.concat(k):[k])}),d.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return _(t),e}function ma(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Mi(t,e){this._pairs=[],t&&as(t,this,e)}const Ml=Mi.prototype;Ml.append=function(e,n){this._pairs.push([e,n])};Ml.toString=function(e){const n=e?function(r){return e.call(this,r,ma)}:ma;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function j_(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ll(t,e,n){if(!e)return t;const r=n&&n.encode||j_,s=n&&n.serialize;let i;if(s?i=s(e,n):i=b.isURLSearchParams(e)?e.toString():new Mi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class H_{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ga=H_,Ul={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},V_=typeof URLSearchParams<"u"?URLSearchParams:Mi,W_=typeof FormData<"u"?FormData:null,z_=typeof Blob<"u"?Blob:null,q_={isBrowser:!0,classes:{URLSearchParams:V_,FormData:W_,Blob:z_},protocols:["http","https","file","blob","url","data"]},Fl=typeof window<"u"&&typeof document<"u",K_=(t=>Fl&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),J_=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),G_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fl,hasStandardBrowserEnv:K_,hasStandardBrowserWebWorkerEnv:J_},Symbol.toStringTag,{value:"Module"})),ze={...G_,...q_};function Y_(t,e){return as(t,new ze.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return ze.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function X_(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Q_(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Bl(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=Q_(s[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,s)=>{e(X_(r),s,n,0)}),n}return null}function Z_(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Li={transitional:Ul,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(e);if(i&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s&&s?JSON.stringify(Bl(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Y_(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return as(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Z_(e)):e}],transformResponse:[function(e){const n=this.transitional||Li.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?z.from(a,z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ze.classes.FormData,Blob:ze.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{Li.headers[t]={}});const Ui=Li,ey=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ty=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&ey[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},_a=Symbol("internals");function In(t){return t&&String(t).trim().toLowerCase()}function yr(t){return t===!1||t==null?t:b.isArray(t)?t.map(yr):String(t)}function ny(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const ry=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Rs(t,e,n,r,s){if(b.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function sy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function iy(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class cs{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,u){const l=In(c);if(!l)throw new Error("header name must be a non-empty string");const d=b.findKey(s,l);(!d||s[d]===void 0||u===!0||u===void 0&&s[d]!==!1)&&(s[d||c]=yr(a))}const o=(a,c)=>b.forEach(a,(u,l)=>i(u,l,c));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!ry(e)?o(ty(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=In(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return ny(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=In(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Rs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=In(o),o){const a=b.findKey(r,o);a&&(!n||Rs(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Rs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=yr(s),delete n[i];return}const a=e?sy(i):String(i).trim();a!==i&&delete n[i],n[a]=yr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[_a]=this[_a]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=In(o);r[a]||(iy(s,o),r[a]=!0)}return b.isArray(e)?e.forEach(i):i(e),this}}cs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(cs.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(cs);const it=cs;function As(t,e){const n=this||Ui,r=e||n,s=it.from(r.headers);let i=r.data;return b.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function $l(t){return!!(t&&t.__CANCEL__)}function Qn(t,e,n){z.call(this,t??"canceled",z.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(Qn,z,{__CANCEL__:!0});function oy(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const ay=ze.hasStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),b.isNumber(s)&&c.push("expires="+new Date(s).toGMTString()),b.isString(i)&&c.push("path="+i),b.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function cy(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ly(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function jl(t,e){return t&&!cy(e)?ly(t,e):e}const uy=ze.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function fy(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function dy(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),l=r[i];o||(o=u),n[s]=c,r[s]=u;let d=i,p=0;for(;d!==s;)p+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),u-o<e)return;const _=l&&u-l;return _?Math.round(p*1e3/_):void 0}}function ya(t,e){let n=0;const r=dy(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-i)/c:void 0,event:s};l[e?"download":"upload"]=!0,t(l)}}const hy=typeof XMLHttpRequest<"u",py=hy&&function(t){return new Promise(function(n,r){let s=t.data;const i=it.from(t.headers).normalize(),o=t.responseType;let a;function c(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}let u;if(b.isFormData(s)){if(ze.hasStandardBrowserEnv||ze.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[g,...w]=u?u.split(";").map(N=>N.trim()).filter(Boolean):[];i.setContentType([g||"multipart/form-data",...w].join("; "))}}let l=new XMLHttpRequest;if(t.auth){const g=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(g+":"+w))}const d=jl(t.baseURL,t.url);l.open(t.method.toUpperCase(),Ll(d,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function p(){if(!l)return;const g=it.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),N={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:t,request:l};oy(function(k){n(k),c()},function(k){r(k),c()},N),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new z("Request aborted",z.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const N=t.transitional||Ul;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new z(w,N.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,l)),l=null},ze.hasStandardBrowserEnv){const g=uy(d)&&t.xsrfCookieName&&ay.read(t.xsrfCookieName);g&&i.set(t.xsrfHeaderName,g)}s===void 0&&i.setContentType(null),"setRequestHeader"in l&&b.forEach(i.toJSON(),function(w,N){l.setRequestHeader(N,w)}),b.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",ya(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ya(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=g=>{l&&(r(!g||g.type?new Qn(null,t,l):g),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const _=fy(d);if(_&&ze.protocols.indexOf(_)===-1){r(new z("Unsupported protocol "+_+":",z.ERR_BAD_REQUEST,t));return}l.send(s||null)})},ni={http:F_,xhr:py};b.forEach(ni,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ba=t=>`- ${t}`,my=t=>b.isFunction(t)||t===null||t===!1,Hl={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!my(n)&&(r=ni[(o=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(ba).join(`
`):" "+ba(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ni};function Os(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Qn(null,t)}function va(t){return Os(t),t.headers=it.from(t.headers),t.data=As.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Hl.getAdapter(t.adapter||Ui.adapter)(t).then(function(r){return Os(t),r.data=As.call(t,t.transformResponse,r),r.headers=it.from(r.headers),r},function(r){return $l(r)||(Os(t),r&&r.response&&(r.response.data=As.call(t,t.transformResponse,r.response),r.response.headers=it.from(r.response.headers))),Promise.reject(r)})}const Ea=t=>t instanceof it?t.toJSON():t;function pn(t,e){e=e||{};const n={};function r(u,l,d){return b.isPlainObject(u)&&b.isPlainObject(l)?b.merge.call({caseless:d},u,l):b.isPlainObject(l)?b.merge({},l):b.isArray(l)?l.slice():l}function s(u,l,d){if(b.isUndefined(l)){if(!b.isUndefined(u))return r(void 0,u,d)}else return r(u,l,d)}function i(u,l){if(!b.isUndefined(l))return r(void 0,l)}function o(u,l){if(b.isUndefined(l)){if(!b.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,d){if(d in e)return r(u,l);if(d in t)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>s(Ea(u),Ea(l),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(l){const d=c[l]||s,p=d(t[l],e[l],l);b.isUndefined(p)&&d!==a||(n[l]=p)}),n}const Vl="1.6.1",Fi={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Fi[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const wa={};Fi.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Vl+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new z(s(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!wa[o]&&(wa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function gy(t,e,n){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new z("option "+i+" must be "+c,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const ri={assertOptions:gy,validators:Fi},pt=ri.validators;class Mr{constructor(e){this.defaults=e,this.interceptors={request:new ga,response:new ga}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=pn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ri.assertOptions(r,{silentJSONParsing:pt.transitional(pt.boolean),forcedJSONParsing:pt.transitional(pt.boolean),clarifyTimeoutError:pt.transitional(pt.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:ri.assertOptions(s,{encode:pt.function,serialize:pt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=it.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(c=c&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let l,d=0,p;if(!c){const g=[va.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,u),p=g.length,l=Promise.resolve(n);d<p;)l=l.then(g[d++],g[d++]);return l}p=a.length;let _=n;for(d=0;d<p;){const g=a[d++],w=a[d++];try{_=g(_)}catch(N){w.call(this,N);break}}try{l=va.call(this,_)}catch(g){return Promise.reject(g)}for(d=0,p=u.length;d<p;)l=l.then(u[d++],u[d++]);return l}getUri(e){e=pn(this.defaults,e);const n=jl(e.baseURL,e.url);return Ll(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){Mr.prototype[e]=function(n,r){return this.request(pn(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(pn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Mr.prototype[e]=n(),Mr.prototype[e+"Form"]=n(!0)});const br=Mr;class Bi{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Qn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Bi(function(s){e=s}),cancel:e}}}const _y=Bi;function yy(t){return function(n){return t.apply(null,n)}}function by(t){return b.isObject(t)&&t.isAxiosError===!0}const si={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(si).forEach(([t,e])=>{si[e]=t});const vy=si;function Wl(t){const e=new br(t),n=Tl(br.prototype.request,e);return b.extend(n,br.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Wl(pn(t,s))},n}const se=Wl(Ui);se.Axios=br;se.CanceledError=Qn;se.CancelToken=_y;se.isCancel=$l;se.VERSION=Vl;se.toFormData=as;se.AxiosError=z;se.Cancel=se.CanceledError;se.all=function(e){return Promise.all(e)};se.spread=yy;se.isAxiosError=by;se.mergeConfig=pn;se.AxiosHeaders=it;se.formToJSON=t=>Bl(b.isHTMLForm(t)?new FormData(t):t);se.getAdapter=Hl.getAdapter;se.HttpStatusCode=vy;se.default=se;const Lr=se,Ey=x("h2",null,"Table of Exercises",-1),wy=x("p",null,"Create, Edit, and Delete exercises.",-1),Iy={__name:"Home",setup(t){const e=Te([]),n=async()=>{const o=(await Lr.get(`https://workout-tracker-ijx0.onrender.com:5555/allExercises/${we.user.uid}`)).data;o.sort((a,c)=>a.date>c.date?-1:1),e.value=o},r=async i=>{we.exercise=i,$i.push("/editExercise")},s=async i=>{Lr.delete(`https://workout-tracker-ijx0.onrender.com:5555/exercises/${we.user.uid}/${i}`).then(o=>{console.log("Delete successful",o),alert("Successfully deleted exercise!"),n()}).catch(o=>{console.error("Error deleting resource",o),alert("Failed to delete exercise.")})};return Kr(()=>{n()}),(i,o)=>(Ze(),et("article",null,[x("div",null,[Ey,wy,x("p",null,"You are signed in as user "+Yt(Ft(we).user.uid),1),pe(r_,{exercises:e.value,onEdit:r,onDelete:s},null,8,["exercises"])])]))}},Ty=x("h2",null,"Create Exercise",-1),Sy=x("p",null,"Must contain valid name, reps, weight, unit, and date.",-1),Ry=["onSubmit"],Ay=x("label",{htmlFor:"name"},"Exercise",-1),Oy=x("label",{htmlFor:"reps"},"Reps",-1),Cy=x("label",{htmlFor:"weight"},"Weight",-1),Py=x("label",{htmlFor:"unit"},"Unit",-1),xy=x("option",{value:"lbs"},"lbs",-1),ky=x("option",{value:"kgs"},"kgs",-1),Ny=x("option",{value:"miles"},"miles",-1),Dy=x("option",{value:"kms"},"kms",-1),My=[xy,ky,Ny,Dy],Ly=x("label",{htmlFor:"date"},"Date",-1),Uy=x("label",{htmlFor:"submit"},[x("input",{type:"submit",value:"Create",id:"submit"})],-1),Fy={__name:"CreateExercise",setup(t){const e=new Date,n=e.getFullYear(),r=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0"),i=`${n}-${r}-${s}`,o=Te(""),a=Te(""),c=Te(""),u=Te(""),l=Te(i),d=async()=>{const p={name:o.value,reps:a.value,weight:c.value,unit:u.value,date:l.value};Lr.post(`https://workout-tracker-ijx0.onrender.com:5555/exercises/${we.user.uid}`,p,{headers:{"Content-Type":"application/json"}}).then(_=>{console.log("POST successful",_),alert("Successfully created the exercise!"),$i.push("/")}).catch(_=>{alert("Failed to create exercise."),console.error("Error making POST request",_)})};return(p,_)=>(Ze(),et("article",null,[Ty,Sy,x("form",{onSubmit:Ec(d,["prevent"])},[Ay,We(x("input",{required:"",type:"text",placeholder:"Exercise name",autocomplete:"one-time-code",id:"name","onUpdate:modelValue":_[0]||(_[0]=g=>o.value=g)},null,512),[[Et,o.value]]),Oy,We(x("input",{required:"",type:"number",placeholder:"Reps performed",id:"reps","onUpdate:modelValue":_[1]||(_[1]=g=>a.value=g)},null,512),[[Et,a.value]]),Cy,We(x("input",{required:"",type:"number",placeholder:"Weight used",id:"weight","onUpdate:modelValue":_[2]||(_[2]=g=>c.value=g)},null,512),[[Et,c.value]]),Py,We(x("select",{required:"",name:"unit",id:"unit","onUpdate:modelValue":_[3]||(_[3]=g=>u.value=g)},My,512),[[vc,u.value]]),Ly,We(x("input",{required:"",type:"date",onChange:"setDate",id:"date","onUpdate:modelValue":_[4]||(_[4]=g=>l.value=g),min:"2020-01-01"},null,512),[[Et,l.value]]),Uy],40,Ry)]))}},By=x("h2",null,"Edit Exercise",-1),$y=x("p",null,"Must contain valid name, reps, weight, unit, and date.",-1),jy=["onSubmit"],Hy=x("label",{htmlFor:"name"},"Exercise",-1),Vy=x("label",{htmlFor:"reps"},"Reps",-1),Wy=x("label",{htmlFor:"weight"},"Weight",-1),zy=x("label",{htmlFor:"unit"},"Unit",-1),qy=x("option",{value:"lbs"},"lbs",-1),Ky=x("option",{value:"kgs"},"kgs",-1),Jy=x("option",{value:"miles"},"miles",-1),Gy=x("option",{value:"kms"},"kms",-1),Yy=[qy,Ky,Jy,Gy],Xy=x("label",{htmlFor:"date"},"Date",-1),Qy=x("label",{htmlFor:"submit"},[x("input",{type:"submit",value:"Save",id:"submit"})],-1),Zy={__name:"EditExercise",setup(t){const e=Te(""),n=Te(""),r=Te(""),s=Te(""),i=Te(""),o=async()=>{let a={name:e.value,reps:n.value,weight:r.value,unit:s.value,date:i.value};Lr.put(`https://workout-tracker-ijx0.onrender.com:5555/editExercises/${we.user.uid}/${we.exercise._id}`,a,{headers:{"Content-Type":"application/json"}}).then(c=>{alert("Successfully edited the exercise!")}).catch(c=>{alert("Failed to edit exercise."),console.error("Error making PUT request",c)})};return Kr(()=>{e.value=we.exercise.name,n.value=we.exercise.reps,r.value=we.exercise.weight,s.value=we.exercise.unit,i.value=we.exercise.date}),(a,c)=>(Ze(),et("article",null,[By,$y,x("form",{onSubmit:Ec(o,["prevent"])},[Hy,We(x("input",{required:"",type:"text",placeholder:"Exercise name",id:"name","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u)},null,512),[[Et,e.value]]),Vy,We(x("input",{required:"",type:"number",placeholder:"Reps performed",id:"reps","onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u)},null,512),[[Et,n.value]]),Wy,We(x("input",{required:"",type:"number",placeholder:"Weight used",id:"weight","onUpdate:modelValue":c[2]||(c[2]=u=>r.value=u)},null,512),[[Et,r.value]]),zy,We(x("select",{required:"",name:"unit",id:"unit","onUpdate:modelValue":c[3]||(c[3]=u=>s.value=u)},Yy,512),[[vc,s.value]]),Xy,We(x("input",{required:"",type:"date",id:"date","onUpdate:modelValue":c[4]||(c[4]=u=>i.value=u),min:"2020-01-01"},null,512),[[Et,i.value]]),Qy],40,jy)]))}},eb={apiKey:"AIzaSyDwgugab4TEYa_9nV_2yGpmaVJM-fAueag",authDomain:"workout-tracker-bc4f7.firebaseapp.com",projectId:"workout-tracker-bc4f7",storageBucket:"workout-tracker-bc4f7.appspot.com",messagingSenderId:"709517383461",appId:"1:709517383461:web:0a9163a679a86932e2eccc",measurementId:"G-74M70H233P"};Hc(eb);const we=zn({exercise:[],user:null}),tb=wl();Am(tb,t=>{t&&(we.user=t)});const nb=[{path:"/",name:"Home",component:Iy},{path:"/createExercise",name:"Create",component:Fy},{path:"/editExercise",name:"Edit",component:Zy}],$i=hh({history:Cd(),routes:nb}),rb=ud(Gg);rb.use($i).mount("#app");
