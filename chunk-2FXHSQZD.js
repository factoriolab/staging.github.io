import{a as se}from"./chunk-5ZN4N3HE.js";import{a as Z,b as ee}from"./chunk-2B45NZ6W.js";import{a as X,b as Y,e as re}from"./chunk-73NC4NPZ.js";import{a as pe,b as le}from"./chunk-F2XPQGFO.js";import{b as J}from"./chunk-IHDGOMA4.js";import"./chunk-E47O3TS7.js";import"./chunk-C6F3H5LO.js";import{a as ne,b as oe}from"./chunk-7QSC7XRK.js";import{b as N,d as T,t as $}from"./chunk-IWVEIMGP.js";import{b as ae}from"./chunk-AWAUXTEN.js";import{f as te,g as ie}from"./chunk-VBSJDLTH.js";import{e as K,f as Q,h as W}from"./chunk-CAJWBQVR.js";import"./chunk-JKZCRNWW.js";import{B as H,n as j,y as D,z as F}from"./chunk-KFCU36XE.js";import{c as U}from"./chunk-3UCVTPN7.js";import{$ as u,Ad as k,Ba as h,Cd as L,Ea as c,Gc as I,Hd as z,Ia as y,Ja as C,Oa as r,Pa as s,Qa as f,S as v,T as M,Ua as x,Va as g,Wa as d,Wb as O,Zc as q,_,_c as G,db as w,eb as b,fb as S,fc as P,hc as R,ic as E,ma as B,mb as V,qa as o,rd as A,wb as p,xb as l}from"./chunk-SYAZAQ6V.js";import"./chunk-TWZW5B45.js";function de(t,m){if(t&1&&(r(0,"div",19),f(1,"i",20),p(2,"iconSmClass"),r(3,"span",21),b(4),p(5,"translate"),s()()),t&2){let e=m;o(),y(l(2,3,e.icon)),o(3),S(l(5,5,e.label))}}function ce(t,m){if(t&1&&h(0,de,6,7,"div",19),t&2){let e,i=d(2);C((e=i.gameInfo[i.data().game])?0:-1,e)}}function me(t,m){if(t&1&&(r(0,"div",19),f(1,"i"),p(2,"iconSmClass"),r(3,"span",21),b(4),p(5,"translate"),s()()),t&2){let e=m;o(),y(l(2,3,e.icon)),o(3),S(l(5,5,e.label))}}function _e(t,m){if(t&1&&h(0,me,6,7,"div",19),t&2){let e,i=m.$implicit,n=d(2);C((e=n.gameInfo[i.value])?0:-1,e)}}function ue(t,m){if(t&1){let e=x();r(0,"p-dropdown",22),g("onChange",function(n){_(e);let a=d(2);return u(a.setMod(n.value))}),s()}if(t&2){let e=d(2);c("filter",!0)("autofocusFilter",!e.contentSvc.isMobile())("ngModel",e.modId())("options",e.modOptions)}}function fe(t,m){t&1&&f(0,"p-divider")}function ge(t,m){if(t&1){let e=x();r(0,"span",14)(1,"span",23),f(2,"i",24),s(),r(3,"p-dropdown",25),p(4,"translate"),g("onChange",function(n){_(e);let a=d(2);return u(a.setState(a.states()[n.value]))}),s()()}if(t&2){let e=d(2);o(3),c("placeholder",l(4,2,"landing.loadSavedState"))("options",e.stateOptions())}}function ve(t,m){if(t&1){let e=x();r(0,"button",26),p(1,"translate"),g("click",function(){let n=_(e),a=d(2);return u(a.router.navigateByUrl(n))}),s()}t&2&&c("label",l(1,1,"landing.loadLastState"))}function Ce(t,m){if(t&1){let e=x();r(0,"p-card")(1,"div",3)(2,"div",4),f(3,"img",5),s(),f(4,"div",6),p(5,"translate"),r(6,"p-dropdown",7),g("onChange",function(n){_(e);let a=d();return u(a.setGame(n.value))}),h(7,ce,1,1,"ng-template",8)(8,_e,1,1,"ng-template",9),s(),h(9,ue,1,4,"p-dropdown",10),r(10,"button",11),p(11,"translate"),g("click",function(){_(e);let n=w(15),a=d();return u(n.clickOpen("item",a.itemIds()))}),s(),r(12,"button",12),p(13,"translate"),g("click",function(){_(e);let n=w(18),a=d();return u(n.clickOpen("recipe",a.recipeIds()))}),s(),r(14,"lab-picker",13,0),p(16,"translate"),g("selectId",function(n){_(e);let a=d();return u(a.selectItem(n))}),s(),r(17,"lab-picker",13,1),p(19,"translate"),g("selectId",function(n){_(e);let a=d();return u(a.selectRecipe(n))}),s(),h(20,fe,1,0,"p-divider")(21,ge,5,4,"span",14)(22,ve,2,3,"button",15),f(23,"p-divider")(24,"button",16),p(25,"translate"),f(26,"button",17),p(27,"translate"),r(28,"p-checkbox",18),p(29,"translate"),g("onChange",function(n){_(e);let a=d();return u(a.preferencesSvc.apply({bypassLanding:n.checked}))}),s()()()}if(t&2){let e,i=d();o(4),c("innerHTML",l(5,16,"landing.welcome"),B),o(2),c("ngModel",i.data().game)("options",i.gameOptions),o(3),C(i.data().game===i.Game.Factorio?9:-1),o(),c("label",l(11,18,"landing.addItems")),o(2),c("label",l(13,20,"landing.addMachines")),o(2),c("header",l(16,22,"landing.selectAnItem")),o(3),c("header",l(19,24,"landing.selectARecipe")),o(3),C(i.stateOptions().length||i.routerSvc.stored()?20:-1),o(),C(i.stateOptions().length?21:-1),o(),C((e=i.routerSvc.stored())?22:-1,e),o(2),c("label",l(25,26,"landing.help")),o(2),c("label",l(27,28,"landing.skip")),o(2),c("binary",!0)("label",l(29,30,"landing.bypass"))("ngModel",i.preferencesSvc.state().bypassLanding)}}function he(t,m){t&1&&f(0,"p-progressSpinner")}var it=(()=>{class t{constructor(){this.router=v(R),this.route=v(P),this.contentSvc=v(N),this.objectivesSvc=v($),this.preferencesSvc=v(A),this.recipesSvc=v(U),this.routerSvc=v(J),this.settingsSvc=v(z),this.modId=this.settingsSvc.modId,this.mod=this.settingsSvc.mod,this.data=this.settingsSvc.dataset,this.recipeIds=this.settingsSvc.availableRecipeIds,this.itemIds=this.recipesSvc.availableItemIds,this.states=this.settingsSvc.gameStates,this.stateOptions=this.settingsSvc.stateOptions,this.gameInfo=L,this.gameOptions=G,this.modOptions=se,this.Game=q}selectItem(e){this.objectivesSvc.create({targetId:e,value:I.one,unit:k.Items,type:T.Output}),this.router.navigate(["list"],{relativeTo:this.route,queryParamsHandling:"preserve"})}selectRecipe(e){this.objectivesSvc.create({targetId:e,value:I.one,unit:k.Machines,type:T.Output}),this.router.navigate(["list"],{relativeTo:this.route,queryParamsHandling:"preserve"})}setState(e){e&&this.router.navigate(["list"],{queryParams:this.routerSvc.toParams(e),relativeTo:this.route})}setGame(e){this.setMod(L[e].modId)}setMod(e){this.router.navigate([e])}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=M({type:t,selectors:[["lab-landing"]],standalone:!0,features:[V],decls:5,vars:4,consts:[["addItemPicker",""],["addRecipePicker",""],[1,"position-absolute","bottom-0","mb-3"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-center"],["src","factoriolab.webp","alt","FactorioLab","height","128","width","128"],[1,"mt-2",3,"innerHTML"],["styleClass","my-2 w-100",3,"onChange","ngModel","options"],["pTemplate","selectedItem"],["pTemplate","item"],["styleClass","mb-2 w-100",3,"filter","autofocusFilter","ngModel","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",3,"click","label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"click","label"],[3,"selectId","header"],[1,"p-inputgroup"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-question","routerLink","wizard","queryParamsHandling","preserve",1,"mt-2","p-button-help",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-forward","routerLink","list","queryParamsHandling","preserve",1,"mt-2","mb-3","p-button-outlined",3,"label"],[3,"onChange","binary","label","ngModel"],[1,"d-flex","align-items-center"],[1,"mx-1"],[1,"ms-3"],["styleClass","mb-2 w-100",3,"onChange","filter","autofocusFilter","ngModel","options"],[1,"p-inputgroup-addon"],[1,"fa-solid","fa-file-import"],["styleClass","w-100",3,"onChange","placeholder","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"click","label"]],template:function(i,n){i&1&&(h(0,Ce,30,32,"p-card")(1,he,1,0,"p-progressSpinner"),r(2,"span",2),b(3),p(4,"async"),s()),i&2&&(C(n.mod()!=null?0:1),o(3),S(l(4,2,n.contentSvc.version$)))},dependencies:[O,W,K,Q,E,F,D,j,Y,X,oe,ne,ee,Z,ie,te,le,pe,ae,re,H],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh}"],changeDetection:0})}}return t})();export{it as LandingComponent};
