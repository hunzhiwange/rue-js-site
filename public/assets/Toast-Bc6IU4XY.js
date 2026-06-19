import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,pt as p,st as m,t as h,tt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v,n as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as b,i as x}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as S}from"./Code-BIscIyEp.js";import{t as C}from"./tabs-CZWMQq5i.js";import{t as w}from"./toast-fFSvtYyU.js";import{r as T}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as E}from"./preview-test-gate-DumhDfV7.js";var D=a=>l(o=>{let c=s(`div`,o);u(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=s(`div`,c);i(c,d),u(d,`flex flex-wrap items-start justify-between gap-3`);let p=s(`div`,d);i(d,p);let m=s(`h2`,p);i(p,m),u(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,g(`# `));let _=t(`rue:slot:anchor`);i(m,_),n(()=>{let e=a.title;r(()=>f(e,m,_))});let v=t(`rue:slot:anchor`);i(p,v),n(()=>{let o=a.summary?l(()=>{let o=e(),c=s(`p`,o);i(o,c),u(c,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.summary;r(()=>f(e,c,l))}),o}):``;r(()=>f(o,p,v))});let y=t(`rue:component:anchor`);i(c,y),n(()=>{let e=h(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,c,y))});let b=t(`rue:slot:anchor`);return i(c,b),n(()=>{let o=a.tab.value===`preview`?E(a.title,a.preview):l(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(S,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>f(e,o,s))}),o});r(()=>f(o,c,b))}),c}),O=e=>Array.isArray(e)?e.flatMap(e=>O(e)):e==null?[]:[e],k=a=>l(o=>{let c=s(`div`,o);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,c);i(c,d),u(d,`table table-zebra`);let p=s(`thead`,d);i(d,p);let h=s(`tr`,p);i(p,h);let _=s(`th`,h);i(h,_),i(_,g(`属性`));let v=s(`th`,h);i(h,v),i(v,g(`说明`));let b=s(`th`,h);i(h,b),i(b,g(`类型`));let x=s(`th`,h);i(h,x),i(x,g(`默认值`));let S=s(`tbody`,d);i(d,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=y({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,o,c,u,d)=>{f(l(()=>{let o=e(),c=s(`tr`,o);i(o,c),n(()=>{m(c,`key`,String(a.prop))});let l=s(`td`,c);i(c,l);let u=s(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>f(e,u,d))});let p=s(`td`,c);i(c,p);let h=t(`rue:slot:anchor`);i(p,h),n(()=>{let e=a.description;r(()=>f(e,p,h))});let g=s(`td`,c);i(c,g);let _=s(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>f(e,_,v))});let y=s(`td`,c);i(c,y);let b=s(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>f(e,b,x))}),o}),o,c)}})}),c}),A=e=>l(a=>{let o=s(`div`,a);u(o,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`);let c=s(`div`,o);i(o,c),u(c,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),n(()=>{p(c,{minHeight:e.minHeight===void 0?`14rem`:e.minHeight})});let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let t=O(e.children);r(()=>f(t,c,l))}),o}),ee={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},te=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ne=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],re=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],ie=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],ae=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保留文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],oe=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],se=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],ce=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],le=()=>{let{messageApi:c,contextHolder:d}=v(`useSetup:0:0`,()=>o(()=>{let[e,t]=w.useMessage({getContainer:!1,className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,maxCount:3,duration:4,closable:!0,pauseOnHover:!0});return{messageApi:e,contextHolder:t}}));return l(o=>{let p=e(),_=t(`rue:component:anchor`);return i(p,_),f(h(A,{minHeight:`19rem`,children:l(()=>{let o=e(),l=s(`div`,o);i(o,l),u(l,`absolute left-4 top-4 flex flex-wrap gap-2`);let p=s(`button`,l);i(l,p),m(p,`type`,`button`),u(p,`btn btn-sm`),a(p,`click`,()=>{c.open({key:`deployment-paused`,type:`warning`,title:`Deployment paused`,description:`This one is controlled by messageApi.destroy(key), so it can stay linked to page state.`,duration:0,closable:!0})}),i(p,g(`重新显示受控提示`));let h=s(`button`,l);i(l,h),m(h,`type`,`button`),u(h,`btn btn-sm btn-ghost`),a(h,`click`,()=>{c.destroy(`deployment-paused`)}),i(h,g(`关闭受控提示`));let _=s(`button`,l);i(l,_),m(_,`type`,`button`),u(_,`btn btn-sm btn-outline`),a(_,`click`,()=>{c.success({key:`auto-save-${Date.now()}`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4})}),i(_,g(`重新触发自动关闭`));let v=t(`rue:slot:anchor`);i(o,v),n(()=>{let e=d;r(()=>f(e,o,v))});let y=s(`div`,o);return i(o,y),u(y,`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`),i(y,g(`受控提示使用固定 key 反复显示或销毁；自动关闭提示每次生成新 key，悬停时会暂停倒计时。`)),o})}),p,_),p})},ue=`const [messageApi, contextHolder] = Toast.useMessage({
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
</div>`,j=()=>{let{tabs:a,messageApi:p,messageContextHolder:m}=v(`useSetup:0:0:dup1`,()=>o(()=>{let e={items:v(`ref:1:0`,()=>_(`preview`)),variants:v(`ref:1:1`,()=>_(`preview`)),controlled:v(`ref:1:2`,()=>_(`preview`)),useMessage:v(`ref:1:3`,()=>_(`preview`)),compound:v(`ref:1:4`,()=>_(`preview`)),basic:v(`ref:1:5`,()=>_(`preview`)),placements:v(`ref:1:6`,()=>_(`preview`)),stacked:v(`ref:1:7`,()=>_(`preview`)),inset:v(`ref:1:8`,()=>_(`preview`)),host:v(`ref:1:9`,()=>_(`preview`))},[t,n]=w.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,messageApi:t,messageContextHolder:n}}));return l(o=>{let _=e(),v=t(`rue:component:anchor`);return i(_,v),f(h(T,{children:l(()=>{let o=e(),l=s(`div`,o);i(o,l),u(l,`max-w-none prose prose-sm md:prose-base`);let _=s(`h1`,l);i(l,_),i(_,g(`Toast 轻提示`));let v=s(`p`,l);i(l,v),u(v,`text-sm mt-3 mb-3`),i(v,g(`这次 Toast 不再只有一个“放 alert 的定位壳”。根容器依旧负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let y=s(`code`,v);i(v,y),i(y,g(`Toast.Item`)),i(v,g(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补齐；现在还可以像常见 message API 一样通过`));let S=s(`code`,v);i(v,S),i(S,g(`Toast.useMessage()`)),i(v,g(`拿到`));let C=s(`code`,v);i(v,C),i(C,g(`messageApi`)),i(v,g(`和`));let T=s(`code`,v);i(v,T),i(T,g(`contextHolder`)),i(v,g(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let E=d(v);i(v,E),c(E,` `);let O=s(`code`,v);i(v,O),i(O,g(`getContainer={false}`)),i(v,g(`时才会留在当前 box 里，同时仍然保留 Rue 自己更轻、更靠近页面内容的视觉语气。`));let j=s(`h2`,l);i(l,j),i(j,g(`何时使用`));let M=s(`ul`,l);i(l,M);let de=s(`li`,M);i(M,de),i(de,g(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let N=s(`li`,M);i(M,N),i(N,g(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保留更贴近 Rue 的视觉风格。`));let P=s(`li`,M);i(M,P),i(P,g(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let F=s(`li`,M);i(M,F),i(F,g(`既要兼容旧的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let I=t(`rue:component:anchor`);i(l,I),n(()=>{let e=h(D,{title:`Message-like items`,summary:`最直接的增强用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:a.items,preview:()=>b(A,{minHeight:`19rem`,children:[x(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),x(w,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:ne.slice(0,3).map(e=>x(w.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});r(()=>f(e,l,I))});let L=t(`rue:component:anchor`);i(l,L),n(()=>{let e=h(D,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:a.variants,preview:()=>x(`div`,{className:`grid gap-4`,children:re.map(e=>b(A,{minHeight:`11rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:x(w.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:x(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`});r(()=>f(e,l,L))});let R=t(`rue:component:anchor`);i(l,R),n(()=>{let e=h(D,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则补齐了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:a.controlled,preview:()=>x(le,{}),code:ue});r(()=>f(e,l,R))});let z=t(`rue:component:anchor`);i(l,z),n(()=>{let e=h(D,{title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:a.useMessage,preview:()=>b(A,{minHeight:`18rem`,children:[b(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{p.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{p.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{p.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{p.destroy()},children:`清空当前消息`})]}),m]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`});r(()=>f(e,l,z))});let B=t(`rue:component:anchor`);i(l,B),n(()=>{let e=h(D,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:a.compound,preview:()=>x(A,{minHeight:`15rem`,children:x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:b(w.Item,{variant:`outline`,className:`max-w-md`,children:[x(w.Icon,{className:`bg-secondary/12 text-secondary`,children:x(`span`,{className:`text-lg font-black`,children:`R`})}),b(w.Content,{children:[x(w.Title,{children:`Workspace synced`}),x(w.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),b(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),x(w.Action,{className:`ml-3 items-start self-start`,children:x(w.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`});r(()=>f(e,l,B))});let V=s(`h2`,l);i(l,V),i(V,g(`兼容旧写法`));let H=s(`p`,l);i(l,H),u(H,`text-sm mt-2 mb-4`),i(H,g(`旧的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完全保留。下面这些原有 demo 都还在，只是按新的能力层次重新归组了。`));let U=t(`rue:component:anchor`);i(l,U),n(()=>{let e=h(D,{title:`Toast with alert inside`,summary:`保留原始基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:a.basic,preview:()=>b(A,{children:[x(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),x(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),x(w,{className:`absolute`,inset:16,gap:10,children:x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`});r(()=>f(e,l,U))});let fe=t(`rue:component:anchor`);i(l,fe),n(()=>{let e=h(D,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 兼容层仍然都可用，旧布局 API 不需要迁移。`,tab:a.placements,preview:()=>x(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:te.map(e=>b(A,{minHeight:`9.5rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:x(`div`,{role:`alert`,className:`${ee[e.tone]} shadow-sm`,children:x(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`});r(()=>f(e,l,fe))});let pe=t(`rue:component:anchor`);i(l,pe),n(()=>{let e=h(D,{title:`Stacked toasts`,summary:`原来的多条堆叠示例继续保留，同时和横向、倒序这些布局控制一起展示。`,tab:a.stacked,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[x(A,{children:b(w,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New mail arrived.`})}),x(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:x(`span`,{children:`Message sent successfully.`})})]})}),x(A,{children:b(w,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`Rollback ready`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});r(()=>f(e,l,pe))});let me=t(`rue:component:anchor`);i(l,me),n(()=>{let e=h(D,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:a.inset,preview:()=>b(A,{minHeight:`15rem`,children:[b(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[x(`div`,{className:`h-10 rounded-box bg-base-200/80`}),b(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[x(`div`,{className:`h-20 rounded-box bg-base-200/70`}),x(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),x(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),b(w,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[x(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:x(`span`,{children:`Layered above the card.`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
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
</Toast>`});r(()=>f(e,l,me))});let he=t(`rue:component:anchor`);i(l,he),n(()=>{let e=h(D,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:a.host,preview:()=>x(A,{children:b(w,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Auto save completed.`})}),x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
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
</Toast>`});r(()=>f(e,l,he))});let W=s(`div`,l);i(l,W),u(W,`my-8 lg:my-12`);let G=s(`h2`,W);i(W,G),u(G,`mt-2 mb-4 text-lg font-semibold`),i(G,g(`API`));let K=s(`h3`,W);i(W,K),u(K,`mt-2 mb-3 text-base font-semibold`),i(K,g(`Toast.useMessage(options)`));let ge=t(`rue:component:anchor`);i(W,ge),n(()=>{let e=h(k,{rows:oe});r(()=>f(e,W,ge))});let q=s(`p`,W);i(W,q),u(q,`mt-4 text-sm opacity-70`),i(q,g(`返回值固定为`));let _e=s(`code`,q);i(q,_e),i(_e,g(`[messageApi, contextHolder]`)),i(q,g(`。为了保持这类 hook 的用法习惯，`));let ve=s(`code`,q);i(q,ve),i(ve,g(`contextHolder`)),i(q,g(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let ye=s(`code`,q);i(q,ye),i(ye,g(`document.body`)),i(q,g(`，传`));let be=s(`code`,q);i(q,be),i(be,g(`getContainer={false}`)),i(q,g(`时才会回到 holder 内。`));let J=s(`h3`,W);i(W,J),u(J,`mt-8 mb-3 text-base font-semibold`),i(J,g(`messageApi`));let xe=t(`rue:component:anchor`);i(W,xe),n(()=>{let e=h(k,{rows:se});r(()=>f(e,W,xe))});let Y=s(`h3`,W);i(W,Y),u(Y,`mt-8 mb-3 text-base font-semibold`),i(Y,g(`ToastMessageConfig`));let Se=t(`rue:component:anchor`);i(W,Se),n(()=>{let e=h(k,{rows:ce});r(()=>f(e,W,Se))});let X=s(`h3`,W);i(W,X),u(X,`mt-2 mb-3 text-base font-semibold`),i(X,g(`Toast 根容器`));let Z=t(`rue:component:anchor`);i(W,Z),n(()=>{let e=h(k,{rows:ie});r(()=>f(e,W,Z))});let Q=s(`h3`,W);i(W,Q),u(Q,`mt-8 mb-3 text-base font-semibold`),i(Q,g(`Toast.Item 单条提示`));let Ce=t(`rue:component:anchor`);i(W,Ce),n(()=>{let e=h(k,{rows:ae});r(()=>f(e,W,Ce))});let $=s(`p`,W);i(W,$),u($,`mt-4 text-sm opacity-70`),i($,g(`Compound 子组件包括`));let we=s(`code`,$);i($,we),i(we,g(`Toast.Icon`)),i($,g(`、`));let Te=s(`code`,$);i($,Te),i(Te,g(`Toast.Content`)),i($,g(`、`));let Ee=s(`code`,$);i($,Ee),i(Ee,g(`Toast.Title`)),i($,g(`、`));let De=s(`code`,$);i($,De),i(De,g(`Toast.Description`)),i($,g(`、`));let Oe=s(`code`,$);i($,Oe),i(Oe,g(`Toast.Action`)),i($,g(`和`));let ke=d($);i($,ke),c(ke,` `);let Ae=s(`code`,$);return i($,Ae),i(Ae,g(`Toast.Close`)),i($,g(`。`)),o})}),_,v),_})};export{j as default};