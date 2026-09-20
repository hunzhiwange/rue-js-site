import{Bt as e,H as t,N as n,P as r,Qt as i,U as a,V as o,Vt as s,Wt as c,Y as l,_t as u,en as d,f,fn as p,g as m,gn as h,gt as g,hn as _,j as v,m as y,mn as b,st as x,vt as S,yn as C,yt as w,zt as T}from"./rue-runtime-Cv6BZekS.js";import{t as E}from"./dropdown-iNF98Oz4.js";import{r as D}from"./SidebarPlaygroundDesign-CoDFHXQl.js";import{t as O}from"./PreviewBlock-CeK_jzYH.js";var ee=C(`<div class="w-72"><div class="border-b border-base-300 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-primary">Quick panel</div><!--rue:text-hole:0--><div class="flex items-center justify-end gap-2 border-t border-base-300 px-4 py-3"><button class="btn btn-ghost btn-sm">Later</button><button class="btn btn-primary btn-sm">Publish</button></div></div>`),te=C(`<div class="not-prose flex min-h-56 items-start justify-start rounded-box border border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ne=C(`<div class="not-prose grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]"><div class="rounded-box border border-base-300 bg-base-100/70 p-6"><div class="flex flex-wrap gap-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm text-sm"><div>单选：<!--rue:text-hole:2--></div><div class="mt-2">多选：<!--rue:text-hole:3--></div><p class="mt-3 text-base-content/70">这类筛选面板通常会把 <code>closeOnClick</code> 设为 <code>false</code> ，让用户连续选择。</p></div></div>`),re=C(`<div class="not-prose flex min-h-64 items-start rounded-box border border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ie=C(`<div class="not-prose rounded-box border border-dashed border-base-300 bg-base-100/70 p-6"><!--rue:opaque-hole:0--></div>`),ae=C(`<summary class="btn m-1">open or close</summary>`),k=C(`<li><button>Item 1</button></li>`),A=C(`<li><button>Item 2</button></li>`),j=C(`<div class="flex items-start gap-4"><button class="btn" popovertarget="dropdown-popover-1">Button</button><!--rue:opaque-hole:0--></div>`),oe=C(`<div class="grid gap-x-16 gap-y-24 py-24 md:grid-cols-2 xl:grid-cols-[minmax(10rem,1fr)_minmax(12rem,1fr)_minmax(20rem,1.2fr)]"><div class="flex min-h-28 items-start justify-start"><!--rue:opaque-hole:0--></div><div class="flex min-h-28 items-end justify-center"><!--rue:opaque-hole:1--></div><div class="flex min-h-28 min-w-80 items-end justify-end sm:ps-56" data-testid="dropdown-position-left-end-slot"><!--rue:opaque-hole:2--></div></div>`),se=C(`<div tabIndex="0" role="button" class="btn m-1">Always visible</div>`),M=C(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),N=C(`<div class="not-prose rounded-box border border-base-300 bg-base-100/70 p-6"><div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">用单个触发器演示受控模式，按钮文本和状态说明都跟随 <code>open</code> 变化。</span></div><div class="mt-4 rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div class="text-sm font-medium">受控状态面板</div><div class="grid gap-2 sm:grid-flow-col sm:items-center sm:justify-end sm:gap-4"><div class="flex items-center justify-between gap-3 sm:min-w-[11rem]"><span class="text-xs uppercase tracking-wide text-base-content/60">当前状态</span><span class="badge badge-soft badge-primary min-w-[5.5rem] justify-center uppercase tracking-wide" data-testid="dropdown-controlled-state"><!--rue:text-hole:1--></span></div><div class="flex items-center justify-between gap-3 sm:min-w-[11rem]"><span class="text-sm text-base-content/60">最近来源</span><span class="badge badge-outline min-w-[5.5rem] justify-center font-normal" data-testid="dropdown-controlled-source"><!--rue:text-hole:2--></span></div></div></div></div></div>`),ce=C(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Dropdown 下拉菜单</h1><p class="text-sm mt-3 mb-3">Rue 的 Dropdown 现在同时支持两条路径：一条是保持当前视觉风格与 daisyUI 原生结构的写法；另一条是更贴近业务组件习惯的语义 API，直接支持 <code>menu / items</code>、 <code>trigger</code>、<code>placement</code>、<code>open</code>、<code>popupRender</code> 和右键菜单。</p><div class="not-prose mt-6 grid gap-4 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-primary">推荐写法</div><div class="mt-2 text-sm font-medium">用 menu / items 描述命令菜单</div><p class="mt-2 text-sm opacity-70">更适合操作菜单、用户菜单、列表行操作和上下文菜单，不必再手写浮层结构。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-secondary">daisyUI 自由组合写法</div><div class="mt-2 text-sm font-medium">自由组合写法可用</div><p class="mt-2 text-sm opacity-70"><code>details</code>、<code>popover</code>、<code>focus</code>、位置类和 modifier 都没有删除。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="text-xs font-semibold uppercase tracking-wide text-accent">交互补充</div><div class="mt-2 text-sm font-medium">受控、右键、可选中、自定义面板</div><p class="mt-2 text-sm opacity-70">适合业务菜单、筛选菜单、带说明区的弹层菜单，以及需要区分关闭来源的场景。</p></div></div><h2>何时使用</h2><ul><li>需要一个轻量命令面板，把 3 到 8 个动作收纳到按钮、头像或行内入口后面。</li><li>适合使用 Rue 当前 dropdown 视觉风格，同时使用更完整的菜单 API。</li><li>既要支持原生 HTML 结构，也要支持数据驱动菜单、受控状态和右键上下文菜单。</li></ul><h2>推荐语义 API</h2><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>支持原生结构</h2><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><br><h2 id="dropdown-api">API</h2><!--rue:opaque-hole:10--><h3 class="mt-8">menu 扩展</h3><!--rue:opaque-hole:11--><h2>FAQ</h2><ul><li>想做业务菜单、用户菜单、右键菜单时，优先用 <code>menu</code> 或 <code>items</code>。</li><li>想保持完全原生的 HTML 结构时，可以使用 <code>Dropdown.Trigger</code> + <code>Dropdown.Content</code>，或直接写 details / summary。</li><li>需要筛选面板、多选菜单时，通常把 <code>closeOnClick</code> 设为 <code>false</code> ，并配合 <code>menu.selectable</code>。</li><li>需要在面板里追加说明、底部操作区或二次确认按钮时，使用 <code>popupRender</code> 包住基础内容。</li></ul></div>`),P=(e,t,i)=>{let o=S(g(e,`rows`));return a(v(e=>{let t=M().content.cloneNode(!0).firstChild,i=t.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,s=C(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),c=[];return r(()=>{let e=o.get()||[];c=m(a,i,c,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return y(e=>{let t=s().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,o=t.childNodes[1].childNodes[0];o.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=h(``);a.insertBefore(f,n),a.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);o.textContent=m;let g=h(``);l.insertBefore(g,c),l.removeChild(c);let _=r.type==null||typeof r.type==`boolean`?``:String(r.type);g.textContent=_;let v=h(``);d.insertBefore(v,u),d.removeChild(u);let y=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return v.textContent=y,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(o.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),n(()=>f(c)),[t,t]}),e=>d(()=>{o.set(e.rows)}),()=>u(e))},le=(t,n,r)=>{let a=x(!1),u=x(`trigger`);return l(()=>v(t=>{let n=N().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],l=r.parentNode,d=n.childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],f=d.parentNode,m=n.childNodes[1].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],g=m.parentNode,v=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`click`,open:a.value,overlayClassName:`animate-none transition-none`,onOpenChange:(e,t)=>{a.value=e,u.value=t.source},menu:{items:[{key:`pin`,label:`Pin to top`},{key:`mute`,label:`Mute notifications`},{type:`divider`},{key:`remove`,label:`Remove workspace`,danger:!0}]},children:(e,t,n)=>{let r=()=>c(e=>{let t=b(),n=_(`button`,t);p(t,n),n.setAttribute(`type`,`button`),n.setAttribute(`class`,`btn btn-primary`),n.setAttribute(`data-testid`,`dropdown-controlled-trigger`);let r=h(``);p(n,r),i(r,()=>a.value?`关闭菜单`:`打开菜单`);let o=h(``),s=h(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},y=r.nextSibling;l.removeChild(r),e({parent:l,before:y},()=>v,()=>({}));let x=h(``);f.insertBefore(x,d),f.removeChild(d),i(x,()=>a.value?`open`:`closed`);let S=h(``);return g.insertBefore(S,m),g.removeChild(m),i(S,()=>u.value),[n,n]}))},F=[{prop:`menu / items`,description:`推荐的数据驱动入口。直接渲染命令菜单，支持 divider、group、submenu、selectable 等能力。`,type:`DropdownMenuProps / MenuDataEntry[]`,defaultValue:`-`},{prop:`trigger`,description:`控制打开方式，支持 hover、click、contextMenu；默认使用 hover。`,type:`'hover' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控显隐；回调会额外返回 source，便于区分 trigger、menu、outside、escape。`,type:`boolean / boolean / (open, info) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`语义化定位别名，内部映射到 Rue 当前的 align + direction 组合。`,type:`'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | ...`,defaultValue:`'bottomLeft'`},{prop:`overlay / content / popupRender`,description:`自定义面板内容或在原面板外层追加头部、底部、快捷操作区。`,type:`any / any / (originNode) => any`,defaultValue:`-`},{prop:`arrow / overlayClassName / overlayStyle`,description:`使用 Rue 当前视觉基底，同时提供箭头与面板层定制。`,type:`boolean / string / style object`,defaultValue:`false / - / -`},{prop:`align / direction / hover / forceOpen / forceClose`,description:`基础 daisyUI 风格能力展示，适合原生结构或静态布局演示。`,type:`扩展属性`,defaultValue:`-`},{prop:`children + Dropdown.Trigger / Dropdown.Content`,description:`基础的 compound 结构继续可用；当你不想走数据驱动时，仍可手写原生内容。`,type:`any`,defaultValue:`-`}],I=[{prop:`menu.items`,description:`菜单项数组，复用 Rue Menu 的 item / divider / group / submenu 数据结构。`,type:`MenuDataEntry[]`,defaultValue:`[]`},{prop:`menu.selectable / multiple / selectedKeys`,description:`用于做筛选面板、视图切换、状态菜单等可选中场景。`,type:`boolean / boolean / MenuKey[]`,defaultValue:`false / false / -`},{prop:`menu.onClick / onSelect / onOpenChange`,description:`菜单项点击、选中和子菜单展开都复用 Menu 的回调结构。`,type:`Menu callbacks`,defaultValue:`-`},{prop:`menu.triggerSubMenuAction`,description:`增强命令菜单默认点击展开和折叠子菜单；需要悬浮展开时可显式设为 hover。`,type:`'click' | 'hover'`,defaultValue:`'click'`},{prop:`closeOnClick`,description:`点击菜单项后是否自动关闭；命令菜单推荐保持默认 true，筛选面板常见设为 false。`,type:`boolean`,defaultValue:`true`}],L=(n,r,i)=>{let a={recommended:x(`preview`),controlled:x(`preview`),selectable:x(`preview`),custom:x(`preview`),contextMenu:x(`preview`),details:x(`preview`),popover:x(`preview`),focus:x(`preview`),positions:x(`preview`),modifiers:x(`preview`)},u=x([`overview`]),d=x([`mentions`,`comment`]),f=[{type:`group`,label:`Workspace`,children:[{key:`overview`,label:`Overview`,extra:w(e=>{let t=_(`span`,e);return t.setAttribute(`class`,`badge badge-primary badge-xs`),p(t,h(`Live`)),[t,t]})},{key:`activity`,label:`Activity Feed`}]},{type:`submenu`,key:`publish`,label:`Publish`,children:[{key:`draft`,label:`Save Draft`},{key:`review`,label:`Send For Review`},{key:`live`,label:`Publish Now`,danger:!0}]},{type:`divider`},{key:`archive`,label:`Archive Space`}],m=[{key:`overview`,label:`Overview`},{key:`mentions`,label:`Mentions`},{key:`comment`,label:`Comments`},{key:`watching`,label:`Watching`,disabled:!0}];return l(()=>o(D,()=>({children:(n,r,i)=>{let l=()=>c(n=>{let r=b(),i=ce().content.cloneNode(!0),l=i.firstChild,g=l.childNodes[6],y=g.parentNode,x=l.childNodes[7],S=x.parentNode,C=l.childNodes[8],D=C.parentNode,M=l.childNodes[9],N=M.parentNode,L=l.childNodes[10],R=L.parentNode,z=l.childNodes[12],B=z.parentNode,V=l.childNodes[13],H=V.parentNode,U=l.childNodes[14],W=U.parentNode,G=l.childNodes[15],K=G.parentNode,q=l.childNodes[16],J=q.parentNode,Y=l.childNodes[19],X=Y.parentNode,Z=l.childNodes[21],Q=Z.parentNode;r.appendChild(i);let ue=(t,n,r)=>{let i=()=>o(O,()=>({title:`推荐：命令菜单`,tab:a.recommended,preview:()=>v(t=>{let n=te().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`click`,placement:`bottomLeft`,arrow:!0,items:f,"data-testid":`dropdown-recommended`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b(),n=_(`button`,t);p(t,n),n.setAttribute(`class`,`btn btn-primary`),p(n,h(`Workspace`));let r=h(``),i=h(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},c=r.nextSibling;return i.removeChild(r),e({parent:i,before:c},()=>a,()=>({})),[n,n]}),code:`const items = [
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
</Dropdown>`}));return t==null?i():s(t,r,i)},de=g.nextSibling;y.removeChild(g),e({parent:y,before:de},()=>ue,()=>({}));let fe=(e,t,n)=>{let r=()=>o(O,()=>({title:`受控开关与来源`,tab:a.controlled,preview:(e,t,n)=>{let r=()=>o(le,()=>({}));return e==null?r():s(e,n,r)},code:`const open = ref(false);
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
</Dropdown>`}));return e==null?r():s(e,n,r)},pe=x.nextSibling;S.removeChild(x),e({parent:S,before:pe},()=>fe,()=>({}));let me=(t,n,r)=>{let i=()=>o(O,()=>({title:`可选中筛选菜单`,tab:a.selectable,preview:()=>v(t=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0],i=r.parentNode,a=n.childNodes[0].childNodes[0].childNodes[1],c=a.parentNode,l=n.childNodes[1].childNodes[0].childNodes[1],f=l.parentNode,g=n.childNodes[1].childNodes[1].childNodes[1],v=g.parentNode,y=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`click`,closeOnClick:!1,menu:{selectable:!0,selectedKeys:u.value,onSelect:e=>{u.value=e.selectedKeys},items:m},children:(e,t,n)=>{let r=()=>w(e=>{let t=b(),n=_(`button`,t);p(t,n),n.setAttribute(`class`,`btn`),p(n,h(`Single Select`));let r=h(``),i=h(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},x=r.nextSibling;i.removeChild(r),e({parent:i,before:x},()=>y,()=>({}));let S=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`click`,closeOnClick:!1,menu:{selectable:!0,multiple:!0,selectedKeys:d.value,onSelect:e=>{d.value=e.selectedKeys},onDeselect:e=>{d.value=e.selectedKeys},items:m},children:(e,t,n)=>{let r=()=>w(e=>{let t=b(),n=_(`button`,t);p(t,n),n.setAttribute(`class`,`btn btn-outline`),p(n,h(`Multiple Filters`));let r=h(``),i=h(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},C=a.nextSibling;return c.removeChild(a),e({parent:c,before:C},()=>S,()=>({})),e({parent:f,before:l},()=>T(u.value.join(`, `)||`未选中`),()=>({})),e({parent:v,before:g},()=>T(d.value.join(`, `)||`未选中`),()=>({})),[n,n]}),code:`const selectedKeys = ref(['overview']);
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
</Dropdown>`}));return t==null?i():s(t,r,i)},he=C.nextSibling;D.removeChild(C),e({parent:D,before:he},()=>me,()=>({}));let ge=(t,n,r)=>{let i=()=>o(O,()=>({title:`自定义面板包装`,tab:a.custom,preview:()=>v(t=>{let n=re().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(t,n,r)=>{let i=()=>o(E,()=>({trigger:`click`,placement:`bottomRight`,arrow:!0,overlay:(e,t,n)=>{let r=()=>w(e=>{let t=_(`div`,e);t.setAttribute(`class`,`p-4`);let n=_(`div`,t);p(t,n),n.setAttribute(`class`,`text-sm font-medium`),p(n,h(`Editor shortcuts`));let r=_(`div`,t);return p(t,r),r.setAttribute(`class`,`mt-2 text-sm text-base-content/70`),p(r,h(`Publish, share and manage visibility in one place.`)),[t,t]});return e==null?r():s(e,n,r)},popupRender:t=>v(n=>{let r=ee().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=i.parentNode;return e({parent:a,before:i},()=>T(t),()=>({})),[r,r]}),children:(e,t,n)=>{let r=()=>w(e=>{let t=b(),n=_(`button`,t);p(t,n),n.setAttribute(`class`,`btn btn-secondary`),p(n,h(`Quick Panel`));let r=h(``),i=h(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return t==null?i():s(t,r,i)},c=r.nextSibling;return i.removeChild(r),e({parent:i,before:c},()=>a,()=>({})),[n,n]}),code:`<Dropdown
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
</Dropdown>`}));return t==null?i():s(t,r,i)},_e=M.nextSibling;N.removeChild(M),e({parent:N,before:_e},()=>ge,()=>({}));let ve=(t,n,r)=>{let i=()=>o(O,()=>({title:`右键上下文菜单`,tab:a.contextMenu,preview:()=>v(t=>{let n=ie().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(e,t,n)=>{let r=()=>o(E,()=>({trigger:`contextMenu`,items:[{key:`copy`,label:`Copy link`},{key:`rename`,label:`Rename block`},{type:`divider`},{key:`delete`,label:`Delete block`,danger:!0}],children:(e,t,n)=>{let r=()=>w(e=>{let t=b(),n=_(`div`,t);p(t,n),n.setAttribute(`class`,`flex h-44 items-center justify-center rounded-box bg-base-200 text-sm text-base-content/70`),p(n,h(`在这个区域右键，打开上下文菜单`));let r=h(``),i=h(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},c=r.nextSibling;return i.removeChild(r),e({parent:i,before:c},()=>a,()=>({})),[n,n]}),code:`<Dropdown
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
</Dropdown>`}));return t==null?i():s(t,r,i)},ye=L.nextSibling;R.removeChild(L),e({parent:R,before:ye},()=>ve,()=>({}));let be=(e,n,r)=>{let i=()=>o(O,()=>({title:`Dropdown using details and summary`,tab:a.details,preview:()=>o(E,()=>({as:`details`,className:`mb-32`,"data-testid":`dropdown-details`,children:(e,n,r)=>{let i=()=>c(e=>{let n=b();n.appendChild(ae().content.cloneNode(!0)),t(n,E.Content,()=>({as:`ul`,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b();t.appendChild(k().content.cloneNode(!0)),t.appendChild(A().content.cloneNode(!0));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));let r=h(``),i=h(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}})),code:`<Dropdown as="details" className="mb-32">
  <summary className="btn m-1">open or close</summary>
  <Dropdown.Content as="ul" className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`}));return e==null?i():s(e,r,i)},xe=z.nextSibling;B.removeChild(z),e({parent:B,before:xe},()=>be,()=>({}));let Se=(t,n,r)=>{let i=()=>o(O,()=>({title:`Dropdown using popover API`,tab:a.popover,preview:()=>v(t=>{let n=j().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1],a=i.parentNode;r.setAttribute(`class`,`btn`),r.setAttribute(`popovertarget`,`dropdown-popover-1`),Object.assign(r.style,{anchorName:`--dropdown-anchor-1`});let c=(e,t,n)=>{let r=()=>o(E,()=>({as:`ul`,popover:`auto`,id:`dropdown-popover-1`,className:`menu w-52 rounded-box bg-base-100 shadow-sm`,style:{positionAnchor:`--dropdown-anchor-1`},children:(e,t,n)=>{let r=()=>w(e=>{let t=b(),n=_(`li`,t);p(t,n);let r=_(`button`,n);p(n,r),p(r,h(`Item 1`));let i=_(`li`,t);p(t,i);let a=_(`button`,i);p(i,a),p(a,h(`Item 2`));let o=h(``),s=h(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},l=i.nextSibling;return a.removeChild(i),e({parent:a,before:l},()=>c,()=>({})),[n,n]}),code:`<button className="btn" popovertarget="dropdown-popover-1" style={{ anchorName: '--dropdown-anchor-1' }}>
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
</Dropdown>`}));return t==null?i():s(t,r,i)},Ce=V.nextSibling;H.removeChild(V),e({parent:H,before:Ce},()=>Se,()=>({}));let $=(e,n,r)=>{let i=()=>o(O,()=>({title:`Dropdown menu`,tab:a.focus,preview:()=>o(E,()=>({className:`mb-32`,children:(e,n,r)=>{let i=()=>c(e=>{let n=b();t(n,E.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-focus-trigger`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b();p(t,h(`Click to open`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})),t(n,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b();t.appendChild(k().content.cloneNode(!0)),t.appendChild(A().content.cloneNode(!0));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));let r=h(``),i=h(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}})),code:`<Dropdown className="mb-32">
  <Dropdown.Trigger as="button" type="button" className="btn m-1">
    Click to open
  </Dropdown.Trigger>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`}));return e==null?i():s(e,r,i)},we=U.nextSibling;W.removeChild(U),e({parent:W,before:we},()=>$,()=>({}));let Te=(n,r,i)=>{let l=()=>o(O,()=>({title:`Positions`,tab:a.positions,preview:()=>v(n=>{let r=oe().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,l=r.childNodes[1].childNodes[0],u=l.parentNode,d=r.childNodes[2].childNodes[0],f=d.parentNode,m=(e,n,r)=>{let i=()=>o(E,()=>({align:`start`,children:(e,n,r)=>{let i=()=>c(e=>{let n=b();t(n,E.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-start`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b();p(t,h(`Start`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})),t(n,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b(),n=_(`li`,t);p(t,n);let r=_(`button`,n);p(n,r),p(r,h(`Item 1`));let i=_(`li`,t);p(t,i);let a=_(`button`,i);p(i,a),p(a,h(`Item 2`));let o=h(``),s=h(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));let r=h(``),i=h(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}}));return e==null?i():s(e,r,i)},g=i.nextSibling;a.removeChild(i),e({parent:a,before:g},()=>m,()=>({}));let v=(e,n,r)=>{let i=()=>o(E,()=>({align:`center`,direction:`top`,children:(e,n,r)=>{let i=()=>c(e=>{let n=b();t(n,E.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-top-center`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b();p(t,h(`Top Center`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})),t(n,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b(),n=_(`li`,t);p(t,n);let r=_(`button`,n);p(n,r),p(r,h(`Item 1`));let i=_(`li`,t);p(t,i);let a=_(`button`,i);p(i,a),p(a,h(`Item 2`));let o=h(``),s=h(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));let r=h(``),i=h(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}}));return e==null?i():s(e,r,i)},y=l.nextSibling;u.removeChild(l),e({parent:u,before:y},()=>v,()=>({}));let x=(e,n,r)=>{let i=()=>o(E,()=>({direction:`left`,align:`end`,children:(e,n,r)=>{let i=()=>c(e=>{let n=b();t(n,E.Trigger,()=>({as:`button`,type:`button`,className:`btn m-1`,"data-testid":`dropdown-position-left-end`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b();p(t,h(`Left End`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})),t(n,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b(),n=_(`li`,t);p(t,n);let r=_(`button`,n);p(n,r),p(r,h(`Item 1`));let i=_(`li`,t);p(t,i);let a=_(`button`,i);p(i,a),p(a,h(`Item 2`));let o=h(``),s=h(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));let r=h(``),i=h(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}}));return e==null?i():s(e,r,i)},S=d.nextSibling;return f.removeChild(d),e({parent:f,before:S},()=>x,()=>({})),[r,r]}),code:`<Dropdown align="start">
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
</Dropdown>`}));return n==null?l():s(n,i,l)},Ee=G.nextSibling;K.removeChild(G),e({parent:K,before:Ee},()=>Te,()=>({}));let De=(e,n,r)=>{let i=()=>o(O,()=>({title:`Dropdown hover and force open`,tab:a.modifiers,preview:()=>o(E,()=>({hover:!0,forceOpen:!0,children:(e,n,r)=>{let i=()=>c(e=>{let n=b();n.appendChild(se().content.cloneNode(!0)),t(n,E.Content,()=>({as:`ul`,tabIndex:-1,className:`menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm`,children:(e,t,n)=>{let r=()=>w(e=>{let t=b();t.appendChild(k().content.cloneNode(!0)),t.appendChild(A().content.cloneNode(!0));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));let r=h(``),i=h(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}})),code:`<Dropdown hover forceOpen>
  <div tabIndex={0} role="button" className="btn m-1">Always visible</div>
  <Dropdown.Content as="ul" tabIndex={-1} className="menu z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
    <li><button>Item 1</button></li>
    <li><button>Item 2</button></li>
  </Dropdown.Content>
</Dropdown>`}));return e==null?i():s(e,r,i)},Oe=q.nextSibling;J.removeChild(q),e({parent:J,before:Oe},()=>De,()=>({}));let ke=(e,t,n)=>{let r=()=>o(P,()=>({rows:F}));return e==null?r():s(e,n,r)},Ae=Y.nextSibling;X.removeChild(Y),e({parent:X,before:Ae},()=>ke,()=>({}));let je=(e,t,n)=>{let r=()=>o(P,()=>({rows:I}));return e==null?r():s(e,n,r)},Me=Z.nextSibling;Q.removeChild(Z),e({parent:Q,before:Me},()=>je,()=>({}));let Ne=h(``),Pe=h(``);return r.insertBefore(Ne,r.firstChild),r.appendChild(Pe),[r.firstChild,r.lastChild]});return n==null?l():s(n,i,l)}})))};export{L as default};