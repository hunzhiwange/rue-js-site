import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,xt as h,y as g}from"./vapor-runtime-EUvELKQT.js";import{a as _,n as v}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as y,t as b}from"./src-BI4ToZNE.js";import{n as x}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as S}from"./Code-BdVklNCb.js";import{t as C}from"./tabs-Brdd3EMz.js";var w=(...e)=>e.filter(Boolean).join(` `),T=e=>e==null?!1:Array.isArray(e)?e.some(e=>T(e)):!0,E=(e,t)=>{if(e===`between`)return`justify-between`;if(e===`center`)return`justify-center`;if(e===`end`)return`justify-end`;if(e===`start`)return`justify-start`;if(t===`center`)return`justify-center`;if(t===`end`)return`justify-end`},ee=(e,t,n,r,i)=>w(`navbar-${e}`,E(t,e),n&&`flex-1`,r&&`flex-wrap`,i),D=({as:e=`div`,className:t,children:n,align:r,grow:i,wrap:a,placement:o=`start`,...s})=>b(e,{...s,className:ee(o,r,i,a,t),children:n}),O=({as:e=`div`,className:t,children:n,content:r,grow:i,...a})=>b(e,{...a,className:w(`inline-flex min-w-0 items-center`,i&&`flex-1`,t),children:r??n}),k=e=>b(D,{...e,placement:`start`}),A=e=>b(D,{...e,placement:`center`}),j=e=>b(D,{...e,placement:`end`}),M=(e,t)=>T(e)?b(O,{children:e},t):null,N=(e,t)=>(e??[]).filter(e=>(e.placement??`start`)===t).map((e,n)=>{let{key:r,placement:i,content:a,children:o,...s}=e;return b(O,{...s,content:a??o},r??`${t}-${n}`)}),P=Object.assign(({as:e=`div`,className:t,children:n,brand:r,start:i,center:a,end:o,actions:s,items:c,startProps:l,centerProps:u,endProps:d,wrap:f,sticky:p,bordered:m,...h})=>{let _=e,v=T(n),x=[M(r,`brand`),M(i,`start`),...N(c,`start`)],S=[M(a,`center`),...N(c,`center`)],C=[...N(c,`end`),M(o,`end`),M(s,`actions`)],E=x.some(Boolean)||S.some(Boolean)||C.some(Boolean);return b(_,{...h,className:w(`navbar`,f&&`flex-wrap gap-y-2`,p&&`sticky top-0 z-30`,m&&`border-b border-base-300`,t),children:v?n:y(g,{children:[E&&x.some(Boolean)?b(k,{...l,children:x}):null,E&&S.some(Boolean)?b(A,{...u,children:S}):null,E&&C.some(Boolean)?b(j,{...d,children:C}):null]})})},{Start:k,Center:A,End:j,Section:D,Item:O}),F=e=>c(t=>{let i=a(`div`,t);m(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=a(`div`,i);r(i,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let f=a(`div`,s);r(s,f);let g=a(`h2`,f);r(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,d(`# `));let _=o(`rue:slot:anchor`);r(g,_),l(()=>{let t=e.title;h(()=>u(t,g,_))});let v=o(`rue:slot:anchor`);r(f,v),l(()=>{let t=e.summary?c(()=>{let t=n(),i=a(`p`,t);r(t,i),m(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return r(i,s),l(()=>{let t=e.summary;h(()=>u(t,i,s))}),t}):``;h(()=>u(t,f,v))});let y=o(`rue:component:anchor`);r(i,y),l(()=>{let t=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>u(t,i,y))});let b=o(`rue:slot:anchor`);return r(i,b),l(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),l(()=>{let n=p(S,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>u(n,t,i))}),t});h(()=>u(t,i,b))}),i}),I=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let g=a(`tr`,p);r(p,g);let _=a(`th`,g);r(g,_),r(_,d(`属性`));let y=a(`th`,g);r(g,y),r(y,d(`说明`));let b=a(`th`,g);r(g,b),r(b,d(`类型`));let x=a(`th`,g);r(g,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;h(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;h(()=>u(e,p,m))});let g=a(`td`,s);r(s,g);let _=a(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;h(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;h(()=>u(e,b,x))}),i}),i,s)}})}),s}),te=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`fill`,`none`),e(n,`viewBox`,`0 0 24 24`),m(n,`inline-block h-5 w-5 stroke-current`);let i=a(`path`,n);return r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`strokeWidth`,`2`),e(i,`d`,`M4 6h16M4 12h16M4 18h16`),n}),ne=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`fill`,`none`),e(n,`viewBox`,`0 0 24 24`),m(n,`inline-block h-5 w-5 stroke-current`);let i=a(`path`,n);return r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`strokeWidth`,`2`),e(i,`d`,`M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z`),n}),re=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`fill`,`none`),e(n,`viewBox`,`0 0 24 24`),m(n,`inline-block h-4 w-4 stroke-current`);let i=a(`path`,n);r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`strokeWidth`,`2`),e(i,`d`,`m21 21-4.35-4.35`);let o=a(`circle`,n);return r(n,o),e(o,`cx`,`11`),e(o,`cy`,`11`),e(o,`r`,`6`),e(o,`strokeWidth`,`2`),n}),L=()=>c(t=>{let n=a(`svg`,t);e(n,`xmlns`,`http://www.w3.org/2000/svg`),e(n,`fill`,`none`),e(n,`viewBox`,`0 0 24 24`),m(n,`inline-block h-4 w-4 stroke-current`);let i=a(`path`,n);r(n,i),e(i,`strokeLinecap`,`round`),e(i,`strokeLinejoin`,`round`),e(i,`strokeWidth`,`2`),e(i,`d`,`M14.857 17.082a23.848 23.848 0 0 1-5.714 0M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9`);let o=a(`path`,n);return r(n,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M13.73 21a2 2 0 0 1-3.46 0`),n}),R=e=>c(t=>{let n=a(`span`,t);m(n,`inline-grid h-8 w-8 place-items-center rounded-box bg-primary text-primary-content text-sm font-bold shadow-sm`);let i=o(`rue:slot:anchor`);return r(n,i),l(()=>{let t=e.label===void 0?`R`:e.label;h(()=>u(t,n,i))}),n}),ie=[{prop:`as`,description:`指定根节点标签，例如 div、header、nav`,type:`any`,defaultValue:`'div'`},{prop:`brand`,description:`推荐模式下的品牌区内容，会落在 start 区前面`,type:`any`,defaultValue:`-`},{prop:`start / center / end`,description:`推荐模式下的三个语义插槽`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`推荐模式下的操作区内容，会落在 end 区最后`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动写法；通过 placement 分发到 start、center、end`,type:`NavbarItem[]`,defaultValue:`-`},{prop:`startProps / centerProps / endProps`,description:`推荐模式下传给三个布局区的属性`,type:`Omit<NavbarSectionProps, "children" | "placement">`,defaultValue:`-`},{prop:`wrap`,description:`允许根节点换行，适合搜索框或操作区较多的场景`,type:`boolean`,defaultValue:`false`},{prop:`sticky`,description:`为根节点追加 sticky 头部定位类`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加底边框`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`经典组合模式；传入后优先按 children 渲染`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`指定布局区标签`,type:`any`,defaultValue:`'div'`},{prop:`align`,description:`控制区块内部对齐`,type:`'start' | 'center' | 'end' | 'between'`,defaultValue:`根据 placement 自动推导`},{prop:`grow`,description:`让布局区占据更多可用宽度`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`允许区块内部换行`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到 navbar-start / center / end 的类名`,type:`string`,defaultValue:`-`}],oe=[{prop:`placement`,description:`仅 items 数组使用，控制内容落在哪个区域`,type:`'start' | 'center' | 'end'`,defaultValue:`'start'`},{prop:`as`,description:`指定数据项或 Navbar.Item 的标签`,type:`any`,defaultValue:`'div'`},{prop:`content`,description:`数据驱动模式下的内容；等价于 children`,type:`any`,defaultValue:`-`},{prop:`grow`,description:`让单个项目在所在区块内扩展`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到内层 inline-flex 包裹节点的类名`,type:`string`,defaultValue:`-`}],z=()=>{let{tabRecommended:g,tabItems:v,tabLayout:S,tabTitleOnly:C,tabTitleAndIcon:w,tabThreePart:T,tabMenu:E,tabSearch:ee}=_(`useSetup:0:0`,()=>t(()=>({tabRecommended:_(`ref:1:0`,()=>s(`preview`)),tabItems:_(`ref:1:1`,()=>s(`preview`)),tabLayout:_(`ref:1:2`,()=>s(`preview`)),tabTitleOnly:_(`ref:1:3`,()=>s(`preview`)),tabTitleAndIcon:_(`ref:1:4`,()=>s(`preview`)),tabThreePart:_(`ref:1:5`,()=>s(`preview`)),tabMenu:_(`ref:1:6`,()=>s(`preview`)),tabSearch:_(`ref:1:7`,()=>s(`preview`))}))),D=[{key:`overview`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`})},{key:`docs`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`})},{key:`pricing`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Pricing`})},{key:`status`,placement:`end`,content:b(`div`,{className:`badge badge-outline badge-success`,children:`Online`})},{key:`notify`,placement:`end`,content:b(`button`,{className:`btn btn-ghost btn-circle btn-sm`,"aria-label":`通知`,children:b(L,{})})}];return c(t=>{let s=n(),_=o(`rue:component:anchor`);return r(s,_),u(p(x,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,s);r(s,c),r(c,d(`Navbar 导航栏`));let _=a(`p`,s);r(s,_),m(_,`text-sm mt-3 mb-3`),r(_,d(`Navbar 仍然保持 Rue 当前的视觉基础和 daisyUI 的布局骨架，但补齐了更适合真实项目的语义插槽、 数据驱动项和布局控制能力。`));let x=a(`h2`,s);r(s,x),r(x,d(`何时使用`));let O=a(`ul`,s);r(s,O);let k=a(`li`,O);r(O,k),r(k,d(`需要一个轻量的头部布局容器，用来放品牌、导航入口、搜索框和用户操作。`));let A=a(`li`,O);r(O,A),r(A,d(`希望保留 Rue 当前的视觉风格，但把常见头部结构改成更好复用的 API。`));let j=a(`li`,O);r(O,j),r(j,d(`既要支持快速搭建推荐用法，也要兼容原来的 children + Start/Center/End 手写布局。`));let M=o(`rue:component:anchor`);r(s,M),l(()=>{let e=p(F,{title:`推荐用法：语义插槽`,summary:`用 brand、center、actions 描述最常见的头部结构；布局细节交给 startProps 和 endProps。`,tab:g,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`rounded-box bg-base-100`,bordered:!0,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(R,{}),`Rue Console`]}),center:y(`div`,{className:`hidden items-center gap-1 lg:flex`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`}),b(`button`,{className:`btn btn-ghost btn-sm btn-active`,children:`Projects`}),b(`button`,{className:`btn btn-ghost btn-sm`,children:`Deployments`}),b(`button`,{className:`btn btn-ghost btn-sm`,children:`Analytics`})]}),actions:y(`div`,{className:`flex items-center gap-2`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`}),b(`button`,{className:`btn btn-primary btn-sm`,children:`New Project`})]}),startProps:{className:`gap-2`},endProps:{className:`gap-2`},"data-testid":`navbar-recommended`})})}),code:`<Navbar
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
/>`});h(()=>u(e,s,M))});let N=o(`rue:component:anchor`);r(s,N),l(()=>{let e=p(F,{title:`数据驱动导航项`,summary:`当中间菜单和右侧状态来自配置或接口时，用 items 比手写结构更容易维护。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`rounded-box bg-base-100`,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(R,{label:`W`}),`Workspace`]}),items:D,actions:b(`button`,{className:`btn btn-primary btn-sm`,children:`Invite`}),centerProps:{className:`hidden md:flex gap-1`},endProps:{className:`gap-2`},"data-testid":`navbar-items`})})}),code:`const items = [
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
/>`});h(()=>u(e,s,N))});let L=o(`rue:component:anchor`);r(s,L),l(()=>{let e=p(F,{title:`根节点与布局控制`,summary:`支持 header 根节点、换行和区块对齐，适合内容更密集的工作台头部。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:b(P,{as:`header`,wrap:!0,bordered:!0,className:`rounded-box bg-base-100 px-4 py-2`,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(R,{}),`Rue Docs`]}),start:b(`div`,{className:`badge badge-outline`,children:`v2.4`}),center:y(`label`,{className:`input input-bordered hidden w-full max-w-md items-center gap-2 md:flex`,children:[b(re,{}),b(`input`,{type:`text`,className:`grow`,placeholder:`Search docs`})]}),actions:y(`div`,{className:`flex items-center gap-2`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Changelog`}),b(`button`,{className:`btn btn-neutral btn-sm`,children:`Feedback`})]}),startProps:{className:`w-auto flex-none items-center gap-2`},centerProps:{grow:!0,className:`order-3 basis-full justify-start pt-2 md:order-none md:basis-auto md:pt-0 md:px-6`},endProps:{className:`w-auto flex-none items-center gap-2`},"data-testid":`navbar-layout`})})}),code:`<Navbar
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
/>`});h(()=>u(e,s,L))});let z=a(`h2`,s);r(s,z),r(z,d(`经典 demo`));let se=a(`p`,s);r(s,se),r(se,d(`下面这几组示例保留了原有写法，只做了页面重组，方便继续对照 Start / Center / End 的经典组合方式。`));let ce=o(`rue:component:anchor`);r(s,ce),l(()=>{let e=p(F,{title:`仅标题`,summary:`最简单的 navbar，用 root 直接承载内容。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-only`,children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <button className="btn btn-ghost text-xl">daisyUI</button>
</Navbar>`});h(()=>u(e,s,ce))});let le=o(`rue:component:anchor`);r(s,le),l(()=>{let e=p(F,{title:`标题与图标`,summary:`保留经典的 Start + End 组合。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-icon`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(ne,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <Navbar.Start>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </Navbar.Start>
  <Navbar.End>
    <button className="btn btn-square btn-ghost">
      <MoreIcon />
    </button>
  </Navbar.End>
</Navbar>`});h(()=>u(e,s,le))});let B=o(`rue:component:anchor`);r(s,B),l(()=>{let e=p(F,{title:`三段式布局`,summary:`中间标题 + 两侧图标，是最标准的三栏头部。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-three-part`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(te,{})})}),b(P.Center,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(ne,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});h(()=>u(e,s,B))});let V=o(`rue:component:anchor`);r(s,V),l(()=>{let e=p(F,{title:`菜单与子菜单`,summary:`继续保留菜单容器和 details 子菜单的经典演示。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-menu-demo`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:y(`ul`,{className:`menu menu-horizontal items-center gap-1 px-1`,children:[b(`li`,{children:b(`button`,{className:`h-10 min-h-10 items-center`,children:`Link`})}),b(`li`,{children:y(`details`,{children:[b(`summary`,{className:`h-10 min-h-10 items-center`,children:`Parent`}),y(`ul`,{className:`bg-base-100 rounded-t-none p-2`,children:[b(`li`,{children:b(`button`,{children:`Link 1`})}),b(`li`,{children:b(`button`,{children:`Link 2`})})]})]})})]})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});h(()=>u(e,s,V))});let H=o(`rue:component:anchor`);r(s,H),l(()=>{let e=p(F,{title:`搜索框与头像下拉`,summary:`保留搜索、头像和下拉菜单混排的经典结构。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-search-demo`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),y(P.End,{className:`gap-2`,children:[b(`input`,{type:`text`,placeholder:`Search`,className:`input input-bordered w-24 md:w-auto`}),y(`div`,{className:`dropdown dropdown-end`,children:[b(`div`,{tabIndex:`0`,role:`button`,className:`btn btn-ghost btn-circle avatar`,children:b(`div`,{className:`w-10 rounded-full`,children:b(`img`,{alt:`Tailwind CSS Navbar component`,src:`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`})})}),y(`ul`,{tabIndex:`-1`,className:`mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`,children:[b(`li`,{children:y(`button`,{className:`justify-between`,children:[`Profile`,b(`span`,{className:`badge`,children:`New`})]})}),b(`li`,{children:b(`button`,{children:`Settings`})}),b(`li`,{children:b(`button`,{children:`Logout`})})]})]})]})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});h(()=>u(e,s,H))});let U=a(`h2`,s);r(s,U),e(U,`id`,`navbar-api`),r(U,d(`API`));let W=a(`p`,s);r(s,W),r(W,d(`Navbar 现在同时支持推荐的语义插槽模式，以及原有的组合模式。`));let ue=a(`h3`,s);r(s,ue),r(ue,d(`Navbar`));let de=o(`rue:component:anchor`);r(s,de),l(()=>{let e=p(I,{rows:ie});h(()=>u(e,s,de))});let fe=a(`h3`,s);r(s,fe),r(fe,d(`Navbar.Start / Navbar.Center / Navbar.End / Navbar.Section`));let pe=o(`rue:component:anchor`);r(s,pe),l(()=>{let e=p(I,{rows:ae});h(()=>u(e,s,pe))});let me=a(`h3`,s);r(s,me),r(me,d(`Navbar.Item / items[]`));let he=o(`rue:component:anchor`);r(s,he),l(()=>{let e=p(I,{rows:oe});h(()=>u(e,s,he))});let G=a(`div`,s);r(s,G),m(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let K=a(`h3`,G);r(G,K),m(K,`mt-0 mb-3 text-base font-semibold`),r(K,d(`双模式说明`));let q=a(`div`,G);r(G,q),m(q,`grid gap-3 text-sm md:grid-cols-2`);let J=a(`div`,q);r(q,J);let ge=a(`code`,J);r(J,ge),r(ge,d(`children + Navbar.Start/Center/End`)),r(J,d(`: 适合完全手写布局，兼容旧 demo。`));let Y=a(`div`,q);r(q,Y);let _e=a(`code`,Y);r(Y,_e),r(_e,d(`brand / start / center / end / actions / items`)),r(Y,d(`: 适合抽象成复用头部或通过配置生成导航结构。`));let ve=a(`h2`,s);r(s,ve),r(ve,d(`FAQ`));let ye=a(`h3`,s);r(s,ye),r(ye,d(`什么时候选推荐模式，什么时候继续手写 children？`));let X=a(`p`,s);r(s,X),r(X,d(`如果页面头部结构在多个页面之间重复，或者导航项来自配置，优先用语义插槽和`));let be=i(X);r(X,be),f(be,` `);let xe=a(`code`,X);r(X,xe),r(xe,d(`items`)),r(X,d(`。 如果当前头部结构非常自由，包含复杂的 dropdown、menu、搜索表单，继续手写`));let Se=a(`code`,X);r(X,Se),r(Se,d(`children + Navbar.Start/Center/End`)),r(X,d(`会更直接。`));let Ce=a(`h3`,s);r(s,Ce),r(Ce,d(`children 和 items 同时传时谁优先？`));let Z=a(`p`,s);r(s,Z),r(Z,d(`当前实现会优先渲染`));let we=a(`code`,Z);r(Z,we),r(we,d(`children`)),r(Z,d(`。这样可以保证旧代码迁移时不被新属性打断， 也能让组合模式保持完全可控。`));let Q=a(`h3`,s);r(s,Q),r(Q,d(`sticky 和 bordered 是强样式能力吗？`));let $=a(`p`,s);r(s,$),r($,d(`不是。它们只是补一层常用布局类，仍然遵循 Rue 当前的视觉基底；更细的背景、阴影、圆角和响应式布局， 依然建议通过`));let Te=a(`code`,$);r($,Te),r(Te,d(`className`));let Ee=i($);return r($,Ee),f(Ee,` `),r($,d(`和区块 props 来组合。`)),t})}),s,_),s})};export{z as default};