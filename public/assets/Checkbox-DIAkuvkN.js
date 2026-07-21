import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as y,t as b}from"./src-CCTNpCXV.js";import{t as x}from"./checkbox-CSH_-zmH.js";import{r as S}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as C}from"./PreviewBlock-ARp---67.js";var w=C,T=e=>m(n=>{let o=u(`div`,n);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=u(`table`,o);d(o,c),r(c,`table table-zebra`);let l=u(`thead`,c);d(c,l);let g=u(`tr`,l);d(l,g);let _=u(`th`,g);d(g,_),d(_,s(`属性`));let y=u(`th`,g);d(g,y),d(y,s(`说明`));let b=u(`th`,g);d(g,b),d(b,s(`类型`));let x=u(`th`,g);d(g,x),d(x,s(`默认值`));let S=u(`tbody`,c);d(c,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,o,s)=>{h(m(()=>{let n=a(),r=u(`tr`,n);d(n,r),f(()=>{t(r,`key`,String(e.prop))});let o=u(`td`,r);d(r,o);let s=u(`code`,o);d(o,s);let c=i(`rue:slot:anchor`);d(s,c),f(()=>{let t=e.prop;p(()=>h(t,s,c))});let l=u(`td`,r);d(r,l);let m=i(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>h(t,l,m))});let g=u(`td`,r);d(r,g);let _=u(`code`,g);d(g,_);let v=i(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>h(t,_,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=i(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>h(t,b,x))}),n}),n,r)}})}),o}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与路线提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:t}=_(`useSetup:0:0`,()=>e(()=>({checked:_(`ref:1:0`,()=>l(!0))})));return m(e=>{let a=u(`div`,e);r(a,`flex flex-wrap items-center gap-3`);let c=i(`rue:component:anchor`);d(a,c),f(()=>{let e=g(x,{"data-testid":`checkbox-basic`,checked:t.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{t.value=e},children:`接收产品更新`});p(()=>h(e,a,c))});let l=u(`span`,a);d(a,l),r(l,`text-sm text-base-content/70`),d(l,s(`当前状态：`));let m=o(l);return d(l,m),f(()=>{n(m,t.value?`已选中`:`未选中`)}),a})},pe=()=>{let{enabled:a}=_(`useSetup:0:0:dup1`,()=>e(()=>({enabled:_(`ref:1:1`,()=>l(!1))})));return m(e=>{let l=u(`div`,e);r(l,`space-y-4`);let m=u(`div`,l);d(l,m),t(m,`data-testid`,`checkbox-controlled-card`),r(m,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),c(m,`click`,e=>{e.target?.closest(`input`)||(a.value=!a.value)});let _=u(`div`,m);d(m,_),r(_,`flex items-start gap-3`);let v=i(`rue:component:anchor`);d(_,v),f(()=>{let e=g(x,{checked:a.value,onCheckedChange:e=>{a.value=e}});p(()=>h(e,_,v))});let y=u(`span`,_);d(_,y),r(y,`min-w-0 flex-1 block`);let b=u(`span`,y);d(y,b),r(b,`font-medium`),d(b,s(`开启每周摘要`));let S=u(`span`,y);d(y,S),r(S,`mt-1 block text-xs opacity-70`),d(S,s(`适合演示受控模式和更直接的布尔回调。`));let C=u(`div`,l);d(l,C),r(C,`flex flex-wrap gap-2 text-sm`);let w=u(`span`,C);d(C,w),r(w,`badge badge-soft badge-primary`),d(w,s(`checked=`));let T=o(w);d(w,T),f(()=>{n(T,a.value?`true`:`false`)});let E=u(`span`,C);return d(C,E),r(E,`badge badge-soft`),d(E,s(`onCheckedChange`)),l})},me=()=>m(e=>{let t=u(`div`,e);r(t,`flex flex-wrap items-center gap-3`);let n=i(`rue:component:anchor`);d(t,n),h(g(x,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),t,n);let a=u(`span`,t);return d(t,a),r(a,`text-sm text-base-content/70`),d(a,s(`组件会自动同步原生 input 的 indeterminate 状态。`)),t}),he=()=>{let{selected:t}=_(`useSetup:0:0:dup2`,()=>e(()=>({selected:_(`ref:1:2`,()=>l([`design-system`]))})));return m(e=>{let a=u(`div`,e);r(a,`space-y-4`);let c=i(`rue:component:anchor`);d(a,c),f(()=>{let e=g(x.Group,{value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});p(()=>h(e,a,c))});let l=u(`div`,a);d(a,l),r(l,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),d(l,s(`当前订阅：`));let m=o(l);return d(l,m),f(()=>{n(m,t.value.length?t.value.join(` / `):`未选择`)}),a})},ge=()=>{let{checkedList:t,allValues:n}=_(`useSetup:0:0:dup3`,()=>e(()=>({checkedList:_(`ref:1:3`,()=>l([`home`])),allValues:O.map(e=>e.value)})));return m(e=>{let a=u(`div`,e);r(a,`space-y-4`);let o=u(`div`,a);d(a,o),r(o,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let c=i(`rue:component:anchor`);d(o,c),f(()=>{let e=g(x,{checked:t.value.length===n.length,indeterminate:t.value.length>0&&t.value.length<n.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,r)=>{t.value=r.checked?[...n]:[]},children:`全选功能清单`});p(()=>h(e,o,c))});let l=u(`span`,o);d(o,l),r(l,`text-sm text-base-content/70`),d(l,s(`已选 `));let m=i(`rue:slot:anchor`);d(l,m),f(()=>{let e=t.value.length;p(()=>h(e,l,m))}),d(l,s(`/`));let _=i(`rue:slot:anchor`);d(l,_),f(()=>{let e=n.length;p(()=>h(e,l,_))});let v=i(`rue:component:anchor`);return d(a,v),f(()=>{let e=g(x.Group,{value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});p(()=>h(e,a,v))}),a})},_e=()=>m(e=>{let t=u(`div`,e);r(t,`space-y-4`);let n=i(`rue:component:anchor`);d(t,n);let o=m(()=>{let e=a(),t=i(`rue:component:anchor`);d(e,t),h(g(x,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:m(()=>{let e=a(),t=u(`span`,e);d(e,t),r(t,`block`);let n=u(`span`,t);d(t,n),r(n,`font-medium`),d(n,s(`邮件通知`));let i=u(`span`,t);return d(t,i),r(i,`mt-1 block text-xs opacity-70`),d(i,s(`适合外部用户和日报汇总场景。`)),e})}),e,t);let n=i(`rue:component:anchor`);d(e,n),h(g(x,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:m(()=>{let e=a(),t=u(`span`,e);d(e,t),r(t,`block`);let n=u(`span`,t);d(t,n),r(n,`font-medium`),d(n,s(`Slack 频道`));let i=u(`span`,t);return d(t,i),r(i,`mt-1 block text-xs opacity-70`),d(i,s(`适合团队内部即时同步与讨论。`)),e})}),e,n);let o=i(`rue:component:anchor`);d(e,o),h(g(x,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:m(()=>{let e=a(),t=u(`span`,e);d(e,t),r(t,`block`);let n=u(`span`,t);d(t,n),r(n,`font-medium`),d(n,s(`Webhook`));let i=u(`span`,t);return d(t,i),r(i,`mt-1 block text-xs opacity-70`),d(i,s(`方便接入自动化脚本和外部工作流。`)),e})}),e,o);let c=i(`rue:component:anchor`);return d(e,c),h(g(x,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:m(()=>{let e=a(),t=u(`span`,e);d(e,t),r(t,`block`);let n=u(`span`,t);d(t,n),r(n,`font-medium`),d(n,s(`短信提醒`));let i=u(`span`,t);return d(t,i),r(i,`mt-1 block text-xs opacity-70`),d(i,s(`当前套餐暂未开放。`)),e})}),e,c),e});f(()=>{let e=g(x.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:o});p(()=>h(e,t,n))});let c=u(`div`,t);return d(t,c),r(c,`text-sm text-base-content/70`),d(c,s(`children 模式适合做卡片化布局或更复杂的说明区。`)),t}),A=()=>{let{tabBasic:t,tabFieldset:n,tabControlled:o,tabSizes:c,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>e(()=>({tabBasic:_(`ref:1:4`,()=>l(`preview`)),tabFieldset:_(`ref:1:5`,()=>l(`preview`)),tabControlled:_(`ref:1:6`,()=>l(`preview`)),tabSizes:_(`ref:1:7`,()=>l(`preview`)),tabColors:_(`ref:1:8`,()=>l(`preview`)),tabDisabled:_(`ref:1:9`,()=>l(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>l(`preview`)),tabGroup:_(`ref:1:11`,()=>l(`preview`)),tabCheckAll:_(`ref:1:12`,()=>l(`preview`)),tabGrid:_(`ref:1:13`,()=>l(`preview`)),tabCustomColors:_(`ref:1:14`,()=>l(`preview`))})));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(S,{children:m(()=>{let e=a(),l=u(`div`,e);d(e,l),r(l,`max-w-none prose prose-sm md:prose-base`);let m=u(`h1`,l);d(l,m),d(m,s(`Checkbox 复选框`));let _=u(`p`,l);d(l,_),r(_,`mt-3 mb-3 text-sm`),d(_,s(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let S=u(`div`,l);d(l,S),r(S,`alert alert-soft mt-6 text-sm`);let j=u(`span`,S);d(S,j),d(j,s(`Rue 在使用 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=u(`h2`,l);d(l,M),r(M,`mt-8`),d(M,s(`何时使用`));let N=u(`ul`,l);d(l,N);let P=u(`li`,N);d(N,P),d(P,s(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=u(`li`,N);d(N,F),d(F,s(`需要从一组并列选项中选择多个值时。`));let I=u(`li`,N);d(N,I),d(I,s(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=i(`rue:component:anchor`);d(l,L),f(()=>{let e=g(w,{title:`Checkbox`,summary:`展示基础用法，并支持 children 作为可点击说明区。`,tab:t,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});p(()=>h(e,l,L))});let R=i(`rue:component:anchor`);d(l,R),f(()=>{let e=g(w,{title:`With fieldset and label`,summary:`展示基础 fieldset 场景，适合设置页或表单分区。`,tab:n,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(x,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});p(()=>h(e,l,R))});let z=i(`rue:component:anchor`);d(l,z),f(()=>{let e=g(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:o,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});p(()=>h(e,l,z))});let B=i(`rue:component:anchor`);d(l,B),f(()=>{let e=g(w,{title:`Sizes`,summary:`使用 Rue 当前的尺寸体系。`,tab:c,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,size:`xs`}),b(x,{defaultChecked:!0,size:`sm`}),b(x,{defaultChecked:!0,size:`md`}),b(x,{defaultChecked:!0,size:`lg`}),b(x,{defaultChecked:!0,size:`xl`})]})})}),code:re});p(()=>h(e,l,B))});let V=i(`rue:component:anchor`);d(l,V),f(()=>{let e=g(w,{title:`Colors`,summary:`颜色语义保持与当前 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,color:`primary`}),b(x,{defaultChecked:!0,color:`secondary`}),b(x,{defaultChecked:!0,color:`accent`}),b(x,{defaultChecked:!0,color:`neutral`}),b(x,{defaultChecked:!0,color:`info`}),b(x,{defaultChecked:!0,color:`success`}),b(x,{defaultChecked:!0,color:`warning`}),b(x,{defaultChecked:!0,color:`error`})]})})}),code:ie});p(()=>h(e,l,V))});let H=i(`rue:component:anchor`);d(l,H),f(()=>{let e=g(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(x,{disabled:!0,children:`只读选项`}),b(x,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});p(()=>h(e,l,H))});let U=i(`rue:component:anchor`);d(l,U),f(()=>{let e=g(w,{title:`Indeterminate`,summary:`展示基础半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});p(()=>h(e,l,U))});let W=i(`rue:component:anchor`);d(l,W),f(()=>{let e=g(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});p(()=>h(e,l,W))});let G=i(`rue:component:anchor`);d(l,G),f(()=>{let e=g(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});p(()=>h(e,l,G))});let K=i(`rue:component:anchor`);d(l,K),f(()=>{let e=g(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});p(()=>h(e,l,K))});let q=i(`rue:component:anchor`);d(l,q),f(()=>{let e=g(w,{title:`Checkbox with custom colors`,summary:`展示基础自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(x,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});p(()=>h(e,l,q))});let J=u(`h2`,l);d(l,J),r(J,`mt-12`),d(J,s(`API`));let Y=u(`p`,l);d(l,Y),r(Y,`text-sm text-base-content/70`),d(Y,s(`className 默认作用在原生 input 上；需要控制包裹层时，请使用 rootClassName 和 rootStyle。`));let X=u(`h3`,l);d(l,X),r(X,`mt-6`),d(X,s(`Checkbox`));let Z=i(`rue:component:anchor`);d(l,Z),f(()=>{let e=g(T,{rows:ue});p(()=>h(e,l,Z))});let Q=u(`h3`,l);d(l,Q),r(Q,`mt-8`),d(Q,s(`Checkbox.Group`));let $=i(`rue:component:anchor`);return d(l,$),f(()=>{let e=g(T,{rows:de});p(()=>h(e,l,$))}),e})}),l,_),l})};export{A as default};