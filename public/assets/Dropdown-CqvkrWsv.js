import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,qt as f,s as p,st as m,t as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g,n as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as v,i as y}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as b}from"./dropdown-_NspmIlh.js";import{r as x}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as S}from"./PreviewBlock-DJFn4Hia.js";var C=r=>u(l=>{let d=i(`div`,l);m(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,d);n(d,f),m(f,`table table-zebra`);let h=i(`thead`,f);n(f,h);let g=i(`tr`,h);n(h,g);let v=i(`th`,g);n(g,v),n(v,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=_({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,d,f)=>{p(u(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>p(n,d,f))});let m=i(`td`,l);n(l,m);let h=a(`rue:slot:anchor`);n(m,h),o(()=>{let n=e.description;t(()=>p(n,m,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>p(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>p(n,b,x))}),r}),r,l)}})}),d}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>f(()=>({open:g(`ref:1:0`,()=>r(!1)),source:g(`ref:1:1`,()=>r(`trigger`))})));return u(r=>{let f=i(`div`,r);m(f,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=i(`div`,f);n(f,g),m(g,`flex flex-wrap items-center gap-3`);let y=a(`rue:component:anchor`);n(g,y);let x=u(()=>{let e=s(),t=i(`button`,e);n(e,t),c(t,`type`,`button`),m(t,`btn btn-primary`),c(t,`data-testid`,`dropdown-controlled-trigger`);let r=l(t);return n(t,r),o(()=>{d(r,_.value?`关闭菜单`:`打开菜单`)}),e});o(()=>{let e=h(b,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:x});t(()=>p(e,g,y))});let S=i(`span`,g);n(g,S),m(S,`text-sm text-base-content/70`),n(S,e(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=i(`code`,S);n(S,C),n(C,e(`open`)),n(S,e(`变化。`));let w=i(`div`,f);n(f,w),m(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=i(`div`,w);n(w,T),m(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=i(`div`,T);n(T,E),m(E,`text-sm font-medium`),n(E,e(`受控状态面板`));let D=i(`div`,T);n(T,D),m(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=i(`div`,D);n(D,O),m(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=i(`span`,O);n(O,k),m(k,`text-xs uppercase tracking-wide text-base-content/60`),n(k,e(`当前状态`));let A=i(`span`,O);n(O,A),m(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),c(A,`data-testid`,`dropdown-controlled-state`);let j=l(A);n(A,j),o(()=>{d(j,_.value?`open`:`closed`)});let M=i(`div`,D);n(D,M),m(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=i(`span`,M);n(M,N),m(N,`text-sm text-base-content/60`),n(N,e(`最近来源`));let P=i(`span`,M);n(M,P),m(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),c(P,`data-testid`,`dropdown-controlled-source`);let F=l(P);return n(P,F),o(()=>{d(F,v.value)}),f})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认更接近成熟组件库的 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`保留 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`原有 daisyUI 风格能力继续保留，适合原生结构或静态布局演示。`,type:`兼容属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`旧的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保留默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>f(()=>({tabs:{recommended:g(`ref:1:2`,()=>r(`preview`)),controlled:g(`ref:1:3`,()=>r(`preview`)),selectable:g(`ref:1:4`,()=>r(`preview`)),custom:g(`ref:1:5`,()=>r(`preview`)),contextMenu:g(`ref:1:6`,()=>r(`preview`)),details:g(`ref:1:7`,()=>r(`preview`)),popover:g(`ref:1:8`,()=>r(`preview`)),focus:g(`ref:1:9`,()=>r(`preview`)),positions:g(`ref:1:10`,()=>r(`preview`)),modifiers:g(`ref:1:11`,()=>r(`preview`))},selectedKeys:g(`ref:1:12`,()=>r([`overview`])),filterKeys:g(`ref:1:13`,()=>r([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return u(r=>{let f=s(),g=a(`rue:component:anchor`);return n(f,g),p(h(x,{children:u(()=>{let r=s(),u=i(`div`,r);n(r,u),m(u,`max-w-none prose prose-sm md:prose-base`);let f=i(`h1`,u);n(u,f),n(f,e(`Dropdown 下拉菜单`));let g=i(`p`,u);n(u,g),m(g,`text-sm mt-3 mb-3`),n(g,e(`Rue 的 Dropdown 现在同时支持两条路径：一条是保留当前视觉风格与 daisyUI 原生结构的兼容写法；另一条是更贴近业务组件习惯的增强 API，直接支持`));let x=l(g);n(g,x),d(x,` `);let j=i(`code`,g);n(g,j),n(j,e(`menu / items`)),n(g,e(`、`));let M=i(`code`,g);n(g,M),n(M,e(`trigger`)),n(g,e(`、`));let N=i(`code`,g);n(g,N),n(N,e(`placement`)),n(g,e(`、`));let P=i(`code`,g);n(g,P),n(P,e(`open`)),n(g,e(`、`));let F=i(`code`,g);n(g,F),n(F,e(`popupRender`)),n(g,e(`和右键菜单。`));let I=i(`div`,u);n(u,I),m(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=i(`div`,I);n(I,L),m(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=i(`div`,L);n(L,R),m(R,`text-xs font-semibold uppercase tracking-wide text-primary`),n(R,e(`推荐写法`));let z=i(`div`,L);n(L,z),m(z,`mt-2 text-sm font-medium`),n(z,e(`用 menu / items 描述命令菜单`));let B=i(`p`,L);n(L,B),m(B,`mt-2 text-sm opacity-70`),n(B,e(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let V=i(`div`,I);n(I,V),m(V,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let H=i(`div`,V);n(V,H),m(H,`text-xs font-semibold uppercase tracking-wide text-secondary`),n(H,e(`daisyUI 原始写法`));let U=i(`div`,V);n(V,U),m(U,`mt-2 text-sm font-medium`),n(U,e(`原始写法可用`));let W=i(`p`,V);n(V,W),m(W,`mt-2 text-sm opacity-70`);let ee=i(`code`,W);n(W,ee),n(ee,e(`details`)),n(W,e(`、`));let te=i(`code`,W);n(W,te),n(te,e(`popover`)),n(W,e(`、`));let ne=i(`code`,W);n(W,ne),n(ne,e(`focus`)),n(W,e(`、位置类和 modifier 都没有删除。`));let G=i(`div`,I);n(I,G),m(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=i(`div`,G);n(G,K),m(K,`text-xs font-semibold uppercase tracking-wide text-accent`),n(K,e(`交互补齐`));let q=i(`div`,G);n(G,q),m(q,`mt-2 text-sm font-medium`),n(q,e(`受控、右键、可选中、自定义面板`));let re=i(`p`,G);n(G,re),m(re,`mt-2 text-sm opacity-70`),n(re,e(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let ie=i(`h2`,u);n(u,ie),n(ie,e(`何时使用`));let J=i(`ul`,u);n(u,J);let ae=i(`li`,J);n(J,ae),n(ae,e(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let oe=i(`li`,J);n(J,oe),n(oe,e(`希望保留 Rue 当前 dropdown 视觉风格，但把 API 提升到更接近成熟组件库的层级。`));let se=i(`li`,J);n(J,se),n(se,e(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ce=i(`h2`,u);n(u,ce),n(ce,e(`推荐增强 API`));let le=a(`rue:component:anchor`);n(u,le),o(()=>{let e=h(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});t(()=>p(e,u,le))});let ue=a(`rue:component:anchor`);n(u,ue),o(()=>{let e=h(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});t(()=>p(e,u,ue))});let de=a(`rue:component:anchor`);n(u,de),o(()=>{let e=h(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});t(()=>p(e,u,de))});let fe=a(`rue:component:anchor`);n(u,fe),o(()=>{let e=h(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});t(()=>p(e,u,fe))});let pe=a(`rue:component:anchor`);n(u,pe),o(()=>{let e=h(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});t(()=>p(e,u,pe))});let me=i(`h2`,u);n(u,me),n(me,e(`兼容原生结构`));let he=a(`rue:component:anchor`);n(u,he),o(()=>{let e=h(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(b,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(b.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});t(()=>p(e,u,he))});let ge=a(`rue:component:anchor`);n(u,ge),o(()=>{let e=h(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(b,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});t(()=>p(e,u,ge))});let _e=a(`rue:component:anchor`);n(u,_e),o(()=>{let e=h(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(b,{className:`mb-32`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});t(()=>p(e,u,_e))});let ve=a(`rue:component:anchor`);n(u,ve),o(()=>{let e=h(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]`,children:[y(`div`,{className:`flex min-h-28 items-start justify-start`,children:v(b,{align:`start`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 items-end justify-center`,children:v(b,{align:`center`,direction:`top`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 min-w-80 items-end justify-end sm:ps-56`,"data-testid":`dropdown-position-left-end-slot`,children:v(b,{direction:`left`,align:`end`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})})]}),code:`<Dropdown align="start">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">Start</Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li>
      <button>Item 1</button>
    </li>
    <li>
      <button>Item 2</button>
    </li>
  </Dropdown.Content>
</Dropdown>

<Dropdown align="center" direction="top">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">Top Center</Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li>
      <button>Item 1</button>
    </li>
    <li>
      <button>Item 2</button>
    </li>
  </Dropdown.Content>
</Dropdown>

<Dropdown direction="left" align="end">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">Left End</Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li>
      <button>Item 1</button>
    </li>
    <li>
      <button>Item 2</button>
    </li>
  </Dropdown.Content>
</Dropdown>`});t(()=>p(e,u,ve))});let ye=a(`rue:component:anchor`);n(u,ye),o(()=>{let e=h(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(b,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});t(()=>p(e,u,ye))}),n(u,i(`br`,u));let be=i(`h2`,u);n(u,be),c(be,`id`,`dropdown-api`),n(be,e(`API`));let xe=a(`rue:component:anchor`);n(u,xe),o(()=>{let e=h(C,{rows:T});t(()=>p(e,u,xe))});let Se=i(`h3`,u);n(u,Se),m(Se,`mt-8`),n(Se,e(`menu 扩展`));let Ce=a(`rue:component:anchor`);n(u,Ce),o(()=>{let e=h(C,{rows:E});t(()=>p(e,u,Ce))});let we=i(`h2`,u);n(u,we),n(we,e(`FAQ`));let Y=i(`ul`,u);n(u,Y);let X=i(`li`,Y);n(Y,X),n(X,e(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Te=i(`code`,X);n(X,Te),n(Te,e(`menu`)),n(X,e(`或`));let Ee=i(`code`,X);n(X,Ee),n(Ee,e(`items`)),n(X,e(`。`));let Z=i(`li`,Y);n(Y,Z),n(Z,e(`想保留完全原生的 HTML 结构时，继续使用`));let De=i(`code`,Z);n(Z,De),n(De,e(`Dropdown.Trigger`)),n(Z,e(`+`));let Oe=l(Z);n(Z,Oe),d(Oe,` `);let ke=i(`code`,Z);n(Z,ke),n(ke,e(`Dropdown.Content`)),n(Z,e(`，或直接写 details / summary。`));let Q=i(`li`,Y);n(Y,Q),n(Q,e(`需要筛选面板、多选菜单时，通常把`));let Ae=i(`code`,Q);n(Q,Ae),n(Ae,e(`closeOnClick`)),n(Q,e(`设为`));let je=i(`code`,Q);n(Q,je),n(je,e(`false`)),n(Q,e(`，并配合`));let Me=i(`code`,Q);n(Q,Me),n(Me,e(`menu.selectable`)),n(Q,e(`。`));let $=i(`li`,Y);n(Y,$),n($,e(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Ne=i(`code`,$);n($,Ne),n(Ne,e(`popupRender`));let Pe=l($);return n($,Pe),d(Pe,` `),n($,e(`包住原始内容。`)),r})}),f,g),f})};export{D as default};