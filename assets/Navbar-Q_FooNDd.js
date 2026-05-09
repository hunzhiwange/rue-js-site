import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,d as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as v,t as y}from"./src-DP0sEeZS.js";import{n as b}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as x}from"./Code-C8wy38VS.js";import{t as S}from"./tabs-B-QPmbH8.js";var C=(...e)=>e.filter(Boolean).join(` `),w=e=>e==null?!1:Array.isArray(e)?e.some(e=>w(e)):!0,T=(e,t)=>{if(e===`between`)return`justify-between`;if(e===`center`)return`justify-center`;if(e===`end`)return`justify-end`;if(e===`start`)return`justify-start`;if(t===`center`)return`justify-center`;if(t===`end`)return`justify-end`},E=(e,t,n,r,i)=>C(`navbar-${e}`,T(t,e),n&&`flex-1`,r&&`flex-wrap`,i),D=({as:e=`div`,className:t,children:n,align:r,grow:i,wrap:a,placement:o=`start`,...s})=>y(e,{...s,className:E(o,r,i,a,t),children:n}),O=({as:e=`div`,className:t,children:n,content:r,grow:i,...a})=>y(e,{...a,className:C(`inline-flex min-w-0 items-center`,i&&`flex-1`,t),children:r??n}),k=e=>y(D,{...e,placement:`start`}),A=e=>y(D,{...e,placement:`center`}),j=e=>y(D,{...e,placement:`end`}),M=(e,t)=>w(e)?y(O,{children:e},t):null,N=(e,t)=>(e??[]).filter(e=>(e.placement??`start`)===t).map((e,n)=>{let{key:r,placement:i,content:a,children:o,...s}=e;return y(O,{...s,content:a??o},r??`${t}-${n}`)}),P=Object.assign(({as:e=`div`,className:t,children:n,brand:r,start:i,center:a,end:o,actions:s,items:c,startProps:u,centerProps:d,endProps:f,wrap:p,sticky:m,bordered:h,...g})=>{let _=e,b=w(n),x=[M(r,`brand`),M(i,`start`),...N(c,`start`)],S=[M(a,`center`),...N(c,`center`)],T=[...N(c,`end`),M(o,`end`),M(s,`actions`)],E=x.some(Boolean)||S.some(Boolean)||T.some(Boolean);return y(_,{...g,className:C(`navbar`,p&&`flex-wrap gap-y-2`,m&&`sticky top-0 z-30`,h&&`border-b border-base-300`,t),children:b?n:v(l,{children:[E&&x.some(Boolean)?y(k,{...u,children:x}):null,E&&S.some(Boolean)?y(A,{...d,children:S}):null,E&&T.some(Boolean)?y(j,{...f,children:T}):null]})})},{Start:k,Center:A,End:j,Section:D,Item:O}),F=({title:t,summary:l,tab:f,preview:h,code:g})=>m(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let C=r(b);u(b,C),d(()=>{s(C,t)});let w=i(`rue:slot:anchor`);u(y,w),d(()=>{c(l?m(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return u(n,i),d(()=>{s(i,l)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),d(()=>{c(p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),d(()=>{c(f.value===`preview`?h():m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{c(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),I=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`);u(s,l),o(l,`table table-zebra`);let f=e(`thead`);u(l,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(l,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,l)=>{c(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let l=e(`code`);u(s,l);let f=i(`rue:slot:anchor`);u(l,f),d(()=>{let e=n.prop;c(e,l,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),ee=()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),o(n,`inline-block h-5 w-5 stroke-current`);let r=e(`path`);return u(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`strokeWidth`,`2`),t(r,`d`,`M4 6h16M4 12h16M4 18h16`),n}),te=()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),o(n,`inline-block h-5 w-5 stroke-current`);let r=e(`path`);return u(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`strokeWidth`,`2`),t(r,`d`,`M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z`),n}),ne=()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),o(n,`inline-block h-4 w-4 stroke-current`);let r=e(`path`);u(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`strokeWidth`,`2`),t(r,`d`,`m21 21-4.35-4.35`);let i=e(`circle`);return u(n,i),t(i,`cx`,`11`),t(i,`cy`,`11`),t(i,`r`,`6`),t(i,`strokeWidth`,`2`),n}),L=()=>m(()=>{let n=e(`svg`);t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),o(n,`inline-block h-4 w-4 stroke-current`);let r=e(`path`);u(n,r),t(r,`strokeLinecap`,`round`),t(r,`strokeLinejoin`,`round`),t(r,`strokeWidth`,`2`),t(r,`d`,`M14.857 17.082a23.848 23.848 0 0 1-5.714 0M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9`);let i=e(`path`);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13.73 21a2 2 0 0 1-3.46 0`),n}),R=({label:t=`R`})=>m(()=>{let n=e(`span`);o(n,`inline-grid h-8 w-8 place-items-center rounded-box bg-primary text-primary-content text-sm font-bold shadow-sm`);let r=i(`rue:slot:anchor`);return u(n,r),d(()=>{c(t,n,r)}),n}),re=[{prop:`as`,description:`指定根节点标签，例如 div、header、nav`,type:`any`,defaultValue:`'div'`},{prop:`brand`,description:`推荐模式下的品牌区内容，会落在 start 区前面`,type:`any`,defaultValue:`-`},{prop:`start / center / end`,description:`推荐模式下的三个语义插槽`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`推荐模式下的操作区内容，会落在 end 区最后`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动写法；通过 placement 分发到 start、center、end`,type:`NavbarItem[]`,defaultValue:`-`},{prop:`startProps / centerProps / endProps`,description:`推荐模式下传给三个布局区的属性`,type:`Omit<NavbarSectionProps, "children" | "placement">`,defaultValue:`-`},{prop:`wrap`,description:`允许根节点换行，适合搜索框或操作区较多的场景`,type:`boolean`,defaultValue:`false`},{prop:`sticky`,description:`为根节点追加 sticky 头部定位类`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加底边框`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`经典组合模式；传入后优先按 children 渲染`,type:`any`,defaultValue:`-`}],ie=[{prop:`as`,description:`指定布局区标签`,type:`any`,defaultValue:`'div'`},{prop:`align`,description:`控制区块内部对齐`,type:`'start' | 'center' | 'end' | 'between'`,defaultValue:`根据 placement 自动推导`},{prop:`grow`,description:`让布局区占据更多可用宽度`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`允许区块内部换行`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到 navbar-start / center / end 的类名`,type:`string`,defaultValue:`-`}],ae=[{prop:`placement`,description:`仅 items 数组使用，控制内容落在哪个区域`,type:`'start' | 'center' | 'end'`,defaultValue:`'start'`},{prop:`as`,description:`指定数据项或 Navbar.Item 的标签`,type:`any`,defaultValue:`'div'`},{prop:`content`,description:`数据驱动模式下的内容；等价于 children`,type:`any`,defaultValue:`-`},{prop:`grow`,description:`让单个项目在所在区块内扩展`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到内层 inline-flex 包裹节点的类名`,type:`string`,defaultValue:`-`}],z=()=>{let{tabRecommended:l,tabItems:_,tabLayout:x,tabTitleOnly:S,tabTitleAndIcon:C,tabThreePart:w,tabMenu:T,tabSearch:E}=g(`useSetup:0:0`,()=>h(()=>({tabRecommended:g(`ref:1:0`,()=>f(`preview`)),tabItems:g(`ref:1:1`,()=>f(`preview`)),tabLayout:g(`ref:1:2`,()=>f(`preview`)),tabTitleOnly:g(`ref:1:3`,()=>f(`preview`)),tabTitleAndIcon:g(`ref:1:4`,()=>f(`preview`)),tabThreePart:g(`ref:1:5`,()=>f(`preview`)),tabMenu:g(`ref:1:6`,()=>f(`preview`)),tabSearch:g(`ref:1:7`,()=>f(`preview`))}))),D=[{key:`overview`,placement:`center`,content:y(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`})},{key:`docs`,placement:`center`,content:y(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`})},{key:`pricing`,placement:`center`,content:y(`button`,{className:`btn btn-ghost btn-sm`,children:`Pricing`})},{key:`status`,placement:`end`,content:y(`div`,{className:`badge badge-outline badge-success`,children:`Online`})},{key:`notify`,placement:`end`,content:y(`button`,{className:`btn btn-ghost btn-circle btn-sm`,"aria-label":`通知`,children:y(L,{})})}];return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),c(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Navbar 导航栏`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`Navbar 仍然保持 Rue 当前的视觉基础和 daisyUI 的布局骨架，但补齐了更适合真实项目的语义插槽、 数据驱动项和布局控制能力。`));let b=e(`div`);u(m,b),o(b,`text-sm flex flex-wrap gap-4`);let O=e(`a`);u(b,O),t(O,`href`,`https://daisyui.com/components/navbar/`),t(O,`target`,`_blank`),u(O,n(`查看 Navbar 静态样式`));let k=e(`h2`);u(m,k),u(k,n(`何时使用`));let A=e(`ul`);u(m,A);let j=e(`li`);u(A,j),u(j,n(`需要一个轻量的头部布局容器，用来放品牌、导航入口、搜索框和用户操作。`));let M=e(`li`);u(A,M),u(M,n(`希望保留 Rue 当前的视觉风格，但把常见头部结构改成更好复用的 API。`));let N=e(`li`);u(A,N),u(N,n(`既要支持快速搭建推荐用法，也要兼容原来的 children + Start/Center/End 手写布局。`));let L=i(`rue:component:anchor`);u(m,L),d(()=>{c(p(F,{title:`推荐用法：语义插槽`,summary:`用 brand、center、actions 描述最常见的头部结构；布局细节交给 startProps 和 endProps。`,tab:l,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(P,{className:`rounded-box bg-base-100`,bordered:!0,brand:v(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[y(R,{}),`Rue Console`]}),center:v(`div`,{className:`hidden items-center gap-1 lg:flex`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`}),y(`button`,{className:`btn btn-ghost btn-sm btn-active`,children:`Projects`}),y(`button`,{className:`btn btn-ghost btn-sm`,children:`Deployments`}),y(`button`,{className:`btn btn-ghost btn-sm`,children:`Analytics`})]}),actions:v(`div`,{className:`flex items-center gap-2`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`New Project`})]}),startProps:{className:`gap-2`},endProps:{className:`gap-2`},"data-testid":`navbar-recommended`})})}),code:`<Navbar
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
/>`}),m,L)});let z=i(`rue:component:anchor`);u(m,z),d(()=>{c(p(F,{title:`数据驱动导航项`,summary:`当中间菜单和右侧状态来自配置或接口时，用 items 比手写结构更容易维护。`,tab:_,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(P,{className:`rounded-box bg-base-100`,brand:v(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[y(R,{label:`W`}),`Workspace`]}),items:D,actions:y(`button`,{className:`btn btn-primary btn-sm`,children:`Invite`}),centerProps:{className:`hidden md:flex gap-1`},endProps:{className:`gap-2`},"data-testid":`navbar-items`})})}),code:`const items = [
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
/>`}),m,z)});let oe=i(`rue:component:anchor`);u(m,oe),d(()=>{c(p(F,{title:`根节点与布局控制`,summary:`支持 header 根节点、换行和区块对齐，适合内容更密集的工作台头部。`,tab:x,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-4`,children:y(P,{as:`header`,wrap:!0,bordered:!0,className:`rounded-box bg-base-100 px-4 py-2`,brand:v(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[y(R,{}),`Rue Docs`]}),start:y(`div`,{className:`badge badge-outline`,children:`v2.4`}),center:v(`label`,{className:`input input-bordered hidden w-full max-w-md items-center gap-2 md:flex`,children:[y(ne,{}),y(`input`,{type:`text`,className:`grow`,placeholder:`Search docs`})]}),actions:v(`div`,{className:`flex items-center gap-2`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Changelog`}),y(`button`,{className:`btn btn-neutral btn-sm`,children:`Feedback`})]}),startProps:{className:`w-auto flex-none items-center gap-2`},centerProps:{grow:!0,className:`order-3 basis-full justify-start pt-2 md:order-none md:basis-auto md:pt-0 md:px-6`},endProps:{className:`w-auto flex-none items-center gap-2`},"data-testid":`navbar-layout`})})}),code:`<Navbar
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
/>`}),m,oe)});let se=e(`h2`);u(m,se),u(se,n(`经典 demo`));let ce=e(`p`);u(m,ce),u(ce,n(`下面这几组示例保留了原有写法，只做了页面重组，方便继续对照 Start / Center / End 的经典组合方式。`));let le=i(`rue:component:anchor`);u(m,le),d(()=>{c(p(F,{title:`仅标题`,summary:`最简单的 navbar，用 root 直接承载内容。`,tab:S,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-only`,children:y(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <button className="btn btn-ghost text-xl">daisyUI</button>
</Navbar>`}),m,le)});let B=i(`rue:component:anchor`);u(m,B),d(()=>{c(p(F,{title:`标题与图标`,summary:`保留经典的 Start + End 组合。`,tab:C,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-icon`,children:[y(P.Start,{children:y(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),y(P.End,{children:y(`button`,{className:`btn btn-square btn-ghost`,children:y(te,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <Navbar.Start>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </Navbar.Start>
  <Navbar.End>
    <button className="btn btn-square btn-ghost">
      <MoreIcon />
    </button>
  </Navbar.End>
</Navbar>`}),m,B)});let V=i(`rue:component:anchor`);u(m,V),d(()=>{c(p(F,{title:`三段式布局`,summary:`中间标题 + 两侧图标，是最标准的三栏头部。`,tab:w,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:v(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-three-part`,children:[y(P.Start,{children:y(`button`,{className:`btn btn-square btn-ghost`,children:y(ee,{})})}),y(P.Center,{children:y(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),y(P.End,{children:y(`button`,{className:`btn btn-square btn-ghost`,children:y(te,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`}),m,V)});let H=i(`rue:component:anchor`);u(m,H),d(()=>{c(p(F,{title:`菜单与子菜单`,summary:`继续保留菜单容器和 details 子菜单的经典演示。`,tab:T,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:y(`div`,{className:`card-body`,children:v(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-menu-demo`,children:[y(P.Start,{children:y(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),y(P.End,{children:v(`ul`,{className:`menu menu-horizontal items-center gap-1 px-1`,children:[y(`li`,{children:y(`button`,{className:`h-10 min-h-10 items-center`,children:`Link`})}),y(`li`,{children:v(`details`,{children:[y(`summary`,{className:`h-10 min-h-10 items-center`,children:`Parent`}),v(`ul`,{className:`bg-base-100 rounded-t-none p-2`,children:[y(`li`,{children:y(`button`,{children:`Link 1`})}),y(`li`,{children:y(`button`,{children:`Link 2`})})]})]})})]})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`}),m,H)});let U=i(`rue:component:anchor`);u(m,U),d(()=>{c(p(F,{title:`搜索框与头像下拉`,summary:`保留搜索、头像和下拉菜单混排的经典结构。`,tab:E,preview:()=>y(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:y(`div`,{className:`card-body`,children:v(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-search-demo`,children:[y(P.Start,{children:y(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),v(P.End,{className:`gap-2`,children:[y(`input`,{type:`text`,placeholder:`Search`,className:`input input-bordered w-24 md:w-auto`}),v(`div`,{className:`dropdown dropdown-end`,children:[y(`div`,{tabIndex:`0`,role:`button`,className:`btn btn-ghost btn-circle avatar`,children:y(`div`,{className:`w-10 rounded-full`,children:y(`img`,{alt:`Tailwind CSS Navbar component`,src:`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`})})}),v(`ul`,{tabIndex:`-1`,className:`mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`,children:[y(`li`,{children:v(`button`,{className:`justify-between`,children:[`Profile`,y(`span`,{className:`badge`,children:`New`})]})}),y(`li`,{children:y(`button`,{children:`Settings`})}),y(`li`,{children:y(`button`,{children:`Logout`})})]})]})]})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`}),m,U)});let W=e(`h2`);u(m,W),t(W,`id`,`navbar-api`),u(W,n(`API`));let ue=e(`p`);u(m,ue),u(ue,n(`Navbar 现在同时支持推荐的语义插槽模式，以及原有的组合模式。`));let de=e(`h3`);u(m,de),u(de,n(`Navbar`));let fe=i(`rue:component:anchor`);u(m,fe),d(()=>{c(p(I,{rows:re}),m,fe)});let pe=e(`h3`);u(m,pe),u(pe,n(`Navbar.Start / Navbar.Center / Navbar.End / Navbar.Section`));let me=i(`rue:component:anchor`);u(m,me),d(()=>{c(p(I,{rows:ie}),m,me)});let he=e(`h3`);u(m,he),u(he,n(`Navbar.Item / items[]`));let ge=i(`rue:component:anchor`);u(m,ge),d(()=>{c(p(I,{rows:ae}),m,ge)});let G=e(`div`);u(m,G),o(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let K=e(`h3`);u(G,K),o(K,`mt-0 mb-3 text-base font-semibold`),u(K,n(`双模式说明`));let q=e(`div`);u(G,q),o(q,`grid gap-3 text-sm md:grid-cols-2`);let J=e(`div`);u(q,J);let _e=e(`code`);u(J,_e),u(_e,n(`children + Navbar.Start/Center/End`)),u(J,n(`: 适合完全手写布局，兼容旧 demo。`));let Y=e(`div`);u(q,Y);let ve=e(`code`);u(Y,ve),u(ve,n(`brand / start / center / end / actions / items`)),u(Y,n(`: 适合抽象成复用头部或通过配置生成导航结构。`));let ye=e(`h2`);u(m,ye),u(ye,n(`FAQ`));let be=e(`h3`);u(m,be),u(be,n(`什么时候选推荐模式，什么时候继续手写 children？`));let X=e(`p`);u(m,X),u(X,n(`如果页面头部结构在多个页面之间重复，或者导航项来自配置，优先用语义插槽和`));let xe=r(X);u(X,xe),s(xe,` `);let Se=e(`code`);u(X,Se),u(Se,n(`items`)),u(X,n(`。 如果当前头部结构非常自由，包含复杂的 dropdown、menu、搜索表单，继续手写`));let Z=e(`code`);u(X,Z),u(Z,n(`children + Navbar.Start/Center/End`)),u(X,n(`会更直接。`));let Ce=e(`h3`);u(m,Ce),u(Ce,n(`children 和 items 同时传时谁优先？`));let Q=e(`p`);u(m,Q),u(Q,n(`当前实现会优先渲染`));let we=e(`code`);u(Q,we),u(we,n(`children`)),u(Q,n(`。这样可以保证旧代码迁移时不被新属性打断， 也能让组合模式保持完全可控。`));let Te=e(`h3`);u(m,Te),u(Te,n(`sticky 和 bordered 是强样式能力吗？`));let $=e(`p`);u(m,$),u($,n(`不是。它们只是补一层常用布局类，仍然遵循 Rue 当前的视觉基底；更细的背景、阴影、圆角和响应式布局， 依然建议通过`));let Ee=e(`code`);u($,Ee),u(Ee,n(`className`));let De=r($);return u($,De),s(De,` `),u($,n(`和区块 props 来组合。`)),f})}),f,h),f})};export{z as default};