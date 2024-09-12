import{a as re,b as le}from"./chunk-IQBSZXM4.js";import{a as ne,b as oe,e as ae}from"./chunk-AE374AAP.js";import{a as pe,b as se}from"./chunk-7NAB5OLN.js";import{d as Y}from"./chunk-BYLBKRJB.js";import"./chunk-6WI7BG3V.js";import"./chunk-VSHIBJHQ.js";import{d as te,e as ie}from"./chunk-5ANTRULD.js";import{a as X}from"./chunk-WDH2XTJH.js";import{b as Z}from"./chunk-J2DATKDK.js";import{f as Q,g as W}from"./chunk-MN2LFG6W.js";import{e as G,f as z,h as N}from"./chunk-BKO74FSD.js";import"./chunk-GBA3GAXD.js";import{B as ee,n as $,y as J,z as K}from"./chunk-BPW5L7DF.js";import{Aa as P,Ab as O,Bd as B,Dd as M,Ea as n,Kb as s,Lb as d,Pa as x,Pd as T,Sa as c,Sc as j,Wa as w,Xa as C,Xd as U,ab as r,bb as l,cb as g,da as b,fa as V,gb as h,hb as f,ib as p,ma as _,md as k,na as u,ne as I,oe as v,rb as L,sb as S,sd as F,tb as y,tc as R,td as H,vc as E,ve as q,wc as D,we as A}from"./chunk-ZWVAFSUD.js";import"./chunk-5KTCK5IS.js";function de(t,m){if(t&1&&(r(0,"div",19),g(1,"i",20),s(2,"iconSmClass"),r(3,"span",21),S(4),s(5,"translate"),l()()),t&2){let e=m;n(),w(d(2,3,e.icon)),n(3),y(d(5,5,e.label))}}function ce(t,m){if(t&1&&x(0,de,6,7,"div",19),t&2){let e,o=p(2);C((e=o.gameInfo[o.data().game])?0:-1,e)}}function me(t,m){if(t&1&&(r(0,"div",19),g(1,"i"),s(2,"iconSmClass"),r(3,"span",21),S(4),s(5,"translate"),l()()),t&2){let e=m;n(),w(d(2,3,e.icon)),n(3),y(d(5,5,e.label))}}function _e(t,m){if(t&1&&x(0,me,6,7,"div",19),t&2){let e,o=m.$implicit,i=p(2);C((e=i.gameInfo[o.value])?0:-1,e)}}function ue(t,m){if(t&1){let e=h();r(0,"p-dropdown",22),f("onChange",function(i){_(e);let a=p(2);return u(a.setMod(i.value))}),l()}if(t&2){let e=p(2);c("filter",!0)("autofocusFilter",!e.contentSvc.isMobile())("ngModel",e.settings().modId)("options",e.modOptions())}}function ge(t,m){t&1&&g(0,"p-divider")}function fe(t,m){if(t&1){let e=h();r(0,"span",14)(1,"span",23),g(2,"i",24),l(),r(3,"p-dropdown",25),s(4,"translate"),f("onChange",function(i){_(e);let a=p(2);return u(a.setState(a.preferences().states[a.data().game][i.value]))}),l()()}if(t&2){let e=p(2);n(3),c("placeholder",d(4,2,"landing.loadSavedState"))("options",e.savedStates())}}function Ce(t,m){if(t&1){let e=h();r(0,"button",26),s(1,"translate"),f("click",function(){_(e);let i=p(2);return u(i.router.navigateByUrl(i.BrowserUtility.routerState))}),l()}t&2&&c("label",d(1,1,"landing.loadLastState"))}function ve(t,m){if(t&1){let e=h();r(0,"p-card")(1,"div",3)(2,"div",4),g(3,"img",5),l(),g(4,"div",6),s(5,"translate"),r(6,"p-dropdown",7),f("onChange",function(i){_(e);let a=p();return u(a.setGame(i.value))}),x(7,ce,1,1,"ng-template",8)(8,_e,1,1,"ng-template",9),l(),x(9,ue,1,4,"p-dropdown",10),r(10,"button",11),s(11,"translate"),f("click",function(){_(e);let i=L(15),a=p();return u(i.clickOpen("item",a.itemIds()))}),l(),r(12,"button",12),s(13,"translate"),f("click",function(){_(e);let i=L(18),a=p();return u(i.clickOpen("recipe",a.recipeIds()))}),l(),r(14,"lab-picker",13,0),s(16,"translate"),f("selectId",function(i){_(e);let a=p();return u(a.selectItem(i))}),l(),r(17,"lab-picker",13,1),s(19,"translate"),f("selectId",function(i){_(e);let a=p();return u(a.selectRecipe(i))}),l(),x(20,ge,1,0,"p-divider")(21,fe,5,4,"span",14)(22,Ce,2,3,"button",15),g(23,"p-divider")(24,"button",16),s(25,"translate"),g(26,"button",17),s(27,"translate"),r(28,"p-checkbox",18),s(29,"translate"),f("onChange",function(i){_(e);let a=p();return u(a.setBypassLanding(i.checked))}),l()()()}if(t&2){let e=p();n(4),c("innerHTML",d(5,16,"landing.welcome"),P),n(2),c("ngModel",e.data().game)("options",e.gameOptions),n(3),C(e.data().game===e.Game.Factorio?9:-1),n(),c("label",d(11,18,"landing.addItems")),n(2),c("label",d(13,20,"landing.addMachines")),n(2),c("header",d(16,22,"landing.selectAnItem")),n(3),c("header",d(19,24,"landing.selectARecipe")),n(3),C(e.savedStates().length||e.BrowserUtility.routerState?20:-1),n(),C(e.savedStates().length?21:-1),n(),C(e.BrowserUtility.routerState?22:-1),n(2),c("label",d(25,26,"landing.help")),n(2),c("label",d(27,28,"landing.skip")),n(2),c("binary",!0)("label",d(29,30,"landing.bypass"))("ngModel",e.preferences().bypassLanding)}}function xe(t,m){t&1&&g(0,"p-progressSpinner")}var Je=(()=>{class t{router=b(E);contentSvc=b(X);store=b(j);routerSvc=b(Y);route=b(R);itemIds=this.store.selectSignal(q.selectAvailableItems);settings=this.store.selectSignal(v.selectSettings);modOptions=this.store.selectSignal(v.selectModOptions);data=this.store.selectSignal(v.selectDataset);mod=this.store.selectSignal(v.selectMod);recipeIds=this.store.selectSignal(v.selectAvailableRecipes);savedStates=this.store.selectSignal(v.selectSavedStates);preferences=this.store.selectSignal(I.preferencesState);gameInfo=T;gameOptions=H;Game=F;BrowserUtility=U;selectItem(e){this.createObjective({id:"0",targetId:e,value:k.one,unit:M.Items,type:B.Output}),this.router.navigate(["list"],{relativeTo:this.route,queryParamsHandling:"preserve"})}selectRecipe(e){this.createObjective({id:"0",targetId:e,value:k.one,unit:M.Machines,type:B.Output}),this.router.navigate(["list"],{relativeTo:this.route,queryParamsHandling:"preserve"})}setState(e){e&&this.router.navigate(["list"],{queryParams:this.routerSvc.toParams(e),relativeTo:this.route})}setGame(e){this.setMod(T[e].modId)}setMod(e){this.store.dispatch(v.setMod({modId:e}))}createObjective(e){this.store.dispatch(A.create({objective:e}))}setBypassLanding(e){this.store.dispatch(I.setBypassLanding({bypassLanding:e}))}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],standalone:!0,features:[O],decls:4,vars:2,consts:[["addItemPicker",""],["addRecipePicker",""],[1,"position-absolute","bottom-0","mb-3"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-center"],["src","factoriolab.webp","alt","FactorioLab","height","128","width","128"],[1,"mt-2",3,"innerHTML"],["styleClass","my-2 w-100",3,"onChange","ngModel","options"],["pTemplate","selectedItem"],["pTemplate","item"],["styleClass","mb-2 w-100",3,"filter","autofocusFilter","ngModel","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",3,"click","label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"click","label"],[3,"selectId","header"],[1,"p-inputgroup"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-question","routerLink","wizard","queryParamsHandling","preserve",1,"mt-2","p-button-help",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-forward","routerLink","list","queryParamsHandling","preserve",1,"mt-2","mb-3","p-button-outlined",3,"label"],[3,"onChange","binary","label","ngModel"],[1,"d-flex","align-items-center"],[1,"mx-1"],[1,"ms-3"],["styleClass","mb-2 w-100",3,"onChange","filter","autofocusFilter","ngModel","options"],[1,"p-inputgroup-addon"],[1,"fa-solid","fa-file-import"],["styleClass","w-100",3,"onChange","placeholder","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"click","label"]],template:function(o,i){o&1&&(x(0,ve,30,32,"p-card")(1,xe,1,0,"p-progressSpinner"),r(2,"span",2),S(3),l()),o&2&&(C(i.mod()!=null?0:1),n(3),y(i.contentSvc.version))},dependencies:[N,G,z,D,K,J,$,oe,ne,ie,te,le,re,W,Q,se,pe,Z,ae,ee],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh}"],changeDetection:0})}return t})();export{Je as LandingComponent};
