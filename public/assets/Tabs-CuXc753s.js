import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as y,i as b}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as x}from"./Code-4SUSUwRg.js";import{t as S}from"./tabs-Duzh3URW.js";import{r as C}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as w}from"./preview-test-gate-nDDBbirJ.js";var T=t=>c(r=>{let o=u(`div`,r);i(o,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let c=u(`div`,o);n(o,c),i(c,`text-xs uppercase tracking-[0.18em] opacity-60`);let l=a(`rue:slot:anchor`);n(c,l),g(()=>{let n=t.title;e(()=>d(n,c,l))});let f=u(`div`,o);n(o,f),i(f,`mt-2 text-2xl font-semibold`);let p=s(f);n(f,p),g(()=>{h(p,t.value)});let m=u(`div`,o);n(o,m),i(m,`mt-1 text-sm opacity-75`);let _=a(`rue:slot:anchor`);return n(m,_),g(()=>{let n=t.description;e(()=>d(n,m,_))}),o}),ee=t=>c(r=>{let o=u(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,o);n(o,s),i(s,`table table-zebra`);let p=u(`thead`,s);n(s,p);let h=u(`tr`,p);n(p,h);let _=u(`th`,h);n(h,_),n(_,f(`属性`));let y=u(`th`,h);n(h,y),n(y,f(`说明`));let b=u(`th`,h);n(h,b),n(b,f(`类型`));let x=u(`th`,h);n(h,x),n(x,f(`默认值`));let S=u(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return g(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{d(c(()=>{let r=m(),i=u(`tr`,r);n(r,i),g(()=>{l(i,`key`,String(t.prop))});let o=u(`td`,i);n(i,o);let s=u(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),g(()=>{let n=t.description;e(()=>d(n,f,p))});let h=u(`td`,i);n(i,h);let _=u(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),g(()=>{let n=t.type;e(()=>d(n,_,v))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),g(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),o}),E=s=>{let{tab:l,previewNode:h}=_(`useSetup:0:0`,()=>o(()=>({tab:_(`ref:1:0`,()=>t(`preview`)),previewNode:_(`computed:1:1`,()=>r(()=>Array.isArray(s.children)?s.children.find(e=>e!=null&&e!==``):s.children))})));return c(t=>{let r=u(`div`,t);i(r,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=u(`h2`,r);n(r,o),i(o,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(o,f(`# `));let _=a(`rue:slot:anchor`);n(o,_),g(()=>{let t=s.title;e(()=>d(t,o,_))});let v=a(`rue:component:anchor`);n(r,v),g(()=>{let t=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:l.value,onChange:e=>l.value=e,className:`mb-3`});e(()=>d(t,r,v))});let y=a(`rue:slot:anchor`);return n(r,y),g(()=>{let t=l.value===`preview`?w(s.title,h.get()):c(()=>{let t=m(),r=a(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:s.code});e(()=>d(n,t,r))}),t});e(()=>d(t,r,y))}),r})},te=String.raw`<Tabs
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
/>`,ne=String.raw`const activeKey = ref('overview')

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
/>`,re=String.raw`const placementMode = ref<'start' | 'end'>('start')
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
/>`,ie=String.raw`const editableCounter = ref(3)
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，支持 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],D=()=>{let{activeBasic:r,activeBorder:v,activeLift:x,activeBox:w,activeXs:D,activeSm:se,activeMd:ce,activeLg:le,activeXl:ue,activeBottom:de,activeDisabled:fe,activeCustom:pe,activeExtra:me,activeCentered:he,placementMode:O,activePlacementTab:ge,activeIndicator:_e,editableCounter:ve,editableActiveKey:ye,editableItems:be,handleEditableEdit:xe}=_(`useSetup:0:0:dup1`,()=>o(()=>{let e=_(`ref:1:2`,()=>t(`tab2`)),n=_(`ref:1:3`,()=>t(`tab2`)),r=_(`ref:1:4`,()=>t(`tab2`)),i=_(`ref:1:5`,()=>t(`tab2`)),a=_(`ref:1:6`,()=>t(`xs2`)),o=_(`ref:1:7`,()=>t(`sm2`)),s=_(`ref:1:8`,()=>t(`md2`)),c=_(`ref:1:9`,()=>t(`lg2`)),l=_(`ref:1:10`,()=>t(`xl2`)),u=_(`ref:1:11`,()=>t(`b2`)),d=_(`ref:1:12`,()=>t(`d2`)),f=_(`ref:1:13`,()=>t(`c2`)),p=_(`ref:1:14`,()=>t(`overview`)),m=_(`ref:1:15`,()=>t(`beta`)),h=_(`ref:1:16`,()=>t(`start`)),g=_(`ref:1:17`,()=>t(`design`)),v=_(`ref:1:18`,()=>t(`metrics`)),y=_(`ref:1:19`,()=>t(3)),b=_(`ref:1:20`,()=>t(`draft-2`)),x=_(`ref:1:21`,()=>t([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]));return{activeBasic:e,activeBorder:n,activeLift:r,activeBox:i,activeXs:a,activeSm:o,activeMd:s,activeLg:c,activeXl:l,activeBottom:u,activeDisabled:d,activeCustom:f,activeExtra:p,activeCentered:m,placementMode:h,activePlacementTab:g,activeIndicator:v,editableCounter:y,editableActiveKey:b,editableItems:x,handleEditableEdit:(e,t)=>{if(t===`add`){y.value+=1;let e=`draft-${y.value}`;x.value=[...x.value,{key:e,label:`Draft ${y.value}`,children:`这里是新建标签 ${y.value} 的上下文内容。`}],b.value=e;return}let n=String(e),r=x.value.filter(e=>e.key!==n);x.value=r,b.value===n&&(b.value=r[0]?.key??``)}}}));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(C,{children:c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let _=u(`h1`,o);n(o,_),n(_,f(`Tabs 选项卡`));let C=u(`p`,o);n(o,C),i(C,`text-sm mt-3 mb-3`),n(C,f(`Tabs 现在除了使用 Rue 当前的 box / border / lift 视觉，还提供了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let ve=u(`h2`,o);n(o,ve),n(ve,f(`何时使用`));let k=u(`ul`,o);n(o,k);let Se=u(`li`,k);n(k,Se),n(Se,f(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let Ce=u(`li`,k);n(k,Ce),n(Ce,f(`既想使用 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let A=u(`div`,o);n(o,A),i(A,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let j=u(`div`,A);n(A,j),i(j,`rounded-box bg-base-200/50 p-3`);let M=u(`div`,j);n(j,M),i(M,`font-medium`),n(M,f(`受控与非受控`));let N=u(`div`,j);n(j,N),i(N,`mt-1 opacity-75`),n(N,f("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let P=u(`div`,A);n(A,P),i(P,`rounded-box bg-base-200/50 p-3`);let F=u(`div`,P);n(P,F),i(F,`font-medium`),n(F,f(`内容与布局`));let I=u(`div`,P);n(P,I),i(I,`mt-1 opacity-75`),n(I,f("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let L=u(`div`,A);n(A,L),i(L,`rounded-box bg-base-200/50 p-3`);let R=u(`div`,L);n(L,R),i(R,`font-medium`),n(R,f(`操作能力`));let z=u(`div`,L);n(L,z),i(z,`mt-1 opacity-75`),n(z,f("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let we=a(`rue:component:anchor`);n(o,we);let Te=c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`card bg-base-100 shadow-sm`);let s=u(`div`,o);n(o,s),i(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return n(s,c),g(()=>{let t=p(S,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:r.value,onChange:e=>r.value=e});e(()=>d(t,s,c))}),t});g(()=>{let t=p(E,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Te});e(()=>d(t,o,we))});let Ee=a(`rue:component:anchor`);n(o,Ee);let De=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:v.value,onChange:e=>v.value=e});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:De});e(()=>d(t,o,Ee))});let Oe=a(`rue:component:anchor`);n(o,Oe);let ke=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:x.value,onChange:e=>x.value=e});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:ke});e(()=>d(t,o,Oe))});let Ae=a(`rue:component:anchor`);n(o,Ae);let je=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:w.value,onChange:e=>w.value=e});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:je});e(()=>d(t,o,Ae))});let Me=a(`rue:component:anchor`);n(o,Me);let Ne=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[b(T,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),b(T,{title:`QA`,value:`7`,description:`待验证缺陷`}),b(T,{title:`Review`,value:`3`,description:`待合并 PR`})]}),y(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[y(`div`,{className:`flex items-center justify-between`,children:[b(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),b(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),b(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),y(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[b(`span`,{children:`设计`}),b(`span`,{children:`联调`}),b(`span`,{children:`回归`}),b(`span`,{children:`发布`})]})]}),y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),y(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[b(`li`,{children:`锁定接口字段命名`}),b(`li`,{children:`同步埋点事件与告警阈值`}),b(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:y(`div`,{className:`space-y-3`,children:[y(`ul`,{className:`list gap-2`,children:[y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`10:15`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`14:35`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`16:20`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补充埋点与告警配置。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`18:40`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),b(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:b(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:b(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>y(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[y(`div`,{className:`flex items-center justify-between`,children:[b(`div`,{className:`text-lg font-semibold`,children:e.label}),b(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),b(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`content-panels`,code:te,children:Ne});e(()=>d(t,o,Me))});let Pe=a(`rue:component:anchor`);n(o,Pe);let Fe=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{type:`card`,activeKey:me.value,onChange:e=>me.value=e,tabBarExtraContent:{left:b(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:b(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`tab-bar-extra-content`,code:ne,children:Fe});e(()=>d(t,o,Pe))});let Ie=a(`rue:component:anchor`);n(o,Ie);let Le=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{centered:!0,type:`line`,activeKey:he.value,onChange:e=>he.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Le});e(()=>d(t,o,Ie))});let Re=a(`rue:component:anchor`);n(o,Re);let ze=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm overflow-hidden`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{tabPlacement:O.value,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,className:`min-h-72`,tabBarExtraContent:{left:y(`div`,{className:`flex gap-2`,children:[b(`button`,{className:`btn btn-xs ${O.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`start`,children:`start`}),b(`button`,{className:`btn btn-xs ${O.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`tab-placement`,code:re,children:ze});e(()=>d(t,o,Re))});let Be=a(`rue:component:anchor`);n(o,Be);let Ve=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{type:`editable-card`,activeKey:ye.value,onChange:e=>ye.value=e,onEdit:xe,items:be.value});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`editable-card`,code:ie,children:Ve});e(()=>d(t,o,Be))});let He=a(`rue:component:anchor`);n(o,He);let Ue=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:Ue});e(()=>d(t,o,He))});let We=a(`rue:component:anchor`);n(o,We);let Ge=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=u(`div`,o);n(o,s),i(s,`flex flex-col items-center gap-6`);let c=a(`rue:component:anchor`);n(s,c),g(()=>{let t=p(S,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:D.value,onChange:e=>D.value=e});e(()=>d(t,s,c))});let l=a(`rue:component:anchor`);n(s,l),g(()=>{let t=p(S,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:se.value,onChange:e=>se.value=e});e(()=>d(t,s,l))});let f=a(`rue:component:anchor`);n(s,f),g(()=>{let t=p(S,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:ce.value,onChange:e=>ce.value=e});e(()=>d(t,s,f))});let h=a(`rue:component:anchor`);n(s,h),g(()=>{let t=p(S,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:le.value,onChange:e=>le.value=e});e(()=>d(t,s,h))});let _=a(`rue:component:anchor`);return n(s,_),g(()=>{let t=p(S,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:ue.value,onChange:e=>ue.value=e});e(()=>d(t,s,_))}),t});g(()=>{let t=p(E,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ge});e(()=>d(t,o,We))});let Ke=a(`rue:component:anchor`);n(o,Ke);let qe=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:de.value,onChange:e=>de.value=e});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:qe});e(()=>d(t,o,Ke))});let Je=a(`rue:component:anchor`);n(o,Je);let Ye=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:fe.value,onChange:e=>fe.value=e});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Ye});e(()=>d(t,o,Je))});let Xe=a(`rue:component:anchor`);n(o,Xe);let Ze=c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow-sm`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(S,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:pe.value,onChange:e=>pe.value=e});e(()=>d(t,o,s))}),t});g(()=>{let t=p(E,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Ze});e(()=>d(t,o,Xe))});let B=u(`h2`,o);n(o,B),l(B,`id`,`tabs-api`),n(B,f(`API`));let Qe=u(`p`,o);n(o,Qe),n(Qe,f(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let $e=a(`rue:component:anchor`);n(o,$e),g(()=>{let t=p(ee,{rows:ae});e(()=>d(t,o,$e))});let et=u(`div`,o);n(o,et),i(et,`not-prose mt-6`);let tt=a(`rue:component:anchor`);n(o,tt),g(()=>{let t=p(ee,{rows:oe});e(()=>d(t,o,tt))});let V=u(`div`,o);n(o,V),i(V,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let H=u(`div`,V);n(V,H),i(H,`font-semibold`),n(H,f(`使用建议`));let U=u(`div`,V);n(V,U),i(U,`mt-2 grid gap-2 md:grid-cols-2`);let W=u(`div`,U);n(U,W);let nt=u(`code`,W);n(W,nt),n(nt,f(`activeKey + onChange`)),n(W,f(`适合和路由、筛选条件、外部状态统一联动。`));let G=u(`div`,U);n(U,G);let rt=u(`code`,G);n(G,rt),n(rt,f(`defaultActiveKey`)),n(G,f(`适合静态文档、局部示例 或无需外部接管的轻交互场景。`));let K=u(`div`,U);n(U,K),n(K,f(`复杂标签头优先用`));let it=u(`code`,K);n(K,it),n(it,f(`icon`)),n(K,f(`+ 文本`));let at=u(`code`,K);n(K,at),n(at,f(`label`));let ot=s(K);n(K,ot),h(ot,` `),n(K,f(`组合，兼顾语义和稳定渲染。`));let q=u(`div`,U);n(U,q),n(q,f(`需要完整内容区域切换时给`));let st=u(`code`,q);n(q,st),n(st,f(`items.children`));let ct=s(q);n(q,ct),h(ct,` `),n(q,f(`传面板节点；只做导航标签时可以只传`));let lt=u(`code`,q);n(q,lt),n(lt,f(`label`)),n(q,f(`。`));let ut=u(`h2`,o);n(o,ut),n(ut,f(`FAQ`));let dt=u(`h3`,o);n(o,dt),n(dt,f(`activeKey 和 defaultActiveKey 怎么选？`));let J=u(`p`,o);n(o,J);let ft=u(`code`,J);n(J,ft),n(ft,f(`activeKey`)),n(J,f(`是受控模式，当前激活项由外部状态决定；`));let pt=u(`code`,J);n(J,pt),n(pt,f(`defaultActiveKey`)),n(J,f(`只设置初始值，后续切换由组件内部维护。`));let mt=u(`h3`,o);n(o,mt),n(mt,f(`style 和 type 会冲突吗？`));let Y=u(`p`,o);n(o,Y);let ht=u(`code`,Y);n(Y,ht),n(ht,f(`type`)),n(Y,f(`更偏语义能力，像`));let gt=u(`code`,Y);n(Y,gt),n(gt,f(`card`)),n(Y,f(`、`));let _t=u(`code`,Y);n(Y,_t),n(_t,f(`editable-card`));let vt=s(Y);n(Y,vt),h(vt,` `),n(Y,f(`会自动套用适合的视觉； 如果你明确传了`));let yt=u(`code`,Y);n(Y,yt),n(yt,f(`style`)),n(Y,f(`，就以显式样式为准。`));let bt=u(`h3`,o);n(o,bt),n(bt,f(`placement 和 tabPlacement 有什么区别？`));let X=u(`p`,o);n(o,X);let xt=u(`code`,X);n(X,xt),n(xt,f(`placement`)),n(X,f(`只覆盖上下位置；`));let Z=u(`code`,X);n(X,Z),n(Z,f(`tabPlacement`)),n(X,f(`额外支持`));let St=s(X);n(X,St),h(St,` `);let Ct=u(`code`,X);n(X,Ct),n(Ct,f(`start`)),n(X,f(`和`));let wt=u(`code`,X);n(X,wt),n(wt,f(`end`)),n(X,f(`两种垂直摆放，并且优先级更高。`));let Tt=u(`h3`,o);n(o,Tt),n(Tt,f(`为什么复杂 label 建议拆成 icon 和文本？`));let Q=u(`p`,o);n(o,Q),n(Q,f(`当前组件会给`));let Et=u(`code`,Q);n(Q,Et),n(Et,f(`label`)),n(Q,f(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Dt=u(`code`,Q);n(Q,Dt),n(Dt,f(`[object Object]`)),n(Q,f(`，推荐把徽标、点状状态这类前缀放到`));let Ot=u(`code`,Q);n(Q,Ot),n(Ot,f(`icon`)),n(Q,f(`，把主要文案保持在`));let $=u(`code`,Q);return n(Q,$),n($,f(`label`)),n(Q,f(`。`)),t})}),o,_),o})};export{D as default};