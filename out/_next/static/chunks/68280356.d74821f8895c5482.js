"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{7083:function(e,t,n){n.r(t),n.d(t,{default:function(){return rN}});var r=n(3005);n(9684);var l=(0,r.d)((e,t)=>{t.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}}),i=(0,r.d)((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,l=Object.defineProperty,i=Object.getOwnPropertyDescriptor,o=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===r.call(e)},a=function(e){if(!e||"[object Object]"!==r.call(e))return!1;var t,l=n.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!l&&!i)return!1;for(t in e);return void 0===t||n.call(e,t)},u=function(e,t){l&&"__proto__"===t.name?l(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},s=function(e,t){if("__proto__"===t){if(!n.call(e,t))return;if(i)return i(e,t).value}return e[t]};t.exports=function e(){var t,n,r,l,i,c,f=arguments[0],p=1,d=arguments.length,h=!1;for("boolean"==typeof f&&(h=f,f=arguments[1]||{},p=2),(null==f||"object"!=typeof f&&"function"!=typeof f)&&(f={});p<d;++p)if(t=arguments[p],null!=t)for(n in t)r=s(f,n),f!==(l=s(t,n))&&(h&&l&&(a(l)||(i=o(l)))?(i?(i=!1,c=r&&o(r)?r:[]):c=r&&a(r)?r:{},u(f,{name:n,newValue:e(h,c,l)})):void 0!==l&&u(f,{name:n,newValue:l}));return f}}),o=(0,r.d)((e,t)=>{t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}),a=(0,r.d)((e,t)=>{var n=o();function r(){}function l(){}l.resetWarningCache=r,t.exports=function(){function e(e,t,r,l,i,o){if(o!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return i.PropTypes=i,i}}),u=(0,r.d)((e,t)=>{t.exports=a()()}),s=(0,r.d)(e=>{var t,n=Symbol.for("react.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),s=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function m(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case l:case o:case i:case f:case p:return e;default:switch(e=e&&e.$$typeof){case s:case u:case c:case h:case d:case a:return e;default:return t}}case r:return t}}}t=Symbol.for("react.module.reference"),e.ContextConsumer=u,e.ContextProvider=a,e.Element=n,e.ForwardRef=c,e.Fragment=l,e.Lazy=h,e.Memo=d,e.Portal=r,e.Profiler=o,e.StrictMode=i,e.Suspense=f,e.SuspenseList=p,e.isAsyncMode=function(){return!1},e.isConcurrentMode=function(){return!1},e.isContextConsumer=function(e){return m(e)===u},e.isContextProvider=function(e){return m(e)===a},e.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},e.isForwardRef=function(e){return m(e)===c},e.isFragment=function(e){return m(e)===l},e.isLazy=function(e){return m(e)===h},e.isMemo=function(e){return m(e)===d},e.isPortal=function(e){return m(e)===r},e.isProfiler=function(e){return m(e)===o},e.isStrictMode=function(e){return m(e)===i},e.isSuspense=function(e){return m(e)===f},e.isSuspenseList=function(e){return m(e)===p},e.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===l||e===o||e===i||e===f||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===d||e.$$typeof===a||e.$$typeof===u||e.$$typeof===c||e.$$typeof===t||void 0!==e.getModuleId)},e.typeOf=m}),c=(0,r.d)((e,t)=>{t.exports=s()}),f=(0,r.d)((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,l=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,u=/^[;\s]*/,s=/^\s+|\s+$/g,c=`
`;function f(e){return e?e.replace(s,""):""}t.exports=function(e,t){if("string"!=typeof e)throw TypeError("First argument must be a string");if(!e)return[];t=t||{};var s=1,p=1;function d(e){var t=e.match(r);t&&(s+=t.length);var n=e.lastIndexOf(c);p=~n?e.length-n:p+e.length}function h(){var e={line:s,column:p};return function(t){return t.position=new g(e),y(l),t}}function g(e){this.start=e,this.end={line:s,column:p},this.source=t.source}function m(n){var r=Error(t.source+":"+s+":"+p+": "+n);if(r.reason=n,r.filename=t.source,r.line=s,r.column=p,r.source=e,!t.silent)throw r}function y(t){var n=t.exec(e);if(n){var r=n[0];return d(r),e=e.slice(r.length),n}}function b(e){var t;for(e=e||[];t=k();)!1!==t&&e.push(t);return e}function k(){var t=h();if(!("/"!=e.charAt(0)||"*"!=e.charAt(1))){for(var n=2;""!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,""===e.charAt(n-1))return m("End of comment missing");var r=e.slice(2,n-2);return p+=2,d(r),e=e.slice(n),p+=2,t({type:"comment",comment:r})}}return g.prototype.content=e,y(l),function(){var e,t=[];for(b(t);e=function(){var e=h(),t=y(i);if(t){if(k(),!y(o))return m("property missing ':'");var r=y(a),l=e({type:"declaration",property:f(t[0].replace(n,"")),value:r?f(r[0].replace(n,"")):""});return y(u),l}}();)!1!==e&&(t.push(e),b(t));return t}()}}),p=(0,r.d)((e,t)=>{var n=f();function r(e,t){var r=null;if(!e||"string"!=typeof e)return r;for(var l,i,o,a=n(e),u="function"==typeof t,s=0,c=a.length;s<c;s++)i=(l=a[s]).property,o=l.value,u?t(i,o,l):o&&(r||(r={}),r[i]=o);return r}t.exports=r,t.exports.default=r}),d=(0,r.f)((0,r.k)(),1),h=["http","https","mailto","tel"];function g(e){let t=(e||"").trim(),n=t.charAt(0);if("#"===n||"/"===n)return t;let r=t.indexOf(":");if(-1===r)return t;let l=-1;for(;++l<h.length;){let e=h[l];if(r===e.length&&t.slice(0,e.length).toLowerCase()===e)return t}return -1!==(l=t.indexOf("?"))&&r>l||-1!==(l=t.indexOf("#"))&&r>l?t:"javascript:void(0)"}var m=(0,r.f)((0,r.j)(),1),y=(0,r.f)(l(),1);function b(e){return e&&"object"==typeof e?"position"in e||"type"in e?x(e.position):"start"in e||"end"in e?x(e):"line"in e||"column"in e?k(e):"":""}function k(e){return v(e&&e.line)+":"+v(e&&e.column)}function x(e){return k(e&&e.start)+"-"+k(e&&e.end)}function v(e){return e&&"number"==typeof e?e:1}var w=class extends Error{constructor(e,t,n){let r=[null,null],l={start:{line:null,column:null},end:{line:null,column:null}};if(super(),"string"==typeof t&&(n=t,t=void 0),"string"==typeof n){let e=n.indexOf(":");-1===e?r[1]=n:(r[0]=n.slice(0,e),r[1]=n.slice(e+1))}t&&("type"in t||"position"in t?t.position&&(l=t.position):"start"in t||"end"in t?l=t:("line"in t||"column"in t)&&(l.start=t)),this.name=b(t)||"1:1",this.message="object"==typeof e?e.message:e,this.stack="","object"==typeof e&&e.stack&&(this.stack=e.stack),this.reason=this.message,this.fatal,this.line=l.start.line,this.column=l.start.column,this.position=l,this.source=r[0],this.ruleId=r[1],this.file,this.actual,this.expected,this.url,this.note}};w.prototype.file="",w.prototype.name="",w.prototype.reason="",w.prototype.message="",w.prototype.stack="",w.prototype.fatal=null,w.prototype.column=null,w.prototype.line=null,w.prototype.source=null,w.prototype.ruleId=null,w.prototype.position=null;var S={basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw TypeError('"ext" argument must be a string');C(e);let n=0,r=-1,l=e.length,i;if(void 0===t||0===t.length||t.length>e.length){for(;l--;)if(47===e.charCodeAt(l)){if(i){n=l+1;break}}else r<0&&(i=!0,r=l+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let o=-1,a=t.length-1;for(;l--;)if(47===e.charCodeAt(l)){if(i){n=l+1;break}}else o<0&&(i=!0,o=l+1),a>-1&&(e.charCodeAt(l)===t.charCodeAt(a--)?a<0&&(r=l):(a=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)},dirname:function(e){if(C(e),0===e.length)return".";let t=-1,n=e.length,r;for(;--n;)if(47===e.charCodeAt(n)){if(r){t=n;break}}else r||(r=!0);return t<0?47===e.charCodeAt(0)?"/":".":1===t&&47===e.charCodeAt(0)?"//":e.slice(0,t)},extname:function(e){C(e);let t=e.length,n=-1,r=0,l=-1,i=0,o;for(;t--;){let a=e.charCodeAt(t);if(47===a){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),46===a?l<0?l=t:1!==i&&(i=1):l>-1&&(i=-1)}return l<0||n<0||0===i||1===i&&l===n-1&&l===r+1?"":e.slice(l,n)},join:function(...e){var t;let n,r,l=-1,i;for(;++l<e.length;)C(e[l]),e[l]&&(i=void 0===i?e[l]:i+"/"+e[l]);return void 0===i?".":(C(t=i),n=47===t.charCodeAt(0),0!==(r=function(e,t){let n="",r=0,l=-1,i=0,o=-1,a,u;for(;++o<=e.length;){if(o<e.length)a=e.charCodeAt(o);else{if(47===a)break;a=47}if(47===a){if(!(l===o-1||1===i)){if(l!==o-1&&2===i){if(n.length<2||2!==r||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){if((u=n.lastIndexOf("/"))!==n.length-1){u<0?(n="",r=0):r=(n=n.slice(0,u)).length-1-n.lastIndexOf("/"),l=o,i=0;continue}}else if(n.length>0){n="",r=0,l=o,i=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(l+1,o):n=e.slice(l+1,o),r=o-l-1}l=o,i=0}else 46===a&&i>-1?i++:i=-1}return n}(t,!n)).length||n||(r="."),r.length>0&&47===t.charCodeAt(t.length-1)&&(r+="/"),n?"/"+r:r)},sep:"/"};function C(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function E(e){return null!==e&&"object"==typeof e&&e.href&&e.origin}var F=["history","path","basename","stem","extname","dirname"],A=class{constructor(e){let t,n;t=e?"string"==typeof e||(0,y.default)(e)?{value:e}:E(e)?{path:e}:e:{},this.data={},this.messages=[],this.history=[],this.cwd="/",this.value,this.stored,this.result,this.map;let r=-1;for(;++r<F.length;){let e=F[r];e in t&&void 0!==t[e]&&null!==t[e]&&(this[e]="history"===e?[...t[e]]:t[e])}for(n in t)F.includes(n)||(this[n]=t[n])}get path(){return this.history[this.history.length-1]}set path(e){E(e)&&(e=function(e){if("string"==typeof e)e=new URL(e);else if(!E(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if("file:"!==e.protocol){let e=TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return function(e){if(""!==e.hostname){let e=TypeError('File URL host must be "localhost" or empty on darwin');throw e.code="ERR_INVALID_FILE_URL_HOST",e}let t=e.pathname,n=-1;for(;++n<t.length;)if(37===t.charCodeAt(n)&&50===t.charCodeAt(n+1)){let e=t.charCodeAt(n+2);if(70===e||102===e){let e=TypeError("File URL path must not include encoded / characters");throw e.code="ERR_INVALID_FILE_URL_PATH",e}}return decodeURIComponent(t)}(e)}(e)),T(e,"path"),this.path!==e&&this.history.push(e)}get dirname(){return"string"==typeof this.path?S.dirname(this.path):void 0}set dirname(e){O(this.basename,"dirname"),this.path=S.join(e||"",this.basename)}get basename(){return"string"==typeof this.path?S.basename(this.path):void 0}set basename(e){T(e,"basename"),D(e,"basename"),this.path=S.join(this.dirname||"",e)}get extname(){return"string"==typeof this.path?S.extname(this.path):void 0}set extname(e){if(D(e,"extname"),O(this.dirname,"extname"),e){if(46!==e.charCodeAt(0))throw Error("`extname` must start with `.`");if(e.includes(".",1))throw Error("`extname` cannot contain multiple dots")}this.path=S.join(this.dirname,this.stem+(e||""))}get stem(){return"string"==typeof this.path?S.basename(this.path,this.extname):void 0}set stem(e){T(e,"stem"),D(e,"stem"),this.path=S.join(this.dirname||"",e+(this.extname||""))}toString(e){return(this.value||"").toString(e||void 0)}message(e,t,n){let r=new w(e,t,n);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=null,r}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}};function D(e,t){if(e&&e.includes(S.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+S.sep+"`")}function T(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function O(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function L(e){if(e)throw e}var P=(0,r.f)(l(),1),I=(0,r.f)(i(),1);function z(e){if("object"!=typeof e||null===e)return!1;let t=Object.getPrototypeOf(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}var M=(function e(){let t,n;let r=(t=[],n={run:function(...e){let n=-1,r=e.pop();if("function"!=typeof r)throw TypeError("Expected function as last argument, not "+r);(function l(i,...o){let a=t[++n],u=-1;if(i){r(i);return}for(;++u<e.length;)(null===o[u]||void 0===o[u])&&(o[u]=e[u]);e=o,a?(function(e,t){let n;return function(...t){let i=e.length>t.length,o;i&&t.push(r);try{o=e.apply(this,t)}catch(e){if(i&&n)throw e;return r(e)}i||(o instanceof Promise?o.then(l,r):o instanceof Error?r(o):l(o))};function r(e,...l){n||(n=!0,t(e,...l))}function l(e){r(null,e)}})(a,l)(...o):r(null,...o)})(null,...e)},use:function(e){if("function"!=typeof e)throw TypeError("Expected `middelware` to be a function, not "+e);return t.push(e),n}}),l=[],i={},o,a=-1;return u.data=function(e,t){return"string"==typeof e?2==arguments.length?(N("data",o),i[e]=t,u):j.call(i,e)&&i[e]||null:e?(N("data",o),i=e,u):i},u.Parser=void 0,u.Compiler=void 0,u.freeze=function(){if(o)return u;for(;++a<l.length;){let[e,...t]=l[a];if(!1===t[0])continue;!0===t[0]&&(t[0]=void 0);let n=e.call(u,...t);"function"==typeof n&&r.use(n)}return o=!0,a=Number.POSITIVE_INFINITY,u},u.attachers=l,u.use=function(e,...t){let n;if(N("use",o),null!=e){if("function"==typeof e)s(e,...t);else if("object"==typeof e)Array.isArray(e)?a(e):r(e);else throw TypeError("Expected usable value, not `"+e+"`")}return n&&(i.settings=Object.assign(i.settings||{},n)),u;function r(e){a(e.plugins),e.settings&&(n=Object.assign(n||{},e.settings))}function a(e){let t=-1;if(null!=e){if(Array.isArray(e))for(;++t<e.length;)!function(e){if("function"==typeof e)s(e);else if("object"==typeof e){if(Array.isArray(e)){let[t,...n]=e;s(t,...n)}else r(e)}else throw TypeError("Expected usable value, not `"+e+"`")}(e[t]);else throw TypeError("Expected a list of plugins, not `"+e+"`")}}function s(e,t){let n=-1,r;for(;++n<l.length;)if(l[n][0]===e){r=l[n];break}r?(z(r[1])&&z(t)&&(t=(0,I.default)(!0,r[1],t)),r[1]=t):l.push([...arguments])}},u.parse=function(e){u.freeze();let t=V(e),n=u.Parser;return _("parse",n),R(n,"parse")?new n(String(t),t).parse():n(String(t),t)},u.stringify=function(e,t){u.freeze();let n=V(t),r=u.Compiler;return B("stringify",r),H(e),R(r,"compile")?new r(e,n).compile():r(e,n)},u.run=function(e,t,n){if(H(e),u.freeze(),n||"function"!=typeof t||(n=t,t=void 0),!n)return new Promise(l);function l(l,i){r.run(e,V(t),function(t,r,o){r=r||e,t?i(t):l?l(r):n(null,r,o)})}l(null,n)},u.runSync=function(e,t){let n,r;return u.run(e,t,function(e,t){L(e),n=t,r=!0}),U("runSync","run",r),n},u.process=function(e,t){if(u.freeze(),_("process",u.Parser),B("process",u.Compiler),!t)return new Promise(n);function n(n,r){let l=V(e);function i(e,l){e||!l?r(e):n?n(l):t(null,l)}u.run(u.parse(l),l,(e,t,n)=>{if(!e&&t&&n){let r=u.stringify(t,n);null==r||("string"==typeof r||(0,P.default)(r)?n.value=r:n.result=r),i(e,n)}else i(e)})}n(null,t)},u.processSync=function(e){let t;u.freeze(),_("processSync",u.Parser),B("processSync",u.Compiler);let n=V(e);return u.process(n,function(e){t=!0,L(e)}),U("processSync","process",t),n},u;function u(){let t=e(),n=-1;for(;++n<l.length;)t.use(...l[n]);return t.data((0,I.default)(!0,{},i)),t}})().freeze(),j={}.hasOwnProperty;function R(e,t){return"function"==typeof e&&e.prototype&&(function(e){let t;for(t in e)if(j.call(e,t))return!0;return!1}(e.prototype)||t in e.prototype)}function _(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `Parser`")}function B(e,t){if("function"!=typeof t)throw TypeError("Cannot `"+e+"` without `Compiler`")}function N(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function H(e){if(!z(e)||"string"!=typeof e.type)throw TypeError("Expected node, got `"+e+"`")}function U(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function V(e){return e&&"object"==typeof e&&"message"in e&&"messages"in e?e:new A(e)}var q={};function $(e,t,n){if(e&&"object"==typeof e){if("value"in e)return"html"!==e.type||n?e.value:"";if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return W(e.children,t,n)}return Array.isArray(e)?W(e,t,n):""}function W(e,t,n){let r=[],l=-1;for(;++l<e.length;)r[l]=$(e[l],t,n);return r.join("")}function Q(e,t,n,r){let l=e.length,i=0,o;if(t=t<0?-t>l?0:l+t:t>l?l:t,n=n>0?n:0,r.length<1e4)(o=Array.from(r)).unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);i<r.length;)(o=r.slice(i,i+1e4)).unshift(t,0),e.splice(...o),i+=1e4,t+=1e4}function Y(e,t){return e.length>0?(Q(e,e.length,0,t),e):t}var K={}.hasOwnProperty;function X(e){let t={},n=-1;for(;++n<e.length;)!function(e,t){let n;for(n in t){let r=(K.call(e,n)?e[n]:void 0)||(e[n]={}),l=t[n],i;if(l)for(i in l){K.call(r,i)||(r[i]=[]);let e=l[i];!function(e,t){let n=-1,r=[];for(;++n<t.length;)("after"===t[n].add?e:r).push(t[n]);Q(e,0,0,r)}(r[i],Array.isArray(e)?e:e?[e]:[])}}}(t,e[n]);return t}var Z=es(/[A-Za-z]/),J=es(/[\dA-Za-z]/),G=es(/[#-'*+\--9=?A-Z^-~]/);function ee(e){return null!==e&&(e<32||127===e)}var et=es(/\d/),en=es(/[\dA-Fa-f]/),er=es(/[!-/:-@[-`{-~]/);function el(e){return null!==e&&e<-2}function ei(e){return null!==e&&(e<0||32===e)}function eo(e){return -2===e||-1===e||32===e}var ea=es(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),eu=es(/\s/);function es(e){return function(t){return null!==t&&e.test(String.fromCharCode(t))}}function ec(e,t,n,r){let l=r?r-1:Number.POSITIVE_INFINITY,i=0;return function(r){return eo(r)?(e.enter(n),function r(o){return eo(o)&&i++<l?(e.consume(o),r):(e.exit(n),t(o))}(r)):t(r)}}var ef={tokenize:function(e){let t=e.attempt(this.parser.constructs.contentInitial,function(n){if(null===n){e.consume(n);return}return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),ec(e,t,"linePrefix")},function(t){return e.enter("paragraph"),function t(r){let l=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,function n(r){if(null===r){e.exit("chunkText"),e.exit("paragraph"),e.consume(r);return}return el(r)?(e.consume(r),e.exit("chunkText"),t):(e.consume(r),n)}(r)}(t)}),n;return t}},ep={tokenize:function(e){let t=this,n=[],r=0,l,i,o;return a;function a(l){if(r<n.length){let i=n[r];return t.containerState=i[1],e.attempt(i[0].continuation,u,s)(l)}return s(l)}function u(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,l&&y();let n=t.events.length,i=n,o;for(;i--;)if("exit"===t.events[i][0]&&"chunkFlow"===t.events[i][1].type){o=t.events[i][1].end;break}m(r);let a=n;for(;a<t.events.length;)t.events[a][1].end=Object.assign({},o),a++;return Q(t.events,i+1,0,t.events.slice(n)),t.events.length=a,s(e)}return a(e)}function s(i){if(r===n.length){if(!l)return p(i);if(l.currentConstruct&&l.currentConstruct.concrete)return h(i);t.interrupt=!!(l.currentConstruct&&!l._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(ed,c,f)(i)}function c(e){return l&&y(),m(r),p(e)}function f(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,h(e)}function p(n){return t.containerState={},e.attempt(ed,d,h)(n)}function d(e){return r++,n.push([t.currentConstruct,t.containerState]),p(e)}function h(n){if(null===n){l&&y(),m(0),e.consume(n);return}return l=l||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:i,_tokenizer:l}),function n(l){if(null===l){g(e.exit("chunkFlow"),!0),m(0),e.consume(l);return}return el(l)?(e.consume(l),g(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(l),n)}(n)}function g(e,n){let a=t.sliceStream(e);if(n&&a.push(null),e.previous=i,i&&(i.next=e),i=e,l.defineSkip(e.start),l.write(a),t.parser.lazy[e.start.line]){let e=l.events.length;for(;e--;)if(l.events[e][1].start.offset<o&&(!l.events[e][1].end||l.events[e][1].end.offset>o))return;let n=t.events.length,i=n,a,u;for(;i--;)if("exit"===t.events[i][0]&&"chunkFlow"===t.events[i][1].type){if(a){u=t.events[i][1].end;break}a=!0}for(m(r),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},u),e++;Q(t.events,i+1,0,t.events.slice(n)),t.events.length=e}}function m(r){let l=n.length;for(;l-- >r;){let r=n[l];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function y(){l.write([null]),i=void 0,l=void 0,t.containerState._closeFlow=void 0}}},ed={tokenize:function(e,t,n){return ec(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};function eh(e){return null===e||ei(e)||eu(e)?1:ea(e)?2:void 0}function eg(e,t,n){let r=[],l=-1;for(;++l<e.length;){let i=e[l].resolveAll;i&&!r.includes(i)&&(t=i(t,n),r.push(i))}return t}var em={name:"attention",tokenize:function(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,l=eh(r),i;return function(o){return i=o,e.enter("attentionSequence"),function o(a){if(a===i)return e.consume(a),o;let u=e.exit("attentionSequence"),s=eh(a),c=!s||2===s&&l||n.includes(a),f=!l||2===l&&s||n.includes(r);return u._open=!!(42===i?c:c&&(l||!f)),u._close=!!(42===i?f:f&&(s||!c)),t(a)}(o)}},resolveAll:function(e,t){let n=-1,r,l,i,o,a,u,s,c;for(;++n<e.length;)if("enter"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._close){for(r=n;r--;)if("exit"===e[r][0]&&"attentionSequence"===e[r][1].type&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;u=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let f=Object.assign({},e[r][1].end),p=Object.assign({},e[n][1].start);ey(f,-u),ey(p,u),o={type:u>1?"strongSequence":"emphasisSequence",start:f,end:Object.assign({},e[r][1].end)},a={type:u>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:p},i={type:u>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},l={type:u>1?"strong":"emphasis",start:Object.assign({},o.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},o.start),e[n][1].start=Object.assign({},a.end),s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=Y(s,[["enter",e[r][1],t],["exit",e[r][1],t]])),s=Y(s,[["enter",l,t],["enter",o,t],["exit",o,t],["enter",i,t]]),s=Y(s,eg(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),s=Y(s,[["exit",i,t],["enter",a,t],["exit",a,t],["exit",l,t]]),e[n][1].end.offset-e[n][1].start.offset?(c=2,s=Y(s,[["enter",e[n][1],t],["exit",e[n][1],t]])):c=0,Q(e,r-1,n-r+3,s),n=r+s.length-c-2;break}}for(n=-1;++n<e.length;)"attentionSequence"===e[n][1].type&&(e[n][1].type="data");return e}};function ey(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var eb={tokenize:function(e,t,n){return function(t){return eo(t)?ec(e,r,"linePrefix")(t):r(t)};function r(e){return null===e||el(e)?t(e):n(e)}},partial:!0},ek={name:"blockQuote",tokenize:function(e,t,n){let r=this;return function(t){if(62===t){let n=r.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),l}return n(t)};function l(n){return eo(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}},continuation:{tokenize:function(e,t,n){let r=this;return function(t){return eo(t)?ec(e,l,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):l(t)};function l(r){return e.attempt(ek,t,n)(r)}}},exit:function(e){e.exit("blockQuote")}},ex={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),r};function r(r){return er(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}},ev=document.createElement("i");function ew(e){let t="&"+e+";";ev.innerHTML=t;let n=ev.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&n!==t&&n}var eS={name:"characterReference",tokenize:function(e,t,n){let r=this,l=0,i,o;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),a};function a(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),i=31,o=J,s(t))}function u(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),i=6,o=en,s):(e.enter("characterReferenceValue"),i=7,o=et,s(t))}function s(a){if(59===a&&l){let l=e.exit("characterReferenceValue");return o!==J||ew(r.sliceSerialize(l))?(e.enter("characterReferenceMarker"),e.consume(a),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(a)}return o(a)&&l++<i?(e.consume(a),s):n(a)}}},eC={tokenize:function(e,t,n){let r=this;return function(t){return null===t?n(t):(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l)};function l(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},eE={name:"codeFenced",tokenize:function(e,t,n){let r=this,l={tokenize:function(e,t,n){let l=0;return function(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),i};function i(t){return e.enter("codeFencedFence"),eo(t)?ec(e,u,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):u(t)}function u(t){return t===a?(e.enter("codeFencedFenceSequence"),function t(r){return r===a?(l++,e.consume(r),t):l>=o?(e.exit("codeFencedFenceSequence"),eo(r)?ec(e,s,"whitespace")(r):s(r)):n(r)}(t)):n(t)}function s(r){return null===r||el(r)?(e.exit("codeFencedFence"),t(r)):n(r)}},partial:!0},i=0,o=0,a;return function(t){let l;return i=(l=r.events[r.events.length-1])&&"linePrefix"===l[1].type?l[2].sliceSerialize(l[1],!0).length:0,a=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),function t(r){return r===a?(o++,e.consume(r),t):o<3?n(r):(e.exit("codeFencedFenceSequence"),eo(r)?ec(e,u,"whitespace")(r):u(r))}(t)};function u(l){return null===l||el(l)?(e.exit("codeFencedFence"),r.interrupt?t(l):e.check(eC,c,h)(l)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),function t(r){return null===r||el(r)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),u(r)):eo(r)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ec(e,s,"whitespace")(r)):96===r&&r===a?n(r):(e.consume(r),t)}(l))}function s(t){return null===t||el(t)?u(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),function t(r){return null===r||el(r)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),u(r)):96===r&&r===a?n(r):(e.consume(r),t)}(t))}function c(t){return e.attempt(l,h,f)(t)}function f(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),p}function p(t){return i>0&&eo(t)?ec(e,d,"linePrefix",i+1)(t):d(t)}function d(t){return null===t||el(t)?e.check(eC,c,h)(t):(e.enter("codeFlowValue"),function t(n){return null===n||el(n)?(e.exit("codeFlowValue"),d(n)):(e.consume(n),t)}(t))}function h(n){return e.exit("codeFenced"),t(n)}},concrete:!0},eF={name:"codeIndented",tokenize:function(e,t,n){let r=this;return function(t){return e.enter("codeIndented"),ec(e,l,"linePrefix",5)(t)};function l(t){let l=r.events[r.events.length-1];return l&&"linePrefix"===l[1].type&&l[2].sliceSerialize(l[1],!0).length>=4?function t(n){return null===n?i(n):el(n)?e.attempt(eA,t,i)(n):(e.enter("codeFlowValue"),function n(r){return null===r||el(r)?(e.exit("codeFlowValue"),t(r)):(e.consume(r),n)}(n))}(t):n(t)}function i(n){return e.exit("codeIndented"),t(n)}}},eA={tokenize:function(e,t,n){let r=this;return l;function l(t){return r.parser.lazy[r.now().line]?n(t):el(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l):ec(e,i,"linePrefix",5)(t)}function i(e){let i=r.events[r.events.length-1];return i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(e):el(e)?l(e):n(e)}},partial:!0};function eD(e){let t={},n=-1,r,l,i,o,a,u,s;for(;++n<e.length;){for(;(n in t);)n=t[n];if(r=e[n],n&&"chunkFlow"===r[1].type&&"listItemPrefix"===e[n-1][1].type&&((i=0)<(u=r[1]._tokenizer.events).length&&"lineEndingBlank"===u[i][1].type&&(i+=2),i<u.length&&"content"===u[i][1].type))for(;++i<u.length&&"content"!==u[i][1].type;)"chunkText"===u[i][1].type&&(u[i][1]._isInFirstContentOfListItem=!0,i++);if("enter"===r[0])r[1].contentType&&(Object.assign(t,function(e,t){let n=e[t][1],r=e[t][2],l=t-1,i=[],o=n._tokenizer||r.parser[n.contentType](n.start),a=o.events,u=[],s={},c,f,p=-1,d=n,h=0,g=0,m=[0];for(;d;){for(;e[++l][1]!==d;);i.push(l),d._tokenizer||(c=r.sliceStream(d),d.next||c.push(null),f&&o.defineSkip(d.start),d._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),d._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),f=d,d=d.next}for(d=n;++p<a.length;)"exit"===a[p][0]&&"enter"===a[p-1][0]&&a[p][1].type===a[p-1][1].type&&a[p][1].start.line!==a[p][1].end.line&&(g=p+1,m.push(g),d._tokenizer=void 0,d.previous=void 0,d=d.next);for(o.events=[],d?(d._tokenizer=void 0,d.previous=void 0):m.pop(),p=m.length;p--;){let t=a.slice(m[p],m[p+1]),n=i.pop();u.unshift([n,n+t.length-1]),Q(e,n,2,t)}for(p=-1;++p<u.length;)s[h+u[p][0]]=h+u[p][1],h+=u[p][1]-u[p][0]-1;return s}(e,n)),n=t[n],s=!0);else if(r[1]._container){for(i=n,l=void 0;i--&&("lineEnding"===(o=e[i])[1].type||"lineEndingBlank"===o[1].type);)"enter"===o[0]&&(l&&(e[l][1].type="lineEndingBlank"),o[1].type="lineEnding",l=i);l&&(r[1].end=Object.assign({},e[l][1].start),(a=e.slice(l,n)).unshift(r),Q(e,l,n-l+1,a))}}return!s}var eT={tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(t)};function r(t){return null===t?l(t):el(t)?e.check(eO,i,l)(t):(e.consume(t),r)}function l(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function i(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}},resolve:function(e){return eD(e),e}},eO={tokenize:function(e,t,n){let r=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),ec(e,l,"linePrefix")};function l(l){if(null===l||el(l))return n(l);let i=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&i&&"linePrefix"===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}},partial:!0};function eL(e,t,n,r,l,i,o,a,u){let s=u||Number.POSITIVE_INFINITY,c=0;return function(t){return 60===t?(e.enter(r),e.enter(l),e.enter(i),e.consume(t),e.exit(i),f):null===t||32===t||41===t||ee(t)?n(t):(e.enter(r),e.enter(o),e.enter(a),e.enter("chunkString",{contentType:"string"}),h(t))};function f(n){return 62===n?(e.enter(i),e.consume(n),e.exit(i),e.exit(l),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),p(n))}function p(t){return 62===t?(e.exit("chunkString"),e.exit(a),f(t)):null===t||60===t||el(t)?n(t):(e.consume(t),92===t?d:p)}function d(t){return 60===t||62===t||92===t?(e.consume(t),p):p(t)}function h(l){return!c&&(null===l||41===l||ei(l))?(e.exit("chunkString"),e.exit(a),e.exit(o),e.exit(r),t(l)):c<s&&40===l?(e.consume(l),c++,h):41===l?(e.consume(l),c--,h):null===l||32===l||40===l||ee(l)?n(l):(e.consume(l),92===l?g:h)}function g(t){return 40===t||41===t||92===t?(e.consume(t),h):h(t)}}function eP(e,t,n,r,l,i){let o=this,a=0,u;return function(t){return e.enter(r),e.enter(l),e.consume(t),e.exit(l),e.enter(i),s};function s(f){return a>999||null===f||91===f||93===f&&!u||94===f&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?n(f):93===f?(e.exit(i),e.enter(l),e.consume(f),e.exit(l),e.exit(r),t):el(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),s):(e.enter("chunkString",{contentType:"string"}),c(f))}function c(t){return null===t||91===t||93===t||el(t)||a++>999?(e.exit("chunkString"),s(t)):(e.consume(t),u||(u=!eo(t)),92===t?f:c)}function f(t){return 91===t||92===t||93===t?(e.consume(t),a++,c):c(t)}}function eI(e,t,n,r,l,i){let o;return function(t){return 34===t||39===t||40===t?(e.enter(r),e.enter(l),e.consume(t),e.exit(l),o=40===t?41:t,a):n(t)};function a(n){return n===o?(e.enter(l),e.consume(n),e.exit(l),e.exit(r),t):(e.enter(i),u(n))}function u(t){return t===o?(e.exit(i),a(o)):null===t?n(t):el(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),ec(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),s(t))}function s(t){return t===o||null===t||el(t)?(e.exit("chunkString"),u(t)):(e.consume(t),92===t?c:s)}function c(t){return t===o||92===t?(e.consume(t),s):s(t)}}function ez(e,t){let n;return function r(l){return el(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),n=!0,r):eo(l)?ec(e,r,n?"linePrefix":"lineSuffix")(l):t(l)}}function eM(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}var ej={tokenize:function(e,t,n){return function(t){return ei(t)?ez(e,r)(t):n(t)};function r(t){return eI(e,l,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function l(t){return eo(t)?ec(e,i,"whitespace")(t):i(t)}function i(e){return null===e||el(e)?t(e):n(e)}},partial:!0},eR=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],e_=["pre","script","style","textarea"],eB={tokenize:function(e,t,n){return function(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(eb,t,n)}},partial:!0},eN={tokenize:function(e,t,n){let r=this;return function(t){return el(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l):n(t)};function l(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},eH={name:"labelEnd",tokenize:function(e,t,n){let r=this,l=r.events.length,i,o;for(;l--;)if(("labelImage"===r.events[l][1].type||"labelLink"===r.events[l][1].type)&&!r.events[l][1]._balanced){i=r.events[l][1];break}return function(t){return i?i._inactive?c(t):(o=r.parser.defined.includes(eM(r.sliceSerialize({start:i.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),a):n(t)};function a(t){return 40===t?e.attempt(eU,s,o?s:c)(t):91===t?e.attempt(eV,s,o?u:c)(t):o?s(t):c(t)}function u(t){return e.attempt(eq,s,c)(t)}function s(e){return t(e)}function c(e){return i._balanced=!0,n(e)}},resolveTo:function(e,t){let n=e.length,r=0,l,i,o,a;for(;n--;)if(l=e[n][1],i){if("link"===l.type||"labelLink"===l.type&&l._inactive)break;"enter"===e[n][0]&&"labelLink"===l.type&&(l._inactive=!0)}else if(o){if("enter"===e[n][0]&&("labelImage"===l.type||"labelLink"===l.type)&&!l._balanced&&(i=n,"labelLink"!==l.type)){r=2;break}}else"labelEnd"===l.type&&(o=n);let u={type:"labelLink"===e[i][1].type?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[o][1].end)},c={type:"labelText",start:Object.assign({},e[i+r+2][1].end),end:Object.assign({},e[o-2][1].start)};return a=Y(a=[["enter",u,t],["enter",s,t]],e.slice(i+1,i+r+3)),a=Y(a,[["enter",c,t]]),a=Y(a,eg(t.parser.constructs.insideSpan.null,e.slice(i+r+4,o-3),t)),a=Y(a,[["exit",c,t],e[o-2],e[o-1],["exit",s,t]]),a=Y(a,e.slice(o+1)),a=Y(a,[["exit",u,t]]),Q(e,i,e.length,a),e},resolveAll:function(e){let t=-1;for(;++t<e.length;){let n=e[t][1];("labelImage"===n.type||"labelLink"===n.type||"labelEnd"===n.type)&&(e.splice(t+1,"labelImage"===n.type?4:2),n.type="data",t++)}return e}},eU={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),r};function r(t){return ei(t)?ez(e,l)(t):l(t)}function l(t){return 41===t?s(t):eL(e,i,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function i(t){return ei(t)?ez(e,a)(t):s(t)}function o(e){return n(e)}function a(t){return 34===t||39===t||40===t?eI(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):s(t)}function u(t){return ei(t)?ez(e,s)(t):s(t)}function s(r){return 41===r?(e.enter("resourceMarker"),e.consume(r),e.exit("resourceMarker"),e.exit("resource"),t):n(r)}}},eV={tokenize:function(e,t,n){let r=this;return function(t){return eP.call(r,e,l,i,"reference","referenceMarker","referenceString")(t)};function l(e){return r.parser.defined.includes(eM(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function i(e){return n(e)}}},eq={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),r};function r(r){return 93===r?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}},e$={name:"labelStartImage",tokenize:function(e,t,n){let r=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),l};function l(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),i):n(t)}function i(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:eH.resolveAll},eW={name:"labelStartLink",tokenize:function(e,t,n){let r=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),l};function l(e){return 94===e&&"_hiddenFootnoteSupport"in r.parser.constructs?n(e):t(e)}},resolveAll:eH.resolveAll},eQ={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),ec(e,t,"linePrefix")}}},eY={name:"thematicBreak",tokenize:function(e,t,n){let r=0,l;return function(i){return e.enter("thematicBreak"),l=i,function i(o){return o===l?(e.enter("thematicBreakSequence"),function t(n){return n===l?(e.consume(n),r++,t):(e.exit("thematicBreakSequence"),eo(n)?ec(e,i,"whitespace")(n):i(n))}(o)):r>=3&&(null===o||el(o))?(e.exit("thematicBreak"),t(o)):n(o)}(i)}}},eK={name:"list",tokenize:function(e,t,n){let r=this,l=r.events[r.events.length-1],i=l&&"linePrefix"===l[1].type?l[2].sliceSerialize(l[1],!0).length:0,o=0;return function(t){let l=r.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===l?!r.containerState.marker||t===r.containerState.marker:et(t)){if(r.containerState.type||(r.containerState.type=l,e.enter(l,{_container:!0})),"listUnordered"===l)return e.enter("listItemPrefix"),42===t||45===t?e.check(eY,n,a)(t):a(t);if(!r.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),function t(l){return et(l)&&++o<10?(e.consume(l),t):(!r.interrupt||o<2)&&(r.containerState.marker?l===r.containerState.marker:41===l||46===l)?(e.exit("listItemValue"),a(l)):n(l)}(t)}return n(t)};function a(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||t,e.check(eb,r.interrupt?n:u,e.attempt(eX,c,s))}function u(e){return r.containerState.initialBlankLine=!0,i++,c(e)}function s(t){return eo(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),c):n(t)}function c(n){return r.containerState.size=i+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}},continuation:{tokenize:function(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(eb,function(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,ec(e,t,"listItemIndent",r.containerState.size+1)(n)},function(n){return r.containerState.furtherBlankLines||!eo(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(eZ,t,l)(n))});function l(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,ec(e,e.attempt(eK,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}},exit:function(e){e.exit(this.containerState.type)}},eX={tokenize:function(e,t,n){let r=this;return ec(e,function(e){let l=r.events[r.events.length-1];return!eo(e)&&l&&"listItemPrefixWhitespace"===l[1].type?t(e):n(e)},"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},eZ={tokenize:function(e,t,n){let r=this;return ec(e,function(e){let l=r.events[r.events.length-1];return l&&"listItemIndent"===l[1].type&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(e):n(e)},"listItemIndent",r.containerState.size+1)},partial:!0},eJ={name:"setextUnderline",tokenize:function(e,t,n){let r=this,l;return function(t){let o=r.events.length,a;for(;o--;)if("lineEnding"!==r.events[o][1].type&&"linePrefix"!==r.events[o][1].type&&"content"!==r.events[o][1].type){a="paragraph"===r.events[o][1].type;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||a)?(e.enter("setextHeadingLine"),l=t,e.enter("setextHeadingLineSequence"),function t(n){return n===l?(e.consume(n),t):(e.exit("setextHeadingLineSequence"),eo(n)?ec(e,i,"lineSuffix")(n):i(n))}(t)):n(t)};function i(r){return null===r||el(r)?(e.exit("setextHeadingLine"),t(r)):n(r)}},resolveTo:function(e,t){let n=e.length,r,l,i;for(;n--;)if("enter"===e[n][0]){if("content"===e[n][1].type){r=n;break}"paragraph"===e[n][1].type&&(l=n)}else"content"===e[n][1].type&&e.splice(n,1),i||"definition"!==e[n][1].type||(i=n);let o={type:"setextHeading",start:Object.assign({},e[l][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[l][1].type="setextHeadingText",i?(e.splice(l,0,["enter",o,t]),e.splice(i+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[i][1].end)):e[r][1]=o,e.push(["exit",o,t]),e}},eG={tokenize:function(e){let t=this,n=e.attempt(eb,function(r){if(null===r){e.consume(r);return}return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n},e.attempt(this.parser.constructs.flowInitial,r,ec(e,e.attempt(this.parser.constructs.flow,r,e.attempt(eT,r)),"linePrefix")));return n;function r(r){if(null===r){e.consume(r);return}return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n}}},e1={resolveAll:e4()},e0=e5("string"),e2=e5("text");function e5(e){return{tokenize:function(t){let n=this,r=this.parser.constructs[e],l=t.attempt(r,i,o);return i;function i(e){return u(e)?l(e):o(e)}function o(e){if(null===e){t.consume(e);return}return t.enter("data"),t.consume(e),a}function a(e){return u(e)?(t.exit("data"),l(e)):(t.consume(e),a)}function u(e){if(null===e)return!0;let t=r[e],l=-1;if(t)for(;++l<t.length;){let e=t[l];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},resolveAll:e4("text"===e?e3:void 0)}}function e4(e){return function(t,n){let r=-1,l;for(;++r<=t.length;)void 0===l?t[r]&&"data"===t[r][1].type&&(l=r,r++):t[r]&&"data"===t[r][1].type||(r!==l+2&&(t[l][1].end=t[r-1][1].end,t.splice(l+2,r-l-2),r=l+2),l=void 0);return e?e(t,n):t}}function e3(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){let r=e[n-1][1],l=t.sliceStream(r),i=l.length,o=-1,a=0,u;for(;i--;){let e=l[i];if("string"==typeof e){for(o=e.length;32===e.charCodeAt(o-1);)a++,o--;if(o)break;o=-1}else if(-2===e)u=!0,a++;else if(-1!==e){i++;break}}if(a){let l={type:n===e.length||u||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+i,_bufferIndex:i?o:r.start._bufferIndex+o},end:Object.assign({},r.end)};r.end=Object.assign({},l.start),r.start.offset===r.end.offset?Object.assign(r,l):(e.splice(n,0,["enter",l,t],["exit",l,t]),n+=2)}n++}return e}var e6={};(0,r.e)(e6,{attentionMarkers:()=>tl,contentInitial:()=>e7,disable:()=>ti,document:()=>e9,flow:()=>te,flowInitial:()=>e8,insideSpan:()=>tr,string:()=>tt,text:()=>tn});var e9={42:eK,43:eK,45:eK,48:eK,49:eK,50:eK,51:eK,52:eK,53:eK,54:eK,55:eK,56:eK,57:eK,62:ek},e7={91:{name:"definition",tokenize:function(e,t,n){let r=this,l;return function(t){return e.enter("definition"),eP.call(r,e,i,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)};function i(t){return l=eM(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),o):n(t)}function o(t){return ei(t)?ez(e,a)(t):a(t)}function a(t){return eL(e,u,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function u(t){return e.attempt(ej,s,s)(t)}function s(t){return eo(t)?ec(e,c,"whitespace")(t):c(t)}function c(i){return null===i||el(i)?(e.exit("definition"),r.parser.defined.push(l),t(i)):n(i)}}}},e8={[-2]:eF,[-1]:eF,32:eF},te={35:{name:"headingAtx",tokenize:function(e,t,n){let r=0;return function(l){return e.enter("atxHeading"),e.enter("atxHeadingSequence"),function l(i){return 35===i&&r++<6?(e.consume(i),l):null===i||ei(i)?(e.exit("atxHeadingSequence"),function n(r){return 35===r?(e.enter("atxHeadingSequence"),function t(r){return 35===r?(e.consume(r),t):(e.exit("atxHeadingSequence"),n(r))}(r)):null===r||el(r)?(e.exit("atxHeading"),t(r)):eo(r)?ec(e,n,"whitespace")(r):(e.enter("atxHeadingText"),function t(r){return null===r||35===r||ei(r)?(e.exit("atxHeadingText"),n(r)):(e.consume(r),t)}(r))}(i)):n(i)}(l)}},resolve:function(e,t){let n=e.length-2,r=3,l,i;return"whitespace"===e[3][1].type&&(r+=2),n-2>r&&"whitespace"===e[n][1].type&&(n-=2),"atxHeadingSequence"===e[n][1].type&&(r===n-1||n-4>r&&"whitespace"===e[n-2][1].type)&&(n-=r+1===n?2:4),n>r&&(l={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},i={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Q(e,r,n-r+1,[["enter",l,t],["enter",i,t],["exit",i,t],["exit",l,t]])),e}},42:eY,45:[eJ,eY],60:{name:"htmlFlow",tokenize:function(e,t,n){let r=this,l,i,o,a,u;return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),s};function s(a){return 33===a?(e.consume(a),c):47===a?(e.consume(a),i=!0,d):63===a?(e.consume(a),l=3,r.interrupt?t:P):Z(a)?(e.consume(a),o=String.fromCharCode(a),h):n(a)}function c(i){return 45===i?(e.consume(i),l=2,f):91===i?(e.consume(i),l=5,a=0,p):Z(i)?(e.consume(i),l=4,r.interrupt?t:P):n(i)}function f(l){return 45===l?(e.consume(l),r.interrupt?t:P):n(l)}function p(l){let i="CDATA[";return l===i.charCodeAt(a++)?(e.consume(l),a===i.length?r.interrupt?t:C:p):n(l)}function d(t){return Z(t)?(e.consume(t),o=String.fromCharCode(t),h):n(t)}function h(a){if(null===a||47===a||62===a||ei(a)){let u=47===a,s=o.toLowerCase();return!u&&!i&&e_.includes(s)?(l=1,r.interrupt?t(a):C(a)):eR.includes(o.toLowerCase())?(l=6,u?(e.consume(a),g):r.interrupt?t(a):C(a)):(l=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(a):i?function t(n){return eo(n)?(e.consume(n),t):w(n)}(a):m(a))}return 45===a||J(a)?(e.consume(a),o+=String.fromCharCode(a),h):n(a)}function g(l){return 62===l?(e.consume(l),r.interrupt?t:C):n(l)}function m(t){return 47===t?(e.consume(t),w):58===t||95===t||Z(t)?(e.consume(t),y):eo(t)?(e.consume(t),m):w(t)}function y(t){return 45===t||46===t||58===t||95===t||J(t)?(e.consume(t),y):b(t)}function b(t){return 61===t?(e.consume(t),k):eo(t)?(e.consume(t),b):m(t)}function k(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),u=t,x):eo(t)?(e.consume(t),k):function t(n){return null===n||34===n||39===n||47===n||60===n||61===n||62===n||96===n||ei(n)?b(n):(e.consume(n),t)}(t)}function x(t){return t===u?(e.consume(t),u=null,v):null===t||el(t)?n(t):(e.consume(t),x)}function v(e){return 47===e||62===e||eo(e)?m(e):n(e)}function w(t){return 62===t?(e.consume(t),S):n(t)}function S(t){return null===t||el(t)?C(t):eo(t)?(e.consume(t),S):n(t)}function C(t){return 45===t&&2===l?(e.consume(t),D):60===t&&1===l?(e.consume(t),T):62===t&&4===l?(e.consume(t),I):63===t&&3===l?(e.consume(t),P):93===t&&5===l?(e.consume(t),L):el(t)&&(6===l||7===l)?(e.exit("htmlFlowData"),e.check(eB,z,E)(t)):null===t||el(t)?(e.exit("htmlFlowData"),E(t)):(e.consume(t),C)}function E(t){return e.check(eN,F,z)(t)}function F(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),A}function A(t){return null===t||el(t)?E(t):(e.enter("htmlFlowData"),C(t))}function D(t){return 45===t?(e.consume(t),P):C(t)}function T(t){return 47===t?(e.consume(t),o="",O):C(t)}function O(t){if(62===t){let n=o.toLowerCase();return e_.includes(n)?(e.consume(t),I):C(t)}return Z(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),O):C(t)}function L(t){return 93===t?(e.consume(t),P):C(t)}function P(t){return 62===t?(e.consume(t),I):45===t&&2===l?(e.consume(t),P):C(t)}function I(t){return null===t||el(t)?(e.exit("htmlFlowData"),z(t)):(e.consume(t),I)}function z(n){return e.exit("htmlFlow"),t(n)}},resolveTo:function(e){let t=e.length;for(;t--&&!("enter"===e[t][0]&&"htmlFlow"===e[t][1].type););return t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e},concrete:!0},61:eJ,95:eY,96:eE,126:eE},tt={38:eS,92:ex},tn={[-5]:eQ,[-4]:eQ,[-3]:eQ,33:e$,38:eS,42:em,60:[{name:"autolink",tokenize:function(e,t,n){let r=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),l};function l(t){return Z(t)?(e.consume(t),i):a(t)}function i(t){return 43===t||45===t||46===t||J(t)?(r=1,function t(n){return 58===n?(e.consume(n),r=0,o):(43===n||45===n||46===n||J(n))&&r++<32?(e.consume(n),t):(r=0,a(n))}(t)):a(t)}function o(r){return 62===r?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(r),e.exit("autolinkMarker"),e.exit("autolink"),t):null===r||32===r||60===r||ee(r)?n(r):(e.consume(r),o)}function a(t){return 64===t?(e.consume(t),u):G(t)?(e.consume(t),a):n(t)}function u(l){return J(l)?function l(i){return 46===i?(e.consume(i),r=0,u):62===i?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(i),e.exit("autolinkMarker"),e.exit("autolink"),t):function t(i){if((45===i||J(i))&&r++<63){let n=45===i?t:l;return e.consume(i),n}return n(i)}(i)}(l):n(l)}}},{name:"htmlText",tokenize:function(e,t,n){let r=this,l,i,o;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),a};function a(t){return 33===t?(e.consume(t),u):47===t?(e.consume(t),x):63===t?(e.consume(t),b):Z(t)?(e.consume(t),w):n(t)}function u(t){return 45===t?(e.consume(t),s):91===t?(e.consume(t),i=0,d):Z(t)?(e.consume(t),y):n(t)}function s(t){return 45===t?(e.consume(t),p):n(t)}function c(t){return null===t?n(t):45===t?(e.consume(t),f):el(t)?(o=c,O(t)):(e.consume(t),c)}function f(t){return 45===t?(e.consume(t),p):c(t)}function p(e){return 62===e?T(e):45===e?f(e):c(e)}function d(t){let r="CDATA[";return t===r.charCodeAt(i++)?(e.consume(t),i===r.length?h:d):n(t)}function h(t){return null===t?n(t):93===t?(e.consume(t),g):el(t)?(o=h,O(t)):(e.consume(t),h)}function g(t){return 93===t?(e.consume(t),m):h(t)}function m(t){return 62===t?T(t):93===t?(e.consume(t),m):h(t)}function y(t){return null===t||62===t?T(t):el(t)?(o=y,O(t)):(e.consume(t),y)}function b(t){return null===t?n(t):63===t?(e.consume(t),k):el(t)?(o=b,O(t)):(e.consume(t),b)}function k(e){return 62===e?T(e):b(e)}function x(t){return Z(t)?(e.consume(t),v):n(t)}function v(t){return 45===t||J(t)?(e.consume(t),v):function t(n){return el(n)?(o=t,O(n)):eo(n)?(e.consume(n),t):T(n)}(t)}function w(t){return 45===t||J(t)?(e.consume(t),w):47===t||62===t||ei(t)?S(t):n(t)}function S(t){return 47===t?(e.consume(t),T):58===t||95===t||Z(t)?(e.consume(t),C):el(t)?(o=S,O(t)):eo(t)?(e.consume(t),S):T(t)}function C(t){return 45===t||46===t||58===t||95===t||J(t)?(e.consume(t),C):function t(n){return 61===n?(e.consume(n),E):el(n)?(o=t,O(n)):eo(n)?(e.consume(n),t):S(n)}(t)}function E(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),l=t,F):el(t)?(o=E,O(t)):eo(t)?(e.consume(t),E):(e.consume(t),A)}function F(t){return t===l?(e.consume(t),l=void 0,D):null===t?n(t):el(t)?(o=F,O(t)):(e.consume(t),F)}function A(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||ei(t)?S(t):(e.consume(t),A)}function D(e){return 47===e||62===e||ei(e)?S(e):n(e)}function T(r){return 62===r?(e.consume(r),e.exit("htmlTextData"),e.exit("htmlText"),t):n(r)}function O(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),L}function L(t){return eo(t)?ec(e,P,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):P(t)}function P(t){return e.enter("htmlTextData"),o(t)}}}],91:eW,92:[{name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),r};function r(r){return el(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}},ex],93:eH,95:em,96:{name:"codeText",tokenize:function(e,t,n){let r=0,l,i;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),function t(n){return 96===n?(e.consume(n),r++,t):(e.exit("codeTextSequence"),o(n))}(t)};function o(u){return null===u?n(u):32===u?(e.enter("space"),e.consume(u),e.exit("space"),o):96===u?(i=e.enter("codeTextSequence"),l=0,function n(o){return 96===o?(e.consume(o),l++,n):l===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(o)):(i.type="codeTextData",a(o))}(u)):el(u)?(e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),o):(e.enter("codeTextData"),a(u))}function a(t){return null===t||32===t||96===t||el(t)?(e.exit("codeTextData"),o(t)):(e.consume(t),a)}},resolve:function(e){let t=e.length-4,n=3,r,l;if(("lineEnding"===e[3][1].type||"space"===e[n][1].type)&&("lineEnding"===e[t][1].type||"space"===e[t][1].type)){for(r=n;++r<t;)if("codeTextData"===e[r][1].type){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)void 0===l?r!==t&&"lineEnding"!==e[r][1].type&&(l=r):(r===t||"lineEnding"===e[r][1].type)&&(e[l][1].type="codeTextData",r!==l+2&&(e[l][1].end=e[r-1][1].end,e.splice(l+2,r-l-2),t-=r-l-2,r=l+2),l=void 0);return e},previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}}},tr={null:[em,e1]},tl={null:[42,95]},ti={null:[]},to=/[\0\t\n\r]/g;function ta(e,t){let n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(65535&n)==65535||(65535&n)==65534||n>1114111?"�":String.fromCharCode(n)}var tu=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ts(e){return e.replace(tu,tc)}function tc(e,t,n){if(t)return t;if(35===n.charCodeAt(0)){let e=n.charCodeAt(1),t=120===e||88===e;return ta(n.slice(t?2:1),t?16:10)}return ew(n)||e}var tf={}.hasOwnProperty,tp=function(e,t,n){let r,l,i,o;return"string"!=typeof t&&(n=t,t=void 0),(function(e){let t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:i(x),autolinkProtocol:f,autolinkEmail:f,atxHeading:i(m),blockQuote:i(function(){return{type:"blockquote",children:[]}}),characterEscape:f,characterReference:f,codeFenced:i(g),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:i(g,o),codeText:i(function(){return{type:"inlineCode",value:""}},o),codeTextData:f,data:f,codeFlowValue:f,definition:i(function(){return{type:"definition",identifier:"",label:null,title:null,url:""}}),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:i(function(){return{type:"emphasis",children:[]}}),hardBreakEscape:i(y),hardBreakTrailing:i(y),htmlFlow:i(k,o),htmlFlowData:f,htmlText:i(k,o),htmlTextData:f,image:i(function(){return{type:"image",title:null,url:"",alt:null}}),label:o,link:i(x),listItem:i(function(e){return{type:"listItem",spread:e._spread,checked:null,children:[]}}),listItemValue:function(e){n.expectingFirstListItemValue&&(this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),n.expectingFirstListItemValue=void 0)},listOrdered:i(v,function(){n.expectingFirstListItemValue=!0}),listUnordered:i(v),paragraph:i(function(){return{type:"paragraph",children:[]}}),reference:function(){n.referenceType="collapsed"},referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:i(m),strong:i(function(){return{type:"strong",children:[]}}),thematicBreak:i(function(){return{type:"thematicBreak"}})},exit:{atxHeading:u(),atxHeadingSequence:function(e){let t=this.stack[this.stack.length-1];if(!t.depth){let n=this.sliceSerialize(e).length;t.depth=n}},autolink:u(),autolinkEmail:function(e){p.call(this,e),this.stack[this.stack.length-1].url="mailto:"+this.sliceSerialize(e)},autolinkProtocol:function(e){p.call(this,e),this.stack[this.stack.length-1].url=this.sliceSerialize(e)},blockQuote:u(),characterEscapeValue:p,characterReferenceMarkerHexadecimal:h,characterReferenceMarkerNumeric:h,characterReferenceValue:function(e){let t=this.sliceSerialize(e),r=n.characterReferenceType,l;r?(l=ta(t,"characterReferenceMarkerNumeric"===r?10:16),n.characterReferenceType=void 0):l=ew(t);let i=this.stack.pop();i.value+=l,i.position.end=td(e.end)},codeFenced:u(function(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),n.flowCodeInside=void 0}),codeFencedFence:function(){n.flowCodeInside||(this.buffer(),n.flowCodeInside=!0)},codeFencedFenceInfo:function(){let e=this.resume();this.stack[this.stack.length-1].lang=e},codeFencedFenceMeta:function(){let e=this.resume();this.stack[this.stack.length-1].meta=e},codeFlowValue:p,codeIndented:u(function(){let e=this.resume();this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,"")}),codeText:u(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),codeTextData:p,data:p,definition:u(),definitionDestinationString:function(){let e=this.resume();this.stack[this.stack.length-1].url=e},definitionLabelString:function(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=eM(this.sliceSerialize(e)).toLowerCase()},definitionTitleString:function(){let e=this.resume();this.stack[this.stack.length-1].title=e},emphasis:u(),hardBreakEscape:u(d),hardBreakTrailing:u(d),htmlFlow:u(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),htmlFlowData:p,htmlText:u(function(){let e=this.resume();this.stack[this.stack.length-1].value=e}),htmlTextData:p,image:u(function(){let e=this.stack[this.stack.length-1];if(n.inReference){let t=n.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;n.referenceType=void 0}),label:function(){let e=this.stack[this.stack.length-1],t=this.resume(),r=this.stack[this.stack.length-1];if(n.inReference=!0,"link"===r.type){let t=e.children;r.children=t}else r.alt=t},labelText:function(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=ts(t),n.identifier=eM(t).toLowerCase()},lineEnding:function(e){let r=this.stack[this.stack.length-1];if(n.atHardBreak){r.children[r.children.length-1].position.end=td(e.end),n.atHardBreak=void 0;return}!n.setextHeadingSlurpLineEnding&&t.canContainEols.includes(r.type)&&(f.call(this,e),p.call(this,e))},link:u(function(){let e=this.stack[this.stack.length-1];if(n.inReference){let t=n.referenceType||"shortcut";e.type+="Reference",e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;n.referenceType=void 0}),listItem:u(),listOrdered:u(),listUnordered:u(),paragraph:u(),referenceString:function(e){let t=this.resume(),r=this.stack[this.stack.length-1];r.label=t,r.identifier=eM(this.sliceSerialize(e)).toLowerCase(),n.referenceType="full"},resourceDestinationString:function(){let e=this.resume();this.stack[this.stack.length-1].url=e},resourceTitleString:function(){let e=this.resume();this.stack[this.stack.length-1].title=e},resource:function(){n.inReference=void 0},setextHeading:u(function(){n.setextHeadingSlurpLineEnding=void 0}),setextHeadingLineSequence:function(e){this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).charCodeAt(0)?1:2},setextHeadingText:function(){n.setextHeadingSlurpLineEnding=!0},strong:u(),thematicBreak:u()}};(function e(t,n){let r=-1;for(;++r<n.length;){let l=n[r];Array.isArray(l)?e(t,l):function(e,t){let n;for(n in t)if(tf.call(t,n)){if("canContainEols"===n){let r=t[n];r&&e[n].push(...r)}else if("transforms"===n){let r=t[n];r&&e[n].push(...r)}else if("enter"===n||"exit"===n){let r=t[n];r&&Object.assign(e[n],r)}}}(t,l)}})(t,(e||{}).mdastExtensions||[]);let n={};return function(e){let n={type:"root",children:[]},i={stack:[n],tokenStack:[],config:t,enter:a,exit:s,buffer:o,resume:c,setData:r,getData:l},u=[],f=-1;for(;++f<e.length;)("listOrdered"===e[f][1].type||"listUnordered"===e[f][1].type)&&("enter"===e[f][0]?u.push(f):f=function(e,t,n){let r=t-1,l=-1,i=!1,o,a,u,s;for(;++r<=n;){let t=e[r];if("listUnordered"===t[1].type||"listOrdered"===t[1].type||"blockQuote"===t[1].type?("enter"===t[0]?l++:l--,s=void 0):"lineEndingBlank"===t[1].type?"enter"===t[0]&&(!o||s||l||u||(u=r),s=void 0):"linePrefix"===t[1].type||"listItemValue"===t[1].type||"listItemMarker"===t[1].type||"listItemPrefix"===t[1].type||"listItemPrefixWhitespace"===t[1].type||(s=void 0),!l&&"enter"===t[0]&&"listItemPrefix"===t[1].type||-1===l&&"exit"===t[0]&&("listUnordered"===t[1].type||"listOrdered"===t[1].type)){if(o){let l=r;for(a=void 0;l--;){let t=e[l];if("lineEnding"===t[1].type||"lineEndingBlank"===t[1].type){if("exit"===t[0])continue;a&&(e[a][1].type="lineEndingBlank",i=!0),t[1].type="lineEnding",a=l}else if(!("linePrefix"===t[1].type||"blockQuotePrefix"===t[1].type||"blockQuotePrefixWhitespace"===t[1].type||"blockQuoteMarker"===t[1].type||"listItemIndent"===t[1].type))break}u&&(!a||u<a)&&(o._spread=!0),o.end=Object.assign({},a?e[a][1].start:t[1].end),e.splice(a||r,0,["exit",o,t[2]]),r++,n++}"listItemPrefix"===t[1].type&&(o={type:"listItem",_spread:!1,start:Object.assign({},t[1].start),end:void 0},e.splice(r,0,["enter",o,t[2]]),r++,n++,u=void 0,s=!0)}}return e[t][1]._spread=i,n}(e,u.pop(),f));for(f=-1;++f<e.length;){let n=t[e[f][0]];tf.call(n,e[f][1].type)&&n[e[f][1].type].call(Object.assign({sliceSerialize:e[f][2].sliceSerialize},i),e[f][1])}if(i.tokenStack.length>0){let e=i.tokenStack[i.tokenStack.length-1];(e[1]||th).call(i,void 0,e[0])}for(n.position={start:td(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:td(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},f=-1;++f<t.transforms.length;)n=t.transforms[f](n)||n;return n};function r(e,t){n[e]=t}function l(e){return n[e]}function i(e,t){return function(n){a.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:"fragment",children:[]})}function a(e,t,n){return this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n]),e.position={start:td(t.start)},e}function u(e){return function(t){e&&e.call(this,t),s.call(this,t)}}function s(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||th).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+b({start:e.start,end:e.end})+"): it’s not open");return n.position.end=td(e.end),n}function c(){return $(this.stack.pop(),"boolean"!=typeof q.includeImageAlt||q.includeImageAlt,"boolean"!=typeof q.includeHtml||q.includeHtml)}function f(e){let t=this.stack[this.stack.length-1],n=t.children[t.children.length-1];n&&"text"===n.type||((n={type:"text",value:""}).position={start:td(e.start)},t.children.push(n)),this.stack.push(n)}function p(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=td(e.end)}function d(){n.atHardBreak=!0}function h(e){var t;t=e.type,n.characterReferenceType=t}function g(){return{type:"code",lang:null,meta:null,value:""}}function m(){return{type:"heading",depth:void 0,children:[]}}function y(){return{type:"break"}}function k(){return{type:"html",value:""}}function x(){return{type:"link",title:null,url:"",children:[]}}function v(e){return{type:"list",ordered:"listOrdered"===e.type,start:null,spread:e._spread,children:[]}}})(n)(function(e){for(;!eD(e););return e}((function(e){let t={defined:[],lazy:{},constructs:X([e6,...(e||{}).extensions||[]]),content:n(ef),document:n(ep),flow:n(eG),string:n(e0),text:n(e2)};return t;function n(e){return function(n){return function(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),l={},i=[],o=[],a=[],u={consume:function(e){el(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,m()):-1!==e&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=e},enter:function(e,t){let n=t||{};return n.type=e,n.start=p(),s.events.push(["enter",n,s]),a.push(n),n},exit:function(e){let t=a.pop();return t.end=p(),s.events.push(["exit",t,s]),t},attempt:h(function(e,t){g(e,t.from)}),check:h(d),interrupt:h(d,{interrupt:!0})},s={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:f,sliceSerialize:function(e,t){return function(e,t){let n=-1,r=[],l;for(;++n<e.length;){let i=e[n],o;if("string"==typeof i)o=i;else switch(i){case -5:o="\r";break;case -4:o=`
`;break;case -3:o=`\r
`;break;case -2:o=t?" ":"	";break;case -1:if(!t&&l)continue;o=" ";break;default:o=String.fromCharCode(i)}l=-2===i,r.push(o)}return r.join("")}(f(e),t)},now:p,defineSkip:function(e){l[e.line]=e.column,m()},write:function(e){return o=Y(o,e),function(){let e;for(;r._index<o.length;){let n=o[r._index];if("string"==typeof n)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<n.length;){var t;t=n.charCodeAt(r._bufferIndex),c=c(t)}else c=c(n)}}(),null!==o[o.length-1]?[]:(g(t,0),s.events=eg(i,s.events,s),s.events)}},c=t.tokenize.call(s,u);return t.resolveAll&&i.push(t),s;function f(e){return function(e,t){let n=t.start._index,r=t.start._bufferIndex,l=t.end._index,i=t.end._bufferIndex,o;if(n===l)o=[e[n].slice(r,i)];else{if(o=e.slice(n,l),r>-1){let e=o[0];"string"==typeof e?o[0]=e.slice(r):o.shift()}i>0&&o.push(e[l].slice(0,i))}return o}(o,e)}function p(){let{line:e,column:t,offset:n,_index:l,_bufferIndex:i}=r;return{line:e,column:t,offset:n,_index:l,_bufferIndex:i}}function d(e,t){t.restore()}function h(e,t){return function(n,l,i){let o,c,f,d;return Array.isArray(n)?h(n):"tokenize"in n?h([n]):function(e){let t=null!==e&&n[e],r=null!==e&&n.null;return h([...Array.isArray(t)?t:t?[t]:[],...Array.isArray(r)?r:r?[r]:[]])(e)};function h(e){return o=e,c=0,0===e.length?i:g(e[c])}function g(e){return function(n){let l,i,o,c,h;return l=p(),i=s.previous,o=s.currentConstruct,c=s.events.length,h=Array.from(a),d={restore:function(){r=l,s.previous=i,s.currentConstruct=o,s.events.length=c,a=h,m()},from:c},f=e,e.partial||(s.currentConstruct=e),e.name&&s.parser.constructs.disable.null.includes(e.name)?b():e.tokenize.call(t?Object.assign(Object.create(s),t):s,u,y,b)(n)}}function y(t){return e(f,d),l}function b(e){return d.restore(),++c<o.length?g(o[c]):i}}}function g(e,t){e.resolveAll&&!i.includes(e)&&i.push(e),e.resolve&&Q(s.events,t,s.events.length-t,e.resolve(s.events.slice(t),s)),e.resolveTo&&(s.events=e.resolveTo(s.events,s))}function m(){r.line in l&&r.column<2&&(r.column=l[r.line],r.offset+=l[r.line]-1)}}(t,e,n)}}})(n).document().write((r=1,l="",i=!0,function(e,t,n){let a=[],u,s,c,f,p;for(e=l+e.toString(t),c=0,l="",i&&(65279===e.charCodeAt(0)&&c++,i=void 0);c<e.length;){if(to.lastIndex=c,f=(u=to.exec(e))&&void 0!==u.index?u.index:e.length,p=e.charCodeAt(f),!u){l=e.slice(c);break}if(10===p&&c===f&&o)a.push(-3),o=void 0;else switch(o&&(a.push(-5),o=void 0),c<f&&(a.push(e.slice(c,f)),r+=f-c),p){case 0:a.push(65533),r++;break;case 9:for(s=4*Math.ceil(r/4),a.push(-2);r++<s;)a.push(-1);break;case 10:a.push(-4),r=1;break;default:o=!0,r=1}c=f+1}return n&&(o&&a.push(-5),l&&a.push(l),a.push(null)),a})(e,t,!0))))};function td(e){return{line:e.line,column:e.column,offset:e.offset}}function th(e,t){throw e?Error("Cannot close `"+e.type+"` ("+b({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+b({start:t.start,end:t.end})+") is open"):Error("Cannot close document, a token (`"+t.type+"`, "+b({start:t.start,end:t.end})+") is still open")}function tg(e){Object.assign(this,{Parser:t=>tp(t,Object.assign({},this.data("settings"),e,{extensions:this.data("micromarkExtensions")||[],mdastExtensions:this.data("fromMarkdownExtensions")||[]}))})}function tm(e){let t=[],n=-1,r=0,l=0;for(;++n<e.length;){let i=e.charCodeAt(n),o="";if(37===i&&J(e.charCodeAt(n+1))&&J(e.charCodeAt(n+2)))l=2;else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(o=String.fromCharCode(i));else if(i>55295&&i<57344){let t=e.charCodeAt(n+1);i<56320&&t>56319&&t<57344?(o=String.fromCharCode(i,t),l=1):o="�"}else o=String.fromCharCode(i);o&&(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+l+1,o=""),l&&(n+=l,l=0)}return t.join("")+e.slice(r)}function ty(e,t){let n=String(t.identifier).toUpperCase(),r=tm(n.toLowerCase()),l=e.footnoteOrder.indexOf(n),i;-1===l?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,i=e.footnoteOrder.length):(e.footnoteCounts[n]++,i=l+1);let o=e.footnoteCounts[n],a={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fn-"+r,id:e.clobberPrefix+"fnref-"+r+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,a);let u={type:"element",tagName:"sup",properties:{},children:[a]};return e.patch(t,u),e.applyData(t,u)}function tb(e,t){let n=t.referenceType,r="]";if("collapsed"===n?r+="[]":"full"===n&&(r+="["+(t.label||t.identifier)+"]"),"imageReference"===t.type)return{type:"text",value:"!["+t.alt+r};let l=e.all(t),i=l[0];i&&"text"===i.type?i.value="["+i.value:l.unshift({type:"text",value:"["});let o=l[l.length-1];return o&&"text"===o.type?o.value+=r:l.push({type:"text",value:r}),l}function tk(e){let t=e.spread;return null==t?e.children.length>1:t}var tx=tw("start"),tv=tw("end");function tw(e){return function(t){let n=t&&t.position&&t.position[e]||{};return{line:n.line||null,column:n.column||null,offset:n.offset>-1?n.offset:null}}}function tS(e,t,n){let r=0,l=e.length;if(t){let t=e.codePointAt(r);for(;9===t||32===t;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(l-1);for(;9===t||32===t;)l--,t=e.codePointAt(l-1)}return l>r?e.slice(r,l):""}var tC={blockquote:function(e,t){let n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)},break:function(e,t){let n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]},code:function(e,t){let n=t.value?t.value+`
`:"",r=t.lang?t.lang.match(/^[^ \t]+(?=[ \t]|$)/):null,l={};r&&(l.className=["language-"+r]);let i={type:"element",tagName:"code",properties:l,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i={type:"element",tagName:"pre",properties:{},children:[i=e.applyData(t,i)]},e.patch(t,i),i},delete:function(e,t){let n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},emphasis:function(e,t){let n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},footnoteReference:ty,footnote:function(e,t){let n=e.footnoteById,r=1;for(;(r in n);)r++;let l=String(r);return n[l]={type:"footnoteDefinition",identifier:l,children:[{type:"paragraph",children:t.children}],position:t.position},ty(e,{type:"footnoteReference",identifier:l,position:t.position})},heading:function(e,t){let n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},html:function(e,t){if(e.dangerous){let n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}return null},imageReference:function(e,t){let n=e.definition(t.identifier);if(!n)return tb(e,t);let r={src:tm(n.url||""),alt:t.alt};null!==n.title&&void 0!==n.title&&(r.title=n.title);let l={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,l),e.applyData(t,l)},image:function(e,t){let n={src:tm(t.url)};null!==t.alt&&void 0!==t.alt&&(n.alt=t.alt),null!==t.title&&void 0!==t.title&&(n.title=t.title);let r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)},inlineCode:function(e,t){let n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);let r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)},linkReference:function(e,t){let n=e.definition(t.identifier);if(!n)return tb(e,t);let r={href:tm(n.url||"")};null!==n.title&&void 0!==n.title&&(r.title=n.title);let l={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,l),e.applyData(t,l)},link:function(e,t){let n={href:tm(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);let r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)},listItem:function(e,t,n){let r=e.all(t),l=n?function(e){let t=!1;if("list"===e.type){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=tk(n[r])}return t}(n):tk(t),i={},o=[];if("boolean"==typeof t.checked){let e=r[0],n;e&&"element"===e.type&&"p"===e.tagName?n=e:(n={type:"element",tagName:"p",properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:"text",value:" "}),n.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),i.className=["task-list-item"]}let a=-1;for(;++a<r.length;){let e=r[a];(l||0!==a||"element"!==e.type||"p"!==e.tagName)&&o.push({type:"text",value:`
`}),"element"!==e.type||"p"!==e.tagName||l?o.push(e):o.push(...e.children)}let u=r[r.length-1];u&&(l||"element"!==u.type||"p"!==u.tagName)&&o.push({type:"text",value:`
`});let s={type:"element",tagName:"li",properties:i,children:o};return e.patch(t,s),e.applyData(t,s)},list:function(e,t){let n={},r=e.all(t),l=-1;for("number"==typeof t.start&&1!==t.start&&(n.start=t.start);++l<r.length;){let e=r[l];if("element"===e.type&&"li"===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}let i={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,i),e.applyData(t,i)},paragraph:function(e,t){let n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},root:function(e,t){let n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)},strong:function(e,t){let n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},table:function(e,t){let n=e.all(t),r=n.shift(),l=[];if(r){let n={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),l.push(n)}if(n.length>0){let r={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},i=tx(t.children[1]),o=tv(t.children[t.children.length-1]);i.line&&o.line&&(r.position={start:i,end:o}),l.push(r)}let i={type:"element",tagName:"table",properties:{},children:e.wrap(l,!0)};return e.patch(t,i),e.applyData(t,i)},tableCell:function(e,t){let n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)},tableRow:function(e,t,n){let r=n?n.children:void 0,l=(r?r.indexOf(t):1)===0?"th":"td",i=n&&"table"===n.type?n.align:void 0,o=i?i.length:t.children.length,a=-1,u=[];for(;++a<o;){let n=t.children[a],r={},o=i?i[a]:void 0;o&&(r.align=o);let s={type:"element",tagName:l,properties:r,children:[]};n&&(s.children=e.all(n),e.patch(n,s),s=e.applyData(t,s)),u.push(s)}let s={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,s),e.applyData(t,s)},text:function(e,t){let n={type:"text",value:function(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),l=0,i=[];for(;r;)i.push(tS(t.slice(l,r.index),l>0,!0),r[0]),l=r.index+r[0].length,r=n.exec(t);return i.push(tS(t.slice(l),l>0,!1)),i.join("")}(String(t.value))};return e.patch(t,n),e.applyData(t,n)},thematicBreak:function(e,t){let n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)},toml:tE,yaml:tE,definition:tE,footnoteDefinition:tE};function tE(){return null}var tF=function(e){if(null==e)return tD;if("string"==typeof e)return tA(function(t){return t&&t.type===e});if("object"==typeof e)return Array.isArray(e)?function(e){let t=[],n=-1;for(;++n<e.length;)t[n]=tF(e[n]);return tA(function(...e){let n=-1;for(;++n<t.length;)if(t[n].call(this,...e))return!0;return!1})}(e):tA(function(t){let n;for(n in e)if(t[n]!==e[n])return!1;return!0});if("function"==typeof e)return tA(e);throw Error("Expected function, string, or object as test")};function tA(e){return function(t,...n){return!!(t&&"object"==typeof t&&"type"in t&&e.call(this,t,...n))}}function tD(){return!0}var tT=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null);let l=tF(t),i=r?-1:1;(function e(o,a,u){let s=o&&"object"==typeof o?o:{};if("string"==typeof s.type){let e="string"==typeof s.tagName?s.tagName:"string"==typeof s.name?s.name:void 0;Object.defineProperty(c,"name",{value:"node ("+o.type+(e?"<"+e+">":"")+")"})}return c;function c(){var s;let c=[],f,p,d;if((!t||l(o,a,u[u.length-1]||null))&&!1===(c=Array.isArray(s=n(o,u))?s:"number"==typeof s?[!0,s]:[s])[0])return c;if(o.children&&"skip"!==c[0])for(p=(r?o.children.length:-1)+i,d=u.concat(o);p>-1&&p<o.children.length;){if(!1===(f=e(o.children[p],p,d)())[0])return f;p="number"==typeof f[1]?f[1]:p+i}return c}})(e,void 0,[])()},tO=function(e,t,n,r){"function"==typeof t&&"function"!=typeof n&&(r=n,n=t,t=null),tT(e,t,function(e,t){let r=t[t.length-1];return n(e,r?r.children.indexOf(e):null,r)},r)},tL={}.hasOwnProperty;function tP(e){return String(e||"").toUpperCase()}var tI={}.hasOwnProperty;function tz(e,t){e.position&&(t.position={start:tx(e),end:tv(e)})}function tM(e,t){let n=t;if(e&&e.data){let t=e.data.hName,l=e.data.hChildren,i=e.data.hProperties;"string"==typeof t&&("element"===n.type?n.tagName=t:n={type:"element",tagName:t,properties:{},children:[]}),"element"===n.type&&i&&(n.properties=(0,r.a)((0,r.a)({},n.properties),i)),"children"in n&&n.children&&null!=l&&(n.children=l)}return n}function tj(e,t,n){let l,i,o=t&&t.type;if(!o)throw Error("Expected node, got `"+t+"`");return tI.call(e.handlers,o)?e.handlers[o](e,t,n):e.passThrough&&e.passThrough.includes(o)?"children"in t?(0,r.b)((0,r.a)({},t),{children:tR(e,t)}):t:e.unknownHandler?e.unknownHandler(e,t,n):(l=t.data||{},i="value"in t&&!(tI.call(l,"hProperties")||tI.call(l,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:tR(e,t)},e.patch(t,i),e.applyData(t,i))}function tR(e,t){let n=[];if("children"in t){let r=t.children,l=-1;for(;++l<r.length;){let i=tj(e,r[l],t);if(i){if(l&&"break"===r[l-1].type&&(Array.isArray(i)||"text"!==i.type||(i.value=i.value.replace(/^\s+/,"")),!Array.isArray(i)&&"element"===i.type)){let e=i.children[0];e&&"text"===e.type&&(e.value=e.value.replace(/^\s+/,""))}Array.isArray(i)?n.push(...i):n.push(i)}}}return n}function t_(e,t){let n=[],r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function tB(e,t){let n=function(e,t){let n=t||{},l=n.allowDangerousHtml||!1,i={};return a.dangerous=l,a.clobberPrefix=void 0===n.clobberPrefix||null===n.clobberPrefix?"user-content-":n.clobberPrefix,a.footnoteLabel=n.footnoteLabel||"Footnotes",a.footnoteLabelTagName=n.footnoteLabelTagName||"h2",a.footnoteLabelProperties=n.footnoteLabelProperties||{className:["sr-only"]},a.footnoteBackLabel=n.footnoteBackLabel||"Back to content",a.unknownHandler=n.unknownHandler,a.passThrough=n.passThrough,a.handlers=(0,r.a)((0,r.a)({},tC),n.handlers),a.definition=function(e){let t=Object.create(null);if(!e||!e.type)throw Error("mdast-util-definitions expected node");return tO(e,"definition",e=>{let n=tP(e.identifier);n&&!tL.call(t,n)&&(t[n]=e)}),function(e){let n=tP(e);return n&&tL.call(t,n)?t[n]:null}}(e),a.footnoteById=i,a.footnoteOrder=[],a.footnoteCounts={},a.patch=tz,a.applyData=tM,a.one=function(e,t){return tj(a,e,t)},a.all=function(e){return tR(a,e)},a.wrap=t_,a.augment=o,tO(e,"footnoteDefinition",e=>{let t=String(e.identifier).toUpperCase();tI.call(i,t)||(i[t]=e)}),a;function o(e,t){if(e&&"data"in e&&e.data){let n=e.data;n.hName&&("element"!==t.type&&(t={type:"element",tagName:"",properties:{},children:[]}),t.tagName=n.hName),"element"===t.type&&n.hProperties&&(t.properties=(0,r.a)((0,r.a)({},t.properties),n.hProperties)),"children"in t&&t.children&&n.hChildren&&(t.children=n.hChildren)}if(e){let n="type"in e?e:{position:e};n&&n.position&&n.position.start&&n.position.start.line&&n.position.start.column&&n.position.end&&n.position.end.line&&n.position.end.column&&(t.position={start:tx(n),end:tv(n)})}return t}function a(e,t,n,r){return Array.isArray(n)&&(r=n,n={}),o(e,{type:"element",tagName:t,properties:n||{},children:r||[]})}}(e,t),l=n.one(e,null),i=function(e){let t=[],n=-1;for(;++n<e.footnoteOrder.length;){let r=e.footnoteById[e.footnoteOrder[n]];if(!r)continue;let l=e.all(r),i=String(r.identifier).toUpperCase(),o=tm(i.toLowerCase()),a=0,u=[];for(;++a<=e.footnoteCounts[i];){let t={type:"element",tagName:"a",properties:{href:"#"+e.clobberPrefix+"fnref-"+o+(a>1?"-"+a:""),dataFootnoteBackref:!0,className:["data-footnote-backref"],ariaLabel:e.footnoteBackLabel},children:[{type:"text",value:"↩"}]};a>1&&t.children.push({type:"element",tagName:"sup",children:[{type:"text",value:String(a)}]}),u.length>0&&u.push({type:"text",value:" "}),u.push(t)}let s=l[l.length-1];if(s&&"element"===s.type&&"p"===s.tagName){let e=s.children[s.children.length-1];e&&"text"===e.type?e.value+=" ":s.children.push({type:"text",value:" "}),s.children.push(...u)}else l.push(...u);let c={type:"element",tagName:"li",properties:{id:e.clobberPrefix+"fn-"+o},children:e.wrap(l,!0)};e.patch(r,c),t.push(c)}if(0!==t.length)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:e.footnoteLabelTagName,properties:(0,r.b)((0,r.a)({},JSON.parse(JSON.stringify(e.footnoteLabelProperties))),{id:"footnote-label"}),children:[{type:"text",value:e.footnoteLabel}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(t,!0)},{type:"text",value:`
`}]}}(n);return i&&l.children.push({type:"text",value:`
`},i),Array.isArray(l)?{type:"root",children:l}:l}var tN=function(e,t){var n;return e&&"run"in e?(n,r,l)=>{e.run(tB(n,t),r,e=>{l(e)})}:(n=e||t,e=>tB(e,n))},tH=(0,r.f)(u(),1),tU=class{constructor(e,t,n){this.property=e,this.normal=t,n&&(this.space=n)}};function tV(e,t){let n={},r={},l=-1;for(;++l<e.length;)Object.assign(n,e[l].property),Object.assign(r,e[l].normal);return new tU(n,r,t)}function tq(e){return e.toLowerCase()}tU.prototype.property={},tU.prototype.normal={},tU.prototype.space=null;var t$=class{constructor(e,t){this.property=e,this.attribute=t}};t$.prototype.space=null,t$.prototype.boolean=!1,t$.prototype.booleanish=!1,t$.prototype.overloadedBoolean=!1,t$.prototype.number=!1,t$.prototype.commaSeparated=!1,t$.prototype.spaceSeparated=!1,t$.prototype.commaOrSpaceSeparated=!1,t$.prototype.mustUseProperty=!1,t$.prototype.defined=!1;var tW={};(0,r.e)(tW,{boolean:()=>tY,booleanish:()=>tK,commaOrSpaceSeparated:()=>t1,commaSeparated:()=>tG,number:()=>tZ,overloadedBoolean:()=>tX,spaceSeparated:()=>tJ});var tQ=0,tY=t0(),tK=t0(),tX=t0(),tZ=t0(),tJ=t0(),tG=t0(),t1=t0();function t0(){return 2**++tQ}var t2=Object.keys(tW),t5=class extends t${constructor(e,t,n,r){var l,i;let o=-1;if(super(e,t),r&&(this.space=r),"number"==typeof n)for(;++o<t2.length;){let e=t2[o];l=t2[o],(i=(n&tW[e])===tW[e])&&(this[l]=i)}}};t5.prototype.defined=!0;var t4={}.hasOwnProperty;function t3(e){let t={},n={},r;for(r in e.properties)if(t4.call(e.properties,r)){let l=e.properties[r],i=new t5(r,e.transform(e.attributes||{},r),l,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),t[r]=i,n[tq(r)]=r,n[tq(i.attribute)]=r}return new tU(t,n,e.space)}var t6=t3({space:"xlink",transform:(e,t)=>"xlink:"+t.slice(5).toLowerCase(),properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),t9=t3({space:"xml",transform:(e,t)=>"xml:"+t.slice(3).toLowerCase(),properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function t7(e,t){return t in e?e[t]:t}function t8(e,t){return t7(e,t.toLowerCase())}var ne=t3({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:t8,properties:{xmlns:null,xmlnsXLink:null}}),nt=t3({transform:(e,t)=>"role"===t?t:"aria-"+t.slice(4).toLowerCase(),properties:{ariaActiveDescendant:null,ariaAtomic:tK,ariaAutoComplete:null,ariaBusy:tK,ariaChecked:tK,ariaColCount:tZ,ariaColIndex:tZ,ariaColSpan:tZ,ariaControls:tJ,ariaCurrent:null,ariaDescribedBy:tJ,ariaDetails:null,ariaDisabled:tK,ariaDropEffect:tJ,ariaErrorMessage:null,ariaExpanded:tK,ariaFlowTo:tJ,ariaGrabbed:tK,ariaHasPopup:null,ariaHidden:tK,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:tJ,ariaLevel:tZ,ariaLive:null,ariaModal:tK,ariaMultiLine:tK,ariaMultiSelectable:tK,ariaOrientation:null,ariaOwns:tJ,ariaPlaceholder:null,ariaPosInSet:tZ,ariaPressed:tK,ariaReadOnly:tK,ariaRelevant:null,ariaRequired:tK,ariaRoleDescription:tJ,ariaRowCount:tZ,ariaRowIndex:tZ,ariaRowSpan:tZ,ariaSelected:tK,ariaSetSize:tZ,ariaSort:null,ariaValueMax:tZ,ariaValueMin:tZ,ariaValueNow:tZ,ariaValueText:null,role:null}}),nn=t3({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:t8,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:tG,acceptCharset:tJ,accessKey:tJ,action:null,allow:null,allowFullScreen:tY,allowPaymentRequest:tY,allowUserMedia:tY,alt:null,as:null,async:tY,autoCapitalize:null,autoComplete:tJ,autoFocus:tY,autoPlay:tY,capture:tY,charSet:null,checked:tY,cite:null,className:tJ,cols:tZ,colSpan:null,content:null,contentEditable:tK,controls:tY,controlsList:tJ,coords:tZ|tG,crossOrigin:null,data:null,dateTime:null,decoding:null,default:tY,defer:tY,dir:null,dirName:null,disabled:tY,download:tX,draggable:tK,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:tY,formTarget:null,headers:tJ,height:tZ,hidden:tY,high:tZ,href:null,hrefLang:null,htmlFor:tJ,httpEquiv:tJ,id:null,imageSizes:null,imageSrcSet:null,inputMode:null,integrity:null,is:null,isMap:tY,itemId:null,itemProp:tJ,itemRef:tJ,itemScope:tY,itemType:tJ,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:tY,low:tZ,manifest:null,max:null,maxLength:tZ,media:null,method:null,min:null,minLength:tZ,multiple:tY,muted:tY,name:null,nonce:null,noModule:tY,noValidate:tY,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:tY,optimum:tZ,pattern:null,ping:tJ,placeholder:null,playsInline:tY,poster:null,preload:null,readOnly:tY,referrerPolicy:null,rel:tJ,required:tY,reversed:tY,rows:tZ,rowSpan:tZ,sandbox:tJ,scope:null,scoped:tY,seamless:tY,selected:tY,shape:null,size:tZ,sizes:null,slot:null,span:tZ,spellCheck:tK,src:null,srcDoc:null,srcLang:null,srcSet:null,start:tZ,step:null,style:null,tabIndex:tZ,target:null,title:null,translate:null,type:null,typeMustMatch:tY,useMap:null,value:tK,width:tZ,wrap:null,align:null,aLink:null,archive:tJ,axis:null,background:null,bgColor:null,border:tZ,borderColor:null,bottomMargin:tZ,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:tY,declare:tY,event:null,face:null,frame:null,frameBorder:null,hSpace:tZ,leftMargin:tZ,link:null,longDesc:null,lowSrc:null,marginHeight:tZ,marginWidth:tZ,noResize:tY,noHref:tY,noShade:tY,noWrap:tY,object:null,profile:null,prompt:null,rev:null,rightMargin:tZ,rules:null,scheme:null,scrolling:tK,standby:null,summary:null,text:null,topMargin:tZ,valueType:null,version:null,vAlign:null,vLink:null,vSpace:tZ,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:tY,disableRemotePlayback:tY,prefix:null,property:null,results:tZ,security:null,unselectable:null}}),nr=t3({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:t7,properties:{about:t1,accentHeight:tZ,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:tZ,amplitude:tZ,arabicForm:null,ascent:tZ,attributeName:null,attributeType:null,azimuth:tZ,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:tZ,by:null,calcMode:null,capHeight:tZ,className:tJ,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:tZ,diffuseConstant:tZ,direction:null,display:null,dur:null,divisor:tZ,dominantBaseline:null,download:tY,dx:null,dy:null,edgeMode:null,editable:null,elevation:tZ,enableBackground:null,end:null,event:null,exponent:tZ,externalResourcesRequired:null,fill:null,fillOpacity:tZ,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:tG,g2:tG,glyphName:tG,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:tZ,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:tZ,horizOriginX:tZ,horizOriginY:tZ,id:null,ideographic:tZ,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:tZ,k:tZ,k1:tZ,k2:tZ,k3:tZ,k4:tZ,kernelMatrix:t1,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:tZ,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:tZ,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:tZ,overlineThickness:tZ,paintOrder:null,panose1:null,path:null,pathLength:tZ,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:tJ,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:tZ,pointsAtY:tZ,pointsAtZ:tZ,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:t1,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:t1,rev:t1,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:t1,requiredFeatures:t1,requiredFonts:t1,requiredFormats:t1,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:tZ,specularExponent:tZ,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:tZ,strikethroughThickness:tZ,string:null,stroke:null,strokeDashArray:t1,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:tZ,strokeOpacity:tZ,strokeWidth:null,style:null,surfaceScale:tZ,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:t1,tabIndex:tZ,tableValues:null,target:null,targetX:tZ,targetY:tZ,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:t1,to:null,transform:null,u1:null,u2:null,underlinePosition:tZ,underlineThickness:tZ,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:tZ,values:null,vAlphabetic:tZ,vMathematical:tZ,vectorEffect:null,vHanging:tZ,vIdeographic:tZ,version:null,vertAdvY:tZ,vertOriginX:tZ,vertOriginY:tZ,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:tZ,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),nl=/^data[-\w.:]+$/i,ni=/-[a-z]/g,no=/[A-Z]/g;function na(e){return"-"+e.toLowerCase()}function nu(e){return e.charAt(1).toUpperCase()}var ns={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},nc=tV([t9,t6,ne,nt,nn],"html"),nf=tV([t9,t6,ne,nt,nr],"svg");function np(e){if(e.allowedElements&&e.disallowedElements)throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");if(e.allowedElements||e.disallowedElements||e.allowElement)return t=>{tO(t,"element",(t,n,r)=>{let l;if(e.allowedElements?l=!e.allowedElements.includes(t.tagName):e.disallowedElements&&(l=e.disallowedElements.includes(t.tagName)),!l&&e.allowElement&&"number"==typeof n&&(l=!e.allowElement(t,n,r)),l&&"number"==typeof n)return e.unwrapDisallowed&&t.children?r.children.splice(n,1,...t.children):r.children.splice(n,1),n})}}var nd=(0,r.f)((0,r.j)(),1),nh=(0,r.f)(c(),1),ng=(0,r.f)(p(),1).default,nm={}.hasOwnProperty,ny=new Set(["table","thead","tbody","tfoot","tr"]);function nb(e,t){let n=-1,r=0;for(;++n<e.children.length&&e.children[n]!==t;)"element"===e.children[n].type&&r++;return r}function nk(e,t){return t.toUpperCase()}var nx={}.hasOwnProperty,nv={plugins:{to:"remarkPlugins",id:"change-plugins-to-remarkplugins"},renderers:{to:"components",id:"change-renderers-to-components"},astPlugins:{id:"remove-buggy-html-in-markdown-parser"},allowDangerousHtml:{id:"remove-buggy-html-in-markdown-parser"},escapeHtml:{id:"remove-buggy-html-in-markdown-parser"},source:{to:"children",id:"change-source-to-children"},allowNode:{to:"allowElement",id:"replace-allownode-allowedtypes-and-disallowedtypes"},allowedTypes:{to:"allowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},disallowedTypes:{to:"disallowedElements",id:"replace-allownode-allowedtypes-and-disallowedtypes"},includeNodeIndex:{to:"includeElementIndex",id:"change-includenodeindex-to-includeelementindex"}};function nw(e){for(let t in nv)if(nx.call(nv,t)&&nx.call(e,t)){let e=nv[t];console.warn(`[react-markdown] Warning: please ${e.to?`use \`${e.to}\` instead of`:"remove"} \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`),delete nv[t]}let t=M().use(tg).use(e.remarkPlugins||[]).use(tN,(0,r.b)((0,r.a)({},e.remarkRehypeOptions),{allowDangerousHtml:!0})).use(e.rehypePlugins||[]).use(np,e),n=new A;"string"==typeof e.children?n.value=e.children:void 0!==e.children&&null!==e.children&&console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);let l=t.runSync(t.parse(n),n);if("root"!==l.type)throw TypeError("Expected a `root` node");let i=m.default.createElement(m.default.Fragment,{},function e(t,n){let r=[],l=-1,i;for(;++l<n.children.length;)"element"===(i=n.children[l]).type?r.push(function(t,n,r,l){let i=t.options,o=void 0===i.transformLinkUri?g:i.transformLinkUri,a=t.schema,u=n.tagName,s={},c=a,f;if("html"===a.space&&"svg"===u&&(c=nf,t.schema=c),n.properties)for(f in n.properties)nm.call(n.properties,f)&&function(e,t,n,r){var l;let i,o=function(e,t){let n=tq(t),r=t,l=t$;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&"data"===n.slice(0,4)&&nl.test(t)){if("-"===t.charAt(4)){let e=t.slice(5).replace(ni,nu);r="data"+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!ni.test(e)){let n=e.replace(no,na);"-"!==n.charAt(0)&&(n="-"+n),t="data"+n}}l=t5}return new l(r,t)}(r.schema,t),a=n;null==a||a!=a||(Array.isArray(a)&&(a=o.commaSeparated?(i={},(""===(l=a)[l.length-1]?[...l,""]:l).join((i.padRight?" ":"")+","+(!1===i.padLeft?"":" ")).trim()):a.join(" ").trim()),"style"===o.property&&"string"==typeof a&&(a=function(e){let t={};try{ng(e,function(e,n){t[("-ms-"===e.slice(0,4)?`ms-${e.slice(4)}`:e).replace(/-([a-z])/g,nk)]=n})}catch(e){}return t}(a)),o.space&&o.property?e[nm.call(ns,o.property)?ns[o.property]:o.property]=a:o.attribute&&(e[o.attribute]=a))}(s,f,n.properties[f],t);("ol"===u||"ul"===u)&&t.listDepth++;let p=e(t,n);("ol"===u||"ul"===u)&&t.listDepth--,t.schema=a;let d=n.position||{start:{line:null,column:null,offset:null},end:{line:null,column:null,offset:null}},h=i.components&&nm.call(i.components,u)?i.components[u]:u,m="string"==typeof h||h===nd.default.Fragment;if(!nh.default.isValidElementType(h))throw TypeError(`Component for name \`${u}\` not defined or is not renderable`);if(s.key=r,"a"===u&&i.linkTarget&&(s.target="function"==typeof i.linkTarget?i.linkTarget(String(s.href||""),n.children,"string"==typeof s.title?s.title:null):i.linkTarget),"a"===u&&o&&(s.href=o(String(s.href||""),n.children,"string"==typeof s.title?s.title:null)),m||"code"!==u||"element"!==l.type||"pre"===l.tagName||(s.inline=!0),m||"h1"!==u&&"h2"!==u&&"h3"!==u&&"h4"!==u&&"h5"!==u&&"h6"!==u||(s.level=Number.parseInt(u.charAt(1),10)),"img"===u&&i.transformImageUri&&(s.src=i.transformImageUri(String(s.src||""),String(s.alt||""),"string"==typeof s.title?s.title:null)),!m&&"li"===u&&"element"===l.type){let e=function(e){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if("element"===n.type&&"input"===n.tagName)return n}return null}(n);s.checked=e&&e.properties?!!e.properties.checked:null,s.index=nb(l,n),s.ordered="ol"===l.tagName}return m||"ol"!==u&&"ul"!==u||(s.ordered="ol"===u,s.depth=t.listDepth),("td"===u||"th"===u)&&(s.align&&(s.style||(s.style={}),s.style.textAlign=s.align,delete s.align),m||(s.isHeader="th"===u)),m||"tr"!==u||"element"!==l.type||(s.isHeader="thead"===l.tagName),i.sourcePos&&(s["data-sourcepos"]=[d.start.line,":",d.start.column,"-",d.end.line,":",d.end.column].map(String).join("")),!m&&i.rawSourcePos&&(s.sourcePosition=n.position),!m&&i.includeElementIndex&&(s.index=nb(l,n),s.siblingCount=nb(l)),m||(s.node=n),p.length>0?nd.default.createElement(h,s,p):nd.default.createElement(h,s)}(t,i,l,n)):"text"===i.type?"element"===n.type&&ny.has(n.tagName)&&function(e){let t=e&&"object"==typeof e&&"text"===e.type?e.value||"":e;return"string"==typeof t&&""===t.replace(/[ \t\n\f\r]/g,"")}(i)||r.push(i.value):"raw"!==i.type||t.options.skipHtml||r.push(i.value);return r}({options:e,schema:nc,listDepth:0},l));return e.className&&(i=m.default.createElement("div",{className:e.className},i)),i}nw.propTypes={children:tH.default.string,className:tH.default.string,allowElement:tH.default.func,allowedElements:tH.default.arrayOf(tH.default.string),disallowedElements:tH.default.arrayOf(tH.default.string),unwrapDisallowed:tH.default.bool,remarkPlugins:tH.default.arrayOf(tH.default.oneOfType([tH.default.object,tH.default.func,tH.default.arrayOf(tH.default.oneOfType([tH.default.bool,tH.default.string,tH.default.object,tH.default.func,tH.default.arrayOf(tH.default.any)]))])),rehypePlugins:tH.default.arrayOf(tH.default.oneOfType([tH.default.object,tH.default.func,tH.default.arrayOf(tH.default.oneOfType([tH.default.bool,tH.default.string,tH.default.object,tH.default.func,tH.default.arrayOf(tH.default.any)]))])),sourcePos:tH.default.bool,rawSourcePos:tH.default.bool,skipHtml:tH.default.bool,includeElementIndex:tH.default.bool,transformLinkUri:tH.default.oneOfType([tH.default.func,tH.default.bool]),linkTarget:tH.default.oneOfType([tH.default.func,tH.default.string]),transformImageUri:tH.default.func,components:tH.default.object};for(var nS=`
  color-scheme: light;
  --color-prettylights-syntax-comment: #6e7781;
  --color-prettylights-syntax-constant: #0550ae;
  --color-prettylights-syntax-entity: #8250df;
  --color-prettylights-syntax-storage-modifier-import: #24292f;
  --color-prettylights-syntax-entity-tag: #116329;
  --color-prettylights-syntax-keyword: #cf222e;
  --color-prettylights-syntax-string: #0a3069;
  --color-prettylights-syntax-variable: #953800;
  --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
  --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
  --color-prettylights-syntax-invalid-illegal-bg: #82071e;
  --color-prettylights-syntax-carriage-return-text: #f6f8fa;
  --color-prettylights-syntax-carriage-return-bg: #cf222e;
  --color-prettylights-syntax-string-regexp: #116329;
  --color-prettylights-syntax-markup-list: #3b2300;
  --color-prettylights-syntax-markup-heading: #0550ae;
  --color-prettylights-syntax-markup-italic: #24292f;
  --color-prettylights-syntax-markup-bold: #24292f;
  --color-prettylights-syntax-markup-deleted-text: #82071e;
  --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
  --color-prettylights-syntax-markup-inserted-text: #116329;
  --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
  --color-prettylights-syntax-markup-changed-text: #953800;
  --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
  --color-prettylights-syntax-markup-ignored-text: #eaeef2;
  --color-prettylights-syntax-markup-ignored-bg: #0550ae;
  --color-prettylights-syntax-meta-diff-range: #8250df;
  --color-prettylights-syntax-brackethighlighter-angle: #57606a;
  --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
  --color-prettylights-syntax-constant-other-reference-link: #0a3069;
  --color-fg-default: #24292f;
  --color-fg-muted: #57606a;
  --color-fg-subtle: #6e7781;
  --color-canvas-default: #ffffff;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d0d7de;
  --color-border-muted: hsla(210, 18%, 87%, 1);
  --color-neutral-muted: rgba(175, 184, 193, 0.2);
  --color-accent-fg: #0969da;
  --color-accent-emphasis: #0969da;
  --color-attention-subtle: #fff8c5;
  --color-danger-fg: #cf222e;
`,nC=(0,d.default)(nw)`
  ${nS}
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-default);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji';
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;

  .octicon {
    display: inline-block;
    fill: currentColor;
    vertical-align: text-bottom;
  }
  h1:hover .anchor .octicon-link:before,
  h2:hover .anchor .octicon-link:before,
  h3:hover .anchor .octicon-link:before,
  h4:hover .anchor .octicon-link:before,
  h5:hover .anchor .octicon-link:before,
  h6:hover .anchor .octicon-link:before {
    width: 16px;
    height: 16px;
    content: ' ';
    display: inline-block;
    background-color: currentColor;
    -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
    mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  }

  details,
  figcaption,
  figure {
    display: block;
  }

  summary {
    display: list-item;
  }

  [hidden] {
    display: none !important;
  }

  a {
    background-color: transparent;
    color: var(--color-accent-fg);
    text-decoration: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  dfn {
    font-style: italic;
  }

  h1 {
    margin: 0.67em 0;
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  mark {
    background-color: var(--color-attention-subtle);
    color: var(--color-fg-default);
  }

  small {
    font-size: 90%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
    max-width: 100%;
    box-sizing: content-box;
    background-color: var(--color-canvas-default);
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 1em;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    overflow: hidden;
    background: transparent;
    border-bottom: 1px solid var(--color-border-muted);
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-border-default);
    border: 0;
  }

  input {
    font: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  ::placeholder {
    color: var(--color-fg-subtle);
    opacity: 1;
  }

  hr::before {
    display: table;
    content: '';
  }

  hr::after {
    display: table;
    clear: both;
    content: '';
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    display: block;
    width: max-content;
    max-width: 100%;
    overflow: auto;
  }

  td,
  th {
    padding: 0;
  }

  details summary {
    cursor: pointer;
  }

  details:not([open]) > *:not(summary) {
    display: none !important;
  }

  a:focus,
  [role='button']:focus,
  input[type='radio']:focus,
  input[type='checkbox']:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  a:focus:not(:focus-visible),
  [role='button']:focus:not(:focus-visible),
  input[type='radio']:focus:not(:focus-visible),
  input[type='checkbox']:focus:not(:focus-visible) {
    outline: solid 1px transparent;
  }

  a:focus-visible,
  [role='button']:focus-visible,
  input[type='radio']:focus-visible,
  input[type='checkbox']:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none;
  }

  a:not([class]):focus,
  a:not([class]):focus-visible,
  input[type='radio']:focus,
  input[type='radio']:focus-visible,
  input[type='checkbox']:focus,
  input[type='checkbox']:focus-visible {
    outline-offset: 0;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    line-height: 10px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border: solid 1px var(--color-neutral-muted);
    border-bottom-color: var(--color-neutral-muted);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-neutral-muted);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 1.25;
  }

  h2 {
    font-weight: var(--base-text-weight-semibold, 600);
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  h3 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1.25em;
  }

  h4 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 1em;
  }

  h5 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.875em;
  }

  h6 {
    font-weight: var(--base-text-weight-semibold, 600);
    font-size: 0.85em;
    color: var(--color-fg-muted);
  }

  p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  blockquote {
    margin: 0;
    padding: 0 1em;
    color: var(--color-fg-muted);
    border-left: 0.25em solid var(--color-border-default);
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 2em;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }

  dd {
    margin-left: 0;
  }

  tt,
  code,
  samp {
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
  }

  pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
    font-size: 12px;
    word-wrap: normal;
  }

  .octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
  }

  .markdown-body::before {
    display: table;
    content: '';
  }

  .markdown-body::after {
    display: table;
    clear: both;
    content: '';
  }

  .markdown-body > *:first-child {
    margin-top: 0 !important;
  }

  .markdown-body > *:last-child {
    margin-bottom: 0 !important;
  }

  a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .absent {
    color: var(--color-danger-fg);
  }

  .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .anchor:focus {
    outline: none;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  h1 .octicon-link,
  h2 .octicon-link,
  h3 .octicon-link,
  h4 .octicon-link,
  h5 .octicon-link,
  h6 .octicon-link {
    color: var(--color-fg-default);
    vertical-align: middle;
    visibility: hidden;
  }

  h1:hover .anchor,
  h2:hover .anchor,
  h3:hover .anchor,
  h4:hover .anchor,
  h5:hover .anchor,
  h6:hover .anchor {
    text-decoration: none;
  }

  h1:hover .anchor .octicon-link,
  h2:hover .anchor .octicon-link,
  h3:hover .anchor .octicon-link,
  h4:hover .anchor .octicon-link,
  h5:hover .anchor .octicon-link,
  h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  h1 tt,
  h1 code,
  h2 tt,
  h2 code,
  h3 tt,
  h3 code,
  h4 tt,
  h4 code,
  h5 tt,
  h5 code,
  h6 tt,
  h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  summary h1,
  summary h2,
  summary h3,
  summary h4,
  summary h5,
  summary h6 {
    display: inline-block;
  }

  summary h1 .anchor,
  summary h2 .anchor,
  summary h3 .anchor,
  summary h4 .anchor,
  summary h5 .anchor,
  summary h6 .anchor {
    margin-left: -40px;
  }

  summary h1,
  summary h2 {
    padding-bottom: 0;
    border-bottom: 0;
  }

  ul.no-list,
  ol.no-list {
    padding: 0;
    list-style-type: none;
  }

  ol[type='a'] {
    list-style-type: lower-alpha;
  }

  ol[type='A'] {
    list-style-type: upper-alpha;
  }

  ol[type='i'] {
    list-style-type: lower-roman;
  }

  ol[type='I'] {
    list-style-type: upper-roman;
  }

  ol[type='1'] {
    list-style-type: decimal;
  }

  div > ol:not([type]) {
    list-style-type: decimal;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-top: 16px;
  }

  li + li {
    margin-top: 0.25em;
  }

  dl {
    padding: 0;
  }

  dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: var(--base-text-weight-semibold, 600);
  }

  dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  table th {
    font-weight: var(--base-text-weight-semibold, 600);
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid var(--color-border-default);
  }

  table tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted);
  }

  table tr:nth-child(2n) {
    background-color: var(--color-canvas-subtle);
  }

  table img {
    background-color: transparent;
  }

  img[align='right'] {
    padding-left: 20px;
  }

  img[align='left'] {
    padding-right: 20px;
  }

  .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid var(--color-border-default);
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: var(--color-fg-default);
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden;
  }

  span.float-right > span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right;
  }

  code,
  tt {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: var(--color-neutral-muted);
    border-radius: 6px;
  }

  code br,
  tt br {
    display: none;
  }

  del code {
    text-decoration: inherit;
  }

  samp {
    font-size: 85%;
  }

  pre code {
    font-size: 100%;
  }

  pre > code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .highlight {
    margin-bottom: 16px;
  }

  .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .highlight pre,
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: var(--color-canvas-subtle);
    border-radius: 6px;
  }

  pre code,
  pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .csv-data td,
  .csv-data th {
    padding: 5px;
    overflow: hidden;
    font-size: 12px;
    line-height: 1;
    text-align: left;
    white-space: nowrap;
  }

  .csv-data .blob-num {
    padding: 10px 8px 9px;
    text-align: right;
    background: var(--color-canvas-default);
    border: 0;
  }

  .csv-data tr {
    border-top: 0;
  }

  .csv-data th {
    font-weight: var(--base-text-weight-semibold, 600);
    background: var(--color-canvas-subtle);
    border-top: 0;
  }

  [data-footnote-ref]::before {
    content: '[';
  }

  [data-footnote-ref]::after {
    content: ']';
  }

  .footnotes {
    font-size: 12px;
    color: var(--color-fg-muted);
    border-top: 1px solid var(--color-border-default);
  }

  .footnotes ol {
    padding-left: 16px;
  }

  .footnotes ol ul {
    display: inline-block;
    padding-left: 16px;
    margin-top: 16px;
  }

  .footnotes li {
    position: relative;
  }

  .footnotes li:target::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: '';
    border: 2px solid var(--color-accent-emphasis);
    border-radius: 6px;
  }

  .footnotes li:target {
    color: var(--color-fg-default);
  }

  .footnotes .data-footnote-backref g-emoji {
    font-family: monospace;
  }

  .pl-c {
    color: var(--color-prettylights-syntax-comment);
  }

  .pl-c1,
  .pl-s .pl-v {
    color: var(--color-prettylights-syntax-constant);
  }

  .pl-e,
  .pl-en {
    color: var(--color-prettylights-syntax-entity);
  }

  .pl-smi,
  .pl-s .pl-s1 {
    color: var(--color-prettylights-syntax-storage-modifier-import);
  }

  .pl-ent {
    color: var(--color-prettylights-syntax-entity-tag);
  }

  .pl-k {
    color: var(--color-prettylights-syntax-keyword);
  }

  .pl-s,
  .pl-pds,
  .pl-s .pl-pse .pl-s1,
  .pl-sr,
  .pl-sr .pl-cce,
  .pl-sr .pl-sre,
  .pl-sr .pl-sra {
    color: var(--color-prettylights-syntax-string);
  }

  .pl-v,
  .pl-smw {
    color: var(--color-prettylights-syntax-variable);
  }

  .pl-bu {
    color: var(--color-prettylights-syntax-brackethighlighter-unmatched);
  }

  .pl-ii {
    color: var(--color-prettylights-syntax-invalid-illegal-text);
    background-color: var(--color-prettylights-syntax-invalid-illegal-bg);
  }

  .pl-c2 {
    color: var(--color-prettylights-syntax-carriage-return-text);
    background-color: var(--color-prettylights-syntax-carriage-return-bg);
  }

  .pl-sr .pl-cce {
    font-weight: bold;
    color: var(--color-prettylights-syntax-string-regexp);
  }

  .pl-ml {
    color: var(--color-prettylights-syntax-markup-list);
  }

  .pl-mh,
  .pl-mh .pl-en,
  .pl-ms {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-heading);
  }

  .pl-mi {
    font-style: italic;
    color: var(--color-prettylights-syntax-markup-italic);
  }

  .pl-mb {
    font-weight: bold;
    color: var(--color-prettylights-syntax-markup-bold);
  }

  .pl-md {
    color: var(--color-prettylights-syntax-markup-deleted-text);
    background-color: var(--color-prettylights-syntax-markup-deleted-bg);
  }

  .pl-mi1 {
    color: var(--color-prettylights-syntax-markup-inserted-text);
    background-color: var(--color-prettylights-syntax-markup-inserted-bg);
  }

  .pl-mc {
    color: var(--color-prettylights-syntax-markup-changed-text);
    background-color: var(--color-prettylights-syntax-markup-changed-bg);
  }

  .pl-mi2 {
    color: var(--color-prettylights-syntax-markup-ignored-text);
    background-color: var(--color-prettylights-syntax-markup-ignored-bg);
  }

  .pl-mdr {
    font-weight: bold;
    color: var(--color-prettylights-syntax-meta-diff-range);
  }

  .pl-ba {
    color: var(--color-prettylights-syntax-brackethighlighter-angle);
  }

  .pl-sg {
    color: var(--color-prettylights-syntax-sublimelinter-gutter-mark);
  }

  .pl-corl {
    text-decoration: underline;
    color: var(--color-prettylights-syntax-constant-other-reference-link);
  }

  g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1em;
    font-style: normal !important;
    font-weight: var(--base-text-weight-normal, 400);
    line-height: 1;
    vertical-align: -0.075em;
  }

  g-emoji img {
    width: 1em;
    height: 1em;
  }

  .task-list-item {
    list-style-type: none;
  }

  .task-list-item label {
    font-weight: var(--base-text-weight-normal, 400);
  }

  .task-list-item.enabled label {
    cursor: pointer;
  }

  .task-list-item + .task-list-item {
    margin-top: 4px;
  }

  .task-list-item .handle {
    display: none;
  }

  .task-list-item-checkbox {
    margin: 0 0.2em 0.25em -1.4em;
    vertical-align: middle;
  }

  .contains-task-list:dir(rtl) .task-list-item-checkbox {
    margin: 0 -1.6em 0.25em 0.2em;
  }

  .contains-task-list {
    position: relative;
  }

  .contains-task-list:hover .task-list-item-convert-container,
  .contains-task-list:focus-within .task-list-item-convert-container {
    display: block;
    width: auto;
    height: 24px;
    overflow: visible;
    clip: auto;
  }

  ::-webkit-calendar-picker-indicator {
    filter: invert(50%);
  }
`,nE={tokenize:function(e,t,n){let r=0;return function t(i){return(87===i||119===i)&&r<3?(r++,e.consume(i),t):46===i&&3===r?(e.consume(i),l):n(i)};function l(e){return null===e?n(e):t(e)}},partial:!0},nF={tokenize:function(e,t,n){let r,l,i;return o;function o(t){return 46===t||95===t?e.check(nD,u,a)(t):null===t||ei(t)||eu(t)||45!==t&&ea(t)?u(t):(i=!0,e.consume(t),o)}function a(t){return 95===t?r=!0:(l=r,r=void 0),e.consume(t),o}function u(e){return l||r||!i?n(e):t(e)}},partial:!0},nA={tokenize:function(e,t){let n=0,r=0;return l;function l(o){return 40===o?(n++,e.consume(o),l):41===o&&r<n?i(o):33===o||34===o||38===o||39===o||41===o||42===o||44===o||46===o||58===o||59===o||60===o||63===o||93===o||95===o||126===o?e.check(nD,t,i)(o):null===o||ei(o)||eu(o)?t(o):(e.consume(o),l)}function i(t){return 41===t&&r++,e.consume(t),l}},partial:!0},nD={tokenize:function(e,t,n){return r;function r(o){return 33===o||34===o||39===o||41===o||42===o||44===o||46===o||58===o||59===o||63===o||95===o||126===o?(e.consume(o),r):38===o?(e.consume(o),i):93===o?(e.consume(o),l):60===o||null===o||ei(o)||eu(o)?t(o):n(o)}function l(e){return null===e||40===e||91===e||ei(e)||eu(e)?t(e):r(e)}function i(t){return Z(t)?function t(l){return 59===l?(e.consume(l),r):Z(l)?(e.consume(l),t):n(l)}(t):n(t)}},partial:!0},nT={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(e){return J(e)?n(e):t(e)}},partial:!0},nO={tokenize:function(e,t,n){let r=this;return function(t){return 87!==t&&119!==t||!nj.call(r,r.previous)||nN(r.events)?n(t):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(nE,e.attempt(nF,e.attempt(nA,l),n),n)(t))};function l(n){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(n)}},previous:nj},nL={tokenize:function(e,t,n){let r=this,l="",i=!1;return function(t){return(72===t||104===t)&&nR.call(r,r.previous)&&!nN(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),l+=String.fromCodePoint(t),e.consume(t),o):n(t)};function o(t){if(Z(t)&&l.length<5)return l+=String.fromCodePoint(t),e.consume(t),o;if(58===t){let n=l.toLowerCase();if("http"===n||"https"===n)return e.consume(t),a}return n(t)}function a(t){return 47===t?(e.consume(t),i?u:(i=!0,a)):n(t)}function u(t){return null===t||ee(t)||ei(t)||eu(t)||ea(t)?n(t):e.attempt(nF,e.attempt(nA,s),n)(t)}function s(n){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(n)}},previous:nR},nP={tokenize:function(e,t,n){let r=this,l,i;return function(t){return!nB(t)||!n_.call(r,r.previous)||nN(r.events)?n(t):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),function t(r){return nB(r)?(e.consume(r),t):64===r?(e.consume(r),o):n(r)}(t))};function o(t){return 46===t?e.check(nT,u,a)(t):45===t||95===t||J(t)?(i=!0,e.consume(t),o):u(t)}function a(t){return e.consume(t),l=!0,o}function u(o){return i&&l&&Z(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(o)):n(o)}},previous:n_},nI={},nz={text:nI},nM=48;nM<123;)nI[nM]=nP,58==++nM?nM=65:91===nM&&(nM=97);function nj(e){return null===e||40===e||42===e||95===e||91===e||93===e||126===e||ei(e)}function nR(e){return!Z(e)}function n_(e){return!(47===e||nB(e))}function nB(e){return 43===e||45===e||46===e||95===e||J(e)}function nN(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if(("labelLink"===r.type||"labelImage"===r.type)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}nI[43]=nP,nI[45]=nP,nI[46]=nP,nI[95]=nP,nI[72]=[nP,nL],nI[104]=[nP,nL],nI[87]=[nP,nO],nI[119]=[nP,nO];var nH={tokenize:function(e,t,n){let r=this;return ec(e,function(e){let l=r.events[r.events.length-1];return l&&"gfmFootnoteDefinitionIndent"===l[1].type&&4===l[2].sliceSerialize(l[1],!0).length?t(e):n(e)},"gfmFootnoteDefinitionIndent",5)},partial:!0};function nU(e,t,n){let r=this,l=r.events.length,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;l--;){let e=r.events[l][1];if("labelImage"===e.type){o=e;break}if("gfmFootnoteCall"===e.type||"labelLink"===e.type||"label"===e.type||"image"===e.type||"link"===e.type)break}return function(l){if(!o||!o._balanced)return n(l);let a=eM(r.sliceSerialize({start:o.end,end:r.now()}));return 94===a.codePointAt(0)&&i.includes(a.slice(1))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(l),e.exit("gfmFootnoteCallLabelMarker"),t(l)):n(l)}}function nV(e,t){let n=e.length;for(;n--;)if("labelImage"===e[n][1].type&&"enter"===e[n][0]){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";let r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},l={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};l.end.column++,l.end.offset++,l.end._bufferIndex++;let i={type:"gfmFootnoteCallString",start:Object.assign({},l.end),end:Object.assign({},e[e.length-1][1].start)},o={type:"chunkString",contentType:"string",start:Object.assign({},i.start),end:Object.assign({},i.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",l,t],["exit",l,t],["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function nq(e,t,n){let r=this,l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i=0,o;return function(t){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(t),e.exit("gfmFootnoteCallLabelMarker"),a};function a(t){return 94!==t?n(t):(e.enter("gfmFootnoteCallMarker"),e.consume(t),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(a){if(i>999||93===a&&!o||null===a||91===a||ei(a))return n(a);if(93===a){e.exit("chunkString");let i=e.exit("gfmFootnoteCallString");return l.includes(eM(r.sliceSerialize(i)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(a),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(a)}return ei(a)||(o=!0),i++,e.consume(a),92===a?s:u}function s(t){return 91===t||92===t||93===t?(e.consume(t),i++,u):u(t)}}function n$(e,t,n){let r=this,l=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),i,o=0,a;return function(t){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),u};function u(t){return 94===t?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",s):n(t)}function s(t){if(o>999||93===t&&!a||null===t||91===t||ei(t))return n(t);if(93===t){e.exit("chunkString");let n=e.exit("gfmFootnoteDefinitionLabelString");return i=eM(r.sliceSerialize(n)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),f}return ei(t)||(a=!0),o++,e.consume(t),92===t?c:s}function c(t){return 91===t||92===t||93===t?(e.consume(t),o++,s):s(t)}function f(t){return 58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),l.includes(i)||l.push(i),ec(e,p,"gfmFootnoteDefinitionWhitespace")):n(t)}function p(e){return t(e)}}function nW(e,t,n){return e.check(eb,t,e.attempt(nH,t,n))}function nQ(e){e.exit("gfmFootnoteDefinition")}var nY=class{constructor(){this.map=[]}add(e,t,n){!function(e,t,n,r){let l=0;if(!(0===n&&0===r.length)){for(;l<e.map.length;){if(e.map[l][0]===t){e.map[l][1]+=n,e.map[l][2].push(...r);return}l+=1}e.map.push([t,n,r])}}(this,e,t,n)}consume(e){if(this.map.sort((e,t)=>e[0]-t[0]),0===this.map.length)return;let t=this.map.length,n=[];for(;t>0;)t-=1,n.push(e.slice(this.map[t][0]+this.map[t][1])),n.push(this.map[t][2]),e.length=this.map[t][0];n.push([...e]),e.length=0;let r=n.pop();for(;r;)e.push(...r),r=n.pop();this.map.length=0}},nK={flow:{null:{tokenize:function(e,t,n){let r=this,l=0,i=0,o;return function(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if("lineEnding"===e||"linePrefix"===e)t--;else break}let l=t>-1?r.events[t][1].type:null,i="tableHead"===l||"tableRow"===l?b:a;return i===b&&r.parser.lazy[r.now().line]?n(e):i(e)};function a(t){return e.enter("tableHead"),e.enter("tableRow"),124===t||(o=!0,i+=1),u(t)}function u(t){return null===t?n(t):el(t)?i>1?(i=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),f):n(t):eo(t)?ec(e,u,"whitespace")(t):(i+=1,o&&(o=!1,l+=1),124===t?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),o=!0,u):(e.enter("data"),s(t)))}function s(t){return null===t||124===t||ei(t)?(e.exit("data"),u(t)):(e.consume(t),92===t?c:s)}function c(t){return 92===t||124===t?(e.consume(t),s):s(t)}function f(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter("tableDelimiterRow"),o=!1,eo(t)?ec(e,p,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):p(t))}function p(t){return 45===t||58===t?h(t):124===t?(o=!0,e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),d):n(t)}function d(t){return eo(t)?ec(e,h,"whitespace")(t):h(t)}function h(t){return 58===t?(i+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(t),e.exit("tableDelimiterMarker"),g):45===t?(i+=1,g(t)):null===t||el(t)?y(t):n(t)}function g(t){return 45===t?(e.enter("tableDelimiterFiller"),function t(n){return 45===n?(e.consume(n),t):58===n?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(n),e.exit("tableDelimiterMarker"),m):(e.exit("tableDelimiterFiller"),m(n))}(t)):n(t)}function m(t){return eo(t)?ec(e,y,"whitespace")(t):y(t)}function y(r){return 124===r?p(r):(null===r||el(r))&&o&&l===i?(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(r)):n(r)}function b(t){return e.enter("tableRow"),k(t)}function k(n){return 124===n?(e.enter("tableCellDivider"),e.consume(n),e.exit("tableCellDivider"),k):null===n||el(n)?(e.exit("tableRow"),t(n)):eo(n)?ec(e,k,"whitespace")(n):(e.enter("data"),x(n))}function x(t){return null===t||124===t||ei(t)?(e.exit("data"),k(t)):(e.consume(t),92===t?v:x)}function v(t){return 92===t||124===t?(e.consume(t),x):x(t)}},resolveAll:function(e,t){let n=-1,r=!0,l=0,i=[0,0,0,0],o=[0,0,0,0],a=!1,u=0,s,c,f,p=new nY;for(;++n<e.length;){let d=e[n],h=d[1];"enter"===d[0]?"tableHead"===h.type?(a=!1,0!==u&&(nZ(p,t,u,s,c),c=void 0,u=0),s={type:"table",start:Object.assign({},h.start),end:Object.assign({},h.end)},p.add(n,0,[["enter",s,t]])):"tableRow"===h.type||"tableDelimiterRow"===h.type?(r=!0,f=void 0,i=[0,0,0,0],o=[0,n+1,0,0],a&&(a=!1,c={type:"tableBody",start:Object.assign({},h.start),end:Object.assign({},h.end)},p.add(n,0,[["enter",c,t]])),l="tableDelimiterRow"===h.type?2:c?3:1):l&&("data"===h.type||"tableDelimiterMarker"===h.type||"tableDelimiterFiller"===h.type)?(r=!1,0===o[2]&&(0!==i[1]&&(o[0]=o[1],f=nX(p,t,i,l,void 0,f),i=[0,0,0,0]),o[2]=n)):"tableCellDivider"===h.type&&(r?r=!1:(0!==i[1]&&(o[0]=o[1],f=nX(p,t,i,l,void 0,f)),o=[(i=o)[1],n,0,0])):"tableHead"===h.type?(a=!0,u=n):"tableRow"===h.type||"tableDelimiterRow"===h.type?(u=n,0!==i[1]?(o[0]=o[1],f=nX(p,t,i,l,n,f)):0!==o[1]&&(f=nX(p,t,o,l,n,f)),l=0):l&&("data"===h.type||"tableDelimiterMarker"===h.type||"tableDelimiterFiller"===h.type)&&(o[3]=n)}for(0!==u&&nZ(p,t,u,s,c),p.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];"enter"===e[0]&&"table"===e[1].type&&(e[1]._align=function(e,t){let n=!1,r=[];for(;t<e.length;){let l=e[t];if(n){if("enter"===l[0])"tableContent"===l[1].type&&r.push("tableDelimiterMarker"===e[t+1][1].type?"left":"none");else if("tableContent"===l[1].type){if("tableDelimiterMarker"===e[t-1][1].type){let e=r.length-1;r[e]="left"===r[e]?"center":"right"}}else if("tableDelimiterRow"===l[1].type)break}else"enter"===l[0]&&"tableDelimiterRow"===l[1].type&&(n=!0);t+=1}return r}(t.events,n))}return e}}}};function nX(e,t,n,r,l,i){0!==n[0]&&(i.end=Object.assign({},nJ(t.events,n[0])),e.add(n[0],0,[["exit",i,t]]));let o=nJ(t.events,n[1]);if(i={type:1===r?"tableHeader":2===r?"tableDelimiter":"tableData",start:Object.assign({},o),end:Object.assign({},o)},e.add(n[1],0,[["enter",i,t]]),0!==n[2]){let l=nJ(t.events,n[2]),i=nJ(t.events,n[3]),o={type:"tableContent",start:Object.assign({},l),end:Object.assign({},i)};if(e.add(n[2],0,[["enter",o,t]]),2!==r){let r=t.events[n[2]],l=t.events[n[3]];if(r[1].end=Object.assign({},l[1].end),r[1].type="chunkText",r[1].contentType="text",n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[["exit",o,t]])}return void 0!==l&&(i.end=Object.assign({},nJ(t.events,l)),e.add(l,0,[["exit",i,t]]),i=void 0),i}function nZ(e,t,n,r,l){let i=[],o=nJ(t.events,n);l&&(l.end=Object.assign({},o),i.push(["exit",l,t])),r.end=Object.assign({},o),i.push(["exit",r,t]),e.add(n+1,0,i)}function nJ(e,t){let n=e[t],r="enter"===n[0]?"start":"end";return n[1][r]}var nG={text:{91:{tokenize:function(e,t,n){let r=this;return function(t){return null===r.previous&&r._gfmTasklistFirstContentOfListItem?(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),l):n(t)};function l(t){return ei(t)?(e.enter("taskListCheckValueUnchecked"),e.consume(t),e.exit("taskListCheckValueUnchecked"),i):88===t||120===t?(e.enter("taskListCheckValueChecked"),e.consume(t),e.exit("taskListCheckValueChecked"),i):n(t)}function i(t){return 93===t?(e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),o):n(t)}function o(r){return el(r)?t(r):eo(r)?e.check({tokenize:n1},t,n)(r):n(r)}}}}};function n1(e,t,n){return ec(e,function(e){return null===e?n(e):t(e)},"whitespace")}function n0(e,t){let n=String(e);if("string"!=typeof t)throw TypeError("Expected character");let r=0,l=n.indexOf(t);for(;-1!==l;)r++,l=n.indexOf(t,l+t.length);return r}var n2={}.hasOwnProperty,n5=function(e,t,n,r){let l,i;"string"==typeof t||t instanceof RegExp?(i=[[t,n]],l=r):(i=t,l=n),l||(l={});let o=tF(l.ignore||[]),a=function(e){let t=[];if("object"!=typeof e)throw TypeError("Expected array or object as schema");if(Array.isArray(e)){let n=-1;for(;++n<e.length;)t.push([n4(e[n][0]),n3(e[n][1])])}else{let n;for(n in e)n2.call(e,n)&&t.push([n4(n),n3(e[n])])}return t}(i),u=-1;for(;++u<a.length;)tT(e,"text",s);return e;function s(e,t){let n=-1,r;for(;++n<t.length;){let e=t[n];if(o(e,r?r.children.indexOf(e):void 0,r))return;r=e}if(r)return function(e,t){let n=t[t.length-1],r=a[u][0],l=a[u][1],i=0,o=n.children.indexOf(e),s=!1,c=[];r.lastIndex=0;let f=r.exec(e.value);for(;f;){let n=f.index,o={index:f.index,input:f.input,stack:[...t,e]},a=l(...f,o);if("string"==typeof a&&(a=a.length>0?{type:"text",value:a}:void 0),!1!==a&&(i!==n&&c.push({type:"text",value:e.value.slice(i,n)}),Array.isArray(a)?c.push(...a):a&&c.push(a),i=n+f[0].length,s=!0),!r.global)break;f=r.exec(e.value)}return s?(i<e.value.length&&c.push({type:"text",value:e.value.slice(i)}),n.children.splice(o,1,...c)):c=[e],o+c.length}(e,t)}};function n4(e){return"string"==typeof e?RegExp(function(e){if("string"!=typeof e)throw TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e),"g"):e}function n3(e){return"function"==typeof e?e:()=>e}var n6="phrasing",n9=["autolink","link","image","label"],n7={transforms:[function(e){n5(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,rt],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,rn]],{ignore:["link","linkReference"]})}],enter:{literalAutolink:function(e){this.enter({type:"link",title:null,url:"",children:[]},e)},literalAutolinkEmail:re,literalAutolinkHttp:re,literalAutolinkWww:re},exit:{literalAutolink:function(e){this.exit(e)},literalAutolinkEmail:function(e){this.config.exit.autolinkEmail.call(this,e)},literalAutolinkHttp:function(e){this.config.exit.autolinkProtocol.call(this,e)},literalAutolinkWww:function(e){this.config.exit.data.call(this,e),this.stack[this.stack.length-1].url="http://"+this.sliceSerialize(e)}}},n8={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:n6,notInConstruct:n9},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:n6,notInConstruct:n9},{character:":",before:"[ps]",after:"\\/",inConstruct:n6,notInConstruct:n9}]};function re(e){this.config.enter.autolinkProtocol.call(this,e)}function rt(e,t,n,r,l){let i,o="";if(!rr(l)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),(i=n.split(".")).length<2||i[i.length-1]&&(/_/.test(i[i.length-1])||!/[a-zA-Z\d]/.test(i[i.length-1]))||i[i.length-2]&&(/_/.test(i[i.length-2])||!/[a-zA-Z\d]/.test(i[i.length-2]))))return!1;let a=function(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")"),l=n0(e,"("),i=n0(e,")");for(;-1!==r&&l>i;)e+=n.slice(0,r+1),r=(n=n.slice(r+1)).indexOf(")"),i++;return[e,n]}(n+r);if(!a[0])return!1;let u={type:"link",title:null,url:o+t+a[0],children:[{type:"text",value:t+a[0]}]};return a[1]?[u,{type:"text",value:a[1]}]:u}function rn(e,t,n,r){return!(!rr(r,!0)||/[-\d_]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function rr(e,t){let n=e.input.charCodeAt(e.index-1);return(0===e.index||eu(n)||ea(n))&&(!t||47!==n)}function rl(e){return e.label||!e.identifier?e.label||"":ts(e.identifier)}var ri=/\r?\n|\r/g;function ro(e){if(!e._compiled){let t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function ra(e,t,n){if("string"==typeof t&&(t=[t]),!t||0===t.length)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function ru(e,t,n){let r=(n.before||"")+(t||"")+(n.after||""),l=[],i=[],o={},a=-1;for(;++a<e.unsafe.length;){var u;let t=e.unsafe[a];if(!ra(u=e.stack,t.inConstruct,!0)||ra(u,t.notInConstruct,!1))continue;let n=ro(t),i;for(;i=n.exec(r);){let e="before"in t||!!t.atBreak,n="after"in t,r=i.index+(e?i[1].length:0);l.includes(r)?(o[r].before&&!e&&(o[r].before=!1),o[r].after&&!n&&(o[r].after=!1)):(l.push(r),o[r]={before:e,after:n})}}l.sort(rs);let s=n.before?n.before.length:0,c=r.length-(n.after?n.after.length:0);for(a=-1;++a<l.length;){let e=l[a];e<s||e>=c||e+1<c&&l[a+1]===e+1&&o[e].after&&!o[e+1].before&&!o[e+1].after||l[a-1]===e-1&&o[e].before&&!o[e-1].before&&!o[e-1].after||(s!==e&&i.push(rc(r.slice(s,e),"\\")),s=e,!/[!-/:-@[-`{-~]/.test(r.charAt(e))||n.encode&&n.encode.includes(r.charAt(e))?(i.push("&#x"+r.charCodeAt(e).toString(16).toUpperCase()+";"),s++):i.push("\\"))}return i.push(rc(r.slice(s,c),n.after)),i.join("")}function rs(e,t){return e-t}function rc(e,t){let n=/\\(?=[!-/:-@[-`{-~])/g,r=[],l=[],i=e+t,o=-1,a=0,u;for(;u=n.exec(i);)r.push(u.index);for(;++o<r.length;)a!==r[o]&&l.push(e.slice(a,r[o])),l.push("\\"),a=r[o];return l.push(e.slice(a)),l.join("")}function rf(e){let t=e||{},n=t.now||{},r=t.lineShift||0,l=n.line||1,i=n.column||1;return{move:function(e){let t=e||"",n=t.split(/\r?\n|\r/g),o=n[n.length-1];return l+=n.length-1,i=1===n.length?i+o.length:1+o.length+r,t},current:function(){return{now:{line:l,column:i},lineShift:r}},shift:function(e){r+=e}}}function rp(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function rd(){this.buffer()}function rh(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=eM(this.sliceSerialize(e)).toLowerCase()}function rg(e){this.exit(e)}function rm(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function ry(){this.buffer()}function rb(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=eM(this.sliceSerialize(e)).toLowerCase()}function rk(e){this.exit(e)}function rx(e,t,n,l){let i=rf(l),o=i.move("[^"),a=n.enter("footnoteReference"),u=n.enter("reference");return o+=i.move(ru(n,rl(e),(0,r.b)((0,r.a)({},i.current()),{before:o,after:"]"}))),u(),a(),o+=i.move("]")}function rv(e,t,n,l){let i=rf(l),o=i.move("[^"),a=n.enter("footnoteDefinition"),u=n.enter("label");return o+=i.move(ru(n,rl(e),(0,r.b)((0,r.a)({},i.current()),{before:o,after:"]"}))),u(),o+=i.move("]:"+(e.children&&e.children.length>0?" ":"")),i.shift(4),o+=i.move(function(e,t){let n=[],r=0,l=0,i;for(;i=ri.exec(e);)o(e.slice(r,i.index)),n.push(i[0]),r=i.index+i[0].length,l++;return o(e.slice(r)),n.join("");function o(e){n.push(t(e,l,!e))}}(function(e,t,n){let l=t.indexStack,i=e.children||[],o=t.createTracker(n),a=[],u=-1;for(l.push(-1);++u<i.length;){let n=i[u];l[l.length-1]=u,a.push(o.move(t.handle(n,e,t,(0,r.a)({before:`
`,after:`
`},o.current())))),"list"!==n.type&&(t.bulletLastUsed=void 0),u<i.length-1&&a.push(o.move(function(e,t,n,r){let l=r.join.length;for(;l--;){let i=r.join[l](e,t,n,r);if(!0===i||1===i)break;if("number"==typeof i)return`
`.repeat(1+i);if(!1===i)return`

<!---->

`}return`

`}(n,i[u+1],e,t)))}return l.pop(),a.join("")}(e,n,i.current()),rw)),a(),o}function rw(e,t,n){return 0===t?e:(n?"":"    ")+e}function rS(e,t,n){let l=t.indexStack,i=e.children||[],o=[],a=-1,u=n.before;l.push(-1);let s=t.createTracker(n);for(;++a<i.length;){let c=i[a],f;if(l[l.length-1]=a,a+1<i.length){let n=t.handle.handlers[i[a+1].type];n&&n.peek&&(n=n.peek),f=n?n(i[a+1],e,t,(0,r.a)({before:"",after:""},s.current())).charAt(0):""}else f=n.after;o.length>0&&("\r"===u||u===`
`)&&"html"===c.type&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/," "),u=" ",(s=t.createTracker(n)).move(o.join(""))),o.push(s.move(t.handle(c,e,t,(0,r.b)((0,r.a)({},s.current()),{before:u,after:f})))),u=o[o.length-1].slice(-1)}return l.pop(),o.join("")}rx.peek=function(){return"["},rF.peek=function(){return"~"};var rC={canContainEols:["delete"],enter:{strikethrough:function(e){this.enter({type:"delete",children:[]},e)}},exit:{strikethrough:function(e){this.exit(e)}}},rE={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"]}],handlers:{delete:rF}};function rF(e,t,n,l){let i=rf(l),o=n.enter("strikethrough"),a=i.move("~~");return a+=rS(e,n,(0,r.b)((0,r.a)({},i.current()),{before:a,after:"~"}))+i.move("~~"),o(),a}function rA(e,t,n){let r=e.value||"",l="`",i=-1;for(;RegExp("(^|[^`])"+l+"([^`]|$)").test(r);)l+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++i<n.unsafe.length;){let e=n.unsafe[i],t=ro(e),l;if(e.atBreak)for(;l=t.exec(r);){let e=l.index;10===r.charCodeAt(e)&&13===r.charCodeAt(e-1)&&e--,r=r.slice(0,e)+" "+r.slice(l.index+1)}}return l+r+l}function rD(e){return e.length}function rT(e){let t="string"==typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}rA.peek=function(){return"`"};var rO={enter:{table:function(e){let t=e._align;this.enter({type:"table",align:t.map(e=>"none"===e?null:e),children:[]},e),this.setData("inTable",!0)},tableData:rP,tableHeader:rP,tableRow:function(e){this.enter({type:"tableRow",children:[]},e)}},exit:{codeText:function(e){let t=this.resume();this.getData("inTable")&&(t=t.replace(/\\([\\|])/g,rI)),this.stack[this.stack.length-1].value=t,this.exit(e)},table:function(e){this.exit(e),this.setData("inTable")},tableData:rL,tableHeader:rL,tableRow:rL}};function rL(e){this.exit(e)}function rP(e){this.enter({type:"tableCell",children:[]},e)}function rI(e,t){return"|"===t?t:e}var rz={exit:{taskListCheckValueChecked:rj,taskListCheckValueUnchecked:rj,paragraph:function(e){let t=this.stack[this.stack.length-2];if(t&&"listItem"===t.type&&"boolean"==typeof t.checked){let e=this.stack[this.stack.length-1],n=e.children[0];if(n&&"text"===n.type){let r=t.children,l=-1,i;for(;++l<r.length;){let e=r[l];if("paragraph"===e.type){i=e;break}}i===e&&(n.value=n.value.slice(1),0===n.value.length?e.children.shift():e.position&&n.position&&"number"==typeof n.position.start.offset&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}}},rM={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:function(e,t,n,l){var i;let o,a,u,s,c,f,p=e.children[0],d="boolean"==typeof e.checked&&p&&"paragraph"===p.type,h="["+(e.checked?"x":" ")+"] ",g=rf(l);d&&g.move(h);let m=(i=(0,r.a)((0,r.a)({},l),g.current()),o=function(e){let t=e.options.listItemIndent||"tab";if(1===t||"1"===t)return"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n),a=n.bulletCurrent||function(e){let t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}(n),t&&"list"===t.type&&t.ordered&&(a=("number"==typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+a),u=a.length+1,("tab"===o||"mixed"===o&&(t&&"list"===t.type&&t.spread||e.spread))&&(u=4*Math.ceil(u/4)),(s=n.createTracker(i)).move(a+" ".repeat(u-a.length)),s.shift(u),c=n.enter("listItem"),f=n.indentLines(n.containerFlow(e,s.current()),function(e,t,n){return t?(n?"":" ".repeat(u))+e:(n?a:a+" ".repeat(u-a.length))+e}),c(),f);return d&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,function(e){return e+h})),m}}};function rj(e){this.stack[this.stack.length-2].checked="taskListCheckValueChecked"===e.type}function rR(e={}){let t,n,l=this.data();function i(e,t){(l[e]?l[e]:l[e]=[]).push(t)}i("micromarkExtensions",X([nz,{document:{91:{tokenize:n$,continuation:{tokenize:nW},exit:nQ}},text:{91:{tokenize:nq},93:{add:"after",tokenize:nU,resolveTo:nV}}},(t=(e||{}).singleTilde,n={tokenize:function(e,n,r){let l=this.previous,i=this.events,o=0;return function(a){return 126===l&&"characterEscape"!==i[i.length-1][1].type?r(a):(e.enter("strikethroughSequenceTemporary"),function i(a){let u=eh(l);if(126===a)return o>1?r(a):(e.consume(a),o++,i);if(o<2&&!t)return r(a);let s=e.exit("strikethroughSequenceTemporary"),c=eh(a);return s._open=!c||2===c&&!!u,s._close=!u||2===u&&!!c,n(a)}(a))}},resolveAll:function(e,t){let n=-1;for(;++n<e.length;)if("enter"===e[n][0]&&"strikethroughSequenceTemporary"===e[n][1].type&&e[n][1]._close){let r=n;for(;r--;)if("exit"===e[r][0]&&"strikethroughSequenceTemporary"===e[r][1].type&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset==e[r][1].end.offset-e[r][1].start.offset){e[n][1].type="strikethroughSequence",e[r][1].type="strikethroughSequence";let l={type:"strikethrough",start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},i={type:"strikethroughText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[["enter",l,t],["enter",e[r][1],t],["exit",e[r][1],t],["enter",i,t]],a=t.parser.constructs.insideSpan.null;a&&Q(o,o.length,0,eg(a,e.slice(r+1,n),t)),Q(o,o.length,0,[["exit",i,t],["enter",e[n][1],t],["exit",e[n][1],t],["exit",l,t]]),Q(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)"strikethroughSequenceTemporary"===e[n][1].type&&(e[n][1].type="data");return e}},null==t&&(t=!0),{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}}),nK,nG])),i("fromMarkdownExtensions",[n7,{enter:{gfmFootnoteDefinition:rp,gfmFootnoteDefinitionLabelString:rd,gfmFootnoteCall:rm,gfmFootnoteCallString:ry},exit:{gfmFootnoteDefinition:rg,gfmFootnoteDefinitionLabelString:rh,gfmFootnoteCall:rk,gfmFootnoteCallString:rb}},rC,rO,rz]),i("toMarkdownExtensions",{extensions:[n8,{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:rv,footnoteReference:rx}},rE,function(e){let t=e||{},n=t.tableCellPadding,l=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:function(e,t,n,r){return u(function(e,t,n){let r=e.children,l=-1,i=[],o=t.enter("table");for(;++l<r.length;)i[l]=s(r[l],t,n);return o(),i}(e,n,r),e.align)},tableRow:function(e,t,n,r){let l=u([s(e,n,r)]);return l.slice(0,l.indexOf(`
`))},tableCell:a,inlineCode:function(e,t,n){let r=rA(e,t,n);return n.stack.includes("tableCell")&&(r=r.replace(/\|/g,"\\$&")),r}}};function a(e,t,n,l){let i=n.enter("tableCell"),a=n.enter("phrasing"),u=rS(e,n,(0,r.b)((0,r.a)({},l),{before:o,after:o}));return a(),i(),u}function u(e,t){return function(e,t={}){let n=(t.align||[]).concat(),r=t.stringLength||rD,l=[],i=[],o=[],a=[],u=0,s=-1;for(;++s<e.length;){let n=[],l=[],f=-1;for(e[s].length>u&&(u=e[s].length);++f<e[s].length;){var c;let i=null==(c=e[s][f])?"":String(c);if(!1!==t.alignDelimiters){let e=r(i);l[f]=e,(void 0===a[f]||e>a[f])&&(a[f]=e)}n.push(i)}i[s]=n,o[s]=l}let f=-1;if("object"==typeof n&&"length"in n)for(;++f<u;)l[f]=rT(n[f]);else{let e=rT(n);for(;++f<u;)l[f]=e}f=-1;let p=[],d=[];for(;++f<u;){let e=l[f],n="",r="";99===e?(n=":",r=":"):108===e?n=":":114===e&&(r=":");let i=!1===t.alignDelimiters?1:Math.max(1,a[f]-n.length-r.length),o=n+"-".repeat(i)+r;!1!==t.alignDelimiters&&((i=n.length+i+r.length)>a[f]&&(a[f]=i),d[f]=i),p[f]=o}i.splice(1,0,p),o.splice(1,0,d),s=-1;let h=[];for(;++s<i.length;){let e=i[s],n=o[s];f=-1;let r=[];for(;++f<u;){let i=e[f]||"",o="",s="";if(!1!==t.alignDelimiters){let e=a[f]-(n[f]||0),t=l[f];114===t?o=" ".repeat(e):99===t?e%2?(o=" ".repeat(e/2+.5),s=" ".repeat(e/2-.5)):s=o=" ".repeat(e/2):s=" ".repeat(e)}!1===t.delimiterStart||f||r.push("|"),!1!==t.padding&&!(!1===t.alignDelimiters&&""===i)&&(!1!==t.delimiterStart||f)&&r.push(" "),!1!==t.alignDelimiters&&r.push(o),r.push(i),!1!==t.alignDelimiters&&r.push(s),!1!==t.padding&&r.push(" "),(!1!==t.delimiterEnd||f!==u-1)&&r.push("|")}h.push(!1===t.delimiterEnd?r.join("").replace(/ +$/,""):r.join(""))}return h.join(`
`)}(e,{align:t,alignDelimiters:l,padding:n,stringLength:i})}function s(e,t,n){let r=e.children,l=-1,i=[],o=t.enter("tableRow");for(;++l<r.length;)i[l]=a(r[l],e,t,n);return o(),i}}(e),rM]})}var r_=(0,r.f)((0,r.j)(),1);function rB(e){return r_.default.createElement("a",{href:e.href,target:"_blank",rel:"noreferrer"},e.children)}function rN({source:e}){return r_.default.createElement(nC,{components:{a:rB},rehypePlugins:[rR]},e)}/*! Bundled license information:

is-buffer/index.js:
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/}}]);