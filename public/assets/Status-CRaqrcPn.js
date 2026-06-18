import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,l,qt as u,s as d,st as f,t as p}from"./vapor-runtime-iQZthBPQ.js";import{a as m,n as h}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as g}from"./Code-CZqShVUj.js";import{t as _}from"./tabs-BBuGEPV7.js";import{t as v}from"./status-Cr-LXjqi.js";import{r as y}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var b=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],x=`card border border-base-200 bg-base-100 shadow-sm`,S=`card-body gap-4`,C=(e,t)=>t?`${e} ${t}`:e,w=`<div className="flex flex-wrap items-center gap-6">
  <Status as="span" />
  <Status status="processing" text="Deploying" />
  <Status color="success" text="Online" />
  <Status status="warning" text="Window closing soon" />
</div>`,T=`<div className="flex flex-col gap-4">
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
</div>`,ee=`<div className="flex flex-col items-start gap-3">
  <Status status="success" text="Published" />
  <Status status="processing" text="Syncing data" />
  <Status dot status="processing" text="Syncing edge cache" />
  <Status count={7} color="#f97316" text="待审核" />
</div>`,te=`<div className="flex flex-wrap items-center gap-8">
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
</div>`,E=`<div className="grid gap-4 lg:grid-cols-2">
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
</div>`,ne=`<div className="flex flex-col gap-4">
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
</div>`,re=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],D=r=>l(c=>{let u=i(`div`,c);f(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=i(`div`,u);n(u,m),f(m,`flex flex-wrap items-start justify-between gap-3`);let h=i(`div`,m);n(m,h);let v=i(`h2`,h);n(h,v),f(v,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(v,e(`# `));let y=a(`rue:slot:anchor`);n(v,y),o(()=>{let e=r.title;t(()=>d(e,v,y))});let x=a(`rue:slot:anchor`);n(h,x),o(()=>{let e=r.summary?l(()=>{let e=s(),c=i(`p`,e);n(e,c),f(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>d(e,c,l))}),e}):``;t(()=>d(e,h,x))});let S=a(`rue:component:anchor`);n(u,S),o(()=>{let e=p(_,{style:`box`,items:b,activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>d(e,u,S))});let C=a(`rue:slot:anchor`);return n(u,C),o(()=>{let e=r.tab.value===`preview`?r.preview():l(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=p(g,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>d(n,e,i))}),e});t(()=>d(e,u,C))}),u}),O=e=>l(r=>{let s=i(`div`,r);o(()=>{f(s,C(x,e.className))});let c=i(`div`,s);n(s,c),o(()=>{f(c,S)});let l=a(`rue:children:anchor`);return n(c,l),o(()=>{let n=e.children;t(()=>d(n,c,l))}),s}),ie=r=>l(u=>{let p=i(`div`,u);f(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,p);n(p,m),f(m,`table table-zebra`);let g=i(`thead`,m);n(m,g);let _=i(`tr`,g);n(g,_);let v=i(`th`,_);n(_,v),n(v,e(`属性`));let y=i(`th`,_);n(_,y),n(y,e(`说明`));let b=i(`th`,_);n(_,b),n(b,e(`类型`));let x=i(`th`,_);n(_,x),n(x,e(`默认值`));let S=i(`tbody`,m);n(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=h({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,u,f,p)=>{d(l(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let f=i(`code`,u);n(u,f);let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let n=e.prop;t(()=>d(n,f,p))});let m=i(`td`,l);n(l,m);let h=a(`rue:slot:anchor`);n(m,h),o(()=>{let n=e.description;t(()=>d(n,m,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>d(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>d(n,b,x))}),r}),r,u)}})}),p}),k=e=>l(r=>{let s=i(`div`,r);f(s,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let c=a(`rue:slot:anchor`);return n(s,c),o(()=>{let n=e.label;t(()=>d(n,s,c))}),s}),A=e=>l(r=>{let s=i(`div`,r);f(s,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let c=a(`rue:slot:anchor`);return n(s,c),o(()=>{let n=e.label;t(()=>d(n,s,c))}),s}),ae=()=>l(e=>{let t=s(),r=a(`rue:component:anchor`);return n(t,r),d(p(O,{children:l(()=>{let e=s(),t=i(`div`,e);n(e,t),f(t,`flex flex-wrap items-center gap-6`);let r=a(`rue:component:anchor`);n(t,r),d(p(v,{as:`span`}),t,r);let o=a(`rue:component:anchor`);n(t,o),d(p(v,{status:`processing`,text:`Deploying`}),t,o);let c=a(`rue:component:anchor`);n(t,c),d(p(v,{color:`success`,text:`Online`}),t,c);let l=a(`rue:component:anchor`);return n(t,l),d(p(v,{status:`warning`,text:`Window closing soon`}),t,l),e})}),t,r),t}),j=()=>l(e=>{let t=s(),r=a(`rue:component:anchor`);return n(t,r),d(p(O,{children:l(()=>{let e=s(),t=i(`div`,e);n(e,t),f(t,`grid gap-5`);let r=i(`div`,t);n(t,r),f(r,`flex flex-wrap items-center gap-4`);let o=a(`rue:component:anchor`);n(r,o),d(p(v,{ariaLabel:`status`,size:`xs`}),r,o);let c=a(`rue:component:anchor`);n(r,c),d(p(v,{ariaLabel:`status`,size:`sm`}),r,c);let l=a(`rue:component:anchor`);n(r,l),d(p(v,{ariaLabel:`status`,size:`md`}),r,l);let u=a(`rue:component:anchor`);n(r,u),d(p(v,{ariaLabel:`status`,size:`lg`}),r,u);let m=a(`rue:component:anchor`);n(r,m),d(p(v,{ariaLabel:`status`,size:`xl`}),r,m);let h=i(`div`,t);n(t,h),f(h,`flex flex-wrap items-center gap-4`);let g=a(`rue:component:anchor`);n(h,g),d(p(v,{ariaLabel:`status`,color:`primary`}),h,g);let _=a(`rue:component:anchor`);n(h,_),d(p(v,{ariaLabel:`status`,color:`secondary`}),h,_);let y=a(`rue:component:anchor`);n(h,y),d(p(v,{ariaLabel:`status`,color:`accent`}),h,y);let b=a(`rue:component:anchor`);n(h,b),d(p(v,{ariaLabel:`status`,color:`neutral`}),h,b);let x=a(`rue:component:anchor`);n(h,x),d(p(v,{ariaLabel:`info`,color:`info`}),h,x);let S=a(`rue:component:anchor`);n(h,S),d(p(v,{ariaLabel:`success`,color:`success`}),h,S);let C=a(`rue:component:anchor`);n(h,C),d(p(v,{ariaLabel:`warning`,color:`warning`}),h,C);let w=a(`rue:component:anchor`);return n(h,w),d(p(v,{ariaLabel:`error`,color:`error`}),h,w),e})}),t,r),t}),M=()=>l(e=>{let r=s(),c=a(`rue:component:anchor`);return n(r,c),d(p(O,{children:l(()=>{let e=s(),r=i(`div`,e);n(e,r),f(r,`flex flex-col items-start gap-3`);let c=a(`rue:component:anchor`);n(r,c),d(p(v,{status:`success`,text:`Published`}),r,c);let l=a(`rue:component:anchor`);n(r,l),d(p(v,{status:`processing`,text:`Syncing data`}),r,l);let u=a(`rue:component:anchor`);n(r,u),o(()=>{let e=p(v,{dot:!0,status:`processing`,text:`Syncing edge cache`});t(()=>d(e,r,u))});let m=a(`rue:component:anchor`);return n(r,m),d(p(v,{count:7,color:`#f97316`,text:`待审核`}),r,m),e})}),r,c),r}),N=()=>l(e=>{let r=s(),c=a(`rue:component:anchor`);return n(r,c),d(p(O,{children:l(()=>{let e=s(),r=i(`div`,e);n(e,r),f(r,`flex flex-wrap items-center gap-8`);let c=a(`rue:component:anchor`);n(r,c);let l=p(k,{label:`APP`});o(()=>{let e=p(v,{dot:!0,color:`success`,children:l});t(()=>d(e,r,c))});let u=a(`rue:component:anchor`);n(r,u);let m=p(k,{label:`PR`});o(()=>{let e=p(v,{dot:!0,color:`warning`,text:`Pending review`,children:m});t(()=>d(e,r,u))});let h=a(`rue:component:anchor`);n(r,h),d(p(v,{count:5,children:p(k,{label:`Inbox`})}),r,h);let g=a(`rue:component:anchor`);return n(r,g),d(p(v,{count:12,color:`secondary`,text:`Messages`,children:p(k,{label:`Chat`})}),r,g),e})}),r,c),r}),P=()=>l(e=>{let r=s(),c=a(`rue:component:anchor`);return n(r,c),d(p(O,{children:l(()=>{let e=s(),r=i(`div`,e);n(e,r),f(r,`grid gap-4 lg:grid-cols-2`);let c=i(`div`,r);n(r,c),f(c,`flex flex-wrap items-center gap-8`);let l=a(`rue:component:anchor`);n(c,l),d(p(v,{count:0,children:p(k,{label:`Draft`})}),c,l);let u=a(`rue:component:anchor`);n(c,u);let m=p(k,{label:`Mail`});o(()=>{let e=p(v,{count:0,showZero:!0,color:`info`,text:`No unread`,children:m});t(()=>d(e,c,u))});let h=a(`rue:component:anchor`);n(c,h),d(p(v,{count:128,overflowCount:99,color:`error`,children:p(k,{label:`Alerts`})}),c,h);let g=i(`div`,r);n(r,g),f(g,`flex flex-wrap items-center gap-8`);let _=a(`rue:component:anchor`);n(g,_);let y=p(A,{label:`Releases`});o(()=>{let e=p(v,{count:8,offset:[8,6],color:`primary`,children:y});t(()=>d(e,g,_))});let b=a(`rue:component:anchor`);n(g,b);let x=p(A,{label:`Jobs`});return o(()=>{let e=p(v,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:x});t(()=>d(e,g,b))}),e})}),r,c),r}),oe=()=>l(r=>{let c=s(),u=a(`rue:component:anchor`);return n(c,u),d(p(O,{children:l(()=>{let r=s(),c=i(`div`,r);n(r,c),f(c,`flex flex-col gap-4`);let l=i(`div`,c);n(c,l),f(l,`flex items-center gap-3`);let u=i(`div`,l);n(l,u),f(u,`inline-grid *:[grid-area:1/1]`);let m=a(`rue:component:anchor`);n(u,m),o(()=>{let e=p(v,{dot:!0,color:`error`,className:`animate-ping`});t(()=>d(e,u,m))});let h=a(`rue:component:anchor`);n(u,h),o(()=>{let e=p(v,{dot:!0,color:`error`});t(()=>d(e,u,h))});let g=i(`span`,l);n(l,g),n(g,e(`Server is down`));let _=i(`div`,c);n(c,_),f(_,`flex items-center gap-3`);let y=a(`rue:component:anchor`);n(_,y),d(p(v,{color:`info`,className:`animate-bounce`}),_,y);let b=i(`span`,_);return n(_,b),n(b,e(`Unread messages`)),r})}),c,u),c}),F=()=>{let{tabBasic:h,tabScale:g,tabLabel:_,tabBadge:v,tabOverflow:b,tabMotion:x}=m(`useSetup:0:0`,()=>u(()=>({tabBasic:m(`ref:1:0`,()=>r(`preview`)),tabScale:m(`ref:1:1`,()=>r(`preview`)),tabLabel:m(`ref:1:2`,()=>r(`preview`)),tabBadge:m(`ref:1:3`,()=>r(`preview`)),tabOverflow:m(`ref:1:4`,()=>r(`preview`)),tabMotion:m(`ref:1:5`,()=>r(`preview`))})));return l(r=>{let u=s(),m=a(`rue:component:anchor`);return n(u,m),d(p(y,{children:l(()=>{let r=s(),l=i(`div`,r);n(r,l),f(l,`max-w-none prose prose-sm md:prose-base`);let u=i(`h1`,l);n(l,u),n(u,e(`Status 状态列表`));let m=i(`p`,l);n(l,m),f(m,`text-sm mt-3 mb-3`),n(m,e(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let y=i(`h2`,l);n(l,y),n(y,e(`何时使用`));let S=i(`ul`,l);n(l,S);let C=i(`li`,S);n(S,C),n(C,e(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let O=i(`li`,S);n(S,O),n(O,e(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let k=a(`rue:component:anchor`);n(l,k),o(()=>{let e=p(D,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:h,preview:ae,code:w});t(()=>d(e,l,k))});let A=a(`rue:component:anchor`);n(l,A),o(()=>{let e=p(D,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:j,code:T});t(()=>d(e,l,A))});let F=a(`rue:component:anchor`);n(l,F),o(()=>{let e=p(D,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:_,preview:M,code:ee});t(()=>d(e,l,F))});let I=a(`rue:component:anchor`);n(l,I),o(()=>{let e=p(D,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:v,preview:N,code:te});t(()=>d(e,l,I))});let L=a(`rue:component:anchor`);n(l,L),o(()=>{let e=p(D,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:b,preview:P,code:E});t(()=>d(e,l,L))});let R=a(`rue:component:anchor`);n(l,R),o(()=>{let e=p(D,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:x,preview:oe,code:ne});t(()=>d(e,l,R))});let z=i(`h2`,l);n(l,z),c(z,`id`,`status-api`),n(z,e(`API`));let B=i(`p`,l);n(l,B),n(B,e(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=a(`rue:component:anchor`);n(l,V),o(()=>{let e=p(ie,{rows:re});t(()=>d(e,l,V))});let H=i(`div`,l);n(l,H),f(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=i(`div`,H);n(H,U),f(U,`font-semibold`),n(U,e(`模式选择建议`));let W=i(`div`,H);n(H,W),f(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=i(`div`,W);n(W,G),n(G,e(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=i(`div`,W);n(W,K),n(K,e(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let q=i(`h2`,l);n(l,q),n(q,e(`FAQ`));let J=i(`h3`,l);n(l,J),n(J,e(`status 和 color 同时传时谁优先？`));let Y=i(`p`,l);n(l,Y),n(Y,e(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=i(`h3`,l);n(l,X),n(X,e(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=i(`p`,l);n(l,Z),n(Z,e(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=i(`h3`,l);n(l,Q),n(Q,e(`count 为 0 时为什么默认不显示？`));let $=i(`p`,l);return n(l,$),n($,e(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),r})}),u,m),u})};export{F as default};