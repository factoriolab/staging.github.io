import{b as R,c as W,e as j,f as H,h as L,l as U,m as J}from"./chunk-JF67GPTH.js";import{$a as I,Ca as u,E as P,Ea as V,Eb as D,Fb as S,Gb as F,Hb as z,Ib as E,La as a,M as O,Mc as A,Xe as q,Ya as k,Ye as G,_a as m,ab as s,cb as N,cc as f,da as v,db as B,gd as $,ib as b,jb as l,jd as o,m as h,na as x,ob as T,pa as y,pb as d,qb as c,ta as w,u as C,ua as g,va as _,x as M}from"./chunk-GLDZOEVO.js";var K=(()=>{class i{minimum=u(o.zero);maximum=u(null);validate(t){if(t.value==null)return null;try{let e=o(t.value),n=this.minimum(),r=this.maximum();if((n==null||e.gte(n))&&(r==null||e.lte(r)))return null}catch{}return{validateNumber:{valid:!1}}}static \u0275fac=function(e){return new(e||i)};static \u0275dir=y({type:i,selectors:[["","labValidateNumber","","ngModel",""]],inputs:{minimum:[1,"minimum"],maximum:[1,"maximum"]},standalone:!0,features:[z([{provide:W,useExisting:i,multi:!0}])]})}return i})();function X(i,Y){if(i&1){let t=T();b(0,"span",2)(1,"button",3),d("click",function(){g(t);let n=c();return _(n.increase())}),l(),b(2,"button",4),d("click",function(){g(t);let n=c();return _(n.decrease())}),l()()}if(i&2){let t=c();a(),s("p-button-text",t.textButtons()),m("disabled",t.disabled()||t.isMaximum()),a(),s("p-button-text",t.textButtons()),m("disabled",t.disabled()||t.isMinimum())}}var Mt=(()=>{class i{value=u(o.zero);minimum=u(o.zero);maximum=u(null);width=u("");inputId=u("inputnumber");disabled=u(!1);hideButtons=u(!1);textButtons=u(!1);_value="";setValue=new V;classAttr="p-element p-inputwrapper";setValue$=new h;isMinimum=f(()=>{let t=this.value(),e=this.minimum();if(e==null)return!1;try{return t.lte(e)}catch{return!1}});isMaximum=f(()=>{let t=this.value(),e=this.maximum();if(e==null)return!1;try{return t.gte(e)}catch{return!1}});emitFilteredValues$=this.setValue$.pipe(A(),O(t=>t.type==="input"?P(300):C({})),M(t=>t.value),$(),v(t=>this.setValue.emit(o(t))));ngOnInit(){this.emitFilteredValues$.subscribe()}ngOnChanges(t){t.value&&(!this._value||!o(this._value).eq(this.value()))&&(this._value=this.value().toString())}changeValue(t){try{let e=this._value,n=o(e),r=this.minimum(),p=this.maximum();if((r==null||n.gte(r))&&(p==null||n.lte(p))){t==="enter"&&(e=n.toString(),this._value=e),this.setValue$.next({value:e,type:t});return}}catch{}this.setValue$.next({value:null,type:t})}increase(){try{let t=this.value(),e=t.isInteger()?t.add(o.one):t.ceil(),n=this.maximum();(n==null||e.lte(n))&&this.setValue.emit(e)}catch{}}decrease(){try{let t=this.value(),e=t.isInteger()?t.sub(o.one):t.floor(),n=this.minimum();(n==null||e.gte(n))&&this.setValue.emit(e)}catch{}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["lab-input-number"]],hostVars:2,hostBindings:function(e,n){e&2&&N(n.classAttr)},inputs:{value:[1,"value"],minimum:[1,"minimum"],maximum:[1,"maximum"],width:[1,"width"],inputId:[1,"inputId"],disabled:[1,"disabled"],hideButtons:[1,"hideButtons"],textButtons:[1,"textButtons"]},outputs:{setValue:"setValue"},standalone:!0,features:[w,E],decls:3,vars:10,consts:[[1,"p-inputnumber","p-component","p-inputnumber-buttons-stacked"],["pInputText","","type","text","labValidateNumber","",1,"text-end",3,"ngModelChange","input","blur","keydown.enter","id","ngModel","minimum","maximum","disabled"],[1,"p-inputnumber-button-group"],["pButton","","pRipple","","type","button","icon","fa-solid fa-angle-up",1,"p-button-outlined","p-inputnumber-button","p-inputnumber-button-up",3,"click","disabled"],["pButton","","pRipple","","type","button","icon","fa-solid fa-angle-down",1,"p-button-outlined","p-inputnumber-button","p-inputnumber-button-down",3,"click","disabled"]],template:function(e,n){e&1&&(b(0,"span",0)(1,"input",1),F("ngModelChange",function(p){return S(n._value,p)||(n._value=p),p}),d("input",function(){return n.changeValue("input")})("blur",function(){return n.changeValue("blur")})("keydown.enter",function(){return n.changeValue("enter")}),l(),k(2,X,3,6,"span",2),l()),e&2&&(a(),I("width",n.width()),s("hidden-buttons",n.hideButtons()),m("id",n.inputId()),D("ngModel",n._value),m("minimum",n.minimum())("maximum",n.maximum())("disabled",n.disabled()),a(),B(n.hideButtons()?-1:2))},dependencies:[L,R,j,H,G,q,J,U,K],styles:["@layer primeng{p-inputnumber[_ngcontent-%COMP%], .p-inputnumber[_ngcontent-%COMP%]{display:inline-flex}.p-inputnumber-button[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex:0 0 auto}.p-inputnumber-buttons-stacked[_ngcontent-%COMP%]   .p-button.p-inputnumber-button[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%], .p-inputnumber-buttons-horizontal[_ngcontent-%COMP%]   .p-button.p-inputnumber-button[_ngcontent-%COMP%]   .p-button-label[_ngcontent-%COMP%]{display:none}.p-inputnumber-buttons-stacked[_ngcontent-%COMP%]   .p-button.p-inputnumber-button-up[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:0}.p-inputnumber-buttons-stacked[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-stacked[_ngcontent-%COMP%]   .p-button.p-inputnumber-button-down[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;padding:0}.p-inputnumber-buttons-stacked[_ngcontent-%COMP%]   .p-inputnumber-button-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.p-inputnumber-buttons-stacked[_ngcontent-%COMP%]   .p-inputnumber-button-group[_ngcontent-%COMP%]   .p-button.p-inputnumber-button[_ngcontent-%COMP%]{flex:1 1 auto}.p-inputnumber-buttons-horizontal[_ngcontent-%COMP%]   .p-button.p-inputnumber-button-up[_ngcontent-%COMP%]{order:3;border-top-left-radius:0;border-bottom-left-radius:0}.p-inputnumber-buttons-horizontal[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%]{order:2;border-radius:0}.p-inputnumber-buttons-horizontal[_ngcontent-%COMP%]   .p-button.p-inputnumber-button-down[_ngcontent-%COMP%]{order:1;border-top-right-radius:0;border-bottom-right-radius:0}.p-inputnumber-buttons-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-inputnumber-buttons-vertical[_ngcontent-%COMP%]   .p-button.p-inputnumber-button-up[_ngcontent-%COMP%]{order:1;border-bottom-left-radius:0;border-bottom-right-radius:0;width:100%}.p-inputnumber-buttons-vertical[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%]{order:2;border-radius:0;text-align:center}.p-inputnumber-buttons-vertical[_ngcontent-%COMP%]   .p-button.p-inputnumber-button-down[_ngcontent-%COMP%]{order:3;border-top-left-radius:0;border-top-right-radius:0;width:100%}.p-inputnumber-input[_ngcontent-%COMP%]{flex:1 1 auto}.p-fluid[_ngcontent-%COMP%]   p-inputnumber[_ngcontent-%COMP%], .p-fluid[_ngcontent-%COMP%]   .p-inputnumber[_ngcontent-%COMP%]{width:100%}.p-fluid[_ngcontent-%COMP%]   .p-inputnumber[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%]{width:1%}.p-fluid[_ngcontent-%COMP%]   .p-inputnumber-buttons-vertical[_ngcontent-%COMP%]   .p-inputnumber-input[_ngcontent-%COMP%]{width:100%}.p-inputnumber-clear-icon[_ngcontent-%COMP%]{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputnumber-clearable[_ngcontent-%COMP%]{position:relative}}[_nghost-%COMP%]{display:inline-flex}[_nghost-%COMP%]     .p-inputtext{text-align:inherit}[_nghost-%COMP%]     .p-inputnumber.p-component.p-inputnumber-buttons-stacked>.p-inputtext:not(.hidden-buttons){border-top-right-radius:0;border-bottom-right-radius:0}[_nghost-%COMP%]     .p-inputnumber{display:inline-flex}[_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-inputnumber-button-group{display:flex;flex-direction:column}[_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button{flex:1 1 auto}[_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up, [_nghost-%COMP%]     .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down{padding:0}"],changeDetection:0})}return i})();export{Mt as a};
