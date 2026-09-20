import{B as e,Bt as t,F as n,G as r,I as i,J as a,P as o,Qt as s,V as c,Vt as l,W as u,Wt as d,en as f,f as p,fn as m,g as h,gn as g,hn as _,m as v,mn as y,mt as b,nt as x,q as S,yn as C,z as w,zt as T}from"./rue-runtime-BWbIfNT8.js";import{t as E}from"./dropdown-B_agEiAo.js";import{r as D}from"./SidebarPlaygroundDesign-DS4naa5t.js";import{t as O}from"./PreviewBlock-CEz3T383.js";var ee=C(`<div class="w-72"><div class="border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary">Quick panel</div><!--rue:text-hole:0--><div class="flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3"><button class="btn btn-ghost btn-sm">Later</button><button class="btn btn-primary btn-sm">Publish</button></div></div>`),te=C(`<div class="not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ne=C(`<div class="not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]"><div class="rounded-box border border-base-300 bg-base-100/70 p-6"><div class="flex flex-wrap gap-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm"><div>单选：<!--rue:text-hole:2--></div><div class="mt-2">多选：<!--rue:text-hole:3--></div><p class="mt-3 text-base-content/70">这类筛选面板通常会把 <code>closeOnClick</code> 设为 <code>false</code> ，让用户连续选择。</p></div></div>`),re=C(`<div class="not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ie=C(`<div class="not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ae=C(`<summary class="btn m-1">open or close</summary>`),k=C(`<li><button>Item 1</button></li>`),A=C(`<li><button>Item 2</button></li>`),j=C(`<div class="flex items-start gap-4"><button class="btn" popovertarget="dropdown-popover-1">Button</button><!--rue:opaque-hole:0--></div>`),oe=C(`<div class="grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]"><div class="flex min-h-28 items-start justify-start"><!--rue:opaque-hole:0--></div><div class="flex min-h-28 items-end justify-center"><!--rue:opaque-hole:1--></div><div class="flex min-h-28 min-w-80 items-end justify-end sm:ps-56" data-testid="dropdown-position-left-end-slot"><!--rue:opaque-hole:2--></div></div>`),se=C(`<div tabIndex="0" role="button" class="btn m-1">Always visible</div>`),M=C(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),N=C(`<div class="not-prose rounded-box border border-base-300 bg-base-100/70 p-6"><div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">用单个触发器演示受控模式，按钮文本和状态说明都跟随 <code>open</code> 变化。</span></div><div class="mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div class="text-sm font-medium">受控状态面板</div><div class="grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4"><div class="flex items-center justify-between gap-3 sm:min-w-[11rem]"><span class="text-xs uppercase tracking-wide text-base-content/60">当前状态</span><span class="badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide" data-testid="dropdown-controlled-state"><!--rue:text-hole:1--></span></div><div class="flex items-center justify-between gap-3 sm:min-w-[11rem]"><span class="text-sm text-base-content/60">最近来源</span><span class="badge badge-outline min-w-[5.5rem] justify-center font-normal" data-testid="dropdown-controlled-source"><!--rue:text-hole:2--></span></div></div></div></div></div>`),ce=C(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Dropdown 下拉菜单</h1><p class="text-sm mt-3 mb-3">Rue 的 Dropdown 现在同时支持两条路径：一条是保持当前视觉风格与 daisyUI 原生结构的写法；另一条是更贴近业务组件习惯的语义 API，直接支持 <code>menu / items</code>、 <code>trigger</code>、<code>placement</code>、<code>open</code>、<code>popupRender</code> 和右键菜单。</p><div class="not-prose mt-6 grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-primary">推荐写法</div><div class="mt-2 text-sm font-medium">用 menu / items 描述命令菜单</div><p class="mt-2 text-sm opacity-70">更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-secondary">daisyUI 自由组合写法</div><div class="mt-2 text-sm font-medium">自由组合写法可用</div><p class="mt-2 text-sm opacity-70"><code>details</code>、<code>popover</code>、<code>focus</code>、位置类和 modifier 都没有删除。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-accent">交互补充</div><div class="mt-2 text-sm font-medium">受控、右键、可选中、自定义面板</div><p class="mt-2 text-sm opacity-70">适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。</p></div></div><h2>何时使用</h2><ul><li>需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。</li><li>适合使用 Rue 当前 dropdown 视觉风格，同时使用更完整的菜单 API。</li><li>既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。</li></ul><h2>推荐语义 API</h2><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>支持原生结构</h2><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><br><h2 id="dropdown-api">API</h2><!--rue:opaque-hole:10--><h3 class="mt-8">menu 扩展</h3><!--rue:opaque-hole:11--><h2>FAQ</h2><ul><li>想做业务菜单、用户菜单、右键菜单时，优先用 <code>menu</code> 或 <code>items</code>。</li><li>想保持完全原生的 HTML 结构时，可以使用 <code>Dropdown.Trigger</code> + <code>Dropdown.Content</code>，或直接写 details / summary。</li><li>需要筛选面板、多选菜单时，通常把 <code>closeOnClick</code> 设为 <code>false</code> ，并配合 <code>menu.selectable</code>。</li><li>需要在面板里追加说明、底部操作区或二次确认按钮时，使用 <code>popupRender</code> 包住基础内容。</li></ul></div>`),P=(t,n,o)=>{let s=u(w(t,`rows`));return i(r(e=>{let t=M().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,i=C(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return a(()=>{let e=s.get()||[];o=h(r,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,a;return v(e=>{let t=i().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=g(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=g(``);l.insertBefore(h,c),l.removeChild(c);let _=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=_;let v=g(``);d.insertBefore(v,u),d.removeChild(u);let y=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return v.textContent=y,a=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(h.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},[t,t]},(n,i)=>{e=n,t=i,r=n,a()},void 0,n)},!1,!0)}),S(()=>p(o)),[t,t]}),e=>f(()=>{s.set(e.rows)}),()=>e(t))},le=(e,n,i)=>{let a=b(!1),c=b(`trigger`);return x(()=>r(e=>{let n=N().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,u=n.childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],f=u.parentNode,p=n.childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],h=p.parentNode,v=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`click`,open:a.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{a.value=e,c.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:(e,t,n)=>{let r=()=>d(e=>{let t=y(),n=_(`button`,t);m(t,n),n.setAttribute(`type`,`button`),n.setAttribute(`class`,`btn btn-primary`),n.setAttribute(`data-testid`,`dropdown-controlled-trigger`);let r=g(``);m(n,r),s(r,()=>a.value?`关闭菜单`:`打开菜单`);let i=g(``),o=g(``);return t.insertBefore(i,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},b=r.nextSibling;i.removeChild(r),t({parent:i,before:b},()=>v,()=>({}));let x=g(``);f.insertBefore(x,u),f.removeChild(u),s(x,()=>a.value?`open`:`closed`);let S=g(``);return h.insertBefore(S,p),h.removeChild(p),s(S,()=>c.value),[n,n]}))},F=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认使用 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`使用 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`基础 daisyUI 风格能力展示，适合原生结构或静态布局演示。`,type:`扩展属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`基础的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],I=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保持默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],L=(e,i,a)=>{let s={recommended:b(`preview`),controlled:b(`preview`),selectable:b(`preview`),custom:b(`preview`),contextMenu:b(`preview`),details:b(`preview`),popover:b(`preview`),focus:b(`preview`),positions:b(`preview`),modifiers:b(`preview`)},u=b([`overview`]),f=b([`mentions`,`comment`]),p=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:c(e=>{let t=_(`span`,e);return t.setAttribute(`class`,`badge badge-primary badge-xs`),m(t,g(`Live`)),[t,t]})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],h=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return x(()=>o(D,()=>({children:(e,i,a)=>{let v=()=>d(e=>{let i=y(),a=ce().content.cloneNode(!0),v=a.firstChild,b=v.childNodes[6],x=b.parentNode,S=v.childNodes[7],C=S.parentNode,w=v.childNodes[8],D=w.parentNode,M=v.childNodes[9],N=M.parentNode,L=v.childNodes[10],R=L.parentNode,z=v.childNodes[12],B=z.parentNode,V=v.childNodes[13],H=V.parentNode,U=v.childNodes[14],W=U.parentNode,G=v.childNodes[15],K=G.parentNode,q=v.childNodes[16],J=q.parentNode,Y=v.childNodes[19],X=Y.parentNode,Z=v.childNodes[21],Q=Z.parentNode;i.appendChild(a);let ue=(e,n,i)=>{let a=()=>o(O,()=>({title:`推荐：命令菜单`,tab:s.recommended,preview:()=>r(e=>{let n=te().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`click`,placement:`bottomLeft`,arrow:!0,items:p,"data-testid":`dropdown-recommended`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y(),n=_(`button`,t);m(t,n),n.setAttribute(`class`,`btn btn-primary`),m(n,g(`Workspace`));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},s=r.nextSibling;return i.removeChild(r),t({parent:i,before:s},()=>a,()=>({})),[n,n]}),code:`const items = [
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
</Dropdown>`}));return e==null?a():l(e,i,a)},de=b.nextSibling;x.removeChild(b),t({parent:x,before:de},()=>ue,()=>({}));let fe=(e,t,n)=>{let r=()=>o(O,()=>({title:`受控开关与来源`,tab:s.controlled,preview:(e,t,n)=>{let r=()=>o(le,()=>({}));return e==null?r():l(e,n,r)},code:`const open = ref(false);
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
</Dropdown>`}));return e==null?r():l(e,n,r)},pe=S.nextSibling;C.removeChild(S),t({parent:C,before:pe},()=>fe,()=>({}));let me=(e,n,i)=>{let a=()=>o(O,()=>({title:`可选中筛选菜单`,tab:s.selectable,preview:()=>r(e=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0],i=r.parentNode,a=n.childNodes[0].childNodes[0].childNodes[1],s=a.parentNode,d=n.childNodes[1].childNodes[0].childNodes[1],p=d.parentNode,v=n.childNodes[1].childNodes[1].childNodes[1],b=v.parentNode,x=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:u.value,onSelect:e=>{u.value=e.selectedKeys},items:h},children:(e,t,n)=>{let r=()=>c(e=>{let t=y(),n=_(`button`,t);m(t,n),n.setAttribute(`class`,`btn`),m(n,g(`Single Select`));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},S=r.nextSibling;i.removeChild(r),t({parent:i,before:S},()=>x,()=>({}));let C=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:f.value,onSelect:e=>{f.value=e.selectedKeys},onDeselect:e=>{f.value=e.selectedKeys},items:h},children:(e,t,n)=>{let r=()=>c(e=>{let t=y(),n=_(`button`,t);m(t,n),n.setAttribute(`class`,`btn btn-outline`),m(n,g(`Multiple Filters`));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},w=a.nextSibling;return s.removeChild(a),t({parent:s,before:w},()=>C,()=>({})),t({parent:p,before:d},()=>T(u.value.join(`, `)||`未选中`),()=>({})),t({parent:b,before:v},()=>T(f.value.join(`, `)||`未选中`),()=>({})),[n,n]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`}));return e==null?a():l(e,i,a)},he=w.nextSibling;D.removeChild(w),t({parent:D,before:he},()=>me,()=>({}));let ge=(e,n,i)=>{let a=()=>o(O,()=>({title:`自定义面板包装`,tab:s.custom,preview:()=>r(e=>{let n=re().content.cloneNode(!0).firstChild,i=n.childNodes[0],a=i.parentNode,s=(e,n,i)=>{let a=()=>o(E,()=>({trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:(e,t,n)=>{let r=()=>c(e=>{let t=_(`div`,e);t.setAttribute(`class`,`p-4`);let n=_(`div`,t);m(t,n),n.setAttribute(`class`,`text-sm font-medium`),m(n,g(`Editor shortcuts`));let r=_(`div`,t);return m(t,r),r.setAttribute(`class`,`mt-2 text-sm text-base-content/70`),m(r,g(`Publish, share and manage visibility in one place.`)),[t,t]});return e==null?r():l(e,n,r)},popupRender:e=>r(n=>{let r=ee().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=i.parentNode;return t({parent:a,before:i},()=>T(e),()=>({})),[r,r]}),children:(e,t,n)=>{let r=()=>c(e=>{let t=y(),n=_(`button`,t);m(t,n),n.setAttribute(`class`,`btn btn-secondary`),m(n,g(`Quick Panel`));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?a():l(e,i,a)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>s,()=>({})),[n,n]}),code:`<Dropdown
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
</Dropdown>`}));return e==null?a():l(e,i,a)},_e=M.nextSibling;N.removeChild(M),t({parent:N,before:_e},()=>ge,()=>({}));let ve=(e,n,i)=>{let a=()=>o(O,()=>({title:`右键上下文菜单`,tab:s.contextMenu,preview:()=>r(e=>{let n=ie().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:(e,t,n)=>{let r=()=>c(e=>{let t=y(),n=_(`div`,t);m(t,n),n.setAttribute(`class`,`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`),m(n,g(`在这个区域右键，打开上下文菜单`));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},s=r.nextSibling;return i.removeChild(r),t({parent:i,before:s},()=>a,()=>({})),[n,n]}),code:`<Dropdown
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
</Dropdown>`}));return e==null?a():l(e,i,a)},ye=L.nextSibling;R.removeChild(L),t({parent:R,before:ye},()=>ve,()=>({}));let be=(e,t,r)=>{let i=()=>o(O,()=>({title:`Dropdown using details and summary`,tab:s.details,preview:()=>o(E,()=>({as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:(e,t,r)=>{let i=()=>d(e=>{let t=y();t.appendChild(ae().content.cloneNode(!0)),n(t,E.Content,()=>({as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y();t.appendChild(k().content.cloneNode(!0)),t.appendChild(A().content.cloneNode(!0));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}})),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`}));return e==null?i():l(e,r,i)},xe=z.nextSibling;B.removeChild(z),t({parent:B,before:xe},()=>be,()=>({}));let Se=(e,n,i)=>{let a=()=>o(O,()=>({title:`Dropdown using popover API`,tab:s.popover,preview:()=>r(e=>{let n=j().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1],a=i.parentNode;r.setAttribute(`class`,`btn`),r.setAttribute(`popovertarget`,`dropdown-popover-1`),Object.assign(r.style,{anchorName:`--dropdown-anchor-1`});let s=(e,t,n)=>{let r=()=>o(E,()=>({as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:(e,t,n)=>{let r=()=>c(e=>{let t=y(),n=_(`li`,t);m(t,n);let r=_(`button`,n);m(n,r),m(r,g(`Item 1`));let i=_(`li`,t);m(t,i);let a=_(`button`,i);m(i,a),m(a,g(`Item 2`));let o=g(``),s=g(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>s,()=>({})),[n,n]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`}));return e==null?a():l(e,i,a)},Ce=V.nextSibling;H.removeChild(V),t({parent:H,before:Ce},()=>Se,()=>({}));let $=(e,t,r)=>{let i=()=>o(O,()=>({title:`Dropdown menu`,tab:s.focus,preview:()=>o(E,()=>({className:`mb-32`,children:(e,t,r)=>{let i=()=>d(e=>{let t=y();n(t,E.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y();m(t,g(`Click to open`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(t,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y();t.appendChild(k().content.cloneNode(!0)),t.appendChild(A().content.cloneNode(!0));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}})),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`}));return e==null?i():l(e,r,i)},we=U.nextSibling;W.removeChild(U),t({parent:W,before:we},()=>$,()=>({}));let Te=(e,i,a)=>{let u=()=>o(O,()=>({title:`Positions`,tab:s.positions,preview:()=>r(e=>{let r=oe().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,s=r.childNodes[1].childNodes[0],u=s.parentNode,f=r.childNodes[2].childNodes[0],p=f.parentNode,h=(e,t,r)=>{let i=()=>o(E,()=>({align:`start`,children:(e,t,r)=>{let i=()=>d(e=>{let t=y();n(t,E.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y();m(t,g(`Start`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(t,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y(),n=_(`li`,t);m(t,n);let r=_(`button`,n);m(n,r),m(r,g(`Item 1`));let i=_(`li`,t);m(t,i);let a=_(`button`,i);m(i,a),m(a,g(`Item 2`));let o=g(``),s=g(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},v=i.nextSibling;a.removeChild(i),t({parent:a,before:v},()=>h,()=>({}));let b=(e,t,r)=>{let i=()=>o(E,()=>({align:`center`,direction:`top`,children:(e,t,r)=>{let i=()=>d(e=>{let t=y();n(t,E.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y();m(t,g(`Top Center`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(t,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y(),n=_(`li`,t);m(t,n);let r=_(`button`,n);m(n,r),m(r,g(`Item 1`));let i=_(`li`,t);m(t,i);let a=_(`button`,i);m(i,a),m(a,g(`Item 2`));let o=g(``),s=g(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},x=s.nextSibling;u.removeChild(s),t({parent:u,before:x},()=>b,()=>({}));let S=(e,t,r)=>{let i=()=>o(E,()=>({direction:`left`,align:`end`,children:(e,t,r)=>{let i=()=>d(e=>{let t=y();n(t,E.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y();m(t,g(`Left End`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(t,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y(),n=_(`li`,t);m(t,n);let r=_(`button`,n);m(n,r),m(r,g(`Item 1`));let i=_(`li`,t);m(t,i);let a=_(`button`,i);m(i,a),m(a,g(`Item 2`));let o=g(``),s=g(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},C=f.nextSibling;return p.removeChild(f),t({parent:p,before:C},()=>S,()=>({})),[r,r]}),code:`<Dropdown align="start">
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
</Dropdown>`}));return e==null?u():l(e,a,u)},Ee=G.nextSibling;K.removeChild(G),t({parent:K,before:Ee},()=>Te,()=>({}));let De=(e,t,r)=>{let i=()=>o(O,()=>({title:`Dropdown hover and force open`,tab:s.modifiers,preview:()=>o(E,()=>({hover:!0,forceOpen:!0,children:(e,t,r)=>{let i=()=>d(e=>{let t=y();t.appendChild(se().content.cloneNode(!0)),n(t,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>c(e=>{let t=y();t.appendChild(k().content.cloneNode(!0)),t.appendChild(A().content.cloneNode(!0));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}})),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`}));return e==null?i():l(e,r,i)},Oe=q.nextSibling;J.removeChild(q),t({parent:J,before:Oe},()=>De,()=>({}));let ke=(e,t,n)=>{let r=()=>o(P,()=>({rows:F}));return e==null?r():l(e,n,r)},Ae=Y.nextSibling;X.removeChild(Y),t({parent:X,before:Ae},()=>ke,()=>({}));let je=(e,t,n)=>{let r=()=>o(P,()=>({rows:I}));return e==null?r():l(e,n,r)},Me=Z.nextSibling;Q.removeChild(Z),t({parent:Q,before:Me},()=>je,()=>({}));let Ne=g(``),Pe=g(``);return i.insertBefore(Ne,i.firstChild),i.appendChild(Pe),[i.firstChild,i.lastChild]});return e==null?v():l(e,a,v)}})))};export{L as default};