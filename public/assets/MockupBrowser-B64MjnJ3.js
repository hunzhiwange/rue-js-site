import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,m as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as y,i as b}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as x}from"./Code-5DOEyGxf.js";import{t as S}from"./tabs-CWmjyn0I.js";import{r as C}from"./SidebarPlaygroundDesign-CS11MI8e.js";import{t as w}from"./preview-test-gate-DdwKChL0.js";var T=(...e)=>e.filter(Boolean).join(` `),ee=(e=`default`)=>{switch(e){case`success`:return`border-success/30 bg-success/10 text-success`;case`warning`:return`border-warning/30 bg-warning/10 text-warning`;case`error`:return`border-error/30 bg-error/10 text-error`;default:return`border-base-300 bg-base-200/60`}},E=(e=`none`)=>{switch(e){case`sm`:return`p-3`;case`md`:return`p-4`;case`lg`:return`p-6`;default:return``}},D=({href:e,prefix:t,suffix:n,interactive:r,status:i=`default`,className:a,children:o,...s})=>{let c=o??e,l=T(`input input-sm flex h-8 w-full min-w-0 items-center gap-2 text-sm`,ee(i),a),d=y(u,{children:[t==null?null:b(`span`,{className:`shrink-0 opacity-55`,children:t}),b(`span`,{className:`min-w-0 flex-1 truncate`,children:c}),n==null?null:b(`span`,{className:`shrink-0 opacity-55`,children:n})]});return(r||e)&&typeof e==`string`?b(`a`,{...s,href:e,className:l,children:d}):b(`div`,{...s,className:l,children:d})},O=({bordered:e=!0,background:t,padding:n=`none`,className:r,children:i,...a})=>b(`div`,{...a,className:T(e&&`border-t border-base-300`,t&&`bg-base-100`,E(n),r),children:i}),k=({start:e,end:t,className:n,children:r,...i})=>y(`div`,{...i,className:T(`mockup-browser-toolbar gap-3`,n),children:[e==null?null:b(`div`,{className:`flex shrink-0 items-center gap-2`,children:e}),r==null?null:b(`div`,{className:`flex min-w-0 flex-1 items-center`,children:r}),t==null?null:b(`div`,{className:`flex shrink-0 items-center gap-2`,children:t})]}),A=Object.assign(({bordered:e,background:t,showToolbar:n,url:r,toolbar:i,toolbarStart:a,toolbarEnd:o,toolbarClassName:s,contentClassName:c,contentBordered:l,contentBackground:u,contentPadding:d,className:f,children:p,...m})=>{let h=i??(r==null?null:b(D,{href:typeof r==`string`?r:void 0,children:r})),g=n!==!1&&(i!=null||r!=null||a!=null||o!=null||s!=null),_=g||c!=null||l!=null||u!=null||d!=null;return y(`div`,{...m,className:T(`mockup-browser`,e&&`border border-base-300`,t&&`bg-base-100`,f),children:[g?b(k,{className:s,start:a,end:o,children:h}):null,_?b(O,{className:c,bordered:l,background:u,padding:d,children:p}):p]})},{Toolbar:k,AddressBar:D,Content:O}),j=r=>l(u=>{let d=e(`div`,u);s(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);a(d,f),s(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);a(f,p);let g=e(`h2`,p);a(p,g),s(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,c(`# `));let _=o(`rue:slot:anchor`);a(g,_),i(()=>{let e=r.title;t(()=>m(e,g,_))});let v=o(`rue:slot:anchor`);a(p,v),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>m(e,l,u))}),c}):``;t(()=>m(c,p,v))});let y=o(`rue:component:anchor`);a(d,y),i(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>m(e,d,y))});let b=o(`rue:slot:anchor`);return a(d,b),i(()=>{let e=r.tab.value===`preview`?w(r.title,r.preview):l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=h(x,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>m(n,e,s))}),e});t(()=>m(e,d,b))}),d}),M=r=>l(u=>{let d=e(`div`,u);s(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,d);a(d,p),s(p,`table table-zebra`);let h=e(`thead`,p);a(p,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,c(`属性`));let y=e(`th`,g);a(g,y),a(y,c(`说明`));let b=e(`th`,g);a(g,b),a(b,c(`类型`));let x=e(`th`,g);a(g,x),a(x,c(`默认值`));let S=e(`tbody`,p);a(p,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,u,d)=>{m(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{f(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=o(`rue:slot:anchor`);a(u,d),i(()=>{let e=r.prop;t(()=>m(e,u,d))});let p=e(`td`,c);a(c,p);let h=o(`rue:slot:anchor`);a(p,h),i(()=>{let e=r.description;t(()=>m(e,p,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>m(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>m(e,b,x))}),s}),s,c)}})}),d}),te=[{prop:`bordered`,description:`为浏览器外框追加边框`,type:`boolean`,defaultValue:`false`},{prop:`background`,description:`为外层容器追加底色`,type:`boolean`,defaultValue:`false`},{prop:`showToolbar`,description:`控制是否渲染快捷工具栏`,type:`boolean`,defaultValue:`true`},{prop:`url`,description:`快捷生成地址栏内容；适合推荐用法`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`自定义快捷工具栏主体；通常与 toolbarStart / toolbarEnd 配合`,type:`any`,defaultValue:`-`},{prop:`toolbarStart`,description:`快捷工具栏左侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarEnd`,description:`快捷工具栏右侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarClassName`,description:`快捷工具栏附加样式`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`快捷内容区附加样式；设置后会自动包裹内容区`,type:`string`,defaultValue:`-`},{prop:`contentBordered`,description:`快捷内容区是否带上边框`,type:`boolean`,defaultValue:`true`},{prop:`contentBackground`,description:`快捷内容区是否带背景色`,type:`boolean`,defaultValue:`false`},{prop:`contentPadding`,description:`快捷内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`}],ne=[{prop:`start`,description:`工具栏左侧内容`,type:`any`,defaultValue:`-`},{prop:`end`,description:`工具栏右侧内容`,type:`any`,defaultValue:`-`},{prop:`children`,description:`工具栏主体内容，通常放地址栏`,type:`any`,defaultValue:`-`},{prop:`className`,description:`工具栏附加样式`,type:`string`,defaultValue:`-`}],re=[{prop:`href`,description:`地址链接；传入后默认渲染为 a`,type:`string`,defaultValue:`-`},{prop:`prefix`,description:`地址栏前缀内容，例如标签或图标`,type:`any`,defaultValue:`-`},{prop:`suffix`,description:`地址栏后缀内容，例如状态或动作`,type:`any`,defaultValue:`-`},{prop:`interactive`,description:`强制按可交互链接样式输出`,type:`boolean`,defaultValue:`false`},{prop:`status`,description:`地址栏状态色`,type:`'default' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`}],ie=[{prop:`bordered`,description:`内容区上边框`,type:`boolean`,defaultValue:`true`},{prop:`background`,description:`内容区背景色`,type:`boolean`,defaultValue:`false`},{prop:`padding`,description:`内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`},{prop:`className`,description:`内容区附加样式`,type:`string`,defaultValue:`-`}],N=()=>{let{tabRecommended:v,tabBorder:x,tabBackground:S,tabToolbar:w,tabAddressBar:T,tabContent:ee,tabRecipes:E}=_(`useSetup:0:0`,()=>p(()=>({tabRecommended:_(`ref:1:0`,()=>r(`preview`)),tabBorder:_(`ref:1:1`,()=>r(`preview`)),tabBackground:_(`ref:1:2`,()=>r(`preview`)),tabToolbar:_(`ref:1:3`,()=>r(`preview`)),tabAddressBar:_(`ref:1:4`,()=>r(`preview`)),tabContent:_(`ref:1:5`,()=>r(`preview`)),tabRecipes:_(`ref:1:6`,()=>r(`preview`))})));return l(r=>{let p=n(),_=o(`rue:component:anchor`);return a(p,_),m(h(C,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,l);a(l,p),a(p,c(`Mockup Browser 浏览器外框`));let _=e(`p`,l);a(l,_),s(_,`text-sm mt-3 mb-3`),a(_,c(`MockupBrowser 保留 Rue 当前的浏览器外框视觉，同时补上推荐写法所需的地址栏、内容区和快捷工具栏 API。 原始 children 组合方式依然可用，适合需要完全自定义结构的场景。`));let C=e(`h2`,l);a(l,C),a(C,c(`何时使用`));let D=e(`ul`,l);a(l,D);let O=e(`li`,D);a(D,O),a(O,c(`需要展示网页、管理台、嵌入式预览或静态产品截图，并且希望外层有统一的浏览器语义。`));let k=e(`li`,D);a(D,k),a(k,c(`希望快速落一个带地址栏的浏览器框，用少量 props 搭出完整演示。`));let N=e(`li`,D);a(D,N),a(N,c(`需要保留对工具栏和内容区的完全控制，继续使用原始组合模式。`));let ae=o(`rue:component:anchor`);a(l,ae),i(()=>{let e=h(j,{title:`推荐用法`,summary:`直接通过 url、toolbarEnd、contentClassName 等快捷 props 组出一个完整浏览器预览。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(A,{bordered:!0,background:!0,url:`https://app.ruejs.org/workspaces/demo`,toolbarEnd:y(u,{children:[b(`span`,{className:`badge badge-success badge-sm`,children:`LIVE`}),b(`span`,{className:`badge badge-ghost badge-sm`,children:`v0.15`})]}),contentClassName:`h-[22rem] bg-base-100`,children:y(`div`,{className:`grid h-full md:grid-cols-[15rem_minmax(0,1fr)]`,children:[y(`aside`,{className:`border-r border-base-300 bg-base-200/35 p-4`,children:[b(`div`,{className:`mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Workspace`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`rounded-box bg-primary/10 px-3 py-2 font-medium text-primary`,children:`Overview`}),b(`div`,{className:`rounded-box px-3 py-2`,children:`Releases`}),b(`div`,{className:`rounded-box px-3 py-2`,children:`Assets`}),b(`div`,{className:`rounded-box px-3 py-2`,children:`Team`})]})]}),y(`main`,{className:`grid gap-4 p-4`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`flex items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Current sprint`}),b(`div`,{className:`mt-1 text-lg font-semibold`,children:`Mockup Browser refresh`})]}),b(`div`,{className:`badge badge-primary badge-outline`,children:`In review`})]}),b(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`用增强后的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。`})]}),y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Deploys`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`18`})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Latency`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`124ms`})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Errors`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`0.02%`})]})]})]})]})})})}),code:`<MockupBrowser
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
</MockupBrowser>`});t(()=>m(e,l,ae))});let oe=o(`rue:component:anchor`);a(l,oe),i(()=>{let e=h(j,{title:`browser mockup with border`,summary:`保留原有 demo，不改变旧的 children + Toolbar 组织方式。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(A,{className:`w-full border border-base-300`,"data-testid":`mockup-browser-border`,children:[b(A.Toolbar,{children:b(`div`,{className:`input`,children:`https://daisyui.com`})}),b(`div`,{className:`grid h-80 place-content-center border-t border-base-300`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center border-t border-base-300">Hello!</div>
</MockupBrowser>`});t(()=>m(e,l,oe))});let se=o(`rue:component:anchor`);a(l,se),i(()=>{let e=h(j,{title:`browser mockup with background color`,summary:`保留原有背景色 demo，继续支持最原始的手写结构。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(A,{className:`w-full border border-base-300 bg-base-100`,children:[b(A.Toolbar,{children:b(`div`,{className:`input`,children:`https://daisyui.com`})}),b(`div`,{className:`grid h-80 place-content-center`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300 bg-base-100">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center">Hello!</div>
</MockupBrowser>`});t(()=>m(e,l,se))});let ce=o(`rue:component:anchor`);a(l,ce),i(()=>{let e=h(j,{title:`自定义工具栏`,summary:`Toolbar 的 start / end 插槽适合放站点标签、环境状态或次要动作。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(A,{bordered:!0,background:!0,className:`w-full`,children:[b(A.Toolbar,{start:b(`span`,{className:`badge badge-neutral badge-sm`,children:`Docs`}),end:y(u,{children:[b(`span`,{className:`badge badge-ghost badge-sm`,children:`Preview`}),b(`span`,{className:`badge badge-primary badge-sm`,children:`Share`})]}),children:b(A.AddressBar,{href:`https://ruejs.org/docs/components/mockup-browser`,prefix:b(`span`,{className:`badge badge-ghost badge-xs`,children:`GET`}),suffix:b(`span`,{className:`text-xs`,children:`public`}),children:`https://ruejs.org/docs/components/mockup-browser`})}),y(A.Content,{background:!0,padding:`md`,className:`grid gap-4 md:grid-cols-[18rem_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Outline`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`font-medium text-primary`,children:`Introduction`}),b(`div`,{children:`Recommended usage`}),b(`div`,{children:`AddressBar`}),b(`div`,{children:`Content`})]})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser`}),b(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`工具栏仍然保留原始组合能力，但通过 start / end 把常见布局槽位做得更顺手。`})]})]})]})})}),code:`<MockupBrowser bordered background className="w-full">
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
</MockupBrowser>`});t(()=>m(e,l,ce))});let le=o(`rue:component:anchor`);a(l,le),i(()=>{let e=h(j,{title:`地址栏状态`,summary:`AddressBar 可单独使用，并支持 success / warning / error 等状态语义。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-4`,children:[y(A,{bordered:!0,className:`w-full`,children:[b(A.Toolbar,{children:b(A.AddressBar,{href:`https://preview.ruejs.org/releases/2026.05.01`,status:`success`,prefix:b(`span`,{className:`badge badge-success badge-xs`,children:`200`}),suffix:b(`span`,{className:`text-xs`,children:`Published`})})}),b(A.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`发布成功，可继续分享预览链接。`})]}),y(A,{bordered:!0,className:`w-full`,children:[b(A.Toolbar,{children:b(A.AddressBar,{status:`warning`,prefix:b(`span`,{className:`badge badge-warning badge-xs`,children:`302`}),suffix:b(`span`,{className:`text-xs`,children:`Redirect`}),children:`https://staging.ruejs.org/latest`})}),b(A.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`预览地址已重定向到最新构建。`})]}),y(A,{bordered:!0,className:`w-full`,children:[b(A.Toolbar,{children:b(A.AddressBar,{status:`error`,prefix:b(`span`,{className:`badge badge-error badge-xs`,children:`500`}),suffix:b(`span`,{className:`text-xs`,children:`Retry`}),children:`https://api.ruejs.org/workspaces/demo`})}),b(A.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`当前接口不可达，请稍后重试。`})]})]})}),code:`<MockupBrowser bordered>
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
</MockupBrowser>`});t(()=>m(e,l,le))});let ue=o(`rue:component:anchor`);a(l,ue),i(()=>{let e=h(j,{title:`内容容器`,summary:`Content 用来统一处理上边框、背景色和内边距，避免每个 demo 都手写一遍。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(A,{bordered:!0,className:`w-full`,children:[b(A.Toolbar,{children:b(A.AddressBar,{children:`https://ruejs.org/changelog`})}),y(A.Content,{background:!0,padding:`lg`,className:`grid gap-4 md:grid-cols-2`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`May`}),b(`div`,{className:`mt-2 text-base font-semibold`,children:`Component refresh`}),b(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`Mockup Browser 新增地址栏和内容区语义 API。`})]}),y(`div`,{className:`rounded-box border border-dashed border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Next`}),b(`div`,{className:`mt-2 text-base font-semibold`,children:`Design recipes`}),b(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`用组合页展示不同布局密度和数据卡片编排方式。`})]})]})]})})}),code:`<MockupBrowser bordered className="w-full">
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
</MockupBrowser>`});t(()=>m(e,l,ue))});let de=o(`rue:component:anchor`);a(l,de),i(()=>{let e=h(j,{title:`场景组合`,summary:`把快捷 props 和子组件混用，可以很快搭出文档、后台、嵌入式预览等组合场景。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(A,{bordered:!0,url:`https://studio.ruejs.org/campaigns/spring-launch`,toolbarEnd:b(`span`,{className:`badge badge-accent badge-sm`,children:`Draft`}),contentClassName:`h-72 bg-base-100`,children:y(`div`,{className:`grid h-full gap-4 p-4`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-primary/8 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Campaign`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`Spring Launch`}),b(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`在一个浏览器壳层里展示编辑后台会更接近真实产品观感。`})]}),y(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[b(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Email sequences`}),b(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Asset approvals`})]})]})}),y(A,{bordered:!0,background:!0,className:`w-full`,children:[b(A.Toolbar,{end:b(`span`,{className:`badge badge-info badge-sm`,children:`Docs`}),children:b(A.AddressBar,{prefix:b(`span`,{className:`text-xs`,children:`Search`}),children:`https://ruejs.org/components/mockup-browser`})}),b(A.Content,{padding:`md`,className:`h-72`,children:y(`div`,{className:`grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-200/35 p-4 text-sm`,children:[b(`div`,{className:`font-medium`,children:`On this page`}),y(`div`,{className:`mt-3 space-y-2 opacity-75`,children:[b(`div`,{children:`Recommended usage`}),b(`div`,{children:`Toolbar`}),b(`div`,{children:`AddressBar`}),b(`div`,{children:`Content`})]})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser API`}),b(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。`})]})]})})]})]})})}),code:`<MockupBrowser
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
</MockupBrowser>`});t(()=>m(e,l,de))});let P=e(`h2`,l);a(l,P),f(P,`id`,`mockup-browser-api`),a(P,c(`API`));let F=e(`p`,l);a(l,F),a(F,c(`MockupBrowser 现在支持推荐快捷模式和原始组合模式两套写法。`));let I=e(`h3`,l);a(l,I),a(I,c(`MockupBrowser`));let L=o(`rue:component:anchor`);a(l,L),i(()=>{let e=h(M,{rows:te});t(()=>m(e,l,L))});let R=e(`h3`,l);a(l,R),a(R,c(`MockupBrowser.Toolbar`));let z=o(`rue:component:anchor`);a(l,z),i(()=>{let e=h(M,{rows:ne});t(()=>m(e,l,z))});let B=e(`h3`,l);a(l,B),a(B,c(`MockupBrowser.AddressBar`));let V=o(`rue:component:anchor`);a(l,V),i(()=>{let e=h(M,{rows:re});t(()=>m(e,l,V))});let H=e(`h3`,l);a(l,H),a(H,c(`MockupBrowser.Content`));let fe=o(`rue:component:anchor`);a(l,fe),i(()=>{let e=h(M,{rows:ie});t(()=>m(e,l,fe))});let U=e(`div`,l);a(l,U),s(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=e(`h3`,U);a(U,W),s(W,`mt-0 mb-3 text-base font-semibold`),a(W,c(`推荐写法对照`));let G=e(`div`,U);a(U,G),s(G,`grid gap-2 text-sm md:grid-cols-2`);let K=e(`div`,G);a(G,K);let pe=e(`code`,K);a(K,pe),a(pe,c(`url`)),a(K,c(`适合快速生成地址栏`));let q=e(`div`,G);a(G,q);let me=e(`code`,q);a(q,me),a(me,c(`contentClassName`)),a(q,c(`适合直接包裹内容区`));let J=e(`div`,G);a(G,J);let he=e(`code`,J);a(J,he),a(he,c(`Toolbar + AddressBar + Content`)),a(J,c(`适合需要细粒度控制的页面`));let Y=e(`div`,G);a(G,Y),a(Y,c(`旧的手写`));let ge=e(`code`,Y);a(Y,ge),a(ge,c(`Toolbar`)),a(Y,c(`结构仍然完全可用`));let _e=e(`h2`,l);a(l,_e),a(_e,c(`FAQ`));let ve=e(`h3`,l);a(l,ve),a(ve,c(`什么时候用快捷 props，什么时候用子组件？`));let X=e(`p`,l);a(l,X),a(X,c(`如果只是想快速放一个带地址栏的浏览器框，优先用`));let ye=e(`code`,X);a(X,ye),a(ye,c(`url`)),a(X,c(`、`));let be=e(`code`,X);a(X,be),a(be,c(`toolbarEnd`)),a(X,c(`、`));let xe=e(`code`,X);a(X,xe),a(xe,c(`contentClassName`)),a(X,c(`这些快捷 props。需要更细的布局控制时，再切到`));let Se=g(X);a(X,Se),d(Se,` `);let Ce=e(`code`,X);a(X,Ce),a(Ce,c(`MockupBrowser.Toolbar`)),a(X,c(`、`));let we=e(`code`,X);a(X,we),a(we,c(`MockupBrowser.AddressBar`)),a(X,c(`和`));let Te=g(X);a(X,Te),d(Te,` `);let Ee=e(`code`,X);a(X,Ee),a(Ee,c(`MockupBrowser.Content`)),a(X,c(`。`));let De=e(`h3`,l);a(l,De),a(De,c(`原来的 demo 写法会失效吗？`));let Z=e(`p`,l);a(l,Z),a(Z,c(`不会。原来的`));let Oe=e(`code`,Z);a(Z,Oe),a(Oe,c(`children + MockupBrowser.Toolbar`)),a(Z,c(`结构仍然保留；当前页面里的 “browser mockup with border” 和 “browser mockup with background color” 就是旧写法的直接保留版。`));let Q=e(`h3`,l);a(l,Q),a(Q,c(`Content 和根节点上的 contentClassName 有什么区别？`));let $=e(`p`,l);a(l,$);let ke=e(`code`,$);a($,ke),a(ke,c(`contentClassName`));let Ae=g($);a($,Ae),d(Ae,` `),a($,c(`适合推荐写法，直接让根组件帮你包一层内容区；如果你还需要分别控制`));let je=e(`code`,$);a($,je),a(je,c(`padding`)),a($,c(`、`));let Me=e(`code`,$);a($,Me),a(Me,c(`background`)),a($,c(`或自己拆更多节点，就更适合直接使用`));let Ne=g($);a($,Ne),d(Ne,` `);let Pe=e(`code`,$);return a($,Pe),a(Pe,c(`MockupBrowser.Content`)),a($,c(`。`)),r})}),p,_),p})};export{N as default};