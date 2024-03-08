import{d as te}from"./chunk-MDCGMTG4.js";import{$ as f,$a as O,Aa as s,Ca as m,Cc as V,Ga as g,Hc as A,Ic as H,Ka as r,La as n,Ld as K,Ma as _,Md as Q,Oa as D,Pa as N,Qa as d,Qc as z,V as C,Va as S,Vc as G,Vd as b,Wa as P,Wc as J,Wd as U,Xd as W,Y as w,Zd as X,aa as y,ba as R,be as Y,ca as B,da as L,eb as u,fa as j,fb as h,ga as k,gb as E,mc as q,qa as x,qd as F,sb as $,se as Z,ta as l,xe as ee}from"./chunk-WJQEWPMZ.js";var I=(()=>{let t=class t{constructor(){this.translateSvc=f(A),this.pTable=f(b,{self:!0})}ngOnInit(){this.pTable.styleClass="p-datatable-sm",this.pTable.rows=10,this.pTable.rowsPerPageOptions=[10,25,50,100,250],this.pTable.showCurrentPageReport=!0,this.pTable.currentPageReportTemplate=this.translateSvc.instant("data.currentPageReportTemplate")}};t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=L({type:t,selectors:[["","labPagedTable",""]]});let e=t;return e})();function oe(e,t){e&1&&(r(0,"th",5)(1,"span"),S(2),u(3,"translate"),n(),_(4,"p-sortIcon",6),n()),e&2&&(l(2),P(h(3,1,"data.category")))}function ae(e,t){if(e&1){let i=D();r(0,"p-multiSelect",10),N("onChange",function(a){let c=j(i).filterCallback;return k(c(a.value))}),u(1,"translate"),u(2,"translate"),n()}if(e&2){let i=t.$implicit,o=d(4);m("ngModel",i)("options",o.options().categories)("maxSelectedLabels",1)("selectedItemsLabel",h(1,5,"data.selectedLabel"))("placeholder",h(2,7,"data.any"))}}function le(e,t){e&1&&(r(0,"th")(1,"p-columnFilter",8),s(2,ae,3,9,"ng-template",9),n()())}function re(e,t){if(e&1&&(r(0,"tr")(1,"th"),_(2,"p-columnFilter",7),n(),s(3,le,3,0,"th"),n()),e&2){let i=d(2);l(3),g(3,i.type()!=="category"?3:-1)}}function pe(e,t){if(e&1&&(r(0,"tr")(1,"th",3)(2,"span"),S(3),u(4,"translate"),n(),_(5,"p-sortIcon",4),n(),s(6,oe,5,3,"th",5),n(),s(7,re,4,1,"tr")),e&2){let i=d();l(3),P(h(4,3,"data.name")),l(3),g(6,i.type()!=="category"?6:-1),l(),g(7,i.value().length>10?7:-1)}}function se(e,t){if(e&1&&(r(0,"a",11),_(1,"button",12),u(2,"iconSmClass"),n()),e&2){let i=d(2).$implicit;m("routerLink","/data/categories/"+i.category.id),l(),m("label",i.category.name)("icon",E(2,3,i.category.id,"category"))}}function ce(e,t){if(e&1&&(r(0,"td"),s(1,se,3,6,"a",11),n()),e&2){let i=d().$implicit;l(),g(1,i.category?1:-1)}}function me(e,t){if(e&1&&(r(0,"tr")(1,"td")(2,"a",11),_(3,"button",12),u(4,"iconSmClass"),n()(),s(5,ce,2,1,"td"),n()),e&2){let i=t.$implicit,o=d();l(2),m("routerLink",o.route()+i.id),l(),m("label",i.name)("icon",E(4,4,i.id,o.type())),l(2),g(5,o.type()!=="category"?5:-1)}}var de=()=>["category.id"],ue=(()=>{let t=class t{constructor(){this.store=f(V),this.ids=C.required(),this.type=C.required(),this.useRelativePath=C(!1),this.options=this.store.selectSignal(F.getOptions),this.data=this.store.selectSignal(F.getDataset),this.route=x(()=>{let o=this.type();if(this.useRelativePath())return"";switch(o){case"category":return"/data/categories/";case"item":return"/data/items/";case"recipe":return"/data/recipes/"}}),this.value=x(()=>{let o=this.ids(),a=this.type(),p=this.data(),c;switch(a){case"category":c=p.categoryEntities;break;case"item":c=p.itemEntities;break;case"recipe":c=p.recipeEntities}return o.filter(T=>c[T]).map(T=>{let v=c[T],M={id:v.id,name:v.name};return a!=="category"&&(M.category=p.categoryEntities[v.category]),M})})}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=R({type:t,selectors:[["lab-collection-table"]],inputs:{ids:[y.SignalBased,"ids"],type:[y.SignalBased,"type"],useRelativePath:[y.SignalBased,"useRelativePath"]},decls:3,vars:4,consts:[["labPagedTable","",3,"value","paginator","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","name"],["field","name"],["pSortableColumn","category.name"],["field","category.name"],["type","text","field","name","matchMode","contains"],["field","category.id","matchMode","in"],["pTemplate","filter"],["appendTo","body",3,"ngModel","options","maxSelectedLabels","selectedItemsLabel","placeholder","onChange"],["queryParamsHandling","preserve",3,"routerLink"],["pButton","","pRipple","","type","button",1,"p-button-link",3,"label","icon"]],template:function(a,p){a&1&&(r(0,"p-table",0),s(1,pe,8,5,"ng-template",1)(2,me,6,7,"ng-template",2),n()),a&2&&m("value",p.value())("paginator",p.value().length>10)("globalFilterFields",O(3,de))},dependencies:[G,J,z,q,Q,Z,K,b,U,W,X,I,H,Y],styles:["th[_ngcontent-%COMP%]{width:50%}"],changeDetection:0});let e=t;return e})();var ze=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=B({type:t}),t.\u0275inj=w({imports:[$,ee,te]});let e=t;return e})();export{ue as a,ze as b};
