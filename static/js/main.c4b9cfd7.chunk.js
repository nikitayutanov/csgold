(this.webpackJsonpcases=this.webpackJsonpcases||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);n(25);var c=n(1),a=n.n(c),s=n(22),i=n.n(s),r=n(9),o=n(16),l=n(2),m=(n(32),n.p+"static/media/logo.d12f424a.png"),j=n(0);var u=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("div",{className:"container header__container",children:Object(j.jsx)(r.b,{to:"/",className:"logo",children:Object(j.jsx)("img",{src:m,alt:"csgold logo",className:"logo__image"})})})})},b=(n(37),(new Date).getFullYear());var d=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("div",{className:"container footer__container",children:Object(j.jsxs)("small",{className:"footer__copyright",children:["\xa9 ",b," csgold. All rights reserved"]})})})},f=n(8),O=(n(38),n(13)),h=n(11),g=(n(39),n(10)),v=n.n(g),_=(n(40),["Driver Gloves","Specialist Gloves","Moto Gloves","Driver Gloves","Sport Gloves"]);var x=function(e){var t=e.item,n=e.type,c=e.setIsLoading,a=e.loadedImages,s=e.imagesAmount,i=t.name,r=t.skin,o=t.imageUrl,l=t.marketName,m="gloves"===n&&!_.includes(i),u=!r,b="https://community.akamai.steamstatic.com/economy/image/".concat(o,"/360fx360f"),d=v()(i,r,"image"),O=v()("list__item","item",n,{"knife--vanilla":u,"gloves--short":m}),h=function(){a.current++,a.current===s&&c(!1)};return Object(j.jsx)("li",{className:O,children:Object(j.jsxs)("a",{href:function(){var e="https://steamcommunity.com/market/search?category_730_";if("knife"===n)return u?"https://steamcommunity.com/market/listings/730/%E2%98%85%20".concat(i):"".concat(e,"Weapon%5B%5D=tag_weapon_").concat(l,"&q=").concat(r);var t=i.split(" "),c=Object(f.a)(t,1)[0];return"".concat(e,"Type%5B0%5D=tag_Type_Hands&q=").concat(c,"+").concat(r)}(),className:"list__link",target:"_blank",rel:"noopener noreferrer nofollow",children:[Object(j.jsx)("img",{src:b,alt:d,className:"item__image ".concat(n,"__image"),onLoad:h,onError:h}),Object(j.jsxs)("p",{className:"item__text ".concat(n,"__text"),children:[Object(j.jsx)("span",{className:"item__name ".concat(n,"__name"),children:i}),r&&Object(j.jsx)("span",{className:"item__skin ".concat(n,"__skin"),children:r})]})]})})};n(41);var p=function(){return Object(j.jsx)("div",{className:"loader"})},N=["gamma","chroma","spectrum","prisma"];var k=function(e){var t,n=e.items,a=e.setItems,s=Object(c.useState)(!0),i=Object(f.a)(s,2),r=i[0],o=i[1],m=Object(c.useRef)(0),u=Object(l.g)().id.toLowerCase().split("-"),b=u.splice(u.length-1,1),d=Object(f.a)(b,1)[0],g=u.join(" "),_=n[d],k=null===_||void 0===_?void 0:_.length,y="knives"===d,S=N.includes(g);Object(c.useEffect)((function(){k||function(){var e="https://gist.githubusercontent.com/nikitayutanov/599f3f095371bbd291287894ad8b5678/raw/csgold-".concat(d,"-data.json");fetch(e).then((function(e){return e.json()})).then((function(e){var t=e[d];a((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(O.a)({},d,t))}))})).catch((function(e){return console.log("Something went wrong! ".concat(e))}))}()}),[n,a,d,k]);var w="knives-list--".concat(S?"other":"original","-finishes"),I=v()("list","items-list","".concat(d,"-list"),(t={},Object(O.a)(t,w,y),Object(O.a)(t,"list--hidden",r),t));return Object(j.jsxs)("div",{className:"container main__container main__container--items",children:[r&&Object(j.jsx)(p,{}),Object(j.jsx)("ul",{className:I,children:k&&function(){var e=_.filter((function(e){return e.collection.toLowerCase().includes(g)})),t=y?"knife":d;return e.map((function(n,c){return Object(j.jsx)(x,{item:n,type:t,setIsLoading:o,loadedImages:m,imagesAmount:e.length},c)}))}()})]})},y=n(24);n(42),n(43);var S=function(e){var t=e.name,n=e.imageUrl,c=e.type,a=e.collection,s=e.setIsLoading,i=e.loadedImages,o=e.imagesAmount,l="https://community.akamai.steamstatic.com/economy/image/".concat(n,"/250fx200f"),m="".concat(t," image"),u=a.toLowerCase().split(" ").join("-"),b=function(){i.current++,i.current===o&&s(!1)};return Object(j.jsx)("li",{className:"list__item case",children:Object(j.jsxs)(r.b,{to:"/".concat(u,"-").concat(c),className:"list__link",children:[Object(j.jsx)("img",{src:l,alt:m,className:"case__image",onLoad:b,onError:b}),Object(j.jsx)("span",{className:"case__name",children:t})]})})};n(44);var w=function(e){var t=e.sort,n=e.setSort,c=t.value,a=t.isAscending,s=v()("bar__button",{"bar__button--ascending":a});return Object(j.jsxs)("div",{className:"bar",children:[Object(j.jsx)("label",{className:"bar__label",htmlFor:"select",children:"Sort by:"}),Object(j.jsxs)("select",{className:"bar__select",id:"select",value:c,onChange:function(e){var t=e.target.value;n((function(e){return Object(h.a)(Object(h.a)({},e),{},{value:t})}))},children:[Object(j.jsx)("option",{value:"date",children:"Date"}),Object(j.jsx)("option",{value:"name",children:"Name"})]}),Object(j.jsx)("button",{className:s,onClick:function(){n((function(e){return Object(h.a)(Object(h.a)({},e),{},{isAscending:!a})}))}})]})};var I=function(e){var t=e.cases,n=e.setCases,a=e.sort,s=e.setSort,i=Object(c.useState)(!0),r=Object(f.a)(i,2),o=r[0],l=r[1],m=Object(c.useRef)(0);Object(c.useEffect)((function(){t.length||fetch("https://gist.githubusercontent.com/nikitayutanov/e9b76e5d75293b2051693fac275a9cee/raw/csgold-cases-data.json").then((function(e){return e.json()})).then((function(e){var t=e.cases;n(t)})).catch((function(e){return console.log("Something went wrong! ".concat(e))}))}),[t,n]);var u=v()("list","cases-list",{"list--hidden":o});return Object(j.jsxs)("div",{className:"container main__container main__container--cases",children:[o&&Object(j.jsx)(p,{}),!o&&Object(j.jsx)(w,{sort:a,setSort:s}),Object(j.jsx)("ul",{className:u,children:function(){var e=Object(y.a)(t),n=a.value,c=a.isAscending,s="name"===n,i="date"===n,r=function(e,t){return e.name.localeCompare(t.name)},o=function(e,t){return e.date-t.date};return s&&c?e.sort(r):s&&!c?e.sort(r).reverse():i&&c?e.sort(o):i&&!c&&e.sort(o).reverse(),e}().map((function(e,n){var c=e.name,a=e.imageUrl,s=e.type,i=e.collection,r=e.finishes;return Object(j.jsx)(S,{name:c,imageUrl:a,type:s,collection:i,finishes:r,setIsLoading:l,loadedImages:m,imagesAmount:t.length},n)}))})]})};var A=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({}),i=Object(f.a)(s,2),r=i[0],o=i[1],m=Object(c.useState)({value:"date",isAscending:!0}),u=Object(f.a)(m,2),b=u[0],d=u[1];return Object(j.jsx)("main",{className:"main",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(I,{cases:n,setCases:a,sort:b,setSort:d})}}),Object(j.jsx)(l.a,{path:"/:id",render:function(){return Object(j.jsx)(k,{items:r,setItems:o})}})]})})};var L=function(){var e=Object(l.f)();return Object(c.useEffect)((function(){var t=e.pathname;Object(o.b)(t)}),[e]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)(A,{}),Object(j.jsx)(d,{})]})};o.a.initialize("UA-170474725-1"),i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(r.a,{children:Object(j.jsx)(L,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c4b9cfd7.chunk.js.map