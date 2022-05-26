var _=Object.defineProperty;var r=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var l=(e,s,t)=>s in e?_(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,i=(e,s)=>{for(var t in s||(s={}))v.call(s,t)&&l(e,t,s[t]);if(r)for(var t of r(s))d.call(s,t)&&l(e,t,s[t]);return e};import{B as y}from"./Textarea.d161fc2e.js";import{C as o}from"./SettingsRow.eb71f07b.js";import{n as a}from"./vueComponentNormalizer.87056a83.js";import{e as b}from"./index.8469931f.js";import{B as g}from"./RadioToggle.98e1e7ec.js";import{C as f}from"./Blur.8490ecd2.js";import{C as h}from"./Index.ea263432.js";var P=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-sa-ct-custom-fields"},[t("core-settings-row",{attrs:{name:e.strings.customFields,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-textarea",{attrs:{"min-height":200},model:{value:e.options.customFields,callback:function(n){e.$set(e.options,"customFields",n)},expression:"options.customFields"}}),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.customFieldsDescription)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"customFields",!0))}})])]},proxy:!0}])})],1)},S=[];const T={components:{BaseTextarea:y,CoreSettingsRow:o},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0}},data(){return{strings:{customFields:"Custom Fields",customFieldsDescription:"List of custom field names to include in the SEO Page Analysis. Add one per line."}}},methods:{getSchemaTypeOption(e){return this.schemaTypes.find(s=>s.value===e)}}},c={};var A=a(T,P,S,!1,w,null,null,null);function w(e){for(let s in c)this[s]=c[s]}var X=function(){return A.exports}(),$=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-sa-ct-schema"},[t("core-settings-row",{attrs:{name:e.strings.schemaType,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-select",{staticClass:"schema-type",attrs:{size:"medium",options:e.getSelectOptions("schemaTypes"),value:e.getCurrentOption("schemaTypes",e.options.schemaType)},on:{input:function(n){return e.options.schemaType=n.value}}})]},proxy:!0}])}),e.options.schemaType==="WebPage"?t("core-settings-row",{attrs:{name:e.strings.webPageType,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-select",{staticClass:"webpage-type",attrs:{size:"medium",options:e.getSelectOptions("webPageTypes"),value:e.getCurrentOption("webPageTypes",e.options.webPageType)},on:{input:function(n){return e.options.webPageType=n.value}}})]},proxy:!0}],null,!1,3344221424)}):e._e(),e.options.schemaType==="Article"?t("core-settings-row",{attrs:{name:e.strings.articleType,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:e.object.name+"articleType",options:[{label:e.strings.article,value:"Article"},{label:e.strings.blogPost,value:"BlogPosting"},{label:e.strings.newsArticle,value:"NewsArticle"}]},model:{value:e.options.articleType,callback:function(n){e.$set(e.options,"articleType",n)},expression:"options.articleType"}})]},proxy:!0}],null,!1,3288395150)}):e._e()],1)},C=[];const x={components:{BaseRadioToggle:g,CoreSettingsRow:o},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0}},data(){return{schemaTypes:{post:[{value:"none",label:"None"},{value:"Article",label:"Article"},{value:"Course",label:"Course"},{value:"Product",label:"Product"},{value:"Recipe",label:"Recipe"},{value:"SoftwareApplication",label:"Software Application"},{value:"WebPage",label:"Web Page"}],page:[{value:"none",label:"None"},{value:"Course",label:"Course"},{value:"Product",label:"Product"},{value:"Recipe",label:"Recipe"},{value:"SoftwareApplication",label:"Software Application"},{value:"WebPage",label:"Web Page"}],attachment:[{value:"none",label:"None"},{value:"ItemPage",label:"Item Page"}],cpt:[{value:"none",label:"None"},{value:"Article",label:"Article"},{value:"Course",label:"Course"},{value:"Product",label:"Product"},{value:"Recipe",label:"Recipe"},{value:"SoftwareApplication",label:"Software Application"},{value:"WebPage",label:"Web Page"}]},webPageTypes:{cpt:[{value:"WebPage",label:"Web Page"},{value:"CollectionPage",label:"Collection Page"},{value:"ProfilePage",label:"Profile Page"},{value:"ItemPage",label:"Item Page"},{value:"FAQPage",label:"FAQ Page"},{value:"RealEstateListing",label:"Real Estate Listing"}]},strings:{schemaType:"Schema Type",webPageType:"Web Page Type",articleType:"Article Type",article:"Article",blogPost:"Blog Post",newsArticle:"News Article"}}},methods:{getSelectOptions(e){return typeof this[e][this.object.name]!="undefined"?this[e][this.object.name]:this[e].cpt},getCurrentOption(e,s){return typeof this[e][this.object.name]!="undefined"?this[e][this.object.name].find(t=>t.value===s):this[e].cpt.find(t=>t.value===s)}}},u={};var k=a(x,$,C,!1,j,null,null,null);function j(e){for(let s in u)this[s]=u[s]}var O=function(){return k.exports}(),B=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-sa-ct-schema-lite"},[t("core-blur",[t("core-settings-row",{attrs:{name:e.strings.schemaType,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-select",{staticClass:"schema-type",attrs:{size:"medium",options:e.schemaTypes,value:e.getSchemaTypeOption("Article")}})]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.strings.articleType,align:""},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-radio-toggle",{attrs:{name:e.object.name+"articleType",value:"BlogPosting",options:[{label:e.strings.article,value:"Article"},{label:e.strings.blogPost,value:"BlogPosting"},{label:e.strings.newsArticle,value:"NewsArticle"}]}})]},proxy:!0}])})],1),t("cta",{attrs:{"feature-list":e.strings.graphs,"cta-link":e.$links.getPricingUrl("schema-markup","schema-markup-upsell",e.object.name+"-post-type"),"button-text":e.strings.ctaButtonText,"learn-more-link":e.$links.getUpsellUrl("schema-markup",e.object.name,"home")},scopedSlots:e._u([{key:"header-text",fn:function(){return[e._v(" "+e._s(e.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e._v(" "+e._s(e.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},F=[];const R={components:{BaseRadioToggle:g,CoreBlur:f,CoreSettingsRow:o,Cta:h},props:{type:{type:String,required:!0},object:{type:Object,required:!0}},data(){return{schemaTypes:[{value:"none",label:"None"},{value:"Article",label:"Article"}],strings:{schemaType:"Schema Type",articleType:"Article Type",article:"Article",blogPost:"Blog Post",newsArticle:"News Article",ctaHeader:this.$t.sprintf("Advanced Schema Markup is only available for licensed %1$s %2$s users.","AIOSEO","Pro"),ctaDescription:this.$t.sprintf("%1$s %2$s allows you to customize the structured data markup for your Posts so that search engines can generate rich snippets for your content in search results.","AIOSEO","Pro"),ctaButtonText:"Upgrade to Pro and Unlock Advanced Schema Markup",graphs:["Product (WooCommerce and EDD support)","FAQ Page","Software Application","Recipe","Course"]}}},methods:{getSchemaTypeOption(e){return this.schemaTypes.find(s=>s.value===e)}}},p={};var q=a(R,B,F,!1,W,null,null,null);function W(e){for(let s in p)this[s]=p[s]}var E=function(){return q.exports}(),L=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-sa-ct-schema-view"},[e.isUnlicensed?e._e():t("schema",{attrs:{type:e.type,object:e.object,options:e.options,"show-bulk":e.showBulk}}),e.isUnlicensed?t("schema-lite",{attrs:{type:e.type,object:e.object,options:e.options,"show-bulk":e.showBulk}}):e._e()],1)},N=[];const U={components:{Schema:O,SchemaLite:E},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0},showBulk:Boolean},computed:i({},b(["isUnlicensed"]))},m={};var M=a(U,L,N,!1,D,null,null,null);function D(e){for(let s in m)this[s]=m[s]}var Y=function(){return M.exports}();export{X as C,Y as S};
