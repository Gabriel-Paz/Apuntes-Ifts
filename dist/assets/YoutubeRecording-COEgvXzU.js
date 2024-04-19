function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Preview-SXHH6R_I.js","assets/index-B6UZ4Grb.js","assets/index-BpFXCSTt.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as o,P,r as O,l as rt,_ as at,c as K,g as nt}from"./index-B6UZ4Grb.js";import{p as ot}from"./index-D-WZLnek.js";const ba=({name:e,number:t,next:r,previous:a})=>o.jsxs("section",{className:"link__container",children:[o.jsxs("a",{className:`link__arrow ${a?"":"link__arrow--opacity"}`,href:`http://localhost:5173${P}/${e}/${t-1}#start`,children:[o.jsx("svg",{className:"link__arrowIcon",fill:"currentColor",version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 490 490",xmlSpace:"preserve",children:o.jsx("g",{children:o.jsx("polygon",{points:"332.668,490 82.631,244.996 332.668,0 407.369,76.493 235.402,244.996 407.369,413.507"})})}),o.jsx("p",{children:"Anterior clase"})]}),o.jsxs("a",{className:`link__arrow ${r?"":"link__arrow--opacity"}`,href:`http://localhost:5173${P}/${e}/${t+1}#start`,children:[o.jsx("p",{children:"Siguiente clase"}),o.jsx("svg",{className:"link__arrowIcon",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",children:o.jsx("path",{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"})})]})]});function va(e){return[{href:`${P}/${e}#start`,ariaLabel:"Botón de inicio",img:"/icon-home.png",alt:"icono de inicio",text:"Inicio"},{href:`${P}/${e}#topics`,ariaLabel:"Botón de temas",img:"/icon-note.png",alt:"icono de temas",text:"Temas"},{href:`${P}/${e}#task`,ariaLabel:"Botón de tarea",img:"/icon-studio.png",alt:"icono de tarea",text:"Tarea"}]}function wa(e){return[{href:`${P}/${e}#start`,ariaLabel:"Botón de inicio",img:"/icon-home.png",alt:"icono de inicio",text:"Inicio"},{href:`${P}/${e}#grabacion`,ariaLabel:"Botón de temas",img:"/icon-recording.png",alt:"icono de temas",text:"Grabacíon"},{href:`${P}/${e}#topics`,ariaLabel:"Botón de temas",img:"/icon-note.png",alt:"icono de temas",text:"Temas"},{href:`${P}/${e}#task`,ariaLabel:"Botón de tarea",img:"/icon-studio.png",alt:"icono de tarea",text:"Tarea"}]}function Oa(e){return[{href:`${P}/${e}#start`,ariaLabel:"Botón de inicio",img:"/icon-home.png",alt:"icono de inicio",text:"Inicio"},{href:`${P}/${e}#grabacion`,ariaLabel:"Botón de temas",img:"/icon-recording.png",alt:"icono de temas",text:"Grabacíon"},{href:`${P}/${e}#topics`,ariaLabel:"Botón de temas",img:"/icon-note.png",alt:"icono de temas",text:"Temas"}]}function Ta(e){return[{href:`${P}/${e}#start`,ariaLabel:"Botón de inicio",img:"/icon-home.png",alt:"icono de inicio",text:"Inicio"},{href:`${P}/${e}#grabacion`,ariaLabel:"Botón de temas",img:"/icon-recording.png",alt:"icono de temas",text:"Grabacíon"}]}const st="/arrow-down.png",it="/arrow-up.png",Sa=({links:e,page:t})=>o.jsxs("div",{className:"dropdown",children:[o.jsx("input",{className:"dropdown__checkbox dropdown__checkbox--none",type:"checkbox",id:"dropdownMenu"}),o.jsxs("label",{className:"dropdown__menu",htmlFor:"dropdownMenu",children:[o.jsx("span",{className:"dropdown__title",children:"Temas"}),o.jsx("span",{className:"dropdown__icon dropdown__icon--hidden",children:o.jsx("img",{src:st,alt:"flecha de abajo"})}),o.jsx("span",{className:"dropdown__icon dropdown__icon--show",children:o.jsx("img",{src:it,alt:"flecha de arriba"})})]}),o.jsx("div",{className:"dropdown__content",children:o.jsx("div",{className:"dropdown__info",children:o.jsx("ul",{className:"dropdown__lists",children:e.map(({title:r,id:a},n)=>o.jsx("li",{className:"dropdown__list",children:o.jsx("a",{href:`${t}#${a}`,children:r})},n))})})})]}),lt="/icon-download.png",Ea=({isOpen:e,onClose:t,img:r})=>(O.useEffect(()=>{const a=document.querySelector("body"),n=document.querySelector("header");return a.classList.toggle("hidden",e),n.classList.toggle("header--top",!e&&n.classList.contains("header--top")),()=>{a.classList.remove("hidden")}},[e]),o.jsx("section",{className:`modalClass ${e?"":"modalClass--opacity"}`,onClick:t,children:o.jsxs("div",{className:"modalClass__container",onClick:t,children:[o.jsx("img",{className:"modalClass__img",src:r,alt:"Modal"}),o.jsx("button",{className:"btn__modalClass",children:"x"}),o.jsx("a",{className:"cta__modalClass",href:r,download:!0,children:o.jsx("img",{src:lt,alt:"icono de descargar"})})]})}));var ct=function(t){return ut(t)&&!dt(t)};function ut(e){return!!e&&typeof e=="object"}function dt(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||ht(e)}var pt=typeof Symbol=="function"&&Symbol.for,ft=pt?Symbol.for("react.element"):60103;function ht(e){return e.$$typeof===ft}function yt(e){return Array.isArray(e)?[]:{}}function I(e,t){return t.clone!==!1&&t.isMergeableObject(e)?C(yt(e),e,t):e}function _t(e,t,r){return e.concat(t).map(function(a){return I(a,r)})}function mt(e,t){if(!t.customMerge)return C;var r=t.customMerge(e);return typeof r=="function"?r:C}function gt(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function le(e){return Object.keys(e).concat(gt(e))}function me(e,t){try{return t in e}catch{return!1}}function Pt(e,t){return me(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function bt(e,t,r){var a={};return r.isMergeableObject(e)&&le(e).forEach(function(n){a[n]=I(e[n],r)}),le(t).forEach(function(n){Pt(e,n)||(me(e,n)&&r.isMergeableObject(t[n])?a[n]=mt(n,r)(e[n],t[n],r):a[n]=I(t[n],r))}),a}function C(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||_t,r.isMergeableObject=r.isMergeableObject||ct,r.cloneUnlessOtherwiseSpecified=I;var a=Array.isArray(t),n=Array.isArray(e),s=a===n;return s?a?r.arrayMerge(e,t,r):bt(e,t,r):I(t,r)}C.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(a,n){return C(a,n,r)},{})};var vt=C,ge=vt,ce=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function wt(e,t){return!!(e===t||ce(e)&&ce(t))}function Ot(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!wt(e[r],t[r]))return!1;return!0}function Tt(e,t){t===void 0&&(t=Ot);var r,a=[],n,s=!1;function l(){for(var d=[],i=0;i<arguments.length;i++)d[i]=arguments[i];return s&&r===this&&t(d,a)||(n=e.apply(this,d),s=!0,r=this,a=d),n}return l}const St=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"})),Et=rt(St);var At=typeof Element<"u",Rt=typeof Map=="function",jt=typeof Set=="function",xt=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function V(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,a,n;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(!V(e[a],t[a]))return!1;return!0}var s;if(Rt&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(s=e.entries();!(a=s.next()).done;)if(!t.has(a.value[0]))return!1;for(s=e.entries();!(a=s.next()).done;)if(!V(a.value[1],t.get(a.value[0])))return!1;return!0}if(jt&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(s=e.entries();!(a=s.next()).done;)if(!t.has(a.value[0]))return!1;return!0}if(xt&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(a=r;a--!==0;)if(e[a]!==t[a])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(n=Object.keys(e),r=n.length,r!==Object.keys(t).length)return!1;for(a=r;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[a]))return!1;if(At&&e instanceof Element)return!1;for(a=r;a--!==0;)if(!((n[a]==="_owner"||n[a]==="__v"||n[a]==="__o")&&e.$$typeof)&&!V(e[n[a]],t[n[a]]))return!1;return!0}return e!==e&&t!==t}var Pe=function(t,r){try{return V(t,r)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}},Ct=Object.create,B=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,Mt=Object.getOwnPropertyNames,Lt=Object.getPrototypeOf,It=Object.prototype.hasOwnProperty,Nt=(e,t)=>{for(var r in t)B(e,r,{get:t[r],enumerable:!0})},be=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Mt(t))!It.call(e,n)&&n!==r&&B(e,n,{get:()=>t[n],enumerable:!(a=$t(t,n))||a.enumerable});return e},Dt=(e,t,r)=>(r=e!=null?Ct(Lt(e)):{},be(t||!e||!e.__esModule?B(r,"default",{value:e,enumerable:!0}):r,e)),Ut=e=>be(B({},"__esModule",{value:!0}),e),ve={};Nt(ve,{defaultProps:()=>Vt,propTypes:()=>Ht});var we=Ut(ve),kt=Dt(ot);const{string:h,bool:m,number:A,array:X,oneOfType:$,shape:v,object:_,func:f,node:ue}=kt.default,Ht={url:$([h,X,_]),playing:m,loop:m,controls:m,volume:A,muted:m,playbackRate:A,width:$([h,A]),height:$([h,A]),style:_,progressInterval:A,playsinline:m,pip:m,stopOnUnmount:m,light:$([m,h,_]),playIcon:ue,previewTabIndex:A,previewAriaLabel:h,fallback:ue,oEmbedUrl:h,wrapper:$([h,f,v({render:f.isRequired})]),config:v({soundcloud:v({options:_}),youtube:v({playerVars:_,embedOptions:_,onUnstarted:f}),facebook:v({appId:h,version:h,playerId:h,attributes:_}),dailymotion:v({params:_}),vimeo:v({playerOptions:_,title:h}),mux:v({attributes:_,version:h}),file:v({attributes:_,tracks:X,forceVideo:m,forceAudio:m,forceHLS:m,forceSafariHLS:m,forceDisableHls:m,forceDASH:m,forceFLV:m,hlsOptions:_,hlsVersion:h,dashVersion:h,flvVersion:h}),wistia:v({options:_,playerId:h,customControls:X}),mixcloud:v({options:_}),twitch:v({options:_,playerId:h}),vidyard:v({options:_})}),onReady:f,onStart:f,onPlay:f,onPause:f,onBuffer:f,onBufferEnd:f,onEnded:f,onError:f,onDuration:f,onSeek:f,onPlaybackRateChange:f,onPlaybackQualityChange:f,onProgress:f,onClickPreview:f,onEnablePIP:f,onDisablePIP:f},y=()=>{},Vt={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:y},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:y,onStart:y,onPlay:y,onPause:y,onBuffer:y,onBufferEnd:y,onEnded:y,onError:y,onDuration:y,onSeek:y,onPlaybackRateChange:y,onPlaybackQualityChange:y,onProgress:y,onClickPreview:y,onEnablePIP:y,onDisablePIP:y};var Bt=function(t,r,a){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof r=="function"&&(a=r,r={}),r=r||{},a=a||function(){},s.type=r.type||"text/javascript",s.charset=r.charset||"utf8",s.async="async"in r?!!r.async:!0,s.src=t,r.attrs&&zt(s,r.attrs),r.text&&(s.text=""+r.text);var l="onload"in s?de:Ft;l(s,a),s.onload||de(s,a),n.appendChild(s)};function zt(e,t){for(var r in t)e.setAttribute(r,t[r])}function de(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Ft(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var Yt=Object.create,z=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyNames,Wt=Object.getPrototypeOf,Gt=Object.prototype.hasOwnProperty,Jt=(e,t)=>{for(var r in t)z(e,r,{get:t[r],enumerable:!0})},Oe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Xt(t))!Gt.call(e,n)&&n!==r&&z(e,n,{get:()=>t[n],enumerable:!(a=Kt(t,n))||a.enumerable});return e},re=(e,t,r)=>(r=e!=null?Yt(Wt(e)):{},Oe(t||!e||!e.__esModule?z(r,"default",{value:e,enumerable:!0}):r,e)),Zt=e=>Oe(z({},"__esModule",{value:!0}),e),Te={};Jt(Te,{callPlayer:()=>fr,getConfig:()=>dr,getSDK:()=>ur,isBlobUrl:()=>yr,isMediaStream:()=>hr,lazy:()=>tr,omit:()=>pr,parseEndTime:()=>ir,parseStartTime:()=>sr,queryString:()=>cr,randomString:()=>lr,supportsWebKitPresentationMode:()=>_r});var F=Zt(Te),Qt=re(O),qt=re(Bt),er=re(ge);const tr=e=>Qt.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),rr=/[?&#](?:start|t)=([0-9hms]+)/,ar=/[?&#]end=([0-9hms]+)/,q=/(\d+)(h|m|s)/g,nr=/^\d+$/;function Se(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const a=r[1];if(a.match(q))return or(a);if(nr.test(a))return parseInt(a)}}function or(e){let t=0,r=q.exec(e);for(;r!==null;){const[,a,n]=r;n==="h"&&(t+=parseInt(a,10)*60*60),n==="m"&&(t+=parseInt(a,10)*60),n==="s"&&(t+=parseInt(a,10)),r=q.exec(e)}return t}function sr(e){return Se(e,rr)}function ir(e){return Se(e,ar)}function lr(){return Math.random().toString(36).substr(2,5)}function cr(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function W(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const R={},ur=function(t,r,a=null,n=()=>!0,s=qt.default){const l=W(r);return l&&n(l)?Promise.resolve(l):new Promise((d,i)=>{if(R[t]){R[t].push({resolve:d,reject:i});return}R[t]=[{resolve:d,reject:i}];const b=p=>{R[t].forEach(g=>g.resolve(p))};if(a){const p=window[a];window[a]=function(){p&&p(),b(W(r))}}s(t,p=>{p?(R[t].forEach(g=>g.reject(p)),R[t]=null):a||b(W(r))})})};function dr(e,t){return(0,er.default)(t.config,e.config)}function pr(e,...t){const r=[].concat(...t),a={},n=Object.keys(e);for(const s of n)r.indexOf(s)===-1&&(a[s]=e[s]);return a}function fr(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function hr(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function yr(e){return/^blob:/.test(e)}function _r(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var mr=Object.create,N=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,Pr=Object.getOwnPropertyNames,br=Object.getPrototypeOf,vr=Object.prototype.hasOwnProperty,wr=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Or=(e,t)=>{for(var r in t)N(e,r,{get:t[r],enumerable:!0})},Ee=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Pr(t))!vr.call(e,n)&&n!==r&&N(e,n,{get:()=>t[n],enumerable:!(a=gr(t,n))||a.enumerable});return e},Ae=(e,t,r)=>(r=e!=null?mr(br(e)):{},Ee(t||!e||!e.__esModule?N(r,"default",{value:e,enumerable:!0}):r,e)),Tr=e=>Ee(N({},"__esModule",{value:!0}),e),u=(e,t,r)=>(wr(e,typeof t!="symbol"?t+"":t,r),r),Re={};Or(Re,{default:()=>Y});var Sr=Tr(Re),pe=Ae(O),Er=Ae(Pe),je=we,Ar=F;const Rr=5e3;let Y=class extends pe.Component{constructor(){super(...arguments),u(this,"mounted",!1),u(this,"isReady",!1),u(this,"isPlaying",!1),u(this,"isLoading",!0),u(this,"loadOnReady",null),u(this,"startOnPlay",!0),u(this,"seekOnPlay",null),u(this,"onDurationCalled",!1),u(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),u(this,"getInternalPlayer",t=>this.player?this.player[t]:null),u(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),a=this.getDuration();if(a){const n={playedSeconds:t,played:t/a};r!==null&&(n.loadedSeconds=r,n.loaded=r/a),(n.playedSeconds!==this.prevPlayed||n.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),u(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:a,muted:n}=this.props;t(),!n&&a!==null&&this.player.setVolume(a),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),u(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:a}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&a!==1&&this.player.setPlaybackRate(a),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),u(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),u(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:a}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,a())}),u(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),u(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),u(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:a,volume:n,muted:s,playbackRate:l,pip:d,loop:i,activePlayer:b,disableDeferredLoading:p}=this.props;if(!(0,Er.default)(t.url,r)){if(this.isLoading&&!b.forceLoad&&!p&&!(0,Ar.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&a&&!this.isPlaying&&this.player.play(),t.playing&&!a&&this.isPlaying&&this.player.pause(),!t.pip&&d&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!d&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==n&&n!==null&&this.player.setVolume(n),t.muted!==s&&(s?this.player.mute():(this.player.unmute(),n!==null&&setTimeout(()=>this.player.setVolume(n)))),t.playbackRate!==l&&this.player.setPlaybackRate&&this.player.setPlaybackRate(l),t.loop!==i&&this.player.setLoop&&this.player.setLoop(i)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,a){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},Rr));return}if(r?r==="fraction":t>0&&t<1){const s=this.player.getDuration();if(!s){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(s*t,a);return}this.player.seekTo(t,a)}render(){const t=this.props.activePlayer;return t?pe.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}};u(Y,"displayName","Player");u(Y,"propTypes",je.propTypes);u(Y,"defaultProps",je.defaultProps);var jr=Object.create,D=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Cr=Object.getOwnPropertyNames,$r=Object.getPrototypeOf,Mr=Object.prototype.hasOwnProperty,Lr=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ir=(e,t)=>{for(var r in t)D(e,r,{get:t[r],enumerable:!0})},xe=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Cr(t))!Mr.call(e,n)&&n!==r&&D(e,n,{get:()=>t[n],enumerable:!(a=xr(t,n))||a.enumerable});return e},U=(e,t,r)=>(r=e!=null?jr($r(e)):{},xe(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e)),Nr=e=>xe(D({},"__esModule",{value:!0}),e),c=(e,t,r)=>(Lr(e,typeof t!="symbol"?t+"":t,r),r),Ce={};Ir(Ce,{createReactPlayer:()=>Yr});var Dr=Nr(Ce),x=U(O),Ur=U(ge),G=U(Et),fe=U(Pe),L=we,$e=F,kr=U(Sr);const Hr=(0,$e.lazy)(()=>at(()=>import("./Preview-SXHH6R_I.js").then(e=>e.P),__vite__mapDeps([0,1,2]))),Vr=typeof window<"u"&&window.document&&typeof document<"u",Br=typeof K<"u"&&K.window&&K.window.document,zr=Object.keys(L.propTypes),Fr=Vr||Br?x.Suspense:()=>null,M=[],Yr=(e,t)=>{var r;return r=class extends x.Component{constructor(){super(...arguments),c(this,"state",{showPreview:!!this.props.light}),c(this,"references",{wrapper:a=>{this.wrapper=a},player:a=>{this.player=a}}),c(this,"handleClickPreview",a=>{this.setState({showPreview:!1}),this.props.onClickPreview(a)}),c(this,"showPreview",()=>{this.setState({showPreview:!0})}),c(this,"getDuration",()=>this.player?this.player.getDuration():null),c(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),c(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),c(this,"getInternalPlayer",(a="player")=>this.player?this.player.getInternalPlayer(a):null),c(this,"seekTo",(a,n,s)=>{if(!this.player)return null;this.player.seekTo(a,n,s)}),c(this,"handleReady",()=>{this.props.onReady(this)}),c(this,"getActivePlayer",(0,G.default)(a=>{for(const n of[...M,...e])if(n.canPlay(a))return n;return t||null})),c(this,"getConfig",(0,G.default)((a,n)=>{const{config:s}=this.props;return Ur.default.all([L.defaultProps.config,L.defaultProps.config[n]||{},s,s[n]||{}])})),c(this,"getAttributes",(0,G.default)(a=>(0,$e.omit)(this.props,zr))),c(this,"renderActivePlayer",a=>{if(!a)return null;const n=this.getActivePlayer(a);if(!n)return null;const s=this.getConfig(a,n.key);return x.default.createElement(kr.default,{...this.props,key:n.key,ref:this.references.player,config:s,activePlayer:n.lazyPlayer||n,onReady:this.handleReady})})}shouldComponentUpdate(a,n){return!(0,fe.default)(this.props,a)||!(0,fe.default)(this.state,n)}componentDidUpdate(a){const{light:n}=this.props;!a.light&&n&&this.setState({showPreview:!0}),a.light&&!n&&this.setState({showPreview:!1})}renderPreview(a){if(!a)return null;const{light:n,playIcon:s,previewTabIndex:l,oEmbedUrl:d,previewAriaLabel:i}=this.props;return x.default.createElement(Hr,{url:a,light:n,playIcon:s,previewTabIndex:l,previewAriaLabel:i,oEmbedUrl:d,onClick:this.handleClickPreview})}render(){const{url:a,style:n,width:s,height:l,fallback:d,wrapper:i}=this.props,{showPreview:b}=this.state,p=this.getAttributes(a),g=typeof i=="string"?this.references.wrapper:void 0;return x.default.createElement(i,{ref:g,style:{...n,width:s,height:l},...p},x.default.createElement(Fr,{fallback:d},b?this.renderPreview(a):this.renderActivePlayer(a)))}},c(r,"displayName","ReactPlayer"),c(r,"propTypes",L.propTypes),c(r,"defaultProps",L.defaultProps),c(r,"addCustomPlayer",a=>{M.push(a)}),c(r,"removeCustomPlayers",()=>{M.length=0}),c(r,"canPlay",a=>{for(const n of[...M,...e])if(n.canPlay(a))return!0;return!1}),c(r,"canEnablePIP",a=>{for(const n of[...M,...e])if(n.canEnablePIP&&n.canEnablePIP(a))return!0;return!1}),r};var ae=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,Xr=Object.getOwnPropertyNames,Wr=Object.prototype.hasOwnProperty,Gr=(e,t)=>{for(var r in t)ae(e,r,{get:t[r],enumerable:!0})},Jr=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Xr(t))!Wr.call(e,n)&&n!==r&&ae(e,n,{get:()=>t[n],enumerable:!(a=Kr(t,n))||a.enumerable});return e},Zr=e=>Jr(ae({},"__esModule",{value:!0}),e),Me={};Gr(Me,{AUDIO_EXTENSIONS:()=>ne,DASH_EXTENSIONS:()=>Xe,FLV_EXTENSIONS:()=>We,HLS_EXTENSIONS:()=>se,MATCH_URL_DAILYMOTION:()=>ze,MATCH_URL_FACEBOOK:()=>De,MATCH_URL_FACEBOOK_WATCH:()=>Ue,MATCH_URL_KALTURA:()=>Ke,MATCH_URL_MIXCLOUD:()=>Fe,MATCH_URL_MUX:()=>Ne,MATCH_URL_SOUNDCLOUD:()=>Le,MATCH_URL_STREAMABLE:()=>ke,MATCH_URL_TWITCH_CHANNEL:()=>Be,MATCH_URL_TWITCH_VIDEO:()=>Ve,MATCH_URL_VIDYARD:()=>Ye,MATCH_URL_VIMEO:()=>Ie,MATCH_URL_WISTIA:()=>He,MATCH_URL_YOUTUBE:()=>ee,VIDEO_EXTENSIONS:()=>oe,canPlay:()=>qr});var Qr=Zr(Me),he=F;const ee=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,Le=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,Ie=/vimeo\.com\/(?!progressive_redirect).+/,Ne=/stream\.mux\.com\/(\w+)/,De=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,Ue=/^https?:\/\/fb\.watch\/.+$/,ke=/streamable\.com\/([a-z0-9]+)$/,He=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,Ve=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,Be=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,ze=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Fe=/mixcloud\.com\/([^/]+\/[^/]+)/,Ye=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,Ke=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,ne=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,oe=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,se=/\.(m3u8)($|\?)/i,Xe=/\.(mpd)($|\?)/i,We=/\.(flv)($|\?)/i,te=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&te(t)||te(t.src))return!0;return!1}return(0,he.isMediaStream)(e)||(0,he.isBlobUrl)(e)?!0:ne.test(e)||oe.test(e)||se.test(e)||Xe.test(e)||We.test(e)},qr={youtube:e=>e instanceof Array?e.every(t=>ee.test(t)):ee.test(e),soundcloud:e=>Le.test(e)&&!ne.test(e),vimeo:e=>Ie.test(e)&&!oe.test(e)&&!se.test(e),mux:e=>Ne.test(e),facebook:e=>De.test(e)||Ue.test(e),streamable:e=>ke.test(e),wistia:e=>He.test(e),twitch:e=>Ve.test(e)||Be.test(e),dailymotion:e=>ze.test(e),mixcloud:e=>Fe.test(e),vidyard:e=>Ye.test(e),kaltura:e=>Ke.test(e),file:te};var ea=Object.create,k=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,ra=Object.getOwnPropertyNames,aa=Object.getPrototypeOf,na=Object.prototype.hasOwnProperty,oa=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,sa=(e,t)=>{for(var r in t)k(e,r,{get:t[r],enumerable:!0})},Ge=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ra(t))!na.call(e,n)&&n!==r&&k(e,n,{get:()=>t[n],enumerable:!(a=ta(t,n))||a.enumerable});return e},ia=(e,t,r)=>(r=e!=null?ea(aa(e)):{},Ge(t||!e||!e.__esModule?k(r,"default",{value:e,enumerable:!0}):r,e)),la=e=>Ge(k({},"__esModule",{value:!0}),e),w=(e,t,r)=>(oa(e,typeof t!="symbol"?t+"":t,r),r),Je={};sa(Je,{default:()=>ie});var ca=la(Je),J=ia(O),j=F,Ze=Qr;const ua="https://www.youtube.com/iframe_api",ye="YT",da="onYouTubeIframeAPIReady",H=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,Z=/user\/([a-zA-Z0-9_-]+)\/?/,pa=/youtube-nocookie\.com/,fa="https://www.youtube-nocookie.com";class ie extends J.Component{constructor(){super(...arguments),w(this,"callPlayer",j.callPlayer),w(this,"parsePlaylist",t=>{if(t instanceof Array)return{listType:"playlist",playlist:t.map(this.getID).join(",")};if(H.test(t)){const[,r]=t.match(H);return{listType:"playlist",list:r.replace(/^UC/,"UU")}}if(Z.test(t)){const[,r]=t.match(Z);return{listType:"user_uploads",list:r}}return{}}),w(this,"onStateChange",t=>{const{data:r}=t,{onPlay:a,onPause:n,onBuffer:s,onBufferEnd:l,onEnded:d,onReady:i,loop:b,config:{playerVars:p,onUnstarted:g}}=this.props,{UNSTARTED:E,PLAYING:T,PAUSED:S,BUFFERING:Qe,ENDED:qe,CUED:et}=window[ye].PlayerState;if(r===E&&g(),r===T&&(a(),l()),r===S&&n(),r===Qe&&s(),r===qe){const tt=!!this.callPlayer("getPlaylist");b&&!tt&&(p.start?this.seekTo(p.start):this.play()),d()}r===et&&i()}),w(this,"mute",()=>{this.callPlayer("mute")}),w(this,"unmute",()=>{this.callPlayer("unMute")}),w(this,"ref",t=>{this.container=t})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(t){return!t||t instanceof Array||H.test(t)?null:t.match(Ze.MATCH_URL_YOUTUBE)[1]}load(t,r){const{playing:a,muted:n,playsinline:s,controls:l,loop:d,config:i,onError:b}=this.props,{playerVars:p,embedOptions:g}=i,E=this.getID(t);if(r){if(H.test(t)||Z.test(t)||t instanceof Array){this.player.loadPlaylist(this.parsePlaylist(t));return}this.player.cueVideoById({videoId:E,startSeconds:(0,j.parseStartTime)(t)||p.start,endSeconds:(0,j.parseEndTime)(t)||p.end});return}(0,j.getSDK)(ua,ye,da,T=>T.loaded).then(T=>{this.container&&(this.player=new T.Player(this.container,{width:"100%",height:"100%",videoId:E,playerVars:{autoplay:a?1:0,mute:n?1:0,controls:l?1:0,start:(0,j.parseStartTime)(t),end:(0,j.parseEndTime)(t),origin:window.location.origin,playsinline:s?1:0,...this.parsePlaylist(t),...p},events:{onReady:()=>{d&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:S=>this.props.onPlaybackRateChange(S.data),onPlaybackQualityChange:S=>this.props.onPlaybackQualityChange(S),onStateChange:this.onStateChange,onError:S=>b(S.data)},host:pa.test(t)?fa:void 0,...g}))},b),g.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(t,r=!1){this.callPlayer("seekTo",t),!r&&!this.props.playing&&this.pause()}setVolume(t){this.callPlayer("setVolume",t*100)}setPlaybackRate(t){this.callPlayer("setPlaybackRate",t)}setLoop(t){this.callPlayer("setLoop",t)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:t}=this.props,r={width:"100%",height:"100%",display:t};return J.default.createElement("div",{style:r},J.default.createElement("div",{ref:this.ref}))}}w(ie,"displayName","YouTube");w(ie,"canPlay",Ze.canPlay.youtube);var ha=Dr.createReactPlayer,_e=ca.default,ya=ha([{key:"youtube",canPlay:_e.canPlay,lazyPlayer:_e}]);const _a=nt(ya),ma=({isOpen:e,onClose:t,video:r})=>(O.useEffect(()=>{const a=document.querySelector("header");e&&!a.classList.contains("header--top")&&a.classList.add("header--top")},[e]),o.jsx("section",{className:`modalVideo ${e?"":"modalVideo--opacity"}`,onClick:t,children:o.jsx(_a,{id:"youtubeRecordingVideo",url:r,controls:!0})})),Q="/arrow-video.png",Ra=({urlPrimary:e,urlSecondary:t,urlTertiary:r,imgVideoPrimary:a,imgVideoSecondary:n,imgVideoTertiary:s,text:l})=>{const[d,i]=O.useState(!1),[b,p]=O.useState(null),g=T=>{p(T),i(!0)},E=()=>{i(!1)};return o.jsxs(o.Fragment,{children:[o.jsxs("section",{className:"youtubeRecording classSubjects__section section",id:"grabacion",children:[o.jsx("h4",{className:"title",children:"Grabacion de clase"}),o.jsxs("div",{className:"youtubeRecording__imgs",children:[o.jsxs("div",{className:"youtubeRecording__imgs-container",children:[o.jsxs("div",{className:"youtubeRecording__play",onClick:()=>g(e),children:[t&&o.jsx("p",{className:"youtubeRecording__paragraph",children:"Parte 1"}),o.jsx("div",{className:"youtubeRecording__play-icon",children:o.jsx("img",{src:Q,alt:"flecha de reproducir"})})]}),o.jsx("img",{className:"youtubeRecording__img",src:a})]}),t&&o.jsxs("div",{className:"youtubeRecording__imgs-container",children:[o.jsxs("div",{className:"youtubeRecording__play",onClick:()=>g(t),children:[o.jsx("p",{className:"youtubeRecording__paragraph",children:"Parte 2"}),o.jsx("div",{className:"youtubeRecording__play-icon",children:o.jsx("img",{src:Q,alt:"flecha de reproducir"})})]}),o.jsx("img",{className:"youtubeRecording__img",src:n})]}),r&&o.jsxs("div",{className:"youtubeRecording__imgs-container",children:[o.jsxs("div",{className:"youtubeRecording__play",onClick:()=>g(r),children:[o.jsx("p",{className:"youtubeRecording__paragraph",children:"Parte 3"}),o.jsx("div",{className:"youtubeRecording__play-icon",children:o.jsx("img",{src:Q,alt:"flecha de reproducir"})})]}),o.jsx("img",{className:"youtubeRecording__img",src:s})]})]}),l&&o.jsx("p",{className:"classSubjects__grid--color",children:l})]}),o.jsx(ma,{isOpen:d,onClose:E,video:b})]})};export{Sa as D,Ea as M,ba as P,Ra as Y,Ta as a,_a as b,va as c,wa as d,Oa as e};
