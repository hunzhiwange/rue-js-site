import{$t as e,Jt as t,Q as n,Rt as r,St as i,dt as a,et as o,gt as s,i as c,in as l,l as u,lt as d,nt as f,o as p,rt as m,s as h,t as g,tt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as x,i as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as C}from"./Code-4SUSUwRg.js";import{t as w}from"./button-COZLI6MM.js";import{t as T}from"./avatar-CjkC9owe.js";import{t as ee}from"./tabs-Duzh3URW.js";import{r as E}from"./SidebarPlaygroundDesign-EU389JDE.js";var te=`.`,ne=`,`,D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>e==null||e===!1?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},P=({value:e,formatter:t,precision:n,decimalSeparator:r=te,groupSeparator:i=ne})=>{if(typeof t==`function`)return t(e);if(!M(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},F=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=M(e)?P({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>{let n=I(t),r=L(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},z=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,B=t=>u(r=>{let i=_(),a=o(`rue:slot:anchor`);n(i,a),v(()=>{let r=M(t.figure)?u(()=>{let r=_(),i=o(`rue:component:anchor`);return n(r,i),v(()=>{let n=g(q,{className:t.figureClassName,style:t.figureStyle,children:t.figure});e(()=>p(n,r,i))}),r}):``;e(()=>p(r,i,a))}),n(i,m(` `));let s=o(`rue:slot:anchor`);n(i,s),v(()=>{let r=M(t.title)?u(()=>{let r=_(),i=o(`rue:component:anchor`);return n(r,i),v(()=>{let n=g(U,{className:t.titleClassName,style:t.titleStyle,children:t.title});e(()=>p(n,r,i))}),r}):``;e(()=>p(r,i,s))}),n(i,m(` `));let c=o(`rue:slot:anchor`);n(i,c),v(()=>{let r=t.loading||M(t.value)||M(t.prefix)||M(t.suffix)||typeof t.formatter==`function`||typeof t.valueRender==`function`?u(()=>{let r=_(),i=o(`rue:component:anchor`);return n(r,i),v(()=>{let n=g(G,{className:t.valueClassName,style:t.valueStyle,value:t.value,prefix:t.prefix,suffix:t.suffix,loading:t.loading,valueRender:t.valueRender,formatter:t.formatter,precision:t.precision,decimalSeparator:t.decimalSeparator,groupSeparator:t.groupSeparator});e(()=>p(n,r,i))}),r}):``;e(()=>p(r,i,c))}),n(i,m(` `));let l=o(`rue:slot:anchor`);n(i,l),v(()=>{let r=M(t.desc)?u(()=>{let r=_(),i=o(`rue:component:anchor`);return n(r,i),v(()=>{let n=g(K,{className:t.descClassName,style:t.descStyle,children:t.desc});e(()=>p(n,r,i))}),r}):``;e(()=>p(r,i,l))}),n(i,m(` `));let d=o(`rue:slot:anchor`);return n(i,d),v(()=>{let r=M(t.actions)?u(()=>{let r=_(),i=o(`rue:component:anchor`);return n(r,i),v(()=>{let n=g(J,{className:t.actionsClassName,style:t.actionsStyle,children:t.actions});e(()=>p(n,r,i))}),r}):``;e(()=>p(r,i,d))}),i}),V=t=>{let{cls:r}=y(`useSetup:0:0`,()=>l(()=>({cls:y(`computed:1:0`,()=>i(()=>j(t.direction?`stats stats-${t.direction}`:`stats`,t.className)))})));return t.items&&t.items.length?u(e=>{let i=f(`div`,e);v(()=>{a(i,r.get())});let s=o(`rue:list:start`),c=o(`rue:list:end`);n(i,s),n(i,c);let l=new Map;return v(()=>{l=b({items:t.items||[],getKey:(e,t)=>e.key??t,elements:l,parent:s.parentNode,before:c,start:s,renderItem:(e,t,n,r,i)=>{h(g(H,{key:e.key??i,...e}),t,n,r)}})}),i}):u(i=>{let s=f(`div`,i);v(()=>{a(s,r.get())});let c=o(`rue:children:anchor`);return n(s,c),v(()=>{let n=t.children;e(()=>p(n,s,c))}),s})},H=t=>{let{cls:r,shouldRenderChildren:s}=y(`useSetup:0:0:dup1`,()=>l(()=>({cls:y(`computed:1:1`,()=>i(()=>j(t.center?`stat place-items-center`:`stat`,t.className))),shouldRenderChildren:y(`computed:1:2`,()=>i(()=>M(t.children)))})));return u(i=>{let c=f(`div`,i);v(()=>{a(c,r.get())});let l=o(`rue:slot:anchor`);return n(c,l),v(()=>{let r=s.get()?t.children:u(()=>{let r=_(),i=o(`rue:component:anchor`);return n(r,i),v(()=>{let n=g(B,{figure:t.figure,figureClassName:t.figureClassName,figureStyle:t.figureStyle,title:t.title,titleClassName:t.titleClassName,titleStyle:t.titleStyle,value:t.value,valueClassName:t.valueClassName,valueStyle:t.valueStyle,valueRender:t.valueRender,prefix:t.prefix,suffix:t.suffix,loading:t.loading,formatter:t.formatter,precision:t.precision,decimalSeparator:t.decimalSeparator,groupSeparator:t.groupSeparator,desc:t.desc,descClassName:t.descClassName,descStyle:t.descStyle,actions:t.actions,actionsClassName:t.actionsClassName,actionsStyle:t.actionsStyle});e(()=>p(n,r,i))}),r});e(()=>p(r,c,l))}),c})},U=t=>u(r=>{let i=f(`div`,r);v(()=>{a(i,j(`stat-title`,t.className))}),v(()=>{let e=t.style;s(i,e)});let c=o(`rue:children:anchor`);return n(i,c),v(()=>{let n=t.children;e(()=>p(n,i,c))}),i}),W=t=>u(r=>{let i=f(`span`,r);a(i,`stat-value-text`),d(i,`data-stat-value`,`true`);let s=o(`rue:children:anchor`);return n(i,s),v(()=>{let n=t.children;e(()=>p(n,i,s))}),i}),G=t=>{let{content:r}=y(`useSetup:0:0:dup2`,()=>l(()=>({content:y(`computed:1:3`,()=>i(()=>F({value:t.value,children:t.children,valueRender:t.valueRender,formatter:t.formatter,precision:t.precision,decimalSeparator:t.decimalSeparator,groupSeparator:t.groupSeparator})))})));return u(i=>{let c=f(`div`,i);v(()=>{a(c,j(`stat-value`,t.className))}),v(()=>{let e=t.style;s(c,e)});let l=o(`rue:slot:anchor`);n(c,l),v(()=>{let r=M(t.prefix)?u(()=>{let r=_(),i=f(`span`,r);n(r,i),a(i,`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`),d(i,`aria-hidden`,`true`);let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let n=t.prefix;e(()=>p(n,i,s))}),r}):``;e(()=>p(r,c,l))}),n(c,m(` `));let h=o(`rue:slot:anchor`);n(c,h),v(()=>{let i=t.loading?u(()=>{let e=_(),t=f(`span`,e);return n(e,t),a(t,`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`),d(t,`data-stat-loading`,`true`),d(t,`aria-hidden`,`true`),e}):M(r.get())?u(()=>{let e=_(),t=o(`rue:component:anchor`);return n(e,t),p(g(W,{children:r.get()}),e,t),e}):``;e(()=>p(i,c,h))}),n(c,m(` `));let y=o(`rue:slot:anchor`);return n(c,y),v(()=>{let r=M(t.suffix)?u(()=>{let r=_(),i=f(`span`,r);n(r,i),a(i,`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`),d(i,`aria-hidden`,`true`);let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let n=t.suffix;e(()=>p(n,i,s))}),r}):``;e(()=>p(r,c,y))}),c})},K=t=>u(r=>{let i=f(`div`,r);v(()=>{a(i,j(`stat-desc`,t.className))}),v(()=>{let e=t.style;s(i,e)});let c=o(`rue:children:anchor`);return n(i,c),v(()=>{let n=t.children;e(()=>p(n,i,c))}),i}),q=t=>u(r=>{let i=f(`div`,r);v(()=>{a(i,j(`stat-figure`,t.className))}),v(()=>{let e=t.style;s(i,e)});let c=o(`rue:children:anchor`);return n(i,c),v(()=>{let n=t.children;e(()=>p(n,i,c))}),i}),J=t=>u(r=>{let i=f(`div`,r);v(()=>{a(i,j(`stat-actions`,t.className))}),v(()=>{let e=t.style;s(i,e)});let c=o(`rue:children:anchor`);return n(i,c),v(()=>{let n=t.children;e(()=>p(n,i,c))}),i}),Y=s=>{let h=y(`useSetup:0:0:dup3`,()=>l(()=>{let e=y(`ref:1:4`,()=>t(0)),n=y(`computed:1:5`,()=>i(()=>j(s.center?`stat place-items-center`:`stat`,s.className))),a=null,o=!1,l=()=>{a!=null&&(clearInterval(a),a=null)},u=()=>{let t=N(s.value);if(t==null)return e.value=0,s.onChange&&s.onChange(void 0),l(),!1;let n=Date.now(),r=(s.type===void 0?`countdown`:s.type)===`countup`?Math.max(n-t,0):Math.max(t-n,0);return e.value=r,s.onChange&&s.onChange(r),(s.type===void 0?`countdown`:s.type)===`countdown`&&r<=0?(l(),o||(o=!0,s.onFinish&&s.onFinish()),!1):(o=!1,!0)},d=()=>{l(),u()&&(a=setInterval(u,z(s.format===void 0?D:s.format,s.interval)))};return y(`watch:1:6`,()=>r(()=>`${s.type===void 0?`countdown`:s.type}|${N(s.value)??`invalid`}|${s.format===void 0?D:s.format}|${s.interval??``}`,()=>{o=!1,d()},{immediate:!0})),c(l),{duration:e,cls:n,stopTimer:l,syncDuration:u,startTimer:d,timer:a,finished:o}})),{duration:b,cls:x,stopTimer:S,syncDuration:C,startTimer:w}=h,{timer:T,finished:ee}=h;return u(t=>{let r=f(`div`,t);v(()=>{a(r,x.get())});let i=o(`rue:slot:anchor`);n(r,i),v(()=>{let t=M(s.figure)?u(()=>{let t=_(),r=o(`rue:component:anchor`);return n(t,r),v(()=>{let n=g(q,{className:s.figureClassName,style:s.figureStyle,children:s.figure});e(()=>p(n,t,r))}),t}):``;e(()=>p(t,r,i))}),n(r,m(` `));let c=o(`rue:slot:anchor`);n(r,c),v(()=>{let t=M(s.title)?u(()=>{let t=_(),r=o(`rue:component:anchor`);return n(t,r),v(()=>{let n=g(U,{className:s.titleClassName,style:s.titleStyle,children:s.title});e(()=>p(n,t,r))}),t}):``;e(()=>p(t,r,c))});let l=o(`rue:component:anchor`);n(r,l);let h=u(()=>{let t=_(),r=f(`span`,t);n(t,r),v(()=>{d(r,`data-stat-timer`,String(s.type===void 0?`countdown`:s.type))}),v(()=>{d(r,`aria-live`,String(s.ariaLive??((s.format===void 0?D:s.format).includes(`S`)?`off`:`polite`)))}),v(()=>{d(r,`aria-label`,String(R(b.value,s.format===void 0?D:s.format)))});let i=o(`rue:slot:anchor`);return n(r,i),v(()=>{let t=R(b.value,s.format===void 0?D:s.format);e(()=>p(t,r,i))}),t});v(()=>{let t=g(G,{className:s.valueClassName,style:s.valueStyle,prefix:s.prefix,suffix:s.suffix,loading:s.loading,children:h});e(()=>p(t,r,l))});let y=o(`rue:slot:anchor`);n(r,y),v(()=>{let t=M(s.desc)?u(()=>{let t=_(),r=o(`rue:component:anchor`);return n(t,r),v(()=>{let n=g(K,{className:s.descClassName,style:s.descStyle,children:s.desc});e(()=>p(n,t,r))}),t}):``;e(()=>p(t,r,y))}),n(r,m(` `));let S=o(`rue:slot:anchor`);return n(r,S),v(()=>{let t=M(s.actions)?u(()=>{let t=_(),r=o(`rue:component:anchor`);return n(t,r),v(()=>{let n=g(J,{className:s.actionsClassName,style:s.actionsStyle,children:s.actions});e(()=>p(n,t,r))}),t}):``;e(()=>p(t,r,S))}),r})},X=Object.assign(V,{Item:H,Title:U,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:t=>u(r=>{let i=_(),a=o(`rue:component:anchor`);return n(i,a),v(()=>{let n=g(Y,{...t,type:`countdown`});e(()=>p(n,i,a))}),i})}),Z=t=>u(r=>{let i=f(`div`,r);a(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=f(`div`,i);n(i,s),a(s,`flex flex-wrap items-start justify-between gap-3`);let c=f(`div`,s);n(s,c);let l=f(`h2`,c);n(c,l),a(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(l,m(`# `));let d=o(`rue:slot:anchor`);n(l,d),v(()=>{let n=t.title;e(()=>p(n,l,d))});let h=o(`rue:slot:anchor`);n(c,h),v(()=>{let r=t.summary?u(()=>{let r=_(),i=f(`p`,r);n(r,i),a(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let n=t.summary;e(()=>p(n,i,s))}),r}):``;e(()=>p(r,c,h))});let y=o(`rue:component:anchor`);n(i,y),v(()=>{let n=g(ee,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>p(n,i,y))});let b=o(`rue:slot:anchor`);return n(i,b),v(()=>{let r=t.tab.value===`preview`?t.preview():u(()=>{let r=_(),i=o(`rue:component:anchor`);return n(r,i),v(()=>{let n=g(C,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>p(n,r,i))}),r});e(()=>p(r,i,b))}),i}),Q=t=>u(r=>{let i=f(`div`,r);a(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=f(`table`,i);n(i,s),a(s,`table table-zebra`);let c=f(`thead`,s);n(s,c);let l=f(`tr`,c);n(c,l);let h=f(`th`,l);n(l,h),n(h,m(`属性`));let g=f(`th`,l);n(l,g),n(g,m(`说明`));let y=f(`th`,l);n(l,y),n(y,m(`类型`));let x=f(`th`,l);n(l,x),n(x,m(`默认值`));let S=f(`tbody`,s);n(s,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return v(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,a,s)=>{p(u(()=>{let r=_(),i=f(`tr`,r);n(r,i),v(()=>{d(i,`key`,String(t.prop))});let a=f(`td`,i);n(i,a);let s=f(`code`,a);n(a,s);let c=o(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.prop;e(()=>p(n,s,c))});let l=f(`td`,i);n(i,l);let u=o(`rue:slot:anchor`);n(l,u),v(()=>{let n=t.description;e(()=>p(n,l,u))});let m=f(`td`,i);n(i,m);let h=f(`code`,m);n(m,h);let g=o(`rue:slot:anchor`);n(h,g),v(()=>{let n=t.type;e(()=>p(n,h,g))});let y=f(`td`,i);n(i,y);let b=f(`code`,y);n(y,b);let x=o(`rue:slot:anchor`);return n(b,x),v(()=>{let n=t.defaultValue;e(()=>p(n,b,x))}),r}),r,i)}})}),i}),re=()=>u(e=>{let t=f(`svg`,e);d(t,`xmlns`,`http://www.w3.org/2000/svg`),d(t,`fill`,`none`),d(t,`viewBox`,`0 0 24 24`),a(t,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,t);return n(t,r),d(r,`stroke-linecap`,`round`),d(r,`stroke-linejoin`,`round`),d(r,`stroke-width`,`2`),d(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t}),ie=()=>u(e=>{let t=f(`svg`,e);d(t,`xmlns`,`http://www.w3.org/2000/svg`),d(t,`fill`,`none`),d(t,`viewBox`,`0 0 24 24`),a(t,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,t);return n(t,r),d(r,`stroke-linecap`,`round`),d(r,`stroke-linejoin`,`round`),d(r,`stroke-width`,`2`),d(r,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),t}),ae=()=>u(e=>{let t=f(`svg`,e);d(t,`xmlns`,`http://www.w3.org/2000/svg`),d(t,`fill`,`none`),d(t,`viewBox`,`0 0 24 24`),a(t,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,t);return n(t,r),d(r,`stroke-linecap`,`round`),d(r,`stroke-linejoin`,`round`),d(r,`stroke-width`,`2`),d(r,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),t}),oe=()=>u(e=>{let t=f(`svg`,e);d(t,`xmlns`,`http://www.w3.org/2000/svg`),d(t,`fill`,`none`),d(t,`viewBox`,`0 0 24 24`),a(t,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,t);return n(t,r),d(r,`stroke-linecap`,`round`),d(r,`stroke-linejoin`,`round`),d(r,`stroke-width`,`2`),d(r,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),t}),se=()=>u(e=>{let t=f(`svg`,e);d(t,`xmlns`,`http://www.w3.org/2000/svg`),d(t,`fill`,`none`),d(t,`viewBox`,`0 0 24 24`),a(t,`inline-block w-8 h-8 stroke-current`);let r=f(`path`,t);return n(t,r),d(r,`stroke-linecap`,`round`),d(r,`stroke-linejoin`,`round`),d(r,`stroke-width`,`2`),d(r,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),t}),ce=[{figure:S(re,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:S(`span`,{className:`text-secondary`,children:`4,200`}),desc:S(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:S(w,{color:`success`,size:`xs`,children:`Add funds`})}],le=`<Stat className="shadow">
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
</Stat>`,xe=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],Se=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则展示基础小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],Ce=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],we=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:r,tabItems:i,tabFormat:s,tabFormatter:c,tabLoading:d,tabTimer:h,tabWithIcons:b,tabGroup:C,tabCentered:ee,tabVertical:te,tabResponsive:ne,tabActions:D,deadline:O,startedAt:k}=y(`useSetup:0:0`,()=>l(()=>({tabBasic:y(`ref:1:0`,()=>t(`preview`)),tabItems:y(`ref:1:1`,()=>t(`preview`)),tabFormat:y(`ref:1:2`,()=>t(`preview`)),tabFormatter:y(`ref:1:3`,()=>t(`preview`)),tabLoading:y(`ref:1:4`,()=>t(`preview`)),tabTimer:y(`ref:1:5`,()=>t(`preview`)),tabWithIcons:y(`ref:1:6`,()=>t(`preview`)),tabGroup:y(`ref:1:7`,()=>t(`preview`)),tabCentered:y(`ref:1:8`,()=>t(`preview`)),tabVertical:y(`ref:1:9`,()=>t(`preview`)),tabResponsive:y(`ref:1:10`,()=>t(`preview`)),tabActions:y(`ref:1:11`,()=>t(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return u(t=>{let l=_(),y=o(`rue:component:anchor`);return n(l,y),p(g(E,{children:u(()=>{let t=_(),l=f(`div`,t);n(t,l),a(l,`max-w-none prose prose-sm md:prose-base`);let u=f(`h1`,l);n(l,u),n(u,m(`Stat 统计`));let y=f(`p`,l);n(l,y),a(y,`text-sm mt-3 mb-3`),n(y,m(`Stat 用于在一个块中展示数字与数据。组件保持 Rue 当前的 daisyUI 视觉语气，同时提供数值格式化、前后缀、loading 与 timer 能力。`));let E=f(`h2`,l);n(l,E),n(E,m(`功能概览`));let A=f(`ul`,l);n(l,A);let j=f(`li`,A);n(A,j),n(j,m(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式示例。`));let M=f(`li`,A);n(A,M),n(M,m("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let N=f(`li`,A);n(A,N),n(N,m("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let P=f(`li`,A);n(A,P),n(P,m("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let F=o(`rue:component:anchor`);n(l,F),v(()=>{let t=g(Z,{title:`基础用法`,summary:`展示基础复合组件写法，适合完全自定义结构。`,tab:r,code:le,preview:()=>S(X,{className:`shadow`,children:x(X.Item,{children:[S(X.Title,{children:`Total Page Views`}),S(X.Value,{children:`89,400`}),S(X.Desc,{children:`21% more than last month`})]})})});e(()=>p(t,l,F))});let I=o(`rue:component:anchor`);n(l,I),v(()=>{let t=g(Z,{title:`数据驱动`,summary:`基础 items 数组能力保持，并自动支持新的 value/prefix/loading 等增强属性。`,tab:i,code:ue,preview:()=>S(X,{items:ce,className:`shadow`})});e(()=>p(t,l,I))});let L=o(`rue:component:anchor`);n(l,L),v(()=>{let t=g(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:s,code:de,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),S(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})});e(()=>p(t,l,L))});let R=o(`rue:component:anchor`);n(l,R),v(()=>{let t=g(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:c,code:fe,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把基础值映射成业务文案`}),x(X.Item,{children:[S(X.Title,{children:`Storage`}),S(X.Value,{value:24576,suffix:`GB`,valueRender:e=>S(`span`,{className:`text-primary`,children:e})}),S(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})});e(()=>p(t,l,R))});let z=o(`rue:component:anchor`);n(l,z),v(()=>{let t=g(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:d,code:pe,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),S(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})});e(()=>p(t,l,z))});let B=o(`rue:component:anchor`);n(l,B),v(()=>{let t=g(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 提供常见统计组件里的核心计时能力，`Stat.Countdown` 作为倒计时别名保持。",tab:h,code:me,preview:()=>x(X,{className:`shadow`,children:[S(X.Timer,{title:`Campaign Countdown`,value:O,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),S(X.Timer,{type:`countup`,title:`Uptime`,value:k,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})});e(()=>p(t,l,B))});let V=o(`rue:component:anchor`);n(l,V),v(()=>{let t=g(Z,{title:`带图标或头像`,summary:`整合基础示例，用于展示 figure 区的图标与头像承载能力。`,tab:b,code:he,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-primary`,children:S(ie,{})}),S(X.Title,{children:`Total Likes`}),S(X.Value,{className:`text-primary`,children:`25.6K`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(ae,{})}),S(X.Title,{children:`Page Views`}),S(X.Value,{className:`text-secondary`,children:`2.6M`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(T,{status:`online`,children:S(`div`,{className:`w-16 rounded-full`,children:S(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),S(X.Value,{children:`86%`}),S(X.Title,{children:`Tasks done`}),S(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})});e(()=>p(t,l,V))});let H=o(`rue:component:anchor`);n(l,H),v(()=>{let t=g(Z,{title:`组合统计卡`,summary:`展示基础多列指标卡示例，适合运营面板和概览页。`,tab:C,code:ge,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(re,{})}),S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(oe,{})}),S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(se,{})}),S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});e(()=>p(t,l,H))});let U=o(`rue:component:anchor`);n(l,U),v(()=>{let t=g(Z,{title:`居中布局`,summary:"展示 `center` 演示，适合居中对齐的仪表盘摘要。",tab:ee,code:_e,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{center:!0,children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`From January 1st to February 1st`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`Users`}),S(X.Value,{className:`text-secondary`,children:`4,200`}),S(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});e(()=>p(t,l,U))});let W=o(`rue:component:anchor`);n(l,W),v(()=>{let t=g(Z,{title:`纵向布局`,summary:"展示 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:te,code:ve,preview:()=>x(X,{direction:`vertical`,className:`shadow`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});e(()=>p(t,l,W))});let G=o(`rue:component:anchor`);n(l,G),v(()=>{let t=g(Z,{title:`响应式布局`,summary:`展示基础 responsive 示例，小屏纵向，大屏横向。`,tab:ne,code:ye,preview:()=>x(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});e(()=>p(t,l,G))});let K=o(`rue:component:anchor`);n(l,K),v(()=>{let t=g(Z,{title:`带操作按钮`,summary:`展示基础按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:D,code:be,preview:()=>x(X,{className:`bg-base-100 border border-base-300`,children:[x(X.Item,{children:[S(X.Title,{children:`Account balance`}),S(X.Value,{children:`$89,400`}),S(X.Actions,{children:S(w,{color:`success`,size:`xs`,children:`Add funds`})})]}),x(X.Item,{children:[S(X.Title,{children:`Current balance`}),S(X.Value,{children:`$89,400`}),x(X.Actions,{children:[S(w,{size:`xs`,children:`Withdrawal`}),S(w,{size:`xs`,children:`Deposit`})]})]})]})});e(()=>p(t,l,K))});let q=f(`h2`,l);n(l,q),n(q,m(`API`));let J=f(`h3`,l);n(l,J),n(J,m(`Stat`));let Y=o(`rue:component:anchor`);n(l,Y),v(()=>{let t=g(Q,{rows:xe});e(()=>p(t,l,Y))});let $=f(`h3`,l);n(l,$),n($,m(`Stat.Item`));let Te=o(`rue:component:anchor`);n(l,Te),v(()=>{let t=g(Q,{rows:Se});e(()=>p(t,l,Te))});let Ee=f(`h3`,l);n(l,Ee),n(Ee,m(`Stat.Value`));let De=o(`rue:component:anchor`);n(l,De),v(()=>{let t=g(Q,{rows:Ce});e(()=>p(t,l,De))});let Oe=f(`h3`,l);n(l,Oe),n(Oe,m(`Stat.Timer / Stat.Countdown`));let ke=o(`rue:component:anchor`);return n(l,ke),v(()=>{let t=g(Q,{rows:we});e(()=>p(t,l,ke))}),t})}),l,y),l})};export{$ as default};