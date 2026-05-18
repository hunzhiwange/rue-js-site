import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _,n as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as y,t as b}from"./src-BQwLQD8R.js";import{n as x}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as S}from"./checkbox-BUY3iu9z.js";import{t as C}from"./PreviewBlock-Cks1b4IL.js";var w=C,T=i=>l(o=>{let d=r(`div`,o);n(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,d);a(d,p),n(p,`table table-zebra`);let m=r(`thead`,p);a(p,m);let g=r(`tr`,m);a(m,g);let _=r(`th`,g);a(g,_),a(_,s(`属性`));let y=r(`th`,g);a(g,y),a(y,s(`说明`));let b=r(`th`,g);a(g,b),a(b,s(`类型`));let x=r(`th`,g);a(g,x),a(x,s(`默认值`));let S=r(`tbody`,p);a(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return h(()=>{T=v({items:i.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,s,d)=>{f(l(()=>{let i=t(),o=r(`tr`,i);a(i,o),h(()=>{c(o,`key`,String(n.prop))});let s=r(`td`,o);a(o,s);let l=r(`code`,s);a(s,l);let d=e(`rue:slot:anchor`);a(l,d),h(()=>{let e=n.prop;u(()=>f(e,l,d))});let p=r(`td`,o);a(o,p);let m=e(`rue:slot:anchor`);a(p,m),h(()=>{let e=n.description;u(()=>f(e,p,m))});let g=r(`td`,o);a(o,g);let _=r(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),h(()=>{let e=n.type;u(()=>f(e,_,v))});let y=r(`td`,o);a(o,y);let b=r(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),h(()=>{let e=n.defaultValue;u(()=>f(e,b,x))}),i}),i,o)}})}),d}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
</Checkbox>`,se=`const value = ref(['design-system'])

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
/>`,ce=`const checkedList = ref(['home'])

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
/>`,le=`<Checkbox.Group className="grid gap-4 md:grid-cols-2" defaultValue={['email', 'slack']}>
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
</Checkbox.Group>`,ue=`<Checkbox
  defaultChecked={true}
  className="border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
`,de=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],fe=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],pe=()=>{let{checked:t}=_(`useSetup:0:0`,()=>d(()=>({checked:_(`ref:1:0`,()=>p(!0))})));return l(i=>{let c=r(`div`,i);n(c,`flex flex-wrap items-center gap-3`);let l=e(`rue:component:anchor`);a(c,l),h(()=>{let e=m(S,{"data-testid":`checkbox-basic`,checked:t.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{t.value=e},children:`接收产品更新`});u(()=>f(e,c,l))});let d=r(`span`,c);a(c,d),n(d,`text-sm text-base-content/70`),a(d,s(`当前状态：`));let p=g(d);return a(d,p),h(()=>{o(p,t.value?`已选中`:`未选中`)}),c})},me=()=>{let{enabled:t}=_(`useSetup:0:0:dup1`,()=>d(()=>({enabled:_(`ref:1:1`,()=>p(!1))})));return l(l=>{let d=r(`div`,l);n(d,`space-y-4`);let p=r(`div`,d);a(d,p),c(p,`data-testid`,`checkbox-controlled-card`),n(p,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),i(p,`click`,e=>{e.target?.closest(`input`)||(t.value=!t.value)});let _=r(`div`,p);a(p,_),n(_,`flex items-start gap-3`);let v=e(`rue:component:anchor`);a(_,v),h(()=>{let e=m(S,{checked:t.value,onCheckedChange:e=>{t.value=e}});u(()=>f(e,_,v))});let y=r(`span`,_);a(_,y),n(y,`min-w-0 flex-1 block`);let b=r(`span`,y);a(y,b),n(b,`font-medium`),a(b,s(`开启每周摘要`));let x=r(`span`,y);a(y,x),n(x,`mt-1 block text-xs opacity-70`),a(x,s(`适合演示受控模式和更直接的布尔回调。`));let C=r(`div`,d);a(d,C),n(C,`flex flex-wrap gap-2 text-sm`);let w=r(`span`,C);a(C,w),n(w,`badge badge-soft badge-primary`),a(w,s(`checked=`));let T=g(w);a(w,T),h(()=>{o(T,t.value?`true`:`false`)});let E=r(`span`,C);return a(C,E),n(E,`badge badge-soft`),a(E,s(`onCheckedChange`)),d})},he=()=>l(t=>{let i=r(`div`,t);n(i,`flex flex-wrap items-center gap-3`);let o=e(`rue:component:anchor`);a(i,o),f(m(S,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),i,o);let c=r(`span`,i);return a(i,c),n(c,`text-sm text-base-content/70`),a(c,s(`组件会自动同步原生 input 的 indeterminate 状态。`)),i}),ge=()=>{let{selected:t}=_(`useSetup:0:0:dup2`,()=>d(()=>({selected:_(`ref:1:2`,()=>p([`design-system`]))})));return l(i=>{let c=r(`div`,i);n(c,`space-y-4`);let l=e(`rue:component:anchor`);a(c,l),h(()=>{let e=m(S.Group,{value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});u(()=>f(e,c,l))});let d=r(`div`,c);a(c,d),n(d,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),a(d,s(`当前订阅：`));let p=g(d);return a(d,p),h(()=>{o(p,t.value.length?t.value.join(` / `):`未选择`)}),c})},_e=()=>{let{checkedList:t,allValues:i,allChecked:o,partiallyChecked:c}=_(`useSetup:0:0:dup3`,()=>d(()=>{let e=_(`ref:1:3`,()=>p([`home`])),t=O.map(e=>e.value),n=e.value.length===t.length;return{checkedList:e,allValues:t,allChecked:n,partiallyChecked:e.value.length>0&&!n}}));return l(l=>{let d=r(`div`,l);n(d,`space-y-4`);let p=r(`div`,d);a(d,p),n(p,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let g=e(`rue:component:anchor`);a(p,g),h(()=>{let e=m(S,{checked:o,indeterminate:c,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,n)=>{t.value=n.checked?[...i]:[]},children:`全选功能清单`});u(()=>f(e,p,g))});let _=r(`span`,p);a(p,_),n(_,`text-sm text-base-content/70`),a(_,s(`已选 `));let v=e(`rue:slot:anchor`);a(_,v),h(()=>{let e=t.value.length;u(()=>f(e,_,v))}),a(_,s(`/`));let y=e(`rue:slot:anchor`);a(_,y),h(()=>{let e=i.length;u(()=>f(e,_,y))});let b=e(`rue:component:anchor`);return a(d,b),h(()=>{let e=m(S.Group,{value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});u(()=>f(e,d,b))}),d})},ve=()=>l(i=>{let o=r(`div`,i);n(o,`space-y-4`);let c=e(`rue:component:anchor`);a(o,c);let d=l(()=>{let i=t(),o=e(`rue:component:anchor`);a(i,o),f(m(S,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let e=t(),i=r(`span`,e);a(e,i),n(i,`block`);let o=r(`span`,i);a(i,o),n(o,`font-medium`),a(o,s(`邮件通知`));let c=r(`span`,i);return a(i,c),n(c,`mt-1 block text-xs opacity-70`),a(c,s(`适合外部用户和日报汇总场景。`)),e})}),i,o);let c=e(`rue:component:anchor`);a(i,c),f(m(S,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let e=t(),i=r(`span`,e);a(e,i),n(i,`block`);let o=r(`span`,i);a(i,o),n(o,`font-medium`),a(o,s(`Slack 频道`));let c=r(`span`,i);return a(i,c),n(c,`mt-1 block text-xs opacity-70`),a(c,s(`适合团队内部即时同步与讨论。`)),e})}),i,c);let u=e(`rue:component:anchor`);a(i,u),f(m(S,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let e=t(),i=r(`span`,e);a(e,i),n(i,`block`);let o=r(`span`,i);a(i,o),n(o,`font-medium`),a(o,s(`Webhook`));let c=r(`span`,i);return a(i,c),n(c,`mt-1 block text-xs opacity-70`),a(c,s(`方便接入自动化脚本和外部工作流。`)),e})}),i,u);let d=e(`rue:component:anchor`);return a(i,d),f(m(S,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let e=t(),i=r(`span`,e);a(e,i),n(i,`block`);let o=r(`span`,i);a(i,o),n(o,`font-medium`),a(o,s(`短信提醒`));let c=r(`span`,i);return a(i,c),n(c,`mt-1 block text-xs opacity-70`),a(c,s(`当前套餐暂未开放。`)),e})}),i,d),i});h(()=>{let e=m(S.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:d});u(()=>f(e,o,c))});let p=r(`div`,o);return a(o,p),n(p,`text-sm text-base-content/70`),a(p,s(`children 模式适合做卡片化布局或更复杂的说明区。`)),o}),k=()=>{let{tabBasic:i,tabFieldset:o,tabControlled:g,tabSizes:v,tabColors:C,tabDisabled:D,tabIndeterminate:O,tabGroup:k,tabCheckAll:ye,tabGrid:be,tabCustomColors:xe}=_(`useSetup:0:0:dup4`,()=>d(()=>({tabBasic:_(`ref:1:4`,()=>p(`preview`)),tabFieldset:_(`ref:1:5`,()=>p(`preview`)),tabControlled:_(`ref:1:6`,()=>p(`preview`)),tabSizes:_(`ref:1:7`,()=>p(`preview`)),tabColors:_(`ref:1:8`,()=>p(`preview`)),tabDisabled:_(`ref:1:9`,()=>p(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>p(`preview`)),tabGroup:_(`ref:1:11`,()=>p(`preview`)),tabCheckAll:_(`ref:1:12`,()=>p(`preview`)),tabGrid:_(`ref:1:13`,()=>p(`preview`)),tabCustomColors:_(`ref:1:14`,()=>p(`preview`))})));return l(d=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),f(m(x,{children:l(()=>{let l=t(),d=r(`div`,l);a(l,d),n(d,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,d);a(d,p),a(p,s(`Checkbox 复选框`));let _=r(`p`,d);a(d,_),n(_,`mt-3 mb-3 text-sm`),a(_,s(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let x=r(`div`,d);a(d,x),n(x,`text-sm`);let A=r(`a`,x);a(x,A),c(A,`href`,`https://daisyui.com/components/checkbox/`),c(A,`target`,`_blank`),a(A,s(`查看 Checkbox 静态样式`));let j=r(`div`,d);a(d,j),n(j,`alert alert-soft mt-6 text-sm`);let M=r(`span`,j);a(j,M),a(M,s(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let N=r(`h2`,d);a(d,N),n(N,`mt-8`),a(N,s(`何时使用`));let P=r(`ul`,d);a(d,P);let F=r(`li`,P);a(P,F),a(F,s(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let I=r(`li`,P);a(P,I),a(I,s(`需要从一组并列选项中选择多个值时。`));let L=r(`li`,P);a(P,L),a(L,s(`需要配合“全选/部分选中”状态表达批量操作时。`));let R=e(`rue:component:anchor`);a(d,R),h(()=>{let e=m(w,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:i,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ee});u(()=>f(e,d,R))});let z=e(`rue:component:anchor`);a(d,z),h(()=>{let e=m(w,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:o,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(S,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});u(()=>f(e,d,z))});let B=e(`rue:component:anchor`);a(d,B),h(()=>{let e=m(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:g,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:ne});u(()=>f(e,d,B))});let V=e(`rue:component:anchor`);a(d,V),h(()=>{let e=m(w,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(S,{defaultChecked:!0,size:`xs`}),b(S,{defaultChecked:!0,size:`sm`}),b(S,{defaultChecked:!0,size:`md`}),b(S,{defaultChecked:!0,size:`lg`}),b(S,{defaultChecked:!0,size:`xl`})]})})}),code:re});u(()=>f(e,d,V))});let H=e(`rue:component:anchor`);a(d,H),h(()=>{let e=m(w,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(S,{defaultChecked:!0,color:`primary`}),b(S,{defaultChecked:!0,color:`secondary`}),b(S,{defaultChecked:!0,color:`accent`}),b(S,{defaultChecked:!0,color:`neutral`}),b(S,{defaultChecked:!0,color:`info`}),b(S,{defaultChecked:!0,color:`success`}),b(S,{defaultChecked:!0,color:`warning`}),b(S,{defaultChecked:!0,color:`error`})]})})}),code:ie});u(()=>f(e,d,H))});let U=e(`rue:component:anchor`);a(d,U),h(()=>{let e=m(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(S,{disabled:!0,children:`只读选项`}),b(S,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});u(()=>f(e,d,U))});let W=e(`rue:component:anchor`);a(d,W),h(()=>{let e=m(w,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:oe});u(()=>f(e,d,W))});let G=e(`rue:component:anchor`);a(d,G),h(()=>{let e=m(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:k,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});u(()=>f(e,d,G))});let K=e(`rue:component:anchor`);a(d,K),h(()=>{let e=m(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});u(()=>f(e,d,K))});let q=e(`rue:component:anchor`);a(d,q),h(()=>{let e=m(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:be,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ve,{})})}),code:le});u(()=>f(e,d,q))});let J=e(`rue:component:anchor`);a(d,J),h(()=>{let e=m(w,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:xe,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(S,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:ue});u(()=>f(e,d,J))});let Y=r(`h2`,d);a(d,Y),n(Y,`mt-12`),a(Y,s(`API`));let X=r(`p`,d);a(d,X),n(X,`text-sm text-base-content/70`),a(X,s(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let Z=r(`h3`,d);a(d,Z),n(Z,`mt-6`),a(Z,s(`Checkbox`));let Se=e(`rue:component:anchor`);a(d,Se),h(()=>{let e=m(T,{rows:de});u(()=>f(e,d,Se))});let Q=r(`h3`,d);a(d,Q),n(Q,`mt-8`),a(Q,s(`Checkbox.Group`));let $=e(`rue:component:anchor`);return a(d,$),h(()=>{let e=m(T,{rows:fe});u(()=>f(e,d,$))}),l})}),p,_),p})};export{k as default};