(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(7),r=(c(33),c(34),c(3)),s=(c(35),c(12)),i=c.n(s),j=c(2),l=function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(j.jsx)(a.c,{to:"/people",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},o=function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})},b=function(){return Object(j.jsx)("h1",{className:"title",children:"Page not found"})},h=c(22),d=c(4),u=c(0),O=(c(37),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(e){var t,c,n=e.person,s=Object(r.q)().slug;return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":n.slug===s}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{to:"/people/".concat(n.slug),className:i()({"has-text-danger":"f"===n.sex}),children:n.name})}),Object(j.jsx)("td",{children:n.sex}),Object(j.jsx)("td",{children:n.born}),Object(j.jsx)("td",{children:n.died}),Object(j.jsx)("td",{children:n.mother?Object(j.jsx)(a.b,{to:"/people/".concat(null===(t=n.mother)||void 0===t?void 0:t.slug),className:"has-text-danger",children:n.motherName}):n.motherName||"-"}),Object(j.jsx)("td",{children:n.father?Object(j.jsx)(a.b,{to:"/people/".concat(null===(c=n.father)||void 0===c?void 0:c.slug),children:n.fatherName}):n.fatherName||"-"})]})},p=function(e){var t=e.people;return Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(m,{person:e},e.slug)}))})]})},f=function(){var e=Object(u.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(!1),r=Object(d.a)(a,2),s=r[0],i=r[1],l=Object(u.useState)(!0),o=Object(d.a)(l,2),b=o[0],m=o[1];return Object(u.useEffect)((function(){x().then((function(e){var t=e.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{mother:e.find((function(e){return e.name===e.motherName||null})),father:e.find((function(e){return e.name===e.fatherName||null}))})}));n(t)})).catch((function(){return i(!0)})).finally((function(){return m(!1)}))}),[]),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[b&&Object(j.jsx)(O,{}),!b&&s&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!b&&!s&&!c.length&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!b&&!s&&!!c.length&&Object(j.jsx)(p,{people:c})]})})},v=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)(f,{})]})},g=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(l,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(o,{})}),Object(j.jsx)(r.b,{path:"/home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.b,{path:"/people",element:Object(j.jsx)(v,{}),children:Object(j.jsx)(r.b,{path:":slug"})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(b,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(g,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.91961d98.chunk.js.map