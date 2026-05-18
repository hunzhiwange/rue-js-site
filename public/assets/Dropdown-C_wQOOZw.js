import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,d as c,dt as l,ht as u,l as d,st as f,t as p,vt as m,z as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g,n as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as v,t as y}from"./src-BQwLQD8R.js";import{n as b}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as x}from"./dropdown-BJzRVfsB.js";import{t as S}from"./PreviewBlock-Cks1b4IL.js";var C=a=>c(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let h=r(`thead`,p);i(p,h);let g=r(`tr`,h);i(h,g);let v=r(`th`,g);i(g,v),i(v,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return m(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,u,f)=>{d(c(()=>{let a=t(),o=r(`tr`,a);i(a,o),m(()=>{s(o,`key`,String(n.prop))});let c=r(`td`,o);i(o,c);let u=r(`code`,c);i(c,u);let f=e(`rue:slot:anchor`);i(u,f),m(()=>{let e=n.prop;l(()=>d(e,u,f))});let p=r(`td`,o);i(o,p);let h=e(`rue:slot:anchor`);i(p,h),m(()=>{let e=n.description;l(()=>d(e,p,h))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),m(()=>{let e=n.type;l(()=>d(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),m(()=>{let e=n.defaultValue;l(()=>d(e,b,x))}),a}),a,o)}})}),f}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>u(()=>({open:g(`ref:1:0`,()=>f(!1)),source:g(`ref:1:1`,()=>f(`trigger`))})));return c(u=>{let f=r(`div`,u);n(f,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=r(`div`,f);i(f,g),n(g,`flex flex-wrap items-center gap-3`);let y=e(`rue:component:anchor`);i(g,y);let b=c(()=>{let e=t(),o=r(`button`,e);i(e,o),s(o,`type`,`button`),n(o,`btn btn-primary`),s(o,`data-testid`,`dropdown-controlled-trigger`);let c=h(o);return i(o,c),m(()=>{a(c,_.value?`关闭菜单`:`打开菜单`)}),e});m(()=>{let e=p(x,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:b});l(()=>d(e,g,y))});let S=r(`span`,g);i(g,S),n(S,`text-sm text-base-content/70`),i(S,o(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=r(`code`,S);i(S,C),i(C,o(`open`)),i(S,o(`变化。`));let w=r(`div`,f);i(f,w),n(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=r(`div`,w);i(w,T),n(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=r(`div`,T);i(T,E),n(E,`text-sm font-medium`),i(E,o(`受控状态面板`));let D=r(`div`,T);i(T,D),n(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=r(`div`,D);i(D,O),n(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=r(`span`,O);i(O,k),n(k,`text-xs uppercase tracking-wide text-base-content/60`),i(k,o(`当前状态`));let A=r(`span`,O);i(O,A),n(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),s(A,`data-testid`,`dropdown-controlled-state`);let j=h(A);i(A,j),m(()=>{a(j,_.value?`open`:`closed`)});let M=r(`div`,D);i(D,M),n(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=r(`span`,M);i(M,N),n(N,`text-sm text-base-content/60`),i(N,o(`最近来源`));let P=r(`span`,M);i(M,P),n(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),s(P,`data-testid`,`dropdown-controlled-source`);let F=h(P);return i(P,F),m(()=>{a(F,v.value)}),f})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认更接近成熟组件库的 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`保留 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`原有 daisyUI 风格能力继续保留，适合原生结构或静态布局演示。`,type:`兼容属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`旧的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保留默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>u(()=>({tabs:{recommended:g(`ref:1:2`,()=>f(`preview`)),controlled:g(`ref:1:3`,()=>f(`preview`)),selectable:g(`ref:1:4`,()=>f(`preview`)),custom:g(`ref:1:5`,()=>f(`preview`)),contextMenu:g(`ref:1:6`,()=>f(`preview`)),details:g(`ref:1:7`,()=>f(`preview`)),popover:g(`ref:1:8`,()=>f(`preview`)),focus:g(`ref:1:9`,()=>f(`preview`)),positions:g(`ref:1:10`,()=>f(`preview`)),modifiers:g(`ref:1:11`,()=>f(`preview`))},selectedKeys:g(`ref:1:12`,()=>f([`overview`])),filterKeys:g(`ref:1:13`,()=>f([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return c(u=>{let f=t(),g=e(`rue:component:anchor`);return i(f,g),d(p(b,{children:c(()=>{let c=t(),u=r(`div`,c);i(c,u),n(u,`max-w-none prose prose-sm md:prose-base`);let f=r(`h1`,u);i(u,f),i(f,o(`Dropdown 下拉菜单`));let g=r(`p`,u);i(u,g),n(g,`text-sm mt-3 mb-3`),i(g,o(`Rue 的 Dropdown 现在同时支持两条路径：一条是保留当前视觉风格与 daisyUI 原生结构的兼容写法；另一条是更贴近业务组件习惯的增强 API，直接支持`));let b=h(g);i(g,b),a(b,` `);let j=r(`code`,g);i(g,j),i(j,o(`menu / items`)),i(g,o(`、`));let M=r(`code`,g);i(g,M),i(M,o(`trigger`)),i(g,o(`、`));let N=r(`code`,g);i(g,N),i(N,o(`placement`)),i(g,o(`、`));let P=r(`code`,g);i(g,P),i(P,o(`open`)),i(g,o(`、`));let F=r(`code`,g);i(g,F),i(F,o(`popupRender`)),i(g,o(`和右键菜单。`));let I=r(`div`,u);i(u,I),n(I,`text-sm flex flex-wrap gap-4`);let L=r(`a`,I);i(I,L),s(L,`href`,`https://daisyui.com/components/dropdown/`),s(L,`target`,`_blank`),i(L,o(`查看 Dropdown 静态样式`));let R=r(`div`,u);i(u,R),n(R,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let z=r(`div`,R);i(R,z),n(z,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let B=r(`div`,z);i(z,B),n(B,`text-xs font-semibold uppercase tracking-wide text-primary`),i(B,o(`推荐写法`));let V=r(`div`,z);i(z,V),n(V,`mt-2 text-sm font-medium`),i(V,o(`用 menu / items 描述命令菜单`));let H=r(`p`,z);i(z,H),n(H,`mt-2 text-sm opacity-70`),i(H,o(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let U=r(`div`,R);i(R,U),n(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=r(`div`,U);i(U,W),n(W,`text-xs font-semibold uppercase tracking-wide text-secondary`),i(W,o(`daisyUI 原始写法`));let G=r(`div`,U);i(U,G),n(G,`mt-2 text-sm font-medium`),i(G,o(`原始写法可用`));let K=r(`p`,U);i(U,K),n(K,`mt-2 text-sm opacity-70`);let ee=r(`code`,K);i(K,ee),i(ee,o(`details`)),i(K,o(`、`));let te=r(`code`,K);i(K,te),i(te,o(`popover`)),i(K,o(`、`));let ne=r(`code`,K);i(K,ne),i(ne,o(`focus`)),i(K,o(`、位置类和 modifier 都没有删除。`));let q=r(`div`,R);i(R,q),n(q,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let re=r(`div`,q);i(q,re),n(re,`text-xs font-semibold uppercase tracking-wide text-accent`),i(re,o(`交互补齐`));let ie=r(`div`,q);i(q,ie),n(ie,`mt-2 text-sm font-medium`),i(ie,o(`受控、右键、可选中、自定义面板`));let ae=r(`p`,q);i(q,ae),n(ae,`mt-2 text-sm opacity-70`),i(ae,o(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let oe=r(`h2`,u);i(u,oe),i(oe,o(`何时使用`));let J=r(`ul`,u);i(u,J);let se=r(`li`,J);i(J,se),i(se,o(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let ce=r(`li`,J);i(J,ce),i(ce,o(`希望保留 Rue 当前 dropdown 视觉风格，但把 API 提升到更接近成熟组件库的层级。`));let le=r(`li`,J);i(J,le),i(le,o(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ue=r(`h2`,u);i(u,ue),i(ue,o(`推荐增强 API`));let de=e(`rue:component:anchor`);i(u,de),m(()=>{let e=p(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});l(()=>d(e,u,de))});let fe=e(`rue:component:anchor`);i(u,fe),m(()=>{let e=p(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});l(()=>d(e,u,fe))});let pe=e(`rue:component:anchor`);i(u,pe),m(()=>{let e=p(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(x,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(x,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});l(()=>d(e,u,pe))});let me=e(`rue:component:anchor`);i(u,me),m(()=>{let e=p(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});l(()=>d(e,u,me))});let he=e(`rue:component:anchor`);i(u,he),m(()=>{let e=p(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});l(()=>d(e,u,he))});let ge=r(`h2`,u);i(u,ge),i(ge,o(`兼容原生结构`));let _e=e(`rue:component:anchor`);i(u,_e),m(()=>{let e=p(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(x,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(x.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});l(()=>d(e,u,_e))});let ve=e(`rue:component:anchor`);i(u,ve),m(()=>{let e=p(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(x,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});l(()=>d(e,u,ve))});let ye=e(`rue:component:anchor`);i(u,ye),m(()=>{let e=p(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(x,{className:`mb-32`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});l(()=>d(e,u,ye))});let be=e(`rue:component:anchor`);i(u,be),m(()=>{let e=p(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`flex flex-wrap gap-12 py-20`,children:[v(x,{align:`start`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(x,{align:`center`,direction:`top`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(x,{direction:`left`,align:`end`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})]}),code:`<Dropdown align="start">
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
</Dropdown>`});l(()=>d(e,u,be))});let xe=e(`rue:component:anchor`);i(u,xe),m(()=>{let e=p(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(x,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});l(()=>d(e,u,xe))}),i(u,r(`br`,u));let Se=r(`h2`,u);i(u,Se),s(Se,`id`,`dropdown-api`),i(Se,o(`API`));let Ce=e(`rue:component:anchor`);i(u,Ce),m(()=>{let e=p(C,{rows:T});l(()=>d(e,u,Ce))});let we=r(`h3`,u);i(u,we),n(we,`mt-8`),i(we,o(`menu 扩展`));let Te=e(`rue:component:anchor`);i(u,Te),m(()=>{let e=p(C,{rows:E});l(()=>d(e,u,Te))});let Ee=r(`h2`,u);i(u,Ee),i(Ee,o(`FAQ`));let Y=r(`ul`,u);i(u,Y);let X=r(`li`,Y);i(Y,X),i(X,o(`想做业务菜单、用户菜单、右键菜单时，优先用`));let De=r(`code`,X);i(X,De),i(De,o(`menu`)),i(X,o(`或`));let Oe=r(`code`,X);i(X,Oe),i(Oe,o(`items`)),i(X,o(`。`));let Z=r(`li`,Y);i(Y,Z),i(Z,o(`想保留完全原生的 HTML 结构时，继续使用`));let ke=r(`code`,Z);i(Z,ke),i(ke,o(`Dropdown.Trigger`)),i(Z,o(`+`));let Ae=h(Z);i(Z,Ae),a(Ae,` `);let je=r(`code`,Z);i(Z,je),i(je,o(`Dropdown.Content`)),i(Z,o(`，或直接写 details / summary。`));let Q=r(`li`,Y);i(Y,Q),i(Q,o(`需要筛选面板、多选菜单时，通常把`));let Me=r(`code`,Q);i(Q,Me),i(Me,o(`closeOnClick`)),i(Q,o(`设为`));let Ne=r(`code`,Q);i(Q,Ne),i(Ne,o(`false`)),i(Q,o(`，并配合`));let Pe=r(`code`,Q);i(Q,Pe),i(Pe,o(`menu.selectable`)),i(Q,o(`。`));let $=r(`li`,Y);i(Y,$),i($,o(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Fe=r(`code`,$);i($,Fe),i(Fe,o(`popupRender`));let Ie=h($);return i($,Ie),a(Ie,` `),i($,o(`包住原始内容。`)),c})}),f,g),f})};export{D as default};