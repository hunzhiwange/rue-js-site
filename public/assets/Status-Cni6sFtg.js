import{$ as e,Et as t,G as n,H as r,K as i,T as a,W as o,_t as s,d as c,kt as l,l as u,q as d,t as f,tt as p,xt as m}from"./vapor-runtime-BAZOdMd8.js";import{a as h,n as g}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as _,t as v}from"./src-DZJ4J6sD.js";import{n as y}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as b}from"./Code-DY4Ua5uc.js";import{t as x}from"./tabs-Casd077O.js";import{t as S}from"./status-77UK-Q6y.js";var C=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],w=`card border border-base-200 bg-base-100 shadow-sm`,T=`card-body gap-4`,E=(e,t)=>t?`${e} ${t}`:e,D=e=>Array.isArray(e)?e:e==null?[]:[e],ee=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,oe=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],O=e=>c(t=>{let a=i(`div`,t);p(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=i(`div`,a);r(a,s),p(s,`flex flex-wrap items-start justify-between gap-3`);let h=i(`div`,s);r(s,h);let g=i(`h2`,h);r(h,g),p(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;m(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(h,v),l(()=>{let t=e.summary?c(()=>{let t=n(),a=i(`p`,t);r(t,a),p(a,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(a,s),l(()=>{let t=e.summary;m(()=>u(t,a,s))}),t}):``;m(()=>u(t,h,v))});let y=o(`rue:component:anchor`);r(a,y),l(()=>{let t=f(x,{style:`box`,items:C,activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});m(()=>u(t,a,y))});let S=o(`rue:slot:anchor`);return r(a,S),l(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=f(b,{className:`mt-2`,lang:`tsx`,code:e.code});m(()=>u(n,t,i))}),t});m(()=>u(t,a,S))}),a}),k=e=>a(`div`,{className:E(w,e.className)},a(`div`,{className:T},...D(e.children))),A=t=>c(a=>{let s=i(`div`,a);p(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,s);r(s,f),p(f,`table table-zebra`);let h=i(`thead`,f);r(f,h);let _=i(`tr`,h);r(h,_);let v=i(`th`,_);r(_,v),r(v,d(`属性`));let y=i(`th`,_);r(_,y),r(y,d(`说明`));let b=i(`th`,_);r(_,b),r(b,d(`类型`));let x=i(`th`,_);r(_,x),r(x,d(`默认值`));let S=i(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=g({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,a,s,d,f)=>{u(c(()=>{let a=n(),s=i(`tr`,a);r(a,s),l(()=>{e(s,`key`,String(t.prop))});let c=i(`td`,s);r(s,c);let d=i(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;m(()=>u(e,d,f))});let p=i(`td`,s);r(s,p);let h=o(`rue:slot:anchor`);r(p,h),l(()=>{let e=t.description;m(()=>u(e,p,h))});let g=i(`td`,s);r(s,g);let _=i(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;m(()=>u(e,_,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;m(()=>u(e,b,x))}),a}),a,s)}})}),s}),j=e=>c(t=>{let n=i(`div`,t);p(n,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let a=o(`rue:slot:anchor`);return r(n,a),l(()=>{let t=e.label;m(()=>u(t,n,a))}),n}),M=e=>c(t=>{let n=i(`div`,t);p(n,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let a=o(`rue:slot:anchor`);return r(n,a),l(()=>{let t=e.label;m(()=>u(t,n,a))}),n}),N=()=>{let{tabBasic:a,tabScale:g,tabLabel:b,tabBadge:x,tabOverflow:C,tabMotion:w}=h(`useSetup:0:0`,()=>t(()=>({tabBasic:h(`ref:1:0`,()=>s(`preview`)),tabScale:h(`ref:1:1`,()=>s(`preview`)),tabLabel:h(`ref:1:2`,()=>s(`preview`)),tabBadge:h(`ref:1:3`,()=>s(`preview`)),tabOverflow:h(`ref:1:4`,()=>s(`preview`)),tabMotion:h(`ref:1:5`,()=>s(`preview`))})));return c(t=>{let s=n(),h=o(`rue:component:anchor`);return r(s,h),u(f(y,{children:c(()=>{let t=n(),s=i(`div`,t);r(t,s),p(s,`max-w-none prose prose-sm md:prose-base`);let c=i(`h1`,s);r(s,c),r(c,d(`Status 状态列表`));let h=i(`p`,s);r(s,h),p(h,`text-sm mt-3 mb-3`),r(h,d(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let y=i(`h2`,s);r(s,y),r(y,d(`何时使用`));let T=i(`ul`,s);r(s,T);let E=i(`li`,T);r(T,E),r(E,d(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let D=i(`li`,T);r(T,D),r(D,d(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let N=o(`rue:component:anchor`);r(s,N),l(()=>{let e=f(O,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:a,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-6`,children:[v(S,{as:`span`}),v(S,{status:`processing`,text:`Deploying`}),v(S,{color:`success`,text:`Online`}),v(S,{status:`warning`,text:`Window closing soon`})]})}),code:ee});m(()=>u(e,s,N))});let P=o(`rue:component:anchor`);r(s,P),l(()=>{let e=f(O,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:()=>v(k,{children:_(`div`,{className:`grid gap-5`,children:[_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(S,{ariaLabel:`status`,size:`xs`}),v(S,{ariaLabel:`status`,size:`sm`}),v(S,{ariaLabel:`status`,size:`md`}),v(S,{ariaLabel:`status`,size:`lg`}),v(S,{ariaLabel:`status`,size:`xl`})]}),_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(S,{ariaLabel:`status`,color:`primary`}),v(S,{ariaLabel:`status`,color:`secondary`}),v(S,{ariaLabel:`status`,color:`accent`}),v(S,{ariaLabel:`status`,color:`neutral`}),v(S,{ariaLabel:`info`,color:`info`}),v(S,{ariaLabel:`success`,color:`success`}),v(S,{ariaLabel:`warning`,color:`warning`}),v(S,{ariaLabel:`error`,color:`error`})]})]})}),code:te});m(()=>u(e,s,P))});let F=o(`rue:component:anchor`);r(s,F),l(()=>{let e=f(O,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:b,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col items-start gap-3`,children:[v(S,{status:`success`,text:`Published`}),v(S,{status:`processing`,text:`Syncing data`}),v(S,{dot:!0,status:`processing`,text:`Syncing edge cache`}),v(S,{count:7,color:`#f97316`,text:`待审核`})]})}),code:ne});m(()=>u(e,s,F))});let I=o(`rue:component:anchor`);r(s,I),l(()=>{let e=f(O,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:x,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(S,{dot:!0,color:`success`,children:v(j,{label:`APP`})}),v(S,{dot:!0,color:`warning`,text:`Pending review`,children:v(j,{label:`PR`})}),v(S,{count:5,children:v(j,{label:`Inbox`})}),v(S,{count:12,color:`secondary`,text:`Messages`,children:v(j,{label:`Chat`})})]})}),code:re});m(()=>u(e,s,I))});let L=o(`rue:component:anchor`);r(s,L),l(()=>{let e=f(O,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:C,preview:()=>v(k,{children:_(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(S,{count:0,children:v(j,{label:`Draft`})}),v(S,{count:0,showZero:!0,color:`info`,text:`No unread`,children:v(j,{label:`Mail`})}),v(S,{count:128,overflowCount:99,color:`error`,children:v(j,{label:`Alerts`})})]}),_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(S,{count:8,offset:[8,6],color:`primary`,children:v(M,{label:`Releases`})}),v(S,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:v(M,{label:`Jobs`})})]})]})}),code:ie});m(()=>u(e,s,L))});let R=o(`rue:component:anchor`);r(s,R),l(()=>{let e=f(O,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:w,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col gap-4`,children:[_(`div`,{className:`flex items-center gap-3`,children:[_(`div`,{className:`inline-grid *:[grid-area:1/1]`,children:[v(S,{dot:!0,color:`error`,className:`animate-ping`}),v(S,{dot:!0,color:`error`})]}),v(`span`,{children:`Server is down`})]}),_(`div`,{className:`flex items-center gap-3`,children:[v(S,{color:`info`,className:`animate-bounce`}),v(`span`,{children:`Unread messages`})]})]})}),code:ae});m(()=>u(e,s,R))});let z=i(`h2`,s);r(s,z),e(z,`id`,`status-api`),r(z,d(`API`));let B=i(`p`,s);r(s,B),r(B,d(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=o(`rue:component:anchor`);r(s,V),l(()=>{let e=f(A,{rows:oe});m(()=>u(e,s,V))});let H=i(`div`,s);r(s,H),p(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=i(`div`,H);r(H,U),p(U,`font-semibold`),r(U,d(`模式选择建议`));let W=i(`div`,H);r(H,W),p(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=i(`div`,W);r(W,G),r(G,d(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=i(`div`,W);r(W,K),r(K,d(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let q=i(`h2`,s);r(s,q),r(q,d(`FAQ`));let J=i(`h3`,s);r(s,J),r(J,d(`status 和 color 同时传时谁优先？`));let Y=i(`p`,s);r(s,Y),r(Y,d(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=i(`h3`,s);r(s,X),r(X,d(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=i(`p`,s);r(s,Z),r(Z,d(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=i(`h3`,s);r(s,Q),r(Q,d(`count 为 0 时为什么默认不显示？`));let $=i(`p`,s);return r(s,$),r($,d(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),t})}),s,h),s})};export{N as default};