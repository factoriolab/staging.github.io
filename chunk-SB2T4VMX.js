import{$ as S,$b as P,$d as he,Aa as g,Ab as ie,Ba as l,Bc as ae,Cd as E,Ce as Ie,De as we,Ea as C,Eb as B,Fa as K,Fc as W,Jd as me,Ka as a,Kd as H,La as s,Ma as h,Mb as ne,Me as Se,Nb as re,Oa as y,Pa as f,Qa as d,Ra as F,Rc as oe,Sa as O,Ta as A,V as $,W as U,Wa as x,Wd as fe,X as V,Xa as b,Xc as se,Ya as v,_ as Q,_d as _e,aa as M,ae as be,bc as L,cb as J,cd as le,db as X,ea as c,fa as p,fd as ce,fe as ve,ge as q,ha as G,hb as j,hd as pe,he as ge,ib as Y,id as de,jd as ue,kb as u,lb as m,ma as R,ne as ye,pe as Ce,ra as r,rb as N,sa as I,sb as z,tb as Z,xe,ya as D,yb as ee,ye as ke,za as T,zb as te}from"./chunk-7RBJWLQP.js";var Re=["input"],Be=(n,_,e,i)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":n,"p-radiobutton-disabled":_,"p-radiobutton-focused":e,"p-variant-filled":i}),Le=(n,_,e)=>({"p-radiobutton-box":!0,"p-highlight":n,"p-disabled":_,"p-focus":e}),De=(n,_,e)=>({"p-radiobutton-label":!0,"p-radiobutton-label-active":n,"p-disabled":_,"p-radiobutton-label-focus":e});function Fe(n,_){if(n&1){let e=y();a(0,"label",7),f("click",function(t){c(e);let o=d();return p(o.select(t))}),b(1),s()}if(n&2){let e=d(),i=x(3);C(e.labelStyleClass),l("ngClass",j(6,De,i.checked,e.disabled,e.focused)),g("for",e.inputId)("data-pc-section","label"),r(),v(e.label)}}var Oe={provide:ce,useExisting:$(()=>je),multi:!0},Ae=(()=>{class n{accessors=[];add(e,i){this.accessors.push([e,i])}remove(e){this.accessors=this.accessors.filter(i=>i[1]!==e)}select(e){this.accessors.forEach(i=>{this.isSameGroup(i,e)&&i[1]!==e&&i[1].writeValue(e.value)})}isSameGroup(e,i){return e[0].control?e[0].control.root===i.control.control.root&&e[1].name===i.name:!1}static \u0275fac=function(i){return new(i||n)};static \u0275prov=U({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),je=(()=>{class n{cd;injector;registry;config;value;formControlName;name;disabled;label;variant="outlined";tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;labelStyleClass;autofocus;onClick=new R;onFocus=new R;onBlur=new R;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;constructor(e,i,t,o){this.cd=e,this.injector=i,this.registry=t,this.config=o}ngOnInit(){this.control=this.injector.get(pe),this.checkName(),this.registry.add(this.control,this)}handleClick(e,i,t){e.preventDefault(),!this.disabled&&(this.select(e),t&&i.focus())}select(e){this.disabled||(this.inputViewChild.nativeElement.checked=!0,this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}writeValue(e){this.checked=e==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this)}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=function(i){return new(i||n)(I(N),I(G),I(Ae),I(le))};static \u0275cmp=S({type:n,selectors:[["p-radioButton"]],viewQuery:function(i,t){if(i&1&&F(Re,5),i&2){let o;O(o=A())&&(t.inputViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",z],label:"label",variant:"variant",tabindex:[2,"tabindex","tabindex",Z],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",autofocus:[2,"autofocus","autofocus",z]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[J([Oe]),D],decls:7,vars:31,consts:[["input",""],[3,"click","ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","radio","pAutoFocus","",3,"focus","blur","checked","disabled","value","autofocus"],[3,"ngClass"],[1,"p-radiobutton-icon"],[3,"class","ngClass","click",4,"ngIf"],[3,"click","ngClass"]],template:function(i,t){if(i&1){let o=y();a(0,"div",1),f("click",function(w){c(o);let Me=x(3);return p(t.handleClick(w,Me,!0))}),a(1,"div",2)(2,"input",3,0),f("focus",function(w){return c(o),p(t.onInputFocus(w))})("blur",function(w){return c(o),p(t.onInputBlur(w))}),s()(),a(4,"div",4),h(5,"span",5),s()(),T(6,Fe,2,10,"label",6)}i&2&&(C(t.styleClass),l("ngStyle",t.style)("ngClass",Y(22,Be,t.checked,t.disabled,t.focused,t.variant==="filled"||t.config.inputStyle()==="filled")),g("data-pc-name","radiobutton")("data-pc-section","root"),r(),g("data-pc-section","hiddenInputWrapper"),r(),l("checked",t.checked)("disabled",t.disabled)("value",t.value)("autofocus",t.autofocus),g("id",t.inputId)("name",t.name)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("tabindex",t.tabindex)("aria-checked",t.checked)("data-pc-section","hiddenInput"),r(2),l("ngClass",j(27,Le,t.checked,t.disabled,t.focused)),g("data-pc-section","input"),r(),g("data-pc-section","icon"),r(),l("ngIf",t.label))},dependencies:[ee,te,ie,_e],encapsulation:2,changeDetection:0})}return n})(),Ee=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=V({imports:[B,he]})}return n})();var Ve=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=M({type:n});static \u0275inj=V({imports:[B,W,q,W,q]})}return n})();function Ne(n,_){if(n&1){let e=y();a(0,"div"),b(1),u(2,"translate"),s(),h(3,"p-divider"),a(4,"span"),b(5),u(6,"translate"),s(),a(7,"button",4),u(8,"translate"),f("click",function(){c(e);let t=x(10),o=d();return p(t.clickOpen("item",o.itemIds()))}),s(),a(9,"lab-picker",5,0),u(11,"translate"),f("selectId",function(t){c(e);let o=d();return p(o.selectId(t,"item"))}),s(),h(12,"p-divider"),a(13,"span"),b(14),u(15,"translate"),s(),a(16,"button",6),u(17,"translate"),f("click",function(){c(e);let t=x(19),o=d();return p(t.clickOpen("recipe",o.recipeIds()))}),s(),a(18,"lab-picker",5,1),u(20,"translate"),f("selectId",function(t){c(e);let o=d();return p(o.selectId(t,"recipe"))}),s(),h(21,"p-divider")}n&2&&(r(),v(m(2,7,"wizard.objectiveType")),r(4),v(m(6,9,"wizard.produceItems")),r(2),l("label",m(8,11,"wizard.produceItemsButton")),r(2),l("header",m(11,13,"wizard.produceItemsButton")),r(5),v(m(15,15,"wizard.runMachines")),r(2),l("label",m(17,17,"wizard.runMachinesButton")),r(2),l("header",m(20,19,"wizard.runMachinesButton")))}function ze(n,_){if(n&1){let e=y();a(0,"div"),b(1),u(2,"translate"),s(),h(3,"p-divider"),a(4,"div",7),h(5,"i"),u(6,"iconClass"),a(7,"span",8),b(8),s()(),a(9,"lab-input-number",9),f("setValue",function(t){c(e);let o=d();return p(o.value=t)}),s(),a(10,"p-dropdown",10),u(11,"translate"),f("onChange",function(t){c(e);let o=d();return p(o.setDisplayRate(t.value,o.displayRate()))}),s(),a(12,"button",11),u(13,"translate"),f("click",function(){c(e);let t=d();return p(t.createItemObjective(t.id))}),s(),h(14,"p-divider"),a(15,"button",12),u(16,"translate"),f("click",function(){c(e);let t=d();return p(t.state="type")}),s()}if(n&2){let e=d();r(),v(m(2,10,"wizard.itemObjectiveItems")),r(4),C(m(6,12,e.id)),r(3),v(e.data().itemEntities[e.id].name),r(),l("value",e.value),r(),l("pTooltip",m(11,14,"objectives.selectDisplayRate"))("ngModel",e.displayRate())("options",e.displayRateOptions),r(2),l("label",m(13,16,"ok")),r(3),l("label",m(16,18,"wizard.back"))}}function Pe(n,_){if(n&1){let e=y();a(0,"div"),b(1),u(2,"translate"),s(),h(3,"p-divider"),a(4,"div",7),h(5,"i"),u(6,"iconClass"),a(7,"span",8),b(8),s()(),a(9,"lab-input-number",9),f("setValue",function(t){c(e);let o=d();return p(o.value=t)}),s(),a(10,"button",11),u(11,"translate"),f("click",function(){c(e);let t=d();return p(t.createRecipeObjective(t.id))}),s(),h(12,"p-divider"),a(13,"button",12),u(14,"translate"),f("click",function(){c(e);let t=d();return p(t.state="type")}),s()}if(n&2){let e=d();r(),v(m(2,7,"wizard.recipeObjectiveMachines")),r(4),C(m(6,9,e.id)),r(3),v(e.data().recipeEntities[e.id].name),r(),l("value",e.value),r(),l("label",m(11,11,"ok")),r(3),l("label",m(14,13,"wizard.back"))}}var Ft=(()=>{let _=class _{constructor(){this.store=Q(oe),this.itemIds=this.store.selectSignal(me.getAvailableItems),this.data=this.store.selectSignal(E.getDataset),this.recipeIds=this.store.selectSignal(E.getAvailableRecipes),this.displayRate=this.store.selectSignal(E.getDisplayRate),this.id="",this.value=ne(1n),this.state="type",this.displayRateOptions=re,this.ObjectiveUnit=L}selectId(i,t){this.id=i,this.state=t}setDisplayRate(i,t){this.store.dispatch(new E.SetDisplayRateAction({value:i,prev:t}))}createItemObjective(i){this.store.dispatch(new H.CreateAction({id:"0",targetId:i,value:this.value,unit:L.Items,type:P.Output}))}createRecipeObjective(i){this.store.dispatch(new H.CreateAction({id:"0",targetId:i,value:this.value,unit:L.Machines,type:P.Output}))}};_.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=S({type:_,selectors:[["ng-component"]],standalone:!0,features:[X],decls:7,vars:4,consts:[["addItemObjectivePicker",""],["addRecipePicker",""],[1,"d-flex","flex-column","p-fluid"],["pButton","","pRipple","","type","button","icon","fa-solid fa-xmark","routerLink","/","queryParamsHandling","preserve",1,"p-button-outlined",3,"label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-box",1,"mt-2",3,"click","label"],[3,"selectId","header"],["pButton","","pRipple","","type","button","icon","fa-solid fa-industry",1,"mt-2",3,"click","label"],[1,"d-flex","align-items-center","justify-content-center"],[1,"ms-2"],["tooltipPosition","top",1,"mt-2","w-100",3,"setValue","value"],["labDropdownTranslate","","styleClass","mt-2 h-100",3,"onChange","pTooltip","ngModel","options"],["pButton","","pRipple","","type","button","icon","fa-solid fa-check","routerLink","/list",1,"mt-2",3,"click","label"],["pButton","","pRipple","","type","button","icon","fa-solid fa-arrow-left",1,"mb-2","p-button-outlined",3,"click","label"]],template:function(t,o){if(t&1&&(a(0,"p-card")(1,"div",2),T(2,Ne,22,21)(3,ze,17,20)(4,Pe,15,15),h(5,"button",3),u(6,"translate"),s()()),t&2){let k;r(2),K((k=o.state)==="type"?2:k==="item"?3:k==="recipe"?4:-1),r(3),l("label",m(6,2,"cancel"))}},dependencies:[Ee,Ve,ae,ve,Se,de,ue,be,Ie,we,ge,fe,ye,xe,ke,se,Ce],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}"],changeDetection:0});let n=_;return n})();export{Ft as WizardComponent};
