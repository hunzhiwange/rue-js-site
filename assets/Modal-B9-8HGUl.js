import{C as e,F as t,I as n,K as r,L as i,N as a,Q as o,R as s,S as c,W as l,_t as u,d,f,gt as p,l as m,mt as h,ot as g,t as _,ut as v,v as y,z as b}from"./vapor-runtime-Dfq7aA8z.js";import{a as x,n as S}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as ee}from"./Teleport-DYbykcR2.js";import{n as C,t as w}from"./src-BaNG2YQR.js";import{n as T}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as E}from"./Code-CLTo4rRM.js";import{t as D}from"./button-BEauHTlg.js";import{t as O}from"./tabs-CxVJfyAw.js";var k=0,A=``,j=(...e)=>e.filter(Boolean).join(` `),M=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),N=e=>e.startsWith(`--`)?e:e.includes(`-`)?M(e):e,P=e=>{if(!e)return;let t={};return typeof e==`string`?(e.split(`;`).map(e=>e.trim()).filter(Boolean).forEach(e=>{let n=e.indexOf(`:`);if(n===-1)return;let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();!r||!i||(t[N(r)]=i)}),Object.keys(t).length>0?t:void 0):(Object.entries(e).forEach(([e,n])=>{n!=null&&(t[N(e)]=n)}),Object.keys(t).length>0?t:void 0)},F=(...e)=>{let t={};return e.forEach(e=>{let n=P(e);n&&Object.assign(t,n)}),Object.keys(t).length>0?t:void 0},I=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e},L=()=>C(`div`,{className:`space-y-3`,"data-rue-modal-loading":`true`,children:[w(`div`,{className:`skeleton h-4 w-2/5`}),w(`div`,{className:`skeleton h-4 w-full`}),w(`div`,{className:`skeleton h-4 w-5/6`}),w(`div`,{className:`skeleton h-24 w-full`})]}),te=()=>w(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`size-4`,"aria-hidden":`true`,children:w(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 6l12 12M18 6 6 18`})}),R=()=>{typeof document>`u`||(k===0&&(A=document.documentElement.style.overflow,document.documentElement.style.overflow=`hidden`),k+=1)},z=()=>{typeof document>`u`||k===0||(--k,k===0&&(document.documentElement.style.overflow=A))},B=({open:t,defaultOpen:n=!1,title:r,children:i,actions:a,footer:o,className:s,rootClassName:l,rootStyle:u,wrapClassName:d,wrapProps:m,bodyClassName:h,headerClassName:_,footerClassName:v,maskClassName:b,classNames:x,styles:S,width:T,style:E,bodyStyle:O,maskStyle:k,centered:A=!1,closable:M=!0,closeIcon:N,keyboard:P=!0,mask:B=!0,maskClosable:V=!0,forceRender:ne=!1,destroyOnClose:re,destroyOnHidden:H=!0,confirmLoading:ie=!1,okText:ae=`确定`,cancelText:oe,okType:se=`primary`,okButtonProps:U,cancelButtonProps:W,zIndex:ce,getContainer:G,loading:K=!1,onOk:q,onCancel:J,onClose:Y,onOpenChange:le,afterClose:ue,afterOpenChange:de,modalRender:X,...fe})=>{let Z=g(n),pe=g(n),Q=g(!1),me=typeof t==`boolean`,$=typeof t==`boolean`?t:Z.value,he=g($),ge=g(P),_e=e=>{me||(Z.value=e),le&&le(e)},ve=e=>{e&&typeof e.preventDefault==`function`&&e.preventDefault(),J&&e&&J(e),Y&&Y(e),_e(!1)},ye=e=>{ie||q&&q(e)};if(c(()=>{if($&&(R(),Q.value=!0),typeof window>`u`)return;let t=e=>{!he.value||!ge.value||e.key!==`Escape`||ve(e)};window.addEventListener(`keydown`,t),e(()=>{window.removeEventListener(`keydown`,t)})}),p(()=>$,e=>{he.value=e,e?(pe.value=!0,Q.value||=(R(),!0)):Q.value&&(z(),Q.value=!1,ue&&ue()),de&&de(e)}),p(()=>P,e=>{ge.value=e},{immediate:!0}),p(()=>n,e=>{me||(Z.value=!!e)},{immediate:!0}),e(()=>{Q.value&&=(z(),!1)}),!($||ne||!(H??re??!0)&&pe.value))return null;let{className:be,style:xe,onClick:Se,...Ce}=m??{},we=oe??(q||U?`取消`:`关闭`),Te=o===void 0&&a!=null,Ee=!Te&&(q!=null||U!=null),De=Te||J!=null||Y!=null||Ee,Oe=e=>{let{children:t,onClick:n,...r}=e??{};return y(D,{...W,...r,onClick:e=>{n&&n(e),!e.defaultPrevented&&ve(e)},disabled:r.disabled??W?.disabled},t??W?.children??we)},ke=e=>{let{children:t,onClick:n,...r}=e??{};return y(D,{...U,...r,type:r.type??U?.type??se,loading:r.loading??U?.loading??ie,onClick:e=>{n&&n(e),!e.defaultPrevented&&ye(e)}},t??U?.children??ae)},Ae=e=>Oe(e),je=e=>ke(e),Me=C(f,{children:[Te?a:null,De?Oe():null,Ee?ke():null]}),Ne=K||o===null||o===!1?null:typeof o==`function`?o(Me,{OkBtn:je,CancelBtn:Ae}):o??Me,Pe=e=>{Se&&Se(e),!e.defaultPrevented&&(!B||!V||e.target!==e.currentTarget||ve(e))},Fe=C(`div`,{...fe,"aria-hidden":$?void 0:`true`,className:j(`modal ${$?`modal-open`:``} bg-transparent`.trim(),j(l,j(x?.root,$?void 0:`pointer-events-none`))),style:F(S?.root,u,ce==null?void 0:{zIndex:ce}),"data-rue-modal-root":`true`,children:[B?w(`div`,{"aria-hidden":`true`,className:j(`absolute inset-0 bg-base-content/40`,j(b,x?.mask)),style:F(S?.mask,k),"data-rue-modal-mask":`true`}):null,w(`div`,{...Ce,className:j(j(`absolute inset-0 overflow-y-auto px-4 py-6 sm:px-6 ${A?`flex items-center justify-center`:`flex items-start justify-center sm:items-center`}`,d),j(be,x?.wrapper)),style:F(S?.wrapper,xe),onClick:Pe,"data-rue-modal-wrapper":`true`,children:w(`div`,{className:j(`relative flex w-full justify-center`,x?.container),style:F(S?.container),"data-rue-modal-container":`true`,children:C(`div`,{role:`dialog`,"aria-modal":$?`true`:`false`,"aria-hidden":$?void 0:`true`,className:j(j(`modal-box relative`,s),j(x?.box,$?void 0:`pointer-events-none`)),style:F(S?.box,E,T==null?void 0:{width:I(T)}),onClick:e=>{e.stopPropagation()},"data-rue-modal-box":`true`,children:[M?w(`button`,{type:`button`,"aria-label":`关闭`,className:j(`btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10`,x?.close),style:F(S?.close),onClick:e=>ve(e),children:N??w(te,{})}):null,r?w(`div`,{className:j(`mb-4 pr-10`,j(_,x?.header)),style:F(S?.header),children:w(`div`,{className:j(`text-lg font-semibold leading-6`,x?.title),style:F(S?.title),children:r})}):null,w(`div`,{className:j(`space-y-4`,j(h,x?.body)),style:F(S?.body,O),"aria-busy":K?`true`:void 0,children:K?L():i}),Ne?w(`div`,{className:j(`modal-action mt-6 flex flex-wrap items-center justify-end gap-2`,j(v,x?.footer)),style:F(S?.footer),children:Ne}):null]})})})]}),Ie=X?X(Fe):Fe,Le=typeof G==`function`?G():G;return Le===!1||Le==null?Ie:w(ee,{to:Le,children:Ie})},V=e=>d(o=>{let c=i(`div`,o);r(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=i(`div`,c);a(c,l),r(l,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,l);a(l,f);let p=i(`h2`,f);a(f,p),r(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(p,s(`# `));let h=t(`rue:slot:anchor`);a(p,h),u(()=>{let t=e.title;v(()=>m(t,p,h))});let g=i(`p`,f);a(f,g),r(g,`m-0 text-sm opacity-70`);let y=t(`rue:slot:anchor`);a(g,y),u(()=>{let t=e.summary;v(()=>m(t,g,y))});let b=t(`rue:component:anchor`);a(c,b),u(()=>{let t=_(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});v(()=>m(t,c,b))});let x=t(`rue:slot:anchor`);return a(c,x),u(()=>{let r=e.tab.value===`preview`?e.preview():d(()=>{let r=n(),i=t(`rue:component:anchor`);return a(r,i),u(()=>{let t=_(E,{className:`mt-2`,lang:`tsx`,code:e.code});v(()=>m(t,r,i))}),r});v(()=>m(r,c,x))}),c}),ne=e=>d(o=>{let c=i(`div`,o);r(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,c);a(c,f),r(f,`table table-zebra`);let p=i(`thead`,f);a(f,p);let h=i(`tr`,p);a(p,h);let g=i(`th`,h);a(h,g),a(g,s(`属性`));let _=i(`th`,h);a(h,_),a(_,s(`说明`));let y=i(`th`,h);a(h,y),a(y,s(`类型`));let b=i(`th`,h);a(h,b),a(b,s(`默认值`));let x=i(`tbody`,f);a(f,x);let ee=t(`rue:list:start`),C=t(`rue:list:end`);a(x,ee),a(x,C);let w=new Map;return u(()=>{w=S({items:e.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:ee,renderItem:(e,r,o,s,c)=>{m(d(()=>{let r=n(),o=i(`tr`,r);a(r,o),u(()=>{l(o,`key`,String(e.prop))});let s=i(`td`,o);a(o,s);let c=i(`code`,s);a(s,c);let d=t(`rue:slot:anchor`);a(c,d),u(()=>{let t=e.prop;v(()=>m(t,c,d))});let f=i(`td`,o);a(o,f);let p=t(`rue:slot:anchor`);a(f,p),u(()=>{let t=e.description;v(()=>m(t,f,p))});let h=i(`td`,o);a(o,h);let g=i(`code`,h);a(h,g);let _=t(`rue:slot:anchor`);a(g,_),u(()=>{let t=e.type;v(()=>m(t,g,_))});let y=i(`td`,o);a(o,y);let b=i(`code`,y);a(y,b);let x=t(`rue:slot:anchor`);return a(b,x),u(()=>{let t=e.defaultValue;v(()=>m(t,b,x))}),r}),r,o)}})}),c}),re=[{prop:`open`,description:`受控显隐。`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpen`,description:`非受控初始打开状态。`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容。`,type:`any`,defaultValue:`-`},{prop:`footer`,description:"自定义 footer；传 `null` 可隐藏；也支持函数包裹默认 footer。",type:`any | (originNode) => any`,defaultValue:`-`},{prop:`actions`,description:`旧版动作区写法，会保留原有“自定义动作 + 默认关闭按钮”行为。`,type:`any`,defaultValue:`-`},{prop:`onOk / onCancel / onClose`,description:`确认、取消与关闭回调。`,type:`function`,defaultValue:`-`},{prop:`confirmLoading`,description:`让默认确认按钮进入 loading 态。`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`主体切换到骨架占位态，并临时隐藏 footer。`,type:`boolean`,defaultValue:`false`},{prop:`okText / cancelText / okType`,description:`默认 footer 的按钮文案与确认按钮类型。`,type:`any / any / ButtonType`,defaultValue:"`确定` / 自动 / `primary`"},{prop:`width / className`,description:"设置 modal-box 宽度；`className` 仍直接追加到 box。",type:`string | number / string`,defaultValue:`-`},{prop:`rootStyle / wrapClassName / wrapProps / maskClassName / maskStyle`,description:"分别定制根层、wrapper 和遮罩层；`mask={false}` 时不会渲染遮罩节点。",type:`style / string / object / string / style`,defaultValue:`-`},{prop:`centered`,description:`垂直居中。`,type:`boolean`,defaultValue:`false`},{prop:`mask / maskClosable / keyboard`,description:`控制遮罩显示、点击遮罩关闭与 ESC 关闭。`,type:`boolean`,defaultValue:`true / true / true`},{prop:`closable / closeIcon`,description:`右上角关闭按钮与自定义关闭图标。`,type:`boolean / any`,defaultValue:`true / 默认图标`},{prop:`forceRender / destroyOnHidden`,description:`控制关闭后是否保留内容挂载。`,type:`boolean / boolean`,defaultValue:`false / true`},{prop:`destroyOnClose / getContainer`,description:`兼容旧别名，并支持通过 Teleport 把弹层渲染到指定容器。`,type:`boolean / string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`- / false`},{prop:`bodyClassName / headerClassName / footerClassName`,description:`分别定制头部、主体、底部区域类名。`,type:`string`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义分区覆盖 root/mask/wrapper/container/box/header/title/body/footer/close。`,type:`object`,defaultValue:`-`},{prop:`modalRender`,description:`接管最终弹层节点的二次包裹。`,type:`(node) => any`,defaultValue:`-`},{prop:`afterOpenChange / afterClose`,description:`显隐变化后的钩子。`,type:`function`,defaultValue:`-`}],H=()=>{let{tabBasic:e,tabMaskless:c,tabActions:f,tabWide:p,tabAsync:y,tabFooterRender:S,tabKeepMounted:ee,basicOpen:E,masklessOpen:O,actionsOpen:k,wideOpen:A,asyncOpen:j,asyncLoading:M,asyncStatus:N,renderOpen:P,guardCount:F,keepMountedOpen:I}=x(`useSetup:0:0`,()=>h(()=>({tabBasic:x(`ref:1:0`,()=>g(`preview`)),tabMaskless:x(`ref:1:1`,()=>g(`preview`)),tabActions:x(`ref:1:2`,()=>g(`preview`)),tabWide:x(`ref:1:3`,()=>g(`preview`)),tabAsync:x(`ref:1:4`,()=>g(`preview`)),tabFooterRender:x(`ref:1:5`,()=>g(`preview`)),tabKeepMounted:x(`ref:1:6`,()=>g(`preview`)),basicOpen:x(`ref:1:7`,()=>g(!1)),masklessOpen:x(`ref:1:8`,()=>g(!1)),actionsOpen:x(`ref:1:9`,()=>g(!1)),wideOpen:x(`ref:1:10`,()=>g(!1)),asyncOpen:x(`ref:1:11`,()=>g(!1)),asyncLoading:x(`ref:1:12`,()=>g(!1)),asyncStatus:x(`ref:1:13`,()=>g(`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`)),renderOpen:x(`ref:1:14`,()=>g(!1)),guardCount:x(`ref:1:15`,()=>g(0)),keepMountedOpen:x(`ref:1:16`,()=>g(!1))})));return d(h=>{let g=n(),x=t(`rue:component:anchor`);return a(g,x),m(_(T,{children:d(()=>{let d=n(),h=i(`div`,d);a(d,h),r(h,`max-w-none prose prose-sm md:prose-base`);let g=i(`h1`,h);a(h,g),a(g,s(`Modal 模态框`));let x=i(`p`,h);a(h,x),r(x,`text-sm mt-3 mb-3`),a(x,s(`Modal 现在保持 Rue 自己的视觉风格，同时补齐了更完整的显隐控制、默认 footer、异步确认、遮罩交互、挂载策略与 root/mask/wrapper 级别的语义化定制能力。`));let T=i(`div`,h);a(h,T),r(T,`text-sm flex flex-wrap gap-4`);let L=i(`a`,T);a(T,L),l(L,`href`,`https://daisyui.com/components/modal/`),l(L,`target`,`_blank`),a(L,s(`查看 Modal 静态样式`));let te=t(`rue:component:anchor`);a(h,te),u(()=>{let t=_(V,{title:`Controlled modal`,summary:"保留原有受控用法：通过 `open` 和 `onClose` 管理显隐，默认 footer 会自动提供关闭按钮。",tab:e,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-basic-open`,onClick:()=>{E.value=!0},children:`Open modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`点击按钮后会显示受控模态框，并通过默认关闭按钮或右上角关闭图标收起。`}),w(B,{open:E.value,title:`Basic modal`,onClose:()=>{E.value=!1},children:w(`p`,{className:`py-2`,children:`Press the close button below to dismiss this modal.`})})]})}),code:`const basicOpen = ref(false)

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
</Modal>`});v(()=>m(t,h,te))});let R=t(`rue:component:anchor`);a(h,R),u(()=>{let e=_(V,{title:`Maskless modal and layer hooks`,summary:"`mask={false}` 会真正移除遮罩层；需要精细控制时可继续配合 `rootStyle`、`wrapClassName` 与语义化 `classNames/styles`。",tab:c,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`warning`,className:`w-fit`,"data-testid":`modal-maskless-open`,onClick:()=>{O.value=!0},children:`Open without mask`}),w(`p`,{className:`text-sm text-base-content/70`,children:`当前示例关闭了遮罩视觉，因此背景保持可见，点击外层空白区域也不会触发关闭。`}),w(B,{open:O.value,mask:!1,width:680,rootStyle:{backdropFilter:`blur(2px)`},wrapClassName:`items-end sm:items-center`,classNames:{container:`max-w-3xl`,box:`border border-base-300 shadow-2xl`,body:`space-y-3`},title:`Inspector panel`,footer:(e,{CancelBtn:t})=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`No mask layer is rendered in this example.`}),w(`div`,{className:`flex justify-end`,children:w(t,{children:`关闭面板`})})]}),onClose:()=>{O.value=!1},children:C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm text-base-content/80`,children:[w(`div`,{className:`font-medium`,children:`Layer summary`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:"`rootStyle` 作用在最外层固定定位节点"}),w(`li`,{children:"`wrapClassName` 作用在可滚动的交互 wrapper"}),w(`li`,{children:"`classNames.container` 和 `classNames.box` 分别控制容器与面板"})]})]})})]})}),code:`const masklessOpen = ref(false)

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
</Modal>`});v(()=>m(e,h,R))});let z=t(`rue:component:anchor`);a(h,z),u(()=>{let e=_(V,{title:`Modal with custom actions`,summary:"旧版 `actions` 仍然可用，适合把自定义按钮组插到 footer 里，同时保留默认关闭按钮。",tab:f,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`secondary`,className:`w-fit`,"data-testid":`modal-actions-open`,onClick:()=>{k.value=!0},children:`Review actions`}),w(`p`,{className:`text-sm text-base-content/70`,children:"可以继续使用 `actions` 兼容旧 demo，同时逐步迁移到新的 `footer` API。"}),w(B,{open:k.value,title:`Delete this draft?`,actions:C(`div`,{className:`join`,"data-testid":`modal-actions-group`,children:[w(`button`,{className:`btn join-item btn-ghost`,onClick:()=>{k.value=!1},children:`Cancel`}),w(`button`,{className:`btn join-item btn-error`,"data-testid":`modal-actions-confirm`,onClick:()=>{k.value=!1},children:`Delete`})]}),onClose:()=>{k.value=!1},children:w(`p`,{className:`py-2`,children:`This action removes the draft from your local workspace.`})})]})}),code:`const actionsOpen = ref(false)

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
</Modal>`});v(()=>m(e,h,z))});let H=t(`rue:component:anchor`);a(h,H),u(()=>{let e=_(V,{title:`Wide modal box`,summary:"原有宽弹层示例保留，同时也可以配合 `width` 使用更偏语义化的尺寸写法。",tab:p,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`accent`,className:`w-fit`,"data-testid":`modal-wide-open`,onClick:()=>{A.value=!0},children:`Open wide modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"通过 `className` 直接扩展 modal-box 宽度和排版，旧写法完全保留。"}),w(B,{open:A.value,title:`Release summary`,className:`w-11/12 max-w-5xl`,onClose:()=>{A.value=!1},children:C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Highlights`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Routing docs refreshed, design pages expanded, and runtime tests tightened.`})]}),C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Notes`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Use modal width utilities on className when the default box is too narrow.`})]})]})})]})}),code:`const wideOpen = ref(false)

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
</Modal>`});v(()=>m(e,h,H))});let ie=t(`rue:component:anchor`);a(h,ie),u(()=>{let e=_(V,{title:`Default footer with async confirm`,summary:"更贴近常见业务弹窗的用法：给 `onOk/onCancel` 和 `confirmLoading` 即可得到默认确认 footer。",tab:y,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-async-open`,onClick:()=>{N.value=`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`,j.value=!0},children:`Launch publish flow`}),w(`p`,{className:`text-sm text-base-content/70`,children:"默认 footer 会自动生成取消/确认按钮，并把 `confirmLoading` 映射到确认按钮。"}),w(B,{open:j.value,title:`Publish this release?`,okText:`开始发布`,cancelText:`稍后处理`,confirmLoading:M.value,onCancel:()=>{M.value=!1,j.value=!1},onOk:()=>{N.value=`正在校验变更、生成产物并同步部署状态...`,M.value=!0,setTimeout(()=>{M.value=!1,j.value=!1,N.value=`发布完成，当前版本已经推送到 staging。`},1200)},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`p`,{className:`m-0 text-sm text-base-content/80`,children:N.value}),C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm`,children:[w(`div`,{className:`font-medium`,children:`Release checklist`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:`Tag 已创建`}),w(`li`,{children:`Changelog 已同步`}),w(`li`,{children:`Preview 环境检查通过`})]})]})]})})]})}),code:`const asyncOpen = ref(false)
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
</Modal>`});v(()=>m(e,h,ie))});let ae=t(`rue:component:anchor`);a(h,ae),u(()=>{let e=_(V,{title:`Footer render and centered layout`,summary:"通过 `centered`、`width`、语义化 className 和 `footer(originNode => ...)`，可以在不改动视觉体系的前提下重组结构。",tab:S,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`info`,className:`w-fit`,onClick:()=>{P.value=!0},children:`Open settings modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"`footer` 支持函数式包裹默认 footer，适合在两端插入说明信息或额外操作。"}),C(B,{open:P.value,centered:!0,width:720,title:`Workspace settings`,headerClassName:`border-b border-base-300 pb-3`,bodyClassName:`pt-1`,footer:e=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`Changes are scoped to the current workspace.`}),w(`div`,{className:`flex flex-wrap justify-end gap-2`,children:e})]}),okText:`保存设置`,cancelText:`关闭`,onCancel:()=>{P.value=!1},onOk:()=>{F.value+=1,P.value=!1},children:[C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Environment`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Staging`}),w(`option`,{children:`Production`})]})]}),C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Deploy channel`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Web`}),w(`option`,{children:`Desktop`})]})]})]}),C(`p`,{className:`mb-0 text-sm text-base-content/70`,children:[`Saved count: `,F.value]})]})]})}),code:`<Modal
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
</Modal>`});v(()=>m(e,h,ae))});let oe=t(`rue:component:anchor`);a(h,oe),u(()=>{let e=_(V,{title:`Keep mounted content`,summary:"需要在关闭后保留 DOM 状态时，可以开启 `forceRender` + `destroyOnHidden={false}`。",tab:ee,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`success`,className:`w-fit`,onClick:()=>{I.value=!0},children:`Open draft modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`在文本框里输入内容，关闭后再次打开，未提交的草稿仍会保留。`}),w(B,{open:I.value,title:`Draft note`,forceRender:!0,destroyOnHidden:!1,maskClosable:!1,keyboard:!1,footer:null,onClose:()=>{I.value=!1},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`textarea`,{className:`textarea textarea-bordered min-h-32 w-full`,defaultValue:`This textarea keeps its DOM state after the modal is hidden.`}),w(`div`,{className:`alert alert-info text-sm`,children:"这里禁用了遮罩点击和 ESC 关闭，只保留右上角关闭按钮，方便演示 `maskClosable` 与 `keyboard`。"})]})})]})}),code:`<Modal
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
</Modal>`});v(()=>m(e,h,oe))});let se=i(`h2`,h);a(h,se),l(se,`id`,`modal-api`),a(se,s(`API`));let U=i(`p`,h);a(h,U),a(U,s("以下列出当前设计页覆盖到的主要 `Modal` 能力。"));let W=t(`rue:component:anchor`);a(h,W),u(()=>{let e=_(ne,{rows:re});v(()=>m(e,h,W))});let ce=i(`h2`,h);a(h,ce),a(ce,s(`FAQ`));let G=i(`p`,h);a(h,G);let K=i(`strong`,G);a(G,K),a(K,s("什么时候用 `actions`，什么时候用 `footer`？")),a(G,s("如果你在迁移旧代码，直接继续用 `actions` 即可；新代码优先用 `footer`，它可以完全接管 footer，也可以用函数包装默认 footer。"));let q=i(`p`,h);a(h,q);let J=i(`strong`,q);a(q,J),a(J,s("`className`、`bodyClassName` 和 `classNames` 怎么选？")),a(q,s("`className` 仍直接追加到"));let Y=i(`code`,q);a(q,Y),a(Y,s(`modal-box`)),a(q,s(`；只想改某个区域时优先用`));let le=i(`code`,q);a(q,le),a(le,s(`bodyClassName/headerClassName/footerClassName`)),a(q,s(`；需要更细粒度统一配置时再用`));let ue=b(q);a(q,ue),o(ue,` `);let de=i(`code`,q);a(q,de),a(de,s(`classNames`)),a(q,s(`。`));let X=i(`p`,h);a(h,X);let fe=i(`strong`,X);a(X,fe),a(fe,s("为什么保留 `destroyOnHidden` 默认关闭即卸载？")),a(X,s(`这是为了兼容 Rue 当前组件行为；当你确实需要保留 DOM 状态时，再显式开启`));let Z=i(`code`,X);a(X,Z),a(Z,s(`forceRender`)),a(X,s(`与`));let pe=i(`code`,X);return a(X,pe),a(pe,s(`destroyOnHidden={false}`)),a(X,s(`。`)),d})}),g,x),g})};export{H as default};