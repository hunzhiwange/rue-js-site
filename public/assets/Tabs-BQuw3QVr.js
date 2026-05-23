import{$ as e,Et as t,G as n,H as r,J as i,K as a,Tt as o,W as s,_t as c,d as l,dt as u,kt as d,l as f,q as p,st as m,t as h,tt as g,xt as _}from"./vapor-runtime-BAZOdMd8.js";import{a as v,n as y}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as b,t as x}from"./src-DZJ4J6sD.js";import{n as S}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as C}from"./Code-DY4Ua5uc.js";import{t as w}from"./tabs-Casd077O.js";var T=e=>l(t=>{let n=a(`div`,t);g(n,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let o=a(`div`,n);r(n,o),g(o,`text-xs uppercase tracking-[0.18em] opacity-60`);let c=s(`rue:slot:anchor`);r(o,c),d(()=>{let t=e.title;_(()=>f(t,o,c))});let l=a(`div`,n);r(n,l),g(l,`mt-2 text-2xl font-semibold`);let u=i(l);r(l,u),d(()=>{m(u,e.value)});let p=a(`div`,n);r(n,p),g(p,`mt-1 text-sm opacity-75`);let h=s(`rue:slot:anchor`);return r(p,h),d(()=>{let t=e.description;_(()=>f(t,p,h))}),n}),E=t=>l(i=>{let o=a(`div`,i);g(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=a(`table`,o);r(o,c),g(c,`table table-zebra`);let u=a(`thead`,c);r(c,u);let m=a(`tr`,u);r(u,m);let h=a(`th`,m);r(m,h),r(h,p(`属性`));let v=a(`th`,m);r(m,v),r(v,p(`说明`));let b=a(`th`,m);r(m,b),r(b,p(`类型`));let x=a(`th`,m);r(m,x),r(x,p(`默认值`));let S=a(`tbody`,c);r(c,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return d(()=>{T=y({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,o,c,u)=>{f(l(()=>{let i=n(),o=a(`tr`,i);r(i,o),d(()=>{e(o,`key`,String(t.prop))});let c=a(`td`,o);r(o,c);let l=a(`code`,c);r(c,l);let u=s(`rue:slot:anchor`);r(l,u),d(()=>{let e=t.prop;_(()=>f(e,l,u))});let p=a(`td`,o);r(o,p);let m=s(`rue:slot:anchor`);r(p,m),d(()=>{let e=t.description;_(()=>f(e,p,m))});let h=a(`td`,o);r(o,h);let g=a(`code`,h);r(h,g);let v=s(`rue:slot:anchor`);r(g,v),d(()=>{let e=t.type;_(()=>f(e,g,v))});let y=a(`td`,o);r(o,y);let b=a(`code`,y);r(y,b);let x=s(`rue:slot:anchor`);return r(b,x),d(()=>{let e=t.defaultValue;_(()=>f(e,b,x))}),i}),i,o)}})}),o}),D=e=>{let{tabRef:i,tab:m,previewNode:y}=v(`useSetup:0:0`,()=>t(()=>{let t=v(`useRef:1:0`,()=>o());return t.current||=v(`ref:1:1`,()=>c(`preview`)),{tabRef:t,tab:t.current,previewNode:v(`computed:1:2`,()=>u(()=>Array.isArray(e.children)?e.children.find(e=>e!=null&&e!==``):e.children))}}));return l(t=>{let i=a(`div`,t);g(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=a(`h2`,i);r(i,o),g(o,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(o,p(`# `));let c=s(`rue:slot:anchor`);r(o,c),d(()=>{let t=e.title;_(()=>f(t,o,c))});let u=s(`rue:component:anchor`);r(i,u),d(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3`});_(()=>f(e,i,u))});let v=s(`rue:slot:anchor`);return r(i,v),d(()=>{let t=m.value===`preview`?y.get():l(()=>{let t=n(),i=s(`rue:component:anchor`);return r(t,i),d(()=>{let n=h(C,{className:`mt-2`,lang:`tsx`,code:e.code});_(()=>f(n,t,i))}),t});_(()=>f(t,i,v))}),i})},ee=String.raw`<Tabs
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
/>`,te=String.raw`const activeKey = ref('overview')

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
/>`,ne=String.raw`const placementMode = ref<'start' | 'end'>('start')
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
/>`,re=String.raw`const editableCounter = ref(3)
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
/>`,ie=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，兼容 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],ae=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],O=()=>{let{stateRef:u,activeBasic:y,activeBorder:C,activeLift:O,activeBox:oe,activeXs:se,activeSm:ce,activeMd:le,activeLg:ue,activeXl:de,activeBottom:fe,activeDisabled:pe,activeCustom:me,activeExtra:he,activeCentered:ge,placementMode:k,activePlacementTab:_e,activeIndicator:ve,editableCounter:ye,editableActiveKey:be,editableItems:xe,handleEditableEdit:Se}=v(`useSetup:0:0:dup1`,()=>t(()=>{let e=v(`useRef:1:3`,()=>o());e.current||={activeBasic:v(`ref:1:4`,()=>c(`tab2`)),activeBorder:v(`ref:1:5`,()=>c(`tab2`)),activeLift:v(`ref:1:6`,()=>c(`tab2`)),activeBox:v(`ref:1:7`,()=>c(`tab2`)),activeXs:v(`ref:1:8`,()=>c(`xs2`)),activeSm:v(`ref:1:9`,()=>c(`sm2`)),activeMd:v(`ref:1:10`,()=>c(`md2`)),activeLg:v(`ref:1:11`,()=>c(`lg2`)),activeXl:v(`ref:1:12`,()=>c(`xl2`)),activeBottom:v(`ref:1:13`,()=>c(`b2`)),activeDisabled:v(`ref:1:14`,()=>c(`d2`)),activeCustom:v(`ref:1:15`,()=>c(`c2`)),activeExtra:v(`ref:1:16`,()=>c(`overview`)),activeCentered:v(`ref:1:17`,()=>c(`beta`)),placementMode:v(`ref:1:18`,()=>c(`start`)),activePlacementTab:v(`ref:1:19`,()=>c(`design`)),activeIndicator:v(`ref:1:20`,()=>c(`metrics`)),editableCounter:v(`ref:1:21`,()=>c(3)),editableActiveKey:v(`ref:1:22`,()=>c(`draft-2`)),editableItems:v(`ref:1:23`,()=>c([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]))};let t=e.current.activeBasic,n=e.current.activeBorder,r=e.current.activeLift,i=e.current.activeBox,a=e.current.activeXs,s=e.current.activeSm,l=e.current.activeMd,u=e.current.activeLg,d=e.current.activeXl,f=e.current.activeBottom,p=e.current.activeDisabled,m=e.current.activeCustom,h=e.current.activeExtra,g=e.current.activeCentered,_=e.current.placementMode,y=e.current.activePlacementTab,b=e.current.activeIndicator,x=e.current.editableCounter,S=e.current.editableActiveKey,C=e.current.editableItems;return{stateRef:e,activeBasic:t,activeBorder:n,activeLift:r,activeBox:i,activeXs:a,activeSm:s,activeMd:l,activeLg:u,activeXl:d,activeBottom:f,activeDisabled:p,activeCustom:m,activeExtra:h,activeCentered:g,placementMode:_,activePlacementTab:y,activeIndicator:b,editableCounter:x,editableActiveKey:S,editableItems:C,handleEditableEdit:(e,t)=>{if(t===`add`){x.value+=1;let e=`draft-${x.value}`;C.value=[...C.value,{key:e,label:`Draft ${x.value}`,children:`这里是新建标签 ${x.value} 的上下文内容。`}],S.value=e;return}let n=String(e),r=C.value.filter(e=>e.key!==n);C.value=r,S.value===n&&(S.value=r[0]?.key??``)}}}));return l(t=>{let o=n(),c=s(`rue:component:anchor`);return r(o,c),f(h(S,{children:l(()=>{let t=n(),o=a(`div`,t);r(t,o),g(o,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,o);r(o,c),r(c,p(`Tabs 选项卡`));let u=a(`p`,o);r(o,u),g(u,`text-sm mt-3 mb-3`),r(u,p(`Tabs 现在除了保留 Rue 当前的 box / border / lift 视觉，还补齐了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let v=a(`h2`,o);r(o,v),r(v,p(`何时使用`));let S=a(`ul`,o);r(o,S);let ye=a(`li`,S);r(S,ye),r(ye,p(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let A=a(`li`,S);r(S,A),r(A,p(`既想保留 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let j=a(`div`,o);r(o,j),g(j,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let M=a(`div`,j);r(j,M),g(M,`rounded-box bg-base-200/50 p-3`);let N=a(`div`,M);r(M,N),g(N,`font-medium`),r(N,p(`受控与非受控`));let P=a(`div`,M);r(M,P),g(P,`mt-1 opacity-75`),r(P,p("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let F=a(`div`,j);r(j,F),g(F,`rounded-box bg-base-200/50 p-3`);let I=a(`div`,F);r(F,I),g(I,`font-medium`),r(I,p(`内容与布局`));let L=a(`div`,F);r(F,L),g(L,`mt-1 opacity-75`),r(L,p("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let R=a(`div`,j);r(j,R),g(R,`rounded-box bg-base-200/50 p-3`);let z=a(`div`,R);r(R,z),g(z,`font-medium`),r(z,p(`操作能力`));let B=a(`div`,R);r(R,B),g(B,`mt-1 opacity-75`),r(B,p("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let Ce=s(`rue:component:anchor`);r(o,Ce);let we=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:y.value,onChange:e=>y.value=e});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:we});_(()=>f(e,o,Ce))});let Te=s(`rue:component:anchor`);r(o,Te);let Ee=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:C.value,onChange:e=>C.value=e});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:Ee});_(()=>f(e,o,Te))});let De=s(`rue:component:anchor`);r(o,De);let Oe=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:O.value,onChange:e=>O.value=e});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:Oe});_(()=>f(e,o,De))});let ke=s(`rue:component:anchor`);r(o,ke);let Ae=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:oe.value,onChange:e=>oe.value=e});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:Ae});_(()=>f(e,o,ke))});let je=s(`rue:component:anchor`);r(o,je);let Me=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[x(T,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),x(T,{title:`QA`,value:`7`,description:`待验证缺陷`}),x(T,{title:`Review`,value:`3`,description:`待合并 PR`})]}),b(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),x(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),x(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),b(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[x(`span`,{children:`设计`}),x(`span`,{children:`联调`}),x(`span`,{children:`回归`}),x(`span`,{children:`发布`})]})]}),b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),b(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[x(`li`,{children:`锁定接口字段命名`}),x(`li`,{children:`同步埋点事件与告警阈值`}),x(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:b(`div`,{className:`space-y-3`,children:[b(`ul`,{className:`list gap-2`,children:[b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`10:15`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`14:35`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`16:20`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补齐埋点与告警配置。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`18:40`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),x(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:x(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:x(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>b(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-lg font-semibold`,children:e.label}),x(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),x(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`content-panels`,code:ee,children:Me});_(()=>f(e,o,je))});let Ne=s(`rue:component:anchor`);r(o,Ne);let Pe=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{type:`card`,activeKey:he.value,onChange:e=>he.value=e,tabBarExtraContent:{left:x(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:x(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`tab-bar-extra-content`,code:te,children:Pe});_(()=>f(e,o,Ne))});let Fe=s(`rue:component:anchor`);r(o,Fe);let Ie=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{centered:!0,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Ie});_(()=>f(e,o,Fe))});let Le=s(`rue:component:anchor`);r(o,Le);let Re=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm overflow-hidden`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{tabPlacement:k.value,type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,className:`min-h-72`,tabBarExtraContent:{left:b(`div`,{className:`flex gap-2`,children:[x(`button`,{className:`btn btn-xs ${k.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>k.value=`start`,children:`start`}),x(`button`,{className:`btn btn-xs ${k.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>k.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`tab-placement`,code:ne,children:Re});_(()=>f(e,o,Le))});let ze=s(`rue:component:anchor`);r(o,ze);let Be=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{type:`editable-card`,activeKey:be.value,onChange:e=>be.value=e,onEdit:Se,items:xe.value});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`editable-card`,code:re,children:Be});_(()=>f(e,o,ze))});let Ve=s(`rue:component:anchor`);r(o,Ve);let He=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{type:`line`,activeKey:ve.value,onChange:e=>ve.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:He});_(()=>f(e,o,Ve))});let Ue=s(`rue:component:anchor`);r(o,Ue);let We=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=a(`div`,i);r(i,o),g(o,`flex flex-col items-center gap-6`);let c=s(`rue:component:anchor`);r(o,c),d(()=>{let e=h(w,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:se.value,onChange:e=>se.value=e});_(()=>f(e,o,c))});let l=s(`rue:component:anchor`);r(o,l),d(()=>{let e=h(w,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:ce.value,onChange:e=>ce.value=e});_(()=>f(e,o,l))});let u=s(`rue:component:anchor`);r(o,u),d(()=>{let e=h(w,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:le.value,onChange:e=>le.value=e});_(()=>f(e,o,u))});let p=s(`rue:component:anchor`);r(o,p),d(()=>{let e=h(w,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:ue.value,onChange:e=>ue.value=e});_(()=>f(e,o,p))});let m=s(`rue:component:anchor`);return r(o,m),d(()=>{let e=h(w,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:de.value,onChange:e=>de.value=e});_(()=>f(e,o,m))}),e});d(()=>{let e=h(D,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:We});_(()=>f(e,o,Ue))});let Ge=s(`rue:component:anchor`);r(o,Ge);let Ke=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:fe.value,onChange:e=>fe.value=e});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:Ke});_(()=>f(e,o,Ge))});let qe=s(`rue:component:anchor`);r(o,qe);let Je=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:pe.value,onChange:e=>pe.value=e});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Je});_(()=>f(e,o,qe))});let Ye=s(`rue:component:anchor`);r(o,Ye);let Xe=l(()=>{let e=n(),t=a(`div`,e);r(e,t),g(t,`card bg-base-100 shadow-sm`);let i=a(`div`,t);r(t,i),g(i,`card-body gap-4`);let o=s(`rue:component:anchor`);return r(i,o),d(()=>{let e=h(w,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:me.value,onChange:e=>me.value=e});_(()=>f(e,i,o))}),e});d(()=>{let e=h(D,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Xe});_(()=>f(e,o,Ye))});let V=a(`h2`,o);r(o,V),e(V,`id`,`tabs-api`),r(V,p(`API`));let Ze=a(`p`,o);r(o,Ze),r(Ze,p(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let Qe=s(`rue:component:anchor`);r(o,Qe),d(()=>{let e=h(E,{rows:ie});_(()=>f(e,o,Qe))});let $e=a(`div`,o);r(o,$e),g($e,`not-prose mt-6`);let et=s(`rue:component:anchor`);r(o,et),d(()=>{let e=h(E,{rows:ae});_(()=>f(e,o,et))});let H=a(`div`,o);r(o,H),g(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=a(`div`,H);r(H,U),g(U,`font-semibold`),r(U,p(`使用建议`));let W=a(`div`,H);r(H,W),g(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=a(`div`,W);r(W,G);let tt=a(`code`,G);r(G,tt),r(tt,p(`activeKey + onChange`)),r(G,p(`适合和路由、筛选条件、外部状态统一联动。`));let K=a(`div`,W);r(W,K);let nt=a(`code`,K);r(K,nt),r(nt,p(`defaultActiveKey`)),r(K,p(`适合静态文档、局部 demo 或无需外部接管的轻交互场景。`));let q=a(`div`,W);r(W,q),r(q,p(`复杂标签头优先用`));let rt=a(`code`,q);r(q,rt),r(rt,p(`icon`)),r(q,p(`+ 文本`));let it=a(`code`,q);r(q,it),r(it,p(`label`));let at=i(q);r(q,at),m(at,` `),r(q,p(`组合，兼顾语义和稳定渲染。`));let J=a(`div`,W);r(W,J),r(J,p(`需要完整内容区域切换时给`));let ot=a(`code`,J);r(J,ot),r(ot,p(`items.children`));let st=i(J);r(J,st),m(st,` `),r(J,p(`传面板节点；只做导航标签时可以只传`));let ct=a(`code`,J);r(J,ct),r(ct,p(`label`)),r(J,p(`。`));let lt=a(`h2`,o);r(o,lt),r(lt,p(`FAQ`));let ut=a(`h3`,o);r(o,ut),r(ut,p(`activeKey 和 defaultActiveKey 怎么选？`));let Y=a(`p`,o);r(o,Y);let dt=a(`code`,Y);r(Y,dt),r(dt,p(`activeKey`)),r(Y,p(`是受控模式，当前激活项由外部状态决定；`));let ft=a(`code`,Y);r(Y,ft),r(ft,p(`defaultActiveKey`)),r(Y,p(`只设置初始值，后续切换由组件内部维护。`));let pt=a(`h3`,o);r(o,pt),r(pt,p(`style 和 type 会冲突吗？`));let X=a(`p`,o);r(o,X);let mt=a(`code`,X);r(X,mt),r(mt,p(`type`)),r(X,p(`更偏语义能力，像`));let ht=a(`code`,X);r(X,ht),r(ht,p(`card`)),r(X,p(`、`));let gt=a(`code`,X);r(X,gt),r(gt,p(`editable-card`));let _t=i(X);r(X,_t),m(_t,` `),r(X,p(`会自动套用适合的视觉； 如果你明确传了`));let vt=a(`code`,X);r(X,vt),r(vt,p(`style`)),r(X,p(`，就以显式样式为准。`));let yt=a(`h3`,o);r(o,yt),r(yt,p(`placement 和 tabPlacement 有什么区别？`));let Z=a(`p`,o);r(o,Z);let bt=a(`code`,Z);r(Z,bt),r(bt,p(`placement`)),r(Z,p(`只覆盖上下位置；`));let Q=a(`code`,Z);r(Z,Q),r(Q,p(`tabPlacement`)),r(Z,p(`额外支持`));let xt=i(Z);r(Z,xt),m(xt,` `);let St=a(`code`,Z);r(Z,St),r(St,p(`start`)),r(Z,p(`和`));let Ct=a(`code`,Z);r(Z,Ct),r(Ct,p(`end`)),r(Z,p(`两种垂直摆放，并且优先级更高。`));let wt=a(`h3`,o);r(o,wt),r(wt,p(`为什么复杂 label 建议拆成 icon 和文本？`));let $=a(`p`,o);r(o,$),r($,p(`当前实现会给`));let Tt=a(`code`,$);r($,Tt),r(Tt,p(`label`)),r($,p(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Et=a(`code`,$);r($,Et),r(Et,p(`[object Object]`)),r($,p(`，推荐把徽标、点状状态这类前缀放到`));let Dt=a(`code`,$);r($,Dt),r(Dt,p(`icon`)),r($,p(`，把主要文案保留在`));let Ot=a(`code`,$);return r($,Ot),r(Ot,p(`label`)),r($,p(`。`)),t})}),o,c),o})};export{O as default};