import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,mt as u,ot as d,qt as f,s as p,t as m,tt as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g,n as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as v,i as y}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as b}from"./Code-5DOEyGxf.js";import{t as x}from"./tabs-CWmjyn0I.js";import{t as S}from"./stack-B3bRgUCk.js";import{r as C}from"./SidebarPlaygroundDesign-CS11MI8e.js";import{t as w}from"./preview-test-gate-DdwKChL0.js";var T=r=>l(u=>{let d=e(`div`,u);s(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);a(d,f),s(f,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,f);a(f,h);let g=e(`h2`,h);a(h,g),s(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,c(`# `));let _=o(`rue:slot:anchor`);a(g,_),i(()=>{let e=r.title;t(()=>p(e,g,_))});let v=o(`rue:slot:anchor`);a(h,v),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>p(e,l,u))}),c}):``;t(()=>p(c,h,v))});let y=o(`rue:component:anchor`);a(d,y),i(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>p(e,d,y))});let S=o(`rue:slot:anchor`);return a(d,S),i(()=>{let e=r.tab.value===`preview`?w(r.title,r.preview):l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=m(b,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>p(n,e,s))}),e});t(()=>p(e,d,S))}),d}),ee=r=>l(u=>{let f=e(`div`,u);s(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,f);a(f,m),s(m,`table table-zebra`);let h=e(`thead`,m);a(m,h);let g=e(`tr`,h);a(h,g);let v=e(`th`,g);a(g,v),a(v,c(`属性`));let y=e(`th`,g);a(g,y),a(y,c(`说明`));let b=e(`th`,g);a(g,b),a(b,c(`类型`));let x=e(`th`,g);a(g,x),a(x,c(`默认值`));let S=e(`tbody`,m);a(m,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=_({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,u,f)=>{p(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{d(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let f=o(`rue:slot:anchor`);a(u,f),i(()=>{let e=r.prop;t(()=>p(e,u,f))});let m=e(`td`,c);a(c,m);let h=o(`rue:slot:anchor`);a(m,h),i(()=>{let e=r.description;t(()=>p(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>p(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>p(e,b,x))}),s}),s,c)}})}),f}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],E=()=>{let{tabs:_}=g(`useSetup:0:0`,()=>f(()=>({tabs:{basic:g(`ref:1:0`,()=>r(`preview`)),images:g(`ref:1:1`,()=>r(`preview`)),cards:g(`ref:1:2`,()=>r(`preview`)),alignment:g(`ref:1:3`,()=>r(`preview`)),reverse:g(`ref:1:4`,()=>r(`preview`)),shadow:g(`ref:1:5`,()=>r(`preview`)),notifications:g(`ref:1:6`,()=>r(`preview`)),scene:g(`ref:1:7`,()=>r(`preview`))}})));return l(r=>{let f=n(),g=o(`rue:component:anchor`);return a(f,g),p(m(C,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let f=e(`h1`,l);a(l,f),a(f,c(`Stack 堆叠容器`));let g=e(`p`,l);a(l,g),s(g,`text-sm mt-3 mb-3`),a(g,c(`Stack 保留 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了原有的`));let b=e(`code`,g);a(g,b),a(b,c(`vertical`)),a(g,c(`和`));let x=e(`code`,g);a(g,x),a(x,c(`horizontal`)),a(g,c(`，现在还支持`));let C=e(`code`,g);a(g,C),a(C,c(`placement`));let w=h(g);a(g,w),u(w,` `),a(g,c(`组合定位，以及`));let E=e(`code`,g);a(g,E),a(E,c(`reverse`)),a(g,c(`反向层级。`));let D=e(`h2`,l);a(l,D),a(D,c(`何时使用`));let O=e(`ul`,l);a(l,O);let k=e(`li`,O);a(O,k),a(k,c(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let A=e(`li`,O);a(O,A),a(A,c(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let j=e(`li`,O);a(O,j),a(j,c(`需要保留已有堆叠视觉，但希望额外控制最新项是否位于最上层。`));let M=o(`rue:component:anchor`);a(l,M),i(()=>{let e=m(T,{title:`基础堆叠`,summary:`保留原来的 3 div stack demo，作为最小可用写法。`,tab:_.basic,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[y(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),y(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),y(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`});t(()=>p(e,l,M))});let ne=o(`rue:component:anchor`);a(l,ne),i(()=>{let e=m(T,{title:`图片堆叠`,summary:`保留原来的 stacked images，用于相册封面或图库预览。`,tab:_.images,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`w-48`,"data-testid":`stack-images`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
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
</Stack>`});t(()=>p(e,l,ne))});let re=o(`rue:component:anchor`);a(l,re),i(()=>{let e=m(T,{title:`卡片堆叠`,summary:`保留原来的 stacked cards，适合做 deck、ticket 或文件层。`,tab:_.cards,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`size-28`,"data-testid":`stack-cards`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});t(()=>p(e,l,re))});let ie=o(`rue:component:anchor`);a(l,ie),i(()=>{let e=m(T,{title:`对齐与 Placement`,summary:`旧的 vertical / horizontal 继续可用；新增 placement 可以直接表达组合定位。`,tab:_.alignment,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),v(S,{className:`size-28`,vertical:`top`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),v(S,{className:`size-28`,horizontal:`start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),v(S,{className:`size-28`,placement:`top-end`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),v(S,{className:`size-28`,placement:`bottom-start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
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
</Stack>`});t(()=>p(e,l,ie))});let ae=o(`rue:component:anchor`);a(l,ae),i(()=>{let e=m(T,{title:`反向层级`,summary:`reverse 适合把最新版本、最新消息或最新封面放在最上层。`,tab:_.reverse,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),v(S,{className:`w-44`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),v(S,{className:`w-44`,reverse:!0,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-primary/30 bg-primary/5 p-4 text-primary`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary/30 bg-primary/5 p-4 text-primary">v3 Final copy</div>
</Stack>`});t(()=>p(e,l,ae))});let oe=o(`rue:component:anchor`);a(l,oe),i(()=>{let e=m(T,{title:`阴影层次`,summary:`保留原来的 shadow 示例，适合强调卡片深度和层级关系。`,tab:_.shadow,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{children:[y(`div`,{className:`card bg-base-200 text-center shadow-md`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card bg-base-200 text-center shadow`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`});t(()=>p(e,l,oe))});let se=o(`rue:component:anchor`);a(l,se),i(()=>{let e=m(T,{title:`通知堆叠`,summary:`保留原来的通知 demo，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:_.notifications,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-56 w-full max-w-md`,reverse:!0,children:[y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 1`}),y(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 2`}),y(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),y(`div`,{className:`card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title text-success`,children:`Notification 3`}),y(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="h-56 w-full max-w-md" reverse>
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
</Stack>`});t(()=>p(e,l,se))});let ce=o(`rue:component:anchor`);a(l,ce),i(()=>{let e=m(T,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:_.scene,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),v(S,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),y(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),y(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),v(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),y(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),v(S,{className:`w-56`,placement:`top-start`,reverse:!0,children:[y(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),y(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),y(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`});t(()=>p(e,l,ce))});let N=e(`h2`,l);a(l,N),d(N,`id`,`stack-api`),a(N,c(`API`));let P=e(`p`,l);a(l,P),a(P,c(`当前页面展示的是 Stack 的完整可用 API，旧属性保留，新属性作为语义增强层补充进来。`));let F=o(`rue:component:anchor`);a(l,F),i(()=>{let e=m(ee,{rows:te});t(()=>p(e,l,F))});let I=e(`div`,l);a(l,I),s(I,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let L=e(`h3`,I);a(I,L),s(L,`mt-0 mb-3 text-base font-semibold`),a(L,c(`placement 快捷映射`));let R=e(`div`,I);a(I,R),s(R,`grid gap-2 text-sm md:grid-cols-2`);let z=e(`div`,R);a(R,z);let B=e(`code`,z);a(z,B),a(B,c(`placement="top"`)),a(z,c(`→`));let V=e(`code`,z);a(z,V),a(V,c(`vertical="top"`));let H=e(`div`,R);a(R,H);let U=e(`code`,H);a(H,U),a(U,c(`placement="bottom"`)),a(H,c(`→`));let W=e(`code`,H);a(H,W),a(W,c(`vertical="bottom"`));let G=e(`div`,R);a(R,G);let K=e(`code`,G);a(G,K),a(K,c(`placement="start"`)),a(G,c(`→`));let le=e(`code`,G);a(G,le),a(le,c(`horizontal="start"`));let q=e(`div`,R);a(R,q);let ue=e(`code`,q);a(q,ue),a(ue,c(`placement="end"`)),a(q,c(`→`));let de=e(`code`,q);a(q,de),a(de,c(`horizontal="end"`));let J=e(`div`,R);a(R,J);let fe=e(`code`,J);a(J,fe),a(fe,c(`placement="top-start"`)),a(J,c(`→`));let pe=e(`code`,J);a(J,pe),a(pe,c(`vertical="top" + horizontal="start"`));let Y=e(`div`,R);a(R,Y);let me=e(`code`,Y);a(Y,me),a(me,c(`placement="bottom-end"`)),a(Y,c(`→`));let he=h(Y);a(Y,he),u(he,` `);let ge=e(`code`,Y);a(Y,ge),a(ge,c(`vertical="bottom" + horizontal="end"`));let _e=e(`h2`,l);a(l,_e),a(_e,c(`FAQ`));let ve=e(`h3`,l);a(l,ve),a(ve,c(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=e(`p`,l);a(l,X);let ye=e(`code`,X);a(X,ye),a(ye,c(`placement`)),a(X,c(`适合快速写组合定位，尤其是`));let be=e(`code`,X);a(X,be),a(be,c(`top-end`)),a(X,c(`、`));let xe=e(`code`,X);a(X,xe),a(xe,c(`bottom-start`)),a(X,c(`这类常见场景。 如果你已经在用旧 API，也可以继续沿用原来的`));let Se=h(X);a(X,Se),u(Se,` `);let Z=e(`code`,X);a(X,Z),a(Z,c(`vertical`)),a(X,c(`和`));let Ce=e(`code`,X);a(X,Ce),a(Ce,c(`horizontal`)),a(X,c(`。`));let we=e(`h3`,l);a(l,we),a(we,c(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=e(`p`,l);a(l,Q),a(Q,c(`显式传入的`));let Te=e(`code`,Q);a(Q,Te),a(Te,c(`vertical`)),a(Q,c(`、`));let Ee=e(`code`,Q);a(Q,Ee),a(Ee,c(`horizontal`)),a(Q,c(`优先级更高。也就是说，`));let De=e(`code`,Q);a(Q,De),a(De,c(`placement`)),a(Q,c(`更像一个快捷预设，而不是强制覆盖层。`));let Oe=e(`h3`,l);a(l,Oe),a(Oe,c(`reverse 会改变样式还是改变 DOM 顺序？`));let $=e(`p`,l);a(l,$);let ke=e(`code`,$);a($,ke),a(ke,c(`reverse`));let Ae=h($);return a($,Ae),u(Ae,` `),a($,c(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),r})}),f,g),f})};export{E as default};