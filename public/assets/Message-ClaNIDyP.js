import{M as e,Q as t,Vt as n,Xt as r,an as i,dt as a,it as o,l as s,m as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,vt as _,wt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as x,t as S}from"./src-Dlanwp1X.js";import{t as C}from"./toast-BSnSubBI.js";import{r as w}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as T}from"./PreviewBlock-CCAV1yb7.js";var E=`message`,D=10,O=20,k=`top`,A=0,j=`w-auto min-w-[min(16rem,100%)] max-w-[min(38rem,calc(100vw-2rem))] rounded-2xl px-4 py-2.5 shadow-xl`,M=`text-sm leading-5`,N=new Set([`key`,`content`,`children`,`type`,`duration`,`icon`,`showIcon`,`variant`,`className`,`style`,`onClose`,`onClick`,`closable`,`pauseOnHover`,`closeIcon`,`contentClassName`,`iconClassName`,`closeClassName`,`action`]),P=0,F={},I,L,R=(...e)=>e.filter(Boolean).join(` `),z=e=>Array.isArray(e)?e.flatMap(e=>z(e)):e==null?[]:[e],B=e=>z(e).length>0,V=e=>!!e&&typeof e==`object`&&!Array.isArray(e),H=e=>V(e)&&Object.keys(e).some(e=>N.has(e)),U=e=>B(e)?s(r=>{let i=p(`div`,r);n(()=>{f(i,M)});let a=g(`rue:slot:anchor`);return t(i,a),n(()=>{let t=e;h(()=>u(t,i,a))}),i}):null,W=(e,t)=>t??{x:16,y:e??O},G=(e={})=>{let{placement:t=k,top:n,inset:r,gap:i=D,className:a,...o}=e;return{placement:t,inset:W(n,r),gap:i,className:R(E,a),...o}},K=(e,t,n)=>{let{content:r,children:i,type:a,duration:o,showIcon:s,className:c,contentClassName:l,...u}=e,d=a??t??`neutral`,f=B(i)?i:r;return{...u,type:d,duration:o??n,showIcon:s??d!==`neutral`,className:R(j,c),contentClassName:R(`min-w-0`,l),children:U(f)}},q=(...e)=>{if(H(e[0]))return e[0];let[t,n,r]=e;return{content:t,duration:typeof n==`number`?n:void 0,onClose:typeof n==`function`?n:typeof r==`function`?r:void 0}},J=[`th`,`en`].join(``),Y=(e,t)=>(Object.defineProperty(e,J,{configurable:!0,writable:!0,value:(e,n)=>t.then(e,n)}),e.promise=t,e),X=()=>Y(()=>{},Promise.resolve(!0)),ee=(e,t)=>{let n=!1,r,i=()=>{},a=new Promise(e=>{i=e}),o=()=>{n||(n=!0,i(!0))};return r=e({...t,onClose:e=>{t.onClose?.(e),o()}}),Y(()=>{r?.(),o()},a)},te=e=>{let t=t=>ee(e.open,K(t)),n=(t,n)=>(...r)=>{let i=q(...r);return ee(e.open,K(i,t,n))};return{open:t,success:n(`success`),info:n(`info`),warning:n(`warning`),error:n(`error`),loading:n(`loading`,A),destroy:e.destroy}},ne=(e={})=>{let[t,n]=C.useMessage(G(e)),r=y(`useRef:1:0`,()=>i());return r.current??=te(t),[r.current,n]},re=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:o,__rue_rest_omit_4:c,__rue_rest_omit_5:f,rest:p,resolvedType:_,resolvedChildren:b}=y(`useSetup:0:0`,()=>d(()=>{let{content:t,children:n,type:r,showIcon:i,className:a,contentClassName:o,...s}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedType:y(`computed:1:1`,()=>v(()=>e.type??`neutral`)),resolvedChildren:y(`computed:1:2`,()=>v(()=>B(e.children)?e.children:e.content))}}));return s(r=>{let i=l(),a=g(`rue:component:anchor`);return t(i,a),n(()=>{let t=m(C.Item,{...p,type:_.get(),showIcon:e.showIcon??_.get()!==`neutral`,className:R(j,e.className),contentClassName:R(`min-w-0`,e.contentClassName),children:U(b.get())});h(()=>u(t,i,a))}),i})},ie=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:o,__rue_rest_omit_4:c,__rue_rest_omit_5:f,rest:p}=y(`useSetup:0:0:dup1`,()=>d(()=>{let{placement:t,top:n,inset:r,gap:i,className:a,children:o,...s}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s}}));return s(r=>{let i=l(),a=g(`rue:component:anchor`);return t(i,a),n(()=>{let t=m(C,{...p,placement:e.placement===void 0?k:e.placement,inset:W(e.top,e.inset),gap:e.gap===void 0?D:e.gap,className:R(E,e.className),children:e.children});h(()=>u(t,i,a))}),i})},ae=()=>typeof document>`u`?null:(L&&!L.isConnected&&(L=void 0,I=void 0),L??(L=document.createElement(`div`),L.style.display=`contents`,L.dataset.rueMessageViewport=`true`,document.body.appendChild(L)),L),oe=({options:e})=>{let[t,n]=ne(e);return I=t,n},Z=()=>{let t=ae();if(t)return e(S(oe,{options:F}),t),I},Q=e=>{let t={...e,key:e.key??`rue-message-${P++}`},n=Z();return n?n.open(t):X()},$=Object.assign(ie,{Item:re,useMessage:ne,open:Q,success:(...e)=>Q({...q(...e),type:`success`}),info:(...e)=>Q({...q(...e),type:`info`}),warning:(...e)=>Q({...q(...e),type:`warning`}),error:(...e)=>Q({...q(...e),type:`error`}),loading:(...e)=>{let t=q(...e);return Q({...t,type:`loading`,duration:t.duration??A})},destroy:e=>{let t=Z();t&&t.destroy(e)},config:e=>{F={...F,...e},Z()}}),se=e=>s(r=>{let i=p(`div`,r);f(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=p(`table`,i);t(i,c),f(c,`table table-zebra`);let d=p(`thead`,c);t(c,d);let m=p(`tr`,d);t(d,m);let _=p(`th`,m);t(m,_),t(_,o(`属性`));let v=p(`th`,m);t(m,v),t(v,o(`说明`));let y=p(`th`,m);t(m,y),t(y,o(`类型`));let x=p(`th`,m);t(m,x),t(x,o(`默认值`));let S=p(`tbody`,c);t(c,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,i,o,c)=>{u(s(()=>{let r=l(),i=p(`tr`,r);t(r,i),n(()=>{a(i,`key`,String(e.prop))});let o=p(`td`,i);t(i,o);let s=p(`code`,o);t(o,s);let c=g(`rue:slot:anchor`);t(s,c),n(()=>{let t=e.prop;h(()=>u(t,s,c))});let d=p(`td`,i);t(i,d);let f=g(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.description;h(()=>u(t,d,f))});let m=p(`td`,i);t(i,m);let _=p(`code`,m);t(m,_);let v=g(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;h(()=>u(t,_,v))});let y=p(`td`,i);t(i,y);let b=p(`code`,y);t(y,b);let x=g(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;h(()=>u(t,b,x))}),r}),r,i)}})}),i}),ce=e=>s(r=>{let i=p(`div`,r);f(i,`not-prose rounded-[1.5rem] border border-base-300 bg-base-200/45 p-4 shadow-sm`);let a=p(`div`,i);t(i,a),f(a,`relative overflow-hidden rounded-[1.25rem] border border-base-300 bg-base-100/90`),n(()=>{_(a,{minHeight:e.minHeight===void 0?`16rem`:e.minHeight})});let o=g(`rue:slot:anchor`);return t(a,o),n(()=>{let t=e.content;h(()=>u(t,a,o))}),i}),le=[{prop:`placement`,description:`声明式容器定位，支持 top、top-start、top-end、bottom、bottom-start、bottom-end 与 center。`,type:`MessagePlacement`,defaultValue:`'top'`},{prop:`top / inset`,description:`top 是 message 常用的顶部偏移快捷写法；需要更细控制时可以直接传 inset。`,type:`number | string / ToastInset`,defaultValue:`20 / -`},{prop:`gap`,description:`多条消息之间的间距，适合更密集或更舒展的消息节奏。`,type:`number | string`,defaultValue:`10`},{prop:`className / style / zIndex`,description:`提供 Toast 根容器能力，适合把消息嵌进局部面板、工作台或示例盒子。`,type:`string / object / number | string`,defaultValue:`-`}],ue=[{prop:`content / children`,description:`主内容字段；未传 children 时会自动把 content 渲染进消息正文。`,type:`any`,defaultValue:`-`},{prop:`type`,description:`支持 neutral、success、info、warning、error、loading 六种状态。`,type:`'neutral' | 'success' | 'info' | 'warning' | 'error' | 'loading'`,defaultValue:`'neutral'`},{prop:`variant / icon / showIcon`,description:`复用 Rue 当前轻提示视觉语气，并允许覆盖默认图标。`,type:`'soft' | 'solid' | 'outline' / any / boolean`,defaultValue:`'soft' / 自动判断`},{prop:`duration / pauseOnHover`,description:`自动关闭时长，单位秒；0 会保持打开，悬停默认暂停倒计时。`,type:`number | null / boolean`,defaultValue:`实例默认值 / true`},{prop:`action / closable / closeIcon`,description:`补充轻量操作区与关闭按钮，适合回撤、查看详情或静默关闭。`,type:`any / boolean / any`,defaultValue:`- / false / -`},{prop:`onClose / onClick / className / style`,description:`监听关闭、点击并定制单条消息样式。`,type:`function / function / string / object`,defaultValue:`-`},{prop:`key`,description:`用于 open(config) 或静态 API 复用同一条消息并原位更新。`,type:`string | number`,defaultValue:`自动生成`}],de=[{prop:`Message.useMessage(options)`,description:`返回 [api, contextHolder]，适合把消息约束在局部容器内，并复用 placement、duration、maxCount 等默认值。`,type:`(options) => [MessageInstance, any]`,defaultValue:`-`},{prop:`getContainer`,description:`默认挂到 document.body；传 false 时会退回到 contextHolder 所在容器。`,type:`string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`document.body`},{prop:`open(config)`,description:`创建或按 key 更新一条消息，返回可调用、可 then 的 MessageHandle。`,type:`(config: MessageOpenConfig) => MessageHandle`,defaultValue:`-`},{prop:`success / info / warning / error / loading`,description:`快捷方法支持 content、duration、onClose 三参数，也支持直接传配置对象。`,type:`(...args) => MessageHandle`,defaultValue:`-`},{prop:`MessageHandle`,description:`返回值同时是函数和 PromiseLike；关闭后 then 会 resolve，便于串接异步流程。`,type:`(() => void) & PromiseLike<boolean>`,defaultValue:`-`},{prop:`destroy(key?)`,description:`销毁指定 key；不传 key 时清空当前实例或全局静态实例下的消息。`,type:`(key?: string | number) => void`,defaultValue:`-`},{prop:`Message.config(options)`,description:`配置全局静态消息实例的 placement、top、duration、maxCount、closable 等默认值。`,type:`(options: MessageConfigOptions) => void`,defaultValue:`-`}],fe=`import { Message } from '@rue-js/design'

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

hide()`,ge=()=>{let{hookExtraSeed:e,hookApi:i,hookHolder:a}=y(`useSetup:0:0`,()=>d(()=>{let e=y(`ref:1:0`,()=>r(0)),[t,n]=$.useMessage({getContainer:!1,placement:`top-end`,top:12,maxCount:3,gap:12,className:`absolute`,duration:3,closable:!0});return{hookExtraSeed:e,hookApi:t,hookHolder:n}}));return s(r=>{let o=l(),s=g(`rue:component:anchor`);return t(o,s),n(()=>{let t=m(ce,{minHeight:`20rem`,content:x(c,{children:[S(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_color-mix(in_srgb,var(--color-info)_16%,transparent),_transparent_38%),radial-gradient(circle_at_bottom_left,_color-mix(in_srgb,var(--color-success)_18%,transparent),_transparent_36%)]`}),a,x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{i.loading({key:`sync-flow`,content:`正在同步 design tokens...`,duration:0})},children:`open loading`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{i.success({key:`sync-flow`,content:`同步完成，缓存已刷新。`,duration:2})},children:`update by key`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{e.value+=1,i.warning({key:`review-${e.value}`,content:`审阅提醒 #${e.value}`,duration:0})},children:`add another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{i.destroy(`sync-flow`)},children:`destroy key`})]}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击上方按钮后，消息会留在当前示例盒子内，并支持同 key 更新与局部销毁。`})]})});h(()=>u(t,o,s))}),o})},_e=()=>{let{promiseBatch:e,activePromiseHandle:i,promiseApi:a,promiseHolder:o}=y(`useSetup:0:0:dup1`,()=>d(()=>{let e=y(`ref:1:1`,()=>r(0)),t=y(`ref:1:2`,()=>r(void 0)),[n,i]=$.useMessage({getContainer:!1,placement:`bottom-start`,inset:{x:12,y:80},maxCount:2,gap:12,className:`absolute`,closable:!0});return{promiseBatch:e,activePromiseHandle:t,promiseApi:n,promiseHolder:i}}));return s(r=>{let s=l(),d=g(`rue:component:anchor`);return t(s,d),n(()=>{let t=m(ce,{minHeight:`18rem`,content:x(c,{children:[x(`div`,{className:`absolute inset-x-4 top-4 flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{i.value?.(),e.value+=1;let t=e.value,n=a.loading({key:`promise-flow`,content:x(`span`,{className:`inline-flex items-center gap-2`,children:[x(`span`,{className:`font-medium`,children:[`正在发布批次 #`,t]}),S(`span`,{className:`badge badge-ghost badge-sm`,children:`await close`})]}),duration:0});i.value=n,n.then(()=>{a.success({key:`promise-flow-done-${t}`,content:`批次 #${t} 已完成，promise 已 resolve。`,duration:2})})},children:`开始批次`}),S(`button`,{type:`button`,className:`btn btn-sm btn-outline rounded-full`,onClick:()=>{i.value?.(),i.value=void 0},children:`完成批次`})]}),o,S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/85 px-4 py-3 text-sm text-base-content/70 backdrop-blur`,children:`点击“开始批次”创建 loading handle，再点击“完成批次”观察 then resolve。`})]})});h(()=>u(t,s,d))}),s})},ve=`import { Message } from '@rue-js/design'

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
})`,ye=()=>{let{tabs:e,globalSeed:i}=y(`useSetup:0:0:dup2`,()=>d(()=>({tabs:{declarative:y(`ref:1:3`,()=>r(`preview`)),rich:y(`ref:1:4`,()=>r(`preview`)),hook:y(`ref:1:5`,()=>r(`preview`)),promise:y(`ref:1:6`,()=>r(`preview`)),staticApi:y(`ref:1:7`,()=>r(`preview`))},globalSeed:y(`ref:1:8`,()=>r(0))})));return s(r=>{let a=l(),d=g(`rue:component:anchor`);return t(a,d),u(m(w,{children:s(()=>{let r=l(),a=p(`div`,r);t(r,a),f(a,`max-w-none prose prose-sm md:prose-base`);let s=p(`h1`,a);t(a,s),t(s,o(`Message 全局提示`));let d=p(`p`,a);t(a,d),t(d,o(`Rue 现在把原先散在 Toast 里的 message-like 体验收敛成真正的 Message 组件：使用 Rue 更轻、更贴近页面内容的视觉语气，但把消息组件常用的执行逻辑一次覆盖，包含 静态 open、语义快捷方法、useMessage、局部 holder、按 key 更新、maxCount、Promise-like close handle 和全局 config。`));let _=p(`div`,a);t(a,_),f(_,`not-prose mt-6 grid gap-3 md:grid-cols-3`);let v=p(`div`,_);t(_,v),f(v,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let y=p(`div`,v);t(v,y),f(y,`text-xs uppercase tracking-[0.2em] text-base-content/45`),t(y,o(`Core API`));let b=p(`div`,v);t(v,b),f(b,`mt-2 text-base font-semibold`),t(b,o(`open / useMessage / config`));let C=p(`p`,v);t(v,C),f(C,`mt-2 mb-0 text-sm text-base-content/68`),t(C,o(`既能直接静态调用，也能在局部容器内管理消息流。`));let w=p(`div`,_);t(_,w),f(w,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let E=p(`div`,w);t(w,E),f(E,`text-xs uppercase tracking-[0.2em] text-base-content/45`),t(E,o(`Flow Control`));let D=p(`div`,w);t(w,D),f(D,`mt-2 text-base font-semibold`),t(D,o(`key 更新、maxCount、thenable`));let O=p(`p`,w);t(w,O),f(O,`mt-2 mb-0 text-sm text-base-content/68`),t(O,o(`适合把“处理中 → 成功 / 失败”的短反馈串成真正可执行的异步流程。`));let k=p(`div`,_);t(_,k),f(k,`rounded-[1.4rem] border border-base-300 bg-gradient-to-br from-base-100 to-base-200/45 p-4 shadow-sm`);let A=p(`div`,k);t(k,A),f(A,`text-xs uppercase tracking-[0.2em] text-base-content/45`),t(A,o(`Visual Tone`));let j=p(`div`,k);t(k,j),f(j,`mt-2 text-base font-semibold`),t(j,o(`Rue 的轻浮层，而不是通知卡片`));let M=p(`p`,k);t(k,M),f(M,`mt-2 mb-0 text-sm text-base-content/68`),t(M,o(`使用 Rue 的轻提示语言，但把 content、icon、action、closable 都开放给业务层。`));let N=p(`h2`,a);t(a,N),t(N,o(`何时使用`));let P=p(`ul`,a);t(a,P);let F=p(`li`,P);t(P,F),t(F,o(`需要比 Toast 更明确的 message API，但又不想把反馈组织成 Notification 卡片。`));let I=p(`li`,P);t(P,I),t(I,o(`希望在按钮事件或异步流程里直接触发成功、失败、加载、警告等短反馈。`));let L=p(`li`,P);t(P,L),t(L,o(`同一条消息需要按 key 从“处理中”更新到“完成”，并限制最大同时显示数量。`));let R=p(`li`,P);t(P,R),t(R,o(`希望使用 Rue 自己的轻量视觉，同时补充成熟 message 组件的执行逻辑。`));let z=g(`rue:component:anchor`);t(a,z),n(()=>{let t=m(T,{title:`声明式消息栈`,summary:`把原先 Toast 里的 message-likeDemo 收敛到真正的 Message / Message.Item API。`,tab:e.declarative,code:fe,preview:()=>S(ce,{minHeight:`18rem`,content:x(c,{children:[S(`div`,{className:`absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-success/12 via-info/10 to-warning/12`}),S(`div`,{className:`absolute inset-x-4 bottom-4 rounded-[1rem] border border-base-300 bg-base-100/75 px-4 py-3 text-sm text-base-content/65 backdrop-blur`,children:`当前是内容工作台，消息作为更轻的流程反馈悬浮在页面之上。`}),x($,{className:`absolute`,placement:`top`,top:16,gap:12,children:[S($.Item,{type:`success`,content:`发布完成，静态资源已刷新。`}),S($.Item,{type:`info`,content:`设计规范已同步到内容工作台。`}),S($.Item,{type:`warning`,content:`还有 2 条检查项等待确认。`,closable:!0})]})]})})});h(()=>u(t,a,z))});let B=g(`rue:component:anchor`);t(a,B),n(()=>{let t=m(T,{title:`富内容、操作区与自定义图标`,summary:`保持短反馈定位不变，但 content 可以直接承载 JSX，action、closable、icon 与 variant 都能往上提。`,tab:e.rich,code:pe,preview:()=>x(`div`,{className:`grid gap-4 not-prose`,children:[S($.Item,{type:`success`,content:x(`div`,{className:`flex items-center gap-3`,children:[S(`span`,{className:`font-medium`,children:`Workspace synced`}),S(`span`,{className:`badge badge-success badge-outline badge-sm`,children:`v2.8`})]}),action:S(`button`,{type:`button`,className:`btn btn-xs rounded-full`,children:`查看变更`}),closable:!0}),S($.Item,{type:`warning`,variant:`outline`,content:`Review pending. 还有 2 个确认项等待处理。`,action:S(`span`,{className:`badge badge-warning badge-sm`,children:`2 items`}),closable:!0}),S($.Item,{type:`loading`,variant:`solid`,icon:S(`span`,{className:`text-sm font-black`,children:`R`}),content:`Packaging docs bundle...`,duration:0})]})});h(()=>u(t,a,B))});let V=g(`rue:component:anchor`);t(a,V),n(()=>{let t=m(T,{title:`Message.useMessage`,summary:`把 contextHolder 放进当前面板后，消息就能稳定留在局部 box 内，并支持按 key 更新。`,tab:e.hook,code:me,preview:ge});h(()=>u(t,a,V))});let H=g(`rue:component:anchor`);t(a,H),n(()=>{let t=m(T,{title:`Promise-like close handle`,summary:`loading 返回值既可以直接调用关闭，也可以用 then 串起“关闭后再提示完成”的执行逻辑。`,tab:e.promise,code:he,preview:_e});h(()=>u(t,a,H))});let U=g(`rue:component:anchor`);t(a,U),n(()=>{let t=m(T,{title:`静态 API 与全局配置`,summary:`这组按钮会把消息直接挂到 document.body；适合最简单的业务回调、发布流程和无需显式 holder 的路径。`,tab:e.staticApi,code:ve,preview:()=>x(`div`,{className:`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-5 shadow-sm`,children:[x(`div`,{className:`mb-4 flex flex-wrap items-center gap-2`,children:[S(`span`,{className:`badge badge-ghost badge-sm`,children:`Global static API`}),x(`span`,{className:`text-sm text-base-content/60`,children:[`当前种子 `,i.value]})]}),x(`div`,{className:`flex flex-wrap gap-2`,children:[S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{i.value+=1,$.config({placement:`top`,top:88,maxCount:3,duration:3,closable:!0}),$.loading({key:`release-board`,content:`发布批次 #${i.value} 正在打包...`,duration:0})},children:`open global`}),S(`button`,{type:`button`,className:`btn btn-sm rounded-full`,onClick:()=>{$.success({key:`release-board`,content:`发布完成，CDN 已刷新。`,duration:2})},children:`update global`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.warning({key:`queued-${i.value}`,content:`另一个排队中的任务已入列。`,duration:0})},children:`open another`}),S(`button`,{type:`button`,className:`btn btn-sm btn-ghost rounded-full`,onClick:()=>{$.destroy()},children:`destroy all`})]}),S(`p`,{className:`mt-4 mb-0 text-sm text-base-content/65`,children:`当前演示会把全局静态消息固定到页面顶部 88px，并把最大并发数限制为 3。`})]})});h(()=>u(t,a,U))});let W=p(`h2`,a);t(a,W),t(W,o(`API`));let G=p(`h3`,a);t(a,G),t(G,o(`Message`));let K=g(`rue:component:anchor`);t(a,K),n(()=>{let e=m(se,{rows:le});h(()=>u(e,a,K))});let q=p(`h3`,a);t(a,q),t(q,o(`Message.Item / open(config)`));let J=g(`rue:component:anchor`);t(a,J),n(()=>{let e=m(se,{rows:ue});h(()=>u(e,a,J))});let Y=p(`h3`,a);t(a,Y),t(Y,o(`useMessage / static methods`));let X=g(`rue:component:anchor`);return t(a,X),n(()=>{let e=m(se,{rows:de});h(()=>u(e,a,X))}),r})}),a,d),a})};export{ye as default};