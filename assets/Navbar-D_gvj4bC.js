import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,_t as c,d as l,f as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Dfq7aA8z.js";import{a as _,n as v}from"./vapor-helpers-vapor-CpxsbTjB.js";import{n as y,t as b}from"./src-BaNG2YQR.js";import{n as x}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as S}from"./Code-CLTo4rRM.js";import{t as C}from"./tabs-CxVJfyAw.js";var w=(...e)=>e.filter(Boolean).join(` `),T=e=>e==null?!1:Array.isArray(e)?e.some(e=>T(e)):!0,E=(e,t)=>{if(e===`between`)return`justify-between`;if(e===`center`)return`justify-center`;if(e===`end`)return`justify-end`;if(e===`start`)return`justify-start`;if(t===`center`)return`justify-center`;if(t===`end`)return`justify-end`},ee=(e,t,n,r,i)=>w(`navbar-${e}`,E(t,e),n&&`flex-1`,r&&`flex-wrap`,i),D=({as:e=`div`,className:t,children:n,align:r,grow:i,wrap:a,placement:o=`start`,...s})=>b(e,{...s,className:ee(o,r,i,a,t),children:n}),O=({as:e=`div`,className:t,children:n,content:r,grow:i,...a})=>b(e,{...a,className:w(`inline-flex min-w-0 items-center`,i&&`flex-1`,t),children:r??n}),k=e=>b(D,{...e,placement:`start`}),A=e=>b(D,{...e,placement:`center`}),j=e=>b(D,{...e,placement:`end`}),M=(e,t)=>T(e)?b(O,{children:e},t):null,N=(e,t)=>(e??[]).filter(e=>(e.placement??`start`)===t).map((e,n)=>{let{key:r,placement:i,content:a,children:o,...s}=e;return b(O,{...s,content:a??o},r??`${t}-${n}`)}),P=Object.assign(({as:e=`div`,className:t,children:n,brand:r,start:i,center:a,end:o,actions:s,items:c,startProps:l,centerProps:d,endProps:f,wrap:p,sticky:m,bordered:h,...g})=>{let _=e,v=T(n),x=[M(r,`brand`),M(i,`start`),...N(c,`start`)],S=[M(a,`center`),...N(c,`center`)],C=[...N(c,`end`),M(o,`end`),M(s,`actions`)],E=x.some(Boolean)||S.some(Boolean)||C.some(Boolean);return b(_,{...g,className:w(`navbar`,p&&`flex-wrap gap-y-2`,m&&`sticky top-0 z-30`,h&&`border-b border-base-300`,t),children:v?n:y(u,{children:[E&&x.some(Boolean)?b(k,{...l,children:x}):null,E&&S.some(Boolean)?b(A,{...d,children:S}):null,E&&C.some(Boolean)?b(j,{...f,children:C}):null]})})},{Start:k,Center:A,End:j,Section:D,Item:O}),F=a=>l(s=>{let u=r(`div`,s);n(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,u);i(u,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let p=r(`div`,f);i(f,p);let g=r(`h2`,p);i(p,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),c(()=>{let e=a.title;h(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);i(p,v),c(()=>{let o=a.summary?l(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),c(()=>{let e=a.summary;h(()=>d(e,s,l))}),o}):``;h(()=>d(o,p,v))});let y=e(`rue:component:anchor`);i(u,y),c(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});h(()=>d(e,u,y))});let b=e(`rue:slot:anchor`);return i(u,b),c(()=>{let n=a.tab.value===`preview`?a.preview():l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=m(S,{className:`mt-2`,lang:`tsx`,code:a.code});h(()=>d(e,n,r))}),n});h(()=>d(n,u,b))}),u}),I=a=>l(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(l(()=>{let a=t(),o=r(`tr`,a);i(a,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);i(o,l);let u=r(`code`,l);i(l,u);let f=e(`rue:slot:anchor`);i(u,f),c(()=>{let e=n.prop;h(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),c(()=>{let e=n.description;h(()=>d(e,p,m))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),c(()=>{let e=n.type;h(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;h(()=>d(e,b,x))}),a}),a,o)}})}),f}),te=()=>l(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),n(t,`inline-block h-5 w-5 stroke-current`);let a=r(`path`,t);return i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`strokeWidth`,`2`),s(a,`d`,`M4 6h16M4 12h16M4 18h16`),t}),ne=()=>l(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),n(t,`inline-block h-5 w-5 stroke-current`);let a=r(`path`,t);return i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`strokeWidth`,`2`),s(a,`d`,`M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z`),t}),re=()=>l(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),n(t,`inline-block h-4 w-4 stroke-current`);let a=r(`path`,t);i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`strokeWidth`,`2`),s(a,`d`,`m21 21-4.35-4.35`);let o=r(`circle`,t);return i(t,o),s(o,`cx`,`11`),s(o,`cy`,`11`),s(o,`r`,`6`),s(o,`strokeWidth`,`2`),t}),L=()=>l(e=>{let t=r(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`fill`,`none`),s(t,`viewBox`,`0 0 24 24`),n(t,`inline-block h-4 w-4 stroke-current`);let a=r(`path`,t);i(t,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`strokeWidth`,`2`),s(a,`d`,`M14.857 17.082a23.848 23.848 0 0 1-5.714 0M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9`);let o=r(`path`,t);return i(t,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M13.73 21a2 2 0 0 1-3.46 0`),t}),R=t=>l(a=>{let o=r(`span`,a);n(o,`inline-grid h-8 w-8 place-items-center rounded-box bg-primary text-primary-content text-sm font-bold shadow-sm`);let s=e(`rue:slot:anchor`);return i(o,s),c(()=>{let e=t.label===void 0?`R`:t.label;h(()=>d(e,o,s))}),o}),ie=[{prop:`as`,description:`指定根节点标签，例如 div、header、nav`,type:`any`,defaultValue:`'div'`},{prop:`brand`,description:`推荐模式下的品牌区内容，会落在 start 区前面`,type:`any`,defaultValue:`-`},{prop:`start / center / end`,description:`推荐模式下的三个语义插槽`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`推荐模式下的操作区内容，会落在 end 区最后`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动写法；通过 placement 分发到 start、center、end`,type:`NavbarItem[]`,defaultValue:`-`},{prop:`startProps / centerProps / endProps`,description:`推荐模式下传给三个布局区的属性`,type:`Omit<NavbarSectionProps, "children" | "placement">`,defaultValue:`-`},{prop:`wrap`,description:`允许根节点换行，适合搜索框或操作区较多的场景`,type:`boolean`,defaultValue:`false`},{prop:`sticky`,description:`为根节点追加 sticky 头部定位类`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加底边框`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`经典组合模式；传入后优先按 children 渲染`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`指定布局区标签`,type:`any`,defaultValue:`'div'`},{prop:`align`,description:`控制区块内部对齐`,type:`'start' | 'center' | 'end' | 'between'`,defaultValue:`根据 placement 自动推导`},{prop:`grow`,description:`让布局区占据更多可用宽度`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`允许区块内部换行`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到 navbar-start / center / end 的类名`,type:`string`,defaultValue:`-`}],oe=[{prop:`placement`,description:`仅 items 数组使用，控制内容落在哪个区域`,type:`'start' | 'center' | 'end'`,defaultValue:`'start'`},{prop:`as`,description:`指定数据项或 Navbar.Item 的标签`,type:`any`,defaultValue:`'div'`},{prop:`content`,description:`数据驱动模式下的内容；等价于 children`,type:`any`,defaultValue:`-`},{prop:`grow`,description:`让单个项目在所在区块内扩展`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到内层 inline-flex 包裹节点的类名`,type:`string`,defaultValue:`-`}],z=()=>{let{tabRecommended:u,tabItems:v,tabLayout:S,tabTitleOnly:C,tabTitleAndIcon:w,tabThreePart:T,tabMenu:E,tabSearch:ee}=_(`useSetup:0:0`,()=>f(()=>({tabRecommended:_(`ref:1:0`,()=>p(`preview`)),tabItems:_(`ref:1:1`,()=>p(`preview`)),tabLayout:_(`ref:1:2`,()=>p(`preview`)),tabTitleOnly:_(`ref:1:3`,()=>p(`preview`)),tabTitleAndIcon:_(`ref:1:4`,()=>p(`preview`)),tabThreePart:_(`ref:1:5`,()=>p(`preview`)),tabMenu:_(`ref:1:6`,()=>p(`preview`)),tabSearch:_(`ref:1:7`,()=>p(`preview`))}))),D=[{key:`overview`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`})},{key:`docs`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`})},{key:`pricing`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Pricing`})},{key:`status`,placement:`end`,content:b(`div`,{className:`badge badge-outline badge-success`,children:`Online`})},{key:`notify`,placement:`end`,content:b(`button`,{className:`btn btn-ghost btn-circle btn-sm`,"aria-label":`通知`,children:b(L,{})})}];return l(f=>{let p=t(),_=e(`rue:component:anchor`);return i(p,_),d(m(x,{children:l(()=>{let l=t(),f=r(`div`,l);i(l,f),n(f,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,f);i(f,p),i(p,o(`Navbar 导航栏`));let _=r(`p`,f);i(f,_),n(_,`text-sm mt-3 mb-3`),i(_,o(`Navbar 仍然保持 Rue 当前的视觉基础和 daisyUI 的布局骨架，但补齐了更适合真实项目的语义插槽、 数据驱动项和布局控制能力。`));let x=r(`div`,f);i(f,x),n(x,`text-sm flex flex-wrap gap-4`);let O=r(`a`,x);i(x,O),s(O,`href`,`https://daisyui.com/components/navbar/`),s(O,`target`,`_blank`),i(O,o(`查看 Navbar 静态样式`));let k=r(`h2`,f);i(f,k),i(k,o(`何时使用`));let A=r(`ul`,f);i(f,A);let j=r(`li`,A);i(A,j),i(j,o(`需要一个轻量的头部布局容器，用来放品牌、导航入口、搜索框和用户操作。`));let M=r(`li`,A);i(A,M),i(M,o(`希望保留 Rue 当前的视觉风格，但把常见头部结构改成更好复用的 API。`));let N=r(`li`,A);i(A,N),i(N,o(`既要支持快速搭建推荐用法，也要兼容原来的 children + Start/Center/End 手写布局。`));let L=e(`rue:component:anchor`);i(f,L),c(()=>{let e=m(F,{title:`推荐用法：语义插槽`,summary:`用 brand、center、actions 描述最常见的头部结构；布局细节交给 startProps 和 endProps。`,tab:u,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`rounded-box bg-base-100`,bordered:!0,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(R,{}),`Rue Console`]}),center:y(`div`,{className:`hidden items-center gap-1 lg:flex`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`}),b(`button`,{className:`btn btn-ghost btn-sm btn-active`,children:`Projects`}),b(`button`,{className:`btn btn-ghost btn-sm`,children:`Deployments`}),b(`button`,{className:`btn btn-ghost btn-sm`,children:`Analytics`})]}),actions:y(`div`,{className:`flex items-center gap-2`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`}),b(`button`,{className:`btn btn-primary btn-sm`,children:`New Project`})]}),startProps:{className:`gap-2`},endProps:{className:`gap-2`},"data-testid":`navbar-recommended`})})}),code:`<Navbar
  className="rounded-box bg-base-100"
  bordered
  brand={
    <a className="btn btn-ghost gap-3 px-2 text-lg normal-case">
      <BrandMark />
      Rue Console
    </a>
  }
  center={
    <div className="hidden lg:flex items-center gap-1">
      <button className="btn btn-ghost btn-sm">Overview</button>
      <button className="btn btn-ghost btn-sm btn-active">Projects</button>
      <button className="btn btn-ghost btn-sm">Deployments</button>
    </div>
  }
  actions={
    <div className="flex items-center gap-2">
      <button className="btn btn-ghost btn-sm">Docs</button>
      <button className="btn btn-primary btn-sm">New Project</button>
    </div>
  }
  startProps={{ className: 'gap-2' }}
  endProps={{ className: 'gap-2' }}
/>`});h(()=>d(e,f,L))});let z=e(`rue:component:anchor`);i(f,z),c(()=>{let e=m(F,{title:`数据驱动导航项`,summary:`当中间菜单和右侧状态来自配置或接口时，用 items 比手写结构更容易维护。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`rounded-box bg-base-100`,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(R,{label:`W`}),`Workspace`]}),items:D,actions:b(`button`,{className:`btn btn-primary btn-sm`,children:`Invite`}),centerProps:{className:`hidden md:flex gap-1`},endProps:{className:`gap-2`},"data-testid":`navbar-items`})})}),code:`const items = [
  { key: 'overview', placement: 'center', content: <button className="btn btn-ghost btn-sm">Overview</button> },
  { key: 'docs', placement: 'center', content: <button className="btn btn-ghost btn-sm">Docs</button> },
  { key: 'status', placement: 'end', content: <div className="badge badge-outline badge-success">Online</div> },
]

<Navbar
  brand={<a className="btn btn-ghost text-lg">Workspace</a>}
  items={items}
  actions={<button className="btn btn-primary btn-sm">Invite</button>}
  centerProps={{ className: 'hidden md:flex gap-1' }}
  endProps={{ className: 'gap-2' }}
/>`});h(()=>d(e,f,z))});let se=e(`rue:component:anchor`);i(f,se),c(()=>{let e=m(F,{title:`根节点与布局控制`,summary:`支持 header 根节点、换行和区块对齐，适合内容更密集的工作台头部。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:b(P,{as:`header`,wrap:!0,bordered:!0,className:`rounded-box bg-base-100 px-4 py-2`,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(R,{}),`Rue Docs`]}),start:b(`div`,{className:`badge badge-outline`,children:`v2.4`}),center:y(`label`,{className:`input input-bordered hidden w-full max-w-md items-center gap-2 md:flex`,children:[b(re,{}),b(`input`,{type:`text`,className:`grow`,placeholder:`Search docs`})]}),actions:y(`div`,{className:`flex items-center gap-2`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Changelog`}),b(`button`,{className:`btn btn-neutral btn-sm`,children:`Feedback`})]}),startProps:{className:`w-auto flex-none items-center gap-2`},centerProps:{grow:!0,className:`order-3 basis-full justify-start pt-2 md:order-none md:basis-auto md:pt-0 md:px-6`},endProps:{className:`w-auto flex-none items-center gap-2`},"data-testid":`navbar-layout`})})}),code:`<Navbar
  as="header"
  wrap
  bordered
  className="rounded-box bg-base-100 px-4 py-2"
  brand={<a className="btn btn-ghost text-lg">Rue Docs</a>}
  start={<div className="badge badge-outline">v2.4</div>}
  center={
    <label className="input input-bordered hidden w-full max-w-md items-center gap-2 md:flex">
      <SearchIcon />
      <input type="text" className="grow" placeholder="Search docs" />
    </label>
  }
  actions={
    <div className="flex items-center gap-2">
      <button className="btn btn-ghost btn-sm">Changelog</button>
      <button className="btn btn-neutral btn-sm">Feedback</button>
    </div>
  }
  startProps={{ className: 'w-auto flex-none items-center gap-2' }}
  centerProps={{
    grow: true,
    className: 'order-3 basis-full justify-start pt-2 md:order-none md:basis-auto md:pt-0 md:px-6',
  }}
  endProps={{ className: 'w-auto flex-none items-center gap-2' }}
/>`});h(()=>d(e,f,se))});let ce=r(`h2`,f);i(f,ce),i(ce,o(`经典 demo`));let le=r(`p`,f);i(f,le),i(le,o(`下面这几组示例保留了原有写法，只做了页面重组，方便继续对照 Start / Center / End 的经典组合方式。`));let ue=e(`rue:component:anchor`);i(f,ue),c(()=>{let e=m(F,{title:`仅标题`,summary:`最简单的 navbar，用 root 直接承载内容。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-only`,children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <button className="btn btn-ghost text-xl">daisyUI</button>
</Navbar>`});h(()=>d(e,f,ue))});let B=e(`rue:component:anchor`);i(f,B),c(()=>{let e=m(F,{title:`标题与图标`,summary:`保留经典的 Start + End 组合。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-icon`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(ne,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <Navbar.Start>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </Navbar.Start>
  <Navbar.End>
    <button className="btn btn-square btn-ghost">
      <MoreIcon />
    </button>
  </Navbar.End>
</Navbar>`});h(()=>d(e,f,B))});let V=e(`rue:component:anchor`);i(f,V),c(()=>{let e=m(F,{title:`三段式布局`,summary:`中间标题 + 两侧图标，是最标准的三栏头部。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-three-part`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(te,{})})}),b(P.Center,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(ne,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <Navbar.Start>
    <button className="btn btn-square btn-ghost">
      <MenuIcon />
    </button>
  </Navbar.Start>
  <Navbar.Center>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </Navbar.Center>
  <Navbar.End>
    <button className="btn btn-square btn-ghost">
      <MoreIcon />
    </button>
  </Navbar.End>
</Navbar>`});h(()=>d(e,f,V))});let H=e(`rue:component:anchor`);i(f,H),c(()=>{let e=m(F,{title:`菜单与子菜单`,summary:`继续保留菜单容器和 details 子菜单的经典演示。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-menu-demo`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:y(`ul`,{className:`menu menu-horizontal items-center gap-1 px-1`,children:[b(`li`,{children:b(`button`,{className:`h-10 min-h-10 items-center`,children:`Link`})}),b(`li`,{children:y(`details`,{children:[b(`summary`,{className:`h-10 min-h-10 items-center`,children:`Parent`}),y(`ul`,{className:`bg-base-100 rounded-t-none p-2`,children:[b(`li`,{children:b(`button`,{children:`Link 1`})}),b(`li`,{children:b(`button`,{children:`Link 2`})})]})]})})]})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <Navbar.Start>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </Navbar.Start>
  <Navbar.End>
    <ul className="menu menu-horizontal items-center gap-1 px-1">
      <li><button className="h-10 min-h-10 items-center">Link</button></li>
      <li>
        <details>
          <summary className="h-10 min-h-10 items-center">Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><button>Link 1</button></li>
            <li><button>Link 2</button></li>
          </ul>
        </details>
      </li>
    </ul>
  </Navbar.End>
</Navbar>`});h(()=>d(e,f,H))});let U=e(`rue:component:anchor`);i(f,U),c(()=>{let e=m(F,{title:`搜索框与头像下拉`,summary:`保留搜索、头像和下拉菜单混排的经典结构。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-search-demo`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),y(P.End,{className:`gap-2`,children:[b(`input`,{type:`text`,placeholder:`Search`,className:`input input-bordered w-24 md:w-auto`}),y(`div`,{className:`dropdown dropdown-end`,children:[b(`div`,{tabIndex:`0`,role:`button`,className:`btn btn-ghost btn-circle avatar`,children:b(`div`,{className:`w-10 rounded-full`,children:b(`img`,{alt:`Tailwind CSS Navbar component`,src:`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`})})}),y(`ul`,{tabIndex:`-1`,className:`mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`,children:[b(`li`,{children:y(`button`,{className:`justify-between`,children:[`Profile`,b(`span`,{className:`badge`,children:`New`})]})}),b(`li`,{children:b(`button`,{children:`Settings`})}),b(`li`,{children:b(`button`,{children:`Logout`})})]})]})]})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <Navbar.Start>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </Navbar.Start>
  <Navbar.End className="gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul tabIndex="-1" className="mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <button className="justify-between">
            Profile
            <span className="badge">New</span>
          </button>
        </li>
        <li><button>Settings</button></li>
        <li><button>Logout</button></li>
      </ul>
    </div>
  </Navbar.End>
</Navbar>`});h(()=>d(e,f,U))});let W=r(`h2`,f);i(f,W),s(W,`id`,`navbar-api`),i(W,o(`API`));let de=r(`p`,f);i(f,de),i(de,o(`Navbar 现在同时支持推荐的语义插槽模式，以及原有的组合模式。`));let fe=r(`h3`,f);i(f,fe),i(fe,o(`Navbar`));let pe=e(`rue:component:anchor`);i(f,pe),c(()=>{let e=m(I,{rows:ie});h(()=>d(e,f,pe))});let me=r(`h3`,f);i(f,me),i(me,o(`Navbar.Start / Navbar.Center / Navbar.End / Navbar.Section`));let he=e(`rue:component:anchor`);i(f,he),c(()=>{let e=m(I,{rows:ae});h(()=>d(e,f,he))});let ge=r(`h3`,f);i(f,ge),i(ge,o(`Navbar.Item / items[]`));let _e=e(`rue:component:anchor`);i(f,_e),c(()=>{let e=m(I,{rows:oe});h(()=>d(e,f,_e))});let G=r(`div`,f);i(f,G),n(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let K=r(`h3`,G);i(G,K),n(K,`mt-0 mb-3 text-base font-semibold`),i(K,o(`双模式说明`));let q=r(`div`,G);i(G,q),n(q,`grid gap-3 text-sm md:grid-cols-2`);let J=r(`div`,q);i(q,J);let ve=r(`code`,J);i(J,ve),i(ve,o(`children + Navbar.Start/Center/End`)),i(J,o(`: 适合完全手写布局，兼容旧 demo。`));let Y=r(`div`,q);i(q,Y);let ye=r(`code`,Y);i(Y,ye),i(ye,o(`brand / start / center / end / actions / items`)),i(Y,o(`: 适合抽象成复用头部或通过配置生成导航结构。`));let be=r(`h2`,f);i(f,be),i(be,o(`FAQ`));let xe=r(`h3`,f);i(f,xe),i(xe,o(`什么时候选推荐模式，什么时候继续手写 children？`));let X=r(`p`,f);i(f,X),i(X,o(`如果页面头部结构在多个页面之间重复，或者导航项来自配置，优先用语义插槽和`));let Se=g(X);i(X,Se),a(Se,` `);let Z=r(`code`,X);i(X,Z),i(Z,o(`items`)),i(X,o(`。 如果当前头部结构非常自由，包含复杂的 dropdown、menu、搜索表单，继续手写`));let Ce=r(`code`,X);i(X,Ce),i(Ce,o(`children + Navbar.Start/Center/End`)),i(X,o(`会更直接。`));let we=r(`h3`,f);i(f,we),i(we,o(`children 和 items 同时传时谁优先？`));let Q=r(`p`,f);i(f,Q),i(Q,o(`当前实现会优先渲染`));let Te=r(`code`,Q);i(Q,Te),i(Te,o(`children`)),i(Q,o(`。这样可以保证旧代码迁移时不被新属性打断， 也能让组合模式保持完全可控。`));let Ee=r(`h3`,f);i(f,Ee),i(Ee,o(`sticky 和 bordered 是强样式能力吗？`));let $=r(`p`,f);i(f,$),i($,o(`不是。它们只是补一层常用布局类，仍然遵循 Rue 当前的视觉基底；更细的背景、阴影、圆角和响应式布局， 依然建议通过`));let De=r(`code`,$);i($,De),i(De,o(`className`));let Oe=g($);return i($,Oe),a(Oe,` `),i($,o(`和区块 props 来组合。`)),l})}),p,_),p})};export{z as default};