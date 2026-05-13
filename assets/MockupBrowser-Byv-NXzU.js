import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,d as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as y,t as b}from"./src-BfQKH6_d.js";import{n as x}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as S}from"./Code-2C2psoH3.js";import{t as C}from"./tabs-BgQmsOey.js";var w=(...e)=>e.filter(Boolean).join(` `),ee=(e=`default`)=>{switch(e){case`success`:return`border-success/30 bg-success/10 text-success`;case`warning`:return`border-warning/30 bg-warning/10 text-warning`;case`error`:return`border-error/30 bg-error/10 text-error`;default:return`border-base-300 bg-base-200/60`}},te=(e=`none`)=>{switch(e){case`sm`:return`p-3`;case`md`:return`p-4`;case`lg`:return`p-6`;default:return``}},T=({href:e,prefix:t,suffix:n,interactive:r,status:i=`default`,className:a,children:o,...s})=>{let c=o??e,l=w(`input input-sm flex h-8 w-full min-w-0 items-center gap-2 text-sm`,ee(i),a),u=y(f,{children:[t==null?null:b(`span`,{className:`shrink-0 opacity-55`,children:t}),b(`span`,{className:`min-w-0 flex-1 truncate`,children:c}),n==null?null:b(`span`,{className:`shrink-0 opacity-55`,children:n})]});return(r||e)&&typeof e==`string`?b(`a`,{...s,href:e,className:l,children:u}):b(`div`,{...s,className:l,children:u})},E=({bordered:e=!0,background:t,padding:n=`none`,className:r,children:i,...a})=>b(`div`,{...a,className:w(e&&`border-t border-base-300`,t&&`bg-base-100`,te(n),r),children:i}),D=({start:e,end:t,className:n,children:r,...i})=>y(`div`,{...i,className:w(`mockup-browser-toolbar gap-3`,n),children:[e==null?null:b(`div`,{className:`flex shrink-0 items-center gap-2`,children:e}),r==null?null:b(`div`,{className:`flex min-w-0 flex-1 items-center`,children:r}),t==null?null:b(`div`,{className:`flex shrink-0 items-center gap-2`,children:t})]}),O=Object.assign(({bordered:e,background:t,showToolbar:n,url:r,toolbar:i,toolbarStart:a,toolbarEnd:o,toolbarClassName:s,contentClassName:c,contentBordered:l,contentBackground:u,contentPadding:d,className:f,children:p,...m})=>{let h=i??(r==null?null:b(T,{href:typeof r==`string`?r:void 0,children:r})),g=n!==!1&&(i!=null||r!=null||a!=null||o!=null||s!=null),_=g||c!=null||l!=null||u!=null||d!=null;return y(`div`,{...m,className:w(`mockup-browser`,e&&`border border-base-300`,t&&`bg-base-100`,f),children:[g?b(D,{className:s,start:a,end:o,children:h}):null,_?b(E,{className:c,bordered:l,background:u,padding:d,children:p}):p]})},{Toolbar:D,AddressBar:T,Content:E}),k=o=>g(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=n(`div`);i(c,l);let f=n(`h2`);i(l,f),t(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(f,r(`# `));let p=a(`rue:slot:anchor`);i(f,p),u(()=>{let e=o.title;m(()=>d(e,f,p))});let _=a(`rue:slot:anchor`);i(l,_),u(()=>{let r=o.summary?g(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),u(()=>{let e=o.summary;m(()=>d(e,s,c))}),r}):``;m(()=>d(r,l,_))});let v=a(`rue:component:anchor`);i(s,v),u(()=>{let e=h(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});m(()=>d(e,s,v))});let y=a(`rue:slot:anchor`);return i(s,y),u(()=>{let t=o.tab.value===`preview`?o.preview():g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(S,{className:`mt-2`,lang:`tsx`,code:o.code});m(()=>d(e,t,n))}),t});m(()=>d(t,s,y))}),s}),A=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let y=n(`th`);i(p,y),i(y,r(`类型`));let b=n(`th`);i(p,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=v({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),ne=[{prop:`bordered`,description:`为浏览器外框追加边框`,type:`boolean`,defaultValue:`false`},{prop:`background`,description:`为外层容器追加底色`,type:`boolean`,defaultValue:`false`},{prop:`showToolbar`,description:`控制是否渲染快捷工具栏`,type:`boolean`,defaultValue:`true`},{prop:`url`,description:`快捷生成地址栏内容；适合推荐用法`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`自定义快捷工具栏主体；通常与 toolbarStart / toolbarEnd 配合`,type:`any`,defaultValue:`-`},{prop:`toolbarStart`,description:`快捷工具栏左侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarEnd`,description:`快捷工具栏右侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarClassName`,description:`快捷工具栏附加样式`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`快捷内容区附加样式；设置后会自动包裹内容区`,type:`string`,defaultValue:`-`},{prop:`contentBordered`,description:`快捷内容区是否带上边框`,type:`boolean`,defaultValue:`true`},{prop:`contentBackground`,description:`快捷内容区是否带背景色`,type:`boolean`,defaultValue:`false`},{prop:`contentPadding`,description:`快捷内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`}],re=[{prop:`start`,description:`工具栏左侧内容`,type:`any`,defaultValue:`-`},{prop:`end`,description:`工具栏右侧内容`,type:`any`,defaultValue:`-`},{prop:`children`,description:`工具栏主体内容，通常放地址栏`,type:`any`,defaultValue:`-`},{prop:`className`,description:`工具栏附加样式`,type:`string`,defaultValue:`-`}],ie=[{prop:`href`,description:`地址链接；传入后默认渲染为 a`,type:`string`,defaultValue:`-`},{prop:`prefix`,description:`地址栏前缀内容，例如标签或图标`,type:`any`,defaultValue:`-`},{prop:`suffix`,description:`地址栏后缀内容，例如状态或动作`,type:`any`,defaultValue:`-`},{prop:`interactive`,description:`强制按可交互链接样式输出`,type:`boolean`,defaultValue:`false`},{prop:`status`,description:`地址栏状态色`,type:`'default' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`}],ae=[{prop:`bordered`,description:`内容区上边框`,type:`boolean`,defaultValue:`true`},{prop:`background`,description:`内容区背景色`,type:`boolean`,defaultValue:`false`},{prop:`padding`,description:`内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`},{prop:`className`,description:`内容区附加样式`,type:`string`,defaultValue:`-`}],j=()=>{let{tabRecommended:v,tabBorder:S,tabBackground:C,tabToolbar:w,tabAddressBar:ee,tabContent:te,tabRecipes:T}=_(`useSetup:0:0`,()=>l(()=>({tabRecommended:_(`ref:1:0`,()=>p(`preview`)),tabBorder:_(`ref:1:1`,()=>p(`preview`)),tabBackground:_(`ref:1:2`,()=>p(`preview`)),tabToolbar:_(`ref:1:3`,()=>p(`preview`)),tabAddressBar:_(`ref:1:4`,()=>p(`preview`)),tabContent:_(`ref:1:5`,()=>p(`preview`)),tabRecipes:_(`ref:1:6`,()=>p(`preview`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(x,{children:g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`max-w-none prose prose-sm md:prose-base`);let g=n(`h1`);i(p,g),i(g,r(`Mockup Browser 浏览器外框`));let _=n(`p`);i(p,_),t(_,`text-sm mt-3 mb-3`),i(_,r(`MockupBrowser 保留 Rue 当前的浏览器外框视觉，同时补上推荐写法所需的地址栏、内容区和快捷工具栏 API。 原始 children 组合方式依然可用，适合需要完全自定义结构的场景。`));let x=n(`div`);i(p,x),t(x,`text-sm flex flex-wrap gap-4`);let E=n(`a`);i(x,E),s(E,`href`,`https://daisyui.com/components/mockup-browser/`),s(E,`target`,`_blank`),i(E,r(`查看 Browser Mockup 静态样式`));let D=n(`h2`);i(p,D),i(D,r(`何时使用`));let j=n(`ul`);i(p,j);let oe=n(`li`);i(j,oe),i(oe,r(`需要展示网页、管理台、嵌入式预览或静态产品截图，并且希望外层有统一的浏览器语义。`));let se=n(`li`);i(j,se),i(se,r(`希望快速落一个带地址栏的浏览器框，用少量 props 搭出完整演示。`));let ce=n(`li`);i(j,ce),i(ce,r(`需要保留对工具栏和内容区的完全控制，继续使用原始组合模式。`));let le=a(`rue:component:anchor`);i(p,le),u(()=>{let e=h(k,{title:`推荐用法`,summary:`直接通过 url、toolbarEnd、contentClassName 等快捷 props 组出一个完整浏览器预览。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(O,{bordered:!0,background:!0,url:`https://app.ruejs.org/workspaces/demo`,toolbarEnd:y(f,{children:[b(`span`,{className:`badge badge-success badge-sm`,children:`LIVE`}),b(`span`,{className:`badge badge-ghost badge-sm`,children:`v0.15`})]}),contentClassName:`h-[22rem] bg-base-100`,children:y(`div`,{className:`grid h-full md:grid-cols-[15rem_minmax(0,1fr)]`,children:[y(`aside`,{className:`border-r border-base-300 bg-base-200/35 p-4`,children:[b(`div`,{className:`mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Workspace`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`rounded-box bg-primary/10 px-3 py-2 font-medium text-primary`,children:`Overview`}),b(`div`,{className:`rounded-box px-3 py-2`,children:`Releases`}),b(`div`,{className:`rounded-box px-3 py-2`,children:`Assets`}),b(`div`,{className:`rounded-box px-3 py-2`,children:`Team`})]})]}),y(`main`,{className:`grid gap-4 p-4`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`flex items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Current sprint`}),b(`div`,{className:`mt-1 text-lg font-semibold`,children:`Mockup Browser refresh`})]}),b(`div`,{className:`badge badge-primary badge-outline`,children:`In review`})]}),b(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`用增强后的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。`})]}),y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Deploys`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`18`})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Latency`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`124ms`})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Errors`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`0.02%`})]})]})]})]})})})}),code:`<MockupBrowser
  bordered
  background
  url="https://app.ruejs.org/workspaces/demo"
  toolbarEnd={
    <>
      <span className="badge badge-success badge-sm">LIVE</span>
      <span className="badge badge-ghost badge-sm">v0.15</span>
    </>
  }
  contentClassName="h-[22rem] bg-base-100"
>
  <div className="grid h-full md:grid-cols-[15rem_minmax(0,1fr)]">
    <aside className="border-r border-base-300 bg-base-200/35 p-4">
      <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60">Workspace</div>
      <div className="space-y-2 text-sm">
        <div className="rounded-box bg-primary/10 px-3 py-2 font-medium text-primary">Overview</div>
        <div className="rounded-box px-3 py-2">Releases</div>
        <div className="rounded-box px-3 py-2">Assets</div>
        <div className="rounded-box px-3 py-2">Team</div>
      </div>
    </aside>
    <main className="grid gap-4 p-4">
      <div className="rounded-box border border-base-300 bg-base-100 p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] opacity-60">Current sprint</div>
            <div className="mt-1 text-lg font-semibold">Mockup Browser refresh</div>
          </div>
          <div className="badge badge-primary badge-outline">In review</div>
        </div>
        <p className="mt-3 mb-0 text-sm opacity-75">
          用增强后的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-box border border-base-300 bg-base-100 p-4">
          <div className="text-xs uppercase tracking-[0.24em] opacity-60">Deploys</div>
          <div className="mt-2 text-2xl font-semibold">18</div>
        </div>
        <div className="rounded-box border border-base-300 bg-base-100 p-4">
          <div className="text-xs uppercase tracking-[0.24em] opacity-60">Latency</div>
          <div className="mt-2 text-2xl font-semibold">124ms</div>
        </div>
        <div className="rounded-box border border-base-300 bg-base-100 p-4">
          <div className="text-xs uppercase tracking-[0.24em] opacity-60">Errors</div>
          <div className="mt-2 text-2xl font-semibold">0.02%</div>
        </div>
      </div>
    </main>
  </div>
</MockupBrowser>`});m(()=>d(e,p,le))});let ue=a(`rue:component:anchor`);i(p,ue),u(()=>{let e=h(k,{title:`browser mockup with border`,summary:`保留原有 demo，不改变旧的 children + Toolbar 组织方式。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(O,{className:`w-full border border-base-300`,"data-testid":`mockup-browser-border`,children:[b(O.Toolbar,{children:b(`div`,{className:`input`,children:`https://daisyui.com`})}),b(`div`,{className:`grid h-80 place-content-center border-t border-base-300`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center border-t border-base-300">Hello!</div>
</MockupBrowser>`});m(()=>d(e,p,ue))});let de=a(`rue:component:anchor`);i(p,de),u(()=>{let e=h(k,{title:`browser mockup with background color`,summary:`保留原有背景色 demo，继续支持最原始的手写结构。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(O,{className:`w-full border border-base-300 bg-base-100`,children:[b(O.Toolbar,{children:b(`div`,{className:`input`,children:`https://daisyui.com`})}),b(`div`,{className:`grid h-80 place-content-center`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300 bg-base-100">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center">Hello!</div>
</MockupBrowser>`});m(()=>d(e,p,de))});let fe=a(`rue:component:anchor`);i(p,fe),u(()=>{let e=h(k,{title:`自定义工具栏`,summary:`Toolbar 的 start / end 插槽适合放站点标签、环境状态或次要动作。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(O,{bordered:!0,background:!0,className:`w-full`,children:[b(O.Toolbar,{start:b(`span`,{className:`badge badge-neutral badge-sm`,children:`Docs`}),end:y(f,{children:[b(`span`,{className:`badge badge-ghost badge-sm`,children:`Preview`}),b(`span`,{className:`badge badge-primary badge-sm`,children:`Share`})]}),children:b(O.AddressBar,{href:`https://ruejs.org/docs/components/mockup-browser`,prefix:b(`span`,{className:`badge badge-ghost badge-xs`,children:`GET`}),suffix:b(`span`,{className:`text-xs`,children:`public`}),children:`https://ruejs.org/docs/components/mockup-browser`})}),y(O.Content,{background:!0,padding:`md`,className:`grid gap-4 md:grid-cols-[18rem_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Outline`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`font-medium text-primary`,children:`Introduction`}),b(`div`,{children:`Recommended usage`}),b(`div`,{children:`AddressBar`}),b(`div`,{children:`Content`})]})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser`}),b(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`工具栏仍然保留原始组合能力，但通过 start / end 把常见布局槽位做得更顺手。`})]})]})]})})}),code:`<MockupBrowser bordered background className="w-full">
  <MockupBrowser.Toolbar
    start={<span className="badge badge-neutral badge-sm">Docs</span>}
    end={
      <>
        <span className="badge badge-ghost badge-sm">Preview</span>
        <span className="badge badge-primary badge-sm">Share</span>
      </>
    }
  >
    <MockupBrowser.AddressBar
      href="https://ruejs.org/docs/components/mockup-browser"
      prefix={<span className="badge badge-ghost badge-xs">GET</span>}
      suffix={<span className="text-xs">public</span>}
    >
      https://ruejs.org/docs/components/mockup-browser
    </MockupBrowser.AddressBar>
  </MockupBrowser.Toolbar>
  <MockupBrowser.Content background padding="md">
    <div className="rounded-box border border-base-300 bg-base-100 p-4">
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60">Outline</div>
      <div className="space-y-2 text-sm">
        <div className="font-medium text-primary">Introduction</div>
        <div>Recommended usage</div>
        <div>AddressBar</div>
        <div>Content</div>
      </div>
    </div>
    <div className="rounded-box border border-base-300 bg-base-100 p-4">
      <div className="text-lg font-semibold">Mockup Browser</div>
      <p className="mt-3 mb-0 text-sm opacity-75">
        工具栏仍然保留原始组合能力，但通过 start / end 把常见布局槽位做得更顺手。
      </p>
    </div>
  </MockupBrowser.Content>
</MockupBrowser>`});m(()=>d(e,p,fe))});let M=a(`rue:component:anchor`);i(p,M),u(()=>{let e=h(k,{title:`地址栏状态`,summary:`AddressBar 可单独使用，并支持 success / warning / error 等状态语义。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-4`,children:[y(O,{bordered:!0,className:`w-full`,children:[b(O.Toolbar,{children:b(O.AddressBar,{href:`https://preview.ruejs.org/releases/2026.05.01`,status:`success`,prefix:b(`span`,{className:`badge badge-success badge-xs`,children:`200`}),suffix:b(`span`,{className:`text-xs`,children:`Published`})})}),b(O.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`发布成功，可继续分享预览链接。`})]}),y(O,{bordered:!0,className:`w-full`,children:[b(O.Toolbar,{children:b(O.AddressBar,{status:`warning`,prefix:b(`span`,{className:`badge badge-warning badge-xs`,children:`302`}),suffix:b(`span`,{className:`text-xs`,children:`Redirect`}),children:`https://staging.ruejs.org/latest`})}),b(O.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`预览地址已重定向到最新构建。`})]}),y(O,{bordered:!0,className:`w-full`,children:[b(O.Toolbar,{children:b(O.AddressBar,{status:`error`,prefix:b(`span`,{className:`badge badge-error badge-xs`,children:`500`}),suffix:b(`span`,{className:`text-xs`,children:`Retry`}),children:`https://api.ruejs.org/workspaces/demo`})}),b(O.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`当前接口不可达，请稍后重试。`})]})]})}),code:`<MockupBrowser bordered>
  <MockupBrowser.Toolbar>
    <MockupBrowser.AddressBar
      href="https://preview.ruejs.org/releases/2026.05.01"
      status="success"
      prefix={<span className="badge badge-success badge-xs">200</span>}
      suffix={<span className="text-xs">Published</span>}
    />
  </MockupBrowser.Toolbar>
  <MockupBrowser.Content className="grid h-28 place-content-center">
    发布成功，可继续分享预览链接。
  </MockupBrowser.Content>
</MockupBrowser>`});m(()=>d(e,p,M))});let N=a(`rue:component:anchor`);i(p,N),u(()=>{let e=h(k,{title:`内容容器`,summary:`Content 用来统一处理上边框、背景色和内边距，避免每个 demo 都手写一遍。`,tab:te,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(O,{bordered:!0,className:`w-full`,children:[b(O.Toolbar,{children:b(O.AddressBar,{children:`https://ruejs.org/changelog`})}),y(O.Content,{background:!0,padding:`lg`,className:`grid gap-4 md:grid-cols-2`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`May`}),b(`div`,{className:`mt-2 text-base font-semibold`,children:`Component refresh`}),b(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`Mockup Browser 新增地址栏和内容区语义 API。`})]}),y(`div`,{className:`rounded-box border border-dashed border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Next`}),b(`div`,{className:`mt-2 text-base font-semibold`,children:`Design recipes`}),b(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`用组合页展示不同布局密度和数据卡片编排方式。`})]})]})]})})}),code:`<MockupBrowser bordered className="w-full">
  <MockupBrowser.Toolbar>
    <MockupBrowser.AddressBar>https://ruejs.org/changelog</MockupBrowser.AddressBar>
  </MockupBrowser.Toolbar>
  <MockupBrowser.Content background padding="lg" className="grid gap-4 md:grid-cols-2">
    <div className="rounded-box border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.24em] opacity-60">May</div>
      <div className="mt-2 text-base font-semibold">Component refresh</div>
      <p className="mt-2 mb-0 text-sm opacity-75">Mockup Browser 新增地址栏和内容区语义 API。</p>
    </div>
    <div className="rounded-box border border-dashed border-base-300 p-4">
      <div className="text-xs uppercase tracking-[0.24em] opacity-60">Next</div>
      <div className="mt-2 text-base font-semibold">Design recipes</div>
      <p className="mt-2 mb-0 text-sm opacity-75">用组合页展示不同布局密度和数据卡片编排方式。</p>
    </div>
  </MockupBrowser.Content>
</MockupBrowser>`});m(()=>d(e,p,N))});let P=a(`rue:component:anchor`);i(p,P),u(()=>{let e=h(k,{title:`场景组合`,summary:`把快捷 props 和子组件混用，可以很快搭出文档、后台、嵌入式预览等组合场景。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(O,{bordered:!0,url:`https://studio.ruejs.org/campaigns/spring-launch`,toolbarEnd:b(`span`,{className:`badge badge-accent badge-sm`,children:`Draft`}),contentClassName:`h-72 bg-base-100`,children:y(`div`,{className:`grid h-full gap-4 p-4`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-primary/8 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Campaign`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`Spring Launch`}),b(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`在一个浏览器壳层里展示编辑后台会更接近真实产品观感。`})]}),y(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[b(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Email sequences`}),b(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Asset approvals`})]})]})}),y(O,{bordered:!0,background:!0,className:`w-full`,children:[b(O.Toolbar,{end:b(`span`,{className:`badge badge-info badge-sm`,children:`Docs`}),children:b(O.AddressBar,{prefix:b(`span`,{className:`text-xs`,children:`Search`}),children:`https://ruejs.org/components/mockup-browser`})}),b(O.Content,{padding:`md`,className:`h-72`,children:y(`div`,{className:`grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-200/35 p-4 text-sm`,children:[b(`div`,{className:`font-medium`,children:`On this page`}),y(`div`,{className:`mt-3 space-y-2 opacity-75`,children:[b(`div`,{children:`Recommended usage`}),b(`div`,{children:`Toolbar`}),b(`div`,{children:`AddressBar`}),b(`div`,{children:`Content`})]})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser API`}),b(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。`})]})]})})]})]})})}),code:`<MockupBrowser
  bordered
  url="https://studio.ruejs.org/campaigns/spring-launch"
  toolbarEnd={<span className="badge badge-accent badge-sm">Draft</span>}
  contentClassName="h-72 bg-base-100"
>
  <div className="grid h-full gap-4 p-4">
    <div className="rounded-box border border-base-300 bg-primary/8 p-4">
      <div className="text-xs uppercase tracking-[0.24em] opacity-60">Campaign</div>
      <div className="mt-2 text-lg font-semibold">Spring Launch</div>
      <p className="mt-2 mb-0 text-sm opacity-75">在一个浏览器壳层里展示编辑后台会更接近真实产品观感。</p>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-box border border-base-300 p-4 text-sm">Email sequences</div>
      <div className="rounded-box border border-base-300 p-4 text-sm">Asset approvals</div>
    </div>
  </div>
</MockupBrowser>

<MockupBrowser bordered background>
  <MockupBrowser.Toolbar end={<span className="badge badge-info badge-sm">Docs</span>}>
    <MockupBrowser.AddressBar prefix={<span className="text-xs">Search</span>}>
      https://ruejs.org/components/mockup-browser
    </MockupBrowser.AddressBar>
  </MockupBrowser.Toolbar>
  <MockupBrowser.Content padding="md" className="h-72">
    <div className="grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]">
      <div className="rounded-box border border-base-300 bg-base-200/35 p-4 text-sm">
        <div className="font-medium">On this page</div>
        <div className="mt-3 space-y-2 opacity-75">
          <div>Recommended usage</div>
          <div>Toolbar</div>
          <div>AddressBar</div>
          <div>Content</div>
        </div>
      </div>
      <div className="rounded-box border border-base-300 bg-base-100 p-4">
        <div className="text-lg font-semibold">Mockup Browser API</div>
        <p className="mt-3 mb-0 text-sm opacity-75">
          文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。
        </p>
      </div>
    </div>
  </MockupBrowser.Content>
</MockupBrowser>`});m(()=>d(e,p,P))});let F=n(`h2`);i(p,F),s(F,`id`,`mockup-browser-api`),i(F,r(`API`));let I=n(`p`);i(p,I),i(I,r(`MockupBrowser 现在支持推荐快捷模式和原始组合模式两套写法。`));let L=n(`h3`);i(p,L),i(L,r(`MockupBrowser`));let R=a(`rue:component:anchor`);i(p,R),u(()=>{let e=h(A,{rows:ne});m(()=>d(e,p,R))});let z=n(`h3`);i(p,z),i(z,r(`MockupBrowser.Toolbar`));let B=a(`rue:component:anchor`);i(p,B),u(()=>{let e=h(A,{rows:re});m(()=>d(e,p,B))});let V=n(`h3`);i(p,V),i(V,r(`MockupBrowser.AddressBar`));let H=a(`rue:component:anchor`);i(p,H),u(()=>{let e=h(A,{rows:ie});m(()=>d(e,p,H))});let pe=n(`h3`);i(p,pe),i(pe,r(`MockupBrowser.Content`));let me=a(`rue:component:anchor`);i(p,me),u(()=>{let e=h(A,{rows:ae});m(()=>d(e,p,me))});let U=n(`div`);i(p,U),t(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=n(`h3`);i(U,W),t(W,`mt-0 mb-3 text-base font-semibold`),i(W,r(`推荐写法对照`));let G=n(`div`);i(U,G),t(G,`grid gap-2 text-sm md:grid-cols-2`);let K=n(`div`);i(G,K);let he=n(`code`);i(K,he),i(he,r(`url`)),i(K,r(`适合快速生成地址栏`));let q=n(`div`);i(G,q);let ge=n(`code`);i(q,ge),i(ge,r(`contentClassName`)),i(q,r(`适合直接包裹内容区`));let J=n(`div`);i(G,J);let _e=n(`code`);i(J,_e),i(_e,r(`Toolbar + AddressBar + Content`)),i(J,r(`适合需要细粒度控制的页面`));let Y=n(`div`);i(G,Y),i(Y,r(`旧的手写`));let ve=n(`code`);i(Y,ve),i(ve,r(`Toolbar`)),i(Y,r(`结构仍然完全可用`));let ye=n(`h2`);i(p,ye),i(ye,r(`FAQ`));let be=n(`h3`);i(p,be),i(be,r(`什么时候用快捷 props，什么时候用子组件？`));let X=n(`p`);i(p,X),i(X,r(`如果只是想快速放一个带地址栏的浏览器框，优先用`));let xe=n(`code`);i(X,xe),i(xe,r(`url`)),i(X,r(`、`));let Se=n(`code`);i(X,Se),i(Se,r(`toolbarEnd`)),i(X,r(`、`));let Ce=n(`code`);i(X,Ce),i(Ce,r(`contentClassName`)),i(X,r(`这些快捷 props。需要更细的布局控制时，再切到`));let we=o(X);i(X,we),c(we,` `);let Te=n(`code`);i(X,Te),i(Te,r(`MockupBrowser.Toolbar`)),i(X,r(`、`));let Ee=n(`code`);i(X,Ee),i(Ee,r(`MockupBrowser.AddressBar`)),i(X,r(`和`));let De=o(X);i(X,De),c(De,` `);let Oe=n(`code`);i(X,Oe),i(Oe,r(`MockupBrowser.Content`)),i(X,r(`。`));let Z=n(`h3`);i(p,Z),i(Z,r(`原来的 demo 写法会失效吗？`));let Q=n(`p`);i(p,Q),i(Q,r(`不会。原来的`));let ke=n(`code`);i(Q,ke),i(ke,r(`children + MockupBrowser.Toolbar`)),i(Q,r(`结构仍然保留；当前页面里的 “browser mockup with border” 和 “browser mockup with background color” 就是旧写法的直接保留版。`));let Ae=n(`h3`);i(p,Ae),i(Ae,r(`Content 和根节点上的 contentClassName 有什么区别？`));let $=n(`p`);i(p,$);let je=n(`code`);i($,je),i(je,r(`contentClassName`));let Me=o($);i($,Me),c(Me,` `),i($,r(`适合推荐写法，直接让根组件帮你包一层内容区；如果你还需要分别控制`));let Ne=n(`code`);i($,Ne),i(Ne,r(`padding`)),i($,r(`、`));let Pe=n(`code`);i($,Pe),i(Pe,r(`background`)),i($,r(`或自己拆更多节点，就更适合直接使用`));let Fe=o($);i($,Fe),c(Fe,` `);let Ie=n(`code`);return i($,Ie),i(Ie,r(`MockupBrowser.Content`)),i($,r(`。`)),l})}),l,p),l})};export{j as default};