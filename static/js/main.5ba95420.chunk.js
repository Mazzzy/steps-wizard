(this["webpackJsonpsteps-wiz-app"]=this["webpackJsonpsteps-wiz-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),i=t(1),c=t.n(i),s=t(6),r=t.n(s),o=t.p+"static/media/default-logo.103b5fa1.svg",l=(t(13),function(){return Object(a.jsx)("header",{children:Object(a.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[Object(a.jsx)("div",{className:"navbar-brand",children:Object(a.jsx)("a",{className:"navbar-item",href:"#",children:Object(a.jsx)("img",{className:"logo-img",src:o,alt:"logo-img"})})}),Object(a.jsx)("div",{className:"navbar-menu",children:Object(a.jsx)("div",{className:"navbar-end",children:Object(a.jsx)("a",{className:"navbar-item is-active",href:"#",children:"Home"})})})]})})}),u=t(3),d=(t(14),function(e){var n=e.children;return Object(a.jsx)("div",{className:"step",children:n})}),j=t(2),b=t(7),m=(t(15),c.a.forwardRef((function(e,n){var t=e.onChange,i=e.onFocus,c=e.textarea,s=void 0!==c&&c,r=Object(b.a)(e,["onChange","onFocus","textarea"]),o=s?"textarea":"input";return Object(a.jsx)(o,Object(j.a)({ref:n,className:"input",onChange:function(e){var n=e.target.value;return t(n)},onFocus:i},r))}))),h=t(4);t(16);var v=function(){var e=function(e){var n=Object(i.useState)(e),t=Object(u.a)(n,2),a=t[0],c=t[1];return[a,function(e,n){c(Object(j.a)(Object(j.a)({},a),{},Object(h.a)({},n,e)))}]}({exam:"",clinic:"",technique:"",findings:"",impressions:""}),n=Object(u.a)(e,2),t=n[0],c=n[1],s=Object(i.useState)(""),r=Object(u.a)(s,2),o=r[0],l=r[1],b=function(e){var n=o===e?"current ":"";return t[e].length>0&&(n+="is-done"),n},v=[{id:"1",title:"Examination",name:"exam"},{id:"2",title:"Clinical History",name:"clinic"},{id:"3",title:"Technique",name:"technique"},{id:"4",title:"Findings",name:"findings"},{id:"5",title:"Impressions",name:"impressions"}].map((function(e,n){return[Object(a.jsxs)("div",{className:"step-item ".concat(b(e.name)),children:[Object(a.jsx)("h3",{children:(null===e||void 0===e?void 0:e.title)||""}),Object(a.jsx)(m,{placeholder:null===e||void 0===e?void 0:e.title,value:t[e.name],onChange:function(n){return function(e,n){c(e,n)}(n,e.name)},onFocus:function(n){return t=e.name,void l(t);var t},textarea:!0})]},"step-item-key-".concat(n))]}));return Object(a.jsxs)("div",{className:"main-contents",children:[Object(a.jsx)(d,{children:0===v.length?Object(a.jsx)("p",{children:"No Steps data available"}):v}),Object(a.jsx)("div",{className:"btn-container",children:Object(a.jsx)("button",{type:"button",className:"button",disabled:!(t.exam.length>0&&t.clinic.length>0&&t.technique.length>0&&t.findings.length>0&&t.impressions.length>0),onClick:function(){alert("Your report has been successfully submitted")},children:"Submit"})})]})},O=(t(17),function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(l,{}),Object(a.jsx)("div",{className:"dashboard-contents",children:Object(a.jsx)(v,{})})]})});t(18);var x=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(O,{})})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.5ba95420.chunk.js.map