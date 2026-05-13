import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_ as s,_t as c,bt as l,c as u,lt as d,pt as f,t as p,u as m}from"./vapor-runtime-D3a-68js.js";import{a as h,n as g}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as _,t as v}from"./src-BfQKH6_d.js";import{n as y}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as b}from"./Code-2C2psoH3.js";import{t as x}from"./tabs-BgQmsOey.js";import{t as S}from"./status-BBBMnEaD.js";var C=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],w=`card border border-base-200 bg-base-100 shadow-sm`,T=`card-body gap-4`,E=(e,t)=>t?`${e} ${t}`:e,D=e=>Array.isArray(e)?e:e==null?[]:[e],ee=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,oe=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],O=o=>m(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let d=n(`div`);i(c,d);let h=n(`h2`);i(d,h),t(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(h,r(`# `));let g=a(`rue:slot:anchor`);i(h,g),l(()=>{let e=o.title;f(()=>u(e,h,g))});let _=a(`rue:slot:anchor`);i(d,_),l(()=>{let r=o.summary?m(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),l(()=>{let e=o.summary;f(()=>u(e,s,c))}),r}):``;f(()=>u(r,d,_))});let v=a(`rue:component:anchor`);i(s,v),l(()=>{let e=p(x,{style:`box`,items:C,activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});f(()=>u(e,s,v))});let y=a(`rue:slot:anchor`);return i(s,y),l(()=>{let t=o.tab.value===`preview`?o.preview():m(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),l(()=>{let e=p(b,{className:`mt-2`,lang:`tsx`,code:o.code});f(()=>u(e,t,n))}),t});f(()=>u(t,s,y))}),s}),k=e=>s(`div`,{className:E(w,e.className)},s(`div`,{className:T},...D(e.children))),se=s=>m(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=n(`table`);i(c,d),t(d,`table table-zebra`);let p=n(`thead`);i(d,p);let h=n(`tr`);i(p,h);let _=n(`th`);i(h,_),i(_,r(`属性`));let v=n(`th`);i(h,v),i(v,r(`说明`));let y=n(`th`);i(h,y),i(y,r(`类型`));let b=n(`th`);i(h,b),i(b,r(`默认值`));let x=n(`tbody`);i(d,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return l(()=>{w=g({items:s.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,s,c,d)=>{u(m(()=>{let r=e(),s=n(`tr`);i(r,s),l(()=>{o(s,`key`,String(t.prop))});let c=n(`td`);i(s,c);let d=n(`code`);i(c,d);let p=a(`rue:slot:anchor`);i(d,p),l(()=>{let e=t.prop;f(()=>u(e,d,p))});let m=n(`td`);i(s,m);let h=a(`rue:slot:anchor`);i(m,h),l(()=>{let e=t.description;f(()=>u(e,m,h))});let g=n(`td`);i(s,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),l(()=>{let e=t.type;f(()=>u(e,_,v))});let y=n(`td`);i(s,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),l(()=>{let e=t.defaultValue;f(()=>u(e,b,x))}),r}),r,s)}})}),c}),A=e=>m(()=>{let r=n(`div`);t(r,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let o=a(`rue:slot:anchor`);return i(r,o),l(()=>{let t=e.label;f(()=>u(t,r,o))}),r}),j=e=>m(()=>{let r=n(`div`);t(r,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let o=a(`rue:slot:anchor`);return i(r,o),l(()=>{let t=e.label;f(()=>u(t,r,o))}),r}),M=()=>{let{tabBasic:s,tabScale:g,tabLabel:b,tabBadge:x,tabOverflow:C,tabMotion:w}=h(`useSetup:0:0`,()=>c(()=>({tabBasic:h(`ref:1:0`,()=>d(`preview`)),tabScale:h(`ref:1:1`,()=>d(`preview`)),tabLabel:h(`ref:1:2`,()=>d(`preview`)),tabBadge:h(`ref:1:3`,()=>d(`preview`)),tabOverflow:h(`ref:1:4`,()=>d(`preview`)),tabMotion:h(`ref:1:5`,()=>d(`preview`))})));return m(()=>{let c=e(),d=a(`rue:component:anchor`);return i(c,d),u(p(y,{children:m(()=>{let c=e(),d=n(`div`);i(c,d),t(d,`max-w-none prose prose-sm md:prose-base`);let m=n(`h1`);i(d,m),i(m,r(`Status 状态列表`));let h=n(`p`);i(d,h),t(h,`text-sm mt-3 mb-3`),i(h,r(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let y=n(`div`);i(d,y),t(y,`text-sm flex flex-wrap gap-4`);let T=n(`a`);i(y,T),o(T,`href`,`https://daisyui.com/components/status/`),o(T,`target`,`_blank`),o(T,`rel`,`noreferrer`),i(T,r(`查看 Status 静态样式`));let E=n(`h2`);i(d,E),i(E,r(`何时使用`));let D=n(`ul`);i(d,D);let M=n(`li`);i(D,M),i(M,r(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let N=n(`li`);i(D,N),i(N,r(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let P=a(`rue:component:anchor`);i(d,P),l(()=>{let e=p(O,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:s,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-6`,children:[v(S,{as:`span`}),v(S,{status:`processing`,text:`Deploying`}),v(S,{color:`success`,text:`Online`}),v(S,{status:`warning`,text:`Window closing soon`})]})}),code:ee});f(()=>u(e,d,P))});let F=a(`rue:component:anchor`);i(d,F),l(()=>{let e=p(O,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:()=>v(k,{children:_(`div`,{className:`grid gap-5`,children:[_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(S,{ariaLabel:`status`,size:`xs`}),v(S,{ariaLabel:`status`,size:`sm`}),v(S,{ariaLabel:`status`,size:`md`}),v(S,{ariaLabel:`status`,size:`lg`}),v(S,{ariaLabel:`status`,size:`xl`})]}),_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(S,{ariaLabel:`status`,color:`primary`}),v(S,{ariaLabel:`status`,color:`secondary`}),v(S,{ariaLabel:`status`,color:`accent`}),v(S,{ariaLabel:`status`,color:`neutral`}),v(S,{ariaLabel:`info`,color:`info`}),v(S,{ariaLabel:`success`,color:`success`}),v(S,{ariaLabel:`warning`,color:`warning`}),v(S,{ariaLabel:`error`,color:`error`})]})]})}),code:te});f(()=>u(e,d,F))});let I=a(`rue:component:anchor`);i(d,I),l(()=>{let e=p(O,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:b,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col items-start gap-3`,children:[v(S,{status:`success`,text:`Published`}),v(S,{status:`processing`,text:`Syncing data`}),v(S,{dot:!0,status:`processing`,text:`Syncing edge cache`}),v(S,{count:7,color:`#f97316`,text:`待审核`})]})}),code:ne});f(()=>u(e,d,I))});let L=a(`rue:component:anchor`);i(d,L),l(()=>{let e=p(O,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:x,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(S,{dot:!0,color:`success`,children:v(A,{label:`APP`})}),v(S,{dot:!0,color:`warning`,text:`Pending review`,children:v(A,{label:`PR`})}),v(S,{count:5,children:v(A,{label:`Inbox`})}),v(S,{count:12,color:`secondary`,text:`Messages`,children:v(A,{label:`Chat`})})]})}),code:re});f(()=>u(e,d,L))});let R=a(`rue:component:anchor`);i(d,R),l(()=>{let e=p(O,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:C,preview:()=>v(k,{children:_(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(S,{count:0,children:v(A,{label:`Draft`})}),v(S,{count:0,showZero:!0,color:`info`,text:`No unread`,children:v(A,{label:`Mail`})}),v(S,{count:128,overflowCount:99,color:`error`,children:v(A,{label:`Alerts`})})]}),_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(S,{count:8,offset:[8,6],color:`primary`,children:v(j,{label:`Releases`})}),v(S,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:v(j,{label:`Jobs`})})]})]})}),code:ie});f(()=>u(e,d,R))});let z=a(`rue:component:anchor`);i(d,z),l(()=>{let e=p(O,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:w,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col gap-4`,children:[_(`div`,{className:`flex items-center gap-3`,children:[_(`div`,{className:`inline-grid *:[grid-area:1/1]`,children:[v(S,{dot:!0,color:`error`,className:`animate-ping`}),v(S,{dot:!0,color:`error`})]}),v(`span`,{children:`Server is down`})]}),_(`div`,{className:`flex items-center gap-3`,children:[v(S,{color:`info`,className:`animate-bounce`}),v(`span`,{children:`Unread messages`})]})]})}),code:ae});f(()=>u(e,d,z))});let B=n(`h2`);i(d,B),o(B,`id`,`status-api`),i(B,r(`API`));let V=n(`p`);i(d,V),i(V,r(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let H=a(`rue:component:anchor`);i(d,H),l(()=>{let e=p(se,{rows:oe});f(()=>u(e,d,H))});let U=n(`div`);i(d,U),t(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let W=n(`div`);i(U,W),t(W,`font-semibold`),i(W,r(`模式选择建议`));let G=n(`div`);i(U,G),t(G,`mt-2 grid gap-2 md:grid-cols-2`);let K=n(`div`);i(G,K),i(K,r(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let q=n(`div`);i(G,q),i(q,r(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let J=n(`h2`);i(d,J),i(J,r(`FAQ`));let Y=n(`h3`);i(d,Y),i(Y,r(`status 和 color 同时传时谁优先？`));let X=n(`p`);i(d,X),i(X,r(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let Z=n(`h3`);i(d,Z),i(Z,r(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Q=n(`p`);i(d,Q),i(Q,r(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let $=n(`h3`);i(d,$),i($,r(`count 为 0 时为什么默认不显示？`));let ce=n(`p`);return i(d,ce),i(ce,r(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),c})}),c,d),c})};export{M as default};