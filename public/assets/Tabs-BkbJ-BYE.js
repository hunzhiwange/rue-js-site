import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,t as p,tn as m,tt as h,wt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./Code-BoXKy3gJ.js";import{n as b,t as x}from"./src-Dlanwp1X.js";import{t as S}from"./tabs-C7cPs47_.js";import{r as C}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as w}from"./preview-test-gate-CiW-xKNr.js";var T=n=>s(a=>{let o=f(`div`,a);d(o,`rounded-box border border-base-300/70 bg-base-200/40 p-4`);let s=f(`div`,o);e(o,s),d(s,`text-xs uppercase tracking-[0.18em] opacity-60`);let c=h(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.title;m(()=>l(e,s,c))});let u=f(`div`,o);e(o,u),d(u,`mt-2 text-2xl font-semibold`);let p=r(u);e(u,p),t(()=>{i(p,n.value)});let g=f(`div`,o);e(o,g),d(g,`mt-1 text-sm opacity-75`);let _=h(`rue:slot:anchor`);return e(g,_),t(()=>{let e=n.description;m(()=>l(e,g,_))}),o}),ee=n=>s(r=>{let i=f(`div`,r);d(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=f(`table`,i);e(i,u),d(u,`table table-zebra`);let p=f(`thead`,u);e(u,p);let g=f(`tr`,p);e(p,g);let _=f(`th`,g);e(g,_),e(_,o(`属性`));let y=f(`th`,g);e(g,y),e(y,o(`说明`));let b=f(`th`,g);e(g,b),e(b,o(`类型`));let x=f(`th`,g);e(g,x),e(x,o(`默认值`));let S=f(`tbody`,u);e(u,S);let C=h(`rue:list:start`),w=h(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,u)=>{l(s(()=>{let r=c(),i=f(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=f(`td`,i);e(i,o);let s=f(`code`,o);e(o,s);let u=h(`rue:slot:anchor`);e(s,u),t(()=>{let e=n.prop;m(()=>l(e,s,u))});let d=f(`td`,i);e(i,d);let p=h(`rue:slot:anchor`);e(d,p),t(()=>{let e=n.description;m(()=>l(e,d,p))});let g=f(`td`,i);e(i,g);let _=f(`code`,g);e(g,_);let v=h(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;m(()=>l(e,_,v))});let y=f(`td`,i);e(i,y);let b=f(`code`,y);e(y,b);let x=h(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;m(()=>l(e,b,x))}),r}),r,i)}})}),i}),E=r=>{let{tab:i,previewNode:a}=_(`useSetup:0:0`,()=>u(()=>({tab:_(`ref:1:0`,()=>n(`preview`)),previewNode:_(`computed:1:1`,()=>g(()=>Array.isArray(r.children)?r.children.find(e=>e!=null&&e!==``):r.children))})));return s(n=>{let u=f(`div`,n);d(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let g=f(`h2`,u);e(u,g),d(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(g,o(`# `));let _=h(`rue:slot:anchor`);e(g,_),t(()=>{let e=r.title;m(()=>l(e,g,_))});let v=h(`rue:component:anchor`);e(u,v),t(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:i.value,onChange:e=>i.value=e,className:`mb-3`});m(()=>l(e,u,v))});let b=h(`rue:slot:anchor`);return e(u,b),t(()=>{let n=i.value===`preview`?w(r.title,a.get()):s(()=>{let n=c(),i=h(`rue:component:anchor`);return e(n,i),t(()=>{let e=p(y,{className:`mt-2`,lang:`tsx`,code:r.code});m(()=>l(e,n,i))}),n});m(()=>l(n,u,b))}),u})},te=String.raw`<Tabs
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
/>`,ae=[{prop:`items`,description:`标签数据源，每项至少包含 key 和 label。`,type:`TabItem[]`,defaultValue:`[]`},{prop:`activeKey`,description:`当前激活项，传入后进入受控模式。`,type:`string`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控模式下的初始激活项。`,type:`string`,defaultValue:`首个未禁用项`},{prop:`onChange`,description:`切换标签时回调当前 key。`,type:`(key: string) => void`,defaultValue:`-`},{prop:`type`,description:`语义化风格，card 与 editable-card 会自动套用 box 视觉。`,type:`'line' | 'card' | 'editable-card'`,defaultValue:`-`},{prop:`style`,description:`daisyUI 视觉风格。`,type:`'box' | 'border' | 'lift'`,defaultValue:`由 type 推导`},{prop:`placement`,description:`传统上下摆放位置。`,type:`'top' | 'bottom'`,defaultValue:`'top'`},{prop:`tabPlacement`,description:`扩展摆放位置，支持垂直导航。`,type:`'top' | 'bottom' | 'start' | 'end'`,defaultValue:`优先于 placement`},{prop:`size`,description:`标签尺寸，支持 xs 到 xl 以及 small / middle / large 别名。`,type:`TabsSize`,defaultValue:`'md'`},{prop:`centered`,description:`横向模式下居中排列标签头。`,type:`boolean`,defaultValue:`false`},{prop:`destroyOnHidden`,description:`切换后销毁未激活面板内容。`,type:`boolean`,defaultValue:`false`},{prop:`tabBarExtraContent`,description:`标签栏额外内容，可传单个节点或 { left, right }。`,type:`any | { left?: any; right?: any }`,defaultValue:`-`},{prop:`indicator`,description:`激活态指示条配置，支持对齐、宽度和样式。`,type:`{ align?: string; size?: number | string; className?: string; style?: Record<string, any> }`,defaultValue:`-`},{prop:`onEdit`,description:`editable-card 模式下新增或删除标签时触发。`,type:`(eventOrKey: MouseEvent | string, action: 'add' | 'remove') => void`,defaultValue:`-`},{prop:`hideAdd`,description:`editable-card 模式下隐藏新增按钮。`,type:`boolean`,defaultValue:`false`},{prop:`addIcon`,description:`新增按钮自定义内容。`,type:`any`,defaultValue:`'+'`},{prop:`removeIcon`,description:`删除按钮默认图标。`,type:`any`,defaultValue:`'×'`},{prop:`className`,description:`根节点附加类名。`,type:`string`,defaultValue:`-`},{prop:`tabBarClassName`,description:`tablist 附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`面板容器附加类名。`,type:`string`,defaultValue:`-`}],oe=[{prop:`key`,description:`标签唯一标识。`,type:`string`,defaultValue:`-`},{prop:`label`,description:`标签文案，建议优先传纯文本；复杂前缀建议配合 icon 使用。`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`标签前置图标或节点。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`对应面板内容；任一项传入后会渲染 tabpanel。`,type:`any`,defaultValue:`-`},{prop:`disabled`,description:`禁用当前标签。`,type:`boolean`,defaultValue:`false`},{prop:`className`,description:`单个标签按钮附加类名。`,type:`string`,defaultValue:`-`},{prop:`contentClassName`,description:`单个面板附加类名。`,type:`string`,defaultValue:`-`},{prop:`closable`,description:`editable-card 模式下控制当前项是否可关闭。`,type:`boolean`,defaultValue:`未禁用项默认为 true`},{prop:`closeIcon`,description:`当前项自定义关闭图标。`,type:`any`,defaultValue:`-`}],D=()=>{let{activeBasic:g,activeBorder:v,activeLift:y,activeBox:w,activeXs:D,activeSm:se,activeMd:ce,activeLg:le,activeXl:ue,activeBottom:de,activeDisabled:fe,activeCustom:pe,activeExtra:me,activeCentered:he,placementMode:O,activePlacementTab:ge,activeIndicator:_e,editableCounter:ve,editableActiveKey:ye,editableItems:be,handleEditableEdit:xe}=_(`useSetup:0:0:dup1`,()=>u(()=>{let e=_(`ref:1:2`,()=>n(`tab2`)),t=_(`ref:1:3`,()=>n(`tab2`)),r=_(`ref:1:4`,()=>n(`tab2`)),i=_(`ref:1:5`,()=>n(`tab2`)),a=_(`ref:1:6`,()=>n(`xs2`)),o=_(`ref:1:7`,()=>n(`sm2`)),s=_(`ref:1:8`,()=>n(`md2`)),c=_(`ref:1:9`,()=>n(`lg2`)),l=_(`ref:1:10`,()=>n(`xl2`)),u=_(`ref:1:11`,()=>n(`b2`)),d=_(`ref:1:12`,()=>n(`d2`)),f=_(`ref:1:13`,()=>n(`c2`)),p=_(`ref:1:14`,()=>n(`overview`)),m=_(`ref:1:15`,()=>n(`beta`)),h=_(`ref:1:16`,()=>n(`start`)),g=_(`ref:1:17`,()=>n(`design`)),v=_(`ref:1:18`,()=>n(`metrics`)),y=_(`ref:1:19`,()=>n(3)),b=_(`ref:1:20`,()=>n(`draft-2`)),x=_(`ref:1:21`,()=>n([{key:`draft-1`,label:`Draft 1`,children:`需求说明、依赖评估与风险梳理。`},{key:`draft-2`,label:`Draft 2`,children:`设计走查与交互标注已经完成。`},{key:`release`,label:`Release`,children:`发布检查清单、灰度范围与回滚预案。`,closable:!1}]));return{activeBasic:e,activeBorder:t,activeLift:r,activeBox:i,activeXs:a,activeSm:o,activeMd:s,activeLg:c,activeXl:l,activeBottom:u,activeDisabled:d,activeCustom:f,activeExtra:p,activeCentered:m,placementMode:h,activePlacementTab:g,activeIndicator:v,editableCounter:y,editableActiveKey:b,editableItems:x,handleEditableEdit:(e,t)=>{if(t===`add`){y.value+=1;let e=`draft-${y.value}`;x.value=[...x.value,{key:e,label:`Draft ${y.value}`,children:`这里是新建标签 ${y.value} 的上下文内容。`}],b.value=e;return}let n=String(e),r=x.value.filter(e=>e.key!==n);x.value=r,b.value===n&&(b.value=r[0]?.key??``)}}}));return s(n=>{let u=c(),_=h(`rue:component:anchor`);return e(u,_),l(p(C,{children:s(()=>{let n=c(),u=f(`div`,n);e(n,u),d(u,`max-w-none prose prose-sm md:prose-base`);let _=f(`h1`,u);e(u,_),e(_,o(`Tabs 选项卡`));let C=f(`p`,u);e(u,C),d(C,`text-sm mt-3 mb-3`),e(C,o(`Tabs 现在除了使用 Rue 当前的 box / border / lift 视觉，还提供了内容面板、默认激活项、额外操作区、居中、垂直摆放和 editable-card 等更完整的 API。`));let ve=f(`h2`,u);e(u,ve),e(ve,o(`何时使用`));let k=f(`ul`,u);e(u,k);let Se=f(`li`,k);e(k,Se),e(Se,o(`需要在同一信息区域里切换多个视图、状态面板或设置分组时。`));let Ce=f(`li`,k);e(k,Ce),e(Ce,o(`既想使用 daisyUI 的 box / border / lift 视觉，又需要受控、垂直摆放、额外操作区或可编辑标签头时。`));let A=f(`div`,u);e(u,A),d(A,`not-prose my-6 grid gap-3 rounded-box border border-base-300/70 bg-base-100 p-4 text-sm lg:grid-cols-3`);let j=f(`div`,A);e(A,j),d(j,`rounded-box bg-base-200/50 p-3`);let M=f(`div`,j);e(j,M),d(M,`font-medium`),e(M,o(`受控与非受控`));let N=f(`div`,j);e(j,N),d(N,`mt-1 opacity-75`),e(N,o("支持 `activeKey`、`defaultActiveKey` 与 `onChange`。"));let P=f(`div`,A);e(A,P),d(P,`rounded-box bg-base-200/50 p-3`);let F=f(`div`,P);e(P,F),d(F,`font-medium`),e(F,o(`内容与布局`));let I=f(`div`,P);e(P,I),d(I,`mt-1 opacity-75`),e(I,o("支持 `items.children`、`destroyOnHidden`、`centered`、`tabPlacement`。"));let L=f(`div`,A);e(A,L),d(L,`rounded-box bg-base-200/50 p-3`);let R=f(`div`,L);e(L,R),d(R,`font-medium`),e(R,o(`操作能力`));let z=f(`div`,L);e(L,z),d(z,`mt-1 opacity-75`),e(z,o("支持 `tabBarExtraContent`、`indicator` 与 `editable-card`。"));let we=h(`rue:component:anchor`);e(u,we);let Te=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:g.value,onChange:e=>g.value=e});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`tabs`,code:`<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1' },
    { key: 'tab2', label: 'Tab 2' },
    { key: 'tab3', label: 'Tab 3' },
  ]}
  activeKey="tab2"
  onChange={key => console.log(key)}
/>`,children:Te});m(()=>l(e,u,we))});let Ee=h(`rue:component:anchor`);e(u,Ee);let De=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{style:`border`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:v.value,onChange:e=>v.value=e});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`tabs-border`,code:`<Tabs style="border" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:De});m(()=>l(e,u,Ee))});let Oe=h(`rue:component:anchor`);e(u,Oe);let ke=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{style:`lift`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:y.value,onChange:e=>y.value=e});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`tabs-lift`,code:`<Tabs style="lift" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:ke});m(()=>l(e,u,Oe))});let Ae=h(`rue:component:anchor`);e(u,Ae);let je=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{style:`box`,items:[{key:`tab1`,label:`Tab 1`},{key:`tab2`,label:`Tab 2`},{key:`tab3`,label:`Tab 3`}],activeKey:w.value,onChange:e=>w.value=e});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`tabs-box`,code:`<Tabs style="box" items={[{ key: 'tab1', label: 'Tab 1' }, { key: 'tab2', label: 'Tab 2' }, { key: 'tab3', label: 'Tab 3' }]} activeKey="tab2" />`,children:je});m(()=>l(e,u,Ae))});let Me=h(`rue:component:anchor`);e(u,Me);let Ne=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{type:`line`,defaultActiveKey:`overview`,destroyOnHidden:!0,items:[{key:`overview`,label:`Overview`,children:b(`div`,{className:`space-y-4`,children:[b(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[x(T,{title:`Velocity`,value:`+18%`,description:`本周交付速度`}),x(T,{title:`QA`,value:`7`,description:`待验证缺陷`}),x(T,{title:`Review`,value:`3`,description:`待合并 PR`})]}),b(`div`,{className:`grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`,children:[b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-sm font-semibold`,children:`本周推进节奏`}),x(`span`,{className:`badge badge-success badge-sm`,children:`On Track`})]}),x(`progress`,{className:`progress progress-primary mt-4`,value:`72`,max:`100`}),b(`div`,{className:`mt-3 flex justify-between text-xs opacity-70`,children:[x(`span`,{children:`设计`}),x(`span`,{children:`联调`}),x(`span`,{children:`回归`}),x(`span`,{children:`发布`})]})]}),b(`div`,{className:`rounded-box border border-base-300/70 bg-base-100 p-4`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Next Step`}),b(`ul`,{className:`mt-3 space-y-2 text-sm opacity-75`,children:[x(`li`,{children:`锁定接口字段命名`}),x(`li`,{children:`同步埋点事件与告警阈值`}),x(`li`,{children:`准备灰度发布公告`})]})]})]})]})},{key:`activity`,label:`Activity`,children:b(`div`,{className:`space-y-3`,children:[b(`ul`,{className:`list gap-2`,children:[b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`10:15`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`完成视觉验收，设计 token 已同步。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`14:35`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`设计评审通过，进入开发联调。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`16:20`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`补充埋点与告警配置。`})]}),b(`li`,{className:`list-row`,children:[x(`div`,{className:`font-medium`,children:`18:40`}),x(`div`,{className:`list-col-grow text-sm opacity-75`,children:`QA 已预约今晚的回归窗口。`})]})]}),x(`div`,{role:`alert`,className:`alert alert-soft alert-info text-sm`,children:x(`span`,{children:`今晚 20:00 进入联调窗口，QA 会同步回归结果。`})})]})},{key:`members`,label:`Members`,children:x(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[{label:`UI`,owner:`Lin`,note:`组件规格与 token 已冻结`},{label:`FE`,owner:`Kai`,note:`交互联调与埋点已完成`},{label:`QA`,owner:`Mio`,note:`回归清单与冒烟脚本已准备`}].map(e=>b(`div`,{className:`rounded-box border border-base-300/70 bg-base-200/50 p-4`,children:[b(`div`,{className:`flex items-center justify-between`,children:[x(`div`,{className:`text-lg font-semibold`,children:e.label}),x(`span`,{className:`badge badge-ghost badge-sm`,children:e.owner})]}),x(`div`,{className:`mt-2 text-sm opacity-75`,children:e.note})]},e.label))})}]});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`content-panels`,code:te,children:Ne});m(()=>l(e,u,Me))});let Pe=h(`rue:component:anchor`);e(u,Pe);let Fe=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{type:`card`,activeKey:me.value,onChange:e=>me.value=e,tabBarExtraContent:{left:x(`span`,{className:`badge badge-neutral badge-sm`,children:`Workspace`}),right:x(`button`,{className:`btn btn-primary btn-sm`,type:`button`,children:`New Milestone`})},items:[{key:`overview`,label:`Overview`,children:`版本计划、优先级排序与协作说明统一放在这里。`},{key:`timeline`,label:`Timeline`,children:`时间轴、里程碑和负责人信息可以作为右侧扩展操作的搭配内容。`},{key:`qa`,label:`QA`,children:`测试结果、风险等级与回归建议。`}]});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`tab-bar-extra-content`,code:ne,children:Fe});m(()=>l(e,u,Pe))});let Ie=h(`rue:component:anchor`);e(u,Ie);let Le=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{centered:!0,type:`line`,activeKey:he.value,onChange:e=>he.value=e,items:[{key:`alpha`,label:`Alpha`},{key:`beta`,label:`Beta`},{key:`stable`,label:`Stable`}]});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`centered-tabs`,code:`<Tabs centered type="line" items={[{ key: 'alpha', label: 'Alpha' }, { key: 'beta', label: 'Beta' }, { key: 'stable', label: 'Stable' }]} activeKey="beta" />`,children:Le});m(()=>l(e,u,Ie))});let Re=h(`rue:component:anchor`);e(u,Re);let ze=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm overflow-hidden`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{tabPlacement:O.value,type:`line`,activeKey:ge.value,onChange:e=>ge.value=e,className:`min-h-72`,tabBarExtraContent:{left:b(`div`,{className:`flex gap-2`,children:[x(`button`,{className:`btn btn-xs ${O.value===`start`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`start`,children:`start`}),x(`button`,{className:`btn btn-xs ${O.value===`end`?`btn-neutral`:`btn-ghost`}`,type:`button`,onClick:()=>O.value=`end`,children:`end`})]})},items:[{key:`design`,label:`Design`,children:`左侧导航布局适合文档、设置页和大段信息浏览。`},{key:`review`,label:`Review`,children:`右侧摆放则更适合注释面板或对照式配置区域。`}]});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`tab-placement`,code:re,children:ze});m(()=>l(e,u,Re))});let Be=h(`rue:component:anchor`);e(u,Be);let Ve=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{type:`editable-card`,activeKey:ye.value,onChange:e=>ye.value=e,onEdit:xe,items:be.value});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`editable-card`,code:ie,children:Ve});m(()=>l(e,u,Be))});let He=h(`rue:component:anchor`);e(u,He);let Ue=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{type:`line`,activeKey:_e.value,onChange:e=>_e.value=e,indicator:{align:`center`,size:24,className:`bg-primary opacity-100`},items:[{key:`roadmap`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-outline badge-xs`,"aria-hidden":`true`}),label:`Roadmap`},{key:`metrics`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-primary badge-xs`,"aria-hidden":`true`}),label:`Metrics`},{key:`notes`,icon:x(`span`,{className:`mr-1 inline-flex badge badge-secondary badge-xs`,"aria-hidden":`true`}),label:`Notes`}]});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`custom-indicator`,code:`<Tabs
  type="line"
  indicator={{ align: 'center', size: 24, className: 'bg-primary opacity-100' }}
  items={[
    { key: 'roadmap', label: 'Roadmap' },
    { key: 'metrics', label: 'Metrics' },
    { key: 'notes', label: 'Notes' },
  ]}
  activeKey="metrics"
/>`,children:Ue});m(()=>l(e,u,He))});let We=h(`rue:component:anchor`);e(u,We);let Ge=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=f(`div`,i);e(i,a),d(a,`flex flex-col items-center gap-6`);let o=h(`rue:component:anchor`);e(a,o),t(()=>{let e=p(S,{style:`lift`,size:`xs`,items:[{key:`xs1`,label:`Xsmall`},{key:`xs2`,label:`Xsmall`},{key:`xs3`,label:`Xsmall`}],activeKey:D.value,onChange:e=>D.value=e});m(()=>l(e,a,o))});let s=h(`rue:component:anchor`);e(a,s),t(()=>{let e=p(S,{style:`lift`,size:`sm`,items:[{key:`sm1`,label:`Small`},{key:`sm2`,label:`Small`},{key:`sm3`,label:`Small`}],activeKey:se.value,onChange:e=>se.value=e});m(()=>l(e,a,s))});let u=h(`rue:component:anchor`);e(a,u),t(()=>{let e=p(S,{style:`lift`,items:[{key:`md1`,label:`Medium`},{key:`md2`,label:`Medium`},{key:`md3`,label:`Medium`}],activeKey:ce.value,onChange:e=>ce.value=e});m(()=>l(e,a,u))});let g=h(`rue:component:anchor`);e(a,g),t(()=>{let e=p(S,{style:`lift`,size:`lg`,items:[{key:`lg1`,label:`Large`},{key:`lg2`,label:`Large`},{key:`lg3`,label:`Large`}],activeKey:le.value,onChange:e=>le.value=e});m(()=>l(e,a,g))});let _=h(`rue:component:anchor`);return e(a,_),t(()=>{let e=p(S,{style:`lift`,size:`xl`,items:[{key:`xl1`,label:`Xlarge`},{key:`xl2`,label:`Xlarge`},{key:`xl3`,label:`Xlarge`}],activeKey:ue.value,onChange:e=>ue.value=e});m(()=>l(e,a,_))}),n});t(()=>{let e=p(E,{title:`Sizes`,code:`<Tabs style="lift" size="xs" items={[{ key: 'xs1', label: 'Xsmall' }, { key: 'xs2', label: 'Xsmall' }, { key: 'xs3', label: 'Xsmall' }]} activeKey="xs2" />
<Tabs style="lift" size="sm" items={[{ key: 'sm1', label: 'Small' }, { key: 'sm2', label: 'Small' }, { key: 'sm3', label: 'Small' }]} activeKey="sm2" />
<Tabs style="lift" items={[{ key: 'md1', label: 'Medium' }, { key: 'md2', label: 'Medium' }, { key: 'md3', label: 'Medium' }]} activeKey="md2" />
<Tabs style="lift" size="lg" items={[{ key: 'lg1', label: 'Large' }, { key: 'lg2', label: 'Large' }, { key: 'lg3', label: 'Large' }]} activeKey="lg2" />
<Tabs style="lift" size="xl" items={[{ key: 'xl1', label: 'Xlarge' }, { key: 'xl2', label: 'Xlarge' }, { key: 'xl3', label: 'Xlarge' }]} activeKey="xl2" />`,children:Ge});m(()=>l(e,u,We))});let Ke=h(`rue:component:anchor`);e(u,Ke);let qe=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{style:`lift`,placement:`bottom`,items:[{key:`b1`,label:`Tab 1`,children:`Tab content 1`},{key:`b2`,label:`Tab 2`,children:`Tab content 2`},{key:`b3`,label:`Tab 3`,children:`Tab content 3`}],activeKey:de.value,onChange:e=>de.value=e});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`tabs-bottom`,code:`<Tabs
  style="lift"
  placement="bottom"
  items={[
    { key: 'b1', label: 'Tab 1', children: 'Tab content 1' },
    { key: 'b2', label: 'Tab 2', children: 'Tab content 2' },
    { key: 'b3', label: 'Tab 3', children: 'Tab content 3' },
  ]}
  activeKey="b2"
/>`,children:qe});m(()=>l(e,u,Ke))});let Je=h(`rue:component:anchor`);e(u,Je);let Ye=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{items:[{key:`d1`,label:`Disabled`,disabled:!0},{key:`d2`,label:`Active`},{key:`d3`,label:`Tab`}],activeKey:fe.value,onChange:e=>fe.value=e});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`tab-disabled`,code:`<Tabs items={[{ key: 'd1', label: 'Disabled', disabled: true }, { key: 'd2', label: 'Active' }, { key: 'd3', label: 'Tab' }]} activeKey="d2" />`,children:Ye});m(()=>l(e,u,Je))});let Xe=h(`rue:component:anchor`);e(u,Xe);let Ze=s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`card bg-base-100 shadow-sm`);let i=f(`div`,r);e(r,i),d(i,`card-body gap-4`);let a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(S,{style:`lift`,items:[{key:`c1`,label:`Tab 1`},{key:`c2`,label:`Tab 2`,className:`text-primary [--tab-bg:orange] [--tab-border-color:red]`},{key:`c3`,label:`Tab 3`}],activeKey:pe.value,onChange:e=>pe.value=e});m(()=>l(e,i,a))}),n});t(()=>{let e=p(E,{title:`Tabs with custom color`,code:`<Tabs style="lift" items={[{ key: 'c1', label: 'Tab 1' }, { key: 'c2', label: 'Tab 2', className: 'text-primary [--tab-bg:orange] [--tab-border-color:red]' }, { key: 'c3', label: 'Tab 3' }]} activeKey="c2" />`,children:Ze});m(()=>l(e,u,Xe))});let B=f(`h2`,u);e(u,B),a(B,`id`,`tabs-api`),e(B,o(`API`));let Qe=f(`p`,u);e(u,Qe),e(Qe,o(`Tabs 同时覆盖基础视觉标签、带面板的内容切换和 editable-card 交互，下面按根组件和单项配置拆开列出。`));let $e=h(`rue:component:anchor`);e(u,$e),t(()=>{let e=p(ee,{rows:ae});m(()=>l(e,u,$e))});let et=f(`div`,u);e(u,et),d(et,`not-prose mt-6`);let tt=h(`rue:component:anchor`);e(u,tt),t(()=>{let e=p(ee,{rows:oe});m(()=>l(e,u,tt))});let V=f(`div`,u);e(u,V),d(V,`not-prose mt-6 rounded-box border border-base-300 bg-base-100 p-4 text-sm`);let H=f(`div`,V);e(V,H),d(H,`font-semibold`),e(H,o(`使用建议`));let U=f(`div`,V);e(V,U),d(U,`mt-2 grid gap-2 md:grid-cols-2`);let W=f(`div`,U);e(U,W);let nt=f(`code`,W);e(W,nt),e(nt,o(`activeKey + onChange`)),e(W,o(`适合和路由、筛选条件、外部状态统一联动。`));let G=f(`div`,U);e(U,G);let rt=f(`code`,G);e(G,rt),e(rt,o(`defaultActiveKey`)),e(G,o(`适合静态文档、局部示例 或无需外部接管的轻交互场景。`));let K=f(`div`,U);e(U,K),e(K,o(`复杂标签头优先用`));let it=f(`code`,K);e(K,it),e(it,o(`icon`)),e(K,o(`+ 文本`));let at=f(`code`,K);e(K,at),e(at,o(`label`));let ot=r(K);e(K,ot),i(ot,` `),e(K,o(`组合，兼顾语义和稳定渲染。`));let q=f(`div`,U);e(U,q),e(q,o(`需要完整内容区域切换时给`));let st=f(`code`,q);e(q,st),e(st,o(`items.children`));let ct=r(q);e(q,ct),i(ct,` `),e(q,o(`传面板节点；只做导航标签时可以只传`));let lt=f(`code`,q);e(q,lt),e(lt,o(`label`)),e(q,o(`。`));let ut=f(`h2`,u);e(u,ut),e(ut,o(`FAQ`));let dt=f(`h3`,u);e(u,dt),e(dt,o(`activeKey 和 defaultActiveKey 怎么选？`));let J=f(`p`,u);e(u,J);let ft=f(`code`,J);e(J,ft),e(ft,o(`activeKey`)),e(J,o(`是受控模式，当前激活项由外部状态决定；`));let pt=f(`code`,J);e(J,pt),e(pt,o(`defaultActiveKey`)),e(J,o(`只设置初始值，后续切换由组件内部维护。`));let mt=f(`h3`,u);e(u,mt),e(mt,o(`style 和 type 会冲突吗？`));let Y=f(`p`,u);e(u,Y);let ht=f(`code`,Y);e(Y,ht),e(ht,o(`type`)),e(Y,o(`更偏语义能力，像`));let gt=f(`code`,Y);e(Y,gt),e(gt,o(`card`)),e(Y,o(`、`));let _t=f(`code`,Y);e(Y,_t),e(_t,o(`editable-card`));let vt=r(Y);e(Y,vt),i(vt,` `),e(Y,o(`会自动套用适合的视觉； 如果你明确传了`));let yt=f(`code`,Y);e(Y,yt),e(yt,o(`style`)),e(Y,o(`，就以显式样式为准。`));let bt=f(`h3`,u);e(u,bt),e(bt,o(`placement 和 tabPlacement 有什么区别？`));let X=f(`p`,u);e(u,X);let xt=f(`code`,X);e(X,xt),e(xt,o(`placement`)),e(X,o(`只覆盖上下位置；`));let Z=f(`code`,X);e(X,Z),e(Z,o(`tabPlacement`)),e(X,o(`额外支持`));let St=r(X);e(X,St),i(St,` `);let Ct=f(`code`,X);e(X,Ct),e(Ct,o(`start`)),e(X,o(`和`));let wt=f(`code`,X);e(X,wt),e(wt,o(`end`)),e(X,o(`两种垂直摆放，并且优先级更高。`));let Tt=f(`h3`,u);e(u,Tt),e(Tt,o(`为什么复杂 label 建议拆成 icon 和文本？`));let Q=f(`p`,u);e(u,Q),e(Q,o(`当前组件会给`));let Et=f(`code`,Q);e(Q,Et),e(Et,o(`label`)),e(Q,o(`包一层文本容器。为了避免复杂节点在运行时被串成`));let Dt=f(`code`,Q);e(Q,Dt),e(Dt,o(`[object Object]`)),e(Q,o(`，推荐把徽标、点状状态这类前缀放到`));let Ot=f(`code`,Q);e(Q,Ot),e(Ot,o(`icon`)),e(Q,o(`，把主要文案保持在`));let $=f(`code`,Q);return e(Q,$),e($,o(`label`)),e(Q,o(`。`)),n})}),u,_),u})};export{D as default};