import{D as o,Oc as r,Pd as c,Ua as s,ad as a,cc as w,ha as d,m as i,n as e,x as n}from"./chunk-EXQK3WQQ.js";var f=576,$=(()=>{class t{windowScrollY=()=>window.scrollY;windowInnerWidth=()=>window.innerWidth;scrollTop=r(o(window,"scroll").pipe(n(this.windowScrollY)),{initialValue:window.scrollY});width=r(o(window,"resize").pipe(n(this.windowInnerWidth)),{initialValue:window.innerWidth});isMobile=w(()=>this.width()<f);showToast$=new i;showConfirm$=new i;confirm(l){this.showConfirm$.next(l)}translateSelectedItem$=new e(void 0);translateItem$=new e(void 0);settingsActive=s(!1);settingsXlHidden=s(!1);toggleSettings(){this.settingsActive.set(!this.settingsActive())}toggleSettingsXl(){this.settingsXlHidden.set(!this.settingsXlHidden())}version=`${c} ${a.version}`;static \u0275fac=function(m){return new(m||t)};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();export{$ as a};
