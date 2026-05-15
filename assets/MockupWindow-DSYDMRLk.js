import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,_t as c,d as l,f as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Bp8DIxJg.js";import{a as _,n as v}from"./vapor-helpers-vapor-D3i3KBBg.js";import{n as y,t as b}from"./src-Cl1DK5fX.js";import{n as x}from"./SidebarPlaygroundDesign-CIhn6bFh.js";import{t as S}from"./Code-D55WiaDx.js";import{t as C}from"./button-TfalnuAw.js";import{t as w}from"./tabs-CrC7r95z.js";var T=(e,t)=>e&&t?`${e} ${t}`:e??t??``,E=e=>{switch(e){case`none`:return``;case`sm`:return`p-3`;case`lg`:return`p-6`;default:return`p-4`}},D=e=>Array.isArray(e)?e.length>0:e!=null,O=({title:e,description:t,extra:n,className:r,style:i,children:a,...o})=>{let s=D(a);return b(`div`,{...o,className:T(`rue-mockup-window-header flex items-start justify-between gap-3 border-b border-base-300/80 px-4 py-3`,r),style:i,children:s?a:y(u,{children:[y(`div`,{className:`min-w-0 flex-1`,children:[e==null?null:b(`div`,{className:`truncate text-sm font-semibold`,children:e}),t==null?null:b(`div`,{className:`mt-1 text-xs opacity-70`,children:t})]}),n==null?null:b(`div`,{className:`flex shrink-0 flex-wrap items-center gap-2`,children:n})]})})},k=({padding:e=`none`,className:t,style:n,children:r,...i})=>{let a=E(e);return b(`div`,{...i,className:T(T(`rue-mockup-window-body`,a),t),style:n,children:r})},A=({className:e,style:t,children:n,...r})=>b(`div`,{...r,className:T(`rue-mockup-window-toolbar flex flex-wrap items-center gap-2`,e),style:t,children:n}),j=({className:e,style:t,children:n,...r})=>b(`div`,{...r,className:T(`rue-mockup-window-actions flex flex-wrap items-center justify-end gap-2 border-t border-base-300/80 px-4 py-3`,e),style:t,children:n}),M=Object.assign(({bordered:e,background:t,title:n,description:r,toolbar:i,actions:a,padding:o,bodyClassName:s,headerClassName:c,actionsClassName:l,className:u,style:d,children:f,...p})=>{let m=n!=null||r!=null||i!=null,h=a!=null,g=m||h||o!=null||s!=null||c!=null||l!=null,_=`mockup-window`;return e&&(_+=` border border-base-300`),t&&(_+=` bg-base-100`),u&&(_+=` ${u}`),g?y(`div`,{...p,className:_,style:d,children:[m?b(O,{title:n,description:r,extra:i,className:c}):null,b(k,{padding:o??`md`,className:s,children:f}),h?b(j,{className:l,children:a}):null]}):b(`div`,{...p,className:_,style:d,children:f})},{Header:O,Body:k,Toolbar:A,Actions:j}),N=a=>l(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let p=r(`div`,f);i(f,p);let g=r(`h2`,p);i(p,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),c(()=>{let e=a.title;h(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);i(p,v),c(()=>{let o=a.summary?l(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),c(()=>{let e=a.summary;h(()=>d(e,s,l))}),o}):``;h(()=>d(o,p,v))});let y=e(`rue:component:anchor`);i(u,y),c(()=>{let e=m(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});h(()=>d(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),c(()=>{let n=a.tab.value===`preview`?a.preview():l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=m(S,{className:`mt-2`,lang:`tsx`,code:a.code});h(()=>d(e,n,r))}),n});h(()=>d(n,u,b))}),u}),ee=a=>l(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(l(()=>{let a=t(),o=r(`tr`,a);i(a,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);i(o,l);let u=r(`code`,l);i(l,u);let f=e(`rue:slot:anchor`);i(u,f),c(()=>{let e=n.prop;h(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),c(()=>{let e=n.description;h(()=>d(e,p,m))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),c(()=>{let e=n.type;h(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;h(()=>d(e,b,x))}),a}),a,o)}})}),f}),te=e=>l(t=>{let i=r(`span`,t);return c(()=>{n(i,String(`inline-block size-2 rounded-full ${e.className}`))}),i}),ne=[{prop:`actions`,description:`底部操作区；传入后自动渲染带分隔线的底栏`,type:`any`,defaultValue:`-`},{prop:`actionsClassName`,description:`底部操作区 className`,type:`string`,defaultValue:`-`},{prop:`background`,description:`为根节点追加 bg-base-100`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加 border border-base-300`,type:`boolean`,defaultValue:`false`},{prop:`bodyClassName`,description:`内容区 className；启用增强模式时作用在自动生成的 Body 上`,type:`string`,defaultValue:`-`},{prop:`children`,description:`窗口内容；未启用增强结构时会原样透传`,type:`any`,defaultValue:`-`},{prop:`className`,description:`根节点 className`,type:`string`,defaultValue:`-`},{prop:`description`,description:`头部辅助说明文案`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`头部区域 className`,type:`string`,defaultValue:`-`},{prop:`padding`,description:`自动生成 Body 的内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`title`,description:`头部标题；与 description / toolbar 组合后启用结构化窗口`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`头部右侧工具区，适合按钮、状态和筛选器`,type:`any`,defaultValue:`-`}],P=()=>{let{tabStructured:v,tabCompound:S,tabWorkspace:w,tabBorder:T,tabBackground:E}=_(`useSetup:0:0`,()=>f(()=>({tabStructured:_(`ref:1:0`,()=>p(`preview`)),tabCompound:_(`ref:1:1`,()=>p(`preview`)),tabWorkspace:_(`ref:1:2`,()=>p(`preview`)),tabBorder:_(`ref:1:3`,()=>p(`preview`)),tabBackground:_(`ref:1:4`,()=>p(`preview`))})));return l(f=>{let p=t(),_=e(`rue:component:anchor`);return i(p,_),d(m(x,{children:l(()=>{let l=t(),f=r(`div`,l);i(l,f),n(f,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,f);i(f,p),i(p,o(`Mockup Window 窗口外框`));let _=r(`p`,f);i(f,_),n(_,`text-sm mt-3 mb-3`),i(_,o(`MockupWindow 继续保留 Rue 原本的静态窗口外壳视觉，同时补了一层更顺手的结构化 API。 既可以继续直接写 children，也可以用 title、toolbar、actions 快速搭一个带头部和底部操作区的展示窗口。`));let x=r(`div`,f);i(f,x),n(x,`text-sm flex flex-wrap gap-4`);let D=r(`a`,x);i(x,D),s(D,`href`,`https://daisyui.com/components/mockup-window/`),s(D,`target`,`_blank`),i(D,o(`查看 Mockup Window 静态样式`));let O=r(`h2`,f);i(f,O),i(O,o(`何时使用`));let k=r(`ul`,f);i(f,k);let A=r(`li`,k);i(k,A),i(A,o(`需要模拟一个系统窗口、面板或预览壳层，用来承载展示内容。`));let j=r(`li`,k);i(k,j),i(j,o(`希望保留 Rue 现有 mockup-window 视觉，但不想每次都手写头部、内容区和底部操作区。`));let P=r(`li`,k);i(k,P),i(P,o(`需要同时兼顾推荐用法和完全手动拼装的低层布局能力。`));let F=e(`rue:component:anchor`);i(f,F),c(()=>{let e=m(N,{title:`结构化窗口`,summary:`推荐用法：根组件直接负责标题、工具区、内容区和底部操作区。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,background:!0,title:`Deployment Preview`,description:`把常见预览面板的标题、状态和操作整理成一套更顺手的写法。`,toolbar:y(M.Toolbar,{children:[y(`div`,{className:`hidden items-center gap-2 text-xs opacity-70 sm:flex`,children:[b(te,{className:`bg-success`}),`Preview ready`]}),b(C,{size:`sm`,type:`outlined`,children:`Share`})]}),actions:y(u,{children:[b(C,{type:`text`,children:`Cancel`}),b(C,{color:`primary`,children:`Publish`})]}),bodyClassName:`grid gap-4 md:grid-cols-[1.3fr_0.7fr]`,"data-testid":`mockup-window-structured`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-200/60 p-4`,children:[b(`div`,{className:`text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Preview`}),y(`div`,{className:`mt-4 grid gap-3`,children:[b(`div`,{className:`h-24 rounded-box bg-base-100`}),y(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[b(`div`,{className:`h-16 rounded-box bg-base-100`}),b(`div`,{className:`h-16 rounded-box bg-base-100`}),b(`div`,{className:`h-16 rounded-box bg-base-100`})]})]})]}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Build info`}),b(`div`,{className:`mt-2 text-sm opacity-70`,children:`Branch: feat/mockup-window`}),b(`div`,{className:`text-sm opacity-70`,children:`Runtime: 82ms`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Checklist`}),y(`ul`,{className:`mt-2 space-y-2 text-sm opacity-70`,children:[b(`li`,{children:`Visual review passed`}),b(`li`,{children:`API examples updated`}),b(`li`,{children:`Ready for handoff`})]})]})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});h(()=>d(e,f,F))});let I=e(`rue:component:anchor`);i(f,I),c(()=>{let e=m(N,{title:`复合子组件`,summary:`需要更细粒度控制时，用 Header / Toolbar / Body / Actions 手动拼装。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,className:`w-full`,"data-testid":`mockup-window-compound`,children:[b(M.Header,{title:`Analytics Snapshot`,description:`低层用法适合需要自定义头部排版的场景。`,extra:y(M.Toolbar,{children:[b(C,{size:`sm`,type:`text`,children:`This week`}),b(C,{size:`sm`,type:`outlined`,children:`Export`})]})}),y(M.Body,{className:`grid gap-3 bg-base-100 p-4 sm:grid-cols-3`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Views`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`128k`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Signups`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3.2k`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Conversion`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`5.8%`})]})]}),y(M.Actions,{children:[b(C,{type:`text`,children:`Dismiss`}),b(C,{color:`primary`,children:`Open report`})]})]})})}),code:`<MockupWindow bordered className="w-full">
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
</MockupWindow>`});h(()=>d(e,f,I))});let re=e(`rue:component:anchor`);i(f,re),c(()=>{let e=m(N,{title:`工作台布局`,summary:`结构化 API 和低层 Body 可以混用，快速拼出更复杂的后台窗口。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,background:!0,title:`Workspace Activity`,description:`适合承载列表、侧栏和操作条的中等复杂度展示区域。`,toolbar:y(M.Toolbar,{className:`justify-end`,children:[b(C,{size:`sm`,type:`text`,children:`Filters`}),b(C,{size:`sm`,type:`outlined`,children:`New panel`})]}),padding:`none`,bodyClassName:`grid divide-x divide-base-300 md:grid-cols-[220px_1fr]`,children:[y(`div`,{className:`bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sections`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2 font-medium`,children:`Overview`}),b(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Reports`}),b(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Releases`})]})]}),y(`div`,{className:`space-y-3 bg-base-100 p-4`,children:[y(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Queue`}),y(`div`,{className:`mt-3 space-y-2`,children:[b(`div`,{className:`h-10 rounded-box bg-base-200/70`}),b(`div`,{className:`h-10 rounded-box bg-base-200/70`}),b(`div`,{className:`h-10 rounded-box bg-base-200/70`})]})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Notes`}),b(`div`,{className:`mt-3 h-36 rounded-box bg-base-200/70`})]})]}),b(`div`,{className:`rounded-box border border-dashed border-base-300 p-4 text-sm opacity-70`,children:`这里保持的是 Rue 自己的展示型窗口风格，不把 MockupWindow 做成真正的模态框或桌面应用壳。`})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});h(()=>d(e,f,re))});let ie=e(`rue:component:anchor`);i(f,ie),c(()=>{let e=m(N,{title:`window mockup with border`,summary:`保留原有经典 demo，不改动原始 children 透传写法。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(M,{className:`border border-base-300 w-full`,"data-testid":`mockup-window-border`,children:b(`div`,{className:`grid place-content-center border-t border-base-300 h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="border border-base-300 w-full">
  <div className="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</MockupWindow>`});h(()=>d(e,f,ie))});let ae=e(`rue:component:anchor`);i(f,ae),c(()=>{let e=m(N,{title:`window mockup with background color`,summary:`原有背景版本也继续保留，适合最简单的展示壳层。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(M,{className:`bg-base-100 border border-base-300 w-full`,"data-testid":`mockup-window-background`,children:b(`div`,{className:`grid place-content-center h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="bg-base-100 border border-base-300 w-full">
  <div className="grid place-content-center h-80">Hello!</div>
</MockupWindow>`});h(()=>d(e,f,ae))});let L=r(`h2`,f);i(f,L),s(L,`id`,`mockup-window-api`),i(L,o(`API`));let oe=r(`p`,f);i(f,oe),i(oe,o(`MockupWindow 同时支持“旧的 children 直出模式”和“新的结构化窗口模式”。`));let R=e(`rue:component:anchor`);i(f,R),c(()=>{let e=m(ee,{rows:ne});h(()=>d(e,f,R))});let z=r(`div`,f);i(f,z),n(z,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let B=r(`h3`,z);i(z,B),n(B,`mt-0 mb-3 text-base font-semibold`),i(B,o(`复合子组件`));let V=r(`div`,z);i(z,V),n(V,`grid gap-2 text-sm md:grid-cols-2`);let H=r(`div`,V);i(V,H);let U=r(`code`,H);i(H,U),i(U,o(`MockupWindow.Header`)),i(H,o(`：标准头部，支持`));let W=r(`code`,H);i(H,W),i(W,o(`title`)),i(H,o(`、`));let G=r(`code`,H);i(H,G),i(G,o(`description`)),i(H,o(`和`));let K=r(`code`,H);i(H,K),i(K,o(`extra`));let q=r(`div`,V);i(V,q);let J=r(`code`,q);i(q,J),i(J,o(`MockupWindow.Toolbar`)),i(q,o(`：头部工具区包装器，默认横向排列`));let Y=r(`div`,V);i(V,Y);let se=r(`code`,Y);i(Y,se),i(se,o(`MockupWindow.Body`)),i(Y,o(`：内容区，可选`));let ce=r(`code`,Y);i(Y,ce),i(ce,o(`padding`));let X=r(`div`,V);i(V,X);let le=r(`code`,X);i(X,le),i(le,o(`MockupWindow.Actions`)),i(X,o(`：底部操作区，默认右对齐并带分隔线`));let ue=r(`h2`,f);i(f,ue),i(ue,o(`FAQ`));let de=r(`h3`,f);i(f,de),i(de,o(`什么时候用根组件属性，什么时候用复合子组件？`));let Z=r(`p`,f);i(f,Z),i(Z,o(`如果只是常见的标题栏 + 内容区 + 按钮栏，优先直接使用根组件的`));let fe=r(`code`,Z);i(Z,fe),i(fe,o(`title`)),i(Z,o(`、`));let pe=r(`code`,Z);i(Z,pe),i(pe,o(`toolbar`)),i(Z,o(`和`));let me=r(`code`,Z);i(Z,me),i(me,o(`actions`)),i(Z,o(`。当你需要完全自定义头部排版，再切换到`));let he=g(Z);i(Z,he),a(he,` `);let ge=r(`code`,Z);i(Z,ge),i(ge,o(`MockupWindow.Header`)),i(Z,o(`这类低层拼装方式。`));let Q=r(`h3`,f);i(f,Q),i(Q,o(`padding 应该怎么理解？`));let $=r(`p`,f);i(f,$);let _e=r(`code`,$);i($,_e),i(_e,o(`padding`)),i($,o(`只作用于结构化模式下自动生成的`));let ve=r(`code`,$);i($,ve),i(ve,o(`Body`)),i($,o(`。如果你已经手动使用`));let ye=g($);i($,ye),a(ye,` `);let be=r(`code`,$);return i($,be),i(be,o(`MockupWindow.Body`)),i($,o(`或自己管理内容布局，直接在内容节点上写 className 会更直接。`)),l})}),p,_),p})};export{P as default};