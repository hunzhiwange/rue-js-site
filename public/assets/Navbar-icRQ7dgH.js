import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,_ as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./tabs-BOxm6iIN.js";import{t as w}from"./preview-test-gate-DtKtoe96.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>e==null?!1:Array.isArray(e)?e.some(e=>E(e)):!0,ee=(e,t)=>{if(e===`between`)return`justify-between`;if(e===`center`)return`justify-center`;if(e===`end`)return`justify-end`;if(e===`start`)return`justify-start`;if(t===`center`)return`justify-center`;if(t===`end`)return`justify-end`},te=(e,t,n,r,i)=>T(`navbar-${e}`,ee(t,e),n&&`flex-1`,r&&`flex-wrap`,i),D=({as:e=`div`,className:t,children:n,align:r,grow:i,wrap:a,placement:o=`start`,...s})=>x(e,{...s,className:te(o,r,i,a,t),children:n}),O=({as:e=`div`,className:t,children:n,content:r,grow:i,...a})=>x(e,{...a,className:T(`inline-flex min-w-0 items-center`,i&&`flex-1`,t),children:r??n}),k=e=>x(D,{...e,placement:`start`}),A=e=>x(D,{...e,placement:`center`}),j=e=>x(D,{...e,placement:`end`}),M=(e,t)=>E(e)?x(O,{children:e},t):null,N=(e,t)=>(e??[]).filter(e=>(e.placement??`start`)===t).map((e,n)=>{let{key:r,placement:i,content:a,children:o,...s}=e;return x(O,{...s,content:a??o},r??`${t}-${n}`)}),P=Object.assign(({as:e=`div`,className:t,children:n,brand:r,start:i,center:a,end:o,actions:s,items:c,startProps:u,centerProps:d,endProps:f,wrap:p,sticky:m,bordered:h,...g})=>{let _=e,v=E(n),y=[M(r,`brand`),M(i,`start`),...N(c,`start`)],S=[M(a,`center`),...N(c,`center`)],C=[...N(c,`end`),M(o,`end`),M(s,`actions`)],w=y.some(Boolean)||S.some(Boolean)||C.some(Boolean);return x(_,{...g,className:T(`navbar`,p&&`flex-wrap gap-y-2`,m&&`sticky top-0 z-30`,h&&`border-b border-base-300`,t),children:v?n:b(l,{children:[w&&y.some(Boolean)?x(k,{...u,children:y}):null,w&&S.some(Boolean)?x(A,{...d,children:S}):null,w&&C.some(Boolean)?x(j,{...f,children:C}):null]})})},{Start:k,Center:A,End:j,Section:D,Item:O}),F=a=>f(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=s(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=s(`div`,u);t(u,d);let h=s(`h2`,d);t(d,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,r(`# `));let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=a.title;g(()=>p(e,h,_))});let v=i(`rue:slot:anchor`);t(d,v),n(()=>{let r=a.summary?f(()=>{let r=o(),c=s(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=a.summary;g(()=>p(e,c,l))}),r}):``;g(()=>p(r,d,v))});let b=i(`rue:component:anchor`);t(l,b),n(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,l,b))});let x=i(`rue:slot:anchor`);return t(l,x),n(()=>{let e=a.tab.value===`preview`?w(a.title,a.preview):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:a.code});g(()=>p(t,e,r))}),e});g(()=>p(e,l,x))}),l}),I=a=>f(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,u);t(u,d),e(d,`table table-zebra`);let m=s(`thead`,d);t(d,m);let h=s(`tr`,m);t(m,h);let _=s(`th`,h);t(h,_),t(_,r(`属性`));let y=s(`th`,h);t(h,y),t(y,r(`说明`));let b=s(`th`,h);t(h,b),t(b,r(`类型`));let x=s(`th`,h);t(h,x),t(x,r(`默认值`));let S=s(`tbody`,d);t(d,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{p(f(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=s(`td`,a);t(a,f);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let t=e.description;g(()=>p(t,f,m))});let h=s(`td`,a);t(a,h);let _=s(`code`,h);t(h,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;g(()=>p(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),r}),r,a)}})}),u}),ne=()=>f(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),e(r,`inline-block h-5 w-5 stroke-current`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M4 6h16M4 12h16M4 18h16`),r}),L=()=>f(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),e(r,`inline-block h-5 w-5 stroke-current`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z`),r}),re=()=>f(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),e(r,`inline-block h-4 w-4 stroke-current`);let i=s(`path`,r);t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`m21 21-4.35-4.35`);let a=s(`circle`,r);return t(r,a),c(a,`cx`,`11`),c(a,`cy`,`11`),c(a,`r`,`6`),c(a,`strokeWidth`,`2`),r}),R=()=>f(n=>{let r=s(`svg`,n);c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),e(r,`inline-block h-4 w-4 stroke-current`);let i=s(`path`,r);t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M14.857 17.082a23.848 23.848 0 0 1-5.714 0M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9`);let a=s(`path`,r);return t(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`strokeWidth`,`2`),c(a,`d`,`M13.73 21a2 2 0 0 1-3.46 0`),r}),z=r=>f(a=>{let o=s(`span`,a);e(o,`inline-grid h-8 w-8 place-items-center rounded-box bg-primary text-primary-content text-sm font-bold shadow-sm`);let c=i(`rue:slot:anchor`);return t(o,c),n(()=>{let e=r.label===void 0?`R`:r.label;g(()=>p(e,o,c))}),o}),ie=[{prop:`as`,description:`指定根节点标签，例如 div、header、nav`,type:`any`,defaultValue:`'div'`},{prop:`brand`,description:`推荐模式下的品牌区内容，会落在 start 区前面`,type:`any`,defaultValue:`-`},{prop:`start / center / end`,description:`推荐模式下的三个语义插槽`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`推荐模式下的操作区内容，会落在 end 区最后`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动写法；通过 placement 分发到 start、center、end`,type:`NavbarItem[]`,defaultValue:`-`},{prop:`startProps / centerProps / endProps`,description:`推荐模式下传给三个布局区的属性`,type:`Omit<NavbarSectionProps, "children" | "placement">`,defaultValue:`-`},{prop:`wrap`,description:`允许根节点换行，适合搜索框或操作区较多的场景`,type:`boolean`,defaultValue:`false`},{prop:`sticky`,description:`为根节点追加 sticky 头部定位类`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加底边框`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`经典组合模式；传入后优先按 children 渲染`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`指定布局区标签`,type:`any`,defaultValue:`'div'`},{prop:`align`,description:`控制区块内部对齐`,type:`'start' | 'center' | 'end' | 'between'`,defaultValue:`根据 placement 自动推导`},{prop:`grow`,description:`让布局区占据更多可用宽度`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`允许区块内部换行`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到 navbar-start / center / end 的类名`,type:`string`,defaultValue:`-`}],oe=[{prop:`placement`,description:`仅 items 数组使用，控制内容落在哪个区域`,type:`'start' | 'center' | 'end'`,defaultValue:`'start'`},{prop:`as`,description:`指定数据项或 Navbar.Item 的标签`,type:`any`,defaultValue:`'div'`},{prop:`content`,description:`数据驱动模式下的内容；等价于 children`,type:`any`,defaultValue:`-`},{prop:`grow`,description:`让单个项目在所在区块内扩展`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到内层 inline-flex 包裹节点的类名`,type:`string`,defaultValue:`-`}],B=()=>{let{tabRecommended:l,tabItems:v,tabLayout:y,tabTitleOnly:C,tabTitleAndIcon:w,tabThreePart:T,tabMenu:E,tabSearch:ee}=_(`useSetup:0:0`,()=>h(()=>({tabRecommended:_(`ref:1:0`,()=>d(`preview`)),tabItems:_(`ref:1:1`,()=>d(`preview`)),tabLayout:_(`ref:1:2`,()=>d(`preview`)),tabTitleOnly:_(`ref:1:3`,()=>d(`preview`)),tabTitleAndIcon:_(`ref:1:4`,()=>d(`preview`)),tabThreePart:_(`ref:1:5`,()=>d(`preview`)),tabMenu:_(`ref:1:6`,()=>d(`preview`)),tabSearch:_(`ref:1:7`,()=>d(`preview`))}))),te=[{key:`overview`,placement:`center`,content:x(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`})},{key:`docs`,placement:`center`,content:x(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`})},{key:`pricing`,placement:`center`,content:x(`button`,{className:`btn btn-ghost btn-sm`,children:`Pricing`})},{key:`status`,placement:`end`,content:x(`div`,{className:`badge badge-outline badge-success`,children:`Online`})},{key:`notify`,placement:`end`,content:x(`button`,{className:`btn btn-ghost btn-circle btn-sm`,"aria-label":`通知`,children:x(R,{})})}];return f(d=>{let h=o(),_=i(`rue:component:anchor`);return t(h,_),p(m(S,{children:f(()=>{let d=o(),f=s(`div`,d);t(d,f),e(f,`max-w-none prose prose-sm md:prose-base`);let h=s(`h1`,f);t(f,h),t(h,r(`Navbar 导航栏`));let _=s(`p`,f);t(f,_),e(_,`text-sm mt-3 mb-3`),t(_,r(`Navbar 仍然保持 Rue 当前的视觉基础和 daisyUI 的布局骨架，但补齐了更适合真实项目的语义插槽、 数据驱动项和布局控制能力。`));let S=s(`h2`,f);t(f,S),t(S,r(`何时使用`));let D=s(`ul`,f);t(f,D);let O=s(`li`,D);t(D,O),t(O,r(`需要一个轻量的头部布局容器，用来放品牌、导航入口、搜索框和用户操作。`));let k=s(`li`,D);t(D,k),t(k,r(`希望保留 Rue 当前的视觉风格，但把常见头部结构改成更好复用的 API。`));let A=s(`li`,D);t(D,A),t(A,r(`既要支持快速搭建推荐用法，也要兼容原来的 children + Start/Center/End 手写布局。`));let j=i(`rue:component:anchor`);t(f,j),n(()=>{let e=m(F,{title:`推荐用法：语义插槽`,summary:`用 brand、center、actions 描述最常见的头部结构；布局细节交给 startProps 和 endProps。`,tab:l,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:x(P,{className:`rounded-box bg-base-100`,bordered:!0,brand:b(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[x(z,{}),`Rue Console`]}),center:b(`div`,{className:`hidden items-center gap-1 lg:flex`,children:[x(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`}),x(`button`,{className:`btn btn-ghost btn-sm btn-active`,children:`Projects`}),x(`button`,{className:`btn btn-ghost btn-sm`,children:`Deployments`}),x(`button`,{className:`btn btn-ghost btn-sm`,children:`Analytics`})]}),actions:b(`div`,{className:`flex items-center gap-2`,children:[x(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`}),x(`button`,{className:`btn btn-primary btn-sm`,children:`New Project`})]}),startProps:{className:`gap-2`},endProps:{className:`gap-2`},"data-testid":`navbar-recommended`})})}),code:`<Navbar
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
/>`});g(()=>p(e,f,j))});let M=i(`rue:component:anchor`);t(f,M),n(()=>{let e=m(F,{title:`数据驱动导航项`,summary:`当中间菜单和右侧状态来自配置或接口时，用 items 比手写结构更容易维护。`,tab:v,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:x(P,{className:`rounded-box bg-base-100`,brand:b(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[x(z,{label:`W`}),`Workspace`]}),items:te,actions:x(`button`,{className:`btn btn-primary btn-sm`,children:`Invite`}),centerProps:{className:`hidden md:flex gap-1`},endProps:{className:`gap-2`},"data-testid":`navbar-items`})})}),code:`const items = [
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
/>`});g(()=>p(e,f,M))});let N=i(`rue:component:anchor`);t(f,N),n(()=>{let e=m(F,{title:`根节点与布局控制`,summary:`支持 header 根节点、换行和区块对齐，适合内容更密集的工作台头部。`,tab:y,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body gap-4`,children:x(P,{as:`header`,wrap:!0,bordered:!0,className:`rounded-box bg-base-100 px-4 py-2`,brand:b(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[x(z,{}),`Rue Docs`]}),start:x(`div`,{className:`badge badge-outline`,children:`v2.4`}),center:b(`label`,{className:`input input-bordered hidden w-full max-w-md items-center gap-2 md:flex`,children:[x(re,{}),x(`input`,{type:`text`,className:`grow`,placeholder:`Search docs`})]}),actions:b(`div`,{className:`flex items-center gap-2`,children:[x(`button`,{className:`btn btn-ghost btn-sm`,children:`Changelog`}),x(`button`,{className:`btn btn-neutral btn-sm`,children:`Feedback`})]}),startProps:{className:`w-auto flex-none items-center gap-2`},centerProps:{grow:!0,className:`order-3 basis-full justify-start pt-2 md:order-none md:basis-auto md:pt-0 md:px-6`},endProps:{className:`w-auto flex-none items-center gap-2`},"data-testid":`navbar-layout`})})}),code:`<Navbar
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
/>`});g(()=>p(e,f,N))});let R=s(`h2`,f);t(f,R),t(R,r(`经典 demo`));let B=s(`p`,f);t(f,B),t(B,r(`下面这几组示例保留了原有写法，只做了页面重组，方便继续对照 Start / Center / End 的经典组合方式。`));let se=i(`rue:component:anchor`);t(f,se),n(()=>{let e=m(F,{title:`仅标题`,summary:`最简单的 navbar，用 root 直接承载内容。`,tab:C,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:x(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-only`,children:x(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <button className="btn btn-ghost text-xl">daisyUI</button>
</Navbar>`});g(()=>p(e,f,se))});let ce=i(`rue:component:anchor`);t(f,ce),n(()=>{let e=m(F,{title:`标题与图标`,summary:`保留经典的 Start + End 组合。`,tab:w,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-icon`,children:[x(P.Start,{children:x(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),x(P.End,{children:x(`button`,{className:`btn btn-square btn-ghost`,children:x(L,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <Navbar.Start>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </Navbar.Start>
  <Navbar.End>
    <button className="btn btn-square btn-ghost">
      <MoreIcon />
    </button>
  </Navbar.End>
</Navbar>`});g(()=>p(e,f,ce))});let V=i(`rue:component:anchor`);t(f,V),n(()=>{let e=m(F,{title:`三段式布局`,summary:`中间标题 + 两侧图标，是最标准的三栏头部。`,tab:T,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-three-part`,children:[x(P.Start,{children:x(`button`,{className:`btn btn-square btn-ghost`,children:x(ne,{})})}),x(P.Center,{children:x(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),x(P.End,{children:x(`button`,{className:`btn btn-square btn-ghost`,children:x(L,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});g(()=>p(e,f,V))});let H=i(`rue:component:anchor`);t(f,H),n(()=>{let e=m(F,{title:`菜单与子菜单`,summary:`继续保留菜单容器和 details 子菜单的经典演示。`,tab:E,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:x(`div`,{className:`card-body`,children:b(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-menu-demo`,children:[x(P.Start,{children:x(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),x(P.End,{children:b(`ul`,{className:`menu menu-horizontal items-center gap-1 px-1`,children:[x(`li`,{children:x(`button`,{className:`h-10 min-h-10 items-center`,children:`Link`})}),x(`li`,{children:b(`details`,{children:[x(`summary`,{className:`h-10 min-h-10 items-center`,children:`Parent`}),b(`ul`,{className:`bg-base-100 rounded-t-none p-2`,children:[x(`li`,{children:x(`button`,{children:`Link 1`})}),x(`li`,{children:x(`button`,{children:`Link 2`})})]})]})})]})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});g(()=>p(e,f,H))});let U=i(`rue:component:anchor`);t(f,U),n(()=>{let e=m(F,{title:`搜索框与头像下拉`,summary:`保留搜索、头像和下拉菜单混排的经典结构。`,tab:ee,preview:()=>x(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:x(`div`,{className:`card-body`,children:b(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-search-demo`,children:[x(P.Start,{children:x(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{className:`gap-2`,children:[x(`input`,{type:`text`,placeholder:`Search`,className:`input input-bordered w-24 md:w-auto`}),b(`div`,{className:`dropdown dropdown-end`,children:[x(`div`,{tabIndex:`0`,role:`button`,className:`btn btn-ghost btn-circle avatar`,children:x(`div`,{className:`w-10 rounded-full`,children:x(`img`,{alt:`Tailwind CSS Navbar component`,src:`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`})})}),b(`ul`,{tabIndex:`-1`,className:`mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`,children:[x(`li`,{children:b(`button`,{className:`justify-between`,children:[`Profile`,x(`span`,{className:`badge`,children:`New`})]})}),x(`li`,{children:x(`button`,{children:`Settings`})}),x(`li`,{children:x(`button`,{children:`Logout`})})]})]})]})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});g(()=>p(e,f,U))});let W=s(`h2`,f);t(f,W),c(W,`id`,`navbar-api`),t(W,r(`API`));let le=s(`p`,f);t(f,le),t(le,r(`Navbar 现在同时支持推荐的语义插槽模式，以及原有的组合模式。`));let ue=s(`h3`,f);t(f,ue),t(ue,r(`Navbar`));let de=i(`rue:component:anchor`);t(f,de),n(()=>{let e=m(I,{rows:ie});g(()=>p(e,f,de))});let fe=s(`h3`,f);t(f,fe),t(fe,r(`Navbar.Start / Navbar.Center / Navbar.End / Navbar.Section`));let pe=i(`rue:component:anchor`);t(f,pe),n(()=>{let e=m(I,{rows:ae});g(()=>p(e,f,pe))});let me=s(`h3`,f);t(f,me),t(me,r(`Navbar.Item / items[]`));let he=i(`rue:component:anchor`);t(f,he),n(()=>{let e=m(I,{rows:oe});g(()=>p(e,f,he))});let G=s(`div`,f);t(f,G),e(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let K=s(`h3`,G);t(G,K),e(K,`mt-0 mb-3 text-base font-semibold`),t(K,r(`双模式说明`));let q=s(`div`,G);t(G,q),e(q,`grid gap-3 text-sm md:grid-cols-2`);let J=s(`div`,q);t(q,J);let ge=s(`code`,J);t(J,ge),t(ge,r(`children + Navbar.Start/Center/End`)),t(J,r(`: 适合完全手写布局，兼容旧 demo。`));let Y=s(`div`,q);t(q,Y);let _e=s(`code`,Y);t(Y,_e),t(_e,r(`brand / start / center / end / actions / items`)),t(Y,r(`: 适合抽象成复用头部或通过配置生成导航结构。`));let ve=s(`h2`,f);t(f,ve),t(ve,r(`FAQ`));let ye=s(`h3`,f);t(f,ye),t(ye,r(`什么时候选推荐模式，什么时候继续手写 children？`));let X=s(`p`,f);t(f,X),t(X,r(`如果页面头部结构在多个页面之间重复，或者导航项来自配置，优先用语义插槽和`));let be=a(X);t(X,be),u(be,` `);let xe=s(`code`,X);t(X,xe),t(xe,r(`items`)),t(X,r(`。 如果当前头部结构非常自由，包含复杂的 dropdown、menu、搜索表单，继续手写`));let Se=s(`code`,X);t(X,Se),t(Se,r(`children + Navbar.Start/Center/End`)),t(X,r(`会更直接。`));let Ce=s(`h3`,f);t(f,Ce),t(Ce,r(`children 和 items 同时传时谁优先？`));let Z=s(`p`,f);t(f,Z),t(Z,r(`当前实现会优先渲染`));let we=s(`code`,Z);t(Z,we),t(we,r(`children`)),t(Z,r(`。这样可以保证旧代码迁移时不被新属性打断， 也能让组合模式保持完全可控。`));let Q=s(`h3`,f);t(f,Q),t(Q,r(`sticky 和 bordered 是强样式能力吗？`));let $=s(`p`,f);t(f,$),t($,r(`不是。它们只是补一层常用布局类，仍然遵循 Rue 当前的视觉基底；更细的背景、阴影、圆角和响应式布局， 依然建议通过`));let Te=s(`code`,$);t($,Te),t(Te,r(`className`));let Ee=a($);return t($,Ee),u(Ee,` `),t($,r(`和区块 props 来组合。`)),d})}),h,_),h})};export{B as default};