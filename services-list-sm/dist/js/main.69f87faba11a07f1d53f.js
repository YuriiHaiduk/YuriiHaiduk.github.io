(()=>{var e={1340:(e,n,t)=>{"use strict";t(4253)},4253:()=>{var e,n,t;e=document.querySelectorAll(".brand-info-list-item"),n=document.querySelector(".main-info-content"),document.querySelectorAll(".tab-content-info .nav-link"),t=document.querySelector(".start-menu"),e.forEach((function(e){e.addEventListener("click",(function(r){r.preventDefault(),n.classList.add("open"),t.classList.add("close"),document.querySelector(".tab-content-info .nav-link#".concat(e.dataset.openInfo)).click()}))}))}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.x=e=>{},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0},n=[[1202,202],[1340,202]],r=e=>{},o=(o,a)=>{for(var l,c,[u,i,s,f]=a,d=0,p=[];d<u.length;d++)c=u[d],t.o(e,c)&&e[c]&&p.push(e[c][0]),e[c]=0;for(l in i)t.o(i,l)&&(t.m[l]=i[l]);for(s&&s(t),o&&o(a);p.length;)p.shift()();return f&&n.push.apply(n,f),r()},a=self.webpackChunk=self.webpackChunk||[];function l(){for(var r,o=0;o<n.length;o++){for(var a=n[o],l=!0,c=1;c<a.length;c++){var u=a[c];0!==e[u]&&(l=!1)}l&&(n.splice(o--,1),r=t(t.s=a[0]))}return 0===n.length&&(t.x(),t.x=e=>{}),r}a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var c=t.x;t.x=()=>(t.x=c||(e=>{}),(r=l)())})(),t.x()})();