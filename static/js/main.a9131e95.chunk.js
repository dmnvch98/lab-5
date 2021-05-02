(this["webpackJsonplab-5"]=this["webpackJsonplab-5"]||[]).push([[0],{30:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(12),r=c.n(a),i=(c(30),c(6)),o=c.n(i),l=c(9),u=c(3),j=c(0);function b(e){var t=e.card;return Object(j.jsxs)("div",{className:"news-cards",children:[Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"title",children:Object(j.jsxs)("h3",{children:[" ",t.title," "]})}),Object(j.jsx)("div",{className:"img",children:Object(j.jsx)("img",{src:t.urlToImage,alt:"",width:580,height:300})}),Object(j.jsx)("div",{className:"description",children:Object(j.jsx)("p",{children:t.description})}),Object(j.jsx)("div",{className:"rmb",children:Object(j.jsx)("a",{href:t.url,target:"_blank",children:Object(j.jsx)("button",{className:"read-more-btn btn",children:"Read more"})})})]}),Object(j.jsx)("br",{})]})}function h(e){var t=e.retrieveNews,c=e.setTitle,s=e.setSource,a=e.loadMore,r=e.title,i=(e.setIsTopNews,Object(n.useState)([])),o=Object(u.a)(i,2),l=o[0],b=o[1];return Object(n.useEffect)((function(){!function(){var e="https://newsapi.org/v2/sources?apiKey=".concat(f,"&language=en");fetch(e).then((function(e){return e.json()})).then((function(e){b(e.sources)}))}()}),[]),Object(j.jsxs)("div",{className:"search-form",children:[Object(j.jsx)("div",{className:"label-input label",children:Object(j.jsx)("label",{htmlFor:"input",children:"Keyword*"})}),Object(j.jsx)("div",{className:"input",children:Object(j.jsx)("input",{type:"text",className:"input",onKeyDown:function(e){"Enter"===e.key&&r.trim()&&t()},onChange:function(e){return c(e.target.value)}})}),Object(j.jsx)("div",{className:"label-sources",children:Object(j.jsx)("label",{htmlFor:"sources",children:"Source"})}),Object(j.jsx)("div",{className:"menu",children:Object(j.jsxs)("select",{name:"sources",className:"sources",onChange:function(e){return s(e.target.value)},children:[Object(j.jsx)("option",{value:"",className:"all-option",children:"All"}),l.map((function(e){return Object(j.jsxs)("option",{value:e.id,children:[" ",e.name," "]})}))]})}),Object(j.jsx)("div",{className:"search",children:Object(j.jsx)("button",{className:"search-btn btn",onClick:t,disabled:!r||!r.trim(),children:"Search"})}),Object(j.jsx)("div",{className:"load",children:Object(j.jsx)("button",{className:"load-more-btn btn",onClick:a,children:" Load more"})})]})}function d(){return Object(j.jsx)("div",{className:"no-articles",children:Object(j.jsx)("h1",{children:"There are no articles matching your request"})})}var p=c(40);function O(){return Object(j.jsx)("div",{className:"loaderSpinner",children:Object(j.jsx)(p.a,{active:!0})})}var f="1af9413564284f8bacb7eb94c4a392c8";var m=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),r=Object(u.a)(a,2),i=r[0],p=r[1],m=Object(n.useState)("2"),v=Object(u.a)(m,2),x=v[0],g=v[1],N=Object(n.useState)(""),w=Object(u.a)(N,2),S=w[0],y=w[1],T=Object(n.useState)(!0),k=Object(u.a)(T,2),C=k[0],K=k[1],F=Object(n.useState)(!1),E=Object(u.a)(F,2),I=E[0],z=E[1];function q(){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(f,"&pageSize=5"),z(!0),e.next=4,fetch(t).then((function(e){return e.json()}));case 4:c=e.sent,s(c.articles),z(!1),K(!0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.next=3,q();case 3:z(!1);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(h,{setTitle:p,title:i,retrieveNews:function(){var e="https://newsapi.org/v2/everything?q=".concat(i,"&apiKey=").concat(f,"&pageSize=5&page=1&sources=").concat(S);fetch(e).then((function(e){return e.json()})).then((function(e){s(e.articles),K(!1),window.scrollTo(0,0)}))},loadMore:function(){if(x<9){var e=C?"https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(f,"&pageSize=5&page=").concat(x):"https://newsapi.org/v2/everything?q=".concat(i,"&apiKey=").concat(f,"&pageSize=5&page=").concat(x,"&sources=").concat(S);fetch(e).then((function(e){return e.json()})).then((function(e){var t=c;e.articles.forEach((function(e){return t.push(e)})),s(t),g(Number(x)+1)}))}return 0},setSource:y,setIsTopNews:K}),Object(j.jsx)("div",{children:c.length?c.map((function(e){return Object(j.jsx)(b,{card:e})})):I?Object(j.jsx)(O,{}):Object(j.jsx)(d,{})})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),v()}},[[37,1,2]]]);
//# sourceMappingURL=main.a9131e95.chunk.js.map