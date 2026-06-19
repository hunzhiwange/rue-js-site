import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,gt as c,l,nt as u,o as d,rt as f,t as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g,n as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as v,i as y}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as b}from"./dropdown-B1RdFRdI.js";import{r as x}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as S}from"./PreviewBlock-xsXk-Jrr.js";var C=n=>l(i=>{let c=m(`div`,i);h(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=m(`table`,c);a(c,f),h(f,`table table-zebra`);let p=m(`thead`,f);a(f,p);let g=m(`tr`,p);a(p,g);let v=m(`th`,g);a(g,v),a(v,u(`属性`));let y=m(`th`,g);a(g,y),a(y,u(`说明`));let b=m(`th`,g);a(g,b),a(b,u(`类型`));let x=m(`th`,g);a(g,x),a(x,u(`默认值`));let S=m(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,u,f)=>{d(l(()=>{let i=s(),c=m(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=m(`td`,c);a(c,l);let u=m(`code`,l);a(l,u);let f=e(`rue:slot:anchor`);a(u,f),t(()=>{let e=n.prop;r(()=>d(e,u,f))});let p=m(`td`,c);a(c,p);let h=e(`rue:slot:anchor`);a(p,h),t(()=>{let e=n.description;r(()=>d(e,p,h))});let g=m(`td`,c);a(c,g);let _=m(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>d(e,_,v))});let y=m(`td`,c);a(c,y);let b=m(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>d(e,b,x))}),i}),i,c)}})}),c}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>i(()=>({open:g(`ref:1:0`,()=>n(!1)),source:g(`ref:1:1`,()=>n(`trigger`))})));return l(n=>{let i=m(`div`,n);h(i,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=m(`div`,i);a(i,g),h(g,`flex flex-wrap items-center gap-3`);let y=e(`rue:component:anchor`);a(g,y);let x=l(()=>{let e=s(),n=m(`button`,e);a(e,n),o(n,`type`,`button`),h(n,`btn btn-primary`),o(n,`data-testid`,`dropdown-controlled-trigger`);let r=f(n);return a(n,r),t(()=>{c(r,_.value?`关闭菜单`:`打开菜单`)}),e});t(()=>{let e=p(b,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:x});r(()=>d(e,g,y))});let S=m(`span`,g);a(g,S),h(S,`text-sm text-base-content/70`),a(S,u(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=m(`code`,S);a(S,C),a(C,u(`open`)),a(S,u(`变化。`));let w=m(`div`,i);a(i,w),h(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=m(`div`,w);a(w,T),h(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=m(`div`,T);a(T,E),h(E,`text-sm font-medium`),a(E,u(`受控状态面板`));let D=m(`div`,T);a(T,D),h(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=m(`div`,D);a(D,O),h(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=m(`span`,O);a(O,k),h(k,`text-xs uppercase tracking-wide text-base-content/60`),a(k,u(`当前状态`));let A=m(`span`,O);a(O,A),h(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),o(A,`data-testid`,`dropdown-controlled-state`);let j=f(A);a(A,j),t(()=>{c(j,_.value?`open`:`closed`)});let M=m(`div`,D);a(D,M),h(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=m(`span`,M);a(M,N),h(N,`text-sm text-base-content/60`),a(N,u(`最近来源`));let P=m(`span`,M);a(M,P),h(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),o(P,`data-testid`,`dropdown-controlled-source`);let F=f(P);return a(P,F),t(()=>{c(F,v.value)}),i})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认更接近成熟组件库的 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`保留 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`原有 daisyUI 风格能力继续保留，适合原生结构或静态布局演示。`,type:`兼容属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`旧的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保留默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>i(()=>({tabs:{recommended:g(`ref:1:2`,()=>n(`preview`)),controlled:g(`ref:1:3`,()=>n(`preview`)),selectable:g(`ref:1:4`,()=>n(`preview`)),custom:g(`ref:1:5`,()=>n(`preview`)),contextMenu:g(`ref:1:6`,()=>n(`preview`)),details:g(`ref:1:7`,()=>n(`preview`)),popover:g(`ref:1:8`,()=>n(`preview`)),focus:g(`ref:1:9`,()=>n(`preview`)),positions:g(`ref:1:10`,()=>n(`preview`)),modifiers:g(`ref:1:11`,()=>n(`preview`))},selectedKeys:g(`ref:1:12`,()=>n([`overview`])),filterKeys:g(`ref:1:13`,()=>n([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return l(n=>{let i=s(),g=e(`rue:component:anchor`);return a(i,g),d(p(x,{children:l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`max-w-none prose prose-sm md:prose-base`);let l=m(`h1`,i);a(i,l),a(l,u(`Dropdown 下拉菜单`));let g=m(`p`,i);a(i,g),h(g,`text-sm mt-3 mb-3`),a(g,u(`Rue 的 Dropdown 现在同时支持两条路径：一条是保留当前视觉风格与 daisyUI 原生结构的兼容写法；另一条是更贴近业务组件习惯的增强 API，直接支持`));let x=f(g);a(g,x),c(x,` `);let j=m(`code`,g);a(g,j),a(j,u(`menu / items`)),a(g,u(`、`));let M=m(`code`,g);a(g,M),a(M,u(`trigger`)),a(g,u(`、`));let N=m(`code`,g);a(g,N),a(N,u(`placement`)),a(g,u(`、`));let P=m(`code`,g);a(g,P),a(P,u(`open`)),a(g,u(`、`));let F=m(`code`,g);a(g,F),a(F,u(`popupRender`)),a(g,u(`和右键菜单。`));let I=m(`div`,i);a(i,I),h(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=m(`div`,I);a(I,L),h(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=m(`div`,L);a(L,R),h(R,`text-xs font-semibold uppercase tracking-wide text-primary`),a(R,u(`推荐写法`));let z=m(`div`,L);a(L,z),h(z,`mt-2 text-sm font-medium`),a(z,u(`用 menu / items 描述命令菜单`));let B=m(`p`,L);a(L,B),h(B,`mt-2 text-sm opacity-70`),a(B,u(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let V=m(`div`,I);a(I,V),h(V,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let H=m(`div`,V);a(V,H),h(H,`text-xs font-semibold uppercase tracking-wide text-secondary`),a(H,u(`daisyUI 原始写法`));let U=m(`div`,V);a(V,U),h(U,`mt-2 text-sm font-medium`),a(U,u(`原始写法可用`));let W=m(`p`,V);a(V,W),h(W,`mt-2 text-sm opacity-70`);let ee=m(`code`,W);a(W,ee),a(ee,u(`details`)),a(W,u(`、`));let te=m(`code`,W);a(W,te),a(te,u(`popover`)),a(W,u(`、`));let ne=m(`code`,W);a(W,ne),a(ne,u(`focus`)),a(W,u(`、位置类和 modifier 都没有删除。`));let G=m(`div`,I);a(I,G),h(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=m(`div`,G);a(G,K),h(K,`text-xs font-semibold uppercase tracking-wide text-accent`),a(K,u(`交互补齐`));let q=m(`div`,G);a(G,q),h(q,`mt-2 text-sm font-medium`),a(q,u(`受控、右键、可选中、自定义面板`));let re=m(`p`,G);a(G,re),h(re,`mt-2 text-sm opacity-70`),a(re,u(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let ie=m(`h2`,i);a(i,ie),a(ie,u(`何时使用`));let J=m(`ul`,i);a(i,J);let ae=m(`li`,J);a(J,ae),a(ae,u(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let oe=m(`li`,J);a(J,oe),a(oe,u(`希望保留 Rue 当前 dropdown 视觉风格，但把 API 提升到更接近成熟组件库的层级。`));let se=m(`li`,J);a(J,se),a(se,u(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ce=m(`h2`,i);a(i,ce),a(ce,u(`推荐增强 API`));let le=e(`rue:component:anchor`);a(i,le),t(()=>{let e=p(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});r(()=>d(e,i,le))});let ue=e(`rue:component:anchor`);a(i,ue),t(()=>{let e=p(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});r(()=>d(e,i,ue))});let de=e(`rue:component:anchor`);a(i,de),t(()=>{let e=p(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});r(()=>d(e,i,de))});let fe=e(`rue:component:anchor`);a(i,fe),t(()=>{let e=p(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});r(()=>d(e,i,fe))});let pe=e(`rue:component:anchor`);a(i,pe),t(()=>{let e=p(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});r(()=>d(e,i,pe))});let me=m(`h2`,i);a(i,me),a(me,u(`兼容原生结构`));let he=e(`rue:component:anchor`);a(i,he),t(()=>{let e=p(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(b,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(b.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});r(()=>d(e,i,he))});let ge=e(`rue:component:anchor`);a(i,ge),t(()=>{let e=p(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(b,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});r(()=>d(e,i,ge))});let _e=e(`rue:component:anchor`);a(i,_e),t(()=>{let e=p(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(b,{className:`mb-32`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});r(()=>d(e,i,_e))});let ve=e(`rue:component:anchor`);a(i,ve),t(()=>{let e=p(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]`,children:[y(`div`,{className:`flex min-h-28 items-start justify-start`,children:v(b,{align:`start`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 items-end justify-center`,children:v(b,{align:`center`,direction:`top`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 min-w-80 items-end justify-end sm:ps-56`,"data-testid":`dropdown-position-left-end-slot`,children:v(b,{direction:`left`,align:`end`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})})]}),code:`<Dropdown align="start">
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
</Dropdown>`});r(()=>d(e,i,ve))});let ye=e(`rue:component:anchor`);a(i,ye),t(()=>{let e=p(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(b,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});r(()=>d(e,i,ye))}),a(i,m(`br`,i));let be=m(`h2`,i);a(i,be),o(be,`id`,`dropdown-api`),a(be,u(`API`));let xe=e(`rue:component:anchor`);a(i,xe),t(()=>{let e=p(C,{rows:T});r(()=>d(e,i,xe))});let Se=m(`h3`,i);a(i,Se),h(Se,`mt-8`),a(Se,u(`menu 扩展`));let Ce=e(`rue:component:anchor`);a(i,Ce),t(()=>{let e=p(C,{rows:E});r(()=>d(e,i,Ce))});let we=m(`h2`,i);a(i,we),a(we,u(`FAQ`));let Y=m(`ul`,i);a(i,Y);let X=m(`li`,Y);a(Y,X),a(X,u(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Te=m(`code`,X);a(X,Te),a(Te,u(`menu`)),a(X,u(`或`));let Ee=m(`code`,X);a(X,Ee),a(Ee,u(`items`)),a(X,u(`。`));let Z=m(`li`,Y);a(Y,Z),a(Z,u(`想保留完全原生的 HTML 结构时，继续使用`));let De=m(`code`,Z);a(Z,De),a(De,u(`Dropdown.Trigger`)),a(Z,u(`+`));let Oe=f(Z);a(Z,Oe),c(Oe,` `);let ke=m(`code`,Z);a(Z,ke),a(ke,u(`Dropdown.Content`)),a(Z,u(`，或直接写 details / summary。`));let Q=m(`li`,Y);a(Y,Q),a(Q,u(`需要筛选面板、多选菜单时，通常把`));let Ae=m(`code`,Q);a(Q,Ae),a(Ae,u(`closeOnClick`)),a(Q,u(`设为`));let je=m(`code`,Q);a(Q,je),a(je,u(`false`)),a(Q,u(`，并配合`));let Me=m(`code`,Q);a(Q,Me),a(Me,u(`menu.selectable`)),a(Q,u(`。`));let $=m(`li`,Y);a(Y,$),a($,u(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Ne=m(`code`,$);a($,Ne),a(Ne,u(`popupRender`));let Pe=f($);return a($,Pe),c(Pe,` `),a($,u(`包住原始内容。`)),n})}),i,g),i})};export{D as default};