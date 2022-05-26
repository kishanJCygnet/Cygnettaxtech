var x=Object.defineProperty,$=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var _=(e,s,t)=>s in e?x(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,a=(e,s)=>{for(var t in s||(s={}))E.call(s,t)&&_(e,t,s[t]);if(h)for(var t of h(s))O.call(s,t)&&_(e,t,s[t]);return e},n=(e,s)=>$(e,C(s));import{d as B,j as c}from"./index.8469931f.js";import{C as p}from"./Index.45bb8b07.js";import{C as u}from"./Card.213902d3.js";import{C as w}from"./Modal.0cad4e05.js";import{C as R}from"./Tooltip.674a9fb4.js";import{S as D}from"./Plus.a9b9ba75.js";import{S as I}from"./index.46919fbe.js";import{S as M}from"./History.99f81129.js";import{S as P}from"./Refresh.c697ed05.js";import{S as T}from"./Trash.214b5744.js";import{n as l}from"./vueComponentNormalizer.87056a83.js";import{G as d,a as m}from"./Row.13b6f3f1.js";import{a as F}from"./ToolsSettings.4e156902.js";import{B as S}from"./Checkbox.5873a8d2.js";import{S as A}from"./Upload.7be8476b.js";import{S as y}from"./Download.bc45fb83.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./client.93f15631.js";import"./Checkmark.e7547654.js";var z=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("core-card",{staticClass:"aioseo-backup-settings",attrs:{slug:"backupSettings",toggles:!1,"no-slide":"","header-text":e.strings.backupSettings},scopedSlots:e._u([{key:"header-icon",fn:function(){return[t("svg-history")]},proxy:!0}])},[e.backupsDeleteSuccess?t("core-alert",{attrs:{type:"green"}},[e._v(" "+e._s(e.strings.backupSuccessfullyDeleted)+" ")]):e._e(),e.backupsRestoreSuccess?t("core-alert",{attrs:{type:"green"}},[e._v(" "+e._s(e.strings.backupSuccessfullyRestored)+" ")]):e._e(),e.backups.length?e._e():t("div",{staticClass:"aioseo-section-description"},[e._v(" "+e._s(e.strings.noBackups)+" ")]),e.backups.length?[t("div",{staticClass:"backups-table"},[t("div",{staticClass:"backups-rows"},e._l(e.backups,function(o,i){return t("div",{key:i,staticClass:"backup-row",class:{even:i%2===0}},[t("div",{staticClass:"backup-name",domProps:{innerHTML:e._s(e.getBackupName(o))}}),t("div",{staticClass:"backup-actions"},[t("core-tooltip",{attrs:{type:"action"},scopedSlots:e._u([{key:"tooltip",fn:function(){return[e._v(" "+e._s(e.strings.restore)+" ")]},proxy:!0}],null,!0)},[t("svg-refresh",{nativeOn:{click:function(r){return e.maybeRestoreBackup(o)}}})],1),t("core-tooltip",{attrs:{type:"action"},scopedSlots:e._u([{key:"tooltip",fn:function(){return[e._v(" "+e._s(e.strings.delete)+" ")]},proxy:!0}],null,!0)},[t("svg-trash",{nativeOn:{click:function(r){return e.maybeDeleteBackup(o)}}})],1)],1)])}),0)])]:e._e(),t("base-button",{attrs:{type:"blue",size:"medium",loading:e.loading},on:{click:e.processCreateBackup}},[t("svg-circle-plus"),e._v(" "+e._s(e.strings.createBackup)+" ")],1),e.showModal?t("core-modal",{attrs:{"no-header":""},scopedSlots:e._u([{key:"body",fn:function(){return[t("div",{staticClass:"aioseo-modal-body"},[t("button",{staticClass:"close",on:{click:function(o){o.stopPropagation(),e.showModal=!1}}},[t("svg-close",{on:{click:function(o){e.showModal=!1}}})],1),t("h3",[e._v(e._s(e.areYouSure))]),t("div",{staticClass:"reset-description",domProps:{innerHTML:e._s(e.strings.actionCannotBeUndone)}}),t("base-button",{attrs:{type:"blue",size:"medium"},on:{click:e.processBackupAction}},[e._v(" "+e._s(e.iAmSure)+" ")]),t("base-button",{attrs:{type:"gray",size:"medium"},on:{click:function(o){e.showModal=!1}}},[e._v(" "+e._s(e.strings.noChangedMind)+" ")])],1)]},proxy:!0}],null,!1,1131809547)}):e._e()],2)},j=[];const U={components:{CoreAlert:p,CoreCard:u,CoreModal:w,CoreTooltip:R,SvgCirclePlus:D,SvgClose:I,SvgHistory:M,SvgRefresh:P,SvgTrash:T},data(){return{timeout:null,backupToDelete:null,backupToRestore:null,backupsDeleteSuccess:!1,showModal:!1,backupsRestoreSuccess:!1,loading:!1,strings:{backupSettings:"Backup Settings",areYouSureDeleteBackup:"Are you sure you want to delete this backup?",areYouSureRestoreBackup:"Are you sure you want to restore this backup?",yesDeleteBackup:"Yes, I want to delete this backup",yesRestoreBackup:"Yes, I want to restore this backup",noChangedMind:"No, I changed my mind",actionCannotBeUndone:"This action cannot be undone.",noBackups:"You have no saved backups.",createBackup:"Create Backup",restore:"Restore",delete:"Delete",backupSuccessfullyDeleted:"Success! The backup was deleted.",backupSuccessfullyRestored:"Success! The backup was restored."}}},computed:n(a({},B(["backups"])),{areYouSure(){return this.backupToDelete?this.strings.areYouSureDeleteBackup:this.strings.areYouSureRestoreBackup},iAmSure(){return this.backupToDelete?this.strings.yesDeleteBackup:this.strings.yesRestoreBackup}}),methods:n(a({},c(["createBackup","deleteBackup","restoreBackup"])),{processCreateBackup(){this.loading=!0,this.createBackup().then(()=>{this.loading=!1})},maybeDeleteBackup(e){this.showModal=!0,this.backupToDelete=e},maybeRestoreBackup(e){this.showModal=!0,this.backupToRestore=e},processDeleteBackup(){this.loading=!0,this.deleteBackup(this.backupToDelete).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToDelete=null,this.backupsDeleteSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},processRestoreBackup(){this.loading=!0,this.restoreBackup(this.backupToRestore).then(()=>{clearTimeout(this.timeout),this.loading=!1,this.showModal=!1,this.backupToRestore=null,this.backupsRestoreSuccess=!0,this.timeout=setTimeout(()=>{this.backupsDeleteSuccess=!1,this.backupsRestoreSuccess=!1},3e3)})},getBackupName(e){return this.$t.sprintf("%1$s at %2$s","<strong>"+this.$moment(e*1e3).tz(this.$moment.tz.guess()).format("MMMM D, YYYY")+"</strong>","<strong>"+this.$moment(e*1e3).tz(this.$moment.tz.guess()).format("h:mmA z")+"</strong>")},processBackupAction(){return this.backupToDelete?this.processDeleteBackup():this.processRestoreBackup()}})},g={};var Y=l(U,z,j,!1,L,null,null,null);function L(e){for(let s in g)this[s]=g[s]}var N=function(){return Y.exports}(),q=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("core-card",{staticClass:"aioseo-export-settings",attrs:{slug:"exportSettings",toggles:!1,"no-slide":"","header-text":e.strings.exportSettings},scopedSlots:e._u([{key:"header-icon",fn:function(){return[t("svg-upload")]},proxy:!0}])},[t("div",{staticClass:"export-settings",class:{"aioseo-settings-row":e.canExportPostOptions}},[t("grid-row",[t("grid-column",{staticClass:"export-all"},[t("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.all,callback:function(o){e.$set(e.options,"all",o)},expression:"options.all"}},[e._v(" "+e._s(e.strings.allSettings)+" ")])],1),e._l(e.toolsSettings,function(o,i){return t("grid-column",{key:i,attrs:{sm:"6"}},[e.options.all?e._e():t("base-checkbox",{attrs:{size:"medium"},model:{value:e.options[o.value],callback:function(r){e.$set(e.options,o.value,r)},expression:"options[setting.value]"}},[e._v(" "+e._s(o.label)+" ")]),o.value!=="all"&&e.options.all?t("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[e._v(" "+e._s(o.label)+" ")]):e._e()],1)})],2)],1),e.canExportPostOptions?t("div",{staticClass:"export-post-types"},[t("grid-row",[t("grid-column",{staticClass:"export-all"},[t("base-checkbox",{attrs:{size:"medium"},model:{value:e.postOptions.all,callback:function(o){e.$set(e.postOptions,"all",o)},expression:"postOptions.all"}},[e._v(" "+e._s(e.strings.allPostTypes)+" ")])],1),e._l(e.$aioseo.postData.postTypes,function(o,i){return t("grid-column",{key:i,attrs:{sm:"6"}},[e.postOptions.all?e._e():t("base-checkbox",{attrs:{size:"medium"},model:{value:e.postOptions[o.name],callback:function(r){e.$set(e.postOptions,o.name,r)},expression:"postOptions[postType.name]"}},[e._v(" "+e._s(o.label)+" ")]),o.name!=="all"&&e.postOptions.all?t("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[e._v(" "+e._s(o.label)+" ")]):e._e()],1)})],2)],1):e._e(),t("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!e.canExport,loading:e.loading},on:{click:e.processExportSettings}},[e._v(" "+e._s(e.strings.exportSettings)+" ")])],1)},V=[];const G={components:{BaseCheckbox:S,CoreCard:u,GridColumn:d,GridRow:m,SvgUpload:A},mixins:[F],data(){return{options:{},postOptions:{},loading:!1,strings:{exportSettings:"Export Settings",allSettings:"Export All Settings",allPostTypes:"Export All Post Types"}}},computed:{canExport(){const e=[];return Object.keys(this.options).forEach(s=>{e.push(this.options[s])}),Object.keys(this.postOptions).forEach(s=>{e.push(this.postOptions[s])}),e.some(s=>s)},canExportPostOptions(){return["aioseo_page_general_settings","aioseo_page_advanced_settings","aioseo_page_schema_settings","aioseo_page_social_settings","aioseo_page_local_seo_settings"].some(e=>this.$allowed(e))}},methods:n(a({},c(["exportSettings"])),{processExportSettings(){const e=[];this.options.all?(this.$isPro&&e.push("general"),e.push("internal"),this.toolsSettings.filter(t=>t.value!=="all").forEach(t=>{e.push(t.value)})):Object.keys(this.options).forEach(t=>{this.options[t]&&e.push(t)});const s=[];this.postOptions.all?this.$aioseo.postData.postTypes.forEach(t=>{s.push(t.name)}):Object.keys(this.postOptions).forEach(t=>{this.postOptions[t]&&s.push(t)}),this.loading=!0,this.exportSettings({settings:e,postOptions:s}).then(t=>{this.loading=!1,this.options={},this.postOptions={};const o=new Blob([JSON.stringify(t.body.settings)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(o),i.download=`aioseo-export-settings-${this.$moment().format("YYYY-MM-DD")}.json`,i.click(),URL.revokeObjectURL(i.href)})}})},f={};var H=l(G,q,V,!1,J,null,null,null);function J(e){for(let s in f)this[s]=f[s]}var W=function(){return H.exports}(),K=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("core-card",{staticClass:"aioseo-import-aioseo",attrs:{slug:"importAioseoSettings",toggles:!1,"no-slide":"","header-text":e.strings.importRestoreAioseoSettings},scopedSlots:e._u([{key:"header-icon",fn:function(){return[t("svg-download")]},proxy:!0}])},[e.uploadError?t("core-alert",{staticClass:"import-error",attrs:{type:"red"}},[e._v(" "+e._s(e.uploadError)+" ")]):e._e(),e.uploadSuccess?t("core-alert",{staticClass:"import-error",attrs:{type:"green"}},[e._v(" "+e._s(e.strings.fileUploadedSuccessfully)+" ")]):e._e(),t("div",{staticClass:"file-upload"},[t("base-input",{class:{"aioseo-error":e.uploadError},attrs:{size:"medium",placeholder:e.strings.fileUploadPlaceholder},on:{focus:e.triggerFileUpload},model:{value:e.filename,callback:function(o){e.filename=o},expression:"filename"}}),t("base-button",{attrs:{type:"black",size:"medium"}},[e._v(" "+e._s(e.strings.chooseAFile)+" "),t("base-input",{ref:"file",attrs:{type:"file"},on:{click:e.reset,change:e.handleFileUpload},model:{value:e.inputFile,callback:function(o){e.inputFile=o},expression:"inputFile"}})],1)],1),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.fileUploadDescription)+" ")]),t("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!e.file||!e.importValidated,loading:e.loading},on:{click:e.submitFile}},[e._v(" "+e._s(e.strings.import)+" ")])],1)},Q=[];const X={components:{CoreAlert:p,CoreCard:u,SvgDownload:y},data(){return{inputFile:null,filename:null,file:null,uploadError:!1,uploadSuccess:!1,loading:!1,strings:{importRestoreAioseoSettings:this.$t.sprintf("Import / Restore %1$s Settings","AIOSEO"),fileUploadPlaceholder:"Import from a JSON or INI file...",chooseAFile:"Choose a File",fileUploadDescription:"Imported settings will overwrite existing settings and will not be merged.",import:"Import",jsonFileTypeRequired:"A JSON or INI file is required to import settings.",fileUploadedSuccessfully:"Success! Your settings have been imported.",fileUploadFailed:"There was an error importing your settings. Please make sure you are uploading the correct file or it is in the proper format."}}},computed:{importValidated(){return!!(this.file.type==="application/json"||this.file.name.endsWith(".ini"))}},methods:n(a({},c(["uploadFile"])),{reset(){this.uploadError=!1,this.filename=null,this.file=null,this.inputFile=null},triggerFileUpload(){this.reset(),this.$refs.file.$el.querySelector("input").focus(),this.$refs.file.$el.querySelector("input").click()},submitFile(){this.loading=!0,this.uploadFile({file:this.file,filename:this.filename}).then(()=>{this.reset(),this.uploadSuccess=!0,this.loading=!1}).catch(()=>{this.reset(),this.loading=!1,this.uploadError=this.strings.fileUploadFailed})},handleFileUpload(){this.reset(),this.file=this.$refs.file.$el.querySelector("input").files[0],this.file&&(this.filename=this.file.name,this.file.type!=="application/json"&&!this.file.name.endsWith(".ini")&&(this.uploadError=this.strings.jsonFileTypeRequired))}})},v={};var Z=l(X,K,Q,!1,ee,null,null,null);function ee(e){for(let s in v)this[s]=v[s]}var te=function(){return Z.exports}(),se=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("core-card",{staticClass:"aioseo-import-others",attrs:{id:"aioseo-import-others",slug:"importOtherPlugins",toggles:!1,"no-slide":"","header-text":e.strings.importSettingsFromOtherPlugins},scopedSlots:e._u([{key:"header-icon",fn:function(){return[t("svg-download")]},proxy:!0}])},[t("div",{staticClass:"aioseo-section-description"},[e._v(" "+e._s(e.strings.importOthersDescription)+" ")]),e.importSuccess?t("core-alert",{staticClass:"import-success",attrs:{type:"green"}},[e._v(" "+e._s(e.importSuccessful)+" ")]):e._e(),e.importError?t("core-alert",{staticClass:"import-error",attrs:{type:"red"}},[e._v(" "+e._s(e.importErrorMessage)+" ")]):e._e(),t("base-select",{attrs:{size:"medium",options:e.plugins,placeholder:e.strings.selectPlugin},scopedSlots:e._u([{key:"option",fn:function(o){var i=o.option;return[t("div",{staticClass:"import-plugin-label"},[t("span",{staticClass:"plugin-label"},[e._v(e._s(i.label))]),i.$isDisabled?t("span",{staticClass:"plugin-status"},[e._v(e._s(e.strings.notInstalled))]):e._e()])]}}]),model:{value:e.plugin,callback:function(o){e.plugin=o},expression:"plugin"}}),e.plugin?t("div",{staticClass:"import-settings"},[e.plugin.canImport?t("grid-row",[t("grid-column",[t("base-checkbox",{attrs:{size:"medium"},model:{value:e.options.all,callback:function(o){e.$set(e.options,"all",o)},expression:"options.all"}},[e._v(" "+e._s(e.strings.allSettings)+" ")])],1),e._l(e.settings,function(o,i){return t("grid-column",{key:i,attrs:{sm:"6"}},[e.options.all?e._e():t("base-checkbox",{attrs:{size:"medium"},model:{value:e.options[o.value],callback:function(r){e.$set(e.options,o.value,r)},expression:"options[setting.value]"}},[e._v(" "+e._s(o.label)+" ")]),o.value!=="all"&&e.options.all?t("base-checkbox",{attrs:{size:"medium",value:!0,disabled:""}},[e._v(" "+e._s(o.label)+" ")]):e._e()],1)})],2):e._e(),e.plugin.canImport?e._e():t("core-alert",{attrs:{type:"red"}},[e._v(" "+e._s(e.invalidVersion(e.plugin))+" ")])],1):e._e(),t("base-button",{staticClass:"import",attrs:{type:"blue",size:"medium",disabled:!e.plugin||!e.canImport,loading:e.loading},on:{click:e.processImportPlugin}},[e._v(" "+e._s(e.strings.import)+" ")])],1)},oe=[];const ie={components:{BaseCheckbox:S,CoreAlert:p,CoreCard:u,GridColumn:d,GridRow:m,SvgDownload:y},data(){return{importSuccess:!1,importError:!1,options:{},plugin:null,loading:!1,strings:{importSettingsFromOtherPlugins:"Import Settings From Other Plugins",importOthersDescription:this.$t.sprintf("Choose a plugin to import SEO data directly into %1$s.","AIOSEO"),selectPlugin:"Select a plugin...",import:"Import",allSettings:"All Settings",notInstalled:"not installed"}}},watch:{plugin(){this.importSuccess=!1,this.importError=!1,this.options={}}},computed:{settings(){const e=[{value:"settings",label:"SEO Settings"},{value:"postMeta",label:"Post Meta"}];return this.$isPro&&e.push({value:"termMeta",label:"Term Meta"}),e},plugins(){const e=[];return this.$aioseo.importers.forEach(s=>{e.push({value:s.slug,label:s.name,canImport:s.canImport,version:s.version,$isDisabled:!s.installed})}),e},canImport(){const e=[];return Object.keys(this.options).forEach(s=>{e.push(this.options[s])}),e.some(s=>s)},importSuccessful(){return this.$t.sprintf("%1$s was successfully imported!",this.plugin.label)},importErrorMessage(){return this.$t.sprintf("An error occurred while importing %1$s. Please try again.",this.plugin.label)}},methods:n(a({},c(["importPlugins"])),{processImportPlugin(){this.importSuccess=!1,this.importError=!1,this.loading=!0;const e=[];this.options.all?this.settings.filter(s=>s.value!=="all").forEach(s=>{e.push(s.value)}):Object.keys(this.options).forEach(s=>{this.options[s]&&e.push(s)}),this.importPlugins([{plugin:this.plugin.value,settings:e}]).then(()=>{this.loading=!1,this.importSuccess=!0,this.options={}}).catch(()=>{this.loading=!1,this.importError=!0,this.options={}})},invalidVersion(e){return this.$t.sprintf("We do not support importing from the currently installed version of %1$s (%2$s). Please upgrade to the latest version and try again.",e.label,e.version)}})},b={};var re=l(ie,se,oe,!1,ae,null,null,null);function ae(e){for(let s in b)this[s]=b[s]}var ne=function(){return re.exports}(),le=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"aioseo-tools-import-export"},[t("grid-row",[t("grid-column",{attrs:{md:"6"}},[t("import-aioseo"),t("import-others")],1),t("grid-column",{attrs:{md:"6"}},[t("export-settings")],1)],1),t("grid-row",[t("grid-column",[t("backup-settings")],1)],1)],1)},ce=[];const ue={components:{BackupSettings:N,GridColumn:d,GridRow:m,ExportSettings:W,ImportAioseo:te,ImportOthers:ne},data(){return{strings:{exportBackupSettings:"Export / Backup Settings"}}},computed:{},methods:{}},k={};var pe=l(ue,le,ce,!1,de,null,null,null);function de(e){for(let s in k)this[s]=k[s]}var Pe=function(){return pe.exports}();export{Pe as default};
