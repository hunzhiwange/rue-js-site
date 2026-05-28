import{$ as e,Gt as t,I as n,Jt as r,Kt as i,Lt as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,d as f,et as p,l as m,ot as h,t as g,y as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v,n as y}from"./vapor-helpers-vapor-DkadWylb.js";import{i as b,r as x}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as S}from"./button-BDcuIfPi.js";import{t as C}from"./avatar-BElXmxqx.js";import{t as w}from"./tabs-DMHgT-aV.js";import{n as T}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as E}from"./Code-B_4lzH85.js";var D=`.`,O=`,`,ee=`HH:mm:ss`,k=1e3/30,A=1e3,j=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],M=(e,t)=>t?`${e} ${t}`:e,N=e=>e==null||e===!1?!1:Array.isArray(e)?e.some(e=>N(e)):!0,P=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},F=({value:e,formatter:t,precision:n,decimalSeparator:r=D,groupSeparator:i=O})=>{if(typeof t==`function`)return t(e);if(!N(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},I=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=N(e)?F({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},L=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},R=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return j.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},z=(e,t)=>{let n=L(t),r=R(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},B=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?k:A,V=({figure:e,figureClassName:t,figureStyle:n,title:r,titleClassName:i,titleStyle:a,value:o,valueClassName:s,valueStyle:c,valueRender:l,prefix:u,suffix:d,loading:f,formatter:p,precision:m,decimalSeparator:h,groupSeparator:g,desc:v,descClassName:y,descStyle:S,actions:C,actionsClassName:w,actionsStyle:T})=>b(_,{children:[N(e)?x(q,{className:t,style:n,children:e}):null,N(r)?x(W,{className:i,style:a,children:r}):null,f||N(o)||N(u)||N(d)||typeof p==`function`||typeof l==`function`?x(G,{className:s,style:c,value:o,prefix:u,suffix:d,loading:f,valueRender:l,formatter:p,precision:m,decimalSeparator:h,groupSeparator:g}):null,N(v)?x(K,{className:y,style:S,children:v}):null,N(C)?x(J,{className:w,style:T,children:C}):null]}),H=({direction:e,className:t,children:n,items:r})=>{let i=M(e?`stats stats-${e}`:`stats`,t);return r&&r.length?x(`div`,{className:i,children:r.map((e,t)=>x(U,{...e},e.key??t))}):x(`div`,{className:i,children:n})},U=({center:e,className:t,children:n,figure:r,figureClassName:i,figureStyle:a,title:o,titleClassName:s,titleStyle:c,value:l,valueClassName:u,valueStyle:d,valueRender:f,prefix:p,suffix:m,loading:h,formatter:g,precision:_,decimalSeparator:v,groupSeparator:y,desc:b,descClassName:S,descStyle:C,actions:w,actionsClassName:T,actionsStyle:E})=>x(`div`,{className:M(e?`stat place-items-center`:`stat`,t),children:N(n)?n:V({figure:r,figureClassName:i,figureStyle:a,title:o,titleClassName:s,titleStyle:c,value:l,valueClassName:u,valueStyle:d,valueRender:f,prefix:p,suffix:m,loading:h,formatter:g,precision:_,decimalSeparator:v,groupSeparator:y,desc:b,descClassName:S,descStyle:C,actions:w,actionsClassName:T,actionsStyle:E})}),W=({className:e,style:t,children:n})=>x(`div`,{className:M(`stat-title`,e),style:t,children:n}),G=({className:e,style:t,children:n,value:r,prefix:i,suffix:a,loading:o,valueRender:s,formatter:c,precision:l,decimalSeparator:u,groupSeparator:d})=>{let f=I({value:r,children:n,valueRender:s,formatter:c,precision:l,decimalSeparator:u,groupSeparator:d});return b(`div`,{className:M(`stat-value`,e),style:t,children:[N(i)?x(`span`,{className:`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`,"aria-hidden":`true`,children:i}):null,o?x(`span`,{className:`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`,"data-stat-loading":`true`,"aria-hidden":`true`}):N(f)?x(`span`,{className:`stat-value-text`,"data-stat-value":`true`,children:f}):null,N(a)?x(`span`,{className:`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`,"aria-hidden":`true`,children:a}):null]})},K=({className:e,style:t,children:n})=>x(`div`,{className:M(`stat-desc`,e),style:t,children:n}),q=({className:e,style:t,children:n})=>x(`div`,{className:M(`stat-figure`,e),style:t,children:n}),J=({className:e,style:t,children:n})=>x(`div`,{className:M(`stat-actions`,e),style:t,children:n}),Y=({type:e=`countdown`,className:i,center:o,figure:s,figureClassName:c,figureStyle:l,title:u,titleClassName:d,titleStyle:f,valueClassName:p,valueStyle:m,prefix:h,suffix:g,loading:_,desc:v,descClassName:y,descStyle:b,actions:S,actionsClassName:C,actionsStyle:w,value:T,format:E=ee,interval:D,ariaLive:O,onChange:k,onFinish:A})=>{let j=a(0),M=t(null),N=t(!1),F=()=>{M.current!=null&&(clearInterval(M.current),M.current=null)},I=()=>{let t=P(T);if(t==null)return j.value=0,k&&k(void 0),F(),!1;let n=Date.now(),r=Math.max(e===`countup`?n-t:t-n,0);return j.value=r,k&&k(r),e===`countdown`&&r<=0?(F(),N.current||(N.current=!0,A&&A()),!1):(N.current=!1,!0)},L=()=>{F(),I()&&(M.current=setInterval(I,B(E,D)))};return r(()=>`${e}|${P(T)??`invalid`}|${E}|${D??``}`,()=>{N.current=!1,L()},{immediate:!0}),n(F),x(U,{center:o,className:i,figure:s,figureClassName:c,figureStyle:l,title:u,titleClassName:d,titleStyle:f,value:x(`span`,{"data-stat-timer":e,"aria-live":O??(E.includes(`S`)?`off`:`polite`),"aria-label":z(j.value,E),children:z(j.value,E)}),valueClassName:p,valueStyle:m,prefix:h,suffix:g,loading:_,desc:v,descClassName:y,descStyle:b,actions:S,actionsClassName:C,actionsStyle:w})},X=Object.assign(H,{Item:U,Title:W,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:e=>x(Y,{...e,type:`countdown`})}),Z=t=>f(n=>{let r=e(`div`,n);d(r,`component-preview not-prose text-base-content my-6 lg:my-12`);let i=e(`div`,r);c(r,i),d(i,`flex flex-wrap items-start justify-between gap-3`);let a=e(`div`,i);c(i,a);let h=e(`h2`,a);c(a,h),d(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),c(h,p(`# `));let _=u(`rue:slot:anchor`);c(h,_),l(()=>{let e=t.title;s(()=>m(e,h,_))});let v=u(`rue:slot:anchor`);c(a,v),l(()=>{let n=t.summary?f(()=>{let n=o(),r=e(`p`,n);c(n,r),d(r,`m-0 text-sm opacity-70`);let i=u(`rue:slot:anchor`);return c(r,i),l(()=>{let e=t.summary;s(()=>m(e,r,i))}),n}):``;s(()=>m(n,a,v))});let y=u(`rue:component:anchor`);c(r,y),l(()=>{let e=g(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});s(()=>m(e,r,y))});let b=u(`rue:slot:anchor`);return c(r,b),l(()=>{let e=t.tab.value===`preview`?t.preview():f(()=>{let e=o(),n=u(`rue:component:anchor`);return c(e,n),l(()=>{let r=g(E,{className:`mt-2`,lang:`tsx`,code:t.code});s(()=>m(r,e,n))}),e});s(()=>m(e,r,b))}),r}),Q=t=>f(n=>{let r=e(`div`,n);d(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);c(r,i),d(i,`table table-zebra`);let a=e(`thead`,i);c(i,a);let g=e(`tr`,a);c(a,g);let _=e(`th`,g);c(g,_),c(_,p(`属性`));let v=e(`th`,g);c(g,v),c(v,p(`说明`));let b=e(`th`,g);c(g,b),c(b,p(`类型`));let x=e(`th`,g);c(g,x),c(x,p(`默认值`));let S=e(`tbody`,i);c(i,S);let C=u(`rue:list:start`),w=u(`rue:list:end`);c(S,C),c(S,w);let T=new Map;return l(()=>{T=y({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,a)=>{m(f(()=>{let n=o(),r=e(`tr`,n);c(n,r),l(()=>{h(r,`key`,String(t.prop))});let i=e(`td`,r);c(r,i);let a=e(`code`,i);c(i,a);let d=u(`rue:slot:anchor`);c(a,d),l(()=>{let e=t.prop;s(()=>m(e,a,d))});let f=e(`td`,r);c(r,f);let p=u(`rue:slot:anchor`);c(f,p),l(()=>{let e=t.description;s(()=>m(e,f,p))});let g=e(`td`,r);c(r,g);let _=e(`code`,g);c(g,_);let v=u(`rue:slot:anchor`);c(_,v),l(()=>{let e=t.type;s(()=>m(e,_,v))});let y=e(`td`,r);c(r,y);let b=e(`code`,y);c(y,b);let x=u(`rue:slot:anchor`);return c(b,x),l(()=>{let e=t.defaultValue;s(()=>m(e,b,x))}),n}),n,r)}})}),r}),te=()=>f(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`fill`,`none`),h(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`,n);return c(n,r),h(r,`stroke-linecap`,`round`),h(r,`stroke-linejoin`,`round`),h(r,`stroke-width`,`2`),h(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n}),ne=()=>f(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`fill`,`none`),h(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`,n);return c(n,r),h(r,`stroke-linecap`,`round`),h(r,`stroke-linejoin`,`round`),h(r,`stroke-width`,`2`),h(r,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),n}),re=()=>f(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`fill`,`none`),h(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`,n);return c(n,r),h(r,`stroke-linecap`,`round`),h(r,`stroke-linejoin`,`round`),h(r,`stroke-width`,`2`),h(r,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),n}),ie=()=>f(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`fill`,`none`),h(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`,n);return c(n,r),h(r,`stroke-linecap`,`round`),h(r,`stroke-linejoin`,`round`),h(r,`stroke-width`,`2`),h(r,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),n}),ae=()=>f(t=>{let n=e(`svg`,t);h(n,`xmlns`,`http://www.w3.org/2000/svg`),h(n,`fill`,`none`),h(n,`viewBox`,`0 0 24 24`),d(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`,n);return c(n,r),h(r,`stroke-linecap`,`round`),h(r,`stroke-linejoin`,`round`),h(r,`stroke-width`,`2`),h(r,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),n}),oe=[{figure:x(te,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:x(`span`,{className:`text-secondary`,children:`4,200`}),desc:x(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:x(S,{color:`success`,size:`xs`,children:`Add funds`})}],se=`<Stat className="shadow">
  <Stat.Item>
    <Stat.Title>Total Page Views</Stat.Title>
    <Stat.Value>89,400</Stat.Value>
    <Stat.Desc>21% more than last month</Stat.Desc>
  </Stat.Item>
</Stat>`,ce=`import { Button, Stat } from '@rue-js/design'

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

<Stat items={statItems} className="shadow" />`,le=`<Stat className="shadow">
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
</Stat>`,ue=`<Stat className="shadow">
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
</Stat>`,de=`<Stat className="shadow">
  <Stat.Item title="Sync Revenue" loading desc="数据回填前展示 skeleton 占位" />
  <Stat.Item title="Open Orders" value={0} suffix="items" desc="0 会正常渲染，不会被误判为空" />
</Stat>`,fe=`const deadline = Date.now() + 1000 * 60 * 60 * 24 + 1000 * 30
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
</Stat>`,pe=`<Stat className="shadow">
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
</Stat>`,me=`<Stat className="shadow">
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
</Stat>`,he=`<Stat className="shadow">
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
</Stat>`,ge=`<Stat direction="vertical" className="shadow">
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
</Stat>`,_e=`<Stat direction="vertical" className="shadow lg:stats-horizontal">
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
</Stat>`,ve=`<Stat className="bg-base-100 border border-base-300">
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
</Stat>`,ye=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],be=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则保留原始小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],xe=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],Se=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:t,tabItems:n,tabFormat:r,tabFormatter:h,tabLoading:_,tabTimer:y,tabWithIcons:w,tabGroup:E,tabCentered:D,tabVertical:O,tabResponsive:ee,tabActions:k,deadline:A,startedAt:j}=v(`useSetup:0:0`,()=>i(()=>({tabBasic:v(`ref:1:0`,()=>a(`preview`)),tabItems:v(`ref:1:1`,()=>a(`preview`)),tabFormat:v(`ref:1:2`,()=>a(`preview`)),tabFormatter:v(`ref:1:3`,()=>a(`preview`)),tabLoading:v(`ref:1:4`,()=>a(`preview`)),tabTimer:v(`ref:1:5`,()=>a(`preview`)),tabWithIcons:v(`ref:1:6`,()=>a(`preview`)),tabGroup:v(`ref:1:7`,()=>a(`preview`)),tabCentered:v(`ref:1:8`,()=>a(`preview`)),tabVertical:v(`ref:1:9`,()=>a(`preview`)),tabResponsive:v(`ref:1:10`,()=>a(`preview`)),tabActions:v(`ref:1:11`,()=>a(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return f(i=>{let a=o(),v=u(`rue:component:anchor`);return c(a,v),m(g(T,{children:f(()=>{let i=o(),a=e(`div`,i);c(i,a),d(a,`max-w-none prose prose-sm md:prose-base`);let f=e(`h1`,a);c(a,f),c(f,p(`Stat 统计`));let v=e(`p`,a);c(a,v),d(v,`text-sm mt-3 mb-3`),c(v,p(`Stat 用于在一个块中展示数字与数据。这一轮增强保持 Rue 现有的 daisyUI 视觉语气，同时补上更接近常见统计组件的数值格式化、前后缀、loading 与 timer 能力。`));let T=e(`h2`,a);c(a,T),c(T,p(`功能概览`));let M=e(`ul`,a);c(a,M);let N=e(`li`,M);c(M,N),c(N,p(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式 demo。`));let P=e(`li`,M);c(M,P),c(P,p("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let F=e(`li`,M);c(M,F),c(F,p("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let I=e(`li`,M);c(M,I),c(I,p("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let L=u(`rue:component:anchor`);c(a,L),l(()=>{let e=g(Z,{title:`基础用法`,summary:`保留原始复合组件写法，适合完全自定义结构。`,tab:t,code:se,preview:()=>x(X,{className:`shadow`,children:b(X.Item,{children:[x(X.Title,{children:`Total Page Views`}),x(X.Value,{children:`89,400`}),x(X.Desc,{children:`21% more than last month`})]})})});s(()=>m(e,a,L))});let R=u(`rue:component:anchor`);c(a,R),l(()=>{let e=g(Z,{title:`数据驱动`,summary:`原有 items 数组能力保留，并自动兼容新的 value/prefix/loading 等增强属性。`,tab:n,code:ce,preview:()=>x(X,{items:oe,className:`shadow`})});s(()=>m(e,a,R))});let z=u(`rue:component:anchor`);c(a,z),l(()=>{let e=g(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:r,code:le,preview:()=>b(X,{className:`shadow`,children:[x(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),x(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})});s(()=>m(e,a,z))});let B=u(`rue:component:anchor`);c(a,B),l(()=>{let e=g(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:h,code:ue,preview:()=>b(X,{className:`shadow`,children:[x(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把原始值映射成业务文案`}),b(X.Item,{children:[x(X.Title,{children:`Storage`}),x(X.Value,{value:24576,suffix:`GB`,valueRender:e=>x(`span`,{className:`text-primary`,children:e})}),x(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})});s(()=>m(e,a,B))});let V=u(`rue:component:anchor`);c(a,V),l(()=>{let e=g(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:_,code:de,preview:()=>b(X,{className:`shadow`,children:[x(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),x(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})});s(()=>m(e,a,V))});let H=u(`rue:component:anchor`);c(a,H),l(()=>{let e=g(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 提供常见统计组件里的核心计时能力，`Stat.Countdown` 作为倒计时别名保留。",tab:y,code:fe,preview:()=>b(X,{className:`shadow`,children:[x(X.Timer,{title:`Campaign Countdown`,value:A,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),x(X.Timer,{type:`countup`,title:`Uptime`,value:j,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})});s(()=>m(e,a,H))});let U=u(`rue:component:anchor`);c(a,U),l(()=>{let e=g(Z,{title:`带图标或头像`,summary:`保留旧 demo，用于展示 figure 区的图标与头像承载能力。`,tab:w,code:pe,preview:()=>b(X,{className:`shadow`,children:[b(X.Item,{children:[x(X.Figure,{className:`text-primary`,children:x(ne,{})}),x(X.Title,{children:`Total Likes`}),x(X.Value,{className:`text-primary`,children:`25.6K`}),x(X.Desc,{children:`21% more than last month`})]}),b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(re,{})}),x(X.Title,{children:`Page Views`}),x(X.Value,{className:`text-secondary`,children:`2.6M`}),x(X.Desc,{children:`21% more than last month`})]}),b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(C,{status:`online`,children:x(`div`,{className:`w-16 rounded-full`,children:x(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),x(X.Value,{children:`86%`}),x(X.Title,{children:`Tasks done`}),x(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})});s(()=>m(e,a,U))});let W=u(`rue:component:anchor`);c(a,W),l(()=>{let e=g(Z,{title:`组合统计卡`,summary:`保留旧版多列指标卡示例，适合运营面板和概览页。`,tab:E,code:me,preview:()=>b(X,{className:`shadow`,children:[b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(te,{})}),x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`Jan 1st - Feb 1st`})]}),b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(ie,{})}),x(X.Title,{children:`New Users`}),x(X.Value,{children:`4,200`}),x(X.Desc,{children:`↗︎ 400 (22%)`})]}),b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(ae,{})}),x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});s(()=>m(e,a,W))});let G=u(`rue:component:anchor`);c(a,G),l(()=>{let e=g(Z,{title:`居中布局`,summary:"保留 `center` 演示，适合居中对齐的仪表盘摘要。",tab:D,code:he,preview:()=>b(X,{className:`shadow`,children:[b(X.Item,{center:!0,children:[x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`From January 1st to February 1st`})]}),b(X.Item,{center:!0,children:[x(X.Title,{children:`Users`}),x(X.Value,{className:`text-secondary`,children:`4,200`}),x(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),b(X.Item,{center:!0,children:[x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});s(()=>m(e,a,G))});let K=u(`rue:component:anchor`);c(a,K),l(()=>{let e=g(Z,{title:`纵向布局`,summary:"保留 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:O,code:ge,preview:()=>b(X,{direction:`vertical`,className:`shadow`,children:[b(X.Item,{children:[x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`Jan 1st - Feb 1st`})]}),b(X.Item,{children:[x(X.Title,{children:`New Users`}),x(X.Value,{children:`4,200`}),x(X.Desc,{children:`↗︎ 400 (22%)`})]}),b(X.Item,{children:[x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});s(()=>m(e,a,K))});let q=u(`rue:component:anchor`);c(a,q),l(()=>{let e=g(Z,{title:`响应式布局`,summary:`保留旧版 responsive 示例，小屏纵向，大屏横向。`,tab:ee,code:_e,preview:()=>b(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[b(X.Item,{children:[x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`Jan 1st - Feb 1st`})]}),b(X.Item,{children:[x(X.Title,{children:`New Users`}),x(X.Value,{children:`4,200`}),x(X.Desc,{children:`↗︎ 400 (22%)`})]}),b(X.Item,{children:[x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});s(()=>m(e,a,q))});let J=u(`rue:component:anchor`);c(a,J),l(()=>{let e=g(Z,{title:`带操作按钮`,summary:`保留旧版按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:k,code:ve,preview:()=>b(X,{className:`bg-base-100 border border-base-300`,children:[b(X.Item,{children:[x(X.Title,{children:`Account balance`}),x(X.Value,{children:`$89,400`}),x(X.Actions,{children:x(S,{color:`success`,size:`xs`,children:`Add funds`})})]}),b(X.Item,{children:[x(X.Title,{children:`Current balance`}),x(X.Value,{children:`$89,400`}),b(X.Actions,{children:[x(S,{size:`xs`,children:`Withdrawal`}),x(S,{size:`xs`,children:`Deposit`})]})]})]})});s(()=>m(e,a,J))});let Y=e(`h2`,a);c(a,Y),c(Y,p(`API`));let $=e(`h3`,a);c(a,$),c($,p(`Stat`));let Ce=u(`rue:component:anchor`);c(a,Ce),l(()=>{let e=g(Q,{rows:ye});s(()=>m(e,a,Ce))});let we=e(`h3`,a);c(a,we),c(we,p(`Stat.Item`));let Te=u(`rue:component:anchor`);c(a,Te),l(()=>{let e=g(Q,{rows:be});s(()=>m(e,a,Te))});let Ee=e(`h3`,a);c(a,Ee),c(Ee,p(`Stat.Value`));let De=u(`rue:component:anchor`);c(a,De),l(()=>{let e=g(Q,{rows:xe});s(()=>m(e,a,De))});let Oe=e(`h3`,a);c(a,Oe),c(Oe,p(`Stat.Timer / Stat.Countdown`));let ke=u(`rue:component:anchor`);return c(a,ke),l(()=>{let e=g(Q,{rows:Se});s(()=>m(e,a,ke))}),i})}),a,v),a})};export{$ as default};