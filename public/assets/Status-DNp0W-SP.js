import{$ as e,Ht as t,Q as n,Rt as r,S as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,ot as d,qt as f,s as p,t as m}from"./vapor-runtime-aZAg0Qkw.js";import{a as h,n as g}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as _,i as v}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as y}from"./Code-5DOEyGxf.js";import{t as b}from"./tabs-CWmjyn0I.js";import{t as x}from"./status-7CWF4yBA.js";import{r as S}from"./SidebarPlaygroundDesign-CS11MI8e.js";var C=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],w=`card border border-base-200 bg-base-100 shadow-sm`,T=`card-body gap-4`,E=(e,t)=>t?`${e} ${t}`:e,D=e=>Array.isArray(e)?e:e==null?[]:[e],ee=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,oe=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],O=r=>u(i=>{let d=e(`div`,i);c(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);o(d,f),c(f,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,f);o(f,h);let g=e(`h2`,h);o(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(g,l(`# `));let _=s(`rue:slot:anchor`);o(g,_),a(()=>{let e=r.title;t(()=>p(e,g,_))});let v=s(`rue:slot:anchor`);o(h,v),a(()=>{let i=r.summary?u(()=>{let i=n(),l=e(`p`,i);o(i,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return o(l,u),a(()=>{let e=r.summary;t(()=>p(e,l,u))}),i}):``;t(()=>p(i,h,v))});let x=s(`rue:component:anchor`);o(d,x),a(()=>{let e=m(b,{style:`box`,items:C,activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>p(e,d,x))});let S=s(`rue:slot:anchor`);return o(d,S),a(()=>{let e=r.tab.value===`preview`?r.preview():u(()=>{let e=n(),i=s(`rue:component:anchor`);return o(e,i),a(()=>{let n=m(y,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>p(n,e,i))}),e});t(()=>p(e,d,S))}),d}),k=e=>i(`div`,{className:E(w,e.className)},i(`div`,{className:T},...D(e.children))),A=r=>u(i=>{let f=e(`div`,i);c(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,f);o(f,m),c(m,`table table-zebra`);let h=e(`thead`,m);o(m,h);let _=e(`tr`,h);o(h,_);let v=e(`th`,_);o(_,v),o(v,l(`属性`));let y=e(`th`,_);o(_,y),o(y,l(`说明`));let b=e(`th`,_);o(_,b),o(b,l(`类型`));let x=e(`th`,_);o(_,x),o(x,l(`默认值`));let S=e(`tbody`,m);o(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return a(()=>{T=g({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,i,c,l,f)=>{p(u(()=>{let i=n(),c=e(`tr`,i);o(i,c),a(()=>{d(c,`key`,String(r.prop))});let l=e(`td`,c);o(c,l);let u=e(`code`,l);o(l,u);let f=s(`rue:slot:anchor`);o(u,f),a(()=>{let e=r.prop;t(()=>p(e,u,f))});let m=e(`td`,c);o(c,m);let h=s(`rue:slot:anchor`);o(m,h),a(()=>{let e=r.description;t(()=>p(e,m,h))});let g=e(`td`,c);o(c,g);let _=e(`code`,g);o(g,_);let v=s(`rue:slot:anchor`);o(_,v),a(()=>{let e=r.type;t(()=>p(e,_,v))});let y=e(`td`,c);o(c,y);let b=e(`code`,y);o(y,b);let x=s(`rue:slot:anchor`);return o(b,x),a(()=>{let e=r.defaultValue;t(()=>p(e,b,x))}),i}),i,c)}})}),f}),j=n=>u(r=>{let i=e(`div`,r);c(i,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let l=s(`rue:slot:anchor`);return o(i,l),a(()=>{let e=n.label;t(()=>p(e,i,l))}),i}),M=n=>u(r=>{let i=e(`div`,r);c(i,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let l=s(`rue:slot:anchor`);return o(i,l),a(()=>{let e=n.label;t(()=>p(e,i,l))}),i}),N=()=>{let{tabBasic:i,tabScale:g,tabLabel:y,tabBadge:b,tabOverflow:C,tabMotion:w}=h(`useSetup:0:0`,()=>f(()=>({tabBasic:h(`ref:1:0`,()=>r(`preview`)),tabScale:h(`ref:1:1`,()=>r(`preview`)),tabLabel:h(`ref:1:2`,()=>r(`preview`)),tabBadge:h(`ref:1:3`,()=>r(`preview`)),tabOverflow:h(`ref:1:4`,()=>r(`preview`)),tabMotion:h(`ref:1:5`,()=>r(`preview`))})));return u(r=>{let f=n(),h=s(`rue:component:anchor`);return o(f,h),p(m(S,{children:u(()=>{let r=n(),u=e(`div`,r);o(r,u),c(u,`max-w-none prose prose-sm md:prose-base`);let f=e(`h1`,u);o(u,f),o(f,l(`Status 状态列表`));let h=e(`p`,u);o(u,h),c(h,`text-sm mt-3 mb-3`),o(h,l(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let S=e(`h2`,u);o(u,S),o(S,l(`何时使用`));let T=e(`ul`,u);o(u,T);let E=e(`li`,T);o(T,E),o(E,l(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let D=e(`li`,T);o(T,D),o(D,l(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let N=s(`rue:component:anchor`);o(u,N),a(()=>{let e=m(O,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:i,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-6`,children:[v(x,{as:`span`}),v(x,{status:`processing`,text:`Deploying`}),v(x,{color:`success`,text:`Online`}),v(x,{status:`warning`,text:`Window closing soon`})]})}),code:ee});t(()=>p(e,u,N))});let P=s(`rue:component:anchor`);o(u,P),a(()=>{let e=m(O,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:()=>v(k,{children:_(`div`,{className:`grid gap-5`,children:[_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(x,{ariaLabel:`status`,size:`xs`}),v(x,{ariaLabel:`status`,size:`sm`}),v(x,{ariaLabel:`status`,size:`md`}),v(x,{ariaLabel:`status`,size:`lg`}),v(x,{ariaLabel:`status`,size:`xl`})]}),_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(x,{ariaLabel:`status`,color:`primary`}),v(x,{ariaLabel:`status`,color:`secondary`}),v(x,{ariaLabel:`status`,color:`accent`}),v(x,{ariaLabel:`status`,color:`neutral`}),v(x,{ariaLabel:`info`,color:`info`}),v(x,{ariaLabel:`success`,color:`success`}),v(x,{ariaLabel:`warning`,color:`warning`}),v(x,{ariaLabel:`error`,color:`error`})]})]})}),code:te});t(()=>p(e,u,P))});let F=s(`rue:component:anchor`);o(u,F),a(()=>{let e=m(O,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:y,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col items-start gap-3`,children:[v(x,{status:`success`,text:`Published`}),v(x,{status:`processing`,text:`Syncing data`}),v(x,{dot:!0,status:`processing`,text:`Syncing edge cache`}),v(x,{count:7,color:`#f97316`,text:`待审核`})]})}),code:ne});t(()=>p(e,u,F))});let I=s(`rue:component:anchor`);o(u,I),a(()=>{let e=m(O,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:b,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(x,{dot:!0,color:`success`,children:v(j,{label:`APP`})}),v(x,{dot:!0,color:`warning`,text:`Pending review`,children:v(j,{label:`PR`})}),v(x,{count:5,children:v(j,{label:`Inbox`})}),v(x,{count:12,color:`secondary`,text:`Messages`,children:v(j,{label:`Chat`})})]})}),code:re});t(()=>p(e,u,I))});let L=s(`rue:component:anchor`);o(u,L),a(()=>{let e=m(O,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:C,preview:()=>v(k,{children:_(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(x,{count:0,children:v(j,{label:`Draft`})}),v(x,{count:0,showZero:!0,color:`info`,text:`No unread`,children:v(j,{label:`Mail`})}),v(x,{count:128,overflowCount:99,color:`error`,children:v(j,{label:`Alerts`})})]}),_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(x,{count:8,offset:[8,6],color:`primary`,children:v(M,{label:`Releases`})}),v(x,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:v(M,{label:`Jobs`})})]})]})}),code:ie});t(()=>p(e,u,L))});let R=s(`rue:component:anchor`);o(u,R),a(()=>{let e=m(O,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:w,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col gap-4`,children:[_(`div`,{className:`flex items-center gap-3`,children:[_(`div`,{className:`inline-grid *:[grid-area:1/1]`,children:[v(x,{dot:!0,color:`error`,className:`animate-ping`}),v(x,{dot:!0,color:`error`})]}),v(`span`,{children:`Server is down`})]}),_(`div`,{className:`flex items-center gap-3`,children:[v(x,{color:`info`,className:`animate-bounce`}),v(`span`,{children:`Unread messages`})]})]})}),code:ae});t(()=>p(e,u,R))});let z=e(`h2`,u);o(u,z),d(z,`id`,`status-api`),o(z,l(`API`));let B=e(`p`,u);o(u,B),o(B,l(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=s(`rue:component:anchor`);o(u,V),a(()=>{let e=m(A,{rows:oe});t(()=>p(e,u,V))});let H=e(`div`,u);o(u,H),c(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=e(`div`,H);o(H,U),c(U,`font-semibold`),o(U,l(`模式选择建议`));let W=e(`div`,H);o(H,W),c(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=e(`div`,W);o(W,G),o(G,l(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=e(`div`,W);o(W,K),o(K,l(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let q=e(`h2`,u);o(u,q),o(q,l(`FAQ`));let J=e(`h3`,u);o(u,J),o(J,l(`status 和 color 同时传时谁优先？`));let Y=e(`p`,u);o(u,Y),o(Y,l(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=e(`h3`,u);o(u,X),o(X,l(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=e(`p`,u);o(u,Z),o(Z,l(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=e(`h3`,u);o(u,Q),o(Q,l(`count 为 0 时为什么默认不显示？`));let $=e(`p`,u);return o(u,$),o($,l(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),r})}),f,h),f})};export{N as default};