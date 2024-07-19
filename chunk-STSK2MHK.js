import{a as ee}from"./chunk-E2WODPJJ.js";import{$ as w,$d as z,Aa as _,Ba as V,Da as B,Db as D,Ea as u,Fa as L,Ga as R,Ha as S,Hd as b,Ia as h,Ja as n,Ka as a,Ke as Z,La as x,Na as k,Oa as I,Pa as r,Sb as A,Ud as H,Vc as N,Wa as s,Xa as C,Ya as $,_d as U,cb as P,ea as g,fa as E,ga as j,gd as O,hd as q,jb as d,kb as c,kc as F,lb as T,le as J,ne as K,oe as Q,qa as i,se as W,tb as y,te as X,wa as M,ya as v,zc as G,ze as Y}from"./chunk-KT22BTYN.js";var te=(e,o)=>o.id;function ne(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td")(5,"a",9),x(6,"button",10),d(7,"iconSmClass"),a()()()),e&2){let t=r();i(2),C(c(3,4,"data.category")),i(3),_("routerLink","/data/categories/"+t.category),i(),_("label",o.name)("icon",T(7,6,t.category,"category"))}}function ae(e,o){if(e&1&&(n(0,"div")(1,"a",9),x(2,"button",10),d(3,"iconSmClass"),a(),n(4,"span",11),s(5),a()()),e&2){let t=o.$implicit,l=r(2),p=r();i(),_("routerLink","/data/items/"+t),i(),_("label",p.data().itemEntities[t].name)("icon",c(3,4,t)),i(3),C(l.in[t])}}function oe(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td"),S(5,ae,6,6,"div",null,R),a()()),e&2){let t=r(2);i(2),C(c(3,1,"data.ingredients")),i(3),h(t.info().ingredientIds)}}function le(e,o){if(e&1&&(n(0,"div")(1,"a",9),x(2,"button",10),d(3,"iconSmClass"),a(),n(4,"span",11),s(5),a()()),e&2){let t=o.$implicit,l=r(2),p=r();i(),_("routerLink","/data/items/"+t),i(),_("label",p.data().itemEntities[t].name)("icon",c(3,4,t)),i(3),C(l.catalyst==null?null:l.catalyst[t])}}function pe(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td"),S(5,le,6,6,"div",null,R),a()()),e&2){let t=r(2);i(2),C(c(3,1,"data.catalysts")),i(3),h(t.info().catalystIds)}}function de(e,o){if(e&1&&(n(0,"div")(1,"a",9),x(2,"button",10),d(3,"iconSmClass"),a(),n(4,"span",11),s(5),d(6,"round"),a()()),e&2){let t=o.$implicit,l=r(2),p=r();i(),_("routerLink","/data/items/"+t),i(),_("label",p.data().itemEntities[t].name)("icon",c(3,4,t)),i(3),C(c(6,6,l.out[t]))}}function re(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td"),S(5,de,7,8,"div",null,R),a()()),e&2){let t=r(2);i(2),C(c(3,1,"data.products")),i(3),h(t.info().productIds)}}function ce(e,o){if(e&1&&(n(0,"div")(1,"a",9),x(2,"button",10),d(3,"iconSmClass"),a()()),e&2){let t=o.$implicit,l=r(2);i(),_("routerLink","/data/machines/"+t),i(),_("label",l.data().itemEntities[t].name)("icon",c(3,3,t))}}function me(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td")(5,"a",9),x(6,"button",10),d(7,"iconSmClass"),a()()()),e&2){let t=r(),l=r();i(2),C(c(3,4,"data.unlockedBy")),i(3),_("routerLink","/data/technologies/"+t.unlockedBy),i(),_("label",l.data().itemEntities[t.unlockedBy].name)("icon",T(7,6,t.unlockedBy,"recipe"))}}function _e(e,o){e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td"),x(5,"p-checkbox",12),a()()),e&2&&(i(2),C(c(3,4,"data.mining")),i(3),_("ngModel",!0)("binary",!0)("disabled",!0))}function se(e,o){e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td"),x(5,"p-checkbox",12),a()()),e&2&&(i(2),C(c(3,4,"data.technology")),i(3),_("ngModel",!0)("binary",!0)("disabled",!0))}function Ce(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td")(5,"a",9),x(6,"button",10),d(7,"iconSmClass"),a()()()),e&2){let t=r(),l=r();i(2),C(c(3,4,"data.rocketPart")),i(3),_("routerLink","/data/items/"+t.part),i(),_("label",l.data().itemEntities[t.part].name)("icon",c(7,6,t.part))}}function ue(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td"),s(5),d(6,"usage"),a()()),e&2){let t=r();i(2),C(c(3,2,"data.energyConsumption")),i(3),C(c(6,4,t.usage))}}function xe(e,o){if(e&1&&(n(0,"a",9),x(1,"button",10),d(2,"iconSmClass"),a()),e&2){let t=o,l=r(3);_("routerLink","/data/machines/"+t),i(),_("label",l.data().itemEntities[t].name)("icon",c(2,3,t))}}function fe(e,o){if(e&1&&(x(0,"i"),d(1,"iconSmClass")),e&2){let t=r();B(c(1,2,t))}}function ve(e,o){if(e&1&&(n(0,"a",9),x(1,"button",10),d(2,"iconSmClass"),a()),e&2){let t=r(),l=r(5);_("routerLink","/data/modules/"+t),i(),_("label",l.data().itemEntities[t].name)("icon",c(2,3,t))}}function Se(e,o){e&1&&(n(0,"div"),v(1,fe,2,4,"i",14)(2,ve,3,5,"a",9),a()),e&2&&(i(),u(o==="module"?1:2))}function he(e,o){if(e&1&&v(0,Se,3,1,"div"),e&2){let t,l=o.$implicit;u((t=l.id)?0:-1,t)}}function be(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td"),S(5,he,1,1,null,null,te),a()()),e&2){let t=r();i(2),C(c(3,1,"data.modules")),i(3),h(t.modules)}}function ye(e,o){if(e&1&&(n(0,"a",9),x(1,"button",10),d(2,"iconSmClass"),a()),e&2){let t=r().$implicit,l=r(4);_("routerLink","/data/beacons/"+t.id),i(),_("label",l.data().itemEntities[t.id].name)("icon",c(2,3,t.id))}}function ge(e,o){if(e&1&&(x(0,"i"),d(1,"iconSmClass")),e&2){let t=r();B(c(1,2,t))}}function Ee(e,o){if(e&1&&(n(0,"a",9),x(1,"button",10),d(2,"iconSmClass"),a()),e&2){let t=r(),l=r(6);_("routerLink","/data/modules/"+t),i(),_("label",l.data().itemEntities[t].name)("icon",c(2,3,t))}}function Re(e,o){e&1&&(n(0,"div"),v(1,ge,2,4,"i",14)(2,Ee,3,5,"a",9),a()),e&2&&(i(),u(o==="module"?1:2))}function Ie(e,o){if(e&1&&v(0,Re,3,1,"div"),e&2){let t,l=o.$implicit;u((t=l.id)?0:-1,t)}}function Be(e,o){if(e&1&&(n(0,"div"),v(1,ye,3,5,"a",9),n(2,"span",11),s(3),a()(),S(4,Ie,1,1,null,null,te)),e&2){let t=o.$implicit;i(),u(t.id?1:-1),i(2),C(t.count),i(),h(t.modules)}}function ke(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td"),S(5,Be,6,2,null,null,L),a()()),e&2){let t=r();i(2),C(c(3,1,"data.beacons")),i(3),h(t.beacons)}}function Te(e,o){if(e&1&&(n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td"),s(5),a(),x(6,"td"),a()),e&2){let t=r();i(2),C(c(3,2,"data.overclock")),i(3),$("",t.overclock,"%")}}function Fe(e,o){if(e&1){let t=k();n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td")(5,"p-checkbox",13),I("onChange",function(){g(t);let p=r(2);return E(p.toggleRecipe())}),a()()(),n(6,"tr")(7,"th"),s(8),d(9,"translate"),a(),n(10,"td")(11,"p-checkbox",13),I("onChange",function(p){g(t);let m=r(2);return E(m.setRecipeChecked(m.id(),p.checked))}),a()()(),n(12,"tr")(13,"th"),s(14),d(15,"translate"),a(),n(16,"td"),v(17,xe,3,5,"a",9),a()(),v(18,be,7,3,"tr")(19,ke,7,3,"tr")(20,Te,7,4,"tr")}if(e&2){let t,l=o,p=r(2);i(2),C(c(3,11,"data.excluded")),i(3),_("ngModel",l.excluded)("binary",!0),i(3),C(c(9,13,"data.checked")),i(3),_("ngModel",l.checked)("binary",!0),i(3),C(c(15,15,"data.machine")),i(3),u((t=l.machineId)?17:-1,t),i(),u(l.modules!=null&&l.modules.length?18:-1),i(),u(p.data().game===p.Game.Factorio?19:-1),i(),u(p.data().game===p.Game.Satisfactory?20:-1)}}function we(e,o){if(e&1){let t=k();n(0,"tr")(1,"th"),s(2),d(3,"translate"),a(),n(4,"td")(5,"lab-input-number",15),I("setValue",function(p){g(t);let m=r(2);return E(m.setRecipeCost(m.id(),p))}),a()()()}e&2&&(i(2),C(c(3,2,"data.cost")),i(3),_("value",o))}function je(e,o){if(e&1){let t=k();n(0,"table",1)(1,"tr")(2,"th",3)(3,"h3"),s(4),a()()(),n(5,"tr")(6,"td",3),x(7,"i",4),d(8,"iconClass"),a()(),v(9,ne,8,9,"tr"),n(10,"tr")(11,"th"),s(12),d(13,"translate"),a(),n(14,"td"),s(15),a()(),v(16,oe,7,3,"tr")(17,pe,7,3,"tr")(18,re,7,3,"tr"),n(19,"tr")(20,"th"),s(21),d(22,"translate"),a(),n(23,"td"),S(24,ce,4,5,"div",null,R),a()(),v(26,me,8,9,"tr")(27,_e,6,6,"tr")(28,se,6,6,"tr")(29,Ce,8,8,"tr")(30,ue,7,6,"tr"),n(31,"tr")(32,"th",5)(33,"div",6),x(34,"button",7),n(35,"h3"),s(36),d(37,"translate"),a(),n(38,"button",8),I("click",function(){g(t);let p=r();return E(p.resetRecipe(p.id()))}),a()()()(),v(39,Fe,21,17)(40,we,6,4,"tr"),a()}if(e&2){let t,l,p,m=o,f=r();i(4),C(m.name),i(3),B(T(8,20,f.id(),"recipe")),i(2),u((t=f.info().category)?9:-1,t),i(3),C(c(13,23,"data.time")),i(3),C(m.time),i(),u(f.info().ingredientIds.length?16:-1),i(),u(f.info().catalystIds.length?17:-1),i(),u(f.info().productIds.length?18:-1),i(3),C(c(22,25,"data.producers")),i(3),h(m.producers),i(2),u(m.unlockedBy?26:-1),i(),u(m.isMining?27:-1),i(),u(m.isTechnology?28:-1),i(),u(m.part?29:-1),i(),u(m.usage?30:-1),i(6),C(c(37,27,"data.recipeSettings")),i(2),V("invisible",!f.recipesStateRaw()[f.id()]),i(),u((l=f.recipeSettings())?39:-1,l),i(),u((p=(p=f.recipeR())==null?null:p.cost)?40:-1,p)}}function Me(e,o){e&1&&(n(0,"div",2),s(1),d(2,"translate"),a()),e&2&&(i(),C(c(2,1,"data.notFound")))}var tt=(()=>{let o=class o extends ee{constructor(){super(...arguments),this.recipesStateRaw=this.store.selectSignal(b.recipesState),this.recipesState=this.store.selectSignal(b.getRecipesState),this.obj=y(()=>this.data().recipeEntities[this.id()]),this.breadcrumb=y(()=>[this.parent(),{label:this.obj()?.name}]),this.info=y(()=>{let l=this.id(),p=this.data(),m=p.recipeEntities[l];return{category:p.categoryEntities[F(m?.category,"")],ingredientIds:Object.keys(m?.in??{}),catalystIds:Object.keys(m?.catalyst??{}),productIds:Object.keys(m?.out??{})}}),this.recipeSettings=y(()=>this.recipesState()[this.id()]),this.recipeR=y(()=>this.data().adjustedRecipe[this.id()]),this.Game=A}toggleRecipe(){let l=this.recipeSettings();if(l==null)return;let p=this.id(),m=!l.excluded,f=F(this.data().defaults?.excludedRecipeIds,[]).some(ie=>ie===p);this.setRecipeExcluded(p,m,f)}setRecipeExcluded(l,p,m){this.store.dispatch(new b.SetExcludedAction({id:l,value:p,def:m}))}setRecipeChecked(l,p){this.store.dispatch(new b.SetCheckedAction({id:l,value:p}))}setRecipeCost(l,p){this.store.dispatch(new b.SetCostAction({id:l,value:p}))}resetRecipe(l){this.store.dispatch(new b.ResetRecipeAction(l))}};o.\u0275fac=(()=>{let l;return function(m){return(l||(l=j(o)))(m||o)}})(),o.\u0275cmp=w({type:o,selectors:[["ng-component"]],standalone:!0,features:[M,P],decls:3,vars:3,consts:[[3,"home","model"],[1,"properties","mb-4"],[1,"my-5","p-error"],["colspan","2",1,"text-center"],[1,"lg"],["colspan","2"],[1,"d-flex","align-items-center","justify-content-between"],["pButton","","pRipple","","type","button","icon","fa-solid fa-rotate-right",1,"invisible","p-button-rounded"],["pButton","","pRipple","","type","button","icon","fa-solid fa-rotate-left",1,"p-button-rounded",3,"click"],["queryParamsHandling","preserve",3,"routerLink"],["pButton","","pRipple","","type","button",1,"p-button-text",3,"label","icon"],[1,"ms-3"],[3,"ngModel","binary","disabled"],[3,"onChange","ngModel","binary"],[3,"class"],[3,"setValue","value"]],template:function(p,m){if(p&1&&(x(0,"p-breadcrumb",0),v(1,je,41,29,"table",1)(2,Me,3,3,"div",2)),p&2){let f;_("home",m.home())("model",m.breadcrumb()),i(),u((f=m.obj())?1:2,f)}},dependencies:[D,Z,O,q,Y,G,U,z,H,J,N,K,Q,W,X],changeDetection:0});let e=o;return e})();export{tt as RecipeComponent};
