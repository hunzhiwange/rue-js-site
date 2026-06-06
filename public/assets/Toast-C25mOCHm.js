import{$ as e,Kt as t,Lt as n,Q as r,S as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,s as m,t as h,tt as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _,n as v}from"./vapor-helpers-vapor-CJFAWine.js";import{a as y,i as b}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as x}from"./Code-Ds9lKLk6.js";import{t as S}from"./tabs-DSy0eY-V.js";import{t as C}from"./toast-Cl1VD9hw.js";import{n as w}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as T}from"./preview-test-gate-CxeqnU1g.js";var E=t=>d(n=>{let i=e(`div`,n);l(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,i);o(i,f),l(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);o(f,p);let g=e(`h2`,p);o(p,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(g,u(`# `));let _=c(`rue:slot:anchor`);o(g,_),s(()=>{let e=t.title;a(()=>m(e,g,_))});let v=c(`rue:slot:anchor`);o(p,v),s(()=>{let n=t.summary?d(()=>{let n=r(),i=e(`p`,n);o(n,i),l(i,`m-0 text-sm opacity-70`);let u=c(`rue:slot:anchor`);return o(i,u),s(()=>{let e=t.summary;a(()=>m(e,i,u))}),n}):``;a(()=>m(n,p,v))});let y=c(`rue:component:anchor`);o(i,y),s(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});a(()=>m(e,i,y))});let b=c(`rue:slot:anchor`);return o(i,b),s(()=>{let e=t.tab.value===`preview`?T(t.title,t.preview):d(()=>{let e=r(),n=c(`rue:component:anchor`);return o(e,n),s(()=>{let r=h(x,{className:`mt-2`,lang:`tsx`,code:t.code});a(()=>m(r,e,n))}),e});a(()=>m(e,i,b))}),i}),D=e=>Array.isArray(e)?e.flatMap(e=>D(e)):e==null?[]:[e],O=t=>d(n=>{let i=e(`div`,n);l(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`,i);o(i,f),l(f,`table table-zebra`);let h=e(`thead`,f);o(f,h);let g=e(`tr`,h);o(h,g);let _=e(`th`,g);o(g,_),o(_,u(`属性`));let y=e(`th`,g);o(g,y),o(y,u(`说明`));let b=e(`th`,g);o(g,b),o(b,u(`类型`));let x=e(`th`,g);o(g,x),o(x,u(`默认值`));let S=e(`tbody`,f);o(f,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,i,l,u)=>{m(d(()=>{let n=r(),i=e(`tr`,n);o(n,i),s(()=>{p(i,`key`,String(t.prop))});let l=e(`td`,i);o(i,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>m(e,u,d))});let f=e(`td`,i);o(i,f);let h=c(`rue:slot:anchor`);o(f,h),s(()=>{let e=t.description;a(()=>m(e,f,h))});let g=e(`td`,i);o(i,g);let _=e(`code`,g);o(g,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>m(e,_,v))});let y=e(`td`,i);o(i,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>m(e,b,x))}),n}),n,i)}})}),i}),k=e=>i(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`},i(`div`,{className:`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`,style:{minHeight:e.minHeight===void 0?`14rem`:e.minHeight}},...D(e.children))),ee={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},te=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ne=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],re=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],ie=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],ae=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保留文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],oe=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],se=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],ce=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],A=()=>{let{tabs:i,controlledOpen:p,controlledToastKey:v,autoToastKey:x,messageApi:S,messageContextHolder:T}=_(`useSetup:0:0`,()=>t(()=>{let e={items:_(`ref:1:0`,()=>n(`preview`)),variants:_(`ref:1:1`,()=>n(`preview`)),controlled:_(`ref:1:2`,()=>n(`preview`)),useMessage:_(`ref:1:3`,()=>n(`preview`)),compound:_(`ref:1:4`,()=>n(`preview`)),basic:_(`ref:1:5`,()=>n(`preview`)),placements:_(`ref:1:6`,()=>n(`preview`)),stacked:_(`ref:1:7`,()=>n(`preview`)),inset:_(`ref:1:8`,()=>n(`preview`)),host:_(`ref:1:9`,()=>n(`preview`))},t=_(`ref:1:10`,()=>n(!0)),r=_(`ref:1:11`,()=>n(0)),i=_(`ref:1:12`,()=>n(0)),[a,o]=C.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,controlledOpen:t,controlledToastKey:r,autoToastKey:i,messageApi:a,messageContextHolder:o}}));return d(t=>{let n=r(),_=c(`rue:component:anchor`);return o(n,_),m(h(w,{children:d(()=>{let t=r(),n=e(`div`,t);o(t,n),l(n,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,n);o(n,d),o(d,u(`Toast 轻提示`));let _=e(`p`,n);o(n,_),l(_,`text-sm mt-3 mb-3`),o(_,u(`这次 Toast 不再只有一个“放 alert 的定位壳”。根容器依旧负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let w=e(`code`,_);o(_,w),o(w,u(`Toast.Item`)),o(_,u(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补齐；现在还可以像常见 message API 一样通过`));let D=e(`code`,_);o(_,D),o(D,u(`Toast.useMessage()`)),o(_,u(`拿到`));let A=e(`code`,_);o(_,A),o(A,u(`messageApi`)),o(_,u(`和`));let le=e(`code`,_);o(_,le),o(le,u(`contextHolder`)),o(_,u(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let ue=g(_);o(_,ue),f(ue,` `);let de=e(`code`,_);o(_,de),o(de,u(`getContainer={false}`)),o(_,u(`时才会留在当前 box 里，同时仍然保留 Rue 自己更轻、更靠近页面内容的视觉语气。`));let fe=e(`h2`,n);o(n,fe),o(fe,u(`何时使用`));let j=e(`ul`,n);o(n,j);let M=e(`li`,j);o(j,M),o(M,u(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let N=e(`li`,j);o(j,N),o(N,u(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保留更贴近 Rue 的视觉风格。`));let P=e(`li`,j);o(j,P),o(P,u(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let F=e(`li`,j);o(j,F),o(F,u(`既要兼容旧的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let I=c(`rue:component:anchor`);o(n,I),s(()=>{let e=h(E,{title:`Message-like items`,summary:`最直接的增强用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:i.items,preview:()=>y(k,{minHeight:`19rem`,children:[b(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),b(C,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:ne.slice(0,3).map(e=>b(C.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});a(()=>m(e,n,I))});let L=c(`rue:component:anchor`);o(n,L),s(()=>{let e=h(E,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:i.variants,preview:()=>b(`div`,{className:`grid gap-4`,children:re.map(e=>y(k,{minHeight:`11rem`,children:[b(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),b(C,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:b(C.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:b(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`});a(()=>m(e,n,L))});let R=c(`rue:component:anchor`);o(n,R),s(()=>{let e=h(E,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则补齐了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:i.controlled,preview:()=>y(k,{minHeight:`19rem`,children:[y(`div`,{className:`absolute left-4 top-4 flex flex-wrap gap-2`,children:[b(`button`,{type:`button`,className:`btn btn-sm`,onClick:()=>{v.value+=1,p.value=!0},children:`重新显示受控提示`}),b(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{x.value+=1},children:`重新触发自动关闭`})]}),y(C,{className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,children:[b(C.Item,{open:p.value,type:`warning`,title:`Deployment paused`,description:`This one is controlled from the outside so you can coordinate with page state.`,closable:!0,onOpenChange:e=>{p.value=e}},v.value),b(C.Item,{type:`success`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4,closable:!0},x.value)]})]}),code:`const controlledOpen = ref(true)
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
</Toast>`});a(()=>m(e,n,R))});let z=c(`rue:component:anchor`);o(n,z),s(()=>{let e=h(E,{title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:i.useMessage,preview:()=>y(k,{minHeight:`18rem`,children:[y(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[b(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{S.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),b(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{S.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),b(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{S.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),b(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{S.destroy()},children:`清空当前消息`})]}),T]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`});a(()=>m(e,n,z))});let B=c(`rue:component:anchor`);o(n,B),s(()=>{let e=h(E,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:i.compound,preview:()=>b(k,{minHeight:`15rem`,children:b(C,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:y(C.Item,{variant:`outline`,className:`max-w-md`,children:[b(C.Icon,{className:`bg-secondary/12 text-secondary`,children:b(`span`,{className:`text-lg font-black`,children:`R`})}),y(C.Content,{children:[b(C.Title,{children:`Workspace synced`}),b(C.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),y(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[b(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),b(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),b(C.Action,{className:`ml-3 items-start self-start`,children:b(C.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`});a(()=>m(e,n,B))});let V=e(`h2`,n);o(n,V),o(V,u(`兼容旧写法`));let H=e(`p`,n);o(n,H),l(H,`text-sm mt-2 mb-4`),o(H,u(`旧的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完全保留。下面这些原有 demo 都还在，只是按新的能力层次重新归组了。`));let U=c(`rue:component:anchor`);o(n,U),s(()=>{let e=h(E,{title:`Toast with alert inside`,summary:`保留原始基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:i.basic,preview:()=>y(k,{children:[b(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),b(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),b(C,{className:`absolute`,inset:16,gap:10,children:b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`});a(()=>m(e,n,U))});let pe=c(`rue:component:anchor`);o(n,pe),s(()=>{let e=h(E,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 兼容层仍然都可用，旧布局 API 不需要迁移。`,tab:i.placements,preview:()=>b(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:te.map(e=>y(k,{minHeight:`9.5rem`,children:[b(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),b(C,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:b(`div`,{role:`alert`,className:`${ee[e.tone]} shadow-sm`,children:b(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`});a(()=>m(e,n,pe))});let me=c(`rue:component:anchor`);o(n,me),s(()=>{let e=h(E,{title:`Stacked toasts`,summary:`原来的多条堆叠示例继续保留，同时和横向、倒序这些布局控制一起展示。`,tab:i.stacked,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(k,{children:y(C,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`New mail arrived.`})}),b(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:b(`span`,{children:`Message sent successfully.`})})]})}),b(k,{children:y(C,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[b(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:b(`span`,{children:`Rollback ready`})}),b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});a(()=>m(e,n,me))});let W=c(`rue:component:anchor`);o(n,W),s(()=>{let e=h(E,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:i.inset,preview:()=>y(k,{minHeight:`15rem`,children:[y(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[b(`div`,{className:`h-10 rounded-box bg-base-200/80`}),y(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[b(`div`,{className:`h-20 rounded-box bg-base-200/70`}),b(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),b(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),y(C,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[b(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:b(`span`,{children:`Layered above the card.`})}),b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
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
</Toast>`});a(()=>m(e,n,W))});let he=c(`rue:component:anchor`);o(n,he),s(()=>{let e=h(E,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:i.host,preview:()=>b(k,{children:y(C,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`Auto save completed.`})}),b(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:b(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
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
</Toast>`});a(()=>m(e,n,he))});let G=e(`div`,n);o(n,G),l(G,`my-8 lg:my-12`);let K=e(`h2`,G);o(G,K),l(K,`mt-2 mb-4 text-lg font-semibold`),o(K,u(`API`));let q=e(`h3`,G);o(G,q),l(q,`mt-2 mb-3 text-base font-semibold`),o(q,u(`Toast.useMessage(options)`));let ge=c(`rue:component:anchor`);o(G,ge),s(()=>{let e=h(O,{rows:oe});a(()=>m(e,G,ge))});let J=e(`p`,G);o(G,J),l(J,`mt-4 text-sm opacity-70`),o(J,u(`返回值固定为`));let _e=e(`code`,J);o(J,_e),o(_e,u(`[messageApi, contextHolder]`)),o(J,u(`。为了保持这类 hook 的用法习惯，`));let ve=e(`code`,J);o(J,ve),o(ve,u(`contextHolder`)),o(J,u(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let ye=e(`code`,J);o(J,ye),o(ye,u(`document.body`)),o(J,u(`，传`));let be=e(`code`,J);o(J,be),o(be,u(`getContainer={false}`)),o(J,u(`时才会回到 holder 内。`));let Y=e(`h3`,G);o(G,Y),l(Y,`mt-8 mb-3 text-base font-semibold`),o(Y,u(`messageApi`));let xe=c(`rue:component:anchor`);o(G,xe),s(()=>{let e=h(O,{rows:se});a(()=>m(e,G,xe))});let X=e(`h3`,G);o(G,X),l(X,`mt-8 mb-3 text-base font-semibold`),o(X,u(`ToastMessageConfig`));let Se=c(`rue:component:anchor`);o(G,Se),s(()=>{let e=h(O,{rows:ce});a(()=>m(e,G,Se))});let Z=e(`h3`,G);o(G,Z),l(Z,`mt-2 mb-3 text-base font-semibold`),o(Z,u(`Toast 根容器`));let Ce=c(`rue:component:anchor`);o(G,Ce),s(()=>{let e=h(O,{rows:ie});a(()=>m(e,G,Ce))});let Q=e(`h3`,G);o(G,Q),l(Q,`mt-8 mb-3 text-base font-semibold`),o(Q,u(`Toast.Item 单条提示`));let we=c(`rue:component:anchor`);o(G,we),s(()=>{let e=h(O,{rows:ae});a(()=>m(e,G,we))});let $=e(`p`,G);o(G,$),l($,`mt-4 text-sm opacity-70`),o($,u(`Compound 子组件包括`));let Te=e(`code`,$);o($,Te),o(Te,u(`Toast.Icon`)),o($,u(`、`));let Ee=e(`code`,$);o($,Ee),o(Ee,u(`Toast.Content`)),o($,u(`、`));let De=e(`code`,$);o($,De),o(De,u(`Toast.Title`)),o($,u(`、`));let Oe=e(`code`,$);o($,Oe),o(Oe,u(`Toast.Description`)),o($,u(`、`));let ke=e(`code`,$);o($,ke),o(ke,u(`Toast.Action`)),o($,u(`和`));let Ae=g($);o($,Ae),f(Ae,` `);let je=e(`code`,$);return o($,je),o(je,u(`Toast.Close`)),o($,u(`。`)),t})}),n,_),n})};export{A as default};