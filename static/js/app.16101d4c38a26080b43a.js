webpackJsonp([1],{"3eIR":function(t,a){},Jmt5:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-info"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("News-test")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link font-weight-bold",attrs:{to:"/"}},[t._v("Home "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link font-weight-bold",attrs:{to:"news"}},[t._v("News")])],1),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[this._v("Disabled")])])}]},i={name:"App",components:{navbar:s("VU/8")({name:"navbar"},n,!1,null,null,null).exports}},r={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),this._v(" "),a("router-view")],1)},staticRenderFns:[]};var l=s("VU/8")(i,r,!1,function(t){s("QgXX")},null,null).exports,o=s("/ocq"),c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[this._v(this._s(this.msg))]),this._v(" "),a("h2",[this._v(this._s(this.msg2))])])},staticRenderFns:[]};var u=s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome",msg2:"Vue.js new_api_test"}}},c,!1,function(t){s("3eIR")},"data-v-19abb81e",null).exports,v=s("mtWM"),d=s.n(v),m={name:"news",data:function(){return{mynews:[]}},mounted:function(){var t=this;d.a.get("https://newsapi.org/v2/top-headlines?country=tw&apiKey=108aa75e7444469cbbbaea5ee72857ab").then(function(a){t.mynews=a.data.articles,console.log(a.data.articles)}).catch(function(t){console.error(t)})}},h={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid bg-light"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 col-xl-2 mt-3"},[s("nav",{staticClass:"nav flex-column"},[s("router-link",{staticClass:"nav-link text-dark",attrs:{to:"news"}},[t._v("焦點新聞")]),t._v(" "),s("router-link",{staticClass:"nav-link text-dark",attrs:{to:"business"}},[t._v("商業")]),t._v(" "),s("router-link",{staticClass:"nav-link text-dark",attrs:{to:"international"}},[t._v("國際")]),t._v(" "),s("router-link",{staticClass:"nav-link text-dark",attrs:{to:"disabled"}},[t._v("Disabled")])],1)]),t._v(" "),s("div",{staticClass:"col-9 col-xl-6"},t._l(t.mynews,function(a){return s("main",{key:a,staticClass:"border rounded-circle-20 mt-2 p-3"},[s("img",{attrs:{src:a.urlToImage,alt:"images",width:"300px",height:"200px"}}),t._v(" "),s("a",{attrs:{href:a.url}},[s("h3",{staticClass:"mt-2"},[t._v(t._s(a.title))])])])}))])])},staticRenderFns:[]},p=s("VU/8")(m,h,!1,null,null,null).exports,_={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-3 col-xl-2 mt-3"},[a("nav",{staticClass:"nav flex-column"},[a("router-link",{staticClass:"nav-link text-dark",attrs:{to:"news"}},[this._v("焦點新聞")]),this._v(" "),a("router-link",{staticClass:"nav-link text-dark",attrs:{to:"business"}},[this._v("商業")]),this._v(" "),a("router-link",{staticClass:"nav-link text-dark",attrs:{to:"international"}},[this._v("國際")]),this._v(" "),a("router-link",{staticClass:"nav-link text-dark",attrs:{to:"disabled"}},[this._v("Disabled")])],1)])},staticRenderFns:[]},b={name:"business",data:function(){return{mynews:[]}},mounted:function(){var t=this;d.a.get("https://newsapi.org/v2/top-headlines?country=tw&category=business&apiKey=108aa75e7444469cbbbaea5ee72857ab").then(function(a){t.mynews=a.data.articles}).catch(function(t){console.error(t)})},components:{asides:s("VU/8")(null,_,!1,null,null,null).exports}},f={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container-fluid bg-light"},[s("div",{staticClass:"row"},[s("asides"),t._v(" "),s("div",{staticClass:"col-9 col-xl-6"},t._l(t.mynews,function(a,e){return s("main",{key:e,staticClass:"border mt-2 p-3 rounded-circle-20"},[s("img",{attrs:{src:a.urlToImage,alt:"images",width:"300px",height:"200px"}}),t._v(" "),s("a",{attrs:{href:a.url}},[s("h3",{staticClass:"mt-2"},[t._v(t._s(a.title))])])])}))],1)])},staticRenderFns:[]},g=s("VU/8")(b,f,!1,null,null,null).exports;e.a.use(o.a);var C=new o.a({routes:[{path:"/",name:"HelloWorld",component:u},{path:"/news",name:"news",component:p},{path:"/business",name:"mainuvi",component:g},{path:"*",redirect:"/news"}]});s("K3J8"),s("Jmt5");e.a.config.productionTip=!1,new e.a({el:"#app",router:C,components:{App:l},template:"<App/>"})},QgXX:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.16101d4c38a26080b43a.js.map