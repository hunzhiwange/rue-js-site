import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,S as s,U as c,Z as l,_ as u,_t as d,bt as f,c as p,d as m,lt as h,pt as g,t as _,u as v,x as y,yt as b}from"./vapor-runtime-D3a-68js.js";import{a as x,n as S}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as ee}from"./Teleport-B4wG8-un.js";import{n as C,t as w}from"./src-BfQKH6_d.js";import{n as T}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as E}from"./Code-2C2psoH3.js";import{t as D}from"./button-DroKVuaU.js";import{t as O}from"./tabs-BgQmsOey.js";var k=0,A=``,j=(...e)=>e.filter(Boolean).join(` `),M=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),N=e=>e.startsWith(`--`)?e:e.includes(`-`)?M(e):e,P=e=>{if(!e)return;let t={};return typeof e==`string`?(e.split(`;`).map(e=>e.trim()).filter(Boolean).forEach(e=>{let n=e.indexOf(`:`);if(n===-1)return;let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();!r||!i||(t[N(r)]=i)}),Object.keys(t).length>0?t:void 0):(Object.entries(e).forEach(([e,n])=>{n!=null&&(t[N(e)]=n)}),Object.keys(t).length>0?t:void 0)},F=(...e)=>{let t={};return e.forEach(e=>{let n=P(e);n&&Object.assign(t,n)}),Object.keys(t).length>0?t:void 0},te=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e},I=()=>C(`div`,{className:`space-y-3`,"data-rue-modal-loading":`true`,children:[w(`div`,{className:`skeleton h-4 w-2/5`}),w(`div`,{className:`skeleton h-4 w-full`}),w(`div`,{className:`skeleton h-4 w-5/6`}),w(`div`,{className:`skeleton h-24 w-full`})]}),ne=()=>w(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`size-4`,"aria-hidden":`true`,children:w(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 6l12 12M18 6 6 18`})}),L=()=>{typeof document>`u`||(k===0&&(A=document.documentElement.style.overflow,document.documentElement.style.overflow=`hidden`),k+=1)},R=()=>{typeof document>`u`||k===0||(--k,k===0&&(document.documentElement.style.overflow=A))},z=({open:e,defaultOpen:t=!1,title:n,children:r,actions:i,footer:a,className:o,rootClassName:c,rootStyle:l,wrapClassName:d,wrapProps:f,bodyClassName:p,headerClassName:g,footerClassName:_,maskClassName:v,classNames:x,styles:S,width:T,style:E,bodyStyle:O,maskStyle:k,centered:A=!1,closable:M=!0,closeIcon:N,keyboard:P=!0,mask:z=!0,maskClosable:B=!0,forceRender:re=!1,destroyOnClose:ie,destroyOnHidden:V=!0,confirmLoading:H=!1,okText:ae=`确定`,cancelText:oe,okType:se=`primary`,okButtonProps:U,cancelButtonProps:W,zIndex:ce,getContainer:G,loading:K=!1,onOk:q,onCancel:J,onClose:Y,onOpenChange:le,afterClose:ue,afterOpenChange:de,modalRender:X,...fe})=>{let Z=h(t),pe=h(t),Q=h(!1),me=typeof e==`boolean`,$=typeof e==`boolean`?e:Z.value,he=h($),ge=h(P),_e=e=>{me||(Z.value=e),le&&le(e)},ve=e=>{e&&typeof e.preventDefault==`function`&&e.preventDefault(),J&&e&&J(e),Y&&Y(e),_e(!1)},ye=e=>{H||q&&q(e)};if(y(()=>{if($&&(L(),Q.value=!0),typeof window>`u`)return;let e=e=>{!he.value||!ge.value||e.key!==`Escape`||ve(e)};window.addEventListener(`keydown`,e),s(()=>{window.removeEventListener(`keydown`,e)})}),b(()=>$,e=>{he.value=e,e?(pe.value=!0,Q.value||=(L(),!0)):Q.value&&(R(),Q.value=!1,ue&&ue()),de&&de(e)}),b(()=>P,e=>{ge.value=e},{immediate:!0}),b(()=>t,e=>{me||(Z.value=!!e)},{immediate:!0}),s(()=>{Q.value&&=(R(),!1)}),!($||re||!(V??ie??!0)&&pe.value))return null;let{className:be,style:xe,onClick:Se,...Ce}=f??{},we=oe??(q||U?`取消`:`关闭`),Te=a===void 0&&i!=null,Ee=!Te&&(q!=null||U!=null),De=Te||J!=null||Y!=null||Ee,Oe=e=>{let{children:t,onClick:n,...r}=e??{};return u(D,{...W,...r,onClick:e=>{n&&n(e),!e.defaultPrevented&&ve(e)},disabled:r.disabled??W?.disabled},t??W?.children??we)},ke=e=>{let{children:t,onClick:n,...r}=e??{};return u(D,{...U,...r,type:r.type??U?.type??se,loading:r.loading??U?.loading??H,onClick:e=>{n&&n(e),!e.defaultPrevented&&ye(e)}},t??U?.children??ae)},Ae=e=>Oe(e),je=e=>ke(e),Me=C(m,{children:[Te?i:null,De?Oe():null,Ee?ke():null]}),Ne=K||a===null||a===!1?null:typeof a==`function`?a(Me,{OkBtn:je,CancelBtn:Ae}):a??Me,Pe=e=>{Se&&Se(e),!e.defaultPrevented&&(!z||!B||e.target!==e.currentTarget||ve(e))},Fe=C(`div`,{...fe,"aria-hidden":$?void 0:`true`,className:j(`modal ${$?`modal-open`:``} bg-transparent`.trim(),j(c,j(x?.root,$?void 0:`pointer-events-none`))),style:F(S?.root,l,ce==null?void 0:{zIndex:ce}),"data-rue-modal-root":`true`,children:[z?w(`div`,{"aria-hidden":`true`,className:j(`absolute inset-0 bg-base-content/40`,j(v,x?.mask)),style:F(S?.mask,k),"data-rue-modal-mask":`true`}):null,w(`div`,{...Ce,className:j(j(`absolute inset-0 overflow-y-auto px-4 py-6 sm:px-6 ${A?`flex items-center justify-center`:`flex items-start justify-center sm:items-center`}`,d),j(be,x?.wrapper)),style:F(S?.wrapper,xe),onClick:Pe,"data-rue-modal-wrapper":`true`,children:w(`div`,{className:j(`relative flex w-full justify-center`,x?.container),style:F(S?.container),"data-rue-modal-container":`true`,children:C(`div`,{role:`dialog`,"aria-modal":$?`true`:`false`,"aria-hidden":$?void 0:`true`,className:j(j(`modal-box relative`,o),j(x?.box,$?void 0:`pointer-events-none`)),style:F(S?.box,E,T==null?void 0:{width:te(T)}),onClick:e=>{e.stopPropagation()},"data-rue-modal-box":`true`,children:[M?w(`button`,{type:`button`,"aria-label":`关闭`,className:j(`btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10`,x?.close),style:F(S?.close),onClick:e=>ve(e),children:N??w(ne,{})}):null,n?w(`div`,{className:j(`mb-4 pr-10`,j(g,x?.header)),style:F(S?.header),children:w(`div`,{className:j(`text-lg font-semibold leading-6`,x?.title),style:F(S?.title),children:n})}):null,w(`div`,{className:j(`space-y-4`,j(p,x?.body)),style:F(S?.body,O),"aria-busy":K?`true`:void 0,children:K?I():r}),Ne?w(`div`,{className:j(`modal-action mt-6 flex flex-wrap items-center justify-end gap-2`,j(_,x?.footer)),style:F(S?.footer),children:Ne}):null]})})})]}),Ie=X?X(Fe):Fe,Le=typeof G==`function`?G():G;return Le===!1||Le==null?Ie:w(ee,{to:Le,children:Ie})},B=o=>v(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=n(`div`);i(c,l);let u=n(`h2`);i(l,u),t(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(u,r(`# `));let d=a(`rue:slot:anchor`);i(u,d),f(()=>{let e=o.title;g(()=>p(e,u,d))});let m=n(`p`);i(l,m),t(m,`m-0 text-sm opacity-70`);let h=a(`rue:slot:anchor`);i(m,h),f(()=>{let e=o.summary;g(()=>p(e,m,h))});let y=a(`rue:component:anchor`);i(s,y),f(()=>{let e=_(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,s,y))});let b=a(`rue:slot:anchor`);return i(s,b),f(()=>{let t=o.tab.value===`preview`?o.preview():v(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),f(()=>{let e=_(E,{className:`mt-2`,lang:`tsx`,code:o.code});g(()=>p(e,t,n))}),t});g(()=>p(t,s,b))}),s}),re=o=>v(()=>{let s=n(`div`);t(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(s,l),t(l,`table table-zebra`);let u=n(`thead`);i(l,u);let d=n(`tr`);i(u,d);let m=n(`th`);i(d,m),i(m,r(`属性`));let h=n(`th`);i(d,h),i(h,r(`说明`));let _=n(`th`);i(d,_),i(_,r(`类型`));let y=n(`th`);i(d,y),i(y,r(`默认值`));let b=n(`tbody`);i(l,b);let x=a(`rue:list:start`),ee=a(`rue:list:end`);i(b,x),i(b,ee);let C=new Map;return f(()=>{C=S({items:o.rows||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:ee,singleRoot:!0,trackIndex:!1,start:x,renderItem:(t,r,o,s,l)=>{p(v(()=>{let r=e(),o=n(`tr`);i(r,o),f(()=>{c(o,`key`,String(t.prop))});let s=n(`td`);i(o,s);let l=n(`code`);i(s,l);let u=a(`rue:slot:anchor`);i(l,u),f(()=>{let e=t.prop;g(()=>p(e,l,u))});let d=n(`td`);i(o,d);let m=a(`rue:slot:anchor`);i(d,m),f(()=>{let e=t.description;g(()=>p(e,d,m))});let h=n(`td`);i(o,h);let _=n(`code`);i(h,_);let v=a(`rue:slot:anchor`);i(_,v),f(()=>{let e=t.type;g(()=>p(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),f(()=>{let e=t.defaultValue;g(()=>p(e,b,x))}),r}),r,o)}})}),s}),ie=[{prop:`open`,description:`受控显隐。`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpen`,description:`非受控初始打开状态。`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容。`,type:`any`,defaultValue:`-`},{prop:`footer`,description:"自定义 footer；传 `null` 可隐藏；也支持函数包裹默认 footer。",type:`any | (originNode) => any`,defaultValue:`-`},{prop:`actions`,description:`旧版动作区写法，会保留原有“自定义动作 + 默认关闭按钮”行为。`,type:`any`,defaultValue:`-`},{prop:`onOk / onCancel / onClose`,description:`确认、取消与关闭回调。`,type:`function`,defaultValue:`-`},{prop:`confirmLoading`,description:`让默认确认按钮进入 loading 态。`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`主体切换到骨架占位态，并临时隐藏 footer。`,type:`boolean`,defaultValue:`false`},{prop:`okText / cancelText / okType`,description:`默认 footer 的按钮文案与确认按钮类型。`,type:`any / any / ButtonType`,defaultValue:"`确定` / 自动 / `primary`"},{prop:`width / className`,description:"设置 modal-box 宽度；`className` 仍直接追加到 box。",type:`string | number / string`,defaultValue:`-`},{prop:`rootStyle / wrapClassName / wrapProps / maskClassName / maskStyle`,description:"分别定制根层、wrapper 和遮罩层；`mask={false}` 时不会渲染遮罩节点。",type:`style / string / object / string / style`,defaultValue:`-`},{prop:`centered`,description:`垂直居中。`,type:`boolean`,defaultValue:`false`},{prop:`mask / maskClosable / keyboard`,description:`控制遮罩显示、点击遮罩关闭与 ESC 关闭。`,type:`boolean`,defaultValue:`true / true / true`},{prop:`closable / closeIcon`,description:`右上角关闭按钮与自定义关闭图标。`,type:`boolean / any`,defaultValue:`true / 默认图标`},{prop:`forceRender / destroyOnHidden`,description:`控制关闭后是否保留内容挂载。`,type:`boolean / boolean`,defaultValue:`false / true`},{prop:`destroyOnClose / getContainer`,description:`兼容旧别名，并支持通过 Teleport 把弹层渲染到指定容器。`,type:`boolean / string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`- / false`},{prop:`bodyClassName / headerClassName / footerClassName`,description:`分别定制头部、主体、底部区域类名。`,type:`string`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义分区覆盖 root/mask/wrapper/container/box/header/title/body/footer/close。`,type:`object`,defaultValue:`-`},{prop:`modalRender`,description:`接管最终弹层节点的二次包裹。`,type:`(node) => any`,defaultValue:`-`},{prop:`afterOpenChange / afterClose`,description:`显隐变化后的钩子。`,type:`function`,defaultValue:`-`}],V=()=>{let{tabBasic:s,tabMaskless:u,tabActions:m,tabWide:y,tabAsync:b,tabFooterRender:S,tabKeepMounted:ee,basicOpen:E,masklessOpen:O,actionsOpen:k,wideOpen:A,asyncOpen:j,asyncLoading:M,asyncStatus:N,renderOpen:P,guardCount:F,keepMountedOpen:te}=x(`useSetup:0:0`,()=>d(()=>({tabBasic:x(`ref:1:0`,()=>h(`preview`)),tabMaskless:x(`ref:1:1`,()=>h(`preview`)),tabActions:x(`ref:1:2`,()=>h(`preview`)),tabWide:x(`ref:1:3`,()=>h(`preview`)),tabAsync:x(`ref:1:4`,()=>h(`preview`)),tabFooterRender:x(`ref:1:5`,()=>h(`preview`)),tabKeepMounted:x(`ref:1:6`,()=>h(`preview`)),basicOpen:x(`ref:1:7`,()=>h(!1)),masklessOpen:x(`ref:1:8`,()=>h(!1)),actionsOpen:x(`ref:1:9`,()=>h(!1)),wideOpen:x(`ref:1:10`,()=>h(!1)),asyncOpen:x(`ref:1:11`,()=>h(!1)),asyncLoading:x(`ref:1:12`,()=>h(!1)),asyncStatus:x(`ref:1:13`,()=>h(`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`)),renderOpen:x(`ref:1:14`,()=>h(!1)),guardCount:x(`ref:1:15`,()=>h(0)),keepMountedOpen:x(`ref:1:16`,()=>h(!1))})));return v(()=>{let d=e(),h=a(`rue:component:anchor`);return i(d,h),p(_(T,{children:v(()=>{let d=e(),h=n(`div`);i(d,h),t(h,`max-w-none prose prose-sm md:prose-base`);let v=n(`h1`);i(h,v),i(v,r(`Modal 模态框`));let x=n(`p`);i(h,x),t(x,`text-sm mt-3 mb-3`),i(x,r(`Modal 现在保持 Rue 自己的视觉风格，同时补齐了更完整的显隐控制、默认 footer、异步确认、遮罩交互、挂载策略与 root/mask/wrapper 级别的语义化定制能力。`));let T=n(`div`);i(h,T),t(T,`text-sm flex flex-wrap gap-4`);let I=n(`a`);i(T,I),c(I,`href`,`https://daisyui.com/components/modal/`),c(I,`target`,`_blank`),i(I,r(`查看 Modal 静态样式`));let ne=a(`rue:component:anchor`);i(h,ne),f(()=>{let e=_(B,{title:`Controlled modal`,summary:"保留原有受控用法：通过 `open` 和 `onClose` 管理显隐，默认 footer 会自动提供关闭按钮。",tab:s,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-basic-open`,onClick:()=>{E.value=!0},children:`Open modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`点击按钮后会显示受控模态框，并通过默认关闭按钮或右上角关闭图标收起。`}),w(z,{open:E.value,title:`Basic modal`,onClose:()=>{E.value=!1},children:w(`p`,{className:`py-2`,children:`Press the close button below to dismiss this modal.`})})]})}),code:`const basicOpen = ref(false)

<Button color="primary" onClick={() => (basicOpen.value = true)}>
  Open modal
</Button>
<Modal
  open={basicOpen.value}
  title="Basic modal"
  onClose={() => {
    basicOpen.value = false
  }}
>
  <p className="py-2">Press the close button below to dismiss this modal.</p>
</Modal>`});g(()=>p(e,h,ne))});let L=a(`rue:component:anchor`);i(h,L),f(()=>{let e=_(B,{title:`Maskless modal and layer hooks`,summary:"`mask={false}` 会真正移除遮罩层；需要精细控制时可继续配合 `rootStyle`、`wrapClassName` 与语义化 `classNames/styles`。",tab:u,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`warning`,className:`w-fit`,"data-testid":`modal-maskless-open`,onClick:()=>{O.value=!0},children:`Open without mask`}),w(`p`,{className:`text-sm text-base-content/70`,children:`当前示例关闭了遮罩视觉，因此背景保持可见，点击外层空白区域也不会触发关闭。`}),w(z,{open:O.value,mask:!1,width:680,rootStyle:{backdropFilter:`blur(2px)`},wrapClassName:`items-end sm:items-center`,classNames:{container:`max-w-3xl`,box:`border border-base-300 shadow-2xl`,body:`space-y-3`},title:`Inspector panel`,footer:(e,{CancelBtn:t})=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`No mask layer is rendered in this example.`}),w(`div`,{className:`flex justify-end`,children:w(t,{children:`关闭面板`})})]}),onClose:()=>{O.value=!1},children:C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm text-base-content/80`,children:[w(`div`,{className:`font-medium`,children:`Layer summary`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:"`rootStyle` 作用在最外层固定定位节点"}),w(`li`,{children:"`wrapClassName` 作用在可滚动的交互 wrapper"}),w(`li`,{children:"`classNames.container` 和 `classNames.box` 分别控制容器与面板"})]})]})})]})}),code:`const masklessOpen = ref(false)

<Modal
  open={masklessOpen.value}
  mask={false}
  width={680}
  rootStyle={{ backdropFilter: 'blur(2px)' }}
  wrapClassName="items-end sm:items-center"
  classNames={{
    container: 'max-w-3xl',
    box: 'border border-base-300 shadow-2xl',
  }}
  footer={(_originNode, { CancelBtn }) => (
    <div className="flex w-full justify-between gap-3">
      <div className="text-sm text-base-content/60">No mask layer is rendered in this example.</div>
      <CancelBtn>关闭面板</CancelBtn>
    </div>
  )}
  onClose={() => {
    masklessOpen.value = false
  }}
>
  <p className="py-2">The mask node is omitted entirely in this example.</p>
</Modal>`});g(()=>p(e,h,L))});let R=a(`rue:component:anchor`);i(h,R),f(()=>{let e=_(B,{title:`Modal with custom actions`,summary:"旧版 `actions` 仍然可用，适合把自定义按钮组插到 footer 里，同时保留默认关闭按钮。",tab:m,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`secondary`,className:`w-fit`,"data-testid":`modal-actions-open`,onClick:()=>{k.value=!0},children:`Review actions`}),w(`p`,{className:`text-sm text-base-content/70`,children:"可以继续使用 `actions` 兼容旧 demo，同时逐步迁移到新的 `footer` API。"}),w(z,{open:k.value,title:`Delete this draft?`,actions:C(`div`,{className:`join`,"data-testid":`modal-actions-group`,children:[w(`button`,{className:`btn join-item btn-ghost`,onClick:()=>{k.value=!1},children:`Cancel`}),w(`button`,{className:`btn join-item btn-error`,"data-testid":`modal-actions-confirm`,onClick:()=>{k.value=!1},children:`Delete`})]}),onClose:()=>{k.value=!1},children:w(`p`,{className:`py-2`,children:`This action removes the draft from your local workspace.`})})]})}),code:`const actionsOpen = ref(false)

<Button color="secondary" onClick={() => (actionsOpen.value = true)}>
  Review actions
</Button>
<Modal
  open={actionsOpen.value}
  title="Delete this draft?"
  actions={
    <div className="join">
      <button className="btn join-item btn-ghost" onClick={() => (actionsOpen.value = false)}>
        Cancel
      </button>
      <button className="btn join-item btn-error" onClick={() => (actionsOpen.value = false)}>
        Delete
      </button>
    </div>
  }
  onClose={() => {
    actionsOpen.value = false
  }}
>
  <p className="py-2">This action removes the draft from your local workspace.</p>
</Modal>`});g(()=>p(e,h,R))});let V=a(`rue:component:anchor`);i(h,V),f(()=>{let e=_(B,{title:`Wide modal box`,summary:"原有宽弹层示例保留，同时也可以配合 `width` 使用更偏语义化的尺寸写法。",tab:y,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`accent`,className:`w-fit`,"data-testid":`modal-wide-open`,onClick:()=>{A.value=!0},children:`Open wide modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"通过 `className` 直接扩展 modal-box 宽度和排版，旧写法完全保留。"}),w(z,{open:A.value,title:`Release summary`,className:`w-11/12 max-w-5xl`,onClose:()=>{A.value=!1},children:C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Highlights`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Routing docs refreshed, design pages expanded, and runtime tests tightened.`})]}),C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Notes`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Use modal width utilities on className when the default box is too narrow.`})]})]})})]})}),code:`const wideOpen = ref(false)

<Button color="accent" onClick={() => (wideOpen.value = true)}>
  Open wide modal
</Button>
<Modal
  open={wideOpen.value}
  title="Release summary"
  className="w-11/12 max-w-5xl"
  onClose={() => {
    wideOpen.value = false
  }}
>
  <div className="grid gap-4 py-2 md:grid-cols-2">...</div>
</Modal>`});g(()=>p(e,h,V))});let H=a(`rue:component:anchor`);i(h,H),f(()=>{let e=_(B,{title:`Default footer with async confirm`,summary:"更贴近常见业务弹窗的用法：给 `onOk/onCancel` 和 `confirmLoading` 即可得到默认确认 footer。",tab:b,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-async-open`,onClick:()=>{N.value=`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`,j.value=!0},children:`Launch publish flow`}),w(`p`,{className:`text-sm text-base-content/70`,children:"默认 footer 会自动生成取消/确认按钮，并把 `confirmLoading` 映射到确认按钮。"}),w(z,{open:j.value,title:`Publish this release?`,okText:`开始发布`,cancelText:`稍后处理`,confirmLoading:M.value,onCancel:()=>{M.value=!1,j.value=!1},onOk:()=>{N.value=`正在校验变更、生成产物并同步部署状态...`,M.value=!0,setTimeout(()=>{M.value=!1,j.value=!1,N.value=`发布完成，当前版本已经推送到 staging。`},1200)},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`p`,{className:`m-0 text-sm text-base-content/80`,children:N.value}),C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm`,children:[w(`div`,{className:`font-medium`,children:`Release checklist`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:`Tag 已创建`}),w(`li`,{children:`Changelog 已同步`}),w(`li`,{children:`Preview 环境检查通过`})]})]})]})})]})}),code:`const asyncOpen = ref(false)
const asyncLoading = ref(false)

<Modal
  open={asyncOpen.value}
  title="Publish this release?"
  okText="开始发布"
  cancelText="稍后处理"
  confirmLoading={asyncLoading.value}
  onCancel={() => {
    asyncLoading.value = false
    asyncOpen.value = false
  }}
  onOk={() => {
    asyncLoading.value = true
    setTimeout(() => {
      asyncLoading.value = false
      asyncOpen.value = false
    }, 1200)
  }}
>
  <p className="py-2">默认 footer 会自动生成取消/确认按钮。</p>
</Modal>`});g(()=>p(e,h,H))});let ae=a(`rue:component:anchor`);i(h,ae),f(()=>{let e=_(B,{title:`Footer render and centered layout`,summary:"通过 `centered`、`width`、语义化 className 和 `footer(originNode => ...)`，可以在不改动视觉体系的前提下重组结构。",tab:S,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`info`,className:`w-fit`,onClick:()=>{P.value=!0},children:`Open settings modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"`footer` 支持函数式包裹默认 footer，适合在两端插入说明信息或额外操作。"}),C(z,{open:P.value,centered:!0,width:720,title:`Workspace settings`,headerClassName:`border-b border-base-300 pb-3`,bodyClassName:`pt-1`,footer:e=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`Changes are scoped to the current workspace.`}),w(`div`,{className:`flex flex-wrap justify-end gap-2`,children:e})]}),okText:`保存设置`,cancelText:`关闭`,onCancel:()=>{P.value=!1},onOk:()=>{F.value+=1,P.value=!1},children:[C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Environment`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Staging`}),w(`option`,{children:`Production`})]})]}),C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Deploy channel`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Web`}),w(`option`,{children:`Desktop`})]})]})]}),C(`p`,{className:`mb-0 text-sm text-base-content/70`,children:[`Saved count: `,F.value]})]})]})}),code:`<Modal
  open={renderOpen.value}
  centered
  width={720}
  title="Workspace settings"
  headerClassName="border-b border-base-300 pb-3"
  footer={(originNode: any) => (
    <div className="flex w-full items-center justify-between gap-3">
      <div className="text-sm text-base-content/60">Changes are scoped to the current workspace.</div>
      <div className="flex flex-wrap justify-end gap-2">{originNode}</div>
    </div>
  )}
  okText="保存设置"
  cancelText="关闭"
  onCancel={() => {
    renderOpen.value = false
  }}
  onOk={() => {
    renderOpen.value = false
  }}
>
  <div className="grid gap-4 py-2 md:grid-cols-2">...</div>
</Modal>`});g(()=>p(e,h,ae))});let oe=a(`rue:component:anchor`);i(h,oe),f(()=>{let e=_(B,{title:`Keep mounted content`,summary:"需要在关闭后保留 DOM 状态时，可以开启 `forceRender` + `destroyOnHidden={false}`。",tab:ee,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`success`,className:`w-fit`,onClick:()=>{te.value=!0},children:`Open draft modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`在文本框里输入内容，关闭后再次打开，未提交的草稿仍会保留。`}),w(z,{open:te.value,title:`Draft note`,forceRender:!0,destroyOnHidden:!1,maskClosable:!1,keyboard:!1,footer:null,onClose:()=>{te.value=!1},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`textarea`,{className:`textarea textarea-bordered min-h-32 w-full`,defaultValue:`This textarea keeps its DOM state after the modal is hidden.`}),w(`div`,{className:`alert alert-info text-sm`,children:"这里禁用了遮罩点击和 ESC 关闭，只保留右上角关闭按钮，方便演示 `maskClosable` 与 `keyboard`。"})]})})]})}),code:`<Modal
  open={keepMountedOpen.value}
  title="Draft note"
  forceRender
  destroyOnHidden={false}
  maskClosable={false}
  keyboard={false}
  footer={null}
  onClose={() => {
    keepMountedOpen.value = false
  }}
>
  <textarea className="textarea textarea-bordered min-h-32 w-full" defaultValue="..." />
</Modal>`});g(()=>p(e,h,oe))});let se=n(`h2`);i(h,se),c(se,`id`,`modal-api`),i(se,r(`API`));let U=n(`p`);i(h,U),i(U,r("以下列出当前设计页覆盖到的主要 `Modal` 能力。"));let W=a(`rue:component:anchor`);i(h,W),f(()=>{let e=_(re,{rows:ie});g(()=>p(e,h,W))});let ce=n(`h2`);i(h,ce),i(ce,r(`FAQ`));let G=n(`p`);i(h,G);let K=n(`strong`);i(G,K),i(K,r("什么时候用 `actions`，什么时候用 `footer`？")),i(G,r("如果你在迁移旧代码，直接继续用 `actions` 即可；新代码优先用 `footer`，它可以完全接管 footer，也可以用函数包装默认 footer。"));let q=n(`p`);i(h,q);let J=n(`strong`);i(q,J),i(J,r("`className`、`bodyClassName` 和 `classNames` 怎么选？")),i(q,r("`className` 仍直接追加到"));let Y=n(`code`);i(q,Y),i(Y,r(`modal-box`)),i(q,r(`；只想改某个区域时优先用`));let le=n(`code`);i(q,le),i(le,r(`bodyClassName/headerClassName/footerClassName`)),i(q,r(`；需要更细粒度统一配置时再用`));let ue=o(q);i(q,ue),l(ue,` `);let de=n(`code`);i(q,de),i(de,r(`classNames`)),i(q,r(`。`));let X=n(`p`);i(h,X);let fe=n(`strong`);i(X,fe),i(fe,r("为什么保留 `destroyOnHidden` 默认关闭即卸载？")),i(X,r(`这是为了兼容 Rue 当前组件行为；当你确实需要保留 DOM 状态时，再显式开启`));let Z=n(`code`);i(X,Z),i(Z,r(`forceRender`)),i(X,r(`与`));let pe=n(`code`);return i(X,pe),i(pe,r(`destroyOnHidden={false}`)),i(X,r(`。`)),d})}),d,h),d})};export{V as default};