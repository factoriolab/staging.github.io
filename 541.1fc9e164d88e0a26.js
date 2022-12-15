"use strict";(self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[]).push([[541],{5541:($,f,a)=>{a.r(f),a.d(f,{LandingModule:()=>d});var m=a(6895),v=a(6671),u=a(4258),h=a(9841),x=a(4004),g=a(8328),c=a(9105),C=a(3953),t=a(4650),Z=a(2997),L=a(7155),_=a(4006),T=a(5593),y=a(4247),A=a(805),I=a(5108),J=a(2210),b=a(1795),M=a(7586),w=a(6188),P=a(3799);function N(o,e){if(1&o&&(t.TgZ(0,"div",19)(1,"i",20),t.ALo(2,"iconSmClass"),t.qZA(),t.TgZ(3,"span",21),t._uU(4),t.ALo(5,"translate"),t.qZA()()),2&o){const n=e.ngIf;t.xp6(1),t.Tol(t.lcZ(2,3,n.icon)),t.xp6(3),t.Oqu(t.lcZ(5,5,n.label))}}function Q(o,e){if(1&o&&t.YNc(0,N,6,7,"div",18),2&o){const n=t.oxw().ngIf,i=t.oxw();t.Q6J("ngIf",i.gameInfo[n.data.game])}}function S(o,e){if(1&o&&(t.TgZ(0,"div",19)(1,"i"),t.ALo(2,"iconSmClass"),t.qZA(),t.TgZ(3,"span",21),t._uU(4),t.ALo(5,"translate"),t.qZA()()),2&o){const n=e.ngIf;t.xp6(1),t.Tol(t.lcZ(2,3,n.icon)),t.xp6(3),t.Oqu(t.lcZ(5,5,n.label))}}function H(o,e){if(1&o&&t.YNc(0,S,6,7,"div",18),2&o){const n=e.$implicit,i=t.oxw(2);t.Q6J("ngIf",i.gameInfo[n.value])}}function U(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"p-dropdown",22),t.NdJ("onChange",function(s){t.CHM(n);const l=t.oxw(2);return t.KtG(l.setMod(s.value))}),t.qZA()}if(2&o){const n=t.oxw().ngIf;t.Q6J("filter",!0)("ngModel",n.settings.modId)("options",n.modOptions)}}function Y(o,e){1&o&&t._UZ(0,"p-divider")}function B(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"span",23)(1,"span",24),t._UZ(2,"i",25),t.qZA(),t.TgZ(3,"p-dropdown",26),t.NdJ("onChange",function(s){t.CHM(n);const l=t.oxw().ngIf,r=t.oxw();return t.KtG(r.setState(s.value,l.preferences))}),t.ALo(4,"translate"),t.qZA()()}if(2&o){const n=t.oxw().ngIf;t.xp6(3),t.Q6J("placeholder",t.lcZ(4,2,"landing.loadSavedState"))("options",n.savedStates)}}function G(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(2);return t.KtG(s.router.navigateByUrl(s.BrowserUtility.routerState))}),t.ALo(1,"translate"),t.qZA()}2&o&&t.Q6J("label",t.lcZ(1,1,"landing.loadLastState"))}function O(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"p-card")(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t._UZ(4,"div",4),t.ALo(5,"translate"),t.TgZ(6,"p-dropdown",5),t.NdJ("onChange",function(s){t.CHM(n);const l=t.oxw();return t.KtG(l.setGame(s.value))}),t.YNc(7,Q,1,1,"ng-template",6),t.YNc(8,H,1,1,"ng-template",7),t.qZA(),t.YNc(9,U,1,3,"p-dropdown",8),t.TgZ(10,"button",9),t.NdJ("click",function(){const l=t.CHM(n).ngIf,r=t.MAs(15);return t.KtG(r.clickOpen(l.data,"item"))}),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"button",10),t.NdJ("click",function(){const l=t.CHM(n).ngIf,r=t.MAs(17);return t.KtG(r.clickOpen(l.data,"recipe"))}),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"lab-picker",11,12),t.NdJ("selectId",function(s){t.CHM(n);const l=t.oxw();return t.KtG(l.selectProduct(s))}),t.qZA(),t.TgZ(16,"lab-picker",11,13),t.NdJ("selectId",function(s){t.CHM(n);const l=t.oxw();return t.KtG(l.selectProducer(s))}),t.qZA(),t.YNc(18,Y,1,0,"p-divider",0),t.YNc(19,B,5,4,"span",14),t.YNc(20,G,2,3,"button",15),t._UZ(21,"p-divider")(22,"button",16),t.ALo(23,"translate"),t._UZ(24,"button",17),t.ALo(25,"translate"),t.qZA()()}if(2&o){const n=e.ngIf,i=t.oxw();t.xp6(4),t.Q6J("innerHTML",t.lcZ(5,11,"landing.welcome"),t.oJD),t.xp6(2),t.Q6J("ngModel",n.data.game)("options",i.gameOptions),t.xp6(3),t.Q6J("ngIf",n.data.game===i.Game.Factorio),t.xp6(1),t.Q6J("label",t.lcZ(11,13,"landing.addAProduct")),t.xp6(2),t.Q6J("label",t.lcZ(13,15,"landing.addAProducer")),t.xp6(6),t.Q6J("ngIf",n.savedStates.length||i.BrowserUtility.routerState),t.xp6(1),t.Q6J("ngIf",n.savedStates.length),t.xp6(1),t.Q6J("ngIf",i.BrowserUtility.routerState),t.xp6(2),t.Q6J("label",t.lcZ(23,17,"landing.help")),t.xp6(2),t.Q6J("label",t.lcZ(25,19,"landing.skip"))}}class p{constructor(e,n,i){this.router=e,this.store=n,this.routerSvc=i,this.vm$=(0,h.a)([this.store.select(c.Zr.Gw),this.store.select(c.Zr.Ym),this.store.select(c.Zr.pY),this.store.select(c.uP.eD),this.store.select(c.uP.D0)]).pipe((0,x.U)(([s,l,r,K,k])=>({settings:s,modOptions:l,data:r,preferences:K,savedStates:k}))),this.gameInfo=g.dL,this.gameOptions=g.oy,this.Game=g.lA,this.BrowserUtility=C.R7}selectProduct(e){this.addProduct(e),this.router.navigate(["list"])}selectProducer(e){this.addProducer(e),this.router.navigate(["list"])}setState(e,n){const i=n.states[e];if(i){const s=this.routerSvc.getParams(i);this.router.navigate(["list"],{queryParams:s})}}setGame(e){this.setMod(g.dL[e].modId)}setMod(e){this.store.dispatch(new c.Zr.Lr(e))}addProduct(e){this.store.dispatch(new c.QI.OV(e))}addProducer(e){this.store.dispatch(new c.$_.OV(e))}}p.\u0275fac=function(e){return new(e||p)(t.Y36(u.F0),t.Y36(Z.yh),t.Y36(L.cw))},p.\u0275cmp=t.Xpm({type:p,selectors:[["lab-landing"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-center"],["src","assets/icons/icon-128x128.png","alt","FactorioLab","height","128","width","128"],[1,"mt-2",3,"innerHTML"],["styleClass","my-2 w-100",3,"ngModel","options","onChange"],["pTemplate","selectedItem"],["pTemplate","item"],["styleClass","mb-2 w-100",3,"filter","ngModel","options","onChange",4,"ngIf"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",3,"label","click"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"label","click"],[3,"selectId"],["addProductPicker",""],["addRecipePicker",""],["class","p-inputgroup",4,"ngIf"],["pButton","","pRipple","","type","button","class","mt-2","icon","fa-solid fa-clock-rotate-left",3,"label","click",4,"ngIf"],["pButton","","pRipple","","type","button","icon","fa-solid fa-question","routerLink","wizard","queryParamsHandling","preserve",1,"mt-2","p-button-help",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-forward","routerLink","list","queryParamsHandling","preserve",1,"mt-2","p-button-outlined",3,"label"],["class","d-flex align-items-center",4,"ngIf"],[1,"d-flex","align-items-center"],[1,"mx-1"],[1,"ms-3"],["styleClass","mb-2 w-100",3,"filter","ngModel","options","onChange"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"fa-solid","fa-file-import"],["styleClass","w-100",3,"placeholder","options","onChange"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"label","click"]],template:function(e,n){1&e&&(t.YNc(0,O,26,21,"p-card",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.vm$))},dependencies:[m.O5,u.rH,_.JJ,_.On,T.Hq,y.Z,A.jx,I.i,J.Lt,b.H,M.q,m.Ov,w.X$,P.y],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}"],changeDetection:0});const R=u.Bz.forChild([{path:"",component:p}]);class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[m.ez,R,v.o]})}}]);