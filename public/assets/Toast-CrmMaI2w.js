import{Bt as e,Dt as t,H as n,U as r,V as i,Vt as a,Wt as o,Y as s,_t as c,en as l,f as u,fn as d,g as f,gn as p,gt as m,h,hn as g,in as _,m as v,mn as y,p as b,pn as x,qt as S,sn as C,st as w,u as T,vt as E,yn as D,yt as O,z as k,zt as A}from"./rue-runtime-Cv6BZekS.js";import{t as j}from"./Code-BzFVdc3U.js";import{t as M}from"./tabs-vLOp20OU.js";import{t as N}from"./toast-LDRQyg6G.js";import{r as P}from"./SidebarPlaygroundDesign-CoDFHXQl.js";import{t as F}from"./preview-test-gate-BVbSCGe9.js";var ee=D(`<div class="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10"></div>`),te=D(`<div class="grid gap-4"><!--rue:text-hole:0--></div>`),ne=D(`<div class="absolute inset-x-4 top-4 flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-primary">10 秒成功提示</button><button type="button" class="btn btn-sm btn-outline">开始发布</button><button type="button" class="btn btn-sm btn-outline">更新同 key</button><button type="button" class="btn btn-sm btn-ghost">清空当前消息</button></div>`),re=D(`<span class="text-lg font-black">R</span>`),ie=D(`<div class="mt-3 flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-primary btn-soft">Open changelog</button><button type="button" class="btn btn-sm btn-ghost">Later</button></div>`),ae=D(`<div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>`),oe=D(`<div class="absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70">当前页面内容</div>`),se=D(`<div role="alert" class="alert alert-info shadow-sm"><span>New message arrived.</span></div>`),ce=D(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><!--rue:text-hole:0--></div>`),le=D(`<div class="grid gap-4 xl:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),ue=D(`<div class="absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4"><div class="h-10 rounded-box bg-base-200/80"></div><div class="mt-4 grid gap-3 md:grid-cols-2"><div class="h-20 rounded-box bg-base-200/70"></div><div class="h-20 rounded-box bg-base-200/70"></div></div></div>`),de=D(`<div class="absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm">背景浮层</div>`),fe=D(`<div role="alert" class="alert alert-success shadow-lg"><span>Layered above the card.</span></div>`),pe=D(`<div role="alert" class="alert alert-info shadow-sm"><span>Inset keeps it off the edge.</span></div>`),me=D(`<div role="alert" class="alert alert-info shadow-sm"><span>Auto save completed.</span></div>`),he=D(`<div role="alert" class="alert alert-warning shadow-sm"><span>1 draft still requires review.</span></div>`),I=D(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),L=D(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),R=D(`<div class="not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm"><div class="relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90"><!--rue:text-hole:0--></div></div>`),z=D(`<div class="absolute left-4 top-4 flex flex-wrap gap-2"><button type="button" class="btn btn-sm">重新显示受控提示</button><button type="button" class="btn btn-sm btn-ghost">关闭受控提示</button><button type="button" class="btn btn-sm btn-outline">重新触发自动关闭</button></div>`),B=D(`<div class="absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur">受控提示使用固定 key 反复显示或销毁；自动关闭提示每次生成新 key，悬停时会暂停倒计时。</div>`),ge=D(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Toast 轻提示</h1><p class="text-sm mt-3 mb-3">Toast 根容器负责 placement、stack 和 inset。根容器仍然负责 placement、stack 和 inset， 但单条提示现在可以直接用 <code>Toast.Item</code> 写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补充；现在还可以像常见 message API 一样通过 <code>Toast.useMessage()</code> 拿到 <code>messageApi</code> 和 <code>contextHolder</code> ， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传 <code>getContainer={false}</code> 时才会留在当前 box 里，同时仍然使用 Rue 自己更轻、更靠近页面内容的视觉语气。</p><h2>何时使用</h2><ul><li>需要在页面局部提供轻量反馈，但不想上升成全局通知系统。</li><li>希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保持更贴近 Rue 的视觉风格。</li><li>希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。</li><li>既要支持基础的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>支持基础写法</h2><p class="text-sm mt-2 mb-4">基础的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完整提供。下面这些基础示例 都还在，只是按新的能力层次重新归组了。</p><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><div class="my-8 lg:my-12"><h2 class="mt-2 mb-4 text-lg font-semibold">API</h2><h3 class="mt-2 mb-3 text-base font-semibold">Toast.useMessage(options)</h3><!--rue:opaque-hole:10--><p class="mt-4 text-sm opacity-70">返回值固定为 <code>[messageApi, contextHolder]</code>。为了保持这类 hook 的用法习惯， <code>contextHolder</code> 仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到 <code>document.body</code>，传 <code>getContainer={false}</code> 时才会回到 holder 内。</p><h3 class="mt-8 mb-3 text-base font-semibold">messageApi</h3><!--rue:opaque-hole:11--><h3 class="mt-8 mb-3 text-base font-semibold">ToastMessageConfig</h3><!--rue:opaque-hole:12--><h3 class="mt-2 mb-3 text-base font-semibold">Toast 根容器</h3><!--rue:opaque-hole:13--><h3 class="mt-8 mb-3 text-base font-semibold">Toast.Item 单条提示</h3><!--rue:opaque-hole:14--><p class="mt-4 text-sm opacity-70">Compound 子组件包括 <code>Toast.Icon</code>、<code>Toast.Content</code>、 <code>Toast.Title</code>、<code>Toast.Description</code>、<code>Toast.Action</code> 和 <code>Toast.Close</code>。</p></div></div>`),V=(n,r,s)=>o(r=>{let s=I().content.cloneNode(!0).firstChild,c=s.childNodes[0].childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,u=s.childNodes[0].childNodes[0].childNodes[1],f=u.parentNode,h=s.childNodes[1],_=h.parentNode,v=s.childNodes[2],b=v.parentNode;e({parent:l,before:c},()=>A(m(n,`title`)),()=>({})),e({parent:f,before:u},()=>m(n,`summary`)?(r,i,s)=>a(r,s,()=>o(()=>{let r=y(),i=g(`p`,r);d(r,i),t(i,`m-0 text-sm opacity-70`);let a=x(`rue:slot:anchor`);d(i,a),e({parent:i,before:a},()=>A(m(n,`summary`)),()=>({}));let o=p(``),s=p(``);return r.insertBefore(o,r.firstChild),r.appendChild(s),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>O(e=>{let t=p(``);return[t,t]});return e==null?r():a(e,n,r)},()=>({}));let S=(e,t,r)=>{let o=()=>i(M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m(n,`tab`).value,onChange:e=>m(n,`tab`).value=e,className:`mb-3 mt-4`}));return e==null?o():a(e,r,o)},C=h.nextSibling;return _.removeChild(h),e({parent:_,before:C},()=>S,()=>({})),e({parent:b,before:v},()=>m(n,`tab`).value===`preview`?((e,t)=>(n,r,i)=>A(F(e,t))(n,r,i))(m(n,`title`),m(n,`preview`)):(e,t,r)=>a(e,r,()=>i(j,()=>({className:`mt-2`,lang:`tsx`,code:m(n,`code`)}))),()=>({})),[s,s]}),H=e=>Array.isArray(e)?e.flatMap(e=>H(e)):e==null?[]:[e],U=(e,t,n)=>{let i=E(m(e,`rows`));return r(o(e=>{let t=L().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,a=D(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return S(()=>{let e=i.get()||[];o=f(r,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return v(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=p(``);o.insertBefore(f,n),o.removeChild(n);let m=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=m;let h=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=h;let g=p(``);l.insertBefore(g,c),l.removeChild(c);let _=r.type==null||typeof r.type==`boolean`?``:String(r.type);g.textContent=_;let v=p(``);d.insertBefore(v,u),d.removeChild(u);let y=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return v.textContent=y,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(f.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),C(()=>u(o)),[t,t]}),e=>l(()=>{i.set(e.rows)}),()=>c(e))},W=(t,n,i)=>{let a=E(m(t,`children`)),s=E(m(t,`minHeight`));return r(o(()=>{let t=y(),n=R().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],o=r.childNodes[0].childNodes[0],c=o.parentNode;t.appendChild(n),i.setAttribute(`class`,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`);let l;_(()=>{let e=s.get()===void 0?`14rem`:s.get(),t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,i.style.minHeight=t)}),e({parent:c,before:o},()=>(e=>(t,n,r)=>A(H(e))(t,n,r))(a.get()),()=>({}));let u=p(``),d=p(``);return t.insertBefore(u,t.firstChild),t.appendChild(d),[t.firstChild,t.lastChild]}),e=>l(()=>{a.set(e.children),s.set(e.minHeight)}),()=>c(t))},_e={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},ve=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],ye=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],be=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],xe=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],Se=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保持文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],Ce=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],we=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],Te=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],Ee=(e,t,n)=>{let[r,i]=N.useMessage({getContainer:!1,className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,maxCount:3,duration:4,closable:!0,pauseOnHover:!0});return k(W,()=>({minHeight:`19rem`,children:[o(e=>{let t=z().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=t.childNodes[1],a=t.childNodes[2];return n.setAttribute(`type`,`button`),n.setAttribute(`class`,`btn btn-sm`),C(T(e,n,`click`,()=>()=>{r.open({key:`deployment-paused`,type:`warning`,title:`Deployment paused`,description:`This one is controlled by messageApi.destroy(key), so it can stay linked to page state.`,duration:0,closable:!0})})),i.setAttribute(`type`,`button`),i.setAttribute(`class`,`btn btn-sm btn-ghost`),C(T(e,i,`click`,()=>()=>{r.destroy(`deployment-paused`)})),a.setAttribute(`type`,`button`),a.setAttribute(`class`,`btn btn-sm btn-outline`),C(T(e,a,`click`,()=>()=>{r.success({key:`auto-save-${Date.now()}`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4})})),[t,t]}),i,O(e=>{let t=B().content.cloneNode(!0).firstChild;return[t,t]})]}))},De=`const [messageApi, contextHolder] = Toast.useMessage({
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
</div>`,G=(t,r,c)=>{let l={items:w(`preview`),variants:w(`preview`),controlled:w(`preview`),useMessage:w(`preview`),compound:w(`preview`),basic:w(`preview`),placements:w(`preview`),stacked:w(`preview`),inset:w(`preview`),host:w(`preview`)},[f,m]=N.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return s(()=>i(P,()=>({children:(t,r,s)=>{let c=()=>o(t=>{let r=y(),s=ge().content.cloneNode(!0),c=s.firstChild,v=c.childNodes[4],w=v.parentNode,D=c.childNodes[5],j=D.parentNode,M=c.childNodes[6],P=M.parentNode,F=c.childNodes[7],I=F.parentNode,L=c.childNodes[8],R=L.parentNode,z=c.childNodes[11],B=z.parentNode,H=c.childNodes[12],G=H.parentNode,K=c.childNodes[13],Oe=K.parentNode,q=c.childNodes[14],ke=q.parentNode,J=c.childNodes[15],Ae=J.parentNode,Y=c.childNodes[16].childNodes[2],je=Y.parentNode,X=c.childNodes[16].childNodes[5],Me=X.parentNode,Z=c.childNodes[16].childNodes[7],Ne=Z.parentNode,Q=c.childNodes[16].childNodes[9],Pe=Q.parentNode,$=c.childNodes[16].childNodes[11],Fe=$.parentNode;r.appendChild(s);let Ie=(e,t,r)=>{let s=()=>i(V,()=>({title:`Message-like items`,summary:`最直接的语义用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:l.items,preview:()=>i(W,()=>({minHeight:`19rem`,children:(e,t,r)=>{let s=()=>o(e=>{let t=y();t.appendChild(ee().content.cloneNode(!0)),n(t,N,()=>({className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:(e,t,n)=>{let r=()=>o(e=>{let t=y(),n=x(`rue:list:end`);d(t,n);let r=[];S(()=>{let e=ye.slice(0,3)||[];r=h(n.parentNode,n,r,e,(e,t)=>e.title,(e,t)=>{let n=E(e);return b((e,t,r)=>{let o=()=>i(N.Item,()=>({type:n.get().type,title:n.get().title,description:n.get().description,closable:!0}));return e==null?o():a(e,r,o)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),C(()=>u(r));let o=p(``),s=p(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():a(e,n,r)}}));let r=p(``),s=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?s():a(e,r,s)}})),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`}));return e==null?s():a(e,r,s)},Le=v.nextSibling;w.removeChild(v),e({parent:w,before:Le},()=>Ie,()=>({}));let Re=(t,r,s)=>{let c=()=>i(V,()=>({title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:l.variants,preview:()=>o(t=>{let r=te().content.cloneNode(!0).firstChild,s=r.childNodes[0],c=s.parentNode,l=[];return S(()=>{l=h(c,s,l,be||[],(e,t)=>e.label,(t,r)=>{let s=E(t);return b((t,r,c)=>{let l=()=>i(W,()=>({minHeight:`11rem`,children:(t,r,i)=>{let c=()=>o(t=>{let r=y(),i=g(`div`,r);d(r,i),i.setAttribute(`class`,`absolute left-3 top-3 badge badge-ghost badge-sm`);let c=x(`rue:compiled-slot`);d(i,c),e({parent:i,before:c},()=>A(s.get().label),()=>({})),n(r,N,()=>({className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:(e,t,r)=>{let i=()=>o(e=>{let t=y();n(t,N.Item,()=>({type:s.get().type,variant:s.get().variant,title:`${s.get().label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:(e,t,n)=>{let r=()=>O(e=>{let t=g(`button`,e);return t.setAttribute(`type`,`button`),t.setAttribute(`class`,`btn btn-xs btn-ghost`),d(t,p(`Undo`)),[t,t]});return e==null?r():a(e,n,r)},closable:!0}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}}));let l=p(``),u=p(``);return r.insertBefore(l,r.firstChild),r.appendChild(u),[r.firstChild,r.lastChild]});return t==null?c():a(t,i,c)}}));return t==null?l():a(t,c,l)},(e,n)=>{t=e,r=n,s.set(e)},void 0)},!1,!1)}),C(()=>u(l)),[r,r]}),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`}));return t==null?c():a(t,s,c)},ze=D.nextSibling;j.removeChild(D),e({parent:j,before:ze},()=>Re,()=>({}));let Be=(e,t,n)=>{let r=()=>i(V,()=>({title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则提供了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:l.controlled,preview:()=>i(Ee,()=>({})),code:De}));return e==null?r():a(e,n,r)},Ve=M.nextSibling;P.removeChild(M),e({parent:P,before:Ve},()=>Be,()=>({}));let He=(e,t,n)=>{let r=()=>i(V,()=>({title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:l.useMessage,preview:()=>k(W,()=>({minHeight:`18rem`,children:[o(e=>{let t=ne().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1],i=t.childNodes[2],a=t.childNodes[3];return n.setAttribute(`type`,`button`),n.setAttribute(`class`,`btn btn-sm btn-primary`),C(T(e,n,`click`,()=>()=>{f.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})})),r.setAttribute(`type`,`button`),r.setAttribute(`class`,`btn btn-sm btn-outline`),C(T(e,r,`click`,()=>()=>{f.loading({key:`publish`,content:`Publishing changes to preview...`})})),i.setAttribute(`type`,`button`),i.setAttribute(`class`,`btn btn-sm btn-outline`),C(T(e,i,`click`,()=>()=>{f.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})})),a.setAttribute(`type`,`button`),a.setAttribute(`class`,`btn btn-sm btn-ghost`),C(T(e,a,`click`,()=>()=>{f.destroy()})),[t,t]}),m]})),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`}));return e==null?r():a(e,n,r)},Ue=F.nextSibling;I.removeChild(F),e({parent:I,before:Ue},()=>He,()=>({}));let We=(e,t,r)=>{let s=()=>i(V,()=>({title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:l.compound,preview:()=>i(W,()=>({minHeight:`15rem`,children:(e,t,r)=>{let i=()=>o(e=>{let t=y();n(t,N,()=>({className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:(e,t,r)=>{let i=()=>o(e=>{let t=y();n(t,N.Item,()=>({variant:`outline`,className:`max-w-md`,children:(e,t,r)=>{let i=()=>o(e=>{let t=y();n(t,N.Icon,()=>({className:`bg-secondary/12 text-secondary`,children:(e,t,n)=>{let r=()=>O(e=>{let t=y();t.appendChild(re().content.cloneNode(!0));let n=p(``),r=p(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():a(e,n,r)}})),n(t,N.Content,()=>({children:(e,t,r)=>{let i=()=>o(e=>{let t=y();n(t,N.Title,()=>({children:(e,t,n)=>{let r=()=>O(e=>{let t=y();d(t,p(`Workspace synced`));let n=p(``),r=p(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():a(e,n,r)}})),n(t,N.Description,()=>({children:(e,t,n)=>{let r=()=>O(e=>{let t=y();d(t,p(`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`));let n=p(``),r=p(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():a(e,n,r)}})),t.appendChild(ie().content.cloneNode(!0));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}})),n(t,N.Action,()=>({className:`ml-3 items-start self-start`,children:(e,t,r)=>{let i=()=>o(e=>{let t=y();n(t,N.Close,()=>({className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}})),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`}));return e==null?s():a(e,r,s)},Ge=L.nextSibling;R.removeChild(L),e({parent:R,before:Ge},()=>We,()=>({}));let Ke=(e,t,r)=>{let s=()=>i(V,()=>({title:`Toast with alert inside`,summary:`展示基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:l.basic,preview:()=>i(W,()=>({children:(e,t,r)=>{let i=()=>o(e=>{let t=y();t.appendChild(ae().content.cloneNode(!0)),t.appendChild(oe().content.cloneNode(!0)),n(t,N,()=>({className:`absolute`,inset:16,gap:10,children:(e,t,n)=>{let r=()=>O(e=>{let t=y();t.appendChild(se().content.cloneNode(!0));let n=p(``),r=p(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():a(e,n,r)}}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}})),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`}));return e==null?s():a(e,r,s)},qe=z.nextSibling;B.removeChild(z),e({parent:B,before:qe},()=>Ke,()=>({}));let Je=(t,r,s)=>{let c=()=>i(V,()=>({title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 支持层仍然都可用，基础布局 API 不需要额外改造。`,tab:l.placements,preview:()=>o(t=>{let r=ce().content.cloneNode(!0).firstChild,s=r.childNodes[0],c=s.parentNode,l=[];return S(()=>{l=h(c,s,l,ve||[],(e,t)=>e.label,(t,r)=>{let s=E(t);return b((t,r,c)=>{let l=()=>i(W,()=>({minHeight:`9.5rem`,children:(t,r,i)=>{let c=()=>o(t=>{let r=y(),i=g(`div`,r);d(r,i),i.setAttribute(`class`,`absolute left-3 top-3 badge badge-ghost badge-sm`);let c=x(`rue:compiled-slot`);d(i,c),e({parent:i,before:c},()=>A(s.get().label),()=>({})),n(r,N,()=>({className:`absolute`,placement:s.get().placement,inset:{x:12,y:12},children:(t,n,r)=>{let i=()=>o(t=>{let n=y(),r=g(`div`,n);d(n,r),r.setAttribute(`role`,`alert`);let i;_(()=>{let e=`${_e[s.get().tone]} shadow-sm`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,r.setAttribute(`class`,t))});let a=g(`span`,r);d(r,a);let o=x(`rue:compiled-slot`);d(a,o),e({parent:a,before:o},()=>A(s.get().label),()=>({}));let c=p(``),l=p(``);return n.insertBefore(c,n.firstChild),n.appendChild(l),[n.firstChild,n.lastChild]});return t==null?i():a(t,r,i)}}));let l=p(``),u=p(``);return r.insertBefore(l,r.firstChild),r.appendChild(u),[r.firstChild,r.lastChild]});return t==null?c():a(t,i,c)}}));return t==null?l():a(t,c,l)},(e,n)=>{t=e,r=n,s.set(e)},void 0)},!1,!1)}),C(()=>u(l)),[r,r]}),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`}));return t==null?c():a(t,s,c)},Ye=H.nextSibling;G.removeChild(H),e({parent:G,before:Ye},()=>Je,()=>({}));let Xe=(t,r,s)=>{let c=()=>i(V,()=>({title:`Stacked toasts`,summary:`基础的多条堆叠示例展示，同时和横向、倒序这些布局控制一起展示。`,tab:l.stacked,preview:()=>o(t=>{let r=le().content.cloneNode(!0).firstChild,s=r.childNodes[0],c=s.parentNode,l=r.childNodes[1],u=l.parentNode,f=(e,t,r)=>{let s=()=>i(W,()=>({children:(e,t,r)=>{let i=()=>o(e=>{let t=y();n(t,N,()=>({className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:(e,t,n)=>{let r=()=>O(e=>{let t=y(),n=g(`div`,t);d(t,n),n.setAttribute(`role`,`alert`),n.setAttribute(`class`,`alert alert-info shadow-sm`);let r=g(`span`,n);d(n,r),d(r,p(`New mail arrived.`));let i=g(`div`,t);d(t,i),i.setAttribute(`role`,`alert`),i.setAttribute(`class`,`alert alert-success shadow-sm`);let a=g(`span`,i);d(i,a),d(a,p(`Message sent successfully.`));let o=p(``),s=p(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():a(e,n,r)}}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}}));return e==null?s():a(e,r,s)},m=s.nextSibling;c.removeChild(s),e({parent:c,before:m},()=>f,()=>({}));let h=(e,t,r)=>{let s=()=>i(W,()=>({children:(e,t,r)=>{let i=()=>o(e=>{let t=y();n(t,N,()=>({className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:(e,t,n)=>{let r=()=>O(e=>{let t=y(),n=g(`div`,t);d(t,n),n.setAttribute(`role`,`alert`),n.setAttribute(`class`,`alert alert-warning shadow-sm`);let r=g(`span`,n);d(n,r),d(r,p(`Rollback ready`));let i=g(`div`,t);d(t,i),i.setAttribute(`role`,`alert`),i.setAttribute(`class`,`alert alert-info shadow-sm`);let a=g(`span`,i);d(i,a),d(a,p(`Deploy queued`));let o=p(``),s=p(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():a(e,n,r)}}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}}));return e==null?s():a(e,r,s)},_=l.nextSibling;return u.removeChild(l),e({parent:u,before:_},()=>h,()=>({})),[r,r]}),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`}));return t==null?c():a(t,s,c)},Ze=K.nextSibling;Oe.removeChild(K),e({parent:Oe,before:Ze},()=>Xe,()=>({}));let Qe=(e,t,r)=>{let s=()=>i(V,()=>({title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:l.inset,preview:()=>i(W,()=>({minHeight:`15rem`,children:(e,t,r)=>{let i=()=>o(e=>{let t=y();t.appendChild(ue().content.cloneNode(!0)),t.appendChild(de().content.cloneNode(!0)),n(t,N,()=>({className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:(e,t,n)=>{let r=()=>O(e=>{let t=y();t.appendChild(fe().content.cloneNode(!0)),t.appendChild(pe().content.cloneNode(!0));let n=p(``),r=p(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():a(e,n,r)}}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}})),code:`<Toast
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
</Toast>`}));return e==null?s():a(e,r,s)},$e=q.nextSibling;ke.removeChild(q),e({parent:ke,before:$e},()=>Qe,()=>({}));let et=(e,t,r)=>{let s=()=>i(V,()=>({title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:l.host,preview:()=>i(W,()=>({children:(e,t,r)=>{let i=()=>o(e=>{let t=y();n(t,N,()=>({as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:(e,t,n)=>{let r=()=>O(e=>{let t=y();t.appendChild(me().content.cloneNode(!0)),t.appendChild(he().content.cloneNode(!0));let n=p(``),r=p(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():a(e,n,r)}}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}})),code:`<Toast
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
</Toast>`}));return e==null?s():a(e,r,s)},tt=J.nextSibling;Ae.removeChild(J),e({parent:Ae,before:tt},()=>et,()=>({}));let nt=(e,t,n)=>{let r=()=>i(U,()=>({rows:Ce}));return e==null?r():a(e,n,r)},rt=Y.nextSibling;je.removeChild(Y),e({parent:je,before:rt},()=>nt,()=>({}));let it=(e,t,n)=>{let r=()=>i(U,()=>({rows:we}));return e==null?r():a(e,n,r)},at=X.nextSibling;Me.removeChild(X),e({parent:Me,before:at},()=>it,()=>({}));let ot=(e,t,n)=>{let r=()=>i(U,()=>({rows:Te}));return e==null?r():a(e,n,r)},st=Z.nextSibling;Ne.removeChild(Z),e({parent:Ne,before:st},()=>ot,()=>({}));let ct=(e,t,n)=>{let r=()=>i(U,()=>({rows:xe}));return e==null?r():a(e,n,r)},lt=Q.nextSibling;Pe.removeChild(Q),e({parent:Pe,before:lt},()=>ct,()=>({}));let ut=(e,t,n)=>{let r=()=>i(U,()=>({rows:Se}));return e==null?r():a(e,n,r)},dt=$.nextSibling;Fe.removeChild($),e({parent:Fe,before:dt},()=>ut,()=>({}));let ft=p(``),pt=p(``);return r.insertBefore(ft,r.firstChild),r.appendChild(pt),[r.firstChild,r.lastChild]});return t==null?c():a(t,s,c)}})))};export{G as default};