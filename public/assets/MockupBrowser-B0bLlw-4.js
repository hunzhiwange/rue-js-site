import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,gt as u,l as d,mt as f,p,pt as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as x,i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as C}from"./Code-CZqShVUj.js";import{t as w}from"./tabs-BBuGEPV7.js";import{r as T}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as ee}from"./preview-test-gate-PvTX1w6L.js";var E=(...e)=>e.filter(Boolean).join(` `),D=(e=`default`)=>{switch(e){case`success`:return`border-success/30 bg-success/10 text-success`;case`warning`:return`border-warning/30 bg-warning/10 text-warning`;case`error`:return`border-error/30 bg-error/10 text-error`;default:return`border-base-300 bg-base-200/60`}},O=(e=`none`)=>{switch(e){case`sm`:return`p-3`;case`md`:return`p-4`;case`lg`:return`p-6`;default:return``}},k=e=>d(r=>{let c=s(),l=a(`rue:slot:anchor`);n(c,l),o(()=>{let r=e.prefix==null?``:d(()=>{let r=s(),c=i(`span`,r);n(r,c),_(c,`shrink-0 opacity-55`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let n=e.prefix;t(()=>g(n,c,l))}),r});t(()=>g(r,c,l))});let u=i(`span`,c);n(c,u),_(u,`min-w-0 flex-1 truncate`);let f=a(`rue:children:anchor`);n(u,f),o(()=>{let n=e.children;t(()=>g(n,u,f))});let p=a(`rue:slot:anchor`);return n(c,p),o(()=>{let r=e.suffix==null?``:d(()=>{let r=s(),c=i(`span`,r);n(r,c),_(c,`shrink-0 opacity-55`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let n=e.suffix;t(()=>g(n,c,l))}),r});t(()=>g(r,c,p))}),c}),A=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,__rue_rest_omit_2:l,__rue_rest_omit_3:p,__rue_rest_omit_4:m,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,content:C,mergedClassName:w}=y(`useSetup:0:0`,()=>h(()=>{let{href:t,prefix:n,suffix:r,interactive:i,status:a,className:o,children:s,...c}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,content:y(`computed:1:0`,()=>u(()=>e.children??e.href)),mergedClassName:y(`computed:1:1`,()=>u(()=>E(`input input-sm flex h-8 w-full min-w-0 items-center gap-2 text-sm`,D(e.status===void 0?`default`:e.status),e.className)))}}));return(e.interactive||e.href)&&typeof e.href==`string`?d(r=>{let s=i(`a`,r);o(()=>{f(s,S)}),o(()=>{c(s,`href`,String(e.href))}),o(()=>{_(s,w.get())});let l=a(`rue:component:anchor`);return n(s,l),o(()=>{let n=v(k,{prefix:e.prefix,suffix:e.suffix,children:C.get()});t(()=>g(n,s,l))}),s}):d(r=>{let s=i(`div`,r);o(()=>{f(s,S)}),o(()=>{_(s,w.get())});let c=a(`rue:component:anchor`);return n(s,c),o(()=>{let n=v(k,{prefix:e.prefix,suffix:e.suffix,children:C.get()});t(()=>g(n,s,c))}),s})},j=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:u,rest:p}=y(`useSetup:0:0:dup1`,()=>h(()=>{let{bordered:t,background:n,padding:r,className:i,children:a,...o}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o}}));return d(r=>{let s=i(`div`,r);o(()=>{f(s,p)}),o(()=>{_(s,E((e.bordered===void 0?!0:e.bordered)&&`border-t border-base-300`,e.background&&`bg-base-100`,O(e.padding===void 0?`none`:e.padding),e.className))});let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>g(n,s,c))}),s})},M=r=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:l,__rue_rest_omit_2:u,__rue_rest_omit_3:p,rest:m}=y(`useSetup:0:0:dup2`,()=>h(()=>{let{start:e,end:t,className:n,children:i,...a}=r;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,rest:a}}));return d(c=>{let l=i(`div`,c);o(()=>{f(l,m)}),o(()=>{_(l,E(`mockup-browser-toolbar gap-3`,r.className))});let u=a(`rue:slot:anchor`);n(l,u),o(()=>{let e=r.start==null?``:d(()=>{let e=s(),c=i(`div`,e);n(e,c),_(c,`flex shrink-0 items-center gap-2`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.start;t(()=>g(e,c,l))}),e});t(()=>g(e,l,u))}),n(l,e(` `));let p=a(`rue:slot:anchor`);n(l,p),o(()=>{let e=r.children==null?``:d(()=>{let e=s(),c=i(`div`,e);n(e,c),_(c,`flex min-w-0 flex-1 items-center`);let l=a(`rue:children:anchor`);return n(c,l),o(()=>{let e=r.children;t(()=>g(e,c,l))}),e});t(()=>g(e,l,p))}),n(l,e(` `));let h=a(`rue:slot:anchor`);return n(l,h),o(()=>{let e=r.end==null?``:d(()=>{let e=s(),c=i(`div`,e);n(e,c),_(c,`flex shrink-0 items-center gap-2`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.end;t(()=>g(e,c,l))}),e});t(()=>g(e,l,h))}),l})},N=Object.assign(r=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:l,__rue_rest_omit_2:p,__rue_rest_omit_3:m,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,__rue_rest_omit_8:w,__rue_rest_omit_9:T,__rue_rest_omit_10:ee,__rue_rest_omit_11:D,__rue_rest_omit_12:O,__rue_rest_omit_13:k,rest:N,shouldRenderToolbar:P,shouldWrapContent:F}=y(`useSetup:0:0:dup3`,()=>h(()=>{let{bordered:e,background:t,showToolbar:n,url:i,toolbar:a,toolbarStart:o,toolbarEnd:s,toolbarClassName:c,contentClassName:l,contentBordered:d,contentBackground:f,contentPadding:p,className:m,children:h,...g}=r,_=y(`computed:1:2`,()=>u(()=>r.showToolbar!==!1&&(r.toolbar!=null||r.url!=null||r.toolbarStart!=null||r.toolbarEnd!=null||r.toolbarClassName!=null))),v=_;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,rest:g,shouldRenderToolbar:_,shouldWrapContent:y(`computed:1:3`,()=>u(()=>v.get()||r.contentClassName!=null||r.contentBordered!=null||r.contentBackground!=null||r.contentPadding!=null))}}));return d(c=>{let l=i(`div`,c);o(()=>{f(l,N)}),o(()=>{_(l,E(`mockup-browser`,r.bordered&&`border border-base-300`,r.background&&`bg-base-100`,r.className))});let u=a(`rue:slot:anchor`);n(l,u),o(()=>{let e=P.get()?d(()=>{let e=s(),i=a(`rue:component:anchor`);n(e,i);let c=d(()=>{let e=s(),i=a(`rue:slot:anchor`);return n(e,i),o(()=>{let c=r.toolbar==null?r.url==null?``:d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(A,{href:typeof r.url==`string`?r.url:void 0,children:r.url});t(()=>g(n,e,i))}),e}):r.toolbar;t(()=>g(c,e,i))}),e});return o(()=>{let n=v(M,{className:r.toolbarClassName,start:r.toolbarStart,end:r.toolbarEnd,children:c});t(()=>g(n,e,i))}),e}):``;t(()=>g(e,l,u))}),n(l,e(` `));let p=a(`rue:slot:anchor`);return n(l,p),o(()=>{let e=F.get()?d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(j,{className:r.contentClassName,bordered:r.contentBordered,background:r.contentBackground,padding:r.contentPadding,children:r.children});t(()=>g(n,e,i))}),e}):r.children;t(()=>g(e,l,p))}),l})},{Toolbar:M,AddressBar:A,Content:j}),P=r=>d(c=>{let l=i(`div`,c);_(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),_(u,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,u);n(u,f);let p=i(`h2`,f);n(f,p),_(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,e(`# `));let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let e=r.title;t(()=>g(e,p,m))});let h=a(`rue:slot:anchor`);n(f,h),o(()=>{let e=r.summary?d(()=>{let e=s(),c=i(`p`,e);n(e,c),_(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>g(e,c,l))}),e}):``;t(()=>g(e,f,h))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=v(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>g(e,l,y))});let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?ee(r.title,r.preview):d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(C,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>g(n,e,i))}),e});t(()=>g(e,l,b))}),l}),F=r=>d(l=>{let u=i(`div`,l);_(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),_(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let m=i(`tr`,p);n(p,m);let h=i(`th`,m);n(m,h),n(h,e(`属性`));let v=i(`th`,m);n(m,v),n(v,e(`说明`));let y=i(`th`,m);n(m,y),n(y,e(`类型`));let x=i(`th`,m);n(m,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=b({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{g(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>g(n,d,f))});let p=i(`td`,l);n(l,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>g(n,p,m))});let h=i(`td`,l);n(l,h);let _=i(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>g(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>g(n,b,x))}),r}),r,l)}})}),u}),te=[{prop:`bordered`,description:`为浏览器外框追加边框`,type:`boolean`,defaultValue:`false`},{prop:`background`,description:`为外层容器追加底色`,type:`boolean`,defaultValue:`false`},{prop:`showToolbar`,description:`控制是否渲染快捷工具栏`,type:`boolean`,defaultValue:`true`},{prop:`url`,description:`快捷生成地址栏内容；适合推荐用法`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`自定义快捷工具栏主体；通常与 toolbarStart / toolbarEnd 配合`,type:`any`,defaultValue:`-`},{prop:`toolbarStart`,description:`快捷工具栏左侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarEnd`,description:`快捷工具栏右侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarClassName`,description:`快捷工具栏附加样式`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`快捷内容区附加样式；设置后会自动包裹内容区`,type:`string`,defaultValue:`-`},{prop:`contentBordered`,description:`快捷内容区是否带上边框`,type:`boolean`,defaultValue:`true`},{prop:`contentBackground`,description:`快捷内容区是否带背景色`,type:`boolean`,defaultValue:`false`},{prop:`contentPadding`,description:`快捷内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`}],ne=[{prop:`start`,description:`工具栏左侧内容`,type:`any`,defaultValue:`-`},{prop:`end`,description:`工具栏右侧内容`,type:`any`,defaultValue:`-`},{prop:`children`,description:`工具栏主体内容，通常放地址栏`,type:`any`,defaultValue:`-`},{prop:`className`,description:`工具栏附加样式`,type:`string`,defaultValue:`-`}],re=[{prop:`href`,description:`地址链接；传入后默认渲染为 a`,type:`string`,defaultValue:`-`},{prop:`prefix`,description:`地址栏前缀内容，例如标签或图标`,type:`any`,defaultValue:`-`},{prop:`suffix`,description:`地址栏后缀内容，例如状态或动作`,type:`any`,defaultValue:`-`},{prop:`interactive`,description:`强制按可交互链接样式输出`,type:`boolean`,defaultValue:`false`},{prop:`status`,description:`地址栏状态色`,type:`'default' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`}],ie=[{prop:`bordered`,description:`内容区上边框`,type:`boolean`,defaultValue:`true`},{prop:`background`,description:`内容区背景色`,type:`boolean`,defaultValue:`false`},{prop:`padding`,description:`内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`},{prop:`className`,description:`内容区附加样式`,type:`string`,defaultValue:`-`}],I=()=>{let{tabRecommended:u,tabBorder:f,tabBackground:b,tabToolbar:C,tabAddressBar:w,tabContent:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>h(()=>({tabRecommended:y(`ref:1:0`,()=>r(`preview`)),tabBorder:y(`ref:1:1`,()=>r(`preview`)),tabBackground:y(`ref:1:2`,()=>r(`preview`)),tabToolbar:y(`ref:1:3`,()=>r(`preview`)),tabAddressBar:y(`ref:1:4`,()=>r(`preview`)),tabContent:y(`ref:1:5`,()=>r(`preview`)),tabRecipes:y(`ref:1:6`,()=>r(`preview`))})));return d(r=>{let h=s(),y=a(`rue:component:anchor`);return n(h,y),g(v(T,{children:d(()=>{let r=s(),d=i(`div`,r);n(r,d),_(d,`max-w-none prose prose-sm md:prose-base`);let h=i(`h1`,d);n(d,h),n(h,e(`Mockup Browser 浏览器外框`));let y=i(`p`,d);n(d,y),_(y,`text-sm mt-3 mb-3`),n(y,e(`MockupBrowser 保留 Rue 当前的浏览器外框视觉，同时补上推荐写法所需的地址栏、内容区和快捷工具栏 API。 原始 children 组合方式依然可用，适合需要完全自定义结构的场景。`));let T=i(`h2`,d);n(d,T),n(T,e(`何时使用`));let D=i(`ul`,d);n(d,D);let O=i(`li`,D);n(D,O),n(O,e(`需要展示网页、管理台、嵌入式预览或静态产品截图，并且希望外层有统一的浏览器语义。`));let k=i(`li`,D);n(D,k),n(k,e(`希望快速落一个带地址栏的浏览器框，用少量 props 搭出完整演示。`));let A=i(`li`,D);n(D,A),n(A,e(`需要保留对工具栏和内容区的完全控制，继续使用原始组合模式。`));let j=a(`rue:component:anchor`);n(d,j),o(()=>{let e=v(P,{title:`推荐用法`,summary:`直接通过 url、toolbarEnd、contentClassName 等快捷 props 组出一个完整浏览器预览。`,tab:u,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(N,{bordered:!0,background:!0,url:`https://app.ruejs.org/workspaces/demo`,toolbarEnd:x(p,{children:[S(`span`,{className:`badge badge-success badge-sm`,children:`LIVE`}),S(`span`,{className:`badge badge-ghost badge-sm`,children:`v0.15`})]}),contentClassName:`h-[22rem] bg-base-100`,children:x(`div`,{className:`grid h-full md:grid-cols-[15rem_minmax(0,1fr)]`,children:[x(`aside`,{className:`border-r border-base-300 bg-base-200/35 p-4`,children:[S(`div`,{className:`mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Workspace`}),x(`div`,{className:`space-y-2 text-sm`,children:[S(`div`,{className:`rounded-box bg-primary/10 px-3 py-2 font-medium text-primary`,children:`Overview`}),S(`div`,{className:`rounded-box px-3 py-2`,children:`Releases`}),S(`div`,{className:`rounded-box px-3 py-2`,children:`Assets`}),S(`div`,{className:`rounded-box px-3 py-2`,children:`Team`})]})]}),x(`main`,{className:`grid gap-4 p-4`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`flex items-center justify-between gap-3`,children:[x(`div`,{children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Current sprint`}),S(`div`,{className:`mt-1 text-lg font-semibold`,children:`Mockup Browser refresh`})]}),S(`div`,{className:`badge badge-primary badge-outline`,children:`In review`})]}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`用增强后的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。`})]}),x(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Deploys`}),S(`div`,{className:`mt-2 text-2xl font-semibold`,children:`18`})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Latency`}),S(`div`,{className:`mt-2 text-2xl font-semibold`,children:`124ms`})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Errors`}),S(`div`,{className:`mt-2 text-2xl font-semibold`,children:`0.02%`})]})]})]})]})})})}),code:`<MockupBrowser
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
</MockupBrowser>`});t(()=>g(e,d,j))});let M=a(`rue:component:anchor`);n(d,M),o(()=>{let e=v(P,{title:`browser mockup with border`,summary:`保留原有 demo，不改变旧的 children + Toolbar 组织方式。`,tab:f,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{className:`w-full border border-base-300`,"data-testid":`mockup-browser-border`,children:[S(N.Toolbar,{children:S(`div`,{className:`input`,children:`https://daisyui.com`})}),S(`div`,{className:`grid h-80 place-content-center border-t border-base-300`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center border-t border-base-300">Hello!</div>
</MockupBrowser>`});t(()=>g(e,d,M))});let I=a(`rue:component:anchor`);n(d,I),o(()=>{let e=v(P,{title:`browser mockup with background color`,summary:`保留原有背景色 demo，继续支持最原始的手写结构。`,tab:b,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{className:`w-full border border-base-300 bg-base-100`,children:[S(N.Toolbar,{children:S(`div`,{className:`input`,children:`https://daisyui.com`})}),S(`div`,{className:`grid h-80 place-content-center`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300 bg-base-100">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center">Hello!</div>
</MockupBrowser>`});t(()=>g(e,d,I))});let ae=a(`rue:component:anchor`);n(d,ae),o(()=>{let e=v(P,{title:`自定义工具栏`,summary:`Toolbar 的 start / end 插槽适合放站点标签、环境状态或次要动作。`,tab:C,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{bordered:!0,background:!0,className:`w-full`,children:[S(N.Toolbar,{start:S(`span`,{className:`badge badge-neutral badge-sm`,children:`Docs`}),end:x(p,{children:[S(`span`,{className:`badge badge-ghost badge-sm`,children:`Preview`}),S(`span`,{className:`badge badge-primary badge-sm`,children:`Share`})]}),children:S(N.AddressBar,{href:`https://ruejs.org/docs/components/mockup-browser`,prefix:S(`span`,{className:`badge badge-ghost badge-xs`,children:`GET`}),suffix:S(`span`,{className:`text-xs`,children:`public`}),children:`https://ruejs.org/docs/components/mockup-browser`})}),x(N.Content,{background:!0,padding:`md`,className:`grid gap-4 md:grid-cols-[18rem_minmax(0,1fr)]`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Outline`}),x(`div`,{className:`space-y-2 text-sm`,children:[S(`div`,{className:`font-medium text-primary`,children:`Introduction`}),S(`div`,{children:`Recommended usage`}),S(`div`,{children:`AddressBar`}),S(`div`,{children:`Content`})]})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser`}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`工具栏仍然保留原始组合能力，但通过 start / end 把常见布局槽位做得更顺手。`})]})]})]})})}),code:`<MockupBrowser bordered background className="w-full">
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
</MockupBrowser>`});t(()=>g(e,d,ae))});let oe=a(`rue:component:anchor`);n(d,oe),o(()=>{let e=v(P,{title:`地址栏状态`,summary:`AddressBar 可单独使用，并支持 success / warning / error 等状态语义。`,tab:w,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-4`,children:[x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{href:`https://preview.ruejs.org/releases/2026.05.01`,status:`success`,prefix:S(`span`,{className:`badge badge-success badge-xs`,children:`200`}),suffix:S(`span`,{className:`text-xs`,children:`Published`})})}),S(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`发布成功，可继续分享预览链接。`})]}),x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{status:`warning`,prefix:S(`span`,{className:`badge badge-warning badge-xs`,children:`302`}),suffix:S(`span`,{className:`text-xs`,children:`Redirect`}),children:`https://staging.ruejs.org/latest`})}),S(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`预览地址已重定向到最新构建。`})]}),x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{status:`error`,prefix:S(`span`,{className:`badge badge-error badge-xs`,children:`500`}),suffix:S(`span`,{className:`text-xs`,children:`Retry`}),children:`https://api.ruejs.org/workspaces/demo`})}),S(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`当前接口不可达，请稍后重试。`})]})]})}),code:`<MockupBrowser bordered>
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
</MockupBrowser>`});t(()=>g(e,d,oe))});let se=a(`rue:component:anchor`);n(d,se),o(()=>{let e=v(P,{title:`内容容器`,summary:`Content 用来统一处理上边框、背景色和内边距，避免每个 demo 都手写一遍。`,tab:ee,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{children:`https://ruejs.org/changelog`})}),x(N.Content,{background:!0,padding:`lg`,className:`grid gap-4 md:grid-cols-2`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`May`}),S(`div`,{className:`mt-2 text-base font-semibold`,children:`Component refresh`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`Mockup Browser 新增地址栏和内容区语义 API。`})]}),x(`div`,{className:`rounded-box border border-dashed border-base-300 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Next`}),S(`div`,{className:`mt-2 text-base font-semibold`,children:`Design recipes`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`用组合页展示不同布局密度和数据卡片编排方式。`})]})]})]})})}),code:`<MockupBrowser bordered className="w-full">
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
</MockupBrowser>`});t(()=>g(e,d,se))});let ce=a(`rue:component:anchor`);n(d,ce),o(()=>{let e=v(P,{title:`场景组合`,summary:`把快捷 props 和子组件混用，可以很快搭出文档、后台、嵌入式预览等组合场景。`,tab:E,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[S(N,{bordered:!0,url:`https://studio.ruejs.org/campaigns/spring-launch`,toolbarEnd:S(`span`,{className:`badge badge-accent badge-sm`,children:`Draft`}),contentClassName:`h-72 bg-base-100`,children:x(`div`,{className:`grid h-full gap-4 p-4`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-primary/8 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Campaign`}),S(`div`,{className:`mt-2 text-lg font-semibold`,children:`Spring Launch`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`在一个浏览器壳层里展示编辑后台会更接近真实产品观感。`})]}),x(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[S(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Email sequences`}),S(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Asset approvals`})]})]})}),x(N,{bordered:!0,background:!0,className:`w-full`,children:[S(N.Toolbar,{end:S(`span`,{className:`badge badge-info badge-sm`,children:`Docs`}),children:S(N.AddressBar,{prefix:S(`span`,{className:`text-xs`,children:`Search`}),children:`https://ruejs.org/components/mockup-browser`})}),S(N.Content,{padding:`md`,className:`h-72`,children:x(`div`,{className:`grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-200/35 p-4 text-sm`,children:[S(`div`,{className:`font-medium`,children:`On this page`}),x(`div`,{className:`mt-3 space-y-2 opacity-75`,children:[S(`div`,{children:`Recommended usage`}),S(`div`,{children:`Toolbar`}),S(`div`,{children:`AddressBar`}),S(`div`,{children:`Content`})]})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser API`}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。`})]})]})})]})]})})}),code:`<MockupBrowser
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
</MockupBrowser>`});t(()=>g(e,d,ce))});let L=i(`h2`,d);n(d,L),c(L,`id`,`mockup-browser-api`),n(L,e(`API`));let le=i(`p`,d);n(d,le),n(le,e(`MockupBrowser 现在支持推荐快捷模式和原始组合模式两套写法。`));let ue=i(`h3`,d);n(d,ue),n(ue,e(`MockupBrowser`));let de=a(`rue:component:anchor`);n(d,de),o(()=>{let e=v(F,{rows:te});t(()=>g(e,d,de))});let R=i(`h3`,d);n(d,R),n(R,e(`MockupBrowser.Toolbar`));let z=a(`rue:component:anchor`);n(d,z),o(()=>{let e=v(F,{rows:ne});t(()=>g(e,d,z))});let B=i(`h3`,d);n(d,B),n(B,e(`MockupBrowser.AddressBar`));let V=a(`rue:component:anchor`);n(d,V),o(()=>{let e=v(F,{rows:re});t(()=>g(e,d,V))});let H=i(`h3`,d);n(d,H),n(H,e(`MockupBrowser.Content`));let fe=a(`rue:component:anchor`);n(d,fe),o(()=>{let e=v(F,{rows:ie});t(()=>g(e,d,fe))});let U=i(`div`,d);n(d,U),_(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=i(`h3`,U);n(U,W),_(W,`mt-0 mb-3 text-base font-semibold`),n(W,e(`推荐写法对照`));let G=i(`div`,U);n(U,G),_(G,`grid gap-2 text-sm md:grid-cols-2`);let K=i(`div`,G);n(G,K);let pe=i(`code`,K);n(K,pe),n(pe,e(`url`)),n(K,e(`适合快速生成地址栏`));let q=i(`div`,G);n(G,q);let me=i(`code`,q);n(q,me),n(me,e(`contentClassName`)),n(q,e(`适合直接包裹内容区`));let J=i(`div`,G);n(G,J);let he=i(`code`,J);n(J,he),n(he,e(`Toolbar + AddressBar + Content`)),n(J,e(`适合需要细粒度控制的页面`));let Y=i(`div`,G);n(G,Y),n(Y,e(`旧的手写`));let ge=i(`code`,Y);n(Y,ge),n(ge,e(`Toolbar`)),n(Y,e(`结构仍然完全可用`));let _e=i(`h2`,d);n(d,_e),n(_e,e(`FAQ`));let ve=i(`h3`,d);n(d,ve),n(ve,e(`什么时候用快捷 props，什么时候用子组件？`));let X=i(`p`,d);n(d,X),n(X,e(`如果只是想快速放一个带地址栏的浏览器框，优先用`));let ye=i(`code`,X);n(X,ye),n(ye,e(`url`)),n(X,e(`、`));let be=i(`code`,X);n(X,be),n(be,e(`toolbarEnd`)),n(X,e(`、`));let xe=i(`code`,X);n(X,xe),n(xe,e(`contentClassName`)),n(X,e(`这些快捷 props。需要更细的布局控制时，再切到`));let Se=l(X);n(X,Se),m(Se,` `);let Ce=i(`code`,X);n(X,Ce),n(Ce,e(`MockupBrowser.Toolbar`)),n(X,e(`、`));let we=i(`code`,X);n(X,we),n(we,e(`MockupBrowser.AddressBar`)),n(X,e(`和`));let Te=l(X);n(X,Te),m(Te,` `);let Ee=i(`code`,X);n(X,Ee),n(Ee,e(`MockupBrowser.Content`)),n(X,e(`。`));let De=i(`h3`,d);n(d,De),n(De,e(`原来的 demo 写法会失效吗？`));let Z=i(`p`,d);n(d,Z),n(Z,e(`不会。原来的`));let Oe=i(`code`,Z);n(Z,Oe),n(Oe,e(`children + MockupBrowser.Toolbar`)),n(Z,e(`结构仍然保留；当前页面里的 “browser mockup with border” 和 “browser mockup with background color” 就是旧写法的直接保留版。`));let Q=i(`h3`,d);n(d,Q),n(Q,e(`Content 和根节点上的 contentClassName 有什么区别？`));let $=i(`p`,d);n(d,$);let ke=i(`code`,$);n($,ke),n(ke,e(`contentClassName`));let Ae=l($);n($,Ae),m(Ae,` `),n($,e(`适合推荐写法，直接让根组件帮你包一层内容区；如果你还需要分别控制`));let je=i(`code`,$);n($,je),n(je,e(`padding`)),n($,e(`、`));let Me=i(`code`,$);n($,Me),n(Me,e(`background`)),n($,e(`或自己拆更多节点，就更适合直接使用`));let Ne=l($);n($,Ne),m(Ne,` `);let Pe=i(`code`,$);return n($,Pe),n(Pe,e(`MockupBrowser.Content`)),n($,e(`。`)),r})}),h,y),h})};export{I as default};