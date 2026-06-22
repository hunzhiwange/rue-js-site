import{Bt as e,Q as t,Vt as n,Xt as r,dt as i,i as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,s as p,t as m,tn as h,tt as g,vt as _,wt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as x,o as S}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as C}from"./Code-C5NjdoiC.js";import{t as w}from"./button-CgV0EoO3.js";import{t as T}from"./avatar-0JKr2rm4.js";import{t as ee}from"./tabs-C4UF43sZ.js";import{r as E}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var te=`.`,ne=`,`,D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>e==null||e===!1?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},P=({value:e,formatter:t,precision:n,decimalSeparator:r=te,groupSeparator:i=ne})=>{if(typeof t==`function`)return t(e);if(!M(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},F=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=M(e)?P({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>{let n=I(t),r=L(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},z=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,B=e=>s(r=>{let i=c(),a=g(`rue:slot:anchor`);t(i,a),n(()=>{let r=M(e.figure)?s(()=>{let r=c(),i=g(`rue:component:anchor`);return t(r,i),n(()=>{let t=m(q,{className:e.figureClassName,style:e.figureStyle,children:e.figure});h(()=>l(t,r,i))}),r}):``;h(()=>l(r,i,a))}),t(i,o(` `));let u=g(`rue:slot:anchor`);t(i,u),n(()=>{let r=M(e.title)?s(()=>{let r=c(),i=g(`rue:component:anchor`);return t(r,i),n(()=>{let t=m(U,{className:e.titleClassName,style:e.titleStyle,children:e.title});h(()=>l(t,r,i))}),r}):``;h(()=>l(r,i,u))}),t(i,o(` `));let d=g(`rue:slot:anchor`);t(i,d),n(()=>{let r=e.loading||M(e.value)||M(e.prefix)||M(e.suffix)||typeof e.formatter==`function`||typeof e.valueRender==`function`?s(()=>{let r=c(),i=g(`rue:component:anchor`);return t(r,i),n(()=>{let t=m(G,{className:e.valueClassName,style:e.valueStyle,value:e.value,prefix:e.prefix,suffix:e.suffix,loading:e.loading,valueRender:e.valueRender,formatter:e.formatter,precision:e.precision,decimalSeparator:e.decimalSeparator,groupSeparator:e.groupSeparator});h(()=>l(t,r,i))}),r}):``;h(()=>l(r,i,d))}),t(i,o(` `));let f=g(`rue:slot:anchor`);t(i,f),n(()=>{let r=M(e.desc)?s(()=>{let r=c(),i=g(`rue:component:anchor`);return t(r,i),n(()=>{let t=m(K,{className:e.descClassName,style:e.descStyle,children:e.desc});h(()=>l(t,r,i))}),r}):``;h(()=>l(r,i,f))}),t(i,o(` `));let p=g(`rue:slot:anchor`);return t(i,p),n(()=>{let r=M(e.actions)?s(()=>{let r=c(),i=g(`rue:component:anchor`);return t(r,i),n(()=>{let t=m(J,{className:e.actionsClassName,style:e.actionsStyle,children:e.actions});h(()=>l(t,r,i))}),r}):``;h(()=>l(r,i,p))}),i}),V=e=>{let{cls:r}=y(`useSetup:0:0`,()=>u(()=>({cls:y(`computed:1:0`,()=>v(()=>j(e.direction?`stats stats-${e.direction}`:`stats`,e.className)))})));return e.items&&e.items.length?s(i=>{let a=f(`div`,i);n(()=>{d(a,r.get())});let o=g(`rue:list:start`),s=g(`rue:list:end`);t(a,o),t(a,s);let c=new Map;return n(()=>{c=b({items:e.items||[],getKey:(e,t)=>e.key??t,elements:c,parent:o.parentNode,before:s,start:o,renderItem:(e,t,n,r,i)=>{p(m(H,{key:e.key??i,...e}),t,n,r)}})}),a}):s(i=>{let a=f(`div`,i);n(()=>{d(a,r.get())});let o=g(`rue:children:anchor`);return t(a,o),n(()=>{let t=e.children;h(()=>l(t,a,o))}),a})},H=e=>{let{cls:r,shouldRenderChildren:i}=y(`useSetup:0:0:dup1`,()=>u(()=>({cls:y(`computed:1:1`,()=>v(()=>j(e.center?`stat place-items-center`:`stat`,e.className))),shouldRenderChildren:y(`computed:1:2`,()=>v(()=>M(e.children)))})));return s(a=>{let o=f(`div`,a);n(()=>{d(o,r.get())});let u=g(`rue:slot:anchor`);return t(o,u),n(()=>{let r=i.get()?e.children:s(()=>{let r=c(),i=g(`rue:component:anchor`);return t(r,i),n(()=>{let t=m(B,{figure:e.figure,figureClassName:e.figureClassName,figureStyle:e.figureStyle,title:e.title,titleClassName:e.titleClassName,titleStyle:e.titleStyle,value:e.value,valueClassName:e.valueClassName,valueStyle:e.valueStyle,valueRender:e.valueRender,prefix:e.prefix,suffix:e.suffix,loading:e.loading,formatter:e.formatter,precision:e.precision,decimalSeparator:e.decimalSeparator,groupSeparator:e.groupSeparator,desc:e.desc,descClassName:e.descClassName,descStyle:e.descStyle,actions:e.actions,actionsClassName:e.actionsClassName,actionsStyle:e.actionsStyle});h(()=>l(t,r,i))}),r});h(()=>l(r,o,u))}),o})},U=e=>s(r=>{let i=f(`div`,r);n(()=>{d(i,j(`stat-title`,e.className))}),n(()=>{let t=e.style;_(i,t)});let a=g(`rue:children:anchor`);return t(i,a),n(()=>{let t=e.children;h(()=>l(t,i,a))}),i}),W=e=>s(r=>{let a=f(`span`,r);d(a,`stat-value-text`),i(a,`data-stat-value`,`true`);let o=g(`rue:children:anchor`);return t(a,o),n(()=>{let t=e.children;h(()=>l(t,a,o))}),a}),G=e=>{let{content:r}=y(`useSetup:0:0:dup2`,()=>u(()=>({content:y(`computed:1:3`,()=>v(()=>F({value:e.value,children:e.children,valueRender:e.valueRender,formatter:e.formatter,precision:e.precision,decimalSeparator:e.decimalSeparator,groupSeparator:e.groupSeparator})))})));return s(a=>{let u=f(`div`,a);n(()=>{d(u,j(`stat-value`,e.className))}),n(()=>{let t=e.style;_(u,t)});let p=g(`rue:slot:anchor`);t(u,p),n(()=>{let r=M(e.prefix)?s(()=>{let r=c(),a=f(`span`,r);t(r,a),d(a,`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`),i(a,`aria-hidden`,`true`);let o=g(`rue:slot:anchor`);return t(a,o),n(()=>{let t=e.prefix;h(()=>l(t,a,o))}),r}):``;h(()=>l(r,u,p))}),t(u,o(` `));let v=g(`rue:slot:anchor`);t(u,v),n(()=>{let n=e.loading?s(()=>{let e=c(),n=f(`span`,e);return t(e,n),d(n,`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`),i(n,`data-stat-loading`,`true`),i(n,`aria-hidden`,`true`),e}):M(r.get())?s(()=>{let e=c(),n=g(`rue:component:anchor`);return t(e,n),l(m(W,{children:r.get()}),e,n),e}):``;h(()=>l(n,u,v))}),t(u,o(` `));let y=g(`rue:slot:anchor`);return t(u,y),n(()=>{let r=M(e.suffix)?s(()=>{let r=c(),a=f(`span`,r);t(r,a),d(a,`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`),i(a,`aria-hidden`,`true`);let o=g(`rue:slot:anchor`);return t(a,o),n(()=>{let t=e.suffix;h(()=>l(t,a,o))}),r}):``;h(()=>l(r,u,y))}),u})},K=e=>s(r=>{let i=f(`div`,r);n(()=>{d(i,j(`stat-desc`,e.className))}),n(()=>{let t=e.style;_(i,t)});let a=g(`rue:children:anchor`);return t(i,a),n(()=>{let t=e.children;h(()=>l(t,i,a))}),i}),q=e=>s(r=>{let i=f(`div`,r);n(()=>{d(i,j(`stat-figure`,e.className))}),n(()=>{let t=e.style;_(i,t)});let a=g(`rue:children:anchor`);return t(i,a),n(()=>{let t=e.children;h(()=>l(t,i,a))}),i}),J=e=>s(r=>{let i=f(`div`,r);n(()=>{d(i,j(`stat-actions`,e.className))}),n(()=>{let t=e.style;_(i,t)});let a=g(`rue:children:anchor`);return t(i,a),n(()=>{let t=e.children;h(()=>l(t,i,a))}),i}),Y=p=>{let _=y(`useSetup:0:0:dup3`,()=>u(()=>{let t=y(`ref:1:4`,()=>r(0)),n=y(`computed:1:5`,()=>v(()=>j(p.center?`stat place-items-center`:`stat`,p.className))),i=null,o=!1,s=()=>{i!=null&&(clearInterval(i),i=null)},c=()=>{let e=N(p.value);if(e==null)return t.value=0,p.onChange&&p.onChange(void 0),s(),!1;let n=Date.now(),r=(p.type===void 0?`countdown`:p.type)===`countup`?Math.max(n-e,0):Math.max(e-n,0);return t.value=r,p.onChange&&p.onChange(r),(p.type===void 0?`countdown`:p.type)===`countdown`&&r<=0?(s(),o||(o=!0,p.onFinish&&p.onFinish()),!1):(o=!1,!0)},l=()=>{s(),c()&&(i=setInterval(c,z(p.format===void 0?D:p.format,p.interval)))};return y(`watch:1:6`,()=>e(()=>`${p.type===void 0?`countdown`:p.type}|${N(p.value)??`invalid`}|${p.format===void 0?D:p.format}|${p.interval??``}`,()=>{o=!1,l()},{immediate:!0})),a(s),{duration:t,cls:n,stopTimer:s,syncDuration:c,startTimer:l,timer:i,finished:o}})),{duration:b,cls:x,stopTimer:S,syncDuration:C,startTimer:w}=_,{timer:T,finished:ee}=_;return s(e=>{let r=f(`div`,e);n(()=>{d(r,x.get())});let a=g(`rue:slot:anchor`);t(r,a),n(()=>{let e=M(p.figure)?s(()=>{let e=c(),r=g(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(q,{className:p.figureClassName,style:p.figureStyle,children:p.figure});h(()=>l(t,e,r))}),e}):``;h(()=>l(e,r,a))}),t(r,o(` `));let u=g(`rue:slot:anchor`);t(r,u),n(()=>{let e=M(p.title)?s(()=>{let e=c(),r=g(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(U,{className:p.titleClassName,style:p.titleStyle,children:p.title});h(()=>l(t,e,r))}),e}):``;h(()=>l(e,r,u))});let _=g(`rue:component:anchor`);t(r,_);let v=s(()=>{let e=c(),r=f(`span`,e);t(e,r),n(()=>{i(r,`data-stat-timer`,String(p.type===void 0?`countdown`:p.type))}),n(()=>{i(r,`aria-live`,String(p.ariaLive??((p.format===void 0?D:p.format).includes(`S`)?`off`:`polite`)))}),n(()=>{i(r,`aria-label`,String(R(b.value,p.format===void 0?D:p.format)))});let a=g(`rue:slot:anchor`);return t(r,a),n(()=>{let e=R(b.value,p.format===void 0?D:p.format);h(()=>l(e,r,a))}),e});n(()=>{let e=m(G,{className:p.valueClassName,style:p.valueStyle,prefix:p.prefix,suffix:p.suffix,loading:p.loading,children:v});h(()=>l(e,r,_))});let y=g(`rue:slot:anchor`);t(r,y),n(()=>{let e=M(p.desc)?s(()=>{let e=c(),r=g(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(K,{className:p.descClassName,style:p.descStyle,children:p.desc});h(()=>l(t,e,r))}),e}):``;h(()=>l(e,r,y))}),t(r,o(` `));let S=g(`rue:slot:anchor`);return t(r,S),n(()=>{let e=M(p.actions)?s(()=>{let e=c(),r=g(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(J,{className:p.actionsClassName,style:p.actionsStyle,children:p.actions});h(()=>l(t,e,r))}),e}):``;h(()=>l(e,r,S))}),r})},X=Object.assign(V,{Item:H,Title:U,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:e=>s(r=>{let i=c(),a=g(`rue:component:anchor`);return t(i,a),n(()=>{let t=m(Y,{...e,type:`countdown`});h(()=>l(t,i,a))}),i})}),Z=e=>s(r=>{let i=f(`div`,r);d(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=f(`div`,i);t(i,a),d(a,`flex flex-wrap items-start justify-between gap-3`);let u=f(`div`,a);t(a,u);let p=f(`h2`,u);t(u,p),d(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(p,o(`# `));let _=g(`rue:slot:anchor`);t(p,_),n(()=>{let t=e.title;h(()=>l(t,p,_))});let v=g(`rue:slot:anchor`);t(u,v),n(()=>{let r=e.summary?s(()=>{let r=c(),i=f(`p`,r);t(r,i),d(i,`m-0 text-sm opacity-70`);let a=g(`rue:slot:anchor`);return t(i,a),n(()=>{let t=e.summary;h(()=>l(t,i,a))}),r}):``;h(()=>l(r,u,v))});let y=g(`rue:component:anchor`);t(i,y),n(()=>{let t=m(ee,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>l(t,i,y))});let b=g(`rue:slot:anchor`);return t(i,b),n(()=>{let r=e.tab.value===`preview`?e.preview():s(()=>{let r=c(),i=g(`rue:component:anchor`);return t(r,i),n(()=>{let t=m(C,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>l(t,r,i))}),r});h(()=>l(r,i,b))}),i}),Q=e=>s(r=>{let a=f(`div`,r);d(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=f(`table`,a);t(a,u),d(u,`table table-zebra`);let p=f(`thead`,u);t(u,p);let m=f(`tr`,p);t(p,m);let _=f(`th`,m);t(m,_),t(_,o(`属性`));let v=f(`th`,m);t(m,v),t(v,o(`说明`));let y=f(`th`,m);t(m,y),t(y,o(`类型`));let x=f(`th`,m);t(m,x),t(x,o(`默认值`));let S=f(`tbody`,u);t(u,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,o,u)=>{l(s(()=>{let r=c(),a=f(`tr`,r);t(r,a),n(()=>{i(a,`key`,String(e.prop))});let o=f(`td`,a);t(a,o);let s=f(`code`,o);t(o,s);let u=g(`rue:slot:anchor`);t(s,u),n(()=>{let t=e.prop;h(()=>l(t,s,u))});let d=f(`td`,a);t(a,d);let p=g(`rue:slot:anchor`);t(d,p),n(()=>{let t=e.description;h(()=>l(t,d,p))});let m=f(`td`,a);t(a,m);let _=f(`code`,m);t(m,_);let v=g(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;h(()=>l(t,_,v))});let y=f(`td`,a);t(a,y);let b=f(`code`,y);t(y,b);let x=g(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;h(()=>l(t,b,x))}),r}),r,a)}})}),a}),re=()=>s(e=>{let n=f(`svg`,e);i(n,`xmlns`,`http://www.w3.org/2000/svg`),i(n,`fill`,`none`),i(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,n);return t(n,r),i(r,`stroke-linecap`,`round`),i(r,`stroke-linejoin`,`round`),i(r,`stroke-width`,`2`),i(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n}),ie=()=>s(e=>{let n=f(`svg`,e);i(n,`xmlns`,`http://www.w3.org/2000/svg`),i(n,`fill`,`none`),i(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,n);return t(n,r),i(r,`stroke-linecap`,`round`),i(r,`stroke-linejoin`,`round`),i(r,`stroke-width`,`2`),i(r,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),n}),ae=()=>s(e=>{let n=f(`svg`,e);i(n,`xmlns`,`http://www.w3.org/2000/svg`),i(n,`fill`,`none`),i(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,n);return t(n,r),i(r,`stroke-linecap`,`round`),i(r,`stroke-linejoin`,`round`),i(r,`stroke-width`,`2`),i(r,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),n}),oe=()=>s(e=>{let n=f(`svg`,e);i(n,`xmlns`,`http://www.w3.org/2000/svg`),i(n,`fill`,`none`),i(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,n);return t(n,r),i(r,`stroke-linecap`,`round`),i(r,`stroke-linejoin`,`round`),i(r,`stroke-width`,`2`),i(r,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),n}),se=()=>s(e=>{let n=f(`svg`,e);i(n,`xmlns`,`http://www.w3.org/2000/svg`),i(n,`fill`,`none`),i(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,n);return t(n,r),i(r,`stroke-linecap`,`round`),i(r,`stroke-linejoin`,`round`),i(r,`stroke-width`,`2`),i(r,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),n}),ce=[{figure:x(re,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:x(`span`,{className:`text-secondary`,children:`4,200`}),desc:x(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:x(w,{color:`success`,size:`xs`,children:`Add funds`})}],le=`<Stat className="shadow">
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
</Stat>`,xe=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],Se=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则展示基础小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],Ce=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],we=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:e,tabItems:i,tabFormat:a,tabFormatter:p,tabLoading:_,tabTimer:v,tabWithIcons:b,tabGroup:C,tabCentered:ee,tabVertical:te,tabResponsive:ne,tabActions:D,deadline:O,startedAt:k}=y(`useSetup:0:0`,()=>u(()=>({tabBasic:y(`ref:1:0`,()=>r(`preview`)),tabItems:y(`ref:1:1`,()=>r(`preview`)),tabFormat:y(`ref:1:2`,()=>r(`preview`)),tabFormatter:y(`ref:1:3`,()=>r(`preview`)),tabLoading:y(`ref:1:4`,()=>r(`preview`)),tabTimer:y(`ref:1:5`,()=>r(`preview`)),tabWithIcons:y(`ref:1:6`,()=>r(`preview`)),tabGroup:y(`ref:1:7`,()=>r(`preview`)),tabCentered:y(`ref:1:8`,()=>r(`preview`)),tabVertical:y(`ref:1:9`,()=>r(`preview`)),tabResponsive:y(`ref:1:10`,()=>r(`preview`)),tabActions:y(`ref:1:11`,()=>r(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return s(r=>{let u=c(),y=g(`rue:component:anchor`);return t(u,y),l(m(E,{children:s(()=>{let r=c(),s=f(`div`,r);t(r,s),d(s,`max-w-none prose prose-sm md:prose-base`);let u=f(`h1`,s);t(s,u),t(u,o(`Stat 统计`));let y=f(`p`,s);t(s,y),d(y,`text-sm mt-3 mb-3`),t(y,o(`Stat 用于在一个块中展示数字与数据。组件保持 Rue 当前的 daisyUI 视觉语气，同时提供数值格式化、前后缀、loading 与 timer 能力。`));let E=f(`h2`,s);t(s,E),t(E,o(`功能概览`));let A=f(`ul`,s);t(s,A);let j=f(`li`,A);t(A,j),t(j,o(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式示例。`));let M=f(`li`,A);t(A,M),t(M,o("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let N=f(`li`,A);t(A,N),t(N,o("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let P=f(`li`,A);t(A,P),t(P,o("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let F=g(`rue:component:anchor`);t(s,F),n(()=>{let t=m(Z,{title:`基础用法`,summary:`展示基础复合组件写法，适合完全自定义结构。`,tab:e,code:le,preview:()=>x(X,{className:`shadow`,children:S(X.Item,{children:[x(X.Title,{children:`Total Page Views`}),x(X.Value,{children:`89,400`}),x(X.Desc,{children:`21% more than last month`})]})})});h(()=>l(t,s,F))});let I=g(`rue:component:anchor`);t(s,I),n(()=>{let e=m(Z,{title:`数据驱动`,summary:`基础 items 数组能力保持，并自动支持新的 value/prefix/loading 等增强属性。`,tab:i,code:ue,preview:()=>x(X,{items:ce,className:`shadow`})});h(()=>l(e,s,I))});let L=g(`rue:component:anchor`);t(s,L),n(()=>{let e=m(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:a,code:de,preview:()=>S(X,{className:`shadow`,children:[x(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),x(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})});h(()=>l(e,s,L))});let R=g(`rue:component:anchor`);t(s,R),n(()=>{let e=m(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:p,code:fe,preview:()=>S(X,{className:`shadow`,children:[x(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把基础值映射成业务文案`}),S(X.Item,{children:[x(X.Title,{children:`Storage`}),x(X.Value,{value:24576,suffix:`GB`,valueRender:e=>x(`span`,{className:`text-primary`,children:e})}),x(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})});h(()=>l(e,s,R))});let z=g(`rue:component:anchor`);t(s,z),n(()=>{let e=m(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:_,code:pe,preview:()=>S(X,{className:`shadow`,children:[x(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),x(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})});h(()=>l(e,s,z))});let B=g(`rue:component:anchor`);t(s,B),n(()=>{let e=m(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 提供常见统计组件里的核心计时能力，`Stat.Countdown` 作为倒计时别名保持。",tab:v,code:me,preview:()=>S(X,{className:`shadow`,children:[x(X.Timer,{title:`Campaign Countdown`,value:O,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),x(X.Timer,{type:`countup`,title:`Uptime`,value:k,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})});h(()=>l(e,s,B))});let V=g(`rue:component:anchor`);t(s,V),n(()=>{let e=m(Z,{title:`带图标或头像`,summary:`整合基础示例，用于展示 figure 区的图标与头像承载能力。`,tab:b,code:he,preview:()=>S(X,{className:`shadow`,children:[S(X.Item,{children:[x(X.Figure,{className:`text-primary`,children:x(ie,{})}),x(X.Title,{children:`Total Likes`}),x(X.Value,{className:`text-primary`,children:`25.6K`}),x(X.Desc,{children:`21% more than last month`})]}),S(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(ae,{})}),x(X.Title,{children:`Page Views`}),x(X.Value,{className:`text-secondary`,children:`2.6M`}),x(X.Desc,{children:`21% more than last month`})]}),S(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(T,{status:`online`,children:x(`div`,{className:`w-16 rounded-full`,children:x(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),x(X.Value,{children:`86%`}),x(X.Title,{children:`Tasks done`}),x(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})});h(()=>l(e,s,V))});let H=g(`rue:component:anchor`);t(s,H),n(()=>{let e=m(Z,{title:`组合统计卡`,summary:`展示基础多列指标卡示例，适合运营面板和概览页。`,tab:C,code:ge,preview:()=>S(X,{className:`shadow`,children:[S(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(re,{})}),x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`Jan 1st - Feb 1st`})]}),S(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(oe,{})}),x(X.Title,{children:`New Users`}),x(X.Value,{children:`4,200`}),x(X.Desc,{children:`↗︎ 400 (22%)`})]}),S(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(se,{})}),x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});h(()=>l(e,s,H))});let U=g(`rue:component:anchor`);t(s,U),n(()=>{let e=m(Z,{title:`居中布局`,summary:"展示 `center` 演示，适合居中对齐的仪表盘摘要。",tab:ee,code:_e,preview:()=>S(X,{className:`shadow`,children:[S(X.Item,{center:!0,children:[x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`From January 1st to February 1st`})]}),S(X.Item,{center:!0,children:[x(X.Title,{children:`Users`}),x(X.Value,{className:`text-secondary`,children:`4,200`}),x(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),S(X.Item,{center:!0,children:[x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});h(()=>l(e,s,U))});let W=g(`rue:component:anchor`);t(s,W),n(()=>{let e=m(Z,{title:`纵向布局`,summary:"展示 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:te,code:ve,preview:()=>S(X,{direction:`vertical`,className:`shadow`,children:[S(X.Item,{children:[x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`Jan 1st - Feb 1st`})]}),S(X.Item,{children:[x(X.Title,{children:`New Users`}),x(X.Value,{children:`4,200`}),x(X.Desc,{children:`↗︎ 400 (22%)`})]}),S(X.Item,{children:[x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});h(()=>l(e,s,W))});let G=g(`rue:component:anchor`);t(s,G),n(()=>{let e=m(Z,{title:`响应式布局`,summary:`展示基础 responsive 示例，小屏纵向，大屏横向。`,tab:ne,code:ye,preview:()=>S(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[S(X.Item,{children:[x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`Jan 1st - Feb 1st`})]}),S(X.Item,{children:[x(X.Title,{children:`New Users`}),x(X.Value,{children:`4,200`}),x(X.Desc,{children:`↗︎ 400 (22%)`})]}),S(X.Item,{children:[x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});h(()=>l(e,s,G))});let K=g(`rue:component:anchor`);t(s,K),n(()=>{let e=m(Z,{title:`带操作按钮`,summary:`展示基础按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:D,code:be,preview:()=>S(X,{className:`bg-base-100 border border-base-300`,children:[S(X.Item,{children:[x(X.Title,{children:`Account balance`}),x(X.Value,{children:`$89,400`}),x(X.Actions,{children:x(w,{color:`success`,size:`xs`,children:`Add funds`})})]}),S(X.Item,{children:[x(X.Title,{children:`Current balance`}),x(X.Value,{children:`$89,400`}),S(X.Actions,{children:[x(w,{size:`xs`,children:`Withdrawal`}),x(w,{size:`xs`,children:`Deposit`})]})]})]})});h(()=>l(e,s,K))});let q=f(`h2`,s);t(s,q),t(q,o(`API`));let J=f(`h3`,s);t(s,J),t(J,o(`Stat`));let Y=g(`rue:component:anchor`);t(s,Y),n(()=>{let e=m(Q,{rows:xe});h(()=>l(e,s,Y))});let $=f(`h3`,s);t(s,$),t($,o(`Stat.Item`));let Te=g(`rue:component:anchor`);t(s,Te),n(()=>{let e=m(Q,{rows:Se});h(()=>l(e,s,Te))});let Ee=f(`h3`,s);t(s,Ee),t(Ee,o(`Stat.Value`));let De=g(`rue:component:anchor`);t(s,De),n(()=>{let e=m(Q,{rows:Ce});h(()=>l(e,s,De))});let Oe=f(`h3`,s);t(s,Oe),t(Oe,o(`Stat.Timer / Stat.Countdown`));let ke=g(`rue:component:anchor`);return t(s,ke),n(()=>{let e=m(Q,{rows:we});h(()=>l(e,s,ke))}),r})}),u,y),u})};export{$ as default};