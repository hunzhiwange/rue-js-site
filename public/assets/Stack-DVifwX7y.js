import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g,n as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{n as y,t as b}from"./src-CCTNpCXV.js";import{t as x}from"./tabs-B1XdBEJF.js";import{t as S}from"./stack-BC-s-Vka.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as w}from"./preview-test-gate-DVT0twjZ.js";var T=e=>p(t=>{let n=l(`div`,t);r(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=l(`div`,n);u(n,o),r(o,`flex flex-wrap items-start justify-between gap-3`);let c=l(`div`,o);u(o,c);let g=l(`h2`,c);u(c,g),r(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(g,s(`# `));let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let t=e.title;f(()=>m(t,g,_))});let y=i(`rue:slot:anchor`);u(c,y),d(()=>{let t=e.summary?p(()=>{let t=a(),n=l(`p`,t);u(t,n),r(n,`m-0 text-sm opacity-70`);let o=i(`rue:slot:anchor`);return u(n,o),d(()=>{let t=e.summary;f(()=>m(t,n,o))}),t}):``;f(()=>m(t,c,y))});let b=i(`rue:component:anchor`);u(n,b),d(()=>{let t=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});f(()=>m(t,n,b))});let S=i(`rue:slot:anchor`);return u(n,S),d(()=>{let t=e.tab.value===`preview`?w(e.title,e.preview):p(()=>{let t=a(),n=i(`rue:component:anchor`);return u(t,n),d(()=>{let r=h(v,{className:`mt-2`,lang:`tsx`,code:e.code});f(()=>m(r,t,n))}),t});f(()=>m(t,n,S))}),n}),ee=e=>p(n=>{let o=l(`div`,n);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,o);u(o,c),r(c,`table table-zebra`);let h=l(`thead`,c);u(c,h);let g=l(`tr`,h);u(h,g);let v=l(`th`,g);u(g,v),u(v,s(`属性`));let y=l(`th`,g);u(g,y),u(y,s(`说明`));let b=l(`th`,g);u(g,b),u(b,s(`类型`));let x=l(`th`,g);u(g,x),u(x,s(`默认值`));let S=l(`tbody`,c);u(c,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);u(S,C),u(S,w);let T=new Map;return d(()=>{T=_({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,o,s)=>{m(p(()=>{let n=a(),r=l(`tr`,n);u(n,r),d(()=>{t(r,`key`,String(e.prop))});let o=l(`td`,r);u(r,o);let s=l(`code`,o);u(o,s);let c=i(`rue:slot:anchor`);u(s,c),d(()=>{let t=e.prop;f(()=>m(t,s,c))});let p=l(`td`,r);u(r,p);let h=i(`rue:slot:anchor`);u(p,h),d(()=>{let t=e.description;f(()=>m(t,p,h))});let g=l(`td`,r);u(r,g);let _=l(`code`,g);u(g,_);let v=i(`rue:slot:anchor`);u(_,v),d(()=>{let t=e.type;f(()=>m(t,_,v))});let y=l(`td`,r);u(r,y);let b=l(`code`,y);u(y,b);let x=i(`rue:slot:anchor`);return u(b,x),d(()=>{let t=e.defaultValue;f(()=>m(t,b,x))}),n}),n,r)}})}),o}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],E=()=>{let{tabs:_}=g(`useSetup:0:0`,()=>e(()=>({tabs:{basic:g(`ref:1:0`,()=>c(`preview`)),images:g(`ref:1:1`,()=>c(`preview`)),cards:g(`ref:1:2`,()=>c(`preview`)),alignment:g(`ref:1:3`,()=>c(`preview`)),reverse:g(`ref:1:4`,()=>c(`preview`)),shadow:g(`ref:1:5`,()=>c(`preview`)),notifications:g(`ref:1:6`,()=>c(`preview`)),scene:g(`ref:1:7`,()=>c(`preview`))}})));return p(e=>{let c=a(),g=i(`rue:component:anchor`);return u(c,g),m(h(C,{children:p(()=>{let e=a(),c=l(`div`,e);u(e,c),r(c,`max-w-none prose prose-sm md:prose-base`);let p=l(`h1`,c);u(c,p),u(p,s(`Stack 堆叠容器`));let g=l(`p`,c);u(c,g),r(g,`text-sm mt-3 mb-3`),u(g,s(`Stack 使用 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了基础的`));let v=l(`code`,g);u(g,v),u(v,s(`vertical`)),u(g,s(`和`));let x=l(`code`,g);u(g,x),u(x,s(`horizontal`)),u(g,s(`，现在还支持`));let C=l(`code`,g);u(g,C),u(C,s(`placement`));let w=o(g);u(g,w),n(w,` `),u(g,s(`组合定位，以及`));let E=l(`code`,g);u(g,E),u(E,s(`reverse`)),u(g,s(`反向层级。`));let D=l(`h2`,c);u(c,D),u(D,s(`何时使用`));let O=l(`ul`,c);u(c,O);let k=l(`li`,O);u(O,k),u(k,s(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let A=l(`li`,O);u(O,A),u(A,s(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let j=l(`li`,O);u(O,j),u(j,s(`需要保持当前堆叠视觉，但希望额外控制最新项是否位于最上层。`));let M=i(`rue:component:anchor`);u(c,M),d(()=>{let e=h(T,{title:`基础堆叠`,summary:`展示 3 div stackDemo，作为最小可用写法。`,tab:_.basic,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[b(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),b(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),b(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`});f(()=>m(e,c,M))});let ne=i(`rue:component:anchor`);u(c,ne),d(()=>{let e=h(T,{title:`图片堆叠`,summary:`展示 stacked images，用于相册封面或图库预览。`,tab:_.images,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{className:`w-48`,"data-testid":`stack-images`,children:[b(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),b(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),b(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
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
</Stack>`});f(()=>m(e,c,ne))});let re=i(`rue:component:anchor`);u(c,re),d(()=>{let e=h(T,{title:`卡片堆叠`,summary:`展示 stacked cards，适合做 deck、ticket 或文件层。`,tab:_.cards,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{className:`size-28`,"data-testid":`stack-cards`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});f(()=>m(e,c,re))});let ie=i(`rue:component:anchor`);u(c,ie),d(()=>{let e=h(T,{title:`对齐与 Placement`,summary:`基础的 vertical / horizontal 继续可用；placement 可以直接表达组合定位。`,tab:_.alignment,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),y(S,{className:`size-28`,vertical:`top`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]}),y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),y(S,{className:`size-28`,horizontal:`start`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]}),y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),y(S,{className:`size-28`,placement:`top-end`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]}),y(`div`,{className:`flex flex-col gap-3`,children:[b(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),y(S,{className:`size-28`,placement:`bottom-start`,children:[b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:b(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
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
</Stack>`});f(()=>m(e,c,ie))});let ae=i(`rue:component:anchor`);u(c,ae),d(()=>{let e=h(T,{title:`反向层级`,summary:`reverse 适合把最当前本、最新消息或最新封面放在最上层。`,tab:_.reverse,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),y(S,{className:`w-44`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),y(S,{className:`w-44`,reverse:!0,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),b(`div`,{className:`rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm">v3 Final copy</div>
</Stack>`});f(()=>m(e,c,ae))});let oe=i(`rue:component:anchor`);u(c,oe),d(()=>{let e=h(T,{title:`阴影层次`,summary:`展示 shadow 示例，适合强调卡片深度和层级关系。`,tab:_.shadow,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{children:[b(`div`,{className:`card bg-base-200 text-center shadow-md`,children:b(`div`,{className:`card-body`,children:`A`})}),b(`div`,{className:`card bg-base-200 text-center shadow`,children:b(`div`,{className:`card-body`,children:`B`})}),b(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:b(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`});f(()=>m(e,c,oe))});let se=i(`rue:component:anchor`);u(c,se),d(()=>{let e=h(T,{title:`通知堆叠`,summary:`展示通知示例，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:_.notifications,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(S,{className:`h-56 w-full max-w-md`,reverse:!0,children:[b(`div`,{className:`card h-full bg-base-100 shadow-md`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title`,children:`Notification 1`}),b(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),b(`div`,{className:`card h-full bg-base-100 shadow-md`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title`,children:`Notification 2`}),b(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),b(`div`,{className:`card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title text-success`,children:`Notification 3`}),b(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="h-56 w-full max-w-md" reverse>
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
</Stack>`});f(()=>m(e,c,se))});let ce=i(`rue:component:anchor`);u(c,ce),d(()=>{let e=h(T,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:_.scene,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[y(`section`,{children:[b(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),y(S,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),b(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),b(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),y(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[b(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),b(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),y(`section`,{children:[b(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),y(S,{className:`w-56`,placement:`top-start`,reverse:!0,children:[b(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),b(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),b(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`});f(()=>m(e,c,ce))});let N=l(`h2`,c);u(c,N),t(N,`id`,`stack-api`),u(N,s(`API`));let P=l(`p`,c);u(c,P),u(P,s(`当前页面展示的是 Stack 的完整可用 API，基础属性保持，新属性作为语义增强层补充进来。`));let F=i(`rue:component:anchor`);u(c,F),d(()=>{let e=h(ee,{rows:te});f(()=>m(e,c,F))});let I=l(`div`,c);u(c,I),r(I,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let L=l(`h3`,I);u(I,L),r(L,`mt-0 mb-3 text-base font-semibold`),u(L,s(`placement 快捷映射`));let R=l(`div`,I);u(I,R),r(R,`grid gap-2 text-sm md:grid-cols-2`);let z=l(`div`,R);u(R,z);let B=l(`code`,z);u(z,B),u(B,s(`placement="top"`)),u(z,s(`→`));let V=l(`code`,z);u(z,V),u(V,s(`vertical="top"`));let H=l(`div`,R);u(R,H);let U=l(`code`,H);u(H,U),u(U,s(`placement="bottom"`)),u(H,s(`→`));let W=l(`code`,H);u(H,W),u(W,s(`vertical="bottom"`));let G=l(`div`,R);u(R,G);let K=l(`code`,G);u(G,K),u(K,s(`placement="start"`)),u(G,s(`→`));let le=l(`code`,G);u(G,le),u(le,s(`horizontal="start"`));let q=l(`div`,R);u(R,q);let ue=l(`code`,q);u(q,ue),u(ue,s(`placement="end"`)),u(q,s(`→`));let de=l(`code`,q);u(q,de),u(de,s(`horizontal="end"`));let J=l(`div`,R);u(R,J);let fe=l(`code`,J);u(J,fe),u(fe,s(`placement="top-start"`)),u(J,s(`→`));let pe=l(`code`,J);u(J,pe),u(pe,s(`vertical="top" + horizontal="start"`));let Y=l(`div`,R);u(R,Y);let me=l(`code`,Y);u(Y,me),u(me,s(`placement="bottom-end"`)),u(Y,s(`→`));let he=o(Y);u(Y,he),n(he,` `);let ge=l(`code`,Y);u(Y,ge),u(ge,s(`vertical="bottom" + horizontal="end"`));let _e=l(`h2`,c);u(c,_e),u(_e,s(`FAQ`));let ve=l(`h3`,c);u(c,ve),u(ve,s(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=l(`p`,c);u(c,X);let ye=l(`code`,X);u(X,ye),u(ye,s(`placement`)),u(X,s(`适合快速写组合定位，尤其是`));let be=l(`code`,X);u(X,be),u(be,s(`top-end`)),u(X,s(`、`));let xe=l(`code`,X);u(X,xe),u(xe,s(`bottom-start`)),u(X,s(`这类常见场景。 如果你已经在用API，也可以使用基础的`));let Se=o(X);u(X,Se),n(Se,` `);let Z=l(`code`,X);u(X,Z),u(Z,s(`vertical`)),u(X,s(`和`));let Ce=l(`code`,X);u(X,Ce),u(Ce,s(`horizontal`)),u(X,s(`。`));let we=l(`h3`,c);u(c,we),u(we,s(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=l(`p`,c);u(c,Q),u(Q,s(`显式传入的`));let Te=l(`code`,Q);u(Q,Te),u(Te,s(`vertical`)),u(Q,s(`、`));let Ee=l(`code`,Q);u(Q,Ee),u(Ee,s(`horizontal`)),u(Q,s(`优先级更高。也就是说，`));let De=l(`code`,Q);u(Q,De),u(De,s(`placement`)),u(Q,s(`更像一个快捷预设，而不是强制覆盖层。`));let Oe=l(`h3`,c);u(c,Oe),u(Oe,s(`reverse 会改变样式还是改变 DOM 顺序？`));let $=l(`p`,c);u(c,$);let ke=l(`code`,$);u($,ke),u(ke,s(`reverse`));let Ae=o($);return u($,Ae),n(Ae,` `),u($,s(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),e})}),c,g),c})};export{E as default};