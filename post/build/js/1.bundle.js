(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{33:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),s=o(3),a=o(7),c=o(40),i=o.n(c);const p=Object(n.lazy)(()=>o(42));class l extends r.a.Component{render(){const t=Object(s.g)();return r.a.createElement("div",null,r.a.createElement("h2",{className:i.a.topicsTag},"Topics"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(a.b,{to:`${t.url}/components`},"Componets")),r.a.createElement("li",null,r.a.createElement(a.b,{to:`${t.url}/props-v-state`},"Props v state"))),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loadig...")},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:`${t.path}/:topicId`,component:p}),r.a.createElement(s.a,{path:t.path},r.a.createElement("h3",{className:i.a.selectTag},"Please select a topic")))))}}e.default=l,function(){var t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(t){var o=void 0!==e?e:exports;if(o)if("function"!=typeof o){for(var n in o)if(Object.prototype.hasOwnProperty.call(o,n)){var r=void 0;try{r=o[n]}catch(t){continue}t.register(r,n,"C:\\Users\\GrandMasterDaddy\\desktop\\code\\school2019\\post\\src\\js\\routes\\topics\\Topics.js")}}else t.register(o,"module.exports","C:\\Users\\GrandMasterDaddy\\desktop\\code\\school2019\\post\\src\\js\\routes\\topics\\Topics.js")}}()},34:function(t,e,o){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=function(t,e){var o=t[1]||"",n=t[3];if(!n)return o;if(e&&"function"==typeof btoa){var r=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(i," */")),s=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[o].concat(s).concat([r]).join("\n")}var a,c,i;return[o].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(o,"}"):o})).join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];null!=s&&(n[s]=!0)}for(var a=0;a<t.length;a++){var c=t[a];null!=c[0]&&n[c[0]]||(o&&!c[2]?c[2]=o:o&&(c[2]="(".concat(c[2],") and (").concat(o,")")),e.push(c))}},e}},35:function(t,e,o){"use strict";var n,r={},s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}t[e]=o}return t[e]}}();function c(t,e){for(var o=[],n={},r=0;r<t.length;r++){var s=t[r],a=e.base?s[0]+e.base:s[0],c={css:s[1],media:s[2],sourceMap:s[3]};n[a]?n[a].parts.push(c):o.push(n[a]={id:a,parts:[c]})}return o}function i(t,e){for(var o=0;o<t.length;o++){var n=t[o],s=r[n.id],a=0;if(s){for(s.refs++;a<s.parts.length;a++)s.parts[a](n.parts[a]);for(;a<n.parts.length;a++)s.parts.push(m(n.parts[a],e))}else{for(var c=[];a<n.parts.length;a++)c.push(m(n.parts[a],e));r[n.id]={id:n.id,refs:1,parts:c}}}}function p(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=o.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(o){e.setAttribute(o,t.attributes[o])})),"function"==typeof t.insert)t.insert(e);else{var r=a(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,o,n){var r=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var s=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(s,a[e]):t.appendChild(s)}}function f(t,e,o){var n=o.css,r=o.media,s=o.sourceMap;if(r&&t.setAttribute("media",r),s&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h=null,v=0;function m(t,e){var o,n,r;if(e.singleton){var s=v++;o=h||(h=p(e)),n=d.bind(null,o,s,!1),r=d.bind(null,o,s,!0)}else o=p(e),n=f.bind(null,o,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(o)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s());var o=c(t,e);return i(o,e),function(t){for(var n=[],s=0;s<o.length;s++){var a=o[s],p=r[a.id];p&&(p.refs--,n.push(p))}t&&i(c(t,e),e);for(var l=0;l<n.length;l++){var u=n[l];if(0===u.refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete r[u.id]}}}}},40:function(t,e,o){var n=o(41);"string"==typeof n&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1};o(35)(n,r);n.locals&&(t.exports=n.locals)},41:function(t,e,o){(e=t.exports=o(34)(!1)).push([t.i,".src-js-routes-topics-topics__topicsTag--3chgH{font-size:calc(12px + 9 * ((100vw - 420px) / 860))}@media screen and (min-width: 1280px){.src-js-routes-topics-topics__topicsTag--3chgH{font-size:21px}}@media screen and (max-width: 420px){.src-js-routes-topics-topics__topicsTag--3chgH{font-size:12px}}.src-js-routes-topics-topics__selectTag--29hgZ{color:red}",""]),e.locals={topicsTag:"src-js-routes-topics-topics__topicsTag--3chgH",selectTag:"src-js-routes-topics-topics__selectTag--29hgZ"}},42:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),s=o(3),a=o(43),c=o.n(a);class i extends r.a.Component{render(){const{topicId:t}=Object(s.f)();return r.a.createElement("h3",{className:c.a.topicTag},"Requested topic ID: ",t)}}e.default=i,function(){var t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(t){var o=void 0!==e?e:exports;if(o)if("function"!=typeof o){for(var n in o)if(Object.prototype.hasOwnProperty.call(o,n)){var r=void 0;try{r=o[n]}catch(t){continue}t.register(r,n,"C:\\Users\\GrandMasterDaddy\\desktop\\code\\school2019\\post\\src\\js\\routes\\topics\\topic\\Topic.js")}}else t.register(o,"module.exports","C:\\Users\\GrandMasterDaddy\\desktop\\code\\school2019\\post\\src\\js\\routes\\topics\\topic\\Topic.js")}}()},43:function(t,e,o){var n=o(44);"string"==typeof n&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1};o(35)(n,r);n.locals&&(t.exports=n.locals)},44:function(t,e,o){(e=t.exports=o(34)(!1)).push([t.i,".src-js-routes-topics-topic-topic__topicTag--3d8ig{font-size:calc(12px + 9 * ((100vw - 420px) / 860))}@media screen and (min-width: 1280px){.src-js-routes-topics-topic-topic__topicTag--3d8ig{font-size:21px}}@media screen and (max-width: 420px){.src-js-routes-topics-topic-topic__topicTag--3d8ig{font-size:12px}}",""]),e.locals={topicTag:"src-js-routes-topics-topic-topic__topicTag--3d8ig"}}}]);