import{a as D}from"./chunk-22BO6QWQ.js";import{a as g,b as C}from"./chunk-3AI4NBF7.js";import"./chunk-I6DOAQIT.js";import"./chunk-JXQKPFP7.js";import"./chunk-PACFTDGY.js";import"./chunk-7U55I26J.js";import"./chunk-7N5LGCPB.js";import"./chunk-N43TGTPY.js";import"./chunk-IDYIWOEB.js";import"./chunk-45A2VFOD.js";import"./chunk-VKC2MJDY.js";import{c as S}from"./chunk-UL6PE3AU.js";import{Ea as s,Hd as y,I as m,Ib as u,Qa as l,S as t,T as p,Wc as v,fc as h,ia as a,l as n,mb as d,qa as c,rc as f,sc as b}from"./chunk-VHX6PEQ4.js";import"./chunk-TWZW5B45.js";var z=(()=>{class i{constructor(){this.route=t(h),this.recipesSvc=t(S),this.settingsSvc=t(y),this.translateSvc=t(v),this.home=this.settingsSvc.modMenuItem,this.data=this.recipesSvc.adjustedDataset,this.label=a.required(),this.type=a.required(),this.key=a.required(),this.breadcrumb=b(f(this.label).pipe(m(e=>this.translateSvc.get(e)),n(e=>[{label:e}]))),this.ids=u(()=>this.data()[this.key()])}static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275cmp=p({type:i,selectors:[["lab-collection"]],inputs:{label:[1,"label"],type:[1,"type"],key:[1,"key"]},standalone:!0,features:[d],decls:2,vars:5,consts:[[3,"home","model"],[3,"ids","type","useRelativePath"]],template:function(o,r){o&1&&l(0,"p-breadcrumb",0)(1,"lab-collection-table",1),o&2&&(s("home",r.home())("model",r.breadcrumb()),c(),s("ids",r.ids())("type",r.type())("useRelativePath",!0))},dependencies:[C,g,D],encapsulation:2,changeDetection:0})}}return i})();export{z as CollectionComponent};
