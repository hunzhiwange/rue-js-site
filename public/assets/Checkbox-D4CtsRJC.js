import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as y,i as b}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as x}from"./checkbox-C93ZUts8.js";import{r as S}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as C}from"./PreviewBlock-xsXk-Jrr.js";var w=C,T=n=>u(i=>{let a=h(`div`,i);g(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=h(`table`,a);o(a,l),g(l,`table table-zebra`);let p=h(`thead`,l);o(l,p);let m=h(`tr`,p);o(p,m);let _=h(`th`,m);o(m,_),o(_,d(`属性`));let y=h(`th`,m);o(m,y),o(y,d(`说明`));let b=h(`th`,m);o(m,b),o(b,d(`类型`));let x=h(`th`,m);o(m,x),o(x,d(`默认值`));let S=h(`tbody`,l);o(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,l,d)=>{f(u(()=>{let i=c(),a=h(`tr`,i);o(i,a),t(()=>{s(a,`key`,String(n.prop))});let l=h(`td`,a);o(a,l);let u=h(`code`,l);o(l,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>f(e,u,d))});let p=h(`td`,a);o(a,p);let m=e(`rue:slot:anchor`);o(p,m),t(()=>{let e=n.description;r(()=>f(e,p,m))});let g=h(`td`,a);o(a,g);let _=h(`code`,g);o(g,_);let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.type;r(()=>f(e,_,v))});let y=h(`td`,a);o(a,y);let b=h(`code`,y);o(y,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>f(e,b,x))}),i}),i,a)}})}),a}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:i}=_(`useSetup:0:0`,()=>a(()=>({checked:_(`ref:1:0`,()=>n(!0))})));return u(n=>{let a=h(`div`,n);g(a,`flex flex-wrap items-center gap-3`);let s=e(`rue:component:anchor`);o(a,s),t(()=>{let e=m(x,{"data-testid":`checkbox-basic`,checked:i.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{i.value=e},children:`接收产品更新`});r(()=>f(e,a,s))});let c=h(`span`,a);o(a,c),g(c,`text-sm text-base-content/70`),o(c,d(`当前状态：`));let u=p(c);return o(c,u),t(()=>{l(u,i.value?`已选中`:`未选中`)}),a})},pe=()=>{let{enabled:c}=_(`useSetup:0:0:dup1`,()=>a(()=>({enabled:_(`ref:1:1`,()=>n(!1))})));return u(n=>{let a=h(`div`,n);g(a,`space-y-4`);let u=h(`div`,a);o(a,u),s(u,`data-testid`,`checkbox-controlled-card`),g(u,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),i(u,`click`,e=>{e.target?.closest(`input`)||(c.value=!c.value)});let _=h(`div`,u);o(u,_),g(_,`flex items-start gap-3`);let v=e(`rue:component:anchor`);o(_,v),t(()=>{let e=m(x,{checked:c.value,onCheckedChange:e=>{c.value=e}});r(()=>f(e,_,v))});let y=h(`span`,_);o(_,y),g(y,`min-w-0 flex-1 block`);let b=h(`span`,y);o(y,b),g(b,`font-medium`),o(b,d(`开启每周摘要`));let S=h(`span`,y);o(y,S),g(S,`mt-1 block text-xs opacity-70`),o(S,d(`适合演示受控模式和更直接的布尔回调。`));let C=h(`div`,a);o(a,C),g(C,`flex flex-wrap gap-2 text-sm`);let w=h(`span`,C);o(C,w),g(w,`badge badge-soft badge-primary`),o(w,d(`checked=`));let T=p(w);o(w,T),t(()=>{l(T,c.value?`true`:`false`)});let E=h(`span`,C);return o(C,E),g(E,`badge badge-soft`),o(E,d(`onCheckedChange`)),a})},me=()=>u(t=>{let n=h(`div`,t);g(n,`flex flex-wrap items-center gap-3`);let r=e(`rue:component:anchor`);o(n,r),f(m(x,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),n,r);let i=h(`span`,n);return o(n,i),g(i,`text-sm text-base-content/70`),o(i,d(`组件会自动同步原生 input 的 indeterminate 状态。`)),n}),he=()=>{let{selected:i}=_(`useSetup:0:0:dup2`,()=>a(()=>({selected:_(`ref:1:2`,()=>n([`design-system`]))})));return u(n=>{let a=h(`div`,n);g(a,`space-y-4`);let s=e(`rue:component:anchor`);o(a,s),t(()=>{let e=m(x.Group,{value:i.value,onChange:e=>{i.value=e},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});r(()=>f(e,a,s))});let c=h(`div`,a);o(a,c),g(c,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),o(c,d(`当前订阅：`));let u=p(c);return o(c,u),t(()=>{l(u,i.value.length?i.value.join(` / `):`未选择`)}),a})},ge=()=>{let{checkedList:i,allValues:s}=_(`useSetup:0:0:dup3`,()=>a(()=>({checkedList:_(`ref:1:3`,()=>n([`home`])),allValues:O.map(e=>e.value)})));return u(n=>{let a=h(`div`,n);g(a,`space-y-4`);let c=h(`div`,a);o(a,c),g(c,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let l=e(`rue:component:anchor`);o(c,l),t(()=>{let e=m(x,{checked:i.value.length===s.length,indeterminate:i.value.length>0&&i.value.length<s.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,t)=>{i.value=t.checked?[...s]:[]},children:`全选功能清单`});r(()=>f(e,c,l))});let u=h(`span`,c);o(c,u),g(u,`text-sm text-base-content/70`),o(u,d(`已选 `));let p=e(`rue:slot:anchor`);o(u,p),t(()=>{let e=i.value.length;r(()=>f(e,u,p))}),o(u,d(`/`));let _=e(`rue:slot:anchor`);o(u,_),t(()=>{let e=s.length;r(()=>f(e,u,_))});let v=e(`rue:component:anchor`);return o(a,v),t(()=>{let e=m(x.Group,{value:i.value,onChange:e=>{i.value=e},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});r(()=>f(e,a,v))}),a})},_e=()=>u(n=>{let i=h(`div`,n);g(i,`space-y-4`);let a=e(`rue:component:anchor`);o(i,a);let s=u(()=>{let t=c(),n=e(`rue:component:anchor`);o(t,n),f(m(x,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let e=c(),t=h(`span`,e);o(e,t),g(t,`block`);let n=h(`span`,t);o(t,n),g(n,`font-medium`),o(n,d(`邮件通知`));let r=h(`span`,t);return o(t,r),g(r,`mt-1 block text-xs opacity-70`),o(r,d(`适合外部用户和日报汇总场景。`)),e})}),t,n);let r=e(`rue:component:anchor`);o(t,r),f(m(x,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let e=c(),t=h(`span`,e);o(e,t),g(t,`block`);let n=h(`span`,t);o(t,n),g(n,`font-medium`),o(n,d(`Slack 频道`));let r=h(`span`,t);return o(t,r),g(r,`mt-1 block text-xs opacity-70`),o(r,d(`适合团队内部即时同步与讨论。`)),e})}),t,r);let i=e(`rue:component:anchor`);o(t,i),f(m(x,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let e=c(),t=h(`span`,e);o(e,t),g(t,`block`);let n=h(`span`,t);o(t,n),g(n,`font-medium`),o(n,d(`Webhook`));let r=h(`span`,t);return o(t,r),g(r,`mt-1 block text-xs opacity-70`),o(r,d(`方便接入自动化脚本和外部工作流。`)),e})}),t,i);let a=e(`rue:component:anchor`);return o(t,a),f(m(x,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u(()=>{let e=c(),t=h(`span`,e);o(e,t),g(t,`block`);let n=h(`span`,t);o(t,n),g(n,`font-medium`),o(n,d(`短信提醒`));let r=h(`span`,t);return o(t,r),g(r,`mt-1 block text-xs opacity-70`),o(r,d(`当前套餐暂未开放。`)),e})}),t,a),t});t(()=>{let e=m(x.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:s});r(()=>f(e,i,a))});let l=h(`div`,i);return o(i,l),g(l,`text-sm text-base-content/70`),o(l,d(`children 模式适合做卡片化布局或更复杂的说明区。`)),i}),A=()=>{let{tabBasic:i,tabFieldset:s,tabControlled:l,tabSizes:p,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>a(()=>({tabBasic:_(`ref:1:4`,()=>n(`preview`)),tabFieldset:_(`ref:1:5`,()=>n(`preview`)),tabControlled:_(`ref:1:6`,()=>n(`preview`)),tabSizes:_(`ref:1:7`,()=>n(`preview`)),tabColors:_(`ref:1:8`,()=>n(`preview`)),tabDisabled:_(`ref:1:9`,()=>n(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>n(`preview`)),tabGroup:_(`ref:1:11`,()=>n(`preview`)),tabCheckAll:_(`ref:1:12`,()=>n(`preview`)),tabGrid:_(`ref:1:13`,()=>n(`preview`)),tabCustomColors:_(`ref:1:14`,()=>n(`preview`))})));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(S,{children:u(()=>{let n=c(),a=h(`div`,n);o(n,a),g(a,`max-w-none prose prose-sm md:prose-base`);let u=h(`h1`,a);o(a,u),o(u,d(`Checkbox 复选框`));let _=h(`p`,a);o(a,_),g(_,`mt-3 mb-3 text-sm`),o(_,d(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let S=h(`div`,a);o(a,S),g(S,`alert alert-soft mt-6 text-sm`);let j=h(`span`,S);o(S,j),o(j,d(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=h(`h2`,a);o(a,M),g(M,`mt-8`),o(M,d(`何时使用`));let N=h(`ul`,a);o(a,N);let P=h(`li`,N);o(N,P),o(P,d(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=h(`li`,N);o(N,F),o(F,d(`需要从一组并列选项中选择多个值时。`));let I=h(`li`,N);o(N,I),o(I,d(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=e(`rue:component:anchor`);o(a,L),t(()=>{let e=m(w,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:i,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});r(()=>f(e,a,L))});let R=e(`rue:component:anchor`);o(a,R),t(()=>{let e=m(w,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:s,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(x,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});r(()=>f(e,a,R))});let z=e(`rue:component:anchor`);o(a,z),t(()=>{let e=m(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:l,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});r(()=>f(e,a,z))});let B=e(`rue:component:anchor`);o(a,B),t(()=>{let e=m(w,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:p,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,size:`xs`}),b(x,{defaultChecked:!0,size:`sm`}),b(x,{defaultChecked:!0,size:`md`}),b(x,{defaultChecked:!0,size:`lg`}),b(x,{defaultChecked:!0,size:`xl`})]})})}),code:re});r(()=>f(e,a,B))});let V=e(`rue:component:anchor`);o(a,V),t(()=>{let e=m(w,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,color:`primary`}),b(x,{defaultChecked:!0,color:`secondary`}),b(x,{defaultChecked:!0,color:`accent`}),b(x,{defaultChecked:!0,color:`neutral`}),b(x,{defaultChecked:!0,color:`info`}),b(x,{defaultChecked:!0,color:`success`}),b(x,{defaultChecked:!0,color:`warning`}),b(x,{defaultChecked:!0,color:`error`})]})})}),code:ie});r(()=>f(e,a,V))});let H=e(`rue:component:anchor`);o(a,H),t(()=>{let e=m(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(x,{disabled:!0,children:`只读选项`}),b(x,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});r(()=>f(e,a,H))});let U=e(`rue:component:anchor`);o(a,U),t(()=>{let e=m(w,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});r(()=>f(e,a,U))});let W=e(`rue:component:anchor`);o(a,W),t(()=>{let e=m(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});r(()=>f(e,a,W))});let G=e(`rue:component:anchor`);o(a,G),t(()=>{let e=m(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});r(()=>f(e,a,G))});let K=e(`rue:component:anchor`);o(a,K),t(()=>{let e=m(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});r(()=>f(e,a,K))});let q=e(`rue:component:anchor`);o(a,q),t(()=>{let e=m(w,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(x,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});r(()=>f(e,a,q))});let J=h(`h2`,a);o(a,J),g(J,`mt-12`),o(J,d(`API`));let Y=h(`p`,a);o(a,Y),g(Y,`text-sm text-base-content/70`),o(Y,d(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let X=h(`h3`,a);o(a,X),g(X,`mt-6`),o(X,d(`Checkbox`));let Z=e(`rue:component:anchor`);o(a,Z),t(()=>{let e=m(T,{rows:ue});r(()=>f(e,a,Z))});let Q=h(`h3`,a);o(a,Q),g(Q,`mt-8`),o(Q,d(`Checkbox.Group`));let $=e(`rue:component:anchor`);return o(a,$),t(()=>{let e=m(T,{rows:de});r(()=>f(e,a,$))}),n})}),a,_),a})};export{A as default};