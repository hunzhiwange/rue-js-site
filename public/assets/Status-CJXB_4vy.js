import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,l as c,nt as l,o as u,t as d,tt as f,ut as p}from"./vapor-runtime-CKrmRMZX.js";import{a as m,n as h}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as g}from"./Code-D5UqTwV6.js";import{t as _}from"./tabs-DRfs918f.js";import{t as v}from"./status-BMUyM95G.js";import{r as y}from"./SidebarPlaygroundDesign-CWudvLqE.js";var b=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],x=`card border border-base-200 bg-base-100 shadow-sm`,S=`card-body gap-4`,C=(e,t)=>t?`${e} ${t}`:e,w=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,re=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],D=n=>c(i=>{let o=f(`div`,i);p(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=f(`div`,o);a(o,m),p(m,`flex flex-wrap items-start justify-between gap-3`);let h=f(`div`,m);a(m,h);let v=f(`h2`,h);a(h,v),p(v,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(v,l(`# `));let y=e(`rue:slot:anchor`);a(v,y),t(()=>{let e=n.title;r(()=>u(e,v,y))});let x=e(`rue:slot:anchor`);a(h,x),t(()=>{let i=n.summary?c(()=>{let i=s(),o=f(`p`,i);a(i,o),p(o,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return a(o,c),t(()=>{let e=n.summary;r(()=>u(e,o,c))}),i}):``;r(()=>u(i,h,x))});let S=e(`rue:component:anchor`);a(o,S),t(()=>{let e=d(_,{style:`box`,items:b,activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>u(e,o,S))});let C=e(`rue:slot:anchor`);return a(o,C),t(()=>{let i=n.tab.value===`preview`?n.preview():c(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=d(g,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>u(e,i,o))}),i});r(()=>u(i,o,C))}),o}),O=n=>c(i=>{let o=f(`div`,i);t(()=>{p(o,C(x,n.className))});let s=f(`div`,o);a(o,s),t(()=>{p(s,S)});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>u(e,s,c))}),o}),ie=n=>c(i=>{let d=f(`div`,i);p(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=f(`table`,d);a(d,m),p(m,`table table-zebra`);let g=f(`thead`,m);a(m,g);let _=f(`tr`,g);a(g,_);let v=f(`th`,_);a(_,v),a(v,l(`属性`));let y=f(`th`,_);a(_,y),a(y,l(`说明`));let b=f(`th`,_);a(_,b),a(b,l(`类型`));let x=f(`th`,_);a(_,x),a(x,l(`默认值`));let S=f(`tbody`,m);a(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=h({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,l,d,p)=>{u(c(()=>{let i=s(),c=f(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=f(`td`,c);a(c,l);let d=f(`code`,l);a(l,d);let p=e(`rue:slot:anchor`);a(d,p),t(()=>{let e=n.prop;r(()=>u(e,d,p))});let m=f(`td`,c);a(c,m);let h=e(`rue:slot:anchor`);a(m,h),t(()=>{let e=n.description;r(()=>u(e,m,h))});let g=f(`td`,c);a(c,g);let _=f(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>u(e,_,v))});let y=f(`td`,c);a(c,y);let b=f(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>u(e,b,x))}),i}),i,l)}})}),d}),k=n=>c(i=>{let o=f(`div`,i);p(o,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.label;r(()=>u(e,o,s))}),o}),A=n=>c(i=>{let o=f(`div`,i);p(o,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.label;r(()=>u(e,o,s))}),o}),ae=()=>c(t=>{let n=s(),r=e(`rue:component:anchor`);return a(n,r),u(d(O,{children:c(()=>{let t=s(),n=f(`div`,t);a(t,n),p(n,`flex flex-wrap items-center gap-6`);let r=e(`rue:component:anchor`);a(n,r),u(d(v,{as:`span`}),n,r);let i=e(`rue:component:anchor`);a(n,i),u(d(v,{status:`processing`,text:`Deploying`}),n,i);let o=e(`rue:component:anchor`);a(n,o),u(d(v,{color:`success`,text:`Online`}),n,o);let c=e(`rue:component:anchor`);return a(n,c),u(d(v,{status:`warning`,text:`Window closing soon`}),n,c),t})}),n,r),n}),j=()=>c(t=>{let n=s(),r=e(`rue:component:anchor`);return a(n,r),u(d(O,{children:c(()=>{let t=s(),n=f(`div`,t);a(t,n),p(n,`grid gap-5`);let r=f(`div`,n);a(n,r),p(r,`flex flex-wrap items-center gap-4`);let i=e(`rue:component:anchor`);a(r,i),u(d(v,{ariaLabel:`status`,size:`xs`}),r,i);let o=e(`rue:component:anchor`);a(r,o),u(d(v,{ariaLabel:`status`,size:`sm`}),r,o);let c=e(`rue:component:anchor`);a(r,c),u(d(v,{ariaLabel:`status`,size:`md`}),r,c);let l=e(`rue:component:anchor`);a(r,l),u(d(v,{ariaLabel:`status`,size:`lg`}),r,l);let m=e(`rue:component:anchor`);a(r,m),u(d(v,{ariaLabel:`status`,size:`xl`}),r,m);let h=f(`div`,n);a(n,h),p(h,`flex flex-wrap items-center gap-4`);let g=e(`rue:component:anchor`);a(h,g),u(d(v,{ariaLabel:`status`,color:`primary`}),h,g);let _=e(`rue:component:anchor`);a(h,_),u(d(v,{ariaLabel:`status`,color:`secondary`}),h,_);let y=e(`rue:component:anchor`);a(h,y),u(d(v,{ariaLabel:`status`,color:`accent`}),h,y);let b=e(`rue:component:anchor`);a(h,b),u(d(v,{ariaLabel:`status`,color:`neutral`}),h,b);let x=e(`rue:component:anchor`);a(h,x),u(d(v,{ariaLabel:`info`,color:`info`}),h,x);let S=e(`rue:component:anchor`);a(h,S),u(d(v,{ariaLabel:`success`,color:`success`}),h,S);let C=e(`rue:component:anchor`);a(h,C),u(d(v,{ariaLabel:`warning`,color:`warning`}),h,C);let w=e(`rue:component:anchor`);return a(h,w),u(d(v,{ariaLabel:`error`,color:`error`}),h,w),t})}),n,r),n}),M=()=>c(n=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),u(d(O,{children:c(()=>{let n=s(),i=f(`div`,n);a(n,i),p(i,`flex flex-col items-start gap-3`);let o=e(`rue:component:anchor`);a(i,o),u(d(v,{status:`success`,text:`Published`}),i,o);let c=e(`rue:component:anchor`);a(i,c),u(d(v,{status:`processing`,text:`Syncing data`}),i,c);let l=e(`rue:component:anchor`);a(i,l),t(()=>{let e=d(v,{dot:!0,status:`processing`,text:`Syncing edge cache`});r(()=>u(e,i,l))});let m=e(`rue:component:anchor`);return a(i,m),u(d(v,{count:7,color:`#f97316`,text:`待审核`}),i,m),n})}),i,o),i}),N=()=>c(n=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),u(d(O,{children:c(()=>{let n=s(),i=f(`div`,n);a(n,i),p(i,`flex flex-wrap items-center gap-8`);let o=e(`rue:component:anchor`);a(i,o);let c=d(k,{label:`APP`});t(()=>{let e=d(v,{dot:!0,color:`success`,children:c});r(()=>u(e,i,o))});let l=e(`rue:component:anchor`);a(i,l);let m=d(k,{label:`PR`});t(()=>{let e=d(v,{dot:!0,color:`warning`,text:`Pending review`,children:m});r(()=>u(e,i,l))});let h=e(`rue:component:anchor`);a(i,h),u(d(v,{count:5,children:d(k,{label:`Inbox`})}),i,h);let g=e(`rue:component:anchor`);return a(i,g),u(d(v,{count:12,color:`secondary`,text:`Messages`,children:d(k,{label:`Chat`})}),i,g),n})}),i,o),i}),P=()=>c(n=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),u(d(O,{children:c(()=>{let n=s(),i=f(`div`,n);a(n,i),p(i,`grid gap-4 lg:grid-cols-2`);let o=f(`div`,i);a(i,o),p(o,`flex flex-wrap items-center gap-8`);let c=e(`rue:component:anchor`);a(o,c),u(d(v,{count:0,children:d(k,{label:`Draft`})}),o,c);let l=e(`rue:component:anchor`);a(o,l);let m=d(k,{label:`Mail`});t(()=>{let e=d(v,{count:0,showZero:!0,color:`info`,text:`No unread`,children:m});r(()=>u(e,o,l))});let h=e(`rue:component:anchor`);a(o,h),u(d(v,{count:128,overflowCount:99,color:`error`,children:d(k,{label:`Alerts`})}),o,h);let g=f(`div`,i);a(i,g),p(g,`flex flex-wrap items-center gap-8`);let _=e(`rue:component:anchor`);a(g,_);let y=d(A,{label:`Releases`});t(()=>{let e=d(v,{count:8,offset:[8,6],color:`primary`,children:y});r(()=>u(e,g,_))});let b=e(`rue:component:anchor`);a(g,b);let x=d(A,{label:`Jobs`});return t(()=>{let e=d(v,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:x});r(()=>u(e,g,b))}),n})}),i,o),i}),oe=()=>c(n=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),u(d(O,{children:c(()=>{let n=s(),i=f(`div`,n);a(n,i),p(i,`flex flex-col gap-4`);let o=f(`div`,i);a(i,o),p(o,`flex items-center gap-3`);let c=f(`div`,o);a(o,c),p(c,`inline-grid *:[grid-area:1/1]`);let m=e(`rue:component:anchor`);a(c,m),t(()=>{let e=d(v,{dot:!0,color:`error`,className:`animate-ping`});r(()=>u(e,c,m))});let h=e(`rue:component:anchor`);a(c,h),t(()=>{let e=d(v,{dot:!0,color:`error`});r(()=>u(e,c,h))});let g=f(`span`,o);a(o,g),a(g,l(`Server is down`));let _=f(`div`,i);a(i,_),p(_,`flex items-center gap-3`);let y=e(`rue:component:anchor`);a(_,y),u(d(v,{color:`info`,className:`animate-bounce`}),_,y);let b=f(`span`,_);return a(_,b),a(b,l(`Unread messages`)),n})}),i,o),i}),F=()=>{let{tabBasic:h,tabScale:g,tabLabel:_,tabBadge:v,tabOverflow:b,tabMotion:x}=m(`useSetup:0:0`,()=>i(()=>({tabBasic:m(`ref:1:0`,()=>n(`preview`)),tabScale:m(`ref:1:1`,()=>n(`preview`)),tabLabel:m(`ref:1:2`,()=>n(`preview`)),tabBadge:m(`ref:1:3`,()=>n(`preview`)),tabOverflow:m(`ref:1:4`,()=>n(`preview`)),tabMotion:m(`ref:1:5`,()=>n(`preview`))})));return c(n=>{let i=s(),m=e(`rue:component:anchor`);return a(i,m),u(d(y,{children:c(()=>{let n=s(),i=f(`div`,n);a(n,i),p(i,`max-w-none prose prose-sm md:prose-base`);let c=f(`h1`,i);a(i,c),a(c,l(`Status 状态列表`));let m=f(`p`,i);a(i,m),p(m,`text-sm mt-3 mb-3`),a(m,l(`Status 现在既能保留 Rue 原来的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let y=f(`h2`,i);a(i,y),a(y,l(`何时使用`));let S=f(`ul`,i);a(i,S);let C=f(`li`,S);a(S,C),a(C,l(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let O=f(`li`,S);a(S,O),a(O,l(`想在现有内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let k=e(`rue:component:anchor`);a(i,k),t(()=>{let e=d(D,{title:`基础状态与语义`,summary:`保留最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:h,preview:ae,code:w});r(()=>u(e,i,k))});let A=e(`rue:component:anchor`);a(i,A),t(()=>{let e=d(D,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:j,code:T});r(()=>u(e,i,A))});let F=e(`rue:component:anchor`);a(i,F),t(()=>{let e=d(D,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:_,preview:M,code:ee});r(()=>u(e,i,F))});let I=e(`rue:component:anchor`);a(i,I),t(()=>{let e=d(D,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:v,preview:N,code:te});r(()=>u(e,i,I))});let L=e(`rue:component:anchor`);a(i,L),t(()=>{let e=d(D,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:b,preview:P,code:E});r(()=>u(e,i,L))});let R=e(`rue:component:anchor`);a(i,R),t(()=>{let e=d(D,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:x,preview:oe,code:ne});r(()=>u(e,i,R))});let z=f(`h2`,i);a(i,z),o(z,`id`,`status-api`),a(z,l(`API`));let B=f(`p`,i);a(i,B),a(B,l(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=e(`rue:component:anchor`);a(i,V),t(()=>{let e=d(ie,{rows:re});r(()=>u(e,i,V))});let H=f(`div`,i);a(i,H),p(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=f(`div`,H);a(H,U),p(U,`font-semibold`),a(U,l(`模式选择建议`));let W=f(`div`,H);a(H,W),p(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=f(`div`,W);a(W,G),a(G,l(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=f(`div`,W);a(W,K),a(K,l(`传 children 适合给按钮、卡片、入口块挂角标，并继续使用 count、dot、offset 等能力。`));let q=f(`h2`,i);a(i,q),a(q,l(`FAQ`));let J=f(`h3`,i);a(i,J),a(J,l(`status 和 color 同时传时谁优先？`));let Y=f(`p`,i);a(i,Y),a(Y,l(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=f(`h3`,i);a(i,X),a(X,l(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=f(`p`,i);a(i,Z),a(Z,l(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=f(`h3`,i);a(i,Q),a(Q,l(`count 为 0 时为什么默认不显示？`));let $=f(`p`,i);return a(i,$),a($,l(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),n})}),i,m),i})};export{F as default};