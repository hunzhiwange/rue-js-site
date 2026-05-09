import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,d as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-CKndxKFn.js";import{a as g,n as _}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as v,t as y}from"./src-CqIWk1va.js";import{n as b}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as x}from"./Code-B1JFTu6m.js";import{t as S}from"./button-Doo7Wv3K.js";import{t as C}from"./tabs-BbiCzXqJ.js";var w=(e,t)=>e&&t?`${e} ${t}`:e??t??``,T=e=>{switch(e){case`none`:return``;case`sm`:return`p-3`;case`lg`:return`p-6`;default:return`p-4`}},E=e=>Array.isArray(e)?e.length>0:e!=null,D=({title:e,description:t,extra:n,className:r,style:i,children:a,...o})=>{let s=E(a);return y(`div`,{...o,className:w(`rue-mockup-window-header flex items-start justify-between gap-3 border-b border-base-300/80 px-4 py-3`,r),style:i,children:s?a:v(l,{children:[v(`div`,{className:`min-w-0 flex-1`,children:[e==null?null:y(`div`,{className:`truncate text-sm font-semibold`,children:e}),t==null?null:y(`div`,{className:`mt-1 text-xs opacity-70`,children:t})]}),n==null?null:y(`div`,{className:`flex shrink-0 flex-wrap items-center gap-2`,children:n})]})})},O=({padding:e=`none`,className:t,style:n,children:r,...i})=>{let a=T(e);return y(`div`,{...i,className:w(w(`rue-mockup-window-body`,a),t),style:n,children:r})},k=({className:e,style:t,children:n,...r})=>y(`div`,{...r,className:w(`rue-mockup-window-toolbar flex flex-wrap items-center gap-2`,e),style:t,children:n}),A=({className:e,style:t,children:n,...r})=>y(`div`,{...r,className:w(`rue-mockup-window-actions flex flex-wrap items-center justify-end gap-2 border-t border-base-300/80 px-4 py-3`,e),style:t,children:n}),j=Object.assign(({bordered:e,background:t,title:n,description:r,toolbar:i,actions:a,padding:o,bodyClassName:s,headerClassName:c,actionsClassName:l,className:u,style:d,children:f,...p})=>{let m=n!=null||r!=null||i!=null,h=a!=null,g=m||h||o!=null||s!=null||c!=null||l!=null,_=`mockup-window`;return e&&(_+=` border border-base-300`),t&&(_+=` bg-base-100`),u&&(_+=` ${u}`),g?v(`div`,{...p,className:_,style:d,children:[m?y(D,{title:n,description:r,extra:i,className:c}):null,y(O,{padding:o??`md`,className:s,children:f}),h?y(A,{className:l,children:a}):null]}):y(`div`,{...p,className:_,style:d,children:f})},{Header:D,Body:O,Toolbar:k,Actions:A}),M=({title:t,summary:l,tab:f,preview:h,code:g})=>m(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let S=r(b);u(b,S),d(()=>{s(S,t)});let w=i(`rue:slot:anchor`);u(y,w),d(()=>{c(l?m(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),d(()=>{s(i,l)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),d(()=>{c(p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),d(()=>{c(f.value===`preview`?h():m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{c(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),ee=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`);u(s,l),o(l,`table table-zebra`);let f=e(`thead`);u(l,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(l,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,l)=>{c(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let l=e(`code`);u(s,l);let f=i(`rue:slot:anchor`);u(l,f),d(()=>{let e=n.prop;c(e,l,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),te=({className:t})=>m(()=>{let n=e(`span`);return d(()=>{o(n,String(`inline-block size-2 rounded-full ${t}`))}),n}),ne=[{prop:`actions`,description:`底部操作区；传入后自动渲染带分隔线的底栏`,type:`any`,defaultValue:`-`},{prop:`actionsClassName`,description:`底部操作区 className`,type:`string`,defaultValue:`-`},{prop:`background`,description:`为根节点追加 bg-base-100`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加 border border-base-300`,type:`boolean`,defaultValue:`false`},{prop:`bodyClassName`,description:`内容区 className；启用增强模式时作用在自动生成的 Body 上`,type:`string`,defaultValue:`-`},{prop:`children`,description:`窗口内容；未启用增强结构时会原样透传`,type:`any`,defaultValue:`-`},{prop:`className`,description:`根节点 className`,type:`string`,defaultValue:`-`},{prop:`description`,description:`头部辅助说明文案`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`头部区域 className`,type:`string`,defaultValue:`-`},{prop:`padding`,description:`自动生成 Body 的内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`title`,description:`头部标题；与 description / toolbar 组合后启用结构化窗口`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`头部右侧工具区，适合按钮、状态和筛选器`,type:`any`,defaultValue:`-`}],N=()=>{let{tabStructured:_,tabCompound:x,tabWorkspace:C,tabBorder:w,tabBackground:T}=g(`useSetup:0:0`,()=>h(()=>({tabStructured:g(`ref:1:0`,()=>f(`preview`)),tabCompound:g(`ref:1:1`,()=>f(`preview`)),tabWorkspace:g(`ref:1:2`,()=>f(`preview`)),tabBorder:g(`ref:1:3`,()=>f(`preview`)),tabBackground:g(`ref:1:4`,()=>f(`preview`))})));return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),c(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Mockup Window 窗口外框`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`MockupWindow 继续保留 Rue 原本的静态窗口外壳视觉，同时补了一层更顺手的结构化 API。 既可以继续直接写 children，也可以用 title、toolbar、actions 快速搭一个带头部和底部操作区的展示窗口。`));let b=e(`div`);u(m,b),o(b,`text-sm flex flex-wrap gap-4`);let E=e(`a`);u(b,E),t(E,`href`,`https://daisyui.com/components/mockup-window/`),t(E,`target`,`_blank`),u(E,n(`查看 Mockup Window 静态样式`));let D=e(`h2`);u(m,D),u(D,n(`何时使用`));let O=e(`ul`);u(m,O);let k=e(`li`);u(O,k),u(k,n(`需要模拟一个系统窗口、面板或预览壳层，用来承载展示内容。`));let A=e(`li`);u(O,A),u(A,n(`希望保留 Rue 现有 mockup-window 视觉，但不想每次都手写头部、内容区和底部操作区。`));let N=e(`li`);u(O,N),u(N,n(`需要同时兼顾推荐用法和完全手动拼装的低层布局能力。`));let P=i(`rue:component:anchor`);u(m,P),d(()=>{c(p(M,{title:`结构化窗口`,summary:`推荐用法：根组件直接负责标题、工具区、内容区和底部操作区。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(j,{bordered:!0,background:!0,title:`Deployment Preview`,description:`把常见预览面板的标题、状态和操作整理成一套更顺手的写法。`,toolbar:v(j.Toolbar,{children:[v(`div`,{className:`hidden items-center gap-2 text-xs opacity-70 sm:flex`,children:[y(te,{className:`bg-success`}),`Preview ready`]}),y(S,{size:`sm`,type:`outlined`,children:`Share`})]}),actions:v(l,{children:[y(S,{type:`text`,children:`Cancel`}),y(S,{color:`primary`,children:`Publish`})]}),bodyClassName:`grid gap-4 md:grid-cols-[1.3fr_0.7fr]`,"data-testid":`mockup-window-structured`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-200/60 p-4`,children:[y(`div`,{className:`text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Preview`}),v(`div`,{className:`mt-4 grid gap-3`,children:[y(`div`,{className:`h-24 rounded-box bg-base-100`}),v(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[y(`div`,{className:`h-16 rounded-box bg-base-100`}),y(`div`,{className:`h-16 rounded-box bg-base-100`}),y(`div`,{className:`h-16 rounded-box bg-base-100`})]})]})]}),v(`div`,{className:`space-y-3`,children:[v(`div`,{className:`rounded-box border border-base-300 p-4`,children:[y(`div`,{className:`text-sm font-semibold`,children:`Build info`}),y(`div`,{className:`mt-2 text-sm opacity-70`,children:`Branch: feat/mockup-window`}),y(`div`,{className:`text-sm opacity-70`,children:`Runtime: 82ms`})]}),v(`div`,{className:`rounded-box border border-base-300 p-4`,children:[y(`div`,{className:`text-sm font-semibold`,children:`Checklist`}),v(`ul`,{className:`mt-2 space-y-2 text-sm opacity-70`,children:[y(`li`,{children:`Visual review passed`}),y(`li`,{children:`API examples updated`}),y(`li`,{children:`Ready for handoff`})]})]})]})]})})}),code:`<MockupWindow
  bordered
  background
  title="Deployment Preview"
  description="把常见预览面板的标题、状态和操作整理成一套更顺手的写法。"
  toolbar={
    <MockupWindow.Toolbar>
      <div className="hidden items-center gap-2 text-xs opacity-70 sm:flex">
        <span className="inline-block size-2 rounded-full bg-success" />
        Preview ready
      </div>
      <Button size="sm" type="outlined">Share</Button>
    </MockupWindow.Toolbar>
  }
  actions={
    <>
      <Button type="text">Cancel</Button>
      <Button color="primary">Publish</Button>
    </>
  }
  bodyClassName="grid gap-4 md:grid-cols-[1.3fr_0.7fr]"
>
  <div className="rounded-box border border-base-300 bg-base-200/60 p-4">
    <div className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">Preview</div>
    <div className="mt-4 grid gap-3">
      <div className="h-24 rounded-box bg-base-100" />
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="h-16 rounded-box bg-base-100" />
        <div className="h-16 rounded-box bg-base-100" />
        <div className="h-16 rounded-box bg-base-100" />
      </div>
    </div>
  </div>
  <div className="space-y-3">
    <div className="rounded-box border border-base-300 p-4">
      <div className="text-sm font-semibold">Build info</div>
      <div className="mt-2 text-sm opacity-70">Branch: feat/mockup-window</div>
      <div className="text-sm opacity-70">Runtime: 82ms</div>
    </div>
    <div className="rounded-box border border-base-300 p-4">
      <div className="text-sm font-semibold">Checklist</div>
      <ul className="mt-2 space-y-2 text-sm opacity-70">
        <li>Visual review passed</li>
        <li>API examples updated</li>
        <li>Ready for handoff</li>
      </ul>
    </div>
  </div>
</MockupWindow>`}),m,P)});let F=i(`rue:component:anchor`);u(m,F),d(()=>{c(p(M,{title:`复合子组件`,summary:`需要更细粒度控制时，用 Header / Toolbar / Body / Actions 手动拼装。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(j,{bordered:!0,className:`w-full`,"data-testid":`mockup-window-compound`,children:[y(j.Header,{title:`Analytics Snapshot`,description:`低层用法适合需要自定义头部排版的场景。`,extra:v(j.Toolbar,{children:[y(S,{size:`sm`,type:`text`,children:`This week`}),y(S,{size:`sm`,type:`outlined`,children:`Export`})]})}),v(j.Body,{className:`grid gap-3 bg-base-100 p-4 sm:grid-cols-3`,children:[v(`div`,{className:`rounded-box border border-base-300 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Views`}),y(`div`,{className:`mt-2 text-2xl font-semibold`,children:`128k`})]}),v(`div`,{className:`rounded-box border border-base-300 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Signups`}),y(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3.2k`})]}),v(`div`,{className:`rounded-box border border-base-300 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Conversion`}),y(`div`,{className:`mt-2 text-2xl font-semibold`,children:`5.8%`})]})]}),v(j.Actions,{children:[y(S,{type:`text`,children:`Dismiss`}),y(S,{color:`primary`,children:`Open report`})]})]})})}),code:`<MockupWindow bordered className="w-full">
  <MockupWindow.Header
    title="Analytics Snapshot"
    description="低层用法适合需要自定义头部排版的场景。"
    extra={
      <MockupWindow.Toolbar>
        <Button size="sm" type="text">This week</Button>
        <Button size="sm" type="outlined">Export</Button>
      </MockupWindow.Toolbar>
    }
  />
  <MockupWindow.Body className="grid gap-3 bg-base-100 p-4 sm:grid-cols-3">
    <div className="rounded-box border border-base-300 p-4">
      <div className="text-xs uppercase tracking-[0.2em] opacity-60">Views</div>
      <div className="mt-2 text-2xl font-semibold">128k</div>
    </div>
    <div className="rounded-box border border-base-300 p-4">
      <div className="text-xs uppercase tracking-[0.2em] opacity-60">Signups</div>
      <div className="mt-2 text-2xl font-semibold">3.2k</div>
    </div>
    <div className="rounded-box border border-base-300 p-4">
      <div className="text-xs uppercase tracking-[0.2em] opacity-60">Conversion</div>
      <div className="mt-2 text-2xl font-semibold">5.8%</div>
    </div>
  </MockupWindow.Body>
  <MockupWindow.Actions>
    <Button type="text">Dismiss</Button>
    <Button color="primary">Open report</Button>
  </MockupWindow.Actions>
</MockupWindow>`}),m,F)});let I=i(`rue:component:anchor`);u(m,I),d(()=>{c(p(M,{title:`工作台布局`,summary:`结构化 API 和低层 Body 可以混用，快速拼出更复杂的后台窗口。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(j,{bordered:!0,background:!0,title:`Workspace Activity`,description:`适合承载列表、侧栏和操作条的中等复杂度展示区域。`,toolbar:v(j.Toolbar,{className:`justify-end`,children:[y(S,{size:`sm`,type:`text`,children:`Filters`}),y(S,{size:`sm`,type:`outlined`,children:`New panel`})]}),padding:`none`,bodyClassName:`grid divide-x divide-base-300 md:grid-cols-[220px_1fr]`,children:[v(`div`,{className:`bg-base-100 p-4`,children:[y(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sections`}),v(`div`,{className:`space-y-2 text-sm`,children:[y(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2 font-medium`,children:`Overview`}),y(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Reports`}),y(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Releases`})]})]}),v(`div`,{className:`space-y-3 bg-base-100 p-4`,children:[v(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:[v(`div`,{className:`rounded-box border border-base-300 p-4`,children:[y(`div`,{className:`text-sm font-semibold`,children:`Queue`}),v(`div`,{className:`mt-3 space-y-2`,children:[y(`div`,{className:`h-10 rounded-box bg-base-200/70`}),y(`div`,{className:`h-10 rounded-box bg-base-200/70`}),y(`div`,{className:`h-10 rounded-box bg-base-200/70`})]})]}),v(`div`,{className:`rounded-box border border-base-300 p-4`,children:[y(`div`,{className:`text-sm font-semibold`,children:`Notes`}),y(`div`,{className:`mt-3 h-36 rounded-box bg-base-200/70`})]})]}),y(`div`,{className:`rounded-box border border-dashed border-base-300 p-4 text-sm opacity-70`,children:`这里保持的是 Rue 自己的展示型窗口风格，不把 MockupWindow 做成真正的模态框或桌面应用壳。`})]})]})})}),code:`<MockupWindow
  bordered
  background
  title="Workspace Activity"
  description="适合承载列表、侧栏和操作条的中等复杂度展示区域。"
  toolbar={
    <MockupWindow.Toolbar className="justify-end">
      <Button size="sm" type="text">Filters</Button>
      <Button size="sm" type="outlined">New panel</Button>
    </MockupWindow.Toolbar>
  }
  padding="none"
  bodyClassName="grid divide-x divide-base-300 md:grid-cols-[220px_1fr]"
>
  <div className="bg-base-100 p-4">
    <div className="mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Sections</div>
    <div className="space-y-2 text-sm">
      <div className="rounded-box bg-base-200/70 px-3 py-2 font-medium">Overview</div>
      <div className="rounded-box px-3 py-2 opacity-70">Reports</div>
      <div className="rounded-box px-3 py-2 opacity-70">Releases</div>
    </div>
  </div>
  <div className="space-y-3 bg-base-100 p-4">
    <div className="grid gap-3 lg:grid-cols-2">
      <div className="rounded-box border border-base-300 p-4">
        <div className="text-sm font-semibold">Queue</div>
        <div className="mt-3 space-y-2">
          <div className="h-10 rounded-box bg-base-200/70" />
          <div className="h-10 rounded-box bg-base-200/70" />
          <div className="h-10 rounded-box bg-base-200/70" />
        </div>
      </div>
      <div className="rounded-box border border-base-300 p-4">
        <div className="text-sm font-semibold">Notes</div>
        <div className="mt-3 h-36 rounded-box bg-base-200/70" />
      </div>
    </div>
    <div className="rounded-box border border-dashed border-base-300 p-4 text-sm opacity-70">
      这里保持的是 Rue 自己的展示型窗口风格，不把 MockupWindow 做成真正的模态框或桌面应用壳。
    </div>
  </div>
</MockupWindow>`}),m,I)});let L=i(`rue:component:anchor`);u(m,L),d(()=>{c(p(M,{title:`window mockup with border`,summary:`保留原有经典 demo，不改动原始 children 透传写法。`,tab:w,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(j,{className:`border border-base-300 w-full`,"data-testid":`mockup-window-border`,children:y(`div`,{className:`grid place-content-center border-t border-base-300 h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="border border-base-300 w-full">
  <div className="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</MockupWindow>`}),m,L)});let re=i(`rue:component:anchor`);u(m,re),d(()=>{c(p(M,{title:`window mockup with background color`,summary:`原有背景版本也继续保留，适合最简单的展示壳层。`,tab:T,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(j,{className:`bg-base-100 border border-base-300 w-full`,"data-testid":`mockup-window-background`,children:y(`div`,{className:`grid place-content-center h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="bg-base-100 border border-base-300 w-full">
  <div className="grid place-content-center h-80">Hello!</div>
</MockupWindow>`}),m,re)});let R=e(`h2`);u(m,R),t(R,`id`,`mockup-window-api`),u(R,n(`API`));let ie=e(`p`);u(m,ie),u(ie,n(`MockupWindow 同时支持“旧的 children 直出模式”和“新的结构化窗口模式”。`));let ae=i(`rue:component:anchor`);u(m,ae),d(()=>{c(p(ee,{rows:ne}),m,ae)});let z=e(`div`);u(m,z),o(z,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let B=e(`h3`);u(z,B),o(B,`mt-0 mb-3 text-base font-semibold`),u(B,n(`复合子组件`));let V=e(`div`);u(z,V),o(V,`grid gap-2 text-sm md:grid-cols-2`);let H=e(`div`);u(V,H);let U=e(`code`);u(H,U),u(U,n(`MockupWindow.Header`)),u(H,n(`：标准头部，支持`));let W=e(`code`);u(H,W),u(W,n(`title`)),u(H,n(`、`));let G=e(`code`);u(H,G),u(G,n(`description`)),u(H,n(`和`));let K=e(`code`);u(H,K),u(K,n(`extra`));let q=e(`div`);u(V,q);let J=e(`code`);u(q,J),u(J,n(`MockupWindow.Toolbar`)),u(q,n(`：头部工具区包装器，默认横向排列`));let Y=e(`div`);u(V,Y);let oe=e(`code`);u(Y,oe),u(oe,n(`MockupWindow.Body`)),u(Y,n(`：内容区，可选`));let se=e(`code`);u(Y,se),u(se,n(`padding`));let X=e(`div`);u(V,X);let ce=e(`code`);u(X,ce),u(ce,n(`MockupWindow.Actions`)),u(X,n(`：底部操作区，默认右对齐并带分隔线`));let le=e(`h2`);u(m,le),u(le,n(`FAQ`));let ue=e(`h3`);u(m,ue),u(ue,n(`什么时候用根组件属性，什么时候用复合子组件？`));let Z=e(`p`);u(m,Z),u(Z,n(`如果只是常见的标题栏 + 内容区 + 按钮栏，优先直接使用根组件的`));let de=e(`code`);u(Z,de),u(de,n(`title`)),u(Z,n(`、`));let fe=e(`code`);u(Z,fe),u(fe,n(`toolbar`)),u(Z,n(`和`));let pe=e(`code`);u(Z,pe),u(pe,n(`actions`)),u(Z,n(`。当你需要完全自定义头部排版，再切换到`));let me=r(Z);u(Z,me),s(me,` `);let Q=e(`code`);u(Z,Q),u(Q,n(`MockupWindow.Header`)),u(Z,n(`这类低层拼装方式。`));let he=e(`h3`);u(m,he),u(he,n(`padding 应该怎么理解？`));let $=e(`p`);u(m,$);let ge=e(`code`);u($,ge),u(ge,n(`padding`)),u($,n(`只作用于结构化模式下自动生成的`));let _e=e(`code`);u($,_e),u(_e,n(`Body`)),u($,n(`。如果你已经手动使用`));let ve=r($);u($,ve),s(ve,` `);let ye=e(`code`);return u($,ye),u(ye,n(`MockupWindow.Body`)),u($,n(`或自己管理内容布局，直接在内容节点上写 className 会更直接。`)),f})}),f,h),f})};export{N as default};