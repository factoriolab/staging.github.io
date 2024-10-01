import{Dd as g,Ec as I,Fd as S,Hd as f,Ib as m,Kc as l,O as d,Rc as v,S as a,ad as u,ba as p}from"./chunk-SYAZAQ6V.js";var b=(()=>{class i extends u{constructor(){super(...arguments),this.settingsSvc=a(f),this.settings=m(()=>this.computeItemsSettings(this.state(),this.settingsSvc.settings(),this.settingsSvc.dataset())),this.itemsModified=m(()=>{let t=this.state();return{belts:Object.keys(t).some(s=>t[s].beltId!=null),wagons:Object.keys(t).some(s=>t[s].wagonId!=null)}})}computeItemsSettings(t,s,o){let n={};for(let r of o.itemIds.map(c=>o.itemEntities[c])){let c=t[r.id],e=this.defaultBelt(r,s),h=this.defaultWagon(r,s),k=l(c?.beltId,e),F=l(c?.wagonId,h);n[r.id]={beltId:k,defaultBeltId:e,wagonId:F,defaultWagonId:h}}return n}defaultBelt(t,s){return t.stack?s.beltId:s.pipeId?s.pipeId:I.Pipe}defaultWagon(t,s){return t.stack?s.cargoWagonId:s.fluidWagonId}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=p(i)))(o||i)}})()}static{this.\u0275prov=d({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var j=(()=>{class i extends u{constructor(){super(...arguments),this.recipeSvc=a(S),this.settingsSvc=a(f),this.settings=m(()=>this.computeMachinesSettings(this.state(),this.settingsSvc.settings(),this.settingsSvc.dataset()))}computeMachinesSettings(t,s,o){let n={};for(let r of o.machineIds){let c=o.machineEntities[r],e=v(t[r]);c.type===g.Burner?(e.fuelOptions=this.recipeSvc.fuelOptions(c,o),e.defaultFuelId=this.recipeSvc.bestMatch(e.fuelOptions.map(h=>h.value),s.fuelRankIds),e.fuelId=l(e?.fuelId,e.defaultFuelId)):delete e.fuelId,c.modules?(e.moduleOptions=this.recipeSvc.moduleOptions(c,o),e.modules=this.recipeSvc.hydrateModules(e.modules,e.moduleOptions,s.moduleRankIds,c.modules),e.beacons=this.recipeSvc.hydrateBeacons(e.beacons,s.beacons)):(delete e.modules,delete e.beacons),e.defaultOverclock=s.overclock,e.overclock=l(e.overclock,e.defaultOverclock),n[r]=e}return n}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=p(i)))(o||i)}})()}static{this.\u0275prov=d({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var V=(()=>{class i extends u{constructor(){super(...arguments),this.itemsSvc=a(b),this.machinesSvc=a(j),this.recipeSvc=a(S),this.settingsSvc=a(f),this.settings=m(()=>this.computeRecipesSettings(this.state(),this.machinesSvc.settings(),this.settingsSvc.settings(),this.settingsSvc.dataset())),this.adjustedDataset=m(()=>{let t=this.settings(),s=this.itemsSvc.settings(),o=this.settingsSvc.availableRecipeIds(),n=this.settingsSvc.settings(),r=this.settingsSvc.dataset();return this.recipeSvc.adjustDataset(o,t,s,n,r)}),this.availableItemIds=m(()=>{let t=this.adjustedDataset();return t.itemIds.filter(s=>t.itemRecipeIds[s].length)})}computeRecipesSettings(t,s,o,n){let r={};for(let c of n.recipeIds.map(e=>n.recipeEntities[e])){let e=v(t[c.id]);this.recipeSvc.computeRecipeSettings(e,c,s,o,n),r[c.id]=e}return r}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=p(i)))(o||i)}})()}static{this.\u0275prov=d({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();export{b as a,j as b,V as c};
