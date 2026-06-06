import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,_ as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./button-B1PhsXzm.js";import{t as w}from"./tabs-BOxm6iIN.js";var T=(e,t)=>e&&t?`${e} ${t}`:e??t??``,E=e=>{switch(e){case`none`:return``;case`sm`:return`p-3`;case`lg`:return`p-6`;default:return`p-4`}},D=e=>Array.isArray(e)?e.length>0:e!=null,O=({title:e,description:t,extra:n,className:r,style:i,children:a,...o})=>{let s=D(a);return x(`div`,{...o,className:T(`rue-mockup-window-header flex items-start justify-between gap-3 border-b border-base-300/80 px-4 py-3`,r),style:i,children:s?a:b(l,{children:[b(`div`,{className:`min-w-0 flex-1`,children:[e==null?null:x(`div`,{className:`truncate text-sm font-semibold`,children:e}),t==null?null:x(`div`,{className:`mt-1 text-xs opacity-70`,children:t})]}),n==null?null:x(`div`,{className:`flex shrink-0 flex-wrap items-center gap-2`,children:n})]})})},k=({padding:e=`none`,className:t,style:n,children:r,...i})=>{let a=E(e);return x(`div`,{...i,className:T(T(`rue-mockup-window-body`,a),t),style:n,children:r})},A=({className:e,style:t,children:n,...r})=>x(`div`,{...r,className:T(`rue-mockup-window-toolbar flex flex-wrap items-center gap-2`,e),style:t,children:n}),j=({className:e,style:t,children:n,...r})=>x(`div`,{...r,className:T(`rue-mockup-window-actions flex flex-wrap items-center justify-end gap-2 border-t border-base-300/80 px-4 py-3`,e),style:t,children:n}),M=Object.assign(({bordered:e,background:t,title:n,description:r,toolbar:i,actions:a,padding:o,bodyClassName:s,headerClassName:c,actionsClassName:l,className:u,style:d,children:f,...p})=>{let m=n!=null||r!=null||i!=null,h=a!=null,g=m||h||o!=null||s!=null||c!=null||l!=null,_=`mockup-window`;return e&&(_+=` border border-base-300`),t&&(_+=` bg-base-100`),u&&(_+=` ${u}`),g?b(`div`,{...p,className:_,style:d,children:[m?x(O,{title:n,description:r,extra:i,className:c}):null,x(k,{padding:o??`md`,className:s,children:f}),h?x(j,{className:l,children:a}):null]}):x(`div`,{...p,className:_,style:d,children:f})},{Header:O,Body:k,Toolbar:A,Actions:j}),N=a=>f(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=s(`div`,u);t(u,d);let h=s(`h2`,d);t(d,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,r(`# `));let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=a.title;g(()=>p(e,h,_))});let v=i(`rue:slot:anchor`);t(d,v),n(()=>{let r=a.summary?f(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;g(()=>p(e,c,l))}),r}):``;g(()=>p(r,d,v))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=m(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?a.preview():f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:a.code});g(()=>p(t,e,r))}),e});g(()=>p(e,l,x))}),l}),ee=a=>f(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,u);t(u,d),e(d,`table table-zebra`);let m=s(`thead`,d);t(d,m);let h=s(`tr`,m);t(m,h);let _=s(`th`,h);t(h,_),t(_,r(`属性`));let y=s(`th`,h);t(h,y),t(y,r(`说明`));let b=s(`th`,h);t(h,b),t(b,r(`类型`));let x=s(`th`,h);t(h,x),t(x,r(`默认值`));let S=s(`tbody`,d);t(d,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{p(f(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=s(`td`,a);t(a,f);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let t=e.description;g(()=>p(t,f,m))});let h=s(`td`,a);t(a,h);let _=s(`code`,h);t(h,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;g(()=>p(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),r}),r,a)}})}),u}),te=t=>f(r=>{let i=s(`span`,r);return n(()=>{e(i,String(`inline-block size-2 rounded-full ${t.className}`))}),i}),ne=[{prop:`actions`,description:`底部操作区；传入后自动渲染带分隔线的底栏`,type:`any`,defaultValue:`-`},{prop:`actionsClassName`,description:`底部操作区 className`,type:`string`,defaultValue:`-`},{prop:`background`,description:`为根节点追加 bg-base-100`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加 border border-base-300`,type:`boolean`,defaultValue:`false`},{prop:`bodyClassName`,description:`内容区 className；启用增强模式时作用在自动生成的 Body 上`,type:`string`,defaultValue:`-`},{prop:`children`,description:`窗口内容；未启用增强结构时会原样透传`,type:`any`,defaultValue:`-`},{prop:`className`,description:`根节点 className`,type:`string`,defaultValue:`-`},{prop:`description`,description:`头部辅助说明文案`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`头部区域 className`,type:`string`,defaultValue:`-`},{prop:`padding`,description:`自动生成 Body 的内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`title`,description:`头部标题；与 description / toolbar 组合后启用结构化窗口`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`头部右侧工具区，适合按钮、状态和筛选器`,type:`any`,defaultValue:`-`}],P=()=>{let{tabStructured:v,tabCompound:y,tabWorkspace:w,tabBorder:T,tabBackground:E}=_(`useSetup:0:0`,()=>h(()=>({tabStructured:_(`ref:1:0`,()=>d(`preview`)),tabCompound:_(`ref:1:1`,()=>d(`preview`)),tabWorkspace:_(`ref:1:2`,()=>d(`preview`)),tabBorder:_(`ref:1:3`,()=>d(`preview`)),tabBackground:_(`ref:1:4`,()=>d(`preview`))})));return f(d=>{let h=o(),_=i(`rue:component:anchor`);return t(h,_),p(m(S,{children:f(()=>{let d=o(),f=s(`div`,d);t(d,f),e(f,`max-w-none prose prose-sm md:prose-base`);let h=s(`h1`,f);t(f,h),t(h,r(`Mockup Window 窗口外框`));let _=s(`p`,f);t(f,_),e(_,`text-sm mt-3 mb-3`),t(_,r(`MockupWindow 继续保留 Rue 原本的静态窗口外壳视觉，同时补了一层更顺手的结构化 API。 既可以继续直接写 children，也可以用 title、toolbar、actions 快速搭一个带头部和底部操作区的展示窗口。`));let S=s(`h2`,f);t(f,S),t(S,r(`何时使用`));let D=s(`ul`,f);t(f,D);let O=s(`li`,D);t(D,O),t(O,r(`需要模拟一个系统窗口、面板或预览壳层，用来承载展示内容。`));let k=s(`li`,D);t(D,k),t(k,r(`希望保留 Rue 现有 mockup-window 视觉，但不想每次都手写头部、内容区和底部操作区。`));let A=s(`li`,D);t(D,A),t(A,r(`需要同时兼顾推荐用法和完全手动拼装的低层布局能力。`));let j=i(`rue:component:anchor`);t(f,j),n(()=>{let e=m(N,{title:`结构化窗口`,summary:`推荐用法：根组件直接负责标题、工具区、内容区和底部操作区。`,tab:v,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(M,{bordered:!0,background:!0,title:`Deployment Preview`,description:`把常见预览面板的标题、状态和操作整理成一套更顺手的写法。`,toolbar:b(M.Toolbar,{children:[b(`div`,{className:`hidden items-center gap-2 text-xs opacity-70 sm:flex`,children:[x(te,{className:`bg-success`}),`Preview ready`]}),x(C,{size:`sm`,type:`outlined`,children:`Share`})]}),actions:b(l,{children:[x(C,{type:`text`,children:`Cancel`}),x(C,{color:`primary`,children:`Publish`})]}),bodyClassName:`grid gap-4 md:grid-cols-[1.3fr_0.7fr]`,"data-testid":`mockup-window-structured`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-200/60 p-4`,children:[x(`div`,{className:`text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Preview`}),b(`div`,{className:`mt-4 grid gap-3`,children:[x(`div`,{className:`h-24 rounded-box bg-base-100`}),b(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[x(`div`,{className:`h-16 rounded-box bg-base-100`}),x(`div`,{className:`h-16 rounded-box bg-base-100`}),x(`div`,{className:`h-16 rounded-box bg-base-100`})]})]})]}),b(`div`,{className:`space-y-3`,children:[b(`div`,{className:`rounded-box border border-base-300 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Build info`}),x(`div`,{className:`mt-2 text-sm opacity-70`,children:`Branch: feat/mockup-window`}),x(`div`,{className:`text-sm opacity-70`,children:`Runtime: 82ms`})]}),b(`div`,{className:`rounded-box border border-base-300 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Checklist`}),b(`ul`,{className:`mt-2 space-y-2 text-sm opacity-70`,children:[x(`li`,{children:`Visual review passed`}),x(`li`,{children:`API examples updated`}),x(`li`,{children:`Ready for handoff`})]})]})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});g(()=>p(e,f,j))});let P=i(`rue:component:anchor`);t(f,P),n(()=>{let e=m(N,{title:`复合子组件`,summary:`需要更细粒度控制时，用 Header / Toolbar / Body / Actions 手动拼装。`,tab:y,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(M,{bordered:!0,className:`w-full`,"data-testid":`mockup-window-compound`,children:[x(M.Header,{title:`Analytics Snapshot`,description:`低层用法适合需要自定义头部排版的场景。`,extra:b(M.Toolbar,{children:[x(C,{size:`sm`,type:`text`,children:`This week`}),x(C,{size:`sm`,type:`outlined`,children:`Export`})]})}),b(M.Body,{className:`grid gap-3 bg-base-100 p-4 sm:grid-cols-3`,children:[b(`div`,{className:`rounded-box border border-base-300 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Views`}),x(`div`,{className:`mt-2 text-2xl font-semibold`,children:`128k`})]}),b(`div`,{className:`rounded-box border border-base-300 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Signups`}),x(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3.2k`})]}),b(`div`,{className:`rounded-box border border-base-300 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Conversion`}),x(`div`,{className:`mt-2 text-2xl font-semibold`,children:`5.8%`})]})]}),b(M.Actions,{children:[x(C,{type:`text`,children:`Dismiss`}),x(C,{color:`primary`,children:`Open report`})]})]})})}),code:`<MockupWindow bordered className="w-full">
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
</MockupWindow>`});g(()=>p(e,f,P))});let F=i(`rue:component:anchor`);t(f,F),n(()=>{let e=m(N,{title:`工作台布局`,summary:`结构化 API 和低层 Body 可以混用，快速拼出更复杂的后台窗口。`,tab:w,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(M,{bordered:!0,background:!0,title:`Workspace Activity`,description:`适合承载列表、侧栏和操作条的中等复杂度展示区域。`,toolbar:b(M.Toolbar,{className:`justify-end`,children:[x(C,{size:`sm`,type:`text`,children:`Filters`}),x(C,{size:`sm`,type:`outlined`,children:`New panel`})]}),padding:`none`,bodyClassName:`grid divide-x divide-base-300 md:grid-cols-[220px_1fr]`,children:[b(`div`,{className:`bg-base-100 p-4`,children:[x(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sections`}),b(`div`,{className:`space-y-2 text-sm`,children:[x(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2 font-medium`,children:`Overview`}),x(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Reports`}),x(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Releases`})]})]}),b(`div`,{className:`space-y-3 bg-base-100 p-4`,children:[b(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:[b(`div`,{className:`rounded-box border border-base-300 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Queue`}),b(`div`,{className:`mt-3 space-y-2`,children:[x(`div`,{className:`h-10 rounded-box bg-base-200/70`}),x(`div`,{className:`h-10 rounded-box bg-base-200/70`}),x(`div`,{className:`h-10 rounded-box bg-base-200/70`})]})]}),b(`div`,{className:`rounded-box border border-base-300 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Notes`}),x(`div`,{className:`mt-3 h-36 rounded-box bg-base-200/70`})]})]}),x(`div`,{className:`rounded-box border border-dashed border-base-300 p-4 text-sm opacity-70`,children:`这里保持的是 Rue 自己的展示型窗口风格，不把 MockupWindow 做成真正的模态框或桌面应用壳。`})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});g(()=>p(e,f,F))});let I=i(`rue:component:anchor`);t(f,I),n(()=>{let e=m(N,{title:`window mockup with border`,summary:`保留原有经典 demo，不改动原始 children 透传写法。`,tab:T,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:x(M,{className:`border border-base-300 w-full`,"data-testid":`mockup-window-border`,children:x(`div`,{className:`grid place-content-center border-t border-base-300 h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="border border-base-300 w-full">
  <div className="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</MockupWindow>`});g(()=>p(e,f,I))});let L=i(`rue:component:anchor`);t(f,L),n(()=>{let e=m(N,{title:`window mockup with background color`,summary:`原有背景版本也继续保留，适合最简单的展示壳层。`,tab:E,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:x(M,{className:`bg-base-100 border border-base-300 w-full`,"data-testid":`mockup-window-background`,children:x(`div`,{className:`grid place-content-center h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="bg-base-100 border border-base-300 w-full">
  <div className="grid place-content-center h-80">Hello!</div>
</MockupWindow>`});g(()=>p(e,f,L))});let R=s(`h2`,f);t(f,R),c(R,`id`,`mockup-window-api`),t(R,r(`API`));let re=s(`p`,f);t(f,re),t(re,r(`MockupWindow 同时支持“旧的 children 直出模式”和“新的结构化窗口模式”。`));let ie=i(`rue:component:anchor`);t(f,ie),n(()=>{let e=m(ee,{rows:ne});g(()=>p(e,f,ie))});let z=s(`div`,f);t(f,z),e(z,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let B=s(`h3`,z);t(z,B),e(B,`mt-0 mb-3 text-base font-semibold`),t(B,r(`复合子组件`));let V=s(`div`,z);t(z,V),e(V,`grid gap-2 text-sm md:grid-cols-2`);let H=s(`div`,V);t(V,H);let U=s(`code`,H);t(H,U),t(U,r(`MockupWindow.Header`)),t(H,r(`：标准头部，支持`));let W=s(`code`,H);t(H,W),t(W,r(`title`)),t(H,r(`、`));let G=s(`code`,H);t(H,G),t(G,r(`description`)),t(H,r(`和`));let K=s(`code`,H);t(H,K),t(K,r(`extra`));let q=s(`div`,V);t(V,q);let J=s(`code`,q);t(q,J),t(J,r(`MockupWindow.Toolbar`)),t(q,r(`：头部工具区包装器，默认横向排列`));let Y=s(`div`,V);t(V,Y);let ae=s(`code`,Y);t(Y,ae),t(ae,r(`MockupWindow.Body`)),t(Y,r(`：内容区，可选`));let oe=s(`code`,Y);t(Y,oe),t(oe,r(`padding`));let X=s(`div`,V);t(V,X);let se=s(`code`,X);t(X,se),t(se,r(`MockupWindow.Actions`)),t(X,r(`：底部操作区，默认右对齐并带分隔线`));let ce=s(`h2`,f);t(f,ce),t(ce,r(`FAQ`));let le=s(`h3`,f);t(f,le),t(le,r(`什么时候用根组件属性，什么时候用复合子组件？`));let Z=s(`p`,f);t(f,Z),t(Z,r(`如果只是常见的标题栏 + 内容区 + 按钮栏，优先直接使用根组件的`));let ue=s(`code`,Z);t(Z,ue),t(ue,r(`title`)),t(Z,r(`、`));let de=s(`code`,Z);t(Z,de),t(de,r(`toolbar`)),t(Z,r(`和`));let fe=s(`code`,Z);t(Z,fe),t(fe,r(`actions`)),t(Z,r(`。当你需要完全自定义头部排版，再切换到`));let pe=a(Z);t(Z,pe),u(pe,` `);let me=s(`code`,Z);t(Z,me),t(me,r(`MockupWindow.Header`)),t(Z,r(`这类低层拼装方式。`));let Q=s(`h3`,f);t(f,Q),t(Q,r(`padding 应该怎么理解？`));let $=s(`p`,f);t(f,$);let he=s(`code`,$);t($,he),t(he,r(`padding`)),t($,r(`只作用于结构化模式下自动生成的`));let ge=s(`code`,$);t($,ge),t(ge,r(`Body`)),t($,r(`。如果你已经手动使用`));let _e=a($);t($,_e),u(_e,` `);let ve=s(`code`,$);return t($,ve),t(ve,r(`MockupWindow.Body`)),t($,r(`或自己管理内容布局，直接在内容节点上写 className 会更直接。`)),d})}),h,_),h})};export{P as default};