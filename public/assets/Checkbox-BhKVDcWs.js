import{B as e,Bt as t,F as n,G as r,I as i,J as a,P as o,Qt as s,V as c,Vt as l,W as u,Wt as d,en as f,f as p,fn as m,g as h,gn as g,hn as _,in as v,m as y,mn as b,mt as x,nt as S,q as C,yn as w,z as T,zt as E}from"./rue-runtime-BWbIfNT8.js";import{t as D}from"./checkbox-CUyCFrI7.js";import{r as O}from"./SidebarPlaygroundDesign-DS4naa5t.js";import{t as k}from"./PreviewBlock-CEz3T383.js";var A=w(`<div><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),j=w(`<div><div class="card-body"><fieldset class="fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4"><legend class="fieldset-legend">账号设置</legend><!--rue:opaque-hole:0--></fieldset></div></div>`),M=w(`<div><div class="card-body"><div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--></div></div></div>`),ee=w(`<div><div class="card-body"><div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--></div></div></div>`),te=w(`<div><div class="card-body"><div class="flex flex-col gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div></div>`),N=w(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),P=w(`<div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">当前状态：<!--rue:text-hole:1--></span></div>`),F=w(`<div class="space-y-4"><div data-testid="checkbox-controlled-card" class="cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3"><div class="flex items-start gap-3"><!--rue:opaque-hole:0--><span class="min-w-0 flex-1 block"><span class="font-medium">开启每周摘要</span><span class="mt-1 block text-xs opacity-70">适合演示受控模式和更直接的布尔回调。</span></span></div></div><div class="flex flex-wrap gap-2 text-sm"><span class="badge badge-soft badge-primary">checked=<!--rue:text-hole:1--></span><span class="badge badge-soft">onCheckedChange</span></div></div>`),I=w(`<div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">组件会自动同步原生 input 的 indeterminate 状态。</span></div>`),L=w(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80">当前订阅：<!--rue:text-hole:1--></div></div>`),R=w(`<div class="space-y-4"><div class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">已选 <!--rue:text-hole:1-->/<!--rue:text-hole:2--></span></div><!--rue:opaque-hole:3--></div>`),z=w(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="text-sm text-base-content/70">children 模式适合做卡片化布局或更复杂的说明区。</div></div>`),ne=w(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Checkbox 复选框</h1><p class="mt-3 mb-3 text-sm">Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。</p><div class="alert alert-soft mt-6 text-sm"><span>Rue 在使用 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。</span></div><h2 class="mt-8">何时使用</h2><ul><li>需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。</li><li>需要从一组并列选项中选择多个值时。</li><li>需要配合“全选/部分选中”状态表达批量操作时。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><h2 class="mt-12">API</h2><p class="text-sm text-base-content/70">className 默认作用在原生 input 上；需要控制包裹层时，请使用 rootClassName 和 rootStyle。</p><h3 class="mt-6">Checkbox</h3><!--rue:opaque-hole:11--><h3 class="mt-8">Checkbox.Group</h3><!--rue:opaque-hole:12--></div>`),B=(t,n,o)=>{let s=u(T(t,`rows`));return i(r(e=>{let t=N().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,i=w(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return a(()=>{let e=s.get()||[];o=h(r,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,a;return y(e=>{let t=i().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=g(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=g(``);l.insertBefore(h,c),l.removeChild(c);let _=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=_;let v=g(``);d.insertBefore(v,u),d.removeChild(u);let y=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return v.textContent=y,a=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(h.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},[t,t]},(n,i)=>{e=n,t=i,r=n,a()},void 0,n)},!1,!0)}),C(()=>p(o)),[t,t]}),e=>f(()=>{s.set(e.rows)}),()=>e(t))},V=`card border border-base-200/80 bg-base-100 shadow-sm`,H=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与路线提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],U=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],re=`import { Checkbox } from '@rue-js/design'
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
</Checkbox>`,ie=`<fieldset className="fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4">
  <legend className="fieldset-legend">账号设置</legend>
  <Checkbox defaultChecked={true} rootClassName="items-center gap-2.5 [&>span:first-child]:pt-0" contentClassName="leading-none pt-1">
    记住这台设备
  </Checkbox>
</fieldset>`,ae=`import { Checkbox } from '@rue-js/design'
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
</div>`,oe=`<Checkbox defaultChecked={true} size="xs" />
<Checkbox defaultChecked={true} size="sm" />
<Checkbox defaultChecked={true} size="md" />
<Checkbox defaultChecked={true} size="lg" />
<Checkbox defaultChecked={true} size="xl" />`,se=`<Checkbox defaultChecked={true} color="primary" />
<Checkbox defaultChecked={true} color="secondary" />
<Checkbox defaultChecked={true} color="accent" />
<Checkbox defaultChecked={true} color="neutral" />
<Checkbox defaultChecked={true} color="info" />
<Checkbox defaultChecked={true} color="success" />
<Checkbox defaultChecked={true} color="warning" />
<Checkbox defaultChecked={true} color="error" />`,ce=`<Checkbox disabled={true}>只读选项</Checkbox>
<Checkbox disabled={true} checked={true}>已锁定配置</Checkbox>`,le=`<Checkbox
  indeterminate={true}
  rootClassName="items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none"
>
  部分成员已完成
</Checkbox>`,ue=`const value = ref(['design-system'])

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
/>`,de=`const checkedList = ref(['home'])

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
/>`,fe=`<Checkbox.Group className="grid gap-4 md:grid-cols-2" defaultValue={['email', 'slack']}>
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
</Checkbox.Group>`,pe=`<Checkbox
  defaultChecked={true}
  className="border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
`,me=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],he=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],ge=(e,n,i)=>{let a=x(!0);return S(()=>r(e=>{let n=P().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,u=n.childNodes[1].childNodes[1],d=u.parentNode,f=(e,t,n)=>{let r=()=>o(D,()=>({"data-testid":`checkbox-basic`,checked:a.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{a.value=e},children:(e,t,n)=>{let r=()=>c(e=>{let t=b();m(t,g(`接收产品更新`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},p=r.nextSibling;i.removeChild(r),t({parent:i,before:p},()=>f,()=>({}));let h=g(``);return d.insertBefore(h,u),d.removeChild(u),s(h,()=>a.value?`已选中`:`未选中`),[n,n]}))},_e=(e,n,i)=>{let a=x(!1);return S(()=>r(e=>{let n=F().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[0].childNodes[0].childNodes[0],c=i.parentNode,u=n.childNodes[1].childNodes[0].childNodes[1],d=u.parentNode;r.setAttribute(`data-testid`,`checkbox-controlled-card`),r.setAttribute(`class`,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let f=e=>{let t=e=>{e.target?.closest(`input`)||(a.value=!a.value)};typeof t==`function`&&t(e)};r.addEventListener(`click`,f),C(()=>r.removeEventListener(`click`,f));let p=(e,t,n)=>{let r=()=>o(D,()=>({checked:a.value,onCheckedChange:e=>{a.value=e}}));return e==null?r():l(e,n,r)},m=i.nextSibling;c.removeChild(i),t({parent:c,before:m},()=>p,()=>({}));let h=g(``);return d.insertBefore(h,u),d.removeChild(u),s(h,()=>a.value?`true`:`false`),[n,n]}))},ve=(e,n,i)=>r(e=>{let n=I().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(e,t,n)=>{let r=()=>o(D,()=>({indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:(e,t,n)=>{let r=()=>c(e=>{let t=b();m(t,g(`部分成员已完成`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},s=r.nextSibling;return i.removeChild(r),t({parent:i,before:s},()=>a,()=>({})),[n,n]}),ye=(e,n,i)=>{let a=x([`design-system`]);return S(()=>r(e=>{let n=L().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,s=n.childNodes[1].childNodes[1],u=s.parentNode,d=(e,t,n)=>{let r=()=>o(D.Group,()=>({value:a.value,onChange:e=>{a.value=e},className:`grid gap-3 sm:grid-cols-2`,options:H.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}));return e==null?r():l(e,n,r)},f=r.nextSibling;return i.removeChild(r),t({parent:i,before:f},()=>d,()=>({})),t({parent:u,before:s},()=>a.value.length?E(a.value.join(` / `)):(e,t,n)=>{let r=()=>c(e=>{let t=g(`未选择`);return[t,t]});return e==null?r():l(e,n,r)},()=>({})),[n,n]}))},be=(e,n,i)=>{let a=x([`home`]),s=U.map(e=>e.value);return S(()=>r(e=>{let n=R().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode,u=n.childNodes[0].childNodes[1].childNodes[1],d=u.parentNode,f=n.childNodes[0].childNodes[1].childNodes[3],p=f.parentNode,h=n.childNodes[1],_=h.parentNode,v=(e,t,n)=>{let r=()=>o(D,()=>({checked:a.value.length===s.length,indeterminate:a.value.length>0&&a.value.length<s.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,t)=>{a.value=t.checked?[...s]:[]},children:(e,t,n)=>{let r=()=>c(e=>{let t=b();m(t,g(`全选功能清单`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},y=r.nextSibling;i.removeChild(r),t({parent:i,before:y},()=>v,()=>({})),t({parent:d,before:u},()=>E(a.value.length),()=>({})),t({parent:p,before:f},()=>E(s.length),()=>({}));let x=(e,t,n)=>{let r=()=>o(D.Group,()=>({value:a.value,onChange:e=>{a.value=e},className:`grid gap-3 sm:grid-cols-3`,options:U.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}));return e==null?r():l(e,n,r)},S=h.nextSibling;return _.removeChild(h),t({parent:_,before:S},()=>x,()=>({})),[n,n]}))},xe=(e,i,a)=>r(e=>{let r=z().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,s=(e,t,r)=>{let i=()=>o(D.Group,()=>({defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:(e,t,r)=>{let i=()=>d(e=>{let t=b();n(t,D,()=>({value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:(e,t,n)=>{let r=()=>c(e=>{let t=b(),n=_(`span`,t);m(t,n),n.setAttribute(`class`,`block`);let r=_(`span`,n);m(n,r),r.setAttribute(`class`,`font-medium`),m(r,g(`邮件通知`));let i=_(`span`,n);m(n,i),i.setAttribute(`class`,`mt-1 block text-xs opacity-70`),m(i,g(`适合外部用户和日报汇总场景。`));let a=g(``),o=g(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(t,D,()=>({value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:(e,t,n)=>{let r=()=>c(e=>{let t=b(),n=_(`span`,t);m(t,n),n.setAttribute(`class`,`block`);let r=_(`span`,n);m(n,r),r.setAttribute(`class`,`font-medium`),m(r,g(`Slack 频道`));let i=_(`span`,n);m(n,i),i.setAttribute(`class`,`mt-1 block text-xs opacity-70`),m(i,g(`适合团队内部即时同步与讨论。`));let a=g(``),o=g(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(t,D,()=>({value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:(e,t,n)=>{let r=()=>c(e=>{let t=b(),n=_(`span`,t);m(t,n),n.setAttribute(`class`,`block`);let r=_(`span`,n);m(n,r),r.setAttribute(`class`,`font-medium`),m(r,g(`Webhook`));let i=_(`span`,n);m(n,i),i.setAttribute(`class`,`mt-1 block text-xs opacity-70`),m(i,g(`方便接入自动化脚本和外部工作流。`));let a=g(``),o=g(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}})),n(t,D,()=>({value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:(e,t,n)=>{let r=()=>c(e=>{let t=b(),n=_(`span`,t);m(t,n),n.setAttribute(`class`,`block`);let r=_(`span`,n);m(n,r),r.setAttribute(`class`,`font-medium`),m(r,g(`短信提醒`));let i=_(`span`,n);m(n,i),i.setAttribute(`class`,`mt-1 block text-xs opacity-70`),m(i,g(`当前套餐暂未开放。`));let a=g(``),o=g(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():l(e,r,i)}}));return e==null?i():l(e,r,i)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>s,()=>({})),[r,r]}),W=(e,n,i)=>{let a=x(`preview`),s=x(`preview`),u=x(`preview`),f=x(`preview`),p=x(`preview`),h=x(`preview`),_=x(`preview`),y=x(`preview`),C=x(`preview`),w=x(`preview`),T=x(`preview`);return S(()=>o(O,()=>({children:(e,n,i)=>{let x=()=>d(e=>{let n=b(),i=ne().content.cloneNode(!0),d=i.firstChild,x=d.childNodes[5],S=x.parentNode,E=d.childNodes[6],O=E.parentNode,N=d.childNodes[7],P=N.parentNode,F=d.childNodes[8],I=F.parentNode,L=d.childNodes[9],R=L.parentNode,z=d.childNodes[10],H=z.parentNode,U=d.childNodes[11],W=U.parentNode,G=d.childNodes[12],K=G.parentNode,q=d.childNodes[13],Se=q.parentNode,J=d.childNodes[14],Y=J.parentNode,X=d.childNodes[15],Z=X.parentNode,Q=d.childNodes[19],Ce=Q.parentNode,$=d.childNodes[21],we=$.parentNode;n.appendChild(i);let Te=(e,n,i)=>{let s=()=>o(k,()=>({title:`Checkbox`,summary:`展示基础用法，并支持 children 作为可点击说明区。`,tab:a,preview:()=>r(e=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,s;v(()=>{let e=String(V);Object.is(s,e)||(s=e,r.setAttribute(`class`,e))});let c=(e,t,n)=>{let r=()=>o(ge,()=>({}));return e==null?r():l(e,n,r)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>c,()=>({})),[n,n]}),code:re}));return e==null?s():l(e,i,s)},Ee=x.nextSibling;S.removeChild(x),t({parent:S,before:Ee},()=>Te,()=>({}));let De=(e,n,i)=>{let a=()=>o(k,()=>({title:`With fieldset and label`,summary:`展示基础 fieldset 场景，适合设置页或表单分区。`,tab:s,preview:()=>r(e=>{let n=j().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[1],a=i.parentNode,s;v(()=>{let e=String(V);Object.is(s,e)||(s=e,r.setAttribute(`class`,e))});let u=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:(e,t,n)=>{let r=()=>c(e=>{let t=b();m(t,g(`记住这台设备`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},d=i.nextSibling;return a.removeChild(i),t({parent:a,before:d},()=>u,()=>({})),[n,n]}),code:ie}));return e==null?a():l(e,i,a)},Oe=E.nextSibling;O.removeChild(E),t({parent:O,before:Oe},()=>De,()=>({}));let ke=(e,n,i)=>{let a=()=>o(k,()=>({title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:u,preview:()=>r(e=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,s;v(()=>{let e=String(V);Object.is(s,e)||(s=e,r.setAttribute(`class`,e))});let c=(e,t,n)=>{let r=()=>o(_e,()=>({}));return e==null?r():l(e,n,r)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>c,()=>({})),[n,n]}),code:ae}));return e==null?a():l(e,i,a)},Ae=N.nextSibling;P.removeChild(N),t({parent:P,before:Ae},()=>ke,()=>({}));let je=(e,n,i)=>{let a=()=>o(k,()=>({title:`Sizes`,summary:`使用 Rue 当前的尺寸体系。`,tab:f,preview:()=>r(e=>{let n=M().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,s=n.childNodes[0].childNodes[0].childNodes[1],c=s.parentNode,u=n.childNodes[0].childNodes[0].childNodes[2],d=u.parentNode,f=n.childNodes[0].childNodes[0].childNodes[3],p=f.parentNode,m=n.childNodes[0].childNodes[0].childNodes[4],h=m.parentNode,g;v(()=>{let e=String(V);Object.is(g,e)||(g=e,r.setAttribute(`class`,e))});let _=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`xs`}));return e==null?r():l(e,n,r)},y=i.nextSibling;a.removeChild(i),t({parent:a,before:y},()=>_,()=>({}));let b=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`sm`}));return e==null?r():l(e,n,r)},x=s.nextSibling;c.removeChild(s),t({parent:c,before:x},()=>b,()=>({}));let S=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`md`}));return e==null?r():l(e,n,r)},C=u.nextSibling;d.removeChild(u),t({parent:d,before:C},()=>S,()=>({}));let w=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`lg`}));return e==null?r():l(e,n,r)},T=f.nextSibling;p.removeChild(f),t({parent:p,before:T},()=>w,()=>({}));let E=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`xl`}));return e==null?r():l(e,n,r)},O=m.nextSibling;return h.removeChild(m),t({parent:h,before:O},()=>E,()=>({})),[n,n]}),code:oe}));return e==null?a():l(e,i,a)},Me=F.nextSibling;I.removeChild(F),t({parent:I,before:Me},()=>je,()=>({}));let Ne=(e,n,i)=>{let a=()=>o(k,()=>({title:`Colors`,summary:`颜色语义保持与当前 Rue 主题一致。`,tab:p,preview:()=>r(e=>{let n=ee().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,s=n.childNodes[0].childNodes[0].childNodes[1],c=s.parentNode,u=n.childNodes[0].childNodes[0].childNodes[2],d=u.parentNode,f=n.childNodes[0].childNodes[0].childNodes[3],p=f.parentNode,m=n.childNodes[0].childNodes[0].childNodes[4],h=m.parentNode,g=n.childNodes[0].childNodes[0].childNodes[5],_=g.parentNode,y=n.childNodes[0].childNodes[0].childNodes[6],b=y.parentNode,x=n.childNodes[0].childNodes[0].childNodes[7],S=x.parentNode,C;v(()=>{let e=String(V);Object.is(C,e)||(C=e,r.setAttribute(`class`,e))});let w=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`primary`}));return e==null?r():l(e,n,r)},T=i.nextSibling;a.removeChild(i),t({parent:a,before:T},()=>w,()=>({}));let E=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`secondary`}));return e==null?r():l(e,n,r)},O=s.nextSibling;c.removeChild(s),t({parent:c,before:O},()=>E,()=>({}));let k=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`accent`}));return e==null?r():l(e,n,r)},A=u.nextSibling;d.removeChild(u),t({parent:d,before:A},()=>k,()=>({}));let j=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`neutral`}));return e==null?r():l(e,n,r)},M=f.nextSibling;p.removeChild(f),t({parent:p,before:M},()=>j,()=>({}));let te=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`info`}));return e==null?r():l(e,n,r)},N=m.nextSibling;h.removeChild(m),t({parent:h,before:N},()=>te,()=>({}));let P=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`success`}));return e==null?r():l(e,n,r)},F=g.nextSibling;_.removeChild(g),t({parent:_,before:F},()=>P,()=>({}));let I=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`warning`}));return e==null?r():l(e,n,r)},L=y.nextSibling;b.removeChild(y),t({parent:b,before:L},()=>I,()=>({}));let R=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`error`}));return e==null?r():l(e,n,r)},z=x.nextSibling;return S.removeChild(x),t({parent:S,before:z},()=>R,()=>({})),[n,n]}),code:se}));return e==null?a():l(e,i,a)},Pe=L.nextSibling;R.removeChild(L),t({parent:R,before:Pe},()=>Ne,()=>({}));let Fe=(e,n,i)=>{let a=()=>o(k,()=>({title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:h,preview:()=>r(e=>{let n=te().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,s=n.childNodes[0].childNodes[0].childNodes[1],u=s.parentNode,d;v(()=>{let e=String(V);Object.is(d,e)||(d=e,r.setAttribute(`class`,e))});let f=(e,t,n)=>{let r=()=>o(D,()=>({disabled:!0,children:(e,t,n)=>{let r=()=>c(e=>{let t=b();m(t,g(`只读选项`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},p=i.nextSibling;a.removeChild(i),t({parent:a,before:p},()=>f,()=>({}));let h=(e,t,n)=>{let r=()=>o(D,()=>({disabled:!0,checked:!0,children:(e,t,n)=>{let r=()=>c(e=>{let t=b();m(t,g(`已锁定配置`));let n=g(``),r=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():l(e,n,r)}}));return e==null?r():l(e,n,r)},_=s.nextSibling;return u.removeChild(s),t({parent:u,before:_},()=>h,()=>({})),[n,n]}),code:ce}));return e==null?a():l(e,i,a)},Ie=z.nextSibling;H.removeChild(z),t({parent:H,before:Ie},()=>Fe,()=>({}));let Le=(e,n,i)=>{let a=()=>o(k,()=>({title:`Indeterminate`,summary:`展示基础半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:_,preview:()=>r(e=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,s;v(()=>{let e=String(V);Object.is(s,e)||(s=e,r.setAttribute(`class`,e))});let c=(e,t,n)=>{let r=()=>o(ve,()=>({}));return e==null?r():l(e,n,r)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>c,()=>({})),[n,n]}),code:le}));return e==null?a():l(e,i,a)},Re=U.nextSibling;W.removeChild(U),t({parent:W,before:Re},()=>Le,()=>({}));let ze=(e,n,i)=>{let a=()=>o(k,()=>({title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:y,preview:()=>r(e=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,s;v(()=>{let e=String(V);Object.is(s,e)||(s=e,r.setAttribute(`class`,e))});let c=(e,t,n)=>{let r=()=>o(ye,()=>({}));return e==null?r():l(e,n,r)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>c,()=>({})),[n,n]}),code:ue}));return e==null?a():l(e,i,a)},Be=G.nextSibling;K.removeChild(G),t({parent:K,before:Be},()=>ze,()=>({}));let Ve=(e,n,i)=>{let a=()=>o(k,()=>({title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:C,preview:()=>r(e=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,s;v(()=>{let e=String(V);Object.is(s,e)||(s=e,r.setAttribute(`class`,e))});let c=(e,t,n)=>{let r=()=>o(be,()=>({}));return e==null?r():l(e,n,r)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>c,()=>({})),[n,n]}),code:de}));return e==null?a():l(e,i,a)},He=q.nextSibling;Se.removeChild(q),t({parent:Se,before:He},()=>Ve,()=>({}));let Ue=(e,n,i)=>{let a=()=>o(k,()=>({title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:w,preview:()=>r(e=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,s;v(()=>{let e=String(V);Object.is(s,e)||(s=e,r.setAttribute(`class`,e))});let c=(e,t,n)=>{let r=()=>o(xe,()=>({}));return e==null?r():l(e,n,r)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>c,()=>({})),[n,n]}),code:fe}));return e==null?a():l(e,i,a)},We=J.nextSibling;Y.removeChild(J),t({parent:Y,before:We},()=>Ue,()=>({}));let Ge=(e,n,i)=>{let a=()=>o(k,()=>({title:`Checkbox with custom colors`,summary:`展示基础自定义颜色能力，便于做品牌化演示。`,tab:T,preview:()=>r(e=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,s;v(()=>{let e=String(V);Object.is(s,e)||(s=e,r.setAttribute(`class`,e))});let c=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`}));return e==null?r():l(e,n,r)},u=i.nextSibling;return a.removeChild(i),t({parent:a,before:u},()=>c,()=>({})),[n,n]}),code:pe}));return e==null?a():l(e,i,a)},Ke=X.nextSibling;Z.removeChild(X),t({parent:Z,before:Ke},()=>Ge,()=>({}));let qe=(e,t,n)=>{let r=()=>o(B,()=>({rows:me}));return e==null?r():l(e,n,r)},Je=Q.nextSibling;Ce.removeChild(Q),t({parent:Ce,before:Je},()=>qe,()=>({}));let Ye=(e,t,n)=>{let r=()=>o(B,()=>({rows:he}));return e==null?r():l(e,n,r)},Xe=$.nextSibling;we.removeChild($),t({parent:we,before:Xe},()=>Ye,()=>({}));let Ze=g(``),Qe=g(``);return n.insertBefore(Ze,n.firstChild),n.appendChild(Qe),[n.firstChild,n.lastChild]});return e==null?x():l(e,i,x)}})))};export{W as default};