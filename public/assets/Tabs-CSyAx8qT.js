import{$ as e,B as t,Ct as n,Dt as r,G as i,H as a,K as o,U as s,W as c,Z as l,at as u,ht as d,l as f,lt as p,s as m,t as h,wt as g,yt as _}from"./vapor-runtime-C1rlwc61.js";import{a as v,n as y}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as b}from"./Code-BCLFq1E3.js";import{n as x,t as S}from"./src-BLzF0BqW.js";import{n as C}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as w}from"./tabs-BOxm6iIN.js";import{t as T}from"./preview-test-gate-DtKtoe96.js";var E=n=>f(i=>{let s=c(`div`,i);e(s,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let l=c(`div`,s);t(s,l),e(l,`text-xs uppercase tracking-[0.18em] opacity-60`);let d=a(`rue:slot:anchor`);t(l,d),r(()=>{let e=n.title;_(()=>m(e,l,d))});let f=c(`div`,s);t(s,f),e(f,`mt-2 text-2xl font-semibold`);let p=o(f);t(f,p),r(()=>{u(p,n.value)});let h=c(`div`,s);t(s,h),e(h,`mt-1 text-sm opacity-75`);let g=a(`rue:slot:anchor`);return t(h,g),r(()=>{let e=n.description;_(()=>m(e,h,g))}),s}),ee=n=>f(o=>{let u=c(`div`,o);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=c(`table`,u);t(u,d),e(d,`table table-zebra`);let p=c(`thead`,d);t(d,p);let h=c(`tr`,p);t(p,h);let g=c(`th`,h);t(h,g),t(g,i(`属性`));let v=c(`th`,h);t(h,v),t(v,i(`说明`));let b=c(`th`,h);t(h,b),t(b,i(`类型`));let x=c(`th`,h);t(h,x),t(x,i(`默认值`));let S=c(`tbody`,d);t(d,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=y({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,o,u)=>{m(f(()=>{let n=s(),i=c(`tr`,n);t(n,i),r(()=>{l(i,`key`,String(e.prop))});let o=c(`td`,i);t(i,o);let u=c(`code`,o);t(o,u);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let t=e.prop;_(()=>m(t,u,d))});let f=c(`td`,i);t(i,f);let p=a(`rue:slot:anchor`);t(f,p),r(()=>{let t=e.description;_(()=>m(t,f,p))});let h=c(`td`,i);t(i,h);let g=c(`code`,h);t(h,g);let v=a(`rue:slot:anchor`);t(g,v),r(()=>{let t=e.type;_(()=>m(t,g,v))});let y=c(`td`,i);t(i,y);let b=c(`code`,y);t(y,b);let x=a(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;_(()=>m(t,b,x))}),n}),n,i)}})}),u}),D=o=>{let{tabRef:l,tab:u,previewNode:y}=v(`useSetup:0:0`,()=>g(()=>{let e=v(`useRef:1:0`,()=>n());return e.current||=v(`ref:1:1`,()=>d(`preview`)),{tabRef:e,tab:e.current,previewNode:v(`computed:1:2`,()=>p(()=>Array.isArray(o.children)?o.children.find(e=>e!=null&&e!==``):o.children))}}));return f(n=>{let l=c(`div`,n);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=c(`h2`,l);t(l,d),e(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(d,i(`# `));let p=a(`rue:slot:anchor`);t(d,p),r(()=>{let e=o.title;_(()=>m(e,d,p))});let g=a(`rue:component:anchor`);t(l,g),r(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:u.value,onChange:e=>u.value=e,className:`mb-3`});_(()=>m(e,l,g))});let v=a(`rue:slot:anchor`);return t(l,v),r(()=>{let e=u.value===`preview`?T(o.title,y.get()):f(()=>{let e=s(),n=a(`rue:component:anchor`);return t(e,n),r(()=>{let t=h(b,{className:`mt-2`,lang:`tsx`,code:o.code});_(()=>m(t,e,n))}),e});_(()=>m(e,l,v))}),l})},te=String.raw`<Tabs
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，兼容 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],O=()=>{let{stateRef:p,activeBasic:y,activeBorder:b,activeLift:T,activeBox:O,activeXs:se,activeSm:ce,activeMd:le,activeLg:ue,activeXl:de,activeBottom:fe,activeDisabled:pe,activeCustom:me,activeExtra:he,activeCentered:ge,placementMode:k,activePlacementTab:_e,activeIndicator:ve,editableCounter:ye,editableActiveKey:be,editableItems:xe,handleEditableEdit:Se}=v(`useSetup:0:0:dup1`,()=>g(()=>{let e=v(`useRef:1:3`,()=>n());e.current||={activeBasic:v(`ref:1:4`,()=>d(`tab2`)),activeBorder:v(`ref:1:5`,()=>d(`tab2`)),activeLift:v(`ref:1:6`,()=>d(`tab2`)),activeBox:v(`ref:1:7`,()=>d(`tab2`)),activeXs:v(`ref:1:8`,()=>d(`xs2`)),activeSm:v(`ref:1:9`,()=>d(`sm2`)),activeMd:v(`ref:1:10`,()=>d(`md2`)),activeLg:v(`ref:1:11`,()=>d(`lg2`)),activeXl:v(`ref:1:12`,()=>d(`xl2`)),activeBottom:v(`ref:1:13`,()=>d(`b2`)),activeDisabled:v(`ref:1:14`,()=>d(`d2`)),activeCustom:v(`ref:1:15`,()=>d(`c2`)),activeExtra:v(`ref:1:16`,()=>d(`overview`)),activeCentered:v(`ref:1:17`,()=>d(`beta`)),placementMode:v(`ref:1:18`,()=>d(`start`)),activePlacementTab:v(`ref:1:19`,()=>d(`design`)),activeIndicator:v(`ref:1:20`,()=>d(`metrics`)),editableCounter:v(`ref:1:21`,()=>d(3)),editableActiveKey:v(`ref:1:22`,()=>d(`draft-2`)),editableItems:v(`ref:1:23`,()=>d([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]))};let t=e.current.activeBasic,r=e.current.activeBorder,i=e.current.activeLift,a=e.current.activeBox,o=e.current.activeXs,s=e.current.activeSm,c=e.current.activeMd,l=e.current.activeLg,u=e.current.activeXl,f=e.current.activeBottom,p=e.current.activeDisabled,m=e.current.activeCustom,h=e.current.activeExtra,g=e.current.activeCentered,_=e.current.placementMode,y=e.current.activePlacementTab,b=e.current.activeIndicator,x=e.current.editableCounter,S=e.current.editableActiveKey,C=e.current.editableItems;return{stateRef:e,activeBasic:t,activeBorder:r,activeLift:i,activeBox:a,activeXs:o,activeSm:s,activeMd:c,activeLg:l,activeXl:u,activeBottom:f,activeDisabled:p,activeCustom:m,activeExtra:h,activeCentered:g,placementMode:_,activePlacementTab:y,activeIndicator:b,editableCounter:x,editableActiveKey:S,editableItems:C,handleEditableEdit:(e,t)=>{if(t===`add`){x.value+=1;let e=`draft-${x.value}`;C.value=[...C.value,{key:e,label:`Draft ${x.value}`,children:`这里是新建标签 ${x.value} 的上下文内容。`}],S.value=e;return}let n=String(e),r=C.value.filter(e=>e.key!==n);C.value=r,S.value===n&&(S.value=r[0]?.key??``)}}}));return f(n=>{let d=s(),p=a(`rue:component:anchor`);return t(d,p),m(h(C,{children:f(()=>{let n=s(),d=c(`div`,n);t(n,d),e(d,`max-w-none prose prose-sm md:prose-base`);let p=c(`h1`,d);t(d,p),t(p,i(`Tabs 选项卡`));let g=c(`p`,d);t(d,g),e(g,`text-sm mt-3 mb-3`),t(g,i(`Tabs 现在除了保留 Rue 当前的 box / border / lift 视觉，还补齐了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let v=c(`h2`,d);t(d,v),t(v,i(`何时使用`));let C=c(`ul`,d);t(d,C);let ye=c(`li`,C);t(C,ye),t(ye,i(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let Ce=c(`li`,C);t(C,Ce),t(Ce,i(`既想保留 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let A=c(`div`,d);t(d,A),e(A,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let j=c(`div`,A);t(A,j),e(j,`rounded-box bg-base-200/50 p-3`);let M=c(`div`,j);t(j,M),e(M,`font-medium`),t(M,i(`受控与非受控`));let N=c(`div`,j);t(j,N),e(N,`mt-1 opacity-75`),t(N,i("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let P=c(`div`,A);t(A,P),e(P,`rounded-box bg-base-200/50 p-3`);let F=c(`div`,P);t(P,F),e(F,`font-medium`),t(F,i(`内容与布局`));let I=c(`div`,P);t(P,I),e(I,`mt-1 opacity-75`),t(I,i("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let L=c(`div`,A);t(A,L),e(L,`rounded-box bg-base-200/50 p-3`);let R=c(`div`,L);t(L,R),e(R,`font-medium`),t(R,i(`操作能力`));let z=c(`div`,L);t(L,z),e(z,`mt-1 opacity-75`),t(z,i("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let we=a(`rue:component:anchor`);t(d,we);let Te=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:y.value,onChange:e=>y.value=e});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Te});_(()=>m(e,d,we))});let Ee=a(`rue:component:anchor`);t(d,Ee);let De=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:b.value,onChange:e=>b.value=e});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:De});_(()=>m(e,d,Ee))});let Oe=a(`rue:component:anchor`);t(d,Oe);let ke=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:T.value,onChange:e=>T.value=e});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:ke});_(()=>m(e,d,Oe))});let Ae=a(`rue:component:anchor`);t(d,Ae);let je=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:O.value,onChange:e=>O.value=e});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:je});_(()=>m(e,d,Ae))});let Me=a(`rue:component:anchor`);t(d,Me);let Ne=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:x(`div`,{className:`space-y-4`,children:[x(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[S(E,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),S(E,{title:`QA`,value:`7`,description:`待验证缺陷`}),S(E,{title:`Review`,value:`3`,description:`待合并 PR`})]}),x(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[x(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[x(`div`,{className:`flex items-center justify-between`,children:[S(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),S(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),S(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),x(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[S(`span`,{children:`设计`}),S(`span`,{children:`联调`}),S(`span`,{children:`回归`}),S(`span`,{children:`发布`})]})]}),x(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[S(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),x(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[S(`li`,{children:`锁定接口字段命名`}),S(`li`,{children:`同步埋点事件与告警阈值`}),S(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:x(`div`,{className:`space-y-3`,children:[x(`ul`,{className:`list gap-2`,children:[x(`li`,{className:`list-row`,children:[S(`div`,{className:`font-medium`,children:`10:15`}),S(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),x(`li`,{className:`list-row`,children:[S(`div`,{className:`font-medium`,children:`14:35`}),S(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),x(`li`,{className:`list-row`,children:[S(`div`,{className:`font-medium`,children:`16:20`}),S(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补齐埋点与告警配置。`})]}),x(`li`,{className:`list-row`,children:[S(`div`,{className:`font-medium`,children:`18:40`}),S(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),S(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:S(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:S(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>x(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[x(`div`,{className:`flex items-center justify-between`,children:[S(`div`,{className:`text-lg font-semibold`,children:e.label}),S(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),S(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`content-panels`,code:te,children:Ne});_(()=>m(e,d,Me))});let Pe=a(`rue:component:anchor`);t(d,Pe);let Fe=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{type:`card`,activeKey:he.value,onChange:e=>he.value=e,tabBarExtraContent:{left:S(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:S(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`tab-bar-extra-content`,code:ne,children:Fe});_(()=>m(e,d,Pe))});let Ie=a(`rue:component:anchor`);t(d,Ie);let Le=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{centered:!0,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Le});_(()=>m(e,d,Ie))});let Re=a(`rue:component:anchor`);t(d,Re);let ze=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm overflow-hidden`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{tabPlacement:k.value,type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,className:`min-h-72`,tabBarExtraContent:{left:x(`div`,{className:`flex gap-2`,children:[S(`button`,{className:`btn btn-xs ${k.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>k.value=`start`,children:`start`}),S(`button`,{className:`btn btn-xs ${k.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>k.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`tab-placement`,code:re,children:ze});_(()=>m(e,d,Re))});let Be=a(`rue:component:anchor`);t(d,Be);let Ve=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{type:`editable-card`,activeKey:be.value,onChange:e=>be.value=e,onEdit:Se,items:xe.value});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`editable-card`,code:ie,children:Ve});_(()=>m(e,d,Be))});let He=a(`rue:component:anchor`);t(d,He);let Ue=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{type:`line`,activeKey:ve.value,onChange:e=>ve.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:S(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:S(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:S(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:Ue});_(()=>m(e,d,He))});let We=a(`rue:component:anchor`);t(d,We);let Ge=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=c(`div`,o);t(o,l),e(l,`flex flex-col items-center gap-6`);let u=a(`rue:component:anchor`);t(l,u),r(()=>{let e=h(w,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:se.value,onChange:e=>se.value=e});_(()=>m(e,l,u))});let d=a(`rue:component:anchor`);t(l,d),r(()=>{let e=h(w,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:ce.value,onChange:e=>ce.value=e});_(()=>m(e,l,d))});let f=a(`rue:component:anchor`);t(l,f),r(()=>{let e=h(w,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:le.value,onChange:e=>le.value=e});_(()=>m(e,l,f))});let p=a(`rue:component:anchor`);t(l,p),r(()=>{let e=h(w,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:ue.value,onChange:e=>ue.value=e});_(()=>m(e,l,p))});let g=a(`rue:component:anchor`);return t(l,g),r(()=>{let e=h(w,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:de.value,onChange:e=>de.value=e});_(()=>m(e,l,g))}),n});r(()=>{let e=h(D,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ge});_(()=>m(e,d,We))});let Ke=a(`rue:component:anchor`);t(d,Ke);let qe=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:fe.value,onChange:e=>fe.value=e});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:qe});_(()=>m(e,d,Ke))});let Je=a(`rue:component:anchor`);t(d,Je);let Ye=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:pe.value,onChange:e=>pe.value=e});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Ye});_(()=>m(e,d,Je))});let Xe=a(`rue:component:anchor`);t(d,Xe);let Ze=f(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`card bg-base-100 shadow-sm`);let o=c(`div`,i);t(i,o),e(o,`card-body gap-4`);let l=a(`rue:component:anchor`);return t(o,l),r(()=>{let e=h(w,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:me.value,onChange:e=>me.value=e});_(()=>m(e,o,l))}),n});r(()=>{let e=h(D,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Ze});_(()=>m(e,d,Xe))});let B=c(`h2`,d);t(d,B),l(B,`id`,`tabs-api`),t(B,i(`API`));let Qe=c(`p`,d);t(d,Qe),t(Qe,i(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let $e=a(`rue:component:anchor`);t(d,$e),r(()=>{let e=h(ee,{rows:ae});_(()=>m(e,d,$e))});let et=c(`div`,d);t(d,et),e(et,`not-prose mt-6`);let tt=a(`rue:component:anchor`);t(d,tt),r(()=>{let e=h(ee,{rows:oe});_(()=>m(e,d,tt))});let V=c(`div`,d);t(d,V),e(V,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let H=c(`div`,V);t(V,H),e(H,`font-semibold`),t(H,i(`使用建议`));let U=c(`div`,V);t(V,U),e(U,`mt-2 grid gap-2 md:grid-cols-2`);let W=c(`div`,U);t(U,W);let nt=c(`code`,W);t(W,nt),t(nt,i(`activeKey + onChange`)),t(W,i(`适合和路由、筛选条件、外部状态统一联动。`));let G=c(`div`,U);t(U,G);let rt=c(`code`,G);t(G,rt),t(rt,i(`defaultActiveKey`)),t(G,i(`适合静态文档、局部 demo 或无需外部接管的轻交互场景。`));let K=c(`div`,U);t(U,K),t(K,i(`复杂标签头优先用`));let it=c(`code`,K);t(K,it),t(it,i(`icon`)),t(K,i(`+ 文本`));let at=c(`code`,K);t(K,at),t(at,i(`label`));let ot=o(K);t(K,ot),u(ot,` `),t(K,i(`组合，兼顾语义和稳定渲染。`));let q=c(`div`,U);t(U,q),t(q,i(`需要完整内容区域切换时给`));let st=c(`code`,q);t(q,st),t(st,i(`items.children`));let ct=o(q);t(q,ct),u(ct,` `),t(q,i(`传面板节点；只做导航标签时可以只传`));let lt=c(`code`,q);t(q,lt),t(lt,i(`label`)),t(q,i(`。`));let ut=c(`h2`,d);t(d,ut),t(ut,i(`FAQ`));let dt=c(`h3`,d);t(d,dt),t(dt,i(`activeKey 和 defaultActiveKey 怎么选？`));let J=c(`p`,d);t(d,J);let ft=c(`code`,J);t(J,ft),t(ft,i(`activeKey`)),t(J,i(`是受控模式，当前激活项由外部状态决定；`));let pt=c(`code`,J);t(J,pt),t(pt,i(`defaultActiveKey`)),t(J,i(`只设置初始值，后续切换由组件内部维护。`));let mt=c(`h3`,d);t(d,mt),t(mt,i(`style 和 type 会冲突吗？`));let Y=c(`p`,d);t(d,Y);let ht=c(`code`,Y);t(Y,ht),t(ht,i(`type`)),t(Y,i(`更偏语义能力，像`));let gt=c(`code`,Y);t(Y,gt),t(gt,i(`card`)),t(Y,i(`、`));let _t=c(`code`,Y);t(Y,_t),t(_t,i(`editable-card`));let vt=o(Y);t(Y,vt),u(vt,` `),t(Y,i(`会自动套用适合的视觉； 如果你明确传了`));let yt=c(`code`,Y);t(Y,yt),t(yt,i(`style`)),t(Y,i(`，就以显式样式为准。`));let bt=c(`h3`,d);t(d,bt),t(bt,i(`placement 和 tabPlacement 有什么区别？`));let X=c(`p`,d);t(d,X);let xt=c(`code`,X);t(X,xt),t(xt,i(`placement`)),t(X,i(`只覆盖上下位置；`));let Z=c(`code`,X);t(X,Z),t(Z,i(`tabPlacement`)),t(X,i(`额外支持`));let St=o(X);t(X,St),u(St,` `);let Ct=c(`code`,X);t(X,Ct),t(Ct,i(`start`)),t(X,i(`和`));let wt=c(`code`,X);t(X,wt),t(wt,i(`end`)),t(X,i(`两种垂直摆放，并且优先级更高。`));let Tt=c(`h3`,d);t(d,Tt),t(Tt,i(`为什么复杂 label 建议拆成 icon 和文本？`));let Q=c(`p`,d);t(d,Q),t(Q,i(`当前实现会给`));let Et=c(`code`,Q);t(Q,Et),t(Et,i(`label`)),t(Q,i(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Dt=c(`code`,Q);t(Q,Dt),t(Dt,i(`[object Object]`)),t(Q,i(`，推荐把徽标、点状状态这类前缀放到`));let Ot=c(`code`,Q);t(Q,Ot),t(Ot,i(`icon`)),t(Q,i(`，把主要文案保留在`));let $=c(`code`,Q);return t(Q,$),t($,i(`label`)),t(Q,i(`。`)),n})}),d,p),d})};export{O as default};