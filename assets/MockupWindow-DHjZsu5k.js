import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,d as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as y,t as b}from"./src-BfQKH6_d.js";import{n as x}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as S}from"./Code-2C2psoH3.js";import{t as C}from"./button-DroKVuaU.js";import{t as w}from"./tabs-BgQmsOey.js";var T=(e,t)=>e&&t?`${e} ${t}`:e??t??``,E=e=>{switch(e){case`none`:return``;case`sm`:return`p-3`;case`lg`:return`p-6`;default:return`p-4`}},D=e=>Array.isArray(e)?e.length>0:e!=null,O=({title:e,description:t,extra:n,className:r,style:i,children:a,...o})=>{let s=D(a);return b(`div`,{...o,className:T(`rue-mockup-window-header flex items-start justify-between gap-3 border-b border-base-300/80 px-4 py-3`,r),style:i,children:s?a:y(f,{children:[y(`div`,{className:`min-w-0 flex-1`,children:[e==null?null:b(`div`,{className:`truncate text-sm font-semibold`,children:e}),t==null?null:b(`div`,{className:`mt-1 text-xs opacity-70`,children:t})]}),n==null?null:b(`div`,{className:`flex shrink-0 flex-wrap items-center gap-2`,children:n})]})})},k=({padding:e=`none`,className:t,style:n,children:r,...i})=>{let a=E(e);return b(`div`,{...i,className:T(T(`rue-mockup-window-body`,a),t),style:n,children:r})},A=({className:e,style:t,children:n,...r})=>b(`div`,{...r,className:T(`rue-mockup-window-toolbar flex flex-wrap items-center gap-2`,e),style:t,children:n}),j=({className:e,style:t,children:n,...r})=>b(`div`,{...r,className:T(`rue-mockup-window-actions flex flex-wrap items-center justify-end gap-2 border-t border-base-300/80 px-4 py-3`,e),style:t,children:n}),M=Object.assign(({bordered:e,background:t,title:n,description:r,toolbar:i,actions:a,padding:o,bodyClassName:s,headerClassName:c,actionsClassName:l,className:u,style:d,children:f,...p})=>{let m=n!=null||r!=null||i!=null,h=a!=null,g=m||h||o!=null||s!=null||c!=null||l!=null,_=`mockup-window`;return e&&(_+=` border border-base-300`),t&&(_+=` bg-base-100`),u&&(_+=` ${u}`),g?y(`div`,{...p,className:_,style:d,children:[m?b(O,{title:n,description:r,extra:i,className:c}):null,b(k,{padding:o??`md`,className:s,children:f}),h?b(j,{className:l,children:a}):null]}):b(`div`,{...p,className:_,style:d,children:f})},{Header:O,Body:k,Toolbar:A,Actions:j}),N=o=>g(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=n(`div`);i(c,l);let f=n(`h2`);i(l,f),t(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(f,r(`# `));let p=a(`rue:slot:anchor`);i(f,p),u(()=>{let e=o.title;m(()=>d(e,f,p))});let _=a(`rue:slot:anchor`);i(l,_),u(()=>{let r=o.summary?g(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),u(()=>{let e=o.summary;m(()=>d(e,s,c))}),r}):``;m(()=>d(r,l,_))});let v=a(`rue:component:anchor`);i(s,v),u(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});m(()=>d(e,s,v))});let y=a(`rue:slot:anchor`);return i(s,y),u(()=>{let t=o.tab.value===`preview`?o.preview():g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(S,{className:`mt-2`,lang:`tsx`,code:o.code});m(()=>d(e,t,n))}),t});m(()=>d(t,s,y))}),s}),ee=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let y=n(`th`);i(p,y),i(y,r(`类型`));let b=n(`th`);i(p,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=v({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),te=e=>g(()=>{let r=n(`span`);return u(()=>{t(r,String(`inline-block size-2 rounded-full ${e.className}`))}),r}),ne=[{prop:`actions`,description:`底部操作区；传入后自动渲染带分隔线的底栏`,type:`any`,defaultValue:`-`},{prop:`actionsClassName`,description:`底部操作区 className`,type:`string`,defaultValue:`-`},{prop:`background`,description:`为根节点追加 bg-base-100`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加 border border-base-300`,type:`boolean`,defaultValue:`false`},{prop:`bodyClassName`,description:`内容区 className；启用增强模式时作用在自动生成的 Body 上`,type:`string`,defaultValue:`-`},{prop:`children`,description:`窗口内容；未启用增强结构时会原样透传`,type:`any`,defaultValue:`-`},{prop:`className`,description:`根节点 className`,type:`string`,defaultValue:`-`},{prop:`description`,description:`头部辅助说明文案`,type:`any`,defaultValue:`-`},{prop:`headerClassName`,description:`头部区域 className`,type:`string`,defaultValue:`-`},{prop:`padding`,description:`自动生成 Body 的内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`title`,description:`头部标题；与 description / toolbar 组合后启用结构化窗口`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`头部右侧工具区，适合按钮、状态和筛选器`,type:`any`,defaultValue:`-`}],P=()=>{let{tabStructured:v,tabCompound:S,tabWorkspace:w,tabBorder:T,tabBackground:E}=_(`useSetup:0:0`,()=>l(()=>({tabStructured:_(`ref:1:0`,()=>p(`preview`)),tabCompound:_(`ref:1:1`,()=>p(`preview`)),tabWorkspace:_(`ref:1:2`,()=>p(`preview`)),tabBorder:_(`ref:1:3`,()=>p(`preview`)),tabBackground:_(`ref:1:4`,()=>p(`preview`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(x,{children:g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`max-w-none prose prose-sm md:prose-base`);let g=n(`h1`);i(p,g),i(g,r(`Mockup Window 窗口外框`));let _=n(`p`);i(p,_),t(_,`text-sm mt-3 mb-3`),i(_,r(`MockupWindow 继续保留 Rue 原本的静态窗口外壳视觉，同时补了一层更顺手的结构化 API。 既可以继续直接写 children，也可以用 title、toolbar、actions 快速搭一个带头部和底部操作区的展示窗口。`));let x=n(`div`);i(p,x),t(x,`text-sm flex flex-wrap gap-4`);let D=n(`a`);i(x,D),s(D,`href`,`https://daisyui.com/components/mockup-window/`),s(D,`target`,`_blank`),i(D,r(`查看 Mockup Window 静态样式`));let O=n(`h2`);i(p,O),i(O,r(`何时使用`));let k=n(`ul`);i(p,k);let A=n(`li`);i(k,A),i(A,r(`需要模拟一个系统窗口、面板或预览壳层，用来承载展示内容。`));let j=n(`li`);i(k,j),i(j,r(`希望保留 Rue 现有 mockup-window 视觉，但不想每次都手写头部、内容区和底部操作区。`));let P=n(`li`);i(k,P),i(P,r(`需要同时兼顾推荐用法和完全手动拼装的低层布局能力。`));let F=a(`rue:component:anchor`);i(p,F),u(()=>{let e=h(N,{title:`结构化窗口`,summary:`推荐用法：根组件直接负责标题、工具区、内容区和底部操作区。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,background:!0,title:`Deployment Preview`,description:`把常见预览面板的标题、状态和操作整理成一套更顺手的写法。`,toolbar:y(M.Toolbar,{children:[y(`div`,{className:`hidden items-center gap-2 text-xs opacity-70 sm:flex`,children:[b(te,{className:`bg-success`}),`Preview ready`]}),b(C,{size:`sm`,type:`outlined`,children:`Share`})]}),actions:y(f,{children:[b(C,{type:`text`,children:`Cancel`}),b(C,{color:`primary`,children:`Publish`})]}),bodyClassName:`grid gap-4 md:grid-cols-[1.3fr_0.7fr]`,"data-testid":`mockup-window-structured`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-200/60 p-4`,children:[b(`div`,{className:`text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Preview`}),y(`div`,{className:`mt-4 grid gap-3`,children:[b(`div`,{className:`h-24 rounded-box bg-base-100`}),y(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[b(`div`,{className:`h-16 rounded-box bg-base-100`}),b(`div`,{className:`h-16 rounded-box bg-base-100`}),b(`div`,{className:`h-16 rounded-box bg-base-100`})]})]})]}),y(`div`,{className:`space-y-3`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Build info`}),b(`div`,{className:`mt-2 text-sm opacity-70`,children:`Branch: feat/mockup-window`}),b(`div`,{className:`text-sm opacity-70`,children:`Runtime: 82ms`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Checklist`}),y(`ul`,{className:`mt-2 space-y-2 text-sm opacity-70`,children:[b(`li`,{children:`Visual review passed`}),b(`li`,{children:`API examples updated`}),b(`li`,{children:`Ready for handoff`})]})]})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});m(()=>d(e,p,F))});let I=a(`rue:component:anchor`);i(p,I),u(()=>{let e=h(N,{title:`复合子组件`,summary:`需要更细粒度控制时，用 Header / Toolbar / Body / Actions 手动拼装。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,className:`w-full`,"data-testid":`mockup-window-compound`,children:[b(M.Header,{title:`Analytics Snapshot`,description:`低层用法适合需要自定义头部排版的场景。`,extra:y(M.Toolbar,{children:[b(C,{size:`sm`,type:`text`,children:`This week`}),b(C,{size:`sm`,type:`outlined`,children:`Export`})]})}),y(M.Body,{className:`grid gap-3 bg-base-100 p-4 sm:grid-cols-3`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Views`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`128k`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Signups`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`3.2k`})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.2em] opacity-60`,children:`Conversion`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`5.8%`})]})]}),y(M.Actions,{children:[b(C,{type:`text`,children:`Dismiss`}),b(C,{color:`primary`,children:`Open report`})]})]})})}),code:`<MockupWindow bordered className="w-full">
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
</MockupWindow>`});m(()=>d(e,p,I))});let L=a(`rue:component:anchor`);i(p,L),u(()=>{let e=h(N,{title:`工作台布局`,summary:`结构化 API 和低层 Body 可以混用，快速拼出更复杂的后台窗口。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{bordered:!0,background:!0,title:`Workspace Activity`,description:`适合承载列表、侧栏和操作条的中等复杂度展示区域。`,toolbar:y(M.Toolbar,{className:`justify-end`,children:[b(C,{size:`sm`,type:`text`,children:`Filters`}),b(C,{size:`sm`,type:`outlined`,children:`New panel`})]}),padding:`none`,bodyClassName:`grid divide-x divide-base-300 md:grid-cols-[220px_1fr]`,children:[y(`div`,{className:`bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 text-xs font-medium uppercase tracking-[0.2em] opacity-60`,children:`Sections`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2 font-medium`,children:`Overview`}),b(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Reports`}),b(`div`,{className:`rounded-box px-3 py-2 opacity-70`,children:`Releases`})]})]}),y(`div`,{className:`space-y-3 bg-base-100 p-4`,children:[y(`div`,{className:`grid gap-3 lg:grid-cols-2`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Queue`}),y(`div`,{className:`mt-3 space-y-2`,children:[b(`div`,{className:`h-10 rounded-box bg-base-200/70`}),b(`div`,{className:`h-10 rounded-box bg-base-200/70`}),b(`div`,{className:`h-10 rounded-box bg-base-200/70`})]})]}),y(`div`,{className:`rounded-box border border-base-300 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Notes`}),b(`div`,{className:`mt-3 h-36 rounded-box bg-base-200/70`})]})]}),b(`div`,{className:`rounded-box border border-dashed border-base-300 p-4 text-sm opacity-70`,children:`这里保持的是 Rue 自己的展示型窗口风格，不把 MockupWindow 做成真正的模态框或桌面应用壳。`})]})]})})}),code:`<MockupWindow
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
</MockupWindow>`});m(()=>d(e,p,L))});let re=a(`rue:component:anchor`);i(p,re),u(()=>{let e=h(N,{title:`window mockup with border`,summary:`保留原有经典 demo，不改动原始 children 透传写法。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(M,{className:`border border-base-300 w-full`,"data-testid":`mockup-window-border`,children:b(`div`,{className:`grid place-content-center border-t border-base-300 h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="border border-base-300 w-full">
  <div className="grid place-content-center border-t border-base-300 h-80">Hello!</div>
</MockupWindow>`});m(()=>d(e,p,re))});let ie=a(`rue:component:anchor`);i(p,ie),u(()=>{let e=h(N,{title:`window mockup with background color`,summary:`原有背景版本也继续保留，适合最简单的展示壳层。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(M,{className:`bg-base-100 border border-base-300 w-full`,"data-testid":`mockup-window-background`,children:b(`div`,{className:`grid place-content-center h-80`,children:`Hello!`})})})}),code:`<MockupWindow className="bg-base-100 border border-base-300 w-full">
  <div className="grid place-content-center h-80">Hello!</div>
</MockupWindow>`});m(()=>d(e,p,ie))});let R=n(`h2`);i(p,R),s(R,`id`,`mockup-window-api`),i(R,r(`API`));let ae=n(`p`);i(p,ae),i(ae,r(`MockupWindow 同时支持“旧的 children 直出模式”和“新的结构化窗口模式”。`));let z=a(`rue:component:anchor`);i(p,z),u(()=>{let e=h(ee,{rows:ne});m(()=>d(e,p,z))});let B=n(`div`);i(p,B),t(B,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let V=n(`h3`);i(B,V),t(V,`mt-0 mb-3 text-base font-semibold`),i(V,r(`复合子组件`));let H=n(`div`);i(B,H),t(H,`grid gap-2 text-sm md:grid-cols-2`);let U=n(`div`);i(H,U);let W=n(`code`);i(U,W),i(W,r(`MockupWindow.Header`)),i(U,r(`：标准头部，支持`));let G=n(`code`);i(U,G),i(G,r(`title`)),i(U,r(`、`));let K=n(`code`);i(U,K),i(K,r(`description`)),i(U,r(`和`));let q=n(`code`);i(U,q),i(q,r(`extra`));let J=n(`div`);i(H,J);let Y=n(`code`);i(J,Y),i(Y,r(`MockupWindow.Toolbar`)),i(J,r(`：头部工具区包装器，默认横向排列`));let X=n(`div`);i(H,X);let oe=n(`code`);i(X,oe),i(oe,r(`MockupWindow.Body`)),i(X,r(`：内容区，可选`));let se=n(`code`);i(X,se),i(se,r(`padding`));let Z=n(`div`);i(H,Z);let ce=n(`code`);i(Z,ce),i(ce,r(`MockupWindow.Actions`)),i(Z,r(`：底部操作区，默认右对齐并带分隔线`));let le=n(`h2`);i(p,le),i(le,r(`FAQ`));let ue=n(`h3`);i(p,ue),i(ue,r(`什么时候用根组件属性，什么时候用复合子组件？`));let Q=n(`p`);i(p,Q),i(Q,r(`如果只是常见的标题栏 + 内容区 + 按钮栏，优先直接使用根组件的`));let de=n(`code`);i(Q,de),i(de,r(`title`)),i(Q,r(`、`));let fe=n(`code`);i(Q,fe),i(fe,r(`toolbar`)),i(Q,r(`和`));let pe=n(`code`);i(Q,pe),i(pe,r(`actions`)),i(Q,r(`。当你需要完全自定义头部排版，再切换到`));let me=o(Q);i(Q,me),c(me,` `);let he=n(`code`);i(Q,he),i(he,r(`MockupWindow.Header`)),i(Q,r(`这类低层拼装方式。`));let ge=n(`h3`);i(p,ge),i(ge,r(`padding 应该怎么理解？`));let $=n(`p`);i(p,$);let _e=n(`code`);i($,_e),i(_e,r(`padding`)),i($,r(`只作用于结构化模式下自动生成的`));let ve=n(`code`);i($,ve),i(ve,r(`Body`)),i($,r(`。如果你已经手动使用`));let ye=o($);i($,ye),c(ye,` `);let be=n(`code`);return i($,be),i(be,r(`MockupWindow.Body`)),i($,r(`或自己管理内容布局，直接在内容节点上写 className 会更直接。`)),l})}),l,p),l})};export{P as default};