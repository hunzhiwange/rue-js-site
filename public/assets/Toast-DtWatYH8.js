import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,dt as l,et as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v,n as y}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as b,i as x}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as S}from"./Code-CZqShVUj.js";import{t as C}from"./tabs-BBuGEPV7.js";import{t as w}from"./toast-8sEQ18k7.js";import{r as T}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as E}from"./preview-test-gate-PvTX1w6L.js";var D=r=>d(c=>{let l=i(`div`,c);g(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),g(u,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,u);n(u,f);let p=i(`h2`,f);n(f,p),g(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,e(`# `));let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let e=r.title;t(()=>h(e,p,m))});let v=a(`rue:slot:anchor`);n(f,v),o(()=>{let e=r.summary?d(()=>{let e=s(),c=i(`p`,e);n(e,c),g(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>h(e,c,l))}),e}):``;t(()=>h(e,f,v))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=_(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>h(e,l,y))});let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?E(r.title,r.preview):d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=_(S,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>h(n,e,i))}),e});t(()=>h(e,l,b))}),l}),O=e=>Array.isArray(e)?e.flatMap(e=>O(e)):e==null?[]:[e],k=r=>d(l=>{let u=i(`div`,l);g(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),g(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let m=i(`tr`,p);n(p,m);let _=i(`th`,m);n(m,_),n(_,e(`属性`));let v=i(`th`,m);n(m,v),n(v,e(`说明`));let b=i(`th`,m);n(m,b),n(b,e(`类型`));let x=i(`th`,m);n(m,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=y({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{h(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>h(n,d,f))});let p=i(`td`,l);n(l,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>h(n,p,m))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>h(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>h(n,b,x))}),r}),r,l)}})}),u}),A=e=>d(r=>{let s=i(`div`,r);g(s,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`);let c=i(`div`,s);n(s,c),g(c,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),o(()=>{l(c,{minHeight:e.minHeight===void 0?`14rem`:e.minHeight})});let u=a(`rue:slot:anchor`);return n(c,u),o(()=>{let n=O(e.children);t(()=>h(n,c,u))}),s}),ee={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},te=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ne=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],re=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],ie=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],ae=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保留文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],oe=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],se=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],ce=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],le=()=>{let{messageApi:r,contextHolder:l}=v(`useSetup:0:0`,()=>m(()=>{let[e,t]=w.useMessage({getContainer:!1,className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,maxCount:3,duration:4,closable:!0,pauseOnHover:!0});return{messageApi:e,contextHolder:t}}));return d(u=>{let f=s(),m=a(`rue:component:anchor`);return n(f,m),h(_(A,{minHeight:`19rem`,children:d(()=>{let u=s(),d=i(`div`,u);n(u,d),g(d,`absolute left-4 top-4 flex flex-wrap gap-2`);let f=i(`button`,d);n(d,f),c(f,`type`,`button`),g(f,`btn btn-sm`),p(f,`click`,()=>{r.open({key:`deployment-paused`,type:`warning`,title:`Deployment paused`,description:`This one is controlled by messageApi.destroy(key), so it can stay linked to page state.`,duration:0,closable:!0})}),n(f,e(`重新显示受控提示`));let m=i(`button`,d);n(d,m),c(m,`type`,`button`),g(m,`btn btn-sm btn-ghost`),p(m,`click`,()=>{r.destroy(`deployment-paused`)}),n(m,e(`关闭受控提示`));let _=i(`button`,d);n(d,_),c(_,`type`,`button`),g(_,`btn btn-sm btn-outline`),p(_,`click`,()=>{r.success({key:`auto-save-${Date.now()}`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4})}),n(_,e(`重新触发自动关闭`));let v=a(`rue:slot:anchor`);n(u,v),o(()=>{let e=l;t(()=>h(e,u,v))});let y=i(`div`,u);return n(u,y),g(y,`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`),n(y,e(`受控提示使用固定 key 反复显示或销毁；自动关闭提示每次生成新 key，悬停时会暂停倒计时。`)),u})}),f,m),f})},ue=`const [messageApi, contextHolder] = Toast.useMessage({
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
</div>`,j=()=>{let{tabs:c,messageApi:l,messageContextHolder:p}=v(`useSetup:0:0:dup1`,()=>m(()=>{let e={items:v(`ref:1:0`,()=>r(`preview`)),variants:v(`ref:1:1`,()=>r(`preview`)),controlled:v(`ref:1:2`,()=>r(`preview`)),useMessage:v(`ref:1:3`,()=>r(`preview`)),compound:v(`ref:1:4`,()=>r(`preview`)),basic:v(`ref:1:5`,()=>r(`preview`)),placements:v(`ref:1:6`,()=>r(`preview`)),stacked:v(`ref:1:7`,()=>r(`preview`)),inset:v(`ref:1:8`,()=>r(`preview`)),host:v(`ref:1:9`,()=>r(`preview`))},[t,n]=w.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,messageApi:t,messageContextHolder:n}}));return d(r=>{let m=s(),v=a(`rue:component:anchor`);return n(m,v),h(_(T,{children:d(()=>{let r=s(),d=i(`div`,r);n(r,d),g(d,`max-w-none prose prose-sm md:prose-base`);let m=i(`h1`,d);n(d,m),n(m,e(`Toast 轻提示`));let v=i(`p`,d);n(d,v),g(v,`text-sm mt-3 mb-3`),n(v,e(`这次 Toast 不再只有一个“放 alert 的定位壳”。根容器依旧负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let y=i(`code`,v);n(v,y),n(y,e(`Toast.Item`)),n(v,e(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补齐；现在还可以像常见 message API 一样通过`));let S=i(`code`,v);n(v,S),n(S,e(`Toast.useMessage()`)),n(v,e(`拿到`));let C=i(`code`,v);n(v,C),n(C,e(`messageApi`)),n(v,e(`和`));let T=i(`code`,v);n(v,T),n(T,e(`contextHolder`)),n(v,e(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let E=u(v);n(v,E),f(E,` `);let O=i(`code`,v);n(v,O),n(O,e(`getContainer={false}`)),n(v,e(`时才会留在当前 box 里，同时仍然保留 Rue 自己更轻、更靠近页面内容的视觉语气。`));let j=i(`h2`,d);n(d,j),n(j,e(`何时使用`));let M=i(`ul`,d);n(d,M);let de=i(`li`,M);n(M,de),n(de,e(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let N=i(`li`,M);n(M,N),n(N,e(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保留更贴近 Rue 的视觉风格。`));let P=i(`li`,M);n(M,P),n(P,e(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let F=i(`li`,M);n(M,F),n(F,e(`既要兼容旧的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let I=a(`rue:component:anchor`);n(d,I),o(()=>{let e=_(D,{title:`Message-like items`,summary:`最直接的增强用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:c.items,preview:()=>b(A,{minHeight:`19rem`,children:[x(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),x(w,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:ne.slice(0,3).map(e=>x(w.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});t(()=>h(e,d,I))});let L=a(`rue:component:anchor`);n(d,L),o(()=>{let e=_(D,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:c.variants,preview:()=>x(`div`,{className:`grid gap-4`,children:re.map(e=>b(A,{minHeight:`11rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:x(w.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:x(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`});t(()=>h(e,d,L))});let R=a(`rue:component:anchor`);n(d,R),o(()=>{let e=_(D,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则补齐了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:c.controlled,preview:()=>x(le,{}),code:ue});t(()=>h(e,d,R))});let z=a(`rue:component:anchor`);n(d,z),o(()=>{let e=_(D,{title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:c.useMessage,preview:()=>b(A,{minHeight:`18rem`,children:[b(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{l.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{l.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{l.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{l.destroy()},children:`清空当前消息`})]}),p]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`});t(()=>h(e,d,z))});let B=a(`rue:component:anchor`);n(d,B),o(()=>{let e=_(D,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:c.compound,preview:()=>x(A,{minHeight:`15rem`,children:x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:b(w.Item,{variant:`outline`,className:`max-w-md`,children:[x(w.Icon,{className:`bg-secondary/12 text-secondary`,children:x(`span`,{className:`text-lg font-black`,children:`R`})}),b(w.Content,{children:[x(w.Title,{children:`Workspace synced`}),x(w.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),b(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),x(w.Action,{className:`ml-3 items-start self-start`,children:x(w.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`});t(()=>h(e,d,B))});let V=i(`h2`,d);n(d,V),n(V,e(`兼容旧写法`));let H=i(`p`,d);n(d,H),g(H,`text-sm mt-2 mb-4`),n(H,e(`旧的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完全保留。下面这些原有 demo 都还在，只是按新的能力层次重新归组了。`));let U=a(`rue:component:anchor`);n(d,U),o(()=>{let e=_(D,{title:`Toast with alert inside`,summary:`保留原始基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:c.basic,preview:()=>b(A,{children:[x(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),x(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),x(w,{className:`absolute`,inset:16,gap:10,children:x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`});t(()=>h(e,d,U))});let fe=a(`rue:component:anchor`);n(d,fe),o(()=>{let e=_(D,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 兼容层仍然都可用，旧布局 API 不需要迁移。`,tab:c.placements,preview:()=>x(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:te.map(e=>b(A,{minHeight:`9.5rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:x(`div`,{role:`alert`,className:`${ee[e.tone]} shadow-sm`,children:x(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`});t(()=>h(e,d,fe))});let pe=a(`rue:component:anchor`);n(d,pe),o(()=>{let e=_(D,{title:`Stacked toasts`,summary:`原来的多条堆叠示例继续保留，同时和横向、倒序这些布局控制一起展示。`,tab:c.stacked,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[x(A,{children:b(w,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New mail arrived.`})}),x(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:x(`span`,{children:`Message sent successfully.`})})]})}),x(A,{children:b(w,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`Rollback ready`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});t(()=>h(e,d,pe))});let me=a(`rue:component:anchor`);n(d,me),o(()=>{let e=_(D,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:c.inset,preview:()=>b(A,{minHeight:`15rem`,children:[b(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[x(`div`,{className:`h-10 rounded-box bg-base-200/80`}),b(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[x(`div`,{className:`h-20 rounded-box bg-base-200/70`}),x(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),x(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),b(w,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[x(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:x(`span`,{children:`Layered above the card.`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
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
</Toast>`});t(()=>h(e,d,me))});let he=a(`rue:component:anchor`);n(d,he),o(()=>{let e=_(D,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:c.host,preview:()=>x(A,{children:b(w,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Auto save completed.`})}),x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
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
</Toast>`});t(()=>h(e,d,he))});let W=i(`div`,d);n(d,W),g(W,`my-8 lg:my-12`);let G=i(`h2`,W);n(W,G),g(G,`mt-2 mb-4 text-lg font-semibold`),n(G,e(`API`));let K=i(`h3`,W);n(W,K),g(K,`mt-2 mb-3 text-base font-semibold`),n(K,e(`Toast.useMessage(options)`));let ge=a(`rue:component:anchor`);n(W,ge),o(()=>{let e=_(k,{rows:oe});t(()=>h(e,W,ge))});let q=i(`p`,W);n(W,q),g(q,`mt-4 text-sm opacity-70`),n(q,e(`返回值固定为`));let _e=i(`code`,q);n(q,_e),n(_e,e(`[messageApi, contextHolder]`)),n(q,e(`。为了保持这类 hook 的用法习惯，`));let ve=i(`code`,q);n(q,ve),n(ve,e(`contextHolder`)),n(q,e(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let ye=i(`code`,q);n(q,ye),n(ye,e(`document.body`)),n(q,e(`，传`));let be=i(`code`,q);n(q,be),n(be,e(`getContainer={false}`)),n(q,e(`时才会回到 holder 内。`));let J=i(`h3`,W);n(W,J),g(J,`mt-8 mb-3 text-base font-semibold`),n(J,e(`messageApi`));let xe=a(`rue:component:anchor`);n(W,xe),o(()=>{let e=_(k,{rows:se});t(()=>h(e,W,xe))});let Y=i(`h3`,W);n(W,Y),g(Y,`mt-8 mb-3 text-base font-semibold`),n(Y,e(`ToastMessageConfig`));let Se=a(`rue:component:anchor`);n(W,Se),o(()=>{let e=_(k,{rows:ce});t(()=>h(e,W,Se))});let X=i(`h3`,W);n(W,X),g(X,`mt-2 mb-3 text-base font-semibold`),n(X,e(`Toast 根容器`));let Z=a(`rue:component:anchor`);n(W,Z),o(()=>{let e=_(k,{rows:ie});t(()=>h(e,W,Z))});let Q=i(`h3`,W);n(W,Q),g(Q,`mt-8 mb-3 text-base font-semibold`),n(Q,e(`Toast.Item 单条提示`));let Ce=a(`rue:component:anchor`);n(W,Ce),o(()=>{let e=_(k,{rows:ae});t(()=>h(e,W,Ce))});let $=i(`p`,W);n(W,$),g($,`mt-4 text-sm opacity-70`),n($,e(`Compound 子组件包括`));let we=i(`code`,$);n($,we),n(we,e(`Toast.Icon`)),n($,e(`、`));let Te=i(`code`,$);n($,Te),n(Te,e(`Toast.Content`)),n($,e(`、`));let Ee=i(`code`,$);n($,Ee),n(Ee,e(`Toast.Title`)),n($,e(`、`));let De=i(`code`,$);n($,De),n(De,e(`Toast.Description`)),n($,e(`、`));let Oe=i(`code`,$);n($,Oe),n(Oe,e(`Toast.Action`)),n($,e(`和`));let ke=u($);n($,ke),f(ke,` `);let Ae=i(`code`,$);return n($,Ae),n(Ae,e(`Toast.Close`)),n($,e(`。`)),r})}),m,v),m})};export{j as default};