import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Yt as a,Z as o,ct as s,et as c,j as l,l as u,mt as d,nt as f,o as p,p as m,t as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as x,i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as C}from"./toast-CEmcMFIX.js";import{r as w}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as T}from"./PreviewBlock-xsXk-Jrr.js";var E=`message`,D=10,O=20,k=`top`,A=0,j=`w-auto min-w-[min(16rem,100%)] max-w-[min(38rem,calc(100vw-2rem))] rounded-2xl px-4 py-2.5 shadow-xl`,M=`text-sm leading-5`,N=new Set([`key`,`content`,`children`,`type`,`duration`,`icon`,`showIcon`,`variant`,`className`,`style`,`onClose`,`onClick`,`closable`,`pauseOnHover`,`closeIcon`,`contentClassName`,`iconClassName`,`closeClassName`,`action`]),P=0,F={},I,L,R=(...e)=>e.filter(Boolean).join(` `),z=e=>Array.isArray(e)?e.flatMap(e=>z(e)):e==null?[]:[e],B=e=>z(e).length>0,V=e=>!!e&&typeof e==`object`&&!Array.isArray(e),H=e=>V(e)&&Object.keys(e).some(e=>N.has(e)),U=n=>B(n)?u(i=>{let a=g(`div`,i);t(()=>{_(a,M)});let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n;r(()=>p(e,a,s))}),a}):null,W=(e,t)=>t??{x:16,y:e??O},G=(e={})=>{let{placement:t=k,top:n,inset:r,gap:i=D,className:a,...o}=e;return{placement:t,inset:W(n,r),gap:i,className:R(E,a),...o}},K=(e,t,n)=>{let{content:r,children:i,type:a,duration:o,showIcon:s,className:c,contentClassName:l,...u}=e,d=a??t??`neutral`,f=B(i)?i:r;return{...u,type:d,duration:o??n,showIcon:s??d!==`neutral`,className:R(j,c),contentClassName:R(`min-w-0`,l),children:U(f)}},q=(...e)=>{if(H(e[0]))return e[0];let[t,n,r]=e;return{content:t,duration:typeof n==`number`?n:void 0,onClose:typeof n==`function`?n:typeof r==`function`?r:void 0}},J=[`th`,`en`].join(``),Y=(e,t)=>(Object.defineProperty(e,J,{configurable:!0,writable:!0,value:(e,n)=>t.then(e,n)}),e.promise=t,e),X=()=>Y(()=>{},Promise.resolve(!0)),ee=(e,t)=>{let n=!1,r,i=()=>{},a=new Promise(e=>{i=e}),o=()=>{n||(n=!0,i(!0))};return r=e({...t,onClose:e=>{t.onClose?.(e),o()}}),Y(()=>{r?.(),o()},a)},te=e=>{let t=t=>ee(e.open,K(t)),n=(t,n)=>(...r)=>{let i=q(...r);return ee(e.open,K(i,t,n))};return{open:t,success:n(`success`),info:n(`info`),warning:n(`warning`),error:n(`error`),loading:n(`loading`,A),destroy:e.destroy}},ne=(e={})=>{let[t,n]=C.useMessage(G(e)),r=y(`useRef:1:0`,()=>a());return r.current??=te(t),[r.current,n]},re=n=>{let{__rue_rest_omit_0:a,__rue_rest_omit_1:s,__rue_rest_omit_2:l,__rue_rest_omit_3:d,__rue_rest_omit_4:f,__rue_rest_omit_5:m,rest:g,resolvedType:_,resolvedChildren:b}=y(`useSetup:0:0`,()=>i(()=>{let{content:e,children:t,type:r,showIcon:i,className:a,contentClassName:o,...s}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedType:y(`computed:1:1`,()=>v(()=>n.type??`neutral`)),resolvedChildren:y(`computed:1:2`,()=>v(()=>B(n.children)?n.children:n.content))}}));return u(i=>{let a=c(),s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=h(C.Item,{...g,type:_.get(),showIcon:n.showIcon??_.get()!==`neutral`,className:R(j,n.className),contentClassName:R(`min-w-0`,n.contentClassName),children:U(b.get())});r(()=>p(e,a,s))}),a})},ie=n=>{let{__rue_rest_omit_0:a,__rue_rest_omit_1:s,__rue_rest_omit_2:l,__rue_rest_omit_3:d,__rue_rest_omit_4:f,__rue_rest_omit_5:m,rest:g}=y(`useSetup:0:0:dup1`,()=>i(()=>{let{placement:e,top:t,inset:r,gap:i,className:a,children:o,...s}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s}}));return u(i=>{let a=c(),s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=h(C,{...g,placement:n.placement===void 0?k:n.placement,inset:W(n.top,n.inset),gap:n.gap===void 0?D:n.gap,className:R(E,n.className),children:n.children});r(()=>p(e,a,s))}),a})},ae=()=>typeof document>`u`?null:(L&&!L.isConnected&&(L=void 0,I=void 0),L??(L=document.createElement(`div`),L.style.display=`contents`,L.dataset.rueMessageViewport=`true`,document.body.appendChild(L)),L),oe=({options:e})=>{let[t,n]=ne(e);return I=t,n},Z=()=>{let e=ae();if(e)return l(S(oe,{options:F}),e),I},Q=e=>{let t={...e,key:e.key??`rue-message-${P++}`},n=Z();return n?n.open(t):X()},$=Object.assign(ie,{Item:re,useMessage:ne,open:Q,success:(...e)=>Q({...q(...e),type:`success`}),info:(...e)=>Q({...q(...e),type:`info`}),warning:(...e)=>Q({...q(...e),type:`warning`}),error:(...e)=>Q({...q(...e),type:`error`}),loading:(...e)=>{let t=q(...e);return Q({...t,type:`loading`,duration:t.duration??A})},destroy:e=>{let t=Z();t&&t.destroy(e)},config:e=>{F={...F,...e},Z()}}),se=n=>u(i=>{let a=g(`div`,i);_(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=g(`table`,a);o(a,l),_(l,`table table-zebra`);let d=g(`thead`,l);o(l,d);let m=g(`tr`,d);o(d,m);let h=g(`th`,m);o(m,h),o(h,f(`属性`));let v=g(`th`,m);o(m,v),o(v,f(`说明`));let y=g(`th`,m);o(m,y),o(y,f(`类型`));let x=g(`th`,m);o(m,x),o(x,f(`默认值`));let S=g(`tbody`,l);o(l,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return t(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,l,d)=>{p(u(()=>{let i=c(),a=g(`tr`,i);o(i,a),t(()=>{s(a,`key`,String(n.prop))});let l=g(`td`,a);o(a,l);let u=g(`code`,l);o(l,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>p(e,u,d))});let f=g(`td`,a);o(a,f);let m=e(`rue:slot:anchor`);o(f,m),t(()=>{let e=n.description;r(()=>p(e,f,m))});let h=g(`td`,a);o(a,h);let _=g(`code`,h);o(h,_);let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.type;r(()=>p(e,_,v))});let y=g(`td`,a);o(a,y);let b=g(`code`,y);o(y,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>p(e,b,x))}),i}),i,a)}})}),a}),ce=n=>u(i=>{let a=g(`div`,i);_(a,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/45 p-4 shadow-sm`);let s=g(`div`,a);o(a,s),_(s,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),t(()=>{d(s,{minHeight:n.minHeight===void 0?`16rem`:n.minHeight})});let c=e(`rue:slot:anchor`);return o(s,c),t(()=>{let e=n.content;r(()=>p(e,s,c))}),a}),le=[{prop:`placement`,description:`声明式容器定位，支持 top、top-start、top-end、bottom、bottom-start、bottom-end 与 center。`,type:`MessagePlacement`,defaultValue:`'top'`},{prop:`top / inset`,description:`top 是 message 常用的顶部偏移快捷写法；需要更细控制时可以直接传 inset。`,type:`number | string / ToastInset`,defaultValue:`20 / -`},{prop:`gap`,description:`多条消息之间的间距，适合更密集或更舒展的消息节奏。`,type:`number | string`,defaultValue:`10`},{prop:`className / style / zIndex`,description:`保留 Toast 根容器能力，适合把消息嵌进局部面板、工作台或 demo 盒子。`,type:`string / object / number | string`,defaultValue:`-`}],ue=[{prop:`content / children`,description:`主内容字段；未传 children 时会自动把 content 渲染进消息正文。`,type:`any`,defaultValue:`-`},{prop:`type`,description:`支持 neutral、success、info、warning、error、loading 六种状态。`,type:`'neutral' | 'success' | 'info' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant / icon / showIcon`,description:`复用 Rue 现有轻提示视觉语气，并允许覆盖默认图标。`,type:`'soft' | 'solid' | 'outline' / any / boolean`,defaultValue:`'soft' / 自动判断`},{prop:`duration / pauseOnHover`,description:`自动关闭时长，单位秒；0 会保持打开，悬停默认暂停倒计时。`,type:`number | null / boolean`,defaultValue:`实例默认值 / true`},{prop:`action / closable / closeIcon`,description:`补齐轻量操作区与关闭按钮，适合回撤、查看详情或静默关闭。`,type:`any / boolean / any`,defaultValue:`- / false / -`},{prop:`onClose / onClick / className / style`,description:`监听关闭、点击并定制单条消息样式。`,type:`function / function / string / object`,defaultValue:`-`},{prop:`key`,description:`用于 open(config) 或静态 API 复用同一条消息并原位更新。`,type:`string | number`,defaultValue:`自动生成`}],de=[{prop:`Message.useMessage(options)`,description:`返回 [api, contextHolder]，适合把消息约束在局部容器内，并复用 placement、duration、maxCount 等默认值。`,type:`(options) => [MessageInstance, any]`,defaultValue:`-`},{prop:`getContainer`,description:`默认挂到 document.body；传 false 时会退回到 contextHolder 所在容器。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`open(config)`,description:`创建或按 key 更新一条消息，返回可调用、可 then 的 MessageHandle。`,type:`(config: MessageOpenConfig) => MessageHandle`,defaultValue:`-`},{prop:`success / info / warning / error / loading`,description:`快捷方法兼容 content、duration、onClose 三参数，也支持直接传配置对象。`,type:`(...args) => MessageHandle`,defaultValue:`-`},{prop:`MessageHandle`,description:`返回值同时是函数和 PromiseLike；关闭后 then 会 resolve，便于串接异步流程。`,type:`(() => void) & PromiseLike<boolean>`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key；不传 key 时清空当前实例或全局静态实例下的消息。`,type:`(key?: string | number) => void`,defaultValue:`-`},{prop:`Message.config(options)`,description:`配置全局静态消息实例的 placement、top、duration、maxCount、closable 等默认值。`,type:`(options: MessageConfigOptions) => void`,defaultValue:`-`}],fe=`import { Message } from '@rue-js/design'

<div className="relative min-h-72 overflow-hidden rounded-[1.25rem] border border-base-300">
  <Message className="absolute" placement="top" top={16} gap={12}>
    <Message.Item type="success" content="发布完成，静态资源已刷新。" />
    <Message.Item type="info" content="设计规范已同步到内容工作台。" />
    <Message.Item type="warning" content="还有 2 条检查项等待确认。" closable />
  </Message>
</div>`,pe=`import { Message } from '@rue-js/design'

<div className="grid gap-4">
  <Message.Item
    type="success"
    content={
      <div className="flex items-center gap-3">
        <span className="font-medium">Workspace synced</span>
        <span className="badge badge-success badge-outline badge-sm">v2.8</span>
      </div>
    }
    action={<button type="button" className="btn btn-xs rounded-full">查看变更</button>}
    closable
  />

  <Message.Item
    type="warning"
    variant="outline"
    content="Review pending. 还有 2 个确认项等待处理。"
    action={<span className="badge badge-warning badge-sm">2 items</span>}
    closable
  />
</div>`,me=`import { Message } from '@rue-js/design'

const [messageApi, contextHolder] = Message.useMessage({
  getContainer: false,
  placement: 'top-end',
  top: 12,
  maxCount: 3,
  gap: 12,
  duration: 3,
  closable: true,
})

<div className="relative min-h-80 overflow-hidden rounded-[1.25rem] border border-base-300">
  {contextHolder}

  <button
    type="button"
    onClick={() => {
      messageApi.loading({
        key: 'sync-flow',
        content: '正在同步 design tokens...',
        duration: 0,
      })
    }}
  >
    open loading
  </button>

  <button
    type="button"
    onClick={() => {
      messageApi.success({
        key: 'sync-flow',
        content: '同步完成，缓存已刷新。',
        duration: 2,
      })
    }}
  >
    update by key
  </button>
</div>`,he=`import { Message } from '@rue-js/design'

const [messageApi, contextHolder] = Message.useMessage({
  getContainer: false,
  placement: 'bottom-start',
  inset: { x: 12, y: 80 },
  maxCount: 2,
})

const hide = messageApi.loading({
  key: 'sync-task',
  content: 'Syncing assets...',
  duration: 0,
})

hide.then(() => {
  messageApi.success({
    key: 'sync-task-done',
    content: 'Sync finished. Promise-like handle resolved.',
    duration: 2,
  })
})

hide()`,ge=()=>{let{hookExtraSeed:a,hookApi:s,hookHolder:l}=y(`useSetup:0:0`,()=>i(()=>{let e=y(`ref:1:0`,()=>n(0)),[t,r]=$.useMessage({getContainer:!1,placement:`top-end`,top:12,maxCount:3,gap:12,className:`absolute`,duration:3,closable:!0});return{hookExtraSeed:e,hookApi:t,hookHolder:r}}));return u(n=>{let i=c(),u=e(`rue:component:anchor`);return o(i,u),t(()=>{let e=h(ce,{minHeight:`20rem`,content:x(m,{children:[S(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_color-mix(in_srgb,var(--color-info)_16%,transparent),_transparent_38%),radial-gradient(circle_at_bottom_left,_color-mix(in_srgb,var(--color-success)_18%,transparent),_transparent_36%)]`}),l,x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{s.loading({key:`sync-flow`,content:`正在同步 design tokens...`,duration:0})},children:`open loading`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{s.success({key:`sync-flow`,content:`同步完成，缓存已刷新。`,duration:2})},children:`update by key`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{a.value+=1,s.warning({key:`review-${a.value}`,content:`审阅提醒 #${a.value}`,duration:0})},children:`add another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{s.destroy(`sync-flow`)},children:`destroy key`})]}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击上方按钮后，消息会留在当前 demo 盒子内，并继续支持同 key 更新与局部销毁。`})]})});r(()=>p(e,i,u))}),i})},_e=()=>{let{promiseBatch:a,activePromiseHandle:s,promiseApi:l,promiseHolder:d}=y(`useSetup:0:0:dup1`,()=>i(()=>{let e=y(`ref:1:1`,()=>n(0)),t=y(`ref:1:2`,()=>n(void 0)),[r,i]=$.useMessage({getContainer:!1,placement:`bottom-start`,inset:{x:12,y:80},maxCount:2,gap:12,className:`absolute`,closable:!0});return{promiseBatch:e,activePromiseHandle:t,promiseApi:r,promiseHolder:i}}));return u(n=>{let i=c(),u=e(`rue:component:anchor`);return o(i,u),t(()=>{let e=h(ce,{minHeight:`18rem`,content:x(m,{children:[x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{s.value?.(),a.value+=1;let e=a.value,t=l.loading({key:`promise-flow`,content:x(`span`,{className:`inline-flex items-center gap-2`,children:[x(`span`,{className:`font-medium`,children:[`正在发布批次 #`,e]}),S(`span`,{className:`badge badge-ghost badge-sm`,children:`await close`})]}),duration:0});s.value=t,t.then(()=>{l.success({key:`promise-flow-done-${e}`,content:`批次 #${e} 已完成，promise 已 resolve。`,duration:2})})},children:`开始批次`}),S(`button`,{type:`button`,className:`btn btn-sm btn-outline rounded-full`,onClick:()=>{s.value?.(),s.value=void 0},children:`完成批次`})]}),d,S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击“开始批次”创建 loading handle，再点击“完成批次”观察 then resolve。`})]})});r(()=>p(e,i,u))}),i})},ve=`import { Message } from '@rue-js/design'

Message.config({
  placement: 'top',
  top: 88,
  maxCount: 3,
  duration: 3,
  closable: true,
})

Message.loading({
  key: 'release-board',
  content: '发布批次 #12 正在打包...',
  duration: 0,
})

Message.success({
  key: 'release-board',
  content: '发布完成，CDN 已刷新。',
  duration: 2,
})`,ye=()=>{let{tabs:a,globalSeed:s}=y(`useSetup:0:0:dup2`,()=>i(()=>({tabs:{declarative:y(`ref:1:3`,()=>n(`preview`)),rich:y(`ref:1:4`,()=>n(`preview`)),hook:y(`ref:1:5`,()=>n(`preview`)),promise:y(`ref:1:6`,()=>n(`preview`)),staticApi:y(`ref:1:7`,()=>n(`preview`))},globalSeed:y(`ref:1:8`,()=>n(0))})));return u(n=>{let i=c(),l=e(`rue:component:anchor`);return o(i,l),p(h(w,{children:u(()=>{let n=c(),i=g(`div`,n);o(n,i),_(i,`max-w-none prose prose-sm md:prose-base`);let l=g(`h1`,i);o(i,l),o(l,f(`Message 全局提示`));let u=g(`p`,i);o(i,u),o(u,f(`Rue 现在把原先散在 Toast 里的 message-like 体验收敛成真正的 Message 组件：保留 Rue 更轻、更贴近页面内容的视觉语气，但把消息组件常用的执行逻辑一次补齐，包含 静态 open、语义快捷方法、useMessage、局部 holder、按 key 更新、maxCount、Promise-like close handle 和全局 config。`));let d=g(`div`,i);o(i,d),_(d,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let v=g(`div`,d);o(d,v),_(v,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let y=g(`div`,v);o(v,y),_(y,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(y,f(`Core API`));let b=g(`div`,v);o(v,b),_(b,`mt-2 text-base font-semibold`),o(b,f(`open / useMessage / config`));let C=g(`p`,v);o(v,C),_(C,`mt-2 mb-0 text-sm text-base-content/68`),o(C,f(`既能直接静态调用，也能在局部容器内管理消息流。`));let w=g(`div`,d);o(d,w),_(w,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let E=g(`div`,w);o(w,E),_(E,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(E,f(`Flow Control`));let D=g(`div`,w);o(w,D),_(D,`mt-2 text-base font-semibold`),o(D,f(`key 更新、maxCount、thenable`));let O=g(`p`,w);o(w,O),_(O,`mt-2 mb-0 text-sm text-base-content/68`),o(O,f(`适合把“处理中 → 成功 / 失败”的短反馈串成真正可执行的异步流程。`));let k=g(`div`,d);o(d,k),_(k,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let A=g(`div`,k);o(k,A),_(A,`text-xs uppercase tracking-[0.2em] text-base-content/45`),o(A,f(`Visual Tone`));let j=g(`div`,k);o(k,j),_(j,`mt-2 text-base font-semibold`),o(j,f(`Rue 的轻浮层，而不是通知卡片`));let M=g(`p`,k);o(k,M),_(M,`mt-2 mb-0 text-sm text-base-content/68`),o(M,f(`继续沿用 Rue 的轻提示语言，但把 content、icon、action、closable 都开放给业务层。`));let N=g(`h2`,i);o(i,N),o(N,f(`何时使用`));let P=g(`ul`,i);o(i,P);let F=g(`li`,P);o(P,F),o(F,f(`需要比 Toast 更明确的 message API，但又不想把反馈升级成 Notification 卡片。`));let I=g(`li`,P);o(P,I),o(I,f(`希望在按钮事件或异步流程里直接触发成功、失败、加载、警告等短反馈。`));let L=g(`li`,P);o(P,L),o(L,f(`同一条消息需要按 key 从“处理中”更新到“完成”，并限制最大同时显示数量。`));let R=g(`li`,P);o(P,R),o(R,f(`希望保留 Rue 自己的轻量视觉，同时补齐成熟 message 组件的执行逻辑。`));let z=e(`rue:component:anchor`);o(i,z),t(()=>{let e=h(T,{title:`声明式消息栈`,summary:`把原先 Toast 里的 message-like demo 收敛到真正的 Message / Message.Item API。`,tab:a.declarative,code:fe,preview:()=>S(ce,{minHeight:`18rem`,content:x(m,{children:[S(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-success/12 via-info/10 to-warning/12`}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/75 px-4 py-3 text-sm text-base-content/65 backdrop-blur`,children:`当前是内容工作台，消息作为更轻的流程反馈悬浮在页面之上。`}),x($,{className:`absolute`,placement:`top`,top:16,gap:12,children:[S($.Item,{type:`success`,content:`发布完成，静态资源已刷新。`}),S($.Item,{type:`info`,content:`设计规范已同步到内容工作台。`}),S($.Item,{type:`warning`,content:`还有 2 条检查项等待确认。`,closable:!0})]})]})})});r(()=>p(e,i,z))});let B=e(`rue:component:anchor`);o(i,B),t(()=>{let e=h(T,{title:`富内容、操作区与自定义图标`,summary:`保持短反馈定位不变，但 content 可以直接承载 JSX，action、closable、icon 与 variant 都能往上提。`,tab:a.rich,code:pe,preview:()=>x(`div`,{className:`grid gap-4 not-prose`,children:[S($.Item,{type:`success`,content:x(`div`,{className:`flex items-center gap-3`,children:[S(`span`,{className:`font-medium`,children:`Workspace synced`}),S(`span`,{className:`badge badge-success badge-outline badge-sm`,children:`v2.8`})]}),action:S(`button`,{type:`button`,className:`btn btn-xs rounded-full`,children:`查看变更`}),closable:!0}),S($.Item,{type:`warning`,variant:`outline`,content:`Review pending. 还有 2 个确认项等待处理。`,action:S(`span`,{className:`badge badge-warning badge-sm`,children:`2 items`}),closable:!0}),S($.Item,{type:`loading`,variant:`solid`,icon:S(`span`,{className:`text-sm font-black`,children:`R`}),content:`Packaging docs bundle...`,duration:0})]})});r(()=>p(e,i,B))});let V=e(`rue:component:anchor`);o(i,V),t(()=>{let e=h(T,{title:`Message.useMessage`,summary:`把 contextHolder 放进当前面板后，消息就能稳定留在局部 box 内，并继续支持按 key 更新。`,tab:a.hook,code:me,preview:ge});r(()=>p(e,i,V))});let H=e(`rue:component:anchor`);o(i,H),t(()=>{let e=h(T,{title:`Promise-like close handle`,summary:`loading 返回值既可以直接调用关闭，也可以用 then 串起“关闭后再提示完成”的执行逻辑。`,tab:a.promise,code:he,preview:_e});r(()=>p(e,i,H))});let U=e(`rue:component:anchor`);o(i,U),t(()=>{let e=h(T,{title:`静态 API 与全局配置`,summary:`这组按钮会把消息直接挂到 document.body；适合最简单的业务回调、发布流程和无需显式 holder 的路径。`,tab:a.staticApi,code:ve,preview:()=>x(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`,children:[x(`div`,{className:`mb-4 flex flex-wrap items-center gap-2`,children:[S(`span`,{className:`badge badge-ghost badge-sm`,children:`Global static API`}),x(`span`,{className:`text-sm text-base-content/60`,children:[`当前种子 `,s.value]})]}),x(`div`,{className:`flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{s.value+=1,$.config({placement:`top`,top:88,maxCount:3,duration:3,closable:!0}),$.loading({key:`release-board`,content:`发布批次 #${s.value} 正在打包...`,duration:0})},children:`open global`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{$.success({key:`release-board`,content:`发布完成，CDN 已刷新。`,duration:2})},children:`update global`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.warning({key:`queued-${s.value}`,content:`另一个排队中的任务已入列。`,duration:0})},children:`open another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.destroy()},children:`destroy all`})]}),S(`p`,{className:`mt-4 mb-0 text-sm text-base-content/65`,children:`当前演示会把全局静态消息固定到页面顶部 88px，并把最大并发数限制为 3。`})]})});r(()=>p(e,i,U))});let W=g(`h2`,i);o(i,W),o(W,f(`API`));let G=g(`h3`,i);o(i,G),o(G,f(`Message`));let K=e(`rue:component:anchor`);o(i,K),t(()=>{let e=h(se,{rows:le});r(()=>p(e,i,K))});let q=g(`h3`,i);o(i,q),o(q,f(`Message.Item / open(config)`));let J=e(`rue:component:anchor`);o(i,J),t(()=>{let e=h(se,{rows:ue});r(()=>p(e,i,J))});let Y=g(`h3`,i);o(i,Y),o(Y,f(`useMessage / static methods`));let X=e(`rue:component:anchor`);return o(i,X),t(()=>{let e=h(se,{rows:de});r(()=>p(e,i,X))}),n})}),i,l),i})};export{ye as default};