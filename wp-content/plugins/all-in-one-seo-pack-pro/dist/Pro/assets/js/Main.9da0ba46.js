var c=Object.defineProperty,u=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var n=(t,o,r)=>o in t?c(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,e=(t,o)=>{for(var r in o||(o={}))f.call(o,r)&&n(t,r,o[r]);if(i)for(var r of i(o))_.call(o,r)&&n(t,r,o[r]);return t},s=(t,o)=>u(t,d(o));import h from"./AdditionalInformation.d179febb.js";import S from"./Category.ef09f95f.js";import g from"./Features.d7ebb2f2.js";import y from"./Import.6290b455.js";import v from"./LicenseKey.331b27a4.js";import w from"./SearchAppearance.777cc631.js";import x from"./SmartRecommendations.d01c301a.js";import z from"./Success.7bdf969a.js";import A from"./Welcome.3c9c1ffa.js";import{e as m,d as p,f as I}from"./index.8469931f.js";import{n as O}from"./vueComponentNormalizer.87056a83.js";import"./ToolsSettings.4e156902.js";import"./Img.5f041a4d.js";import"./helpers.8d0189da.js";import"./index.46919fbe.js";import"./client.93f15631.js";import"./context.2889af91.js";import"./MaxCounts.3eed5286.js";import"./Phone.2b07efde.js";import"./RadioToggle.98e1e7ec.js";import"./SocialProfiles.46903ece.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./Index.45bb8b07.js";import"./SettingsRow.eb71f07b.js";import"./Row.13b6f3f1.js";import"./Plus.a9b9ba75.js";import"./Header.bde5a5e1.js";import"./Logo.1a5e022a.js";import"./Steps.4ea8d132.js";import"./HighlightToggle.47bdd2a8.js";import"./Radio.99a9886d.js";import"./HtmlTagsEditor.7e29b31c.js";import"./Editor.b10855bd.js";import"./UnfilteredHtml.8e6e262f.js";import"./ImageSeo.0ea16b4e.js";import"./NewsChannel.fc0a5ed5.js";import"./Pencil.d547ebca.js";import"./ProBadge.7c0de2f7.js";import"./popup.25df8419.js";import"./params.bea1a08d.js";import"./GoogleSearchPreview.afe29ac4.js";import"./PostTypeOptions.f841640b.js";import"./Tooltip.674a9fb4.js";import"./Modal.0cad4e05.js";import"./QuestionMark.83ebd18e.js";import"./Book.b6a9040c.js";import"./VideoCamera.896ed18d.js";var $=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r(t.$route.name,{tag:"component"})},L=[];const M={components:{AdditionalInformation:h,Category:S,Features:g,Import:y,LicenseKey:v,SearchAppearance:w,SmartRecommendations:x,Success:z,Welcome:A},computed:e(e(e(e({},m("wizard",["shouldShowImportStep"])),m(["isUnlicensed"])),p("wizard",["stages"])),p(["internalOptions"])),methods:s(e({},I("wizard",["setStages","loadState"])),{deleteStage(t){const o=[...this.stages],r=o.findIndex(l=>t===l);r!==-1&&this.$delete(o,r),this.setStages(o)}}),mounted(){if(this.internalOptions.internal.wizard){const t=JSON.parse(this.internalOptions.internal.wizard);delete t.currentStage,delete t.stages,delete t.licenseKey,this.loadState(t)}this.shouldShowImportStep||this.deleteStage("import"),this.isUnlicensed||this.deleteStage("license-key"),this.$isPro&&this.deleteStage("smart-recommendations")}},a={};var R=O(M,$,L,!1,U,null,null,null);function U(t){for(let o in a)this[o]=a[o]}var $t=function(){return R.exports}();export{$t as default};
