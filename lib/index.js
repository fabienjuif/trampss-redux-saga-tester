!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):n["trampss-redux-saga-tester"]=r()}(this,function(){"use strict";return function(n){return function(r){return function(){for(var e=arguments.length,t=Array(e),u=0;u<e;u++)t[u]=arguments[u];return function(e){var u=function(n){return n};if(n){var o=n.map(function(n){return n(e)});u=function(n){for(var r=n,e=0;e<o.length;e+=1)r=o[e](r);return r}}var i=r.apply(void 0,t),f=[],a={value:void 0,done:!1};do{a=u(i.next(a.value)),f.push(a)}while(!a.done);return f}}}}([function(n){var r={},e=function(n){void 0===r[n]&&(r[n]=0)},t=function(n){return e(n),r[n]},u=function(n){return e(n),r[n]+=1,t(n)},o=function(r){return function(e){var o=t(r);u(r);var i=n&&n[r]&&n[r][o];if(i)return i(e)}};return function(n){var r=n.value;if(!r)return n;if(!r["@@redux-saga/IO"])return n;var e=void 0;return r.CALL?e="call":r.SELECT&&(e="select"),e?{raw:n,value:o(e)()}:n}}])});