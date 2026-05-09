import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,lt as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as v,t as y}from"./src-DP0sEeZS.js";import{n as b}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as x}from"./Code-C8wy38VS.js";import{t as S}from"./tabs-B-QPmbH8.js";var C=({title:t,value:n,description:i})=>m(()=>{let a=e(`div`);o(a,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let c=e(`div`);l(a,c),o(c,`text-xs uppercase tracking-[0.18em] opacity-60`);let u=r(c);l(c,u),d(()=>{s(u,t)});let f=e(`div`);l(a,f),o(f,`mt-2 text-2xl font-semibold`);let p=r(f);l(f,p),d(()=>{s(p,n)});let m=e(`div`);l(a,m),o(m,`mt-1 text-sm opacity-75`);let h=r(m);return l(m,h),d(()=>{s(h,i)}),a}),ee=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=e(`table`);l(s,u),o(u,`table table-zebra`);let f=e(`thead`);l(u,f);let p=e(`tr`);l(f,p);let h=e(`th`);l(p,h),l(h,n(`属性`));let g=e(`th`);l(p,g),l(g,n(`说明`));let v=e(`th`);l(p,v),l(v,n(`类型`));let y=e(`th`);l(p,y),l(y,n(`默认值`));let b=e(`tbody`);l(u,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,u)=>{c(m(()=>{let r=a(),o=e(`tr`);l(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let u=e(`code`);l(s,u);let f=i(`rue:slot:anchor`);l(u,f),d(()=>{let e=n.prop;c(e,u,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),w=({title:t,code:_,children:v})=>{let{tabRef:y,tab:b}=g(`useSetup:0:0`,()=>h(()=>{let e=g(`useRef:1:0`,()=>u());return e.current||=g(`ref:1:1`,()=>f(`preview`)),{tabRef:e,tab:e.current}})),C=Array.isArray(v)?v.find(e=>e!=null&&e!==``):v;return m(()=>{let u=e(`div`);o(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`h2`);l(u,f),o(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(f,n(`# `));let h=r(f);l(f,h),d(()=>{s(h,t)});let g=i(`rue:component:anchor`);l(u,g),d(()=>{c(p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:b.value,onChange:e=>b.value=e,className:`mb-3`}),u,g)});let v=i(`rue:slot:anchor`);return l(u,v),d(()=>{c(b.value===`preview`?C:m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(x,{className:`mt-2`,lang:`tsx`,code:_}),e,t)}),e}),u,v)}),u})},te=String.raw`<Tabs
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，兼容 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],T=()=>{let{stateRef:_,activeBasic:x,activeBorder:T,activeLift:se,activeBox:ce,activeXs:le,activeSm:ue,activeMd:de,activeLg:fe,activeXl:E,activeBottom:D,activeDisabled:O,activeCustom:pe,activeExtra:me,activeCentered:he,placementMode:k,activePlacementTab:ge,activeIndicator:_e,editableCounter:ve,editableActiveKey:ye,editableItems:be,handleEditableEdit:xe}=g(`useSetup:0:0`,()=>h(()=>{let e=g(`useRef:1:2`,()=>u());e.current||={activeBasic:g(`ref:1:3`,()=>f(`tab2`)),activeBorder:g(`ref:1:4`,()=>f(`tab2`)),activeLift:g(`ref:1:5`,()=>f(`tab2`)),activeBox:g(`ref:1:6`,()=>f(`tab2`)),activeXs:g(`ref:1:7`,()=>f(`xs2`)),activeSm:g(`ref:1:8`,()=>f(`sm2`)),activeMd:g(`ref:1:9`,()=>f(`md2`)),activeLg:g(`ref:1:10`,()=>f(`lg2`)),activeXl:g(`ref:1:11`,()=>f(`xl2`)),activeBottom:g(`ref:1:12`,()=>f(`b2`)),activeDisabled:g(`ref:1:13`,()=>f(`d2`)),activeCustom:g(`ref:1:14`,()=>f(`c2`)),activeExtra:g(`ref:1:15`,()=>f(`overview`)),activeCentered:g(`ref:1:16`,()=>f(`beta`)),placementMode:g(`ref:1:17`,()=>f(`start`)),activePlacementTab:g(`ref:1:18`,()=>f(`design`)),activeIndicator:g(`ref:1:19`,()=>f(`metrics`)),editableCounter:g(`ref:1:20`,()=>f(3)),editableActiveKey:g(`ref:1:21`,()=>f(`draft-2`)),editableItems:g(`ref:1:22`,()=>f([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]))};let t=e.current.activeBasic,n=e.current.activeBorder,r=e.current.activeLift,i=e.current.activeBox,a=e.current.activeXs,o=e.current.activeSm,s=e.current.activeMd,c=e.current.activeLg,l=e.current.activeXl,d=e.current.activeBottom,p=e.current.activeDisabled,m=e.current.activeCustom,h=e.current.activeExtra,_=e.current.activeCentered,v=e.current.placementMode,y=e.current.activePlacementTab,b=e.current.activeIndicator,x=e.current.editableCounter,S=e.current.editableActiveKey,C=e.current.editableItems;return{stateRef:e,activeBasic:t,activeBorder:n,activeLift:r,activeBox:i,activeXs:a,activeSm:o,activeMd:s,activeLg:c,activeXl:l,activeBottom:d,activeDisabled:p,activeCustom:m,activeExtra:h,activeCentered:_,placementMode:v,activePlacementTab:y,activeIndicator:b,editableCounter:x,editableActiveKey:S,editableItems:C,handleEditableEdit:(e,t)=>{if(t===`add`){x.value+=1;let e=`draft-${x.value}`;C.value=[...C.value,{key:e,label:`Draft ${x.value}`,children:`这里是新建标签 ${x.value} 的上下文内容。`}],S.value=e;return}let n=String(e),r=C.value.filter(e=>e.key!==n);C.value=r,S.value===n&&(S.value=r[0]?.key??``)}}}));return m(()=>{let u=a(),f=i(`rue:component:anchor`);return l(u,f),c(p(b,{children:m(()=>{let u=a(),f=e(`div`);l(u,f),o(f,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);l(f,h),l(h,n(`Tabs 选项卡`));let g=e(`p`);l(f,g),o(g,`text-sm mt-3 mb-3`),l(g,n(`Tabs 现在除了保留 Rue 当前的 box / border / lift 视觉，还补齐了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let _=e(`div`);l(f,_),o(_,`text-sm`);let b=e(`a`);l(_,b),t(b,`href`,`https://daisyui.com/components/tab/`),t(b,`target`,`_blank`),l(b,n(`查看 Tabs 静态样式`));let ve=e(`h2`);l(f,ve),l(ve,n(`何时使用`));let A=e(`ul`);l(f,A);let Se=e(`li`);l(A,Se),l(Se,n(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let Ce=e(`li`);l(A,Ce),l(Ce,n(`既想保留 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let j=e(`div`);l(f,j),o(j,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let M=e(`div`);l(j,M),o(M,`rounded-box bg-base-200/50 p-3`);let N=e(`div`);l(M,N),o(N,`font-medium`),l(N,n(`受控与非受控`));let P=e(`div`);l(M,P),o(P,`mt-1 opacity-75`),l(P,n("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let F=e(`div`);l(j,F),o(F,`rounded-box bg-base-200/50 p-3`);let I=e(`div`);l(F,I),o(I,`font-medium`),l(I,n(`内容与布局`));let L=e(`div`);l(F,L),o(L,`mt-1 opacity-75`),l(L,n("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let R=e(`div`);l(j,R),o(R,`rounded-box bg-base-200/50 p-3`);let z=e(`div`);l(R,z),o(z,`font-medium`),l(z,n(`操作能力`));let B=e(`div`);l(R,B),o(B,`mt-1 opacity-75`),l(B,n("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let we=i(`rue:component:anchor`);l(f,we);let Te=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:x.value,onChange:e=>x.value=e}),r,s)}),t});d(()=>{c(p(w,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Te}),f,we)});let Ee=i(`rue:component:anchor`);l(f,Ee);let De=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:T.value,onChange:e=>T.value=e}),r,s)}),t});d(()=>{c(p(w,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:De}),f,Ee)});let Oe=i(`rue:component:anchor`);l(f,Oe);let ke=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:se.value,onChange:e=>se.value=e}),r,s)}),t});d(()=>{c(p(w,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:ke}),f,Oe)});let Ae=i(`rue:component:anchor`);l(f,Ae);let je=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:ce.value,onChange:e=>ce.value=e}),r,s)}),t});d(()=>{c(p(w,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:je}),f,Ae)});let Me=i(`rue:component:anchor`);l(f,Me);let Ne=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:v(`div`,{className:`space-y-4`,children:[v(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[y(C,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),y(C,{title:`QA`,value:`7`,description:`待验证缺陷`}),y(C,{title:`Review`,value:`3`,description:`待合并 PR`})]}),v(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[v(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[v(`div`,{className:`flex items-center justify-between`,children:[y(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),y(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),y(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),v(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[y(`span`,{children:`设计`}),y(`span`,{children:`联调`}),y(`span`,{children:`回归`}),y(`span`,{children:`发布`})]})]}),v(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[y(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),v(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[y(`li`,{children:`锁定接口字段命名`}),y(`li`,{children:`同步埋点事件与告警阈值`}),y(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:v(`div`,{className:`space-y-3`,children:[v(`ul`,{className:`list gap-2`,children:[v(`li`,{className:`list-row`,children:[y(`div`,{className:`font-medium`,children:`10:15`}),y(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),v(`li`,{className:`list-row`,children:[y(`div`,{className:`font-medium`,children:`14:35`}),y(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),v(`li`,{className:`list-row`,children:[y(`div`,{className:`font-medium`,children:`16:20`}),y(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补齐埋点与告警配置。`})]}),v(`li`,{className:`list-row`,children:[y(`div`,{className:`font-medium`,children:`18:40`}),y(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),y(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:y(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:y(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>v(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[v(`div`,{className:`flex items-center justify-between`,children:[y(`div`,{className:`text-lg font-semibold`,children:e.label}),y(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),y(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]}),r,s)}),t});d(()=>{c(p(w,{title:`content-panels`,code:te,children:Ne}),f,Me)});let Pe=i(`rue:component:anchor`);l(f,Pe);let Fe=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{type:`card`,activeKey:me.value,onChange:e=>me.value=e,tabBarExtraContent:{left:y(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:y(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]}),r,s)}),t});d(()=>{c(p(w,{title:`tab-bar-extra-content`,code:ne,children:Fe}),f,Pe)});let Ie=i(`rue:component:anchor`);l(f,Ie);let Le=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{centered:!0,type:`line`,activeKey:he.value,onChange:e=>he.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]}),r,s)}),t});d(()=>{c(p(w,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Le}),f,Ie)});let Re=i(`rue:component:anchor`);l(f,Re);let ze=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm overflow-hidden`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{tabPlacement:k.value,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,className:`min-h-72`,tabBarExtraContent:{left:v(`div`,{className:`flex gap-2`,children:[y(`button`,{className:`btn btn-xs ${k.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>k.value=`start`,children:`start`}),y(`button`,{className:`btn btn-xs ${k.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>k.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]}),r,s)}),t});d(()=>{c(p(w,{title:`tab-placement`,code:re,children:ze}),f,Re)});let Be=i(`rue:component:anchor`);l(f,Be);let Ve=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{type:`editable-card`,activeKey:ye.value,onChange:e=>ye.value=e,onEdit:xe,items:be.value}),r,s)}),t});d(()=>{c(p(w,{title:`editable-card`,code:ie,children:Ve}),f,Be)});let He=i(`rue:component:anchor`);l(f,He);let Ue=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:y(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:y(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:y(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]}),r,s)}),t});d(()=>{c(p(w,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:Ue}),f,He)});let We=i(`rue:component:anchor`);l(f,We);let Ge=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=e(`div`);l(r,s),o(s,`flex flex-col items-center gap-6`);let u=i(`rue:component:anchor`);l(s,u),d(()=>{c(p(S,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:le.value,onChange:e=>le.value=e}),s,u)});let f=i(`rue:component:anchor`);l(s,f),d(()=>{c(p(S,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:ue.value,onChange:e=>ue.value=e}),s,f)});let m=i(`rue:component:anchor`);l(s,m),d(()=>{c(p(S,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:de.value,onChange:e=>de.value=e}),s,m)});let h=i(`rue:component:anchor`);l(s,h),d(()=>{c(p(S,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:fe.value,onChange:e=>fe.value=e}),s,h)});let g=i(`rue:component:anchor`);return l(s,g),d(()=>{c(p(S,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:E.value,onChange:e=>E.value=e}),s,g)}),t});d(()=>{c(p(w,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ge}),f,We)});let Ke=i(`rue:component:anchor`);l(f,Ke);let qe=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:D.value,onChange:e=>D.value=e}),r,s)}),t});d(()=>{c(p(w,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:qe}),f,Ke)});let Je=i(`rue:component:anchor`);l(f,Je);let Ye=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:O.value,onChange:e=>O.value=e}),r,s)}),t});d(()=>{c(p(w,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Ye}),f,Je)});let Xe=i(`rue:component:anchor`);l(f,Xe);let Ze=m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`card bg-base-100 shadow-sm`);let r=e(`div`);l(n,r),o(r,`card-body gap-4`);let s=i(`rue:component:anchor`);return l(r,s),d(()=>{c(p(S,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:pe.value,onChange:e=>pe.value=e}),r,s)}),t});d(()=>{c(p(w,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Ze}),f,Xe)});let V=e(`h2`);l(f,V),t(V,`id`,`tabs-api`),l(V,n(`API`));let Qe=e(`p`);l(f,Qe),l(Qe,n(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let H=i(`rue:component:anchor`);l(f,H),d(()=>{c(p(ee,{rows:ae}),f,H)});let $e=e(`div`);l(f,$e),o($e,`not-prose mt-6`);let et=i(`rue:component:anchor`);l(f,et),d(()=>{c(p(ee,{rows:oe}),f,et)});let U=e(`div`);l(f,U),o(U,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let W=e(`div`);l(U,W),o(W,`font-semibold`),l(W,n(`使用建议`));let G=e(`div`);l(U,G),o(G,`mt-2 grid gap-2 md:grid-cols-2`);let K=e(`div`);l(G,K);let tt=e(`code`);l(K,tt),l(tt,n(`activeKey + onChange`)),l(K,n(`适合和路由、筛选条件、外部状态统一联动。`));let q=e(`div`);l(G,q);let nt=e(`code`);l(q,nt),l(nt,n(`defaultActiveKey`)),l(q,n(`适合静态文档、局部 demo 或无需外部接管的轻交互场景。`));let J=e(`div`);l(G,J),l(J,n(`复杂标签头优先用`));let rt=e(`code`);l(J,rt),l(rt,n(`icon`)),l(J,n(`+ 文本`));let it=e(`code`);l(J,it),l(it,n(`label`));let at=r(J);l(J,at),s(at,` `),l(J,n(`组合，兼顾语义和稳定渲染。`));let Y=e(`div`);l(G,Y),l(Y,n(`需要完整内容区域切换时给`));let ot=e(`code`);l(Y,ot),l(ot,n(`items.children`));let st=r(Y);l(Y,st),s(st,` `),l(Y,n(`传面板节点；只做导航标签时可以只传`));let ct=e(`code`);l(Y,ct),l(ct,n(`label`)),l(Y,n(`。`));let lt=e(`h2`);l(f,lt),l(lt,n(`FAQ`));let ut=e(`h3`);l(f,ut),l(ut,n(`activeKey 和 defaultActiveKey 怎么选？`));let X=e(`p`);l(f,X);let dt=e(`code`);l(X,dt),l(dt,n(`activeKey`)),l(X,n(`是受控模式，当前激活项由外部状态决定；`));let ft=e(`code`);l(X,ft),l(ft,n(`defaultActiveKey`)),l(X,n(`只设置初始值，后续切换由组件内部维护。`));let pt=e(`h3`);l(f,pt),l(pt,n(`style 和 type 会冲突吗？`));let Z=e(`p`);l(f,Z);let mt=e(`code`);l(Z,mt),l(mt,n(`type`)),l(Z,n(`更偏语义能力，像`));let ht=e(`code`);l(Z,ht),l(ht,n(`card`)),l(Z,n(`、`));let gt=e(`code`);l(Z,gt),l(gt,n(`editable-card`));let _t=r(Z);l(Z,_t),s(_t,` `),l(Z,n(`会自动套用适合的视觉； 如果你明确传了`));let vt=e(`code`);l(Z,vt),l(vt,n(`style`)),l(Z,n(`，就以显式样式为准。`));let yt=e(`h3`);l(f,yt),l(yt,n(`placement 和 tabPlacement 有什么区别？`));let Q=e(`p`);l(f,Q);let bt=e(`code`);l(Q,bt),l(bt,n(`placement`)),l(Q,n(`只覆盖上下位置；`));let xt=e(`code`);l(Q,xt),l(xt,n(`tabPlacement`)),l(Q,n(`额外支持`));let St=r(Q);l(Q,St),s(St,` `);let Ct=e(`code`);l(Q,Ct),l(Ct,n(`start`)),l(Q,n(`和`));let wt=e(`code`);l(Q,wt),l(wt,n(`end`)),l(Q,n(`两种垂直摆放，并且优先级更高。`));let Tt=e(`h3`);l(f,Tt),l(Tt,n(`为什么复杂 label 建议拆成 icon 和文本？`));let $=e(`p`);l(f,$),l($,n(`当前实现会给`));let Et=e(`code`);l($,Et),l(Et,n(`label`)),l($,n(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Dt=e(`code`);l($,Dt),l(Dt,n(`[object Object]`)),l($,n(`，推荐把徽标、点状状态这类前缀放到`));let Ot=e(`code`);l($,Ot),l(Ot,n(`icon`)),l($,n(`，把主要文案保留在`));let kt=e(`code`);return l($,kt),l(kt,n(`label`)),l($,n(`。`)),u})}),u,f),u})};export{T as default};