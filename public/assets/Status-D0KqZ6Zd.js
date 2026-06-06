import{$ as e,B as t,C as n,Dt as r,G as i,H as a,U as o,W as s,Z as c,ht as l,l as u,s as d,t as f,wt as p,yt as m}from"./vapor-runtime-C1rlwc61.js";import{a as h,n as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./Code-BCLFq1E3.js";import{n as v,t as y}from"./src-BLzF0BqW.js";import{n as b}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as x}from"./tabs-BOxm6iIN.js";import{t as S}from"./status-C1wHFT4N.js";var C=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],w=`card border border-base-200 bg-base-100 shadow-sm`,T=`card-body gap-4`,E=(e,t)=>t?`${e} ${t}`:e,D=e=>Array.isArray(e)?e:e==null?[]:[e],ee=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,oe=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],O=n=>u(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let p=s(`div`,l);t(l,p),e(p,`flex flex-wrap items-start justify-between gap-3`);let h=s(`div`,p);t(p,h);let g=s(`h2`,h);t(h,g),e(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(g,i(`# `));let v=a(`rue:slot:anchor`);t(g,v),r(()=>{let e=n.title;m(()=>d(e,g,v))});let y=a(`rue:slot:anchor`);t(h,y),r(()=>{let i=n.summary?u(()=>{let i=o(),c=s(`p`,i);t(i,c),e(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return t(c,l),r(()=>{let e=n.summary;m(()=>d(e,c,l))}),i}):``;m(()=>d(i,h,y))});let b=a(`rue:component:anchor`);t(l,b),r(()=>{let e=f(x,{style:`box`,items:C,activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});m(()=>d(e,l,b))});let S=a(`rue:slot:anchor`);return t(l,S),r(()=>{let e=n.tab.value===`preview`?n.preview():u(()=>{let e=o(),i=a(`rue:component:anchor`);return t(e,i),r(()=>{let t=f(_,{className:`mt-2`,lang:`tsx`,code:n.code});m(()=>d(t,e,i))}),e});m(()=>d(e,l,S))}),l}),k=e=>n(`div`,{className:E(w,e.className)},n(`div`,{className:T},...D(e.children))),A=n=>u(l=>{let f=s(`div`,l);e(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,f);t(f,p),e(p,`table table-zebra`);let h=s(`thead`,p);t(p,h);let _=s(`tr`,h);t(h,_);let v=s(`th`,_);t(_,v),t(v,i(`属性`));let y=s(`th`,_);t(_,y),t(y,i(`说明`));let b=s(`th`,_);t(_,b),t(b,i(`类型`));let x=s(`th`,_);t(_,x),t(x,i(`默认值`));let S=s(`tbody`,p);t(p,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=g({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,l,f)=>{d(u(()=>{let n=o(),i=s(`tr`,n);t(n,i),r(()=>{c(i,`key`,String(e.prop))});let l=s(`td`,i);t(i,l);let u=s(`code`,l);t(l,u);let f=a(`rue:slot:anchor`);t(u,f),r(()=>{let t=e.prop;m(()=>d(t,u,f))});let p=s(`td`,i);t(i,p);let h=a(`rue:slot:anchor`);t(p,h),r(()=>{let t=e.description;m(()=>d(t,p,h))});let g=s(`td`,i);t(i,g);let _=s(`code`,g);t(g,_);let v=a(`rue:slot:anchor`);t(_,v),r(()=>{let t=e.type;m(()=>d(t,_,v))});let y=s(`td`,i);t(i,y);let b=s(`code`,y);t(y,b);let x=a(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;m(()=>d(t,b,x))}),n}),n,i)}})}),f}),j=n=>u(i=>{let o=s(`div`,i);e(o,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let c=a(`rue:slot:anchor`);return t(o,c),r(()=>{let e=n.label;m(()=>d(e,o,c))}),o}),M=n=>u(i=>{let o=s(`div`,i);e(o,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let c=a(`rue:slot:anchor`);return t(o,c),r(()=>{let e=n.label;m(()=>d(e,o,c))}),o}),N=()=>{let{tabBasic:n,tabScale:g,tabLabel:_,tabBadge:x,tabOverflow:C,tabMotion:w}=h(`useSetup:0:0`,()=>p(()=>({tabBasic:h(`ref:1:0`,()=>l(`preview`)),tabScale:h(`ref:1:1`,()=>l(`preview`)),tabLabel:h(`ref:1:2`,()=>l(`preview`)),tabBadge:h(`ref:1:3`,()=>l(`preview`)),tabOverflow:h(`ref:1:4`,()=>l(`preview`)),tabMotion:h(`ref:1:5`,()=>l(`preview`))})));return u(l=>{let p=o(),h=a(`rue:component:anchor`);return t(p,h),d(f(b,{children:u(()=>{let l=o(),u=s(`div`,l);t(l,u),e(u,`max-w-none prose prose-sm md:prose-base`);let p=s(`h1`,u);t(u,p),t(p,i(`Status 状态列表`));let h=s(`p`,u);t(u,h),e(h,`text-sm mt-3 mb-3`),t(h,i(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let b=s(`h2`,u);t(u,b),t(b,i(`何时使用`));let T=s(`ul`,u);t(u,T);let E=s(`li`,T);t(T,E),t(E,i(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let D=s(`li`,T);t(T,D),t(D,i(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let N=a(`rue:component:anchor`);t(u,N),r(()=>{let e=f(O,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:n,preview:()=>y(k,{children:v(`div`,{className:`flex flex-wrap items-center gap-6`,children:[y(S,{as:`span`}),y(S,{status:`processing`,text:`Deploying`}),y(S,{color:`success`,text:`Online`}),y(S,{status:`warning`,text:`Window closing soon`})]})}),code:ee});m(()=>d(e,u,N))});let P=a(`rue:component:anchor`);t(u,P),r(()=>{let e=f(O,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:()=>y(k,{children:v(`div`,{className:`grid gap-5`,children:[v(`div`,{className:`flex flex-wrap items-center gap-4`,children:[y(S,{ariaLabel:`status`,size:`xs`}),y(S,{ariaLabel:`status`,size:`sm`}),y(S,{ariaLabel:`status`,size:`md`}),y(S,{ariaLabel:`status`,size:`lg`}),y(S,{ariaLabel:`status`,size:`xl`})]}),v(`div`,{className:`flex flex-wrap items-center gap-4`,children:[y(S,{ariaLabel:`status`,color:`primary`}),y(S,{ariaLabel:`status`,color:`secondary`}),y(S,{ariaLabel:`status`,color:`accent`}),y(S,{ariaLabel:`status`,color:`neutral`}),y(S,{ariaLabel:`info`,color:`info`}),y(S,{ariaLabel:`success`,color:`success`}),y(S,{ariaLabel:`warning`,color:`warning`}),y(S,{ariaLabel:`error`,color:`error`})]})]})}),code:te});m(()=>d(e,u,P))});let F=a(`rue:component:anchor`);t(u,F),r(()=>{let e=f(O,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:_,preview:()=>y(k,{children:v(`div`,{className:`flex flex-col items-start gap-3`,children:[y(S,{status:`success`,text:`Published`}),y(S,{status:`processing`,text:`Syncing data`}),y(S,{dot:!0,status:`processing`,text:`Syncing edge cache`}),y(S,{count:7,color:`#f97316`,text:`待审核`})]})}),code:ne});m(()=>d(e,u,F))});let I=a(`rue:component:anchor`);t(u,I),r(()=>{let e=f(O,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:x,preview:()=>y(k,{children:v(`div`,{className:`flex flex-wrap items-center gap-8`,children:[y(S,{dot:!0,color:`success`,children:y(j,{label:`APP`})}),y(S,{dot:!0,color:`warning`,text:`Pending review`,children:y(j,{label:`PR`})}),y(S,{count:5,children:y(j,{label:`Inbox`})}),y(S,{count:12,color:`secondary`,text:`Messages`,children:y(j,{label:`Chat`})})]})}),code:re});m(()=>d(e,u,I))});let L=a(`rue:component:anchor`);t(u,L),r(()=>{let e=f(O,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:C,preview:()=>y(k,{children:v(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[v(`div`,{className:`flex flex-wrap items-center gap-8`,children:[y(S,{count:0,children:y(j,{label:`Draft`})}),y(S,{count:0,showZero:!0,color:`info`,text:`No unread`,children:y(j,{label:`Mail`})}),y(S,{count:128,overflowCount:99,color:`error`,children:y(j,{label:`Alerts`})})]}),v(`div`,{className:`flex flex-wrap items-center gap-8`,children:[y(S,{count:8,offset:[8,6],color:`primary`,children:y(M,{label:`Releases`})}),y(S,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:y(M,{label:`Jobs`})})]})]})}),code:ie});m(()=>d(e,u,L))});let R=a(`rue:component:anchor`);t(u,R),r(()=>{let e=f(O,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:w,preview:()=>y(k,{children:v(`div`,{className:`flex flex-col gap-4`,children:[v(`div`,{className:`flex items-center gap-3`,children:[v(`div`,{className:`inline-grid *:[grid-area:1/1]`,children:[y(S,{dot:!0,color:`error`,className:`animate-ping`}),y(S,{dot:!0,color:`error`})]}),y(`span`,{children:`Server is down`})]}),v(`div`,{className:`flex items-center gap-3`,children:[y(S,{color:`info`,className:`animate-bounce`}),y(`span`,{children:`Unread messages`})]})]})}),code:ae});m(()=>d(e,u,R))});let z=s(`h2`,u);t(u,z),c(z,`id`,`status-api`),t(z,i(`API`));let B=s(`p`,u);t(u,B),t(B,i(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=a(`rue:component:anchor`);t(u,V),r(()=>{let e=f(A,{rows:oe});m(()=>d(e,u,V))});let H=s(`div`,u);t(u,H),e(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=s(`div`,H);t(H,U),e(U,`font-semibold`),t(U,i(`模式选择建议`));let W=s(`div`,H);t(H,W),e(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=s(`div`,W);t(W,G),t(G,i(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=s(`div`,W);t(W,K),t(K,i(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let q=s(`h2`,u);t(u,q),t(q,i(`FAQ`));let J=s(`h3`,u);t(u,J),t(J,i(`status 和 color 同时传时谁优先？`));let Y=s(`p`,u);t(u,Y),t(Y,i(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=s(`h3`,u);t(u,X),t(X,i(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=s(`p`,u);t(u,Z),t(Z,i(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=s(`h3`,u);t(u,Q),t(Q,i(`count 为 0 时为什么默认不显示？`));let $=s(`p`,u);return t(u,$),t($,i(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),l})}),p,h),p})};export{N as default};