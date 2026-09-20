import{Bt as e,H as t,N as n,P as r,Qt as i,U as a,V as o,Vt as s,Wt as c,Y as l,_t as u,en as d,f,fn as p,g as m,gn as h,gt as g,hn as _,in as v,j as y,m as b,mn as x,st as S,vt as C,yn as w,yt as T,zt as E}from"./rue-runtime-Cv6BZekS.js";import{t as D}from"./checkbox-DvBPSewf.js";import{r as O}from"./SidebarPlaygroundDesign-CoDFHXQl.js";import{t as k}from"./PreviewBlock-CeK_jzYH.js";var A=w(`<div><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),j=w(`<div><div class="card-body"><fieldset class="fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4"><legend class="fieldset-legend">账号设置</legend><!--rue:opaque-hole:0--></fieldset></div></div>`),M=w(`<div><div class="card-body"><div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--></div></div></div>`),ee=w(`<div><div class="card-body"><div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--></div></div></div>`),N=w(`<div><div class="card-body"><div class="flex flex-col gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div></div>`),P=w(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),F=w(`<div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">当前状态：<!--rue:text-hole:1--></span></div>`),I=w(`<div class="space-y-4"><div data-testid="checkbox-controlled-card" class="cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3"><div class="flex items-start gap-3"><!--rue:opaque-hole:0--><span class="min-w-0 flex-1 block"><span class="font-medium">开启每周摘要</span><span class="mt-1 block text-xs opacity-70">适合演示受控模式和更直接的布尔回调。</span></span></div></div><div class="flex flex-wrap gap-2 text-sm"><span class="badge badge-soft badge-primary">checked=<!--rue:text-hole:1--></span><span class="badge badge-soft">onCheckedChange</span></div></div>`),L=w(`<div class="flex flex-wrap items-center gap-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">组件会自动同步原生 input 的 indeterminate 状态。</span></div>`),R=w(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80">当前订阅：<!--rue:text-hole:1--></div></div>`),z=w(`<div class="space-y-4"><div class="flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3"><!--rue:opaque-hole:0--><span class="text-sm text-base-content/70">已选 <!--rue:text-hole:1-->/<!--rue:text-hole:2--></span></div><!--rue:opaque-hole:3--></div>`),B=w(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="text-sm text-base-content/70">children 模式适合做卡片化布局或更复杂的说明区。</div></div>`),te=w(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Checkbox 复选框</h1><p class="mt-3 mb-3 text-sm">Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。</p><div class="alert alert-soft mt-6 text-sm"><span>Rue 在使用 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。</span></div><h2 class="mt-8">何时使用</h2><ul><li>需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。</li><li>需要从一组并列选项中选择多个值时。</li><li>需要配合“全选/部分选中”状态表达批量操作时。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><h2 class="mt-12">API</h2><p class="text-sm text-base-content/70">className 默认作用在原生 input 上；需要控制包裹层时，请使用 rootClassName 和 rootStyle。</p><h3 class="mt-6">Checkbox</h3><!--rue:opaque-hole:11--><h3 class="mt-8">Checkbox.Group</h3><!--rue:opaque-hole:12--></div>`),V=(e,t,i)=>{let o=C(g(e,`rows`));return a(y(e=>{let t=P().content.cloneNode(!0).firstChild,i=t.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,s=w(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),c=[];return r(()=>{let e=o.get()||[];c=m(a,i,c,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return b(e=>{let t=s().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,o=t.childNodes[1].childNodes[0];o.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=h(``);a.insertBefore(f,n),a.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);o.textContent=m;let g=h(``);l.insertBefore(g,c),l.removeChild(c);let _=r.type==null||typeof r.type==`boolean`?``:String(r.type);g.textContent=_;let v=h(``);d.insertBefore(v,u),d.removeChild(u);let y=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return v.textContent=y,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(o.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),n(()=>f(c)),[t,t]}),e=>d(()=>{o.set(e.rows)}),()=>u(e))},H=`card border border-base-200/80 bg-base-100 shadow-sm`,U=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与路线提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],W=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ne=`import { Checkbox } from '@rue-js/design'
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
</Checkbox>`,re=`<fieldset className="fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4">
  <legend className="fieldset-legend">账号设置</legend>
  <Checkbox defaultChecked={true} rootClassName="items-center gap-2.5 [&>span:first-child]:pt-0" contentClassName="leading-none pt-1">
    记住这台设备
  </Checkbox>
</fieldset>`,ie=`import { Checkbox } from '@rue-js/design'
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
</div>`,ae=`<Checkbox defaultChecked={true} size="xs" />
<Checkbox defaultChecked={true} size="sm" />
<Checkbox defaultChecked={true} size="md" />
<Checkbox defaultChecked={true} size="lg" />
<Checkbox defaultChecked={true} size="xl" />`,oe=`<Checkbox defaultChecked={true} color="primary" />
<Checkbox defaultChecked={true} color="secondary" />
<Checkbox defaultChecked={true} color="accent" />
<Checkbox defaultChecked={true} color="neutral" />
<Checkbox defaultChecked={true} color="info" />
<Checkbox defaultChecked={true} color="success" />
<Checkbox defaultChecked={true} color="warning" />
<Checkbox defaultChecked={true} color="error" />`,se=`<Checkbox disabled={true}>只读选项</Checkbox>
<Checkbox disabled={true} checked={true}>已锁定配置</Checkbox>`,ce=`<Checkbox
  indeterminate={true}
  rootClassName="items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none"
>
  部分成员已完成
</Checkbox>`,le=`const value = ref(['design-system'])

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
/>`,ue=`const checkedList = ref(['home'])

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
/>`,de=`<Checkbox.Group className="grid gap-4 md:grid-cols-2" defaultValue={['email', 'slack']}>
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
</Checkbox.Group>`,fe=`<Checkbox
  defaultChecked={true}
  className="border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
`,pe=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],me=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],he=(t,n,r)=>{let a=S(!0);return l(()=>y(t=>{let n=F().content.cloneNode(!0).firstChild,r=n.childNodes[0],c=r.parentNode,l=n.childNodes[1].childNodes[1],u=l.parentNode,d=(e,t,n)=>{let r=()=>o(D,()=>({"data-testid":`checkbox-basic`,checked:a.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:e=>{a.value=e},children:(e,t,n)=>{let r=()=>T(e=>{let t=x();p(t,h(`接收产品更新`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},f=r.nextSibling;c.removeChild(r),e({parent:c,before:f},()=>d,()=>({}));let m=h(``);return u.insertBefore(m,l),u.removeChild(l),i(m,()=>a.value?`已选中`:`未选中`),[n,n]}))},ge=(t,r,a)=>{let c=S(!1);return l(()=>y(t=>{let r=I().content.cloneNode(!0).firstChild,a=r.childNodes[0],l=r.childNodes[0].childNodes[0].childNodes[0],u=l.parentNode,d=r.childNodes[1].childNodes[0].childNodes[1],f=d.parentNode;a.setAttribute(`data-testid`,`checkbox-controlled-card`),a.setAttribute(`class`,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let p=e=>{let t=e=>{e.target?.closest(`input`)||(c.value=!c.value)};typeof t==`function`&&t(e)};a.addEventListener(`click`,p),n(()=>a.removeEventListener(`click`,p));let m=(e,t,n)=>{let r=()=>o(D,()=>({checked:c.value,onCheckedChange:e=>{c.value=e}}));return e==null?r():s(e,n,r)},g=l.nextSibling;u.removeChild(l),e({parent:u,before:g},()=>m,()=>({}));let _=h(``);return f.insertBefore(_,d),f.removeChild(d),i(_,()=>c.value?`true`:`false`),[r,r]}))},_e=(t,n,r)=>y(t=>{let n=L().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=(e,t,n)=>{let r=()=>o(D,()=>({indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:(e,t,n)=>{let r=()=>T(e=>{let t=x();p(t,h(`部分成员已完成`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},c=r.nextSibling;return i.removeChild(r),e({parent:i,before:c},()=>a,()=>({})),[n,n]}),ve=(t,n,r)=>{let i=S([`design-system`]);return l(()=>y(t=>{let n=R().content.cloneNode(!0).firstChild,r=n.childNodes[0],a=r.parentNode,c=n.childNodes[1].childNodes[1],l=c.parentNode,u=(e,t,n)=>{let r=()=>o(D.Group,()=>({value:i.value,onChange:e=>{i.value=e},className:`grid gap-3 sm:grid-cols-2`,options:U.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}));return e==null?r():s(e,n,r)},d=r.nextSibling;return a.removeChild(r),e({parent:a,before:d},()=>u,()=>({})),e({parent:l,before:c},()=>i.value.length?E(i.value.join(` / `)):(e,t,n)=>{let r=()=>T(e=>{let t=h(`未选择`);return[t,t]});return e==null?r():s(e,n,r)},()=>({})),[n,n]}))},ye=(t,n,r)=>{let i=S([`home`]),a=W.map(e=>e.value);return l(()=>y(t=>{let n=z().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],c=r.parentNode,l=n.childNodes[0].childNodes[1].childNodes[1],u=l.parentNode,d=n.childNodes[0].childNodes[1].childNodes[3],f=d.parentNode,m=n.childNodes[1],g=m.parentNode,_=(e,t,n)=>{let r=()=>o(D,()=>({checked:i.value.length===a.length,indeterminate:i.value.length>0&&i.value.length<a.length,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(e,t)=>{i.value=t.checked?[...a]:[]},children:(e,t,n)=>{let r=()=>T(e=>{let t=x();p(t,h(`全选功能清单`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},v=r.nextSibling;c.removeChild(r),e({parent:c,before:v},()=>_,()=>({})),e({parent:u,before:l},()=>E(i.value.length),()=>({})),e({parent:f,before:d},()=>E(a.length),()=>({}));let y=(e,t,n)=>{let r=()=>o(D.Group,()=>({value:i.value,onChange:e=>{i.value=e},className:`grid gap-3 sm:grid-cols-3`,options:W.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}));return e==null?r():s(e,n,r)},b=m.nextSibling;return g.removeChild(m),e({parent:g,before:b},()=>y,()=>({})),[n,n]}))},be=(n,r,i)=>y(n=>{let r=B().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,l=(e,n,r)=>{let i=()=>o(D.Group,()=>({defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:(e,n,r)=>{let i=()=>c(e=>{let n=x();t(n,D,()=>({value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:(e,t,n)=>{let r=()=>T(e=>{let t=x(),n=_(`span`,t);p(t,n),n.setAttribute(`class`,`block`);let r=_(`span`,n);p(n,r),r.setAttribute(`class`,`font-medium`),p(r,h(`邮件通知`));let i=_(`span`,n);p(n,i),i.setAttribute(`class`,`mt-1 block text-xs opacity-70`),p(i,h(`适合外部用户和日报汇总场景。`));let a=h(``),o=h(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})),t(n,D,()=>({value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:(e,t,n)=>{let r=()=>T(e=>{let t=x(),n=_(`span`,t);p(t,n),n.setAttribute(`class`,`block`);let r=_(`span`,n);p(n,r),r.setAttribute(`class`,`font-medium`),p(r,h(`Slack 频道`));let i=_(`span`,n);p(n,i),i.setAttribute(`class`,`mt-1 block text-xs opacity-70`),p(i,h(`适合团队内部即时同步与讨论。`));let a=h(``),o=h(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})),t(n,D,()=>({value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:(e,t,n)=>{let r=()=>T(e=>{let t=x(),n=_(`span`,t);p(t,n),n.setAttribute(`class`,`block`);let r=_(`span`,n);p(n,r),r.setAttribute(`class`,`font-medium`),p(r,h(`Webhook`));let i=_(`span`,n);p(n,i),i.setAttribute(`class`,`mt-1 block text-xs opacity-70`),p(i,h(`方便接入自动化脚本和外部工作流。`));let a=h(``),o=h(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})),t(n,D,()=>({value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:(e,t,n)=>{let r=()=>T(e=>{let t=x(),n=_(`span`,t);p(t,n),n.setAttribute(`class`,`block`);let r=_(`span`,n);p(n,r),r.setAttribute(`class`,`font-medium`),p(r,h(`短信提醒`));let i=_(`span`,n);p(n,i),i.setAttribute(`class`,`mt-1 block text-xs opacity-70`),p(i,h(`当前套餐暂未开放。`));let a=h(``),o=h(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));let r=h(``),i=h(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}}));return e==null?i():s(e,r,i)},u=i.nextSibling;return a.removeChild(i),e({parent:a,before:u},()=>l,()=>({})),[r,r]}),G=(t,n,r)=>{let i=S(`preview`),a=S(`preview`),u=S(`preview`),d=S(`preview`),f=S(`preview`),m=S(`preview`),g=S(`preview`),_=S(`preview`),b=S(`preview`),C=S(`preview`),w=S(`preview`);return l(()=>o(O,()=>({children:(t,n,r)=>{let l=()=>c(t=>{let n=x(),r=te().content.cloneNode(!0),c=r.firstChild,l=c.childNodes[5],S=l.parentNode,E=c.childNodes[6],O=E.parentNode,P=c.childNodes[7],F=P.parentNode,I=c.childNodes[8],L=I.parentNode,R=c.childNodes[9],z=R.parentNode,B=c.childNodes[10],U=B.parentNode,W=c.childNodes[11],G=W.parentNode,K=c.childNodes[12],q=K.parentNode,J=c.childNodes[13],Y=J.parentNode,X=c.childNodes[14],xe=X.parentNode,Z=c.childNodes[15],Se=Z.parentNode,Q=c.childNodes[19],Ce=Q.parentNode,$=c.childNodes[21],we=$.parentNode;n.appendChild(r);let Te=(t,n,r)=>{let a=()=>o(k,()=>({title:`Checkbox`,summary:`展示基础用法，并支持 children 作为可点击说明区。`,tab:i,preview:()=>y(t=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,c;v(()=>{let e=String(H);Object.is(c,e)||(c=e,r.setAttribute(`class`,e))});let l=(e,t,n)=>{let r=()=>o(he,()=>({}));return e==null?r():s(e,n,r)},u=i.nextSibling;return a.removeChild(i),e({parent:a,before:u},()=>l,()=>({})),[n,n]}),code:ne}));return t==null?a():s(t,r,a)},Ee=l.nextSibling;S.removeChild(l),e({parent:S,before:Ee},()=>Te,()=>({}));let De=(t,n,r)=>{let i=()=>o(k,()=>({title:`With fieldset and label`,summary:`展示基础 fieldset 场景，适合设置页或表单分区。`,tab:a,preview:()=>y(t=>{let n=j().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[1],a=i.parentNode,c;v(()=>{let e=String(H);Object.is(c,e)||(c=e,r.setAttribute(`class`,e))});let l=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:(e,t,n)=>{let r=()=>T(e=>{let t=x();p(t,h(`记住这台设备`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},u=i.nextSibling;return a.removeChild(i),e({parent:a,before:u},()=>l,()=>({})),[n,n]}),code:re}));return t==null?i():s(t,r,i)},Oe=E.nextSibling;O.removeChild(E),e({parent:O,before:Oe},()=>De,()=>({}));let ke=(t,n,r)=>{let i=()=>o(k,()=>({title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:u,preview:()=>y(t=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,c;v(()=>{let e=String(H);Object.is(c,e)||(c=e,r.setAttribute(`class`,e))});let l=(e,t,n)=>{let r=()=>o(ge,()=>({}));return e==null?r():s(e,n,r)},u=i.nextSibling;return a.removeChild(i),e({parent:a,before:u},()=>l,()=>({})),[n,n]}),code:ie}));return t==null?i():s(t,r,i)},Ae=P.nextSibling;F.removeChild(P),e({parent:F,before:Ae},()=>ke,()=>({}));let je=(t,n,r)=>{let i=()=>o(k,()=>({title:`Sizes`,summary:`使用 Rue 当前的尺寸体系。`,tab:d,preview:()=>y(t=>{let n=M().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,c=n.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,u=n.childNodes[0].childNodes[0].childNodes[2],d=u.parentNode,f=n.childNodes[0].childNodes[0].childNodes[3],p=f.parentNode,m=n.childNodes[0].childNodes[0].childNodes[4],h=m.parentNode,g;v(()=>{let e=String(H);Object.is(g,e)||(g=e,r.setAttribute(`class`,e))});let _=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`xs`}));return e==null?r():s(e,n,r)},y=i.nextSibling;a.removeChild(i),e({parent:a,before:y},()=>_,()=>({}));let b=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`sm`}));return e==null?r():s(e,n,r)},x=c.nextSibling;l.removeChild(c),e({parent:l,before:x},()=>b,()=>({}));let S=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`md`}));return e==null?r():s(e,n,r)},C=u.nextSibling;d.removeChild(u),e({parent:d,before:C},()=>S,()=>({}));let w=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`lg`}));return e==null?r():s(e,n,r)},T=f.nextSibling;p.removeChild(f),e({parent:p,before:T},()=>w,()=>({}));let E=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,size:`xl`}));return e==null?r():s(e,n,r)},O=m.nextSibling;return h.removeChild(m),e({parent:h,before:O},()=>E,()=>({})),[n,n]}),code:ae}));return t==null?i():s(t,r,i)},Me=I.nextSibling;L.removeChild(I),e({parent:L,before:Me},()=>je,()=>({}));let Ne=(t,n,r)=>{let i=()=>o(k,()=>({title:`Colors`,summary:`颜色语义保持与当前 Rue 主题一致。`,tab:f,preview:()=>y(t=>{let n=ee().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,c=n.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,u=n.childNodes[0].childNodes[0].childNodes[2],d=u.parentNode,f=n.childNodes[0].childNodes[0].childNodes[3],p=f.parentNode,m=n.childNodes[0].childNodes[0].childNodes[4],h=m.parentNode,g=n.childNodes[0].childNodes[0].childNodes[5],_=g.parentNode,y=n.childNodes[0].childNodes[0].childNodes[6],b=y.parentNode,x=n.childNodes[0].childNodes[0].childNodes[7],S=x.parentNode,C;v(()=>{let e=String(H);Object.is(C,e)||(C=e,r.setAttribute(`class`,e))});let w=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`primary`}));return e==null?r():s(e,n,r)},T=i.nextSibling;a.removeChild(i),e({parent:a,before:T},()=>w,()=>({}));let E=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`secondary`}));return e==null?r():s(e,n,r)},O=c.nextSibling;l.removeChild(c),e({parent:l,before:O},()=>E,()=>({}));let k=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`accent`}));return e==null?r():s(e,n,r)},A=u.nextSibling;d.removeChild(u),e({parent:d,before:A},()=>k,()=>({}));let j=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`neutral`}));return e==null?r():s(e,n,r)},M=f.nextSibling;p.removeChild(f),e({parent:p,before:M},()=>j,()=>({}));let N=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`info`}));return e==null?r():s(e,n,r)},P=m.nextSibling;h.removeChild(m),e({parent:h,before:P},()=>N,()=>({}));let F=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`success`}));return e==null?r():s(e,n,r)},I=g.nextSibling;_.removeChild(g),e({parent:_,before:I},()=>F,()=>({}));let L=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`warning`}));return e==null?r():s(e,n,r)},R=y.nextSibling;b.removeChild(y),e({parent:b,before:R},()=>L,()=>({}));let z=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,color:`error`}));return e==null?r():s(e,n,r)},B=x.nextSibling;return S.removeChild(x),e({parent:S,before:B},()=>z,()=>({})),[n,n]}),code:oe}));return t==null?i():s(t,r,i)},Pe=R.nextSibling;z.removeChild(R),e({parent:z,before:Pe},()=>Ne,()=>({}));let Fe=(t,n,r)=>{let i=()=>o(k,()=>({title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:m,preview:()=>y(t=>{let n=N().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,c=n.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,u;v(()=>{let e=String(H);Object.is(u,e)||(u=e,r.setAttribute(`class`,e))});let d=(e,t,n)=>{let r=()=>o(D,()=>({disabled:!0,children:(e,t,n)=>{let r=()=>T(e=>{let t=x();p(t,h(`只读选项`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},f=i.nextSibling;a.removeChild(i),e({parent:a,before:f},()=>d,()=>({}));let m=(e,t,n)=>{let r=()=>o(D,()=>({disabled:!0,checked:!0,children:(e,t,n)=>{let r=()=>T(e=>{let t=x();p(t,h(`已锁定配置`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));return e==null?r():s(e,n,r)},g=c.nextSibling;return l.removeChild(c),e({parent:l,before:g},()=>m,()=>({})),[n,n]}),code:se}));return t==null?i():s(t,r,i)},Ie=B.nextSibling;U.removeChild(B),e({parent:U,before:Ie},()=>Fe,()=>({}));let Le=(t,n,r)=>{let i=()=>o(k,()=>({title:`Indeterminate`,summary:`展示基础半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:g,preview:()=>y(t=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,c;v(()=>{let e=String(H);Object.is(c,e)||(c=e,r.setAttribute(`class`,e))});let l=(e,t,n)=>{let r=()=>o(_e,()=>({}));return e==null?r():s(e,n,r)},u=i.nextSibling;return a.removeChild(i),e({parent:a,before:u},()=>l,()=>({})),[n,n]}),code:ce}));return t==null?i():s(t,r,i)},Re=W.nextSibling;G.removeChild(W),e({parent:G,before:Re},()=>Le,()=>({}));let ze=(t,n,r)=>{let i=()=>o(k,()=>({title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:_,preview:()=>y(t=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,c;v(()=>{let e=String(H);Object.is(c,e)||(c=e,r.setAttribute(`class`,e))});let l=(e,t,n)=>{let r=()=>o(ve,()=>({}));return e==null?r():s(e,n,r)},u=i.nextSibling;return a.removeChild(i),e({parent:a,before:u},()=>l,()=>({})),[n,n]}),code:le}));return t==null?i():s(t,r,i)},Be=K.nextSibling;q.removeChild(K),e({parent:q,before:Be},()=>ze,()=>({}));let Ve=(t,n,r)=>{let i=()=>o(k,()=>({title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:b,preview:()=>y(t=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,c;v(()=>{let e=String(H);Object.is(c,e)||(c=e,r.setAttribute(`class`,e))});let l=(e,t,n)=>{let r=()=>o(ye,()=>({}));return e==null?r():s(e,n,r)},u=i.nextSibling;return a.removeChild(i),e({parent:a,before:u},()=>l,()=>({})),[n,n]}),code:ue}));return t==null?i():s(t,r,i)},He=J.nextSibling;Y.removeChild(J),e({parent:Y,before:He},()=>Ve,()=>({}));let Ue=(t,n,r)=>{let i=()=>o(k,()=>({title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:C,preview:()=>y(t=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,c;v(()=>{let e=String(H);Object.is(c,e)||(c=e,r.setAttribute(`class`,e))});let l=(e,t,n)=>{let r=()=>o(be,()=>({}));return e==null?r():s(e,n,r)},u=i.nextSibling;return a.removeChild(i),e({parent:a,before:u},()=>l,()=>({})),[n,n]}),code:de}));return t==null?i():s(t,r,i)},We=X.nextSibling;xe.removeChild(X),e({parent:xe,before:We},()=>Ue,()=>({}));let Ge=(t,n,r)=>{let i=()=>o(k,()=>({title:`Checkbox with custom colors`,summary:`展示基础自定义颜色能力，便于做品牌化演示。`,tab:w,preview:()=>y(t=>{let n=A().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0],a=i.parentNode,c;v(()=>{let e=String(H);Object.is(c,e)||(c=e,r.setAttribute(`class`,e))});let l=(e,t,n)=>{let r=()=>o(D,()=>({defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`}));return e==null?r():s(e,n,r)},u=i.nextSibling;return a.removeChild(i),e({parent:a,before:u},()=>l,()=>({})),[n,n]}),code:fe}));return t==null?i():s(t,r,i)},Ke=Z.nextSibling;Se.removeChild(Z),e({parent:Se,before:Ke},()=>Ge,()=>({}));let qe=(e,t,n)=>{let r=()=>o(V,()=>({rows:pe}));return e==null?r():s(e,n,r)},Je=Q.nextSibling;Ce.removeChild(Q),e({parent:Ce,before:Je},()=>qe,()=>({}));let Ye=(e,t,n)=>{let r=()=>o(V,()=>({rows:me}));return e==null?r():s(e,n,r)},Xe=$.nextSibling;we.removeChild($),e({parent:we,before:Xe},()=>Ye,()=>({}));let Ze=h(``),Qe=h(``);return n.insertBefore(Ze,n.firstChild),n.appendChild(Qe),[n.firstChild,n.lastChild]});return t==null?l():s(t,r,l)}})))};export{G as default};