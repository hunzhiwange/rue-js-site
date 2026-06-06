import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,_ as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./tabs-BOxm6iIN.js";import{t as w}from"./preview-test-gate-DtKtoe96.js";var T=(...e)=>e.filter(Boolean).join(` `),ee=(e=`default`)=>{switch(e){case`success`:return`border-success/30 bg-success/10 text-success`;case`warning`:return`border-warning/30 bg-warning/10 text-warning`;case`error`:return`border-error/30 bg-error/10 text-error`;default:return`border-base-300 bg-base-200/60`}},E=(e=`none`)=>{switch(e){case`sm`:return`p-3`;case`md`:return`p-4`;case`lg`:return`p-6`;default:return``}},D=({href:e,prefix:t,suffix:n,interactive:r,status:i=`default`,className:a,children:o,...s})=>{let c=o??e,u=T(`input input-sm flex h-8 w-full min-w-0 items-center gap-2 text-sm`,ee(i),a),d=b(l,{children:[t==null?null:x(`span`,{className:`shrink-0 opacity-55`,children:t}),x(`span`,{className:`min-w-0 flex-1 truncate`,children:c}),n==null?null:x(`span`,{className:`shrink-0 opacity-55`,children:n})]});return(r||e)&&typeof e==`string`?x(`a`,{...s,href:e,className:u,children:d}):x(`div`,{...s,className:u,children:d})},O=({bordered:e=!0,background:t,padding:n=`none`,className:r,children:i,...a})=>x(`div`,{...a,className:T(e&&`border-t border-base-300`,t&&`bg-base-100`,E(n),r),children:i}),k=({start:e,end:t,className:n,children:r,...i})=>b(`div`,{...i,className:T(`mockup-browser-toolbar gap-3`,n),children:[e==null?null:x(`div`,{className:`flex shrink-0 items-center gap-2`,children:e}),r==null?null:x(`div`,{className:`flex min-w-0 flex-1 items-center`,children:r}),t==null?null:x(`div`,{className:`flex shrink-0 items-center gap-2`,children:t})]}),A=Object.assign(({bordered:e,background:t,showToolbar:n,url:r,toolbar:i,toolbarStart:a,toolbarEnd:o,toolbarClassName:s,contentClassName:c,contentBordered:l,contentBackground:u,contentPadding:d,className:f,children:p,...m})=>{let h=i??(r==null?null:x(D,{href:typeof r==`string`?r:void 0,children:r})),g=n!==!1&&(i!=null||r!=null||a!=null||o!=null||s!=null),_=g||c!=null||l!=null||u!=null||d!=null;return b(`div`,{...m,className:T(`mockup-browser`,e&&`border border-base-300`,t&&`bg-base-100`,f),children:[g?x(k,{className:s,start:a,end:o,children:h}):null,_?x(O,{className:c,bordered:l,background:u,padding:d,children:p}):p]})},{Toolbar:k,AddressBar:D,Content:O}),j=a=>f(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=s(`div`,u);t(u,d);let h=s(`h2`,d);t(d,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,r(`# `));let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=a.title;g(()=>p(e,h,_))});let v=i(`rue:slot:anchor`);t(d,v),n(()=>{let r=a.summary?f(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;g(()=>p(e,c,l))}),r}):``;g(()=>p(r,d,v))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?w(a.title,a.preview):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:a.code});g(()=>p(t,e,r))}),e});g(()=>p(e,l,x))}),l}),M=a=>f(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,u);t(u,d),e(d,`table table-zebra`);let m=s(`thead`,d);t(d,m);let h=s(`tr`,m);t(m,h);let _=s(`th`,h);t(h,_),t(_,r(`属性`));let y=s(`th`,h);t(h,y),t(y,r(`说明`));let b=s(`th`,h);t(h,b),t(b,r(`类型`));let x=s(`th`,h);t(h,x),t(x,r(`默认值`));let S=s(`tbody`,d);t(d,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{p(f(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=s(`td`,a);t(a,f);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let t=e.description;g(()=>p(t,f,m))});let h=s(`td`,a);t(a,h);let _=s(`code`,h);t(h,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;g(()=>p(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),r}),r,a)}})}),u}),te=[{prop:`bordered`,description:`为浏览器外框追加边框`,type:`boolean`,defaultValue:`false`},{prop:`background`,description:`为外层容器追加底色`,type:`boolean`,defaultValue:`false`},{prop:`showToolbar`,description:`控制是否渲染快捷工具栏`,type:`boolean`,defaultValue:`true`},{prop:`url`,description:`快捷生成地址栏内容；适合推荐用法`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`自定义快捷工具栏主体；通常与 toolbarStart / toolbarEnd 配合`,type:`any`,defaultValue:`-`},{prop:`toolbarStart`,description:`快捷工具栏左侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarEnd`,description:`快捷工具栏右侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarClassName`,description:`快捷工具栏附加样式`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`快捷内容区附加样式；设置后会自动包裹内容区`,type:`string`,defaultValue:`-`},{prop:`contentBordered`,description:`快捷内容区是否带上边框`,type:`boolean`,defaultValue:`true`},{prop:`contentBackground`,description:`快捷内容区是否带背景色`,type:`boolean`,defaultValue:`false`},{prop:`contentPadding`,description:`快捷内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`}],ne=[{prop:`start`,description:`工具栏左侧内容`,type:`any`,defaultValue:`-`},{prop:`end`,description:`工具栏右侧内容`,type:`any`,defaultValue:`-`},{prop:`children`,description:`工具栏主体内容，通常放地址栏`,type:`any`,defaultValue:`-`},{prop:`className`,description:`工具栏附加样式`,type:`string`,defaultValue:`-`}],re=[{prop:`href`,description:`地址链接；传入后默认渲染为 a`,type:`string`,defaultValue:`-`},{prop:`prefix`,description:`地址栏前缀内容，例如标签或图标`,type:`any`,defaultValue:`-`},{prop:`suffix`,description:`地址栏后缀内容，例如状态或动作`,type:`any`,defaultValue:`-`},{prop:`interactive`,description:`强制按可交互链接样式输出`,type:`boolean`,defaultValue:`false`},{prop:`status`,description:`地址栏状态色`,type:`'default' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`}],ie=[{prop:`bordered`,description:`内容区上边框`,type:`boolean`,defaultValue:`true`},{prop:`background`,description:`内容区背景色`,type:`boolean`,defaultValue:`false`},{prop:`padding`,description:`内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`},{prop:`className`,description:`内容区附加样式`,type:`string`,defaultValue:`-`}],N=()=>{let{tabRecommended:v,tabBorder:y,tabBackground:C,tabToolbar:w,tabAddressBar:T,tabContent:ee,tabRecipes:E}=_(`useSetup:0:0`,()=>h(()=>({tabRecommended:_(`ref:1:0`,()=>d(`preview`)),tabBorder:_(`ref:1:1`,()=>d(`preview`)),tabBackground:_(`ref:1:2`,()=>d(`preview`)),tabToolbar:_(`ref:1:3`,()=>d(`preview`)),tabAddressBar:_(`ref:1:4`,()=>d(`preview`)),tabContent:_(`ref:1:5`,()=>d(`preview`)),tabRecipes:_(`ref:1:6`,()=>d(`preview`))})));return f(d=>{let h=o(),_=i(`rue:component:anchor`);return t(h,_),p(m(S,{children:f(()=>{let d=o(),f=s(`div`,d);t(d,f),e(f,`max-w-none prose prose-sm md:prose-base`);let h=s(`h1`,f);t(f,h),t(h,r(`Mockup Browser 浏览器外框`));let _=s(`p`,f);t(f,_),e(_,`text-sm mt-3 mb-3`),t(_,r(`MockupBrowser 保留 Rue 当前的浏览器外框视觉，同时补上推荐写法所需的地址栏、内容区和快捷工具栏 API。 原始 children 组合方式依然可用，适合需要完全自定义结构的场景。`));let S=s(`h2`,f);t(f,S),t(S,r(`何时使用`));let D=s(`ul`,f);t(f,D);let O=s(`li`,D);t(D,O),t(O,r(`需要展示网页、管理台、嵌入式预览或静态产品截图，并且希望外层有统一的浏览器语义。`));let k=s(`li`,D);t(D,k),t(k,r(`希望快速落一个带地址栏的浏览器框，用少量 props 搭出完整演示。`));let N=s(`li`,D);t(D,N),t(N,r(`需要保留对工具栏和内容区的完全控制，继续使用原始组合模式。`));let ae=i(`rue:component:anchor`);t(f,ae),n(()=>{let e=m(j,{title:`推荐用法`,summary:`直接通过 url、toolbarEnd、contentClassName 等快捷 props 组出一个完整浏览器预览。`,tab:v,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:x(A,{bordered:!0,background:!0,url:`https://app.ruejs.org/workspaces/demo`,toolbarEnd:b(l,{children:[x(`span`,{className:`badge badge-success badge-sm`,children:`LIVE`}),x(`span`,{className:`badge badge-ghost badge-sm`,children:`v0.15`})]}),contentClassName:`h-[22rem] bg-base-100`,children:b(`div`,{className:`grid h-full md:grid-cols-[15rem_minmax(0,1fr)]`,children:[b(`aside`,{className:`border-r border-base-300 bg-base-200/35 p-4`,children:[x(`div`,{className:`mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Workspace`}),b(`div`,{className:`space-y-2 text-sm`,children:[x(`div`,{className:`rounded-box bg-primary/10 px-3 py-2 font-medium text-primary`,children:`Overview`}),x(`div`,{className:`rounded-box px-3 py-2`,children:`Releases`}),x(`div`,{className:`rounded-box px-3 py-2`,children:`Assets`}),x(`div`,{className:`rounded-box px-3 py-2`,children:`Team`})]})]}),b(`main`,{className:`grid gap-4 p-4`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`flex items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Current sprint`}),x(`div`,{className:`mt-1 text-lg font-semibold`,children:`Mockup Browser refresh`})]}),x(`div`,{className:`badge badge-primary badge-outline`,children:`In review`})]}),x(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`用增强后的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。`})]}),b(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Deploys`}),x(`div`,{className:`mt-2 text-2xl font-semibold`,children:`18`})]}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Latency`}),x(`div`,{className:`mt-2 text-2xl font-semibold`,children:`124ms`})]}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Errors`}),x(`div`,{className:`mt-2 text-2xl font-semibold`,children:`0.02%`})]})]})]})]})})})}),code:`<MockupBrowser
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
</MockupBrowser>`});g(()=>p(e,f,ae))});let oe=i(`rue:component:anchor`);t(f,oe),n(()=>{let e=m(j,{title:`browser mockup with border`,summary:`保留原有 demo，不改变旧的 children + Toolbar 组织方式。`,tab:y,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(A,{className:`w-full border border-base-300`,"data-testid":`mockup-browser-border`,children:[x(A.Toolbar,{children:x(`div`,{className:`input`,children:`https://daisyui.com`})}),x(`div`,{className:`grid h-80 place-content-center border-t border-base-300`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center border-t border-base-300">Hello!</div>
</MockupBrowser>`});g(()=>p(e,f,oe))});let se=i(`rue:component:anchor`);t(f,se),n(()=>{let e=m(j,{title:`browser mockup with background color`,summary:`保留原有背景色 demo，继续支持最原始的手写结构。`,tab:C,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(A,{className:`w-full border border-base-300 bg-base-100`,children:[x(A.Toolbar,{children:x(`div`,{className:`input`,children:`https://daisyui.com`})}),x(`div`,{className:`grid h-80 place-content-center`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300 bg-base-100">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center">Hello!</div>
</MockupBrowser>`});g(()=>p(e,f,se))});let ce=i(`rue:component:anchor`);t(f,ce),n(()=>{let e=m(j,{title:`自定义工具栏`,summary:`Toolbar 的 start / end 插槽适合放站点标签、环境状态或次要动作。`,tab:w,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(A,{bordered:!0,background:!0,className:`w-full`,children:[x(A.Toolbar,{start:x(`span`,{className:`badge badge-neutral badge-sm`,children:`Docs`}),end:b(l,{children:[x(`span`,{className:`badge badge-ghost badge-sm`,children:`Preview`}),x(`span`,{className:`badge badge-primary badge-sm`,children:`Share`})]}),children:x(A.AddressBar,{href:`https://ruejs.org/docs/components/mockup-browser`,prefix:x(`span`,{className:`badge badge-ghost badge-xs`,children:`GET`}),suffix:x(`span`,{className:`text-xs`,children:`public`}),children:`https://ruejs.org/docs/components/mockup-browser`})}),b(A.Content,{background:!0,padding:`md`,className:`grid gap-4 md:grid-cols-[18rem_minmax(0,1fr)]`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Outline`}),b(`div`,{className:`space-y-2 text-sm`,children:[x(`div`,{className:`font-medium text-primary`,children:`Introduction`}),x(`div`,{children:`Recommended usage`}),x(`div`,{children:`AddressBar`}),x(`div`,{children:`Content`})]})]}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser`}),x(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`工具栏仍然保留原始组合能力，但通过 start / end 把常见布局槽位做得更顺手。`})]})]})]})})}),code:`<MockupBrowser bordered background className="w-full">
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
</MockupBrowser>`});g(()=>p(e,f,ce))});let le=i(`rue:component:anchor`);t(f,le),n(()=>{let e=m(j,{title:`地址栏状态`,summary:`AddressBar 可单独使用，并支持 success / warning / error 等状态语义。`,tab:T,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4`,children:[b(A,{bordered:!0,className:`w-full`,children:[x(A.Toolbar,{children:x(A.AddressBar,{href:`https://preview.ruejs.org/releases/2026.05.01`,status:`success`,prefix:x(`span`,{className:`badge badge-success badge-xs`,children:`200`}),suffix:x(`span`,{className:`text-xs`,children:`Published`})})}),x(A.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`发布成功，可继续分享预览链接。`})]}),b(A,{bordered:!0,className:`w-full`,children:[x(A.Toolbar,{children:x(A.AddressBar,{status:`warning`,prefix:x(`span`,{className:`badge badge-warning badge-xs`,children:`302`}),suffix:x(`span`,{className:`text-xs`,children:`Redirect`}),children:`https://staging.ruejs.org/latest`})}),x(A.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`预览地址已重定向到最新构建。`})]}),b(A,{bordered:!0,className:`w-full`,children:[x(A.Toolbar,{children:x(A.AddressBar,{status:`error`,prefix:x(`span`,{className:`badge badge-error badge-xs`,children:`500`}),suffix:x(`span`,{className:`text-xs`,children:`Retry`}),children:`https://api.ruejs.org/workspaces/demo`})}),x(A.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`当前接口不可达，请稍后重试。`})]})]})}),code:`<MockupBrowser bordered>
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
</MockupBrowser>`});g(()=>p(e,f,le))});let ue=i(`rue:component:anchor`);t(f,ue),n(()=>{let e=m(j,{title:`内容容器`,summary:`Content 用来统一处理上边框、背景色和内边距，避免每个 demo 都手写一遍。`,tab:ee,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(A,{bordered:!0,className:`w-full`,children:[x(A.Toolbar,{children:x(A.AddressBar,{children:`https://ruejs.org/changelog`})}),b(A.Content,{background:!0,padding:`lg`,className:`grid gap-4 md:grid-cols-2`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`May`}),x(`div`,{className:`mt-2 text-base font-semibold`,children:`Component refresh`}),x(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`Mockup Browser 新增地址栏和内容区语义 API。`})]}),b(`div`,{className:`rounded-box border border-dashed border-base-300 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Next`}),x(`div`,{className:`mt-2 text-base font-semibold`,children:`Design recipes`}),x(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`用组合页展示不同布局密度和数据卡片编排方式。`})]})]})]})})}),code:`<MockupBrowser bordered className="w-full">
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
</MockupBrowser>`});g(()=>p(e,f,ue))});let de=i(`rue:component:anchor`);t(f,de),n(()=>{let e=m(j,{title:`场景组合`,summary:`把快捷 props 和子组件混用，可以很快搭出文档、后台、嵌入式预览等组合场景。`,tab:E,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[x(A,{bordered:!0,url:`https://studio.ruejs.org/campaigns/spring-launch`,toolbarEnd:x(`span`,{className:`badge badge-accent badge-sm`,children:`Draft`}),contentClassName:`h-72 bg-base-100`,children:b(`div`,{className:`grid h-full gap-4 p-4`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-primary/8 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Campaign`}),x(`div`,{className:`mt-2 text-lg font-semibold`,children:`Spring Launch`}),x(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`在一个浏览器壳层里展示编辑后台会更接近真实产品观感。`})]}),b(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[x(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Email sequences`}),x(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Asset approvals`})]})]})}),b(A,{bordered:!0,background:!0,className:`w-full`,children:[x(A.Toolbar,{end:x(`span`,{className:`badge badge-info badge-sm`,children:`Docs`}),children:x(A.AddressBar,{prefix:x(`span`,{className:`text-xs`,children:`Search`}),children:`https://ruejs.org/components/mockup-browser`})}),x(A.Content,{padding:`md`,className:`h-72`,children:b(`div`,{className:`grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]`,children:[b(`div`,{className:`rounded-box border border-base-300 bg-base-200/35 p-4 text-sm`,children:[x(`div`,{className:`font-medium`,children:`On this page`}),b(`div`,{className:`mt-3 space-y-2 opacity-75`,children:[x(`div`,{children:`Recommended usage`}),x(`div`,{children:`Toolbar`}),x(`div`,{children:`AddressBar`}),x(`div`,{children:`Content`})]})]}),b(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser API`}),x(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。`})]})]})})]})]})})}),code:`<MockupBrowser
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
</MockupBrowser>`});g(()=>p(e,f,de))});let P=s(`h2`,f);t(f,P),c(P,`id`,`mockup-browser-api`),t(P,r(`API`));let F=s(`p`,f);t(f,F),t(F,r(`MockupBrowser 现在支持推荐快捷模式和原始组合模式两套写法。`));let I=s(`h3`,f);t(f,I),t(I,r(`MockupBrowser`));let L=i(`rue:component:anchor`);t(f,L),n(()=>{let e=m(M,{rows:te});g(()=>p(e,f,L))});let R=s(`h3`,f);t(f,R),t(R,r(`MockupBrowser.Toolbar`));let z=i(`rue:component:anchor`);t(f,z),n(()=>{let e=m(M,{rows:ne});g(()=>p(e,f,z))});let B=s(`h3`,f);t(f,B),t(B,r(`MockupBrowser.AddressBar`));let V=i(`rue:component:anchor`);t(f,V),n(()=>{let e=m(M,{rows:re});g(()=>p(e,f,V))});let H=s(`h3`,f);t(f,H),t(H,r(`MockupBrowser.Content`));let fe=i(`rue:component:anchor`);t(f,fe),n(()=>{let e=m(M,{rows:ie});g(()=>p(e,f,fe))});let U=s(`div`,f);t(f,U),e(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=s(`h3`,U);t(U,W),e(W,`mt-0 mb-3 text-base font-semibold`),t(W,r(`推荐写法对照`));let G=s(`div`,U);t(U,G),e(G,`grid gap-2 text-sm md:grid-cols-2`);let K=s(`div`,G);t(G,K);let pe=s(`code`,K);t(K,pe),t(pe,r(`url`)),t(K,r(`适合快速生成地址栏`));let q=s(`div`,G);t(G,q);let me=s(`code`,q);t(q,me),t(me,r(`contentClassName`)),t(q,r(`适合直接包裹内容区`));let J=s(`div`,G);t(G,J);let he=s(`code`,J);t(J,he),t(he,r(`Toolbar + AddressBar + Content`)),t(J,r(`适合需要细粒度控制的页面`));let Y=s(`div`,G);t(G,Y),t(Y,r(`旧的手写`));let ge=s(`code`,Y);t(Y,ge),t(ge,r(`Toolbar`)),t(Y,r(`结构仍然完全可用`));let _e=s(`h2`,f);t(f,_e),t(_e,r(`FAQ`));let ve=s(`h3`,f);t(f,ve),t(ve,r(`什么时候用快捷 props，什么时候用子组件？`));let X=s(`p`,f);t(f,X),t(X,r(`如果只是想快速放一个带地址栏的浏览器框，优先用`));let ye=s(`code`,X);t(X,ye),t(ye,r(`url`)),t(X,r(`、`));let be=s(`code`,X);t(X,be),t(be,r(`toolbarEnd`)),t(X,r(`、`));let xe=s(`code`,X);t(X,xe),t(xe,r(`contentClassName`)),t(X,r(`这些快捷 props。需要更细的布局控制时，再切到`));let Se=a(X);t(X,Se),u(Se,` `);let Ce=s(`code`,X);t(X,Ce),t(Ce,r(`MockupBrowser.Toolbar`)),t(X,r(`、`));let we=s(`code`,X);t(X,we),t(we,r(`MockupBrowser.AddressBar`)),t(X,r(`和`));let Te=a(X);t(X,Te),u(Te,` `);let Ee=s(`code`,X);t(X,Ee),t(Ee,r(`MockupBrowser.Content`)),t(X,r(`。`));let De=s(`h3`,f);t(f,De),t(De,r(`原来的 demo 写法会失效吗？`));let Z=s(`p`,f);t(f,Z),t(Z,r(`不会。原来的`));let Oe=s(`code`,Z);t(Z,Oe),t(Oe,r(`children + MockupBrowser.Toolbar`)),t(Z,r(`结构仍然保留；当前页面里的 “browser mockup with border” 和 “browser mockup with background color” 就是旧写法的直接保留版。`));let Q=s(`h3`,f);t(f,Q),t(Q,r(`Content 和根节点上的 contentClassName 有什么区别？`));let $=s(`p`,f);t(f,$);let ke=s(`code`,$);t($,ke),t(ke,r(`contentClassName`));let Ae=a($);t($,Ae),u(Ae,` `),t($,r(`适合推荐写法，直接让根组件帮你包一层内容区；如果你还需要分别控制`));let je=s(`code`,$);t($,je),t(je,r(`padding`)),t($,r(`、`));let Me=s(`code`,$);t($,Me),t(Me,r(`background`)),t($,r(`或自己拆更多节点，就更适合直接使用`));let Ne=a($);t($,Ne),u(Ne,` `);let Pe=s(`code`,$);return t($,Pe),t(Pe,r(`MockupBrowser.Content`)),t($,r(`。`)),d})}),h,_),h})};export{N as default};