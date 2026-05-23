import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,xt as h,y as g}from"./vapor-runtime-EUvELKQT.js";import{a as _,n as v}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as y,t as b}from"./src-BI4ToZNE.js";import{n as x}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as S}from"./Code-BdVklNCb.js";import{t as C}from"./tabs-Brdd3EMz.js";var w=(...e)=>e.filter(Boolean).join(` `),T=(e=`default`)=>{switch(e){case`success`:return`border-success/30 bg-success/10 text-success`;case`warning`:return`border-warning/30 bg-warning/10 text-warning`;case`error`:return`border-error/30 bg-error/10 text-error`;default:return`border-base-300 bg-base-200/60`}},ee=(e=`none`)=>{switch(e){case`sm`:return`p-3`;case`md`:return`p-4`;case`lg`:return`p-6`;default:return``}},E=({href:e,prefix:t,suffix:n,interactive:r,status:i=`default`,className:a,children:o,...s})=>{let c=o??e,l=w(`input input-sm flex h-8 w-full min-w-0 items-center gap-2 text-sm`,T(i),a),u=y(g,{children:[t==null?null:b(`span`,{className:`shrink-0 opacity-55`,children:t}),b(`span`,{className:`min-w-0 flex-1 truncate`,children:c}),n==null?null:b(`span`,{className:`shrink-0 opacity-55`,children:n})]});return(r||e)&&typeof e==`string`?b(`a`,{...s,href:e,className:l,children:u}):b(`div`,{...s,className:l,children:u})},D=({bordered:e=!0,background:t,padding:n=`none`,className:r,children:i,...a})=>b(`div`,{...a,className:w(e&&`border-t border-base-300`,t&&`bg-base-100`,ee(n),r),children:i}),O=({start:e,end:t,className:n,children:r,...i})=>y(`div`,{...i,className:w(`mockup-browser-toolbar gap-3`,n),children:[e==null?null:b(`div`,{className:`flex shrink-0 items-center gap-2`,children:e}),r==null?null:b(`div`,{className:`flex min-w-0 flex-1 items-center`,children:r}),t==null?null:b(`div`,{className:`flex shrink-0 items-center gap-2`,children:t})]}),k=Object.assign(({bordered:e,background:t,showToolbar:n,url:r,toolbar:i,toolbarStart:a,toolbarEnd:o,toolbarClassName:s,contentClassName:c,contentBordered:l,contentBackground:u,contentPadding:d,className:f,children:p,...m})=>{let h=i??(r==null?null:b(E,{href:typeof r==`string`?r:void 0,children:r})),g=n!==!1&&(i!=null||r!=null||a!=null||o!=null||s!=null),_=g||c!=null||l!=null||u!=null||d!=null;return y(`div`,{...m,className:w(`mockup-browser`,e&&`border border-base-300`,t&&`bg-base-100`,f),children:[g?b(O,{className:s,start:a,end:o,children:h}):null,_?b(D,{className:c,bordered:l,background:u,padding:d,children:p}):p]})},{Toolbar:O,AddressBar:E,Content:D}),A=e=>c(t=>{let i=a(`div`,t);m(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=a(`div`,i);r(i,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let f=a(`div`,s);r(s,f);let g=a(`h2`,f);r(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;h(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(f,v),l(()=>{let t=e.summary?c(()=>{let t=n(),i=a(`p`,t);r(t,i),m(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(i,s),l(()=>{let t=e.summary;h(()=>u(t,i,s))}),t}):``;h(()=>u(t,f,v))});let y=o(`rue:component:anchor`);r(i,y),l(()=>{let t=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>u(t,i,y))});let b=o(`rue:slot:anchor`);return r(i,b),l(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=p(S,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>u(n,t,i))}),t});h(()=>u(t,i,b))}),i}),j=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let g=a(`tr`,p);r(p,g);let _=a(`th`,g);r(g,_),r(_,d(`属性`));let y=a(`th`,g);r(g,y),r(y,d(`说明`));let b=a(`th`,g);r(g,b),r(b,d(`类型`));let x=a(`th`,g);r(g,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;h(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;h(()=>u(e,p,m))});let g=a(`td`,s);r(s,g);let _=a(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;h(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;h(()=>u(e,b,x))}),i}),i,s)}})}),s}),te=[{prop:`bordered`,description:`为浏览器外框追加边框`,type:`boolean`,defaultValue:`false`},{prop:`background`,description:`为外层容器追加底色`,type:`boolean`,defaultValue:`false`},{prop:`showToolbar`,description:`控制是否渲染快捷工具栏`,type:`boolean`,defaultValue:`true`},{prop:`url`,description:`快捷生成地址栏内容；适合推荐用法`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`自定义快捷工具栏主体；通常与 toolbarStart / toolbarEnd 配合`,type:`any`,defaultValue:`-`},{prop:`toolbarStart`,description:`快捷工具栏左侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarEnd`,description:`快捷工具栏右侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarClassName`,description:`快捷工具栏附加样式`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`快捷内容区附加样式；设置后会自动包裹内容区`,type:`string`,defaultValue:`-`},{prop:`contentBordered`,description:`快捷内容区是否带上边框`,type:`boolean`,defaultValue:`true`},{prop:`contentBackground`,description:`快捷内容区是否带背景色`,type:`boolean`,defaultValue:`false`},{prop:`contentPadding`,description:`快捷内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`}],ne=[{prop:`start`,description:`工具栏左侧内容`,type:`any`,defaultValue:`-`},{prop:`end`,description:`工具栏右侧内容`,type:`any`,defaultValue:`-`},{prop:`children`,description:`工具栏主体内容，通常放地址栏`,type:`any`,defaultValue:`-`},{prop:`className`,description:`工具栏附加样式`,type:`string`,defaultValue:`-`}],re=[{prop:`href`,description:`地址链接；传入后默认渲染为 a`,type:`string`,defaultValue:`-`},{prop:`prefix`,description:`地址栏前缀内容，例如标签或图标`,type:`any`,defaultValue:`-`},{prop:`suffix`,description:`地址栏后缀内容，例如状态或动作`,type:`any`,defaultValue:`-`},{prop:`interactive`,description:`强制按可交互链接样式输出`,type:`boolean`,defaultValue:`false`},{prop:`status`,description:`地址栏状态色`,type:`'default' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`}],ie=[{prop:`bordered`,description:`内容区上边框`,type:`boolean`,defaultValue:`true`},{prop:`background`,description:`内容区背景色`,type:`boolean`,defaultValue:`false`},{prop:`padding`,description:`内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`},{prop:`className`,description:`内容区附加样式`,type:`string`,defaultValue:`-`}],M=()=>{let{tabRecommended:v,tabBorder:S,tabBackground:C,tabToolbar:w,tabAddressBar:T,tabContent:ee,tabRecipes:E}=_(`useSetup:0:0`,()=>t(()=>({tabRecommended:_(`ref:1:0`,()=>s(`preview`)),tabBorder:_(`ref:1:1`,()=>s(`preview`)),tabBackground:_(`ref:1:2`,()=>s(`preview`)),tabToolbar:_(`ref:1:3`,()=>s(`preview`)),tabAddressBar:_(`ref:1:4`,()=>s(`preview`)),tabContent:_(`ref:1:5`,()=>s(`preview`)),tabRecipes:_(`ref:1:6`,()=>s(`preview`))})));return c(t=>{let s=n(),_=o(`rue:component:anchor`);return r(s,_),u(p(x,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,s);r(s,c),r(c,d(`Mockup Browser 浏览器外框`));let _=a(`p`,s);r(s,_),m(_,`text-sm mt-3 mb-3`),r(_,d(`MockupBrowser 保留 Rue 当前的浏览器外框视觉，同时补上推荐写法所需的地址栏、内容区和快捷工具栏 API。 原始 children 组合方式依然可用，适合需要完全自定义结构的场景。`));let x=a(`h2`,s);r(s,x),r(x,d(`何时使用`));let D=a(`ul`,s);r(s,D);let O=a(`li`,D);r(D,O),r(O,d(`需要展示网页、管理台、嵌入式预览或静态产品截图，并且希望外层有统一的浏览器语义。`));let M=a(`li`,D);r(D,M),r(M,d(`希望快速落一个带地址栏的浏览器框，用少量 props 搭出完整演示。`));let ae=a(`li`,D);r(D,ae),r(ae,d(`需要保留对工具栏和内容区的完全控制，继续使用原始组合模式。`));let oe=o(`rue:component:anchor`);r(s,oe),l(()=>{let e=p(A,{title:`推荐用法`,summary:`直接通过 url、toolbarEnd、contentClassName 等快捷 props 组出一个完整浏览器预览。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(k,{bordered:!0,background:!0,url:`https://app.ruejs.org/workspaces/demo`,toolbarEnd:y(g,{children:[b(`span`,{className:`badge badge-success badge-sm`,children:`LIVE`}),b(`span`,{className:`badge badge-ghost badge-sm`,children:`v0.15`})]}),contentClassName:`h-[22rem] bg-base-100`,children:y(`div`,{className:`grid h-full md:grid-cols-[15rem_minmax(0,1fr)]`,children:[y(`aside`,{className:`border-r border-base-300 bg-base-200/35 p-4`,children:[b(`div`,{className:`mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Workspace`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`rounded-box bg-primary/10 px-3 py-2 font-medium text-primary`,children:`Overview`}),b(`div`,{className:`rounded-box px-3 py-2`,children:`Releases`}),b(`div`,{className:`rounded-box px-3 py-2`,children:`Assets`}),b(`div`,{className:`rounded-box px-3 py-2`,children:`Team`})]})]}),y(`main`,{className:`grid gap-4 p-4`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`flex items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Current sprint`}),b(`div`,{className:`mt-1 text-lg font-semibold`,children:`Mockup Browser refresh`})]}),b(`div`,{className:`badge badge-primary badge-outline`,children:`In review`})]}),b(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`用增强后的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。`})]}),y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Deploys`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`18`})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Latency`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`124ms`})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Errors`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`0.02%`})]})]})]})]})})})}),code:`<MockupBrowser
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
</MockupBrowser>`});h(()=>u(e,s,oe))});let se=o(`rue:component:anchor`);r(s,se),l(()=>{let e=p(A,{title:`browser mockup with border`,summary:`保留原有 demo，不改变旧的 children + Toolbar 组织方式。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(k,{className:`w-full border border-base-300`,"data-testid":`mockup-browser-border`,children:[b(k.Toolbar,{children:b(`div`,{className:`input`,children:`https://daisyui.com`})}),b(`div`,{className:`grid h-80 place-content-center border-t border-base-300`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center border-t border-base-300">Hello!</div>
</MockupBrowser>`});h(()=>u(e,s,se))});let ce=o(`rue:component:anchor`);r(s,ce),l(()=>{let e=p(A,{title:`browser mockup with background color`,summary:`保留原有背景色 demo，继续支持最原始的手写结构。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(k,{className:`w-full border border-base-300 bg-base-100`,children:[b(k.Toolbar,{children:b(`div`,{className:`input`,children:`https://daisyui.com`})}),b(`div`,{className:`grid h-80 place-content-center`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300 bg-base-100">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center">Hello!</div>
</MockupBrowser>`});h(()=>u(e,s,ce))});let le=o(`rue:component:anchor`);r(s,le),l(()=>{let e=p(A,{title:`自定义工具栏`,summary:`Toolbar 的 start / end 插槽适合放站点标签、环境状态或次要动作。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(k,{bordered:!0,background:!0,className:`w-full`,children:[b(k.Toolbar,{start:b(`span`,{className:`badge badge-neutral badge-sm`,children:`Docs`}),end:y(g,{children:[b(`span`,{className:`badge badge-ghost badge-sm`,children:`Preview`}),b(`span`,{className:`badge badge-primary badge-sm`,children:`Share`})]}),children:b(k.AddressBar,{href:`https://ruejs.org/docs/components/mockup-browser`,prefix:b(`span`,{className:`badge badge-ghost badge-xs`,children:`GET`}),suffix:b(`span`,{className:`text-xs`,children:`public`}),children:`https://ruejs.org/docs/components/mockup-browser`})}),y(k.Content,{background:!0,padding:`md`,className:`grid gap-4 md:grid-cols-[18rem_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Outline`}),y(`div`,{className:`space-y-2 text-sm`,children:[b(`div`,{className:`font-medium text-primary`,children:`Introduction`}),b(`div`,{children:`Recommended usage`}),b(`div`,{children:`AddressBar`}),b(`div`,{children:`Content`})]})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser`}),b(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`工具栏仍然保留原始组合能力，但通过 start / end 把常见布局槽位做得更顺手。`})]})]})]})})}),code:`<MockupBrowser bordered background className="w-full">
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
</MockupBrowser>`});h(()=>u(e,s,le))});let ue=o(`rue:component:anchor`);r(s,ue),l(()=>{let e=p(A,{title:`地址栏状态`,summary:`AddressBar 可单独使用，并支持 success / warning / error 等状态语义。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-4`,children:[y(k,{bordered:!0,className:`w-full`,children:[b(k.Toolbar,{children:b(k.AddressBar,{href:`https://preview.ruejs.org/releases/2026.05.01`,status:`success`,prefix:b(`span`,{className:`badge badge-success badge-xs`,children:`200`}),suffix:b(`span`,{className:`text-xs`,children:`Published`})})}),b(k.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`发布成功，可继续分享预览链接。`})]}),y(k,{bordered:!0,className:`w-full`,children:[b(k.Toolbar,{children:b(k.AddressBar,{status:`warning`,prefix:b(`span`,{className:`badge badge-warning badge-xs`,children:`302`}),suffix:b(`span`,{className:`text-xs`,children:`Redirect`}),children:`https://staging.ruejs.org/latest`})}),b(k.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`预览地址已重定向到最新构建。`})]}),y(k,{bordered:!0,className:`w-full`,children:[b(k.Toolbar,{children:b(k.AddressBar,{status:`error`,prefix:b(`span`,{className:`badge badge-error badge-xs`,children:`500`}),suffix:b(`span`,{className:`text-xs`,children:`Retry`}),children:`https://api.ruejs.org/workspaces/demo`})}),b(k.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`当前接口不可达，请稍后重试。`})]})]})}),code:`<MockupBrowser bordered>
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
</MockupBrowser>`});h(()=>u(e,s,ue))});let de=o(`rue:component:anchor`);r(s,de),l(()=>{let e=p(A,{title:`内容容器`,summary:`Content 用来统一处理上边框、背景色和内边距，避免每个 demo 都手写一遍。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(k,{bordered:!0,className:`w-full`,children:[b(k.Toolbar,{children:b(k.AddressBar,{children:`https://ruejs.org/changelog`})}),y(k.Content,{background:!0,padding:`lg`,className:`grid gap-4 md:grid-cols-2`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`May`}),b(`div`,{className:`mt-2 text-base font-semibold`,children:`Component refresh`}),b(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`Mockup Browser 新增地址栏和内容区语义 API。`})]}),y(`div`,{className:`rounded-box border border-dashed border-base-300 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Next`}),b(`div`,{className:`mt-2 text-base font-semibold`,children:`Design recipes`}),b(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`用组合页展示不同布局密度和数据卡片编排方式。`})]})]})]})})}),code:`<MockupBrowser bordered className="w-full">
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
</MockupBrowser>`});h(()=>u(e,s,de))});let fe=o(`rue:component:anchor`);r(s,fe),l(()=>{let e=p(A,{title:`场景组合`,summary:`把快捷 props 和子组件混用，可以很快搭出文档、后台、嵌入式预览等组合场景。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(k,{bordered:!0,url:`https://studio.ruejs.org/campaigns/spring-launch`,toolbarEnd:b(`span`,{className:`badge badge-accent badge-sm`,children:`Draft`}),contentClassName:`h-72 bg-base-100`,children:y(`div`,{className:`grid h-full gap-4 p-4`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-primary/8 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Campaign`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`Spring Launch`}),b(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`在一个浏览器壳层里展示编辑后台会更接近真实产品观感。`})]}),y(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[b(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Email sequences`}),b(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Asset approvals`})]})]})}),y(k,{bordered:!0,background:!0,className:`w-full`,children:[b(k.Toolbar,{end:b(`span`,{className:`badge badge-info badge-sm`,children:`Docs`}),children:b(k.AddressBar,{prefix:b(`span`,{className:`text-xs`,children:`Search`}),children:`https://ruejs.org/components/mockup-browser`})}),b(k.Content,{padding:`md`,className:`h-72`,children:y(`div`,{className:`grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-200/35 p-4 text-sm`,children:[b(`div`,{className:`font-medium`,children:`On this page`}),y(`div`,{className:`mt-3 space-y-2 opacity-75`,children:[b(`div`,{children:`Recommended usage`}),b(`div`,{children:`Toolbar`}),b(`div`,{children:`AddressBar`}),b(`div`,{children:`Content`})]})]}),y(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser API`}),b(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。`})]})]})})]})]})})}),code:`<MockupBrowser
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
</MockupBrowser>`});h(()=>u(e,s,fe))});let N=a(`h2`,s);r(s,N),e(N,`id`,`mockup-browser-api`),r(N,d(`API`));let P=a(`p`,s);r(s,P),r(P,d(`MockupBrowser 现在支持推荐快捷模式和原始组合模式两套写法。`));let F=a(`h3`,s);r(s,F),r(F,d(`MockupBrowser`));let I=o(`rue:component:anchor`);r(s,I),l(()=>{let e=p(j,{rows:te});h(()=>u(e,s,I))});let L=a(`h3`,s);r(s,L),r(L,d(`MockupBrowser.Toolbar`));let R=o(`rue:component:anchor`);r(s,R),l(()=>{let e=p(j,{rows:ne});h(()=>u(e,s,R))});let z=a(`h3`,s);r(s,z),r(z,d(`MockupBrowser.AddressBar`));let B=o(`rue:component:anchor`);r(s,B),l(()=>{let e=p(j,{rows:re});h(()=>u(e,s,B))});let V=a(`h3`,s);r(s,V),r(V,d(`MockupBrowser.Content`));let pe=o(`rue:component:anchor`);r(s,pe),l(()=>{let e=p(j,{rows:ie});h(()=>u(e,s,pe))});let H=a(`div`,s);r(s,H),m(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let U=a(`h3`,H);r(H,U),m(U,`mt-0 mb-3 text-base font-semibold`),r(U,d(`推荐写法对照`));let W=a(`div`,H);r(H,W),m(W,`grid gap-2 text-sm md:grid-cols-2`);let G=a(`div`,W);r(W,G);let me=a(`code`,G);r(G,me),r(me,d(`url`)),r(G,d(`适合快速生成地址栏`));let K=a(`div`,W);r(W,K);let he=a(`code`,K);r(K,he),r(he,d(`contentClassName`)),r(K,d(`适合直接包裹内容区`));let q=a(`div`,W);r(W,q);let ge=a(`code`,q);r(q,ge),r(ge,d(`Toolbar + AddressBar + Content`)),r(q,d(`适合需要细粒度控制的页面`));let J=a(`div`,W);r(W,J),r(J,d(`旧的手写`));let _e=a(`code`,J);r(J,_e),r(_e,d(`Toolbar`)),r(J,d(`结构仍然完全可用`));let ve=a(`h2`,s);r(s,ve),r(ve,d(`FAQ`));let ye=a(`h3`,s);r(s,ye),r(ye,d(`什么时候用快捷 props，什么时候用子组件？`));let Y=a(`p`,s);r(s,Y),r(Y,d(`如果只是想快速放一个带地址栏的浏览器框，优先用`));let be=a(`code`,Y);r(Y,be),r(be,d(`url`)),r(Y,d(`、`));let xe=a(`code`,Y);r(Y,xe),r(xe,d(`toolbarEnd`)),r(Y,d(`、`));let Se=a(`code`,Y);r(Y,Se),r(Se,d(`contentClassName`)),r(Y,d(`这些快捷 props。需要更细的布局控制时，再切到`));let Ce=i(Y);r(Y,Ce),f(Ce,` `);let we=a(`code`,Y);r(Y,we),r(we,d(`MockupBrowser.Toolbar`)),r(Y,d(`、`));let Te=a(`code`,Y);r(Y,Te),r(Te,d(`MockupBrowser.AddressBar`)),r(Y,d(`和`));let Ee=i(Y);r(Y,Ee),f(Ee,` `);let De=a(`code`,Y);r(Y,De),r(De,d(`MockupBrowser.Content`)),r(Y,d(`。`));let Oe=a(`h3`,s);r(s,Oe),r(Oe,d(`原来的 demo 写法会失效吗？`));let X=a(`p`,s);r(s,X),r(X,d(`不会。原来的`));let ke=a(`code`,X);r(X,ke),r(ke,d(`children + MockupBrowser.Toolbar`)),r(X,d(`结构仍然保留；当前页面里的 “browser mockup with border” 和 “browser mockup with background color” 就是旧写法的直接保留版。`));let Z=a(`h3`,s);r(s,Z),r(Z,d(`Content 和根节点上的 contentClassName 有什么区别？`));let Q=a(`p`,s);r(s,Q);let Ae=a(`code`,Q);r(Q,Ae),r(Ae,d(`contentClassName`));let je=i(Q);r(Q,je),f(je,` `),r(Q,d(`适合推荐写法，直接让根组件帮你包一层内容区；如果你还需要分别控制`));let Me=a(`code`,Q);r(Q,Me),r(Me,d(`padding`)),r(Q,d(`、`));let Ne=a(`code`,Q);r(Q,Ne),r(Ne,d(`background`)),r(Q,d(`或自己拆更多节点，就更适合直接使用`));let Pe=i(Q);r(Q,Pe),f(Pe,` `);let $=a(`code`,Q);return r(Q,$),r($,d(`MockupBrowser.Content`)),r(Q,d(`。`)),t})}),s,_),s})};export{M as default};