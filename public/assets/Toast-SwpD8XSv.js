import{Bt as e,C as t,Dn as n,Et as r,H as i,K as a,Kt as o,L as s,Mt as c,S as l,V as u,W as d,X as f,Y as p,_n as m,_t as h,b as g,bn as _,dt as v,fn as y,gn as b,hn as x,ht as S,kn as C,mn as w,nt as T,pn as E,q as D,rt as ee,tt as te,wn as O,x as k,z as A}from"./rue-runtime-CwEGJ854.js";import{t as j}from"./Code-B3jCYMAr.js";import{t as M}from"./tabs-DUviBzjL.js";import{t as N}from"./toast-CLOB_Mqd.js";import{r as P}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as F}from"./preview-test-gate-DjzWv8cx.js";var ne=m(`<div class="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10"></div>`),re=m(`<div class="grid gap-4"><!--rue:text-hole:0--></div>`),ie=m(`<div class="absolute inset-x-4 top-4 flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-primary">10 秒成功提示</button><button type="button" class="btn btn-sm btn-outline">开始发布</button><button type="button" class="btn btn-sm btn-outline">更新同 key</button><button type="button" class="btn btn-sm btn-ghost">清空当前消息</button></div>`),ae=m(`<span class="text-lg font-black">R</span>`),oe=m(`<div class="mt-3 flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-primary btn-soft">Open changelog</button><button type="button" class="btn btn-sm btn-ghost">Later</button></div>`),se=m(`<div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>`),ce=m(`<div class="absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70">当前页面内容</div>`),le=m(`<div role="alert" class="alert alert-info shadow-sm"><span>New message arrived.</span></div>`),ue=m(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><!--rue:text-hole:0--></div>`),de=m(`<div class="grid gap-4 xl:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),fe=m(`<div class="absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4"><div class="h-10 rounded-box bg-base-200/80"></div><div class="mt-4 grid gap-3 md:grid-cols-2"><div class="h-20 rounded-box bg-base-200/70"></div><div class="h-20 rounded-box bg-base-200/70"></div></div></div>`),pe=m(`<div class="absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm">背景浮层</div>`),me=m(`<div role="alert" class="alert alert-success shadow-lg"><span>Layered above the card.</span></div>`),he=m(`<div role="alert" class="alert alert-info shadow-sm"><span>Inset keeps it off the edge.</span></div>`),ge=m(`<div role="alert" class="alert alert-info shadow-sm"><span>Auto save completed.</span></div>`),_e=m(`<div role="alert" class="alert alert-warning shadow-sm"><span>1 draft still requires review.</span></div>`),I=m(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),L=m(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),R=m(`<div class="not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm"><div class="relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90"><!--rue:text-hole:0--></div></div>`),z=m(`<div class="absolute left-4 top-4 flex flex-wrap gap-2"><button type="button" class="btn btn-sm">重新显示受控提示</button><button type="button" class="btn btn-sm btn-ghost">关闭受控提示</button><button type="button" class="btn btn-sm btn-outline">重新触发自动关闭</button></div>`),B=m(`<div class="absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur">受控提示使用固定 key 反复显示或销毁；自动关闭提示每次生成新 key，悬停时会暂停倒计时。</div>`),ve=m(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Toast 轻提示</h1><p class="text-sm mt-3 mb-3">Toast 根容器负责 placement、stack 和 inset。根容器仍然负责 placement、stack 和 inset， 但单条提示现在可以直接用 <code>Toast.Item</code> 写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补充；现在还可以像常见 message API 一样通过 <code>Toast.useMessage()</code> 拿到 <code>messageApi</code> 和 <code>contextHolder</code> ， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传 <code>getContainer={false}</code> 时才会留在当前 box 里，同时仍然使用 Rue 自己更轻、更靠近页面内容的视觉语气。</p><h2>何时使用</h2><ul><li>需要在页面局部提供轻量反馈，但不想上升成全局通知系统。</li><li>希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保持更贴近 Rue 的视觉风格。</li><li>希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。</li><li>既要支持基础的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>支持基础写法</h2><p class="text-sm mt-2 mb-4">基础的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完整提供。下面这些基础示例 都还在，只是按新的能力层次重新归组了。</p><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><div class="my-8 lg:my-12"><h2 class="mt-2 mb-4 text-lg font-semibold">API</h2><h3 class="mt-2 mb-3 text-base font-semibold">Toast.useMessage(options)</h3><!--rue:opaque-hole:10--><p class="mt-4 text-sm opacity-70">返回值固定为 <code>[messageApi, contextHolder]</code>。为了保持这类 hook 的用法习惯， <code>contextHolder</code> 仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到 <code>document.body</code>，传 <code>getContainer={false}</code> 时才会回到 holder 内。</p><h3 class="mt-8 mb-3 text-base font-semibold">messageApi</h3><!--rue:opaque-hole:11--><h3 class="mt-8 mb-3 text-base font-semibold">ToastMessageConfig</h3><!--rue:opaque-hole:12--><h3 class="mt-2 mb-3 text-base font-semibold">Toast 根容器</h3><!--rue:opaque-hole:13--><h3 class="mt-8 mb-3 text-base font-semibold">Toast.Item 单条提示</h3><!--rue:opaque-hole:14--><p class="mt-4 text-sm opacity-70">Compound 子组件包括 <code>Toast.Icon</code>、<code>Toast.Content</code>、 <code>Toast.Title</code>、<code>Toast.Description</code>、<code>Toast.Action</code> 和 <code>Toast.Close</code>。</p></div></div>`),V=e=>S(t=>{let n=I().content.cloneNode(!0).firstChild,o=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,c=n.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,d=n.childNodes[1],f=d.parentNode,m=n.childNodes[2],h=m.parentNode;g({parent:s,before:o},()=>e.title,()=>({})),u(l,c,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(t=>{let n=x(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=E(`rue:compiled-slot`);return y(n,r),g({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let _=w(f);return a(_,M,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),f.insertBefore(_,d),O(()=>{let t=e.tab.value===`preview`?F(e.title,e.preview):i(j,()=>({className:`mt-2`,lang:`tsx`,code:e.code}));C(()=>p(t,h,m))}),n}),H=e=>Array.isArray(e)?e.flatMap(e=>H(e)):e==null?[]:[e],U=e=>{let n=d(e.rows);return D(r(Object.assign(e=>{let i=L().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return O(()=>{let e=n.get()||[];s=t(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let n=d(e),i=d(t);return l((e,t,i)=>k(e,i,()=>r(Object.assign(e=>{let t=x(`tr`,e),r=x(`td`,t);y(t,r);let i=x(`code`,r);y(r,i);let a=b(``);y(i,a),_(a,()=>n.get().prop);let o=x(`td`,t);y(t,o);let s=b(``);y(o,s),_(s,()=>n.get().description);let c=x(`td`,t);y(t,c);let l=x(`code`,c);y(c,l);let u=b(``);y(l,u),_(u,()=>n.get().type);let d=x(`td`,t);y(t,d);let f=x(`code`,d);y(d,f);let p=b(``);return y(f,p),_(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{n.set(e.rows)}),()=>e)},W=e=>{let t=d(e.children),n=d(e.minHeight);return D(S(()=>{let e=T(),r=R().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],o=i.childNodes[0].childNodes[0],c=o.parentNode;return e.appendChild(r),s(a,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),O(()=>{let e={minHeight:n.get()===void 0?`14rem`:n.get()};v(a,e)}),O(()=>{let e=H(t.get());C(()=>p(e,c,o))}),e},!0),e=>A(()=>{t.set(e.children),n.set(e.minHeight)}),()=>e)},ye={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},be=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],xe=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],Se=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],Ce=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],we=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保持文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],Te=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],Ee=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],De=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],Oe=()=>{let[e,t]=N.useMessage({getContainer:!1,className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,maxCount:3,duration:4,closable:!0,pauseOnHover:!0});return D(h(W,()=>({minHeight:`19rem`,children:[r(Object.assign(t=>{let r=z().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=r.childNodes[1],o=r.childNodes[2];i.setAttribute(`type`,`button`),i.className=`btn btn-sm`;let s=t=>{let n=()=>{e.open({key:`deployment-paused`,type:`warning`,title:`Deployment paused`,description:`This one is controlled by messageApi.destroy(key), so it can stay linked to page state.`,duration:0,closable:!0})};typeof n==`function`&&n(t)};i.addEventListener(`click`,s),n(()=>i.removeEventListener(`click`,s)),a.setAttribute(`type`,`button`),a.className=`btn btn-sm btn-ghost`;let c=t=>{let n=()=>{e.destroy(`deployment-paused`)};typeof n==`function`&&n(t)};a.addEventListener(`click`,c),n(()=>a.removeEventListener(`click`,c)),o.setAttribute(`type`,`button`),o.className=`btn btn-sm btn-outline`;let l=t=>{let n=()=>{e.success({key:`auto-save-${Date.now()}`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4})};typeof n==`function`&&n(t)};return o.addEventListener(`click`,l),n(()=>o.removeEventListener(`click`,l)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),t,r(e=>B().content.cloneNode(!0).firstChild)]})),e=>A(()=>{}))},ke=`const [messageApi, contextHolder] = Toast.useMessage({
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
</div>`,G=()=>{let u={items:e(`preview`),variants:e(`preview`),controlled:e(`preview`),useMessage:e(`preview`),compound:e(`preview`),basic:e(`preview`),placements:e(`preview`),stacked:e(`preview`),inset:e(`preview`),host:e(`preview`)},[m,g]=N.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return c(()=>D((()=>{let e=S(()=>{let e=T(),c=ve().content.cloneNode(!0),v=c.firstChild,E=v.childNodes[4],D=E.parentNode,A=v.childNodes[5],j=A.parentNode,M=v.childNodes[6],P=M.parentNode,F=v.childNodes[7],I=F.parentNode,L=v.childNodes[8],R=L.parentNode,z=v.childNodes[11],B=z.parentNode,H=v.childNodes[12],G=H.parentNode,K=v.childNodes[13],Ae=K.parentNode,q=v.childNodes[14],je=q.parentNode,J=v.childNodes[15],Me=J.parentNode,Y=v.childNodes[16].childNodes[2],X=Y.parentNode,Z=v.childNodes[16].childNodes[5],Ne=Z.parentNode,Pe=v.childNodes[16].childNodes[7],Fe=Pe.parentNode,Q=v.childNodes[16].childNodes[9],Ie=Q.parentNode,Le=v.childNodes[16].childNodes[11],Re=Le.parentNode;e.appendChild(c),O(()=>{let e=h(V,()=>({title:`Message-like items`,summary:`最直接的语义用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:u.items,preview:o(()=>(()=>{let e=h(N,()=>({className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:xe.slice(0,3).map(e=>h(N.Item,()=>({key:e.title,type:e.type,title:e.title,description:e.description,closable:!0})))}));return h(W,()=>({minHeight:`19rem`,children:[r(e=>ne().content.cloneNode(!0).firstChild),e]}))})()),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`}));C(()=>p(e,D,E))}),O(()=>{let e=h(V,()=>({title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:u.variants,preview:o(()=>S(e=>{let t=re().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode;return O(()=>{let e=Se.map(e=>(()=>{let t=S(()=>{let t=T(),n=ee(`div`,t);f(t,n),s(n,`absolute left-3 top-3 badge badge-ghost badge-sm`);let r=te(`rue:slot:anchor`);return f(n,r),O(()=>{let t=e.label;C(()=>p(t,n,r))}),t}),n=h(N.Item,()=>({type:e.type,variant:e.variant,title:`${e.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:r(Object.assign(e=>{let t=x(`button`,e);return t.setAttribute(`type`,`button`),t.className=`btn btn-xs btn-ghost`,y(t,b(`Undo`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),closable:!0})),i=h(N,()=>({className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:n}));return h(W,()=>({key:e.label,minHeight:`11rem`,children:[t,i]}))})());C(()=>p(e,i,n))}),t})),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`}));C(()=>p(e,j,A))}),O(()=>{let e=h(V,()=>({title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则提供了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:u.controlled,preview:o(()=>i(Oe,()=>({}))),code:ke}));C(()=>p(e,P,M))}),O(()=>{let e=h(V,()=>({title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:u.useMessage,preview:o(()=>h(W,()=>({minHeight:`18rem`,children:[r(Object.assign(e=>{let t=ie().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1],a=t.childNodes[2],o=t.childNodes[3];r.setAttribute(`type`,`button`),r.className=`btn btn-sm btn-primary`;let s=e=>{let t=()=>{m.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})};typeof t==`function`&&t(e)};r.addEventListener(`click`,s),n(()=>r.removeEventListener(`click`,s)),i.setAttribute(`type`,`button`),i.className=`btn btn-sm btn-outline`;let c=e=>{let t=()=>{m.loading({key:`publish`,content:`Publishing changes to preview...`})};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),a.setAttribute(`type`,`button`),a.className=`btn btn-sm btn-outline`;let l=e=>{let t=()=>{m.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})};typeof t==`function`&&t(e)};a.addEventListener(`click`,l),n(()=>a.removeEventListener(`click`,l)),o.setAttribute(`type`,`button`),o.className=`btn btn-sm btn-ghost`;let u=e=>{let t=()=>{m.destroy()};typeof t==`function`&&t(e)};return o.addEventListener(`click`,u),n(()=>o.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),g]}))),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`}));C(()=>p(e,I,F))}),O(()=>{let e=h(V,()=>({title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:u.compound,preview:o(()=>(()=>{let e=S(()=>{let e=T();return e.appendChild(ae().content.cloneNode(!0)),e}),t=h(N.Icon,()=>({className:`bg-secondary/12 text-secondary`,children:e})),n=h(N.Title,()=>({children:`Workspace synced`})),i=h(N.Description,()=>({children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`})),a=h(N.Content,()=>({children:[n,i,r(e=>oe().content.cloneNode(!0).firstChild)]})),o=h(N.Close,()=>({className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})),s=h(N.Action,()=>({className:`ml-3 items-start self-start`,children:o})),c=h(N.Item,()=>({variant:`outline`,className:`max-w-md`,children:[t,a,s]})),l=h(N,()=>({className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:c}));return h(W,()=>({minHeight:`15rem`,children:l}))})()),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`}));C(()=>p(e,R,L))}),O(()=>{let e=h(V,()=>({title:`Toast with alert inside`,summary:`展示基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:u.basic,preview:o(()=>i(W,()=>({children:[(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return t.appendChild(se().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return t.appendChild(ce().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return a(t,N,()=>({className:`absolute`,inset:16,gap:10,children:(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return t.appendChild(le().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]}))),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`}));C(()=>p(e,B,z))}),O(()=>{let e=h(V,()=>({title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 支持层仍然都可用，基础布局 API 不需要额外改造。`,tab:u.placements,preview:o(()=>r(Object.assign(e=>{let n=ue().content.cloneNode(!0).firstChild,o=n.childNodes[0],s=o.parentNode,c=[];return O(()=>{c=t(s,o,c,be||[],(e,t)=>e.label,(e,t)=>{let n=d(e),o=d(t);return l((e,t,o)=>k(e,o,()=>i(W,()=>({minHeight:`9.5rem`,children:[(e,t,i)=>k(e,i,()=>r(Object.assign(e=>{let t=T(),r=x(`div`,t);y(t,r),r.className=`absolute left-3 top-3 badge badge-ghost badge-sm`;let i=b(``);return y(r,i),_(i,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,i)=>k(e,i,()=>r(Object.assign(e=>{let t=T();return a(t,N,()=>({className:`absolute`,placement:n.get().placement,inset:{x:12,y:12},children:(e,t,i)=>k(e,i,()=>r(Object.assign(e=>{let t=T(),r=x(`div`,t);y(t,r),r.setAttribute(`role`,`alert`);let i;O(()=>{let e=`${ye[n.get().tone]} shadow-sm`,t=e==null?``:String(e);Object.is(i,t)||(i=t,r.className=t)});let a=x(`span`,r);y(r,a);let o=b(``);return y(a,o),_(o,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]}))),(r,i)=>{e=r,t=i,n.set(r),o.set(i)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`}));C(()=>p(e,G,H))}),O(()=>{let e=h(V,()=>({title:`Stacked toasts`,summary:`基础的多条堆叠示例展示，同时和横向、倒序这些布局控制一起展示。`,tab:u.stacked,preview:o(()=>r(Object.assign(e=>{let t=de().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode,o=t.childNodes[1],s=o.parentNode,c=w(i);a(c,W,()=>({children:(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return a(t,N,()=>({className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T(),n=x(`div`,t);y(t,n),n.setAttribute(`role`,`alert`),n.className=`alert alert-info shadow-sm`;let r=x(`span`,n);return y(n,r),y(r,b(`New mail arrived.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T(),n=x(`div`,t);y(t,n),n.setAttribute(`role`,`alert`),n.className=`alert alert-success shadow-sm`;let r=x(`span`,n);return y(n,r),y(r,b(`Message sent successfully.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(c,n);let l=w(s);return a(l,W,()=>({children:(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return a(t,N,()=>({className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T(),n=x(`div`,t);y(t,n),n.setAttribute(`role`,`alert`),n.className=`alert alert-warning shadow-sm`;let r=x(`span`,n);return y(n,r),y(r,b(`Rollback ready`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T(),n=x(`div`,t);y(t,n),n.setAttribute(`role`,`alert`),n.className=`alert alert-info shadow-sm`;let r=x(`span`,n);return y(n,r),y(r,b(`Deploy queued`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(l,o),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`}));C(()=>p(e,Ae,K))}),O(()=>{let e=h(V,()=>({title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:u.inset,preview:o(()=>i(W,()=>({minHeight:`15rem`,children:[(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return t.appendChild(fe().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return t.appendChild(pe().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return a(t,N,()=>({className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return t.appendChild(me().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return t.appendChild(he().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]}))),code:`<Toast
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
</Toast>`}));C(()=>p(e,je,q))}),O(()=>{let e=h(V,()=>({title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:u.host,preview:o(()=>i(W,()=>({children:(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return a(t,N,()=>({as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return t.appendChild(ge().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=T();return t.appendChild(_e().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))),code:`<Toast
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
</Toast>`}));C(()=>p(e,Me,J))});let ze=w(X);a(ze,U,()=>({rows:Te})),X.insertBefore(ze,Y);let Be=w(Ne);a(Be,U,()=>({rows:Ee})),Ne.insertBefore(Be,Z);let Ve=w(Fe);a(Ve,U,()=>({rows:De})),Fe.insertBefore(Ve,Pe);let He=w(Ie);a(He,U,()=>({rows:Ce})),Ie.insertBefore(He,Q);let $=w(Re);return a($,U,()=>({rows:we})),Re.insertBefore($,Le),e});return h(P,()=>({children:e}))})(),e=>A(()=>{})))};export{G as default};