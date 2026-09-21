import{B as e,Bt as t,F as n,G as r,I as i,J as a,Jt as o,P as s,V as c,Vt as l,W as u,Wt as d,ct as f,en as p,f as m,fn as h,g,gn as _,hn as v,in as y,m as ee,mn as b,mt as x,nt as S,pn as C,q as w,u as te,yn as T,z as E,zt as D}from"./rue-runtime-BWbIfNT8.js";import{t as O}from"./Code-C5ZhIIr9.js";import{t as k}from"./tabs-rNAY-7C8.js";import{r as A}from"./SidebarPlaygroundDesign-DS4naa5t.js";import{t as j}from"./preview-test-gate-BVbSCGe9.js";var ne=T(`<div class="space-y-4"><div class="grid gap-3 md:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div><div class="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"><div class="rounded-box border border-base-300/70 bg-base-100 p-4"><div class="flex items-center justify-between"><div class="text-sm font-semibold">本周推进节奏</div><span class="badge badge-success badge-sm">On Track</span></div><progress class="progress progress-primary mt-4" value="72" max="100"></progress><div class="mt-3 flex justify-between text-xs opacity-70"><span>设计</span><span>联调</span><span>回归</span><span>发布</span></div></div><div class="rounded-box border border-base-300/70 bg-base-100 p-4"><div class="text-sm font-semibold">Next Step</div><ul class="mt-3 space-y-2 text-sm opacity-75"><li>锁定接口字段命名</li><li>同步埋点事件与告警阈值</li><li>准备灰度发布公告</li></ul></div></div></div>`),re=T(`<div class="grid gap-3 sm:grid-cols-3"><!--rue:text-hole:0--></div>`),ie=T(`<div class="flex gap-2"><button type="button">start</button><button type="button">end</button></div>`),M=T(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),N=T(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:opaque-hole:1--><!--rue:text-hole:2--></div>`),ae=T('<div class="max-w-none prose prose-sm md:prose-base"><h1>Tabs 选项卡</h1><p class="text-sm mt-3 mb-3">Tabs 现在除了使用 Rue 当前的 box / border / lift 视觉，还提供了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。</p><h2>何时使用</h2><ul><li>需要在同一信息区域里切换多个视图、状态面板或设置分组时。</li><li>既想使用 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。</li></ul><div class="not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3"><div class="rounded-box bg-base-200/50 p-3"><div class="font-medium">受控与非受控</div><div class="mt-1 opacity-75">支持 `activeKey`、`defaultActiveKey` 与 `onChange`。</div></div><div class="rounded-box bg-base-200/50 p-3"><div class="font-medium">内容与布局</div><div class="mt-1 opacity-75">支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。</div></div><div class="rounded-box bg-base-200/50 p-3"><div class="font-medium">操作能力</div><div class="mt-1 opacity-75">支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。</div></div></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><!--rue:opaque-hole:11--><!--rue:opaque-hole:12--><!--rue:opaque-hole:13--><h2 id="tabs-api">API</h2><p>Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。</p><!--rue:opaque-hole:14--><div class="not-prose mt-6"></div><!--rue:opaque-hole:15--><div class="not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm"><div class="font-semibold">使用建议</div><div class="mt-2 grid gap-2 md:grid-cols-2"><div><code>activeKey + onChange</code> 适合和路由、筛选条件、外部状态统一联动。</div><div><code>defaultActiveKey</code> 适合静态文档、局部示例 或无需外部接管的轻交互场景。</div><div>复杂标签头优先用 <code>icon</code> + 文本 <code>label</code> 组合，兼顾语义和稳定渲染。</div><div>需要完整内容区域切换时给 <code>items.children</code> 传面板节点；只做导航标签时可以只传 <code>label</code>。</div></div></div><h2>FAQ</h2><h3>activeKey 和 defaultActiveKey 怎么选？</h3><p><code>activeKey</code> 是受控模式，当前激活项由外部状态决定；<code>defaultActiveKey</code> 只设置初始值，后续切换由组件内部维护。</p><h3>style 和 type 会冲突吗？</h3><p><code>type</code> 更偏语义能力，像 <code>card</code>、<code>editable-card</code> 会自动套用适合的视觉； 如果你明确传了 <code>style</code>，就以显式样式为准。</p><h3>placement 和 tabPlacement 有什么区别？</h3><p><code>placement</code> 只覆盖上下位置；<code>tabPlacement</code> 额外支持 <code>start</code> 和<code>end</code> 两种垂直摆放，并且优先级更高。</p><h3>为什么复杂 label 建议拆成 icon 和文本？</h3><p>当前组件会给 <code>label</code> 包一层文本容器。为了避免复杂节点在运行时被串成 <code>[object Object]</code>，推荐把徽标、点状状态这类前缀放到 <code>icon</code> ，把主要文案保持在 <code>label</code>。</p></div>'),P=(n,a,o)=>{let s=u(E(n,`description`)),c=u(E(n,`title`)),l=u(E(n,`value`));return i(r(e=>{let n=v(`div`,e);n.setAttribute(`class`,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let r=v(`div`,n);h(n,r),r.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] opacity-60`);let i=C(`rue:compiled-slot`);h(r,i),t({parent:r,before:i},()=>D(c.get()),()=>({}));let a=v(`div`,n);h(n,a),a.setAttribute(`class`,`mt-2 text-2xl font-semibold`);let o=C(`rue:compiled-slot`);h(a,o),t({parent:a,before:o},()=>D(l.get()),()=>({}));let u=v(`div`,n);h(n,u),u.setAttribute(`class`,`mt-1 text-sm opacity-75`);let d=C(`rue:compiled-slot`);return h(u,d),t({parent:u,before:d},()=>D(s.get()),()=>({})),[n,n]}),e=>p(()=>{s.set(e.description),c.set(e.title),l.set(e.value)}),()=>e(n))},oe=(t,n,o)=>{let s=u(E(t,`rows`));return i(r(e=>{let t=M().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,i=T(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return a(()=>{let e=s.get()||[];o=g(r,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,a;return ee(e=>{let t=i().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=_(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=_(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let v=_(``);d.insertBefore(v,u),d.removeChild(u);let y=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return v.textContent=y,a=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},[t,t]},(n,i)=>{e=n,t=i,r=n,a()},void 0,n)},!1,!0)}),w(()=>m(o)),[t,t]}),e=>p(()=>{s.set(e.rows)}),()=>e(t))},F=(e,n,i)=>{let{tab:a,previewNode:c,__rue_phase2_previewNode:u}=o(`useSetup:0:0`,()=>{let t=x(`preview`),n=f(()=>Array.isArray(E(e,`children`))?E(e,`children`).find(e=>e!=null&&e!==``):E(e,`children`));return n.get(),{tab:t,previewNode:n,__rue_phase2_previewNode:n}});return r(n=>{let r=N().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],o=i.parentNode,u=r.childNodes[1],d=u.parentNode,f=r.childNodes[2],p=f.parentNode;t({parent:o,before:i},()=>D(E(e,`title`)),()=>({}));let m=(e,t,n)=>{let r=()=>s(k,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.value,onChange:e=>a.value=e,className:`mb-3`}));return e==null?r():l(e,n,r)},h=u.nextSibling;return d.removeChild(u),t({parent:d,before:h},()=>m,()=>({})),t({parent:p,before:f},()=>a.value===`preview`?((e,t)=>(n,r,i)=>D(j(e,t))(n,r,i))(E(e,`title`),c.get()):(t,n,r)=>l(t,r,()=>s(O,()=>({className:`mt-2`,lang:`tsx`,code:E(e,`code`)}))),()=>({})),[r,r]})},se=String.raw`<Tabs
  type="line"
  defaultActiveKey="overview"
  destroyOnHidden
  items={[
    {
      key: 'overview',
      label: 'Overview',
      children: (
        <div className="space-y-4">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-box border border-base-300/70 bg-base-200/40 p-4">
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">Velocity</div>
              <div className="mt-2 text-2xl font-semibold">+18%</div>
              <div className="mt-1 text-sm opacity-75">本周交付速度</div>
            </div>
            <div className="rounded-box border border-base-300/70 bg-base-200/40 p-4">
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">QA</div>
              <div className="mt-2 text-2xl font-semibold">7</div>
              <div className="mt-1 text-sm opacity-75">待验证缺陷</div>
            </div>
            <div className="rounded-box border border-base-300/70 bg-base-200/40 p-4">
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">Review</div>
              <div className="mt-2 text-2xl font-semibold">3</div>
              <div className="mt-1 text-sm opacity-75">待合并 PR</div>
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="rounded-box border border-base-300/70 bg-base-100 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">本周推进节奏</div>
                <span className="badge badge-success badge-sm">On Track</span>
              </div>
              <progress className="progress progress-primary mt-4" value="72" max="100" />
              <div className="mt-3 flex justify-between text-xs opacity-70">
                <span>设计</span>
                <span>联调</span>
                <span>回归</span>
                <span>发布</span>
              </div>
            </div>

            <div className="rounded-box border border-base-300/70 bg-base-100 p-4">
              <div className="text-sm font-semibold">Next Step</div>
              <ul className="mt-3 space-y-2 text-sm opacity-75">
                <li>锁定接口字段命名</li>
                <li>同步埋点事件与告警阈值</li>
                <li>准备灰度发布公告</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'activity',
      label: 'Activity',
      children: (
        <div className="space-y-3">
          <ul className="list gap-2">
            <li className="list-row">
              <div className="font-medium">10:15</div>
              <div className="list-col-grow text-sm opacity-75">完成视觉验收，设计 token 已同步。</div>
            </li>
            <li className="list-row">
              <div className="font-medium">14:35</div>
              <div className="list-col-grow text-sm opacity-75">设计评审通过，进入开发联调。</div>
            </li>
            <li className="list-row">
              <div className="font-medium">16:20</div>
              <div className="list-col-grow text-sm opacity-75">补充埋点与告警配置。</div>
            </li>
            <li className="list-row">
              <div className="font-medium">18:40</div>
              <div className="list-col-grow text-sm opacity-75">QA 已预约今晚的回归窗口。</div>
            </li>
          </ul>

          <div role="alert" className="alert alert-soft alert-info text-sm">
            <span>今晚 20:00 进入联调窗口，QA 会同步回归结果。</span>
          </div>
        </div>
      ),
    },
    {
      key: 'members',
      label: 'Members',
      children: (
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: 'UI', owner: 'Lin', note: '组件规格与 token 已冻结' },
            { label: 'FE', owner: 'Kai', note: '交互联调与埋点已完成' },
            { label: 'QA', owner: 'Mio', note: '回归清单与冒烟脚本已准备' },
          ].map(item => (
            <div key={item.label} className="rounded-box border border-base-300/70 bg-base-200/50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{item.label}</div>
                <span className="badge badge-ghost badge-sm">{item.owner}</span>
              </div>
              <div className="mt-2 text-sm opacity-75">{item.note}</div>
            </div>
          ))}
        </div>
      ),
    },
  ]}
/>`,ce=String.raw`const activeKey = ref('overview')

<Tabs
  type="card"
  activeKey={activeKey.value}
  onChange={key => (activeKey.value = key)}
  tabBarExtraContent={{
    left: <span className="badge badge-neutral badge-sm">Workspace</span>,
    right: (
      <button className="btn btn-primary btn-sm" type="button">
        New Milestone
      </button>
    ),
  }}
  items={[
    {
      key: 'overview',
      label: 'Overview',
      children: '版本计划、优先级排序与协作说明统一放在这里。',
    },
    {
      key: 'timeline',
      label: 'Timeline',
      children: '时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。',
    },
    {
      key: 'qa',
      label: 'QA',
      children: '测试结果、风险等级与回归建议。',
    },
  ]}
/>`,le=String.raw`const placementMode = ref<'start' | 'end'>('start')
const activePlacementTab = ref('design')

<Tabs
  tabPlacement={placementMode.value}
  type="line"
  activeKey={activePlacementTab.value}
  onChange={key => (activePlacementTab.value = key)}
  className="min-h-72"
  tabBarExtraContent={{
    left: (
      <div className="flex gap-2">
        <button
          className={'btn btn-xs ' + (placementMode.value === 'start' ? 'btn-neutral' : 'btn-ghost')}
          type="button"
          onClick={() => (placementMode.value = 'start')}
        >
          start
        </button>
        <button
          className={'btn btn-xs ' + (placementMode.value === 'end' ? 'btn-neutral' : 'btn-ghost')}
          type="button"
          onClick={() => (placementMode.value = 'end')}
        >
          end
        </button>
      </div>
    ),
  }}
  items={[
    {
      key: 'design',
      label: 'Design',
      children: '左侧导航布局适合文档、设置页和大段信息浏览。',
    },
    {
      key: 'review',
      label: 'Review',
      children: '右侧摆放则更适合注释面板或对照式配置区域。',
    },
  ]}
/>`,ue=String.raw`const editableCounter = ref(3)
const editableActiveKey = ref('draft-2')
const editableItems = ref([
  { key: 'draft-1', label: 'Draft 1', children: '需求说明、依赖评估与风险梳理。' },
  { key: 'draft-2', label: 'Draft 2', children: '设计走查与交互标注已经完成。' },
  {
    key: 'release',
    label: 'Release',
    children: '发布检查清单、灰度范围与回滚预案。',
    closable: false,
  },
])

const handleEditableEdit = (eventOrKey: MouseEvent | string, action: 'add' | 'remove') => {
  if (action === 'add') {
    editableCounter.value += 1
    const nextKey = 'draft-' + editableCounter.value
    editableItems.value = [
      ...editableItems.value,
      {
        key: nextKey,
        label: 'Draft ' + editableCounter.value,
        children: '这里是新建标签 ' + editableCounter.value + ' 的上下文内容。',
      },
    ]
    editableActiveKey.value = nextKey
    return
  }

  const targetKey = String(eventOrKey)
  const nextItems = editableItems.value.filter(item => item.key !== targetKey)
  editableItems.value = nextItems

  if (editableActiveKey.value === targetKey) {
    editableActiveKey.value = nextItems[0]?.key ?? ''
  }
}

<Tabs
  type="editable-card"
  activeKey={editableActiveKey.value}
  onChange={key => (editableActiveKey.value = key)}
  onEdit={handleEditableEdit}
  items={editableItems.value}
/>`,de=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，支持 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],fe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],I=(e,i,o)=>{let u=x(`tab2`),f=x(`tab2`),p=x(`tab2`),C=x(`tab2`),E=x(`xs2`),D=x(`sm2`),O=x(`md2`),j=x(`lg2`),M=x(`xl2`),N=x(`b2`),I=x(`d2`),pe=x(`c2`),me=x(`overview`),he=x(`beta`),L=x(`start`),ge=x(`design`),_e=x(`metrics`),R=x(3),z=x(`draft-2`),B=x([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]),ve=(e,t)=>{if(t===`add`){R.value+=1;let e=`draft-${R.value}`;B.value=[...B.value,{key:e,label:`Draft ${R.value}`,children:`这里是新建标签 ${R.value} 的上下文内容。`}],z.value=e;return}let n=String(e),r=B.value.filter(e=>e.key!==n);B.value=r,z.value===n&&(z.value=r[0]?.key??``)};return S(()=>s(A,()=>({children:(e,i,o)=>{let x=()=>d(e=>{let i=b(),o=ae().content.cloneNode(!0),x=o.firstChild,S=x.childNodes[5],A=S.parentNode,R=x.childNodes[6],ye=R.parentNode,V=x.childNodes[7],be=V.parentNode,H=x.childNodes[8],xe=H.parentNode,U=x.childNodes[9],Se=U.parentNode,W=x.childNodes[10],Ce=W.parentNode,G=x.childNodes[11],we=G.parentNode,K=x.childNodes[12],Te=K.parentNode,q=x.childNodes[13],Ee=q.parentNode,J=x.childNodes[14],De=J.parentNode,Y=x.childNodes[15],Oe=Y.parentNode,X=x.childNodes[16],ke=X.parentNode,Z=x.childNodes[17],Ae=Z.parentNode,Q=x.childNodes[18],je=Q.parentNode,$=x.childNodes[21],Me=$.parentNode,Ne=x.childNodes[23],Pe=Ne.parentNode;i.appendChild(o);let Fe=(e,t,r)=>{let i=()=>s(F,()=>({title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:u.value,onChange:e=>u.value=e}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},Ie=S.nextSibling;A.removeChild(S),t({parent:A,before:Ie},()=>Fe,()=>({}));let Le=(e,t,r)=>{let i=()=>s(F,()=>({title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:f.value,onChange:e=>f.value=e}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},Re=R.nextSibling;ye.removeChild(R),t({parent:ye,before:Re},()=>Le,()=>({}));let ze=(e,t,r)=>{let i=()=>s(F,()=>({title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:p.value,onChange:e=>p.value=e}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},Be=V.nextSibling;be.removeChild(V),t({parent:be,before:Be},()=>ze,()=>({}));let Ve=(e,t,r)=>{let i=()=>s(F,()=>({title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:C.value,onChange:e=>C.value=e}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},He=H.nextSibling;xe.removeChild(H),t({parent:xe,before:He},()=>Ve,()=>({}));let Ue=(e,i,o)=>{let u=()=>s(F,()=>({title:`content-panels`,code:se,children:(e,i,o)=>{let u=()=>d(e=>{let i=b(),o=v(`div`,i);h(i,o),o.setAttribute(`class`,`card bg-base-100 shadow-sm`);let u=v(`div`,o);h(o,u),u.setAttribute(`class`,`card-body gap-4`),n(u,k,()=>({type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:r(e=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,a=n.childNodes[0].childNodes[1],o=a.parentNode,c=n.childNodes[0].childNodes[2],u=c.parentNode,d=(e,t,n)=>{let r=()=>s(P,()=>({title:`Velocity`,value:`+18%`,description:`本周交付速度`}));return e==null?r():l(e,n,r)},f=r.nextSibling;i.removeChild(r),t({parent:i,before:f},()=>d,()=>({}));let p=(e,t,n)=>{let r=()=>s(P,()=>({title:`QA`,value:`7`,description:`待验证缺陷`}));return e==null?r():l(e,n,r)},m=a.nextSibling;o.removeChild(a),t({parent:o,before:m},()=>p,()=>({}));let h=(e,t,n)=>{let r=()=>s(P,()=>({title:`Review`,value:`3`,description:`待合并 PR`}));return e==null?r():l(e,n,r)},g=c.nextSibling;return u.removeChild(c),t({parent:u,before:g},()=>h,()=>({})),[n,n]})},{key:`activity`,label:`Activity`,children:c(e=>{let t=v(`div`,e);t.setAttribute(`class`,`space-y-3`);let n=v(`ul`,t);h(t,n),n.setAttribute(`class`,`list gap-2`);let r=v(`li`,n);h(n,r),r.setAttribute(`class`,`list-row`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`font-medium`),h(i,_(`10:15`));let a=v(`div`,r);h(r,a),a.setAttribute(`class`,`list-col-grow text-sm opacity-75`),h(a,_(`完成视觉验收，设计 token 已同步。`));let o=v(`li`,n);h(n,o),o.setAttribute(`class`,`list-row`);let s=v(`div`,o);h(o,s),s.setAttribute(`class`,`font-medium`),h(s,_(`14:35`));let c=v(`div`,o);h(o,c),c.setAttribute(`class`,`list-col-grow text-sm opacity-75`),h(c,_(`设计评审通过，进入开发联调。`));let l=v(`li`,n);h(n,l),l.setAttribute(`class`,`list-row`);let u=v(`div`,l);h(l,u),u.setAttribute(`class`,`font-medium`),h(u,_(`16:20`));let d=v(`div`,l);h(l,d),d.setAttribute(`class`,`list-col-grow text-sm opacity-75`),h(d,_(`补充埋点与告警配置。`));let f=v(`li`,n);h(n,f),f.setAttribute(`class`,`list-row`);let p=v(`div`,f);h(f,p),p.setAttribute(`class`,`font-medium`),h(p,_(`18:40`));let m=v(`div`,f);h(f,m),m.setAttribute(`class`,`list-col-grow text-sm opacity-75`),h(m,_(`QA 已预约今晚的回归窗口。`));let g=v(`div`,t);h(t,g),g.setAttribute(`role`,`alert`),g.setAttribute(`class`,`alert alert-soft alert-info text-sm`);let y=v(`span`,g);return h(g,y),h(y,_(`今晚 20:00 进入联调窗口，QA 会同步回归结果。`)),[t,t]})},{key:`members`,label:`Members`,children:r(e=>{let t=re().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=T(`<div class="rounded-box border border-base-300/70 bg-base-200/50 p-4"><div class="flex items-center justify-between"><div class="text-lg font-semibold">rue:row-text</div><span class="badge badge-ghost badge-sm">rue:row-text</span></div><div class="mt-2 text-sm opacity-75">rue:row-text</div></div>`),o=[];return a(()=>{o=g(r,n,o,[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}],(e,t)=>e.label,(e,t,n)=>{let r=e,a;return ee(e=>{let t=i().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0];n.parentNode;let o=t.childNodes[0].childNodes[1].childNodes[0];o.parentNode;let s=t.childNodes[1].childNodes[0];s.parentNode;let c=r.label==null||typeof r.label==`boolean`?``:String(r.label);n.textContent=c;let l=r.owner==null||typeof r.owner==`boolean`?``:String(r.owner);o.textContent=l;let u=r.note==null||typeof r.note==`boolean`?``:String(r.note);return s.textContent=u,a=()=>{{let e=r.label==null||typeof r.label==`boolean`?``:String(r.label);Object.is(c,e)||(n.textContent=e,c=e)}{let e=r.owner==null||typeof r.owner==`boolean`?``:String(r.owner);Object.is(l,e)||(o.textContent=e,l=e)}{let e=r.note==null||typeof r.note==`boolean`?``:String(r.note);Object.is(u,e)||(s.textContent=e,u=e)}},[t,t]},(n,i)=>{e=n,t=i,r=n,a()},void 0,n)},!1,!0)}),w(()=>m(o)),[t,t]})}]}));let d=_(``),f=_(``);return i.insertBefore(d,i.firstChild),i.appendChild(f),[i.firstChild,i.lastChild]});return e==null?u():l(e,o,u)}}));return e==null?u():l(e,o,u)},We=U.nextSibling;Se.removeChild(U),t({parent:Se,before:We},()=>Ue,()=>({}));let Ge=(e,t,r)=>{let i=()=>s(F,()=>({title:`tab-bar-extra-content`,code:ce,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({type:`card`,activeKey:me.value,onChange:e=>me.value=e,tabBarExtraContent:{left:c(e=>{let t=v(`span`,e);return t.setAttribute(`class`,`badge badge-neutral badge-sm`),h(t,_(`Workspace`)),[t,t]}),right:c(e=>{let t=v(`button`,e);return t.setAttribute(`class`,`btn btn-primary btn-sm`),t.setAttribute(`type`,`button`),h(t,_(`New Milestone`)),[t,t]})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},Ke=W.nextSibling;Ce.removeChild(W),t({parent:Ce,before:Ke},()=>Ge,()=>({}));let qe=(e,t,r)=>{let i=()=>s(F,()=>({title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({centered:!0,type:`line`,activeKey:he.value,onChange:e=>he.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},Je=G.nextSibling;we.removeChild(G),t({parent:we,before:Je},()=>qe,()=>({}));let Ye=(e,t,i)=>{let a=()=>s(F,()=>({title:`tab-placement`,code:le,children:(e,t,i)=>{let a=()=>d(e=>{let t=b(),i=v(`div`,t);h(t,i),i.setAttribute(`class`,`card bg-base-100 shadow-sm overflow-hidden`);let a=v(`div`,i);h(i,a),a.setAttribute(`class`,`card-body gap-4`),n(a,k,()=>({tabPlacement:L.value,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,className:`min-h-72`,tabBarExtraContent:{left:r(e=>{let t=ie().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1],i;y(()=>{let e=`btn btn-xs ${L.value===`start`?`btn-neutral`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),n.setAttribute(`type`,`button`),w(te(e,n,`click`,()=>()=>L.value=`start`));let a;return y(()=>{let e=`btn btn-xs ${L.value===`end`?`btn-neutral`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),r.setAttribute(`type`,`button`),w(te(e,r,`click`,()=>()=>L.value=`end`)),[t,t]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]}));let o=_(``),s=_(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?a():l(e,i,a)}}));return e==null?a():l(e,i,a)},Xe=K.nextSibling;Te.removeChild(K),t({parent:Te,before:Xe},()=>Ye,()=>({}));let Ze=(e,t,r)=>{let i=()=>s(F,()=>({title:`editable-card`,code:ue,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({type:`editable-card`,activeKey:z.value,onChange:e=>z.value=e,onEdit:ve,items:B.value}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},Qe=q.nextSibling;Ee.removeChild(q),t({parent:Ee,before:Qe},()=>Ze,()=>({}));let $e=(e,t,r)=>{let i=()=>s(F,()=>({title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:c(e=>{let t=v(`span`,e);return t.setAttribute(`class`,`mr-1 inline-flex badge badge-outline badge-xs`),t.setAttribute(`aria-hidden`,`true`),[t,t]}),label:`Roadmap`},{key:`metrics`,icon:c(e=>{let t=v(`span`,e);return t.setAttribute(`class`,`mr-1 inline-flex badge badge-primary badge-xs`),t.setAttribute(`aria-hidden`,`true`),[t,t]}),label:`Metrics`},{key:`notes`,icon:c(e=>{let t=v(`span`,e);return t.setAttribute(`class`,`mr-1 inline-flex badge badge-secondary badge-xs`),t.setAttribute(`aria-hidden`,`true`),[t,t]}),label:`Notes`}]}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},et=J.nextSibling;De.removeChild(J),t({parent:De,before:et},()=>$e,()=>({}));let tt=(e,t,r)=>{let i=()=>s(F,()=>({title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`);let a=v(`div`,i);h(i,a),a.setAttribute(`class`,`flex flex-col items-center gap-6`),n(a,k,()=>({style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:E.value,onChange:e=>E.value=e})),n(a,k,()=>({style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:D.value,onChange:e=>D.value=e})),n(a,k,()=>({style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:O.value,onChange:e=>O.value=e})),n(a,k,()=>({style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:j.value,onChange:e=>j.value=e})),n(a,k,()=>({style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:M.value,onChange:e=>M.value=e}));let o=_(``),s=_(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},nt=Y.nextSibling;Oe.removeChild(Y),t({parent:Oe,before:nt},()=>tt,()=>({}));let rt=(e,t,r)=>{let i=()=>s(F,()=>({title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:N.value,onChange:e=>N.value=e}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},it=X.nextSibling;ke.removeChild(X),t({parent:ke,before:it},()=>rt,()=>({}));let at=(e,t,r)=>{let i=()=>s(F,()=>({title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:I.value,onChange:e=>I.value=e}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},ot=Z.nextSibling;Ae.removeChild(Z),t({parent:Ae,before:ot},()=>at,()=>({}));let st=(e,t,r)=>{let i=()=>s(F,()=>({title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b(),r=v(`div`,t);h(t,r),r.setAttribute(`class`,`card bg-base-100 shadow-sm`);let i=v(`div`,r);h(r,i),i.setAttribute(`class`,`card-body gap-4`),n(i,k,()=>({style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:pe.value,onChange:e=>pe.value=e}));let a=_(``),o=_(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},ct=Q.nextSibling;je.removeChild(Q),t({parent:je,before:ct},()=>st,()=>({}));let lt=(e,t,n)=>{let r=()=>s(oe,()=>({rows:de}));return e==null?r():l(e,n,r)},ut=$.nextSibling;Me.removeChild($),t({parent:Me,before:ut},()=>lt,()=>({}));let dt=(e,t,n)=>{let r=()=>s(oe,()=>({rows:fe}));return e==null?r():l(e,n,r)},ft=Ne.nextSibling;Pe.removeChild(Ne),t({parent:Pe,before:ft},()=>dt,()=>({}));let pt=_(``),mt=_(``);return i.insertBefore(pt,i.firstChild),i.appendChild(mt),[i.firstChild,i.lastChild]});return e==null?x():l(e,o,x)}})))};export{I as default};