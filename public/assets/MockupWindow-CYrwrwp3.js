import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,ot as p,t as m,tt as h,y as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _,n as v}from"./vapor-helpers-vapor-DkadWylb.js";import{i as y,r as b}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as x}from"./button-BDcuIfPi.js";import{t as S}from"./tabs-DMHgT-aV.js";import{n as C}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as w}from"./Code-B_4lzH85.js";var T=(e,t)=>e&&t?`${e} ${t}`:e??t??``,E=e=>{switch(e){case`none`:return``;case`sm`:return`p-3`;case`lg`:return`p-6`;default:return`p-4`}},D=e=>Array.isArray(e)?e.length>0:e!=null,O=({title:e,description:t,extra:n,className:r,style:i,children:a,...o})=>{let s=D(a);return b(`div`,{...o,className:T(`rue-mockup-window-header flex items-start justify-between gap-3 border-b border-base-300/80 px-4 py-3`,r),style:i,children:s?a:y(g,{children:[y(`div`,{className:`min-w-0 flex-1`,children:[e==null?null:b(`div`,{className:`truncate text-sm font-semibold`,children:e}),t==null?null:b(`div`,{className:`mt-1 text-xs opacity-70`,children:t})]}),n==null?null:b(`div`,{className:`flex shrink-0 flex-wrap items-center gap-2`,children:n})]})})},k=({padding:e=`none`,className:t,style:n,children:r,...i})=>{let a=E(e);return b(`div`,{...i,className:T(T(`rue-mockup-window-body`,a),t),style:n,children:r})},A=({className:e,style:t,children:n,...r})=>b(`div`,{...r,className:T(`rue-mockup-window-toolbar flex flex-wrap items-center gap-2`,e),style:t,children:n}),j=({className:e,style:t,children:n,...r})=>b(`div`,{...r,className:T(`rue-mockup-window-actions flex flex-wrap items-center justify-end gap-2 border-t border-base-300/80 px-4 py-3`,e),style:t,children:n}),M=Object.assign(({bordered:e,background:t,title:n,description:r,toolbar:i,actions:a,padding:o,bodyClassName:s,headerClassName:c,actionsClassName:l,className:u,style:d,children:f,...p})=>{let m=n!=null||r!=null||i!=null,h=a!=null,g=m||h||o!=null||s!=null||c!=null||l!=null,_=`mockup-window`;return e&&(_+=` border border-base-300`),t&&(_+=` bg-base-100`),u&&(_+=` ${u}`),g?y(`div`,{...p,className:_,style:d,children:[m?b(O,{title:n,description:r,extra:i,className:c}):null,b(k,{padding:o??`md`,className:s,children:f}),h?b(j,{className:l,children:a}):null]}):b(`div`,{...p,className:_,style:d,children:f})},{Header:O,Body:k,Toolbar:A,Actions:j}),N=t=>l(n=>{let f=e(`div`,n);c(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let p=e(`div`,f);a(f,p),c(p,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,p);a(p,h);let g=e(`h2`,h);a(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=s(`rue:slot:anchor`);a(g,_),o(()=>{let e=t.title;i(()=>d(e,g,_))});let v=s(`rue:slot:anchor`);a(h,v),o(()=>{let n=t.summary?l(()=>{let n=r(),l=e(`p`,n);a(n,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return a(l,u),o(()=>{let e=t.summary;i(()=>d(e,l,u))}),n}):``;i(()=>d(n,h,v))});let y=s(`rue:component:anchor`);a(f,y),o(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});i(()=>d(e,f,y))});let b=s(`rue:slot:anchor`);return a(f,b),o(()=>{let e=t.tab.value===`preview`?t.preview():l(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=m(w,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>d(r,e,n))}),e});i(()=>d(e,f,b))}),f}),ee=t=>l(n=>{let f=e(`div`,n);c(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,f);a(f,m),c(m,`table table-zebra`);let h=e(`thead`,m);a(m,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,u(`属性`));let y=e(`th`,g);a(g,y),a(y,u(`说明`));let b=e(`th`,g);a(g,b),a(b,u(`类型`));let x=e(`th`,g);a(g,x),a(x,u(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,u,f)=>{d(l(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{p(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let f=s(`rue:slot:anchor`);a(u,f),o(()=>{let e=t.prop;i(()=>d(e,u,f))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>d(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>d(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>d(e,b,x))}),n}),n,c)}})}),f}),te=t=>l(n=>{let r=e(`span`,n);return o(()=>{c(r,String(`inline-block size-2 rounded-full ${t.className}`))}),r}),ne=[{prop:`actions`,description:`底部操作区；传入后自动渲染带分隔线的底栏`,type:`any`,defaultValue:`-`},{prop:`actionsClassName`,description:`底部操作区 className`,type:`string`,defaultValue:`-`},{prop:`background`,description:`为根节点追加 bg-base-100`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加 border border-base-300`,type:`boolean`,defaultValue:`false`},{prop:`bodyClassName`,description:`内容区 className；启用增强模式时作用在自动生成的 Body 上`,type:`string`,defaultValue:`-`},{prop:`children`,description:`窗口内容；未启用增强结构时会原样透传`,type:`any`,defaultValue:`-`},{prop:`className`,description:`根节点 className`,type:`string`,defaultValue:`-`},{prop:`description`,description:`头部辅助说明文案`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`头部区域 className`,type:`string`,defaultValue:`-`},{prop:`padding`,description:`自动生成 Body 的内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`title`,description:`头部标题；与 description / toolbar 组合后启用结构化窗口`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`头部右侧工具区，适合按钮、状态和筛选器`,type:`any`,defaultValue:`-`}],P=()=>{let{tabStructured:v,tabCompound:S,tabWorkspace:w,tabBorder:T,tabBackground:E}=_(`useSetup:0:0`,()=>t(()=>({tabStructured:_(`ref:1:0`,()=>n(`preview`)),tabCompound:_(`ref:1:1`,()=>n(`preview`)),tabWorkspace:_(`ref:1:2`,()=>n(`preview`)),tabBorder:_(`ref:1:3`,()=>n(`preview`)),tabBackground:_(`ref:1:4`,()=>n(`preview`))})));return l(t=>{let n=r(),_=s(`rue:component:anchor`);return a(n,_),d(m(C,{children:l(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let l=e(`h1`,n);a(n,l),a(l,u(`Mockup Window 窗口外框`));let _=e(`p`,n);a(n,_),c(_,`text-sm mt-3 mb-3`),a(_,u(`MockupWindow 继续保留 Rue 原本的静态窗口外壳视觉，同时补了一层更顺手的结构化 API。 既可以继续直接写 children，也可以用 title、toolbar、actions 快速搭一个带头部和底部操作区的展示窗口。`));let C=e(`h2`,n);a(n,C),a(C,u(`何时使用`));let D=e(`ul`,n);a(n,D);let O=e(`li`,D);a(D,O),a(O,u(`需要模拟一个系统窗口、面板或预览壳层，用来承载展示内容。`));let k=e(`li`,D);a(D,k),a(k,u(`希望保留 Rue 现有 mockup-window 视觉，但不想每次都手写头部、内容区和底部操作区。`));let A=e(`li`,D);a(D,A),a(A,u(`需要同时兼顾推荐用法和完全手动拼装的低层布局能力。`));let j=s(`rue:component:anchor`);a(n,j),o(()=>{let e=m(N,{title:`结构化窗口`,summary:`推荐用法：根组件直接负责标题、工具区、内容区和底部操作区。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,background:!0,title:`Deployment Preview`,description:`把常见预览面板的标题、状态和操作整理成一套更顺手的写法。`,toolbar:y(M.Toolbar,{children:[y(`div`,{className:`hidden items-center gap-2 text-xs opacity-70 sm:flex`,children:[b(te,{className:`bg-success`}),`Preview ready`]}),b(x,{size:`sm`,type:`outlined`,children:`Share`})]}),actions:y(g,{children:[b(x,{type:`text`,children:`Cancel`}),b(x,{color:`primary`,children:`Publish`})]}),bodyClassName:`grid gap-4 md:grid-cols-[1.3fr_0.7fr]`,"data-testid":`mockup-window-structured`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-200/60 p-4`,children:[b(`div`,{className:`text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Preview`}),y(`div`,{className:`mt-4 grid gap-3`,children:[b(`div`,{className:`h-24 rounded-box bg-base-100`}),y(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[b(`div`,{className:`h-16 rounded-box bg-base-100`}),b(`div`,{className:`h-16 rounded-box bg-base-100`}),b(`div`,{className:`h-16 rounded-box bg-base-100`})]})]})]}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Build info`}),b(`div`,{className:`mt-2 text-sm opacity-70`,children:`Branch: feat/mockup-window`}),b(`div`,{className:`text-sm opacity-70`,children:`Runtime: 82ms`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Checklist`}),y(`ul`,{className:`mt-2 space-y-2 text-sm opacity-70`,children:[b(`li`,{children:`Visual review passed`}),b(`li`,{children:`API examples updated`}),b(`li`,{children:`Ready for handoff`})]})]})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});i(()=>d(e,n,j))});let P=s(`rue:component:anchor`);a(n,P),o(()=>{let e=m(N,{title:`复合子组件`,summary:`需要更细粒度控制时，用 Header / Toolbar / Body / Actions 手动拼装。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,className:`w-full`,"data-testid":`mockup-window-compound`,children:[b(M.Header,{title:`Analytics Snapshot`,description:`低层用法适合需要自定义头部排版的场景。`,extra:y(M.Toolbar,{children:[b(x,{size:`sm`,type:`text`,children:`This week`}),b(x,{size:`sm`,type:`outlined`,children:`Export`})]})}),y(M.Body,{className:`grid gap-3 bg-base-100 p-4 sm:grid-cols-3`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Views`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`128k`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Signups`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3.2k`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Conversion`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`5.8%`})]})]}),y(M.Actions,{children:[b(x,{type:`text`,children:`Dismiss`}),b(x,{color:`primary`,children:`Open report`})]})]})})}),code:`<MockupWindow bordered className="w-full">
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
</MockupWindow>`});i(()=>d(e,n,P))});let F=s(`rue:component:anchor`);a(n,F),o(()=>{let e=m(N,{title:`工作台布局`,summary:`结构化 API 和低层 Body 可以混用，快速拼出更复杂的后台窗口。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,background:!0,title:`Workspace Activity`,description:`适合承载列表、侧栏和操作条的中等复杂度展示区域。`,toolbar:y(M.Toolbar,{className:`justify-end`,children:[b(x,{size:`sm`,type:`text`,children:`Filters`}),b(x,{size:`sm`,type:`outlined`,children:`New panel`})]}),padding:`none`,bodyClassName:`grid divide-x divide-base-300 md:grid-cols-[220px_1fr]`,children:[y(`div`,{className:`bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sections`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2 font-medium`,children:`Overview`}),b(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Reports`}),b(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Releases`})]})]}),y(`div`,{className:`space-y-3 bg-base-100 p-4`,children:[y(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Queue`}),y(`div`,{className:`mt-3 space-y-2`,children:[b(`div`,{className:`h-10 rounded-box bg-base-200/70`}),b(`div`,{className:`h-10 rounded-box bg-base-200/70`}),b(`div`,{className:`h-10 rounded-box bg-base-200/70`})]})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Notes`}),b(`div`,{className:`mt-3 h-36 rounded-box bg-base-200/70`})]})]}),b(`div`,{className:`rounded-box border border-dashed border-base-300 p-4 text-sm opacity-70`,children:`这里保持的是 Rue 自己的展示型窗口风格，不把 MockupWindow 做成真正的模态框或桌面应用壳。`})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});i(()=>d(e,n,F))});let I=s(`rue:component:anchor`);a(n,I),o(()=>{let e=m(N,{title:`window mockup with border`,summary:`保留原有经典 demo，不改动原始 children 透传写法。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(M,{className:`border border-base-300 w-full`,"data-testid":`mockup-window-border`,children:b(`div`,{className:`grid place-content-center border-t border-base-300 h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="border border-base-300 w-full">
  <div className="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</MockupWindow>`});i(()=>d(e,n,I))});let L=s(`rue:component:anchor`);a(n,L),o(()=>{let e=m(N,{title:`window mockup with background color`,summary:`原有背景版本也继续保留，适合最简单的展示壳层。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(M,{className:`bg-base-100 border border-base-300 w-full`,"data-testid":`mockup-window-background`,children:b(`div`,{className:`grid place-content-center h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="bg-base-100 border border-base-300 w-full">
  <div className="grid place-content-center h-80">Hello!</div>
</MockupWindow>`});i(()=>d(e,n,L))});let R=e(`h2`,n);a(n,R),p(R,`id`,`mockup-window-api`),a(R,u(`API`));let re=e(`p`,n);a(n,re),a(re,u(`MockupWindow 同时支持“旧的 children 直出模式”和“新的结构化窗口模式”。`));let ie=s(`rue:component:anchor`);a(n,ie),o(()=>{let e=m(ee,{rows:ne});i(()=>d(e,n,ie))});let z=e(`div`,n);a(n,z),c(z,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let B=e(`h3`,z);a(z,B),c(B,`mt-0 mb-3 text-base font-semibold`),a(B,u(`复合子组件`));let V=e(`div`,z);a(z,V),c(V,`grid gap-2 text-sm md:grid-cols-2`);let H=e(`div`,V);a(V,H);let U=e(`code`,H);a(H,U),a(U,u(`MockupWindow.Header`)),a(H,u(`：标准头部，支持`));let W=e(`code`,H);a(H,W),a(W,u(`title`)),a(H,u(`、`));let G=e(`code`,H);a(H,G),a(G,u(`description`)),a(H,u(`和`));let K=e(`code`,H);a(H,K),a(K,u(`extra`));let q=e(`div`,V);a(V,q);let J=e(`code`,q);a(q,J),a(J,u(`MockupWindow.Toolbar`)),a(q,u(`：头部工具区包装器，默认横向排列`));let Y=e(`div`,V);a(V,Y);let ae=e(`code`,Y);a(Y,ae),a(ae,u(`MockupWindow.Body`)),a(Y,u(`：内容区，可选`));let oe=e(`code`,Y);a(Y,oe),a(oe,u(`padding`));let X=e(`div`,V);a(V,X);let se=e(`code`,X);a(X,se),a(se,u(`MockupWindow.Actions`)),a(X,u(`：底部操作区，默认右对齐并带分隔线`));let ce=e(`h2`,n);a(n,ce),a(ce,u(`FAQ`));let le=e(`h3`,n);a(n,le),a(le,u(`什么时候用根组件属性，什么时候用复合子组件？`));let Z=e(`p`,n);a(n,Z),a(Z,u(`如果只是常见的标题栏 + 内容区 + 按钮栏，优先直接使用根组件的`));let ue=e(`code`,Z);a(Z,ue),a(ue,u(`title`)),a(Z,u(`、`));let de=e(`code`,Z);a(Z,de),a(de,u(`toolbar`)),a(Z,u(`和`));let fe=e(`code`,Z);a(Z,fe),a(fe,u(`actions`)),a(Z,u(`。当你需要完全自定义头部排版，再切换到`));let pe=h(Z);a(Z,pe),f(pe,` `);let me=e(`code`,Z);a(Z,me),a(me,u(`MockupWindow.Header`)),a(Z,u(`这类低层拼装方式。`));let Q=e(`h3`,n);a(n,Q),a(Q,u(`padding 应该怎么理解？`));let $=e(`p`,n);a(n,$);let he=e(`code`,$);a($,he),a(he,u(`padding`)),a($,u(`只作用于结构化模式下自动生成的`));let ge=e(`code`,$);a($,ge),a(ge,u(`Body`)),a($,u(`。如果你已经手动使用`));let _e=h($);a($,_e),f(_e,` `);let ve=e(`code`,$);return a($,ve),a(ve,u(`MockupWindow.Body`)),a($,u(`或自己管理内容布局，直接在内容节点上写 className 会更直接。`)),t})}),n,_),n})};export{P as default};