import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,ot as f,t as p}from"./vapor-runtime-BR_2rwNk.js";import{a as m,n as h}from"./vapor-helpers-vapor-DkadWylb.js";import{i as g,r as _}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as v}from"./tabs-DMHgT-aV.js";import{n as y}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as b}from"./Code-B_4lzH85.js";var x=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],S=[`solid`,`dashed`,`dotted`],C=e=>!!e&&x.includes(e),w=e=>!!e&&S.includes(e),T=(...e)=>e.filter(Boolean).join(` `),E=e=>{if(typeof e==`number`)return e;if(typeof e==`string`)return/^\d+(\.\d+)?$/.test(e)?Number(e):e},D=e=>{if(!(!e||e===`vertical`))return`divider-horizontal`},O=(e,t,n)=>(e??n??(t?`vertical`:`horizontal`))===`vertical`?`divider-horizontal`:void 0,k=({color:e,variant:t,lineVariant:n,direction:r,orientation:i,type:a,vertical:o,placement:s,titlePlacement:c,orientationMargin:l,dashed:u,plain:d,className:f,contentClassName:p,style:m,contentStyle:h,children:g,...v})=>{let y=e??(C(t)?t:void 0),b=n??(w(t)?t:void 0)??(u?`dashed`:`solid`),x=c??s,S=i||a||o?O(i,o,a):D(r),k=(i??a??(o?`vertical`:`horizontal`))===`vertical`,A=E(l),j=T(`divider`,S,y?`divider-${y}`:void 0,x&&x!==`center`?`divider-${x}`:void 0,b===`dashed`?`before:border-dashed after:border-dashed`:void 0,b===`dotted`?`before:border-dotted after:border-dotted`:void 0,f),M=T(`whitespace-nowrap`,d?`font-normal opacity-80`:void 0,p),N=x===`start`?{marginInlineStart:A,...h}:x===`end`?{marginInlineEnd:A,...h}:h;return _(`div`,{className:j,style:m,role:`separator`,"aria-orientation":k?`vertical`:`horizontal`,...v,children:!k&&g!=null?_(`span`,{className:M,style:N,children:g}):null})},A=t=>l(n=>{let f=e(`div`,n);c(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=e(`div`,f);a(f,m),c(m,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,m);a(m,h);let g=e(`h2`,h);a(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=s(`rue:slot:anchor`);a(g,_),o(()=>{let e=t.title;i(()=>d(e,g,_))});let y=s(`rue:slot:anchor`);a(h,y),o(()=>{let n=t.summary?l(()=>{let n=r(),l=e(`p`,n);a(n,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return a(l,u),o(()=>{let e=t.summary;i(()=>d(e,l,u))}),n}):``;i(()=>d(n,h,y))});let x=s(`rue:component:anchor`);a(f,x),o(()=>{let e=p(v,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});i(()=>d(e,f,x))});let S=s(`rue:slot:anchor`);return a(f,S),o(()=>{let e=t.tab.value===`preview`?t.preview():l(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=p(b,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>d(r,e,n))}),e});i(()=>d(e,f,S))}),f}),j=t=>l(n=>{let p=e(`div`,n);c(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,p);a(p,m),c(m,`table table-zebra`);let g=e(`thead`,m);a(m,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,u(`属性`));let y=e(`th`,_);a(_,y),a(y,u(`说明`));let b=e(`th`,_);a(_,b),a(b,u(`类型`));let x=e(`th`,_);a(_,x),a(x,u(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,u,p)=>{d(l(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{f(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let p=s(`rue:slot:anchor`);a(u,p),o(()=>{let e=t.prop;i(()=>d(e,u,p))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>d(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>d(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>d(e,b,x))}),n}),n,c)}})}),p}),M=t=>l(n=>{let r=e(`div`,n);o(()=>{c(r,String(`grid rounded-box card bg-base-300 place-items-center ${t.className??`h-20`}`.trim()))});let l=s(`rue:slot:anchor`);return a(r,l),o(()=>{let e=t.label;i(()=>d(e,r,l))}),r}),N=[{prop:`children`,description:`分隔线中展示的内容；使用 orientation="vertical" 或 vertical 时不显示。`,type:`any`,defaultValue:`-`},{prop:`color`,description:`推荐写法，设置 Rue 语义色。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`variant`,description:`兼容旧版颜色写法，同时支持 solid / dashed / dotted 线型。`,type:`tone | 'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`lineVariant`,description:`显式设置线型，优先级高于 dashed。`,type:`'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`dashed`,description:`快捷开启虚线。`,type:`boolean`,defaultValue:`false`},{prop:`plain`,description:`让分隔文字更接近正文样式，适合说明性内容。`,type:`boolean`,defaultValue:`false`},{prop:`titlePlacement`,description:`推荐写法，控制文本位于起始、居中或结束位置。`,type:`'start' | 'center' | 'end'`,defaultValue:`center`},{prop:`placement`,description:`兼容旧版 start / end 文本位置。`,type:`'start' | 'end'`,defaultValue:`-`},{prop:`orientationMargin`,description:`仅在 titlePlacement 为 start / end 时生效，控制文本和最近边缘的距离。`,type:`string | number`,defaultValue:`-`},{prop:`orientation`,description:`推荐写法，控制横向或纵向分隔；vertical 模式更适合行内分隔。`,type:`'horizontal' | 'vertical'`,defaultValue:`horizontal`},{prop:`vertical / type`,description:`vertical 是 orientation="vertical" 的快捷写法；type 作为同义别名保留。`,type:`boolean | 'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`direction`,description:`兼容 Rue 旧写法；在横向布局中常用 direction="horizontal" 切换为纵向视觉。`,type:`'vertical' | 'horizontal'`,defaultValue:`-`}],P=()=>{let{tabBasic:f,tabHorizontal:h,tabNoText:v,tabResponsive:b,tabColors:x,tabPositionsV:S,tabPositionsH:C,tabLineVariants:w,tabPlain:T,tabVerticalApi:E,tabMargin:D,tabCustom:O}=m(`useSetup:0:0`,()=>t(()=>({tabBasic:m(`ref:1:0`,()=>n(`preview`)),tabHorizontal:m(`ref:1:1`,()=>n(`preview`)),tabNoText:m(`ref:1:2`,()=>n(`preview`)),tabResponsive:m(`ref:1:3`,()=>n(`preview`)),tabColors:m(`ref:1:4`,()=>n(`preview`)),tabPositionsV:m(`ref:1:5`,()=>n(`preview`)),tabPositionsH:m(`ref:1:6`,()=>n(`preview`)),tabLineVariants:m(`ref:1:7`,()=>n(`preview`)),tabPlain:m(`ref:1:8`,()=>n(`preview`)),tabVerticalApi:m(`ref:1:9`,()=>n(`preview`)),tabMargin:m(`ref:1:10`,()=>n(`preview`)),tabCustom:m(`ref:1:11`,()=>n(`preview`))})));return l(t=>{let n=r(),m=s(`rue:component:anchor`);return a(n,m),d(p(y,{children:l(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let l=e(`h1`,n);a(n,l),a(l,u(`Divider 分隔线`));let m=e(`p`,n);a(n,m),c(m,`text-sm mt-3 mb-3`),a(m,u(`分隔线（Divider）用于在内容之间建立轻量层级。Rue 保留原有视觉风格，并补充了更完整的文本位置、线型和垂直分隔能力。`));let y=s(`rue:component:anchor`);a(n,y),o(()=>{let e=p(A,{title:`Divider`,summary:`基础分隔线，保留现有默认用法。`,tab:f,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{children:`OR`}),_(M,{label:`content`})]}),code:`import { Divider } from '@rue-js/design'

<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider>OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});i(()=>d(e,n,y))});let P=s(`rue:component:anchor`);a(n,P),o(()=>{let e=p(A,{title:`Divider horizontal`,summary:`保留 Rue 旧版 direction 用法，在横向布局中展示纵向分隔。`,tab:h,preview:()=>g(`div`,{className:`flex w-full`,children:[_(M,{label:`content`,className:`h-20 grow`}),_(k,{direction:`horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-20 grow`})]}),code:`<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <Divider direction="horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>`});i(()=>d(e,n,P))});let F=s(`rue:component:anchor`);a(n,F),o(()=>{let e=p(A,{title:`Divider with no text`,summary:`没有文字时，Divider 仍可作为纯分隔元素使用。`,tab:v,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{}),_(M,{label:`content`})]}),code:`<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider />
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});i(()=>d(e,n,F))});let I=s(`rue:component:anchor`);a(n,I),o(()=>{let e=p(A,{title:`Responsive Divider`,summary:`继续支持通过 className 结合响应式类切换方向。`,tab:b,preview:()=>g(`div`,{className:`flex w-full flex-col lg:flex-row`,children:[_(M,{label:`content`,className:`h-32 grow`}),_(k,{className:`lg:divider-horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-32 grow`})]}),code:`<div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <Divider className="lg:divider-horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>`});i(()=>d(e,n,I))});let L=s(`rue:component:anchor`);a(n,L),o(()=>{let e=p(A,{title:`Divider with colors`,summary:`现有颜色能力保留，同时推荐新写法使用 color。`,tab:x,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Default`}),_(k,{variant:`neutral`,children:`Neutral`}),_(k,{variant:`primary`,children:`Primary`}),_(k,{variant:`secondary`,children:`Secondary`}),_(k,{variant:`accent`,children:`Accent`}),_(k,{variant:`success`,children:`Success`}),_(k,{variant:`warning`,children:`Warning`}),_(k,{variant:`info`,children:`Info`}),_(k,{variant:`error`,children:`Error`}),_(k,{color:`primary`,children:`Primary by color`})]}),code:`<div className="flex w-full flex-col">
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
</div>`});i(()=>d(e,n,L))});let R=s(`rue:component:anchor`);a(n,R),o(()=>{let e=p(A,{title:`Divider in different positions`,summary:`保留旧版 placement 用法，也可改用 titlePlacement。`,tab:S,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{placement:`start`,children:`Start`}),_(k,{children:`Default`}),_(k,{placement:`end`,children:`End`})]}),code:`<div className="flex w-full flex-col">
  <Divider placement="start">Start</Divider>
  <Divider>Default</Divider>
  <Divider placement="end">End</Divider>
</div>`});i(()=>d(e,n,R))});let z=s(`rue:component:anchor`);a(n,z),o(()=>{let e=p(A,{title:`Divider in different positions (horizontal)`,summary:`在横向布局中，文本位置仍可配合旧版 direction 使用。`,tab:C,preview:()=>g(`div`,{className:`flex w-full justify-center h-52`,children:[_(k,{direction:`horizontal`,placement:`start`,children:`Start`}),_(k,{direction:`horizontal`,children:`Default`}),_(k,{direction:`horizontal`,placement:`end`,children:`End`})]}),code:`<div className="flex w-full justify-center h-52">
  <Divider direction="horizontal" placement="start">Start</Divider>
  <Divider direction="horizontal">Default</Divider>
  <Divider direction="horizontal" placement="end">End</Divider>
</div>`});i(()=>d(e,n,z))});let B=s(`rue:component:anchor`);a(n,B),o(()=>{let e=p(A,{title:`Line Variants`,summary:`新增实线、虚线、点线三种线型，并兼容 dashed 快捷写法。`,tab:w,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Solid`}),_(k,{variant:`dashed`,children:`Dashed by variant`}),_(k,{dashed:!0,color:`warning`,children:`Dashed by boolean`}),_(k,{lineVariant:`dotted`,color:`primary`,children:`Dotted`})]}),code:`<div className="flex w-full flex-col">
  <Divider>Solid</Divider>
  <Divider variant="dashed">Dashed by variant</Divider>
  <Divider dashed color="warning">Dashed by boolean</Divider>
  <Divider lineVariant="dotted" color="primary">Dotted</Divider>
</div>`});i(()=>d(e,n,B))});let V=s(`rue:component:anchor`);a(n,V),o(()=>{let e=p(A,{title:`Plain Text`,summary:`新增 plain，让分隔文字从强调标题过渡为更轻的正文说明。`,tab:T,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`默认文字`}),_(k,{plain:!0,children:`作为正文说明的分隔文案`}),_(k,{plain:!0,titlePlacement:`start`,color:`primary`,children:`Rue keeps it subtle`})]}),code:`<div className="flex w-full flex-col">
  <Divider>默认文字</Divider>
  <Divider plain>作为正文说明的分隔文案</Divider>
  <Divider plain titlePlacement="start" color="primary">
    Rue keeps it subtle
  </Divider>
</div>`});i(()=>d(e,n,V))});let H=s(`rue:component:anchor`);a(n,H),o(()=>{let e=p(A,{title:`Vertical Orientation API`,summary:`新增更通用的 orientation / vertical API，适合行内分隔，不展示 children。`,tab:E,preview:()=>g(`div`,{className:`flex flex-wrap items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-5`,children:[_(`span`,{children:`Profile`}),_(k,{orientation:`vertical`,className:`h-6`}),_(`span`,{children:`Team`}),_(k,{vertical:!0,className:`h-6`}),_(`span`,{children:`Billing`}),_(k,{type:`vertical`,className:`h-6`}),_(`span`,{children:`Logs`})]}),code:`<div className="flex flex-wrap items-center gap-3">
  <span>Profile</span>
  <Divider orientation="vertical" className="h-6" />
  <span>Team</span>
  <Divider vertical className="h-6" />
  <span>Billing</span>
  <Divider type="vertical" className="h-6" />
  <span>Logs</span>
</div>`});i(()=>d(e,n,H))});let U=s(`rue:component:anchor`);a(n,U),o(()=>{let e=p(A,{title:`Title Placement And Margin`,summary:`新增 titlePlacement 与 orientationMargin，可更精细地控制文字和边缘的距离。`,tab:D,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{titlePlacement:`start`,orientationMargin:24,children:`Start 24px`}),_(k,{titlePlacement:`center`,children:`Center`}),_(k,{titlePlacement:`end`,orientationMargin:`40`,children:`End 40px`})]}),code:`<div className="flex w-full flex-col">
  <Divider titlePlacement="start" orientationMargin={24}>Start 24px</Divider>
  <Divider titlePlacement="center">Center</Divider>
  <Divider titlePlacement="end" orientationMargin="40">End 40px</Divider>
</div>`});i(()=>d(e,n,U))});let W=s(`rue:component:anchor`);a(n,W),o(()=>{let e=p(A,{title:`Custom Style`,summary:`新增 style / contentStyle / contentClassName，便于保持 Rue 基础视觉下的局部定制。`,tab:O,preview:()=>g(`div`,{className:`flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4`,children:[_(k,{color:`primary`,lineVariant:`dotted`,titlePlacement:`start`,orientationMargin:20,className:`before:border-2 after:border-2`,contentClassName:`rounded-full bg-primary/10 px-3 py-1 text-primary`,children:`Project Status`}),_(k,{plain:!0,style:{background:`rgba(16, 185, 129, 0.06)`},contentStyle:{letterSpacing:`0.08em`},className:`rounded-box px-2`,children:`DEPLOYMENT READY`})]}),code:`<div className="flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4">
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
</div>`});i(()=>d(e,n,W))});let G=e(`div`,n);a(n,G),c(G,`my-10`);let K=e(`h2`,G);a(G,K),a(K,u(`API`));let q=e(`p`,G);a(G,q),c(q,`text-sm opacity-70 mt-2`),a(q,u(`新版 Divider 同时兼容 Rue 旧写法与更语义化的新 API，便于渐进迁移。`));let J=s(`rue:component:anchor`);return a(G,J),o(()=>{let e=p(j,{rows:N});i(()=>d(e,G,J))}),t})}),n,m),n})};export{P as default};