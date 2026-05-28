import{$ as e,Gt as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,gt as f,l as p,mt as m,ot as h,t as g,tt as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v,n as y}from"./vapor-helpers-vapor-DkadWylb.js";import{i as b,r as x}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as S}from"./tabs-DMHgT-aV.js";import{n as C}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as w}from"./Code-B_4lzH85.js";import{t as T}from"./preview-test-gate-BMJrlY7m.js";var E=t=>u(n=>{let r=e(`div`,n);l(r,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let i=e(`div`,r);o(r,i),l(i,`text-xs uppercase tracking-[0.18em] opacity-60`);let u=c(`rue:slot:anchor`);o(i,u),s(()=>{let e=t.title;a(()=>p(e,i,u))});let d=e(`div`,r);o(r,d),l(d,`mt-2 text-2xl font-semibold`);let f=_(d);o(d,f),s(()=>{m(f,t.value)});let h=e(`div`,r);o(r,h),l(h,`mt-1 text-sm opacity-75`);let g=c(`rue:slot:anchor`);return o(h,g),s(()=>{let e=t.description;a(()=>p(e,h,g))}),r}),ee=t=>u(n=>{let r=e(`div`,n);l(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`,r);o(r,f),l(f,`table table-zebra`);let m=e(`thead`,f);o(f,m);let g=e(`tr`,m);o(m,g);let _=e(`th`,g);o(g,_),o(_,d(`属性`));let v=e(`th`,g);o(g,v),o(v,d(`说明`));let b=e(`th`,g);o(g,b),o(b,d(`类型`));let x=e(`th`,g);o(g,x),o(x,d(`默认值`));let S=e(`tbody`,f);o(f,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=y({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,l,d)=>{p(u(()=>{let n=i(),r=e(`tr`,n);o(n,r),s(()=>{h(r,`key`,String(t.prop))});let l=e(`td`,r);o(r,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>p(e,u,d))});let f=e(`td`,r);o(r,f);let m=c(`rue:slot:anchor`);o(f,m),s(()=>{let e=t.description;a(()=>p(e,f,m))});let g=e(`td`,r);o(r,g);let _=e(`code`,g);o(g,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>p(e,_,v))});let y=e(`td`,r);o(r,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>p(e,b,x))}),n}),n,r)}})}),r}),D=m=>{let{tabRef:h,tab:_,previewNode:y}=v(`useSetup:0:0`,()=>n(()=>{let e=v(`useRef:1:0`,()=>t());return e.current||=v(`ref:1:1`,()=>r(`preview`)),{tabRef:e,tab:e.current,previewNode:v(`computed:1:2`,()=>f(()=>Array.isArray(m.children)?m.children.find(e=>e!=null&&e!==``):m.children))}}));return u(t=>{let n=e(`div`,t);l(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=e(`h2`,n);o(n,r),l(r,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(r,d(`# `));let f=c(`rue:slot:anchor`);o(r,f),s(()=>{let e=m.title;a(()=>p(e,r,f))});let h=c(`rue:component:anchor`);o(n,h),s(()=>{let e=g(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_.value,onChange:e=>_.value=e,className:`mb-3`});a(()=>p(e,n,h))});let v=c(`rue:slot:anchor`);return o(n,v),s(()=>{let e=_.value===`preview`?T(m.title,y.get()):u(()=>{let e=i(),t=c(`rue:component:anchor`);return o(e,t),s(()=>{let n=g(w,{className:`mt-2`,lang:`tsx`,code:m.code});a(()=>p(n,e,t))}),e});a(()=>p(e,n,v))}),n})},te=String.raw`<Tabs
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，兼容 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],O=()=>{let{stateRef:f,activeBasic:y,activeBorder:w,activeLift:T,activeBox:O,activeXs:se,activeSm:ce,activeMd:le,activeLg:ue,activeXl:de,activeBottom:fe,activeDisabled:pe,activeCustom:me,activeExtra:he,activeCentered:ge,placementMode:k,activePlacementTab:_e,activeIndicator:ve,editableCounter:ye,editableActiveKey:be,editableItems:xe,handleEditableEdit:Se}=v(`useSetup:0:0:dup1`,()=>n(()=>{let e=v(`useRef:1:3`,()=>t());e.current||={activeBasic:v(`ref:1:4`,()=>r(`tab2`)),activeBorder:v(`ref:1:5`,()=>r(`tab2`)),activeLift:v(`ref:1:6`,()=>r(`tab2`)),activeBox:v(`ref:1:7`,()=>r(`tab2`)),activeXs:v(`ref:1:8`,()=>r(`xs2`)),activeSm:v(`ref:1:9`,()=>r(`sm2`)),activeMd:v(`ref:1:10`,()=>r(`md2`)),activeLg:v(`ref:1:11`,()=>r(`lg2`)),activeXl:v(`ref:1:12`,()=>r(`xl2`)),activeBottom:v(`ref:1:13`,()=>r(`b2`)),activeDisabled:v(`ref:1:14`,()=>r(`d2`)),activeCustom:v(`ref:1:15`,()=>r(`c2`)),activeExtra:v(`ref:1:16`,()=>r(`overview`)),activeCentered:v(`ref:1:17`,()=>r(`beta`)),placementMode:v(`ref:1:18`,()=>r(`start`)),activePlacementTab:v(`ref:1:19`,()=>r(`design`)),activeIndicator:v(`ref:1:20`,()=>r(`metrics`)),editableCounter:v(`ref:1:21`,()=>r(3)),editableActiveKey:v(`ref:1:22`,()=>r(`draft-2`)),editableItems:v(`ref:1:23`,()=>r([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]))};let n=e.current.activeBasic,i=e.current.activeBorder,a=e.current.activeLift,o=e.current.activeBox,s=e.current.activeXs,c=e.current.activeSm,l=e.current.activeMd,u=e.current.activeLg,d=e.current.activeXl,f=e.current.activeBottom,p=e.current.activeDisabled,m=e.current.activeCustom,h=e.current.activeExtra,g=e.current.activeCentered,_=e.current.placementMode,y=e.current.activePlacementTab,b=e.current.activeIndicator,x=e.current.editableCounter,S=e.current.editableActiveKey,C=e.current.editableItems;return{stateRef:e,activeBasic:n,activeBorder:i,activeLift:a,activeBox:o,activeXs:s,activeSm:c,activeMd:l,activeLg:u,activeXl:d,activeBottom:f,activeDisabled:p,activeCustom:m,activeExtra:h,activeCentered:g,placementMode:_,activePlacementTab:y,activeIndicator:b,editableCounter:x,editableActiveKey:S,editableItems:C,handleEditableEdit:(e,t)=>{if(t===`add`){x.value+=1;let e=`draft-${x.value}`;C.value=[...C.value,{key:e,label:`Draft ${x.value}`,children:`这里是新建标签 ${x.value} 的上下文内容。`}],S.value=e;return}let n=String(e),r=C.value.filter(e=>e.key!==n);C.value=r,S.value===n&&(S.value=r[0]?.key??``)}}}));return u(t=>{let n=i(),r=c(`rue:component:anchor`);return o(n,r),p(g(C,{children:u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`max-w-none prose prose-sm md:prose-base`);let r=e(`h1`,n);o(n,r),o(r,d(`Tabs 选项卡`));let f=e(`p`,n);o(n,f),l(f,`text-sm mt-3 mb-3`),o(f,d(`Tabs 现在除了保留 Rue 当前的 box / border / lift 视觉，还补齐了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let v=e(`h2`,n);o(n,v),o(v,d(`何时使用`));let C=e(`ul`,n);o(n,C);let ye=e(`li`,C);o(C,ye),o(ye,d(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let Ce=e(`li`,C);o(C,Ce),o(Ce,d(`既想保留 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let A=e(`div`,n);o(n,A),l(A,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let j=e(`div`,A);o(A,j),l(j,`rounded-box bg-base-200/50 p-3`);let M=e(`div`,j);o(j,M),l(M,`font-medium`),o(M,d(`受控与非受控`));let N=e(`div`,j);o(j,N),l(N,`mt-1 opacity-75`),o(N,d("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let P=e(`div`,A);o(A,P),l(P,`rounded-box bg-base-200/50 p-3`);let F=e(`div`,P);o(P,F),l(F,`font-medium`),o(F,d(`内容与布局`));let I=e(`div`,P);o(P,I),l(I,`mt-1 opacity-75`),o(I,d("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let L=e(`div`,A);o(A,L),l(L,`rounded-box bg-base-200/50 p-3`);let R=e(`div`,L);o(L,R),l(R,`font-medium`),o(R,d(`操作能力`));let z=e(`div`,L);o(L,z),l(z,`mt-1 opacity-75`),o(z,d("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let we=c(`rue:component:anchor`);o(n,we);let Te=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:y.value,onChange:e=>y.value=e});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Te});a(()=>p(e,n,we))});let Ee=c(`rue:component:anchor`);o(n,Ee);let De=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:w.value,onChange:e=>w.value=e});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:De});a(()=>p(e,n,Ee))});let Oe=c(`rue:component:anchor`);o(n,Oe);let ke=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:T.value,onChange:e=>T.value=e});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:ke});a(()=>p(e,n,Oe))});let Ae=c(`rue:component:anchor`);o(n,Ae);let je=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:O.value,onChange:e=>O.value=e});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:je});a(()=>p(e,n,Ae))});let Me=c(`rue:component:anchor`);o(n,Me);let Ne=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[x(E,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),x(E,{title:`QA`,value:`7`,description:`待验证缺陷`}),x(E,{title:`Review`,value:`3`,description:`待合并 PR`})]}),b(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),x(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),x(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),b(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[x(`span`,{children:`设计`}),x(`span`,{children:`联调`}),x(`span`,{children:`回归`}),x(`span`,{children:`发布`})]})]}),b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),b(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[x(`li`,{children:`锁定接口字段命名`}),x(`li`,{children:`同步埋点事件与告警阈值`}),x(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:b(`div`,{className:`space-y-3`,children:[b(`ul`,{className:`list gap-2`,children:[b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`10:15`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`14:35`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`16:20`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补齐埋点与告警配置。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`18:40`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),x(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:x(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:x(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>b(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-lg font-semibold`,children:e.label}),x(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),x(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`content-panels`,code:te,children:Ne});a(()=>p(e,n,Me))});let Pe=c(`rue:component:anchor`);o(n,Pe);let Fe=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{type:`card`,activeKey:he.value,onChange:e=>he.value=e,tabBarExtraContent:{left:x(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:x(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`tab-bar-extra-content`,code:ne,children:Fe});a(()=>p(e,n,Pe))});let Ie=c(`rue:component:anchor`);o(n,Ie);let Le=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{centered:!0,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Le});a(()=>p(e,n,Ie))});let Re=c(`rue:component:anchor`);o(n,Re);let ze=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm overflow-hidden`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{tabPlacement:k.value,type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,className:`min-h-72`,tabBarExtraContent:{left:b(`div`,{className:`flex gap-2`,children:[x(`button`,{className:`btn btn-xs ${k.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>k.value=`start`,children:`start`}),x(`button`,{className:`btn btn-xs ${k.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>k.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`tab-placement`,code:re,children:ze});a(()=>p(e,n,Re))});let Be=c(`rue:component:anchor`);o(n,Be);let Ve=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{type:`editable-card`,activeKey:be.value,onChange:e=>be.value=e,onEdit:Se,items:xe.value});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`editable-card`,code:ie,children:Ve});a(()=>p(e,n,Be))});let He=c(`rue:component:anchor`);o(n,He);let Ue=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{type:`line`,activeKey:ve.value,onChange:e=>ve.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:Ue});a(()=>p(e,n,He))});let We=c(`rue:component:anchor`);o(n,We);let Ge=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=e(`div`,r);o(r,u),l(u,`flex flex-col items-center gap-6`);let d=c(`rue:component:anchor`);o(u,d),s(()=>{let e=g(S,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:se.value,onChange:e=>se.value=e});a(()=>p(e,u,d))});let f=c(`rue:component:anchor`);o(u,f),s(()=>{let e=g(S,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:ce.value,onChange:e=>ce.value=e});a(()=>p(e,u,f))});let m=c(`rue:component:anchor`);o(u,m),s(()=>{let e=g(S,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:le.value,onChange:e=>le.value=e});a(()=>p(e,u,m))});let h=c(`rue:component:anchor`);o(u,h),s(()=>{let e=g(S,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:ue.value,onChange:e=>ue.value=e});a(()=>p(e,u,h))});let _=c(`rue:component:anchor`);return o(u,_),s(()=>{let e=g(S,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:de.value,onChange:e=>de.value=e});a(()=>p(e,u,_))}),t});s(()=>{let e=g(D,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ge});a(()=>p(e,n,We))});let Ke=c(`rue:component:anchor`);o(n,Ke);let qe=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:fe.value,onChange:e=>fe.value=e});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:qe});a(()=>p(e,n,Ke))});let Je=c(`rue:component:anchor`);o(n,Je);let Ye=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:pe.value,onChange:e=>pe.value=e});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Ye});a(()=>p(e,n,Je))});let Xe=c(`rue:component:anchor`);o(n,Xe);let Ze=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow-sm`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-4`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=g(S,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:me.value,onChange:e=>me.value=e});a(()=>p(e,r,u))}),t});s(()=>{let e=g(D,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Ze});a(()=>p(e,n,Xe))});let B=e(`h2`,n);o(n,B),h(B,`id`,`tabs-api`),o(B,d(`API`));let Qe=e(`p`,n);o(n,Qe),o(Qe,d(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let $e=c(`rue:component:anchor`);o(n,$e),s(()=>{let e=g(ee,{rows:ae});a(()=>p(e,n,$e))});let et=e(`div`,n);o(n,et),l(et,`not-prose mt-6`);let tt=c(`rue:component:anchor`);o(n,tt),s(()=>{let e=g(ee,{rows:oe});a(()=>p(e,n,tt))});let V=e(`div`,n);o(n,V),l(V,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let H=e(`div`,V);o(V,H),l(H,`font-semibold`),o(H,d(`使用建议`));let U=e(`div`,V);o(V,U),l(U,`mt-2 grid gap-2 md:grid-cols-2`);let W=e(`div`,U);o(U,W);let nt=e(`code`,W);o(W,nt),o(nt,d(`activeKey + onChange`)),o(W,d(`适合和路由、筛选条件、外部状态统一联动。`));let G=e(`div`,U);o(U,G);let rt=e(`code`,G);o(G,rt),o(rt,d(`defaultActiveKey`)),o(G,d(`适合静态文档、局部 demo 或无需外部接管的轻交互场景。`));let K=e(`div`,U);o(U,K),o(K,d(`复杂标签头优先用`));let it=e(`code`,K);o(K,it),o(it,d(`icon`)),o(K,d(`+ 文本`));let at=e(`code`,K);o(K,at),o(at,d(`label`));let ot=_(K);o(K,ot),m(ot,` `),o(K,d(`组合，兼顾语义和稳定渲染。`));let q=e(`div`,U);o(U,q),o(q,d(`需要完整内容区域切换时给`));let st=e(`code`,q);o(q,st),o(st,d(`items.children`));let ct=_(q);o(q,ct),m(ct,` `),o(q,d(`传面板节点；只做导航标签时可以只传`));let lt=e(`code`,q);o(q,lt),o(lt,d(`label`)),o(q,d(`。`));let ut=e(`h2`,n);o(n,ut),o(ut,d(`FAQ`));let dt=e(`h3`,n);o(n,dt),o(dt,d(`activeKey 和 defaultActiveKey 怎么选？`));let J=e(`p`,n);o(n,J);let ft=e(`code`,J);o(J,ft),o(ft,d(`activeKey`)),o(J,d(`是受控模式，当前激活项由外部状态决定；`));let pt=e(`code`,J);o(J,pt),o(pt,d(`defaultActiveKey`)),o(J,d(`只设置初始值，后续切换由组件内部维护。`));let mt=e(`h3`,n);o(n,mt),o(mt,d(`style 和 type 会冲突吗？`));let Y=e(`p`,n);o(n,Y);let ht=e(`code`,Y);o(Y,ht),o(ht,d(`type`)),o(Y,d(`更偏语义能力，像`));let gt=e(`code`,Y);o(Y,gt),o(gt,d(`card`)),o(Y,d(`、`));let _t=e(`code`,Y);o(Y,_t),o(_t,d(`editable-card`));let vt=_(Y);o(Y,vt),m(vt,` `),o(Y,d(`会自动套用适合的视觉； 如果你明确传了`));let yt=e(`code`,Y);o(Y,yt),o(yt,d(`style`)),o(Y,d(`，就以显式样式为准。`));let bt=e(`h3`,n);o(n,bt),o(bt,d(`placement 和 tabPlacement 有什么区别？`));let X=e(`p`,n);o(n,X);let xt=e(`code`,X);o(X,xt),o(xt,d(`placement`)),o(X,d(`只覆盖上下位置；`));let Z=e(`code`,X);o(X,Z),o(Z,d(`tabPlacement`)),o(X,d(`额外支持`));let St=_(X);o(X,St),m(St,` `);let Ct=e(`code`,X);o(X,Ct),o(Ct,d(`start`)),o(X,d(`和`));let wt=e(`code`,X);o(X,wt),o(wt,d(`end`)),o(X,d(`两种垂直摆放，并且优先级更高。`));let Tt=e(`h3`,n);o(n,Tt),o(Tt,d(`为什么复杂 label 建议拆成 icon 和文本？`));let Q=e(`p`,n);o(n,Q),o(Q,d(`当前实现会给`));let Et=e(`code`,Q);o(Q,Et),o(Et,d(`label`)),o(Q,d(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Dt=e(`code`,Q);o(Q,Dt),o(Dt,d(`[object Object]`)),o(Q,d(`，推荐把徽标、点状状态这类前缀放到`));let Ot=e(`code`,Q);o(Q,Ot),o(Ot,d(`icon`)),o(Q,d(`，把主要文案保留在`));let $=e(`code`,Q);return o(Q,$),o($,d(`label`)),o(Q,d(`。`)),t})}),n,r),n})};export{O as default};