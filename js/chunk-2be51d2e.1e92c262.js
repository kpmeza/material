(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2be51d2e"],{2532:function(t,e,s){"use strict";var i=s("23e7"),n=s("5a34"),a=s("1d80"),r=s("ab13");i({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(a(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,s){var i=s("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"60ea":function(t,e,s){"use strict";s("bf93")},6189:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper px-0"},[s("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},n=[],a=(s("7db0"),s("b64b"),s("caad"),s("2532"),s("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t,e=this,s=null===(t=this.ids.find((function(t){return t.id===e.selectedId})))||void 0===t?void 0:t.id,i=document.getElementById(s);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==i){var n=!(navigator.userAgent.includes("Chrome/")||navigator.userAgent.includes("Firefox/")),a=this.$refs.hContainer,r=i.offsetWidth*this.ids.length,l=n?i.offsetLeft-a.offsetLeft:i.offsetLeft,o=a.offsetWidth/i.offsetWidth;o>1&&r-l<a.offsetWidth&&(l=r-a.offsetWidth),this.scrollVal=1===this.ids.length?0:-l}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),r=a,l=(s("60ea"),s("2877")),o=Object(l["a"])(r,i,n,!1,null,"697fa289",null);e["a"]=o.exports},7596:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slyder-b"},[t.datos.length?s("ScrollHorizontal",{attrs:{selectedId:t.selected,"item-full-width":""}},t._l(t.datos,(function(e,i){return s("div",{key:"key-"+t.getId(i),staticClass:"slyder-b__slyde",attrs:{id:t.getId(i)}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8 order-lg-2 mb-4 mb-lg-0"},[s("figure",{staticClass:"slyder-b__img"},[s("img",{attrs:{src:e.imagen,alt:e.leyendaImagen}}),e.leyendaImagen?s("figcaption",[t._v(t._s(e.leyendaImagen))]):t._e()])]),s("div",{staticClass:"col-lg-4 order-lg-1"},[s("h3",[t._v(t._s(e.titulo))]),s("p",{staticClass:"mb-3",domProps:{innerHTML:t._s(e.texto)}}),s("div",{staticClass:"slyder__action"},[s("div",{staticClass:"slyder__pagination"},[t._v(t._s(i+1)+"/"+t._s(t.datos.length))]),i-1>=0?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(i-1)}}},[s("i",{staticClass:"fas fa-angle-left"})]):t._e(),i!=t.datos.length-1?s("a",{staticClass:"slyder__btn",on:{click:function(e){t.selected=t.getId(i+1)},mouseover:function(e){t.mostrarIndicador=!1}}},[s("i",{staticClass:"fas fa-angle-right"}),t.mostrarIndicador&&0===i?s("div",{staticClass:"indicador__container"},[s("div",{staticClass:"indicador--click indicador--sm"})]):t._e()]):t._e()])])])])})),0):t._e()],1)},n=[],a=s("c73e"),r=s("6189"),l={name:"SlyderB",components:{ScrollHorizontal:r["a"]},mixins:[a["a"]],data:function(){return{mostrarIndicador:!0}},mounted:function(){this.selected=this.getId(0)}},o=l,d=s("2877"),c=Object(d["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports},ab13:function(t,e,s){var i=s("b622"),n=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[n]=!1,"/./"[t](e)}catch(i){}}return!1}},b64b:function(t,e,s){var i=s("23e7"),n=s("7b0b"),a=s("df75"),r=s("d039"),l=r((function(){a(1)}));i({target:"Object",stat:!0,forced:l},{keys:function(t){return a(n(t))}})},bf93:function(t,e,s){},c73e:function(t,e,s){"use strict";e["a"]={props:{datos:{type:Array,default:()=>[]}},data:()=>({mainId:Math.floor(1e7*Math.random()),selected:"0"}),methods:{getId(t){return t<0?null:"sl-"+this.mainId+t+1}}}},caad:function(t,e,s){"use strict";var i=s("23e7"),n=s("4d64").includes,a=s("44d2");i({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")}}]);
//# sourceMappingURL=chunk-2be51d2e.1e92c262.js.map