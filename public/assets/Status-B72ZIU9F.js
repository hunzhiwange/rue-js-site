import{$ as e,D as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,ot as p,t as m}from"./vapor-runtime-BR_2rwNk.js";import{a as h,n as g}from"./vapor-helpers-vapor-DkadWylb.js";import{i as _,r as v}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as y}from"./tabs-DMHgT-aV.js";import{t as b}from"./status-Co23LJPU.js";import{n as x}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as S}from"./Code-B_4lzH85.js";var C=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],w=`card border border-base-200 bg-base-100 shadow-sm`,T=`card-body gap-4`,E=(e,t)=>t?`${e} ${t}`:e,D=e=>Array.isArray(e)?e:e==null?[]:[e],ee=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,O=`<div className="grid gap-4 lg:grid-cols-2">
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
</div>`,ie=`<div className="flex flex-col gap-4">
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
</div>`,ae=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],k=t=>u(n=>{let r=e(`div`,n);l(r,`component-preview not-prose text-base-content my-6 lg:my-12`);let p=e(`div`,r);o(r,p),l(p,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,p);o(p,h);let g=e(`h2`,h);o(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(g,d(`# `));let _=c(`rue:slot:anchor`);o(g,_),s(()=>{let e=t.title;a(()=>f(e,g,_))});let v=c(`rue:slot:anchor`);o(h,v),s(()=>{let n=t.summary?u(()=>{let n=i(),r=e(`p`,n);o(n,r),l(r,`m-0 text-sm opacity-70`);let u=c(`rue:slot:anchor`);return o(r,u),s(()=>{let e=t.summary;a(()=>f(e,r,u))}),n}):``;a(()=>f(n,h,v))});let b=c(`rue:component:anchor`);o(r,b),s(()=>{let e=m(y,{style:`box`,items:C,activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});a(()=>f(e,r,b))});let x=c(`rue:slot:anchor`);return o(r,x),s(()=>{let e=t.tab.value===`preview`?t.preview():u(()=>{let e=i(),n=c(`rue:component:anchor`);return o(e,n),s(()=>{let r=m(S,{className:`mt-2`,lang:`tsx`,code:t.code});a(()=>f(r,e,n))}),e});a(()=>f(e,r,x))}),r}),A=e=>t(`div`,{className:E(w,e.className)},t(`div`,{className:T},...D(e.children))),oe=t=>u(n=>{let r=e(`div`,n);l(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,r);o(r,m),l(m,`table table-zebra`);let h=e(`thead`,m);o(m,h);let _=e(`tr`,h);o(h,_);let v=e(`th`,_);o(_,v),o(v,d(`属性`));let y=e(`th`,_);o(_,y),o(y,d(`说明`));let b=e(`th`,_);o(_,b),o(b,d(`类型`));let x=e(`th`,_);o(_,x),o(x,d(`默认值`));let S=e(`tbody`,m);o(m,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=g({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,l,d)=>{f(u(()=>{let n=i(),r=e(`tr`,n);o(n,r),s(()=>{p(r,`key`,String(t.prop))});let l=e(`td`,r);o(r,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>f(e,u,d))});let m=e(`td`,r);o(r,m);let h=c(`rue:slot:anchor`);o(m,h),s(()=>{let e=t.description;a(()=>f(e,m,h))});let g=e(`td`,r);o(r,g);let _=e(`code`,g);o(g,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>f(e,_,v))});let y=e(`td`,r);o(r,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>f(e,b,x))}),n}),n,r)}})}),r}),j=t=>u(n=>{let r=e(`div`,n);l(r,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.label;a(()=>f(e,r,i))}),r}),M=t=>u(n=>{let r=e(`div`,n);l(r,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let i=c(`rue:slot:anchor`);return o(r,i),s(()=>{let e=t.label;a(()=>f(e,r,i))}),r}),N=()=>{let{tabBasic:t,tabScale:g,tabLabel:y,tabBadge:S,tabOverflow:C,tabMotion:w}=h(`useSetup:0:0`,()=>n(()=>({tabBasic:h(`ref:1:0`,()=>r(`preview`)),tabScale:h(`ref:1:1`,()=>r(`preview`)),tabLabel:h(`ref:1:2`,()=>r(`preview`)),tabBadge:h(`ref:1:3`,()=>r(`preview`)),tabOverflow:h(`ref:1:4`,()=>r(`preview`)),tabMotion:h(`ref:1:5`,()=>r(`preview`))})));return u(n=>{let r=i(),h=c(`rue:component:anchor`);return o(r,h),f(m(x,{children:u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,r);o(r,u),o(u,d(`Status 状态列表`));let h=e(`p`,r);o(r,h),l(h,`text-sm mt-3 mb-3`),o(h,d(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let x=e(`h2`,r);o(r,x),o(x,d(`何时使用`));let T=e(`ul`,r);o(r,T);let E=e(`li`,T);o(T,E),o(E,d(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let D=e(`li`,T);o(T,D),o(D,d(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let N=c(`rue:component:anchor`);o(r,N),s(()=>{let e=m(k,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:t,preview:()=>v(A,{children:_(`div`,{className:`flex flex-wrap items-center gap-6`,children:[v(b,{as:`span`}),v(b,{status:`processing`,text:`Deploying`}),v(b,{color:`success`,text:`Online`}),v(b,{status:`warning`,text:`Window closing soon`})]})}),code:ee});a(()=>f(e,r,N))});let P=c(`rue:component:anchor`);o(r,P),s(()=>{let e=m(k,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:()=>v(A,{children:_(`div`,{className:`grid gap-5`,children:[_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(b,{ariaLabel:`status`,size:`xs`}),v(b,{ariaLabel:`status`,size:`sm`}),v(b,{ariaLabel:`status`,size:`md`}),v(b,{ariaLabel:`status`,size:`lg`}),v(b,{ariaLabel:`status`,size:`xl`})]}),_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(b,{ariaLabel:`status`,color:`primary`}),v(b,{ariaLabel:`status`,color:`secondary`}),v(b,{ariaLabel:`status`,color:`accent`}),v(b,{ariaLabel:`status`,color:`neutral`}),v(b,{ariaLabel:`info`,color:`info`}),v(b,{ariaLabel:`success`,color:`success`}),v(b,{ariaLabel:`warning`,color:`warning`}),v(b,{ariaLabel:`error`,color:`error`})]})]})}),code:te});a(()=>f(e,r,P))});let F=c(`rue:component:anchor`);o(r,F),s(()=>{let e=m(k,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:y,preview:()=>v(A,{children:_(`div`,{className:`flex flex-col items-start gap-3`,children:[v(b,{status:`success`,text:`Published`}),v(b,{status:`processing`,text:`Syncing data`}),v(b,{dot:!0,status:`processing`,text:`Syncing edge cache`}),v(b,{count:7,color:`#f97316`,text:`待审核`})]})}),code:ne});a(()=>f(e,r,F))});let I=c(`rue:component:anchor`);o(r,I),s(()=>{let e=m(k,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:S,preview:()=>v(A,{children:_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(b,{dot:!0,color:`success`,children:v(j,{label:`APP`})}),v(b,{dot:!0,color:`warning`,text:`Pending review`,children:v(j,{label:`PR`})}),v(b,{count:5,children:v(j,{label:`Inbox`})}),v(b,{count:12,color:`secondary`,text:`Messages`,children:v(j,{label:`Chat`})})]})}),code:re});a(()=>f(e,r,I))});let L=c(`rue:component:anchor`);o(r,L),s(()=>{let e=m(k,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:C,preview:()=>v(A,{children:_(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(b,{count:0,children:v(j,{label:`Draft`})}),v(b,{count:0,showZero:!0,color:`info`,text:`No unread`,children:v(j,{label:`Mail`})}),v(b,{count:128,overflowCount:99,color:`error`,children:v(j,{label:`Alerts`})})]}),_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(b,{count:8,offset:[8,6],color:`primary`,children:v(M,{label:`Releases`})}),v(b,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:v(M,{label:`Jobs`})})]})]})}),code:O});a(()=>f(e,r,L))});let R=c(`rue:component:anchor`);o(r,R),s(()=>{let e=m(k,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:w,preview:()=>v(A,{children:_(`div`,{className:`flex flex-col gap-4`,children:[_(`div`,{className:`flex items-center gap-3`,children:[_(`div`,{className:`inline-grid *:[grid-area:1/1]`,children:[v(b,{dot:!0,color:`error`,className:`animate-ping`}),v(b,{dot:!0,color:`error`})]}),v(`span`,{children:`Server is down`})]}),_(`div`,{className:`flex items-center gap-3`,children:[v(b,{color:`info`,className:`animate-bounce`}),v(`span`,{children:`Unread messages`})]})]})}),code:ie});a(()=>f(e,r,R))});let z=e(`h2`,r);o(r,z),p(z,`id`,`status-api`),o(z,d(`API`));let B=e(`p`,r);o(r,B),o(B,d(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=c(`rue:component:anchor`);o(r,V),s(()=>{let e=m(oe,{rows:ae});a(()=>f(e,r,V))});let H=e(`div`,r);o(r,H),l(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=e(`div`,H);o(H,U),l(U,`font-semibold`),o(U,d(`模式选择建议`));let W=e(`div`,H);o(H,W),l(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=e(`div`,W);o(W,G),o(G,d(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=e(`div`,W);o(W,K),o(K,d(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let q=e(`h2`,r);o(r,q),o(q,d(`FAQ`));let J=e(`h3`,r);o(r,J),o(J,d(`status 和 color 同时传时谁优先？`));let Y=e(`p`,r);o(r,Y),o(Y,d(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=e(`h3`,r);o(r,X),o(X,d(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=e(`p`,r);o(r,Z),o(Z,d(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=e(`h3`,r);o(r,Q),o(Q,d(`count 为 0 时为什么默认不显示？`));let $=e(`p`,r);return o(r,$),o($,d(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),n})}),r,h),r})};export{N as default};