import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as y,i as b}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as x}from"./checkbox-Crm1Zj5M.js";import{r as S}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as C}from"./PreviewBlock-wHSyDiek.js";var w=C,T=t=>c(r=>{let o=u(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,o);n(o,s),i(s,`table table-zebra`);let p=u(`thead`,s);n(s,p);let h=u(`tr`,p);n(p,h);let _=u(`th`,h);n(h,_),n(_,f(`属性`));let y=u(`th`,h);n(h,y),n(y,f(`说明`));let b=u(`th`,h);n(h,b),n(b,f(`类型`));let x=u(`th`,h);n(h,x),n(x,f(`默认值`));let S=u(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return g(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{d(c(()=>{let r=m(),i=u(`tr`,r);n(r,i),g(()=>{l(i,`key`,String(t.prop))});let o=u(`td`,i);n(i,o);let s=u(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),g(()=>{let n=t.description;e(()=>d(n,f,p))});let h=u(`td`,i);n(i,h);let _=u(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),g(()=>{let n=t.type;e(()=>d(n,_,v))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),g(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),o}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与路线提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:r}=_(`useSetup:0:0`,()=>o(()=>({checked:_(`ref:1:0`,()=>t(!0))})));return c(t=>{let o=u(`div`,t);i(o,`flex flex-wrap items-center gap-3`);let c=a(`rue:component:anchor`);n(o,c),g(()=>{let t=p(x,{"data-testid":`checkbox-basic`,checked:r.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{r.value=e},children:`接收产品更新`});e(()=>d(t,o,c))});let l=u(`span`,o);n(o,l),i(l,`text-sm text-base-content/70`),n(l,f(`当前状态：`));let m=s(l);return n(l,m),g(()=>{h(m,r.value?`已选中`:`未选中`)}),o})},pe=()=>{let{enabled:m}=_(`useSetup:0:0:dup1`,()=>o(()=>({enabled:_(`ref:1:1`,()=>t(!1))})));return c(t=>{let o=u(`div`,t);i(o,`space-y-4`);let c=u(`div`,o);n(o,c),l(c,`data-testid`,`checkbox-controlled-card`),i(c,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),r(c,`click`,e=>{e.target?.closest(`input`)||(m.value=!m.value)});let _=u(`div`,c);n(c,_),i(_,`flex items-start gap-3`);let v=a(`rue:component:anchor`);n(_,v),g(()=>{let t=p(x,{checked:m.value,onCheckedChange:e=>{m.value=e}});e(()=>d(t,_,v))});let y=u(`span`,_);n(_,y),i(y,`min-w-0 flex-1 block`);let b=u(`span`,y);n(y,b),i(b,`font-medium`),n(b,f(`开启每周摘要`));let S=u(`span`,y);n(y,S),i(S,`mt-1 block text-xs opacity-70`),n(S,f(`适合演示受控模式和更直接的布尔回调。`));let C=u(`div`,o);n(o,C),i(C,`flex flex-wrap gap-2 text-sm`);let w=u(`span`,C);n(C,w),i(w,`badge badge-soft badge-primary`),n(w,f(`checked=`));let T=s(w);n(w,T),g(()=>{h(T,m.value?`true`:`false`)});let E=u(`span`,C);return n(C,E),i(E,`badge badge-soft`),n(E,f(`onCheckedChange`)),o})},me=()=>c(e=>{let t=u(`div`,e);i(t,`flex flex-wrap items-center gap-3`);let r=a(`rue:component:anchor`);n(t,r),d(p(x,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),t,r);let o=u(`span`,t);return n(t,o),i(o,`text-sm text-base-content/70`),n(o,f(`组件会自动同步原生 input 的 indeterminate 状态。`)),t}),he=()=>{let{selected:r}=_(`useSetup:0:0:dup2`,()=>o(()=>({selected:_(`ref:1:2`,()=>t([`design-system`]))})));return c(t=>{let o=u(`div`,t);i(o,`space-y-4`);let c=a(`rue:component:anchor`);n(o,c),g(()=>{let t=p(x.Group,{value:r.value,onChange:e=>{r.value=e},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});e(()=>d(t,o,c))});let l=u(`div`,o);n(o,l),i(l,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),n(l,f(`当前订阅：`));let m=s(l);return n(l,m),g(()=>{h(m,r.value.length?r.value.join(` / `):`未选择`)}),o})},ge=()=>{let{checkedList:r,allValues:s}=_(`useSetup:0:0:dup3`,()=>o(()=>({checkedList:_(`ref:1:3`,()=>t([`home`])),allValues:O.map(e=>e.value)})));return c(t=>{let o=u(`div`,t);i(o,`space-y-4`);let c=u(`div`,o);n(o,c),i(c,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let l=a(`rue:component:anchor`);n(c,l),g(()=>{let t=p(x,{checked:r.value.length===s.length,indeterminate:r.value.length>0&&r.value.length<s.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,t)=>{r.value=t.checked?[...s]:[]},children:`全选功能清单`});e(()=>d(t,c,l))});let m=u(`span`,c);n(c,m),i(m,`text-sm text-base-content/70`),n(m,f(`已选 `));let h=a(`rue:slot:anchor`);n(m,h),g(()=>{let t=r.value.length;e(()=>d(t,m,h))}),n(m,f(`/`));let _=a(`rue:slot:anchor`);n(m,_),g(()=>{let t=s.length;e(()=>d(t,m,_))});let v=a(`rue:component:anchor`);return n(o,v),g(()=>{let t=p(x.Group,{value:r.value,onChange:e=>{r.value=e},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});e(()=>d(t,o,v))}),o})},_e=()=>c(t=>{let r=u(`div`,t);i(r,`space-y-4`);let o=a(`rue:component:anchor`);n(r,o);let s=c(()=>{let e=m(),t=a(`rue:component:anchor`);n(e,t),d(p(x,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:c(()=>{let e=m(),t=u(`span`,e);n(e,t),i(t,`block`);let r=u(`span`,t);n(t,r),i(r,`font-medium`),n(r,f(`邮件通知`));let a=u(`span`,t);return n(t,a),i(a,`mt-1 block text-xs opacity-70`),n(a,f(`适合外部用户和日报汇总场景。`)),e})}),e,t);let r=a(`rue:component:anchor`);n(e,r),d(p(x,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:c(()=>{let e=m(),t=u(`span`,e);n(e,t),i(t,`block`);let r=u(`span`,t);n(t,r),i(r,`font-medium`),n(r,f(`Slack 频道`));let a=u(`span`,t);return n(t,a),i(a,`mt-1 block text-xs opacity-70`),n(a,f(`适合团队内部即时同步与讨论。`)),e})}),e,r);let o=a(`rue:component:anchor`);n(e,o),d(p(x,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:c(()=>{let e=m(),t=u(`span`,e);n(e,t),i(t,`block`);let r=u(`span`,t);n(t,r),i(r,`font-medium`),n(r,f(`Webhook`));let a=u(`span`,t);return n(t,a),i(a,`mt-1 block text-xs opacity-70`),n(a,f(`方便接入自动化脚本和外部工作流。`)),e})}),e,o);let s=a(`rue:component:anchor`);return n(e,s),d(p(x,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:c(()=>{let e=m(),t=u(`span`,e);n(e,t),i(t,`block`);let r=u(`span`,t);n(t,r),i(r,`font-medium`),n(r,f(`短信提醒`));let a=u(`span`,t);return n(t,a),i(a,`mt-1 block text-xs opacity-70`),n(a,f(`当前套餐暂未开放。`)),e})}),e,s),e});g(()=>{let t=p(x.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:s});e(()=>d(t,r,o))});let l=u(`div`,r);return n(r,l),i(l,`text-sm text-base-content/70`),n(l,f(`children 模式适合做卡片化布局或更复杂的说明区。`)),r}),A=()=>{let{tabBasic:r,tabFieldset:s,tabControlled:l,tabSizes:h,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>o(()=>({tabBasic:_(`ref:1:4`,()=>t(`preview`)),tabFieldset:_(`ref:1:5`,()=>t(`preview`)),tabControlled:_(`ref:1:6`,()=>t(`preview`)),tabSizes:_(`ref:1:7`,()=>t(`preview`)),tabColors:_(`ref:1:8`,()=>t(`preview`)),tabDisabled:_(`ref:1:9`,()=>t(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>t(`preview`)),tabGroup:_(`ref:1:11`,()=>t(`preview`)),tabCheckAll:_(`ref:1:12`,()=>t(`preview`)),tabGrid:_(`ref:1:13`,()=>t(`preview`)),tabCustomColors:_(`ref:1:14`,()=>t(`preview`))})));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(S,{children:c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,o);n(o,c),n(c,f(`Checkbox 复选框`));let _=u(`p`,o);n(o,_),i(_,`mt-3 mb-3 text-sm`),n(_,f(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let S=u(`div`,o);n(o,S),i(S,`alert alert-soft mt-6 text-sm`);let j=u(`span`,S);n(S,j),n(j,f(`Rue 在使用 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=u(`h2`,o);n(o,M),i(M,`mt-8`),n(M,f(`何时使用`));let N=u(`ul`,o);n(o,N);let P=u(`li`,N);n(N,P),n(P,f(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=u(`li`,N);n(N,F),n(F,f(`需要从一组并列选项中选择多个值时。`));let I=u(`li`,N);n(N,I),n(I,f(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=a(`rue:component:anchor`);n(o,L),g(()=>{let t=p(w,{title:`Checkbox`,summary:`展示基础用法，并支持 children 作为可点击说明区。`,tab:r,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});e(()=>d(t,o,L))});let R=a(`rue:component:anchor`);n(o,R),g(()=>{let t=p(w,{title:`With fieldset and label`,summary:`展示基础 fieldset 场景，适合设置页或表单分区。`,tab:s,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(x,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});e(()=>d(t,o,R))});let z=a(`rue:component:anchor`);n(o,z),g(()=>{let t=p(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:l,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});e(()=>d(t,o,z))});let B=a(`rue:component:anchor`);n(o,B),g(()=>{let t=p(w,{title:`Sizes`,summary:`使用 Rue 当前的尺寸体系。`,tab:h,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,size:`xs`}),b(x,{defaultChecked:!0,size:`sm`}),b(x,{defaultChecked:!0,size:`md`}),b(x,{defaultChecked:!0,size:`lg`}),b(x,{defaultChecked:!0,size:`xl`})]})})}),code:re});e(()=>d(t,o,B))});let V=a(`rue:component:anchor`);n(o,V),g(()=>{let t=p(w,{title:`Colors`,summary:`颜色语义保持与当前 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,color:`primary`}),b(x,{defaultChecked:!0,color:`secondary`}),b(x,{defaultChecked:!0,color:`accent`}),b(x,{defaultChecked:!0,color:`neutral`}),b(x,{defaultChecked:!0,color:`info`}),b(x,{defaultChecked:!0,color:`success`}),b(x,{defaultChecked:!0,color:`warning`}),b(x,{defaultChecked:!0,color:`error`})]})})}),code:ie});e(()=>d(t,o,V))});let H=a(`rue:component:anchor`);n(o,H),g(()=>{let t=p(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(x,{disabled:!0,children:`只读选项`}),b(x,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});e(()=>d(t,o,H))});let U=a(`rue:component:anchor`);n(o,U),g(()=>{let t=p(w,{title:`Indeterminate`,summary:`展示基础半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});e(()=>d(t,o,U))});let W=a(`rue:component:anchor`);n(o,W),g(()=>{let t=p(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});e(()=>d(t,o,W))});let G=a(`rue:component:anchor`);n(o,G),g(()=>{let t=p(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});e(()=>d(t,o,G))});let K=a(`rue:component:anchor`);n(o,K),g(()=>{let t=p(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});e(()=>d(t,o,K))});let q=a(`rue:component:anchor`);n(o,q),g(()=>{let t=p(w,{title:`Checkbox with custom colors`,summary:`展示基础自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(x,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});e(()=>d(t,o,q))});let J=u(`h2`,o);n(o,J),i(J,`mt-12`),n(J,f(`API`));let Y=u(`p`,o);n(o,Y),i(Y,`text-sm text-base-content/70`),n(Y,f(`className 默认作用在原生 input 上；需要控制包裹层时，请使用 rootClassName 和 rootStyle。`));let X=u(`h3`,o);n(o,X),i(X,`mt-6`),n(X,f(`Checkbox`));let Z=a(`rue:component:anchor`);n(o,Z),g(()=>{let t=p(T,{rows:ue});e(()=>d(t,o,Z))});let Q=u(`h3`,o);n(o,Q),i(Q,`mt-8`),n(Q,f(`Checkbox.Group`));let $=a(`rue:component:anchor`);return n(o,$),g(()=>{let t=p(T,{rows:de});e(()=>d(t,o,$))}),t})}),o,_),o})};export{A as default};