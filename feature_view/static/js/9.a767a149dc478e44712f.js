webpackJsonp([9],{1561:function(t,a){},Dqge:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={name:"BlogsDetails",components:{BaseArticle:e("MbHr").a},data:function(){return{id:this.$route.query.id,tab:this.$route.query.tab}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("base-article",{attrs:{tab:this.tab,id:this.id}})},staticRenderFns:[]},r=e("VU/8")(s,i,!1,null,null,null);a.default=r.exports},MbHr:function(t,a,e){"use strict";var s=e("eN8x"),i=e("gyMJ"),r={name:"BaseArticle",components:{Loadding:s.a},props:["tab","id"],data:function(){return{params:{id:this.id},url:"",theData:{blog:{}}}},created:function(){switch(this.tab){case"search":case"blog":this.url=i.b;break;case"ourNews":this.url=i.h;break;default:this.$router.push("/*")}},watch:{url:function(t,a){this.url=t},theData:function(t,a){"blog"!=this.tab&&"search"!=this.tab||(this.theData=t.blog[0]),"ourNews"==this.tab&&(this.theData=t.ourNews[0])}}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article module"},[e("loadding",{attrs:{url:t.url,params:t.params}},[e("div",{staticClass:"container"},[e("div",{staticClass:"article-title"},[e("h2",{staticClass:"title"},[t._v(t._s(t.theData.title))]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t.theData.year)+"."+t._s(t.theData.month)+"."+t._s(t.theData.day))])]),t._v(" "),e("div",{staticClass:"article-info"},[t._v("访问："+t._s(t.theData.visits)),e("br"),t._v("作者："+t._s(t.theData.user))]),t._v(" "),e("span",{staticClass:"cut-line"}),t._v(" "),e("article",[e("span",{domProps:{innerHTML:t._s(t.theData.html)}})])])])],1)},staticRenderFns:[]};var l=e("VU/8")(r,n,!1,function(t){e("1561")},null,null);a.a=l.exports}});
//# sourceMappingURL=9.a767a149dc478e44712f.js.map