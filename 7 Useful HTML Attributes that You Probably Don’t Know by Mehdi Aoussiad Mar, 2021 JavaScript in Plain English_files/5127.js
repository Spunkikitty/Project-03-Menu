(self.webpackChunklite=self.webpackChunklite||[]).push([[5127],{47578:(e,t,n)=>{"use strict";n.d(t,{Vy:()=>r,KQ:()=>u,VT:()=>s,uI:()=>m,ne:()=>f});var r,o=n(28655),a=n.n(o),i=n(71439);function l(){var e=a()(["\n  fragment optimizelyData_post on Post {\n    creator {\n      name\n    }\n    collection {\n      name\n    }\n    primaryTopic {\n      name\n    }\n  }\n"]);return l=function(){return e},e}!function(e){e.TopicSelected="TopicSelected",e.UserConvertedToTrialMember="UserConvertedToTrialMember",e.UserConvertedToMember="userConvertedToMember"}(r||(r={}));var c=function(){return"undefined"!=typeof window},u=function(e,t,n){var r=e.post;if(c()){c()&&(window.optimizelyDataObject={});var o=r||{},a=o.creator,i=o.collection,l=o.primaryTopic;a&&a.name&&(window.optimizelyDataObject.author=a.name),i&&i.name&&(window.optimizelyDataObject.publication=i.name),l&&l.name&&(window.optimizelyDataObject.topic=l.name),t&&(window.optimizelyDataObject.firstName=t),n&&(window.optimizelyDataObject.trialRenewalDate=n)}},s=function(e){c()&&void 0!==window.optimizely&&window.optimizely.push({type:"event",eventName:e})},m=function(e,t){c()&&(window.optimizelyDataObject=window.optimizelyDataObject||{},window.optimizelyDataObject.variants=window.optimizelyDataObject.variants||{},window.optimizelyDataObject.variants[e]=t)},f=(0,i.Ps)(l())},55127:(e,t,n)=>{"use strict";n.d(t,{z:()=>ee});var r=n(319),o=n.n(r),a=n(67154),i=n.n(a),l=n(63038),c=n.n(l),u=n(59713),s=n.n(u),m=n(67294),f=n(60046),d=n(43689),p=n(56862),b=n(47578),y=n(28655),v=n.n(y),g=n(71439),h=n(51562),w=n(83484),S=n(55014),E=n(78820),x=n(34675),k=n(62181),_=n(22091),M=n(67297);function D(){var e=v()(["\n  fragment StickyMetaDesktopActions_customStyleSheet on CustomStyleSheet {\n    id\n    ...MetaHeaderEngagement_customStyleSheet\n    ...MetaHeaderLogo_customStyleSheet\n    header {\n      headerScale\n    }\n  }\n  ","\n  ","\n"]);return D=function(){return e},e}function C(){var e=v()(["\n  fragment StickyMetaDesktopActions_publisher on Publisher {\n    __typename\n    id\n    name\n    ...MetaHeaderLogo_publisher\n    ...MetaHeaderEngagement_publisher\n  }\n  ","\n  ","\n"]);return C=function(){return e},e}var O=function(e){var t=e.publisher,n=e.customStyleSheet,r=(0,x.Hk)().value,o=(0,M.v9)((function(e){return e.config.authDomain})),a="".concat((0,E.Zu)(t)," Homepage"),i=(0,E.PB)(t,o);return m.createElement(_.xu,{display:"flex",alignItems:"center",flexGrow:"1",justifyContent:"space-between",flexDirection:"row",sm:{display:"none"}},!r&&m.createElement(m.Fragment,null,m.createElement(_.xu,{display:"inline-flex",alignItems:"center",justifyContent:"flex-start"},m.createElement(_.xu,{paddingRight:"24px"},m.createElement(p.Z,{href:i,ariaLabel:a},m.createElement(S.fI,{publisher:t,customStyleSheet:n,withTextColorSubtle:!1,forceSmall:!0}))),m.createElement(w.i_,{customStyleSheet:n,followersLinkInFront:!1,publisher:t})),m.createElement(_.xu,{display:"flex",alignItems:"flex-end",paddingRight:"24px"},m.createElement(h.W,{featureString:"lo-sticky-header",target:"sign-up-button"},m.createElement(k.R9,{buttonSize:"REGULAR",buttonStyle:"OBVIOUS",isButton:!0,operation:"register",susiEntry:"nav_reg"},"Get started")))))},z=((0,g.Ps)(C(),w.QP,S.XN),(0,g.Ps)(D(),w.Al,S.Ig),n(6401));function A(){var e=v()(["\n  fragment StickyMetaMobileActions_publisher on Publisher {\n    __typename\n    ... on Collection {\n      slug\n      ...StickyMetaMobileActions_collection\n    }\n    ... on User {\n      username\n      id\n    }\n  }\n  ","\n"]);return A=function(){return e},e}function I(){var e=v()(["\n  fragment StickyMetaMobileActions_post on Post {\n    id\n    collection {\n      ...StickyMetaMobileActions_collection\n    }\n    pendingCollection {\n      ...StickyMetaMobileActions_collection\n    }\n  }\n  ","\n"]);return I=function(){return e},e}function j(){var e=v()(["\n  fragment StickyMetaMobileActions_collection on Collection {\n    id\n    viewerIsEditor\n    creator {\n      id\n    }\n  }\n"]);return j=function(){return e},e}var P=function(e){var t=e.post,n=e.publisher,r=(0,x.Hk)().value,o="Collection"===(null==n?void 0:n.__typename)?n.slug:void 0,a="User"===(null==n?void 0:n.__typename)?n.username:null;return m.createElement(_.xu,{display:"none",sm:{display:"flex",alignItems:"center",flexGrow:"1"}},!r&&m.createElement(h.W,{featureString:"lo-sticky-header",target:"sign-up-button"},m.createElement(k.R9,{buttonSize:"REGULAR",buttonStyle:"OBVIOUS",isButton:!0,operation:"register",susiEntry:"nav_reg"},"Get started")),m.createElement(z.a,{collectionSlug:o,postId:null==t?void 0:t.id,removeSpacing:!!r,username:a}))},T=(0,g.Ps)(j()),L=((0,g.Ps)(I(),T),(0,g.Ps)(A(),T),n(65849)),U=n(85740),R=n(62630),H=n(28309),N=n(72955),V=n(14391),B=n(80637),Y=n(89349),G=n(74465),Z=n(41996),J=n(82482);function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=Object.values(Z.j),W=n(27952),Q=function(e,t,n,r,o){return function(a){var i;return i={},s()(i,B.sm(a),{borderTop:"1px solid ".concat(a.baseColor.border.lighter),borderBottom:"1px solid ".concat(a.baseColor.border.lighter)}),s()(i,"borderTop",o?"1px solid ".concat(a.baseColor.border.lighter):"none"),s()(i,"borderBottom",o?"1px solid ".concat(a.baseColor.border.lighter):"none"),s()(i,"backgroundColor",a.backgroundColor),s()(i,"left","0"),s()(i,"opacity",e?1:0),s()(i,"position","fixed"),s()(i,"right","0"),s()(i,"top","0"),s()(i,"visibility",t?"hidden":"visible"),s()(i,"zIndex","".concat(G.ZP.metabar)),s()(i,(0,Y.nk)("no-preference"),{animation:"".concat(e?n:r," .2s ease-in-out both")}),i}},q={"0%":{opacity:"0",transform:"translateY(-60px)"},"100%":{opacity:"1",transform:"translateY(0px)"}},X={"0%":{opacity:"1",transform:"translateY(0px)"},"100%":{opacity:"0",transform:"translateY(-60px)"}},$=function(e){var t=e.enabledOnDesktop,n=e.headerScale,r=e.post,o=e.publisher,a=e.variantLoaded,l=(0,M.v9)((function(e){return e.config.authDomain})),u=(0,H.Iq)(),s=m.useState(!1),y=c()(s,2),v=y[0],g=y[1],h=m.useState(!0),w=c()(h,2),S=w[0],E=w[1],k=(0,H.om)({slideDownKeyframesName:q}).slideDownKeyframesName,D=(0,H.om)({slideUpKeyframesName:X}).slideUpKeyframesName,C=(0,L.jb)(),z=(0,R.Av)(),A=(0,x.Hk)().value,I=function(){var e=(0,H.Fg)(),t=m.useCallback((function(){if("undefined"!=typeof window&&window.matchMedia){var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}(F);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(window.matchMedia(J[r](e).replace("@media all and ","")).matches)return r}}catch(e){n.e(e)}finally{n.f()}}}),[e]),n=m.useState((function(){return t()})),r=c()(n,2),o=r[0],a=r[1];return m.useEffect((function(){var e=function(){a(t())};return N.V6.on("resize",e),function(){return N.V6.off("resize",e)}}),[]),o}(),j=(n||C.headerScale)===V.w6.HEADER_SCALE_SMALL;return m.useEffect((function(){["md","lg","xl"].includes(I||"")&&z.event("experiment.eligible",{experimentId:"ca24bb15e06f"})}),[I]),m.useEffect((function(){a&&(0,b.uI)("enableDesktopAuroraStickyNav",t)}),[t,a]),m.useEffect((function(){var e;N.V6.on("scroll_down",(function(){e=j?d.Je+160:d.Je+230,window.pageYOffset>e&&(g(!0),E(!1))})),N.V6.on("scroll_up",(function(){e=j?d.Je+160:d.Je+230,window.pageYOffset<=e&&g(!1)}))})),m.createElement("div",{className:u(Q(v,S,k,D,t&&!A&&v))},m.createElement(_.Pm,{size:"outset"},m.createElement(_.xu,i()({sm:{display:"flex",alignItems:"center"},height:"60px",top:"0",width:"100%",zIndex:G.ZP.metabar},t&&!A?{display:"flex",alignItems:"center"}:{display:"none"}),m.createElement(P,{post:r,publisher:o}),t&&m.createElement(O,{publisher:o}),m.createElement(p.Z,{href:(0,W.cWJ)(l),ariaLabel:"Homepage"},m.createElement(f.YR,null)))))},ee=function(e){var t=m.useCallback((function(){return m.createElement($,i()({},e,{enabledOnDesktop:!1,variantLoaded:!1}))}),o()(Object.values(e)));return m.createElement(U.bZ,{name:"enable_desktop_aurora_sticky_nav",placeholder:t},(function(t){return m.createElement($,i()({},e,{enabledOnDesktop:!!t,variantLoaded:!0}))}))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5127.59840da2.chunk.js.map