import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,gt as c,l,nt as u,o as d,rt as f,t as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g,n as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as v,i as y}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as b}from"./Code-D5UqTwV6.js";import{t as x}from"./tabs-DRfs918f.js";import{t as S}from"./stack-ojfrDi2e.js";import{r as C}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as w}from"./preview-test-gate-DuGL5287.js";var T=n=>l(i=>{let o=m(`div`,i);h(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=m(`div`,o);a(o,c),h(c,`flex flex-wrap items-start justify-between gap-3`);let f=m(`div`,c);a(c,f);let g=m(`h2`,f);a(f,g),h(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=e(`rue:slot:anchor`);a(g,_),t(()=>{let e=n.title;r(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);a(f,v),t(()=>{let i=n.summary?l(()=>{let i=s(),o=m(`p`,i);a(i,o),h(o,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return a(o,c),t(()=>{let e=n.summary;r(()=>d(e,o,c))}),i}):``;r(()=>d(i,f,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,o,y))});let S=e(`rue:slot:anchor`);return a(o,S),t(()=>{let i=n.tab.value===`preview`?w(n.title,n.preview):l(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=p(b,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>d(e,i,o))}),i});r(()=>d(i,o,S))}),o}),ee=n=>l(i=>{let c=m(`div`,i);h(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=m(`table`,c);a(c,f),h(f,`table table-zebra`);let p=m(`thead`,f);a(f,p);let g=m(`tr`,p);a(p,g);let v=m(`th`,g);a(g,v),a(v,u(`属性`));let y=m(`th`,g);a(g,y),a(y,u(`说明`));let b=m(`th`,g);a(g,b),a(b,u(`类型`));let x=m(`th`,g);a(g,x),a(x,u(`默认值`));let S=m(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,u,f)=>{d(l(()=>{let i=s(),c=m(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=m(`td`,c);a(c,l);let u=m(`code`,l);a(l,u);let f=e(`rue:slot:anchor`);a(u,f),t(()=>{let e=n.prop;r(()=>d(e,u,f))});let p=m(`td`,c);a(c,p);let h=e(`rue:slot:anchor`);a(p,h),t(()=>{let e=n.description;r(()=>d(e,p,h))});let g=m(`td`,c);a(c,g);let _=m(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>d(e,_,v))});let y=m(`td`,c);a(c,y);let b=m(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>d(e,b,x))}),i}),i,c)}})}),c}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],E=()=>{let{tabs:_}=g(`useSetup:0:0`,()=>i(()=>({tabs:{basic:g(`ref:1:0`,()=>n(`preview`)),images:g(`ref:1:1`,()=>n(`preview`)),cards:g(`ref:1:2`,()=>n(`preview`)),alignment:g(`ref:1:3`,()=>n(`preview`)),reverse:g(`ref:1:4`,()=>n(`preview`)),shadow:g(`ref:1:5`,()=>n(`preview`)),notifications:g(`ref:1:6`,()=>n(`preview`)),scene:g(`ref:1:7`,()=>n(`preview`))}})));return l(n=>{let i=s(),g=e(`rue:component:anchor`);return a(i,g),d(p(C,{children:l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`max-w-none prose prose-sm md:prose-base`);let l=m(`h1`,i);a(i,l),a(l,u(`Stack 堆叠容器`));let g=m(`p`,i);a(i,g),h(g,`text-sm mt-3 mb-3`),a(g,u(`Stack 保留 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了原有的`));let b=m(`code`,g);a(g,b),a(b,u(`vertical`)),a(g,u(`和`));let x=m(`code`,g);a(g,x),a(x,u(`horizontal`)),a(g,u(`，现在还支持`));let C=m(`code`,g);a(g,C),a(C,u(`placement`));let w=f(g);a(g,w),c(w,` `),a(g,u(`组合定位，以及`));let E=m(`code`,g);a(g,E),a(E,u(`reverse`)),a(g,u(`反向层级。`));let D=m(`h2`,i);a(i,D),a(D,u(`何时使用`));let O=m(`ul`,i);a(i,O);let k=m(`li`,O);a(O,k),a(k,u(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let A=m(`li`,O);a(O,A),a(A,u(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let j=m(`li`,O);a(O,j),a(j,u(`需要保留已有堆叠视觉，但希望额外控制最新项是否位于最上层。`));let M=e(`rue:component:anchor`);a(i,M),t(()=>{let e=p(T,{title:`基础堆叠`,summary:`保留原来的 3 div stack demo，作为最小可用写法。`,tab:_.basic,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[y(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),y(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),y(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`});r(()=>d(e,i,M))});let ne=e(`rue:component:anchor`);a(i,ne),t(()=>{let e=p(T,{title:`图片堆叠`,summary:`保留原来的 stacked images，用于相册封面或图库预览。`,tab:_.images,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`w-48`,"data-testid":`stack-images`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
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
</Stack>`});r(()=>d(e,i,ne))});let re=e(`rue:component:anchor`);a(i,re),t(()=>{let e=p(T,{title:`卡片堆叠`,summary:`保留原来的 stacked cards，适合做 deck、ticket 或文件层。`,tab:_.cards,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`size-28`,"data-testid":`stack-cards`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});r(()=>d(e,i,re))});let ie=e(`rue:component:anchor`);a(i,ie),t(()=>{let e=p(T,{title:`对齐与 Placement`,summary:`旧的 vertical / horizontal 继续可用；新增 placement 可以直接表达组合定位。`,tab:_.alignment,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),v(S,{className:`size-28`,vertical:`top`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),v(S,{className:`size-28`,horizontal:`start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),v(S,{className:`size-28`,placement:`top-end`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),v(S,{className:`size-28`,placement:`bottom-start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
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
</Stack>`});r(()=>d(e,i,ie))});let ae=e(`rue:component:anchor`);a(i,ae),t(()=>{let e=p(T,{title:`反向层级`,summary:`reverse 适合把最新版本、最新消息或最新封面放在最上层。`,tab:_.reverse,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),v(S,{className:`w-44`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),v(S,{className:`w-44`,reverse:!0,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm">v3 Final copy</div>
</Stack>`});r(()=>d(e,i,ae))});let oe=e(`rue:component:anchor`);a(i,oe),t(()=>{let e=p(T,{title:`阴影层次`,summary:`保留原来的 shadow 示例，适合强调卡片深度和层级关系。`,tab:_.shadow,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{children:[y(`div`,{className:`card bg-base-200 text-center shadow-md`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card bg-base-200 text-center shadow`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`});r(()=>d(e,i,oe))});let se=e(`rue:component:anchor`);a(i,se),t(()=>{let e=p(T,{title:`通知堆叠`,summary:`保留原来的通知 demo，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:_.notifications,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-56 w-full max-w-md`,reverse:!0,children:[y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 1`}),y(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 2`}),y(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),y(`div`,{className:`card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title text-success`,children:`Notification 3`}),y(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="h-56 w-full max-w-md" reverse>
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
</Stack>`});r(()=>d(e,i,se))});let ce=e(`rue:component:anchor`);a(i,ce),t(()=>{let e=p(T,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:_.scene,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),v(S,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),y(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),y(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),v(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),y(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),v(S,{className:`w-56`,placement:`top-start`,reverse:!0,children:[y(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),y(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),y(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`});r(()=>d(e,i,ce))});let N=m(`h2`,i);a(i,N),o(N,`id`,`stack-api`),a(N,u(`API`));let P=m(`p`,i);a(i,P),a(P,u(`当前页面展示的是 Stack 的完整可用 API，旧属性保留，新属性作为语义增强层补充进来。`));let F=e(`rue:component:anchor`);a(i,F),t(()=>{let e=p(ee,{rows:te});r(()=>d(e,i,F))});let I=m(`div`,i);a(i,I),h(I,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let L=m(`h3`,I);a(I,L),h(L,`mt-0 mb-3 text-base font-semibold`),a(L,u(`placement 快捷映射`));let R=m(`div`,I);a(I,R),h(R,`grid gap-2 text-sm md:grid-cols-2`);let z=m(`div`,R);a(R,z);let B=m(`code`,z);a(z,B),a(B,u(`placement="top"`)),a(z,u(`→`));let V=m(`code`,z);a(z,V),a(V,u(`vertical="top"`));let H=m(`div`,R);a(R,H);let U=m(`code`,H);a(H,U),a(U,u(`placement="bottom"`)),a(H,u(`→`));let W=m(`code`,H);a(H,W),a(W,u(`vertical="bottom"`));let G=m(`div`,R);a(R,G);let K=m(`code`,G);a(G,K),a(K,u(`placement="start"`)),a(G,u(`→`));let le=m(`code`,G);a(G,le),a(le,u(`horizontal="start"`));let q=m(`div`,R);a(R,q);let ue=m(`code`,q);a(q,ue),a(ue,u(`placement="end"`)),a(q,u(`→`));let de=m(`code`,q);a(q,de),a(de,u(`horizontal="end"`));let J=m(`div`,R);a(R,J);let fe=m(`code`,J);a(J,fe),a(fe,u(`placement="top-start"`)),a(J,u(`→`));let pe=m(`code`,J);a(J,pe),a(pe,u(`vertical="top" + horizontal="start"`));let Y=m(`div`,R);a(R,Y);let me=m(`code`,Y);a(Y,me),a(me,u(`placement="bottom-end"`)),a(Y,u(`→`));let he=f(Y);a(Y,he),c(he,` `);let ge=m(`code`,Y);a(Y,ge),a(ge,u(`vertical="bottom" + horizontal="end"`));let _e=m(`h2`,i);a(i,_e),a(_e,u(`FAQ`));let ve=m(`h3`,i);a(i,ve),a(ve,u(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=m(`p`,i);a(i,X);let ye=m(`code`,X);a(X,ye),a(ye,u(`placement`)),a(X,u(`适合快速写组合定位，尤其是`));let be=m(`code`,X);a(X,be),a(be,u(`top-end`)),a(X,u(`、`));let xe=m(`code`,X);a(X,xe),a(xe,u(`bottom-start`)),a(X,u(`这类常见场景。 如果你已经在用旧 API，也可以继续沿用原来的`));let Se=f(X);a(X,Se),c(Se,` `);let Z=m(`code`,X);a(X,Z),a(Z,u(`vertical`)),a(X,u(`和`));let Ce=m(`code`,X);a(X,Ce),a(Ce,u(`horizontal`)),a(X,u(`。`));let we=m(`h3`,i);a(i,we),a(we,u(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=m(`p`,i);a(i,Q),a(Q,u(`显式传入的`));let Te=m(`code`,Q);a(Q,Te),a(Te,u(`vertical`)),a(Q,u(`、`));let Ee=m(`code`,Q);a(Q,Ee),a(Ee,u(`horizontal`)),a(Q,u(`优先级更高。也就是说，`));let De=m(`code`,Q);a(Q,De),a(De,u(`placement`)),a(Q,u(`更像一个快捷预设，而不是强制覆盖层。`));let Oe=m(`h3`,i);a(i,Oe),a(Oe,u(`reverse 会改变样式还是改变 DOM 顺序？`));let $=m(`p`,i);a(i,$);let ke=m(`code`,$);a($,ke),a(ke,u(`reverse`));let Ae=f($);return a($,Ae),c(Ae,` `),a($,u(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),n})}),i,g),i})};export{E as default};