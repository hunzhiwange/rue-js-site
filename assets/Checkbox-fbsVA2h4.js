import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_ as l,_t as u,bt as d,c as f,gt as p,j as m,lt as h,pt as g,t as _,u as v,x as y,yt as b}from"./vapor-runtime-D3a-68js.js";import{a as x,n as S}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as C,t as w}from"./src-BfQKH6_d.js";import{n as T}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as E}from"./PreviewBlock-DZ28sFI7.js";var ee=0,D=(e,t)=>t?`${e} ${t}`:e,O=(e,t,n)=>{let r=`checkbox`;return e&&(r+=` checkbox-${e}`),t&&(r+=` checkbox-${t}`),n&&(r+=` ${n}`),r},k=(e,t)=>{let n=`inline-flex items-start gap-3 text-sm leading-5 text-base-content`;return e?n+=` cursor-not-allowed opacity-60`:n+=` cursor-pointer`,t&&(n+=` ${t}`),n},A=e=>D(`min-w-0 flex-1`,e),j=e=>Array.isArray(e)?e.flatMap(e=>j(e)):e==null||typeof e==`boolean`?[]:[e],M=e=>{switch(typeof e){case`number`:return`number:${e}`;case`boolean`:return`boolean:${e?`true`:`false`}`;default:return`string:${e}`}},N=e=>{if(!e)return;let t=e.indexOf(`:`);if(t===-1)return e;let n=e.slice(0,t),r=e.slice(t+1);return n===`number`?Number(r):n===`boolean`?r===`true`:r},P=e=>{let t=[];return(e??[]).forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},F=e=>(e??[]).map(e=>typeof e==`string`||typeof e==`number`||typeof e==`boolean`?{label:String(e),value:e}:e),I=({color:e,size:t,checked:n,defaultChecked:r,disabled:i,indeterminate:a,value:o,className:s,rootClassName:c,contentClassName:u,style:d,rootStyle:f,children:m,onChange:h,onCheckedChange:g,..._})=>{let v=p(),x=p();x.current||=`rue-checkbox-content-${ee++}`;let S=m==null?void 0:_[`aria-labelledby`]??x.current,T=()=>{v.current&&(v.current.indeterminate=!!a)},E=e=>{let t=e.target?.checked===!0;typeof n==`boolean`&&v.current&&(v.current.checked=n),a&&T(),h&&h(e,{checked:t,indeterminate:!!a,value:o}),g&&g(t,e)},D=(e,t)=>{typeof n!=`boolean`&&v.current&&(v.current.checked=t),a&&T(),h&&h(e,{checked:t,indeterminate:!!a,value:o}),g&&g(t,e)},N=e=>{let t=e.target;if(!v.current||i||t===v.current)return;e.preventDefault();let r=v.current,a=!r.checked;if(n===void 0&&!h&&!g&&r.closest(`[data-rue-checkbox-group="true"]`)){r.checked=a,r.dispatchEvent(new Event(`change`,{bubbles:!0}));return}D(e,a)};y(()=>{T()}),b(()=>a,()=>{T()},{immediate:!0}),b(()=>n,()=>{typeof n==`boolean`&&v.current&&(v.current.checked=n),a&&T()},{immediate:!0});let P=w(`input`,{..._,ref:v,type:`checkbox`,value:o,checked:n,defaultChecked:r,disabled:i,style:d,className:O(e,t,s),"aria-labelledby":S,"aria-checked":a?`mixed`:_[`aria-checked`],"data-rue-checkbox-input":`true`,"data-rue-checkbox-disabled":i?`true`:`false`,"data-rue-checkbox-value":o===void 0?void 0:M(o),onChange:E});if(m==null&&!c&&!f&&!u)return P;let F=m==null?null:l(`span`,{id:S,className:A(u),"data-rue-checkbox-content":`true`},...j(m));return C(`div`,{className:k(i,c),style:f,"data-rue-checkbox-root":`true`,onClick:N,children:[w(`span`,{className:`shrink-0 pt-0.5`,children:P}),F]})},L=Object.assign(I,{Group:({value:e,defaultValue:t,options:n,disabled:r,name:i,className:a,style:o,children:s,onChange:c,...l})=>{let u=p(),d=F(n),f=h(P(e??t)),m=()=>{let e=u.current;if(!e)return;let t=new Set(f.value.map(M));Array.from(e.querySelectorAll(`input[type="checkbox"][data-rue-checkbox-input="true"]`)).forEach(e=>{let n=e.dataset.rueCheckboxValue;n&&(e.checked=t.has(n)),i&&(e.name=i),r?e.disabled=!0:e.disabled=e.dataset.rueCheckboxDisabled===`true`})},g=e=>{let t=u.current;if(!t)return P(e);let n=Array.from(t.querySelectorAll(`input[type="checkbox"][data-rue-checkbox-input="true"]`)).map(e=>e.dataset.rueCheckboxValue).filter(e=>!!e);if(!n.length)return P(e);let r=new Map(n.map((e,t)=>[e,t]));return P(e).sort((e,t)=>(r.get(M(e))??2**53-1)-(r.get(M(t))??2**53-1))},_=(e,t)=>{let n=g(e);return t||(f.value=n),c&&c(n),n},v=(t,n,r)=>{let i=r?P(e):f.value,a=i.some(e=>e===t);return _(n&&a||!n&&!a?i:n?[...i,t]:i.filter(e=>e!==t),r)},x=t=>{let n=t.target;if(!n||n.type!==`checkbox`||n.dataset.rueCheckboxInput!==`true`)return;let r=N(n.dataset.rueCheckboxValue);if(r===void 0)return;let i=e!==void 0;v(r,n.checked,i),i&&m()};y(()=>{m(),Promise.resolve().then(()=>{m()})}),b(()=>e,e=>{e!==void 0&&(f.value=P(e)),m()},{immediate:!0}),b(()=>f.value,()=>{m()},{immediate:!0}),b(()=>r,()=>{m()},{immediate:!0}),b(()=>i,()=>{m()},{immediate:!0});let S=e===void 0?f.value:P(e),C=D(`flex flex-col gap-3`,a);return w(`div`,{...l,ref:u,role:l.role??`group`,className:C,style:o,"data-rue-checkbox-group":`true`,onChange:d.length?l.onChange:x,children:d.length?d.map(t=>w(I,{value:t.value,checked:S.some(e=>e===t.value),disabled:r||t.disabled,name:i,title:t.title,id:t.id,indeterminate:t.indeterminate,rootClassName:t.className,rootStyle:t.style,onChange:(n,r)=>{v(t.value,r.checked,e!==void 0),e!==void 0&&m()},children:t.label},M(t.value))):s})}}),R=E,z=o=>v(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let u=n(`thead`);i(l,u);let p=n(`tr`);i(u,p);let m=n(`th`);i(p,m),i(m,r(`属性`));let h=n(`th`);i(p,h),i(h,r(`说明`));let _=n(`th`);i(p,_),i(_,r(`类型`));let y=n(`th`);i(p,y),i(y,r(`默认值`));let b=n(`tbody`);i(l,b);let x=a(`rue:list:start`),C=a(`rue:list:end`);i(b,x),i(b,C);let w=new Map;return d(()=>{w=S({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:x,renderItem:(t,r,o,c,l)=>{f(v(()=>{let r=e(),o=n(`tr`);i(r,o),d(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let u=a(`rue:slot:anchor`);i(l,u),d(()=>{let e=t.prop;g(()=>f(e,l,u))});let p=n(`td`);i(o,p);let m=a(`rue:slot:anchor`);i(p,m),d(()=>{let e=t.description;g(()=>f(e,p,m))});let h=n(`td`);i(o,h);let _=n(`code`);i(h,_);let v=a(`rue:slot:anchor`);i(_,v),d(()=>{let e=t.type;g(()=>f(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),d(()=>{let e=t.defaultValue;g(()=>f(e,b,x))}),r}),r,o)}})}),c}),B=`card border border-base-200/80 bg-base-100 shadow-sm`,V=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],H=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],te=`import { Checkbox } from '@rue-js/design'

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
</Checkbox>`,ne=`<fieldset className="fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4">
  <legend className="fieldset-legend">账号设置</legend>
  <Checkbox defaultChecked={true} rootClassName="items-center gap-2.5 [&>span:first-child]:pt-0" contentClassName="leading-none pt-1">
    记住这台设备
  </Checkbox>
</fieldset>`,re=`import { Checkbox } from '@rue-js/design'

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
</div>`,ie=`<Checkbox defaultChecked={true} size="xs" />
<Checkbox defaultChecked={true} size="sm" />
<Checkbox defaultChecked={true} size="md" />
<Checkbox defaultChecked={true} size="lg" />
<Checkbox defaultChecked={true} size="xl" />`,ae=`<Checkbox defaultChecked={true} color="primary" />
<Checkbox defaultChecked={true} color="secondary" />
<Checkbox defaultChecked={true} color="accent" />
<Checkbox defaultChecked={true} color="neutral" />
<Checkbox defaultChecked={true} color="info" />
<Checkbox defaultChecked={true} color="success" />
<Checkbox defaultChecked={true} color="warning" />
<Checkbox defaultChecked={true} color="error" />`,oe=`<Checkbox disabled={true}>只读选项</Checkbox>
<Checkbox disabled={true} checked={true}>已锁定配置</Checkbox>`,se=`<Checkbox
  indeterminate={true}
  rootClassName="items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none"
>
  部分成员已完成
</Checkbox>`,ce=`const value = ref(['design-system'])

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
/>`,le=`const checkedList = ref(['home'])

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
/>`,ue=`<Checkbox.Group className="grid gap-4 md:grid-cols-2" defaultValue={['email', 'slack']}>
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
</Checkbox.Group>`,de=`<Checkbox
  defaultChecked={true}
  className="border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
`,fe=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],pe=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],me=()=>{let{checked:e}=x(`useSetup:0:0`,()=>u(()=>({checked:x(`ref:1:0`,()=>h(!0))})));return v(()=>{let s=n(`div`);t(s,`flex flex-wrap items-center gap-3`);let l=a(`rue:component:anchor`);i(s,l),d(()=>{let t=_(L,{"data-testid":`checkbox-basic`,checked:e.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:t=>{e.value=t},children:`接收产品更新`});g(()=>f(t,s,l))});let u=n(`span`);i(s,u),t(u,`text-sm text-base-content/70`),i(u,r(`当前状态：`));let p=o(u);return i(u,p),d(()=>{c(p,e.value?`已选中`:`未选中`)}),s})},he=()=>{let{enabled:e}=x(`useSetup:0:0:dup1`,()=>u(()=>({enabled:x(`ref:1:1`,()=>h(!1))})));return v(()=>{let l=n(`div`);t(l,`space-y-4`);let u=n(`div`);i(l,u),s(u,`data-testid`,`checkbox-controlled-card`),t(u,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),m(u,`click`,t=>{t.target?.closest(`input`)||(e.value=!e.value)});let p=n(`div`);i(u,p),t(p,`flex items-start gap-3`);let h=a(`rue:component:anchor`);i(p,h),d(()=>{let t=_(L,{checked:e.value,onCheckedChange:t=>{e.value=t}});g(()=>f(t,p,h))});let v=n(`span`);i(p,v),t(v,`min-w-0 flex-1 block`);let y=n(`span`);i(v,y),t(y,`font-medium`),i(y,r(`开启每周摘要`));let b=n(`span`);i(v,b),t(b,`mt-1 block text-xs opacity-70`),i(b,r(`适合演示受控模式和更直接的布尔回调。`));let x=n(`div`);i(l,x),t(x,`flex flex-wrap gap-2 text-sm`);let S=n(`span`);i(x,S),t(S,`badge badge-soft badge-primary`),i(S,r(`checked=`));let C=o(S);i(S,C),d(()=>{c(C,e.value?`true`:`false`)});let w=n(`span`);return i(x,w),t(w,`badge badge-soft`),i(w,r(`onCheckedChange`)),l})},ge=()=>v(()=>{let e=n(`div`);t(e,`flex flex-wrap items-center gap-3`);let o=a(`rue:component:anchor`);i(e,o),f(_(L,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),e,o);let s=n(`span`);return i(e,s),t(s,`text-sm text-base-content/70`),i(s,r(`组件会自动同步原生 input 的 indeterminate 状态。`)),e}),_e=()=>{let{selected:e}=x(`useSetup:0:0:dup2`,()=>u(()=>({selected:x(`ref:1:2`,()=>h([`design-system`]))})));return v(()=>{let s=n(`div`);t(s,`space-y-4`);let l=a(`rue:component:anchor`);i(s,l),d(()=>{let t=_(L.Group,{value:e.value,onChange:t=>{e.value=t},className:`grid gap-3 sm:grid-cols-2`,options:V.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});g(()=>f(t,s,l))});let u=n(`div`);i(s,u),t(u,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),i(u,r(`当前订阅：`));let p=o(u);return i(u,p),d(()=>{c(p,e.value.length?e.value.join(` / `):`未选择`)}),s})},ve=()=>{let{checkedList:e,allValues:o,allChecked:s,partiallyChecked:c}=x(`useSetup:0:0:dup3`,()=>u(()=>{let e=x(`ref:1:3`,()=>h([`home`])),t=H.map(e=>e.value),n=e.value.length===t.length;return{checkedList:e,allValues:t,allChecked:n,partiallyChecked:e.value.length>0&&!n}}));return v(()=>{let l=n(`div`);t(l,`space-y-4`);let u=n(`div`);i(l,u),t(u,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let p=a(`rue:component:anchor`);i(u,p),d(()=>{let t=_(L,{checked:s,indeterminate:c,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(t,n)=>{e.value=n.checked?[...o]:[]},children:`全选功能清单`});g(()=>f(t,u,p))});let m=n(`span`);i(u,m),t(m,`text-sm text-base-content/70`),i(m,r(`已选 `));let h=a(`rue:slot:anchor`);i(m,h),d(()=>{let t=e.value.length;g(()=>f(t,m,h))}),i(m,r(`/`));let v=a(`rue:slot:anchor`);i(m,v),d(()=>{let e=o.length;g(()=>f(e,m,v))});let y=a(`rue:component:anchor`);return i(l,y),d(()=>{let t=_(L.Group,{value:e.value,onChange:t=>{e.value=t},className:`grid gap-3 sm:grid-cols-3`,options:H.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))});g(()=>f(t,l,y))}),l})},ye=()=>v(()=>{let o=n(`div`);t(o,`space-y-4`);let s=a(`rue:component:anchor`);i(o,s);let c=v(()=>{let o=e(),s=a(`rue:component:anchor`);i(o,s),f(_(L,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:v(()=>{let a=e(),o=n(`span`);i(a,o),t(o,`block`);let s=n(`span`);i(o,s),t(s,`font-medium`),i(s,r(`邮件通知`));let c=n(`span`);return i(o,c),t(c,`mt-1 block text-xs opacity-70`),i(c,r(`适合外部用户和日报汇总场景。`)),a})}),o,s);let c=a(`rue:component:anchor`);i(o,c),f(_(L,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:v(()=>{let a=e(),o=n(`span`);i(a,o),t(o,`block`);let s=n(`span`);i(o,s),t(s,`font-medium`),i(s,r(`Slack 频道`));let c=n(`span`);return i(o,c),t(c,`mt-1 block text-xs opacity-70`),i(c,r(`适合团队内部即时同步与讨论。`)),a})}),o,c);let l=a(`rue:component:anchor`);i(o,l),f(_(L,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:v(()=>{let a=e(),o=n(`span`);i(a,o),t(o,`block`);let s=n(`span`);i(o,s),t(s,`font-medium`),i(s,r(`Webhook`));let c=n(`span`);return i(o,c),t(c,`mt-1 block text-xs opacity-70`),i(c,r(`方便接入自动化脚本和外部工作流。`)),a})}),o,l);let u=a(`rue:component:anchor`);return i(o,u),f(_(L,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:v(()=>{let a=e(),o=n(`span`);i(a,o),t(o,`block`);let s=n(`span`);i(o,s),t(s,`font-medium`),i(s,r(`短信提醒`));let c=n(`span`);return i(o,c),t(c,`mt-1 block text-xs opacity-70`),i(c,r(`当前套餐暂未开放。`)),a})}),o,u),o});d(()=>{let e=_(L.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:c});g(()=>f(e,o,s))});let l=n(`div`);return i(o,l),t(l,`text-sm text-base-content/70`),i(l,r(`children 模式适合做卡片化布局或更复杂的说明区。`)),o}),U=()=>{let{tabBasic:o,tabFieldset:c,tabControlled:l,tabSizes:p,tabColors:m,tabDisabled:y,tabIndeterminate:b,tabGroup:S,tabCheckAll:E,tabGrid:ee,tabCustomColors:D}=x(`useSetup:0:0:dup4`,()=>u(()=>({tabBasic:x(`ref:1:4`,()=>h(`preview`)),tabFieldset:x(`ref:1:5`,()=>h(`preview`)),tabControlled:x(`ref:1:6`,()=>h(`preview`)),tabSizes:x(`ref:1:7`,()=>h(`preview`)),tabColors:x(`ref:1:8`,()=>h(`preview`)),tabDisabled:x(`ref:1:9`,()=>h(`preview`)),tabIndeterminate:x(`ref:1:10`,()=>h(`preview`)),tabGroup:x(`ref:1:11`,()=>h(`preview`)),tabCheckAll:x(`ref:1:12`,()=>h(`preview`)),tabGrid:x(`ref:1:13`,()=>h(`preview`)),tabCustomColors:x(`ref:1:14`,()=>h(`preview`))})));return v(()=>{let u=e(),h=a(`rue:component:anchor`);return i(u,h),f(_(T,{children:v(()=>{let u=e(),h=n(`div`);i(u,h),t(h,`max-w-none prose prose-sm md:prose-base`);let v=n(`h1`);i(h,v),i(v,r(`Checkbox 复选框`));let x=n(`p`);i(h,x),t(x,`mt-3 mb-3 text-sm`),i(x,r(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let T=n(`div`);i(h,T),t(T,`text-sm`);let O=n(`a`);i(T,O),s(O,`href`,`https://daisyui.com/components/checkbox/`),s(O,`target`,`_blank`),i(O,r(`查看 Checkbox 静态样式`));let k=n(`div`);i(h,k),t(k,`alert alert-soft mt-6 text-sm`);let A=n(`span`);i(k,A),i(A,r(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let j=n(`h2`);i(h,j),t(j,`mt-8`),i(j,r(`何时使用`));let M=n(`ul`);i(h,M);let N=n(`li`);i(M,N),i(N,r(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let P=n(`li`);i(M,P),i(P,r(`需要从一组并列选项中选择多个值时。`));let F=n(`li`);i(M,F),i(F,r(`需要配合“全选/部分选中”状态表达批量操作时。`));let I=a(`rue:component:anchor`);i(h,I),d(()=>{let e=_(R,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:o,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:w(me,{})})}),code:te});g(()=>f(e,h,I))});let V=a(`rue:component:anchor`);i(h,V),d(()=>{let e=_(R,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:c,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:C(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[w(`legend`,{className:`fieldset-legend`,children:`账号设置`}),w(L,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:ne});g(()=>f(e,h,V))});let H=a(`rue:component:anchor`);i(h,H),d(()=>{let e=_(R,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:l,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:w(he,{})})}),code:re});g(()=>f(e,h,H))});let U=a(`rue:component:anchor`);i(h,U),d(()=>{let e=_(R,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:p,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:C(`div`,{className:`flex flex-wrap items-center gap-4`,children:[w(L,{defaultChecked:!0,size:`xs`}),w(L,{defaultChecked:!0,size:`sm`}),w(L,{defaultChecked:!0,size:`md`}),w(L,{defaultChecked:!0,size:`lg`}),w(L,{defaultChecked:!0,size:`xl`})]})})}),code:ie});g(()=>f(e,h,U))});let W=a(`rue:component:anchor`);i(h,W),d(()=>{let e=_(R,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:m,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:C(`div`,{className:`flex flex-wrap items-center gap-4`,children:[w(L,{defaultChecked:!0,color:`primary`}),w(L,{defaultChecked:!0,color:`secondary`}),w(L,{defaultChecked:!0,color:`accent`}),w(L,{defaultChecked:!0,color:`neutral`}),w(L,{defaultChecked:!0,color:`info`}),w(L,{defaultChecked:!0,color:`success`}),w(L,{defaultChecked:!0,color:`warning`}),w(L,{defaultChecked:!0,color:`error`})]})})}),code:ae});g(()=>f(e,h,W))});let G=a(`rue:component:anchor`);i(h,G),d(()=>{let e=_(R,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:y,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:C(`div`,{className:`flex flex-col gap-4`,children:[w(L,{disabled:!0,children:`只读选项`}),w(L,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:oe});g(()=>f(e,h,G))});let K=a(`rue:component:anchor`);i(h,K),d(()=>{let e=_(R,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:b,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:w(ge,{})})}),code:se});g(()=>f(e,h,K))});let q=a(`rue:component:anchor`);i(h,q),d(()=>{let e=_(R,{title:`Checkbox Group`,summary:`参考常见业务表单的核心能力，支持 options 数据驱动和受控值数组。`,tab:S,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:w(_e,{})})}),code:ce});g(()=>f(e,h,q))});let J=a(`rue:component:anchor`);i(h,J),d(()=>{let e=_(R,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:E,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:w(ve,{})})}),code:le});g(()=>f(e,h,J))});let Y=a(`rue:component:anchor`);i(h,Y),d(()=>{let e=_(R,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:ee,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:w(ye,{})})}),code:ue});g(()=>f(e,h,Y))});let be=a(`rue:component:anchor`);i(h,be),d(()=>{let e=_(R,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:D,preview:()=>w(`div`,{className:B,children:w(`div`,{className:`card-body`,children:w(L,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:de});g(()=>f(e,h,be))});let X=n(`h2`);i(h,X),t(X,`mt-12`),i(X,r(`API`));let Z=n(`p`);i(h,Z),t(Z,`text-sm text-base-content/70`),i(Z,r(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let Q=n(`h3`);i(h,Q),t(Q,`mt-6`),i(Q,r(`Checkbox`));let xe=a(`rue:component:anchor`);i(h,xe),d(()=>{let e=_(z,{rows:fe});g(()=>f(e,h,xe))});let $=n(`h3`);i(h,$),t($,`mt-8`),i($,r(`Checkbox.Group`));let Se=a(`rue:component:anchor`);return i(h,Se),d(()=>{let e=_(z,{rows:pe});g(()=>f(e,h,Se))}),u})}),u,h),u})};export{U as default};