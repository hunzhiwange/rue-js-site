import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,Zt as o,et as s,i as c,l,lt as u,o as d,pt as f,s as p,st as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as x,i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as C}from"./Code-BIscIyEp.js";import{t as w}from"./button-CeShl0h_.js";import{t as T}from"./avatar-Btt7KeUi.js";import{t as ee}from"./tabs-CZWMQq5i.js";import{r as E}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var te=`.`,ne=`,`,D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>e==null||e===!1?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},P=({value:e,formatter:t,precision:n,decimalSeparator:r=te,groupSeparator:i=ne})=>{if(typeof t==`function`)return t(e);if(!M(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},F=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=M(e)?P({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>{let n=I(t),r=L(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},z=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,B=a=>l(o=>{let s=e(),c=t(`rue:slot:anchor`);i(s,c),n(()=>{let o=M(a.figure)?l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(q,{className:a.figureClassName,style:a.figureStyle,children:a.figure});r(()=>d(e,o,s))}),o}):``;r(()=>d(o,s,c))}),i(s,g(` `));let u=t(`rue:slot:anchor`);i(s,u),n(()=>{let o=M(a.title)?l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(U,{className:a.titleClassName,style:a.titleStyle,children:a.title});r(()=>d(e,o,s))}),o}):``;r(()=>d(o,s,u))}),i(s,g(` `));let f=t(`rue:slot:anchor`);i(s,f),n(()=>{let o=a.loading||M(a.value)||M(a.prefix)||M(a.suffix)||typeof a.formatter==`function`||typeof a.valueRender==`function`?l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(G,{className:a.valueClassName,style:a.valueStyle,value:a.value,prefix:a.prefix,suffix:a.suffix,loading:a.loading,valueRender:a.valueRender,formatter:a.formatter,precision:a.precision,decimalSeparator:a.decimalSeparator,groupSeparator:a.groupSeparator});r(()=>d(e,o,s))}),o}):``;r(()=>d(o,s,f))}),i(s,g(` `));let p=t(`rue:slot:anchor`);i(s,p),n(()=>{let o=M(a.desc)?l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(K,{className:a.descClassName,style:a.descStyle,children:a.desc});r(()=>d(e,o,s))}),o}):``;r(()=>d(o,s,p))}),i(s,g(` `));let m=t(`rue:slot:anchor`);return i(s,m),n(()=>{let o=M(a.actions)?l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(J,{className:a.actionsClassName,style:a.actionsStyle,children:a.actions});r(()=>d(e,o,s))}),o}):``;r(()=>d(o,s,m))}),s}),V=e=>{let{cls:o}=y(`useSetup:0:0`,()=>a(()=>({cls:y(`computed:1:0`,()=>_(()=>j(e.direction?`stats stats-${e.direction}`:`stats`,e.className)))})));return e.items&&e.items.length?l(r=>{let a=s(`div`,r);n(()=>{u(a,o.get())});let c=t(`rue:list:start`),l=t(`rue:list:end`);i(a,c),i(a,l);let d=new Map;return n(()=>{d=b({items:e.items||[],getKey:(e,t)=>e.key??t,elements:d,parent:c.parentNode,before:l,start:c,renderItem:(e,t,n,r,i)=>{p(h(H,{key:e.key??i,...e}),t,n,r)}})}),a}):l(a=>{let c=s(`div`,a);n(()=>{u(c,o.get())});let l=t(`rue:children:anchor`);return i(c,l),n(()=>{let t=e.children;r(()=>d(t,c,l))}),c})},H=o=>{let{cls:c,shouldRenderChildren:f}=y(`useSetup:0:0:dup1`,()=>a(()=>({cls:y(`computed:1:1`,()=>_(()=>j(o.center?`stat place-items-center`:`stat`,o.className))),shouldRenderChildren:y(`computed:1:2`,()=>_(()=>M(o.children)))})));return l(a=>{let p=s(`div`,a);n(()=>{u(p,c.get())});let m=t(`rue:slot:anchor`);return i(p,m),n(()=>{let a=f.get()?o.children:l(()=>{let a=e(),s=t(`rue:component:anchor`);return i(a,s),n(()=>{let e=h(B,{figure:o.figure,figureClassName:o.figureClassName,figureStyle:o.figureStyle,title:o.title,titleClassName:o.titleClassName,titleStyle:o.titleStyle,value:o.value,valueClassName:o.valueClassName,valueStyle:o.valueStyle,valueRender:o.valueRender,prefix:o.prefix,suffix:o.suffix,loading:o.loading,formatter:o.formatter,precision:o.precision,decimalSeparator:o.decimalSeparator,groupSeparator:o.groupSeparator,desc:o.desc,descClassName:o.descClassName,descStyle:o.descStyle,actions:o.actions,actionsClassName:o.actionsClassName,actionsStyle:o.actionsStyle});r(()=>d(e,a,s))}),a});r(()=>d(a,p,m))}),p})},U=e=>l(a=>{let o=s(`div`,a);n(()=>{u(o,j(`stat-title`,e.className))}),n(()=>{let t=e.style;f(o,t)});let c=t(`rue:children:anchor`);return i(o,c),n(()=>{let t=e.children;r(()=>d(t,o,c))}),o}),W=e=>l(a=>{let o=s(`span`,a);u(o,`stat-value-text`),m(o,`data-stat-value`,`true`);let c=t(`rue:children:anchor`);return i(o,c),n(()=>{let t=e.children;r(()=>d(t,o,c))}),o}),G=o=>{let{content:c}=y(`useSetup:0:0:dup2`,()=>a(()=>({content:y(`computed:1:3`,()=>_(()=>F({value:o.value,children:o.children,valueRender:o.valueRender,formatter:o.formatter,precision:o.precision,decimalSeparator:o.decimalSeparator,groupSeparator:o.groupSeparator})))})));return l(a=>{let p=s(`div`,a);n(()=>{u(p,j(`stat-value`,o.className))}),n(()=>{let e=o.style;f(p,e)});let _=t(`rue:slot:anchor`);i(p,_),n(()=>{let a=M(o.prefix)?l(()=>{let a=e(),c=s(`span`,a);i(a,c),u(c,`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`),m(c,`aria-hidden`,`true`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=o.prefix;r(()=>d(e,c,l))}),a}):``;r(()=>d(a,p,_))}),i(p,g(` `));let v=t(`rue:slot:anchor`);i(p,v),n(()=>{let n=o.loading?l(()=>{let t=e(),n=s(`span`,t);return i(t,n),u(n,`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`),m(n,`data-stat-loading`,`true`),m(n,`aria-hidden`,`true`),t}):M(c.get())?l(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(h(W,{children:c.get()}),n,r),n}):``;r(()=>d(n,p,v))}),i(p,g(` `));let y=t(`rue:slot:anchor`);return i(p,y),n(()=>{let a=M(o.suffix)?l(()=>{let a=e(),c=s(`span`,a);i(a,c),u(c,`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`),m(c,`aria-hidden`,`true`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=o.suffix;r(()=>d(e,c,l))}),a}):``;r(()=>d(a,p,y))}),p})},K=e=>l(a=>{let o=s(`div`,a);n(()=>{u(o,j(`stat-desc`,e.className))}),n(()=>{let t=e.style;f(o,t)});let c=t(`rue:children:anchor`);return i(o,c),n(()=>{let t=e.children;r(()=>d(t,o,c))}),o}),q=e=>l(a=>{let o=s(`div`,a);n(()=>{u(o,j(`stat-figure`,e.className))}),n(()=>{let t=e.style;f(o,t)});let c=t(`rue:children:anchor`);return i(o,c),n(()=>{let t=e.children;r(()=>d(t,o,c))}),o}),J=e=>l(a=>{let o=s(`div`,a);n(()=>{u(o,j(`stat-actions`,e.className))}),n(()=>{let t=e.style;f(o,t)});let c=t(`rue:children:anchor`);return i(o,c),n(()=>{let t=e.children;r(()=>d(t,o,c))}),o}),Y=f=>{let p=y(`useSetup:0:0:dup3`,()=>a(()=>{let e=y(`ref:1:4`,()=>v(0)),t=y(`computed:1:5`,()=>_(()=>j(f.center?`stat place-items-center`:`stat`,f.className))),n=null,r=!1,i=()=>{n!=null&&(clearInterval(n),n=null)},a=()=>{let t=N(f.value);if(t==null)return e.value=0,f.onChange&&f.onChange(void 0),i(),!1;let n=Date.now(),a=(f.type===void 0?`countdown`:f.type)===`countup`?Math.max(n-t,0):Math.max(t-n,0);return e.value=a,f.onChange&&f.onChange(a),(f.type===void 0?`countdown`:f.type)===`countdown`&&a<=0?(i(),r||(r=!0,f.onFinish&&f.onFinish()),!1):(r=!1,!0)},s=()=>{i(),a()&&(n=setInterval(a,z(f.format===void 0?D:f.format,f.interval)))};return y(`watch:1:6`,()=>o(()=>`${f.type===void 0?`countdown`:f.type}|${N(f.value)??`invalid`}|${f.format===void 0?D:f.format}|${f.interval??``}`,()=>{r=!1,s()},{immediate:!0})),c(i),{duration:e,cls:t,stopTimer:i,syncDuration:a,startTimer:s,timer:n,finished:r}})),{duration:b,cls:x,stopTimer:S,syncDuration:C,startTimer:w}=p,{timer:T,finished:ee}=p;return l(a=>{let o=s(`div`,a);n(()=>{u(o,x.get())});let c=t(`rue:slot:anchor`);i(o,c),n(()=>{let a=M(f.figure)?l(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=h(q,{className:f.figureClassName,style:f.figureStyle,children:f.figure});r(()=>d(e,a,o))}),a}):``;r(()=>d(a,o,c))}),i(o,g(` `));let p=t(`rue:slot:anchor`);i(o,p),n(()=>{let a=M(f.title)?l(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=h(U,{className:f.titleClassName,style:f.titleStyle,children:f.title});r(()=>d(e,a,o))}),a}):``;r(()=>d(a,o,p))});let _=t(`rue:component:anchor`);i(o,_);let v=l(()=>{let a=e(),o=s(`span`,a);i(a,o),n(()=>{m(o,`data-stat-timer`,String(f.type===void 0?`countdown`:f.type))}),n(()=>{m(o,`aria-live`,String(f.ariaLive??((f.format===void 0?D:f.format).includes(`S`)?`off`:`polite`)))}),n(()=>{m(o,`aria-label`,String(R(b.value,f.format===void 0?D:f.format)))});let c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let e=R(b.value,f.format===void 0?D:f.format);r(()=>d(e,o,c))}),a});n(()=>{let e=h(G,{className:f.valueClassName,style:f.valueStyle,prefix:f.prefix,suffix:f.suffix,loading:f.loading,children:v});r(()=>d(e,o,_))});let y=t(`rue:slot:anchor`);i(o,y),n(()=>{let a=M(f.desc)?l(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=h(K,{className:f.descClassName,style:f.descStyle,children:f.desc});r(()=>d(e,a,o))}),a}):``;r(()=>d(a,o,y))}),i(o,g(` `));let S=t(`rue:slot:anchor`);return i(o,S),n(()=>{let a=M(f.actions)?l(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=h(J,{className:f.actionsClassName,style:f.actionsStyle,children:f.actions});r(()=>d(e,a,o))}),a}):``;r(()=>d(a,o,S))}),o})},X=Object.assign(V,{Item:H,Title:U,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:a=>l(o=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=h(Y,{...a,type:`countdown`});r(()=>d(e,s,c))}),s})}),Z=a=>l(o=>{let c=s(`div`,o);u(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=s(`div`,c);i(c,f),u(f,`flex flex-wrap items-start justify-between gap-3`);let p=s(`div`,f);i(f,p);let m=s(`h2`,p);i(p,m),u(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,g(`# `));let _=t(`rue:slot:anchor`);i(m,_),n(()=>{let e=a.title;r(()=>d(e,m,_))});let v=t(`rue:slot:anchor`);i(p,v),n(()=>{let o=a.summary?l(()=>{let o=e(),c=s(`p`,o);i(o,c),u(c,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.summary;r(()=>d(e,c,l))}),o}):``;r(()=>d(o,p,v))});let y=t(`rue:component:anchor`);i(c,y),n(()=>{let e=h(ee,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,c,y))});let b=t(`rue:slot:anchor`);return i(c,b),n(()=>{let o=a.tab.value===`preview`?a.preview():l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>d(e,o,s))}),o});r(()=>d(o,c,b))}),c}),Q=a=>l(o=>{let c=s(`div`,o);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=s(`table`,c);i(c,f),u(f,`table table-zebra`);let p=s(`thead`,f);i(f,p);let h=s(`tr`,p);i(p,h);let _=s(`th`,h);i(h,_),i(_,g(`属性`));let v=s(`th`,h);i(h,v),i(v,g(`说明`));let y=s(`th`,h);i(h,y),i(y,g(`类型`));let x=s(`th`,h);i(h,x),i(x,g(`默认值`));let S=s(`tbody`,f);i(f,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=b({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,o,c,u,f)=>{d(l(()=>{let o=e(),c=s(`tr`,o);i(o,c),n(()=>{m(c,`key`,String(a.prop))});let l=s(`td`,c);i(c,l);let u=s(`code`,l);i(l,u);let f=t(`rue:slot:anchor`);i(u,f),n(()=>{let e=a.prop;r(()=>d(e,u,f))});let p=s(`td`,c);i(c,p);let h=t(`rue:slot:anchor`);i(p,h),n(()=>{let e=a.description;r(()=>d(e,p,h))});let g=s(`td`,c);i(c,g);let _=s(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>d(e,_,v))});let y=s(`td`,c);i(c,y);let b=s(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>d(e,b,x))}),o}),o,c)}})}),c}),re=()=>l(e=>{let t=s(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`fill`,`none`),m(t,`viewBox`,`0 0 24 24`),u(t,`inline-block w-8 h-8 stroke-current`);let n=s(`path`,t);return i(t,n),m(n,`stroke-linecap`,`round`),m(n,`stroke-linejoin`,`round`),m(n,`stroke-width`,`2`),m(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t}),ie=()=>l(e=>{let t=s(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`fill`,`none`),m(t,`viewBox`,`0 0 24 24`),u(t,`inline-block w-8 h-8 stroke-current`);let n=s(`path`,t);return i(t,n),m(n,`stroke-linecap`,`round`),m(n,`stroke-linejoin`,`round`),m(n,`stroke-width`,`2`),m(n,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),t}),ae=()=>l(e=>{let t=s(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`fill`,`none`),m(t,`viewBox`,`0 0 24 24`),u(t,`inline-block w-8 h-8 stroke-current`);let n=s(`path`,t);return i(t,n),m(n,`stroke-linecap`,`round`),m(n,`stroke-linejoin`,`round`),m(n,`stroke-width`,`2`),m(n,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),t}),oe=()=>l(e=>{let t=s(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`fill`,`none`),m(t,`viewBox`,`0 0 24 24`),u(t,`inline-block w-8 h-8 stroke-current`);let n=s(`path`,t);return i(t,n),m(n,`stroke-linecap`,`round`),m(n,`stroke-linejoin`,`round`),m(n,`stroke-width`,`2`),m(n,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),t}),se=()=>l(e=>{let t=s(`svg`,e);m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`fill`,`none`),m(t,`viewBox`,`0 0 24 24`),u(t,`inline-block w-8 h-8 stroke-current`);let n=s(`path`,t);return i(t,n),m(n,`stroke-linecap`,`round`),m(n,`stroke-linejoin`,`round`),m(n,`stroke-width`,`2`),m(n,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),t}),ce=[{figure:S(re,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:S(`span`,{className:`text-secondary`,children:`4,200`}),desc:S(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:S(w,{color:`success`,size:`xs`,children:`Add funds`})}],le=`<Stat className="shadow">
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
</Stat>`,xe=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],Se=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则保留原始小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],Ce=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],we=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:o,tabItems:c,tabFormat:f,tabFormatter:p,tabLoading:m,tabTimer:_,tabWithIcons:b,tabGroup:C,tabCentered:ee,tabVertical:te,tabResponsive:ne,tabActions:D,deadline:O,startedAt:k}=y(`useSetup:0:0`,()=>a(()=>({tabBasic:y(`ref:1:0`,()=>v(`preview`)),tabItems:y(`ref:1:1`,()=>v(`preview`)),tabFormat:y(`ref:1:2`,()=>v(`preview`)),tabFormatter:y(`ref:1:3`,()=>v(`preview`)),tabLoading:y(`ref:1:4`,()=>v(`preview`)),tabTimer:y(`ref:1:5`,()=>v(`preview`)),tabWithIcons:y(`ref:1:6`,()=>v(`preview`)),tabGroup:y(`ref:1:7`,()=>v(`preview`)),tabCentered:y(`ref:1:8`,()=>v(`preview`)),tabVertical:y(`ref:1:9`,()=>v(`preview`)),tabResponsive:y(`ref:1:10`,()=>v(`preview`)),tabActions:y(`ref:1:11`,()=>v(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return l(a=>{let v=e(),y=t(`rue:component:anchor`);return i(v,y),d(h(E,{children:l(()=>{let a=e(),l=s(`div`,a);i(a,l),u(l,`max-w-none prose prose-sm md:prose-base`);let v=s(`h1`,l);i(l,v),i(v,g(`Stat 统计`));let y=s(`p`,l);i(l,y),u(y,`text-sm mt-3 mb-3`),i(y,g(`Stat 用于在一个块中展示数字与数据。这一轮增强保持 Rue 现有的 daisyUI 视觉语气，同时补上更接近常见统计组件的数值格式化、前后缀、loading 与 timer 能力。`));let E=s(`h2`,l);i(l,E),i(E,g(`功能概览`));let A=s(`ul`,l);i(l,A);let j=s(`li`,A);i(A,j),i(j,g(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式 demo。`));let M=s(`li`,A);i(A,M),i(M,g("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let N=s(`li`,A);i(A,N),i(N,g("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let P=s(`li`,A);i(A,P),i(P,g("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let F=t(`rue:component:anchor`);i(l,F),n(()=>{let e=h(Z,{title:`基础用法`,summary:`保留原始复合组件写法，适合完全自定义结构。`,tab:o,code:le,preview:()=>S(X,{className:`shadow`,children:x(X.Item,{children:[S(X.Title,{children:`Total Page Views`}),S(X.Value,{children:`89,400`}),S(X.Desc,{children:`21% more than last month`})]})})});r(()=>d(e,l,F))});let I=t(`rue:component:anchor`);i(l,I),n(()=>{let e=h(Z,{title:`数据驱动`,summary:`原有 items 数组能力保留，并自动兼容新的 value/prefix/loading 等增强属性。`,tab:c,code:ue,preview:()=>S(X,{items:ce,className:`shadow`})});r(()=>d(e,l,I))});let L=t(`rue:component:anchor`);i(l,L),n(()=>{let e=h(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:f,code:de,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),S(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})});r(()=>d(e,l,L))});let R=t(`rue:component:anchor`);i(l,R),n(()=>{let e=h(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:p,code:fe,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把原始值映射成业务文案`}),x(X.Item,{children:[S(X.Title,{children:`Storage`}),S(X.Value,{value:24576,suffix:`GB`,valueRender:e=>S(`span`,{className:`text-primary`,children:e})}),S(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})});r(()=>d(e,l,R))});let z=t(`rue:component:anchor`);i(l,z),n(()=>{let e=h(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:m,code:pe,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),S(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})});r(()=>d(e,l,z))});let B=t(`rue:component:anchor`);i(l,B),n(()=>{let e=h(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 提供常见统计组件里的核心计时能力，`Stat.Countdown` 作为倒计时别名保留。",tab:_,code:me,preview:()=>x(X,{className:`shadow`,children:[S(X.Timer,{title:`Campaign Countdown`,value:O,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),S(X.Timer,{type:`countup`,title:`Uptime`,value:k,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})});r(()=>d(e,l,B))});let V=t(`rue:component:anchor`);i(l,V),n(()=>{let e=h(Z,{title:`带图标或头像`,summary:`保留旧 demo，用于展示 figure 区的图标与头像承载能力。`,tab:b,code:he,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-primary`,children:S(ie,{})}),S(X.Title,{children:`Total Likes`}),S(X.Value,{className:`text-primary`,children:`25.6K`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(ae,{})}),S(X.Title,{children:`Page Views`}),S(X.Value,{className:`text-secondary`,children:`2.6M`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(T,{status:`online`,children:S(`div`,{className:`w-16 rounded-full`,children:S(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),S(X.Value,{children:`86%`}),S(X.Title,{children:`Tasks done`}),S(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})});r(()=>d(e,l,V))});let H=t(`rue:component:anchor`);i(l,H),n(()=>{let e=h(Z,{title:`组合统计卡`,summary:`保留旧版多列指标卡示例，适合运营面板和概览页。`,tab:C,code:ge,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(re,{})}),S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(oe,{})}),S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(se,{})}),S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});r(()=>d(e,l,H))});let U=t(`rue:component:anchor`);i(l,U),n(()=>{let e=h(Z,{title:`居中布局`,summary:"保留 `center` 演示，适合居中对齐的仪表盘摘要。",tab:ee,code:_e,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{center:!0,children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`From January 1st to February 1st`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`Users`}),S(X.Value,{className:`text-secondary`,children:`4,200`}),S(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});r(()=>d(e,l,U))});let W=t(`rue:component:anchor`);i(l,W),n(()=>{let e=h(Z,{title:`纵向布局`,summary:"保留 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:te,code:ve,preview:()=>x(X,{direction:`vertical`,className:`shadow`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});r(()=>d(e,l,W))});let G=t(`rue:component:anchor`);i(l,G),n(()=>{let e=h(Z,{title:`响应式布局`,summary:`保留旧版 responsive 示例，小屏纵向，大屏横向。`,tab:ne,code:ye,preview:()=>x(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});r(()=>d(e,l,G))});let K=t(`rue:component:anchor`);i(l,K),n(()=>{let e=h(Z,{title:`带操作按钮`,summary:`保留旧版按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:D,code:be,preview:()=>x(X,{className:`bg-base-100 border border-base-300`,children:[x(X.Item,{children:[S(X.Title,{children:`Account balance`}),S(X.Value,{children:`$89,400`}),S(X.Actions,{children:S(w,{color:`success`,size:`xs`,children:`Add funds`})})]}),x(X.Item,{children:[S(X.Title,{children:`Current balance`}),S(X.Value,{children:`$89,400`}),x(X.Actions,{children:[S(w,{size:`xs`,children:`Withdrawal`}),S(w,{size:`xs`,children:`Deposit`})]})]})]})});r(()=>d(e,l,K))});let q=s(`h2`,l);i(l,q),i(q,g(`API`));let J=s(`h3`,l);i(l,J),i(J,g(`Stat`));let Y=t(`rue:component:anchor`);i(l,Y),n(()=>{let e=h(Q,{rows:xe});r(()=>d(e,l,Y))});let $=s(`h3`,l);i(l,$),i($,g(`Stat.Item`));let Te=t(`rue:component:anchor`);i(l,Te),n(()=>{let e=h(Q,{rows:Se});r(()=>d(e,l,Te))});let Ee=s(`h3`,l);i(l,Ee),i(Ee,g(`Stat.Value`));let De=t(`rue:component:anchor`);i(l,De),n(()=>{let e=h(Q,{rows:Ce});r(()=>d(e,l,De))});let Oe=s(`h3`,l);i(l,Oe),i(Oe,g(`Stat.Timer / Stat.Countdown`));let ke=t(`rue:component:anchor`);return i(l,ke),n(()=>{let e=h(Q,{rows:we});r(()=>d(e,l,ke))}),a})}),v,y),v})};export{$ as default};