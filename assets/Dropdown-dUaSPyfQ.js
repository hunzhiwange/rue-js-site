import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-BZZbPG7x.js";import{a as h,n as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as _,t as v}from"./src-DP0sEeZS.js";import{n as y}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as b}from"./dropdown-BYlf1iPv.js";import{t as x}from"./PreviewBlock-BHJcXiGu.js";var S=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),C=()=>{let{open:g,source:_}=h(`useSetup:0:0`,()=>m(()=>({open:h(`ref:1:0`,()=>d(!1)),source:h(`ref:1:1`,()=>d(`trigger`))})));return p(()=>{let d=e(`div`);o(d,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let m=e(`div`);l(d,m),o(m,`flex flex-wrap items-center gap-3`);let h=i(`rue:component:anchor`);l(m,h);let v=p(()=>{let n=a(),i=e(`button`);l(n,i),t(i,`type`,`button`),o(i,`btn btn-primary`),t(i,`data-testid`,`dropdown-controlled-trigger`);let c=r(i);return l(i,c),u(()=>{s(c,g.value?`关闭菜单`:`打开菜单`)}),n});u(()=>{c(f(b,{trigger:`click`,open:g.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{g.value=e,_.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:v}),m,h)});let y=e(`span`);l(m,y),o(y,`text-sm text-base-content/70`),l(y,n(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let x=e(`code`);l(y,x),l(x,n(`open`)),l(y,n(`变化。`));let S=e(`div`);l(d,S),o(S,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let C=e(`div`);l(S,C),o(C,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let w=e(`div`);l(C,w),o(w,`text-sm font-medium`),l(w,n(`受控状态面板`));let T=e(`div`);l(C,T),o(T,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let E=e(`div`);l(T,E),o(E,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let D=e(`span`);l(E,D),o(D,`text-xs uppercase tracking-wide text-base-content/60`),l(D,n(`当前状态`));let O=e(`span`);l(E,O),o(O,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),t(O,`data-testid`,`dropdown-controlled-state`);let k=r(O);l(O,k),u(()=>{s(k,g.value?`open`:`closed`)});let A=e(`div`);l(T,A),o(A,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let j=e(`span`);l(A,j),o(j,`text-sm text-base-content/60`),l(j,n(`最近来源`));let M=e(`span`);l(A,M),o(M,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),t(M,`data-testid`,`dropdown-controlled-source`);let N=r(M);return l(M,N),u(()=>{s(N,_.value)}),d})},w=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认更接近成熟组件库的 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`保留 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`原有 daisyUI 风格能力继续保留，适合原生结构或静态布局演示。`,type:`兼容属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`旧的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],T=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保留默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],E=()=>{let{tabs:g,selectedKeys:E,filterKeys:D}=h(`useSetup:0:0`,()=>m(()=>({tabs:{recommended:h(`ref:1:2`,()=>d(`preview`)),controlled:h(`ref:1:3`,()=>d(`preview`)),selectable:h(`ref:1:4`,()=>d(`preview`)),custom:h(`ref:1:5`,()=>d(`preview`)),contextMenu:h(`ref:1:6`,()=>d(`preview`)),details:h(`ref:1:7`,()=>d(`preview`)),popover:h(`ref:1:8`,()=>d(`preview`)),focus:h(`ref:1:9`,()=>d(`preview`)),positions:h(`ref:1:10`,()=>d(`preview`)),modifiers:h(`ref:1:11`,()=>d(`preview`))},selectedKeys:h(`ref:1:12`,()=>d([`overview`])),filterKeys:h(`ref:1:13`,()=>d([`mentions`,`comment`]))}))),O=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:v(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],k=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Dropdown 下拉菜单`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`Rue 的 Dropdown 现在同时支持两条路径：一条是保留当前视觉风格与 daisyUI 原生结构的兼容写法；另一条是更贴近业务组件习惯的增强 API，直接支持`));let y=r(h);l(h,y),s(y,` `);let A=e(`code`);l(h,A),l(A,n(`menu / items`)),l(h,n(`、`));let j=e(`code`);l(h,j),l(j,n(`trigger`)),l(h,n(`、`));let M=e(`code`);l(h,M),l(M,n(`placement`)),l(h,n(`、`));let N=e(`code`);l(h,N),l(N,n(`open`)),l(h,n(`、`));let ee=e(`code`);l(h,ee),l(ee,n(`popupRender`)),l(h,n(`和右键菜单。`));let te=e(`div`);l(p,te),o(te,`text-sm flex flex-wrap gap-4`);let P=e(`a`);l(te,P),t(P,`href`,`https://daisyui.com/components/dropdown/`),t(P,`target`,`_blank`),l(P,n(`查看 Dropdown 静态样式`));let F=e(`div`);l(p,F),o(F,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let I=e(`div`);l(F,I),o(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=e(`div`);l(I,L),o(L,`text-xs font-semibold uppercase tracking-wide text-primary`),l(L,n(`推荐写法`));let R=e(`div`);l(I,R),o(R,`mt-2 text-sm font-medium`),l(R,n(`用 menu / items 描述命令菜单`));let z=e(`p`);l(I,z),o(z,`mt-2 text-sm opacity-70`),l(z,n(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let B=e(`div`);l(F,B),o(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let ne=e(`div`);l(B,ne),o(ne,`text-xs font-semibold uppercase tracking-wide text-secondary`),l(ne,n(`daisyUI 原始写法`));let V=e(`div`);l(B,V),o(V,`mt-2 text-sm font-medium`),l(V,n(`原始写法可用`));let H=e(`p`);l(B,H),o(H,`mt-2 text-sm opacity-70`);let re=e(`code`);l(H,re),l(re,n(`details`)),l(H,n(`、`));let ie=e(`code`);l(H,ie),l(ie,n(`popover`)),l(H,n(`、`));let ae=e(`code`);l(H,ae),l(ae,n(`focus`)),l(H,n(`、位置类和 modifier 都没有删除。`));let U=e(`div`);l(F,U),o(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=e(`div`);l(U,W),o(W,`text-xs font-semibold uppercase tracking-wide text-accent`),l(W,n(`交互补齐`));let G=e(`div`);l(U,G),o(G,`mt-2 text-sm font-medium`),l(G,n(`受控、右键、可选中、自定义面板`));let K=e(`p`);l(U,K),o(K,`mt-2 text-sm opacity-70`),l(K,n(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let oe=e(`h2`);l(p,oe),l(oe,n(`何时使用`));let q=e(`ul`);l(p,q);let se=e(`li`);l(q,se),l(se,n(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let ce=e(`li`);l(q,ce),l(ce,n(`希望保留 Rue 当前 dropdown 视觉风格，但把 API 提升到更接近成熟组件库的层级。`));let le=e(`li`);l(q,le),l(le,n(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ue=e(`h2`);l(p,ue),l(ue,n(`推荐增强 API`));let de=i(`rue:component:anchor`);l(p,de),u(()=>{c(f(x,{title:`推荐：命令菜单`,tab:g.recommended,preview:()=>v(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(b,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:O,"data-testid":`dropdown-recommended`,children:v(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`}),p,de)});let fe=i(`rue:component:anchor`);l(p,fe),u(()=>{c(f(x,{title:`受控开关与来源`,tab:g.controlled,preview:v(C,{}),code:`const open = ref(false);
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
</Dropdown>`}),p,fe)});let pe=i(`rue:component:anchor`);l(p,pe),u(()=>{c(f(x,{title:`可选中筛选菜单`,tab:g.selectable,preview:()=>_(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[v(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:_(`div`,{className:`flex flex-wrap gap-3`,children:[v(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:E.value,onSelect:e=>{E.value=e.selectedKeys},items:k},children:v(`button`,{className:`btn`,children:`Single Select`})}),v(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},onDeselect:e=>{D.value=e.selectedKeys},items:k},children:v(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),_(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[_(`div`,{children:[`单选：`,E.value.join(`, `)||`未选中`]}),_(`div`,{className:`mt-2`,children:[`多选：`,D.value.join(`, `)||`未选中`]}),_(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,v(`code`,{children:`closeOnClick`}),` 设为 `,v(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`}),p,pe)});let me=i(`rue:component:anchor`);l(p,me),u(()=>{c(f(x,{title:`自定义面板包装`,tab:g.custom,preview:()=>v(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(b,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:_(`div`,{className:`p-4`,children:[v(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),v(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>_(`div`,{className:`w-72`,children:[v(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,_(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[v(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),v(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:v(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`}),p,me)});let he=i(`rue:component:anchor`);l(p,he),u(()=>{c(f(x,{title:`右键上下文菜单`,tab:g.contextMenu,preview:()=>v(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:v(b,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:v(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`}),p,he)});let ge=e(`h2`);l(p,ge),l(ge,n(`兼容原生结构`));let _e=i(`rue:component:anchor`);l(p,_e),u(()=>{c(f(x,{title:`Dropdown using details and summary`,tab:g.details,preview:()=>_(b,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[v(`summary`,{className:`btn m-1`,children:`open or close`}),_(b.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[v(`li`,{children:v(`button`,{children:`Item 1`})}),v(`li`,{children:v(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`}),p,_e)});let ve=i(`rue:component:anchor`);l(p,ve),u(()=>{c(f(x,{title:`Dropdown using popover API`,tab:g.popover,preview:()=>_(`div`,{className:`flex items-start gap-4`,children:[v(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),_(b,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[v(`li`,{children:v(`button`,{children:`Item 1`})}),v(`li`,{children:v(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`}),p,ve)});let ye=i(`rue:component:anchor`);l(p,ye),u(()=>{c(f(x,{title:`Dropdown menu`,tab:g.focus,preview:()=>_(b,{className:`mb-32`,children:[v(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),_(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[v(`li`,{children:v(`button`,{children:`Item 1`})}),v(`li`,{children:v(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`}),p,ye)});let be=i(`rue:component:anchor`);l(p,be),u(()=>{c(f(x,{title:`Positions`,tab:g.positions,preview:()=>_(`div`,{className:`flex flex-wrap gap-12 py-20`,children:[_(b,{align:`start`,children:[v(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),_(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[v(`li`,{children:v(`button`,{children:`Item 1`})}),v(`li`,{children:v(`button`,{children:`Item 2`})})]})]}),_(b,{align:`center`,direction:`top`,children:[v(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),_(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[v(`li`,{children:v(`button`,{children:`Item 1`})}),v(`li`,{children:v(`button`,{children:`Item 2`})})]})]}),_(b,{direction:`left`,align:`end`,children:[v(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),_(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[v(`li`,{children:v(`button`,{children:`Item 1`})}),v(`li`,{children:v(`button`,{children:`Item 2`})})]})]})]}),code:`<Dropdown align="start">
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
</Dropdown>`}),p,be)});let xe=i(`rue:component:anchor`);l(p,xe),u(()=>{c(f(x,{title:`Dropdown hover and force open`,tab:g.modifiers,preview:()=>_(b,{hover:!0,forceOpen:!0,children:[v(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),_(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[v(`li`,{children:v(`button`,{children:`Item 1`})}),v(`li`,{children:v(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`}),p,xe)}),l(p,e(`br`));let J=e(`h2`);l(p,J),t(J,`id`,`dropdown-api`),l(J,n(`API`));let Se=i(`rue:component:anchor`);l(p,Se),u(()=>{c(f(S,{rows:w}),p,Se)});let Ce=e(`h3`);l(p,Ce),o(Ce,`mt-8`),l(Ce,n(`menu 扩展`));let we=i(`rue:component:anchor`);l(p,we),u(()=>{c(f(S,{rows:T}),p,we)});let Te=e(`h2`);l(p,Te),l(Te,n(`FAQ`));let Y=e(`ul`);l(p,Y);let X=e(`li`);l(Y,X),l(X,n(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Ee=e(`code`);l(X,Ee),l(Ee,n(`menu`)),l(X,n(`或`));let De=e(`code`);l(X,De),l(De,n(`items`)),l(X,n(`。`));let Z=e(`li`);l(Y,Z),l(Z,n(`想保留完全原生的 HTML 结构时，继续使用`));let Oe=e(`code`);l(Z,Oe),l(Oe,n(`Dropdown.Trigger`)),l(Z,n(`+`));let ke=r(Z);l(Z,ke),s(ke,` `);let Ae=e(`code`);l(Z,Ae),l(Ae,n(`Dropdown.Content`)),l(Z,n(`，或直接写 details / summary。`));let Q=e(`li`);l(Y,Q),l(Q,n(`需要筛选面板、多选菜单时，通常把`));let je=e(`code`);l(Q,je),l(je,n(`closeOnClick`)),l(Q,n(`设为`));let Me=e(`code`);l(Q,Me),l(Me,n(`false`)),l(Q,n(`，并配合`));let Ne=e(`code`);l(Q,Ne),l(Ne,n(`menu.selectable`)),l(Q,n(`。`));let $=e(`li`);l(Y,$),l($,n(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Pe=e(`code`);l($,Pe),l(Pe,n(`popupRender`));let Fe=r($);return l($,Fe),s(Fe,` `),l($,n(`包住原始内容。`)),d})}),d,m),d})};export{E as default};