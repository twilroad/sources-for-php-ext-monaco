!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["notadd-monaco"]=n():t["notadd-monaco"]=n()}(this,function(){return function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=38)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var o=e(28)("wks"),r=e(29),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return o[t]||(o[t]=u&&i[t]||(u?i:r)("Symbol."+t))}).store=o},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var o=e(6);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var o=e(11),r=e(24);t.exports=e(7)?function(t,n,e){return o.f(t,n,r(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var o=e(0),r=e(2),i=e(9),u=e(4),c=function(t,n,e){var a,s,f,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,m=t&c.W,y=p?r:r[n]||(r[n]={}),g=y.prototype,x=p?o:d?o[n]:(o[n]||{}).prototype;p&&(e=n);for(a in e)(s=!l&&x&&void 0!==x[a])&&a in y||(f=s?x[a]:e[a],y[a]=p&&"function"!=typeof x[a]?e[a]:h&&s?i(f,o):m&&x[a]==f?function(t){var n=function(n,e,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,o)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((y.virtual||(y.virtual={}))[a]=f,t&c.R&&g&&!g[a]&&u(g,a,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports={}},function(t,n,e){var o=e(10);t.exports=function(t,n,e){if(o(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,o){return t.call(n,e,o)};case 3:return function(e,o,r){return t.call(n,e,o,r)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var o=e(3),r=e(46),i=e(47),u=Object.defineProperty;n.f=e(7)?Object.defineProperty:function(t,n,e){if(o(t),n=i(n,!0),o(e),r)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var o=e(6),r=e(0).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},function(t,n,e){var o=e(26),r=e(15);t.exports=function(t){return o(r(t))}},function(t,n,e){var o=e(28)("keys"),r=e(29);t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,n,e){var o=e(11).f,r=e(12),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!r(t=e?t:t.prototype,i)&&o(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";function o(t){var n,e;this.promise=new t(function(t,o){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=o}),this.resolve=r(n),this.reject=r(e)}var r=e(10);t.exports.f=function(t){return new o(t)}},function(t,n,e){"use strict";var o=e(23),r=e(5),i=e(48),u=e(4),c=e(12),a=e(8),s=e(49),f=e(20),l=e(55),p=e(1)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,m,y,g){s(e,n,h);var x,_,w,b=function(t){if(!d&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},S=n+" Iterator",j="values"==m,O=!1,M=t.prototype,P=M[p]||M["@@iterator"]||m&&M[m],T=P||b(m),L=m?j?b("entries"):T:void 0,E="Array"==n?M.entries||P:P;if(E&&(w=l(E.call(new t)))!==Object.prototype&&w.next&&(f(w,S,!0),o||c(w,p)||u(w,p,v)),j&&P&&"values"!==P.name&&(O=!0,T=function(){return P.call(this)}),o&&!g||!d&&!O&&M[p]||u(M,p,T),a[n]=T,a[S]=v,m)if(x={values:j?T:b("values"),keys:y?T:b("keys"),entries:L},g)for(_ in x)_ in M||i(M,_,x[_]);else r(r.P+r.F*(d||O),n,x);return x}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var o=e(52),r=e(30);t.exports=Object.keys||function(t){return o(t,r)}},function(t,n,e){var o=e(13);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,n,e){var o=e(14),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,n,e){var o=e(0),r=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,n){var e=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+o).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var o=e(0).document;t.exports=o&&o.documentElement},function(t,n,e){var o=e(15);t.exports=function(t){return Object(o(t))}},function(t,n,e){var o=e(13),r=e(1)("toStringTag"),i="Arguments"==o(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),r))?e:i?o(n):"Object"==(c=o(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var o=e(3),r=e(10),i=e(1)("species");t.exports=function(t,n){var e,u=o(t).constructor;return void 0===u||void 0==(e=o(u)[i])?n:r(e)}},function(t,n,e){var o,r,i,u=e(9),c=e(66),a=e(31),s=e(17),f=e(0),l=f.process,p=f.setImmediate,d=f.clearImmediate,v=f.MessageChannel,h=f.Dispatch,m=0,y={},g=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},x=function(t){g.call(t.data)};p&&d||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++m]=function(){c("function"==typeof t?t:Function(t),n)},o(m),m},d=function(t){delete y[t]},"process"==e(13)(l)?o=function(t){l.nextTick(u(g,t,1))}:h&&h.now?o=function(t){h.now(u(g,t,1))}:v?(r=new v,i=r.port2,r.port1.onmessage=x,o=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(o=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):o="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(u(g,t,1),0)}),t.exports={set:p,clear:d}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var o=e(3),r=e(6),i=e(21);t.exports=function(t,n){if(o(t),r(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(39);n.default=o.a},function(t,n,e){"use strict";var o=e(40);n.a={install:function(t){t.vue.component("monaco",o.a)}}},function(t,n,e){"use strict";var o=e(41),r=e.n(o),i=e(73),u=e.n(i);n.a={beforeDestroy:function(){var t=this;t.editor&&t.editor.dispose()},data:function(){return{editorLoaded:!1}},methods:{focus:function(){this.editor.focus()},getMonaco:function(){return this.editor},init:function(){var t=this,n=this,e=u()({value:n.value,theme:n.theme,language:n.language},n.options),o=function(){n.editorLoaded=!0,n.editor=window.monaco.editor.create(n.$el,e),n.$emit("editorMount",n.editor),n.editor.onContextMenu(function(t){return n.$emit("contextMenu",t)}),n.editor.onDidBlurEditor(function(){return n.$emit("blur")}),n.editor.onDidBlurEditorText(function(){return n.$emit("blurText")}),n.editor.onDidChangeConfiguration(function(t){n.$emit("configuration",t)}),n.editor.onDidChangeCursorPosition(function(t){n.$emit("position",t)}),n.editor.onDidChangeCursorSelection(function(t){n.$emit("selection",t)}),n.editor.onDidChangeModel(function(t){return n.$emit("model",t)}),n.editor.onDidChangeModelContent(function(t){var e=n.editor.getValue();n.value!==e&&(n.$emit("change",e,t),n.$emit("input",e))}),n.editor.onDidChangeModelDecorations(function(t){n.$emit("modelDecorations",t)}),n.editor.onDidChangeModelLanguage(function(n){t.$emit("modelLanguage",n)}),n.editor.onDidChangeModelOptions(function(t){n.$emit("modelOptions",t)}),n.editor.onDidDispose(function(t){n.$emit("afterDispose",t)}),n.editor.onDidFocusEditor(function(){n.$emit("focus")}),n.editor.onDidFocusEditorText(function(){n.$emit("focusText")}),n.editor.onDidLayoutChange(function(t){n.$emit("layout",t)}),n.editor.onDidScrollChange(function(t){n.$emit("scroll",t)}),n.editor.onKeyDown(function(t){n.$emit("keydown",t)}),n.editor.onKeyUp(function(t){n.$emit("keyup",t)}),n.editor.onMouseDown(function(t){n.$emit("mouseDown",t)}),n.editor.onMouseLeave(function(t){n.$emit("mouseLeave",t)}),n.editor.onMouseMove(function(t){n.$emit("mouseMove",t)}),n.editor.onMouseUp(function(t){n.$emit("mouseUp",t)})};void 0===window.monaco?(window.require.config({paths:{vs:window.monacoPath}}),window.require(["vs/editor/editor.main"],o)):o()},load:function(){var t=this,n=[],e=document.getElementById("monacoScriptTag");null===e&&n.push(new r.a(function(t,n){e=document.createElement("script"),e.type="text/javascript",e.src=window.monacoPath+"/loader.js",e.id="monacoScriptTag",e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,t(e))}:e.onload=function(){t(e)},e.onerror=function(){n(Error("Configuration load error!"))},document.body.appendChild(e)})),r.a.all(n).then(function(){setTimeout(function(){t.init()},300)})}},mounted:function(){var t=this;void 0!==window.require?t.init():t.load()},props:{value:String,theme:{type:String,default:"vs"},language:String,options:Object,placeholder:null},render:function(t){return t("div",null,[this.editorLoaded?null:this.placeholder])},watch:{options:{deep:!0,handler:function(t){this.editor&&this.editor.updateOptions(t)}},value:function(t){this.editor&&t!==this.editor.getValue()&&this.editor.setValue(t)},language:function(t){this.editor&&window.monaco.editor.setModelLanguage(this.editor.getModel(),t)},theme:function(t){this.editor&&window.monaco.editor.setTheme(t)}}}},function(t,n,e){t.exports={default:e(42),__esModule:!0}},function(t,n,e){e(43),e(44),e(56),e(60),e(71),e(72),t.exports=e(2).Promise},function(t,n){},function(t,n,e){"use strict";var o=e(45)(!0);e(22)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=o(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var o=e(14),r=e(15);t.exports=function(t){return function(n,e){var i,u,c=String(r(n)),a=o(e),s=c.length;return a<0||a>=s?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){t.exports=!e(7)&&!e(16)(function(){return 7!=Object.defineProperty(e(17)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var o=e(6);t.exports=function(t,n){if(!o(t))return t;var e,r;if(n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;if("function"==typeof(e=t.valueOf)&&!o(r=e.call(t)))return r;if(!n&&"function"==typeof(e=t.toString)&&!o(r=e.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){t.exports=e(4)},function(t,n,e){"use strict";var o=e(50),r=e(24),i=e(20),u={};e(4)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=o(u,{next:r(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var o=e(3),r=e(51),i=e(30),u=e(19)("IE_PROTO"),c=function(){},a=function(){var t,n=e(17)("iframe"),o=i.length;for(n.style.display="none",e(31).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;o--;)delete a.prototype[i[o]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=o(t),e=new c,c.prototype=null,e[u]=t):e=a(),void 0===n?e:r(e,n)}},function(t,n,e){var o=e(11),r=e(3),i=e(25);t.exports=e(7)?Object.defineProperties:function(t,n){r(t);for(var e,u=i(n),c=u.length,a=0;c>a;)o.f(t,e=u[a++],n[e]);return t}},function(t,n,e){var o=e(12),r=e(18),i=e(53)(!1),u=e(19)("IE_PROTO");t.exports=function(t,n){var e,c=r(t),a=0,s=[];for(e in c)e!=u&&o(c,e)&&s.push(e);for(;n.length>a;)o(c,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var o=e(18),r=e(27),i=e(54);t.exports=function(t){return function(n,e,u){var c,a=o(n),s=r(a.length),f=i(u,s);if(t&&e!=e){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var o=e(14),r=Math.max,i=Math.min;t.exports=function(t,n){return t=o(t),t<0?r(t+n,0):i(t,n)}},function(t,n,e){var o=e(12),r=e(32),i=e(19)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){e(57);for(var o=e(0),r=e(4),i=e(8),u=e(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var s=c[a],f=o[s],l=f&&f.prototype;l&&!l[u]&&r(l,u,s),i[s]=i.Array}},function(t,n,e){"use strict";var o=e(58),r=e(59),i=e(8),u=e(18);t.exports=e(22)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,r(1)):"keys"==n?r(0,e):"values"==n?r(0,t[e]):r(0,[e,t[e]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var o,r,i,u,c=e(23),a=e(0),s=e(9),f=e(33),l=e(5),p=e(6),d=e(10),v=e(61),h=e(62),m=e(34),y=e(35).set,g=e(67)(),x=e(21),_=e(36),w=e(37),b=a.TypeError,S=a.process,j=a.Promise,O="process"==f(S),M=function(){},P=r=x.f,T=!!function(){try{var t=j.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(M,M)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof n}catch(t){}}(),L=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},E=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var o=t._v,r=1==t._s,i=0;e.length>i;)!function(n){var e,i,u=r?n.ok:n.fail,c=n.resolve,a=n.reject,s=n.domain;try{u?(r||(2==t._h&&$(t),t._h=1),!0===u?e=o:(s&&s.enter(),e=u(o),s&&s.exit()),e===n.promise?a(b("Promise-chain cycle")):(i=L(e))?i.call(e,c,a):c(e)):a(o)}catch(t){a(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&C(t)})}},C=function(t){y.call(a,function(){var n,e,o,r=t._v,i=D(t);if(i&&(n=_(function(){O?S.emit("unhandledRejection",r,t):(e=a.onunhandledrejection)?e({promise:t,reason:r}):(o=a.console)&&o.error&&o.error("Unhandled promise rejection",r)}),t._h=O||D(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},D=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,o=0;e.length>o;)if(n=e[o++],n.fail||!D(n.promise))return!1;return!0},$=function(t){y.call(a,function(){var n;O?S.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},k=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),E(n,!0))},A=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw b("Promise can't be resolved itself");(n=L(t))?g(function(){var o={_w:e,_d:!1};try{n.call(t,s(A,o,1),s(k,o,1))}catch(t){k.call(o,t)}}):(e._v=t,e._s=1,E(e,!1))}catch(t){k.call({_w:e,_d:!1},t)}}};T||(j=function(t){v(this,j,"Promise","_h"),d(t),o.call(this);try{t(s(A,this,1),s(k,this,1))}catch(t){k.call(this,t)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=e(68)(j.prototype,{then:function(t,n){var e=P(m(this,j));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=O?S.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&E(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new o;this.promise=t,this.resolve=s(A,t,1),this.reject=s(k,t,1)},x.f=P=function(t){return t===j||t===u?new i(t):r(t)}),l(l.G+l.W+l.F*!T,{Promise:j}),e(20)(j,"Promise"),e(69)("Promise"),u=e(2).Promise,l(l.S+l.F*!T,"Promise",{reject:function(t){var n=P(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!T),"Promise",{resolve:function(t){return w(c&&this===u?j:this,t)}}),l(l.S+l.F*!(T&&e(70)(function(t){j.all(t).catch(M)})),"Promise",{all:function(t){var n=this,e=P(n),o=e.resolve,r=e.reject,i=_(function(){var e=[],i=0,u=1;h(t,!1,function(t){var c=i++,a=!1;e.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,e[c]=t,--u||o(e))},r)}),--u||o(e)});return i.e&&r(i.v),e.promise},race:function(t){var n=this,e=P(n),o=e.reject,r=_(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,o)})});return r.e&&o(r.v),e.promise}})},function(t,n){t.exports=function(t,n,e,o){if(!(t instanceof n)||void 0!==o&&o in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var o=e(9),r=e(63),i=e(64),u=e(3),c=e(27),a=e(65),s={},f={},n=t.exports=function(t,n,e,l,p){var d,v,h,m,y=p?function(){return t}:a(t),g=o(e,l,n?2:1),x=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(d=c(t.length);d>x;x++)if((m=n?g(u(v=t[x])[0],v[1]):g(t[x]))===s||m===f)return m}else for(h=y.call(t);!(v=h.next()).done;)if((m=r(h,g,v.value,n))===s||m===f)return m};n.BREAK=s,n.RETURN=f},function(t,n,e){var o=e(3);t.exports=function(t,n,e,r){try{return r?n(o(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&o(i.call(t)),n}}},function(t,n,e){var o=e(8),r=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||i[r]===t)}},function(t,n,e){var o=e(33),r=e(1)("iterator"),i=e(8);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||i[o(t)]}},function(t,n){t.exports=function(t,n,e){var o=void 0===e;switch(n.length){case 0:return o?t():t.call(e);case 1:return o?t(n[0]):t.call(e,n[0]);case 2:return o?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return o?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return o?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var o=e(0),r=e(35).set,i=o.MutationObserver||o.WebKitMutationObserver,u=o.process,c=o.Promise,a="process"==e(13)(u);t.exports=function(){var t,n,e,s=function(){var o,r;for(a&&(o=u.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?e():n=void 0,o}}n=void 0,o&&o.enter()};if(a)e=function(){u.nextTick(s)};else if(i){var f=!0,l=document.createTextNode("");new i(s).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(c&&c.resolve){var p=c.resolve();e=function(){p.then(s)}}else e=function(){r.call(o,s)};return function(o){var r={fn:o,next:void 0};n&&(n.next=r),t||(t=r,e()),n=r}}},function(t,n,e){var o=e(4);t.exports=function(t,n,e){for(var r in n)e&&t[r]?t[r]=n[r]:o(t,r,n[r]);return t}},function(t,n,e){"use strict";var o=e(0),r=e(2),i=e(11),u=e(7),c=e(1)("species");t.exports=function(t){var n="function"==typeof r[t]?r[t]:o[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var o=e(1)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!r)return!1;var e=!1;try{var i=[7],u=i[o]();u.next=function(){return{done:e=!0}},i[o]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var o=e(5),r=e(2),i=e(0),u=e(34),c=e(37);o(o.P+o.R,"Promise",{finally:function(t){var n=u(this,r.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var o=e(5),r=e(21),i=e(36);o(o.S,"Promise",{try:function(t){var n=r.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){"use strict";n.__esModule=!0;var o=e(74),r=function(t){return t&&t.__esModule?t:{default:t}}(o);n.default=r.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},function(t,n,e){t.exports={default:e(75),__esModule:!0}},function(t,n,e){e(76),t.exports=e(2).Object.assign},function(t,n,e){var o=e(5);o(o.S+o.F,"Object",{assign:e(77)})},function(t,n,e){"use strict";var o=e(25),r=e(78),i=e(79),u=e(32),c=e(26),a=Object.assign;t.exports=!a||e(16)(function(){var t={},n={},e=Symbol(),o="abcdefghijklmnopqrst";return t[e]=7,o.split("").forEach(function(t){n[t]=t}),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=o})?function(t,n){for(var e=u(t),a=arguments.length,s=1,f=r.f,l=i.f;a>s;)for(var p,d=c(arguments[s++]),v=f?o(d).concat(f(d)):o(d),h=v.length,m=0;h>m;)l.call(d,p=v[m++])&&(e[p]=d[p]);return e}:a},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable}])});