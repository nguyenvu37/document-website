(this.webpackJsonpchuyentrangtailieu=this.webpackJsonpchuyentrangtailieu||[]).push([[14],{12:function(e,t,s){"use strict";s.r(t),s.d(t,"Footer",(function(){return c}));s(1);var n=s(3),c=function(){return Object(n.jsx)("div",{className:"footer container-fluid bg-dark",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("p",{className:"copyright text-white",children:"Copyright \xa9 2021 | B\u1ea3n quy\u1ec1n thu\u1ed9c v\u1ec1 Chuyentrangtailieu"})})})}},13:function(e,t,s){"use strict";s.r(t);s(1);var n=s(19),c=s(3);t.default=function(){return Object(c.jsx)("div",{className:"header container-fluid position-sticky",style:{top:0,zIndex:1e3},children:Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(n.b,{className:"navbar-brand",to:"/",children:"Chuy\xean trang t\xe0i li\u1ec7u"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"row w-100",children:Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(c.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(c.jsx)("li",{className:"nav-item active",children:Object(c.jsx)(n.b,{className:"nav-link",to:"/",children:"Trang ch\u1ee7"})}),Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(n.b,{className:"nav-link",to:"/chuyen-de",children:"Chuy\xean \u0111\u1ec1"})})]})})})]})})})}},14:function(e,t,s){"use strict";s.r(t);s(1);var n=s(3);t.default=function(e){return Object(n.jsxs)("div",{className:"waiting",style:e.custom,children:[Object(n.jsxs)("div",{className:"sk-chase",children:[Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"}),Object(n.jsx)("div",{className:"sk-chase-dot"})]}),Object(n.jsx)("div",{children:"Loading..."})]})}},15:function(e,t,s){"use strict";s.r(t);t.default=[{title:"Trang ch\u1ee7 T\xe0i li\u1ec7u h\u1ecdc t\u1eadp",component:"./screens/home/containers/homeContainer",path:"/",isProtected:!1},{title:"Chuy\xean \u0111\u1ec1",component:"./screens/thematic/containers",path:"/chuyen-de",isProtected:!1}]},16:function(e,t,s){"use strict";s.r(t),s.d(t,"addData",(function(){return a}));var n=s(18),c=Object(n.b)({name:"home",initialState:[],reducers:{addData:function(e,t){e.push(t.payload)}}}),o=c.reducer,a=c.actions.addData;t.default=o},20:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),o=s(23),a=s.n(o),r=s(53),i=s(49),d=s(24),u=(s(48),s(27)),l=s(28),m=(s(75),s(3)),p=Object(l.default)(),j=p.store,h=p.persistor;a.a.render(Object(m.jsx)(i.a,{loading:null,persistor:h,children:Object(m.jsx)(r.a,{store:j,children:Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(d.default,{})})})}),document.getElementById("container")),Object(u.default)()},24:function(e,t,s){"use strict";s.r(t);var n=s(25),c=s(56),o=s(1),a=s(6),r=s(19),i=(s(47),s(12)),d=s(13),u=s(14),l=s(15),m=s(3),p=["component"];t.default=function(){var e=function(e){var t=e.component,s=Object(c.a)(e,p);return Object(m.jsx)(a.a,Object(n.a)(Object(n.a)({},s),{},{render:function(e){return(document.title=s.title)&&Object(m.jsx)(t,Object(n.a)({},e))}}))};return Object(m.jsx)(o.Suspense,{fallback:Object(m.jsx)(u.default,{custom:{position:"relative",top:"50%",left:"50%"}}),children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(d.default,{}),Object(m.jsx)(a.c,{children:l.default.map((function(t,n){var c=Object(o.lazy)((function(){return s(72)("".concat(t.component))}));return Object(m.jsx)(e,{exact:!0,title:t.title,path:t.path,component:c},"routes"+n)}))}),Object(m.jsx)(i.Footer,{})]})})}},27:function(e,t,s){"use strict";s.r(t);t.default=function(e){e&&e instanceof Function&&s.e(25).then(s.bind(null,88)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),o(e),a(e)}))}},28:function(e,t,s){"use strict";s.r(t);var n=s(54),c=s(18),o=s(55),a=(s(51),s(52)),r=s.n(a),i=s(43),d=s(30),u=s(31);t.default=function(){var e={key:"root",storage:r.a,whitelist:["account"]},t=Object(o.a)(),s=[].concat(Object(n.a)(Object(c.c)({thunk:!1,serializableCheck:!1})),[t]);var a=Object(i.a)(e,u.default),l=Object(c.a)({reducer:a,devTools:false,middleware:s}),m=Object(i.b)(l);return t.run(d.default),{store:l,persistor:m}}},30:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return r}));var n=s(42),c=s.n(n),o=s(57),a=c.a.mark(r);function r(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)([]);case 2:case"end":return e.stop()}}),a)}},31:function(e,t,s){"use strict";s.r(t);var n=s(7),c=s(16),o=Object(n.b)({homeReducer:c.default});t.default=o},47:function(e,t,s){},48:function(e,t,s){},72:function(e,t,s){var n={".":[20,9],"./":[20,9],"./App":[24,9],"./App.js":[24,9],"./App.scss":[47,7],"./App.test":[61,9,0,9,11],"./App.test.js":[61,9,0,9,11],"./assests/icons/header_close.svg":[76,9,26],"./assests/images/advertisement.jpg":[77,9,28],"./assests/images/advertisement2.jpg":[78,9,29],"./components/Footer":[12,9],"./components/Footer/":[12,9],"./components/Footer/_styles.scss":[79,7,17],"./components/Footer/index":[12,9],"./components/Footer/index.js":[12,9],"./components/Header":[13,9],"./components/Header/":[13,9],"./components/Header/_styles.scss":[80,7,18],"./components/Header/index":[13,9],"./components/Header/index.js":[13,9],"./components/Input":[33,9,3],"./components/Input/":[33,9,3],"./components/Input/_styles.scss":[81,7,19],"./components/Input/index":[33,9,3],"./components/Input/index.js":[33,9,3],"./components/Loading":[14,9],"./components/Loading/":[14,9],"./components/Loading/index":[14,9],"./components/Loading/index.js":[14,9],"./index":[20,9],"./index.css":[48,7],"./index.js":[20,9],"./logo.svg":[82,9,27],"./mockData":[34,9,6],"./mockData/":[34,9,6],"./mockData/index":[34,9,6],"./mockData/index.js":[34,9,6],"./reportWebVitals":[27,9],"./reportWebVitals.js":[27,9],"./router":[15,9],"./router/":[15,9],"./router/index":[15,9],"./router/index.js":[15,9],"./screens/home/components":[37,9,1],"./screens/home/components/":[37,9,1],"./screens/home/components/index":[37,9,1],"./screens/home/components/index.js":[37,9,1],"./screens/home/components/post":[35,9,5],"./screens/home/components/post/":[35,9,5],"./screens/home/components/post/_styles.scss":[83,7,20],"./screens/home/components/post/index":[35,9,5],"./screens/home/components/post/index.js":[35,9,5],"./screens/home/components/post/postItem":[58,9,12],"./screens/home/components/post/postItem.js":[58,9,12],"./screens/home/components/searchInput":[36,9,2],"./screens/home/components/searchInput/":[36,9,2],"./screens/home/components/searchInput/_styles.scss":[84,7,21],"./screens/home/components/searchInput/index":[36,9,2],"./screens/home/components/searchInput/index.js":[36,9,2],"./screens/home/containers/_styles.scss":[85,7,22],"./screens/home/containers/homeContainer":[62,9,10],"./screens/home/containers/homeContainer.js":[62,9,10],"./screens/home/redux":[16,9],"./screens/home/redux/":[16,9],"./screens/home/redux/index":[16,9],"./screens/home/redux/index.js":[16,9],"./screens/thematic/containers":[39,9,7],"./screens/thematic/containers/":[39,9,7],"./screens/thematic/containers/index":[39,9,7],"./screens/thematic/containers/index.js":[39,9,7],"./setupTests":[63,9,0,8,13],"./setupTests.js":[63,9,0,8,13],"./store/createStore":[28,9],"./store/createStore.js":[28,9],"./store/rootReducers":[31,9],"./store/rootReducers.js":[31,9],"./store/rootSagas":[30,9],"./store/rootSagas.js":[30,9],"./styles/_cores.scss":[86,7,23],"./styles/_variables.scss":[87,7,24],"./themes":[32,9,4],"./themes/":[32,9,4],"./themes/index":[32,9,4],"./themes/index.js":[32,9,4]};function c(e){if(!s.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],c=t[0];return Promise.all(t.slice(2).map(s.e)).then((function(){return s.t(c,t[1])}))}c.keys=function(){return Object.keys(n)},c.id=72,e.exports=c}},[[20,15,16]]]);
//# sourceMappingURL=main.d5f8a13c.chunk.js.map