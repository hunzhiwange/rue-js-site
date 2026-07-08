import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,t as p,tn as m,tt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g,n as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-BoXKy3gJ.js";import{n as y,t as b}from"./src-Dlanwp1X.js";import{t as x}from"./tabs-C7cPs47_.js";import{t as S}from"./stack-EfjdxjBk.js";import{r as C}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as w}from"./preview-test-gate-CiW-xKNr.js";var T=n=>s(r=>{let i=f(`div`,r);d(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=f(`div`,i);e(i,a),d(a,`flex flex-wrap items-start justify-between gap-3`);let u=f(`div`,a);e(a,u);let g=f(`h2`,u);e(u,g),d(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(g,o(`# `));let _=h(`rue:slot:anchor`);e(g,_),t(()=>{let e=n.title;m(()=>l(e,g,_))});let y=h(`rue:slot:anchor`);e(u,y),t(()=>{let r=n.summary?s(()=>{let r=c(),i=f(`p`,r);e(r,i),d(i,`m-0 text-sm opacity-70`);let a=h(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;m(()=>l(e,i,a))}),r}):``;m(()=>l(r,u,y))});let b=h(`rue:component:anchor`);e(i,b),t(()=>{let e=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});m(()=>l(e,i,b))});let S=h(`rue:slot:anchor`);return e(i,S),t(()=>{let r=n.tab.value===`preview`?w(n.title,n.preview):s(()=>{let r=c(),i=h(`rue:component:anchor`);return e(r,i),t(()=>{let e=p(v,{className:`mt-2`,lang:`tsx`,code:n.code});m(()=>l(e,r,i))}),r});m(()=>l(r,i,S))}),i}),ee=n=>s(r=>{let i=f(`div`,r);d(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=f(`table`,i);e(i,u),d(u,`table table-zebra`);let p=f(`thead`,u);e(u,p);let g=f(`tr`,p);e(p,g);let v=f(`th`,g);e(g,v),e(v,o(`属性`));let y=f(`th`,g);e(g,y),e(y,o(`说明`));let b=f(`th`,g);e(g,b),e(b,o(`类型`));let x=f(`th`,g);e(g,x),e(x,o(`默认值`));let S=f(`tbody`,u);e(u,S);let C=h(`rue:list:start`),w=h(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,u)=>{l(s(()=>{let r=c(),i=f(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=f(`td`,i);e(i,o);let s=f(`code`,o);e(o,s);let u=h(`rue:slot:anchor`);e(s,u),t(()=>{let e=n.prop;m(()=>l(e,s,u))});let d=f(`td`,i);e(i,d);let p=h(`rue:slot:anchor`);e(d,p),t(()=>{let e=n.description;m(()=>l(e,d,p))});let g=f(`td`,i);e(i,g);let _=f(`code`,g);e(g,_);let v=h(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;m(()=>l(e,_,v))});let y=f(`td`,i);e(i,y);let b=f(`code`,y);e(y,b);let x=h(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;m(()=>l(e,b,x))}),r}),r,i)}})}),i}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],E=()=>{let{tabs:_}=g(`useSetup:0:0`,()=>u(()=>({tabs:{basic:g(`ref:1:0`,()=>n(`preview`)),images:g(`ref:1:1`,()=>n(`preview`)),cards:g(`ref:1:2`,()=>n(`preview`)),alignment:g(`ref:1:3`,()=>n(`preview`)),reverse:g(`ref:1:4`,()=>n(`preview`)),shadow:g(`ref:1:5`,()=>n(`preview`)),notifications:g(`ref:1:6`,()=>n(`preview`)),scene:g(`ref:1:7`,()=>n(`preview`))}})));return s(n=>{let u=c(),g=h(`rue:component:anchor`);return e(u,g),l(p(C,{children:s(()=>{let n=c(),s=f(`div`,n);e(n,s),d(s,`max-w-none prose prose-sm md:prose-base`);let u=f(`h1`,s);e(s,u),e(u,o(`Stack 堆叠容器`));let g=f(`p`,s);e(s,g),d(g,`text-sm mt-3 mb-3`),e(g,o(`Stack 使用 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了基础的`));let v=f(`code`,g);e(g,v),e(v,o(`vertical`)),e(g,o(`和`));let x=f(`code`,g);e(g,x),e(x,o(`horizontal`)),e(g,o(`，现在还支持`));let C=f(`code`,g);e(g,C),e(C,o(`placement`));let w=r(g);e(g,w),i(w,` `),e(g,o(`组合定位，以及`));let E=f(`code`,g);e(g,E),e(E,o(`reverse`)),e(g,o(`反向层级。`));let D=f(`h2`,s);e(s,D),e(D,o(`何时使用`));let O=f(`ul`,s);e(s,O);let k=f(`li`,O);e(O,k),e(k,o(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let A=f(`li`,O);e(O,A),e(A,o(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let j=f(`li`,O);e(O,j),e(j,o(`需要保持当前堆叠视觉，但希望额外控制最新项是否位于最上层。`));let M=h(`rue:component:anchor`);e(s,M),t(()=>{let e=p(T,{title:`基础堆叠`,summary:`展示 3 div stackDemo，作为最小可用写法。`,tab:_.basic,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[b(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),b(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),b(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`});m(()=>l(e,s,M))});let ne=h(`rue:component:anchor`);e(s,ne),t(()=>{let e=p(T,{title:`图片堆叠`,summary:`展示 stacked images，用于相册封面或图库预览。`,tab:_.images,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{className:`w-48`,"data-testid":`stack-images`,children:[b(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),b(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),b(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
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
</Stack>`});m(()=>l(e,s,ne))});let re=h(`rue:component:anchor`);e(s,re),t(()=>{let e=p(T,{title:`卡片堆叠`,summary:`展示 stacked cards，适合做 deck、ticket 或文件层。`,tab:_.cards,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{className:`size-28`,"data-testid":`stack-cards`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});m(()=>l(e,s,re))});let ie=h(`rue:component:anchor`);e(s,ie),t(()=>{let e=p(T,{title:`对齐与 Placement`,summary:`基础的 vertical / horizontal 继续可用；placement 可以直接表达组合定位。`,tab:_.alignment,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),y(S,{className:`size-28`,vertical:`top`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]}),y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),y(S,{className:`size-28`,horizontal:`start`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]}),y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),y(S,{className:`size-28`,placement:`top-end`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]}),y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),y(S,{className:`size-28`,placement:`bottom-start`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
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
</Stack>`});m(()=>l(e,s,ie))});let ae=h(`rue:component:anchor`);e(s,ae),t(()=>{let e=p(T,{title:`反向层级`,summary:`reverse 适合把最当前本、最新消息或最新封面放在最上层。`,tab:_.reverse,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),y(S,{className:`w-44`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),y(S,{className:`w-44`,reverse:!0,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),b(`div`,{className:`rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm">v3 Final copy</div>
</Stack>`});m(()=>l(e,s,ae))});let oe=h(`rue:component:anchor`);e(s,oe),t(()=>{let e=p(T,{title:`阴影层次`,summary:`展示 shadow 示例，适合强调卡片深度和层级关系。`,tab:_.shadow,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{children:[b(`div`,{className:`card bg-base-200 text-center shadow-md`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card bg-base-200 text-center shadow`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:b(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`});m(()=>l(e,s,oe))});let se=h(`rue:component:anchor`);e(s,se),t(()=>{let e=p(T,{title:`通知堆叠`,summary:`展示通知示例，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:_.notifications,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{className:`h-56 w-full max-w-md`,reverse:!0,children:[b(`div`,{className:`card h-full bg-base-100 shadow-md`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title`,children:`Notification 1`}),b(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),b(`div`,{className:`card h-full bg-base-100 shadow-md`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title`,children:`Notification 2`}),b(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),b(`div`,{className:`card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title text-success`,children:`Notification 3`}),b(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="h-56 w-full max-w-md" reverse>
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
</Stack>`});m(()=>l(e,s,se))});let ce=h(`rue:component:anchor`);e(s,ce),t(()=>{let e=p(T,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:_.scene,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[y(`section`,{children:[b(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),y(S,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),b(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),b(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),y(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[b(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),b(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),y(`section`,{children:[b(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),y(S,{className:`w-56`,placement:`top-start`,reverse:!0,children:[b(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),b(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),b(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`});m(()=>l(e,s,ce))});let N=f(`h2`,s);e(s,N),a(N,`id`,`stack-api`),e(N,o(`API`));let P=f(`p`,s);e(s,P),e(P,o(`当前页面展示的是 Stack 的完整可用 API，基础属性保持，新属性作为语义增强层补充进来。`));let F=h(`rue:component:anchor`);e(s,F),t(()=>{let e=p(ee,{rows:te});m(()=>l(e,s,F))});let I=f(`div`,s);e(s,I),d(I,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let L=f(`h3`,I);e(I,L),d(L,`mt-0 mb-3 text-base font-semibold`),e(L,o(`placement 快捷映射`));let R=f(`div`,I);e(I,R),d(R,`grid gap-2 text-sm md:grid-cols-2`);let z=f(`div`,R);e(R,z);let B=f(`code`,z);e(z,B),e(B,o(`placement="top"`)),e(z,o(`→`));let V=f(`code`,z);e(z,V),e(V,o(`vertical="top"`));let H=f(`div`,R);e(R,H);let U=f(`code`,H);e(H,U),e(U,o(`placement="bottom"`)),e(H,o(`→`));let W=f(`code`,H);e(H,W),e(W,o(`vertical="bottom"`));let G=f(`div`,R);e(R,G);let K=f(`code`,G);e(G,K),e(K,o(`placement="start"`)),e(G,o(`→`));let le=f(`code`,G);e(G,le),e(le,o(`horizontal="start"`));let q=f(`div`,R);e(R,q);let ue=f(`code`,q);e(q,ue),e(ue,o(`placement="end"`)),e(q,o(`→`));let de=f(`code`,q);e(q,de),e(de,o(`horizontal="end"`));let J=f(`div`,R);e(R,J);let fe=f(`code`,J);e(J,fe),e(fe,o(`placement="top-start"`)),e(J,o(`→`));let pe=f(`code`,J);e(J,pe),e(pe,o(`vertical="top" + horizontal="start"`));let Y=f(`div`,R);e(R,Y);let me=f(`code`,Y);e(Y,me),e(me,o(`placement="bottom-end"`)),e(Y,o(`→`));let he=r(Y);e(Y,he),i(he,` `);let ge=f(`code`,Y);e(Y,ge),e(ge,o(`vertical="bottom" + horizontal="end"`));let _e=f(`h2`,s);e(s,_e),e(_e,o(`FAQ`));let ve=f(`h3`,s);e(s,ve),e(ve,o(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=f(`p`,s);e(s,X);let ye=f(`code`,X);e(X,ye),e(ye,o(`placement`)),e(X,o(`适合快速写组合定位，尤其是`));let be=f(`code`,X);e(X,be),e(be,o(`top-end`)),e(X,o(`、`));let xe=f(`code`,X);e(X,xe),e(xe,o(`bottom-start`)),e(X,o(`这类常见场景。 如果你已经在用API，也可以使用基础的`));let Se=r(X);e(X,Se),i(Se,` `);let Z=f(`code`,X);e(X,Z),e(Z,o(`vertical`)),e(X,o(`和`));let Ce=f(`code`,X);e(X,Ce),e(Ce,o(`horizontal`)),e(X,o(`。`));let we=f(`h3`,s);e(s,we),e(we,o(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=f(`p`,s);e(s,Q),e(Q,o(`显式传入的`));let Te=f(`code`,Q);e(Q,Te),e(Te,o(`vertical`)),e(Q,o(`、`));let Ee=f(`code`,Q);e(Q,Ee),e(Ee,o(`horizontal`)),e(Q,o(`优先级更高。也就是说，`));let De=f(`code`,Q);e(Q,De),e(De,o(`placement`)),e(Q,o(`更像一个快捷预设，而不是强制覆盖层。`));let Oe=f(`h3`,s);e(s,Oe),e(Oe,o(`reverse 会改变样式还是改变 DOM 顺序？`));let $=f(`p`,s);e(s,$);let ke=f(`code`,$);e($,ke),e(ke,o(`reverse`));let Ae=r($);return e($,Ae),i(Ae,` `),e($,o(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),n})}),u,g),u})};export{E as default};