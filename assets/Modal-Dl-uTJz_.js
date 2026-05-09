import{F as e,H as t,I as n,L as r,N as i,P as a,S as o,W as s,Y as c,_ as l,c as u,d,ft as f,j as p,pt as m,rt as h,t as g,u as _,ut as v,x as y}from"./vapor-runtime-CKndxKFn.js";import{a as b,n as x}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as S}from"./Teleport-DBllQu8z.js";import{n as C,t as w}from"./src-CqIWk1va.js";import{n as T}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as E}from"./Code-B1JFTu6m.js";import{t as D}from"./button-Doo7Wv3K.js";import{t as O}from"./tabs-BbiCzXqJ.js";var k=0,A=``,j=(...e)=>e.filter(Boolean).join(` `),M=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),N=e=>e.startsWith(`--`)?e:e.includes(`-`)?M(e):e,P=e=>{if(!e)return;let t={};return typeof e==`string`?(e.split(`;`).map(e=>e.trim()).filter(Boolean).forEach(e=>{let n=e.indexOf(`:`);if(n===-1)return;let r=e.slice(0,n).trim(),i=e.slice(n+1).trim();!r||!i||(t[N(r)]=i)}),Object.keys(t).length>0?t:void 0):(Object.entries(e).forEach(([e,n])=>{n!=null&&(t[N(e)]=n)}),Object.keys(t).length>0?t:void 0)},F=(...e)=>{let t={};return e.forEach(e=>{let n=P(e);n&&Object.assign(t,n)}),Object.keys(t).length>0?t:void 0},ee=e=>{if(e!=null)return typeof e==`number`?`${e}px`:e},I=()=>C(`div`,{className:`space-y-3`,"data-rue-modal-loading":`true`,children:[w(`div`,{className:`skeleton h-4 w-2/5`}),w(`div`,{className:`skeleton h-4 w-full`}),w(`div`,{className:`skeleton h-4 w-5/6`}),w(`div`,{className:`skeleton h-24 w-full`})]}),te=()=>w(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,className:`size-4`,"aria-hidden":`true`,children:w(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M6 6l12 12M18 6 6 18`})}),L=()=>{typeof document>`u`||(k===0&&(A=document.documentElement.style.overflow,document.documentElement.style.overflow=`hidden`),k+=1)},R=()=>{typeof document>`u`||k===0||(--k,k===0&&(document.documentElement.style.overflow=A))},z=({open:e,defaultOpen:t=!1,title:n,children:r,actions:i,footer:a,className:s,rootClassName:c,rootStyle:u,wrapClassName:p,wrapProps:m,bodyClassName:g,headerClassName:_,footerClassName:v,maskClassName:b,classNames:x,styles:T,width:E,style:O,bodyStyle:k,maskStyle:A,centered:M=!1,closable:N=!0,closeIcon:P,keyboard:z=!0,mask:B=!0,maskClosable:ne=!0,forceRender:re=!1,destroyOnClose:ie,destroyOnHidden:ae=!0,confirmLoading:oe=!1,okText:se=`确定`,cancelText:V,okType:ce=`primary`,okButtonProps:H,cancelButtonProps:U,zIndex:W,getContainer:G,loading:K=!1,onOk:q,onCancel:J,onClose:Y,onOpenChange:le,afterClose:ue,afterOpenChange:X,modalRender:de,...fe})=>{let Z=h(t),pe=h(t),Q=h(!1),me=typeof e==`boolean`,$=typeof e==`boolean`?e:Z.value,he=h($),ge=h(z),_e=e=>{me||(Z.value=e),le&&le(e)},ve=e=>{e&&typeof e.preventDefault==`function`&&e.preventDefault(),J&&e&&J(e),Y&&Y(e),_e(!1)},ye=e=>{oe||q&&q(e)};if(y(()=>{if($&&(L(),Q.value=!0),typeof window>`u`)return;let e=e=>{!he.value||!ge.value||e.key!==`Escape`||ve(e)};window.addEventListener(`keydown`,e),o(()=>{window.removeEventListener(`keydown`,e)})}),f(()=>$,e=>{he.value=e,e?(pe.value=!0,Q.value||=(L(),!0)):Q.value&&(R(),Q.value=!1,ue&&ue()),X&&X(e)}),f(()=>z,e=>{ge.value=e},{immediate:!0}),f(()=>t,e=>{me||(Z.value=!!e)},{immediate:!0}),o(()=>{Q.value&&=(R(),!1)}),!($||re||!(ae??ie??!0)&&pe.value))return null;let{className:be,style:xe,onClick:Se,...Ce}=m??{},we=V??(q||H?`取消`:`关闭`),Te=a===void 0&&i!=null,Ee=!Te&&(q!=null||H!=null),De=Te||J!=null||Y!=null||Ee,Oe=e=>{let{children:t,onClick:n,...r}=e??{};return l(D,{...U,...r,onClick:e=>{n&&n(e),!e.defaultPrevented&&ve(e)},disabled:r.disabled??U?.disabled},t??U?.children??we)},ke=e=>{let{children:t,onClick:n,...r}=e??{};return l(D,{...H,...r,type:r.type??H?.type??ce,loading:r.loading??H?.loading??oe,onClick:e=>{n&&n(e),!e.defaultPrevented&&ye(e)}},t??H?.children??se)},Ae=e=>Oe(e),je=e=>ke(e),Me=C(d,{children:[Te?i:null,De?Oe():null,Ee?ke():null]}),Ne=K||a===null||a===!1?null:typeof a==`function`?a(Me,{OkBtn:je,CancelBtn:Ae}):a??Me,Pe=e=>{Se&&Se(e),!e.defaultPrevented&&(!B||!ne||e.target!==e.currentTarget||ve(e))},Fe=C(`div`,{...fe,"aria-hidden":$?void 0:`true`,className:j(`modal ${$?`modal-open`:``} bg-transparent`.trim(),j(c,j(x?.root,$?void 0:`pointer-events-none`))),style:F(T?.root,u,W==null?void 0:{zIndex:W}),"data-rue-modal-root":`true`,children:[B?w(`div`,{"aria-hidden":`true`,className:j(`absolute inset-0 bg-base-content/40`,j(b,x?.mask)),style:F(T?.mask,A),"data-rue-modal-mask":`true`}):null,w(`div`,{...Ce,className:j(j(`absolute inset-0 overflow-y-auto px-4 py-6 sm:px-6 ${M?`flex items-center justify-center`:`flex items-start justify-center sm:items-center`}`,p),j(be,x?.wrapper)),style:F(T?.wrapper,xe),onClick:Pe,"data-rue-modal-wrapper":`true`,children:w(`div`,{className:j(`relative flex w-full justify-center`,x?.container),style:F(T?.container),"data-rue-modal-container":`true`,children:C(`div`,{role:`dialog`,"aria-modal":$?`true`:`false`,"aria-hidden":$?void 0:`true`,className:j(j(`modal-box relative`,s),j(x?.box,$?void 0:`pointer-events-none`)),style:F(T?.box,O,E==null?void 0:{width:ee(E)}),onClick:e=>{e.stopPropagation()},"data-rue-modal-box":`true`,children:[N?w(`button`,{type:`button`,"aria-label":`关闭`,className:j(`btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-10`,x?.close),style:F(T?.close),onClick:e=>ve(e),children:P??w(te,{})}):null,n?w(`div`,{className:j(`mb-4 pr-10`,j(_,x?.header)),style:F(T?.header),children:w(`div`,{className:j(`text-lg font-semibold leading-6`,x?.title),style:F(T?.title),children:n})}):null,w(`div`,{className:j(`space-y-4`,j(g,x?.body)),style:F(T?.body,k),"aria-busy":K?`true`:void 0,children:K?I():r}),Ne?w(`div`,{className:j(`modal-action mt-6 flex flex-wrap items-center justify-end gap-2`,j(v,x?.footer)),style:F(T?.footer),children:Ne}):null]})})})]}),Ie=de?de(Fe):Fe,Le=typeof G==`function`?G():G;return Le===!1||Le==null?Ie:w(S,{to:Le,children:Ie})},B=({title:t,summary:o,tab:l,preview:d,code:f})=>_(()=>{let h=e(`div`);s(h,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);p(h,v),s(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);p(v,y);let b=e(`h2`);p(y,b),s(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),p(b,n(`# `));let x=r(b);p(b,x),m(()=>{c(x,t)});let S=e(`p`);p(y,S),s(S,`m-0 text-sm opacity-70`);let C=r(S);p(S,C),m(()=>{c(C,o)});let w=i(`rue:component:anchor`);p(h,w),m(()=>{u(g(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:l.value,onChange:e=>l.value=e,className:`mb-3 mt-4`}),h,w)});let T=i(`rue:slot:anchor`);return p(h,T),m(()=>{u(l.value===`preview`?d():_(()=>{let e=a(),t=i(`rue:component:anchor`);return p(e,t),m(()=>{u(g(E,{className:`mt-2`,lang:`tsx`,code:f}),e,t)}),e}),h,T)}),h}),ne=({rows:r})=>_(()=>{let o=e(`div`);s(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=e(`table`);p(o,c),s(c,`table table-zebra`);let l=e(`thead`);p(c,l);let d=e(`tr`);p(l,d);let f=e(`th`);p(d,f),p(f,n(`属性`));let h=e(`th`);p(d,h),p(h,n(`说明`));let g=e(`th`);p(d,g),p(g,n(`类型`));let v=e(`th`);p(d,v),p(v,n(`默认值`));let y=e(`tbody`);p(c,y);let b=i(`rue:list:start`),S=i(`rue:list:end`);p(y,b),p(y,S);let C=new Map;return m(()=>{C=x({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:y,before:S,singleRoot:!0,start:b,renderItem:(n,r,o,s,c)=>{u(_(()=>{let r=a(),o=e(`tr`);p(r,o),m(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);p(o,s);let c=e(`code`);p(s,c);let l=i(`rue:slot:anchor`);p(c,l),m(()=>{let e=n.prop;u(e,c,l)});let d=e(`td`);p(o,d);let f=i(`rue:slot:anchor`);p(d,f),m(()=>{let e=n.description;u(e,d,f)});let h=e(`td`);p(o,h);let g=e(`code`);p(h,g);let _=i(`rue:slot:anchor`);p(g,_),m(()=>{let e=n.type;u(e,g,_)});let v=e(`td`);p(o,v);let y=e(`code`);p(v,y);let b=i(`rue:slot:anchor`);return p(y,b),m(()=>{let e=n.defaultValue;u(e,y,b)}),r}),r,o)}})}),o}),re=[{prop:`open`,description:`受控显隐。`,type:`boolean`,defaultValue:`false`},{prop:`defaultOpen`,description:`非受控初始打开状态。`,type:`boolean`,defaultValue:`false`},{prop:`title`,description:`标题区域内容。`,type:`any`,defaultValue:`-`},{prop:`footer`,description:"自定义 footer；传 `null` 可隐藏；也支持函数包裹默认 footer。",type:`any | (originNode) => any`,defaultValue:`-`},{prop:`actions`,description:`旧版动作区写法，会保留原有“自定义动作 + 默认关闭按钮”行为。`,type:`any`,defaultValue:`-`},{prop:`onOk / onCancel / onClose`,description:`确认、取消与关闭回调。`,type:`function`,defaultValue:`-`},{prop:`confirmLoading`,description:`让默认确认按钮进入 loading 态。`,type:`boolean`,defaultValue:`false`},{prop:`loading`,description:`主体切换到骨架占位态，并临时隐藏 footer。`,type:`boolean`,defaultValue:`false`},{prop:`okText / cancelText / okType`,description:`默认 footer 的按钮文案与确认按钮类型。`,type:`any / any / ButtonType`,defaultValue:"`确定` / 自动 / `primary`"},{prop:`width / className`,description:"设置 modal-box 宽度；`className` 仍直接追加到 box。",type:`string | number / string`,defaultValue:`-`},{prop:`rootStyle / wrapClassName / wrapProps / maskClassName / maskStyle`,description:"分别定制根层、wrapper 和遮罩层；`mask={false}` 时不会渲染遮罩节点。",type:`style / string / object / string / style`,defaultValue:`-`},{prop:`centered`,description:`垂直居中。`,type:`boolean`,defaultValue:`false`},{prop:`mask / maskClosable / keyboard`,description:`控制遮罩显示、点击遮罩关闭与 ESC 关闭。`,type:`boolean`,defaultValue:`true / true / true`},{prop:`closable / closeIcon`,description:`右上角关闭按钮与自定义关闭图标。`,type:`boolean / any`,defaultValue:`true / 默认图标`},{prop:`forceRender / destroyOnHidden`,description:`控制关闭后是否保留内容挂载。`,type:`boolean / boolean`,defaultValue:`false / true`},{prop:`destroyOnClose / getContainer`,description:`兼容旧别名，并支持通过 Teleport 把弹层渲染到指定容器。`,type:`boolean / string | HTMLElement | (() => HTMLElement) | false`,defaultValue:`- / false`},{prop:`bodyClassName / headerClassName / footerClassName`,description:`分别定制头部、主体、底部区域类名。`,type:`string`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义分区覆盖 root/mask/wrapper/container/box/header/title/body/footer/close。`,type:`object`,defaultValue:`-`},{prop:`modalRender`,description:`接管最终弹层节点的二次包裹。`,type:`(node) => any`,defaultValue:`-`},{prop:`afterOpenChange / afterClose`,description:`显隐变化后的钩子。`,type:`function`,defaultValue:`-`}],ie=()=>{let{tabBasic:o,tabMaskless:l,tabActions:d,tabWide:f,tabAsync:y,tabFooterRender:x,tabKeepMounted:S,basicOpen:E,masklessOpen:O,actionsOpen:k,wideOpen:A,asyncOpen:j,asyncLoading:M,asyncStatus:N,renderOpen:P,guardCount:F,keepMountedOpen:ee}=b(`useSetup:0:0`,()=>v(()=>({tabBasic:b(`ref:1:0`,()=>h(`preview`)),tabMaskless:b(`ref:1:1`,()=>h(`preview`)),tabActions:b(`ref:1:2`,()=>h(`preview`)),tabWide:b(`ref:1:3`,()=>h(`preview`)),tabAsync:b(`ref:1:4`,()=>h(`preview`)),tabFooterRender:b(`ref:1:5`,()=>h(`preview`)),tabKeepMounted:b(`ref:1:6`,()=>h(`preview`)),basicOpen:b(`ref:1:7`,()=>h(!1)),masklessOpen:b(`ref:1:8`,()=>h(!1)),actionsOpen:b(`ref:1:9`,()=>h(!1)),wideOpen:b(`ref:1:10`,()=>h(!1)),asyncOpen:b(`ref:1:11`,()=>h(!1)),asyncLoading:b(`ref:1:12`,()=>h(!1)),asyncStatus:b(`ref:1:13`,()=>h(`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`)),renderOpen:b(`ref:1:14`,()=>h(!1)),guardCount:b(`ref:1:15`,()=>h(0)),keepMountedOpen:b(`ref:1:16`,()=>h(!1))})));return _(()=>{let h=a(),v=i(`rue:component:anchor`);return p(h,v),u(g(T,{children:_(()=>{let h=a(),_=e(`div`);p(h,_),s(_,`max-w-none prose prose-sm md:prose-base`);let v=e(`h1`);p(_,v),p(v,n(`Modal 模态框`));let b=e(`p`);p(_,b),s(b,`text-sm mt-3 mb-3`),p(b,n(`Modal 现在保持 Rue 自己的视觉风格，同时补齐了更完整的显隐控制、默认 footer、异步确认、遮罩交互、挂载策略与 root/mask/wrapper 级别的语义化定制能力。`));let T=e(`div`);p(_,T),s(T,`text-sm flex flex-wrap gap-4`);let I=e(`a`);p(T,I),t(I,`href`,`https://daisyui.com/components/modal/`),t(I,`target`,`_blank`),p(I,n(`查看 Modal 静态样式`));let te=i(`rue:component:anchor`);p(_,te),m(()=>{u(g(B,{title:`Controlled modal`,summary:"保留原有受控用法：通过 `open` 和 `onClose` 管理显隐，默认 footer 会自动提供关闭按钮。",tab:o,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-basic-open`,onClick:()=>{E.value=!0},children:`Open modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`点击按钮后会显示受控模态框，并通过默认关闭按钮或右上角关闭图标收起。`}),w(z,{open:E.value,title:`Basic modal`,onClose:()=>{E.value=!1},children:w(`p`,{className:`py-2`,children:`Press the close button below to dismiss this modal.`})})]})}),code:`const basicOpen = ref(false)

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
</Modal>`}),_,te)});let L=i(`rue:component:anchor`);p(_,L),m(()=>{u(g(B,{title:`Maskless modal and layer hooks`,summary:"`mask={false}` 会真正移除遮罩层；需要精细控制时可继续配合 `rootStyle`、`wrapClassName` 与语义化 `classNames/styles`。",tab:l,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`warning`,className:`w-fit`,"data-testid":`modal-maskless-open`,onClick:()=>{O.value=!0},children:`Open without mask`}),w(`p`,{className:`text-sm text-base-content/70`,children:`当前示例关闭了遮罩视觉，因此背景保持可见，点击外层空白区域也不会触发关闭。`}),w(z,{open:O.value,mask:!1,width:680,rootStyle:{backdropFilter:`blur(2px)`},wrapClassName:`items-end sm:items-center`,classNames:{container:`max-w-3xl`,box:`border border-base-300 shadow-2xl`,body:`space-y-3`},title:`Inspector panel`,footer:(e,{CancelBtn:t})=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`No mask layer is rendered in this example.`}),w(`div`,{className:`flex justify-end`,children:w(t,{children:`关闭面板`})})]}),onClose:()=>{O.value=!1},children:C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm text-base-content/80`,children:[w(`div`,{className:`font-medium`,children:`Layer summary`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:"`rootStyle` 作用在最外层固定定位节点"}),w(`li`,{children:"`wrapClassName` 作用在可滚动的交互 wrapper"}),w(`li`,{children:"`classNames.container` 和 `classNames.box` 分别控制容器与面板"})]})]})})]})}),code:`const masklessOpen = ref(false)

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
</Modal>`}),_,L)});let R=i(`rue:component:anchor`);p(_,R),m(()=>{u(g(B,{title:`Modal with custom actions`,summary:"旧版 `actions` 仍然可用，适合把自定义按钮组插到 footer 里，同时保留默认关闭按钮。",tab:d,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`secondary`,className:`w-fit`,"data-testid":`modal-actions-open`,onClick:()=>{k.value=!0},children:`Review actions`}),w(`p`,{className:`text-sm text-base-content/70`,children:"可以继续使用 `actions` 兼容旧 demo，同时逐步迁移到新的 `footer` API。"}),w(z,{open:k.value,title:`Delete this draft?`,actions:C(`div`,{className:`join`,"data-testid":`modal-actions-group`,children:[w(`button`,{className:`btn join-item btn-ghost`,onClick:()=>{k.value=!1},children:`Cancel`}),w(`button`,{className:`btn join-item btn-error`,"data-testid":`modal-actions-confirm`,onClick:()=>{k.value=!1},children:`Delete`})]}),onClose:()=>{k.value=!1},children:w(`p`,{className:`py-2`,children:`This action removes the draft from your local workspace.`})})]})}),code:`const actionsOpen = ref(false)

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
</Modal>`}),_,R)});let ie=i(`rue:component:anchor`);p(_,ie),m(()=>{u(g(B,{title:`Wide modal box`,summary:"原有宽弹层示例保留，同时也可以配合 `width` 使用更偏语义化的尺寸写法。",tab:f,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`accent`,className:`w-fit`,"data-testid":`modal-wide-open`,onClick:()=>{A.value=!0},children:`Open wide modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"通过 `className` 直接扩展 modal-box 宽度和排版，旧写法完全保留。"}),w(z,{open:A.value,title:`Release summary`,className:`w-11/12 max-w-5xl`,onClose:()=>{A.value=!1},children:C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Highlights`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Routing docs refreshed, design pages expanded, and runtime tests tightened.`})]}),C(`div`,{className:`rounded-box bg-base-200 p-4`,children:[w(`h3`,{className:`mt-0 text-base font-semibold`,children:`Notes`}),w(`p`,{className:`mb-0 text-sm text-base-content/70`,children:`Use modal width utilities on className when the default box is too narrow.`})]})]})})]})}),code:`const wideOpen = ref(false)

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
</Modal>`}),_,ie)});let ae=i(`rue:component:anchor`);p(_,ae),m(()=>{u(g(B,{title:`Default footer with async confirm`,summary:"更接近 antd 的常用能力：给 `onOk/onCancel` 和 `confirmLoading` 即可得到默认确认 footer。",tab:y,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`primary`,className:`w-fit`,"data-testid":`modal-async-open`,onClick:()=>{N.value=`点击确认按钮后会进入 1.2 秒 loading，并在完成后关闭。`,j.value=!0},children:`Launch publish flow`}),w(`p`,{className:`text-sm text-base-content/70`,children:"默认 footer 会自动生成取消/确认按钮，并把 `confirmLoading` 映射到确认按钮。"}),w(z,{open:j.value,title:`Publish this release?`,okText:`开始发布`,cancelText:`稍后处理`,confirmLoading:M.value,onCancel:()=>{M.value=!1,j.value=!1},onOk:()=>{N.value=`正在校验变更、生成产物并同步部署状态...`,M.value=!0,setTimeout(()=>{M.value=!1,j.value=!1,N.value=`发布完成，当前版本已经推送到 staging。`},1200)},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`p`,{className:`m-0 text-sm text-base-content/80`,children:N.value}),C(`div`,{className:`rounded-box bg-base-200 p-4 text-sm`,children:[w(`div`,{className:`font-medium`,children:`Release checklist`}),C(`ul`,{className:`mt-2 mb-0 list-disc pl-5`,children:[w(`li`,{children:`Tag 已创建`}),w(`li`,{children:`Changelog 已同步`}),w(`li`,{children:`Preview 环境检查通过`})]})]})]})})]})}),code:`const asyncOpen = ref(false)
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
</Modal>`}),_,ae)});let oe=i(`rue:component:anchor`);p(_,oe),m(()=>{u(g(B,{title:`Footer render and centered layout`,summary:"通过 `centered`、`width`、语义化 className 和 `footer(originNode => ...)`，可以在不改动视觉体系的前提下重组结构。",tab:x,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`info`,className:`w-fit`,onClick:()=>{P.value=!0},children:`Open settings modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:"`footer` 支持函数式包裹默认 footer，适合在两端插入说明信息或额外操作。"}),C(z,{open:P.value,centered:!0,width:720,title:`Workspace settings`,headerClassName:`border-b border-base-300 pb-3`,bodyClassName:`pt-1`,footer:e=>C(`div`,{className:`flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,children:[w(`div`,{className:`text-sm text-base-content/60`,children:`Changes are scoped to the current workspace.`}),w(`div`,{className:`flex flex-wrap justify-end gap-2`,children:e})]}),okText:`保存设置`,cancelText:`关闭`,onCancel:()=>{P.value=!1},onOk:()=>{F.value+=1,P.value=!1},children:[C(`div`,{className:`grid gap-4 py-2 md:grid-cols-2`,children:[C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Environment`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Staging`}),w(`option`,{children:`Production`})]})]}),C(`label`,{className:`form-control gap-2`,children:[w(`span`,{className:`label-text font-medium`,children:`Deploy channel`}),C(`select`,{className:`select select-bordered`,children:[w(`option`,{children:`Web`}),w(`option`,{children:`Desktop`})]})]})]}),C(`p`,{className:`mb-0 text-sm text-base-content/70`,children:[`Saved count: `,F.value]})]})]})}),code:`<Modal
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
</Modal>`}),_,oe)});let se=i(`rue:component:anchor`);p(_,se),m(()=>{u(g(B,{title:`Keep mounted content`,summary:"需要在关闭后保留 DOM 状态时，可以开启 `forceRender` + `destroyOnHidden={false}`。",tab:S,preview:()=>w(`div`,{className:`card bg-base-100 shadow-sm`,children:C(`div`,{className:`card-body gap-4`,children:[w(D,{color:`success`,className:`w-fit`,onClick:()=>{ee.value=!0},children:`Open draft modal`}),w(`p`,{className:`text-sm text-base-content/70`,children:`在文本框里输入内容，关闭后再次打开，未提交的草稿仍会保留。`}),w(z,{open:ee.value,title:`Draft note`,forceRender:!0,destroyOnHidden:!1,maskClosable:!1,keyboard:!1,footer:null,onClose:()=>{ee.value=!1},children:C(`div`,{className:`space-y-3 py-2`,children:[w(`textarea`,{className:`textarea textarea-bordered min-h-32 w-full`,defaultValue:`This textarea keeps its DOM state after the modal is hidden.`}),w(`div`,{className:`alert alert-info text-sm`,children:"这里禁用了遮罩点击和 ESC 关闭，只保留右上角关闭按钮，方便演示 `maskClosable` 与 `keyboard`。"})]})})]})}),code:`<Modal
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
</Modal>`}),_,se)});let V=e(`h2`);p(_,V),t(V,`id`,`modal-api`),p(V,n(`API`));let ce=e(`p`);p(_,ce),p(ce,n("以下列出当前设计页覆盖到的主要 `Modal` 能力。"));let H=i(`rue:component:anchor`);p(_,H),m(()=>{u(g(ne,{rows:re}),_,H)});let U=e(`h2`);p(_,U),p(U,n(`FAQ`));let W=e(`p`);p(_,W);let G=e(`strong`);p(W,G),p(G,n("什么时候用 `actions`，什么时候用 `footer`？")),p(W,n("如果你在迁移旧代码，直接继续用 `actions` 即可；新代码优先用 `footer`，它可以完全接管 footer，也可以用函数包装默认 footer。"));let K=e(`p`);p(_,K);let q=e(`strong`);p(K,q),p(q,n("`className`、`bodyClassName` 和 `classNames` 怎么选？")),p(K,n("`className` 仍直接追加到"));let J=e(`code`);p(K,J),p(J,n(`modal-box`)),p(K,n(`；只想改某个区域时优先用`));let Y=e(`code`);p(K,Y),p(Y,n(`bodyClassName/headerClassName/footerClassName`)),p(K,n(`；需要更细粒度统一配置时再用`));let le=r(K);p(K,le),c(le,` `);let ue=e(`code`);p(K,ue),p(ue,n(`classNames`)),p(K,n(`。`));let X=e(`p`);p(_,X);let de=e(`strong`);p(X,de),p(de,n("为什么保留 `destroyOnHidden` 默认关闭即卸载？")),p(X,n(`这是为了兼容 Rue 当前组件行为；当你确实需要保留 DOM 状态时，再显式开启`));let fe=e(`code`);p(X,fe),p(fe,n(`forceRender`)),p(X,n(`与`));let Z=e(`code`);return p(X,Z),p(Z,n(`destroyOnHidden={false}`)),p(X,n(`。`)),h})}),h,v),h})};export{ie as default};