(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{32:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(38),s=n.n(a);class i extends o.a.component{render(){return o.a.createElement("h2",{className:s.a.aboutTag},"About page")}}e.default=i,function(){var t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(t){var n=void 0!==e?e:exports;if(n)if("function"!=typeof n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var o=void 0;try{o=n[r]}catch(t){continue}t.register(o,r,"C:\\Users\\GrandMasterDaddy\\desktop\\code\\school2019\\post\\src\\js\\routes\\about\\About.js")}}else t.register(n,"module.exports","C:\\Users\\GrandMasterDaddy\\desktop\\code\\school2019\\post\\src\\js\\routes\\about\\About.js")}}()},34:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),"/*# ".concat(u," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(a).concat([o]).join("\n")}var s,i,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var i=t[s];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="(".concat(i[2],") and (").concat(n,")")),e.push(i))}},e}},35:function(t,e,n){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function i(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],s=e.base?a[0]+e.base:a[0],i={css:a[1],media:a[2],sourceMap:a[3]};r[s]?r[s].parts.push(i):n.push(r[s]={id:s,parts:[i]})}return n}function u(t,e){for(var n=0;n<t.length;n++){var r=t[n],a=o[r.id],s=0;if(a){for(a.refs++;s<a.parts.length;s++)a.parts[s](r.parts[s]);for(;s<r.parts.length;s++)a.parts.push(b(r.parts[s],e))}else{for(var i=[];s<r.parts.length;s++)i.push(b(r.parts[s],e));o[r.id]={id:r.id,refs:1,parts:i}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=s(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,d=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var a=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function p(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o&&t.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,v=0;function b(t,e){var n,r,o;if(e.singleton){var a=v++;n=h||(h=c(e)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else n=c(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=i(t,e);return u(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var s=n[a],c=o[s.id];c&&(c.refs--,r.push(c))}t&&u(i(t,e),e);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}},38:function(t,e,n){var r=n(39);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(35)(r,o);r.locals&&(t.exports=r.locals)},39:function(t,e,n){(e=t.exports=n(34)(!1)).push([t.i,".src-js-routes-about-about__aboutTag--ud1Wy{font-size:calc(12px + 9 * ((100vw - 420px) / 860))}@media screen and (min-width: 1280px){.src-js-routes-about-about__aboutTag--ud1Wy{font-size:21px}}@media screen and (max-width: 420px){.src-js-routes-about-about__aboutTag--ud1Wy{font-size:12px}}",""]),e.locals={aboutTag:"src-js-routes-about-about__aboutTag--ud1Wy"}}}]);