import{C as e,F as t,I as n,K as r,L as i,N as a,R as o,W as s,_t as c,d as l,f as u,gt as d,l as f,mt as p,ot as m,pt as h,t as g,ut as _}from"./vapor-runtime-Dfq7aA8z.js";import{a as v,n as y}from"./vapor-helpers-vapor-CpxsbTjB.js";import{n as b,t as x}from"./src-BaNG2YQR.js";import{n as S}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as C}from"./Code-CLTo4rRM.js";import{t as w}from"./button-BEauHTlg.js";import{t as T}from"./avatar-CUq-XR9J.js";import{t as E}from"./tabs-CxVJfyAw.js";var D=`.`,O=`,`,ee=`HH:mm:ss`,k=1e3/30,A=1e3,j=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],M=(e,t)=>t?`${e} ${t}`:e,N=e=>e==null||e===!1?!1:Array.isArray(e)?e.some(e=>N(e)):!0,P=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},F=({value:e,formatter:t,precision:n,decimalSeparator:r=D,groupSeparator:i=O})=>{if(typeof t==`function`)return t(e);if(!N(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},I=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=N(e)?F({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},L=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},R=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return j.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},z=(e,t)=>{let n=L(t),r=R(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},B=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?k:A,V=({figure:e,figureClassName:t,figureStyle:n,title:r,titleClassName:i,titleStyle:a,value:o,valueClassName:s,valueStyle:c,valueRender:l,prefix:d,suffix:f,loading:p,formatter:m,precision:h,decimalSeparator:g,groupSeparator:_,desc:v,descClassName:y,descStyle:S,actions:C,actionsClassName:w,actionsStyle:T})=>b(u,{children:[N(e)?x(q,{className:t,style:n,children:e}):null,N(r)?x(W,{className:i,style:a,children:r}):null,p||N(o)||N(d)||N(f)||typeof m==`function`||typeof l==`function`?x(G,{className:s,style:c,value:o,prefix:d,suffix:f,loading:p,valueRender:l,formatter:m,precision:h,decimalSeparator:g,groupSeparator:_}):null,N(v)?x(K,{className:y,style:S,children:v}):null,N(C)?x(J,{className:w,style:T,children:C}):null]}),H=({direction:e,className:t,children:n,items:r})=>{let i=M(e?`stats stats-${e}`:`stats`,t);return r&&r.length?x(`div`,{className:i,children:r.map((e,t)=>x(U,{...e},e.key??t))}):x(`div`,{className:i,children:n})},U=({center:e,className:t,children:n,figure:r,figureClassName:i,figureStyle:a,title:o,titleClassName:s,titleStyle:c,value:l,valueClassName:u,valueStyle:d,valueRender:f,prefix:p,suffix:m,loading:h,formatter:g,precision:_,decimalSeparator:v,groupSeparator:y,desc:b,descClassName:S,descStyle:C,actions:w,actionsClassName:T,actionsStyle:E})=>x(`div`,{className:M(e?`stat place-items-center`:`stat`,t),children:N(n)?n:V({figure:r,figureClassName:i,figureStyle:a,title:o,titleClassName:s,titleStyle:c,value:l,valueClassName:u,valueStyle:d,valueRender:f,prefix:p,suffix:m,loading:h,formatter:g,precision:_,decimalSeparator:v,groupSeparator:y,desc:b,descClassName:S,descStyle:C,actions:w,actionsClassName:T,actionsStyle:E})}),W=({className:e,style:t,children:n})=>x(`div`,{className:M(`stat-title`,e),style:t,children:n}),G=({className:e,style:t,children:n,value:r,prefix:i,suffix:a,loading:o,valueRender:s,formatter:c,precision:l,decimalSeparator:u,groupSeparator:d})=>{let f=I({value:r,children:n,valueRender:s,formatter:c,precision:l,decimalSeparator:u,groupSeparator:d});return b(`div`,{className:M(`stat-value`,e),style:t,children:[N(i)?x(`span`,{className:`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`,"aria-hidden":`true`,children:i}):null,o?x(`span`,{className:`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`,"data-stat-loading":`true`,"aria-hidden":`true`}):N(f)?x(`span`,{className:`stat-value-text`,"data-stat-value":`true`,children:f}):null,N(a)?x(`span`,{className:`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`,"aria-hidden":`true`,children:a}):null]})},K=({className:e,style:t,children:n})=>x(`div`,{className:M(`stat-desc`,e),style:t,children:n}),q=({className:e,style:t,children:n})=>x(`div`,{className:M(`stat-figure`,e),style:t,children:n}),J=({className:e,style:t,children:n})=>x(`div`,{className:M(`stat-actions`,e),style:t,children:n}),Y=({type:t=`countdown`,className:n,center:r,figure:i,figureClassName:a,figureStyle:o,title:s,titleClassName:c,titleStyle:l,valueClassName:u,valueStyle:f,prefix:p,suffix:g,loading:_,desc:v,descClassName:y,descStyle:b,actions:S,actionsClassName:C,actionsStyle:w,value:T,format:E=ee,interval:D,ariaLive:O,onChange:k,onFinish:A})=>{let j=m(0),M=h(null),N=h(!1),F=()=>{M.current!=null&&(clearInterval(M.current),M.current=null)},I=()=>{let e=P(T);if(e==null)return j.value=0,k&&k(void 0),F(),!1;let n=Date.now(),r=Math.max(t===`countup`?n-e:e-n,0);return j.value=r,k&&k(r),t===`countdown`&&r<=0?(F(),N.current||(N.current=!0,A&&A()),!1):(N.current=!1,!0)},L=()=>{F(),I()&&(M.current=setInterval(I,B(E,D)))};return d(()=>`${t}|${P(T)??`invalid`}|${E}|${D??``}`,()=>{N.current=!1,L()},{immediate:!0}),e(F),x(U,{center:r,className:n,figure:i,figureClassName:a,figureStyle:o,title:s,titleClassName:c,titleStyle:l,value:x(`span`,{"data-stat-timer":t,"aria-live":O??(E.includes(`S`)?`off`:`polite`),"aria-label":z(j.value,E),children:z(j.value,E)}),valueClassName:u,valueStyle:f,prefix:p,suffix:g,loading:_,desc:v,descClassName:y,descStyle:b,actions:S,actionsClassName:C,actionsStyle:w})},X=Object.assign(H,{Item:U,Title:W,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:e=>x(Y,{...e,type:`countdown`})}),Z=e=>l(s=>{let u=i(`div`,s);r(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=i(`div`,u);a(u,d),r(d,`flex flex-wrap items-start justify-between gap-3`);let p=i(`div`,d);a(d,p);let m=i(`h2`,p);a(p,m),r(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(m,o(`# `));let h=t(`rue:slot:anchor`);a(m,h),c(()=>{let t=e.title;_(()=>f(t,m,h))});let v=t(`rue:slot:anchor`);a(p,v),c(()=>{let o=e.summary?l(()=>{let o=n(),s=i(`p`,o);a(o,s),r(s,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return a(s,l),c(()=>{let t=e.summary;_(()=>f(t,s,l))}),o}):``;_(()=>f(o,p,v))});let y=t(`rue:component:anchor`);a(u,y),c(()=>{let t=g(E,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});_(()=>f(t,u,y))});let b=t(`rue:slot:anchor`);return a(u,b),c(()=>{let r=e.tab.value===`preview`?e.preview():l(()=>{let r=n(),i=t(`rue:component:anchor`);return a(r,i),c(()=>{let t=g(C,{className:`mt-2`,lang:`tsx`,code:e.code});_(()=>f(t,r,i))}),r});_(()=>f(r,u,b))}),u}),Q=e=>l(u=>{let d=i(`div`,u);r(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=i(`table`,d);a(d,p),r(p,`table table-zebra`);let m=i(`thead`,p);a(p,m);let h=i(`tr`,m);a(m,h);let g=i(`th`,h);a(h,g),a(g,o(`属性`));let v=i(`th`,h);a(h,v),a(v,o(`说明`));let b=i(`th`,h);a(h,b),a(b,o(`类型`));let x=i(`th`,h);a(h,x),a(x,o(`默认值`));let S=i(`tbody`,p);a(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return c(()=>{T=y({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,o,u,d)=>{f(l(()=>{let r=n(),o=i(`tr`,r);a(r,o),c(()=>{s(o,`key`,String(e.prop))});let l=i(`td`,o);a(o,l);let u=i(`code`,l);a(l,u);let d=t(`rue:slot:anchor`);a(u,d),c(()=>{let t=e.prop;_(()=>f(t,u,d))});let p=i(`td`,o);a(o,p);let m=t(`rue:slot:anchor`);a(p,m),c(()=>{let t=e.description;_(()=>f(t,p,m))});let h=i(`td`,o);a(o,h);let g=i(`code`,h);a(h,g);let v=t(`rue:slot:anchor`);a(g,v),c(()=>{let t=e.type;_(()=>f(t,g,v))});let y=i(`td`,o);a(o,y);let b=i(`code`,y);a(y,b);let x=t(`rue:slot:anchor`);return a(b,x),c(()=>{let t=e.defaultValue;_(()=>f(t,b,x))}),r}),r,o)}})}),d}),te=()=>l(e=>{let t=i(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),r(t,`inline-block w-8 h-8 stroke-current`);let n=i(`path`,t);return a(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t}),ne=()=>l(e=>{let t=i(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),r(t,`inline-block w-8 h-8 stroke-current`);let n=i(`path`,t);return a(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),t}),re=()=>l(e=>{let t=i(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),r(t,`inline-block w-8 h-8 stroke-current`);let n=i(`path`,t);return a(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),t}),ie=()=>l(e=>{let t=i(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),r(t,`inline-block w-8 h-8 stroke-current`);let n=i(`path`,t);return a(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),t}),ae=()=>l(e=>{let t=i(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),r(t,`inline-block w-8 h-8 stroke-current`);let n=i(`path`,t);return a(t,n),s(n,`stroke-linecap`,`round`),s(n,`stroke-linejoin`,`round`),s(n,`stroke-width`,`2`),s(n,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),t}),oe=[{figure:x(te,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:x(`span`,{className:`text-secondary`,children:`4,200`}),desc:x(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:x(w,{color:`success`,size:`xs`,children:`Add funds`})}],se=`<Stat className="shadow">
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
</Stat>`,ye=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],be=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则保留原始小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],xe=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],Se=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:e,tabItems:u,tabFormat:d,tabFormatter:h,tabLoading:y,tabTimer:C,tabWithIcons:E,tabGroup:D,tabCentered:O,tabVertical:ee,tabResponsive:k,tabActions:A,deadline:j,startedAt:M}=v(`useSetup:0:0`,()=>p(()=>({tabBasic:v(`ref:1:0`,()=>m(`preview`)),tabItems:v(`ref:1:1`,()=>m(`preview`)),tabFormat:v(`ref:1:2`,()=>m(`preview`)),tabFormatter:v(`ref:1:3`,()=>m(`preview`)),tabLoading:v(`ref:1:4`,()=>m(`preview`)),tabTimer:v(`ref:1:5`,()=>m(`preview`)),tabWithIcons:v(`ref:1:6`,()=>m(`preview`)),tabGroup:v(`ref:1:7`,()=>m(`preview`)),tabCentered:v(`ref:1:8`,()=>m(`preview`)),tabVertical:v(`ref:1:9`,()=>m(`preview`)),tabResponsive:v(`ref:1:10`,()=>m(`preview`)),tabActions:v(`ref:1:11`,()=>m(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return l(p=>{let m=n(),v=t(`rue:component:anchor`);return a(m,v),f(g(S,{children:l(()=>{let l=n(),p=i(`div`,l);a(l,p),r(p,`max-w-none prose prose-sm md:prose-base`);let m=i(`h1`,p);a(p,m),a(m,o(`Stat 统计`));let v=i(`p`,p);a(p,v),r(v,`text-sm mt-3 mb-3`),a(v,o(`Stat 用于在一个块中展示数字与数据。这一轮增强保持 Rue 现有的 daisyUI 视觉语气，同时补上更接近常见统计组件的数值格式化、前后缀、loading 与 timer 能力。`));let S=i(`div`,p);a(p,S),r(S,`text-sm`);let N=i(`a`,S);a(S,N),s(N,`href`,`https://daisyui.com/components/stat/`),s(N,`target`,`_blank`),a(N,o(`查看 Stat 静态样式`));let P=i(`h2`,p);a(p,P),a(P,o(`功能概览`));let F=i(`ul`,p);a(p,F);let I=i(`li`,F);a(F,I),a(I,o(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式 demo。`));let L=i(`li`,F);a(F,L),a(L,o("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let R=i(`li`,F);a(F,R),a(R,o("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let z=i(`li`,F);a(F,z),a(z,o("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let B=t(`rue:component:anchor`);a(p,B),c(()=>{let t=g(Z,{title:`基础用法`,summary:`保留原始复合组件写法，适合完全自定义结构。`,tab:e,code:se,preview:()=>x(X,{className:`shadow`,children:b(X.Item,{children:[x(X.Title,{children:`Total Page Views`}),x(X.Value,{children:`89,400`}),x(X.Desc,{children:`21% more than last month`})]})})});_(()=>f(t,p,B))});let V=t(`rue:component:anchor`);a(p,V),c(()=>{let e=g(Z,{title:`数据驱动`,summary:`原有 items 数组能力保留，并自动兼容新的 value/prefix/loading 等增强属性。`,tab:u,code:ce,preview:()=>x(X,{items:oe,className:`shadow`})});_(()=>f(e,p,V))});let H=t(`rue:component:anchor`);a(p,H),c(()=>{let e=g(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:d,code:le,preview:()=>b(X,{className:`shadow`,children:[x(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),x(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})});_(()=>f(e,p,H))});let U=t(`rue:component:anchor`);a(p,U),c(()=>{let e=g(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:h,code:ue,preview:()=>b(X,{className:`shadow`,children:[x(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把原始值映射成业务文案`}),b(X.Item,{children:[x(X.Title,{children:`Storage`}),x(X.Value,{value:24576,suffix:`GB`,valueRender:e=>x(`span`,{className:`text-primary`,children:e})}),x(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})});_(()=>f(e,p,U))});let W=t(`rue:component:anchor`);a(p,W),c(()=>{let e=g(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:y,code:de,preview:()=>b(X,{className:`shadow`,children:[x(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),x(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})});_(()=>f(e,p,W))});let G=t(`rue:component:anchor`);a(p,G),c(()=>{let e=g(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 提供常见统计组件里的核心计时能力，`Stat.Countdown` 作为倒计时别名保留。",tab:C,code:fe,preview:()=>b(X,{className:`shadow`,children:[x(X.Timer,{title:`Campaign Countdown`,value:j,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),x(X.Timer,{type:`countup`,title:`Uptime`,value:M,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})});_(()=>f(e,p,G))});let K=t(`rue:component:anchor`);a(p,K),c(()=>{let e=g(Z,{title:`带图标或头像`,summary:`保留旧 demo，用于展示 figure 区的图标与头像承载能力。`,tab:E,code:pe,preview:()=>b(X,{className:`shadow`,children:[b(X.Item,{children:[x(X.Figure,{className:`text-primary`,children:x(ne,{})}),x(X.Title,{children:`Total Likes`}),x(X.Value,{className:`text-primary`,children:`25.6K`}),x(X.Desc,{children:`21% more than last month`})]}),b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(re,{})}),x(X.Title,{children:`Page Views`}),x(X.Value,{className:`text-secondary`,children:`2.6M`}),x(X.Desc,{children:`21% more than last month`})]}),b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(T,{status:`online`,children:x(`div`,{className:`w-16 rounded-full`,children:x(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),x(X.Value,{children:`86%`}),x(X.Title,{children:`Tasks done`}),x(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})});_(()=>f(e,p,K))});let q=t(`rue:component:anchor`);a(p,q),c(()=>{let e=g(Z,{title:`组合统计卡`,summary:`保留旧版多列指标卡示例，适合运营面板和概览页。`,tab:D,code:me,preview:()=>b(X,{className:`shadow`,children:[b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(te,{})}),x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`Jan 1st - Feb 1st`})]}),b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(ie,{})}),x(X.Title,{children:`New Users`}),x(X.Value,{children:`4,200`}),x(X.Desc,{children:`↗︎ 400 (22%)`})]}),b(X.Item,{children:[x(X.Figure,{className:`text-secondary`,children:x(ae,{})}),x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});_(()=>f(e,p,q))});let J=t(`rue:component:anchor`);a(p,J),c(()=>{let e=g(Z,{title:`居中布局`,summary:"保留 `center` 演示，适合居中对齐的仪表盘摘要。",tab:O,code:he,preview:()=>b(X,{className:`shadow`,children:[b(X.Item,{center:!0,children:[x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`From January 1st to February 1st`})]}),b(X.Item,{center:!0,children:[x(X.Title,{children:`Users`}),x(X.Value,{className:`text-secondary`,children:`4,200`}),x(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),b(X.Item,{center:!0,children:[x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});_(()=>f(e,p,J))});let Y=t(`rue:component:anchor`);a(p,Y),c(()=>{let e=g(Z,{title:`纵向布局`,summary:"保留 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:ee,code:ge,preview:()=>b(X,{direction:`vertical`,className:`shadow`,children:[b(X.Item,{children:[x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`Jan 1st - Feb 1st`})]}),b(X.Item,{children:[x(X.Title,{children:`New Users`}),x(X.Value,{children:`4,200`}),x(X.Desc,{children:`↗︎ 400 (22%)`})]}),b(X.Item,{children:[x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});_(()=>f(e,p,Y))});let $=t(`rue:component:anchor`);a(p,$),c(()=>{let e=g(Z,{title:`响应式布局`,summary:`保留旧版 responsive 示例，小屏纵向，大屏横向。`,tab:k,code:_e,preview:()=>b(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[b(X.Item,{children:[x(X.Title,{children:`Downloads`}),x(X.Value,{children:`31K`}),x(X.Desc,{children:`Jan 1st - Feb 1st`})]}),b(X.Item,{children:[x(X.Title,{children:`New Users`}),x(X.Value,{children:`4,200`}),x(X.Desc,{children:`↗︎ 400 (22%)`})]}),b(X.Item,{children:[x(X.Title,{children:`New Registers`}),x(X.Value,{children:`1,200`}),x(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});_(()=>f(e,p,$))});let Ce=t(`rue:component:anchor`);a(p,Ce),c(()=>{let e=g(Z,{title:`带操作按钮`,summary:`保留旧版按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:A,code:ve,preview:()=>b(X,{className:`bg-base-100 border border-base-300`,children:[b(X.Item,{children:[x(X.Title,{children:`Account balance`}),x(X.Value,{children:`$89,400`}),x(X.Actions,{children:x(w,{color:`success`,size:`xs`,children:`Add funds`})})]}),b(X.Item,{children:[x(X.Title,{children:`Current balance`}),x(X.Value,{children:`$89,400`}),b(X.Actions,{children:[x(w,{size:`xs`,children:`Withdrawal`}),x(w,{size:`xs`,children:`Deposit`})]})]})]})});_(()=>f(e,p,Ce))});let we=i(`h2`,p);a(p,we),a(we,o(`API`));let Te=i(`h3`,p);a(p,Te),a(Te,o(`Stat`));let Ee=t(`rue:component:anchor`);a(p,Ee),c(()=>{let e=g(Q,{rows:ye});_(()=>f(e,p,Ee))});let De=i(`h3`,p);a(p,De),a(De,o(`Stat.Item`));let Oe=t(`rue:component:anchor`);a(p,Oe),c(()=>{let e=g(Q,{rows:be});_(()=>f(e,p,Oe))});let ke=i(`h3`,p);a(p,ke),a(ke,o(`Stat.Value`));let Ae=t(`rue:component:anchor`);a(p,Ae),c(()=>{let e=g(Q,{rows:xe});_(()=>f(e,p,Ae))});let je=i(`h3`,p);a(p,je),a(je,o(`Stat.Timer / Stat.Countdown`));let Me=t(`rue:component:anchor`);return a(p,Me),c(()=>{let e=g(Q,{rows:Se});_(()=>f(e,p,Me))}),l})}),m,v),m})};export{$ as default};