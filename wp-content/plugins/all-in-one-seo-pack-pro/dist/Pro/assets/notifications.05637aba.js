import{n as a,V as o}from"./js/vueComponentNormalizer.87056a83.js";import{t as r,a as u}from"./js/index.a8d44ca5.js";var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.display?e("div",{staticClass:"aioseo-menu-new-notifications",on:{click:function(s){return s.stopPropagation(),t.hideNotificationsPopup.apply(null,arguments)},mouseover:t.hideNotificationsPopup}},[t._v(t._s(t.strings.newNotifications))]):t._e()},l=[];const p={data(){return{interval:null,display:!1,strings:{newNotifications:"You have new notifications!"}}},methods:{showNotificationsPopup(){if(!!this.interval&&window.aioseoNotifications&&parseInt(window.aioseoNotifications.newNotifications)){this.display=!0;const t=document.querySelector("#wp-admin-bar-aioseo-main");t&&t.classList.add("new-notifications")}},hideNotificationsPopup(){this.interval=null,setTimeout(()=>{this.display=!1;const t=document.querySelector("#wp-admin-bar-aioseo-main");t&&t.classList.remove("new-notifications")},500)}},created(){this.interval=setInterval(this.showNotificationsPopup,500),this.showNotificationsPopup(),setTimeout(()=>{this.interval=null,this.display=!1},5e3)}},i={};var f=a(p,c,l,!1,_,null,null,null);function _(t){for(let n in i)this[n]=i[n]}var m=function(){return f.exports}();const d=document.querySelector("#aioseo-menu-new-notifications");d&&(o.prototype.$t=r,o.prototype.$td="all-in-one-seo-pack",o.prototype.$tdPro="aioseo-pro",new o({store:u,render:t=>t(m)}).$mount("#aioseo-menu-new-notifications"));
