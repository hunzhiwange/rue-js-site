import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,ot as u,qt as d,s as f,t as p}from"./vapor-runtime-aZAg0Qkw.js";import{a as m,n as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as g,i as _}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as v}from"./Code-5DOEyGxf.js";import{t as y}from"./tabs-CWmjyn0I.js";import{r as b}from"./SidebarPlaygroundDesign-CS11MI8e.js";var x=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],S=[`solid`,`dashed`,`dotted`],C=e=>!!e&&x.includes(e),w=e=>!!e&&S.includes(e),T=(...e)=>e.filter(Boolean).join(` `),E=e=>{if(typeof e==`number`)return e;if(typeof e==`string`)return/^\d+(\.\d+)?$/.test(e)?Number(e):e},D=e=>{if(!(!e||e===`vertical`))return`divider-horizontal`},O=(e,t,n)=>(e??n??(t?`vertical`:`horizontal`))===`vertical`?`divider-horizontal`:void 0,k=({color:e,variant:t,lineVariant:n,direction:r,orientation:i,type:a,vertical:o,placement:s,titlePlacement:c,orientationMargin:l,dashed:u,plain:d,className:f,contentClassName:p,style:m,contentStyle:h,children:g,...v})=>{let y=e??(C(t)?t:void 0),b=n??(w(t)?t:void 0)??(u?`dashed`:`solid`),x=c??s,S=i||a||o?O(i,o,a):D(r),k=(i??a??(o?`vertical`:`horizontal`))===`vertical`,A=E(l),j=T(`divider`,S,y?`divider-${y}`:void 0,x&&x!==`center`?`divider-${x}`:void 0,b===`dashed`?`before:border-dashed after:border-dashed`:void 0,b===`dotted`?`before:border-dotted after:border-dotted`:void 0,f),M=T(`whitespace-nowrap`,d?`font-normal opacity-80`:void 0,p),N=x===`start`?{marginInlineStart:A,...h}:x===`end`?{marginInlineEnd:A,...h}:h;return _(`div`,{className:j,style:m,role:`separator`,"aria-orientation":k?`vertical`:`horizontal`,...v,children:!k&&g!=null?_(`span`,{className:M,style:N,children:g}):null})},A=r=>l(u=>{let d=e(`div`,u);s(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=e(`div`,d);a(d,m),s(m,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,m);a(m,h);let g=e(`h2`,h);a(h,g),s(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,c(`# `));let _=o(`rue:slot:anchor`);a(g,_),i(()=>{let e=r.title;t(()=>f(e,g,_))});let b=o(`rue:slot:anchor`);a(h,b),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>f(e,l,u))}),c}):``;t(()=>f(c,h,b))});let x=o(`rue:component:anchor`);a(d,x),i(()=>{let e=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>f(e,d,x))});let S=o(`rue:slot:anchor`);return a(d,S),i(()=>{let e=r.tab.value===`preview`?r.preview():l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=p(v,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>f(n,e,s))}),e});t(()=>f(e,d,S))}),d}),j=r=>l(d=>{let p=e(`div`,d);s(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,p);a(p,m),s(m,`table table-zebra`);let g=e(`thead`,m);a(m,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,c(`属性`));let y=e(`th`,_);a(_,y),a(y,c(`说明`));let b=e(`th`,_);a(_,b),a(b,c(`类型`));let x=e(`th`,_);a(_,x),a(x,c(`默认值`));let S=e(`tbody`,m);a(m,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=h({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,d,p)=>{f(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{u(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let d=e(`code`,l);a(l,d);let p=o(`rue:slot:anchor`);a(d,p),i(()=>{let e=r.prop;t(()=>f(e,d,p))});let m=e(`td`,c);a(c,m);let h=o(`rue:slot:anchor`);a(m,h),i(()=>{let e=r.description;t(()=>f(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>f(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>f(e,b,x))}),s}),s,c)}})}),p}),M=n=>l(r=>{let c=e(`div`,r);i(()=>{s(c,String(`grid rounded-box card bg-base-300 place-items-center ${n.className??`h-20`}`.trim()))});let l=o(`rue:slot:anchor`);return a(c,l),i(()=>{let e=n.label;t(()=>f(e,c,l))}),c}),N=[{prop:`children`,description:`分隔线中展示的内容；使用 orientation="vertical" 或 vertical 时不显示。`,type:`any`,defaultValue:`-`},{prop:`color`,description:`推荐写法，设置 Rue 语义色。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`variant`,description:`兼容旧版颜色写法，同时支持 solid / dashed / dotted 线型。`,type:`tone | 'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`lineVariant`,description:`显式设置线型，优先级高于 dashed。`,type:`'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`dashed`,description:`快捷开启虚线。`,type:`boolean`,defaultValue:`false`},{prop:`plain`,description:`让分隔文字更接近正文样式，适合说明性内容。`,type:`boolean`,defaultValue:`false`},{prop:`titlePlacement`,description:`推荐写法，控制文本位于起始、居中或结束位置。`,type:`'start' | 'center' | 'end'`,defaultValue:`center`},{prop:`placement`,description:`兼容旧版 start / end 文本位置。`,type:`'start' | 'end'`,defaultValue:`-`},{prop:`orientationMargin`,description:`仅在 titlePlacement 为 start / end 时生效，控制文本和最近边缘的距离。`,type:`string | number`,defaultValue:`-`},{prop:`orientation`,description:`推荐写法，控制横向或纵向分隔；vertical 模式更适合行内分隔。`,type:`'horizontal' | 'vertical'`,defaultValue:`horizontal`},{prop:`vertical / type`,description:`vertical 是 orientation="vertical" 的快捷写法；type 作为同义别名保留。`,type:`boolean | 'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`direction`,description:`兼容 Rue 旧写法；在横向布局中常用 direction="horizontal" 切换为纵向视觉。`,type:`'vertical' | 'horizontal'`,defaultValue:`-`}],P=()=>{let{tabBasic:u,tabHorizontal:h,tabNoText:v,tabResponsive:y,tabColors:x,tabPositionsV:S,tabPositionsH:C,tabLineVariants:w,tabPlain:T,tabVerticalApi:E,tabMargin:D,tabCustom:O}=m(`useSetup:0:0`,()=>d(()=>({tabBasic:m(`ref:1:0`,()=>r(`preview`)),tabHorizontal:m(`ref:1:1`,()=>r(`preview`)),tabNoText:m(`ref:1:2`,()=>r(`preview`)),tabResponsive:m(`ref:1:3`,()=>r(`preview`)),tabColors:m(`ref:1:4`,()=>r(`preview`)),tabPositionsV:m(`ref:1:5`,()=>r(`preview`)),tabPositionsH:m(`ref:1:6`,()=>r(`preview`)),tabLineVariants:m(`ref:1:7`,()=>r(`preview`)),tabPlain:m(`ref:1:8`,()=>r(`preview`)),tabVerticalApi:m(`ref:1:9`,()=>r(`preview`)),tabMargin:m(`ref:1:10`,()=>r(`preview`)),tabCustom:m(`ref:1:11`,()=>r(`preview`))})));return l(r=>{let d=n(),m=o(`rue:component:anchor`);return a(d,m),f(p(b,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,l);a(l,d),a(d,c(`Divider 分隔线`));let m=e(`p`,l);a(l,m),s(m,`text-sm mt-3 mb-3`),a(m,c(`分隔线（Divider）用于在内容之间建立轻量层级。Rue 保留原有视觉风格，并补充了更完整的文本位置、线型和垂直分隔能力。`));let b=o(`rue:component:anchor`);a(l,b),i(()=>{let e=p(A,{title:`Divider`,summary:`基础分隔线，保留现有默认用法。`,tab:u,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{children:`OR`}),_(M,{label:`content`})]}),code:`import { Divider } from '@rue-js/design'

<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider>OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});t(()=>f(e,l,b))});let P=o(`rue:component:anchor`);a(l,P),i(()=>{let e=p(A,{title:`Divider horizontal`,summary:`保留 Rue 旧版 direction 用法，在横向布局中展示纵向分隔。`,tab:h,preview:()=>g(`div`,{className:`flex w-full`,children:[_(M,{label:`content`,className:`h-20 grow`}),_(k,{direction:`horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-20 grow`})]}),code:`<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <Divider direction="horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>`});t(()=>f(e,l,P))});let F=o(`rue:component:anchor`);a(l,F),i(()=>{let e=p(A,{title:`Divider with no text`,summary:`没有文字时，Divider 仍可作为纯分隔元素使用。`,tab:v,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{}),_(M,{label:`content`})]}),code:`<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider />
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});t(()=>f(e,l,F))});let I=o(`rue:component:anchor`);a(l,I),i(()=>{let e=p(A,{title:`Responsive Divider`,summary:`继续支持通过 className 结合响应式类切换方向。`,tab:y,preview:()=>g(`div`,{className:`flex w-full flex-col lg:flex-row`,children:[_(M,{label:`content`,className:`h-32 grow`}),_(k,{className:`lg:divider-horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-32 grow`})]}),code:`<div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <Divider className="lg:divider-horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>`});t(()=>f(e,l,I))});let L=o(`rue:component:anchor`);a(l,L),i(()=>{let e=p(A,{title:`Divider with colors`,summary:`现有颜色能力保留，同时推荐新写法使用 color。`,tab:x,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Default`}),_(k,{variant:`neutral`,children:`Neutral`}),_(k,{variant:`primary`,children:`Primary`}),_(k,{variant:`secondary`,children:`Secondary`}),_(k,{variant:`accent`,children:`Accent`}),_(k,{variant:`success`,children:`Success`}),_(k,{variant:`warning`,children:`Warning`}),_(k,{variant:`info`,children:`Info`}),_(k,{variant:`error`,children:`Error`}),_(k,{color:`primary`,children:`Primary by color`})]}),code:`<div className="flex w-full flex-col">
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
</div>`});t(()=>f(e,l,L))});let R=o(`rue:component:anchor`);a(l,R),i(()=>{let e=p(A,{title:`Divider in different positions`,summary:`保留旧版 placement 用法，也可改用 titlePlacement。`,tab:S,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{placement:`start`,children:`Start`}),_(k,{children:`Default`}),_(k,{placement:`end`,children:`End`})]}),code:`<div className="flex w-full flex-col">
  <Divider placement="start">Start</Divider>
  <Divider>Default</Divider>
  <Divider placement="end">End</Divider>
</div>`});t(()=>f(e,l,R))});let z=o(`rue:component:anchor`);a(l,z),i(()=>{let e=p(A,{title:`Divider in different positions (horizontal)`,summary:`在横向布局中，文本位置仍可配合旧版 direction 使用。`,tab:C,preview:()=>g(`div`,{className:`flex w-full justify-center h-52`,children:[_(k,{direction:`horizontal`,placement:`start`,children:`Start`}),_(k,{direction:`horizontal`,children:`Default`}),_(k,{direction:`horizontal`,placement:`end`,children:`End`})]}),code:`<div className="flex w-full justify-center h-52">
  <Divider direction="horizontal" placement="start">Start</Divider>
  <Divider direction="horizontal">Default</Divider>
  <Divider direction="horizontal" placement="end">End</Divider>
</div>`});t(()=>f(e,l,z))});let B=o(`rue:component:anchor`);a(l,B),i(()=>{let e=p(A,{title:`Line Variants`,summary:`新增实线、虚线、点线三种线型，并兼容 dashed 快捷写法。`,tab:w,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Solid`}),_(k,{variant:`dashed`,children:`Dashed by variant`}),_(k,{dashed:!0,color:`warning`,children:`Dashed by boolean`}),_(k,{lineVariant:`dotted`,color:`primary`,children:`Dotted`})]}),code:`<div className="flex w-full flex-col">
  <Divider>Solid</Divider>
  <Divider variant="dashed">Dashed by variant</Divider>
  <Divider dashed color="warning">Dashed by boolean</Divider>
  <Divider lineVariant="dotted" color="primary">Dotted</Divider>
</div>`});t(()=>f(e,l,B))});let V=o(`rue:component:anchor`);a(l,V),i(()=>{let e=p(A,{title:`Plain Text`,summary:`新增 plain，让分隔文字从强调标题过渡为更轻的正文说明。`,tab:T,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`默认文字`}),_(k,{plain:!0,children:`作为正文说明的分隔文案`}),_(k,{plain:!0,titlePlacement:`start`,color:`primary`,children:`Rue keeps it subtle`})]}),code:`<div className="flex w-full flex-col">
  <Divider>默认文字</Divider>
  <Divider plain>作为正文说明的分隔文案</Divider>
  <Divider plain titlePlacement="start" color="primary">
    Rue keeps it subtle
  </Divider>
</div>`});t(()=>f(e,l,V))});let H=o(`rue:component:anchor`);a(l,H),i(()=>{let e=p(A,{title:`Vertical Orientation API`,summary:`新增更通用的 orientation / vertical API，适合行内分隔，不展示 children。`,tab:E,preview:()=>g(`div`,{className:`flex flex-wrap items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-5`,children:[_(`span`,{children:`Profile`}),_(k,{orientation:`vertical`,className:`h-6`}),_(`span`,{children:`Team`}),_(k,{vertical:!0,className:`h-6`}),_(`span`,{children:`Billing`}),_(k,{type:`vertical`,className:`h-6`}),_(`span`,{children:`Logs`})]}),code:`<div className="flex flex-wrap items-center gap-3">
  <span>Profile</span>
  <Divider orientation="vertical" className="h-6" />
  <span>Team</span>
  <Divider vertical className="h-6" />
  <span>Billing</span>
  <Divider type="vertical" className="h-6" />
  <span>Logs</span>
</div>`});t(()=>f(e,l,H))});let U=o(`rue:component:anchor`);a(l,U),i(()=>{let e=p(A,{title:`Title Placement And Margin`,summary:`新增 titlePlacement 与 orientationMargin，可更精细地控制文字和边缘的距离。`,tab:D,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{titlePlacement:`start`,orientationMargin:24,children:`Start 24px`}),_(k,{titlePlacement:`center`,children:`Center`}),_(k,{titlePlacement:`end`,orientationMargin:`40`,children:`End 40px`})]}),code:`<div className="flex w-full flex-col">
  <Divider titlePlacement="start" orientationMargin={24}>Start 24px</Divider>
  <Divider titlePlacement="center">Center</Divider>
  <Divider titlePlacement="end" orientationMargin="40">End 40px</Divider>
</div>`});t(()=>f(e,l,U))});let W=o(`rue:component:anchor`);a(l,W),i(()=>{let e=p(A,{title:`Custom Style`,summary:`新增 style / contentStyle / contentClassName，便于保持 Rue 基础视觉下的局部定制。`,tab:O,preview:()=>g(`div`,{className:`flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4`,children:[_(k,{color:`primary`,lineVariant:`dotted`,titlePlacement:`start`,orientationMargin:20,className:`before:border-2 after:border-2`,contentClassName:`rounded-full bg-primary/10 px-3 py-1 text-primary`,children:`Project Status`}),_(k,{plain:!0,style:{background:`rgba(16, 185, 129, 0.06)`},contentStyle:{letterSpacing:`0.08em`},className:`rounded-box px-2`,children:`DEPLOYMENT READY`})]}),code:`<div className="flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4">
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
</div>`});t(()=>f(e,l,W))});let G=e(`div`,l);a(l,G),s(G,`my-10`);let K=e(`h2`,G);a(G,K),a(K,c(`API`));let q=e(`p`,G);a(G,q),s(q,`text-sm opacity-70 mt-2`),a(q,c(`新版 Divider 同时兼容 Rue 旧写法与更语义化的新 API，便于渐进迁移。`));let J=o(`rue:component:anchor`);return a(G,J),i(()=>{let e=p(j,{rows:N});t(()=>f(e,G,J))}),r})}),d,m),d})};export{P as default};