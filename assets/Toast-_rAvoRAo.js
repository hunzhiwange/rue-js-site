import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m,v as h,z as g}from"./vapor-runtime-Bp8DIxJg.js";import{a as _,n as v}from"./vapor-helpers-vapor-D3i3KBBg.js";import{n as y,t as b}from"./src-Cl1DK5fX.js";import{n as x}from"./SidebarPlaygroundDesign-CIhn6bFh.js";import{t as S}from"./Code-D55WiaDx.js";import{t as C}from"./tabs-CrC7r95z.js";import{t as w}from"./toast-B6foIcG2.js";var T=a=>l(s=>{let d=r(`div`,s);n(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,d);i(d,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,f);i(f,h);let g=r(`h2`,h);i(h,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),c(()=>{let e=a.title;m(()=>u(e,g,_))});let v=e(`rue:slot:anchor`);i(h,v),c(()=>{let o=a.summary?l(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),c(()=>{let e=a.summary;m(()=>u(e,s,l))}),o}):``;m(()=>u(o,h,v))});let y=e(`rue:component:anchor`);i(d,y),c(()=>{let e=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});m(()=>u(e,d,y))});let b=e(`rue:slot:anchor`);return i(d,b),c(()=>{let n=a.tab.value===`preview`?a.preview():l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(S,{className:`mt-2`,lang:`tsx`,code:a.code});m(()=>u(e,n,r))}),n});m(()=>u(n,d,b))}),d}),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null?[]:[e],D=a=>l(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let h=r(`thead`,p);i(p,h);let g=r(`tr`,h);i(h,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,d,f)=>{u(l(()=>{let a=t(),o=r(`tr`,a);i(a,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);i(o,l);let d=r(`code`,l);i(l,d);let f=e(`rue:slot:anchor`);i(d,f),c(()=>{let e=n.prop;m(()=>u(e,d,f))});let p=r(`td`,o);i(o,p);let h=e(`rue:slot:anchor`);i(p,h),c(()=>{let e=n.description;m(()=>u(e,p,h))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),c(()=>{let e=n.type;m(()=>u(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;m(()=>u(e,b,x))}),a}),a,o)}})}),f}),O=e=>h(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm`},h(`div`,{className:`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`,style:{minHeight:e.minHeight===void 0?`14rem`:e.minHeight}},...E(e.children))),ee={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},te=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ne=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],re=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],ie=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],ae=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保留文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],oe=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],se=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],ce=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],le=()=>{let{tabs:h,controlledOpen:v,controlledToastKey:S,autoToastKey:C,messageApi:E,messageContextHolder:le}=_(`useSetup:0:0`,()=>d(()=>{let e={items:_(`ref:1:0`,()=>f(`preview`)),variants:_(`ref:1:1`,()=>f(`preview`)),controlled:_(`ref:1:2`,()=>f(`preview`)),useMessage:_(`ref:1:3`,()=>f(`preview`)),compound:_(`ref:1:4`,()=>f(`preview`)),basic:_(`ref:1:5`,()=>f(`preview`)),placements:_(`ref:1:6`,()=>f(`preview`)),stacked:_(`ref:1:7`,()=>f(`preview`)),inset:_(`ref:1:8`,()=>f(`preview`)),host:_(`ref:1:9`,()=>f(`preview`))},t=_(`ref:1:10`,()=>f(!0)),n=_(`ref:1:11`,()=>f(0)),r=_(`ref:1:12`,()=>f(0)),[i,a]=w.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return{tabs:e,controlledOpen:t,controlledToastKey:n,autoToastKey:r,messageApi:i,messageContextHolder:a}}));return l(d=>{let f=t(),_=e(`rue:component:anchor`);return i(f,_),u(p(x,{children:l(()=>{let l=t(),d=r(`div`,l);i(l,d),n(d,`max-w-none prose prose-sm md:prose-base`);let f=r(`h1`,d);i(d,f),i(f,o(`Toast 轻提示`));let _=r(`p`,d);i(d,_),n(_,`text-sm mt-3 mb-3`),i(_,o(`这次 Toast 不再只有一个“放 alert 的定位壳”。根容器依旧负责 placement、stack 和 inset， 但单条提示现在可以直接用`));let x=r(`code`,_);i(_,x),i(x,o(`Toast.Item`)),i(_,o(`写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补齐；现在还可以像常见 message API 一样通过`));let ue=r(`code`,_);i(_,ue),i(ue,o(`Toast.useMessage()`)),i(_,o(`拿到`));let de=r(`code`,_);i(_,de),i(de,o(`messageApi`)),i(_,o(`和`));let fe=r(`code`,_);i(_,fe),i(fe,o(`contextHolder`)),i(_,o(`， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传`));let pe=g(_);i(_,pe),a(pe,` `);let me=r(`code`,_);i(_,me),i(me,o(`getContainer={false}`)),i(_,o(`时才会留在当前 box 里，同时仍然保留 Rue 自己更轻、更靠近页面内容的视觉语气。`));let k=r(`div`,d);i(d,k),n(k,`text-sm flex flex-wrap gap-4`);let A=r(`a`,k);i(k,A),s(A,`href`,`https://daisyui.com/components/toast/`),s(A,`target`,`_blank`),i(A,o(`查看 Toast 静态样式`));let j=r(`h2`,d);i(d,j),i(j,o(`何时使用`));let M=r(`ul`,d);i(d,M);let N=r(`li`,M);i(M,N),i(N,o(`需要在页面局部提供轻量反馈，但不想上升成全局通知系统。`));let P=r(`li`,M);i(M,P),i(P,o(`希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保留更贴近 Rue 的视觉风格。`));let F=r(`li`,M);i(M,F),i(F,o(`希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。`));let I=r(`li`,M);i(M,I),i(I,o(`既要兼容旧的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。`));let L=e(`rue:component:anchor`);i(d,L),c(()=>{let e=p(T,{title:`Message-like items`,summary:`最直接的增强用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:h.items,preview:()=>y(O,{minHeight:`19rem`,children:[b(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10`}),b(w,{className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:ne.slice(0,3).map(e=>b(w.Item,{type:e.type,title:e.title,description:e.description,closable:!0},e.title))})]}),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});m(()=>u(e,d,L))});let R=e(`rue:component:anchor`);i(d,R),c(()=>{let e=p(T,{title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:h.variants,preview:()=>b(`div`,{className:`grid gap-4`,children:re.map(e=>y(O,{minHeight:`11rem`,children:[b(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),b(w,{className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:b(w.Item,{type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:b(`button`,{type:`button`,className:`btn btn-xs btn-ghost`,children:`Undo`}),closable:!0})})]},e.label))}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`});m(()=>u(e,d,R))});let z=e(`rue:component:anchor`);i(d,z),c(()=>{let e=p(T,{title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则补齐了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:h.controlled,preview:()=>y(O,{minHeight:`19rem`,children:[y(`div`,{className:`absolute left-4 top-4 flex flex-wrap gap-2`,children:[b(`button`,{type:`button`,className:`btn btn-sm`,onClick:()=>{S.value+=1,v.value=!0},children:`重新显示受控提示`}),b(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{C.value+=1},children:`重新触发自动关闭`})]}),y(w,{className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,children:[b(w.Item,{open:v.value,type:`warning`,title:`Deployment paused`,description:`This one is controlled from the outside so you can coordinate with page state.`,closable:!0,onOpenChange:e=>{v.value=e}},S.value),b(w.Item,{type:`success`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4,closable:!0},C.value)]})]}),code:`const controlledOpen = ref(true)
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
</Toast>`});m(()=>u(e,d,z))});let B=e(`rue:component:anchor`);i(d,B),c(()=>{let e=p(T,{title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:h.useMessage,preview:()=>y(O,{minHeight:`18rem`,children:[y(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[b(`button`,{type:`button`,className:`btn btn-sm btn-primary`,onClick:()=>{E.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})},children:`10 秒成功提示`}),b(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{E.loading({key:`publish`,content:`Publishing changes to preview...`})},children:`开始发布`}),b(`button`,{type:`button`,className:`btn btn-sm btn-outline`,onClick:()=>{E.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})},children:`更新同 key`}),b(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,onClick:()=>{E.destroy()},children:`清空当前消息`})]}),le]}),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`});m(()=>u(e,d,B))});let V=e(`rue:component:anchor`);i(d,V),c(()=>{let e=p(T,{title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:h.compound,preview:()=>b(O,{minHeight:`15rem`,children:b(w,{className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:y(w.Item,{variant:`outline`,className:`max-w-md`,children:[b(w.Icon,{className:`bg-secondary/12 text-secondary`,children:b(`span`,{className:`text-lg font-black`,children:`R`})}),y(w.Content,{children:[b(w.Title,{children:`Workspace synced`}),b(w.Description,{children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`}),y(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[b(`button`,{type:`button`,className:`btn btn-sm btn-primary btn-soft`,children:`Open changelog`}),b(`button`,{type:`button`,className:`btn btn-sm btn-ghost`,children:`Later`})]})]}),b(w.Action,{className:`ml-3 items-start self-start`,children:b(w.Close,{className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})})]})})}),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`});m(()=>u(e,d,V))});let he=r(`h2`,d);i(d,he),i(he,o(`兼容旧写法`));let H=r(`p`,d);i(d,H),n(H,`text-sm mt-2 mb-4`),i(H,o(`旧的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完全保留。下面这些原有 demo 都还在，只是按新的能力层次重新归组了。`));let ge=e(`rue:component:anchor`);i(d,ge),c(()=>{let e=p(T,{title:`Toast with alert inside`,summary:`保留原始基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:h.basic,preview:()=>y(O,{children:[b(`div`,{className:`absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10`}),b(`div`,{className:`absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70`,children:`当前页面内容`}),b(w,{className:`absolute`,inset:16,gap:10,children:b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`New message arrived.`})})})]}),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`});m(()=>u(e,d,ge))});let U=e(`rue:component:anchor`);i(d,U),c(()=>{let e=p(T,{title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 兼容层仍然都可用，旧布局 API 不需要迁移。`,tab:h.placements,preview:()=>b(`div`,{className:`grid gap-4 md:grid-cols-2 xl:grid-cols-3`,children:te.map(e=>y(O,{minHeight:`9.5rem`,children:[b(`div`,{className:`absolute left-3 top-3 badge badge-ghost badge-sm`,children:e.label}),b(w,{className:`absolute`,placement:e.placement,inset:{x:12,y:12},children:b(`div`,{role:`alert`,className:`${ee[e.tone]} shadow-sm`,children:b(`span`,{children:e.label})})})]},e.label))}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`});m(()=>u(e,d,U))});let _e=e(`rue:component:anchor`);i(d,_e),c(()=>{let e=p(T,{title:`Stacked toasts`,summary:`原来的多条堆叠示例继续保留，同时和横向、倒序这些布局控制一起展示。`,tab:h.stacked,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(O,{children:y(w,{className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`New mail arrived.`})}),b(`div`,{role:`alert`,className:`alert alert-success shadow-sm`,children:b(`span`,{children:`Message sent successfully.`})})]})}),b(O,{children:y(w,{className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[b(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:b(`span`,{children:`Rollback ready`})}),b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`Deploy queued`})})]})})]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`});m(()=>u(e,d,_e))});let ve=e(`rue:component:anchor`);i(d,ve),c(()=>{let e=p(T,{title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:h.inset,preview:()=>y(O,{minHeight:`15rem`,children:[y(`div`,{className:`absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4`,children:[b(`div`,{className:`h-10 rounded-box bg-base-200/80`}),y(`div`,{className:`mt-4 grid gap-3 md:grid-cols-2`,children:[b(`div`,{className:`h-20 rounded-box bg-base-200/70`}),b(`div`,{className:`h-20 rounded-box bg-base-200/70`})]})]}),b(`div`,{className:`absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm`,children:`背景浮层`}),y(w,{className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[b(`div`,{role:`alert`,className:`alert alert-success shadow-lg`,children:b(`span`,{children:`Layered above the card.`})}),b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`Inset keeps it off the edge.`})})]})]}),code:`<Toast
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
</Toast>`});m(()=>u(e,d,ve))});let ye=e(`rue:component:anchor`);i(d,ye),c(()=>{let e=p(T,{title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:h.host,preview:()=>b(O,{children:y(w,{as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[b(`div`,{role:`alert`,className:`alert alert-info shadow-sm`,children:b(`span`,{children:`Auto save completed.`})}),b(`div`,{role:`alert`,className:`alert alert-warning shadow-sm`,children:b(`span`,{children:`1 draft still requires review.`})})]})}),code:`<Toast
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
</Toast>`});m(()=>u(e,d,ye))});let W=r(`div`,d);i(d,W),n(W,`my-8 lg:my-12`);let G=r(`h2`,W);i(W,G),n(G,`mt-2 mb-4 text-lg font-semibold`),i(G,o(`API`));let K=r(`h3`,W);i(W,K),n(K,`mt-2 mb-3 text-base font-semibold`),i(K,o(`Toast.useMessage(options)`));let be=e(`rue:component:anchor`);i(W,be),c(()=>{let e=p(D,{rows:oe});m(()=>u(e,W,be))});let q=r(`p`,W);i(W,q),n(q,`mt-4 text-sm opacity-70`),i(q,o(`返回值固定为`));let xe=r(`code`,q);i(q,xe),i(xe,o(`[messageApi, contextHolder]`)),i(q,o(`。为了保持这类 hook 的用法习惯，`));let Se=r(`code`,q);i(q,Se),i(Se,o(`contextHolder`)),i(q,o(`仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到`));let Ce=r(`code`,q);i(q,Ce),i(Ce,o(`document.body`)),i(q,o(`，传`));let we=r(`code`,q);i(q,we),i(we,o(`getContainer={false}`)),i(q,o(`时才会回到 holder 内。`));let J=r(`h3`,W);i(W,J),n(J,`mt-8 mb-3 text-base font-semibold`),i(J,o(`messageApi`));let Te=e(`rue:component:anchor`);i(W,Te),c(()=>{let e=p(D,{rows:se});m(()=>u(e,W,Te))});let Y=r(`h3`,W);i(W,Y),n(Y,`mt-8 mb-3 text-base font-semibold`),i(Y,o(`ToastMessageConfig`));let Ee=e(`rue:component:anchor`);i(W,Ee),c(()=>{let e=p(D,{rows:ce});m(()=>u(e,W,Ee))});let X=r(`h3`,W);i(W,X),n(X,`mt-2 mb-3 text-base font-semibold`),i(X,o(`Toast 根容器`));let De=e(`rue:component:anchor`);i(W,De),c(()=>{let e=p(D,{rows:ie});m(()=>u(e,W,De))});let Z=r(`h3`,W);i(W,Z),n(Z,`mt-8 mb-3 text-base font-semibold`),i(Z,o(`Toast.Item 单条提示`));let Oe=e(`rue:component:anchor`);i(W,Oe),c(()=>{let e=p(D,{rows:ae});m(()=>u(e,W,Oe))});let Q=r(`p`,W);i(W,Q),n(Q,`mt-4 text-sm opacity-70`),i(Q,o(`Compound 子组件包括`));let ke=r(`code`,Q);i(Q,ke),i(ke,o(`Toast.Icon`)),i(Q,o(`、`));let Ae=r(`code`,Q);i(Q,Ae),i(Ae,o(`Toast.Content`)),i(Q,o(`、`));let je=r(`code`,Q);i(Q,je),i(je,o(`Toast.Title`)),i(Q,o(`、`));let Me=r(`code`,Q);i(Q,Me),i(Me,o(`Toast.Description`)),i(Q,o(`、`));let Ne=r(`code`,Q);i(Q,Ne),i(Ne,o(`Toast.Action`)),i(Q,o(`和`));let Pe=g(Q);i(Q,Pe),a(Pe,` `);let $=r(`code`,Q);return i(Q,$),i($,o(`Toast.Close`)),i(Q,o(`。`)),l})}),f,_),f})};export{le as default};