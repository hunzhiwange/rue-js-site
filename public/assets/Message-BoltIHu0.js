import{$ as e,Et as t,G as n,H as r,K as i,Tt as a,W as o,_t as s,at as c,d as l,dt as u,j as d,kt as f,l as p,q as m,t as h,tt as g,xt as _,y as v}from"./vapor-runtime-BAZOdMd8.js";import{a as y,n as b}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as x,t as S}from"./src-DZJ4J6sD.js";import{n as C}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as w}from"./toast-BDWFTJtf.js";import{t as T}from"./PreviewBlock-5K6Tp_o4.js";var E=`message`,D=10,O=20,k=`top`,A=0,j=`w-auto min-w-[min(16rem,100%)] max-w-[min(38rem,calc(100vw-2rem))] rounded-2xl px-4 py-2.5 shadow-xl`,M=`text-sm leading-5`,N=new Set([`key`,`content`,`children`,`type`,`duration`,`icon`,`showIcon`,`variant`,`className`,`style`,`onClose`,`onClick`,`closable`,`pauseOnHover`,`closeIcon`,`contentClassName`,`iconClassName`,`closeClassName`,`action`]),P=0,F={},I,L,R=(...e)=>e.filter(Boolean).join(` `),z=e=>Array.isArray(e)?e.flatMap(e=>z(e)):e==null?[]:[e],B=e=>z(e).length>0,V=e=>!!e&&typeof e==`object`&&!Array.isArray(e),H=e=>V(e)&&Object.keys(e).some(e=>N.has(e)),U=e=>B(e)?l(t=>{let n=i(`div`,t);f(()=>{g(n,String(M))});let a=o(`rue:slot:anchor`);return r(n,a),f(()=>{let t=e;_(()=>p(t,n,a))}),n}):null,W=(e,t)=>t??{x:16,y:e??O},G=(e={})=>{let{placement:t=k,top:n,inset:r,gap:i=D,className:a,...o}=e;return{placement:t,inset:W(n,r),gap:i,className:R(E,a),...o}},K=(e,t,n)=>{let{content:r,children:i,type:a,duration:o,showIcon:s,className:c,contentClassName:l,...u}=e,d=a??t??`neutral`,f=B(i)?i:r;return{...u,type:d,duration:o??n,showIcon:s??d!==`neutral`,className:R(j,c),contentClassName:R(`min-w-0`,l),children:U(f)}},q=(...e)=>{if(H(e[0]))return e[0];let[t,n,r]=e;return{content:t,duration:typeof n==`number`?n:void 0,onClose:typeof n==`function`?n:typeof r==`function`?r:void 0}},J=[`th`,`en`].join(``),Y=(e,t)=>(Object.defineProperty(e,J,{configurable:!0,writable:!0,value:(e,n)=>t.then(e,n)}),e.promise=t,e),X=()=>Y(()=>{},Promise.resolve(!0)),ee=(e,t)=>{let n=!1,r,i=()=>{},a=new Promise(e=>{i=e}),o=()=>{n||(n=!0,i(!0))};return r=e({...t,onClose:e=>{t.onClose?.(e),o()}}),Y(()=>{r?.(),o()},a)},te=e=>{let t=t=>ee(e.open,K(t)),n=(t,n)=>(...r)=>{let i=q(...r);return ee(e.open,K(i,t,n))};return{open:t,success:n(`success`),info:n(`info`),warning:n(`warning`),error:n(`error`),loading:n(`loading`,A),destroy:e.destroy}},ne=(e={})=>{let[t,n]=w.useMessage(G(e)),r=y(`useRef:1:0`,()=>a());return r.current??=te(t),[r.current,n]},re=e=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:a,__rue_rest_omit_2:s,__rue_rest_omit_3:c,__rue_rest_omit_4:d,__rue_rest_omit_5:m,rest:g,resolvedType:v,resolvedChildren:b}=y(`useSetup:0:0`,()=>t(()=>{let{content:t,children:n,type:r,showIcon:i,className:a,contentClassName:o,...s}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedType:y(`computed:1:1`,()=>u(()=>e.type??`neutral`)),resolvedChildren:y(`computed:1:2`,()=>u(()=>B(e.children)?e.children:e.content))}}));return l(t=>{let i=n(),a=o(`rue:component:anchor`);return r(i,a),f(()=>{let t=h(w.Item,{...g,type:v.get(),showIcon:e.showIcon??v.get()!==`neutral`,className:R(j,e.className),contentClassName:R(`min-w-0`,e.contentClassName),children:U(b.get())});_(()=>p(t,i,a))}),i})},ie=e=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:a,__rue_rest_omit_2:s,__rue_rest_omit_3:c,__rue_rest_omit_4:u,__rue_rest_omit_5:d,rest:m}=y(`useSetup:0:0:dup1`,()=>t(()=>{let{placement:t,top:n,inset:r,gap:i,className:a,children:o,...s}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s}}));return l(t=>{let i=n(),a=o(`rue:component:anchor`);return r(i,a),f(()=>{let t=h(w,{...m,placement:e.placement===void 0?k:e.placement,inset:W(e.top,e.inset),gap:e.gap===void 0?D:e.gap,className:R(E,e.className),children:e.children});_(()=>p(t,i,a))}),i})},ae=()=>typeof document>`u`?null:(L&&!L.isConnected&&(L=void 0,I=void 0),L??(L=document.createElement(`div`),L.style.display=`contents`,L.dataset.rueMessageViewport=`true`,document.body.appendChild(L)),L),oe=({options:e})=>{let[t,n]=ne(e);return I=t,n},Z=()=>{let e=ae();if(e)return d(S(oe,{options:F}),e),I},Q=e=>{let t={...e,key:e.key??`rue-message-${P++}`},n=Z();return n?n.open(t):X()},$=Object.assign(ie,{Item:re,useMessage:ne,open:Q,success:(...e)=>Q({...q(...e),type:`success`}),info:(...e)=>Q({...q(...e),type:`info`}),warning:(...e)=>Q({...q(...e),type:`warning`}),error:(...e)=>Q({...q(...e),type:`error`}),loading:(...e)=>{let t=q(...e);return Q({...t,type:`loading`,duration:t.duration??A})},destroy:e=>{let t=Z();t&&t.destroy(e)},config:e=>{F={...F,...e},Z()}}),se=t=>l(a=>{let s=i(`div`,a);g(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=i(`table`,s);r(s,c),g(c,`table table-zebra`);let u=i(`thead`,c);r(c,u);let d=i(`tr`,u);r(u,d);let h=i(`th`,d);r(d,h),r(h,m(`属性`));let v=i(`th`,d);r(d,v),r(v,m(`说明`));let y=i(`th`,d);r(d,y),r(y,m(`类型`));let x=i(`th`,d);r(d,x),r(x,m(`默认值`));let S=i(`tbody`,c);r(c,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return f(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,a,s,c,u)=>{p(l(()=>{let a=n(),s=i(`tr`,a);r(a,s),f(()=>{e(s,`key`,String(t.prop))});let c=i(`td`,s);r(s,c);let l=i(`code`,c);r(c,l);let u=o(`rue:slot:anchor`);r(l,u),f(()=>{let e=t.prop;_(()=>p(e,l,u))});let d=i(`td`,s);r(s,d);let m=o(`rue:slot:anchor`);r(d,m),f(()=>{let e=t.description;_(()=>p(e,d,m))});let h=i(`td`,s);r(s,h);let g=i(`code`,h);r(h,g);let v=o(`rue:slot:anchor`);r(g,v),f(()=>{let e=t.type;_(()=>p(e,g,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),f(()=>{let e=t.defaultValue;_(()=>p(e,b,x))}),a}),a,s)}})}),s}),ce=e=>l(t=>{let n=i(`div`,t);g(n,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/45 p-4 shadow-sm`);let a=i(`div`,n);r(n,a),g(a,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),f(()=>{c(a,{minHeight:e.minHeight===void 0?`16rem`:e.minHeight})});let s=o(`rue:slot:anchor`);return r(a,s),f(()=>{let t=e.content;_(()=>p(t,a,s))}),n}),le=[{prop:`placement`,description:`声明式容器定位，支持 top、top-start、top-end、bottom、bottom-start、bottom-end 与 center。`,type:`MessagePlacement`,defaultValue:`'top'`},{prop:`top / inset`,description:`top 是 message 常用的顶部偏移快捷写法；需要更细控制时可以直接传 inset。`,type:`number | string / ToastInset`,defaultValue:`20 / -`},{prop:`gap`,description:`多条消息之间的间距，适合更密集或更舒展的消息节奏。`,type:`number | string`,defaultValue:`10`},{prop:`className / style / zIndex`,description:`保留 Toast 根容器能力，适合把消息嵌进局部面板、工作台或 demo 盒子。`,type:`string / object / number | string`,defaultValue:`-`}],ue=[{prop:`content / children`,description:`主内容字段；未传 children 时会自动把 content 渲染进消息正文。`,type:`any`,defaultValue:`-`},{prop:`type`,description:`支持 neutral、success、info、warning、error、loading 六种状态。`,type:`'neutral' | 'success' | 'info' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant / icon / showIcon`,description:`复用 Rue 现有轻提示视觉语气，并允许覆盖默认图标。`,type:`'soft' | 'solid' | 'outline' / any / boolean`,defaultValue:`'soft' / 自动判断`},{prop:`duration / pauseOnHover`,description:`自动关闭时长，单位秒；0 会保持打开，悬停默认暂停倒计时。`,type:`number | null / boolean`,defaultValue:`实例默认值 / true`},{prop:`action / closable / closeIcon`,description:`补齐轻量操作区与关闭按钮，适合回撤、查看详情或静默关闭。`,type:`any / boolean / any`,defaultValue:`- / false / -`},{prop:`onClose / onClick / className / style`,description:`监听关闭、点击并定制单条消息样式。`,type:`function / function / string / object`,defaultValue:`-`},{prop:`key`,description:`用于 open(config) 或静态 API 复用同一条消息并原位更新。`,type:`string | number`,defaultValue:`自动生成`}],de=[{prop:`Message.useMessage(options)`,description:`返回 [api, contextHolder]，适合把消息约束在局部容器内，并复用 placement、duration、maxCount 等默认值。`,type:`(options) => [MessageInstance, any]`,defaultValue:`-`},{prop:`getContainer`,description:`默认挂到 document.body；传 false 时会退回到 contextHolder 所在容器。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`open(config)`,description:`创建或按 key 更新一条消息，返回可调用、可 then 的 MessageHandle。`,type:`(config: MessageOpenConfig) => MessageHandle`,defaultValue:`-`},{prop:`success / info / warning / error / loading`,description:`快捷方法兼容 content、duration、onClose 三参数，也支持直接传配置对象。`,type:`(...args) => MessageHandle`,defaultValue:`-`},{prop:`MessageHandle`,description:`返回值同时是函数和 PromiseLike；关闭后 then 会 resolve，便于串接异步流程。`,type:`(() => void) & PromiseLike<boolean>`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key；不传 key 时清空当前实例或全局静态实例下的消息。`,type:`(key?: string | number) => void`,defaultValue:`-`},{prop:`Message.config(options)`,description:`配置全局静态消息实例的 placement、top、duration、maxCount、closable 等默认值。`,type:`(options: MessageConfigOptions) => void`,defaultValue:`-`}],fe=`import { Message } from '@rue-js/design'

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

hide()`,ge=()=>{let{hookExtraSeed:e,hookApi:i,hookHolder:a}=y(`useSetup:0:0`,()=>t(()=>{let e=y(`ref:1:0`,()=>s(0)),[t,n]=$.useMessage({getContainer:!1,placement:`top-end`,top:12,maxCount:3,gap:12,className:`absolute`,duration:3,closable:!0});return{hookExtraSeed:e,hookApi:t,hookHolder:n}}));return l(t=>{let s=n(),c=o(`rue:component:anchor`);return r(s,c),f(()=>{let t=h(ce,{minHeight:`20rem`,content:x(v,{children:[S(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_color-mix(in_srgb,var(--color-info)_16%,transparent),_transparent_38%),radial-gradient(circle_at_bottom_left,_color-mix(in_srgb,var(--color-success)_18%,transparent),_transparent_36%)]`}),a,x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{i.loading({key:`sync-flow`,content:`正在同步 design tokens...`,duration:0})},children:`open loading`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{i.success({key:`sync-flow`,content:`同步完成，缓存已刷新。`,duration:2})},children:`update by key`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{e.value+=1,i.warning({key:`review-${e.value}`,content:`审阅提醒 #${e.value}`,duration:0})},children:`add another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{i.destroy(`sync-flow`)},children:`destroy key`})]}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击上方按钮后，消息会留在当前 demo 盒子内，并继续支持同 key 更新与局部销毁。`})]})});_(()=>p(t,s,c))}),s})},_e=()=>{let{promiseBatch:e,activePromiseHandle:i,promiseApi:a,promiseHolder:c}=y(`useSetup:0:0:dup1`,()=>t(()=>{let e=y(`ref:1:1`,()=>s(0)),t=y(`ref:1:2`,()=>s(void 0)),[n,r]=$.useMessage({getContainer:!1,placement:`bottom-start`,inset:{x:12,y:80},maxCount:2,gap:12,className:`absolute`,closable:!0});return{promiseBatch:e,activePromiseHandle:t,promiseApi:n,promiseHolder:r}}));return l(t=>{let s=n(),l=o(`rue:component:anchor`);return r(s,l),f(()=>{let t=h(ce,{minHeight:`18rem`,content:x(v,{children:[x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{i.value?.(),e.value+=1;let t=e.value,n=a.loading({key:`promise-flow`,content:x(`span`,{className:`inline-flex items-center gap-2`,children:[x(`span`,{className:`font-medium`,children:[`正在发布批次 #`,t]}),S(`span`,{className:`badge badge-ghost badge-sm`,children:`await close`})]}),duration:0});i.value=n,n.then(()=>{a.success({key:`promise-flow-done-${t}`,content:`批次 #${t} 已完成，promise 已 resolve。`,duration:2})})},children:`开始批次`}),S(`button`,{type:`button`,className:`btn btn-sm btn-outline rounded-full`,onClick:()=>{i.value?.(),i.value=void 0},children:`完成批次`})]}),c,S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击“开始批次”创建 loading handle，再点击“完成批次”观察 then resolve。`})]})});_(()=>p(t,s,l))}),s})},ve=`import { Message } from '@rue-js/design'

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
})`,ye=()=>{let{tabs:e,globalSeed:a}=y(`useSetup:0:0:dup2`,()=>t(()=>({tabs:{declarative:y(`ref:1:3`,()=>s(`preview`)),rich:y(`ref:1:4`,()=>s(`preview`)),hook:y(`ref:1:5`,()=>s(`preview`)),promise:y(`ref:1:6`,()=>s(`preview`)),staticApi:y(`ref:1:7`,()=>s(`preview`))},globalSeed:y(`ref:1:8`,()=>s(0))})));return l(t=>{let s=n(),c=o(`rue:component:anchor`);return r(s,c),p(h(C,{children:l(()=>{let t=n(),s=i(`div`,t);r(t,s),g(s,`max-w-none prose prose-sm md:prose-base`);let c=i(`h1`,s);r(s,c),r(c,m(`Message 全局提示`));let l=i(`p`,s);r(s,l),r(l,m(`Rue 现在把原先散在 Toast 里的 message-like 体验收敛成真正的 Message 组件：保留 Rue 更轻、更贴近页面内容的视觉语气，但把消息组件常用的执行逻辑一次补齐，包含 静态 open、语义快捷方法、useMessage、局部 holder、按 key 更新、maxCount、Promise-like close handle 和全局 config。`));let u=i(`div`,s);r(s,u),g(u,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let d=i(`div`,u);r(u,d),g(d,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let y=i(`div`,d);r(d,y),g(y,`text-xs uppercase tracking-[0.2em] text-base-content/45`),r(y,m(`Core API`));let b=i(`div`,d);r(d,b),g(b,`mt-2 text-base font-semibold`),r(b,m(`open / useMessage / config`));let C=i(`p`,d);r(d,C),g(C,`mt-2 mb-0 text-sm text-base-content/68`),r(C,m(`既能直接静态调用，也能在局部容器内管理消息流。`));let w=i(`div`,u);r(u,w),g(w,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let E=i(`div`,w);r(w,E),g(E,`text-xs uppercase tracking-[0.2em] text-base-content/45`),r(E,m(`Flow Control`));let D=i(`div`,w);r(w,D),g(D,`mt-2 text-base font-semibold`),r(D,m(`key 更新、maxCount、thenable`));let O=i(`p`,w);r(w,O),g(O,`mt-2 mb-0 text-sm text-base-content/68`),r(O,m(`适合把“处理中 → 成功 / 失败”的短反馈串成真正可执行的异步流程。`));let k=i(`div`,u);r(u,k),g(k,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let A=i(`div`,k);r(k,A),g(A,`text-xs uppercase tracking-[0.2em] text-base-content/45`),r(A,m(`Visual Tone`));let j=i(`div`,k);r(k,j),g(j,`mt-2 text-base font-semibold`),r(j,m(`Rue 的轻浮层，而不是通知卡片`));let M=i(`p`,k);r(k,M),g(M,`mt-2 mb-0 text-sm text-base-content/68`),r(M,m(`继续沿用 Rue 的轻提示语言，但把 content、icon、action、closable 都开放给业务层。`));let N=i(`h2`,s);r(s,N),r(N,m(`何时使用`));let P=i(`ul`,s);r(s,P);let F=i(`li`,P);r(P,F),r(F,m(`需要比 Toast 更明确的 message API，但又不想把反馈升级成 Notification 卡片。`));let I=i(`li`,P);r(P,I),r(I,m(`希望在按钮事件或异步流程里直接触发成功、失败、加载、警告等短反馈。`));let L=i(`li`,P);r(P,L),r(L,m(`同一条消息需要按 key 从“处理中”更新到“完成”，并限制最大同时显示数量。`));let R=i(`li`,P);r(P,R),r(R,m(`希望保留 Rue 自己的轻量视觉，同时补齐成熟 message 组件的执行逻辑。`));let z=o(`rue:component:anchor`);r(s,z),f(()=>{let t=h(T,{title:`声明式消息栈`,summary:`把原先 Toast 里的 message-like demo 收敛到真正的 Message / Message.Item API。`,tab:e.declarative,code:fe,preview:()=>S(ce,{minHeight:`18rem`,content:x(v,{children:[S(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-success/12 via-info/10 to-warning/12`}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/75 px-4 py-3 text-sm text-base-content/65 backdrop-blur`,children:`当前是内容工作台，消息作为更轻的流程反馈悬浮在页面之上。`}),x($,{className:`absolute`,placement:`top`,top:16,gap:12,children:[S($.Item,{type:`success`,content:`发布完成，静态资源已刷新。`}),S($.Item,{type:`info`,content:`设计规范已同步到内容工作台。`}),S($.Item,{type:`warning`,content:`还有 2 条检查项等待确认。`,closable:!0})]})]})})});_(()=>p(t,s,z))});let B=o(`rue:component:anchor`);r(s,B),f(()=>{let t=h(T,{title:`富内容、操作区与自定义图标`,summary:`保持短反馈定位不变，但 content 可以直接承载 JSX，action、closable、icon 与 variant 都能往上提。`,tab:e.rich,code:pe,preview:()=>x(`div`,{className:`grid gap-4 not-prose`,children:[S($.Item,{type:`success`,content:x(`div`,{className:`flex items-center gap-3`,children:[S(`span`,{className:`font-medium`,children:`Workspace synced`}),S(`span`,{className:`badge badge-success badge-outline badge-sm`,children:`v2.8`})]}),action:S(`button`,{type:`button`,className:`btn btn-xs rounded-full`,children:`查看变更`}),closable:!0}),S($.Item,{type:`warning`,variant:`outline`,content:`Review pending. 还有 2 个确认项等待处理。`,action:S(`span`,{className:`badge badge-warning badge-sm`,children:`2 items`}),closable:!0}),S($.Item,{type:`loading`,variant:`solid`,icon:S(`span`,{className:`text-sm font-black`,children:`R`}),content:`Packaging docs bundle...`,duration:0})]})});_(()=>p(t,s,B))});let V=o(`rue:component:anchor`);r(s,V),f(()=>{let t=h(T,{title:`Message.useMessage`,summary:`把 contextHolder 放进当前面板后，消息就能稳定留在局部 box 内，并继续支持按 key 更新。`,tab:e.hook,code:me,preview:ge});_(()=>p(t,s,V))});let H=o(`rue:component:anchor`);r(s,H),f(()=>{let t=h(T,{title:`Promise-like close handle`,summary:`loading 返回值既可以直接调用关闭，也可以用 then 串起“关闭后再提示完成”的执行逻辑。`,tab:e.promise,code:he,preview:_e});_(()=>p(t,s,H))});let U=o(`rue:component:anchor`);r(s,U),f(()=>{let t=h(T,{title:`静态 API 与全局配置`,summary:`这组按钮会把消息直接挂到 document.body；适合最简单的业务回调、发布流程和无需显式 holder 的路径。`,tab:e.staticApi,code:ve,preview:()=>x(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`,children:[x(`div`,{className:`mb-4 flex flex-wrap items-center gap-2`,children:[S(`span`,{className:`badge badge-ghost badge-sm`,children:`Global static API`}),x(`span`,{className:`text-sm text-base-content/60`,children:[`当前种子 `,a.value]})]}),x(`div`,{className:`flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{a.value+=1,$.config({placement:`top`,top:88,maxCount:3,duration:3,closable:!0}),$.loading({key:`release-board`,content:`发布批次 #${a.value} 正在打包...`,duration:0})},children:`open global`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{$.success({key:`release-board`,content:`发布完成，CDN 已刷新。`,duration:2})},children:`update global`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.warning({key:`queued-${a.value}`,content:`另一个排队中的任务已入列。`,duration:0})},children:`open another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.destroy()},children:`destroy all`})]}),S(`p`,{className:`mt-4 mb-0 text-sm text-base-content/65`,children:`当前演示会把全局静态消息固定到页面顶部 88px，并把最大并发数限制为 3。`})]})});_(()=>p(t,s,U))});let W=i(`h2`,s);r(s,W),r(W,m(`API`));let G=i(`h3`,s);r(s,G),r(G,m(`Message`));let K=o(`rue:component:anchor`);r(s,K),f(()=>{let e=h(se,{rows:le});_(()=>p(e,s,K))});let q=i(`h3`,s);r(s,q),r(q,m(`Message.Item / open(config)`));let J=o(`rue:component:anchor`);r(s,J),f(()=>{let e=h(se,{rows:ue});_(()=>p(e,s,J))});let Y=i(`h3`,s);r(s,Y),r(Y,m(`useMessage / static methods`));let X=o(`rue:component:anchor`);return r(s,X),f(()=>{let e=h(se,{rows:de});_(()=>p(e,s,X))}),t})}),s,c),s})};export{ye as default};