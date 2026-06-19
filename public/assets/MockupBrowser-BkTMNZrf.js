import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,gt as s,ht as c,l,lt as u,nt as d,o as f,p,st as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as x,i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as C}from"./Code-BIscIyEp.js";import{t as w}from"./tabs-CZWMQq5i.js";import{r as T}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as ee}from"./preview-test-gate-DumhDfV7.js";var E=(...e)=>e.filter(Boolean).join(` `),D=(e=`default`)=>{switch(e){case`success`:return`border-success/30 bg-success/10 text-success`;case`warning`:return`border-warning/30 bg-warning/10 text-warning`;case`error`:return`border-error/30 bg-error/10 text-error`;default:return`border-base-300 bg-base-200/60`}},O=(e=`none`)=>{switch(e){case`sm`:return`p-3`;case`md`:return`p-4`;case`lg`:return`p-6`;default:return``}},k=a=>l(s=>{let c=e(),d=t(`rue:slot:anchor`);i(c,d),n(()=>{let s=a.prefix==null?``:l(()=>{let s=e(),c=o(`span`,s);i(s,c),u(c,`shrink-0 opacity-55`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.prefix;r(()=>f(e,c,l))}),s});r(()=>f(s,c,d))});let p=o(`span`,c);i(c,p),u(p,`min-w-0 flex-1 truncate`);let m=t(`rue:children:anchor`);i(p,m),n(()=>{let e=a.children;r(()=>f(e,p,m))});let h=t(`rue:slot:anchor`);return i(c,h),n(()=>{let s=a.suffix==null?``:l(()=>{let s=e(),c=o(`span`,s);i(s,c),u(c,`shrink-0 opacity-55`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.suffix;r(()=>f(e,c,l))}),s});r(()=>f(s,c,h))}),c}),A=e=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:d,__rue_rest_omit_2:p,__rue_rest_omit_3:g,__rue_rest_omit_4:v,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,content:C,mergedClassName:w}=y(`useSetup:0:0`,()=>a(()=>{let{href:t,prefix:n,suffix:r,interactive:i,status:a,className:o,children:s,...c}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,content:y(`computed:1:0`,()=>_(()=>e.children??e.href)),mergedClassName:y(`computed:1:1`,()=>_(()=>E(`input input-sm flex h-8 w-full min-w-0 items-center gap-2 text-sm`,D(e.status===void 0?`default`:e.status),e.className)))}}));return(e.interactive||e.href)&&typeof e.href==`string`?l(a=>{let c=o(`a`,a);n(()=>{s(c,S)}),n(()=>{m(c,`href`,String(e.href))}),n(()=>{u(c,w.get())});let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let t=h(k,{prefix:e.prefix,suffix:e.suffix,children:C.get()});r(()=>f(t,c,l))}),c}):l(a=>{let c=o(`div`,a);n(()=>{s(c,S)}),n(()=>{u(c,w.get())});let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let t=h(k,{prefix:e.prefix,suffix:e.suffix,children:C.get()});r(()=>f(t,c,l))}),c})},j=e=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:d,__rue_rest_omit_2:p,__rue_rest_omit_3:m,__rue_rest_omit_4:h,rest:g}=y(`useSetup:0:0:dup1`,()=>a(()=>{let{bordered:t,background:n,padding:r,className:i,children:a,...o}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o}}));return l(a=>{let c=o(`div`,a);n(()=>{s(c,g)}),n(()=>{u(c,E((e.bordered===void 0?!0:e.bordered)&&`border-t border-base-300`,e.background&&`bg-base-100`,O(e.padding===void 0?`none`:e.padding),e.className))});let l=t(`rue:children:anchor`);return i(c,l),n(()=>{let t=e.children;r(()=>f(t,c,l))}),c})},M=c=>{let{__rue_rest_omit_0:d,__rue_rest_omit_1:p,__rue_rest_omit_2:m,__rue_rest_omit_3:h,rest:_}=y(`useSetup:0:0:dup2`,()=>a(()=>{let{start:e,end:t,className:n,children:r,...i}=c;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,rest:i}}));return l(a=>{let d=o(`div`,a);n(()=>{s(d,_)}),n(()=>{u(d,E(`mockup-browser-toolbar gap-3`,c.className))});let p=t(`rue:slot:anchor`);i(d,p),n(()=>{let a=c.start==null?``:l(()=>{let a=e(),s=o(`div`,a);i(a,s),u(s,`flex shrink-0 items-center gap-2`);let l=t(`rue:slot:anchor`);return i(s,l),n(()=>{let e=c.start;r(()=>f(e,s,l))}),a});r(()=>f(a,d,p))}),i(d,g(` `));let m=t(`rue:slot:anchor`);i(d,m),n(()=>{let a=c.children==null?``:l(()=>{let a=e(),s=o(`div`,a);i(a,s),u(s,`flex min-w-0 flex-1 items-center`);let l=t(`rue:children:anchor`);return i(s,l),n(()=>{let e=c.children;r(()=>f(e,s,l))}),a});r(()=>f(a,d,m))}),i(d,g(` `));let h=t(`rue:slot:anchor`);return i(d,h),n(()=>{let a=c.end==null?``:l(()=>{let a=e(),s=o(`div`,a);i(a,s),u(s,`flex shrink-0 items-center gap-2`);let l=t(`rue:slot:anchor`);return i(s,l),n(()=>{let e=c.end;r(()=>f(e,s,l))}),a});r(()=>f(a,d,h))}),d})},N=Object.assign(c=>{let{__rue_rest_omit_0:d,__rue_rest_omit_1:p,__rue_rest_omit_2:m,__rue_rest_omit_3:v,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,__rue_rest_omit_8:w,__rue_rest_omit_9:T,__rue_rest_omit_10:ee,__rue_rest_omit_11:D,__rue_rest_omit_12:O,__rue_rest_omit_13:k,rest:N,shouldRenderToolbar:P,shouldWrapContent:F}=y(`useSetup:0:0:dup3`,()=>a(()=>{let{bordered:e,background:t,showToolbar:n,url:r,toolbar:i,toolbarStart:a,toolbarEnd:o,toolbarClassName:s,contentClassName:l,contentBordered:u,contentBackground:d,contentPadding:f,className:p,children:m,...h}=c,g=y(`computed:1:2`,()=>_(()=>c.showToolbar!==!1&&(c.toolbar!=null||c.url!=null||c.toolbarStart!=null||c.toolbarEnd!=null||c.toolbarClassName!=null))),v=g;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:o,__rue_rest_omit_7:s,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,rest:h,shouldRenderToolbar:g,shouldWrapContent:y(`computed:1:3`,()=>_(()=>v.get()||c.contentClassName!=null||c.contentBordered!=null||c.contentBackground!=null||c.contentPadding!=null))}}));return l(a=>{let d=o(`div`,a);n(()=>{s(d,N)}),n(()=>{u(d,E(`mockup-browser`,c.bordered&&`border border-base-300`,c.background&&`bg-base-100`,c.className))});let p=t(`rue:slot:anchor`);i(d,p),n(()=>{let a=P.get()?l(()=>{let a=e(),o=t(`rue:component:anchor`);i(a,o);let s=l(()=>{let a=e(),o=t(`rue:slot:anchor`);return i(a,o),n(()=>{let s=c.toolbar==null?c.url==null?``:l(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=h(A,{href:typeof c.url==`string`?c.url:void 0,children:c.url});r(()=>f(e,a,o))}),a}):c.toolbar;r(()=>f(s,a,o))}),a});return n(()=>{let e=h(M,{className:c.toolbarClassName,start:c.toolbarStart,end:c.toolbarEnd,children:s});r(()=>f(e,a,o))}),a}):``;r(()=>f(a,d,p))}),i(d,g(` `));let m=t(`rue:slot:anchor`);return i(d,m),n(()=>{let a=F.get()?l(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=h(j,{className:c.contentClassName,bordered:c.contentBordered,background:c.contentBackground,padding:c.contentPadding,children:c.children});r(()=>f(e,a,o))}),a}):c.children;r(()=>f(a,d,m))}),d})},{Toolbar:M,AddressBar:A,Content:j}),P=a=>l(s=>{let c=o(`div`,s);u(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=o(`div`,c);i(c,d),u(d,`flex flex-wrap items-start justify-between gap-3`);let p=o(`div`,d);i(d,p);let m=o(`h2`,p);i(p,m),u(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,g(`# `));let _=t(`rue:slot:anchor`);i(m,_),n(()=>{let e=a.title;r(()=>f(e,m,_))});let v=t(`rue:slot:anchor`);i(p,v),n(()=>{let s=a.summary?l(()=>{let s=e(),c=o(`p`,s);i(s,c),u(c,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.summary;r(()=>f(e,c,l))}),s}):``;r(()=>f(s,p,v))});let y=t(`rue:component:anchor`);i(c,y),n(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,c,y))});let b=t(`rue:slot:anchor`);return i(c,b),n(()=>{let o=a.tab.value===`preview`?ee(a.title,a.preview):l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>f(e,o,s))}),o});r(()=>f(o,c,b))}),c}),F=a=>l(s=>{let c=o(`div`,s);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=o(`table`,c);i(c,d),u(d,`table table-zebra`);let p=o(`thead`,d);i(d,p);let h=o(`tr`,p);i(p,h);let _=o(`th`,h);i(h,_),i(_,g(`属性`));let v=o(`th`,h);i(h,v),i(v,g(`说明`));let y=o(`th`,h);i(h,y),i(y,g(`类型`));let x=o(`th`,h);i(h,x),i(x,g(`默认值`));let S=o(`tbody`,d);i(d,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=b({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,c,u,d)=>{f(l(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{m(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let u=o(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>f(e,u,d))});let p=o(`td`,c);i(c,p);let h=t(`rue:slot:anchor`);i(p,h),n(()=>{let e=a.description;r(()=>f(e,p,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>f(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>f(e,b,x))}),s}),s,c)}})}),c}),te=[{prop:`bordered`,description:`为浏览器外框追加边框`,type:`boolean`,defaultValue:`false`},{prop:`background`,description:`为外层容器追加底色`,type:`boolean`,defaultValue:`false`},{prop:`showToolbar`,description:`控制是否渲染快捷工具栏`,type:`boolean`,defaultValue:`true`},{prop:`url`,description:`快捷生成地址栏内容；适合推荐用法`,type:`any`,defaultValue:`-`},{prop:`toolbar`,description:`自定义快捷工具栏主体；通常与 toolbarStart / toolbarEnd 配合`,type:`any`,defaultValue:`-`},{prop:`toolbarStart`,description:`快捷工具栏左侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarEnd`,description:`快捷工具栏右侧插槽`,type:`any`,defaultValue:`-`},{prop:`toolbarClassName`,description:`快捷工具栏附加样式`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`快捷内容区附加样式；设置后会自动包裹内容区`,type:`string`,defaultValue:`-`},{prop:`contentBordered`,description:`快捷内容区是否带上边框`,type:`boolean`,defaultValue:`true`},{prop:`contentBackground`,description:`快捷内容区是否带背景色`,type:`boolean`,defaultValue:`false`},{prop:`contentPadding`,description:`快捷内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`}],ne=[{prop:`start`,description:`工具栏左侧内容`,type:`any`,defaultValue:`-`},{prop:`end`,description:`工具栏右侧内容`,type:`any`,defaultValue:`-`},{prop:`children`,description:`工具栏主体内容，通常放地址栏`,type:`any`,defaultValue:`-`},{prop:`className`,description:`工具栏附加样式`,type:`string`,defaultValue:`-`}],re=[{prop:`href`,description:`地址链接；传入后默认渲染为 a`,type:`string`,defaultValue:`-`},{prop:`prefix`,description:`地址栏前缀内容，例如标签或图标`,type:`any`,defaultValue:`-`},{prop:`suffix`,description:`地址栏后缀内容，例如状态或动作`,type:`any`,defaultValue:`-`},{prop:`interactive`,description:`强制按可交互链接样式输出`,type:`boolean`,defaultValue:`false`},{prop:`status`,description:`地址栏状态色`,type:`'default' | 'success' | 'warning' | 'error'`,defaultValue:`'default'`}],ie=[{prop:`bordered`,description:`内容区上边框`,type:`boolean`,defaultValue:`true`},{prop:`background`,description:`内容区背景色`,type:`boolean`,defaultValue:`false`},{prop:`padding`,description:`内容区内边距`,type:`'none' | 'sm' | 'md' | 'lg'`,defaultValue:`'none'`},{prop:`className`,description:`内容区附加样式`,type:`string`,defaultValue:`-`}],I=()=>{let{tabRecommended:s,tabBorder:_,tabBackground:b,tabToolbar:C,tabAddressBar:w,tabContent:ee,tabRecipes:E}=y(`useSetup:0:0`,()=>a(()=>({tabRecommended:y(`ref:1:0`,()=>v(`preview`)),tabBorder:y(`ref:1:1`,()=>v(`preview`)),tabBackground:y(`ref:1:2`,()=>v(`preview`)),tabToolbar:y(`ref:1:3`,()=>v(`preview`)),tabAddressBar:y(`ref:1:4`,()=>v(`preview`)),tabContent:y(`ref:1:5`,()=>v(`preview`)),tabRecipes:y(`ref:1:6`,()=>v(`preview`))})));return l(a=>{let v=e(),y=t(`rue:component:anchor`);return i(v,y),f(h(T,{children:l(()=>{let a=e(),l=o(`div`,a);i(a,l),u(l,`max-w-none prose prose-sm md:prose-base`);let v=o(`h1`,l);i(l,v),i(v,g(`Mockup Browser 浏览器外框`));let y=o(`p`,l);i(l,y),u(y,`text-sm mt-3 mb-3`),i(y,g(`MockupBrowser 保留 Rue 当前的浏览器外框视觉，同时补上推荐写法所需的地址栏、内容区和快捷工具栏 API。 原始 children 组合方式依然可用，适合需要完全自定义结构的场景。`));let T=o(`h2`,l);i(l,T),i(T,g(`何时使用`));let D=o(`ul`,l);i(l,D);let O=o(`li`,D);i(D,O),i(O,g(`需要展示网页、管理台、嵌入式预览或静态产品截图，并且希望外层有统一的浏览器语义。`));let k=o(`li`,D);i(D,k),i(k,g(`希望快速落一个带地址栏的浏览器框，用少量 props 搭出完整演示。`));let A=o(`li`,D);i(D,A),i(A,g(`需要保留对工具栏和内容区的完全控制，继续使用原始组合模式。`));let j=t(`rue:component:anchor`);i(l,j),n(()=>{let e=h(P,{title:`推荐用法`,summary:`直接通过 url、toolbarEnd、contentClassName 等快捷 props 组出一个完整浏览器预览。`,tab:s,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:S(N,{bordered:!0,background:!0,url:`https://app.ruejs.org/workspaces/demo`,toolbarEnd:x(p,{children:[S(`span`,{className:`badge badge-success badge-sm`,children:`LIVE`}),S(`span`,{className:`badge badge-ghost badge-sm`,children:`v0.15`})]}),contentClassName:`h-[22rem] bg-base-100`,children:x(`div`,{className:`grid h-full md:grid-cols-[15rem_minmax(0,1fr)]`,children:[x(`aside`,{className:`border-r border-base-300 bg-base-200/35 p-4`,children:[S(`div`,{className:`mb-4 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Workspace`}),x(`div`,{className:`space-y-2 text-sm`,children:[S(`div`,{className:`rounded-box bg-primary/10 px-3 py-2 font-medium text-primary`,children:`Overview`}),S(`div`,{className:`rounded-box px-3 py-2`,children:`Releases`}),S(`div`,{className:`rounded-box px-3 py-2`,children:`Assets`}),S(`div`,{className:`rounded-box px-3 py-2`,children:`Team`})]})]}),x(`main`,{className:`grid gap-4 p-4`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`flex items-center justify-between gap-3`,children:[x(`div`,{children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Current sprint`}),S(`div`,{className:`mt-1 text-lg font-semibold`,children:`Mockup Browser refresh`})]}),S(`div`,{className:`badge badge-primary badge-outline`,children:`In review`})]}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`用增强后的快捷 API 组织浏览器壳层，同时把真实页面内容直接塞进内容区。`})]}),x(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Deploys`}),S(`div`,{className:`mt-2 text-2xl font-semibold`,children:`18`})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Latency`}),S(`div`,{className:`mt-2 text-2xl font-semibold`,children:`124ms`})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Errors`}),S(`div`,{className:`mt-2 text-2xl font-semibold`,children:`0.02%`})]})]})]})]})})})}),code:`<MockupBrowser
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
</MockupBrowser>`});r(()=>f(e,l,j))});let M=t(`rue:component:anchor`);i(l,M),n(()=>{let e=h(P,{title:`browser mockup with border`,summary:`保留原有 demo，不改变旧的 children + Toolbar 组织方式。`,tab:_,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{className:`w-full border border-base-300`,"data-testid":`mockup-browser-border`,children:[S(N.Toolbar,{children:S(`div`,{className:`input`,children:`https://daisyui.com`})}),S(`div`,{className:`grid h-80 place-content-center border-t border-base-300`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center border-t border-base-300">Hello!</div>
</MockupBrowser>`});r(()=>f(e,l,M))});let I=t(`rue:component:anchor`);i(l,I),n(()=>{let e=h(P,{title:`browser mockup with background color`,summary:`保留原有背景色 demo，继续支持最原始的手写结构。`,tab:b,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{className:`w-full border border-base-300 bg-base-100`,children:[S(N.Toolbar,{children:S(`div`,{className:`input`,children:`https://daisyui.com`})}),S(`div`,{className:`grid h-80 place-content-center`,children:`Hello!`})]})})}),code:`<MockupBrowser className="w-full border border-base-300 bg-base-100">
  <MockupBrowser.Toolbar>
    <div className="input">https://daisyui.com</div>
  </MockupBrowser.Toolbar>
  <div className="grid h-80 place-content-center">Hello!</div>
</MockupBrowser>`});r(()=>f(e,l,I))});let ae=t(`rue:component:anchor`);i(l,ae),n(()=>{let e=h(P,{title:`自定义工具栏`,summary:`Toolbar 的 start / end 插槽适合放站点标签、环境状态或次要动作。`,tab:C,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{bordered:!0,background:!0,className:`w-full`,children:[S(N.Toolbar,{start:S(`span`,{className:`badge badge-neutral badge-sm`,children:`Docs`}),end:x(p,{children:[S(`span`,{className:`badge badge-ghost badge-sm`,children:`Preview`}),S(`span`,{className:`badge badge-primary badge-sm`,children:`Share`})]}),children:S(N.AddressBar,{href:`https://ruejs.org/docs/components/mockup-browser`,prefix:S(`span`,{className:`badge badge-ghost badge-xs`,children:`GET`}),suffix:S(`span`,{className:`text-xs`,children:`public`}),children:`https://ruejs.org/docs/components/mockup-browser`})}),x(N.Content,{background:!0,padding:`md`,className:`grid gap-4 md:grid-cols-[18rem_minmax(0,1fr)]`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.24em] opacity-60`,children:`Outline`}),x(`div`,{className:`space-y-2 text-sm`,children:[S(`div`,{className:`font-medium text-primary`,children:`Introduction`}),S(`div`,{children:`Recommended usage`}),S(`div`,{children:`AddressBar`}),S(`div`,{children:`Content`})]})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser`}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`工具栏仍然保留原始组合能力，但通过 start / end 把常见布局槽位做得更顺手。`})]})]})]})})}),code:`<MockupBrowser bordered background className="w-full">
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
</MockupBrowser>`});r(()=>f(e,l,ae))});let oe=t(`rue:component:anchor`);i(l,oe),n(()=>{let e=h(P,{title:`地址栏状态`,summary:`AddressBar 可单独使用，并支持 success / warning / error 等状态语义。`,tab:w,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-4`,children:[x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{href:`https://preview.ruejs.org/releases/2026.05.01`,status:`success`,prefix:S(`span`,{className:`badge badge-success badge-xs`,children:`200`}),suffix:S(`span`,{className:`text-xs`,children:`Published`})})}),S(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`发布成功，可继续分享预览链接。`})]}),x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{status:`warning`,prefix:S(`span`,{className:`badge badge-warning badge-xs`,children:`302`}),suffix:S(`span`,{className:`text-xs`,children:`Redirect`}),children:`https://staging.ruejs.org/latest`})}),S(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`预览地址已重定向到最新构建。`})]}),x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{status:`error`,prefix:S(`span`,{className:`badge badge-error badge-xs`,children:`500`}),suffix:S(`span`,{className:`text-xs`,children:`Retry`}),children:`https://api.ruejs.org/workspaces/demo`})}),S(N.Content,{className:`grid h-28 place-content-center text-sm opacity-70`,children:`当前接口不可达，请稍后重试。`})]})]})}),code:`<MockupBrowser bordered>
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
</MockupBrowser>`});r(()=>f(e,l,oe))});let se=t(`rue:component:anchor`);i(l,se),n(()=>{let e=h(P,{title:`内容容器`,summary:`Content 用来统一处理上边框、背景色和内边距，避免每个 demo 都手写一遍。`,tab:ee,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(N,{bordered:!0,className:`w-full`,children:[S(N.Toolbar,{children:S(N.AddressBar,{children:`https://ruejs.org/changelog`})}),x(N.Content,{background:!0,padding:`lg`,className:`grid gap-4 md:grid-cols-2`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`May`}),S(`div`,{className:`mt-2 text-base font-semibold`,children:`Component refresh`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`Mockup Browser 新增地址栏和内容区语义 API。`})]}),x(`div`,{className:`rounded-box border border-dashed border-base-300 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Next`}),S(`div`,{className:`mt-2 text-base font-semibold`,children:`Design recipes`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`用组合页展示不同布局密度和数据卡片编排方式。`})]})]})]})})}),code:`<MockupBrowser bordered className="w-full">
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
</MockupBrowser>`});r(()=>f(e,l,se))});let ce=t(`rue:component:anchor`);i(l,ce),n(()=>{let e=h(P,{title:`场景组合`,summary:`把快捷 props 和子组件混用，可以很快搭出文档、后台、嵌入式预览等组合场景。`,tab:E,preview:()=>S(`div`,{className:`card bg-base-100 shadow-sm`,children:S(`div`,{className:`card-body`,children:x(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[S(N,{bordered:!0,url:`https://studio.ruejs.org/campaigns/spring-launch`,toolbarEnd:S(`span`,{className:`badge badge-accent badge-sm`,children:`Draft`}),contentClassName:`h-72 bg-base-100`,children:x(`div`,{className:`grid h-full gap-4 p-4`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-primary/8 p-4`,children:[S(`div`,{className:`text-xs uppercase tracking-[0.24em] opacity-60`,children:`Campaign`}),S(`div`,{className:`mt-2 text-lg font-semibold`,children:`Spring Launch`}),S(`p`,{className:`mt-2 mb-0 text-sm opacity-75`,children:`在一个浏览器壳层里展示编辑后台会更接近真实产品观感。`})]}),x(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[S(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Email sequences`}),S(`div`,{className:`rounded-box border border-base-300 p-4 text-sm`,children:`Asset approvals`})]})]})}),x(N,{bordered:!0,background:!0,className:`w-full`,children:[S(N.Toolbar,{end:S(`span`,{className:`badge badge-info badge-sm`,children:`Docs`}),children:S(N.AddressBar,{prefix:S(`span`,{className:`text-xs`,children:`Search`}),children:`https://ruejs.org/components/mockup-browser`})}),S(N.Content,{padding:`md`,className:`h-72`,children:x(`div`,{className:`grid h-full gap-4 md:grid-cols-[14rem_minmax(0,1fr)]`,children:[x(`div`,{className:`rounded-box border border-base-300 bg-base-200/35 p-4 text-sm`,children:[S(`div`,{className:`font-medium`,children:`On this page`}),x(`div`,{className:`mt-3 space-y-2 opacity-75`,children:[S(`div`,{children:`Recommended usage`}),S(`div`,{children:`Toolbar`}),S(`div`,{children:`AddressBar`}),S(`div`,{children:`Content`})]})]}),x(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4`,children:[S(`div`,{className:`text-lg font-semibold`,children:`Mockup Browser API`}),S(`p`,{className:`mt-3 mb-0 text-sm opacity-75`,children:`文档页场景更适合手动组合 Toolbar、AddressBar 和 Content，让布局更可控。`})]})]})})]})]})})}),code:`<MockupBrowser
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
</MockupBrowser>`});r(()=>f(e,l,ce))});let L=o(`h2`,l);i(l,L),m(L,`id`,`mockup-browser-api`),i(L,g(`API`));let le=o(`p`,l);i(l,le),i(le,g(`MockupBrowser 现在支持推荐快捷模式和原始组合模式两套写法。`));let ue=o(`h3`,l);i(l,ue),i(ue,g(`MockupBrowser`));let de=t(`rue:component:anchor`);i(l,de),n(()=>{let e=h(F,{rows:te});r(()=>f(e,l,de))});let R=o(`h3`,l);i(l,R),i(R,g(`MockupBrowser.Toolbar`));let z=t(`rue:component:anchor`);i(l,z),n(()=>{let e=h(F,{rows:ne});r(()=>f(e,l,z))});let B=o(`h3`,l);i(l,B),i(B,g(`MockupBrowser.AddressBar`));let V=t(`rue:component:anchor`);i(l,V),n(()=>{let e=h(F,{rows:re});r(()=>f(e,l,V))});let H=o(`h3`,l);i(l,H),i(H,g(`MockupBrowser.Content`));let fe=t(`rue:component:anchor`);i(l,fe),n(()=>{let e=h(F,{rows:ie});r(()=>f(e,l,fe))});let U=o(`div`,l);i(l,U),u(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let W=o(`h3`,U);i(U,W),u(W,`mt-0 mb-3 text-base font-semibold`),i(W,g(`推荐写法对照`));let G=o(`div`,U);i(U,G),u(G,`grid gap-2 text-sm md:grid-cols-2`);let K=o(`div`,G);i(G,K);let pe=o(`code`,K);i(K,pe),i(pe,g(`url`)),i(K,g(`适合快速生成地址栏`));let q=o(`div`,G);i(G,q);let me=o(`code`,q);i(q,me),i(me,g(`contentClassName`)),i(q,g(`适合直接包裹内容区`));let J=o(`div`,G);i(G,J);let he=o(`code`,J);i(J,he),i(he,g(`Toolbar + AddressBar + Content`)),i(J,g(`适合需要细粒度控制的页面`));let Y=o(`div`,G);i(G,Y),i(Y,g(`旧的手写`));let ge=o(`code`,Y);i(Y,ge),i(ge,g(`Toolbar`)),i(Y,g(`结构仍然完全可用`));let _e=o(`h2`,l);i(l,_e),i(_e,g(`FAQ`));let ve=o(`h3`,l);i(l,ve),i(ve,g(`什么时候用快捷 props，什么时候用子组件？`));let X=o(`p`,l);i(l,X),i(X,g(`如果只是想快速放一个带地址栏的浏览器框，优先用`));let ye=o(`code`,X);i(X,ye),i(ye,g(`url`)),i(X,g(`、`));let be=o(`code`,X);i(X,be),i(be,g(`toolbarEnd`)),i(X,g(`、`));let xe=o(`code`,X);i(X,xe),i(xe,g(`contentClassName`)),i(X,g(`这些快捷 props。需要更细的布局控制时，再切到`));let Se=d(X);i(X,Se),c(Se,` `);let Ce=o(`code`,X);i(X,Ce),i(Ce,g(`MockupBrowser.Toolbar`)),i(X,g(`、`));let we=o(`code`,X);i(X,we),i(we,g(`MockupBrowser.AddressBar`)),i(X,g(`和`));let Te=d(X);i(X,Te),c(Te,` `);let Ee=o(`code`,X);i(X,Ee),i(Ee,g(`MockupBrowser.Content`)),i(X,g(`。`));let De=o(`h3`,l);i(l,De),i(De,g(`原来的 demo 写法会失效吗？`));let Z=o(`p`,l);i(l,Z),i(Z,g(`不会。原来的`));let Oe=o(`code`,Z);i(Z,Oe),i(Oe,g(`children + MockupBrowser.Toolbar`)),i(Z,g(`结构仍然保留；当前页面里的 “browser mockup with border” 和 “browser mockup with background color” 就是旧写法的直接保留版。`));let Q=o(`h3`,l);i(l,Q),i(Q,g(`Content 和根节点上的 contentClassName 有什么区别？`));let $=o(`p`,l);i(l,$);let ke=o(`code`,$);i($,ke),i(ke,g(`contentClassName`));let Ae=d($);i($,Ae),c(Ae,` `),i($,g(`适合推荐写法，直接让根组件帮你包一层内容区；如果你还需要分别控制`));let je=o(`code`,$);i($,je),i(je,g(`padding`)),i($,g(`、`));let Me=o(`code`,$);i($,Me),i(Me,g(`background`)),i($,g(`或自己拆更多节点，就更适合直接使用`));let Ne=d($);i($,Ne),c(Ne,` `);let Pe=o(`code`,$);return i($,Pe),i(Pe,g(`MockupBrowser.Content`)),i($,g(`。`)),a})}),v,y),v})};export{I as default};