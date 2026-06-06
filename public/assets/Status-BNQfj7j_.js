import{$ as e,Kt as t,Lt as n,Q as r,S as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,ot as f,s as p,t as m}from"./vapor-runtime-DHPuOjqh.js";import{a as h,n as g}from"./vapor-helpers-vapor-CJFAWine.js";import{a as _,i as v}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as y}from"./Code-Ds9lKLk6.js";import{t as b}from"./tabs-DSy0eY-V.js";import{t as x}from"./status-Cz0cTJBM.js";import{n as S}from"./SidebarPlaygroundDesign-DMSFSCs3.js";var C=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],w=`card border border-base-200 bg-base-100 shadow-sm`,T=`card-body gap-4`,E=(e,t)=>t?`${e} ${t}`:e,D=e=>Array.isArray(e)?e:e==null?[]:[e],ee=`<div className="flex flex-wrap items-center gap-6">
  <Status as="span" />
  <Status status="processing" text="Deploying" />
  <Status color="success" text="Online" />
  <Status status="warning" text="Window closing soon" />
</div>`,te=`<div className="flex flex-col gap-4">
  <div className="flex flex-wrap items-center gap-4">
    <Status ariaLabel="status" size="xs" />
    <Status ariaLabel="status" size="sm" />
    <Status ariaLabel="status" size="md" />
    <Status ariaLabel="status" size="lg" />
    <Status ariaLabel="status" size="xl" />
  </div>

  <div className="flex flex-wrap items-center gap-4">
    <Status ariaLabel="status" color="primary" />
    <Status ariaLabel="status" color="secondary" />
    <Status ariaLabel="status" color="accent" />
    <Status ariaLabel="status" color="neutral" />
    <Status ariaLabel="info" color="info" />
    <Status ariaLabel="success" color="success" />
    <Status ariaLabel="warning" color="warning" />
    <Status ariaLabel="error" color="error" />
  </div>
</div>`,ne=`<div className="flex flex-col items-start gap-3">
  <Status status="success" text="Published" />
  <Status status="processing" text="Syncing data" />
  <Status dot status="processing" text="Syncing edge cache" />
  <Status count={7} color="#f97316" text="待审核" />
</div>`,re=`<div className="flex flex-wrap items-center gap-8">
  <Status dot color="success">
    <div className="flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium">
      APP
    </div>
  </Status>

  <Status dot color="warning" text="Pending review">
    <div className="flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium">
      PR
    </div>
  </Status>

  <Status count={5}>
    <div className="flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium">
      Inbox
    </div>
  </Status>

  <Status count={12} color="secondary" text="Messages">
    <div className="flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium">
      Chat
    </div>
  </Status>
</div>`,ie=`<div className="grid gap-4 lg:grid-cols-2">
  <div className="flex flex-wrap items-center gap-8">
    <Status count={0}>
      <div className="flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium">
        Draft
      </div>
    </Status>

    <Status count={0} showZero color="info" text="No unread">
      <div className="flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium">
        Mail
      </div>
    </Status>

    <Status count={128} overflowCount={99} color="error">
      <div className="flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium">
        Alerts
      </div>
    </Status>
  </div>

  <div className="flex flex-wrap items-center gap-8">
    <Status count={8} offset={[8, 6]} color="primary">
      <div className="flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium">
        Releases
      </div>
    </Status>

    <Status dot offset={[10, 8]} color="#0f766e" text="Custom offset">
      <div className="flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium">
        Jobs
      </div>
    </Status>
  </div>
</div>`,ae=`<div className="flex flex-col gap-4">
  <div className="flex items-center gap-3">
    <div className="inline-grid *:[grid-area:1/1]">
      <Status dot color="error" className="animate-ping" />
      <Status dot color="error" />
    </div>
    <span>Server is down</span>
  </div>

  <div className="flex items-center gap-3">
    <Status color="info" className="animate-bounce" />
    <span>Unread messages</span>
  </div>
</div>`,oe=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],O=t=>d(n=>{let i=e(`div`,n);l(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,i);o(i,f),l(f,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,f);o(f,h);let g=e(`h2`,h);o(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(g,u(`# `));let _=c(`rue:slot:anchor`);o(g,_),s(()=>{let e=t.title;a(()=>p(e,g,_))});let v=c(`rue:slot:anchor`);o(h,v),s(()=>{let n=t.summary?d(()=>{let n=r(),i=e(`p`,n);o(n,i),l(i,`m-0 text-sm opacity-70`);let u=c(`rue:slot:anchor`);return o(i,u),s(()=>{let e=t.summary;a(()=>p(e,i,u))}),n}):``;a(()=>p(n,h,v))});let x=c(`rue:component:anchor`);o(i,x),s(()=>{let e=m(b,{style:`box`,items:C,activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});a(()=>p(e,i,x))});let S=c(`rue:slot:anchor`);return o(i,S),s(()=>{let e=t.tab.value===`preview`?t.preview():d(()=>{let e=r(),n=c(`rue:component:anchor`);return o(e,n),s(()=>{let r=m(y,{className:`mt-2`,lang:`tsx`,code:t.code});a(()=>p(r,e,n))}),e});a(()=>p(e,i,S))}),i}),k=e=>i(`div`,{className:E(w,e.className)},i(`div`,{className:T},...D(e.children))),A=t=>d(n=>{let i=e(`div`,n);l(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,i);o(i,m),l(m,`table table-zebra`);let h=e(`thead`,m);o(m,h);let _=e(`tr`,h);o(h,_);let v=e(`th`,_);o(_,v),o(v,u(`属性`));let y=e(`th`,_);o(_,y),o(y,u(`说明`));let b=e(`th`,_);o(_,b),o(b,u(`类型`));let x=e(`th`,_);o(_,x),o(x,u(`默认值`));let S=e(`tbody`,m);o(m,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=g({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,i,l,u)=>{p(d(()=>{let n=r(),i=e(`tr`,n);o(n,i),s(()=>{f(i,`key`,String(t.prop))});let l=e(`td`,i);o(i,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>p(e,u,d))});let m=e(`td`,i);o(i,m);let h=c(`rue:slot:anchor`);o(m,h),s(()=>{let e=t.description;a(()=>p(e,m,h))});let g=e(`td`,i);o(i,g);let _=e(`code`,g);o(g,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>p(e,_,v))});let y=e(`td`,i);o(i,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>p(e,b,x))}),n}),n,i)}})}),i}),j=t=>d(n=>{let r=e(`div`,n);l(r,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.label;a(()=>p(e,r,i))}),r}),M=t=>d(n=>{let r=e(`div`,n);l(r,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.label;a(()=>p(e,r,i))}),r}),N=()=>{let{tabBasic:i,tabScale:g,tabLabel:y,tabBadge:b,tabOverflow:C,tabMotion:w}=h(`useSetup:0:0`,()=>t(()=>({tabBasic:h(`ref:1:0`,()=>n(`preview`)),tabScale:h(`ref:1:1`,()=>n(`preview`)),tabLabel:h(`ref:1:2`,()=>n(`preview`)),tabBadge:h(`ref:1:3`,()=>n(`preview`)),tabOverflow:h(`ref:1:4`,()=>n(`preview`)),tabMotion:h(`ref:1:5`,()=>n(`preview`))})));return d(t=>{let n=r(),h=c(`rue:component:anchor`);return o(n,h),p(m(S,{children:d(()=>{let t=r(),n=e(`div`,t);o(t,n),l(n,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,n);o(n,d),o(d,u(`Status 状态列表`));let h=e(`p`,n);o(n,h),l(h,`text-sm mt-3 mb-3`),o(h,u(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let S=e(`h2`,n);o(n,S),o(S,u(`何时使用`));let T=e(`ul`,n);o(n,T);let E=e(`li`,T);o(T,E),o(E,u(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let D=e(`li`,T);o(T,D),o(D,u(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let N=c(`rue:component:anchor`);o(n,N),s(()=>{let e=m(O,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:i,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-6`,children:[v(x,{as:`span`}),v(x,{status:`processing`,text:`Deploying`}),v(x,{color:`success`,text:`Online`}),v(x,{status:`warning`,text:`Window closing soon`})]})}),code:ee});a(()=>p(e,n,N))});let P=c(`rue:component:anchor`);o(n,P),s(()=>{let e=m(O,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:()=>v(k,{children:_(`div`,{className:`grid gap-5`,children:[_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(x,{ariaLabel:`status`,size:`xs`}),v(x,{ariaLabel:`status`,size:`sm`}),v(x,{ariaLabel:`status`,size:`md`}),v(x,{ariaLabel:`status`,size:`lg`}),v(x,{ariaLabel:`status`,size:`xl`})]}),_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(x,{ariaLabel:`status`,color:`primary`}),v(x,{ariaLabel:`status`,color:`secondary`}),v(x,{ariaLabel:`status`,color:`accent`}),v(x,{ariaLabel:`status`,color:`neutral`}),v(x,{ariaLabel:`info`,color:`info`}),v(x,{ariaLabel:`success`,color:`success`}),v(x,{ariaLabel:`warning`,color:`warning`}),v(x,{ariaLabel:`error`,color:`error`})]})]})}),code:te});a(()=>p(e,n,P))});let F=c(`rue:component:anchor`);o(n,F),s(()=>{let e=m(O,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:y,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col items-start gap-3`,children:[v(x,{status:`success`,text:`Published`}),v(x,{status:`processing`,text:`Syncing data`}),v(x,{dot:!0,status:`processing`,text:`Syncing edge cache`}),v(x,{count:7,color:`#f97316`,text:`待审核`})]})}),code:ne});a(()=>p(e,n,F))});let I=c(`rue:component:anchor`);o(n,I),s(()=>{let e=m(O,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:b,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(x,{dot:!0,color:`success`,children:v(j,{label:`APP`})}),v(x,{dot:!0,color:`warning`,text:`Pending review`,children:v(j,{label:`PR`})}),v(x,{count:5,children:v(j,{label:`Inbox`})}),v(x,{count:12,color:`secondary`,text:`Messages`,children:v(j,{label:`Chat`})})]})}),code:re});a(()=>p(e,n,I))});let L=c(`rue:component:anchor`);o(n,L),s(()=>{let e=m(O,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:C,preview:()=>v(k,{children:_(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(x,{count:0,children:v(j,{label:`Draft`})}),v(x,{count:0,showZero:!0,color:`info`,text:`No unread`,children:v(j,{label:`Mail`})}),v(x,{count:128,overflowCount:99,color:`error`,children:v(j,{label:`Alerts`})})]}),_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(x,{count:8,offset:[8,6],color:`primary`,children:v(M,{label:`Releases`})}),v(x,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:v(M,{label:`Jobs`})})]})]})}),code:ie});a(()=>p(e,n,L))});let R=c(`rue:component:anchor`);o(n,R),s(()=>{let e=m(O,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:w,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col gap-4`,children:[_(`div`,{className:`flex items-center gap-3`,children:[_(`div`,{className:`inline-grid *:[grid-area:1/1]`,children:[v(x,{dot:!0,color:`error`,className:`animate-ping`}),v(x,{dot:!0,color:`error`})]}),v(`span`,{children:`Server is down`})]}),_(`div`,{className:`flex items-center gap-3`,children:[v(x,{color:`info`,className:`animate-bounce`}),v(`span`,{children:`Unread messages`})]})]})}),code:ae});a(()=>p(e,n,R))});let z=e(`h2`,n);o(n,z),f(z,`id`,`status-api`),o(z,u(`API`));let B=e(`p`,n);o(n,B),o(B,u(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=c(`rue:component:anchor`);o(n,V),s(()=>{let e=m(A,{rows:oe});a(()=>p(e,n,V))});let H=e(`div`,n);o(n,H),l(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=e(`div`,H);o(H,U),l(U,`font-semibold`),o(U,u(`模式选择建议`));let W=e(`div`,H);o(H,W),l(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=e(`div`,W);o(W,G),o(G,u(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=e(`div`,W);o(W,K),o(K,u(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let q=e(`h2`,n);o(n,q),o(q,u(`FAQ`));let J=e(`h3`,n);o(n,J),o(J,u(`status 和 color 同时传时谁优先？`));let Y=e(`p`,n);o(n,Y),o(Y,u(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=e(`h3`,n);o(n,X),o(X,u(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=e(`p`,n);o(n,Z),o(Z,u(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=e(`h3`,n);o(n,Q),o(Q,u(`count 为 0 时为什么默认不显示？`));let $=e(`p`,n);return o(n,$),o($,u(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),t})}),n,h),n})};export{N as default};