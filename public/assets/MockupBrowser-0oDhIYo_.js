import{Cn as e,Ct as t,Lt as n,Mt as r,Nt as i,Tt as a,dt as o,ft as s,ht as c,mt as l,pn as u,pt as d,s as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{n as S,t as C}from"./src-CCTNpCXV.js";import{t as w}from"./tabs-B1XdBEJF.js";import{r as T}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as ee}from"./preview-test-gate-DVT0twjZ.js";var E=(...e)=>e.filter(Boolean).join(` `),D=(e=`default`)=>{switch(e){case`success`:return`border-success/30 bg-success/10 text-success`;case`warning`:return`border-warning/30 bg-warning/10 text-warning`;case`error`:return`border-error/30 bg-error/10 text-error`;default:return`border-base-300 bg-base-200/60`}},O=(e=`none`)=>{switch(e){case`sm`:return`p-3`;case`md`:return`p-4`;case`lg`:return`p-6`;default:return``}},k=e=>g(t=>{let n=s(),r=o(`rue:slot:anchor`);p(n,r),m(()=>{let t=e.prefix==null?``:g(()=>{let t=s(),n=d(`span`,t);p(t,n),a(n,`shrink-0 opacity-55`);let r=o(`rue:slot:anchor`);return p(n,r),m(()=>{let t=e.prefix;h(()=>_(t,n,r))}),t});h(()=>_(t,n,r))});let i=d(`span`,n);p(n,i),a(i,`min-w-0 flex-1 truncate`);let c=o(`rue:children:anchor`);p(i,c),m(()=>{let t=e.children;h(()=>_(t,i,c))});let l=o(`rue:slot:anchor`);return p(n,l),m(()=>{let t=e.suffix==null?``:g(()=>{let t=s(),n=d(`span`,t);p(t,n),a(n,`shrink-0 opacity-55`);let r=o(`rue:slot:anchor`);return p(n,r),m(()=>{let t=e.suffix;h(()=>_(t,n,r))}),t});h(()=>_(t,n,l))}),n}),A=r=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:c,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:f,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,content:C,mergedClassName:w}=y(`useSetup:0:0`,()=>e(()=>{let{href:e,prefix:t,suffix:i,interactive:a,status:o,className:s,children:c,...l}=r;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,rest:l,content:y(`computed:1:0`,()=>n(()=>r.children??r.href)),mergedClassName:y(`computed:1:1`,()=>n(()=>E(`input input-sm flex h-8 w-full min-w-0 items-center gap-2 text-sm`,D(r.status===void 0?`default`:r.status),r.className)))}}));return(r.interactive||r.href)&&typeof r.href==`string`?g(e=>{let n=d(`a`,e);m(()=>{i(n,S)}),m(()=>{t(n,`href`,String(r.href))}),m(()=>{a(n,w.get())});let s=o(`rue:component:anchor`);return p(n,s),m(()=>{let e=v(k,{prefix:r.prefix,suffix:r.suffix,children:C.get()});h(()=>_(e,n,s))}),n}):g(e=>{let t=d(`div`,e);m(()=>{i(t,S)}),m(()=>{a(t,w.get())});let n=o(`rue:component:anchor`);return p(t,n),m(()=>{let e=v(k,{prefix:r.prefix,suffix:r.suffix,children:C.get()});h(()=>_(e,t,n))}),t})},j=t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:s,__rue_rest_omit_3:c,__rue_rest_omit_4:l,rest:u}=y(`useSetup:0:0:dup1`,()=>e(()=>{let{bordered:e,background:n,padding:r,className:i,children:a,...o}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o}}));return g(e=>{let n=d(`div`,e);m(()=>{i(n,u)}),m(()=>{a(n,E((t.bordered===void 0||t.bordered)&&`border-t border-base-300`,t.background&&`bg-base-100`,O(t.padding===void 0?`none`:t.padding),t.className))});let r=o(`rue:children:anchor`);return p(n,r),m(()=>{let e=t.children;h(()=>_(e,n,r))}),n})},M=t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:c,__rue_rest_omit_3:u,rest:f}=y(`useSetup:0:0:dup2`,()=>e(()=>{let{start:e,end:n,className:r,children:i,...a}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,rest:a}}));return g(e=>{let n=d(`div`,e);m(()=>{i(n,f)}),m(()=>{a(n,E(`mockup-browser-toolbar gap-3`,t.className))});let r=o(`rue:slot:anchor`);p(n,r),m(()=>{let e=t.start==null?``:g(()=>{let e=s(),n=d(`div`,e);p(e,n),a(n,`flex shrink-0 items-center gap-2`);let r=o(`rue:slot:anchor`);return p(n,r),m(()=>{let e=t.start;h(()=>_(e,n,r))}),e});h(()=>_(e,n,r))}),p(n,l(` `));let c=o(`rue:slot:anchor`);p(n,c),m(()=>{let e=t.children==null?``:g(()=>{let e=s(),n=d(`div`,e);p(e,n),a(n,`flex min-w-0 flex-1 items-center`);let r=o(`rue:children:anchor`);return p(n,r),m(()=>{let e=t.children;h(()=>_(e,n,r))}),e});h(()=>_(e,n,c))}),p(n,l(` `));let u=o(`rue:slot:anchor`);return p(n,u),m(()=>{let e=t.end==null?``:g(()=>{let e=s(),n=d(`div`,e);p(e,n),a(n,`flex shrink-0 items-center gap-2`);let r=o(`rue:slot:anchor`);return p(n,r),m(()=>{let e=t.end;h(()=>_(e,n,r))}),e});h(()=>_(e,n,u))}),n})},N=Object.assign(t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:f,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,__rue_rest_omit_8:w,__rue_rest_omit_9:T,__rue_rest_omit_10:ee,__rue_rest_omit_11:D,__rue_rest_omit_12:O,__rue_rest_omit_13:k,rest:N,shouldRenderToolbar:P,shouldWrapContent:F}=y(`useSetup:0:0:dup3`,()=>e(()=>{let{bordered:e,background:r,showToolbar:i,url:a,toolbar:o,toolbarStart:s,toolbarEnd:c,toolbarClassName:l,contentClassName:u,contentBordered:d,contentBackground:f,contentPadding:p,className:m,children:h,...g}=t,_=y(`computed:1:2`,()=>n(()=>t.showToolbar!==!1&&(t.toolbar!=null||t.url!=null||t.toolbarStart!=null||t.toolbarEnd!=null||t.toolbarClassName!=null))),v=_;return{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,rest:g,shouldRenderToolbar:_,shouldWrapContent:y(`computed:1:3`,()=>n(()=>v.get()||t.contentClassName!=null||t.contentBordered!=null||t.contentBackground!=null||t.contentPadding!=null))}}));return g(e=>{let n=d(`div`,e);m(()=>{i(n,N)}),m(()=>{a(n,E(`mockup-browser`,t.bordered&&`border border-base-300`,t.background&&`bg-base-100`,t.className))});let r=o(`rue:slot:anchor`);p(n,r),m(()=>{let e=P.get()?g(()=>{let e=s(),n=o(`rue:component:anchor`);p(e,n);let r=g(()=>{let e=s(),n=o(`rue:slot:anchor`);return p(e,n),m(()=>{let r=t.toolbar==null?t.url==null?``:g(()=>{let e=s(),n=o(`rue:component:anchor`);return p(e,n),m(()=>{let r=v(A,{href:typeof t.url==`string`?t.url:void 0,children:t.url});h(()=>_(r,e,n))}),e}):t.toolbar;h(()=>_(r,e,n))}),e});return m(()=>{let i=v(M,{className:t.toolbarClassName,start:t.toolbarStart,end:t.toolbarEnd,children:r});h(()=>_(i,e,n))}),e}):``;h(()=>_(e,n,r))}),p(n,l(` `));let c=o(`rue:slot:anchor`);return p(n,c),m(()=>{let e=F.get()?g(()=>{let e=s(),n=o(`rue:component:anchor`);return p(e,n),m(()=>{let r=v(j,{className:t.contentClassName,bordered:t.contentBordered,background:t.contentBackground,padding:t.contentPadding,children:t.children});h(()=>_(r,e,n))}),e}):t.children;h(()=>_(e,n,c))}),n})},{Toolbar:M,AddressBar:A,Content:j}),P=e=>g(t=>{let n=d(`div`,t);a(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=d(`div`,n);p(n,r),a(r,`flex flex-wrap items-start justify-between gap-3`);let i=d(`div`,r);p(r,i);let c=d(`h2`,i);p(i,c),a(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`),p(c,l(`# `));let u=o(`rue:slot:anchor`);p(c,u),m(()=>{let t=e.title;h(()=>_(t,c,u))});let f=o(`rue:slot:anchor`);p(i,f),m(()=>{let t=e.summary?g(()=>{let t=s(),n=d(`p`,t);p(t,n),a(n,`m-0 text-sm opacity-70`);let r=o(`rue:slot:anchor`);return p(n,r),m(()=>{let t=e.summary;h(()=>_(t,n,r))}),t}):``;h(()=>_(t,i,f))});let y=o(`rue:component:anchor`);p(n,y),m(()=>{let t=v(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>_(t,n,y))});let b=o(`rue:slot:anchor`);return p(n,b),m(()=>{let t=e.tab.value===`preview`?ee(e.title,e.preview):g(()=>{let t=s(),n=o(`rue:component:anchor`);return p(t,n),m(()=>{let r=v(x,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>_(r,t,n))}),t});h(()=>_(t,n,b))}),n}),F=e=>g(n=>{let r=d(`div`,n);a(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=d(`table`,r);p(r,i),a(i,`table table-zebra`);let c=d(`thead`,i);p(i,c);let u=d(`tr`,c);p(c,u);let f=d(`th`,u);p(u,f),p(f,l(`属性`));let v=d(`th`,u);p(u,v),p(v,l(`说明`));let y=d(`th`,u);p(u,y),p(y,l(`类型`));let x=d(`th`,u);p(u,x),p(x,l(`默认值`));let S=d(`tbody`,i);p(i,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);p(S,C),p(S,w);let T=new Map;return m(()=>{T=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,a)=>{_(g(()=>{let n=s(),r=d(`tr`,n);p(n,r),m(()=>{t(r,`key`,String(e.prop))});let i=d(`td`,r);p(r,i);let a=d(`code`,i);p(i,a);let c=o(`rue:slot:anchor`);p(a,c),m(()=>{let t=e.prop;h(()=>_(t,a,c))});let l=d(`td`,r);p(r,l);let u=o(`rue:slot:anchor`);p(l,u),m(()=>{let t=e.description;h(()=>_(t,l,u))});let f=d(`td`,r);p(r,f);let g=d(`code`,f);p(f,g);let v=o(`rue:slot:anchor`);p(g,v),m(()=>{let t=e.type;h(()=>_(t,g,v))});let y=d(`td`,r);p(r,y);let b=d(`code`,y);p(y,b);let x=o(`rue:slot:anchor`);return p(b,x),m(()=>{let t=e.defaultValue;h(()=>_(t,b,x))}),n}),n,r)}})}),r}),te=[{prop:`bordered`,description:`为浏览器外框追加边框`,type:`boolean`,defaultValue:`false`},{prop:`background`,description:`为外层容器追加底色`,type:`boolean`,defaultValue:`false`},{prop:`showToolbar`,description:`控制是否渲染快捷工具栏`,type:`boolean`,defaultValue:`true`},{prop:`url`,description:`快捷生成地址栏内容；适合推荐用法`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`自定义快捷工具栏主体；通常与 toolbarStart / toolbarEnd 配合`,type:`any`,defaultValue:`-`},{prop:`toolbarStart`,description:`快捷工具栏左侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarEnd`,description:`快捷工具栏右侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarClassName`,description:`快捷工具栏附加样式`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`快捷内容区附加样式；设置后会自动包裹内容区`,type:`string`,defaultValue:`-`},{prop:`contentBordered`,description:`快捷内容区是否带上边框`,type:`boolean`,defaultValue:`true`},{prop:`contentBackground`,description:`快捷内容区是否带背景色`,type:`boolean`,defaultValue:`false`},{prop:`contentPadding`,description:`快捷内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`}],ne=[{prop:`start`,description:`工具栏左侧内容`,type:`any`,defaultValue:`-`},{prop:`end`,description:`工具栏右侧内容`,type:`any`,defaultValue:`-`},{prop:`children`,description:`工具栏主体内容，通常放地址栏`,type:`any`,defaultValue:`-`},{prop:`className`,description:`工具栏附加样式`,type:`string`,defaultValue:`-`}],re=[{prop:`href`,description:`地址链接；传入后默认渲染为 a`,type:`string`,defaultValue:`-`},{prop:`prefix`,description:`地址栏前缀内容，例如标签或图标`,type:`any`,defaultValue:`-`},{prop:`suffix`,description:`地址栏后缀内容，例如状态或动作`,type:`any`,defaultValue:`-`},{prop:`interactive`,description:`强制按可交互链接样式输出`,type:`boolean`,defaultValue:`false`},{prop:`status`,description:`地址栏状态色`,type:`'default' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`}],ie=[{prop:`bordered`,description:`内容区上边框`,type:`boolean`,defaultValue:`true`},{prop:`background`,description:`内容区背景色`,type:`boolean`,defaultValue:`false`},{prop:`padding`,description:`内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`},{prop:`className`,description:`内容区附加样式`,type:`string`,defaultValue:`-`}],I=()=>{let{tabRecommended:n,tabBorder:i,tabBackground:b,tabToolbar:x,tabAddressBar:w,tabContent:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>e(()=>({tabRecommended:y(`ref:1:0`,()=>u(`preview`)),tabBorder:y(`ref:1:1`,()=>u(`preview`)),tabBackground:y(`ref:1:2`,()=>u(`preview`)),tabToolbar:y(`ref:1:3`,()=>u(`preview`)),tabAddressBar:y(`ref:1:4`,()=>u(`preview`)),tabContent:y(`ref:1:5`,()=>u(`preview`)),tabRecipes:y(`ref:1:6`,()=>u(`preview`))})));return g(e=>{let u=s(),y=o(`rue:component:anchor`);return p(u,y),_(v(T,{children:g(()=>{let e=s(),u=d(`div`,e);p(e,u),a(u,`max-w-none prose prose-sm md:prose-base`);let g=d(`h1`,u);p(u,g),p(g,l(`Mockup Browser 浏览器外框`));let y=d(`p`,u);p(u,y),a(y,`text-sm mt-3 mb-3`),p(y,l(`MockupBrowser 使用 Rue 当前的浏览器外框视觉，同时补上推荐写法所需的地址栏、内容区和快捷工具栏 API。 基础 children 组合方式依然可用，适合需要完全自定义结构的场景。`));let T=d(`h2`,u);p(u,T),p(T,l(`何时使用`));let D=d(`ul`,u);p(u,D);let O=d(`li`,D);p(D,O),p(O,l(`需要展示网页、管理台、嵌入式预览或静态产品截图，并且希望外层有统一的浏览器语义。`));let k=d(`li`,D);p(D,k),p(k,l(`希望快速落一个带地址栏的浏览器框，用少量 props 搭出完整演示。`));let A=d(`li`,D);p(D,A),p(A,l(`需要保持对工具栏和内容区的完全控制，可以使用基础组合模式。`));let j=o(`rue:component:anchor`);p(u,j),m(()=>{let e=v(P,{title:`推荐用法`,summary:`直接通过 url、toolbarEnd、contentClassName 等快捷 props 组出一个完整浏览器预览。`,tab:n,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body`,children:C(N,{bordered:!0,background:!0,url:`https://app.ruejs.org/workspaces/demo`,toolbarEnd:S(f,{children:[C(`span`,{className:`badge badge-success badge-sm`,children:`LIVE`}),C(`span`,{className:`badge badge-ghost badge-sm`,children:`v0.15`})]}),contentClassName:`h-[22rem] bg-base-100`,children:S(`div`,{className:`grid h-full md:grid-cols-[15rem_minmax(0,1fr)]`,children:[S(`aside`,{className:`border-r border-base-300 bg-base-200/35 p-4`,children:[C(`div`,{className:`mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Workspace`}),S(`div`,{className:`space-y-2 text-sm`,children:[C(`div`,{className:`rounded-box bg-primary/10 px-3 py-2 font-medium text-primary`,children:`Overview`}),C(`div`,{className:`rounded-box px-3 py-2`,children:`Releases`}),C(`div`,{className:`rounded-box px-3 py-2`,children:`Assets`}),C(`div`,{className:`rounded-box px-3 py-2`,children:`Team`})]})]}),S(`main`,{className:`grid gap-4 p-4`,children:[S(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`flex items-center justify-between gap-3`,children:[S(`div`,{children:[C(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Current sprint`}),C(`div`,{className:`mt-1 text-lg font-semibold`,children:`Mockup Browser refresh`})]}),C(`div`,{className:`badge badge-primary badge-outline`,children:`In review`})]}),C(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`用语义化的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。`})]}),S(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[S(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Deploys`}),C(`div`,{className:`mt-2 text-2xl font-semibold`,children:`18`})]}),S(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Latency`}),C(`div`,{className:`mt-2 text-2xl font-semibold`,children:`124ms`})]}),S(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Errors`}),C(`div`,{className:`mt-2 text-2xl font-semibold`,children:`0.02%`})]})]})]})]})})})}),code:`<MockupBrowser
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
          用语义化的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。
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
</MockupBrowser>`});h(()=>_(e,u,j))});let M=o(`rue:component:anchor`);p(u,M),m(()=>{let e=v(P,{title:`browser mockup with border`,summary:`展示基础示例，不改变基础的 children + Toolbar 组织方式。`,tab:i,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body`,children:S(N,{className:`w-full border border-base-300`,"data-testid":`mockup-browser-border`,children:[C(N.Toolbar,{children:C(`div`,{className:`input`,children:`https://daisyui.com`})}),C(`div`,{className:`grid h-80 place-content-center border-t border-base-300`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center border-t border-base-300">Hello!</div>
</MockupBrowser>`});h(()=>_(e,u,M))});let I=o(`rue:component:anchor`);p(u,I),m(()=>{let e=v(P,{title:`browser mockup with background color`,summary:`展示基础背景色示例，支持最基础的手写结构。`,tab:b,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body`,children:S(N,{className:`w-full border border-base-300 bg-base-100`,children:[C(N.Toolbar,{children:C(`div`,{className:`input`,children:`https://daisyui.com`})}),C(`div`,{className:`grid h-80 place-content-center`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300 bg-base-100">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center">Hello!</div>
</MockupBrowser>`});h(()=>_(e,u,I))});let ae=o(`rue:component:anchor`);p(u,ae),m(()=>{let e=v(P,{title:`自定义工具栏`,summary:`Toolbar 的 start / end 插槽适合放站点标签、环境状态或次要动作。`,tab:x,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body`,children:S(N,{bordered:!0,background:!0,className:`w-full`,children:[C(N.Toolbar,{start:C(`span`,{className:`badge badge-neutral badge-sm`,children:`Docs`}),end:S(f,{children:[C(`span`,{className:`badge badge-ghost badge-sm`,children:`Preview`}),C(`span`,{className:`badge badge-primary badge-sm`,children:`Share`})]}),children:C(N.AddressBar,{href:`https://ruejs.org/docs/components/mockup-browser`,prefix:C(`span`,{className:`badge badge-ghost badge-xs`,children:`GET`}),suffix:C(`span`,{className:`text-xs`,children:`public`}),children:`https://ruejs.org/docs/components/mockup-browser`})}),S(N.Content,{background:!0,padding:`md`,className:`grid gap-4 md:grid-cols-[18rem_minmax(0,1fr)]`,children:[S(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[C(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Outline`}),S(`div`,{className:`space-y-2 text-sm`,children:[C(`div`,{className:`font-medium text-primary`,children:`Introduction`}),C(`div`,{children:`Recommended usage`}),C(`div`,{children:`AddressBar`}),C(`div`,{children:`Content`})]})]}),S(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[C(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser`}),C(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`工具栏仍然展示基础组合能力，但通过 start / end 把常见布局槽位做得更顺手。`})]})]})]})})}),code:`<MockupBrowser bordered background className="w-full">
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
        工具栏仍然展示基础组合能力，但通过 start / end 把常见布局槽位做得更顺手。
      </p>
    </div>
  </MockupBrowser.Content>
</MockupBrowser>`});h(()=>_(e,u,ae))});let oe=o(`rue:component:anchor`);p(u,oe),m(()=>{let e=v(P,{title:`地址栏状态`,summary:`AddressBar 可单独使用，并支持 success / warning / error 等状态语义。`,tab:w,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body grid gap-4`,children:[S(N,{bordered:!0,className:`w-full`,children:[C(N.Toolbar,{children:C(N.AddressBar,{href:`https://preview.ruejs.org/releases/2026.05.01`,status:`success`,prefix:C(`span`,{className:`badge badge-success badge-xs`,children:`200`}),suffix:C(`span`,{className:`text-xs`,children:`Published`})})}),C(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`发布成功，可继续分享预览链接。`})]}),S(N,{bordered:!0,className:`w-full`,children:[C(N.Toolbar,{children:C(N.AddressBar,{status:`warning`,prefix:C(`span`,{className:`badge badge-warning badge-xs`,children:`302`}),suffix:C(`span`,{className:`text-xs`,children:`Redirect`}),children:`https://staging.ruejs.org/latest`})}),C(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`预览地址已重定向到最新构建。`})]}),S(N,{bordered:!0,className:`w-full`,children:[C(N.Toolbar,{children:C(N.AddressBar,{status:`error`,prefix:C(`span`,{className:`badge badge-error badge-xs`,children:`500`}),suffix:C(`span`,{className:`text-xs`,children:`Retry`}),children:`https://api.ruejs.org/workspaces/demo`})}),C(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`当前接口不可达，请稍后重试。`})]})]})}),code:`<MockupBrowser bordered>
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
</MockupBrowser>`});h(()=>_(e,u,oe))});let se=o(`rue:component:anchor`);p(u,se),m(()=>{let e=v(P,{title:`内容容器`,summary:`Content 用来统一处理上边框、背景色和内边距，避免每个示例 都手写一遍。`,tab:ee,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body`,children:S(N,{bordered:!0,className:`w-full`,children:[C(N.Toolbar,{children:C(N.AddressBar,{children:`https://ruejs.org/changelog`})}),S(N.Content,{background:!0,padding:`lg`,className:`grid gap-4 md:grid-cols-2`,children:[S(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`May`}),C(`div`,{className:`mt-2 text-base font-semibold`,children:`Component refresh`}),C(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`Mockup Browser 新增地址栏和内容区语义 API。`})]}),S(`div`,{className:`rounded-box border border-dashed border-base-300 p-4`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Next`}),C(`div`,{className:`mt-2 text-base font-semibold`,children:`Design recipes`}),C(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`用组合页展示不同布局密度和数据卡片编排方式。`})]})]})]})})}),code:`<MockupBrowser bordered className="w-full">
  <MockupBrowser.Toolbar>
    <MockupBrowser.AddressBar>https://ruejs.org/changelog</MockupBrowser.AddressBar>
  </MockupBrowser.Toolbar>
  <MockupBrowser.Content background padding="lg" className="grid gap-4 md:grid-cols-2">
    <div className="rounded-box border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.24em] opacity-60">May</div>
      <div className="mt-2 text-base font-semibold">Component refresh</div>
      <p className="mt-2 mb-0 text-sm opacity-75">Mockup Browser 提供地址栏和内容区语义 API。</p>
    </div>
    <div className="rounded-box border border-dashed border-base-300 p-4">
      <div className="text-xs uppercase tracking-[0.24em] opacity-60">Next</div>
      <div className="mt-2 text-base font-semibold">Design recipes</div>
      <p className="mt-2 mb-0 text-sm opacity-75">用组合页展示不同布局密度和数据卡片编排方式。</p>
    </div>
  </MockupBrowser.Content>
</MockupBrowser>`});h(()=>_(e,u,se))});let ce=o(`rue:component:anchor`);p(u,ce),m(()=>{let e=v(P,{title:`场景组合`,summary:`把快捷 props 和子组件混用，可以很快搭出文档、后台、嵌入式预览等组合场景。`,tab:E,preview:()=>C(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body`,children:S(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[C(N,{bordered:!0,url:`https://studio.ruejs.org/campaigns/spring-launch`,toolbarEnd:C(`span`,{className:`badge badge-accent badge-sm`,children:`Draft`}),contentClassName:`h-72 bg-base-100`,children:S(`div`,{className:`grid h-full gap-4 p-4`,children:[S(`div`,{className:`rounded-box border border-base-300 bg-primary/8 p-4`,children:[C(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Campaign`}),C(`div`,{className:`mt-2 text-lg font-semibold`,children:`Spring Launch`}),C(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`在一个浏览器壳层里展示编辑后台会更接近真实产品观感。`})]}),S(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[C(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Email sequences`}),C(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Asset approvals`})]})]})}),S(N,{bordered:!0,background:!0,className:`w-full`,children:[C(N.Toolbar,{end:C(`span`,{className:`badge badge-info badge-sm`,children:`Docs`}),children:C(N.AddressBar,{prefix:C(`span`,{className:`text-xs`,children:`Search`}),children:`https://ruejs.org/components/mockup-browser`})}),C(N.Content,{padding:`md`,className:`h-72`,children:S(`div`,{className:`grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]`,children:[S(`div`,{className:`rounded-box border border-base-300 bg-base-200/35 p-4 text-sm`,children:[C(`div`,{className:`font-medium`,children:`On this page`}),S(`div`,{className:`mt-3 space-y-2 opacity-75`,children:[C(`div`,{children:`Recommended usage`}),C(`div`,{children:`Toolbar`}),C(`div`,{children:`AddressBar`}),C(`div`,{children:`Content`})]})]}),S(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[C(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser API`}),C(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。`})]})]})})]})]})})}),code:`<MockupBrowser
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
</MockupBrowser>`});h(()=>_(e,u,ce))});let L=d(`h2`,u);p(u,L),t(L,`id`,`mockup-browser-api`),p(L,l(`API`));let le=d(`p`,u);p(u,le),p(le,l(`MockupBrowser 现在支持推荐快捷模式和基础组合模式两套写法。`));let ue=d(`h3`,u);p(u,ue),p(ue,l(`MockupBrowser`));let de=o(`rue:component:anchor`);p(u,de),m(()=>{let e=v(F,{rows:te});h(()=>_(e,u,de))});let R=d(`h3`,u);p(u,R),p(R,l(`MockupBrowser.Toolbar`));let z=o(`rue:component:anchor`);p(u,z),m(()=>{let e=v(F,{rows:ne});h(()=>_(e,u,z))});let B=d(`h3`,u);p(u,B),p(B,l(`MockupBrowser.AddressBar`));let V=o(`rue:component:anchor`);p(u,V),m(()=>{let e=v(F,{rows:re});h(()=>_(e,u,V))});let H=d(`h3`,u);p(u,H),p(H,l(`MockupBrowser.Content`));let fe=o(`rue:component:anchor`);p(u,fe),m(()=>{let e=v(F,{rows:ie});h(()=>_(e,u,fe))});let U=d(`div`,u);p(u,U),a(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=d(`h3`,U);p(U,W),a(W,`mt-0 mb-3 text-base font-semibold`),p(W,l(`推荐写法对照`));let G=d(`div`,U);p(U,G),a(G,`grid gap-2 text-sm md:grid-cols-2`);let K=d(`div`,G);p(G,K);let pe=d(`code`,K);p(K,pe),p(pe,l(`url`)),p(K,l(`适合快速生成地址栏`));let q=d(`div`,G);p(G,q);let me=d(`code`,q);p(q,me),p(me,l(`contentClassName`)),p(q,l(`适合直接包裹内容区`));let J=d(`div`,G);p(G,J);let he=d(`code`,J);p(J,he),p(he,l(`Toolbar + AddressBar + Content`)),p(J,l(`适合需要细粒度控制的页面`));let Y=d(`div`,G);p(G,Y),p(Y,l(`基础的手写`));let ge=d(`code`,Y);p(Y,ge),p(ge,l(`Toolbar`)),p(Y,l(`结构仍然完全可用`));let _e=d(`h2`,u);p(u,_e),p(_e,l(`FAQ`));let ve=d(`h3`,u);p(u,ve),p(ve,l(`什么时候用快捷 props，什么时候用子组件？`));let X=d(`p`,u);p(u,X),p(X,l(`如果只是想快速放一个带地址栏的浏览器框，优先用`));let ye=d(`code`,X);p(X,ye),p(ye,l(`url`)),p(X,l(`、`));let be=d(`code`,X);p(X,be),p(be,l(`toolbarEnd`)),p(X,l(`、`));let xe=d(`code`,X);p(X,xe),p(xe,l(`contentClassName`)),p(X,l(`这些快捷 props。需要更细的布局控制时，再切到`));let Se=c(X);p(X,Se),r(Se,` `);let Ce=d(`code`,X);p(X,Ce),p(Ce,l(`MockupBrowser.Toolbar`)),p(X,l(`、`));let we=d(`code`,X);p(X,we),p(we,l(`MockupBrowser.AddressBar`)),p(X,l(`和`));let Te=c(X);p(X,Te),r(Te,` `);let Ee=d(`code`,X);p(X,Ee),p(Ee,l(`MockupBrowser.Content`)),p(X,l(`。`));let De=d(`h3`,u);p(u,De),p(De,l(`基础示例 写法会失效吗？`));let Z=d(`p`,u);p(u,Z),p(Z,l(`不会。基础的`));let Oe=d(`code`,Z);p(Z,Oe),p(Oe,l(`children + MockupBrowser.Toolbar`)),p(Z,l(`结构仍然提供；当前页面里的 “browser mockup with border” 和 “browser mockup with background color” 就是基础写法的直接保持版。`));let Q=d(`h3`,u);p(u,Q),p(Q,l(`Content 和根节点上的 contentClassName 有什么区别？`));let $=d(`p`,u);p(u,$);let ke=d(`code`,$);p($,ke),p(ke,l(`contentClassName`));let Ae=c($);p($,Ae),r(Ae,` `),p($,l(`适合推荐写法，直接让根组件帮你包一层内容区；如果你还需要分别控制`));let je=d(`code`,$);p($,je),p(je,l(`padding`)),p($,l(`、`));let Me=d(`code`,$);p($,Me),p(Me,l(`background`)),p($,l(`或自己拆更多节点，就更适合直接使用`));let Ne=c($);p($,Ne),r(Ne,` `);let Pe=d(`code`,$);return p($,Pe),p(Pe,l(`MockupBrowser.Content`)),p($,l(`。`)),e})}),u,y),u})};export{I as default};