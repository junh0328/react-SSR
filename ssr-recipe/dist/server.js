!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=7)}([function(e,n){e.exports=require("react/jsx-runtime")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("fs")},function(e,n,t){"use strict";t.r(n);var r=t(0),i=(t(2),t(3)),c=t.n(i),o=t(4),s=t.n(o),u=t(1),l=function(){return Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(u.Link,{to:"/red",children:"Red"})}),Object(r.jsx)("li",{children:Object(r.jsx)(u.Link,{to:"/blue",children:"Blue"})})]})},a=function(){return Object(r.jsx)("div",{className:"Red",children:"Red"})},d=function(){return Object(r.jsx)("div",{className:"Blue",children:"Blue"})};var f=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsx)("ht",{}),Object(r.jsx)(u.Route,{path:"/red",component:a}),Object(r.jsx)(u.Route,{path:"/blue",component:d})]})},p=t(5),j=t.n(p),b=t(6),x=t.n(b),h=JSON.parse(x.a.readFileSync(j.a.resolve("./build/asset-manifest.json"),"utf8")),m=Object.keys(h.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(h.files[e],'"><\/script>')})).join("");var v=s()(),O=s.a.static(j.a.resolve("./build"),{index:!1});v.use(O),v.use((function(e,n,t){var i=Object(r.jsx)(u.StaticRouter,{location:e.url,context:{},children:Object(r.jsx)(f,{})}),o=c.a.renderToString(i);n.send(function(e,n){return'<!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="utf-8" />\n        <link rel="shortcut icon" href="/favicon.ico" />\n        <meta\n          name="viewport"\n          content="width=device-width,initial-scale=1,shrink-to-fit=no"\n        />\n        <meta name="theme-color" content="#000000" />\n        <title>React App</title>\n        <link href="'.concat(h.files["main.css"],'" rel="stylesheet" />\n      </head>\n      <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id="root">\n          ').concat(e,'\n        </div>\n        <script src="').concat(h.files["runtime-main.js"],'"><\/script>\n        ').concat(m,'\n        <script src="').concat(h.files["main.js"],'"><\/script>\n      </body>\n      </html>\n        ')}(o))})),v.listen(5e3,(function(){console.log("Server is listening on port : ".concat(5e3))}));var y=c.a.renderToString(Object(r.jsx)("div",{children:"Hello Server Side Rendering"}));console.log(y)}]);