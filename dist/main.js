(()=>{var e={426:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(81),a=n.n(r),i=n(645),s=n.n(i)()(a());s.push([e.id,"* {\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n",""]);const o=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],o=0;o<e.length;o++){var c=e[o],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=a(f,r);r.byIndex=o,t.splice(o,0,{identifier:u,updater:v,references:1})}s.push(u)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var o=n(i[s]);t[o].references--}for(var c=r(e,a),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},419:()=>{}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),a=n.n(r),i=n(569),s=n.n(i),o=n(565),c=n.n(o),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=d(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var h=n(419),m=n.n(h);const y=function(){const e=document.getElementById("taskUl");e.innerHTML="";for(let t=0;t<m().length;t+=1){const n=document.createElement("li");m()[t].index=t,!1!==m()[t].complete?(n.innerHTML=`<div>\n            <input id="${m()[t].index} type="checkbox" class="task_check" name="task" checked>\n            <label for="task" id="label">${m()[t].description}</label>\n            </div>\n            <div><i class="far fa-trash-alt" id="trash"></i><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`,n.classList.add("task_li"),n.setAttribute("id",`${m()[t].index}`),n.setAttribute("draggable","true"),e.appendChild(n)):(n.innerHTML=`<div>\n            <input id="${m()[t].index}" type="checkbox" class="task_check" name="task">\n            <label for="task" id="label">${m()[t].description}</label>\n            </div>\n            <div><i class="far fa-trash-alt" id="trash"></i><i class="fas fa-ellipsis-v" id="three_dots"></i></div>`,n.classList.add("task_li"),n.setAttribute("id",`${m()[t].index}`),e.appendChild(n))}};document.querySelectorAll("#trashbin").forEach((e=>{e.addEventListener("click",(()=>{const t=e.parentNode.parentNode.id;e.parentNode.parentNode.remove(),m().splice(t,1),localStorage.setItem("task",JSON.stringify(m())),y(),window.location.reload()}))})),document.getElementById("clear").addEventListener("click",(()=>{const e=m().filter((e=>!1===e.complete));m().splice(0),m().push(...e),localStorage.setItem("task",JSON.stringify(m())),y()})),(0,h.input)(),(0,h.storage)()})()})();