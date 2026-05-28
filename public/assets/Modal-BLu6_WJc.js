import{$ as e,D as t,I as n,Jt as r,Kt as i,Lt as a,N as o,Q as s,Vt as c,Y as l,Yt as u,Z as d,ct as f,d as p,et as m,l as h,mt as g,ot as _,t as v,tt as y,y as b}from"./vapor-runtime-BR_2rwNk.js";import{a as x,n as S}from"./vapor-helpers-vapor-DkadWylb.js";import{i as C,r as w}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as ee}from"./Teleport-1QQ9jpSF.js";import{t as T}from"./button-BDcuIfPi.js";import{t as E}from"./tabs-DMHgT-aV.js";import{n as D}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as O}from"./Code-B_4lzH85.js";import{t as k}from"./preview-test-gate-BMJrlY7m.js";var A=0,j=``,M=(...e)=>e.filter(Boolean).join(` `),N=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),P=e=>e.startsWith(`--`)?e:e.includes(`-`)?N(e):e,F=e=>{if(!e)return;let t={};return typeof e==`string`?(e.split(`;`).map(e=>e.trim()).filter(Boolean).forEach(e=>{let n=e.indexOf(`:`);if(n===-1)return;let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();!r||!i||(t[P(r)]=i)}),Object.keys(t).length>0?t:void 0):(Object.entries(e).forEach(([e,n])=>{n!=null&&(t[P(e)]=n)}),Object.keys(t).length>0?t:void 0)},I=(...e)=>{let t={};return e.forEach(e=>{let n=F(e);n&&Object.assign(t,n)}),Object.keys(t).length>0?t:void 0},te=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e},ne=()=>C(`div`,{className:`space-y-3`,"data-rue-modal-loading":`true`,children:[w(`div`,{className:`skeleton h-4 w-2/5`}),w(`div`,{className:`skeleton h-4 w-full`}),w(`div`,{className:`skeleton h-4 w-5/6`}),w(`div`,{className:`skeleton h-24 w-full`})]}),re=()=>w(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`size-4`,"aria-hidden":`true`,children:w(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 6l12 12M18 6 6 18`})}),L=()=>{typeof document>`u`||(A===0&&(j=document.documentElement.style.overflow,document.documentElement.style.overflow=`hidden`),A+=1)},R=()=>{typeof document>`u`||A===0||(--A,A===0&&(document.documentElement.style.overflow=j))},z=({open:e,defaultOpen:i=!1,title:s,children:c,actions:l,footer:u,className:d,rootClassName:f,rootStyle:p,wrapClassName:m,wrapProps:h,bodyClassName:g,headerClassName:_,footerClassName:v,maskClassName:y,classNames:x,styles:S,width:E,style:D,bodyStyle:O,maskStyle:k,centered:A=!1,closable:j=!0,closeIcon:N,keyboard:P=!0,mask:F=!0,maskClosable:z=!0,forceRender:B=!1,destroyOnClose:ie,destroyOnHidden:ae=!0,confirmLoading:V=!1,okText:oe=`确定`,cancelText:se,okType:ce=`primary`,okButtonProps:H,cancelButtonProps:U,zIndex:W,getContainer:G,loading:K=!1,onOk:q,onCancel:J,onClose:Y,onOpenChange:X,afterClose:Z,afterOpenChange:le,modalRender:ue,...de})=>{let fe=a(i),pe=a(i),Q=a(!1),me=typeof e==`boolean`,$=typeof e==`boolean`?e:fe.value,he=a($),ge=a(P),_e=e=>{me||(fe.value=e),X&&X(e)},ve=e=>{e&&typeof e.preventDefault==`function`&&e.preventDefault(),J&&e&&J(e),Y&&Y(e),_e(!1)},ye=e=>{V||q&&q(e)};if(o(()=>{if($&&(L(),Q.value=!0),typeof window>`u`)return;let e=e=>{!he.value||!ge.value||e.key!==`Escape`||ve(e)};window.addEventListener(`keydown`,e),n(()=>{window.removeEventListener(`keydown`,e)})}),r(()=>$,e=>{he.value=e,e?(pe.value=!0,Q.value||=(L(),!0)):Q.value&&(R(),Q.value=!1,Z&&Z()),le&&le(e)}),r(()=>P,e=>{ge.value=e},{immediate:!0}),r(()=>i,e=>{me||(fe.value=!!e)},{immediate:!0}),n(()=>{Q.value&&=(R(),!1)}),!($||B||!(ae??ie??!0)&&pe.value))return null;let{className:be,style:xe,onClick:Se,...Ce}=h??{},we=se??(q||H?`取消`:`关闭`),Te=u===void 0&&l!=null,Ee=!Te&&(q!=null||H!=null),De=Te||J!=null||Y!=null||Ee,Oe=e=>{let{children:n,onClick:r,...i}=e??{};return t(T,{...U,...i,onClick:e=>{r&&r(e),!e.defaultPrevented&&ve(e)},disabled:i.disabled??U?.disabled},n??U?.children??we)},ke=e=>{let{children:n,onClick:r,...i}=e??{};return t(T,{...H,...i,type:i.type??H?.type??ce,loading:i.loading??H?.loading??V,onClick:e=>{r&&r(e),!e.defaultPrevented&&ye(e)}},n??H?.children??oe)},Ae=e=>Oe(e),je=e=>ke(e),Me=C(b,{children:[Te?l:null,De?Oe():null,Ee?ke():null]}),Ne=K||u===null||u===!1?null:typeof u==`function`?u(Me,{OkBtn:je,CancelBtn:Ae}):u??Me,Pe=e=>{Se&&Se(e),!e.defaultPrevented&&(!F||!z||e.target!==e.currentTarget||ve(e))},Fe=C(`div`,{...de,"aria-hidden":$?void 0:`true`,className:M(`modal ${$?`modal-open`:``} bg-transparent`.trim(),M(f,M(x?.root,$?void 0:`pointer-events-none`))),style:I(S?.root,p,W==null?void 0:{zIndex:W}),"data-rue-modal-root":`true`,children:[F?w(`div`,{"aria-hidden":`true`,className:M(`absolute inset-0 bg-base-content/40`,M(y,x?.mask)),style:I(S?.mask,k),"data-rue-modal-mask":`true`}):null,w(`div`,{...Ce,className:M(M(`absolute inset-0 overflow-y-auto px-4 py-6 sm:px-6 ${A?`flex items-center justify-center`:`flex items-start justify-center sm:items-center`}`,m),M(be,x?.wrapper)),style:I(S?.wrapper,xe),onClick:Pe,"data-rue-modal-wrapper":`true`,children:w(`div`,{className:M(`relative flex w-full justify-center`,x?.container),style:I(S?.container),"data-rue-modal-container":`true`,children:C(`div`,{role:`dialog`,"aria-modal":$?`true`:`false`,"aria-hidden":$?void 0:`true`,className:M(M(`modal-box relative`,d),M(x?.box,$?void 0:`pointer-events-none`)),style:I(S?.box,D,E==null?void 0:{width:te(E)}),onClick:e=>{e.stopPropagation()},"data-rue-modal-box":`true`,children:[j?w(`button`,{type:`button`,"aria-label":`关闭`,className:M(`btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10`,x?.close),style:I(S?.close),onClick:e=>ve(e),children:N??w(re,{})}):null,s?w(`div`,{className:M(`mb-4 pr-10`,M(_,x?.header)),style:I(S?.header),children:w(`div`,{className:M(`text-lg font-semibold leading-6`,x?.title),style:I(S?.title),children:s})}):null,w(`div`,{className:M(`space-y-4`,M(g,x?.body)),style:I(S?.body,O),"aria-busy":K?`true`:void 0,children:K?ne():c}),Ne?w(`div`,{className:M(`modal-action mt-6 flex flex-wrap items-center justify-end gap-2`,M(v,x?.footer)),style:I(S?.footer),children:Ne}):null]})})})]}),Ie=ue?ue(Fe):Fe,Le=typeof G==`function`?G():G;return Le===!1||Le==null?Ie:w(ee,{to:Le,children:Ie})},B=t=>p(n=>{let r=e(`div`,n);f(r,`component-preview not-prose text-base-content my-6 lg:my-12`);let i=e(`div`,r);l(r,i),f(i,`flex flex-wrap items-start justify-between gap-3`);let a=e(`div`,i);l(i,a);let o=e(`h2`,a);l(a,o),f(o,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(o,m(`# `));let g=d(`rue:slot:anchor`);l(o,g),u(()=>{let e=t.title;c(()=>h(e,o,g))});let _=e(`p`,a);l(a,_),f(_,`m-0 text-sm opacity-70`);let y=d(`rue:slot:anchor`);l(_,y),u(()=>{let e=t.summary;c(()=>h(e,_,y))});let b=d(`rue:component:anchor`);l(r,b),u(()=>{let e=v(E,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});c(()=>h(e,r,b))});let x=d(`rue:slot:anchor`);return l(r,x),u(()=>{let e=t.tab.value===`preview`?k(t.title,t.preview):p(()=>{let e=s(),n=d(`rue:component:anchor`);return l(e,n),u(()=>{let r=v(O,{className:`mt-2`,lang:`tsx`,code:t.code});c(()=>h(r,e,n))}),e});c(()=>h(e,r,x))}),r}),ie=t=>p(n=>{let r=e(`div`,n);f(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);l(r,i),f(i,`table table-zebra`);let a=e(`thead`,i);l(i,a);let o=e(`tr`,a);l(a,o);let g=e(`th`,o);l(o,g),l(g,m(`属性`));let v=e(`th`,o);l(o,v),l(v,m(`说明`));let y=e(`th`,o);l(o,y),l(y,m(`类型`));let b=e(`th`,o);l(o,b),l(b,m(`默认值`));let x=e(`tbody`,i);l(i,x);let C=d(`rue:list:start`),w=d(`rue:list:end`);l(x,C),l(x,w);let ee=new Map;return u(()=>{ee=S({items:t.rows||[],getKey:(e,t)=>e.prop,elements:ee,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,a)=>{h(p(()=>{let n=s(),r=e(`tr`,n);l(n,r),u(()=>{_(r,`key`,String(t.prop))});let i=e(`td`,r);l(r,i);let a=e(`code`,i);l(i,a);let o=d(`rue:slot:anchor`);l(a,o),u(()=>{let e=t.prop;c(()=>h(e,a,o))});let f=e(`td`,r);l(r,f);let p=d(`rue:slot:anchor`);l(f,p),u(()=>{let e=t.description;c(()=>h(e,f,p))});let m=e(`td`,r);l(r,m);let g=e(`code`,m);l(m,g);let v=d(`rue:slot:anchor`);l(g,v),u(()=>{let e=t.type;c(()=>h(e,g,v))});let y=e(`td`,r);l(r,y);let b=e(`code`,y);l(y,b);let x=d(`rue:slot:anchor`);return l(b,x),u(()=>{let e=t.defaultValue;c(()=>h(e,b,x))}),n}),n,r)}})}),r}),ae=[{prop:`open`,description:`受控显隐。`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpen`,description:`非受控初始打开状态。`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容。`,type:`any`,defaultValue:`-`},{prop:`footer`,description:"自定义 footer；传 `null` 可隐藏；也支持函数包裹默认 footer。",type:`any | (originNode) => any`,defaultValue:`-`},{prop:`actions`,description:`旧版动作区写法，会保留原有“自定义动作 + 默认关闭按钮”行为。`,type:`any`,defaultValue:`-`},{prop:`onOk / onCancel / onClose`,description:`确认、取消与关闭回调。`,type:`function`,defaultValue:`-`},{prop:`confirmLoading`,description:`让默认确认按钮进入 loading 态。`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`主体切换到骨架占位态，并临时隐藏 footer。`,type:`boolean`,defaultValue:`false`},{prop:`okText / cancelText / okType`,description:`默认 footer 的按钮文案与确认按钮类型。`,type:`any / any / ButtonType`,defaultValue:"`确定` / 自动 / `primary`"},{prop:`width / className`,description:"设置 modal-box 宽度；`className` 仍直接追加到 box。",type:`string | number / string`,defaultValue:`-`},{prop:`rootStyle / wrapClassName / wrapProps / maskClassName / maskStyle`,description:"分别定制根层、wrapper 和遮罩层；`mask={false}` 时不会渲染遮罩节点。",type:`style / string / object / string / style`,defaultValue:`-`},{prop:`centered`,description:`垂直居中。`,type:`boolean`,defaultValue:`false`},{prop:`mask / maskClosable / keyboard`,description:`控制遮罩显示、点击遮罩关闭与 ESC 关闭。`,type:`boolean`,defaultValue:`true / true / true`},{prop:`closable / closeIcon`,description:`右上角关闭按钮与自定义关闭图标。`,type:`boolean / any`,defaultValue:`true / 默认图标`},{prop:`forceRender / destroyOnHidden`,description:`控制关闭后是否保留内容挂载。`,type:`boolean / boolean`,defaultValue:`false / true`},{prop:`destroyOnClose / getContainer`,description:`兼容旧别名，并支持通过 Teleport 把弹层渲染到指定容器。`,type:`boolean / string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`- / false`},{prop:`bodyClassName / headerClassName / footerClassName`,description:`分别定制头部、主体、底部区域类名。`,type:`string`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义分区覆盖 root/mask/wrapper/container/box/header/title/body/footer/close。`,type:`object`,defaultValue:`-`},{prop:`modalRender`,description:`接管最终弹层节点的二次包裹。`,type:`(node) => any`,defaultValue:`-`},{prop:`afterOpenChange / afterClose`,description:`显隐变化后的钩子。`,type:`function`,defaultValue:`-`}],V=()=>{let{tabBasic:t,tabMaskless:n,tabActions:r,tabWide:o,tabAsync:b,tabFooterRender:S,tabKeepMounted:ee,basicOpen:E,masklessOpen:O,actionsOpen:k,wideOpen:A,asyncOpen:j,asyncLoading:M,asyncStatus:N,renderOpen:P,guardCount:F,keepMountedOpen:I}=x(`useSetup:0:0`,()=>i(()=>({tabBasic:x(`ref:1:0`,()=>a(`preview`)),tabMaskless:x(`ref:1:1`,()=>a(`preview`)),tabActions:x(`ref:1:2`,()=>a(`preview`)),tabWide:x(`ref:1:3`,()=>a(`preview`)),tabAsync:x(`ref:1:4`,()=>a(`preview`)),tabFooterRender:x(`ref:1:5`,()=>a(`preview`)),tabKeepMounted:x(`ref:1:6`,()=>a(`preview`)),basicOpen:x(`ref:1:7`,()=>a(!1)),masklessOpen:x(`ref:1:8`,()=>a(!1)),actionsOpen:x(`ref:1:9`,()=>a(!1)),wideOpen:x(`ref:1:10`,()=>a(!1)),asyncOpen:x(`ref:1:11`,()=>a(!1)),asyncLoading:x(`ref:1:12`,()=>a(!1)),asyncStatus:x(`ref:1:13`,()=>a(`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`)),renderOpen:x(`ref:1:14`,()=>a(!1)),guardCount:x(`ref:1:15`,()=>a(0)),keepMountedOpen:x(`ref:1:16`,()=>a(!1))})));return p(i=>{let a=s(),x=d(`rue:component:anchor`);return l(a,x),h(v(D,{children:p(()=>{let i=s(),a=e(`div`,i);l(i,a),f(a,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,a);l(a,p),l(p,m(`Modal 模态框`));let x=e(`p`,a);l(a,x),f(x,`text-sm mt-3 mb-3`),l(x,m(`Modal 现在保持 Rue 自己的视觉风格，同时补齐了更完整的显隐控制、默认 footer、异步确认、遮罩交互、挂载策略与 root/mask/wrapper 级别的语义化定制能力。`));let D=d(`rue:component:anchor`);l(a,D),u(()=>{let e=v(B,{title:`Controlled modal`,summary:"保留原有受控用法：通过 `open` 和 `onClose` 管理显隐，默认 footer 会自动提供关闭按钮。",tab:t,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(T,{color:`primary`,className:`w-fit`,"data-testid":`modal-basic-open`,onClick:()=>{E.value=!0},children:`Open modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`点击按钮后会显示受控模态框，并通过默认关闭按钮或右上角关闭图标收起。`}),w(z,{open:E.value,title:`Basic modal`,onClose:()=>{E.value=!1},children:w(`p`,{className:`py-2`,children:`Press the close button below to dismiss this modal.`})})]})}),code:`const basicOpen = ref(false)

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
</Modal>`});c(()=>h(e,a,D))});let te=d(`rue:component:anchor`);l(a,te),u(()=>{let e=v(B,{title:`Maskless modal and layer hooks`,summary:"`mask={false}` 会真正移除遮罩层；需要精细控制时可继续配合 `rootStyle`、`wrapClassName` 与语义化 `classNames/styles`。",tab:n,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(T,{color:`warning`,className:`w-fit`,"data-testid":`modal-maskless-open`,onClick:()=>{O.value=!0},children:`Open without mask`}),w(`p`,{className:`text-sm text-base-content/70`,children:`当前示例关闭了遮罩视觉，因此背景保持可见，点击外层空白区域也不会触发关闭。`}),w(z,{open:O.value,mask:!1,width:680,rootStyle:{backdropFilter:`blur(2px)`},wrapClassName:`items-end sm:items-center`,classNames:{container:`max-w-3xl`,box:`border border-base-300 shadow-2xl`,body:`space-y-3`},title:`Inspector panel`,footer:(e,{CancelBtn:t})=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`No mask layer is rendered in this example.`}),w(`div`,{className:`flex justify-end`,children:w(t,{children:`关闭面板`})})]}),onClose:()=>{O.value=!1},children:C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm text-base-content/80`,children:[w(`div`,{className:`font-medium`,children:`Layer summary`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:"`rootStyle` 作用在最外层固定定位节点"}),w(`li`,{children:"`wrapClassName` 作用在可滚动的交互 wrapper"}),w(`li`,{children:"`classNames.container` 和 `classNames.box` 分别控制容器与面板"})]})]})})]})}),code:`const masklessOpen = ref(false)

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
</Modal>`});c(()=>h(e,a,te))});let ne=d(`rue:component:anchor`);l(a,ne),u(()=>{let e=v(B,{title:`Modal with custom actions`,summary:"旧版 `actions` 仍然可用，适合把自定义按钮组插到 footer 里，同时保留默认关闭按钮。",tab:r,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(T,{color:`secondary`,className:`w-fit`,"data-testid":`modal-actions-open`,onClick:()=>{k.value=!0},children:`Review actions`}),w(`p`,{className:`text-sm text-base-content/70`,children:"可以继续使用 `actions` 兼容旧 demo，同时逐步迁移到新的 `footer` API。"}),w(z,{open:k.value,title:`Delete this draft?`,actions:C(`div`,{className:`join`,"data-testid":`modal-actions-group`,children:[w(`button`,{className:`btn join-item btn-ghost`,onClick:()=>{k.value=!1},children:`Cancel`}),w(`button`,{className:`btn join-item btn-error`,"data-testid":`modal-actions-confirm`,onClick:()=>{k.value=!1},children:`Delete`})]}),onClose:()=>{k.value=!1},children:w(`p`,{className:`py-2`,children:`This action removes the draft from your local workspace.`})})]})}),code:`const actionsOpen = ref(false)

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
</Modal>`});c(()=>h(e,a,ne))});let re=d(`rue:component:anchor`);l(a,re),u(()=>{let e=v(B,{title:`Wide modal box`,summary:"原有宽弹层示例保留，同时也可以配合 `width` 使用更偏语义化的尺寸写法。",tab:o,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(T,{color:`accent`,className:`w-fit`,"data-testid":`modal-wide-open`,onClick:()=>{A.value=!0},children:`Open wide modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"通过 `className` 直接扩展 modal-box 宽度和排版，旧写法完全保留。"}),w(z,{open:A.value,title:`Release summary`,className:`w-11/12 max-w-5xl`,onClose:()=>{A.value=!1},children:C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Highlights`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Routing docs refreshed, design pages expanded, and runtime tests tightened.`})]}),C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Notes`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Use modal width utilities on className when the default box is too narrow.`})]})]})})]})}),code:`const wideOpen = ref(false)

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
</Modal>`});c(()=>h(e,a,re))});let L=d(`rue:component:anchor`);l(a,L),u(()=>{let e=v(B,{title:`Default footer with async confirm`,summary:"更贴近常见业务弹窗的用法：给 `onOk/onCancel` 和 `confirmLoading` 即可得到默认确认 footer。",tab:b,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(T,{color:`primary`,className:`w-fit`,"data-testid":`modal-async-open`,onClick:()=>{N.value=`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`,j.value=!0},children:`Launch publish flow`}),w(`p`,{className:`text-sm text-base-content/70`,children:"默认 footer 会自动生成取消/确认按钮，并把 `confirmLoading` 映射到确认按钮。"}),w(z,{open:j.value,title:`Publish this release?`,okText:`开始发布`,cancelText:`稍后处理`,confirmLoading:M.value,onCancel:()=>{M.value=!1,j.value=!1},onOk:()=>{N.value=`正在校验变更、生成产物并同步部署状态...`,M.value=!0,setTimeout(()=>{M.value=!1,j.value=!1,N.value=`发布完成，当前版本已经推送到 staging。`},1200)},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`p`,{className:`m-0 text-sm text-base-content/80`,children:N.value}),C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm`,children:[w(`div`,{className:`font-medium`,children:`Release checklist`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:`Tag 已创建`}),w(`li`,{children:`Changelog 已同步`}),w(`li`,{children:`Preview 环境检查通过`})]})]})]})})]})}),code:`const asyncOpen = ref(false)
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
</Modal>`});c(()=>h(e,a,L))});let R=d(`rue:component:anchor`);l(a,R),u(()=>{let e=v(B,{title:`Footer render and centered layout`,summary:"通过 `centered`、`width`、语义化 className 和 `footer(originNode => ...)`，可以在不改动视觉体系的前提下重组结构。",tab:S,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(T,{color:`info`,className:`w-fit`,onClick:()=>{P.value=!0},children:`Open settings modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"`footer` 支持函数式包裹默认 footer，适合在两端插入说明信息或额外操作。"}),C(z,{open:P.value,centered:!0,width:720,title:`Workspace settings`,headerClassName:`border-b border-base-300 pb-3`,bodyClassName:`pt-1`,footer:e=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`Changes are scoped to the current workspace.`}),w(`div`,{className:`flex flex-wrap justify-end gap-2`,children:e})]}),okText:`保存设置`,cancelText:`关闭`,onCancel:()=>{P.value=!1},onOk:()=>{F.value+=1,P.value=!1},children:[C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Environment`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Staging`}),w(`option`,{children:`Production`})]})]}),C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Deploy channel`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Web`}),w(`option`,{children:`Desktop`})]})]})]}),C(`p`,{className:`mb-0 text-sm text-base-content/70`,children:[`Saved count: `,F.value]})]})]})}),code:`<Modal
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
</Modal>`});c(()=>h(e,a,R))});let V=d(`rue:component:anchor`);l(a,V),u(()=>{let e=v(B,{title:`Keep mounted content`,summary:"需要在关闭后保留 DOM 状态时，可以开启 `forceRender` + `destroyOnHidden={false}`。",tab:ee,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(T,{color:`success`,className:`w-fit`,onClick:()=>{I.value=!0},children:`Open draft modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`在文本框里输入内容，关闭后再次打开，未提交的草稿仍会保留。`}),w(z,{open:I.value,title:`Draft note`,forceRender:!0,destroyOnHidden:!1,maskClosable:!1,keyboard:!1,footer:null,onClose:()=>{I.value=!1},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`textarea`,{className:`textarea textarea-bordered min-h-32 w-full`,defaultValue:`This textarea keeps its DOM state after the modal is hidden.`}),w(`div`,{className:`alert alert-info text-sm`,children:"这里禁用了遮罩点击和 ESC 关闭，只保留右上角关闭按钮，方便演示 `maskClosable` 与 `keyboard`。"})]})})]})}),code:`<Modal
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
</Modal>`});c(()=>h(e,a,V))});let oe=e(`h2`,a);l(a,oe),_(oe,`id`,`modal-api`),l(oe,m(`API`));let se=e(`p`,a);l(a,se),l(se,m("以下列出当前设计页覆盖到的主要 `Modal` 能力。"));let ce=d(`rue:component:anchor`);l(a,ce),u(()=>{let e=v(ie,{rows:ae});c(()=>h(e,a,ce))});let H=e(`h2`,a);l(a,H),l(H,m(`FAQ`));let U=e(`p`,a);l(a,U);let W=e(`strong`,U);l(U,W),l(W,m("什么时候用 `actions`，什么时候用 `footer`？")),l(U,m("如果你在迁移旧代码，直接继续用 `actions` 即可；新代码优先用 `footer`，它可以完全接管 footer，也可以用函数包装默认 footer。"));let G=e(`p`,a);l(a,G);let K=e(`strong`,G);l(G,K),l(K,m("`className`、`bodyClassName` 和 `classNames` 怎么选？")),l(G,m("`className` 仍直接追加到"));let q=e(`code`,G);l(G,q),l(q,m(`modal-box`)),l(G,m(`；只想改某个区域时优先用`));let J=e(`code`,G);l(G,J),l(J,m(`bodyClassName/headerClassName/footerClassName`)),l(G,m(`；需要更细粒度统一配置时再用`));let Y=y(G);l(G,Y),g(Y,` `);let X=e(`code`,G);l(G,X),l(X,m(`classNames`)),l(G,m(`。`));let Z=e(`p`,a);l(a,Z);let le=e(`strong`,Z);l(Z,le),l(le,m("为什么保留 `destroyOnHidden` 默认关闭即卸载？")),l(Z,m(`这是为了兼容 Rue 当前组件行为；当你确实需要保留 DOM 状态时，再显式开启`));let ue=e(`code`,Z);l(Z,ue),l(ue,m(`forceRender`)),l(Z,m(`与`));let de=e(`code`,Z);return l(Z,de),l(de,m(`destroyOnHidden={false}`)),l(Z,m(`。`)),i})}),a,x),a})};export{V as default};