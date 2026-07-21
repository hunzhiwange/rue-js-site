import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g,n as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as v,t as y}from"./src-CCTNpCXV.js";import{t as b}from"./dropdown-DerWX1J1.js";import{r as x}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as S}from"./PreviewBlock-ARp---67.js";var C=e=>p(n=>{let o=l(`div`,n);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,o);u(o,c),r(c,`table table-zebra`);let h=l(`thead`,c);u(c,h);let g=l(`tr`,h);u(h,g);let v=l(`th`,g);u(g,v),u(v,s(`属性`));let y=l(`th`,g);u(g,y),u(y,s(`说明`));let b=l(`th`,g);u(g,b),u(b,s(`类型`));let x=l(`th`,g);u(g,x),u(x,s(`默认值`));let S=l(`tbody`,c);u(c,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);u(S,C),u(S,w);let T=new Map;return d(()=>{T=_({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,o,s)=>{m(p(()=>{let n=a(),r=l(`tr`,n);u(n,r),d(()=>{t(r,`key`,String(e.prop))});let o=l(`td`,r);u(r,o);let s=l(`code`,o);u(o,s);let c=i(`rue:slot:anchor`);u(s,c),d(()=>{let t=e.prop;f(()=>m(t,s,c))});let p=l(`td`,r);u(r,p);let h=i(`rue:slot:anchor`);u(p,h),d(()=>{let t=e.description;f(()=>m(t,p,h))});let g=l(`td`,r);u(r,g);let _=l(`code`,g);u(g,_);let v=i(`rue:slot:anchor`);u(_,v),d(()=>{let t=e.type;f(()=>m(t,_,v))});let y=l(`td`,r);u(r,y);let b=l(`code`,y);u(y,b);let x=i(`rue:slot:anchor`);return u(b,x),d(()=>{let t=e.defaultValue;f(()=>m(t,b,x))}),n}),n,r)}})}),o}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>e(()=>({open:g(`ref:1:0`,()=>c(!1)),source:g(`ref:1:1`,()=>c(`trigger`))})));return p(e=>{let c=l(`div`,e);r(c,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=l(`div`,c);u(c,g),r(g,`flex flex-wrap items-center gap-3`);let y=i(`rue:component:anchor`);u(g,y);let x=p(()=>{let e=a(),i=l(`button`,e);u(e,i),t(i,`type`,`button`),r(i,`btn btn-primary`),t(i,`data-testid`,`dropdown-controlled-trigger`);let s=o(i);return u(i,s),d(()=>{n(s,_.value?`关闭菜单`:`打开菜单`)}),e});d(()=>{let e=h(b,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:x});f(()=>m(e,g,y))});let S=l(`span`,g);u(g,S),r(S,`text-sm text-base-content/70`),u(S,s(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=l(`code`,S);u(S,C),u(C,s(`open`)),u(S,s(`变化。`));let w=l(`div`,c);u(c,w),r(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=l(`div`,w);u(w,T),r(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=l(`div`,T);u(T,E),r(E,`text-sm font-medium`),u(E,s(`受控状态面板`));let D=l(`div`,T);u(T,D),r(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=l(`div`,D);u(D,O),r(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=l(`span`,O);u(O,k),r(k,`text-xs uppercase tracking-wide text-base-content/60`),u(k,s(`当前状态`));let A=l(`span`,O);u(O,A),r(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),t(A,`data-testid`,`dropdown-controlled-state`);let j=o(A);u(A,j),d(()=>{n(j,_.value?`open`:`closed`)});let M=l(`div`,D);u(D,M),r(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=l(`span`,M);u(M,N),r(N,`text-sm text-base-content/60`),u(N,s(`最近来源`));let P=l(`span`,M);u(M,P),r(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),t(P,`data-testid`,`dropdown-controlled-source`);let F=o(P);return u(P,F),d(()=>{n(F,v.value)}),c})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认使用 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`使用 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`基础 daisyUI 风格能力展示，适合原生结构或静态布局演示。`,type:`扩展属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`基础的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保持默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>e(()=>({tabs:{recommended:g(`ref:1:2`,()=>c(`preview`)),controlled:g(`ref:1:3`,()=>c(`preview`)),selectable:g(`ref:1:4`,()=>c(`preview`)),custom:g(`ref:1:5`,()=>c(`preview`)),contextMenu:g(`ref:1:6`,()=>c(`preview`)),details:g(`ref:1:7`,()=>c(`preview`)),popover:g(`ref:1:8`,()=>c(`preview`)),focus:g(`ref:1:9`,()=>c(`preview`)),positions:g(`ref:1:10`,()=>c(`preview`)),modifiers:g(`ref:1:11`,()=>c(`preview`))},selectedKeys:g(`ref:1:12`,()=>c([`overview`])),filterKeys:g(`ref:1:13`,()=>c([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return p(e=>{let c=a(),g=i(`rue:component:anchor`);return u(c,g),m(h(x,{children:p(()=>{let e=a(),c=l(`div`,e);u(e,c),r(c,`max-w-none prose prose-sm md:prose-base`);let p=l(`h1`,c);u(c,p),u(p,s(`Dropdown 下拉菜单`));let g=l(`p`,c);u(c,g),r(g,`text-sm mt-3 mb-3`),u(g,s(`Rue 的 Dropdown 现在同时支持两条路径：一条是保持当前视觉风格与 daisyUI 原生结构的写法；另一条是更贴近业务组件习惯的语义 API，直接支持`));let x=l(`code`,g);u(g,x),u(x,s(`menu / items`)),u(g,s(`、`));let j=l(`code`,g);u(g,j),u(j,s(`trigger`)),u(g,s(`、`));let M=l(`code`,g);u(g,M),u(M,s(`placement`)),u(g,s(`、`));let N=l(`code`,g);u(g,N),u(N,s(`open`)),u(g,s(`、`));let P=l(`code`,g);u(g,P),u(P,s(`popupRender`));let F=o(g);u(g,F),n(F,` `),u(g,s(`和右键菜单。`));let I=l(`div`,c);u(c,I),r(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=l(`div`,I);u(I,L),r(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let ee=l(`div`,L);u(L,ee),r(ee,`text-xs font-semibold uppercase tracking-wide text-primary`),u(ee,s(`推荐写法`));let R=l(`div`,L);u(L,R),r(R,`mt-2 text-sm font-medium`),u(R,s(`用 menu / items 描述命令菜单`));let te=l(`p`,L);u(L,te),r(te,`mt-2 text-sm opacity-70`),u(te,s(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let z=l(`div`,I);u(I,z),r(z,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let ne=l(`div`,z);u(z,ne),r(ne,`text-xs font-semibold uppercase tracking-wide text-secondary`),u(ne,s(`daisyUI 自由组合写法`));let B=l(`div`,z);u(z,B),r(B,`mt-2 text-sm font-medium`),u(B,s(`自由组合写法可用`));let V=l(`p`,z);u(z,V),r(V,`mt-2 text-sm opacity-70`);let re=l(`code`,V);u(V,re),u(re,s(`details`)),u(V,s(`、`));let ie=l(`code`,V);u(V,ie),u(ie,s(`popover`)),u(V,s(`、`));let ae=l(`code`,V);u(V,ae),u(ae,s(`focus`)),u(V,s(`、位置类和 modifier 都没有删除。`));let H=l(`div`,I);u(I,H),r(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=l(`div`,H);u(H,U),r(U,`text-xs font-semibold uppercase tracking-wide text-accent`),u(U,s(`交互补充`));let W=l(`div`,H);u(H,W),r(W,`mt-2 text-sm font-medium`),u(W,s(`受控、右键、可选中、自定义面板`));let G=l(`p`,H);u(H,G),r(G,`mt-2 text-sm opacity-70`),u(G,s(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let oe=l(`h2`,c);u(c,oe),u(oe,s(`何时使用`));let K=l(`ul`,c);u(c,K);let se=l(`li`,K);u(K,se),u(se,s(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let ce=l(`li`,K);u(K,ce),u(ce,s(`适合使用 Rue 当前 dropdown 视觉风格，同时使用更完整的菜单 API。`));let le=l(`li`,K);u(K,le),u(le,s(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ue=l(`h2`,c);u(c,ue),u(ue,s(`推荐语义 API`));let de=i(`rue:component:anchor`);u(c,de),d(()=>{let e=h(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});f(()=>m(e,c,de))});let fe=i(`rue:component:anchor`);u(c,fe),d(()=>{let e=h(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});f(()=>m(e,c,fe))});let pe=i(`rue:component:anchor`);u(c,pe),d(()=>{let e=h(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});f(()=>m(e,c,pe))});let me=i(`rue:component:anchor`);u(c,me),d(()=>{let e=h(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});f(()=>m(e,c,me))});let he=i(`rue:component:anchor`);u(c,he),d(()=>{let e=h(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});f(()=>m(e,c,he))});let ge=l(`h2`,c);u(c,ge),u(ge,s(`支持原生结构`));let _e=i(`rue:component:anchor`);u(c,_e),d(()=>{let e=h(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(b,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(b.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});f(()=>m(e,c,_e))});let ve=i(`rue:component:anchor`);u(c,ve),d(()=>{let e=h(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(b,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});f(()=>m(e,c,ve))});let ye=i(`rue:component:anchor`);u(c,ye),d(()=>{let e=h(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(b,{className:`mb-32`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});f(()=>m(e,c,ye))});let be=i(`rue:component:anchor`);u(c,be),d(()=>{let e=h(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]`,children:[y(`div`,{className:`flex min-h-28 items-start justify-start`,children:v(b,{align:`start`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 items-end justify-center`,children:v(b,{align:`center`,direction:`top`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 min-w-80 items-end justify-end sm:ps-56`,"data-testid":`dropdown-position-left-end-slot`,children:v(b,{direction:`left`,align:`end`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})})]}),code:`<Dropdown align="start">
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
</Dropdown>`});f(()=>m(e,c,be))});let xe=i(`rue:component:anchor`);u(c,xe),d(()=>{let e=h(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(b,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});f(()=>m(e,c,xe))}),u(c,l(`br`,c));let q=l(`h2`,c);u(c,q),t(q,`id`,`dropdown-api`),u(q,s(`API`));let Se=i(`rue:component:anchor`);u(c,Se),d(()=>{let e=h(C,{rows:T});f(()=>m(e,c,Se))});let J=l(`h3`,c);u(c,J),r(J,`mt-8`),u(J,s(`menu 扩展`));let Ce=i(`rue:component:anchor`);u(c,Ce),d(()=>{let e=h(C,{rows:E});f(()=>m(e,c,Ce))});let we=l(`h2`,c);u(c,we),u(we,s(`FAQ`));let Y=l(`ul`,c);u(c,Y);let X=l(`li`,Y);u(Y,X),u(X,s(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Te=l(`code`,X);u(X,Te),u(Te,s(`menu`)),u(X,s(`或`));let Ee=l(`code`,X);u(X,Ee),u(Ee,s(`items`)),u(X,s(`。`));let Z=l(`li`,Y);u(Y,Z),u(Z,s(`想保持完全原生的 HTML 结构时，可以使用`));let De=l(`code`,Z);u(Z,De),u(De,s(`Dropdown.Trigger`)),u(Z,s(`+`));let Oe=o(Z);u(Z,Oe),n(Oe,` `);let ke=l(`code`,Z);u(Z,ke),u(ke,s(`Dropdown.Content`)),u(Z,s(`，或直接写 details / summary。`));let Q=l(`li`,Y);u(Y,Q),u(Q,s(`需要筛选面板、多选菜单时，通常把`));let Ae=l(`code`,Q);u(Q,Ae),u(Ae,s(`closeOnClick`)),u(Q,s(`设为`));let je=l(`code`,Q);u(Q,je),u(je,s(`false`)),u(Q,s(`，并配合`));let Me=l(`code`,Q);u(Q,Me),u(Me,s(`menu.selectable`)),u(Q,s(`。`));let $=l(`li`,Y);u(Y,$),u($,s(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Ne=l(`code`,$);u($,Ne),u(Ne,s(`popupRender`));let Pe=o($);return u($,Pe),n(Pe,` `),u($,s(`包住基础内容。`)),e})}),c,g),c})};export{D as default};