import{d as Z}from"./chunk-JSMDD5NI.js";import{$ as F,$d as J,Ac as O,Ba as s,Bd as E,Fa as u,Ge as X,Ka as r,La as n,Le as Y,Ma as g,Oa as B,Pa as D,Qa as m,Qc as $,Vc as q,Vd as G,Wc as V,X as R,Xa as v,Ya as x,_ as f,aa as I,ba as L,cd as A,ea as j,eb as N,fa as k,hd as H,he as y,id as z,ie as K,je as Q,kb as d,la as C,lb as h,le as U,mb as S,pe as W,ra as l,ub as P,za as c}from"./chunk-NGFG5ZIA.js";var w=(()=>{let t=class t{constructor(){this.translateSvc=f(q),this.pTable=f(y,{self:!0})}ngOnInit(){this.pTable.styleClass="p-datatable-sm",this.pTable.rows=10,this.pTable.rowsPerPageOptions=[10,25,50,100,250],this.pTable.showCurrentPageReport=!0,this.pTable.currentPageReportTemplate=this.translateSvc.instant("data.currentPageReportTemplate")}};t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=L({type:t,selectors:[["","labPagedTable",""]]});let e=t;return e})();var ie=()=>["category.id"];function ne(e,t){e&1&&(r(0,"th",5)(1,"span"),v(2),d(3,"translate"),n(),g(4,"p-sortIcon",6),n()),e&2&&(l(2),x(h(3,1,"data.category")))}function oe(e,t){if(e&1){let i=B();r(0,"p-multiSelect",10),d(1,"translate"),d(2,"translate"),D("onChange",function(a){let p=j(i).filterCallback;return k(p(a.value))}),n()}if(e&2){let i=t.$implicit,o=m(4);s("ngModel",i)("options",o.options().categories)("maxSelectedLabels",1)("selectedItemsLabel",h(1,5,"data.selectedLabel"))("placeholder",h(2,7,"data.any"))}}function ae(e,t){e&1&&(r(0,"th")(1,"p-columnFilter",8),c(2,oe,3,9,"ng-template",9),n()())}function le(e,t){if(e&1&&(r(0,"tr")(1,"th"),g(2,"p-columnFilter",7),n(),c(3,ae,3,0,"th"),n()),e&2){let i=m(2);l(3),u(i.type()!=="category"?3:-1)}}function re(e,t){if(e&1&&(r(0,"tr")(1,"th",3)(2,"span"),v(3),d(4,"translate"),n(),g(5,"p-sortIcon",4),n(),c(6,ne,5,3,"th",5),n(),c(7,le,4,1,"tr")),e&2){let i=m();l(3),x(h(4,3,"data.name")),l(3),u(i.type()!=="category"?6:-1),l(),u(i.value().length>10?7:-1)}}function pe(e,t){if(e&1&&(r(0,"a",11),g(1,"button",12),d(2,"iconSmClass"),n()),e&2){let i=m(2).$implicit;s("routerLink","/data/categories/"+i.category.id),l(),s("label",i.category.name)("icon",S(2,3,i.category.id,"category"))}}function ce(e,t){if(e&1&&(r(0,"td"),c(1,pe,3,6,"a",11),n()),e&2){let i=m().$implicit;l(),u(i.category?1:-1)}}function se(e,t){if(e&1&&(r(0,"tr")(1,"td")(2,"a",11),g(3,"button",12),d(4,"iconSmClass"),n()(),c(5,ce,2,1,"td"),n()),e&2){let i=t.$implicit,o=m();l(2),s("routerLink",o.route()+i.id),l(),s("label",i.name)("icon",S(4,4,i.id,o.type())),l(2),u(o.type()!=="category"?5:-1)}}var me=(()=>{let t=class t{constructor(){this.store=f($),this.ids=C.required(),this.type=C.required(),this.useRelativePath=C(!1),this.options=this.store.selectSignal(E.getOptions),this.data=this.store.selectSignal(E.getDataset),this.route=P(()=>{let o=this.type();if(this.useRelativePath())return"";switch(o){case"category":return"/data/categories/";case"item":return"/data/items/";case"recipe":return"/data/recipes/"}}),this.value=P(()=>{let o=this.ids(),a=this.type(),p=this.data(),_;switch(a){case"category":_=p.categoryEntities;break;case"item":_=p.itemEntities;break;case"recipe":_=p.recipeEntities}return o.filter(b=>_[b]).map(b=>{let T=_[b],M={id:T.id,name:T.name};return a!=="category"&&(M.category=p.categoryEntities[T.category]),M})})}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=F({type:t,selectors:[["lab-collection-table"]],inputs:{ids:[1,"ids"],type:[1,"type"],useRelativePath:[1,"useRelativePath"]},decls:3,vars:4,consts:[["labPagedTable","",3,"value","paginator","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","name"],["field","name"],["pSortableColumn","category.name"],["field","category.name"],["type","text","field","name","matchMode","contains"],["field","category.id","matchMode","in"],["pTemplate","filter"],["appendTo","body",3,"onChange","ngModel","options","maxSelectedLabels","selectedItemsLabel","placeholder"],["queryParamsHandling","preserve",3,"routerLink"],["pButton","","pRipple","","type","button",1,"p-button-link",3,"label","icon"]],template:function(a,p){a&1&&(r(0,"p-table",0),c(1,re,8,5,"ng-template",1)(2,se,6,7,"ng-template",2),n()),a&2&&s("value",p.value())("paginator",p.value().length>10)("globalFilterFields",N(3,ie))},dependencies:[H,z,A,O,J,X,G,y,K,Q,U,w,V,W],styles:["th[_ngcontent-%COMP%]{width:50%}"],changeDetection:0});let e=t;return e})();var Ve=(()=>{let t=class t{};t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=I({type:t}),t.\u0275inj=R({imports:[Y,Z]});let e=t;return e})();export{me as a,Ve as b};
