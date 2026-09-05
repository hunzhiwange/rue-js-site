import{Bt as e,C as t,Et as n,H as r,K as i,Kt as a,Mt as o,S as s,V as c,W as l,Y as u,_n as d,_t as f,bn as p,fn as m,gn as h,hn as g,ht as _,kn as v,mn as y,nt as b,q as x,wn as S,x as C,z as w}from"./rue-runtime-CwEGJ854.js";import{t as T}from"./dropdown-B1QEBvqC.js";import{r as E}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as D}from"./PreviewBlock-B_EIWpIk.js";var ee=d(`<div class="w-72"><div class="border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary">Quick panel</div><!--rue:text-hole:0--><div class="flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3"><button class="btn btn-ghost btn-sm">Later</button><button class="btn btn-primary btn-sm">Publish</button></div></div>`),te=d(`<div class="not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ne=d(`<div class="not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]"><div class="rounded-box border border-base-300 bg-base-100/70 p-6"><div class="flex flex-wrap gap-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm"><div>单选：<!--rue:text-hole:2--></div><div class="mt-2">多选：<!--rue:text-hole:3--></div><p class="mt-3 text-base-content/70">这类筛选面板通常会把 <code>closeOnClick</code> 设为 <code>false</code> ，让用户连续选择。</p></div></div>`),re=d(`<div class="not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ie=d(`<div class="not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ae=d(`<summary class="btn m-1">open or close</summary>`),O=d(`<li><button>Item 1</button></li>`),k=d(`<li><button>Item 2</button></li>`),oe=d(`<div class="flex items-start gap-4"><button class="btn" popovertarget="dropdown-popover-1">Button</button><!--rue:opaque-hole:0--></div>`),se=d(`<div class="grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]"><div class="flex min-h-28 items-start justify-start"><!--rue:opaque-hole:0--></div><div class="flex min-h-28 items-end justify-center"><!--rue:opaque-hole:1--></div><div class="flex min-h-28 min-w-80 items-end justify-end sm:ps-56" data-testid="dropdown-position-left-end-slot"><!--rue:opaque-hole:2--></div></div>`),ce=d(`<div tabIndex="0" role="button" class="btn m-1">Always visible</div>`),A=d(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),j=d(`<div class="not-prose rounded-box border border-base-300 bg-base-100/70 p-6"><div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">用单个触发器演示受控模式，按钮文本和状态说明都跟随 <code>open</code> 变化。</span></div><div class="mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div class="text-sm font-medium">受控状态面板</div><div class="grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4"><div class="flex items-center justify-between gap-3 sm:min-w-[11rem]"><span class="text-xs uppercase tracking-wide text-base-content/60">当前状态</span><span class="badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide" data-testid="dropdown-controlled-state"><!--rue:text-hole:1--></span></div><div class="flex items-center justify-between gap-3 sm:min-w-[11rem]"><span class="text-sm text-base-content/60">最近来源</span><span class="badge badge-outline min-w-[5.5rem] justify-center font-normal" data-testid="dropdown-controlled-source"><!--rue:text-hole:2--></span></div></div></div></div></div>`),le=d(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Dropdown 下拉菜单</h1><p class="text-sm mt-3 mb-3">Rue 的 Dropdown 现在同时支持两条路径：一条是保持当前视觉风格与 daisyUI 原生结构的写法；另一条是更贴近业务组件习惯的语义 API，直接支持 <code>menu / items</code>、 <code>trigger</code>、<code>placement</code>、<code>open</code>、<code>popupRender</code> 和右键菜单。</p><div class="not-prose mt-6 grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-primary">推荐写法</div><div class="mt-2 text-sm font-medium">用 menu / items 描述命令菜单</div><p class="mt-2 text-sm opacity-70">更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-secondary">daisyUI 自由组合写法</div><div class="mt-2 text-sm font-medium">自由组合写法可用</div><p class="mt-2 text-sm opacity-70"><code>details</code>、<code>popover</code>、<code>focus</code>、位置类和 modifier 都没有删除。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-accent">交互补充</div><div class="mt-2 text-sm font-medium">受控、右键、可选中、自定义面板</div><p class="mt-2 text-sm opacity-70">适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。</p></div></div><h2>何时使用</h2><ul><li>需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。</li><li>适合使用 Rue 当前 dropdown 视觉风格，同时使用更完整的菜单 API。</li><li>既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。</li></ul><h2>推荐语义 API</h2><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>支持原生结构</h2><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><br><h2 id="dropdown-api">API</h2><!--rue:opaque-hole:10--><h3 class="mt-8">menu 扩展</h3><!--rue:opaque-hole:11--><h2>FAQ</h2><ul><li>想做业务菜单、用户菜单、右键菜单时，优先用 <code>menu</code> 或 <code>items</code>。</li><li>想保持完全原生的 HTML 结构时，可以使用 <code>Dropdown.Trigger</code> + <code>Dropdown.Content</code>，或直接写 details / summary。</li><li>需要筛选面板、多选菜单时，通常把 <code>closeOnClick</code> 设为 <code>false</code> ，并配合 <code>menu.selectable</code>。</li><li>需要在面板里追加说明、底部操作区或二次确认按钮时，使用 <code>popupRender</code> 包住基础内容。</li></ul></div>`),M=e=>{let r=l(e.rows);return x(n(Object.assign(e=>{let i=A().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,c=[];return S(()=>{let e=r.get()||[];c=t(o,a,c,e,(e,t)=>e.prop,(e,t)=>{let r=l(e),i=l(t);return s((e,t,i)=>C(e,i,()=>n(Object.assign(e=>{let t=g(`tr`,e),n=g(`td`,t);m(t,n);let i=g(`code`,n);m(n,i);let a=h(``);m(i,a),p(a,()=>r.get().prop);let o=g(`td`,t);m(t,o);let s=h(``);m(o,s),p(s,()=>r.get().description);let c=g(`td`,t);m(t,c);let l=g(`code`,c);m(c,l);let u=h(``);m(l,u),p(u,()=>r.get().type);let d=g(`td`,t);m(t,d);let f=g(`code`,d);m(d,f);let _=h(``);return m(f,_),p(_,()=>r.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{r.set(e.rows)}),()=>e)},ue=()=>{let t=e(!1),r=e(`trigger`);return o(()=>x(n(Object.assign(e=>{let a=j().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[0],s=o.parentNode,c=a.childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],l=c.parentNode,u=a.childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],d=u.parentNode,f=y(s);i(f,T,()=>({trigger:`click`,open:t.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,n)=>{t.value=e,r.value=n.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:(e,r,i)=>C(e,i,()=>n(Object.assign(e=>{let n=b(),r=g(`button`,n);m(n,r),r.setAttribute(`type`,`button`),r.className=`btn btn-primary`,r.setAttribute(`data-testid`,`dropdown-controlled-trigger`);let i=h(``);return m(r,i),p(i,()=>t.value?`关闭菜单`:`打开菜单`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(f,o);let _=h(``);l.insertBefore(_,c),l.removeChild(c),p(_,()=>t.value?`open`:`closed`);let v=h(``);return d.insertBefore(v,u),d.removeChild(u),p(v,()=>r.value),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{})))},de=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认使用 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`使用 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`基础 daisyUI 风格能力展示，适合原生结构或静态布局演示。`,type:`扩展属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`基础的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],fe=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保持默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],N=()=>{let t={recommended:e(`preview`),controlled:e(`preview`),selectable:e(`preview`),custom:e(`preview`),contextMenu:e(`preview`),details:e(`preview`),popover:e(`preview`),focus:e(`preview`),positions:e(`preview`),modifiers:e(`preview`)},s=e([`overview`]),l=e([`mentions`,`comment`]),d=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:n(Object.assign(e=>{let t=g(`span`,e);return t.className=`badge badge-primary badge-xs`,m(t,h(`Live`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],p=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return o(()=>x(r(E,()=>({children:(e,o,x)=>C(e,x,()=>n(Object.assign(e=>{let o=b(),x=le().content.cloneNode(!0),w=x.firstChild,E=w.childNodes[6],A=E.parentNode,j=w.childNodes[7],N=j.parentNode,P=w.childNodes[8],F=P.parentNode,I=w.childNodes[9],L=I.parentNode,R=w.childNodes[10],z=R.parentNode,B=w.childNodes[12],pe=B.parentNode,V=w.childNodes[13],H=V.parentNode,U=w.childNodes[14],W=U.parentNode,G=w.childNodes[15],K=G.parentNode,q=w.childNodes[16],J=q.parentNode,Y=w.childNodes[19],X=Y.parentNode,Z=w.childNodes[21],me=Z.parentNode;o.appendChild(x);let Q=y(A);i(Q,D,()=>({title:`推荐：命令菜单`,tab:t.recommended,preview:a(()=>n(Object.assign(e=>{let t=te().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,o=y(a);return i(o,T,()=>({trigger:`click`,placement:`bottomLeft`,arrow:!0,items:d,"data-testid":`dropdown-recommended`,children:(e,t,r)=>C(e,r,()=>n(Object.assign(e=>{let t=b(),n=g(`button`,t);return m(t,n),n.className=`btn btn-primary`,m(n,h(`Workspace`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`const items = [
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
</Dropdown>`})),A.insertBefore(Q,E);let he=y(N);i(he,D,()=>({title:`受控开关与来源`,tab:t.controlled,preview:r(ue,()=>({})),code:`const open = ref(false);
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
</Dropdown>`})),N.insertBefore(he,j);let ge=y(F);i(ge,D,()=>({title:`可选中筛选菜单`,tab:t.selectable,preview:a(()=>n(Object.assign(e=>{let t=ne().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0].childNodes[0],a=r.parentNode,o=t.childNodes[0].childNodes[0].childNodes[1],u=o.parentNode,d=t.childNodes[1].childNodes[0].childNodes[1],f=d.parentNode,_=t.childNodes[1].childNodes[1].childNodes[1],v=_.parentNode,x=y(a);i(x,T,()=>({trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:s.value,onSelect:e=>{s.value=e.selectedKeys},items:p},children:(e,t,r)=>C(e,r,()=>n(Object.assign(e=>{let t=b(),n=g(`button`,t);return m(t,n),n.className=`btn`,m(n,h(`Single Select`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(x,r);let S=y(u);return i(S,T,()=>({trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:l.value,onSelect:e=>{l.value=e.selectedKeys},onDeselect:e=>{l.value=e.selectedKeys},items:p},children:(e,t,r)=>C(e,r,()=>n(Object.assign(e=>{let t=b(),n=g(`button`,t);return m(t,n),n.className=`btn btn-outline`,m(n,h(`Multiple Filters`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(S,o),c(f,d,()=>{let e=s.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=h(`未选中`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),c(v,_,()=>{let e=l.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=h(`未选中`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`})),F.insertBefore(ge,P);let _e=y(L);i(_e,D,()=>({title:`自定义面板包装`,tab:t.custom,preview:a(()=>n(Object.assign(e=>{let t=re().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,o=y(a);return i(o,T,()=>({trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:n(Object.assign(e=>{let t=g(`div`,e);t.className=`p-4`;let n=g(`div`,t);m(t,n),n.className=`text-sm font-medium`,m(n,h(`Editor shortcuts`));let r=g(`div`,t);return m(t,r),r.className=`mt-2 text-sm text-base-content/70`,m(r,h(`Publish, share and manage visibility in one place.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),popupRender:e=>_(t=>{let n=ee().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=r.parentNode;return S(()=>{let t=e;v(()=>u(t,i,r))}),n}),children:(e,t,r)=>C(e,r,()=>n(Object.assign(e=>{let t=b(),n=g(`button`,t);return m(t,n),n.className=`btn btn-secondary`,m(n,h(`Quick Panel`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Dropdown
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
</Dropdown>`})),L.insertBefore(_e,I);let ve=y(z);i(ve,D,()=>({title:`右键上下文菜单`,tab:t.contextMenu,preview:a(()=>n(Object.assign(e=>{let t=ie().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,o=y(a);return i(o,T,()=>({trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:(e,t,r)=>C(e,r,()=>n(Object.assign(e=>{let t=b(),n=g(`div`,t);return m(t,n),n.className=`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,m(n,h(`在这个区域右键，打开上下文菜单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Dropdown
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
</Dropdown>`})),z.insertBefore(ve,R);let ye=y(pe);i(ye,D,()=>({title:`Dropdown using details and summary`,tab:t.details,preview:a(()=>(()=>{let e=f(T.Content,()=>({as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[n(e=>O().content.cloneNode(!0).firstChild),n(e=>k().content.cloneNode(!0).firstChild)]}));return f(T,()=>({as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[n(e=>ae().content.cloneNode(!0).firstChild),e]}))})()),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`})),pe.insertBefore(ye,B);let be=y(H);i(be,D,()=>({title:`Dropdown using popover API`,tab:t.popover,preview:a(()=>n(Object.assign(e=>{let t=oe().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=t.childNodes[1],o=a.parentNode;r.className=`btn`,r.setAttribute(`popovertarget`,`dropdown-popover-1`),Object.assign(r.style,{anchorName:`--dropdown-anchor-1`});let s=y(o);return i(s,T,()=>({as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[(e,t,r)=>C(e,r,()=>n(Object.assign(e=>{let t=b(),n=g(`li`,t);m(t,n);let r=g(`button`,n);return m(n,r),m(r,h(`Item 1`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>C(e,r,()=>n(Object.assign(e=>{let t=b(),n=g(`li`,t);m(t,n);let r=g(`button`,n);return m(n,r),m(r,h(`Item 2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),o.insertBefore(s,a),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`})),H.insertBefore(be,V);let xe=y(W);i(xe,D,()=>({title:`Dropdown menu`,tab:t.focus,preview:a(()=>(()=>{let e=f(T.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`})),t=f(T.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[n(e=>O().content.cloneNode(!0).firstChild),n(e=>k().content.cloneNode(!0).firstChild)]}));return f(T,()=>({className:`mb-32`,children:[e,t]}))})()),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`})),W.insertBefore(xe,U);let Se=y(K);i(Se,D,()=>({title:`Positions`,tab:t.positions,preview:a(()=>_(e=>{let t=se().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0],i=r.parentNode,a=t.childNodes[1].childNodes[0],o=a.parentNode,s=t.childNodes[2].childNodes[0],c=s.parentNode;return S(()=>{let e=f(T.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`})),t=f(T.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[n(Object.assign(e=>{let t=g(`li`,e),n=g(`button`,t);return m(t,n),m(n,h(`Item 1`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),n(Object.assign(e=>{let t=g(`li`,e),n=g(`button`,t);return m(t,n),m(n,h(`Item 2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),a=f(T,()=>({align:`start`,children:[e,t]}));v(()=>u(a,i,r))}),S(()=>{let e=f(T.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`})),t=f(T.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[n(Object.assign(e=>{let t=g(`li`,e),n=g(`button`,t);return m(t,n),m(n,h(`Item 1`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),n(Object.assign(e=>{let t=g(`li`,e),n=g(`button`,t);return m(t,n),m(n,h(`Item 2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),r=f(T,()=>({align:`center`,direction:`top`,children:[e,t]}));v(()=>u(r,o,a))}),S(()=>{let e=f(T.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`})),t=f(T.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[n(Object.assign(e=>{let t=g(`li`,e),n=g(`button`,t);return m(t,n),m(n,h(`Item 1`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),n(Object.assign(e=>{let t=g(`li`,e),n=g(`button`,t);return m(t,n),m(n,h(`Item 2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),r=f(T,()=>({direction:`left`,align:`end`,children:[e,t]}));v(()=>u(r,c,s))}),t})),code:`<Dropdown align="start">
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
</Dropdown>`})),K.insertBefore(Se,G);let Ce=y(J);i(Ce,D,()=>({title:`Dropdown hover and force open`,tab:t.modifiers,preview:a(()=>(()=>{let e=f(T.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[n(e=>O().content.cloneNode(!0).firstChild),n(e=>k().content.cloneNode(!0).firstChild)]}));return f(T,()=>({hover:!0,forceOpen:!0,children:[n(e=>ce().content.cloneNode(!0).firstChild),e]}))})()),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`})),J.insertBefore(Ce,q);let we=y(X);i(we,M,()=>({rows:de})),X.insertBefore(we,Y);let $=y(me);return i($,M,()=>({rows:fe})),me.insertBefore($,Z),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})))})),e=>w(()=>{})))};export{N as default};