"use strict";(self.webpackChunkfactoriolab=self.webpackChunkfactoriolab||[]).push([[50],{5050:(T,E,o)=>{o.r(E),o.d(E,{CollectionComponent:()=>e});var l=o(6895),c=o(4004),i=o(9841),r=o(2518),m=o(3087),d=o(1232),t=o(4650),D=o(4258),O=o(6188),M=o(2997),P=o(4489),h=o(8676),C=o(5156);function v(s,n){if(1&s&&(t.ynx(0),t._UZ(1,"p-breadcrumb",1)(2,"lab-collection-table",2),t.BQk()),2&s){const a=n.ngIf;t.xp6(1),t.Q6J("home",a.home)("model",a.breadcrumb),t.xp6(1),t.Q6J("ids",a.ids)("type",a.collection.type)}}class e{constructor(n,a,p,U){this.route=n,this.translateSvc=a,this.store=p,this.dataRouteSvc=U,this.collection$=this.route.data.pipe((0,c.U)(_=>_)),this.breadcrumb$=this.collection$.pipe((0,c.U)(_=>[{label:this.translateSvc.instant(_.label)}])),this.vm$=(0,i.a)([this.collection$,this.breadcrumb$,this.dataRouteSvc.home$,this.store.select(m.Zr.pY)]).pipe((0,c.U)(([_,u,I,R])=>({collection:_,breadcrumb:u,ids:R[_.ids],home:I})))}}e.\u0275fac=function(n){return new(n||e)(t.Y36(D.gz),t.Y36(O.sK),t.Y36(M.yh),t.Y36(P.s))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[t.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[3,"home","model"],[3,"ids","type"]],template:function(n,a){1&n&&(t.YNc(0,v,3,4,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,a.vm$))},dependencies:[l.ez,l.O5,l.Ov,r.o,h.a,d.r,C.F],changeDetection:0})}}]);