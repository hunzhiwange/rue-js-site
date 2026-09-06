import{At as e,Dn as t,E as n,Mt as r,Q as i,Vt as a,_n as o,_t as s,at as c,b as l,ct as u,dt as d,et as f,hn as p,kn as m,on as h,pn as g,qt as _,st as v,tn as y,ut as b,vn as x,vt as S,w as C,wn as w,x as T,xn as E,yt as D}from"./rue-runtime-HIMg8Lz8.js";import{t as O}from"./checkbox-B-kgk-aS.js";import{r as k}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as A}from"./PreviewBlock-Dc0KnPUP.js";var j=x(`<div><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),ee=x(`<div><div class="card-body"><fieldset class="fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4"><legend class="fieldset-legend">账号设置</legend><!--rue:opaque-hole:0--></fieldset></div></div>`),te=x(`<div><div class="card-body"><div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--></div></div></div>`),ne=x(`<div><div class="card-body"><div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--></div></div></div>`),re=x(`<div><div class="card-body"><div class="flex flex-col gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div></div>`),M=x(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),ie=x(`<div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">当前状态：<!--rue:text-hole:1--></span></div>`),N=x(`<div class="space-y-4"><div data-testid="checkbox-controlled-card" class="cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3"><div class="flex items-start gap-3"><!--rue:opaque-hole:0--><span class="min-w-0 flex-1 block"><span class="font-medium">开启每周摘要</span><span class="mt-1 block text-xs opacity-70">适合演示受控模式和更直接的布尔回调。</span></span></div></div><div class="flex flex-wrap gap-2 text-sm"><span class="badge badge-soft badge-primary">checked=<!--rue:text-hole:1--></span><span class="badge badge-soft">onCheckedChange</span></div></div>`),P=x(`<div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">组件会自动同步原生 input 的 indeterminate 状态。</span></div>`),F=x(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80">当前订阅：<!--rue:text-hole:1--></div></div>`),I=x(`<div class="space-y-4"><div class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">已选 <!--rue:text-hole:1-->/<!--rue:text-hole:2--></span></div><!--rue:opaque-hole:3--></div>`),L=x(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="text-sm text-base-content/70">children 模式适合做卡片化布局或更复杂的说明区。</div></div>`),ae=x(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Checkbox 复选框</h1><p class="mt-3 mb-3 text-sm">Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。</p><div class="alert alert-soft mt-6 text-sm"><span>Rue 在使用 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。</span></div><h2 class="mt-8">何时使用</h2><ul><li>需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。</li><li>需要从一组并列选项中选择多个值时。</li><li>需要配合“全选/部分选中”状态表达批量操作时。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><h2 class="mt-12">API</h2><p class="text-sm text-base-content/70">className 默认作用在原生 input 上；需要控制包裹层时，请使用 rootClassName 和 rootStyle。</p><h3 class="mt-6">Checkbox</h3><!--rue:opaque-hole:11--><h3 class="mt-8">Checkbox.Group</h3><!--rue:opaque-hole:12--></div>`),R=A,z=e=>{let n=c(e.rows);return u(a(Object.assign(e=>{let r=M().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,s=x(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),c=[];return w(()=>{let e=n.get()||[];c=C(a,i,c,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return T(e=>{let t=s().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,c=t.childNodes[1].childNodes[0];c.data=``,c.parentNode;let l=t.childNodes[2].childNodes[0].childNodes[0],u=l.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=o(``);a.insertBefore(p,n),a.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}let g=o(``);u.insertBefore(g,l),u.removeChild(l);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=o(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>l(c)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{n.set(e.rows)}),()=>e)},B=`card border border-base-200/80 bg-base-100 shadow-sm`,V=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与路线提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],H=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],oe=`import { Checkbox } from '@rue-js/design'

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
`,_e=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],ve=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],ye=()=>{let e=y(!0);return _(()=>u(a(Object.assign(t=>{let r=ie().content.cloneNode(!0).firstChild,i=r.childNodes[0],c=i.parentNode,l=r.childNodes[1].childNodes[1],u=l.parentNode,d=p(c);v(d,O,()=>({"data-testid":`checkbox-basic`,checked:e.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:t=>{e.value=t},children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return g(t,o(`接收产品更新`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(d,i);let f=o(``);return u.insertBefore(f,l),u.removeChild(l),E(f,()=>e.value?`已选中`:`未选中`),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{})))},be=()=>{let e=y(!1);return _(()=>u(a(Object.assign(n=>{let r=N().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=r.childNodes[0].childNodes[0].childNodes[0],s=a.parentNode,c=r.childNodes[1].childNodes[0].childNodes[1],l=c.parentNode;i.setAttribute(`data-testid`,`checkbox-controlled-card`),i.className=`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`;let u=t=>{let n=t=>{t.target?.closest(`input`)||(e.value=!e.value)};typeof n==`function`&&n(t)};i.addEventListener(`click`,u),t(()=>i.removeEventListener(`click`,u));let d=p(s);v(d,O,()=>({checked:e.value,onCheckedChange:t=>{e.value=t}})),s.insertBefore(d,a);let f=o(``);return l.insertBefore(f,c),l.removeChild(c),E(f,()=>e.value?`true`:`false`),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{})))},xe=()=>u(a(Object.assign(e=>{let t=P().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=r.parentNode,c=p(i);return v(c,O,()=>({indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return g(t,o(`部分成员已完成`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(c,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>f(()=>{})),Se=()=>{let t=y([`design-system`]);return _(()=>u(e(()=>{let e=s(),n=F().content.cloneNode(!0),i=n.firstChild,a=i.childNodes[0],o=a.parentNode,c=i.childNodes[1].childNodes[1],l=c.parentNode;return e.appendChild(n),w(()=>{let e=r(O.Group,()=>({value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-2`,options:V.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}));m(()=>b(e,o,a))}),w(()=>{let e=t.value.length?t.value.join(` / `):`未选择`;m(()=>b(e,l,c))}),e},!0),e=>f(()=>{})))},Ce=()=>{let t=y([`home`]),i=H.map(e=>e.value);return _(()=>u(e(()=>{let e=s(),c=I().content.cloneNode(!0),l=c.firstChild,u=l.childNodes[0].childNodes[0],d=u.parentNode,f=l.childNodes[0].childNodes[1].childNodes[1],h=f.parentNode,_=l.childNodes[0].childNodes[1].childNodes[3],y=_.parentNode,x=l.childNodes[1],S=x.parentNode;e.appendChild(c);let C=p(d);return v(C,O,()=>({checked:t.value.length===i.length,indeterminate:t.value.length>0&&t.value.length<i.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,n)=>{t.value=n.checked?[...i]:[]},children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return g(t,o(`全选功能清单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(C,u),w(()=>{let e=t.value.length;m(()=>b(e,h,f))}),w(()=>{let e=i.length;m(()=>b(e,y,_))}),w(()=>{let e=r(O.Group,()=>({value:t.value,onChange:e=>{t.value=e},className:`grid gap-3 sm:grid-cols-3`,options:H.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}));m(()=>b(e,S,x))}),e},!0),e=>f(()=>{})))},we=()=>u(e(()=>{let t=s(),n=L().content.cloneNode(!0),a=n.firstChild.childNodes[0],o=a.parentNode;return t.appendChild(n),w(()=>{let t=e(()=>{let e=s(),t=S(`span`,e);d(e,t),i(t,`block`);let n=S(`span`,t);d(t,n),i(n,`font-medium`),d(n,D(`邮件通知`));let r=S(`span`,t);return d(t,r),i(r,`mt-1 block text-xs opacity-70`),d(r,D(`适合外部用户和日报汇总场景。`)),e}),n=r(O,()=>({value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:t})),c=e(()=>{let e=s(),t=S(`span`,e);d(e,t),i(t,`block`);let n=S(`span`,t);d(t,n),i(n,`font-medium`),d(n,D(`Slack 频道`));let r=S(`span`,t);return d(t,r),i(r,`mt-1 block text-xs opacity-70`),d(r,D(`适合团队内部即时同步与讨论。`)),e}),l=r(O,()=>({value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:c})),u=e(()=>{let e=s(),t=S(`span`,e);d(e,t),i(t,`block`);let n=S(`span`,t);d(t,n),i(n,`font-medium`),d(n,D(`Webhook`));let r=S(`span`,t);return d(t,r),i(r,`mt-1 block text-xs opacity-70`),d(r,D(`方便接入自动化脚本和外部工作流。`)),e}),f=r(O,()=>({value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:u})),p=e(()=>{let e=s(),t=S(`span`,e);d(e,t),i(t,`block`);let n=S(`span`,t);d(t,n),i(n,`font-medium`),d(n,D(`短信提醒`));let r=S(`span`,t);return d(t,r),i(r,`mt-1 block text-xs opacity-70`),d(r,D(`当前套餐暂未开放。`)),e}),h=r(O,()=>({value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:p})),g=r(O.Group,()=>({defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:[n,l,f,h]}));m(()=>b(g,o,a))}),t},!0),e=>f(()=>{})),U=()=>{let t=y(`preview`),i=y(`preview`),c=y(`preview`),l=y(`preview`),d=y(`preview`),x=y(`preview`),S=y(`preview`),C=y(`preview`),T=y(`preview`),E=y(`preview`),D=y(`preview`);return _(()=>u((()=>{let u=e(()=>{let e=s(),u=ae().content.cloneNode(!0),f=u.firstChild,_=f.childNodes[5],y=_.parentNode,k=f.childNodes[6],A=k.parentNode,M=f.childNodes[7],ie=M.parentNode,N=f.childNodes[8],P=N.parentNode,F=f.childNodes[9],I=F.parentNode,L=f.childNodes[10],V=L.parentNode,H=f.childNodes[11],U=H.parentNode,W=f.childNodes[12],Te=W.parentNode,G=f.childNodes[13],Ee=G.parentNode,K=f.childNodes[14],De=K.parentNode,q=f.childNodes[15],Oe=q.parentNode,J=f.childNodes[19],Y=J.parentNode,X=f.childNodes[21],Z=X.parentNode;e.appendChild(u),w(()=>{let e=r(R,()=>({title:`Checkbox`,summary:`展示基础用法，并支持 children 作为可点击说明区。`,tab:t,preview:h(()=>a(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],i=r.parentNode,a;w(()=>{let e=String(B);Object.is(a,e)||(a=e,n.className=e)});let o=p(i);return v(o,ye,()=>({})),i.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:oe}));m(()=>b(e,y,_))}),w(()=>{let e=r(R,()=>({title:`With fieldset and label`,summary:`展示基础 fieldset 场景，适合设置页或表单分区。`,tab:i,preview:h(()=>a(Object.assign(e=>{let t=ee().content.cloneNode(!0).firstChild,r=t,i=t.childNodes[0].childNodes[0].childNodes[1],c=i.parentNode,l;w(()=>{let e=String(B);Object.is(l,e)||(l=e,r.className=e)});let u=p(c);return v(u,O,()=>({defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return g(t,o(`记住这台设备`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(u,i),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:se}));m(()=>b(e,A,k))}),w(()=>{let e=r(R,()=>({title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:c,preview:h(()=>a(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],i=r.parentNode,a;w(()=>{let e=String(B);Object.is(a,e)||(a=e,n.className=e)});let o=p(i);return v(o,be,()=>({})),i.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:ce}));m(()=>b(e,ie,M))}),w(()=>{let e=r(R,()=>({title:`Sizes`,summary:`使用 Rue 当前的尺寸体系。`,tab:l,preview:h(()=>a(Object.assign(e=>{let t=te().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0].childNodes[0],i=r.parentNode,a=t.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,s=t.childNodes[0].childNodes[0].childNodes[2],c=s.parentNode,l=t.childNodes[0].childNodes[0].childNodes[3],u=l.parentNode,d=t.childNodes[0].childNodes[0].childNodes[4],f=d.parentNode,m;w(()=>{let e=String(B);Object.is(m,e)||(m=e,n.className=e)});let h=p(i);v(h,O,()=>({defaultChecked:!0,size:`xs`})),i.insertBefore(h,r);let g=p(o);v(g,O,()=>({defaultChecked:!0,size:`sm`})),o.insertBefore(g,a);let _=p(c);v(_,O,()=>({defaultChecked:!0,size:`md`})),c.insertBefore(_,s);let y=p(u);v(y,O,()=>({defaultChecked:!0,size:`lg`})),u.insertBefore(y,l);let b=p(f);return v(b,O,()=>({defaultChecked:!0,size:`xl`})),f.insertBefore(b,d),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:le}));m(()=>b(e,P,N))}),w(()=>{let e=r(R,()=>({title:`Colors`,summary:`颜色语义保持与当前 Rue 主题一致。`,tab:d,preview:h(()=>a(Object.assign(e=>{let t=ne().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0].childNodes[0],i=r.parentNode,a=t.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,s=t.childNodes[0].childNodes[0].childNodes[2],c=s.parentNode,l=t.childNodes[0].childNodes[0].childNodes[3],u=l.parentNode,d=t.childNodes[0].childNodes[0].childNodes[4],f=d.parentNode,m=t.childNodes[0].childNodes[0].childNodes[5],h=m.parentNode,g=t.childNodes[0].childNodes[0].childNodes[6],_=g.parentNode,y=t.childNodes[0].childNodes[0].childNodes[7],b=y.parentNode,x;w(()=>{let e=String(B);Object.is(x,e)||(x=e,n.className=e)});let S=p(i);v(S,O,()=>({defaultChecked:!0,color:`primary`})),i.insertBefore(S,r);let C=p(o);v(C,O,()=>({defaultChecked:!0,color:`secondary`})),o.insertBefore(C,a);let T=p(c);v(T,O,()=>({defaultChecked:!0,color:`accent`})),c.insertBefore(T,s);let E=p(u);v(E,O,()=>({defaultChecked:!0,color:`neutral`})),u.insertBefore(E,l);let D=p(f);v(D,O,()=>({defaultChecked:!0,color:`info`})),f.insertBefore(D,d);let k=p(h);v(k,O,()=>({defaultChecked:!0,color:`success`})),h.insertBefore(k,m);let A=p(_);v(A,O,()=>({defaultChecked:!0,color:`warning`})),_.insertBefore(A,g);let j=p(b);return v(j,O,()=>({defaultChecked:!0,color:`error`})),b.insertBefore(j,y),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:ue}));m(()=>b(e,I,F))}),w(()=>{let e=r(R,()=>({title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:x,preview:h(()=>a(Object.assign(e=>{let t=re().content.cloneNode(!0).firstChild,r=t,i=t.childNodes[0].childNodes[0].childNodes[0],c=i.parentNode,l=t.childNodes[0].childNodes[0].childNodes[1],u=l.parentNode,d;w(()=>{let e=String(B);Object.is(d,e)||(d=e,r.className=e)});let f=p(c);v(f,O,()=>({disabled:!0,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return g(t,o(`只读选项`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(f,i);let m=p(u);return v(m,O,()=>({disabled:!0,checked:!0,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s();return g(t,o(`已锁定配置`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(m,l),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:de}));m(()=>b(e,V,L))}),w(()=>{let e=r(R,()=>({title:`Indeterminate`,summary:`展示基础半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:S,preview:h(()=>a(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],i=r.parentNode,a;w(()=>{let e=String(B);Object.is(a,e)||(a=e,n.className=e)});let o=p(i);return v(o,xe,()=>({})),i.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:fe}));m(()=>b(e,U,H))}),w(()=>{let e=r(R,()=>({title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:C,preview:h(()=>a(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],i=r.parentNode,a;w(()=>{let e=String(B);Object.is(a,e)||(a=e,n.className=e)});let o=p(i);return v(o,Se,()=>({})),i.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:pe}));m(()=>b(e,Te,W))}),w(()=>{let e=r(R,()=>({title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:T,preview:h(()=>a(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],i=r.parentNode,a;w(()=>{let e=String(B);Object.is(a,e)||(a=e,n.className=e)});let o=p(i);return v(o,Ce,()=>({})),i.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:me}));m(()=>b(e,Ee,G))}),w(()=>{let e=r(R,()=>({title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:E,preview:h(()=>a(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],i=r.parentNode,a;w(()=>{let e=String(B);Object.is(a,e)||(a=e,n.className=e)});let o=p(i);return v(o,we,()=>({})),i.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:he}));m(()=>b(e,De,K))}),w(()=>{let e=r(R,()=>({title:`Checkbox with custom colors`,summary:`展示基础自定义颜色能力，便于做品牌化演示。`,tab:D,preview:h(()=>a(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0].childNodes[0],i=r.parentNode,a;w(()=>{let e=String(B);Object.is(a,e)||(a=e,n.className=e)});let o=p(i);return v(o,O,()=>({defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})),i.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:ge}));m(()=>b(e,Oe,q))});let Q=p(Y);v(Q,z,()=>({rows:_e})),Y.insertBefore(Q,J);let $=p(Z);return v($,z,()=>({rows:ve})),Z.insertBefore($,X),e});return r(k,()=>({children:u}))})(),e=>f(()=>{})))};export{U as default};