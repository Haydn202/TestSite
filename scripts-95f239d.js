/****** FILE: themes/worksafe/js/lib/jquery.min.js *****/
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/****** FILE: themes/worksafe/js/lib/jquery-migrate-1.4.1.min.js *****/
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);

/***
 * Range selection...Monica
 */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("selectionContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/****** FILE: themes/worksafe/js/lib/jquery.entwine.js *****/
/* jQuery.Entwine - Copyright 2009-2011 Hamish Friedlander and SilverStripe. Version . */

/* vendor/jquery.selector/jquery.class.js */

/**
 * Very basic Class utility. Based on base and jquery.class.
 *
 * Class definition: var Foo = Base.extend({ init: function(){ Constructor }; method_name: function(){ Method } });
 *
 * Inheritance: var Bar = Foo.extend({ method_name: function(){ this._super(); } });
 *
 * new-less Constructor: new Foo(arg) <-same as-> Foo(arg)
 */

var Base;

(function(){

    var marker = {}, fnTest = /xyz/.test(function(){var xyz;}) ? /\b_super\b/ : /.*/;

    // The base Class implementation (does nothing)
    Base = function(){};

    Base.addMethod = function(name, func) {
        var parent = this._super && this._super.prototype;

        if (parent && fnTest.test(func)) {
            this.prototype[name] = function(){
                var tmp = this._super;
                this._super = parent[name];
                try {
                    var ret = func.apply(this, arguments);
                }
                finally {
                    this._super = tmp;
                }
                return ret;
            };
        }
        else this.prototype[name] = func;
    };

    Base.addMethods = function(props) {
        for (var name in props) {
            if (typeof props[name] == 'function') this.addMethod(name, props[name]);
            else this.prototype[name] = props[name];
        }
    };

    Base.subclassOf = function(parentkls) {
        var kls = this;
        while (kls) {
            if (kls === parentkls) return true;
            kls = kls._super;
        }
    };

    // Create a new Class that inherits from this class
    Base.extend = function(props) {

        // The dummy class constructor
        var Kls = function() {
            if (arguments[0] === marker) return;

            if (this instanceof Kls) {
                if (this.init) this.init.apply(this, arguments);
            }
            else {
                var ret = new Kls(marker); if (ret.init) ret.init.apply(ret, arguments); return ret;
            }
        };

        // Add the common class variables and methods
        Kls.constructor = Kls;
        Kls.extend = Base.extend;
        Kls.addMethod = Base.addMethod;
        Kls.addMethods = Base.addMethods;
        Kls.subclassOf = Base.subclassOf;

        Kls._super = this;

        // Attach the parent object to the inheritance chain
        Kls.prototype = new this(marker);
        Kls.prototype.constructor = Kls;

        // Copy the properties over onto the new prototype
        Kls.addMethods(props);

        return Kls;
    };
})();;


/* vendor/jquery.selector/jquery.selector.js */

(function($){

    var tokens = {
        UNICODE: /\\[0-9a-f]{1,6}(?:\r\n|[ \n\r\t\f])?/,
        ESCAPE: /(?:UNICODE)|\\[^\n\r\f0-9a-f]/,
        NONASCII: /[^\x00-\x7F]/,
        NMSTART: /[_a-z]|(?:NONASCII)|(?:ESCAPE)/,
        NMCHAR: /[_a-z0-9-]|(?:NONASCII)|(?:ESCAPE)/,
        IDENT: /-?(?:NMSTART)(?:NMCHAR)*/,

        NL: /\n|\r\n|\r|\f/,

        STRING: /(?:STRING1)|(?:STRING2)|(?:STRINGBARE)/,
        STRING1: /"(?:(?:ESCAPE)|\\(?:NL)|[^\n\r\f\"])*"/,
        STRING2: /'(?:(?:ESCAPE)|\\(?:NL)|[^\n\r\f\'])*'/,
        STRINGBARE: /(?:(?:ESCAPE)|\\(?:NL)|[^\n\r\f\]])*/,

        FUNCTION: /(?:IDENT)\(\)/,

        INTEGER: /[0-9]+/,

        WITHN: /([-+])?(INTEGER)?(n)\s*(?:([-+])\s*(INTEGER))?/,
        WITHOUTN: /([-+])?(INTEGER)/
    };

    var rx = {
        not: /:not\(/,
        not_end: /\)/,

        tag: /((?:IDENT)|\*)/,
        id: /#(IDENT)/,
        cls: /\.(IDENT)/,
        attr: /\[\s*(IDENT)\s*(?:([^=]?=)\s*(STRING)\s*)?\]/,
        pseudo_el: /(?::(first-line|first-letter|before|after))|(?:::((?:FUNCTION)|(?:IDENT)))/,
        pseudo_cls_nth: /:nth-child\(\s*(?:(?:WITHN)|(?:WITHOUTN)|(odd|even))\s*\)/,
        pseudo_cls: /:(IDENT)/,

        comb: /\s*(\+|~|>)\s*|\s+/,
        comma: /\s*,\s*/,
        important: /\s+!important\s*$/
    };

    /* Replace placeholders with actual regex, and mark all as case insensitive */
    var token = /[A-Z][A-Z0-9]+/;
    for (var k in rx) {
        var m, src = rx[k].source;
        while (m = src.match(token)) src = src.replace(m[0], tokens[m[0]].source);
        rx[k] = new RegExp(src, 'gi');
    }

    /**
     * A string that matches itself against regexii, and keeps track of how much of itself has been matched
     */
    var ConsumableString = Base.extend({
        init: function(str) {
            this.str = str;
            this.pos = 0;
        },
        match: function(rx) {
            var m;
            rx.lastIndex = this.pos;
            if ((m = rx.exec(this.str)) && m.index == this.pos ) {
                this.pos = rx.lastIndex ? rx.lastIndex : this.str.length ;
                return m;
            }
            return null;
        },
        peek: function(rx) {
            var m;
            rx.lastIndex = this.pos;
            if ((m = rx.exec(this.str)) && m.index == this.pos ) return m;
            return null;
        },
        showpos: function() {
            return this.str.slice(0,this.pos)+'<HERE>' + this.str.slice(this.pos);
        },
        done: function() {
            return this.pos == this.str.length;
        }
    });

    /* A base class that all Selectors inherit off */
    var SelectorBase = Base.extend({});

    /**
     * A class representing a Simple Selector, as per the CSS3 selector spec
     */
    var SimpleSelector = SelectorBase.extend({
        init: function() {
            this.tag = null;
            this.id = null;
            this.classes = [];
            this.attrs = [];
            this.nots = [];
            this.pseudo_classes = [];
            this.pseudo_els = [];
        },
        parse: function(selector) {
            var m;

            /* Pull out the initial tag first, if there is one */
            if (m = selector.match(rx.tag)) this.tag = m[1];

            /* Then for each selection type, try and find a match */
            do {
                if (m = selector.match(rx.not)) {
                    this.nots[this.nots.length] = SelectorsGroup().parse(selector);
                    if (!(m = selector.match(rx.not_end))) {
                        throw 'Invalid :not term in selector';
                    }
                }
                else if (m = selector.match(rx.id))         this.id = m[1];
                else if (m = selector.match(rx.cls))        this.classes[this.classes.length] = m[1];
                else if (m = selector.match(rx.attr))       this.attrs[this.attrs.length] = [ m[1], m[2], m[3] ];
                else if (m = selector.match(rx.pseudo_el))  this.pseudo_els[this.pseudo_els.length] = m[1] || m[2];
                else if (m = selector.match(rx.pseudo_cls_nth)) {
                    if (m[3]) {
                        var a = parseInt((m[1]||'')+(m[2]||'1'));
                        var b = parseInt((m[4]||'')+(m[5]||'0'));
                    }
                    else {
                        var a = m[8] ? 2 : 0;
                        var b = m[8] ? (4-m[8].length) : parseInt((m[6]||'')+m[7]);
                    }
                    this.pseudo_classes[this.pseudo_classes.length] = ['nth-child', [a, b]];
                }
                else if (m = selector.match(rx.pseudo_cls)) this.pseudo_classes[this.pseudo_classes.length] = [m[1]];

            } while(m && !selector.done());

            return this;
        }
    });

    /**
     * A class representing a Selector, as per the CSS3 selector spec
     */
    var Selector = SelectorBase.extend({
        init: function(){
            this.parts = [];
        },
        parse: function(cons){
            this.parts[this.parts.length] = SimpleSelector().parse(cons);

            while (!cons.done() && !cons.peek(rx.comma) && (m = cons.match(rx.comb))) {
                this.parts[this.parts.length] = m[1] || ' ';
                this.parts[this.parts.length] = SimpleSelector().parse(cons);
            }

            return this.parts.length == 1 ? this.parts[0] : this;
        }
    });

    /**
     * A class representing a sequence of selectors, as per the CSS3 selector spec
     */
    var SelectorsGroup = SelectorBase.extend({
        init: function(){
            this.parts = [];
        },
        parse: function(cons){
            this.parts[this.parts.length] = Selector().parse(cons);

            while (!cons.done() && (m = cons.match(rx.comma))) {
                this.parts[this.parts.length] = Selector().parse(cons);
            }

            return this.parts.length == 1 ? this.parts[0] : this;
        }
    });


    $.selector = function(s){
        var cons = ConsumableString(s);
        var res = SelectorsGroup().parse(cons);

        res.selector = s;

        if (!cons.done()) throw 'Could not parse selector - ' + cons.showpos() ;
        else return res;
    };

    $.selector.SelectorBase = SelectorBase;
    $.selector.SimpleSelector = SimpleSelector;
    $.selector.Selector = Selector;
    $.selector.SelectorsGroup = SelectorsGroup;

})(jQuery);
;


/* vendor/jquery.selector/jquery.selector.specifity.js */

(function($) {

    $.selector.SimpleSelector.addMethod('specifity', function() {
        if (this.spec) return this.spec;

        var spec = [
            this.id ? 1 : 0,
            this.classes.length + this.attrs.length + this.pseudo_classes.length,
            ((this.tag && this.tag != '*') ? 1 : 0) + this.pseudo_els.length
        ];
        $.each(this.nots, function(i,not){
            var ns = not.specifity(); spec[0] += ns[0]; spec[1] += ns[1]; spec[2] += ns[2];
        });

        return this.spec = spec;
    });

    $.selector.Selector.addMethod('specifity', function(){
        if (this.spec) return this.spec;

        var spec = [0,0,0];
        $.each(this.parts, function(i,part){
            if (i%2) return;
            var ps = part.specifity(); spec[0] += ps[0]; spec[1] += ps[1]; spec[2] += ps[2];
        });

        return this.spec = spec;
    });

    $.selector.SelectorsGroup.addMethod('specifity', function(){
        if (this.spec) return this.spec;

        var spec = [0,0,0];
        $.each(this.parts, function(i,part){
            var ps = part.specifity(); spec[0] += ps[0]; spec[1] += ps[1]; spec[2] += ps[2];
        });

        return this.spec = spec;
    });


})(jQuery);
;


/* vendor/jquery.selector/jquery.selector.matches.js */

/*
This attempts to do the opposite of Sizzle.
Sizzle is good for finding elements for a selector, but not so good for telling if an individual element matches a selector
*/

(function($) {

    /**** CAPABILITY TESTS ****/
    var div = document.createElement('div');
    div.innerHTML = '<form id="test"><input name="id" type="text"/></form>';

    // In IE 6-7, getAttribute often does the wrong thing (returns similar to el.attr), so we need to use getAttributeNode on that browser
    var getAttributeDodgy = div.firstChild.getAttribute('id') !== 'test';

    // Does browser support Element.firstElementChild, Element.previousElementSibling, etc.
    var hasElementTraversal = div.firstElementChild && div.firstElementChild.tagName == 'FORM';

    // Does browser support Element.children
    var hasChildren = div.children && div.children[0].tagName == 'FORM';

    /**** INTRO ****/

    var GOOD = /GOOD/g;
    var BAD = /BAD/g;

    var STARTS_WITH_QUOTES = /^['"]/g;

    var join = function(js) {
        return js.join('\n');
    };

    var join_complex = function(js) {
        var code = new String(js.join('\n')); // String objects can have properties set. strings can't
        code.complex = true;
        return code;
    };

    /**** ATTRIBUTE ACCESSORS ****/

        // Not all attribute names can be used as identifiers, so we encode any non-acceptable characters as hex
    var varForAttr = function(attr) {
            return '_' + attr.replace(/^[^A-Za-z]|[^A-Za-z0-9]/g, function(m){ return '_0x' + m.charCodeAt(0).toString(16) + '_'; });
        };

    var getAttr;

    // Good browsers
    if (!getAttributeDodgy) {
        getAttr = function(attr){ return 'var '+varForAttr(attr)+' = el.getAttribute("'+attr+'");' ; };
    }
    // IE 6, 7
    else {
        // On IE 6 + 7, getAttribute still has to be called with DOM property mirror name, not attribute name. Map attributes to those names
        var getAttrIEMap = { 'class': 'className', 'for': 'htmlFor' };

        getAttr = function(attr) {
            var ieattr = getAttrIEMap[attr] || attr;
            return 'var '+varForAttr(attr)+' = el.getAttribute("'+ieattr+'",2) || (el.getAttributeNode("'+attr+'")||{}).nodeValue;';
        };
    }

    /**** ATTRIBUTE COMPARITORS ****/

    var attrchecks = {
        '-':  '!K',
        '=':  'K != "V"',
        '!=': 'K == "V"',
        '~=': '_WS_K.indexOf(" V ") == -1',
        '^=': '!K || K.indexOf("V") != 0',
        '*=': '!K || K.indexOf("V") == -1',
        '$=': '!K || K.substr(K.length-"V".length) != "V"'
    };

    /**** STATE TRACKER ****/

    var State = $.selector.State = Base.extend({
        init: function(){
            this.reset();
        },
        reset: function() {
            this.attrs = {}; this.wsattrs = {};
        },

        prev: function(){
            this.reset();
            if (hasElementTraversal) return 'el = el.previousElementSibling';
            return 'while((el = el.previousSibling) && el.nodeType != 1) {}';
        },
        next: function() {
            this.reset();
            if (hasElementTraversal) return 'el = el.nextElementSibling';
            return 'while((el = el.nextSibling) && el.nodeType != 1) {}';
        },
        prevLoop: function(body){
            this.reset();
            if (hasElementTraversal) return join([ 'while(el = el.previousElementSibling){', body]);
            return join([
                'while(el = el.previousSibling){',
                'if (el.nodeType != 1) continue;',
                body
            ]);
        },
        parent: function() {
            this.reset();
            return 'el = el.parentNode;';
        },
        parentLoop: function(body) {
            this.reset();
            return join([
                'while((el = el.parentNode) && el.nodeType == 1){',
                body,
                '}'
            ]);
        },

        uses_attr: function(attr) {
            if (this.attrs[attr]) return;
            this.attrs[attr] = true;
            return getAttr(attr);
        },
        uses_wsattr: function(attr) {
            if (this.wsattrs[attr]) return;
            this.wsattrs[attr] = true;
            return join([this.uses_attr(attr), 'var _WS_'+varForAttr(attr)+' = " "+'+varForAttr(attr)+'+" ";']);
        },

        uses_jqueryFilters: function() {
            if (this.jqueryFiltersAdded) return;
            this.jqueryFiltersAdded = true;
            return 'var _$filters = jQuery.find.selectors.filters;';
        },

        save: function(lbl) {
            return 'var el'+lbl+' = el;';
        },
        restore: function(lbl) {
            this.reset();
            return 'el = el'+lbl+';';
        }
    });

    /**** PSEUDO-CLASS DETAILS ****/

    var pseudoclschecks = {
        'first-child': join([
            'var cel = el;',
            'while(cel = cel.previousSibling){ if (cel.nodeType === 1) BAD; }'
        ]),
        'last-child': join([
            'var cel = el;',
            'while(cel = cel.nextSibling){ if (cel.nodeType === 1) BAD; }'
        ]),
        'nth-child': function(a,b) {
            var get_i = join([
                'var i = 1, cel = el;',
                'while(cel = cel.previousSibling){',
                'if (cel.nodeType === 1) i++;',
                '}'
            ]);

            if (a == 0) return join([
                get_i,
                'if (i- '+b+' != 0) BAD;'
            ]);
            else if (b == 0 && a >= 0) return join([
                get_i,
                'if (i%'+a+' != 0 || i/'+a+' < 0) BAD;'
            ]);
            else if (b == 0 && a < 0) return join([
                'BAD;'
            ]);
            else return join([
                    get_i,
                    'if ((i- '+b+')%'+a+' != 0 || (i- '+b+')/'+a+' < 0) BAD;'
                ]);
        }
    };

    // Needs to refence contents of object, so must be injected after definition
    pseudoclschecks['only-child'] = join([
        pseudoclschecks['first-child'],
        pseudoclschecks['last-child']
    ]);

    /**** SimpleSelector ****/

    $.selector.SimpleSelector.addMethod('compile', function(el) {
        var js = [];

        /* Check against element name */
        if (this.tag && this.tag != '*') {
            js[js.length] = 'if (el.tagName != "'+this.tag.toUpperCase()+'") BAD;';
        }

        /* Check against ID */
        if (this.id) {
            js[js.length] = el.uses_attr('id');
            js[js.length] = 'if (_id !== "'+this.id+'") BAD;';
        }

        /* Build className checking variable */
        if (this.classes.length) {
            js[js.length] = el.uses_wsattr('class');

            /* Check against class names */
            $.each(this.classes, function(i, cls){
                js[js.length] = 'if (_WS__class.indexOf(" '+cls+' ") == -1) BAD;';
            });
        }

        /* Check against attributes */
        $.each(this.attrs, function(i, attr){
            js[js.length] = (attr[1] == '~=') ? el.uses_wsattr(attr[0]) : el.uses_attr(attr[0]);
            var check = attrchecks[ attr[1] || '-' ];
            check = check.replace( /K/g, varForAttr(attr[0])).replace( /V/g, attr[2] && attr[2].match(STARTS_WITH_QUOTES) ? attr[2].slice(1,-1) : attr[2] );
            js[js.length] = 'if ('+check+') BAD;';
        });

        /* Check against nots */
        $.each(this.nots, function(i, not){
            var lbl = ++lbl_id;
            var func = join([
                'l'+lbl+':{',
                not.compile(el).replace(BAD, 'break l'+lbl).replace(GOOD, 'BAD'),
                '}'
            ]);

            if (!(not instanceof $.selector.SimpleSelector)) func = join([
                el.save(lbl),
                func,
                el.restore(lbl)
            ]);

            js[js.length] = func;
        });

        /* Check against pseudo-classes */
        $.each(this.pseudo_classes, function(i, pscls){
            var check = pseudoclschecks[pscls[0]];
            if (check) {
                js[js.length] = ( typeof check == 'function' ? check.apply(this, pscls[1]) : check );
            }
            else if (check = $.find.selectors.filters[pscls[0]]) {
                js[js.length] = el.uses_jqueryFilters();
                js[js.length] = 'if (!_$filters.'+pscls[0]+'(el)) BAD;';
            }
        });

        js[js.length] = 'GOOD';

        /* Pass */
        return join(js);
    });

    var lbl_id = 0;
    /** Turns an compiled fragment into the first part of a combination */
    function as_subexpr(f) {
        if (f.complex)
            return join([
                'l'+(++lbl_id)+':{',
                f.replace(GOOD, 'break l'+lbl_id),
                '}'
            ]);
        else
            return f.replace(GOOD, '');
    }

    var combines = {
        ' ': function(el, f1, f2) {
            return join_complex([
                f2,
                'while(true){',
                el.parent(),
                'if (!el || el.nodeType !== 1) BAD;',
                f1.compile(el).replace(BAD, 'continue'),
                '}'
            ]);
        },

        '>': function(el, f1, f2) {
            return join([
                f2,
                el.parent(),
                'if (!el || el.nodeType !== 1) BAD;',
                f1.compile(el)
            ]);
        },

        '~': function(el, f1, f2) {
            return join_complex([
                f2,
                el.prevLoop(),
                f1.compile(el).replace(BAD, 'continue'),
                '}',
                'BAD;'
            ]);
        },

        '+': function(el, f1, f2) {
            return join([
                f2,
                el.prev(),
                'if (!el) BAD;',
                f1.compile(el)
            ]);
        }
    };

    $.selector.Selector.addMethod('compile', function(el) {
        var l = this.parts.length;

        var expr = this.parts[--l].compile(el);
        while (l) {
            var combinator = this.parts[--l];
            expr = combines[combinator](el, this.parts[--l], as_subexpr(expr));
        }

        return expr;
    });

    $.selector.SelectorsGroup.addMethod('compile', function(el) {
        var expr = [], lbl = ++lbl_id;

        for (var i=0; i < this.parts.length; i++) {
            expr[expr.length] = join([
                i == 0 ? el.save(lbl) : el.restore(lbl),
                'l'+lbl+'_'+i+':{',
                this.parts[i].compile(el).replace(BAD, 'break l'+lbl+'_'+i),
                '}'
            ]);
        }

        expr[expr.length] = 'BAD;';
        return join(expr);
    });

    $.selector.SelectorBase.addMethod('matches', function(el){
        this.matches = new Function('el', join([
            'if (!el) return false;',
            this.compile(new State()).replace(BAD, 'return false').replace(GOOD, 'return true')
        ]));
        return this.matches(el);
    });

})(jQuery);

;


/* src/jquery.selector.affectedby.js */

(function($) {

    // TODO:
    // Make attributes & IDs work

    var DIRECT = /DIRECT/g;
    var CONTEXT = /CONTEXT/g;
    var EITHER = /DIRECT|CONTEXT/g;

    $.selector.SelectorBase.addMethod('affectedBy', function(props) {
        this.affectedBy = new Function('props', ([
            'var direct_classes, context_classes, direct_attrs, context_attrs, t;',
            this.ABC_compile().replace(DIRECT, 'direct').replace(CONTEXT, 'context'),
            'return {classes: {context: context_classes, direct: direct_classes}, attrs: {context: context_attrs, direct: direct_attrs}};'
        ]).join("\n"));

        // DEBUG: Print out the compiled funciton
        // console.log(this.selector, ''+this.affectedBy);

        return this.affectedBy(props);
    });

    $.selector.SimpleSelector.addMethod('ABC_compile', function() {
        var parts = [];

        $.each(this.classes, function(i, cls){
            parts[parts.length] = "if (t = props.classes['"+cls+"']) (DIRECT_classes || (DIRECT_classes = {}))['"+cls+"'] = t;";
        });

        $.each(this.nots, function(i, not){
            parts[parts.length] = not.ABC_compile();
        });

        return parts.join("\n");
    });

    $.selector.Selector.addMethod('ABC_compile', function(arg){
        var parts = [];
        var i = this.parts.length-1;

        parts[parts.length] = this.parts[i].ABC_compile();
        while ((i = i - 2) >= 0) parts[parts.length] = this.parts[i].ABC_compile().replace(EITHER, 'CONTEXT');

        return parts.join("\n");
    });

    $.selector.SelectorsGroup.addMethod('ABC_compile', function(){
        var parts = [];

        $.each(this.parts, function(i,part){
            parts[parts.length] = part.ABC_compile();
        });

        return parts.join("\n");
    });


})(jQuery);
;


/* src/jquery.focusinout.js */

(function($){

    /**
     * Add focusin and focusout support to bind and live for browers other than IE. Designed to be usable in a delegated fashion (like $.live)
     * Copyright (c) 2007 Jörn Zaefferer
     */
    if ($.support.focusinBubbles === undefined)  {
        $.support.focusinBubbles = !!($.browser.msie);
    }

    if (!$.support.focusinBubbles && !$.event.special.focusin) {
        // Emulate focusin and focusout by binding focus and blur in capturing mode
        $.each({focus: 'focusin', blur: 'focusout'}, function(original, fix){
            $.event.special[fix] = {
                setup: function(){
                    if (!this.addEventListener) return false;
                    this.addEventListener(original, $.event.special[fix].handler, true);
                },
                teardown: function(){
                    if (!this.removeEventListener) return false;
                    this.removeEventListener(original, $.event.special[fix].handler, true);
                },
                handler: function(e){
                    arguments[0] = $.event.fix(e);
                    arguments[0].type = fix;
                    return $.event.handle.apply(this, arguments);
                }
            };
        });
    }

    (function(){
        //IE has some trouble with focusout with select and keyboard navigation
        var activeFocus = null;

        $(document)
            .bind('focusin', function(e){
                var target = e.realTarget || e.target;
                if (activeFocus && activeFocus !== target) {
                    e.type = 'focusout';
                    $(activeFocus).trigger(e);
                    e.type = 'focusin';
                    e.target = target;
                }
                activeFocus = target;
            })
            .bind('focusout', function(e){
                activeFocus = null;
            });
    })();

})(jQuery);;


/* src/jquery.entwine.js */

try {
    console.log;
}
catch (e) {
    window.console = undefined;
}

(function($) {

    /* Create a subclass of the jQuery object. This was introduced in jQuery 1.5, but removed again in 1.9 */
    var sub = function() {
        function jQuerySub( selector, context ) {
            return new jQuerySub.fn.init( selector, context );
        }

        jQuery.extend( true, jQuerySub, $ );
        jQuerySub.superclass = $;
        jQuerySub.fn = jQuerySub.prototype = $();
        jQuerySub.fn.constructor = jQuerySub;
        jQuerySub.fn.init = function init( selector, context ) {
            var instance = jQuery.fn.init.call( this, selector, context, rootjQuerySub );
            return instance instanceof jQuerySub ?
                instance :
                jQuerySub( instance );
        };
        jQuerySub.fn.init.prototype = jQuerySub.fn;
        var rootjQuerySub = jQuerySub(document);
        return jQuerySub;
    };

    var namespaces = {};

    $.entwine = function() {
        $.fn.entwine.apply(null, arguments);
    };

    /**
     * A couple of utility functions for accessing the store outside of this closure, and for making things
     * operate in a little more easy-to-test manner
     */
    $.extend($.entwine, {
        /**
         * Get all the namespaces. Useful for introspection? Internal interface of Namespace not guaranteed consistant
         */
        namespaces: namespaces,

        /**
         * Remove all entwine rules
         */
        clear_all_rules: function() {
            // Remove proxy functions
            for (var k in $.fn) { if ($.fn[k].isentwinemethod) delete $.fn[k]; }
            // Remove bound events - TODO: Make this pluggable, so this code can be moved to jquery.entwine.events.js
            $(document).unbind('.entwine');
            $(window).unbind('.entwine');
            // Remove namespaces, and start over again
            for (var k in namespaces) delete namespaces[k];
            for (var k in $.entwine.capture_bindings) delete $.entwine.capture_bindings[k];
        },

        WARN_LEVEL_NONE: 0,
        WARN_LEVEL_IMPORTANT: 1,
        WARN_LEVEL_BESTPRACTISE: 2,

        /**
         * Warning level. Set to a higher level to get warnings dumped to console.
         */
        warningLevel: 0,

        /** Utility to optionally display warning messages depending on level */
        warn: function(message, level) {
            if (level <= $.entwine.warningLevel && console && console.warn) {
                console.warn(message);
                if (console.trace) console.trace();
            }
        },

        warn_exception: function(where, /* optional: */ on, e) {
            if ($.entwine.WARN_LEVEL_IMPORTANT <= $.entwine.warningLevel && console && console.warn) {
                if (arguments.length == 2) { e = on; on = null; }

                if (on) console.warn('Uncaught exception',e,'in',where,'on',on);
                else    console.warn('Uncaught exception',e,'in',where);

                if (e.stack) console.warn("Stack Trace:\n" + e.stack);
            }
        }
    });


    /** Stores a count of definitions, so that we can sort identical selectors by definition order */
    var rulecount = 0;

    var Rule = Base.extend({
        init: function(selector, name) {
            this.selector = selector;
            this.specifity = selector.specifity();
            this.important = 0;
            this.name = name;
            this.rulecount = rulecount++;
        }
    });

    Rule.compare = function(a, b) {
        var as = a.specifity, bs = b.specifity;

        return (a.important - b.important) ||
            (as[0] - bs[0]) ||
            (as[1] - bs[1]) ||
            (as[2] - bs[2]) ||
            (a.rulecount - b.rulecount) ;
    };

    $.entwine.RuleList = function() {
        var list = [];

        list.addRule = function(selector, name){
            var rule = Rule(selector, name);

            list[list.length] = rule;
            list.sort(Rule.compare);

            return rule;
        };

        return list;
    };

    var handlers = [];

    /**
     * A Namespace holds all the information needed for adding entwine methods to a namespace (including the _null_ namespace)
     */
    $.entwine.Namespace = Base.extend({
        init: function(name){
            if (name && !name.match(/^[A-Za-z0-9.]+$/)) $.entwine.warn('Entwine namespace '+name+' is not formatted as period seperated identifiers', $.entwine.WARN_LEVEL_BESTPRACTISE);
            name = name || '__base';

            this.name = name;
            this.store = {};

            namespaces[name] = this;

            if (name == "__base") {
                this.injectee = $.fn;
                this.$ = $;
            }
            else {
                // We're in a namespace, so we build a Class that subclasses the jQuery Object Class to inject namespace functions into
                this.$ = $.sub ? $.sub() : sub();
                // Work around bug in sub() - subclass must share cache with root or data won't get cleared by cleanData
                this.$.cache = $.cache;

                this.injectee = this.$.prototype;

                // We override entwine to inject the name of this namespace when defining blocks inside this namespace
                var entwine_wrapper = this.injectee.entwine = function(spacename) {
                    var args = arguments;

                    if (!spacename || typeof spacename != 'string') { args = $.makeArray(args); args.unshift(name); }
                    else if (spacename.charAt(0) != '.') args[0] = name+'.'+spacename;

                    return $.fn.entwine.apply(this, args);
                };

                this.$.entwine = function() {
                    entwine_wrapper.apply(null, arguments);
                };

                for (var i = 0; i < handlers.length; i++) {
                    var handler = handlers[i], builder;

                    // Inject jQuery object method overrides
                    if (builder = handler.namespaceMethodOverrides) {
                        var overrides = builder(this);
                        for (var k in overrides) this.injectee[k] = overrides[k];
                    }

                    // Inject $.entwine function overrides
                    if (builder = handler.namespaceStaticOverrides) {
                        var overrides = builder(this);
                        for (var k in overrides) this.$.entwine[k] = overrides[k];
                    }
                }
            }
        },

        /**
         * Returns a function that does selector matching against the function list for a function name
         * Used by proxy for all calls, and by ctorProxy to handle _super calls
         * @param {String} name - name of the function as passed in the construction object
         * @param {String} funcprop - the property on the Rule object that gives the actual function to call
         * @param {function} basefunc - the non-entwine function to use as the catch-all function at the bottom of the stack
         */
        one: function(name, funcprop, basefunc) {
            var namespace = this;
            var funcs = this.store[name];

            var one = function(el, args, i){
                if (i === undefined) i = funcs.length;
                while (i--) {
                    if (funcs[i].selector.matches(el)) {
                        var ret, tmp_i = el.i, tmp_f = el.f;
                        el.i = i; el.f = one;
                        try { ret = funcs[i][funcprop].apply(namespace.$(el), args); }
                        finally { el.i = tmp_i; el.f = tmp_f; }
                        return ret;
                    }
                }
                // If we didn't find a entwine-defined function, but there is a non-entwine function to use as a base, try that
                if (basefunc) return basefunc.apply(namespace.$(el), args);
            };

            return one;
        },

        /**
         * A proxy is a function attached to a callable object (either the base jQuery.fn or a subspace object) which handles
         * finding and calling the correct function for each member of the current jQuery context
         * @param {String} name - name of the function as passed in the construction object
         * @param {function} basefunc - the non-entwine function to use as the catch-all function at the bottom of the stack
         */
        build_proxy: function(name, basefunc) {
            var one = this.one(name, 'func', basefunc);

            var prxy = function() {
                var rv, ctx = $(this);

                var i = ctx.length;
                while (i--) rv = one(ctx[i], arguments);
                return rv;
            };

            return prxy;
        },

        bind_proxy: function(selector, name, func) {
            var rulelist = this.store[name] || (this.store[name] = $.entwine.RuleList());

            var rule = rulelist.addRule(selector, name); rule.func = func;

            if (!this.injectee.hasOwnProperty(name) || !this.injectee[name].isentwinemethod) {
                this.injectee[name] = this.build_proxy(name, this.injectee.hasOwnProperty(name) ? this.injectee[name] : null);
                this.injectee[name].isentwinemethod = true;
            }

            if (!this.injectee[name].isentwinemethod) {
                $.entwine.warn('Warning: Entwine function '+name+' clashes with regular jQuery function - entwine function will not be callable directly on jQuery object', $.entwine.WARN_LEVEL_IMPORTANT);
            }
        },

        add: function(selector, data) {
            // For every item in the hash, try ever method handler, until one returns true
            for (var k in data) {
                var v = data[k];

                for (var i = 0; i < handlers.length; i++) {
                    if (handlers[i].bind && handlers[i].bind.call(this, selector, k, v)) break;
                }
            }
        },

        has: function(ctx, name) {
            var rulelist = this.store[name];
            if (!rulelist) return false;

            /* We go forward this time, since low specifity is likely to knock out a bunch of elements quickly */
            for (var i = 0 ; i < rulelist.length; i++) {
                ctx = ctx.not(rulelist[i].selector);
                if (!ctx.length) return true;
            }
            return false;
        }
    });

    /**
     * A handler is some javascript code that adds support for some time of key / value pair passed in the hash to the Namespace add method.
     * The default handlers provided (and included by default) are event, ctor and properties
     */
    $.entwine.Namespace.addHandler = function(handler) {
        for (var i = 0; i < handlers.length && handlers[i].order < handler.order; i++) { /* Pass */ }
        handlers.splice(i, 0, handler);
    };

    $.entwine.Namespace.addHandler({
        order: 50,

        bind: function(selector, k, v){
            if ($.isFunction(v)) {
                this.bind_proxy(selector, k, v);
                return true;
            }
        }
    });

    $.extend($.fn, {
        /**
         * Main entwine function. Used for new definitions, calling into a namespace (or forcing the base namespace) and entering a using block
         *
         */
        entwine: function(spacename) {
            var i = 0;
            /* Don't actually work out selector until we try and define something on it - we might be opening a namespace on an function-traveresed object
               which have non-standard selectors like .parents(.foo).slice(0,1) */
            var selector = null;

            /* By default we operator on the base namespace */
            var namespace = namespaces.__base || $.entwine.Namespace();

            /* If the first argument is a string, then it's the name of a namespace. Look it up */
            if (typeof spacename == 'string') {
                if (spacename.charAt('0') == '.') spacename = spacename.substr(1);
                if (spacename) namespace = namespaces[spacename] || $.entwine.Namespace(spacename);
                i=1;
            }

            /* All remaining arguments should either be using blocks or definition hashs */
            while (i < arguments.length) {
                var res = arguments[i++];

                // If it's a function, call it - either it's a using block or it's a namespaced entwine definition
                if ($.isFunction(res)) {
                    if (res.length != 1) $.entwine.warn('Function block inside entwine definition does not take $ argument properly', $.entwine.WARN_LEVEL_IMPORTANT);
                    res = res.call(namespace.$(this), namespace.$);
                }

                // If we have a entwine definition hash, inject it into namespace
                if (res) {
                    if (selector === null) selector = this.selector ? $.selector(this.selector) : false;

                    if (selector) namespace.add(selector, res);
                    else $.entwine.warn('Entwine block given to entwine call without selector. Make sure you call $(selector).entwine when defining blocks', $.entwine.WARN_LEVEL_IMPORTANT);
                }
            }

            /* Finally, return the jQuery object 'this' refers to, wrapped in the new namespace */
            return namespace.$(this);
        },

        /**
         * Calls the next most specific version of the current entwine method
         */
        _super: function(){
            var rv, i = this.length;
            while (i--) {
                var el = this[0];
                rv = el.f(el, arguments, el.i);
            }
            return rv;
        }
    });

})(jQuery);
;


/* src/domevents/jquery.entwine.domevents.addrem.js */

(function($){

    // Gets all the child elements of a particular elements, stores it in an array
    function getElements(store, original) {
        var node, i = store.length, next = original.firstChild;

        while ((node = next)) {
            if (node.nodeType === 1) store[i++] = node;
            next = node.firstChild || node.nextSibling;
            while (!next && (node = node.parentNode) && node !== original) next = node.nextSibling;
        }
    }

    // This might be faster? Or slower? @todo: benchmark.
    function getElementsAlt(store, node) {
        if (node.getElementsByTagName) {
            var els = node.getElementsByTagName('*'), len = els.length, i = 0, j = store.length;
            for(; i < len; i++, j++) {
                store[j] = els[i];
            }
        }
        else if (node.childNodes) {
            var els = node.childNodes, len = els.length, i = 0;
            for(; i < len; i++) {
                getElements(store, els[i]);
            }
        }
    }

    var dontTrigger = false;

    var patchDomManipCallback = function(original) {
        var patched = function(elem){
            var added = [];

            if (!dontTrigger) {
                if (elem.nodeType == 1) added[added.length] = elem;
                getElements(added, elem);
            }

            var rv = original.apply(this, arguments);

            if (!dontTrigger && added.length) {
                var event = $.Event('EntwineElementsAdded');
                event.targets = added;
                $(document).triggerHandler(event);
            }

            return rv;
        }
        patched.patched = true;

        return patched;
    }

    var version = $.prototype.jquery.split('.');
    var callbackIdx = (version[0] > 1 || version[1] >= 10 ? 1 : 2);

    // Monkey patch $.fn.domManip to catch all regular jQuery add element calls
    var _domManip = $.prototype.domManip;
    $.prototype.domManip = function() {
        if (!arguments[callbackIdx].patched) arguments[callbackIdx] = patchDomManipCallback(arguments[callbackIdx]);
        return _domManip.apply(this, arguments);
    }

    // Monkey patch $.fn.html to catch when jQuery sets innerHTML directly
    var _html = $.prototype.html;
    $.prototype.html = function(value) {
        if (value === undefined) return _html.apply(this, arguments);

        dontTrigger = true;
        var res = _html.apply(this, arguments);
        dontTrigger = false;

        var added = [];

        var i = 0, length = this.length;
        for (; i < length; i++ ) getElements(added, this[i]);

        var event = $.Event('EntwineElementsAdded');
        event.targets = added;
        $(document).triggerHandler(event);

        return res;
    }

    // If this is true, we've changed something to call cleanData so that we can catch the elements, but we don't
    // want to call the underlying original $.cleanData
    var supressActualClean = false;

    // Monkey patch $.cleanData to catch element removal
    var _cleanData = $.cleanData;
    $.cleanData = function( elems ) {
        // By default we can assume all elements passed are legitimately being removeed
        var removed = elems;

        // Except if we're supressing actual clean - we might be being called by jQuery "being careful" about detaching nodes
        // before attaching them. So we need to check to make sure these nodes currently are in a document
        if (supressActualClean) {
            var i = 0, len = elems.length, removed = [], ri = 0;
            for(; i < len; i++) {
                var node = elems[i], current = node;
                while (current = current.parentNode) {
                    if (current.nodeType == 9) { removed[ri++] = node; break; }
                }
            }
        }

        if (removed.length) {
            var event = $.Event('EntwineElementsRemoved');
            event.targets = removed;
            $(document).triggerHandler(event);
        }

        if (!supressActualClean) _cleanData.apply(this, arguments);
    }

    // Monkey patch $.fn.remove to catch when we're just detaching (keepdata == 1) -
    // this doesn't call cleanData but still needs to trigger event
    var _remove = $.prototype.remove;
    $.prototype.remove = function(selector, keepdata) {
        supressActualClean = keepdata;
        var rv = _remove.call(this, selector);
        supressActualClean = false;
        return rv;
    }

    // And on DOM ready, trigger adding once
    $(function(){
        var added = []; getElements(added, document);

        var event = $.Event('EntwineElementsAdded');
        event.targets = added;
        $(document).triggerHandler(event);
    });


})(jQuery);;


/* src/domevents/jquery.entwine.domevents.maybechanged.js */

(function($){

    /** Utility function to monkey-patch a jQuery method */
    var monkey = function( /* method, method, ...., patch */){
        var methods = $.makeArray(arguments);
        var patch = methods.pop();

        $.each(methods, function(i, method){
            var old = $.fn[method];

            $.fn[method] = function() {
                var self = this, args = $.makeArray(arguments);

                var rv = old.apply(self, args);
                patch.apply(self, args);
                return rv;
            }
        });
    }

    /** What to call to run a function 'soon'. Normally setTimeout, but for syncronous mode we override so soon === now */
    var runSoon = window.setTimeout;

    /** The timer handle for the asyncronous matching call */
    var ChangeDetails = Base.extend({

        init: function() {
            this.global = false;
            this.attrs = {};
            this.classes = {};
        },

        /** Fire the change event. Only fires on the document node, so bind to that */
        triggerEvent: function() {
            // If we're not the active changes instance any more, don't trigger
            if (changes != this) return;

            // Cancel any pending timeout (if we're directly called in the mean time)
            if (this.check_id) clearTimeout(this.check_id);

            // Reset the global changes object to be a new instance (do before trigger, in case trigger fires changes itself)
            changes = new ChangeDetails();

            // Fire event
            $(document).triggerHandler("EntwineSubtreeMaybeChanged", [this]);
        },

        changed: function() {
            if (!this.check_id) {
                var self = this;
                this.check_id = runSoon(function(){ self.check_id = null; self.triggerEvent(); }, 10);
            }
        },

        addAll: function() {
            if (this.global) return this; // If we've already flagged as a global change, just skip

            this.global = true;
            this.changed();
            return this;
        },

        addSubtree: function(node) {
            return this.addAll();
        },

        /* For now we don't do this. It's expensive, and jquery.entwine.ctors doesn't use this information anyway */
        addSubtreeFuture: function(node) {
            if (this.global) return this; // If we've already flagged as a global change, just skip

            this.subtree = this.subtree ? this.subtree.add(node) : $(node);
            this.changed();
            return this;
        },

        addAttr: function(attr, node) {
            if (this.global) return this;

            this.attrs[attr] = (attr in this.attrs) ? this.attrs[attr].add(node) : $(node);
            this.changed();
            return this;
        },

        addClass: function(klass, node) {
            if (this.global) return this;

            this.classes[klass] = (klass in this.classes) ? this.classes[klass].add(node) : $(node);
            this.changed();
            return this;
        }
    });

    var changes = new ChangeDetails();

    // Element add events trigger maybechanged events

    $(document).bind('EntwineElementsAdded', function(e){ changes.addSubtree(e.targets); });

    // Element remove events trigger maybechanged events, but we have to wait until after the nodes are actually removed
    // (EntwineElementsRemoved fires _just before_ the elements are removed so the data still exists), especially in syncronous mode

    var removed = null;
    $(document).bind('EntwineElementsRemoved', function(e){ removed = e.targets; });

    monkey('remove', 'html', 'empty', function(){
        var subtree = removed; removed = null;
        if (subtree) changes.addSubtree(subtree);
    });

    // We also need to know when an attribute, class, etc changes. Patch the relevant jQuery methods here

    monkey('removeAttr', function(attr){
        changes.addAttr(attr, this);
    });

    monkey('addClass', 'removeClass', 'toggleClass', function(klass){
        if (typeof klass == 'string') changes.addClass(klass, this);
    });

    monkey('attr', function(a, b){
        if (b !== undefined && typeof a == 'string') changes.addAttr(a, this);
        else if (typeof a != 'string') { for (var k in a) changes.addAttr(k, this); }
    });

    // Add some usefull accessors to $.entwine

    $.extend($.entwine, {
        /**
         * Make onmatch and onunmatch work in synchronous mode - that is, new elements will be detected immediately after
         * the DOM manipulation that made them match. This is only really useful for during testing, since it's pretty slow
         * (otherwise we'd make it the default).
         */
        synchronous_mode: function() {
            if (changes && changes.check_id) clearTimeout(changes.check_id);
            changes = new ChangeDetails();

            runSoon = function(func, delay){ func.call(this); return null; };
        },

        /**
         * Trigger onmatch and onunmatch now - usefull for after DOM manipulation by methods other than through jQuery.
         * Called automatically on document.ready
         */
        triggerMatching: function() {
            changes.addAll();
        }
    });

})(jQuery);;


/* src/jquery.entwine.events.js */

(function($) {

    /** Taken from jQuery 1.5.2 for backwards compatibility */
    if ($.support.changeBubbles == undefined) {
        $.support.changeBubbles = true;

        var el = document.createElement("div");
        eventName = "onchange";

        if (el.attachEvent) {
            var isSupported = (eventName in el);
            if (!isSupported) {
                el.setAttribute(eventName, "return;");
                isSupported = typeof el[eventName] === "function";
            }

            $.support.changeBubbles = isSupported;
        }
    }

    /* Return true if node b is the same as, or is a descendant of, node a */
    if (document.compareDocumentPosition) {
        var is_or_contains = function(a, b) {
            return a && b && (a == b || !!(a.compareDocumentPosition(b) & 16));
        };
    }
    else {
        var is_or_contains = function(a, b) {
            return a && b && (a == b || (a.contains ? a.contains(b) : true));
        };
    }

    /* Add the methods to handle event binding to the Namespace class */
    $.entwine.Namespace.addMethods({
        build_event_proxy: function(name) {
            var one = this.one(name, 'func');

            var prxy = function(e, data) {
                // For events that do not bubble we manually trigger delegation (see delegate_submit below)
                // If this event is a manual trigger, the event we actually want to bubble is attached as a property of the passed event
                e = e.delegatedEvent || e;

                var el = e.target;
                while (el && el.nodeType == 1 && !e.isPropagationStopped()) {
                    var ret = one(el, arguments);
                    if (ret !== undefined) e.result = ret;
                    if (ret === false) { e.preventDefault(); e.stopPropagation(); }

                    el = el.parentNode;
                }
            };

            return prxy;
        },

        build_mouseenterleave_proxy: function(name) {
            var one = this.one(name, 'func');

            var prxy = function(e) {
                var el = e.target;
                var rel = e.relatedTarget;

                while (el && el.nodeType == 1 && !e.isPropagationStopped()) {
                    /* We know el contained target. If it also contains relatedTarget then we didn't mouseenter / leave. What's more, every ancestor will also
                    contan el and rel, and so we can just stop bubbling */
                    if (is_or_contains(el, rel)) break;

                    var ret = one(el, arguments);
                    if (ret !== undefined) e.result = ret;
                    if (ret === false) { e.preventDefault(); e.stopPropagation(); }

                    el = el.parentNode;
                }
            };

            return prxy;
        },

        build_change_proxy: function(name) {
            var one = this.one(name, 'func');

            /*
            This change bubble emulation code is taken mostly from jQuery 1.6 - unfortunately we can't easily reuse any of
            it without duplication, so we'll have to re-migrate any bugfixes
            */

            // Get the value of an item. Isn't supposed to be interpretable, just stable for some value, and different
            // once the value changes
            var getVal = function( elem ) {
                var type = elem.type, val = elem.value;

                if (type === "radio" || type === "checkbox") {
                    val = elem.checked;
                }
                else if (type === "select-multiple") {
                    val = "";
                    if (elem.selectedIndex > -1) {
                        val = jQuery.map(elem.options, function(elem){ return elem.selected; }).join("-");
                    }
                }
                else if (jQuery.nodeName(elem, "select")) {
                    val = elem.selectedIndex;
                }

                return val;
            };

            // Test if a node name is a form input
            var rformElems = /^(?:textarea|input|select)$/i;

            // Check if this event is a change, and bubble the change event if it is
            var testChange = function(e) {
                var elem = e.target, data, val;

                if (!rformElems.test(elem.nodeName) || elem.readOnly) return;

                data = jQuery.data(elem, "_entwine_change_data");
                val = getVal(elem);

                // the current data will be also retrieved by beforeactivate
                if (e.type !== "focusout" || elem.type !== "radio") {
                    jQuery.data(elem, "_entwine_change_data", val);
                }

                if (data === undefined || val === data) return;

                if (data != null || val) {
                    e.type = "change";

                    while (elem && elem.nodeType == 1 && !e.isPropagationStopped()) {
                        var ret = one(elem, arguments);
                        if (ret !== undefined) e.result = ret;
                        if (ret === false) { e.preventDefault(); e.stopPropagation(); }

                        elem = elem.parentNode;
                    }
                }
            };

            // The actual proxy - responds to several events, some of which triger a change check, some
            // of which just store the value for future change checks
            var prxy = function(e) {
                var event = e.type, elem = e.target, type = jQuery.nodeName( elem, "input" ) ? elem.type : "";

                switch (event) {
                    case 'focusout':
                    case 'beforedeactivate':
                        testChange.apply(this, arguments);
                        break;

                    case 'click':
                        if ( type === "radio" || type === "checkbox" || jQuery.nodeName( elem, "select" ) ) {
                            testChange.apply(this, arguments);
                        }
                        break;

                    // Change has to be called before submit
                    // Keydown will be called before keypress, which is used in submit-event delegation
                    case 'keydown':
                        if (
                            (e.keyCode === 13 && !jQuery.nodeName( elem, "textarea" ) ) ||
                            (e.keyCode === 32 && (type === "checkbox" || type === "radio")) ||
                            type === "select-multiple"
                        ) {
                            testChange.apply(this, arguments);
                        }
                        break;

                    // Beforeactivate happens also before the previous element is blurred
                    // with this event you can't trigger a change event, but you can store
                    // information
                    case 'focusin':
                    case 'beforeactivate':
                        jQuery.data( elem, "_entwine_change_data", getVal(elem) );
                        break;
                }
            }

            return prxy;
        },

        bind_event: function(selector, name, func, event) {
            var funcs = this.store[name] || (this.store[name] = $.entwine.RuleList()) ;
            var proxies = funcs.proxies || (funcs.proxies = {});

            var rule = funcs.addRule(selector, name); rule.func = func;

            if (!proxies[name]) {
                switch (name) {
                    case 'onmouseenter':
                        proxies[name] = this.build_mouseenterleave_proxy(name);
                        event = 'mouseover';
                        break;
                    case 'onmouseleave':
                        proxies[name] = this.build_mouseenterleave_proxy(name);
                        event = 'mouseout';
                        break;
                    case 'onchange':
                        if (!$.support.changeBubbles) {
                            proxies[name] = this.build_change_proxy(name);
                            event = 'click keydown focusin focusout beforeactivate beforedeactivate';
                        }
                        break;
                    case 'onsubmit':
                        event = 'delegatedSubmit';
                        break;
                    case 'onfocus':
                    case 'onblur':
                        $.entwine.warn('Event '+event+' not supported - using focusin / focusout instead', $.entwine.WARN_LEVEL_IMPORTANT);
                }

                // If none of the special handlers created a proxy, use the generic proxy
                if (!proxies[name]) proxies[name] = this.build_event_proxy(name);

                $(document).bind(event.replace(/(\s+|$)/g, '.entwine$1'), proxies[name]);
            }
        }
    });

    $.entwine.Namespace.addHandler({
        order: 40,

        bind: function(selector, k, v){
            var match, event;
            if ($.isFunction(v) && (match = k.match(/^on(.*)/))) {
                event = match[1];
                this.bind_event(selector, k, v, event);
                return true;
            }
        }
    });

    // Find all forms and bind onsubmit to trigger on the document too.
    // This is the only event that can't be grabbed via delegation

    var delegate_submit = function(e, data){
        var delegationEvent = $.Event('delegatedSubmit'); delegationEvent.delegatedEvent = e;
        return $(document).trigger(delegationEvent, data);
    };

    $(document).bind('EntwineElementsAdded', function(e){
        var forms = $(e.targets).filter('form');
        if (!forms.length) return;

        forms.bind('submit.entwine_delegate_submit', delegate_submit);
    });

})(jQuery);
;


/* src/jquery.entwine.eventcapture.js */

(function($) {

    $.entwine.Namespace.addMethods({
        bind_capture: function(selector, event, name, capture) {
            var store  = this.captures || (this.captures = {});
            var rulelists = store[event] || (store[event] = {});
            var rulelist = rulelists[name] || (rulelists[name] = $.entwine.RuleList());

            rule = rulelist.addRule(selector, event);
            rule.handler = name;

            this.bind_proxy(selector, name, capture);
        }
    });

    var bindings = $.entwine.capture_bindings = {};

    var event_proxy = function(event) {
        return function(e) {
            var namespace, capturelists, forevent, capturelist, rule, handler, sel;

            for (var k in $.entwine.namespaces) {
                namespace = $.entwine.namespaces[k];
                capturelists = namespace.captures;

                if (capturelists && (forevent = capturelists[event])) {
                    for (var k in forevent) {
                        var capturelist = forevent[k];
                        var triggered = namespace.$([]);

                        // Stepping through each selector from most to least specific
                        var j = capturelist.length;
                        while (j--) {
                            rule = capturelist[j];
                            handler = rule.handler;
                            sel = rule.selector.selector;

                            var matching = namespace.$(sel).not(triggered);
                            matching[handler].apply(matching, arguments);

                            triggered = triggered.add(matching);
                        }
                    }
                }
            }
        }
    };

    var selector_proxy = function(selector, handler, includechildren) {
        var matcher = $.selector(selector);
        return function(e){
            if (matcher.matches(e.target)) return handler.apply(this, arguments);
        }
    };

    var document_proxy = function(selector, handler, includechildren) {
        return function(e){
            if (e.target === document) return handler.apply(this, arguments);
        }
    };

    var window_proxy = function(selector, handler, includechildren) {
        return function(e){
            if (e.target === window) return handler.apply(this, arguments);
        }
    };

    var property_proxy = function(property, handler, includechildren) {
        var matcher;

        return function(e){
            var match = this['get'+property]();

            if (typeof(match) == 'string') {
                var matcher = (matcher && match == matcher.selector) ? matcher : $.selector(match);
                if (matcher.matches(e.target)) return handler.apply(this, arguments);
            }
            else {
                if ($.inArray(e.target, match) !== -1) return handler.apply(this, arguments);
            }
        }
    };

    $.entwine.Namespace.addHandler({
        order: 10,

        bind: function(selector, k, v) {
            var match;
            if ($.isPlainObject(v) && (match = k.match(/^from\s*(.*)/))) {
                var from = match[1];
                var proxyGen;

                if (from.match(/[^\w]/)) proxyGen = selector_proxy;
                else if (from == 'Window' || from == 'window') proxyGen = window_proxy;
                else if (from == 'Document' || from == 'document') proxyGen = document_proxy;
                else proxyGen = property_proxy;

                for (var onevent in v) {
                    var handler = v[onevent];
                    match = onevent.match(/^on(.*)/);
                    var event = match[1];

                    this.bind_capture(selector, event, k + '_' + event, proxyGen(from, handler));

                    if (!bindings[event]) {
                        var namespaced = event.replace(/(\s+|$)/g, '.entwine$1');
                        bindings[event] = event_proxy(event);

                        $(proxyGen == window_proxy ? window : document).bind(namespaced, bindings[event]);
                    }
                }

                return true;
            }
        }
    });

})(jQuery);
;


/* src/jquery.entwine.ctors.js */

(function($) {

    /* Add the methods to handle constructor & destructor binding to the Namespace class */
    $.entwine.Namespace.addMethods({
        bind_condesc: function(selector, name, func) {
            var ctors = this.store.ctors || (this.store.ctors = $.entwine.RuleList()) ;

            var rule;
            for (var i = 0 ; i < ctors.length; i++) {
                if (ctors[i].selector.selector == selector.selector) {
                    rule = ctors[i]; break;
                }
            }
            if (!rule) {
                rule = ctors.addRule(selector, 'ctors');
            }

            rule[name] = func;

            if (!ctors[name+'proxy']) {
                var one = this.one('ctors', name);
                var namespace = this;

                var proxy = function(els, i, func) {
                    var j = els.length;
                    while (j--) {
                        var el = els[j];

                        var tmp_i = el.i, tmp_f = el.f;
                        el.i = i; el.f = one;

                        try      { func.call(namespace.$(el)); }
                        catch(e) { $.entwine.warn_exception(name, el, e); }
                        finally  { el.i = tmp_i; el.f = tmp_f; }
                    }
                };

                ctors[name+'proxy'] = proxy;
            }
        }
    });

    $.entwine.Namespace.addHandler({
        order: 30,

        bind: function(selector, k, v) {
            if ($.isFunction(v) && (k == 'onmatch' || k == 'onunmatch')) {
                // When we add new matchers we need to trigger a full global recalc once, regardless of the DOM changes that triggered the event
                this.matchersDirty = true;

                this.bind_condesc(selector, k, v);
                return true;
            }
        }
    });

    /**
     * Finds all the elements that now match a different rule (or have been removed) and call onmatch on onunmatch as appropriate
     *
     * Because this has to scan the DOM, and is therefore fairly slow, this is normally triggered off a short timeout, so that
     * a series of DOM manipulations will only trigger this once.
     *
     * The downside of this is that things like:
     *   $('#foo').addClass('tabs'); $('#foo').tabFunctionBar();
     * won't work.
     */
    $(document).bind('EntwineSubtreeMaybeChanged', function(e, changes){
        // var start = (new Date).getTime();

        // For every namespace
        for (var k in $.entwine.namespaces) {
            var namespace = $.entwine.namespaces[k];

            // That has constructors or destructors
            var ctors = namespace.store.ctors;
            if (ctors) {

                // Keep a record of elements that have matched some previous more specific rule.
                // Not that we _don't_ actually do that until this is needed. If matched is null, it's not been calculated yet.
                // We also keep track of any elements that have newly been taken or released by a specific rule
                var matched = null, taken = $([]), released = $([]);

                // Updates matched to contain all the previously matched elements as if we'd been keeping track all along
                var calcmatched = function(j){
                    if (matched !== null) return;
                    matched = $([]);

                    var cache, k = ctors.length;
                    while ((--k) > j) {
                        if (cache = ctors[k].cache) matched = matched.add(cache);
                    }
                }

                // Some declared variables used in the loop
                var add, rem, res, rule, sel, ctor, dtor, full;

                // Stepping through each selector from most to least specific
                var j = ctors.length;
                while (j--) {
                    // Build some quick-access variables
                    rule = ctors[j];
                    sel = rule.selector.selector;
                    ctor = rule.onmatch;
                    dtor = rule.onunmatch;

                    /*
                        Rule.cache might be stale or fresh. It'll be stale if
                       - some more specific selector now has some of rule.cache in it
                        - some change has happened that means new elements match this selector now
                        - some change has happened that means elements no longer match this selector

                        The first we can just compare rules.cache with matched, removing anything that's there already.
                    */

                    // Reset the "elements that match this selector and no more specific selector with an onmatch rule" to null.
                    // Staying null means this selector is fresh.
                    res = null;

                    // If this gets changed to true, it's too hard to do a delta update, so do a full update
                    full = false;

                    if (namespace.matchersDirty || changes.global) {
                        // For now, just fall back to old version. We need to do something like changed.Subtree.find('*').andSelf().filter(sel), but that's _way_ slower on modern browsers than the below
                        full = true;
                    }
                    else {
                        // We don't deal with attributes yet, so any attribute change means we need to do a full recalc
                        for (var k in changes.attrs) {	full = true; break; }

                        /*
                         If a class changes, but it isn't listed in our selector, we don't care - the change couldn't affect whether or not any element matches

                         If it is listed on our selector
                            - If it is on the direct match part, it could have added or removed the node it changed on
                            - If it is on the context part, it could have added or removed any node that were previously included or excluded because of a match or failure to match with the context required on that node
                            - NOTE: It might be on _both_
                         */

                        var method = rule.selector.affectedBy(changes);

                        if (method.classes.context) {
                            full = true;
                        }
                        else {
                            for (var k in method.classes.direct) {
                                calcmatched(j);
                                var recheck = changes.classes[k].not(matched);

                                if (res === null) {
                                    res = rule.cache ? rule.cache.not(taken).add(released.filter(sel)) : $([]);
                                }

                                res = res.not(recheck).add(recheck.filter(sel));
                            }
                        }
                    }

                    if (full) {
                        calcmatched(j);
                        res = $(sel).not(matched);
                    }
                    else {
                        if (!res) {
                            // We weren't stale because of any changes to the DOM that affected this selector, but more specific
                            // onmatches might have caused stale-ness

                            // Do any of the previous released elements match this selector?
                            add = released.length && released.filter(sel);

                            if (add && add.length) {
                                // Yes, so we're stale as we need to include them. Filter for any possible taken value at the same time
                                res = rule.cache ? rule.cache.not(taken).add(add) : add;
                            }
                            else {
                                // Do we think we own any of the elements now taken by more specific rules?
                                rem = taken.length && rule.cache && rule.cache.filter(taken);

                                if (rem && rem.length) {
                                    // Yes, so we're stale as we need to exclude them.
                                    res = rule.cache.not(rem);
                                }
                            }
                        }
                    }

                    // Res will be null if we know we are fresh (no full needed, selector not affectedBy changes)
                    if (res === null) {
                        // If we are tracking matched, add ourselves
                        if (matched && rule.cache) matched = matched.add(rule.cache);
                    }
                    else {
                        // If this selector has a list of elements it matched against last time
                        if (rule.cache) {
                            // Find the ones that are extra this time
                            add = res.not(rule.cache);
                            rem = rule.cache.not(res);
                        }
                        else {
                            add = res; rem = null;
                        }

                        if ((add && add.length) || (rem && rem.length)) {
                            if (rem && rem.length) {
                                released = released.add(rem);

                                if (dtor && !rule.onunmatchRunning) {
                                    rule.onunmatchRunning = true;
                                    ctors.onunmatchproxy(rem, j, dtor);
                                    rule.onunmatchRunning = false;
                                }
                            }

                            // Call the constructor on the newly matched ones
                            if (add && add.length) {
                                taken = taken.add(add);
                                released = released.not(add);

                                if (ctor && !rule.onmatchRunning) {
                                    rule.onmatchRunning = true;
                                    ctors.onmatchproxy(add, j, ctor);
                                    rule.onmatchRunning = false;
                                }
                            }
                        }

                        // If we are tracking matched, add ourselves
                        if (matched) matched = matched.add(res);

                        // And remember this list of matching elements again this selector, so next matching we can find the unmatched ones
                        rule.cache = res;
                    }
                }

                namespace.matchersDirty = false;
            }
        }

        // console.log((new Date).getTime() - start);
    });


})(jQuery);
;


/* src/jquery.entwine.addrem.js */

(function($) {

    $.entwine.Namespace.addMethods({
        build_addrem_proxy: function(name) {
            var one = this.one(name, 'func');

            return function() {
                if (this.length === 0){
                    return;
                }
                else if (this.length) {
                    var rv, i = this.length;
                    while (i--) rv = one(this[i], arguments);
                    return rv;
                }
                else {
                    return one(this, arguments);
                }
            };
        },

        bind_addrem_proxy: function(selector, name, func) {
            var rulelist = this.store[name] || (this.store[name] = $.entwine.RuleList());

            var rule = rulelist.addRule(selector, name); rule.func = func;

            if (!this.injectee.hasOwnProperty(name)) {
                this.injectee[name] = this.build_addrem_proxy(name);
                this.injectee[name].isentwinemethod = true;
            }
        }
    });

    $.entwine.Namespace.addHandler({
        order: 30,

        bind: function(selector, k, v) {
            if ($.isFunction(v) && (k == 'onadd' || k == 'onremove')) {
                this.bind_addrem_proxy(selector, k, v);
                return true;
            }
        }
    });

    $(document).bind('EntwineElementsAdded', function(e){
        // For every namespace
        for (var k in $.entwine.namespaces) {
            var namespace = $.entwine.namespaces[k];
            if (namespace.injectee.onadd) namespace.injectee.onadd.call(e.targets);
        }
    });

    $(document).bind('EntwineElementsRemoved', function(e){
        for (var k in $.entwine.namespaces) {
            var namespace = $.entwine.namespaces[k];
            if (namespace.injectee.onremove) namespace.injectee.onremove.call(e.targets);
        }
    });




})(jQuery);
;


/* src/jquery.entwine.properties.js */

(function($) {

    var entwine_prepend = '__entwine!';

    var getEntwineData = function(el, namespace, property) {
        return el.data(entwine_prepend + namespace + '!' + property);
    };

    var setEntwineData = function(el, namespace, property, value) {
        return el.data(entwine_prepend + namespace + '!' + property, value);
    };

    var getEntwineDataAsHash = function(el, namespace) {
        var hash = {};
        var id = jQuery.data(el[0]);

        var matchstr = entwine_prepend + namespace + '!';
        var matchlen = matchstr.length;

        var cache = jQuery.cache[id];
        for (var k in cache) {
            if (k.substr(0,matchlen) == matchstr) hash[k.substr(matchlen)] = cache[k];
        }

        return hash;
    };

    var setEntwineDataFromHash = function(el, namespace, hash) {
        for (var k in hash) setEntwineData(namespace, k, hash[k]);
    };

    var entwineData = function(el, namespace, args) {
        switch (args.length) {
            case 0:
                return getEntwineDataAsHash(el, namespace);
            case 1:
                if (typeof args[0] == 'string') return getEntwineData(el, namespace, args[0]);
                else                            return setEntwineDataFromHash(el, namespace, args[0]);
            default:
                return setEntwineData(el, namespace, args[0], args[1]);
        }
    };

    $.extend($.fn, {
        entwineData: function() {
            return entwineData(this, '__base', arguments);
        }
    });

    $.entwine.Namespace.addHandler({
        order: 60,

        bind: function(selector, k, v) {
            if (k.charAt(0) != k.charAt(0).toUpperCase()) $.entwine.warn('Entwine property '+k+' does not start with a capital letter', $.entwine.WARN_LEVEL_BESTPRACTISE);

            // Create the getters and setters

            var getterName = 'get'+k;
            var setterName = 'set'+k;

            this.bind_proxy(selector, getterName, function() { var r = this.entwineData(k); return r === undefined ? v : r; });
            this.bind_proxy(selector, setterName, function(v){ return this.entwineData(k, v); });

            // Get the get and set proxies we just created

            var getter = this.injectee[getterName];
            var setter = this.injectee[setterName];

            // And bind in the jQuery-style accessor

            this.bind_proxy(selector, k, function(v){ return (arguments.length == 1 ? setter : getter).call(this, v) ; });

            return true;
        },

        namespaceMethodOverrides: function(namespace){
            return {
                entwineData: function() {
                    return entwineData(this, namespace.name, arguments);
                }
            };
        }
    });

})(jQuery);
;


/* src/jquery.entwine.legacy.js */

(function($) {

    // Adds back concrete methods for backwards compatibility
    $.concrete = $.entwine;
    $.fn.concrete = $.fn.entwine;
    $.fn.concreteData = $.fn.entwineData;

    // Use addHandler to hack in the namespace.$.concrete equivilent to the namespace.$.entwine namespace-injection
    $.entwine.Namespace.addHandler({
        order: 100,
        bind: function(selector, k, v) { return false; },

        namespaceMethodOverrides: function(namespace){
            namespace.$.concrete = namespace.$.entwine;
            namespace.injectee.concrete = namespace.injectee.entwine;
            namespace.injectee.concreteData = namespace.injectee.entwineData;
            return {};
        }
    });

})(jQuery);
;


/****** FILE: themes/worksafe/js/lib/jquery.fitvids.js *****/
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('name')){
          var videoName = 'fitvid' + $.fn.fitVids._count;
          $this.attr('name', videoName);
          $.fn.fitVids._count++;
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
  
  // Internal counter for unique video names.
  $.fn.fitVids._count = 0;
  
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

/****** FILE: themes/worksafe/js/lib/jquery.royalslider.min.js *****/
// jQuery RoyalSlider plugin. Copyright Dmitry Semenov http://dimsemenov.com 
// jquery.royalslider v9.5.8
(function(n){function v(b,f){var c,a=this,e=window.navigator,g=e.userAgent.toLowerCase();a.uid=n.rsModules.uid++;a.ns=".rs"+a.uid;var d=document.createElement("div").style,h=["webkit","Moz","ms","O"],k="",l=0,q;for(c=0;c<h.length;c++)q=h[c],!k&&q+"Transform"in d&&(k=q),q=q.toLowerCase(),window.requestAnimationFrame||(window.requestAnimationFrame=window[q+"RequestAnimationFrame"],window.cancelAnimationFrame=window[q+"CancelAnimationFrame"]||window[q+"CancelRequestAnimationFrame"]);window.requestAnimationFrame||
(window.requestAnimationFrame=function(a,b){var c=(new Date).getTime(),d=Math.max(0,16-(c-l)),e=window.setTimeout(function(){a(c+d)},d);l=c+d;return e});window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)});a.isIPAD=g.match(/(ipad)/);a.isIOS=a.isIPAD||g.match(/(iphone|ipod)/);c=function(a){a=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||
[];return{browser:a[1]||"",version:a[2]||"0"}}(g);h={};c.browser&&(h[c.browser]=!0,h.version=c.version);h.chrome&&(h.webkit=!0);a._a=h;a.isAndroid=-1<g.indexOf("android");a.slider=n(b);a.ev=n(a);a._b=n(document);a.st=n.extend({},n.fn.royalSlider.defaults,f);a._c=a.st.transitionSpeed;a._d=0;!a.st.allowCSS3||h.webkit&&!a.st.allowCSS3OnWebkit||(c=k+(k?"T":"t"),a._e=c+"ransform"in d&&c+"ransition"in d,a._e&&(a._f=k+(k?"P":"p")+"erspective"in d));k=k.toLowerCase();a._g="-"+k+"-";a._h="vertical"===a.st.slidesOrientation?
!1:!0;a._i=a._h?"left":"top";a._j=a._h?"width":"height";a._k=-1;a._l="fade"===a.st.transitionType?!1:!0;a._l||(a.st.sliderDrag=!1,a._m=10);a._n="z-index:0; display:none; opacity:0;";a._o=0;a._p=0;a._q=0;n.each(n.rsModules,function(b,c){"uid"!==b&&c.call(a)});a.slides=[];a._r=0;(a.st.slides?n(a.st.slides):a.slider.children().detach()).each(function(){a._s(this,!0)});a.st.randomizeSlides&&a.slides.sort(function(){return.5-Math.random()});a.numSlides=a.slides.length;a._t();a.st.startSlideId?a.st.startSlideId>
a.numSlides-1&&(a.st.startSlideId=a.numSlides-1):a.st.startSlideId=0;a._o=a.staticSlideId=a.currSlideId=a._u=a.st.startSlideId;a.currSlide=a.slides[a.currSlideId];a._v=0;a.pointerMultitouch=!1;a.slider.addClass((a._h?"rsHor":"rsVer")+(a._l?"":" rsFade"));d='<div class="rsOverflow"><div class="rsContainer">';a.slidesSpacing=a.st.slidesSpacing;a._w=(a._h?a.slider.width():a.slider.height())+a.st.slidesSpacing;a._x=Boolean(0<a._y);1>=a.numSlides&&(a._z=!1);a._a1=a._z&&a._l?2===a.numSlides?1:2:0;a._b1=
6>a.numSlides?a.numSlides:6;a._c1=0;a._d1=0;a.slidesJQ=[];for(c=0;c<a.numSlides;c++)a.slidesJQ.push(n('<div style="'+(a._l?"":c!==a.currSlideId?a._n:"z-index:0;")+'" class="rsSlide "></div>'));a._e1=d=n(d+"</div></div>");var m=a.ns,k=function(b,c,d,e,f){a._j1=b+c+m;a._k1=b+d+m;a._l1=b+e+m;f&&(a._m1=b+f+m)};c=e.pointerEnabled;a.pointerEnabled=c||e.msPointerEnabled;a.pointerEnabled?(a.hasTouch=!1,a._n1=.2,a.pointerMultitouch=Boolean(1<e[(c?"m":"msM")+"axTouchPoints"]),c?k("pointer","down","move","up",
"cancel"):k("MSPointer","Down","Move","Up","Cancel")):(a.isIOS?a._j1=a._k1=a._l1=a._m1="":k("mouse","down","move","up"),"ontouchstart"in window||"createTouch"in document?(a.hasTouch=!0,a._j1+=" touchstart"+m,a._k1+=" touchmove"+m,a._l1+=" touchend"+m,a._m1+=" touchcancel"+m,a._n1=.5,a.st.sliderTouch&&(a._f1=!0)):(a.hasTouch=!1,a._n1=.2));a.st.sliderDrag&&(a._f1=!0,h.msie||h.opera?a._g1=a._h1="move":h.mozilla?(a._g1="-moz-grab",a._h1="-moz-grabbing"):h.webkit&&-1!=e.platform.indexOf("Mac")&&(a._g1=
"-webkit-grab",a._h1="-webkit-grabbing"),a._i1());a.slider.html(d);a._o1=a.st.controlsInside?a._e1:a.slider;a._p1=a._e1.children(".rsContainer");a.pointerEnabled&&a._p1.css((c?"":"-ms-")+"touch-action",a._h?"pan-y":"pan-x");a._q1=n('<div class="rsPreloader"></div>');e=a._p1.children(".rsSlide");a._r1=a.slidesJQ[a.currSlideId];a._s1=0;a._e?(a._t1="transition-property",a._u1="transition-duration",a._v1="transition-timing-function",a._w1=a._x1=a._g+"transform",a._f?(h.webkit&&!h.chrome&&a.slider.addClass("rsWebkit3d"),
a._y1="translate3d(",a._z1="px, ",a._a2="px, 0px)"):(a._y1="translate(",a._z1="px, ",a._a2="px)"),a._l?a._p1[a._g+a._t1]=a._g+"transform":(h={},h[a._g+a._t1]="opacity",h[a._g+a._u1]=a.st.transitionSpeed+"ms",h[a._g+a._v1]=a.st.css3easeInOut,e.css(h))):(a._x1="left",a._w1="top");var p;n(window).on("resize"+a.ns,function(){p&&clearTimeout(p);p=setTimeout(function(){a.updateSliderSize()},50)});a.ev.trigger("rsAfterPropsSetup");a.updateSliderSize();a.st.keyboardNavEnabled&&a._b2();a.st.arrowsNavHideOnTouch&&
(a.hasTouch||a.pointerMultitouch)&&(a.st.arrowsNav=!1);a.st.arrowsNav&&(e=a._o1,n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e),a._c2=e.children(".rsArrowLeft").click(function(b){b.preventDefault();a.prev()}),a._d2=e.children(".rsArrowRight").click(function(b){b.preventDefault();a.next()}),a.st.arrowsNavAutoHide&&!a.hasTouch&&(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"),e.one("mousemove.arrowshover",
function(){a._c2.removeClass("rsHidden");a._d2.removeClass("rsHidden")}),e.hover(function(){a._e2||(a._c2.removeClass("rsHidden"),a._d2.removeClass("rsHidden"))},function(){a._e2||(a._c2.addClass("rsHidden"),a._d2.addClass("rsHidden"))})),a.ev.on("rsOnUpdateNav",function(){a._f2()}),a._f2());if(a.hasTouch&&a.st.sliderTouch||!a.hasTouch&&a.st.sliderDrag)a._p1.on(a._j1,function(b){a._g2(b)});else a.dragSuccess=!1;var r=["rsPlayBtnIcon","rsPlayBtn","rsCloseVideoBtn","rsCloseVideoIcn"];a._p1.click(function(b){if(!a.dragSuccess){var c=
n(b.target).attr("class");if(-1!==n.inArray(c,r)&&a.toggleVideo())return!1;if(a.st.navigateByClick&&!a._h2){if(n(b.target).closest(".rsNoDrag",a._r1).length)return!0;a._i2(b)}a.ev.trigger("rsSlideClick",b)}}).on("click.rs","a",function(b){if(a.dragSuccess)return!1;a._h2=!0;setTimeout(function(){a._h2=!1},3)});a.ev.trigger("rsAfterInit")}n.rsModules||(n.rsModules={uid:0});v.prototype={constructor:v,_i2:function(b){b=b[this._h?"pageX":"pageY"]-this._j2;b>=this._q?this.next():0>b&&this.prev()},_t:function(){var b;
b=this.st.numImagesToPreload;if(this._z=this.st.loop)2===this.numSlides?(this._z=!1,this.st.loopRewind=!0):2>this.numSlides&&(this.st.loopRewind=this._z=!1);this._z&&0<b&&(4>=this.numSlides?b=1:this.st.numImagesToPreload>(this.numSlides-1)/2&&(b=Math.floor((this.numSlides-1)/2)));this._y=b},_s:function(b,f){function c(b,c){c?g.images.push(b.attr(c)):g.images.push(b.text());if(h){h=!1;g.caption="src"===c?b.attr("alt"):b.contents();g.image=g.images[0];g.videoURL=b.attr("data-rsVideo");var d=b.attr("data-rsw"),
e=b.attr("data-rsh");"undefined"!==typeof d&&!1!==d&&"undefined"!==typeof e&&!1!==e?(g.iW=parseInt(d,10),g.iH=parseInt(e,10)):a.st.imgWidth&&a.st.imgHeight&&(g.iW=a.st.imgWidth,g.iH=a.st.imgHeight)}}var a=this,e,g={},d,h=!0;b=n(b);a._k2=b;a.ev.trigger("rsBeforeParseNode",[b,g]);if(!g.stopParsing)return b=a._k2,g.id=a._r,g.contentAdded=!1,a._r++,g.images=[],g.isBig=!1,g.hasCover||(b.hasClass("rsImg")?(d=b,e=!0):(d=b.find(".rsImg"),d.length&&(e=!0)),e?(g.bigImage=d.eq(0).attr("data-rsBigImg"),d.each(function(){var a=
n(this);a.is("a")?c(a,"href"):a.is("img")?c(a,"src"):c(a)})):b.is("img")&&(b.addClass("rsImg rsMainSlideImage"),c(b,"src"))),d=b.find(".rsCaption"),d.length&&(g.caption=d.remove()),g.content=b,a.ev.trigger("rsAfterParseNode",[b,g]),f&&a.slides.push(g),0===g.images.length&&(g.isLoaded=!0,g.isRendered=!1,g.isLoading=!1,g.images=null),g},_b2:function(){var b=this,f,c,a=function(a){37===a?b.prev():39===a&&b.next()};b._b.on("keydown"+b.ns,function(e){if(!b.st.keyboardNavEnabled)return!0;if(!(b._l2||(c=
e.keyCode,37!==c&&39!==c||f))){if(document.activeElement&&/(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName))return!0;b.isFullscreen&&e.preventDefault();a(c);f=setInterval(function(){a(c)},700)}}).on("keyup"+b.ns,function(a){f&&(clearInterval(f),f=null)})},goTo:function(b,f){b!==this.currSlideId&&this._m2(b,this.st.transitionSpeed,!0,!f)},destroy:function(b){this.ev.trigger("rsBeforeDestroy");this._b.off("keydown"+this.ns+" keyup"+this.ns+" "+this._k1+" "+this._l1);this._p1.off(this._j1+
" click");this.slider.data("royalSlider",null);n.removeData(this.slider,"royalSlider");n(window).off("resize"+this.ns);this.loadingTimeout&&clearTimeout(this.loadingTimeout);b&&this.slider.remove();this.ev=this.slider=this.slides=null},_n2:function(b,f){function c(c,f,g){c.isAdded?(a(f,c),e(f,c)):(g||(g=d.slidesJQ[f]),c.holder?g=c.holder:(g=d.slidesJQ[f]=n(g),c.holder=g),c.appendOnLoaded=!1,e(f,c,g),a(f,c),d._p2(c,g,b),c.isAdded=!0)}function a(a,c){c.contentAdded||(d.setItemHtml(c,b),b||(c.contentAdded=
!0))}function e(a,b,c){d._l&&(c||(c=d.slidesJQ[a]),c.css(d._i,(a+d._d1+p)*d._w))}function g(a){if(l){if(a>q-1)return g(a-q);if(0>a)return g(q+a)}return a}var d=this,h,k,l=d._z,q=d.numSlides;if(!isNaN(f))return g(f);var m=d.currSlideId,p,r=b?Math.abs(d._o2-d.currSlideId)>=d.numSlides-1?0:1:d._y,t=Math.min(2,r),w=!1,v=!1,u;for(k=m;k<m+1+t;k++)if(u=g(k),(h=d.slides[u])&&(!h.isAdded||!h.positionSet)){w=!0;break}for(k=m-1;k>m-1-t;k--)if(u=g(k),(h=d.slides[u])&&(!h.isAdded||!h.positionSet)){v=!0;break}if(w)for(k=
m;k<m+r+1;k++)u=g(k),p=Math.floor((d._u-(m-k))/d.numSlides)*d.numSlides,(h=d.slides[u])&&c(h,u);if(v)for(k=m-1;k>m-1-r;k--)u=g(k),p=Math.floor((d._u-(m-k))/q)*q,(h=d.slides[u])&&c(h,u);if(!b)for(t=g(m-r),m=g(m+r),r=t>m?0:t,k=0;k<q;k++)t>m&&k>t-1||!(k<r||k>m)||(h=d.slides[k])&&h.holder&&(h.holder.detach(),h.isAdded=!1)},setItemHtml:function(b,f){var c=this,a=function(){if(!b.images)b.isRendered=!0,b.isLoaded=!0,b.isLoading=!1,d(!0);else if(!b.isLoading){var a,f;b.content.hasClass("rsImg")?(a=b.content,
f=!0):a=b.content.find(".rsImg:not(img)");a&&!a.is("img")&&a.each(function(){var a=n(this),c='<img class="rsImg" src="'+(a.is("a")?a.attr("href"):a.text())+'" />';f?b.content=n(c):a.replaceWith(c)});a=f?b.content:b.content.find("img.rsImg");k();a.eq(0).addClass("rsMainSlideImage");b.iW&&b.iH&&(b.isLoaded||c._q2(b),d());b.isLoading=!0;if(b.isBig)n("<img />").on("load.rs error.rs",function(a){n(this).off("load.rs error.rs");e([this],!0)}).attr("src",b.image);else{b.loaded=[];b.numStartedLoad=0;a=function(a){n(this).off("load.rs error.rs");
b.loaded.push(this);b.loaded.length===b.numStartedLoad&&e(b.loaded,!1)};for(var g=0;g<b.images.length;g++){var h=n("<img />");b.numStartedLoad++;h.on("load.rs error.rs",a).attr("src",b.images[g])}}}},e=function(a,c){if(a.length){var d=a[0];if(c!==b.isBig)(d=b.holder.children())&&1<d.length&&l();else if(b.iW&&b.iH)g();else if(b.iW=d.width,b.iH=d.height,b.iW&&b.iH)g();else{var e=new Image;e.onload=function(){e.width?(b.iW=e.width,b.iH=e.height,g()):setTimeout(function(){e.width&&(b.iW=e.width,b.iH=
e.height);g()},1E3)};e.src=d.src}}else g()},g=function(){b.isLoaded=!0;b.isLoading=!1;d();l();h()},d=function(){if(!b.isAppended&&c.ev){var a=c.st.visibleNearby,d=b.id-c._o;f||b.appendOnLoaded||!c.st.fadeinLoadedSlide||0!==d&&(!(a||c._r2||c._l2)||-1!==d&&1!==d)||(a={visibility:"visible",opacity:0},a[c._g+"transition"]="opacity 400ms ease-in-out",b.content.css(a),setTimeout(function(){b.content.css("opacity",1)},16));b.holder.find(".rsPreloader").length?b.holder.append(b.content):b.holder.html(b.content);
b.isAppended=!0;b.isLoaded&&(c._q2(b),h());b.sizeReady||(b.sizeReady=!0,setTimeout(function(){c.ev.trigger("rsMaybeSizeReady",b)},100))}},h=function(){!b.loadedTriggered&&c.ev&&(b.isLoaded=b.loadedTriggered=!0,b.holder.trigger("rsAfterContentSet"),c.ev.trigger("rsAfterContentSet",b))},k=function(){c.st.usePreloader&&b.holder.html(c._q1.clone())},l=function(a){c.st.usePreloader&&(a=b.holder.find(".rsPreloader"),a.length&&a.remove())};b.isLoaded?d():f?!c._l&&b.images&&b.iW&&b.iH?a():(b.holder.isWaiting=
!0,k(),b.holder.slideId=-99):a()},_p2:function(b,f,c){this._p1.append(b.holder);b.appendOnLoaded=!1},_g2:function(b,f){var c=this,a,e="touchstart"===b.type;c._s2=e;c.ev.trigger("rsDragStart");if(n(b.target).closest(".rsNoDrag",c._r1).length)return c.dragSuccess=!1,!0;!f&&c._r2&&(c._t2=!0,c._u2());c.dragSuccess=!1;if(c._l2)e&&(c._v2=!0);else{e&&(c._v2=!1);c._w2();if(e){var g=b.originalEvent.touches;if(g&&0<g.length)a=g[0],1<g.length&&(c._v2=!0);else return}else b.preventDefault(),a=b,c.pointerEnabled&&
(a=a.originalEvent);c._l2=!0;c._b.on(c._k1,function(a){c._x2(a,f)}).on(c._l1,function(a){c._y2(a,f)});c._z2="";c._a3=!1;c._b3=a.pageX;c._c3=a.pageY;c._d3=c._v=(f?c._e3:c._h)?a.pageX:a.pageY;c._f3=0;c._g3=0;c._h3=f?c._i3:c._p;c._j3=(new Date).getTime();if(e)c._e1.on(c._m1,function(a){c._y2(a,f)})}},_k3:function(b,f){if(this._l3){var c=this._m3,a=b.pageX-this._b3,e=b.pageY-this._c3,g=this._h3+a,d=this._h3+e,h=f?this._e3:this._h,g=h?g:d,d=this._z2;this._a3=!0;this._b3=b.pageX;this._c3=b.pageY;"x"===
d&&0!==a?this._f3=0<a?1:-1:"y"===d&&0!==e&&(this._g3=0<e?1:-1);d=h?this._b3:this._c3;a=h?a:e;f?g>this._n3?g=this._h3+a*this._n1:g<this._o3&&(g=this._h3+a*this._n1):this._z||(0>=this.currSlideId&&0<d-this._d3&&(g=this._h3+a*this._n1),this.currSlideId>=this.numSlides-1&&0>d-this._d3&&(g=this._h3+a*this._n1));this._h3=g;200<c-this._j3&&(this._j3=c,this._v=d);f?this._q3(this._h3):this._l&&this._p3(this._h3)}},_x2:function(b,f){var c=this,a,e="touchmove"===b.type;if(!c._s2||e){if(e){if(c._r3)return;var g=
b.originalEvent.touches;if(g){if(1<g.length)return;a=g[0]}else return}else a=b,c.pointerEnabled&&(a=a.originalEvent);c._a3||(c._e&&(f?c._s3:c._p1).css(c._g+c._u1,"0s"),function h(){c._l2&&(c._t3=requestAnimationFrame(h),c._u3&&c._k3(c._u3,f))}());if(c._l3)b.preventDefault(),c._m3=(new Date).getTime(),c._u3=a;else if(g=f?c._e3:c._h,a=Math.abs(a.pageX-c._b3)-Math.abs(a.pageY-c._c3)-(g?-7:7),7<a){if(g)b.preventDefault(),c._z2="x";else if(e){c._v3(b);return}c._l3=!0}else if(-7>a){if(!g)b.preventDefault(),
c._z2="y";else if(e){c._v3(b);return}c._l3=!0}}},_v3:function(b,f){this._r3=!0;this._a3=this._l2=!1;this._y2(b)},_y2:function(b,f){function c(a){return 100>a?100:500<a?500:a}function a(a,b){if(e._l||f)h=(-e._u-e._d1)*e._w,k=Math.abs(e._p-h),e._c=k/b,a&&(e._c+=250),e._c=c(e._c),e._x3(h,!1)}var e=this,g,d,h,k;g=-1<b.type.indexOf("touch");if(!e._s2||g)if(e._s2=!1,e.ev.trigger("rsDragRelease"),e._u3=null,e._l2=!1,e._r3=!1,e._l3=!1,e._m3=0,cancelAnimationFrame(e._t3),e._a3&&(f?e._q3(e._h3):e._l&&e._p3(e._h3)),
e._b.off(e._k1).off(e._l1),g&&e._e1.off(e._m1),e._i1(),!e._a3&&!e._v2&&f&&e._w3){var l=n(b.target).closest(".rsNavItem");l.length&&e.goTo(l.index())}else{d=f?e._e3:e._h;if(!e._a3||"y"===e._z2&&d||"x"===e._z2&&!d)if(!f&&e._t2){e._t2=!1;if(e.st.navigateByClick){e._i2(e.pointerEnabled?b.originalEvent:b);e.dragSuccess=!0;return}e.dragSuccess=!0}else{e._t2=!1;e.dragSuccess=!1;return}else e.dragSuccess=!0;e._t2=!1;e._z2="";var q=e.st.minSlideOffset;g=g?b.originalEvent.changedTouches[0]:e.pointerEnabled?
b.originalEvent:b;var m=d?g.pageX:g.pageY,p=e._d3;g=e._v;var r=e.currSlideId,t=e.numSlides,w=d?e._f3:e._g3,v=e._z;Math.abs(m-p);g=m-g;d=(new Date).getTime()-e._j3;d=Math.abs(g)/d;if(0===w||1>=t)a(!0,d);else{if(!v&&!f)if(0>=r){if(0<w){a(!0,d);return}}else if(r>=t-1&&0>w){a(!0,d);return}if(f){h=e._i3;if(h>e._n3)h=e._n3;else if(h<e._o3)h=e._o3;else{m=d*d/.006;l=-e._i3;p=e._y3-e._z3+e._i3;0<g&&m>l?(l+=e._z3/(15/(m/d*.003)),d=d*l/m,m=l):0>g&&m>p&&(p+=e._z3/(15/(m/d*.003)),d=d*p/m,m=p);l=Math.max(Math.round(d/
.003),50);h+=m*(0>g?-1:1);if(h>e._n3){e._a4(h,l,!0,e._n3,200);return}if(h<e._o3){e._a4(h,l,!0,e._o3,200);return}}e._a4(h,l,!0)}else l=function(a){var b=Math.floor(a/e._w);a-b*e._w>q&&b++;return b},p+q<m?0>w?a(!1,d):(l=l(m-p),e._m2(e.currSlideId-l,c(Math.abs(e._p-(-e._u-e._d1+l)*e._w)/d),!1,!0,!0)):p-q>m?0<w?a(!1,d):(l=l(p-m),e._m2(e.currSlideId+l,c(Math.abs(e._p-(-e._u-e._d1-l)*e._w)/d),!1,!0,!0)):a(!1,d)}}},_p3:function(b){b=this._p=b;this._e?this._p1.css(this._x1,this._y1+(this._h?b+this._z1+0:
0+this._z1+b)+this._a2):this._p1.css(this._h?this._x1:this._w1,b)},updateSliderSize:function(b){var f,c;if(this.slider){if(this.st.autoScaleSlider){var a=this.st.autoScaleSliderWidth,e=this.st.autoScaleSliderHeight;this.st.autoScaleHeight?(f=this.slider.width(),f!=this.width&&(this.slider.css("height",e/a*f),f=this.slider.width()),c=this.slider.height()):(c=this.slider.height(),c!=this.height&&(this.slider.css("width",a/e*c),c=this.slider.height()),f=this.slider.width())}else f=this.slider.width(),
c=this.slider.height();if(b||f!=this.width||c!=this.height){this.width=f;this.height=c;this._b4=f;this._c4=c;this.ev.trigger("rsBeforeSizeSet");this.ev.trigger("rsAfterSizePropSet");this._e1.css({width:this._b4,height:this._c4});this._w=(this._h?this._b4:this._c4)+this.st.slidesSpacing;this._d4=this.st.imageScalePadding;for(f=0;f<this.slides.length;f++)b=this.slides[f],b.positionSet=!1,b&&b.images&&b.isLoaded&&(b.isRendered=!1,this._q2(b));if(this._e4)for(f=0;f<this._e4.length;f++)b=this._e4[f],b.holder.css(this._i,
(b.id+this._d1)*this._w);this._n2();this._l&&(this._e&&this._p1.css(this._g+"transition-duration","0s"),this._p3((-this._u-this._d1)*this._w));this.ev.trigger("rsOnUpdateNav")}this._j2=this._e1.offset();this._j2=this._j2[this._i]}},appendSlide:function(b,f){var c=this._s(b);if(isNaN(f)||f>this.numSlides)f=this.numSlides;this.slides.splice(f,0,c);this.slidesJQ.splice(f,0,n('<div style="'+(this._l?"position:absolute;":this._n)+'" class="rsSlide"></div>'));f<=this.currSlideId&&this.currSlideId++;this.ev.trigger("rsOnAppendSlide",
[c,f]);this._f4(f);f===this.currSlideId&&this.ev.trigger("rsAfterSlideChange")},removeSlide:function(b){var f=this.slides[b];f&&(f.holder&&f.holder.remove(),b<this.currSlideId&&this.currSlideId--,this.slides.splice(b,1),this.slidesJQ.splice(b,1),this.ev.trigger("rsOnRemoveSlide",[b]),this._f4(b),b===this.currSlideId&&this.ev.trigger("rsAfterSlideChange"))},_f4:function(b){var f=this;b=f.numSlides;b=0>=f._u?0:Math.floor(f._u/b);f.numSlides=f.slides.length;0===f.numSlides?(f.currSlideId=f._d1=f._u=
0,f.currSlide=f._g4=null):f._u=b*f.numSlides+f.currSlideId;for(b=0;b<f.numSlides;b++)f.slides[b].id=b;f.currSlide=f.slides[f.currSlideId];f._r1=f.slidesJQ[f.currSlideId];f.currSlideId>=f.numSlides?f.goTo(f.numSlides-1):0>f.currSlideId&&f.goTo(0);f._t();f._l&&f._p1.css(f._g+f._u1,"0ms");f._h4&&clearTimeout(f._h4);f._h4=setTimeout(function(){f._l&&f._p3((-f._u-f._d1)*f._w);f._n2();f._l||f._r1.css({display:"block",opacity:1})},14);f.ev.trigger("rsOnUpdateNav")},_i1:function(){this._f1&&this._l&&(this._g1?
this._e1.css("cursor",this._g1):(this._e1.removeClass("grabbing-cursor"),this._e1.addClass("grab-cursor")))},_w2:function(){this._f1&&this._l&&(this._h1?this._e1.css("cursor",this._h1):(this._e1.removeClass("grab-cursor"),this._e1.addClass("grabbing-cursor")))},next:function(b){this._m2("next",this.st.transitionSpeed,!0,!b)},prev:function(b){this._m2("prev",this.st.transitionSpeed,!0,!b)},_m2:function(b,f,c,a,e){var g=this,d,h,k;g.ev.trigger("rsBeforeMove",[b,a]);k="next"===b?g.currSlideId+1:"prev"===
b?g.currSlideId-1:b=parseInt(b,10);if(!g._z){if(0>k){g._i4("left",!a);return}if(k>=g.numSlides){g._i4("right",!a);return}}g._r2&&(g._u2(!0),c=!1);h=k-g.currSlideId;k=g._o2=g.currSlideId;var l=g.currSlideId+h;a=g._u;var n;g._z?(l=g._n2(!1,l),a+=h):a=l;g._o=l;g._g4=g.slidesJQ[g.currSlideId];g._u=a;g.currSlideId=g._o;g.currSlide=g.slides[g.currSlideId];g._r1=g.slidesJQ[g.currSlideId];var l=g.st.slidesDiff,m=Boolean(0<h);h=Math.abs(h);var p=Math.floor(k/g._y),r=Math.floor((k+(m?l:-l))/g._y),p=(m?Math.max(p,
r):Math.min(p,r))*g._y+(m?g._y-1:0);p>g.numSlides-1?p=g.numSlides-1:0>p&&(p=0);k=m?p-k:k-p;k>g._y&&(k=g._y);if(h>k+l)for(g._d1+=(h-(k+l))*(m?-1:1),f*=1.4,k=0;k<g.numSlides;k++)g.slides[k].positionSet=!1;g._c=f;g._n2(!0);e||(n=!0);d=(-a-g._d1)*g._w;n?setTimeout(function(){g._j4=!1;g._x3(d,b,!1,c);g.ev.trigger("rsOnUpdateNav")},0):(g._x3(d,b,!1,c),g.ev.trigger("rsOnUpdateNav"))},_f2:function(){this.st.arrowsNav&&(1>=this.numSlides?(this._c2.css("display","none"),this._d2.css("display","none")):(this._c2.css("display",
"block"),this._d2.css("display","block"),this._z||this.st.loopRewind||(0===this.currSlideId?this._c2.addClass("rsArrowDisabled"):this._c2.removeClass("rsArrowDisabled"),this.currSlideId===this.numSlides-1?this._d2.addClass("rsArrowDisabled"):this._d2.removeClass("rsArrowDisabled"))))},_x3:function(b,f,c,a,e){function g(){var a;h&&(a=h.data("rsTimeout"))&&(h!==k&&h.css({opacity:0,display:"none",zIndex:0}),clearTimeout(a),h.data("rsTimeout",""));if(a=k.data("rsTimeout"))clearTimeout(a),k.data("rsTimeout",
"")}var d=this,h,k,l={};isNaN(d._c)&&(d._c=400);d._p=d._h3=b;d.ev.trigger("rsBeforeAnimStart");d._e?d._l?(d._c=parseInt(d._c,10),c=d._g+d._v1,l[d._g+d._u1]=d._c+"ms",l[c]=a?n.rsCSS3Easing[d.st.easeInOut]:n.rsCSS3Easing[d.st.easeOut],d._p1.css(l),a||!d.hasTouch?setTimeout(function(){d._p3(b)},5):d._p3(b)):(d._c=d.st.transitionSpeed,h=d._g4,k=d._r1,k.data("rsTimeout")&&k.css("opacity",0),g(),h&&h.data("rsTimeout",setTimeout(function(){l[d._g+d._u1]="0ms";l.zIndex=0;l.display="none";h.data("rsTimeout",
"");h.css(l);setTimeout(function(){h.css("opacity",0)},16)},d._c+60)),l.display="block",l.zIndex=d._m,l.opacity=0,l[d._g+d._u1]="0ms",l[d._g+d._v1]=n.rsCSS3Easing[d.st.easeInOut],k.css(l),k.data("rsTimeout",setTimeout(function(){k.css(d._g+d._u1,d._c+"ms");k.data("rsTimeout",setTimeout(function(){k.css("opacity",1);k.data("rsTimeout","")},20))},20))):d._l?(l[d._h?d._x1:d._w1]=b+"px",d._p1.animate(l,d._c,a?d.st.easeInOut:d.st.easeOut)):(h=d._g4,k=d._r1,k.stop(!0,!0).css({opacity:0,display:"block",
zIndex:d._m}),d._c=d.st.transitionSpeed,k.animate({opacity:1},d._c,d.st.easeInOut),g(),h&&h.data("rsTimeout",setTimeout(function(){h.stop(!0,!0).css({opacity:0,display:"none",zIndex:0})},d._c+60)));d._r2=!0;d.loadingTimeout&&clearTimeout(d.loadingTimeout);d.loadingTimeout=e?setTimeout(function(){d.loadingTimeout=null;e.call()},d._c+60):setTimeout(function(){d.loadingTimeout=null;d._k4(f)},d._c+60)},_u2:function(b){this._r2=!1;clearTimeout(this.loadingTimeout);if(this._l)if(!this._e)this._p1.stop(!0),
this._p=parseInt(this._p1.css(this._h?this._x1:this._w1),10);else{if(!b){b=this._p;var f=this._h3=this._l4();this._p1.css(this._g+this._u1,"0ms");b!==f&&this._p3(f)}}else 20<this._m?this._m=10:this._m++},_l4:function(){var b=window.getComputedStyle(this._p1.get(0),null).getPropertyValue(this._g+"transform").replace(/^matrix\(/i,"").split(/, |\)$/g),f=0===b[0].indexOf("matrix3d");return parseInt(b[this._h?f?12:4:f?13:5],10)},_m4:function(b,f){return this._e?this._y1+(f?b+this._z1+0:0+this._z1+b)+this._a2:
b},_k4:function(b){this._l||(this._r1.css("z-index",0),this._m=10);this._r2=!1;this.staticSlideId=this.currSlideId;this._n2();this._n4=!1;this.ev.trigger("rsAfterSlideChange")},_i4:function(b,f){var c=this,a=(-c._u-c._d1)*c._w;if(0!==c.numSlides&&!c._r2)if(c.st.loopRewind)c.goTo("left"===b?c.numSlides-1:0,f);else if(c._l){c._c=200;var e=function(){c._r2=!1};c._x3(a+("left"===b?30:-30),"",!1,!0,function(){c._r2=!1;c._x3(a,"",!1,!0,e)})}},_q2:function(b,f){if(!b.isRendered){var c=b.content,a="rsMainSlideImage",
e,g=n.isFunction(this.st.imageAlignCenter)?this.st.imageAlignCenter(b):this.st.imageAlignCenter,d=n.isFunction(this.st.imageScaleMode)?this.st.imageScaleMode(b):this.st.imageScaleMode,h;b.videoURL&&(a="rsVideoContainer","fill"!==d?e=!0:(h=c,h.hasClass(a)||(h=h.find("."+a)),h.css({width:"100%",height:"100%"}),a="rsMainSlideImage"));c.hasClass(a)||(c=c.find("."+a));if(c){var k=b.iW,l=b.iH;b.isRendered=!0;if("none"!==d||g){a="fill"!==d?this._d4:0;h=this._b4-2*a;var q=this._c4-2*a,m,p,r={};"fit-if-smaller"===
d&&(k>h||l>q)&&(d="fit");if("fill"===d||"fit"===d)m=h/k,p=q/l,m="fill"==d?m>p?m:p:"fit"==d?m<p?m:p:1,k=Math.ceil(k*m,10),l=Math.ceil(l*m,10);"none"!==d&&(r.width=k,r.height=l,e&&c.find(".rsImg").css({width:"100%",height:"100%"}));g&&(r.marginLeft=Math.floor((h-k)/2)+a,r.marginTop=Math.floor((q-l)/2)+a);c.css(r)}}}}};n.rsProto=v.prototype;n.fn.royalSlider=function(b){var f=arguments;return this.each(function(){var c=n(this);if("object"!==typeof b&&b){if((c=c.data("royalSlider"))&&c[b])return c[b].apply(c,
Array.prototype.slice.call(f,1))}else c.data("royalSlider")||c.data("royalSlider",new v(c,b))})};n.fn.royalSlider.defaults={slidesSpacing:8,startSlideId:0,loop:!1,loopRewind:!1,numImagesToPreload:4,fadeinLoadedSlide:!0,slidesOrientation:"horizontal",transitionType:"move",transitionSpeed:600,controlNavigation:"bullets",controlsInside:!0,arrowsNav:!0,arrowsNavAutoHide:!0,navigateByClick:!0,randomizeSlides:!1,sliderDrag:!0,sliderTouch:!0,keyboardNavEnabled:!1,fadeInAfterLoaded:!0,allowCSS3:!0,allowCSS3OnWebkit:!0,
addActiveClass:!1,autoHeight:!1,easeOut:"easeOutSine",easeInOut:"easeInOutSine",minSlideOffset:10,imageScaleMode:"fit-if-smaller",imageAlignCenter:!0,imageScalePadding:4,usePreloader:!0,autoScaleSlider:!1,autoScaleSliderWidth:800,autoScaleSliderHeight:400,autoScaleHeight:!0,arrowsNavHideOnTouch:!1,globalCaption:!1,slidesDiff:2};n.rsCSS3Easing={easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)"};n.extend(jQuery.easing,{easeInOutSine:function(b,
f,c,a,e){return-a/2*(Math.cos(Math.PI*f/e)-1)+c},easeOutSine:function(b,f,c,a,e){return a*Math.sin(f/e*(Math.PI/2))+c},easeOutCubic:function(b,f,c,a,e){return a*((f=f/e-1)*f*f+1)+c}})})(jQuery,window);
// jquery.rs.bullets v1.0.1
(function(c){c.extend(c.rsProto,{_i5:function(){var a=this;"bullets"===a.st.controlNavigation&&(a.ev.one("rsAfterPropsSetup",function(){a._j5=!0;a.slider.addClass("rsWithBullets");for(var b='<div class="rsNav rsBullets">',e=0;e<a.numSlides;e++)b+='<div class="rsNavItem rsBullet"><span></span></div>';a._k5=b=c(b+"</div>");a._l5=b.appendTo(a.slider).children();a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(c(this).index())})}),a.ev.on("rsOnAppendSlide",function(b,c,d){d>=a.numSlides?a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>'):
a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(b,c){var d=a._l5.eq(c);d&&d.length&&(d.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var b=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");b=a._l5.eq(b);b.addClass("rsNavSelected");a._n5=b}))}});c.rsModules.bullets=c.rsProto._i5})(jQuery);
// jquery.rs.thumbnails v1.0.8
(function(f){f.extend(f.rsProto,{_h6:function(){var a=this;"thumbnails"===a.st.controlNavigation&&(a._i6={drag:!0,touch:!0,orientation:"horizontal",navigation:!0,arrows:!0,arrowLeft:null,arrowRight:null,spacing:4,arrowsAutoHide:!1,appendSpan:!1,transitionSpeed:600,autoCenter:!0,fitInViewport:!0,firstMargin:!0,paddingTop:0,paddingBottom:0},a.st.thumbs=f.extend({},a._i6,a.st.thumbs),a._j6=!0,!1===a.st.thumbs.firstMargin?a.st.thumbs.firstMargin=0:!0===a.st.thumbs.firstMargin&&(a.st.thumbs.firstMargin=
a.st.thumbs.spacing),a.ev.on("rsBeforeParseNode",function(a,b,c){b=f(b);c.thumbnail=b.find(".rsTmb").remove();c.thumbnail.length?c.thumbnail=f(document.createElement("div")).append(c.thumbnail).html():(c.thumbnail=b.attr("data-rsTmb"),c.thumbnail||(c.thumbnail=b.find(".rsImg").attr("data-rsTmb")),c.thumbnail=c.thumbnail?'<img src="'+c.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._k6()}),a._n5=null,a.ev.on("rsOnUpdateNav",function(){var e=f(a._l5[a.currSlideId]);e!==a._n5&&(a._n5&&
(a._n5.removeClass("rsNavSelected"),a._n5=null),a._l6&&a._m6(a.currSlideId),a._n5=e.addClass("rsNavSelected"))}),a.ev.on("rsOnAppendSlide",function(e,b,c){e="<div"+a._n6+' class="rsNavItem rsThumb">'+a._o6+b.thumbnail+"</div>";a._e&&a._s3.css(a._g+"transition-duration","0ms");c>=a.numSlides?a._s3.append(e):a._l5.eq(c).before(e);a._l5=a._s3.children();a.updateThumbsSize(!0)}),a.ev.on("rsOnRemoveSlide",function(e,b){var c=a._l5.eq(b);c&&(a._e&&a._s3.css(a._g+"transition-duration","0ms"),c.remove(),
a._l5=a._s3.children(),a.updateThumbsSize(!0))}))},_k6:function(){var a=this,e="rsThumbs",b=a.st.thumbs,c="",g,d,h=b.spacing;a._j5=!0;a._e3="vertical"===b.orientation?!1:!0;a._n6=g=h?' style="margin-'+(a._e3?"right":"bottom")+":"+h+'px;"':"";a._i3=0;a._p6=!1;a._m5=!1;a._l6=!1;a._q6=b.arrows&&b.navigation;d=a._e3?"Hor":"Ver";a.slider.addClass("rsWithThumbs rsWithThumbs"+d);c+='<div class="rsNav rsThumbs rsThumbs'+d+'"><div class="'+e+'Container">';a._o6=b.appendSpan?'<span class="thumbIco"></span>':
"";for(var k=0;k<a.numSlides;k++)d=a.slides[k],c+="<div"+g+' class="rsNavItem rsThumb">'+d.thumbnail+a._o6+"</div>";c=f(c+"</div></div>");g={};b.paddingTop&&(g[a._e3?"paddingTop":"paddingLeft"]=b.paddingTop);b.paddingBottom&&(g[a._e3?"paddingBottom":"paddingRight"]=b.paddingBottom);c.css(g);a._s3=f(c).find("."+e+"Container");a._q6&&(e+="Arrow",b.arrowLeft?a._r6=b.arrowLeft:(a._r6=f('<div class="'+e+" "+e+'Left"><div class="'+e+'Icn"></div></div>'),c.append(a._r6)),b.arrowRight?a._s6=b.arrowRight:
(a._s6=f('<div class="'+e+" "+e+'Right"><div class="'+e+'Icn"></div></div>'),c.append(a._s6)),a._r6.click(function(){var b=(Math.floor(a._i3/a._t6)+a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b>a._n3?a._n3:b)}),a._s6.click(function(){var b=(Math.floor(a._i3/a._t6)-a._u6)*a._t6+a.st.thumbs.firstMargin;a._a4(b<a._o3?a._o3:b)}),b.arrowsAutoHide&&!a.hasTouch&&(a._r6.css("opacity",0),a._s6.css("opacity",0),c.one("mousemove.rsarrowshover",function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))}),
c.hover(function(){a._l6&&(a._r6.css("opacity",1),a._s6.css("opacity",1))},function(){a._l6&&(a._r6.css("opacity",0),a._s6.css("opacity",0))})));a._k5=c;a._l5=a._s3.children();a.msEnabled&&a.st.thumbs.navigation&&a._s3.css("-ms-touch-action",a._e3?"pan-y":"pan-x");a.slider.append(c);a._w3=!0;a._v6=h;b.navigation&&a._e&&a._s3.css(a._g+"transition-property",a._g+"transform");a._k5.on("click.rs",".rsNavItem",function(b){a._m5||a.goTo(f(this).index())});a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs",
function(){a._w6=a._e3?a._c4:a._b4;a.updateThumbsSize(!0)});a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs",function(b,c){a.updateThumbsSize(!0,c)})},updateThumbsSize:function(a,e){var b=this,c=b._l5.first(),f={},d=b._l5.length;b._t6=(b._e3?c.outerWidth():c.outerHeight())+b._v6;b._y3=d*b._t6-b._v6;f[b._e3?"width":"height"]=b._y3+b._v6;b._z3=b._e3?b._k5.width():void 0!==e?e:b._k5.height();b._w3&&(b.isFullscreen||b.st.thumbs.fitInViewport)&&(b._e3?b._c4=b._w6-b._k5.outerHeight():
b._b4=b._w6-b._k5.outerWidth());b._z3&&(b._o3=-(b._y3-b._z3)-b.st.thumbs.firstMargin,b._n3=b.st.thumbs.firstMargin,b._u6=Math.floor(b._z3/b._t6),b._y3<b._z3?(b.st.thumbs.autoCenter?b._q3((b._z3-b._y3)/2):b._q3(b._n3),b.st.thumbs.arrows&&b._r6&&(b._r6.addClass("rsThumbsArrowDisabled"),b._s6.addClass("rsThumbsArrowDisabled")),b._l6=!1,b._m5=!1,b._k5.off(b._j1)):b.st.thumbs.navigation&&!b._l6&&(b._l6=!0,!b.hasTouch&&b.st.thumbs.drag||b.hasTouch&&b.st.thumbs.touch)&&(b._m5=!0,b._k5.on(b._j1,function(a){b._g2(a,
!0)})),b._s3.css(f),a&&e&&b._m6(b.currSlideId,!0))},setThumbsOrientation:function(a,e){this._w3&&(this.st.thumbs.orientation=a,this._k5.remove(),this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"),this._k6(),this._k5.off(this._j1),e||this.updateSliderSize(!0))},_q3:function(a){this._i3=a;this._e?this._s3.css(this._x1,this._y1+(this._e3?a+this._z1+0:0+this._z1+a)+this._a2):this._s3.css(this._e3?this._x1:this._w1,a)},_a4:function(a,e,b,c,g){var d=this;if(d._l6){e||(e=d.st.thumbs.transitionSpeed);
d._i3=a;d._x6&&clearTimeout(d._x6);d._p6&&(d._e||d._s3.stop(),b=!0);var h={};d._p6=!0;d._e?(h[d._g+"transition-duration"]=e+"ms",h[d._g+"transition-timing-function"]=b?f.rsCSS3Easing[d.st.easeOut]:f.rsCSS3Easing[d.st.easeInOut],d._s3.css(h),d._q3(a)):(h[d._e3?d._x1:d._w1]=a+"px",d._s3.animate(h,e,b?"easeOutCubic":d.st.easeInOut));c&&(d._i3=c);d._y6();d._x6=setTimeout(function(){d._p6=!1;g&&(d._a4(c,g,!0),g=null)},e)}},_y6:function(){this._q6&&(this._i3===this._n3?this._r6.addClass("rsThumbsArrowDisabled"):
this._r6.removeClass("rsThumbsArrowDisabled"),this._i3===this._o3?this._s6.addClass("rsThumbsArrowDisabled"):this._s6.removeClass("rsThumbsArrowDisabled"))},_m6:function(a,e){var b=0,c,f=a*this._t6+2*this._t6-this._v6+this._n3,d=Math.floor(this._i3/this._t6);this._l6&&(this._j6&&(e=!0,this._j6=!1),f+this._i3>this._z3?(a===this.numSlides-1&&(b=1),d=-a+this._u6-2+b,c=d*this._t6+this._z3%this._t6+this._v6-this._n3):0!==a?(a-1)*this._t6<=-this._i3+this._n3&&a-1<=this.numSlides-this._u6&&(c=(-a+1)*this._t6+
this._n3):c=this._n3,c!==this._i3&&(b=void 0===c?this._i3:c,b>this._n3?this._q3(this._n3):b<this._o3?this._q3(this._o3):void 0!==c&&(e?this._q3(c):this._a4(c))),this._y6())}});f.rsModules.thumbnails=f.rsProto._h6})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e){e.extend(e.rsProto,{_f6:function(){var a=this;"tabs"===a.st.controlNavigation&&(a.ev.on("rsBeforeParseNode",function(a,d,b){d=e(d);b.thumbnail=d.find(".rsTmb").remove();b.thumbnail.length?b.thumbnail=e(document.createElement("div")).append(b.thumbnail).html():(b.thumbnail=d.attr("data-rsTmb"),b.thumbnail||(b.thumbnail=d.find(".rsImg").attr("data-rsTmb")),b.thumbnail=b.thumbnail?'<img src="'+b.thumbnail+'"/>':"")}),a.ev.one("rsAfterPropsSetup",function(){a._g6()}),a.ev.on("rsOnAppendSlide",
function(c,d,b){b>=a.numSlides?a._k5.append('<div class="rsNavItem rsTab">'+d.thumbnail+"</div>"):a._l5.eq(b).before('<div class="rsNavItem rsTab">'+item.thumbnail+"</div>");a._l5=a._k5.children()}),a.ev.on("rsOnRemoveSlide",function(c,d){var b=a._l5.eq(d);b&&(b.remove(),a._l5=a._k5.children())}),a.ev.on("rsOnUpdateNav",function(){var c=a.currSlideId;a._n5&&a._n5.removeClass("rsNavSelected");c=a._l5.eq(c);c.addClass("rsNavSelected");a._n5=c}))},_g6:function(){var a=this,c;a._j5=!0;c='<div class="rsNav rsTabs">';
for(var d=0;d<a.numSlides;d++)c+='<div class="rsNavItem rsTab">'+a.slides[d].thumbnail+"</div>";c=e(c+"</div>");a._k5=c;a._l5=c.children(".rsNavItem");a.slider.append(c);a._k5.click(function(b){b=e(b.target).closest(".rsNavItem");b.length&&a.goTo(b.index())})}});e.rsModules.tabs=e.rsProto._f6})(jQuery);
// jquery.rs.fullscreen v1.0.6
(function(c){c.extend(c.rsProto,{_q5:function(){var a=this;a._r5={enabled:!1,keyboardNav:!0,buttonFS:!0,nativeFS:!1,doubleTap:!0};a.st.fullscreen=c.extend({},a._r5,a.st.fullscreen);if(a.st.fullscreen.enabled)a.ev.one("rsBeforeSizeSet",function(){a._s5()})},_s5:function(){var a=this;a._t5=!a.st.keyboardNavEnabled&&a.st.fullscreen.keyboardNav;if(a.st.fullscreen.nativeFS){var b={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",
prefix:""},d=["webkit","moz","o","ms","khtml"];if("undefined"!=typeof document.cancelFullScreen)b.supportsFullScreen=!0;else for(var e=0,f=d.length;e<f;e++)if(b.prefix=d[e],"undefined"!=typeof document[b.prefix+"CancelFullScreen"]){b.supportsFullScreen=!0;break}b.supportsFullScreen?(a.nativeFS=!0,b.fullScreenEventName=b.prefix+"fullscreenchange"+a.ns,b.isFullScreen=function(){switch(this.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;default:return document[this.prefix+
"FullScreen"]}},b.requestFullScreen=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},b.cancelFullScreen=function(a){return""===this.prefix?document.cancelFullScreen():document[this.prefix+"CancelFullScreen"]()},a._u5=b):a._u5=!1}a.st.fullscreen.buttonFS&&(a._v5=c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs",function(){a.isFullscreen?a.exitFullscreen():a.enterFullscreen()}))},enterFullscreen:function(a){var b=
this;if(b._u5)if(a)b._u5.requestFullScreen(c("html")[0]);else{b._b.on(b._u5.fullScreenEventName,function(a){b._u5.isFullScreen()?b.enterFullscreen(!0):b.exitFullscreen(!0)});b._u5.requestFullScreen(c("html")[0]);return}if(!b._w5){b._w5=!0;b._b.on("keyup"+b.ns+"fullscreen",function(a){27===a.keyCode&&b.exitFullscreen()});b._t5&&b._b2();a=c(window);b._x5=a.scrollTop();b._y5=a.scrollLeft();b._z5=c("html").attr("style");b._a6=c("body").attr("style");b._b6=b.slider.attr("style");c("body, html").css({overflow:"hidden",
height:"100%",width:"100%",margin:"0",padding:"0"});b.slider.addClass("rsFullscreen");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!0,a.isMedLoaded=a.isLoaded,a.isMedLoading=a.isLoading,a.medImage=a.image,a.medIW=a.iW,a.medIH=a.iH,a.slideId=-99,a.bigImage!==a.medImage&&(a.sizeType="big"),a.isLoaded=a.isBigLoaded,a.isLoading=!1,a.image=a.bigImage,a.images[0]=a.bigImage,a.iW=a.bigIW,a.iH=a.bigIH,a.isAppended=a.contentAdded=!1,b._c6(a));b.isFullscreen=!0;b._w5=!1;
b.updateSliderSize();b.ev.trigger("rsEnterFullscreen")}},exitFullscreen:function(a){var b=this;if(b._u5){if(!a){b._u5.cancelFullScreen(c("html")[0]);return}b._b.off(b._u5.fullScreenEventName)}if(!b._w5){b._w5=!0;b._b.off("keyup"+b.ns+"fullscreen");b._t5&&b._b.off("keydown"+b.ns);c("html").attr("style",b._z5||"");c("body").attr("style",b._a6||"");var d;for(d=0;d<b.numSlides;d++)a=b.slides[d],a.isRendered=!1,a.bigImage&&(a.isBig=!1,a.slideId=-99,a.isBigLoaded=a.isLoaded,a.isBigLoading=a.isLoading,a.bigImage=
a.image,a.bigIW=a.iW,a.bigIH=a.iH,a.isLoaded=a.isMedLoaded,a.isLoading=!1,a.image=a.medImage,a.images[0]=a.medImage,a.iW=a.medIW,a.iH=a.medIH,a.isAppended=a.contentAdded=!1,b._c6(a,!0),a.bigImage!==a.medImage&&(a.sizeType="med"));b.isFullscreen=!1;a=c(window);a.scrollTop(b._x5);a.scrollLeft(b._y5);b._w5=!1;b.slider.removeClass("rsFullscreen");b.updateSliderSize();setTimeout(function(){b.updateSliderSize()},1);b.ev.trigger("rsExitFullscreen")}},_c6:function(a,b){var d=a.isLoaded||a.isLoading?'<img class="rsImg rsMainSlideImage" src="'+
a.image+'"/>':'<a class="rsImg rsMainSlideImage" href="'+a.image+'"></a>';a.content.hasClass("rsImg")?a.content=c(d):a.content.find(".rsImg").eq(0).replaceWith(d);a.isLoaded||a.isLoading||!a.holder||a.holder.html(a.content)}});c.rsModules.fullscreen=c.rsProto._q5})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b){b.extend(b.rsProto,{_x4:function(){var a=this,d;a._y4={enabled:!1,stopAtAction:!0,pauseOnHover:!0,delay:2E3};!a.st.autoPlay&&a.st.autoplay&&(a.st.autoPlay=a.st.autoplay);a.st.autoPlay=b.extend({},a._y4,a.st.autoPlay);a.st.autoPlay.enabled&&(a.ev.on("rsBeforeParseNode",function(a,c,f){c=b(c);if(d=c.attr("data-rsDelay"))f.customDelay=parseInt(d,10)}),a.ev.one("rsAfterInit",function(){a._z4()}),a.ev.on("rsBeforeDestroy",function(){a.stopAutoPlay();a.slider.off("mouseenter mouseleave");b(window).off("blur"+
a.ns+" focus"+a.ns)}))},_z4:function(){var a=this;a.startAutoPlay();a.ev.on("rsAfterContentSet",function(b,e){a._l2||a._r2||!a._a5||e!==a.currSlide||a._b5()});a.ev.on("rsDragRelease",function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.ev.on("rsAfterSlideChange",function(){a._a5&&a._c5&&(a._c5=!1,a.currSlide.isLoaded&&a._b5())});a.ev.on("rsDragStart",function(){a._a5&&(a.st.autoPlay.stopAtAction?a.stopAutoPlay():(a._c5=!0,a._d5()))});a.ev.on("rsBeforeMove",function(b,e,c){a._a5&&(c&&a.st.autoPlay.stopAtAction?
a.stopAutoPlay():(a._c5=!0,a._d5()))});a._e5=!1;a.ev.on("rsVideoStop",function(){a._a5&&(a._e5=!1,a._b5())});a.ev.on("rsVideoPlay",function(){a._a5&&(a._c5=!1,a._d5(),a._e5=!0)});b(window).on("blur"+a.ns,function(){a._a5&&(a._c5=!0,a._d5())}).on("focus"+a.ns,function(){a._a5&&a._c5&&(a._c5=!1,a._b5())});a.st.autoPlay.pauseOnHover&&(a._f5=!1,a.slider.hover(function(){a._a5&&(a._c5=!1,a._d5(),a._f5=!0)},function(){a._a5&&(a._f5=!1,a._b5())}))},toggleAutoPlay:function(){this._a5?this.stopAutoPlay():
this.startAutoPlay()},startAutoPlay:function(){this._a5=!0;this.currSlide.isLoaded&&this._b5()},stopAutoPlay:function(){this._e5=this._f5=this._c5=this._a5=!1;this._d5()},_b5:function(){var a=this;a._f5||a._e5||(a._g5=!0,a._h5&&clearTimeout(a._h5),a._h5=setTimeout(function(){var b;a._z||a.st.loopRewind||(b=!0,a.st.loopRewind=!0);a.next(!0);b&&(a.st.loopRewind=!1)},a.currSlide.customDelay?a.currSlide.customDelay:a.st.autoPlay.delay))},_d5:function(){this._f5||this._e5||(this._g5=!1,this._h5&&(clearTimeout(this._h5),
this._h5=null))}});b.rsModules.autoplay=b.rsProto._x4})(jQuery);
// jquery.rs.video v1.1.3
(function(f){f.extend(f.rsProto,{_z6:function(){var a=this;a._a7={autoHideArrows:!0,autoHideControlNav:!1,autoHideBlocks:!1,autoHideCaption:!1,disableCSS3inFF:!0,youTubeCode:'<iframe src="https://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',vimeoCode:'<iframe src="https://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'};a.st.video=f.extend({},a._a7,
a.st.video);a.ev.on("rsBeforeSizeSet",function(){a._b7&&setTimeout(function(){var b=a._r1,b=b.hasClass("rsVideoContainer")?b:b.find(".rsVideoContainer");a._c7&&a._c7.css({width:b.width(),height:b.height()})},32)});var d=a._a.mozilla;a.ev.on("rsAfterParseNode",function(b,c,e){b=f(c);if(e.videoURL){a.st.video.disableCSS3inFF&&d&&(a._e=a._f=!1);c=f('<div class="rsVideoContainer"></div>');var g=f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');b.hasClass("rsImg")?
e.content=c.append(b).append(g):e.content.find(".rsImg").wrap(c).after(g)}});a.ev.on("rsAfterSlideChange",function(){a.stopVideo()})},toggleVideo:function(){return this._b7?this.stopVideo():this.playVideo()},playVideo:function(){var a=this;if(!a._b7){var d=a.currSlide;if(!d.videoURL)return!1;a._d7=d;var b=a._e7=d.content,d=d.videoURL,c,e;d.match(/youtu\.be/i)||d.match(/youtube\.com/i)?(e=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,(e=d.match(e))&&11==e[2].length&&
(c=e[2]),void 0!==c&&(a._c7=a.st.video.youTubeCode.replace("%id%",c))):d.match(/vimeo\.com/i)&&(e=/(www\.)?vimeo.com\/(\d+)($|\/)/,(e=d.match(e))&&(c=e[2]),void 0!==c&&(a._c7=a.st.video.vimeoCode.replace("%id%",c)));a.videoObj=f(a._c7);a.ev.trigger("rsOnCreateVideoElement",[d]);a.videoObj.length&&(a._c7=f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'),a._c7.find(".rsPreloader").after(a.videoObj),b=b.hasClass("rsVideoContainer")?
b:b.find(".rsVideoContainer"),a._c7.css({width:b.width(),height:b.height()}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv",function(b){a.stopVideo();b.preventDefault();b.stopPropagation();return!1}),b.append(a._c7),a.isIPAD&&b.addClass("rsIOSVideo"),a._f7(!1),setTimeout(function(){a._c7.addClass("rsVideoActive")},10),a.ev.trigger("rsVideoPlay"),a._b7=!0);return!0}return!1},stopVideo:function(){var a=this;return a._b7?(a.isIPAD&&a.slider.find(".rsCloseVideoBtn").remove(),a._f7(!0),setTimeout(function(){a.ev.trigger("rsOnDestroyVideoElement",
[a.videoObj]);var d=a._c7.find("iframe");if(d.length)try{d.attr("src","")}catch(b){}a._c7.remove();a._c7=null},16),a.ev.trigger("rsVideoStop"),a._b7=!1,!0):!1},_f7:function(a,d){var b=[],c=this.st.video;c.autoHideArrows&&(this._c2&&(b.push(this._c2,this._d2),this._e2=!a),this._v5&&b.push(this._v5));c.autoHideControlNav&&this._k5&&b.push(this._k5);c.autoHideBlocks&&this._d7.animBlocks&&b.push(this._d7.animBlocks);c.autoHideCaption&&this.globalCaption&&b.push(this.globalCaption);this.slider[a?"removeClass":
"addClass"]("rsVideoPlaying");if(b.length)for(c=0;c<b.length;c++)a?b[c].removeClass("rsHidden"):b[c].addClass("rsHidden")}});f.rsModules.video=f.rsProto._z6})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(l){l.extend(l.rsProto,{_p4:function(){function m(){var g=a.currSlide;if(a.currSlide&&a.currSlide.isLoaded&&a._t4!==g){if(0<a._s4.length){for(b=0;b<a._s4.length;b++)clearTimeout(a._s4[b]);a._s4=[]}if(0<a._r4.length){var f;for(b=0;b<a._r4.length;b++)if(f=a._r4[b])a._e?(f.block.css(a._g+a._u1,"0s"),f.block.css(f.css)):f.block.stop(!0).css(f.css),a._t4=null,g.animBlocksDisplayed=!1;a._r4=[]}g.animBlocks&&(g.animBlocksDisplayed=!0,a._t4=g,a._u4(g.animBlocks))}}var a=this,b;a._q4={fadeEffect:!0,
moveEffect:"top",moveOffset:20,speed:400,easing:"easeOutSine",delay:200};a.st.block=l.extend({},a._q4,a.st.block);a._r4=[];a._s4=[];a.ev.on("rsAfterInit",function(){m()});a.ev.on("rsBeforeParseNode",function(a,b,d){b=l(b);d.animBlocks=b.find(".rsABlock").css("display","none");d.animBlocks.length||(b.hasClass("rsABlock")?d.animBlocks=b.css("display","none"):d.animBlocks=!1)});a.ev.on("rsAfterContentSet",function(b,f){f.id===a.slides[a.currSlideId].id&&setTimeout(function(){m()},a.st.fadeinLoadedSlide?
300:0)});a.ev.on("rsAfterSlideChange",function(){m()})},_v4:function(l,a){setTimeout(function(){l.css(a)},6)},_u4:function(m){var a=this,b,g,f,d,h,e,n;a._s4=[];m.each(function(m){b=l(this);g={};f={};d=null;var c=b.attr("data-move-offset"),c=c?parseInt(c,10):a.st.block.moveOffset;if(0<c&&((e=b.data("move-effect"))?(e=e.toLowerCase(),"none"===e?e=!1:"left"!==e&&"top"!==e&&"bottom"!==e&&"right"!==e&&(e=a.st.block.moveEffect,"none"===e&&(e=!1))):e=a.st.block.moveEffect,e&&"none"!==e)){var p;p="right"===
e||"left"===e?!0:!1;var k;n=!1;a._e?(k=0,h=a._x1):(p?isNaN(parseInt(b.css("right"),10))?h="left":(h="right",n=!0):isNaN(parseInt(b.css("bottom"),10))?h="top":(h="bottom",n=!0),h="margin-"+h,n&&(c=-c),a._e?k=parseInt(b.css(h),10):(k=b.data("rs-start-move-prop"),void 0===k&&(k=parseInt(b.css(h),10),isNaN(k)&&(k=0),b.data("rs-start-move-prop",k))));f[h]=a._m4("top"===e||"left"===e?k-c:k+c,p);g[h]=a._m4(k,p)}c=b.attr("data-fade-effect");if(!c)c=a.st.block.fadeEffect;else if("none"===c.toLowerCase()||
"false"===c.toLowerCase())c=!1;c&&(f.opacity=0,g.opacity=1);if(c||e)d={},d.hasFade=Boolean(c),Boolean(e)&&(d.moveProp=h,d.hasMove=!0),d.speed=b.data("speed"),isNaN(d.speed)&&(d.speed=a.st.block.speed),d.easing=b.data("easing"),d.easing||(d.easing=a.st.block.easing),d.css3Easing=l.rsCSS3Easing[d.easing],d.delay=b.data("delay"),isNaN(d.delay)&&(d.delay=a.st.block.delay*m);c={};a._e&&(c[a._g+a._u1]="0ms");c.moveProp=g.moveProp;c.opacity=g.opacity;c.display="none";a._r4.push({block:b,css:c});a._v4(b,
f);a._s4.push(setTimeout(function(b,d,c,e){return function(){b.css("display","block");if(c){var g={};if(a._e){var f="";c.hasMove&&(f+=c.moveProp);c.hasFade&&(c.hasMove&&(f+=", "),f+="opacity");g[a._g+a._t1]=f;g[a._g+a._u1]=c.speed+"ms";g[a._g+a._v1]=c.css3Easing;b.css(g);setTimeout(function(){b.css(d)},24)}else setTimeout(function(){b.animate(d,c.speed,c.easing)},16)}delete a._s4[e]}}(b,g,d,m),6>=d.delay?12:d.delay))})}});l.rsModules.animatedBlocks=l.rsProto._p4})(jQuery);
// jquery.rs.auto-height v1.0.3
(function(b){b.extend(b.rsProto,{_w4:function(){var a=this;if(a.st.autoHeight){var b,c,e,f=!0,d=function(d){e=a.slides[a.currSlideId];(b=e.holder)&&(c=b.height())&&void 0!==c&&c>(a.st.minAutoHeight||30)&&(a._c4=c,a._e||!d?a._e1.css("height",c):a._e1.stop(!0,!0).animate({height:c},a.st.transitionSpeed),a.ev.trigger("rsAutoHeightChange",c),f&&(a._e&&setTimeout(function(){a._e1.css(a._g+"transition","height "+a.st.transitionSpeed+"ms ease-in-out")},16),f=!1))};a.ev.on("rsMaybeSizeReady.rsAutoHeight",
function(a,b){e===b&&d()});a.ev.on("rsAfterContentSet.rsAutoHeight",function(a,b){e===b&&d()});a.slider.addClass("rsAutoHeight");a.ev.one("rsAfterInit",function(){setTimeout(function(){d(!1);setTimeout(function(){a.slider.append('<div style="clear:both; float: none;"></div>')},16)},16)});a.ev.on("rsBeforeAnimStart",function(){d(!0)});a.ev.on("rsBeforeSizeSet",function(){setTimeout(function(){d(!1)},16)})}}});b.rsModules.autoHeight=b.rsProto._w4})(jQuery);
// jquery.rs.global-caption v1.0.1
(function(b){b.extend(b.rsProto,{_d6:function(){var a=this;a.st.globalCaption&&(a.ev.on("rsAfterInit",function(){a.globalCaption=b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside?a._e1:a.slider);a.globalCaption.html(a.currSlide.caption||"")}),a.ev.on("rsBeforeAnimStart",function(){a.globalCaption.html(a.currSlide.caption||"")}))}});b.rsModules.globalCaption=b.rsProto._d6})(jQuery);
// jquery.rs.active-class v1.0.1
(function(c){c.rsProto._o4=function(){var b,a=this;if(a.st.addActiveClass)a.ev.on("rsOnUpdateNav",function(){b&&clearTimeout(b);b=setTimeout(function(){a._g4&&a._g4.removeClass("rsActiveSlide");a._r1&&a._r1.addClass("rsActiveSlide");b=null},50)})};c.rsModules.activeClass=c.rsProto._o4})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(b){b.extend(b.rsProto,{_o5:function(){var a=this,h,d,f;a._p5={enabled:!1,change:!1,prefix:""};a.st.deeplinking=b.extend({},a._p5,a.st.deeplinking);if(a.st.deeplinking.enabled){var g=a.st.deeplinking.change,e=a.st.deeplinking.prefix,c="#"+e,k=function(){var a=window.location.hash;return a&&0<a.indexOf(e)&&(a=parseInt(a.substring(c.length),10),0<=a)?a-1:-1},p=k();-1!==p&&(a.st.startSlideId=p);g&&(b(window).on("hashchange"+a.ns,function(b){h||(b=k(),0>b||(b>a.numSlides-1&&(b=a.numSlides-1),
a.goTo(b)))}),a.ev.on("rsBeforeAnimStart",function(){d&&clearTimeout(d);f&&clearTimeout(f)}),a.ev.on("rsAfterSlideChange",function(){d&&clearTimeout(d);f&&clearTimeout(f);f=setTimeout(function(){h=!0;window.location.replace((""+window.location).split("#")[0]+c+(a.currSlideId+1));d=setTimeout(function(){h=!1;d=null},60)},400)}));a.ev.on("rsBeforeDestroy",function(){d=f=null;g&&b(window).off("hashchange"+a.ns)})}}});b.rsModules.deeplinking=b.rsProto._o5})(jQuery);
(function(b,a,h){function d(a){a=a||location.href;return"#"+a.replace(/^[^#]*#?(.*)$/,"$1")}"$:nomunge";var f=document,g,e=b.event.special,c=f.documentMode,k="onhashchange"in a&&(c===h||7<c);b.fn.hashchange=function(a){return a?this.bind("hashchange",a):this.trigger("hashchange")};b.fn.hashchange.delay=50;e.hashchange=b.extend(e.hashchange,{setup:function(){if(k)return!1;b(g.start)},teardown:function(){if(k)return!1;b(g.stop)}});g=function(){function g(){var f=d(),e=q(l);f!==l?(m(l=f,e),b(a).trigger("hashchange")):
e!==l&&(location.href=location.href.replace(/#.*/,"")+e);c=setTimeout(g,b.fn.hashchange.delay)}var e={},c,l=d(),n=function(a){return a},m=n,q=n;e.start=function(){c||g()};e.stop=function(){c&&clearTimeout(c);c=h};a.attachEvent&&!a.addEventListener&&!k&&function(){var a,c;e.start=function(){a||(c=(c=b.fn.hashchange.src)&&c+d(),a=b('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){c||m(d());g()}).attr("src",c||"javascript:0").insertAfter("body")[0].contentWindow,f.onpropertychange=
function(){try{"title"===event.propertyName&&(a.document.title=f.title)}catch(b){}})};e.stop=n;q=function(){return d(a.location.href)};m=function(c,e){var d=a.document,g=b.fn.hashchange.domain;c!==e&&(d.title=f.title,d.open(),g&&d.write('<script>document.domain="'+g+'"\x3c/script>'),d.close(),a.location.hash=c)}}();return e}()})(jQuery,this);
// jquery.rs.visible-nearby v1.0.2
(function(d){d.rsProto._g7=function(){var a=this;a.st.visibleNearby&&a.st.visibleNearby.enabled&&(a._h7={enabled:!0,centerArea:.6,center:!0,breakpoint:0,breakpointCenterArea:.8,hiddenOverflow:!0,navigateByCenterClick:!1},a.st.visibleNearby=d.extend({},a._h7,a.st.visibleNearby),a.ev.one("rsAfterPropsSetup",function(){a._i7=a._e1.css("overflow","visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();a.st.visibleNearby.hiddenOverflow||a._i7.css("overflow","visible");a._o1=a.st.controlsInside?
a._i7:a.slider}),a.ev.on("rsAfterSizePropSet",function(){var b,c=a.st.visibleNearby;b=c.breakpoint&&a.width<c.breakpoint?c.breakpointCenterArea:c.centerArea;a._h?(a._b4*=b,a._i7.css({height:a._c4,width:a._b4/b}),a._d=a._b4*(1-b)/2/b):(a._c4*=b,a._i7.css({height:a._c4/b,width:a._b4}),a._d=a._c4*(1-b)/2/b);c.navigateByCenterClick||(a._q=a._h?a._b4:a._c4);c.center&&a._e1.css("margin-"+(a._h?"left":"top"),a._d)}))};d.rsModules.visibleNearby=d.rsProto._g7})(jQuery);

/****** FILE: themes/worksafe/js/lib/bootstrap-scrollspy.min.js *****/
/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2020 Twitter, Inc.
 * Licensed under the MIT license
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=95abc4be613869116b7c8f5f31423421)
 * Config saved to config.json and https://gist.github.com/95abc4be613869116b7c8f5f31423421
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var s=t.fn.jquery.split(" ")[0].split(".");if(s[0]<2&&s[1]<9||1==s[0]&&9==s[1]&&s[2]<1||s[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function s(e,i){this.$body=t(document.body),this.$scrollElement=t(t(e).is(document.body)?window:e),this.options=t.extend({},s.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function e(e){return this.each(function(){var i=t(this),o=i.data("bs.scrollspy"),r="object"==typeof e&&e;o||i.data("bs.scrollspy",o=new s(this,r)),"string"==typeof e&&o[e]()})}s.VERSION="3.4.1",s.DEFAULTS={offset:10},s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},s.prototype.refresh=function(){var s=this,e="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var s=t(this),o=s.data("target")||s.attr("href"),r=/^#./.test(o)&&t(o);return r&&r.length&&r.is(":visible")&&[[r[e]().top+i,o]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){s.offsets.push(this[0]),s.targets.push(this[1])})},s.prototype.process=function(){var t,s=this.$scrollElement.scrollTop()+this.options.offset,e=this.getScrollHeight(),i=this.options.offset+e-this.$scrollElement.height(),o=this.offsets,r=this.targets,l=this.activeTarget;if(this.scrollHeight!=e&&this.refresh(),s>=i)return l!=(t=r[r.length-1])&&this.activate(t);if(l&&s<o[0])return this.activeTarget=null,this.clear();for(t=o.length;t--;)l!=r[t]&&s>=o[t]&&(void 0===o[t+1]||s<o[t+1])&&this.activate(r[t])},s.prototype.activate=function(s){this.activeTarget=s,this.clear();var e=this.selector+'[data-target="'+s+'"],'+this.selector+'[href="'+s+'"]',i=t(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},s.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=e,t.fn.scrollspy.Constructor=s,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var s=t(this);e.call(s,s.data())})})}(jQuery);

/****** FILE: themes/worksafe/js/lib/mustache.min.js *****/
(function defineMustache(global,factory){if(typeof exports==="object"&&exports&&typeof exports.nodeName!=="string"){factory(exports)}else if(typeof define==="function"&&define.amd){define(["exports"],factory)}else{global.Mustache={};factory(global.Mustache)}})(this,function mustacheFactory(mustache){var objectToString=Object.prototype.toString;var isArray=Array.isArray||function isArrayPolyfill(object){return objectToString.call(object)==="[object Array]"};function isFunction(object){return typeof object==="function"}function typeStr(obj){return isArray(obj)?"array":typeof obj}function escapeRegExp(string){return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function hasProperty(obj,propName){return obj!=null&&typeof obj==="object"&&propName in obj}var regExpTest=RegExp.prototype.test;function testRegExp(re,string){return regExpTest.call(re,string)}var nonSpaceRe=/\S/;function isWhitespace(string){return!testRegExp(nonSpaceRe,string)}var entityMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function escapeHtml(string){return String(string).replace(/[&<>"'`=\/]/g,function fromEntityMap(s){return entityMap[s]})}var whiteRe=/\s*/;var spaceRe=/\s+/;var equalsRe=/\s*=/;var curlyRe=/\s*\}/;var tagRe=/#|\^|\/|>|\{|&|=|!/;function parseTemplate(template,tags){if(!template)return[];var sections=[];var tokens=[];var spaces=[];var hasTag=false;var nonSpace=false;function stripSpace(){if(hasTag&&!nonSpace){while(spaces.length)delete tokens[spaces.pop()]}else{spaces=[]}hasTag=false;nonSpace=false}var openingTagRe,closingTagRe,closingCurlyRe;function compileTags(tagsToCompile){if(typeof tagsToCompile==="string")tagsToCompile=tagsToCompile.split(spaceRe,2);if(!isArray(tagsToCompile)||tagsToCompile.length!==2)throw new Error("Invalid tags: "+tagsToCompile);openingTagRe=new RegExp(escapeRegExp(tagsToCompile[0])+"\\s*");closingTagRe=new RegExp("\\s*"+escapeRegExp(tagsToCompile[1]));closingCurlyRe=new RegExp("\\s*"+escapeRegExp("}"+tagsToCompile[1]))}compileTags(tags||mustache.tags);var scanner=new Scanner(template);var start,type,value,chr,token,openSection;while(!scanner.eos()){start=scanner.pos;value=scanner.scanUntil(openingTagRe);if(value){for(var i=0,valueLength=value.length;i<valueLength;++i){chr=value.charAt(i);if(isWhitespace(chr)){spaces.push(tokens.length)}else{nonSpace=true}tokens.push(["text",chr,start,start+1]);start+=1;if(chr==="\n")stripSpace()}}if(!scanner.scan(openingTagRe))break;hasTag=true;type=scanner.scan(tagRe)||"name";scanner.scan(whiteRe);if(type==="="){value=scanner.scanUntil(equalsRe);scanner.scan(equalsRe);scanner.scanUntil(closingTagRe)}else if(type==="{"){value=scanner.scanUntil(closingCurlyRe);scanner.scan(curlyRe);scanner.scanUntil(closingTagRe);type="&"}else{value=scanner.scanUntil(closingTagRe)}if(!scanner.scan(closingTagRe))throw new Error("Unclosed tag at "+scanner.pos);token=[type,value,start,scanner.pos];tokens.push(token);if(type==="#"||type==="^"){sections.push(token)}else if(type==="/"){openSection=sections.pop();if(!openSection)throw new Error('Unopened section "'+value+'" at '+start);if(openSection[1]!==value)throw new Error('Unclosed section "'+openSection[1]+'" at '+start)}else if(type==="name"||type==="{"||type==="&"){nonSpace=true}else if(type==="="){compileTags(value)}}openSection=sections.pop();if(openSection)throw new Error('Unclosed section "'+openSection[1]+'" at '+scanner.pos);return nestTokens(squashTokens(tokens))}function squashTokens(tokens){var squashedTokens=[];var token,lastToken;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];if(token){if(token[0]==="text"&&lastToken&&lastToken[0]==="text"){lastToken[1]+=token[1];lastToken[3]=token[3]}else{squashedTokens.push(token);lastToken=token}}}return squashedTokens}function nestTokens(tokens){var nestedTokens=[];var collector=nestedTokens;var sections=[];var token,section;for(var i=0,numTokens=tokens.length;i<numTokens;++i){token=tokens[i];switch(token[0]){case"#":case"^":collector.push(token);sections.push(token);collector=token[4]=[];break;case"/":section=sections.pop();section[5]=token[2];collector=sections.length>0?sections[sections.length-1][4]:nestedTokens;break;default:collector.push(token)}}return nestedTokens}function Scanner(string){this.string=string;this.tail=string;this.pos=0}Scanner.prototype.eos=function eos(){return this.tail===""};Scanner.prototype.scan=function scan(re){var match=this.tail.match(re);if(!match||match.index!==0)return"";var string=match[0];this.tail=this.tail.substring(string.length);this.pos+=string.length;return string};Scanner.prototype.scanUntil=function scanUntil(re){var index=this.tail.search(re),match;switch(index){case-1:match=this.tail;this.tail="";break;case 0:match="";break;default:match=this.tail.substring(0,index);this.tail=this.tail.substring(index)}this.pos+=match.length;return match};function Context(view,parentContext){this.view=view;this.cache={".":this.view};this.parent=parentContext}Context.prototype.push=function push(view){return new Context(view,this)};Context.prototype.lookup=function lookup(name){var cache=this.cache;var value;if(cache.hasOwnProperty(name)){value=cache[name]}else{var context=this,names,index,lookupHit=false;while(context){if(name.indexOf(".")>0){value=context.view;names=name.split(".");index=0;while(value!=null&&index<names.length){if(index===names.length-1)lookupHit=hasProperty(value,names[index]);value=value[names[index++]]}}else{value=context.view[name];lookupHit=hasProperty(context.view,name)}if(lookupHit)break;context=context.parent}cache[name]=value}if(isFunction(value))value=value.call(this.view);return value};function Writer(){this.cache={}}Writer.prototype.clearCache=function clearCache(){this.cache={}};Writer.prototype.parse=function parse(template,tags){var cache=this.cache;var tokens=cache[template];if(tokens==null)tokens=cache[template]=parseTemplate(template,tags);return tokens};Writer.prototype.render=function render(template,view,partials){var tokens=this.parse(template);var context=view instanceof Context?view:new Context(view);return this.renderTokens(tokens,context,partials,template)};Writer.prototype.renderTokens=function renderTokens(tokens,context,partials,originalTemplate){var buffer="";var token,symbol,value;for(var i=0,numTokens=tokens.length;i<numTokens;++i){value=undefined;token=tokens[i];symbol=token[0];if(symbol==="#")value=this.renderSection(token,context,partials,originalTemplate);else if(symbol==="^")value=this.renderInverted(token,context,partials,originalTemplate);else if(symbol===">")value=this.renderPartial(token,context,partials,originalTemplate);else if(symbol==="&")value=this.unescapedValue(token,context);else if(symbol==="name")value=this.escapedValue(token,context);else if(symbol==="text")value=this.rawValue(token);if(value!==undefined)buffer+=value}return buffer};Writer.prototype.renderSection=function renderSection(token,context,partials,originalTemplate){var self=this;var buffer="";var value=context.lookup(token[1]);function subRender(template){return self.render(template,context,partials)}if(!value)return;if(isArray(value)){for(var j=0,valueLength=value.length;j<valueLength;++j){buffer+=this.renderTokens(token[4],context.push(value[j]),partials,originalTemplate)}}else if(typeof value==="object"||typeof value==="string"||typeof value==="number"){buffer+=this.renderTokens(token[4],context.push(value),partials,originalTemplate)}else if(isFunction(value)){if(typeof originalTemplate!=="string")throw new Error("Cannot use higher-order sections without the original template");value=value.call(context.view,originalTemplate.slice(token[3],token[5]),subRender);if(value!=null)buffer+=value}else{buffer+=this.renderTokens(token[4],context,partials,originalTemplate)}return buffer};Writer.prototype.renderInverted=function renderInverted(token,context,partials,originalTemplate){var value=context.lookup(token[1]);if(!value||isArray(value)&&value.length===0)return this.renderTokens(token[4],context,partials,originalTemplate)};Writer.prototype.renderPartial=function renderPartial(token,context,partials){if(!partials)return;var value=isFunction(partials)?partials(token[1]):partials[token[1]];if(value!=null)return this.renderTokens(this.parse(value),context,partials,value)};Writer.prototype.unescapedValue=function unescapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return value};Writer.prototype.escapedValue=function escapedValue(token,context){var value=context.lookup(token[1]);if(value!=null)return mustache.escape(value)};Writer.prototype.rawValue=function rawValue(token){return token[1]};mustache.name="mustache.js";mustache.version="2.3.0";mustache.tags=["{{","}}"];var defaultWriter=new Writer;mustache.clearCache=function clearCache(){return defaultWriter.clearCache()};mustache.parse=function parse(template,tags){return defaultWriter.parse(template,tags)};mustache.render=function render(template,view,partials){if(typeof template!=="string"){throw new TypeError('Invalid template! Template should be a "string" '+'but "'+typeStr(template)+'" was given as the first '+"argument for mustache#render(template, view, partials)")}return defaultWriter.render(template,view,partials)};mustache.to_html=function to_html(template,view,partials,send){var result=mustache.render(template,view,partials);if(isFunction(send)){send(result)}else{return result}};mustache.escape=escapeHtml;mustache.Scanner=Scanner;mustache.Context=Context;mustache.Writer=Writer;return mustache});

/****** FILE: themes/worksafe/js/lib/object-assign-auto.min.js *****/
!function r(e,t,n){function o(u,f){if(!t[u]){if(!e[u]){var c="function"==typeof require&&require;if(!f&&c)return c(u,!0);if(i)return i(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[u]={exports:{}};e[u][0].call(l.exports,function(r){var t=e[u][1][r];return o(t?t:r)},l,l.exports,r,e,t,n)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(r,e,t){"use strict";r("./index").polyfill()},{"./index":2}],2:[function(r,e,t){"use strict";function n(r,e){if(void 0===r||null===r)throw new TypeError("Cannot convert first argument to object");for(var t=Object(r),n=1;n<arguments.length;n++){var o=arguments[n];if(void 0!==o&&null!==o)for(var i=Object.keys(Object(o)),u=0,f=i.length;u<f;u++){var c=i[u],a=Object.getOwnPropertyDescriptor(o,c);void 0!==a&&a.enumerable&&(t[c]=o[c])}}return t}function o(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:n})}e.exports={assign:n,polyfill:o}},{}]},{},[1]);

/****** FILE: vendor/silverware/calendar/client/dist/js/bundle.js *****/
!function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/resources/vendor/silverware/calendar/client/dist/",t(t.s=2)}([function(e,t){e.exports=jQuery},function(e,t,n){(function(t){var n;n=function(){"use strict";function e(e,t,n){return!1!==n?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}function n(e,t,n){var a;return void 0===n&&(n=!1),function(){var i=this,o=arguments;null!==a&&clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(i,o)},t),n&&!a&&e.apply(i,o)}}function a(e,t,n){if(!0===n)return e.classList.add(t);e.classList.remove(t)}function i(e,t,n){var a=window.document.createElement(e);return t=t||"",n=n||"",a.className=t,void 0!==n&&(a.textContent=n),a}function o(e){var t=i("div","numInputWrapper"),n=i("input","numInput "+e),a=i("span","arrowUp"),o=i("span","arrowDown");return n.type="text",n.pattern="\\d*",t.appendChild(n),t.appendChild(a),t.appendChild(o),t}function r(t,r){function l(e){return e.bind(oe)}function f(e){oe.config.noCalendar&&!oe.selectedDates.length&&(oe.setDate((new Date).setHours(oe.config.defaultHour,oe.config.defaultMinute,oe.config.defaultSeconds),!1),m(),ne()),function(e){e.preventDefault();var t="keydown"===e.type,n=e.target;void 0!==oe.amPM&&e.target===oe.amPM&&(oe.amPM.textContent=oe.l10n.amPM["AM"===oe.amPM.textContent?1:0]);var a=Number(n.min),i=Number(n.max),o=Number(n.step),r=parseInt(n.value,10),l=e.delta||(t?38===e.which?1:-1:Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY))||0),c=r+o*l;if(void 0!==n.value&&2===n.value.length){var d=n===oe.hourElement,s=n===oe.minuteElement;c<a?(c=i+c+p(!d)+(p(d)&&p(!oe.amPM)),s&&I(void 0,-1,oe.hourElement)):c>i&&(c=n===oe.hourElement?c-i-p(!oe.amPM):a,s&&I(void 0,1,oe.hourElement)),oe.amPM&&d&&(1===o?c+r===23:Math.abs(c-r)>o)&&(oe.amPM.textContent="PM"===oe.amPM.textContent?"AM":"PM"),n.value=g(c)}}(e),0!==oe.selectedDates.length&&(!oe.minDateHasTime||"input"!==e.type||e.target.value.length>=2?(m(),ne()):setTimeout(function(){m(),ne()},1e3))}function m(){if(void 0!==oe.hourElement&&void 0!==oe.minuteElement){var t,n,a=(parseInt(oe.hourElement.value.slice(-2),10)||0)%24,i=(parseInt(oe.minuteElement.value,10)||0)%60,o=void 0!==oe.secondElement?(parseInt(oe.secondElement.value,10)||0)%60:0;void 0!==oe.amPM&&(t=a,n=oe.amPM.textContent,a=t%12+12*p("PM"===n)),oe.config.minDate&&oe.minDateHasTime&&oe.latestSelectedDateObj&&0===e(oe.latestSelectedDateObj,oe.config.minDate)&&(a=Math.max(a,oe.config.minDate.getHours()))===oe.config.minDate.getHours()&&(i=Math.max(i,oe.config.minDate.getMinutes())),oe.config.maxDate&&oe.maxDateHasTime&&oe.latestSelectedDateObj&&0===e(oe.latestSelectedDateObj,oe.config.maxDate)&&(a=Math.min(a,oe.config.maxDate.getHours()))===oe.config.maxDate.getHours()&&(i=Math.min(i,oe.config.maxDate.getMinutes())),M(a,i,o)}}function v(e){var t=e||oe.latestSelectedDateObj;t&&M(t.getHours(),t.getMinutes(),t.getSeconds())}function M(e,t,n){void 0!==oe.latestSelectedDateObj&&oe.latestSelectedDateObj.setHours(e%24,t,n||0,0),oe.hourElement&&oe.minuteElement&&!oe.isMobile&&(oe.hourElement.value=g(oe.config.time_24hr?e:(12+e)%12+12*p(e%12==0)),oe.minuteElement.value=g(t),void 0!==oe.amPM&&(oe.amPM.textContent=e>=12?"PM":"AM"),void 0!==oe.secondElement&&(oe.secondElement.value=g(n)))}function b(e){var t=parseInt(e.target.value)+(e.delta||0);4!==t.toString().length&&"Enter"!==e.key||(oe.currentYearElement.blur(),/[^\d]/.test(t.toString())||R(t))}function y(e,t,n){return t instanceof Array?t.forEach(function(t){return y(e,t,n)}):e instanceof Array?e.forEach(function(e){return y(e,t,n)}):(e.addEventListener(t,n),void oe._handlers.push({element:e,event:t,handler:n}))}function x(e){return function(t){return 1===t.which&&e(t)}}function E(){Q("onChange")}function k(){oe._animationLoop.forEach(function(e){return e()}),oe._animationLoop=[]}function N(e){if(oe.daysContainer&&oe.daysContainer.childNodes.length>1)switch(e.animationName){case"fpSlideLeft":oe.daysContainer.lastChild&&oe.daysContainer.lastChild.classList.remove("slideLeftNew"),oe.daysContainer.removeChild(oe.daysContainer.firstChild),oe.days=oe.daysContainer.firstChild,k();break;case"fpSlideRight":oe.daysContainer.firstChild&&oe.daysContainer.firstChild.classList.remove("slideRightNew"),oe.daysContainer.removeChild(oe.daysContainer.lastChild),oe.days=oe.daysContainer.firstChild,k()}}function S(e){switch(e.animationName){case"fpSlideLeftNew":case"fpSlideRightNew":oe.navigationCurrentMonth.classList.remove("slideLeftNew"),oe.navigationCurrentMonth.classList.remove("slideRightNew");for(var t=oe.navigationCurrentMonth;t.nextSibling&&/curr/.test(t.nextSibling.className);)oe.monthNav.removeChild(t.nextSibling);for(;t.previousSibling&&/curr/.test(t.previousSibling.className);)oe.monthNav.removeChild(t.previousSibling);oe.oldCurMonth=void 0}}function T(e){var t=void 0!==e?Z(e):oe.latestSelectedDateObj||(oe.config.minDate&&oe.config.minDate>oe.now?oe.config.minDate:oe.config.maxDate&&oe.config.maxDate<oe.now?oe.config.maxDate:oe.now);try{void 0!==t&&(oe.currentYear=t.getFullYear(),oe.currentMonth=t.getMonth())}catch(e){console.error(e.stack),console.warn("Invalid date supplied: "+t)}oe.redraw()}function _(e){~e.target.className.indexOf("arrow")&&I(e,e.target.classList.contains("arrowUp")?1:-1)}function I(e,t,n){var a=e&&e.target,i=n||a&&a.parentNode&&a.parentNode.firstChild,o=X("increment");o.delta=t,i&&i.dispatchEvent(o)}function Y(t,n,o,r){var l=W(n,!0),c=i("span","flatpickr-day "+t,n.getDate().toString());return c.dateObj=n,c.$i=r,c.setAttribute("aria-label",oe.formatDate(n,oe.config.ariaDateFormat)),0===e(n,oe.now)&&(oe.todayDateElem=c,c.classList.add("today")),l?(c.tabIndex=-1,ee(n)&&(c.classList.add("selected"),oe.selectedDateElem=c,"range"===oe.config.mode&&(a(c,"startRange",oe.selectedDates[0]&&0===e(n,oe.selectedDates[0])),a(c,"endRange",oe.selectedDates[1]&&0===e(n,oe.selectedDates[1]))))):(c.classList.add("disabled"),oe.selectedDates[0]&&oe.minRangeDate&&n>oe.minRangeDate&&n<oe.selectedDates[0]?oe.minRangeDate=n:oe.selectedDates[0]&&oe.maxRangeDate&&n<oe.maxRangeDate&&n>oe.selectedDates[0]&&(oe.maxRangeDate=n)),"range"===oe.config.mode&&(function(t){return!("range"!==oe.config.mode||oe.selectedDates.length<2)&&e(t,oe.selectedDates[0])>=0&&e(t,oe.selectedDates[1])<=0}(n)&&!ee(n)&&c.classList.add("inRange"),1===oe.selectedDates.length&&void 0!==oe.minRangeDate&&void 0!==oe.maxRangeDate&&(n<oe.minRangeDate||n>oe.maxRangeDate)&&c.classList.add("notAllowed")),oe.weekNumbers&&"prevMonthDay"!==t&&o%7==1&&oe.weekNumbers.insertAdjacentHTML("beforeend","<span class='disabled flatpickr-day'>"+oe.config.getWeek(n)+"</span>"),Q("onDayCreate",c),c}function O(e,t){var n=e+t||0,a=void 0!==e?oe.days.childNodes[n]:oe.selectedDateElem||oe.todayDateElem||oe.days.childNodes[0],i=function(){(a=a||oe.days.childNodes[n]).focus(),"range"===oe.config.mode&&J(a)};if(void 0===a&&0!==t)return t>0?(oe.changeMonth(1,!0,void 0,!0),n%=42):t<0&&(oe.changeMonth(-1,!0,void 0,!0),n+=42),F(i);i()}function F(e){!0===oe.config.animate?oe._animationLoop.push(e):e()}function A(e){if(void 0!==oe.daysContainer){var t=(new Date(oe.currentYear,oe.currentMonth,1).getDay()-oe.l10n.firstDayOfWeek+7)%7,n="range"===oe.config.mode,a=oe.utils.getDaysInMonth((oe.currentMonth-1+12)%12),o=oe.utils.getDaysInMonth(),r=window.document.createDocumentFragment(),l=a+1-t,c=0;for(oe.weekNumbers&&oe.weekNumbers.firstChild&&(oe.weekNumbers.textContent=""),n&&(oe.minRangeDate=new Date(oe.currentYear,oe.currentMonth-1,l),oe.maxRangeDate=new Date(oe.currentYear,oe.currentMonth+1,(42-t)%o));l<=a;l++,c++)r.appendChild(Y("prevMonthDay",new Date(oe.currentYear,oe.currentMonth-1,l),l,c));for(l=1;l<=o;l++,c++)r.appendChild(Y("",new Date(oe.currentYear,oe.currentMonth,l),l,c));for(var d=o+1;d<=42-t;d++,c++)r.appendChild(Y("nextMonthDay",new Date(oe.currentYear,oe.currentMonth+1,d%o),d,c));n&&1===oe.selectedDates.length&&r.childNodes[0]?(oe._hidePrevMonthArrow=oe._hidePrevMonthArrow||!!oe.minRangeDate&&oe.minRangeDate>r.childNodes[0].dateObj,oe._hideNextMonthArrow=oe._hideNextMonthArrow||!!oe.maxRangeDate&&oe.maxRangeDate<new Date(oe.currentYear,oe.currentMonth+1,1)):te();var s=i("div","dayContainer");if(s.appendChild(r),oe.config.animate&&void 0!==e)for(;oe.daysContainer.childNodes.length>1;)oe.daysContainer.removeChild(oe.daysContainer.firstChild);else!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(oe.daysContainer);e&&e>=0?oe.daysContainer.appendChild(s):oe.daysContainer.insertBefore(s,oe.daysContainer.firstChild),oe.days=oe.daysContainer.childNodes[0]}}function P(){oe.weekdayContainer||(oe.weekdayContainer=i("div","flatpickr-weekdays"));var e=oe.l10n.firstDayOfWeek,t=oe.l10n.weekdays.shorthand.slice();return e>0&&e<t.length&&(t=t.splice(e,t.length).concat(t.splice(0,e))),oe.weekdayContainer.innerHTML="\n    <span class=flatpickr-weekday>\n      "+t.join("</span><span class=flatpickr-weekday>")+"\n    </span>\n    ",oe.weekdayContainer}function L(e,t,n,a){void 0===t&&(t=!0),void 0===n&&(n=oe.config.animate),void 0===a&&(a=!1);var i=t?e:e-oe.currentMonth;if(!(i<0&&oe._hidePrevMonthArrow||i>0&&oe._hideNextMonthArrow)){if(oe.currentMonth+=i,(oe.currentMonth<0||oe.currentMonth>11)&&(oe.currentYear+=oe.currentMonth>11?1:-1,oe.currentMonth=(oe.currentMonth+12)%12,Q("onYearChange")),A(n?i:void 0),!n)return Q("onMonthChange"),te();var o=oe.navigationCurrentMonth;if(i<0)for(;o.nextSibling&&/curr/.test(o.nextSibling.className);)oe.monthNav.removeChild(o.nextSibling);else if(i>0)for(;o.previousSibling&&/curr/.test(o.previousSibling.className);)oe.monthNav.removeChild(o.previousSibling);oe.oldCurMonth=oe.navigationCurrentMonth,oe.navigationCurrentMonth=oe.monthNav.insertBefore(oe.oldCurMonth.cloneNode(!0),i>0?oe.oldCurMonth.nextSibling:oe.oldCurMonth);var r=oe.daysContainer;if(r.firstChild&&r.lastChild&&(i>0?(r.firstChild.classList.add("slideLeft"),r.lastChild.classList.add("slideLeftNew"),oe.oldCurMonth.classList.add("slideLeft"),oe.navigationCurrentMonth.classList.add("slideLeftNew")):i<0&&(r.firstChild.classList.add("slideRightNew"),r.lastChild.classList.add("slideRight"),oe.oldCurMonth.classList.add("slideRight"),oe.navigationCurrentMonth.classList.add("slideRightNew"))),oe.currentMonthElement=oe.navigationCurrentMonth.firstChild,oe.currentYearElement=oe.navigationCurrentMonth.lastChild.childNodes[0],te(),oe.oldCurMonth.firstChild&&(oe.oldCurMonth.firstChild.textContent=s(oe.currentMonth-i,oe.config.shorthandCurrentMonth,oe.l10n)),Q("onMonthChange"),a&&document.activeElement&&document.activeElement.$i){var l=document.activeElement.$i;F(function(){O(l,0)})}}}function j(e){return!(!oe.config.appendTo||!oe.config.appendTo.contains(e))||oe.calendarContainer.contains(e)}function H(e){if(oe.isOpen&&!oe.config.inline){var t=j(e.target),n=e.target===oe.input||e.target===oe.altInput||oe.element.contains(e.target)||e.path&&e.path.indexOf&&(~e.path.indexOf(oe.input)||~e.path.indexOf(oe.altInput));("blur"===e.type?n&&e.relatedTarget&&!j(e.relatedTarget):!n&&!t)&&-1===oe.config.ignoredFocusElements.indexOf(e.target)&&(oe.close(),"range"===oe.config.mode&&1===oe.selectedDates.length&&(oe.clear(!1),oe.redraw()))}}function R(e){if(!(!e||oe.currentYearElement.min&&e<parseInt(oe.currentYearElement.min)||oe.currentYearElement.max&&e>parseInt(oe.currentYearElement.max))){var t=e,n=oe.currentYear!==t;oe.currentYear=t||oe.currentYear,oe.config.maxDate&&oe.currentYear===oe.config.maxDate.getFullYear()?oe.currentMonth=Math.min(oe.config.maxDate.getMonth(),oe.currentMonth):oe.config.minDate&&oe.currentYear===oe.config.minDate.getFullYear()&&(oe.currentMonth=Math.max(oe.config.minDate.getMonth(),oe.currentMonth)),n&&(oe.redraw(),Q("onYearChange"))}}function W(t,n){void 0===n&&(n=!0);var a=oe.parseDate(t,void 0,n);if(oe.config.minDate&&a&&e(a,oe.config.minDate,void 0!==n?n:!oe.minDateHasTime)<0||oe.config.maxDate&&a&&e(a,oe.config.maxDate,void 0!==n?n:!oe.maxDateHasTime)>0)return!1;if(!oe.config.enable.length&&!oe.config.disable.length)return!0;if(void 0===a)return!1;for(var i=oe.config.enable.length>0,o=i?oe.config.enable:oe.config.disable,r=0,l=void 0;r<o.length;r++){if("function"==typeof(l=o[r])&&l(a))return i;if(l instanceof Date&&void 0!==a&&l.getTime()===a.getTime())return i;if("string"==typeof l&&void 0!==a){var c=oe.parseDate(l,void 0,!0);return c&&c.getTime()===a.getTime()?i:!i}if("object"==typeof l&&void 0!==a&&l.from&&l.to&&a.getTime()>=l.from.getTime()&&a.getTime()<=l.to.getTime())return i}return!i}function B(e){var t=e.target===oe._input,n=j(e.target),a=oe.config.allowInput,i=oe.isOpen&&(!a||!t),o=oe.config.inline&&t&&!a;if("Enter"===e.key&&t){if(a)return oe.setDate(oe._input.value,!0,e.target===oe.altInput?oe.config.altFormat:oe.config.dateFormat),e.target.blur();oe.open()}else if(n||i||o){var r=!!oe.timeContainer&&oe.timeContainer.contains(e.target);switch(e.key){case"Enter":r?ne():z(e);break;case"Escape":e.preventDefault(),oe.close();break;case"Backspace":case"Delete":t&&!oe.config.allowInput&&oe.clear();break;case"ArrowLeft":case"ArrowRight":if(r)oe.hourElement&&oe.hourElement.focus();else if(e.preventDefault(),oe.daysContainer){var l="ArrowRight"===e.key?1:-1;e.ctrlKey?L(l,!0,void 0,!0):O(e.target.$i,l)}break;case"ArrowUp":case"ArrowDown":e.preventDefault();var c="ArrowDown"===e.key?1:-1;oe.daysContainer&&void 0!==e.target.$i?e.ctrlKey?(R(oe.currentYear-c),O(e.target.$i,0)):r||O(e.target.$i,7*c):oe.config.enableTime&&(!r&&oe.hourElement&&oe.hourElement.focus(),f(e),oe._debouncedChange());break;case"Tab":e.target===oe.hourElement?(e.preventDefault(),oe.minuteElement.select()):e.target===oe.minuteElement&&(oe.secondElement||oe.amPM)?(e.preventDefault(),void 0!==oe.secondElement?oe.secondElement.focus():void 0!==oe.amPM&&oe.amPM.focus()):e.target===oe.secondElement&&oe.amPM&&(e.preventDefault(),oe.amPM.focus());break;case"a":void 0!==oe.amPM&&e.target===oe.amPM&&(oe.amPM.textContent="AM",m(),ne());break;case"p":void 0!==oe.amPM&&e.target===oe.amPM&&(oe.amPM.textContent="PM",m(),ne())}Q("onKeyDown",e)}}function J(e){if(1===oe.selectedDates.length&&e.classList.contains("flatpickr-day")&&void 0!==oe.minRangeDate&&void 0!==oe.maxRangeDate){for(var t=e.dateObj,n=oe.parseDate(oe.selectedDates[0],void 0,!0),a=Math.min(t.getTime(),oe.selectedDates[0].getTime()),i=Math.max(t.getTime(),oe.selectedDates[0].getTime()),o=!1,r=a;r<i;r+=u.DAY)if(!W(new Date(r))){o=!0;break}for(var l=oe.days.childNodes[0].dateObj.getTime(),c=0;c<42;c++,l+=u.DAY)!function(r,l){var c=r<oe.minRangeDate.getTime()||r>oe.maxRangeDate.getTime(),d=oe.days.childNodes[l];if(c)return d.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(e){d.classList.remove(e)}),"continue";if(o&&!c)return"continue";["startRange","inRange","endRange","notAllowed"].forEach(function(e){d.classList.remove(e)});var s=Math.max(oe.minRangeDate.getTime(),a),u=Math.min(oe.maxRangeDate.getTime(),i);e.classList.add(t<oe.selectedDates[0]?"startRange":"endRange"),n<t&&r===n.getTime()?d.classList.add("startRange"):n>t&&r===n.getTime()&&d.classList.add("endRange"),r>=s&&r<=u&&d.classList.add("inRange")}(l,c)}}function K(){!oe.isOpen||oe.config.static||oe.config.inline||$()}function U(e){return function(t){var n=oe.config["_"+e+"Date"]=oe.parseDate(t),a=oe.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(oe["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),oe.selectedDates&&(oe.selectedDates=oe.selectedDates.filter(function(e){return W(e)}),oe.selectedDates.length||"min"!==e||v(n),ne()),oe.daysContainer&&(q(),void 0!==n?oe.currentYearElement[e]=n.getFullYear().toString():oe.currentYearElement.removeAttribute(e),oe.currentYearElement.disabled=!!a&&void 0!==n&&a.getFullYear()===n.getFullYear())}}function $(e){if(void 0===e&&(e=oe._positionElement),void 0!==oe.calendarContainer){var t=oe.calendarContainer.offsetHeight,n=oe.calendarContainer.offsetWidth,i=oe.config.position,o=e.getBoundingClientRect(),r=window.innerHeight-o.bottom,l="above"===i||"below"!==i&&r<t&&o.top>t,c=window.pageYOffset+o.top+(l?-t-2:e.offsetHeight+2);if(a(oe.calendarContainer,"arrowTop",!l),a(oe.calendarContainer,"arrowBottom",l),!oe.config.inline){var d=window.pageXOffset+o.left,s=window.document.body.offsetWidth-o.right,u=d+n>window.document.body.offsetWidth;a(oe.calendarContainer,"rightMost",u),oe.config.static||(oe.calendarContainer.style.top=c+"px",u?(oe.calendarContainer.style.left="auto",oe.calendarContainer.style.right=s+"px"):(oe.calendarContainer.style.left=d+"px",oe.calendarContainer.style.right="auto"))}}}function q(){oe.config.noCalendar||oe.isMobile||(P(),te(),A())}function z(t){t.preventDefault(),t.stopPropagation();var n=function e(t,n){return n(t)?t:t.parentNode?e(t.parentNode,n):void 0}(t.target,function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("disabled")&&!e.classList.contains("notAllowed")});if(void 0!==n){var a=n,i=oe.latestSelectedDateObj=new Date(a.dateObj.getTime()),o=i.getMonth()!==oe.currentMonth&&"range"!==oe.config.mode;if(oe.selectedDateElem=a,"single"===oe.config.mode)oe.selectedDates=[i];else if("multiple"===oe.config.mode){var r=ee(i);r?oe.selectedDates.splice(parseInt(r),1):oe.selectedDates.push(i)}else"range"===oe.config.mode&&(2===oe.selectedDates.length&&oe.clear(),oe.selectedDates.push(i),0!==e(i,oe.selectedDates[0],!0)&&oe.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()}));if(m(),o){var l=oe.currentYear!==i.getFullYear();oe.currentYear=i.getFullYear(),oe.currentMonth=i.getMonth(),l&&Q("onYearChange"),Q("onMonthChange")}if(A(),oe.config.minDate&&oe.minDateHasTime&&oe.config.enableTime&&0===e(i,oe.config.minDate)&&v(oe.config.minDate),ne(),oe.config.enableTime&&setTimeout(function(){return oe.showTimeInput=!0},50),"range"===oe.config.mode&&(1===oe.selectedDates.length?(J(a),oe._hidePrevMonthArrow=oe._hidePrevMonthArrow||void 0!==oe.minRangeDate&&oe.minRangeDate>oe.days.childNodes[0].dateObj,oe._hideNextMonthArrow=oe._hideNextMonthArrow||void 0!==oe.maxRangeDate&&oe.maxRangeDate<new Date(oe.currentYear,oe.currentMonth+1,1)):te()),Q("onChange"),o?F(function(){return oe.selectedDateElem&&oe.selectedDateElem.focus()}):O(a.$i,0),void 0!==oe.hourElement&&setTimeout(function(){return void 0!==oe.hourElement&&oe.hourElement.select()},451),oe.config.closeOnSelect){var c="single"===oe.config.mode&&!oe.config.enableTime,d="range"===oe.config.mode&&2===oe.selectedDates.length&&!oe.config.enableTime;(c||d)&&oe.close()}}}function G(e,t){var n=[];if(e instanceof Array)n=e.map(function(e){return oe.parseDate(e,t)});else if(e instanceof Date||"number"==typeof e)n=[oe.parseDate(e,t)];else if("string"==typeof e)switch(oe.config.mode){case"single":n=[oe.parseDate(e,t)];break;case"multiple":n=e.split("; ").map(function(e){return oe.parseDate(e,t)});break;case"range":n=e.split(oe.l10n.rangeSeparator).map(function(e){return oe.parseDate(e,t)})}oe.selectedDates=n.filter(function(e){return e instanceof Date&&W(e,!1)}),oe.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()})}function V(e){return e.map(function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?oe.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:oe.parseDate(e.from,void 0),to:oe.parseDate(e.to,void 0)}:e}).filter(function(e){return e})}function Z(e,t,n){if(0===e||e){var a,i=e;if(e instanceof Date)a=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)a=new Date(e);else if("string"==typeof e){var o=t||(oe.config||c.defaultConfig).dateFormat,r=String(e).trim();if("today"===r)a=new Date,n=!0;else if(/Z$/.test(r)||/GMT$/.test(r))a=new Date(e);else if(oe.config&&oe.config.parseDate)a=oe.config.parseDate(e,o);else{a=oe.config&&oe.config.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0);for(var l=void 0,d=[],s=0,u=0,f="";s<o.length;s++){var m=o[s],g="\\"===m,p="\\"===o[s-1]||g;if(C[m]&&!p){f+=C[m];var h=new RegExp(f).exec(e);h&&(l=!0)&&d["Y"!==m?"push":"unshift"]({fn:D[m],val:h[++u]})}else g||(f+=".");d.forEach(function(e){var t=e.fn,n=e.val;return a=t(a,n,oe.l10n)||a})}a=l?a:void 0}}return a instanceof Date?(!0===n&&a.setHours(0,0,0,0),a):(console.warn("flatpickr: invalid date "+i),void console.info(oe.element))}}function Q(e,t){var n=oe.config[e];if(void 0!==n&&n.length>0)for(var a=0;n[a]&&a<n.length;a++)n[a](oe.selectedDates,oe.input.value,oe,t);"onChange"===e&&(oe.input.dispatchEvent(X("change")),oe.input.dispatchEvent(X("input")))}function X(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function ee(t){for(var n=0;n<oe.selectedDates.length;n++)if(0===e(oe.selectedDates[n],t))return""+n;return!1}function te(){oe.config.noCalendar||oe.isMobile||!oe.monthNav||(oe.currentMonthElement.textContent=s(oe.currentMonth,oe.config.shorthandCurrentMonth,oe.l10n)+" ",oe.currentYearElement.value=oe.currentYear.toString(),oe._hidePrevMonthArrow=void 0!==oe.config.minDate&&(oe.currentYear===oe.config.minDate.getFullYear()?oe.currentMonth<=oe.config.minDate.getMonth():oe.currentYear<oe.config.minDate.getFullYear()),oe._hideNextMonthArrow=void 0!==oe.config.maxDate&&(oe.currentYear===oe.config.maxDate.getFullYear()?oe.currentMonth+1>oe.config.maxDate.getMonth():oe.currentYear>oe.config.maxDate.getFullYear()))}function ne(e){if(void 0===e&&(e=!0),!oe.selectedDates.length)return oe.clear(e);void 0!==oe.mobileInput&&oe.mobileFormatStr&&(oe.mobileInput.value=void 0!==oe.latestSelectedDateObj?oe.formatDate(oe.latestSelectedDateObj,oe.mobileFormatStr):"");var t="range"!==oe.config.mode?oe.config.conjunction:oe.l10n.rangeSeparator;oe.input.value=oe.selectedDates.map(function(e){return oe.formatDate(e,oe.config.dateFormat)}).join(t),void 0!==oe.altInput&&(oe.altInput.value=oe.selectedDates.map(function(e){return oe.formatDate(e,oe.config.altFormat)}).join(t)),!1!==e&&Q("onValueUpdate")}function ae(e){e.preventDefault();var t=oe.currentYearElement.parentNode&&oe.currentYearElement.parentNode.contains(e.target);if(e.target===oe.currentMonthElement||t){var n=function(e){return(e.wheelDelta||-e.deltaY)>=0?1:-1}(e);t?(R(oe.currentYear+n),e.target.value=oe.currentYear.toString()):oe.changeMonth(n,!0,!1)}}function ie(e){var t=oe.prevMonthNav.contains(e.target),n=oe.nextMonthNav.contains(e.target);t||n?L(t?-1:1):e.target===oe.currentYearElement?(e.preventDefault(),oe.currentYearElement.select()):"arrowUp"===e.target.className?oe.changeYear(oe.currentYear+1):"arrowDown"===e.target.className&&oe.changeYear(oe.currentYear-1)}var oe={};return oe.parseDate=Z,oe.formatDate=function(e,t){return void 0!==oe.config&&void 0!==oe.config.formatDate?oe.config.formatDate(e,t):t.split("").map(function(t,n,a){return w[t]&&"\\"!==a[n-1]?w[t](e,oe.l10n,oe.config):"\\"!==t?t:""}).join("")},oe._animationLoop=[],oe._handlers=[],oe._bind=y,oe._setHoursFromDate=v,oe.changeMonth=L,oe.changeYear=R,oe.clear=function(e){void 0===e&&(e=!0),oe.input.value="",oe.altInput&&(oe.altInput.value=""),oe.mobileInput&&(oe.mobileInput.value=""),oe.selectedDates=[],oe.latestSelectedDateObj=void 0,oe.showTimeInput=!1,oe.redraw(),!0===e&&Q("onChange")},oe.close=function(){oe.isOpen=!1,oe.isMobile||(oe.calendarContainer.classList.remove("open"),oe._input.classList.remove("active")),Q("onClose")},oe._createElement=i,oe.destroy=function(){void 0!==oe.config&&Q("onDestroy");for(var e=oe._handlers.length;e--;){var t=oe._handlers[e];t.element.removeEventListener(t.event,t.handler)}oe._handlers=[],oe.mobileInput?(oe.mobileInput.parentNode&&oe.mobileInput.parentNode.removeChild(oe.mobileInput),oe.mobileInput=void 0):oe.calendarContainer&&oe.calendarContainer.parentNode&&oe.calendarContainer.parentNode.removeChild(oe.calendarContainer),oe.altInput&&(oe.input.type="text",oe.altInput.parentNode&&oe.altInput.parentNode.removeChild(oe.altInput),delete oe.altInput),oe.input&&(oe.input.type=oe.input._type,oe.input.classList.remove("flatpickr-input"),oe.input.removeAttribute("readonly"),oe.input.value=""),["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(e){try{delete oe[e]}catch(e){}})},oe.isEnabled=W,oe.jumpToDate=T,oe.open=function(e,t){if(void 0===t&&(t=oe._input),oe.isMobile)return e&&(e.preventDefault(),e.target&&e.target.blur()),setTimeout(function(){void 0!==oe.mobileInput&&oe.mobileInput.click()},0),void Q("onOpen");oe.isOpen||oe._input.disabled||oe.config.inline||(oe.isOpen=!0,oe.calendarContainer.classList.add("open"),$(t),oe._input.classList.add("active"),Q("onOpen"))},oe.redraw=q,oe.set=function(e,t){null!==e&&"object"==typeof e?Object.assign(oe.config,e):oe.config[e]=t,oe.redraw(),T()},oe.setDate=function(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=void 0),0!==e&&!e)return oe.clear(t);G(e,n),oe.showTimeInput=oe.selectedDates.length>0,oe.latestSelectedDateObj=oe.selectedDates[0],oe.redraw(),T(),v(),ne(t),t&&Q("onChange")},oe.toggle=function(){if(oe.isOpen)return oe.close();oe.open()},oe.element=oe.input=t,oe.isOpen=!1,function(){var e=["wrap","weekNumbers","allowInput","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],n=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange"];oe.config=d({},c.defaultConfig);var a=d({},r,JSON.parse(JSON.stringify(t.dataset||{}))),i={};Object.defineProperty(oe.config,"enable",{get:function(){return oe.config._enable||[]},set:function(e){oe.config._enable=V(e)}}),Object.defineProperty(oe.config,"disable",{get:function(){return oe.config._disable||[]},set:function(e){oe.config._disable=V(e)}}),!a.dateFormat&&a.enableTime&&(i.dateFormat=a.noCalendar?"H:i"+(a.enableSeconds?":S":""):c.defaultConfig.dateFormat+" H:i"+(a.enableSeconds?":S":"")),a.altInput&&a.enableTime&&!a.altFormat&&(i.altFormat=a.noCalendar?"h:i"+(a.enableSeconds?":S K":" K"):c.defaultConfig.altFormat+" h:i"+(a.enableSeconds?":S":"")+" K"),Object.defineProperty(oe.config,"minDate",{get:function(){return oe.config._minDate},set:U("min")}),Object.defineProperty(oe.config,"maxDate",{get:function(){return oe.config._maxDate},set:U("max")}),Object.assign(oe.config,i,a);for(var o=0;o<e.length;o++)oe.config[e[o]]=!0===oe.config[e[o]]||"true"===oe.config[e[o]];for(var o=n.length;o--;)void 0!==oe.config[n[o]]&&(oe.config[n[o]]=h(oe.config[n[o]]||[]).map(l));for(var o=0;o<oe.config.plugins.length;o++){var s=oe.config.plugins[o](oe)||{};for(var u in s)~n.indexOf(u)?oe.config[u]=h(s[u]).map(l).concat(oe.config[u]):void 0===a[u]&&(oe.config[u]=s[u])}oe.isMobile=!oe.config.disableMobile&&!oe.config.inline&&"single"===oe.config.mode&&!oe.config.disable.length&&!oe.config.enable.length&&!oe.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),Q("onParseConfig")}(),"object"!=typeof oe.config.locale&&void 0===c.l10ns[oe.config.locale]&&console.warn("flatpickr: invalid locale "+oe.config.locale),oe.l10n=d({},c.l10ns.default,"object"==typeof oe.config.locale?oe.config.locale:"default"!==oe.config.locale?c.l10ns[oe.config.locale]:void 0),oe.input=oe.config.wrap?t.querySelector("[data-input]"):t,oe.input?(oe.input._type=oe.input.type,oe.input.type="text",oe.input.classList.add("flatpickr-input"),oe._input=oe.input,oe.config.altInput&&(oe.altInput=i(oe.input.nodeName,oe.input.className+" "+oe.config.altInputClass),oe._input=oe.altInput,oe.altInput.placeholder=oe.input.placeholder,oe.altInput.disabled=oe.input.disabled,oe.altInput.required=oe.input.required,oe.altInput.type="text",oe.input.type="hidden",!oe.config.static&&oe.input.parentNode&&oe.input.parentNode.insertBefore(oe.altInput,oe.input.nextSibling)),oe.config.allowInput||oe._input.setAttribute("readonly","readonly"),oe._positionElement=oe.config.positionElement||oe._input):console.warn("Error: invalid input element specified",oe.input),function(){oe.selectedDates=[],oe.now=new Date;var e=oe.config.defaultDate||oe.input.value;e&&G(e,oe.config.dateFormat);var t=oe.selectedDates.length?oe.selectedDates[0]:oe.config.minDate&&oe.config.minDate.getTime()>oe.now.getTime()?oe.config.minDate:oe.config.maxDate&&oe.config.maxDate.getTime()<oe.now.getTime()?oe.config.maxDate:oe.now;oe.currentYear=t.getFullYear(),oe.currentMonth=t.getMonth(),oe.selectedDates.length&&(oe.latestSelectedDateObj=oe.selectedDates[0]),oe.minDateHasTime=!!oe.config.minDate&&(oe.config.minDate.getHours()>0||oe.config.minDate.getMinutes()>0||oe.config.minDate.getSeconds()>0),oe.maxDateHasTime=!!oe.config.maxDate&&(oe.config.maxDate.getHours()>0||oe.config.maxDate.getMinutes()>0||oe.config.maxDate.getSeconds()>0),Object.defineProperty(oe,"showTimeInput",{get:function(){return oe._showTimeInput},set:function(e){oe._showTimeInput=e,oe.calendarContainer&&a(oe.calendarContainer,"showTimeInput",e),$()}})}(),oe.utils={getDaysInMonth:function(e,t){return void 0===e&&(e=oe.currentMonth),void 0===t&&(t=oe.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0)?29:oe.l10n.daysInMonth[e]}},oe.isMobile||function(){var e=window.document.createDocumentFragment();if(oe.calendarContainer=i("div","flatpickr-calendar"),oe.calendarContainer.tabIndex=-1,!oe.config.noCalendar){if(e.appendChild(function(){var e=window.document.createDocumentFragment();oe.monthNav=i("div","flatpickr-month"),oe.prevMonthNav=i("span","flatpickr-prev-month"),oe.prevMonthNav.innerHTML=oe.config.prevArrow,oe.currentMonthElement=i("span","cur-month"),oe.currentMonthElement.title=oe.l10n.scrollTitle;var t=o("cur-year");return oe.currentYearElement=t.childNodes[0],oe.currentYearElement.title=oe.l10n.scrollTitle,oe.config.minDate&&(oe.currentYearElement.min=oe.config.minDate.getFullYear().toString()),oe.config.maxDate&&(oe.currentYearElement.max=oe.config.maxDate.getFullYear().toString(),oe.currentYearElement.disabled=!!oe.config.minDate&&oe.config.minDate.getFullYear()===oe.config.maxDate.getFullYear()),oe.nextMonthNav=i("span","flatpickr-next-month"),oe.nextMonthNav.innerHTML=oe.config.nextArrow,oe.navigationCurrentMonth=i("span","flatpickr-current-month"),oe.navigationCurrentMonth.appendChild(oe.currentMonthElement),oe.navigationCurrentMonth.appendChild(t),e.appendChild(oe.prevMonthNav),e.appendChild(oe.navigationCurrentMonth),e.appendChild(oe.nextMonthNav),oe.monthNav.appendChild(e),Object.defineProperty(oe,"_hidePrevMonthArrow",{get:function(){return oe.__hidePrevMonthArrow},set:function(e){oe.__hidePrevMonthArrow!==e&&(oe.prevMonthNav.style.display=e?"none":"block"),oe.__hidePrevMonthArrow=e}}),Object.defineProperty(oe,"_hideNextMonthArrow",{get:function(){return oe.__hideNextMonthArrow},set:function(e){oe.__hideNextMonthArrow!==e&&(oe.nextMonthNav.style.display=e?"none":"block"),oe.__hideNextMonthArrow=e}}),te(),oe.monthNav}()),oe.innerContainer=i("div","flatpickr-innerContainer"),oe.config.weekNumbers){var t=function(){oe.calendarContainer.classList.add("hasWeeks");var e=i("div","flatpickr-weekwrapper");e.appendChild(i("span","flatpickr-weekday",oe.l10n.weekAbbreviation));var t=i("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,r=t.weekNumbers;oe.innerContainer.appendChild(n),oe.weekNumbers=r,oe.weekWrapper=n}oe.rContainer=i("div","flatpickr-rContainer"),oe.rContainer.appendChild(P()),oe.daysContainer||(oe.daysContainer=i("div","flatpickr-days"),oe.daysContainer.tabIndex=-1),A(),oe.rContainer.appendChild(oe.daysContainer),oe.innerContainer.appendChild(oe.rContainer),e.appendChild(oe.innerContainer)}oe.config.enableTime&&e.appendChild(function(){oe.calendarContainer.classList.add("hasTime"),oe.config.noCalendar&&oe.calendarContainer.classList.add("noCalendar"),oe.timeContainer=i("div","flatpickr-time"),oe.timeContainer.tabIndex=-1;var e=i("span","flatpickr-time-separator",":"),t=o("flatpickr-hour");oe.hourElement=t.childNodes[0];var n=o("flatpickr-minute");if(oe.minuteElement=n.childNodes[0],oe.hourElement.tabIndex=oe.minuteElement.tabIndex=-1,oe.hourElement.value=g(oe.latestSelectedDateObj?oe.latestSelectedDateObj.getHours():oe.config.time_24hr?oe.config.defaultHour:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(oe.config.defaultHour)),oe.minuteElement.value=g(oe.latestSelectedDateObj?oe.latestSelectedDateObj.getMinutes():oe.config.defaultMinute),oe.hourElement.step=oe.config.hourIncrement.toString(),oe.minuteElement.step=oe.config.minuteIncrement.toString(),oe.hourElement.min=oe.config.time_24hr?"0":"1",oe.hourElement.max=oe.config.time_24hr?"23":"12",oe.minuteElement.min="0",oe.minuteElement.max="59",oe.hourElement.title=oe.minuteElement.title=oe.l10n.scrollTitle,oe.timeContainer.appendChild(t),oe.timeContainer.appendChild(e),oe.timeContainer.appendChild(n),oe.config.time_24hr&&oe.timeContainer.classList.add("time24hr"),oe.config.enableSeconds){oe.timeContainer.classList.add("hasSeconds");var a=o("flatpickr-second");oe.secondElement=a.childNodes[0],oe.secondElement.value=g(oe.latestSelectedDateObj?oe.latestSelectedDateObj.getSeconds():oe.config.defaultSeconds),oe.secondElement.step=oe.minuteElement.step,oe.secondElement.min=oe.minuteElement.min,oe.secondElement.max=oe.minuteElement.max,oe.timeContainer.appendChild(i("span","flatpickr-time-separator",":")),oe.timeContainer.appendChild(a)}return oe.config.time_24hr||(oe.amPM=i("span","flatpickr-am-pm",oe.l10n.amPM[p((oe.latestSelectedDateObj?oe.hourElement.value:oe.config.defaultHour)>11)]),oe.amPM.title=oe.l10n.toggleTitle,oe.amPM.tabIndex=-1,oe.timeContainer.appendChild(oe.amPM)),oe.timeContainer}()),a(oe.calendarContainer,"rangeMode","range"===oe.config.mode),a(oe.calendarContainer,"animate",oe.config.animate),oe.calendarContainer.appendChild(e);var l=void 0!==oe.config.appendTo&&oe.config.appendTo.nodeType;if((oe.config.inline||oe.config.static)&&(oe.calendarContainer.classList.add(oe.config.inline?"inline":"static"),oe.config.inline&&!l&&oe.element.parentNode&&oe.element.parentNode.insertBefore(oe.calendarContainer,oe._input.nextSibling),oe.config.static)){var c=i("div","flatpickr-wrapper");oe.element.parentNode&&oe.element.parentNode.insertBefore(c,oe.element),c.appendChild(oe.element),oe.altInput&&c.appendChild(oe.altInput),c.appendChild(oe.calendarContainer)}oe.config.static||oe.config.inline||(void 0!==oe.config.appendTo?oe.config.appendTo:window.document.body).appendChild(oe.calendarContainer)}(),function(){if(oe.config.wrap&&["open","close","toggle","clear"].forEach(function(e){Array.prototype.forEach.call(oe.element.querySelectorAll("[data-"+e+"]"),function(t){return y(t,"click",oe[e])})}),oe.isMobile)!function(){var e=oe.config.enableTime?oe.config.noCalendar?"time":"datetime-local":"date";oe.mobileInput=i("input",oe.input.className+" flatpickr-mobile"),oe.mobileInput.step=oe.input.getAttribute("step")||"any",oe.mobileInput.tabIndex=1,oe.mobileInput.type=e,oe.mobileInput.disabled=oe.input.disabled,oe.mobileInput.placeholder=oe.input.placeholder,oe.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",oe.selectedDates.length&&(oe.mobileInput.defaultValue=oe.mobileInput.value=oe.formatDate(oe.selectedDates[0],oe.mobileFormatStr)),oe.config.minDate&&(oe.mobileInput.min=oe.formatDate(oe.config.minDate,"Y-m-d")),oe.config.maxDate&&(oe.mobileInput.max=oe.formatDate(oe.config.maxDate,"Y-m-d")),oe.input.type="hidden",void 0!==oe.altInput&&(oe.altInput.type="hidden");try{oe.input.parentNode&&oe.input.parentNode.insertBefore(oe.mobileInput,oe.input.nextSibling)}catch(e){}oe.mobileInput.addEventListener("change",function(e){oe.setDate(e.target.value,!1,oe.mobileFormatStr),Q("onChange"),Q("onClose")})}();else{var e=n(K,50);oe._debouncedChange=n(E,300),"range"===oe.config.mode&&oe.daysContainer&&y(oe.daysContainer,"mouseover",function(e){return J(e.target)}),y(window.document.body,"keydown",B),oe.config.static||y(oe._input,"keydown",B),oe.config.inline||oe.config.static||y(window,"resize",e),void 0!==window.ontouchstart&&y(window.document.body,"touchstart",H),y(window.document.body,"mousedown",x(H)),y(oe._input,"blur",H),!0===oe.config.clickOpens&&(y(oe._input,"focus",oe.open),y(oe._input,"mousedown",x(oe.open))),void 0!==oe.daysContainer&&(oe.monthNav.addEventListener("wheel",function(e){return e.preventDefault()}),y(oe.monthNav,"wheel",n(ae,10)),y(oe.monthNav,"mousedown",x(ie)),y(oe.monthNav,["keyup","increment"],b),y(oe.daysContainer,"mousedown",x(z)),oe.config.animate&&(y(oe.daysContainer,["webkitAnimationEnd","animationend"],N),y(oe.monthNav,["webkitAnimationEnd","animationend"],S))),void 0!==oe.timeContainer&&void 0!==oe.minuteElement&&void 0!==oe.hourElement&&(y(oe.timeContainer,["wheel","input","increment"],f),y(oe.timeContainer,"mousedown",x(_)),y(oe.timeContainer,["wheel","increment"],oe._debouncedChange),y(oe.timeContainer,"input",E),y([oe.hourElement,oe.minuteElement],["focus","click"],function(e){return e.target.select()}),void 0!==oe.secondElement&&y(oe.secondElement,"focus",function(){return oe.secondElement&&oe.secondElement.select()}),void 0!==oe.amPM&&y(oe.amPM,"mousedown",x(function(e){f(e),E()})))}}(),(oe.selectedDates.length||oe.config.noCalendar)&&(oe.config.enableTime&&v(oe.config.noCalendar?oe.latestSelectedDateObj||oe.config.minDate:void 0),ne(!1)),oe.showTimeInput=oe.selectedDates.length>0||oe.config.noCalendar,void 0!==oe.weekWrapper&&void 0!==oe.daysContainer&&(oe.calendarContainer.style.width=oe.daysContainer.offsetWidth+oe.weekWrapper.offsetWidth+"px"),oe.isMobile||$(),Q("onReady"),oe}function l(e,t){for(var n=Array.prototype.slice.call(e),a=[],i=0;i<n.length;i++){var o=n[i];try{if(null!==o.getAttribute("data-fp-omit"))continue;void 0!==o._flatpickr&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=r(o,t||{}),a.push(o._flatpickr)}catch(e){console.warn(e,e.stack)}}return 1===a.length?a[0]:a}var c,d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},u={DAY:864e5},f={_disable:[],_enable:[],allowInput:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enable:[],enableSeconds:!1,enableTime:!1,getWeek:function(e){var t=new Date(e.getFullYear(),0,1);return Math.ceil(((e.getTime()-t.getTime())/864e5+t.getDay()+1)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},m={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"]},g=function(e){return("0"+e).slice(-2)},p=function(e){return!0===e?1:0},h=function(e){return e instanceof Array?e:[e]},v=function(){},D={D:v,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours(parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t){e.setHours(e.getHours()%12+12*p(/pm/i.test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t){var n=parseInt(t);return new Date(e.getFullYear(),0,2+7*(n-1),0,0,0,0)},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours(parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:v,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},w:v,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},C={D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"(am|AM|Am|aM|pm|PM|Pm|pM)",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},w={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[w.w(e,t,n)]},F:function(e,t,n){return s(w.n(e,t,n)-1,!1,t)},G:function(e,t,n){return g(w.h(e,t,n))},H:function(e){return g(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e){return e.getHours()>11?"PM":"AM"},M:function(e,t){return s(e.getMonth(),!0,t)},S:function(e){return g(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return e.getFullYear()},d:function(e){return g(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return g(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return g(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}};return"undefined"!=typeof HTMLElement&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return l(this,e)},HTMLElement.prototype.flatpickr=function(e){return l([this],e)}),c=function(e,t){return e instanceof NodeList?l(e,t):l("string"==typeof e?window.document.querySelectorAll(e):[e],t)},window.flatpickr=c,c.defaultConfig=f,c.l10ns={en:d({},m),default:d({},m)},c.localize=function(e){c.l10ns.default=d({},c.l10ns.default,e)},c.setDefaults=function(e){c.defaultConfig=d({},c.defaultConfig,e)},void 0!==t&&(t.fn.flatpickr=function(e){return l(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},c},e.exports=n()}).call(t,n(0))},function(e,t,n){n(3),n(4),n(5),n(6),n(7)},function(e,t){},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n.n(a),o=n(1);n.n(o),i()(function(){i()("input[type=date]").each(function(){var e=i()(this);e.data("calendar-enabled")&&e.flatpickr(i.a.extend({altInput:!0},e.data("calendar-config")))})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n.n(a),o=n(1);n.n(o),i()(function(){i()("input[type=datetime-local]").each(function(){var e=i()(this);e.data("calendar-enabled")&&e.flatpickr(i.a.extend({altInput:!0,enableTime:!0},e.data("calendar-config")))})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n.n(a),o=n(1);n.n(o),i()(function(){i()("input[type=time]").each(function(){var e=i()(this);e.data("calendar-enabled")&&e.flatpickr(i.a.extend({altInput:!0,enableTime:!0,noCalendar:!0},e.data("calendar-config")))})})}]);
/****** FILE: themes/worksafe/js/script.js *****/
"use strict";!function(e){e(document).ready(function(){e("#accessibility-links").focusin(function(){e(this).closest("section").addClass("active")}),e("#accessibility-links").focusout(function(){e(this).closest("section").removeClass("active")})})}(jQuery),jQuery(document).ready(function(){accordion.initAccordion()});var accordion=function(){var i=function(e){var t=e.children(".accordion-content"),n=e.find("button.accordion-toggle");e.removeClass("open"),t.hide(),n.attr("aria-expanded","false"),t.attr("aria-expanded","false")},r=function(e){var t=e.children(".accordion-content"),n=e.find("button.accordion-toggle");e.addClass("open"),t.show(),n.attr("aria-expanded","true"),t.attr("aria-expanded","true")},s=function(t){$("html, body").animate({scrollTop:t.offset().top-(145===$("#sticky-header").outerHeight()?66:$("#sticky-header").outerHeight())},800,function(){t.focus();var e=t.attr("id");t.attr("id",""),t.attr("id",e)})};return{initAccordion:function(){var e=!!location.hash&&$("".concat(location.hash,', [name="').concat(location.hash.slice(1),'"]')),t=$(e).closest(".accordion").first();if($(".accordion").not(".open").each(function(){i($(this))}),$(t).each(function(){r($(this))}),$(".accordion.form-filters").each(function(){r($(this))}),$(".accordion-toggle").unbind("click"),$(".accordion-toggle").on("click",function(e){e.preventDefault();var t=$(this).closest(".accordion");t.hasClass("open")?i(t):r(t)}),window.location.hash){var n=window.location.hash.replace("#",""),o=$('[name="'.concat(n,'"]'));if(o.length){var a=o.closest(".accordion");a.length&&($("html, body").prop({scrollTop:0}),s(a))}}},closeAccordion:i,openAccordion:r}}();function openFormHelpContent(e){e.show().animate({height:e.prop("scrollHeight")},function(){e.attr("aria-expanded","true").addClass("open").css("height","").focus()})}function closeFormHelpContent(e,t){t?e.attr("aria-expanded","false").removeClass("open").css("height",0).hide():e.animate({height:0},function(){e.attr("aria-expanded","false").removeClass("open").hide()})}function wrapForms(){$("form.userform").each(function(e){$(this).parent().hasClass("form-holder")||$(this).wrap('<div class="form-holder"></div>')})}!function(t){t(document).ready(function(){t("#global-modal").on("click",".calendar-add-actions button",function(e){e.preventDefault(),window.open(t(e.target).data("href"),"_blank")})})}(jQuery),function(r){function e(){r(n).each(function(e,t){var n=r(t).closest("li"),o=void 0!==n.data(s),a=0<n.children("ul").length;o&&!a&&n.removeClass(l)}),r(t).on("click",n,function(e){o(e)}),r(window).off("resize.ajaxnav")}var s="ajaxnav-parent-id",t="#primary-nav",c="ajaxnav",n="li.parent .nav-ajax-toggle",l="sub-nav-open",o=function(e){e.preventDefault();var t=r(e.target).closest("li"),n=void 0!==t.data(s),o=0<t.children("ul").length;if(n&&!o){var a=t.data(s),i="/"+c+"/"+a;u("add",a),r.post(i,a,function(e,t,n){"success"===t&&e.length&&(d(e,a),u("remove",a))},"html")}else o&&(t.toggleClass(l),t.hasClass(l)?(r(e.target).attr("aria-expanded","true").addClass("is-expanded"),t.children("ul").attr("aria-expanded","true").show()):(r(e.target).attr("aria-expanded","false").removeClass("is-expanded"),t.find("li").removeClass(l),t.find("ul").attr("aria-expanded","false").hide()))},d=function(e,t){var n="[data-"+s+"="+t+"]",o=r(e);r(n).append(o),r(n).find(".js-nav-item-toggle").attr("aria-expanded","true").addClass("is-expanded"),r(n).children("ul").attr("aria-expanded","true").show(),r(n).hasClass(l)||r(n).addClass(l)},u=function(e,t){var n="[data-"+s+"="+t+"]";"add"===e?(r(n).hasClass(l)||r(n).addClass(l),r(n).append(r('<ul class="loading nav-item__submenu"><li class="nav-item nav-item--loading"><div class="nav-item__main">Loading...</div></li></ul>').attr("aria-expanded","true").show())):r(n).find("ul.loading").remove()};r(document).ready(function(){e()}),r(window).on("resize.ajaxnav",function(){e()})}(jQuery),function(n){n(document).ready(function(){for(var e=n(".ajax_append_holder").find("section.accordion"),t=0;t<e.length;t++)if(!n(e[t]).find("h2").hasClass("visuallyhidden")){n(e[t]).find("h2").find("button").trigger("click");break}n("#Form_FilterForm_sorting").on("click","input",function(e){var t=n(this).attr("form");n("#"+t).submit()})})}(jQuery),function(){var e=jQuery("form.filter-form--active");e.length&&e[0].scrollIntoView()}(),function(o){var e=o("[form]").get(0),t=document.getElementById(o(e).attr("form")),n=!window.ActiveXObject&&"ActiveXObject"in window,a=!1,i=window.navigator.userAgent,r=i.indexOf("Edge/");0<r&&parseInt(i.substring(r+5,i.indexOf(".",r)),10)<=15&&(a=!0),e&&window.HTMLFormElement&&t instanceof HTMLFormElement&&!n&&!a||(o.fn.appendField=function(e){if(this.is("form")){!o.isArray(e)&&e.name&&e.value&&(e=[e]);var n=this;return o.each(e,function(e,t){o("<input/>").attr("type","hidden").attr("name",t.name).val(t.value).appendTo(n)}),n}},o("form[id]").submit(function(e){var t=o(this),n=o("[form="+t.attr("id")+"]").serializeArray();t.appendField(n)}).each(function(){var t=this,e=o(t),n=o("[form="+e.attr("id")+"]");n.filter("button, input").filter("[type=reset],[type=submit]").click(function(){var e=this.type.toLowerCase();"reset"===e?(t.reset(),n.each(function(){this.value=this.defaultValue,this.checked=this.defaultChecked}).filter("select").each(function(){o(this).find("option").each(function(){this.selected=this.defaultSelected})})):e.match(/^submit|image$/i)&&o(t).appendField({name:this.name,value:this.value}).submit()})}))}(jQuery),$(document).ready(function(){var n,o,a;(a=function(t){o.each(function(e){e.toString()===t.toString()?$(this).show():$(this).hide()})},{init:function(e,t){n=e,o=t.find("form"),n.on("change",function(e){a($(e.target).val())}),a(0)}}).init($("#form-selector"),$(".js-contact-form-switcher"))}),function(n){n(document).ready(function(){n(".form-help-content").each(function(){closeFormHelpContent(n(this),!0)}),n(".form-help-toggle-holder button").on("click",function(e){e.preventDefault(),n(this).blur();var t=n("#"+n(this).attr("aria-controls"));t.hasClass("open")?closeFormHelpContent(t):openFormHelpContent(t)})})}(jQuery),jQuery(document).ready(function(){wrapForms()});var scrolledPosition=0,isScrolling=!1,largeBreakpoint=1250,mediumBreakPoint=1e3,smallBreakPoint=580;function isXLarge(){return window.innerWidth>=largeBreakpoint}function isLarge(){return window.innerWidth>mediumBreakPoint}function isMedium(){return window.innerWidth>smallBreakPoint&&window.innerWidth<=mediumBreakPoint}function isSmall(){return window.innerWidth<=smallBreakPoint}function getScreenSize(){return isLarge()?"large":isMedium()?"medium":"small"}function disablePageScroll(){$("body").hasClass("disabled-scroll")||(scrolledPosition=$(window).scrollTop(),isScrolling=$("body").hasClass("scrolling"),$("body").addClass("disabled-scroll").css("overflow","hidden"),$("#page-wrapper").css("margin-top",-scrolledPosition),isScrolling&&$("body").addClass("forced-scrolling"))}function enablePageScroll(){$("body").removeClass("disabled-scroll").css("overflow",""),$("#page-wrapper").css("margin-top",""),$(window).scrollTop(scrolledPosition),$("body").removeClass("forced-scrolling")}function printPage(){window.print()}function detectIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(0<t)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);if(0<e.indexOf("Trident/")){var n=e.indexOf("rv:");return parseInt(e.substring(n+3,e.indexOf(".",n)),10)}var o=e.indexOf("Edge/");return 0<o&&parseInt(e.substring(o+5,e.indexOf(".",o)),10)}function svgIEFix(){$("#main-page-content .svg-holder svg").each(function(e){var t=$(this);t.css({width:"",height:"","padding-bottom":""});var n=t[0].viewBox.baseVal.height/t[0].viewBox.baseVal.width*100;n<t.parent(".svg-holder").height()/t.parent(".svg-holder").width()*100?t.css({overflow:"visible",width:"100%",height:"1px","padding-bottom":n+"%"}):(t.attr("preserveAspectRatio","xMidYMin slice"),t.css({overflow:"visible",width:t.parent(".svg-holder").height()/n*100+"px",height:"100%","padding-bottom":""}))})}function linksInit(){var e=[".box.link",".list-item.link",".notify-box--with-link"];$(e.join()).on("click",function(e){var t=$(this).find("a").first();if(!$(e.target).is("a"))return t.length&&""!=t.attr("href")&&"#"!=t.attr("href")&&(window.location.href=t.prop("href")),!1}),$(e.join()).focusin(function(e){$(this).addClass("hover")}),$(e.join()).focusout(function(e){$(this).removeClass("hover")})}!function(e){var t;e(document).ready(function(){0!=detectIE()&&detectIE()<=11&&svgIEFix(),e(window).on("resize.svgIEFix",function(){clearTimeout(t),t=setTimeout(function(){svgIEFix()},200)})})}(jQuery),function(e){e(document).ready(function(){e("html").removeClass("no-js")}),e(window).on("load",function(){e("body").removeClass("preload")})}(jQuery),jQuery(document).ready(function(){linksInit()}),function(n){n(document).ready(function(){menuInit(),n(".js-nav-item-toggle:not(.nav-ajax-toggle)").on("click",function(e){e.preventDefault();var t=n(this).closest("li");t.toggleClass("sub-nav-open"),t.hasClass("sub-nav-open")?(n(this).addClass("is-expanded").attr("aria-expanded","true"),t.children("ul").attr("aria-expanded","true").show()):(n(this).removeClass("is-expanded").attr("aria-expanded","false"),t.find("li").removeClass("sub-nav-open"),t.find(".js-nav-item-toggle").removeClass("is-expanded").attr("aria-expanded","false"),t.find("ul").attr("aria-expanded","false").hide())})})}(jQuery);var menuOpen=!1,$navigationToggle=$(".js-navigation-toggle");function menuInit(){$navigationToggle.on("click",function(e){e.preventDefault(),$("body").hasClass("menu-open")?closeMenu():openMenu()})}function openMenu(){menuOpen=!0,disablePageScroll(),$("body").addClass("menu-open"),$("#primary-nav").show(),setTimeout(function(){$("body").addClass("menu-open-2").queue(function(e){e()})},0),$navigationToggle.attr("aria-expanded","true"),$("#primary-nav").focus(),$(document).on("keyup.menu",function(e){27==e.which&&closeMenu()}),$navigationToggle.trigger("closeModal")}function closeMenu(){menuOpen=!1,$("body").removeClass("menu-open-2").delay(200).queue(function(e){$("body").removeClass("menu-open"),$("#primary-nav").hide(),e()}),$navigationToggle.attr("aria-expanded","false"),$("body").hasClass("modal-open")||enablePageScroll(),$navigationToggle.focus(),$(document).off(".menu")}function secondaryNavInit(){$("#secondary-nav a.current").parentsUntil("#secondary-nav","li").each(function(e){$(this).children(".menu-level-toggle").find("button").click()})}$(window).on("click",function(e){menuOpen&&(0!=$("#page-head").has(e.target).length&&!$("body").hasClass("modal-open")||closeMenu())}),jQuery(document).ready(function(){modalInit()});var globalModal=$("#global-modal"),modalState={};function modalInit(){$navigationToggle.on("closeModal",function(){closeModal($("#global-search-wrapper"),"global-search-wrapper")}),$(".modal").show().hide(),$(".js-modal-trigger").on("click",function(e){e.preventDefault();var t=$(this),n=t.data("modal-target");n=n||"global-modal";var o=0<$("#"+n).length?$("#"+n):globalModal;modalState[n]={source:t},openModal(o)}),$(".modal .close-button").on("click",function(e){e.preventDefault(),closeModal($(this).closest(".modal"))})}function openModal(o){var e=o.attr("id");if(disablePageScroll(),$("body").addClass("modal-open"),o.fadeIn(),$("[data-modal-target = "+e+"]").attr("aria-expanded","true"),$("#header-search-form_Search").focus(),modalState[e].source.data("ajax-action")){var a=o.find(".modal-content-holder");if(a.length){var n=$("<div class='content-holder'><p class='txt-center loading'>loading...</p></div>");a.html("").append(n);var t=modalState[e].source.data("ajax-action");$.ajax(t,{dataType:"html",error:function(e,t,n){a.append($("<div class='content-holder'><p class='txt-center loading'>Error loading</p></div>"))},success:function(e,t,n){a.append($(e)),o.find(".close-button").on("click",function(e){e.preventDefault(),closeModal(o)})},complete:function(e,t){n.remove()}})}}modalState[e].source.data("image-zoom")&&initImageZoomSlider(modalState[e].source.data("image-url"));$(document).on("keyup.modal",function(e){27!=e.which||$("body").hasClass("menu-open")||closeModal(o)})}function closeModal(e,t){var n=t||e.attr("id");$("body").removeClass("modal-open"),e.fadeOut(),$("[data-modal-target = "+n+"]").attr("aria-expanded","false"),$("body").hasClass("menu-open")||enablePageScroll(),modalState[n]&&(modalState[n].source.focus(),modalState[n]=null)}function stickPageUtils(e,t,n,o,a,i){isXLarge()&&t-n<=e&&e<o-(n+a+i)?$("#page-utilities").css({position:"fixed",top:n}):isXLarge()&&o-(n+a+i)<=e?$("#page-utilities").css({position:"absolute",top:o-(a+i)}):isXLarge()?$("#page-utilities").css({position:"",top:t}):$("#page-utilities").css({position:"",top:""})}function responsiveTables(){$("#main-page-content table").each(function(e){$(this).parent().hasClass("table-wrapper")||$(this).wrap('<div class="table-wrapper"></div>')})}function trimLeadingTrailingSlashes(e){return e.replace(/^\//,"").replace(/\/$/,"")}function animateScrollTo(){$("#main-page-content").on("click","a[href*='#']",function(e){var t,n=$(this).prop("hash"),o=trimLeadingTrailingSlashes($(this).prop("pathname"))||"",a=trimLeadingTrailingSlashes(location.pathname),i=!!n,r=""===o||o===a;if($(this).prop("hostname")===location.hostname&&r&&i&&(e.preventDefault(),(t=$(n)).length||(t=$("[name='"+n.slice(1)+"']"))),t&&t.length){$(t).closest(".accordion").length&&accordion.openAccordion($(t).closest(".accordion")),t.attr("tabindex","-1");var s=t.offset().top-66-20;return $("html, body").animate({scrollTop:s},600,function(){t.focus();var e=t.attr("id");t.attr("id",""),history.pushState?history.pushState({clickedScroll:!0},null,location.origin+location.pathname+n):window.location.hash=n,t.attr("id",e)}),!1}})}function stickyBackToTop(e,t,n){t<e?$("#back-to-top .back-to-top__button").fadeIn(200):$("#back-to-top .back-to-top__button").fadeOut(200),n<=e+t?$("#back-to-top").css({position:"absolute",bottom:"0"}):$("#back-to-top").css({position:"",bottom:""})}function backToTopLink(){$("#back-to-top .back-to-top__button").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},600),$("#main-page-content").focus()})}function longFormDoc(){var e;0<$("#lf-doc-nav").length&&$("body").scrollspy({target:"#lf-doc-nav",offset:88}),$("#lf-doc-nav > ul > li > ul").css("height",0).hide(),$("#lf-doc-nav").on("activate.bs.scrollspy",function(){$("#lf-doc-nav li").each(function(){var e=$(this),t=e.children("ul");e.hasClass("active")?isLarge()&&0<t.length&&t.stop().show().animate({height:t.prop("scrollHeight")},100,function(){}):0<t.length&&t.stop().animate({height:0},100,function(){t.hide()})})}),sizeLFDocNav(),toggleLFDocNavInit(),$(window).on("resize.lfdoc",function(){clearTimeout(e),e=setTimeout(function(){sizeLFDocNav(),toggleLFDocNavInit()},100)})}function sizeLFDocNav(){isLarge()?$("#lf-doc-nav").css("width",$(".lf-nav-wrapper").width()):$("#lf-doc-nav").css("width","")}function toggleLFDocNavInit(){var t=$("#lf-doc-nav > h2");isLarge()?(t.removeClass("open").next("ul.nav").show(),$("#lf-doc-nav ul.nav > li > a").off(".openNav"),t.children("button").off("click"),t.children("button").attr("aria-expanded","true").contents().unwrap()):(0<!t.children("button").length&&(t.wrapInner('<button class="button button--primary lf-doc-nav__toggle" aria-controls="lf-doc-nav-list" aria-expanded="false" title="Toggle section navigation open or closed"></button>'),t.children("button").on("click",function(e){t.hasClass("open")?closeLFDocNav(t):openLFDocNav(t)})),closeLFDocNav(t))}function openLFDocNav(t){t.next("ul.nav").show(),t.addClass("open"),t.children("button").attr("aria-expanded","true"),$("#lf-doc-nav .lf-nav__link").on("click.openNav",function(e){closeLFDocNav(t)})}function closeLFDocNav(e){e.next("ul.nav").hide(),e.removeClass("open"),e.children("button").attr("aria-expanded","false"),$("#lf-doc-nav .lf-nav__link").off(".openNav")}function stickyLFDocNav(e,t,n,o,a,i,r){if(isLarge()){$("#lf-doc-nav").show(),$("#lf-doc-nav > ul.nav").css({"max-height":""});var s=$("#lf-doc-nav").parent();if(!s.length)return;var c=s.outerHeight()+s.offset().top;n-o-20<=e&&e<c-(o+20+i)?$("#lf-doc-nav").css({position:"fixed",top:o+20,bottom:"","max-height":t-o-40}):c-(o+20+i)<=e?$("#lf-doc-nav").css({position:"absolute",top:"unset",bottom:"0","max-height":t-o-40}):$("#lf-doc-nav").css({position:"",top:0,bottom:"","max-height":""})}else $("#lf-doc-nav").css({"max-height":"",top:""}),n-o<=e?($("#lf-doc-nav").show(),$("#lf-doc-nav > ul.nav").css({"max-height":t-o-r})):($("#lf-doc-nav").hide(),$("#lf-doc-nav > ul.nav").css({"max-height":""}))}function scrollingInit(){var n,o;n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};var a=!1,i=-1,r=-1,s=$("#back-to-top .back-to-top__button").outerHeight(),c=-1;(o=function(){var e=scrollVariables();if(i==e.scrollOffset&&r==e.pageUtilsHeight&&c==e.longFormIndexHeight&&!a)return n(o),!1;var t=semiStaticScrollVariables();stickyHeader(e.scrollOffset,t.pageHeadHeight),stickPageUtils(e.scrollOffset,t.mainContentOffset,t.pageHeadHeight,t.footerOffset,s,e.pageUtilsHeight),stickyBackToTop(e.scrollOffset,t.screenHeight,t.footerOffset),stickyLFDocNav(e.scrollOffset,t.screenHeight,t.longFormDocContentOffset,t.pageHeadHeight,t.footerOffset,e.longFormIndexHeight,t.longFormDocHeaderHeight),i=e.scrollOffset,r=e.pageUtilsHeight,c=e.longFormIndexHeight,a=!1,n(o)})(),setTimeout(function(){var e=scrollVariables(),t=semiStaticScrollVariables();stickPageUtils(e.scrollOffset,t.mainContentOffset,t.pageHeadHeight,t.footerOffset,s,e.pageUtilsHeight),stickyBackToTop(e.scrollOffset,t.screenHeight,t.footerOffset),stickyLFDocNav(e.scrollOffset,t.screenHeight,t.longFormDocContentOffset,t.pageHeadHeight,t.footerOffset,e.longFormIndexHeight,t.longFormDocHeaderHeight)},210),$(window).on("resize.scroller",function(){a=!0})}function scrollVariables(){return{scrollOffset:window.pageYOffset,pageUtilsHeight:0<$("#page-utilities > .outer > .inner").length?$("#page-utilities > .outer > .inner").outerHeight():-1,longFormIndexHeight:0<$("#lf-doc-nav").length?$("#lf-doc-nav").outerHeight():-1}}function semiStaticScrollVariables(){return{screenHeight:window.innerHeight,mainContentOffset:$("#main-page-content").position().top,footerOffset:$("#page-foot").position().top,pageHeadHeight:$("#sticky-header").outerHeight(),longFormDocContentOffset:0<$(".lf-nav-wrapper").length?$(".lf-doc-lower").position().top:-1,longFormDocHeaderHeight:0<$("#lf-doc-nav").length?$("#lf-doc-nav > h2").outerHeight():-1}}function stickyHeader(e,t){t<e?$("body").addClass("scrolling"):$("body").removeClass("scrolling")}jQuery(function(o){var t=function(e,t){if(1<arguments.length)return localStorage.setItem(e,JSON.stringify(t));var n=localStorage.getItem(e);return n&&JSON.parse(n)||[]},n=function(e,t,n){for(var o=0;o<e.length;o++)if(e[o][t]===n)return e[o];return null},e=function(e,t,n){for(var o=[],a=0;a<e.length;a++)e[a][t]!==n&&o.push(e[a]);return o};!function(){return"undefined"!=typeof localStorage}||"undefined"==typeof feedbackSettings||{settings:[],ratings:[],pageRating:null,formIsOpen:!1,msgValidationError:null,localStorageName:"worksafe-ratings",init:function(e){this.settings=e,this.cacheElements(),this.ratings=t(this.localStorageName),this.pageRating=n(this.ratings,"pageId",this.settings.pageId),this.pageRating?this.renderCueStatic():(this.renderCue(),this.bindEvents(),this.$formHolder.height(0))},cacheElements:function(){this.feedbackFormTpl=o("#feedback-form-tpl").html(),this.feedbackCueTpl=o("#feedback-cue-tpl").html(),this.feedbackMsgTpl=o("#feedback-msg-tpl").html(),this.feedbackCueStaticTpl=o("#feedback-cue-static-tpl").html(),this.$cueHolder=o("#feedback-cue-holder"),this.$formHolder=o("#page-feedback-form-wrapper > .page-feedback-form").first()},bindEvents:function(){this.$cueHolder.on("click","button",this.initFeedBack.bind(this)),this.$formHolder.on("click","button.close-button",this.formClose.bind(this)),this.$formHolder.on("click","button.submit-button",this.sendFeedback.bind(this))},initFeedBack:function(e){var t=o(e.target),n=null;this.pageRating&&this.pageRating.id&&(n=this.pageRating.id),this.pageRating={pageId:this.settings.pageId,rating:t.attr("data-value"),comment:null,id:n},this.formIsOpen?this.formToggle():this.formOpen(),this.pageRating&&"1"===this.pageRating.rating&&null===this.pageRating.id&&this.postPositiveFeedback()},formToggle:function(){this.$formHolder;this.$formHolder.stop().animate({height:0},function(){this.formOpen()}.bind(this))},formClose:function(){this.$formHolder.stop().animate({height:0},function(){this.$formHolder.hide,this.formIsOpen=!1}.bind(this))},formOpen:function(){this.renderForm(),this.$formHolder.stop().show().animate({height:this.$formHolder.prop("scrollHeight")}),this.formIsOpen=!0},sendFeedback:function(e){e.preventDefault(),this.pageRating.comment=this.$formHolder.find("input").val(),this.pageRating&&"0"===this.pageRating.rating&&!this.pageRating.comment.length?(this.msgValidationError="Please fill this field",this.renderForm(),this.msgValidationError=null):this.postFeedback()},postFeedback:function(){this.renderMsg("loading","Sending..."),this.post(function(){this.renderCueStatic(),this.renderMsg("",this.settings.msgSuccess),this.ratings=e(this.ratings,"pageId",this.pageRating.pageId),this.ratings.push(this.pageRating),this.pageRating={},t(this.localStorageName,this.ratings)}.bind(this),function(){this.renderMsg("error",this.settings.msgError)}.bind(this))},postPositiveFeedback:function(){this.post(function(){this.ratings.push(this.pageRating),t(this.localStorageName,this.ratings)}.bind(this))},post:function(e,t){o.post(this.settings.rateLink,this.pageRating,function(e){this.pageRating.id=e}.bind(this)).done(function(){"function"==typeof e&&e()}).fail(function(){"function"==typeof t&&t()})},renderForm:function(){var e;e=this.pageRating&&"1"===this.pageRating.rating?this.settings.msgFeedbackPositive:this.settings.msgFeedbackNegative+" (required)",this.render(this.$formHolder,this.feedbackFormTpl,{msgFeedback:e,msgValidationError:this.msgValidationError})},renderCue:function(){this.render(this.$cueHolder,this.feedbackCueTpl,{settings:this.settings})},renderCueStatic:function(){var e="selected",t="selected";this.pageRating&&"1"===this.pageRating.rating?t="not-"+t:e="not-"+e,t="page-feedback-cue__response--"+t,e="page-feedback-cue__response--"+e,this.render(this.$cueHolder,this.feedbackCueStaticTpl,{classPositive:e,classNegative:t})},renderMsg:function(e,t){this.render(this.$formHolder,this.feedbackMsgTpl,{msgclass:e,msg:t})},render:function(e,t,n){var o=Mustache.render(t,n);e.html(o)}}.init(feedbackSettings)}),function(t){var n=t(".js-share-toggle"),o=t(".js-share-menu"),a="is-open";function i(){o.removeClass(a),n.attr("aria-expanded","false"),t(document).off(".share")}t(document).ready(function(){n.on("click",function(e){e.preventDefault(),o.hasClass(a)?i():(o.addClass(a),n.attr("aria-expanded","true"),t(document).on("keyup.share",function(e){27==e.which&&i()}))}),t("#page-utilities").show()})}(jQuery),jQuery(document).ready(function(){responsiveTables()}),function(e){e(document).ready(function(){e("#page-wrapper").fitVids()})}(jQuery),jQuery(document).ready(function(){backToTopLink(),animateScrollTo(),longFormDoc()}),jQuery(document).ready(function(){scrollingInit()}),function(t){var n="#search-page-form_Search, #header-search-form_Search",s="header-search-form_Search",e=!1,o=!1,c=!1,a=0,i="swiftypeliveindex",r="search-4wfkk8u4qn9df8xxxzzhzga3";window._testEnvironment&&(i="cwp4-uat",r="search-12ssr28o2c8iq3u5dfio1qwv");var l,d="https://host-6zmrfg.api.swiftype.com/api/as/v1/engines/".concat(i,"/search"),u=5,f=setTimeout(function(){console.log("searchTimeout initiated")},1),h=document.createElement("div");h.className="search-form__autocompleteitems form__autocompleteitems--search",t("#search-page-form_Search").parent().append(h);var m=document.createElement("div");function p(){h.innerHTML="",m.innerHTML="",c=o=!1,a=0,window.removeEventListener("keyup",b)}function g(o){t.ajax(d,{dataType:"json",data:{query:o},type:"GET",beforeSend:function(e){e.setRequestHeader("Authorization","Bearer ".concat(r)),e.setRequestHeader("Content-Type","application/json")},error:function(e,t,n){console.log("error")},success:function(e,t,n){!function(e,t){if(p(),(e=(e=e.filter(function(e){var t=-1<e.breadcrumbs.raw.split(" > ").indexOf("dmsassets");return!(e.publicationtype&&e.publicationtype.raw||t)})).slice(0,u)).length){c=!0;var r=document.createElement("div"),n=document.createElement("div");n.className="search-form__autocompleteitem search-form__autocompleteitem--header",n.innerHTML='Suggested pages for "'.concat(t,'"'),r.appendChild(n),e.forEach(function(e,t){var n=document.createElement("a"),o=e.title.raw.replace(/ /gi,"+"),a=document.createElement("h3");n.appendChild(a);var i=document.createElement("p");i.className="search-form__hint",e.breadcrumbs&&e.breadcrumbs.raw&&(i.innerHTML=e.breadcrumbs.raw,n.appendChild(i)),n.className="search-form__autocompleteitem search-form__autocompleteitem--result search-form__autocompleteitem--".concat(t+1),n.setAttribute("href",e.link.raw||"search/SearchForm/?Search=".concat(o,"&action_results=Go")),n.setAttribute("tabindex","0"),n.setAttribute("title",e.title.raw),a.innerHTML=e.title.raw,r.appendChild(n)});var o=document.createElement("div");o.className="search-form__autocompleteitem search-form__autocompleteitem--footer";var a=document.createElement("a");a.className="search-form__action button button--primary",a.innerHTML="Show more",a.setAttribute("href","search/SearchForm/?Search=".concat(t,"&action_results=Go"));var i=document.createElement("button");i.className="search-form__action button button--outline",i.innerHTML="Close",i.addEventListener("click",p),o.appendChild(a),o.appendChild(i),r.appendChild(o),"header-search-form_Search"===s?m.appendChild(r):h.appendChild(r)}}(e.results,o),window.addEventListener("touchmove",w),window.addEventListener("keyup",b)},complete:function(e,t){console.log("complete")}})}function v(e){clearTimeout(f),""===e?p():1<e.length&&(f=setTimeout(function(){g(e)},200))}function b(e){9===e.keyCode&&(o=!0),c&&function(e){40!==e.keyCode&&38!==e.keyCode||(e.preventDefault(),o=!0,(a=40===e.keyCode?a+1:a-1)<1?(a=1,t(n).focus()):(5<a&&(a=1),document.querySelector(".search-form__autocompleteitem--".concat(a)).focus()))}(e)}function w(){e=!0,t(n).blur(),window.removeEventListener("touchmove",w)}m.className="search-form__autocompleteitems",t("#header-search-form_Search").parent().append(m),t(n).keyup(function(){if(40===event.keyCode&&c)o=!0,t(n).blur();else{var e=t(this).val();s=t(this).attr("id"),v(e)}}),t(n).focus(function(){var e=t(this).val();s=t(this).attr("id"),v(e)}),t(n).blur(function(){clearTimeout(l),l=setTimeout(function(){e||o?e=!1:p()},250)})}(jQuery),function(l){function e(){l(".more_button_holder").on("click",".js-show_more_ajax",function(e){if(e.preventDefault(),history.pushState){var i=l("#main-page-content").find(".result-set.ajax_append_holder"),r=l(this),a=l("<article id='article_loading'><div class='inner'><div class='content-holder'><p class='txt-center loading'><img src='resources/themes/worksafe/images/three-dots.svg' alt='Animated loading image' /></p></div></div></article>"),s=r.html(),c=l(this).data("link");r.html("Loading..."),r.attr("disabled","disabled"),i.append(a),l.ajax(c,{dataType:"json",error:function(e,t,n){r.prop("disabled",!0).html("Loading error")},success:function(n,e,t){n.nextLink&&l(".search-showing").each(function(e,t){l(t).html(n.nextStart)});if(n.filterOnRegion){var o;if(n.htmlListView1)if(i.find(".listView1").append(n.htmlListView1),l("#accordion-list1-heading").hasClass("visuallyhidden"))l("#accordion-list1-heading").removeClass("visuallyhidden"),l("#accordion-list1-heading").find("button").click(),l("#accordion-list2-heading").closest(".accordion").hasClass("open")&&l("#accordion-list2-heading").find("button").click();else if(l("#accordion-list1-heading").closest(".accordion").hasClass("open"))(o=l("#accordion-list1-heading").closest(".accordion").find(".accordion-content")).show().animate({height:o.prop("scrollHeight")});if(n.htmlListView2)if(i.find(".listView2").append(n.htmlListView2),l("#accordion-list2-heading").removeClass("visuallyhidden"),l("#accordion-list2-heading").closest(".accordion").hasClass("open"))(o=l("#accordion-list2-heading").closest(".accordion").find(".accordion-content")).show().animate({height:o.prop("scrollHeight")})}else i.append(l(n.htmlListView));if(n.nextStart)if(n.nextLink){var a=function(e,t,n){var o=new RegExp("([?&])"+t+"=.*?(&|$)","i"),a=-1!==e.indexOf("?")?"&":"?";return e.match(o)?e.replace(o,"$1"+t+"="+n+"$2"):e+a+t+"="+n}(c,"start",n.nextStart);r.data("link",a).attr("data-link",a).html(s)}else r.hide();else r.remove()},complete:function(e,t){if(a.remove(),r.removeAttr("disabled"),"success"==t){var n=r.parent().html(),o=i.html();history.pushState({htmlListView:o,pageTitle:"",newButtonHTML:n},"",c)}accordion.initAccordion()}})}else window.location.href=l(this).data("link")})}l("js-show_more_ajax").click(function(){var e=l(this).data("length"),t=l(this).data("total"),n=l(this).data("next"),o=n+e;o=t<o?t:o;for(var a=n;a<=o;a++)l("div#result_item_"+a).show();l(this).data("next",o);var i=o;l(".search-showing").html(i)}),l(document).ready(function(){history.pushState&&window.addEventListener("popstate",function(e){e.state&&(e.state.htmlListView||e.state.clickedScroll)&&(e.state.htmlListView?(l("#main-page-content").find(".result-set.ajax_append_holder").html(e.state.htmlListView),e.state.newButtonHTML?(l("#main-page-content").find(".more_button_holder").html(""),l("#main-page-content").find(".more_button_holder").append(l(e.state.newButtonHTML))):l("#main-page-content").find(".more_button_holder").html("")):window.location.reload(!0))}),e()})}(jQuery),function(e){e(document).ready(function(){e(".royalSlider").royalSlider({imageScaleMode:"fill",imageScalePadding:0,slidesSpacing:0,loop:!0,navigateByClick:!1,autoPlay:{enabled:!0,pauseOnHover:!0,stopAtAction:!1,delay:4e3}})})}(jQuery);var worksafeutils={supportLS:function(){return"undefined"!=typeof localStorage},store:function(e,t){if(1<arguments.length)return localStorage.setItem(e,JSON.stringify(t));var n=localStorage.getItem(e);return n&&JSON.parse(n)||[]},getObjInArray:function(e,t,n){for(var o=0;o<e.length;o++)if(e[o][t]===n)return e[o];return null},removeObjFromArray:function(e,t,n){for(var o=[],a=0;a<e.length;a++)e[a][t]!==n&&o.push(e[a]);return o}},zoomImages=[],zoomSlider=null;function initImageZoomSlider(e){if(zoomSlider?zoomSlider.updateSliderSize(!0):($("#zoom-modal .image-zoom-slider").royalSlider({imageScaleMode:"fit-if-smaller",imageScalePadding:0,controlNavigation:"none",arrowsNav:!0,arrowsNavAutoHide:!1,loop:!1,controlsInside:!1,globalCaption:!0}),zoomSlider=$("#zoom-modal .image-zoom-slider").data("royalSlider")),e){var t=findZoomImage(e);zoomSlider.goTo(t)}}function findZoomImage(e){for(var t=0;t<zoomImages.length;t++)if(zoomImages[t].url==e)return t;return 0}!function(c){c(document).ready(function(){var e=c("figure .zoom-toggle");if(0<e.length){e.each(function(e){var t=c(this).closest("figure"),n=t.find("img").first().attr("src"),o=t.find("figcaption").text();zoomImages.push({url:n,caption:o})});var t=c('<div role="complementary" id="zoom-modal" class="modal" tabindex="-1" />').append(c('<div class="modal-inner" />').append(c('<div class="zoom-wrapper" />'))),n=c('<button class="close-button" />').append(c('<span class="lines" />')).append(c('<span class="visuallyhidden">Close modal window</span>'));t.appendTo(c("#page-wrapper-inner"));for(var o=c('<div class="image-zoom-slider royalSlider" />'),a=0;a<zoomImages.length;a++){var i=c('<div class="slide" />').appendTo(o),r=zoomImages[a].url,s=zoomImages[a].caption;c("<img />").attr({src:r,alt:s,class:"rsImg"}).appendTo(i),c('<div class="slide-caption rsCaption" />').text(s).appendTo(i)}o.appendTo(c("#zoom-modal .zoom-wrapper")),n.appendTo(c("#zoom-modal .zoom-wrapper")),c("#zoom-modal .close-button").on("click",function(e){e.preventDefault(),closeModal(c(this).closest(".modal"))})}})}(jQuery);
