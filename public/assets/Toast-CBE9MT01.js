import{At as e,Cn as t,Ct as n,Mt as r,Tt as i,dt as a,ft as o,ht as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v,n as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as b}from"./Code-DhoWkRkB.js";import{n as x,t as S}from"./src-CCTNpCXV.js";import{t as C}from"./tabs-B1XdBEJF.js";import{t as w}from"./toast-DwHBW6xt.js";import{r as T}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as E}from"./preview-test-gate-DVT0twjZ.js";var D=e=>h(t=>{let n=d(`div`,t);i(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=d(`div`,n);f(n,r),i(r,`flex flex-wrap items-start justify-between gap-3`);let s=d(`div`,r);f(r,s);let l=d(`h2`,s);f(s,l),i(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),f(l,c(`# `));let u=a(`rue:slot:anchor`);f(l,u),p(()=>{let t=e.title;m(()=>g(t,l,u))});let v=a(`rue:slot:anchor`);f(s,v),p(()=>{let t=e.summary?h(()=>{let t=o(),n=d(`p`,t);f(t,n),i(n,`m-0 text-sm opacity-70`);let r=a(`rue:slot:anchor`);return f(n,r),p(()=>{let t=e.summary;m(()=>g(t,n,r))}),t}):``;m(()=>g(t,s,v))});let y=a(`rue:component:anchor`);f(n,y),p(()=>{let t=_(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});m(()=>g(t,n,y))});let x=a(`rue:slot:anchor`);return f(n,x),p(()=>{let t=e.tab.value===`preview`?E(e.title,e.preview):h(()=>{let t=o(),n=a(`rue:component:anchor`);return f(t,n),p(()=>{let r=_(b,{className:`mt-2`,lang:`tsx`,code:e.code});m(()=>g(r,t,n))}),t});m(()=>g(t,n,x))}),n}),O=e=>Array.isArray(e)?e.flatMap(e=>O(e)):e==null?[]:[e],k=e=>h(t=>{let r=d(`div`,t);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=d(`table`,r);f(r,s),i(s,`table table-zebra`);let l=d(`thead`,s);f(s,l);let u=d(`tr`,l);f(l,u);let _=d(`th`,u);f(u,_),f(_,c(`属性`));let v=d(`th`,u);f(u,v),f(v,c(`说明`));let b=d(`th`,u);f(u,b),f(b,c(`类型`));let x=d(`th`,u);f(u,x),f(x,c(`默认值`));let S=d(`tbody`,s);f(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);f(S,C),f(S,w);let T=new Map;return p(()=>{T=y({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,t,r,i,s)=>{g(h(()=>{let t=o(),r=d(`tr`,t);f(t,r),p(()=>{n(r,`key`,String(e.prop))});let i=d(`td`,r);f(r,i);let s=d(`code`,i);f(i,s);let c=a(`rue:slot:anchor`);f(s,c),p(()=>{let t=e.prop;m(()=>g(t,s,c))});let l=d(`td`,r);f(r,l);let u=a(`rue:slot:anchor`);f(l,u),p(()=>{let t=e.description;m(()=>g(t,l,u))});let h=d(`td`,r);f(r,h);let _=d(`code`,h);f(h,_);let v=a(`rue:slot:anchor`);f(_,v),p(()=>{let t=e.type;m(()=>g(t,_,v))});let y=d(`td`,r);f(r,y);let b=d(`code`,y);f(y,b);let x=a(`rue:slot:anchor`);return f(b,x),p(()=>{let t=e.defaultValue;m(()=>g(t,b,x))}),t}),t,r)}})}),r}),A=t=>h(n=>{let r=d(`div`,n);i(r,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`);let o=d(`div`,r);f(r,o),i(o,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),p(()=>{let n={minHeight:t.minHeight===void 0?`14rem`:t.minHeight};e(o,n)});let s=a(`rue:slot:anchor`);return f(o,s),p(()=>{let e=O(t.children);m(()=>g(e,o,s))}),r}),ee={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},te=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ne=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],re=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],ie=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],ae=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保持文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],oe=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],se=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],ce=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],le=()=>{let{messageApi:e,contextHolder:r}=v(`useSetup:0:0`,()=>t(()=>{let[e,t]=w.useMessage({getContainer:!1,className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,maxCount:3,duration:4,closable:!0,pauseOnHover:!0});return{messageApi:e,contextHolder:t}}));return h(t=>{let s=o(),u=a(`rue:component:anchor`);return f(s,u),g(_(A,{minHeight:`19rem`,children:h(()=>{let t=o(),s=d(`div`,t);f(t,s),i(s,`absolute left-4 top-4 flex flex-wrap gap-2`);let u=d(`button`,s);f(s,u),n(u,`type`,`button`),i(u,`btn btn-sm`),l(u,`click`,()=>{e.open({key:`deployment-paused`,type:`warning`,title:`Deployment paused`,description:`This one is controlled by messageApi.destroy(key), so it can stay linked to page state.`,duration:0,closable:!0})}),f(u,c(`重新显示受控提示`));let h=d(`button`,s);f(s,h),n(h,`type`,`button`),i(h,`btn btn-sm btn-ghost`),l(h,`click`,()=>{e.destroy(`deployment-paused`)}),f(h,c(`关闭受控提示`));let _=d(`button`,s);f(s,_),n(_,`type`,`button`),i(_,`btn btn-sm btn-outline`),l(_,`click`,()=>{e.success({key:`auto-save-${Date.now()}`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4})}),f(_,c(`重新触发自动关闭`));let v=a(`rue:slot:anchor`);f(t,v),p(()=>{let e=r;m(()=>g(e,t,v))});let y=d(`div`,t);return f(t,y),i(y,`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`),f(y,c(`受控提示使用固定 key 反复显示或销毁；自动关闭提示每次生成新 key，悬停时会暂停倒计时。`)),t})}),s,u),s})},ue=`const [messageApi, contextHolder] = Toast.useMessage({
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
</div>`,j=()=>{let{tabs:e,messageApi:n,messageContextHolder:l}=v(`useSetup:0:0:dup1`,()=>t(()=>{let e={items:v(`ref:1:0`,()=>u(`preview`)),variants:v(`ref:1:1`,()=>u(`preview`)),controlled:v(`ref:1:2`,()=>u(`preview`)),useMessage:v(`ref:1:3`,()=>u(`preview`)),compound:v(`ref:1:4`,()=>u(`preview`)),basic:v(`ref:1:5`,()=>u(`preview`)),placements:v(`ref:1:6`,()=>u(`preview`)),stacked:v(`ref:1:7`,()=>u(`preview`)),inset:v(`ref:1:8`,()=>u(`preview`)),host:v(`ref:1:9`,()=>u(`preview`))},[t,n]=w.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,messageApi:t,messageContextHolder:n}}));return h(t=>{let u=o(),v=a(`rue:component:anchor`);return f(u,v),g(_(T,{children:h(()=>{let t=o(),u=d(`div`,t);f(t,u),i(u,`max-w-none prose prose-sm md:prose-base`);let h=d(`h1`,u);f(u,h),f(h,c(`Toast 轻提示`));let v=d(`p`,u);f(u,v),i(v,`text-sm mt-3 mb-3`),f(v,c(`Toast 根容器负责 placement、stack 和 inset。根容器仍然负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let y=d(`code`,v);f(v,y),f(y,c(`Toast.Item`)),f(v,c(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补充；现在还可以像常见 message API 一样通过`));let b=d(`code`,v);f(v,b),f(b,c(`Toast.useMessage()`)),f(v,c(`拿到`));let C=d(`code`,v);f(v,C),f(C,c(`messageApi`)),f(v,c(`和`));let T=d(`code`,v);f(v,T),f(T,c(`contextHolder`)),f(v,c(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let E=s(v);f(v,E),r(E,` `);let O=d(`code`,v);f(v,O),f(O,c(`getContainer={false}`)),f(v,c(`时才会留在当前 box 里，同时仍然使用 Rue 自己更轻、更靠近页面内容的视觉语气。`));let j=d(`h2`,u);f(u,j),f(j,c(`何时使用`));let M=d(`ul`,u);f(u,M);let de=d(`li`,M);f(M,de),f(de,c(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let N=d(`li`,M);f(M,N),f(N,c(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保持更贴近 Rue 的视觉风格。`));let P=d(`li`,M);f(M,P),f(P,c(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let F=d(`li`,M);f(M,F),f(F,c(`既要支持基础的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let I=a(`rue:component:anchor`);f(u,I),p(()=>{let t=_(D,{title:`Message-like items`,summary:`最直接的语义用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:e.items,preview:()=>x(A,{minHeight:`19rem`,children:[S(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),S(w,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:ne.slice(0,3).map(e=>S(w.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});m(()=>g(t,u,I))});let L=a(`rue:component:anchor`);f(u,L),p(()=>{let t=_(D,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:e.variants,preview:()=>S(`div`,{className:`grid gap-4`,children:re.map(e=>x(A,{minHeight:`11rem`,children:[S(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),S(w,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:S(w.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:S(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`});m(()=>g(t,u,L))});let R=a(`rue:component:anchor`);f(u,R),p(()=>{let t=_(D,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则提供了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:e.controlled,preview:()=>S(le,{}),code:ue});m(()=>g(t,u,R))});let z=a(`rue:component:anchor`);f(u,z),p(()=>{let t=_(D,{title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:e.useMessage,preview:()=>x(A,{minHeight:`18rem`,children:[x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{n.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),S(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{n.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),S(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{n.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{n.destroy()},children:`清空当前消息`})]}),l]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`});m(()=>g(t,u,z))});let B=a(`rue:component:anchor`);f(u,B),p(()=>{let t=_(D,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:e.compound,preview:()=>S(A,{minHeight:`15rem`,children:S(w,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:x(w.Item,{variant:`outline`,className:`max-w-md`,children:[S(w.Icon,{className:`bg-secondary/12 text-secondary`,children:S(`span`,{className:`text-lg font-black`,children:`R`})}),x(w.Content,{children:[S(w.Title,{children:`Workspace synced`}),S(w.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),x(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),S(w.Action,{className:`ml-3 items-start self-start`,children:S(w.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`});m(()=>g(t,u,B))});let V=d(`h2`,u);f(u,V),f(V,c(`支持基础写法`));let H=d(`p`,u);f(u,H),i(H,`text-sm mt-2 mb-4`),f(H,c(`基础的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完整提供。下面这些基础示例 都还在，只是按新的能力层次重新归组了。`));let U=a(`rue:component:anchor`);f(u,U),p(()=>{let t=_(D,{title:`Toast with alert inside`,summary:`展示基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:e.basic,preview:()=>x(A,{children:[S(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),S(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),S(w,{className:`absolute`,inset:16,gap:10,children:S(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:S(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`});m(()=>g(t,u,U))});let fe=a(`rue:component:anchor`);f(u,fe),p(()=>{let t=_(D,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 支持层仍然都可用，基础布局 API 不需要额外改造。`,tab:e.placements,preview:()=>S(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:te.map(e=>x(A,{minHeight:`9.5rem`,children:[S(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),S(w,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:S(`div`,{role:`alert`,className:`${ee[e.tone]} shadow-sm`,children:S(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`});m(()=>g(t,u,fe))});let pe=a(`rue:component:anchor`);f(u,pe),p(()=>{let t=_(D,{title:`Stacked toasts`,summary:`基础的多条堆叠示例展示，同时和横向、倒序这些布局控制一起展示。`,tab:e.stacked,preview:()=>x(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[S(A,{children:x(w,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[S(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:S(`span`,{children:`New mail arrived.`})}),S(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:S(`span`,{children:`Message sent successfully.`})})]})}),S(A,{children:x(w,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[S(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:S(`span`,{children:`Rollback ready`})}),S(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:S(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});m(()=>g(t,u,pe))});let me=a(`rue:component:anchor`);f(u,me),p(()=>{let t=_(D,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:e.inset,preview:()=>x(A,{minHeight:`15rem`,children:[x(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[S(`div`,{className:`h-10 rounded-box bg-base-200/80`}),x(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[S(`div`,{className:`h-20 rounded-box bg-base-200/70`}),S(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),S(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),x(w,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[S(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:S(`span`,{children:`Layered above the card.`})}),S(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:S(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
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
</Toast>`});m(()=>g(t,u,me))});let he=a(`rue:component:anchor`);f(u,he),p(()=>{let t=_(D,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:e.host,preview:()=>S(A,{children:x(w,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[S(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:S(`span`,{children:`Auto save completed.`})}),S(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:S(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
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
</Toast>`});m(()=>g(t,u,he))});let W=d(`div`,u);f(u,W),i(W,`my-8 lg:my-12`);let G=d(`h2`,W);f(W,G),i(G,`mt-2 mb-4 text-lg font-semibold`),f(G,c(`API`));let K=d(`h3`,W);f(W,K),i(K,`mt-2 mb-3 text-base font-semibold`),f(K,c(`Toast.useMessage(options)`));let ge=a(`rue:component:anchor`);f(W,ge),p(()=>{let e=_(k,{rows:oe});m(()=>g(e,W,ge))});let q=d(`p`,W);f(W,q),i(q,`mt-4 text-sm opacity-70`),f(q,c(`返回值固定为`));let _e=d(`code`,q);f(q,_e),f(_e,c(`[messageApi, contextHolder]`)),f(q,c(`。为了保持这类 hook 的用法习惯，`));let ve=d(`code`,q);f(q,ve),f(ve,c(`contextHolder`)),f(q,c(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let ye=d(`code`,q);f(q,ye),f(ye,c(`document.body`)),f(q,c(`，传`));let be=d(`code`,q);f(q,be),f(be,c(`getContainer={false}`)),f(q,c(`时才会回到 holder 内。`));let J=d(`h3`,W);f(W,J),i(J,`mt-8 mb-3 text-base font-semibold`),f(J,c(`messageApi`));let xe=a(`rue:component:anchor`);f(W,xe),p(()=>{let e=_(k,{rows:se});m(()=>g(e,W,xe))});let Y=d(`h3`,W);f(W,Y),i(Y,`mt-8 mb-3 text-base font-semibold`),f(Y,c(`ToastMessageConfig`));let Se=a(`rue:component:anchor`);f(W,Se),p(()=>{let e=_(k,{rows:ce});m(()=>g(e,W,Se))});let X=d(`h3`,W);f(W,X),i(X,`mt-2 mb-3 text-base font-semibold`),f(X,c(`Toast 根容器`));let Z=a(`rue:component:anchor`);f(W,Z),p(()=>{let e=_(k,{rows:ie});m(()=>g(e,W,Z))});let Q=d(`h3`,W);f(W,Q),i(Q,`mt-8 mb-3 text-base font-semibold`),f(Q,c(`Toast.Item 单条提示`));let Ce=a(`rue:component:anchor`);f(W,Ce),p(()=>{let e=_(k,{rows:ae});m(()=>g(e,W,Ce))});let $=d(`p`,W);f(W,$),i($,`mt-4 text-sm opacity-70`),f($,c(`Compound 子组件包括`));let we=d(`code`,$);f($,we),f(we,c(`Toast.Icon`)),f($,c(`、`));let Te=d(`code`,$);f($,Te),f(Te,c(`Toast.Content`)),f($,c(`、`));let Ee=d(`code`,$);f($,Ee),f(Ee,c(`Toast.Title`)),f($,c(`、`));let De=d(`code`,$);f($,De),f(De,c(`Toast.Description`)),f($,c(`、`));let Oe=d(`code`,$);f($,Oe),f(Oe,c(`Toast.Action`)),f($,c(`和`));let ke=s($);f($,ke),r(ke,` `);let Ae=d(`code`,$);return f($,Ae),f(Ae,c(`Toast.Close`)),f($,c(`。`)),t})}),u,v),u})};export{j as default};