(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-04288018":"ca24d349","chunk-2d22d746":"6cfcee49"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-pages/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"063d":function(e,t,n){},"1a86":function(e,t,n){e.exports=n.p+"img/Logo.936fc1d1.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{id:"nav"}}),n("section",{attrs:{id:"body"}},[n("router-view")],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("img",{staticClass:"header-logo mb-1 mt-1 col-12 col-md-3 align-self-center",attrs:{src:n("1a86")}}),r("div",{staticClass:"header-navbar container mb-1 mt-1 col-12 col-md-6 align-self-center"},[r("div",{staticClass:"row"},e._l(e.routes,(function(t){var n=t.name,o=t.route;return r("div",{key:o,staticClass:"col"},[r("router-link",{staticClass:"btn hover",attrs:{to:o}},[e._v(e._s(n))])],1)})),0)]),e._m(0)])])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-3 mb-1 mt-1 align-self-center d-none d-md-flex d-lg-flex d-xl-flex"},[n("div",{staticClass:"header-slogan"},[e._v("The fastest, freshest Pizza in town, straight to your door")])])}],s={name:"Header",data:function(){return{routes:[{name:"Home",route:"/"},{name:"Order",route:"/order"},{name:"Tracking",route:"/tracking"},{name:"Business",route:"/about"}]}}},u=s,l=(n("d017"),n("2877")),d=Object(l["a"])(u,i,c,!1,null,"617e5eac",null),f=d.exports,p={components:{Header:f}},m=p,v=(n("5c0b"),Object(l["a"])(m,o,a,!1,null,null,null)),h=v.exports,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"container px-4 px-lg-5 mt-5"},[n("div",{staticClass:"jumbotron"},[n("h1",[e._v("Welcome to Paulie's Pizza!")]),n("div",{staticClass:"landing-content"},[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos saepe consectetur eos, harum molestias officia eaque explicabo, vero sapiente culpa. Ipsum accusantium in error libero dolores ex quia cupiditate! ")]),n("hr"),n("p",[e._v("For business inquiries, contact us "),n("a",{staticClass:"link-primary",attrs:{href:"contact.html"}},[e._v("here")])]),n("a",{staticClass:"btn btn-primary"},[e._v("Place an Order")])])])])}],y={name:"Home",components:{}},w=y,x=Object(l["a"])(w,g,_,!1,null,null,null),C=x.exports;r["a"].use(b["a"]);var O=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/order",name:"Order",component:function(){return n.e("chunk-04288018").then(n.bind(null,"cf2a"))}}],j=new b["a"]({routes:O}),k=j;r["a"].config.productionTip=!1,new r["a"]({router:k,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},d017:function(e,t,n){"use strict";n("063d")}});
//# sourceMappingURL=app.6afd6c44.js.map