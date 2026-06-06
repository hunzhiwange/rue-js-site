import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{a as m,n as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{n as _,t as v}from"./src-BLzF0BqW.js";import{n as y}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as b}from"./tabs-BOxm6iIN.js";var x=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],S=[`solid`,`dashed`,`dotted`],C=e=>!!e&&x.includes(e),w=e=>!!e&&S.includes(e),T=(...e)=>e.filter(Boolean).join(` `),E=e=>{if(typeof e==`number`)return e;if(typeof e==`string`)return/^\d+(\.\d+)?$/.test(e)?Number(e):e},D=e=>{if(!(!e||e===`vertical`))return`divider-horizontal`},O=(e,t,n)=>(e??n??(t?`vertical`:`horizontal`))===`vertical`?`divider-horizontal`:void 0,k=({color:e,variant:t,lineVariant:n,direction:r,orientation:i,type:a,vertical:o,placement:s,titlePlacement:c,orientationMargin:l,dashed:u,plain:d,className:f,contentClassName:p,style:m,contentStyle:h,children:g,..._})=>{let y=e??(C(t)?t:void 0),b=n??(w(t)?t:void 0)??(u?`dashed`:`solid`),x=c??s,S=i||a||o?O(i,o,a):D(r),k=(i??a??(o?`vertical`:`horizontal`))===`vertical`,A=E(l),j=T(`divider`,S,y?`divider-${y}`:void 0,x&&x!==`center`?`divider-${x}`:void 0,b===`dashed`?`before:border-dashed after:border-dashed`:void 0,b===`dotted`?`before:border-dotted after:border-dotted`:void 0,f),M=T(`whitespace-nowrap`,d?`font-normal opacity-80`:void 0,p),N=x===`start`?{marginInlineStart:A,...h}:x===`end`?{marginInlineEnd:A,...h}:h;return v(`div`,{className:j,style:m,role:`separator`,"aria-orientation":k?`vertical`:`horizontal`,..._,children:!k&&g!=null?v(`span`,{className:M,style:N,children:g}):null})},A=s=>l(c=>{let f=o(`div`,c);e(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,f);t(f,m),e(m,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,m);t(m,h);let _=o(`h2`,h);t(h,_),e(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(_,r(`# `));let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let e=s.title;p(()=>u(e,_,v))});let y=i(`rue:slot:anchor`);t(h,y),n(()=>{let r=s.summary?l(()=>{let r=a(),c=o(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=s.summary;p(()=>u(e,c,l))}),r}):``;p(()=>u(r,h,y))});let x=i(`rue:component:anchor`);t(f,x),n(()=>{let e=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:s.tab.value,onChange:e=>s.tab.value=e,className:`mb-3 mt-4`});p(()=>u(e,f,x))});let S=i(`rue:slot:anchor`);return t(f,S),n(()=>{let e=s.tab.value===`preview`?s.preview():l(()=>{let e=a(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=d(g,{className:`mt-2`,lang:`tsx`,code:s.code});p(()=>u(t,e,r))}),e});p(()=>u(e,f,S))}),f}),j=c=>l(d=>{let f=o(`div`,d);e(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);t(f,m),e(m,`table table-zebra`);let g=o(`thead`,m);t(m,g);let _=o(`tr`,g);t(g,_);let v=o(`th`,_);t(_,v),t(v,r(`属性`));let y=o(`th`,_);t(_,y),t(y,r(`说明`));let b=o(`th`,_);t(_,b),t(b,r(`类型`));let x=o(`th`,_);t(_,x),t(x,r(`默认值`));let S=o(`tbody`,m);t(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=h({items:c.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,c,d,f)=>{u(l(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let d=o(`code`,l);t(l,d);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.prop;p(()=>u(t,d,f))});let m=o(`td`,c);t(c,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let t=e.description;p(()=>u(t,m,h))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;p(()=>u(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;p(()=>u(t,b,x))}),r}),r,c)}})}),f}),M=r=>l(a=>{let s=o(`div`,a);n(()=>{e(s,String(`grid rounded-box card bg-base-300 place-items-center ${r.className??`h-20`}`.trim()))});let c=i(`rue:slot:anchor`);return t(s,c),n(()=>{let e=r.label;p(()=>u(e,s,c))}),s}),N=[{prop:`children`,description:`分隔线中展示的内容；使用 orientation="vertical" 或 vertical 时不显示。`,type:`any`,defaultValue:`-`},{prop:`color`,description:`推荐写法，设置 Rue 语义色。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`variant`,description:`兼容旧版颜色写法，同时支持 solid / dashed / dotted 线型。`,type:`tone | 'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`lineVariant`,description:`显式设置线型，优先级高于 dashed。`,type:`'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`dashed`,description:`快捷开启虚线。`,type:`boolean`,defaultValue:`false`},{prop:`plain`,description:`让分隔文字更接近正文样式，适合说明性内容。`,type:`boolean`,defaultValue:`false`},{prop:`titlePlacement`,description:`推荐写法，控制文本位于起始、居中或结束位置。`,type:`'start' | 'center' | 'end'`,defaultValue:`center`},{prop:`placement`,description:`兼容旧版 start / end 文本位置。`,type:`'start' | 'end'`,defaultValue:`-`},{prop:`orientationMargin`,description:`仅在 titlePlacement 为 start / end 时生效，控制文本和最近边缘的距离。`,type:`string | number`,defaultValue:`-`},{prop:`orientation`,description:`推荐写法，控制横向或纵向分隔；vertical 模式更适合行内分隔。`,type:`'horizontal' | 'vertical'`,defaultValue:`horizontal`},{prop:`vertical / type`,description:`vertical 是 orientation="vertical" 的快捷写法；type 作为同义别名保留。`,type:`boolean | 'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`direction`,description:`兼容 Rue 旧写法；在横向布局中常用 direction="horizontal" 切换为纵向视觉。`,type:`'vertical' | 'horizontal'`,defaultValue:`-`}],P=()=>{let{tabBasic:s,tabHorizontal:h,tabNoText:g,tabResponsive:b,tabColors:x,tabPositionsV:S,tabPositionsH:C,tabLineVariants:w,tabPlain:T,tabVerticalApi:E,tabMargin:D,tabCustom:O}=m(`useSetup:0:0`,()=>f(()=>({tabBasic:m(`ref:1:0`,()=>c(`preview`)),tabHorizontal:m(`ref:1:1`,()=>c(`preview`)),tabNoText:m(`ref:1:2`,()=>c(`preview`)),tabResponsive:m(`ref:1:3`,()=>c(`preview`)),tabColors:m(`ref:1:4`,()=>c(`preview`)),tabPositionsV:m(`ref:1:5`,()=>c(`preview`)),tabPositionsH:m(`ref:1:6`,()=>c(`preview`)),tabLineVariants:m(`ref:1:7`,()=>c(`preview`)),tabPlain:m(`ref:1:8`,()=>c(`preview`)),tabVerticalApi:m(`ref:1:9`,()=>c(`preview`)),tabMargin:m(`ref:1:10`,()=>c(`preview`)),tabCustom:m(`ref:1:11`,()=>c(`preview`))})));return l(c=>{let f=a(),m=i(`rue:component:anchor`);return t(f,m),u(d(y,{children:l(()=>{let c=a(),l=o(`div`,c);t(c,l),e(l,`max-w-none prose prose-sm md:prose-base`);let f=o(`h1`,l);t(l,f),t(f,r(`Divider 分隔线`));let m=o(`p`,l);t(l,m),e(m,`text-sm mt-3 mb-3`),t(m,r(`分隔线（Divider）用于在内容之间建立轻量层级。Rue 保留原有视觉风格，并补充了更完整的文本位置、线型和垂直分隔能力。`));let y=i(`rue:component:anchor`);t(l,y),n(()=>{let e=d(A,{title:`Divider`,summary:`基础分隔线，保留现有默认用法。`,tab:s,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(M,{label:`content`}),v(k,{children:`OR`}),v(M,{label:`content`})]}),code:`import { Divider } from '@rue-js/design'

<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider>OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});p(()=>u(e,l,y))});let P=i(`rue:component:anchor`);t(l,P),n(()=>{let e=d(A,{title:`Divider horizontal`,summary:`保留 Rue 旧版 direction 用法，在横向布局中展示纵向分隔。`,tab:h,preview:()=>_(`div`,{className:`flex w-full`,children:[v(M,{label:`content`,className:`h-20 grow`}),v(k,{direction:`horizontal`,children:`OR`}),v(M,{label:`content`,className:`h-20 grow`})]}),code:`<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <Divider direction="horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>`});p(()=>u(e,l,P))});let F=i(`rue:component:anchor`);t(l,F),n(()=>{let e=d(A,{title:`Divider with no text`,summary:`没有文字时，Divider 仍可作为纯分隔元素使用。`,tab:g,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(M,{label:`content`}),v(k,{}),v(M,{label:`content`})]}),code:`<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider />
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});p(()=>u(e,l,F))});let I=i(`rue:component:anchor`);t(l,I),n(()=>{let e=d(A,{title:`Responsive Divider`,summary:`继续支持通过 className 结合响应式类切换方向。`,tab:b,preview:()=>_(`div`,{className:`flex w-full flex-col lg:flex-row`,children:[v(M,{label:`content`,className:`h-32 grow`}),v(k,{className:`lg:divider-horizontal`,children:`OR`}),v(M,{label:`content`,className:`h-32 grow`})]}),code:`<div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <Divider className="lg:divider-horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>`});p(()=>u(e,l,I))});let L=i(`rue:component:anchor`);t(l,L),n(()=>{let e=d(A,{title:`Divider with colors`,summary:`现有颜色能力保留，同时推荐新写法使用 color。`,tab:x,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(k,{children:`Default`}),v(k,{variant:`neutral`,children:`Neutral`}),v(k,{variant:`primary`,children:`Primary`}),v(k,{variant:`secondary`,children:`Secondary`}),v(k,{variant:`accent`,children:`Accent`}),v(k,{variant:`success`,children:`Success`}),v(k,{variant:`warning`,children:`Warning`}),v(k,{variant:`info`,children:`Info`}),v(k,{variant:`error`,children:`Error`}),v(k,{color:`primary`,children:`Primary by color`})]}),code:`<div className="flex w-full flex-col">
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
</div>`});p(()=>u(e,l,L))});let R=i(`rue:component:anchor`);t(l,R),n(()=>{let e=d(A,{title:`Divider in different positions`,summary:`保留旧版 placement 用法，也可改用 titlePlacement。`,tab:S,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(k,{placement:`start`,children:`Start`}),v(k,{children:`Default`}),v(k,{placement:`end`,children:`End`})]}),code:`<div className="flex w-full flex-col">
  <Divider placement="start">Start</Divider>
  <Divider>Default</Divider>
  <Divider placement="end">End</Divider>
</div>`});p(()=>u(e,l,R))});let z=i(`rue:component:anchor`);t(l,z),n(()=>{let e=d(A,{title:`Divider in different positions (horizontal)`,summary:`在横向布局中，文本位置仍可配合旧版 direction 使用。`,tab:C,preview:()=>_(`div`,{className:`flex w-full justify-center h-52`,children:[v(k,{direction:`horizontal`,placement:`start`,children:`Start`}),v(k,{direction:`horizontal`,children:`Default`}),v(k,{direction:`horizontal`,placement:`end`,children:`End`})]}),code:`<div className="flex w-full justify-center h-52">
  <Divider direction="horizontal" placement="start">Start</Divider>
  <Divider direction="horizontal">Default</Divider>
  <Divider direction="horizontal" placement="end">End</Divider>
</div>`});p(()=>u(e,l,z))});let B=i(`rue:component:anchor`);t(l,B),n(()=>{let e=d(A,{title:`Line Variants`,summary:`新增实线、虚线、点线三种线型，并兼容 dashed 快捷写法。`,tab:w,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(k,{children:`Solid`}),v(k,{variant:`dashed`,children:`Dashed by variant`}),v(k,{dashed:!0,color:`warning`,children:`Dashed by boolean`}),v(k,{lineVariant:`dotted`,color:`primary`,children:`Dotted`})]}),code:`<div className="flex w-full flex-col">
  <Divider>Solid</Divider>
  <Divider variant="dashed">Dashed by variant</Divider>
  <Divider dashed color="warning">Dashed by boolean</Divider>
  <Divider lineVariant="dotted" color="primary">Dotted</Divider>
</div>`});p(()=>u(e,l,B))});let V=i(`rue:component:anchor`);t(l,V),n(()=>{let e=d(A,{title:`Plain Text`,summary:`新增 plain，让分隔文字从强调标题过渡为更轻的正文说明。`,tab:T,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(k,{children:`默认文字`}),v(k,{plain:!0,children:`作为正文说明的分隔文案`}),v(k,{plain:!0,titlePlacement:`start`,color:`primary`,children:`Rue keeps it subtle`})]}),code:`<div className="flex w-full flex-col">
  <Divider>默认文字</Divider>
  <Divider plain>作为正文说明的分隔文案</Divider>
  <Divider plain titlePlacement="start" color="primary">
    Rue keeps it subtle
  </Divider>
</div>`});p(()=>u(e,l,V))});let H=i(`rue:component:anchor`);t(l,H),n(()=>{let e=d(A,{title:`Vertical Orientation API`,summary:`新增更通用的 orientation / vertical API，适合行内分隔，不展示 children。`,tab:E,preview:()=>_(`div`,{className:`flex flex-wrap items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-5`,children:[v(`span`,{children:`Profile`}),v(k,{orientation:`vertical`,className:`h-6`}),v(`span`,{children:`Team`}),v(k,{vertical:!0,className:`h-6`}),v(`span`,{children:`Billing`}),v(k,{type:`vertical`,className:`h-6`}),v(`span`,{children:`Logs`})]}),code:`<div className="flex flex-wrap items-center gap-3">
  <span>Profile</span>
  <Divider orientation="vertical" className="h-6" />
  <span>Team</span>
  <Divider vertical className="h-6" />
  <span>Billing</span>
  <Divider type="vertical" className="h-6" />
  <span>Logs</span>
</div>`});p(()=>u(e,l,H))});let U=i(`rue:component:anchor`);t(l,U),n(()=>{let e=d(A,{title:`Title Placement And Margin`,summary:`新增 titlePlacement 与 orientationMargin，可更精细地控制文字和边缘的距离。`,tab:D,preview:()=>_(`div`,{className:`flex w-full flex-col`,children:[v(k,{titlePlacement:`start`,orientationMargin:24,children:`Start 24px`}),v(k,{titlePlacement:`center`,children:`Center`}),v(k,{titlePlacement:`end`,orientationMargin:`40`,children:`End 40px`})]}),code:`<div className="flex w-full flex-col">
  <Divider titlePlacement="start" orientationMargin={24}>Start 24px</Divider>
  <Divider titlePlacement="center">Center</Divider>
  <Divider titlePlacement="end" orientationMargin="40">End 40px</Divider>
</div>`});p(()=>u(e,l,U))});let W=i(`rue:component:anchor`);t(l,W),n(()=>{let e=d(A,{title:`Custom Style`,summary:`新增 style / contentStyle / contentClassName，便于保持 Rue 基础视觉下的局部定制。`,tab:O,preview:()=>_(`div`,{className:`flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4`,children:[v(k,{color:`primary`,lineVariant:`dotted`,titlePlacement:`start`,orientationMargin:20,className:`before:border-2 after:border-2`,contentClassName:`rounded-full bg-primary/10 px-3 py-1 text-primary`,children:`Project Status`}),v(k,{plain:!0,style:{background:`rgba(16, 185, 129, 0.06)`},contentStyle:{letterSpacing:`0.08em`},className:`rounded-box px-2`,children:`DEPLOYMENT READY`})]}),code:`<div className="flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4">
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
</div>`});p(()=>u(e,l,W))});let G=o(`div`,l);t(l,G),e(G,`my-10`);let K=o(`h2`,G);t(G,K),t(K,r(`API`));let q=o(`p`,G);t(G,q),e(q,`text-sm opacity-70 mt-2`),t(q,r(`新版 Divider 同时兼容 Rue 旧写法与更语义化的新 API，便于渐进迁移。`));let J=i(`rue:component:anchor`);return t(G,J),n(()=>{let e=d(j,{rows:N});p(()=>u(e,G,J))}),c})}),f,m),f})};export{P as default};