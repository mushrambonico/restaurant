!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);const o=function(){const e=document.getElementById("main-nav"),n=Array.from(e.childNodes);for(let e=0;e<n.length;e++)n[e].classList.remove("clicked-btn")},r=function(e){e.target.classList.toggle("clicked-btn")},a=function(){const e=Array.from(content.childNodes);for(let n=0;n<e.length;n++)"main-header"!=e[n].id&&"main-nav"!=e[n].id&&content.removeChild(e[n])};function i(){const e=document.getElementById("content"),n=document.createElement("div");n.id="img-container",n.classList.toggle("regular-div-margin");const t=document.createElement("div"),o=document.createElement("p");t.id="about",t.classList.toggle("regular-div-margin"),o.innerText="Welcome to our Stuffed Pizza House! We deliver tasty stuffed pizzas to (almost) anywhere with our high-tech, eletric powered drones. \n\n Order now and mitigate environment damage caused by other Pizza Companies delivery services! As a bonus, eletric powered drones make almost no noise. Imagine a world where your street isn't polluted by thousand fossil powered vehicles making vrum vrum everyday? Yeah, i'd take that! If that wasn't enough, our Stuffed Pizzas are also between the most tasty, better and cheaper pizzas! Fine, don't believe me. But search Pizza rankings on iFood, TripAdvisor or RateMyPizza.\n\n Order now, you will be pleased.",t.append(o),e.append(n,t),console.log("page-rendered")}!function(){const e=document.getElementById("content"),n=document.createElement("header"),t=document.createElement("h1"),o=document.createElement("div");n.id="main-header",n.classList.toggle("regular-div-margin"),t.innerText="Stuffed Pizza House",o.innerText="The most famous pizza man from Lisboa is now delivering pizzas anywhere!",n.append(t,o);const r=document.createElement("nav");r.id="main-nav";const a=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div");c.id="menu-btn",a.id="about-btn",d.id="contact-btn",l.id="area-btn",a.innerText="about",c.innerText="menu",d.innerText="contact",l.innerText="area",a.classList.toggle("clicked-btn"),r.append(a,c,d,l),e.append(n,r),i(),console.log("page-rendered")}();const c=document.getElementById("menu-btn"),d=document.getElementById("contact-btn"),l=document.getElementById("area-btn"),u=document.getElementById("about-btn");c.addEventListener("click",(function(e){const n=document.getElementById("content");o(),r(e),a();const t=document.createElement("div");t.id="content-wrapper",t.classList.toggle("flex-row");const i=document.createElement("div"),c=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div");i.innerText="A 7 inches pizza for one mouth. \n\n                    Available flavours: Pepperoni, Muzzarela 'n Home Special \n\n                    Price: 4$\n                    ",c.innerText="A 10 inches pizza. Small but enough for some. \n\n                        Available flavours: Pepperoni, Muzzarela 'n Home Special \n\n                        Price: 6$\n                        ",d.innerText="A 12 inches pizza. \n\n                        Available flavours: Pepperoni, Muzzarela 'n Home Special \n\n                        Price: 9$\n                        ",l.innerText="A 15 inches stuffed pizza for you, your family and your friends. \n\n                        Available flavours: Pepperoni, Muzzarela 'n Home Special \n\n                        Price: 12$\n                        ",u.innerText="Our beer is made here, it's very tasty and yummy! \n\n                        Price: 3$ \n                        ",t.append(i,c,d,l,u),n.append(t)})),d.addEventListener("click",(function(e){const n=document.getElementById("content");o(),r(e),a();const t=document.createElement("div");t.id="content-wrapper";const i=document.createElement("p");i.innerText="You can contact us on our phone: +1 382 7893 or visit our store located at Mount Pyrus number 387, Greece. \n\n                But remember! Our best services are delivery by drone, you should call us anyway.",t.append(i),n.append(t)})),l.addEventListener("click",(function(e){const n=document.getElementById("content");o(),r(e),a();const t=document.createElement("div");t.id="content-wrapper";const i=document.createElement("p");i.innerText="If you're anywhere on the EU, US, China, Japan or Brazil we can reach your location ASAP with our drones. \n\n                        For any other location, please check our number on contact tab and call us. We may or not be able to deliver your order.",t.append(i),n.append(t)})),u.addEventListener("click",(function(e){document.getElementById("content"),o(),r(e),a(),i()})),console.log("Its working")}]);