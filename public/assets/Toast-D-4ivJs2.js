import{$ as e,B as t,C as n,Dt as r,G as i,H as a,K as o,U as s,W as c,Z as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./tabs-BOxm6iIN.js";import{t as w}from"./toast-B2Hu0O8v.js";import{t as T}from"./preview-test-gate-DtKtoe96.js";var E=n=>f(o=>{let l=c(`div`,o);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=c(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=c(`div`,u);t(u,d);let h=c(`h2`,d);t(d,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,i(`# `));let _=a(`rue:slot:anchor`);t(h,_),r(()=>{let e=n.title;g(()=>p(e,h,_))});let v=a(`rue:slot:anchor`);t(d,v),r(()=>{let i=n.summary?f(()=>{let i=s(),o=c(`p`,i);t(i,o),e(o,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return t(o,l),r(()=>{let e=n.summary;g(()=>p(e,o,l))}),i}):``;g(()=>p(i,d,v))});let b=a(`rue:component:anchor`);t(l,b),r(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,l,b))});let x=a(`rue:slot:anchor`);return t(l,x),r(()=>{let e=n.tab.value===`preview`?T(n.title,n.preview):f(()=>{let e=s(),i=a(`rue:component:anchor`);return t(e,i),r(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:n.code});g(()=>p(t,e,i))}),e});g(()=>p(e,l,x))}),l}),D=e=>Array.isArray(e)?e.flatMap(e=>D(e)):e==null?[]:[e],O=n=>f(o=>{let u=c(`div`,o);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=c(`table`,u);t(u,d),e(d,`table table-zebra`);let m=c(`thead`,d);t(d,m);let h=c(`tr`,m);t(m,h);let _=c(`th`,h);t(h,_),t(_,i(`属性`));let y=c(`th`,h);t(h,y),t(y,i(`说明`));let b=c(`th`,h);t(h,b),t(b,i(`类型`));let x=c(`th`,h);t(h,x),t(x,i(`默认值`));let S=c(`tbody`,d);t(d,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,o,u)=>{p(f(()=>{let n=s(),i=c(`tr`,n);t(n,i),r(()=>{l(i,`key`,String(e.prop))});let o=c(`td`,i);t(i,o);let u=c(`code`,o);t(o,u);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=c(`td`,i);t(i,f);let m=a(`rue:slot:anchor`);t(f,m),r(()=>{let t=e.description;g(()=>p(t,f,m))});let h=c(`td`,i);t(i,h);let _=c(`code`,h);t(h,_);let v=a(`rue:slot:anchor`);t(_,v),r(()=>{let t=e.type;g(()=>p(t,_,v))});let y=c(`td`,i);t(i,y);let b=c(`code`,y);t(y,b);let x=a(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),n}),n,i)}})}),u}),k=e=>n(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`},n(`div`,{className:`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`,style:{minHeight:e.minHeight===void 0?`14rem`:e.minHeight}},...D(e.children))),ee={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},te=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ne=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],re=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],ie=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],ae=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保留文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],oe=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],se=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],ce=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],A=()=>{let{tabs:n,controlledOpen:l,controlledToastKey:v,autoToastKey:y,messageApi:C,messageContextHolder:T}=_(`useSetup:0:0`,()=>h(()=>{let e={items:_(`ref:1:0`,()=>d(`preview`)),variants:_(`ref:1:1`,()=>d(`preview`)),controlled:_(`ref:1:2`,()=>d(`preview`)),useMessage:_(`ref:1:3`,()=>d(`preview`)),compound:_(`ref:1:4`,()=>d(`preview`)),basic:_(`ref:1:5`,()=>d(`preview`)),placements:_(`ref:1:6`,()=>d(`preview`)),stacked:_(`ref:1:7`,()=>d(`preview`)),inset:_(`ref:1:8`,()=>d(`preview`)),host:_(`ref:1:9`,()=>d(`preview`))},t=_(`ref:1:10`,()=>d(!0)),n=_(`ref:1:11`,()=>d(0)),r=_(`ref:1:12`,()=>d(0)),[i,a]=w.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,controlledOpen:t,controlledToastKey:n,autoToastKey:r,messageApi:i,messageContextHolder:a}}));return f(d=>{let h=s(),_=a(`rue:component:anchor`);return t(h,_),p(m(S,{children:f(()=>{let d=s(),f=c(`div`,d);t(d,f),e(f,`max-w-none prose prose-sm md:prose-base`);let h=c(`h1`,f);t(f,h),t(h,i(`Toast 轻提示`));let _=c(`p`,f);t(f,_),e(_,`text-sm mt-3 mb-3`),t(_,i(`这次 Toast 不再只有一个“放 alert 的定位壳”。根容器依旧负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let S=c(`code`,_);t(_,S),t(S,i(`Toast.Item`)),t(_,i(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补齐；现在还可以像常见 message API 一样通过`));let D=c(`code`,_);t(_,D),t(D,i(`Toast.useMessage()`)),t(_,i(`拿到`));let A=c(`code`,_);t(_,A),t(A,i(`messageApi`)),t(_,i(`和`));let le=c(`code`,_);t(_,le),t(le,i(`contextHolder`)),t(_,i(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let ue=o(_);t(_,ue),u(ue,` `);let de=c(`code`,_);t(_,de),t(de,i(`getContainer={false}`)),t(_,i(`时才会留在当前 box 里，同时仍然保留 Rue 自己更轻、更靠近页面内容的视觉语气。`));let fe=c(`h2`,f);t(f,fe),t(fe,i(`何时使用`));let j=c(`ul`,f);t(f,j);let M=c(`li`,j);t(j,M),t(M,i(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let N=c(`li`,j);t(j,N),t(N,i(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保留更贴近 Rue 的视觉风格。`));let P=c(`li`,j);t(j,P),t(P,i(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let F=c(`li`,j);t(j,F),t(F,i(`既要兼容旧的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let I=a(`rue:component:anchor`);t(f,I),r(()=>{let e=m(E,{title:`Message-like items`,summary:`最直接的增强用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:n.items,preview:()=>b(k,{minHeight:`19rem`,children:[x(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),x(w,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:ne.slice(0,3).map(e=>x(w.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});g(()=>p(e,f,I))});let L=a(`rue:component:anchor`);t(f,L),r(()=>{let e=m(E,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:n.variants,preview:()=>x(`div`,{className:`grid gap-4`,children:re.map(e=>b(k,{minHeight:`11rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:x(w.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:x(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`});g(()=>p(e,f,L))});let R=a(`rue:component:anchor`);t(f,R),r(()=>{let e=m(E,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则补齐了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:n.controlled,preview:()=>b(k,{minHeight:`19rem`,children:[b(`div`,{className:`absolute left-4 top-4 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm`,onClick:()=>{v.value+=1,l.value=!0},children:`重新显示受控提示`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{y.value+=1},children:`重新触发自动关闭`})]}),b(w,{className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,children:[x(w.Item,{open:l.value,type:`warning`,title:`Deployment paused`,description:`This one is controlled from the outside so you can coordinate with page state.`,closable:!0,onOpenChange:e=>{l.value=e}},v.value),x(w.Item,{type:`success`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4,closable:!0},y.value)]})]}),code:`const controlledOpen = ref(true)
const controlledToastKey = ref(0)
const autoToastKey = ref(0)

<button
  type="button"
  onClick={() => {
    controlledToastKey.value += 1
    controlledOpen.value = true
  }}
>
  重新显示受控提示
</button>

<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 56 }} gap={12}>
  <Toast.Item
    key={controlledToastKey.value}
    open={controlledOpen.value}
    type="warning"
    title="Deployment paused"
    description="This one is controlled from the outside."
    closable
    onOpenChange={nextOpen => {
      controlledOpen.value = nextOpen
    }}
  />
  <Toast.Item
    key={autoToastKey.value}
    type="success"
    title="Auto saved"
    description="This toast closes itself after 4 seconds."
    duration={4}
    closable
  />
</Toast>`});g(()=>p(e,f,R))});let z=a(`rue:component:anchor`);t(f,z),r(()=>{let e=m(E,{title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:n.useMessage,preview:()=>b(k,{minHeight:`18rem`,children:[b(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{C.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{C.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),x(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{C.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{C.destroy()},children:`清空当前消息`})]}),T]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`});g(()=>p(e,f,z))});let B=a(`rue:component:anchor`);t(f,B),r(()=>{let e=m(E,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:n.compound,preview:()=>x(k,{minHeight:`15rem`,children:x(w,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:b(w.Item,{variant:`outline`,className:`max-w-md`,children:[x(w.Icon,{className:`bg-secondary/12 text-secondary`,children:x(`span`,{className:`text-lg font-black`,children:`R`})}),b(w.Content,{children:[x(w.Title,{children:`Workspace synced`}),x(w.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),b(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[x(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),x(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),x(w.Action,{className:`ml-3 items-start self-start`,children:x(w.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`});g(()=>p(e,f,B))});let V=c(`h2`,f);t(f,V),t(V,i(`兼容旧写法`));let H=c(`p`,f);t(f,H),e(H,`text-sm mt-2 mb-4`),t(H,i(`旧的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完全保留。下面这些原有 demo 都还在，只是按新的能力层次重新归组了。`));let U=a(`rue:component:anchor`);t(f,U),r(()=>{let e=m(E,{title:`Toast with alert inside`,summary:`保留原始基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:n.basic,preview:()=>b(k,{children:[x(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),x(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),x(w,{className:`absolute`,inset:16,gap:10,children:x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`});g(()=>p(e,f,U))});let pe=a(`rue:component:anchor`);t(f,pe),r(()=>{let e=m(E,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 兼容层仍然都可用，旧布局 API 不需要迁移。`,tab:n.placements,preview:()=>x(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:te.map(e=>b(k,{minHeight:`9.5rem`,children:[x(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),x(w,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:x(`div`,{role:`alert`,className:`${ee[e.tone]} shadow-sm`,children:x(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`});g(()=>p(e,f,pe))});let me=a(`rue:component:anchor`);t(f,me),r(()=>{let e=m(E,{title:`Stacked toasts`,summary:`原来的多条堆叠示例继续保留，同时和横向、倒序这些布局控制一起展示。`,tab:n.stacked,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[x(k,{children:b(w,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`New mail arrived.`})}),x(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:x(`span`,{children:`Message sent successfully.`})})]})}),x(k,{children:b(w,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`Rollback ready`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});g(()=>p(e,f,me))});let W=a(`rue:component:anchor`);t(f,W),r(()=>{let e=m(E,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:n.inset,preview:()=>b(k,{minHeight:`15rem`,children:[b(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[x(`div`,{className:`h-10 rounded-box bg-base-200/80`}),b(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[x(`div`,{className:`h-20 rounded-box bg-base-200/70`}),x(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),x(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),b(w,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[x(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:x(`span`,{children:`Layered above the card.`})}),x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
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
</Toast>`});g(()=>p(e,f,W))});let he=a(`rue:component:anchor`);t(f,he),r(()=>{let e=m(E,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:n.host,preview:()=>x(k,{children:b(w,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[x(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:x(`span`,{children:`Auto save completed.`})}),x(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:x(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
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
</Toast>`});g(()=>p(e,f,he))});let G=c(`div`,f);t(f,G),e(G,`my-8 lg:my-12`);let K=c(`h2`,G);t(G,K),e(K,`mt-2 mb-4 text-lg font-semibold`),t(K,i(`API`));let q=c(`h3`,G);t(G,q),e(q,`mt-2 mb-3 text-base font-semibold`),t(q,i(`Toast.useMessage(options)`));let ge=a(`rue:component:anchor`);t(G,ge),r(()=>{let e=m(O,{rows:oe});g(()=>p(e,G,ge))});let J=c(`p`,G);t(G,J),e(J,`mt-4 text-sm opacity-70`),t(J,i(`返回值固定为`));let _e=c(`code`,J);t(J,_e),t(_e,i(`[messageApi, contextHolder]`)),t(J,i(`。为了保持这类 hook 的用法习惯，`));let ve=c(`code`,J);t(J,ve),t(ve,i(`contextHolder`)),t(J,i(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let ye=c(`code`,J);t(J,ye),t(ye,i(`document.body`)),t(J,i(`，传`));let be=c(`code`,J);t(J,be),t(be,i(`getContainer={false}`)),t(J,i(`时才会回到 holder 内。`));let Y=c(`h3`,G);t(G,Y),e(Y,`mt-8 mb-3 text-base font-semibold`),t(Y,i(`messageApi`));let xe=a(`rue:component:anchor`);t(G,xe),r(()=>{let e=m(O,{rows:se});g(()=>p(e,G,xe))});let X=c(`h3`,G);t(G,X),e(X,`mt-8 mb-3 text-base font-semibold`),t(X,i(`ToastMessageConfig`));let Se=a(`rue:component:anchor`);t(G,Se),r(()=>{let e=m(O,{rows:ce});g(()=>p(e,G,Se))});let Z=c(`h3`,G);t(G,Z),e(Z,`mt-2 mb-3 text-base font-semibold`),t(Z,i(`Toast 根容器`));let Ce=a(`rue:component:anchor`);t(G,Ce),r(()=>{let e=m(O,{rows:ie});g(()=>p(e,G,Ce))});let Q=c(`h3`,G);t(G,Q),e(Q,`mt-8 mb-3 text-base font-semibold`),t(Q,i(`Toast.Item 单条提示`));let we=a(`rue:component:anchor`);t(G,we),r(()=>{let e=m(O,{rows:ae});g(()=>p(e,G,we))});let $=c(`p`,G);t(G,$),e($,`mt-4 text-sm opacity-70`),t($,i(`Compound 子组件包括`));let Te=c(`code`,$);t($,Te),t(Te,i(`Toast.Icon`)),t($,i(`、`));let Ee=c(`code`,$);t($,Ee),t(Ee,i(`Toast.Content`)),t($,i(`、`));let De=c(`code`,$);t($,De),t(De,i(`Toast.Title`)),t($,i(`、`));let Oe=c(`code`,$);t($,Oe),t(Oe,i(`Toast.Description`)),t($,i(`、`));let ke=c(`code`,$);t($,ke),t(ke,i(`Toast.Action`)),t($,i(`和`));let Ae=o($);t($,Ae),u(Ae,` `);let je=c(`code`,$);return t($,je),t(je,i(`Toast.Close`)),t($,i(`。`)),d})}),h,_),h})};export{A as default};