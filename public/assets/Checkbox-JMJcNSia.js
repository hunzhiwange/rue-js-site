import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-EUvELKQT.js";import{a as _,n as v}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as y,t as b}from"./src-BI4ToZNE.js";import{n as x}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as S}from"./checkbox-yRPnoIkD.js";import{t as C}from"./PreviewBlock-DMzC-yBe.js";var w=C,T=t=>l(i=>{let o=a(`div`,i);h(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=a(`table`,o);r(o,c),h(c,`table table-zebra`);let p=a(`thead`,c);r(c,p);let m=a(`tr`,p);r(p,m);let _=a(`th`,m);r(m,_),r(_,f(`属性`));let y=a(`th`,m);r(m,y),r(y,f(`说明`));let b=a(`th`,m);r(m,b),r(b,f(`类型`));let x=a(`th`,m);r(m,x),r(x,f(`默认值`));let S=a(`tbody`,c);r(c,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return u(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,o,c,f)=>{d(l(()=>{let i=n(),o=a(`tr`,i);r(i,o),u(()=>{e(o,`key`,String(t.prop))});let c=a(`td`,o);r(o,c);let l=a(`code`,c);r(c,l);let f=s(`rue:slot:anchor`);r(l,f),u(()=>{let e=t.prop;g(()=>d(e,l,f))});let p=a(`td`,o);r(o,p);let m=s(`rue:slot:anchor`);r(p,m),u(()=>{let e=t.description;g(()=>d(e,p,m))});let h=a(`td`,o);r(o,h);let _=a(`code`,h);r(h,_);let v=s(`rue:slot:anchor`);r(_,v),u(()=>{let e=t.type;g(()=>d(e,_,v))});let y=a(`td`,o);r(o,y);let b=a(`code`,y);r(y,b);let x=s(`rue:slot:anchor`);return r(b,x),u(()=>{let e=t.defaultValue;g(()=>d(e,b,x))}),i}),i,o)}})}),o}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:e}=_(`useSetup:0:0`,()=>t(()=>({checked:_(`ref:1:0`,()=>c(!0))})));return l(t=>{let n=a(`div`,t);h(n,`flex flex-wrap items-center gap-3`);let o=s(`rue:component:anchor`);r(n,o),u(()=>{let t=m(S,{"data-testid":`checkbox-basic`,checked:e.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:t=>{e.value=t},children:`接收产品更新`});g(()=>d(t,n,o))});let c=a(`span`,n);r(n,c),h(c,`text-sm text-base-content/70`),r(c,f(`当前状态：`));let l=i(c);return r(c,l),u(()=>{p(l,e.value?`已选中`:`未选中`)}),n})},pe=()=>{let{enabled:n}=_(`useSetup:0:0:dup1`,()=>t(()=>({enabled:_(`ref:1:1`,()=>c(!1))})));return l(t=>{let c=a(`div`,t);h(c,`space-y-4`);let l=a(`div`,c);r(c,l),e(l,`data-testid`,`checkbox-controlled-card`),h(l,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),o(l,`click`,e=>{e.target?.closest(`input`)||(n.value=!n.value)});let _=a(`div`,l);r(l,_),h(_,`flex items-start gap-3`);let v=s(`rue:component:anchor`);r(_,v),u(()=>{let e=m(S,{checked:n.value,onCheckedChange:e=>{n.value=e}});g(()=>d(e,_,v))});let y=a(`span`,_);r(_,y),h(y,`min-w-0 flex-1 block`);let b=a(`span`,y);r(y,b),h(b,`font-medium`),r(b,f(`开启每周摘要`));let x=a(`span`,y);r(y,x),h(x,`mt-1 block text-xs opacity-70`),r(x,f(`适合演示受控模式和更直接的布尔回调。`));let C=a(`div`,c);r(c,C),h(C,`flex flex-wrap gap-2 text-sm`);let w=a(`span`,C);r(C,w),h(w,`badge badge-soft badge-primary`),r(w,f(`checked=`));let T=i(w);r(w,T),u(()=>{p(T,n.value?`true`:`false`)});let E=a(`span`,C);return r(C,E),h(E,`badge badge-soft`),r(E,f(`onCheckedChange`)),c})},me=()=>l(e=>{let t=a(`div`,e);h(t,`flex flex-wrap items-center gap-3`);let n=s(`rue:component:anchor`);r(t,n),d(m(S,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),t,n);let i=a(`span`,t);return r(t,i),h(i,`text-sm text-base-content/70`),r(i,f(`组件会自动同步原生 input 的 indeterminate 状态。`)),t}),he=()=>{let{selected:e}=_(`useSetup:0:0:dup2`,()=>t(()=>({selected:_(`ref:1:2`,()=>c([`design-system`]))})));return l(t=>{let n=a(`div`,t);h(n,`space-y-4`);let o=s(`rue:component:anchor`);r(n,o),u(()=>{let t=m(S.Group,{value:e.value,onChange:t=>{e.value=t},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});g(()=>d(t,n,o))});let c=a(`div`,n);r(n,c),h(c,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),r(c,f(`当前订阅：`));let l=i(c);return r(c,l),u(()=>{p(l,e.value.length?e.value.join(` / `):`未选择`)}),n})},ge=()=>{let{checkedList:e,allValues:n,allChecked:i,partiallyChecked:o}=_(`useSetup:0:0:dup3`,()=>t(()=>{let e=_(`ref:1:3`,()=>c([`home`])),t=O.map(e=>e.value),n=e.value.length===t.length;return{checkedList:e,allValues:t,allChecked:n,partiallyChecked:e.value.length>0&&!n}}));return l(t=>{let c=a(`div`,t);h(c,`space-y-4`);let l=a(`div`,c);r(c,l),h(l,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let p=s(`rue:component:anchor`);r(l,p),u(()=>{let t=m(S,{checked:i,indeterminate:o,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(t,r)=>{e.value=r.checked?[...n]:[]},children:`全选功能清单`});g(()=>d(t,l,p))});let _=a(`span`,l);r(l,_),h(_,`text-sm text-base-content/70`),r(_,f(`已选 `));let v=s(`rue:slot:anchor`);r(_,v),u(()=>{let t=e.value.length;g(()=>d(t,_,v))}),r(_,f(`/`));let y=s(`rue:slot:anchor`);r(_,y),u(()=>{let e=n.length;g(()=>d(e,_,y))});let b=s(`rue:component:anchor`);return r(c,b),u(()=>{let t=m(S.Group,{value:e.value,onChange:t=>{e.value=t},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});g(()=>d(t,c,b))}),c})},_e=()=>l(e=>{let t=a(`div`,e);h(t,`space-y-4`);let i=s(`rue:component:anchor`);r(t,i);let o=l(()=>{let e=n(),t=s(`rue:component:anchor`);r(e,t),d(m(S,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let e=n(),t=a(`span`,e);r(e,t),h(t,`block`);let i=a(`span`,t);r(t,i),h(i,`font-medium`),r(i,f(`邮件通知`));let o=a(`span`,t);return r(t,o),h(o,`mt-1 block text-xs opacity-70`),r(o,f(`适合外部用户和日报汇总场景。`)),e})}),e,t);let i=s(`rue:component:anchor`);r(e,i),d(m(S,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let e=n(),t=a(`span`,e);r(e,t),h(t,`block`);let i=a(`span`,t);r(t,i),h(i,`font-medium`),r(i,f(`Slack 频道`));let o=a(`span`,t);return r(t,o),h(o,`mt-1 block text-xs opacity-70`),r(o,f(`适合团队内部即时同步与讨论。`)),e})}),e,i);let o=s(`rue:component:anchor`);r(e,o),d(m(S,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let e=n(),t=a(`span`,e);r(e,t),h(t,`block`);let i=a(`span`,t);r(t,i),h(i,`font-medium`),r(i,f(`Webhook`));let o=a(`span`,t);return r(t,o),h(o,`mt-1 block text-xs opacity-70`),r(o,f(`方便接入自动化脚本和外部工作流。`)),e})}),e,o);let c=s(`rue:component:anchor`);return r(e,c),d(m(S,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let e=n(),t=a(`span`,e);r(e,t),h(t,`block`);let i=a(`span`,t);r(t,i),h(i,`font-medium`),r(i,f(`短信提醒`));let o=a(`span`,t);return r(t,o),h(o,`mt-1 block text-xs opacity-70`),r(o,f(`当前套餐暂未开放。`)),e})}),e,c),e});u(()=>{let e=m(S.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:o});g(()=>d(e,t,i))});let c=a(`div`,t);return r(t,c),h(c,`text-sm text-base-content/70`),r(c,f(`children 模式适合做卡片化布局或更复杂的说明区。`)),t}),A=()=>{let{tabBasic:e,tabFieldset:i,tabControlled:o,tabSizes:p,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>t(()=>({tabBasic:_(`ref:1:4`,()=>c(`preview`)),tabFieldset:_(`ref:1:5`,()=>c(`preview`)),tabControlled:_(`ref:1:6`,()=>c(`preview`)),tabSizes:_(`ref:1:7`,()=>c(`preview`)),tabColors:_(`ref:1:8`,()=>c(`preview`)),tabDisabled:_(`ref:1:9`,()=>c(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>c(`preview`)),tabGroup:_(`ref:1:11`,()=>c(`preview`)),tabCheckAll:_(`ref:1:12`,()=>c(`preview`)),tabGrid:_(`ref:1:13`,()=>c(`preview`)),tabCustomColors:_(`ref:1:14`,()=>c(`preview`))})));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(m(x,{children:l(()=>{let t=n(),c=a(`div`,t);r(t,c),h(c,`max-w-none prose prose-sm md:prose-base`);let l=a(`h1`,c);r(c,l),r(l,f(`Checkbox 复选框`));let _=a(`p`,c);r(c,_),h(_,`mt-3 mb-3 text-sm`),r(_,f(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let x=a(`div`,c);r(c,x),h(x,`alert alert-soft mt-6 text-sm`);let j=a(`span`,x);r(x,j),r(j,f(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=a(`h2`,c);r(c,M),h(M,`mt-8`),r(M,f(`何时使用`));let N=a(`ul`,c);r(c,N);let P=a(`li`,N);r(N,P),r(P,f(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=a(`li`,N);r(N,F),r(F,f(`需要从一组并列选项中选择多个值时。`));let I=a(`li`,N);r(N,I),r(I,f(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=s(`rue:component:anchor`);r(c,L),u(()=>{let t=m(w,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:e,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});g(()=>d(t,c,L))});let R=s(`rue:component:anchor`);r(c,R),u(()=>{let e=m(w,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:i,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(S,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});g(()=>d(e,c,R))});let z=s(`rue:component:anchor`);r(c,z),u(()=>{let e=m(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:o,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});g(()=>d(e,c,z))});let B=s(`rue:component:anchor`);r(c,B),u(()=>{let e=m(w,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:p,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(S,{defaultChecked:!0,size:`xs`}),b(S,{defaultChecked:!0,size:`sm`}),b(S,{defaultChecked:!0,size:`md`}),b(S,{defaultChecked:!0,size:`lg`}),b(S,{defaultChecked:!0,size:`xl`})]})})}),code:re});g(()=>d(e,c,B))});let V=s(`rue:component:anchor`);r(c,V),u(()=>{let e=m(w,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(S,{defaultChecked:!0,color:`primary`}),b(S,{defaultChecked:!0,color:`secondary`}),b(S,{defaultChecked:!0,color:`accent`}),b(S,{defaultChecked:!0,color:`neutral`}),b(S,{defaultChecked:!0,color:`info`}),b(S,{defaultChecked:!0,color:`success`}),b(S,{defaultChecked:!0,color:`warning`}),b(S,{defaultChecked:!0,color:`error`})]})})}),code:ie});g(()=>d(e,c,V))});let H=s(`rue:component:anchor`);r(c,H),u(()=>{let e=m(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(S,{disabled:!0,children:`只读选项`}),b(S,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});g(()=>d(e,c,H))});let U=s(`rue:component:anchor`);r(c,U),u(()=>{let e=m(w,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});g(()=>d(e,c,U))});let W=s(`rue:component:anchor`);r(c,W),u(()=>{let e=m(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});g(()=>d(e,c,W))});let G=s(`rue:component:anchor`);r(c,G),u(()=>{let e=m(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});g(()=>d(e,c,G))});let K=s(`rue:component:anchor`);r(c,K),u(()=>{let e=m(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});g(()=>d(e,c,K))});let q=s(`rue:component:anchor`);r(c,q),u(()=>{let e=m(w,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(S,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});g(()=>d(e,c,q))});let J=a(`h2`,c);r(c,J),h(J,`mt-12`),r(J,f(`API`));let Y=a(`p`,c);r(c,Y),h(Y,`text-sm text-base-content/70`),r(Y,f(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let X=a(`h3`,c);r(c,X),h(X,`mt-6`),r(X,f(`Checkbox`));let Z=s(`rue:component:anchor`);r(c,Z),u(()=>{let e=m(T,{rows:ue});g(()=>d(e,c,Z))});let Q=a(`h3`,c);r(c,Q),h(Q,`mt-8`),r(Q,f(`Checkbox.Group`));let $=s(`rue:component:anchor`);return r(c,$),u(()=>{let e=m(T,{rows:de});g(()=>d(e,c,$))}),t})}),c,_),c})};export{A as default};