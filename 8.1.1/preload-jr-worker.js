!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.preloadJrWorker=t():e.preloadJrWorker=t()}(self,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var r=function(e){if(Object.assign)return Object.assign({},e);var t={};for(var r in e)t[r]=e[r];return t}(t),n=t.workerBlobUrl,o=(t.workerPath||"")+"WebPDFJRWorker.js?h="+s.h,a=n||o,i=new Worker(a);c&&(i.terminate(),i=new Worker(a));var u="FoxitPDFSDKForWeb_JREngineCache_",l=u+"wasmBinary",f=function(){var e=!1,t=void 0,r=void 0,n=void 0,o=[];return{resolve:function(n){e||(e=!0,t=1,r=n),a()},reject:function(r){e||(e=!0,t=2,n=r),a()},promise:{then:function(e,t){o.push([e,t]),a()}}};function a(){var e=void 0;switch(t){case 1:e=r;break;case 2:e=n;break;default:return}for(var a=0,i=o.length;a<i;a++)o[a][t-1](e);o=[]}}(),d=f.promise;i.addEventListener("message",(function e(t){var r,n=t.data,o=n.params;if(r=n.uiListener)switch(r){case"wasmBinary":localStorage.setItem(l,o);break;case"asmMem":localStorage.setItem("FoxitPDFSDKForWeb_JREngineCache_asmMem",o);break;case"asmJs":localStorage.setItem("FoxitPDFSDKForWeb_JREngineCache_asmJs",o)}else{var a=n.callId;if(a)"compatibilityURL"===a&&i.postMessage({backId:n.backId,params:URL.createObjectURL(o)});else if("initJREngine"===(a=n.id)){var s=+n.type;f[["resolve","reject"][s]](o),i.removeEventListener("message",e),i.removeEventListener("error",e)}}})),i.addEventListener("error",(function(e){i.terminate(),f.reject(e)}));var m={},p=void 0;(p=localStorage.getItem(l))&&(m.wasmBinary=p);(p=localStorage.getItem("FoxitPDFSDKForWeb_JREngineCache_asmMem"))&&(m.asmMem=p);(p=localStorage.getItem("FoxitPDFSDKForWeb_JREngineCache_asmJs"))&&(m.asmJs=p);return t.cache=m,t.compatibilityURL="compatibilityURL",t.d=location.href,i.postMessage({name:"initJREngine",params:t,id:"initJREngine"}),{worker:i,initJREnginePromise:d,clone:function(){return e(r)}}};var n,o,a,i,s=r(1),c=(n=navigator.userAgent.toLowerCase(),o=/msie/.test(n),a=/trident/.test(n),i=/opera|opr/.test(n),(a||o)&&!i&&"msSaveBlob"in navigator)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.h="0.9230804695853589"}]).default}));