import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,xt as h}from"./vapor-runtime-ACs_OvwU.js";import{a as g,n as _}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as v,t as y}from"./src-B0RvnZVV.js";import{n as b}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as x}from"./Code-CliOXHNE.js";import{t as S}from"./tabs-CPymQe79.js";import{t as C}from"./stack-aHmzgo0K.js";import{t as w}from"./preview-test-gate-CxnSZVJe.js";var T=e=>c(t=>{let i=a(`div`,t);m(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=a(`div`,i);r(i,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let f=a(`div`,s);r(s,f);let g=a(`h2`,f);r(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;h(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(f,v),l(()=>{let t=e.summary?c(()=>{let t=n(),i=a(`p`,t);r(t,i),m(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(i,s),l(()=>{let t=e.summary;h(()=>u(t,i,s))}),t}):``;h(()=>u(t,f,v))});let y=o(`rue:component:anchor`);r(i,y),l(()=>{let t=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>u(t,i,y))});let b=o(`rue:slot:anchor`);return r(i,b),l(()=>{let t=e.tab.value===`preview`?w(e.title,e.preview):c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>u(n,t,i))}),t});h(()=>u(t,i,b))}),i}),ee=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let g=a(`tr`,p);r(p,g);let v=a(`th`,g);r(g,v),r(v,d(`属性`));let y=a(`th`,g);r(g,y),r(y,d(`说明`));let b=a(`th`,g);r(g,b),r(b,d(`类型`));let x=a(`th`,g);r(g,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;h(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;h(()=>u(e,p,m))});let g=a(`td`,s);r(s,g);let _=a(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;h(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;h(()=>u(e,b,x))}),i}),i,s)}})}),s}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],E=()=>{let{tabs:_}=g(`useSetup:0:0`,()=>t(()=>({tabs:{basic:g(`ref:1:0`,()=>s(`preview`)),images:g(`ref:1:1`,()=>s(`preview`)),cards:g(`ref:1:2`,()=>s(`preview`)),alignment:g(`ref:1:3`,()=>s(`preview`)),reverse:g(`ref:1:4`,()=>s(`preview`)),shadow:g(`ref:1:5`,()=>s(`preview`)),notifications:g(`ref:1:6`,()=>s(`preview`)),scene:g(`ref:1:7`,()=>s(`preview`))}})));return c(t=>{let s=n(),g=o(`rue:component:anchor`);return r(s,g),u(p(b,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,s);r(s,c),r(c,d(`Stack 堆叠容器`));let g=a(`p`,s);r(s,g),m(g,`text-sm mt-3 mb-3`),r(g,d(`Stack 保留 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了原有的`));let b=a(`code`,g);r(g,b),r(b,d(`vertical`)),r(g,d(`和`));let x=a(`code`,g);r(g,x),r(x,d(`horizontal`)),r(g,d(`，现在还支持`));let S=a(`code`,g);r(g,S),r(S,d(`placement`));let w=i(g);r(g,w),f(w,` `),r(g,d(`组合定位，以及`));let E=a(`code`,g);r(g,E),r(E,d(`reverse`)),r(g,d(`反向层级。`));let D=a(`h2`,s);r(s,D),r(D,d(`何时使用`));let O=a(`ul`,s);r(s,O);let k=a(`li`,O);r(O,k),r(k,d(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let A=a(`li`,O);r(O,A),r(A,d(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let j=a(`li`,O);r(O,j),r(j,d(`需要保留已有堆叠视觉，但希望额外控制最新项是否位于最上层。`));let M=o(`rue:component:anchor`);r(s,M),l(()=>{let e=p(T,{title:`基础堆叠`,summary:`保留原来的 3 div stack demo，作为最小可用写法。`,tab:_.basic,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(C,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[y(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),y(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),y(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`});h(()=>u(e,s,M))});let ne=o(`rue:component:anchor`);r(s,ne),l(()=>{let e=p(T,{title:`图片堆叠`,summary:`保留原来的 stacked images，用于相册封面或图库预览。`,tab:_.images,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(C,{className:`w-48`,"data-testid":`stack-images`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
  <img
    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
    alt="Stack example 1"
    className="rounded-box"
  />
  <img
    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
    alt="Stack example 2"
    className="rounded-box"
  />
  <img
    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
    alt="Stack example 3"
    className="rounded-box"
  />
</Stack>`});h(()=>u(e,s,ne))});let re=o(`rue:component:anchor`);r(s,re),l(()=>{let e=p(T,{title:`卡片堆叠`,summary:`保留原来的 stacked cards，适合做 deck、ticket 或文件层。`,tab:_.cards,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(C,{className:`size-28`,"data-testid":`stack-cards`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});h(()=>u(e,s,re))});let ie=o(`rue:component:anchor`);r(s,ie),l(()=>{let e=p(T,{title:`对齐与 Placement`,summary:`旧的 vertical / horizontal 继续可用；新增 placement 可以直接表达组合定位。`,tab:_.alignment,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),v(C,{className:`size-28`,vertical:`top`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),v(C,{className:`size-28`,horizontal:`start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),v(C,{className:`size-28`,placement:`top-end`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),v(C,{className:`size-28`,placement:`bottom-start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>

<Stack className="size-28" horizontal="start">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>

<Stack className="size-28" placement="top-end">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>

<Stack className="size-28" placement="bottom-start">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});h(()=>u(e,s,ie))});let ae=o(`rue:component:anchor`);r(s,ae),l(()=>{let e=p(T,{title:`反向层级`,summary:`reverse 适合把最新版本、最新消息或最新封面放在最上层。`,tab:_.reverse,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),v(C,{className:`w-44`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),v(C,{className:`w-44`,reverse:!0,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-primary/30 bg-primary/5 p-4 text-primary`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary/30 bg-primary/5 p-4 text-primary">v3 Final copy</div>
</Stack>`});h(()=>u(e,s,ae))});let oe=o(`rue:component:anchor`);r(s,oe),l(()=>{let e=p(T,{title:`阴影层次`,summary:`保留原来的 shadow 示例，适合强调卡片深度和层级关系。`,tab:_.shadow,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(C,{children:[y(`div`,{className:`card bg-base-200 text-center shadow-md`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card bg-base-200 text-center shadow`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`});h(()=>u(e,s,oe))});let se=o(`rue:component:anchor`);r(s,se),l(()=>{let e=p(T,{title:`通知堆叠`,summary:`保留原来的通知 demo，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:_.notifications,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(C,{className:`h-56 w-full max-w-md`,reverse:!0,children:[y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 1`}),y(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 2`}),y(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),y(`div`,{className:`card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title text-success`,children:`Notification 3`}),y(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="h-56 w-full max-w-md" reverse>
  <div className="card h-full bg-base-100 shadow-md">
    <div className="card-body">
      <h2 className="card-title">Notification 1</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div className="card h-full bg-base-100 shadow-md">
    <div className="card-body">
      <h2 className="card-title">Notification 2</h2>
      <p>Deploy finished successfully. Tap here to open the report.</p>
    </div>
  </div>
  <div className="card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15">
    <div className="card-body">
      <h2 className="card-title text-success">Notification 3</h2>
      <p>Latest release is live. Tap here to share the changelog.</p>
    </div>
  </div>
</Stack>`});h(()=>u(e,s,se))});let ce=o(`rue:component:anchor`);r(s,ce),l(()=>{let e=p(T,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:_.scene,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),v(C,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),y(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),y(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),v(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),y(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),v(C,{className:`w-56`,placement:`top-start`,reverse:!0,children:[y(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),y(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),y(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`});h(()=>u(e,s,ce))});let N=a(`h2`,s);r(s,N),e(N,`id`,`stack-api`),r(N,d(`API`));let P=a(`p`,s);r(s,P),r(P,d(`当前页面展示的是 Stack 的完整可用 API，旧属性保留，新属性作为语义增强层补充进来。`));let F=o(`rue:component:anchor`);r(s,F),l(()=>{let e=p(ee,{rows:te});h(()=>u(e,s,F))});let I=a(`div`,s);r(s,I),m(I,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let L=a(`h3`,I);r(I,L),m(L,`mt-0 mb-3 text-base font-semibold`),r(L,d(`placement 快捷映射`));let R=a(`div`,I);r(I,R),m(R,`grid gap-2 text-sm md:grid-cols-2`);let z=a(`div`,R);r(R,z);let B=a(`code`,z);r(z,B),r(B,d(`placement="top"`)),r(z,d(`→`));let V=a(`code`,z);r(z,V),r(V,d(`vertical="top"`));let H=a(`div`,R);r(R,H);let U=a(`code`,H);r(H,U),r(U,d(`placement="bottom"`)),r(H,d(`→`));let W=a(`code`,H);r(H,W),r(W,d(`vertical="bottom"`));let G=a(`div`,R);r(R,G);let K=a(`code`,G);r(G,K),r(K,d(`placement="start"`)),r(G,d(`→`));let le=a(`code`,G);r(G,le),r(le,d(`horizontal="start"`));let q=a(`div`,R);r(R,q);let ue=a(`code`,q);r(q,ue),r(ue,d(`placement="end"`)),r(q,d(`→`));let de=a(`code`,q);r(q,de),r(de,d(`horizontal="end"`));let J=a(`div`,R);r(R,J);let fe=a(`code`,J);r(J,fe),r(fe,d(`placement="top-start"`)),r(J,d(`→`));let pe=a(`code`,J);r(J,pe),r(pe,d(`vertical="top" + horizontal="start"`));let Y=a(`div`,R);r(R,Y);let me=a(`code`,Y);r(Y,me),r(me,d(`placement="bottom-end"`)),r(Y,d(`→`));let he=i(Y);r(Y,he),f(he,` `);let ge=a(`code`,Y);r(Y,ge),r(ge,d(`vertical="bottom" + horizontal="end"`));let _e=a(`h2`,s);r(s,_e),r(_e,d(`FAQ`));let ve=a(`h3`,s);r(s,ve),r(ve,d(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=a(`p`,s);r(s,X);let ye=a(`code`,X);r(X,ye),r(ye,d(`placement`)),r(X,d(`适合快速写组合定位，尤其是`));let be=a(`code`,X);r(X,be),r(be,d(`top-end`)),r(X,d(`、`));let xe=a(`code`,X);r(X,xe),r(xe,d(`bottom-start`)),r(X,d(`这类常见场景。 如果你已经在用旧 API，也可以继续沿用原来的`));let Se=i(X);r(X,Se),f(Se,` `);let Z=a(`code`,X);r(X,Z),r(Z,d(`vertical`)),r(X,d(`和`));let Ce=a(`code`,X);r(X,Ce),r(Ce,d(`horizontal`)),r(X,d(`。`));let we=a(`h3`,s);r(s,we),r(we,d(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=a(`p`,s);r(s,Q),r(Q,d(`显式传入的`));let Te=a(`code`,Q);r(Q,Te),r(Te,d(`vertical`)),r(Q,d(`、`));let Ee=a(`code`,Q);r(Q,Ee),r(Ee,d(`horizontal`)),r(Q,d(`优先级更高。也就是说，`));let De=a(`code`,Q);r(Q,De),r(De,d(`placement`)),r(Q,d(`更像一个快捷预设，而不是强制覆盖层。`));let Oe=a(`h3`,s);r(s,Oe),r(Oe,d(`reverse 会改变样式还是改变 DOM 顺序？`));let $=a(`p`,s);r(s,$);let ke=a(`code`,$);r($,ke),r(ke,d(`reverse`));let Ae=i($);return r($,Ae),f(Ae,` `),r($,d(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),t})}),s,g),s})};export{E as default};