import{$t as e,Jt as t,Q as n,dt as r,et as i,in as a,l as o,lt as s,nt as c,o as l,rt as u,t as d,tt as f,zt as p}from"./vapor-runtime-DsQWl-IB.js";import{a as m,n as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as g}from"./Code-4SUSUwRg.js";import{t as _}from"./tabs-Duzh3URW.js";import{t as v}from"./status-jPYJNxqR.js";import{r as y}from"./SidebarPlaygroundDesign-EU389JDE.js";var b=[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],x=`card border border-base-200 bg-base-100 shadow-sm`,S=`card-body gap-4`,C=(e,t)=>t?`${e} ${t}`:e,w=`<div className="flex flex-wrap items-center gap-6">
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
</div>`,re=[{prop:`as`,description:`根节点标签，常用 span 或 div。`,type:`'span' | 'div'`,defaultValue:`span`},{prop:`ariaLabel`,description:`独立状态点或无文本场景下的无障碍标签。`,type:`string`,defaultValue:`-`},{prop:`size`,description:`状态点或数字徽标尺寸，支持 xs 到 xl，以及 small、default、medium、large 别名。`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'small' | 'default' | 'medium' | 'large'`,defaultValue:`-`},{prop:`color`,description:`预设主题色或自定义颜色字符串；传入时优先级高于 status。`,type:`StatusTone | string`,defaultValue:`-`},{prop:`status`,description:`语义状态，processing 会自动带 pulse 动效。`,type:`'default' | 'processing' | 'success' | 'warning' | 'error' | StatusTone`,defaultValue:`-`},{prop:`text`,description:`跟随状态点、数字或角标展示的说明文案。`,type:`any`,defaultValue:`-`},{prop:`count`,description:`数字、字符串或自定义内容；不传 children 时会切到独立 label/badge 模式。`,type:`any`,defaultValue:`null`},{prop:`showZero`,description:`count 为 0 时是否仍显示。`,type:`boolean`,defaultValue:`false`},{prop:`overflowCount`,description:`数字上限，超过后显示 n+。`,type:`number`,defaultValue:`99`},{prop:`dot`,description:`以状态点代替数字徽标。`,type:`boolean`,defaultValue:`false`},{prop:`offset`,description:`调整角标的水平和垂直偏移。`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`title`,description:`自定义角标 title；数字模式默认会回退到 count 文案。`,type:`string`,defaultValue:`-`},{prop:`className`,description:`作用于根节点的类名。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`作用于根节点的内联样式。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`children`,description:`传入后切到包裹内容的角标模式。`,type:`any`,defaultValue:`-`}],D=t=>o(a=>{let s=c(`div`,a);r(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=c(`div`,s);n(s,m),r(m,`flex flex-wrap items-start justify-between gap-3`);let h=c(`div`,m);n(m,h);let v=c(`h2`,h);n(h,v),r(v,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(v,u(`# `));let y=i(`rue:slot:anchor`);n(v,y),p(()=>{let n=t.title;e(()=>l(n,v,y))});let x=i(`rue:slot:anchor`);n(h,x),p(()=>{let a=t.summary?o(()=>{let a=f(),o=c(`p`,a);n(a,o),r(o,`m-0 text-sm opacity-70`);let s=i(`rue:slot:anchor`);return n(o,s),p(()=>{let n=t.summary;e(()=>l(n,o,s))}),a}):``;e(()=>l(a,h,x))});let S=i(`rue:component:anchor`);n(s,S),p(()=>{let n=d(_,{style:`box`,items:b,activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>l(n,s,S))});let C=i(`rue:slot:anchor`);return n(s,C),p(()=>{let r=t.tab.value===`preview`?t.preview():o(()=>{let r=f(),a=i(`rue:component:anchor`);return n(r,a),p(()=>{let n=d(g,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>l(n,r,a))}),r});e(()=>l(r,s,C))}),s}),O=t=>o(a=>{let o=c(`div`,a);p(()=>{r(o,C(x,t.className))});let s=c(`div`,o);n(o,s),p(()=>{r(s,S)});let u=i(`rue:children:anchor`);return n(s,u),p(()=>{let n=t.children;e(()=>l(n,s,u))}),o}),ie=t=>o(a=>{let d=c(`div`,a);r(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=c(`table`,d);n(d,m),r(m,`table table-zebra`);let g=c(`thead`,m);n(m,g);let _=c(`tr`,g);n(g,_);let v=c(`th`,_);n(_,v),n(v,u(`属性`));let y=c(`th`,_);n(_,y),n(y,u(`说明`));let b=c(`th`,_);n(_,b),n(b,u(`类型`));let x=c(`th`,_);n(_,x),n(x,u(`默认值`));let S=c(`tbody`,m);n(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return p(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,a,u,d)=>{l(o(()=>{let r=f(),a=c(`tr`,r);n(r,a),p(()=>{s(a,`key`,String(t.prop))});let o=c(`td`,a);n(a,o);let u=c(`code`,o);n(o,u);let d=i(`rue:slot:anchor`);n(u,d),p(()=>{let n=t.prop;e(()=>l(n,u,d))});let m=c(`td`,a);n(a,m);let h=i(`rue:slot:anchor`);n(m,h),p(()=>{let n=t.description;e(()=>l(n,m,h))});let g=c(`td`,a);n(a,g);let _=c(`code`,g);n(g,_);let v=i(`rue:slot:anchor`);n(_,v),p(()=>{let n=t.type;e(()=>l(n,_,v))});let y=c(`td`,a);n(a,y);let b=c(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),p(()=>{let n=t.defaultValue;e(()=>l(n,b,x))}),r}),r,a)}})}),d}),k=t=>o(a=>{let o=c(`div`,a);r(o,`flex h-14 w-14 items-center justify-center rounded-box bg-base-200 text-xs font-medium`);let s=i(`rue:slot:anchor`);return n(o,s),p(()=>{let n=t.label;e(()=>l(n,o,s))}),o}),A=t=>o(a=>{let o=c(`div`,a);r(o,`flex h-16 w-24 items-center justify-center rounded-box bg-base-200 text-sm font-medium`);let s=i(`rue:slot:anchor`);return n(o,s),p(()=>{let n=t.label;e(()=>l(n,o,s))}),o}),ae=()=>o(e=>{let t=f(),a=i(`rue:component:anchor`);return n(t,a),l(d(O,{children:o(()=>{let e=f(),t=c(`div`,e);n(e,t),r(t,`flex flex-wrap items-center gap-6`);let a=i(`rue:component:anchor`);n(t,a),l(d(v,{as:`span`}),t,a);let o=i(`rue:component:anchor`);n(t,o),l(d(v,{status:`processing`,text:`Deploying`}),t,o);let s=i(`rue:component:anchor`);n(t,s),l(d(v,{color:`success`,text:`Online`}),t,s);let u=i(`rue:component:anchor`);return n(t,u),l(d(v,{status:`warning`,text:`Window closing soon`}),t,u),e})}),t,a),t}),j=()=>o(e=>{let t=f(),a=i(`rue:component:anchor`);return n(t,a),l(d(O,{children:o(()=>{let e=f(),t=c(`div`,e);n(e,t),r(t,`grid gap-5`);let a=c(`div`,t);n(t,a),r(a,`flex flex-wrap items-center gap-4`);let o=i(`rue:component:anchor`);n(a,o),l(d(v,{ariaLabel:`status`,size:`xs`}),a,o);let s=i(`rue:component:anchor`);n(a,s),l(d(v,{ariaLabel:`status`,size:`sm`}),a,s);let u=i(`rue:component:anchor`);n(a,u),l(d(v,{ariaLabel:`status`,size:`md`}),a,u);let p=i(`rue:component:anchor`);n(a,p),l(d(v,{ariaLabel:`status`,size:`lg`}),a,p);let m=i(`rue:component:anchor`);n(a,m),l(d(v,{ariaLabel:`status`,size:`xl`}),a,m);let h=c(`div`,t);n(t,h),r(h,`flex flex-wrap items-center gap-4`);let g=i(`rue:component:anchor`);n(h,g),l(d(v,{ariaLabel:`status`,color:`primary`}),h,g);let _=i(`rue:component:anchor`);n(h,_),l(d(v,{ariaLabel:`status`,color:`secondary`}),h,_);let y=i(`rue:component:anchor`);n(h,y),l(d(v,{ariaLabel:`status`,color:`accent`}),h,y);let b=i(`rue:component:anchor`);n(h,b),l(d(v,{ariaLabel:`status`,color:`neutral`}),h,b);let x=i(`rue:component:anchor`);n(h,x),l(d(v,{ariaLabel:`info`,color:`info`}),h,x);let S=i(`rue:component:anchor`);n(h,S),l(d(v,{ariaLabel:`success`,color:`success`}),h,S);let C=i(`rue:component:anchor`);n(h,C),l(d(v,{ariaLabel:`warning`,color:`warning`}),h,C);let w=i(`rue:component:anchor`);return n(h,w),l(d(v,{ariaLabel:`error`,color:`error`}),h,w),e})}),t,a),t}),M=()=>o(t=>{let a=f(),s=i(`rue:component:anchor`);return n(a,s),l(d(O,{children:o(()=>{let t=f(),a=c(`div`,t);n(t,a),r(a,`flex flex-col items-start gap-3`);let o=i(`rue:component:anchor`);n(a,o),l(d(v,{status:`success`,text:`Published`}),a,o);let s=i(`rue:component:anchor`);n(a,s),l(d(v,{status:`processing`,text:`Syncing data`}),a,s);let u=i(`rue:component:anchor`);n(a,u),p(()=>{let t=d(v,{dot:!0,status:`processing`,text:`Syncing edge cache`});e(()=>l(t,a,u))});let m=i(`rue:component:anchor`);return n(a,m),l(d(v,{count:7,color:`#f97316`,text:`待审核`}),a,m),t})}),a,s),a}),N=()=>o(t=>{let a=f(),s=i(`rue:component:anchor`);return n(a,s),l(d(O,{children:o(()=>{let t=f(),a=c(`div`,t);n(t,a),r(a,`flex flex-wrap items-center gap-8`);let o=i(`rue:component:anchor`);n(a,o);let s=d(k,{label:`APP`});p(()=>{let t=d(v,{dot:!0,color:`success`,children:s});e(()=>l(t,a,o))});let u=i(`rue:component:anchor`);n(a,u);let m=d(k,{label:`PR`});p(()=>{let t=d(v,{dot:!0,color:`warning`,text:`Pending review`,children:m});e(()=>l(t,a,u))});let h=i(`rue:component:anchor`);n(a,h),l(d(v,{count:5,children:d(k,{label:`Inbox`})}),a,h);let g=i(`rue:component:anchor`);return n(a,g),l(d(v,{count:12,color:`secondary`,text:`Messages`,children:d(k,{label:`Chat`})}),a,g),t})}),a,s),a}),P=()=>o(t=>{let a=f(),s=i(`rue:component:anchor`);return n(a,s),l(d(O,{children:o(()=>{let t=f(),a=c(`div`,t);n(t,a),r(a,`grid gap-4 lg:grid-cols-2`);let o=c(`div`,a);n(a,o),r(o,`flex flex-wrap items-center gap-8`);let s=i(`rue:component:anchor`);n(o,s),l(d(v,{count:0,children:d(k,{label:`Draft`})}),o,s);let u=i(`rue:component:anchor`);n(o,u);let m=d(k,{label:`Mail`});p(()=>{let t=d(v,{count:0,showZero:!0,color:`info`,text:`No unread`,children:m});e(()=>l(t,o,u))});let h=i(`rue:component:anchor`);n(o,h),l(d(v,{count:128,overflowCount:99,color:`error`,children:d(k,{label:`Alerts`})}),o,h);let g=c(`div`,a);n(a,g),r(g,`flex flex-wrap items-center gap-8`);let _=i(`rue:component:anchor`);n(g,_);let y=d(A,{label:`Releases`});p(()=>{let t=d(v,{count:8,offset:[8,6],color:`primary`,children:y});e(()=>l(t,g,_))});let b=i(`rue:component:anchor`);n(g,b);let x=d(A,{label:`Jobs`});return p(()=>{let t=d(v,{dot:!0,offset:[10,8],color:`#0f766e`,text:`Custom offset`,children:x});e(()=>l(t,g,b))}),t})}),a,s),a}),oe=()=>o(t=>{let a=f(),s=i(`rue:component:anchor`);return n(a,s),l(d(O,{children:o(()=>{let t=f(),a=c(`div`,t);n(t,a),r(a,`flex flex-col gap-4`);let o=c(`div`,a);n(a,o),r(o,`flex items-center gap-3`);let s=c(`div`,o);n(o,s),r(s,`inline-grid *:[grid-area:1/1]`);let m=i(`rue:component:anchor`);n(s,m),p(()=>{let t=d(v,{dot:!0,color:`error`,className:`animate-ping`});e(()=>l(t,s,m))});let h=i(`rue:component:anchor`);n(s,h),p(()=>{let t=d(v,{dot:!0,color:`error`});e(()=>l(t,s,h))});let g=c(`span`,o);n(o,g),n(g,u(`Server is down`));let _=c(`div`,a);n(a,_),r(_,`flex items-center gap-3`);let y=i(`rue:component:anchor`);n(_,y),l(d(v,{color:`info`,className:`animate-bounce`}),_,y);let b=c(`span`,_);return n(_,b),n(b,u(`Unread messages`)),t})}),a,s),a}),F=()=>{let{tabBasic:h,tabScale:g,tabLabel:_,tabBadge:v,tabOverflow:b,tabMotion:x}=m(`useSetup:0:0`,()=>a(()=>({tabBasic:m(`ref:1:0`,()=>t(`preview`)),tabScale:m(`ref:1:1`,()=>t(`preview`)),tabLabel:m(`ref:1:2`,()=>t(`preview`)),tabBadge:m(`ref:1:3`,()=>t(`preview`)),tabOverflow:m(`ref:1:4`,()=>t(`preview`)),tabMotion:m(`ref:1:5`,()=>t(`preview`))})));return o(t=>{let a=f(),m=i(`rue:component:anchor`);return n(a,m),l(d(y,{children:o(()=>{let t=f(),a=c(`div`,t);n(t,a),r(a,`max-w-none prose prose-sm md:prose-base`);let o=c(`h1`,a);n(a,o),n(o,u(`Status 状态列表`));let m=c(`p`,a);n(a,m),r(m,`text-sm mt-3 mb-3`),n(m,u(`Status 现在既能使用 Rue 基础的状态点写法，也能像轻量 Badge 一样包裹内容，统一承载 dot、count、text、 overflowCount 和 offset。不传 children 时，它会自动切到独立的 label/badge 模式；传入 children 后，则变成右上角角标。`));let y=c(`h2`,a);n(a,y),n(y,u(`何时使用`));let S=c(`ul`,a);n(a,S);let C=c(`li`,S);n(S,C),n(C,u(`需要一个很轻的状态点，表达在线、同步中、告警、错误这类语义状态。`));let O=c(`li`,S);n(S,O),n(O,u(`想在当前内容右上角挂 dot、count 或文案角标，但又不想引入更重的 Badge 结构。`));let k=i(`rue:component:anchor`);n(a,k),p(()=>{let t=d(D,{title:`基础状态与语义`,summary:`展示最基础的状态点体验，同时支持用 status 或 color 直接表达语义。`,tab:h,preview:ae,code:w});e(()=>l(t,a,k))});let A=i(`rue:component:anchor`);n(a,A),p(()=>{let t=d(D,{title:`尺寸与色板`,summary:`单独作为状态点使用时，优先关注 size 和 color；它们仍然保持和 daisyUI 一致的视觉基底。`,tab:g,preview:j,code:T});e(()=>l(t,a,A))});let F=i(`rue:component:anchor`);n(a,F),p(()=>{let t=d(D,{title:`文案与 label 模式`,summary:`不传 children 时，text 会和状态点、dot 或 count 自动组合成一条状态说明。`,tab:_,preview:M,code:ee});e(()=>l(t,a,F))});let I=i(`rue:component:anchor`);n(a,I),p(()=>{let t=d(D,{title:`包裹内容的角标模式`,summary:`传入 children 后会自动切到角标模式，适合消息入口、资源卡片和小型业务面板。`,tab:v,preview:N,code:te});e(()=>l(t,a,I))});let L=i(`rue:component:anchor`);n(a,L),p(()=>{let t=d(D,{title:`零值、溢出与偏移`,summary:`showZero、overflowCount 和 offset 可以覆盖更贴近真实业务的边界情况。`,tab:b,preview:P,code:E});e(()=>l(t,a,L))});let R=i(`rue:component:anchor`);n(a,R),p(()=>{let t=d(D,{title:`动效状态`,summary:`Status 本身只是节点，动画可以继续通过 className 叠加，适合告警和提醒场景。`,tab:x,preview:oe,code:ne});e(()=>l(t,a,R))});let z=c(`h2`,a);n(a,z),s(z,`id`,`status-api`),n(z,u(`API`));let B=c(`p`,a);n(a,B),n(B,u(`Status 只有一个根组件，但会根据是否传入 children 自动切换成独立状态模式或包裹内容的角标模式。`));let V=i(`rue:component:anchor`);n(a,V),p(()=>{let t=d(ie,{rows:re});e(()=>l(t,a,V))});let H=c(`div`,a);n(a,H),r(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=c(`div`,H);n(H,U),r(U,`font-semibold`),n(U,u(`模式选择建议`));let W=c(`div`,H);n(H,W),r(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=c(`div`,W);n(W,G),n(G,u(`不传 children 适合单独状态点、带文案的 label，以及独立数字/点状提示。`));let K=c(`div`,W);n(W,K),n(K,u(`传 children 适合给按钮、卡片、入口块挂角标，并可以使用 count、dot、offset 等能力。`));let q=c(`h2`,a);n(a,q),n(q,u(`FAQ`));let J=c(`h3`,a);n(a,J),n(J,u(`status 和 color 同时传时谁优先？`));let Y=c(`p`,a);n(a,Y),n(Y,u(`color 优先级更高。status 更偏语义表达，color 则适合覆盖成品牌色或业务色。`));let X=c(`h3`,a);n(a,X),n(X,u(`为什么有时候会显示成一条 label，而不是右上角角标？`));let Z=c(`p`,a);n(a,Z),n(Z,u(`当你传入 text，但没有传 children 时，Status 会自动用独立模式渲染成“状态点/数字 + 文案”的一条说明。只有传入 children 后，才会切到右上角挂载角标的模式。`));let Q=c(`h3`,a);n(a,Q),n(Q,u(`count 为 0 时为什么默认不显示？`));let $=c(`p`,a);return n(a,$),n($,u(`这是为了保持和常见 badge 组件一致的默认行为。如果业务上需要明确展示 0，加上 showZero 即可。`)),t})}),a,m),a})};export{F as default};