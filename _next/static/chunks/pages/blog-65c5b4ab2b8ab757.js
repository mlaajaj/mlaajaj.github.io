(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(3190)}])},3190:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return h}});var t=n(5893),i=n(7294),a=n(8527),o=n(9116),c=n(894),s=n(2962),l=n(3854),u=n(392);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){f(e,r,n[r])}))}return e}var h=!0;r.default=function(e){var r=e.posts,n=(0,i.useState)(r),f=n[0],h=n[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.PB,{title:"Blog - Mohamed LAAJAJ"}),(0,t.jsxs)(a.gC,{as:"section",alignItems:"flex-start",w:"full",spacing:3,children:[(0,t.jsx)(a.X6,{size:"md",children:"Blog."}),(0,t.jsx)(a.xv,{fontSize:"md",children:"Python, Tableau, SQL, Stremlit..."}),(0,t.jsxs)(o.BZ,{children:[(0,t.jsx)(o.Z8,{pointerEvents:"none",children:(0,t.jsx)(c.JO,{as:l.O6C,color:"gray.400"})}),(0,t.jsx)(o.II,{onChange:function(e){var n=e.currentTarget.value,t=r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));h(t)},placeholder:"Rechercher un article...",variant:"filled"})]})]}),(0,t.jsx)(a.aV,{w:"full",spacing:2,children:f.map((function(e){return(0,t.jsx)(a.HC,{children:(0,t.jsx)(u.Z,d({},e))},e.slug)}))}),0===f.length&&(0,t.jsx)(a.xv,{children:"No articles for that query"})]})}},392:function(e,r,n){"use strict";var t=n(5893),i=n(1664),a=n.n(i),o=n(8527),c=n(2165);r.Z=function(e){var r=e.title,n=e.description,i=e.slug,s=e.date,l=e.readingTime;return(0,t.jsx)(o.fG,{as:"article",children:(0,t.jsxs)(o.gC,{alignItems:"stretch",w:"full",p:{base:0,md:4},_hover:{bg:"gray.100",transform:"scale(1.025, 1.025)"},_dark:{_hover:{bg:"gray.700"}},rounded:"md",transitionDuration:"slow",transitionProperty:"all",transitionTimingFunction:"ease-out",children:[(0,t.jsxs)(o.gC,{alignItems:"flex-start",children:[(0,t.jsx)(a(),{href:"/blog/".concat(i),passHref:!0,children:(0,t.jsx)(o.AB,{children:(0,t.jsx)(o.X6,{size:"md",children:r})})}),(0,t.jsxs)(o.Ug,{divider:(0,t.jsx)(o.xv,{mx:2,color:"gray.500",children:"\u2022"}),children:[(0,t.jsx)(o.xv,{color:"gray.500",fontSize:"sm",children:(0,c.WU)(s)}),(0,t.jsx)(o.xv,{color:"gray.500",fontSize:"sm",children:l})]})]}),(0,t.jsx)(o.xv,{color:"gray.500",fontSize:"sm",children:n})]})})}},2165:function(e,r,n){"use strict";n.d(r,{WU:function(){return l}});var t=["second","minute","hour","day","week","month","year"];var i=["\u79d2","\u5206\u949f","\u5c0f\u65f6","\u5929","\u5468","\u4e2a\u6708","\u5e74"];var a={},o=function(e,r){a[e]=r},c=[60,60,24,7,365/7/12,12];function s(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}var l=function(e,r,n){var t=function(e,r){return(+(r?s(r):new Date)-+s(e))/1e3}(e,n&&n.relativeDate);return function(e,r){for(var n=e<0?1:0,t=e=Math.abs(e),i=0;e>=c[i]&&i<c.length;i++)e/=c[i];return(e=Math.floor(e))>(0===(i*=2)?9:1)&&(i+=1),r(e,i,t)[n].replace("%s",e.toString())}(t,function(e){return a[e]||a.en_US}(r))};o("en_US",(function(e,r){if(0===r)return["just now","right now"];var n=t[Math.floor(r/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]})),o("zh_CN",(function(e,r){if(0===r)return["\u521a\u521a","\u7247\u523b\u540e"];var n=i[~~(r/2)];return[e+" "+n+"\u524d",e+" "+n+"\u540e"]}))}},function(e){e.O(0,[556,774,888,179],(function(){return r=7801,e(e.s=r);var r}));var r=e.O();_N_E=r}]);