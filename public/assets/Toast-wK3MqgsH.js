import{At as e,C as t,Dn as n,E as r,Et as i,Mt as a,Q as o,T as s,Vt as c,_n as l,_t as u,at as d,b as f,ct as p,dt as m,et as h,gn as g,gt as _,hn as v,kn as y,mn as b,nt as x,on as S,pn as C,qt as w,rt as T,st as E,tn as D,ut as O,vn as k,vt as ee,w as A,wn as j,x as M,xn as N}from"./rue-runtime-HIMg8Lz8.js";import{t as P}from"./Code-DpH7u0gk.js";import{t as F}from"./tabs-C020zIXs.js";import{t as I}from"./toast-Duz79zbo.js";import{r as L}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as R}from"./preview-test-gate-CGfD1qFX.js";var te=k(`<div class="absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-info/10 via-success/10 to-warning/10"></div>`),ne=k(`<div class="grid gap-4"><!--rue:text-hole:0--></div>`),re=k(`<div class="absolute inset-x-4 top-4 flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-primary">10 秒成功提示</button><button type="button" class="btn btn-sm btn-outline">开始发布</button><button type="button" class="btn btn-sm btn-outline">更新同 key</button><button type="button" class="btn btn-sm btn-ghost">清空当前消息</button></div>`),ie=k(`<span class="text-lg font-black">R</span>`),ae=k(`<div class="mt-3 flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-primary btn-soft">Open changelog</button><button type="button" class="btn btn-sm btn-ghost">Later</button></div>`),oe=k(`<div class="absolute inset-x-0 top-0 h-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>`),se=k(`<div class="absolute inset-x-8 bottom-6 rounded-box border border-base-300 bg-base-200/60 px-4 py-3 text-sm text-base-content/70">当前页面内容</div>`),ce=k(`<div role="alert" class="alert alert-info shadow-sm"><span>New message arrived.</span></div>`),le=k(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><!--rue:text-hole:0--></div>`),ue=k(`<div class="grid gap-4 xl:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),de=k(`<div class="absolute inset-4 rounded-[1.25rem] border border-base-300 bg-base-100/80 p-4"><div class="h-10 rounded-box bg-base-200/80"></div><div class="mt-4 grid gap-3 md:grid-cols-2"><div class="h-20 rounded-box bg-base-200/70"></div><div class="h-20 rounded-box bg-base-200/70"></div></div></div>`),fe=k(`<div class="absolute right-8 top-10 z-10 rounded-box border border-base-300 bg-base-100 px-4 py-3 text-xs shadow-sm">背景浮层</div>`),pe=k(`<div role="alert" class="alert alert-success shadow-lg"><span>Layered above the card.</span></div>`),me=k(`<div role="alert" class="alert alert-info shadow-sm"><span>Inset keeps it off the edge.</span></div>`),he=k(`<div role="alert" class="alert alert-info shadow-sm"><span>Auto save completed.</span></div>`),ge=k(`<div role="alert" class="alert alert-warning shadow-sm"><span>1 draft still requires review.</span></div>`),z=k(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),B=k(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),V=k(`<div class="not-prose rounded-[1.5rem] border border-base-300 bg-base-200/50 p-4 shadow-sm"><div class="relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90"><!--rue:text-hole:0--></div></div>`),H=k(`<div class="absolute left-4 top-4 flex flex-wrap gap-2"><button type="button" class="btn btn-sm">重新显示受控提示</button><button type="button" class="btn btn-sm btn-ghost">关闭受控提示</button><button type="button" class="btn btn-sm btn-outline">重新触发自动关闭</button></div>`),U=k(`<div class="absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur">受控提示使用固定 key 反复显示或销毁；自动关闭提示每次生成新 key，悬停时会暂停倒计时。</div>`),_e=k(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Toast 轻提示</h1><p class="text-sm mt-3 mb-3">Toast 根容器负责 placement、stack 和 inset。根容器仍然负责 placement、stack 和 inset， 但单条提示现在可以直接用 <code>Toast.Item</code> 写出接近 message 的反馈体验：类型、标题、说明、 操作区、关闭按钮、自动关闭与悬停暂停都已经补充；现在还可以像常见 message API 一样通过 <code>Toast.useMessage()</code> 拿到 <code>messageApi</code> 和 <code>contextHolder</code> ， 在业务按钮、异步流程和页面局部容器里直接按 key 推送、更新和销毁消息；默认会弹到全局页面层， 只有显式传 <code>getContainer={false}</code> 时才会留在当前 box 里，同时仍然使用 Rue 自己更轻、更靠近页面内容的视觉语气。</p><h2>何时使用</h2><ul><li>需要在页面局部提供轻量反馈，但不想上升成全局通知系统。</li><li>希望像 message 一样直接描述成功、失败、加载、警告这些状态，又想保持更贴近 Rue 的视觉风格。</li><li>希望在事件处理函数里直接触发反馈，而不是先把消息数组提升到页面状态。</li><li>既要支持基础的 alert 容器写法，也想在业务里直接拿到可关闭、可自动关闭的单条提示能力。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2>支持基础写法</h2><p class="text-sm mt-2 mb-4">基础的“Toast 只做容器、里面继续放 alert 或自定义节点”的使用方式完整提供。下面这些基础示例 都还在，只是按新的能力层次重新归组了。</p><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><div class="my-8 lg:my-12"><h2 class="mt-2 mb-4 text-lg font-semibold">API</h2><h3 class="mt-2 mb-3 text-base font-semibold">Toast.useMessage(options)</h3><!--rue:opaque-hole:10--><p class="mt-4 text-sm opacity-70">返回值固定为 <code>[messageApi, contextHolder]</code>。为了保持这类 hook 的用法习惯， <code>contextHolder</code> 仍然建议真实渲染到页面里；默认情况下它主要跟随当前组件生命周期，真正的消息层会挂到 <code>document.body</code>，传 <code>getContainer={false}</code> 时才会回到 holder 内。</p><h3 class="mt-8 mb-3 text-base font-semibold">messageApi</h3><!--rue:opaque-hole:11--><h3 class="mt-8 mb-3 text-base font-semibold">ToastMessageConfig</h3><!--rue:opaque-hole:12--><h3 class="mt-2 mb-3 text-base font-semibold">Toast 根容器</h3><!--rue:opaque-hole:13--><h3 class="mt-8 mb-3 text-base font-semibold">Toast.Item 单条提示</h3><!--rue:opaque-hole:14--><p class="mt-4 text-sm opacity-70">Compound 子组件包括 <code>Toast.Icon</code>、<code>Toast.Content</code>、 <code>Toast.Title</code>、<code>Toast.Description</code>、<code>Toast.Action</code> 和 <code>Toast.Close</code>。</p></div></div>`),W=t=>e(e=>{let n=z().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,l=n.childNodes[1],d=l.parentNode,f=n.childNodes[2],p=f.parentNode;s({parent:i,before:r},()=>t.title,()=>({})),x(o,a,()=>t.summary?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let n=g(`p`,e);n.className=`m-0 text-sm opacity-70`;let r=b(`rue:compiled-slot`);return C(n,r),s({parent:n,before:r},()=>t.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let m=v(d);return E(m,F,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`})),d.insertBefore(m,l),j(()=>{let e=t.tab.value===`preview`?R(t.title,t.preview):T(P,()=>({className:`mt-2`,lang:`tsx`,code:t.code}));y(()=>O(e,p,f))}),n}),G=e=>Array.isArray(e)?e.flatMap(e=>G(e)):e==null?[]:[e],K=e=>{let t=d(e.rows);return p(c(Object.assign(e=>{let r=B().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=k(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return j(()=>{let e=t.get()||[];s=A(a,i,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return M(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],u=c.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=l(``);a.insertBefore(p,n),a.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}let g=l(``);u.insertBefore(g,c),u.removeChild(c);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=l(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>f(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>h(()=>{t.set(e.rows)}),()=>e)},q=t=>{let n=d(t.children),r=d(t.minHeight);return p(e(()=>{let e=u(),t=V().content.cloneNode(!0),a=t.firstChild,s=a.childNodes[0],c=a.childNodes[0].childNodes[0],l=c.parentNode;return e.appendChild(t),o(s,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),j(()=>{let e={minHeight:r.get()===void 0?`14rem`:r.get()};i(s,e)}),j(()=>{let e=G(n.get());y(()=>O(e,l,c))}),e},!0),e=>h(()=>{n.set(e.children),r.set(e.minHeight)}),()=>t)},ve={info:`alert alert-info`,success:`alert alert-success`,warning:`alert alert-warning`},ye=[{label:`top-start`,placement:`top-start`,tone:`info`},{label:`top`,placement:`top`,tone:`success`},{label:`top-end`,placement:`top-end`,tone:`warning`},{label:`middle-start`,placement:`middle-start`,tone:`warning`},{label:`center`,placement:`center`,tone:`info`},{label:`middle-end`,placement:`middle-end`,tone:`success`},{label:`bottom-start`,placement:`bottom-start`,tone:`success`},{label:`bottom`,placement:`bottom`,tone:`warning`},{label:`bottom-end`,placement:`bottom-end`,tone:`info`}],be=[{type:`info`,title:`Draft synced`,description:`The latest edits have been pushed to your shared workspace.`},{type:`success`,title:`Publish complete`,description:`The release has been deployed to production without errors.`},{type:`warning`,title:`Review pending`,description:`Two comments still need acknowledgement before merge.`},{type:`error`,title:`Backup failed`,description:`Storage quota is exhausted. Free up space and retry.`},{type:`loading`,title:`Indexing content`,description:`Toast.Item can keep a loading state visible until your flow completes.`}],xe=[{label:`Soft`,variant:`soft`,type:`info`},{label:`Outline`,variant:`outline`,type:`warning`},{label:`Solid`,variant:`solid`,type:`success`}],Se=[{prop:`as`,description:`指定根节点标签，例如 div、section`,type:`any`,defaultValue:`'div'`},{prop:`gap`,description:`控制多个 toast 项之间的间距，支持数字和任意 CSS 长度`,type:`number | string`,defaultValue:`-`},{prop:`horizontal`,description:`横向位置；传入后会覆盖 placement 推导出的横轴结果`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`inset`,description:`容器内边距，可统一设置，也可通过 x / y 分别控制横向与纵向留白`,type:`number | string | { x?: number | string; y?: number | string }`,defaultValue:`-`},{prop:`placement`,description:`语义化九宫格定位别名，例如 top-end、center、bottom-start`,type:`'top-start' | 'top' | 'top-center' | 'top-end' | 'middle-start' | 'middle' | 'middle-center' | 'middle-end' | 'bottom-start' | 'bottom' | 'bottom-center' | 'bottom-end' | 'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`reverse`,description:`反转容器内子项顺序，适合最新消息置顶或横向倒序布局`,type:`boolean`,defaultValue:`false`},{prop:`stack`,description:`堆叠方向，默认维持竖向通知流，也可以切到横向条带式布局`,type:`'vertical' | 'horizontal'`,defaultValue:`'vertical'`},{prop:`vertical`,description:`纵向位置；传入后会覆盖 placement 推导出的纵轴结果`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`},{prop:`zIndex`,description:`调整容器层级，适合叠放在抽屉、卡片或 mock 页面之上`,type:`number | string`,defaultValue:`-`}],Ce=[{prop:`action`,description:`右侧操作区，可放按钮、链接或状态标签`,type:`any`,defaultValue:`-`},{prop:`as`,description:`单条提示的根节点标签，默认 div`,type:`any`,defaultValue:`'div'`},{prop:`closable`,description:`显示内建关闭按钮，并在点击时触发 onClose / onOpenChange`,type:`boolean`,defaultValue:`false`},{prop:`closeIcon`,description:`自定义关闭按钮图标`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态`,type:`boolean`,defaultValue:`true`},{prop:`description`,description:`说明文案，适合放补充上下文或后续动作提示`,type:`any`,defaultValue:`-`},{prop:`duration`,description:`自动关闭时长，单位秒；传入 0 或 null 时保持常驻`,type:`number | null`,defaultValue:`-`},{prop:`icon`,description:`自定义图标；未传时会根据 type 渲染默认图标`,type:`any`,defaultValue:`-`},{prop:`onClose`,description:`关闭完成时触发，meta.source 会标记 close 或 timeout`,type:`(meta) => void`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调，适合受控关闭或外部同步状态`,type:`(open, meta) => void`,defaultValue:`-`},{prop:`open`,description:`受控显示状态`,type:`boolean`,defaultValue:`-`},{prop:`pauseOnHover`,description:`自动关闭时鼠标移入是否暂停剩余计时`,type:`boolean`,defaultValue:`true`},{prop:`showIcon`,description:`关闭默认图标渲染，只保持文字和操作区`,type:`boolean`,defaultValue:`true`},{prop:`title`,description:`标题文案，适合放主状态结论`,type:`any`,defaultValue:`-`},{prop:`type`,description:`语义类型，会同时影响默认图标、无障碍语义和视觉配色`,type:`'neutral' | 'info' | 'success' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant`,description:`提示外观风格，适合在页面层级里调节存在感`,type:`'soft' | 'solid' | 'outline'`,defaultValue:`'soft'`}],we=[{prop:`placement / inset / gap / zIndex`,description:`复用 Toast 根容器的定位能力；默认消息层会挂到全局页面层，而不是被当前 box 裁住。`,type:`ToastProps 子集`,defaultValue:`placement = 'top'`},{prop:`getContainer`,description:`控制消息挂载位置；默认挂到 document.body，传 false 时退回到 contextHolder 所在的局部 box。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`maxCount`,description:`限制同时显示的消息数量；超过时会自动挤掉最早的一条。`,type:`number`,defaultValue:`-`},{prop:`duration`,description:`给 hook 创建出来的消息设定默认自动关闭时长，单条消息可覆盖。`,type:`number | null`,defaultValue:`3`},{prop:`variant / closable / pauseOnHover / showIcon / type`,description:`为整个 message 通道设定单条提示的默认外观和行为。`,type:`ToastItemProps 子集`,defaultValue:`-`}],Te=[{prop:`open(config)`,description:`创建一条消息；返回关闭函数，适合临时保存句柄。`,type:`(config: ToastMessageConfig) => () => void`,defaultValue:`-`},{prop:`success / info / warning / error`,description:`带语义类型的快捷方法，等价于 open({ type, ...config })。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`loading(config)`,description:`加载态快捷方法，默认会把 duration 设为 0，便于后续按 key 更新。`,type:`(config) => () => void`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key 的消息；不传 key 时清空当前 holder 里的全部消息。`,type:`(key?: string | number) => void`,defaultValue:`-`}],Ee=[{prop:`key`,description:`稳定标识；重复调用同一个 key 时会原位更新，而不是追加新消息。`,type:`string | number`,defaultValue:`自动生成`},{prop:`content`,description:`message 风格的主内容；未传 children 时会直接渲染在正文区域。`,type:`any`,defaultValue:`-`},{prop:`children`,description:`需要 richer JSX 时可直接传 children，优先级高于 content。`,type:`any`,defaultValue:`-`},{prop:`其余字段`,description:`type、duration、action、closable、variant、icon、onClose 等字段复用 Toast.Item。`,type:`ToastItemProps 子集`,defaultValue:`-`}],De=()=>{let[e,t]=I.useMessage({getContainer:!1,className:`absolute`,placement:`top-end`,inset:{x:16,y:56},gap:12,maxCount:3,duration:4,closable:!0,pauseOnHover:!0});return p(a(q,()=>({minHeight:`19rem`,children:[c(Object.assign(t=>{let r=H().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=r.childNodes[1],o=r.childNodes[2];i.setAttribute(`type`,`button`),i.className=`btn btn-sm`;let s=t=>{let n=()=>{e.open({key:`deployment-paused`,type:`warning`,title:`Deployment paused`,description:`This one is controlled by messageApi.destroy(key), so it can stay linked to page state.`,duration:0,closable:!0})};typeof n==`function`&&n(t)};i.addEventListener(`click`,s),n(()=>i.removeEventListener(`click`,s)),a.setAttribute(`type`,`button`),a.className=`btn btn-sm btn-ghost`;let c=t=>{let n=()=>{e.destroy(`deployment-paused`)};typeof n==`function`&&n(t)};a.addEventListener(`click`,c),n(()=>a.removeEventListener(`click`,c)),o.setAttribute(`type`,`button`),o.className=`btn btn-sm btn-outline`;let l=t=>{let n=()=>{e.success({key:`auto-save-${Date.now()}`,title:`Auto saved`,description:`This toast closes itself after 4 seconds and pauses while hovered.`,duration:4})};typeof n==`function`&&n(t)};return o.addEventListener(`click`,l),n(()=>o.removeEventListener(`click`,l)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),t,c(e=>U().content.cloneNode(!0).firstChild)]})),e=>h(()=>{}))},Oe=`const [messageApi, contextHolder] = Toast.useMessage({
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
</div>`,J=()=>{let i={items:D(`preview`),variants:D(`preview`),controlled:D(`preview`),useMessage:D(`preview`),compound:D(`preview`),basic:D(`preview`),placements:D(`preview`),stacked:D(`preview`),inset:D(`preview`),host:D(`preview`)},[s,b]=I.useMessage({placement:`top-end`,inset:{x:16,y:68},gap:12,maxCount:3,zIndex:80});return w(()=>p((()=>{let p=e(()=>{let p=u(),h=_e().content.cloneNode(!0),x=h.firstChild,w=x.childNodes[4],D=w.parentNode,k=x.childNodes[5],M=k.parentNode,P=x.childNodes[6],F=P.parentNode,L=x.childNodes[7],R=L.parentNode,z=x.childNodes[8],B=z.parentNode,V=x.childNodes[11],H=V.parentNode,U=x.childNodes[12],G=U.parentNode,J=x.childNodes[13],ke=J.parentNode,Y=x.childNodes[14],Ae=Y.parentNode,X=x.childNodes[15],je=X.parentNode,Z=x.childNodes[16].childNodes[2],Me=Z.parentNode,Ne=x.childNodes[16].childNodes[5],Pe=Ne.parentNode,Fe=x.childNodes[16].childNodes[7],Q=Fe.parentNode,Ie=x.childNodes[16].childNodes[9],Le=Ie.parentNode,Re=x.childNodes[16].childNodes[11],ze=Re.parentNode;p.appendChild(h),j(()=>{let e=a(W,()=>({title:`Message-like items`,summary:`最直接的语义用法：把内容交给 Toast.Item，根容器继续负责定位和堆叠。`,tab:i.items,preview:S(()=>(()=>{let e=a(I,()=>({className:`absolute`,placement:`top-end`,inset:{x:16,y:16},gap:12,children:be.slice(0,3).map(e=>a(I.Item,()=>({key:e.title,type:e.type,title:e.title,description:e.description,closable:!0})))}));return a(q,()=>({minHeight:`19rem`,children:[c(e=>te().content.cloneNode(!0).firstChild),e]}))})()),code:`<Toast className="absolute" placement="top-end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`}));y(()=>O(e,D,w))}),j(()=>{let t=a(W,()=>({title:`Variants and actions`,summary:`soft、outline、solid 三种外观可以调整存在感，action 让单条提示具备 message 之上的轻量操作能力。`,tab:i.variants,preview:S(()=>e(t=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode;return j(()=>{let t=xe.map(t=>(()=>{let n=e(()=>{let e=u(),n=ee(`div`,e);m(e,n),o(n,`absolute left-3 top-3 badge badge-ghost badge-sm`);let r=_(`rue:slot:anchor`);return m(n,r),j(()=>{let e=t.label;y(()=>O(e,n,r))}),e}),r=a(I.Item,()=>({type:t.type,variant:t.variant,title:`${t.label} feedback`,description:`Toast.Item 可以直接承载业务动作。`,action:c(Object.assign(e=>{let t=g(`button`,e);return t.setAttribute(`type`,`button`),t.className=`btn btn-xs btn-ghost`,C(t,l(`Undo`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),closable:!0})),i=a(I,()=>({className:`absolute`,placement:`bottom-start`,inset:{x:12,y:12},children:r}));return a(q,()=>({key:t.label,minHeight:`11rem`,children:[n,i]}))})());y(()=>O(t,i,r))}),n})),code:`<Toast.Item
  type="warning"
  variant="outline"
  title="Changes saved locally"
  description="Sync is waiting for your confirmation."
  action={<button type="button" className="btn btn-xs btn-ghost">Undo</button>}
  closable
/>`}));y(()=>O(t,M,k))}),j(()=>{let e=a(W,()=>({title:`Controlled and auto close`,summary:`受控关闭适合和外部状态联动；自动关闭则提供了 message 常用的短时反馈体验，并支持 hover 暂停。`,tab:i.controlled,preview:S(()=>T(De,()=>({}))),code:Oe}));y(()=>O(e,F,P))}),j(()=>{let e=a(W,()=>({title:`Toast.useMessage`,summary:`参考常见 message hook 的形态：把 contextHolder 放进页面即可，真正的消息默认弹到全局页面层；如果你要留在当前 box，再显式传 getContainer={false}。`,tab:i.useMessage,preview:S(()=>a(q,()=>({minHeight:`18rem`,children:[c(Object.assign(e=>{let t=re().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1],a=t.childNodes[2],o=t.childNodes[3];r.setAttribute(`type`,`button`),r.className=`btn btn-sm btn-primary`;let c=e=>{let t=()=>{s.open({type:`success`,content:`This is a prompt message for success, and it will disappear in 10 seconds`,duration:10})};typeof t==`function`&&t(e)};r.addEventListener(`click`,c),n(()=>r.removeEventListener(`click`,c)),i.setAttribute(`type`,`button`),i.className=`btn btn-sm btn-outline`;let l=e=>{let t=()=>{s.loading({key:`publish`,content:`Publishing changes to preview...`})};typeof t==`function`&&t(e)};i.addEventListener(`click`,l),n(()=>i.removeEventListener(`click`,l)),a.setAttribute(`type`,`button`),a.className=`btn btn-sm btn-outline`;let u=e=>{let t=()=>{s.open({key:`publish`,type:`success`,content:`Published to preview. Same key, same slot, new state.`,duration:2})};typeof t==`function`&&t(e)};a.addEventListener(`click`,u),n(()=>a.removeEventListener(`click`,u)),o.setAttribute(`type`,`button`),o.className=`btn btn-sm btn-ghost`;let d=e=>{let t=()=>{s.destroy()};typeof t==`function`&&t(e)};return o.addEventListener(`click`,d),n(()=>o.removeEventListener(`click`,d)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),b]}))),code:`const [messageApi, contextHolder] = Toast.useMessage({
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
// })`}));y(()=>O(e,R,L))}),j(()=>{let t=a(W,()=>({title:`Compound composition`,summary:`如果标题、说明和操作区需要更强定制，可以直接使用 compound 子组件自己拼装。`,tab:i.compound,preview:S(()=>(()=>{let t=e(()=>{let e=u();return e.appendChild(ie().content.cloneNode(!0)),e}),n=a(I.Icon,()=>({className:`bg-secondary/12 text-secondary`,children:t})),r=a(I.Title,()=>({children:`Workspace synced`})),i=a(I.Description,()=>({children:`Compound API 适合带结构化说明、额外按钮和自定义图标的业务提示。`})),o=a(I.Content,()=>({children:[r,i,c(e=>ae().content.cloneNode(!0).firstChild)]})),s=a(I.Close,()=>({className:`text-base-content/50 hover:bg-base-200 hover:text-base-content`})),l=a(I.Action,()=>({className:`ml-3 items-start self-start`,children:s})),d=a(I.Item,()=>({variant:`outline`,className:`max-w-md`,children:[n,o,l]})),f=a(I,()=>({className:`absolute`,placement:`bottom-start`,inset:{x:16,y:16},children:d}));return a(q,()=>({minHeight:`15rem`,children:f}))})()),code:`<Toast className="absolute" placement="bottom-start" inset={{ x: 16, y: 16 }}>
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
</Toast>`}));y(()=>O(t,B,z))}),j(()=>{let e=a(W,()=>({title:`Toast with alert inside`,summary:`展示基础示例，Toast 本体只包一层定位容器，内部内容完全由你决定。`,tab:i.basic,preview:S(()=>T(q,()=>({children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(oe().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(se().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return E(t,I,()=>({className:`absolute`,inset:16,gap:10,children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(ce().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]}))),code:`<div className="relative h-56 overflow-hidden rounded-box border border-base-300 bg-base-100">
  <Toast className="absolute" inset={16} gap={10}>
    <div role="alert" className="alert alert-info shadow-sm">
      <span>New message arrived.</span>
    </div>
  </Toast>
</div>`}));y(()=>O(e,H,V))}),j(()=>{let e=a(W,()=>({title:`Toast placements`,summary:`placement 九宫格别名和 horizontal / vertical 支持层仍然都可用，基础布局 API 不需要额外改造。`,tab:i.placements,preview:S(()=>c(Object.assign(e=>{let i=le().content.cloneNode(!0).firstChild,a=i.childNodes[0],o=a.parentNode,s=[];return j(()=>{s=A(o,a,s,ye||[],(e,t)=>e.label,(e,n)=>{let i=d(e);return t((e,t,n)=>r(e,n,()=>T(q,()=>({minHeight:`9.5rem`,children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=g(`div`,t);C(t,n),n.className=`absolute left-3 top-3 badge badge-ghost badge-sm`;let r=l(``);return C(n,r),N(r,()=>i.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return E(t,I,()=>({className:`absolute`,placement:i.get().placement,inset:{x:12,y:12},children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=g(`div`,t);C(t,n),n.setAttribute(`role`,`alert`);let r;j(()=>{let e=`${ve[i.get().tone]} shadow-sm`,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.className=t)});let a=g(`span`,n);C(n,a);let o=l(``);return C(a,o),N(o,()=>i.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>f(s)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),code:`<Toast className="absolute" placement="top-start" inset={{ x: 12, y: 12 }}>
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
</Toast>`}));y(()=>O(e,G,U))}),j(()=>{let e=a(W,()=>({title:`Stacked toasts`,summary:`基础的多条堆叠示例展示，同时和横向、倒序这些布局控制一起展示。`,tab:i.stacked,preview:S(()=>c(Object.assign(e=>{let t=ue().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode,a=t.childNodes[1],o=a.parentNode,s=v(i);E(s,q,()=>({children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return E(t,I,()=>({className:`absolute`,vertical:`top`,horizontal:`end`,inset:{x:16,y:16},gap:12,children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=g(`div`,t);C(t,n),n.setAttribute(`role`,`alert`),n.className=`alert alert-info shadow-sm`;let r=g(`span`,n);return C(n,r),C(r,l(`New mail arrived.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=g(`div`,t);C(t,n),n.setAttribute(`role`,`alert`),n.className=`alert alert-success shadow-sm`;let r=g(`span`,n);return C(n,r),C(r,l(`Message sent successfully.`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(s,n);let d=v(o);return E(d,q,()=>({children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return E(t,I,()=>({className:`absolute`,placement:`bottom-start`,stack:`horizontal`,reverse:!0,inset:{x:16,y:16},gap:12,children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=g(`div`,t);C(t,n),n.setAttribute(`role`,`alert`),n.className=`alert alert-warning shadow-sm`;let r=g(`span`,n);return C(n,r),C(r,l(`Rollback ready`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=g(`div`,t);C(t,n),n.setAttribute(`role`,`alert`),n.className=`alert alert-info shadow-sm`;let r=g(`span`,n);return C(n,r),C(r,l(`Deploy queued`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(d,a),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Toast className="absolute" vertical="top" horizontal="end" inset={{ x: 16, y: 16 }} gap={12}>
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
</Toast>`}));y(()=>O(e,ke,J))}),j(()=>{let e=a(W,()=>({title:`Inset and layer control`,summary:`inset 负责把提示从边缘收进来，zIndex 用于压过页面中的局部浮层，适合嵌入 mock 页面或设计稿容器。`,tab:i.inset,preview:S(()=>T(q,()=>({minHeight:`15rem`,children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(de().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(fe().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return E(t,I,()=>({className:`absolute`,placement:`top-end`,inset:{x:20,y:20},gap:10,zIndex:30,children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(pe().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(me().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]}))),code:`<Toast
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
</Toast>`}));y(()=>O(e,Ae,Y))}),j(()=>{let e=a(W,()=>({title:`Custom host element`,summary:`需要语义容器时，可以把根节点改成 section，并直接挂上 status / aria-live 之类的可访问性语义。`,tab:i.host,preview:S(()=>T(q,()=>({children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return E(t,I,()=>({as:`section`,className:`absolute`,placement:`top`,inset:{x:16,y:16},role:`status`,"aria-live":`polite`,gap:10,children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(he().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(ge().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))),code:`<Toast
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
</Toast>`}));y(()=>O(e,je,X))});let Be=v(Me);E(Be,K,()=>({rows:we})),Me.insertBefore(Be,Z);let Ve=v(Pe);E(Ve,K,()=>({rows:Te})),Pe.insertBefore(Ve,Ne);let He=v(Q);E(He,K,()=>({rows:Ee})),Q.insertBefore(He,Fe);let Ue=v(Le);E(Ue,K,()=>({rows:Se})),Le.insertBefore(Ue,Ie);let $=v(ze);return E($,K,()=>({rows:Ce})),ze.insertBefore($,Re),p});return a(L,()=>({children:p}))})(),e=>h(()=>{})))};export{J as default};