import{Cn as e,Ct as t,Lt as n,Mt as r,Tt as i,dt as a,ft as o,ht as s,mt as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{n as b,t as x}from"./src-CCTNpCXV.js";import{t as S}from"./tabs-B1XdBEJF.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as w}from"./preview-test-gate-DVT0twjZ.js";var T=e=>m(t=>{let n=u(`div`,t);i(n,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let o=u(`div`,n);d(n,o),i(o,`text-xs uppercase tracking-[0.18em] opacity-60`);let c=a(`rue:slot:anchor`);d(o,c),f(()=>{let t=e.title;p(()=>h(t,o,c))});let l=u(`div`,n);d(n,l),i(l,`mt-2 text-2xl font-semibold`);let m=s(l);d(l,m),f(()=>{r(m,e.value)});let g=u(`div`,n);d(n,g),i(g,`mt-1 text-sm opacity-75`);let _=a(`rue:slot:anchor`);return d(g,_),f(()=>{let t=e.description;p(()=>h(t,g,_))}),n}),ee=e=>m(n=>{let r=u(`div`,n);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,r);d(r,s),i(s,`table table-zebra`);let l=u(`thead`,s);d(s,l);let g=u(`tr`,l);d(l,g);let _=u(`th`,g);d(g,_),d(_,c(`属性`));let y=u(`th`,g);d(g,y),d(y,c(`说明`));let b=u(`th`,g);d(g,b),d(b,c(`类型`));let x=u(`th`,g);d(g,x),d(x,c(`默认值`));let S=u(`tbody`,s);d(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,s)=>{h(m(()=>{let n=o(),r=u(`tr`,n);d(n,r),f(()=>{t(r,`key`,String(e.prop))});let i=u(`td`,r);d(r,i);let s=u(`code`,i);d(i,s);let c=a(`rue:slot:anchor`);d(s,c),f(()=>{let t=e.prop;p(()=>h(t,s,c))});let l=u(`td`,r);d(r,l);let m=a(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>h(t,l,m))});let g=u(`td`,r);d(r,g);let _=u(`code`,g);d(g,_);let v=a(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>h(t,_,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=a(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>h(t,b,x))}),n}),n,r)}})}),r}),E=t=>{let{tab:r,previewNode:s}=_(`useSetup:0:0`,()=>e(()=>({tab:_(`ref:1:0`,()=>l(`preview`)),previewNode:_(`computed:1:1`,()=>n(()=>Array.isArray(t.children)?t.children.find(e=>e!=null&&e!==``):t.children))})));return m(e=>{let n=u(`div`,e);i(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=u(`h2`,n);d(n,l),i(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(l,c(`# `));let _=a(`rue:slot:anchor`);d(l,_),f(()=>{let e=t.title;p(()=>h(e,l,_))});let v=a(`rue:component:anchor`);d(n,v),f(()=>{let e=g(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.value,onChange:e=>r.value=e,className:`mb-3`});p(()=>h(e,n,v))});let b=a(`rue:slot:anchor`);return d(n,b),f(()=>{let e=r.value===`preview`?w(t.title,s.get()):m(()=>{let e=o(),n=a(`rue:component:anchor`);return d(e,n),f(()=>{let r=g(y,{className:`mt-2`,lang:`tsx`,code:t.code});p(()=>h(r,e,n))}),e});p(()=>h(e,n,b))}),n})},te=String.raw`<Tabs
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，支持 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],D=()=>{let{activeBasic:n,activeBorder:v,activeLift:y,activeBox:w,activeXs:D,activeSm:se,activeMd:ce,activeLg:le,activeXl:ue,activeBottom:de,activeDisabled:fe,activeCustom:pe,activeExtra:me,activeCentered:he,placementMode:O,activePlacementTab:ge,activeIndicator:_e,editableCounter:ve,editableActiveKey:ye,editableItems:be,handleEditableEdit:xe}=_(`useSetup:0:0:dup1`,()=>e(()=>{let e=_(`ref:1:2`,()=>l(`tab2`)),t=_(`ref:1:3`,()=>l(`tab2`)),n=_(`ref:1:4`,()=>l(`tab2`)),r=_(`ref:1:5`,()=>l(`tab2`)),i=_(`ref:1:6`,()=>l(`xs2`)),a=_(`ref:1:7`,()=>l(`sm2`)),o=_(`ref:1:8`,()=>l(`md2`)),s=_(`ref:1:9`,()=>l(`lg2`)),c=_(`ref:1:10`,()=>l(`xl2`)),u=_(`ref:1:11`,()=>l(`b2`)),d=_(`ref:1:12`,()=>l(`d2`)),f=_(`ref:1:13`,()=>l(`c2`)),p=_(`ref:1:14`,()=>l(`overview`)),m=_(`ref:1:15`,()=>l(`beta`)),h=_(`ref:1:16`,()=>l(`start`)),g=_(`ref:1:17`,()=>l(`design`)),v=_(`ref:1:18`,()=>l(`metrics`)),y=_(`ref:1:19`,()=>l(3)),b=_(`ref:1:20`,()=>l(`draft-2`)),x=_(`ref:1:21`,()=>l([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]));return{activeBasic:e,activeBorder:t,activeLift:n,activeBox:r,activeXs:i,activeSm:a,activeMd:o,activeLg:s,activeXl:c,activeBottom:u,activeDisabled:d,activeCustom:f,activeExtra:p,activeCentered:m,placementMode:h,activePlacementTab:g,activeIndicator:v,editableCounter:y,editableActiveKey:b,editableItems:x,handleEditableEdit:(e,t)=>{if(t===`add`){y.value+=1;let e=`draft-${y.value}`;x.value=[...x.value,{key:e,label:`Draft ${y.value}`,children:`这里是新建标签 ${y.value} 的上下文内容。`}],b.value=e;return}let n=String(e),r=x.value.filter(e=>e.key!==n);x.value=r,b.value===n&&(b.value=r[0]?.key??``)}}}));return m(e=>{let l=o(),_=a(`rue:component:anchor`);return d(l,_),h(g(C,{children:m(()=>{let e=o(),l=u(`div`,e);d(e,l),i(l,`max-w-none prose prose-sm md:prose-base`);let _=u(`h1`,l);d(l,_),d(_,c(`Tabs 选项卡`));let C=u(`p`,l);d(l,C),i(C,`text-sm mt-3 mb-3`),d(C,c(`Tabs 现在除了使用 Rue 当前的 box / border / lift 视觉，还提供了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let ve=u(`h2`,l);d(l,ve),d(ve,c(`何时使用`));let k=u(`ul`,l);d(l,k);let Se=u(`li`,k);d(k,Se),d(Se,c(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let Ce=u(`li`,k);d(k,Ce),d(Ce,c(`既想使用 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let A=u(`div`,l);d(l,A),i(A,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let j=u(`div`,A);d(A,j),i(j,`rounded-box bg-base-200/50 p-3`);let M=u(`div`,j);d(j,M),i(M,`font-medium`),d(M,c(`受控与非受控`));let N=u(`div`,j);d(j,N),i(N,`mt-1 opacity-75`),d(N,c("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let P=u(`div`,A);d(A,P),i(P,`rounded-box bg-base-200/50 p-3`);let F=u(`div`,P);d(P,F),i(F,`font-medium`),d(F,c(`内容与布局`));let I=u(`div`,P);d(P,I),i(I,`mt-1 opacity-75`),d(I,c("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let L=u(`div`,A);d(A,L),i(L,`rounded-box bg-base-200/50 p-3`);let R=u(`div`,L);d(L,R),i(R,`font-medium`),d(R,c(`操作能力`));let z=u(`div`,L);d(L,z),i(z,`mt-1 opacity-75`),d(z,c("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let we=a(`rue:component:anchor`);d(l,we);let Te=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let r=u(`div`,t);d(t,r),i(r,`card-body gap-4`);let s=a(`rue:component:anchor`);return d(r,s),f(()=>{let e=g(S,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:n.value,onChange:e=>n.value=e});p(()=>h(e,r,s))}),e});f(()=>{let e=g(E,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Te});p(()=>h(e,l,we))});let Ee=a(`rue:component:anchor`);d(l,Ee);let De=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:v.value,onChange:e=>v.value=e});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:De});p(()=>h(e,l,Ee))});let Oe=a(`rue:component:anchor`);d(l,Oe);let ke=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:y.value,onChange:e=>y.value=e});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:ke});p(()=>h(e,l,Oe))});let Ae=a(`rue:component:anchor`);d(l,Ae);let je=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:w.value,onChange:e=>w.value=e});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:je});p(()=>h(e,l,Ae))});let Me=a(`rue:component:anchor`);d(l,Me);let Ne=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[x(T,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),x(T,{title:`QA`,value:`7`,description:`待验证缺陷`}),x(T,{title:`Review`,value:`3`,description:`待合并 PR`})]}),b(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),x(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),x(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),b(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[x(`span`,{children:`设计`}),x(`span`,{children:`联调`}),x(`span`,{children:`回归`}),x(`span`,{children:`发布`})]})]}),b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),b(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[x(`li`,{children:`锁定接口字段命名`}),x(`li`,{children:`同步埋点事件与告警阈值`}),x(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:b(`div`,{className:`space-y-3`,children:[b(`ul`,{className:`list gap-2`,children:[b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`10:15`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`14:35`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`16:20`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补充埋点与告警配置。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`18:40`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),x(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:x(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:x(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>b(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-lg font-semibold`,children:e.label}),x(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),x(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`content-panels`,code:te,children:Ne});p(()=>h(e,l,Me))});let Pe=a(`rue:component:anchor`);d(l,Pe);let Fe=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{type:`card`,activeKey:me.value,onChange:e=>me.value=e,tabBarExtraContent:{left:x(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:x(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`tab-bar-extra-content`,code:ne,children:Fe});p(()=>h(e,l,Pe))});let Ie=a(`rue:component:anchor`);d(l,Ie);let Le=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{centered:!0,type:`line`,activeKey:he.value,onChange:e=>he.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Le});p(()=>h(e,l,Ie))});let Re=a(`rue:component:anchor`);d(l,Re);let ze=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm overflow-hidden`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{tabPlacement:O.value,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,className:`min-h-72`,tabBarExtraContent:{left:b(`div`,{className:`flex gap-2`,children:[x(`button`,{className:`btn btn-xs ${O.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`start`,children:`start`}),x(`button`,{className:`btn btn-xs ${O.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`tab-placement`,code:re,children:ze});p(()=>h(e,l,Re))});let Be=a(`rue:component:anchor`);d(l,Be);let Ve=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{type:`editable-card`,activeKey:ye.value,onChange:e=>ye.value=e,onEdit:xe,items:be.value});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`editable-card`,code:ie,children:Ve});p(()=>h(e,l,Be))});let He=a(`rue:component:anchor`);d(l,He);let Ue=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:Ue});p(()=>h(e,l,He))});let We=a(`rue:component:anchor`);d(l,We);let Ge=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=u(`div`,n);d(n,r),i(r,`flex flex-col items-center gap-6`);let s=a(`rue:component:anchor`);d(r,s),f(()=>{let e=g(S,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:D.value,onChange:e=>D.value=e});p(()=>h(e,r,s))});let c=a(`rue:component:anchor`);d(r,c),f(()=>{let e=g(S,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:se.value,onChange:e=>se.value=e});p(()=>h(e,r,c))});let l=a(`rue:component:anchor`);d(r,l),f(()=>{let e=g(S,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:ce.value,onChange:e=>ce.value=e});p(()=>h(e,r,l))});let m=a(`rue:component:anchor`);d(r,m),f(()=>{let e=g(S,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:le.value,onChange:e=>le.value=e});p(()=>h(e,r,m))});let _=a(`rue:component:anchor`);return d(r,_),f(()=>{let e=g(S,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:ue.value,onChange:e=>ue.value=e});p(()=>h(e,r,_))}),e});f(()=>{let e=g(E,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ge});p(()=>h(e,l,We))});let Ke=a(`rue:component:anchor`);d(l,Ke);let qe=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:de.value,onChange:e=>de.value=e});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:qe});p(()=>h(e,l,Ke))});let Je=a(`rue:component:anchor`);d(l,Je);let Ye=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:fe.value,onChange:e=>fe.value=e});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Ye});p(()=>h(e,l,Je))});let Xe=a(`rue:component:anchor`);d(l,Xe);let Ze=m(()=>{let e=o(),t=u(`div`,e);d(e,t),i(t,`card bg-base-100 shadow-sm`);let n=u(`div`,t);d(t,n),i(n,`card-body gap-4`);let r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(S,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:pe.value,onChange:e=>pe.value=e});p(()=>h(e,n,r))}),e});f(()=>{let e=g(E,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Ze});p(()=>h(e,l,Xe))});let B=u(`h2`,l);d(l,B),t(B,`id`,`tabs-api`),d(B,c(`API`));let Qe=u(`p`,l);d(l,Qe),d(Qe,c(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let $e=a(`rue:component:anchor`);d(l,$e),f(()=>{let e=g(ee,{rows:ae});p(()=>h(e,l,$e))});let et=u(`div`,l);d(l,et),i(et,`not-prose mt-6`);let tt=a(`rue:component:anchor`);d(l,tt),f(()=>{let e=g(ee,{rows:oe});p(()=>h(e,l,tt))});let V=u(`div`,l);d(l,V),i(V,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let H=u(`div`,V);d(V,H),i(H,`font-semibold`),d(H,c(`使用建议`));let U=u(`div`,V);d(V,U),i(U,`mt-2 grid gap-2 md:grid-cols-2`);let W=u(`div`,U);d(U,W);let nt=u(`code`,W);d(W,nt),d(nt,c(`activeKey + onChange`)),d(W,c(`适合和路由、筛选条件、外部状态统一联动。`));let G=u(`div`,U);d(U,G);let rt=u(`code`,G);d(G,rt),d(rt,c(`defaultActiveKey`)),d(G,c(`适合静态文档、局部示例 或无需外部接管的轻交互场景。`));let K=u(`div`,U);d(U,K),d(K,c(`复杂标签头优先用`));let it=u(`code`,K);d(K,it),d(it,c(`icon`)),d(K,c(`+ 文本`));let at=u(`code`,K);d(K,at),d(at,c(`label`));let ot=s(K);d(K,ot),r(ot,` `),d(K,c(`组合，兼顾语义和稳定渲染。`));let q=u(`div`,U);d(U,q),d(q,c(`需要完整内容区域切换时给`));let st=u(`code`,q);d(q,st),d(st,c(`items.children`));let ct=s(q);d(q,ct),r(ct,` `),d(q,c(`传面板节点；只做导航标签时可以只传`));let lt=u(`code`,q);d(q,lt),d(lt,c(`label`)),d(q,c(`。`));let ut=u(`h2`,l);d(l,ut),d(ut,c(`FAQ`));let dt=u(`h3`,l);d(l,dt),d(dt,c(`activeKey 和 defaultActiveKey 怎么选？`));let J=u(`p`,l);d(l,J);let ft=u(`code`,J);d(J,ft),d(ft,c(`activeKey`)),d(J,c(`是受控模式，当前激活项由外部状态决定；`));let pt=u(`code`,J);d(J,pt),d(pt,c(`defaultActiveKey`)),d(J,c(`只设置初始值，后续切换由组件内部维护。`));let mt=u(`h3`,l);d(l,mt),d(mt,c(`style 和 type 会冲突吗？`));let Y=u(`p`,l);d(l,Y);let ht=u(`code`,Y);d(Y,ht),d(ht,c(`type`)),d(Y,c(`更偏语义能力，像`));let gt=u(`code`,Y);d(Y,gt),d(gt,c(`card`)),d(Y,c(`、`));let _t=u(`code`,Y);d(Y,_t),d(_t,c(`editable-card`));let vt=s(Y);d(Y,vt),r(vt,` `),d(Y,c(`会自动套用适合的视觉； 如果你明确传了`));let yt=u(`code`,Y);d(Y,yt),d(yt,c(`style`)),d(Y,c(`，就以显式样式为准。`));let bt=u(`h3`,l);d(l,bt),d(bt,c(`placement 和 tabPlacement 有什么区别？`));let X=u(`p`,l);d(l,X);let xt=u(`code`,X);d(X,xt),d(xt,c(`placement`)),d(X,c(`只覆盖上下位置；`));let Z=u(`code`,X);d(X,Z),d(Z,c(`tabPlacement`)),d(X,c(`额外支持`));let St=s(X);d(X,St),r(St,` `);let Ct=u(`code`,X);d(X,Ct),d(Ct,c(`start`)),d(X,c(`和`));let wt=u(`code`,X);d(X,wt),d(wt,c(`end`)),d(X,c(`两种垂直摆放，并且优先级更高。`));let Tt=u(`h3`,l);d(l,Tt),d(Tt,c(`为什么复杂 label 建议拆成 icon 和文本？`));let Q=u(`p`,l);d(l,Q),d(Q,c(`当前组件会给`));let Et=u(`code`,Q);d(Q,Et),d(Et,c(`label`)),d(Q,c(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Dt=u(`code`,Q);d(Q,Dt),d(Dt,c(`[object Object]`)),d(Q,c(`，推荐把徽标、点状状态这类前缀放到`));let Ot=u(`code`,Q);d(Q,Ot),d(Ot,c(`icon`)),d(Q,c(`，把主要文案保持在`));let $=u(`code`,Q);return d(Q,$),d($,c(`label`)),d(Q,c(`。`)),e})}),l,_),l})};export{D as default};