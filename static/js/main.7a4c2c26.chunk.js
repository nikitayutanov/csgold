(this.webpackJsonpcases=this.webpackJsonpcases||[]).push([[0],{21:function(e,t,n){},28:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);n(21);var c=n(0),a=n.n(c),s=n(19),i=n.n(s),o=n(8),r=n(12),l=n(2),m=(n(28),n.p+"static/media/logo.d12f424a.png"),j=n(1);var u=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("div",{className:"container header__container",children:Object(j.jsx)(o.b,{to:"/",className:"logo",children:Object(j.jsx)("img",{src:m,alt:"csgold logo",className:"logo__image"})})})})},d=(n(33),(new Date).getFullYear());var f=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("div",{className:"container footer__container",children:Object(j.jsxs)("small",{className:"footer__copyright",children:["\xa9 ",d," csgold. All rights reserved"]})})})},g=n(9),b=(n(34),n(17)),h=(n(35),n(10)),O=n.n(h),v=(n(36),["Driver Gloves","Specialist Gloves","Moto Gloves","Driver Gloves","Sport Gloves"]);var _=function(e){var t=e.item,n=e.type,c=e.setIsLoading,a=e.loadedImages,s=e.imagesAmount,i=t.name,o=t.skin,r=t.imageUrl,l=t.marketName,m="gloves"===n&&!v.includes(i),u=!o,d="https://community.akamai.steamstatic.com/economy/image/".concat(r,"/360fx360f"),f=O()(i,o,"image"),b=O()("list__item","item",n,{"knife--vanilla":u,"gloves--short":m}),h=function(){a.current++,a.current===s&&c(!1)};return Object(j.jsx)("li",{className:b,children:Object(j.jsxs)("a",{href:function(){var e="https://steamcommunity.com/market/search?category_730_";if("knife"===n)return u?"https://steamcommunity.com/market/listings/730/%E2%98%85%20".concat(i):"".concat(e,"Weapon%5B%5D=tag_weapon_").concat(l,"&q=").concat(o);var t=i.split(" "),c=Object(g.a)(t,1)[0];return"".concat(e,"Type%5B0%5D=tag_Type_Hands&q=").concat(c,"+").concat(o)}(),className:"list__link",target:"_blank",rel:"noopener noreferrer nofollow",children:[Object(j.jsx)("img",{src:d,alt:f,className:"item__image ".concat(n,"__image"),onLoad:h,onError:h}),Object(j.jsxs)("p",{className:"item__text ".concat(n,"__text"),children:[Object(j.jsx)("span",{className:"item__name ".concat(n,"__name"),children:i}),o&&Object(j.jsx)("span",{className:"item__skin ".concat(n,"__skin"),children:o})]})]})})},x=["gamma","chroma","spectrum","prisma"];var p=function(e){var t,n=e.isLoading,a=e.setIsLoading,s=Object(c.useState)([]),i=Object(g.a)(s,2),o=i[0],r=i[1],m=Object(c.useRef)(0),u=Object(l.g)().id.toLowerCase().split("-"),d=u.splice(u.length-1,1),f=Object(g.a)(d,1)[0],h=u.join(" "),v="knives"===f,p=x.includes(h);Object(c.useEffect)((function(){!function(){var e="https://gist.githubusercontent.com/nikitayutanov/599f3f095371bbd291287894ad8b5678/raw/csgold-".concat(f,"-data.json");a(!0),fetch(e).then((function(e){return e.json()})).then((function(e){var t=e[Object.keys(e)[0]];r(t.filter((function(e){return e.collection.toLowerCase().includes(h)})))})).catch((function(e){return console.log("Something went wrong! ".concat(e))}))}()}),[f,h,a]);var N="knives-list--".concat(p?"other":"original","-finishes"),k=O()("list","items-list","".concat(f,"-list"),(t={},Object(b.a)(t,N,v),Object(b.a)(t,"list--hidden",n),t));return Object(j.jsx)("ul",{className:k,children:function(){var e=v?"knife":f;return o.map((function(t,n){return Object(j.jsx)(_,{item:t,type:e,setIsLoading:a,loadedImages:m,imagesAmount:o.length},n)}))}()})};n(37),n(38);var N=function(e){var t=e.name,n=e.imageUrl,c=e.type,a=e.collection,s=e.setIsLoading,i=e.loadedImages,r=e.imagesAmount,l="https://community.akamai.steamstatic.com/economy/image/".concat(n,"/250fx200f"),m="".concat(t," image"),u=a.toLowerCase().split(" ").join("-"),d=function(){i.current++,i.current===r&&s(!1)};return Object(j.jsx)("li",{className:"list__item case",children:Object(j.jsxs)(o.b,{to:"/".concat(u,"-").concat(c),className:"list__link",children:[Object(j.jsx)("img",{src:l,alt:m,className:"case__image",onLoad:d,onError:d}),Object(j.jsx)("span",{className:"case__name",children:t})]})})};var k=function(e){var t=e.isLoading,n=e.setIsLoading,a=Object(c.useState)([]),s=Object(g.a)(a,2),i=s[0],o=s[1],r=Object(c.useRef)(0);Object(c.useEffect)((function(){n(!0),fetch("https://gist.githubusercontent.com/nikitayutanov/e9b76e5d75293b2051693fac275a9cee/raw/csgold-cases-data.json").then((function(e){return e.json()})).then((function(e){var t=e.cases;o(t)})).catch((function(e){return console.log("Something went wrong! ".concat(e))}))}),[n]);var l=O()("list","cases-list",{"list--hidden":t});return Object(j.jsx)("ul",{className:l,children:i.map((function(e,t){var c=e.name,a=e.imageUrl,s=e.type,o=e.collection,l=e.finishes;return Object(j.jsx)(N,{name:c,imageUrl:a,type:s,collection:o,finishes:l,setIsLoading:n,loadedImages:r,imagesAmount:i.length},t)}))})};n(39);var y=function(){return Object(j.jsx)("div",{className:"loader"})};var L=function(){var e=Object(c.useState)(!1),t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)("main",{className:"main",children:Object(j.jsxs)("div",{className:"container main__container",children:[n&&Object(j.jsx)(y,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(k,{isLoading:n,setIsLoading:a})}}),Object(j.jsx)(l.a,{path:"/:id",render:function(){return Object(j.jsx)(p,{isLoading:n,setIsLoading:a})}})]})]})})};var w=function(){var e=Object(l.f)();return Object(c.useEffect)((function(){var t=e.pathname;Object(r.b)(t)}),[e]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)(L,{}),Object(j.jsx)(f,{})]})};r.a.initialize("UA-170474725-1"),i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(w,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.7a4c2c26.chunk.js.map