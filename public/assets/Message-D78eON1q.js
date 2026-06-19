import{$ as e,Jt as t,Q as n,Qt as r,Wt as i,X as a,Yt as o,et as s,j as c,l,lt as u,o as d,p as f,pt as p,st as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as x,i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as C}from"./toast-fFSvtYyU.js";import{r as w}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as T}from"./PreviewBlock-RQJhyX9w.js";var E=`message`,D=10,O=20,k=`top`,A=0,j=`w-auto min-w-[min(16rem,100%)] max-w-[min(38rem,calc(100vw-2rem))] rounded-2xl px-4 py-2.5 shadow-xl`,M=`text-sm leading-5`,N=new Set([`key`,`content`,`children`,`type`,`duration`,`icon`,`showIcon`,`variant`,`className`,`style`,`onClose`,`onClick`,`closable`,`pauseOnHover`,`closeIcon`,`contentClassName`,`iconClassName`,`closeClassName`,`action`]),P=0,F={},I,L,R=(...e)=>e.filter(Boolean).join(` `),z=e=>Array.isArray(e)?e.flatMap(e=>z(e)):e==null?[]:[e],B=e=>z(e).length>0,V=e=>!!e&&typeof e==`object`&&!Array.isArray(e),H=e=>V(e)&&Object.keys(e).some(e=>N.has(e)),U=e=>B(e)?l(t=>{let o=s(`div`,t);r(()=>{u(o,M)});let c=n(`rue:slot:anchor`);return a(o,c),r(()=>{let t=e;i(()=>d(t,o,c))}),o}):null,W=(e,t)=>t??{x:16,y:e??O},G=(e={})=>{let{placement:t=k,top:n,inset:r,gap:i=D,className:a,...o}=e;return{placement:t,inset:W(n,r),gap:i,className:R(E,a),...o}},K=(e,t,n)=>{let{content:r,children:i,type:a,duration:o,showIcon:s,className:c,contentClassName:l,...u}=e,d=a??t??`neutral`,f=B(i)?i:r;return{...u,type:d,duration:o??n,showIcon:s??d!==`neutral`,className:R(j,c),contentClassName:R(`min-w-0`,l),children:U(f)}},q=(...e)=>{if(H(e[0]))return e[0];let[t,n,r]=e;return{content:t,duration:typeof n==`number`?n:void 0,onClose:typeof n==`function`?n:typeof r==`function`?r:void 0}},J=[`th`,`en`].join(``),Y=(e,t)=>(Object.defineProperty(e,J,{configurable:!0,writable:!0,value:(e,n)=>t.then(e,n)}),e.promise=t,e),X=()=>Y(()=>{},Promise.resolve(!0)),ee=(e,t)=>{let n=!1,r,i=()=>{},a=new Promise(e=>{i=e}),o=()=>{n||(n=!0,i(!0))};return r=e({...t,onClose:e=>{t.onClose?.(e),o()}}),Y(()=>{r?.(),o()},a)},te=e=>{let t=t=>ee(e.open,K(t)),n=(t,n)=>(...r)=>{let i=q(...r);return ee(e.open,K(i,t,n))};return{open:t,success:n(`success`),info:n(`info`),warning:n(`warning`),error:n(`error`),loading:n(`loading`,A),destroy:e.destroy}},ne=(e={})=>{let[n,r]=C.useMessage(G(e)),i=y(`useRef:1:0`,()=>t());return i.current??=te(n),[i.current,r]},re=t=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:f,__rue_rest_omit_4:p,__rue_rest_omit_5:m,rest:g,resolvedType:v,resolvedChildren:b}=y(`useSetup:0:0`,()=>o(()=>{let{content:e,children:n,type:r,showIcon:i,className:a,contentClassName:o,...s}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedType:y(`computed:1:1`,()=>_(()=>t.type??`neutral`)),resolvedChildren:y(`computed:1:2`,()=>_(()=>B(t.children)?t.children:t.content))}}));return l(o=>{let s=e(),c=n(`rue:component:anchor`);return a(s,c),r(()=>{let e=h(C.Item,{...g,type:v.get(),showIcon:t.showIcon??v.get()!==`neutral`,className:R(j,t.className),contentClassName:R(`min-w-0`,t.contentClassName),children:U(b.get())});i(()=>d(e,s,c))}),s})},ie=t=>{let{__rue_rest_omit_0:s,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:f,__rue_rest_omit_4:p,__rue_rest_omit_5:m,rest:g}=y(`useSetup:0:0:dup1`,()=>o(()=>{let{placement:e,top:n,inset:r,gap:i,className:a,children:o,...s}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s}}));return l(o=>{let s=e(),c=n(`rue:component:anchor`);return a(s,c),r(()=>{let e=h(C,{...g,placement:t.placement===void 0?k:t.placement,inset:W(t.top,t.inset),gap:t.gap===void 0?D:t.gap,className:R(E,t.className),children:t.children});i(()=>d(e,s,c))}),s})},ae=()=>typeof document>`u`?null:(L&&!L.isConnected&&(L=void 0,I=void 0),L??(L=document.createElement(`div`),L.style.display=`contents`,L.dataset.rueMessageViewport=`true`,document.body.appendChild(L)),L),oe=({options:e})=>{let[t,n]=ne(e);return I=t,n},Z=()=>{let e=ae();if(e)return c(S(oe,{options:F}),e),I},Q=e=>{let t={...e,key:e.key??`rue-message-${P++}`},n=Z();return n?n.open(t):X()},$=Object.assign(ie,{Item:re,useMessage:ne,open:Q,success:(...e)=>Q({...q(...e),type:`success`}),info:(...e)=>Q({...q(...e),type:`info`}),warning:(...e)=>Q({...q(...e),type:`warning`}),error:(...e)=>Q({...q(...e),type:`error`}),loading:(...e)=>{let t=q(...e);return Q({...t,type:`loading`,duration:t.duration??A})},destroy:e=>{let t=Z();t&&t.destroy(e)},config:e=>{F={...F,...e},Z()}}),se=t=>l(o=>{let c=s(`div`,o);u(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=s(`table`,c);a(c,f),u(f,`table table-zebra`);let p=s(`thead`,f);a(f,p);let h=s(`tr`,p);a(p,h);let _=s(`th`,h);a(h,_),a(_,g(`属性`));let v=s(`th`,h);a(h,v),a(v,g(`说明`));let y=s(`th`,h);a(h,y),a(y,g(`类型`));let x=s(`th`,h);a(h,x),a(x,g(`默认值`));let S=s(`tbody`,f);a(f,S);let C=n(`rue:list:start`),w=n(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return r(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,o,c,u,f)=>{d(l(()=>{let o=e(),c=s(`tr`,o);a(o,c),r(()=>{m(c,`key`,String(t.prop))});let l=s(`td`,c);a(c,l);let u=s(`code`,l);a(l,u);let f=n(`rue:slot:anchor`);a(u,f),r(()=>{let e=t.prop;i(()=>d(e,u,f))});let p=s(`td`,c);a(c,p);let h=n(`rue:slot:anchor`);a(p,h),r(()=>{let e=t.description;i(()=>d(e,p,h))});let g=s(`td`,c);a(c,g);let _=s(`code`,g);a(g,_);let v=n(`rue:slot:anchor`);a(_,v),r(()=>{let e=t.type;i(()=>d(e,_,v))});let y=s(`td`,c);a(c,y);let b=s(`code`,y);a(y,b);let x=n(`rue:slot:anchor`);return a(b,x),r(()=>{let e=t.defaultValue;i(()=>d(e,b,x))}),o}),o,c)}})}),c}),ce=e=>l(t=>{let o=s(`div`,t);u(o,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/45 p-4 shadow-sm`);let c=s(`div`,o);a(o,c),u(c,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),r(()=>{p(c,{minHeight:e.minHeight===void 0?`16rem`:e.minHeight})});let l=n(`rue:slot:anchor`);return a(c,l),r(()=>{let t=e.content;i(()=>d(t,c,l))}),o}),le=[{prop:`placement`,description:`声明式容器定位，支持 top、top-start、top-end、bottom、bottom-start、bottom-end 与 center。`,type:`MessagePlacement`,defaultValue:`'top'`},{prop:`top / inset`,description:`top 是 message 常用的顶部偏移快捷写法；需要更细控制时可以直接传 inset。`,type:`number | string / ToastInset`,defaultValue:`20 / -`},{prop:`gap`,description:`多条消息之间的间距，适合更密集或更舒展的消息节奏。`,type:`number | string`,defaultValue:`10`},{prop:`className / style / zIndex`,description:`保留 Toast 根容器能力，适合把消息嵌进局部面板、工作台或 demo 盒子。`,type:`string / object / number | string`,defaultValue:`-`}],ue=[{prop:`content / children`,description:`主内容字段；未传 children 时会自动把 content 渲染进消息正文。`,type:`any`,defaultValue:`-`},{prop:`type`,description:`支持 neutral、success、info、warning、error、loading 六种状态。`,type:`'neutral' | 'success' | 'info' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant / icon / showIcon`,description:`复用 Rue 现有轻提示视觉语气，并允许覆盖默认图标。`,type:`'soft' | 'solid' | 'outline' / any / boolean`,defaultValue:`'soft' / 自动判断`},{prop:`duration / pauseOnHover`,description:`自动关闭时长，单位秒；0 会保持打开，悬停默认暂停倒计时。`,type:`number | null / boolean`,defaultValue:`实例默认值 / true`},{prop:`action / closable / closeIcon`,description:`补齐轻量操作区与关闭按钮，适合回撤、查看详情或静默关闭。`,type:`any / boolean / any`,defaultValue:`- / false / -`},{prop:`onClose / onClick / className / style`,description:`监听关闭、点击并定制单条消息样式。`,type:`function / function / string / object`,defaultValue:`-`},{prop:`key`,description:`用于 open(config) 或静态 API 复用同一条消息并原位更新。`,type:`string | number`,defaultValue:`自动生成`}],de=[{prop:`Message.useMessage(options)`,description:`返回 [api, contextHolder]，适合把消息约束在局部容器内，并复用 placement、duration、maxCount 等默认值。`,type:`(options) => [MessageInstance, any]`,defaultValue:`-`},{prop:`getContainer`,description:`默认挂到 document.body；传 false 时会退回到 contextHolder 所在容器。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`open(config)`,description:`创建或按 key 更新一条消息，返回可调用、可 then 的 MessageHandle。`,type:`(config: MessageOpenConfig) => MessageHandle`,defaultValue:`-`},{prop:`success / info / warning / error / loading`,description:`快捷方法兼容 content、duration、onClose 三参数，也支持直接传配置对象。`,type:`(...args) => MessageHandle`,defaultValue:`-`},{prop:`MessageHandle`,description:`返回值同时是函数和 PromiseLike；关闭后 then 会 resolve，便于串接异步流程。`,type:`(() => void) & PromiseLike<boolean>`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key；不传 key 时清空当前实例或全局静态实例下的消息。`,type:`(key?: string | number) => void`,defaultValue:`-`},{prop:`Message.config(options)`,description:`配置全局静态消息实例的 placement、top、duration、maxCount、closable 等默认值。`,type:`(options: MessageConfigOptions) => void`,defaultValue:`-`}],fe=`import { Message } from '@rue-js/design'

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

hide()`,ge=()=>{let{hookExtraSeed:t,hookApi:s,hookHolder:c}=y(`useSetup:0:0`,()=>o(()=>{let e=y(`ref:1:0`,()=>v(0)),[t,n]=$.useMessage({getContainer:!1,placement:`top-end`,top:12,maxCount:3,gap:12,className:`absolute`,duration:3,closable:!0});return{hookExtraSeed:e,hookApi:t,hookHolder:n}}));return l(o=>{let l=e(),u=n(`rue:component:anchor`);return a(l,u),r(()=>{let e=h(ce,{minHeight:`20rem`,content:x(f,{children:[S(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_color-mix(in_srgb,var(--color-info)_16%,transparent),_transparent_38%),radial-gradient(circle_at_bottom_left,_color-mix(in_srgb,var(--color-success)_18%,transparent),_transparent_36%)]`}),c,x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{s.loading({key:`sync-flow`,content:`正在同步 design tokens...`,duration:0})},children:`open loading`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{s.success({key:`sync-flow`,content:`同步完成，缓存已刷新。`,duration:2})},children:`update by key`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{t.value+=1,s.warning({key:`review-${t.value}`,content:`审阅提醒 #${t.value}`,duration:0})},children:`add another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{s.destroy(`sync-flow`)},children:`destroy key`})]}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击上方按钮后，消息会留在当前 demo 盒子内，并继续支持同 key 更新与局部销毁。`})]})});i(()=>d(e,l,u))}),l})},_e=()=>{let{promiseBatch:t,activePromiseHandle:s,promiseApi:c,promiseHolder:u}=y(`useSetup:0:0:dup1`,()=>o(()=>{let e=y(`ref:1:1`,()=>v(0)),t=y(`ref:1:2`,()=>v(void 0)),[n,r]=$.useMessage({getContainer:!1,placement:`bottom-start`,inset:{x:12,y:80},maxCount:2,gap:12,className:`absolute`,closable:!0});return{promiseBatch:e,activePromiseHandle:t,promiseApi:n,promiseHolder:r}}));return l(o=>{let l=e(),p=n(`rue:component:anchor`);return a(l,p),r(()=>{let e=h(ce,{minHeight:`18rem`,content:x(f,{children:[x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{s.value?.(),t.value+=1;let e=t.value,n=c.loading({key:`promise-flow`,content:x(`span`,{className:`inline-flex items-center gap-2`,children:[x(`span`,{className:`font-medium`,children:[`正在发布批次 #`,e]}),S(`span`,{className:`badge badge-ghost badge-sm`,children:`await close`})]}),duration:0});s.value=n,n.then(()=>{c.success({key:`promise-flow-done-${e}`,content:`批次 #${e} 已完成，promise 已 resolve。`,duration:2})})},children:`开始批次`}),S(`button`,{type:`button`,className:`btn btn-sm btn-outline rounded-full`,onClick:()=>{s.value?.(),s.value=void 0},children:`完成批次`})]}),u,S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击“开始批次”创建 loading handle，再点击“完成批次”观察 then resolve。`})]})});i(()=>d(e,l,p))}),l})},ve=`import { Message } from '@rue-js/design'

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
})`,ye=()=>{let{tabs:t,globalSeed:c}=y(`useSetup:0:0:dup2`,()=>o(()=>({tabs:{declarative:y(`ref:1:3`,()=>v(`preview`)),rich:y(`ref:1:4`,()=>v(`preview`)),hook:y(`ref:1:5`,()=>v(`preview`)),promise:y(`ref:1:6`,()=>v(`preview`)),staticApi:y(`ref:1:7`,()=>v(`preview`))},globalSeed:y(`ref:1:8`,()=>v(0))})));return l(o=>{let p=e(),m=n(`rue:component:anchor`);return a(p,m),d(h(w,{children:l(()=>{let o=e(),l=s(`div`,o);a(o,l),u(l,`max-w-none prose prose-sm md:prose-base`);let p=s(`h1`,l);a(l,p),a(p,g(`Message 全局提示`));let m=s(`p`,l);a(l,m),a(m,g(`Rue 现在把原先散在 Toast 里的 message-like 体验收敛成真正的 Message 组件：保留 Rue 更轻、更贴近页面内容的视觉语气，但把消息组件常用的执行逻辑一次补齐，包含 静态 open、语义快捷方法、useMessage、局部 holder、按 key 更新、maxCount、Promise-like close handle 和全局 config。`));let _=s(`div`,l);a(l,_),u(_,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let v=s(`div`,_);a(_,v),u(v,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let y=s(`div`,v);a(v,y),u(y,`text-xs uppercase tracking-[0.2em] text-base-content/45`),a(y,g(`Core API`));let b=s(`div`,v);a(v,b),u(b,`mt-2 text-base font-semibold`),a(b,g(`open / useMessage / config`));let C=s(`p`,v);a(v,C),u(C,`mt-2 mb-0 text-sm text-base-content/68`),a(C,g(`既能直接静态调用，也能在局部容器内管理消息流。`));let w=s(`div`,_);a(_,w),u(w,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let E=s(`div`,w);a(w,E),u(E,`text-xs uppercase tracking-[0.2em] text-base-content/45`),a(E,g(`Flow Control`));let D=s(`div`,w);a(w,D),u(D,`mt-2 text-base font-semibold`),a(D,g(`key 更新、maxCount、thenable`));let O=s(`p`,w);a(w,O),u(O,`mt-2 mb-0 text-sm text-base-content/68`),a(O,g(`适合把“处理中 → 成功 / 失败”的短反馈串成真正可执行的异步流程。`));let k=s(`div`,_);a(_,k),u(k,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let A=s(`div`,k);a(k,A),u(A,`text-xs uppercase tracking-[0.2em] text-base-content/45`),a(A,g(`Visual Tone`));let j=s(`div`,k);a(k,j),u(j,`mt-2 text-base font-semibold`),a(j,g(`Rue 的轻浮层，而不是通知卡片`));let M=s(`p`,k);a(k,M),u(M,`mt-2 mb-0 text-sm text-base-content/68`),a(M,g(`继续沿用 Rue 的轻提示语言，但把 content、icon、action、closable 都开放给业务层。`));let N=s(`h2`,l);a(l,N),a(N,g(`何时使用`));let P=s(`ul`,l);a(l,P);let F=s(`li`,P);a(P,F),a(F,g(`需要比 Toast 更明确的 message API，但又不想把反馈升级成 Notification 卡片。`));let I=s(`li`,P);a(P,I),a(I,g(`希望在按钮事件或异步流程里直接触发成功、失败、加载、警告等短反馈。`));let L=s(`li`,P);a(P,L),a(L,g(`同一条消息需要按 key 从“处理中”更新到“完成”，并限制最大同时显示数量。`));let R=s(`li`,P);a(P,R),a(R,g(`希望保留 Rue 自己的轻量视觉，同时补齐成熟 message 组件的执行逻辑。`));let z=n(`rue:component:anchor`);a(l,z),r(()=>{let e=h(T,{title:`声明式消息栈`,summary:`把原先 Toast 里的 message-like demo 收敛到真正的 Message / Message.Item API。`,tab:t.declarative,code:fe,preview:()=>S(ce,{minHeight:`18rem`,content:x(f,{children:[S(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-success/12 via-info/10 to-warning/12`}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/75 px-4 py-3 text-sm text-base-content/65 backdrop-blur`,children:`当前是内容工作台，消息作为更轻的流程反馈悬浮在页面之上。`}),x($,{className:`absolute`,placement:`top`,top:16,gap:12,children:[S($.Item,{type:`success`,content:`发布完成，静态资源已刷新。`}),S($.Item,{type:`info`,content:`设计规范已同步到内容工作台。`}),S($.Item,{type:`warning`,content:`还有 2 条检查项等待确认。`,closable:!0})]})]})})});i(()=>d(e,l,z))});let B=n(`rue:component:anchor`);a(l,B),r(()=>{let e=h(T,{title:`富内容、操作区与自定义图标`,summary:`保持短反馈定位不变，但 content 可以直接承载 JSX，action、closable、icon 与 variant 都能往上提。`,tab:t.rich,code:pe,preview:()=>x(`div`,{className:`grid gap-4 not-prose`,children:[S($.Item,{type:`success`,content:x(`div`,{className:`flex items-center gap-3`,children:[S(`span`,{className:`font-medium`,children:`Workspace synced`}),S(`span`,{className:`badge badge-success badge-outline badge-sm`,children:`v2.8`})]}),action:S(`button`,{type:`button`,className:`btn btn-xs rounded-full`,children:`查看变更`}),closable:!0}),S($.Item,{type:`warning`,variant:`outline`,content:`Review pending. 还有 2 个确认项等待处理。`,action:S(`span`,{className:`badge badge-warning badge-sm`,children:`2 items`}),closable:!0}),S($.Item,{type:`loading`,variant:`solid`,icon:S(`span`,{className:`text-sm font-black`,children:`R`}),content:`Packaging docs bundle...`,duration:0})]})});i(()=>d(e,l,B))});let V=n(`rue:component:anchor`);a(l,V),r(()=>{let e=h(T,{title:`Message.useMessage`,summary:`把 contextHolder 放进当前面板后，消息就能稳定留在局部 box 内，并继续支持按 key 更新。`,tab:t.hook,code:me,preview:ge});i(()=>d(e,l,V))});let H=n(`rue:component:anchor`);a(l,H),r(()=>{let e=h(T,{title:`Promise-like close handle`,summary:`loading 返回值既可以直接调用关闭，也可以用 then 串起“关闭后再提示完成”的执行逻辑。`,tab:t.promise,code:he,preview:_e});i(()=>d(e,l,H))});let U=n(`rue:component:anchor`);a(l,U),r(()=>{let e=h(T,{title:`静态 API 与全局配置`,summary:`这组按钮会把消息直接挂到 document.body；适合最简单的业务回调、发布流程和无需显式 holder 的路径。`,tab:t.staticApi,code:ve,preview:()=>x(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`,children:[x(`div`,{className:`mb-4 flex flex-wrap items-center gap-2`,children:[S(`span`,{className:`badge badge-ghost badge-sm`,children:`Global static API`}),x(`span`,{className:`text-sm text-base-content/60`,children:[`当前种子 `,c.value]})]}),x(`div`,{className:`flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{c.value+=1,$.config({placement:`top`,top:88,maxCount:3,duration:3,closable:!0}),$.loading({key:`release-board`,content:`发布批次 #${c.value} 正在打包...`,duration:0})},children:`open global`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{$.success({key:`release-board`,content:`发布完成，CDN 已刷新。`,duration:2})},children:`update global`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.warning({key:`queued-${c.value}`,content:`另一个排队中的任务已入列。`,duration:0})},children:`open another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.destroy()},children:`destroy all`})]}),S(`p`,{className:`mt-4 mb-0 text-sm text-base-content/65`,children:`当前演示会把全局静态消息固定到页面顶部 88px，并把最大并发数限制为 3。`})]})});i(()=>d(e,l,U))});let W=s(`h2`,l);a(l,W),a(W,g(`API`));let G=s(`h3`,l);a(l,G),a(G,g(`Message`));let K=n(`rue:component:anchor`);a(l,K),r(()=>{let e=h(se,{rows:le});i(()=>d(e,l,K))});let q=s(`h3`,l);a(l,q),a(q,g(`Message.Item / open(config)`));let J=n(`rue:component:anchor`);a(l,J),r(()=>{let e=h(se,{rows:ue});i(()=>d(e,l,J))});let Y=s(`h3`,l);a(l,Y),a(Y,g(`useMessage / static methods`));let X=n(`rue:component:anchor`);return a(l,X),r(()=>{let e=h(se,{rows:de});i(()=>d(e,l,X))}),o})}),p,m),p})};export{ye as default};