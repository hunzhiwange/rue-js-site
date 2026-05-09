import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,_ as l,c as u,ft as d,j as f,lt as p,pt as m,rt as h,t as g,u as _,ut as v,x as y}from"./vapor-runtime-CKndxKFn.js";import{a as b,n as x}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as S,t as C}from"./src-CqIWk1va.js";import{n as w}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as T}from"./PreviewBlock-mLH0898c.js";var E=0,D=(e,t)=>t?`${e} ${t}`:e,O=(e,t,n)=>{let r=`checkbox`;return e&&(r+=` checkbox-${e}`),t&&(r+=` checkbox-${t}`),n&&(r+=` ${n}`),r},k=(e,t)=>{let n=`inline-flex items-start gap-3 text-sm leading-5 text-base-content`;return e?n+=` cursor-not-allowed opacity-60`:n+=` cursor-pointer`,t&&(n+=` ${t}`),n},A=e=>D(`min-w-0 flex-1`,e),j=e=>Array.isArray(e)?e.flatMap(e=>j(e)):e==null||typeof e==`boolean`?[]:[e],M=e=>{switch(typeof e){case`number`:return`number:${e}`;case`boolean`:return`boolean:${e?`true`:`false`}`;default:return`string:${e}`}},N=e=>{if(!e)return;let t=e.indexOf(`:`);if(t===-1)return e;let n=e.slice(0,t),r=e.slice(t+1);return n===`number`?Number(r):n===`boolean`?r===`true`:r},P=e=>{let t=[];return(e??[]).forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},F=e=>(e??[]).map(e=>typeof e==`string`||typeof e==`number`||typeof e==`boolean`?{label:String(e),value:e}:e),I=({color:e,size:t,checked:n,defaultChecked:r,disabled:i,indeterminate:a,value:o,className:s,rootClassName:c,contentClassName:u,style:f,rootStyle:m,children:h,onChange:g,onCheckedChange:_,...v})=>{let b=p(),x=p();x.current||=`rue-checkbox-content-${E++}`;let w=h==null?void 0:v[`aria-labelledby`]??x.current,T=()=>{b.current&&(b.current.indeterminate=!!a)},D=e=>{let t=e.target?.checked===!0;typeof n==`boolean`&&b.current&&(b.current.checked=n),a&&T(),g&&g(e,{checked:t,indeterminate:!!a,value:o}),_&&_(t,e)},N=(e,t)=>{typeof n!=`boolean`&&b.current&&(b.current.checked=t),a&&T(),g&&g(e,{checked:t,indeterminate:!!a,value:o}),_&&_(t,e)},P=e=>{let t=e.target;if(!b.current||i||t===b.current)return;e.preventDefault();let r=b.current,a=!r.checked;if(n===void 0&&!g&&!_&&r.closest(`[data-rue-checkbox-group="true"]`)){r.checked=a,r.dispatchEvent(new Event(`change`,{bubbles:!0}));return}N(e,a)};y(()=>{T()}),d(()=>a,()=>{T()},{immediate:!0}),d(()=>n,()=>{typeof n==`boolean`&&b.current&&(b.current.checked=n),a&&T()},{immediate:!0});let F=C(`input`,{...v,ref:b,type:`checkbox`,value:o,checked:n,defaultChecked:r,disabled:i,style:f,className:O(e,t,s),"aria-labelledby":w,"aria-checked":a?`mixed`:v[`aria-checked`],"data-rue-checkbox-input":`true`,"data-rue-checkbox-disabled":i?`true`:`false`,"data-rue-checkbox-value":o===void 0?void 0:M(o),onChange:D});if(h==null&&!c&&!m&&!u)return F;let I=h==null?null:l(`span`,{id:w,className:A(u),"data-rue-checkbox-content":`true`},...j(h));return S(`div`,{className:k(i,c),style:m,"data-rue-checkbox-root":`true`,onClick:P,children:[C(`span`,{className:`shrink-0 pt-0.5`,children:F}),I]})},L=Object.assign(I,{Group:({value:e,defaultValue:t,options:n,disabled:r,name:i,className:a,style:o,children:s,onChange:c,...l})=>{let u=p(),f=F(n),m=h(P(e??t)),g=()=>{let e=u.current;if(!e)return;let t=new Set(m.value.map(M));Array.from(e.querySelectorAll(`input[type="checkbox"][data-rue-checkbox-input="true"]`)).forEach(e=>{let n=e.dataset.rueCheckboxValue;n&&(e.checked=t.has(n)),i&&(e.name=i),r?e.disabled=!0:e.disabled=e.dataset.rueCheckboxDisabled===`true`})},_=e=>{let t=u.current;if(!t)return P(e);let n=Array.from(t.querySelectorAll(`input[type="checkbox"][data-rue-checkbox-input="true"]`)).map(e=>e.dataset.rueCheckboxValue).filter(e=>!!e);if(!n.length)return P(e);let r=new Map(n.map((e,t)=>[e,t]));return P(e).sort((e,t)=>(r.get(M(e))??2**53-1)-(r.get(M(t))??2**53-1))},v=(e,t)=>{let n=_(e);return t||(m.value=n),c&&c(n),n},b=(t,n,r)=>{let i=r?P(e):m.value,a=i.some(e=>e===t);return v(n&&a||!n&&!a?i:n?[...i,t]:i.filter(e=>e!==t),r)},x=t=>{let n=t.target;if(!n||n.type!==`checkbox`||n.dataset.rueCheckboxInput!==`true`)return;let r=N(n.dataset.rueCheckboxValue);if(r===void 0)return;let i=e!==void 0;b(r,n.checked,i),i&&g()};y(()=>{g(),Promise.resolve().then(()=>{g()})}),d(()=>e,e=>{e!==void 0&&(m.value=P(e)),g()},{immediate:!0}),d(()=>m.value,()=>{g()},{immediate:!0}),d(()=>r,()=>{g()},{immediate:!0}),d(()=>i,()=>{g()},{immediate:!0});let S=e===void 0?m.value:P(e),w=D(`flex flex-col gap-3`,a);return C(`div`,{...l,ref:u,role:l.role??`group`,className:w,style:o,"data-rue-checkbox-group":`true`,onChange:f.length?l.onChange:x,children:f.length?f.map(t=>C(I,{value:t.value,checked:S.some(e=>e===t.value),disabled:r||t.disabled,name:i,title:t.title,id:t.id,indeterminate:t.indeterminate,rootClassName:t.className,rootStyle:t.style,onChange:(n,r)=>{b(t.value,r.checked,e!==void 0),e!==void 0&&g()},children:t.label},M(t.value))):s})}}),R=T,z=({rows:e})=>_(()=>{let i=t(`div`);s(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=t(`table`);f(i,c),s(c,`table table-zebra`);let l=t(`thead`);f(c,l);let d=t(`tr`);f(l,d);let p=t(`th`);f(d,p),f(p,r(`属性`));let h=t(`th`);f(d,h),f(h,r(`说明`));let g=t(`th`);f(d,g),f(g,r(`类型`));let v=t(`th`);f(d,v),f(v,r(`默认值`));let y=t(`tbody`);f(c,y);let b=a(`rue:list:start`),S=a(`rue:list:end`);f(y,b),f(y,S);let C=new Map;return m(()=>{C=x({items:e||[],getKey:(e,t)=>e.prop,elements:C,parent:y,before:S,singleRoot:!0,start:b,renderItem:(e,r,i,s,c)=>{u(_(()=>{let r=o(),i=t(`tr`);f(r,i),m(()=>{n(i,`key`,String(e.prop))});let s=t(`td`);f(i,s);let c=t(`code`);f(s,c);let l=a(`rue:slot:anchor`);f(c,l),m(()=>{let t=e.prop;u(t,c,l)});let d=t(`td`);f(i,d);let p=a(`rue:slot:anchor`);f(d,p),m(()=>{let t=e.description;u(t,d,p)});let h=t(`td`);f(i,h);let g=t(`code`);f(h,g);let _=a(`rue:slot:anchor`);f(g,_),m(()=>{let t=e.type;u(t,g,_)});let v=t(`td`);f(i,v);let y=t(`code`);f(v,y);let b=a(`rue:slot:anchor`);return f(y,b),m(()=>{let t=e.defaultValue;u(t,y,b)}),r}),r,i)}})}),i}),B=`card border border-base-200/80 bg-base-100 shadow-sm`,V=[{label:`设计系统更新`,value:`design-system`,hint:`每周一同步组件、token 与交互规范。`},{label:`版本发布公告`,value:`release`,hint:`仅在版本发布时推送，适合维护者订阅。`},{label:`实验功能灰度`,value:`labs`,hint:`体验 Rue 新特性与迁移提案。`},{label:`线下活动预告`,value:`events`,hint:`当前场次已满，稍后开放新的名额。`,disabled:!0}],H=[{label:`首页改版`,value:`home`},{label:`文档导航`,value:`docs`},{label:`组件市场`,value:`market`}],ee=`import { Checkbox } from '@rue-js/design'

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
</Checkbox>`,se=`const value = ref(['design-system'])

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
/>`,ce=`const checkedList = ref(['home'])

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
/>`,le=`<Checkbox.Group className="grid gap-4 md:grid-cols-2" defaultValue={['email', 'slack']}>
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
</Checkbox.Group>`,ue=`<Checkbox
  defaultChecked={true}
  className="border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
`,de=[{prop:`checked`,description:`受控选中状态`,type:`boolean`,defaultValue:`-`},{prop:`children`,description:`传入后自动包裹 label，形成可点击说明区`,type:`any`,defaultValue:`-`},{prop:`className`,description:`追加到原生 checkbox 输入元素`,type:`string`,defaultValue:`-`},{prop:`color`,description:`语义颜色，映射到 checkbox-* 类名`,type:`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`contentClassName`,description:`children 文本区的附加类名`,type:`string`,defaultValue:`-`},{prop:`defaultChecked`,description:`非受控初始选中状态`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用状态`,type:`boolean`,defaultValue:`false`},{prop:`indeterminate`,description:`半选态，内部同步到原生 DOM 的 indeterminate 属性`,type:`boolean`,defaultValue:`false`},{prop:`onChange`,description:`状态变化回调，第二个参数会附带 checked 和 value`,type:`(event: Event, meta: CheckboxChangeMeta) => void`,defaultValue:`-`},{prop:`onCheckedChange`,description:`布尔值快捷回调`,type:`(checked: boolean, event: Event) => void`,defaultValue:`-`},{prop:`rootClassName`,description:`外层容器类名，仅在包裹模式下生效`,type:`string`,defaultValue:`-`},{prop:`rootStyle`,description:`外层容器样式，仅在包裹模式下生效`,type:`CSSProperties`,defaultValue:`-`},{prop:`size`,description:`尺寸层级，映射到 checkbox-* 类名`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`value`,description:`当前 checkbox 的值，参与 Checkbox.Group 收集`,type:`string | number | boolean`,defaultValue:`-`}],fe=[{prop:`children`,description:`手动组合模式，可直接放入多个 Checkbox`,type:`any`,defaultValue:`-`},{prop:`className`,description:`分组容器类名，适合叠加 grid 或 flex 布局`,type:`string`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控默认选中值`,type:`(string | number | boolean)[]`,defaultValue:`[]`},{prop:`disabled`,description:`禁用整个分组`,type:`boolean`,defaultValue:`false`},{prop:`name`,description:`透传到组内 checkbox 的 name 属性`,type:`string`,defaultValue:`-`},{prop:`onChange`,description:`选中值数组变化回调`,type:`(checkedValue: (string | number | boolean)[]) => void`,defaultValue:`-`},{prop:`options`,description:`数据驱动写法，支持基础值数组或带 label/disabled 的对象数组`,type:`(CheckboxOption | string | number | boolean)[]`,defaultValue:`[]`},{prop:`style`,description:`分组容器样式`,type:`CSSProperties`,defaultValue:`-`},{prop:`value`,description:`受控选中值数组`,type:`(string | number | boolean)[]`,defaultValue:`-`}],pe=()=>{let{checked:e}=b(`useSetup:0:0`,()=>v(()=>({checked:b(`ref:1:0`,()=>h(!0))})));return _(()=>{let n=t(`div`);s(n,`flex flex-wrap items-center gap-3`);let o=a(`rue:component:anchor`);f(n,o),m(()=>{u(g(L,{"data-testid":`checkbox-basic`,checked:e.value,rootClassName:`items-center [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,onCheckedChange:t=>{e.value=t},children:`接收产品更新`}),n,o)});let l=t(`span`);f(n,l),s(l,`text-sm text-base-content/70`),f(l,r(`当前状态：`));let d=i(l);return f(l,d),m(()=>{c(d,e.value?`已选中`:`未选中`)}),n})},me=()=>{let{enabled:o}=b(`useSetup:0:0`,()=>v(()=>({enabled:b(`ref:1:1`,()=>h(!1))})));return _(()=>{let l=t(`div`);s(l,`space-y-4`);let d=t(`div`);f(l,d),n(d,`data-testid`,`checkbox-controlled-card`),s(d,`cursor-pointer rounded-box border border-base-300 bg-base-200/50 px-4 py-3`),e(d,`click`,e=>{e.target?.closest(`input`)||(o.value=!o.value)});let p=t(`div`);f(d,p),s(p,`flex items-start gap-3`);let h=a(`rue:component:anchor`);f(p,h),m(()=>{u(g(L,{checked:o.value,onCheckedChange:e=>{o.value=e}}),p,h)});let _=t(`span`);f(p,_),s(_,`min-w-0 flex-1 block`);let v=t(`span`);f(_,v),s(v,`font-medium`),f(v,r(`开启每周摘要`));let y=t(`span`);f(_,y),s(y,`mt-1 block text-xs opacity-70`),f(y,r(`适合演示受控模式和更直接的布尔回调。`));let b=t(`div`);f(l,b),s(b,`flex flex-wrap gap-2 text-sm`);let x=t(`span`);f(b,x),s(x,`badge badge-soft badge-primary`),f(x,r(`checked=`));let S=i(x);f(x,S),m(()=>{c(S,o.value?`true`:`false`)});let C=t(`span`);return f(b,C),s(C,`badge badge-soft`),f(C,r(`onCheckedChange`)),l})},he=()=>_(()=>{let e=t(`div`);s(e,`flex flex-wrap items-center gap-3`);let n=a(`rue:component:anchor`);f(e,n),u(g(L,{indeterminate:!0,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,children:`部分成员已完成`}),e,n);let i=t(`span`);return f(e,i),s(i,`text-sm text-base-content/70`),f(i,r(`组件会自动同步原生 input 的 indeterminate 状态。`)),e}),ge=()=>{let{selected:e}=b(`useSetup:0:0`,()=>v(()=>({selected:b(`ref:1:2`,()=>h([`design-system`]))})));return _(()=>{let n=t(`div`);s(n,`space-y-4`);let o=a(`rue:component:anchor`);f(n,o),m(()=>{u(g(L.Group,{value:e.value,onChange:t=>{e.value=t},className:`grid gap-3 sm:grid-cols-2`,options:V.map(e=>({label:e.label,value:e.value,disabled:e.disabled,title:e.hint,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}),n,o)});let l=t(`div`);f(n,l),s(l,`rounded-box border border-dashed border-base-300 bg-base-200/40 px-4 py-3 text-sm text-base-content/80`),f(l,r(`当前订阅：`));let d=i(l);return f(l,d),m(()=>{c(d,e.value.length?e.value.join(` / `):`未选择`)}),n})},_e=()=>{let{checkedList:e,allValues:n,allChecked:i,partiallyChecked:o}=b(`useSetup:0:0`,()=>v(()=>{let e=b(`ref:1:3`,()=>h([`home`])),t=H.map(e=>e.value),n=e.value.length===t.length;return{checkedList:e,allValues:t,allChecked:n,partiallyChecked:e.value.length>0&&!n}}));return _(()=>{let c=t(`div`);s(c,`space-y-4`);let l=t(`div`);f(c,l),s(l,`flex flex-wrap items-center justify-between gap-3 rounded-box border border-base-300 bg-base-200/50 px-4 py-3`);let d=a(`rue:component:anchor`);f(l,d),m(()=>{u(g(L,{checked:i,indeterminate:o,rootClassName:`items-center [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`,onChange:(t,r)=>{e.value=r.checked?[...n]:[]},children:`全选功能清单`}),l,d)});let p=t(`span`);f(l,p),s(p,`text-sm text-base-content/70`),f(p,r(`已选 `));let h=a(`rue:slot:anchor`);f(p,h),m(()=>{let t=e.value.length;u(t,p,h)}),f(p,r(`/`));let _=a(`rue:slot:anchor`);f(p,_),m(()=>{let e=n.length;u(e,p,_)});let v=a(`rue:component:anchor`);return f(c,v),m(()=>{u(g(L.Group,{value:e.value,onChange:t=>{e.value=t},className:`grid gap-3 sm:grid-cols-3`,options:H.map(e=>({label:e.label,value:e.value,className:`items-center rounded-box border border-base-300 bg-base-100 px-4 py-3 [&>span:first-child]:pt-0 [&>span:last-child]:pt-1 [&>span:last-child]:leading-none`}))}),c,v)}),c})},ve=()=>_(()=>{let e=t(`div`);s(e,`space-y-4`);let n=a(`rue:component:anchor`);f(e,n);let i=_(()=>{let e=o(),n=a(`rue:component:anchor`);f(e,n),u(g(L,{value:`email`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:_(()=>{let e=o(),n=t(`span`);f(e,n),s(n,`block`);let i=t(`span`);f(n,i),s(i,`font-medium`),f(i,r(`邮件通知`));let a=t(`span`);return f(n,a),s(a,`mt-1 block text-xs opacity-70`),f(a,r(`适合外部用户和日报汇总场景。`)),e})}),e,n);let i=a(`rue:component:anchor`);f(e,i),u(g(L,{value:`slack`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:_(()=>{let e=o(),n=t(`span`);f(e,n),s(n,`block`);let i=t(`span`);f(n,i),s(i,`font-medium`),f(i,r(`Slack 频道`));let a=t(`span`);return f(n,a),s(a,`mt-1 block text-xs opacity-70`),f(a,r(`适合团队内部即时同步与讨论。`)),e})}),e,i);let c=a(`rue:component:anchor`);f(e,c),u(g(L,{value:`webhook`,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:_(()=>{let e=o(),n=t(`span`);f(e,n),s(n,`block`);let i=t(`span`);f(n,i),s(i,`font-medium`),f(i,r(`Webhook`));let a=t(`span`);return f(n,a),s(a,`mt-1 block text-xs opacity-70`),f(a,r(`方便接入自动化脚本和外部工作流。`)),e})}),e,c);let l=a(`rue:component:anchor`);return f(e,l),u(g(L,{value:`sms`,disabled:!0,rootClassName:`rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:_(()=>{let e=o(),n=t(`span`);f(e,n),s(n,`block`);let i=t(`span`);f(n,i),s(i,`font-medium`),f(i,r(`短信提醒`));let a=t(`span`);return f(n,a),s(a,`mt-1 block text-xs opacity-70`),f(a,r(`当前套餐暂未开放。`)),e})}),e,l),e});m(()=>{u(g(L.Group,{defaultValue:[`email`,`slack`],className:`grid gap-4 md:grid-cols-2`,children:i}),e,n)});let c=t(`div`);return f(e,c),s(c,`text-sm text-base-content/70`),f(c,r(`children 模式适合做卡片化布局或更复杂的说明区。`)),e}),U=()=>{let{tabBasic:e,tabFieldset:i,tabControlled:c,tabSizes:l,tabColors:d,tabDisabled:p,tabIndeterminate:y,tabGroup:x,tabCheckAll:T,tabGrid:E,tabCustomColors:D}=b(`useSetup:0:0`,()=>v(()=>({tabBasic:b(`ref:1:4`,()=>h(`preview`)),tabFieldset:b(`ref:1:5`,()=>h(`preview`)),tabControlled:b(`ref:1:6`,()=>h(`preview`)),tabSizes:b(`ref:1:7`,()=>h(`preview`)),tabColors:b(`ref:1:8`,()=>h(`preview`)),tabDisabled:b(`ref:1:9`,()=>h(`preview`)),tabIndeterminate:b(`ref:1:10`,()=>h(`preview`)),tabGroup:b(`ref:1:11`,()=>h(`preview`)),tabCheckAll:b(`ref:1:12`,()=>h(`preview`)),tabGrid:b(`ref:1:13`,()=>h(`preview`)),tabCustomColors:b(`ref:1:14`,()=>h(`preview`))})));return _(()=>{let h=o(),v=a(`rue:component:anchor`);return f(h,v),u(g(w,{children:_(()=>{let h=o(),_=t(`div`);f(h,_),s(_,`max-w-none prose prose-sm md:prose-base`);let v=t(`h1`);f(_,v),f(v,r(`Checkbox 复选框`));let b=t(`p`);f(_,b),s(b,`mt-3 mb-3 text-sm`),f(b,r(`Checkbox 用于从多个候选项中选择零个、一个或多个值，也适合表达“确认某项设置”的状态。`));let w=t(`div`);f(_,w),s(w,`text-sm`);let O=t(`a`);f(w,O),n(O,`href`,`https://daisyui.com/components/checkbox/`),n(O,`target`,`_blank`),f(O,r(`查看 Checkbox 静态样式`));let k=t(`div`);f(_,k),s(k,`alert alert-soft mt-6 text-sm`);let A=t(`span`);f(k,A),f(A,r(`Rue 在保留 daisyUI 视觉类名的基础上，为 Checkbox 增加了更完整的受控状态、半选态和 Group 能力。`));let j=t(`h2`);f(_,j),s(j,`mt-8`),f(j,r(`何时使用`));let M=t(`ul`);f(_,M);let N=t(`li`);f(M,N),f(N,r(`需要表达独立开关，但又不希望像 Toggle 那样立即强调“开/关”语义时。`));let P=t(`li`);f(M,P),f(P,r(`需要从一组并列选项中选择多个值时。`));let F=t(`li`);f(M,F),f(F,r(`需要配合“全选/部分选中”状态表达批量操作时。`));let I=a(`rue:component:anchor`);f(_,I),m(()=>{u(g(R,{title:`Checkbox`,summary:`保留原有基础用法，并支持 children 作为可点击说明区。`,tab:e,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:C(pe,{})})}),code:ee}),_,I)});let V=a(`rue:component:anchor`);f(_,V),m(()=>{u(g(R,{title:`With fieldset and label`,summary:`保留原有 fieldset 场景，适合设置页或表单分区。`,tab:i,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:S(`fieldset`,{className:`fieldset w-80 rounded-box border border-base-300 bg-base-100 p-4`,children:[C(`legend`,{className:`fieldset-legend`,children:`账号设置`}),C(L,{defaultChecked:!0,rootClassName:`items-center gap-2.5 [&>span:first-child]:pt-0`,contentClassName:`leading-none pt-1`,children:`记住这台设备`})]})})}),code:te}),_,V)});let H=a(`rue:component:anchor`);f(_,H),m(()=>{u(g(R,{title:`Controlled checkbox`,summary:`通过 onCheckedChange 直接拿到布尔值，适合更简洁的受控写法。`,tab:c,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:C(me,{})})}),code:ne}),_,H)});let U=a(`rue:component:anchor`);f(_,U),m(()=>{u(g(R,{title:`Sizes`,summary:`延续 Rue 当前的尺寸体系。`,tab:l,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:S(`div`,{className:`flex flex-wrap items-center gap-4`,children:[C(L,{defaultChecked:!0,size:`xs`}),C(L,{defaultChecked:!0,size:`sm`}),C(L,{defaultChecked:!0,size:`md`}),C(L,{defaultChecked:!0,size:`lg`}),C(L,{defaultChecked:!0,size:`xl`})]})})}),code:re}),_,U)});let W=a(`rue:component:anchor`);f(_,W),m(()=>{u(g(R,{title:`Colors`,summary:`颜色语义保持与现有 Rue 主题一致。`,tab:d,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:S(`div`,{className:`flex flex-wrap items-center gap-4`,children:[C(L,{defaultChecked:!0,color:`primary`}),C(L,{defaultChecked:!0,color:`secondary`}),C(L,{defaultChecked:!0,color:`accent`}),C(L,{defaultChecked:!0,color:`neutral`}),C(L,{defaultChecked:!0,color:`info`}),C(L,{defaultChecked:!0,color:`success`}),C(L,{defaultChecked:!0,color:`warning`}),C(L,{defaultChecked:!0,color:`error`})]})})}),code:ie}),_,W)});let G=a(`rue:component:anchor`);f(_,G),m(()=>{u(g(R,{title:`Disabled`,summary:`既支持裸 checkbox，也支持带说明区的禁用态。`,tab:p,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:S(`div`,{className:`flex flex-col gap-4`,children:[C(L,{disabled:!0,children:`只读选项`}),C(L,{disabled:!0,checked:!0,children:`已锁定配置`})]})})}),code:ae}),_,G)});let K=a(`rue:component:anchor`);f(_,K),m(()=>{u(g(R,{title:`Indeterminate`,summary:`保留原有半选态场景，但改成组件级 prop，不再需要手动操作 ref。`,tab:y,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:C(he,{})})}),code:oe}),_,K)});let q=a(`rue:component:anchor`);f(_,q),m(()=>{u(g(R,{title:`Checkbox Group`,summary:`参考 ant-design 的核心能力，支持 options 数据驱动和受控值数组。`,tab:x,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:C(ge,{})})}),code:se}),_,q)});let J=a(`rue:component:anchor`);f(_,J),m(()=>{u(g(R,{title:`Check all`,summary:`组合 indeterminate 和 Group，可以快速搭建全选/部分选中逻辑。`,tab:T,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:C(_e,{})})}),code:ce}),_,J)});let Y=a(`rue:component:anchor`);f(_,Y),m(()=>{u(g(R,{title:`Use with Grid`,summary:`children 模式更适合卡片化说明和响应式栅格布局。`,tab:E,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:C(ve,{})})}),code:le}),_,Y)});let ye=a(`rue:component:anchor`);f(_,ye),m(()=>{u(g(R,{title:`Checkbox with custom colors`,summary:`保留原有自定义颜色能力，便于做品牌化演示。`,tab:D,preview:()=>C(`div`,{className:B,children:C(`div`,{className:`card-body`,children:C(L,{defaultChecked:!0,className:`border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800`})})}),code:ue}),_,ye)});let X=t(`h2`);f(_,X),s(X,`mt-12`),f(X,r(`API`));let Z=t(`p`);f(_,Z),s(Z,`text-sm text-base-content/70`),f(Z,r(`为了兼容旧用法，className 仍然作用在原生 input 上；如果需要控制包裹层，请使用 rootClassName 和 rootStyle。`));let Q=t(`h3`);f(_,Q),s(Q,`mt-6`),f(Q,r(`Checkbox`));let be=a(`rue:component:anchor`);f(_,be),m(()=>{u(g(z,{rows:de}),_,be)});let $=t(`h3`);f(_,$),s($,`mt-8`),f($,r(`Checkbox.Group`));let xe=a(`rue:component:anchor`);return f(_,xe),m(()=>{u(g(z,{rows:fe}),_,xe)}),h})}),h,v),h})};export{U as default};