import{_}from"./nuxt-link.7a94e510.js";import{f as m,o,c,H as h,F as x,r as f,h as k,b as g,i as w,w as v,a as d,t as y,x as L,af as M}from"./entry.153eda82.js";const T=m({__name:"DarkMode",setup(p){let e;function s(){const t=document.documentElement;e=t.classList.contains("dark"),t.classList.remove(e?"dark":"-"),t.classList.add(e?"-":"dark")}function i(t){const n=t.clientX,a=t.clientY,u=Math.hypot(Math.max(n,innerWidth-n),Math.max(a,innerHeight-a)),l=[`circle(0px at ${n}px ${a}px)`,`circle(${u}px at ${n}px ${a}px)`];document.startViewTransition(async()=>{s(),await h()}).ready.then(()=>{document.documentElement.animate({clipPath:e?[...l].reverse():l},{duration:300,easing:"ease-in",pseudoElement:e?"::view-transition-old(root)":"::view-transition-new(root)"})})}function r(t){if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches)){s();return}i(t)}return(t,n)=>(o(),c("div",{title:"Toggle Color Scheme",class:"dark:i-icon-park-outline-moon i-icon-park-outline-sun hover",onClick:r}))}}),$={class:"flex items-center gap-1.5em text-lg max-w-70ch m-auto"},B={class:"hidden md:inline"},E=m({__name:"NavBar",setup(p){return(e,s)=>{const i=_,r=T;return o(),c("nav",$,[(o(!0),c(x,null,f(k(M),t=>(o(),w(i,{key:t.path,class:"hover",title:t.title,to:t.path},{default:v(()=>[d("span",B,y(t.title),1),d("div",{class:L([t.icon,"md:hidden"])},null,2)]),_:2},1032,["title","to"]))),128)),g(r,{class:"m-l-auto"})])}}});export{E as _};
