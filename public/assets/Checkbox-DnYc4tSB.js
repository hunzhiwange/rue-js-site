import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,n as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as y,i as b}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as x}from"./checkbox-CZBIp8od.js";import{r as S}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as C}from"./PreviewBlock-DJFn4Hia.js";var w=C,T=r=>u(l=>{let d=i(`div`,l);h(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,d);n(d,f),h(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let g=i(`tr`,p);n(p,g);let _=i(`th`,g);n(g,_),n(_,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,d,f)=>{m(u(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>m(n,d,f))});let p=i(`td`,l);n(l,p);let h=a(`rue:slot:anchor`);n(p,h),o(()=>{let n=e.description;t(()=>m(n,p,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>m(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>m(n,b,x))}),r}),r,l)}})}),d}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:s}=_(`useSetup:0:0`,()=>p(()=>({checked:_(`ref:1:0`,()=>r(!0))})));return u(r=>{let c=i(`div`,r);h(c,`flex flex-wrap items-center gap-3`);let u=a(`rue:component:anchor`);n(c,u),o(()=>{let e=g(x,{"data-testid":`checkbox-basic`,checked:s.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{s.value=e},children:`接收产品更新`});t(()=>m(e,c,u))});let f=i(`span`,c);n(c,f),h(f,`text-sm text-base-content/70`),n(f,e(`当前状态：`));let p=l(f);return n(f,p),o(()=>{d(p,s.value?`已选中`:`未选中`)}),c})},pe=()=>{let{enabled:s}=_(`useSetup:0:0:dup1`,()=>p(()=>({enabled:_(`ref:1:1`,()=>r(!1))})));return u(r=>{let u=i(`div`,r);h(u,`space-y-4`);let p=i(`div`,u);n(u,p),c(p,`data-testid`,`checkbox-controlled-card`),h(p,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),f(p,`click`,e=>{e.target?.closest(`input`)||(s.value=!s.value)});let _=i(`div`,p);n(p,_),h(_,`flex items-start gap-3`);let v=a(`rue:component:anchor`);n(_,v),o(()=>{let e=g(x,{checked:s.value,onCheckedChange:e=>{s.value=e}});t(()=>m(e,_,v))});let y=i(`span`,_);n(_,y),h(y,`min-w-0 flex-1 block`);let b=i(`span`,y);n(y,b),h(b,`font-medium`),n(b,e(`开启每周摘要`));let S=i(`span`,y);n(y,S),h(S,`mt-1 block text-xs opacity-70`),n(S,e(`适合演示受控模式和更直接的布尔回调。`));let C=i(`div`,u);n(u,C),h(C,`flex flex-wrap gap-2 text-sm`);let w=i(`span`,C);n(C,w),h(w,`badge badge-soft badge-primary`),n(w,e(`checked=`));let T=l(w);n(w,T),o(()=>{d(T,s.value?`true`:`false`)});let E=i(`span`,C);return n(C,E),h(E,`badge badge-soft`),n(E,e(`onCheckedChange`)),u})},me=()=>u(t=>{let r=i(`div`,t);h(r,`flex flex-wrap items-center gap-3`);let o=a(`rue:component:anchor`);n(r,o),m(g(x,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),r,o);let s=i(`span`,r);return n(r,s),h(s,`text-sm text-base-content/70`),n(s,e(`组件会自动同步原生 input 的 indeterminate 状态。`)),r}),he=()=>{let{selected:s}=_(`useSetup:0:0:dup2`,()=>p(()=>({selected:_(`ref:1:2`,()=>r([`design-system`]))})));return u(r=>{let c=i(`div`,r);h(c,`space-y-4`);let u=a(`rue:component:anchor`);n(c,u),o(()=>{let e=g(x.Group,{value:s.value,onChange:e=>{s.value=e},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});t(()=>m(e,c,u))});let f=i(`div`,c);n(c,f),h(f,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),n(f,e(`当前订阅：`));let p=l(f);return n(f,p),o(()=>{d(p,s.value.length?s.value.join(` / `):`未选择`)}),c})},ge=()=>{let{checkedList:s,allValues:c}=_(`useSetup:0:0:dup3`,()=>p(()=>({checkedList:_(`ref:1:3`,()=>r([`home`])),allValues:O.map(e=>e.value)})));return u(r=>{let l=i(`div`,r);h(l,`space-y-4`);let u=i(`div`,l);n(l,u),h(u,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let d=a(`rue:component:anchor`);n(u,d),o(()=>{let e=g(x,{checked:s.value.length===c.length,indeterminate:s.value.length>0&&s.value.length<c.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,t)=>{s.value=t.checked?[...c]:[]},children:`全选功能清单`});t(()=>m(e,u,d))});let f=i(`span`,u);n(u,f),h(f,`text-sm text-base-content/70`),n(f,e(`已选 `));let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let e=s.value.length;t(()=>m(e,f,p))}),n(f,e(`/`));let _=a(`rue:slot:anchor`);n(f,_),o(()=>{let e=c.length;t(()=>m(e,f,_))});let v=a(`rue:component:anchor`);return n(l,v),o(()=>{let e=g(x.Group,{value:s.value,onChange:e=>{s.value=e},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});t(()=>m(e,l,v))}),l})},_e=()=>u(r=>{let c=i(`div`,r);h(c,`space-y-4`);let l=a(`rue:component:anchor`);n(c,l);let d=u(()=>{let t=s(),r=a(`rue:component:anchor`);n(t,r),m(g(x,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let t=s(),r=i(`span`,t);n(t,r),h(r,`block`);let a=i(`span`,r);n(r,a),h(a,`font-medium`),n(a,e(`邮件通知`));let o=i(`span`,r);return n(r,o),h(o,`mt-1 block text-xs opacity-70`),n(o,e(`适合外部用户和日报汇总场景。`)),t})}),t,r);let o=a(`rue:component:anchor`);n(t,o),m(g(x,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let t=s(),r=i(`span`,t);n(t,r),h(r,`block`);let a=i(`span`,r);n(r,a),h(a,`font-medium`),n(a,e(`Slack 频道`));let o=i(`span`,r);return n(r,o),h(o,`mt-1 block text-xs opacity-70`),n(o,e(`适合团队内部即时同步与讨论。`)),t})}),t,o);let c=a(`rue:component:anchor`);n(t,c),m(g(x,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let t=s(),r=i(`span`,t);n(t,r),h(r,`block`);let a=i(`span`,r);n(r,a),h(a,`font-medium`),n(a,e(`Webhook`));let o=i(`span`,r);return n(r,o),h(o,`mt-1 block text-xs opacity-70`),n(o,e(`方便接入自动化脚本和外部工作流。`)),t})}),t,c);let l=a(`rue:component:anchor`);return n(t,l),m(g(x,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let t=s(),r=i(`span`,t);n(t,r),h(r,`block`);let a=i(`span`,r);n(r,a),h(a,`font-medium`),n(a,e(`短信提醒`));let o=i(`span`,r);return n(r,o),h(o,`mt-1 block text-xs opacity-70`),n(o,e(`当前套餐暂未开放。`)),t})}),t,l),t});o(()=>{let e=g(x.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:d});t(()=>m(e,c,l))});let f=i(`div`,c);return n(c,f),h(f,`text-sm text-base-content/70`),n(f,e(`children 模式适合做卡片化布局或更复杂的说明区。`)),c}),A=()=>{let{tabBasic:c,tabFieldset:l,tabControlled:d,tabSizes:f,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>p(()=>({tabBasic:_(`ref:1:4`,()=>r(`preview`)),tabFieldset:_(`ref:1:5`,()=>r(`preview`)),tabControlled:_(`ref:1:6`,()=>r(`preview`)),tabSizes:_(`ref:1:7`,()=>r(`preview`)),tabColors:_(`ref:1:8`,()=>r(`preview`)),tabDisabled:_(`ref:1:9`,()=>r(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>r(`preview`)),tabGroup:_(`ref:1:11`,()=>r(`preview`)),tabCheckAll:_(`ref:1:12`,()=>r(`preview`)),tabGrid:_(`ref:1:13`,()=>r(`preview`)),tabCustomColors:_(`ref:1:14`,()=>r(`preview`))})));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(S,{children:u(()=>{let r=s(),u=i(`div`,r);n(r,u),h(u,`max-w-none prose prose-sm md:prose-base`);let p=i(`h1`,u);n(u,p),n(p,e(`Checkbox 复选框`));let _=i(`p`,u);n(u,_),h(_,`mt-3 mb-3 text-sm`),n(_,e(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let S=i(`div`,u);n(u,S),h(S,`alert alert-soft mt-6 text-sm`);let j=i(`span`,S);n(S,j),n(j,e(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=i(`h2`,u);n(u,M),h(M,`mt-8`),n(M,e(`何时使用`));let N=i(`ul`,u);n(u,N);let P=i(`li`,N);n(N,P),n(P,e(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=i(`li`,N);n(N,F),n(F,e(`需要从一组并列选项中选择多个值时。`));let I=i(`li`,N);n(N,I),n(I,e(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=a(`rue:component:anchor`);n(u,L),o(()=>{let e=g(w,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:c,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});t(()=>m(e,u,L))});let R=a(`rue:component:anchor`);n(u,R),o(()=>{let e=g(w,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:l,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(x,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});t(()=>m(e,u,R))});let z=a(`rue:component:anchor`);n(u,z),o(()=>{let e=g(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:d,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});t(()=>m(e,u,z))});let B=a(`rue:component:anchor`);n(u,B),o(()=>{let e=g(w,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:f,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,size:`xs`}),b(x,{defaultChecked:!0,size:`sm`}),b(x,{defaultChecked:!0,size:`md`}),b(x,{defaultChecked:!0,size:`lg`}),b(x,{defaultChecked:!0,size:`xl`})]})})}),code:re});t(()=>m(e,u,B))});let V=a(`rue:component:anchor`);n(u,V),o(()=>{let e=g(w,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,color:`primary`}),b(x,{defaultChecked:!0,color:`secondary`}),b(x,{defaultChecked:!0,color:`accent`}),b(x,{defaultChecked:!0,color:`neutral`}),b(x,{defaultChecked:!0,color:`info`}),b(x,{defaultChecked:!0,color:`success`}),b(x,{defaultChecked:!0,color:`warning`}),b(x,{defaultChecked:!0,color:`error`})]})})}),code:ie});t(()=>m(e,u,V))});let H=a(`rue:component:anchor`);n(u,H),o(()=>{let e=g(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(x,{disabled:!0,children:`只读选项`}),b(x,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});t(()=>m(e,u,H))});let U=a(`rue:component:anchor`);n(u,U),o(()=>{let e=g(w,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});t(()=>m(e,u,U))});let W=a(`rue:component:anchor`);n(u,W),o(()=>{let e=g(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});t(()=>m(e,u,W))});let G=a(`rue:component:anchor`);n(u,G),o(()=>{let e=g(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});t(()=>m(e,u,G))});let K=a(`rue:component:anchor`);n(u,K),o(()=>{let e=g(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});t(()=>m(e,u,K))});let q=a(`rue:component:anchor`);n(u,q),o(()=>{let e=g(w,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(x,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});t(()=>m(e,u,q))});let J=i(`h2`,u);n(u,J),h(J,`mt-12`),n(J,e(`API`));let Y=i(`p`,u);n(u,Y),h(Y,`text-sm text-base-content/70`),n(Y,e(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let X=i(`h3`,u);n(u,X),h(X,`mt-6`),n(X,e(`Checkbox`));let Z=a(`rue:component:anchor`);n(u,Z),o(()=>{let e=g(T,{rows:ue});t(()=>m(e,u,Z))});let Q=i(`h3`,u);n(u,Q),h(Q,`mt-8`),n(Q,e(`Checkbox.Group`));let $=a(`rue:component:anchor`);return n(u,$),o(()=>{let e=g(T,{rows:de});t(()=>m(e,u,$))}),r})}),p,_),p})};export{A as default};