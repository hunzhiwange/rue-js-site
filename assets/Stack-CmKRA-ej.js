import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,_ as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as v,t as y}from"./src-DP0sEeZS.js";import{n as b}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as x}from"./Code-C8wy38VS.js";import{t as S}from"./tabs-B-QPmbH8.js";var C=(e,t)=>t?`${e} ${t}`:e,w=e=>Array.isArray(e)?e.flatMap(e=>w(e)):e==null?[]:[e],T=e=>{switch(e){case`top`:return{vertical:`top`};case`bottom`:return{vertical:`bottom`};case`start`:return{horizontal:`start`};case`end`:return{horizontal:`end`};case`top-start`:return{vertical:`top`,horizontal:`start`};case`top-end`:return{vertical:`top`,horizontal:`end`};case`bottom-start`:return{vertical:`bottom`,horizontal:`start`};case`bottom-end`:return{vertical:`bottom`,horizontal:`end`};default:return{}}},E=({as:e=`div`,vertical:t,horizontal:n,placement:r,reverse:i,className:a,children:o,...s})=>{let l=e,u=T(r),d=t??u.vertical,f=n??u.horizontal,p=w(o),m=i?[...p].reverse():p,h=`stack`;return d&&d!==`center`&&(h+=` stack-${d}`),f&&f!==`center`&&(h+=` stack-${f}`),c(l,{...s,className:C(h,a)},...m)},D=({title:t,summary:c,tab:f,preview:h,code:g})=>m(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let C=r(b);u(b,C),d(()=>{s(C,t)});let w=i(`rue:slot:anchor`);u(y,w),d(()=>{l(c?m(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),d(()=>{s(i,c)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),d(()=>{l(p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),d(()=>{l(f.value===`preview`?h():m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{l(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),ee=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=e(`table`);u(s,c),o(c,`table table-zebra`);let f=e(`thead`);u(c,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(c,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,c)=>{l(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let c=e(`code`);u(s,c);let f=i(`rue:slot:anchor`);u(c,f),d(()=>{let e=n.prop;l(e,c,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;l(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;l(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;l(e,y,b)}),r}),r,o)}})}),s}),te=[{prop:`as`,description:`指定根节点标签或组件，适合 section、article 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`className`,description:`补充容器尺寸、圆角、边框、背景等样式。`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平方向定位；显式传入时会覆盖 placement 里的水平预设。`,type:`'center' | 'start' | 'end'`,defaultValue:`'center'`},{prop:`placement`,description:`组合定位快捷写法，用一条属性同时声明 vertical 和 horizontal。`,type:`'center' | 'top' | 'bottom' | 'start' | 'end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'`,defaultValue:`'center'`},{prop:`reverse`,description:`反转子节点渲染顺序，适合把最新项放在最上层。`,type:`boolean`,defaultValue:`false`},{prop:`vertical`,description:`垂直方向定位；显式传入时会覆盖 placement 里的垂直预设。`,type:`'center' | 'top' | 'bottom'`,defaultValue:`'center'`}],O=()=>{let{tabs:c}=g(`useSetup:0:0`,()=>h(()=>({tabs:{basic:g(`ref:1:0`,()=>f(`preview`)),images:g(`ref:1:1`,()=>f(`preview`)),cards:g(`ref:1:2`,()=>f(`preview`)),alignment:g(`ref:1:3`,()=>f(`preview`)),reverse:g(`ref:1:4`,()=>f(`preview`)),shadow:g(`ref:1:5`,()=>f(`preview`)),notifications:g(`ref:1:6`,()=>f(`preview`)),scene:g(`ref:1:7`,()=>f(`preview`))}})));return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),l(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Stack 堆叠容器`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`Stack 保留 Rue 当前的 stack 视觉风格，同时把 API 补成更清晰的语义层。除了原有的`));let _=e(`code`);u(g,_),u(_,n(`vertical`)),u(g,n(`和`));let b=e(`code`);u(g,b),u(b,n(`horizontal`)),u(g,n(`，现在还支持`));let x=e(`code`);u(g,x),u(x,n(`placement`));let S=r(g);u(g,S),s(S,` `),u(g,n(`组合定位，以及`));let C=e(`code`);u(g,C),u(C,n(`reverse`)),u(g,n(`反向层级。`));let w=e(`div`);u(m,w),o(w,`text-sm flex flex-wrap gap-4`);let T=e(`a`);u(w,T),t(T,`href`,`https://daisyui.com/components/stack/`),t(T,`target`,`_blank`),u(T,n(`查看 Stack 静态样式`));let O=e(`h2`);u(m,O),u(O,n(`何时使用`));let k=e(`ul`);u(m,k);let A=e(`li`);u(k,A),u(A,n(`需要把多张卡片、图片、文件封面或通知面板做成同一视觉堆叠。`));let j=e(`li`);u(k,j),u(j,n(`需要用一条属性快速切换堆叠朝向和落点，而不想反复记忆底层 class。`));let M=e(`li`);u(k,M),u(M,n(`需要保留已有堆叠视觉，但希望额外控制最新项是否位于最上层。`));let N=i(`rue:component:anchor`);u(m,N),d(()=>{l(p(D,{title:`基础堆叠`,summary:`保留原来的 3 div stack demo，作为最小可用写法。`,tab:c.basic,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(E,{className:`h-20 w-32`,"data-testid":`stack-basic`,children:[y(`div`,{className:`grid place-content-center rounded-box bg-primary text-primary-content`,children:`1`}),y(`div`,{className:`grid place-content-center rounded-box bg-accent text-accent-content`,children:`2`}),y(`div`,{className:`grid place-content-center rounded-box bg-secondary text-secondary-content`,children:`3`})]})})}),code:`<Stack className="h-20 w-32">
  <div className="grid place-content-center rounded-box bg-primary text-primary-content">1</div>
  <div className="grid place-content-center rounded-box bg-accent text-accent-content">2</div>
  <div className="grid place-content-center rounded-box bg-secondary text-secondary-content">3</div>
</Stack>`}),m,N)});let P=i(`rue:component:anchor`);u(m,P),d(()=>{l(p(D,{title:`图片堆叠`,summary:`保留原来的 stacked images，用于相册封面或图库预览。`,tab:c.images,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(E,{className:`w-48`,"data-testid":`stack-images`,children:[y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp`,alt:`Stack example 1`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp`,alt:`Stack example 2`,className:`rounded-box`}),y(`img`,{src:`https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp`,alt:`Stack example 3`,className:`rounded-box`})]})})}),code:`<Stack className="w-48">
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
</Stack>`}),m,P)});let ne=i(`rue:component:anchor`);u(m,ne),d(()=>{l(p(D,{title:`卡片堆叠`,summary:`保留原来的 stacked cards，适合做 deck、ticket 或文件层。`,tab:c.cards,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(E,{className:`size-28`,"data-testid":`stack-cards`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack className="size-28">
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">A</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">B</div>
  </div>
  <div className="card border border-base-content bg-base-100 text-center">
    <div className="card-body">C</div>
  </div>
</Stack>`}),m,ne)});let re=i(`rue:component:anchor`);u(m,re),d(()=>{l(p(D,{title:`对齐与 Placement`,summary:`旧的 vertical / horizontal 继续可用；新增 placement 可以直接表达组合定位。`,tab:c.alignment,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-6 md:grid-cols-4`,"data-testid":`stack-alignment-grid`,children:[v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`vertical="top"`}),v(E,{className:`size-28`,vertical:`top`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`horizontal="start"`}),v(E,{className:`size-28`,horizontal:`start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="top-end"`}),v(E,{className:`size-28`,placement:`top-end`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]}),v(`div`,{className:`flex flex-col gap-3`,children:[y(`span`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/60`,children:`placement="bottom-start"`}),v(E,{className:`size-28`,placement:`bottom-start`,children:[y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card border border-base-content bg-base-100 text-center`,children:y(`div`,{className:`card-body`,children:`C`})})]})]})]})}),code:`<Stack className="size-28" vertical="top">
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
</Stack>`}),m,re)});let ie=i(`rue:component:anchor`);u(m,ie),d(()=>{l(p(D,{title:`反向层级`,summary:`reverse 适合把最新版本、最新消息或最新封面放在最上层。`,tab:c.reverse,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-5 md:grid md:grid-cols-2`,children:[v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Default order`}),v(E,{className:`w-44`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v3 Final copy`})]})]}),v(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`reverse`}),v(E,{className:`w-44`,reverse:!0,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v1 Initial draft`}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:`v2 Review notes`}),y(`div`,{className:`rounded-box border border-primary/30 bg-primary/5 p-4 text-primary`,children:`v3 Final copy`})]})]})]})}),code:`<Stack className="w-44" reverse>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v1 Initial draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">v2 Review notes</div>
  <div className="rounded-box border border-primary/30 bg-primary/5 p-4 text-primary">v3 Final copy</div>
</Stack>`}),m,ie)});let ae=i(`rue:component:anchor`);u(m,ae),d(()=>{l(p(D,{title:`阴影层次`,summary:`保留原来的 shadow 示例，适合强调卡片深度和层级关系。`,tab:c.shadow,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(E,{children:[y(`div`,{className:`card bg-base-200 text-center shadow-md`,children:y(`div`,{className:`card-body`,children:`A`})}),y(`div`,{className:`card bg-base-200 text-center shadow`,children:y(`div`,{className:`card-body`,children:`B`})}),y(`div`,{className:`card bg-base-200 text-center shadow-sm`,children:y(`div`,{className:`card-body`,children:`C`})})]})})}),code:`<Stack>
  <div className="card bg-base-200 text-center shadow-md"><div className="card-body">A</div></div>
  <div className="card bg-base-200 text-center shadow"><div className="card-body">B</div></div>
  <div className="card bg-base-200 text-center shadow-sm"><div className="card-body">C</div></div>
</Stack>`}),m,ae)});let oe=i(`rue:component:anchor`);u(m,oe),d(()=>{l(p(D,{title:`通知堆叠`,summary:`保留原来的通知 demo，并结合 reverse 展示“最新一条在最上层”的常见用法。`,tab:c.notifications,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(E,{className:`w-full max-w-md`,reverse:!0,children:[y(`div`,{className:`card bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 1`}),y(`p`,{children:`You have 3 unread messages. Tap here to see.`})]})}),y(`div`,{className:`card bg-base-100 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Notification 2`}),y(`p`,{children:`Deploy finished successfully. Tap here to open the report.`})]})}),y(`div`,{className:`card border border-success/30 bg-success/5 shadow-md`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title text-success`,children:`Notification 3`}),y(`p`,{children:`Latest release is live. Tap here to share the changelog.`})]})})]})})}),code:`<Stack className="w-full max-w-md" reverse>
  <div className="card bg-base-100 shadow-md">
    <div className="card-body">
      <h2 className="card-title">Notification 1</h2>
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
  <div className="card bg-base-100 shadow-md">
    <div className="card-body">
      <h2 className="card-title">Notification 2</h2>
      <p>Deploy finished successfully. Tap here to open the report.</p>
    </div>
  </div>
  <div className="card border border-success/30 bg-success/5 shadow-md">
    <div className="card-body">
      <h2 className="card-title text-success">Notification 3</h2>
      <p>Latest release is live. Tap here to share the changelog.</p>
    </div>
  </div>
</Stack>`}),m,oe)});let se=i(`rue:component:anchor`);u(m,se),d(()=>{l(p(D,{title:`场景组合`,summary:`把 as、placement、reverse 和 className 组合起来，可以很快搭出带语义的堆叠封面。`,tab:c.scene,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-6 md:grid md:grid-cols-2`,children:[v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Release deck`}),v(E,{as:`section`,className:`w-56`,placement:`bottom-end`,"aria-label":`release deck`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Draft`}),y(`div`,{className:`mt-1 font-semibold`,children:`Roadmap 2026`})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-60`,children:`Review`}),y(`div`,{className:`mt-1 font-semibold`,children:`Product launch notes`})]}),v(`div`,{className:`rounded-box border border-primary/30 bg-primary text-primary-content p-4`,children:[y(`div`,{className:`text-xs uppercase opacity-80`,children:`Published`}),y(`div`,{className:`mt-1 font-semibold`,children:`April release`})]})]})]}),v(`section`,{children:[y(`div`,{className:`mb-3 text-sm font-medium`,children:`Asset pile`}),v(E,{className:`w-56`,placement:`top-start`,reverse:!0,children:[y(`div`,{className:`rounded-box bg-neutral p-4 text-neutral-content`,children:`hero.png`}),y(`div`,{className:`rounded-box bg-secondary p-4 text-secondary-content`,children:`thumbnail.png`}),y(`div`,{className:`rounded-box bg-accent p-4 text-accent-content`,children:`open-graph.png`})]})]})]})}),code:`<Stack as="section" className="w-56" placement="bottom-end" aria-label="release deck">
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Draft</div>
  <div className="rounded-box border border-base-300 bg-base-100 p-4">Review</div>
  <div className="rounded-box border border-primary/30 bg-primary text-primary-content p-4">Published</div>
</Stack>

<Stack className="w-56" placement="top-start" reverse>
  <div className="rounded-box bg-neutral p-4 text-neutral-content">hero.png</div>
  <div className="rounded-box bg-secondary p-4 text-secondary-content">thumbnail.png</div>
  <div className="rounded-box bg-accent p-4 text-accent-content">open-graph.png</div>
</Stack>`}),m,se)});let F=e(`h2`);u(m,F),t(F,`id`,`stack-api`),u(F,n(`API`));let ce=e(`p`);u(m,ce),u(ce,n(`当前页面展示的是 Stack 的完整可用 API，旧属性保留，新属性作为语义增强层补充进来。`));let I=i(`rue:component:anchor`);u(m,I),d(()=>{l(p(ee,{rows:te}),m,I)});let L=e(`div`);u(m,L),o(L,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let R=e(`h3`);u(L,R),o(R,`mt-0 mb-3 text-base font-semibold`),u(R,n(`placement 快捷映射`));let z=e(`div`);u(L,z),o(z,`grid gap-2 text-sm md:grid-cols-2`);let B=e(`div`);u(z,B);let V=e(`code`);u(B,V),u(V,n(`placement="top"`)),u(B,n(`→`));let H=e(`code`);u(B,H),u(H,n(`vertical="top"`));let U=e(`div`);u(z,U);let W=e(`code`);u(U,W),u(W,n(`placement="bottom"`)),u(U,n(`→`));let G=e(`code`);u(U,G),u(G,n(`vertical="bottom"`));let K=e(`div`);u(z,K);let le=e(`code`);u(K,le),u(le,n(`placement="start"`)),u(K,n(`→`));let ue=e(`code`);u(K,ue),u(ue,n(`horizontal="start"`));let q=e(`div`);u(z,q);let de=e(`code`);u(q,de),u(de,n(`placement="end"`)),u(q,n(`→`));let fe=e(`code`);u(q,fe),u(fe,n(`horizontal="end"`));let J=e(`div`);u(z,J);let pe=e(`code`);u(J,pe),u(pe,n(`placement="top-start"`)),u(J,n(`→`));let me=e(`code`);u(J,me),u(me,n(`vertical="top" + horizontal="start"`));let Y=e(`div`);u(z,Y);let he=e(`code`);u(Y,he),u(he,n(`placement="bottom-end"`)),u(Y,n(`→`));let ge=r(Y);u(Y,ge),s(ge,` `);let _e=e(`code`);u(Y,_e),u(_e,n(`vertical="bottom" + horizontal="end"`));let ve=e(`h2`);u(m,ve),u(ve,n(`FAQ`));let ye=e(`h3`);u(m,ye),u(ye,n(`已经有 vertical 和 horizontal，为什么还要加 placement？`));let X=e(`p`);u(m,X);let be=e(`code`);u(X,be),u(be,n(`placement`)),u(X,n(`适合快速写组合定位，尤其是`));let xe=e(`code`);u(X,xe),u(xe,n(`top-end`)),u(X,n(`、`));let Se=e(`code`);u(X,Se),u(Se,n(`bottom-start`)),u(X,n(`这类常见场景。 如果你已经在用旧 API，也可以继续沿用原来的`));let Ce=r(X);u(X,Ce),s(Ce,` `);let we=e(`code`);u(X,we),u(we,n(`vertical`)),u(X,n(`和`));let Te=e(`code`);u(X,Te),u(Te,n(`horizontal`)),u(X,n(`。`));let Z=e(`h3`);u(m,Z),u(Z,n(`placement 和 vertical / horizontal 同时传会怎样？`));let Q=e(`p`);u(m,Q),u(Q,n(`显式传入的`));let Ee=e(`code`);u(Q,Ee),u(Ee,n(`vertical`)),u(Q,n(`、`));let De=e(`code`);u(Q,De),u(De,n(`horizontal`)),u(Q,n(`优先级更高。也就是说，`));let Oe=e(`code`);u(Q,Oe),u(Oe,n(`placement`)),u(Q,n(`更像一个快捷预设，而不是强制覆盖层。`));let ke=e(`h3`);u(m,ke),u(ke,n(`reverse 会改变样式还是改变 DOM 顺序？`));let $=e(`p`);u(m,$);let Ae=e(`code`);u($,Ae),u(Ae,n(`reverse`));let je=r($);return u($,je),s(je,` `),u($,n(`会反转子节点渲染顺序，因此最适合“最新项在最上层”的内容流场景，比如通知、版本封面、设计稿堆叠。`)),f})}),f,h),f})};export{O as default};