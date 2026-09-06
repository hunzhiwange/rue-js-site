import{At as e,Dn as t,E as n,Mt as r,Vt as i,_n as a,_t as o,at as s,b as c,ct as l,et as u,gn as d,hn as f,kn as p,nt as m,on as h,pn as g,qt as _,rt as v,st as y,tn as b,ut as x,vn as S,w as C,wn as w,x as T,xn as E}from"./rue-runtime-HIMg8Lz8.js";import{t as D}from"./dropdown-BOXTjvCc.js";import{r as O}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as k}from"./PreviewBlock-Dc0KnPUP.js";var ee=S(`<div class="w-72"><div class="border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary">Quick panel</div><!--rue:text-hole:0--><div class="flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3"><button class="btn btn-ghost btn-sm">Later</button><button class="btn btn-primary btn-sm">Publish</button></div></div>`),te=S(`<div class="not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ne=S(`<div class="not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]"><div class="rounded-box border border-base-300 bg-base-100/70 p-6"><div class="flex flex-wrap gap-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm"><div>单选：<!--rue:text-hole:2--></div><div class="mt-2">多选：<!--rue:text-hole:3--></div><p class="mt-3 text-base-content/70">这类筛选面板通常会把 <code>closeOnClick</code> 设为 <code>false</code> ，让用户连续选择。</p></div></div>`),re=S(`<div class="not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ie=S(`<div class="not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ae=S(`<summary class="btn m-1">open or close</summary>`),A=S(`<li><button>Item 1</button></li>`),j=S(`<li><button>Item 2</button></li>`),oe=S(`<div class="flex items-start gap-4"><button class="btn" popovertarget="dropdown-popover-1">Button</button><!--rue:opaque-hole:0--></div>`),se=S(`<div class="grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]"><div class="flex min-h-28 items-start justify-start"><!--rue:opaque-hole:0--></div><div class="flex min-h-28 items-end justify-center"><!--rue:opaque-hole:1--></div><div class="flex min-h-28 min-w-80 items-end justify-end sm:ps-56" data-testid="dropdown-position-left-end-slot"><!--rue:opaque-hole:2--></div></div>`),ce=S(`<div tabIndex="0" role="button" class="btn m-1">Always visible</div>`),M=S(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),N=S(`<div class="not-prose rounded-box border border-base-300 bg-base-100/70 p-6"><div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">用单个触发器演示受控模式，按钮文本和状态说明都跟随 <code>open</code> 变化。</span></div><div class="mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div class="text-sm font-medium">受控状态面板</div><div class="grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4"><div class="flex items-center justify-between gap-3 sm:min-w-[11rem]"><span class="text-xs uppercase tracking-wide text-base-content/60">当前状态</span><span class="badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide" data-testid="dropdown-controlled-state"><!--rue:text-hole:1--></span></div><div class="flex items-center justify-between gap-3 sm:min-w-[11rem]"><span class="text-sm text-base-content/60">最近来源</span><span class="badge badge-outline min-w-[5.5rem] justify-center font-normal" data-testid="dropdown-controlled-source"><!--rue:text-hole:2--></span></div></div></div></div></div>`),le=S(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Dropdown 下拉菜单</h1><p class="text-sm mt-3 mb-3">Rue 的 Dropdown 现在同时支持两条路径：一条是保持当前视觉风格与 daisyUI 原生结构的写法；另一条是更贴近业务组件习惯的语义 API，直接支持 <code>menu / items</code>、 <code>trigger</code>、<code>placement</code>、<code>open</code>、<code>popupRender</code> 和右键菜单。</p><div class="not-prose mt-6 grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-primary">推荐写法</div><div class="mt-2 text-sm font-medium">用 menu / items 描述命令菜单</div><p class="mt-2 text-sm opacity-70">更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-secondary">daisyUI 自由组合写法</div><div class="mt-2 text-sm font-medium">自由组合写法可用</div><p class="mt-2 text-sm opacity-70"><code>details</code>、<code>popover</code>、<code>focus</code>、位置类和 modifier 都没有删除。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-accent">交互补充</div><div class="mt-2 text-sm font-medium">受控、右键、可选中、自定义面板</div><p class="mt-2 text-sm opacity-70">适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。</p></div></div><h2>何时使用</h2><ul><li>需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。</li><li>适合使用 Rue 当前 dropdown 视觉风格，同时使用更完整的菜单 API。</li><li>既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。</li></ul><h2>推荐语义 API</h2><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>支持原生结构</h2><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><br><h2 id="dropdown-api">API</h2><!--rue:opaque-hole:10--><h3 class="mt-8">menu 扩展</h3><!--rue:opaque-hole:11--><h2>FAQ</h2><ul><li>想做业务菜单、用户菜单、右键菜单时，优先用 <code>menu</code> 或 <code>items</code>。</li><li>想保持完全原生的 HTML 结构时，可以使用 <code>Dropdown.Trigger</code> + <code>Dropdown.Content</code>，或直接写 details / summary。</li><li>需要筛选面板、多选菜单时，通常把 <code>closeOnClick</code> 设为 <code>false</code> ，并配合 <code>menu.selectable</code>。</li><li>需要在面板里追加说明、底部操作区或二次确认按钮时，使用 <code>popupRender</code> 包住基础内容。</li></ul></div>`),P=e=>{let n=s(e.rows);return l(i(Object.assign(e=>{let r=M().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],o=i.parentNode,s=S(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),l=[];return w(()=>{let e=n.get()||[];l=C(o,i,l,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return T(e=>{let t=s().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,c=t.childNodes[1].childNodes[0];c.data=``,c.parentNode;let l=t.childNodes[2].childNodes[0].childNodes[0],u=l.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=a(``);o.insertBefore(p,n),o.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}let g=a(``);u.insertBefore(g,l),u.removeChild(l);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=a(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>c(l)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{n.set(e.rows)}),()=>e)},ue=()=>{let e=b(!1),t=b(`trigger`);return _(()=>l(i(Object.assign(r=>{let s=N().content.cloneNode(!0).firstChild,c=s.childNodes[0].childNodes[0],l=c.parentNode,u=s.childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],p=u.parentNode,m=s.childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],h=m.parentNode,_=f(l);y(_,D,()=>({trigger:`click`,open:e.value,overlayClassName:`animate-none transition-none`,onOpenChange:(n,r)=>{e.value=n,t.value=r.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:(t,r,s)=>n(t,s,()=>i(Object.assign(t=>{let n=o(),r=d(`button`,n);g(n,r),r.setAttribute(`type`,`button`),r.className=`btn btn-primary`,r.setAttribute(`data-testid`,`dropdown-controlled-trigger`);let i=a(``);return g(r,i),E(i,()=>e.value?`关闭菜单`:`打开菜单`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(_,c);let v=a(``);p.insertBefore(v,u),p.removeChild(u),E(v,()=>e.value?`open`:`closed`);let b=a(``);return h.insertBefore(b,m),h.removeChild(m),E(b,()=>t.value),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{})))},de=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认使用 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`使用 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`基础 daisyUI 风格能力展示，适合原生结构或静态布局演示。`,type:`扩展属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`基础的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],fe=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保持默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],F=()=>{let t={recommended:b(`preview`),controlled:b(`preview`),selectable:b(`preview`),custom:b(`preview`),contextMenu:b(`preview`),details:b(`preview`),popover:b(`preview`),focus:b(`preview`),positions:b(`preview`),modifiers:b(`preview`)},s=b([`overview`]),c=b([`mentions`,`comment`]),S=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:i(Object.assign(e=>{let t=d(`span`,e);return t.className=`badge badge-primary badge-xs`,g(t,a(`Live`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],C=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return _(()=>l(v(O,()=>({children:(l,u,_)=>n(l,_,()=>i(Object.assign(l=>{let u=o(),_=le().content.cloneNode(!0),b=_.firstChild,T=b.childNodes[6],E=T.parentNode,O=b.childNodes[7],M=O.parentNode,N=b.childNodes[8],F=N.parentNode,I=b.childNodes[9],L=I.parentNode,R=b.childNodes[10],z=R.parentNode,B=b.childNodes[12],V=B.parentNode,H=b.childNodes[13],pe=H.parentNode,U=b.childNodes[14],W=U.parentNode,G=b.childNodes[15],K=G.parentNode,q=b.childNodes[16],J=q.parentNode,Y=b.childNodes[19],X=Y.parentNode,Z=b.childNodes[21],me=Z.parentNode;u.appendChild(_);let Q=f(E);y(Q,k,()=>({title:`推荐：命令菜单`,tab:t.recommended,preview:h(()=>i(Object.assign(e=>{let t=te().content.cloneNode(!0).firstChild,r=t.childNodes[0],s=r.parentNode,c=f(s);return y(c,D,()=>({trigger:`click`,placement:`bottomLeft`,arrow:!0,items:S,"data-testid":`dropdown-recommended`,children:(e,t,r)=>n(e,r,()=>i(Object.assign(e=>{let t=o(),n=d(`button`,t);return g(t,n),n.className=`btn btn-primary`,g(n,a(`Workspace`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(c,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`const items = [
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
</Dropdown>`})),E.insertBefore(Q,T);let he=f(M);y(he,k,()=>({title:`受控开关与来源`,tab:t.controlled,preview:v(ue,()=>({})),code:`const open = ref(false);
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
</Dropdown>`})),M.insertBefore(he,O);let ge=f(F);y(ge,k,()=>({title:`可选中筛选菜单`,tab:t.selectable,preview:h(()=>i(Object.assign(e=>{let t=ne().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0].childNodes[0],l=r.parentNode,u=t.childNodes[0].childNodes[0].childNodes[1],p=u.parentNode,h=t.childNodes[1].childNodes[0].childNodes[1],_=h.parentNode,v=t.childNodes[1].childNodes[1].childNodes[1],b=v.parentNode,x=f(l);y(x,D,()=>({trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:s.value,onSelect:e=>{s.value=e.selectedKeys},items:C},children:(e,t,r)=>n(e,r,()=>i(Object.assign(e=>{let t=o(),n=d(`button`,t);return g(t,n),n.className=`btn`,g(n,a(`Single Select`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(x,r);let S=f(p);return y(S,D,()=>({trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:c.value,onSelect:e=>{c.value=e.selectedKeys},onDeselect:e=>{c.value=e.selectedKeys},items:C},children:(e,t,r)=>n(e,r,()=>i(Object.assign(e=>{let t=o(),n=d(`button`,t);return g(t,n),n.className=`btn btn-outline`,g(n,a(`Multiple Filters`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),p.insertBefore(S,u),m(_,h,()=>{let e=s.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=a(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=a(`未选中`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),m(b,v,()=>{let e=c.value.join(`, `);return e?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=a(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=a(`未选中`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`})),F.insertBefore(ge,N);let _e=f(L);y(_e,k,()=>({title:`自定义面板包装`,tab:t.custom,preview:h(()=>i(Object.assign(t=>{let r=re().content.cloneNode(!0).firstChild,s=r.childNodes[0],c=s.parentNode,l=f(c);return y(l,D,()=>({trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:i(Object.assign(e=>{let t=d(`div`,e);t.className=`p-4`;let n=d(`div`,t);g(t,n),n.className=`text-sm font-medium`,g(n,a(`Editor shortcuts`));let r=d(`div`,t);return g(t,r),r.className=`mt-2 text-sm text-base-content/70`,g(r,a(`Publish, share and manage visibility in one place.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),popupRender:t=>e(e=>{let n=ee().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=r.parentNode;return w(()=>{let e=t;p(()=>x(e,i,r))}),n}),children:(e,t,r)=>n(e,r,()=>i(Object.assign(e=>{let t=o(),n=d(`button`,t);return g(t,n),n.className=`btn btn-secondary`,g(n,a(`Quick Panel`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(l,s),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),code:`<Dropdown
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
</Dropdown>`})),L.insertBefore(_e,I);let ve=f(z);y(ve,k,()=>({title:`右键上下文菜单`,tab:t.contextMenu,preview:h(()=>i(Object.assign(e=>{let t=ie().content.cloneNode(!0).firstChild,r=t.childNodes[0],s=r.parentNode,c=f(s);return y(c,D,()=>({trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:(e,t,r)=>n(e,r,()=>i(Object.assign(e=>{let t=o(),n=d(`div`,t);return g(t,n),n.className=`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`,g(n,a(`在这个区域右键，打开上下文菜单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(c,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Dropdown
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
</Dropdown>`})),z.insertBefore(ve,R);let ye=f(V);y(ye,k,()=>({title:`Dropdown using details and summary`,tab:t.details,preview:h(()=>(()=>{let e=r(D.Content,()=>({as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[i(e=>A().content.cloneNode(!0).firstChild),i(e=>j().content.cloneNode(!0).firstChild)]}));return r(D,()=>({as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:[i(e=>ae().content.cloneNode(!0).firstChild),e]}))})()),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`})),V.insertBefore(ye,B);let be=f(pe);y(be,k,()=>({title:`Dropdown using popover API`,tab:t.popover,preview:h(()=>i(Object.assign(e=>{let t=oe().content.cloneNode(!0).firstChild,r=t.childNodes[0],s=t.childNodes[1],c=s.parentNode;r.className=`btn`,r.setAttribute(`popovertarget`,`dropdown-popover-1`),Object.assign(r.style,{anchorName:`--dropdown-anchor-1`});let l=f(c);return y(l,D,()=>({as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:[(e,t,r)=>n(e,r,()=>i(Object.assign(e=>{let t=o(),n=d(`li`,t);g(t,n);let r=d(`button`,n);return g(n,r),g(r,a(`Item 1`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>n(e,r,()=>i(Object.assign(e=>{let t=o(),n=d(`li`,t);g(t,n);let r=d(`button`,n);return g(n,r),g(r,a(`Item 2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),c.insertBefore(l,s),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`})),pe.insertBefore(be,H);let xe=f(W);y(xe,k,()=>({title:`Dropdown menu`,tab:t.focus,preview:h(()=>(()=>{let e=r(D.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:`Click to open`})),t=r(D.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[i(e=>A().content.cloneNode(!0).firstChild),i(e=>j().content.cloneNode(!0).firstChild)]}));return r(D,()=>({className:`mb-32`,children:[e,t]}))})()),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`})),W.insertBefore(xe,U);let Se=f(K);y(Se,k,()=>({title:`Positions`,tab:t.positions,preview:h(()=>e(e=>{let t=se().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[2].childNodes[0],u=l.parentNode;return w(()=>{let e=r(D.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:`Start`})),t=r(D.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[i(Object.assign(e=>{let t=d(`li`,e),n=d(`button`,t);return g(t,n),g(n,a(`Item 1`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i(Object.assign(e=>{let t=d(`li`,e),n=d(`button`,t);return g(t,n),g(n,a(`Item 2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),s=r(D,()=>({align:`start`,children:[e,t]}));p(()=>x(s,o,n))}),w(()=>{let e=r(D.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:`Top Center`})),t=r(D.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[i(Object.assign(e=>{let t=d(`li`,e),n=d(`button`,t);return g(t,n),g(n,a(`Item 1`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i(Object.assign(e=>{let t=d(`li`,e),n=d(`button`,t);return g(t,n),g(n,a(`Item 2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),n=r(D,()=>({align:`center`,direction:`top`,children:[e,t]}));p(()=>x(n,c,s))}),w(()=>{let e=r(D.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:`Left End`})),t=r(D.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[i(Object.assign(e=>{let t=d(`li`,e),n=d(`button`,t);return g(t,n),g(n,a(`Item 1`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),i(Object.assign(e=>{let t=d(`li`,e),n=d(`button`,t);return g(t,n),g(n,a(`Item 2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]})),n=r(D,()=>({direction:`left`,align:`end`,children:[e,t]}));p(()=>x(n,u,l))}),t})),code:`<Dropdown align="start">
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
</Dropdown>`})),K.insertBefore(Se,G);let Ce=f(J);y(Ce,k,()=>({title:`Dropdown hover and force open`,tab:t.modifiers,preview:h(()=>(()=>{let e=r(D.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:[i(e=>A().content.cloneNode(!0).firstChild),i(e=>j().content.cloneNode(!0).firstChild)]}));return r(D,()=>({hover:!0,forceOpen:!0,children:[i(e=>ce().content.cloneNode(!0).firstChild),e]}))})()),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`})),J.insertBefore(Ce,q);let we=f(X);y(we,P,()=>({rows:de})),X.insertBefore(we,Y);let $=f(me);return y($,P,()=>({rows:fe})),me.insertBefore($,Z),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})))})),e=>u(()=>{})))};export{F as default};