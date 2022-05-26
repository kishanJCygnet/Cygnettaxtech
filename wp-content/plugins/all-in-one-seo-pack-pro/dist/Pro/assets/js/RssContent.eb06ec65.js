var l=Object.defineProperty;var n=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(t,s,e)=>s in t?l(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))c.call(s,e)&&r(t,e,s[e]);if(n)for(var e of n(s))u.call(s,e)&&r(t,e,s[e]);return t};import{d as p}from"./index.a8d44ca5.js";import{C as f}from"./Card.40fd6ded.js";import{C as d}from"./HtmlTagsEditor.4e112633.js";import{C as m}from"./SettingsRow.eb71f07b.js";import{S as _}from"./External.8868c638.js";import{n as g}from"./vueComponentNormalizer.87056a83.js";import"./Tooltip.674a9fb4.js";import"./client.93f15631.js";import"./index.9b0095cc.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./Editor.587e3e29.js";import"./UnfilteredHtml.82b91700.js";import"./Index.1acf3545.js";import"./Row.13b6f3f1.js";var y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-rss-content"},[e("core-card",{attrs:{slug:"rssContent","header-text":t.strings.rssContent},scopedSlots:t._u([{key:"tooltip",fn:function(){return[e("div",[t._v(t._s(t.strings.tooltip))])]},proxy:!0}])},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"rssContent",!0))}})]),e("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:t.$aioseo.urls.rssFeedUrl,target:"_blank"}},[e("svg-external"),t._v(" "+t._s(t.strings.openYourRssFeed)+" ")],1)]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.rssBeforeContent},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{checkUnfilteredHtml:"","minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"]},model:{value:t.options.rssContent.before,callback:function(o){t.$set(t.options.rssContent,"before",o)},expression:"options.rssContent.before"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.beforeRssDescription)+" ")])]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.rssAfterContent},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{checkUnfilteredHtml:"","minimum-line-numbers":5,"tags-context":"rss","default-tags":["post_link","site_link","author_link"]},model:{value:t.options.rssContent.after,callback:function(o){t.$set(t.options.rssContent,"after",o)},expression:"options.rssContent.after"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.afterRssDescription)+" ")])]},proxy:!0}])})],1)],1)},C=[];const v={components:{CoreCard:f,CoreHtmlTagsEditor:d,CoreSettingsRow:m,SvgExternal:_},data(){return{strings:{tooltip:"Automatically add content to your site's RSS feed.",description:"This feature is used to automatically add content to your site's RSS feed. More specifically, it allows you to add links back to your blog and your blog posts so scrapers will automatically add these links too. This helps search engines identify you as the original source of the content.",learnMore:"Learn more",rssContent:"RSS Content Settings",openYourRssFeed:"Open Your RSS Feed",rssBeforeContent:"RSS Before Content",rssAfterContent:"RSS After Content",beforeRssDescription:"Add content before each post in your site feed.",afterRssDescription:"Add content after each post in your site feed.",unfilteredHtmlError:this.$t.sprintf("Your user account role does not have access to edit this field. %1$s",this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"unfilteredHtml",!0))}}},computed:i({},p(["options"]))},a={};var S=g(v,y,C,!1,h,null,null,null);function h(t){for(let s in a)this[s]=a[s]}var O=function(){return S.exports}();export{O as default};
