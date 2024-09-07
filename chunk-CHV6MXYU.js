import{a as j}from"./chunk-XS4IH3VF.js";import{a as Y}from"./chunk-VDB4RCCE.js";import{b as Q,c as X,d as Z,e as ee}from"./chunk-34433EAF.js";import{a as ne}from"./chunk-RMH3OTOA.js";import{a as te,b as ie}from"./chunk-ZMHNXSP7.js";import{a as J,b as K}from"./chunk-TGPVF5GE.js";import{e as q,f as H,h as U}from"./chunk-4F3QIZGB.js";import{B as W,y as z,z as A}from"./chunk-2ZY57USU.js";import{$a as S,Ab as G,Da as i,Kb as p,Lb as c,Mb as T,Oa as L,Qa as f,Sa as m,Ua as $,Wa as B,Wb as b,Xa as C,Ya as P,Yc as M,Za as E,_a as h,ab as n,bb as a,cb as u,fa as w,gb as k,hb as R,ib as r,jd as O,ma as y,na as g,oe as F,pa as V,sb as s,tb as _,ub as D,ve as I,wc as N}from"./chunk-4OWSU2QL.js";import"./chunk-TWZW5B45.js";var ae=(t,o)=>o.id;function oe(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td")(5,"a",9),u(6,"button",10),p(7,"iconSmClass"),a()()()),t&2){let e=r();i(2),_(c(3,4,"data.category")),i(3),m("routerLink","/data/categories/"+e.category),i(),m("label",o.name)("icon",T(7,6,e.category,"category"))}}function le(t,o){if(t&1&&(n(0,"div")(1,"a",9),u(2,"button",10),p(3,"iconSmClass"),a(),n(4,"span",11),s(5),a()()),t&2){let e=o.$implicit,l=r(2),d=r();i(),m("routerLink","/data/items/"+e),i(),m("label",d.data().itemEntities[e].name)("icon",c(3,4,e)),i(3),_(l.in[e])}}function de(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td"),h(5,le,6,6,"div",null,E),a()()),t&2){let e=r(2);i(2),_(c(3,1,"data.ingredients")),i(3),S(e.info().ingredientIds)}}function pe(t,o){if(t&1&&(n(0,"div")(1,"a",9),u(2,"button",10),p(3,"iconSmClass"),a(),n(4,"span",11),s(5),a()()),t&2){let e=o.$implicit,l=r(2),d=r();i(),m("routerLink","/data/items/"+e),i(),m("label",d.data().itemEntities[e].name)("icon",c(3,4,e)),i(3),_(l.catalyst==null?null:l.catalyst[e])}}function re(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td"),h(5,pe,6,6,"div",null,E),a()()),t&2){let e=r(2);i(2),_(c(3,1,"data.catalysts")),i(3),S(e.info().catalystIds)}}function ce(t,o){if(t&1&&(n(0,"div")(1,"a",9),u(2,"button",10),p(3,"iconSmClass"),a(),n(4,"span",11),s(5),p(6,"round"),a()()),t&2){let e=o.$implicit,l=r(2),d=r();i(),m("routerLink","/data/items/"+e),i(),m("label",d.data().itemEntities[e].name)("icon",c(3,4,e)),i(3),_(c(6,6,l.out[e]))}}function me(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td"),h(5,ce,7,8,"div",null,E),a()()),t&2){let e=r(2);i(2),_(c(3,1,"data.products")),i(3),S(e.info().productIds)}}function se(t,o){if(t&1&&(n(0,"div")(1,"a",9),u(2,"button",10),p(3,"iconSmClass"),a()()),t&2){let e=o.$implicit,l=r(2);i(),m("routerLink","/data/machines/"+e),i(),m("label",l.data().itemEntities[e].name)("icon",c(3,3,e))}}function _e(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td")(5,"a",9),u(6,"button",10),p(7,"iconSmClass"),a()()()),t&2){let e=r(),l=r();i(2),_(c(3,4,"data.unlockedBy")),i(3),m("routerLink","/data/technologies/"+e.unlockedBy),i(),m("label",l.data().itemEntities[e.unlockedBy].name)("icon",T(7,6,e.unlockedBy,"recipe"))}}function Ce(t,o){t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td"),u(5,"p-checkbox",12),a()()),t&2&&(i(2),_(c(3,4,"data.mining")),i(3),m("ngModel",!0)("binary",!0)("disabled",!0))}function ue(t,o){t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td"),u(5,"p-checkbox",12),a()()),t&2&&(i(2),_(c(3,4,"data.technology")),i(3),m("ngModel",!0)("binary",!0)("disabled",!0))}function xe(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td")(5,"a",9),u(6,"button",10),p(7,"iconSmClass"),a()()()),t&2){let e=r(),l=r();i(2),_(c(3,4,"data.rocketPart")),i(3),m("routerLink","/data/items/"+e.part),i(),m("label",l.data().itemEntities[e.part].name)("icon",c(7,6,e.part))}}function fe(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td"),s(5),p(6,"usage"),a()()),t&2){let e=r();i(2),_(c(3,2,"data.energyConsumption")),i(3),_(c(6,4,e.usage))}}function ve(t,o){if(t&1&&(n(0,"a",9),u(1,"button",10),p(2,"iconSmClass"),a()),t&2){let e=o,l=r(3);m("routerLink","/data/machines/"+e),i(),m("label",l.data().itemEntities[e].name)("icon",c(2,3,e))}}function he(t,o){if(t&1&&(u(0,"i"),p(1,"iconSmClass")),t&2){let e=r();B(c(1,2,e))}}function Se(t,o){if(t&1&&(n(0,"a",9),u(1,"button",10),p(2,"iconSmClass"),a()),t&2){let e=r(),l=r(5);m("routerLink","/data/modules/"+e),i(),m("label",l.data().itemEntities[e].name)("icon",c(2,3,e))}}function be(t,o){t&1&&(n(0,"div"),f(1,he,2,4,"i",14)(2,Se,3,5,"a",9),a()),t&2&&(i(),C(o==="module"?1:2))}function ye(t,o){if(t&1&&f(0,be,3,1,"div"),t&2){let e,l=o.$implicit;C((e=l.id)?0:-1,e)}}function ge(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td"),h(5,ye,1,1,null,null,ae),a()()),t&2){let e=r();i(2),_(c(3,1,"data.modules")),i(3),S(e.modules)}}function Ee(t,o){if(t&1&&(n(0,"a",9),u(1,"button",10),p(2,"iconSmClass"),a()),t&2){let e=r().$implicit,l=r(4);m("routerLink","/data/beacons/"+e.id),i(),m("label",l.data().itemEntities[e.id].name)("icon",c(2,3,e.id))}}function Re(t,o){if(t&1&&(u(0,"i"),p(1,"iconSmClass")),t&2){let e=r();B(c(1,2,e))}}function Ie(t,o){if(t&1&&(n(0,"a",9),u(1,"button",10),p(2,"iconSmClass"),a()),t&2){let e=r(),l=r(6);m("routerLink","/data/modules/"+e),i(),m("label",l.data().itemEntities[e].name)("icon",c(2,3,e))}}function Be(t,o){t&1&&(n(0,"div"),f(1,Re,2,4,"i",14)(2,Ie,3,5,"a",9),a()),t&2&&(i(),C(o==="module"?1:2))}function ke(t,o){if(t&1&&f(0,Be,3,1,"div"),t&2){let e,l=o.$implicit;C((e=l.id)?0:-1,e)}}function Te(t,o){if(t&1&&(n(0,"div"),f(1,Ee,3,5,"a",9),n(2,"span",11),s(3),a()(),h(4,ke,1,1,null,null,ae)),t&2){let e=o.$implicit;i(),C(e.id?1:-1),i(2),_(e.count),i(),S(e.modules)}}function Fe(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td"),h(5,Te,6,2,null,null,P),a()()),t&2){let e=r();i(2),_(c(3,1,"data.beacons")),i(3),S(e.beacons)}}function Me(t,o){if(t&1&&(n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td"),s(5),a(),u(6,"td"),a()),t&2){let e=r();i(2),_(c(3,2,"data.overclock")),i(3),D("",e.overclock,"%")}}function je(t,o){if(t&1){let e=k();n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td")(5,"p-checkbox",13),R("onChange",function(d){y(e);let x=r(2);return g(x.changeExcluded(d.checked))}),a()()(),n(6,"tr")(7,"th"),s(8),p(9,"translate"),a(),n(10,"td")(11,"p-checkbox",13),R("onChange",function(d){y(e);let x=r(2);return g(x.changeChecked(d.checked))}),a()()(),n(12,"tr")(13,"th"),s(14),p(15,"translate"),a(),n(16,"td"),f(17,ve,3,5,"a",9),a()(),f(18,ge,7,3,"tr")(19,Fe,7,3,"tr")(20,Me,7,4,"tr")}if(t&2){let e,l=o,d=r(2);i(2),_(c(3,11,"data.excluded")),i(3),m("ngModel",d.settings().excludedRecipeIds.has(d.id()))("binary",!0),i(3),_(c(9,13,"data.checked")),i(3),m("ngModel",d.settings().checkedRecipeIds.has(d.id()))("binary",!0),i(3),_(c(15,15,"data.machine")),i(3),C((e=l.machineId)?17:-1,e),i(),C(l.modules!=null&&l.modules.length?18:-1),i(),C(d.data().game===d.Game.Factorio?19:-1),i(),C(d.data().game===d.Game.Satisfactory?20:-1)}}function we(t,o){if(t&1){let e=k();n(0,"tr")(1,"th"),s(2),p(3,"translate"),a(),n(4,"td")(5,"lab-input-number",15),R("setValue",function(d){y(e);let x=r(2);return g(x.setRecipeCost(x.id(),d))}),a()()()}t&2&&(i(2),_(c(3,2,"data.cost")),i(3),m("value",o))}function Ve(t,o){if(t&1){let e=k();n(0,"table",1)(1,"tr")(2,"th",3)(3,"h3"),s(4),a()()(),n(5,"tr")(6,"td",3),u(7,"i",4),p(8,"iconClass"),a()(),f(9,oe,8,9,"tr"),n(10,"tr")(11,"th"),s(12),p(13,"translate"),a(),n(14,"td"),s(15),a()(),f(16,de,7,3,"tr")(17,re,7,3,"tr")(18,me,7,3,"tr"),n(19,"tr")(20,"th"),s(21),p(22,"translate"),a(),n(23,"td"),h(24,se,4,5,"div",null,E),a()(),f(26,_e,8,9,"tr")(27,Ce,6,6,"tr")(28,ue,6,6,"tr")(29,xe,8,8,"tr")(30,fe,7,6,"tr"),n(31,"tr")(32,"th",5)(33,"div",6),u(34,"button",7),n(35,"h3"),s(36),p(37,"translate"),a(),n(38,"button",8),R("click",function(){y(e);let d=r();return g(d.resetRecipe(d.id()))}),a()()()(),f(39,je,21,17)(40,we,6,4,"tr"),a()}if(t&2){let e,l,d,x=o,v=r();i(4),_(x.name),i(3),B(T(8,20,v.id(),"recipe")),i(2),C((e=v.info().category)?9:-1,e),i(3),_(c(13,23,"data.time")),i(3),_(x.time),i(),C(v.info().ingredientIds.length?16:-1),i(),C(v.info().catalystIds.length?17:-1),i(),C(v.info().productIds.length?18:-1),i(3),_(c(22,25,"data.producers")),i(3),S(x.producers),i(2),C(x.unlockedBy?26:-1),i(),C(x.isMining?27:-1),i(),C(x.isTechnology?28:-1),i(),C(x.part?29:-1),i(),C(x.usage?30:-1),i(6),_(c(37,27,"data.recipeSettings")),i(2),$("invisible",!v.recipesStateRaw()[v.id()]),i(),C((l=v.recipeSettings())?39:-1,l),i(),C((d=(d=v.recipeR())==null?null:d.cost)?40:-1,d)}}function Le(t,o){t&1&&(n(0,"div",2),s(1),p(2,"translate"),a()),t&2&&(i(),_(c(2,1,"data.notFound")))}var tt=(()=>{class t extends ne{recipesStateRaw=this.store.selectSignal(I.recipesState);recipesState=this.store.selectSignal(I.selectRecipesState);settings=this.store.selectSignal(F.selectSettings);obj=b(()=>this.data().recipeEntities[this.id()]);breadcrumb=b(()=>[this.parent()??{},{label:this.obj()?.name}]);info=b(()=>{let e=this.id(),l=this.data(),d=l.recipeEntities[e];return{category:l.categoryEntities[M(d?.category,"")],ingredientIds:Object.keys(d?.in??{}),catalystIds:Object.keys(d?.catalyst??{}),productIds:Object.keys(d?.out??{})}});recipeSettings=b(()=>this.recipesState()[this.id()]);recipeR=b(()=>this.data().adjustedRecipe[this.id()]);Game=O;changeExcluded(e){this.setExcludedRecipes(j(this.id(),e,this.settings().excludedRecipeIds),new Set(M(this.data().defaults?.excludedRecipeIds,[])))}changeChecked(e){this.setCheckedRecipes(j(this.id(),e,this.settings().checkedRecipeIds))}setExcludedRecipes(e,l){this.store.dispatch(F.setExcludedRecipes({value:e,def:l}))}setCheckedRecipes(e){this.store.dispatch(F.setCheckedRecipes({checkedRecipeIds:e}))}setRecipeCost(e,l){this.store.dispatch(I.setCost({id:e,value:l}))}resetRecipe(e){this.store.dispatch(I.resetRecipe({id:e}))}static \u0275fac=(()=>{let e;return function(d){return(e||(e=V(t)))(d||t)}})();static \u0275cmp=w({type:t,selectors:[["ng-component"]],standalone:!0,features:[L,G],decls:3,vars:3,consts:[[3,"home","model"],[1,"properties","mb-4"],[1,"my-5","p-error"],["colspan","2",1,"text-center"],[1,"lg"],["colspan","2"],[1,"d-flex","align-items-center","justify-content-between"],["pButton","","pRipple","","type","button","icon","fa-solid fa-rotate-right",1,"invisible","p-button-rounded"],["pButton","","pRipple","","type","button","icon","fa-solid fa-rotate-left",1,"p-button-rounded",3,"click"],["queryParamsHandling","preserve",3,"routerLink"],["pButton","","pRipple","","type","button",1,"p-button-text",3,"label","icon"],[1,"ms-3"],[3,"ngModel","binary","disabled"],[3,"onChange","ngModel","binary"],[3,"class"],[3,"setValue","value"]],template:function(l,d){if(l&1&&(u(0,"p-breadcrumb",0),f(1,Ve,41,29,"table",1)(2,Le,3,3,"div",2)),l&2){let x;m("home",d.home())("model",d.breadcrumb()),i(),C((x=d.obj())?1:2,x)}},dependencies:[U,q,H,ie,te,N,A,z,ee,Z,J,K,Y,Q,W,X],encapsulation:2,changeDetection:0})}return t})();export{tt as RecipeComponent};
