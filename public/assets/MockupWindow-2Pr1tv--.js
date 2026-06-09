import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,m as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as y,i as b}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as x}from"./Code-5DOEyGxf.js";import{t as S}from"./button-DL6BQoU1.js";import{t as C}from"./tabs-CWmjyn0I.js";import{r as w}from"./SidebarPlaygroundDesign-CS11MI8e.js";var T=(e,t)=>e&&t?`${e} ${t}`:e??t??``,E=e=>{switch(e){case`none`:return``;case`sm`:return`p-3`;case`lg`:return`p-6`;default:return`p-4`}},D=e=>Array.isArray(e)?e.length>0:e!=null,O=({title:e,description:t,extra:n,className:r,style:i,children:a,...o})=>{let s=D(a);return b(`div`,{...o,className:T(`rue-mockup-window-header flex items-start justify-between gap-3 border-b border-base-300/80 px-4 py-3`,r),style:i,children:s?a:y(u,{children:[y(`div`,{className:`min-w-0 flex-1`,children:[e==null?null:b(`div`,{className:`truncate text-sm font-semibold`,children:e}),t==null?null:b(`div`,{className:`mt-1 text-xs opacity-70`,children:t})]}),n==null?null:b(`div`,{className:`flex shrink-0 flex-wrap items-center gap-2`,children:n})]})})},k=({padding:e=`none`,className:t,style:n,children:r,...i})=>{let a=E(e);return b(`div`,{...i,className:T(T(`rue-mockup-window-body`,a),t),style:n,children:r})},A=({className:e,style:t,children:n,...r})=>b(`div`,{...r,className:T(`rue-mockup-window-toolbar flex flex-wrap items-center gap-2`,e),style:t,children:n}),j=({className:e,style:t,children:n,...r})=>b(`div`,{...r,className:T(`rue-mockup-window-actions flex flex-wrap items-center justify-end gap-2 border-t border-base-300/80 px-4 py-3`,e),style:t,children:n}),M=Object.assign(({bordered:e,background:t,title:n,description:r,toolbar:i,actions:a,padding:o,bodyClassName:s,headerClassName:c,actionsClassName:l,className:u,style:d,children:f,...p})=>{let m=n!=null||r!=null||i!=null,h=a!=null,g=m||h||o!=null||s!=null||c!=null||l!=null,_=`mockup-window`;return e&&(_+=` border border-base-300`),t&&(_+=` bg-base-100`),u&&(_+=` ${u}`),g?y(`div`,{...p,className:_,style:d,children:[m?b(O,{title:n,description:r,extra:i,className:c}):null,b(k,{padding:o??`md`,className:s,children:f}),h?b(j,{className:l,children:a}):null]}):b(`div`,{...p,className:_,style:d,children:f})},{Header:O,Body:k,Toolbar:A,Actions:j}),N=r=>l(u=>{let d=e(`div`,u);s(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);a(d,f),s(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);a(f,p);let g=e(`h2`,p);a(p,g),s(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,c(`# `));let _=o(`rue:slot:anchor`);a(g,_),i(()=>{let e=r.title;t(()=>m(e,g,_))});let v=o(`rue:slot:anchor`);a(p,v),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>m(e,l,u))}),c}):``;t(()=>m(c,p,v))});let y=o(`rue:component:anchor`);a(d,y),i(()=>{let e=h(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>m(e,d,y))});let b=o(`rue:slot:anchor`);return a(d,b),i(()=>{let e=r.tab.value===`preview`?r.preview():l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=h(x,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>m(n,e,s))}),e});t(()=>m(e,d,b))}),d}),ee=r=>l(u=>{let d=e(`div`,u);s(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,d);a(d,p),s(p,`table table-zebra`);let h=e(`thead`,p);a(p,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,c(`属性`));let y=e(`th`,g);a(g,y),a(y,c(`说明`));let b=e(`th`,g);a(g,b),a(b,c(`类型`));let x=e(`th`,g);a(g,x),a(x,c(`默认值`));let S=e(`tbody`,p);a(p,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,u,d)=>{m(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{f(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=o(`rue:slot:anchor`);a(u,d),i(()=>{let e=r.prop;t(()=>m(e,u,d))});let p=e(`td`,c);a(c,p);let h=o(`rue:slot:anchor`);a(p,h),i(()=>{let e=r.description;t(()=>m(e,p,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>m(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>m(e,b,x))}),s}),s,c)}})}),d}),te=t=>l(n=>{let r=e(`span`,n);return i(()=>{s(r,String(`inline-block size-2 rounded-full ${t.className}`))}),r}),ne=[{prop:`actions`,description:`底部操作区；传入后自动渲染带分隔线的底栏`,type:`any`,defaultValue:`-`},{prop:`actionsClassName`,description:`底部操作区 className`,type:`string`,defaultValue:`-`},{prop:`background`,description:`为根节点追加 bg-base-100`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加 border border-base-300`,type:`boolean`,defaultValue:`false`},{prop:`bodyClassName`,description:`内容区 className；启用增强模式时作用在自动生成的 Body 上`,type:`string`,defaultValue:`-`},{prop:`children`,description:`窗口内容；未启用增强结构时会原样透传`,type:`any`,defaultValue:`-`},{prop:`className`,description:`根节点 className`,type:`string`,defaultValue:`-`},{prop:`description`,description:`头部辅助说明文案`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`头部区域 className`,type:`string`,defaultValue:`-`},{prop:`padding`,description:`自动生成 Body 的内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`title`,description:`头部标题；与 description / toolbar 组合后启用结构化窗口`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`头部右侧工具区，适合按钮、状态和筛选器`,type:`any`,defaultValue:`-`}],P=()=>{let{tabStructured:v,tabCompound:x,tabWorkspace:C,tabBorder:T,tabBackground:E}=_(`useSetup:0:0`,()=>p(()=>({tabStructured:_(`ref:1:0`,()=>r(`preview`)),tabCompound:_(`ref:1:1`,()=>r(`preview`)),tabWorkspace:_(`ref:1:2`,()=>r(`preview`)),tabBorder:_(`ref:1:3`,()=>r(`preview`)),tabBackground:_(`ref:1:4`,()=>r(`preview`))})));return l(r=>{let p=n(),_=o(`rue:component:anchor`);return a(p,_),m(h(w,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,l);a(l,p),a(p,c(`Mockup Window 窗口外框`));let _=e(`p`,l);a(l,_),s(_,`text-sm mt-3 mb-3`),a(_,c(`MockupWindow 继续保留 Rue 原本的静态窗口外壳视觉，同时补了一层更顺手的结构化 API。 既可以继续直接写 children，也可以用 title、toolbar、actions 快速搭一个带头部和底部操作区的展示窗口。`));let w=e(`h2`,l);a(l,w),a(w,c(`何时使用`));let D=e(`ul`,l);a(l,D);let O=e(`li`,D);a(D,O),a(O,c(`需要模拟一个系统窗口、面板或预览壳层，用来承载展示内容。`));let k=e(`li`,D);a(D,k),a(k,c(`希望保留 Rue 现有 mockup-window 视觉，但不想每次都手写头部、内容区和底部操作区。`));let A=e(`li`,D);a(D,A),a(A,c(`需要同时兼顾推荐用法和完全手动拼装的低层布局能力。`));let j=o(`rue:component:anchor`);a(l,j),i(()=>{let e=h(N,{title:`结构化窗口`,summary:`推荐用法：根组件直接负责标题、工具区、内容区和底部操作区。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,background:!0,title:`Deployment Preview`,description:`把常见预览面板的标题、状态和操作整理成一套更顺手的写法。`,toolbar:y(M.Toolbar,{children:[y(`div`,{className:`hidden items-center gap-2 text-xs opacity-70 sm:flex`,children:[b(te,{className:`bg-success`}),`Preview ready`]}),b(S,{size:`sm`,type:`outlined`,children:`Share`})]}),actions:y(u,{children:[b(S,{type:`text`,children:`Cancel`}),b(S,{color:`primary`,children:`Publish`})]}),bodyClassName:`grid gap-4 md:grid-cols-[1.3fr_0.7fr]`,"data-testid":`mockup-window-structured`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-200/60 p-4`,children:[b(`div`,{className:`text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Preview`}),y(`div`,{className:`mt-4 grid gap-3`,children:[b(`div`,{className:`h-24 rounded-box bg-base-100`}),y(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[b(`div`,{className:`h-16 rounded-box bg-base-100`}),b(`div`,{className:`h-16 rounded-box bg-base-100`}),b(`div`,{className:`h-16 rounded-box bg-base-100`})]})]})]}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Build info`}),b(`div`,{className:`mt-2 text-sm opacity-70`,children:`Branch: feat/mockup-window`}),b(`div`,{className:`text-sm opacity-70`,children:`Runtime: 82ms`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Checklist`}),y(`ul`,{className:`mt-2 space-y-2 text-sm opacity-70`,children:[b(`li`,{children:`Visual review passed`}),b(`li`,{children:`API examples updated`}),b(`li`,{children:`Ready for handoff`})]})]})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});t(()=>m(e,l,j))});let P=o(`rue:component:anchor`);a(l,P),i(()=>{let e=h(N,{title:`复合子组件`,summary:`需要更细粒度控制时，用 Header / Toolbar / Body / Actions 手动拼装。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,className:`w-full`,"data-testid":`mockup-window-compound`,children:[b(M.Header,{title:`Analytics Snapshot`,description:`低层用法适合需要自定义头部排版的场景。`,extra:y(M.Toolbar,{children:[b(S,{size:`sm`,type:`text`,children:`This week`}),b(S,{size:`sm`,type:`outlined`,children:`Export`})]})}),y(M.Body,{className:`grid gap-3 bg-base-100 p-4 sm:grid-cols-3`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Views`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`128k`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Signups`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3.2k`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Conversion`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`5.8%`})]})]}),y(M.Actions,{children:[b(S,{type:`text`,children:`Dismiss`}),b(S,{color:`primary`,children:`Open report`})]})]})})}),code:`<MockupWindow bordered className="w-full">
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
</MockupWindow>`});t(()=>m(e,l,P))});let F=o(`rue:component:anchor`);a(l,F),i(()=>{let e=h(N,{title:`工作台布局`,summary:`结构化 API 和低层 Body 可以混用，快速拼出更复杂的后台窗口。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,background:!0,title:`Workspace Activity`,description:`适合承载列表、侧栏和操作条的中等复杂度展示区域。`,toolbar:y(M.Toolbar,{className:`justify-end`,children:[b(S,{size:`sm`,type:`text`,children:`Filters`}),b(S,{size:`sm`,type:`outlined`,children:`New panel`})]}),padding:`none`,bodyClassName:`grid divide-x divide-base-300 md:grid-cols-[220px_1fr]`,children:[y(`div`,{className:`bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sections`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2 font-medium`,children:`Overview`}),b(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Reports`}),b(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Releases`})]})]}),y(`div`,{className:`space-y-3 bg-base-100 p-4`,children:[y(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Queue`}),y(`div`,{className:`mt-3 space-y-2`,children:[b(`div`,{className:`h-10 rounded-box bg-base-200/70`}),b(`div`,{className:`h-10 rounded-box bg-base-200/70`}),b(`div`,{className:`h-10 rounded-box bg-base-200/70`})]})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Notes`}),b(`div`,{className:`mt-3 h-36 rounded-box bg-base-200/70`})]})]}),b(`div`,{className:`rounded-box border border-dashed border-base-300 p-4 text-sm opacity-70`,children:`这里保持的是 Rue 自己的展示型窗口风格，不把 MockupWindow 做成真正的模态框或桌面应用壳。`})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});t(()=>m(e,l,F))});let I=o(`rue:component:anchor`);a(l,I),i(()=>{let e=h(N,{title:`window mockup with border`,summary:`保留原有经典 demo，不改动原始 children 透传写法。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(M,{className:`border border-base-300 w-full`,"data-testid":`mockup-window-border`,children:b(`div`,{className:`grid place-content-center border-t border-base-300 h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="border border-base-300 w-full">
  <div className="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</MockupWindow>`});t(()=>m(e,l,I))});let L=o(`rue:component:anchor`);a(l,L),i(()=>{let e=h(N,{title:`window mockup with background color`,summary:`原有背景版本也继续保留，适合最简单的展示壳层。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(M,{className:`bg-base-100 border border-base-300 w-full`,"data-testid":`mockup-window-background`,children:b(`div`,{className:`grid place-content-center h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="bg-base-100 border border-base-300 w-full">
  <div className="grid place-content-center h-80">Hello!</div>
</MockupWindow>`});t(()=>m(e,l,L))});let R=e(`h2`,l);a(l,R),f(R,`id`,`mockup-window-api`),a(R,c(`API`));let re=e(`p`,l);a(l,re),a(re,c(`MockupWindow 同时支持“旧的 children 直出模式”和“新的结构化窗口模式”。`));let ie=o(`rue:component:anchor`);a(l,ie),i(()=>{let e=h(ee,{rows:ne});t(()=>m(e,l,ie))});let z=e(`div`,l);a(l,z),s(z,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let B=e(`h3`,z);a(z,B),s(B,`mt-0 mb-3 text-base font-semibold`),a(B,c(`复合子组件`));let V=e(`div`,z);a(z,V),s(V,`grid gap-2 text-sm md:grid-cols-2`);let H=e(`div`,V);a(V,H);let U=e(`code`,H);a(H,U),a(U,c(`MockupWindow.Header`)),a(H,c(`：标准头部，支持`));let W=e(`code`,H);a(H,W),a(W,c(`title`)),a(H,c(`、`));let G=e(`code`,H);a(H,G),a(G,c(`description`)),a(H,c(`和`));let K=e(`code`,H);a(H,K),a(K,c(`extra`));let q=e(`div`,V);a(V,q);let J=e(`code`,q);a(q,J),a(J,c(`MockupWindow.Toolbar`)),a(q,c(`：头部工具区包装器，默认横向排列`));let Y=e(`div`,V);a(V,Y);let ae=e(`code`,Y);a(Y,ae),a(ae,c(`MockupWindow.Body`)),a(Y,c(`：内容区，可选`));let oe=e(`code`,Y);a(Y,oe),a(oe,c(`padding`));let X=e(`div`,V);a(V,X);let se=e(`code`,X);a(X,se),a(se,c(`MockupWindow.Actions`)),a(X,c(`：底部操作区，默认右对齐并带分隔线`));let ce=e(`h2`,l);a(l,ce),a(ce,c(`FAQ`));let le=e(`h3`,l);a(l,le),a(le,c(`什么时候用根组件属性，什么时候用复合子组件？`));let Z=e(`p`,l);a(l,Z),a(Z,c(`如果只是常见的标题栏 + 内容区 + 按钮栏，优先直接使用根组件的`));let ue=e(`code`,Z);a(Z,ue),a(ue,c(`title`)),a(Z,c(`、`));let de=e(`code`,Z);a(Z,de),a(de,c(`toolbar`)),a(Z,c(`和`));let fe=e(`code`,Z);a(Z,fe),a(fe,c(`actions`)),a(Z,c(`。当你需要完全自定义头部排版，再切换到`));let pe=g(Z);a(Z,pe),d(pe,` `);let me=e(`code`,Z);a(Z,me),a(me,c(`MockupWindow.Header`)),a(Z,c(`这类低层拼装方式。`));let Q=e(`h3`,l);a(l,Q),a(Q,c(`padding 应该怎么理解？`));let $=e(`p`,l);a(l,$);let he=e(`code`,$);a($,he),a(he,c(`padding`)),a($,c(`只作用于结构化模式下自动生成的`));let ge=e(`code`,$);a($,ge),a(ge,c(`Body`)),a($,c(`。如果你已经手动使用`));let _e=g($);a($,_e),d(_e,` `);let ve=e(`code`,$);return a($,ve),a(ve,c(`MockupWindow.Body`)),a($,c(`或自己管理内容布局，直接在内容节点上写 className 会更直接。`)),r})}),p,_),p})};export{P as default};