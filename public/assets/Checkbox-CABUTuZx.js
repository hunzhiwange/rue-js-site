import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as y,t as b}from"./src-Dlanwp1X.js";import{t as x}from"./checkbox-XVTwgLxj.js";import{r as S}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as C}from"./PreviewBlock-CCAV1yb7.js";var w=C,T=n=>c(r=>{let i=p(`div`,r);f(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=p(`table`,i);e(i,a),f(a,`table table-zebra`);let d=p(`thead`,a);e(a,d);let m=p(`tr`,d);e(d,m);let _=p(`th`,m);e(m,_),e(_,s(`属性`));let y=p(`th`,m);e(m,y),e(y,s(`说明`));let b=p(`th`,m);e(m,b),e(b,s(`类型`));let x=p(`th`,m);e(m,x),e(x,s(`默认值`));let S=p(`tbody`,a);e(a,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,a,s)=>{u(c(()=>{let r=l(),i=p(`tr`,r);e(r,i),t(()=>{o(i,`key`,String(n.prop))});let a=p(`td`,i);e(i,a);let s=p(`code`,a);e(a,s);let c=g(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;h(()=>u(e,s,c))});let d=p(`td`,i);e(i,d);let f=g(`rue:slot:anchor`);e(d,f),t(()=>{let e=n.description;h(()=>u(e,d,f))});let m=p(`td`,i);e(i,m);let _=p(`code`,m);e(m,_);let v=g(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;h(()=>u(e,_,v))});let y=p(`td`,i);e(i,y);let b=p(`code`,y);e(y,b);let x=g(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;h(()=>u(e,b,x))}),r}),r,i)}})}),i}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与路线提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
      title: '体验 Rue 新特性与路线提案。',
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
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:r}=_(`useSetup:0:0`,()=>d(()=>({checked:_(`ref:1:0`,()=>n(!0))})));return c(n=>{let o=p(`div`,n);f(o,`flex flex-wrap items-center gap-3`);let c=g(`rue:component:anchor`);e(o,c),t(()=>{let e=m(x,{"data-testid":`checkbox-basic`,checked:r.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{r.value=e},children:`接收产品更新`});h(()=>u(e,o,c))});let l=p(`span`,o);e(o,l),f(l,`text-sm text-base-content/70`),e(l,s(`当前状态：`));let d=i(l);return e(l,d),t(()=>{a(d,r.value?`已选中`:`未选中`)}),o})},pe=()=>{let{enabled:l}=_(`useSetup:0:0:dup1`,()=>d(()=>({enabled:_(`ref:1:1`,()=>n(!1))})));return c(n=>{let c=p(`div`,n);f(c,`space-y-4`);let d=p(`div`,c);e(c,d),o(d,`data-testid`,`checkbox-controlled-card`),f(d,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),r(d,`click`,e=>{e.target?.closest(`input`)||(l.value=!l.value)});let _=p(`div`,d);e(d,_),f(_,`flex items-start gap-3`);let v=g(`rue:component:anchor`);e(_,v),t(()=>{let e=m(x,{checked:l.value,onCheckedChange:e=>{l.value=e}});h(()=>u(e,_,v))});let y=p(`span`,_);e(_,y),f(y,`min-w-0 flex-1 block`);let b=p(`span`,y);e(y,b),f(b,`font-medium`),e(b,s(`开启每周摘要`));let S=p(`span`,y);e(y,S),f(S,`mt-1 block text-xs opacity-70`),e(S,s(`适合演示受控模式和更直接的布尔回调。`));let C=p(`div`,c);e(c,C),f(C,`flex flex-wrap gap-2 text-sm`);let w=p(`span`,C);e(C,w),f(w,`badge badge-soft badge-primary`),e(w,s(`checked=`));let T=i(w);e(w,T),t(()=>{a(T,l.value?`true`:`false`)});let E=p(`span`,C);return e(C,E),f(E,`badge badge-soft`),e(E,s(`onCheckedChange`)),c})},me=()=>c(t=>{let n=p(`div`,t);f(n,`flex flex-wrap items-center gap-3`);let r=g(`rue:component:anchor`);e(n,r),u(m(x,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),n,r);let i=p(`span`,n);return e(n,i),f(i,`text-sm text-base-content/70`),e(i,s(`组件会自动同步原生 input 的 indeterminate 状态。`)),n}),he=()=>{let{selected:r}=_(`useSetup:0:0:dup2`,()=>d(()=>({selected:_(`ref:1:2`,()=>n([`design-system`]))})));return c(n=>{let o=p(`div`,n);f(o,`space-y-4`);let c=g(`rue:component:anchor`);e(o,c),t(()=>{let e=m(x.Group,{value:r.value,onChange:e=>{r.value=e},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});h(()=>u(e,o,c))});let l=p(`div`,o);e(o,l),f(l,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),e(l,s(`当前订阅：`));let d=i(l);return e(l,d),t(()=>{a(d,r.value.length?r.value.join(` / `):`未选择`)}),o})},ge=()=>{let{checkedList:r,allValues:i}=_(`useSetup:0:0:dup3`,()=>d(()=>({checkedList:_(`ref:1:3`,()=>n([`home`])),allValues:O.map(e=>e.value)})));return c(n=>{let a=p(`div`,n);f(a,`space-y-4`);let o=p(`div`,a);e(a,o),f(o,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let c=g(`rue:component:anchor`);e(o,c),t(()=>{let e=m(x,{checked:r.value.length===i.length,indeterminate:r.value.length>0&&r.value.length<i.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,t)=>{r.value=t.checked?[...i]:[]},children:`全选功能清单`});h(()=>u(e,o,c))});let l=p(`span`,o);e(o,l),f(l,`text-sm text-base-content/70`),e(l,s(`已选 `));let d=g(`rue:slot:anchor`);e(l,d),t(()=>{let e=r.value.length;h(()=>u(e,l,d))}),e(l,s(`/`));let _=g(`rue:slot:anchor`);e(l,_),t(()=>{let e=i.length;h(()=>u(e,l,_))});let v=g(`rue:component:anchor`);return e(a,v),t(()=>{let e=m(x.Group,{value:r.value,onChange:e=>{r.value=e},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});h(()=>u(e,a,v))}),a})},_e=()=>c(n=>{let r=p(`div`,n);f(r,`space-y-4`);let i=g(`rue:component:anchor`);e(r,i);let a=c(()=>{let t=l(),n=g(`rue:component:anchor`);e(t,n),u(m(x,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:c(()=>{let t=l(),n=p(`span`,t);e(t,n),f(n,`block`);let r=p(`span`,n);e(n,r),f(r,`font-medium`),e(r,s(`邮件通知`));let i=p(`span`,n);return e(n,i),f(i,`mt-1 block text-xs opacity-70`),e(i,s(`适合外部用户和日报汇总场景。`)),t})}),t,n);let r=g(`rue:component:anchor`);e(t,r),u(m(x,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:c(()=>{let t=l(),n=p(`span`,t);e(t,n),f(n,`block`);let r=p(`span`,n);e(n,r),f(r,`font-medium`),e(r,s(`Slack 频道`));let i=p(`span`,n);return e(n,i),f(i,`mt-1 block text-xs opacity-70`),e(i,s(`适合团队内部即时同步与讨论。`)),t})}),t,r);let i=g(`rue:component:anchor`);e(t,i),u(m(x,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:c(()=>{let t=l(),n=p(`span`,t);e(t,n),f(n,`block`);let r=p(`span`,n);e(n,r),f(r,`font-medium`),e(r,s(`Webhook`));let i=p(`span`,n);return e(n,i),f(i,`mt-1 block text-xs opacity-70`),e(i,s(`方便接入自动化脚本和外部工作流。`)),t})}),t,i);let a=g(`rue:component:anchor`);return e(t,a),u(m(x,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:c(()=>{let t=l(),n=p(`span`,t);e(t,n),f(n,`block`);let r=p(`span`,n);e(n,r),f(r,`font-medium`),e(r,s(`短信提醒`));let i=p(`span`,n);return e(n,i),f(i,`mt-1 block text-xs opacity-70`),e(i,s(`当前套餐暂未开放。`)),t})}),t,a),t});t(()=>{let e=m(x.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:a});h(()=>u(e,r,i))});let o=p(`div`,r);return e(r,o),f(o,`text-sm text-base-content/70`),e(o,s(`children 模式适合做卡片化布局或更复杂的说明区。`)),r}),A=()=>{let{tabBasic:r,tabFieldset:i,tabControlled:a,tabSizes:o,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>d(()=>({tabBasic:_(`ref:1:4`,()=>n(`preview`)),tabFieldset:_(`ref:1:5`,()=>n(`preview`)),tabControlled:_(`ref:1:6`,()=>n(`preview`)),tabSizes:_(`ref:1:7`,()=>n(`preview`)),tabColors:_(`ref:1:8`,()=>n(`preview`)),tabDisabled:_(`ref:1:9`,()=>n(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>n(`preview`)),tabGroup:_(`ref:1:11`,()=>n(`preview`)),tabCheckAll:_(`ref:1:12`,()=>n(`preview`)),tabGrid:_(`ref:1:13`,()=>n(`preview`)),tabCustomColors:_(`ref:1:14`,()=>n(`preview`))})));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(S,{children:c(()=>{let n=l(),c=p(`div`,n);e(n,c),f(c,`max-w-none prose prose-sm md:prose-base`);let d=p(`h1`,c);e(c,d),e(d,s(`Checkbox 复选框`));let _=p(`p`,c);e(c,_),f(_,`mt-3 mb-3 text-sm`),e(_,s(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let S=p(`div`,c);e(c,S),f(S,`alert alert-soft mt-6 text-sm`);let j=p(`span`,S);e(S,j),e(j,s(`Rue 在使用 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=p(`h2`,c);e(c,M),f(M,`mt-8`),e(M,s(`何时使用`));let N=p(`ul`,c);e(c,N);let P=p(`li`,N);e(N,P),e(P,s(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=p(`li`,N);e(N,F),e(F,s(`需要从一组并列选项中选择多个值时。`));let I=p(`li`,N);e(N,I),e(I,s(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=g(`rue:component:anchor`);e(c,L),t(()=>{let e=m(w,{title:`Checkbox`,summary:`展示基础用法，并支持 children 作为可点击说明区。`,tab:r,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});h(()=>u(e,c,L))});let R=g(`rue:component:anchor`);e(c,R),t(()=>{let e=m(w,{title:`With fieldset and label`,summary:`展示基础 fieldset 场景，适合设置页或表单分区。`,tab:i,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(x,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});h(()=>u(e,c,R))});let z=g(`rue:component:anchor`);e(c,z),t(()=>{let e=m(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:a,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});h(()=>u(e,c,z))});let B=g(`rue:component:anchor`);e(c,B),t(()=>{let e=m(w,{title:`Sizes`,summary:`使用 Rue 当前的尺寸体系。`,tab:o,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,size:`xs`}),b(x,{defaultChecked:!0,size:`sm`}),b(x,{defaultChecked:!0,size:`md`}),b(x,{defaultChecked:!0,size:`lg`}),b(x,{defaultChecked:!0,size:`xl`})]})})}),code:re});h(()=>u(e,c,B))});let V=g(`rue:component:anchor`);e(c,V),t(()=>{let e=m(w,{title:`Colors`,summary:`颜色语义保持与当前 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,color:`primary`}),b(x,{defaultChecked:!0,color:`secondary`}),b(x,{defaultChecked:!0,color:`accent`}),b(x,{defaultChecked:!0,color:`neutral`}),b(x,{defaultChecked:!0,color:`info`}),b(x,{defaultChecked:!0,color:`success`}),b(x,{defaultChecked:!0,color:`warning`}),b(x,{defaultChecked:!0,color:`error`})]})})}),code:ie});h(()=>u(e,c,V))});let H=g(`rue:component:anchor`);e(c,H),t(()=>{let e=m(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(x,{disabled:!0,children:`只读选项`}),b(x,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});h(()=>u(e,c,H))});let U=g(`rue:component:anchor`);e(c,U),t(()=>{let e=m(w,{title:`Indeterminate`,summary:`展示基础半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});h(()=>u(e,c,U))});let W=g(`rue:component:anchor`);e(c,W),t(()=>{let e=m(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});h(()=>u(e,c,W))});let G=g(`rue:component:anchor`);e(c,G),t(()=>{let e=m(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});h(()=>u(e,c,G))});let K=g(`rue:component:anchor`);e(c,K),t(()=>{let e=m(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});h(()=>u(e,c,K))});let q=g(`rue:component:anchor`);e(c,q),t(()=>{let e=m(w,{title:`Checkbox with custom colors`,summary:`展示基础自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(x,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});h(()=>u(e,c,q))});let J=p(`h2`,c);e(c,J),f(J,`mt-12`),e(J,s(`API`));let Y=p(`p`,c);e(c,Y),f(Y,`text-sm text-base-content/70`),e(Y,s(`className 默认作用在原生 input 上；需要控制包裹层时，请使用 rootClassName 和 rootStyle。`));let X=p(`h3`,c);e(c,X),f(X,`mt-6`),e(X,s(`Checkbox`));let Z=g(`rue:component:anchor`);e(c,Z),t(()=>{let e=m(T,{rows:ue});h(()=>u(e,c,Z))});let Q=p(`h3`,c);e(c,Q),f(Q,`mt-8`),e(Q,s(`Checkbox.Group`));let $=g(`rue:component:anchor`);return e(c,$),t(()=>{let e=m(T,{rows:de});h(()=>u(e,c,$))}),n})}),d,_),d})};export{A as default};