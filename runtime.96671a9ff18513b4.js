(()=>{"use strict";var e,v={},g={};function r(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,f,o)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,f,o]=e[i],s=!0,l=0;l<t.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every(p=>r.O[p](t[l]))?t.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(i--,1);var d=f();void 0!==d&&(n=d)}}return n}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,f,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{291:"23f4dbab554077aa",503:"8447de8786c0dbea",663:"c7cefb0c5aef1f15"}[e]+".js",r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="factoriolab:";r.l=(t,f,o,i)=>{if(e[t])e[t].push(f);else{var a,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+o){a=u;break}}a||(s=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+o),a.src=r.tu(t)),e[t]=[f];var c=(m,p)=>{a.onerror=a.onload=null,clearTimeout(b);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(_=>_(p)),m)return m(p)},b=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),s&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,o)=>{var i=r.o(e,f)?e[f]:void 0;if(0!==i)if(i)o.push(i[2]);else if(666!=f){var a=new Promise((u,c)=>i=e[f]=[u,c]);o.push(i[2]=a);var s=r.p+r.u(f),l=new Error;r.l(s,u=>{if(r.o(e,f)&&(0!==(i=e[f])&&(e[f]=void 0),i)){var c=u&&("load"===u.type?"missing":u.type),b=u&&u.target&&u.target.src;l.message="Loading chunk "+f+" failed.\n("+c+": "+b+")",l.name="ChunkLoadError",l.type=c,l.request=b,i[1](l)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,o)=>{var l,d,[i,a,s]=o,u=0;if(i.some(b=>0!==e[b])){for(l in a)r.o(a,l)&&(r.m[l]=a[l]);if(s)var c=s(r)}for(f&&f(o);u<i.length;u++)r.o(e,d=i[u])&&e[d]&&e[d][0](),e[d]=0;return r.O(c)},t=self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();