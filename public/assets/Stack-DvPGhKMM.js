import{$t as e,Jt as t,Q as n,dt as r,et as i,in as a,it as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,vt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g,n as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as v,i as y}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as b}from"./Code-4SUSUwRg.js";import{t as x}from"./tabs-Duzh3URW.js";import{t as S}from"./stack-dXyv3RUo.js";import{r as C}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as w}from"./preview-test-gate-nDDBbirJ.js";var T=t=>s(a=>{let o=l(`div`,a);r(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=l(`div`,o);n(o,c),r(c,`flex flex-wrap items-start justify-between gap-3`);let m=l(`div`,c);n(c,m);let g=l(`h2`,m);n(m,g),r(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,d(`# `));let _=i(`rue:slot:anchor`);n(g,_),h(()=>{let n=t.title;e(()=>u(n,g,_))});let v=i(`rue:slot:anchor`);n(m,v),h(()=>{let a=t.summary?s(()=>{let a=p(),o=l(`p`,a);n(a,o),r(o,`m-0 text-sm opacity-70`);let s=i(`rue:slot:anchor`);return n(o,s),h(()=>{let n=t.summary;e(()=>u(n,o,s))}),a}):``;e(()=>u(a,m,v))});let y=i(`rue:component:anchor`);n(o,y),h(()=>{let n=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>u(n,o,y))});let S=i(`rue:slot:anchor`);return n(o,S),h(()=>{let r=t.tab.value===`preview`?w(t.title,t.preview):s(()=>{let r=p(),a=i(`rue:component:anchor`);return n(r,a),h(()=>{let n=f(b,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>u(n,r,a))}),r});e(()=>u(r,o,S))}),o}),ee=t=>s(a=>{let o=l(`div`,a);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=l(`table`,o);n(o,f),r(f,`table table-zebra`);let m=l(`thead`,f);n(f,m);let g=l(`tr`,m);n(m,g);let v=l(`th`,g);n(g,v),n(v,d(`属性`));let y=l(`th`,g);n(g,y),n(y,d(`说明`));let b=l(`th`,g);n(g,b),n(b,d(`类型`));let x=l(`th`,g);n(g,x),n(x,d(`默认值`));let S=l(`tbody`,f);n(f,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return h(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,a,o,d)=>{u(s(()=>{let r=p(),a=l(`tr`,r);n(r,a),h(()=>{c(a,`key`,String(t.prop))});let o=l(`td`,a);n(a,o);let s=l(`code`,o);n(o,s);let d=i(`rue:slot:anchor`);n(s,d),h(()=>{let n=t.prop;e(()=>u(n,s,d))});let f=l(`td`,a);n(a,f);let m=i(`rue:slot:anchor`);n(f,m),h(()=>{let n=t.description;e(()=>u(n,f,m))});let g=l(`td`,a);n(a,g);let _=l(`code`,g);n(g,_);let v=i(`rue:slot:anchor`);n(_,v),h(()=>{let n=t.type;e(()=>u(n,_,v))});let y=l(`td`,a);n(a,y);let b=l(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),h(()=>{let n=t.defaultValue;e(()=>u(n,b,x))}),r}),r,a)}})}),o}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],E=()=>{let{tabs:_}=g(`useSetup:0:0`,()=>a(()=>({tabs:{basic:g(`ref:1:0`,()=>t(`preview`)),images:g(`ref:1:1`,()=>t(`preview`)),cards:g(`ref:1:2`,()=>t(`preview`)),alignment:g(`ref:1:3`,()=>t(`preview`)),reverse:g(`ref:1:4`,()=>t(`preview`)),shadow:g(`ref:1:5`,()=>t(`preview`)),notifications:g(`ref:1:6`,()=>t(`preview`)),scene:g(`ref:1:7`,()=>t(`preview`))}})));return s(t=>{let a=p(),g=i(`rue:component:anchor`);return n(a,g),u(f(C,{children:s(()=>{let t=p(),a=l(`div`,t);n(t,a),r(a,`max-w-none prose prose-sm md:prose-base`);let s=l(`h1`,a);n(a,s),n(s,d(`Stack 堆叠容器`));let g=l(`p`,a);n(a,g),r(g,`text-sm mt-3 mb-3`),n(g,d(`Stack 使用 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了基础的`));let b=l(`code`,g);n(g,b),n(b,d(`vertical`)),n(g,d(`和`));let x=l(`code`,g);n(g,x),n(x,d(`horizontal`)),n(g,d(`，现在还支持`));let C=l(`code`,g);n(g,C),n(C,d(`placement`));let w=o(g);n(g,w),m(w,` `),n(g,d(`组合定位，以及`));let E=l(`code`,g);n(g,E),n(E,d(`reverse`)),n(g,d(`反向层级。`));let D=l(`h2`,a);n(a,D),n(D,d(`何时使用`));let O=l(`ul`,a);n(a,O);let k=l(`li`,O);n(O,k),n(k,d(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let A=l(`li`,O);n(O,A),n(A,d(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let j=l(`li`,O);n(O,j),n(j,d(`需要保持当前堆叠视觉，但希望额外控制最新项是否位于最上层。`));let M=i(`rue:component:anchor`);n(a,M),h(()=>{let t=f(T,{title:`基础堆叠`,summary:`展示 3 div stackDemo，作为最小可用写法。`,tab:_.basic,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[y(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),y(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),y(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`});e(()=>u(t,a,M))});let ne=i(`rue:component:anchor`);n(a,ne),h(()=>{let t=f(T,{title:`图片堆叠`,summary:`展示 stacked images，用于相册封面或图库预览。`,tab:_.images,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`w-48`,"data-testid":`stack-images`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
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
</Stack>`});e(()=>u(t,a,ne))});let re=i(`rue:component:anchor`);n(a,re),h(()=>{let t=f(T,{title:`卡片堆叠`,summary:`展示 stacked cards，适合做 deck、ticket 或文件层。`,tab:_.cards,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`size-28`,"data-testid":`stack-cards`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`});e(()=>u(t,a,re))});let ie=i(`rue:component:anchor`);n(a,ie),h(()=>{let t=f(T,{title:`对齐与 Placement`,summary:`基础的 vertical / horizontal 继续可用；placement 可以直接表达组合定位。`,tab:_.alignment,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),v(S,{className:`size-28`,vertical:`top`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),v(S,{className:`size-28`,horizontal:`start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),v(S,{className:`size-28`,placement:`top-end`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),v(S,{className:`size-28`,placement:`bottom-start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
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
</Stack>`});e(()=>u(t,a,ie))});let ae=i(`rue:component:anchor`);n(a,ae),h(()=>{let t=f(T,{title:`反向层级`,summary:`reverse 适合把最当前本、最新消息或最新封面放在最上层。`,tab:_.reverse,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),v(S,{className:`w-44`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),v(S,{className:`w-44`,reverse:!0,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary bg-primary p-4 text-primary-content shadow-sm">v3 Final copy</div>
</Stack>`});e(()=>u(t,a,ae))});let oe=i(`rue:component:anchor`);n(a,oe),h(()=>{let t=f(T,{title:`阴影层次`,summary:`展示 shadow 示例，适合强调卡片深度和层级关系。`,tab:_.shadow,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{children:[y(`div`,{className:`card bg-base-200 text-center shadow-md`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card bg-base-200 text-center shadow`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`});e(()=>u(t,a,oe))});let se=i(`rue:component:anchor`);n(a,se),h(()=>{let t=f(T,{title:`通知堆叠`,summary:`展示通知示例，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:_.notifications,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(S,{className:`h-56 w-full max-w-md`,reverse:!0,children:[y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 1`}),y(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),y(`div`,{className:`card h-full bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 2`}),y(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),y(`div`,{className:`card h-full border border-success/30 bg-base-100 shadow-md ring-1 ring-success/15`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title text-success`,children:`Notification 3`}),y(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="h-56 w-full max-w-md" reverse>
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
</Stack>`});e(()=>u(t,a,se))});let ce=i(`rue:component:anchor`);n(a,ce),h(()=>{let t=f(T,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:_.scene,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),v(S,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),y(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),y(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),v(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),y(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),v(S,{className:`w-56`,placement:`top-start`,reverse:!0,children:[y(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),y(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),y(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`});e(()=>u(t,a,ce))});let N=l(`h2`,a);n(a,N),c(N,`id`,`stack-api`),n(N,d(`API`));let P=l(`p`,a);n(a,P),n(P,d(`当前页面展示的是 Stack 的完整可用 API，基础属性保持，新属性作为语义增强层补充进来。`));let F=i(`rue:component:anchor`);n(a,F),h(()=>{let t=f(ee,{rows:te});e(()=>u(t,a,F))});let I=l(`div`,a);n(a,I),r(I,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let L=l(`h3`,I);n(I,L),r(L,`mt-0 mb-3 text-base font-semibold`),n(L,d(`placement 快捷映射`));let R=l(`div`,I);n(I,R),r(R,`grid gap-2 text-sm md:grid-cols-2`);let z=l(`div`,R);n(R,z);let B=l(`code`,z);n(z,B),n(B,d(`placement="top"`)),n(z,d(`→`));let V=l(`code`,z);n(z,V),n(V,d(`vertical="top"`));let H=l(`div`,R);n(R,H);let U=l(`code`,H);n(H,U),n(U,d(`placement="bottom"`)),n(H,d(`→`));let W=l(`code`,H);n(H,W),n(W,d(`vertical="bottom"`));let G=l(`div`,R);n(R,G);let K=l(`code`,G);n(G,K),n(K,d(`placement="start"`)),n(G,d(`→`));let le=l(`code`,G);n(G,le),n(le,d(`horizontal="start"`));let q=l(`div`,R);n(R,q);let ue=l(`code`,q);n(q,ue),n(ue,d(`placement="end"`)),n(q,d(`→`));let de=l(`code`,q);n(q,de),n(de,d(`horizontal="end"`));let J=l(`div`,R);n(R,J);let fe=l(`code`,J);n(J,fe),n(fe,d(`placement="top-start"`)),n(J,d(`→`));let pe=l(`code`,J);n(J,pe),n(pe,d(`vertical="top" + horizontal="start"`));let Y=l(`div`,R);n(R,Y);let me=l(`code`,Y);n(Y,me),n(me,d(`placement="bottom-end"`)),n(Y,d(`→`));let he=o(Y);n(Y,he),m(he,` `);let ge=l(`code`,Y);n(Y,ge),n(ge,d(`vertical="bottom" + horizontal="end"`));let _e=l(`h2`,a);n(a,_e),n(_e,d(`FAQ`));let ve=l(`h3`,a);n(a,ve),n(ve,d(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=l(`p`,a);n(a,X);let ye=l(`code`,X);n(X,ye),n(ye,d(`placement`)),n(X,d(`适合快速写组合定位，尤其是`));let be=l(`code`,X);n(X,be),n(be,d(`top-end`)),n(X,d(`、`));let xe=l(`code`,X);n(X,xe),n(xe,d(`bottom-start`)),n(X,d(`这类常见场景。 如果你已经在用API，也可以使用基础的`));let Se=o(X);n(X,Se),m(Se,` `);let Z=l(`code`,X);n(X,Z),n(Z,d(`vertical`)),n(X,d(`和`));let Ce=l(`code`,X);n(X,Ce),n(Ce,d(`horizontal`)),n(X,d(`。`));let we=l(`h3`,a);n(a,we),n(we,d(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=l(`p`,a);n(a,Q),n(Q,d(`显式传入的`));let Te=l(`code`,Q);n(Q,Te),n(Te,d(`vertical`)),n(Q,d(`、`));let Ee=l(`code`,Q);n(Q,Ee),n(Ee,d(`horizontal`)),n(Q,d(`优先级更高。也就是说，`));let De=l(`code`,Q);n(Q,De),n(De,d(`placement`)),n(Q,d(`更像一个快捷预设，而不是强制覆盖层。`));let Oe=l(`h3`,a);n(a,Oe),n(Oe,d(`reverse 会改变样式还是改变 DOM 顺序？`));let $=l(`p`,a);n(a,$);let ke=l(`code`,$);n($,ke),n(ke,d(`reverse`));let Ae=o($);return n($,Ae),m(Ae,` `),n($,d(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),t})}),a,g),a})};export{E as default};