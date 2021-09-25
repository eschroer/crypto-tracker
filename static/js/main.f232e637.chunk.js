(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(14),a=c.n(s),i=(c(20),c(3)),o=(c(21),c(22),c(0)),l=function(e){var t=e.name,c=e.image,n=e.symbol,r=e.price,s=e.volume,a=e.priceChange,i=e.marketcap;return Object(o.jsx)("div",{className:"coin-container",children:Object(o.jsxs)("div",{className:"coin-row",children:[Object(o.jsxs)("div",{className:"coin",children:[Object(o.jsx)("img",{src:c,alt:"crypto"}),Object(o.jsx)("h1",{children:t}),Object(o.jsx)("p",{className:"coin-symbol",children:n})]}),Object(o.jsxs)("div",{className:"coin-data",children:[Object(o.jsxs)("p",{className:"coin-price",children:["$",r]}),Object(o.jsxs)("p",{className:"coin-volume",children:["$",s.toLocaleString()]}),a<0?Object(o.jsxs)("p",{className:"coin-percent red",children:[a.toFixed(2),"%"]}):Object(o.jsxs)("p",{className:"coin-percent green",children:[a.toFixed(2),"%"]}),Object(o.jsxs)("p",{className:"coin-marketcap",children:["$",i.toLocaleString()]})]})]})})},d=(c(24),function(e){return Object(o.jsx)("div",{className:"header-container",children:Object(o.jsxs)("div",{className:"header-row",children:[Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("p",{children:" Name "}),Object(o.jsxs)("button",{className:"button",type:"button",onClick:function(t){return e.requestSort("name")},children:[" ","ascending"===e.sortConfig.direction?"\u25b2":"\u25bc"," "]}),Object(o.jsx)("p",{className:"header-symbol",children:"Symbol"}),Object(o.jsxs)("button",{className:"button",type:"button",onClick:function(t){return e.requestSort("symbol")},children:[" ","ascending"===e.sortConfig.direction?"\u25b2":"\u25bc"]})]}),Object(o.jsxs)("div",{className:"header-data",children:[Object(o.jsx)("p",{className:"header-price",children:"Price"}),Object(o.jsxs)("button",{className:"button",type:"button",onClick:function(t){return e.requestSort("current_price")},children:[" ","ascending"===e.sortConfig.direction?"\u25b2":"\u25bc"]}),Object(o.jsx)("p",{className:"header-volume",children:"Volume"}),Object(o.jsxs)("button",{className:"button",type:"button",onClick:function(t){return e.requestSort("total_volume")},children:[" ","ascending"===e.sortConfig.direction?"\u25b2":"\u25bc"]}),Object(o.jsx)("p",{className:"header-percent",children:"% Change"}),Object(o.jsxs)("button",{className:"button",type:"button",onClick:function(t){return e.requestSort("price_change_percentage_24h")},children:[" ","ascending"===e.sortConfig.direction?"\u25b2":"\u25bc"]}),Object(o.jsx)("p",{className:"header-marketcap",children:"Market Cap"}),Object(o.jsxs)("button",{className:"button",type:"button",onClick:function(t){return e.requestSort("market_cap")},children:[" ","ascending"===e.sortConfig.direction?"\u25b2":"\u25bc"]})]})]})})}),u=c(15),j=c.n(u);var b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(i.a)(s,2),u=a[0],b=a[1],m=Object(n.useState)({}),h=Object(i.a)(m,2),p=h[0],g=h[1];Object(n.useEffect)((function(){j.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){r(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]),c.sort((function(e,t){return e[p.key]<t[p.key]?"ascending"===p.direction?-1:1:e[p.key]>t[p.key]?"ascending"===p.direction?1:-1:0}));var O=c.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(o.jsxs)("div",{className:"coin-app",children:[Object(o.jsxs)("div",{className:"coin-search",children:[Object(o.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(o.jsx)("form",{children:Object(o.jsx)("input",{type:"text",placeholder:"Search",className:"coin-input",onChange:function(e){b(e.target.value)}})}),Object(o.jsx)(d,{requestSort:function(e){var t="ascending";p.key===e&&"ascending"===p.direction&&(t="descending"),g({key:e,direction:t})},sortConfig:p})]}),O.map((function(e){return Object(o.jsx)(l,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,45)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.f232e637.chunk.js.map