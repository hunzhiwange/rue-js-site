import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as y,i as b}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as x}from"./checkbox-Cp_vCNGL.js";import{r as S}from"./SidebarPlaygroundDesign-CS11MI8e.js";import{t as C}from"./PreviewBlock-Byu5jIqR.js";var w=C,T=n=>u(i=>{let d=e(`div`,i);c(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,d);o(d,p),c(p,`table table-zebra`);let h=e(`thead`,p);o(p,h);let g=e(`tr`,h);o(h,g);let _=e(`th`,g);o(g,_),o(_,l(`属性`));let y=e(`th`,g);o(g,y),o(y,l(`说明`));let b=e(`th`,g);o(g,b),o(b,l(`类型`));let x=e(`th`,g);o(g,x),o(x,l(`默认值`));let S=e(`tbody`,p);o(p,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return a(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{m(u(()=>{let i=r(),c=e(`tr`,i);o(i,c),a(()=>{f(c,`key`,String(n.prop))});let l=e(`td`,c);o(c,l);let u=e(`code`,l);o(l,u);let d=s(`rue:slot:anchor`);o(u,d),a(()=>{let e=n.prop;t(()=>m(e,u,d))});let p=e(`td`,c);o(c,p);let h=s(`rue:slot:anchor`);o(p,h),a(()=>{let e=n.description;t(()=>m(e,p,h))});let g=e(`td`,c);o(c,g);let _=e(`code`,g);o(g,_);let v=s(`rue:slot:anchor`);o(_,v),a(()=>{let e=n.type;t(()=>m(e,_,v))});let y=e(`td`,c);o(c,y);let b=e(`code`,y);o(y,b);let x=s(`rue:slot:anchor`);return o(b,x),a(()=>{let e=n.defaultValue;t(()=>m(e,b,x))}),i}),i,c)}})}),d}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:n}=_(`useSetup:0:0`,()=>p(()=>({checked:_(`ref:1:0`,()=>i(!0))})));return u(r=>{let i=e(`div`,r);c(i,`flex flex-wrap items-center gap-3`);let u=s(`rue:component:anchor`);o(i,u),a(()=>{let e=h(x,{"data-testid":`checkbox-basic`,checked:n.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{n.value=e},children:`接收产品更新`});t(()=>m(e,i,u))});let f=e(`span`,i);o(i,f),c(f,`text-sm text-base-content/70`),o(f,l(`当前状态：`));let p=g(f);return o(f,p),a(()=>{d(p,n.value?`已选中`:`未选中`)}),i})},pe=()=>{let{enabled:r}=_(`useSetup:0:0:dup1`,()=>p(()=>({enabled:_(`ref:1:1`,()=>i(!1))})));return u(i=>{let u=e(`div`,i);c(u,`space-y-4`);let p=e(`div`,u);o(u,p),f(p,`data-testid`,`checkbox-controlled-card`),c(p,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),n(p,`click`,e=>{e.target?.closest(`input`)||(r.value=!r.value)});let _=e(`div`,p);o(p,_),c(_,`flex items-start gap-3`);let v=s(`rue:component:anchor`);o(_,v),a(()=>{let e=h(x,{checked:r.value,onCheckedChange:e=>{r.value=e}});t(()=>m(e,_,v))});let y=e(`span`,_);o(_,y),c(y,`min-w-0 flex-1 block`);let b=e(`span`,y);o(y,b),c(b,`font-medium`),o(b,l(`开启每周摘要`));let S=e(`span`,y);o(y,S),c(S,`mt-1 block text-xs opacity-70`),o(S,l(`适合演示受控模式和更直接的布尔回调。`));let C=e(`div`,u);o(u,C),c(C,`flex flex-wrap gap-2 text-sm`);let w=e(`span`,C);o(C,w),c(w,`badge badge-soft badge-primary`),o(w,l(`checked=`));let T=g(w);o(w,T),a(()=>{d(T,r.value?`true`:`false`)});let E=e(`span`,C);return o(C,E),c(E,`badge badge-soft`),o(E,l(`onCheckedChange`)),u})},me=()=>u(t=>{let n=e(`div`,t);c(n,`flex flex-wrap items-center gap-3`);let r=s(`rue:component:anchor`);o(n,r),m(h(x,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),n,r);let i=e(`span`,n);return o(n,i),c(i,`text-sm text-base-content/70`),o(i,l(`组件会自动同步原生 input 的 indeterminate 状态。`)),n}),he=()=>{let{selected:n}=_(`useSetup:0:0:dup2`,()=>p(()=>({selected:_(`ref:1:2`,()=>i([`design-system`]))})));return u(r=>{let i=e(`div`,r);c(i,`space-y-4`);let u=s(`rue:component:anchor`);o(i,u),a(()=>{let e=h(x.Group,{value:n.value,onChange:e=>{n.value=e},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});t(()=>m(e,i,u))});let f=e(`div`,i);o(i,f),c(f,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),o(f,l(`当前订阅：`));let p=g(f);return o(f,p),a(()=>{d(p,n.value.length?n.value.join(` / `):`未选择`)}),i})},ge=()=>{let{checkedList:n,allValues:r,allChecked:d,partiallyChecked:f}=_(`useSetup:0:0:dup3`,()=>p(()=>{let e=_(`ref:1:3`,()=>i([`home`])),t=O.map(e=>e.value),n=e.value.length===t.length;return{checkedList:e,allValues:t,allChecked:n,partiallyChecked:e.value.length>0&&!n}}));return u(i=>{let u=e(`div`,i);c(u,`space-y-4`);let p=e(`div`,u);o(u,p),c(p,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let g=s(`rue:component:anchor`);o(p,g),a(()=>{let e=h(x,{checked:d,indeterminate:f,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,t)=>{n.value=t.checked?[...r]:[]},children:`全选功能清单`});t(()=>m(e,p,g))});let _=e(`span`,p);o(p,_),c(_,`text-sm text-base-content/70`),o(_,l(`已选 `));let v=s(`rue:slot:anchor`);o(_,v),a(()=>{let e=n.value.length;t(()=>m(e,_,v))}),o(_,l(`/`));let y=s(`rue:slot:anchor`);o(_,y),a(()=>{let e=r.length;t(()=>m(e,_,y))});let b=s(`rue:component:anchor`);return o(u,b),a(()=>{let e=h(x.Group,{value:n.value,onChange:e=>{n.value=e},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});t(()=>m(e,u,b))}),u})},_e=()=>u(n=>{let i=e(`div`,n);c(i,`space-y-4`);let d=s(`rue:component:anchor`);o(i,d);let f=u(()=>{let t=r(),n=s(`rue:component:anchor`);o(t,n),m(h(x,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let t=r(),n=e(`span`,t);o(t,n),c(n,`block`);let i=e(`span`,n);o(n,i),c(i,`font-medium`),o(i,l(`邮件通知`));let a=e(`span`,n);return o(n,a),c(a,`mt-1 block text-xs opacity-70`),o(a,l(`适合外部用户和日报汇总场景。`)),t})}),t,n);let i=s(`rue:component:anchor`);o(t,i),m(h(x,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let t=r(),n=e(`span`,t);o(t,n),c(n,`block`);let i=e(`span`,n);o(n,i),c(i,`font-medium`),o(i,l(`Slack 频道`));let a=e(`span`,n);return o(n,a),c(a,`mt-1 block text-xs opacity-70`),o(a,l(`适合团队内部即时同步与讨论。`)),t})}),t,i);let a=s(`rue:component:anchor`);o(t,a),m(h(x,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let t=r(),n=e(`span`,t);o(t,n),c(n,`block`);let i=e(`span`,n);o(n,i),c(i,`font-medium`),o(i,l(`Webhook`));let a=e(`span`,n);return o(n,a),c(a,`mt-1 block text-xs opacity-70`),o(a,l(`方便接入自动化脚本和外部工作流。`)),t})}),t,a);let d=s(`rue:component:anchor`);return o(t,d),m(h(x,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let t=r(),n=e(`span`,t);o(t,n),c(n,`block`);let i=e(`span`,n);o(n,i),c(i,`font-medium`),o(i,l(`短信提醒`));let a=e(`span`,n);return o(n,a),c(a,`mt-1 block text-xs opacity-70`),o(a,l(`当前套餐暂未开放。`)),t})}),t,d),t});a(()=>{let e=h(x.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:f});t(()=>m(e,i,d))});let p=e(`div`,i);return o(i,p),c(p,`text-sm text-base-content/70`),o(p,l(`children 模式适合做卡片化布局或更复杂的说明区。`)),i}),A=()=>{let{tabBasic:n,tabFieldset:d,tabControlled:f,tabSizes:g,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>p(()=>({tabBasic:_(`ref:1:4`,()=>i(`preview`)),tabFieldset:_(`ref:1:5`,()=>i(`preview`)),tabControlled:_(`ref:1:6`,()=>i(`preview`)),tabSizes:_(`ref:1:7`,()=>i(`preview`)),tabColors:_(`ref:1:8`,()=>i(`preview`)),tabDisabled:_(`ref:1:9`,()=>i(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>i(`preview`)),tabGroup:_(`ref:1:11`,()=>i(`preview`)),tabCheckAll:_(`ref:1:12`,()=>i(`preview`)),tabGrid:_(`ref:1:13`,()=>i(`preview`)),tabCustomColors:_(`ref:1:14`,()=>i(`preview`))})));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(S,{children:u(()=>{let i=r(),u=e(`div`,i);o(i,u),c(u,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,u);o(u,p),o(p,l(`Checkbox 复选框`));let _=e(`p`,u);o(u,_),c(_,`mt-3 mb-3 text-sm`),o(_,l(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let S=e(`div`,u);o(u,S),c(S,`alert alert-soft mt-6 text-sm`);let j=e(`span`,S);o(S,j),o(j,l(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=e(`h2`,u);o(u,M),c(M,`mt-8`),o(M,l(`何时使用`));let N=e(`ul`,u);o(u,N);let P=e(`li`,N);o(N,P),o(P,l(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=e(`li`,N);o(N,F),o(F,l(`需要从一组并列选项中选择多个值时。`));let I=e(`li`,N);o(N,I),o(I,l(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=s(`rue:component:anchor`);o(u,L),a(()=>{let e=h(w,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:n,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});t(()=>m(e,u,L))});let R=s(`rue:component:anchor`);o(u,R),a(()=>{let e=h(w,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:d,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(x,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});t(()=>m(e,u,R))});let z=s(`rue:component:anchor`);o(u,z),a(()=>{let e=h(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:f,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});t(()=>m(e,u,z))});let B=s(`rue:component:anchor`);o(u,B),a(()=>{let e=h(w,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:g,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,size:`xs`}),b(x,{defaultChecked:!0,size:`sm`}),b(x,{defaultChecked:!0,size:`md`}),b(x,{defaultChecked:!0,size:`lg`}),b(x,{defaultChecked:!0,size:`xl`})]})})}),code:re});t(()=>m(e,u,B))});let V=s(`rue:component:anchor`);o(u,V),a(()=>{let e=h(w,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,color:`primary`}),b(x,{defaultChecked:!0,color:`secondary`}),b(x,{defaultChecked:!0,color:`accent`}),b(x,{defaultChecked:!0,color:`neutral`}),b(x,{defaultChecked:!0,color:`info`}),b(x,{defaultChecked:!0,color:`success`}),b(x,{defaultChecked:!0,color:`warning`}),b(x,{defaultChecked:!0,color:`error`})]})})}),code:ie});t(()=>m(e,u,V))});let H=s(`rue:component:anchor`);o(u,H),a(()=>{let e=h(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(x,{disabled:!0,children:`只读选项`}),b(x,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});t(()=>m(e,u,H))});let U=s(`rue:component:anchor`);o(u,U),a(()=>{let e=h(w,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});t(()=>m(e,u,U))});let W=s(`rue:component:anchor`);o(u,W),a(()=>{let e=h(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});t(()=>m(e,u,W))});let G=s(`rue:component:anchor`);o(u,G),a(()=>{let e=h(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});t(()=>m(e,u,G))});let K=s(`rue:component:anchor`);o(u,K),a(()=>{let e=h(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});t(()=>m(e,u,K))});let q=s(`rue:component:anchor`);o(u,q),a(()=>{let e=h(w,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(x,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});t(()=>m(e,u,q))});let J=e(`h2`,u);o(u,J),c(J,`mt-12`),o(J,l(`API`));let Y=e(`p`,u);o(u,Y),c(Y,`text-sm text-base-content/70`),o(Y,l(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let X=e(`h3`,u);o(u,X),c(X,`mt-6`),o(X,l(`Checkbox`));let Z=s(`rue:component:anchor`);o(u,Z),a(()=>{let e=h(T,{rows:ue});t(()=>m(e,u,Z))});let Q=e(`h3`,u);o(u,Q),c(Q,`mt-8`),o(Q,l(`Checkbox.Group`));let $=s(`rue:component:anchor`);return o(u,$),a(()=>{let e=h(T,{rows:de});t(()=>m(e,u,$))}),i})}),p,_),p})};export{A as default};