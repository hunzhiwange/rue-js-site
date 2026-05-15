import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,X as s,_t as c,d as l,f as u,l as d,mt as f,nt as p,ot as m,pt as h,t as g,ut as _,w as v}from"./vapor-runtime-Bp8DIxJg.js";import{a as y,n as b}from"./vapor-helpers-vapor-D3i3KBBg.js";import{n as x,t as S}from"./src-Cl1DK5fX.js";import{n as C}from"./SidebarPlaygroundDesign-CIhn6bFh.js";import{t as w}from"./toast-B6foIcG2.js";import{t as T}from"./PreviewBlock-V0WOf8eg.js";var E=`message`,D=10,O=20,k=`top`,A=0,j=`w-auto min-w-[min(16rem,100%)] max-w-[min(38rem,calc(100vw-2rem))] rounded-2xl px-4 py-2.5 shadow-xl`,M=`text-sm leading-5`,N=new Set([`key`,`content`,`children`,`type`,`duration`,`icon`,`showIcon`,`variant`,`className`,`style`,`onClose`,`onClick`,`closable`,`pauseOnHover`,`closeIcon`,`contentClassName`,`iconClassName`,`closeClassName`,`action`]),P=0,F={},I,L,R=(...e)=>e.filter(Boolean).join(` `),z=e=>Array.isArray(e)?e.flatMap(e=>z(e)):e==null?[]:[e],B=e=>z(e).length>0,V=e=>!!e&&typeof e==`object`&&!Array.isArray(e),H=e=>V(e)&&Object.keys(e).some(e=>N.has(e)),U=t=>B(t)?l(a=>{let o=r(`div`,a);c(()=>{n(o,String(M))});let s=e(`rue:slot:anchor`);return i(o,s),c(()=>{let e=t;_(()=>d(e,o,s))}),o}):null,W=(e,t)=>t??{x:16,y:e??O},G=(e={})=>{let{placement:t=k,top:n,inset:r,gap:i=D,className:a,...o}=e;return{placement:t,inset:W(n,r),gap:i,className:R(E,a),...o}},K=(e,t,n)=>{let{content:r,children:i,type:a,duration:o,showIcon:s,className:c,contentClassName:l,...u}=e,d=a??t??`neutral`,f=B(i)?i:r;return{...u,type:d,duration:o??n,showIcon:s??d!==`neutral`,className:R(j,c),contentClassName:R(`min-w-0`,l),children:U(f)}},q=(...e)=>{if(H(e[0]))return e[0];let[t,n,r]=e;return{content:t,duration:typeof n==`number`?n:void 0,onClose:typeof n==`function`?n:typeof r==`function`?r:void 0}},J=()=>{let e=Promise.resolve(!0),t=()=>{};return t.then=(t,n)=>e.then(t,n),t.promise=e,t},Y=(e,t)=>{let n=!1,r,i=()=>{},a=new Promise(e=>{i=e}),o=()=>{n||(n=!0,i(!0))};r=e({...t,onClose:e=>{t.onClose?.(e),o()}});let s=()=>{r?.(),o()};return s.then=(e,t)=>a.then(e,t),s.promise=a,s},X=e=>{let t=t=>Y(e.open,K(t)),n=(t,n)=>(...r)=>{let i=q(...r);return Y(e.open,K(i,t,n))};return{open:t,success:n(`success`),info:n(`info`),warning:n(`warning`),error:n(`error`),loading:n(`loading`,A),destroy:e.destroy}},ee=(e={})=>{let[t,n]=w.useMessage(G(e)),r=y(`useRef:1:0`,()=>h());return r.current??=X(t),[r.current,n]},te=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:a,__rue_rest_omit_2:o,__rue_rest_omit_3:s,__rue_rest_omit_4:u,__rue_rest_omit_5:m,rest:h,resolvedType:v,resolvedChildren:b}=y(`useSetup:0:0`,()=>f(()=>{let{content:e,children:t,type:r,showIcon:i,className:a,contentClassName:o,...s}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedType:y(`computed:1:1`,()=>p(()=>n.type??`neutral`)),resolvedChildren:y(`computed:1:2`,()=>p(()=>B(n.children)?n.children:n.content))}}));return l(r=>{let a=t(),o=e(`rue:component:anchor`);return i(a,o),c(()=>{let e=g(w.Item,{...h,type:v.get(),showIcon:n.showIcon??v.get()!==`neutral`,className:R(j,n.className),contentClassName:R(`min-w-0`,n.contentClassName),children:U(b.get())});_(()=>d(e,a,o))}),a})},ne=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:a,__rue_rest_omit_2:o,__rue_rest_omit_3:s,__rue_rest_omit_4:u,__rue_rest_omit_5:p,rest:m}=y(`useSetup:0:0:dup1`,()=>f(()=>{let{placement:e,top:t,inset:r,gap:i,className:a,children:o,...s}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s}}));return l(r=>{let a=t(),o=e(`rue:component:anchor`);return i(a,o),c(()=>{let e=g(w,{...m,placement:n.placement===void 0?k:n.placement,inset:W(n.top,n.inset),gap:n.gap===void 0?D:n.gap,className:R(E,n.className),children:n.children});_(()=>d(e,a,o))}),a})},re=()=>typeof document>`u`?null:(L&&!L.isConnected&&(L=void 0,I=void 0),L??(L=document.createElement(`div`),L.style.display=`contents`,L.dataset.rueMessageViewport=`true`,document.body.appendChild(L)),L),ie=({options:e})=>{let[t,n]=ee(e);return I=t,n},Z=()=>{let e=re();if(e)return v(S(ie,{options:F}),e),I},Q=e=>{let t={...e,key:e.key??`rue-message-${P++}`},n=Z();return n?n.open(t):J()},$=Object.assign(ne,{Item:te,useMessage:ee,open:Q,success:(...e)=>Q({...q(...e),type:`success`}),info:(...e)=>Q({...q(...e),type:`info`}),warning:(...e)=>Q({...q(...e),type:`warning`}),error:(...e)=>Q({...q(...e),type:`error`}),loading:(...e)=>{let t=q(...e);return Q({...t,type:`loading`,duration:t.duration??A})},destroy:e=>{let t=Z();t&&t.destroy(e)},config:e=>{F={...F,...e},Z()}}),ae=s=>l(u=>{let f=r(`div`,u);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let h=r(`tr`,m);i(m,h);let g=r(`th`,h);i(h,g),i(g,a(`属性`));let v=r(`th`,h);i(h,v),i(v,a(`说明`));let y=r(`th`,h);i(h,y),i(y,a(`类型`));let x=r(`th`,h);i(h,x),i(x,a(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=b({items:s.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,s,u,f)=>{d(l(()=>{let a=t(),s=r(`tr`,a);i(a,s),c(()=>{o(s,`key`,String(n.prop))});let l=r(`td`,s);i(s,l);let u=r(`code`,l);i(l,u);let f=e(`rue:slot:anchor`);i(u,f),c(()=>{let e=n.prop;_(()=>d(e,u,f))});let p=r(`td`,s);i(s,p);let m=e(`rue:slot:anchor`);i(p,m),c(()=>{let e=n.description;_(()=>d(e,p,m))});let h=r(`td`,s);i(s,h);let g=r(`code`,h);i(h,g);let v=e(`rue:slot:anchor`);i(g,v),c(()=>{let e=n.type;_(()=>d(e,g,v))});let y=r(`td`,s);i(s,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;_(()=>d(e,b,x))}),a}),a,s)}})}),f}),oe=t=>l(a=>{let o=r(`div`,a);n(o,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/45 p-4 shadow-sm`);let l=r(`div`,o);i(o,l),n(l,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),c(()=>{s(l,{minHeight:t.minHeight===void 0?`16rem`:t.minHeight})});let u=e(`rue:slot:anchor`);return i(l,u),c(()=>{let e=t.content;_(()=>d(e,l,u))}),o}),se=[{prop:`placement`,description:`声明式容器定位，支持 top、top-start、top-end、bottom、bottom-start、bottom-end 与 center。`,type:`MessagePlacement`,defaultValue:`'top'`},{prop:`top / inset`,description:`top 是 message 常用的顶部偏移快捷写法；需要更细控制时可以直接传 inset。`,type:`number | string / ToastInset`,defaultValue:`20 / -`},{prop:`gap`,description:`多条消息之间的间距，适合更密集或更舒展的消息节奏。`,type:`number | string`,defaultValue:`10`},{prop:`className / style / zIndex`,description:`保留 Toast 根容器能力，适合把消息嵌进局部面板、工作台或 demo 盒子。`,type:`string / object / number | string`,defaultValue:`-`}],ce=[{prop:`content / children`,description:`主内容字段；未传 children 时会自动把 content 渲染进消息正文。`,type:`any`,defaultValue:`-`},{prop:`type`,description:`支持 neutral、success、info、warning、error、loading 六种状态。`,type:`'neutral' | 'success' | 'info' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant / icon / showIcon`,description:`复用 Rue 现有轻提示视觉语气，并允许覆盖默认图标。`,type:`'soft' | 'solid' | 'outline' / any / boolean`,defaultValue:`'soft' / 自动判断`},{prop:`duration / pauseOnHover`,description:`自动关闭时长，单位秒；0 会保持打开，悬停默认暂停倒计时。`,type:`number | null / boolean`,defaultValue:`实例默认值 / true`},{prop:`action / closable / closeIcon`,description:`补齐轻量操作区与关闭按钮，适合回撤、查看详情或静默关闭。`,type:`any / boolean / any`,defaultValue:`- / false / -`},{prop:`onClose / onClick / className / style`,description:`监听关闭、点击并定制单条消息样式。`,type:`function / function / string / object`,defaultValue:`-`},{prop:`key`,description:`用于 open(config) 或静态 API 复用同一条消息并原位更新。`,type:`string | number`,defaultValue:`自动生成`}],le=[{prop:`Message.useMessage(options)`,description:`返回 [api, contextHolder]，适合把消息约束在局部容器内，并复用 placement、duration、maxCount 等默认值。`,type:`(options) => [MessageInstance, any]`,defaultValue:`-`},{prop:`getContainer`,description:`默认挂到 document.body；传 false 时会退回到 contextHolder 所在容器。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`open(config)`,description:`创建或按 key 更新一条消息，返回可调用、可 then 的 MessageHandle。`,type:`(config: MessageOpenConfig) => MessageHandle`,defaultValue:`-`},{prop:`success / info / warning / error / loading`,description:`快捷方法兼容 content、duration、onClose 三参数，也支持直接传配置对象。`,type:`(...args) => MessageHandle`,defaultValue:`-`},{prop:`MessageHandle`,description:`返回值同时是函数和 PromiseLike；关闭后 then 会 resolve，便于串接异步流程。`,type:`(() => void) & PromiseLike<boolean>`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key；不传 key 时清空当前实例或全局静态实例下的消息。`,type:`(key?: string | number) => void`,defaultValue:`-`},{prop:`Message.config(options)`,description:`配置全局静态消息实例的 placement、top、duration、maxCount、closable 等默认值。`,type:`(options: MessageConfigOptions) => void`,defaultValue:`-`}],ue=`import { Message } from '@rue-js/design'

<div className="relative min-h-72 overflow-hidden rounded-[1.25rem] border border-base-300">
  <Message className="absolute" placement="top" top={16} gap={12}>
    <Message.Item type="success" content="发布完成，静态资源已刷新。" />
    <Message.Item type="info" content="设计规范已同步到内容工作台。" />
    <Message.Item type="warning" content="还有 2 条检查项等待确认。" closable />
  </Message>
</div>`,de=`import { Message } from '@rue-js/design'

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
</div>`,fe=`import { Message } from '@rue-js/design'

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
</div>`,pe=`import { Message } from '@rue-js/design'

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

hide()`,me=()=>{let{hookExtraSeed:n,hookApi:r,hookHolder:a}=y(`useSetup:0:0`,()=>f(()=>{let e=y(`ref:1:0`,()=>m(0)),[t,n]=$.useMessage({getContainer:!1,placement:`top-end`,top:12,maxCount:3,gap:12,className:`absolute`,duration:3,closable:!0});return{hookExtraSeed:e,hookApi:t,hookHolder:n}}));return l(o=>{let s=t(),l=e(`rue:component:anchor`);return i(s,l),c(()=>{let e=g(oe,{minHeight:`20rem`,content:x(u,{children:[S(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_color-mix(in_srgb,var(--color-info)_16%,transparent),_transparent_38%),radial-gradient(circle_at_bottom_left,_color-mix(in_srgb,var(--color-success)_18%,transparent),_transparent_36%)]`}),a,x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{r.loading({key:`sync-flow`,content:`正在同步 design tokens...`,duration:0})},children:`open loading`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{r.success({key:`sync-flow`,content:`同步完成，缓存已刷新。`,duration:2})},children:`update by key`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{n.value+=1,r.warning({key:`review-${n.value}`,content:`审阅提醒 #${n.value}`,duration:0})},children:`add another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{r.destroy(`sync-flow`)},children:`destroy key`})]}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击上方按钮后，消息会留在当前 demo 盒子内，并继续支持同 key 更新与局部销毁。`})]})});_(()=>d(e,s,l))}),s})},he=()=>{let{promiseBatch:n,activePromiseHandle:r,promiseApi:a,promiseHolder:o}=y(`useSetup:0:0:dup1`,()=>f(()=>{let e=y(`ref:1:1`,()=>m(0)),t=y(`ref:1:2`,()=>m()),[n,r]=$.useMessage({getContainer:!1,placement:`bottom-start`,inset:{x:12,y:80},maxCount:2,gap:12,className:`absolute`,closable:!0});return{promiseBatch:e,activePromiseHandle:t,promiseApi:n,promiseHolder:r}}));return l(s=>{let l=t(),f=e(`rue:component:anchor`);return i(l,f),c(()=>{let e=g(oe,{minHeight:`18rem`,content:x(u,{children:[x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{r.value?.(),n.value+=1;let e=n.value,t=a.loading({key:`promise-flow`,content:x(`span`,{className:`inline-flex items-center gap-2`,children:[x(`span`,{className:`font-medium`,children:[`正在发布批次 #`,e]}),S(`span`,{className:`badge badge-ghost badge-sm`,children:`await close`})]}),duration:0});r.value=t,t.then(()=>{a.success({key:`promise-flow-done-${e}`,content:`批次 #${e} 已完成，promise 已 resolve。`,duration:2})})},children:`开始批次`}),S(`button`,{type:`button`,className:`btn btn-sm btn-outline rounded-full`,onClick:()=>{r.value?.(),r.value=void 0},children:`完成批次`})]}),o,S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击“开始批次”创建 loading handle，再点击“完成批次”观察 then resolve。`})]})});_(()=>d(e,l,f))}),l})},ge=`import { Message } from '@rue-js/design'

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
})`,_e=()=>{let{tabs:o,globalSeed:s}=y(`useSetup:0:0:dup2`,()=>f(()=>({tabs:{declarative:y(`ref:1:3`,()=>m(`preview`)),rich:y(`ref:1:4`,()=>m(`preview`)),hook:y(`ref:1:5`,()=>m(`preview`)),promise:y(`ref:1:6`,()=>m(`preview`)),staticApi:y(`ref:1:7`,()=>m(`preview`))},globalSeed:y(`ref:1:8`,()=>m(0))})));return l(f=>{let p=t(),m=e(`rue:component:anchor`);return i(p,m),d(g(C,{children:l(()=>{let l=t(),f=r(`div`,l);i(l,f),n(f,`max-w-none prose prose-sm md:prose-base`);let p=r(`h1`,f);i(f,p),i(p,a(`Message 全局提示`));let m=r(`p`,f);i(f,m),i(m,a(`Rue 现在把原先散在 Toast 里的 message-like 体验收敛成真正的 Message 组件：保留 Rue 更轻、更贴近页面内容的视觉语气，但把 antd message 常用的执行逻辑一次补齐，包含 静态 open、语义快捷方法、useMessage、局部 holder、按 key 更新、maxCount、Promise-like close handle 和全局 config。`));let h=r(`div`,f);i(f,h),n(h,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let v=r(`div`,h);i(h,v),n(v,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let y=r(`div`,v);i(v,y),n(y,`text-xs uppercase tracking-[0.2em] text-base-content/45`),i(y,a(`Core API`));let b=r(`div`,v);i(v,b),n(b,`mt-2 text-base font-semibold`),i(b,a(`open / useMessage / config`));let C=r(`p`,v);i(v,C),n(C,`mt-2 mb-0 text-sm text-base-content/68`),i(C,a(`既能像 antd message 一样直接静态调用，也能在局部容器内管理消息流。`));let w=r(`div`,h);i(h,w),n(w,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let E=r(`div`,w);i(w,E),n(E,`text-xs uppercase tracking-[0.2em] text-base-content/45`),i(E,a(`Flow Control`));let D=r(`div`,w);i(w,D),n(D,`mt-2 text-base font-semibold`),i(D,a(`key 更新、maxCount、thenable`));let O=r(`p`,w);i(w,O),n(O,`mt-2 mb-0 text-sm text-base-content/68`),i(O,a(`适合把“处理中 → 成功 / 失败”的短反馈串成真正可执行的异步流程。`));let k=r(`div`,h);i(h,k),n(k,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let A=r(`div`,k);i(k,A),n(A,`text-xs uppercase tracking-[0.2em] text-base-content/45`),i(A,a(`Visual Tone`));let j=r(`div`,k);i(k,j),n(j,`mt-2 text-base font-semibold`),i(j,a(`Rue 的轻浮层，而不是通知卡片`));let M=r(`p`,k);i(k,M),n(M,`mt-2 mb-0 text-sm text-base-content/68`),i(M,a(`继续沿用 Rue 的轻提示语言，但把 content、icon、action、closable 都开放给业务层。`));let N=r(`h2`,f);i(f,N),i(N,a(`何时使用`));let P=r(`ul`,f);i(f,P);let F=r(`li`,P);i(P,F),i(F,a(`需要比 Toast 更明确的 message API，但又不想把反馈升级成 Notification 卡片。`));let I=r(`li`,P);i(P,I),i(I,a(`希望在按钮事件或异步流程里直接触发成功、失败、加载、警告等短反馈。`));let L=r(`li`,P);i(P,L),i(L,a(`同一条消息需要按 key 从“处理中”更新到“完成”，并限制最大同时显示数量。`));let R=r(`li`,P);i(P,R),i(R,a(`希望保留 Rue 自己的轻量视觉，同时补齐成熟 message 组件的执行逻辑。`));let z=e(`rue:component:anchor`);i(f,z),c(()=>{let e=g(T,{title:`声明式消息栈`,summary:`把原先 Toast 里的 message-like demo 收敛到真正的 Message / Message.Item API。`,tab:o.declarative,code:ue,preview:()=>S(oe,{minHeight:`18rem`,content:x(u,{children:[S(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-success/12 via-info/10 to-warning/12`}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/75 px-4 py-3 text-sm text-base-content/65 backdrop-blur`,children:`当前是内容工作台，消息作为更轻的流程反馈悬浮在页面之上。`}),x($,{className:`absolute`,placement:`top`,top:16,gap:12,children:[S($.Item,{type:`success`,content:`发布完成，静态资源已刷新。`}),S($.Item,{type:`info`,content:`设计规范已同步到内容工作台。`}),S($.Item,{type:`warning`,content:`还有 2 条检查项等待确认。`,closable:!0})]})]})})});_(()=>d(e,f,z))});let B=e(`rue:component:anchor`);i(f,B),c(()=>{let e=g(T,{title:`富内容、操作区与自定义图标`,summary:`保持短反馈定位不变，但 content 可以直接承载 JSX，action、closable、icon 与 variant 都能往上提。`,tab:o.rich,code:de,preview:()=>x(`div`,{className:`grid gap-4 not-prose`,children:[S($.Item,{type:`success`,content:x(`div`,{className:`flex items-center gap-3`,children:[S(`span`,{className:`font-medium`,children:`Workspace synced`}),S(`span`,{className:`badge badge-success badge-outline badge-sm`,children:`v2.8`})]}),action:S(`button`,{type:`button`,className:`btn btn-xs rounded-full`,children:`查看变更`}),closable:!0}),S($.Item,{type:`warning`,variant:`outline`,content:`Review pending. 还有 2 个确认项等待处理。`,action:S(`span`,{className:`badge badge-warning badge-sm`,children:`2 items`}),closable:!0}),S($.Item,{type:`loading`,variant:`solid`,icon:S(`span`,{className:`text-sm font-black`,children:`R`}),content:`Packaging docs bundle...`,duration:0})]})});_(()=>d(e,f,B))});let V=e(`rue:component:anchor`);i(f,V),c(()=>{let e=g(T,{title:`Message.useMessage`,summary:`把 contextHolder 放进当前面板后，消息就能稳定留在局部 box 内，并继续支持按 key 更新。`,tab:o.hook,code:fe,preview:me});_(()=>d(e,f,V))});let H=e(`rue:component:anchor`);i(f,H),c(()=>{let e=g(T,{title:`Promise-like close handle`,summary:`loading 返回值既可以直接调用关闭，也可以用 then 串起“关闭后再提示完成”的执行逻辑。`,tab:o.promise,code:pe,preview:he});_(()=>d(e,f,H))});let U=e(`rue:component:anchor`);i(f,U),c(()=>{let e=g(T,{title:`静态 API 与全局配置`,summary:`这组按钮会把消息直接挂到 document.body；适合最简单的业务回调、发布流程和无需显式 holder 的路径。`,tab:o.staticApi,code:ge,preview:()=>x(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`,children:[x(`div`,{className:`mb-4 flex flex-wrap items-center gap-2`,children:[S(`span`,{className:`badge badge-ghost badge-sm`,children:`Global static API`}),x(`span`,{className:`text-sm text-base-content/60`,children:[`当前种子 `,s.value]})]}),x(`div`,{className:`flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{s.value+=1,$.config({placement:`top`,top:88,maxCount:3,duration:3,closable:!0}),$.loading({key:`release-board`,content:`发布批次 #${s.value} 正在打包...`,duration:0})},children:`open global`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{$.success({key:`release-board`,content:`发布完成，CDN 已刷新。`,duration:2})},children:`update global`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.warning({key:`queued-${s.value}`,content:`另一个排队中的任务已入列。`,duration:0})},children:`open another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.destroy()},children:`destroy all`})]}),S(`p`,{className:`mt-4 mb-0 text-sm text-base-content/65`,children:`当前演示会把全局静态消息固定到页面顶部 88px，并把最大并发数限制为 3。`})]})});_(()=>d(e,f,U))});let W=r(`h2`,f);i(f,W),i(W,a(`API`));let G=r(`h3`,f);i(f,G),i(G,a(`Message`));let K=e(`rue:component:anchor`);i(f,K),c(()=>{let e=g(ae,{rows:se});_(()=>d(e,f,K))});let q=r(`h3`,f);i(f,q),i(q,a(`Message.Item / open(config)`));let J=e(`rue:component:anchor`);i(f,J),c(()=>{let e=g(ae,{rows:ce});_(()=>d(e,f,J))});let Y=r(`h3`,f);i(f,Y),i(Y,a(`useMessage / static methods`));let X=e(`rue:component:anchor`);return i(f,X),c(()=>{let e=g(ae,{rows:le});_(()=>d(e,f,X))}),l})}),p,m),p})};export{_e as default};