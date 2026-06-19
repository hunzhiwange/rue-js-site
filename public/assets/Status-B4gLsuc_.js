import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,l as s,lt as c,o as l,st as u,t as d,tt as f,zt as p}from"./vapor-runtime-CXIalONM.js";import{a as m,n as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as g}from"./Code-BIscIyEp.js";import{t as _}from"./tabs-CZWMQq5i.js";import{t as v}from"./status-BfCiotxA.js";import{r as y}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var b=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],x=`card border border-base-200 bg-base-100 shadow-sm`,S=`card-body gap-4`,C=(e,t)=>t?`${e} ${t}`:e,w=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,re=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],D=a=>s(u=>{let p=o(`div`,u);c(p,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,p);i(p,m),c(m,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,m);i(m,h);let v=o(`h2`,h);i(h,v),c(v,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(v,f(`# `));let y=t(`rue:slot:anchor`);i(v,y),n(()=>{let e=a.title;r(()=>l(e,v,y))});let x=t(`rue:slot:anchor`);i(h,x),n(()=>{let u=a.summary?s(()=>{let s=e(),u=o(`p`,s);i(s,u),c(u,`m-0 text-sm opacity-70`);let d=t(`rue:slot:anchor`);return i(u,d),n(()=>{let e=a.summary;r(()=>l(e,u,d))}),s}):``;r(()=>l(u,h,x))});let S=t(`rue:component:anchor`);i(p,S),n(()=>{let e=d(_,{style:`box`,items:b,activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>l(e,p,S))});let C=t(`rue:slot:anchor`);return i(p,C),n(()=>{let o=a.tab.value===`preview`?a.preview():s(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=d(g,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>l(e,o,s))}),o});r(()=>l(o,p,C))}),p}),O=e=>s(a=>{let s=o(`div`,a);n(()=>{c(s,C(x,e.className))});let u=o(`div`,s);i(s,u),n(()=>{c(u,S)});let d=t(`rue:children:anchor`);return i(u,d),n(()=>{let t=e.children;r(()=>l(t,u,d))}),s}),ie=a=>s(d=>{let p=o(`div`,d);c(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,p);i(p,m),c(m,`table table-zebra`);let g=o(`thead`,m);i(m,g);let _=o(`tr`,g);i(g,_);let v=o(`th`,_);i(_,v),i(v,f(`属性`));let y=o(`th`,_);i(_,y),i(y,f(`说明`));let b=o(`th`,_);i(_,b),i(b,f(`类型`));let x=o(`th`,_);i(_,x),i(x,f(`默认值`));let S=o(`tbody`,m);i(m,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=h({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,c,d,f,p)=>{l(s(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{u(c,`key`,String(a.prop))});let d=o(`td`,c);i(c,d);let f=o(`code`,d);i(d,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.prop;r(()=>l(e,f,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>l(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>l(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>l(e,b,x))}),s}),c,d)}})}),p}),k=e=>s(a=>{let s=o(`div`,a);c(s,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let u=t(`rue:slot:anchor`);return i(s,u),n(()=>{let t=e.label;r(()=>l(t,s,u))}),s}),A=e=>s(a=>{let s=o(`div`,a);c(s,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let u=t(`rue:slot:anchor`);return i(s,u),n(()=>{let t=e.label;r(()=>l(t,s,u))}),s}),ae=()=>s(n=>{let r=e(),a=t(`rue:component:anchor`);return i(r,a),l(d(O,{children:s(()=>{let n=e(),r=o(`div`,n);i(n,r),c(r,`flex flex-wrap items-center gap-6`);let a=t(`rue:component:anchor`);i(r,a),l(d(v,{as:`span`}),r,a);let s=t(`rue:component:anchor`);i(r,s),l(d(v,{status:`processing`,text:`Deploying`}),r,s);let u=t(`rue:component:anchor`);i(r,u),l(d(v,{color:`success`,text:`Online`}),r,u);let f=t(`rue:component:anchor`);return i(r,f),l(d(v,{status:`warning`,text:`Window closing soon`}),r,f),n})}),r,a),r}),j=()=>s(n=>{let r=e(),a=t(`rue:component:anchor`);return i(r,a),l(d(O,{children:s(()=>{let n=e(),r=o(`div`,n);i(n,r),c(r,`grid gap-5`);let a=o(`div`,r);i(r,a),c(a,`flex flex-wrap items-center gap-4`);let s=t(`rue:component:anchor`);i(a,s),l(d(v,{ariaLabel:`status`,size:`xs`}),a,s);let u=t(`rue:component:anchor`);i(a,u),l(d(v,{ariaLabel:`status`,size:`sm`}),a,u);let f=t(`rue:component:anchor`);i(a,f),l(d(v,{ariaLabel:`status`,size:`md`}),a,f);let p=t(`rue:component:anchor`);i(a,p),l(d(v,{ariaLabel:`status`,size:`lg`}),a,p);let m=t(`rue:component:anchor`);i(a,m),l(d(v,{ariaLabel:`status`,size:`xl`}),a,m);let h=o(`div`,r);i(r,h),c(h,`flex flex-wrap items-center gap-4`);let g=t(`rue:component:anchor`);i(h,g),l(d(v,{ariaLabel:`status`,color:`primary`}),h,g);let _=t(`rue:component:anchor`);i(h,_),l(d(v,{ariaLabel:`status`,color:`secondary`}),h,_);let y=t(`rue:component:anchor`);i(h,y),l(d(v,{ariaLabel:`status`,color:`accent`}),h,y);let b=t(`rue:component:anchor`);i(h,b),l(d(v,{ariaLabel:`status`,color:`neutral`}),h,b);let x=t(`rue:component:anchor`);i(h,x),l(d(v,{ariaLabel:`info`,color:`info`}),h,x);let S=t(`rue:component:anchor`);i(h,S),l(d(v,{ariaLabel:`success`,color:`success`}),h,S);let C=t(`rue:component:anchor`);i(h,C),l(d(v,{ariaLabel:`warning`,color:`warning`}),h,C);let w=t(`rue:component:anchor`);return i(h,w),l(d(v,{ariaLabel:`error`,color:`error`}),h,w),n})}),r,a),r}),M=()=>s(a=>{let u=e(),f=t(`rue:component:anchor`);return i(u,f),l(d(O,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`flex flex-col items-start gap-3`);let u=t(`rue:component:anchor`);i(s,u),l(d(v,{status:`success`,text:`Published`}),s,u);let f=t(`rue:component:anchor`);i(s,f),l(d(v,{status:`processing`,text:`Syncing data`}),s,f);let p=t(`rue:component:anchor`);i(s,p),n(()=>{let e=d(v,{dot:!0,status:`processing`,text:`Syncing edge cache`});r(()=>l(e,s,p))});let m=t(`rue:component:anchor`);return i(s,m),l(d(v,{count:7,color:`#f97316`,text:`待审核`}),s,m),a})}),u,f),u}),N=()=>s(a=>{let u=e(),f=t(`rue:component:anchor`);return i(u,f),l(d(O,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`flex flex-wrap items-center gap-8`);let u=t(`rue:component:anchor`);i(s,u);let f=d(k,{label:`APP`});n(()=>{let e=d(v,{dot:!0,color:`success`,children:f});r(()=>l(e,s,u))});let p=t(`rue:component:anchor`);i(s,p);let m=d(k,{label:`PR`});n(()=>{let e=d(v,{dot:!0,color:`warning`,text:`Pending review`,children:m});r(()=>l(e,s,p))});let h=t(`rue:component:anchor`);i(s,h),l(d(v,{count:5,children:d(k,{label:`Inbox`})}),s,h);let g=t(`rue:component:anchor`);return i(s,g),l(d(v,{count:12,color:`secondary`,text:`Messages`,children:d(k,{label:`Chat`})}),s,g),a})}),u,f),u}),P=()=>s(a=>{let u=e(),f=t(`rue:component:anchor`);return i(u,f),l(d(O,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`grid gap-4 lg:grid-cols-2`);let u=o(`div`,s);i(s,u),c(u,`flex flex-wrap items-center gap-8`);let f=t(`rue:component:anchor`);i(u,f),l(d(v,{count:0,children:d(k,{label:`Draft`})}),u,f);let p=t(`rue:component:anchor`);i(u,p);let m=d(k,{label:`Mail`});n(()=>{let e=d(v,{count:0,showZero:!0,color:`info`,text:`No unread`,children:m});r(()=>l(e,u,p))});let h=t(`rue:component:anchor`);i(u,h),l(d(v,{count:128,overflowCount:99,color:`error`,children:d(k,{label:`Alerts`})}),u,h);let g=o(`div`,s);i(s,g),c(g,`flex flex-wrap items-center gap-8`);let _=t(`rue:component:anchor`);i(g,_);let y=d(A,{label:`Releases`});n(()=>{let e=d(v,{count:8,offset:[8,6],color:`primary`,children:y});r(()=>l(e,g,_))});let b=t(`rue:component:anchor`);i(g,b);let x=d(A,{label:`Jobs`});return n(()=>{let e=d(v,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:x});r(()=>l(e,g,b))}),a})}),u,f),u}),oe=()=>s(a=>{let u=e(),p=t(`rue:component:anchor`);return i(u,p),l(d(O,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`flex flex-col gap-4`);let u=o(`div`,s);i(s,u),c(u,`flex items-center gap-3`);let p=o(`div`,u);i(u,p),c(p,`inline-grid *:[grid-area:1/1]`);let m=t(`rue:component:anchor`);i(p,m),n(()=>{let e=d(v,{dot:!0,color:`error`,className:`animate-ping`});r(()=>l(e,p,m))});let h=t(`rue:component:anchor`);i(p,h),n(()=>{let e=d(v,{dot:!0,color:`error`});r(()=>l(e,p,h))});let g=o(`span`,u);i(u,g),i(g,f(`Server is down`));let _=o(`div`,s);i(s,_),c(_,`flex items-center gap-3`);let y=t(`rue:component:anchor`);i(_,y),l(d(v,{color:`info`,className:`animate-bounce`}),_,y);let b=o(`span`,_);return i(_,b),i(b,f(`Unread messages`)),a})}),u,p),u}),F=()=>{let{tabBasic:h,tabScale:g,tabLabel:_,tabBadge:v,tabOverflow:b,tabMotion:x}=m(`useSetup:0:0`,()=>a(()=>({tabBasic:m(`ref:1:0`,()=>p(`preview`)),tabScale:m(`ref:1:1`,()=>p(`preview`)),tabLabel:m(`ref:1:2`,()=>p(`preview`)),tabBadge:m(`ref:1:3`,()=>p(`preview`)),tabOverflow:m(`ref:1:4`,()=>p(`preview`)),tabMotion:m(`ref:1:5`,()=>p(`preview`))})));return s(a=>{let p=e(),m=t(`rue:component:anchor`);return i(p,m),l(d(y,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`max-w-none prose prose-sm md:prose-base`);let p=o(`h1`,s);i(s,p),i(p,f(`Status 状态列表`));let m=o(`p`,s);i(s,m),c(m,`text-sm mt-3 mb-3`),i(m,f(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let y=o(`h2`,s);i(s,y),i(y,f(`何时使用`));let S=o(`ul`,s);i(s,S);let C=o(`li`,S);i(S,C),i(C,f(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let O=o(`li`,S);i(S,O),i(O,f(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let k=t(`rue:component:anchor`);i(s,k),n(()=>{let e=d(D,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:h,preview:ae,code:w});r(()=>l(e,s,k))});let A=t(`rue:component:anchor`);i(s,A),n(()=>{let e=d(D,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:j,code:T});r(()=>l(e,s,A))});let F=t(`rue:component:anchor`);i(s,F),n(()=>{let e=d(D,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:_,preview:M,code:ee});r(()=>l(e,s,F))});let I=t(`rue:component:anchor`);i(s,I),n(()=>{let e=d(D,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:v,preview:N,code:te});r(()=>l(e,s,I))});let L=t(`rue:component:anchor`);i(s,L),n(()=>{let e=d(D,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:b,preview:P,code:E});r(()=>l(e,s,L))});let R=t(`rue:component:anchor`);i(s,R),n(()=>{let e=d(D,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:x,preview:oe,code:ne});r(()=>l(e,s,R))});let z=o(`h2`,s);i(s,z),u(z,`id`,`status-api`),i(z,f(`API`));let B=o(`p`,s);i(s,B),i(B,f(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=t(`rue:component:anchor`);i(s,V),n(()=>{let e=d(ie,{rows:re});r(()=>l(e,s,V))});let H=o(`div`,s);i(s,H),c(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=o(`div`,H);i(H,U),c(U,`font-semibold`),i(U,f(`模式选择建议`));let W=o(`div`,H);i(H,W),c(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=o(`div`,W);i(W,G),i(G,f(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=o(`div`,W);i(W,K),i(K,f(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let q=o(`h2`,s);i(s,q),i(q,f(`FAQ`));let J=o(`h3`,s);i(s,J),i(J,f(`status 和 color 同时传时谁优先？`));let Y=o(`p`,s);i(s,Y),i(Y,f(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=o(`h3`,s);i(s,X),i(X,f(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=o(`p`,s);i(s,Z),i(Z,f(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=o(`h3`,s);i(s,Q),i(Q,f(`count 为 0 时为什么默认不显示？`));let $=o(`p`,s);return i(s,$),i($,f(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),a})}),p,m),p})};export{F as default};