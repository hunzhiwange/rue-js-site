import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,mt as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v,n as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as b,i as x}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as S}from"./Code-D5UqTwV6.js";import{t as C}from"./tabs-DRfs918f.js";import{t as w}from"./toast-CEmcMFIX.js";import{r as T}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as E}from"./preview-test-gate-DuGL5287.js";var D=n=>u(i=>{let a=g(`div`,i);_(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=g(`div`,a);o(a,s),_(s,`flex flex-wrap items-start justify-between gap-3`);let l=g(`div`,s);o(s,l);let d=g(`h2`,l);o(l,d),_(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(d,f(`# `));let m=e(`rue:slot:anchor`);o(d,m),t(()=>{let e=n.title;r(()=>p(e,d,m))});let v=e(`rue:slot:anchor`);o(l,v),t(()=>{let i=n.summary?u(()=>{let i=c(),a=g(`p`,i);o(i,a),_(a,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.summary;r(()=>p(e,a,s))}),i}):``;r(()=>p(i,l,v))});let y=e(`rue:component:anchor`);o(a,y),t(()=>{let e=h(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>p(e,a,y))});let b=e(`rue:slot:anchor`);return o(a,b),t(()=>{let i=n.tab.value===`preview`?E(n.title,n.preview):u(()=>{let i=c(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(S,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>p(e,i,a))}),i});r(()=>p(i,a,b))}),a}),O=e=>Array.isArray(e)?e.flatMap(e=>O(e)):e==null?[]:[e],k=n=>u(i=>{let a=g(`div`,i);_(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=g(`table`,a);o(a,l),_(l,`table table-zebra`);let d=g(`thead`,l);o(l,d);let m=g(`tr`,d);o(d,m);let h=g(`th`,m);o(m,h),o(h,f(`属性`));let v=g(`th`,m);o(m,v),o(v,f(`说明`));let b=g(`th`,m);o(m,b),o(b,f(`类型`));let x=g(`th`,m);o(m,x),o(x,f(`默认值`));let S=g(`tbody`,l);o(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return t(()=>{T=y({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,l,d)=>{p(u(()=>{let i=c(),a=g(`tr`,i);o(i,a),t(()=>{s(a,`key`,String(n.prop))});let l=g(`td`,a);o(a,l);let u=g(`code`,l);o(l,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>p(e,u,d))});let f=g(`td`,a);o(a,f);let m=e(`rue:slot:anchor`);o(f,m),t(()=>{let e=n.description;r(()=>p(e,f,m))});let h=g(`td`,a);o(a,h);let _=g(`code`,h);o(h,_);let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.type;r(()=>p(e,_,v))});let y=g(`td`,a);o(a,y);let b=g(`code`,y);o(y,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>p(e,b,x))}),i}),i,a)}})}),a}),A=n=>u(i=>{let a=g(`div`,i);_(a,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`);let s=g(`div`,a);o(a,s),_(s,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),t(()=>{d(s,{minHeight:n.minHeight===void 0?`14rem`:n.minHeight})});let c=e(`rue:slot:anchor`);return o(s,c),t(()=>{let e=O(n.children);r(()=>p(e,s,c))}),a}),ee={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},te=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ne=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],re=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],ie=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],ae=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保留文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],oe=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],se=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],ce=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],le=()=>{let{messageApi:n,contextHolder:l}=v(`useSetup:0:0`,()=>a(()=>{let[e,t]=w.useMessage({getContainer:!1,className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,maxCount:3,duration:4,closable:!0,pauseOnHover:!0});return{messageApi:e,contextHolder:t}}));return u(a=>{let d=c(),m=e(`rue:component:anchor`);return o(d,m),p(h(A,{minHeight:`19rem`,children:u(()=>{let a=c(),u=g(`div`,a);o(a,u),_(u,`absolute left-4 top-4 flex flex-wrap gap-2`);let d=g(`button`,u);o(u,d),s(d,`type`,`button`),_(d,`btn btn-sm`),i(d,`click`,()=>{n.open({key:`deployment-paused`,type:`warning`,title:`Deployment paused`,description:`This one is controlled by messageApi.destroy(key), so it can stay linked to page state.`,duration:0,closable:!0})}),o(d,f(`重新显示受控提示`));let m=g(`button`,u);o(u,m),s(m,`type`,`button`),_(m,`btn btn-sm btn-ghost`),i(m,`click`,()=>{n.destroy(`deployment-paused`)}),o(m,f(`关闭受控提示`));let h=g(`button`,u);o(u,h),s(h,`type`,`button`),_(h,`btn btn-sm btn-outline`),i(h,`click`,()=>{n.success({key:`auto-save-${Date.now()}`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4})}),o(h,f(`重新触发自动关闭`));let v=e(`rue:slot:anchor`);o(a,v),t(()=>{let e=l;r(()=>p(e,a,v))});let y=g(`div`,a);return o(a,y),_(y,`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`),o(y,f(`受控提示使用固定 key 反复显示或销毁；自动关闭提示每次生成新 key，悬停时会暂停倒计时。`)),a})}),d,m),d})},ue=`const [messageApi, contextHolder] = Toast.useMessage({
  getContainer: false,
  className: 'absolute',
  placement: 'top-end',
  inset: { x: 16, y: 56 },
  gap: 12,
  maxCount: 3,
  duration: 4,
  closable: true,
  pauseOnHover: true,
})

const showControlledToast = () => {
  messageApi.open({
    key: 'deployment-paused',
    type: 'warning',
    title: 'Deployment paused',
    description: 'This one is controlled by messageApi.destroy(key).',
    duration: 0,
    closable: true,
  })
}

const closeControlledToast = () => {
  messageApi.destroy('deployment-paused')
}

const showAutoCloseToast = () => {
  messageApi.success({
    key: \`auto-save-\${Date.now()}\`,
    title: 'Auto saved',
    description: 'This toast closes itself after 4 seconds and pauses while hovered.',
    duration: 4,
  })
}

<div className="relative min-h-80 overflow-hidden rounded-box border border-base-300">
  <button type="button" onClick={showControlledToast}>
    重新显示受控提示
  </button>
  <button type="button" onClick={closeControlledToast}>
    关闭受控提示
  </button>
  <button type="button" onClick={showAutoCloseToast}>
    重新触发自动关闭
  </button>

  {contextHolder}
</div>`,j=()=>{let{tabs:i,messageApi:s,messageContextHolder:d}=v(`useSetup:0:0:dup1`,()=>a(()=>{let e={items:v(`ref:1:0`,()=>n(`preview`)),variants:v(`ref:1:1`,()=>n(`preview`)),controlled:v(`ref:1:2`,()=>n(`preview`)),useMessage:v(`ref:1:3`,()=>n(`preview`)),compound:v(`ref:1:4`,()=>n(`preview`)),basic:v(`ref:1:5`,()=>n(`preview`)),placements:v(`ref:1:6`,()=>n(`preview`)),stacked:v(`ref:1:7`,()=>n(`preview`)),inset:v(`ref:1:8`,()=>n(`preview`)),host:v(`ref:1:9`,()=>n(`preview`))},[t,r]=w.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,messageApi:t,messageContextHolder:r}}));return u(n=>{let a=c(),v=e(`rue:component:anchor`);return o(a,v),p(h(T,{children:u(()=>{let n=c(),a=g(`div`,n);o(n,a),_(a,`max-w-none prose prose-sm md:prose-base`);let u=g(`h1`,a);o(a,u),o(u,f(`Toast 轻提示`));let v=g(`p`,a);o(a,v),_(v,`text-sm mt-3 mb-3`),o(v,f(`这次 Toast 不再只有一个“放 alert 的定位壳”。根容器依旧负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let y=g(`code`,v);o(v,y),o(y,f(`Toast.Item`)),o(v,f(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补齐；现在还可以像常见 message API 一样通过`));let S=g(`code`,v);o(v,S),o(S,f(`Toast.useMessage()`)),o(v,f(`拿到`));let C=g(`code`,v);o(v,C),o(C,f(`messageApi`)),o(v,f(`和`));let T=g(`code`,v);o(v,T),o(T,f(`contextHolder`)),o(v,f(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let E=m(v);o(v,E),l(E,` `);let O=g(`code`,v);o(v,O),o(O,f(`getContainer={false}`)),o(v,f(`时才会留在当前 box 里，同时仍然保留 Rue 自己更轻、更靠近页面内容的视觉语气。`));let j=g(`h2`,a);o(a,j),o(j,f(`何时使用`));let M=g(`ul`,a);o(a,M);let de=g(`li`,M);o(M,de),o(de,f(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let N=g(`li`,M);o(M,N),o(N,f(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保留更贴近 Rue 的视觉风格。`));let P=g(`li`,M);o(M,P),o(P,f(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let F=g(`li`,M);o(M,F),o(F,f(`既要兼容旧的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let I=e(`rue:component:anchor`);o(a,I),t(()=>{let e=h(D,{title:`Message-like items`,summary:`最直接的增强用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:i.items,preview:()=>b(A,{minHeight:`19rem`,children:[x(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),x(w,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:ne.slice(0,3).map(e=>x(w.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
  <Toast.Item
    type="info"
    title="Draft synced"
    description="The latest edits have been pushed to your shared workspace."
    closable
  />
  <Toast.Item
    type="success"
    title="Publish complete"
    description="The release has been deployed to production without errors."
    closable
  />
</Toast>`});r(()=>p(e,a,I))});let L=e(`rue:component:anchor`);o(a,L),t(()=>{let e=h(D,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:i.variants,preview:()=>x(`div`,{className:`grid gap-4`,children:re.map(e=>b(A,{minHeight:`11rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:x(w.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:x(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`});r(()=>p(e,a,L))});let R=e(`rue:component:anchor`);o(a,R),t(()=>{let e=h(D,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则补齐了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:i.controlled,preview:()=>x(le,{}),code:ue});r(()=>p(e,a,R))});let z=e(`rue:component:anchor`);o(a,z),t(()=>{let e=h(D,{title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:i.useMessage,preview:()=>b(A,{minHeight:`18rem`,children:[b(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{s.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{s.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{s.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{s.destroy()},children:`清空当前消息`})]}),d]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
  placement: 'top-end',
  inset: { x: 16, y: 68 },
  gap: 12,
  maxCount: 3,
  zIndex: 80,
})

<button
  type="button"
  onClick={() => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    })
  }}
>
  Customized display duration
</button>

<button
  type="button"
  onClick={() => {
    messageApi.loading({
      key: 'publish',
      content: 'Publishing changes to preview...',
    })
  }}
>
  Start publish
</button>

<button
  type="button"
  onClick={() => {
    messageApi.open({
      key: 'publish',
      type: 'success',
      content: 'Published to preview. Same key, same slot, new state.',
      duration: 2,
    })
  }}
>
  Update same key
</button>

<button type="button" onClick={() => messageApi.destroy()}>
  Clear all
</button>

{contextHolder}

// keep it inside the current box instead:
// Toast.useMessage({
//   getContainer: false,
//   className: 'absolute',
//   placement: 'bottom-start',
//   inset: { x: 12, y: 12 },
// })`});r(()=>p(e,a,z))});let B=e(`rue:component:anchor`);o(a,B),t(()=>{let e=h(D,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:i.compound,preview:()=>x(A,{minHeight:`15rem`,children:x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:b(w.Item,{variant:`outline`,className:`max-w-md`,children:[x(w.Icon,{className:`bg-secondary/12 text-secondary`,children:x(`span`,{className:`text-lg font-black`,children:`R`})}),b(w.Content,{children:[x(w.Title,{children:`Workspace synced`}),x(w.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),b(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),x(w.Action,{className:`ml-3 items-start self-start`,children:x(w.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
  <Toast.Item variant="outline" className="max-w-md">
    <Toast.Icon className="bg-secondary/12 text-secondary">
      <span className="text-lg font-black">R</span>
    </Toast.Icon>
    <Toast.Content>
      <Toast.Title>Workspace synced</Toast.Title>
      <Toast.Description>
        Compound API is useful when you need a custom icon and richer actions.
      </Toast.Description>
    </Toast.Content>
    <Toast.Action className="ml-3 items-start self-start">
      <Toast.Close className="text-base-content/50 hover:bg-base-200 hover:text-base-content" />
    </Toast.Action>
  </Toast.Item>
</Toast>`});r(()=>p(e,a,B))});let V=g(`h2`,a);o(a,V),o(V,f(`兼容旧写法`));let H=g(`p`,a);o(a,H),_(H,`text-sm mt-2 mb-4`),o(H,f(`旧的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完全保留。下面这些原有 demo 都还在，只是按新的能力层次重新归组了。`));let U=e(`rue:component:anchor`);o(a,U),t(()=>{let e=h(D,{title:`Toast with alert inside`,summary:`保留原始基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:i.basic,preview:()=>b(A,{children:[x(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),x(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),x(w,{className:`absolute`,inset:16,gap:10,children:x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`});r(()=>p(e,a,U))});let fe=e(`rue:component:anchor`);o(a,fe),t(()=>{let e=h(D,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 兼容层仍然都可用，旧布局 API 不需要迁移。`,tab:i.placements,preview:()=>x(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:te.map(e=>b(A,{minHeight:`9.5rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:x(`div`,{role:`alert`,className:`${ee[e.tone]} shadow-sm`,children:x(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
  <div role="alert" className="alert alert-info">
    <span>top-start</span>
  </div>
</Toast>

<Toast className="absolute" placement="center" inset={{ x: 12, y: 12 }}>
  <div role="alert" className="alert alert-success">
    <span>center</span>
  </div>
</Toast>

<Toast className="absolute" horizontal="end" vertical="bottom" inset={{ x: 12, y: 12 }}>
  <div role="alert" className="alert alert-warning">
    <span>bottom-end</span>
  </div>
</Toast>`});r(()=>p(e,a,fe))});let pe=e(`rue:component:anchor`);o(a,pe),t(()=>{let e=h(D,{title:`Stacked toasts`,summary:`原来的多条堆叠示例继续保留，同时和横向、倒序这些布局控制一起展示。`,tab:i.stacked,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[x(A,{children:b(w,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New mail arrived.`})}),x(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:x(`span`,{children:`Message sent successfully.`})})]})}),x(A,{children:b(w,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`Rollback ready`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>New mail arrived.</span>
  </div>
  <div role="alert" className="alert alert-success shadow-sm">
    <span>Message sent successfully.</span>
  </div>
</Toast>

<Toast
  className="absolute"
  placement="bottom-start"
  stack="horizontal"
  reverse
  inset={{ x: 16, y: 16 }}
  gap={12}
>
  <div role="alert" className="alert alert-warning shadow-sm">
    <span>Rollback ready</span>
  </div>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>Deploy queued</span>
  </div>
</Toast>`});r(()=>p(e,a,pe))});let me=e(`rue:component:anchor`);o(a,me),t(()=>{let e=h(D,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:i.inset,preview:()=>b(A,{minHeight:`15rem`,children:[b(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[x(`div`,{className:`h-10 rounded-box bg-base-200/80`}),b(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[x(`div`,{className:`h-20 rounded-box bg-base-200/70`}),x(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),x(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),b(w,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[x(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:x(`span`,{children:`Layered above the card.`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
  className="absolute"
  placement="top-end"
  inset={{ x: 20, y: 20 }}
  gap={10}
  zIndex={30}
>
  <div role="alert" className="alert alert-success shadow-lg">
    <span>Layered above the card.</span>
  </div>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>Inset keeps it off the edge.</span>
  </div>
</Toast>`});r(()=>p(e,a,me))});let he=e(`rue:component:anchor`);o(a,he),t(()=>{let e=h(D,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:i.host,preview:()=>x(A,{children:b(w,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Auto save completed.`})}),x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
  as="section"
  className="absolute"
  placement="top"
  inset={{ x: 16, y: 16 }}
  role="status"
  aria-live="polite"
  gap={10}
>
  <div role="alert" className="alert alert-info shadow-sm">
    <span>Auto save completed.</span>
  </div>
  <div role="alert" className="alert alert-warning shadow-sm">
    <span>1 draft still requires review.</span>
  </div>
</Toast>`});r(()=>p(e,a,he))});let W=g(`div`,a);o(a,W),_(W,`my-8 lg:my-12`);let G=g(`h2`,W);o(W,G),_(G,`mt-2 mb-4 text-lg font-semibold`),o(G,f(`API`));let K=g(`h3`,W);o(W,K),_(K,`mt-2 mb-3 text-base font-semibold`),o(K,f(`Toast.useMessage(options)`));let ge=e(`rue:component:anchor`);o(W,ge),t(()=>{let e=h(k,{rows:oe});r(()=>p(e,W,ge))});let q=g(`p`,W);o(W,q),_(q,`mt-4 text-sm opacity-70`),o(q,f(`返回值固定为`));let _e=g(`code`,q);o(q,_e),o(_e,f(`[messageApi, contextHolder]`)),o(q,f(`。为了保持这类 hook 的用法习惯，`));let ve=g(`code`,q);o(q,ve),o(ve,f(`contextHolder`)),o(q,f(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let ye=g(`code`,q);o(q,ye),o(ye,f(`document.body`)),o(q,f(`，传`));let be=g(`code`,q);o(q,be),o(be,f(`getContainer={false}`)),o(q,f(`时才会回到 holder 内。`));let J=g(`h3`,W);o(W,J),_(J,`mt-8 mb-3 text-base font-semibold`),o(J,f(`messageApi`));let xe=e(`rue:component:anchor`);o(W,xe),t(()=>{let e=h(k,{rows:se});r(()=>p(e,W,xe))});let Y=g(`h3`,W);o(W,Y),_(Y,`mt-8 mb-3 text-base font-semibold`),o(Y,f(`ToastMessageConfig`));let Se=e(`rue:component:anchor`);o(W,Se),t(()=>{let e=h(k,{rows:ce});r(()=>p(e,W,Se))});let X=g(`h3`,W);o(W,X),_(X,`mt-2 mb-3 text-base font-semibold`),o(X,f(`Toast 根容器`));let Z=e(`rue:component:anchor`);o(W,Z),t(()=>{let e=h(k,{rows:ie});r(()=>p(e,W,Z))});let Q=g(`h3`,W);o(W,Q),_(Q,`mt-8 mb-3 text-base font-semibold`),o(Q,f(`Toast.Item 单条提示`));let Ce=e(`rue:component:anchor`);o(W,Ce),t(()=>{let e=h(k,{rows:ae});r(()=>p(e,W,Ce))});let $=g(`p`,W);o(W,$),_($,`mt-4 text-sm opacity-70`),o($,f(`Compound 子组件包括`));let we=g(`code`,$);o($,we),o(we,f(`Toast.Icon`)),o($,f(`、`));let Te=g(`code`,$);o($,Te),o(Te,f(`Toast.Content`)),o($,f(`、`));let Ee=g(`code`,$);o($,Ee),o(Ee,f(`Toast.Title`)),o($,f(`、`));let De=g(`code`,$);o($,De),o(De,f(`Toast.Description`)),o($,f(`、`));let Oe=g(`code`,$);o($,Oe),o(Oe,f(`Toast.Action`)),o($,f(`和`));let ke=m($);o($,ke),l(ke,` `);let Ae=g(`code`,$);return o($,Ae),o(Ae,f(`Toast.Close`)),o($,f(`。`)),n})}),a,v),a})};export{j as default};