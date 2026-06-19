import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,gt as c,l,nt as u,o as d,rt as f,t as p,tt as m,ut as h,yt as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as y,i as b}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as x}from"./Code-D5UqTwV6.js";import{t as S}from"./tabs-DRfs918f.js";import{r as C}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as w}from"./preview-test-gate-DuGL5287.js";var T=n=>l(i=>{let o=m(`div`,i);h(o,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let s=m(`div`,o);a(o,s),h(s,`text-xs uppercase tracking-[0.18em] opacity-60`);let l=e(`rue:slot:anchor`);a(s,l),t(()=>{let e=n.title;r(()=>d(e,s,l))});let u=m(`div`,o);a(o,u),h(u,`mt-2 text-2xl font-semibold`);let p=f(u);a(u,p),t(()=>{c(p,n.value)});let g=m(`div`,o);a(o,g),h(g,`mt-1 text-sm opacity-75`);let _=e(`rue:slot:anchor`);return a(g,_),t(()=>{let e=n.description;r(()=>d(e,g,_))}),o}),ee=n=>l(i=>{let c=m(`div`,i);h(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=m(`table`,c);a(c,f),h(f,`table table-zebra`);let p=m(`thead`,f);a(f,p);let g=m(`tr`,p);a(p,g);let _=m(`th`,g);a(g,_),a(_,u(`属性`));let y=m(`th`,g);a(g,y),a(y,u(`说明`));let b=m(`th`,g);a(g,b),a(b,u(`类型`));let x=m(`th`,g);a(g,x),a(x,u(`默认值`));let S=m(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,u,f)=>{d(l(()=>{let i=s(),c=m(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=m(`td`,c);a(c,l);let u=m(`code`,l);a(l,u);let f=e(`rue:slot:anchor`);a(u,f),t(()=>{let e=n.prop;r(()=>d(e,u,f))});let p=m(`td`,c);a(c,p);let h=e(`rue:slot:anchor`);a(p,h),t(()=>{let e=n.description;r(()=>d(e,p,h))});let g=m(`td`,c);a(c,g);let _=m(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>d(e,_,v))});let y=m(`td`,c);a(c,y);let b=m(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>d(e,b,x))}),i}),i,c)}})}),c}),E=o=>{let{tab:c,previewNode:f}=_(`useSetup:0:0`,()=>i(()=>({tab:_(`ref:1:0`,()=>n(`preview`)),previewNode:_(`computed:1:1`,()=>g(()=>Array.isArray(o.children)?o.children.find(e=>e!=null&&e!==``):o.children))})));return l(n=>{let i=m(`div`,n);h(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let g=m(`h2`,i);a(i,g),h(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=e(`rue:slot:anchor`);a(g,_),t(()=>{let e=o.title;r(()=>d(e,g,_))});let v=e(`rue:component:anchor`);a(i,v),t(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:c.value,onChange:e=>c.value=e,className:`mb-3`});r(()=>d(e,i,v))});let y=e(`rue:slot:anchor`);return a(i,y),t(()=>{let n=c.value===`preview`?w(o.title,f.get()):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:o.code});r(()=>d(e,n,i))}),n});r(()=>d(n,i,y))}),i})},te=String.raw`<Tabs
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，兼容 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],D=()=>{let{activeBasic:g,activeBorder:v,activeLift:x,activeBox:w,activeXs:D,activeSm:se,activeMd:ce,activeLg:le,activeXl:ue,activeBottom:de,activeDisabled:fe,activeCustom:pe,activeExtra:me,activeCentered:he,placementMode:O,activePlacementTab:ge,activeIndicator:_e,editableCounter:ve,editableActiveKey:ye,editableItems:be,handleEditableEdit:xe}=_(`useSetup:0:0:dup1`,()=>i(()=>{let e=_(`ref:1:2`,()=>n(`tab2`)),t=_(`ref:1:3`,()=>n(`tab2`)),r=_(`ref:1:4`,()=>n(`tab2`)),i=_(`ref:1:5`,()=>n(`tab2`)),a=_(`ref:1:6`,()=>n(`xs2`)),o=_(`ref:1:7`,()=>n(`sm2`)),s=_(`ref:1:8`,()=>n(`md2`)),c=_(`ref:1:9`,()=>n(`lg2`)),l=_(`ref:1:10`,()=>n(`xl2`)),u=_(`ref:1:11`,()=>n(`b2`)),d=_(`ref:1:12`,()=>n(`d2`)),f=_(`ref:1:13`,()=>n(`c2`)),p=_(`ref:1:14`,()=>n(`overview`)),m=_(`ref:1:15`,()=>n(`beta`)),h=_(`ref:1:16`,()=>n(`start`)),g=_(`ref:1:17`,()=>n(`design`)),v=_(`ref:1:18`,()=>n(`metrics`)),y=_(`ref:1:19`,()=>n(3)),b=_(`ref:1:20`,()=>n(`draft-2`)),x=_(`ref:1:21`,()=>n([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]));return{activeBasic:e,activeBorder:t,activeLift:r,activeBox:i,activeXs:a,activeSm:o,activeMd:s,activeLg:c,activeXl:l,activeBottom:u,activeDisabled:d,activeCustom:f,activeExtra:p,activeCentered:m,placementMode:h,activePlacementTab:g,activeIndicator:v,editableCounter:y,editableActiveKey:b,editableItems:x,handleEditableEdit:(e,t)=>{if(t===`add`){y.value+=1;let e=`draft-${y.value}`;x.value=[...x.value,{key:e,label:`Draft ${y.value}`,children:`这里是新建标签 ${y.value} 的上下文内容。`}],b.value=e;return}let n=String(e),r=x.value.filter(e=>e.key!==n);x.value=r,b.value===n&&(b.value=r[0]?.key??``)}}}));return l(n=>{let i=s(),_=e(`rue:component:anchor`);return a(i,_),d(p(C,{children:l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`max-w-none prose prose-sm md:prose-base`);let _=m(`h1`,i);a(i,_),a(_,u(`Tabs 选项卡`));let C=m(`p`,i);a(i,C),h(C,`text-sm mt-3 mb-3`),a(C,u(`Tabs 现在除了保留 Rue 当前的 box / border / lift 视觉，还补齐了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let ve=m(`h2`,i);a(i,ve),a(ve,u(`何时使用`));let k=m(`ul`,i);a(i,k);let Se=m(`li`,k);a(k,Se),a(Se,u(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let Ce=m(`li`,k);a(k,Ce),a(Ce,u(`既想保留 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let A=m(`div`,i);a(i,A),h(A,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let j=m(`div`,A);a(A,j),h(j,`rounded-box bg-base-200/50 p-3`);let M=m(`div`,j);a(j,M),h(M,`font-medium`),a(M,u(`受控与非受控`));let N=m(`div`,j);a(j,N),h(N,`mt-1 opacity-75`),a(N,u("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let P=m(`div`,A);a(A,P),h(P,`rounded-box bg-base-200/50 p-3`);let F=m(`div`,P);a(P,F),h(F,`font-medium`),a(F,u(`内容与布局`));let I=m(`div`,P);a(P,I),h(I,`mt-1 opacity-75`),a(I,u("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let L=m(`div`,A);a(A,L),h(L,`rounded-box bg-base-200/50 p-3`);let R=m(`div`,L);a(L,R),h(R,`font-medium`),a(R,u(`操作能力`));let z=m(`div`,L);a(L,z),h(z,`mt-1 opacity-75`),a(z,u("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let we=e(`rue:component:anchor`);a(i,we);let Te=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:g.value,onChange:e=>g.value=e});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Te});r(()=>d(e,i,we))});let Ee=e(`rue:component:anchor`);a(i,Ee);let De=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:v.value,onChange:e=>v.value=e});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:De});r(()=>d(e,i,Ee))});let Oe=e(`rue:component:anchor`);a(i,Oe);let ke=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:x.value,onChange:e=>x.value=e});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:ke});r(()=>d(e,i,Oe))});let Ae=e(`rue:component:anchor`);a(i,Ae);let je=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:w.value,onChange:e=>w.value=e});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:je});r(()=>d(e,i,Ae))});let Me=e(`rue:component:anchor`);a(i,Me);let Ne=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[b(T,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),b(T,{title:`QA`,value:`7`,description:`待验证缺陷`}),b(T,{title:`Review`,value:`3`,description:`待合并 PR`})]}),y(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[y(`div`,{className:`flex items-center justify-between`,children:[b(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),b(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),b(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),y(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[b(`span`,{children:`设计`}),b(`span`,{children:`联调`}),b(`span`,{children:`回归`}),b(`span`,{children:`发布`})]})]}),y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),y(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[b(`li`,{children:`锁定接口字段命名`}),b(`li`,{children:`同步埋点事件与告警阈值`}),b(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:y(`div`,{className:`space-y-3`,children:[y(`ul`,{className:`list gap-2`,children:[y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`10:15`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`14:35`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`16:20`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补齐埋点与告警配置。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`18:40`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),b(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:b(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:b(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>y(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[y(`div`,{className:`flex items-center justify-between`,children:[b(`div`,{className:`text-lg font-semibold`,children:e.label}),b(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),b(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`content-panels`,code:te,children:Ne});r(()=>d(e,i,Me))});let Pe=e(`rue:component:anchor`);a(i,Pe);let Fe=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{type:`card`,activeKey:me.value,onChange:e=>me.value=e,tabBarExtraContent:{left:b(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:b(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`tab-bar-extra-content`,code:ne,children:Fe});r(()=>d(e,i,Pe))});let Ie=e(`rue:component:anchor`);a(i,Ie);let Le=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{centered:!0,type:`line`,activeKey:he.value,onChange:e=>he.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Le});r(()=>d(e,i,Ie))});let Re=e(`rue:component:anchor`);a(i,Re);let ze=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm overflow-hidden`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{tabPlacement:O.value,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,className:`min-h-72`,tabBarExtraContent:{left:y(`div`,{className:`flex gap-2`,children:[b(`button`,{className:`btn btn-xs ${O.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`start`,children:`start`}),b(`button`,{className:`btn btn-xs ${O.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`tab-placement`,code:re,children:ze});r(()=>d(e,i,Re))});let Be=e(`rue:component:anchor`);a(i,Be);let Ve=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{type:`editable-card`,activeKey:ye.value,onChange:e=>ye.value=e,onEdit:xe,items:be.value});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`editable-card`,code:ie,children:Ve});r(()=>d(e,i,Be))});let He=e(`rue:component:anchor`);a(i,He);let Ue=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:Ue});r(()=>d(e,i,He))});let We=e(`rue:component:anchor`);a(i,We);let Ge=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=m(`div`,o);a(o,c),h(c,`flex flex-col items-center gap-6`);let l=e(`rue:component:anchor`);a(c,l),t(()=>{let e=p(S,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:D.value,onChange:e=>D.value=e});r(()=>d(e,c,l))});let u=e(`rue:component:anchor`);a(c,u),t(()=>{let e=p(S,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:se.value,onChange:e=>se.value=e});r(()=>d(e,c,u))});let f=e(`rue:component:anchor`);a(c,f),t(()=>{let e=p(S,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:ce.value,onChange:e=>ce.value=e});r(()=>d(e,c,f))});let g=e(`rue:component:anchor`);a(c,g),t(()=>{let e=p(S,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:le.value,onChange:e=>le.value=e});r(()=>d(e,c,g))});let _=e(`rue:component:anchor`);return a(c,_),t(()=>{let e=p(S,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:ue.value,onChange:e=>ue.value=e});r(()=>d(e,c,_))}),n});t(()=>{let e=p(E,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ge});r(()=>d(e,i,We))});let Ke=e(`rue:component:anchor`);a(i,Ke);let qe=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:de.value,onChange:e=>de.value=e});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:qe});r(()=>d(e,i,Ke))});let Je=e(`rue:component:anchor`);a(i,Je);let Ye=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:fe.value,onChange:e=>fe.value=e});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Ye});r(()=>d(e,i,Je))});let Xe=e(`rue:component:anchor`);a(i,Xe);let Ze=l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`card bg-base-100 shadow-sm`);let o=m(`div`,i);a(i,o),h(o,`card-body gap-4`);let c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(S,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:pe.value,onChange:e=>pe.value=e});r(()=>d(e,o,c))}),n});t(()=>{let e=p(E,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Ze});r(()=>d(e,i,Xe))});let B=m(`h2`,i);a(i,B),o(B,`id`,`tabs-api`),a(B,u(`API`));let Qe=m(`p`,i);a(i,Qe),a(Qe,u(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let $e=e(`rue:component:anchor`);a(i,$e),t(()=>{let e=p(ee,{rows:ae});r(()=>d(e,i,$e))});let et=m(`div`,i);a(i,et),h(et,`not-prose mt-6`);let tt=e(`rue:component:anchor`);a(i,tt),t(()=>{let e=p(ee,{rows:oe});r(()=>d(e,i,tt))});let V=m(`div`,i);a(i,V),h(V,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let H=m(`div`,V);a(V,H),h(H,`font-semibold`),a(H,u(`使用建议`));let U=m(`div`,V);a(V,U),h(U,`mt-2 grid gap-2 md:grid-cols-2`);let W=m(`div`,U);a(U,W);let nt=m(`code`,W);a(W,nt),a(nt,u(`activeKey + onChange`)),a(W,u(`适合和路由、筛选条件、外部状态统一联动。`));let G=m(`div`,U);a(U,G);let rt=m(`code`,G);a(G,rt),a(rt,u(`defaultActiveKey`)),a(G,u(`适合静态文档、局部 demo 或无需外部接管的轻交互场景。`));let K=m(`div`,U);a(U,K),a(K,u(`复杂标签头优先用`));let it=m(`code`,K);a(K,it),a(it,u(`icon`)),a(K,u(`+ 文本`));let at=m(`code`,K);a(K,at),a(at,u(`label`));let ot=f(K);a(K,ot),c(ot,` `),a(K,u(`组合，兼顾语义和稳定渲染。`));let q=m(`div`,U);a(U,q),a(q,u(`需要完整内容区域切换时给`));let st=m(`code`,q);a(q,st),a(st,u(`items.children`));let ct=f(q);a(q,ct),c(ct,` `),a(q,u(`传面板节点；只做导航标签时可以只传`));let lt=m(`code`,q);a(q,lt),a(lt,u(`label`)),a(q,u(`。`));let ut=m(`h2`,i);a(i,ut),a(ut,u(`FAQ`));let dt=m(`h3`,i);a(i,dt),a(dt,u(`activeKey 和 defaultActiveKey 怎么选？`));let J=m(`p`,i);a(i,J);let ft=m(`code`,J);a(J,ft),a(ft,u(`activeKey`)),a(J,u(`是受控模式，当前激活项由外部状态决定；`));let pt=m(`code`,J);a(J,pt),a(pt,u(`defaultActiveKey`)),a(J,u(`只设置初始值，后续切换由组件内部维护。`));let mt=m(`h3`,i);a(i,mt),a(mt,u(`style 和 type 会冲突吗？`));let Y=m(`p`,i);a(i,Y);let ht=m(`code`,Y);a(Y,ht),a(ht,u(`type`)),a(Y,u(`更偏语义能力，像`));let gt=m(`code`,Y);a(Y,gt),a(gt,u(`card`)),a(Y,u(`、`));let _t=m(`code`,Y);a(Y,_t),a(_t,u(`editable-card`));let vt=f(Y);a(Y,vt),c(vt,` `),a(Y,u(`会自动套用适合的视觉； 如果你明确传了`));let yt=m(`code`,Y);a(Y,yt),a(yt,u(`style`)),a(Y,u(`，就以显式样式为准。`));let bt=m(`h3`,i);a(i,bt),a(bt,u(`placement 和 tabPlacement 有什么区别？`));let X=m(`p`,i);a(i,X);let xt=m(`code`,X);a(X,xt),a(xt,u(`placement`)),a(X,u(`只覆盖上下位置；`));let Z=m(`code`,X);a(X,Z),a(Z,u(`tabPlacement`)),a(X,u(`额外支持`));let St=f(X);a(X,St),c(St,` `);let Ct=m(`code`,X);a(X,Ct),a(Ct,u(`start`)),a(X,u(`和`));let wt=m(`code`,X);a(X,wt),a(wt,u(`end`)),a(X,u(`两种垂直摆放，并且优先级更高。`));let Tt=m(`h3`,i);a(i,Tt),a(Tt,u(`为什么复杂 label 建议拆成 icon 和文本？`));let Q=m(`p`,i);a(i,Q),a(Q,u(`当前实现会给`));let Et=m(`code`,Q);a(Q,Et),a(Et,u(`label`)),a(Q,u(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Dt=m(`code`,Q);a(Q,Dt),a(Dt,u(`[object Object]`)),a(Q,u(`，推荐把徽标、点状状态这类前缀放到`));let Ot=m(`code`,Q);a(Q,Ot),a(Ot,u(`icon`)),a(Q,u(`，把主要文案保留在`));let $=m(`code`,Q);return a(Q,$),a($,u(`label`)),a(Q,u(`。`)),n})}),i,_),i})};export{D as default};