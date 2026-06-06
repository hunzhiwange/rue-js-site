import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h}from"./vapor-runtime-C1rlwc61.js";import{a as g,n as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as v,t as y}from"./src-BLzF0BqW.js";import{n as b}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as x}from"./dropdown-BcbhaTo5.js";import{t as S}from"./PreviewBlock-CfdDuiov.js";var C=a=>d(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,u);t(u,p),e(p,`table table-zebra`);let m=s(`thead`,p);t(p,m);let g=s(`tr`,m);t(m,g);let v=s(`th`,g);t(g,v),t(v,r(`属性`));let y=s(`th`,g);t(g,y),t(y,r(`说明`));let b=s(`th`,g);t(g,b),t(b,r(`类型`));let x=s(`th`,g);t(g,x),t(x,r(`默认值`));let S=s(`tbody`,p);t(p,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{f(d(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;h(()=>f(t,u,d))});let p=s(`td`,a);t(a,p);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let t=e.description;h(()=>f(t,p,m))});let g=s(`td`,a);t(a,g);let _=s(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;h(()=>f(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;h(()=>f(t,b,x))}),r}),r,a)}})}),u}),w=()=>{let{open:_,source:v}=g(`useSetup:0:0`,()=>m(()=>({open:g(`ref:1:0`,()=>u(!1)),source:g(`ref:1:1`,()=>u(`trigger`))})));return d(u=>{let m=s(`div`,u);e(m,`not-prose rounded-box border border-base-300 bg-base-100/70 p-6`);let g=s(`div`,m);t(m,g),e(g,`flex flex-wrap items-center gap-3`);let y=i(`rue:component:anchor`);t(g,y);let b=d(()=>{let r=o(),i=s(`button`,r);t(r,i),c(i,`type`,`button`),e(i,`btn btn-primary`),c(i,`data-testid`,`dropdown-controlled-trigger`);let u=a(i);return t(i,u),n(()=>{l(u,_.value?`关闭菜单`:`打开菜单`)}),r});n(()=>{let e=p(x,{trigger:`click`,open:_.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{_.value=e,v.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:b});h(()=>f(e,g,y))});let S=s(`span`,g);t(g,S),e(S,`text-sm text-base-content/70`),t(S,r(`用单个触发器演示受控模式，按钮文本和状态说明都跟随`));let C=s(`code`,S);t(S,C),t(C,r(`open`)),t(S,r(`变化。`));let w=s(`div`,m);t(m,w),e(w,`mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let T=s(`div`,w);t(w,T),e(T,`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`);let E=s(`div`,T);t(T,E),e(E,`text-sm font-medium`),t(E,r(`受控状态面板`));let D=s(`div`,T);t(T,D),e(D,`grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4`);let O=s(`div`,D);t(D,O),e(O,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let k=s(`span`,O);t(O,k),e(k,`text-xs uppercase tracking-wide text-base-content/60`),t(k,r(`当前状态`));let A=s(`span`,O);t(O,A),e(A,`badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide`),c(A,`data-testid`,`dropdown-controlled-state`);let j=a(A);t(A,j),n(()=>{l(j,_.value?`open`:`closed`)});let M=s(`div`,D);t(D,M),e(M,`flex items-center justify-between gap-3 sm:min-w-[11rem]`);let N=s(`span`,M);t(M,N),e(N,`text-sm text-base-content/60`),t(N,r(`最近来源`));let P=s(`span`,M);t(M,P),e(P,`badge badge-outline min-w-[5.5rem] justify-center font-normal`),c(P,`data-testid`,`dropdown-controlled-source`);let F=a(P);return t(P,F),n(()=>{l(F,v.value)}),m})},T=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认更接近成熟组件库的 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`保留 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`原有 daisyUI 风格能力继续保留，适合原生结构或静态布局演示。`,type:`兼容属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`旧的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],E=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保留默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],D=()=>{let{tabs:_,selectedKeys:D,filterKeys:O}=g(`useSetup:0:0:dup1`,()=>m(()=>({tabs:{recommended:g(`ref:1:2`,()=>u(`preview`)),controlled:g(`ref:1:3`,()=>u(`preview`)),selectable:g(`ref:1:4`,()=>u(`preview`)),custom:g(`ref:1:5`,()=>u(`preview`)),contextMenu:g(`ref:1:6`,()=>u(`preview`)),details:g(`ref:1:7`,()=>u(`preview`)),popover:g(`ref:1:8`,()=>u(`preview`)),focus:g(`ref:1:9`,()=>u(`preview`)),positions:g(`ref:1:10`,()=>u(`preview`)),modifiers:g(`ref:1:11`,()=>u(`preview`))},selectedKeys:g(`ref:1:12`,()=>u([`overview`])),filterKeys:g(`ref:1:13`,()=>u([`mentions`,`comment`]))}))),k=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:y(`span`,{className:`badge badge-primary badge-xs`,children:`Live`})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],A=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return d(u=>{let m=o(),g=i(`rue:component:anchor`);return t(m,g),f(p(b,{children:d(()=>{let u=o(),d=s(`div`,u);t(u,d),e(d,`max-w-none prose prose-sm md:prose-base`);let m=s(`h1`,d);t(d,m),t(m,r(`Dropdown 下拉菜单`));let g=s(`p`,d);t(d,g),e(g,`text-sm mt-3 mb-3`),t(g,r(`Rue 的 Dropdown 现在同时支持两条路径：一条是保留当前视觉风格与 daisyUI 原生结构的兼容写法；另一条是更贴近业务组件习惯的增强 API，直接支持`));let b=a(g);t(g,b),l(b,` `);let j=s(`code`,g);t(g,j),t(j,r(`menu / items`)),t(g,r(`、`));let M=s(`code`,g);t(g,M),t(M,r(`trigger`)),t(g,r(`、`));let N=s(`code`,g);t(g,N),t(N,r(`placement`)),t(g,r(`、`));let P=s(`code`,g);t(g,P),t(P,r(`open`)),t(g,r(`、`));let F=s(`code`,g);t(g,F),t(F,r(`popupRender`)),t(g,r(`和右键菜单。`));let I=s(`div`,d);t(d,I),e(I,`not-prose mt-6 grid gap-4 md:grid-cols-3`);let L=s(`div`,I);t(I,L),e(L,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let R=s(`div`,L);t(L,R),e(R,`text-xs font-semibold uppercase tracking-wide text-primary`),t(R,r(`推荐写法`));let ee=s(`div`,L);t(L,ee),e(ee,`mt-2 text-sm font-medium`),t(ee,r(`用 menu / items 描述命令菜单`));let te=s(`p`,L);t(L,te),e(te,`mt-2 text-sm opacity-70`),t(te,r(`更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。`));let z=s(`div`,I);t(I,z),e(z,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let ne=s(`div`,z);t(z,ne),e(ne,`text-xs font-semibold uppercase tracking-wide text-secondary`),t(ne,r(`daisyUI 原始写法`));let B=s(`div`,z);t(z,B),e(B,`mt-2 text-sm font-medium`),t(B,r(`原始写法可用`));let V=s(`p`,z);t(z,V),e(V,`mt-2 text-sm opacity-70`);let re=s(`code`,V);t(V,re),t(re,r(`details`)),t(V,r(`、`));let ie=s(`code`,V);t(V,ie),t(ie,r(`popover`)),t(V,r(`、`));let ae=s(`code`,V);t(V,ae),t(ae,r(`focus`)),t(V,r(`、位置类和 modifier 都没有删除。`));let H=s(`div`,I);t(I,H),e(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=s(`div`,H);t(H,U),e(U,`text-xs font-semibold uppercase tracking-wide text-accent`),t(U,r(`交互补齐`));let W=s(`div`,H);t(H,W),e(W,`mt-2 text-sm font-medium`),t(W,r(`受控、右键、可选中、自定义面板`));let G=s(`p`,H);t(H,G),e(G,`mt-2 text-sm opacity-70`),t(G,r(`适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。`));let oe=s(`h2`,d);t(d,oe),t(oe,r(`何时使用`));let K=s(`ul`,d);t(d,K);let se=s(`li`,K);t(K,se),t(se,r(`需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。`));let ce=s(`li`,K);t(K,ce),t(ce,r(`希望保留 Rue 当前 dropdown 视觉风格，但把 API 提升到更接近成熟组件库的层级。`));let le=s(`li`,K);t(K,le),t(le,r(`既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。`));let ue=s(`h2`,d);t(d,ue),t(ue,r(`推荐增强 API`));let de=i(`rue:component:anchor`);t(d,de),n(()=>{let e=p(S,{title:`推荐：命令菜单`,tab:_.recommended,preview:()=>y(`div`,{className:`not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`click`,placement:`bottomLeft`,arrow:!0,items:k,"data-testid":`dropdown-recommended`,children:y(`button`,{className:`btn btn-primary`,children:`Workspace`})})}),code:`const items = [
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
</Dropdown>`});h(()=>f(e,d,de))});let fe=i(`rue:component:anchor`);t(d,fe),n(()=>{let e=p(S,{title:`受控开关与来源`,tab:_.controlled,preview:y(w,{}),code:`const open = ref(false);
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
</Dropdown>`});h(()=>f(e,d,fe))});let pe=i(`rue:component:anchor`);t(d,pe),n(()=>{let e=p(S,{title:`可选中筛选菜单`,tab:_.selectable,preview:()=>v(`div`,{className:`not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]`,children:[y(`div`,{className:`rounded-box border border-base-300 bg-base-100/70 p-6`,children:v(`div`,{className:`flex flex-wrap gap-3`,children:[y(x,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:D.value,onSelect:e=>{D.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn`,children:`Single Select`})}),y(x,{trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:O.value,onSelect:e=>{O.value=e.selectedKeys},onDeselect:e=>{O.value=e.selectedKeys},items:A},children:y(`button`,{className:`btn btn-outline`,children:`Multiple Filters`})})]})}),v(`div`,{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm`,children:[v(`div`,{children:[`单选：`,D.value.join(`, `)||`未选中`]}),v(`div`,{className:`mt-2`,children:[`多选：`,O.value.join(`, `)||`未选中`]}),v(`p`,{className:`mt-3 text-base-content/70`,children:[`这类筛选面板通常会把 `,y(`code`,{children:`closeOnClick`}),` 设为 `,y(`code`,{children:`false`}),`，让用户连续选择。`]})]})]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`});h(()=>f(e,d,pe))});let me=i(`rue:component:anchor`);t(d,me),n(()=>{let e=p(S,{title:`自定义面板包装`,tab:_.custom,preview:()=>y(`div`,{className:`not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:v(`div`,{className:`p-4`,children:[y(`div`,{className:`text-sm font-medium`,children:`Editor shortcuts`}),y(`div`,{className:`mt-2 text-sm text-base-content/70`,children:`Publish, share and manage visibility in one place.`})]}),popupRender:e=>v(`div`,{className:`w-72`,children:[y(`div`,{className:`border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary`,children:`Quick panel`}),e,v(`div`,{className:`flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3`,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Later`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Publish`})]})]}),children:y(`button`,{className:`btn btn-secondary`,children:`Quick Panel`})})}),code:`<Dropdown
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
</Dropdown>`});h(()=>f(e,d,me))});let he=i(`rue:component:anchor`);t(d,he),n(()=>{let e=p(S,{title:`右键上下文菜单`,tab:_.contextMenu,preview:()=>y(`div`,{className:`not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6`,children:y(x,{trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:y(`div`,{className:`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,children:`在这个区域右键，打开上下文菜单`})})}),code:`<Dropdown
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
</Dropdown>`});h(()=>f(e,d,he))});let ge=s(`h2`,d);t(d,ge),t(ge,r(`兼容原生结构`));let _e=i(`rue:component:anchor`);t(d,_e),n(()=>{let e=p(S,{title:`Dropdown using details and summary`,tab:_.details,preview:()=>v(x,{as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[y(`summary`,{className:`btn m-1`,children:`open or close`}),v(x.Content,{as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});h(()=>f(e,d,_e))});let ve=i(`rue:component:anchor`);t(d,ve),n(()=>{let e=p(S,{title:`Dropdown using popover API`,tab:_.popover,preview:()=>v(`div`,{className:`flex items-start gap-4`,children:[y(`button`,{className:`btn`,popovertarget:`dropdown-popover-1`,style:{anchorName:`--dropdown-anchor-1`},children:`Button`}),v(x,{as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`});h(()=>f(e,d,ve))});let ye=i(`rue:component:anchor`);t(d,ye),n(()=>{let e=p(S,{title:`Dropdown menu`,tab:_.focus,preview:()=>v(x,{className:`mb-32`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});h(()=>f(e,d,ye))});let be=i(`rue:component:anchor`);t(d,be),n(()=>{let e=p(S,{title:`Positions`,tab:_.positions,preview:()=>v(`div`,{className:`flex flex-wrap gap-12 py-20`,children:[v(x,{align:`start`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(x,{align:`center`,direction:`top`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),v(x,{direction:`left`,align:`end`,children:[y(x.Trigger,{as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]})]}),code:`<Dropdown align="start">
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
</Dropdown>`});h(()=>f(e,d,be))});let xe=i(`rue:component:anchor`);t(d,xe),n(()=>{let e=p(S,{title:`Dropdown hover and force open`,tab:_.modifiers,preview:()=>v(x,{hover:!0,forceOpen:!0,children:[y(`div`,{tabIndex:0,role:`button`,className:`btn m-1`,children:`Always visible`}),v(x.Content,{as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[y(`li`,{children:y(`button`,{children:`Item 1`})}),y(`li`,{children:y(`button`,{children:`Item 2`})})]})]}),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`});h(()=>f(e,d,xe))}),t(d,s(`br`,d));let q=s(`h2`,d);t(d,q),c(q,`id`,`dropdown-api`),t(q,r(`API`));let Se=i(`rue:component:anchor`);t(d,Se),n(()=>{let e=p(C,{rows:T});h(()=>f(e,d,Se))});let J=s(`h3`,d);t(d,J),e(J,`mt-8`),t(J,r(`menu 扩展`));let Ce=i(`rue:component:anchor`);t(d,Ce),n(()=>{let e=p(C,{rows:E});h(()=>f(e,d,Ce))});let we=s(`h2`,d);t(d,we),t(we,r(`FAQ`));let Y=s(`ul`,d);t(d,Y);let X=s(`li`,Y);t(Y,X),t(X,r(`想做业务菜单、用户菜单、右键菜单时，优先用`));let Te=s(`code`,X);t(X,Te),t(Te,r(`menu`)),t(X,r(`或`));let Ee=s(`code`,X);t(X,Ee),t(Ee,r(`items`)),t(X,r(`。`));let Z=s(`li`,Y);t(Y,Z),t(Z,r(`想保留完全原生的 HTML 结构时，继续使用`));let De=s(`code`,Z);t(Z,De),t(De,r(`Dropdown.Trigger`)),t(Z,r(`+`));let Oe=a(Z);t(Z,Oe),l(Oe,` `);let ke=s(`code`,Z);t(Z,ke),t(ke,r(`Dropdown.Content`)),t(Z,r(`，或直接写 details / summary。`));let Q=s(`li`,Y);t(Y,Q),t(Q,r(`需要筛选面板、多选菜单时，通常把`));let Ae=s(`code`,Q);t(Q,Ae),t(Ae,r(`closeOnClick`)),t(Q,r(`设为`));let je=s(`code`,Q);t(Q,je),t(je,r(`false`)),t(Q,r(`，并配合`));let Me=s(`code`,Q);t(Q,Me),t(Me,r(`menu.selectable`)),t(Q,r(`。`));let $=s(`li`,Y);t(Y,$),t($,r(`需要在面板里追加说明、底部操作区或二次确认按钮时，使用`));let Ne=s(`code`,$);t($,Ne),t(Ne,r(`popupRender`));let Pe=a($);return t($,Pe),l(Pe,` `),t($,r(`包住原始内容。`)),u})}),m,g),m})};export{D as default};