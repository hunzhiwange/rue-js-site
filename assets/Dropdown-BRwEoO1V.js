import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,lt as f,pt as p,t as m,u as h}from"./vapor-runtime-D3a-68js.js";import{a as g,n as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as v,t as y}from"./src-BfQKH6_d.js";import{n as b}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as x}from"./dropdown-CYbxVwYx.js";import{t as S}from"./PreviewBlock-DZ28sFI7.js";var C=o=>h(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let m=n(`tr`);i(f,m);let g=n(`th`);i(m,g),i(g,r(`属性`));let v=n(`th`);i(m,v),i(v,r(`说明`));let y=n(`th`);i(m,y),i(y,r(`类型`));let b=n(`th`);i(m,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=_({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(h(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;p(()=>d(e,l,f))});let m=n(`td`);i(o,m);let h=a(`rue:slot:anchor`);i(m,h),u(()=>{let e=t.description;p(()=>d(e,m,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;p(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;p(()=>d(e,b,x))}),r}),r,o)}})}),c}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>l(()=>({open:g(`ref:1:0`,()=>f(!1)),source:g(`ref:1:1`,()=>f(`trigger`))})));return h(()=>{let l=n(`div`);t(l,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let f=n(`div`);i(l,f),t(f,`flex flex-wrap items-center gap-3`);let g=a(`rue:component:anchor`);i(f,g);let y=h(()=>{let r=e(),a=n(`button`);i(r,a),s(a,`type`,`button`),t(a,`btn btn-primary`),s(a,`data-testid`,`dropdown-controlled-trigger`);let l=o(a);return i(a,l),u(()=>{c(l,_.value?`关闭菜单`:`打开菜单`)}),r});u(()=>{let e=m(x,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:y});p(()=>d(e,f,g))});let b=n(`span`);i(f,b),t(b,`text-sm text-base-content/70`),i(b,r(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let S=n(`code`);i(b,S),i(S,r(`open`)),i(b,r(`变化。`));let C=n(`div`);i(l,C),t(C,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let w=n(`div`);i(C,w),t(w,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let T=n(`div`);i(w,T),t(T,`text-sm font-medium`),i(T,r(`受控状态面板`));let E=n(`div`);i(w,E),t(E,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let D=n(`div`);i(E,D),t(D,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let O=n(`span`);i(D,O),t(O,`text-xs uppercase tracking-wide text-base-content/60`),i(O,r(`当前状态`));let k=n(`span`);i(D,k),t(k,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),s(k,`data-testid`,`dropdown-controlled-state`);let A=o(k);i(k,A),u(()=>{c(A,_.value?`open`:`closed`)});let j=n(`div`);i(E,j),t(j,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let M=n(`span`);i(j,M),t(M,`text-sm text-base-content/60`),i(M,r(`最近来源`));let N=n(`span`);i(j,N),t(N,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),s(N,`data-testid`,`dropdown-controlled-source`);let P=o(N);return i(N,P),u(()=>{c(P,v.value)}),l})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认更接近成熟组件库的 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`保留 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`原有 daisyUI 风格能力继续保留，适合原生结构或静态布局演示。`,type:`兼容属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`旧的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保留默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>l(()=>({tabs:{recommended:g(`ref:1:2`,()=>f(`preview`)),controlled:g(`ref:1:3`,()=>f(`preview`)),selectable:g(`ref:1:4`,()=>f(`preview`)),custom:g(`ref:1:5`,()=>f(`preview`)),contextMenu:g(`ref:1:6`,()=>f(`preview`)),details:g(`ref:1:7`,()=>f(`preview`)),popover:g(`ref:1:8`,()=>f(`preview`)),focus:g(`ref:1:9`,()=>f(`preview`)),positions:g(`ref:1:10`,()=>f(`preview`)),modifiers:g(`ref:1:11`,()=>f(`preview`))},selectedKeys:g(`ref:1:12`,()=>f([`overview`])),filterKeys:g(`ref:1:13`,()=>f([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return h(()=>{let l=e(),f=a(`rue:component:anchor`);return i(l,f),d(m(b,{children:h(()=>{let l=e(),f=n(`div`);i(l,f),t(f,`max-w-none prose prose-sm md:prose-base`);let h=n(`h1`);i(f,h),i(h,r(`Dropdown 下拉菜单`));let g=n(`p`);i(f,g),t(g,`text-sm mt-3 mb-3`),i(g,r(`Rue 的 Dropdown 现在同时支持两条路径：一条是保留当前视觉风格与 daisyUI 原生结构的兼容写法；另一条是更贴近业务组件习惯的增强 API，直接支持`));let b=o(g);i(g,b),c(b,` `);let j=n(`code`);i(g,j),i(j,r(`menu / items`)),i(g,r(`、`));let M=n(`code`);i(g,M),i(M,r(`trigger`)),i(g,r(`、`));let N=n(`code`);i(g,N),i(N,r(`placement`)),i(g,r(`、`));let P=n(`code`);i(g,P),i(P,r(`open`)),i(g,r(`、`));let ee=n(`code`);i(g,ee),i(ee,r(`popupRender`)),i(g,r(`和右键菜单。`));let F=n(`div`);i(f,F),t(F,`text-sm flex flex-wrap gap-4`);let I=n(`a`);i(F,I),s(I,`href`,`https://daisyui.com/components/dropdown/`),s(I,`target`,`_blank`),i(I,r(`查看 Dropdown 静态样式`));let L=n(`div`);i(f,L),t(L,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let R=n(`div`);i(L,R),t(R,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let z=n(`div`);i(R,z),t(z,`text-xs font-semibold uppercase tracking-wide text-primary`),i(z,r(`推荐写法`));let B=n(`div`);i(R,B),t(B,`mt-2 text-sm font-medium`),i(B,r(`用 menu / items 描述命令菜单`));let V=n(`p`);i(R,V),t(V,`mt-2 text-sm opacity-70`),i(V,r(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let H=n(`div`);i(L,H),t(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=n(`div`);i(H,U),t(U,`text-xs font-semibold uppercase tracking-wide text-secondary`),i(U,r(`daisyUI 原始写法`));let W=n(`div`);i(H,W),t(W,`mt-2 text-sm font-medium`),i(W,r(`原始写法可用`));let G=n(`p`);i(H,G),t(G,`mt-2 text-sm opacity-70`);let te=n(`code`);i(G,te),i(te,r(`details`)),i(G,r(`、`));let ne=n(`code`);i(G,ne),i(ne,r(`popover`)),i(G,r(`、`));let re=n(`code`);i(G,re),i(re,r(`focus`)),i(G,r(`、位置类和 modifier 都没有删除。`));let K=n(`div`);i(L,K),t(K,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let q=n(`div`);i(K,q),t(q,`text-xs font-semibold uppercase tracking-wide text-accent`),i(q,r(`交互补齐`));let ie=n(`div`);i(K,ie),t(ie,`mt-2 text-sm font-medium`),i(ie,r(`受控、右键、可选中、自定义面板`));let ae=n(`p`);i(K,ae),t(ae,`mt-2 text-sm opacity-70`),i(ae,r(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let oe=n(`h2`);i(f,oe),i(oe,r(`何时使用`));let J=n(`ul`);i(f,J);let se=n(`li`);i(J,se),i(se,r(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let ce=n(`li`);i(J,ce),i(ce,r(`希望保留 Rue 当前 dropdown 视觉风格，但把 API 提升到更接近成熟组件库的层级。`));let le=n(`li`);i(J,le),i(le,r(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ue=n(`h2`);i(f,ue),i(ue,r(`推荐增强 API`));let de=a(`rue:component:anchor`);i(f,de),u(()=>{let e=m(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});p(()=>d(e,f,de))});let fe=a(`rue:component:anchor`);i(f,fe),u(()=>{let e=m(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});p(()=>d(e,f,fe))});let pe=a(`rue:component:anchor`);i(f,pe),u(()=>{let e=m(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(x,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(x,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});p(()=>d(e,f,pe))});let me=a(`rue:component:anchor`);i(f,me),u(()=>{let e=m(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});p(()=>d(e,f,me))});let he=a(`rue:component:anchor`);i(f,he),u(()=>{let e=m(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});p(()=>d(e,f,he))});let ge=n(`h2`);i(f,ge),i(ge,r(`兼容原生结构`));let _e=a(`rue:component:anchor`);i(f,_e),u(()=>{let e=m(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(x,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(x.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});p(()=>d(e,f,_e))});let ve=a(`rue:component:anchor`);i(f,ve),u(()=>{let e=m(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(x,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});p(()=>d(e,f,ve))});let ye=a(`rue:component:anchor`);i(f,ye),u(()=>{let e=m(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(x,{className:`mb-32`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});p(()=>d(e,f,ye))});let be=a(`rue:component:anchor`);i(f,be),u(()=>{let e=m(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`flex flex-wrap gap-12 py-20`,children:[v(x,{align:`start`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(x,{align:`center`,direction:`top`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(x,{direction:`left`,align:`end`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})]}),code:`<Dropdown align="start">
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
</Dropdown>`});p(()=>d(e,f,be))});let xe=a(`rue:component:anchor`);i(f,xe),u(()=>{let e=m(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(x,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});p(()=>d(e,f,xe))}),i(f,n(`br`));let Se=n(`h2`);i(f,Se),s(Se,`id`,`dropdown-api`),i(Se,r(`API`));let Ce=a(`rue:component:anchor`);i(f,Ce),u(()=>{let e=m(C,{rows:T});p(()=>d(e,f,Ce))});let we=n(`h3`);i(f,we),t(we,`mt-8`),i(we,r(`menu 扩展`));let Te=a(`rue:component:anchor`);i(f,Te),u(()=>{let e=m(C,{rows:E});p(()=>d(e,f,Te))});let Ee=n(`h2`);i(f,Ee),i(Ee,r(`FAQ`));let Y=n(`ul`);i(f,Y);let X=n(`li`);i(Y,X),i(X,r(`想做业务菜单、用户菜单、右键菜单时，优先用`));let De=n(`code`);i(X,De),i(De,r(`menu`)),i(X,r(`或`));let Oe=n(`code`);i(X,Oe),i(Oe,r(`items`)),i(X,r(`。`));let Z=n(`li`);i(Y,Z),i(Z,r(`想保留完全原生的 HTML 结构时，继续使用`));let ke=n(`code`);i(Z,ke),i(ke,r(`Dropdown.Trigger`)),i(Z,r(`+`));let Ae=o(Z);i(Z,Ae),c(Ae,` `);let je=n(`code`);i(Z,je),i(je,r(`Dropdown.Content`)),i(Z,r(`，或直接写 details / summary。`));let Q=n(`li`);i(Y,Q),i(Q,r(`需要筛选面板、多选菜单时，通常把`));let Me=n(`code`);i(Q,Me),i(Me,r(`closeOnClick`)),i(Q,r(`设为`));let Ne=n(`code`);i(Q,Ne),i(Ne,r(`false`)),i(Q,r(`，并配合`));let Pe=n(`code`);i(Q,Pe),i(Pe,r(`menu.selectable`)),i(Q,r(`。`));let $=n(`li`);i(Y,$),i($,r(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Fe=n(`code`);i($,Fe),i(Fe,r(`popupRender`));let Ie=o($);return i($,Ie),c(Ie,` `),i($,r(`包住原始内容。`)),l})}),l,f),l})};export{D as default};