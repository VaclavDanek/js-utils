"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.matches=exports.isRC=exports.isPhone=exports.isPSC=exports.isNumber=exports.isICO=exports.isEmail=exports.isDIC=exports.isAlphanumeric=exports.isAlphabetic=exports.hasMinNumber=exports.hasMinLength=exports.hasMaxNumber=exports.hasMaxLength=exports["default"]=void 0;var matches=function(a,b){return new RegExp(b).test(a)};exports.matches=matches;var isNumber=function(a){return Number.isFinite(a)};exports.isNumber=isNumber;var hasMinNumber=function(a,b){return a>=b};exports.hasMinNumber=hasMinNumber;var hasMaxNumber=function(a,b){return a<=b};exports.hasMaxNumber=hasMaxNumber;var isAlphabetic=function(a){return /^[a-zA-Z]+$/.test(a)};exports.isAlphabetic=isAlphabetic;var isAlphanumeric=function(a){return /^[a-zA-Z0-9]+$/.test(a.toString())};exports.isAlphanumeric=isAlphanumeric;var hasMinLength=function(a,b){return a.toString().length>=b};exports.hasMinLength=hasMinLength;var hasMaxLength=function(a,b){return a.toString().length<=b};exports.hasMaxLength=hasMaxLength;var isEmail=function(a){return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)};exports.isEmail=isEmail;var isPhone=function(a){var b=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1];return b?/^((00|\+)\d{3})+\s?[1-9]\d{2}\s?\d{3}\s?\d{3}$/.test(a):/^((00|\+)\d{3})?\s?[1-9]\d{2}\s?\d{3}\s?\d{3}$/.test(a)};exports.isPhone=isPhone;var isPSC=function(a){return /^\d{3}\s?\d{2}$/.test(a)};exports.isPSC=isPSC;var isRC=function(a){var b=/^(\d{2})(\d{2})(\d{2})\/?(\d{3})(\d?)$/.exec(a);if(!b)return!1;var d=+b[1],e=+b[2],f=+b[3],g=b[4],h=b[5];if(!h){if("000"===g)return!1;d+=53<d?1800:1900}else{var c=+b[0].replace("/","")%11;if(0!=c)return!1;d+=53<d?1900:2e3}return 50<e?e-=50:20<e&&(e-=20),0<e&&12>=e&&0<f&&f<=new Date(d,e,0).getDate()};exports.isRC=isRC;var isICO=function(a){var b=/^\d{8}$/.exec(a);if(!b)return!1;for(var c=0,d=0;7>d;d++)c+=+b[0][d]*(8-d);var e=c%11;return(11-e)%10===+b[0][7]};exports.isICO=isICO;var isDIC=function(a){var b=/^([A-Z]{2})(\d{8,10})$/.exec(a);if(!b)return!1;if("CZ"===b[1]){var c=b[2];return 8===c.length?isICO(c):isRC(c)}return!0};exports.isDIC=isDIC;var _default={matches:matches,isNumber:isNumber,hasMinNumber:hasMinNumber,hasMaxNumber:hasMaxNumber,isAlphabetic:isAlphabetic,isAlphanumeric:isAlphanumeric,hasMinLength:hasMinLength,hasMaxLength:hasMaxLength,isEmail:isEmail,isPhone:isPhone,isPSC:isPSC,isICO:isICO,isDIC:isDIC,isRC:isRC};exports["default"]=_default;