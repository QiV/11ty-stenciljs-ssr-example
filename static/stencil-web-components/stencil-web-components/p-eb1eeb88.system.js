var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{l(n.next(e))}catch(t){i(t)}}function s(e){try{l(n["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):a(e.value).then(o,s)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(s){o=[6,s];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n="stencil-web-components";var a;var i;var o;var s=false;var l=false;var $=false;var f=false;var u=0;var c=false;var v=typeof window!=="undefined"?window:{};var d=v.CSS;var h=v.document||{head:{}};var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var p=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=function(e){return Promise.resolve(e)};var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b="r";var w="o";var N="s";var R="t";var x="s-id";var S="sty-id";var _="c-id";var T="{visibility:hidden}.hydrated{visibility:inherit}";var C=function(e,t){if(t===void 0){t=""}{return function(){return}}};var L=function(e,t){{return function(){return}}};var A=new WeakMap;var E=function(e,t,r){var n=De.get(e);if(y&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}De.set(e,n)};var k=function(e,t,r,n){var a=j(t.$tagName$);var i=De.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var o=A.get(e);var s=void 0;if(!o){A.set(e,o=new Set)}if(!o.has(a)){if(e.host&&(s=e.querySelector("["+S+'="'+a+'"]'))){s.innerHTML=i}else{if(m.$cssShim$){s=m.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var l=s["s-sc"];if(l){a=l;o=null}}else{s=h.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var M=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=C("attachStyles",t.$tagName$);var i=k(p&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h");if(n&2){r.classList.add(i+"-s")}}a()};var j=function(e,t){return"sc-"+e};var U=function(e){return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{")};var I={};var B=function(e){return e!=null};var O=function(e){e=typeof e;return e==="object"||e==="function"};var P=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var H=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var o=false;var s=false;var l=[];var $=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!O(a)){a=String(a)}if(o&&s){l[l.length-1].$text$+=a}else{l.push(o?z(null,a):a)}s=o}}};$(r);if(t){if(t.name){i=t.name}{var f=t.className||t.class;if(f){t.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,l,W)}var u=z(e,null);u.$attrs$=t;if(l.length>0){u.$children$=l}{u.$name$=i}return u}));var z=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$name$=null}return r};var V=e("H",{});var q=function(e){return e&&e.$tag$===V};var W={forEach:function(e,t){return e.map(D).forEach(t)},map:function(e,t){return e.map(D).map(t).map(F)}};var D=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var F=function(e){var t=z(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var G=function(e,t,r,n,a,i){if(r!==n){var o=ze(e,t);var s=t.toLowerCase();if(t==="class"){var l=e.classList;var $=J(r);var f=J(n);l.remove.apply(l,$.filter((function(e){return e&&!f.includes(e)})));l.add.apply(l,f.filter((function(e){return e&&!$.includes(e)})))}else if(!o&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(ze(v,s)){t=s.slice(2)}else{t=s[2]+t.slice(3)}if(r){m.rel(e,t,r,false)}if(n){m.ael(e,t,n,false)}}else{var u=O(n);if((o||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(t==="list"){o=false}else if(r==null||e[t]!=c){e[t]=c}}else{e[t]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!o||i&4||a)&&!u){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var Q=/\s/;var J=function(e){return!e?[]:e.split(Q)};var K=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||I;var o=t.$attrs$||I;{for(n in i){if(!(n in o)){G(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){G(a,n,i[n],o[n],r,t.$flags$)}};var X=function(e,t,r,n){var l=t.$children$[r];var u=0;var c;var v;var d;if(!s){$=true;if(l.$tag$==="slot"){if(a){n.classList.add(a+"-s")}l.$flags$|=l.$children$?2:1}}if(l.$text$!==null){c=l.$elm$=h.createTextNode(l.$text$)}else if(l.$flags$&1){c=l.$elm$=h.createTextNode("")}else{c=l.$elm$=h.createElement(l.$flags$&2?"slot-fb":l.$tag$);{K(null,l,f)}if(B(a)&&c["s-si"]!==a){c.classList.add(c["s-si"]=a)}if(l.$children$){for(u=0;u<l.$children$.length;++u){v=X(e,l,u,c);if(v){c.appendChild(v)}}}}{c["s-hn"]=o;if(l.$flags$&(2|1)){c["s-sr"]=true;c["s-cr"]=i;c["s-sn"]=l.$name$||"";d=e&&e.$children$&&e.$children$[r];if(d&&d.$tag$===l.$tag$&&e.$elm$){Y(e.$elm$,false)}}}return c};var Y=function(e,t){m.$flags$|=1;var r=e.childNodes;for(var n=r.length-1;n>=0;n--){var a=r[n];if(a["s-hn"]!==o&&a["s-ol"]){ae(a).insertBefore(a,ne(a));a["s-ol"].remove();a["s-ol"]=undefined;$=true}if(t){Y(a,t)}}m.$flags$&=~1};var Z=function(e,t,r,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var l;if(s.shadowRoot&&s.tagName===o){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){l=X(null,r,a,e);if(l){n[a].$elm$=l;s.insertBefore(l,ne(t))}}}};var ee=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;{l=true;if(a["s-ol"]){a["s-ol"].remove()}else{Y(a,true)}}a.remove()}}};var te=function(e,t,r,n){var a=0;var i=0;var o=t.length-1;var s=t[0];var l=t[o];var $=n.length-1;var f=n[0];var u=n[$];var c;while(a<=o&&i<=$){if(s==null){s=t[++a]}else if(l==null){l=t[--o]}else if(f==null){f=n[++i]}else if(u==null){u=n[--$]}else if(re(s,f)){ie(s,f);s=t[++a];f=n[++i]}else if(re(l,u)){ie(l,u);l=t[--o];u=n[--$]}else if(re(s,u)){if(s.$tag$==="slot"||u.$tag$==="slot"){Y(s.$elm$.parentNode,false)}ie(s,u);e.insertBefore(s.$elm$,l.$elm$.nextSibling);s=t[++a];u=n[--$]}else if(re(l,f)){if(s.$tag$==="slot"||u.$tag$==="slot"){Y(l.$elm$.parentNode,false)}ie(l,f);e.insertBefore(l.$elm$,s.$elm$);l=t[--o];f=n[++i]}else{{c=X(t&&t[i],r,i,e);f=n[++i]}if(c){{ae(s.$elm$).insertBefore(c,ne(s.$elm$))}}}}if(a>o){Z(e,n[$+1]==null?null:n[$+1].$elm$,r,n,i,$)}else if(i>$){ee(t,a,o)}};var re=function(e,t){if(e.$tag$===t.$tag$){if(e.$tag$==="slot"){return e.$name$===t.$name$}return true}return false};var ne=function(e){return e&&e["s-ol"]||e};var ae=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ie=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var o=t.$text$;var s;if(o===null){{if(i==="slot");else{K(e,t,f)}}if(n!==null&&a!==null){te(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}Z(r,null,t,a,0,a.length-1)}else if(n!==null){ee(n,0,n.length-1)}}else if(s=r["s-cr"]){s.parentNode.textContent=o}else if(e.$text$!==o){r.data=o}};var oe=function(e){var t=e.childNodes;var r;var n;var a;var i;var o;var s;for(n=0,a=t.length;n<a;n++){r=t[n];if(r.nodeType===1){if(r["s-sr"]){o=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){if(t[i]["s-hn"]!==r["s-hn"]){s=t[i].nodeType;if(o!==""){if(s===1&&o===t[i].getAttribute("slot")){r.hidden=true;break}}else{if(s===1||s===3&&t[i].textContent.trim()!==""){r.hidden=true;break}}}}}oe(r)}}};var se=[];var le=function(e){var t;var r;var n;var a;var i;var o;var s=0;var $=e.childNodes;var f=$.length;for(;s<f;s++){t=$[s];if(t["s-sr"]&&(r=t["s-cr"])){n=r.parentNode.childNodes;a=t["s-sn"];for(o=n.length-1;o>=0;o--){r=n[o];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==t["s-hn"]){if($e(r,a)){i=se.find((function(e){return e.$nodeToRelocate$===r}));l=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=t}else{se.push({$slotRefNode$:t,$nodeToRelocate$:r})}if(r["s-sr"]){se.map((function(e){if($e(e.$nodeToRelocate$,r["s-sn"])){i=se.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!se.some((function(e){return e.$nodeToRelocate$===r}))){se.push({$nodeToRelocate$:r})}}}}if(t.nodeType===1){le(t)}}};var $e=function(e,t){if(e.nodeType===1){if(e.getAttribute("slot")===null&&t===""){return true}if(e.getAttribute("slot")===t){return true}return false}if(e["s-sn"]===t){return true}return t===""};var fe=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||z(null,null);var u=q(t)?t:H(null,null,t);o=r.tagName;u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=f.$elm$=r.shadowRoot||r;{a=r["s-sc"]}{i=r["s-cr"];s=p&&(n.$flags$&1)!==0;l=false}ie(f,u);{m.$flags$|=1;if($){le(u.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<se.length;w++){c=se[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}for(w=0;w<se.length;w++){c=se[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}}if(l){oe(u.$elm$)}m.$flags$&=~1;se.length=0}};var ue=function(e){return Oe(e).$hostElement$};var ce=e("c",(function(e,t,r){var n=ue(e);return{emit:function(e){return ve(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var ve=function(e,t,r){var n=new CustomEvent(t,r);e.dispatchEvent(n);return n};var de=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var he=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}de(e,e.$ancestorComponent$);var r=function(){return me(e,t)};return et(r)};var me=function(e,t){var r=C("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{a=Ne(n,"componentWillLoad")}}else{{a=Ne(n,"componentWillUpdate")}}r();return Re(a,(function(){return pe(e,n,t)}))};var pe=function(e,t,r){var n=e.$hostElement$;var a=C("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(r){M(e)}var o=C("render",e.$cmpMeta$.$tagName$);{{fe(e,ge(t))}}if(m.$cssShim$){m.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}o();a();{var s=n["s-p"];var l=function(){return ye(e)};if(s.length===0){l()}else{Promise.all(s).then(l);e.$flags$|=4;s.length=0}}};var ge=function(e){try{e=e.render()}catch(t){Ve(t)}return e};var ye=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=C("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{xe(r)}{Ne(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){we()}}}else{{Ne(a,"componentDidUpdate")}n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ze((function(){return he(e,false)}))}e.$flags$&=~(4|512)}};var be=function(e){{var t=Oe(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){he(t,false)}return r}};var we=function(e){{xe(h.documentElement)}{m.$flags$|=2}Ze((function(){return ve(v,"appload",{detail:{namespace:n}})}))};var Ne=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){Ve(n)}}return undefined};var Re=function(e,t){return e&&e.then?e.then(t):t()};var xe=function(e){return e.classList.add("hydrated")};var Se=function(e,t,r,n){var a=C("hydrateClient",t);var i=e.shadowRoot;var o=[];var s=[];var l=i?[]:null;var $=n.$vnode$=z(t,null);if(!m.$orgLocNodes$){Te(h.body,m.$orgLocNodes$=new Map)}e[x]=r;e.removeAttribute(x);_e($,o,s,l,e,e,r);o.map((function(e){var r=e.$hostId$+"."+e.$nodeId$;var n=m.$orgLocNodes$.get(r);var a=e.$elm$;if(n&&p&&n["s-en"]===""){n.parentNode.insertBefore(a,n.nextSibling)}if(!i){a["s-hn"]=t;if(n){a["s-ol"]=n;a["s-ol"]["s-nr"]=a}}m.$orgLocNodes$.delete(r)}));if(i){l.map((function(e){if(e){i.appendChild(e)}}))}a()};var _e=function(e,t,r,n,a,i,o){var s;var l;var $;var f;if(i.nodeType===1){s=i.getAttribute(_);if(s){l=s.split(".");if(l[0]===o||l[0]==="0"){$={$flags$:0,$hostId$:l[0],$nodeId$:l[1],$depth$:l[2],$index$:l[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null};t.push($);i.removeAttribute(_);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;e=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}for(f=i.childNodes.length-1;f>=0;f--){_e(e,t,r,n,a,i.childNodes[f],o)}if(i.shadowRoot){for(f=i.shadowRoot.childNodes.length-1;f>=0;f--){_e(e,t,r,n,a,i.shadowRoot.childNodes[f],o)}}}else if(i.nodeType===8){l=i.nodeValue.split(".");if(l[1]===o||l[1]==="0"){s=l[0];$={$flags$:0,$hostId$:l[1],$nodeId$:l[2],$depth$:l[3],$index$:l[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null};if(s===R){$.$elm$=i.nextSibling;if($.$elm$&&$.$elm$.nodeType===3){$.$text$=$.$elm$.textContent;t.push($);i.remove();if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$;if(n&&$.$depth$==="0"){n[$.$index$]=$.$elm$}}}else if($.$hostId$===o){if(s===N){$.$tag$="slot";if(l[5]){i["s-sn"]=$.$name$=l[5]}else{i["s-sn"]=""}i["s-sr"]=true;if(n){$.$elm$=h.createElement($.$tag$);if($.$name$){$.$elm$.setAttribute("name",$.$name$)}i.parentNode.insertBefore($.$elm$,i);i.remove();if($.$depth$==="0"){n[$.$index$]=$.$elm$}}r.push($);if(!e.$children$){e.$children$=[]}e.$children$[$.$index$]=$}else if(s===b){if(n){i.remove()}else{a["s-cr"]=i;i["s-cn"]=true}}}}}else if(e&&e.$tag$==="style"){var u=z(null,i.textContent);u.$elm$=i;u.$index$="0";e.$children$=[u]}};var Te=function(e,t){if(e.nodeType===1){var r=0;for(;r<e.childNodes.length;r++){Te(e.childNodes[r],t)}if(e.shadowRoot){for(r=0;r<e.shadowRoot.childNodes.length;r++){Te(e.shadowRoot.childNodes[r],t)}}}else if(e.nodeType===8){var n=e.nodeValue.split(".");if(n[0]===w){t.set(n[1]+"."+n[2],e);e.nodeValue="";e["s-en"]=n[3]}}};var Ce=function(e,t){if(e!=null&&!O(e)){if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var Le=function(e,t){return Oe(e).$instanceValues$.get(t)};var Ae=function(e,t,r,n){var a=Oe(e);var i=a.$instanceValues$.get(t);var o=a.$flags$;var s=a.$lazyInstance$;r=Ce(r,n.$members$[t][0]);if((!(o&8)||i===undefined)&&r!==i){a.$instanceValues$.set(t,r);if(s){if((o&(2|16))===2){he(a,false)}}}};var Ee=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return Le(this,n)},set:function(e){Ae(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;m.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n}))}}return e};var ke=function(e,n,a,i,o){return __awaiter(r,void 0,void 0,(function(){var e,r,i,s,l,$,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;o=We(a);if(!o.then)return[3,2];e=L();return[4,o];case 1:o=u.sent();e();u.label=2;case 2:if(!o.isProxied){Ee(o,a,2);o.isProxied=true}r=C("createInstance",a.$tagName$);{n.$flags$|=8}try{new o(n)}catch(c){Ve(c)}{n.$flags$&=~8}r();i=j(a.$tagName$);if(!(!De.has(i)&&o.style))return[3,5];s=C("registerStyles",a.$tagName$);l=o.style;if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-bba2f00f.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=u.sent();u.label=4;case 4:E(i,l,!!(a.$flags$&1));s();u.label=5;case 5:$=n.$ancestorComponent$;f=function(){return he(n,true)};if($&&$["s-rc"]){$["s-rc"].push(f)}else{f()}return[2]}}))}))};var Me=function(e){if((m.$flags$&1)===0){var t=Oe(e);var r=t.$cmpMeta$;var n=C("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;var a=void 0;{a=e.getAttribute(x);if(a){if(p&&r.$flags$&1){var i=k(e.shadowRoot,r);e.classList.remove(i+"-h",i+"-s")}Se(e,r.$tagName$,a,t)}}if(!a){if(r.$flags$&(4|8)){je(e)}}{var o=e;while(o=o.parentNode||o.host){if(o.nodeType===1&&o.hasAttribute("s-id")&&o["s-p"]||o["s-p"]){de(t,t.$ancestorComponent$=o);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Ze((function(){return ke(e,t,r)}))}}n()}};var je=function(e){var t=e["s-cr"]=h.createComment("");t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var Ue=function(e){if((m.$flags$&1)===0){var t=Oe(e);var r=t.$lazyInstance$;if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Ne(r,"componentDidUnload")}}};var Ie=e("b",(function(e,t){if(t===void 0){t={}}var r=C();var n=[];var a=t.exclude||[];var i=v.customElements;var o=h.head;var s=o.querySelector("meta[charset]");var l=h.createElement("style");var $=[];var f=h.querySelectorAll("["+S+"]");var u;var c=true;var d=0;Object.assign(m,t);m.$resourcesUrl$=new URL(t.resourcesUrl||"./",h.baseURI).href;{if(t.syncQueue){m.$flags$|=4}}{m.$flags$|=2}{for(;d<f.length;d++){E(f[d].getAttribute(S),U(f[d].innerHTML),true)}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}if(!p&&r.$flags$&1){r.$flags$|=8}var o=r.$tagName$;var s=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;He(t,r);if(r.$flags$&1){if(p){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if(c){$.push(this)}else{m.jmp((function(){return Me(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return Ue(e)}))};t.prototype.forceUpdate=function(){be(this)};t.prototype.componentOnReady=function(){return Oe(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleIds$=e[0];if(!a.includes(o)&&!i.get(o)){n.push(o);i.define(o,Ee(s,r,1))}}))}));{l.innerHTML=n+T;l.setAttribute("data-styles","");o.insertBefore(l,s?s.nextSibling:o.firstChild)}c=false;if($.length){$.map((function(e){return e.connectedCallback()}))}else{{m.jmp((function(){return u=setTimeout(we,30)}))}}r()}));var Be=new WeakMap;var Oe=function(e){return Be.get(e)};var Pe=e("r",(function(e,t){return Be.set(t.$lazyInstance$=e,t)}));var He=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Be.set(e,r)};var ze=function(e,t){return t in e};var Ve=function(e){return console.error(e)};var qe=new Map;var We=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=qe.get(i);if(o){return o[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{qe.set(i,e)}return e[a]}),Ve)};var De=new Map;var Fe=[];var Ge=[];var Qe=[];var Je=function(e,t){return function(r){e.push(r);if(!c){c=true;if(t&&m.$flags$&4){Ze(Ye)}else{m.raf(Ye)}}}};var Ke=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){Ve(r)}}e.length=0};var Xe=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){Ve(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var Ye=function(){{u++}Ke(Fe);{var e=(m.$flags$&6)===2?performance.now()+14*Math.ceil(u*(1/10)):Infinity;Xe(Ge,e);Xe(Qe,e);if(Ge.length>0){Qe.push.apply(Qe,Ge);Ge.length=0}if(c=Fe.length+Ge.length+Qe.length>0){m.raf(Ye)}else{u=0}}};var Ze=function(e){return g().then(e)};var et=Je(Ge,true);var tt=e("a",(function(){if(!(d&&d.supports&&d.supports("color","var(--c)"))){return t.import("./p-3aacad49.system.js").then((function(){if(m.$cssShim$=v.__cssshim){return m.$cssShim$.i()}else{return 0}}))}return g()}));var rt=e("p",(function(){{m.$cssShim$=v.__cssshim}var e=Array.from(h.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var r=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{r.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,v.location.href)).href;{nt(r.resourcesUrl,e)}if(!v.customElements){return t.import("./p-a12694d7.system.js").then((function(){return r}))}}return g(r)}));var nt=function(e,t){var r=P(n);try{v[r]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;v[r]=function(n){var i=new URL(n,e).href;var o=a.get(i);if(!o){var s=h.createElement("script");s.type="module";s.crossOrigin=t.crossOrigin;s.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+r+".m = m;"],{type:"application/javascript"}));o=new Promise((function(e){s.onload=function(){e(v[r].m);s.remove()}}));a.set(i,o);h.head.appendChild(s)}return o}}}}}}));