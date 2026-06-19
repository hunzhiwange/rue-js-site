import{$ as e,$t as t,Bt as n,Gt as r,Qt as i,Xt as a,Z as o,ct as s,et as c,i as l,l as u,mt as d,nt as f,o as p,s as m,t as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as x,i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as C}from"./Code-D5UqTwV6.js";import{t as w}from"./button-CiwrjbTY.js";import{t as T}from"./avatar-CAs4YOFb.js";import{t as ee}from"./tabs-DRfs918f.js";import{r as E}from"./SidebarPlaygroundDesign-CWudvLqE.js";var te=`.`,ne=`,`,D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>e==null||e===!1?!1:Array.isArray(e)?e.some(e=>M(e)):!0,N=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},P=({value:e,formatter:t,precision:n,decimalSeparator:r=te,groupSeparator:i=ne})=>{if(typeof t==`function`)return t(e);if(!M(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},F=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=M(e)?P({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>{let n=I(t),r=L(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},z=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,B=n=>u(i=>{let a=c(),s=e(`rue:slot:anchor`);o(a,s),t(()=>{let i=M(n.figure)?u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(q,{className:n.figureClassName,style:n.figureStyle,children:n.figure});r(()=>p(e,i,a))}),i}):``;r(()=>p(i,a,s))}),o(a,f(` `));let l=e(`rue:slot:anchor`);o(a,l),t(()=>{let i=M(n.title)?u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(U,{className:n.titleClassName,style:n.titleStyle,children:n.title});r(()=>p(e,i,a))}),i}):``;r(()=>p(i,a,l))}),o(a,f(` `));let d=e(`rue:slot:anchor`);o(a,d),t(()=>{let i=n.loading||M(n.value)||M(n.prefix)||M(n.suffix)||typeof n.formatter==`function`||typeof n.valueRender==`function`?u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(G,{className:n.valueClassName,style:n.valueStyle,value:n.value,prefix:n.prefix,suffix:n.suffix,loading:n.loading,valueRender:n.valueRender,formatter:n.formatter,precision:n.precision,decimalSeparator:n.decimalSeparator,groupSeparator:n.groupSeparator});r(()=>p(e,i,a))}),i}):``;r(()=>p(i,a,d))}),o(a,f(` `));let m=e(`rue:slot:anchor`);o(a,m),t(()=>{let i=M(n.desc)?u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(K,{className:n.descClassName,style:n.descStyle,children:n.desc});r(()=>p(e,i,a))}),i}):``;r(()=>p(i,a,m))}),o(a,f(` `));let g=e(`rue:slot:anchor`);return o(a,g),t(()=>{let i=M(n.actions)?u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(J,{className:n.actionsClassName,style:n.actionsStyle,children:n.actions});r(()=>p(e,i,a))}),i}):``;r(()=>p(i,a,g))}),a}),V=n=>{let{cls:i}=y(`useSetup:0:0`,()=>a(()=>({cls:y(`computed:1:0`,()=>v(()=>j(n.direction?`stats stats-${n.direction}`:`stats`,n.className)))})));return n.items&&n.items.length?u(r=>{let a=g(`div`,r);t(()=>{_(a,i.get())});let s=e(`rue:list:start`),c=e(`rue:list:end`);o(a,s),o(a,c);let l=new Map;return t(()=>{l=b({items:n.items||[],getKey:(e,t)=>e.key??t,elements:l,parent:s.parentNode,before:c,start:s,renderItem:(e,t,n,r,i)=>{m(h(H,{key:e.key??i,...e}),t,n,r)}})}),a}):u(a=>{let s=g(`div`,a);t(()=>{_(s,i.get())});let c=e(`rue:children:anchor`);return o(s,c),t(()=>{let e=n.children;r(()=>p(e,s,c))}),s})},H=n=>{let{cls:i,shouldRenderChildren:s}=y(`useSetup:0:0:dup1`,()=>a(()=>({cls:y(`computed:1:1`,()=>v(()=>j(n.center?`stat place-items-center`:`stat`,n.className))),shouldRenderChildren:y(`computed:1:2`,()=>v(()=>M(n.children)))})));return u(a=>{let l=g(`div`,a);t(()=>{_(l,i.get())});let d=e(`rue:slot:anchor`);return o(l,d),t(()=>{let i=s.get()?n.children:u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(B,{figure:n.figure,figureClassName:n.figureClassName,figureStyle:n.figureStyle,title:n.title,titleClassName:n.titleClassName,titleStyle:n.titleStyle,value:n.value,valueClassName:n.valueClassName,valueStyle:n.valueStyle,valueRender:n.valueRender,prefix:n.prefix,suffix:n.suffix,loading:n.loading,formatter:n.formatter,precision:n.precision,decimalSeparator:n.decimalSeparator,groupSeparator:n.groupSeparator,desc:n.desc,descClassName:n.descClassName,descStyle:n.descStyle,actions:n.actions,actionsClassName:n.actionsClassName,actionsStyle:n.actionsStyle});r(()=>p(e,i,a))}),i});r(()=>p(i,l,d))}),l})},U=n=>u(i=>{let a=g(`div`,i);t(()=>{_(a,j(`stat-title`,n.className))}),t(()=>{let e=n.style;d(a,e)});let s=e(`rue:children:anchor`);return o(a,s),t(()=>{let e=n.children;r(()=>p(e,a,s))}),a}),W=n=>u(i=>{let a=g(`span`,i);_(a,`stat-value-text`),s(a,`data-stat-value`,`true`);let c=e(`rue:children:anchor`);return o(a,c),t(()=>{let e=n.children;r(()=>p(e,a,c))}),a}),G=n=>{let{content:i}=y(`useSetup:0:0:dup2`,()=>a(()=>({content:y(`computed:1:3`,()=>v(()=>F({value:n.value,children:n.children,valueRender:n.valueRender,formatter:n.formatter,precision:n.precision,decimalSeparator:n.decimalSeparator,groupSeparator:n.groupSeparator})))})));return u(a=>{let l=g(`div`,a);t(()=>{_(l,j(`stat-value`,n.className))}),t(()=>{let e=n.style;d(l,e)});let m=e(`rue:slot:anchor`);o(l,m),t(()=>{let i=M(n.prefix)?u(()=>{let i=c(),a=g(`span`,i);o(i,a),_(a,`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`),s(a,`aria-hidden`,`true`);let l=e(`rue:slot:anchor`);return o(a,l),t(()=>{let e=n.prefix;r(()=>p(e,a,l))}),i}):``;r(()=>p(i,l,m))}),o(l,f(` `));let v=e(`rue:slot:anchor`);o(l,v),t(()=>{let t=n.loading?u(()=>{let e=c(),t=g(`span`,e);return o(e,t),_(t,`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`),s(t,`data-stat-loading`,`true`),s(t,`aria-hidden`,`true`),e}):M(i.get())?u(()=>{let t=c(),n=e(`rue:component:anchor`);return o(t,n),p(h(W,{children:i.get()}),t,n),t}):``;r(()=>p(t,l,v))}),o(l,f(` `));let y=e(`rue:slot:anchor`);return o(l,y),t(()=>{let i=M(n.suffix)?u(()=>{let i=c(),a=g(`span`,i);o(i,a),_(a,`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`),s(a,`aria-hidden`,`true`);let l=e(`rue:slot:anchor`);return o(a,l),t(()=>{let e=n.suffix;r(()=>p(e,a,l))}),i}):``;r(()=>p(i,l,y))}),l})},K=n=>u(i=>{let a=g(`div`,i);t(()=>{_(a,j(`stat-desc`,n.className))}),t(()=>{let e=n.style;d(a,e)});let s=e(`rue:children:anchor`);return o(a,s),t(()=>{let e=n.children;r(()=>p(e,a,s))}),a}),q=n=>u(i=>{let a=g(`div`,i);t(()=>{_(a,j(`stat-figure`,n.className))}),t(()=>{let e=n.style;d(a,e)});let s=e(`rue:children:anchor`);return o(a,s),t(()=>{let e=n.children;r(()=>p(e,a,s))}),a}),J=n=>u(i=>{let a=g(`div`,i);t(()=>{_(a,j(`stat-actions`,n.className))}),t(()=>{let e=n.style;d(a,e)});let s=e(`rue:children:anchor`);return o(a,s),t(()=>{let e=n.children;r(()=>p(e,a,s))}),a}),Y=d=>{let m=y(`useSetup:0:0:dup3`,()=>a(()=>{let e=y(`ref:1:4`,()=>n(0)),t=y(`computed:1:5`,()=>v(()=>j(d.center?`stat place-items-center`:`stat`,d.className))),r=null,a=!1,o=()=>{r!=null&&(clearInterval(r),r=null)},s=()=>{let t=N(d.value);if(t==null)return e.value=0,d.onChange&&d.onChange(void 0),o(),!1;let n=Date.now(),r=(d.type===void 0?`countdown`:d.type)===`countup`?Math.max(n-t,0):Math.max(t-n,0);return e.value=r,d.onChange&&d.onChange(r),(d.type===void 0?`countdown`:d.type)===`countdown`&&r<=0?(o(),a||(a=!0,d.onFinish&&d.onFinish()),!1):(a=!1,!0)},c=()=>{o(),s()&&(r=setInterval(s,z(d.format===void 0?D:d.format,d.interval)))};return y(`watch:1:6`,()=>i(()=>`${d.type===void 0?`countdown`:d.type}|${N(d.value)??`invalid`}|${d.format===void 0?D:d.format}|${d.interval??``}`,()=>{a=!1,c()},{immediate:!0})),l(o),{duration:e,cls:t,stopTimer:o,syncDuration:s,startTimer:c,timer:r,finished:a}})),{duration:b,cls:x,stopTimer:S,syncDuration:C,startTimer:w}=m,{timer:T,finished:ee}=m;return u(n=>{let i=g(`div`,n);t(()=>{_(i,x.get())});let a=e(`rue:slot:anchor`);o(i,a),t(()=>{let n=M(d.figure)?u(()=>{let n=c(),i=e(`rue:component:anchor`);return o(n,i),t(()=>{let e=h(q,{className:d.figureClassName,style:d.figureStyle,children:d.figure});r(()=>p(e,n,i))}),n}):``;r(()=>p(n,i,a))}),o(i,f(` `));let l=e(`rue:slot:anchor`);o(i,l),t(()=>{let n=M(d.title)?u(()=>{let n=c(),i=e(`rue:component:anchor`);return o(n,i),t(()=>{let e=h(U,{className:d.titleClassName,style:d.titleStyle,children:d.title});r(()=>p(e,n,i))}),n}):``;r(()=>p(n,i,l))});let m=e(`rue:component:anchor`);o(i,m);let v=u(()=>{let n=c(),i=g(`span`,n);o(n,i),t(()=>{s(i,`data-stat-timer`,String(d.type===void 0?`countdown`:d.type))}),t(()=>{s(i,`aria-live`,String(d.ariaLive??((d.format===void 0?D:d.format).includes(`S`)?`off`:`polite`)))}),t(()=>{s(i,`aria-label`,String(R(b.value,d.format===void 0?D:d.format)))});let a=e(`rue:slot:anchor`);return o(i,a),t(()=>{let e=R(b.value,d.format===void 0?D:d.format);r(()=>p(e,i,a))}),n});t(()=>{let e=h(G,{className:d.valueClassName,style:d.valueStyle,prefix:d.prefix,suffix:d.suffix,loading:d.loading,children:v});r(()=>p(e,i,m))});let y=e(`rue:slot:anchor`);o(i,y),t(()=>{let n=M(d.desc)?u(()=>{let n=c(),i=e(`rue:component:anchor`);return o(n,i),t(()=>{let e=h(K,{className:d.descClassName,style:d.descStyle,children:d.desc});r(()=>p(e,n,i))}),n}):``;r(()=>p(n,i,y))}),o(i,f(` `));let S=e(`rue:slot:anchor`);return o(i,S),t(()=>{let n=M(d.actions)?u(()=>{let n=c(),i=e(`rue:component:anchor`);return o(n,i),t(()=>{let e=h(J,{className:d.actionsClassName,style:d.actionsStyle,children:d.actions});r(()=>p(e,n,i))}),n}):``;r(()=>p(n,i,S))}),i})},X=Object.assign(V,{Item:H,Title:U,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:n=>u(i=>{let a=c(),s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=h(Y,{...n,type:`countdown`});r(()=>p(e,a,s))}),a})}),Z=n=>u(i=>{let a=g(`div`,i);_(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=g(`div`,a);o(a,s),_(s,`flex flex-wrap items-start justify-between gap-3`);let l=g(`div`,s);o(s,l);let d=g(`h2`,l);o(l,d),_(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(d,f(`# `));let m=e(`rue:slot:anchor`);o(d,m),t(()=>{let e=n.title;r(()=>p(e,d,m))});let v=e(`rue:slot:anchor`);o(l,v),t(()=>{let i=n.summary?u(()=>{let i=c(),a=g(`p`,i);o(i,a),_(a,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.summary;r(()=>p(e,a,s))}),i}):``;r(()=>p(i,l,v))});let y=e(`rue:component:anchor`);o(a,y),t(()=>{let e=h(ee,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>p(e,a,y))});let b=e(`rue:slot:anchor`);return o(a,b),t(()=>{let i=n.tab.value===`preview`?n.preview():u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>p(e,i,a))}),i});r(()=>p(i,a,b))}),a}),Q=n=>u(i=>{let a=g(`div`,i);_(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=g(`table`,a);o(a,l),_(l,`table table-zebra`);let d=g(`thead`,l);o(l,d);let m=g(`tr`,d);o(d,m);let h=g(`th`,m);o(m,h),o(h,f(`属性`));let v=g(`th`,m);o(m,v),o(v,f(`说明`));let y=g(`th`,m);o(m,y),o(y,f(`类型`));let x=g(`th`,m);o(m,x),o(x,f(`默认值`));let S=g(`tbody`,l);o(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,l,d)=>{p(u(()=>{let i=c(),a=g(`tr`,i);o(i,a),t(()=>{s(a,`key`,String(n.prop))});let l=g(`td`,a);o(a,l);let u=g(`code`,l);o(l,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>p(e,u,d))});let f=g(`td`,a);o(a,f);let m=e(`rue:slot:anchor`);o(f,m),t(()=>{let e=n.description;r(()=>p(e,f,m))});let h=g(`td`,a);o(a,h);let _=g(`code`,h);o(h,_);let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.type;r(()=>p(e,_,v))});let y=g(`td`,a);o(a,y);let b=g(`code`,y);o(y,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>p(e,b,x))}),i}),i,a)}})}),a}),re=()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let n=g(`path`,t);return o(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t}),ie=()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let n=g(`path`,t);return o(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),t}),ae=()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let n=g(`path`,t);return o(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),t}),oe=()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let n=g(`path`,t);return o(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),t}),se=()=>u(e=>{let t=g(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),_(t,`inline-block w-8 h-8 stroke-current`);let n=g(`path`,t);return o(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),t}),ce=[{figure:S(re,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:S(`span`,{className:`text-secondary`,children:`4,200`}),desc:S(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:S(w,{color:`success`,size:`xs`,children:`Add funds`})}],le=`<Stat className="shadow">
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
</Stat>`,xe=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],Se=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则保留原始小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],Ce=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],we=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:i,tabItems:s,tabFormat:l,tabFormatter:d,tabLoading:m,tabTimer:v,tabWithIcons:b,tabGroup:C,tabCentered:ee,tabVertical:te,tabResponsive:ne,tabActions:D,deadline:O,startedAt:k}=y(`useSetup:0:0`,()=>a(()=>({tabBasic:y(`ref:1:0`,()=>n(`preview`)),tabItems:y(`ref:1:1`,()=>n(`preview`)),tabFormat:y(`ref:1:2`,()=>n(`preview`)),tabFormatter:y(`ref:1:3`,()=>n(`preview`)),tabLoading:y(`ref:1:4`,()=>n(`preview`)),tabTimer:y(`ref:1:5`,()=>n(`preview`)),tabWithIcons:y(`ref:1:6`,()=>n(`preview`)),tabGroup:y(`ref:1:7`,()=>n(`preview`)),tabCentered:y(`ref:1:8`,()=>n(`preview`)),tabVertical:y(`ref:1:9`,()=>n(`preview`)),tabResponsive:y(`ref:1:10`,()=>n(`preview`)),tabActions:y(`ref:1:11`,()=>n(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return u(n=>{let a=c(),y=e(`rue:component:anchor`);return o(a,y),p(h(E,{children:u(()=>{let n=c(),a=g(`div`,n);o(n,a),_(a,`max-w-none prose prose-sm md:prose-base`);let u=g(`h1`,a);o(a,u),o(u,f(`Stat 统计`));let y=g(`p`,a);o(a,y),_(y,`text-sm mt-3 mb-3`),o(y,f(`Stat 用于在一个块中展示数字与数据。这一轮增强保持 Rue 现有的 daisyUI 视觉语气，同时补上更接近常见统计组件的数值格式化、前后缀、loading 与 timer 能力。`));let E=g(`h2`,a);o(a,E),o(E,f(`功能概览`));let A=g(`ul`,a);o(a,A);let j=g(`li`,A);o(A,j),o(j,f(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式 demo。`));let M=g(`li`,A);o(A,M),o(M,f("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let N=g(`li`,A);o(A,N),o(N,f("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let P=g(`li`,A);o(A,P),o(P,f("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let F=e(`rue:component:anchor`);o(a,F),t(()=>{let e=h(Z,{title:`基础用法`,summary:`保留原始复合组件写法，适合完全自定义结构。`,tab:i,code:le,preview:()=>S(X,{className:`shadow`,children:x(X.Item,{children:[S(X.Title,{children:`Total Page Views`}),S(X.Value,{children:`89,400`}),S(X.Desc,{children:`21% more than last month`})]})})});r(()=>p(e,a,F))});let I=e(`rue:component:anchor`);o(a,I),t(()=>{let e=h(Z,{title:`数据驱动`,summary:`原有 items 数组能力保留，并自动兼容新的 value/prefix/loading 等增强属性。`,tab:s,code:ue,preview:()=>S(X,{items:ce,className:`shadow`})});r(()=>p(e,a,I))});let L=e(`rue:component:anchor`);o(a,L),t(()=>{let e=h(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:l,code:de,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),S(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})});r(()=>p(e,a,L))});let R=e(`rue:component:anchor`);o(a,R),t(()=>{let e=h(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:d,code:fe,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把原始值映射成业务文案`}),x(X.Item,{children:[S(X.Title,{children:`Storage`}),S(X.Value,{value:24576,suffix:`GB`,valueRender:e=>S(`span`,{className:`text-primary`,children:e})}),S(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})});r(()=>p(e,a,R))});let z=e(`rue:component:anchor`);o(a,z),t(()=>{let e=h(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:m,code:pe,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),S(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})});r(()=>p(e,a,z))});let B=e(`rue:component:anchor`);o(a,B),t(()=>{let e=h(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 提供常见统计组件里的核心计时能力，`Stat.Countdown` 作为倒计时别名保留。",tab:v,code:me,preview:()=>x(X,{className:`shadow`,children:[S(X.Timer,{title:`Campaign Countdown`,value:O,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),S(X.Timer,{type:`countup`,title:`Uptime`,value:k,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})});r(()=>p(e,a,B))});let V=e(`rue:component:anchor`);o(a,V),t(()=>{let e=h(Z,{title:`带图标或头像`,summary:`保留旧 demo，用于展示 figure 区的图标与头像承载能力。`,tab:b,code:he,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-primary`,children:S(ie,{})}),S(X.Title,{children:`Total Likes`}),S(X.Value,{className:`text-primary`,children:`25.6K`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(ae,{})}),S(X.Title,{children:`Page Views`}),S(X.Value,{className:`text-secondary`,children:`2.6M`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(T,{status:`online`,children:S(`div`,{className:`w-16 rounded-full`,children:S(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),S(X.Value,{children:`86%`}),S(X.Title,{children:`Tasks done`}),S(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})});r(()=>p(e,a,V))});let H=e(`rue:component:anchor`);o(a,H),t(()=>{let e=h(Z,{title:`组合统计卡`,summary:`保留旧版多列指标卡示例，适合运营面板和概览页。`,tab:C,code:ge,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(re,{})}),S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(oe,{})}),S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(se,{})}),S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});r(()=>p(e,a,H))});let U=e(`rue:component:anchor`);o(a,U),t(()=>{let e=h(Z,{title:`居中布局`,summary:"保留 `center` 演示，适合居中对齐的仪表盘摘要。",tab:ee,code:_e,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{center:!0,children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`From January 1st to February 1st`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`Users`}),S(X.Value,{className:`text-secondary`,children:`4,200`}),S(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});r(()=>p(e,a,U))});let W=e(`rue:component:anchor`);o(a,W),t(()=>{let e=h(Z,{title:`纵向布局`,summary:"保留 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:te,code:ve,preview:()=>x(X,{direction:`vertical`,className:`shadow`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});r(()=>p(e,a,W))});let G=e(`rue:component:anchor`);o(a,G),t(()=>{let e=h(Z,{title:`响应式布局`,summary:`保留旧版 responsive 示例，小屏纵向，大屏横向。`,tab:ne,code:ye,preview:()=>x(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});r(()=>p(e,a,G))});let K=e(`rue:component:anchor`);o(a,K),t(()=>{let e=h(Z,{title:`带操作按钮`,summary:`保留旧版按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:D,code:be,preview:()=>x(X,{className:`bg-base-100 border border-base-300`,children:[x(X.Item,{children:[S(X.Title,{children:`Account balance`}),S(X.Value,{children:`$89,400`}),S(X.Actions,{children:S(w,{color:`success`,size:`xs`,children:`Add funds`})})]}),x(X.Item,{children:[S(X.Title,{children:`Current balance`}),S(X.Value,{children:`$89,400`}),x(X.Actions,{children:[S(w,{size:`xs`,children:`Withdrawal`}),S(w,{size:`xs`,children:`Deposit`})]})]})]})});r(()=>p(e,a,K))});let q=g(`h2`,a);o(a,q),o(q,f(`API`));let J=g(`h3`,a);o(a,J),o(J,f(`Stat`));let Y=e(`rue:component:anchor`);o(a,Y),t(()=>{let e=h(Q,{rows:xe});r(()=>p(e,a,Y))});let $=g(`h3`,a);o(a,$),o($,f(`Stat.Item`));let Te=e(`rue:component:anchor`);o(a,Te),t(()=>{let e=h(Q,{rows:Se});r(()=>p(e,a,Te))});let Ee=g(`h3`,a);o(a,Ee),o(Ee,f(`Stat.Value`));let De=e(`rue:component:anchor`);o(a,De),t(()=>{let e=h(Q,{rows:Ce});r(()=>p(e,a,De))});let Oe=g(`h3`,a);o(a,Oe),o(Oe,f(`Stat.Timer / Stat.Countdown`));let ke=e(`rue:component:anchor`);return o(a,ke),t(()=>{let e=h(Q,{rows:we});r(()=>p(e,a,ke))}),n})}),a,y),a})};export{$ as default};