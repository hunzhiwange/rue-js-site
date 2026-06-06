import{$ as e,Jt as t,Kt as n,Lt as r,O as i,Q as a,S as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,et as f,j as p,l as m,m as h,mt as g,ot as _,s as v,t as y,tt as b}from"./vapor-runtime-DHPuOjqh.js";import{a as x,n as S}from"./vapor-helpers-vapor-CJFAWine.js";import{a as C,i as w}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as T}from"./Teleport-CRIVj57P.js";import{t as E}from"./Code-Ds9lKLk6.js";import{t as D}from"./button-Cy4xZBmC.js";import{t as O}from"./tabs-DSy0eY-V.js";import{n as ee}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as k}from"./preview-test-gate-CxeqnU1g.js";var A=0,j=``,M=(...e)=>e.filter(Boolean).join(` `),N=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),P=e=>e.startsWith(`--`)?e:e.includes(`-`)?N(e):e,F=e=>{if(!e)return;let t={};return typeof e==`string`?(e.split(`;`).map(e=>e.trim()).filter(Boolean).forEach(e=>{let n=e.indexOf(`:`);if(n===-1)return;let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();!r||!i||(t[P(r)]=i)}),Object.keys(t).length>0?t:void 0):(Object.entries(e).forEach(([e,n])=>{n!=null&&(t[P(e)]=n)}),Object.keys(t).length>0?t:void 0)},I=(...e)=>{let t={};return e.forEach(e=>{let n=F(e);n&&Object.assign(t,n)}),Object.keys(t).length>0?t:void 0},te=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e},ne=()=>C(`div`,{className:`space-y-3`,"data-rue-modal-loading":`true`,children:[w(`div`,{className:`skeleton h-4 w-2/5`}),w(`div`,{className:`skeleton h-4 w-full`}),w(`div`,{className:`skeleton h-4 w-5/6`}),w(`div`,{className:`skeleton h-24 w-full`})]}),re=()=>w(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`size-4`,"aria-hidden":`true`,children:w(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 6l12 12M18 6 6 18`})}),L=()=>{typeof document>`u`||(A===0&&(j=document.documentElement.style.overflow,document.documentElement.style.overflow=`hidden`),A+=1)},R=()=>{typeof document>`u`||A===0||(--A,A===0&&(document.documentElement.style.overflow=j))},z=({open:e,defaultOpen:n=!1,title:a,children:s,actions:c,footer:l,className:u,rootClassName:d,rootStyle:f,wrapClassName:m,wrapProps:g,bodyClassName:_,headerClassName:v,footerClassName:y,maskClassName:b,classNames:x,styles:S,width:E,style:O,bodyStyle:ee,maskStyle:k,centered:A=!1,closable:j=!0,closeIcon:N,keyboard:P=!0,mask:F=!0,maskClosable:z=!0,forceRender:B=!1,destroyOnClose:ie,destroyOnHidden:ae=!0,confirmLoading:V=!1,okText:oe=`确定`,cancelText:se,okType:ce=`primary`,okButtonProps:H,cancelButtonProps:U,zIndex:W,getContainer:G,loading:K=!1,onOk:q,onCancel:J,onClose:Y,onOpenChange:X,afterClose:Z,afterOpenChange:le,modalRender:ue,...de})=>{let fe=r(n),pe=r(n),Q=r(!1),me=typeof e==`boolean`,$=typeof e==`boolean`?e:fe.value,he=r($),ge=r(P),_e=e=>{me||(fe.value=e),X&&X(e)},ve=e=>{e&&typeof e.preventDefault==`function`&&e.preventDefault(),J&&e&&J(e),Y&&Y(e),_e(!1)},ye=e=>{V||q&&q(e)};if(i(()=>{if($&&(L(),Q.value=!0),typeof window>`u`)return;let e=e=>{!he.value||!ge.value||e.key!==`Escape`||ve(e)};window.addEventListener(`keydown`,e),p(()=>{window.removeEventListener(`keydown`,e)})}),t(()=>$,e=>{he.value=e,e?(pe.value=!0,Q.value||=(L(),!0)):Q.value&&(R(),Q.value=!1,Z&&Z()),le&&le(e)}),t(()=>P,e=>{ge.value=e},{immediate:!0}),t(()=>n,e=>{me||(fe.value=!!e)},{immediate:!0}),p(()=>{Q.value&&=(R(),!1)}),!($||B||!(ae??ie??!0)&&pe.value))return null;let{className:be,style:xe,onClick:Se,...Ce}=g??{},we=se??(q||H?`取消`:`关闭`),Te=l===void 0&&c!=null,Ee=!Te&&(q!=null||H!=null),De=Te||J!=null||Y!=null||Ee,Oe=e=>{let{children:t,onClick:n,...r}=e??{};return o(D,{...U,...r,onClick:e=>{n&&n(e),!e.defaultPrevented&&ve(e)},disabled:r.disabled??U?.disabled},t??U?.children??we)},ke=e=>{let{children:t,onClick:n,...r}=e??{};return o(D,{...H,...r,type:r.type??H?.type??ce,loading:r.loading??H?.loading??V,onClick:e=>{n&&n(e),!e.defaultPrevented&&ye(e)}},t??H?.children??oe)},Ae=e=>Oe(e),je=e=>ke(e),Me=C(h,{children:[Te?c:null,De?Oe():null,Ee?ke():null]}),Ne=K||l===null||l===!1?null:typeof l==`function`?l(Me,{OkBtn:je,CancelBtn:Ae}):l??Me,Pe=e=>{Se&&Se(e),!e.defaultPrevented&&(!F||!z||e.target!==e.currentTarget||ve(e))},Fe=C(`div`,{...de,"aria-hidden":$?void 0:`true`,className:M(`modal ${$?`modal-open`:``} bg-transparent`.trim(),M(d,M(x?.root,$?void 0:`pointer-events-none`))),style:I(S?.root,f,W==null?void 0:{zIndex:W}),"data-rue-modal-root":`true`,children:[F?w(`div`,{"aria-hidden":`true`,className:M(`absolute inset-0 bg-base-content/40`,M(b,x?.mask)),style:I(S?.mask,k),"data-rue-modal-mask":`true`}):null,w(`div`,{...Ce,className:M(M(`absolute inset-0 overflow-y-auto px-4 py-6 sm:px-6 ${A?`flex items-center justify-center`:`flex items-start justify-center sm:items-center`}`,m),M(be,x?.wrapper)),style:I(S?.wrapper,xe),onClick:Pe,"data-rue-modal-wrapper":`true`,children:w(`div`,{className:M(`relative flex w-full justify-center`,x?.container),style:I(S?.container),"data-rue-modal-container":`true`,children:C(`div`,{role:`dialog`,"aria-modal":$?`true`:`false`,"aria-hidden":$?void 0:`true`,className:M(M(`modal-box relative`,u),M(x?.box,$?void 0:`pointer-events-none`)),style:I(S?.box,O,E==null?void 0:{width:te(E)}),onClick:e=>{e.stopPropagation()},"data-rue-modal-box":`true`,children:[j?w(`button`,{type:`button`,"aria-label":`关闭`,className:M(`btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10`,x?.close),style:I(S?.close),onClick:e=>ve(e),children:N??w(re,{})}):null,a?w(`div`,{className:M(`mb-4 pr-10`,M(v,x?.header)),style:I(S?.header),children:w(`div`,{className:M(`text-lg font-semibold leading-6`,x?.title),style:I(S?.title),children:a})}):null,w(`div`,{className:M(`space-y-4`,M(_,x?.body)),style:I(S?.body,ee),"aria-busy":K?`true`:void 0,children:K?ne():s}),Ne?w(`div`,{className:M(`modal-action mt-6 flex flex-wrap items-center justify-end gap-2`,M(y,x?.footer)),style:I(S?.footer),children:Ne}):null]})})})]}),Ie=ue?ue(Fe):Fe,Le=typeof G==`function`?G():G;return Le===!1||Le==null?Ie:w(T,{to:Le,children:Ie})},B=t=>m(n=>{let r=e(`div`,n);d(r,`component-preview not-prose text-base-content my-6 lg:my-12`);let i=e(`div`,r);c(r,i),d(i,`flex flex-wrap items-start justify-between gap-3`);let o=e(`div`,i);c(i,o);let p=e(`h2`,o);c(o,p),d(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),c(p,f(`# `));let h=u(`rue:slot:anchor`);c(p,h),l(()=>{let e=t.title;s(()=>v(e,p,h))});let g=e(`p`,o);c(o,g),d(g,`m-0 text-sm opacity-70`);let _=u(`rue:slot:anchor`);c(g,_),l(()=>{let e=t.summary;s(()=>v(e,g,_))});let b=u(`rue:component:anchor`);c(r,b),l(()=>{let e=y(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});s(()=>v(e,r,b))});let x=u(`rue:slot:anchor`);return c(r,x),l(()=>{let e=t.tab.value===`preview`?k(t.title,t.preview):m(()=>{let e=a(),n=u(`rue:component:anchor`);return c(e,n),l(()=>{let r=y(E,{className:`mt-2`,lang:`tsx`,code:t.code});s(()=>v(r,e,n))}),e});s(()=>v(e,r,x))}),r}),ie=t=>m(n=>{let r=e(`div`,n);d(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);c(r,i),d(i,`table table-zebra`);let o=e(`thead`,i);c(i,o);let p=e(`tr`,o);c(o,p);let h=e(`th`,p);c(p,h),c(h,f(`属性`));let g=e(`th`,p);c(p,g),c(g,f(`说明`));let y=e(`th`,p);c(p,y),c(y,f(`类型`));let b=e(`th`,p);c(p,b),c(b,f(`默认值`));let x=e(`tbody`,i);c(i,x);let C=u(`rue:list:start`),w=u(`rue:list:end`);c(x,C),c(x,w);let T=new Map;return l(()=>{T=S({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,o)=>{v(m(()=>{let n=a(),r=e(`tr`,n);c(n,r),l(()=>{_(r,`key`,String(t.prop))});let i=e(`td`,r);c(r,i);let o=e(`code`,i);c(i,o);let d=u(`rue:slot:anchor`);c(o,d),l(()=>{let e=t.prop;s(()=>v(e,o,d))});let f=e(`td`,r);c(r,f);let p=u(`rue:slot:anchor`);c(f,p),l(()=>{let e=t.description;s(()=>v(e,f,p))});let m=e(`td`,r);c(r,m);let h=e(`code`,m);c(m,h);let g=u(`rue:slot:anchor`);c(h,g),l(()=>{let e=t.type;s(()=>v(e,h,g))});let y=e(`td`,r);c(r,y);let b=e(`code`,y);c(y,b);let x=u(`rue:slot:anchor`);return c(b,x),l(()=>{let e=t.defaultValue;s(()=>v(e,b,x))}),n}),n,r)}})}),r}),ae=[{prop:`open`,description:`受控显隐。`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpen`,description:`非受控初始打开状态。`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容。`,type:`any`,defaultValue:`-`},{prop:`footer`,description:"自定义 footer；传 `null` 可隐藏；也支持函数包裹默认 footer。",type:`any | (originNode) => any`,defaultValue:`-`},{prop:`actions`,description:`旧版动作区写法，会保留原有“自定义动作 + 默认关闭按钮”行为。`,type:`any`,defaultValue:`-`},{prop:`onOk / onCancel / onClose`,description:`确认、取消与关闭回调。`,type:`function`,defaultValue:`-`},{prop:`confirmLoading`,description:`让默认确认按钮进入 loading 态。`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`主体切换到骨架占位态，并临时隐藏 footer。`,type:`boolean`,defaultValue:`false`},{prop:`okText / cancelText / okType`,description:`默认 footer 的按钮文案与确认按钮类型。`,type:`any / any / ButtonType`,defaultValue:"`确定` / 自动 / `primary`"},{prop:`width / className`,description:"设置 modal-box 宽度；`className` 仍直接追加到 box。",type:`string | number / string`,defaultValue:`-`},{prop:`rootStyle / wrapClassName / wrapProps / maskClassName / maskStyle`,description:"分别定制根层、wrapper 和遮罩层；`mask={false}` 时不会渲染遮罩节点。",type:`style / string / object / string / style`,defaultValue:`-`},{prop:`centered`,description:`垂直居中。`,type:`boolean`,defaultValue:`false`},{prop:`mask / maskClosable / keyboard`,description:`控制遮罩显示、点击遮罩关闭与 ESC 关闭。`,type:`boolean`,defaultValue:`true / true / true`},{prop:`closable / closeIcon`,description:`右上角关闭按钮与自定义关闭图标。`,type:`boolean / any`,defaultValue:`true / 默认图标`},{prop:`forceRender / destroyOnHidden`,description:`控制关闭后是否保留内容挂载。`,type:`boolean / boolean`,defaultValue:`false / true`},{prop:`destroyOnClose / getContainer`,description:`兼容旧别名，并支持通过 Teleport 把弹层渲染到指定容器。`,type:`boolean / string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`- / false`},{prop:`bodyClassName / headerClassName / footerClassName`,description:`分别定制头部、主体、底部区域类名。`,type:`string`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义分区覆盖 root/mask/wrapper/container/box/header/title/body/footer/close。`,type:`object`,defaultValue:`-`},{prop:`modalRender`,description:`接管最终弹层节点的二次包裹。`,type:`(node) => any`,defaultValue:`-`},{prop:`afterOpenChange / afterClose`,description:`显隐变化后的钩子。`,type:`function`,defaultValue:`-`}],V=()=>{let{tabBasic:t,tabMaskless:i,tabActions:o,tabWide:p,tabAsync:h,tabFooterRender:S,tabKeepMounted:T,basicOpen:E,masklessOpen:O,actionsOpen:k,wideOpen:A,asyncOpen:j,asyncLoading:M,asyncStatus:N,renderOpen:P,guardCount:F,keepMountedOpen:I}=x(`useSetup:0:0`,()=>n(()=>({tabBasic:x(`ref:1:0`,()=>r(`preview`)),tabMaskless:x(`ref:1:1`,()=>r(`preview`)),tabActions:x(`ref:1:2`,()=>r(`preview`)),tabWide:x(`ref:1:3`,()=>r(`preview`)),tabAsync:x(`ref:1:4`,()=>r(`preview`)),tabFooterRender:x(`ref:1:5`,()=>r(`preview`)),tabKeepMounted:x(`ref:1:6`,()=>r(`preview`)),basicOpen:x(`ref:1:7`,()=>r(!1)),masklessOpen:x(`ref:1:8`,()=>r(!1)),actionsOpen:x(`ref:1:9`,()=>r(!1)),wideOpen:x(`ref:1:10`,()=>r(!1)),asyncOpen:x(`ref:1:11`,()=>r(!1)),asyncLoading:x(`ref:1:12`,()=>r(!1)),asyncStatus:x(`ref:1:13`,()=>r(`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`)),renderOpen:x(`ref:1:14`,()=>r(!1)),guardCount:x(`ref:1:15`,()=>r(0)),keepMountedOpen:x(`ref:1:16`,()=>r(!1))})));return m(n=>{let r=a(),x=u(`rue:component:anchor`);return c(r,x),v(y(ee,{children:m(()=>{let n=a(),r=e(`div`,n);c(n,r),d(r,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`,r);c(r,m),c(m,f(`Modal 模态框`));let x=e(`p`,r);c(r,x),d(x,`text-sm mt-3 mb-3`),c(x,f(`Modal 现在保持 Rue 自己的视觉风格，同时补齐了更完整的显隐控制、默认 footer、异步确认、遮罩交互、挂载策略与 root/mask/wrapper 级别的语义化定制能力。`));let ee=u(`rue:component:anchor`);c(r,ee),l(()=>{let e=y(B,{title:`Controlled modal`,summary:"保留原有受控用法：通过 `open` 和 `onClose` 管理显隐，默认 footer 会自动提供关闭按钮。",tab:t,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-basic-open`,onClick:()=>{E.value=!0},children:`Open modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`点击按钮后会显示受控模态框，并通过默认关闭按钮或右上角关闭图标收起。`}),w(z,{open:E.value,title:`Basic modal`,onClose:()=>{E.value=!1},children:w(`p`,{className:`py-2`,children:`Press the close button below to dismiss this modal.`})})]})}),code:`const basicOpen = ref(false)

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
</Modal>`});s(()=>v(e,r,ee))});let te=u(`rue:component:anchor`);c(r,te),l(()=>{let e=y(B,{title:`Maskless modal and layer hooks`,summary:"`mask={false}` 会真正移除遮罩层；需要精细控制时可继续配合 `rootStyle`、`wrapClassName` 与语义化 `classNames/styles`。",tab:i,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`warning`,className:`w-fit`,"data-testid":`modal-maskless-open`,onClick:()=>{O.value=!0},children:`Open without mask`}),w(`p`,{className:`text-sm text-base-content/70`,children:`当前示例关闭了遮罩视觉，因此背景保持可见，点击外层空白区域也不会触发关闭。`}),w(z,{open:O.value,mask:!1,width:680,rootStyle:{backdropFilter:`blur(2px)`},wrapClassName:`items-end sm:items-center`,classNames:{container:`max-w-3xl`,box:`border border-base-300 shadow-2xl`,body:`space-y-3`},title:`Inspector panel`,footer:(e,{CancelBtn:t})=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`No mask layer is rendered in this example.`}),w(`div`,{className:`flex justify-end`,children:w(t,{children:`关闭面板`})})]}),onClose:()=>{O.value=!1},children:C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm text-base-content/80`,children:[w(`div`,{className:`font-medium`,children:`Layer summary`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:"`rootStyle` 作用在最外层固定定位节点"}),w(`li`,{children:"`wrapClassName` 作用在可滚动的交互 wrapper"}),w(`li`,{children:"`classNames.container` 和 `classNames.box` 分别控制容器与面板"})]})]})})]})}),code:`const masklessOpen = ref(false)

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
</Modal>`});s(()=>v(e,r,te))});let ne=u(`rue:component:anchor`);c(r,ne),l(()=>{let e=y(B,{title:`Modal with custom actions`,summary:"旧版 `actions` 仍然可用，适合把自定义按钮组插到 footer 里，同时保留默认关闭按钮。",tab:o,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`secondary`,className:`w-fit`,"data-testid":`modal-actions-open`,onClick:()=>{k.value=!0},children:`Review actions`}),w(`p`,{className:`text-sm text-base-content/70`,children:"可以继续使用 `actions` 兼容旧 demo，同时逐步迁移到新的 `footer` API。"}),w(z,{open:k.value,title:`Delete this draft?`,actions:C(`div`,{className:`join`,"data-testid":`modal-actions-group`,children:[w(`button`,{className:`btn join-item btn-ghost`,onClick:()=>{k.value=!1},children:`Cancel`}),w(`button`,{className:`btn join-item btn-error`,"data-testid":`modal-actions-confirm`,onClick:()=>{k.value=!1},children:`Delete`})]}),onClose:()=>{k.value=!1},children:w(`p`,{className:`py-2`,children:`This action removes the draft from your local workspace.`})})]})}),code:`const actionsOpen = ref(false)

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
</Modal>`});s(()=>v(e,r,ne))});let re=u(`rue:component:anchor`);c(r,re),l(()=>{let e=y(B,{title:`Wide modal box`,summary:"原有宽弹层示例保留，同时也可以配合 `width` 使用更偏语义化的尺寸写法。",tab:p,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`accent`,className:`w-fit`,"data-testid":`modal-wide-open`,onClick:()=>{A.value=!0},children:`Open wide modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"通过 `className` 直接扩展 modal-box 宽度和排版，旧写法完全保留。"}),w(z,{open:A.value,title:`Release summary`,className:`w-11/12 max-w-5xl`,onClose:()=>{A.value=!1},children:C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Highlights`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Routing docs refreshed, design pages expanded, and runtime tests tightened.`})]}),C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Notes`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Use modal width utilities on className when the default box is too narrow.`})]})]})})]})}),code:`const wideOpen = ref(false)

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
</Modal>`});s(()=>v(e,r,re))});let L=u(`rue:component:anchor`);c(r,L),l(()=>{let e=y(B,{title:`Default footer with async confirm`,summary:"更贴近常见业务弹窗的用法：给 `onOk/onCancel` 和 `confirmLoading` 即可得到默认确认 footer。",tab:h,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-async-open`,onClick:()=>{N.value=`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`,j.value=!0},children:`Launch publish flow`}),w(`p`,{className:`text-sm text-base-content/70`,children:"默认 footer 会自动生成取消/确认按钮，并把 `confirmLoading` 映射到确认按钮。"}),w(z,{open:j.value,title:`Publish this release?`,okText:`开始发布`,cancelText:`稍后处理`,confirmLoading:M.value,onCancel:()=>{M.value=!1,j.value=!1},onOk:()=>{N.value=`正在校验变更、生成产物并同步部署状态...`,M.value=!0,setTimeout(()=>{M.value=!1,j.value=!1,N.value=`发布完成，当前版本已经推送到 staging。`},1200)},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`p`,{className:`m-0 text-sm text-base-content/80`,children:N.value}),C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm`,children:[w(`div`,{className:`font-medium`,children:`Release checklist`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:`Tag 已创建`}),w(`li`,{children:`Changelog 已同步`}),w(`li`,{children:`Preview 环境检查通过`})]})]})]})})]})}),code:`const asyncOpen = ref(false)
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
</Modal>`});s(()=>v(e,r,L))});let R=u(`rue:component:anchor`);c(r,R),l(()=>{let e=y(B,{title:`Footer render and centered layout`,summary:"通过 `centered`、`width`、语义化 className 和 `footer(originNode => ...)`，可以在不改动视觉体系的前提下重组结构。",tab:S,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`info`,className:`w-fit`,onClick:()=>{P.value=!0},children:`Open settings modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"`footer` 支持函数式包裹默认 footer，适合在两端插入说明信息或额外操作。"}),C(z,{open:P.value,centered:!0,width:720,title:`Workspace settings`,headerClassName:`border-b border-base-300 pb-3`,bodyClassName:`pt-1`,footer:e=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`Changes are scoped to the current workspace.`}),w(`div`,{className:`flex flex-wrap justify-end gap-2`,children:e})]}),okText:`保存设置`,cancelText:`关闭`,onCancel:()=>{P.value=!1},onOk:()=>{F.value+=1,P.value=!1},children:[C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Environment`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Staging`}),w(`option`,{children:`Production`})]})]}),C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Deploy channel`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Web`}),w(`option`,{children:`Desktop`})]})]})]}),C(`p`,{className:`mb-0 text-sm text-base-content/70`,children:[`Saved count: `,F.value]})]})]})}),code:`<Modal
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
</Modal>`});s(()=>v(e,r,R))});let V=u(`rue:component:anchor`);c(r,V),l(()=>{let e=y(B,{title:`Keep mounted content`,summary:"需要在关闭后保留 DOM 状态时，可以开启 `forceRender` + `destroyOnHidden={false}`。",tab:T,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`success`,className:`w-fit`,onClick:()=>{I.value=!0},children:`Open draft modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`在文本框里输入内容，关闭后再次打开，未提交的草稿仍会保留。`}),w(z,{open:I.value,title:`Draft note`,forceRender:!0,destroyOnHidden:!1,maskClosable:!1,keyboard:!1,footer:null,onClose:()=>{I.value=!1},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`textarea`,{className:`textarea textarea-bordered min-h-32 w-full`,defaultValue:`This textarea keeps its DOM state after the modal is hidden.`}),w(`div`,{className:`alert alert-info text-sm`,children:"这里禁用了遮罩点击和 ESC 关闭，只保留右上角关闭按钮，方便演示 `maskClosable` 与 `keyboard`。"})]})})]})}),code:`<Modal
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
</Modal>`});s(()=>v(e,r,V))});let oe=e(`h2`,r);c(r,oe),_(oe,`id`,`modal-api`),c(oe,f(`API`));let se=e(`p`,r);c(r,se),c(se,f("以下列出当前设计页覆盖到的主要 `Modal` 能力。"));let ce=u(`rue:component:anchor`);c(r,ce),l(()=>{let e=y(ie,{rows:ae});s(()=>v(e,r,ce))});let H=e(`h2`,r);c(r,H),c(H,f(`FAQ`));let U=e(`p`,r);c(r,U);let W=e(`strong`,U);c(U,W),c(W,f("什么时候用 `actions`，什么时候用 `footer`？")),c(U,f("如果你在迁移旧代码，直接继续用 `actions` 即可；新代码优先用 `footer`，它可以完全接管 footer，也可以用函数包装默认 footer。"));let G=e(`p`,r);c(r,G);let K=e(`strong`,G);c(G,K),c(K,f("`className`、`bodyClassName` 和 `classNames` 怎么选？")),c(G,f("`className` 仍直接追加到"));let q=e(`code`,G);c(G,q),c(q,f(`modal-box`)),c(G,f(`；只想改某个区域时优先用`));let J=e(`code`,G);c(G,J),c(J,f(`bodyClassName/headerClassName/footerClassName`)),c(G,f(`；需要更细粒度统一配置时再用`));let Y=b(G);c(G,Y),g(Y,` `);let X=e(`code`,G);c(G,X),c(X,f(`classNames`)),c(G,f(`。`));let Z=e(`p`,r);c(r,Z);let le=e(`strong`,Z);c(Z,le),c(le,f("为什么保留 `destroyOnHidden` 默认关闭即卸载？")),c(Z,f(`这是为了兼容 Rue 当前组件行为；当你确实需要保留 DOM 状态时，再显式开启`));let ue=e(`code`,Z);c(Z,ue),c(ue,f(`forceRender`)),c(Z,f(`与`));let de=e(`code`,Z);return c(Z,de),c(de,f(`destroyOnHidden={false}`)),c(Z,f(`。`)),n})}),r,x),r})};export{V as default};