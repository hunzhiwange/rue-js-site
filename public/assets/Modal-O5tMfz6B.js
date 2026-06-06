import{$ as e,B as t,C as n,D as r,Dt as i,Et as a,G as o,H as s,K as c,O as l,U as u,W as d,Z as f,_ as p,at as m,ht as h,l as g,s as _,t as v,wt as y,yt as b}from"./vapor-runtime-C1rlwc61.js";import{a as x,n as S}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as C}from"./Teleport-C_QtYL7W.js";import{t as w}from"./Code-BCLFq1E3.js";import{n as T,t as E}from"./src-BLzF0BqW.js";import{n as ee}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as D}from"./button-B1PhsXzm.js";import{t as O}from"./tabs-BOxm6iIN.js";import{t as k}from"./preview-test-gate-DtKtoe96.js";var A=0,j=``,M=(...e)=>e.filter(Boolean).join(` `),N=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),P=e=>e.startsWith(`--`)?e:e.includes(`-`)?N(e):e,F=e=>{if(!e)return;let t={};return typeof e==`string`?(e.split(`;`).map(e=>e.trim()).filter(Boolean).forEach(e=>{let n=e.indexOf(`:`);if(n===-1)return;let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();!r||!i||(t[P(r)]=i)}),Object.keys(t).length>0?t:void 0):(Object.entries(e).forEach(([e,n])=>{n!=null&&(t[P(e)]=n)}),Object.keys(t).length>0?t:void 0)},I=(...e)=>{let t={};return e.forEach(e=>{let n=F(e);n&&Object.assign(t,n)}),Object.keys(t).length>0?t:void 0},te=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e},ne=()=>T(`div`,{className:`space-y-3`,"data-rue-modal-loading":`true`,children:[E(`div`,{className:`skeleton h-4 w-2/5`}),E(`div`,{className:`skeleton h-4 w-full`}),E(`div`,{className:`skeleton h-4 w-5/6`}),E(`div`,{className:`skeleton h-24 w-full`})]}),re=()=>E(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`size-4`,"aria-hidden":`true`,children:E(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 6l12 12M18 6 6 18`})}),L=()=>{typeof document>`u`||(A===0&&(j=document.documentElement.style.overflow,document.documentElement.style.overflow=`hidden`),A+=1)},R=()=>{typeof document>`u`||A===0||(--A,A===0&&(document.documentElement.style.overflow=j))},z=({open:e,defaultOpen:t=!1,title:i,children:o,actions:s,footer:c,className:u,rootClassName:d,rootStyle:f,wrapClassName:m,wrapProps:g,bodyClassName:_,headerClassName:v,footerClassName:y,maskClassName:b,classNames:x,styles:S,width:w,style:ee,bodyStyle:O,maskStyle:k,centered:A=!1,closable:j=!0,closeIcon:N,keyboard:P=!0,mask:F=!0,maskClosable:z=!0,forceRender:B=!1,destroyOnClose:ie,destroyOnHidden:ae=!0,confirmLoading:V=!1,okText:oe=`确定`,cancelText:se,okType:ce=`primary`,okButtonProps:H,cancelButtonProps:U,zIndex:W,getContainer:G,loading:K=!1,onOk:q,onCancel:J,onClose:Y,onOpenChange:X,afterClose:Z,afterOpenChange:le,modalRender:ue,...de})=>{let fe=h(t),pe=h(t),Q=h(!1),me=typeof e==`boolean`,$=typeof e==`boolean`?e:fe.value,he=h($),ge=h(P),_e=e=>{me||(fe.value=e),X&&X(e)},ve=e=>{e&&typeof e.preventDefault==`function`&&e.preventDefault(),J&&e&&J(e),Y&&Y(e),_e(!1)},ye=e=>{V||q&&q(e)};if(r(()=>{if($&&(L(),Q.value=!0),typeof window>`u`)return;let e=e=>{!he.value||!ge.value||e.key!==`Escape`||ve(e)};window.addEventListener(`keydown`,e),l(()=>{window.removeEventListener(`keydown`,e)})}),a(()=>$,e=>{he.value=e,e?(pe.value=!0,Q.value||=(L(),!0)):Q.value&&(R(),Q.value=!1,Z&&Z()),le&&le(e)}),a(()=>P,e=>{ge.value=e},{immediate:!0}),a(()=>t,e=>{me||(fe.value=!!e)},{immediate:!0}),l(()=>{Q.value&&=(R(),!1)}),!($||B||!(ae??ie??!0)&&pe.value))return null;let{className:be,style:xe,onClick:Se,...Ce}=g??{},we=se??(q||H?`取消`:`关闭`),Te=c===void 0&&s!=null,Ee=!Te&&(q!=null||H!=null),De=Te||J!=null||Y!=null||Ee,Oe=e=>{let{children:t,onClick:r,...i}=e??{};return n(D,{...U,...i,onClick:e=>{r&&r(e),!e.defaultPrevented&&ve(e)},disabled:i.disabled??U?.disabled},t??U?.children??we)},ke=e=>{let{children:t,onClick:r,...i}=e??{};return n(D,{...H,...i,type:i.type??H?.type??ce,loading:i.loading??H?.loading??V,onClick:e=>{r&&r(e),!e.defaultPrevented&&ye(e)}},t??H?.children??oe)},Ae=e=>Oe(e),je=e=>ke(e),Me=T(p,{children:[Te?s:null,De?Oe():null,Ee?ke():null]}),Ne=K||c===null||c===!1?null:typeof c==`function`?c(Me,{OkBtn:je,CancelBtn:Ae}):c??Me,Pe=e=>{Se&&Se(e),!e.defaultPrevented&&(!F||!z||e.target!==e.currentTarget||ve(e))},Fe=T(`div`,{...de,"aria-hidden":$?void 0:`true`,className:M(`modal ${$?`modal-open`:``} bg-transparent`.trim(),M(d,M(x?.root,$?void 0:`pointer-events-none`))),style:I(S?.root,f,W==null?void 0:{zIndex:W}),"data-rue-modal-root":`true`,children:[F?E(`div`,{"aria-hidden":`true`,className:M(`absolute inset-0 bg-base-content/40`,M(b,x?.mask)),style:I(S?.mask,k),"data-rue-modal-mask":`true`}):null,E(`div`,{...Ce,className:M(M(`absolute inset-0 overflow-y-auto px-4 py-6 sm:px-6 ${A?`flex items-center justify-center`:`flex items-start justify-center sm:items-center`}`,m),M(be,x?.wrapper)),style:I(S?.wrapper,xe),onClick:Pe,"data-rue-modal-wrapper":`true`,children:E(`div`,{className:M(`relative flex w-full justify-center`,x?.container),style:I(S?.container),"data-rue-modal-container":`true`,children:T(`div`,{role:`dialog`,"aria-modal":$?`true`:`false`,"aria-hidden":$?void 0:`true`,className:M(M(`modal-box relative`,u),M(x?.box,$?void 0:`pointer-events-none`)),style:I(S?.box,ee,w==null?void 0:{width:te(w)}),onClick:e=>{e.stopPropagation()},"data-rue-modal-box":`true`,children:[j?E(`button`,{type:`button`,"aria-label":`关闭`,className:M(`btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10`,x?.close),style:I(S?.close),onClick:e=>ve(e),children:N??E(re,{})}):null,i?E(`div`,{className:M(`mb-4 pr-10`,M(v,x?.header)),style:I(S?.header),children:E(`div`,{className:M(`text-lg font-semibold leading-6`,x?.title),style:I(S?.title),children:i})}):null,E(`div`,{className:M(`space-y-4`,M(_,x?.body)),style:I(S?.body,O),"aria-busy":K?`true`:void 0,children:K?ne():o}),Ne?E(`div`,{className:M(`modal-action mt-6 flex flex-wrap items-center justify-end gap-2`,M(y,x?.footer)),style:I(S?.footer),children:Ne}):null]})})})]}),Ie=ue?ue(Fe):Fe,Le=typeof G==`function`?G():G;return Le===!1||Le==null?Ie:E(C,{to:Le,children:Ie})},B=n=>g(r=>{let a=d(`div`,r);e(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=d(`div`,a);t(a,c),e(c,`flex flex-wrap items-start justify-between gap-3`);let l=d(`div`,c);t(c,l);let f=d(`h2`,l);t(l,f),e(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(f,o(`# `));let p=s(`rue:slot:anchor`);t(f,p),i(()=>{let e=n.title;b(()=>_(e,f,p))});let m=d(`p`,l);t(l,m),e(m,`m-0 text-sm opacity-70`);let h=s(`rue:slot:anchor`);t(m,h),i(()=>{let e=n.summary;b(()=>_(e,m,h))});let y=s(`rue:component:anchor`);t(a,y),i(()=>{let e=v(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});b(()=>_(e,a,y))});let x=s(`rue:slot:anchor`);return t(a,x),i(()=>{let e=n.tab.value===`preview`?k(n.title,n.preview):g(()=>{let e=u(),r=s(`rue:component:anchor`);return t(e,r),i(()=>{let t=v(w,{className:`mt-2`,lang:`tsx`,code:n.code});b(()=>_(t,e,r))}),e});b(()=>_(e,a,x))}),a}),ie=n=>g(r=>{let a=d(`div`,r);e(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=d(`table`,a);t(a,c),e(c,`table table-zebra`);let l=d(`thead`,c);t(c,l);let p=d(`tr`,l);t(l,p);let m=d(`th`,p);t(p,m),t(m,o(`属性`));let h=d(`th`,p);t(p,h),t(h,o(`说明`));let v=d(`th`,p);t(p,v),t(v,o(`类型`));let y=d(`th`,p);t(p,y),t(y,o(`默认值`));let x=d(`tbody`,c);t(c,x);let C=s(`rue:list:start`),w=s(`rue:list:end`);t(x,C),t(x,w);let T=new Map;return i(()=>{T=S({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,a,o)=>{_(g(()=>{let n=u(),r=d(`tr`,n);t(n,r),i(()=>{f(r,`key`,String(e.prop))});let a=d(`td`,r);t(r,a);let o=d(`code`,a);t(a,o);let c=s(`rue:slot:anchor`);t(o,c),i(()=>{let t=e.prop;b(()=>_(t,o,c))});let l=d(`td`,r);t(r,l);let p=s(`rue:slot:anchor`);t(l,p),i(()=>{let t=e.description;b(()=>_(t,l,p))});let m=d(`td`,r);t(r,m);let h=d(`code`,m);t(m,h);let g=s(`rue:slot:anchor`);t(h,g),i(()=>{let t=e.type;b(()=>_(t,h,g))});let v=d(`td`,r);t(r,v);let y=d(`code`,v);t(v,y);let x=s(`rue:slot:anchor`);return t(y,x),i(()=>{let t=e.defaultValue;b(()=>_(t,y,x))}),n}),n,r)}})}),a}),ae=[{prop:`open`,description:`受控显隐。`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpen`,description:`非受控初始打开状态。`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容。`,type:`any`,defaultValue:`-`},{prop:`footer`,description:"自定义 footer；传 `null` 可隐藏；也支持函数包裹默认 footer。",type:`any | (originNode) => any`,defaultValue:`-`},{prop:`actions`,description:`旧版动作区写法，会保留原有“自定义动作 + 默认关闭按钮”行为。`,type:`any`,defaultValue:`-`},{prop:`onOk / onCancel / onClose`,description:`确认、取消与关闭回调。`,type:`function`,defaultValue:`-`},{prop:`confirmLoading`,description:`让默认确认按钮进入 loading 态。`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`主体切换到骨架占位态，并临时隐藏 footer。`,type:`boolean`,defaultValue:`false`},{prop:`okText / cancelText / okType`,description:`默认 footer 的按钮文案与确认按钮类型。`,type:`any / any / ButtonType`,defaultValue:"`确定` / 自动 / `primary`"},{prop:`width / className`,description:"设置 modal-box 宽度；`className` 仍直接追加到 box。",type:`string | number / string`,defaultValue:`-`},{prop:`rootStyle / wrapClassName / wrapProps / maskClassName / maskStyle`,description:"分别定制根层、wrapper 和遮罩层；`mask={false}` 时不会渲染遮罩节点。",type:`style / string / object / string / style`,defaultValue:`-`},{prop:`centered`,description:`垂直居中。`,type:`boolean`,defaultValue:`false`},{prop:`mask / maskClosable / keyboard`,description:`控制遮罩显示、点击遮罩关闭与 ESC 关闭。`,type:`boolean`,defaultValue:`true / true / true`},{prop:`closable / closeIcon`,description:`右上角关闭按钮与自定义关闭图标。`,type:`boolean / any`,defaultValue:`true / 默认图标`},{prop:`forceRender / destroyOnHidden`,description:`控制关闭后是否保留内容挂载。`,type:`boolean / boolean`,defaultValue:`false / true`},{prop:`destroyOnClose / getContainer`,description:`兼容旧别名，并支持通过 Teleport 把弹层渲染到指定容器。`,type:`boolean / string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`- / false`},{prop:`bodyClassName / headerClassName / footerClassName`,description:`分别定制头部、主体、底部区域类名。`,type:`string`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义分区覆盖 root/mask/wrapper/container/box/header/title/body/footer/close。`,type:`object`,defaultValue:`-`},{prop:`modalRender`,description:`接管最终弹层节点的二次包裹。`,type:`(node) => any`,defaultValue:`-`},{prop:`afterOpenChange / afterClose`,description:`显隐变化后的钩子。`,type:`function`,defaultValue:`-`}],V=()=>{let{tabBasic:n,tabMaskless:r,tabActions:a,tabWide:l,tabAsync:p,tabFooterRender:S,tabKeepMounted:C,basicOpen:w,masklessOpen:O,actionsOpen:k,wideOpen:A,asyncOpen:j,asyncLoading:M,asyncStatus:N,renderOpen:P,guardCount:F,keepMountedOpen:I}=x(`useSetup:0:0`,()=>y(()=>({tabBasic:x(`ref:1:0`,()=>h(`preview`)),tabMaskless:x(`ref:1:1`,()=>h(`preview`)),tabActions:x(`ref:1:2`,()=>h(`preview`)),tabWide:x(`ref:1:3`,()=>h(`preview`)),tabAsync:x(`ref:1:4`,()=>h(`preview`)),tabFooterRender:x(`ref:1:5`,()=>h(`preview`)),tabKeepMounted:x(`ref:1:6`,()=>h(`preview`)),basicOpen:x(`ref:1:7`,()=>h(!1)),masklessOpen:x(`ref:1:8`,()=>h(!1)),actionsOpen:x(`ref:1:9`,()=>h(!1)),wideOpen:x(`ref:1:10`,()=>h(!1)),asyncOpen:x(`ref:1:11`,()=>h(!1)),asyncLoading:x(`ref:1:12`,()=>h(!1)),asyncStatus:x(`ref:1:13`,()=>h(`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`)),renderOpen:x(`ref:1:14`,()=>h(!1)),guardCount:x(`ref:1:15`,()=>h(0)),keepMountedOpen:x(`ref:1:16`,()=>h(!1))})));return g(h=>{let y=u(),x=s(`rue:component:anchor`);return t(y,x),_(v(ee,{children:g(()=>{let h=u(),g=d(`div`,h);t(h,g),e(g,`max-w-none prose prose-sm md:prose-base`);let y=d(`h1`,g);t(g,y),t(y,o(`Modal 模态框`));let x=d(`p`,g);t(g,x),e(x,`text-sm mt-3 mb-3`),t(x,o(`Modal 现在保持 Rue 自己的视觉风格，同时补齐了更完整的显隐控制、默认 footer、异步确认、遮罩交互、挂载策略与 root/mask/wrapper 级别的语义化定制能力。`));let ee=s(`rue:component:anchor`);t(g,ee),i(()=>{let e=v(B,{title:`Controlled modal`,summary:"保留原有受控用法：通过 `open` 和 `onClose` 管理显隐，默认 footer 会自动提供关闭按钮。",tab:n,preview:()=>E(`div`,{className:`card bg-base-100 shadow-sm`,children:T(`div`,{className:`card-body gap-4`,children:[E(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-basic-open`,onClick:()=>{w.value=!0},children:`Open modal`}),E(`p`,{className:`text-sm text-base-content/70`,children:`点击按钮后会显示受控模态框，并通过默认关闭按钮或右上角关闭图标收起。`}),E(z,{open:w.value,title:`Basic modal`,onClose:()=>{w.value=!1},children:E(`p`,{className:`py-2`,children:`Press the close button below to dismiss this modal.`})})]})}),code:`const basicOpen = ref(false)

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
</Modal>`});b(()=>_(e,g,ee))});let te=s(`rue:component:anchor`);t(g,te),i(()=>{let e=v(B,{title:`Maskless modal and layer hooks`,summary:"`mask={false}` 会真正移除遮罩层；需要精细控制时可继续配合 `rootStyle`、`wrapClassName` 与语义化 `classNames/styles`。",tab:r,preview:()=>E(`div`,{className:`card bg-base-100 shadow-sm`,children:T(`div`,{className:`card-body gap-4`,children:[E(D,{color:`warning`,className:`w-fit`,"data-testid":`modal-maskless-open`,onClick:()=>{O.value=!0},children:`Open without mask`}),E(`p`,{className:`text-sm text-base-content/70`,children:`当前示例关闭了遮罩视觉，因此背景保持可见，点击外层空白区域也不会触发关闭。`}),E(z,{open:O.value,mask:!1,width:680,rootStyle:{backdropFilter:`blur(2px)`},wrapClassName:`items-end sm:items-center`,classNames:{container:`max-w-3xl`,box:`border border-base-300 shadow-2xl`,body:`space-y-3`},title:`Inspector panel`,footer:(e,{CancelBtn:t})=>T(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[E(`div`,{className:`text-sm text-base-content/60`,children:`No mask layer is rendered in this example.`}),E(`div`,{className:`flex justify-end`,children:E(t,{children:`关闭面板`})})]}),onClose:()=>{O.value=!1},children:T(`div`,{className:`rounded-box bg-base-200 p-4 text-sm text-base-content/80`,children:[E(`div`,{className:`font-medium`,children:`Layer summary`}),T(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[E(`li`,{children:"`rootStyle` 作用在最外层固定定位节点"}),E(`li`,{children:"`wrapClassName` 作用在可滚动的交互 wrapper"}),E(`li`,{children:"`classNames.container` 和 `classNames.box` 分别控制容器与面板"})]})]})})]})}),code:`const masklessOpen = ref(false)

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
</Modal>`});b(()=>_(e,g,te))});let ne=s(`rue:component:anchor`);t(g,ne),i(()=>{let e=v(B,{title:`Modal with custom actions`,summary:"旧版 `actions` 仍然可用，适合把自定义按钮组插到 footer 里，同时保留默认关闭按钮。",tab:a,preview:()=>E(`div`,{className:`card bg-base-100 shadow-sm`,children:T(`div`,{className:`card-body gap-4`,children:[E(D,{color:`secondary`,className:`w-fit`,"data-testid":`modal-actions-open`,onClick:()=>{k.value=!0},children:`Review actions`}),E(`p`,{className:`text-sm text-base-content/70`,children:"可以继续使用 `actions` 兼容旧 demo，同时逐步迁移到新的 `footer` API。"}),E(z,{open:k.value,title:`Delete this draft?`,actions:T(`div`,{className:`join`,"data-testid":`modal-actions-group`,children:[E(`button`,{className:`btn join-item btn-ghost`,onClick:()=>{k.value=!1},children:`Cancel`}),E(`button`,{className:`btn join-item btn-error`,"data-testid":`modal-actions-confirm`,onClick:()=>{k.value=!1},children:`Delete`})]}),onClose:()=>{k.value=!1},children:E(`p`,{className:`py-2`,children:`This action removes the draft from your local workspace.`})})]})}),code:`const actionsOpen = ref(false)

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
</Modal>`});b(()=>_(e,g,ne))});let re=s(`rue:component:anchor`);t(g,re),i(()=>{let e=v(B,{title:`Wide modal box`,summary:"原有宽弹层示例保留，同时也可以配合 `width` 使用更偏语义化的尺寸写法。",tab:l,preview:()=>E(`div`,{className:`card bg-base-100 shadow-sm`,children:T(`div`,{className:`card-body gap-4`,children:[E(D,{color:`accent`,className:`w-fit`,"data-testid":`modal-wide-open`,onClick:()=>{A.value=!0},children:`Open wide modal`}),E(`p`,{className:`text-sm text-base-content/70`,children:"通过 `className` 直接扩展 modal-box 宽度和排版，旧写法完全保留。"}),E(z,{open:A.value,title:`Release summary`,className:`w-11/12 max-w-5xl`,onClose:()=>{A.value=!1},children:T(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[T(`div`,{className:`rounded-box bg-base-200 p-4`,children:[E(`h3`,{className:`mt-0 text-base font-semibold`,children:`Highlights`}),E(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Routing docs refreshed, design pages expanded, and runtime tests tightened.`})]}),T(`div`,{className:`rounded-box bg-base-200 p-4`,children:[E(`h3`,{className:`mt-0 text-base font-semibold`,children:`Notes`}),E(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Use modal width utilities on className when the default box is too narrow.`})]})]})})]})}),code:`const wideOpen = ref(false)

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
</Modal>`});b(()=>_(e,g,re))});let L=s(`rue:component:anchor`);t(g,L),i(()=>{let e=v(B,{title:`Default footer with async confirm`,summary:"更贴近常见业务弹窗的用法：给 `onOk/onCancel` 和 `confirmLoading` 即可得到默认确认 footer。",tab:p,preview:()=>E(`div`,{className:`card bg-base-100 shadow-sm`,children:T(`div`,{className:`card-body gap-4`,children:[E(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-async-open`,onClick:()=>{N.value=`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`,j.value=!0},children:`Launch publish flow`}),E(`p`,{className:`text-sm text-base-content/70`,children:"默认 footer 会自动生成取消/确认按钮，并把 `confirmLoading` 映射到确认按钮。"}),E(z,{open:j.value,title:`Publish this release?`,okText:`开始发布`,cancelText:`稍后处理`,confirmLoading:M.value,onCancel:()=>{M.value=!1,j.value=!1},onOk:()=>{N.value=`正在校验变更、生成产物并同步部署状态...`,M.value=!0,setTimeout(()=>{M.value=!1,j.value=!1,N.value=`发布完成，当前版本已经推送到 staging。`},1200)},children:T(`div`,{className:`space-y-3 py-2`,children:[E(`p`,{className:`m-0 text-sm text-base-content/80`,children:N.value}),T(`div`,{className:`rounded-box bg-base-200 p-4 text-sm`,children:[E(`div`,{className:`font-medium`,children:`Release checklist`}),T(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[E(`li`,{children:`Tag 已创建`}),E(`li`,{children:`Changelog 已同步`}),E(`li`,{children:`Preview 环境检查通过`})]})]})]})})]})}),code:`const asyncOpen = ref(false)
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
</Modal>`});b(()=>_(e,g,L))});let R=s(`rue:component:anchor`);t(g,R),i(()=>{let e=v(B,{title:`Footer render and centered layout`,summary:"通过 `centered`、`width`、语义化 className 和 `footer(originNode => ...)`，可以在不改动视觉体系的前提下重组结构。",tab:S,preview:()=>E(`div`,{className:`card bg-base-100 shadow-sm`,children:T(`div`,{className:`card-body gap-4`,children:[E(D,{color:`info`,className:`w-fit`,onClick:()=>{P.value=!0},children:`Open settings modal`}),E(`p`,{className:`text-sm text-base-content/70`,children:"`footer` 支持函数式包裹默认 footer，适合在两端插入说明信息或额外操作。"}),T(z,{open:P.value,centered:!0,width:720,title:`Workspace settings`,headerClassName:`border-b border-base-300 pb-3`,bodyClassName:`pt-1`,footer:e=>T(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[E(`div`,{className:`text-sm text-base-content/60`,children:`Changes are scoped to the current workspace.`}),E(`div`,{className:`flex flex-wrap justify-end gap-2`,children:e})]}),okText:`保存设置`,cancelText:`关闭`,onCancel:()=>{P.value=!1},onOk:()=>{F.value+=1,P.value=!1},children:[T(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[T(`label`,{className:`form-control gap-2`,children:[E(`span`,{className:`label-text font-medium`,children:`Environment`}),T(`select`,{className:`select select-bordered`,children:[E(`option`,{children:`Staging`}),E(`option`,{children:`Production`})]})]}),T(`label`,{className:`form-control gap-2`,children:[E(`span`,{className:`label-text font-medium`,children:`Deploy channel`}),T(`select`,{className:`select select-bordered`,children:[E(`option`,{children:`Web`}),E(`option`,{children:`Desktop`})]})]})]}),T(`p`,{className:`mb-0 text-sm text-base-content/70`,children:[`Saved count: `,F.value]})]})]})}),code:`<Modal
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
</Modal>`});b(()=>_(e,g,R))});let V=s(`rue:component:anchor`);t(g,V),i(()=>{let e=v(B,{title:`Keep mounted content`,summary:"需要在关闭后保留 DOM 状态时，可以开启 `forceRender` + `destroyOnHidden={false}`。",tab:C,preview:()=>E(`div`,{className:`card bg-base-100 shadow-sm`,children:T(`div`,{className:`card-body gap-4`,children:[E(D,{color:`success`,className:`w-fit`,onClick:()=>{I.value=!0},children:`Open draft modal`}),E(`p`,{className:`text-sm text-base-content/70`,children:`在文本框里输入内容，关闭后再次打开，未提交的草稿仍会保留。`}),E(z,{open:I.value,title:`Draft note`,forceRender:!0,destroyOnHidden:!1,maskClosable:!1,keyboard:!1,footer:null,onClose:()=>{I.value=!1},children:T(`div`,{className:`space-y-3 py-2`,children:[E(`textarea`,{className:`textarea textarea-bordered min-h-32 w-full`,defaultValue:`This textarea keeps its DOM state after the modal is hidden.`}),E(`div`,{className:`alert alert-info text-sm`,children:"这里禁用了遮罩点击和 ESC 关闭，只保留右上角关闭按钮，方便演示 `maskClosable` 与 `keyboard`。"})]})})]})}),code:`<Modal
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
</Modal>`});b(()=>_(e,g,V))});let oe=d(`h2`,g);t(g,oe),f(oe,`id`,`modal-api`),t(oe,o(`API`));let se=d(`p`,g);t(g,se),t(se,o("以下列出当前设计页覆盖到的主要 `Modal` 能力。"));let ce=s(`rue:component:anchor`);t(g,ce),i(()=>{let e=v(ie,{rows:ae});b(()=>_(e,g,ce))});let H=d(`h2`,g);t(g,H),t(H,o(`FAQ`));let U=d(`p`,g);t(g,U);let W=d(`strong`,U);t(U,W),t(W,o("什么时候用 `actions`，什么时候用 `footer`？")),t(U,o("如果你在迁移旧代码，直接继续用 `actions` 即可；新代码优先用 `footer`，它可以完全接管 footer，也可以用函数包装默认 footer。"));let G=d(`p`,g);t(g,G);let K=d(`strong`,G);t(G,K),t(K,o("`className`、`bodyClassName` 和 `classNames` 怎么选？")),t(G,o("`className` 仍直接追加到"));let q=d(`code`,G);t(G,q),t(q,o(`modal-box`)),t(G,o(`；只想改某个区域时优先用`));let J=d(`code`,G);t(G,J),t(J,o(`bodyClassName/headerClassName/footerClassName`)),t(G,o(`；需要更细粒度统一配置时再用`));let Y=c(G);t(G,Y),m(Y,` `);let X=d(`code`,G);t(G,X),t(X,o(`classNames`)),t(G,o(`。`));let Z=d(`p`,g);t(g,Z);let le=d(`strong`,Z);t(Z,le),t(le,o("为什么保留 `destroyOnHidden` 默认关闭即卸载？")),t(Z,o(`这是为了兼容 Rue 当前组件行为；当你确实需要保留 DOM 状态时，再显式开启`));let ue=d(`code`,Z);t(Z,ue),t(ue,o(`forceRender`)),t(Z,o(`与`));let de=d(`code`,Z);return t(Z,de),t(de,o(`destroyOnHidden={false}`)),t(Z,o(`。`)),h})}),y,x),y})};export{V as default};