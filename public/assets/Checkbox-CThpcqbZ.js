import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,s as m,t as h,tt as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _,n as v}from"./vapor-helpers-vapor-CJFAWine.js";import{a as y,i as b}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as x}from"./checkbox-CGPXi6x0.js";import{n as S}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as C}from"./PreviewBlock-BYaG1RFO.js";var w=C,T=t=>d(n=>{let r=e(`div`,n);l(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`,r);o(r,f),l(f,`table table-zebra`);let h=e(`thead`,f);o(f,h);let g=e(`tr`,h);o(h,g);let _=e(`th`,g);o(g,_),o(_,u(`属性`));let y=e(`th`,g);o(g,y),o(y,u(`说明`));let b=e(`th`,g);o(g,b),o(b,u(`类型`));let x=e(`th`,g);o(g,x),o(x,u(`默认值`));let S=e(`tbody`,f);o(f,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,l,u)=>{m(d(()=>{let n=i(),r=e(`tr`,n);o(n,r),s(()=>{p(r,`key`,String(t.prop))});let l=e(`td`,r);o(r,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>m(e,u,d))});let f=e(`td`,r);o(r,f);let h=c(`rue:slot:anchor`);o(f,h),s(()=>{let e=t.description;a(()=>m(e,f,h))});let g=e(`td`,r);o(r,g);let _=e(`code`,g);o(g,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>m(e,_,v))});let y=e(`td`,r);o(r,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>m(e,b,x))}),n}),n,r)}})}),r}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:t}=_(`useSetup:0:0`,()=>n(()=>({checked:_(`ref:1:0`,()=>r(!0))})));return d(n=>{let r=e(`div`,n);l(r,`flex flex-wrap items-center gap-3`);let i=c(`rue:component:anchor`);o(r,i),s(()=>{let e=h(x,{"data-testid":`checkbox-basic`,checked:t.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{t.value=e},children:`接收产品更新`});a(()=>m(e,r,i))});let d=e(`span`,r);o(r,d),l(d,`text-sm text-base-content/70`),o(d,u(`当前状态：`));let p=g(d);return o(d,p),s(()=>{f(p,t.value?`已选中`:`未选中`)}),r})},pe=()=>{let{enabled:i}=_(`useSetup:0:0:dup1`,()=>n(()=>({enabled:_(`ref:1:1`,()=>r(!1))})));return d(n=>{let r=e(`div`,n);l(r,`space-y-4`);let d=e(`div`,r);o(r,d),p(d,`data-testid`,`checkbox-controlled-card`),l(d,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),t(d,`click`,e=>{e.target?.closest(`input`)||(i.value=!i.value)});let _=e(`div`,d);o(d,_),l(_,`flex items-start gap-3`);let v=c(`rue:component:anchor`);o(_,v),s(()=>{let e=h(x,{checked:i.value,onCheckedChange:e=>{i.value=e}});a(()=>m(e,_,v))});let y=e(`span`,_);o(_,y),l(y,`min-w-0 flex-1 block`);let b=e(`span`,y);o(y,b),l(b,`font-medium`),o(b,u(`开启每周摘要`));let S=e(`span`,y);o(y,S),l(S,`mt-1 block text-xs opacity-70`),o(S,u(`适合演示受控模式和更直接的布尔回调。`));let C=e(`div`,r);o(r,C),l(C,`flex flex-wrap gap-2 text-sm`);let w=e(`span`,C);o(C,w),l(w,`badge badge-soft badge-primary`),o(w,u(`checked=`));let T=g(w);o(w,T),s(()=>{f(T,i.value?`true`:`false`)});let E=e(`span`,C);return o(C,E),l(E,`badge badge-soft`),o(E,u(`onCheckedChange`)),r})},me=()=>d(t=>{let n=e(`div`,t);l(n,`flex flex-wrap items-center gap-3`);let r=c(`rue:component:anchor`);o(n,r),m(h(x,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),n,r);let i=e(`span`,n);return o(n,i),l(i,`text-sm text-base-content/70`),o(i,u(`组件会自动同步原生 input 的 indeterminate 状态。`)),n}),he=()=>{let{selected:t}=_(`useSetup:0:0:dup2`,()=>n(()=>({selected:_(`ref:1:2`,()=>r([`design-system`]))})));return d(n=>{let r=e(`div`,n);l(r,`space-y-4`);let i=c(`rue:component:anchor`);o(r,i),s(()=>{let e=h(x.Group,{value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});a(()=>m(e,r,i))});let d=e(`div`,r);o(r,d),l(d,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),o(d,u(`当前订阅：`));let p=g(d);return o(d,p),s(()=>{f(p,t.value.length?t.value.join(` / `):`未选择`)}),r})},ge=()=>{let{checkedList:t,allValues:i,allChecked:f,partiallyChecked:p}=_(`useSetup:0:0:dup3`,()=>n(()=>{let e=_(`ref:1:3`,()=>r([`home`])),t=O.map(e=>e.value),n=e.value.length===t.length;return{checkedList:e,allValues:t,allChecked:n,partiallyChecked:e.value.length>0&&!n}}));return d(n=>{let r=e(`div`,n);l(r,`space-y-4`);let d=e(`div`,r);o(r,d),l(d,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let g=c(`rue:component:anchor`);o(d,g),s(()=>{let e=h(x,{checked:f,indeterminate:p,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,n)=>{t.value=n.checked?[...i]:[]},children:`全选功能清单`});a(()=>m(e,d,g))});let _=e(`span`,d);o(d,_),l(_,`text-sm text-base-content/70`),o(_,u(`已选 `));let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.value.length;a(()=>m(e,_,v))}),o(_,u(`/`));let y=c(`rue:slot:anchor`);o(_,y),s(()=>{let e=i.length;a(()=>m(e,_,y))});let b=c(`rue:component:anchor`);return o(r,b),s(()=>{let e=h(x.Group,{value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});a(()=>m(e,r,b))}),r})},_e=()=>d(t=>{let n=e(`div`,t);l(n,`space-y-4`);let r=c(`rue:component:anchor`);o(n,r);let f=d(()=>{let t=i(),n=c(`rue:component:anchor`);o(t,n),m(h(x,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:d(()=>{let t=i(),n=e(`span`,t);o(t,n),l(n,`block`);let r=e(`span`,n);o(n,r),l(r,`font-medium`),o(r,u(`邮件通知`));let a=e(`span`,n);return o(n,a),l(a,`mt-1 block text-xs opacity-70`),o(a,u(`适合外部用户和日报汇总场景。`)),t})}),t,n);let r=c(`rue:component:anchor`);o(t,r),m(h(x,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:d(()=>{let t=i(),n=e(`span`,t);o(t,n),l(n,`block`);let r=e(`span`,n);o(n,r),l(r,`font-medium`),o(r,u(`Slack 频道`));let a=e(`span`,n);return o(n,a),l(a,`mt-1 block text-xs opacity-70`),o(a,u(`适合团队内部即时同步与讨论。`)),t})}),t,r);let a=c(`rue:component:anchor`);o(t,a),m(h(x,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:d(()=>{let t=i(),n=e(`span`,t);o(t,n),l(n,`block`);let r=e(`span`,n);o(n,r),l(r,`font-medium`),o(r,u(`Webhook`));let a=e(`span`,n);return o(n,a),l(a,`mt-1 block text-xs opacity-70`),o(a,u(`方便接入自动化脚本和外部工作流。`)),t})}),t,a);let s=c(`rue:component:anchor`);return o(t,s),m(h(x,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:d(()=>{let t=i(),n=e(`span`,t);o(t,n),l(n,`block`);let r=e(`span`,n);o(n,r),l(r,`font-medium`),o(r,u(`短信提醒`));let a=e(`span`,n);return o(n,a),l(a,`mt-1 block text-xs opacity-70`),o(a,u(`当前套餐暂未开放。`)),t})}),t,s),t});s(()=>{let e=h(x.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:f});a(()=>m(e,n,r))});let p=e(`div`,n);return o(n,p),l(p,`text-sm text-base-content/70`),o(p,u(`children 模式适合做卡片化布局或更复杂的说明区。`)),n}),A=()=>{let{tabBasic:t,tabFieldset:f,tabControlled:p,tabSizes:g,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>n(()=>({tabBasic:_(`ref:1:4`,()=>r(`preview`)),tabFieldset:_(`ref:1:5`,()=>r(`preview`)),tabControlled:_(`ref:1:6`,()=>r(`preview`)),tabSizes:_(`ref:1:7`,()=>r(`preview`)),tabColors:_(`ref:1:8`,()=>r(`preview`)),tabDisabled:_(`ref:1:9`,()=>r(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>r(`preview`)),tabGroup:_(`ref:1:11`,()=>r(`preview`)),tabCheckAll:_(`ref:1:12`,()=>r(`preview`)),tabGrid:_(`ref:1:13`,()=>r(`preview`)),tabCustomColors:_(`ref:1:14`,()=>r(`preview`))})));return d(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),m(h(S,{children:d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,r);o(r,d),o(d,u(`Checkbox 复选框`));let _=e(`p`,r);o(r,_),l(_,`mt-3 mb-3 text-sm`),o(_,u(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let S=e(`div`,r);o(r,S),l(S,`alert alert-soft mt-6 text-sm`);let j=e(`span`,S);o(S,j),o(j,u(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=e(`h2`,r);o(r,M),l(M,`mt-8`),o(M,u(`何时使用`));let N=e(`ul`,r);o(r,N);let P=e(`li`,N);o(N,P),o(P,u(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=e(`li`,N);o(N,F),o(F,u(`需要从一组并列选项中选择多个值时。`));let I=e(`li`,N);o(N,I),o(I,u(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=c(`rue:component:anchor`);o(r,L),s(()=>{let e=h(w,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:t,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});a(()=>m(e,r,L))});let R=c(`rue:component:anchor`);o(r,R),s(()=>{let e=h(w,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:f,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(x,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});a(()=>m(e,r,R))});let z=c(`rue:component:anchor`);o(r,z),s(()=>{let e=h(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:p,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});a(()=>m(e,r,z))});let B=c(`rue:component:anchor`);o(r,B),s(()=>{let e=h(w,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:g,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,size:`xs`}),b(x,{defaultChecked:!0,size:`sm`}),b(x,{defaultChecked:!0,size:`md`}),b(x,{defaultChecked:!0,size:`lg`}),b(x,{defaultChecked:!0,size:`xl`})]})})}),code:re});a(()=>m(e,r,B))});let V=c(`rue:component:anchor`);o(r,V),s(()=>{let e=h(w,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,color:`primary`}),b(x,{defaultChecked:!0,color:`secondary`}),b(x,{defaultChecked:!0,color:`accent`}),b(x,{defaultChecked:!0,color:`neutral`}),b(x,{defaultChecked:!0,color:`info`}),b(x,{defaultChecked:!0,color:`success`}),b(x,{defaultChecked:!0,color:`warning`}),b(x,{defaultChecked:!0,color:`error`})]})})}),code:ie});a(()=>m(e,r,V))});let H=c(`rue:component:anchor`);o(r,H),s(()=>{let e=h(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(x,{disabled:!0,children:`只读选项`}),b(x,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});a(()=>m(e,r,H))});let U=c(`rue:component:anchor`);o(r,U),s(()=>{let e=h(w,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});a(()=>m(e,r,U))});let W=c(`rue:component:anchor`);o(r,W),s(()=>{let e=h(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});a(()=>m(e,r,W))});let G=c(`rue:component:anchor`);o(r,G),s(()=>{let e=h(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});a(()=>m(e,r,G))});let K=c(`rue:component:anchor`);o(r,K),s(()=>{let e=h(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});a(()=>m(e,r,K))});let q=c(`rue:component:anchor`);o(r,q),s(()=>{let e=h(w,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(x,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});a(()=>m(e,r,q))});let J=e(`h2`,r);o(r,J),l(J,`mt-12`),o(J,u(`API`));let Y=e(`p`,r);o(r,Y),l(Y,`text-sm text-base-content/70`),o(Y,u(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let X=e(`h3`,r);o(r,X),l(X,`mt-6`),o(X,u(`Checkbox`));let Z=c(`rue:component:anchor`);o(r,Z),s(()=>{let e=h(T,{rows:ue});a(()=>m(e,r,Z))});let Q=e(`h3`,r);o(r,Q),l(Q,`mt-8`),o(Q,u(`Checkbox.Group`));let $=c(`rue:component:anchor`);return o(r,$),s(()=>{let e=h(T,{rows:de});a(()=>m(e,r,$))}),n})}),r,_),r})};export{A as default};