import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,d as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as v,t as y}from"./src-DP0sEeZS.js";import{n as b}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as x}from"./Code-C8wy38VS.js";import{t as S}from"./tabs-B-QPmbH8.js";var C=(...e)=>e.filter(Boolean).join(` `),w=(e=`default`)=>{switch(e){case`success`:return`border-success/30 bg-success/10 text-success`;case`warning`:return`border-warning/30 bg-warning/10 text-warning`;case`error`:return`border-error/30 bg-error/10 text-error`;default:return`border-base-300 bg-base-200/60`}},T=(e=`none`)=>{switch(e){case`sm`:return`p-3`;case`md`:return`p-4`;case`lg`:return`p-6`;default:return``}},E=({href:e,prefix:t,suffix:n,interactive:r,status:i=`default`,className:a,children:o,...s})=>{let c=o??e,u=C(`input input-sm flex h-8 w-full min-w-0 items-center gap-2 text-sm`,w(i),a),d=v(l,{children:[t==null?null:y(`span`,{className:`shrink-0 opacity-55`,children:t}),y(`span`,{className:`min-w-0 flex-1 truncate`,children:c}),n==null?null:y(`span`,{className:`shrink-0 opacity-55`,children:n})]});return(r||e)&&typeof e==`string`?y(`a`,{...s,href:e,className:u,children:d}):y(`div`,{...s,className:u,children:d})},D=({bordered:e=!0,background:t,padding:n=`none`,className:r,children:i,...a})=>y(`div`,{...a,className:C(e&&`border-t border-base-300`,t&&`bg-base-100`,T(n),r),children:i}),O=({start:e,end:t,className:n,children:r,...i})=>v(`div`,{...i,className:C(`mockup-browser-toolbar gap-3`,n),children:[e==null?null:y(`div`,{className:`flex shrink-0 items-center gap-2`,children:e}),r==null?null:y(`div`,{className:`flex min-w-0 flex-1 items-center`,children:r}),t==null?null:y(`div`,{className:`flex shrink-0 items-center gap-2`,children:t})]}),k=Object.assign(({bordered:e,background:t,showToolbar:n,url:r,toolbar:i,toolbarStart:a,toolbarEnd:o,toolbarClassName:s,contentClassName:c,contentBordered:l,contentBackground:u,contentPadding:d,className:f,children:p,...m})=>{let h=i??(r==null?null:y(E,{href:typeof r==`string`?r:void 0,children:r})),g=n!==!1&&(i!=null||r!=null||a!=null||o!=null||s!=null),_=g||c!=null||l!=null||u!=null||d!=null;return v(`div`,{...m,className:C(`mockup-browser`,e&&`border border-base-300`,t&&`bg-base-100`,f),children:[g?y(O,{className:s,start:a,end:o,children:h}):null,_?y(D,{className:c,bordered:l,background:u,padding:d,children:p}):p]})},{Toolbar:O,AddressBar:E,Content:D}),A=({title:t,summary:l,tab:f,preview:h,code:g})=>m(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let C=r(b);u(b,C),d(()=>{s(C,t)});let w=i(`rue:slot:anchor`);u(y,w),d(()=>{c(l?m(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),d(()=>{s(i,l)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),d(()=>{c(p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),d(()=>{c(f.value===`preview`?h():m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{c(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),j=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`);u(s,l),o(l,`table table-zebra`);let f=e(`thead`);u(l,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(l,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,l)=>{c(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let l=e(`code`);u(s,l);let f=i(`rue:slot:anchor`);u(l,f),d(()=>{let e=n.prop;c(e,l,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),ee=[{prop:`bordered`,description:`为浏览器外框追加边框`,type:`boolean`,defaultValue:`false`},{prop:`background`,description:`为外层容器追加底色`,type:`boolean`,defaultValue:`false`},{prop:`showToolbar`,description:`控制是否渲染快捷工具栏`,type:`boolean`,defaultValue:`true`},{prop:`url`,description:`快捷生成地址栏内容；适合推荐用法`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`自定义快捷工具栏主体；通常与 toolbarStart / toolbarEnd 配合`,type:`any`,defaultValue:`-`},{prop:`toolbarStart`,description:`快捷工具栏左侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarEnd`,description:`快捷工具栏右侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarClassName`,description:`快捷工具栏附加样式`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`快捷内容区附加样式；设置后会自动包裹内容区`,type:`string`,defaultValue:`-`},{prop:`contentBordered`,description:`快捷内容区是否带上边框`,type:`boolean`,defaultValue:`true`},{prop:`contentBackground`,description:`快捷内容区是否带背景色`,type:`boolean`,defaultValue:`false`},{prop:`contentPadding`,description:`快捷内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`}],te=[{prop:`start`,description:`工具栏左侧内容`,type:`any`,defaultValue:`-`},{prop:`end`,description:`工具栏右侧内容`,type:`any`,defaultValue:`-`},{prop:`children`,description:`工具栏主体内容，通常放地址栏`,type:`any`,defaultValue:`-`},{prop:`className`,description:`工具栏附加样式`,type:`string`,defaultValue:`-`}],ne=[{prop:`href`,description:`地址链接；传入后默认渲染为 a`,type:`string`,defaultValue:`-`},{prop:`prefix`,description:`地址栏前缀内容，例如标签或图标`,type:`any`,defaultValue:`-`},{prop:`suffix`,description:`地址栏后缀内容，例如状态或动作`,type:`any`,defaultValue:`-`},{prop:`interactive`,description:`强制按可交互链接样式输出`,type:`boolean`,defaultValue:`false`},{prop:`status`,description:`地址栏状态色`,type:`'default' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`}],re=[{prop:`bordered`,description:`内容区上边框`,type:`boolean`,defaultValue:`true`},{prop:`background`,description:`内容区背景色`,type:`boolean`,defaultValue:`false`},{prop:`padding`,description:`内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`},{prop:`className`,description:`内容区附加样式`,type:`string`,defaultValue:`-`}],M=()=>{let{tabRecommended:_,tabBorder:x,tabBackground:S,tabToolbar:C,tabAddressBar:w,tabContent:T,tabRecipes:E}=g(`useSetup:0:0`,()=>h(()=>({tabRecommended:g(`ref:1:0`,()=>f(`preview`)),tabBorder:g(`ref:1:1`,()=>f(`preview`)),tabBackground:g(`ref:1:2`,()=>f(`preview`)),tabToolbar:g(`ref:1:3`,()=>f(`preview`)),tabAddressBar:g(`ref:1:4`,()=>f(`preview`)),tabContent:g(`ref:1:5`,()=>f(`preview`)),tabRecipes:g(`ref:1:6`,()=>f(`preview`))})));return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),c(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Mockup Browser 浏览器外框`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`MockupBrowser 保留 Rue 当前的浏览器外框视觉，同时补上推荐写法所需的地址栏、内容区和快捷工具栏 API。 原始 children 组合方式依然可用，适合需要完全自定义结构的场景。`));let b=e(`div`);u(m,b),o(b,`text-sm flex flex-wrap gap-4`);let D=e(`a`);u(b,D),t(D,`href`,`https://daisyui.com/components/mockup-browser/`),t(D,`target`,`_blank`),u(D,n(`查看 Browser Mockup 静态样式`));let O=e(`h2`);u(m,O),u(O,n(`何时使用`));let M=e(`ul`);u(m,M);let ie=e(`li`);u(M,ie),u(ie,n(`需要展示网页、管理台、嵌入式预览或静态产品截图，并且希望外层有统一的浏览器语义。`));let ae=e(`li`);u(M,ae),u(ae,n(`希望快速落一个带地址栏的浏览器框，用少量 props 搭出完整演示。`));let oe=e(`li`);u(M,oe),u(oe,n(`需要保留对工具栏和内容区的完全控制，继续使用原始组合模式。`));let se=i(`rue:component:anchor`);u(m,se),d(()=>{c(p(A,{title:`推荐用法`,summary:`直接通过 url、toolbarEnd、contentClassName 等快捷 props 组出一个完整浏览器预览。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(k,{bordered:!0,background:!0,url:`https://app.ruejs.org/workspaces/demo`,toolbarEnd:v(l,{children:[y(`span`,{className:`badge badge-success badge-sm`,children:`LIVE`}),y(`span`,{className:`badge badge-ghost badge-sm`,children:`v0.15`})]}),contentClassName:`h-[22rem] bg-base-100`,children:v(`div`,{className:`grid h-full md:grid-cols-[15rem_minmax(0,1fr)]`,children:[v(`aside`,{className:`border-r border-base-300 bg-base-200/35 p-4`,children:[y(`div`,{className:`mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Workspace`}),v(`div`,{className:`space-y-2 text-sm`,children:[y(`div`,{className:`rounded-box bg-primary/10 px-3 py-2 font-medium text-primary`,children:`Overview`}),y(`div`,{className:`rounded-box px-3 py-2`,children:`Releases`}),y(`div`,{className:`rounded-box px-3 py-2`,children:`Assets`}),y(`div`,{className:`rounded-box px-3 py-2`,children:`Team`})]})]}),v(`main`,{className:`grid gap-4 p-4`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[v(`div`,{className:`flex items-center justify-between gap-3`,children:[v(`div`,{children:[y(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Current sprint`}),y(`div`,{className:`mt-1 text-lg font-semibold`,children:`Mockup Browser refresh`})]}),y(`div`,{className:`badge badge-primary badge-outline`,children:`In review`})]}),y(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`用增强后的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。`})]}),v(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Deploys`}),y(`div`,{className:`mt-2 text-2xl font-semibold`,children:`18`})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Latency`}),y(`div`,{className:`mt-2 text-2xl font-semibold`,children:`124ms`})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Errors`}),y(`div`,{className:`mt-2 text-2xl font-semibold`,children:`0.02%`})]})]})]})]})})})}),code:`<MockupBrowser
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
</MockupBrowser>`}),m,se)});let ce=i(`rue:component:anchor`);u(m,ce),d(()=>{c(p(A,{title:`browser mockup with border`,summary:`保留原有 demo，不改变旧的 children + Toolbar 组织方式。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(k,{className:`w-full border border-base-300`,"data-testid":`mockup-browser-border`,children:[y(k.Toolbar,{children:y(`div`,{className:`input`,children:`https://daisyui.com`})}),y(`div`,{className:`grid h-80 place-content-center border-t border-base-300`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center border-t border-base-300">Hello!</div>
</MockupBrowser>`}),m,ce)});let le=i(`rue:component:anchor`);u(m,le),d(()=>{c(p(A,{title:`browser mockup with background color`,summary:`保留原有背景色 demo，继续支持最原始的手写结构。`,tab:S,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(k,{className:`w-full border border-base-300 bg-base-100`,children:[y(k.Toolbar,{children:y(`div`,{className:`input`,children:`https://daisyui.com`})}),y(`div`,{className:`grid h-80 place-content-center`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300 bg-base-100">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center">Hello!</div>
</MockupBrowser>`}),m,le)});let ue=i(`rue:component:anchor`);u(m,ue),d(()=>{c(p(A,{title:`自定义工具栏`,summary:`Toolbar 的 start / end 插槽适合放站点标签、环境状态或次要动作。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(k,{bordered:!0,background:!0,className:`w-full`,children:[y(k.Toolbar,{start:y(`span`,{className:`badge badge-neutral badge-sm`,children:`Docs`}),end:v(l,{children:[y(`span`,{className:`badge badge-ghost badge-sm`,children:`Preview`}),y(`span`,{className:`badge badge-primary badge-sm`,children:`Share`})]}),children:y(k.AddressBar,{href:`https://ruejs.org/docs/components/mockup-browser`,prefix:y(`span`,{className:`badge badge-ghost badge-xs`,children:`GET`}),suffix:y(`span`,{className:`text-xs`,children:`public`}),children:`https://ruejs.org/docs/components/mockup-browser`})}),v(k.Content,{background:!0,padding:`md`,className:`grid gap-4 md:grid-cols-[18rem_minmax(0,1fr)]`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Outline`}),v(`div`,{className:`space-y-2 text-sm`,children:[y(`div`,{className:`font-medium text-primary`,children:`Introduction`}),y(`div`,{children:`Recommended usage`}),y(`div`,{children:`AddressBar`}),y(`div`,{children:`Content`})]})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser`}),y(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`工具栏仍然保留原始组合能力，但通过 start / end 把常见布局槽位做得更顺手。`})]})]})]})})}),code:`<MockupBrowser bordered background className="w-full">
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
</MockupBrowser>`}),m,ue)});let de=i(`rue:component:anchor`);u(m,de),d(()=>{c(p(A,{title:`地址栏状态`,summary:`AddressBar 可单独使用，并支持 success / warning / error 等状态语义。`,tab:w,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body grid gap-4`,children:[v(k,{bordered:!0,className:`w-full`,children:[y(k.Toolbar,{children:y(k.AddressBar,{href:`https://preview.ruejs.org/releases/2026.05.01`,status:`success`,prefix:y(`span`,{className:`badge badge-success badge-xs`,children:`200`}),suffix:y(`span`,{className:`text-xs`,children:`Published`})})}),y(k.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`发布成功，可继续分享预览链接。`})]}),v(k,{bordered:!0,className:`w-full`,children:[y(k.Toolbar,{children:y(k.AddressBar,{status:`warning`,prefix:y(`span`,{className:`badge badge-warning badge-xs`,children:`302`}),suffix:y(`span`,{className:`text-xs`,children:`Redirect`}),children:`https://staging.ruejs.org/latest`})}),y(k.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`预览地址已重定向到最新构建。`})]}),v(k,{bordered:!0,className:`w-full`,children:[y(k.Toolbar,{children:y(k.AddressBar,{status:`error`,prefix:y(`span`,{className:`badge badge-error badge-xs`,children:`500`}),suffix:y(`span`,{className:`text-xs`,children:`Retry`}),children:`https://api.ruejs.org/workspaces/demo`})}),y(k.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`当前接口不可达，请稍后重试。`})]})]})}),code:`<MockupBrowser bordered>
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
</MockupBrowser>`}),m,de)});let fe=i(`rue:component:anchor`);u(m,fe),d(()=>{c(p(A,{title:`内容容器`,summary:`Content 用来统一处理上边框、背景色和内边距，避免每个 demo 都手写一遍。`,tab:T,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(k,{bordered:!0,className:`w-full`,children:[y(k.Toolbar,{children:y(k.AddressBar,{children:`https://ruejs.org/changelog`})}),v(k.Content,{background:!0,padding:`lg`,className:`grid gap-4 md:grid-cols-2`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`May`}),y(`div`,{className:`mt-2 text-base font-semibold`,children:`Component refresh`}),y(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`Mockup Browser 新增地址栏和内容区语义 API。`})]}),v(`div`,{className:`rounded-box border border-dashed border-base-300 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Next`}),y(`div`,{className:`mt-2 text-base font-semibold`,children:`Design recipes`}),y(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`用组合页展示不同布局密度和数据卡片编排方式。`})]})]})]})})}),code:`<MockupBrowser bordered className="w-full">
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
</MockupBrowser>`}),m,fe)});let N=i(`rue:component:anchor`);u(m,N),d(()=>{c(p(A,{title:`场景组合`,summary:`把快捷 props 和子组件混用，可以很快搭出文档、后台、嵌入式预览等组合场景。`,tab:E,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[y(k,{bordered:!0,url:`https://studio.ruejs.org/campaigns/spring-launch`,toolbarEnd:y(`span`,{className:`badge badge-accent badge-sm`,children:`Draft`}),contentClassName:`h-72 bg-base-100`,children:v(`div`,{className:`grid h-full gap-4 p-4`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-primary/8 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Campaign`}),y(`div`,{className:`mt-2 text-lg font-semibold`,children:`Spring Launch`}),y(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`在一个浏览器壳层里展示编辑后台会更接近真实产品观感。`})]}),v(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[y(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Email sequences`}),y(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Asset approvals`})]})]})}),v(k,{bordered:!0,background:!0,className:`w-full`,children:[y(k.Toolbar,{end:y(`span`,{className:`badge badge-info badge-sm`,children:`Docs`}),children:y(k.AddressBar,{prefix:y(`span`,{className:`text-xs`,children:`Search`}),children:`https://ruejs.org/components/mockup-browser`})}),y(k.Content,{padding:`md`,className:`h-72`,children:v(`div`,{className:`grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-200/35 p-4 text-sm`,children:[y(`div`,{className:`font-medium`,children:`On this page`}),v(`div`,{className:`mt-3 space-y-2 opacity-75`,children:[y(`div`,{children:`Recommended usage`}),y(`div`,{children:`Toolbar`}),y(`div`,{children:`AddressBar`}),y(`div`,{children:`Content`})]})]}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser API`}),y(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。`})]})]})})]})]})})}),code:`<MockupBrowser
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
</MockupBrowser>`}),m,N)});let P=e(`h2`);u(m,P),t(P,`id`,`mockup-browser-api`),u(P,n(`API`));let F=e(`p`);u(m,F),u(F,n(`MockupBrowser 现在支持推荐快捷模式和原始组合模式两套写法。`));let I=e(`h3`);u(m,I),u(I,n(`MockupBrowser`));let L=i(`rue:component:anchor`);u(m,L),d(()=>{c(p(j,{rows:ee}),m,L)});let R=e(`h3`);u(m,R),u(R,n(`MockupBrowser.Toolbar`));let z=i(`rue:component:anchor`);u(m,z),d(()=>{c(p(j,{rows:te}),m,z)});let B=e(`h3`);u(m,B),u(B,n(`MockupBrowser.AddressBar`));let V=i(`rue:component:anchor`);u(m,V),d(()=>{c(p(j,{rows:ne}),m,V)});let H=e(`h3`);u(m,H),u(H,n(`MockupBrowser.Content`));let pe=i(`rue:component:anchor`);u(m,pe),d(()=>{c(p(j,{rows:re}),m,pe)});let U=e(`div`);u(m,U),o(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`h3`);u(U,W),o(W,`mt-0 mb-3 text-base font-semibold`),u(W,n(`推荐写法对照`));let G=e(`div`);u(U,G),o(G,`grid gap-2 text-sm md:grid-cols-2`);let K=e(`div`);u(G,K);let me=e(`code`);u(K,me),u(me,n(`url`)),u(K,n(`适合快速生成地址栏`));let q=e(`div`);u(G,q);let he=e(`code`);u(q,he),u(he,n(`contentClassName`)),u(q,n(`适合直接包裹内容区`));let J=e(`div`);u(G,J);let ge=e(`code`);u(J,ge),u(ge,n(`Toolbar + AddressBar + Content`)),u(J,n(`适合需要细粒度控制的页面`));let Y=e(`div`);u(G,Y),u(Y,n(`旧的手写`));let _e=e(`code`);u(Y,_e),u(_e,n(`Toolbar`)),u(Y,n(`结构仍然完全可用`));let ve=e(`h2`);u(m,ve),u(ve,n(`FAQ`));let ye=e(`h3`);u(m,ye),u(ye,n(`什么时候用快捷 props，什么时候用子组件？`));let X=e(`p`);u(m,X),u(X,n(`如果只是想快速放一个带地址栏的浏览器框，优先用`));let be=e(`code`);u(X,be),u(be,n(`url`)),u(X,n(`、`));let xe=e(`code`);u(X,xe),u(xe,n(`toolbarEnd`)),u(X,n(`、`));let Se=e(`code`);u(X,Se),u(Se,n(`contentClassName`)),u(X,n(`这些快捷 props。需要更细的布局控制时，再切到`));let Ce=r(X);u(X,Ce),s(Ce,` `);let we=e(`code`);u(X,we),u(we,n(`MockupBrowser.Toolbar`)),u(X,n(`、`));let Te=e(`code`);u(X,Te),u(Te,n(`MockupBrowser.AddressBar`)),u(X,n(`和`));let Ee=r(X);u(X,Ee),s(Ee,` `);let De=e(`code`);u(X,De),u(De,n(`MockupBrowser.Content`)),u(X,n(`。`));let Oe=e(`h3`);u(m,Oe),u(Oe,n(`原来的 demo 写法会失效吗？`));let Z=e(`p`);u(m,Z),u(Z,n(`不会。原来的`));let Q=e(`code`);u(Z,Q),u(Q,n(`children + MockupBrowser.Toolbar`)),u(Z,n(`结构仍然保留；当前页面里的 “browser mockup with border” 和 “browser mockup with background color” 就是旧写法的直接保留版。`));let ke=e(`h3`);u(m,ke),u(ke,n(`Content 和根节点上的 contentClassName 有什么区别？`));let $=e(`p`);u(m,$);let Ae=e(`code`);u($,Ae),u(Ae,n(`contentClassName`));let je=r($);u($,je),s(je,` `),u($,n(`适合推荐写法，直接让根组件帮你包一层内容区；如果你还需要分别控制`));let Me=e(`code`);u($,Me),u(Me,n(`padding`)),u($,n(`、`));let Ne=e(`code`);u($,Ne),u(Ne,n(`background`)),u($,n(`或自己拆更多节点，就更适合直接使用`));let Pe=r($);u($,Pe),s(Pe,` `);let Fe=e(`code`);return u($,Fe),u(Fe,n(`MockupBrowser.Content`)),u($,n(`。`)),f})}),f,h),f})};export{M as default};