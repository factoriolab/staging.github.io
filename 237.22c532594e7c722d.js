"use strict";(self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[]).push([[237],{9237:(x,E,n)=>{n.r(E),n.d(E,{CategoryComponent:()=>s});var l=n(6895),g=n(9841),p=n(4004),O=n(2518),d=n(3087),C=n(1232),D=n(8909),t=n(4650),M=n(4258),m=n(6188),P=n(2997),I=n(4489),A=n(8676),f=n(1969),u=n(5156);function v(e,_){if(1&e&&(t.ynx(0),t.TgZ(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"i",4),t.ALo(4,"iconClass"),t.qZA(),t.TgZ(5,"h3"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"lab-collection-table",5),t.TgZ(9,"h3"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t._UZ(12,"lab-collection-table",6),t.BQk()),2&e){const o=t.oxw().ngIf;t.xp6(2),t.Oqu(o.obj.name),t.xp6(1),t.Tol(t.xi3(4,7,o.id,"category")),t.xp6(3),t.Oqu(t.lcZ(7,10,"data.items")),t.xp6(2),t.Q6J("ids",o.itemIds),t.xp6(2),t.Oqu(t.lcZ(11,12,"data.recipes")),t.xp6(2),t.Q6J("ids",o.recipeIds)}}function T(e,_){1&e&&(t.TgZ(0,"div",7),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"data.notFound")))}function U(e,_){if(1&e&&(t.ynx(0),t._UZ(1,"p-breadcrumb",1),t.YNc(2,v,13,14,"ng-container",2),t.YNc(3,T,3,3,"ng-template",null,3,t.W1O),t.BQk()),2&e){const o=_.ngIf,r=t.MAs(4);t.xp6(1),t.Q6J("home",o.home)("model",o.breadcrumb),t.xp6(1),t.Q6J("ngIf",o.obj)("ngIfElse",r)}}class s extends D.J{constructor(_,o,r,h){super(_,o),this.store=r,this.dataRouteSvc=h,this.vm$=(0,g.a)([this.id$,this.parent$,this.dataRouteSvc.home$,this.store.select(d.Zr.pY)]).pipe((0,p.U)(([c,y,L,a])=>({id:c,obj:a.categoryEntities[c],breadcrumb:[y,{label:a.categoryEntities[c]?.name}],home:L,itemIds:a.itemIds.filter(i=>a.itemEntities[i].category===c),recipeIds:a.recipeIds.filter(i=>a.recipeEntities[i].category===c)})))}}s.\u0275fac=function(_){return new(_||s)(t.Y36(M.gz),t.Y36(m.sK),t.Y36(P.yh),t.Y36(I.s))},s.\u0275cmp=t.Xpm({type:s,selectors:[["ng-component"]],standalone:!0,features:[t.qOj,t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"home","model"],[4,"ngIf","ngIfElse"],["notFound",""],[1,"lg"],["type","item",3,"ids"],["type","recipe",3,"ids"],[1,"p-error"]],template:function(_,o){1&_&&(t.YNc(0,U,5,4,"ng-container",0),t.ALo(1,"async")),2&_&&t.Q6J("ngIf",t.lcZ(1,1,o.vm$))},dependencies:[l.ez,l.O5,l.Ov,O.o,A.a,m.X$,f.Y,C.r,u.F],changeDetection:0})}}]);