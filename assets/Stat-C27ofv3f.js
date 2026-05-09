import{F as e,H as t,I as n,L as r,N as i,P as a,S as o,W as s,Y as c,c as l,d as u,ft as d,j as f,lt as p,pt as m,rt as h,t as g,u as _,ut as v}from"./vapor-runtime-CKndxKFn.js";import{a as y,n as b}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as x,t as S}from"./src-CqIWk1va.js";import{n as C}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as w}from"./Code-B1JFTu6m.js";import{t as T}from"./button-Doo7Wv3K.js";import{t as E}from"./avatar-CyUlRsyl.js";import{t as D}from"./tabs-BbiCzXqJ.js";var O=`.`,k=`,`,ee=`HH:mm:ss`,A=1e3/30,j=1e3,M=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],N=(e,t)=>t?`${e} ${t}`:e,P=e=>e==null||e===!1?!1:Array.isArray(e)?e.some(e=>P(e)):!0,F=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},I=({value:e,formatter:t,precision:n,decimalSeparator:r=O,groupSeparator:i=k})=>{if(typeof t==`function`)return t(e);if(!P(e))return null;if(typeof e!=`number`&&typeof e!=`string`)return e;let a=String(e),o=a.match(/^(-?)(\d*)(\.(\d+))?$/);if(!o||a===`-`)return a;let s=o[1],c=o[2]||`0`,l=o[4]||``;return c=c.replace(/\B(?=(\d{3})+(?!\d))/g,i),typeof n==`number`&&n>=0&&(l=l.padEnd(n,`0`).slice(0,n>0?n:0)),`${s}${c}${l?`${r}${l}`:``}`},L=({value:e,children:t,valueRender:n,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o})=>{let s=P(e)?I({value:e,formatter:r,precision:i,decimalSeparator:a,groupSeparator:o}):t;return typeof n==`function`?n(s):s},R=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},z=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return M.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},B=(e,t)=>{let n=R(t),r=z(e,n);return n.map(e=>{if(e.type===`literal`)return e.content;let t=String(r[e.unit]??0);return e.digits>1?t.padStart(e.digits,`0`):t}).join(``)},V=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?A:j,te=({figure:e,figureClassName:t,figureStyle:n,title:r,titleClassName:i,titleStyle:a,value:o,valueClassName:s,valueStyle:c,valueRender:l,prefix:d,suffix:f,loading:p,formatter:m,precision:h,decimalSeparator:g,groupSeparator:_,desc:v,descClassName:y,descStyle:b,actions:C,actionsClassName:w,actionsStyle:T})=>x(u,{children:[P(e)?S(q,{className:t,style:n,children:e}):null,P(r)?S(W,{className:i,style:a,children:r}):null,p||P(o)||P(d)||P(f)||typeof m==`function`||typeof l==`function`?S(G,{className:s,style:c,value:o,prefix:d,suffix:f,loading:p,valueRender:l,formatter:m,precision:h,decimalSeparator:g,groupSeparator:_}):null,P(v)?S(K,{className:y,style:b,children:v}):null,P(C)?S(J,{className:w,style:T,children:C}):null]}),H=({direction:e,className:t,children:n,items:r})=>{let i=N(e?`stats stats-${e}`:`stats`,t);return r&&r.length?S(`div`,{className:i,children:r.map((e,t)=>S(U,{...e},e.key??t))}):S(`div`,{className:i,children:n})},U=({center:e,className:t,children:n,figure:r,figureClassName:i,figureStyle:a,title:o,titleClassName:s,titleStyle:c,value:l,valueClassName:u,valueStyle:d,valueRender:f,prefix:p,suffix:m,loading:h,formatter:g,precision:_,decimalSeparator:v,groupSeparator:y,desc:b,descClassName:x,descStyle:C,actions:w,actionsClassName:T,actionsStyle:E})=>S(`div`,{className:N(e?`stat place-items-center`:`stat`,t),children:P(n)?n:te({figure:r,figureClassName:i,figureStyle:a,title:o,titleClassName:s,titleStyle:c,value:l,valueClassName:u,valueStyle:d,valueRender:f,prefix:p,suffix:m,loading:h,formatter:g,precision:_,decimalSeparator:v,groupSeparator:y,desc:b,descClassName:x,descStyle:C,actions:w,actionsClassName:T,actionsStyle:E})}),W=({className:e,style:t,children:n})=>S(`div`,{className:N(`stat-title`,e),style:t,children:n}),G=({className:e,style:t,children:n,value:r,prefix:i,suffix:a,loading:o,valueRender:s,formatter:c,precision:l,decimalSeparator:u,groupSeparator:d})=>{let f=L({value:r,children:n,valueRender:s,formatter:c,precision:l,decimalSeparator:u,groupSeparator:d});return x(`div`,{className:N(`stat-value`,e),style:t,children:[P(i)?S(`span`,{className:`stat-value-prefix mr-2 text-base-content/70 text-[0.55em]`,"aria-hidden":`true`,children:i}):null,o?S(`span`,{className:`skeleton inline-block h-[1.15em] w-24 max-w-full align-middle`,"data-stat-loading":`true`,"aria-hidden":`true`}):P(f)?S(`span`,{className:`stat-value-text`,"data-stat-value":`true`,children:f}):null,P(a)?S(`span`,{className:`stat-value-suffix ml-2 text-base-content/70 text-[0.55em]`,"aria-hidden":`true`,children:a}):null]})},K=({className:e,style:t,children:n})=>S(`div`,{className:N(`stat-desc`,e),style:t,children:n}),q=({className:e,style:t,children:n})=>S(`div`,{className:N(`stat-figure`,e),style:t,children:n}),J=({className:e,style:t,children:n})=>S(`div`,{className:N(`stat-actions`,e),style:t,children:n}),Y=({type:e=`countdown`,className:t,center:n,figure:r,figureClassName:i,figureStyle:a,title:s,titleClassName:c,titleStyle:l,valueClassName:u,valueStyle:f,prefix:m,suffix:g,loading:_,desc:v,descClassName:y,descStyle:b,actions:x,actionsClassName:C,actionsStyle:w,value:T,format:E=ee,interval:D,ariaLive:O,onChange:k,onFinish:A})=>{let j=h(0),M=p(null),N=p(!1),P=()=>{M.current!=null&&(clearInterval(M.current),M.current=null)},I=()=>{let t=F(T);if(t==null)return j.value=0,k&&k(void 0),P(),!1;let n=Date.now(),r=Math.max(e===`countup`?n-t:t-n,0);return j.value=r,k&&k(r),e===`countdown`&&r<=0?(P(),N.current||(N.current=!0,A&&A()),!1):(N.current=!1,!0)},L=()=>{P(),I()&&(M.current=setInterval(I,V(E,D)))};return d(()=>`${e}|${F(T)??`invalid`}|${E}|${D??``}`,()=>{N.current=!1,L()},{immediate:!0}),o(P),S(U,{center:n,className:t,figure:r,figureClassName:i,figureStyle:a,title:s,titleClassName:c,titleStyle:l,value:S(`span`,{"data-stat-timer":e,"aria-live":O??(E.includes(`S`)?`off`:`polite`),"aria-label":B(j.value,E),children:B(j.value,E)}),valueClassName:u,valueStyle:f,prefix:m,suffix:g,loading:_,desc:v,descClassName:y,descStyle:b,actions:x,actionsClassName:C,actionsStyle:w})},X=Object.assign(H,{Item:U,Title:W,Value:G,Desc:K,Figure:q,Actions:J,Timer:Y,Countdown:e=>S(Y,{...e,type:`countdown`})}),Z=({title:t,summary:o,tab:u,preview:d,code:p})=>_(()=>{let h=e(`div`);s(h,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);f(h,v),s(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);f(v,y);let b=e(`h2`);f(y,b),s(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),f(b,n(`# `));let x=r(b);f(b,x),m(()=>{c(x,t)});let S=i(`rue:slot:anchor`);f(y,S),m(()=>{l(o?_(()=>{let t=a(),n=e(`p`);f(t,n),s(n,`m-0 text-sm opacity-70`);let i=r(n);return f(n,i),m(()=>{c(i,o)}),t}):``,y,S)});let C=i(`rue:component:anchor`);f(h,C),m(()=>{l(g(D,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:u.value,onChange:e=>u.value=e,className:`mb-3 mt-4`}),h,C)});let T=i(`rue:slot:anchor`);return f(h,T),m(()=>{l(u.value===`preview`?d():_(()=>{let e=a(),t=i(`rue:component:anchor`);return f(e,t),m(()=>{l(g(w,{className:`mt-2`,lang:`tsx`,code:p}),e,t)}),e}),h,T)}),h}),Q=({rows:r})=>_(()=>{let o=e(`div`);s(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=e(`table`);f(o,c),s(c,`table table-zebra`);let u=e(`thead`);f(c,u);let d=e(`tr`);f(u,d);let p=e(`th`);f(d,p),f(p,n(`属性`));let h=e(`th`);f(d,h),f(h,n(`说明`));let g=e(`th`);f(d,g),f(g,n(`类型`));let v=e(`th`);f(d,v),f(v,n(`默认值`));let y=e(`tbody`);f(c,y);let x=i(`rue:list:start`),S=i(`rue:list:end`);f(y,x),f(y,S);let C=new Map;return m(()=>{C=b({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:y,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,c)=>{l(_(()=>{let r=a(),o=e(`tr`);f(r,o),m(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);f(o,s);let c=e(`code`);f(s,c);let u=i(`rue:slot:anchor`);f(c,u),m(()=>{let e=n.prop;l(e,c,u)});let d=e(`td`);f(o,d);let p=i(`rue:slot:anchor`);f(d,p),m(()=>{let e=n.description;l(e,d,p)});let h=e(`td`);f(o,h);let g=e(`code`);f(h,g);let _=i(`rue:slot:anchor`);f(g,_),m(()=>{let e=n.type;l(e,g,_)});let v=e(`td`);f(o,v);let y=e(`code`);f(v,y);let b=i(`rue:slot:anchor`);return f(y,b),m(()=>{let e=n.defaultValue;l(e,y,b)}),r}),r,o)}})}),o}),ne=()=>_(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),s(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`);return f(n,r),t(r,`stroke-linecap`,`round`),t(r,`stroke-linejoin`,`round`),t(r,`stroke-width`,`2`),t(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n}),re=()=>_(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),s(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`);return f(n,r),t(r,`stroke-linecap`,`round`),t(r,`stroke-linejoin`,`round`),t(r,`stroke-width`,`2`),t(r,`d`,`M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z`),n}),ie=()=>_(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),s(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`);return f(n,r),t(r,`stroke-linecap`,`round`),t(r,`stroke-linejoin`,`round`),t(r,`stroke-width`,`2`),t(r,`d`,`M13 10V3L4 14h7v7l9-11h-7z`),n}),ae=()=>_(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),s(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`);return f(n,r),t(r,`stroke-linecap`,`round`),t(r,`stroke-linejoin`,`round`),t(r,`stroke-width`,`2`),t(r,`d`,`M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4`),n}),oe=()=>_(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),s(n,`inline-block w-8 h-8 stroke-current`);let r=e(`path`);return f(n,r),t(r,`stroke-linecap`,`round`),t(r,`stroke-linejoin`,`round`),t(r,`stroke-width`,`2`),t(r,`d`,`M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4`),n}),se=[{figure:S(ne,{}),figureClassName:`text-secondary`,title:`Downloads`,value:`31K`,desc:`Jan 1st - Feb 1st`},{center:!0,title:`Users`,value:S(`span`,{className:`text-secondary`,children:`4,200`}),desc:S(`span`,{className:`text-secondary`,children:`↗︎ 40 (2%)`})},{title:`Account balance`,value:`$89,400`,actions:S(T,{color:`success`,size:`xs`,children:`Add funds`})}],ce=`<Stat className="shadow">
  <Stat.Item>
    <Stat.Title>Total Page Views</Stat.Title>
    <Stat.Value>89,400</Stat.Value>
    <Stat.Desc>21% more than last month</Stat.Desc>
  </Stat.Item>
</Stat>`,le=`import { Button, Stat } from '@rue-js/design'

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

<Stat items={statItems} className="shadow" />`,ue=`<Stat className="shadow">
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
</Stat>`,de=`<Stat className="shadow">
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
</Stat>`,fe=`<Stat className="shadow">
  <Stat.Item title="Sync Revenue" loading desc="数据回填前展示 skeleton 占位" />
  <Stat.Item title="Open Orders" value={0} suffix="items" desc="0 会正常渲染，不会被误判为空" />
</Stat>`,pe=`const deadline = Date.now() + 1000 * 60 * 60 * 24 + 1000 * 30
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
</Stat>`,me=`<Stat className="shadow">
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
</Stat>`,he=`<Stat className="shadow">
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
</Stat>`,ge=`<Stat className="shadow">
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
</Stat>`,_e=`<Stat direction="vertical" className="shadow">
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
</Stat>`,ve=`<Stat direction="vertical" className="shadow lg:stats-horizontal">
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
</Stat>`,ye=`<Stat className="bg-base-100 border border-base-300">
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
</Stat>`,be=[{prop:`direction`,description:`统计容器排列方向`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`items`,description:`通过数据项快速渲染多个统计块`,type:`StatDataItem[]`,defaultValue:`-`},{prop:`className`,description:`补充容器类名，常配合 shadow / border / 响应式类使用`,type:`string`,defaultValue:`-`}],xe=[{prop:`title / value / desc`,description:`直接声明常用统计内容，无需手写子节点结构`,type:`any`,defaultValue:`-`},{prop:`prefix / suffix`,description:`为数值区域追加前缀和后缀`,type:`any`,defaultValue:`-`},{prop:`formatter`,description:`自定义数值展示文案`,type:`(value) => any`,defaultValue:`-`},{prop:`precision`,description:`数字精度，不传则保留原始小数`,type:`number`,defaultValue:`-`},{prop:`loading`,description:`在 value 区域展示 skeleton 占位`,type:`boolean`,defaultValue:`false`},{prop:`center`,description:`启用居中布局`,type:`boolean`,defaultValue:`false`}],Se=[{prop:`value`,description:`支持 number、string 或任意展示节点`,type:`any`,defaultValue:`-`},{prop:`groupSeparator`,description:`千分位分隔符`,type:`string`,defaultValue:`','`},{prop:`decimalSeparator`,description:`小数点分隔符`,type:`string`,defaultValue:`'.'`},{prop:`valueRender`,description:`包装格式化后的值节点，适合高亮或插入 tag`,type:`(node) => any`,defaultValue:`-`}],Ce=[{prop:`type`,description:`计时类型，支持倒计时和累计计时`,type:`'countdown' | 'countup'`,defaultValue:`'countdown'`},{prop:`value`,description:`目标时间，支持时间戳、Date、可解析字符串`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:`时间格式，支持 D/H/m/s/S 和 [literal] 文本`,type:`string`,defaultValue:`'HH:mm:ss'`},{prop:`interval`,description:`主动指定刷新间隔`,type:`number`,defaultValue:`自动推断`},{prop:`onChange / onFinish`,description:`监听剩余或累计时长变化，以及倒计时结束`,type:`function`,defaultValue:`-`}],$=()=>{let{tabBasic:r,tabItems:o,tabFormat:c,tabFormatter:u,tabLoading:d,tabTimer:p,tabWithIcons:b,tabGroup:w,tabCentered:D,tabVertical:O,tabResponsive:k,tabActions:ee,deadline:A,startedAt:j}=y(`useSetup:0:0`,()=>v(()=>({tabBasic:y(`ref:1:0`,()=>h(`preview`)),tabItems:y(`ref:1:1`,()=>h(`preview`)),tabFormat:y(`ref:1:2`,()=>h(`preview`)),tabFormatter:y(`ref:1:3`,()=>h(`preview`)),tabLoading:y(`ref:1:4`,()=>h(`preview`)),tabTimer:y(`ref:1:5`,()=>h(`preview`)),tabWithIcons:y(`ref:1:6`,()=>h(`preview`)),tabGroup:y(`ref:1:7`,()=>h(`preview`)),tabCentered:y(`ref:1:8`,()=>h(`preview`)),tabVertical:y(`ref:1:9`,()=>h(`preview`)),tabResponsive:y(`ref:1:10`,()=>h(`preview`)),tabActions:y(`ref:1:11`,()=>h(`preview`)),deadline:Date.now()+1e3*60*60*24+1e3*30,startedAt:Date.now()-1e3*60*60*3-1e3*12})));return _(()=>{let h=a(),v=i(`rue:component:anchor`);return f(h,v),l(g(C,{children:_(()=>{let h=a(),_=e(`div`);f(h,_),s(_,`max-w-none prose prose-sm md:prose-base`);let v=e(`h1`);f(_,v),f(v,n(`Stat 统计`));let y=e(`p`);f(_,y),s(y,`text-sm mt-3 mb-3`),f(y,n(`Stat 用于在一个块中展示数字与数据。这一轮增强保持 Rue 现有的 daisyUI 视觉语气，同时补上更接近 ant-design Statistic 的数值格式化、前后缀、loading 与 timer 能力。`));let C=e(`div`);f(_,C),s(C,`text-sm`);let M=e(`a`);f(C,M),t(M,`href`,`https://daisyui.com/components/stat/`),t(M,`target`,`_blank`),f(M,n(`查看 Stat 静态样式`));let N=e(`h2`);f(_,N),f(N,n(`功能概览`));let P=e(`ul`);f(_,P);let F=e(`li`);f(P,F),f(F,n(`支持 children 组合写法、items 数据驱动、图标头像、居中/纵向/响应式 demo。`));let I=e(`li`);f(P,I),f(I,n("支持 `Stat.Item` 语义化属性写法，常见场景不必再手写 `Stat.Title / Stat.Value / Stat.Desc`。"));let L=e(`li`);f(P,L),f(L,n("支持数字格式化能力：`precision`、`groupSeparator`、`decimalSeparator`、`formatter`、`valueRender`。"));let R=e(`li`);f(P,R),f(R,n("支持 `prefix`、`suffix`、`loading` 与 `Stat.Timer / Stat.Countdown`。"));let z=i(`rue:component:anchor`);f(_,z),m(()=>{l(g(Z,{title:`基础用法`,summary:`保留原始复合组件写法，适合完全自定义结构。`,tab:r,code:ce,preview:()=>S(X,{className:`shadow`,children:x(X.Item,{children:[S(X.Title,{children:`Total Page Views`}),S(X.Value,{children:`89,400`}),S(X.Desc,{children:`21% more than last month`})]})})}),_,z)});let B=i(`rue:component:anchor`);f(_,B),m(()=>{l(g(Z,{title:`数据驱动`,summary:`原有 items 数组能力保留，并自动兼容新的 value/prefix/loading 等增强属性。`,tab:o,code:le,preview:()=>S(X,{items:se,className:`shadow`})}),_,B)});let V=i(`rue:component:anchor`);f(_,V),m(()=>{l(g(Z,{title:`数值格式化`,summary:"通过 `value` + `precision` + `prefix/suffix` 直接得到接近业务组件的统计展示。",tab:c,code:ue,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`GMV`,value:112893,precision:2,prefix:`$`,suffix:`USD`,desc:`格式化后的数值由 Value 自动处理`}),S(X.Item,{title:`Success Rate`,value:99.86,precision:2,suffix:`%`,valueClassName:`text-success`,desc:`支持 0、精度和分组符`})]})}),_,V)});let te=i(`rue:component:anchor`);f(_,te),m(()=>{l(g(Z,{title:`Formatter 与 ValueRender`,summary:"`formatter` 负责值的映射，`valueRender` 负责值节点的包装。",tab:u,code:de,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Requests`,value:1280,prefix:`API`,formatter:e=>`${e} req/s`,desc:`formatter 适合把原始值映射成业务文案`}),x(X.Item,{children:[S(X.Title,{children:`Storage`}),S(X.Value,{value:24576,suffix:`GB`,valueRender:e=>S(`span`,{className:`text-primary`,children:e})}),S(X.Desc,{children:`valueRender 可以包裹高亮节点`})]})]})}),_,te)});let H=i(`rue:component:anchor`);f(_,H),m(()=>{l(g(Z,{title:`Loading 与零值`,summary:"loading 在 value 区域展示 skeleton；`0` 不会再被当成空值吞掉。",tab:d,code:fe,preview:()=>x(X,{className:`shadow`,children:[S(X.Item,{title:`Sync Revenue`,loading:!0,desc:`数据回填前展示 skeleton 占位`}),S(X.Item,{title:`Open Orders`,value:0,suffix:`items`,desc:`0 会正常渲染，不会被误判为空`})]})}),_,H)});let U=i(`rue:component:anchor`);f(_,U),m(()=>{l(g(Z,{title:`Timer / Countdown`,summary:"`Stat.Timer` 对齐 ant-design 的核心计时能力，`Stat.Countdown` 作为倒计时别名保留。",tab:p,code:pe,preview:()=>x(X,{className:`shadow`,children:[S(X.Timer,{title:`Campaign Countdown`,value:A,suffix:`left`,desc:`默认按 HH:mm:ss 渲染`}),S(X.Timer,{type:`countup`,title:`Uptime`,value:j,format:`H[h] m[m] s[s]`,valueClassName:`text-success`,desc:`type='countup' 适合累计时长`})]})}),_,U)});let W=i(`rue:component:anchor`);f(_,W),m(()=>{l(g(Z,{title:`带图标或头像`,summary:`保留旧 demo，用于展示 figure 区的图标与头像承载能力。`,tab:b,code:me,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-primary`,children:S(re,{})}),S(X.Title,{children:`Total Likes`}),S(X.Value,{className:`text-primary`,children:`25.6K`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(ie,{})}),S(X.Title,{children:`Page Views`}),S(X.Value,{className:`text-secondary`,children:`2.6M`}),S(X.Desc,{children:`21% more than last month`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(E,{status:`online`,children:S(`div`,{className:`w-16 rounded-full`,children:S(`img`,{alt:`Tailwind CSS stat example component`,src:`https://img.daisyui.com/images/profile/demo/anakeen@192.webp`})})})}),S(X.Value,{children:`86%`}),S(X.Title,{children:`Tasks done`}),S(X.Desc,{className:`text-secondary`,children:`31 tasks remaining`})]})]})}),_,W)});let G=i(`rue:component:anchor`);f(_,G),m(()=>{l(g(Z,{title:`组合统计卡`,summary:`保留旧版多列指标卡示例，适合运营面板和概览页。`,tab:w,code:he,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(ne,{})}),S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(ae,{})}),S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Figure,{className:`text-secondary`,children:S(oe,{})}),S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})}),_,G)});let K=i(`rue:component:anchor`);f(_,K),m(()=>{l(g(Z,{title:`居中布局`,summary:"保留 `center` 演示，适合居中对齐的仪表盘摘要。",tab:D,code:ge,preview:()=>x(X,{className:`shadow`,children:[x(X.Item,{center:!0,children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`From January 1st to February 1st`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`Users`}),S(X.Value,{className:`text-secondary`,children:`4,200`}),S(X.Desc,{className:`text-secondary`,children:`↗︎ 40 (2%)`})]}),x(X.Item,{center:!0,children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})}),_,K)});let q=i(`rue:component:anchor`);f(_,q),m(()=>{l(g(Z,{title:`纵向布局`,summary:"保留 `direction='vertical'`，用于窄容器中的信息堆叠。",tab:O,code:_e,preview:()=>x(X,{direction:`vertical`,className:`shadow`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})}),_,q)});let J=i(`rue:component:anchor`);f(_,J),m(()=>{l(g(Z,{title:`响应式布局`,summary:`保留旧版 responsive 示例，小屏纵向，大屏横向。`,tab:k,code:ve,preview:()=>x(X,{direction:`vertical`,className:`shadow lg:stats-horizontal`,children:[x(X.Item,{children:[S(X.Title,{children:`Downloads`}),S(X.Value,{children:`31K`}),S(X.Desc,{children:`Jan 1st - Feb 1st`})]}),x(X.Item,{children:[S(X.Title,{children:`New Users`}),S(X.Value,{children:`4,200`}),S(X.Desc,{children:`↗︎ 400 (22%)`})]}),x(X.Item,{children:[S(X.Title,{children:`New Registers`}),S(X.Value,{children:`1,200`}),S(X.Desc,{children:`↘︎ 90 (14%)`})]})]})}),_,J)});let Y=i(`rue:component:anchor`);f(_,Y),m(()=>{l(g(Z,{title:`带操作按钮`,summary:`保留旧版按钮操作区示例，说明 Actions 仍可承载任意交互节点。`,tab:ee,code:ye,preview:()=>x(X,{className:`bg-base-100 border border-base-300`,children:[x(X.Item,{children:[S(X.Title,{children:`Account balance`}),S(X.Value,{children:`$89,400`}),S(X.Actions,{children:S(T,{color:`success`,size:`xs`,children:`Add funds`})})]}),x(X.Item,{children:[S(X.Title,{children:`Current balance`}),S(X.Value,{children:`$89,400`}),x(X.Actions,{children:[S(T,{size:`xs`,children:`Withdrawal`}),S(T,{size:`xs`,children:`Deposit`})]})]})]})}),_,Y)});let $=e(`h2`);f(_,$),f($,n(`API`));let we=e(`h3`);f(_,we),f(we,n(`Stat`));let Te=i(`rue:component:anchor`);f(_,Te),m(()=>{l(g(Q,{rows:be}),_,Te)});let Ee=e(`h3`);f(_,Ee),f(Ee,n(`Stat.Item`));let De=i(`rue:component:anchor`);f(_,De),m(()=>{l(g(Q,{rows:xe}),_,De)});let Oe=e(`h3`);f(_,Oe),f(Oe,n(`Stat.Value`));let ke=i(`rue:component:anchor`);f(_,ke),m(()=>{l(g(Q,{rows:Se}),_,ke)});let Ae=e(`h3`);f(_,Ae),f(Ae,n(`Stat.Timer / Stat.Countdown`));let je=i(`rue:component:anchor`);return f(_,je),m(()=>{l(g(Q,{rows:Ce}),_,je)}),h})}),h,v),h})};export{$ as default};