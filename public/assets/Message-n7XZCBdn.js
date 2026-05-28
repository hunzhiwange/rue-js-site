import{$ as e,Gt as t,Kt as n,L as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,ft as p,gt as m,l as h,ot as g,t as _,y as v}from"./vapor-runtime-BR_2rwNk.js";import{a as y,n as b}from"./vapor-helpers-vapor-DkadWylb.js";import{i as x,r as S}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as C}from"./toast-B7yCAu2r.js";import{n as w}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as T}from"./PreviewBlock-DNT1sEzZ.js";var E=`message`,D=10,O=20,k=`top`,A=0,j=`w-auto min-w-[min(16rem,100%)] max-w-[min(38rem,calc(100vw-2rem))] rounded-2xl px-4 py-2.5 shadow-xl`,M=`text-sm leading-5`,N=new Set([`key`,`content`,`children`,`type`,`duration`,`icon`,`showIcon`,`variant`,`className`,`style`,`onClose`,`onClick`,`closable`,`pauseOnHover`,`closeIcon`,`contentClassName`,`iconClassName`,`closeClassName`,`action`]),P=0,F={},I,L,R=(...e)=>e.filter(Boolean).join(` `),z=e=>Array.isArray(e)?e.flatMap(e=>z(e)):e==null?[]:[e],B=e=>z(e).length>0,V=e=>!!e&&typeof e==`object`&&!Array.isArray(e),H=e=>V(e)&&Object.keys(e).some(e=>N.has(e)),U=t=>B(t)?d(n=>{let r=e(`div`,n);c(()=>{u(r,String(M))});let i=l(`rue:slot:anchor`);return s(r,i),c(()=>{let e=t;o(()=>h(e,r,i))}),r}):null,W=(e,t)=>t??{x:16,y:e??O},G=(e={})=>{let{placement:t=k,top:n,inset:r,gap:i=D,className:a,...o}=e;return{placement:t,inset:W(n,r),gap:i,className:R(E,a),...o}},K=(e,t,n)=>{let{content:r,children:i,type:a,duration:o,showIcon:s,className:c,contentClassName:l,...u}=e,d=a??t??`neutral`,f=B(i)?i:r;return{...u,type:d,duration:o??n,showIcon:s??d!==`neutral`,className:R(j,c),contentClassName:R(`min-w-0`,l),children:U(f)}},q=(...e)=>{if(H(e[0]))return e[0];let[t,n,r]=e;return{content:t,duration:typeof n==`number`?n:void 0,onClose:typeof n==`function`?n:typeof r==`function`?r:void 0}},J=[`th`,`en`].join(``),Y=(e,t)=>(Object.defineProperty(e,J,{configurable:!0,writable:!0,value:(e,n)=>t.then(e,n)}),e.promise=t,e),X=()=>Y(()=>{},Promise.resolve(!0)),ee=(e,t)=>{let n=!1,r,i=()=>{},a=new Promise(e=>{i=e}),o=()=>{n||(n=!0,i(!0))};return r=e({...t,onClose:e=>{t.onClose?.(e),o()}}),Y(()=>{r?.(),o()},a)},te=e=>{let t=t=>ee(e.open,K(t)),n=(t,n)=>(...r)=>{let i=q(...r);return ee(e.open,K(i,t,n))};return{open:t,success:n(`success`),info:n(`info`),warning:n(`warning`),error:n(`error`),loading:n(`loading`,A),destroy:e.destroy}},ne=(e={})=>{let[n,r]=C.useMessage(G(e)),i=y(`useRef:1:0`,()=>t());return i.current??=te(n),[i.current,r]},re=e=>{let{__rue_rest_omit_0:t,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:u,__rue_rest_omit_4:f,__rue_rest_omit_5:p,rest:g,resolvedType:v,resolvedChildren:b}=y(`useSetup:0:0`,()=>n(()=>{let{content:t,children:n,type:r,showIcon:i,className:a,contentClassName:o,...s}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedType:y(`computed:1:1`,()=>m(()=>e.type??`neutral`)),resolvedChildren:y(`computed:1:2`,()=>m(()=>B(e.children)?e.children:e.content))}}));return d(t=>{let n=a(),r=l(`rue:component:anchor`);return s(n,r),c(()=>{let t=_(C.Item,{...g,type:v.get(),showIcon:e.showIcon??v.get()!==`neutral`,className:R(j,e.className),contentClassName:R(`min-w-0`,e.contentClassName),children:U(b.get())});o(()=>h(t,n,r))}),n})},ie=e=>{let{__rue_rest_omit_0:t,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:u,__rue_rest_omit_4:f,__rue_rest_omit_5:p,rest:m}=y(`useSetup:0:0:dup1`,()=>n(()=>{let{placement:t,top:n,inset:r,gap:i,className:a,children:o,...s}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s}}));return d(t=>{let n=a(),r=l(`rue:component:anchor`);return s(n,r),c(()=>{let t=_(C,{...m,placement:e.placement===void 0?k:e.placement,inset:W(e.top,e.inset),gap:e.gap===void 0?D:e.gap,className:R(E,e.className),children:e.children});o(()=>h(t,n,r))}),n})},ae=()=>typeof document>`u`?null:(L&&!L.isConnected&&(L=void 0,I=void 0),L??(L=document.createElement(`div`),L.style.display=`contents`,L.dataset.rueMessageViewport=`true`,document.body.appendChild(L)),L),oe=({options:e})=>{let[t,n]=ne(e);return I=t,n},Z=()=>{let e=ae();if(e)return r(S(oe,{options:F}),e),I},Q=e=>{let t={...e,key:e.key??`rue-message-${P++}`},n=Z();return n?n.open(t):X()},$=Object.assign(ie,{Item:re,useMessage:ne,open:Q,success:(...e)=>Q({...q(...e),type:`success`}),info:(...e)=>Q({...q(...e),type:`info`}),warning:(...e)=>Q({...q(...e),type:`warning`}),error:(...e)=>Q({...q(...e),type:`error`}),loading:(...e)=>{let t=q(...e);return Q({...t,type:`loading`,duration:t.duration??A})},destroy:e=>{let t=Z();t&&t.destroy(e)},config:e=>{F={...F,...e},Z()}}),se=t=>d(n=>{let r=e(`div`,n);u(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);s(r,i),u(i,`table table-zebra`);let p=e(`thead`,i);s(i,p);let m=e(`tr`,p);s(p,m);let _=e(`th`,m);s(m,_),s(_,f(`属性`));let v=e(`th`,m);s(m,v),s(v,f(`说明`));let y=e(`th`,m);s(m,y),s(y,f(`类型`));let x=e(`th`,m);s(m,x),s(x,f(`默认值`));let S=e(`tbody`,i);s(i,S);let C=l(`rue:list:start`),w=l(`rue:list:end`);s(S,C),s(S,w);let T=new Map;return c(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,u)=>{h(d(()=>{let n=a(),r=e(`tr`,n);s(n,r),c(()=>{g(r,`key`,String(t.prop))});let i=e(`td`,r);s(r,i);let u=e(`code`,i);s(i,u);let d=l(`rue:slot:anchor`);s(u,d),c(()=>{let e=t.prop;o(()=>h(e,u,d))});let f=e(`td`,r);s(r,f);let p=l(`rue:slot:anchor`);s(f,p),c(()=>{let e=t.description;o(()=>h(e,f,p))});let m=e(`td`,r);s(r,m);let _=e(`code`,m);s(m,_);let v=l(`rue:slot:anchor`);s(_,v),c(()=>{let e=t.type;o(()=>h(e,_,v))});let y=e(`td`,r);s(r,y);let b=e(`code`,y);s(y,b);let x=l(`rue:slot:anchor`);return s(b,x),c(()=>{let e=t.defaultValue;o(()=>h(e,b,x))}),n}),n,r)}})}),r}),ce=t=>d(n=>{let r=e(`div`,n);u(r,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/45 p-4 shadow-sm`);let i=e(`div`,r);s(r,i),u(i,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),c(()=>{p(i,{minHeight:t.minHeight===void 0?`16rem`:t.minHeight})});let a=l(`rue:slot:anchor`);return s(i,a),c(()=>{let e=t.content;o(()=>h(e,i,a))}),r}),le=[{prop:`placement`,description:`声明式容器定位，支持 top、top-start、top-end、bottom、bottom-start、bottom-end 与 center。`,type:`MessagePlacement`,defaultValue:`'top'`},{prop:`top / inset`,description:`top 是 message 常用的顶部偏移快捷写法；需要更细控制时可以直接传 inset。`,type:`number | string / ToastInset`,defaultValue:`20 / -`},{prop:`gap`,description:`多条消息之间的间距，适合更密集或更舒展的消息节奏。`,type:`number | string`,defaultValue:`10`},{prop:`className / style / zIndex`,description:`保留 Toast 根容器能力，适合把消息嵌进局部面板、工作台或 demo 盒子。`,type:`string / object / number | string`,defaultValue:`-`}],ue=[{prop:`content / children`,description:`主内容字段；未传 children 时会自动把 content 渲染进消息正文。`,type:`any`,defaultValue:`-`},{prop:`type`,description:`支持 neutral、success、info、warning、error、loading 六种状态。`,type:`'neutral' | 'success' | 'info' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant / icon / showIcon`,description:`复用 Rue 现有轻提示视觉语气，并允许覆盖默认图标。`,type:`'soft' | 'solid' | 'outline' / any / boolean`,defaultValue:`'soft' / 自动判断`},{prop:`duration / pauseOnHover`,description:`自动关闭时长，单位秒；0 会保持打开，悬停默认暂停倒计时。`,type:`number | null / boolean`,defaultValue:`实例默认值 / true`},{prop:`action / closable / closeIcon`,description:`补齐轻量操作区与关闭按钮，适合回撤、查看详情或静默关闭。`,type:`any / boolean / any`,defaultValue:`- / false / -`},{prop:`onClose / onClick / className / style`,description:`监听关闭、点击并定制单条消息样式。`,type:`function / function / string / object`,defaultValue:`-`},{prop:`key`,description:`用于 open(config) 或静态 API 复用同一条消息并原位更新。`,type:`string | number`,defaultValue:`自动生成`}],de=[{prop:`Message.useMessage(options)`,description:`返回 [api, contextHolder]，适合把消息约束在局部容器内，并复用 placement、duration、maxCount 等默认值。`,type:`(options) => [MessageInstance, any]`,defaultValue:`-`},{prop:`getContainer`,description:`默认挂到 document.body；传 false 时会退回到 contextHolder 所在容器。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`open(config)`,description:`创建或按 key 更新一条消息，返回可调用、可 then 的 MessageHandle。`,type:`(config: MessageOpenConfig) => MessageHandle`,defaultValue:`-`},{prop:`success / info / warning / error / loading`,description:`快捷方法兼容 content、duration、onClose 三参数，也支持直接传配置对象。`,type:`(...args) => MessageHandle`,defaultValue:`-`},{prop:`MessageHandle`,description:`返回值同时是函数和 PromiseLike；关闭后 then 会 resolve，便于串接异步流程。`,type:`(() => void) & PromiseLike<boolean>`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key；不传 key 时清空当前实例或全局静态实例下的消息。`,type:`(key?: string | number) => void`,defaultValue:`-`},{prop:`Message.config(options)`,description:`配置全局静态消息实例的 placement、top、duration、maxCount、closable 等默认值。`,type:`(options: MessageConfigOptions) => void`,defaultValue:`-`}],fe=`import { Message } from '@rue-js/design'

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

hide()`,ge=()=>{let{hookExtraSeed:e,hookApi:t,hookHolder:r}=y(`useSetup:0:0`,()=>n(()=>{let e=y(`ref:1:0`,()=>i(0)),[t,n]=$.useMessage({getContainer:!1,placement:`top-end`,top:12,maxCount:3,gap:12,className:`absolute`,duration:3,closable:!0});return{hookExtraSeed:e,hookApi:t,hookHolder:n}}));return d(n=>{let i=a(),u=l(`rue:component:anchor`);return s(i,u),c(()=>{let n=_(ce,{minHeight:`20rem`,content:x(v,{children:[S(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_color-mix(in_srgb,var(--color-info)_16%,transparent),_transparent_38%),radial-gradient(circle_at_bottom_left,_color-mix(in_srgb,var(--color-success)_18%,transparent),_transparent_36%)]`}),r,x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{t.loading({key:`sync-flow`,content:`正在同步 design tokens...`,duration:0})},children:`open loading`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{t.success({key:`sync-flow`,content:`同步完成，缓存已刷新。`,duration:2})},children:`update by key`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{e.value+=1,t.warning({key:`review-${e.value}`,content:`审阅提醒 #${e.value}`,duration:0})},children:`add another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{t.destroy(`sync-flow`)},children:`destroy key`})]}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击上方按钮后，消息会留在当前 demo 盒子内，并继续支持同 key 更新与局部销毁。`})]})});o(()=>h(n,i,u))}),i})},_e=()=>{let{promiseBatch:e,activePromiseHandle:t,promiseApi:r,promiseHolder:u}=y(`useSetup:0:0:dup1`,()=>n(()=>{let e=y(`ref:1:1`,()=>i(0)),t=y(`ref:1:2`,()=>i(void 0)),[n,r]=$.useMessage({getContainer:!1,placement:`bottom-start`,inset:{x:12,y:80},maxCount:2,gap:12,className:`absolute`,closable:!0});return{promiseBatch:e,activePromiseHandle:t,promiseApi:n,promiseHolder:r}}));return d(n=>{let i=a(),d=l(`rue:component:anchor`);return s(i,d),c(()=>{let n=_(ce,{minHeight:`18rem`,content:x(v,{children:[x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{t.value?.(),e.value+=1;let n=e.value,i=r.loading({key:`promise-flow`,content:x(`span`,{className:`inline-flex items-center gap-2`,children:[x(`span`,{className:`font-medium`,children:[`正在发布批次 #`,n]}),S(`span`,{className:`badge badge-ghost badge-sm`,children:`await close`})]}),duration:0});t.value=i,i.then(()=>{r.success({key:`promise-flow-done-${n}`,content:`批次 #${n} 已完成，promise 已 resolve。`,duration:2})})},children:`开始批次`}),S(`button`,{type:`button`,className:`btn btn-sm btn-outline rounded-full`,onClick:()=>{t.value?.(),t.value=void 0},children:`完成批次`})]}),u,S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击“开始批次”创建 loading handle，再点击“完成批次”观察 then resolve。`})]})});o(()=>h(n,i,d))}),i})},ve=`import { Message } from '@rue-js/design'

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
})`,ye=()=>{let{tabs:t,globalSeed:r}=y(`useSetup:0:0:dup2`,()=>n(()=>({tabs:{declarative:y(`ref:1:3`,()=>i(`preview`)),rich:y(`ref:1:4`,()=>i(`preview`)),hook:y(`ref:1:5`,()=>i(`preview`)),promise:y(`ref:1:6`,()=>i(`preview`)),staticApi:y(`ref:1:7`,()=>i(`preview`))},globalSeed:y(`ref:1:8`,()=>i(0))})));return d(n=>{let i=a(),p=l(`rue:component:anchor`);return s(i,p),h(_(w,{children:d(()=>{let n=a(),i=e(`div`,n);s(n,i),u(i,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,i);s(i,d),s(d,f(`Message 全局提示`));let p=e(`p`,i);s(i,p),s(p,f(`Rue 现在把原先散在 Toast 里的 message-like 体验收敛成真正的 Message 组件：保留 Rue 更轻、更贴近页面内容的视觉语气，但把消息组件常用的执行逻辑一次补齐，包含 静态 open、语义快捷方法、useMessage、局部 holder、按 key 更新、maxCount、Promise-like close handle 和全局 config。`));let m=e(`div`,i);s(i,m),u(m,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let g=e(`div`,m);s(m,g),u(g,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let y=e(`div`,g);s(g,y),u(y,`text-xs uppercase tracking-[0.2em] text-base-content/45`),s(y,f(`Core API`));let b=e(`div`,g);s(g,b),u(b,`mt-2 text-base font-semibold`),s(b,f(`open / useMessage / config`));let C=e(`p`,g);s(g,C),u(C,`mt-2 mb-0 text-sm text-base-content/68`),s(C,f(`既能直接静态调用，也能在局部容器内管理消息流。`));let w=e(`div`,m);s(m,w),u(w,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let E=e(`div`,w);s(w,E),u(E,`text-xs uppercase tracking-[0.2em] text-base-content/45`),s(E,f(`Flow Control`));let D=e(`div`,w);s(w,D),u(D,`mt-2 text-base font-semibold`),s(D,f(`key 更新、maxCount、thenable`));let O=e(`p`,w);s(w,O),u(O,`mt-2 mb-0 text-sm text-base-content/68`),s(O,f(`适合把“处理中 → 成功 / 失败”的短反馈串成真正可执行的异步流程。`));let k=e(`div`,m);s(m,k),u(k,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let A=e(`div`,k);s(k,A),u(A,`text-xs uppercase tracking-[0.2em] text-base-content/45`),s(A,f(`Visual Tone`));let j=e(`div`,k);s(k,j),u(j,`mt-2 text-base font-semibold`),s(j,f(`Rue 的轻浮层，而不是通知卡片`));let M=e(`p`,k);s(k,M),u(M,`mt-2 mb-0 text-sm text-base-content/68`),s(M,f(`继续沿用 Rue 的轻提示语言，但把 content、icon、action、closable 都开放给业务层。`));let N=e(`h2`,i);s(i,N),s(N,f(`何时使用`));let P=e(`ul`,i);s(i,P);let F=e(`li`,P);s(P,F),s(F,f(`需要比 Toast 更明确的 message API，但又不想把反馈升级成 Notification 卡片。`));let I=e(`li`,P);s(P,I),s(I,f(`希望在按钮事件或异步流程里直接触发成功、失败、加载、警告等短反馈。`));let L=e(`li`,P);s(P,L),s(L,f(`同一条消息需要按 key 从“处理中”更新到“完成”，并限制最大同时显示数量。`));let R=e(`li`,P);s(P,R),s(R,f(`希望保留 Rue 自己的轻量视觉，同时补齐成熟 message 组件的执行逻辑。`));let z=l(`rue:component:anchor`);s(i,z),c(()=>{let e=_(T,{title:`声明式消息栈`,summary:`把原先 Toast 里的 message-like demo 收敛到真正的 Message / Message.Item API。`,tab:t.declarative,code:fe,preview:()=>S(ce,{minHeight:`18rem`,content:x(v,{children:[S(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-success/12 via-info/10 to-warning/12`}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/75 px-4 py-3 text-sm text-base-content/65 backdrop-blur`,children:`当前是内容工作台，消息作为更轻的流程反馈悬浮在页面之上。`}),x($,{className:`absolute`,placement:`top`,top:16,gap:12,children:[S($.Item,{type:`success`,content:`发布完成，静态资源已刷新。`}),S($.Item,{type:`info`,content:`设计规范已同步到内容工作台。`}),S($.Item,{type:`warning`,content:`还有 2 条检查项等待确认。`,closable:!0})]})]})})});o(()=>h(e,i,z))});let B=l(`rue:component:anchor`);s(i,B),c(()=>{let e=_(T,{title:`富内容、操作区与自定义图标`,summary:`保持短反馈定位不变，但 content 可以直接承载 JSX，action、closable、icon 与 variant 都能往上提。`,tab:t.rich,code:pe,preview:()=>x(`div`,{className:`grid gap-4 not-prose`,children:[S($.Item,{type:`success`,content:x(`div`,{className:`flex items-center gap-3`,children:[S(`span`,{className:`font-medium`,children:`Workspace synced`}),S(`span`,{className:`badge badge-success badge-outline badge-sm`,children:`v2.8`})]}),action:S(`button`,{type:`button`,className:`btn btn-xs rounded-full`,children:`查看变更`}),closable:!0}),S($.Item,{type:`warning`,variant:`outline`,content:`Review pending. 还有 2 个确认项等待处理。`,action:S(`span`,{className:`badge badge-warning badge-sm`,children:`2 items`}),closable:!0}),S($.Item,{type:`loading`,variant:`solid`,icon:S(`span`,{className:`text-sm font-black`,children:`R`}),content:`Packaging docs bundle...`,duration:0})]})});o(()=>h(e,i,B))});let V=l(`rue:component:anchor`);s(i,V),c(()=>{let e=_(T,{title:`Message.useMessage`,summary:`把 contextHolder 放进当前面板后，消息就能稳定留在局部 box 内，并继续支持按 key 更新。`,tab:t.hook,code:me,preview:ge});o(()=>h(e,i,V))});let H=l(`rue:component:anchor`);s(i,H),c(()=>{let e=_(T,{title:`Promise-like close handle`,summary:`loading 返回值既可以直接调用关闭，也可以用 then 串起“关闭后再提示完成”的执行逻辑。`,tab:t.promise,code:he,preview:_e});o(()=>h(e,i,H))});let U=l(`rue:component:anchor`);s(i,U),c(()=>{let e=_(T,{title:`静态 API 与全局配置`,summary:`这组按钮会把消息直接挂到 document.body；适合最简单的业务回调、发布流程和无需显式 holder 的路径。`,tab:t.staticApi,code:ve,preview:()=>x(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`,children:[x(`div`,{className:`mb-4 flex flex-wrap items-center gap-2`,children:[S(`span`,{className:`badge badge-ghost badge-sm`,children:`Global static API`}),x(`span`,{className:`text-sm text-base-content/60`,children:[`当前种子 `,r.value]})]}),x(`div`,{className:`flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{r.value+=1,$.config({placement:`top`,top:88,maxCount:3,duration:3,closable:!0}),$.loading({key:`release-board`,content:`发布批次 #${r.value} 正在打包...`,duration:0})},children:`open global`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{$.success({key:`release-board`,content:`发布完成，CDN 已刷新。`,duration:2})},children:`update global`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.warning({key:`queued-${r.value}`,content:`另一个排队中的任务已入列。`,duration:0})},children:`open another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.destroy()},children:`destroy all`})]}),S(`p`,{className:`mt-4 mb-0 text-sm text-base-content/65`,children:`当前演示会把全局静态消息固定到页面顶部 88px，并把最大并发数限制为 3。`})]})});o(()=>h(e,i,U))});let W=e(`h2`,i);s(i,W),s(W,f(`API`));let G=e(`h3`,i);s(i,G),s(G,f(`Message`));let K=l(`rue:component:anchor`);s(i,K),c(()=>{let e=_(se,{rows:le});o(()=>h(e,i,K))});let q=e(`h3`,i);s(i,q),s(q,f(`Message.Item / open(config)`));let J=l(`rue:component:anchor`);s(i,J),c(()=>{let e=_(se,{rows:ue});o(()=>h(e,i,J))});let Y=e(`h3`,i);s(i,Y),s(Y,f(`useMessage / static methods`));let X=l(`rue:component:anchor`);return s(i,X),c(()=>{let e=_(se,{rows:de});o(()=>h(e,i,X))}),n})}),i,p),i})};export{ye as default};