import{$c as oe,Aa as l,Ce as be,Da as x,Dd as le,Ea as Q,Ed as P,Gb as Z,Hb as ee,Ia as a,Ic as ie,Ja as s,Ka as h,Ma as C,Na as _,Oa as d,Oc as ne,Pa as O,Qa as F,Qd as ce,Ra as A,Rd as pe,Ua as y,Ub as N,V as H,Va as v,W as q,Wa as b,Wb as D,X as R,Yc as re,Yd as W,Zd as de,_ as $,_c as ae,aa as S,ab as G,ad as se,ba as M,bb as K,de as ue,fa as c,fb as L,fe as me,ga as p,hb as u,ia as U,ib as m,la as B,ne as _e,ob as j,oe as fe,qa as r,ra as E,sc as te,se as he,tb as J,te as ve,ub as X,vb as Y,vd as T,wc as z,ya as V,za as g,zb as I}from"./chunk-VORQ2EPX.js";var ke=["input"],Ie=(n,f,e)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":n,"p-radiobutton-disabled":f,"p-radiobutton-focused":e}),we=(n,f,e)=>({"p-radiobutton-box":!0,"p-highlight":n,"p-disabled":f,"p-focus":e}),Se=(n,f,e)=>({"p-radiobutton-label":!0,"p-radiobutton-label-active":n,"p-disabled":f,"p-radiobutton-label-focus":e});function Ee(n,f){if(n&1){let e=C();a(0,"label",7),_("click",function(t){c(e);let o=d();return p(o.select(t))}),v(1),s()}if(n&2){let e=d(),i=y(3);x(e.labelStyleClass),l("ngClass",L(6,Se,i.checked,e.disabled,e.focused)),g("for",e.inputId)("data-pc-section","label"),r(),b(e.label)}}var Ve={provide:re,useExisting:H(()=>Re),multi:!0},Te=(()=>{class n{accessors=[];add(e,i){this.accessors.push([e,i])}remove(e){this.accessors=this.accessors.filter(i=>i[1]!==e)}select(e){this.accessors.forEach(i=>{this.isSameGroup(i,e)&&i[1]!==e&&i[1].writeValue(e.value)})}isSameGroup(e,i){return e[0].control?e[0].control.root===i.control.control.root&&e[1].name===i.name:!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=q({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Re=(()=>{class n{cd;injector;registry;value;formControlName;name;disabled;label;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;labelStyleClass;onClick=new B;onFocus=new B;onBlur=new B;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;constructor(e,i,t){this.cd=e,this.injector=i,this.registry=t}ngOnInit(){this.control=this.injector.get(ae),this.checkName(),this.registry.add(this.control,this)}handleClick(e,i,t){e.preventDefault(),!this.disabled&&(this.select(e),t&&i.focus())}select(e){this.disabled||(this.inputViewChild.nativeElement.checked=!0,this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this)}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=function(i){return new(i||n)(E(j),E(U),E(Te))};static \u0275cmp=S({type:n,selectors:[["p-radioButton"]],viewQuery:function(i,t){if(i&1&&O(ke,5),i&2){let o;F(o=A())&&(t.inputViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:"disabled",label:"label",tabindex:"tabindex",inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[G([Ve])],decls:7,vars:29,consts:[["input",""],[3,"click","ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","radio",3,"focus","blur","checked","disabled","value"],[3,"ngClass"],[1,"p-radiobutton-icon"],[3,"class","ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(i,t){if(i&1){let o=C();a(0,"div",1),_("click",function(w){c(o);let ye=y(3);return p(t.handleClick(w,ye,!0))}),a(1,"div",2)(2,"input",3,0),_("focus",function(w){return c(o),p(t.onInputFocus(w))})("blur",function(w){return c(o),p(t.onInputBlur(w))}),s()(),a(4,"div",4),h(5,"span",5),s()(),V(6,Ee,2,10,"label",6)}i&2&&(x(t.styleClass),l("ngStyle",t.style)("ngClass",L(21,Ie,t.checked,t.disabled,t.focused)),g("data-pc-name","radiobutton")("data-pc-section","root"),r(),g("data-pc-section","hiddenInputWrapper"),r(),l("checked",t.checked)("disabled",t.disabled)("value",t.value),g("id",t.inputId)("name",t.name)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("tabindex",t.tabindex)("aria-checked",t.checked)("data-pc-section","hiddenInput"),r(2),l("ngClass",L(25,we,t.checked,t.disabled,t.focused)),g("data-pc-section","input"),r(),g("data-pc-section","icon"),r(),l("ngIf",t.label))},dependencies:[J,X,Y],encapsulation:2,changeDetection:0})}return n})(),Ce=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=R({imports:[I]})}return n})();var xe=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=R({imports:[I,z,W,z,W]})}return n})();function Me(n,f){if(n&1){let e=C();a(0,"div"),v(1),u(2,"translate"),s(),h(3,"p-divider"),a(4,"span"),v(5),u(6,"translate"),s(),a(7,"button",4),u(8,"translate"),_("click",function(){c(e);let t=y(10),o=d();return p(t.clickOpen("item",o.itemIds()))}),s(),a(9,"lab-picker",5,0),u(11,"translate"),_("selectId",function(t){c(e);let o=d();return p(o.selectId(t,"item"))}),s(),h(12,"p-divider"),a(13,"span"),v(14),u(15,"translate"),s(),a(16,"button",6),u(17,"translate"),_("click",function(){c(e);let t=y(19),o=d();return p(t.clickOpen("recipe",o.recipeIds()))}),s(),a(18,"lab-picker",5,1),u(20,"translate"),_("selectId",function(t){c(e);let o=d();return p(o.selectId(t,"recipe"))}),s(),h(21,"p-divider")}n&2&&(r(),b(m(2,7,"wizard.objectiveType")),r(4),b(m(6,9,"wizard.produceItems")),r(2),l("label",m(8,11,"wizard.produceItemsButton")),r(2),l("header",m(11,13,"wizard.produceItemsButton")),r(5),b(m(15,15,"wizard.runMachines")),r(2),l("label",m(17,17,"wizard.runMachinesButton")),r(2),l("header",m(20,19,"wizard.runMachinesButton")))}function Be(n,f){if(n&1){let e=C();a(0,"div"),v(1),u(2,"translate"),s(),h(3,"p-divider"),a(4,"div",7),h(5,"i"),u(6,"iconClass"),a(7,"span",8),v(8),s()(),a(9,"lab-input-number",9),_("setValue",function(t){c(e);let o=d();return p(o.value=t)}),s(),a(10,"p-dropdown",10),u(11,"translate"),_("onChange",function(t){c(e);let o=d();return p(o.setDisplayRate(t.value,o.displayRate()))}),s(),a(12,"button",11),u(13,"translate"),_("click",function(){c(e);let t=d();return p(t.createItemObjective(t.id))}),s(),h(14,"p-divider"),a(15,"button",12),u(16,"translate"),_("click",function(){c(e);let t=d();return p(t.state="type")}),s()}if(n&2){let e=d();r(),b(m(2,10,"wizard.itemObjectiveItems")),r(4),x(m(6,12,e.id)),r(3),b(e.data().itemEntities[e.id].name),r(),l("value",e.value),r(),l("tooltip",m(11,14,"objectives.selectDisplayRate"))("ngModel",e.displayRate())("options",e.displayRateOptions),r(2),l("label",m(13,16,"ok")),r(3),l("label",m(16,18,"wizard.back"))}}function Le(n,f){if(n&1){let e=C();a(0,"div"),v(1),u(2,"translate"),s(),h(3,"p-divider"),a(4,"div",7),h(5,"i"),u(6,"iconClass"),a(7,"span",8),v(8),s()(),a(9,"lab-input-number",9),_("setValue",function(t){c(e);let o=d();return p(o.value=t)}),s(),a(10,"button",11),u(11,"translate"),_("click",function(){c(e);let t=d();return p(t.createRecipeObjective(t.id))}),s(),h(12,"p-divider"),a(13,"button",12),u(14,"translate"),_("click",function(){c(e);let t=d();return p(t.state="type")}),s()}if(n&2){let e=d();r(),b(m(2,7,"wizard.recipeObjectiveMachines")),r(4),x(m(6,9,e.id)),r(3),b(e.data().recipeEntities[e.id].name),r(),l("value",e.value),r(),l("label",m(11,11,"ok")),r(3),l("label",m(14,13,"wizard.back"))}}var It=(()=>{let f=class f{constructor(){this.store=$(ie),this.itemIds=this.store.selectSignal(le.getAvailableItems),this.data=this.store.selectSignal(T.getDataset),this.recipeIds=this.store.selectSignal(T.getAvailableRecipes),this.displayRate=this.store.selectSignal(T.getDisplayRate),this.id="",this.value=Z.one,this.state="type",this.displayRateOptions=ee,this.ObjectiveUnit=D}selectId(i,t){this.id=i,this.state=t}setDisplayRate(i,t){this.store.dispatch(new T.SetDisplayRateAction({value:i,prev:t}))}createItemObjective(i){this.store.dispatch(new P.CreateAction({id:"0",targetId:i,value:this.value,unit:D.Items,type:N.Output}))}createRecipeObjective(i){this.store.dispatch(new P.CreateAction({id:"0",targetId:i,value:this.value,unit:D.Machines,type:N.Output}))}};f.\u0275fac=function(t){return new(t||f)},f.\u0275cmp=S({type:f,selectors:[["ng-component"]],standalone:!0,features:[K],decls:7,vars:4,consts:[["addItemObjectivePicker",""],["addRecipePicker",""],[1,"d-flex","flex-column","p-fluid"],["pButton","","pRipple","","type","button","icon","fa-solid fa-xmark","routerLink","/","queryParamsHandling","preserve",1,"p-button-outlined",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",1,"mt-2",3,"click","label"],[3,"selectId","header"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"click","label"],[1,"d-flex","align-items-center","justify-content-center"],[1,"ms-2"],["tooltipPosition","top",1,"mt-2","w-100",3,"setValue","value"],["labDropdownTranslate","","styleClass","mt-2 h-100",3,"onChange","tooltip","ngModel","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-check","routerLink","/list",1,"mt-2",3,"click","label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-arrow-left",1,"mb-2","p-button-outlined",3,"click","label"]],template:function(t,o){if(t&1&&(a(0,"p-card")(1,"div",2),V(2,Me,22,21)(3,Be,17,20)(4,Le,15,15),h(5,"button",3),u(6,"translate"),s()()),t&2){let k;r(2),Q(2,(k=o.state)==="type"?2:k==="item"?3:k==="recipe"?4:-1),r(3),l("label",m(6,2,"cancel"))}},dependencies:[I,Ce,xe,te,be,oe,se,pe,he,ve,de,ce,ue,_e,fe,ne,me],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}"],changeDetection:0});let n=f;return n})();export{It as WizardComponent};
