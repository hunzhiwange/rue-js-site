import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,ht as s,l as c,lt as l,nt as u,o as d,st as f,t as p,tt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g,n as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as v,i as y}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as b}from"./dropdown-BPMZiCw-.js";import{r as x}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as S}from"./PreviewBlock-RQJhyX9w.js";var C=a=>c(s=>{let u=o(`div`,s);l(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=o(`table`,u);i(u,p),l(p,`table table-zebra`);let h=o(`thead`,p);i(p,h);let g=o(`tr`,h);i(h,g);let v=o(`th`,g);i(g,v),i(v,m(`属性`));let y=o(`th`,g);i(g,y),i(y,m(`说明`));let b=o(`th`,g);i(g,b),i(b,m(`类型`));let x=o(`th`,g);i(g,x),i(x,m(`默认值`));let S=o(`tbody`,p);i(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,l,u,p)=>{d(c(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{f(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let u=o(`code`,l);i(l,u);let p=t(`rue:slot:anchor`);i(u,p),n(()=>{let e=a.prop;r(()=>d(e,u,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>d(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>d(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>d(e,b,x))}),s}),s,l)}})}),u}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>a(()=>({open:g(`ref:1:0`,()=>h(!1)),source:g(`ref:1:1`,()=>h(`trigger`))})));return c(a=>{let h=o(`div`,a);l(h,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=o(`div`,h);i(h,g),l(g,`flex flex-wrap items-center gap-3`);let y=t(`rue:component:anchor`);i(g,y);let x=c(()=>{let t=e(),r=o(`button`,t);i(t,r),f(r,`type`,`button`),l(r,`btn btn-primary`),f(r,`data-testid`,`dropdown-controlled-trigger`);let a=u(r);return i(r,a),n(()=>{s(a,_.value?`关闭菜单`:`打开菜单`)}),t});n(()=>{let e=p(b,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:x});r(()=>d(e,g,y))});let S=o(`span`,g);i(g,S),l(S,`text-sm text-base-content/70`),i(S,m(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=o(`code`,S);i(S,C),i(C,m(`open`)),i(S,m(`变化。`));let w=o(`div`,h);i(h,w),l(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=o(`div`,w);i(w,T),l(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=o(`div`,T);i(T,E),l(E,`text-sm font-medium`),i(E,m(`受控状态面板`));let D=o(`div`,T);i(T,D),l(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=o(`div`,D);i(D,O),l(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=o(`span`,O);i(O,k),l(k,`text-xs uppercase tracking-wide text-base-content/60`),i(k,m(`当前状态`));let A=o(`span`,O);i(O,A),l(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),f(A,`data-testid`,`dropdown-controlled-state`);let j=u(A);i(A,j),n(()=>{s(j,_.value?`open`:`closed`)});let M=o(`div`,D);i(D,M),l(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=o(`span`,M);i(M,N),l(N,`text-sm text-base-content/60`),i(N,m(`最近来源`));let P=o(`span`,M);i(M,P),l(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),f(P,`data-testid`,`dropdown-controlled-source`);let F=u(P);return i(P,F),n(()=>{s(F,v.value)}),h})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认更接近成熟组件库的 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`保留 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`原有 daisyUI 风格能力继续保留，适合原生结构或静态布局演示。`,type:`兼容属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`旧的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保留默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>a(()=>({tabs:{recommended:g(`ref:1:2`,()=>h(`preview`)),controlled:g(`ref:1:3`,()=>h(`preview`)),selectable:g(`ref:1:4`,()=>h(`preview`)),custom:g(`ref:1:5`,()=>h(`preview`)),contextMenu:g(`ref:1:6`,()=>h(`preview`)),details:g(`ref:1:7`,()=>h(`preview`)),popover:g(`ref:1:8`,()=>h(`preview`)),focus:g(`ref:1:9`,()=>h(`preview`)),positions:g(`ref:1:10`,()=>h(`preview`)),modifiers:g(`ref:1:11`,()=>h(`preview`))},selectedKeys:g(`ref:1:12`,()=>h([`overview`])),filterKeys:g(`ref:1:13`,()=>h([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return c(a=>{let h=e(),g=t(`rue:component:anchor`);return i(h,g),d(p(x,{children:c(()=>{let a=e(),c=o(`div`,a);i(a,c),l(c,`max-w-none prose prose-sm md:prose-base`);let h=o(`h1`,c);i(c,h),i(h,m(`Dropdown 下拉菜单`));let g=o(`p`,c);i(c,g),l(g,`text-sm mt-3 mb-3`),i(g,m(`Rue 的 Dropdown 现在同时支持两条路径：一条是保留当前视觉风格与 daisyUI 原生结构的兼容写法；另一条是更贴近业务组件习惯的增强 API，直接支持`));let x=u(g);i(g,x),s(x,` `);let j=o(`code`,g);i(g,j),i(j,m(`menu / items`)),i(g,m(`、`));let M=o(`code`,g);i(g,M),i(M,m(`trigger`)),i(g,m(`、`));let N=o(`code`,g);i(g,N),i(N,m(`placement`)),i(g,m(`、`));let P=o(`code`,g);i(g,P),i(P,m(`open`)),i(g,m(`、`));let F=o(`code`,g);i(g,F),i(F,m(`popupRender`)),i(g,m(`和右键菜单。`));let I=o(`div`,c);i(c,I),l(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=o(`div`,I);i(I,L),l(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=o(`div`,L);i(L,R),l(R,`text-xs font-semibold uppercase tracking-wide text-primary`),i(R,m(`推荐写法`));let z=o(`div`,L);i(L,z),l(z,`mt-2 text-sm font-medium`),i(z,m(`用 menu / items 描述命令菜单`));let ee=o(`p`,L);i(L,ee),l(ee,`mt-2 text-sm opacity-70`),i(ee,m(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let B=o(`div`,I);i(I,B),l(B,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let te=o(`div`,B);i(B,te),l(te,`text-xs font-semibold uppercase tracking-wide text-secondary`),i(te,m(`daisyUI 原始写法`));let V=o(`div`,B);i(B,V),l(V,`mt-2 text-sm font-medium`),i(V,m(`原始写法可用`));let H=o(`p`,B);i(B,H),l(H,`mt-2 text-sm opacity-70`);let ne=o(`code`,H);i(H,ne),i(ne,m(`details`)),i(H,m(`、`));let re=o(`code`,H);i(H,re),i(re,m(`popover`)),i(H,m(`、`));let ie=o(`code`,H);i(H,ie),i(ie,m(`focus`)),i(H,m(`、位置类和 modifier 都没有删除。`));let U=o(`div`,I);i(I,U),l(U,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let W=o(`div`,U);i(U,W),l(W,`text-xs font-semibold uppercase tracking-wide text-accent`),i(W,m(`交互补齐`));let G=o(`div`,U);i(U,G),l(G,`mt-2 text-sm font-medium`),i(G,m(`受控、右键、可选中、自定义面板`));let K=o(`p`,U);i(U,K),l(K,`mt-2 text-sm opacity-70`),i(K,m(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let ae=o(`h2`,c);i(c,ae),i(ae,m(`何时使用`));let q=o(`ul`,c);i(c,q);let oe=o(`li`,q);i(q,oe),i(oe,m(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let se=o(`li`,q);i(q,se),i(se,m(`希望保留 Rue 当前 dropdown 视觉风格，但把 API 提升到更接近成熟组件库的层级。`));let ce=o(`li`,q);i(q,ce),i(ce,m(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let le=o(`h2`,c);i(c,le),i(le,m(`推荐增强 API`));let ue=t(`rue:component:anchor`);i(c,ue),n(()=>{let e=p(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});r(()=>d(e,c,ue))});let de=t(`rue:component:anchor`);i(c,de),n(()=>{let e=p(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});r(()=>d(e,c,de))});let fe=t(`rue:component:anchor`);i(c,fe),n(()=>{let e=p(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});r(()=>d(e,c,fe))});let pe=t(`rue:component:anchor`);i(c,pe),n(()=>{let e=p(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});r(()=>d(e,c,pe))});let me=t(`rue:component:anchor`);i(c,me),n(()=>{let e=p(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});r(()=>d(e,c,me))});let he=o(`h2`,c);i(c,he),i(he,m(`兼容原生结构`));let ge=t(`rue:component:anchor`);i(c,ge),n(()=>{let e=p(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(b,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(b.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});r(()=>d(e,c,ge))});let _e=t(`rue:component:anchor`);i(c,_e),n(()=>{let e=p(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(b,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});r(()=>d(e,c,_e))});let ve=t(`rue:component:anchor`);i(c,ve),n(()=>{let e=p(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(b,{className:`mb-32`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});r(()=>d(e,c,ve))});let ye=t(`rue:component:anchor`);i(c,ye),n(()=>{let e=p(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]`,children:[y(`div`,{className:`flex min-h-28 items-start justify-start`,children:v(b,{align:`start`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 items-end justify-center`,children:v(b,{align:`center`,direction:`top`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 min-w-80 items-end justify-end sm:ps-56`,"data-testid":`dropdown-position-left-end-slot`,children:v(b,{direction:`left`,align:`end`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})})]}),code:`<Dropdown align="start">
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
</Dropdown>`});r(()=>d(e,c,ye))});let be=t(`rue:component:anchor`);i(c,be),n(()=>{let e=p(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(b,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});r(()=>d(e,c,be))}),i(c,o(`br`,c));let J=o(`h2`,c);i(c,J),f(J,`id`,`dropdown-api`),i(J,m(`API`));let xe=t(`rue:component:anchor`);i(c,xe),n(()=>{let e=p(C,{rows:T});r(()=>d(e,c,xe))});let Se=o(`h3`,c);i(c,Se),l(Se,`mt-8`),i(Se,m(`menu 扩展`));let Ce=t(`rue:component:anchor`);i(c,Ce),n(()=>{let e=p(C,{rows:E});r(()=>d(e,c,Ce))});let we=o(`h2`,c);i(c,we),i(we,m(`FAQ`));let Y=o(`ul`,c);i(c,Y);let X=o(`li`,Y);i(Y,X),i(X,m(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Te=o(`code`,X);i(X,Te),i(Te,m(`menu`)),i(X,m(`或`));let Ee=o(`code`,X);i(X,Ee),i(Ee,m(`items`)),i(X,m(`。`));let Z=o(`li`,Y);i(Y,Z),i(Z,m(`想保留完全原生的 HTML 结构时，继续使用`));let De=o(`code`,Z);i(Z,De),i(De,m(`Dropdown.Trigger`)),i(Z,m(`+`));let Oe=u(Z);i(Z,Oe),s(Oe,` `);let ke=o(`code`,Z);i(Z,ke),i(ke,m(`Dropdown.Content`)),i(Z,m(`，或直接写 details / summary。`));let Q=o(`li`,Y);i(Y,Q),i(Q,m(`需要筛选面板、多选菜单时，通常把`));let Ae=o(`code`,Q);i(Q,Ae),i(Ae,m(`closeOnClick`)),i(Q,m(`设为`));let je=o(`code`,Q);i(Q,je),i(je,m(`false`)),i(Q,m(`，并配合`));let Me=o(`code`,Q);i(Q,Me),i(Me,m(`menu.selectable`)),i(Q,m(`。`));let $=o(`li`,Y);i(Y,$),i($,m(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Ne=o(`code`,$);i($,Ne),i(Ne,m(`popupRender`));let Pe=u($);return i($,Pe),s(Pe,` `),i($,m(`包住原始内容。`)),a})}),h,g),h})};export{D as default};