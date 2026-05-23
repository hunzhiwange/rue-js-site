import{$ as e,A as t,Et as n,G as r,H as i,J as a,K as o,Ot as s,T as c,W as l,_t as u,d,k as f,kt as p,l as m,q as h,st as g,t as _,tt as v,xt as y,y as b}from"./vapor-runtime-EUvELKQT.js";import{a as x,n as S}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as C}from"./Teleport-BlmJ3ph6.js";import{n as w,t as T}from"./src-BI4ToZNE.js";import{n as E}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as D}from"./Code-BdVklNCb.js";import{t as O}from"./button-XeSvxSnH.js";import{t as k}from"./tabs-Brdd3EMz.js";var A=0,j=``,M=(...e)=>e.filter(Boolean).join(` `),N=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),P=e=>e.startsWith(`--`)?e:e.includes(`-`)?N(e):e,F=e=>{if(!e)return;let t={};return typeof e==`string`?(e.split(`;`).map(e=>e.trim()).filter(Boolean).forEach(e=>{let n=e.indexOf(`:`);if(n===-1)return;let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();!r||!i||(t[P(r)]=i)}),Object.keys(t).length>0?t:void 0):(Object.entries(e).forEach(([e,n])=>{n!=null&&(t[P(e)]=n)}),Object.keys(t).length>0?t:void 0)},I=(...e)=>{let t={};return e.forEach(e=>{let n=F(e);n&&Object.assign(t,n)}),Object.keys(t).length>0?t:void 0},L=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e},ee=()=>w(`div`,{className:`space-y-3`,"data-rue-modal-loading":`true`,children:[T(`div`,{className:`skeleton h-4 w-2/5`}),T(`div`,{className:`skeleton h-4 w-full`}),T(`div`,{className:`skeleton h-4 w-5/6`}),T(`div`,{className:`skeleton h-24 w-full`})]}),te=()=>T(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`size-4`,"aria-hidden":`true`,children:T(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 6l12 12M18 6 6 18`})}),R=()=>{typeof document>`u`||(A===0&&(j=document.documentElement.style.overflow,document.documentElement.style.overflow=`hidden`),A+=1)},z=()=>{typeof document>`u`||A===0||(--A,A===0&&(document.documentElement.style.overflow=j))},B=({open:e,defaultOpen:n=!1,title:r,children:i,actions:a,footer:o,className:l,rootClassName:d,rootStyle:p,wrapClassName:m,wrapProps:h,bodyClassName:g,headerClassName:_,footerClassName:v,maskClassName:y,classNames:x,styles:S,width:E,style:D,bodyStyle:k,maskStyle:A,centered:j=!1,closable:N=!0,closeIcon:P,keyboard:F=!0,mask:B=!0,maskClosable:V=!0,forceRender:ne=!1,destroyOnClose:re,destroyOnHidden:ie=!0,confirmLoading:ae=!1,okText:H=`确定`,cancelText:oe,okType:se=`primary`,okButtonProps:U,cancelButtonProps:W,zIndex:G,getContainer:K,loading:q=!1,onOk:J,onCancel:Y,onClose:X,onOpenChange:ce,afterClose:Z,afterOpenChange:le,modalRender:ue,...de})=>{let fe=u(n),pe=u(n),Q=u(!1),me=typeof e==`boolean`,$=typeof e==`boolean`?e:fe.value,he=u($),ge=u(F),_e=e=>{me||(fe.value=e),ce&&ce(e)},ve=e=>{e&&typeof e.preventDefault==`function`&&e.preventDefault(),Y&&e&&Y(e),X&&X(e),_e(!1)},ye=e=>{ae||J&&J(e)};if(f(()=>{if($&&(R(),Q.value=!0),typeof window>`u`)return;let e=e=>{!he.value||!ge.value||e.key!==`Escape`||ve(e)};window.addEventListener(`keydown`,e),t(()=>{window.removeEventListener(`keydown`,e)})}),s(()=>$,e=>{he.value=e,e?(pe.value=!0,Q.value||=(R(),!0)):Q.value&&(z(),Q.value=!1,Z&&Z()),le&&le(e)}),s(()=>F,e=>{ge.value=e},{immediate:!0}),s(()=>n,e=>{me||(fe.value=!!e)},{immediate:!0}),t(()=>{Q.value&&=(z(),!1)}),!($||ne||!(ie??re??!0)&&pe.value))return null;let{className:be,style:xe,onClick:Se,...Ce}=h??{},we=oe??(J||U?`取消`:`关闭`),Te=o===void 0&&a!=null,Ee=!Te&&(J!=null||U!=null),De=Te||Y!=null||X!=null||Ee,Oe=e=>{let{children:t,onClick:n,...r}=e??{};return c(O,{...W,...r,onClick:e=>{n&&n(e),!e.defaultPrevented&&ve(e)},disabled:r.disabled??W?.disabled},t??W?.children??we)},ke=e=>{let{children:t,onClick:n,...r}=e??{};return c(O,{...U,...r,type:r.type??U?.type??se,loading:r.loading??U?.loading??ae,onClick:e=>{n&&n(e),!e.defaultPrevented&&ye(e)}},t??U?.children??H)},Ae=e=>Oe(e),je=e=>ke(e),Me=w(b,{children:[Te?a:null,De?Oe():null,Ee?ke():null]}),Ne=q||o===null||o===!1?null:typeof o==`function`?o(Me,{OkBtn:je,CancelBtn:Ae}):o??Me,Pe=e=>{Se&&Se(e),!e.defaultPrevented&&(!B||!V||e.target!==e.currentTarget||ve(e))},Fe=w(`div`,{...de,"aria-hidden":$?void 0:`true`,className:M(`modal ${$?`modal-open`:``} bg-transparent`.trim(),M(d,M(x?.root,$?void 0:`pointer-events-none`))),style:I(S?.root,p,G==null?void 0:{zIndex:G}),"data-rue-modal-root":`true`,children:[B?T(`div`,{"aria-hidden":`true`,className:M(`absolute inset-0 bg-base-content/40`,M(y,x?.mask)),style:I(S?.mask,A),"data-rue-modal-mask":`true`}):null,T(`div`,{...Ce,className:M(M(`absolute inset-0 overflow-y-auto px-4 py-6 sm:px-6 ${j?`flex items-center justify-center`:`flex items-start justify-center sm:items-center`}`,m),M(be,x?.wrapper)),style:I(S?.wrapper,xe),onClick:Pe,"data-rue-modal-wrapper":`true`,children:T(`div`,{className:M(`relative flex w-full justify-center`,x?.container),style:I(S?.container),"data-rue-modal-container":`true`,children:w(`div`,{role:`dialog`,"aria-modal":$?`true`:`false`,"aria-hidden":$?void 0:`true`,className:M(M(`modal-box relative`,l),M(x?.box,$?void 0:`pointer-events-none`)),style:I(S?.box,D,E==null?void 0:{width:L(E)}),onClick:e=>{e.stopPropagation()},"data-rue-modal-box":`true`,children:[N?T(`button`,{type:`button`,"aria-label":`关闭`,className:M(`btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10`,x?.close),style:I(S?.close),onClick:e=>ve(e),children:P??T(te,{})}):null,r?T(`div`,{className:M(`mb-4 pr-10`,M(_,x?.header)),style:I(S?.header),children:T(`div`,{className:M(`text-lg font-semibold leading-6`,x?.title),style:I(S?.title),children:r})}):null,T(`div`,{className:M(`space-y-4`,M(g,x?.body)),style:I(S?.body,k),"aria-busy":q?`true`:void 0,children:q?ee():i}),Ne?T(`div`,{className:M(`modal-action mt-6 flex flex-wrap items-center justify-end gap-2`,M(v,x?.footer)),style:I(S?.footer),children:Ne}):null]})})})]}),Ie=ue?ue(Fe):Fe,Le=typeof K==`function`?K():K;return Le===!1||Le==null?Ie:T(C,{to:Le,children:Ie})},V=e=>d(t=>{let n=o(`div`,t);v(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=o(`div`,n);i(n,a),v(a,`flex flex-wrap items-start justify-between gap-3`);let s=o(`div`,a);i(a,s);let c=o(`h2`,s);i(s,c),v(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(c,h(`# `));let u=l(`rue:slot:anchor`);i(c,u),p(()=>{let t=e.title;y(()=>m(t,c,u))});let f=o(`p`,s);i(s,f),v(f,`m-0 text-sm opacity-70`);let g=l(`rue:slot:anchor`);i(f,g),p(()=>{let t=e.summary;y(()=>m(t,f,g))});let b=l(`rue:component:anchor`);i(n,b),p(()=>{let t=_(k,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});y(()=>m(t,n,b))});let x=l(`rue:slot:anchor`);return i(n,x),p(()=>{let t=e.tab.value===`preview`?e.preview():d(()=>{let t=r(),n=l(`rue:component:anchor`);return i(t,n),p(()=>{let r=_(D,{className:`mt-2`,lang:`tsx`,code:e.code});y(()=>m(r,t,n))}),t});y(()=>m(t,n,x))}),n}),ne=t=>d(n=>{let a=o(`div`,n);v(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=o(`table`,a);i(a,s),v(s,`table table-zebra`);let c=o(`thead`,s);i(s,c);let u=o(`tr`,c);i(c,u);let f=o(`th`,u);i(u,f),i(f,h(`属性`));let g=o(`th`,u);i(u,g),i(g,h(`说明`));let _=o(`th`,u);i(u,_),i(_,h(`类型`));let b=o(`th`,u);i(u,b),i(b,h(`默认值`));let x=o(`tbody`,s);i(s,x);let C=l(`rue:list:start`),w=l(`rue:list:end`);i(x,C),i(x,w);let T=new Map;return p(()=>{T=S({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,a,s,c)=>{m(d(()=>{let n=r(),a=o(`tr`,n);i(n,a),p(()=>{e(a,`key`,String(t.prop))});let s=o(`td`,a);i(a,s);let c=o(`code`,s);i(s,c);let u=l(`rue:slot:anchor`);i(c,u),p(()=>{let e=t.prop;y(()=>m(e,c,u))});let d=o(`td`,a);i(a,d);let f=l(`rue:slot:anchor`);i(d,f),p(()=>{let e=t.description;y(()=>m(e,d,f))});let h=o(`td`,a);i(a,h);let g=o(`code`,h);i(h,g);let _=l(`rue:slot:anchor`);i(g,_),p(()=>{let e=t.type;y(()=>m(e,g,_))});let v=o(`td`,a);i(a,v);let b=o(`code`,v);i(v,b);let x=l(`rue:slot:anchor`);return i(b,x),p(()=>{let e=t.defaultValue;y(()=>m(e,b,x))}),n}),n,a)}})}),a}),re=[{prop:`open`,description:`受控显隐。`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpen`,description:`非受控初始打开状态。`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容。`,type:`any`,defaultValue:`-`},{prop:`footer`,description:"自定义 footer；传 `null` 可隐藏；也支持函数包裹默认 footer。",type:`any | (originNode) => any`,defaultValue:`-`},{prop:`actions`,description:`旧版动作区写法，会保留原有“自定义动作 + 默认关闭按钮”行为。`,type:`any`,defaultValue:`-`},{prop:`onOk / onCancel / onClose`,description:`确认、取消与关闭回调。`,type:`function`,defaultValue:`-`},{prop:`confirmLoading`,description:`让默认确认按钮进入 loading 态。`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`主体切换到骨架占位态，并临时隐藏 footer。`,type:`boolean`,defaultValue:`false`},{prop:`okText / cancelText / okType`,description:`默认 footer 的按钮文案与确认按钮类型。`,type:`any / any / ButtonType`,defaultValue:"`确定` / 自动 / `primary`"},{prop:`width / className`,description:"设置 modal-box 宽度；`className` 仍直接追加到 box。",type:`string | number / string`,defaultValue:`-`},{prop:`rootStyle / wrapClassName / wrapProps / maskClassName / maskStyle`,description:"分别定制根层、wrapper 和遮罩层；`mask={false}` 时不会渲染遮罩节点。",type:`style / string / object / string / style`,defaultValue:`-`},{prop:`centered`,description:`垂直居中。`,type:`boolean`,defaultValue:`false`},{prop:`mask / maskClosable / keyboard`,description:`控制遮罩显示、点击遮罩关闭与 ESC 关闭。`,type:`boolean`,defaultValue:`true / true / true`},{prop:`closable / closeIcon`,description:`右上角关闭按钮与自定义关闭图标。`,type:`boolean / any`,defaultValue:`true / 默认图标`},{prop:`forceRender / destroyOnHidden`,description:`控制关闭后是否保留内容挂载。`,type:`boolean / boolean`,defaultValue:`false / true`},{prop:`destroyOnClose / getContainer`,description:`兼容旧别名，并支持通过 Teleport 把弹层渲染到指定容器。`,type:`boolean / string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`- / false`},{prop:`bodyClassName / headerClassName / footerClassName`,description:`分别定制头部、主体、底部区域类名。`,type:`string`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义分区覆盖 root/mask/wrapper/container/box/header/title/body/footer/close。`,type:`object`,defaultValue:`-`},{prop:`modalRender`,description:`接管最终弹层节点的二次包裹。`,type:`(node) => any`,defaultValue:`-`},{prop:`afterOpenChange / afterClose`,description:`显隐变化后的钩子。`,type:`function`,defaultValue:`-`}],ie=()=>{let{tabBasic:t,tabMaskless:s,tabActions:c,tabWide:f,tabAsync:b,tabFooterRender:S,tabKeepMounted:C,basicOpen:D,masklessOpen:k,actionsOpen:A,wideOpen:j,asyncOpen:M,asyncLoading:N,asyncStatus:P,renderOpen:F,guardCount:I,keepMountedOpen:L}=x(`useSetup:0:0`,()=>n(()=>({tabBasic:x(`ref:1:0`,()=>u(`preview`)),tabMaskless:x(`ref:1:1`,()=>u(`preview`)),tabActions:x(`ref:1:2`,()=>u(`preview`)),tabWide:x(`ref:1:3`,()=>u(`preview`)),tabAsync:x(`ref:1:4`,()=>u(`preview`)),tabFooterRender:x(`ref:1:5`,()=>u(`preview`)),tabKeepMounted:x(`ref:1:6`,()=>u(`preview`)),basicOpen:x(`ref:1:7`,()=>u(!1)),masklessOpen:x(`ref:1:8`,()=>u(!1)),actionsOpen:x(`ref:1:9`,()=>u(!1)),wideOpen:x(`ref:1:10`,()=>u(!1)),asyncOpen:x(`ref:1:11`,()=>u(!1)),asyncLoading:x(`ref:1:12`,()=>u(!1)),asyncStatus:x(`ref:1:13`,()=>u(`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`)),renderOpen:x(`ref:1:14`,()=>u(!1)),guardCount:x(`ref:1:15`,()=>u(0)),keepMountedOpen:x(`ref:1:16`,()=>u(!1))})));return d(n=>{let u=r(),x=l(`rue:component:anchor`);return i(u,x),m(_(E,{children:d(()=>{let n=r(),u=o(`div`,n);i(n,u),v(u,`max-w-none prose prose-sm md:prose-base`);let d=o(`h1`,u);i(u,d),i(d,h(`Modal 模态框`));let x=o(`p`,u);i(u,x),v(x,`text-sm mt-3 mb-3`),i(x,h(`Modal 现在保持 Rue 自己的视觉风格，同时补齐了更完整的显隐控制、默认 footer、异步确认、遮罩交互、挂载策略与 root/mask/wrapper 级别的语义化定制能力。`));let E=l(`rue:component:anchor`);i(u,E),p(()=>{let e=_(V,{title:`Controlled modal`,summary:"保留原有受控用法：通过 `open` 和 `onClose` 管理显隐，默认 footer 会自动提供关闭按钮。",tab:t,preview:()=>T(`div`,{className:`card bg-base-100 shadow-sm`,children:w(`div`,{className:`card-body gap-4`,children:[T(O,{color:`primary`,className:`w-fit`,"data-testid":`modal-basic-open`,onClick:()=>{D.value=!0},children:`Open modal`}),T(`p`,{className:`text-sm text-base-content/70`,children:`点击按钮后会显示受控模态框，并通过默认关闭按钮或右上角关闭图标收起。`}),T(B,{open:D.value,title:`Basic modal`,onClose:()=>{D.value=!1},children:T(`p`,{className:`py-2`,children:`Press the close button below to dismiss this modal.`})})]})}),code:`const basicOpen = ref(false)

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
</Modal>`});y(()=>m(e,u,E))});let ee=l(`rue:component:anchor`);i(u,ee),p(()=>{let e=_(V,{title:`Maskless modal and layer hooks`,summary:"`mask={false}` 会真正移除遮罩层；需要精细控制时可继续配合 `rootStyle`、`wrapClassName` 与语义化 `classNames/styles`。",tab:s,preview:()=>T(`div`,{className:`card bg-base-100 shadow-sm`,children:w(`div`,{className:`card-body gap-4`,children:[T(O,{color:`warning`,className:`w-fit`,"data-testid":`modal-maskless-open`,onClick:()=>{k.value=!0},children:`Open without mask`}),T(`p`,{className:`text-sm text-base-content/70`,children:`当前示例关闭了遮罩视觉，因此背景保持可见，点击外层空白区域也不会触发关闭。`}),T(B,{open:k.value,mask:!1,width:680,rootStyle:{backdropFilter:`blur(2px)`},wrapClassName:`items-end sm:items-center`,classNames:{container:`max-w-3xl`,box:`border border-base-300 shadow-2xl`,body:`space-y-3`},title:`Inspector panel`,footer:(e,{CancelBtn:t})=>w(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[T(`div`,{className:`text-sm text-base-content/60`,children:`No mask layer is rendered in this example.`}),T(`div`,{className:`flex justify-end`,children:T(t,{children:`关闭面板`})})]}),onClose:()=>{k.value=!1},children:w(`div`,{className:`rounded-box bg-base-200 p-4 text-sm text-base-content/80`,children:[T(`div`,{className:`font-medium`,children:`Layer summary`}),w(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[T(`li`,{children:"`rootStyle` 作用在最外层固定定位节点"}),T(`li`,{children:"`wrapClassName` 作用在可滚动的交互 wrapper"}),T(`li`,{children:"`classNames.container` 和 `classNames.box` 分别控制容器与面板"})]})]})})]})}),code:`const masklessOpen = ref(false)

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
</Modal>`});y(()=>m(e,u,ee))});let te=l(`rue:component:anchor`);i(u,te),p(()=>{let e=_(V,{title:`Modal with custom actions`,summary:"旧版 `actions` 仍然可用，适合把自定义按钮组插到 footer 里，同时保留默认关闭按钮。",tab:c,preview:()=>T(`div`,{className:`card bg-base-100 shadow-sm`,children:w(`div`,{className:`card-body gap-4`,children:[T(O,{color:`secondary`,className:`w-fit`,"data-testid":`modal-actions-open`,onClick:()=>{A.value=!0},children:`Review actions`}),T(`p`,{className:`text-sm text-base-content/70`,children:"可以继续使用 `actions` 兼容旧 demo，同时逐步迁移到新的 `footer` API。"}),T(B,{open:A.value,title:`Delete this draft?`,actions:w(`div`,{className:`join`,"data-testid":`modal-actions-group`,children:[T(`button`,{className:`btn join-item btn-ghost`,onClick:()=>{A.value=!1},children:`Cancel`}),T(`button`,{className:`btn join-item btn-error`,"data-testid":`modal-actions-confirm`,onClick:()=>{A.value=!1},children:`Delete`})]}),onClose:()=>{A.value=!1},children:T(`p`,{className:`py-2`,children:`This action removes the draft from your local workspace.`})})]})}),code:`const actionsOpen = ref(false)

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
</Modal>`});y(()=>m(e,u,te))});let R=l(`rue:component:anchor`);i(u,R),p(()=>{let e=_(V,{title:`Wide modal box`,summary:"原有宽弹层示例保留，同时也可以配合 `width` 使用更偏语义化的尺寸写法。",tab:f,preview:()=>T(`div`,{className:`card bg-base-100 shadow-sm`,children:w(`div`,{className:`card-body gap-4`,children:[T(O,{color:`accent`,className:`w-fit`,"data-testid":`modal-wide-open`,onClick:()=>{j.value=!0},children:`Open wide modal`}),T(`p`,{className:`text-sm text-base-content/70`,children:"通过 `className` 直接扩展 modal-box 宽度和排版，旧写法完全保留。"}),T(B,{open:j.value,title:`Release summary`,className:`w-11/12 max-w-5xl`,onClose:()=>{j.value=!1},children:w(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[w(`div`,{className:`rounded-box bg-base-200 p-4`,children:[T(`h3`,{className:`mt-0 text-base font-semibold`,children:`Highlights`}),T(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Routing docs refreshed, design pages expanded, and runtime tests tightened.`})]}),w(`div`,{className:`rounded-box bg-base-200 p-4`,children:[T(`h3`,{className:`mt-0 text-base font-semibold`,children:`Notes`}),T(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Use modal width utilities on className when the default box is too narrow.`})]})]})})]})}),code:`const wideOpen = ref(false)

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
</Modal>`});y(()=>m(e,u,R))});let z=l(`rue:component:anchor`);i(u,z),p(()=>{let e=_(V,{title:`Default footer with async confirm`,summary:"更贴近常见业务弹窗的用法：给 `onOk/onCancel` 和 `confirmLoading` 即可得到默认确认 footer。",tab:b,preview:()=>T(`div`,{className:`card bg-base-100 shadow-sm`,children:w(`div`,{className:`card-body gap-4`,children:[T(O,{color:`primary`,className:`w-fit`,"data-testid":`modal-async-open`,onClick:()=>{P.value=`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`,M.value=!0},children:`Launch publish flow`}),T(`p`,{className:`text-sm text-base-content/70`,children:"默认 footer 会自动生成取消/确认按钮，并把 `confirmLoading` 映射到确认按钮。"}),T(B,{open:M.value,title:`Publish this release?`,okText:`开始发布`,cancelText:`稍后处理`,confirmLoading:N.value,onCancel:()=>{N.value=!1,M.value=!1},onOk:()=>{P.value=`正在校验变更、生成产物并同步部署状态...`,N.value=!0,setTimeout(()=>{N.value=!1,M.value=!1,P.value=`发布完成，当前版本已经推送到 staging。`},1200)},children:w(`div`,{className:`space-y-3 py-2`,children:[T(`p`,{className:`m-0 text-sm text-base-content/80`,children:P.value}),w(`div`,{className:`rounded-box bg-base-200 p-4 text-sm`,children:[T(`div`,{className:`font-medium`,children:`Release checklist`}),w(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[T(`li`,{children:`Tag 已创建`}),T(`li`,{children:`Changelog 已同步`}),T(`li`,{children:`Preview 环境检查通过`})]})]})]})})]})}),code:`const asyncOpen = ref(false)
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
</Modal>`});y(()=>m(e,u,z))});let ie=l(`rue:component:anchor`);i(u,ie),p(()=>{let e=_(V,{title:`Footer render and centered layout`,summary:"通过 `centered`、`width`、语义化 className 和 `footer(originNode => ...)`，可以在不改动视觉体系的前提下重组结构。",tab:S,preview:()=>T(`div`,{className:`card bg-base-100 shadow-sm`,children:w(`div`,{className:`card-body gap-4`,children:[T(O,{color:`info`,className:`w-fit`,onClick:()=>{F.value=!0},children:`Open settings modal`}),T(`p`,{className:`text-sm text-base-content/70`,children:"`footer` 支持函数式包裹默认 footer，适合在两端插入说明信息或额外操作。"}),w(B,{open:F.value,centered:!0,width:720,title:`Workspace settings`,headerClassName:`border-b border-base-300 pb-3`,bodyClassName:`pt-1`,footer:e=>w(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[T(`div`,{className:`text-sm text-base-content/60`,children:`Changes are scoped to the current workspace.`}),T(`div`,{className:`flex flex-wrap justify-end gap-2`,children:e})]}),okText:`保存设置`,cancelText:`关闭`,onCancel:()=>{F.value=!1},onOk:()=>{I.value+=1,F.value=!1},children:[w(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[w(`label`,{className:`form-control gap-2`,children:[T(`span`,{className:`label-text font-medium`,children:`Environment`}),w(`select`,{className:`select select-bordered`,children:[T(`option`,{children:`Staging`}),T(`option`,{children:`Production`})]})]}),w(`label`,{className:`form-control gap-2`,children:[T(`span`,{className:`label-text font-medium`,children:`Deploy channel`}),w(`select`,{className:`select select-bordered`,children:[T(`option`,{children:`Web`}),T(`option`,{children:`Desktop`})]})]})]}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:[`Saved count: `,I.value]})]})]})}),code:`<Modal
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
</Modal>`});y(()=>m(e,u,ie))});let ae=l(`rue:component:anchor`);i(u,ae),p(()=>{let e=_(V,{title:`Keep mounted content`,summary:"需要在关闭后保留 DOM 状态时，可以开启 `forceRender` + `destroyOnHidden={false}`。",tab:C,preview:()=>T(`div`,{className:`card bg-base-100 shadow-sm`,children:w(`div`,{className:`card-body gap-4`,children:[T(O,{color:`success`,className:`w-fit`,onClick:()=>{L.value=!0},children:`Open draft modal`}),T(`p`,{className:`text-sm text-base-content/70`,children:`在文本框里输入内容，关闭后再次打开，未提交的草稿仍会保留。`}),T(B,{open:L.value,title:`Draft note`,forceRender:!0,destroyOnHidden:!1,maskClosable:!1,keyboard:!1,footer:null,onClose:()=>{L.value=!1},children:w(`div`,{className:`space-y-3 py-2`,children:[T(`textarea`,{className:`textarea textarea-bordered min-h-32 w-full`,defaultValue:`This textarea keeps its DOM state after the modal is hidden.`}),T(`div`,{className:`alert alert-info text-sm`,children:"这里禁用了遮罩点击和 ESC 关闭，只保留右上角关闭按钮，方便演示 `maskClosable` 与 `keyboard`。"})]})})]})}),code:`<Modal
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
</Modal>`});y(()=>m(e,u,ae))});let H=o(`h2`,u);i(u,H),e(H,`id`,`modal-api`),i(H,h(`API`));let oe=o(`p`,u);i(u,oe),i(oe,h("以下列出当前设计页覆盖到的主要 `Modal` 能力。"));let se=l(`rue:component:anchor`);i(u,se),p(()=>{let e=_(ne,{rows:re});y(()=>m(e,u,se))});let U=o(`h2`,u);i(u,U),i(U,h(`FAQ`));let W=o(`p`,u);i(u,W);let G=o(`strong`,W);i(W,G),i(G,h("什么时候用 `actions`，什么时候用 `footer`？")),i(W,h("如果你在迁移旧代码，直接继续用 `actions` 即可；新代码优先用 `footer`，它可以完全接管 footer，也可以用函数包装默认 footer。"));let K=o(`p`,u);i(u,K);let q=o(`strong`,K);i(K,q),i(q,h("`className`、`bodyClassName` 和 `classNames` 怎么选？")),i(K,h("`className` 仍直接追加到"));let J=o(`code`,K);i(K,J),i(J,h(`modal-box`)),i(K,h(`；只想改某个区域时优先用`));let Y=o(`code`,K);i(K,Y),i(Y,h(`bodyClassName/headerClassName/footerClassName`)),i(K,h(`；需要更细粒度统一配置时再用`));let X=a(K);i(K,X),g(X,` `);let ce=o(`code`,K);i(K,ce),i(ce,h(`classNames`)),i(K,h(`。`));let Z=o(`p`,u);i(u,Z);let le=o(`strong`,Z);i(Z,le),i(le,h("为什么保留 `destroyOnHidden` 默认关闭即卸载？")),i(Z,h(`这是为了兼容 Rue 当前组件行为；当你确实需要保留 DOM 状态时，再显式开启`));let ue=o(`code`,Z);i(Z,ue),i(ue,h(`forceRender`)),i(Z,h(`与`));let de=o(`code`,Z);return i(Z,de),i(de,h(`destroyOnHidden={false}`)),i(Z,h(`。`)),n})}),u,x),u})};export{ie as default};