import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as y,t as b}from"./src-BLzF0BqW.js";import{n as x}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as S}from"./checkbox-B12MnRbe.js";import{t as C}from"./PreviewBlock-CfdDuiov.js";var w=C,T=a=>d(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,u);t(u,p),e(p,`table table-zebra`);let m=s(`thead`,p);t(p,m);let g=s(`tr`,m);t(m,g);let _=s(`th`,g);t(g,_),t(_,r(`属性`));let y=s(`th`,g);t(g,y),t(y,r(`说明`));let b=s(`th`,g);t(g,b),t(b,r(`类型`));let x=s(`th`,g);t(g,x),t(x,r(`默认值`));let S=s(`tbody`,p);t(p,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{f(d(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;h(()=>f(t,u,d))});let p=s(`td`,a);t(a,p);let m=i(`rue:slot:anchor`);t(p,m),n(()=>{let t=e.description;h(()=>f(t,p,m))});let g=s(`td`,a);t(a,g);let _=s(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;h(()=>f(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;h(()=>f(t,b,x))}),r}),r,a)}})}),u}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

const checked = ref(true)

<Checkbox
  checked={checked.value}
  rootClassName="items-center [&>span:first-child]:pt-0"
  contentClassName="leading-none pt-1"
  onCheckedChange={(nextChecked) => {
    checked.value = nextChecked
  }}
>
  接收产品更新
</Checkbox>`,te=`<fieldset className="fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4">
  <legend className="fieldset-legend">账号设置</legend>
  <Checkbox defaultChecked={true} rootClassName="items-center gap-2.5 [&>span:first-child]:pt-0" contentClassName="leading-none pt-1">
    记住这台设备
  </Checkbox>
</fieldset>`,ne=`import { Checkbox } from '@rue-js/design'

const enabled = ref(false)

<div
  className="cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3"
  onClick={event => {
    if ((event.target as HTMLElement | null)?.closest('input')) {
      return
    }
    enabled.value = !enabled.value
  }}
>
  <div className="flex items-start gap-3">
    <Checkbox
      checked={enabled.value}
      onCheckedChange={(nextChecked) => {
        enabled.value = nextChecked
      }}
    />
    <span className="min-w-0 flex-1 block">
      <span className="font-medium">开启每周摘要</span>
      <span className="mt-1 block text-xs opacity-70">onCheckedChange 直接返回布尔值。</span>
    </span>
  </div>
</div>`,re=`<Checkbox defaultChecked={true} size="xs" />
<Checkbox defaultChecked={true} size="sm" />
<Checkbox defaultChecked={true} size="md" />
<Checkbox defaultChecked={true} size="lg" />
<Checkbox defaultChecked={true} size="xl" />`,ie=`<Checkbox defaultChecked={true} color="primary" />
<Checkbox defaultChecked={true} color="secondary" />
<Checkbox defaultChecked={true} color="accent" />
<Checkbox defaultChecked={true} color="neutral" />
<Checkbox defaultChecked={true} color="info" />
<Checkbox defaultChecked={true} color="success" />
<Checkbox defaultChecked={true} color="warning" />
<Checkbox defaultChecked={true} color="error" />`,ae=`<Checkbox disabled={true}>只读选项</Checkbox>
<Checkbox disabled={true} checked={true}>已锁定配置</Checkbox>`,oe=`<Checkbox
  indeterminate={true}
  rootClassName="items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none"
>
  部分成员已完成
</Checkbox>`,k=`const value = ref(['design-system'])

<Checkbox.Group
  value={value.value}
  onChange={nextValue => {
    value.value = nextValue as string[]
  }}
  className="grid gap-3 sm:grid-cols-2"
  options={[
    {
      label: '设计系统更新',
      value: 'design-system',
      title: '每周一同步组件、token 与交互规范。',
      className: 'items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none',
    },
    {
      label: '版本发布公告',
      value: 'release',
      title: '仅在版本发布时推送，适合维护者订阅。',
      className: 'items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none',
    },
    {
      label: '实验功能灰度',
      value: 'labs',
      title: '体验 Rue 新特性与迁移提案。',
      className: 'items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none',
    },
    {
      label: '线下活动预告',
      value: 'events',
      disabled: true,
      title: '当前场次已满，稍后开放新的名额。',
      className: 'items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none',
    },
  ]}
/>`,se=`const checkedList = ref(['home'])

<Checkbox
  checked={checkedList.value.length === 3}
  indeterminate={checkedList.value.length > 0 && checkedList.value.length < 3}
  rootClassName="items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none"
  onChange={(_, meta) => {
    checkedList.value = meta.checked ? ['home', 'docs', 'market'] : []
  }}
>
  全选功能清单
</Checkbox>

<Checkbox.Group
  value={checkedList.value}
  onChange={nextValue => {
    checkedList.value = nextValue as string[]
  }}
  options={[
    {
      label: '首页改版',
      value: 'home',
      className: 'items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none',
    },
    {
      label: '文档导航',
      value: 'docs',
      className: 'items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none',
    },
    {
      label: '组件市场',
      value: 'market',
      className: 'items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none',
    },
  ]}
/>`,ce=`<Checkbox.Group className="grid gap-4 md:grid-cols-2" defaultValue={['email', 'slack']}>
  <Checkbox
    value="email"
    rootClassName="rounded-box border border-base-300 bg-base-100 px-4 py-3"
  >
    <span className="block">
      <span className="font-medium">邮件通知</span>
      <span className="mt-1 block text-xs opacity-70">适合外部用户和日报场景。</span>
    </span>
  </Checkbox>
  <Checkbox
    value="slack"
    rootClassName="rounded-box border border-base-300 bg-base-100 px-4 py-3"
  >
    <span className="block">
      <span className="font-medium">Slack 频道</span>
      <span className="mt-1 block text-xs opacity-70">适合团队内部即时同步。</span>
    </span>
  </Checkbox>
  <Checkbox
    value="webhook"
    rootClassName="rounded-box border border-base-300 bg-base-100 px-4 py-3"
  >
    <span className="block">
      <span className="font-medium">Webhook</span>
      <span className="mt-1 block text-xs opacity-70">方便接入外部自动化流程。</span>
    </span>
  </Checkbox>
  <Checkbox
    value="sms"
    disabled={true}
    rootClassName="rounded-box border border-base-300 bg-base-100 px-4 py-3"
  >
    <span className="block">
      <span className="font-medium">短信提醒</span>
      <span className="mt-1 block text-xs opacity-70">当前套餐暂未开放。</span>
    </span>
  </Checkbox>
</Checkbox.Group>`,le=`<Checkbox
  defaultChecked={true}
  className="border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:o}=_(`useSetup:0:0`,()=>m(()=>({checked:_(`ref:1:0`,()=>u(!0))})));return d(c=>{let u=s(`div`,c);e(u,`flex flex-wrap items-center gap-3`);let d=i(`rue:component:anchor`);t(u,d),n(()=>{let e=p(S,{"data-testid":`checkbox-basic`,checked:o.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{o.value=e},children:`接收产品更新`});h(()=>f(e,u,d))});let m=s(`span`,u);t(u,m),e(m,`text-sm text-base-content/70`),t(m,r(`当前状态：`));let g=a(m);return t(m,g),n(()=>{l(g,o.value?`已选中`:`未选中`)}),u})},pe=()=>{let{enabled:o}=_(`useSetup:0:0:dup1`,()=>m(()=>({enabled:_(`ref:1:1`,()=>u(!1))})));return d(u=>{let d=s(`div`,u);e(d,`space-y-4`);let m=s(`div`,d);t(d,m),c(m,`data-testid`,`checkbox-controlled-card`),e(m,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),g(m,`click`,e=>{e.target?.closest(`input`)||(o.value=!o.value)});let _=s(`div`,m);t(m,_),e(_,`flex items-start gap-3`);let v=i(`rue:component:anchor`);t(_,v),n(()=>{let e=p(S,{checked:o.value,onCheckedChange:e=>{o.value=e}});h(()=>f(e,_,v))});let y=s(`span`,_);t(_,y),e(y,`min-w-0 flex-1 block`);let b=s(`span`,y);t(y,b),e(b,`font-medium`),t(b,r(`开启每周摘要`));let x=s(`span`,y);t(y,x),e(x,`mt-1 block text-xs opacity-70`),t(x,r(`适合演示受控模式和更直接的布尔回调。`));let C=s(`div`,d);t(d,C),e(C,`flex flex-wrap gap-2 text-sm`);let w=s(`span`,C);t(C,w),e(w,`badge badge-soft badge-primary`),t(w,r(`checked=`));let T=a(w);t(w,T),n(()=>{l(T,o.value?`true`:`false`)});let E=s(`span`,C);return t(C,E),e(E,`badge badge-soft`),t(E,r(`onCheckedChange`)),d})},me=()=>d(n=>{let a=s(`div`,n);e(a,`flex flex-wrap items-center gap-3`);let o=i(`rue:component:anchor`);t(a,o),f(p(S,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),a,o);let c=s(`span`,a);return t(a,c),e(c,`text-sm text-base-content/70`),t(c,r(`组件会自动同步原生 input 的 indeterminate 状态。`)),a}),he=()=>{let{selected:o}=_(`useSetup:0:0:dup2`,()=>m(()=>({selected:_(`ref:1:2`,()=>u([`design-system`]))})));return d(c=>{let u=s(`div`,c);e(u,`space-y-4`);let d=i(`rue:component:anchor`);t(u,d),n(()=>{let e=p(S.Group,{value:o.value,onChange:e=>{o.value=e},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});h(()=>f(e,u,d))});let m=s(`div`,u);t(u,m),e(m,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),t(m,r(`当前订阅：`));let g=a(m);return t(m,g),n(()=>{l(g,o.value.length?o.value.join(` / `):`未选择`)}),u})},ge=()=>{let{checkedList:a,allValues:o,allChecked:c,partiallyChecked:l}=_(`useSetup:0:0:dup3`,()=>m(()=>{let e=_(`ref:1:3`,()=>u([`home`])),t=O.map(e=>e.value),n=e.value.length===t.length;return{checkedList:e,allValues:t,allChecked:n,partiallyChecked:e.value.length>0&&!n}}));return d(u=>{let d=s(`div`,u);e(d,`space-y-4`);let m=s(`div`,d);t(d,m),e(m,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let g=i(`rue:component:anchor`);t(m,g),n(()=>{let e=p(S,{checked:c,indeterminate:l,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,t)=>{a.value=t.checked?[...o]:[]},children:`全选功能清单`});h(()=>f(e,m,g))});let _=s(`span`,m);t(m,_),e(_,`text-sm text-base-content/70`),t(_,r(`已选 `));let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let e=a.value.length;h(()=>f(e,_,v))}),t(_,r(`/`));let y=i(`rue:slot:anchor`);t(_,y),n(()=>{let e=o.length;h(()=>f(e,_,y))});let b=i(`rue:component:anchor`);return t(d,b),n(()=>{let e=p(S.Group,{value:a.value,onChange:e=>{a.value=e},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});h(()=>f(e,d,b))}),d})},_e=()=>d(a=>{let c=s(`div`,a);e(c,`space-y-4`);let l=i(`rue:component:anchor`);t(c,l);let u=d(()=>{let n=o(),a=i(`rue:component:anchor`);t(n,a),f(p(S,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:d(()=>{let n=o(),i=s(`span`,n);t(n,i),e(i,`block`);let a=s(`span`,i);t(i,a),e(a,`font-medium`),t(a,r(`邮件通知`));let c=s(`span`,i);return t(i,c),e(c,`mt-1 block text-xs opacity-70`),t(c,r(`适合外部用户和日报汇总场景。`)),n})}),n,a);let c=i(`rue:component:anchor`);t(n,c),f(p(S,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:d(()=>{let n=o(),i=s(`span`,n);t(n,i),e(i,`block`);let a=s(`span`,i);t(i,a),e(a,`font-medium`),t(a,r(`Slack 频道`));let c=s(`span`,i);return t(i,c),e(c,`mt-1 block text-xs opacity-70`),t(c,r(`适合团队内部即时同步与讨论。`)),n})}),n,c);let l=i(`rue:component:anchor`);t(n,l),f(p(S,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:d(()=>{let n=o(),i=s(`span`,n);t(n,i),e(i,`block`);let a=s(`span`,i);t(i,a),e(a,`font-medium`),t(a,r(`Webhook`));let c=s(`span`,i);return t(i,c),e(c,`mt-1 block text-xs opacity-70`),t(c,r(`方便接入自动化脚本和外部工作流。`)),n})}),n,l);let u=i(`rue:component:anchor`);return t(n,u),f(p(S,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:d(()=>{let n=o(),i=s(`span`,n);t(n,i),e(i,`block`);let a=s(`span`,i);t(i,a),e(a,`font-medium`),t(a,r(`短信提醒`));let c=s(`span`,i);return t(i,c),e(c,`mt-1 block text-xs opacity-70`),t(c,r(`当前套餐暂未开放。`)),n})}),n,u),n});n(()=>{let e=p(S.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:u});h(()=>f(e,c,l))});let m=s(`div`,c);return t(c,m),e(m,`text-sm text-base-content/70`),t(m,r(`children 模式适合做卡片化布局或更复杂的说明区。`)),c}),A=()=>{let{tabBasic:a,tabFieldset:c,tabControlled:l,tabSizes:g,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>m(()=>({tabBasic:_(`ref:1:4`,()=>u(`preview`)),tabFieldset:_(`ref:1:5`,()=>u(`preview`)),tabControlled:_(`ref:1:6`,()=>u(`preview`)),tabSizes:_(`ref:1:7`,()=>u(`preview`)),tabColors:_(`ref:1:8`,()=>u(`preview`)),tabDisabled:_(`ref:1:9`,()=>u(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>u(`preview`)),tabGroup:_(`ref:1:11`,()=>u(`preview`)),tabCheckAll:_(`ref:1:12`,()=>u(`preview`)),tabGrid:_(`ref:1:13`,()=>u(`preview`)),tabCustomColors:_(`ref:1:14`,()=>u(`preview`))})));return d(u=>{let m=o(),_=i(`rue:component:anchor`);return t(m,_),f(p(x,{children:d(()=>{let u=o(),d=s(`div`,u);t(u,d),e(d,`max-w-none prose prose-sm md:prose-base`);let m=s(`h1`,d);t(d,m),t(m,r(`Checkbox 复选框`));let _=s(`p`,d);t(d,_),e(_,`mt-3 mb-3 text-sm`),t(_,r(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let x=s(`div`,d);t(d,x),e(x,`alert alert-soft mt-6 text-sm`);let j=s(`span`,x);t(x,j),t(j,r(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=s(`h2`,d);t(d,M),e(M,`mt-8`),t(M,r(`何时使用`));let N=s(`ul`,d);t(d,N);let P=s(`li`,N);t(N,P),t(P,r(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=s(`li`,N);t(N,F),t(F,r(`需要从一组并列选项中选择多个值时。`));let I=s(`li`,N);t(N,I),t(I,r(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=i(`rue:component:anchor`);t(d,L),n(()=>{let e=p(w,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:a,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});h(()=>f(e,d,L))});let R=i(`rue:component:anchor`);t(d,R),n(()=>{let e=p(w,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:c,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(S,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});h(()=>f(e,d,R))});let z=i(`rue:component:anchor`);t(d,z),n(()=>{let e=p(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:l,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});h(()=>f(e,d,z))});let B=i(`rue:component:anchor`);t(d,B),n(()=>{let e=p(w,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:g,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(S,{defaultChecked:!0,size:`xs`}),b(S,{defaultChecked:!0,size:`sm`}),b(S,{defaultChecked:!0,size:`md`}),b(S,{defaultChecked:!0,size:`lg`}),b(S,{defaultChecked:!0,size:`xl`})]})})}),code:re});h(()=>f(e,d,B))});let V=i(`rue:component:anchor`);t(d,V),n(()=>{let e=p(w,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(S,{defaultChecked:!0,color:`primary`}),b(S,{defaultChecked:!0,color:`secondary`}),b(S,{defaultChecked:!0,color:`accent`}),b(S,{defaultChecked:!0,color:`neutral`}),b(S,{defaultChecked:!0,color:`info`}),b(S,{defaultChecked:!0,color:`success`}),b(S,{defaultChecked:!0,color:`warning`}),b(S,{defaultChecked:!0,color:`error`})]})})}),code:ie});h(()=>f(e,d,V))});let H=i(`rue:component:anchor`);t(d,H),n(()=>{let e=p(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(S,{disabled:!0,children:`只读选项`}),b(S,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});h(()=>f(e,d,H))});let U=i(`rue:component:anchor`);t(d,U),n(()=>{let e=p(w,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});h(()=>f(e,d,U))});let W=i(`rue:component:anchor`);t(d,W),n(()=>{let e=p(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});h(()=>f(e,d,W))});let G=i(`rue:component:anchor`);t(d,G),n(()=>{let e=p(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});h(()=>f(e,d,G))});let K=i(`rue:component:anchor`);t(d,K),n(()=>{let e=p(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});h(()=>f(e,d,K))});let q=i(`rue:component:anchor`);t(d,q),n(()=>{let e=p(w,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(S,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});h(()=>f(e,d,q))});let J=s(`h2`,d);t(d,J),e(J,`mt-12`),t(J,r(`API`));let Y=s(`p`,d);t(d,Y),e(Y,`text-sm text-base-content/70`),t(Y,r(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let X=s(`h3`,d);t(d,X),e(X,`mt-6`),t(X,r(`Checkbox`));let Z=i(`rue:component:anchor`);t(d,Z),n(()=>{let e=p(T,{rows:ue});h(()=>f(e,d,Z))});let Q=s(`h3`,d);t(d,Q),e(Q,`mt-8`),t(Q,r(`Checkbox.Group`));let $=i(`rue:component:anchor`);return t(d,$),n(()=>{let e=p(T,{rows:de});h(()=>f(e,d,$))}),u})}),m,_),m})};export{A as default};