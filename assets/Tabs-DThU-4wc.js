import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,at as u,bt as d,c as f,gt as p,lt as m,pt as h,t as g,u as _}from"./vapor-runtime-D3a-68js.js";import{a as v,n as y}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as b,t as x}from"./src-BfQKH6_d.js";import{n as S}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as C}from"./Code-2C2psoH3.js";import{t as w}from"./tabs-BgQmsOey.js";var T=e=>_(()=>{let r=n(`div`);t(r,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let s=n(`div`);i(r,s),t(s,`text-xs uppercase tracking-[0.18em] opacity-60`);let l=a(`rue:slot:anchor`);i(s,l),d(()=>{let t=e.title;h(()=>f(t,s,l))});let u=n(`div`);i(r,u),t(u,`mt-2 text-2xl font-semibold`);let p=o(u);i(u,p),d(()=>{c(p,e.value)});let m=n(`div`);i(r,m),t(m,`mt-1 text-sm opacity-75`);let g=a(`rue:slot:anchor`);return i(m,g),d(()=>{let t=e.description;h(()=>f(t,m,g))}),r}),ee=o=>_(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let u=n(`thead`);i(l,u);let p=n(`tr`);i(u,p);let m=n(`th`);i(p,m),i(m,r(`属性`));let g=n(`th`);i(p,g),i(g,r(`说明`));let v=n(`th`);i(p,v),i(v,r(`类型`));let b=n(`th`);i(p,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return d(()=>{w=y({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{f(_(()=>{let r=e(),o=n(`tr`);i(r,o),d(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let u=a(`rue:slot:anchor`);i(l,u),d(()=>{let e=t.prop;h(()=>f(e,l,u))});let p=n(`td`);i(o,p);let m=a(`rue:slot:anchor`);i(p,m),d(()=>{let e=t.description;h(()=>f(e,p,m))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),d(()=>{let e=t.type;h(()=>f(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),d(()=>{let e=t.defaultValue;h(()=>f(e,b,x))}),r}),r,o)}})}),c}),E=o=>{let{tabRef:s,tab:c,previewNode:y}=v(`useSetup:0:0`,()=>l(()=>{let e=v(`useRef:1:0`,()=>p());return e.current||=v(`ref:1:1`,()=>m(`preview`)),{tabRef:e,tab:e.current,previewNode:v(`computed:1:2`,()=>u(()=>Array.isArray(o.children)?o.children.find(e=>e!=null&&e!==``):o.children))}}));return _(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=n(`h2`);i(s,l),t(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(l,r(`# `));let u=a(`rue:slot:anchor`);i(l,u),d(()=>{let e=o.title;h(()=>f(e,l,u))});let p=a(`rue:component:anchor`);i(s,p),d(()=>{let e=g(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:c.value,onChange:e=>c.value=e,className:`mb-3`});h(()=>f(e,s,p))});let m=a(`rue:slot:anchor`);return i(s,m),d(()=>{let t=c.value===`preview`?y.get():_(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),d(()=>{let e=g(C,{className:`mt-2`,lang:`tsx`,code:o.code});h(()=>f(e,t,n))}),t});h(()=>f(t,s,m))}),s})},te=String.raw`<Tabs
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，兼容 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],D=()=>{let{stateRef:u,activeBasic:y,activeBorder:C,activeLift:D,activeBox:se,activeXs:ce,activeSm:le,activeMd:ue,activeLg:de,activeXl:fe,activeBottom:pe,activeDisabled:me,activeCustom:he,activeExtra:ge,activeCentered:_e,placementMode:O,activePlacementTab:ve,activeIndicator:ye,editableCounter:be,editableActiveKey:xe,editableItems:Se,handleEditableEdit:Ce}=v(`useSetup:0:0:dup1`,()=>l(()=>{let e=v(`useRef:1:3`,()=>p());e.current||={activeBasic:v(`ref:1:4`,()=>m(`tab2`)),activeBorder:v(`ref:1:5`,()=>m(`tab2`)),activeLift:v(`ref:1:6`,()=>m(`tab2`)),activeBox:v(`ref:1:7`,()=>m(`tab2`)),activeXs:v(`ref:1:8`,()=>m(`xs2`)),activeSm:v(`ref:1:9`,()=>m(`sm2`)),activeMd:v(`ref:1:10`,()=>m(`md2`)),activeLg:v(`ref:1:11`,()=>m(`lg2`)),activeXl:v(`ref:1:12`,()=>m(`xl2`)),activeBottom:v(`ref:1:13`,()=>m(`b2`)),activeDisabled:v(`ref:1:14`,()=>m(`d2`)),activeCustom:v(`ref:1:15`,()=>m(`c2`)),activeExtra:v(`ref:1:16`,()=>m(`overview`)),activeCentered:v(`ref:1:17`,()=>m(`beta`)),placementMode:v(`ref:1:18`,()=>m(`start`)),activePlacementTab:v(`ref:1:19`,()=>m(`design`)),activeIndicator:v(`ref:1:20`,()=>m(`metrics`)),editableCounter:v(`ref:1:21`,()=>m(3)),editableActiveKey:v(`ref:1:22`,()=>m(`draft-2`)),editableItems:v(`ref:1:23`,()=>m([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]))};let t=e.current.activeBasic,n=e.current.activeBorder,r=e.current.activeLift,i=e.current.activeBox,a=e.current.activeXs,o=e.current.activeSm,s=e.current.activeMd,c=e.current.activeLg,l=e.current.activeXl,u=e.current.activeBottom,d=e.current.activeDisabled,f=e.current.activeCustom,h=e.current.activeExtra,g=e.current.activeCentered,_=e.current.placementMode,y=e.current.activePlacementTab,b=e.current.activeIndicator,x=e.current.editableCounter,S=e.current.editableActiveKey,C=e.current.editableItems;return{stateRef:e,activeBasic:t,activeBorder:n,activeLift:r,activeBox:i,activeXs:a,activeSm:o,activeMd:s,activeLg:c,activeXl:l,activeBottom:u,activeDisabled:d,activeCustom:f,activeExtra:h,activeCentered:g,placementMode:_,activePlacementTab:y,activeIndicator:b,editableCounter:x,editableActiveKey:S,editableItems:C,handleEditableEdit:(e,t)=>{if(t===`add`){x.value+=1;let e=`draft-${x.value}`;C.value=[...C.value,{key:e,label:`Draft ${x.value}`,children:`这里是新建标签 ${x.value} 的上下文内容。`}],S.value=e;return}let n=String(e),r=C.value.filter(e=>e.key!==n);C.value=r,S.value===n&&(S.value=r[0]?.key??``)}}}));return _(()=>{let l=e(),u=a(`rue:component:anchor`);return i(l,u),f(g(S,{children:_(()=>{let l=e(),u=n(`div`);i(l,u),t(u,`max-w-none prose prose-sm md:prose-base`);let p=n(`h1`);i(u,p),i(p,r(`Tabs 选项卡`));let m=n(`p`);i(u,m),t(m,`text-sm mt-3 mb-3`),i(m,r(`Tabs 现在除了保留 Rue 当前的 box / border / lift 视觉，还补齐了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let v=n(`div`);i(u,v),t(v,`text-sm`);let S=n(`a`);i(v,S),s(S,`href`,`https://daisyui.com/components/tab/`),s(S,`target`,`_blank`),i(S,r(`查看 Tabs 静态样式`));let be=n(`h2`);i(u,be),i(be,r(`何时使用`));let k=n(`ul`);i(u,k);let A=n(`li`);i(k,A),i(A,r(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let we=n(`li`);i(k,we),i(we,r(`既想保留 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let j=n(`div`);i(u,j),t(j,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let M=n(`div`);i(j,M),t(M,`rounded-box bg-base-200/50 p-3`);let N=n(`div`);i(M,N),t(N,`font-medium`),i(N,r(`受控与非受控`));let P=n(`div`);i(M,P),t(P,`mt-1 opacity-75`),i(P,r("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let F=n(`div`);i(j,F),t(F,`rounded-box bg-base-200/50 p-3`);let I=n(`div`);i(F,I),t(I,`font-medium`),i(I,r(`内容与布局`));let L=n(`div`);i(F,L),t(L,`mt-1 opacity-75`),i(L,r("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let R=n(`div`);i(j,R),t(R,`rounded-box bg-base-200/50 p-3`);let z=n(`div`);i(R,z),t(z,`font-medium`),i(z,r(`操作能力`));let B=n(`div`);i(R,B),t(B,`mt-1 opacity-75`),i(B,r("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let Te=a(`rue:component:anchor`);i(u,Te);let Ee=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:y.value,onChange:e=>y.value=e});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Ee});h(()=>f(e,u,Te))});let De=a(`rue:component:anchor`);i(u,De);let Oe=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:C.value,onChange:e=>C.value=e});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:Oe});h(()=>f(e,u,De))});let ke=a(`rue:component:anchor`);i(u,ke);let Ae=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:D.value,onChange:e=>D.value=e});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:Ae});h(()=>f(e,u,ke))});let je=a(`rue:component:anchor`);i(u,je);let Me=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:se.value,onChange:e=>se.value=e});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:Me});h(()=>f(e,u,je))});let Ne=a(`rue:component:anchor`);i(u,Ne);let Pe=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[x(T,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),x(T,{title:`QA`,value:`7`,description:`待验证缺陷`}),x(T,{title:`Review`,value:`3`,description:`待合并 PR`})]}),b(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),x(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),x(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),b(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[x(`span`,{children:`设计`}),x(`span`,{children:`联调`}),x(`span`,{children:`回归`}),x(`span`,{children:`发布`})]})]}),b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),b(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[x(`li`,{children:`锁定接口字段命名`}),x(`li`,{children:`同步埋点事件与告警阈值`}),x(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:b(`div`,{className:`space-y-3`,children:[b(`ul`,{className:`list gap-2`,children:[b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`10:15`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`14:35`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`16:20`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补齐埋点与告警配置。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`18:40`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),x(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:x(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:x(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>b(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-lg font-semibold`,children:e.label}),x(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),x(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`content-panels`,code:te,children:Pe});h(()=>f(e,u,Ne))});let Fe=a(`rue:component:anchor`);i(u,Fe);let Ie=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{type:`card`,activeKey:ge.value,onChange:e=>ge.value=e,tabBarExtraContent:{left:x(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:x(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`tab-bar-extra-content`,code:ne,children:Ie});h(()=>f(e,u,Fe))});let Le=a(`rue:component:anchor`);i(u,Le);let Re=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{centered:!0,type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Re});h(()=>f(e,u,Le))});let ze=a(`rue:component:anchor`);i(u,ze);let Be=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm overflow-hidden`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{tabPlacement:O.value,type:`line`,activeKey:ve.value,onChange:e=>ve.value=e,className:`min-h-72`,tabBarExtraContent:{left:b(`div`,{className:`flex gap-2`,children:[x(`button`,{className:`btn btn-xs ${O.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`start`,children:`start`}),x(`button`,{className:`btn btn-xs ${O.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`tab-placement`,code:re,children:Be});h(()=>f(e,u,ze))});let Ve=a(`rue:component:anchor`);i(u,Ve);let He=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{type:`editable-card`,activeKey:xe.value,onChange:e=>xe.value=e,onEdit:Ce,items:Se.value});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`editable-card`,code:ie,children:He});h(()=>f(e,u,Ve))});let Ue=a(`rue:component:anchor`);i(u,Ue);let We=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{type:`line`,activeKey:ye.value,onChange:e=>ye.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:We});h(()=>f(e,u,Ue))});let Ge=a(`rue:component:anchor`);i(u,Ge);let Ke=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=n(`div`);i(s,c),t(c,`flex flex-col items-center gap-6`);let l=a(`rue:component:anchor`);i(c,l),d(()=>{let e=g(w,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:ce.value,onChange:e=>ce.value=e});h(()=>f(e,c,l))});let u=a(`rue:component:anchor`);i(c,u),d(()=>{let e=g(w,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:le.value,onChange:e=>le.value=e});h(()=>f(e,c,u))});let p=a(`rue:component:anchor`);i(c,p),d(()=>{let e=g(w,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:ue.value,onChange:e=>ue.value=e});h(()=>f(e,c,p))});let m=a(`rue:component:anchor`);i(c,m),d(()=>{let e=g(w,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:de.value,onChange:e=>de.value=e});h(()=>f(e,c,m))});let _=a(`rue:component:anchor`);return i(c,_),d(()=>{let e=g(w,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:fe.value,onChange:e=>fe.value=e});h(()=>f(e,c,_))}),r});d(()=>{let e=g(E,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ke});h(()=>f(e,u,Ge))});let qe=a(`rue:component:anchor`);i(u,qe);let Je=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:pe.value,onChange:e=>pe.value=e});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:Je});h(()=>f(e,u,qe))});let Ye=a(`rue:component:anchor`);i(u,Ye);let Xe=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:me.value,onChange:e=>me.value=e});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Xe});h(()=>f(e,u,Ye))});let Ze=a(`rue:component:anchor`);i(u,Ze);let Qe=_(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow-sm`);let s=n(`div`);i(o,s),t(s,`card-body gap-4`);let c=a(`rue:component:anchor`);return i(s,c),d(()=>{let e=g(w,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:he.value,onChange:e=>he.value=e});h(()=>f(e,s,c))}),r});d(()=>{let e=g(E,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Qe});h(()=>f(e,u,Ze))});let V=n(`h2`);i(u,V),s(V,`id`,`tabs-api`),i(V,r(`API`));let $e=n(`p`);i(u,$e),i($e,r(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let et=a(`rue:component:anchor`);i(u,et),d(()=>{let e=g(ee,{rows:ae});h(()=>f(e,u,et))});let tt=n(`div`);i(u,tt),t(tt,`not-prose mt-6`);let nt=a(`rue:component:anchor`);i(u,nt),d(()=>{let e=g(ee,{rows:oe});h(()=>f(e,u,nt))});let H=n(`div`);i(u,H),t(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=n(`div`);i(H,U),t(U,`font-semibold`),i(U,r(`使用建议`));let W=n(`div`);i(H,W),t(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=n(`div`);i(W,G);let rt=n(`code`);i(G,rt),i(rt,r(`activeKey + onChange`)),i(G,r(`适合和路由、筛选条件、外部状态统一联动。`));let K=n(`div`);i(W,K);let it=n(`code`);i(K,it),i(it,r(`defaultActiveKey`)),i(K,r(`适合静态文档、局部 demo 或无需外部接管的轻交互场景。`));let q=n(`div`);i(W,q),i(q,r(`复杂标签头优先用`));let at=n(`code`);i(q,at),i(at,r(`icon`)),i(q,r(`+ 文本`));let ot=n(`code`);i(q,ot),i(ot,r(`label`));let st=o(q);i(q,st),c(st,` `),i(q,r(`组合，兼顾语义和稳定渲染。`));let J=n(`div`);i(W,J),i(J,r(`需要完整内容区域切换时给`));let ct=n(`code`);i(J,ct),i(ct,r(`items.children`));let lt=o(J);i(J,lt),c(lt,` `),i(J,r(`传面板节点；只做导航标签时可以只传`));let ut=n(`code`);i(J,ut),i(ut,r(`label`)),i(J,r(`。`));let dt=n(`h2`);i(u,dt),i(dt,r(`FAQ`));let ft=n(`h3`);i(u,ft),i(ft,r(`activeKey 和 defaultActiveKey 怎么选？`));let Y=n(`p`);i(u,Y);let pt=n(`code`);i(Y,pt),i(pt,r(`activeKey`)),i(Y,r(`是受控模式，当前激活项由外部状态决定；`));let mt=n(`code`);i(Y,mt),i(mt,r(`defaultActiveKey`)),i(Y,r(`只设置初始值，后续切换由组件内部维护。`));let ht=n(`h3`);i(u,ht),i(ht,r(`style 和 type 会冲突吗？`));let X=n(`p`);i(u,X);let gt=n(`code`);i(X,gt),i(gt,r(`type`)),i(X,r(`更偏语义能力，像`));let _t=n(`code`);i(X,_t),i(_t,r(`card`)),i(X,r(`、`));let vt=n(`code`);i(X,vt),i(vt,r(`editable-card`));let yt=o(X);i(X,yt),c(yt,` `),i(X,r(`会自动套用适合的视觉； 如果你明确传了`));let bt=n(`code`);i(X,bt),i(bt,r(`style`)),i(X,r(`，就以显式样式为准。`));let xt=n(`h3`);i(u,xt),i(xt,r(`placement 和 tabPlacement 有什么区别？`));let Z=n(`p`);i(u,Z);let St=n(`code`);i(Z,St),i(St,r(`placement`)),i(Z,r(`只覆盖上下位置；`));let Ct=n(`code`);i(Z,Ct),i(Ct,r(`tabPlacement`)),i(Z,r(`额外支持`));let wt=o(Z);i(Z,wt),c(wt,` `);let Tt=n(`code`);i(Z,Tt),i(Tt,r(`start`)),i(Z,r(`和`));let Et=n(`code`);i(Z,Et),i(Et,r(`end`)),i(Z,r(`两种垂直摆放，并且优先级更高。`));let Q=n(`h3`);i(u,Q),i(Q,r(`为什么复杂 label 建议拆成 icon 和文本？`));let $=n(`p`);i(u,$),i($,r(`当前实现会给`));let Dt=n(`code`);i($,Dt),i(Dt,r(`label`)),i($,r(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Ot=n(`code`);i($,Ot),i(Ot,r(`[object Object]`)),i($,r(`，推荐把徽标、点状状态这类前缀放到`));let kt=n(`code`);i($,kt),i(kt,r(`icon`)),i($,r(`，把主要文案保留在`));let At=n(`code`);return i($,At),i(At,r(`label`)),i($,r(`。`)),l})}),l,u),l})};export{D as default};