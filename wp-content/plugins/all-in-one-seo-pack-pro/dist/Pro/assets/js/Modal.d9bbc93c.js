import{S as a}from"./index.621c7f0d.js";import{n as r}from"./vueComponentNormalizer.87056a83.js";var l=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("transition",{attrs:{name:"modal"}},[n("div",{class:[{"aioseo-app":t.isolate}].concat(t.classes)},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container"},[t.noHeader?t._e():n("div",{staticClass:"modal-header"},[t._t("header",function(){return[t._t("headerTitle"),n("button",{staticClass:"close",on:{click:function(e){return e.stopPropagation(),t.$emit("close")}}},[n("svg-close",{on:{click:function(e){return t.$emit("close")}}})],1)]})],2),n("div",{staticClass:"modal-body"},[t._t("body")],2)])])])])])},i=[];const c={components:{SvgClose:a},props:{noHeader:Boolean,isolate:Boolean,classes:Array},methods:{scrollToElement(){const t=this.$el.getElementsByClassName("component-wrapper")[0];setTimeout(()=>{t&&(t.firstChild.scrollTop=0)},10)}},mounted(){this.scrollToElement(),this.isolate&&document.body.appendChild(this.$el)}},s={};var u=r(c,l,i,!1,_,null,null,null);function _(t){for(let o in s)this[o]=s[o]}var d=function(){return u.exports}();export{d as C};
