import{a as M}from"./chunk-K7G3AAQA.js";import{a as T}from"./chunk-ZHDJPUJO.js";import{a as F,b as S}from"./chunk-JAKX4WOK.js";import"./chunk-4KQHW7V2.js";import"./chunk-MTRZLCDX.js";import"./chunk-3FZZNJCL.js";import"./chunk-WDTLHOV6.js";import{a as D}from"./chunk-DXEA6PIB.js";import"./chunk-QOGRI46C.js";import"./chunk-D4HHPSMK.js";import"./chunk-4OSSSBCR.js";import{B as E}from"./chunk-TENBOMD5.js";import{Ba as g,Ea as l,Ia as v,Ib as c,Ja as I,Oa as o,Pa as r,Qa as p,T as y,Wa as x,ba as C,eb as d,fb as s,mb as _,qa as n,wb as m,xb as u,yb as B,za as b}from"./chunk-VYXNFTVK.js";import"./chunk-TWZW5B45.js";function j(t,h){if(t&1&&(o(0,"h3"),d(1),r(),p(2,"i",2),m(3,"iconClass"),o(4,"h3"),d(5),m(6,"translate"),r(),p(7,"lab-collection-table",3),o(8,"h3"),d(9),m(10,"translate"),r(),p(11,"lab-collection-table",4)),t&2){let e=x();n(),s(h.name),n(),v(B(3,7,e.id(),"category")),n(3),s(u(6,10,"data.items")),n(2),l("ids",e.itemIds()),n(2),s(u(10,12,"data.recipes")),n(2),l("ids",e.recipeIds())}}function P(t,h){t&1&&(o(0,"div",1),d(1),m(2,"translate"),r()),t&2&&(n(),s(u(2,1,"data.notFound")))}var N=(()=>{class t extends M{constructor(){super(...arguments),this.obj=c(()=>this.data().categoryEntities[this.id()]),this.breadcrumb=c(()=>[this.parent()??{},{label:this.obj()?.name}]),this.itemIds=c(()=>{let e=this.data(),a=this.id();return e.itemIds.filter(i=>e.itemEntities[i].category===a)}),this.recipeIds=c(()=>{let e=this.data(),a=this.id();return e.recipeIds.filter(i=>e.recipeEntities[i].category===a)})}static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=C(t)))(i||t)}})()}static{this.\u0275cmp=y({type:t,selectors:[["lab-category"]],standalone:!0,features:[b,_],decls:3,vars:3,consts:[[3,"home","model"],[1,"p-error"],[1,"lg"],["type","item",3,"ids"],["type","recipe",3,"ids"]],template:function(a,i){if(a&1&&(p(0,"p-breadcrumb",0),g(1,j,12,14)(2,P,3,3,"div",1)),a&2){let f;l("home",i.home())("model",i.breadcrumb()),n(),I((f=i.obj())?1:2,f)}},dependencies:[S,F,T,D,E],encapsulation:2,changeDetection:0})}}return t})();export{N as CategoryComponent};
