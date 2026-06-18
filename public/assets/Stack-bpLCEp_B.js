import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,qt as f,s as p,st as m,t as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g,n as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as v,i as y}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as b}from"./Code-CZqShVUj.js";import{t as x}from"./tabs-BBuGEPV7.js";import{t as S}from"./stack-DGfsvGHw.js";import{r as C}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as w}from"./preview-test-gate-PvTX1w6L.js";var T=r=>u(c=>{let l=i(`div`,c);m(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=i(`div`,l);n(l,d),m(d,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,d);n(d,f);let g=i(`h2`,f);n(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,e(`# `));let _=a(`rue:slot:anchor`);n(g,_),o(()=>{let e=r.title;t(()=>p(e,g,_))});let v=a(`rue:slot:anchor`);n(f,v),o(()=>{let e=r.summary?u(()=>{let e=s(),c=i(`p`,e);n(e,c),m(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>p(e,c,l))}),e}):``;t(()=>p(e,f,v))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>p(e,l,y))});let S=a(`rue:slot:anchor`);return n(l,S),o(()=>{let e=r.tab.value===`preview`?w(r.title,r.preview):u(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>p(n,e,i))}),e});t(()=>p(e,l,S))}),l}),ee=r=>u(l=>{let d=i(`div`,l);m(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,d);n(d,f),m(f,`table table-zebra`);let h=i(`thead`,f);n(f,h);let g=i(`tr`,h);n(h,g);let v=i(`th`,g);n(g,v),n(v,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=_({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,d,f)=>{p(u(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>p(n,d,f))});let m=i(`td`,l);n(l,m);let h=a(`rue:slot:anchor`);n(m,h),o(()=>{let n=e.description;t(()=>p(n,m,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>p(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>p(n,b,x))}),r}),r,l)}})}),d}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],E=()=>{let{tabs:_}=g(`useSetup:0:0`,()=>f(()=>({tabs:{basic:g(`ref:1:0`,()=>r(`preview`)),images:g(`ref:1:1`,()=>r(`preview`)),cards:g(`ref:1:2`,()=>r(`preview`)),alignment:g(`ref:1:3`,()=>r(`preview`)),reverse:g(`ref:1:4`,()=>r(`preview`)),shadow:g(`ref:1:5`,()=>r(`preview`)),notifications:g(`ref:1:6`,()=>r(`preview`)),scene:g(`ref:1:7`,()=>r(`preview`))}})));return u(r=>{let f=s(),g=a(`rue:component:anchor`);return n(f,g),p(h(C,{children:u(()=>{let r=s(),u=i(`div`,r);n(r,u),m(u,`max-w-none prose prose-sm md:prose-base`);let f=i(`h1`,u);n(u,f),n(f,e(`Stack 堆叠容器`));let g=i(`p`,u);n(u,g),m(g,`text-sm mt-3 mb-3`),n(g,e(`Stack 保留 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了原有的`));let b=i(`code`,g);n(g,b),n(b,e(`vertical`)),n(g,e(`和`));let x=i(`code`,g);n(g,x),n(x,e(`horizontal`)),n(g,e(`，现在还支持`));let C=i(`code`,g);n(g,C),n(C,e(`placement`));let w=l(g);n(g,w),d(w,` `),n(g,e(`组合定位，以及`));let E=i(`code`,g);n(g,E),n(E,e(`reverse`)),n(g,e(`反向层级。`));let D=i(`h2`,u);n(u,D),n(D,e(`何时使用`));let O=i(`ul`,u);n(u,O);let k=i(`li`,O);n(O,k),n(k,e(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let A=i(`li`,O);n(O,A),n(A,e(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let j=i(`li`,O);n(O,j),n(j,e(`需要保留已有堆叠视觉，但希望额外控制最新项是否位于最上层。`));let M=a(`rue:component:anchor`);n(u,M),o(()=>{let e=h(T,{title:`基础堆叠`,summary:`保留原来的 3 div stack demo，作为最小可用写法。`,tab:_.basic,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[y(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),y(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),y(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`});t(()=>p(e,u,M))});let ne=a(`rue:component:anchor`);n(u,ne),o(()=>{let e=h(T,{title:`图片堆叠`,summary:`保留原来的 stacked images，用于相册封面或图库预览。`,tab:_.images,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`w-48`,"data-testid":`stack-images`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
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
</Stack>`});t(()=>p(e,u,ne))});let re=a(`rue:component:anchor`);n(u,re),o(()=>{let e=h(T,{title:`卡片堆叠`,summary:`保留原来的 stacked cards，适合做 deck、ticket 或文件层。`,tab:_.cards,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`size-28`,"data-testid":`stack-cards`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});t(()=>p(e,u,re))});let ie=a(`rue:component:anchor`);n(u,ie),o(()=>{let e=h(T,{title:`对齐与 Placement`,summary:`旧的 vertical / horizontal 继续可用；新增 placement 可以直接表达组合定位。`,tab:_.alignment,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),v(S,{className:`size-28`,vertical:`top`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),v(S,{className:`size-28`,horizontal:`start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),v(S,{className:`size-28`,placement:`top-end`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),v(S,{className:`size-28`,placement:`bottom-start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
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
</Stack>`});t(()=>p(e,u,ie))});let ae=a(`rue:component:anchor`);n(u,ae),o(()=>{let e=h(T,{title:`反向层级`,summary:`reverse 适合把最新版本、最新消息或最新封面放在最上层。`,tab:_.reverse,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),v(S,{className:`w-44`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),v(S,{className:`w-44`,reverse:!0,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm">v3 Final copy</div>
</Stack>`});t(()=>p(e,u,ae))});let oe=a(`rue:component:anchor`);n(u,oe),o(()=>{let e=h(T,{title:`阴影层次`,summary:`保留原来的 shadow 示例，适合强调卡片深度和层级关系。`,tab:_.shadow,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{children:[y(`div`,{className:`card bg-base-200 text-center shadow-md`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card bg-base-200 text-center shadow`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`});t(()=>p(e,u,oe))});let se=a(`rue:component:anchor`);n(u,se),o(()=>{let e=h(T,{title:`通知堆叠`,summary:`保留原来的通知 demo，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:_.notifications,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-56 w-full max-w-md`,reverse:!0,children:[y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 1`}),y(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 2`}),y(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),y(`div`,{className:`card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title text-success`,children:`Notification 3`}),y(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="h-56 w-full max-w-md" reverse>
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
</Stack>`});t(()=>p(e,u,se))});let ce=a(`rue:component:anchor`);n(u,ce),o(()=>{let e=h(T,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:_.scene,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),v(S,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),y(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),y(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),v(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),y(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),v(S,{className:`w-56`,placement:`top-start`,reverse:!0,children:[y(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),y(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),y(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`});t(()=>p(e,u,ce))});let N=i(`h2`,u);n(u,N),c(N,`id`,`stack-api`),n(N,e(`API`));let P=i(`p`,u);n(u,P),n(P,e(`当前页面展示的是 Stack 的完整可用 API，旧属性保留，新属性作为语义增强层补充进来。`));let F=a(`rue:component:anchor`);n(u,F),o(()=>{let e=h(ee,{rows:te});t(()=>p(e,u,F))});let I=i(`div`,u);n(u,I),m(I,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let L=i(`h3`,I);n(I,L),m(L,`mt-0 mb-3 text-base font-semibold`),n(L,e(`placement 快捷映射`));let R=i(`div`,I);n(I,R),m(R,`grid gap-2 text-sm md:grid-cols-2`);let z=i(`div`,R);n(R,z);let B=i(`code`,z);n(z,B),n(B,e(`placement="top"`)),n(z,e(`→`));let V=i(`code`,z);n(z,V),n(V,e(`vertical="top"`));let H=i(`div`,R);n(R,H);let U=i(`code`,H);n(H,U),n(U,e(`placement="bottom"`)),n(H,e(`→`));let W=i(`code`,H);n(H,W),n(W,e(`vertical="bottom"`));let G=i(`div`,R);n(R,G);let K=i(`code`,G);n(G,K),n(K,e(`placement="start"`)),n(G,e(`→`));let le=i(`code`,G);n(G,le),n(le,e(`horizontal="start"`));let q=i(`div`,R);n(R,q);let ue=i(`code`,q);n(q,ue),n(ue,e(`placement="end"`)),n(q,e(`→`));let de=i(`code`,q);n(q,de),n(de,e(`horizontal="end"`));let J=i(`div`,R);n(R,J);let fe=i(`code`,J);n(J,fe),n(fe,e(`placement="top-start"`)),n(J,e(`→`));let pe=i(`code`,J);n(J,pe),n(pe,e(`vertical="top" + horizontal="start"`));let Y=i(`div`,R);n(R,Y);let me=i(`code`,Y);n(Y,me),n(me,e(`placement="bottom-end"`)),n(Y,e(`→`));let he=l(Y);n(Y,he),d(he,` `);let ge=i(`code`,Y);n(Y,ge),n(ge,e(`vertical="bottom" + horizontal="end"`));let _e=i(`h2`,u);n(u,_e),n(_e,e(`FAQ`));let ve=i(`h3`,u);n(u,ve),n(ve,e(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=i(`p`,u);n(u,X);let ye=i(`code`,X);n(X,ye),n(ye,e(`placement`)),n(X,e(`适合快速写组合定位，尤其是`));let be=i(`code`,X);n(X,be),n(be,e(`top-end`)),n(X,e(`、`));let xe=i(`code`,X);n(X,xe),n(xe,e(`bottom-start`)),n(X,e(`这类常见场景。 如果你已经在用旧 API，也可以继续沿用原来的`));let Se=l(X);n(X,Se),d(Se,` `);let Z=i(`code`,X);n(X,Z),n(Z,e(`vertical`)),n(X,e(`和`));let Ce=i(`code`,X);n(X,Ce),n(Ce,e(`horizontal`)),n(X,e(`。`));let we=i(`h3`,u);n(u,we),n(we,e(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=i(`p`,u);n(u,Q),n(Q,e(`显式传入的`));let Te=i(`code`,Q);n(Q,Te),n(Te,e(`vertical`)),n(Q,e(`、`));let Ee=i(`code`,Q);n(Q,Ee),n(Ee,e(`horizontal`)),n(Q,e(`优先级更高。也就是说，`));let De=i(`code`,Q);n(Q,De),n(De,e(`placement`)),n(Q,e(`更像一个快捷预设，而不是强制覆盖层。`));let Oe=i(`h3`,u);n(u,Oe),n(Oe,e(`reverse 会改变样式还是改变 DOM 顺序？`));let $=i(`p`,u);n(u,$);let ke=i(`code`,$);n($,ke),n(ke,e(`reverse`));let Ae=l($);return n($,Ae),d(Ae,` `),n($,e(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),r})}),f,g),f})};export{E as default};