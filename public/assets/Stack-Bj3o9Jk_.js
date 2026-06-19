import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,ht as s,l as c,lt as l,nt as u,o as d,st as f,t as p,tt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g,n as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as v,i as y}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as b}from"./Code-BIscIyEp.js";import{t as x}from"./tabs-CZWMQq5i.js";import{t as S}from"./stack-D2js4JWr.js";import{r as C}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as w}from"./preview-test-gate-DumhDfV7.js";var T=a=>c(s=>{let u=o(`div`,s);l(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=o(`div`,u);i(u,f),l(f,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,f);i(f,h);let g=o(`h2`,h);i(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,m(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.title;r(()=>d(e,g,_))});let v=t(`rue:slot:anchor`);i(h,v),n(()=>{let s=a.summary?c(()=>{let s=e(),c=o(`p`,s);i(s,c),l(c,`m-0 text-sm opacity-70`);let u=t(`rue:slot:anchor`);return i(c,u),n(()=>{let e=a.summary;r(()=>d(e,c,u))}),s}):``;r(()=>d(s,h,v))});let y=t(`rue:component:anchor`);i(u,y),n(()=>{let e=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,u,y))});let S=t(`rue:slot:anchor`);return i(u,S),n(()=>{let o=a.tab.value===`preview`?w(a.title,a.preview):c(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=p(b,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>d(e,o,s))}),o});r(()=>d(o,u,S))}),u}),ee=a=>c(s=>{let u=o(`div`,s);l(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=o(`table`,u);i(u,p),l(p,`table table-zebra`);let h=o(`thead`,p);i(p,h);let g=o(`tr`,h);i(h,g);let v=o(`th`,g);i(g,v),i(v,m(`属性`));let y=o(`th`,g);i(g,y),i(y,m(`说明`));let b=o(`th`,g);i(g,b),i(b,m(`类型`));let x=o(`th`,g);i(g,x),i(x,m(`默认值`));let S=o(`tbody`,p);i(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,l,u,p)=>{d(c(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{f(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let u=o(`code`,l);i(l,u);let p=t(`rue:slot:anchor`);i(u,p),n(()=>{let e=a.prop;r(()=>d(e,u,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>d(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>d(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>d(e,b,x))}),s}),s,l)}})}),u}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],E=()=>{let{tabs:_}=g(`useSetup:0:0`,()=>a(()=>({tabs:{basic:g(`ref:1:0`,()=>h(`preview`)),images:g(`ref:1:1`,()=>h(`preview`)),cards:g(`ref:1:2`,()=>h(`preview`)),alignment:g(`ref:1:3`,()=>h(`preview`)),reverse:g(`ref:1:4`,()=>h(`preview`)),shadow:g(`ref:1:5`,()=>h(`preview`)),notifications:g(`ref:1:6`,()=>h(`preview`)),scene:g(`ref:1:7`,()=>h(`preview`))}})));return c(a=>{let h=e(),g=t(`rue:component:anchor`);return i(h,g),d(p(C,{children:c(()=>{let a=e(),c=o(`div`,a);i(a,c),l(c,`max-w-none prose prose-sm md:prose-base`);let h=o(`h1`,c);i(c,h),i(h,m(`Stack 堆叠容器`));let g=o(`p`,c);i(c,g),l(g,`text-sm mt-3 mb-3`),i(g,m(`Stack 保留 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了原有的`));let b=o(`code`,g);i(g,b),i(b,m(`vertical`)),i(g,m(`和`));let x=o(`code`,g);i(g,x),i(x,m(`horizontal`)),i(g,m(`，现在还支持`));let C=o(`code`,g);i(g,C),i(C,m(`placement`));let w=u(g);i(g,w),s(w,` `),i(g,m(`组合定位，以及`));let E=o(`code`,g);i(g,E),i(E,m(`reverse`)),i(g,m(`反向层级。`));let D=o(`h2`,c);i(c,D),i(D,m(`何时使用`));let O=o(`ul`,c);i(c,O);let k=o(`li`,O);i(O,k),i(k,m(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let A=o(`li`,O);i(O,A),i(A,m(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let j=o(`li`,O);i(O,j),i(j,m(`需要保留已有堆叠视觉，但希望额外控制最新项是否位于最上层。`));let M=t(`rue:component:anchor`);i(c,M),n(()=>{let e=p(T,{title:`基础堆叠`,summary:`保留原来的 3 div stack demo，作为最小可用写法。`,tab:_.basic,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[y(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),y(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),y(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`});r(()=>d(e,c,M))});let ne=t(`rue:component:anchor`);i(c,ne),n(()=>{let e=p(T,{title:`图片堆叠`,summary:`保留原来的 stacked images，用于相册封面或图库预览。`,tab:_.images,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`w-48`,"data-testid":`stack-images`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
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
</Stack>`});r(()=>d(e,c,ne))});let re=t(`rue:component:anchor`);i(c,re),n(()=>{let e=p(T,{title:`卡片堆叠`,summary:`保留原来的 stacked cards，适合做 deck、ticket 或文件层。`,tab:_.cards,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`size-28`,"data-testid":`stack-cards`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});r(()=>d(e,c,re))});let ie=t(`rue:component:anchor`);i(c,ie),n(()=>{let e=p(T,{title:`对齐与 Placement`,summary:`旧的 vertical / horizontal 继续可用；新增 placement 可以直接表达组合定位。`,tab:_.alignment,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),v(S,{className:`size-28`,vertical:`top`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),v(S,{className:`size-28`,horizontal:`start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),v(S,{className:`size-28`,placement:`top-end`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),v(S,{className:`size-28`,placement:`bottom-start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
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
</Stack>`});r(()=>d(e,c,ie))});let ae=t(`rue:component:anchor`);i(c,ae),n(()=>{let e=p(T,{title:`反向层级`,summary:`reverse 适合把最新版本、最新消息或最新封面放在最上层。`,tab:_.reverse,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),v(S,{className:`w-44`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),v(S,{className:`w-44`,reverse:!0,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm">v3 Final copy</div>
</Stack>`});r(()=>d(e,c,ae))});let oe=t(`rue:component:anchor`);i(c,oe),n(()=>{let e=p(T,{title:`阴影层次`,summary:`保留原来的 shadow 示例，适合强调卡片深度和层级关系。`,tab:_.shadow,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{children:[y(`div`,{className:`card bg-base-200 text-center shadow-md`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card bg-base-200 text-center shadow`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`});r(()=>d(e,c,oe))});let se=t(`rue:component:anchor`);i(c,se),n(()=>{let e=p(T,{title:`通知堆叠`,summary:`保留原来的通知 demo，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:_.notifications,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-56 w-full max-w-md`,reverse:!0,children:[y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 1`}),y(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 2`}),y(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),y(`div`,{className:`card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title text-success`,children:`Notification 3`}),y(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="h-56 w-full max-w-md" reverse>
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
</Stack>`});r(()=>d(e,c,se))});let ce=t(`rue:component:anchor`);i(c,ce),n(()=>{let e=p(T,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:_.scene,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),v(S,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),y(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),y(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),v(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),y(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),v(S,{className:`w-56`,placement:`top-start`,reverse:!0,children:[y(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),y(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),y(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`});r(()=>d(e,c,ce))});let N=o(`h2`,c);i(c,N),f(N,`id`,`stack-api`),i(N,m(`API`));let P=o(`p`,c);i(c,P),i(P,m(`当前页面展示的是 Stack 的完整可用 API，旧属性保留，新属性作为语义增强层补充进来。`));let F=t(`rue:component:anchor`);i(c,F),n(()=>{let e=p(ee,{rows:te});r(()=>d(e,c,F))});let I=o(`div`,c);i(c,I),l(I,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let L=o(`h3`,I);i(I,L),l(L,`mt-0 mb-3 text-base font-semibold`),i(L,m(`placement 快捷映射`));let R=o(`div`,I);i(I,R),l(R,`grid gap-2 text-sm md:grid-cols-2`);let z=o(`div`,R);i(R,z);let B=o(`code`,z);i(z,B),i(B,m(`placement="top"`)),i(z,m(`→`));let V=o(`code`,z);i(z,V),i(V,m(`vertical="top"`));let H=o(`div`,R);i(R,H);let U=o(`code`,H);i(H,U),i(U,m(`placement="bottom"`)),i(H,m(`→`));let W=o(`code`,H);i(H,W),i(W,m(`vertical="bottom"`));let G=o(`div`,R);i(R,G);let K=o(`code`,G);i(G,K),i(K,m(`placement="start"`)),i(G,m(`→`));let le=o(`code`,G);i(G,le),i(le,m(`horizontal="start"`));let q=o(`div`,R);i(R,q);let ue=o(`code`,q);i(q,ue),i(ue,m(`placement="end"`)),i(q,m(`→`));let de=o(`code`,q);i(q,de),i(de,m(`horizontal="end"`));let J=o(`div`,R);i(R,J);let fe=o(`code`,J);i(J,fe),i(fe,m(`placement="top-start"`)),i(J,m(`→`));let pe=o(`code`,J);i(J,pe),i(pe,m(`vertical="top" + horizontal="start"`));let Y=o(`div`,R);i(R,Y);let me=o(`code`,Y);i(Y,me),i(me,m(`placement="bottom-end"`)),i(Y,m(`→`));let he=u(Y);i(Y,he),s(he,` `);let ge=o(`code`,Y);i(Y,ge),i(ge,m(`vertical="bottom" + horizontal="end"`));let _e=o(`h2`,c);i(c,_e),i(_e,m(`FAQ`));let ve=o(`h3`,c);i(c,ve),i(ve,m(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=o(`p`,c);i(c,X);let ye=o(`code`,X);i(X,ye),i(ye,m(`placement`)),i(X,m(`适合快速写组合定位，尤其是`));let be=o(`code`,X);i(X,be),i(be,m(`top-end`)),i(X,m(`、`));let xe=o(`code`,X);i(X,xe),i(xe,m(`bottom-start`)),i(X,m(`这类常见场景。 如果你已经在用旧 API，也可以继续沿用原来的`));let Se=u(X);i(X,Se),s(Se,` `);let Z=o(`code`,X);i(X,Z),i(Z,m(`vertical`)),i(X,m(`和`));let Ce=o(`code`,X);i(X,Ce),i(Ce,m(`horizontal`)),i(X,m(`。`));let we=o(`h3`,c);i(c,we),i(we,m(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=o(`p`,c);i(c,Q),i(Q,m(`显式传入的`));let Te=o(`code`,Q);i(Q,Te),i(Te,m(`vertical`)),i(Q,m(`、`));let Ee=o(`code`,Q);i(Q,Ee),i(Ee,m(`horizontal`)),i(Q,m(`优先级更高。也就是说，`));let De=o(`code`,Q);i(Q,De),i(De,m(`placement`)),i(Q,m(`更像一个快捷预设，而不是强制覆盖层。`));let Oe=o(`h3`,c);i(c,Oe),i(Oe,m(`reverse 会改变样式还是改变 DOM 顺序？`));let $=o(`p`,c);i(c,$);let ke=o(`code`,$);i($,ke),i(ke,m(`reverse`));let Ae=u($);return i($,Ae),s(Ae,` `),i($,m(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),a})}),h,g),h})};export{E as default};