import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,xt as h}from"./vapor-runtime-EUvELKQT.js";import{a as g,n as _}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as v,t as y}from"./src-BI4ToZNE.js";import{n as b}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as x}from"./dropdown-D7u0b4Aa.js";import{t as S}from"./PreviewBlock-DMzC-yBe.js";var C=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let g=a(`tr`,p);r(p,g);let v=a(`th`,g);r(g,v),r(v,d(`属性`));let y=a(`th`,g);r(g,y),r(y,d(`说明`));let b=a(`th`,g);r(g,b),r(b,d(`类型`));let x=a(`th`,g);r(g,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;h(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;h(()=>u(e,p,m))});let g=a(`td`,s);r(s,g);let _=a(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;h(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;h(()=>u(e,b,x))}),i}),i,s)}})}),s}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>t(()=>({open:g(`ref:1:0`,()=>s(!1)),source:g(`ref:1:1`,()=>s(`trigger`))})));return c(t=>{let s=a(`div`,t);m(s,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=a(`div`,s);r(s,g),m(g,`flex flex-wrap items-center gap-3`);let y=o(`rue:component:anchor`);r(g,y);let b=c(()=>{let t=n(),o=a(`button`,t);r(t,o),e(o,`type`,`button`),m(o,`btn btn-primary`),e(o,`data-testid`,`dropdown-controlled-trigger`);let s=i(o);return r(o,s),l(()=>{f(s,_.value?`关闭菜单`:`打开菜单`)}),t});l(()=>{let e=p(x,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:b});h(()=>u(e,g,y))});let S=a(`span`,g);r(g,S),m(S,`text-sm text-base-content/70`),r(S,d(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=a(`code`,S);r(S,C),r(C,d(`open`)),r(S,d(`变化。`));let w=a(`div`,s);r(s,w),m(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=a(`div`,w);r(w,T),m(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=a(`div`,T);r(T,E),m(E,`text-sm font-medium`),r(E,d(`受控状态面板`));let D=a(`div`,T);r(T,D),m(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=a(`div`,D);r(D,O),m(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=a(`span`,O);r(O,k),m(k,`text-xs uppercase tracking-wide text-base-content/60`),r(k,d(`当前状态`));let A=a(`span`,O);r(O,A),m(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),e(A,`data-testid`,`dropdown-controlled-state`);let j=i(A);r(A,j),l(()=>{f(j,_.value?`open`:`closed`)});let M=a(`div`,D);r(D,M),m(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=a(`span`,M);r(M,N),m(N,`text-sm text-base-content/60`),r(N,d(`最近来源`));let P=a(`span`,M);r(M,P),m(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),e(P,`data-testid`,`dropdown-controlled-source`);let F=i(P);return r(P,F),l(()=>{f(F,v.value)}),s})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认更接近成熟组件库的 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`保留 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`原有 daisyUI 风格能力继续保留，适合原生结构或静态布局演示。`,type:`兼容属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`旧的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保留默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>t(()=>({tabs:{recommended:g(`ref:1:2`,()=>s(`preview`)),controlled:g(`ref:1:3`,()=>s(`preview`)),selectable:g(`ref:1:4`,()=>s(`preview`)),custom:g(`ref:1:5`,()=>s(`preview`)),contextMenu:g(`ref:1:6`,()=>s(`preview`)),details:g(`ref:1:7`,()=>s(`preview`)),popover:g(`ref:1:8`,()=>s(`preview`)),focus:g(`ref:1:9`,()=>s(`preview`)),positions:g(`ref:1:10`,()=>s(`preview`)),modifiers:g(`ref:1:11`,()=>s(`preview`))},selectedKeys:g(`ref:1:12`,()=>s([`overview`])),filterKeys:g(`ref:1:13`,()=>s([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return c(t=>{let s=n(),g=o(`rue:component:anchor`);return r(s,g),u(p(b,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,s);r(s,c),r(c,d(`Dropdown 下拉菜单`));let g=a(`p`,s);r(s,g),m(g,`text-sm mt-3 mb-3`),r(g,d(`Rue 的 Dropdown 现在同时支持两条路径：一条是保留当前视觉风格与 daisyUI 原生结构的兼容写法；另一条是更贴近业务组件习惯的增强 API，直接支持`));let b=i(g);r(g,b),f(b,` `);let j=a(`code`,g);r(g,j),r(j,d(`menu / items`)),r(g,d(`、`));let M=a(`code`,g);r(g,M),r(M,d(`trigger`)),r(g,d(`、`));let N=a(`code`,g);r(g,N),r(N,d(`placement`)),r(g,d(`、`));let P=a(`code`,g);r(g,P),r(P,d(`open`)),r(g,d(`、`));let F=a(`code`,g);r(g,F),r(F,d(`popupRender`)),r(g,d(`和右键菜单。`));let I=a(`div`,s);r(s,I),m(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=a(`div`,I);r(I,L),m(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=a(`div`,L);r(L,R),m(R,`text-xs font-semibold uppercase tracking-wide text-primary`),r(R,d(`推荐写法`));let z=a(`div`,L);r(L,z),m(z,`mt-2 text-sm font-medium`),r(z,d(`用 menu / items 描述命令菜单`));let B=a(`p`,L);r(L,B),m(B,`mt-2 text-sm opacity-70`),r(B,d(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let V=a(`div`,I);r(I,V),m(V,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let H=a(`div`,V);r(V,H),m(H,`text-xs font-semibold uppercase tracking-wide text-secondary`),r(H,d(`daisyUI 原始写法`));let U=a(`div`,V);r(V,U),m(U,`mt-2 text-sm font-medium`),r(U,d(`原始写法可用`));let W=a(`p`,V);r(V,W),m(W,`mt-2 text-sm opacity-70`);let ee=a(`code`,W);r(W,ee),r(ee,d(`details`)),r(W,d(`、`));let te=a(`code`,W);r(W,te),r(te,d(`popover`)),r(W,d(`、`));let ne=a(`code`,W);r(W,ne),r(ne,d(`focus`)),r(W,d(`、位置类和 modifier 都没有删除。`));let G=a(`div`,I);r(I,G),m(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=a(`div`,G);r(G,K),m(K,`text-xs font-semibold uppercase tracking-wide text-accent`),r(K,d(`交互补齐`));let q=a(`div`,G);r(G,q),m(q,`mt-2 text-sm font-medium`),r(q,d(`受控、右键、可选中、自定义面板`));let re=a(`p`,G);r(G,re),m(re,`mt-2 text-sm opacity-70`),r(re,d(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let ie=a(`h2`,s);r(s,ie),r(ie,d(`何时使用`));let J=a(`ul`,s);r(s,J);let ae=a(`li`,J);r(J,ae),r(ae,d(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let oe=a(`li`,J);r(J,oe),r(oe,d(`希望保留 Rue 当前 dropdown 视觉风格，但把 API 提升到更接近成熟组件库的层级。`));let se=a(`li`,J);r(J,se),r(se,d(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ce=a(`h2`,s);r(s,ce),r(ce,d(`推荐增强 API`));let le=o(`rue:component:anchor`);r(s,le),l(()=>{let e=p(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});h(()=>u(e,s,le))});let ue=o(`rue:component:anchor`);r(s,ue),l(()=>{let e=p(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});h(()=>u(e,s,ue))});let de=o(`rue:component:anchor`);r(s,de),l(()=>{let e=p(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(x,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(x,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});h(()=>u(e,s,de))});let fe=o(`rue:component:anchor`);r(s,fe),l(()=>{let e=p(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});h(()=>u(e,s,fe))});let pe=o(`rue:component:anchor`);r(s,pe),l(()=>{let e=p(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});h(()=>u(e,s,pe))});let me=a(`h2`,s);r(s,me),r(me,d(`兼容原生结构`));let he=o(`rue:component:anchor`);r(s,he),l(()=>{let e=p(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(x,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(x.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});h(()=>u(e,s,he))});let ge=o(`rue:component:anchor`);r(s,ge),l(()=>{let e=p(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(x,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});h(()=>u(e,s,ge))});let _e=o(`rue:component:anchor`);r(s,_e),l(()=>{let e=p(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(x,{className:`mb-32`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});h(()=>u(e,s,_e))});let ve=o(`rue:component:anchor`);r(s,ve),l(()=>{let e=p(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`flex flex-wrap gap-12 py-20`,children:[v(x,{align:`start`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(x,{align:`center`,direction:`top`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(x,{direction:`left`,align:`end`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})]}),code:`<Dropdown align="start">
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
</Dropdown>`});h(()=>u(e,s,ve))});let ye=o(`rue:component:anchor`);r(s,ye),l(()=>{let e=p(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(x,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});h(()=>u(e,s,ye))}),r(s,a(`br`,s));let be=a(`h2`,s);r(s,be),e(be,`id`,`dropdown-api`),r(be,d(`API`));let xe=o(`rue:component:anchor`);r(s,xe),l(()=>{let e=p(C,{rows:T});h(()=>u(e,s,xe))});let Se=a(`h3`,s);r(s,Se),m(Se,`mt-8`),r(Se,d(`menu 扩展`));let Ce=o(`rue:component:anchor`);r(s,Ce),l(()=>{let e=p(C,{rows:E});h(()=>u(e,s,Ce))});let we=a(`h2`,s);r(s,we),r(we,d(`FAQ`));let Y=a(`ul`,s);r(s,Y);let X=a(`li`,Y);r(Y,X),r(X,d(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Te=a(`code`,X);r(X,Te),r(Te,d(`menu`)),r(X,d(`或`));let Ee=a(`code`,X);r(X,Ee),r(Ee,d(`items`)),r(X,d(`。`));let Z=a(`li`,Y);r(Y,Z),r(Z,d(`想保留完全原生的 HTML 结构时，继续使用`));let De=a(`code`,Z);r(Z,De),r(De,d(`Dropdown.Trigger`)),r(Z,d(`+`));let Oe=i(Z);r(Z,Oe),f(Oe,` `);let ke=a(`code`,Z);r(Z,ke),r(ke,d(`Dropdown.Content`)),r(Z,d(`，或直接写 details / summary。`));let Q=a(`li`,Y);r(Y,Q),r(Q,d(`需要筛选面板、多选菜单时，通常把`));let Ae=a(`code`,Q);r(Q,Ae),r(Ae,d(`closeOnClick`)),r(Q,d(`设为`));let je=a(`code`,Q);r(Q,je),r(je,d(`false`)),r(Q,d(`，并配合`));let Me=a(`code`,Q);r(Q,Me),r(Me,d(`menu.selectable`)),r(Q,d(`。`));let $=a(`li`,Y);r(Y,$),r($,d(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Ne=a(`code`,$);r($,Ne),r(Ne,d(`popupRender`));let Pe=i($);return r($,Pe),f(Pe,` `),r($,d(`包住原始内容。`)),t})}),s,g),s})};export{D as default};