import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,ot as p,t as m,tt as h}from"./vapor-runtime-BR_2rwNk.js";import{a as g,n as _}from"./vapor-helpers-vapor-DkadWylb.js";import{i as v,r as y}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as b}from"./dropdown-DJlsoLki.js";import{n as x}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as S}from"./PreviewBlock-DNT1sEzZ.js";var C=t=>l(n=>{let f=e(`div`,n);c(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,f);a(f,m),c(m,`table table-zebra`);let h=e(`thead`,m);a(m,h);let g=e(`tr`,h);a(h,g);let v=e(`th`,g);a(g,v),a(v,u(`属性`));let y=e(`th`,g);a(g,y),a(y,u(`说明`));let b=e(`th`,g);a(g,b),a(b,u(`类型`));let x=e(`th`,g);a(g,x),a(x,u(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,u,f)=>{d(l(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{p(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let f=s(`rue:slot:anchor`);a(u,f),o(()=>{let e=t.prop;i(()=>d(e,u,f))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>d(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>d(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>d(e,b,x))}),n}),n,c)}})}),f}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>t(()=>({open:g(`ref:1:0`,()=>n(!1)),source:g(`ref:1:1`,()=>n(`trigger`))})));return l(t=>{let n=e(`div`,t);c(n,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=e(`div`,n);a(n,g),c(g,`flex flex-wrap items-center gap-3`);let y=s(`rue:component:anchor`);a(g,y);let x=l(()=>{let t=r(),n=e(`button`,t);a(t,n),p(n,`type`,`button`),c(n,`btn btn-primary`),p(n,`data-testid`,`dropdown-controlled-trigger`);let i=h(n);return a(n,i),o(()=>{f(i,_.value?`关闭菜单`:`打开菜单`)}),t});o(()=>{let e=m(b,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:x});i(()=>d(e,g,y))});let S=e(`span`,g);a(g,S),c(S,`text-sm text-base-content/70`),a(S,u(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=e(`code`,S);a(S,C),a(C,u(`open`)),a(S,u(`变化。`));let w=e(`div`,n);a(n,w),c(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=e(`div`,w);a(w,T),c(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=e(`div`,T);a(T,E),c(E,`text-sm font-medium`),a(E,u(`受控状态面板`));let D=e(`div`,T);a(T,D),c(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=e(`div`,D);a(D,O),c(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=e(`span`,O);a(O,k),c(k,`text-xs uppercase tracking-wide text-base-content/60`),a(k,u(`当前状态`));let A=e(`span`,O);a(O,A),c(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),p(A,`data-testid`,`dropdown-controlled-state`);let j=h(A);a(A,j),o(()=>{f(j,_.value?`open`:`closed`)});let M=e(`div`,D);a(D,M),c(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=e(`span`,M);a(M,N),c(N,`text-sm text-base-content/60`),a(N,u(`最近来源`));let P=e(`span`,M);a(M,P),c(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),p(P,`data-testid`,`dropdown-controlled-source`);let F=h(P);return a(P,F),o(()=>{f(F,v.value)}),n})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认更接近成熟组件库的 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`保留 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`原有 daisyUI 风格能力继续保留，适合原生结构或静态布局演示。`,type:`兼容属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`旧的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保留默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>t(()=>({tabs:{recommended:g(`ref:1:2`,()=>n(`preview`)),controlled:g(`ref:1:3`,()=>n(`preview`)),selectable:g(`ref:1:4`,()=>n(`preview`)),custom:g(`ref:1:5`,()=>n(`preview`)),contextMenu:g(`ref:1:6`,()=>n(`preview`)),details:g(`ref:1:7`,()=>n(`preview`)),popover:g(`ref:1:8`,()=>n(`preview`)),focus:g(`ref:1:9`,()=>n(`preview`)),positions:g(`ref:1:10`,()=>n(`preview`)),modifiers:g(`ref:1:11`,()=>n(`preview`))},selectedKeys:g(`ref:1:12`,()=>n([`overview`])),filterKeys:g(`ref:1:13`,()=>n([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return l(t=>{let n=r(),g=s(`rue:component:anchor`);return a(n,g),d(m(x,{children:l(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let l=e(`h1`,n);a(n,l),a(l,u(`Dropdown 下拉菜单`));let g=e(`p`,n);a(n,g),c(g,`text-sm mt-3 mb-3`),a(g,u(`Rue 的 Dropdown 现在同时支持两条路径：一条是保留当前视觉风格与 daisyUI 原生结构的兼容写法；另一条是更贴近业务组件习惯的增强 API，直接支持`));let x=h(g);a(g,x),f(x,` `);let j=e(`code`,g);a(g,j),a(j,u(`menu / items`)),a(g,u(`、`));let M=e(`code`,g);a(g,M),a(M,u(`trigger`)),a(g,u(`、`));let N=e(`code`,g);a(g,N),a(N,u(`placement`)),a(g,u(`、`));let P=e(`code`,g);a(g,P),a(P,u(`open`)),a(g,u(`、`));let F=e(`code`,g);a(g,F),a(F,u(`popupRender`)),a(g,u(`和右键菜单。`));let I=e(`div`,n);a(n,I),c(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=e(`div`,I);a(I,L),c(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=e(`div`,L);a(L,R),c(R,`text-xs font-semibold uppercase tracking-wide text-primary`),a(R,u(`推荐写法`));let z=e(`div`,L);a(L,z),c(z,`mt-2 text-sm font-medium`),a(z,u(`用 menu / items 描述命令菜单`));let B=e(`p`,L);a(L,B),c(B,`mt-2 text-sm opacity-70`),a(B,u(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let V=e(`div`,I);a(I,V),c(V,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let H=e(`div`,V);a(V,H),c(H,`text-xs font-semibold uppercase tracking-wide text-secondary`),a(H,u(`daisyUI 原始写法`));let U=e(`div`,V);a(V,U),c(U,`mt-2 text-sm font-medium`),a(U,u(`原始写法可用`));let W=e(`p`,V);a(V,W),c(W,`mt-2 text-sm opacity-70`);let ee=e(`code`,W);a(W,ee),a(ee,u(`details`)),a(W,u(`、`));let te=e(`code`,W);a(W,te),a(te,u(`popover`)),a(W,u(`、`));let ne=e(`code`,W);a(W,ne),a(ne,u(`focus`)),a(W,u(`、位置类和 modifier 都没有删除。`));let G=e(`div`,I);a(I,G),c(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=e(`div`,G);a(G,K),c(K,`text-xs font-semibold uppercase tracking-wide text-accent`),a(K,u(`交互补齐`));let q=e(`div`,G);a(G,q),c(q,`mt-2 text-sm font-medium`),a(q,u(`受控、右键、可选中、自定义面板`));let re=e(`p`,G);a(G,re),c(re,`mt-2 text-sm opacity-70`),a(re,u(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let ie=e(`h2`,n);a(n,ie),a(ie,u(`何时使用`));let J=e(`ul`,n);a(n,J);let ae=e(`li`,J);a(J,ae),a(ae,u(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let oe=e(`li`,J);a(J,oe),a(oe,u(`希望保留 Rue 当前 dropdown 视觉风格，但把 API 提升到更接近成熟组件库的层级。`));let se=e(`li`,J);a(J,se),a(se,u(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ce=e(`h2`,n);a(n,ce),a(ce,u(`推荐增强 API`));let le=s(`rue:component:anchor`);a(n,le),o(()=>{let e=m(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
  {
    type: 'group',
    label: 'Workspace',
    children: [
      { key: 'overview', label: 'Overview', extra: <span className="badge badge-primary badge-xs">Live</span> },
      { key: 'activity', label: 'Activity Feed' },
    ],
  },
  {
    type: 'submenu',
    key: 'publish',
    label: 'Publish',
    children: [
      { key: 'draft', label: 'Save Draft' },
      { key: 'review', label: 'Send For Review' },
      { key: 'live', label: 'Publish Now', danger: true },
    ],
  },
  { type: 'divider' },
  { key: 'archive', label: 'Archive Space' },
];

<Dropdown trigger="click" placement="bottomLeft" arrow items={items}>
  <button className="btn btn-primary">Workspace</button>
</Dropdown>`});i(()=>d(e,n,le))});let ue=s(`rue:component:anchor`);a(n,ue),o(()=>{let e=m(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
const source = ref('trigger');

<Dropdown
  trigger="click"
  open={open.value}
  onOpenChange={(nextOpen, info) => {
    open.value = nextOpen;
    source.value = info.source;
  }}
  menu={{
    items: [
      { key: 'pin', label: 'Pin to top' },
      { key: 'mute', label: 'Mute notifications' },
      { type: 'divider' },
      { key: 'remove', label: 'Remove workspace', danger: true },
    ],
  }}
>
  <button className="btn">Open controlled menu</button>
</Dropdown>`});i(()=>d(e,n,ue))});let de=s(`rue:component:anchor`);a(n,de),o(()=>{let e=m(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
const filterKeys = ref(['mentions', 'comment']);

<Dropdown
  trigger="click"
  closeOnClick={false}
  menu={{
    selectable: true,
    selectedKeys: selectedKeys.value,
    onSelect: info => {
      selectedKeys.value = info.selectedKeys as string[];
    },
    items: selectableItems,
  }}
>
  <button className="btn">Single Select</button>
</Dropdown>

<Dropdown
  trigger="click"
  closeOnClick={false}
  menu={{
    selectable: true,
    multiple: true,
    selectedKeys: filterKeys.value,
    onSelect: info => {
      filterKeys.value = info.selectedKeys as string[];
    },
    onDeselect: info => {
      filterKeys.value = info.selectedKeys as string[];
    },
    items: selectableItems,
  }}
>
  <button className="btn btn-outline">Multiple Filters</button>
</Dropdown>`});i(()=>d(e,n,de))});let fe=s(`rue:component:anchor`);a(n,fe),o(()=>{let e=m(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
  trigger="click"
  placement="bottomRight"
  arrow
  overlay={
    <div className="p-4">
      <div className="text-sm font-medium">Editor shortcuts</div>
      <div className="mt-2 text-sm text-base-content/70">
        Publish, share and manage visibility in one place.
      </div>
    </div>
  }
  popupRender={originNode => (
    <div className="w-72">
      <div className="border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary">
        Quick panel
      </div>
      {originNode}
      <div className="flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3">
        <button className="btn btn-ghost btn-sm">Later</button>
        <button className="btn btn-primary btn-sm">Publish</button>
      </div>
    </div>
  )}
>
  <button className="btn btn-secondary">Quick Panel</button>
</Dropdown>`});i(()=>d(e,n,fe))});let pe=s(`rue:component:anchor`);a(n,pe),o(()=>{let e=m(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
  trigger="contextMenu"
  items={[
    { key: 'copy', label: 'Copy link' },
    { key: 'rename', label: 'Rename block' },
    { type: 'divider' },
    { key: 'delete', label: 'Delete block', danger: true },
  ]}
>
  <div className="flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70">
    在这个区域右键，打开上下文菜单
  </div>
</Dropdown>`});i(()=>d(e,n,pe))});let me=e(`h2`,n);a(n,me),a(me,u(`兼容原生结构`));let he=s(`rue:component:anchor`);a(n,he),o(()=>{let e=m(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(b,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(b.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});i(()=>d(e,n,he))});let ge=s(`rue:component:anchor`);a(n,ge),o(()=>{let e=m(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(b,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
  Button
</button>
<Dropdown
  as="ul"
  popover="auto"
  id="dropdown-popover-1"
  className="menu w-52 rounded-box bg-base-100 shadow-sm"
  style={{ positionAnchor: '--dropdown-anchor-1' }}
>
  <li><button>Item 1</button></li>
  <li><button>Item 2</button></li>
</Dropdown>`});i(()=>d(e,n,ge))});let _e=s(`rue:component:anchor`);a(n,_e),o(()=>{let e=m(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(b,{className:`mb-32`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});i(()=>d(e,n,_e))});let ve=s(`rue:component:anchor`);a(n,ve),o(()=>{let e=m(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`flex flex-wrap gap-12 py-20`,children:[v(b,{align:`start`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(b,{align:`center`,direction:`top`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(b,{direction:`left`,align:`end`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})]}),code:`<Dropdown align="start">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">Start</Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">...</Dropdown.Content>
</Dropdown>

<Dropdown align="center" direction="top">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">Top Center</Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">...</Dropdown.Content>
</Dropdown>

<Dropdown direction="left" align="end">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">Left End</Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">...</Dropdown.Content>
</Dropdown>`});i(()=>d(e,n,ve))});let ye=s(`rue:component:anchor`);a(n,ye),o(()=>{let e=m(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(b,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});i(()=>d(e,n,ye))}),a(n,e(`br`,n));let be=e(`h2`,n);a(n,be),p(be,`id`,`dropdown-api`),a(be,u(`API`));let xe=s(`rue:component:anchor`);a(n,xe),o(()=>{let e=m(C,{rows:T});i(()=>d(e,n,xe))});let Se=e(`h3`,n);a(n,Se),c(Se,`mt-8`),a(Se,u(`menu 扩展`));let Ce=s(`rue:component:anchor`);a(n,Ce),o(()=>{let e=m(C,{rows:E});i(()=>d(e,n,Ce))});let we=e(`h2`,n);a(n,we),a(we,u(`FAQ`));let Y=e(`ul`,n);a(n,Y);let X=e(`li`,Y);a(Y,X),a(X,u(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Te=e(`code`,X);a(X,Te),a(Te,u(`menu`)),a(X,u(`或`));let Ee=e(`code`,X);a(X,Ee),a(Ee,u(`items`)),a(X,u(`。`));let Z=e(`li`,Y);a(Y,Z),a(Z,u(`想保留完全原生的 HTML 结构时，继续使用`));let De=e(`code`,Z);a(Z,De),a(De,u(`Dropdown.Trigger`)),a(Z,u(`+`));let Oe=h(Z);a(Z,Oe),f(Oe,` `);let ke=e(`code`,Z);a(Z,ke),a(ke,u(`Dropdown.Content`)),a(Z,u(`，或直接写 details / summary。`));let Q=e(`li`,Y);a(Y,Q),a(Q,u(`需要筛选面板、多选菜单时，通常把`));let Ae=e(`code`,Q);a(Q,Ae),a(Ae,u(`closeOnClick`)),a(Q,u(`设为`));let je=e(`code`,Q);a(Q,je),a(je,u(`false`)),a(Q,u(`，并配合`));let Me=e(`code`,Q);a(Q,Me),a(Me,u(`menu.selectable`)),a(Q,u(`。`));let $=e(`li`,Y);a(Y,$),a($,u(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Ne=e(`code`,$);a($,Ne),a(Ne,u(`popupRender`));let Pe=h($);return a($,Pe),f(Pe,` `),a($,u(`包住原始内容。`)),t})}),n,g),n})};export{D as default};