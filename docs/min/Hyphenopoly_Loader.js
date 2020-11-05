/**
 * @license Hyphenopoly_Loader 4.8.1 - client side hyphenation
 * ©2020  Mathias Nater, Güttingen (mathiasnater at gmail dot com)
 * https://github.com/mnater/Hyphenopoly
 *
 * Released under the MIT license
 * http://mnater.github.io/Hyphenopoly/LICENSE
 */
((e,t,s,n)=>{"use strict";const o=e=>new Map(e),r=(e,t)=>e?(n.entries(t).forEach((([t,s])=>{e[t]=e[t]||s})),e):t,l=sessionStorage,a="Hyphenopoly_Loader.js",i=o(),c="appendChild",h="createElement",d="createTextNode";s.cacheFeatureTests&&l.getItem(a)?(s.cf=JSON.parse(l.getItem(a)),s.cf.langs=o(s.cf.langs)):s.cf={langs:o(),pf:!1},(()=>{const e=t.currentScript.src,n=e.slice(0,e.lastIndexOf("/")+1),o=n+"patterns/";s.paths=r(s.paths,{maindir:n,patterndir:o}),s.s=r(s.setup,{CORScredentials:"include",hide:"all",selectors:{".hyphenate":{}},timeout:1e3}),s.s.hide=["all","element","text"].indexOf(s.s.hide)})(),(()=>{const e=o(n.entries(s.fallbacks||{}));n.entries(s.require).forEach((([t,s])=>{i.set(t.toLowerCase(),{fn:e.get(t)||t,wo:s})}))})();const p=()=>{let e=null,t=null;const s=new Promise(((s,n)=>{e=s,t=n}));return s.resolve=e,s.reject=t,s};let f=null;s.hide=(e,o)=>{if(0===e)f&&f.remove();else{const e="{visibility:hidden!important}";f=t[h]("style");let r="";0===o?r="html"+e:n.keys(s.s.selectors).forEach((t=>{r+=1===o?t+e:t+"{color:transparent!important}"})),f[c](t[d](r)),t.head[c](f)}};const y=(()=>{let e=null;return{ap:()=>e?(t.documentElement[c](e),e):null,cl:()=>{e&&e.remove()},cr:n=>{if(s.cf.langs.has(n))return;e=e||t[h]("body");const o=t[h]("div"),r="hyphens:auto";o.lang=n,o.style.cssText=`visibility:hidden;-webkit-${r};-ms-${r};${r};width:48px;font-size:12px;line-height:12px;border:none;padding:0;word-wrap:normal`,o[c](t[d](i.get(n).wo.toLowerCase())),e[c](o)}}})();s.res={he:o()};const g=o(),u=t=>{const n=i.get(t).fn+".wasm";if(s.cf.pf=!0,s.cf.langs.set(t,"H9Y"),g.has(n)){const e=s.res.he.get(g.get(n));e.c=!0,s.res.he.set(t,e)}else s.res.he.set(t,{w:e.fetch(s.paths.patterndir+n,{credentials:s.s.CORScredentials})}),g.set(n,t)};i.forEach(((e,t)=>{"FORCEHYPHENOPOLY"===e.wo||"H9Y"===s.cf.langs.get(t)?u(t):y.cr(t)}));const m=y.ap();m&&(m.querySelectorAll("div").forEach((e=>{var t;"auto"===((t=e.style).hyphens||t.webkitHyphens||t.msHyphens)&&e.offsetHeight>12?s.cf.langs.set(e.lang,"CSS"):u(e.lang)})),y.cl());const w=s.handleEvent;if(s.cf.pf){s.res.DOM=new Promise((e=>{"loading"===t.readyState?t.addEventListener("DOMContentLoaded",e,{once:!0,passive:!0}):e()}));const n=s.s.hide;0===n&&s.hide(1,0),-1!==n&&(s.timeOutHandler=e.setTimeout((()=>{s.hide(0,null),console.info(a+" timed out.")}),s.s.timeout)),s.res.DOM.then((()=>{n>0&&s.hide(1,n)}));const r=t[h]("script");r.src=s.paths.maindir+"Hyphenopoly.js",t.head[c](r),s.hy6ors=o(),s.cf.langs.forEach(((e,t)=>{"H9Y"===e&&s.hy6ors.set(t,p())})),s.hy6ors.set("HTML",p()),s.hyphenators=new Proxy(s.hy6ors,{get:(e,t)=>e.get(t),set:()=>!0}),w&&w.polyfill&&w.polyfill()}else w&&w.tearDown&&w.tearDown(),e.Hyphenopoly=null;s.cacheFeatureTests&&l.setItem(a,JSON.stringify({langs:[...s.cf.langs.entries()],pf:s.cf.pf}))})(window,document,Hyphenopoly,Object);