var E=Object.defineProperty,R=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var g=(a,e,s)=>e in a?E(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,n=(a,e)=>{for(var s in e||(e={}))C.call(e,s)&&g(a,s,e[s]);if(f)for(var s of f(e))V.call(e,s)&&g(a,s,e[s]);return a},d=(a,e)=>R(a,L(e));import{V as q,R as O,m as r}from"./vendor.f6bbc087.js";import{s as t,g as D}from"./index.2a722b10.js";const y=(a,e,s)=>{const i=e[s];return i?(...o)=>{a.next(...o);const l=y(a,e,s+1);i(d(n({},a),{next:l}))}:a.next};var W=a=>{q.use(O);const e=new O({base:`wp-admin/admin.php?page=aioseo-${window.aioseo.page}`,routes:a,scrollBehavior(s,i,o){return o||(s.hash?{selector:s.hash}:{x:0,y:0})}});return e.beforeEach(async(s,i,o)=>{if(!t.state.loaded){const{internalOptions:p,options:c,dynamicOptions:u,networkOptions:h,settings:$,notifications:x,helpPanel:_,addons:k,tags:N,license:S,backups:J,redirects:b,linkAssistant:v,indexNow:A}=await D(e.app.$http);e.app.$set(t.state,"redirects",r(n({},t.state.redirects),n({},b))),e.app.$set(t.state,"linkAssistant",r(n({},t.state.linkAssistant),n({},v))),e.app.$set(t.state,"index-now",r(n({},t.state["index-now"]),n({},A))),e.app.$set(t.state,"internalOptions",r(n({},t.state.internalOptions),n({},p))),e.app.$set(t.state,"options",r(n({},t.state.options),n({},c))),e.app.$set(t.state,"dynamicOptions",r(n({},t.state.dynamicOptions),n({},u))),e.app.$set(t.state,"networkOptions",r(n({},t.state.networkOptions),n({},h))),e.app.$set(t.state,"settings",r(n({},t.state.settings),n({},$))),e.app.$set(t.state,"notifications",r(n({},t.state.notifications),n({},x))),e.app.$set(t.state,"helpPanel",r(n({},t.state.helpPanel),n({},_))),e.app.$set(t.state,"addons",r([...t.state.addons],[...k])),e.app.$set(t.state,"backups",r([...t.state.backups],[...J])),e.app.$set(t.state,"tags",r(n({},t.state.tags),n({},N))),e.app.$set(t.state,"license",r(n({},t.state.license),n({},S))),e.app.$set(t.state,"loaded",!0),t.commit("original/setOriginalOptions",JSON.parse(JSON.stringify(t.state.options))),t.commit("original/setOriginalDynamicOptions",JSON.parse(JSON.stringify(t.state.dynamicOptions))),t.commit("original/setOriginalNetworkOptions",JSON.parse(JSON.stringify(t.state.networkOptions))),t.state.redirects&&t.state.redirects.options&&t.commit("original/setOriginalRedirectOptions",JSON.parse(JSON.stringify(t.state.redirects.options))),t.state["index-now"]&&t.state["index-now"].options&&t.commit("original/setOriginalIndexNowOptions",JSON.parse(JSON.stringify(t.state["index-now"].options))),window.addEventListener("beforeunload",P=>{if(!t.getters["original/isDirty"])return;const m="Are you sure you want to leave? you have unsaved changes!";return(P||window.event).returnValue=m,m}),t.dispatch("ping")}const l=s.meta.access;if(!e.app.$allowed(l))return s.meta.home!==i.name?e.replace({name:s.meta.home}):null;if(s.meta.middleware){const p=Array.isArray(s.meta.middleware)?s.meta.middleware:[s.meta.middleware],c={from:i,next:o,router:e,to:s},u=y(c,p,1);return p[0](d(n({},c),{next:u}))}return t.commit("redirects/resetPageNumbers"),o()}),e};const M="modulepreload",w={},U="",j=function(e,s){return!s||s.length===0?e():Promise.all(s.map(i=>{if(i=`${U}${i}`,i in w)return;w[i]=!0;const o=i.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${l}`))return;const p=document.createElement("link");if(p.rel=o?"stylesheet":M,o||(p.as="script",p.crossOrigin=""),p.href=i,document.head.appendChild(p),o)return new Promise((c,u)=>{p.addEventListener("load",c),p.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};export{j as _,W as s};
