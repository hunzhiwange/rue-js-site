import{$t as e,Jt as t,Q as n,dt as r,et as i,in as a,it as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,vt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g,n as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as v,i as y}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as b}from"./dropdown-BDZWqPCG.js";import{r as x}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as S}from"./PreviewBlock-wHSyDiek.js";var C=t=>s(a=>{let o=l(`div`,a);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=l(`table`,o);n(o,f),r(f,`table table-zebra`);let m=l(`thead`,f);n(f,m);let g=l(`tr`,m);n(m,g);let v=l(`th`,g);n(g,v),n(v,d(`属性`));let y=l(`th`,g);n(g,y),n(y,d(`说明`));let b=l(`th`,g);n(g,b),n(b,d(`类型`));let x=l(`th`,g);n(g,x),n(x,d(`默认值`));let S=l(`tbody`,f);n(f,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return h(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,a,o,d)=>{u(s(()=>{let r=p(),a=l(`tr`,r);n(r,a),h(()=>{c(a,`key`,String(t.prop))});let o=l(`td`,a);n(a,o);let s=l(`code`,o);n(o,s);let d=i(`rue:slot:anchor`);n(s,d),h(()=>{let n=t.prop;e(()=>u(n,s,d))});let f=l(`td`,a);n(a,f);let m=i(`rue:slot:anchor`);n(f,m),h(()=>{let n=t.description;e(()=>u(n,f,m))});let g=l(`td`,a);n(a,g);let _=l(`code`,g);n(g,_);let v=i(`rue:slot:anchor`);n(_,v),h(()=>{let n=t.type;e(()=>u(n,_,v))});let y=l(`td`,a);n(a,y);let b=l(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),h(()=>{let n=t.defaultValue;e(()=>u(n,b,x))}),r}),r,a)}})}),o}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>a(()=>({open:g(`ref:1:0`,()=>t(!1)),source:g(`ref:1:1`,()=>t(`trigger`))})));return s(t=>{let a=l(`div`,t);r(a,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=l(`div`,a);n(a,g),r(g,`flex flex-wrap items-center gap-3`);let y=i(`rue:component:anchor`);n(g,y);let x=s(()=>{let e=p(),t=l(`button`,e);n(e,t),c(t,`type`,`button`),r(t,`btn btn-primary`),c(t,`data-testid`,`dropdown-controlled-trigger`);let i=o(t);return n(t,i),h(()=>{m(i,_.value?`关闭菜单`:`打开菜单`)}),e});h(()=>{let t=f(b,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:x});e(()=>u(t,g,y))});let S=l(`span`,g);n(g,S),r(S,`text-sm text-base-content/70`),n(S,d(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=l(`code`,S);n(S,C),n(C,d(`open`)),n(S,d(`变化。`));let w=l(`div`,a);n(a,w),r(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=l(`div`,w);n(w,T),r(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=l(`div`,T);n(T,E),r(E,`text-sm font-medium`),n(E,d(`受控状态面板`));let D=l(`div`,T);n(T,D),r(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=l(`div`,D);n(D,O),r(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=l(`span`,O);n(O,k),r(k,`text-xs uppercase tracking-wide text-base-content/60`),n(k,d(`当前状态`));let A=l(`span`,O);n(O,A),r(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),c(A,`data-testid`,`dropdown-controlled-state`);let j=o(A);n(A,j),h(()=>{m(j,_.value?`open`:`closed`)});let M=l(`div`,D);n(D,M),r(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=l(`span`,M);n(M,N),r(N,`text-sm text-base-content/60`),n(N,d(`最近来源`));let P=l(`span`,M);n(M,P),r(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),c(P,`data-testid`,`dropdown-controlled-source`);let F=o(P);return n(P,F),h(()=>{m(F,v.value)}),a})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认使用 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`使用 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`基础 daisyUI 风格能力展示，适合原生结构或静态布局演示。`,type:`扩展属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`基础的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保持默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>a(()=>({tabs:{recommended:g(`ref:1:2`,()=>t(`preview`)),controlled:g(`ref:1:3`,()=>t(`preview`)),selectable:g(`ref:1:4`,()=>t(`preview`)),custom:g(`ref:1:5`,()=>t(`preview`)),contextMenu:g(`ref:1:6`,()=>t(`preview`)),details:g(`ref:1:7`,()=>t(`preview`)),popover:g(`ref:1:8`,()=>t(`preview`)),focus:g(`ref:1:9`,()=>t(`preview`)),positions:g(`ref:1:10`,()=>t(`preview`)),modifiers:g(`ref:1:11`,()=>t(`preview`))},selectedKeys:g(`ref:1:12`,()=>t([`overview`])),filterKeys:g(`ref:1:13`,()=>t([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return s(t=>{let a=p(),g=i(`rue:component:anchor`);return n(a,g),u(f(x,{children:s(()=>{let t=p(),a=l(`div`,t);n(t,a),r(a,`max-w-none prose prose-sm md:prose-base`);let s=l(`h1`,a);n(a,s),n(s,d(`Dropdown 下拉菜单`));let g=l(`p`,a);n(a,g),r(g,`text-sm mt-3 mb-3`),n(g,d(`Rue 的 Dropdown 现在同时支持两条路径：一条是保持当前视觉风格与 daisyUI 原生结构的写法；另一条是更贴近业务组件习惯的语义 API，直接支持`));let x=l(`code`,g);n(g,x),n(x,d(`menu / items`)),n(g,d(`、`));let j=l(`code`,g);n(g,j),n(j,d(`trigger`)),n(g,d(`、`));let M=l(`code`,g);n(g,M),n(M,d(`placement`)),n(g,d(`、`));let N=l(`code`,g);n(g,N),n(N,d(`open`)),n(g,d(`、`));let P=l(`code`,g);n(g,P),n(P,d(`popupRender`));let F=o(g);n(g,F),m(F,` `),n(g,d(`和右键菜单。`));let I=l(`div`,a);n(a,I),r(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=l(`div`,I);n(I,L),r(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=l(`div`,L);n(L,R),r(R,`text-xs font-semibold uppercase tracking-wide text-primary`),n(R,d(`推荐写法`));let z=l(`div`,L);n(L,z),r(z,`mt-2 text-sm font-medium`),n(z,d(`用 menu / items 描述命令菜单`));let B=l(`p`,L);n(L,B),r(B,`mt-2 text-sm opacity-70`),n(B,d(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let V=l(`div`,I);n(I,V),r(V,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let H=l(`div`,V);n(V,H),r(H,`text-xs font-semibold uppercase tracking-wide text-secondary`),n(H,d(`daisyUI 自由组合写法`));let U=l(`div`,V);n(V,U),r(U,`mt-2 text-sm font-medium`),n(U,d(`自由组合写法可用`));let W=l(`p`,V);n(V,W),r(W,`mt-2 text-sm opacity-70`);let ee=l(`code`,W);n(W,ee),n(ee,d(`details`)),n(W,d(`、`));let te=l(`code`,W);n(W,te),n(te,d(`popover`)),n(W,d(`、`));let ne=l(`code`,W);n(W,ne),n(ne,d(`focus`)),n(W,d(`、位置类和 modifier 都没有删除。`));let G=l(`div`,I);n(I,G),r(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=l(`div`,G);n(G,K),r(K,`text-xs font-semibold uppercase tracking-wide text-accent`),n(K,d(`交互补充`));let q=l(`div`,G);n(G,q),r(q,`mt-2 text-sm font-medium`),n(q,d(`受控、右键、可选中、自定义面板`));let re=l(`p`,G);n(G,re),r(re,`mt-2 text-sm opacity-70`),n(re,d(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let ie=l(`h2`,a);n(a,ie),n(ie,d(`何时使用`));let J=l(`ul`,a);n(a,J);let ae=l(`li`,J);n(J,ae),n(ae,d(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let oe=l(`li`,J);n(J,oe),n(oe,d(`适合使用 Rue 当前 dropdown 视觉风格，同时使用更完整的菜单 API。`));let se=l(`li`,J);n(J,se),n(se,d(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ce=l(`h2`,a);n(a,ce),n(ce,d(`推荐语义 API`));let le=i(`rue:component:anchor`);n(a,le),h(()=>{let t=f(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});e(()=>u(t,a,le))});let ue=i(`rue:component:anchor`);n(a,ue),h(()=>{let t=f(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});e(()=>u(t,a,ue))});let de=i(`rue:component:anchor`);n(a,de),h(()=>{let t=f(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});e(()=>u(t,a,de))});let fe=i(`rue:component:anchor`);n(a,fe),h(()=>{let t=f(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});e(()=>u(t,a,fe))});let pe=i(`rue:component:anchor`);n(a,pe),h(()=>{let t=f(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});e(()=>u(t,a,pe))});let me=l(`h2`,a);n(a,me),n(me,d(`支持原生结构`));let he=i(`rue:component:anchor`);n(a,he),h(()=>{let t=f(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(b,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(b.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});e(()=>u(t,a,he))});let ge=i(`rue:component:anchor`);n(a,ge),h(()=>{let t=f(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(b,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});e(()=>u(t,a,ge))});let _e=i(`rue:component:anchor`);n(a,_e),h(()=>{let t=f(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(b,{className:`mb-32`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});e(()=>u(t,a,_e))});let ve=i(`rue:component:anchor`);n(a,ve),h(()=>{let t=f(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]`,children:[y(`div`,{className:`flex min-h-28 items-start justify-start`,children:v(b,{align:`start`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 items-end justify-center`,children:v(b,{align:`center`,direction:`top`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 min-w-80 items-end justify-end sm:ps-56`,"data-testid":`dropdown-position-left-end-slot`,children:v(b,{direction:`left`,align:`end`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})})]}),code:`<Dropdown align="start">
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
</Dropdown>`});e(()=>u(t,a,ve))});let ye=i(`rue:component:anchor`);n(a,ye),h(()=>{let t=f(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(b,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});e(()=>u(t,a,ye))}),n(a,l(`br`,a));let be=l(`h2`,a);n(a,be),c(be,`id`,`dropdown-api`),n(be,d(`API`));let xe=i(`rue:component:anchor`);n(a,xe),h(()=>{let t=f(C,{rows:T});e(()=>u(t,a,xe))});let Se=l(`h3`,a);n(a,Se),r(Se,`mt-8`),n(Se,d(`menu 扩展`));let Ce=i(`rue:component:anchor`);n(a,Ce),h(()=>{let t=f(C,{rows:E});e(()=>u(t,a,Ce))});let we=l(`h2`,a);n(a,we),n(we,d(`FAQ`));let Y=l(`ul`,a);n(a,Y);let X=l(`li`,Y);n(Y,X),n(X,d(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Te=l(`code`,X);n(X,Te),n(Te,d(`menu`)),n(X,d(`或`));let Ee=l(`code`,X);n(X,Ee),n(Ee,d(`items`)),n(X,d(`。`));let Z=l(`li`,Y);n(Y,Z),n(Z,d(`想保持完全原生的 HTML 结构时，可以使用`));let De=l(`code`,Z);n(Z,De),n(De,d(`Dropdown.Trigger`)),n(Z,d(`+`));let Oe=o(Z);n(Z,Oe),m(Oe,` `);let ke=l(`code`,Z);n(Z,ke),n(ke,d(`Dropdown.Content`)),n(Z,d(`，或直接写 details / summary。`));let Q=l(`li`,Y);n(Y,Q),n(Q,d(`需要筛选面板、多选菜单时，通常把`));let Ae=l(`code`,Q);n(Q,Ae),n(Ae,d(`closeOnClick`)),n(Q,d(`设为`));let je=l(`code`,Q);n(Q,je),n(je,d(`false`)),n(Q,d(`，并配合`));let Me=l(`code`,Q);n(Q,Me),n(Me,d(`menu.selectable`)),n(Q,d(`。`));let $=l(`li`,Y);n(Y,$),n($,d(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Ne=l(`code`,$);n($,Ne),n(Ne,d(`popupRender`));let Pe=o($);return n($,Pe),m(Pe,` `),n($,d(`包住基础内容。`)),t})}),a,g),a})};export{D as default};