import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,ht as s,l as c,lt as l,nt as u,o as d,st as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as y,i as b}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as x}from"./Code-BIscIyEp.js";import{t as S}from"./tabs-CZWMQq5i.js";import{r as C}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as w}from"./preview-test-gate-DumhDfV7.js";var T=e=>c(a=>{let c=o(`div`,a);l(c,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let f=o(`div`,c);i(c,f),l(f,`text-xs uppercase tracking-[0.18em] opacity-60`);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let t=e.title;r(()=>d(t,f,p))});let m=o(`div`,c);i(c,m),l(m,`mt-2 text-2xl font-semibold`);let h=u(m);i(m,h),n(()=>{s(h,e.value)});let g=o(`div`,c);i(c,g),l(g,`mt-1 text-sm opacity-75`);let _=t(`rue:slot:anchor`);return i(g,_),n(()=>{let t=e.description;r(()=>d(t,g,_))}),c}),ee=a=>c(s=>{let u=o(`div`,s);l(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=o(`table`,u);i(u,p),l(p,`table table-zebra`);let h=o(`thead`,p);i(p,h);let g=o(`tr`,h);i(h,g);let _=o(`th`,g);i(g,_),i(_,m(`属性`));let y=o(`th`,g);i(g,y),i(y,m(`说明`));let b=o(`th`,g);i(g,b),i(b,m(`类型`));let x=o(`th`,g);i(g,x),i(x,m(`默认值`));let S=o(`tbody`,p);i(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,l,u,p)=>{d(c(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{f(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let u=o(`code`,l);i(l,u);let p=t(`rue:slot:anchor`);i(u,p),n(()=>{let e=a.prop;r(()=>d(e,u,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>d(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>d(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>d(e,b,x))}),s}),s,l)}})}),u}),E=s=>{let{tab:u,previewNode:f}=_(`useSetup:0:0`,()=>a(()=>({tab:_(`ref:1:0`,()=>g(`preview`)),previewNode:_(`computed:1:1`,()=>h(()=>Array.isArray(s.children)?s.children.find(e=>e!=null&&e!==``):s.children))})));return c(a=>{let h=o(`div`,a);l(h,`component-preview not-prose text-base-content my-6 lg:my-12`);let g=o(`h2`,h);i(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,m(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=s.title;r(()=>d(e,g,_))});let v=t(`rue:component:anchor`);i(h,v),n(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:u.value,onChange:e=>u.value=e,className:`mb-3`});r(()=>d(e,h,v))});let y=t(`rue:slot:anchor`);return i(h,y),n(()=>{let a=u.value===`preview`?w(s.title,f.get()):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:s.code});r(()=>d(e,a,o))}),a});r(()=>d(a,h,y))}),h})},te=String.raw`<Tabs
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，兼容 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],D=()=>{let{activeBasic:h,activeBorder:v,activeLift:x,activeBox:w,activeXs:D,activeSm:se,activeMd:ce,activeLg:le,activeXl:ue,activeBottom:de,activeDisabled:fe,activeCustom:pe,activeExtra:me,activeCentered:he,placementMode:O,activePlacementTab:ge,activeIndicator:_e,editableCounter:ve,editableActiveKey:ye,editableItems:be,handleEditableEdit:xe}=_(`useSetup:0:0:dup1`,()=>a(()=>{let e=_(`ref:1:2`,()=>g(`tab2`)),t=_(`ref:1:3`,()=>g(`tab2`)),n=_(`ref:1:4`,()=>g(`tab2`)),r=_(`ref:1:5`,()=>g(`tab2`)),i=_(`ref:1:6`,()=>g(`xs2`)),a=_(`ref:1:7`,()=>g(`sm2`)),o=_(`ref:1:8`,()=>g(`md2`)),s=_(`ref:1:9`,()=>g(`lg2`)),c=_(`ref:1:10`,()=>g(`xl2`)),l=_(`ref:1:11`,()=>g(`b2`)),u=_(`ref:1:12`,()=>g(`d2`)),d=_(`ref:1:13`,()=>g(`c2`)),f=_(`ref:1:14`,()=>g(`overview`)),p=_(`ref:1:15`,()=>g(`beta`)),m=_(`ref:1:16`,()=>g(`start`)),h=_(`ref:1:17`,()=>g(`design`)),v=_(`ref:1:18`,()=>g(`metrics`)),y=_(`ref:1:19`,()=>g(3)),b=_(`ref:1:20`,()=>g(`draft-2`)),x=_(`ref:1:21`,()=>g([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]));return{activeBasic:e,activeBorder:t,activeLift:n,activeBox:r,activeXs:i,activeSm:a,activeMd:o,activeLg:s,activeXl:c,activeBottom:l,activeDisabled:u,activeCustom:d,activeExtra:f,activeCentered:p,placementMode:m,activePlacementTab:h,activeIndicator:v,editableCounter:y,editableActiveKey:b,editableItems:x,handleEditableEdit:(e,t)=>{if(t===`add`){y.value+=1;let e=`draft-${y.value}`;x.value=[...x.value,{key:e,label:`Draft ${y.value}`,children:`这里是新建标签 ${y.value} 的上下文内容。`}],b.value=e;return}let n=String(e),r=x.value.filter(e=>e.key!==n);x.value=r,b.value===n&&(b.value=r[0]?.key??``)}}}));return c(a=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),d(p(C,{children:c(()=>{let a=e(),g=o(`div`,a);i(a,g),l(g,`max-w-none prose prose-sm md:prose-base`);let _=o(`h1`,g);i(g,_),i(_,m(`Tabs 选项卡`));let C=o(`p`,g);i(g,C),l(C,`text-sm mt-3 mb-3`),i(C,m(`Tabs 现在除了保留 Rue 当前的 box / border / lift 视觉，还补齐了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let ve=o(`h2`,g);i(g,ve),i(ve,m(`何时使用`));let k=o(`ul`,g);i(g,k);let Se=o(`li`,k);i(k,Se),i(Se,m(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let Ce=o(`li`,k);i(k,Ce),i(Ce,m(`既想保留 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let A=o(`div`,g);i(g,A),l(A,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let j=o(`div`,A);i(A,j),l(j,`rounded-box bg-base-200/50 p-3`);let M=o(`div`,j);i(j,M),l(M,`font-medium`),i(M,m(`受控与非受控`));let N=o(`div`,j);i(j,N),l(N,`mt-1 opacity-75`),i(N,m("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let P=o(`div`,A);i(A,P),l(P,`rounded-box bg-base-200/50 p-3`);let F=o(`div`,P);i(P,F),l(F,`font-medium`),i(F,m(`内容与布局`));let I=o(`div`,P);i(P,I),l(I,`mt-1 opacity-75`),i(I,m("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let L=o(`div`,A);i(A,L),l(L,`rounded-box bg-base-200/50 p-3`);let R=o(`div`,L);i(L,R),l(R,`font-medium`),i(R,m(`操作能力`));let z=o(`div`,L);i(L,z),l(z,`mt-1 opacity-75`),i(z,m("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let we=t(`rue:component:anchor`);i(g,we);let Te=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:h.value,onChange:e=>h.value=e});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Te});r(()=>d(e,g,we))});let Ee=t(`rue:component:anchor`);i(g,Ee);let De=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:v.value,onChange:e=>v.value=e});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:De});r(()=>d(e,g,Ee))});let Oe=t(`rue:component:anchor`);i(g,Oe);let ke=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:x.value,onChange:e=>x.value=e});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:ke});r(()=>d(e,g,Oe))});let Ae=t(`rue:component:anchor`);i(g,Ae);let je=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:w.value,onChange:e=>w.value=e});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:je});r(()=>d(e,g,Ae))});let Me=t(`rue:component:anchor`);i(g,Me);let Ne=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:y(`div`,{className:`space-y-4`,children:[y(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[b(T,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),b(T,{title:`QA`,value:`7`,description:`待验证缺陷`}),b(T,{title:`Review`,value:`3`,description:`待合并 PR`})]}),y(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[y(`div`,{className:`flex items-center justify-between`,children:[b(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),b(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),b(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),y(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[b(`span`,{children:`设计`}),b(`span`,{children:`联调`}),b(`span`,{children:`回归`}),b(`span`,{children:`发布`})]})]}),y(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),y(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[b(`li`,{children:`锁定接口字段命名`}),b(`li`,{children:`同步埋点事件与告警阈值`}),b(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:y(`div`,{className:`space-y-3`,children:[y(`ul`,{className:`list gap-2`,children:[y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`10:15`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`14:35`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`16:20`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补齐埋点与告警配置。`})]}),y(`li`,{className:`list-row`,children:[b(`div`,{className:`font-medium`,children:`18:40`}),b(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),b(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:b(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:b(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>y(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[y(`div`,{className:`flex items-center justify-between`,children:[b(`div`,{className:`text-lg font-semibold`,children:e.label}),b(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),b(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`content-panels`,code:te,children:Ne});r(()=>d(e,g,Me))});let Pe=t(`rue:component:anchor`);i(g,Pe);let Fe=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{type:`card`,activeKey:me.value,onChange:e=>me.value=e,tabBarExtraContent:{left:b(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:b(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`tab-bar-extra-content`,code:ne,children:Fe});r(()=>d(e,g,Pe))});let Ie=t(`rue:component:anchor`);i(g,Ie);let Le=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{centered:!0,type:`line`,activeKey:he.value,onChange:e=>he.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Le});r(()=>d(e,g,Ie))});let Re=t(`rue:component:anchor`);i(g,Re);let ze=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm overflow-hidden`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{tabPlacement:O.value,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,className:`min-h-72`,tabBarExtraContent:{left:y(`div`,{className:`flex gap-2`,children:[b(`button`,{className:`btn btn-xs ${O.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`start`,children:`start`}),b(`button`,{className:`btn btn-xs ${O.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`tab-placement`,code:re,children:ze});r(()=>d(e,g,Re))});let Be=t(`rue:component:anchor`);i(g,Be);let Ve=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{type:`editable-card`,activeKey:ye.value,onChange:e=>ye.value=e,onEdit:xe,items:be.value});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`editable-card`,code:ie,children:Ve});r(()=>d(e,g,Be))});let He=t(`rue:component:anchor`);i(g,He);let Ue=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:b(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:Ue});r(()=>d(e,g,He))});let We=t(`rue:component:anchor`);i(g,We);let Ge=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=o(`div`,c);i(c,u),l(u,`flex flex-col items-center gap-6`);let f=t(`rue:component:anchor`);i(u,f),n(()=>{let e=p(S,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:D.value,onChange:e=>D.value=e});r(()=>d(e,u,f))});let m=t(`rue:component:anchor`);i(u,m),n(()=>{let e=p(S,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:se.value,onChange:e=>se.value=e});r(()=>d(e,u,m))});let h=t(`rue:component:anchor`);i(u,h),n(()=>{let e=p(S,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:ce.value,onChange:e=>ce.value=e});r(()=>d(e,u,h))});let g=t(`rue:component:anchor`);i(u,g),n(()=>{let e=p(S,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:le.value,onChange:e=>le.value=e});r(()=>d(e,u,g))});let _=t(`rue:component:anchor`);return i(u,_),n(()=>{let e=p(S,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:ue.value,onChange:e=>ue.value=e});r(()=>d(e,u,_))}),a});n(()=>{let e=p(E,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ge});r(()=>d(e,g,We))});let Ke=t(`rue:component:anchor`);i(g,Ke);let qe=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:de.value,onChange:e=>de.value=e});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:qe});r(()=>d(e,g,Ke))});let Je=t(`rue:component:anchor`);i(g,Je);let Ye=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:fe.value,onChange:e=>fe.value=e});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Ye});r(()=>d(e,g,Je))});let Xe=t(`rue:component:anchor`);i(g,Xe);let Ze=c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`card bg-base-100 shadow-sm`);let c=o(`div`,s);i(s,c),l(c,`card-body gap-4`);let u=t(`rue:component:anchor`);return i(c,u),n(()=>{let e=p(S,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:pe.value,onChange:e=>pe.value=e});r(()=>d(e,c,u))}),a});n(()=>{let e=p(E,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Ze});r(()=>d(e,g,Xe))});let B=o(`h2`,g);i(g,B),f(B,`id`,`tabs-api`),i(B,m(`API`));let Qe=o(`p`,g);i(g,Qe),i(Qe,m(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let $e=t(`rue:component:anchor`);i(g,$e),n(()=>{let e=p(ee,{rows:ae});r(()=>d(e,g,$e))});let et=o(`div`,g);i(g,et),l(et,`not-prose mt-6`);let tt=t(`rue:component:anchor`);i(g,tt),n(()=>{let e=p(ee,{rows:oe});r(()=>d(e,g,tt))});let V=o(`div`,g);i(g,V),l(V,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let H=o(`div`,V);i(V,H),l(H,`font-semibold`),i(H,m(`使用建议`));let U=o(`div`,V);i(V,U),l(U,`mt-2 grid gap-2 md:grid-cols-2`);let W=o(`div`,U);i(U,W);let nt=o(`code`,W);i(W,nt),i(nt,m(`activeKey + onChange`)),i(W,m(`适合和路由、筛选条件、外部状态统一联动。`));let G=o(`div`,U);i(U,G);let rt=o(`code`,G);i(G,rt),i(rt,m(`defaultActiveKey`)),i(G,m(`适合静态文档、局部 demo 或无需外部接管的轻交互场景。`));let K=o(`div`,U);i(U,K),i(K,m(`复杂标签头优先用`));let it=o(`code`,K);i(K,it),i(it,m(`icon`)),i(K,m(`+ 文本`));let at=o(`code`,K);i(K,at),i(at,m(`label`));let ot=u(K);i(K,ot),s(ot,` `),i(K,m(`组合，兼顾语义和稳定渲染。`));let q=o(`div`,U);i(U,q),i(q,m(`需要完整内容区域切换时给`));let st=o(`code`,q);i(q,st),i(st,m(`items.children`));let ct=u(q);i(q,ct),s(ct,` `),i(q,m(`传面板节点；只做导航标签时可以只传`));let lt=o(`code`,q);i(q,lt),i(lt,m(`label`)),i(q,m(`。`));let ut=o(`h2`,g);i(g,ut),i(ut,m(`FAQ`));let dt=o(`h3`,g);i(g,dt),i(dt,m(`activeKey 和 defaultActiveKey 怎么选？`));let J=o(`p`,g);i(g,J);let ft=o(`code`,J);i(J,ft),i(ft,m(`activeKey`)),i(J,m(`是受控模式，当前激活项由外部状态决定；`));let pt=o(`code`,J);i(J,pt),i(pt,m(`defaultActiveKey`)),i(J,m(`只设置初始值，后续切换由组件内部维护。`));let mt=o(`h3`,g);i(g,mt),i(mt,m(`style 和 type 会冲突吗？`));let Y=o(`p`,g);i(g,Y);let ht=o(`code`,Y);i(Y,ht),i(ht,m(`type`)),i(Y,m(`更偏语义能力，像`));let gt=o(`code`,Y);i(Y,gt),i(gt,m(`card`)),i(Y,m(`、`));let _t=o(`code`,Y);i(Y,_t),i(_t,m(`editable-card`));let vt=u(Y);i(Y,vt),s(vt,` `),i(Y,m(`会自动套用适合的视觉； 如果你明确传了`));let yt=o(`code`,Y);i(Y,yt),i(yt,m(`style`)),i(Y,m(`，就以显式样式为准。`));let bt=o(`h3`,g);i(g,bt),i(bt,m(`placement 和 tabPlacement 有什么区别？`));let X=o(`p`,g);i(g,X);let xt=o(`code`,X);i(X,xt),i(xt,m(`placement`)),i(X,m(`只覆盖上下位置；`));let Z=o(`code`,X);i(X,Z),i(Z,m(`tabPlacement`)),i(X,m(`额外支持`));let St=u(X);i(X,St),s(St,` `);let Ct=o(`code`,X);i(X,Ct),i(Ct,m(`start`)),i(X,m(`和`));let wt=o(`code`,X);i(X,wt),i(wt,m(`end`)),i(X,m(`两种垂直摆放，并且优先级更高。`));let Tt=o(`h3`,g);i(g,Tt),i(Tt,m(`为什么复杂 label 建议拆成 icon 和文本？`));let Q=o(`p`,g);i(g,Q),i(Q,m(`当前实现会给`));let Et=o(`code`,Q);i(Q,Et),i(Et,m(`label`)),i(Q,m(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Dt=o(`code`,Q);i(Q,Dt),i(Dt,m(`[object Object]`)),i(Q,m(`，推荐把徽标、点状状态这类前缀放到`));let Ot=o(`code`,Q);i(Q,Ot),i(Ot,m(`icon`)),i(Q,m(`，把主要文案保留在`));let $=o(`code`,Q);return i(Q,$),i($,m(`label`)),i(Q,m(`。`)),a})}),g,_),g})};export{D as default};