(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[11],{1253:function(e,t,n){var c=n(507),r=n(491),a=n(254),o=n(101),i=n(189),s=n(316),l=n(318),u=n(317),b=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(i(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||u(e)||a(e)))return!e.length;var t=r(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!c(e).length;for(var n in e)if(b.call(e,n))return!1;return!0}},1553:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(17),i=n(3),s=n.n(i),l=n(5),u=n(12),b=n(8),j=n(0),d=n(2),x=n(80),p=n(86),h=n(40),O=n(818),f=n.n(O),m=n(1253),g=n.n(m),v=n(98),y=n(47),k=n(100),w=n(22),B=n(36),C=n(371),T=n(196),S=n(13),D=n(247),P=n(450),A=n(121),I=n(953),M=n(806),L=n(902),z=n(7),Y=n(4),E=n(1),F=Y.e.label(c||(c=Object(z.a)(["\n  color: ",";\n  display: block;\n  font-weight: 600;\n  margin-bottom: 8px;\n"])),(function(e){return e.theme.colors.text})),H=Object(Y.e)(F)(r||(r=Object(z.a)(["\n  font-size: 20px;\n"]))),V=Object(Y.e)(F)(a||(a=Object(z.a)(["\n  font-size: 12px;\n  text-transform: uppercase;\n"]))),X=function(e){var t=e.children;return Object(E.jsx)(d.nc,{color:"failure",mb:"4px",children:t})},q=function(e){var t=e.errors;return Object(E.jsx)(d.m,{mt:"8px",children:t.map((function(e){return Object(E.jsx)(X,{children:e},e)}))})},N=n(31),G=n(226),J=n.n(G),R=n(50),Z=["onRemove","onTextInput"],W=function(e){var t=e.onRemove,n=e.onTextInput,c=Object(R.a)(e,Z),r=Object(j.useState)(!1),a=Object(b.a)(r,2),o=a[0],i=a[1],s=Object(j.useState)(!1),u=Object(b.a)(s,2),x=u[0],p=u[1];return Object(E.jsxs)(d.m,{position:"relative",mb:"16px",children:[Object(E.jsx)(d.fb,Object(l.a)(Object(l.a)({},c),{},{onChange:function(e){var t=e.currentTarget.value;i(x&&0===t.length),p(!0),n(t)},isWarning:o})),t&&Object(E.jsx)(d.m,{position:"absolute",right:"8px",top:"0px",zIndex:30,children:Object(E.jsx)(d.cb,{variant:"text",onClick:t,children:Object(E.jsx)(d.L,{})})})]})},U=function(){return{id:J()(),value:""}},K=function(e){var t=e.choices,n=e.onChange,c=Object(S.b)().t,r=t.filter((function(e){return e.value.length>0})).length>=2;return Object(E.jsxs)(d.u,{children:[Object(E.jsx)(d.x,{children:Object(E.jsx)(d.Z,{as:"h3",scale:"md",children:c("Choices")})}),Object(E.jsxs)(d.v,{children:[t.map((function(e,r){var a=e.id,o=e.value;return Object(E.jsx)(W,{scale:"lg",onTextInput:function(e){var c=Object(N.a)(t),r=c.findIndex((function(e){return e.id===a}));c[r].value=e,n(c)},placeholder:c("Input choice text"),value:o,onRemove:r>1?function(){n(t.filter((function(e){return e.id!==a})))}:void 0},a)})),Object(E.jsx)(d.q,{type:"button",onClick:function(){n([].concat(Object(N.a)(t),[U()]))},disabled:!r,children:c("Add Choice")})]})]})},Q=n(350),_=n(772),$=n(746),ee=function(e,t){if(!Object(Q.default)(e)||!Object(Q.default)(t))return null;var n=Object(_.default)(e,"yyyy-MM-dd"),c=Object(_.default)(t,"HH:mm:ss");return Object($.default)("".concat(n,"T").concat(c)).getTime()/1e3},te=n(810),ne=n(97),ce=n(904),re=n(903),ae=function(e){var t=e.block,n=e.onDismiss,c=Object(S.b)().t,r=Object(j.useState)(!0),a=Object(b.a)(r,2),o=a[0],i=a[1],s=Object(ce.a)(t,o),l=s.isLoading,u=s.total,x=s.cakeBalance,p=s.cakeVaultBalance,h=s.cakePoolBalance,O=s.poolsBalance,f=s.cakeBnbLpBalance,m=Object(ne.a)().theme;return Object(E.jsx)(d.wb,{title:c("Voting Power"),onDismiss:function(){i(!1),n()},headerBackground:m.colors.gradients.cardHeader,children:Object(E.jsx)(d.m,{mb:"24px",width:"320px",children:l?Object(E.jsx)(d.X,{height:"450px",alignItems:"center",justifyContent:"center",children:Object(E.jsx)(d.Xb,{size:80})}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(re.a,{total:u,cakeBalance:x,cakeVaultBalance:p,cakePoolBalance:h,poolsBalance:O,cakeBnbLpBalance:f}),Object(E.jsx)(d.q,{variant:"secondary",onClick:n,width:"100%",mt:"16px",children:c("Close")})]})})})},oe=Object(j.lazy)((function(){return Promise.all([n.e(7),n.e(22)]).then(n.bind(null,1536))}));t.default=function(){var e=Object(j.useState)({name:"",body:"",choices:f()(2).map(U),startDate:null,startTime:null,endDate:null,endTime:null,snapshot:0}),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(j.useState)(!1),a=Object(b.a)(r,2),i=a[0],O=a[1],m=Object(j.useState)({}),z=Object(b.a)(m,2),Y=z[0],F=z[1],X=Object(S.b)().t,G=Object(h.c)().account,J=Object(v.b)(),R=Object(x.g)().push,Z=Object(w.a)().library,W=Object(k.a)(),_=W.toastSuccess,$=W.toastError,ne=Object(d.Kc)(Object(E.jsx)(ae,{block:n.snapshot})),ce=Object(b.a)(ne,1)[0],re=n.name,ie=n.body,se=n.choices,le=n.startDate,ue=n.startTime,be=n.endDate,je=n.endTime,de=n.snapshot,xe=function(e,t){var n=e.name,c=e.body,r=e.choices,a=e.startDate,o=e.startTime,i=e.endDate,s=e.endTime,l=e.snapshot,u={};n||(u.name=[t("%field% is required",{field:"Title"})]),c||(u.body=[t("%field% is required",{field:"Body"})]),r.length<2&&(u.choices=[t("Please create a minimum of %num% choices",{num:2})]);var b=r.some((function(e){return!e.value}));2===r.length&&b&&(u.choices=Array.isArray(u.choices)?[].concat(Object(N.a)(u.choices),[t("Choices must not be empty")]):u.choices=[t("Choices must not be empty")]),Object(Q.default)(a)||(u.startDate=[t("Please select a valid date")]),Object(Q.default)(o)||(u.startTime=[t("Please select a valid time")]),Object(Q.default)(i)||(u.endDate=[t("Please select a valid date")]),Object(Q.default)(s)||(u.endTime=[t("Please select a valid time")]);var j=ee(a,o);return ee(i,s)<j&&(u.endDate=Array.isArray(u.endDate)?[].concat(Object(N.a)(u.endDate),[t("End date must be after the start date")]):u.endDate=[t("End date must be after the start date")]),0===l&&(u.snapshot=[t("Invalid snapshot")]),u}(n,X),pe=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,c,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,O(!0),n=JSON.stringify(Object(l.a)(Object(l.a)({},Object(M.e)()),{},{type:y.g.PROPOSAL,payload:{name:re,body:ie,snapshot:de,start:ee(le,ue),end:ee(be,je),choices:se.filter((function(e){return e.value})).map((function(e){return e.value})),metadata:Object(M.d)(),type:"single-choice"}})),e.next=6,Object(T.c)(Z,G,n);case 6:if(!(c=e.sent)){e.next=16;break}return r={address:G,msg:n,sig:c},e.next=11,Object(M.i)(r);case 11:a=e.sent,R("/voting/proposal/".concat(a.ipfsHash)),_(X("Proposal created!")),e.next=17;break;case 16:$(X("Error"),X("Unable to sign payload"));case 17:e.next=24;break;case 19:e.prev=19,e.t0=e.catch(1),$(X("Error"),(null===e.t0||void 0===e.t0?void 0:e.t0.message)||(null===e.t0||void 0===e.t0?void 0:e.t0.error)),console.error(e.t0),O(!1);case 24:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}(),he=function(e,t){c((function(n){return Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},e,t))})),F((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(o.a)({},e,!0))}))},Oe=function(e){return function(t){he(e,t)}},fe=Object(j.useMemo)((function(){return{hideIcons:G===te.a?[]:["guide","fullscreen","preview","side-by-side","image"]}}),[G]);return Object(j.useEffect)((function(){J>0&&c((function(e){return Object(l.a)(Object(l.a)({},e),{},{snapshot:J})}))}),[J,c]),Object(E.jsxs)(D.a,{py:"40px",children:[Object(E.jsx)(d.m,{mb:"48px",children:Object(E.jsxs)(d.n,{children:[Object(E.jsx)(p.a,{to:"/",children:X("Home")}),Object(E.jsx)(p.a,{to:"/voting",children:X("Voting")}),Object(E.jsx)(d.nc,{children:X("Make a Proposal")})]})}),Object(E.jsx)("form",{onSubmit:pe,children:Object(E.jsxs)(L.a,{children:[Object(E.jsxs)(d.m,{children:[Object(E.jsxs)(d.m,{mb:"24px",children:[Object(E.jsx)(H,{htmlFor:"name",children:X("Title")}),Object(E.jsx)(d.fb,{id:"name",name:"name",value:re,scale:"lg",onChange:function(e){var t=e.currentTarget,n=t.name,c=t.value;he(n,c)},required:!0}),xe.name&&Y.name&&Object(E.jsx)(q,{errors:xe.name})]}),Object(E.jsxs)(d.m,{mb:"24px",children:[Object(E.jsx)(H,{htmlFor:"body",children:X("Content")}),Object(E.jsx)(d.nc,{color:"textSubtle",mb:"8px",children:X("Tip: write in Markdown!")}),Object(E.jsx)(oe,{id:"body",name:"body",onTextChange:function(e){he("body",e)},value:ie,options:fe,required:!0}),xe.body&&Y.body&&Object(E.jsx)(q,{errors:xe.body})]}),ie&&Object(E.jsx)(d.m,{mb:"24px",children:Object(E.jsxs)(d.u,{children:[Object(E.jsx)(d.x,{children:Object(E.jsx)(d.Z,{as:"h3",scale:"md",children:X("Preview")})}),Object(E.jsx)(d.v,{p:"0",px:"24px",children:Object(E.jsx)(I.a,{children:ie})})]})}),Object(E.jsx)(K,{choices:se,onChange:function(e){he("choices",e)}}),xe.choices&&Y.choices&&Object(E.jsx)(q,{errors:xe.choices})]}),Object(E.jsx)(d.m,{children:Object(E.jsxs)(d.u,{children:[Object(E.jsx)(d.x,{children:Object(E.jsx)(d.Z,{as:"h3",scale:"md",children:X("Actions")})}),Object(E.jsxs)(d.v,{children:[Object(E.jsxs)(d.m,{mb:"24px",children:[Object(E.jsx)(V,{children:X("Start Date")}),Object(E.jsx)(P.a,{name:"startDate",onChange:Oe("startDate"),selected:le,placeholderText:"YYYY/MM/DD"}),xe.startDate&&Y.startDate&&Object(E.jsx)(q,{errors:xe.startDate})]}),Object(E.jsxs)(d.m,{mb:"24px",children:[Object(E.jsx)(V,{children:X("Start Time")}),Object(E.jsx)(P.c,{name:"startTime",onChange:Oe("startTime"),selected:ue,placeholderText:"00:00"}),xe.startTime&&Y.startTime&&Object(E.jsx)(q,{errors:xe.startTime})]}),Object(E.jsxs)(d.m,{mb:"24px",children:[Object(E.jsx)(V,{children:X("End Date")}),Object(E.jsx)(P.a,{name:"endDate",onChange:Oe("endDate"),selected:be,placeholderText:"YYYY/MM/DD"}),xe.endDate&&Y.endDate&&Object(E.jsx)(q,{errors:xe.endDate})]}),Object(E.jsxs)(d.m,{mb:"24px",children:[Object(E.jsx)(V,{children:X("End Time")}),Object(E.jsx)(P.c,{name:"endTime",onChange:Oe("endTime"),selected:je,placeholderText:"00:00"}),xe.endTime&&Y.endTime&&Object(E.jsx)(q,{errors:xe.endTime})]}),G&&Object(E.jsxs)(d.X,{alignItems:"center",mb:"8px",children:[Object(E.jsx)(d.nc,{color:"textSubtle",mr:"16px",children:X("Creator")}),Object(E.jsx)(d.jb,{href:Object(B.e)(G,"address"),children:Object(C.a)(G)})]}),Object(E.jsxs)(d.X,{alignItems:"center",mb:"16px",children:[Object(E.jsx)(d.nc,{color:"textSubtle",mr:"16px",children:X("Snapshot")}),Object(E.jsx)(d.jb,{href:Object(B.e)(de,"block"),children:de})]}),G?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(d.q,{type:"submit",width:"100%",isLoading:i,endIcon:i?Object(E.jsx)(d.i,{spin:!0,color:"currentColor"}):null,disabled:!g()(xe),mb:"16px",children:X("Publish")}),Object(E.jsxs)(d.nc,{color:"failure",as:"p",mb:"4px",children:[X("You need at least %count% voting power to publish a proposal.",{count:te.f})," "]}),Object(E.jsx)(d.q,{scale:"sm",type:"button",variant:"text",onClick:ce,p:0,children:X("Check voting power")})]}):Object(E.jsx)(A.a,{width:"100%",type:"button"})]})]})})]})})]})}},806:function(e,t,n){"use strict";n.d(t,"h",(function(){return O})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"i",(function(){return y})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return w})),n.d(t,"f",(function(){return B}));var c=n(17),r=n(31),a=n(5),o=n(3),i=n.n(o),s=n(12),l=n(14),u=n.n(l),b=n(20),j=n(95),d=n(29),x=n(47),p=n(96),h=n(810),O=function(e){return e.author.toLowerCase()===h.a.toLowerCase()},f=function(e,t){switch(t){case x.f.COMMUNITY:return e.filter((function(e){return!O(e)}));case x.f.CORE:return e.filter((function(e){return O(e)}));case x.f.ALL:default:return e}},m=function(e,t){return e.filter((function(e){return e.state===t}))},g=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"MAGIC",address:Object(b.g)(),decimals:18}}]}},v=function(){return{version:h.e,timestamp:(Date.now()/1e3).toFixed(),space:h.c}},y=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j.h,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(i.a.mark((function e(t,n,c){var r,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,p.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(j.i,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return a=e.sent,e.next=11,a.json();case 11:return o=e.sent,e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),w=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},B=function(e){return e.reduce((function(e,t){var n,c=new u.a(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return e.plus(c)}),d.c)}},810:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s}));var c=10,r="0x6eaf1b33b8672c5dc40aB8f4bA3A0111723126c7",a="https://gateway.ipfs.io/ipfs",o="0.1.3",i="cake.eth",s=10},872:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var c,r=n(5),a=n(7),o=(n(0),n(2)),i=n(4),s=n(1),l=i.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 12px;\n  display: flex;\n  height: 64px;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  padding: 0 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),u=function(e){return Object(s.jsx)(o.m,Object(r.a)({mb:"24px",maxWidth:"320px"},e))}},902:function(e,t,n){"use strict";var c,r=n(7),a=n(4).e.div(c||(c=Object(r.a)(["\n  align-items: start;\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: minmax(0, 1fr);\n\n  "," {\n    grid-template-columns: 1fr 332px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg}));t.a=a},903:function(e,t,n){"use strict";n(0);var c=n(2),r=n(13),a=n(872),o=n(1);t.a=function(e){var t=e.total,n=e.cakeBalance,i=e.cakeVaultBalance,s=e.cakePoolBalance,l=e.poolsBalance,u=e.cakeBnbLpBalance,b=Object(r.b)().t;return Object(o.jsxs)(a.a,{mb:"0",children:[Object(o.jsx)(c.nc,{as:"p",mb:"24px",fontSize:"14px",color:"textSubtle",children:b("Your voting power is determined by the amount of MAGIC you held at the block detailed below. MAGIC held in other places does not contribute to your voting power.")}),Object(o.jsx)(c.nc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Overview")}),Object(o.jsxs)(a.b,{children:[Object(o.jsx)(c.nc,{color:"secondary",children:b("Your Voting Power")}),Object(o.jsx)(c.nc,{bold:!0,fontSize:"20px",children:t.toFormat(3)})]}),Object(o.jsx)(c.nc,{color:"secondary",textTransform:"uppercase",mb:"4px",bold:!0,fontSize:"14px",children:b("Your Cake Held Now")}),Object(o.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.nc,{color:"textSubtle",fontSize:"16px",children:b("Wallet")}),Object(o.jsx)(c.nc,{textAlign:"right",children:n.toFormat(3)})]}),Object(o.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.nc,{color:"textSubtle",fontSize:"16px",children:b("Manual MAGIC Pool")}),Object(o.jsx)(c.nc,{textAlign:"right",children:s.toFormat(3)})]}),Object(o.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.nc,{color:"textSubtle",fontSize:"16px",children:b("Auto MAGIC Pool")}),Object(o.jsx)(c.nc,{textAlign:"right",children:i.toFormat(3)})]}),Object(o.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.nc,{color:"textSubtle",fontSize:"16px",children:b("Other Syrup Pools")}),Object(o.jsx)(c.nc,{textAlign:"right",children:l.toFormat(3)})]}),Object(o.jsxs)(c.X,{alignItems:"center",justifyContent:"space-between",mb:"4px",children:[Object(o.jsx)(c.nc,{color:"textSubtle",fontSize:"16px",children:b("MAGIC BNB LP")}),Object(o.jsx)(c.nc,{textAlign:"right",children:u.toFormat(3)})]})]})}},904:function(e,t,n){"use strict";var c=n(3),r=n.n(c),a=n(5),o=n(12),i=n(8),s=n(0),l=n(40),u=n(29),b=n(190),j=n(20),d=n(96),x=n(14),p=n.n(x),h=n(806),O={verificationHash:null,cakeBalance:u.c,cakeVaultBalance:u.c,cakePoolBalance:u.c,poolsBalance:u.c,cakeBnbLpBalance:u.c,total:u.c};t.a=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(l.c)(),c=n.account,u=Object(s.useState)(O),x=Object(i.a)(u,2),f=x[0],m=x[1],g=Object(s.useState)(!!c),v=Object(i.a)(g,2),y=v[0],k=v[1];return Object(s.useEffect)((function(){c&&t&&function(){var n=Object(o.a)(r.a.mark((function n(){var o,i,s,l,u,x,O,f,g,v,y;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(k(!0),n.prev=1,n.t0=e,n.t0){n.next=7;break}return n.next=6,d.a.getBlockNumber();case 6:n.t0=n.sent;case 7:return o=n.t0,n.next=10,Object(b.b)(o);case 10:return i=n.sent,s=i.map((function(e){var t=e.contractAddress;return Object(j.a)(t)})),n.next=14,Object(h.g)(c,s,o);case 14:l=n.sent,u=l.cakeBalance,x=l.cakeBnbLpBalance,O=l.cakePoolBalance,f=l.total,g=l.poolsBalance,v=l.cakeVaultBalance,y=l.verificationHash,t&&m((function(e){return Object(a.a)(Object(a.a)({},e),{},{verificationHash:y,cakeBalance:new p.a(u),cakeBnbLpBalance:new p.a(x),cakePoolBalance:new p.a(O),poolsBalance:new p.a(g),cakeVaultBalance:new p.a(v),total:new p.a(f)})}));case 23:return n.prev=23,k(!1),n.finish(23);case 26:case"end":return n.stop()}}),n,null,[[1,,23,26]])})));return function(){return n.apply(this,arguments)}}()()}),[c,e,m,t,k]),Object(a.a)(Object(a.a)({},f),{},{isLoading:y})}},953:function(e,t,n){"use strict";var c,r,a,o=n(5),i=(n(0),n(965)),s=n.n(i),l=n(1001),u=n.n(l),b=n(7),j=n(2),d=n(4),x=n(1),p=d.e.table(c||(c=Object(b.a)(["\n  margin-bottom: 32px;\n  margin-top: 32px;\n  width: 100%;\n\n  td,\n  th {\n    color: ",";\n    padding: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),h=d.e.div(r||(r=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n\n  li {\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),O=function(e){return Object(x.jsx)(j.Z,Object(o.a)({as:"h4",scale:"lg",my:"16px"},e))},f={h1:O,h2:O,h3:O,h4:O,h5:O,h6:O,p:function(e){return Object(x.jsx)(j.nc,Object(o.a)({as:"p",my:"16px"},e))},table:p,ol:function(e){return Object(x.jsx)(h,Object(o.a)({as:"ol"},e))},ul:function(e){return Object(x.jsx)(h,Object(o.a)({as:"ul"},e))},pre:d.e.pre(a||(a=Object(b.a)(["\n  color: ",";\n  margin-bottom: 16px;\n  margin-top: 16px;\n  max-width: 100%;\n  overflow-x: auto;\n"])),(function(e){return e.theme.colors.text}))};t.a=function(e){return Object(x.jsx)(s.a,Object(o.a)({remarkPlugins:[u.a],components:f},e))}}}]);
//# sourceMappingURL=11.07591595.chunk.js.map