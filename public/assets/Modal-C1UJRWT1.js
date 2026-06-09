import{$ as e,Ht as t,O as n,Q as r,Rt as i,S as a,Xt as o,Y as s,Yt as c,Z as l,ct as u,et as d,j as f,l as p,m,mt as h,ot as g,qt as _,s as v,t as y,tt as b}from"./vapor-runtime-aZAg0Qkw.js";import{a as x,n as S}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as C,i as w}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as ee}from"./Teleport-BlQahZtB.js";import{t as T}from"./Code-5DOEyGxf.js";import{t as E}from"./button-DL6BQoU1.js";import{t as D}from"./tabs-CWmjyn0I.js";import{r as O}from"./SidebarPlaygroundDesign-CS11MI8e.js";import{t as k}from"./preview-test-gate-DdwKChL0.js";var A=0,j=``,M=(...e)=>e.filter(Boolean).join(` `),N=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),P=e=>e.startsWith(`--`)?e:e.includes(`-`)?N(e):e,F=e=>{if(!e)return;let t={};return typeof e==`string`?(e.split(`;`).map(e=>e.trim()).filter(Boolean).forEach(e=>{let n=e.indexOf(`:`);if(n===-1)return;let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();!r||!i||(t[P(r)]=i)}),Object.keys(t).length>0?t:void 0):(Object.entries(e).forEach(([e,n])=>{n!=null&&(t[P(e)]=n)}),Object.keys(t).length>0?t:void 0)},I=(...e)=>{let t={};return e.forEach(e=>{let n=F(e);n&&Object.assign(t,n)}),Object.keys(t).length>0?t:void 0},te=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e},ne=()=>C(`div`,{className:`space-y-3`,"data-rue-modal-loading":`true`,children:[w(`div`,{className:`skeleton h-4 w-2/5`}),w(`div`,{className:`skeleton h-4 w-full`}),w(`div`,{className:`skeleton h-4 w-5/6`}),w(`div`,{className:`skeleton h-24 w-full`})]}),re=()=>w(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`size-4`,"aria-hidden":`true`,children:w(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 6l12 12M18 6 6 18`})}),L=()=>{typeof document>`u`||(A===0&&(j=document.documentElement.style.overflow,document.documentElement.style.overflow=`hidden`),A+=1)},R=()=>{typeof document>`u`||A===0||(--A,A===0&&(document.documentElement.style.overflow=j))},z=({open:e,defaultOpen:t=!1,title:r,children:o,actions:s,footer:l,className:u,rootClassName:d,rootStyle:p,wrapClassName:h,wrapProps:g,bodyClassName:_,headerClassName:v,footerClassName:y,maskClassName:b,classNames:x,styles:S,width:T,style:D,bodyStyle:O,maskStyle:k,centered:A=!1,closable:j=!0,closeIcon:N,keyboard:P=!0,mask:F=!0,maskClosable:z=!0,forceRender:B=!1,destroyOnClose:ie,destroyOnHidden:ae=!0,confirmLoading:V=!1,okText:H=`确定`,cancelText:oe,okType:se=`primary`,okButtonProps:U,cancelButtonProps:W,zIndex:G,getContainer:K,loading:q=!1,onOk:J,onCancel:Y,onClose:X,onOpenChange:ce,afterClose:Z,afterOpenChange:le,modalRender:ue,...de})=>{let fe=i(t),pe=i(t),Q=i(!1),me=typeof e==`boolean`,$=typeof e==`boolean`?e:fe.value,he=i($),ge=i(P),_e=e=>{me||(fe.value=e),ce&&ce(e)},ve=e=>{e&&typeof e.preventDefault==`function`&&e.preventDefault(),Y&&e&&Y(e),X&&X(e),_e(!1)},ye=e=>{V||J&&J(e)};if(n(()=>{if($&&(L(),Q.value=!0),typeof window>`u`)return;let e=e=>{!he.value||!ge.value||e.key!==`Escape`||ve(e)};window.addEventListener(`keydown`,e),f(()=>{window.removeEventListener(`keydown`,e)})}),c(()=>$,e=>{he.value=e,e?(pe.value=!0,Q.value||=(L(),!0)):Q.value&&(R(),Q.value=!1,Z&&Z()),le&&le(e)}),c(()=>P,e=>{ge.value=e},{immediate:!0}),c(()=>t,e=>{me||(fe.value=!!e)},{immediate:!0}),f(()=>{Q.value&&=(R(),!1)}),!($||B||!(ae??ie??!0)&&pe.value))return null;let{className:be,style:xe,onClick:Se,...Ce}=g??{},we=oe??(J||U?`取消`:`关闭`),Te=l===void 0&&s!=null,Ee=!Te&&(J!=null||U!=null),De=Te||Y!=null||X!=null||Ee,Oe=e=>{let{children:t,onClick:n,...r}=e??{};return a(E,{...W,...r,onClick:e=>{n&&n(e),!e.defaultPrevented&&ve(e)},disabled:r.disabled??W?.disabled},t??W?.children??we)},ke=e=>{let{children:t,onClick:n,...r}=e??{};return a(E,{...U,...r,type:r.type??U?.type??se,loading:r.loading??U?.loading??V,onClick:e=>{n&&n(e),!e.defaultPrevented&&ye(e)}},t??U?.children??H)},Ae=e=>Oe(e),je=e=>ke(e),Me=C(m,{children:[Te?s:null,De?Oe():null,Ee?ke():null]}),Ne=q||l===null||l===!1?null:typeof l==`function`?l(Me,{OkBtn:je,CancelBtn:Ae}):l??Me,Pe=e=>{Se&&Se(e),!e.defaultPrevented&&(!F||!z||e.target!==e.currentTarget||ve(e))},Fe=C(`div`,{...de,"aria-hidden":$?void 0:`true`,className:M(`modal ${$?`modal-open`:``} bg-transparent`.trim(),M(d,M(x?.root,$?void 0:`pointer-events-none`))),style:I(S?.root,p,G==null?void 0:{zIndex:G}),"data-rue-modal-root":`true`,children:[F?w(`div`,{"aria-hidden":`true`,className:M(`absolute inset-0 bg-base-content/40`,M(b,x?.mask)),style:I(S?.mask,k),"data-rue-modal-mask":`true`}):null,w(`div`,{...Ce,className:M(M(`absolute inset-0 overflow-y-auto px-4 py-6 sm:px-6 ${A?`flex items-center justify-center`:`flex items-start justify-center sm:items-center`}`,h),M(be,x?.wrapper)),style:I(S?.wrapper,xe),onClick:Pe,"data-rue-modal-wrapper":`true`,children:w(`div`,{className:M(`relative flex w-full justify-center`,x?.container),style:I(S?.container),"data-rue-modal-container":`true`,children:C(`div`,{role:`dialog`,"aria-modal":$?`true`:`false`,"aria-hidden":$?void 0:`true`,className:M(M(`modal-box relative`,u),M(x?.box,$?void 0:`pointer-events-none`)),style:I(S?.box,D,T==null?void 0:{width:te(T)}),onClick:e=>{e.stopPropagation()},"data-rue-modal-box":`true`,children:[j?w(`button`,{type:`button`,"aria-label":`关闭`,className:M(`btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10`,x?.close),style:I(S?.close),onClick:e=>ve(e),children:N??w(re,{})}):null,r?w(`div`,{className:M(`mb-4 pr-10`,M(v,x?.header)),style:I(S?.header),children:w(`div`,{className:M(`text-lg font-semibold leading-6`,x?.title),style:I(S?.title),children:r})}):null,w(`div`,{className:M(`space-y-4`,M(_,x?.body)),style:I(S?.body,O),"aria-busy":q?`true`:void 0,children:q?ne():o}),Ne?w(`div`,{className:M(`modal-action mt-6 flex flex-wrap items-center justify-end gap-2`,M(y,x?.footer)),style:I(S?.footer),children:Ne}):null]})})})]}),Ie=ue?ue(Fe):Fe,Le=typeof K==`function`?K():K;return Le===!1||Le==null?Ie:w(ee,{to:Le,children:Ie})},B=n=>p(i=>{let a=e(`div`,i);u(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=e(`div`,a);s(a,c),u(c,`flex flex-wrap items-start justify-between gap-3`);let f=e(`div`,c);s(c,f);let m=e(`h2`,f);s(f,m),u(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),s(m,d(`# `));let h=l(`rue:slot:anchor`);s(m,h),o(()=>{let e=n.title;t(()=>v(e,m,h))});let g=e(`p`,f);s(f,g),u(g,`m-0 text-sm opacity-70`);let _=l(`rue:slot:anchor`);s(g,_),o(()=>{let e=n.summary;t(()=>v(e,g,_))});let b=l(`rue:component:anchor`);s(a,b),o(()=>{let e=y(D,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});t(()=>v(e,a,b))});let x=l(`rue:slot:anchor`);return s(a,x),o(()=>{let e=n.tab.value===`preview`?k(n.title,n.preview):p(()=>{let e=r(),i=l(`rue:component:anchor`);return s(e,i),o(()=>{let r=y(T,{className:`mt-2`,lang:`tsx`,code:n.code});t(()=>v(r,e,i))}),e});t(()=>v(e,a,x))}),a}),ie=n=>p(i=>{let a=e(`div`,i);u(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=e(`table`,a);s(a,c),u(c,`table table-zebra`);let f=e(`thead`,c);s(c,f);let m=e(`tr`,f);s(f,m);let h=e(`th`,m);s(m,h),s(h,d(`属性`));let _=e(`th`,m);s(m,_),s(_,d(`说明`));let y=e(`th`,m);s(m,y),s(y,d(`类型`));let b=e(`th`,m);s(m,b),s(b,d(`默认值`));let x=e(`tbody`,c);s(c,x);let C=l(`rue:list:start`),w=l(`rue:list:end`);s(x,C),s(x,w);let ee=new Map;return o(()=>{ee=S({items:n.rows||[],getKey:(e,t)=>e.prop,elements:ee,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,c,u)=>{v(p(()=>{let i=r(),a=e(`tr`,i);s(i,a),o(()=>{g(a,`key`,String(n.prop))});let c=e(`td`,a);s(a,c);let u=e(`code`,c);s(c,u);let d=l(`rue:slot:anchor`);s(u,d),o(()=>{let e=n.prop;t(()=>v(e,u,d))});let f=e(`td`,a);s(a,f);let p=l(`rue:slot:anchor`);s(f,p),o(()=>{let e=n.description;t(()=>v(e,f,p))});let m=e(`td`,a);s(a,m);let h=e(`code`,m);s(m,h);let _=l(`rue:slot:anchor`);s(h,_),o(()=>{let e=n.type;t(()=>v(e,h,_))});let y=e(`td`,a);s(a,y);let b=e(`code`,y);s(y,b);let x=l(`rue:slot:anchor`);return s(b,x),o(()=>{let e=n.defaultValue;t(()=>v(e,b,x))}),i}),i,a)}})}),a}),ae=[{prop:`open`,description:`受控显隐。`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpen`,description:`非受控初始打开状态。`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容。`,type:`any`,defaultValue:`-`},{prop:`footer`,description:"自定义 footer；传 `null` 可隐藏；也支持函数包裹默认 footer。",type:`any | (originNode) => any`,defaultValue:`-`},{prop:`actions`,description:`旧版动作区写法，会保留原有“自定义动作 + 默认关闭按钮”行为。`,type:`any`,defaultValue:`-`},{prop:`onOk / onCancel / onClose`,description:`确认、取消与关闭回调。`,type:`function`,defaultValue:`-`},{prop:`confirmLoading`,description:`让默认确认按钮进入 loading 态。`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`主体切换到骨架占位态，并临时隐藏 footer。`,type:`boolean`,defaultValue:`false`},{prop:`okText / cancelText / okType`,description:`默认 footer 的按钮文案与确认按钮类型。`,type:`any / any / ButtonType`,defaultValue:"`确定` / 自动 / `primary`"},{prop:`width / className`,description:"设置 modal-box 宽度；`className` 仍直接追加到 box。",type:`string | number / string`,defaultValue:`-`},{prop:`rootStyle / wrapClassName / wrapProps / maskClassName / maskStyle`,description:"分别定制根层、wrapper 和遮罩层；`mask={false}` 时不会渲染遮罩节点。",type:`style / string / object / string / style`,defaultValue:`-`},{prop:`centered`,description:`垂直居中。`,type:`boolean`,defaultValue:`false`},{prop:`mask / maskClosable / keyboard`,description:`控制遮罩显示、点击遮罩关闭与 ESC 关闭。`,type:`boolean`,defaultValue:`true / true / true`},{prop:`closable / closeIcon`,description:`右上角关闭按钮与自定义关闭图标。`,type:`boolean / any`,defaultValue:`true / 默认图标`},{prop:`forceRender / destroyOnHidden`,description:`控制关闭后是否保留内容挂载。`,type:`boolean / boolean`,defaultValue:`false / true`},{prop:`destroyOnClose / getContainer`,description:`兼容旧别名，并支持通过 Teleport 把弹层渲染到指定容器。`,type:`boolean / string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`- / false`},{prop:`bodyClassName / headerClassName / footerClassName`,description:`分别定制头部、主体、底部区域类名。`,type:`string`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义分区覆盖 root/mask/wrapper/container/box/header/title/body/footer/close。`,type:`object`,defaultValue:`-`},{prop:`modalRender`,description:`接管最终弹层节点的二次包裹。`,type:`(node) => any`,defaultValue:`-`},{prop:`afterOpenChange / afterClose`,description:`显隐变化后的钩子。`,type:`function`,defaultValue:`-`}],V=()=>{let{tabBasic:n,tabMaskless:a,tabActions:c,tabWide:f,tabAsync:m,tabFooterRender:S,tabKeepMounted:ee,basicOpen:T,masklessOpen:D,actionsOpen:k,wideOpen:A,asyncOpen:j,asyncLoading:M,asyncStatus:N,renderOpen:P,guardCount:F,keepMountedOpen:I}=x(`useSetup:0:0`,()=>_(()=>({tabBasic:x(`ref:1:0`,()=>i(`preview`)),tabMaskless:x(`ref:1:1`,()=>i(`preview`)),tabActions:x(`ref:1:2`,()=>i(`preview`)),tabWide:x(`ref:1:3`,()=>i(`preview`)),tabAsync:x(`ref:1:4`,()=>i(`preview`)),tabFooterRender:x(`ref:1:5`,()=>i(`preview`)),tabKeepMounted:x(`ref:1:6`,()=>i(`preview`)),basicOpen:x(`ref:1:7`,()=>i(!1)),masklessOpen:x(`ref:1:8`,()=>i(!1)),actionsOpen:x(`ref:1:9`,()=>i(!1)),wideOpen:x(`ref:1:10`,()=>i(!1)),asyncOpen:x(`ref:1:11`,()=>i(!1)),asyncLoading:x(`ref:1:12`,()=>i(!1)),asyncStatus:x(`ref:1:13`,()=>i(`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`)),renderOpen:x(`ref:1:14`,()=>i(!1)),guardCount:x(`ref:1:15`,()=>i(0)),keepMountedOpen:x(`ref:1:16`,()=>i(!1))})));return p(i=>{let _=r(),x=l(`rue:component:anchor`);return s(_,x),v(y(O,{children:p(()=>{let i=r(),p=e(`div`,i);s(i,p),u(p,`max-w-none prose prose-sm md:prose-base`);let _=e(`h1`,p);s(p,_),s(_,d(`Modal 模态框`));let x=e(`p`,p);s(p,x),u(x,`text-sm mt-3 mb-3`),s(x,d(`Modal 现在保持 Rue 自己的视觉风格，同时补齐了更完整的显隐控制、默认 footer、异步确认、遮罩交互、挂载策略与 root/mask/wrapper 级别的语义化定制能力。`));let O=l(`rue:component:anchor`);s(p,O),o(()=>{let e=y(B,{title:`Controlled modal`,summary:"保留原有受控用法：通过 `open` 和 `onClose` 管理显隐，默认 footer 会自动提供关闭按钮。",tab:n,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(E,{color:`primary`,className:`w-fit`,"data-testid":`modal-basic-open`,onClick:()=>{T.value=!0},children:`Open modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`点击按钮后会显示受控模态框，并通过默认关闭按钮或右上角关闭图标收起。`}),w(z,{open:T.value,title:`Basic modal`,onClose:()=>{T.value=!1},children:w(`p`,{className:`py-2`,children:`Press the close button below to dismiss this modal.`})})]})}),code:`const basicOpen = ref(false)

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
</Modal>`});t(()=>v(e,p,O))});let te=l(`rue:component:anchor`);s(p,te),o(()=>{let e=y(B,{title:`Maskless modal and layer hooks`,summary:"`mask={false}` 会真正移除遮罩层；需要精细控制时可继续配合 `rootStyle`、`wrapClassName` 与语义化 `classNames/styles`。",tab:a,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(E,{color:`warning`,className:`w-fit`,"data-testid":`modal-maskless-open`,onClick:()=>{D.value=!0},children:`Open without mask`}),w(`p`,{className:`text-sm text-base-content/70`,children:`当前示例关闭了遮罩视觉，因此背景保持可见，点击外层空白区域也不会触发关闭。`}),w(z,{open:D.value,mask:!1,width:680,rootStyle:{backdropFilter:`blur(2px)`},wrapClassName:`items-end sm:items-center`,classNames:{container:`max-w-3xl`,box:`border border-base-300 shadow-2xl`,body:`space-y-3`},title:`Inspector panel`,footer:(e,{CancelBtn:t})=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`No mask layer is rendered in this example.`}),w(`div`,{className:`flex justify-end`,children:w(t,{children:`关闭面板`})})]}),onClose:()=>{D.value=!1},children:C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm text-base-content/80`,children:[w(`div`,{className:`font-medium`,children:`Layer summary`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:"`rootStyle` 作用在最外层固定定位节点"}),w(`li`,{children:"`wrapClassName` 作用在可滚动的交互 wrapper"}),w(`li`,{children:"`classNames.container` 和 `classNames.box` 分别控制容器与面板"})]})]})})]})}),code:`const masklessOpen = ref(false)

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
</Modal>`});t(()=>v(e,p,te))});let ne=l(`rue:component:anchor`);s(p,ne),o(()=>{let e=y(B,{title:`Modal with custom actions`,summary:"旧版 `actions` 仍然可用，适合把自定义按钮组插到 footer 里，同时保留默认关闭按钮。",tab:c,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(E,{color:`secondary`,className:`w-fit`,"data-testid":`modal-actions-open`,onClick:()=>{k.value=!0},children:`Review actions`}),w(`p`,{className:`text-sm text-base-content/70`,children:"可以继续使用 `actions` 兼容旧 demo，同时逐步迁移到新的 `footer` API。"}),w(z,{open:k.value,title:`Delete this draft?`,actions:C(`div`,{className:`join`,"data-testid":`modal-actions-group`,children:[w(`button`,{className:`btn join-item btn-ghost`,onClick:()=>{k.value=!1},children:`Cancel`}),w(`button`,{className:`btn join-item btn-error`,"data-testid":`modal-actions-confirm`,onClick:()=>{k.value=!1},children:`Delete`})]}),onClose:()=>{k.value=!1},children:w(`p`,{className:`py-2`,children:`This action removes the draft from your local workspace.`})})]})}),code:`const actionsOpen = ref(false)

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
</Modal>`});t(()=>v(e,p,ne))});let re=l(`rue:component:anchor`);s(p,re),o(()=>{let e=y(B,{title:`Wide modal box`,summary:"原有宽弹层示例保留，同时也可以配合 `width` 使用更偏语义化的尺寸写法。",tab:f,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(E,{color:`accent`,className:`w-fit`,"data-testid":`modal-wide-open`,onClick:()=>{A.value=!0},children:`Open wide modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"通过 `className` 直接扩展 modal-box 宽度和排版，旧写法完全保留。"}),w(z,{open:A.value,title:`Release summary`,className:`w-11/12 max-w-5xl`,onClose:()=>{A.value=!1},children:C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Highlights`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Routing docs refreshed, design pages expanded, and runtime tests tightened.`})]}),C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Notes`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Use modal width utilities on className when the default box is too narrow.`})]})]})})]})}),code:`const wideOpen = ref(false)

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
</Modal>`});t(()=>v(e,p,re))});let L=l(`rue:component:anchor`);s(p,L),o(()=>{let e=y(B,{title:`Default footer with async confirm`,summary:"更贴近常见业务弹窗的用法：给 `onOk/onCancel` 和 `confirmLoading` 即可得到默认确认 footer。",tab:m,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(E,{color:`primary`,className:`w-fit`,"data-testid":`modal-async-open`,onClick:()=>{N.value=`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`,j.value=!0},children:`Launch publish flow`}),w(`p`,{className:`text-sm text-base-content/70`,children:"默认 footer 会自动生成取消/确认按钮，并把 `confirmLoading` 映射到确认按钮。"}),w(z,{open:j.value,title:`Publish this release?`,okText:`开始发布`,cancelText:`稍后处理`,confirmLoading:M.value,onCancel:()=>{M.value=!1,j.value=!1},onOk:()=>{N.value=`正在校验变更、生成产物并同步部署状态...`,M.value=!0,setTimeout(()=>{M.value=!1,j.value=!1,N.value=`发布完成，当前版本已经推送到 staging。`},1200)},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`p`,{className:`m-0 text-sm text-base-content/80`,children:N.value}),C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm`,children:[w(`div`,{className:`font-medium`,children:`Release checklist`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:`Tag 已创建`}),w(`li`,{children:`Changelog 已同步`}),w(`li`,{children:`Preview 环境检查通过`})]})]})]})})]})}),code:`const asyncOpen = ref(false)
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
</Modal>`});t(()=>v(e,p,L))});let R=l(`rue:component:anchor`);s(p,R),o(()=>{let e=y(B,{title:`Footer render and centered layout`,summary:"通过 `centered`、`width`、语义化 className 和 `footer(originNode => ...)`，可以在不改动视觉体系的前提下重组结构。",tab:S,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(E,{color:`info`,className:`w-fit`,onClick:()=>{P.value=!0},children:`Open settings modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"`footer` 支持函数式包裹默认 footer，适合在两端插入说明信息或额外操作。"}),C(z,{open:P.value,centered:!0,width:720,title:`Workspace settings`,headerClassName:`border-b border-base-300 pb-3`,bodyClassName:`pt-1`,footer:e=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`Changes are scoped to the current workspace.`}),w(`div`,{className:`flex flex-wrap justify-end gap-2`,children:e})]}),okText:`保存设置`,cancelText:`关闭`,onCancel:()=>{P.value=!1},onOk:()=>{F.value+=1,P.value=!1},children:[C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Environment`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Staging`}),w(`option`,{children:`Production`})]})]}),C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Deploy channel`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Web`}),w(`option`,{children:`Desktop`})]})]})]}),C(`p`,{className:`mb-0 text-sm text-base-content/70`,children:[`Saved count: `,F.value]})]})]})}),code:`<Modal
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
</Modal>`});t(()=>v(e,p,R))});let V=l(`rue:component:anchor`);s(p,V),o(()=>{let e=y(B,{title:`Keep mounted content`,summary:"需要在关闭后保留 DOM 状态时，可以开启 `forceRender` + `destroyOnHidden={false}`。",tab:ee,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(E,{color:`success`,className:`w-fit`,onClick:()=>{I.value=!0},children:`Open draft modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`在文本框里输入内容，关闭后再次打开，未提交的草稿仍会保留。`}),w(z,{open:I.value,title:`Draft note`,forceRender:!0,destroyOnHidden:!1,maskClosable:!1,keyboard:!1,footer:null,onClose:()=>{I.value=!1},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`textarea`,{className:`textarea textarea-bordered min-h-32 w-full`,defaultValue:`This textarea keeps its DOM state after the modal is hidden.`}),w(`div`,{className:`alert alert-info text-sm`,children:"这里禁用了遮罩点击和 ESC 关闭，只保留右上角关闭按钮，方便演示 `maskClosable` 与 `keyboard`。"})]})})]})}),code:`<Modal
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
</Modal>`});t(()=>v(e,p,V))});let H=e(`h2`,p);s(p,H),g(H,`id`,`modal-api`),s(H,d(`API`));let oe=e(`p`,p);s(p,oe),s(oe,d("以下列出当前设计页覆盖到的主要 `Modal` 能力。"));let se=l(`rue:component:anchor`);s(p,se),o(()=>{let e=y(ie,{rows:ae});t(()=>v(e,p,se))});let U=e(`h2`,p);s(p,U),s(U,d(`FAQ`));let W=e(`p`,p);s(p,W);let G=e(`strong`,W);s(W,G),s(G,d("什么时候用 `actions`，什么时候用 `footer`？")),s(W,d("如果你在迁移旧代码，直接继续用 `actions` 即可；新代码优先用 `footer`，它可以完全接管 footer，也可以用函数包装默认 footer。"));let K=e(`p`,p);s(p,K);let q=e(`strong`,K);s(K,q),s(q,d("`className`、`bodyClassName` 和 `classNames` 怎么选？")),s(K,d("`className` 仍直接追加到"));let J=e(`code`,K);s(K,J),s(J,d(`modal-box`)),s(K,d(`；只想改某个区域时优先用`));let Y=e(`code`,K);s(K,Y),s(Y,d(`bodyClassName/headerClassName/footerClassName`)),s(K,d(`；需要更细粒度统一配置时再用`));let X=b(K);s(K,X),h(X,` `);let ce=e(`code`,K);s(K,ce),s(ce,d(`classNames`)),s(K,d(`。`));let Z=e(`p`,p);s(p,Z);let le=e(`strong`,Z);s(Z,le),s(le,d("为什么保留 `destroyOnHidden` 默认关闭即卸载？")),s(Z,d(`这是为了兼容 Rue 当前组件行为；当你确实需要保留 DOM 状态时，再显式开启`));let ue=e(`code`,Z);s(Z,ue),s(ue,d(`forceRender`)),s(Z,d(`与`));let de=e(`code`,Z);return s(Z,de),s(de,d(`destroyOnHidden={false}`)),s(Z,d(`。`)),i})}),_,x),_})};export{V as default};