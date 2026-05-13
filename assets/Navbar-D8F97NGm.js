import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,d as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as y,t as b}from"./src-BfQKH6_d.js";import{n as x}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as S}from"./Code-2C2psoH3.js";import{t as C}from"./tabs-BgQmsOey.js";var w=(...e)=>e.filter(Boolean).join(` `),T=e=>e==null?!1:Array.isArray(e)?e.some(e=>T(e)):!0,E=(e,t)=>{if(e===`between`)return`justify-between`;if(e===`center`)return`justify-center`;if(e===`end`)return`justify-end`;if(e===`start`)return`justify-start`;if(t===`center`)return`justify-center`;if(t===`end`)return`justify-end`},ee=(e,t,n,r,i)=>w(`navbar-${e}`,E(t,e),n&&`flex-1`,r&&`flex-wrap`,i),D=({as:e=`div`,className:t,children:n,align:r,grow:i,wrap:a,placement:o=`start`,...s})=>b(e,{...s,className:ee(o,r,i,a,t),children:n}),O=({as:e=`div`,className:t,children:n,content:r,grow:i,...a})=>b(e,{...a,className:w(`inline-flex min-w-0 items-center`,i&&`flex-1`,t),children:r??n}),k=e=>b(D,{...e,placement:`start`}),A=e=>b(D,{...e,placement:`center`}),j=e=>b(D,{...e,placement:`end`}),M=(e,t)=>T(e)?b(O,{children:e},t):null,N=(e,t)=>(e??[]).filter(e=>(e.placement??`start`)===t).map((e,n)=>{let{key:r,placement:i,content:a,children:o,...s}=e;return b(O,{...s,content:a??o},r??`${t}-${n}`)}),P=Object.assign(({as:e=`div`,className:t,children:n,brand:r,start:i,center:a,end:o,actions:s,items:c,startProps:l,centerProps:u,endProps:d,wrap:p,sticky:m,bordered:h,...g})=>{let _=e,v=T(n),x=[M(r,`brand`),M(i,`start`),...N(c,`start`)],S=[M(a,`center`),...N(c,`center`)],C=[...N(c,`end`),M(o,`end`),M(s,`actions`)],E=x.some(Boolean)||S.some(Boolean)||C.some(Boolean);return b(_,{...g,className:w(`navbar`,p&&`flex-wrap gap-y-2`,m&&`sticky top-0 z-30`,h&&`border-b border-base-300`,t),children:v?n:y(f,{children:[E&&x.some(Boolean)?b(k,{...l,children:x}):null,E&&S.some(Boolean)?b(A,{...u,children:S}):null,E&&C.some(Boolean)?b(j,{...d,children:C}):null]})})},{Start:k,Center:A,End:j,Section:D,Item:O}),F=o=>g(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=n(`div`);i(c,l);let f=n(`h2`);i(l,f),t(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(f,r(`# `));let p=a(`rue:slot:anchor`);i(f,p),u(()=>{let e=o.title;m(()=>d(e,f,p))});let _=a(`rue:slot:anchor`);i(l,_),u(()=>{let r=o.summary?g(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),u(()=>{let e=o.summary;m(()=>d(e,s,c))}),r}):``;m(()=>d(r,l,_))});let v=a(`rue:component:anchor`);i(s,v),u(()=>{let e=h(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});m(()=>d(e,s,v))});let y=a(`rue:slot:anchor`);return i(s,y),u(()=>{let t=o.tab.value===`preview`?o.preview():g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(S,{className:`mt-2`,lang:`tsx`,code:o.code});m(()=>d(e,t,n))}),t});m(()=>d(t,s,y))}),s}),I=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let y=n(`th`);i(p,y),i(y,r(`类型`));let b=n(`th`);i(p,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=v({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),te=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`fill`,`none`),s(e,`viewBox`,`0 0 24 24`),t(e,`inline-block h-5 w-5 stroke-current`);let r=n(`path`);return i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`strokeWidth`,`2`),s(r,`d`,`M4 6h16M4 12h16M4 18h16`),e}),ne=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`fill`,`none`),s(e,`viewBox`,`0 0 24 24`),t(e,`inline-block h-5 w-5 stroke-current`);let r=n(`path`);return i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`strokeWidth`,`2`),s(r,`d`,`M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z`),e}),re=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`fill`,`none`),s(e,`viewBox`,`0 0 24 24`),t(e,`inline-block h-4 w-4 stroke-current`);let r=n(`path`);i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`strokeWidth`,`2`),s(r,`d`,`m21 21-4.35-4.35`);let a=n(`circle`);return i(e,a),s(a,`cx`,`11`),s(a,`cy`,`11`),s(a,`r`,`6`),s(a,`strokeWidth`,`2`),e}),L=()=>g(()=>{let e=n(`svg`);s(e,`xmlns`,`http://www.w3.org/2000/svg`),s(e,`fill`,`none`),s(e,`viewBox`,`0 0 24 24`),t(e,`inline-block h-4 w-4 stroke-current`);let r=n(`path`);i(e,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`strokeWidth`,`2`),s(r,`d`,`M14.857 17.082a23.848 23.848 0 0 1-5.714 0M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9`);let a=n(`path`);return i(e,a),s(a,`strokeLinecap`,`round`),s(a,`strokeLinejoin`,`round`),s(a,`strokeWidth`,`2`),s(a,`d`,`M13.73 21a2 2 0 0 1-3.46 0`),e}),R=e=>g(()=>{let r=n(`span`);t(r,`inline-grid h-8 w-8 place-items-center rounded-box bg-primary text-primary-content text-sm font-bold shadow-sm`);let o=a(`rue:slot:anchor`);return i(r,o),u(()=>{let t=e.label===void 0?`R`:e.label;m(()=>d(t,r,o))}),r}),ie=[{prop:`as`,description:`指定根节点标签，例如 div、header、nav`,type:`any`,defaultValue:`'div'`},{prop:`brand`,description:`推荐模式下的品牌区内容，会落在 start 区前面`,type:`any`,defaultValue:`-`},{prop:`start / center / end`,description:`推荐模式下的三个语义插槽`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`推荐模式下的操作区内容，会落在 end 区最后`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动写法；通过 placement 分发到 start、center、end`,type:`NavbarItem[]`,defaultValue:`-`},{prop:`startProps / centerProps / endProps`,description:`推荐模式下传给三个布局区的属性`,type:`Omit<NavbarSectionProps, "children" | "placement">`,defaultValue:`-`},{prop:`wrap`,description:`允许根节点换行，适合搜索框或操作区较多的场景`,type:`boolean`,defaultValue:`false`},{prop:`sticky`,description:`为根节点追加 sticky 头部定位类`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加底边框`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`经典组合模式；传入后优先按 children 渲染`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`指定布局区标签`,type:`any`,defaultValue:`'div'`},{prop:`align`,description:`控制区块内部对齐`,type:`'start' | 'center' | 'end' | 'between'`,defaultValue:`根据 placement 自动推导`},{prop:`grow`,description:`让布局区占据更多可用宽度`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`允许区块内部换行`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到 navbar-start / center / end 的类名`,type:`string`,defaultValue:`-`}],oe=[{prop:`placement`,description:`仅 items 数组使用，控制内容落在哪个区域`,type:`'start' | 'center' | 'end'`,defaultValue:`'start'`},{prop:`as`,description:`指定数据项或 Navbar.Item 的标签`,type:`any`,defaultValue:`'div'`},{prop:`content`,description:`数据驱动模式下的内容；等价于 children`,type:`any`,defaultValue:`-`},{prop:`grow`,description:`让单个项目在所在区块内扩展`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到内层 inline-flex 包裹节点的类名`,type:`string`,defaultValue:`-`}],z=()=>{let{tabRecommended:f,tabItems:v,tabLayout:S,tabTitleOnly:C,tabTitleAndIcon:w,tabThreePart:T,tabMenu:E,tabSearch:ee}=_(`useSetup:0:0`,()=>l(()=>({tabRecommended:_(`ref:1:0`,()=>p(`preview`)),tabItems:_(`ref:1:1`,()=>p(`preview`)),tabLayout:_(`ref:1:2`,()=>p(`preview`)),tabTitleOnly:_(`ref:1:3`,()=>p(`preview`)),tabTitleAndIcon:_(`ref:1:4`,()=>p(`preview`)),tabThreePart:_(`ref:1:5`,()=>p(`preview`)),tabMenu:_(`ref:1:6`,()=>p(`preview`)),tabSearch:_(`ref:1:7`,()=>p(`preview`))}))),D=[{key:`overview`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`})},{key:`docs`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`})},{key:`pricing`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Pricing`})},{key:`status`,placement:`end`,content:b(`div`,{className:`badge badge-outline badge-success`,children:`Online`})},{key:`notify`,placement:`end`,content:b(`button`,{className:`btn btn-ghost btn-circle btn-sm`,"aria-label":`通知`,children:b(L,{})})}];return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(x,{children:g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`max-w-none prose prose-sm md:prose-base`);let g=n(`h1`);i(p,g),i(g,r(`Navbar 导航栏`));let _=n(`p`);i(p,_),t(_,`text-sm mt-3 mb-3`),i(_,r(`Navbar 仍然保持 Rue 当前的视觉基础和 daisyUI 的布局骨架，但补齐了更适合真实项目的语义插槽、 数据驱动项和布局控制能力。`));let x=n(`div`);i(p,x),t(x,`text-sm flex flex-wrap gap-4`);let O=n(`a`);i(x,O),s(O,`href`,`https://daisyui.com/components/navbar/`),s(O,`target`,`_blank`),i(O,r(`查看 Navbar 静态样式`));let k=n(`h2`);i(p,k),i(k,r(`何时使用`));let A=n(`ul`);i(p,A);let j=n(`li`);i(A,j),i(j,r(`需要一个轻量的头部布局容器，用来放品牌、导航入口、搜索框和用户操作。`));let M=n(`li`);i(A,M),i(M,r(`希望保留 Rue 当前的视觉风格，但把常见头部结构改成更好复用的 API。`));let N=n(`li`);i(A,N),i(N,r(`既要支持快速搭建推荐用法，也要兼容原来的 children + Start/Center/End 手写布局。`));let L=a(`rue:component:anchor`);i(p,L),u(()=>{let e=h(F,{title:`推荐用法：语义插槽`,summary:`用 brand、center、actions 描述最常见的头部结构；布局细节交给 startProps 和 endProps。`,tab:f,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`rounded-box bg-base-100`,bordered:!0,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(R,{}),`Rue Console`]}),center:y(`div`,{className:`hidden items-center gap-1 lg:flex`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`}),b(`button`,{className:`btn btn-ghost btn-sm btn-active`,children:`Projects`}),b(`button`,{className:`btn btn-ghost btn-sm`,children:`Deployments`}),b(`button`,{className:`btn btn-ghost btn-sm`,children:`Analytics`})]}),actions:y(`div`,{className:`flex items-center gap-2`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`}),b(`button`,{className:`btn btn-primary btn-sm`,children:`New Project`})]}),startProps:{className:`gap-2`},endProps:{className:`gap-2`},"data-testid":`navbar-recommended`})})}),code:`<Navbar
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
/>`});m(()=>d(e,p,L))});let z=a(`rue:component:anchor`);i(p,z),u(()=>{let e=h(F,{title:`数据驱动导航项`,summary:`当中间菜单和右侧状态来自配置或接口时，用 items 比手写结构更容易维护。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`rounded-box bg-base-100`,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(R,{label:`W`}),`Workspace`]}),items:D,actions:b(`button`,{className:`btn btn-primary btn-sm`,children:`Invite`}),centerProps:{className:`hidden md:flex gap-1`},endProps:{className:`gap-2`},"data-testid":`navbar-items`})})}),code:`const items = [
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
/>`});m(()=>d(e,p,z))});let se=a(`rue:component:anchor`);i(p,se),u(()=>{let e=h(F,{title:`根节点与布局控制`,summary:`支持 header 根节点、换行和区块对齐，适合内容更密集的工作台头部。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:b(P,{as:`header`,wrap:!0,bordered:!0,className:`rounded-box bg-base-100 px-4 py-2`,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(R,{}),`Rue Docs`]}),start:b(`div`,{className:`badge badge-outline`,children:`v2.4`}),center:y(`label`,{className:`input input-bordered hidden w-full max-w-md items-center gap-2 md:flex`,children:[b(re,{}),b(`input`,{type:`text`,className:`grow`,placeholder:`Search docs`})]}),actions:y(`div`,{className:`flex items-center gap-2`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Changelog`}),b(`button`,{className:`btn btn-neutral btn-sm`,children:`Feedback`})]}),startProps:{className:`w-auto flex-none items-center gap-2`},centerProps:{grow:!0,className:`order-3 basis-full justify-start pt-2 md:order-none md:basis-auto md:pt-0 md:px-6`},endProps:{className:`w-auto flex-none items-center gap-2`},"data-testid":`navbar-layout`})})}),code:`<Navbar
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
/>`});m(()=>d(e,p,se))});let ce=n(`h2`);i(p,ce),i(ce,r(`经典 demo`));let le=n(`p`);i(p,le),i(le,r(`下面这几组示例保留了原有写法，只做了页面重组，方便继续对照 Start / Center / End 的经典组合方式。`));let ue=a(`rue:component:anchor`);i(p,ue),u(()=>{let e=h(F,{title:`仅标题`,summary:`最简单的 navbar，用 root 直接承载内容。`,tab:C,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-only`,children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <button className="btn btn-ghost text-xl">daisyUI</button>
</Navbar>`});m(()=>d(e,p,ue))});let B=a(`rue:component:anchor`);i(p,B),u(()=>{let e=h(F,{title:`标题与图标`,summary:`保留经典的 Start + End 组合。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-icon`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(ne,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <Navbar.Start>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </Navbar.Start>
  <Navbar.End>
    <button className="btn btn-square btn-ghost">
      <MoreIcon />
    </button>
  </Navbar.End>
</Navbar>`});m(()=>d(e,p,B))});let V=a(`rue:component:anchor`);i(p,V),u(()=>{let e=h(F,{title:`三段式布局`,summary:`中间标题 + 两侧图标，是最标准的三栏头部。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-three-part`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(te,{})})}),b(P.Center,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(ne,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});m(()=>d(e,p,V))});let H=a(`rue:component:anchor`);i(p,H),u(()=>{let e=h(F,{title:`菜单与子菜单`,summary:`继续保留菜单容器和 details 子菜单的经典演示。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-menu-demo`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:y(`ul`,{className:`menu menu-horizontal items-center gap-1 px-1`,children:[b(`li`,{children:b(`button`,{className:`h-10 min-h-10 items-center`,children:`Link`})}),b(`li`,{children:y(`details`,{children:[b(`summary`,{className:`h-10 min-h-10 items-center`,children:`Parent`}),y(`ul`,{className:`bg-base-100 rounded-t-none p-2`,children:[b(`li`,{children:b(`button`,{children:`Link 1`})}),b(`li`,{children:b(`button`,{children:`Link 2`})})]})]})})]})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});m(()=>d(e,p,H))});let U=a(`rue:component:anchor`);i(p,U),u(()=>{let e=h(F,{title:`搜索框与头像下拉`,summary:`保留搜索、头像和下拉菜单混排的经典结构。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-search-demo`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),y(P.End,{className:`gap-2`,children:[b(`input`,{type:`text`,placeholder:`Search`,className:`input input-bordered w-24 md:w-auto`}),y(`div`,{className:`dropdown dropdown-end`,children:[b(`div`,{tabIndex:`0`,role:`button`,className:`btn btn-ghost btn-circle avatar`,children:b(`div`,{className:`w-10 rounded-full`,children:b(`img`,{alt:`Tailwind CSS Navbar component`,src:`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`})})}),y(`ul`,{tabIndex:`-1`,className:`mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`,children:[b(`li`,{children:y(`button`,{className:`justify-between`,children:[`Profile`,b(`span`,{className:`badge`,children:`New`})]})}),b(`li`,{children:b(`button`,{children:`Settings`})}),b(`li`,{children:b(`button`,{children:`Logout`})})]})]})]})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});m(()=>d(e,p,U))});let W=n(`h2`);i(p,W),s(W,`id`,`navbar-api`),i(W,r(`API`));let de=n(`p`);i(p,de),i(de,r(`Navbar 现在同时支持推荐的语义插槽模式，以及原有的组合模式。`));let fe=n(`h3`);i(p,fe),i(fe,r(`Navbar`));let pe=a(`rue:component:anchor`);i(p,pe),u(()=>{let e=h(I,{rows:ie});m(()=>d(e,p,pe))});let me=n(`h3`);i(p,me),i(me,r(`Navbar.Start / Navbar.Center / Navbar.End / Navbar.Section`));let he=a(`rue:component:anchor`);i(p,he),u(()=>{let e=h(I,{rows:ae});m(()=>d(e,p,he))});let ge=n(`h3`);i(p,ge),i(ge,r(`Navbar.Item / items[]`));let _e=a(`rue:component:anchor`);i(p,_e),u(()=>{let e=h(I,{rows:oe});m(()=>d(e,p,_e))});let G=n(`div`);i(p,G),t(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let K=n(`h3`);i(G,K),t(K,`mt-0 mb-3 text-base font-semibold`),i(K,r(`双模式说明`));let q=n(`div`);i(G,q),t(q,`grid gap-3 text-sm md:grid-cols-2`);let J=n(`div`);i(q,J);let ve=n(`code`);i(J,ve),i(ve,r(`children + Navbar.Start/Center/End`)),i(J,r(`: 适合完全手写布局，兼容旧 demo。`));let Y=n(`div`);i(q,Y);let ye=n(`code`);i(Y,ye),i(ye,r(`brand / start / center / end / actions / items`)),i(Y,r(`: 适合抽象成复用头部或通过配置生成导航结构。`));let be=n(`h2`);i(p,be),i(be,r(`FAQ`));let xe=n(`h3`);i(p,xe),i(xe,r(`什么时候选推荐模式，什么时候继续手写 children？`));let X=n(`p`);i(p,X),i(X,r(`如果页面头部结构在多个页面之间重复，或者导航项来自配置，优先用语义插槽和`));let Se=o(X);i(X,Se),c(Se,` `);let Z=n(`code`);i(X,Z),i(Z,r(`items`)),i(X,r(`。 如果当前头部结构非常自由，包含复杂的 dropdown、menu、搜索表单，继续手写`));let Ce=n(`code`);i(X,Ce),i(Ce,r(`children + Navbar.Start/Center/End`)),i(X,r(`会更直接。`));let we=n(`h3`);i(p,we),i(we,r(`children 和 items 同时传时谁优先？`));let Q=n(`p`);i(p,Q),i(Q,r(`当前实现会优先渲染`));let Te=n(`code`);i(Q,Te),i(Te,r(`children`)),i(Q,r(`。这样可以保证旧代码迁移时不被新属性打断， 也能让组合模式保持完全可控。`));let Ee=n(`h3`);i(p,Ee),i(Ee,r(`sticky 和 bordered 是强样式能力吗？`));let $=n(`p`);i(p,$),i($,r(`不是。它们只是补一层常用布局类，仍然遵循 Rue 当前的视觉基底；更细的背景、阴影、圆角和响应式布局， 依然建议通过`));let De=n(`code`);i($,De),i(De,r(`className`));let Oe=o($);return i($,Oe),c(Oe,` `),i($,r(`和区块 props 来组合。`)),l})}),l,p),l})};export{z as default};