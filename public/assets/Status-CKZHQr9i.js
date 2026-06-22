import{Q as e,Vt as t,Xt as n,dt as r,it as i,l as a,nt as o,o as s,on as c,pt as l,rt as u,t as d,tn as f,tt as p}from"./vapor-runtime-x7F5M-49.js";import{a as m,n as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as g}from"./Code-C5NjdoiC.js";import{t as _}from"./tabs-C4UF43sZ.js";import{t as v}from"./status-BcOVQJSg.js";import{r as y}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var b=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],x=`card border border-base-200 bg-base-100 shadow-sm`,S=`card-body gap-4`,C=(e,t)=>t?`${e} ${t}`:e,w=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,re=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],D=n=>a(r=>{let c=u(`div`,r);l(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=u(`div`,c);e(c,m),l(m,`flex flex-wrap items-start justify-between gap-3`);let h=u(`div`,m);e(m,h);let v=u(`h2`,h);e(h,v),l(v,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(v,i(`# `));let y=p(`rue:slot:anchor`);e(v,y),t(()=>{let e=n.title;f(()=>s(e,v,y))});let x=p(`rue:slot:anchor`);e(h,x),t(()=>{let r=n.summary?a(()=>{let r=o(),i=u(`p`,r);e(r,i),l(i,`m-0 text-sm opacity-70`);let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;f(()=>s(e,i,a))}),r}):``;f(()=>s(r,h,x))});let S=p(`rue:component:anchor`);e(c,S),t(()=>{let e=d(_,{style:`box`,items:b,activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});f(()=>s(e,c,S))});let C=p(`rue:slot:anchor`);return e(c,C),t(()=>{let r=n.tab.value===`preview`?n.preview():a(()=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),t(()=>{let e=d(g,{className:`mt-2`,lang:`tsx`,code:n.code});f(()=>s(e,r,i))}),r});f(()=>s(r,c,C))}),c}),O=n=>a(r=>{let i=u(`div`,r);t(()=>{l(i,C(x,n.className))});let a=u(`div`,i);e(i,a),t(()=>{l(a,S)});let o=p(`rue:children:anchor`);return e(a,o),t(()=>{let e=n.children;f(()=>s(e,a,o))}),i}),ie=n=>a(c=>{let d=u(`div`,c);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=u(`table`,d);e(d,m),l(m,`table table-zebra`);let g=u(`thead`,m);e(m,g);let _=u(`tr`,g);e(g,_);let v=u(`th`,_);e(_,v),e(v,i(`属性`));let y=u(`th`,_);e(_,y),e(y,i(`说明`));let b=u(`th`,_);e(_,b),e(b,i(`类型`));let x=u(`th`,_);e(_,x),e(x,i(`默认值`));let S=u(`tbody`,m);e(m,S);let C=p(`rue:list:start`),w=p(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=h({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{s(a(()=>{let i=o(),a=u(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let c=u(`td`,a);e(a,c);let l=u(`code`,c);e(c,l);let d=p(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.prop;f(()=>s(e,l,d))});let m=u(`td`,a);e(a,m);let h=p(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.description;f(()=>s(e,m,h))});let g=u(`td`,a);e(a,g);let _=u(`code`,g);e(g,_);let v=p(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;f(()=>s(e,_,v))});let y=u(`td`,a);e(a,y);let b=u(`code`,y);e(y,b);let x=p(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;f(()=>s(e,b,x))}),i}),i,c)}})}),d}),k=n=>a(r=>{let i=u(`div`,r);l(i,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.label;f(()=>s(e,i,a))}),i}),A=n=>a(r=>{let i=u(`div`,r);l(i,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.label;f(()=>s(e,i,a))}),i}),ae=()=>a(t=>{let n=o(),r=p(`rue:component:anchor`);return e(n,r),s(d(O,{children:a(()=>{let t=o(),n=u(`div`,t);e(t,n),l(n,`flex flex-wrap items-center gap-6`);let r=p(`rue:component:anchor`);e(n,r),s(d(v,{as:`span`}),n,r);let i=p(`rue:component:anchor`);e(n,i),s(d(v,{status:`processing`,text:`Deploying`}),n,i);let a=p(`rue:component:anchor`);e(n,a),s(d(v,{color:`success`,text:`Online`}),n,a);let c=p(`rue:component:anchor`);return e(n,c),s(d(v,{status:`warning`,text:`Window closing soon`}),n,c),t})}),n,r),n}),j=()=>a(t=>{let n=o(),r=p(`rue:component:anchor`);return e(n,r),s(d(O,{children:a(()=>{let t=o(),n=u(`div`,t);e(t,n),l(n,`grid gap-5`);let r=u(`div`,n);e(n,r),l(r,`flex flex-wrap items-center gap-4`);let i=p(`rue:component:anchor`);e(r,i),s(d(v,{ariaLabel:`status`,size:`xs`}),r,i);let a=p(`rue:component:anchor`);e(r,a),s(d(v,{ariaLabel:`status`,size:`sm`}),r,a);let c=p(`rue:component:anchor`);e(r,c),s(d(v,{ariaLabel:`status`,size:`md`}),r,c);let f=p(`rue:component:anchor`);e(r,f),s(d(v,{ariaLabel:`status`,size:`lg`}),r,f);let m=p(`rue:component:anchor`);e(r,m),s(d(v,{ariaLabel:`status`,size:`xl`}),r,m);let h=u(`div`,n);e(n,h),l(h,`flex flex-wrap items-center gap-4`);let g=p(`rue:component:anchor`);e(h,g),s(d(v,{ariaLabel:`status`,color:`primary`}),h,g);let _=p(`rue:component:anchor`);e(h,_),s(d(v,{ariaLabel:`status`,color:`secondary`}),h,_);let y=p(`rue:component:anchor`);e(h,y),s(d(v,{ariaLabel:`status`,color:`accent`}),h,y);let b=p(`rue:component:anchor`);e(h,b),s(d(v,{ariaLabel:`status`,color:`neutral`}),h,b);let x=p(`rue:component:anchor`);e(h,x),s(d(v,{ariaLabel:`info`,color:`info`}),h,x);let S=p(`rue:component:anchor`);e(h,S),s(d(v,{ariaLabel:`success`,color:`success`}),h,S);let C=p(`rue:component:anchor`);e(h,C),s(d(v,{ariaLabel:`warning`,color:`warning`}),h,C);let w=p(`rue:component:anchor`);return e(h,w),s(d(v,{ariaLabel:`error`,color:`error`}),h,w),t})}),n,r),n}),M=()=>a(n=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),s(d(O,{children:a(()=>{let n=o(),r=u(`div`,n);e(n,r),l(r,`flex flex-col items-start gap-3`);let i=p(`rue:component:anchor`);e(r,i),s(d(v,{status:`success`,text:`Published`}),r,i);let a=p(`rue:component:anchor`);e(r,a),s(d(v,{status:`processing`,text:`Syncing data`}),r,a);let c=p(`rue:component:anchor`);e(r,c),t(()=>{let e=d(v,{dot:!0,status:`processing`,text:`Syncing edge cache`});f(()=>s(e,r,c))});let m=p(`rue:component:anchor`);return e(r,m),s(d(v,{count:7,color:`#f97316`,text:`待审核`}),r,m),n})}),r,i),r}),N=()=>a(n=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),s(d(O,{children:a(()=>{let n=o(),r=u(`div`,n);e(n,r),l(r,`flex flex-wrap items-center gap-8`);let i=p(`rue:component:anchor`);e(r,i);let a=d(k,{label:`APP`});t(()=>{let e=d(v,{dot:!0,color:`success`,children:a});f(()=>s(e,r,i))});let c=p(`rue:component:anchor`);e(r,c);let m=d(k,{label:`PR`});t(()=>{let e=d(v,{dot:!0,color:`warning`,text:`Pending review`,children:m});f(()=>s(e,r,c))});let h=p(`rue:component:anchor`);e(r,h),s(d(v,{count:5,children:d(k,{label:`Inbox`})}),r,h);let g=p(`rue:component:anchor`);return e(r,g),s(d(v,{count:12,color:`secondary`,text:`Messages`,children:d(k,{label:`Chat`})}),r,g),n})}),r,i),r}),P=()=>a(n=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),s(d(O,{children:a(()=>{let n=o(),r=u(`div`,n);e(n,r),l(r,`grid gap-4 lg:grid-cols-2`);let i=u(`div`,r);e(r,i),l(i,`flex flex-wrap items-center gap-8`);let a=p(`rue:component:anchor`);e(i,a),s(d(v,{count:0,children:d(k,{label:`Draft`})}),i,a);let c=p(`rue:component:anchor`);e(i,c);let m=d(k,{label:`Mail`});t(()=>{let e=d(v,{count:0,showZero:!0,color:`info`,text:`No unread`,children:m});f(()=>s(e,i,c))});let h=p(`rue:component:anchor`);e(i,h),s(d(v,{count:128,overflowCount:99,color:`error`,children:d(k,{label:`Alerts`})}),i,h);let g=u(`div`,r);e(r,g),l(g,`flex flex-wrap items-center gap-8`);let _=p(`rue:component:anchor`);e(g,_);let y=d(A,{label:`Releases`});t(()=>{let e=d(v,{count:8,offset:[8,6],color:`primary`,children:y});f(()=>s(e,g,_))});let b=p(`rue:component:anchor`);e(g,b);let x=d(A,{label:`Jobs`});return t(()=>{let e=d(v,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:x});f(()=>s(e,g,b))}),n})}),r,i),r}),oe=()=>a(n=>{let r=o(),c=p(`rue:component:anchor`);return e(r,c),s(d(O,{children:a(()=>{let n=o(),r=u(`div`,n);e(n,r),l(r,`flex flex-col gap-4`);let a=u(`div`,r);e(r,a),l(a,`flex items-center gap-3`);let c=u(`div`,a);e(a,c),l(c,`inline-grid *:[grid-area:1/1]`);let m=p(`rue:component:anchor`);e(c,m),t(()=>{let e=d(v,{dot:!0,color:`error`,className:`animate-ping`});f(()=>s(e,c,m))});let h=p(`rue:component:anchor`);e(c,h),t(()=>{let e=d(v,{dot:!0,color:`error`});f(()=>s(e,c,h))});let g=u(`span`,a);e(a,g),e(g,i(`Server is down`));let _=u(`div`,r);e(r,_),l(_,`flex items-center gap-3`);let y=p(`rue:component:anchor`);e(_,y),s(d(v,{color:`info`,className:`animate-bounce`}),_,y);let b=u(`span`,_);return e(_,b),e(b,i(`Unread messages`)),n})}),r,c),r}),F=()=>{let{tabBasic:h,tabScale:g,tabLabel:_,tabBadge:v,tabOverflow:b,tabMotion:x}=m(`useSetup:0:0`,()=>c(()=>({tabBasic:m(`ref:1:0`,()=>n(`preview`)),tabScale:m(`ref:1:1`,()=>n(`preview`)),tabLabel:m(`ref:1:2`,()=>n(`preview`)),tabBadge:m(`ref:1:3`,()=>n(`preview`)),tabOverflow:m(`ref:1:4`,()=>n(`preview`)),tabMotion:m(`ref:1:5`,()=>n(`preview`))})));return a(n=>{let c=o(),m=p(`rue:component:anchor`);return e(c,m),s(d(y,{children:a(()=>{let n=o(),a=u(`div`,n);e(n,a),l(a,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,a);e(a,c),e(c,i(`Status 状态列表`));let m=u(`p`,a);e(a,m),l(m,`text-sm mt-3 mb-3`),e(m,i(`Status 现在既能使用 Rue 基础的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let y=u(`h2`,a);e(a,y),e(y,i(`何时使用`));let S=u(`ul`,a);e(a,S);let C=u(`li`,S);e(S,C),e(C,i(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let O=u(`li`,S);e(S,O),e(O,i(`想在当前内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let k=p(`rue:component:anchor`);e(a,k),t(()=>{let e=d(D,{title:`基础状态与语义`,summary:`展示最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:h,preview:ae,code:w});f(()=>s(e,a,k))});let A=p(`rue:component:anchor`);e(a,A),t(()=>{let e=d(D,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:j,code:T});f(()=>s(e,a,A))});let F=p(`rue:component:anchor`);e(a,F),t(()=>{let e=d(D,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:_,preview:M,code:ee});f(()=>s(e,a,F))});let I=p(`rue:component:anchor`);e(a,I),t(()=>{let e=d(D,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:v,preview:N,code:te});f(()=>s(e,a,I))});let L=p(`rue:component:anchor`);e(a,L),t(()=>{let e=d(D,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:b,preview:P,code:E});f(()=>s(e,a,L))});let R=p(`rue:component:anchor`);e(a,R),t(()=>{let e=d(D,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:x,preview:oe,code:ne});f(()=>s(e,a,R))});let z=u(`h2`,a);e(a,z),r(z,`id`,`status-api`),e(z,i(`API`));let B=u(`p`,a);e(a,B),e(B,i(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=p(`rue:component:anchor`);e(a,V),t(()=>{let e=d(ie,{rows:re});f(()=>s(e,a,V))});let H=u(`div`,a);e(a,H),l(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=u(`div`,H);e(H,U),l(U,`font-semibold`),e(U,i(`模式选择建议`));let W=u(`div`,H);e(H,W),l(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=u(`div`,W);e(W,G),e(G,i(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=u(`div`,W);e(W,K),e(K,i(`传 children 适合给按钮、卡片、入口块挂角标，并可以使用 count、dot、offset 等能力。`));let q=u(`h2`,a);e(a,q),e(q,i(`FAQ`));let J=u(`h3`,a);e(a,J),e(J,i(`status 和 color 同时传时谁优先？`));let Y=u(`p`,a);e(a,Y),e(Y,i(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=u(`h3`,a);e(a,X),e(X,i(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=u(`p`,a);e(a,Z),e(Z,i(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=u(`h3`,a);e(a,Q),e(Q,i(`count 为 0 时为什么默认不显示？`));let $=u(`p`,a);return e(a,$),e($,i(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),n})}),c,m),c})};export{F as default};