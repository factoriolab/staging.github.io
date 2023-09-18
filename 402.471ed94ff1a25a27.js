"use strict";(self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[]).push([[402],{6402:(tt,m,e)=>{e.r(m),e.d(m,{MainModule:()=>X});var r=e(6814),f=e(7487),g=e(4190),u=e(2572),v=e(7398),l=e(7689),c=e(5270),t=e(5879),d=e(1027),x=e(4221),h=e(5219),Z=e(707),M=e(4532),T=e(7213),C=e(7680),y=e(4480),_=e(5779),A=e(8340),I=e(2598),O=e(3847),U=e(9515);function L(n,a){if(1&n&&(t._UZ(0,"span",13),t.TgZ(1,"span",14),t._uU(2),t.ALo(3,"translate"),t.qZA()),2&n){const o=a.$implicit;t.Tol(o.icon),t.xp6(2),t.Oqu(t.lcZ(3,3,o.label))}}const S=function(n,a,o){return{resultType:n,time:a,cost:o}};function Y(n,a){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n){const o=t.oxw(4).ngIf;t.xp6(1),t.hij(" ",t.xi3(2,1,"app.simplexSolved",t.kEZ(4,S,o.result.resultType.toLowerCase(),o.result.time,null==o.result.cost?null:o.result.cost.toPrecision(2)))," ")}}const b=function(n){return{resultType:n}};function J(n,a){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n){const o=t.oxw(4).ngIf;t.xp6(1),t.hij(" ",t.xi3(2,1,"app.simplexUnsolved",t.VKq(4,b,o.result.resultType.toLowerCase()))," ")}}function N(n,a){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,Y,3,8,"div",2),t.YNc(2,J,3,6,"ng-template",null,16,t.W1O),t.TgZ(4,"span"),t._uU(5),t.qZA()()),2&n){const o=t.MAs(3),i=t.oxw(3).ngIf,s=t.oxw();t.xp6(1),t.Q6J("ngIf",i.result.resultType===s.MatrixResultType.Solved)("ngIfElse",o),t.xp6(4),t.Oqu(s.contentSvc.version)}}function H(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"lab-objectives"),t.TgZ(2,"p-card",9),t.ALo(3,"translate"),t.TgZ(4,"p-tabMenu",10),t.YNc(5,L,4,5,"ng-template",11),t.qZA(),t._UZ(6,"router-outlet"),t.YNc(7,N,6,3,"ng-template",12),t.qZA(),t.BQk()),2&n){const o=t.oxw(3);t.xp6(2),t.Q6J("header",t.lcZ(3,2,"app.factory")),t.xp6(2),t.Q6J("model",o.tabItems)}}function Q(n,a){1&n&&(t.TgZ(0,"div",17),t._UZ(1,"p-progressSpinner"),t.qZA())}function P(n,a){if(1&n){const o=t.EpF();t.ynx(0),t._UZ(1,"lab-settings",4),t.TgZ(2,"div",5),t.NdJ("click",function(){t.CHM(o);const s=t.oxw(2);return t.KtG(s.contentSvc.toggleSettings())}),t.qZA(),t.TgZ(3,"div",6)(4,"main",7),t.YNc(5,H,8,4,"ng-container",2),t.YNc(6,Q,2,0,"ng-template",null,8,t.W1O),t.qZA()(),t.BQk()}if(2&n){const o=t.MAs(7),i=t.oxw().ngIf;t.xp6(1),t.Q6J("active",i.settingsActive)("hidden",i.settingsXlHidden),t.xp6(1),t.ekj("active",i.settingsActive),t.xp6(1),t.ekj("settings-xl-hidden",i.settingsXlHidden),t.xp6(2),t.Q6J("ngIf",null!=i.mod)("ngIfElse",o)}}function j(n,a){1&n&&(t.TgZ(0,"div",24),t._UZ(1,"i",25),t.TgZ(2,"span"),t._uU(3),t.ALo(4,"translate"),t.qZA()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"app.error")))}function $(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"p-dialog",18),t.YNc(1,j,5,3,"ng-template",19),t.TgZ(2,"div",20)(3,"div"),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"div",21),t._uU(7),t.qZA(),t.TgZ(8,"div",22)(9,"button",23),t.NdJ("click",function(){t.CHM(o);const s=t.oxw().ngIf,p=t.oxw();return t.KtG(p.reset(s.game))}),t.ALo(10,"translate"),t.qZA()()()()}if(2&n){const o=t.oxw().ngIf,i=t.oxw();t.Q6J("visible",!0)("modal",!0)("draggable",!1)("resizable",!1)("closable",!1)("closeOnEscape",!1),t.xp6(4),t.Oqu(t.lcZ(5,10,"app.errorDetail")),t.xp6(3),t.Oqu(o.errorMsg),t.xp6(2),t.Q6J("label",t.lcZ(10,12,"reset"))("loading",i.isResetting)}}function E(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"lab-header",1),t.YNc(2,P,8,8,"ng-container",2),t.YNc(3,$,11,14,"ng-template",null,3,t.W1O),t.BQk()),2&n){const o=a.ngIf,i=t.MAs(4);t.xp6(1),t.Q6J("sticky",o.scrollTop>16)("settingsXlHidden",o.settingsXlHidden),t.xp6(1),t.Q6J("ngIf",null==o.errorMsg)("ngIfElse",i)}}const B=g.Bz.forChild([{path:"",component:(()=>{var n;class a{constructor(i,s,p,F,z,G){this.contentSvc=i,this.ngZone=s,this.ref=p,this.router=F,this.store=z,this.errorSvc=G,this.vm$=(0,u.a)([this.store.select(c.Zr.cF),this.store.select(c.Zr.IK),this.store.select(c.VJ.p5),this.contentSvc.settingsActive$,this.contentSvc.settingsXlHidden$,this.contentSvc.scrollTop$,this.errorSvc.message$]).pipe((0,v.U)(([V,D,K,W,w,k,q])=>({game:V,mod:D,result:K,settingsActive:W,settingsXlHidden:w,scrollTop:k,errorMsg:q}))),this.isResetting=!1,this.tabItems=[{label:"app.list",icon:"fa-solid fa-list",routerLink:"list",queryParamsHandling:"preserve"},{label:"app.flow",icon:"fa-solid fa-diagram-project",routerLink:"flow",queryParamsHandling:"preserve"},{label:"app.data",icon:"fa-solid fa-database",routerLink:"data",queryParamsHandling:"preserve"}],this.Game=l.lA,this.ItemId=l.bN,this.MatrixResultType=l.xN}ngAfterViewInit(){this.errorSvc.message$.subscribe(()=>this.ref.detectChanges())}reset(i){this.isResetting=!0,setTimeout(()=>{this.ngZone.run(()=>{this.errorSvc.message$.next(null),this.router.navigateByUrl(l.dL[i].route),this.store.dispatch(new c.gV.rc),this.isResetting=!1})},10)}}return(n=a).\u0275fac=function(i){return new(i||n)(t.Y36(d._s),t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(g.F0),t.Y36(x.yh),t.Y36(d.T_))},n.\u0275cmp=t.Xpm({type:n,selectors:[["lab-main"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"sticky","settingsXlHidden"],[4,"ngIf","ngIfElse"],["errorDialog",""],[3,"active","hidden"],[1,"layout-mask",3,"click"],[1,"layout-content"],[1,"px-sm-4","py-4"],["loading",""],["styleClass","mt-4",3,"header"],[3,"model"],["pTemplate","item"],["pTemplate","footer"],[1,"p-menuitem-icon"],[1,"p-menuitem-text"],[1,"d-flex","align-items-center","justify-content-between"],["notSolved",""],[1,"d-flex","flex-column","align-items-center","mt-5"],[3,"visible","modal","draggable","resizable","closable","closeOnEscape"],["pTemplate","header"],[1,"p-error"],[1,"mt-4"],[1,"text-end","mt-4"],["pButton","","pRipple","","type","button",3,"label","loading","click"],[1,"p-dialog-title","p-error"],[1,"fa-solid","fa-circle-exclamation","me-2"]],template:function(i,s){1&i&&(t.YNc(0,E,5,4,"ng-container",0),t.ALo(1,"async")),2&i&&t.Q6J("ngIf",t.lcZ(1,1,s.vm$))},dependencies:[r.O5,h.jx,g.lC,Z.Hq,M.Z,T.V,C.G,y.H,_.d,A.G,I.P,O.f,r.Ov,U.X$],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}main[_ngcontent-%COMP%]{overflow-x:hidden}.layout-content[_ngcontent-%COMP%]{transition:margin .4s cubic-bezier(.05,.74,.2,.99);margin-left:320px;padding-top:4rem}@media (max-width: 1199.98px){.layout-content[_ngcontent-%COMP%]{margin-left:0;padding-top:6rem}}@media (min-width: 1200px){.layout-content.settings-xl-hidden[_ngcontent-%COMP%]{margin-left:0}}@media (max-width: 1199.98px){.layout-mask.active[_ngcontent-%COMP%]{position:fixed;z-index:3;top:0;left:0;width:100%;height:100%;background-color:var(--maskbg)}}"],changeDetection:0}),a})(),children:[{path:"list",loadComponent:()=>e.e(950).then(e.bind(e,3950)).then(n=>n.ListComponent)},{path:"flow",loadComponent:()=>e.e(824).then(e.bind(e,9824)).then(n=>n.FlowComponent)},{path:"data",loadChildren:()=>e.e(643).then(e.bind(e,1643)).then(n=>n.DataModule)}]}]);let X=(()=>{var n;class a{}return(n=a).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,f.o,B]}),a})()}}]);