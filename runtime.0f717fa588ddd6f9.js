(()=>{"use strict";var e,v={},g={};function r(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,f,o)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,f,o]=e[i],c=!0,l=0;l<t.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every(p=>r.O[p](t[l]))?t.splice(l--,1):(c=!1,o<a&&(a=o));if(c){e.splice(i--,1);var u=f();void 0!==u&&(n=u)}}return n}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[t,f,o]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>e+"."+{182:"43f33b49f31421ac",411:"6586c9232e307eac",522:"f4c0fb72fdcc8cc9",651:"13307f2ee2da44d3",886:"f3e83db99fe405c3",913:"9b387e3c56d3308e"}[e]+".js",r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="factoriolab:";r.l=(t,f,o,i)=>{if(e[t])e[t].push(f);else{var a,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+o){a=d;break}}a||(c=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+o),a.src=r.tu(t)),e[t]=[f];var s=(m,p)=>{a.onerror=a.onload=null,clearTimeout(b);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(_=>_(p)),m)return m(p)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),c&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(f,o)=>{var i=r.o(e,f)?e[f]:void 0;if(0!==i)if(i)o.push(i[2]);else if(666!=f){var a=new Promise((d,s)=>i=e[f]=[d,s]);o.push(i[2]=a);var c=r.p+r.u(f),l=new Error;r.l(c,d=>{if(r.o(e,f)&&(0!==(i=e[f])&&(e[f]=void 0),i)){var s=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;l.message="Loading chunk "+f+" failed.\n("+s+": "+b+")",l.name="ChunkLoadError",l.type=s,l.request=b,i[1](l)}},"chunk-"+f,f)}else e[f]=0},r.O.j=f=>0===e[f];var n=(f,o)=>{var l,u,[i,a,c]=o,d=0;if(i.some(b=>0!==e[b])){for(l in a)r.o(a,l)&&(r.m[l]=a[l]);if(c)var s=c(r)}for(f&&f(o);d<i.length;d++)r.o(e,u=i[d])&&e[u]&&e[u][0](),e[u]=0;return r.O(s)},t=self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();