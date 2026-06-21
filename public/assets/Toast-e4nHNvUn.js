import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,gt as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v,n as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as b,i as x}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as S}from"./Code-4SUSUwRg.js";import{t as C}from"./tabs-Duzh3URW.js";import{t as w}from"./toast-g0GKoDGw.js";import{r as T}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as E}from"./preview-test-gate-nDDBbirJ.js";var D=t=>l(r=>{let o=d(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=d(`div`,o);n(o,s),i(s,`flex flex-wrap items-start justify-between gap-3`);let c=d(`div`,s);n(s,c);let u=d(`h2`,c);n(c,u),i(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(u,p(`# `));let g=a(`rue:slot:anchor`);n(u,g),_(()=>{let n=t.title;e(()=>f(n,u,g))});let v=a(`rue:slot:anchor`);n(c,v),_(()=>{let r=t.summary?l(()=>{let r=h(),o=d(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),_(()=>{let n=t.summary;e(()=>f(n,o,s))}),r}):``;e(()=>f(r,c,v))});let y=a(`rue:component:anchor`);n(o,y),_(()=>{let n=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>f(n,o,y))});let b=a(`rue:slot:anchor`);return n(o,b),_(()=>{let r=t.tab.value===`preview`?E(t.title,t.preview):l(()=>{let r=h(),i=a(`rue:component:anchor`);return n(r,i),_(()=>{let n=m(S,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>f(n,r,i))}),r});e(()=>f(r,o,b))}),o}),O=e=>Array.isArray(e)?e.flatMap(e=>O(e)):e==null?[]:[e],k=t=>l(r=>{let o=d(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=d(`table`,o);n(o,s),i(s,`table table-zebra`);let c=d(`thead`,s);n(s,c);let m=d(`tr`,c);n(c,m);let g=d(`th`,m);n(m,g),n(g,p(`属性`));let v=d(`th`,m);n(m,v),n(v,p(`说明`));let b=d(`th`,m);n(m,b),n(b,p(`类型`));let x=d(`th`,m);n(m,x),n(x,p(`默认值`));let S=d(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return _(()=>{T=y({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{f(l(()=>{let r=h(),i=d(`tr`,r);n(r,i),_(()=>{u(i,`key`,String(t.prop))});let o=d(`td`,i);n(i,o);let s=d(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),_(()=>{let n=t.prop;e(()=>f(n,s,c))});let l=d(`td`,i);n(i,l);let p=a(`rue:slot:anchor`);n(l,p),_(()=>{let n=t.description;e(()=>f(n,l,p))});let m=d(`td`,i);n(i,m);let g=d(`code`,m);n(m,g);let v=a(`rue:slot:anchor`);n(g,v),_(()=>{let n=t.type;e(()=>f(n,g,v))});let y=d(`td`,i);n(i,y);let b=d(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),_(()=>{let n=t.defaultValue;e(()=>f(n,b,x))}),r}),r,i)}})}),o}),A=t=>l(r=>{let s=d(`div`,r);i(s,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`);let c=d(`div`,s);n(s,c),i(c,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),_(()=>{o(c,{minHeight:t.minHeight===void 0?`14rem`:t.minHeight})});let l=a(`rue:slot:anchor`);return n(c,l),_(()=>{let n=O(t.children);e(()=>f(n,c,l))}),s}),ee={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},te=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ne=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],re=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],ie=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],ae=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保持文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],oe=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],se=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],ce=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],le=()=>{let{messageApi:t,contextHolder:o}=v(`useSetup:0:0`,()=>s(()=>{let[e,t]=w.useMessage({getContainer:!1,className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,maxCount:3,duration:4,closable:!0,pauseOnHover:!0});return{messageApi:e,contextHolder:t}}));return l(s=>{let c=h(),g=a(`rue:component:anchor`);return n(c,g),f(m(A,{minHeight:`19rem`,children:l(()=>{let s=h(),c=d(`div`,s);n(s,c),i(c,`absolute left-4 top-4 flex flex-wrap gap-2`);let l=d(`button`,c);n(c,l),u(l,`type`,`button`),i(l,`btn btn-sm`),r(l,`click`,()=>{t.open({key:`deployment-paused`,type:`warning`,title:`Deployment paused`,description:`This one is controlled by messageApi.destroy(key), so it can stay linked to page state.`,duration:0,closable:!0})}),n(l,p(`重新显示受控提示`));let m=d(`button`,c);n(c,m),u(m,`type`,`button`),i(m,`btn btn-sm btn-ghost`),r(m,`click`,()=>{t.destroy(`deployment-paused`)}),n(m,p(`关闭受控提示`));let g=d(`button`,c);n(c,g),u(g,`type`,`button`),i(g,`btn btn-sm btn-outline`),r(g,`click`,()=>{t.success({key:`auto-save-${Date.now()}`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4})}),n(g,p(`重新触发自动关闭`));let v=a(`rue:slot:anchor`);n(s,v),_(()=>{let t=o;e(()=>f(t,s,v))});let y=d(`div`,s);return n(s,y),i(y,`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`),n(y,p(`受控提示使用固定 key 反复显示或销毁；自动关闭提示每次生成新 key，悬停时会暂停倒计时。`)),s})}),c,g),c})},ue=`const [messageApi, contextHolder] = Toast.useMessage({
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
</div>`,j=()=>{let{tabs:r,messageApi:o,messageContextHolder:u}=v(`useSetup:0:0:dup1`,()=>s(()=>{let e={items:v(`ref:1:0`,()=>t(`preview`)),variants:v(`ref:1:1`,()=>t(`preview`)),controlled:v(`ref:1:2`,()=>t(`preview`)),useMessage:v(`ref:1:3`,()=>t(`preview`)),compound:v(`ref:1:4`,()=>t(`preview`)),basic:v(`ref:1:5`,()=>t(`preview`)),placements:v(`ref:1:6`,()=>t(`preview`)),stacked:v(`ref:1:7`,()=>t(`preview`)),inset:v(`ref:1:8`,()=>t(`preview`)),host:v(`ref:1:9`,()=>t(`preview`))},[n,r]=w.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,messageApi:n,messageContextHolder:r}}));return l(t=>{let s=h(),v=a(`rue:component:anchor`);return n(s,v),f(m(T,{children:l(()=>{let t=h(),s=d(`div`,t);n(t,s),i(s,`max-w-none prose prose-sm md:prose-base`);let l=d(`h1`,s);n(s,l),n(l,p(`Toast 轻提示`));let v=d(`p`,s);n(s,v),i(v,`text-sm mt-3 mb-3`),n(v,p(`Toast 根容器负责 placement、stack 和 inset。根容器仍然负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let y=d(`code`,v);n(v,y),n(y,p(`Toast.Item`)),n(v,p(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补充；现在还可以像常见 message API 一样通过`));let S=d(`code`,v);n(v,S),n(S,p(`Toast.useMessage()`)),n(v,p(`拿到`));let C=d(`code`,v);n(v,C),n(C,p(`messageApi`)),n(v,p(`和`));let T=d(`code`,v);n(v,T),n(T,p(`contextHolder`)),n(v,p(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let E=c(v);n(v,E),g(E,` `);let O=d(`code`,v);n(v,O),n(O,p(`getContainer={false}`)),n(v,p(`时才会留在当前 box 里，同时仍然使用 Rue 自己更轻、更靠近页面内容的视觉语气。`));let j=d(`h2`,s);n(s,j),n(j,p(`何时使用`));let M=d(`ul`,s);n(s,M);let de=d(`li`,M);n(M,de),n(de,p(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let N=d(`li`,M);n(M,N),n(N,p(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保持更贴近 Rue 的视觉风格。`));let P=d(`li`,M);n(M,P),n(P,p(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let F=d(`li`,M);n(M,F),n(F,p(`既要支持基础的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let I=a(`rue:component:anchor`);n(s,I),_(()=>{let t=m(D,{title:`Message-like items`,summary:`最直接的语义用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:r.items,preview:()=>b(A,{minHeight:`19rem`,children:[x(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),x(w,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:ne.slice(0,3).map(e=>x(w.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});e(()=>f(t,s,I))});let L=a(`rue:component:anchor`);n(s,L),_(()=>{let t=m(D,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:r.variants,preview:()=>x(`div`,{className:`grid gap-4`,children:re.map(e=>b(A,{minHeight:`11rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:x(w.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:x(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`});e(()=>f(t,s,L))});let R=a(`rue:component:anchor`);n(s,R),_(()=>{let t=m(D,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则提供了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:r.controlled,preview:()=>x(le,{}),code:ue});e(()=>f(t,s,R))});let z=a(`rue:component:anchor`);n(s,z),_(()=>{let t=m(D,{title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:r.useMessage,preview:()=>b(A,{minHeight:`18rem`,children:[b(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{o.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{o.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{o.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{o.destroy()},children:`清空当前消息`})]}),u]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`});e(()=>f(t,s,z))});let B=a(`rue:component:anchor`);n(s,B),_(()=>{let t=m(D,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:r.compound,preview:()=>x(A,{minHeight:`15rem`,children:x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:b(w.Item,{variant:`outline`,className:`max-w-md`,children:[x(w.Icon,{className:`bg-secondary/12 text-secondary`,children:x(`span`,{className:`text-lg font-black`,children:`R`})}),b(w.Content,{children:[x(w.Title,{children:`Workspace synced`}),x(w.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),b(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),x(w.Action,{className:`ml-3 items-start self-start`,children:x(w.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`});e(()=>f(t,s,B))});let V=d(`h2`,s);n(s,V),n(V,p(`支持基础写法`));let H=d(`p`,s);n(s,H),i(H,`text-sm mt-2 mb-4`),n(H,p(`基础的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完整提供。下面这些基础示例 都还在，只是按新的能力层次重新归组了。`));let U=a(`rue:component:anchor`);n(s,U),_(()=>{let t=m(D,{title:`Toast with alert inside`,summary:`展示基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:r.basic,preview:()=>b(A,{children:[x(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),x(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),x(w,{className:`absolute`,inset:16,gap:10,children:x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`});e(()=>f(t,s,U))});let fe=a(`rue:component:anchor`);n(s,fe),_(()=>{let t=m(D,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 支持层仍然都可用，基础布局 API 不需要额外改造。`,tab:r.placements,preview:()=>x(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:te.map(e=>b(A,{minHeight:`9.5rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:x(`div`,{role:`alert`,className:`${ee[e.tone]} shadow-sm`,children:x(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`});e(()=>f(t,s,fe))});let pe=a(`rue:component:anchor`);n(s,pe),_(()=>{let t=m(D,{title:`Stacked toasts`,summary:`基础的多条堆叠示例展示，同时和横向、倒序这些布局控制一起展示。`,tab:r.stacked,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[x(A,{children:b(w,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New mail arrived.`})}),x(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:x(`span`,{children:`Message sent successfully.`})})]})}),x(A,{children:b(w,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`Rollback ready`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});e(()=>f(t,s,pe))});let me=a(`rue:component:anchor`);n(s,me),_(()=>{let t=m(D,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:r.inset,preview:()=>b(A,{minHeight:`15rem`,children:[b(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[x(`div`,{className:`h-10 rounded-box bg-base-200/80`}),b(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[x(`div`,{className:`h-20 rounded-box bg-base-200/70`}),x(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),x(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),b(w,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[x(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:x(`span`,{children:`Layered above the card.`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
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
</Toast>`});e(()=>f(t,s,me))});let he=a(`rue:component:anchor`);n(s,he),_(()=>{let t=m(D,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:r.host,preview:()=>x(A,{children:b(w,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Auto save completed.`})}),x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
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
</Toast>`});e(()=>f(t,s,he))});let W=d(`div`,s);n(s,W),i(W,`my-8 lg:my-12`);let G=d(`h2`,W);n(W,G),i(G,`mt-2 mb-4 text-lg font-semibold`),n(G,p(`API`));let K=d(`h3`,W);n(W,K),i(K,`mt-2 mb-3 text-base font-semibold`),n(K,p(`Toast.useMessage(options)`));let ge=a(`rue:component:anchor`);n(W,ge),_(()=>{let t=m(k,{rows:oe});e(()=>f(t,W,ge))});let q=d(`p`,W);n(W,q),i(q,`mt-4 text-sm opacity-70`),n(q,p(`返回值固定为`));let _e=d(`code`,q);n(q,_e),n(_e,p(`[messageApi, contextHolder]`)),n(q,p(`。为了保持这类 hook 的用法习惯，`));let ve=d(`code`,q);n(q,ve),n(ve,p(`contextHolder`)),n(q,p(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let ye=d(`code`,q);n(q,ye),n(ye,p(`document.body`)),n(q,p(`，传`));let be=d(`code`,q);n(q,be),n(be,p(`getContainer={false}`)),n(q,p(`时才会回到 holder 内。`));let J=d(`h3`,W);n(W,J),i(J,`mt-8 mb-3 text-base font-semibold`),n(J,p(`messageApi`));let xe=a(`rue:component:anchor`);n(W,xe),_(()=>{let t=m(k,{rows:se});e(()=>f(t,W,xe))});let Y=d(`h3`,W);n(W,Y),i(Y,`mt-8 mb-3 text-base font-semibold`),n(Y,p(`ToastMessageConfig`));let Se=a(`rue:component:anchor`);n(W,Se),_(()=>{let t=m(k,{rows:ce});e(()=>f(t,W,Se))});let X=d(`h3`,W);n(W,X),i(X,`mt-2 mb-3 text-base font-semibold`),n(X,p(`Toast 根容器`));let Z=a(`rue:component:anchor`);n(W,Z),_(()=>{let t=m(k,{rows:ie});e(()=>f(t,W,Z))});let Q=d(`h3`,W);n(W,Q),i(Q,`mt-8 mb-3 text-base font-semibold`),n(Q,p(`Toast.Item 单条提示`));let Ce=a(`rue:component:anchor`);n(W,Ce),_(()=>{let t=m(k,{rows:ae});e(()=>f(t,W,Ce))});let $=d(`p`,W);n(W,$),i($,`mt-4 text-sm opacity-70`),n($,p(`Compound 子组件包括`));let we=d(`code`,$);n($,we),n(we,p(`Toast.Icon`)),n($,p(`、`));let Te=d(`code`,$);n($,Te),n(Te,p(`Toast.Content`)),n($,p(`、`));let Ee=d(`code`,$);n($,Ee),n(Ee,p(`Toast.Title`)),n($,p(`、`));let De=d(`code`,$);n($,De),n(De,p(`Toast.Description`)),n($,p(`、`));let Oe=d(`code`,$);n($,Oe),n(Oe,p(`Toast.Action`)),n($,p(`和`));let ke=c($);n($,ke),g(ke,` `);let Ae=d(`code`,$);return n($,Ae),n(Ae,p(`Toast.Close`)),n($,p(`。`)),t})}),s,v),s})};export{j as default};