"use strict";(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[521],{7882:function(e,n,l){l.d(n,{J:function(){return o}});const o=e=>e.includes("organisation.schema.json")?"organizations":e.includes("component.schema.json")?"components":e.includes("application.schema.json")?"applications":e.includes("contacts.schema.json")?"contacts":e.includes("componentlegalentity.schema.json")?"componentlegalentities":void 0},8272:function(e,n,l){l.d(n,{W:function(){return o}});const o=e=>getComputedStyle(document.documentElement).getPropertyValue(e)},3760:function(e,n,l){l.d(n,{A:function(){return V}});var o={};l.r(o),l.d(o,{active:function(){return T},badge:function(){return y},container:function(){return C},content:function(){return N},dataBadge:function(){return w},disabled:function(){return k},integrationBadge:function(){return L},interactionBadge:function(){return R},layerIcon:function(){return O},maxNumber:function(){return B},processBadge:function(){return _},servicesBadge:function(){return S},title:function(){return A},toggleIcon:function(){return W},unknownBadge:function(){return H}});var t=l(1700),a=l.n(t),d="--web-app-layer-color-data",r="--web-app-color-background-light",s="--web-app-layer-color-integration",i="--web-app-layer-color-interaction",c="--web-app-layer-color-process",u="--web-app-layer-color-services",m="--web-app-layer-color-unknown",p="ComponentCardsAccordionTemplate-module--layerFilter--408a0",v=l(8272),b=l(4327),g=l(563),h=l(8929),j=l.n(h),f=l(9833),x=l.n(f),T="ComponentCardsAccordionHeaderTemplate-module--active--d84b0",y="ComponentCardsAccordionHeaderTemplate-module--badge--83619",C="ComponentCardsAccordionHeaderTemplate-module--container--c6d09",N="ComponentCardsAccordionHeaderTemplate-module--content--7aee0",w="ComponentCardsAccordionHeaderTemplate-module--dataBadge--d71da",k="ComponentCardsAccordionHeaderTemplate-module--disabled--03d0b",L="ComponentCardsAccordionHeaderTemplate-module--integrationBadge--73313",R="ComponentCardsAccordionHeaderTemplate-module--interactionBadge--04770",O="ComponentCardsAccordionHeaderTemplate-module--layerIcon--4b6ce",B="ComponentCardsAccordionHeaderTemplate-module--maxNumber--bd71f",_="ComponentCardsAccordionHeaderTemplate-module--processBadge--6e780",S="ComponentCardsAccordionHeaderTemplate-module--servicesBadge--20d9f",A="ComponentCardsAccordionHeaderTemplate-module--title--6c56d",W="ComponentCardsAccordionHeaderTemplate-module--toggleIcon--c46d3",H="ComponentCardsAccordionHeaderTemplate-module--unknownBadge--c8de9",I=l(3168),z=l(7606),D=l(5505),Z=l(5019),$=l(734),G=l(1800),P=l(5893);const U=e=>{let{title:n,active:l,badgeNumber:t}=e;const{t:a}=(0,Z.$)(),d=t>0,r=t<100?x()(t):"99+",s=t>100;return(0,P.jsxs)("div",{className:(0,D.Z)(C,l&&T,!d&&k),children:[(0,P.jsxs)("div",{className:N,children:[(0,P.jsx)(z.G,{className:O,icon:I.Krp}),(0,P.jsx)("span",{className:(0,D.Z)(o[j()(`${n} badge`)],y,s&&B),children:(0,P.jsx)($.Ro,{number:r,children:(0,P.jsx)(G.X6,{level:3,className:A,children:a(n)})})}),(0,P.jsx)(z.G,{className:(0,D.Z)(W,l&&T),icon:I._tD})]}),(0,P.jsx)(G.Z0,{})]})};var F=l(1391);const V=e=>{let{components:n}=e;const l=g.Z.accordion,o=g.Z.controller,{t:t}=(0,Z.$)(),{open:b,setOpen:h}=o(),{open:j,setOpen:f}=o(),{open:x,setOpen:T}=o(),{open:y,setOpen:C}=o(),{open:N,setOpen:w}=o(),{open:k,setOpen:L}=o(),R=n.filter((e=>{var n,l,o,t;return"Interface"===a()(null==e||null===(n=e.embedded)||void 0===n||null===(l=n.nl)||void 0===l||null===(o=l.embedded)||void 0===o||null===(t=o.commonground)||void 0===t?void 0:t.layerType)})),O=n.filter((e=>{var n,l,o,t;return"Process"===a()(null==e||null===(n=e.embedded)||void 0===n||null===(l=n.nl)||void 0===l||null===(o=l.embedded)||void 0===o||null===(t=o.commonground)||void 0===t?void 0:t.layerType)})),B=n.filter((e=>{var n,l,o,t;return"Integration"===a()(null==e||null===(n=e.embedded)||void 0===n||null===(l=n.nl)||void 0===l||null===(o=l.embedded)||void 0===o||null===(t=o.commonground)||void 0===t?void 0:t.layerType)})),_=n.filter((e=>{var n,l,o,t;return"Service"===a()(null==e||null===(n=e.embedded)||void 0===n||null===(l=n.nl)||void 0===l||null===(o=l.embedded)||void 0===o||null===(t=o.commonground)||void 0===t?void 0:t.layerType)})),S=n.filter((e=>{var n,l,o,t;return"Data"===a()(null==e||null===(n=e.embedded)||void 0===n||null===(l=n.nl)||void 0===l||null===(o=l.embedded)||void 0===o||null===(t=o.commonground)||void 0===t?void 0:t.layerType)})),A=n.filter((e=>{var n,l,o,t;return void 0===(null==e||null===(n=e.embedded)||void 0===n||null===(l=n.nl)||void 0===l||null===(o=l.embedded)||void 0===o||null===(t=o.commonground)||void 0===t?void 0:t.layerType)}));return n.length?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(F.hE,{children:[(0,P.jsxs)(F.zx,{appearance:"subtle-button",className:(0,D.Z)(p),disabled:0===R.length,onClick:()=>{h(!b)},pressed:b,children:[(0,P.jsx)(F.B6,{color:0===R.length?(0,v.W)(r):(0,v.W)(i)}),t("Interaction")]}),(0,P.jsxs)(F.zx,{className:(0,D.Z)(p),appearance:"subtle-button",disabled:0===O.length,onClick:()=>{f(!j)},pressed:j,children:[(0,P.jsx)(F.B6,{color:0===O.length?(0,v.W)(r):(0,v.W)(c)}),t("Process")]}),(0,P.jsxs)(F.zx,{className:(0,D.Z)(p),appearance:"subtle-button",disabled:0===B.length,onClick:()=>{T(!x)},pressed:x,children:[(0,P.jsx)(F.B6,{color:0===B.length?(0,v.W)(r):(0,v.W)(s)}),t("Integration")]}),(0,P.jsxs)(F.zx,{className:(0,D.Z)(p),appearance:"subtle-button",disabled:0===_.length,onClick:()=>{C(!y)},pressed:y,children:[(0,P.jsx)(F.B6,{color:0===_.length?(0,v.W)(r):(0,v.W)(u)}),t("Service")]}),(0,P.jsxs)(F.zx,{className:(0,D.Z)(p),appearance:"subtle-button",disabled:0===S.length,onClick:()=>{w(!N)},pressed:N,children:[(0,P.jsx)(F.B6,{color:0===S.length?(0,v.W)(r):(0,v.W)(d)}),t("Data")]}),(0,P.jsxs)(F.zx,{className:(0,D.Z)(p),appearance:"subtle-button",disabled:0===A.length,onClick:()=>{L(!k)},pressed:k,children:[(0,P.jsx)(F.B6,{color:0===A.length?(0,v.W)(r):(0,v.W)(m)}),t("Unknown")]})]}),(0,P.jsx)(l,{open:b,setOpen:h,color:(0,v.W)(i),disabled:!R.length,header:(0,P.jsx)(U,{title:"Interaction",active:b,badgeNumber:R.length}),children:(0,P.jsx)(E,{components:R})}),(0,P.jsx)(l,{open:j,setOpen:f,color:(0,v.W)(c),disabled:!O.length,header:(0,P.jsx)(U,{title:"Process",active:j,badgeNumber:O.length}),children:(0,P.jsx)(E,{components:O})}),(0,P.jsx)(l,{open:x,setOpen:T,color:(0,v.W)(s),disabled:!B.length,header:(0,P.jsx)(U,{title:"Integration",active:x,badgeNumber:B.length}),children:(0,P.jsx)(E,{components:B})}),(0,P.jsx)(l,{open:y,setOpen:C,color:(0,v.W)(u),disabled:!_.length,header:(0,P.jsx)(U,{title:"Services",active:y,badgeNumber:_.length}),children:(0,P.jsx)(E,{components:_})}),(0,P.jsx)(l,{open:N,setOpen:w,color:(0,v.W)(d),disabled:!S.length,header:(0,P.jsx)(U,{title:"Data",active:N,badgeNumber:S.length}),children:(0,P.jsx)(E,{components:S})}),(0,P.jsx)(l,{open:k,setOpen:L,color:(0,v.W)(m),disabled:!A.length,header:(0,P.jsx)(U,{title:"Unknown",active:k,badgeNumber:A.length}),children:(0,P.jsx)(E,{components:A})})]}):(0,P.jsx)(P.Fragment,{children:"Geen resultaten gevonden."})},E=e=>{let{components:n}=e;return(0,P.jsx)("div",{className:"ComponentCardsAccordionTemplate-module--ComponentsGrid--ae575",children:n.map((e=>{var n,l,o,t,a,d,r,s,i,c,u,m,p,v,g,h,j,f,x,T,y,C;return(0,P.jsx)(b.L,{title:{label:e.name,href:`/components/${null!==(n=e.id)&&void 0!==n?n:e._self.id}`},description:null===(l=e.embedded)||void 0===l||null===(o=l.description)||void 0===o?void 0:o.shortDescription,layer:null!==(t=null===(a=e.embedded)||void 0===a||null===(d=a.nl)||void 0===d||null===(r=d.embedded)||void 0===r||null===(s=r.commonground)||void 0===s?void 0:s.layerType)&&void 0!==t?t:"Unknown",categories:e.categories,tags:{status:e.developmentStatus,installations:null!==(i=null===(c=e.usedBy)||void 0===c?void 0:c.length.toString())&&void 0!==i?i:"0",organization:{name:null===(u=e.embedded)||void 0===u||null===(m=u.url)||void 0===m||null===(p=m.embedded)||void 0===p||null===(v=p.organisation)||void 0===v?void 0:v.name,website:null===(g=e.embedded)||void 0===g||null===(h=g.url)||void 0===h||null===(j=h.embedded)||void 0===j||null===(f=j.organisation)||void 0===f?void 0:f.website},licence:null===(x=e.embedded)||void 0===x||null===(T=x.legal)||void 0===T?void 0:T.license,githubLink:null===(y=e.embedded)||void 0===y||null===(C=y.url)||void 0===C?void 0:C.url}},e.id)}))})}},245:function(e,n,l){l.d(n,{p:function(){return Y}});var o={};l.r(o),l.d(o,{dataCategory:function(){return s},dataLayer:function(){return i},detailsLink:function(){return c},icon:function(){return u},integrationCategory:function(){return m},integrationLayer:function(){return p},interactionCategory:function(){return v},interactionLayer:function(){return b},interfaceCategory:function(){return g},interfaceLayer:function(){return h},name:function(){return j},procesCategory:function(){return f},processCategory:function(){return x},processLayer:function(){return T},processsLayer:function(){return y},serviceCategory:function(){return C},serviceLayer:function(){return N},servicesCategory:function(){return w},servicesLayer:function(){return k},table:function(){return L},tableBody:function(){return R},tableHeader:function(){return O},tableRow:function(){return B},tagWidth:function(){return _},unknownCategory:function(){return S},unknownLayer:function(){return A}});var t=l(8929),a=l.n(t),d=l(1700),r=l.n(d),s="TableResultTemplate-module--dataCategory--3b1ef",i="TableResultTemplate-module--dataLayer--08c4e",c="TableResultTemplate-module--detailsLink--5c419",u="TableResultTemplate-module--icon--3748e",m="TableResultTemplate-module--integrationCategory--c30df",p="TableResultTemplate-module--integrationLayer--d5e43",v="TableResultTemplate-module--interactionCategory--33b43",b="TableResultTemplate-module--interactionLayer--e787a",g="TableResultTemplate-module--interfaceCategory--1f672",h="TableResultTemplate-module--interfaceLayer--eaa6a",j="TableResultTemplate-module--name--6b85e",f="TableResultTemplate-module--procesCategory--5a2fc",x="TableResultTemplate-module--processCategory--50b3a",T="TableResultTemplate-module--processLayer--359ae",y="TableResultTemplate-module--processsLayer--150d4",C="TableResultTemplate-module--serviceCategory--1a87c",N="TableResultTemplate-module--serviceLayer--19304",w="TableResultTemplate-module--servicesCategory--cf685",k="TableResultTemplate-module--servicesLayer--5d508",L="TableResultTemplate-module--table--791de",R="TableResultTemplate-module--tableBody--52900",O="TableResultTemplate-module--tableHeader--b84bb",B="TableResultTemplate-module--tableRow--c2558",_="TableResultTemplate-module--tagWidth--3c99e",S="TableResultTemplate-module--unknownCategory--a3e85",A="TableResultTemplate-module--unknownLayer--0c621",W=l(1800),H=l(1082),I=l(5019),z=l(6505),D=l(5505),Z=l(7882);var $=l(7606),G=l(3168),P=l(6052);const U=e=>{switch(e){case"Concept":case"Development":case"Beta":return"warning";case"Bruikbaar":case"Stable":return"safe";case"Obsolete":return"danger";default:return""}};var F=l(734),V=l(5893);const E=e=>{let{components:n,hideTableHead:l}=e;const{t:t}=(0,I.$)();return(0,V.jsx)(F.QZ,{ariaLabels:{scrollLeftButton:t("Scroll left"),scrollRightButton:t("Scroll right")},children:(0,V.jsxs)(W.iA,{className:L,children:[!l&&(0,V.jsx)(W.xD,{className:O,children:(0,V.jsxs)(W.SC,{children:[(0,V.jsx)(W.xs,{children:t("Name")}),(0,V.jsx)(W.xs,{children:t("Type")}),(0,V.jsx)(W.xs,{children:t("Layer")}),(0,V.jsx)(W.xs,{children:t("Sources")}),(0,V.jsx)(W.xs,{children:t("Software type")}),(0,V.jsx)(W.xs,{children:t("Status")}),(0,V.jsx)(W.xD,{})]})}),(0,V.jsxs)(W.RM,{className:R,children:[n.length>0&&n.map((e=>{var n,l,d,s,i,m,p,v,b,g,h,f,x,T,y,C,N,w,k,L;return(0,V.jsxs)(W.SC,{className:B,onClick:()=>{var n;return(0,H.c4)(`/${(0,Z.J)(null===(n=e._self)||void 0===n?void 0:n.schema.ref)}/${e.id}`)},children:[(0,V.jsx)(W.pj,{children:(0,V.jsx)("span",{className:j,children:e.name})}),(0,V.jsx)(W.pj,{children:t(r()((L=null===(n=e._self)||void 0===n?void 0:n.schema.ref,L.includes("organisation.schema.json")?"Organization":L.includes("component.schema.json")?"Component":L.includes("application.schema.json")?"Application":L.includes("contacts.schema.json")?"Contact":L.includes("componentlegalentity.schema.json")?"Component legal Entity":L.includes("catalogi.schema.json")?"Catalogi":void 0)))}),(0,V.jsx)(W.pj,{children:(0,V.jsx)("div",{className:(0,D.Z)(o[a()(t(`${null!==(l=e._self.schema.ref.includes("component.schema.json")&&(null===(d=e.embedded)||void 0===d||null===(s=d.nl)||void 0===s||null===(i=s.embedded)||void 0===i||null===(m=i.commonground)||void 0===m?void 0:m.layerType))&&void 0!==l?l:"Unknown"} layer`))]),children:(0,V.jsxs)(W.Ou,{"data-tooltip-id":P.TOOLTIP_ID,"data-tooltip-content":t("Layer"),className:_,children:[(0,V.jsx)($.G,{icon:G.Krp})," ",t(r()(e._self.schema.ref.includes("component.schema.json")?null!==(p=null===(v=e.embedded)||void 0===v||null===(b=v.nl)||void 0===b||null===(g=b.embedded)||void 0===g?void 0:g.commonground.layerType)&&void 0!==p?p:t("Unknown"):"N.V.T."))]})})}),(0,V.jsx)(W.pj,{children:(0,V.jsx)(W.Ou,{"data-tooltip-id":P.TOOLTIP_ID,"data-tooltip-content":t("Sources"),className:_,children:r()(null!==(h=e._self)&&void 0!==h&&h.synchronizations?null!==(f=e._self)&&void 0!==f&&null!==(x=f.synchronizations)&&void 0!==x&&x.length?null===(T=e._self)||void 0===T||null===(y=T.synchronizations)||void 0===y||null===(C=y.at(-1))||void 0===C?void 0:C.source.name:"Onbekend":"N.V.T.")})}),(0,V.jsx)(W.pj,{children:(0,V.jsx)(W.Ou,{"data-tooltip-id":P.TOOLTIP_ID,"data-tooltip-content":"Component Type",children:r()(e._self.schema.ref.includes("component.schema.json")?null!==(N=e.softwareType)&&void 0!==N?N:"Onbekend":"N.V.T.")})}),(0,V.jsx)(W.pj,{children:(0,V.jsx)(W.OE,{"data-tooltip-id":P.TOOLTIP_ID,"data-tooltip-content":"Status",status:U(null!==(w=r()(e.developmentStatus))&&void 0!==w?w:"Onbekend"),className:_,children:e._self.schema.ref.includes("component.schema.json")?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)("span",{className:u,children:(0,V.jsx)($.G,{icon:G.sqG})}),r()(null!==(k=e.developmentStatus)&&void 0!==k?k:"Onbekend")]}):"N.V.T."})}),(0,V.jsx)(W.pj,{children:(0,V.jsxs)(W.rU,{onClick:()=>{var n,l;return(0,H.c4)(`/${(0,Z.J)(null===(n=e._self)||void 0===n||null===(l=n.schema)||void 0===l?void 0:l.ref)}/${e.id}`)},className:c,children:[(0,V.jsx)(W.JO,{children:(0,V.jsx)(z.Z,{})}),t("Details")]})})]},e.id)})),!n.length&&(0,V.jsxs)(W.SC,{children:[(0,V.jsx)(W.pj,{children:t("Geen resultaten gevonden")}),(0,V.jsx)(W.pj,{}),(0,V.jsx)(W.pj,{}),(0,V.jsx)(W.pj,{}),(0,V.jsx)(W.pj,{}),(0,V.jsx)(W.pj,{}),(0,V.jsx)(W.pj,{})]})]})]})})};var J=l(4327),K=l(3417),q=l(1370);const M=e=>{let{components:n}=e;const l=n.filter((e=>e._self));return l.every((e=>!e._self.schema.ref.includes("component.schema.json")&&!e._self.schema.ref.includes("organisation.schema.json")&&!e._self.schema.ref.includes("application.schema.json")))?(0,V.jsx)(W.nv,{children:"Geen resultaten gevonden."}):(0,V.jsx)("div",{className:"CardsResultTemplate-module--ComponentsGrid--46d3c",children:l.map((e=>{var n,l,o,t,a,d,r,s,i,c,u,m,p,v,b,g,h,j,f,x,T,y,C,N,w,k;return(0,V.jsxs)(V.Fragment,{children:[e._self.schema.ref.includes("organisation.schema.json")&&(0,V.jsx)(K.$,{title:{label:e.name,href:`/organizations/${e.id}`},description:e.description,website:e.website,logo:e.logo,components:{owned:null!==(n=null===(l=e.owns)||void 0===l?void 0:l.length.toString())&&void 0!==n?n:"0",supported:null!==(o=null===(t=e.supports)||void 0===t?void 0:t.length.toString())&&void 0!==o?o:"0",used:null!==(a=null===(d=e.uses)||void 0===d?void 0:d.length.toString())&&void 0!==a?a:"0"},gitHub:e.github,gitLab:e.gitlab,type:e.type}),e._self.schema.ref.includes("component.schema.json")&&(0,V.jsx)(J.L,{title:{label:e.name,href:`/components/${e.id}`},description:null===(r=e.embedded.description)||void 0===r?void 0:r.shortDescription,layer:null!==(s=null===(i=e.embedded.nl)||void 0===i||null===(c=i.embedded)||void 0===c||null===(u=c.commonground)||void 0===u?void 0:u.layerType)&&void 0!==s?s:"Unknown",categories:e.categories,tags:{status:e.developmentStatus,installations:null!==(m=null===(p=e.usedBy)||void 0===p?void 0:p.length.toString())&&void 0!==m?m:"0",organization:{name:null===(v=e.embedded)||void 0===v||null===(b=v.url)||void 0===b||null===(g=b.embedded)||void 0===g||null===(h=g.organisation)||void 0===h?void 0:h.name,website:null===(j=e.embedded)||void 0===j||null===(f=j.url)||void 0===f||null===(x=f.embedded)||void 0===x||null===(T=x.organisation)||void 0===T?void 0:T.website},licence:null===(y=e.embedded)||void 0===y||null===(C=y.legal)||void 0===C?void 0:C.license,githubLink:null===(N=e.embedded)||void 0===N||null===(w=N.url)||void 0===w?void 0:w.url}},e.id),e._self.schema.ref.includes("application.schema.json")&&(0,V.jsx)(q.w,{title:{label:e.name,href:`/applications/${e.id}`},description:e.shortDescription,tags:{organization:null==e||null===(k=e.embedded)||void 0===k?void 0:k.owner.fullName,githubLink:null==e?void 0:e.demoUrl}},e.id)]})}))})};var Q=l(3760);const X=e=>{let{components:n}=e;const l=n.filter((e=>e._self.schema.ref.includes("component.schema.json")));return(0,V.jsx)(Q.A,{components:l})},Y=e=>{let{components:n,type:l}=e;switch(l){case"table":return(0,V.jsx)(E,{components:n});case"cards":return(0,V.jsx)(M,{components:n});case"layer":return(0,V.jsx)(X,{components:n})}}}}]);
//# sourceMappingURL=6cf082646fc02a7572ed7969eb3677e973ce7868-c6f3c27019549c33c57d.js.map