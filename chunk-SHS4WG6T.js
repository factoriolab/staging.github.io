import{a as it,b as nt,d as ot}from"./chunk-JSMDD5NI.js";import{$ as k,$d as J,Ba as f,Bd as T,Be as W,Ca as S,Cb as H,Ec as X,Fa as g,Ie as Y,Jd as $,Je as tt,Ka as o,La as a,Le as et,Ma as m,Oa as y,Od as G,Pa as b,Qa as s,Qc as z,Vc as F,Vd as U,Wc as L,X as P,Xa as u,Ya as v,Za as M,_ as p,aa as E,be as K,cd as q,ea as h,fa as C,gb as O,hc as j,kb as c,lb as _,ld as N,mb as B,nd as Z,qe as Q,r as R,ra as n,rb as D,ua as I,yc as A,za as d,zc as V}from"./chunk-NGFG5ZIA.js";var st=(t,e)=>({time:t,cost:e});function pt(t,e){t&1&&(o(0,"div",7),m(1,"i",8),o(2,"span"),u(3),c(4,"translate"),a()()),t&2&&(n(3),v(_(4,1,"app.error")))}function mt(t,e){if(t&1){let i=y();o(0,"p-dialog",1),d(1,pt,5,3,"ng-template",2),o(2,"div",3)(3,"div"),u(4),c(5,"translate"),a(),o(6,"div",4),u(7),a(),o(8,"div",5)(9,"button",6),c(10,"translate"),b("click",function(){h(i);let r=s();return C(r.reset())}),a()()()()}if(t&2){let i=s();f("visible",!0)("modal",!0)("draggable",!1)("resizable",!1)("closable",!1)("closeOnEscape",!1),n(4),v(_(5,10,"app.errorDetail")),n(3),v(e),n(2),f("label",_(10,12,"reset"))("loading",i.isResetting)}}function ct(t,e){t&1&&m(0,"p-tabMenu",15),t&2&&f("model",e)}function dt(t,e){if(t&1&&(o(0,"div"),u(1),c(2,"translate"),a()),t&2){let i,l=s(4);n(),M(" ",B(2,1,"app.simplexSolved",O(4,st,l.result().time,(i=l.result().cost)==null?null:i.toPrecision(2)))," ")}}function ft(t,e){if(t&1&&(o(0,"div"),u(1),c(2,"translate"),a()),t&2){let i=s(4);n(),M(" ",_(2,1,"options.simplexResultType."+i.result().resultType)," ")}}function ut(t,e){if(t&1&&(o(0,"div",17),d(1,dt,3,7,"div")(2,ft,3,3,"div"),o(3,"span"),u(4),a()()),t&2){let i=s(3);n(),g(i.result().resultType===i.SimplexResultType.Solved?1:2),n(3),v(i.contentSvc.version)}}function _t(t,e){if(t&1&&(m(0,"lab-objectives"),o(1,"p-card",14),c(2,"translate"),d(3,ct,1,1,"p-tabMenu",15),c(4,"async"),m(5,"router-outlet"),d(6,ut,5,2,"ng-template",16),a()),t&2){let i,l=s(2);n(),f("header",_(2,2,"app.factory")),n(2),g((i=_(4,4,l.tabItems$))?3:-1,i)}}function gt(t,e){t&1&&(o(0,"div",13),m(1,"p-progressSpinner"),a())}function vt(t,e){if(t&1){let i=y();m(0,"lab-settings",9),o(1,"div",10),b("click",function(){h(i);let r=s();return C(r.contentSvc.toggleSettings())}),a(),o(2,"div",11)(3,"main",12),d(4,_t,7,6)(5,gt,2,0,"div",13),a()()}if(t&2){let i=s();f("active",i.contentSvc.settingsActive())("hidden",i.contentSvc.settingsXlHidden()),n(),S("active",i.contentSvc.settingsActive()),n(),S("settings-xl-hidden",i.contentSvc.settingsXlHidden()),n(2),g(i.mod()?4:5)}}var at=(()=>{let e=class e{constructor(){this.contentSvc=p(N),this.ngZone=p(I),this.ref=p(D),this.router=p(V),this.store=p(z),this.errorSvc=p(G),this.translateSvc=p(F),this.gameInfo=this.store.selectSignal(T.getGameInfo),this.mod=this.store.selectSignal(T.getMod),this.result=this.store.selectSignal($.getMatrixResult),this.isResetting=!1,this.tabItems$=this.contentSvc.lang$.pipe(R(()=>[{label:this.translateSvc.instant("app.list"),icon:"fa-solid fa-list",routerLink:"list",queryParamsHandling:"preserve"},{label:this.translateSvc.instant("app.flow"),icon:"fa-solid fa-diagram-project",routerLink:"flow",queryParamsHandling:"preserve"},{label:this.translateSvc.instant("app.data"),icon:"fa-solid fa-database",routerLink:"data",queryParamsHandling:"preserve"}])),this.SimplexResultType=j}reset(){this.isResetting=!0,setTimeout(()=>{this.ngZone.run(()=>{this.errorSvc.message.set(null),this.router.navigateByUrl(this.gameInfo().route),this.store.dispatch(new Z.ResetAction),this.isResetting=!1})},10)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=k({type:e,selectors:[["lab-main"]],decls:3,vars:3,consts:[[3,"sticky","settingsXlHidden"],[3,"visible","modal","draggable","resizable","closable","closeOnEscape"],["pTemplate","header"],[1,"p-error"],[1,"mt-4"],[1,"text-end","mt-4"],["pButton","","pRipple","","type","button",1,"p-button-outlined",3,"click","label","loading"],[1,"p-dialog-title","p-error"],[1,"fa-solid","fa-circle-exclamation","me-2"],[3,"active","hidden"],[1,"layout-mask",3,"click"],[1,"layout-content"],[1,"px-sm-4","py-4"],[1,"d-flex","flex-column","align-items-center","mt-5"],["styleClass","mt-4",3,"header"],[3,"model"],["pTemplate","footer"],[1,"d-flex","align-items-center","justify-content-between"]],template:function(r,x){if(r&1&&(m(0,"lab-header",0),d(1,mt,11,14,"p-dialog",1)(2,vt,6,7)),r&2){let w;f("sticky",x.contentSvc.scrollTop()>16)("settingsXlHidden",x.contentSvc.settingsXlHidden()),n(),g((w=x.errorSvc.message())?1:2,w)}},dependencies:[q,A,J,W,K,Y,U,tt,Q,it,nt,H,L],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}main[_ngcontent-%COMP%]{overflow-x:hidden}.layout-content[_ngcontent-%COMP%]{transition:margin .4s cubic-bezier(.05,.74,.2,.99);margin-left:320px;padding-top:4rem}@media (max-width: 1199.98px){.layout-content[_ngcontent-%COMP%]{margin-left:0;padding-top:6rem}}@media (min-width: 1200px){.layout-content.settings-xl-hidden[_ngcontent-%COMP%]{margin-left:0}}@media (max-width: 1199.98px){.layout-mask.active[_ngcontent-%COMP%]{position:fixed;z-index:3;top:0;left:0;width:100%;height:100%;background-color:var(--maskbg)}}"],changeDetection:0});let t=e;return t})();var xt=[{path:"",component:at,children:[{path:"list",loadComponent:()=>import("./chunk-TYYPOTJE.js").then(t=>t.ListComponent)},{path:"flow",loadComponent:()=>import("./chunk-NGBJWAKJ.js").then(t=>t.FlowComponent)},{path:"data",loadChildren:()=>import("./chunk-NQ7DPGX5.js").then(t=>t.DataModule)}]}],rt=X.forChild(xt);var Qt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=E({type:e}),e.\u0275inj=P({imports:[et,ot,rt]});let t=e;return t})();export{Qt as MainModule};
