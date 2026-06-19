import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as y,i as b}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as x}from"./checkbox-C9LOuUpi.js";import{r as S}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as C}from"./PreviewBlock-RQJhyX9w.js";var w=C,T=a=>l(o=>{let c=s(`div`,o);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,c);i(c,d),u(d,`table table-zebra`);let m=s(`thead`,d);i(d,m);let g=s(`tr`,m);i(m,g);let _=s(`th`,g);i(g,_),i(_,h(`属性`));let y=s(`th`,g);i(g,y),i(y,h(`说明`));let b=s(`th`,g);i(g,b),i(b,h(`类型`));let x=s(`th`,g);i(g,x),i(x,h(`默认值`));let S=s(`tbody`,d);i(d,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,o,c,u,d)=>{f(l(()=>{let o=e(),c=s(`tr`,o);i(o,c),n(()=>{p(c,`key`,String(a.prop))});let l=s(`td`,c);i(c,l);let u=s(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>f(e,u,d))});let m=s(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>f(e,m,h))});let g=s(`td`,c);i(c,g);let _=s(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>f(e,_,v))});let y=s(`td`,c);i(c,y);let b=s(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>f(e,b,x))}),o}),o,c)}})}),c}),E=`card border border-base-200/80 bg-base-100 shadow-sm`,D=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],O=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
`,ue=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],de=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],fe=()=>{let{checked:e}=_(`useSetup:0:0`,()=>o(()=>({checked:_(`ref:1:0`,()=>g(!0))})));return l(a=>{let o=s(`div`,a);u(o,`flex flex-wrap items-center gap-3`);let l=t(`rue:component:anchor`);i(o,l),n(()=>{let t=m(x,{"data-testid":`checkbox-basic`,checked:e.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:t=>{e.value=t},children:`接收产品更新`});r(()=>f(t,o,l))});let p=s(`span`,o);i(o,p),u(p,`text-sm text-base-content/70`),i(p,h(`当前状态：`));let g=d(p);return i(p,g),n(()=>{c(g,e.value?`已选中`:`未选中`)}),o})},pe=()=>{let{enabled:e}=_(`useSetup:0:0:dup1`,()=>o(()=>({enabled:_(`ref:1:1`,()=>g(!1))})));return l(o=>{let l=s(`div`,o);u(l,`space-y-4`);let g=s(`div`,l);i(l,g),p(g,`data-testid`,`checkbox-controlled-card`),u(g,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),a(g,`click`,t=>{t.target?.closest(`input`)||(e.value=!e.value)});let _=s(`div`,g);i(g,_),u(_,`flex items-start gap-3`);let v=t(`rue:component:anchor`);i(_,v),n(()=>{let t=m(x,{checked:e.value,onCheckedChange:t=>{e.value=t}});r(()=>f(t,_,v))});let y=s(`span`,_);i(_,y),u(y,`min-w-0 flex-1 block`);let b=s(`span`,y);i(y,b),u(b,`font-medium`),i(b,h(`开启每周摘要`));let S=s(`span`,y);i(y,S),u(S,`mt-1 block text-xs opacity-70`),i(S,h(`适合演示受控模式和更直接的布尔回调。`));let C=s(`div`,l);i(l,C),u(C,`flex flex-wrap gap-2 text-sm`);let w=s(`span`,C);i(C,w),u(w,`badge badge-soft badge-primary`),i(w,h(`checked=`));let T=d(w);i(w,T),n(()=>{c(T,e.value?`true`:`false`)});let E=s(`span`,C);return i(C,E),u(E,`badge badge-soft`),i(E,h(`onCheckedChange`)),l})},me=()=>l(e=>{let n=s(`div`,e);u(n,`flex flex-wrap items-center gap-3`);let r=t(`rue:component:anchor`);i(n,r),f(m(x,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),n,r);let a=s(`span`,n);return i(n,a),u(a,`text-sm text-base-content/70`),i(a,h(`组件会自动同步原生 input 的 indeterminate 状态。`)),n}),he=()=>{let{selected:e}=_(`useSetup:0:0:dup2`,()=>o(()=>({selected:_(`ref:1:2`,()=>g([`design-system`]))})));return l(a=>{let o=s(`div`,a);u(o,`space-y-4`);let l=t(`rue:component:anchor`);i(o,l),n(()=>{let t=m(x.Group,{value:e.value,onChange:t=>{e.value=t},className:`grid gap-3 sm:grid-cols-2`,options:D.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});r(()=>f(t,o,l))});let p=s(`div`,o);i(o,p),u(p,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),i(p,h(`当前订阅：`));let g=d(p);return i(p,g),n(()=>{c(g,e.value.length?e.value.join(` / `):`未选择`)}),o})},ge=()=>{let{checkedList:e,allValues:a}=_(`useSetup:0:0:dup3`,()=>o(()=>({checkedList:_(`ref:1:3`,()=>g([`home`])),allValues:O.map(e=>e.value)})));return l(o=>{let c=s(`div`,o);u(c,`space-y-4`);let l=s(`div`,c);i(c,l),u(l,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let d=t(`rue:component:anchor`);i(l,d),n(()=>{let t=m(x,{checked:e.value.length===a.length,indeterminate:e.value.length>0&&e.value.length<a.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(t,n)=>{e.value=n.checked?[...a]:[]},children:`全选功能清单`});r(()=>f(t,l,d))});let p=s(`span`,l);i(l,p),u(p,`text-sm text-base-content/70`),i(p,h(`已选 `));let g=t(`rue:slot:anchor`);i(p,g),n(()=>{let t=e.value.length;r(()=>f(t,p,g))}),i(p,h(`/`));let _=t(`rue:slot:anchor`);i(p,_),n(()=>{let e=a.length;r(()=>f(e,p,_))});let v=t(`rue:component:anchor`);return i(c,v),n(()=>{let t=m(x.Group,{value:e.value,onChange:t=>{e.value=t},className:`grid gap-3 sm:grid-cols-3`,options:O.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});r(()=>f(t,c,v))}),c})},_e=()=>l(a=>{let o=s(`div`,a);u(o,`space-y-4`);let c=t(`rue:component:anchor`);i(o,c);let d=l(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),f(m(x,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let t=e(),n=s(`span`,t);i(t,n),u(n,`block`);let r=s(`span`,n);i(n,r),u(r,`font-medium`),i(r,h(`邮件通知`));let a=s(`span`,n);return i(n,a),u(a,`mt-1 block text-xs opacity-70`),i(a,h(`适合外部用户和日报汇总场景。`)),t})}),n,r);let a=t(`rue:component:anchor`);i(n,a),f(m(x,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let t=e(),n=s(`span`,t);i(t,n),u(n,`block`);let r=s(`span`,n);i(n,r),u(r,`font-medium`),i(r,h(`Slack 频道`));let a=s(`span`,n);return i(n,a),u(a,`mt-1 block text-xs opacity-70`),i(a,h(`适合团队内部即时同步与讨论。`)),t})}),n,a);let o=t(`rue:component:anchor`);i(n,o),f(m(x,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let t=e(),n=s(`span`,t);i(t,n),u(n,`block`);let r=s(`span`,n);i(n,r),u(r,`font-medium`),i(r,h(`Webhook`));let a=s(`span`,n);return i(n,a),u(a,`mt-1 block text-xs opacity-70`),i(a,h(`方便接入自动化脚本和外部工作流。`)),t})}),n,o);let c=t(`rue:component:anchor`);return i(n,c),f(m(x,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l(()=>{let t=e(),n=s(`span`,t);i(t,n),u(n,`block`);let r=s(`span`,n);i(n,r),u(r,`font-medium`),i(r,h(`短信提醒`));let a=s(`span`,n);return i(n,a),u(a,`mt-1 block text-xs opacity-70`),i(a,h(`当前套餐暂未开放。`)),t})}),n,c),n});n(()=>{let e=m(x.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:d});r(()=>f(e,o,c))});let p=s(`div`,o);return i(o,p),u(p,`text-sm text-base-content/70`),i(p,h(`children 模式适合做卡片化布局或更复杂的说明区。`)),o}),A=()=>{let{tabBasic:a,tabFieldset:c,tabControlled:d,tabSizes:p,tabColors:v,tabDisabled:C,tabIndeterminate:D,tabGroup:O,tabCheckAll:A,tabGrid:ve,tabCustomColors:ye}=_(`useSetup:0:0:dup4`,()=>o(()=>({tabBasic:_(`ref:1:4`,()=>g(`preview`)),tabFieldset:_(`ref:1:5`,()=>g(`preview`)),tabControlled:_(`ref:1:6`,()=>g(`preview`)),tabSizes:_(`ref:1:7`,()=>g(`preview`)),tabColors:_(`ref:1:8`,()=>g(`preview`)),tabDisabled:_(`ref:1:9`,()=>g(`preview`)),tabIndeterminate:_(`ref:1:10`,()=>g(`preview`)),tabGroup:_(`ref:1:11`,()=>g(`preview`)),tabCheckAll:_(`ref:1:12`,()=>g(`preview`)),tabGrid:_(`ref:1:13`,()=>g(`preview`)),tabCustomColors:_(`ref:1:14`,()=>g(`preview`))})));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(S,{children:l(()=>{let o=e(),l=s(`div`,o);i(o,l),u(l,`max-w-none prose prose-sm md:prose-base`);let g=s(`h1`,l);i(l,g),i(g,h(`Checkbox 复选框`));let _=s(`p`,l);i(l,_),u(_,`mt-3 mb-3 text-sm`),i(_,h(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let S=s(`div`,l);i(l,S),u(S,`alert alert-soft mt-6 text-sm`);let j=s(`span`,S);i(S,j),i(j,h(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let M=s(`h2`,l);i(l,M),u(M,`mt-8`),i(M,h(`何时使用`));let N=s(`ul`,l);i(l,N);let P=s(`li`,N);i(N,P),i(P,h(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let F=s(`li`,N);i(N,F),i(F,h(`需要从一组并列选项中选择多个值时。`));let I=s(`li`,N);i(N,I),i(I,h(`需要配合“全选/部分选中”状态表达批量操作时。`));let L=t(`rue:component:anchor`);i(l,L),n(()=>{let e=m(w,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:a,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(fe,{})})}),code:ee});r(()=>f(e,l,L))});let R=t(`rue:component:anchor`);i(l,R),n(()=>{let e=m(w,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:c,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[b(`legend`,{className:`fieldset-legend`,children:`账号设置`}),b(x,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te});r(()=>f(e,l,R))});let z=t(`rue:component:anchor`);i(l,z),n(()=>{let e=m(w,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:d,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(pe,{})})}),code:ne});r(()=>f(e,l,z))});let B=t(`rue:component:anchor`);i(l,B),n(()=>{let e=m(w,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:p,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,size:`xs`}),b(x,{defaultChecked:!0,size:`sm`}),b(x,{defaultChecked:!0,size:`md`}),b(x,{defaultChecked:!0,size:`lg`}),b(x,{defaultChecked:!0,size:`xl`})]})})}),code:re});r(()=>f(e,l,B))});let V=t(`rue:component:anchor`);i(l,V),n(()=>{let e=m(w,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:v,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-wrap items-center gap-4`,children:[b(x,{defaultChecked:!0,color:`primary`}),b(x,{defaultChecked:!0,color:`secondary`}),b(x,{defaultChecked:!0,color:`accent`}),b(x,{defaultChecked:!0,color:`neutral`}),b(x,{defaultChecked:!0,color:`info`}),b(x,{defaultChecked:!0,color:`success`}),b(x,{defaultChecked:!0,color:`warning`}),b(x,{defaultChecked:!0,color:`error`})]})})}),code:ie});r(()=>f(e,l,V))});let H=t(`rue:component:anchor`);i(l,H),n(()=>{let e=m(w,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:C,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:y(`div`,{className:`flex flex-col gap-4`,children:[b(x,{disabled:!0,children:`只读选项`}),b(x,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae});r(()=>f(e,l,H))});let U=t(`rue:component:anchor`);i(l,U),n(()=>{let e=m(w,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:D,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(me,{})})}),code:oe});r(()=>f(e,l,U))});let W=t(`rue:component:anchor`);i(l,W),n(()=>{let e=m(w,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:O,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(he,{})})}),code:k});r(()=>f(e,l,W))});let G=t(`rue:component:anchor`);i(l,G),n(()=>{let e=m(w,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:A,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(ge,{})})}),code:se});r(()=>f(e,l,G))});let K=t(`rue:component:anchor`);i(l,K),n(()=>{let e=m(w,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ve,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(_e,{})})}),code:ce});r(()=>f(e,l,K))});let q=t(`rue:component:anchor`);i(l,q),n(()=>{let e=m(w,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:ye,preview:()=>b(`div`,{className:E,children:b(`div`,{className:`card-body`,children:b(x,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:le});r(()=>f(e,l,q))});let J=s(`h2`,l);i(l,J),u(J,`mt-12`),i(J,h(`API`));let Y=s(`p`,l);i(l,Y),u(Y,`text-sm text-base-content/70`),i(Y,h(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let X=s(`h3`,l);i(l,X),u(X,`mt-6`),i(X,h(`Checkbox`));let Z=t(`rue:component:anchor`);i(l,Z),n(()=>{let e=m(T,{rows:ue});r(()=>f(e,l,Z))});let Q=s(`h3`,l);i(l,Q),u(Q,`mt-8`),i(Q,h(`Checkbox.Group`));let $=t(`rue:component:anchor`);return i(l,$),n(()=>{let e=m(T,{rows:de});r(()=>f(e,l,$))}),o})}),g,_),g})};export{A as default};