(()=>{"use strict";var e,v={},m={};function r(e){var n=m[e];if(void 0!==n)return n.exports;var t=m[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,d,f)=>{if(!t){var a=1/0;for(i=0;i<e.length;i++){for(var[t,d,f]=e[i],u=!0,o=0;o<t.length;o++)(!1&f||a>=f)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(u=!1,f<a&&(a=f));if(u){e.splice(i--,1);var l=d();void 0!==l&&(n=l)}}return n}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,d,f]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{277:"5b5391220a6d4d82",402:"471ed94ff1a25a27",504:"bd71e26daa9e152e",592:"d98ab431f2bcacb9",636:"7cc82060b85ed917",643:"87fd6cb78ae7e849",736:"d34fc50891bc98d8",816:"3e63eb01a709a0d4",824:"a93368bc14119b0b",898:"a4388bbd562ff6d5",950:"4713fa5d6a22c0e0"}[e]+".js",r.miniCssF=e=>{},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="factoriolab:";r.l=(t,d,f,i)=>{if(e[t])e[t].push(d);else{var a,u;if(void 0!==f)for(var o=document.getElementsByTagName("script"),l=0;l<o.length;l++){var c=o[l];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==n+f){a=c;break}}a||(u=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+f),a.src=r.tu(t)),e[t]=[d];var s=(g,p)=>{a.onerror=a.onload=null,clearTimeout(b);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(_=>_(p)),g)return g(p)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),u&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(d,f)=>{var i=r.o(e,d)?e[d]:void 0;if(0!==i)if(i)f.push(i[2]);else if(666!=d){var a=new Promise((c,s)=>i=e[d]=[c,s]);f.push(i[2]=a);var u=r.p+r.u(d),o=new Error;r.l(u,c=>{if(r.o(e,d)&&(0!==(i=e[d])&&(e[d]=void 0),i)){var s=c&&("load"===c.type?"missing":c.type),b=c&&c.target&&c.target.src;o.message="Loading chunk "+d+" failed.\n("+s+": "+b+")",o.name="ChunkLoadError",o.type=s,o.request=b,i[1](o)}},"chunk-"+d,d)}else e[d]=0},r.O.j=d=>0===e[d];var n=(d,f)=>{var o,l,[i,a,u]=f,c=0;if(i.some(b=>0!==e[b])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var s=u(r)}for(d&&d(f);c<i.length;c++)r.o(e,l=i[c])&&e[l]&&e[l][0](),e[l]=0;return r.O(s)},t=self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();