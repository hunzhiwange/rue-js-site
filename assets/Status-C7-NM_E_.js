import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,_ as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-CKndxKFn.js";import{a as g,n as _}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as v,t as y}from"./src-CqIWk1va.js";import{n as b}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as x}from"./Code-B1JFTu6m.js";import{t as S}from"./tabs-BbiCzXqJ.js";import{t as C}from"./status-ByDkS2UV.js";var w=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],T=`card border border-base-200 bg-base-100 shadow-sm`,E=`card-body gap-4`,D=(e,t)=>t?`${e} ${t}`:e,O=e=>Array.isArray(e)?e:e==null?[]:[e],ee=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,oe=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],k=({title:t,summary:c,tab:f,preview:h,code:g})=>m(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let C=r(b);u(b,C),d(()=>{s(C,t)});let T=i(`rue:slot:anchor`);u(y,T),d(()=>{l(c?m(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),d(()=>{s(i,c)}),t}):``,y,T)});let E=i(`rue:component:anchor`);u(_,E),d(()=>{l(p(S,{style:`box`,items:w,activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,E)});let D=i(`rue:slot:anchor`);return u(_,D),d(()=>{l(f.value===`preview`?h():m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{l(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,D)}),_}),A=({className:e,children:t})=>c(`div`,{className:D(T,e)},c(`div`,{className:E},...O(t))),se=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=e(`table`);u(s,c),o(c,`table table-zebra`);let f=e(`thead`);u(c,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(c,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,c)=>{l(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let c=e(`code`);u(s,c);let f=i(`rue:slot:anchor`);u(c,f),d(()=>{let e=n.prop;l(e,c,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;l(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;l(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;l(e,y,b)}),r}),r,o)}})}),s}),j=({label:t})=>m(()=>{let n=e(`div`);o(n,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let r=i(`rue:slot:anchor`);return u(n,r),d(()=>{l(t,n,r)}),n}),M=({label:t})=>m(()=>{let n=e(`div`);o(n,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let r=i(`rue:slot:anchor`);return u(n,r),d(()=>{l(t,n,r)}),n}),N=()=>{let{tabBasic:r,tabScale:s,tabLabel:c,tabBadge:_,tabOverflow:x,tabMotion:S}=g(`useSetup:0:0`,()=>h(()=>({tabBasic:g(`ref:1:0`,()=>f(`preview`)),tabScale:g(`ref:1:1`,()=>f(`preview`)),tabLabel:g(`ref:1:2`,()=>f(`preview`)),tabBadge:g(`ref:1:3`,()=>f(`preview`)),tabOverflow:g(`ref:1:4`,()=>f(`preview`)),tabMotion:g(`ref:1:5`,()=>f(`preview`))})));return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),l(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Status 状态列表`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let b=e(`div`);u(m,b),o(b,`text-sm flex flex-wrap gap-4`);let w=e(`a`);u(b,w),t(w,`href`,`https://daisyui.com/components/status/`),t(w,`target`,`_blank`),t(w,`rel`,`noreferrer`),u(w,n(`查看 Status 静态样式`));let T=e(`h2`);u(m,T),u(T,n(`何时使用`));let E=e(`ul`);u(m,E);let D=e(`li`);u(E,D),u(D,n(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let O=e(`li`);u(E,O),u(O,n(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let N=i(`rue:component:anchor`);u(m,N),d(()=>{l(p(k,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:r,preview:()=>y(A,{children:v(`div`,{className:`flex flex-wrap items-center gap-6`,children:[y(C,{as:`span`}),y(C,{status:`processing`,text:`Deploying`}),y(C,{color:`success`,text:`Online`}),y(C,{status:`warning`,text:`Window closing soon`})]})}),code:ee}),m,N)});let P=i(`rue:component:anchor`);u(m,P),d(()=>{l(p(k,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:s,preview:()=>y(A,{children:v(`div`,{className:`grid gap-5`,children:[v(`div`,{className:`flex flex-wrap items-center gap-4`,children:[y(C,{ariaLabel:`status`,size:`xs`}),y(C,{ariaLabel:`status`,size:`sm`}),y(C,{ariaLabel:`status`,size:`md`}),y(C,{ariaLabel:`status`,size:`lg`}),y(C,{ariaLabel:`status`,size:`xl`})]}),v(`div`,{className:`flex flex-wrap items-center gap-4`,children:[y(C,{ariaLabel:`status`,color:`primary`}),y(C,{ariaLabel:`status`,color:`secondary`}),y(C,{ariaLabel:`status`,color:`accent`}),y(C,{ariaLabel:`status`,color:`neutral`}),y(C,{ariaLabel:`info`,color:`info`}),y(C,{ariaLabel:`success`,color:`success`}),y(C,{ariaLabel:`warning`,color:`warning`}),y(C,{ariaLabel:`error`,color:`error`})]})]})}),code:te}),m,P)});let F=i(`rue:component:anchor`);u(m,F),d(()=>{l(p(k,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:c,preview:()=>y(A,{children:v(`div`,{className:`flex flex-col items-start gap-3`,children:[y(C,{status:`success`,text:`Published`}),y(C,{status:`processing`,text:`Syncing data`}),y(C,{dot:!0,status:`processing`,text:`Syncing edge cache`}),y(C,{count:7,color:`#f97316`,text:`待审核`})]})}),code:ne}),m,F)});let I=i(`rue:component:anchor`);u(m,I),d(()=>{l(p(k,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:_,preview:()=>y(A,{children:v(`div`,{className:`flex flex-wrap items-center gap-8`,children:[y(C,{dot:!0,color:`success`,children:y(j,{label:`APP`})}),y(C,{dot:!0,color:`warning`,text:`Pending review`,children:y(j,{label:`PR`})}),y(C,{count:5,children:y(j,{label:`Inbox`})}),y(C,{count:12,color:`secondary`,text:`Messages`,children:y(j,{label:`Chat`})})]})}),code:re}),m,I)});let L=i(`rue:component:anchor`);u(m,L),d(()=>{l(p(k,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:x,preview:()=>y(A,{children:v(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[v(`div`,{className:`flex flex-wrap items-center gap-8`,children:[y(C,{count:0,children:y(j,{label:`Draft`})}),y(C,{count:0,showZero:!0,color:`info`,text:`No unread`,children:y(j,{label:`Mail`})}),y(C,{count:128,overflowCount:99,color:`error`,children:y(j,{label:`Alerts`})})]}),v(`div`,{className:`flex flex-wrap items-center gap-8`,children:[y(C,{count:8,offset:[8,6],color:`primary`,children:y(M,{label:`Releases`})}),y(C,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:y(M,{label:`Jobs`})})]})]})}),code:ie}),m,L)});let R=i(`rue:component:anchor`);u(m,R),d(()=>{l(p(k,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:S,preview:()=>y(A,{children:v(`div`,{className:`flex flex-col gap-4`,children:[v(`div`,{className:`flex items-center gap-3`,children:[v(`div`,{className:`inline-grid *:[grid-area:1/1]`,children:[y(C,{dot:!0,color:`error`,className:`animate-ping`}),y(C,{dot:!0,color:`error`})]}),y(`span`,{children:`Server is down`})]}),v(`div`,{className:`flex items-center gap-3`,children:[y(C,{color:`info`,className:`animate-bounce`}),y(`span`,{children:`Unread messages`})]})]})}),code:ae}),m,R)});let z=e(`h2`);u(m,z),t(z,`id`,`status-api`),u(z,n(`API`));let B=e(`p`);u(m,B),u(B,n(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=i(`rue:component:anchor`);u(m,V),d(()=>{l(p(se,{rows:oe}),m,V)});let H=e(`div`);u(m,H),o(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=e(`div`);u(H,U),o(U,`font-semibold`),u(U,n(`模式选择建议`));let W=e(`div`);u(H,W),o(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=e(`div`);u(W,G),u(G,n(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=e(`div`);u(W,K),u(K,n(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let q=e(`h2`);u(m,q),u(q,n(`FAQ`));let J=e(`h3`);u(m,J),u(J,n(`status 和 color 同时传时谁优先？`));let Y=e(`p`);u(m,Y),u(Y,n(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=e(`h3`);u(m,X),u(X,n(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=e(`p`);u(m,Z),u(Z,n(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=e(`h3`);u(m,Q),u(Q,n(`count 为 0 时为什么默认不显示？`));let $=e(`p`);return u(m,$),u($,n(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),f})}),f,h),f})};export{N as default};