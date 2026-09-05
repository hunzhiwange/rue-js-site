import{Bt as e,C as t,Dn as n,Et as r,H as i,K as a,L as o,Mt as s,S as c,Sn as l,W as u,X as d,Y as f,_n as p,_t as m,b as h,bn as g,fn as _,gn as v,hn as y,ht as b,kn as x,mn as S,nt as C,q as w,rt as T,wn as E,x as D,yn as O,z as k}from"./rue-runtime-CwEGJ854.js";import{t as A}from"./Code-B3jCYMAr.js";import{t as j}from"./tabs-DUviBzjL.js";import{r as M}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as N}from"./preview-test-gate-DjzWv8cx.js";var ee=p(`<div class="space-y-4"><div class="grid gap-3 md:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div><div class="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"><div class="rounded-box border border-base-300/70 bg-base-100 p-4"><div class="flex items-center justify-between"><div class="text-sm font-semibold">本周推进节奏</div><span class="badge badge-success badge-sm">On Track</span></div><progress class="progress progress-primary mt-4" value="72" max="100"></progress><div class="mt-3 flex justify-between text-xs opacity-70"><span>设计</span><span>联调</span><span>回归</span><span>发布</span></div></div><div class="rounded-box border border-base-300/70 bg-base-100 p-4"><div class="text-sm font-semibold">Next Step</div><ul class="mt-3 space-y-2 text-sm opacity-75"><li>锁定接口字段命名</li><li>同步埋点事件与告警阈值</li><li>准备灰度发布公告</li></ul></div></div></div>`),te=p(`<div class="grid gap-3 sm:grid-cols-3"><!--rue:text-hole:0--></div>`),ne=p(`<div class="flex gap-2"><button type="button">start</button><button type="button">end</button></div>`),P=p(`<div class="rounded-box border border-base-300/70 bg-base-200/40 p-4"><div class="text-xs uppercase tracking-[0.18em] opacity-60"><!--rue:text-hole:0--></div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:1--></div><div class="mt-1 text-sm opacity-75"><!--rue:text-hole:2--></div></div>`),F=p(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),I=p(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:opaque-hole:1--><!--rue:text-hole:2--></div>`),re=p('<div class="max-w-none prose prose-sm md:prose-base"><h1>Tabs 选项卡</h1><p class="text-sm mt-3 mb-3">Tabs 现在除了使用 Rue 当前的 box / border / lift 视觉，还提供了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。</p><h2>何时使用</h2><ul><li>需要在同一信息区域里切换多个视图、状态面板或设置分组时。</li><li>既想使用 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。</li></ul><div class="not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3"><div class="rounded-box bg-base-200/50 p-3"><div class="font-medium">受控与非受控</div><div class="mt-1 opacity-75">支持 `activeKey`、`defaultActiveKey` 与 `onChange`。</div></div><div class="rounded-box bg-base-200/50 p-3"><div class="font-medium">内容与布局</div><div class="mt-1 opacity-75">支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。</div></div><div class="rounded-box bg-base-200/50 p-3"><div class="font-medium">操作能力</div><div class="mt-1 opacity-75">支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。</div></div></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><!--rue:opaque-hole:11--><!--rue:opaque-hole:12--><!--rue:opaque-hole:13--><h2 id="tabs-api">API</h2><p>Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。</p><!--rue:opaque-hole:14--><div class="not-prose mt-6"></div><!--rue:opaque-hole:15--><div class="not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm"><div class="font-semibold">使用建议</div><div class="mt-2 grid gap-2 md:grid-cols-2"><div><code>activeKey + onChange</code> 适合和路由、筛选条件、外部状态统一联动。</div><div><code>defaultActiveKey</code> 适合静态文档、局部示例 或无需外部接管的轻交互场景。</div><div>复杂标签头优先用 <code>icon</code> + 文本 <code>label</code> 组合，兼顾语义和稳定渲染。</div><div>需要完整内容区域切换时给 <code>items.children</code> 传面板节点；只做导航标签时可以只传 <code>label</code>。</div></div></div><h2>FAQ</h2><h3>activeKey 和 defaultActiveKey 怎么选？</h3><p><code>activeKey</code> 是受控模式，当前激活项由外部状态决定；<code>defaultActiveKey</code> 只设置初始值，后续切换由组件内部维护。</p><h3>style 和 type 会冲突吗？</h3><p><code>type</code> 更偏语义能力，像 <code>card</code>、<code>editable-card</code> 会自动套用适合的视觉； 如果你明确传了 <code>style</code>，就以显式样式为准。</p><h3>placement 和 tabPlacement 有什么区别？</h3><p><code>placement</code> 只覆盖上下位置；<code>tabPlacement</code> 额外支持 <code>start</code> 和<code>end</code> 两种垂直摆放，并且优先级更高。</p><h3>为什么复杂 label 建议拆成 icon 和文本？</h3><p>当前组件会给 <code>label</code> 包一层文本容器。为了避免复杂节点在运行时被串成 <code>[object Object]</code>，推荐把徽标、点状状态这类前缀放到 <code>icon</code> ，把主要文案保持在 <code>label</code>。</p></div>'),L=e=>{let t=u(e.description),n=u(e.title),i=u(e.value);return w(r(Object.assign(e=>{let r=P().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[0],o=a.parentNode,s=r.childNodes[1].childNodes[0],c=s.parentNode,l=r.childNodes[2].childNodes[0],u=l.parentNode,d=v(``);o.insertBefore(d,a),o.removeChild(a),g(d,()=>n.get());let f=v(``);c.insertBefore(f,s),c.removeChild(s),g(f,()=>i.get());let p=v(``);return u.insertBefore(p,l),u.removeChild(l),g(p,()=>t.get()),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>k(()=>{t.set(e.description),n.set(e.title),i.set(e.value)}),()=>e)},ie=e=>{let n=u(e.rows);return w(r(Object.assign(e=>{let i=F().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return E(()=>{let e=n.get()||[];s=t(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let n=u(e),i=u(t);return c((e,t,i)=>D(e,i,()=>r(Object.assign(e=>{let t=y(`tr`,e),r=y(`td`,t);_(t,r);let i=y(`code`,r);_(r,i);let a=v(``);_(i,a),g(a,()=>n.get().prop);let o=y(`td`,t);_(t,o);let s=v(``);_(o,s),g(s,()=>n.get().description);let c=y(`td`,t);_(t,c);let l=y(`code`,c);_(c,l);let u=v(``);_(l,u),g(u,()=>n.get().type);let d=y(`td`,t);_(t,d);let f=y(`code`,d);_(d,f);let p=v(``);return _(f,p),g(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>k(()=>{n.set(e.rows)}),()=>e)},R=t=>{let{tab:n,previewNode:r,__rue_phase2_previewNode:o}=O(`useSetup:0:0`,()=>{let n=e(`preview`),r=l(()=>Array.isArray(t.children)?t.children.find(e=>e!=null&&e!==``):t.children);return r.get(),{tab:n,previewNode:r,__rue_phase2_previewNode:r}});return b(e=>{let o=I().content.cloneNode(!0).firstChild,s=o.childNodes[0].childNodes[1],c=s.parentNode,l=o.childNodes[1],u=l.parentNode,d=o.childNodes[2],p=d.parentNode;h({parent:c,before:s},()=>t.title,()=>({}));let m=S(u);return a(m,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.value,onChange:e=>n.value=e,className:`mb-3`})),u.insertBefore(m,l),E(()=>{let e=n.value===`preview`?N(t.title,r.get()):i(A,()=>({className:`mt-2`,lang:`tsx`,code:t.code}));x(()=>f(e,p,d))}),o})},ae=String.raw`<Tabs
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
/>`,oe=String.raw`const activeKey = ref('overview')

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
/>`,se=String.raw`const placementMode = ref<'start' | 'end'>('start')
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
/>`,ce=String.raw`const editableCounter = ref(3)
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
/>`,le=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，支持 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],ue=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],z=()=>{let i=e(`tab2`),l=e(`tab2`),p=e(`tab2`),h=e(`tab2`),O=e(`xs2`),A=e(`sm2`),N=e(`md2`),P=e(`lg2`),F=e(`xl2`),I=e(`b2`),z=e(`d2`),B=e(`c2`),V=e(`overview`),de=e(`beta`),H=e(`start`),U=e(`design`),W=e(`metrics`),G=e(3),K=e(`draft-2`),q=e([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]),fe=(e,t)=>{if(t===`add`){G.value+=1;let e=`draft-${G.value}`;q.value=[...q.value,{key:e,label:`Draft ${G.value}`,children:`这里是新建标签 ${G.value} 的上下文内容。`}],K.value=e;return}let n=String(e),r=q.value.filter(e=>e.key!==n);q.value=r,K.value===n&&(K.value=r[0]?.key??``)};return s(()=>w((()=>{let e=b(()=>{let e=C(),s=re().content.cloneNode(!0),w=s.firstChild,k=w.childNodes[5],M=k.parentNode,G=w.childNodes[6],pe=G.parentNode,J=w.childNodes[7],me=J.parentNode,Y=w.childNodes[8],he=Y.parentNode,X=w.childNodes[9],ge=X.parentNode,Z=w.childNodes[10],_e=Z.parentNode,Q=w.childNodes[11],ve=Q.parentNode,ye=w.childNodes[12],be=ye.parentNode,xe=w.childNodes[13],Se=xe.parentNode,Ce=w.childNodes[14],we=Ce.parentNode,Te=w.childNodes[15],Ee=Te.parentNode,De=w.childNodes[16],Oe=De.parentNode,ke=w.childNodes[17],Ae=ke.parentNode,je=w.childNodes[18],Me=je.parentNode,Ne=w.childNodes[21],$=Ne.parentNode,Pe=w.childNodes[23],Fe=Pe.parentNode;e.appendChild(s),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:i.value,onChange:e=>i.value=e})),e}),t=m(R,()=>({title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:e}));x(()=>f(t,M,k))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:l.value,onChange:e=>l.value=e})),e}),t=m(R,()=>({title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:e}));x(()=>f(t,pe,G))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:p.value,onChange:e=>p.value=e})),e}),t=m(R,()=>({title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:e}));x(()=>f(t,me,J))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:h.value,onChange:e=>h.value=e})),e}),t=m(R,()=>({title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:e}));x(()=>f(t,he,Y))}),E(()=>{let e=b(()=>{let e=C(),n=T(`div`,e);d(e,n),o(n,`card bg-base-100 shadow-sm`);let i=T(`div`,n);return d(n,i),o(i,`card-body gap-4`),a(i,j,()=>({type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:r(Object.assign(e=>{let t=ee().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,i=t.childNodes[0].childNodes[1],o=i.parentNode,s=t.childNodes[0].childNodes[2],c=s.parentNode,l=S(r);a(l,L,()=>({title:`Velocity`,value:`+18%`,description:`本周交付速度`})),r.insertBefore(l,n);let u=S(o);a(u,L,()=>({title:`QA`,value:`7`,description:`待验证缺陷`})),o.insertBefore(u,i);let d=S(c);return a(d,L,()=>({title:`Review`,value:`3`,description:`待合并 PR`})),c.insertBefore(d,s),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},{key:`activity`,label:`Activity`,children:r(Object.assign(e=>{let t=y(`div`,e);t.className=`space-y-3`;let n=y(`ul`,t);_(t,n),n.className=`list gap-2`;let r=y(`li`,n);_(n,r),r.className=`list-row`;let i=y(`div`,r);_(r,i),i.className=`font-medium`,_(i,v(`10:15`));let a=y(`div`,r);_(r,a),a.className=`list-col-grow text-sm opacity-75`,_(a,v(`完成视觉验收，设计 token 已同步。`));let o=y(`li`,n);_(n,o),o.className=`list-row`;let s=y(`div`,o);_(o,s),s.className=`font-medium`,_(s,v(`14:35`));let c=y(`div`,o);_(o,c),c.className=`list-col-grow text-sm opacity-75`,_(c,v(`设计评审通过，进入开发联调。`));let l=y(`li`,n);_(n,l),l.className=`list-row`;let u=y(`div`,l);_(l,u),u.className=`font-medium`,_(u,v(`16:20`));let d=y(`div`,l);_(l,d),d.className=`list-col-grow text-sm opacity-75`,_(d,v(`补充埋点与告警配置。`));let f=y(`li`,n);_(n,f),f.className=`list-row`;let p=y(`div`,f);_(f,p),p.className=`font-medium`,_(p,v(`18:40`));let m=y(`div`,f);_(f,m),m.className=`list-col-grow text-sm opacity-75`,_(m,v(`QA 已预约今晚的回归窗口。`));let h=y(`div`,t);_(t,h),h.setAttribute(`role`,`alert`),h.className=`alert alert-soft alert-info text-sm`;let g=y(`span`,h);return _(h,g),_(g,v(`今晚 20:00 进入联调窗口，QA 会同步回归结果。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},{key:`members`,label:`Members`,children:r(Object.assign(e=>{let n=te().content.cloneNode(!0).firstChild,i=n.childNodes[0],a=i.parentNode,o=[];return E(()=>{o=t(a,i,o,[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}],(e,t)=>e.label,(e,t)=>{let n=u(e),i=u(t);return c((e,t,i)=>D(e,i,()=>r(Object.assign(e=>{let t=y(`div`,e);t.className=`rounded-box border border-base-300/70 bg-base-200/50 p-4`;let r=y(`div`,t);_(t,r),r.className=`flex items-center justify-between`;let i=y(`div`,r);_(r,i),i.className=`text-lg font-semibold`;let a=v(``);_(i,a),g(a,()=>n.get().label);let o=y(`span`,r);_(r,o),o.className=`badge badge-ghost badge-sm`;let s=v(``);_(o,s),g(s,()=>n.get().owner);let c=y(`div`,t);_(t,c),c.className=`mt-2 text-sm opacity-75`;let l=v(``);return _(c,l),g(l,()=>n.get().note),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}]})),e}),n=m(R,()=>({title:`content-panels`,code:ae,children:e}));x(()=>f(n,ge,X))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({type:`card`,activeKey:V.value,onChange:e=>V.value=e,tabBarExtraContent:{left:r(Object.assign(e=>{let t=y(`span`,e);return t.className=`badge badge-neutral badge-sm`,_(t,v(`Workspace`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),right:r(Object.assign(e=>{let t=y(`button`,e);return t.className=`btn btn-primary btn-sm`,t.setAttribute(`type`,`button`),_(t,v(`New Milestone`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]})),e}),t=m(R,()=>({title:`tab-bar-extra-content`,code:oe,children:e}));x(()=>f(t,_e,Z))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({centered:!0,type:`line`,activeKey:de.value,onChange:e=>de.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]})),e}),t=m(R,()=>({title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:e}));x(()=>f(t,ve,Q))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm overflow-hidden`);let i=T(`div`,t);return d(t,i),o(i,`card-body gap-4`),a(i,j,()=>({tabPlacement:H.value,type:`line`,activeKey:U.value,onChange:e=>U.value=e,className:`min-h-72`,tabBarExtraContent:{left:r(Object.assign(e=>{let t=ne().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1],a;E(()=>{let e=`btn btn-xs ${H.value===`start`?`btn-neutral`:`btn-ghost`}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)}),r.setAttribute(`type`,`button`);let o=e=>{let t=()=>H.value=`start`;typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o));let s;E(()=>{let e=`btn btn-xs ${H.value===`end`?`btn-neutral`:`btn-ghost`}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)}),i.setAttribute(`type`,`button`);let c=e=>{let t=()=>H.value=`end`;typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]})),e}),t=m(R,()=>({title:`tab-placement`,code:se,children:e}));x(()=>f(t,be,ye))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({type:`editable-card`,activeKey:K.value,onChange:e=>K.value=e,onEdit:fe,items:q.value})),e}),t=m(R,()=>({title:`editable-card`,code:ce,children:e}));x(()=>f(t,Se,xe))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({type:`line`,activeKey:W.value,onChange:e=>W.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:r(Object.assign(e=>{let t=y(`span`,e);return t.className=`mr-1 inline-flex badge badge-outline badge-xs`,t.setAttribute(`aria-hidden`,`true`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),label:`Roadmap`},{key:`metrics`,icon:r(Object.assign(e=>{let t=y(`span`,e);return t.className=`mr-1 inline-flex badge badge-primary badge-xs`,t.setAttribute(`aria-hidden`,`true`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),label:`Metrics`},{key:`notes`,icon:r(Object.assign(e=>{let t=y(`span`,e);return t.className=`mr-1 inline-flex badge badge-secondary badge-xs`,t.setAttribute(`aria-hidden`,`true`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),label:`Notes`}]})),e}),t=m(R,()=>({title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:e}));x(()=>f(t,we,Ce))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);d(t,n),o(n,`card-body gap-4`);let r=T(`div`,n);return d(n,r),o(r,`flex flex-col items-center gap-6`),a(r,j,()=>({style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:O.value,onChange:e=>O.value=e})),a(r,j,()=>({style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:A.value,onChange:e=>A.value=e})),a(r,j,()=>({style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:N.value,onChange:e=>N.value=e})),a(r,j,()=>({style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:P.value,onChange:e=>P.value=e})),a(r,j,()=>({style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:F.value,onChange:e=>F.value=e})),e}),t=m(R,()=>({title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:e}));x(()=>f(t,Ee,Te))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:I.value,onChange:e=>I.value=e})),e}),t=m(R,()=>({title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:e}));x(()=>f(t,Oe,De))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:z.value,onChange:e=>z.value=e})),e}),t=m(R,()=>({title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:e}));x(()=>f(t,Ae,ke))}),E(()=>{let e=b(()=>{let e=C(),t=T(`div`,e);d(e,t),o(t,`card bg-base-100 shadow-sm`);let n=T(`div`,t);return d(t,n),o(n,`card-body gap-4`),a(n,j,()=>({style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:B.value,onChange:e=>B.value=e})),e}),t=m(R,()=>({title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:e}));x(()=>f(t,Me,je))});let Ie=S($);a(Ie,ie,()=>({rows:le})),$.insertBefore(Ie,Ne);let Le=S(Fe);return a(Le,ie,()=>({rows:ue})),Fe.insertBefore(Le,Pe),e});return m(M,()=>({children:e}))})(),e=>k(()=>{})))};export{z as default};