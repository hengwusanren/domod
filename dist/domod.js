!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.domod=e()}(this,function(){"use strict";var n=function(){var n=0;return function(){return n++}}(),e=function(n){return"number"==typeof n},t=function(n){var e=parseInt(n);return!isNaN(e)&&(("number"==typeof n||"string"==typeof n)&&e==n)},r=function(n){return"string"==typeof n},o=function(n){return"[object Object]"===Object.prototype.toString.call(n)},i=function(n){return"[object Array]"===Object.prototype.toString.call(n)},u=function(n){return null==n||"boolean"==typeof n||"number"==typeof n||"string"==typeof n||"function"==typeof n},f=function(n,e){return"function"==typeof e&&n instanceof e},a=function(n){return n instanceof Node},c=function(n){return n instanceof NamedNodeMap},s=function(n){return!!r(n)&&n.startsWith("on")},l=function(n){return n.indexOf(" ")>0||n.indexOf(".")>=0||n.indexOf("[")>=0||n.indexOf("#")>=0},d=function(n,e,t){if(o(n)){for(var r in n)if(n.hasOwnProperty(r)&&!1===(p=e(n[r],r)))break}else if(i(n))if(t)for(u=n.length-1;u>=0&&!1!==(p=e(n[u],u));u--);else for(var u=0,f=n.length;u<f&&!1!==(p=e(n[u],u));u++);else if(a(n)){var s=!1;switch(n.nodeType){case Node.ELEMENT_NODE:break;case Node.TEXT_NODE:case Node.COMMENT_NODE:case Node.PROCESSING_INSTRUCTION_NODE:case Node.DOCUMENT_NODE:case Node.DOCUMENT_TYPE_NODE:case Node.DOCUMENT_FRAGMENT_NODE:default:s=!0}if(s)return;for(var u=0,l=n.childNodes,f=n.childNodes.length;u<f;u++)e(l[u]),d(l[u],e)}else if(c(n))for(var u=0,f=n.length;u<f;u++){var p=e(n[u].nodeValue,n[u].nodeName);if(!1===p)break}},p=function(n){var e=n;return o(n)?(e={},d(n,function(n,t){e[t]=p(n)})):i(n)&&(e=[],d(n,function(n){e.push(p(n))})),e},y=function(n,e){if(o(n))return n.hasOwnProperty(e);if(i(n)){var r=parseInt(e);return t(e)&&n.length>r&&r>=0}return!1},N=function(n,t){var u=r(t)||e(t),f=u?n[t]:n;(o(f)||i(f))&&(d(f,function(n,e){N(f,e)}),i(f)&&h(f)),u&&(n[t]=void 0)},h=function(n,t){if(e(t))for(d(n,function(e,r){if(!(r>=t))return!1;n.length--},!0);n.length<t;)n.push(null);else d(n,function(e,t){void 0===e&&n.length--},!0);return n},b=function(n,e,t){if(!o(n))return null;var r=Array.prototype.slice.call(arguments,1,!0===arguments[arguments.length-1]?arguments.length-1:arguments.length),f=function(n,e,t){o(e)&&(d(e,function(e,r){!y(n,r)||u(e)?n[r]=p(e):f(n[r],e,t)}),t&&(d(n,function(t,r){y(e,r)||N(n,r)}),i(n)&&h(n)))};return d(r,function(e){f(n,e,t)}),n},v=function(n,e){function t(n){return"alias"===n||"lazy"===n||"join"===n}function i(n,e,u,c,s){function l(n,e){if(!e)return n;var t=Array.prototype.slice.call(n.querySelectorAll(e));return t.length<1?null:1===t.length?t[0]:t}if(n=r(n)?{alias:n}:o(n)?n:{},e=e||window.document.body,(u=u||{}).__root||Object.defineProperty(u,"__root",{get:function(){return e},enumerable:!1}),c=c||[],s=s||[],n.alias){s=s.concat(n.alias);var p=f?s.join(a):n.alias;n.lazy?Object.defineProperty(u,p,{get:function(){return l(this.__root,c.join(" "))},enumerable:!0}):u[p]=l(e,c.join(" "))}return d(n,function(n,r){t(r)||i(n,e,u,c.concat(r),s)}),u}function u(n){o(n)&&(n.lazy&&d(n,function(e,i){t(i)||(r(e)?n[i]={alias:e,lazy:!0}:o(e)&&(e.lazy=!0))}),d(n,u))}var f=!!n.join,a="/";u(n),i(n,e,this)},E=function(n,e){return new v(n,e)},O=function(e,t,r,i){if(!o(e))return!1;if(void 0===e[r]||t){var f=n();Object.defineProperty(e,r,{get:function(){return f},enumerable:!1}),i[f]={data:e,props:{},paths:{}};var a=function(n,e){o(e)&&(n.props={},d(e,function(e,t){n.props[t]={setters:[]},a(n.props[t],e)}))};a(i[f],e);var c=function(n,e){d(n,function(t,r){delete n[r],Object.defineProperty(n,r,{get:function(){return t},set:function(o){u(t)?t=o:u(o)?(N(n,r),t=o):b(t,o,!0);!function(n,e,t){d(n.setters,function(n){n(e,t)})}(e.props[r],t,o)},enumerable:!0}),c(t,e.props[r])})};c(e,i[f])}},g=function(n,e,t){var r=this;f(e,v)?d(e,function(e){g(n,e)}):a(e)&&("active"===(o(t)?"active":"passive")?d(t,function(n,e){switch(e){case"show":case"innerText":case"innerHTML":case"className":case"style":break;default:var t=parseInt(e);isNaN(t)&&(s(e)||l(e))}}):e.nodeType===Node.ELEMENT_NODE?(d(e.attributes,function(n,e){if(e.startsWith(r.attrPrefix))switch(e=e.substr(r.attrPrefix.length)){case"show":case"text":case"html":case"class":case"style":break;default:s(e)}}),d(e,function(e){g(n,e)})):(e.nodeType,Node.TEXT_NODE))},_={attrPrefix:"m-",tmplEngine:{parseDeps:function(n){},classParser:function(){},styleParser:function(){},eventParser:function(){},attrValueParser:function(){},textValueParser:function(){}}},m=function(n,e){this.$el=n||window.document.body,this.defaults={},b(this.defaults,_,e)},T={realRefs:"DMD_REAL_REFs",darkRef:"__DMD_DARK_REF",refSeparator:"/"},D={},P=function(n,e){return O(n,e,T.darkRef,D)};m[T.realRefs]=D,m.prototype.alias=function(n){return E(n,this.$el)},m.prototype.bind=function(n,e){return P(n),g(n,this.$el,e)};var j=function(n,e){return new m(n,e)};return j.defaults=p(_),j.alias=E,j.bind=g,j.data=P,j});
//# sourceMappingURL=domod.js.map
