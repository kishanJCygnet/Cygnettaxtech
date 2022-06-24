var p=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var a=(e,s,t)=>s in e?p(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,i=(e,s)=>{for(var t in s||(s={}))y.call(s,t)&&a(e,t,s[t]);if(o)for(var t of o(s))f.call(s,t)&&a(e,t,s[t]);return e},n=(e,s)=>h(e,m(s));import{p as g}from"./popup.25df8419.js";import{W as _}from"./ToolsSettings.d33ae322.js";import{a as l,d as c,c as v}from"./index.6b238922.js";import"./context.04ada340.js";import{n as k}from"./vueComponentNormalizer.87056a83.js";import{C as b}from"./Index.021930ae.js";import{G as $,a as x}from"./Row.13b6f3f1.js";import{S as C}from"./Checkmark.e7547654.js";import{W as w,a as L,b as P}from"./Header.f3757486.js";import{W as K,a as z}from"./Steps.6dc4ed39.js";import"./params.bea1a08d.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./index.621c7f0d.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.feea4720.js";import"./Logo.1a5e022a.js";var T=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-wizard-license-key"},[t("wizard-header"),t("wizard-container",[t("wizard-body",{scopedSlots:e._u([{key:"footer",fn:function(){return[t("div",{staticClass:"go-back"},[t("router-link",{staticClass:"no-underline",attrs:{to:e.getPrevLink}},[e._v("\u2190")]),e._v(" \xA0 "),t("router-link",{attrs:{to:e.getPrevLink}},[e._v(e._s(e.strings.goBack))])],1),t("div",{staticClass:"spacer"}),t("base-button",{attrs:{type:"gray"},on:{click:e.skipStep}},[e._v(e._s(e.strings.skipThisStep))])]},proxy:!0}])},[t("wizard-steps"),t("div",{staticClass:"header"},[e._v(" "+e._s(e.strings.enterYourLicenseKey)+" ")]),e.$isPro?e._e():t("div",{staticClass:"description",domProps:{innerHTML:e._s(e.noLicenseNeeded)}}),t("div",{staticClass:"license-cta-box"},[t("div",{domProps:{innerHTML:e._s(e.tooltipText)}}),t("br"),t("grid-row",e._l(e.getSelectedUpsellFeatures,function(r,u){return t("grid-column",{key:u,attrs:{sm:"6"}},[t("svg-checkmark"),e._v(" "+e._s(r.name)+" ")],1)}),1)],1),e.$isPro?e._e():t("div",{domProps:{innerHTML:e._s(e.alreadyPurchased)}}),t("form",{staticClass:"license-key"},[t("input",{staticStyle:{display:"none"},attrs:{type:"text",name:"username",autocomplete:"username"}}),t("base-input",{attrs:{type:"password",placeholder:e.strings.placeholder,"append-icon":e.licenseKey?"circle-check":null,autocomplete:"new-password"},model:{value:e.licenseKey,callback:function(r){e.licenseKey=r},expression:"licenseKey"}}),t("base-button",{attrs:{type:"green",disabled:!e.licenseKey,loading:e.loading},on:{click:e.processConnectOrActivate}},[e._v(" "+e._s(e.strings.connect)+" ")])],1),e.error?t("core-alert",{staticClass:"license-key-error",attrs:{type:"red"},domProps:{innerHTML:e._s(e.error)}}):e._e()],1),t("wizard-close-and-exit")],1)],1)},A=[];const S={components:{CoreAlert:b,GridColumn:$,GridRow:x,SvgCheckmark:C,WizardBody:w,WizardCloseAndExit:K,WizardContainer:L,WizardHeader:P,WizardSteps:z},mixins:[_],data(){return{error:null,loading:!1,stage:"license-key",licenseKey:null,strings:{enterYourLicenseKey:this.$t.sprintf("Enter your %1$s License Key","AIOSEO"),boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Lite"),purchasedBoldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","AIOSEO","Pro"),linkText:this.$t.sprintf("upgrade to %1$s","Pro"),placeholder:"Paste your license key here",connect:"Connect"}}},watch:{licenseKey(e){this.updateLicenseKey(e)}},computed:n(i(i({},l(["options"])),l("wizard",{stateLicenseKey:"licenseKey",presetFeatures:"features"})),{noLicenseNeeded(){return this.$t.sprintf("You're using %1$s - no license needed. Enjoy! \u{1F642}",this.strings.boldText)},link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank">%2$s</a></strong>',this.$links.utmUrl("general-settings","license-box"),this.strings.linkText)},tooltipText(){return this.$isPro?"To unlock the selected features, please enter your license key below.":this.$t.sprintf("To unlock the selected features, please %1$s and enter your license key below.",this.link)},alreadyPurchased(){return this.$t.sprintf("Already purchased? Simply enter your license key below to connect with %1$s!",this.strings.purchasedBoldText)}}),methods:n(i(i(i({},c(["getConnectUrl","processConnect","activate"])),c("wizard",["saveWizard"])),v("wizard",["updateLicenseKey"])),{processConnectOrActivate(){if(this.$isPro)return this.processActivateLicense();this.processGetConnectUrl()},processActivateLicense(){this.error=null,this.loading=!0,this.$store.commit("loading",!0),this.activate(this.licenseKey).then(()=>{this.$aioseo.internalOptions.internal.license.expired=!1,this.saveWizard("license-key").then(()=>{this.$router.push(this.getNextLink)})}).catch(e=>{if(this.loading=!1,this.licenseKey=null,this.$store.commit("loading",!1),!e||!e.response||!e.response.body||!e.response.body.error||!e.response.body.licenseData){this.error="An unknown error occurred, please try again later.";return}const s=e.response.body.licenseData;s.invalid?this.error="The license key provided is invalid. Please use a different key to continue receiving automatic updates.":s.disabled?this.error="The license key provided is disabled. Please use a different key to continue receiving automatic updates.":s.expired?this.error=this.licenseKeyExpired:s.activationsError?this.error="This license key has reached the maximum number of activations. Please deactivate it from another site or purchase a new license to continue receiving automatic updates.":(s.connectionError||s.requestError)&&(this.error="There was an error connecting to the licensing API. Please try again later.")})},processGetConnectUrl(){this.loading=!0,this.$store.commit("loading",!0),this.getConnectUrl({key:this.licenseKey,wizard:!0}).then(e=>{if(e.body.url){if(!e.body.popup)return this.loading=!1,this.$store.commit("loading",!1),window.open(e.body.url);this.openPopup(e.body.url)}})},openPopup(e){g(e,"_self",600,630,!0,["file","token"],this.completedCallback,this.closedCallback)},completedCallback(e){return e.wizard=!0,this.processConnect(e)},closedCallback(e){if(e)return window.location.reload();this.loading=!1,this.$store.commit("loading",!1)},skipStep(){this.saveWizard(),this.$router.push(this.getNextLink)}}),mounted(){this.licenseKey=this.stateLicenseKey}},d={};var W=k(S,T,A,!1,E,null,null,null);function E(e){for(let s in d)this[s]=d[s]}var ee=function(){return W.exports}();export{ee as default};
