import{Bt as e,C as t,Dn as n,Et as r,K as i,Kt as a,L as o,Mt as s,S as c,W as l,X as u,Y as d,_n as f,_t as p,bn as m,fn as h,gn as g,hn as _,ht as v,it as y,kn as b,mn as x,nt as S,q as C,rt as w,wn as T,x as E,z as D}from"./rue-runtime-CwEGJ854.js";import{t as O}from"./checkbox-DPE5R2Rt.js";import{r as k}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as A}from"./PreviewBlock-Daz-jANt.js";var j=f(`<div><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),ee=f(`<div><div class="card-body"><fieldset class="fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4"><legend class="fieldset-legend">账号设置</legend><!--rue:opaque-hole:0--></fieldset></div></div>`),te=f(`<div><div class="card-body"><div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--></div></div></div>`),ne=f(`<div><div class="card-body"><div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--></div></div></div>`),re=f(`<div><div class="card-body"><div class="flex flex-col gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div></div>`),M=f(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),ie=f(`<div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">当前状态：<!--rue:text-hole:1--></span></div>`),N=f(`<div class="space-y-4"><div data-testid="checkbox-controlled-card" class="cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3"><div class="flex items-start gap-3"><!--rue:opaque-hole:0--><span class="min-w-0 flex-1 block"><span class="font-medium">开启每周摘要</span><span class="mt-1 block text-xs opacity-70">适合演示受控模式和更直接的布尔回调。</span></span></div></div><div class="flex flex-wrap gap-2 text-sm"><span class="badge badge-soft badge-primary">checked=<!--rue:text-hole:1--></span><span class="badge badge-soft">onCheckedChange</span></div></div>`),P=f(`<div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">组件会自动同步原生 input 的 indeterminate 状态。</span></div>`),F=f(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80">当前订阅：<!--rue:text-hole:1--></div></div>`),I=f(`<div class="space-y-4"><div class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">已选 <!--rue:text-hole:1-->/<!--rue:text-hole:2--></span></div><!--rue:opaque-hole:3--></div>`),L=f(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="text-sm text-base-content/70">children 模式适合做卡片化布局或更复杂的说明区。</div></div>`),ae=f(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Checkbox 复选框</h1><p class="mt-3 mb-3 text-sm">Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。</p><div class="alert alert-soft mt-6 text-sm"><span>Rue 在使用 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。</span></div><h2 class="mt-8">何时使用</h2><ul><li>需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。</li><li>需要从一组并列选项中选择多个值时。</li><li>需要配合“全选/部分选中”状态表达批量操作时。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><h2 class="mt-12">API</h2><p class="text-sm text-base-content/70">className 默认作用在原生 input 上；需要控制包裹层时，请使用 rootClassName 和 rootStyle。</p><h3 class="mt-6">Checkbox</h3><!--rue:opaque-hole:11--><h3 class="mt-8">Checkbox.Group</h3><!--rue:opaque-hole:12--></div>`),R=A,z=e=>{let n=l(e.rows);return C(r(Object.assign(e=>{let i=M().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return T(()=>{let e=n.get()||[];s=t(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let n=l(e),i=l(t);return c((e,t,i)=>E(e,i,()=>r(Object.assign(e=>{let t=_(`tr`,e),r=_(`td`,t);h(t,r);let i=_(`code`,r);h(r,i);let a=g(``);h(i,a),m(a,()=>n.get().prop);let o=_(`td`,t);h(t,o);let s=g(``);h(o,s),m(s,()=>n.get().description);let c=_(`td`,t);h(t,c);let l=_(`code`,c);h(c,l);let u=g(``);h(l,u),m(u,()=>n.get().type);let d=_(`td`,t);h(t,d);let f=_(`code`,d);h(d,f);let p=g(``);return h(f,p),m(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{n.set(e.rows)}),()=>e)},B=`card border border-base-200/80 bg-base-100 shadow-sm`,V=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与路线提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],H=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],oe=`import { Checkbox } from '@rue-js/design'

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
</Checkbox>`,se=`<fieldset className="fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4">
  <legend className="fieldset-legend">账号设置</legend>
  <Checkbox defaultChecked={true} rootClassName="items-center gap-2.5 [&>span:first-child]:pt-0" contentClassName="leading-none pt-1">
    记住这台设备
  </Checkbox>
</fieldset>`,ce=`import { Checkbox } from '@rue-js/design'

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
</div>`,le=`<Checkbox defaultChecked={true} size="xs" />
<Checkbox defaultChecked={true} size="sm" />
<Checkbox defaultChecked={true} size="md" />
<Checkbox defaultChecked={true} size="lg" />
<Checkbox defaultChecked={true} size="xl" />`,ue=`<Checkbox defaultChecked={true} color="primary" />
<Checkbox defaultChecked={true} color="secondary" />
<Checkbox defaultChecked={true} color="accent" />
<Checkbox defaultChecked={true} color="neutral" />
<Checkbox defaultChecked={true} color="info" />
<Checkbox defaultChecked={true} color="success" />
<Checkbox defaultChecked={true} color="warning" />
<Checkbox defaultChecked={true} color="error" />`,de=`<Checkbox disabled={true}>只读选项</Checkbox>
<Checkbox disabled={true} checked={true}>已锁定配置</Checkbox>`,fe=`<Checkbox
  indeterminate={true}
  rootClassName="items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none"
>
  部分成员已完成
</Checkbox>`,pe=`const value = ref(['design-system'])

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
/>`,me=`const checkedList = ref(['home'])

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
/>`,he=`<Checkbox.Group className="grid gap-4 md:grid-cols-2" defaultValue={['email', 'slack']}>
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
</Checkbox.Group>`,ge=`<Checkbox
  defaultChecked={true}
  className="border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
`,_e=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],ve=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],ye=()=>{let t=e(!0);return s(()=>C(r(Object.assign(e=>{let n=ie().content.cloneNode(!0).firstChild,a=n.childNodes[0],o=a.parentNode,s=n.childNodes[1].childNodes[1],c=s.parentNode,l=x(o);i(l,O,()=>({"data-testid":`checkbox-basic`,checked:t.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{t.value=e},children:(e,t,n)=>E(e,n,()=>r(Object.assign(e=>{let t=S();return h(t,g(`接收产品更新`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(l,a);let u=g(``);return c.insertBefore(u,s),c.removeChild(s),m(u,()=>t.value?`已选中`:`未选中`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{})))},be=()=>{let t=e(!1);return s(()=>C(r(Object.assign(e=>{let r=N().content.cloneNode(!0).firstChild,a=r.childNodes[0],o=r.childNodes[0].childNodes[0].childNodes[0],s=o.parentNode,c=r.childNodes[1].childNodes[0].childNodes[1],l=c.parentNode;a.setAttribute(`data-testid`,`checkbox-controlled-card`),a.className=`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`;let u=e=>{let n=e=>{e.target?.closest(`input`)||(t.value=!t.value)};typeof n==`function`&&n(e)};a.addEventListener(`click`,u),n(()=>a.removeEventListener(`click`,u));let d=x(s);i(d,O,()=>({checked:t.value,onCheckedChange:e=>{t.value=e}})),s.insertBefore(d,o);let f=g(``);return l.insertBefore(f,c),l.removeChild(c),m(f,()=>t.value?`true`:`false`),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{})))},xe=()=>C(r(Object.assign(e=>{let t=P().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=n.parentNode,o=x(a);return i(o,O,()=>({indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:(e,t,n)=>E(e,n,()=>r(Object.assign(e=>{let t=S();return h(t,g(`部分成员已完成`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(o,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{})),Se=()=>{let t=e([`design-system`]);return s(()=>C(v(()=>{let e=S(),n=F().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[1],s=o.parentNode;return e.appendChild(n),T(()=>{let e=p(O.Group,()=>({value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-2`,options:V.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}));b(()=>d(e,a,i))}),T(()=>{let e=t.value.length?t.value.join(` / `):`未选择`;b(()=>d(e,s,o))}),e},!0),e=>D(()=>{})))},Ce=()=>{let t=e([`home`]),n=H.map(e=>e.value);return s(()=>C(v(()=>{let e=S(),a=I().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0].childNodes[0],c=s.parentNode,l=o.childNodes[0].childNodes[1].childNodes[1],u=l.parentNode,f=o.childNodes[0].childNodes[1].childNodes[3],m=f.parentNode,_=o.childNodes[1],v=_.parentNode;e.appendChild(a);let y=x(c);return i(y,O,()=>({checked:t.value.length===n.length,indeterminate:t.value.length>0&&t.value.length<n.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,r)=>{t.value=r.checked?[...n]:[]},children:(e,t,n)=>E(e,n,()=>r(Object.assign(e=>{let t=S();return h(t,g(`全选功能清单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(y,s),T(()=>{let e=t.value.length;b(()=>d(e,u,l))}),T(()=>{let e=n.length;b(()=>d(e,m,f))}),T(()=>{let e=p(O.Group,()=>({value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-3`,options:H.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}));b(()=>d(e,v,_))}),e},!0),e=>D(()=>{})))},we=()=>C(v(()=>{let e=S(),t=L().content.cloneNode(!0),n=t.firstChild.childNodes[0],r=n.parentNode;return e.appendChild(t),T(()=>{let e=v(()=>{let e=S(),t=w(`span`,e);u(e,t),o(t,`block`);let n=w(`span`,t);u(t,n),o(n,`font-medium`),u(n,y(`邮件通知`));let r=w(`span`,t);return u(t,r),o(r,`mt-1 block text-xs opacity-70`),u(r,y(`适合外部用户和日报汇总场景。`)),e}),t=p(O,()=>({value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:e})),i=v(()=>{let e=S(),t=w(`span`,e);u(e,t),o(t,`block`);let n=w(`span`,t);u(t,n),o(n,`font-medium`),u(n,y(`Slack 频道`));let r=w(`span`,t);return u(t,r),o(r,`mt-1 block text-xs opacity-70`),u(r,y(`适合团队内部即时同步与讨论。`)),e}),a=p(O,()=>({value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:i})),s=v(()=>{let e=S(),t=w(`span`,e);u(e,t),o(t,`block`);let n=w(`span`,t);u(t,n),o(n,`font-medium`),u(n,y(`Webhook`));let r=w(`span`,t);return u(t,r),o(r,`mt-1 block text-xs opacity-70`),u(r,y(`方便接入自动化脚本和外部工作流。`)),e}),c=p(O,()=>({value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:s})),l=v(()=>{let e=S(),t=w(`span`,e);u(e,t),o(t,`block`);let n=w(`span`,t);u(t,n),o(n,`font-medium`),u(n,y(`短信提醒`));let r=w(`span`,t);return u(t,r),o(r,`mt-1 block text-xs opacity-70`),u(r,y(`当前套餐暂未开放。`)),e}),f=p(O,()=>({value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:l})),m=p(O.Group,()=>({defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:[t,a,c,f]}));b(()=>d(m,r,n))}),e},!0),e=>D(()=>{})),U=()=>{let t=e(`preview`),n=e(`preview`),o=e(`preview`),c=e(`preview`),l=e(`preview`),u=e(`preview`),f=e(`preview`),m=e(`preview`),_=e(`preview`),y=e(`preview`),w=e(`preview`);return s(()=>C((()=>{let e=v(()=>{let e=S(),s=ae().content.cloneNode(!0),v=s.firstChild,C=v.childNodes[5],D=C.parentNode,k=v.childNodes[6],A=k.parentNode,M=v.childNodes[7],ie=M.parentNode,N=v.childNodes[8],P=N.parentNode,F=v.childNodes[9],I=F.parentNode,L=v.childNodes[10],V=L.parentNode,H=v.childNodes[11],U=H.parentNode,W=v.childNodes[12],Te=W.parentNode,G=v.childNodes[13],Ee=G.parentNode,K=v.childNodes[14],De=K.parentNode,q=v.childNodes[15],Oe=q.parentNode,J=v.childNodes[19],Y=J.parentNode,X=v.childNodes[21],Z=X.parentNode;e.appendChild(s),T(()=>{let e=p(R,()=>({title:`Checkbox`,summary:`展示基础用法，并支持 children 作为可点击说明区。`,tab:t,preview:a(()=>r(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],a=r.parentNode,o;T(()=>{let e=String(B);Object.is(o,e)||(o=e,n.className=e)});let s=x(a);return i(s,ye,()=>({})),a.insertBefore(s,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:oe}));b(()=>d(e,D,C))}),T(()=>{let e=p(R,()=>({title:`With fieldset and label`,summary:`展示基础 fieldset 场景，适合设置页或表单分区。`,tab:n,preview:a(()=>r(Object.assign(e=>{let t=ee().content.cloneNode(!0).firstChild,n=t,a=t.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,s;T(()=>{let e=String(B);Object.is(s,e)||(s=e,n.className=e)});let c=x(o);return i(c,O,()=>({defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:(e,t,n)=>E(e,n,()=>r(Object.assign(e=>{let t=S();return h(t,g(`记住这台设备`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(c,a),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:se}));b(()=>d(e,A,k))}),T(()=>{let e=p(R,()=>({title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:o,preview:a(()=>r(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],a=r.parentNode,o;T(()=>{let e=String(B);Object.is(o,e)||(o=e,n.className=e)});let s=x(a);return i(s,be,()=>({})),a.insertBefore(s,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:ce}));b(()=>d(e,ie,M))}),T(()=>{let e=p(R,()=>({title:`Sizes`,summary:`使用 Rue 当前的尺寸体系。`,tab:c,preview:a(()=>r(Object.assign(e=>{let t=te().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0].childNodes[0],a=r.parentNode,o=t.childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,c=t.childNodes[0].childNodes[0].childNodes[2],l=c.parentNode,u=t.childNodes[0].childNodes[0].childNodes[3],d=u.parentNode,f=t.childNodes[0].childNodes[0].childNodes[4],p=f.parentNode,m;T(()=>{let e=String(B);Object.is(m,e)||(m=e,n.className=e)});let h=x(a);i(h,O,()=>({defaultChecked:!0,size:`xs`})),a.insertBefore(h,r);let g=x(s);i(g,O,()=>({defaultChecked:!0,size:`sm`})),s.insertBefore(g,o);let _=x(l);i(_,O,()=>({defaultChecked:!0,size:`md`})),l.insertBefore(_,c);let v=x(d);i(v,O,()=>({defaultChecked:!0,size:`lg`})),d.insertBefore(v,u);let y=x(p);return i(y,O,()=>({defaultChecked:!0,size:`xl`})),p.insertBefore(y,f),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:le}));b(()=>d(e,P,N))}),T(()=>{let e=p(R,()=>({title:`Colors`,summary:`颜色语义保持与当前 Rue 主题一致。`,tab:l,preview:a(()=>r(Object.assign(e=>{let t=ne().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0].childNodes[0],a=r.parentNode,o=t.childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,c=t.childNodes[0].childNodes[0].childNodes[2],l=c.parentNode,u=t.childNodes[0].childNodes[0].childNodes[3],d=u.parentNode,f=t.childNodes[0].childNodes[0].childNodes[4],p=f.parentNode,m=t.childNodes[0].childNodes[0].childNodes[5],h=m.parentNode,g=t.childNodes[0].childNodes[0].childNodes[6],_=g.parentNode,v=t.childNodes[0].childNodes[0].childNodes[7],y=v.parentNode,b;T(()=>{let e=String(B);Object.is(b,e)||(b=e,n.className=e)});let S=x(a);i(S,O,()=>({defaultChecked:!0,color:`primary`})),a.insertBefore(S,r);let C=x(s);i(C,O,()=>({defaultChecked:!0,color:`secondary`})),s.insertBefore(C,o);let w=x(l);i(w,O,()=>({defaultChecked:!0,color:`accent`})),l.insertBefore(w,c);let E=x(d);i(E,O,()=>({defaultChecked:!0,color:`neutral`})),d.insertBefore(E,u);let D=x(p);i(D,O,()=>({defaultChecked:!0,color:`info`})),p.insertBefore(D,f);let k=x(h);i(k,O,()=>({defaultChecked:!0,color:`success`})),h.insertBefore(k,m);let A=x(_);i(A,O,()=>({defaultChecked:!0,color:`warning`})),_.insertBefore(A,g);let j=x(y);return i(j,O,()=>({defaultChecked:!0,color:`error`})),y.insertBefore(j,v),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:ue}));b(()=>d(e,I,F))}),T(()=>{let e=p(R,()=>({title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:u,preview:a(()=>r(Object.assign(e=>{let t=re().content.cloneNode(!0).firstChild,n=t,a=t.childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=t.childNodes[0].childNodes[0].childNodes[1],c=s.parentNode,l;T(()=>{let e=String(B);Object.is(l,e)||(l=e,n.className=e)});let u=x(o);i(u,O,()=>({disabled:!0,children:(e,t,n)=>E(e,n,()=>r(Object.assign(e=>{let t=S();return h(t,g(`只读选项`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(u,a);let d=x(c);return i(d,O,()=>({disabled:!0,checked:!0,children:(e,t,n)=>E(e,n,()=>r(Object.assign(e=>{let t=S();return h(t,g(`已锁定配置`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(d,s),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:de}));b(()=>d(e,V,L))}),T(()=>{let e=p(R,()=>({title:`Indeterminate`,summary:`展示基础半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:f,preview:a(()=>r(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],a=r.parentNode,o;T(()=>{let e=String(B);Object.is(o,e)||(o=e,n.className=e)});let s=x(a);return i(s,xe,()=>({})),a.insertBefore(s,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:fe}));b(()=>d(e,U,H))}),T(()=>{let e=p(R,()=>({title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:m,preview:a(()=>r(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],a=r.parentNode,o;T(()=>{let e=String(B);Object.is(o,e)||(o=e,n.className=e)});let s=x(a);return i(s,Se,()=>({})),a.insertBefore(s,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:pe}));b(()=>d(e,Te,W))}),T(()=>{let e=p(R,()=>({title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:_,preview:a(()=>r(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],a=r.parentNode,o;T(()=>{let e=String(B);Object.is(o,e)||(o=e,n.className=e)});let s=x(a);return i(s,Ce,()=>({})),a.insertBefore(s,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:me}));b(()=>d(e,Ee,G))}),T(()=>{let e=p(R,()=>({title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:y,preview:a(()=>r(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],a=r.parentNode,o;T(()=>{let e=String(B);Object.is(o,e)||(o=e,n.className=e)});let s=x(a);return i(s,we,()=>({})),a.insertBefore(s,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:he}));b(()=>d(e,De,K))}),T(()=>{let e=p(R,()=>({title:`Checkbox with custom colors`,summary:`展示基础自定义颜色能力，便于做品牌化演示。`,tab:w,preview:a(()=>r(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],a=r.parentNode,o;T(()=>{let e=String(B);Object.is(o,e)||(o=e,n.className=e)});let s=x(a);return i(s,O,()=>({defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})),a.insertBefore(s,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:ge}));b(()=>d(e,Oe,q))});let Q=x(Y);i(Q,z,()=>({rows:_e})),Y.insertBefore(Q,J);let $=x(Z);return i($,z,()=>({rows:ve})),Z.insertBefore($,X),e});return p(k,()=>({children:e}))})(),e=>D(()=>{})))};export{U as default};