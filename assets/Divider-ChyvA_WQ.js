import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,lt as u,pt as d,t as f,u as p}from"./vapor-runtime-D3a-68js.js";import{a as m,n as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as g,t as _}from"./src-BfQKH6_d.js";import{n as v}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./tabs-BgQmsOey.js";var x=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],S=[`solid`,`dashed`,`dotted`],C=e=>!!e&&x.includes(e),w=e=>!!e&&S.includes(e),T=(...e)=>e.filter(Boolean).join(` `),E=e=>{if(typeof e==`number`)return e;if(typeof e==`string`)return/^\d+(\.\d+)?$/.test(e)?Number(e):e},D=e=>{if(!(!e||e===`vertical`))return`divider-horizontal`},O=(e,t,n)=>(e??n??(t?`vertical`:`horizontal`))===`vertical`?`divider-horizontal`:void 0,k=({color:e,variant:t,lineVariant:n,direction:r,orientation:i,type:a,vertical:o,placement:s,titlePlacement:c,orientationMargin:l,dashed:u,plain:d,className:f,contentClassName:p,style:m,contentStyle:h,children:g,...v})=>{let y=e??(C(t)?t:void 0),b=n??(w(t)?t:void 0)??(u?`dashed`:`solid`),x=c??s,S=i||a||o?O(i,o,a):D(r),k=(i??a??(o?`vertical`:`horizontal`))===`vertical`,A=E(l),j=T(`divider`,S,y?`divider-${y}`:void 0,x&&x!==`center`?`divider-${x}`:void 0,b===`dashed`?`before:border-dashed after:border-dashed`:void 0,b===`dotted`?`before:border-dotted after:border-dotted`:void 0,f),M=T(`whitespace-nowrap`,d?`font-normal opacity-80`:void 0,p),N=x===`start`?{marginInlineStart:A,...h}:x===`end`?{marginInlineEnd:A,...h}:h;return _(`div`,{className:j,style:m,role:`separator`,"aria-orientation":k?`vertical`:`horizontal`,...v,children:!k&&g!=null?_(`span`,{className:M,style:N,children:g}):null})},A=o=>p(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=n(`div`);i(s,u),t(u,`flex flex-wrap items-start justify-between gap-3`);let m=n(`div`);i(u,m);let h=n(`h2`);i(m,h),t(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(h,r(`# `));let g=a(`rue:slot:anchor`);i(h,g),c(()=>{let e=o.title;d(()=>l(e,h,g))});let _=a(`rue:slot:anchor`);i(m,_),c(()=>{let r=o.summary?p(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let u=a(`rue:slot:anchor`);return i(s,u),c(()=>{let e=o.summary;d(()=>l(e,s,u))}),r}):``;d(()=>l(r,m,_))});let v=a(`rue:component:anchor`);i(s,v),c(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});d(()=>l(e,s,v))});let x=a(`rue:slot:anchor`);return i(s,x),c(()=>{let t=o.tab.value===`preview`?o.preview():p(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),c(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:o.code});d(()=>l(e,t,n))}),t});d(()=>l(t,s,x))}),s}),j=s=>p(()=>{let u=n(`div`);t(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=n(`table`);i(u,f),t(f,`table table-zebra`);let m=n(`thead`);i(f,m);let g=n(`tr`);i(m,g);let _=n(`th`);i(g,_),i(_,r(`属性`));let v=n(`th`);i(g,v),i(v,r(`说明`));let y=n(`th`);i(g,y),i(y,r(`类型`));let b=n(`th`);i(g,b),i(b,r(`默认值`));let x=n(`tbody`);i(f,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return c(()=>{w=h({items:s.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,s,u,f)=>{l(p(()=>{let r=e(),s=n(`tr`);i(r,s),c(()=>{o(s,`key`,String(t.prop))});let u=n(`td`);i(s,u);let f=n(`code`);i(u,f);let p=a(`rue:slot:anchor`);i(f,p),c(()=>{let e=t.prop;d(()=>l(e,f,p))});let m=n(`td`);i(s,m);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=t.description;d(()=>l(e,m,h))});let g=n(`td`);i(s,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),c(()=>{let e=t.type;d(()=>l(e,_,v))});let y=n(`td`);i(s,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),c(()=>{let e=t.defaultValue;d(()=>l(e,b,x))}),r}),r,s)}})}),u}),M=e=>p(()=>{let r=n(`div`);c(()=>{t(r,String(`grid rounded-box card bg-base-300 place-items-center ${e.className??`h-20`}`.trim()))});let o=a(`rue:slot:anchor`);return i(r,o),c(()=>{let t=e.label;d(()=>l(t,r,o))}),r}),N=[{prop:`children`,description:`分隔线中展示的内容；使用 orientation="vertical" 或 vertical 时不显示。`,type:`any`,defaultValue:`-`},{prop:`color`,description:`推荐写法，设置 Rue 语义色。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`variant`,description:`兼容旧版颜色写法，同时支持 solid / dashed / dotted 线型。`,type:`tone | 'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`lineVariant`,description:`显式设置线型，优先级高于 dashed。`,type:`'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`dashed`,description:`快捷开启虚线。`,type:`boolean`,defaultValue:`false`},{prop:`plain`,description:`让分隔文字更接近正文样式，适合说明性内容。`,type:`boolean`,defaultValue:`false`},{prop:`titlePlacement`,description:`推荐写法，控制文本位于起始、居中或结束位置。`,type:`'start' | 'center' | 'end'`,defaultValue:`center`},{prop:`placement`,description:`兼容旧版 start / end 文本位置。`,type:`'start' | 'end'`,defaultValue:`-`},{prop:`orientationMargin`,description:`仅在 titlePlacement 为 start / end 时生效，控制文本和最近边缘的距离。`,type:`string | number`,defaultValue:`-`},{prop:`orientation`,description:`推荐写法，控制横向或纵向分隔；vertical 模式更适合行内分隔。`,type:`'horizontal' | 'vertical'`,defaultValue:`horizontal`},{prop:`vertical / type`,description:`vertical 是 orientation="vertical" 的快捷写法；type 作为同义别名保留。`,type:`boolean | 'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`direction`,description:`兼容 Rue 旧写法；在横向布局中常用 direction="horizontal" 切换为纵向视觉。`,type:`'vertical' | 'horizontal'`,defaultValue:`-`}],P=()=>{let{tabBasic:h,tabHorizontal:y,tabNoText:b,tabResponsive:x,tabColors:S,tabPositionsV:C,tabPositionsH:w,tabLineVariants:T,tabPlain:E,tabVerticalApi:D,tabMargin:O,tabCustom:P}=m(`useSetup:0:0`,()=>s(()=>({tabBasic:m(`ref:1:0`,()=>u(`preview`)),tabHorizontal:m(`ref:1:1`,()=>u(`preview`)),tabNoText:m(`ref:1:2`,()=>u(`preview`)),tabResponsive:m(`ref:1:3`,()=>u(`preview`)),tabColors:m(`ref:1:4`,()=>u(`preview`)),tabPositionsV:m(`ref:1:5`,()=>u(`preview`)),tabPositionsH:m(`ref:1:6`,()=>u(`preview`)),tabLineVariants:m(`ref:1:7`,()=>u(`preview`)),tabPlain:m(`ref:1:8`,()=>u(`preview`)),tabVerticalApi:m(`ref:1:9`,()=>u(`preview`)),tabMargin:m(`ref:1:10`,()=>u(`preview`)),tabCustom:m(`ref:1:11`,()=>u(`preview`))})));return p(()=>{let s=e(),u=a(`rue:component:anchor`);return i(s,u),l(f(v,{children:p(()=>{let s=e(),u=n(`div`);i(s,u),t(u,`max-w-none prose prose-sm md:prose-base`);let p=n(`h1`);i(u,p),i(p,r(`Divider 分隔线`));let m=n(`p`);i(u,m),t(m,`text-sm mt-3 mb-3`),i(m,r(`分隔线（Divider）用于在内容之间建立轻量层级。Rue 保留原有视觉风格，并补充了更完整的文本位置、线型和垂直分隔能力。`));let v=n(`div`);i(u,v),t(v,`text-sm`);let F=n(`a`);i(v,F),o(F,`href`,`https://daisyui.com/components/divider/`),o(F,`target`,`_blank`),o(F,`rel`,`noreferrer`),i(F,r(`查看 Divider 静态样式`));let I=a(`rue:component:anchor`);i(u,I),c(()=>{let e=f(A,{title:`Divider`,summary:`基础分隔线，保留现有默认用法。`,tab:h,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{children:`OR`}),_(M,{label:`content`})]}),code:`import { Divider } from '@rue-js/design'

<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider>OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});d(()=>l(e,u,I))});let L=a(`rue:component:anchor`);i(u,L),c(()=>{let e=f(A,{title:`Divider horizontal`,summary:`保留 Rue 旧版 direction 用法，在横向布局中展示纵向分隔。`,tab:y,preview:()=>g(`div`,{className:`flex w-full`,children:[_(M,{label:`content`,className:`h-20 grow`}),_(k,{direction:`horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-20 grow`})]}),code:`<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <Divider direction="horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>`});d(()=>l(e,u,L))});let R=a(`rue:component:anchor`);i(u,R),c(()=>{let e=f(A,{title:`Divider with no text`,summary:`没有文字时，Divider 仍可作为纯分隔元素使用。`,tab:b,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{}),_(M,{label:`content`})]}),code:`<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider />
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});d(()=>l(e,u,R))});let z=a(`rue:component:anchor`);i(u,z),c(()=>{let e=f(A,{title:`Responsive Divider`,summary:`继续支持通过 className 结合响应式类切换方向。`,tab:x,preview:()=>g(`div`,{className:`flex w-full flex-col lg:flex-row`,children:[_(M,{label:`content`,className:`h-32 grow`}),_(k,{className:`lg:divider-horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-32 grow`})]}),code:`<div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <Divider className="lg:divider-horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>`});d(()=>l(e,u,z))});let B=a(`rue:component:anchor`);i(u,B),c(()=>{let e=f(A,{title:`Divider with colors`,summary:`现有颜色能力保留，同时推荐新写法使用 color。`,tab:S,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Default`}),_(k,{variant:`neutral`,children:`Neutral`}),_(k,{variant:`primary`,children:`Primary`}),_(k,{variant:`secondary`,children:`Secondary`}),_(k,{variant:`accent`,children:`Accent`}),_(k,{variant:`success`,children:`Success`}),_(k,{variant:`warning`,children:`Warning`}),_(k,{variant:`info`,children:`Info`}),_(k,{variant:`error`,children:`Error`}),_(k,{color:`primary`,children:`Primary by color`})]}),code:`<div className="flex w-full flex-col">
  <Divider>Default</Divider>
  <Divider variant="neutral">Neutral</Divider>
  <Divider variant="primary">Primary</Divider>
  <Divider variant="secondary">Secondary</Divider>
  <Divider variant="accent">Accent</Divider>
  <Divider variant="success">Success</Divider>
  <Divider variant="warning">Warning</Divider>
  <Divider variant="info">Info</Divider>
  <Divider variant="error">Error</Divider>
  <Divider color="primary">Primary by color</Divider>
</div>`});d(()=>l(e,u,B))});let V=a(`rue:component:anchor`);i(u,V),c(()=>{let e=f(A,{title:`Divider in different positions`,summary:`保留旧版 placement 用法，也可改用 titlePlacement。`,tab:C,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{placement:`start`,children:`Start`}),_(k,{children:`Default`}),_(k,{placement:`end`,children:`End`})]}),code:`<div className="flex w-full flex-col">
  <Divider placement="start">Start</Divider>
  <Divider>Default</Divider>
  <Divider placement="end">End</Divider>
</div>`});d(()=>l(e,u,V))});let H=a(`rue:component:anchor`);i(u,H),c(()=>{let e=f(A,{title:`Divider in different positions (horizontal)`,summary:`在横向布局中，文本位置仍可配合旧版 direction 使用。`,tab:w,preview:()=>g(`div`,{className:`flex w-full justify-center h-52`,children:[_(k,{direction:`horizontal`,placement:`start`,children:`Start`}),_(k,{direction:`horizontal`,children:`Default`}),_(k,{direction:`horizontal`,placement:`end`,children:`End`})]}),code:`<div className="flex w-full justify-center h-52">
  <Divider direction="horizontal" placement="start">Start</Divider>
  <Divider direction="horizontal">Default</Divider>
  <Divider direction="horizontal" placement="end">End</Divider>
</div>`});d(()=>l(e,u,H))});let U=a(`rue:component:anchor`);i(u,U),c(()=>{let e=f(A,{title:`Line Variants`,summary:`新增实线、虚线、点线三种线型，并兼容 dashed 快捷写法。`,tab:T,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Solid`}),_(k,{variant:`dashed`,children:`Dashed by variant`}),_(k,{dashed:!0,color:`warning`,children:`Dashed by boolean`}),_(k,{lineVariant:`dotted`,color:`primary`,children:`Dotted`})]}),code:`<div className="flex w-full flex-col">
  <Divider>Solid</Divider>
  <Divider variant="dashed">Dashed by variant</Divider>
  <Divider dashed color="warning">Dashed by boolean</Divider>
  <Divider lineVariant="dotted" color="primary">Dotted</Divider>
</div>`});d(()=>l(e,u,U))});let W=a(`rue:component:anchor`);i(u,W),c(()=>{let e=f(A,{title:`Plain Text`,summary:`新增 plain，让分隔文字从强调标题过渡为更轻的正文说明。`,tab:E,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`默认文字`}),_(k,{plain:!0,children:`作为正文说明的分隔文案`}),_(k,{plain:!0,titlePlacement:`start`,color:`primary`,children:`Rue keeps it subtle`})]}),code:`<div className="flex w-full flex-col">
  <Divider>默认文字</Divider>
  <Divider plain>作为正文说明的分隔文案</Divider>
  <Divider plain titlePlacement="start" color="primary">
    Rue keeps it subtle
  </Divider>
</div>`});d(()=>l(e,u,W))});let G=a(`rue:component:anchor`);i(u,G),c(()=>{let e=f(A,{title:`Vertical Orientation API`,summary:`新增更通用的 orientation / vertical API，适合行内分隔，不展示 children。`,tab:D,preview:()=>g(`div`,{className:`flex flex-wrap items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-5`,children:[_(`span`,{children:`Profile`}),_(k,{orientation:`vertical`,className:`h-6`}),_(`span`,{children:`Team`}),_(k,{vertical:!0,className:`h-6`}),_(`span`,{children:`Billing`}),_(k,{type:`vertical`,className:`h-6`}),_(`span`,{children:`Logs`})]}),code:`<div className="flex flex-wrap items-center gap-3">
  <span>Profile</span>
  <Divider orientation="vertical" className="h-6" />
  <span>Team</span>
  <Divider vertical className="h-6" />
  <span>Billing</span>
  <Divider type="vertical" className="h-6" />
  <span>Logs</span>
</div>`});d(()=>l(e,u,G))});let K=a(`rue:component:anchor`);i(u,K),c(()=>{let e=f(A,{title:`Title Placement And Margin`,summary:`新增 titlePlacement 与 orientationMargin，可更精细地控制文字和边缘的距离。`,tab:O,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{titlePlacement:`start`,orientationMargin:24,children:`Start 24px`}),_(k,{titlePlacement:`center`,children:`Center`}),_(k,{titlePlacement:`end`,orientationMargin:`40`,children:`End 40px`})]}),code:`<div className="flex w-full flex-col">
  <Divider titlePlacement="start" orientationMargin={24}>Start 24px</Divider>
  <Divider titlePlacement="center">Center</Divider>
  <Divider titlePlacement="end" orientationMargin="40">End 40px</Divider>
</div>`});d(()=>l(e,u,K))});let q=a(`rue:component:anchor`);i(u,q),c(()=>{let e=f(A,{title:`Custom Style`,summary:`新增 style / contentStyle / contentClassName，便于保持 Rue 基础视觉下的局部定制。`,tab:P,preview:()=>g(`div`,{className:`flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4`,children:[_(k,{color:`primary`,lineVariant:`dotted`,titlePlacement:`start`,orientationMargin:20,className:`before:border-2 after:border-2`,contentClassName:`rounded-full bg-primary/10 px-3 py-1 text-primary`,children:`Project Status`}),_(k,{plain:!0,style:{background:`rgba(16, 185, 129, 0.06)`},contentStyle:{letterSpacing:`0.08em`},className:`rounded-box px-2`,children:`DEPLOYMENT READY`})]}),code:`<div className="flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4">
  <Divider
    color="primary"
    lineVariant="dotted"
    titlePlacement="start"
    orientationMargin={20}
    className="before:border-2 after:border-2"
    contentClassName="rounded-full bg-primary/10 px-3 py-1 text-primary"
  >
    Project Status
  </Divider>

  <Divider
    plain
    style={{ background: 'rgba(16, 185, 129, 0.06)' }}
    contentStyle={{ letterSpacing: '0.08em' }}
    className="rounded-box px-2"
  >
    DEPLOYMENT READY
  </Divider>
</div>`});d(()=>l(e,u,q))});let J=n(`div`);i(u,J),t(J,`my-10`);let Y=n(`h2`);i(J,Y),i(Y,r(`API`));let X=n(`p`);i(J,X),t(X,`text-sm opacity-70 mt-2`),i(X,r(`新版 Divider 同时兼容 Rue 旧写法与更语义化的新 API，便于渐进迁移。`));let Z=a(`rue:component:anchor`);return i(J,Z),c(()=>{let e=f(j,{rows:N});d(()=>l(e,J,Z))}),s})}),s,u),s})};export{P as default};