import{a as W}from"./chunk-NGBOONVH.js";import{b as J,c as Q,d as X,e as Y}from"./chunk-WEHJU6Q2.js";import{a as te}from"./chunk-5XA3G3KD.js";import{a as Z,b as ee}from"./chunk-UNWOQWGB.js";import{a as z,b as A}from"./chunk-6JKMDWIG.js";import{e as N,f as O,h as q}from"./chunk-6QBBB6SO.js";import{Ab as _,Bb as s,Cb as $,Ec as D,He as h,Ib as P,La as i,Sb as p,Tb as c,Ub as T,Wa as w,Ya as f,_a as m,ab as V,cb as I,cc as y,db as C,eb as L,ed as F,fb as R,gb as S,hb as b,hf as H,ib as n,if as U,jb as a,kb as u,mf as K,na as M,ob as k,pb as B,pd as G,qb as r,ua as E,va as g,xa as j}from"./chunk-EXQK3WQQ.js";var ie=(t,l)=>l.id;function ne(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td")(5,"a",9),u(6,"button",10),p(7,"iconSmClass"),a()()()),t&2){let e=r();i(2),s(c(3,4,"data.category")),i(3),m("routerLink","/data/categories/"+e.category),i(),m("label",l.name)("icon",T(7,6,e.category,"category"))}}function ae(t,l){if(t&1&&(n(0,"div")(1,"a",9),u(2,"button",10),p(3,"iconSmClass"),a(),n(4,"span",11),_(5),a()()),t&2){let e=l.$implicit,o=r(2),d=r();i(),m("routerLink","/data/items/"+e),i(),m("label",d.data().itemEntities[e].name)("icon",c(3,4,e)),i(3),s(o.in[e])}}function oe(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td"),S(5,ae,6,6,"div",null,R),a()()),t&2){let e=r(2);i(2),s(c(3,1,"data.ingredients")),i(3),b(e.info().ingredientIds)}}function le(t,l){if(t&1&&(n(0,"div")(1,"a",9),u(2,"button",10),p(3,"iconSmClass"),a(),n(4,"span",11),_(5),a()()),t&2){let e=l.$implicit,o=r(2),d=r();i(),m("routerLink","/data/items/"+e),i(),m("label",d.data().itemEntities[e].name)("icon",c(3,4,e)),i(3),s(o.catalyst==null?null:o.catalyst[e])}}function de(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td"),S(5,le,6,6,"div",null,R),a()()),t&2){let e=r(2);i(2),s(c(3,1,"data.catalysts")),i(3),b(e.info().catalystIds)}}function pe(t,l){if(t&1&&(n(0,"div")(1,"a",9),u(2,"button",10),p(3,"iconSmClass"),a(),n(4,"span",11),_(5),p(6,"round"),a()()),t&2){let e=l.$implicit,o=r(2),d=r();i(),m("routerLink","/data/items/"+e),i(),m("label",d.data().itemEntities[e].name)("icon",c(3,4,e)),i(3),s(c(6,6,o.out[e]))}}function re(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td"),S(5,pe,7,8,"div",null,R),a()()),t&2){let e=r(2);i(2),s(c(3,1,"data.products")),i(3),b(e.info().productIds)}}function ce(t,l){if(t&1&&(n(0,"div")(1,"a",9),u(2,"button",10),p(3,"iconSmClass"),a()()),t&2){let e=l.$implicit,o=r(2);i(),m("routerLink","/data/machines/"+e),i(),m("label",o.data().itemEntities[e].name)("icon",c(3,3,e))}}function me(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td")(5,"a",9),u(6,"button",10),p(7,"iconSmClass"),a()()()),t&2){let e=r(),o=r();i(2),s(c(3,4,"data.unlockedBy")),i(3),m("routerLink","/data/technologies/"+e.unlockedBy),i(),m("label",o.data().itemEntities[e.unlockedBy].name)("icon",T(7,6,e.unlockedBy,"recipe"))}}function _e(t,l){t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td"),u(5,"p-checkbox",12),a()()),t&2&&(i(2),s(c(3,4,"data.mining")),i(3),m("ngModel",!0)("binary",!0)("disabled",!0))}function se(t,l){t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td"),u(5,"p-checkbox",12),a()()),t&2&&(i(2),s(c(3,4,"data.technology")),i(3),m("ngModel",!0)("binary",!0)("disabled",!0))}function Ce(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td")(5,"a",9),u(6,"button",10),p(7,"iconSmClass"),a()()()),t&2){let e=r(),o=r();i(2),s(c(3,4,"data.rocketPart")),i(3),m("routerLink","/data/items/"+e.part),i(),m("label",o.data().itemEntities[e.part].name)("icon",c(7,6,e.part))}}function ue(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td"),_(5),p(6,"usage"),a()()),t&2){let e=r();i(2),s(c(3,2,"data.energyConsumption")),i(3),s(c(6,4,e.usage))}}function xe(t,l){if(t&1&&(n(0,"a",9),u(1,"button",10),p(2,"iconSmClass"),a()),t&2){let e=l,o=r(3);m("routerLink","/data/machines/"+e),i(),m("label",o.data().itemEntities[e].name)("icon",c(2,3,e))}}function fe(t,l){if(t&1&&(u(0,"i"),p(1,"iconSmClass")),t&2){let e=r();I(c(1,2,e))}}function ve(t,l){if(t&1&&(n(0,"a",9),u(1,"button",10),p(2,"iconSmClass"),a()),t&2){let e=r(),o=r(5);m("routerLink","/data/modules/"+e),i(),m("label",o.data().itemEntities[e].name)("icon",c(2,3,e))}}function Se(t,l){t&1&&(n(0,"div"),f(1,fe,2,4,"i",14)(2,ve,3,5,"a",9),a()),t&2&&(i(),C(l==="module"?1:2))}function be(t,l){if(t&1&&f(0,Se,3,1,"div"),t&2){let e,o=l.$implicit;C((e=o.id)?0:-1,e)}}function he(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td"),S(5,be,1,1,null,null,ie),a()()),t&2){let e=r();i(2),s(c(3,1,"data.modules")),i(3),b(e.modules)}}function ye(t,l){if(t&1&&(n(0,"a",9),u(1,"button",10),p(2,"iconSmClass"),a()),t&2){let e=r().$implicit,o=r(4);m("routerLink","/data/beacons/"+e.id),i(),m("label",o.data().itemEntities[e.id].name)("icon",c(2,3,e.id))}}function Ee(t,l){if(t&1&&(u(0,"i"),p(1,"iconSmClass")),t&2){let e=r();I(c(1,2,e))}}function ge(t,l){if(t&1&&(n(0,"a",9),u(1,"button",10),p(2,"iconSmClass"),a()),t&2){let e=r(),o=r(6);m("routerLink","/data/modules/"+e),i(),m("label",o.data().itemEntities[e].name)("icon",c(2,3,e))}}function Re(t,l){t&1&&(n(0,"div"),f(1,Ee,2,4,"i",14)(2,ge,3,5,"a",9),a()),t&2&&(i(),C(l==="module"?1:2))}function Be(t,l){if(t&1&&f(0,Re,3,1,"div"),t&2){let e,o=l.$implicit;C((e=o.id)?0:-1,e)}}function Ie(t,l){if(t&1&&(n(0,"div"),f(1,ye,3,5,"a",9),n(2,"span",11),_(3),a()(),S(4,Be,1,1,null,null,ie)),t&2){let e=l.$implicit;i(),C(e.id?1:-1),i(2),s(e.count),i(),b(e.modules)}}function ke(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td"),S(5,Ie,6,2,null,null,L),a()()),t&2){let e=r();i(2),s(c(3,1,"data.beacons")),i(3),b(e.beacons)}}function Te(t,l){if(t&1&&(n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td"),_(5),a(),u(6,"td"),a()),t&2){let e=r();i(2),s(c(3,2,"data.overclock")),i(3),$("",e.overclock,"%")}}function Fe(t,l){if(t&1){let e=k();n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td")(5,"p-checkbox",13),B("onChange",function(){E(e);let d=r(2);return g(d.toggleRecipe())}),a()()(),n(6,"tr")(7,"th"),_(8),p(9,"translate"),a(),n(10,"td")(11,"p-checkbox",13),B("onChange",function(d){E(e);let x=r(2);return g(x.setRecipeChecked(x.id(),d.checked))}),a()()(),n(12,"tr")(13,"th"),_(14),p(15,"translate"),a(),n(16,"td"),f(17,xe,3,5,"a",9),a()(),f(18,he,7,3,"tr")(19,ke,7,3,"tr")(20,Te,7,4,"tr")}if(t&2){let e,o=l,d=r(2);i(2),s(c(3,11,"data.excluded")),i(3),m("ngModel",o.excluded)("binary",!0),i(3),s(c(9,13,"data.checked")),i(3),m("ngModel",o.checked)("binary",!0),i(3),s(c(15,15,"data.machine")),i(3),C((e=o.machineId)?17:-1,e),i(),C(o.modules!=null&&o.modules.length?18:-1),i(),C(d.data().game===d.Game.Factorio?19:-1),i(),C(d.data().game===d.Game.Satisfactory?20:-1)}}function Me(t,l){if(t&1){let e=k();n(0,"tr")(1,"th"),_(2),p(3,"translate"),a(),n(4,"td")(5,"lab-input-number",15),B("setValue",function(d){E(e);let x=r(2);return g(x.setRecipeCost(x.id(),d))}),a()()()}t&2&&(i(2),s(c(3,2,"data.cost")),i(3),m("value",l))}function je(t,l){if(t&1){let e=k();n(0,"table",1)(1,"tr")(2,"th",3)(3,"h3"),_(4),a()()(),n(5,"tr")(6,"td",3),u(7,"i",4),p(8,"iconClass"),a()(),f(9,ne,8,9,"tr"),n(10,"tr")(11,"th"),_(12),p(13,"translate"),a(),n(14,"td"),_(15),a()(),f(16,oe,7,3,"tr")(17,de,7,3,"tr")(18,re,7,3,"tr"),n(19,"tr")(20,"th"),_(21),p(22,"translate"),a(),n(23,"td"),S(24,ce,4,5,"div",null,R),a()(),f(26,me,8,9,"tr")(27,_e,6,6,"tr")(28,se,6,6,"tr")(29,Ce,8,8,"tr")(30,ue,7,6,"tr"),n(31,"tr")(32,"th",5)(33,"div",6),u(34,"button",7),n(35,"h3"),_(36),p(37,"translate"),a(),n(38,"button",8),B("click",function(){E(e);let d=r();return g(d.resetRecipe(d.id()))}),a()()()(),f(39,Fe,21,17)(40,Me,6,4,"tr"),a()}if(t&2){let e,o,d,x=l,v=r();i(4),s(x.name),i(3),I(T(8,20,v.id(),"recipe")),i(2),C((e=v.info().category)?9:-1,e),i(3),s(c(13,23,"data.time")),i(3),s(x.time),i(),C(v.info().ingredientIds.length?16:-1),i(),C(v.info().catalystIds.length?17:-1),i(),C(v.info().productIds.length?18:-1),i(3),s(c(22,25,"data.producers")),i(3),b(x.producers),i(2),C(x.unlockedBy?26:-1),i(),C(x.isMining?27:-1),i(),C(x.isTechnology?28:-1),i(),C(x.part?29:-1),i(),C(x.usage?30:-1),i(6),s(c(37,27,"data.recipeSettings")),i(2),V("invisible",!v.recipesStateRaw()[v.id()]),i(),C((o=v.recipeSettings())?39:-1,o),i(),C((d=(d=v.recipeR())==null?null:d.cost)?40:-1,d)}}function we(t,l){t&1&&(n(0,"div",2),_(1),p(2,"translate"),a()),t&2&&(i(),s(c(2,1,"data.notFound")))}var Ze=(()=>{class t extends te{recipesStateRaw=this.store.selectSignal(h.recipesState);recipesState=this.store.selectSignal(h.selectRecipesState);obj=y(()=>this.data().recipeEntities[this.id()]);breadcrumb=y(()=>[this.parent()??{},{label:this.obj()?.name}]);info=y(()=>{let e=this.id(),o=this.data(),d=o.recipeEntities[e];return{category:o.categoryEntities[F(d?.category,"")],ingredientIds:Object.keys(d?.in??{}),catalystIds:Object.keys(d?.catalyst??{}),productIds:Object.keys(d?.out??{})}});recipeSettings=y(()=>this.recipesState()[this.id()]);recipeR=y(()=>this.data().adjustedRecipe[this.id()]);Game=G;toggleRecipe(){let e=this.recipeSettings();if(e==null)return;let o=this.id(),d=!e.excluded,x=F(this.data().defaults?.excludedRecipeIds,[]).some(v=>v===o);this.setRecipeExcluded(o,d,x)}setRecipeExcluded(e,o,d){this.store.dispatch(h.setExcluded({id:e,value:o,def:d}))}setRecipeChecked(e,o){this.store.dispatch(h.setChecked({id:e,value:o}))}setRecipeCost(e,o){this.store.dispatch(h.setCost({id:e,value:o}))}resetRecipe(e){this.store.dispatch(h.resetRecipe({id:e}))}static \u0275fac=(()=>{let e;return function(d){return(e||(e=j(t)))(d||t)}})();static \u0275cmp=M({type:t,selectors:[["ng-component"]],standalone:!0,features:[w,P],decls:3,vars:3,consts:[[3,"home","model"],[1,"properties","mb-4"],[1,"my-5","p-error"],["colspan","2",1,"text-center"],[1,"lg"],["colspan","2"],[1,"d-flex","align-items-center","justify-content-between"],["pButton","","pRipple","","type","button","icon","fa-solid fa-rotate-right",1,"invisible","p-button-rounded"],["pButton","","pRipple","","type","button","icon","fa-solid fa-rotate-left",1,"p-button-rounded",3,"click"],["queryParamsHandling","preserve",3,"routerLink"],["pButton","","pRipple","","type","button",1,"p-button-text",3,"label","icon"],[1,"ms-3"],[3,"ngModel","binary","disabled"],[3,"onChange","ngModel","binary"],[3,"class"],[3,"setValue","value"]],template:function(o,d){if(o&1&&(u(0,"p-breadcrumb",0),f(1,je,41,29,"table",1)(2,we,3,3,"div",2)),o&2){let x;m("home",d.home())("model",d.breadcrumb()),i(),C((x=d.obj())?1:2,x)}},dependencies:[q,N,O,ee,Z,D,U,H,Y,X,z,A,W,J,K,Q],encapsulation:2,changeDetection:0})}return t})();export{Ze as RecipeComponent};
