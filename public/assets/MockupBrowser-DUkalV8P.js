import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,_t as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,p,rt as m,t as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as x,i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as C}from"./Code-D5UqTwV6.js";import{t as w}from"./tabs-DRfs918f.js";import{r as T}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as ee}from"./preview-test-gate-DuGL5287.js";var E=(...e)=>e.filter(Boolean).join(` `),D=(e=`default`)=>{switch(e){case`success`:return`border-success/30 bg-success/10 text-success`;case`warning`:return`border-warning/30 bg-warning/10 text-warning`;case`error`:return`border-error/30 bg-error/10 text-error`;default:return`border-base-300 bg-base-200/60`}},O=(e=`none`)=>{switch(e){case`sm`:return`p-3`;case`md`:return`p-4`;case`lg`:return`p-6`;default:return``}},k=n=>u(i=>{let o=c(),s=e(`rue:slot:anchor`);a(o,s),t(()=>{let i=n.prefix==null?``:u(()=>{let i=c(),o=g(`span`,i);a(i,o),_(o,`shrink-0 opacity-55`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.prefix;r(()=>f(e,o,s))}),i});r(()=>f(i,o,s))});let l=g(`span`,o);a(o,l),_(l,`min-w-0 flex-1 truncate`);let d=e(`rue:children:anchor`);a(l,d),t(()=>{let e=n.children;r(()=>f(e,l,d))});let p=e(`rue:slot:anchor`);return a(o,p),t(()=>{let i=n.suffix==null?``:u(()=>{let i=c(),o=g(`span`,i);a(i,o),_(o,`shrink-0 opacity-55`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.suffix;r(()=>f(e,o,s))}),i});r(()=>f(i,o,p))}),o}),A=n=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:l,__rue_rest_omit_2:d,__rue_rest_omit_3:p,__rue_rest_omit_4:m,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,content:C,mergedClassName:w}=y(`useSetup:0:0`,()=>i(()=>{let{href:e,prefix:t,suffix:r,interactive:i,status:a,className:o,children:s,...c}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,content:y(`computed:1:0`,()=>v(()=>n.children??n.href)),mergedClassName:y(`computed:1:1`,()=>v(()=>E(`input input-sm flex h-8 w-full min-w-0 items-center gap-2 text-sm`,D(n.status===void 0?`default`:n.status),n.className)))}}));return(n.interactive||n.href)&&typeof n.href==`string`?u(i=>{let c=g(`a`,i);t(()=>{o(c,S)}),t(()=>{s(c,`href`,String(n.href))}),t(()=>{_(c,w.get())});let l=e(`rue:component:anchor`);return a(c,l),t(()=>{let e=h(k,{prefix:n.prefix,suffix:n.suffix,children:C.get()});r(()=>f(e,c,l))}),c}):u(i=>{let s=g(`div`,i);t(()=>{o(s,S)}),t(()=>{_(s,w.get())});let c=e(`rue:component:anchor`);return a(s,c),t(()=>{let e=h(k,{prefix:n.prefix,suffix:n.suffix,children:C.get()});r(()=>f(e,s,c))}),s})},j=n=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:c,__rue_rest_omit_2:l,__rue_rest_omit_3:d,__rue_rest_omit_4:p,rest:m}=y(`useSetup:0:0:dup1`,()=>i(()=>{let{bordered:e,background:t,padding:r,className:i,children:a,...o}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o}}));return u(i=>{let s=g(`div`,i);t(()=>{o(s,m)}),t(()=>{_(s,E((n.bordered===void 0?!0:n.bordered)&&`border-t border-base-300`,n.background&&`bg-base-100`,O(n.padding===void 0?`none`:n.padding),n.className))});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>f(e,s,c))}),s})},M=n=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:l,__rue_rest_omit_2:p,__rue_rest_omit_3:m,rest:h}=y(`useSetup:0:0:dup2`,()=>i(()=>{let{start:e,end:t,className:r,children:i,...a}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a}}));return u(i=>{let s=g(`div`,i);t(()=>{o(s,h)}),t(()=>{_(s,E(`mockup-browser-toolbar gap-3`,n.className))});let l=e(`rue:slot:anchor`);a(s,l),t(()=>{let i=n.start==null?``:u(()=>{let i=c(),o=g(`div`,i);a(i,o),_(o,`flex shrink-0 items-center gap-2`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.start;r(()=>f(e,o,s))}),i});r(()=>f(i,s,l))}),a(s,d(` `));let p=e(`rue:slot:anchor`);a(s,p),t(()=>{let i=n.children==null?``:u(()=>{let i=c(),o=g(`div`,i);a(i,o),_(o,`flex min-w-0 flex-1 items-center`);let s=e(`rue:children:anchor`);return a(o,s),t(()=>{let e=n.children;r(()=>f(e,o,s))}),i});r(()=>f(i,s,p))}),a(s,d(` `));let m=e(`rue:slot:anchor`);return a(s,m),t(()=>{let i=n.end==null?``:u(()=>{let i=c(),o=g(`div`,i);a(i,o),_(o,`flex shrink-0 items-center gap-2`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.end;r(()=>f(e,o,s))}),i});r(()=>f(i,s,m))}),s})},N=Object.assign(n=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:l,__rue_rest_omit_2:p,__rue_rest_omit_3:m,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,__rue_rest_omit_8:w,__rue_rest_omit_9:T,__rue_rest_omit_10:ee,__rue_rest_omit_11:D,__rue_rest_omit_12:O,__rue_rest_omit_13:k,rest:N,shouldRenderToolbar:P,shouldWrapContent:F}=y(`useSetup:0:0:dup3`,()=>i(()=>{let{bordered:e,background:t,showToolbar:r,url:i,toolbar:a,toolbarStart:o,toolbarEnd:s,toolbarClassName:c,contentClassName:l,contentBordered:u,contentBackground:d,contentPadding:f,className:p,children:m,...h}=n,g=y(`computed:1:2`,()=>v(()=>n.showToolbar!==!1&&(n.toolbar!=null||n.url!=null||n.toolbarStart!=null||n.toolbarEnd!=null||n.toolbarClassName!=null))),_=g;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,rest:h,shouldRenderToolbar:g,shouldWrapContent:y(`computed:1:3`,()=>v(()=>_.get()||n.contentClassName!=null||n.contentBordered!=null||n.contentBackground!=null||n.contentPadding!=null))}}));return u(i=>{let s=g(`div`,i);t(()=>{o(s,N)}),t(()=>{_(s,E(`mockup-browser`,n.bordered&&`border border-base-300`,n.background&&`bg-base-100`,n.className))});let l=e(`rue:slot:anchor`);a(s,l),t(()=>{let i=P.get()?u(()=>{let i=c(),o=e(`rue:component:anchor`);a(i,o);let s=u(()=>{let i=c(),o=e(`rue:slot:anchor`);return a(i,o),t(()=>{let s=n.toolbar==null?n.url==null?``:u(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=h(A,{href:typeof n.url==`string`?n.url:void 0,children:n.url});r(()=>f(e,i,o))}),i}):n.toolbar;r(()=>f(s,i,o))}),i});return t(()=>{let e=h(M,{className:n.toolbarClassName,start:n.toolbarStart,end:n.toolbarEnd,children:s});r(()=>f(e,i,o))}),i}):``;r(()=>f(i,s,l))}),a(s,d(` `));let p=e(`rue:slot:anchor`);return a(s,p),t(()=>{let i=F.get()?u(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=h(j,{className:n.contentClassName,bordered:n.contentBordered,background:n.contentBackground,padding:n.contentPadding,children:n.children});r(()=>f(e,i,o))}),i}):n.children;r(()=>f(i,s,p))}),s})},{Toolbar:M,AddressBar:A,Content:j}),P=n=>u(i=>{let o=g(`div`,i);_(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=g(`div`,o);a(o,s),_(s,`flex flex-wrap items-start justify-between gap-3`);let l=g(`div`,s);a(s,l);let p=g(`h2`,l);a(l,p),_(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(p,d(`# `));let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.title;r(()=>f(e,p,m))});let v=e(`rue:slot:anchor`);a(l,v),t(()=>{let i=n.summary?u(()=>{let i=c(),o=g(`p`,i);a(i,o),_(o,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.summary;r(()=>f(e,o,s))}),i}):``;r(()=>f(i,l,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,o,y))});let b=e(`rue:slot:anchor`);return a(o,b),t(()=>{let i=n.tab.value===`preview`?ee(n.title,n.preview):u(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>f(e,i,o))}),i});r(()=>f(i,o,b))}),o}),F=n=>u(i=>{let o=g(`div`,i);_(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=g(`table`,o);a(o,l),_(l,`table table-zebra`);let p=g(`thead`,l);a(l,p);let m=g(`tr`,p);a(p,m);let h=g(`th`,m);a(m,h),a(h,d(`属性`));let v=g(`th`,m);a(m,v),a(v,d(`说明`));let y=g(`th`,m);a(m,y),a(y,d(`类型`));let x=g(`th`,m);a(m,x),a(x,d(`默认值`));let S=g(`tbody`,l);a(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,l,d)=>{f(u(()=>{let i=c(),o=g(`tr`,i);a(i,o),t(()=>{s(o,`key`,String(n.prop))});let l=g(`td`,o);a(o,l);let u=g(`code`,l);a(l,u);let d=e(`rue:slot:anchor`);a(u,d),t(()=>{let e=n.prop;r(()=>f(e,u,d))});let p=g(`td`,o);a(o,p);let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.description;r(()=>f(e,p,m))});let h=g(`td`,o);a(o,h);let _=g(`code`,h);a(h,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>f(e,_,v))});let y=g(`td`,o);a(o,y);let b=g(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>f(e,b,x))}),i}),i,o)}})}),o}),te=[{prop:`bordered`,description:`为浏览器外框追加边框`,type:`boolean`,defaultValue:`false`},{prop:`background`,description:`为外层容器追加底色`,type:`boolean`,defaultValue:`false`},{prop:`showToolbar`,description:`控制是否渲染快捷工具栏`,type:`boolean`,defaultValue:`true`},{prop:`url`,description:`快捷生成地址栏内容；适合推荐用法`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`自定义快捷工具栏主体；通常与 toolbarStart / toolbarEnd 配合`,type:`any`,defaultValue:`-`},{prop:`toolbarStart`,description:`快捷工具栏左侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarEnd`,description:`快捷工具栏右侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarClassName`,description:`快捷工具栏附加样式`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`快捷内容区附加样式；设置后会自动包裹内容区`,type:`string`,defaultValue:`-`},{prop:`contentBordered`,description:`快捷内容区是否带上边框`,type:`boolean`,defaultValue:`true`},{prop:`contentBackground`,description:`快捷内容区是否带背景色`,type:`boolean`,defaultValue:`false`},{prop:`contentPadding`,description:`快捷内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`}],ne=[{prop:`start`,description:`工具栏左侧内容`,type:`any`,defaultValue:`-`},{prop:`end`,description:`工具栏右侧内容`,type:`any`,defaultValue:`-`},{prop:`children`,description:`工具栏主体内容，通常放地址栏`,type:`any`,defaultValue:`-`},{prop:`className`,description:`工具栏附加样式`,type:`string`,defaultValue:`-`}],re=[{prop:`href`,description:`地址链接；传入后默认渲染为 a`,type:`string`,defaultValue:`-`},{prop:`prefix`,description:`地址栏前缀内容，例如标签或图标`,type:`any`,defaultValue:`-`},{prop:`suffix`,description:`地址栏后缀内容，例如状态或动作`,type:`any`,defaultValue:`-`},{prop:`interactive`,description:`强制按可交互链接样式输出`,type:`boolean`,defaultValue:`false`},{prop:`status`,description:`地址栏状态色`,type:`'default' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`}],ie=[{prop:`bordered`,description:`内容区上边框`,type:`boolean`,defaultValue:`true`},{prop:`background`,description:`内容区背景色`,type:`boolean`,defaultValue:`false`},{prop:`padding`,description:`内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`},{prop:`className`,description:`内容区附加样式`,type:`string`,defaultValue:`-`}],I=()=>{let{tabRecommended:o,tabBorder:v,tabBackground:b,tabToolbar:C,tabAddressBar:w,tabContent:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>i(()=>({tabRecommended:y(`ref:1:0`,()=>n(`preview`)),tabBorder:y(`ref:1:1`,()=>n(`preview`)),tabBackground:y(`ref:1:2`,()=>n(`preview`)),tabToolbar:y(`ref:1:3`,()=>n(`preview`)),tabAddressBar:y(`ref:1:4`,()=>n(`preview`)),tabContent:y(`ref:1:5`,()=>n(`preview`)),tabRecipes:y(`ref:1:6`,()=>n(`preview`))})));return u(n=>{let i=c(),y=e(`rue:component:anchor`);return a(i,y),f(h(T,{children:u(()=>{let n=c(),i=g(`div`,n);a(n,i),_(i,`max-w-none prose prose-sm md:prose-base`);let u=g(`h1`,i);a(i,u),a(u,d(`Mockup Browser 浏览器外框`));let y=g(`p`,i);a(i,y),_(y,`text-sm mt-3 mb-3`),a(y,d(`MockupBrowser 保留 Rue 当前的浏览器外框视觉，同时补上推荐写法所需的地址栏、内容区和快捷工具栏 API。 原始 children 组合方式依然可用，适合需要完全自定义结构的场景。`));let T=g(`h2`,i);a(i,T),a(T,d(`何时使用`));let D=g(`ul`,i);a(i,D);let O=g(`li`,D);a(D,O),a(O,d(`需要展示网页、管理台、嵌入式预览或静态产品截图，并且希望外层有统一的浏览器语义。`));let k=g(`li`,D);a(D,k),a(k,d(`希望快速落一个带地址栏的浏览器框，用少量 props 搭出完整演示。`));let A=g(`li`,D);a(D,A),a(A,d(`需要保留对工具栏和内容区的完全控制，继续使用原始组合模式。`));let j=e(`rue:component:anchor`);a(i,j),t(()=>{let e=h(P,{title:`推荐用法`,summary:`直接通过 url、toolbarEnd、contentClassName 等快捷 props 组出一个完整浏览器预览。`,tab:o,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(N,{bordered:!0,background:!0,url:`https://app.ruejs.org/workspaces/demo`,toolbarEnd:x(p,{children:[S(`span`,{className:`badge badge-success badge-sm`,children:`LIVE`}),S(`span`,{className:`badge badge-ghost badge-sm`,children:`v0.15`})]}),contentClassName:`h-[22rem] bg-base-100`,children:x(`div`,{className:`grid h-full md:grid-cols-[15rem_minmax(0,1fr)]`,children:[x(`aside`,{className:`border-r border-base-300 bg-base-200/35 p-4`,children:[S(`div`,{className:`mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Workspace`}),x(`div`,{className:`space-y-2 text-sm`,children:[S(`div`,{className:`rounded-box bg-primary/10 px-3 py-2 font-medium text-primary`,children:`Overview`}),S(`div`,{className:`rounded-box px-3 py-2`,children:`Releases`}),S(`div`,{className:`rounded-box px-3 py-2`,children:`Assets`}),S(`div`,{className:`rounded-box px-3 py-2`,children:`Team`})]})]}),x(`main`,{className:`grid gap-4 p-4`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`flex items-center justify-between gap-3`,children:[x(`div`,{children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Current sprint`}),S(`div`,{className:`mt-1 text-lg font-semibold`,children:`Mockup Browser refresh`})]}),S(`div`,{className:`badge badge-primary badge-outline`,children:`In review`})]}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`用增强后的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。`})]}),x(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Deploys`}),S(`div`,{className:`mt-2 text-2xl font-semibold`,children:`18`})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Latency`}),S(`div`,{className:`mt-2 text-2xl font-semibold`,children:`124ms`})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Errors`}),S(`div`,{className:`mt-2 text-2xl font-semibold`,children:`0.02%`})]})]})]})]})})})}),code:`<MockupBrowser
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
</MockupBrowser>`});r(()=>f(e,i,j))});let M=e(`rue:component:anchor`);a(i,M),t(()=>{let e=h(P,{title:`browser mockup with border`,summary:`保留原有 demo，不改变旧的 children + Toolbar 组织方式。`,tab:v,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{className:`w-full border border-base-300`,"data-testid":`mockup-browser-border`,children:[S(N.Toolbar,{children:S(`div`,{className:`input`,children:`https://daisyui.com`})}),S(`div`,{className:`grid h-80 place-content-center border-t border-base-300`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center border-t border-base-300">Hello!</div>
</MockupBrowser>`});r(()=>f(e,i,M))});let I=e(`rue:component:anchor`);a(i,I),t(()=>{let e=h(P,{title:`browser mockup with background color`,summary:`保留原有背景色 demo，继续支持最原始的手写结构。`,tab:b,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{className:`w-full border border-base-300 bg-base-100`,children:[S(N.Toolbar,{children:S(`div`,{className:`input`,children:`https://daisyui.com`})}),S(`div`,{className:`grid h-80 place-content-center`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300 bg-base-100">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center">Hello!</div>
</MockupBrowser>`});r(()=>f(e,i,I))});let ae=e(`rue:component:anchor`);a(i,ae),t(()=>{let e=h(P,{title:`自定义工具栏`,summary:`Toolbar 的 start / end 插槽适合放站点标签、环境状态或次要动作。`,tab:C,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{bordered:!0,background:!0,className:`w-full`,children:[S(N.Toolbar,{start:S(`span`,{className:`badge badge-neutral badge-sm`,children:`Docs`}),end:x(p,{children:[S(`span`,{className:`badge badge-ghost badge-sm`,children:`Preview`}),S(`span`,{className:`badge badge-primary badge-sm`,children:`Share`})]}),children:S(N.AddressBar,{href:`https://ruejs.org/docs/components/mockup-browser`,prefix:S(`span`,{className:`badge badge-ghost badge-xs`,children:`GET`}),suffix:S(`span`,{className:`text-xs`,children:`public`}),children:`https://ruejs.org/docs/components/mockup-browser`})}),x(N.Content,{background:!0,padding:`md`,className:`grid gap-4 md:grid-cols-[18rem_minmax(0,1fr)]`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Outline`}),x(`div`,{className:`space-y-2 text-sm`,children:[S(`div`,{className:`font-medium text-primary`,children:`Introduction`}),S(`div`,{children:`Recommended usage`}),S(`div`,{children:`AddressBar`}),S(`div`,{children:`Content`})]})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser`}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`工具栏仍然保留原始组合能力，但通过 start / end 把常见布局槽位做得更顺手。`})]})]})]})})}),code:`<MockupBrowser bordered background className="w-full">
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
</MockupBrowser>`});r(()=>f(e,i,ae))});let oe=e(`rue:component:anchor`);a(i,oe),t(()=>{let e=h(P,{title:`地址栏状态`,summary:`AddressBar 可单独使用，并支持 success / warning / error 等状态语义。`,tab:w,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-4`,children:[x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{href:`https://preview.ruejs.org/releases/2026.05.01`,status:`success`,prefix:S(`span`,{className:`badge badge-success badge-xs`,children:`200`}),suffix:S(`span`,{className:`text-xs`,children:`Published`})})}),S(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`发布成功，可继续分享预览链接。`})]}),x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{status:`warning`,prefix:S(`span`,{className:`badge badge-warning badge-xs`,children:`302`}),suffix:S(`span`,{className:`text-xs`,children:`Redirect`}),children:`https://staging.ruejs.org/latest`})}),S(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`预览地址已重定向到最新构建。`})]}),x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{status:`error`,prefix:S(`span`,{className:`badge badge-error badge-xs`,children:`500`}),suffix:S(`span`,{className:`text-xs`,children:`Retry`}),children:`https://api.ruejs.org/workspaces/demo`})}),S(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`当前接口不可达，请稍后重试。`})]})]})}),code:`<MockupBrowser bordered>
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
</MockupBrowser>`});r(()=>f(e,i,oe))});let se=e(`rue:component:anchor`);a(i,se),t(()=>{let e=h(P,{title:`内容容器`,summary:`Content 用来统一处理上边框、背景色和内边距，避免每个 demo 都手写一遍。`,tab:ee,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{children:`https://ruejs.org/changelog`})}),x(N.Content,{background:!0,padding:`lg`,className:`grid gap-4 md:grid-cols-2`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`May`}),S(`div`,{className:`mt-2 text-base font-semibold`,children:`Component refresh`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`Mockup Browser 新增地址栏和内容区语义 API。`})]}),x(`div`,{className:`rounded-box border border-dashed border-base-300 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Next`}),S(`div`,{className:`mt-2 text-base font-semibold`,children:`Design recipes`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`用组合页展示不同布局密度和数据卡片编排方式。`})]})]})]})})}),code:`<MockupBrowser bordered className="w-full">
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
</MockupBrowser>`});r(()=>f(e,i,se))});let ce=e(`rue:component:anchor`);a(i,ce),t(()=>{let e=h(P,{title:`场景组合`,summary:`把快捷 props 和子组件混用，可以很快搭出文档、后台、嵌入式预览等组合场景。`,tab:E,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[S(N,{bordered:!0,url:`https://studio.ruejs.org/campaigns/spring-launch`,toolbarEnd:S(`span`,{className:`badge badge-accent badge-sm`,children:`Draft`}),contentClassName:`h-72 bg-base-100`,children:x(`div`,{className:`grid h-full gap-4 p-4`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-primary/8 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Campaign`}),S(`div`,{className:`mt-2 text-lg font-semibold`,children:`Spring Launch`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`在一个浏览器壳层里展示编辑后台会更接近真实产品观感。`})]}),x(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[S(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Email sequences`}),S(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Asset approvals`})]})]})}),x(N,{bordered:!0,background:!0,className:`w-full`,children:[S(N.Toolbar,{end:S(`span`,{className:`badge badge-info badge-sm`,children:`Docs`}),children:S(N.AddressBar,{prefix:S(`span`,{className:`text-xs`,children:`Search`}),children:`https://ruejs.org/components/mockup-browser`})}),S(N.Content,{padding:`md`,className:`h-72`,children:x(`div`,{className:`grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-200/35 p-4 text-sm`,children:[S(`div`,{className:`font-medium`,children:`On this page`}),x(`div`,{className:`mt-3 space-y-2 opacity-75`,children:[S(`div`,{children:`Recommended usage`}),S(`div`,{children:`Toolbar`}),S(`div`,{children:`AddressBar`}),S(`div`,{children:`Content`})]})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser API`}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。`})]})]})})]})]})})}),code:`<MockupBrowser
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
</MockupBrowser>`});r(()=>f(e,i,ce))});let L=g(`h2`,i);a(i,L),s(L,`id`,`mockup-browser-api`),a(L,d(`API`));let le=g(`p`,i);a(i,le),a(le,d(`MockupBrowser 现在支持推荐快捷模式和原始组合模式两套写法。`));let ue=g(`h3`,i);a(i,ue),a(ue,d(`MockupBrowser`));let de=e(`rue:component:anchor`);a(i,de),t(()=>{let e=h(F,{rows:te});r(()=>f(e,i,de))});let R=g(`h3`,i);a(i,R),a(R,d(`MockupBrowser.Toolbar`));let z=e(`rue:component:anchor`);a(i,z),t(()=>{let e=h(F,{rows:ne});r(()=>f(e,i,z))});let B=g(`h3`,i);a(i,B),a(B,d(`MockupBrowser.AddressBar`));let V=e(`rue:component:anchor`);a(i,V),t(()=>{let e=h(F,{rows:re});r(()=>f(e,i,V))});let H=g(`h3`,i);a(i,H),a(H,d(`MockupBrowser.Content`));let fe=e(`rue:component:anchor`);a(i,fe),t(()=>{let e=h(F,{rows:ie});r(()=>f(e,i,fe))});let U=g(`div`,i);a(i,U),_(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=g(`h3`,U);a(U,W),_(W,`mt-0 mb-3 text-base font-semibold`),a(W,d(`推荐写法对照`));let G=g(`div`,U);a(U,G),_(G,`grid gap-2 text-sm md:grid-cols-2`);let K=g(`div`,G);a(G,K);let pe=g(`code`,K);a(K,pe),a(pe,d(`url`)),a(K,d(`适合快速生成地址栏`));let q=g(`div`,G);a(G,q);let me=g(`code`,q);a(q,me),a(me,d(`contentClassName`)),a(q,d(`适合直接包裹内容区`));let J=g(`div`,G);a(G,J);let he=g(`code`,J);a(J,he),a(he,d(`Toolbar + AddressBar + Content`)),a(J,d(`适合需要细粒度控制的页面`));let Y=g(`div`,G);a(G,Y),a(Y,d(`旧的手写`));let ge=g(`code`,Y);a(Y,ge),a(ge,d(`Toolbar`)),a(Y,d(`结构仍然完全可用`));let _e=g(`h2`,i);a(i,_e),a(_e,d(`FAQ`));let ve=g(`h3`,i);a(i,ve),a(ve,d(`什么时候用快捷 props，什么时候用子组件？`));let X=g(`p`,i);a(i,X),a(X,d(`如果只是想快速放一个带地址栏的浏览器框，优先用`));let ye=g(`code`,X);a(X,ye),a(ye,d(`url`)),a(X,d(`、`));let be=g(`code`,X);a(X,be),a(be,d(`toolbarEnd`)),a(X,d(`、`));let xe=g(`code`,X);a(X,xe),a(xe,d(`contentClassName`)),a(X,d(`这些快捷 props。需要更细的布局控制时，再切到`));let Se=m(X);a(X,Se),l(Se,` `);let Ce=g(`code`,X);a(X,Ce),a(Ce,d(`MockupBrowser.Toolbar`)),a(X,d(`、`));let we=g(`code`,X);a(X,we),a(we,d(`MockupBrowser.AddressBar`)),a(X,d(`和`));let Te=m(X);a(X,Te),l(Te,` `);let Ee=g(`code`,X);a(X,Ee),a(Ee,d(`MockupBrowser.Content`)),a(X,d(`。`));let De=g(`h3`,i);a(i,De),a(De,d(`原来的 demo 写法会失效吗？`));let Z=g(`p`,i);a(i,Z),a(Z,d(`不会。原来的`));let Oe=g(`code`,Z);a(Z,Oe),a(Oe,d(`children + MockupBrowser.Toolbar`)),a(Z,d(`结构仍然保留；当前页面里的 “browser mockup with border” 和 “browser mockup with background color” 就是旧写法的直接保留版。`));let Q=g(`h3`,i);a(i,Q),a(Q,d(`Content 和根节点上的 contentClassName 有什么区别？`));let $=g(`p`,i);a(i,$);let ke=g(`code`,$);a($,ke),a(ke,d(`contentClassName`));let Ae=m($);a($,Ae),l(Ae,` `),a($,d(`适合推荐写法，直接让根组件帮你包一层内容区；如果你还需要分别控制`));let je=g(`code`,$);a($,je),a(je,d(`padding`)),a($,d(`、`));let Me=g(`code`,$);a($,Me),a(Me,d(`background`)),a($,d(`或自己拆更多节点，就更适合直接使用`));let Ne=m($);a($,Ne),l(Ne,` `);let Pe=g(`code`,$);return a($,Pe),a(Pe,d(`MockupBrowser.Content`)),a($,d(`。`)),n})}),i,y),i})};export{I as default};