import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,pn as o,pt as s,st as c,tn as l,vn as u}from"./context-8lXZvIn-.js";import{l as d,o as f,t as p}from"./vapor-runtime-ygJWVcNn.js";import{a as m,n as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./Code-DhoWkRkB.js";import{t as _}from"./tabs-B1XdBEJF.js";import{t as v}from"./status-CeyCdWuF.js";import{r as y}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var b=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],x=`card border border-base-200 bg-base-100 shadow-sm`,S=`card-body gap-4`,C=(e,t)=>t?`${e} ${t}`:e,w=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,re=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],D=e=>d(t=>{let o=s(`div`,t);n(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=s(`div`,o);c(o,m),n(m,`flex flex-wrap items-start justify-between gap-3`);let h=s(`div`,m);c(m,h);let v=s(`h2`,h);c(h,v),n(v,`component-preview-title mt-2 mb-1 text-lg font-semibold`),c(v,a(`# `));let y=r(`rue:slot:anchor`);c(v,y),l(()=>{let t=e.title;u(()=>f(t,v,y))});let x=r(`rue:slot:anchor`);c(h,x),l(()=>{let t=e.summary?d(()=>{let t=i(),a=s(`p`,t);c(t,a),n(a,`m-0 text-sm opacity-70`);let o=r(`rue:slot:anchor`);return c(a,o),l(()=>{let t=e.summary;u(()=>f(t,a,o))}),t}):``;u(()=>f(t,h,x))});let S=r(`rue:component:anchor`);c(o,S),l(()=>{let t=p(_,{style:`box`,items:b,activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});u(()=>f(t,o,S))});let C=r(`rue:slot:anchor`);return c(o,C),l(()=>{let t=e.tab.value===`preview`?e.preview():d(()=>{let t=i(),n=r(`rue:component:anchor`);return c(t,n),l(()=>{let r=p(g,{className:`mt-2`,lang:`tsx`,code:e.code});u(()=>f(r,t,n))}),t});u(()=>f(t,o,C))}),o}),O=e=>d(t=>{let i=s(`div`,t);l(()=>{n(i,C(x,e.className))});let a=s(`div`,i);c(i,a),l(()=>{n(a,S)});let o=r(`rue:children:anchor`);return c(a,o),l(()=>{let t=e.children;u(()=>f(t,a,o))}),i}),ie=e=>d(o=>{let p=s(`div`,o);n(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=s(`table`,p);c(p,m),n(m,`table table-zebra`);let g=s(`thead`,m);c(m,g);let _=s(`tr`,g);c(g,_);let v=s(`th`,_);c(_,v),c(v,a(`属性`));let y=s(`th`,_);c(_,y),c(y,a(`说明`));let b=s(`th`,_);c(_,b),c(b,a(`类型`));let x=s(`th`,_);c(_,x),c(x,a(`默认值`));let S=s(`tbody`,m);c(m,S);let C=r(`rue:list:start`),w=r(`rue:list:end`);c(S,C),c(S,w);let T=new Map;return l(()=>{T=h({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,a,o,p)=>{f(d(()=>{let n=i(),a=s(`tr`,n);c(n,a),l(()=>{t(a,`key`,String(e.prop))});let o=s(`td`,a);c(a,o);let d=s(`code`,o);c(o,d);let p=r(`rue:slot:anchor`);c(d,p),l(()=>{let t=e.prop;u(()=>f(t,d,p))});let m=s(`td`,a);c(a,m);let h=r(`rue:slot:anchor`);c(m,h),l(()=>{let t=e.description;u(()=>f(t,m,h))});let g=s(`td`,a);c(a,g);let _=s(`code`,g);c(g,_);let v=r(`rue:slot:anchor`);c(_,v),l(()=>{let t=e.type;u(()=>f(t,_,v))});let y=s(`td`,a);c(a,y);let b=s(`code`,y);c(y,b);let x=r(`rue:slot:anchor`);return c(b,x),l(()=>{let t=e.defaultValue;u(()=>f(t,b,x))}),n}),n,a)}})}),p}),k=e=>d(t=>{let i=s(`div`,t);n(i,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let a=r(`rue:slot:anchor`);return c(i,a),l(()=>{let t=e.label;u(()=>f(t,i,a))}),i}),A=e=>d(t=>{let i=s(`div`,t);n(i,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let a=r(`rue:slot:anchor`);return c(i,a),l(()=>{let t=e.label;u(()=>f(t,i,a))}),i}),ae=()=>d(e=>{let t=i(),a=r(`rue:component:anchor`);return c(t,a),f(p(O,{children:d(()=>{let e=i(),t=s(`div`,e);c(e,t),n(t,`flex flex-wrap items-center gap-6`);let a=r(`rue:component:anchor`);c(t,a),f(p(v,{as:`span`}),t,a);let o=r(`rue:component:anchor`);c(t,o),f(p(v,{status:`processing`,text:`Deploying`}),t,o);let l=r(`rue:component:anchor`);c(t,l),f(p(v,{color:`success`,text:`Online`}),t,l);let u=r(`rue:component:anchor`);return c(t,u),f(p(v,{status:`warning`,text:`Window closing soon`}),t,u),e})}),t,a),t}),j=()=>d(e=>{let t=i(),a=r(`rue:component:anchor`);return c(t,a),f(p(O,{children:d(()=>{let e=i(),t=s(`div`,e);c(e,t),n(t,`grid gap-5`);let a=s(`div`,t);c(t,a),n(a,`flex flex-wrap items-center gap-4`);let o=r(`rue:component:anchor`);c(a,o),f(p(v,{ariaLabel:`status`,size:`xs`}),a,o);let l=r(`rue:component:anchor`);c(a,l),f(p(v,{ariaLabel:`status`,size:`sm`}),a,l);let u=r(`rue:component:anchor`);c(a,u),f(p(v,{ariaLabel:`status`,size:`md`}),a,u);let d=r(`rue:component:anchor`);c(a,d),f(p(v,{ariaLabel:`status`,size:`lg`}),a,d);let m=r(`rue:component:anchor`);c(a,m),f(p(v,{ariaLabel:`status`,size:`xl`}),a,m);let h=s(`div`,t);c(t,h),n(h,`flex flex-wrap items-center gap-4`);let g=r(`rue:component:anchor`);c(h,g),f(p(v,{ariaLabel:`status`,color:`primary`}),h,g);let _=r(`rue:component:anchor`);c(h,_),f(p(v,{ariaLabel:`status`,color:`secondary`}),h,_);let y=r(`rue:component:anchor`);c(h,y),f(p(v,{ariaLabel:`status`,color:`accent`}),h,y);let b=r(`rue:component:anchor`);c(h,b),f(p(v,{ariaLabel:`status`,color:`neutral`}),h,b);let x=r(`rue:component:anchor`);c(h,x),f(p(v,{ariaLabel:`info`,color:`info`}),h,x);let S=r(`rue:component:anchor`);c(h,S),f(p(v,{ariaLabel:`success`,color:`success`}),h,S);let C=r(`rue:component:anchor`);c(h,C),f(p(v,{ariaLabel:`warning`,color:`warning`}),h,C);let w=r(`rue:component:anchor`);return c(h,w),f(p(v,{ariaLabel:`error`,color:`error`}),h,w),e})}),t,a),t}),M=()=>d(e=>{let t=i(),a=r(`rue:component:anchor`);return c(t,a),f(p(O,{children:d(()=>{let e=i(),t=s(`div`,e);c(e,t),n(t,`flex flex-col items-start gap-3`);let a=r(`rue:component:anchor`);c(t,a),f(p(v,{status:`success`,text:`Published`}),t,a);let o=r(`rue:component:anchor`);c(t,o),f(p(v,{status:`processing`,text:`Syncing data`}),t,o);let d=r(`rue:component:anchor`);c(t,d),l(()=>{let e=p(v,{dot:!0,status:`processing`,text:`Syncing edge cache`});u(()=>f(e,t,d))});let m=r(`rue:component:anchor`);return c(t,m),f(p(v,{count:7,color:`#f97316`,text:`待审核`}),t,m),e})}),t,a),t}),N=()=>d(e=>{let t=i(),a=r(`rue:component:anchor`);return c(t,a),f(p(O,{children:d(()=>{let e=i(),t=s(`div`,e);c(e,t),n(t,`flex flex-wrap items-center gap-8`);let a=r(`rue:component:anchor`);c(t,a);let o=p(k,{label:`APP`});l(()=>{let e=p(v,{dot:!0,color:`success`,children:o});u(()=>f(e,t,a))});let d=r(`rue:component:anchor`);c(t,d);let m=p(k,{label:`PR`});l(()=>{let e=p(v,{dot:!0,color:`warning`,text:`Pending review`,children:m});u(()=>f(e,t,d))});let h=r(`rue:component:anchor`);c(t,h),f(p(v,{count:5,children:p(k,{label:`Inbox`})}),t,h);let g=r(`rue:component:anchor`);return c(t,g),f(p(v,{count:12,color:`secondary`,text:`Messages`,children:p(k,{label:`Chat`})}),t,g),e})}),t,a),t}),P=()=>d(e=>{let t=i(),a=r(`rue:component:anchor`);return c(t,a),f(p(O,{children:d(()=>{let e=i(),t=s(`div`,e);c(e,t),n(t,`grid gap-4 lg:grid-cols-2`);let a=s(`div`,t);c(t,a),n(a,`flex flex-wrap items-center gap-8`);let o=r(`rue:component:anchor`);c(a,o),f(p(v,{count:0,children:p(k,{label:`Draft`})}),a,o);let d=r(`rue:component:anchor`);c(a,d);let m=p(k,{label:`Mail`});l(()=>{let e=p(v,{count:0,showZero:!0,color:`info`,text:`No unread`,children:m});u(()=>f(e,a,d))});let h=r(`rue:component:anchor`);c(a,h),f(p(v,{count:128,overflowCount:99,color:`error`,children:p(k,{label:`Alerts`})}),a,h);let g=s(`div`,t);c(t,g),n(g,`flex flex-wrap items-center gap-8`);let _=r(`rue:component:anchor`);c(g,_);let y=p(A,{label:`Releases`});l(()=>{let e=p(v,{count:8,offset:[8,6],color:`primary`,children:y});u(()=>f(e,g,_))});let b=r(`rue:component:anchor`);c(g,b);let x=p(A,{label:`Jobs`});return l(()=>{let e=p(v,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:x});u(()=>f(e,g,b))}),e})}),t,a),t}),oe=()=>d(e=>{let t=i(),o=r(`rue:component:anchor`);return c(t,o),f(p(O,{children:d(()=>{let e=i(),t=s(`div`,e);c(e,t),n(t,`flex flex-col gap-4`);let o=s(`div`,t);c(t,o),n(o,`flex items-center gap-3`);let d=s(`div`,o);c(o,d),n(d,`inline-grid *:[grid-area:1/1]`);let m=r(`rue:component:anchor`);c(d,m),l(()=>{let e=p(v,{dot:!0,color:`error`,className:`animate-ping`});u(()=>f(e,d,m))});let h=r(`rue:component:anchor`);c(d,h),l(()=>{let e=p(v,{dot:!0,color:`error`});u(()=>f(e,d,h))});let g=s(`span`,o);c(o,g),c(g,a(`Server is down`));let _=s(`div`,t);c(t,_),n(_,`flex items-center gap-3`);let y=r(`rue:component:anchor`);c(_,y),f(p(v,{color:`info`,className:`animate-bounce`}),_,y);let b=s(`span`,_);return c(_,b),c(b,a(`Unread messages`)),e})}),t,o),t}),F=()=>{let{tabBasic:h,tabScale:g,tabLabel:_,tabBadge:v,tabOverflow:b,tabMotion:x}=m(`useSetup:0:0`,()=>e(()=>({tabBasic:m(`ref:1:0`,()=>o(`preview`)),tabScale:m(`ref:1:1`,()=>o(`preview`)),tabLabel:m(`ref:1:2`,()=>o(`preview`)),tabBadge:m(`ref:1:3`,()=>o(`preview`)),tabOverflow:m(`ref:1:4`,()=>o(`preview`)),tabMotion:m(`ref:1:5`,()=>o(`preview`))})));return d(e=>{let o=i(),m=r(`rue:component:anchor`);return c(o,m),f(p(y,{children:d(()=>{let e=i(),o=s(`div`,e);c(e,o),n(o,`max-w-none prose prose-sm md:prose-base`);let d=s(`h1`,o);c(o,d),c(d,a(`Status 状态列表`));let m=s(`p`,o);c(o,m),n(m,`text-sm mt-3 mb-3`),c(m,a(`Status 现在既能使用 Rue 基础的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let y=s(`h2`,o);c(o,y),c(y,a(`何时使用`));let S=s(`ul`,o);c(o,S);let C=s(`li`,S);c(S,C),c(C,a(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let O=s(`li`,S);c(S,O),c(O,a(`想在当前内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let k=r(`rue:component:anchor`);c(o,k),l(()=>{let e=p(D,{title:`基础状态与语义`,summary:`展示最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:h,preview:ae,code:w});u(()=>f(e,o,k))});let A=r(`rue:component:anchor`);c(o,A),l(()=>{let e=p(D,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:j,code:T});u(()=>f(e,o,A))});let F=r(`rue:component:anchor`);c(o,F),l(()=>{let e=p(D,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:_,preview:M,code:ee});u(()=>f(e,o,F))});let I=r(`rue:component:anchor`);c(o,I),l(()=>{let e=p(D,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:v,preview:N,code:te});u(()=>f(e,o,I))});let L=r(`rue:component:anchor`);c(o,L),l(()=>{let e=p(D,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:b,preview:P,code:E});u(()=>f(e,o,L))});let R=r(`rue:component:anchor`);c(o,R),l(()=>{let e=p(D,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:x,preview:oe,code:ne});u(()=>f(e,o,R))});let z=s(`h2`,o);c(o,z),t(z,`id`,`status-api`),c(z,a(`API`));let B=s(`p`,o);c(o,B),c(B,a(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=r(`rue:component:anchor`);c(o,V),l(()=>{let e=p(ie,{rows:re});u(()=>f(e,o,V))});let H=s(`div`,o);c(o,H),n(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=s(`div`,H);c(H,U),n(U,`font-semibold`),c(U,a(`模式选择建议`));let W=s(`div`,H);c(H,W),n(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=s(`div`,W);c(W,G),c(G,a(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=s(`div`,W);c(W,K),c(K,a(`传 children 适合给按钮、卡片、入口块挂角标，并可以使用 count、dot、offset 等能力。`));let q=s(`h2`,o);c(o,q),c(q,a(`FAQ`));let J=s(`h3`,o);c(o,J),c(J,a(`status 和 color 同时传时谁优先？`));let Y=s(`p`,o);c(o,Y),c(Y,a(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=s(`h3`,o);c(o,X),c(X,a(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=s(`p`,o);c(o,Z),c(Z,a(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=s(`h3`,o);c(o,Q),c(Q,a(`count 为 0 时为什么默认不显示？`));let $=s(`p`,o);return c(o,$),c($,a(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),e})}),o,m),o})};export{F as default};