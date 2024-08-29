import{a as oe,b as ae}from"./chunk-SD2ALYJ5.js";import{a as te,b as ie,e as ne}from"./chunk-S47TSOFV.js";import{a as re,b as le}from"./chunk-CWIH225I.js";import{c as W}from"./chunk-EM3RBK5K.js";import"./chunk-ZQ6GK7D3.js";import{a as Q}from"./chunk-LDA2N73X.js";import"./chunk-H63ATTN4.js";import{d as Z,e as ee}from"./chunk-WEHJU6Q2.js";import{b as X}from"./chunk-6JKMDWIG.js";import{f as J,g as K}from"./chunk-QMQCJ7D6.js";import{e as H,f as A,h as q}from"./chunk-6QBBB6SO.js";import"./chunk-Q2HLAAIR.js";import{Ab as S,Ad as B,Bb as y,Dc as R,Ec as P,Ha as V,He as U,Ib as O,Ie as G,La as o,Sb as s,Tb as d,Ya as b,Ye as z,_a as c,_c as E,_d as M,cb as L,db as C,ee as F,hf as N,ib as r,if as $,j as w,jb as l,kb as u,la as x,mf as Y,na as T,ob as h,pb as f,pd as j,qb as p,qd as D,ua as _,va as g,ve as I,we as v,zb as k}from"./chunk-EXQK3WQQ.js";function pe(t,m){if(t&1&&(r(0,"div",19),u(1,"i",20),s(2,"iconSmClass"),r(3,"span",21),S(4),s(5,"translate"),l()()),t&2){let e=m;o(),L(d(2,3,e.icon)),o(3),y(d(5,5,e.label))}}function se(t,m){if(t&1&&b(0,pe,6,7,"div",19),t&2){let e,n=p(2);C((e=n.gameInfo[n.data().game])?0:-1,e)}}function de(t,m){if(t&1&&(r(0,"div",19),u(1,"i"),s(2,"iconSmClass"),r(3,"span",21),S(4),s(5,"translate"),l()()),t&2){let e=m;o(),L(d(2,3,e.icon)),o(3),y(d(5,5,e.label))}}function ce(t,m){if(t&1&&b(0,de,6,7,"div",19),t&2){let e,n=m.$implicit,i=p(2);C((e=i.gameInfo[n.value])?0:-1,e)}}function me(t,m){if(t&1){let e=h();r(0,"p-dropdown",22),f("onChange",function(i){_(e);let a=p(2);return g(a.setMod(i.value))}),l()}if(t&2){let e=p(2);c("filter",!0)("autofocusFilter",!e.contentSvc.isMobile())("ngModel",e.settings().modId)("options",e.modOptions())}}function _e(t,m){t&1&&u(0,"p-divider")}function ge(t,m){if(t&1){let e=h();r(0,"span",14)(1,"span",23),u(2,"i",24),l(),r(3,"p-dropdown",25),s(4,"translate"),f("onChange",function(i){_(e);let a=p(2);return g(a.setState(a.preferences().states[a.data().game][i.value]))}),l()()}if(t&2){let e=p(2);o(3),c("placeholder",d(4,2,"landing.loadSavedState"))("options",e.savedStates())}}function ue(t,m){if(t&1){let e=h();r(0,"button",26),s(1,"translate"),f("click",function(){_(e);let i=p(2);return g(i.router.navigateByUrl(i.BrowserUtility.routerState))}),l()}t&2&&c("label",d(1,1,"landing.loadLastState"))}function fe(t,m){if(t&1){let e=h();r(0,"p-card")(1,"div",3)(2,"div",4),u(3,"img",5),l(),u(4,"div",6),s(5,"translate"),r(6,"p-dropdown",7),f("onChange",function(i){_(e);let a=p();return g(a.setGame(i.value))}),b(7,se,1,1,"ng-template",8)(8,ce,1,1,"ng-template",9),l(),b(9,me,1,4,"p-dropdown",10),r(10,"button",11),s(11,"translate"),f("click",function(){_(e);let i=k(15),a=p();return g(i.clickOpen("item",a.itemIds()))}),l(),r(12,"button",12),s(13,"translate"),f("click",function(){_(e);let i=k(18),a=p();return g(i.clickOpen("recipe",a.recipeIds()))}),l(),r(14,"lab-picker",13,0),s(16,"translate"),f("selectId",function(i){_(e);let a=p();return g(a.selectItem(i))}),l(),r(17,"lab-picker",13,1),s(19,"translate"),f("selectId",function(i){_(e);let a=p();return g(a.selectRecipe(i))}),l(),b(20,_e,1,0,"p-divider")(21,ge,5,4,"span",14)(22,ue,2,3,"button",15),u(23,"p-divider")(24,"button",16),s(25,"translate"),u(26,"button",17),s(27,"translate"),r(28,"p-checkbox",18),s(29,"translate"),f("onChange",function(i){_(e);let a=p();return g(a.setBypassLanding(i.checked))}),l()()()}if(t&2){let e=p();o(4),c("innerHTML",d(5,16,"landing.welcome"),V),o(2),c("ngModel",e.data().game)("options",e.gameOptions),o(3),C(e.data().game===e.Game.Factorio?9:-1),o(),c("label",d(11,18,"landing.addItems")),o(2),c("label",d(13,20,"landing.addMachines")),o(2),c("header",d(16,22,"landing.selectAnItem")),o(3),c("header",d(19,24,"landing.selectARecipe")),o(3),C(e.savedStates().length||e.BrowserUtility.routerState?20:-1),o(),C(e.savedStates().length?21:-1),o(),C(e.BrowserUtility.routerState?22:-1),o(2),c("label",d(25,26,"landing.help")),o(2),c("label",d(27,28,"landing.skip")),o(2),c("binary",!0)("label",d(29,30,"landing.bypass"))("ngModel",e.preferences().bypassLanding)}}function Ce(t,m){t&1&&u(0,"p-progressSpinner")}var Ne=(()=>{class t{router=x(R);contentSvc=x(Q);store=x(E);routerSvc=x(W);itemIds=this.store.selectSignal(U.selectAvailableItems);settings=this.store.selectSignal(v.selectSettings);modOptions=this.store.selectSignal(v.selectModOptions);data=this.store.selectSignal(v.selectDataset);mod=this.store.selectSignal(v.selectMod);recipeIds=this.store.selectSignal(v.selectAvailableRecipes);savedStates=this.store.selectSignal(v.selectSavedStates);preferences=this.store.selectSignal(I.preferencesState);gameInfo=M;gameOptions=D;Game=j;BrowserUtility=F;selectItem(e){return w(this,null,function*(){yield this.router.navigate(["list"]),this.addItemObjective(e)})}selectRecipe(e){return w(this,null,function*(){yield this.router.navigate(["list"]),this.addRecipeObjective(e)})}setState(e){if(e){let n=this.routerSvc.getParams(e);this.router.navigate(["list"],{queryParams:n})}}setGame(e){this.setMod(M[e].modId)}addItemObjective(e){this.addObjective({targetId:e,unit:B.Items})}addRecipeObjective(e){this.addObjective({targetId:e,unit:B.Machines})}setMod(e){this.store.dispatch(v.setMod({modId:e}))}addObjective(e){this.store.dispatch(G.add({objective:e}))}setBypassLanding(e){this.store.dispatch(I.setBypassLanding({bypassLanding:e}))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=T({type:t,selectors:[["ng-component"]],standalone:!0,features:[O],decls:4,vars:2,consts:[["addItemPicker",""],["addRecipePicker",""],[1,"position-absolute","bottom-0","mb-3"],[1,"d-flex","flex-column"],[1,"d-flex","justify-content-center"],["src","factoriolab.webp","alt","FactorioLab","height","128","width","128"],[1,"mt-2",3,"innerHTML"],["styleClass","my-2 w-100",3,"onChange","ngModel","options"],["pTemplate","selectedItem"],["pTemplate","item"],["styleClass","mb-2 w-100",3,"filter","autofocusFilter","ngModel","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",3,"click","label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"click","label"],[3,"selectId","header"],[1,"p-inputgroup"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-question","routerLink","wizard","queryParamsHandling","preserve",1,"mt-2","p-button-help",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-forward","routerLink","list","queryParamsHandling","preserve",1,"mt-2","mb-3","p-button-outlined",3,"label"],[3,"onChange","binary","label","ngModel"],[1,"d-flex","align-items-center"],[1,"mx-1"],[1,"ms-3"],["styleClass","mb-2 w-100",3,"onChange","filter","autofocusFilter","ngModel","options"],[1,"p-inputgroup-addon"],[1,"fa-solid","fa-file-import"],["styleClass","w-100",3,"onChange","placeholder","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-clock-rotate-left",1,"mt-2",3,"click","label"]],template:function(n,i){n&1&&(b(0,fe,30,32,"p-card")(1,Ce,1,0,"p-progressSpinner"),r(2,"span",2),S(3),l()),n&2&&(C(i.mod()!=null?0:1),o(3),y(i.contentSvc.version))},dependencies:[q,H,A,P,$,N,z,ie,te,ee,Z,ae,oe,K,J,le,re,X,ne,Y],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh}"],changeDetection:0})}return t})();export{Ne as LandingComponent};
