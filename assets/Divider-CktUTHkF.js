import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-BZZbPG7x.js";import{a as h,n as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as _,t as v}from"./src-DP0sEeZS.js";import{n as y}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as b}from"./Code-C8wy38VS.js";import{t as x}from"./tabs-B-QPmbH8.js";var S=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],C=[`solid`,`dashed`,`dotted`],w=e=>!!e&&S.includes(e),T=e=>!!e&&C.includes(e),E=(...e)=>e.filter(Boolean).join(` `),D=e=>{if(typeof e==`number`)return e;if(typeof e==`string`)return/^\d+(\.\d+)?$/.test(e)?Number(e):e},O=e=>{if(!(!e||e===`vertical`))return`divider-horizontal`},k=(e,t,n)=>(e??n??(t?`vertical`:`horizontal`))===`vertical`?`divider-horizontal`:void 0,A=({color:e,variant:t,lineVariant:n,direction:r,orientation:i,type:a,vertical:o,placement:s,titlePlacement:c,orientationMargin:l,dashed:u,plain:d,className:f,contentClassName:p,style:m,contentStyle:h,children:g,..._})=>{let y=e??(w(t)?t:void 0),b=n??(T(t)?t:void 0)??(u?`dashed`:`solid`),x=c??s,S=i||a||o?k(i,o,a):O(r),C=(i??a??(o?`vertical`:`horizontal`))===`vertical`,A=D(l),j=E(`divider`,S,y?`divider-${y}`:void 0,x&&x!==`center`?`divider-${x}`:void 0,b===`dashed`?`before:border-dashed after:border-dashed`:void 0,b===`dotted`?`before:border-dotted after:border-dotted`:void 0,f),M=E(`whitespace-nowrap`,d?`font-normal opacity-80`:void 0,p),N=x===`start`?{marginInlineStart:A,...h}:x===`end`?{marginInlineEnd:A,...h}:h;return v(`div`,{className:j,style:m,role:`separator`,"aria-orientation":C?`vertical`:`horizontal`,..._,children:!C&&g!=null?v(`span`,{className:M,style:N,children:g}):null})},j=({title:t,summary:d,tab:m,preview:h,code:g})=>p(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);l(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);l(v,y);let S=e(`h2`);l(y,S),o(S,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(S,n(`# `));let C=r(S);l(S,C),u(()=>{s(C,t)});let w=i(`rue:slot:anchor`);l(y,w),u(()=>{c(d?p(()=>{let t=a(),n=e(`p`);l(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return l(n,i),u(()=>{s(i,d)}),t}):``,y,w)});let T=i(`rue:component:anchor`);l(_,T),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return l(_,E),u(()=>{c(m.value===`preview`?h():p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),M=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),N=({label:t,className:n})=>p(()=>{let r=e(`div`);u(()=>{o(r,String(`grid rounded-box card bg-base-300 place-items-center ${n??`h-20`}`.trim()))});let a=i(`rue:slot:anchor`);return l(r,a),u(()=>{c(t,r,a)}),r}),P=[{prop:`children`,description:`分隔线中展示的内容；使用 orientation="vertical" 或 vertical 时不显示。`,type:`any`,defaultValue:`-`},{prop:`color`,description:`推荐写法，设置 Rue 语义色。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`variant`,description:`兼容旧版颜色写法，同时支持 solid / dashed / dotted 线型。`,type:`tone | 'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`lineVariant`,description:`显式设置线型，优先级高于 dashed。`,type:`'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`dashed`,description:`快捷开启虚线。`,type:`boolean`,defaultValue:`false`},{prop:`plain`,description:`让分隔文字更接近正文样式，适合说明性内容。`,type:`boolean`,defaultValue:`false`},{prop:`titlePlacement`,description:`推荐写法，控制文本位于起始、居中或结束位置。`,type:`'start' | 'center' | 'end'`,defaultValue:`center`},{prop:`placement`,description:`兼容旧版 start / end 文本位置。`,type:`'start' | 'end'`,defaultValue:`-`},{prop:`orientationMargin`,description:`仅在 titlePlacement 为 start / end 时生效，控制文本和最近边缘的距离。`,type:`string | number`,defaultValue:`-`},{prop:`orientation`,description:`推荐写法，控制横向或纵向分隔；vertical 模式更适合行内分隔。`,type:`'horizontal' | 'vertical'`,defaultValue:`horizontal`},{prop:`vertical / type`,description:`vertical 是 orientation="vertical" 的快捷写法；type 作为同义别名保留。`,type:`boolean | 'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`direction`,description:`兼容 Rue 旧写法；在横向布局中常用 direction="horizontal" 切换为纵向视觉。`,type:`'vertical' | 'horizontal'`,defaultValue:`-`}],F=()=>{let{tabBasic:r,tabHorizontal:s,tabNoText:g,tabResponsive:b,tabColors:x,tabPositionsV:S,tabPositionsH:C,tabLineVariants:w,tabPlain:T,tabVerticalApi:E,tabMargin:D,tabCustom:O}=h(`useSetup:0:0`,()=>m(()=>({tabBasic:h(`ref:1:0`,()=>d(`preview`)),tabHorizontal:h(`ref:1:1`,()=>d(`preview`)),tabNoText:h(`ref:1:2`,()=>d(`preview`)),tabResponsive:h(`ref:1:3`,()=>d(`preview`)),tabColors:h(`ref:1:4`,()=>d(`preview`)),tabPositionsV:h(`ref:1:5`,()=>d(`preview`)),tabPositionsH:h(`ref:1:6`,()=>d(`preview`)),tabLineVariants:h(`ref:1:7`,()=>d(`preview`)),tabPlain:h(`ref:1:8`,()=>d(`preview`)),tabVerticalApi:h(`ref:1:9`,()=>d(`preview`)),tabMargin:h(`ref:1:10`,()=>d(`preview`)),tabCustom:h(`ref:1:11`,()=>d(`preview`))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Divider 分隔线`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`分隔线（Divider）用于在内容之间建立轻量层级。Rue 保留原有视觉风格，并补充了更完整的文本位置、线型和垂直分隔能力。`));let y=e(`div`);l(p,y),o(y,`text-sm`);let k=e(`a`);l(y,k),t(k,`href`,`https://daisyui.com/components/divider/`),t(k,`target`,`_blank`),t(k,`rel`,`noreferrer`),l(k,n(`查看 Divider 静态样式`));let F=i(`rue:component:anchor`);l(p,F),u(()=>{c(f(j,{title:`Divider`,summary:`基础分隔线，保留现有默认用法。`,tab:r,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(N,{label:`content`}),v(A,{children:`OR`}),v(N,{label:`content`})]}),code:`import { Divider } from '@rue-js/design'

<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider>OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`}),p,F)});let I=i(`rue:component:anchor`);l(p,I),u(()=>{c(f(j,{title:`Divider horizontal`,summary:`保留 Rue 旧版 direction 用法，在横向布局中展示纵向分隔。`,tab:s,preview:()=>_(`div`,{className:`flex w-full`,children:[v(N,{label:`content`,className:`h-20 grow`}),v(A,{direction:`horizontal`,children:`OR`}),v(N,{label:`content`,className:`h-20 grow`})]}),code:`<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <Divider direction="horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>`}),p,I)});let L=i(`rue:component:anchor`);l(p,L),u(()=>{c(f(j,{title:`Divider with no text`,summary:`没有文字时，Divider 仍可作为纯分隔元素使用。`,tab:g,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(N,{label:`content`}),v(A,{}),v(N,{label:`content`})]}),code:`<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider />
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`}),p,L)});let R=i(`rue:component:anchor`);l(p,R),u(()=>{c(f(j,{title:`Responsive Divider`,summary:`继续支持通过 className 结合响应式类切换方向。`,tab:b,preview:()=>_(`div`,{className:`flex w-full flex-col lg:flex-row`,children:[v(N,{label:`content`,className:`h-32 grow`}),v(A,{className:`lg:divider-horizontal`,children:`OR`}),v(N,{label:`content`,className:`h-32 grow`})]}),code:`<div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <Divider className="lg:divider-horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>`}),p,R)});let z=i(`rue:component:anchor`);l(p,z),u(()=>{c(f(j,{title:`Divider with colors`,summary:`现有颜色能力保留，同时推荐新写法使用 color。`,tab:x,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(A,{children:`Default`}),v(A,{variant:`neutral`,children:`Neutral`}),v(A,{variant:`primary`,children:`Primary`}),v(A,{variant:`secondary`,children:`Secondary`}),v(A,{variant:`accent`,children:`Accent`}),v(A,{variant:`success`,children:`Success`}),v(A,{variant:`warning`,children:`Warning`}),v(A,{variant:`info`,children:`Info`}),v(A,{variant:`error`,children:`Error`}),v(A,{color:`primary`,children:`Primary by color`})]}),code:`<div className="flex w-full flex-col">
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
</div>`}),p,z)});let B=i(`rue:component:anchor`);l(p,B),u(()=>{c(f(j,{title:`Divider in different positions`,summary:`保留旧版 placement 用法，也可改用 titlePlacement。`,tab:S,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(A,{placement:`start`,children:`Start`}),v(A,{children:`Default`}),v(A,{placement:`end`,children:`End`})]}),code:`<div className="flex w-full flex-col">
  <Divider placement="start">Start</Divider>
  <Divider>Default</Divider>
  <Divider placement="end">End</Divider>
</div>`}),p,B)});let V=i(`rue:component:anchor`);l(p,V),u(()=>{c(f(j,{title:`Divider in different positions (horizontal)`,summary:`在横向布局中，文本位置仍可配合旧版 direction 使用。`,tab:C,preview:()=>_(`div`,{className:`flex w-full justify-center h-52`,children:[v(A,{direction:`horizontal`,placement:`start`,children:`Start`}),v(A,{direction:`horizontal`,children:`Default`}),v(A,{direction:`horizontal`,placement:`end`,children:`End`})]}),code:`<div className="flex w-full justify-center h-52">
  <Divider direction="horizontal" placement="start">Start</Divider>
  <Divider direction="horizontal">Default</Divider>
  <Divider direction="horizontal" placement="end">End</Divider>
</div>`}),p,V)});let H=i(`rue:component:anchor`);l(p,H),u(()=>{c(f(j,{title:`Line Variants`,summary:`新增实线、虚线、点线三种线型，并兼容 dashed 快捷写法。`,tab:w,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(A,{children:`Solid`}),v(A,{variant:`dashed`,children:`Dashed by variant`}),v(A,{dashed:!0,color:`warning`,children:`Dashed by boolean`}),v(A,{lineVariant:`dotted`,color:`primary`,children:`Dotted`})]}),code:`<div className="flex w-full flex-col">
  <Divider>Solid</Divider>
  <Divider variant="dashed">Dashed by variant</Divider>
  <Divider dashed color="warning">Dashed by boolean</Divider>
  <Divider lineVariant="dotted" color="primary">Dotted</Divider>
</div>`}),p,H)});let U=i(`rue:component:anchor`);l(p,U),u(()=>{c(f(j,{title:`Plain Text`,summary:`新增 plain，让分隔文字从强调标题过渡为更轻的正文说明。`,tab:T,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(A,{children:`默认文字`}),v(A,{plain:!0,children:`作为正文说明的分隔文案`}),v(A,{plain:!0,titlePlacement:`start`,color:`primary`,children:`Rue keeps it subtle`})]}),code:`<div className="flex w-full flex-col">
  <Divider>默认文字</Divider>
  <Divider plain>作为正文说明的分隔文案</Divider>
  <Divider plain titlePlacement="start" color="primary">
    Rue keeps it subtle
  </Divider>
</div>`}),p,U)});let W=i(`rue:component:anchor`);l(p,W),u(()=>{c(f(j,{title:`Vertical Orientation API`,summary:`新增更通用的 orientation / vertical API，适合行内分隔，不展示 children。`,tab:E,preview:()=>_(`div`,{className:`flex flex-wrap items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-5`,children:[v(`span`,{children:`Profile`}),v(A,{orientation:`vertical`,className:`h-6`}),v(`span`,{children:`Team`}),v(A,{vertical:!0,className:`h-6`}),v(`span`,{children:`Billing`}),v(A,{type:`vertical`,className:`h-6`}),v(`span`,{children:`Logs`})]}),code:`<div className="flex flex-wrap items-center gap-3">
  <span>Profile</span>
  <Divider orientation="vertical" className="h-6" />
  <span>Team</span>
  <Divider vertical className="h-6" />
  <span>Billing</span>
  <Divider type="vertical" className="h-6" />
  <span>Logs</span>
</div>`}),p,W)});let G=i(`rue:component:anchor`);l(p,G),u(()=>{c(f(j,{title:`Title Placement And Margin`,summary:`新增 titlePlacement 与 orientationMargin，可更精细地控制文字和边缘的距离。`,tab:D,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(A,{titlePlacement:`start`,orientationMargin:24,children:`Start 24px`}),v(A,{titlePlacement:`center`,children:`Center`}),v(A,{titlePlacement:`end`,orientationMargin:`40`,children:`End 40px`})]}),code:`<div className="flex w-full flex-col">
  <Divider titlePlacement="start" orientationMargin={24}>Start 24px</Divider>
  <Divider titlePlacement="center">Center</Divider>
  <Divider titlePlacement="end" orientationMargin="40">End 40px</Divider>
</div>`}),p,G)});let K=i(`rue:component:anchor`);l(p,K),u(()=>{c(f(j,{title:`Custom Style`,summary:`新增 style / contentStyle / contentClassName，便于保持 Rue 基础视觉下的局部定制。`,tab:O,preview:()=>_(`div`,{className:`flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4`,children:[v(A,{color:`primary`,lineVariant:`dotted`,titlePlacement:`start`,orientationMargin:20,className:`before:border-2 after:border-2`,contentClassName:`rounded-full bg-primary/10 px-3 py-1 text-primary`,children:`Project Status`}),v(A,{plain:!0,style:{background:`rgba(16, 185, 129, 0.06)`},contentStyle:{letterSpacing:`0.08em`},className:`rounded-box px-2`,children:`DEPLOYMENT READY`})]}),code:`<div className="flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4">
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
</div>`}),p,K)});let q=e(`div`);l(p,q),o(q,`my-10`);let J=e(`h2`);l(q,J),l(J,n(`API`));let Y=e(`p`);l(q,Y),o(Y,`text-sm opacity-70 mt-2`),l(Y,n(`新版 Divider 同时兼容 Rue 旧写法与更语义化的新 API，便于渐进迁移。`));let X=i(`rue:component:anchor`);return l(q,X),u(()=>{c(f(M,{rows:P}),q,X)}),d})}),d,m),d})};export{F as default};