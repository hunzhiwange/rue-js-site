import{At as e,Cn as t,Ct as n,Lt as r,Tt as i,dt as a,en as o,ft as s,mt as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{i as m,l as h,o as g,s as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{n as S,t as C}from"./src-CCTNpCXV.js";import{t as w}from"./button-CvwbmGA0.js";import{t as T}from"./avatar-DucKVaCQ.js";import{t as ee}from"./tabs-B1XdBEJF.js";import{r as E}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var te=`.`,ne=`,`,D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>e==null||e===!1?!1:!Array.isArray(e)||e.some(e=>M(e)),N=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},P=({value:e,formatter:t,precision:n,decimalSeparator:r=te,groupSeparator:i=ne})=>{if(typeof t==`function`)return t(e);if(!M(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},F=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=M(e)?P({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>{let n=I(t),r=L(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},z=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,B=e=>h(t=>{let n=s(),r=a(`rue:slot:anchor`);d(n,r),f(()=>{let t=M(e.figure)?h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(q,{className:e.figureClassName,style:e.figureStyle,children:e.figure});p(()=>g(r,t,n))}),t}):``;p(()=>g(t,n,r))}),d(n,c(` `));let i=a(`rue:slot:anchor`);d(n,i),f(()=>{let t=M(e.title)?h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(U,{className:e.titleClassName,style:e.titleStyle,children:e.title});p(()=>g(r,t,n))}),t}):``;p(()=>g(t,n,i))}),d(n,c(` `));let o=a(`rue:slot:anchor`);d(n,o),f(()=>{let t=e.loading||M(e.value)||M(e.prefix)||M(e.suffix)||typeof e.formatter==`function`||typeof e.valueRender==`function`?h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(G,{className:e.valueClassName,style:e.valueStyle,value:e.value,prefix:e.prefix,suffix:e.suffix,loading:e.loading,valueRender:e.valueRender,formatter:e.formatter,precision:e.precision,decimalSeparator:e.decimalSeparator,groupSeparator:e.groupSeparator});p(()=>g(r,t,n))}),t}):``;p(()=>g(t,n,o))}),d(n,c(` `));let l=a(`rue:slot:anchor`);d(n,l),f(()=>{let t=M(e.desc)?h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(K,{className:e.descClassName,style:e.descStyle,children:e.desc});p(()=>g(r,t,n))}),t}):``;p(()=>g(t,n,l))}),d(n,c(` `));let u=a(`rue:slot:anchor`);return d(n,u),f(()=>{let t=M(e.actions)?h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(J,{className:e.actionsClassName,style:e.actionsStyle,children:e.actions});p(()=>g(r,t,n))}),t}):``;p(()=>g(t,n,u))}),n}),V=e=>{let{cls:n}=y(`useSetup:0:0`,()=>t(()=>({cls:y(`computed:1:0`,()=>r(()=>j(e.direction?`stats stats-${e.direction}`:`stats`,e.className)))})));return e.items&&e.items.length?h(t=>{let r=u(`div`,t);f(()=>{i(r,n.get())});let o=a(`rue:list:start`),s=a(`rue:list:end`);d(r,o),d(r,s);let c=new Map;return f(()=>{c=b({items:e.items||[],getKey:(e,t)=>e.key??t,elements:c,parent:o.parentNode,before:s,start:o,renderItem:(e,t,n,r,i)=>{_(v(H,{key:e.key??i,...e}),t,n,r)}})}),r}):h(t=>{let r=u(`div`,t);f(()=>{i(r,n.get())});let o=a(`rue:children:anchor`);return d(r,o),f(()=>{let t=e.children;p(()=>g(t,r,o))}),r})},H=e=>{let{cls:n,shouldRenderChildren:o}=y(`useSetup:0:0:dup1`,()=>t(()=>({cls:y(`computed:1:1`,()=>r(()=>j(e.center?`stat place-items-center`:`stat`,e.className))),shouldRenderChildren:y(`computed:1:2`,()=>r(()=>M(e.children)))})));return h(t=>{let r=u(`div`,t);f(()=>{i(r,n.get())});let c=a(`rue:slot:anchor`);return d(r,c),f(()=>{let t=o.get()?e.children:h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(B,{figure:e.figure,figureClassName:e.figureClassName,figureStyle:e.figureStyle,title:e.title,titleClassName:e.titleClassName,titleStyle:e.titleStyle,value:e.value,valueClassName:e.valueClassName,valueStyle:e.valueStyle,valueRender:e.valueRender,prefix:e.prefix,suffix:e.suffix,loading:e.loading,formatter:e.formatter,precision:e.precision,decimalSeparator:e.decimalSeparator,groupSeparator:e.groupSeparator,desc:e.desc,descClassName:e.descClassName,descStyle:e.descStyle,actions:e.actions,actionsClassName:e.actionsClassName,actionsStyle:e.actionsStyle});p(()=>g(r,t,n))}),t});p(()=>g(t,r,c))}),r})},U=t=>h(n=>{let r=u(`div`,n);f(()=>{i(r,j(`stat-title`,t.className))}),f(()=>{let n=t.style;e(r,n)});let o=a(`rue:children:anchor`);return d(r,o),f(()=>{let e=t.children;p(()=>g(e,r,o))}),r}),W=e=>h(t=>{let r=u(`span`,t);i(r,`stat-value-text`),n(r,`data-stat-value`,`true`);let o=a(`rue:children:anchor`);return d(r,o),f(()=>{let t=e.children;p(()=>g(t,r,o))}),r}),G=o=>{let{content:l}=y(`useSetup:0:0:dup2`,()=>t(()=>({content:y(`computed:1:3`,()=>r(()=>F({value:o.value,children:o.children,valueRender:o.valueRender,formatter:o.formatter,precision:o.precision,decimalSeparator:o.decimalSeparator,groupSeparator:o.groupSeparator})))})));return h(t=>{let r=u(`div`,t);f(()=>{i(r,j(`stat-value`,o.className))}),f(()=>{let t=o.style;e(r,t)});let m=a(`rue:slot:anchor`);d(r,m),f(()=>{let e=M(o.prefix)?h(()=>{let e=s(),t=u(`span`,e);d(e,t),i(t,`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`),n(t,`aria-hidden`,`true`);let r=a(`rue:slot:anchor`);return d(t,r),f(()=>{let e=o.prefix;p(()=>g(e,t,r))}),e}):``;p(()=>g(e,r,m))}),d(r,c(` `));let _=a(`rue:slot:anchor`);d(r,_),f(()=>{let e=o.loading?h(()=>{let e=s(),t=u(`span`,e);return d(e,t),i(t,`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`),n(t,`data-stat-loading`,`true`),n(t,`aria-hidden`,`true`),e}):M(l.get())?h(()=>{let e=s(),t=a(`rue:component:anchor`);return d(e,t),g(v(W,{children:l.get()}),e,t),e}):``;p(()=>g(e,r,_))}),d(r,c(` `));let y=a(`rue:slot:anchor`);return d(r,y),f(()=>{let e=M(o.suffix)?h(()=>{let e=s(),t=u(`span`,e);d(e,t),i(t,`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`),n(t,`aria-hidden`,`true`);let r=a(`rue:slot:anchor`);return d(t,r),f(()=>{let e=o.suffix;p(()=>g(e,t,r))}),e}):``;p(()=>g(e,r,y))}),r})},K=t=>h(n=>{let r=u(`div`,n);f(()=>{i(r,j(`stat-desc`,t.className))}),f(()=>{let n=t.style;e(r,n)});let o=a(`rue:children:anchor`);return d(r,o),f(()=>{let e=t.children;p(()=>g(e,r,o))}),r}),q=t=>h(n=>{let r=u(`div`,n);f(()=>{i(r,j(`stat-figure`,t.className))}),f(()=>{let n=t.style;e(r,n)});let o=a(`rue:children:anchor`);return d(r,o),f(()=>{let e=t.children;p(()=>g(e,r,o))}),r}),J=t=>h(n=>{let r=u(`div`,n);f(()=>{i(r,j(`stat-actions`,t.className))}),f(()=>{let n=t.style;e(r,n)});let o=a(`rue:children:anchor`);return d(r,o),f(()=>{let e=t.children;p(()=>g(e,r,o))}),r}),Y=e=>{let _=y(`useSetup:0:0:dup3`,()=>t(()=>{let t=y(`ref:1:4`,()=>l(0)),n=y(`computed:1:5`,()=>r(()=>j(e.center?`stat place-items-center`:`stat`,e.className))),i=null,a=!1,s=()=>{i!=null&&(clearInterval(i),i=null)},c=()=>{let n=N(e.value);if(n==null)return t.value=0,e.onChange&&e.onChange(void 0),s(),!1;let r=Date.now(),i=(e.type===void 0?`countdown`:e.type)===`countup`?Math.max(r-n,0):Math.max(n-r,0);return t.value=i,e.onChange&&e.onChange(i),(e.type===void 0?`countdown`:e.type)===`countdown`&&i<=0?(s(),a||(a=!0,e.onFinish&&e.onFinish()),!1):(a=!1,!0)},u=()=>{s(),c()&&(i=setInterval(c,z(e.format===void 0?D:e.format,e.interval)))};return y(`watch:1:6`,()=>o(()=>`${e.type===void 0?`countdown`:e.type}|${N(e.value)??`invalid`}|${e.format===void 0?D:e.format}|${e.interval??``}`,()=>{a=!1,u()},{immediate:!0})),m(s),{duration:t,cls:n,stopTimer:s,syncDuration:c,startTimer:u,timer:i,finished:a}})),{duration:b,cls:x,stopTimer:S,syncDuration:C,startTimer:w}=_,{timer:T,finished:ee}=_;return h(t=>{let r=u(`div`,t);f(()=>{i(r,x.get())});let o=a(`rue:slot:anchor`);d(r,o),f(()=>{let t=M(e.figure)?h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(q,{className:e.figureClassName,style:e.figureStyle,children:e.figure});p(()=>g(r,t,n))}),t}):``;p(()=>g(t,r,o))}),d(r,c(` `));let l=a(`rue:slot:anchor`);d(r,l),f(()=>{let t=M(e.title)?h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(U,{className:e.titleClassName,style:e.titleStyle,children:e.title});p(()=>g(r,t,n))}),t}):``;p(()=>g(t,r,l))});let m=a(`rue:component:anchor`);d(r,m);let _=h(()=>{let t=s(),r=u(`span`,t);d(t,r),f(()=>{n(r,`data-stat-timer`,String(e.type===void 0?`countdown`:e.type))}),f(()=>{n(r,`aria-live`,String(e.ariaLive??((e.format===void 0?D:e.format).includes(`S`)?`off`:`polite`)))}),f(()=>{n(r,`aria-label`,String(R(b.value,e.format===void 0?D:e.format)))});let i=a(`rue:slot:anchor`);return d(r,i),f(()=>{let t=R(b.value,e.format===void 0?D:e.format);p(()=>g(t,r,i))}),t});f(()=>{let t=v(G,{className:e.valueClassName,style:e.valueStyle,prefix:e.prefix,suffix:e.suffix,loading:e.loading,children:_});p(()=>g(t,r,m))});let y=a(`rue:slot:anchor`);d(r,y),f(()=>{let t=M(e.desc)?h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(K,{className:e.descClassName,style:e.descStyle,children:e.desc});p(()=>g(r,t,n))}),t}):``;p(()=>g(t,r,y))}),d(r,c(` `));let S=a(`rue:slot:anchor`);return d(r,S),f(()=>{let t=M(e.actions)?h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(J,{className:e.actionsClassName,style:e.actionsStyle,children:e.actions});p(()=>g(r,t,n))}),t}):``;p(()=>g(t,r,S))}),r})},X=Object.assign(V,{Item:H,Title:U,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:e=>h(t=>{let n=s(),r=a(`rue:component:anchor`);return d(n,r),f(()=>{let t=v(Y,{...e,type:`countdown`});p(()=>g(t,n,r))}),n})}),Z=e=>h(t=>{let n=u(`div`,t);i(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=u(`div`,n);d(n,r),i(r,`flex flex-wrap items-start justify-between gap-3`);let o=u(`div`,r);d(r,o);let l=u(`h2`,o);d(o,l),i(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(l,c(`# `));let m=a(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.title;p(()=>g(t,l,m))});let _=a(`rue:slot:anchor`);d(o,_),f(()=>{let t=e.summary?h(()=>{let t=s(),n=u(`p`,t);d(t,n),i(n,`m-0 text-sm opacity-70`);let r=a(`rue:slot:anchor`);return d(n,r),f(()=>{let t=e.summary;p(()=>g(t,n,r))}),t}):``;p(()=>g(t,o,_))});let y=a(`rue:component:anchor`);d(n,y),f(()=>{let t=v(ee,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>g(t,n,y))});let b=a(`rue:slot:anchor`);return d(n,b),f(()=>{let t=e.tab.value===`preview`?e.preview():h(()=>{let t=s(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=v(x,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>g(r,t,n))}),t});p(()=>g(t,n,b))}),n}),Q=e=>h(t=>{let r=u(`div`,t);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let o=u(`table`,r);d(r,o),i(o,`table table-zebra`);let l=u(`thead`,o);d(o,l);let m=u(`tr`,l);d(l,m);let _=u(`th`,m);d(m,_),d(_,c(`属性`));let v=u(`th`,m);d(m,v),d(v,c(`说明`));let y=u(`th`,m);d(m,y),d(y,c(`类型`));let x=u(`th`,m);d(m,x),d(x,c(`默认值`));let S=u(`tbody`,o);d(o,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,t,r,i,o)=>{g(h(()=>{let t=s(),r=u(`tr`,t);d(t,r),f(()=>{n(r,`key`,String(e.prop))});let i=u(`td`,r);d(r,i);let o=u(`code`,i);d(i,o);let c=a(`rue:slot:anchor`);d(o,c),f(()=>{let t=e.prop;p(()=>g(t,o,c))});let l=u(`td`,r);d(r,l);let m=a(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>g(t,l,m))});let h=u(`td`,r);d(r,h);let _=u(`code`,h);d(h,_);let v=a(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>g(t,_,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=a(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>g(t,b,x))}),t}),t,r)}})}),r}),re=()=>h(e=>{let t=u(`svg`,e);n(t,`xmlns`,`http://www.w3.org/2000/svg`),n(t,`fill`,`none`),n(t,`viewBox`,`0 0 24 24`),i(t,`inline-block w-8 h-8 stroke-current`);let r=u(`path`,t);return d(t,r),n(r,`stroke-linecap`,`round`),n(r,`stroke-linejoin`,`round`),n(r,`stroke-width`,`2`),n(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t}),ie=()=>h(e=>{let t=u(`svg`,e);n(t,`xmlns`,`http://www.w3.org/2000/svg`),n(t,`fill`,`none`),n(t,`viewBox`,`0 0 24 24`),i(t,`inline-block w-8 h-8 stroke-current`);let r=u(`path`,t);return d(t,r),n(r,`stroke-linecap`,`round`),n(r,`stroke-linejoin`,`round`),n(r,`stroke-width`,`2`),n(r,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),t}),ae=()=>h(e=>{let t=u(`svg`,e);n(t,`xmlns`,`http://www.w3.org/2000/svg`),n(t,`fill`,`none`),n(t,`viewBox`,`0 0 24 24`),i(t,`inline-block w-8 h-8 stroke-current`);let r=u(`path`,t);return d(t,r),n(r,`stroke-linecap`,`round`),n(r,`stroke-linejoin`,`round`),n(r,`stroke-width`,`2`),n(r,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),t}),oe=()=>h(e=>{let t=u(`svg`,e);n(t,`xmlns`,`http://www.w3.org/2000/svg`),n(t,`fill`,`none`),n(t,`viewBox`,`0 0 24 24`),i(t,`inline-block w-8 h-8 stroke-current`);let r=u(`path`,t);return d(t,r),n(r,`stroke-linecap`,`round`),n(r,`stroke-linejoin`,`round`),n(r,`stroke-width`,`2`),n(r,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),t}),se=()=>h(e=>{let t=u(`svg`,e);n(t,`xmlns`,`http://www.w3.org/2000/svg`),n(t,`fill`,`none`),n(t,`viewBox`,`0 0 24 24`),i(t,`inline-block w-8 h-8 stroke-current`);let r=u(`path`,t);return d(t,r),n(r,`stroke-linecap`,`round`),n(r,`stroke-linejoin`,`round`),n(r,`stroke-width`,`2`),n(r,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),t}),ce=[{figure:C(re,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:C(`span`,{className:`text-secondary`,children:`4,200`}),desc:C(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:C(w,{color:`success`,size:`xs`,children:`Add funds`})}],le=`<Stat className="shadow">
  <Stat.Item>
    <Stat.Title>Total Page Views</Stat.Title>
    <Stat.Value>89,400</Stat.Value>
    <Stat.Desc>21% more than last month</Stat.Desc>
  </Stat.Item>
</Stat>`,ue=`import { Button, Stat } from '@rue-js/design'

const statItems = [
  {
    figure: <InfoIcon />,
    figureClassName: 'text-secondary',
    title: 'Downloads',
    value: '31K',
    desc: 'Jan 1st - Feb 1st',
  },
  {
    center: true,
    title: 'Users',
    value: <span className="text-secondary">4,200</span>,
    desc: <span className="text-secondary">↗︎ 40 (2%)</span>,
  },
  {
    title: 'Account balance',
    value: '$89,400',
    actions: <Button color="success" size="xs">Add funds</Button>,
  },
]

<Stat items={statItems} className="shadow" />`,de=`<Stat className="shadow">
  <Stat.Item
    title="GMV"
    value={112893}
    precision={2}
    prefix="$"
    suffix="USD"
    desc="格式化后的数值由 Value 自动处理"
  />
  <Stat.Item
    title="Success Rate"
    value={99.86}
    precision={2}
    suffix="%"
    valueClassName="text-success"
    desc="支持 0、精度和分组符"
  />
</Stat>`,fe=`<Stat className="shadow">
  <Stat.Item
    title="Requests"
    value={1280}
    prefix="API"
    formatter={value => \`\${value} req/s\`}
    desc="formatter 适合把基础值映射成业务文案"
  />
  <Stat.Item>
    <Stat.Title>Storage</Stat.Title>
    <Stat.Value value={24576} suffix="GB" valueRender={node => <span className="text-primary">{node}</span>} />
    <Stat.Desc>valueRender 可以包裹高亮节点</Stat.Desc>
  </Stat.Item>
</Stat>`,pe=`<Stat className="shadow">
  <Stat.Item title="Sync Revenue" loading desc="数据回填前展示 skeleton 占位" />
  <Stat.Item title="Open Orders" value={0} suffix="items" desc="0 会正常渲染，不会被误判为空" />
</Stat>`,me=`const deadline = Date.now() + 1000 * 60 * 60 * 24 + 1000 * 30
const startedAt = Date.now() - 1000 * 60 * 60 * 3 - 1000 * 12

<Stat className="shadow">
  <Stat.Timer
    title="Campaign Countdown"
    value={deadline}
    suffix="left"
    desc="默认按 HH:mm:ss 渲染"
  />
  <Stat.Timer
    type="countup"
    title="Uptime"
    value={startedAt}
    format="H[h] m[m] s[s]"
    valueClassName="text-success"
    desc="type='countup' 适合累计时长"
  />
</Stat>`,he=`<Stat className="shadow">
  <Stat.Item>
    <Stat.Figure className="text-primary">
      <HeartIcon />
    </Stat.Figure>
    <Stat.Title>Total Likes</Stat.Title>
    <Stat.Value className="text-primary">25.6K</Stat.Value>
    <Stat.Desc>21% more than last month</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Figure className="text-secondary">
      <BoltIcon />
    </Stat.Figure>
    <Stat.Title>Page Views</Stat.Title>
    <Stat.Value className="text-secondary">2.6M</Stat.Value>
    <Stat.Desc>21% more than last month</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Figure className="text-secondary">
      <Avatar status="online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
        </div>
      </Avatar>
    </Stat.Figure>
    <Stat.Value>86%</Stat.Value>
    <Stat.Title>Tasks done</Stat.Title>
    <Stat.Desc className="text-secondary">31 tasks remaining</Stat.Desc>
  </Stat.Item>
</Stat>`,ge=`<Stat className="shadow">
  <Stat.Item>
    <Stat.Figure className="text-secondary">
      <InfoIcon />
    </Stat.Figure>
    <Stat.Title>Downloads</Stat.Title>
    <Stat.Value>31K</Stat.Value>
    <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Figure className="text-secondary">
      <SlidersIcon />
    </Stat.Figure>
    <Stat.Title>New Users</Stat.Title>
    <Stat.Value>4,200</Stat.Value>
    <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Figure className="text-secondary">
      <PackageIcon />
    </Stat.Figure>
    <Stat.Title>New Registers</Stat.Title>
    <Stat.Value>1,200</Stat.Value>
    <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
  </Stat.Item>
</Stat>`,_e=`<Stat className="shadow">
  <Stat.Item center>
    <Stat.Title>Downloads</Stat.Title>
    <Stat.Value>31K</Stat.Value>
    <Stat.Desc>From January 1st to February 1st</Stat.Desc>
  </Stat.Item>
  <Stat.Item center>
    <Stat.Title>Users</Stat.Title>
    <Stat.Value className="text-secondary">4,200</Stat.Value>
    <Stat.Desc className="text-secondary">↗︎ 40 (2%)</Stat.Desc>
  </Stat.Item>
  <Stat.Item center>
    <Stat.Title>New Registers</Stat.Title>
    <Stat.Value>1,200</Stat.Value>
    <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
  </Stat.Item>
</Stat>`,ve=`<Stat direction="vertical" className="shadow">
  <Stat.Item>
    <Stat.Title>Downloads</Stat.Title>
    <Stat.Value>31K</Stat.Value>
    <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>New Users</Stat.Title>
    <Stat.Value>4,200</Stat.Value>
    <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>New Registers</Stat.Title>
    <Stat.Value>1,200</Stat.Value>
    <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
  </Stat.Item>
</Stat>`,ye=`<Stat direction="vertical" className="shadow lg:stats-horizontal">
  <Stat.Item>
    <Stat.Title>Downloads</Stat.Title>
    <Stat.Value>31K</Stat.Value>
    <Stat.Desc>Jan 1st - Feb 1st</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>New Users</Stat.Title>
    <Stat.Value>4,200</Stat.Value>
    <Stat.Desc>↗︎ 400 (22%)</Stat.Desc>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>New Registers</Stat.Title>
    <Stat.Value>1,200</Stat.Value>
    <Stat.Desc>↘︎ 90 (14%)</Stat.Desc>
  </Stat.Item>
</Stat>`,be=`<Stat className="bg-base-100 border border-base-300">
  <Stat.Item>
    <Stat.Title>Account balance</Stat.Title>
    <Stat.Value>$89,400</Stat.Value>
    <Stat.Actions>
      <Button color="success" size="xs">Add funds</Button>
    </Stat.Actions>
  </Stat.Item>
  <Stat.Item>
    <Stat.Title>Current balance</Stat.Title>
    <Stat.Value>$89,400</Stat.Value>
    <Stat.Actions>
      <Button size="xs">Withdrawal</Button>
      <Button size="xs">Deposit</Button>
    </Stat.Actions>
  </Stat.Item>
</Stat>`,xe=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],Se=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则展示基础小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],Ce=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],we=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:e,tabItems:n,tabFormat:r,tabFormatter:o,tabLoading:m,tabTimer:_,tabWithIcons:b,tabGroup:x,tabCentered:ee,tabVertical:te,tabResponsive:ne,tabActions:D,deadline:O,startedAt:k}=y(`useSetup:0:0`,()=>t(()=>({tabBasic:y(`ref:1:0`,()=>l(`preview`)),tabItems:y(`ref:1:1`,()=>l(`preview`)),tabFormat:y(`ref:1:2`,()=>l(`preview`)),tabFormatter:y(`ref:1:3`,()=>l(`preview`)),tabLoading:y(`ref:1:4`,()=>l(`preview`)),tabTimer:y(`ref:1:5`,()=>l(`preview`)),tabWithIcons:y(`ref:1:6`,()=>l(`preview`)),tabGroup:y(`ref:1:7`,()=>l(`preview`)),tabCentered:y(`ref:1:8`,()=>l(`preview`)),tabVertical:y(`ref:1:9`,()=>l(`preview`)),tabResponsive:y(`ref:1:10`,()=>l(`preview`)),tabActions:y(`ref:1:11`,()=>l(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return h(t=>{let l=s(),y=a(`rue:component:anchor`);return d(l,y),g(v(E,{children:h(()=>{let t=s(),l=u(`div`,t);d(t,l),i(l,`max-w-none prose prose-sm md:prose-base`);let h=u(`h1`,l);d(l,h),d(h,c(`Stat 统计`));let y=u(`p`,l);d(l,y),i(y,`text-sm mt-3 mb-3`),d(y,c(`Stat 用于在一个块中展示数字与数据。组件保持 Rue 当前的 daisyUI 视觉语气，同时提供数值格式化、前后缀、loading 与 timer 能力。`));let E=u(`h2`,l);d(l,E),d(E,c(`功能概览`));let A=u(`ul`,l);d(l,A);let j=u(`li`,A);d(A,j),d(j,c(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式示例。`));let M=u(`li`,A);d(A,M),d(M,c("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let N=u(`li`,A);d(A,N),d(N,c("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let P=u(`li`,A);d(A,P),d(P,c("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let F=a(`rue:component:anchor`);d(l,F),f(()=>{let t=v(Z,{title:`基础用法`,summary:`展示基础复合组件写法，适合完全自定义结构。`,tab:e,code:le,preview:()=>C(X,{className:`shadow`,children:S(X.Item,{children:[C(X.Title,{children:`Total Page Views`}),C(X.Value,{children:`89,400`}),C(X.Desc,{children:`21% more than last month`})]})})});p(()=>g(t,l,F))});let I=a(`rue:component:anchor`);d(l,I),f(()=>{let e=v(Z,{title:`数据驱动`,summary:`基础 items 数组能力保持，并自动支持新的 value/prefix/loading 等增强属性。`,tab:n,code:ue,preview:()=>C(X,{items:ce,className:`shadow`})});p(()=>g(e,l,I))});let L=a(`rue:component:anchor`);d(l,L),f(()=>{let e=v(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:r,code:de,preview:()=>S(X,{className:`shadow`,children:[C(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),C(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})});p(()=>g(e,l,L))});let R=a(`rue:component:anchor`);d(l,R),f(()=>{let e=v(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:o,code:fe,preview:()=>S(X,{className:`shadow`,children:[C(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把基础值映射成业务文案`}),S(X.Item,{children:[C(X.Title,{children:`Storage`}),C(X.Value,{value:24576,suffix:`GB`,valueRender:e=>C(`span`,{className:`text-primary`,children:e})}),C(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})});p(()=>g(e,l,R))});let z=a(`rue:component:anchor`);d(l,z),f(()=>{let e=v(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:m,code:pe,preview:()=>S(X,{className:`shadow`,children:[C(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),C(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})});p(()=>g(e,l,z))});let B=a(`rue:component:anchor`);d(l,B),f(()=>{let e=v(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 提供常见统计组件里的核心计时能力，`Stat.Countdown` 作为倒计时别名保持。",tab:_,code:me,preview:()=>S(X,{className:`shadow`,children:[C(X.Timer,{title:`Campaign Countdown`,value:O,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),C(X.Timer,{type:`countup`,title:`Uptime`,value:k,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})});p(()=>g(e,l,B))});let V=a(`rue:component:anchor`);d(l,V),f(()=>{let e=v(Z,{title:`带图标或头像`,summary:`整合基础示例，用于展示 figure 区的图标与头像承载能力。`,tab:b,code:he,preview:()=>S(X,{className:`shadow`,children:[S(X.Item,{children:[C(X.Figure,{className:`text-primary`,children:C(ie,{})}),C(X.Title,{children:`Total Likes`}),C(X.Value,{className:`text-primary`,children:`25.6K`}),C(X.Desc,{children:`21% more than last month`})]}),S(X.Item,{children:[C(X.Figure,{className:`text-secondary`,children:C(ae,{})}),C(X.Title,{children:`Page Views`}),C(X.Value,{className:`text-secondary`,children:`2.6M`}),C(X.Desc,{children:`21% more than last month`})]}),S(X.Item,{children:[C(X.Figure,{className:`text-secondary`,children:C(T,{status:`online`,children:C(`div`,{className:`w-16 rounded-full`,children:C(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),C(X.Value,{children:`86%`}),C(X.Title,{children:`Tasks done`}),C(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})});p(()=>g(e,l,V))});let H=a(`rue:component:anchor`);d(l,H),f(()=>{let e=v(Z,{title:`组合统计卡`,summary:`展示基础多列指标卡示例，适合运营面板和概览页。`,tab:x,code:ge,preview:()=>S(X,{className:`shadow`,children:[S(X.Item,{children:[C(X.Figure,{className:`text-secondary`,children:C(re,{})}),C(X.Title,{children:`Downloads`}),C(X.Value,{children:`31K`}),C(X.Desc,{children:`Jan 1st - Feb 1st`})]}),S(X.Item,{children:[C(X.Figure,{className:`text-secondary`,children:C(oe,{})}),C(X.Title,{children:`New Users`}),C(X.Value,{children:`4,200`}),C(X.Desc,{children:`↗︎ 400 (22%)`})]}),S(X.Item,{children:[C(X.Figure,{className:`text-secondary`,children:C(se,{})}),C(X.Title,{children:`New Registers`}),C(X.Value,{children:`1,200`}),C(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});p(()=>g(e,l,H))});let U=a(`rue:component:anchor`);d(l,U),f(()=>{let e=v(Z,{title:`居中布局`,summary:"展示 `center` 演示，适合居中对齐的仪表盘摘要。",tab:ee,code:_e,preview:()=>S(X,{className:`shadow`,children:[S(X.Item,{center:!0,children:[C(X.Title,{children:`Downloads`}),C(X.Value,{children:`31K`}),C(X.Desc,{children:`From January 1st to February 1st`})]}),S(X.Item,{center:!0,children:[C(X.Title,{children:`Users`}),C(X.Value,{className:`text-secondary`,children:`4,200`}),C(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),S(X.Item,{center:!0,children:[C(X.Title,{children:`New Registers`}),C(X.Value,{children:`1,200`}),C(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});p(()=>g(e,l,U))});let W=a(`rue:component:anchor`);d(l,W),f(()=>{let e=v(Z,{title:`纵向布局`,summary:"展示 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:te,code:ve,preview:()=>S(X,{direction:`vertical`,className:`shadow`,children:[S(X.Item,{children:[C(X.Title,{children:`Downloads`}),C(X.Value,{children:`31K`}),C(X.Desc,{children:`Jan 1st - Feb 1st`})]}),S(X.Item,{children:[C(X.Title,{children:`New Users`}),C(X.Value,{children:`4,200`}),C(X.Desc,{children:`↗︎ 400 (22%)`})]}),S(X.Item,{children:[C(X.Title,{children:`New Registers`}),C(X.Value,{children:`1,200`}),C(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});p(()=>g(e,l,W))});let G=a(`rue:component:anchor`);d(l,G),f(()=>{let e=v(Z,{title:`响应式布局`,summary:`展示基础 responsive 示例，小屏纵向，大屏横向。`,tab:ne,code:ye,preview:()=>S(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[S(X.Item,{children:[C(X.Title,{children:`Downloads`}),C(X.Value,{children:`31K`}),C(X.Desc,{children:`Jan 1st - Feb 1st`})]}),S(X.Item,{children:[C(X.Title,{children:`New Users`}),C(X.Value,{children:`4,200`}),C(X.Desc,{children:`↗︎ 400 (22%)`})]}),S(X.Item,{children:[C(X.Title,{children:`New Registers`}),C(X.Value,{children:`1,200`}),C(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});p(()=>g(e,l,G))});let K=a(`rue:component:anchor`);d(l,K),f(()=>{let e=v(Z,{title:`带操作按钮`,summary:`展示基础按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:D,code:be,preview:()=>S(X,{className:`bg-base-100 border border-base-300`,children:[S(X.Item,{children:[C(X.Title,{children:`Account balance`}),C(X.Value,{children:`$89,400`}),C(X.Actions,{children:C(w,{color:`success`,size:`xs`,children:`Add funds`})})]}),S(X.Item,{children:[C(X.Title,{children:`Current balance`}),C(X.Value,{children:`$89,400`}),S(X.Actions,{children:[C(w,{size:`xs`,children:`Withdrawal`}),C(w,{size:`xs`,children:`Deposit`})]})]})]})});p(()=>g(e,l,K))});let q=u(`h2`,l);d(l,q),d(q,c(`API`));let J=u(`h3`,l);d(l,J),d(J,c(`Stat`));let Y=a(`rue:component:anchor`);d(l,Y),f(()=>{let e=v(Q,{rows:xe});p(()=>g(e,l,Y))});let $=u(`h3`,l);d(l,$),d($,c(`Stat.Item`));let Te=a(`rue:component:anchor`);d(l,Te),f(()=>{let e=v(Q,{rows:Se});p(()=>g(e,l,Te))});let Ee=u(`h3`,l);d(l,Ee),d(Ee,c(`Stat.Value`));let De=a(`rue:component:anchor`);d(l,De),f(()=>{let e=v(Q,{rows:Ce});p(()=>g(e,l,De))});let Oe=u(`h3`,l);d(l,Oe),d(Oe,c(`Stat.Timer / Stat.Countdown`));let ke=a(`rue:component:anchor`);return d(l,ke),f(()=>{let e=v(Q,{rows:we});p(()=>g(e,l,ke))}),t})}),l,y),l})};export{$ as default};