import{$ as e,Et as t,G as n,H as r,K as i,W as a,_t as o,d as s,kt as c,l,q as u,t as d,tt as f,xt as p}from"./vapor-runtime-BAZOdMd8.js";import{a as m,n as h}from"./vapor-helpers-vapor-BvUp1QnH.js";import{n as g,t as _}from"./src-DZJ4J6sD.js";import{n as v}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as y}from"./Code-DY4Ua5uc.js";import{t as b}from"./tabs-Casd077O.js";var x=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],S=[`solid`,`dashed`,`dotted`],C=e=>!!e&&x.includes(e),w=e=>!!e&&S.includes(e),T=(...e)=>e.filter(Boolean).join(` `),E=e=>{if(typeof e==`number`)return e;if(typeof e==`string`)return/^\d+(\.\d+)?$/.test(e)?Number(e):e},D=e=>{if(!(!e||e===`vertical`))return`divider-horizontal`},O=(e,t,n)=>(e??n??(t?`vertical`:`horizontal`))===`vertical`?`divider-horizontal`:void 0,k=({color:e,variant:t,lineVariant:n,direction:r,orientation:i,type:a,vertical:o,placement:s,titlePlacement:c,orientationMargin:l,dashed:u,plain:d,className:f,contentClassName:p,style:m,contentStyle:h,children:g,...v})=>{let y=e??(C(t)?t:void 0),b=n??(w(t)?t:void 0)??(u?`dashed`:`solid`),x=c??s,S=i||a||o?O(i,o,a):D(r),k=(i??a??(o?`vertical`:`horizontal`))===`vertical`,A=E(l),j=T(`divider`,S,y?`divider-${y}`:void 0,x&&x!==`center`?`divider-${x}`:void 0,b===`dashed`?`before:border-dashed after:border-dashed`:void 0,b===`dotted`?`before:border-dotted after:border-dotted`:void 0,f),M=T(`whitespace-nowrap`,d?`font-normal opacity-80`:void 0,p),N=x===`start`?{marginInlineStart:A,...h}:x===`end`?{marginInlineEnd:A,...h}:h;return _(`div`,{className:j,style:m,role:`separator`,"aria-orientation":k?`vertical`:`horizontal`,...v,children:!k&&g!=null?_(`span`,{className:M,style:N,children:g}):null})},A=e=>s(t=>{let o=i(`div`,t);f(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=i(`div`,o);r(o,m),f(m,`flex flex-wrap items-start justify-between gap-3`);let h=i(`div`,m);r(m,h);let g=i(`h2`,h);r(h,g),f(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,u(`# `));let _=a(`rue:slot:anchor`);r(g,_),c(()=>{let t=e.title;p(()=>l(t,g,_))});let v=a(`rue:slot:anchor`);r(h,v),c(()=>{let t=e.summary?s(()=>{let t=n(),o=i(`p`,t);r(t,o),f(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return r(o,s),c(()=>{let t=e.summary;p(()=>l(t,o,s))}),t}):``;p(()=>l(t,h,v))});let x=a(`rue:component:anchor`);r(o,x),c(()=>{let t=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>l(t,o,x))});let S=a(`rue:slot:anchor`);return r(o,S),c(()=>{let t=e.tab.value===`preview`?e.preview():s(()=>{let t=n(),i=a(`rue:component:anchor`);return r(t,i),c(()=>{let n=d(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>l(n,t,i))}),t});p(()=>l(t,o,S))}),o}),j=t=>s(o=>{let d=i(`div`,o);f(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,d);r(d,m),f(m,`table table-zebra`);let g=i(`thead`,m);r(m,g);let _=i(`tr`,g);r(g,_);let v=i(`th`,_);r(_,v),r(v,u(`属性`));let y=i(`th`,_);r(_,y),r(y,u(`说明`));let b=i(`th`,_);r(_,b),r(b,u(`类型`));let x=i(`th`,_);r(_,x),r(x,u(`默认值`));let S=i(`tbody`,m);r(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return c(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,o,u,d,f)=>{l(s(()=>{let o=n(),s=i(`tr`,o);r(o,s),c(()=>{e(s,`key`,String(t.prop))});let u=i(`td`,s);r(s,u);let d=i(`code`,u);r(u,d);let f=a(`rue:slot:anchor`);r(d,f),c(()=>{let e=t.prop;p(()=>l(e,d,f))});let m=i(`td`,s);r(s,m);let h=a(`rue:slot:anchor`);r(m,h),c(()=>{let e=t.description;p(()=>l(e,m,h))});let g=i(`td`,s);r(s,g);let _=i(`code`,g);r(g,_);let v=a(`rue:slot:anchor`);r(_,v),c(()=>{let e=t.type;p(()=>l(e,_,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=a(`rue:slot:anchor`);return r(b,x),c(()=>{let e=t.defaultValue;p(()=>l(e,b,x))}),o}),o,u)}})}),d}),M=e=>s(t=>{let n=i(`div`,t);c(()=>{f(n,String(`grid rounded-box card bg-base-300 place-items-center ${e.className??`h-20`}`.trim()))});let o=a(`rue:slot:anchor`);return r(n,o),c(()=>{let t=e.label;p(()=>l(t,n,o))}),n}),N=[{prop:`children`,description:`分隔线中展示的内容；使用 orientation="vertical" 或 vertical 时不显示。`,type:`any`,defaultValue:`-`},{prop:`color`,description:`推荐写法，设置 Rue 语义色。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`variant`,description:`兼容旧版颜色写法，同时支持 solid / dashed / dotted 线型。`,type:`tone | 'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`lineVariant`,description:`显式设置线型，优先级高于 dashed。`,type:`'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`dashed`,description:`快捷开启虚线。`,type:`boolean`,defaultValue:`false`},{prop:`plain`,description:`让分隔文字更接近正文样式，适合说明性内容。`,type:`boolean`,defaultValue:`false`},{prop:`titlePlacement`,description:`推荐写法，控制文本位于起始、居中或结束位置。`,type:`'start' | 'center' | 'end'`,defaultValue:`center`},{prop:`placement`,description:`兼容旧版 start / end 文本位置。`,type:`'start' | 'end'`,defaultValue:`-`},{prop:`orientationMargin`,description:`仅在 titlePlacement 为 start / end 时生效，控制文本和最近边缘的距离。`,type:`string | number`,defaultValue:`-`},{prop:`orientation`,description:`推荐写法，控制横向或纵向分隔；vertical 模式更适合行内分隔。`,type:`'horizontal' | 'vertical'`,defaultValue:`horizontal`},{prop:`vertical / type`,description:`vertical 是 orientation="vertical" 的快捷写法；type 作为同义别名保留。`,type:`boolean | 'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`direction`,description:`兼容 Rue 旧写法；在横向布局中常用 direction="horizontal" 切换为纵向视觉。`,type:`'vertical' | 'horizontal'`,defaultValue:`-`}],P=()=>{let{tabBasic:e,tabHorizontal:h,tabNoText:y,tabResponsive:b,tabColors:x,tabPositionsV:S,tabPositionsH:C,tabLineVariants:w,tabPlain:T,tabVerticalApi:E,tabMargin:D,tabCustom:O}=m(`useSetup:0:0`,()=>t(()=>({tabBasic:m(`ref:1:0`,()=>o(`preview`)),tabHorizontal:m(`ref:1:1`,()=>o(`preview`)),tabNoText:m(`ref:1:2`,()=>o(`preview`)),tabResponsive:m(`ref:1:3`,()=>o(`preview`)),tabColors:m(`ref:1:4`,()=>o(`preview`)),tabPositionsV:m(`ref:1:5`,()=>o(`preview`)),tabPositionsH:m(`ref:1:6`,()=>o(`preview`)),tabLineVariants:m(`ref:1:7`,()=>o(`preview`)),tabPlain:m(`ref:1:8`,()=>o(`preview`)),tabVerticalApi:m(`ref:1:9`,()=>o(`preview`)),tabMargin:m(`ref:1:10`,()=>o(`preview`)),tabCustom:m(`ref:1:11`,()=>o(`preview`))})));return s(t=>{let o=n(),m=a(`rue:component:anchor`);return r(o,m),l(d(v,{children:s(()=>{let t=n(),o=i(`div`,t);r(t,o),f(o,`max-w-none prose prose-sm md:prose-base`);let s=i(`h1`,o);r(o,s),r(s,u(`Divider 分隔线`));let m=i(`p`,o);r(o,m),f(m,`text-sm mt-3 mb-3`),r(m,u(`分隔线（Divider）用于在内容之间建立轻量层级。Rue 保留原有视觉风格，并补充了更完整的文本位置、线型和垂直分隔能力。`));let v=a(`rue:component:anchor`);r(o,v),c(()=>{let t=d(A,{title:`Divider`,summary:`基础分隔线，保留现有默认用法。`,tab:e,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{children:`OR`}),_(M,{label:`content`})]}),code:`import { Divider } from '@rue-js/design'

<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider>OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});p(()=>l(t,o,v))});let P=a(`rue:component:anchor`);r(o,P),c(()=>{let e=d(A,{title:`Divider horizontal`,summary:`保留 Rue 旧版 direction 用法，在横向布局中展示纵向分隔。`,tab:h,preview:()=>g(`div`,{className:`flex w-full`,children:[_(M,{label:`content`,className:`h-20 grow`}),_(k,{direction:`horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-20 grow`})]}),code:`<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <Divider direction="horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>`});p(()=>l(e,o,P))});let F=a(`rue:component:anchor`);r(o,F),c(()=>{let e=d(A,{title:`Divider with no text`,summary:`没有文字时，Divider 仍可作为纯分隔元素使用。`,tab:y,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{}),_(M,{label:`content`})]}),code:`<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider />
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});p(()=>l(e,o,F))});let I=a(`rue:component:anchor`);r(o,I),c(()=>{let e=d(A,{title:`Responsive Divider`,summary:`继续支持通过 className 结合响应式类切换方向。`,tab:b,preview:()=>g(`div`,{className:`flex w-full flex-col lg:flex-row`,children:[_(M,{label:`content`,className:`h-32 grow`}),_(k,{className:`lg:divider-horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-32 grow`})]}),code:`<div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <Divider className="lg:divider-horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>`});p(()=>l(e,o,I))});let L=a(`rue:component:anchor`);r(o,L),c(()=>{let e=d(A,{title:`Divider with colors`,summary:`现有颜色能力保留，同时推荐新写法使用 color。`,tab:x,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Default`}),_(k,{variant:`neutral`,children:`Neutral`}),_(k,{variant:`primary`,children:`Primary`}),_(k,{variant:`secondary`,children:`Secondary`}),_(k,{variant:`accent`,children:`Accent`}),_(k,{variant:`success`,children:`Success`}),_(k,{variant:`warning`,children:`Warning`}),_(k,{variant:`info`,children:`Info`}),_(k,{variant:`error`,children:`Error`}),_(k,{color:`primary`,children:`Primary by color`})]}),code:`<div className="flex w-full flex-col">
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
</div>`});p(()=>l(e,o,L))});let R=a(`rue:component:anchor`);r(o,R),c(()=>{let e=d(A,{title:`Divider in different positions`,summary:`保留旧版 placement 用法，也可改用 titlePlacement。`,tab:S,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{placement:`start`,children:`Start`}),_(k,{children:`Default`}),_(k,{placement:`end`,children:`End`})]}),code:`<div className="flex w-full flex-col">
  <Divider placement="start">Start</Divider>
  <Divider>Default</Divider>
  <Divider placement="end">End</Divider>
</div>`});p(()=>l(e,o,R))});let z=a(`rue:component:anchor`);r(o,z),c(()=>{let e=d(A,{title:`Divider in different positions (horizontal)`,summary:`在横向布局中，文本位置仍可配合旧版 direction 使用。`,tab:C,preview:()=>g(`div`,{className:`flex w-full justify-center h-52`,children:[_(k,{direction:`horizontal`,placement:`start`,children:`Start`}),_(k,{direction:`horizontal`,children:`Default`}),_(k,{direction:`horizontal`,placement:`end`,children:`End`})]}),code:`<div className="flex w-full justify-center h-52">
  <Divider direction="horizontal" placement="start">Start</Divider>
  <Divider direction="horizontal">Default</Divider>
  <Divider direction="horizontal" placement="end">End</Divider>
</div>`});p(()=>l(e,o,z))});let B=a(`rue:component:anchor`);r(o,B),c(()=>{let e=d(A,{title:`Line Variants`,summary:`新增实线、虚线、点线三种线型，并兼容 dashed 快捷写法。`,tab:w,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Solid`}),_(k,{variant:`dashed`,children:`Dashed by variant`}),_(k,{dashed:!0,color:`warning`,children:`Dashed by boolean`}),_(k,{lineVariant:`dotted`,color:`primary`,children:`Dotted`})]}),code:`<div className="flex w-full flex-col">
  <Divider>Solid</Divider>
  <Divider variant="dashed">Dashed by variant</Divider>
  <Divider dashed color="warning">Dashed by boolean</Divider>
  <Divider lineVariant="dotted" color="primary">Dotted</Divider>
</div>`});p(()=>l(e,o,B))});let V=a(`rue:component:anchor`);r(o,V),c(()=>{let e=d(A,{title:`Plain Text`,summary:`新增 plain，让分隔文字从强调标题过渡为更轻的正文说明。`,tab:T,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`默认文字`}),_(k,{plain:!0,children:`作为正文说明的分隔文案`}),_(k,{plain:!0,titlePlacement:`start`,color:`primary`,children:`Rue keeps it subtle`})]}),code:`<div className="flex w-full flex-col">
  <Divider>默认文字</Divider>
  <Divider plain>作为正文说明的分隔文案</Divider>
  <Divider plain titlePlacement="start" color="primary">
    Rue keeps it subtle
  </Divider>
</div>`});p(()=>l(e,o,V))});let H=a(`rue:component:anchor`);r(o,H),c(()=>{let e=d(A,{title:`Vertical Orientation API`,summary:`新增更通用的 orientation / vertical API，适合行内分隔，不展示 children。`,tab:E,preview:()=>g(`div`,{className:`flex flex-wrap items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-5`,children:[_(`span`,{children:`Profile`}),_(k,{orientation:`vertical`,className:`h-6`}),_(`span`,{children:`Team`}),_(k,{vertical:!0,className:`h-6`}),_(`span`,{children:`Billing`}),_(k,{type:`vertical`,className:`h-6`}),_(`span`,{children:`Logs`})]}),code:`<div className="flex flex-wrap items-center gap-3">
  <span>Profile</span>
  <Divider orientation="vertical" className="h-6" />
  <span>Team</span>
  <Divider vertical className="h-6" />
  <span>Billing</span>
  <Divider type="vertical" className="h-6" />
  <span>Logs</span>
</div>`});p(()=>l(e,o,H))});let U=a(`rue:component:anchor`);r(o,U),c(()=>{let e=d(A,{title:`Title Placement And Margin`,summary:`新增 titlePlacement 与 orientationMargin，可更精细地控制文字和边缘的距离。`,tab:D,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{titlePlacement:`start`,orientationMargin:24,children:`Start 24px`}),_(k,{titlePlacement:`center`,children:`Center`}),_(k,{titlePlacement:`end`,orientationMargin:`40`,children:`End 40px`})]}),code:`<div className="flex w-full flex-col">
  <Divider titlePlacement="start" orientationMargin={24}>Start 24px</Divider>
  <Divider titlePlacement="center">Center</Divider>
  <Divider titlePlacement="end" orientationMargin="40">End 40px</Divider>
</div>`});p(()=>l(e,o,U))});let W=a(`rue:component:anchor`);r(o,W),c(()=>{let e=d(A,{title:`Custom Style`,summary:`新增 style / contentStyle / contentClassName，便于保持 Rue 基础视觉下的局部定制。`,tab:O,preview:()=>g(`div`,{className:`flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4`,children:[_(k,{color:`primary`,lineVariant:`dotted`,titlePlacement:`start`,orientationMargin:20,className:`before:border-2 after:border-2`,contentClassName:`rounded-full bg-primary/10 px-3 py-1 text-primary`,children:`Project Status`}),_(k,{plain:!0,style:{background:`rgba(16, 185, 129, 0.06)`},contentStyle:{letterSpacing:`0.08em`},className:`rounded-box px-2`,children:`DEPLOYMENT READY`})]}),code:`<div className="flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4">
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
</div>`});p(()=>l(e,o,W))});let G=i(`div`,o);r(o,G),f(G,`my-10`);let K=i(`h2`,G);r(G,K),r(K,u(`API`));let q=i(`p`,G);r(G,q),f(q,`text-sm opacity-70 mt-2`),r(q,u(`新版 Divider 同时兼容 Rue 旧写法与更语义化的新 API，便于渐进迁移。`));let J=a(`rue:component:anchor`);return r(G,J),c(()=>{let e=d(j,{rows:N});p(()=>l(e,G,J))}),t})}),o,m),o})};export{P as default};