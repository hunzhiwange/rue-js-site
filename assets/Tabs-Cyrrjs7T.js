import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,_t as c,d as l,l as u,mt as d,nt as f,ot as p,pt as m,t as h,ut as g,z as _}from"./vapor-runtime-Bp8DIxJg.js";import{a as v,n as y}from"./vapor-helpers-vapor-D3i3KBBg.js";import{n as b,t as x}from"./src-Cl1DK5fX.js";import{n as S}from"./SidebarPlaygroundDesign-CIhn6bFh.js";import{t as C}from"./Code-D55WiaDx.js";import{t as w}from"./tabs-CrC7r95z.js";var T=t=>l(o=>{let s=r(`div`,o);n(s,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let l=r(`div`,s);i(s,l),n(l,`text-xs uppercase tracking-[0.18em] opacity-60`);let d=e(`rue:slot:anchor`);i(l,d),c(()=>{let e=t.title;g(()=>u(e,l,d))});let f=r(`div`,s);i(s,f),n(f,`mt-2 text-2xl font-semibold`);let p=_(f);i(f,p),c(()=>{a(p,t.value)});let m=r(`div`,s);i(s,m),n(m,`mt-1 text-sm opacity-75`);let h=e(`rue:slot:anchor`);return i(m,h),c(()=>{let e=t.description;g(()=>u(e,m,h))}),s}),ee=a=>l(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let h=r(`tr`,m);i(m,h);let _=r(`th`,h);i(h,_),i(_,o(`属性`));let v=r(`th`,h);i(h,v),i(v,o(`说明`));let b=r(`th`,h);i(h,b),i(b,o(`类型`));let x=r(`th`,h);i(h,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=y({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,d,f)=>{u(l(()=>{let a=t(),o=r(`tr`,a);i(a,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);i(o,l);let d=r(`code`,l);i(l,d);let f=e(`rue:slot:anchor`);i(d,f),c(()=>{let e=n.prop;g(()=>u(e,d,f))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),c(()=>{let e=n.description;g(()=>u(e,p,m))});let h=r(`td`,o);i(o,h);let _=r(`code`,h);i(h,_);let v=e(`rue:slot:anchor`);i(_,v),c(()=>{let e=n.type;g(()=>u(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;g(()=>u(e,b,x))}),a}),a,o)}})}),f}),E=a=>{let{tabRef:s,tab:_,previewNode:y}=v(`useSetup:0:0`,()=>d(()=>{let e=v(`useRef:1:0`,()=>m());return e.current||=v(`ref:1:1`,()=>p(`preview`)),{tabRef:e,tab:e.current,previewNode:v(`computed:1:2`,()=>f(()=>Array.isArray(a.children)?a.children.find(e=>e!=null&&e!==``):a.children))}}));return l(s=>{let d=r(`div`,s);n(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`h2`,d);i(d,f),n(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(f,o(`# `));let p=e(`rue:slot:anchor`);i(f,p),c(()=>{let e=a.title;g(()=>u(e,f,p))});let m=e(`rue:component:anchor`);i(d,m),c(()=>{let e=h(w,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_.value,onChange:e=>_.value=e,className:`mb-3`});g(()=>u(e,d,m))});let v=e(`rue:slot:anchor`);return i(d,v),c(()=>{let n=_.value===`preview`?y.get():l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:a.code});g(()=>u(e,n,r))}),n});g(()=>u(n,d,v))}),d})},te=String.raw`<Tabs
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，兼容 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],D=()=>{let{stateRef:f,activeBasic:y,activeBorder:C,activeLift:D,activeBox:se,activeXs:ce,activeSm:le,activeMd:ue,activeLg:de,activeXl:fe,activeBottom:pe,activeDisabled:me,activeCustom:he,activeExtra:ge,activeCentered:_e,placementMode:O,activePlacementTab:ve,activeIndicator:ye,editableCounter:be,editableActiveKey:xe,editableItems:Se,handleEditableEdit:Ce}=v(`useSetup:0:0:dup1`,()=>d(()=>{let e=v(`useRef:1:3`,()=>m());e.current||={activeBasic:v(`ref:1:4`,()=>p(`tab2`)),activeBorder:v(`ref:1:5`,()=>p(`tab2`)),activeLift:v(`ref:1:6`,()=>p(`tab2`)),activeBox:v(`ref:1:7`,()=>p(`tab2`)),activeXs:v(`ref:1:8`,()=>p(`xs2`)),activeSm:v(`ref:1:9`,()=>p(`sm2`)),activeMd:v(`ref:1:10`,()=>p(`md2`)),activeLg:v(`ref:1:11`,()=>p(`lg2`)),activeXl:v(`ref:1:12`,()=>p(`xl2`)),activeBottom:v(`ref:1:13`,()=>p(`b2`)),activeDisabled:v(`ref:1:14`,()=>p(`d2`)),activeCustom:v(`ref:1:15`,()=>p(`c2`)),activeExtra:v(`ref:1:16`,()=>p(`overview`)),activeCentered:v(`ref:1:17`,()=>p(`beta`)),placementMode:v(`ref:1:18`,()=>p(`start`)),activePlacementTab:v(`ref:1:19`,()=>p(`design`)),activeIndicator:v(`ref:1:20`,()=>p(`metrics`)),editableCounter:v(`ref:1:21`,()=>p(3)),editableActiveKey:v(`ref:1:22`,()=>p(`draft-2`)),editableItems:v(`ref:1:23`,()=>p([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]))};let t=e.current.activeBasic,n=e.current.activeBorder,r=e.current.activeLift,i=e.current.activeBox,a=e.current.activeXs,o=e.current.activeSm,s=e.current.activeMd,c=e.current.activeLg,l=e.current.activeXl,u=e.current.activeBottom,d=e.current.activeDisabled,f=e.current.activeCustom,h=e.current.activeExtra,g=e.current.activeCentered,_=e.current.placementMode,y=e.current.activePlacementTab,b=e.current.activeIndicator,x=e.current.editableCounter,S=e.current.editableActiveKey,C=e.current.editableItems;return{stateRef:e,activeBasic:t,activeBorder:n,activeLift:r,activeBox:i,activeXs:a,activeSm:o,activeMd:s,activeLg:c,activeXl:l,activeBottom:u,activeDisabled:d,activeCustom:f,activeExtra:h,activeCentered:g,placementMode:_,activePlacementTab:y,activeIndicator:b,editableCounter:x,editableActiveKey:S,editableItems:C,handleEditableEdit:(e,t)=>{if(t===`add`){x.value+=1;let e=`draft-${x.value}`;C.value=[...C.value,{key:e,label:`Draft ${x.value}`,children:`这里是新建标签 ${x.value} 的上下文内容。`}],S.value=e;return}let n=String(e),r=C.value.filter(e=>e.key!==n);C.value=r,S.value===n&&(S.value=r[0]?.key??``)}}}));return l(d=>{let f=t(),p=e(`rue:component:anchor`);return i(f,p),u(h(S,{children:l(()=>{let d=t(),f=r(`div`,d);i(d,f),n(f,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,f);i(f,p),i(p,o(`Tabs 选项卡`));let m=r(`p`,f);i(f,m),n(m,`text-sm mt-3 mb-3`),i(m,o(`Tabs 现在除了保留 Rue 当前的 box / border / lift 视觉，还补齐了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let v=r(`div`,f);i(f,v),n(v,`text-sm`);let S=r(`a`,v);i(v,S),s(S,`href`,`https://daisyui.com/components/tab/`),s(S,`target`,`_blank`),i(S,o(`查看 Tabs 静态样式`));let be=r(`h2`,f);i(f,be),i(be,o(`何时使用`));let k=r(`ul`,f);i(f,k);let A=r(`li`,k);i(k,A),i(A,o(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let we=r(`li`,k);i(k,we),i(we,o(`既想保留 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let j=r(`div`,f);i(f,j),n(j,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let M=r(`div`,j);i(j,M),n(M,`rounded-box bg-base-200/50 p-3`);let N=r(`div`,M);i(M,N),n(N,`font-medium`),i(N,o(`受控与非受控`));let P=r(`div`,M);i(M,P),n(P,`mt-1 opacity-75`),i(P,o("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let F=r(`div`,j);i(j,F),n(F,`rounded-box bg-base-200/50 p-3`);let I=r(`div`,F);i(F,I),n(I,`font-medium`),i(I,o(`内容与布局`));let L=r(`div`,F);i(F,L),n(L,`mt-1 opacity-75`),i(L,o("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let R=r(`div`,j);i(j,R),n(R,`rounded-box bg-base-200/50 p-3`);let z=r(`div`,R);i(R,z),n(z,`font-medium`),i(z,o(`操作能力`));let B=r(`div`,R);i(R,B),n(B,`mt-1 opacity-75`),i(B,o("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let Te=e(`rue:component:anchor`);i(f,Te);let Ee=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:y.value,onChange:e=>y.value=e});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Ee});g(()=>u(e,f,Te))});let De=e(`rue:component:anchor`);i(f,De);let Oe=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:C.value,onChange:e=>C.value=e});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:Oe});g(()=>u(e,f,De))});let ke=e(`rue:component:anchor`);i(f,ke);let Ae=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:D.value,onChange:e=>D.value=e});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:Ae});g(()=>u(e,f,ke))});let je=e(`rue:component:anchor`);i(f,je);let Me=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:se.value,onChange:e=>se.value=e});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:Me});g(()=>u(e,f,je))});let Ne=e(`rue:component:anchor`);i(f,Ne);let Pe=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[x(T,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),x(T,{title:`QA`,value:`7`,description:`待验证缺陷`}),x(T,{title:`Review`,value:`3`,description:`待合并 PR`})]}),b(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),x(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),x(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),b(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[x(`span`,{children:`设计`}),x(`span`,{children:`联调`}),x(`span`,{children:`回归`}),x(`span`,{children:`发布`})]})]}),b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),b(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[x(`li`,{children:`锁定接口字段命名`}),x(`li`,{children:`同步埋点事件与告警阈值`}),x(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:b(`div`,{className:`space-y-3`,children:[b(`ul`,{className:`list gap-2`,children:[b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`10:15`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`14:35`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`16:20`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补齐埋点与告警配置。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`18:40`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),x(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:x(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:x(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>b(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-lg font-semibold`,children:e.label}),x(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),x(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`content-panels`,code:te,children:Pe});g(()=>u(e,f,Ne))});let Fe=e(`rue:component:anchor`);i(f,Fe);let Ie=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{type:`card`,activeKey:ge.value,onChange:e=>ge.value=e,tabBarExtraContent:{left:x(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:x(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`tab-bar-extra-content`,code:ne,children:Ie});g(()=>u(e,f,Fe))});let Le=e(`rue:component:anchor`);i(f,Le);let Re=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{centered:!0,type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Re});g(()=>u(e,f,Le))});let ze=e(`rue:component:anchor`);i(f,ze);let Be=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm overflow-hidden`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{tabPlacement:O.value,type:`line`,activeKey:ve.value,onChange:e=>ve.value=e,className:`min-h-72`,tabBarExtraContent:{left:b(`div`,{className:`flex gap-2`,children:[x(`button`,{className:`btn btn-xs ${O.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`start`,children:`start`}),x(`button`,{className:`btn btn-xs ${O.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`tab-placement`,code:re,children:Be});g(()=>u(e,f,ze))});let Ve=e(`rue:component:anchor`);i(f,Ve);let He=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{type:`editable-card`,activeKey:xe.value,onChange:e=>xe.value=e,onEdit:Ce,items:Se.value});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`editable-card`,code:ie,children:He});g(()=>u(e,f,Ve))});let Ue=e(`rue:component:anchor`);i(f,Ue);let We=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{type:`line`,activeKey:ye.value,onChange:e=>ye.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:We});g(()=>u(e,f,Ue))});let Ge=e(`rue:component:anchor`);i(f,Ge);let Ke=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=r(`div`,s);i(s,l),n(l,`flex flex-col items-center gap-6`);let d=e(`rue:component:anchor`);i(l,d),c(()=>{let e=h(w,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:ce.value,onChange:e=>ce.value=e});g(()=>u(e,l,d))});let f=e(`rue:component:anchor`);i(l,f),c(()=>{let e=h(w,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:le.value,onChange:e=>le.value=e});g(()=>u(e,l,f))});let p=e(`rue:component:anchor`);i(l,p),c(()=>{let e=h(w,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:ue.value,onChange:e=>ue.value=e});g(()=>u(e,l,p))});let m=e(`rue:component:anchor`);i(l,m),c(()=>{let e=h(w,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:de.value,onChange:e=>de.value=e});g(()=>u(e,l,m))});let _=e(`rue:component:anchor`);return i(l,_),c(()=>{let e=h(w,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:fe.value,onChange:e=>fe.value=e});g(()=>u(e,l,_))}),a});c(()=>{let e=h(E,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ke});g(()=>u(e,f,Ge))});let qe=e(`rue:component:anchor`);i(f,qe);let Je=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:pe.value,onChange:e=>pe.value=e});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:Je});g(()=>u(e,f,qe))});let Ye=e(`rue:component:anchor`);i(f,Ye);let Xe=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:me.value,onChange:e=>me.value=e});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Xe});g(()=>u(e,f,Ye))});let Ze=e(`rue:component:anchor`);i(f,Ze);let Qe=l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`card bg-base-100 shadow-sm`);let s=r(`div`,o);i(o,s),n(s,`card-body gap-4`);let l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=h(w,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:he.value,onChange:e=>he.value=e});g(()=>u(e,s,l))}),a});c(()=>{let e=h(E,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Qe});g(()=>u(e,f,Ze))});let V=r(`h2`,f);i(f,V),s(V,`id`,`tabs-api`),i(V,o(`API`));let $e=r(`p`,f);i(f,$e),i($e,o(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let et=e(`rue:component:anchor`);i(f,et),c(()=>{let e=h(ee,{rows:ae});g(()=>u(e,f,et))});let tt=r(`div`,f);i(f,tt),n(tt,`not-prose mt-6`);let nt=e(`rue:component:anchor`);i(f,nt),c(()=>{let e=h(ee,{rows:oe});g(()=>u(e,f,nt))});let H=r(`div`,f);i(f,H),n(H,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let U=r(`div`,H);i(H,U),n(U,`font-semibold`),i(U,o(`使用建议`));let W=r(`div`,H);i(H,W),n(W,`mt-2 grid gap-2 md:grid-cols-2`);let G=r(`div`,W);i(W,G);let rt=r(`code`,G);i(G,rt),i(rt,o(`activeKey + onChange`)),i(G,o(`适合和路由、筛选条件、外部状态统一联动。`));let K=r(`div`,W);i(W,K);let it=r(`code`,K);i(K,it),i(it,o(`defaultActiveKey`)),i(K,o(`适合静态文档、局部 demo 或无需外部接管的轻交互场景。`));let q=r(`div`,W);i(W,q),i(q,o(`复杂标签头优先用`));let at=r(`code`,q);i(q,at),i(at,o(`icon`)),i(q,o(`+ 文本`));let ot=r(`code`,q);i(q,ot),i(ot,o(`label`));let st=_(q);i(q,st),a(st,` `),i(q,o(`组合，兼顾语义和稳定渲染。`));let J=r(`div`,W);i(W,J),i(J,o(`需要完整内容区域切换时给`));let ct=r(`code`,J);i(J,ct),i(ct,o(`items.children`));let lt=_(J);i(J,lt),a(lt,` `),i(J,o(`传面板节点；只做导航标签时可以只传`));let ut=r(`code`,J);i(J,ut),i(ut,o(`label`)),i(J,o(`。`));let dt=r(`h2`,f);i(f,dt),i(dt,o(`FAQ`));let ft=r(`h3`,f);i(f,ft),i(ft,o(`activeKey 和 defaultActiveKey 怎么选？`));let Y=r(`p`,f);i(f,Y);let pt=r(`code`,Y);i(Y,pt),i(pt,o(`activeKey`)),i(Y,o(`是受控模式，当前激活项由外部状态决定；`));let mt=r(`code`,Y);i(Y,mt),i(mt,o(`defaultActiveKey`)),i(Y,o(`只设置初始值，后续切换由组件内部维护。`));let ht=r(`h3`,f);i(f,ht),i(ht,o(`style 和 type 会冲突吗？`));let X=r(`p`,f);i(f,X);let gt=r(`code`,X);i(X,gt),i(gt,o(`type`)),i(X,o(`更偏语义能力，像`));let _t=r(`code`,X);i(X,_t),i(_t,o(`card`)),i(X,o(`、`));let vt=r(`code`,X);i(X,vt),i(vt,o(`editable-card`));let yt=_(X);i(X,yt),a(yt,` `),i(X,o(`会自动套用适合的视觉； 如果你明确传了`));let bt=r(`code`,X);i(X,bt),i(bt,o(`style`)),i(X,o(`，就以显式样式为准。`));let xt=r(`h3`,f);i(f,xt),i(xt,o(`placement 和 tabPlacement 有什么区别？`));let Z=r(`p`,f);i(f,Z);let St=r(`code`,Z);i(Z,St),i(St,o(`placement`)),i(Z,o(`只覆盖上下位置；`));let Ct=r(`code`,Z);i(Z,Ct),i(Ct,o(`tabPlacement`)),i(Z,o(`额外支持`));let wt=_(Z);i(Z,wt),a(wt,` `);let Tt=r(`code`,Z);i(Z,Tt),i(Tt,o(`start`)),i(Z,o(`和`));let Et=r(`code`,Z);i(Z,Et),i(Et,o(`end`)),i(Z,o(`两种垂直摆放，并且优先级更高。`));let Q=r(`h3`,f);i(f,Q),i(Q,o(`为什么复杂 label 建议拆成 icon 和文本？`));let $=r(`p`,f);i(f,$),i($,o(`当前实现会给`));let Dt=r(`code`,$);i($,Dt),i(Dt,o(`label`)),i($,o(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Ot=r(`code`,$);i($,Ot),i(Ot,o(`[object Object]`)),i($,o(`，推荐把徽标、点状状态这类前缀放到`));let kt=r(`code`,$);i($,kt),i(kt,o(`icon`)),i($,o(`，把主要文案保留在`));let At=r(`code`,$);return i($,At),i(At,o(`label`)),i($,o(`。`)),d})}),f,p),f})};export{D as default};