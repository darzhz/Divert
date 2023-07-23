var ae=Object.defineProperty;var fe=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>(fe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function T(){}function oe(e){return e()}function ne(){return Object.create(null)}function A(e){e.forEach(oe)}function se(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Y;function de(e,t){return e===t?!0:(Y||(Y=document.createElement("a")),Y.href=t,e===Y.href)}function pe(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function x(e){e.parentNode&&e.parentNode.removeChild(e)}function v(e){return document.createElement(e)}function he(e){return document.createTextNode(e)}function L(){return he(" ")}function k(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _e(e){return Array.from(e.childNodes)}function B(e,t){e.value=t??""}function me(e,t,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:i})}let S;function N(e){S=e}function le(){if(!S)throw new Error("Function called outside component initialization");return S}function ge(e){le().$$.on_mount.push(e)}function ce(){const e=le();return(t,n,{cancelable:i=!1}={})=>{const o=e.$$.callbacks[t];if(o){const r=me(t,n,{cancelable:i});return o.slice().forEach(d=>{d.call(e,r)}),!r.defaultPrevented}return!0}}function M(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach(i=>i.call(this,t))}const O=[],E=[];let $=[];const Z=[],be=Promise.resolve();let H=!1;function ye(){H||(H=!0,be.then(ue))}function J(e){$.push(e)}function D(e){Z.push(e)}const V=new Set;let C=0;function ue(){if(C!==0)return;const e=S;do{try{for(;C<O.length;){const t=O[C];C++,N(t),ve(t.$$)}}catch(t){throw O.length=0,C=0,t}for(N(null),O.length=0,C=0;E.length;)E.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];V.has(n)||(V.add(n),n())}$.length=0}while(O.length);for(;Z.length;)Z.pop()();H=!1,V.clear(),N(e)}function ve(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(J)}}function ke(e){const t=[],n=[];$.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),$=t}const U=new Set;let we;function K(e,t){e&&e.i&&(U.delete(e),e.i(t))}function ie(e,t,n,i){if(e&&e.o){if(U.has(e))return;U.add(e),we.c.push(()=>{U.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function I(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function re(e){e&&e.c()}function G(e,t,n){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),J(()=>{const r=e.$$.on_mount.map(oe).filter(se);e.$$.on_destroy?e.$$.on_destroy.push(...r):A(r),e.$$.on_mount=[]}),o.forEach(J)}function Q(e,t){const n=e.$$;n.fragment!==null&&(ke(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function xe(e,t){e.$$.dirty[0]===-1&&(O.push(e),ye(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,i,o,r,d,l=[-1]){const h=S;N(e);const s=e.$$={fragment:null,ctx:[],props:r,update:T,not_equal:o,bound:ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:ne(),dirty:l,skip_bound:!1,root:t.target||h.$$.root};d&&d(s.root);let a=!1;if(s.ctx=n?n(e,t.props||{},(f,p,...g)=>{const w=g.length?g[0]:p;return s.ctx&&o(s.ctx[f],s.ctx[f]=w)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](w),a&&xe(e,f)),p}):[],s.update(),a=!0,A(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const f=_e(t.target);s.fragment&&s.fragment.l(f),f.forEach(x)}else s.fragment&&s.fragment.c();t.intro&&K(e.$$.fragment),G(e,t.target,t.anchor),ue()}N(h)}class ee{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){Q(this,1),this.$destroy=T}$on(t,n){if(!se(n))return T;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ee="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ee);function ze(e){let t,n,i,o,r,d,l,h,s;return{c(){t=v("div"),n=v("div"),i=v("span"),i.textContent="circle",o=L(),r=v("input"),d=L(),l=v("span"),l.textContent="close",u(i,"class","material-symbols-rounded iconx svelte-1hz8qsw"),u(r,"type","text"),u(r,"placeholder",e[1]),u(r,"spellcheck","false"),u(r,"class","svelte-1hz8qsw"),u(l,"class","material-symbols-rounded iconx svelte-1hz8qsw"),u(n,"id","innerbox"),u(n,"class","svelte-1hz8qsw"),u(t,"id","box"),u(t,"class","svelte-1hz8qsw")},m(a,f){z(a,t,f),y(t,n),y(n,i),y(n,o),y(n,r),B(r,e[2]),y(n,d),y(n,l),e[6](t),h||(s=[k(r,"input",e[5]),k(r,"input",e[4]),k(l,"click",e[3])],h=!0)},p(a,[f]){f&2&&u(r,"placeholder",a[1]),f&4&&r.value!==a[2]&&B(r,a[2])},i:T,o:T,d(a){a&&x(t),e[6](null),h=!1,A(s)}}}function Le(e,t,n){let{placeholder:i}=t,{TextElement:o}=t,r;const d=()=>{n(2,r=null)},l=ce(),h=()=>{if(s(r)){var p=document.createElement("a");p.href=r,p.protocol!=r.substring(0,5)&&n(2,r="http://"+r),n(0,o.style.backgroundColor="rgba(0, 0, 0, 0.582)",o),l("valid",{url:r})}else n(0,o.style.backgroundColor="red",o)},s=p=>{var g=p.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);return g!==null};function a(){r=this.value,n(2,r)}function f(p){E[p?"unshift":"push"](()=>{o=p,n(0,o)})}return e.$$set=p=>{"placeholder"in p&&n(1,i=p.placeholder),"TextElement"in p&&n(0,o=p.TextElement)},[o,i,r,d,h,a,f]}class Te extends ee{constructor(t){super(),X(this,t,Le,ze,W,{placeholder:1,TextElement:0})}}function Ce(e){let t,n,i,o,r,d,l,h,s;return{c(){t=v("div"),n=v("div"),i=v("span"),i.textContent="link",o=L(),r=v("input"),d=L(),l=v("span"),l.textContent="circle",u(i,"class","material-symbols-rounded iconx svelte-1thzkm1"),u(i,"role","button"),u(i,"tabindex","0"),u(r,"type","text"),u(r,"placeholder",e[2]),r.readOnly=!0,u(r,"class","svelte-1thzkm1"),u(l,"class","material-symbols-rounded iconx svelte-1thzkm1"),u(n,"id","innerbox"),u(n,"class","svelte-1thzkm1"),u(t,"id","box"),u(t,"role","button"),u(t,"tabindex","0"),u(t,"aria-pressed","false"),u(t,"class","svelte-1thzkm1")},m(a,f){z(a,t,f),y(t,n),y(n,i),y(n,o),y(n,r),B(r,e[0]),y(n,d),y(n,l),e[10](t),h||(s=[k(i,"keyup",e[7]),k(i,"keydown",e[8]),k(i,"click",e[4]),k(r,"input",e[9]),k(l,"click",e[3]),k(t,"keyup",e[5]),k(t,"keydown",e[6]),k(t,"click",e[3])],h=!0)},p(a,[f]){f&4&&u(r,"placeholder",a[2]),f&1&&r.value!==a[0]&&B(r,a[0])},i:T,o:T,d(a){a&&x(t),e[10](null),h=!1,A(s)}}}function Oe(e,t,n){let{placeholder:i}=t,{text:o}=t,{box:r}=t;const d=()=>{l("generate")},l=ce(),h=()=>{navigator.clipboard.writeText(o),alert("Copied the text: "+o)};function s(_){M.call(this,e,_)}function a(_){M.call(this,e,_)}function f(_){M.call(this,e,_)}function p(_){M.call(this,e,_)}function g(){o=this.value,n(0,o)}function w(_){E[_?"unshift":"push"](()=>{r=_,n(1,r)})}return e.$$set=_=>{"placeholder"in _&&n(2,i=_.placeholder),"text"in _&&n(0,o=_.text),"box"in _&&n(1,r=_.box)},[o,r,i,d,h,s,a,f,p,g,w]}class $e extends ee{constructor(t){super(),X(this,t,Oe,Ce,W,{placeholder:2,text:0,box:1})}}const Ae="/assets/divert-b71705ff.svg";function Ne(e){let t,n,i,o,r,d,l,h,s,a,f,p,g;function w(c){e[5](c)}let _={placeholder:"enter link here"};e[2]!==void 0&&(_.TextElement=e[2]),t=new Te({props:_}),E.push(()=>I(t,"TextElement",w)),t.$on("valid",e[3]);function F(c){e[6](c)}function m(c){e[7](c)}function q(c){e[8](c)}let P={};return e[1]!==void 0&&(P.box=e[1]),e[0]!==void 0&&(P.text=e[0]),e[0]!==void 0&&(P.placeholder=e[0]),l=new $e({props:P}),E.push(()=>I(l,"box",F)),E.push(()=>I(l,"text",m)),E.push(()=>I(l,"placeholder",q)),l.$on("generate",e[4]),{c(){re(t.$$.fragment),i=L(),o=v("img"),d=L(),re(l.$$.fragment),f=L(),p=v("div"),p.innerHTML='<p>Divert is url shortning service created by <a href="https://github.com/darzhz/" class="svelte-lhl8go">darzh</a></p>',de(o.src,r=Ae)||u(o,"src",r),u(o,"alt","logo of divert"),u(p,"id","info"),u(p,"class","svelte-lhl8go")},m(c,b){G(t,c,b),z(c,i,b),z(c,o,b),z(c,d,b),G(l,c,b),z(c,f,b),z(c,p,b),g=!0},p(c,[b]){const te={};!n&&b&4&&(n=!0,te.TextElement=c[2],D(()=>n=!1)),t.$set(te);const j={};!h&&b&2&&(h=!0,j.box=c[1],D(()=>h=!1)),!s&&b&1&&(s=!0,j.text=c[0],D(()=>s=!1)),!a&&b&1&&(a=!0,j.placeholder=c[0],D(()=>a=!1)),l.$set(j)},i(c){g||(K(t.$$.fragment,c),K(l.$$.fragment,c),g=!0)},o(c){ie(t.$$.fragment,c),ie(l.$$.fragment,c),g=!1},d(c){c&&(x(i),x(o),x(d),x(f),x(p)),Q(t,c),Q(l,c)}}}function Se(e,t,n){let i="Look Up",o="",r,d;const l=[{transform:"translateY(0)"},{transform:"translateY(120px)"},{transform:"translateY(0)"}],h=[{transform:"translateY(0)"},{transform:"translateY(-120px)"},{transform:"translateY(0)"}],s={duration:300,iterations:1},a=()=>{r.animate(l,s),d.animate(h,s)},f=async m=>{o=m.detail.url,n(0,i="Click Me")};ge(()=>{a()});const p=async()=>{a();try{const q=await(await fetch("/api/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Lurl:o})})).json();console.log(q),n(0,i=window.location.href+q.surl)}catch(m){console.log(m)}};function g(m){d=m,n(2,d)}function w(m){r=m,n(1,r)}function _(m){i=m,n(0,i)}function F(m){i=m,n(0,i)}return[i,r,d,f,p,g,w,_,F]}class qe extends ee{constructor(t){super(),X(this,t,Se,Ne,W,{})}}new qe({target:document.getElementById("app")});
