import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,gt as u,l as d,pt as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,n as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as y,i as b}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as x}from"./Code-CZqShVUj.js";import{t as S}from"./tabs-BBuGEPV7.js";import{r as C}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as w}from"./preview-test-gate-PvTX1w6L.js";var T=e=>d(r=>{let s=i(`div`,r);h(s,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let c=i(`div`,s);n(s,c),h(c,`text-xs uppercase tracking-[0.18em] opacity-60`);let u=a(`rue:slot:anchor`);n(c,u),o(()=>{let n=e.title;t(()=>m(n,c,u))});let d=i(`div`,s);n(s,d),h(d,`mt-2 text-2xl font-semibold`);let p=l(d);n(d,p),o(()=>{f(p,e.value)});let g=i(`div`,s);n(s,g),h(g,`mt-1 text-sm opacity-75`);let _=a(`rue:slot:anchor`);return n(g,_),o(()=>{let n=e.description;t(()=>m(n,g,_))}),s}),ee=r=>d(l=>{let u=i(`div`,l);h(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),h(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let g=i(`tr`,p);n(p,g);let _=i(`th`,g);n(g,_),n(_,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{m(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>m(n,d,f))});let p=i(`td`,l);n(l,p);let h=a(`rue:slot:anchor`);n(p,h),o(()=>{let n=e.description;t(()=>m(n,p,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>m(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>m(n,b,x))}),r}),r,l)}})}),u}),E=c=>{let{tab:l,previewNode:f}=_(`useSetup:0:0`,()=>p(()=>({tab:_(`ref:1:0`,()=>r(`preview`)),previewNode:_(`computed:1:1`,()=>u(()=>Array.isArray(c.children)?c.children.find(e=>e!=null&&e!==``):c.children))})));return d(r=>{let u=i(`div`,r);h(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let p=i(`h2`,u);n(u,p),h(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,e(`# `));let _=a(`rue:slot:anchor`);n(p,_),o(()=>{let e=c.title;t(()=>m(e,p,_))});let v=a(`rue:component:anchor`);n(u,v),o(()=>{let e=g(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:l.value,onChange:e=>l.value=e,className:`mb-3`});t(()=>m(e,u,v))});let y=a(`rue:slot:anchor`);return n(u,y),o(()=>{let e=l.value===`preview`?w(c.title,f.get()):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(x,{className:`mt-2`,lang:`tsx`,code:c.code});t(()=>m(n,e,r))}),e});t(()=>m(e,u,y))}),u})},te=String.raw`<Tabs
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
              <div className="list-col-grow text-sm opacity-75">补齐埋点与告警配置。</div>
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，兼容 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],D=()=>{let{activeBasic:u,activeBorder:v,activeLift:x,activeBox:w,activeXs:D,activeSm:se,activeMd:ce,activeLg:le,activeXl:ue,activeBottom:de,activeDisabled:fe,activeCustom:pe,activeExtra:me,activeCentered:he,placementMode:O,activePlacementTab:ge,activeIndicator:_e,editableCounter:ve,editableActiveKey:ye,editableItems:be,handleEditableEdit:xe}=_(`useSetup:0:0:dup1`,()=>p(()=>{let e=_(`ref:1:2`,()=>r(`tab2`)),t=_(`ref:1:3`,()=>r(`tab2`)),n=_(`ref:1:4`,()=>r(`tab2`)),i=_(`ref:1:5`,()=>r(`tab2`)),a=_(`ref:1:6`,()=>r(`xs2`)),o=_(`ref:1:7`,()=>r(`sm2`)),s=_(`ref:1:8`,()=>r(`md2`)),c=_(`ref:1:9`,()=>r(`lg2`)),l=_(`ref:1:10`,()=>r(`xl2`)),u=_(`ref:1:11`,()=>r(`b2`)),d=_(`ref:1:12`,()=>r(`d2`)),f=_(`ref:1:13`,()=>r(`c2`)),p=_(`ref:1:14`,()=>r(`overview`)),m=_(`ref:1:15`,()=>r(`beta`)),h=_(`ref:1:16`,()=>r(`start`)),g=_(`ref:1:17`,()=>r(`design`)),v=_(`ref:1:18`,()=>r(`metrics`)),y=_(`ref:1:19`,()=>r(3)),b=_(`ref:1:20`,()=>r(`draft-2`)),x=_(`ref:1:21`,()=>r([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]));return{activeBasic:e,activeBorder:t,activeLift:n,activeBox:i,activeXs:a,activeSm:o,activeMd:s,activeLg:c,activeXl:l,activeBottom:u,activeDisabled:d,activeCustom:f,activeExtra:p,activeCentered:m,placementMode:h,activePlacementTab:g,activeIndicator:v,editableCounter:y,editableActiveKey:b,editableItems:x,handleEditableEdit:(e,t)=>{if(t===`add`){y.value+=1;let e=`draft-${y.value}`;x.value=[...x.value,{key:e,label:`Draft ${y.value}`,children:`这里是新建标签 ${y.value} 的上下文内容。`}],b.value=e;return}let n=String(e),r=x.value.filter(e=>e.key!==n);x.value=r,b.value===n&&(b.value=r[0]?.key??``)}}}));return d(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(C,{children:d(()=>{let r=s(),p=i(`div`,r);n(r,p),h(p,`max-w-none prose prose-sm md:prose-base`);let _=i(`h1`,p);n(p,_),n(_,e(`Tabs 选项卡`));let C=i(`p`,p);n(p,C),h(C,`text-sm mt-3 mb-3`),n(C,e(`Tabs 现在除了保留 Rue 当前的 box / border / lift 视觉，还补齐了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let ve=i(`h2`,p);n(p,ve),n(ve,e(`何时使用`));let k=i(`ul`,p);n(p,k);let Se=i(`li`,k);n(k,Se),n(Se,e(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let Ce=i(`li`,k);n(k,Ce),n(Ce,e(`既想保留 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let A=i(`div`,p);n(p,A),h(A,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let j=i(`div`,A);n(A,j),h(j,`rounded-box bg-base-200/50 p-3`);let M=i(`div`,j);n(j,M),h(M,`font-medium`),n(M,e(`受控与非受控`));let N=i(`div`,j);n(j,N),h(N,`mt-1 opacity-75`),n(N,e("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let P=i(`div`,A);n(A,P),h(P,`rounded-box bg-base-200/50 p-3`);let F=i(`div`,P);n(P,F),h(F,`font-medium`),n(F,e(`内容与布局`));let I=i(`div`,P);n(P,I),h(I,`mt-1 opacity-75`),n(I,e("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let L=i(`div`,A);n(A,L),h(L,`rounded-box bg-base-200/50 p-3`);let R=i(`div`,L);n(L,R),h(R,`font-medium`),n(R,e(`操作能力`));let z=i(`div`,L);n(L,z),h(z,`mt-1 opacity-75`),n(z,e("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let we=a(`rue:component:anchor`);n(p,we);let Te=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:u.value,onChange:e=>u.value=e});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Te});t(()=>m(e,p,we))});let Ee=a(`rue:component:anchor`);n(p,Ee);let De=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:v.value,onChange:e=>v.value=e});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:De});t(()=>m(e,p,Ee))});let Oe=a(`rue:component:anchor`);n(p,Oe);let ke=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:x.value,onChange:e=>x.value=e});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:ke});t(()=>m(e,p,Oe))});let Ae=a(`rue:component:anchor`);n(p,Ae);let je=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:w.value,onChange:e=>w.value=e});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:je});t(()=>m(e,p,Ae))});let Me=a(`rue:component:anchor`);n(p,Me);let Ne=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[b(T,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),b(T,{title:`QA`,value:`7`,description:`待验证缺陷`}),b(T,{title:`Review`,value:`3`,description:`待合并 PR`})]}),y(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[y(`div`,{className:`flex items-center justify-between`,children:[b(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),b(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),b(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),y(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[b(`span`,{children:`设计`}),b(`span`,{children:`联调`}),b(`span`,{children:`回归`}),b(`span`,{children:`发布`})]})]}),y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),y(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[b(`li`,{children:`锁定接口字段命名`}),b(`li`,{children:`同步埋点事件与告警阈值`}),b(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:y(`div`,{className:`space-y-3`,children:[y(`ul`,{className:`list gap-2`,children:[y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`10:15`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`14:35`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`16:20`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补齐埋点与告警配置。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`18:40`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),b(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:b(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:b(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>y(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[y(`div`,{className:`flex items-center justify-between`,children:[b(`div`,{className:`text-lg font-semibold`,children:e.label}),b(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),b(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`content-panels`,code:te,children:Ne});t(()=>m(e,p,Me))});let Pe=a(`rue:component:anchor`);n(p,Pe);let Fe=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{type:`card`,activeKey:me.value,onChange:e=>me.value=e,tabBarExtraContent:{left:b(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:b(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`tab-bar-extra-content`,code:ne,children:Fe});t(()=>m(e,p,Pe))});let Ie=a(`rue:component:anchor`);n(p,Ie);let Le=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{centered:!0,type:`line`,activeKey:he.value,onChange:e=>he.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Le});t(()=>m(e,p,Ie))});let Re=a(`rue:component:anchor`);n(p,Re);let ze=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm overflow-hidden`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{tabPlacement:O.value,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,className:`min-h-72`,tabBarExtraContent:{left:y(`div`,{className:`flex gap-2`,children:[b(`button`,{className:`btn btn-xs ${O.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`start`,children:`start`}),b(`button`,{className:`btn btn-xs ${O.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`tab-placement`,code:re,children:ze});t(()=>m(e,p,Re))});let Be=a(`rue:component:anchor`);n(p,Be);let Ve=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{type:`editable-card`,activeKey:ye.value,onChange:e=>ye.value=e,onEdit:xe,items:be.value});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`editable-card`,code:ie,children:Ve});t(()=>m(e,p,Be))});let He=a(`rue:component:anchor`);n(p,He);let Ue=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:Ue});t(()=>m(e,p,He))});let We=a(`rue:component:anchor`);n(p,We);let Ge=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=i(`div`,c);n(c,l),h(l,`flex flex-col items-center gap-6`);let u=a(`rue:component:anchor`);n(l,u),o(()=>{let e=g(S,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:D.value,onChange:e=>D.value=e});t(()=>m(e,l,u))});let d=a(`rue:component:anchor`);n(l,d),o(()=>{let e=g(S,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:se.value,onChange:e=>se.value=e});t(()=>m(e,l,d))});let f=a(`rue:component:anchor`);n(l,f),o(()=>{let e=g(S,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:ce.value,onChange:e=>ce.value=e});t(()=>m(e,l,f))});let p=a(`rue:component:anchor`);n(l,p),o(()=>{let e=g(S,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:le.value,onChange:e=>le.value=e});t(()=>m(e,l,p))});let _=a(`rue:component:anchor`);return n(l,_),o(()=>{let e=g(S,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:ue.value,onChange:e=>ue.value=e});t(()=>m(e,l,_))}),e});o(()=>{let e=g(E,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ge});t(()=>m(e,p,We))});let Ke=a(`rue:component:anchor`);n(p,Ke);let qe=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:de.value,onChange:e=>de.value=e});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:qe});t(()=>m(e,p,Ke))});let Je=a(`rue:component:anchor`);n(p,Je);let Ye=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:fe.value,onChange:e=>fe.value=e});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Ye});t(()=>m(e,p,Je))});let Xe=a(`rue:component:anchor`);n(p,Xe);let Ze=d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow-sm`);let c=i(`div`,r);n(r,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(S,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:pe.value,onChange:e=>pe.value=e});t(()=>m(e,c,l))}),e});o(()=>{let e=g(E,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Ze});t(()=>m(e,p,Xe))});let B=i(`h2`,p);n(p,B),c(B,`id`,`tabs-api`),n(B,e(`API`));let Qe=i(`p`,p);n(p,Qe),n(Qe,e(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let $e=a(`rue:component:anchor`);n(p,$e),o(()=>{let e=g(ee,{rows:ae});t(()=>m(e,p,$e))});let et=i(`div`,p);n(p,et),h(et,`not-prose mt-6`);let tt=a(`rue:component:anchor`);n(p,tt),o(()=>{let e=g(ee,{rows:oe});t(()=>m(e,p,tt))});let V=i(`div`,p);n(p,V),h(V,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let H=i(`div`,V);n(V,H),h(H,`font-semibold`),n(H,e(`使用建议`));let U=i(`div`,V);n(V,U),h(U,`mt-2 grid gap-2 md:grid-cols-2`);let W=i(`div`,U);n(U,W);let nt=i(`code`,W);n(W,nt),n(nt,e(`activeKey + onChange`)),n(W,e(`适合和路由、筛选条件、外部状态统一联动。`));let G=i(`div`,U);n(U,G);let rt=i(`code`,G);n(G,rt),n(rt,e(`defaultActiveKey`)),n(G,e(`适合静态文档、局部 demo 或无需外部接管的轻交互场景。`));let K=i(`div`,U);n(U,K),n(K,e(`复杂标签头优先用`));let it=i(`code`,K);n(K,it),n(it,e(`icon`)),n(K,e(`+ 文本`));let at=i(`code`,K);n(K,at),n(at,e(`label`));let ot=l(K);n(K,ot),f(ot,` `),n(K,e(`组合，兼顾语义和稳定渲染。`));let q=i(`div`,U);n(U,q),n(q,e(`需要完整内容区域切换时给`));let st=i(`code`,q);n(q,st),n(st,e(`items.children`));let ct=l(q);n(q,ct),f(ct,` `),n(q,e(`传面板节点；只做导航标签时可以只传`));let lt=i(`code`,q);n(q,lt),n(lt,e(`label`)),n(q,e(`。`));let ut=i(`h2`,p);n(p,ut),n(ut,e(`FAQ`));let dt=i(`h3`,p);n(p,dt),n(dt,e(`activeKey 和 defaultActiveKey 怎么选？`));let J=i(`p`,p);n(p,J);let ft=i(`code`,J);n(J,ft),n(ft,e(`activeKey`)),n(J,e(`是受控模式，当前激活项由外部状态决定；`));let pt=i(`code`,J);n(J,pt),n(pt,e(`defaultActiveKey`)),n(J,e(`只设置初始值，后续切换由组件内部维护。`));let mt=i(`h3`,p);n(p,mt),n(mt,e(`style 和 type 会冲突吗？`));let Y=i(`p`,p);n(p,Y);let ht=i(`code`,Y);n(Y,ht),n(ht,e(`type`)),n(Y,e(`更偏语义能力，像`));let gt=i(`code`,Y);n(Y,gt),n(gt,e(`card`)),n(Y,e(`、`));let _t=i(`code`,Y);n(Y,_t),n(_t,e(`editable-card`));let vt=l(Y);n(Y,vt),f(vt,` `),n(Y,e(`会自动套用适合的视觉； 如果你明确传了`));let yt=i(`code`,Y);n(Y,yt),n(yt,e(`style`)),n(Y,e(`，就以显式样式为准。`));let bt=i(`h3`,p);n(p,bt),n(bt,e(`placement 和 tabPlacement 有什么区别？`));let X=i(`p`,p);n(p,X);let xt=i(`code`,X);n(X,xt),n(xt,e(`placement`)),n(X,e(`只覆盖上下位置；`));let Z=i(`code`,X);n(X,Z),n(Z,e(`tabPlacement`)),n(X,e(`额外支持`));let St=l(X);n(X,St),f(St,` `);let Ct=i(`code`,X);n(X,Ct),n(Ct,e(`start`)),n(X,e(`和`));let wt=i(`code`,X);n(X,wt),n(wt,e(`end`)),n(X,e(`两种垂直摆放，并且优先级更高。`));let Tt=i(`h3`,p);n(p,Tt),n(Tt,e(`为什么复杂 label 建议拆成 icon 和文本？`));let Q=i(`p`,p);n(p,Q),n(Q,e(`当前实现会给`));let Et=i(`code`,Q);n(Q,Et),n(Et,e(`label`)),n(Q,e(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Dt=i(`code`,Q);n(Q,Dt),n(Dt,e(`[object Object]`)),n(Q,e(`，推荐把徽标、点状状态这类前缀放到`));let Ot=i(`code`,Q);n(Q,Ot),n(Ot,e(`icon`)),n(Q,e(`，把主要文案保留在`));let $=i(`code`,Q);return n(Q,$),n($,e(`label`)),n(Q,e(`。`)),r})}),p,_),p})};export{D as default};