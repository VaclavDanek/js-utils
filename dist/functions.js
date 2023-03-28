"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toggleFullScreen=exports.sortArrayOfObjects=exports.setCookie=exports.round=exports.isTouchDevice=exports.isFullScreen=exports.getNestedValue=exports.getCookie=exports["default"]=exports.checkType=void 0;function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function(){c=c.call(a)},n:function(){var a=c.next();return g=a.done,a},e:function(a){h=!0,f=a},f:function(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var sortArrayOfObjects=function(a,c){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:navigator.language,e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{numeric:!0},f=function b(f,a){var g=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0,h=c[g],i=h.param,j=h.desc,k=0,l=f[i].toString(),m=a[i].toString();return k=void 0!==j&&j?m.localeCompare(l,d,e):l.localeCompare(m,d,e),g++,0===k&&c.length>g?b(f,a,g):k};return a.sort(function(c,a){return f(c,a)})};exports.sortArrayOfObjects=sortArrayOfObjects;var isFullScreen=function a(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:window.document;return!!(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.msFullscreenElement)};exports.isFullScreen=isFullScreen;var toggleFullScreen=function b(a){var c,d,e,f=window.document;return a||(a=f.documentElement),isFullScreen(f)?f.exitFullscreen?e=f.exitFullscreen():f.msExitFullscreen?e=f.msExitFullscreen():f.mozCancelFullScreen?e=f.mozCancelFullScreen():f.webkitExitFullscreen&&(e=f.webkitExitFullscreen()):a.requestFullscreen?e=a.requestFullscreen():a.mozRequestFullScreen?e=a.mozRequestFullScreen():a.msRequestFullscreen?e=a.msRequestFullscreen():a.webkitRequestFullscreen&&(e=a.webkitRequestFullscreen()),null!==(c=null===(d=e)||void 0===d?void 0:d.then(function(){return isFullScreen(f)}))&&void 0!==c?c:Promise.resolve(isFullScreen(f))};exports.toggleFullScreen=toggleFullScreen;var getCookie=function b(a){var c,d="".concat(a,"="),e=decodeURIComponent(window.document.cookie),f=e.split(";"),g=_createForOfIteratorHelper(f);try{for(g.s();!(c=g.n()).done;){var h=c.value;if(h=h.trim(),h.startsWith(d))return h.substring(d.length,h.length)}}catch(a){g.e(a)}finally{g.f()}return null};exports.getCookie=getCookie;var setCookie=function c(a,b){var d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:5256000,e=3<arguments.length?arguments[3]:void 0,f=4<arguments.length?arguments[4]:void 0,g=["path=/"];if(("strict"===e||"lax"===e)&&g.push("samesite=".concat(e)),f&&("none"===e&&g.push("samesite=none"),g.push("secure")),d){var h=new Date;h.setTime(h.getTime()+1e3*(60*d)),g.push("expires=".concat(h.toUTCString()))}window.document.cookie="".concat(a,"=").concat(b,";").concat(g.join(";"))};exports.setCookie=setCookie;var getNestedValue=function c(a,b){if(b){"string"==typeof b&&(b=b.split("."));for(var d=0;d<b.length;d++)a=a[b[d]]}return a};exports.getNestedValue=getNestedValue;var checkType=function c(a,b){var d=_typeof(a);if(d!==b)throw"TypeError: a variable's type is a ".concat(d,", but the expected is a ").concat(b)};exports.checkType=checkType;var round=function b(a){return Math.round(100*a)/100};exports.round=round;var isTouchDevice=function a(){return"ontouchstart"in window||0<navigator.maxTouchPoints};exports.isTouchDevice=isTouchDevice;var _default={sortArrayOfObjects:sortArrayOfObjects,isFullScreen:isFullScreen,toggleFullScreen:toggleFullScreen,getCookie:getCookie,setCookie:setCookie,getNestedValue:getNestedValue,checkType:checkType,round:round,isTouchDevice:isTouchDevice};exports["default"]=_default;