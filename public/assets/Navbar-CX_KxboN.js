import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,m as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as y,i as b}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as x}from"./Code-5DOEyGxf.js";import{t as S}from"./tabs-CWmjyn0I.js";import{r as C}from"./SidebarPlaygroundDesign-CS11MI8e.js";import{t as w}from"./preview-test-gate-DdwKChL0.js";var T=(...e)=>e.filter(Boolean).join(` `),E=e=>e==null?!1:Array.isArray(e)?e.some(e=>E(e)):!0,ee=(e,t)=>{if(e===`between`)return`justify-between`;if(e===`center`)return`justify-center`;if(e===`end`)return`justify-end`;if(e===`start`)return`justify-start`;if(t===`center`)return`justify-center`;if(t===`end`)return`justify-end`},te=(e,t,n,r,i)=>T(`navbar-${e}`,ee(t,e),n&&`flex-1`,r&&`flex-wrap`,i),D=({as:e=`div`,className:t,children:n,align:r,grow:i,wrap:a,placement:o=`start`,...s})=>b(e,{...s,className:te(o,r,i,a,t),children:n}),O=({as:e=`div`,className:t,children:n,content:r,grow:i,...a})=>b(e,{...a,className:T(`inline-flex min-w-0 items-center`,i&&`flex-1`,t),children:r??n}),k=e=>b(D,{...e,placement:`start`}),A=e=>b(D,{...e,placement:`center`}),j=e=>b(D,{...e,placement:`end`}),M=(e,t)=>E(e)?b(O,{children:e},t):null,N=(e,t)=>(e??[]).filter(e=>(e.placement??`start`)===t).map((e,n)=>{let{key:r,placement:i,content:a,children:o,...s}=e;return b(O,{...s,content:a??o},r??`${t}-${n}`)}),P=Object.assign(({as:e=`div`,className:t,children:n,brand:r,start:i,center:a,end:o,actions:s,items:c,startProps:l,centerProps:d,endProps:f,wrap:p,sticky:m,bordered:h,...g})=>{let _=e,v=E(n),x=[M(r,`brand`),M(i,`start`),...N(c,`start`)],S=[M(a,`center`),...N(c,`center`)],C=[...N(c,`end`),M(o,`end`),M(s,`actions`)],w=x.some(Boolean)||S.some(Boolean)||C.some(Boolean);return b(_,{...g,className:T(`navbar`,p&&`flex-wrap gap-y-2`,m&&`sticky top-0 z-30`,h&&`border-b border-base-300`,t),children:v?n:y(u,{children:[w&&x.some(Boolean)?b(k,{...l,children:x}):null,w&&S.some(Boolean)?b(A,{...d,children:S}):null,w&&C.some(Boolean)?b(j,{...f,children:C}):null]})})},{Start:k,Center:A,End:j,Section:D,Item:O}),F=r=>l(u=>{let d=e(`div`,u);s(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,d);a(d,f),s(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);a(f,p);let g=e(`h2`,p);a(p,g),s(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,c(`# `));let _=o(`rue:slot:anchor`);a(g,_),i(()=>{let e=r.title;t(()=>m(e,g,_))});let v=o(`rue:slot:anchor`);a(p,v),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>m(e,l,u))}),c}):``;t(()=>m(c,p,v))});let y=o(`rue:component:anchor`);a(d,y),i(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>m(e,d,y))});let b=o(`rue:slot:anchor`);return a(d,b),i(()=>{let e=r.tab.value===`preview`?w(r.title,r.preview):l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=h(x,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>m(n,e,s))}),e});t(()=>m(e,d,b))}),d}),I=r=>l(u=>{let d=e(`div`,u);s(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,d);a(d,p),s(p,`table table-zebra`);let h=e(`thead`,p);a(p,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,c(`属性`));let y=e(`th`,g);a(g,y),a(y,c(`说明`));let b=e(`th`,g);a(g,b),a(b,c(`类型`));let x=e(`th`,g);a(g,x),a(x,c(`默认值`));let S=e(`tbody`,p);a(p,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,u,d)=>{m(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{f(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=o(`rue:slot:anchor`);a(u,d),i(()=>{let e=r.prop;t(()=>m(e,u,d))});let p=e(`td`,c);a(c,p);let h=o(`rue:slot:anchor`);a(p,h),i(()=>{let e=r.description;t(()=>m(e,p,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>m(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>m(e,b,x))}),s}),s,c)}})}),d}),ne=()=>l(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`fill`,`none`),f(n,`viewBox`,`0 0 24 24`),s(n,`inline-block h-5 w-5 stroke-current`);let r=e(`path`,n);return a(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`strokeWidth`,`2`),f(r,`d`,`M4 6h16M4 12h16M4 18h16`),n}),L=()=>l(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`fill`,`none`),f(n,`viewBox`,`0 0 24 24`),s(n,`inline-block h-5 w-5 stroke-current`);let r=e(`path`,n);return a(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`strokeWidth`,`2`),f(r,`d`,`M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z`),n}),re=()=>l(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`fill`,`none`),f(n,`viewBox`,`0 0 24 24`),s(n,`inline-block h-4 w-4 stroke-current`);let r=e(`path`,n);a(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`strokeWidth`,`2`),f(r,`d`,`m21 21-4.35-4.35`);let i=e(`circle`,n);return a(n,i),f(i,`cx`,`11`),f(i,`cy`,`11`),f(i,`r`,`6`),f(i,`strokeWidth`,`2`),n}),R=()=>l(t=>{let n=e(`svg`,t);f(n,`xmlns`,`http://www.w3.org/2000/svg`),f(n,`fill`,`none`),f(n,`viewBox`,`0 0 24 24`),s(n,`inline-block h-4 w-4 stroke-current`);let r=e(`path`,n);a(n,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`strokeWidth`,`2`),f(r,`d`,`M14.857 17.082a23.848 23.848 0 0 1-5.714 0M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9`);let i=e(`path`,n);return a(n,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M13.73 21a2 2 0 0 1-3.46 0`),n}),z=n=>l(r=>{let c=e(`span`,r);s(c,`inline-grid h-8 w-8 place-items-center rounded-box bg-primary text-primary-content text-sm font-bold shadow-sm`);let l=o(`rue:slot:anchor`);return a(c,l),i(()=>{let e=n.label===void 0?`R`:n.label;t(()=>m(e,c,l))}),c}),ie=[{prop:`as`,description:`指定根节点标签，例如 div、header、nav`,type:`any`,defaultValue:`'div'`},{prop:`brand`,description:`推荐模式下的品牌区内容，会落在 start 区前面`,type:`any`,defaultValue:`-`},{prop:`start / center / end`,description:`推荐模式下的三个语义插槽`,type:`any`,defaultValue:`-`},{prop:`actions`,description:`推荐模式下的操作区内容，会落在 end 区最后`,type:`any`,defaultValue:`-`},{prop:`items`,description:`数据驱动写法；通过 placement 分发到 start、center、end`,type:`NavbarItem[]`,defaultValue:`-`},{prop:`startProps / centerProps / endProps`,description:`推荐模式下传给三个布局区的属性`,type:`Omit<NavbarSectionProps, "children" | "placement">`,defaultValue:`-`},{prop:`wrap`,description:`允许根节点换行，适合搜索框或操作区较多的场景`,type:`boolean`,defaultValue:`false`},{prop:`sticky`,description:`为根节点追加 sticky 头部定位类`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`为根节点追加底边框`,type:`boolean`,defaultValue:`false`},{prop:`children`,description:`经典组合模式；传入后优先按 children 渲染`,type:`any`,defaultValue:`-`}],ae=[{prop:`as`,description:`指定布局区标签`,type:`any`,defaultValue:`'div'`},{prop:`align`,description:`控制区块内部对齐`,type:`'start' | 'center' | 'end' | 'between'`,defaultValue:`根据 placement 自动推导`},{prop:`grow`,description:`让布局区占据更多可用宽度`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`允许区块内部换行`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到 navbar-start / center / end 的类名`,type:`string`,defaultValue:`-`}],oe=[{prop:`placement`,description:`仅 items 数组使用，控制内容落在哪个区域`,type:`'start' | 'center' | 'end'`,defaultValue:`'start'`},{prop:`as`,description:`指定数据项或 Navbar.Item 的标签`,type:`any`,defaultValue:`'div'`},{prop:`content`,description:`数据驱动模式下的内容；等价于 children`,type:`any`,defaultValue:`-`},{prop:`grow`,description:`让单个项目在所在区块内扩展`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`追加到内层 inline-flex 包裹节点的类名`,type:`string`,defaultValue:`-`}],B=()=>{let{tabRecommended:u,tabItems:v,tabLayout:x,tabTitleOnly:S,tabTitleAndIcon:w,tabThreePart:T,tabMenu:E,tabSearch:ee}=_(`useSetup:0:0`,()=>p(()=>({tabRecommended:_(`ref:1:0`,()=>r(`preview`)),tabItems:_(`ref:1:1`,()=>r(`preview`)),tabLayout:_(`ref:1:2`,()=>r(`preview`)),tabTitleOnly:_(`ref:1:3`,()=>r(`preview`)),tabTitleAndIcon:_(`ref:1:4`,()=>r(`preview`)),tabThreePart:_(`ref:1:5`,()=>r(`preview`)),tabMenu:_(`ref:1:6`,()=>r(`preview`)),tabSearch:_(`ref:1:7`,()=>r(`preview`))}))),te=[{key:`overview`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`})},{key:`docs`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`})},{key:`pricing`,placement:`center`,content:b(`button`,{className:`btn btn-ghost btn-sm`,children:`Pricing`})},{key:`status`,placement:`end`,content:b(`div`,{className:`badge badge-outline badge-success`,children:`Online`})},{key:`notify`,placement:`end`,content:b(`button`,{className:`btn btn-ghost btn-circle btn-sm`,"aria-label":`通知`,children:b(R,{})})}];return l(r=>{let p=n(),_=o(`rue:component:anchor`);return a(p,_),m(h(C,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,l);a(l,p),a(p,c(`Navbar 导航栏`));let _=e(`p`,l);a(l,_),s(_,`text-sm mt-3 mb-3`),a(_,c(`Navbar 仍然保持 Rue 当前的视觉基础和 daisyUI 的布局骨架，但补齐了更适合真实项目的语义插槽、 数据驱动项和布局控制能力。`));let C=e(`h2`,l);a(l,C),a(C,c(`何时使用`));let D=e(`ul`,l);a(l,D);let O=e(`li`,D);a(D,O),a(O,c(`需要一个轻量的头部布局容器，用来放品牌、导航入口、搜索框和用户操作。`));let k=e(`li`,D);a(D,k),a(k,c(`希望保留 Rue 当前的视觉风格，但把常见头部结构改成更好复用的 API。`));let A=e(`li`,D);a(D,A),a(A,c(`既要支持快速搭建推荐用法，也要兼容原来的 children + Start/Center/End 手写布局。`));let j=o(`rue:component:anchor`);a(l,j),i(()=>{let e=h(F,{title:`推荐用法：语义插槽`,summary:`用 brand、center、actions 描述最常见的头部结构；布局细节交给 startProps 和 endProps。`,tab:u,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`rounded-box bg-base-100`,bordered:!0,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(z,{}),`Rue Console`]}),center:y(`div`,{className:`hidden items-center gap-1 lg:flex`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Overview`}),b(`button`,{className:`btn btn-ghost btn-sm btn-active`,children:`Projects`}),b(`button`,{className:`btn btn-ghost btn-sm`,children:`Deployments`}),b(`button`,{className:`btn btn-ghost btn-sm`,children:`Analytics`})]}),actions:y(`div`,{className:`flex items-center gap-2`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Docs`}),b(`button`,{className:`btn btn-primary btn-sm`,children:`New Project`})]}),startProps:{className:`gap-2`},endProps:{className:`gap-2`},"data-testid":`navbar-recommended`})})}),code:`<Navbar
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
/>`});t(()=>m(e,l,j))});let M=o(`rue:component:anchor`);a(l,M),i(()=>{let e=h(F,{title:`数据驱动导航项`,summary:`当中间菜单和右侧状态来自配置或接口时，用 items 比手写结构更容易维护。`,tab:v,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`rounded-box bg-base-100`,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(z,{label:`W`}),`Workspace`]}),items:te,actions:b(`button`,{className:`btn btn-primary btn-sm`,children:`Invite`}),centerProps:{className:`hidden md:flex gap-1`},endProps:{className:`gap-2`},"data-testid":`navbar-items`})})}),code:`const items = [
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
/>`});t(()=>m(e,l,M))});let N=o(`rue:component:anchor`);a(l,N),i(()=>{let e=h(F,{title:`根节点与布局控制`,summary:`支持 header 根节点、换行和区块对齐，适合内容更密集的工作台头部。`,tab:x,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body gap-4`,children:b(P,{as:`header`,wrap:!0,bordered:!0,className:`rounded-box bg-base-100 px-4 py-2`,brand:y(`a`,{className:`btn btn-ghost gap-3 px-2 text-lg normal-case`,children:[b(z,{}),`Rue Docs`]}),start:b(`div`,{className:`badge badge-outline`,children:`v2.4`}),center:y(`label`,{className:`input input-bordered hidden w-full max-w-md items-center gap-2 md:flex`,children:[b(re,{}),b(`input`,{type:`text`,className:`grow`,placeholder:`Search docs`})]}),actions:y(`div`,{className:`flex items-center gap-2`,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Changelog`}),b(`button`,{className:`btn btn-neutral btn-sm`,children:`Feedback`})]}),startProps:{className:`w-auto flex-none items-center gap-2`},centerProps:{grow:!0,className:`order-3 basis-full justify-start pt-2 md:order-none md:basis-auto md:pt-0 md:px-6`},endProps:{className:`w-auto flex-none items-center gap-2`},"data-testid":`navbar-layout`})})}),code:`<Navbar
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
/>`});t(()=>m(e,l,N))});let R=e(`h2`,l);a(l,R),a(R,c(`经典 demo`));let B=e(`p`,l);a(l,B),a(B,c(`下面这几组示例保留了原有写法，只做了页面重组，方便继续对照 Start / Center / End 的经典组合方式。`));let se=o(`rue:component:anchor`);a(l,se),i(()=>{let e=h(F,{title:`仅标题`,summary:`最简单的 navbar，用 root 直接承载内容。`,tab:S,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:b(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-only`,children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <button className="btn btn-ghost text-xl">daisyUI</button>
</Navbar>`});t(()=>m(e,l,se))});let ce=o(`rue:component:anchor`);a(l,ce),i(()=>{let e=h(F,{title:`标题与图标`,summary:`保留经典的 Start + End 组合。`,tab:w,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-title-icon`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(L,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
  <Navbar.Start>
    <button className="btn btn-ghost text-xl">daisyUI</button>
  </Navbar.Start>
  <Navbar.End>
    <button className="btn btn-square btn-ghost">
      <MoreIcon />
    </button>
  </Navbar.End>
</Navbar>`});t(()=>m(e,l,ce))});let V=o(`rue:component:anchor`);a(l,V),i(()=>{let e=h(F,{title:`三段式布局`,summary:`中间标题 + 两侧图标，是最标准的三栏头部。`,tab:T,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-three-part`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(ne,{})})}),b(P.Center,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:b(`button`,{className:`btn btn-square btn-ghost`,children:b(L,{})})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});t(()=>m(e,l,V))});let H=o(`rue:component:anchor`);a(l,H),i(()=>{let e=h(F,{title:`菜单与子菜单`,summary:`继续保留菜单容器和 details 子菜单的经典演示。`,tab:E,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-menu-demo`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),b(P.End,{children:y(`ul`,{className:`menu menu-horizontal items-center gap-1 px-1`,children:[b(`li`,{children:b(`button`,{className:`h-10 min-h-10 items-center`,children:`Link`})}),b(`li`,{children:y(`details`,{children:[b(`summary`,{className:`h-10 min-h-10 items-center`,children:`Parent`}),y(`ul`,{className:`bg-base-100 rounded-t-none p-2`,children:[b(`li`,{children:b(`button`,{children:`Link 1`})}),b(`li`,{children:b(`button`,{children:`Link 2`})})]})]})})]})})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});t(()=>m(e,l,H))});let U=o(`rue:component:anchor`);a(l,U),i(()=>{let e=h(F,{title:`搜索框与头像下拉`,summary:`保留搜索、头像和下拉菜单混排的经典结构。`,tab:ee,preview:()=>b(`div`,{className:`card bg-base-100 shadow-sm mb-32`,children:b(`div`,{className:`card-body`,children:y(P,{className:`bg-base-100 shadow-sm`,"data-testid":`navbar-search-demo`,children:[b(P.Start,{children:b(`button`,{className:`btn btn-ghost text-xl`,children:`daisyUI`})}),y(P.End,{className:`gap-2`,children:[b(`input`,{type:`text`,placeholder:`Search`,className:`input input-bordered w-24 md:w-auto`}),y(`div`,{className:`dropdown dropdown-end`,children:[b(`div`,{tabIndex:`0`,role:`button`,className:`btn btn-ghost btn-circle avatar`,children:b(`div`,{className:`w-10 rounded-full`,children:b(`img`,{alt:`Tailwind CSS Navbar component`,src:`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`})})}),y(`ul`,{tabIndex:`-1`,className:`mt-3 z-1 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`,children:[b(`li`,{children:y(`button`,{className:`justify-between`,children:[`Profile`,b(`span`,{className:`badge`,children:`New`})]})}),b(`li`,{children:b(`button`,{children:`Settings`})}),b(`li`,{children:b(`button`,{children:`Logout`})})]})]})]})]})})}),code:`<Navbar className="bg-base-100 shadow-sm">
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
</Navbar>`});t(()=>m(e,l,U))});let W=e(`h2`,l);a(l,W),f(W,`id`,`navbar-api`),a(W,c(`API`));let le=e(`p`,l);a(l,le),a(le,c(`Navbar 现在同时支持推荐的语义插槽模式，以及原有的组合模式。`));let ue=e(`h3`,l);a(l,ue),a(ue,c(`Navbar`));let de=o(`rue:component:anchor`);a(l,de),i(()=>{let e=h(I,{rows:ie});t(()=>m(e,l,de))});let fe=e(`h3`,l);a(l,fe),a(fe,c(`Navbar.Start / Navbar.Center / Navbar.End / Navbar.Section`));let pe=o(`rue:component:anchor`);a(l,pe),i(()=>{let e=h(I,{rows:ae});t(()=>m(e,l,pe))});let me=e(`h3`,l);a(l,me),a(me,c(`Navbar.Item / items[]`));let he=o(`rue:component:anchor`);a(l,he),i(()=>{let e=h(I,{rows:oe});t(()=>m(e,l,he))});let G=e(`div`,l);a(l,G),s(G,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4`);let K=e(`h3`,G);a(G,K),s(K,`mt-0 mb-3 text-base font-semibold`),a(K,c(`双模式说明`));let q=e(`div`,G);a(G,q),s(q,`grid gap-3 text-sm md:grid-cols-2`);let J=e(`div`,q);a(q,J);let ge=e(`code`,J);a(J,ge),a(ge,c(`children + Navbar.Start/Center/End`)),a(J,c(`: 适合完全手写布局，兼容旧 demo。`));let Y=e(`div`,q);a(q,Y);let _e=e(`code`,Y);a(Y,_e),a(_e,c(`brand / start / center / end / actions / items`)),a(Y,c(`: 适合抽象成复用头部或通过配置生成导航结构。`));let ve=e(`h2`,l);a(l,ve),a(ve,c(`FAQ`));let ye=e(`h3`,l);a(l,ye),a(ye,c(`什么时候选推荐模式，什么时候继续手写 children？`));let X=e(`p`,l);a(l,X),a(X,c(`如果页面头部结构在多个页面之间重复，或者导航项来自配置，优先用语义插槽和`));let be=g(X);a(X,be),d(be,` `);let xe=e(`code`,X);a(X,xe),a(xe,c(`items`)),a(X,c(`。 如果当前头部结构非常自由，包含复杂的 dropdown、menu、搜索表单，继续手写`));let Se=e(`code`,X);a(X,Se),a(Se,c(`children + Navbar.Start/Center/End`)),a(X,c(`会更直接。`));let Ce=e(`h3`,l);a(l,Ce),a(Ce,c(`children 和 items 同时传时谁优先？`));let Z=e(`p`,l);a(l,Z),a(Z,c(`当前实现会优先渲染`));let we=e(`code`,Z);a(Z,we),a(we,c(`children`)),a(Z,c(`。这样可以保证旧代码迁移时不被新属性打断， 也能让组合模式保持完全可控。`));let Q=e(`h3`,l);a(l,Q),a(Q,c(`sticky 和 bordered 是强样式能力吗？`));let $=e(`p`,l);a(l,$),a($,c(`不是。它们只是补一层常用布局类，仍然遵循 Rue 当前的视觉基底；更细的背景、阴影、圆角和响应式布局， 依然建议通过`));let Te=e(`code`,$);a($,Te),a(Te,c(`className`));let Ee=g($);return a($,Ee),d(Ee,` `),a($,c(`和区块 props 来组合。`)),r})}),p,_),p})};export{B as default};