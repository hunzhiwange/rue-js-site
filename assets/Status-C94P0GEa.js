import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,_t as s,d as c,l,mt as u,ot as d,t as f,ut as p,v as m}from"./vapor-runtime-Dfq7aA8z.js";import{a as h,n as g}from"./vapor-helpers-vapor-CpxsbTjB.js";import{n as _,t as v}from"./src-BaNG2YQR.js";import{n as y}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as b}from"./Code-CLTo4rRM.js";import{t as x}from"./tabs-CxVJfyAw.js";import{t as S}from"./status-CAgbmwA2.js";var C=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],w=`card border border-base-200 bg-base-100 shadow-sm`,T=`card-body gap-4`,E=(e,t)=>t?`${e} ${t}`:e,D=e=>Array.isArray(e)?e:e==null?[]:[e],ee=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,oe=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],O=o=>c(u=>{let d=r(`div`,u);n(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=r(`div`,d);i(d,m),n(m,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,m);i(m,h);let g=r(`h2`,h);i(h,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,a(`# `));let _=e(`rue:slot:anchor`);i(g,_),s(()=>{let e=o.title;p(()=>l(e,g,_))});let v=e(`rue:slot:anchor`);i(h,v),s(()=>{let a=o.summary?c(()=>{let a=t(),c=r(`p`,a);i(a,c),n(c,`m-0 text-sm opacity-70`);let u=e(`rue:slot:anchor`);return i(c,u),s(()=>{let e=o.summary;p(()=>l(e,c,u))}),a}):``;p(()=>l(a,h,v))});let y=e(`rue:component:anchor`);i(d,y),s(()=>{let e=f(x,{style:`box`,items:C,activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});p(()=>l(e,d,y))});let S=e(`rue:slot:anchor`);return i(d,S),s(()=>{let n=o.tab.value===`preview`?o.preview():c(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),s(()=>{let e=f(b,{className:`mt-2`,lang:`tsx`,code:o.code});p(()=>l(e,n,r))}),n});p(()=>l(n,d,S))}),d}),k=e=>m(`div`,{className:E(w,e.className)},m(`div`,{className:T},...D(e.children))),se=u=>c(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=r(`table`,f);i(f,m),n(m,`table table-zebra`);let h=r(`thead`,m);i(m,h);let _=r(`tr`,h);i(h,_);let v=r(`th`,_);i(_,v),i(v,a(`属性`));let y=r(`th`,_);i(_,y),i(y,a(`说明`));let b=r(`th`,_);i(_,b),i(b,a(`类型`));let x=r(`th`,_);i(_,x),i(x,a(`默认值`));let S=r(`tbody`,m);i(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return s(()=>{T=g({items:u.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,u,d,f)=>{l(c(()=>{let a=t(),c=r(`tr`,a);i(a,c),s(()=>{o(c,`key`,String(n.prop))});let u=r(`td`,c);i(c,u);let d=r(`code`,u);i(u,d);let f=e(`rue:slot:anchor`);i(d,f),s(()=>{let e=n.prop;p(()=>l(e,d,f))});let m=r(`td`,c);i(c,m);let h=e(`rue:slot:anchor`);i(m,h),s(()=>{let e=n.description;p(()=>l(e,m,h))});let g=r(`td`,c);i(c,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),s(()=>{let e=n.type;p(()=>l(e,_,v))});let y=r(`td`,c);i(c,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),s(()=>{let e=n.defaultValue;p(()=>l(e,b,x))}),a}),a,u)}})}),f}),A=t=>c(a=>{let o=r(`div`,a);n(o,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let c=e(`rue:slot:anchor`);return i(o,c),s(()=>{let e=t.label;p(()=>l(e,o,c))}),o}),j=t=>c(a=>{let o=r(`div`,a);n(o,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let c=e(`rue:slot:anchor`);return i(o,c),s(()=>{let e=t.label;p(()=>l(e,o,c))}),o}),M=()=>{let{tabBasic:m,tabScale:g,tabLabel:b,tabBadge:x,tabOverflow:C,tabMotion:w}=h(`useSetup:0:0`,()=>u(()=>({tabBasic:h(`ref:1:0`,()=>d(`preview`)),tabScale:h(`ref:1:1`,()=>d(`preview`)),tabLabel:h(`ref:1:2`,()=>d(`preview`)),tabBadge:h(`ref:1:3`,()=>d(`preview`)),tabOverflow:h(`ref:1:4`,()=>d(`preview`)),tabMotion:h(`ref:1:5`,()=>d(`preview`))})));return c(u=>{let d=t(),h=e(`rue:component:anchor`);return i(d,h),l(f(y,{children:c(()=>{let c=t(),u=r(`div`,c);i(c,u),n(u,`max-w-none prose prose-sm md:prose-base`);let d=r(`h1`,u);i(u,d),i(d,a(`Status 状态列表`));let h=r(`p`,u);i(u,h),n(h,`text-sm mt-3 mb-3`),i(h,a(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let y=r(`div`,u);i(u,y),n(y,`text-sm flex flex-wrap gap-4`);let T=r(`a`,y);i(y,T),o(T,`href`,`https://daisyui.com/components/status/`),o(T,`target`,`_blank`),o(T,`rel`,`noreferrer`),i(T,a(`查看 Status 静态样式`));let E=r(`h2`,u);i(u,E),i(E,a(`何时使用`));let D=r(`ul`,u);i(u,D);let M=r(`li`,D);i(D,M),i(M,a(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let N=r(`li`,D);i(D,N),i(N,a(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let P=e(`rue:component:anchor`);i(u,P),s(()=>{let e=f(O,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:m,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-6`,children:[v(S,{as:`span`}),v(S,{status:`processing`,text:`Deploying`}),v(S,{color:`success`,text:`Online`}),v(S,{status:`warning`,text:`Window closing soon`})]})}),code:ee});p(()=>l(e,u,P))});let F=e(`rue:component:anchor`);i(u,F),s(()=>{let e=f(O,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:()=>v(k,{children:_(`div`,{className:`grid gap-5`,children:[_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(S,{ariaLabel:`status`,size:`xs`}),v(S,{ariaLabel:`status`,size:`sm`}),v(S,{ariaLabel:`status`,size:`md`}),v(S,{ariaLabel:`status`,size:`lg`}),v(S,{ariaLabel:`status`,size:`xl`})]}),_(`div`,{className:`flex flex-wrap items-center gap-4`,children:[v(S,{ariaLabel:`status`,color:`primary`}),v(S,{ariaLabel:`status`,color:`secondary`}),v(S,{ariaLabel:`status`,color:`accent`}),v(S,{ariaLabel:`status`,color:`neutral`}),v(S,{ariaLabel:`info`,color:`info`}),v(S,{ariaLabel:`success`,color:`success`}),v(S,{ariaLabel:`warning`,color:`warning`}),v(S,{ariaLabel:`error`,color:`error`})]})]})}),code:te});p(()=>l(e,u,F))});let I=e(`rue:component:anchor`);i(u,I),s(()=>{let e=f(O,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:b,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col items-start gap-3`,children:[v(S,{status:`success`,text:`Published`}),v(S,{status:`processing`,text:`Syncing data`}),v(S,{dot:!0,status:`processing`,text:`Syncing edge cache`}),v(S,{count:7,color:`#f97316`,text:`待审核`})]})}),code:ne});p(()=>l(e,u,I))});let L=e(`rue:component:anchor`);i(u,L),s(()=>{let e=f(O,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:x,preview:()=>v(k,{children:_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(S,{dot:!0,color:`success`,children:v(A,{label:`APP`})}),v(S,{dot:!0,color:`warning`,text:`Pending review`,children:v(A,{label:`PR`})}),v(S,{count:5,children:v(A,{label:`Inbox`})}),v(S,{count:12,color:`secondary`,text:`Messages`,children:v(A,{label:`Chat`})})]})}),code:re});p(()=>l(e,u,L))});let R=e(`rue:component:anchor`);i(u,R),s(()=>{let e=f(O,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:C,preview:()=>v(k,{children:_(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(S,{count:0,children:v(A,{label:`Draft`})}),v(S,{count:0,showZero:!0,color:`info`,text:`No unread`,children:v(A,{label:`Mail`})}),v(S,{count:128,overflowCount:99,color:`error`,children:v(A,{label:`Alerts`})})]}),_(`div`,{className:`flex flex-wrap items-center gap-8`,children:[v(S,{count:8,offset:[8,6],color:`primary`,children:v(j,{label:`Releases`})}),v(S,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:v(j,{label:`Jobs`})})]})]})}),code:ie});p(()=>l(e,u,R))});let z=e(`rue:component:anchor`);i(u,z),s(()=>{let e=f(O,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:w,preview:()=>v(k,{children:_(`div`,{className:`flex flex-col gap-4`,children:[_(`div`,{className:`flex items-center gap-3`,children:[_(`div`,{className:`inline-grid *:[grid-area:1/1]`,children:[v(S,{dot:!0,color:`error`,className:`animate-ping`}),v(S,{dot:!0,color:`error`})]}),v(`span`,{children:`Server is down`})]}),_(`div`,{className:`flex items-center gap-3`,children:[v(S,{color:`info`,className:`animate-bounce`}),v(`span`,{children:`Unread messages`})]})]})}),code:ae});p(()=>l(e,u,z))});let B=r(`h2`,u);i(u,B),o(B,`id`,`status-api`),i(B,a(`API`));let V=r(`p`,u);i(u,V),i(V,a(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let H=e(`rue:component:anchor`);i(u,H),s(()=>{let e=f(se,{rows:oe});p(()=>l(e,u,H))});let U=r(`div`,u);i(u,U),n(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let W=r(`div`,U);i(U,W),n(W,`font-semibold`),i(W,a(`模式选择建议`));let G=r(`div`,U);i(U,G),n(G,`mt-2 grid gap-2 md:grid-cols-2`);let K=r(`div`,G);i(G,K),i(K,a(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let q=r(`div`,G);i(G,q),i(q,a(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let J=r(`h2`,u);i(u,J),i(J,a(`FAQ`));let Y=r(`h3`,u);i(u,Y),i(Y,a(`status 和 color 同时传时谁优先？`));let X=r(`p`,u);i(u,X),i(X,a(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let Z=r(`h3`,u);i(u,Z),i(Z,a(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Q=r(`p`,u);i(u,Q),i(Q,a(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let $=r(`h3`,u);i(u,$),i($,a(`count 为 0 时为什么默认不显示？`));let ce=r(`p`,u);return i(u,ce),i(ce,a(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),c})}),d,h),d})};export{M as default};