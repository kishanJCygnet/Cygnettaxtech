var p=Object.defineProperty,d=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(e,a,t)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,i=(e,a)=>{for(var t in a||(a={}))m.call(a,t)&&n(e,t,a[t]);if(r)for(var t of r(a))g.call(a,t)&&n(e,t,a[t]);return e},o=(e,a)=>d(e,u(a));import{W as v}from"./ToolsSettings.d33ae322.js";import{a as c,d as h}from"./index.6b238922.js";import"./context.04ada340.js";import{M as _}from"./MaxCounts.3eed5286.js";import{n as C}from"./vueComponentNormalizer.87056a83.js";import{B as A}from"./Checkbox.5873a8d2.js";import{B as f}from"./RadioToggle.98e1e7ec.js";import{C as y}from"./GoogleSearchPreview.8436e1f3.js";import{C as b}from"./HtmlTagsEditor.86a5d3fb.js";import{C as k}from"./PostTypeOptions.f41bdb7d.js";import{W as T,a as S,b as x}from"./Header.f3757486.js";import{W as w,a as P}from"./Steps.6dc4ed39.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./Checkmark.e7547654.js";import"./Editor.627883d5.js";import"./_commonjsHelpers.f40d732e.js";import"./index.621c7f0d.js";import"./client.94d919c5.js";import"./constants.feea4720.js";import"./UnfilteredHtml.b2e38e98.js";import"./Index.021930ae.js";import"./HighlightToggle.47bdd2a8.js";import"./Radio.99a9886d.js";import"./Tooltip.3ec20ff5.js";import"./Row.13b6f3f1.js";import"./Logo.1a5e022a.js";var z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"aioseo-wizard-search-appearance"},[t("wizard-header"),t("wizard-container",[t("wizard-body",{scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"go-back"},[t("router-link",{staticClass:"no-underline",attrs:{to:e.getPrevLink}},[e._v("\u2190")]),e._v(" \xA0 "),t("router-link",{attrs:{to:e.getPrevLink}},[e._v(e._s(e.strings.goBack))])],1),t("div",{staticClass:"spacer"}),t("base-button",{attrs:{type:"gray"},on:{click:e.skipStep}},[e._v(e._s(e.strings.skipThisStep))]),t("base-button",{attrs:{type:"blue",loading:e.loading},on:{click:e.saveAndContinue}},[e._v(e._s(e.strings.saveAndContinue)+" \u2192")])]},proxy:!0}])},[t("wizard-steps"),t("div",{staticClass:"header"},[e._v(" "+e._s(e.strings.searchAppearance)+" ")]),t("div",{staticClass:"description"},[e._v(" "+e._s(e.strings.description)+" ")]),t("div",{staticClass:"aioseo-settings-row no-border"},[t("div",{staticClass:"settings-name"},[t("div",{staticClass:"name small-margin"},[e._v(" "+e._s(e.strings.googleSnippetPreview)+" ")])]),t("div",{staticClass:"edit-site-info-activator",class:{hover:e.showHoverClass},on:{mouseenter:e.addHoverClass,mouseleave:e.removeHoverClass}},[t("core-google-search-preview",{attrs:{title:e.category.siteTitle,separator:e.options.searchAppearance.global.separator,description:e.category.metaDescription}}),e.showHoverClass&&!e.editing?t("div",{staticClass:"background-fade",on:{click:function(s){e.editing=!0}}}):e._e(),e.showHoverClass&&!e.editing?t("div",{staticClass:"action"},[t("base-button",{attrs:{size:"small",type:"black"},on:{click:function(s){e.editing=!0}}},[e._v(" "+e._s(e.strings.editTitleAndDescription)+" ")])],1):e._e()],1)]),e.editing?t("div",{staticClass:"site-info"},[t("div",{staticClass:"site-title aioseo-settings-row no-border"},[t("div",{staticClass:"settings-name"},[t("div",{staticClass:"name small-margin"},[e._v(e._s(e.strings.siteTitle))])]),t("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},on:{counter:function(s){return e.updateCount(s,"titleCount")}},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.strings.clickToAddSiteTitle)+" ")]},proxy:!0}],null,!1,3952728333),model:{value:e.category.siteTitle,callback:function(s){e.$set(e.category,"siteTitle",s)},expression:"category.siteTitle"}}),t("div",{staticClass:"max-recommended-count",domProps:{innerHTML:e._s(e.maxRecommendedCount(e.titleCount,60))}})],1),t("div",{staticClass:"site-description aioseo-settings-row no-border"},[t("div",{staticClass:"settings-name"},[t("div",{staticClass:"name small-margin"},[e._v(e._s(e.strings.metaDescription))])]),t("core-html-tags-editor",{attrs:{"line-numbers":!1,"tags-context":"homePage","default-tags":["site_title","separator_sa","tagline"]},on:{counter:function(s){return e.updateCount(s,"descriptionCount")}},scopedSlots:e._u([{key:"tags-description",fn:function(){return[e._v(" "+e._s(e.strings.clickToAddSiteDescription)+" ")]},proxy:!0}],null,!1,67309675),model:{value:e.category.metaDescription,callback:function(s){e.$set(e.category,"metaDescription",s)},expression:"category.metaDescription"}}),t("div",{staticClass:"max-recommended-count",domProps:{innerHTML:e._s(e.maxRecommendedCount(e.descriptionCount,160))}})],1)]):e._e(),t("div",{staticClass:"aioseo-settings-row no-border",class:[{"no-margin":e.searchAppearance.underConstruction},{"small-padding":e.searchAppearance.underConstruction}]},[t("div",{staticClass:"settings-name"},[t("div",{staticClass:"name small-margin"},[e._v(" "+e._s(e.strings.isSiteUnderConstruction)+" ")])]),t("base-radio-toggle",{attrs:{name:"underConstruction",options:[{label:e.strings.underConstruction,value:!0,activeClass:"dark"},{label:e.strings.liveSite,value:!1}]},model:{value:e.searchAppearance.underConstruction,callback:function(s){e.$set(e.searchAppearance,"underConstruction",s)},expression:"searchAppearance.underConstruction"}})],1),e.searchAppearance.underConstruction?e._e():t("div",{staticClass:"aioseo-settings-row no-border post-types"},[t("base-toggle",{attrs:{size:"medium"},model:{value:e.searchAppearance.postTypes.postTypes.all,callback:function(s){e.$set(e.searchAppearance.postTypes.postTypes,"all",s)},expression:"searchAppearance.postTypes.postTypes.all"}},[e._v(" "+e._s(e.strings.includeAllPostTypes)+" ")]),e.searchAppearance.postTypes.postTypes.all?e._e():t("core-post-type-options",{attrs:{options:e.searchAppearance.postTypes,type:"postTypes"}})],1),e.searchAppearance.underConstruction?e._e():t("div",{staticClass:"aioseo-settings-row no-border enable-sitemaps"},[t("base-checkbox",{staticClass:"no-clicks",attrs:{round:"",type:"green",value:!0},nativeOn:{click:function(s){return s.stopPropagation(),s.preventDefault(),function(){}.apply(null,arguments)}}},[e._v(" "+e._s(e.strings.enableSitemap)+" ")])],1),e.searchAppearance.underConstruction?e._e():t("div",{staticClass:"aioseo-settings-row no-border"},[t("div",{staticClass:"settings-name"},[t("div",{staticClass:"name small-margin"},[e._v(" "+e._s(e.strings.doYouHaveMultipleAuthors)+" ")])]),t("base-radio-toggle",{attrs:{name:"multipleAuthors",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.searchAppearance.multipleAuthors,callback:function(s){e.$set(e.searchAppearance,"multipleAuthors",s)},expression:"searchAppearance.multipleAuthors"}})],1),e.searchAppearance.underConstruction?e._e():t("div",{staticClass:"aioseo-settings-row no-border no-margin small-padding"},[t("div",{staticClass:"settings-name"},[t("div",{staticClass:"name small-margin"},[e._v(" "+e._s(e.strings.redirectAttachmentPages)+" ")])]),t("base-radio-toggle",{attrs:{name:"redirectAttachmentPages",options:[{label:e.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.yes,value:!0}]},model:{value:e.searchAppearance.redirectAttachmentPages,callback:function(s){e.$set(e.searchAppearance,"redirectAttachmentPages",s)},expression:"searchAppearance.redirectAttachmentPages"}})],1)],1),t("wizard-close-and-exit")],1)],1)},H=[];const L={components:{BaseCheckbox:A,BaseRadioToggle:f,CoreGoogleSearchPreview:y,CoreHtmlTagsEditor:b,CorePostTypeOptions:k,WizardBody:T,WizardCloseAndExit:w,WizardContainer:S,WizardHeader:x,WizardSteps:P},mixins:[_,v],data(){return{loaded:!1,titleCount:0,descriptionCount:0,showHoverClass:!1,editing:!1,loading:!1,stage:"search-appearance",strings:{searchAppearance:"Search Appearance",description:"The way your site is displayed in search results is very important. Take some time to look over these settings and tweak as needed.",googleSnippetPreview:"Google Snippet Preview",editTitleAndDescription:"Edit Title and Description",clickToAddSiteTitle:"Click on the tags below to insert variables into your site title.",clickToAddSiteDescription:"Click on the tags below to insert variables into your meta description.",siteTitle:"Home Page Title",metaDescription:"Meta Description",isSiteUnderConstruction:"Is the site under construction or live (ready to be indexed)?",underConstruction:"Under Construction",liveSite:"Live Site",includeAllPostTypes:"Include All Post Types",enableSitemap:"Enable Sitemap",doYouHaveMultipleAuthors:"Do you have multiple authors?",redirectAttachmentPages:"Redirect attachment pages?"}}},computed:i(i({},c(["options","dynamicOptions"])),c("wizard",["category","searchAppearance"])),methods:o(i({},h("wizard",["saveWizard"])),{addHoverClass(){this.showHoverClass=!0},removeHoverClass(){this.showHoverClass=!1},saveAndContinue(){this.loading=!0,this.saveWizard("searchAppearance").then(()=>{this.$router.push(this.getNextLink)})},skipStep(){this.saveWizard(),this.$router.push(this.getNextLink)}}),mounted(){this.$nextTick(()=>{this.searchAppearance.redirectAttachmentPages=this.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="attachment",this.loaded=!0})}},l={};var $=C(L,z,H,!1,D,null,null,null);function D(e){for(let a in l)this[a]=l[a]}var ce=function(){return $.exports}();export{ce as default};
