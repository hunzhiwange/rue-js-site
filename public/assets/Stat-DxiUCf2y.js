import{$ as e,B as t,Ct as n,Dt as r,Et as i,G as a,H as o,O as s,U as c,W as l,Z as u,_ as d,ht as f,l as p,s as m,t as h,wt as g,yt as _}from"./vapor-runtime-C1rlwc61.js";import{a as v,n as y}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as b}from"./Code-BCLFq1E3.js";import{n as x,t as S}from"./src-BLzF0BqW.js";import{n as C}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as w}from"./button-B1PhsXzm.js";import{t as T}from"./avatar-cf80BRN6.js";import{t as E}from"./tabs-BOxm6iIN.js";var D=`.`,O=`,`,ee=`HH:mm:ss`,k=1e3/30,A=1e3,j=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],M=(e,t)=>t?`${e} ${t}`:e,N=e=>e==null||e===!1?!1:Array.isArray(e)?e.some(e=>N(e)):!0,P=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},F=({value:e,formatter:t,precision:n,decimalSeparator:r=D,groupSeparator:i=O})=>{if(typeof t==`function`)return t(e);if(!N(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},I=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=N(e)?F({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},L=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},R=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return j.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},z=(e,t)=>{let n=L(t),r=R(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},B=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?k:A,V=({figure:e,figureClassName:t,figureStyle:n,title:r,titleClassName:i,titleStyle:a,value:o,valueClassName:s,valueStyle:c,valueRender:l,prefix:u,suffix:f,loading:p,formatter:m,precision:h,decimalSeparator:g,groupSeparator:_,desc:v,descClassName:y,descStyle:b,actions:C,actionsClassName:w,actionsStyle:T})=>x(d,{children:[N(e)?S(q,{className:t,style:n,children:e}):null,N(r)?S(W,{className:i,style:a,children:r}):null,p||N(o)||N(u)||N(f)||typeof m==`function`||typeof l==`function`?S(G,{className:s,style:c,value:o,prefix:u,suffix:f,loading:p,valueRender:l,formatter:m,precision:h,decimalSeparator:g,groupSeparator:_}):null,N(v)?S(K,{className:y,style:b,children:v}):null,N(C)?S(J,{className:w,style:T,children:C}):null]}),H=({direction:e,className:t,children:n,items:r})=>{let i=M(e?`stats stats-${e}`:`stats`,t);return r&&r.length?S(`div`,{className:i,children:r.map((e,t)=>S(U,{...e},e.key??t))}):S(`div`,{className:i,children:n})},U=({center:e,className:t,children:n,figure:r,figureClassName:i,figureStyle:a,title:o,titleClassName:s,titleStyle:c,value:l,valueClassName:u,valueStyle:d,valueRender:f,prefix:p,suffix:m,loading:h,formatter:g,precision:_,decimalSeparator:v,groupSeparator:y,desc:b,descClassName:x,descStyle:C,actions:w,actionsClassName:T,actionsStyle:E})=>S(`div`,{className:M(e?`stat place-items-center`:`stat`,t),children:N(n)?n:V({figure:r,figureClassName:i,figureStyle:a,title:o,titleClassName:s,titleStyle:c,value:l,valueClassName:u,valueStyle:d,valueRender:f,prefix:p,suffix:m,loading:h,formatter:g,precision:_,decimalSeparator:v,groupSeparator:y,desc:b,descClassName:x,descStyle:C,actions:w,actionsClassName:T,actionsStyle:E})}),W=({className:e,style:t,children:n})=>S(`div`,{className:M(`stat-title`,e),style:t,children:n}),G=({className:e,style:t,children:n,value:r,prefix:i,suffix:a,loading:o,valueRender:s,formatter:c,precision:l,decimalSeparator:u,groupSeparator:d})=>{let f=I({value:r,children:n,valueRender:s,formatter:c,precision:l,decimalSeparator:u,groupSeparator:d});return x(`div`,{className:M(`stat-value`,e),style:t,children:[N(i)?S(`span`,{className:`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`,"aria-hidden":`true`,children:i}):null,o?S(`span`,{className:`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`,"data-stat-loading":`true`,"aria-hidden":`true`}):N(f)?S(`span`,{className:`stat-value-text`,"data-stat-value":`true`,children:f}):null,N(a)?S(`span`,{className:`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`,"aria-hidden":`true`,children:a}):null]})},K=({className:e,style:t,children:n})=>S(`div`,{className:M(`stat-desc`,e),style:t,children:n}),q=({className:e,style:t,children:n})=>S(`div`,{className:M(`stat-figure`,e),style:t,children:n}),J=({className:e,style:t,children:n})=>S(`div`,{className:M(`stat-actions`,e),style:t,children:n}),Y=({type:e=`countdown`,className:t,center:r,figure:a,figureClassName:o,figureStyle:c,title:l,titleClassName:u,titleStyle:d,valueClassName:p,valueStyle:m,prefix:h,suffix:g,loading:_,desc:v,descClassName:y,descStyle:b,actions:x,actionsClassName:C,actionsStyle:w,value:T,format:E=ee,interval:D,ariaLive:O,onChange:k,onFinish:A})=>{let j=f(0),M=n(null),N=n(!1),F=()=>{M.current!=null&&(clearInterval(M.current),M.current=null)},I=()=>{let t=P(T);if(t==null)return j.value=0,k&&k(void 0),F(),!1;let n=Date.now(),r=Math.max(e===`countup`?n-t:t-n,0);return j.value=r,k&&k(r),e===`countdown`&&r<=0?(F(),N.current||(N.current=!0,A&&A()),!1):(N.current=!1,!0)},L=()=>{F(),I()&&(M.current=setInterval(I,B(E,D)))};return i(()=>`${e}|${P(T)??`invalid`}|${E}|${D??``}`,()=>{N.current=!1,L()},{immediate:!0}),s(F),S(U,{center:r,className:t,figure:a,figureClassName:o,figureStyle:c,title:l,titleClassName:u,titleStyle:d,value:S(`span`,{"data-stat-timer":e,"aria-live":O??(E.includes(`S`)?`off`:`polite`),"aria-label":z(j.value,E),children:z(j.value,E)}),valueClassName:p,valueStyle:m,prefix:h,suffix:g,loading:_,desc:v,descClassName:y,descStyle:b,actions:x,actionsClassName:C,actionsStyle:w})},X=Object.assign(H,{Item:U,Title:W,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:e=>S(Y,{...e,type:`countdown`})}),Z=n=>p(i=>{let s=l(`div`,i);e(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=l(`div`,s);t(s,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=l(`div`,u);t(u,d);let f=l(`h2`,d);t(d,f),e(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(f,a(`# `));let g=o(`rue:slot:anchor`);t(f,g),r(()=>{let e=n.title;_(()=>m(e,f,g))});let v=o(`rue:slot:anchor`);t(d,v),r(()=>{let i=n.summary?p(()=>{let i=c(),a=l(`p`,i);t(i,a),e(a,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return t(a,s),r(()=>{let e=n.summary;_(()=>m(e,a,s))}),i}):``;_(()=>m(i,d,v))});let y=o(`rue:component:anchor`);t(s,y),r(()=>{let e=h(E,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});_(()=>m(e,s,y))});let x=o(`rue:slot:anchor`);return t(s,x),r(()=>{let e=n.tab.value===`preview`?n.preview():p(()=>{let e=c(),i=o(`rue:component:anchor`);return t(e,i),r(()=>{let t=h(b,{className:`mt-2`,lang:`tsx`,code:n.code});_(()=>m(t,e,i))}),e});_(()=>m(e,s,x))}),s}),Q=n=>p(i=>{let s=l(`div`,i);e(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=l(`table`,s);t(s,d),e(d,`table table-zebra`);let f=l(`thead`,d);t(d,f);let h=l(`tr`,f);t(f,h);let g=l(`th`,h);t(h,g),t(g,a(`属性`));let v=l(`th`,h);t(h,v),t(v,a(`说明`));let b=l(`th`,h);t(h,b),t(b,a(`类型`));let x=l(`th`,h);t(h,x),t(x,a(`默认值`));let S=l(`tbody`,d);t(d,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=y({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,a,s)=>{m(p(()=>{let n=c(),i=l(`tr`,n);t(n,i),r(()=>{u(i,`key`,String(e.prop))});let a=l(`td`,i);t(i,a);let s=l(`code`,a);t(a,s);let d=o(`rue:slot:anchor`);t(s,d),r(()=>{let t=e.prop;_(()=>m(t,s,d))});let f=l(`td`,i);t(i,f);let p=o(`rue:slot:anchor`);t(f,p),r(()=>{let t=e.description;_(()=>m(t,f,p))});let h=l(`td`,i);t(i,h);let g=l(`code`,h);t(h,g);let v=o(`rue:slot:anchor`);t(g,v),r(()=>{let t=e.type;_(()=>m(t,g,v))});let y=l(`td`,i);t(i,y);let b=l(`code`,y);t(y,b);let x=o(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;_(()=>m(t,b,x))}),n}),n,i)}})}),s}),te=()=>p(n=>{let r=l(`svg`,n);u(r,`xmlns`,`http://www.w3.org/2000/svg`),u(r,`fill`,`none`),u(r,`viewBox`,`0 0 24 24`),e(r,`inline-block w-8 h-8 stroke-current`);let i=l(`path`,r);return t(r,i),u(i,`stroke-linecap`,`round`),u(i,`stroke-linejoin`,`round`),u(i,`stroke-width`,`2`),u(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),r}),ne=()=>p(n=>{let r=l(`svg`,n);u(r,`xmlns`,`http://www.w3.org/2000/svg`),u(r,`fill`,`none`),u(r,`viewBox`,`0 0 24 24`),e(r,`inline-block w-8 h-8 stroke-current`);let i=l(`path`,r);return t(r,i),u(i,`stroke-linecap`,`round`),u(i,`stroke-linejoin`,`round`),u(i,`stroke-width`,`2`),u(i,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),r}),re=()=>p(n=>{let r=l(`svg`,n);u(r,`xmlns`,`http://www.w3.org/2000/svg`),u(r,`fill`,`none`),u(r,`viewBox`,`0 0 24 24`),e(r,`inline-block w-8 h-8 stroke-current`);let i=l(`path`,r);return t(r,i),u(i,`stroke-linecap`,`round`),u(i,`stroke-linejoin`,`round`),u(i,`stroke-width`,`2`),u(i,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),r}),ie=()=>p(n=>{let r=l(`svg`,n);u(r,`xmlns`,`http://www.w3.org/2000/svg`),u(r,`fill`,`none`),u(r,`viewBox`,`0 0 24 24`),e(r,`inline-block w-8 h-8 stroke-current`);let i=l(`path`,r);return t(r,i),u(i,`stroke-linecap`,`round`),u(i,`stroke-linejoin`,`round`),u(i,`stroke-width`,`2`),u(i,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),r}),ae=()=>p(n=>{let r=l(`svg`,n);u(r,`xmlns`,`http://www.w3.org/2000/svg`),u(r,`fill`,`none`),u(r,`viewBox`,`0 0 24 24`),e(r,`inline-block w-8 h-8 stroke-current`);let i=l(`path`,r);return t(r,i),u(i,`stroke-linecap`,`round`),u(i,`stroke-linejoin`,`round`),u(i,`stroke-width`,`2`),u(i,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),r}),oe=[{figure:S(te,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:S(`span`,{className:`text-secondary`,children:`4,200`}),desc:S(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:S(w,{color:`success`,size:`xs`,children:`Add funds`})}],se=`<Stat className="shadow">
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
</Stat>`,ye=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],be=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则保留原始小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],xe=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],Se=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:n,tabItems:i,tabFormat:s,tabFormatter:u,tabLoading:d,tabTimer:y,tabWithIcons:b,tabGroup:E,tabCentered:D,tabVertical:O,tabResponsive:ee,tabActions:k,deadline:A,startedAt:j}=v(`useSetup:0:0`,()=>g(()=>({tabBasic:v(`ref:1:0`,()=>f(`preview`)),tabItems:v(`ref:1:1`,()=>f(`preview`)),tabFormat:v(`ref:1:2`,()=>f(`preview`)),tabFormatter:v(`ref:1:3`,()=>f(`preview`)),tabLoading:v(`ref:1:4`,()=>f(`preview`)),tabTimer:v(`ref:1:5`,()=>f(`preview`)),tabWithIcons:v(`ref:1:6`,()=>f(`preview`)),tabGroup:v(`ref:1:7`,()=>f(`preview`)),tabCentered:v(`ref:1:8`,()=>f(`preview`)),tabVertical:v(`ref:1:9`,()=>f(`preview`)),tabResponsive:v(`ref:1:10`,()=>f(`preview`)),tabActions:v(`ref:1:11`,()=>f(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return p(f=>{let g=c(),v=o(`rue:component:anchor`);return t(g,v),m(h(C,{children:p(()=>{let f=c(),p=l(`div`,f);t(f,p),e(p,`max-w-none prose prose-sm md:prose-base`);let g=l(`h1`,p);t(p,g),t(g,a(`Stat 统计`));let v=l(`p`,p);t(p,v),e(v,`text-sm mt-3 mb-3`),t(v,a(`Stat 用于在一个块中展示数字与数据。这一轮增强保持 Rue 现有的 daisyUI 视觉语气，同时补上更接近常见统计组件的数值格式化、前后缀、loading 与 timer 能力。`));let C=l(`h2`,p);t(p,C),t(C,a(`功能概览`));let M=l(`ul`,p);t(p,M);let N=l(`li`,M);t(M,N),t(N,a(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式 demo。`));let P=l(`li`,M);t(M,P),t(P,a("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let F=l(`li`,M);t(M,F),t(F,a("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let I=l(`li`,M);t(M,I),t(I,a("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let L=o(`rue:component:anchor`);t(p,L),r(()=>{let e=h(Z,{title:`基础用法`,summary:`保留原始复合组件写法，适合完全自定义结构。`,tab:n,code:se,preview:()=>S(X,{className:`shadow`,children:x(X.Item,{children:[S(X.Title,{children:`Total Page Views`}),S(X.Value,{children:`89,400`}),S(X.Desc,{children:`21% more than last month`})]})})});_(()=>m(e,p,L))});let R=o(`rue:component:anchor`);t(p,R),r(()=>{let e=h(Z,{title:`数据驱动`,summary:`原有 items 数组能力保留，并自动兼容新的 value/prefix/loading 等增强属性。`,tab:i,code:ce,preview:()=>S(X,{items:oe,className:`shadow`})});_(()=>m(e,p,R))});let z=o(`rue:component:anchor`);t(p,z),r(()=>{let e=h(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:s,code:le,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),S(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})});_(()=>m(e,p,z))});let B=o(`rue:component:anchor`);t(p,B),r(()=>{let e=h(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:u,code:ue,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把原始值映射成业务文案`}),x(X.Item,{children:[S(X.Title,{children:`Storage`}),S(X.Value,{value:24576,suffix:`GB`,valueRender:e=>S(`span`,{className:`text-primary`,children:e})}),S(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})});_(()=>m(e,p,B))});let V=o(`rue:component:anchor`);t(p,V),r(()=>{let e=h(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:d,code:de,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),S(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})});_(()=>m(e,p,V))});let H=o(`rue:component:anchor`);t(p,H),r(()=>{let e=h(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 提供常见统计组件里的核心计时能力，`Stat.Countdown` 作为倒计时别名保留。",tab:y,code:fe,preview:()=>x(X,{className:`shadow`,children:[S(X.Timer,{title:`Campaign Countdown`,value:A,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),S(X.Timer,{type:`countup`,title:`Uptime`,value:j,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})});_(()=>m(e,p,H))});let U=o(`rue:component:anchor`);t(p,U),r(()=>{let e=h(Z,{title:`带图标或头像`,summary:`保留旧 demo，用于展示 figure 区的图标与头像承载能力。`,tab:b,code:pe,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-primary`,children:S(ne,{})}),S(X.Title,{children:`Total Likes`}),S(X.Value,{className:`text-primary`,children:`25.6K`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(re,{})}),S(X.Title,{children:`Page Views`}),S(X.Value,{className:`text-secondary`,children:`2.6M`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(T,{status:`online`,children:S(`div`,{className:`w-16 rounded-full`,children:S(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),S(X.Value,{children:`86%`}),S(X.Title,{children:`Tasks done`}),S(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})});_(()=>m(e,p,U))});let W=o(`rue:component:anchor`);t(p,W),r(()=>{let e=h(Z,{title:`组合统计卡`,summary:`保留旧版多列指标卡示例，适合运营面板和概览页。`,tab:E,code:me,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(te,{})}),S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(ie,{})}),S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(ae,{})}),S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});_(()=>m(e,p,W))});let G=o(`rue:component:anchor`);t(p,G),r(()=>{let e=h(Z,{title:`居中布局`,summary:"保留 `center` 演示，适合居中对齐的仪表盘摘要。",tab:D,code:he,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{center:!0,children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`From January 1st to February 1st`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`Users`}),S(X.Value,{className:`text-secondary`,children:`4,200`}),S(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});_(()=>m(e,p,G))});let K=o(`rue:component:anchor`);t(p,K),r(()=>{let e=h(Z,{title:`纵向布局`,summary:"保留 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:O,code:ge,preview:()=>x(X,{direction:`vertical`,className:`shadow`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});_(()=>m(e,p,K))});let q=o(`rue:component:anchor`);t(p,q),r(()=>{let e=h(Z,{title:`响应式布局`,summary:`保留旧版 responsive 示例，小屏纵向，大屏横向。`,tab:ee,code:_e,preview:()=>x(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})});_(()=>m(e,p,q))});let J=o(`rue:component:anchor`);t(p,J),r(()=>{let e=h(Z,{title:`带操作按钮`,summary:`保留旧版按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:k,code:ve,preview:()=>x(X,{className:`bg-base-100 border border-base-300`,children:[x(X.Item,{children:[S(X.Title,{children:`Account balance`}),S(X.Value,{children:`$89,400`}),S(X.Actions,{children:S(w,{color:`success`,size:`xs`,children:`Add funds`})})]}),x(X.Item,{children:[S(X.Title,{children:`Current balance`}),S(X.Value,{children:`$89,400`}),x(X.Actions,{children:[S(w,{size:`xs`,children:`Withdrawal`}),S(w,{size:`xs`,children:`Deposit`})]})]})]})});_(()=>m(e,p,J))});let Y=l(`h2`,p);t(p,Y),t(Y,a(`API`));let $=l(`h3`,p);t(p,$),t($,a(`Stat`));let Ce=o(`rue:component:anchor`);t(p,Ce),r(()=>{let e=h(Q,{rows:ye});_(()=>m(e,p,Ce))});let we=l(`h3`,p);t(p,we),t(we,a(`Stat.Item`));let Te=o(`rue:component:anchor`);t(p,Te),r(()=>{let e=h(Q,{rows:be});_(()=>m(e,p,Te))});let Ee=l(`h3`,p);t(p,Ee),t(Ee,a(`Stat.Value`));let De=o(`rue:component:anchor`);t(p,De),r(()=>{let e=h(Q,{rows:xe});_(()=>m(e,p,De))});let Oe=l(`h3`,p);t(p,Oe),t(Oe,a(`Stat.Timer / Stat.Countdown`));let ke=o(`rue:component:anchor`);return t(p,ke),r(()=>{let e=h(Q,{rows:Se});_(()=>m(e,p,ke))}),f})}),g,v),g})};export{$ as default};