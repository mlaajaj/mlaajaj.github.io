(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(3190)}])},3190:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return h}});var t=n(5893),o=n(7294),a=n(8527),i=n(9116),c=n(894),l=n(2962),u=n(3854),s=n(392);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){f(e,r,n[r])}))}return e}var h=!0;r.default=function(e){var r=e.posts,n=(0,o.useState)(r),f=n[0],h=n[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.PB,{title:"Blog - Mohamed LAAJAJ"}),(0,t.jsxs)(a.gC,{as:"section",alignItems:"flex-start",w:"full",spacing:3,children:[(0,t.jsx)(a.X6,{size:"md",children:"Blog."}),(0,t.jsx)(a.xv,{fontSize:"md",children:"Python, Tableau, SQL, Stremlit..."}),(0,t.jsxs)(i.BZ,{children:[(0,t.jsx)(i.Z8,{pointerEvents:"none",children:(0,t.jsx)(c.JO,{as:u.O6C,color:"gray.400"})}),(0,t.jsx)(i.II,{onChange:function(e){var n=e.currentTarget.value,t=r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));h(t)},placeholder:"Rechercher un article...",variant:"filled"})]})]}),(0,t.jsx)(a.aV,{w:"full",spacing:2,children:f.map((function(e){return(0,t.jsx)(a.HC,{children:(0,t.jsx)(s.Z,d({},e))},e.slug)}))}),0===f.length&&(0,t.jsx)(a.xv,{children:"No articles for that query"})]})}},392:function(e,r,n){"use strict";var t=n(5893),o=n(8527),a=n(949),i=n(2165);r.Z=function(e){var r=e.title,n=e.description,c=e.slug,l=e.date,u=e.readingTime;return(0,t.jsx)(o.kC,{w:"full",alignItems:"center",justifyContent:"center",children:(0,t.jsxs)(o.xu,{mx:"auto",w:"100%",p:4,rounded:"xl",bg:(0,a.ff)("white","gray.900"),maxW:"2xl",border:"1px",borderColor:"gray.100",children:[(0,t.jsxs)(o.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)("span",{color:(0,a.ff)("gray.600","gray.400"),children:(0,i.WU)(l)}),(0,t.jsx)(o.rU,{href:"/blog/".concat(c),px:3,py:1,bg:"gray.600",color:"gray.100",fontSize:"sm",fontWeight:"700",rounded:"md",_hover:{bg:"gray.500"},children:u})]}),(0,t.jsxs)(o.xu,{mt:2,children:[(0,t.jsx)(o.rU,{href:"/blog/".concat(c),fontSize:"2xl",color:(0,a.ff)("gray.700","white"),fontWeight:"700",_hover:{color:(0,a.ff)("gray.600","gray.200"),textDecor:"underline"},children:r}),(0,t.jsx)("p",{color:(0,a.ff)("gray.600","gray.300"),children:n})]}),(0,t.jsx)(o.kC,{justifyContent:"space-between",alignItems:"center",mt:4,children:(0,t.jsx)(o.rU,{href:"/blog/".concat(c),color:(0,a.ff)("brand.600","brand.400"),_hover:{textDecor:"underline"},children:"Lire l'article"})})]})})}},2165:function(e,r,n){"use strict";n.d(r,{WU:function(){return u}});var t=["second","minute","hour","day","week","month","year"];var o=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var a={},i=function(e,r){a[e]=r},c=[60,60,24,7,365/7/12,12];function l(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var u=function(e,r,n){var t=function(e,r){return(+(r?l(r):new Date)-+l(e))/1e3}(e,n&&n.relativeDate);return function(e,r){for(var n=e<0?1:0,t=e=Math.abs(e),o=0;e>=c[o]&&o<c.length;o++)e/=c[o];return(e=Math.floor(e))>(0===(o*=2)?9:1)&&(o+=1),r(e,o,t)[n].replace("%s",e.toString())}(t,function(e){return a[e]||a.en_US}(r))};i("en_US",(function(e,r){if(0===r)return["just now","right now"];var n=t[Math.floor(r/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]})),i("zh_CN",(function(e,r){if(0===r)return["\u521a\u521a","\u7247\u523b\u540e"];var n=o[~~(r/2)];return[e+" "+n+"\u524d",e+" "+n+"\u540e"]}))}},function(e){e.O(0,[556,774,888,179],(function(){return r=7801,e(e.s=r);var r}));var r=e.O();_N_E=r}]);