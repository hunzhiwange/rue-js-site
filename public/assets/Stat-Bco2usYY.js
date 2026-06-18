import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Yt as s,Z as c,a as l,at as u,c as d,dt as f,gt as p,l as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as x,i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as C}from"./Code-CZqShVUj.js";import{t as w}from"./button-CyhsFe_V.js";import{t as T}from"./avatar-DH5Osxl8.js";import{t as ee}from"./tabs-BBuGEPV7.js";import{r as E}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var te=`.`,ne=`,`,D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>e==null||e===!1?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},P=({value:e,formatter:t,precision:n,decimalSeparator:r=te,groupSeparator:i=ne})=>{if(typeof t==`function`)return t(e);if(!M(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},F=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=M(e)?P({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>{let n=I(t),r=L(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},z=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,B=r=>m(i=>{let s=c(),l=a(`rue:slot:anchor`);n(s,l),o(()=>{let e=M(r.figure)?m(()=>{let e=c(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(q,{className:r.figureClassName,style:r.figureStyle,children:r.figure});t(()=>g(n,e,i))}),e}):``;t(()=>g(e,s,l))}),n(s,e(` `));let u=a(`rue:slot:anchor`);n(s,u),o(()=>{let e=M(r.title)?m(()=>{let e=c(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(U,{className:r.titleClassName,style:r.titleStyle,children:r.title});t(()=>g(n,e,i))}),e}):``;t(()=>g(e,s,u))}),n(s,e(` `));let d=a(`rue:slot:anchor`);n(s,d),o(()=>{let e=r.loading||M(r.value)||M(r.prefix)||M(r.suffix)||typeof r.formatter==`function`||typeof r.valueRender==`function`?m(()=>{let e=c(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(G,{className:r.valueClassName,style:r.valueStyle,value:r.value,prefix:r.prefix,suffix:r.suffix,loading:r.loading,valueRender:r.valueRender,formatter:r.formatter,precision:r.precision,decimalSeparator:r.decimalSeparator,groupSeparator:r.groupSeparator});t(()=>g(n,e,i))}),e}):``;t(()=>g(e,s,d))}),n(s,e(` `));let f=a(`rue:slot:anchor`);n(s,f),o(()=>{let e=M(r.desc)?m(()=>{let e=c(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(K,{className:r.descClassName,style:r.descStyle,children:r.desc});t(()=>g(n,e,i))}),e}):``;t(()=>g(e,s,f))}),n(s,e(` `));let p=a(`rue:slot:anchor`);return n(s,p),o(()=>{let e=M(r.actions)?m(()=>{let e=c(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(J,{className:r.actionsClassName,style:r.actionsStyle,children:r.actions});t(()=>g(n,e,i))}),e}):``;t(()=>g(e,s,p))}),s}),V=e=>{let{cls:r}=y(`useSetup:0:0`,()=>h(()=>({cls:y(`computed:1:0`,()=>p(()=>j(e.direction?`stats stats-${e.direction}`:`stats`,e.className)))})));return e.items&&e.items.length?m(t=>{let s=i(`div`,t);o(()=>{_(s,r.get())});let c=a(`rue:list:start`),l=a(`rue:list:end`);n(s,c),n(s,l);let u=new Map;return o(()=>{u=b({items:e.items||[],getKey:(e,t)=>e.key??t,elements:u,parent:c.parentNode,before:l,start:c,renderItem:(e,t,n,r,i)=>{d(v(H,{key:e.key??i,...e}),t,n,r)}})}),s}):m(s=>{let c=i(`div`,s);o(()=>{_(c,r.get())});let l=a(`rue:children:anchor`);return n(c,l),o(()=>{let n=e.children;t(()=>g(n,c,l))}),c})},H=e=>{let{cls:r,shouldRenderChildren:s}=y(`useSetup:0:0:dup1`,()=>h(()=>({cls:y(`computed:1:1`,()=>p(()=>j(e.center?`stat place-items-center`:`stat`,e.className))),shouldRenderChildren:y(`computed:1:2`,()=>p(()=>M(e.children)))})));return m(l=>{let u=i(`div`,l);o(()=>{_(u,r.get())});let d=a(`rue:slot:anchor`);return n(u,d),o(()=>{let r=s.get()?e.children:m(()=>{let r=c(),i=a(`rue:component:anchor`);return n(r,i),o(()=>{let n=v(B,{figure:e.figure,figureClassName:e.figureClassName,figureStyle:e.figureStyle,title:e.title,titleClassName:e.titleClassName,titleStyle:e.titleStyle,value:e.value,valueClassName:e.valueClassName,valueStyle:e.valueStyle,valueRender:e.valueRender,prefix:e.prefix,suffix:e.suffix,loading:e.loading,formatter:e.formatter,precision:e.precision,decimalSeparator:e.decimalSeparator,groupSeparator:e.groupSeparator,desc:e.desc,descClassName:e.descClassName,descStyle:e.descStyle,actions:e.actions,actionsClassName:e.actionsClassName,actionsStyle:e.actionsStyle});t(()=>g(n,r,i))}),r});t(()=>g(r,u,d))}),u})},U=e=>m(r=>{let s=i(`div`,r);o(()=>{_(s,j(`stat-title`,e.className))}),o(()=>{let t=e.style;f(s,t)});let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>g(n,s,c))}),s}),W=e=>m(r=>{let s=i(`span`,r);_(s,`stat-value-text`),u(s,`data-stat-value`,`true`);let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>g(n,s,c))}),s}),G=r=>{let{content:s}=y(`useSetup:0:0:dup2`,()=>h(()=>({content:y(`computed:1:3`,()=>p(()=>F({value:r.value,children:r.children,valueRender:r.valueRender,formatter:r.formatter,precision:r.precision,decimalSeparator:r.decimalSeparator,groupSeparator:r.groupSeparator})))})));return m(l=>{let d=i(`div`,l);o(()=>{_(d,j(`stat-value`,r.className))}),o(()=>{let e=r.style;f(d,e)});let p=a(`rue:slot:anchor`);n(d,p),o(()=>{let e=M(r.prefix)?m(()=>{let e=c(),s=i(`span`,e);n(e,s),_(s,`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`),u(s,`aria-hidden`,`true`);let l=a(`rue:slot:anchor`);return n(s,l),o(()=>{let e=r.prefix;t(()=>g(e,s,l))}),e}):``;t(()=>g(e,d,p))}),n(d,e(` `));let h=a(`rue:slot:anchor`);n(d,h),o(()=>{let e=r.loading?m(()=>{let e=c(),t=i(`span`,e);return n(e,t),_(t,`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`),u(t,`data-stat-loading`,`true`),u(t,`aria-hidden`,`true`),e}):M(s.get())?m(()=>{let e=c(),t=a(`rue:component:anchor`);return n(e,t),g(v(W,{children:s.get()}),e,t),e}):``;t(()=>g(e,d,h))}),n(d,e(` `));let y=a(`rue:slot:anchor`);return n(d,y),o(()=>{let e=M(r.suffix)?m(()=>{let e=c(),s=i(`span`,e);n(e,s),_(s,`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`),u(s,`aria-hidden`,`true`);let l=a(`rue:slot:anchor`);return n(s,l),o(()=>{let e=r.suffix;t(()=>g(e,s,l))}),e}):``;t(()=>g(e,d,y))}),d})},K=e=>m(r=>{let s=i(`div`,r);o(()=>{_(s,j(`stat-desc`,e.className))}),o(()=>{let t=e.style;f(s,t)});let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>g(n,s,c))}),s}),q=e=>m(r=>{let s=i(`div`,r);o(()=>{_(s,j(`stat-figure`,e.className))}),o(()=>{let t=e.style;f(s,t)});let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>g(n,s,c))}),s}),J=e=>m(r=>{let s=i(`div`,r);o(()=>{_(s,j(`stat-actions`,e.className))}),o(()=>{let t=e.style;f(s,t)});let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>g(n,s,c))}),s}),Y=d=>{let f=y(`useSetup:0:0:dup3`,()=>h(()=>{let e=y(`ref:1:4`,()=>r(0)),t=y(`computed:1:5`,()=>p(()=>j(d.center?`stat place-items-center`:`stat`,d.className))),n=null,i=!1,a=()=>{n!=null&&(clearInterval(n),n=null)},o=()=>{let t=N(d.value);if(t==null)return e.value=0,d.onChange&&d.onChange(void 0),a(),!1;let n=Date.now(),r=(d.type===void 0?`countdown`:d.type)===`countup`?Math.max(n-t,0):Math.max(t-n,0);return e.value=r,d.onChange&&d.onChange(r),(d.type===void 0?`countdown`:d.type)===`countdown`&&r<=0?(a(),i||(i=!0,d.onFinish&&d.onFinish()),!1):(i=!1,!0)},c=()=>{a(),o()&&(n=setInterval(o,z(d.format===void 0?D:d.format,d.interval)))};return y(`watch:1:6`,()=>s(()=>`${d.type===void 0?`countdown`:d.type}|${N(d.value)??`invalid`}|${d.format===void 0?D:d.format}|${d.interval??``}`,()=>{i=!1,c()},{immediate:!0})),l(a),{duration:e,cls:t,stopTimer:a,syncDuration:o,startTimer:c,timer:n,finished:i}})),{duration:b,cls:x,stopTimer:S,syncDuration:C,startTimer:w}=f,{timer:T,finished:ee}=f;return m(r=>{let s=i(`div`,r);o(()=>{_(s,x.get())});let l=a(`rue:slot:anchor`);n(s,l),o(()=>{let e=M(d.figure)?m(()=>{let e=c(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=v(q,{className:d.figureClassName,style:d.figureStyle,children:d.figure});t(()=>g(n,e,r))}),e}):``;t(()=>g(e,s,l))}),n(s,e(` `));let f=a(`rue:slot:anchor`);n(s,f),o(()=>{let e=M(d.title)?m(()=>{let e=c(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=v(U,{className:d.titleClassName,style:d.titleStyle,children:d.title});t(()=>g(n,e,r))}),e}):``;t(()=>g(e,s,f))});let p=a(`rue:component:anchor`);n(s,p);let h=m(()=>{let e=c(),r=i(`span`,e);n(e,r),o(()=>{u(r,`data-stat-timer`,String(d.type===void 0?`countdown`:d.type))}),o(()=>{u(r,`aria-live`,String(d.ariaLive??((d.format===void 0?D:d.format).includes(`S`)?`off`:`polite`)))}),o(()=>{u(r,`aria-label`,String(R(b.value,d.format===void 0?D:d.format)))});let s=a(`rue:slot:anchor`);return n(r,s),o(()=>{let e=R(b.value,d.format===void 0?D:d.format);t(()=>g(e,r,s))}),e});o(()=>{let e=v(G,{className:d.valueClassName,style:d.valueStyle,prefix:d.prefix,suffix:d.suffix,loading:d.loading,children:h});t(()=>g(e,s,p))});let y=a(`rue:slot:anchor`);n(s,y),o(()=>{let e=M(d.desc)?m(()=>{let e=c(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=v(K,{className:d.descClassName,style:d.descStyle,children:d.desc});t(()=>g(n,e,r))}),e}):``;t(()=>g(e,s,y))}),n(s,e(` `));let S=a(`rue:slot:anchor`);return n(s,S),o(()=>{let e=M(d.actions)?m(()=>{let e=c(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=v(J,{className:d.actionsClassName,style:d.actionsStyle,children:d.actions});t(()=>g(n,e,r))}),e}):``;t(()=>g(e,s,S))}),s})},X=Object.assign(V,{Item:H,Title:U,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:e=>m(r=>{let i=c(),s=a(`rue:component:anchor`);return n(i,s),o(()=>{let n=v(Y,{...e,type:`countdown`});t(()=>g(n,i,s))}),i})}),Z=r=>m(s=>{let l=i(`div`,s);_(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),_(u,`flex flex-wrap items-start justify-between gap-3`);let d=i(`div`,u);n(u,d);let f=i(`h2`,d);n(d,f),_(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(f,e(`# `));let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let e=r.title;t(()=>g(e,f,p))});let h=a(`rue:slot:anchor`);n(d,h),o(()=>{let e=r.summary?m(()=>{let e=c(),s=i(`p`,e);n(e,s),_(s,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(s,l),o(()=>{let e=r.summary;t(()=>g(e,s,l))}),e}):``;t(()=>g(e,d,h))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=v(ee,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>g(e,l,y))});let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?r.preview():m(()=>{let e=c(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(C,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>g(n,e,i))}),e});t(()=>g(e,l,b))}),l}),Q=r=>m(s=>{let l=i(`div`,s);_(l,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=i(`table`,l);n(l,d),_(d,`table table-zebra`);let f=i(`thead`,d);n(d,f);let p=i(`tr`,f);n(f,p);let h=i(`th`,p);n(p,h),n(h,e(`属性`));let v=i(`th`,p);n(p,v),n(v,e(`说明`));let y=i(`th`,p);n(p,y),n(y,e(`类型`));let x=i(`th`,p);n(p,x),n(x,e(`默认值`));let S=i(`tbody`,d);n(d,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=b({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,s,l,d)=>{g(m(()=>{let r=c(),s=i(`tr`,r);n(r,s),o(()=>{u(s,`key`,String(e.prop))});let l=i(`td`,s);n(s,l);let d=i(`code`,l);n(l,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>g(n,d,f))});let p=i(`td`,s);n(s,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>g(n,p,m))});let h=i(`td`,s);n(s,h);let _=i(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>g(n,_,v))});let y=i(`td`,s);n(s,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>g(n,b,x))}),r}),r,s)}})}),l}),re=()=>m(e=>{let t=i(`svg`,e);u(t,`xmlns`,`http://www.w3.org/2000/svg`),u(t,`fill`,`none`),u(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let r=i(`path`,t);return n(t,r),u(r,`stroke-linecap`,`round`),u(r,`stroke-linejoin`,`round`),u(r,`stroke-width`,`2`),u(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t}),ie=()=>m(e=>{let t=i(`svg`,e);u(t,`xmlns`,`http://www.w3.org/2000/svg`),u(t,`fill`,`none`),u(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let r=i(`path`,t);return n(t,r),u(r,`stroke-linecap`,`round`),u(r,`stroke-linejoin`,`round`),u(r,`stroke-width`,`2`),u(r,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),t}),ae=()=>m(e=>{let t=i(`svg`,e);u(t,`xmlns`,`http://www.w3.org/2000/svg`),u(t,`fill`,`none`),u(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let r=i(`path`,t);return n(t,r),u(r,`stroke-linecap`,`round`),u(r,`stroke-linejoin`,`round`),u(r,`stroke-width`,`2`),u(r,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),t}),oe=()=>m(e=>{let t=i(`svg`,e);u(t,`xmlns`,`http://www.w3.org/2000/svg`),u(t,`fill`,`none`),u(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let r=i(`path`,t);return n(t,r),u(r,`stroke-linecap`,`round`),u(r,`stroke-linejoin`,`round`),u(r,`stroke-width`,`2`),u(r,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),t}),se=()=>m(e=>{let t=i(`svg`,e);u(t,`xmlns`,`http://www.w3.org/2000/svg`),u(t,`fill`,`none`),u(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let r=i(`path`,t);return n(t,r),u(r,`stroke-linecap`,`round`),u(r,`stroke-linejoin`,`round`),u(r,`stroke-width`,`2`),u(r,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),t}),ce=[{figure:S(re,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:S(`span`,{className:`text-secondary`,children:`4,200`}),desc:S(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:S(w,{color:`success`,size:`xs`,children:`Add funds`})}],le=`<Stat className="shadow">
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
    desc="formatter 适合把原始值映射成业务文案"
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
</Stat>`,xe=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],Se=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则保留原始小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],Ce=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],we=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:s,tabItems:l,tabFormat:u,tabFormatter:d,tabLoading:f,tabTimer:p,tabWithIcons:b,tabGroup:C,tabCentered:ee,tabVertical:te,tabResponsive:ne,tabActions:D,deadline:O,startedAt:k}=y(`useSetup:0:0`,()=>h(()=>({tabBasic:y(`ref:1:0`,()=>r(`preview`)),tabItems:y(`ref:1:1`,()=>r(`preview`)),tabFormat:y(`ref:1:2`,()=>r(`preview`)),tabFormatter:y(`ref:1:3`,()=>r(`preview`)),tabLoading:y(`ref:1:4`,()=>r(`preview`)),tabTimer:y(`ref:1:5`,()=>r(`preview`)),tabWithIcons:y(`ref:1:6`,()=>r(`preview`)),tabGroup:y(`ref:1:7`,()=>r(`preview`)),tabCentered:y(`ref:1:8`,()=>r(`preview`)),tabVertical:y(`ref:1:9`,()=>r(`preview`)),tabResponsive:y(`ref:1:10`,()=>r(`preview`)),tabActions:y(`ref:1:11`,()=>r(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return m(r=>{let h=c(),y=a(`rue:component:anchor`);return n(h,y),g(v(E,{children:m(()=>{let r=c(),m=i(`div`,r);n(r,m),_(m,`max-w-none prose prose-sm md:prose-base`);let h=i(`h1`,m);n(m,h),n(h,e(`Stat 统计`));let y=i(`p`,m);n(m,y),_(y,`text-sm mt-3 mb-3`),n(y,e(`Stat 用于在一个块中展示数字与数据。这一轮增强保持 Rue 现有的 daisyUI 视觉语气，同时补上更接近常见统计组件的数值格式化、前后缀、loading 与 timer 能力。`));let E=i(`h2`,m);n(m,E),n(E,e(`功能概览`));let A=i(`ul`,m);n(m,A);let j=i(`li`,A);n(A,j),n(j,e(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式 demo。`));let M=i(`li`,A);n(A,M),n(M,e("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let N=i(`li`,A);n(A,N),n(N,e("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let P=i(`li`,A);n(A,P),n(P,e("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let F=a(`rue:component:anchor`);n(m,F),o(()=>{let e=v(Z,{title:`基础用法`,summary:`保留原始复合组件写法，适合完全自定义结构。`,tab:s,code:le,preview:()=>S(X,{className:`shadow`,children:x(X.Item,{children:[S(X.Title,{children:`Total Page Views`}),S(X.Value,{children:`89,400`}),S(X.Desc,{children:`21% more than last month`})]})})});t(()=>g(e,m,F))});let I=a(`rue:component:anchor`);n(m,I),o(()=>{let e=v(Z,{title:`数据驱动`,summary:`原有 items 数组能力保留，并自动兼容新的 value/prefix/loading 等增强属性。`,tab:l,code:ue,preview:()=>S(X,{items:ce,className:`shadow`})});t(()=>g(e,m,I))});let L=a(`rue:component:anchor`);n(m,L),o(()=>{let e=v(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:u,code:de,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),S(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})});t(()=>g(e,m,L))});let R=a(`rue:component:anchor`);n(m,R),o(()=>{let e=v(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:d,code:fe,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把原始值映射成业务文案`}),x(X.Item,{children:[S(X.Title,{children:`Storage`}),S(X.Value,{value:24576,suffix:`GB`,valueRender:e=>S(`span`,{className:`text-primary`,children:e})}),S(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})});t(()=>g(e,m,R))});let z=a(`rue:component:anchor`);n(m,z),o(()=>{let e=v(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:f,code:pe,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),S(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})});t(()=>g(e,m,z))});let B=a(`rue:component:anchor`);n(m,B),o(()=>{let e=v(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 提供常见统计组件里的核心计时能力，`Stat.Countdown` 作为倒计时别名保留。",tab:p,code:me,preview:()=>x(X,{className:`shadow`,children:[S(X.Timer,{title:`Campaign Countdown`,value:O,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),S(X.Timer,{type:`countup`,title:`Uptime`,value:k,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})});t(()=>g(e,m,B))});let V=a(`rue:component:anchor`);n(m,V),o(()=>{let e=v(Z,{title:`带图标或头像`,summary:`保留旧 demo，用于展示 figure 区的图标与头像承载能力。`,tab:b,code:he,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-primary`,children:S(ie,{})}),S(X.Title,{children:`Total Likes`}),S(X.Value,{className:`text-primary`,children:`25.6K`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(ae,{})}),S(X.Title,{children:`Page Views`}),S(X.Value,{className:`text-secondary`,children:`2.6M`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(T,{status:`online`,children:S(`div`,{className:`w-16 rounded-full`,children:S(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),S(X.Value,{children:`86%`}),S(X.Title,{children:`Tasks done`}),S(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})});t(()=>g(e,m,V))});let H=a(`rue:component:anchor`);n(m,H),o(()=>{let e=v(Z,{title:`组合统计卡`,summary:`保留旧版多列指标卡示例，适合运营面板和概览页。`,tab:C,code:ge,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(re,{})}),S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(oe,{})}),S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(se,{})}),S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});t(()=>g(e,m,H))});let U=a(`rue:component:anchor`);n(m,U),o(()=>{let e=v(Z,{title:`居中布局`,summary:"保留 `center` 演示，适合居中对齐的仪表盘摘要。",tab:ee,code:_e,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{center:!0,children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`From January 1st to February 1st`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`Users`}),S(X.Value,{className:`text-secondary`,children:`4,200`}),S(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});t(()=>g(e,m,U))});let W=a(`rue:component:anchor`);n(m,W),o(()=>{let e=v(Z,{title:`纵向布局`,summary:"保留 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:te,code:ve,preview:()=>x(X,{direction:`vertical`,className:`shadow`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});t(()=>g(e,m,W))});let G=a(`rue:component:anchor`);n(m,G),o(()=>{let e=v(Z,{title:`响应式布局`,summary:`保留旧版 responsive 示例，小屏纵向，大屏横向。`,tab:ne,code:ye,preview:()=>x(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});t(()=>g(e,m,G))});let K=a(`rue:component:anchor`);n(m,K),o(()=>{let e=v(Z,{title:`带操作按钮`,summary:`保留旧版按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:D,code:be,preview:()=>x(X,{className:`bg-base-100 border border-base-300`,children:[x(X.Item,{children:[S(X.Title,{children:`Account balance`}),S(X.Value,{children:`$89,400`}),S(X.Actions,{children:S(w,{color:`success`,size:`xs`,children:`Add funds`})})]}),x(X.Item,{children:[S(X.Title,{children:`Current balance`}),S(X.Value,{children:`$89,400`}),x(X.Actions,{children:[S(w,{size:`xs`,children:`Withdrawal`}),S(w,{size:`xs`,children:`Deposit`})]})]})]})});t(()=>g(e,m,K))});let q=i(`h2`,m);n(m,q),n(q,e(`API`));let J=i(`h3`,m);n(m,J),n(J,e(`Stat`));let Y=a(`rue:component:anchor`);n(m,Y),o(()=>{let e=v(Q,{rows:xe});t(()=>g(e,m,Y))});let $=i(`h3`,m);n(m,$),n($,e(`Stat.Item`));let Te=a(`rue:component:anchor`);n(m,Te),o(()=>{let e=v(Q,{rows:Se});t(()=>g(e,m,Te))});let Ee=i(`h3`,m);n(m,Ee),n(Ee,e(`Stat.Value`));let De=a(`rue:component:anchor`);n(m,De),o(()=>{let e=v(Q,{rows:Ce});t(()=>g(e,m,De))});let Oe=i(`h3`,m);n(m,Oe),n(Oe,e(`Stat.Timer / Stat.Countdown`));let ke=a(`rue:component:anchor`);return n(m,ke),o(()=>{let e=v(Q,{rows:we});t(()=>g(e,m,ke))}),r})}),h,y),h})};export{$ as default};