import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,t as p,tn as m,tt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g,n as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as v,t as y}from"./src-Dlanwp1X.js";import{t as b}from"./dropdown-BYa0OC3L.js";import{r as x}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as S}from"./PreviewBlock-CCAV1yb7.js";var C=n=>s(r=>{let i=f(`div`,r);d(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=f(`table`,i);e(i,u),d(u,`table table-zebra`);let p=f(`thead`,u);e(u,p);let g=f(`tr`,p);e(p,g);let v=f(`th`,g);e(g,v),e(v,o(`属性`));let y=f(`th`,g);e(g,y),e(y,o(`说明`));let b=f(`th`,g);e(g,b),e(b,o(`类型`));let x=f(`th`,g);e(g,x),e(x,o(`默认值`));let S=f(`tbody`,u);e(u,S);let C=h(`rue:list:start`),w=h(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,u)=>{l(s(()=>{let r=c(),i=f(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=f(`td`,i);e(i,o);let s=f(`code`,o);e(o,s);let u=h(`rue:slot:anchor`);e(s,u),t(()=>{let e=n.prop;m(()=>l(e,s,u))});let d=f(`td`,i);e(i,d);let p=h(`rue:slot:anchor`);e(d,p),t(()=>{let e=n.description;m(()=>l(e,d,p))});let g=f(`td`,i);e(i,g);let _=f(`code`,g);e(g,_);let v=h(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;m(()=>l(e,_,v))});let y=f(`td`,i);e(i,y);let b=f(`code`,y);e(y,b);let x=h(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;m(()=>l(e,b,x))}),r}),r,i)}})}),i}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>u(()=>({open:g(`ref:1:0`,()=>n(!1)),source:g(`ref:1:1`,()=>n(`trigger`))})));return s(n=>{let u=f(`div`,n);d(u,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=f(`div`,u);e(u,g),d(g,`flex flex-wrap items-center gap-3`);let y=h(`rue:component:anchor`);e(g,y);let x=s(()=>{let n=c(),o=f(`button`,n);e(n,o),a(o,`type`,`button`),d(o,`btn btn-primary`),a(o,`data-testid`,`dropdown-controlled-trigger`);let s=r(o);return e(o,s),t(()=>{i(s,_.value?`关闭菜单`:`打开菜单`)}),n});t(()=>{let e=p(b,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:x});m(()=>l(e,g,y))});let S=f(`span`,g);e(g,S),d(S,`text-sm text-base-content/70`),e(S,o(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=f(`code`,S);e(S,C),e(C,o(`open`)),e(S,o(`变化。`));let w=f(`div`,u);e(u,w),d(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=f(`div`,w);e(w,T),d(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=f(`div`,T);e(T,E),d(E,`text-sm font-medium`),e(E,o(`受控状态面板`));let D=f(`div`,T);e(T,D),d(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=f(`div`,D);e(D,O),d(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=f(`span`,O);e(O,k),d(k,`text-xs uppercase tracking-wide text-base-content/60`),e(k,o(`当前状态`));let A=f(`span`,O);e(O,A),d(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),a(A,`data-testid`,`dropdown-controlled-state`);let j=r(A);e(A,j),t(()=>{i(j,_.value?`open`:`closed`)});let M=f(`div`,D);e(D,M),d(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=f(`span`,M);e(M,N),d(N,`text-sm text-base-content/60`),e(N,o(`最近来源`));let P=f(`span`,M);e(M,P),d(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),a(P,`data-testid`,`dropdown-controlled-source`);let F=r(P);return e(P,F),t(()=>{i(F,v.value)}),u})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认使用 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`使用 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`基础 daisyUI 风格能力展示，适合原生结构或静态布局演示。`,type:`扩展属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`基础的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保持默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>u(()=>({tabs:{recommended:g(`ref:1:2`,()=>n(`preview`)),controlled:g(`ref:1:3`,()=>n(`preview`)),selectable:g(`ref:1:4`,()=>n(`preview`)),custom:g(`ref:1:5`,()=>n(`preview`)),contextMenu:g(`ref:1:6`,()=>n(`preview`)),details:g(`ref:1:7`,()=>n(`preview`)),popover:g(`ref:1:8`,()=>n(`preview`)),focus:g(`ref:1:9`,()=>n(`preview`)),positions:g(`ref:1:10`,()=>n(`preview`)),modifiers:g(`ref:1:11`,()=>n(`preview`))},selectedKeys:g(`ref:1:12`,()=>n([`overview`])),filterKeys:g(`ref:1:13`,()=>n([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return s(n=>{let u=c(),g=h(`rue:component:anchor`);return e(u,g),l(p(x,{children:s(()=>{let n=c(),s=f(`div`,n);e(n,s),d(s,`max-w-none prose prose-sm md:prose-base`);let u=f(`h1`,s);e(s,u),e(u,o(`Dropdown 下拉菜单`));let g=f(`p`,s);e(s,g),d(g,`text-sm mt-3 mb-3`),e(g,o(`Rue 的 Dropdown 现在同时支持两条路径：一条是保持当前视觉风格与 daisyUI 原生结构的写法；另一条是更贴近业务组件习惯的语义 API，直接支持`));let x=f(`code`,g);e(g,x),e(x,o(`menu / items`)),e(g,o(`、`));let j=f(`code`,g);e(g,j),e(j,o(`trigger`)),e(g,o(`、`));let M=f(`code`,g);e(g,M),e(M,o(`placement`)),e(g,o(`、`));let N=f(`code`,g);e(g,N),e(N,o(`open`)),e(g,o(`、`));let P=f(`code`,g);e(g,P),e(P,o(`popupRender`));let F=r(g);e(g,F),i(F,` `),e(g,o(`和右键菜单。`));let I=f(`div`,s);e(s,I),d(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=f(`div`,I);e(I,L),d(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=f(`div`,L);e(L,R),d(R,`text-xs font-semibold uppercase tracking-wide text-primary`),e(R,o(`推荐写法`));let z=f(`div`,L);e(L,z),d(z,`mt-2 text-sm font-medium`),e(z,o(`用 menu / items 描述命令菜单`));let B=f(`p`,L);e(L,B),d(B,`mt-2 text-sm opacity-70`),e(B,o(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let V=f(`div`,I);e(I,V),d(V,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let H=f(`div`,V);e(V,H),d(H,`text-xs font-semibold uppercase tracking-wide text-secondary`),e(H,o(`daisyUI 自由组合写法`));let U=f(`div`,V);e(V,U),d(U,`mt-2 text-sm font-medium`),e(U,o(`自由组合写法可用`));let W=f(`p`,V);e(V,W),d(W,`mt-2 text-sm opacity-70`);let ee=f(`code`,W);e(W,ee),e(ee,o(`details`)),e(W,o(`、`));let te=f(`code`,W);e(W,te),e(te,o(`popover`)),e(W,o(`、`));let ne=f(`code`,W);e(W,ne),e(ne,o(`focus`)),e(W,o(`、位置类和 modifier 都没有删除。`));let G=f(`div`,I);e(I,G),d(G,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let K=f(`div`,G);e(G,K),d(K,`text-xs font-semibold uppercase tracking-wide text-accent`),e(K,o(`交互补充`));let q=f(`div`,G);e(G,q),d(q,`mt-2 text-sm font-medium`),e(q,o(`受控、右键、可选中、自定义面板`));let re=f(`p`,G);e(G,re),d(re,`mt-2 text-sm opacity-70`),e(re,o(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let ie=f(`h2`,s);e(s,ie),e(ie,o(`何时使用`));let J=f(`ul`,s);e(s,J);let ae=f(`li`,J);e(J,ae),e(ae,o(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let oe=f(`li`,J);e(J,oe),e(oe,o(`适合使用 Rue 当前 dropdown 视觉风格，同时使用更完整的菜单 API。`));let se=f(`li`,J);e(J,se),e(se,o(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ce=f(`h2`,s);e(s,ce),e(ce,o(`推荐语义 API`));let le=h(`rue:component:anchor`);e(s,le),t(()=>{let e=p(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});m(()=>l(e,s,le))});let ue=h(`rue:component:anchor`);e(s,ue),t(()=>{let e=p(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});m(()=>l(e,s,ue))});let de=h(`rue:component:anchor`);e(s,de),t(()=>{let e=p(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(b,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});m(()=>l(e,s,de))});let fe=h(`rue:component:anchor`);e(s,fe),t(()=>{let e=p(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});m(()=>l(e,s,fe))});let pe=h(`rue:component:anchor`);e(s,pe),t(()=>{let e=p(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(b,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});m(()=>l(e,s,pe))});let me=f(`h2`,s);e(s,me),e(me,o(`支持原生结构`));let he=h(`rue:component:anchor`);e(s,he),t(()=>{let e=p(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(b,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(b.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});m(()=>l(e,s,he))});let ge=h(`rue:component:anchor`);e(s,ge),t(()=>{let e=p(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(b,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});m(()=>l(e,s,ge))});let _e=h(`rue:component:anchor`);e(s,_e),t(()=>{let e=p(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(b,{className:`mb-32`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});m(()=>l(e,s,_e))});let ve=h(`rue:component:anchor`);e(s,ve),t(()=>{let e=p(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]`,children:[y(`div`,{className:`flex min-h-28 items-start justify-start`,children:v(b,{align:`start`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 items-end justify-center`,children:v(b,{align:`center`,direction:`top`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})}),y(`div`,{className:`flex min-h-28 min-w-80 items-end justify-end sm:ps-56`,"data-testid":`dropdown-position-left-end-slot`,children:v(b,{direction:`left`,align:`end`,children:[y(b.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})})]}),code:`<Dropdown align="start">
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
</Dropdown>`});m(()=>l(e,s,ve))});let ye=h(`rue:component:anchor`);e(s,ye),t(()=>{let e=p(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(b,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(b.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});m(()=>l(e,s,ye))}),e(s,f(`br`,s));let be=f(`h2`,s);e(s,be),a(be,`id`,`dropdown-api`),e(be,o(`API`));let xe=h(`rue:component:anchor`);e(s,xe),t(()=>{let e=p(C,{rows:T});m(()=>l(e,s,xe))});let Se=f(`h3`,s);e(s,Se),d(Se,`mt-8`),e(Se,o(`menu 扩展`));let Ce=h(`rue:component:anchor`);e(s,Ce),t(()=>{let e=p(C,{rows:E});m(()=>l(e,s,Ce))});let we=f(`h2`,s);e(s,we),e(we,o(`FAQ`));let Y=f(`ul`,s);e(s,Y);let X=f(`li`,Y);e(Y,X),e(X,o(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Te=f(`code`,X);e(X,Te),e(Te,o(`menu`)),e(X,o(`或`));let Ee=f(`code`,X);e(X,Ee),e(Ee,o(`items`)),e(X,o(`。`));let Z=f(`li`,Y);e(Y,Z),e(Z,o(`想保持完全原生的 HTML 结构时，可以使用`));let De=f(`code`,Z);e(Z,De),e(De,o(`Dropdown.Trigger`)),e(Z,o(`+`));let Oe=r(Z);e(Z,Oe),i(Oe,` `);let ke=f(`code`,Z);e(Z,ke),e(ke,o(`Dropdown.Content`)),e(Z,o(`，或直接写 details / summary。`));let Q=f(`li`,Y);e(Y,Q),e(Q,o(`需要筛选面板、多选菜单时，通常把`));let Ae=f(`code`,Q);e(Q,Ae),e(Ae,o(`closeOnClick`)),e(Q,o(`设为`));let je=f(`code`,Q);e(Q,je),e(je,o(`false`)),e(Q,o(`，并配合`));let Me=f(`code`,Q);e(Q,Me),e(Me,o(`menu.selectable`)),e(Q,o(`。`));let $=f(`li`,Y);e(Y,$),e($,o(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Ne=f(`code`,$);e($,Ne),e(Ne,o(`popupRender`));let Pe=r($);return e($,Pe),i(Pe,` `),e($,o(`包住基础内容。`)),n})}),u,g),u})};export{D as default};