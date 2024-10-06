import{$ as _,Ba as r,Bc as M,Be as E,Cd as f,Db as x,Fa as v,Fc as u,Ka as a,La as n,Ma as g,Me as B,Qa as b,Rc as S,Wd as T,X as I,Xa as p,Xc as D,Ya as m,_ as k,aa as L,ae as W,dd as P,ie as w,kb as d,lb as s,ra as o,za as h}from"./chunk-CSBHZVQL.js";function j(t,e){t&1&&(a(0,"tr")(1,"th"),p(2),d(3,"translate"),n(),a(4,"th"),p(5),d(6,"translate"),n()()),t&2&&(o(2),m(s(3,2,"data.collection")),o(3),m(s(6,4,"data.count")))}function $(t,e){if(t&1&&(a(0,"tr")(1,"td")(2,"a",5),g(3,"button",6),d(4,"translate"),n()(),a(5,"td"),p(6),n()()),t&2){let i=b().$implicit;o(2),r("routerLink",i.routerLink),o(),r("label",s(4,3,i.label)),o(3),m(e)}}function F(t,e){if(t&1&&h(0,$,7,5,"tr"),t&2){let i,c=e.$implicit,l=b();v((i=l.data()[c.id].length)?0:-1,i)}}function N(t,e){t&1&&(a(0,"tr")(1,"th",7),p(2),d(3,"translate"),n()()),t&2&&(o(2),m(s(3,1,"data.versions")))}function q(t,e){if(t&1&&(a(0,"tr")(1,"td"),p(2),n(),a(3,"td"),p(4),n()()),t&2){let i=e.$implicit;o(2),m(i.key),o(2),m(i.value)}}var R=(()=>{let e=class e{constructor(){this.store=k(S),this.home=this.store.selectSignal(f.getModMenuItem),this.data=this.store.selectSignal(f.getDataset),this.collections=[{label:"data.categories",routerLink:"categories",id:"categoryIds"},{label:"data.items",routerLink:"items",id:"itemIds"},{label:"data.beacons",routerLink:"beacons",id:"beaconIds"},{label:"data.belts",routerLink:"belts",id:"beltIds"},{label:"data.cargoWagons",routerLink:"cargo-wagons",id:"cargoWagonIds"},{label:"data.fluidWagons",routerLink:"fluid-wagons",id:"fluidWagonIds"},{label:"data.fuels",routerLink:"fuels",id:"fuelIds"},{label:"data.machines",routerLink:"machines",id:"machineIds"},{label:"data.modules",routerLink:"modules",id:"moduleIds"},{label:"data.pipes",routerLink:"pipes",id:"pipeIds"},{label:"data.technologies",routerLink:"technologies",id:"technologyIds"},{label:"data.recipes",routerLink:"recipes",id:"recipeIds"}]}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=_({type:e,selectors:[["ng-component"]],decls:8,vars:5,consts:[[3,"home"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["styleClass","mt-5",3,"value"],["queryParamsHandling","preserve",3,"routerLink"],["pButton","","pRipple","","type","button",1,"p-button-link",3,"label"],["colspan","2"]],template:function(l,C){l&1&&(g(0,"p-breadcrumb",0),a(1,"p-table",1),h(2,j,7,6,"ng-template",2)(3,F,1,1,"ng-template",3),n(),a(4,"p-table",4),d(5,"keyvalue"),h(6,N,4,3,"ng-template",2)(7,q,5,2,"ng-template",3),n()),l&2&&(r("home",C.home()),o(),r("value",C.collections),o(3),r("value",s(5,3,C.data().version)))},dependencies:[P,E,M,W,T,w,x,D],styles:['li[_ngcontent-%COMP%]{display:flex;align-items:center}li[_ngcontent-%COMP%]:before{content:"";width:.5rem;height:.5rem;border-radius:50%;background:var(--text-color);margin-right:.5rem}li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:.5rem}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;align-items:center}a[_ngcontent-%COMP%]{text-decoration:none}'],changeDetection:0});let t=e;return t})();var y=[{path:"categories/:id",loadComponent:()=>import("./chunk-UJBN6RD3.js").then(t=>t.CategoryComponent),data:{collectionLabel:"data.categories"}},{path:"categories",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.categories",type:"category",key:"categoryIds"}},{path:"items/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.items"}},{path:"items",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.items",type:"item",key:"itemIds"}},{path:"beacons/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.beacons"}},{path:"beacons",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.beacons",type:"item",key:"beaconIds"}},{path:"belts/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.belts"}},{path:"belts",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.belts",type:"item",key:"beltIds"}},{path:"cargo-wagons/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.cargoWagons"}},{path:"cargo-wagons",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.cargoWagons",type:"item",key:"cargoWagonIds"}},{path:"fluid-wagons/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.fluidWagons"}},{path:"fluid-wagons",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.fluidWagons",type:"item",key:"fluidWagonIds"}},{path:"fuels/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.fuels"}},{path:"fuels",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.fuels",type:"item",key:"fuelIds"}},{path:"machines/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.machines"}},{path:"machines",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.machines",type:"item",key:"machineIds"}},{path:"modules/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.modules"}},{path:"modules",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.modules",type:"item",key:"moduleIds"}},{path:"pipes/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.pipes"}},{path:"pipes",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.pipes",type:"item",key:"pipeIds"}},{path:"technologies/:id",loadComponent:()=>import("./chunk-NF4ZJRUU.js").then(t=>t.ItemComponent),data:{collectionLabel:"data.technologies"}},{path:"technologies",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.technologies",type:"item",key:"technologyIds"}},{path:"recipes/:id",loadComponent:()=>import("./chunk-T73XR5YF.js").then(t=>t.RecipeComponent),data:{collectionLabel:"data.recipes"}},{path:"recipes",loadComponent:()=>import("./chunk-HSTDRGSF.js").then(t=>t.CollectionComponent),data:{label:"data.recipes",type:"recipe",key:"recipeIds"}},{path:"",pathMatch:"full",component:R}],it=u.forChild(y);var A=u.forChild(y),ct=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=L({type:e}),e.\u0275inj=I({imports:[B,A]});let t=e;return t})();export{ct as DataModule,A as DataRoutingModule};
