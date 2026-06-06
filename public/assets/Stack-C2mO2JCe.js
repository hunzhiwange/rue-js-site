import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h}from"./vapor-runtime-C1rlwc61.js";import{a as g,n as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{n as y,t as b}from"./src-BLzF0BqW.js";import{n as x}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as S}from"./tabs-BOxm6iIN.js";import{t as C}from"./stack-CaoksP_9.js";import{t as w}from"./preview-test-gate-DtKtoe96.js";var T=a=>d(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let m=s(`div`,u);t(u,m);let g=s(`h2`,m);t(m,g),e(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(g,r(`# `));let _=i(`rue:slot:anchor`);t(g,_),n(()=>{let e=a.title;h(()=>f(e,g,_))});let y=i(`rue:slot:anchor`);t(m,y),n(()=>{let r=a.summary?d(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;h(()=>f(e,c,l))}),r}):``;h(()=>f(r,m,y))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});h(()=>f(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?w(a.title,a.preview):d(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=p(v,{className:`mt-2`,lang:`tsx`,code:a.code});h(()=>f(t,e,r))}),e});h(()=>f(e,l,x))}),l}),ee=a=>d(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,u);t(u,p),e(p,`table table-zebra`);let m=s(`thead`,p);t(p,m);let g=s(`tr`,m);t(m,g);let v=s(`th`,g);t(g,v),t(v,r(`属性`));let y=s(`th`,g);t(g,y),t(y,r(`说明`));let b=s(`th`,g);t(g,b),t(b,r(`类型`));let x=s(`th`,g);t(g,x),t(x,r(`默认值`));let S=s(`tbody`,p);t(p,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{f(d(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;h(()=>f(t,u,d))});let p=s(`td`,a);t(a,p);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let t=e.description;h(()=>f(t,p,m))});let g=s(`td`,a);t(a,g);let _=s(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;h(()=>f(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;h(()=>f(t,b,x))}),r}),r,a)}})}),u}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],E=()=>{let{tabs:_}=g(`useSetup:0:0`,()=>m(()=>({tabs:{basic:g(`ref:1:0`,()=>u(`preview`)),images:g(`ref:1:1`,()=>u(`preview`)),cards:g(`ref:1:2`,()=>u(`preview`)),alignment:g(`ref:1:3`,()=>u(`preview`)),reverse:g(`ref:1:4`,()=>u(`preview`)),shadow:g(`ref:1:5`,()=>u(`preview`)),notifications:g(`ref:1:6`,()=>u(`preview`)),scene:g(`ref:1:7`,()=>u(`preview`))}})));return d(u=>{let m=o(),g=i(`rue:component:anchor`);return t(m,g),f(p(x,{children:d(()=>{let u=o(),d=s(`div`,u);t(u,d),e(d,`max-w-none prose prose-sm md:prose-base`);let m=s(`h1`,d);t(d,m),t(m,r(`Stack 堆叠容器`));let g=s(`p`,d);t(d,g),e(g,`text-sm mt-3 mb-3`),t(g,r(`Stack 保留 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了原有的`));let v=s(`code`,g);t(g,v),t(v,r(`vertical`)),t(g,r(`和`));let x=s(`code`,g);t(g,x),t(x,r(`horizontal`)),t(g,r(`，现在还支持`));let S=s(`code`,g);t(g,S),t(S,r(`placement`));let w=a(g);t(g,w),l(w,` `),t(g,r(`组合定位，以及`));let E=s(`code`,g);t(g,E),t(E,r(`reverse`)),t(g,r(`反向层级。`));let D=s(`h2`,d);t(d,D),t(D,r(`何时使用`));let O=s(`ul`,d);t(d,O);let k=s(`li`,O);t(O,k),t(k,r(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let A=s(`li`,O);t(O,A),t(A,r(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let j=s(`li`,O);t(O,j),t(j,r(`需要保留已有堆叠视觉，但希望额外控制最新项是否位于最上层。`));let M=i(`rue:component:anchor`);t(d,M),n(()=>{let e=p(T,{title:`基础堆叠`,summary:`保留原来的 3 div stack demo，作为最小可用写法。`,tab:_.basic,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(C,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[b(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),b(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),b(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`});h(()=>f(e,d,M))});let ne=i(`rue:component:anchor`);t(d,ne),n(()=>{let e=p(T,{title:`图片堆叠`,summary:`保留原来的 stacked images，用于相册封面或图库预览。`,tab:_.images,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(C,{className:`w-48`,"data-testid":`stack-images`,children:[b(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),b(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),b(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
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
</Stack>`});h(()=>f(e,d,ne))});let re=i(`rue:component:anchor`);t(d,re),n(()=>{let e=p(T,{title:`卡片堆叠`,summary:`保留原来的 stacked cards，适合做 deck、ticket 或文件层。`,tab:_.cards,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(C,{className:`size-28`,"data-testid":`stack-cards`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});h(()=>f(e,d,re))});let ie=i(`rue:component:anchor`);t(d,ie),n(()=>{let e=p(T,{title:`对齐与 Placement`,summary:`旧的 vertical / horizontal 继续可用；新增 placement 可以直接表达组合定位。`,tab:_.alignment,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),y(C,{className:`size-28`,vertical:`top`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]}),y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),y(C,{className:`size-28`,horizontal:`start`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]}),y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),y(C,{className:`size-28`,placement:`top-end`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]}),y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),y(C,{className:`size-28`,placement:`bottom-start`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
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
</Stack>`});h(()=>f(e,d,ie))});let ae=i(`rue:component:anchor`);t(d,ae),n(()=>{let e=p(T,{title:`反向层级`,summary:`reverse 适合把最新版本、最新消息或最新封面放在最上层。`,tab:_.reverse,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),y(C,{className:`w-44`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),y(C,{className:`w-44`,reverse:!0,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),b(`div`,{className:`rounded-box border border-primary/30 bg-primary/5 p-4 text-primary`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary/30 bg-primary/5 p-4 text-primary">v3 Final copy</div>
</Stack>`});h(()=>f(e,d,ae))});let oe=i(`rue:component:anchor`);t(d,oe),n(()=>{let e=p(T,{title:`阴影层次`,summary:`保留原来的 shadow 示例，适合强调卡片深度和层级关系。`,tab:_.shadow,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(C,{children:[b(`div`,{className:`card bg-base-200 text-center shadow-md`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card bg-base-200 text-center shadow`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:b(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`});h(()=>f(e,d,oe))});let se=i(`rue:component:anchor`);t(d,se),n(()=>{let e=p(T,{title:`通知堆叠`,summary:`保留原来的通知 demo，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:_.notifications,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(C,{className:`h-56 w-full max-w-md`,reverse:!0,children:[b(`div`,{className:`card h-full bg-base-100 shadow-md`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title`,children:`Notification 1`}),b(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),b(`div`,{className:`card h-full bg-base-100 shadow-md`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title`,children:`Notification 2`}),b(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),b(`div`,{className:`card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title text-success`,children:`Notification 3`}),b(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="h-56 w-full max-w-md" reverse>
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
</Stack>`});h(()=>f(e,d,se))});let ce=i(`rue:component:anchor`);t(d,ce),n(()=>{let e=p(T,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:_.scene,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[y(`section`,{children:[b(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),y(C,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),b(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),b(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),y(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[b(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),b(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),y(`section`,{children:[b(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),y(C,{className:`w-56`,placement:`top-start`,reverse:!0,children:[b(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),b(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),b(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`});h(()=>f(e,d,ce))});let N=s(`h2`,d);t(d,N),c(N,`id`,`stack-api`),t(N,r(`API`));let P=s(`p`,d);t(d,P),t(P,r(`当前页面展示的是 Stack 的完整可用 API，旧属性保留，新属性作为语义增强层补充进来。`));let F=i(`rue:component:anchor`);t(d,F),n(()=>{let e=p(ee,{rows:te});h(()=>f(e,d,F))});let I=s(`div`,d);t(d,I),e(I,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let L=s(`h3`,I);t(I,L),e(L,`mt-0 mb-3 text-base font-semibold`),t(L,r(`placement 快捷映射`));let R=s(`div`,I);t(I,R),e(R,`grid gap-2 text-sm md:grid-cols-2`);let z=s(`div`,R);t(R,z);let B=s(`code`,z);t(z,B),t(B,r(`placement="top"`)),t(z,r(`→`));let V=s(`code`,z);t(z,V),t(V,r(`vertical="top"`));let H=s(`div`,R);t(R,H);let U=s(`code`,H);t(H,U),t(U,r(`placement="bottom"`)),t(H,r(`→`));let W=s(`code`,H);t(H,W),t(W,r(`vertical="bottom"`));let G=s(`div`,R);t(R,G);let K=s(`code`,G);t(G,K),t(K,r(`placement="start"`)),t(G,r(`→`));let le=s(`code`,G);t(G,le),t(le,r(`horizontal="start"`));let q=s(`div`,R);t(R,q);let ue=s(`code`,q);t(q,ue),t(ue,r(`placement="end"`)),t(q,r(`→`));let de=s(`code`,q);t(q,de),t(de,r(`horizontal="end"`));let J=s(`div`,R);t(R,J);let fe=s(`code`,J);t(J,fe),t(fe,r(`placement="top-start"`)),t(J,r(`→`));let pe=s(`code`,J);t(J,pe),t(pe,r(`vertical="top" + horizontal="start"`));let Y=s(`div`,R);t(R,Y);let me=s(`code`,Y);t(Y,me),t(me,r(`placement="bottom-end"`)),t(Y,r(`→`));let he=a(Y);t(Y,he),l(he,` `);let ge=s(`code`,Y);t(Y,ge),t(ge,r(`vertical="bottom" + horizontal="end"`));let _e=s(`h2`,d);t(d,_e),t(_e,r(`FAQ`));let ve=s(`h3`,d);t(d,ve),t(ve,r(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=s(`p`,d);t(d,X);let ye=s(`code`,X);t(X,ye),t(ye,r(`placement`)),t(X,r(`适合快速写组合定位，尤其是`));let be=s(`code`,X);t(X,be),t(be,r(`top-end`)),t(X,r(`、`));let xe=s(`code`,X);t(X,xe),t(xe,r(`bottom-start`)),t(X,r(`这类常见场景。 如果你已经在用旧 API，也可以继续沿用原来的`));let Se=a(X);t(X,Se),l(Se,` `);let Z=s(`code`,X);t(X,Z),t(Z,r(`vertical`)),t(X,r(`和`));let Ce=s(`code`,X);t(X,Ce),t(Ce,r(`horizontal`)),t(X,r(`。`));let we=s(`h3`,d);t(d,we),t(we,r(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=s(`p`,d);t(d,Q),t(Q,r(`显式传入的`));let Te=s(`code`,Q);t(Q,Te),t(Te,r(`vertical`)),t(Q,r(`、`));let Ee=s(`code`,Q);t(Q,Ee),t(Ee,r(`horizontal`)),t(Q,r(`优先级更高。也就是说，`));let De=s(`code`,Q);t(Q,De),t(De,r(`placement`)),t(Q,r(`更像一个快捷预设，而不是强制覆盖层。`));let Oe=s(`h3`,d);t(d,Oe),t(Oe,r(`reverse 会改变样式还是改变 DOM 顺序？`));let $=s(`p`,d);t(d,$);let ke=s(`code`,$);t($,ke),t(ke,r(`reverse`));let Ae=a($);return t($,Ae),l(Ae,` `),t($,r(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),u})}),m,g),m})};export{E as default};