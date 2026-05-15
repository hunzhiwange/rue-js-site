import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,_t as s,d as c,l,mt as u,ot as d,t as f,ut as p}from"./vapor-runtime-Bp8DIxJg.js";import{a as m,n as h}from"./vapor-helpers-vapor-D3i3KBBg.js";import{n as g,t as _}from"./src-Cl1DK5fX.js";import{n as v}from"./SidebarPlaygroundDesign-CIhn6bFh.js";import{t as y}from"./Code-D55WiaDx.js";import{t as b}from"./tabs-CrC7r95z.js";var x=[`neutral`,`primary`,`secondary`,`accent`,`success`,`warning`,`info`,`error`],S=[`solid`,`dashed`,`dotted`],C=e=>!!e&&x.includes(e),w=e=>!!e&&S.includes(e),T=(...e)=>e.filter(Boolean).join(` `),E=e=>{if(typeof e==`number`)return e;if(typeof e==`string`)return/^\d+(\.\d+)?$/.test(e)?Number(e):e},D=e=>{if(!(!e||e===`vertical`))return`divider-horizontal`},O=(e,t,n)=>(e??n??(t?`vertical`:`horizontal`))===`vertical`?`divider-horizontal`:void 0,k=({color:e,variant:t,lineVariant:n,direction:r,orientation:i,type:a,vertical:o,placement:s,titlePlacement:c,orientationMargin:l,dashed:u,plain:d,className:f,contentClassName:p,style:m,contentStyle:h,children:g,...v})=>{let y=e??(C(t)?t:void 0),b=n??(w(t)?t:void 0)??(u?`dashed`:`solid`),x=c??s,S=i||a||o?O(i,o,a):D(r),k=(i??a??(o?`vertical`:`horizontal`))===`vertical`,A=E(l),j=T(`divider`,S,y?`divider-${y}`:void 0,x&&x!==`center`?`divider-${x}`:void 0,b===`dashed`?`before:border-dashed after:border-dashed`:void 0,b===`dotted`?`before:border-dotted after:border-dotted`:void 0,f),M=T(`whitespace-nowrap`,d?`font-normal opacity-80`:void 0,p),N=x===`start`?{marginInlineStart:A,...h}:x===`end`?{marginInlineEnd:A,...h}:h;return _(`div`,{className:j,style:m,role:`separator`,"aria-orientation":k?`vertical`:`horizontal`,...v,children:!k&&g!=null?_(`span`,{className:M,style:N,children:g}):null})},A=o=>c(u=>{let d=r(`div`,u);n(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=r(`div`,d);i(d,m),n(m,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,m);i(m,h);let g=r(`h2`,h);i(h,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,a(`# `));let _=e(`rue:slot:anchor`);i(g,_),s(()=>{let e=o.title;p(()=>l(e,g,_))});let v=e(`rue:slot:anchor`);i(h,v),s(()=>{let a=o.summary?c(()=>{let a=t(),c=r(`p`,a);i(a,c),n(c,`m-0 text-sm opacity-70`);let u=e(`rue:slot:anchor`);return i(c,u),s(()=>{let e=o.summary;p(()=>l(e,c,u))}),a}):``;p(()=>l(a,h,v))});let x=e(`rue:component:anchor`);i(d,x),s(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});p(()=>l(e,d,x))});let S=e(`rue:slot:anchor`);return i(d,S),s(()=>{let n=o.tab.value===`preview`?o.preview():c(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),s(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:o.code});p(()=>l(e,n,r))}),n});p(()=>l(n,d,S))}),d}),j=u=>c(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=r(`table`,f);i(f,m),n(m,`table table-zebra`);let g=r(`thead`,m);i(m,g);let _=r(`tr`,g);i(g,_);let v=r(`th`,_);i(_,v),i(v,a(`属性`));let y=r(`th`,_);i(_,y),i(y,a(`说明`));let b=r(`th`,_);i(_,b),i(b,a(`类型`));let x=r(`th`,_);i(_,x),i(x,a(`默认值`));let S=r(`tbody`,m);i(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return s(()=>{T=h({items:u.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,u,d,f)=>{l(c(()=>{let a=t(),c=r(`tr`,a);i(a,c),s(()=>{o(c,`key`,String(n.prop))});let u=r(`td`,c);i(c,u);let d=r(`code`,u);i(u,d);let f=e(`rue:slot:anchor`);i(d,f),s(()=>{let e=n.prop;p(()=>l(e,d,f))});let m=r(`td`,c);i(c,m);let h=e(`rue:slot:anchor`);i(m,h),s(()=>{let e=n.description;p(()=>l(e,m,h))});let g=r(`td`,c);i(c,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),s(()=>{let e=n.type;p(()=>l(e,_,v))});let y=r(`td`,c);i(c,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),s(()=>{let e=n.defaultValue;p(()=>l(e,b,x))}),a}),a,u)}})}),f}),M=t=>c(a=>{let o=r(`div`,a);s(()=>{n(o,String(`grid rounded-box card bg-base-300 place-items-center ${t.className??`h-20`}`.trim()))});let c=e(`rue:slot:anchor`);return i(o,c),s(()=>{let e=t.label;p(()=>l(e,o,c))}),o}),N=[{prop:`children`,description:`分隔线中展示的内容；使用 orientation="vertical" 或 vertical 时不显示。`,type:`any`,defaultValue:`-`},{prop:`color`,description:`推荐写法，设置 Rue 语义色。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error'`,defaultValue:`-`},{prop:`variant`,description:`兼容旧版颜色写法，同时支持 solid / dashed / dotted 线型。`,type:`tone | 'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`lineVariant`,description:`显式设置线型，优先级高于 dashed。`,type:`'solid' | 'dashed' | 'dotted'`,defaultValue:`solid`},{prop:`dashed`,description:`快捷开启虚线。`,type:`boolean`,defaultValue:`false`},{prop:`plain`,description:`让分隔文字更接近正文样式，适合说明性内容。`,type:`boolean`,defaultValue:`false`},{prop:`titlePlacement`,description:`推荐写法，控制文本位于起始、居中或结束位置。`,type:`'start' | 'center' | 'end'`,defaultValue:`center`},{prop:`placement`,description:`兼容旧版 start / end 文本位置。`,type:`'start' | 'end'`,defaultValue:`-`},{prop:`orientationMargin`,description:`仅在 titlePlacement 为 start / end 时生效，控制文本和最近边缘的距离。`,type:`string | number`,defaultValue:`-`},{prop:`orientation`,description:`推荐写法，控制横向或纵向分隔；vertical 模式更适合行内分隔。`,type:`'horizontal' | 'vertical'`,defaultValue:`horizontal`},{prop:`vertical / type`,description:`vertical 是 orientation="vertical" 的快捷写法；type 作为同义别名保留。`,type:`boolean | 'horizontal' | 'vertical'`,defaultValue:`-`},{prop:`direction`,description:`兼容 Rue 旧写法；在横向布局中常用 direction="horizontal" 切换为纵向视觉。`,type:`'vertical' | 'horizontal'`,defaultValue:`-`}],P=()=>{let{tabBasic:h,tabHorizontal:y,tabNoText:b,tabResponsive:x,tabColors:S,tabPositionsV:C,tabPositionsH:w,tabLineVariants:T,tabPlain:E,tabVerticalApi:D,tabMargin:O,tabCustom:P}=m(`useSetup:0:0`,()=>u(()=>({tabBasic:m(`ref:1:0`,()=>d(`preview`)),tabHorizontal:m(`ref:1:1`,()=>d(`preview`)),tabNoText:m(`ref:1:2`,()=>d(`preview`)),tabResponsive:m(`ref:1:3`,()=>d(`preview`)),tabColors:m(`ref:1:4`,()=>d(`preview`)),tabPositionsV:m(`ref:1:5`,()=>d(`preview`)),tabPositionsH:m(`ref:1:6`,()=>d(`preview`)),tabLineVariants:m(`ref:1:7`,()=>d(`preview`)),tabPlain:m(`ref:1:8`,()=>d(`preview`)),tabVerticalApi:m(`ref:1:9`,()=>d(`preview`)),tabMargin:m(`ref:1:10`,()=>d(`preview`)),tabCustom:m(`ref:1:11`,()=>d(`preview`))})));return c(u=>{let d=t(),m=e(`rue:component:anchor`);return i(d,m),l(f(v,{children:c(()=>{let c=t(),u=r(`div`,c);i(c,u),n(u,`max-w-none prose prose-sm md:prose-base`);let d=r(`h1`,u);i(u,d),i(d,a(`Divider 分隔线`));let m=r(`p`,u);i(u,m),n(m,`text-sm mt-3 mb-3`),i(m,a(`分隔线（Divider）用于在内容之间建立轻量层级。Rue 保留原有视觉风格，并补充了更完整的文本位置、线型和垂直分隔能力。`));let v=r(`div`,u);i(u,v),n(v,`text-sm`);let F=r(`a`,v);i(v,F),o(F,`href`,`https://daisyui.com/components/divider/`),o(F,`target`,`_blank`),o(F,`rel`,`noreferrer`),i(F,a(`查看 Divider 静态样式`));let I=e(`rue:component:anchor`);i(u,I),s(()=>{let e=f(A,{title:`Divider`,summary:`基础分隔线，保留现有默认用法。`,tab:h,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{children:`OR`}),_(M,{label:`content`})]}),code:`import { Divider } from '@rue-js/design'

<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider>OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});p(()=>l(e,u,I))});let L=e(`rue:component:anchor`);i(u,L),s(()=>{let e=f(A,{title:`Divider horizontal`,summary:`保留 Rue 旧版 direction 用法，在横向布局中展示纵向分隔。`,tab:y,preview:()=>g(`div`,{className:`flex w-full`,children:[_(M,{label:`content`,className:`h-20 grow`}),_(k,{direction:`horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-20 grow`})]}),code:`<div className="flex w-full">
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
  <Divider direction="horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-20 grow place-items-center">content</div>
</div>`});p(()=>l(e,u,L))});let R=e(`rue:component:anchor`);i(u,R),s(()=>{let e=f(A,{title:`Divider with no text`,summary:`没有文字时，Divider 仍可作为纯分隔元素使用。`,tab:b,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(M,{label:`content`}),_(k,{}),_(M,{label:`content`})]}),code:`<div className="flex w-full flex-col">
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
  <Divider />
  <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
</div>`});p(()=>l(e,u,R))});let z=e(`rue:component:anchor`);i(u,z),s(()=>{let e=f(A,{title:`Responsive Divider`,summary:`继续支持通过 className 结合响应式类切换方向。`,tab:x,preview:()=>g(`div`,{className:`flex w-full flex-col lg:flex-row`,children:[_(M,{label:`content`,className:`h-32 grow`}),_(k,{className:`lg:divider-horizontal`,children:`OR`}),_(M,{label:`content`,className:`h-32 grow`})]}),code:`<div className="flex w-full flex-col lg:flex-row">
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
  <Divider className="lg:divider-horizontal">OR</Divider>
  <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
</div>`});p(()=>l(e,u,z))});let B=e(`rue:component:anchor`);i(u,B),s(()=>{let e=f(A,{title:`Divider with colors`,summary:`现有颜色能力保留，同时推荐新写法使用 color。`,tab:S,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Default`}),_(k,{variant:`neutral`,children:`Neutral`}),_(k,{variant:`primary`,children:`Primary`}),_(k,{variant:`secondary`,children:`Secondary`}),_(k,{variant:`accent`,children:`Accent`}),_(k,{variant:`success`,children:`Success`}),_(k,{variant:`warning`,children:`Warning`}),_(k,{variant:`info`,children:`Info`}),_(k,{variant:`error`,children:`Error`}),_(k,{color:`primary`,children:`Primary by color`})]}),code:`<div className="flex w-full flex-col">
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
</div>`});p(()=>l(e,u,B))});let V=e(`rue:component:anchor`);i(u,V),s(()=>{let e=f(A,{title:`Divider in different positions`,summary:`保留旧版 placement 用法，也可改用 titlePlacement。`,tab:C,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{placement:`start`,children:`Start`}),_(k,{children:`Default`}),_(k,{placement:`end`,children:`End`})]}),code:`<div className="flex w-full flex-col">
  <Divider placement="start">Start</Divider>
  <Divider>Default</Divider>
  <Divider placement="end">End</Divider>
</div>`});p(()=>l(e,u,V))});let H=e(`rue:component:anchor`);i(u,H),s(()=>{let e=f(A,{title:`Divider in different positions (horizontal)`,summary:`在横向布局中，文本位置仍可配合旧版 direction 使用。`,tab:w,preview:()=>g(`div`,{className:`flex w-full justify-center h-52`,children:[_(k,{direction:`horizontal`,placement:`start`,children:`Start`}),_(k,{direction:`horizontal`,children:`Default`}),_(k,{direction:`horizontal`,placement:`end`,children:`End`})]}),code:`<div className="flex w-full justify-center h-52">
  <Divider direction="horizontal" placement="start">Start</Divider>
  <Divider direction="horizontal">Default</Divider>
  <Divider direction="horizontal" placement="end">End</Divider>
</div>`});p(()=>l(e,u,H))});let U=e(`rue:component:anchor`);i(u,U),s(()=>{let e=f(A,{title:`Line Variants`,summary:`新增实线、虚线、点线三种线型，并兼容 dashed 快捷写法。`,tab:T,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`Solid`}),_(k,{variant:`dashed`,children:`Dashed by variant`}),_(k,{dashed:!0,color:`warning`,children:`Dashed by boolean`}),_(k,{lineVariant:`dotted`,color:`primary`,children:`Dotted`})]}),code:`<div className="flex w-full flex-col">
  <Divider>Solid</Divider>
  <Divider variant="dashed">Dashed by variant</Divider>
  <Divider dashed color="warning">Dashed by boolean</Divider>
  <Divider lineVariant="dotted" color="primary">Dotted</Divider>
</div>`});p(()=>l(e,u,U))});let W=e(`rue:component:anchor`);i(u,W),s(()=>{let e=f(A,{title:`Plain Text`,summary:`新增 plain，让分隔文字从强调标题过渡为更轻的正文说明。`,tab:E,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{children:`默认文字`}),_(k,{plain:!0,children:`作为正文说明的分隔文案`}),_(k,{plain:!0,titlePlacement:`start`,color:`primary`,children:`Rue keeps it subtle`})]}),code:`<div className="flex w-full flex-col">
  <Divider>默认文字</Divider>
  <Divider plain>作为正文说明的分隔文案</Divider>
  <Divider plain titlePlacement="start" color="primary">
    Rue keeps it subtle
  </Divider>
</div>`});p(()=>l(e,u,W))});let G=e(`rue:component:anchor`);i(u,G),s(()=>{let e=f(A,{title:`Vertical Orientation API`,summary:`新增更通用的 orientation / vertical API，适合行内分隔，不展示 children。`,tab:D,preview:()=>g(`div`,{className:`flex flex-wrap items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-5`,children:[_(`span`,{children:`Profile`}),_(k,{orientation:`vertical`,className:`h-6`}),_(`span`,{children:`Team`}),_(k,{vertical:!0,className:`h-6`}),_(`span`,{children:`Billing`}),_(k,{type:`vertical`,className:`h-6`}),_(`span`,{children:`Logs`})]}),code:`<div className="flex flex-wrap items-center gap-3">
  <span>Profile</span>
  <Divider orientation="vertical" className="h-6" />
  <span>Team</span>
  <Divider vertical className="h-6" />
  <span>Billing</span>
  <Divider type="vertical" className="h-6" />
  <span>Logs</span>
</div>`});p(()=>l(e,u,G))});let K=e(`rue:component:anchor`);i(u,K),s(()=>{let e=f(A,{title:`Title Placement And Margin`,summary:`新增 titlePlacement 与 orientationMargin，可更精细地控制文字和边缘的距离。`,tab:O,preview:()=>g(`div`,{className:`flex w-full flex-col`,children:[_(k,{titlePlacement:`start`,orientationMargin:24,children:`Start 24px`}),_(k,{titlePlacement:`center`,children:`Center`}),_(k,{titlePlacement:`end`,orientationMargin:`40`,children:`End 40px`})]}),code:`<div className="flex w-full flex-col">
  <Divider titlePlacement="start" orientationMargin={24}>Start 24px</Divider>
  <Divider titlePlacement="center">Center</Divider>
  <Divider titlePlacement="end" orientationMargin="40">End 40px</Divider>
</div>`});p(()=>l(e,u,K))});let q=e(`rue:component:anchor`);i(u,q),s(()=>{let e=f(A,{title:`Custom Style`,summary:`新增 style / contentStyle / contentClassName，便于保持 Rue 基础视觉下的局部定制。`,tab:P,preview:()=>g(`div`,{className:`flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4`,children:[_(k,{color:`primary`,lineVariant:`dotted`,titlePlacement:`start`,orientationMargin:20,className:`before:border-2 after:border-2`,contentClassName:`rounded-full bg-primary/10 px-3 py-1 text-primary`,children:`Project Status`}),_(k,{plain:!0,style:{background:`rgba(16, 185, 129, 0.06)`},contentStyle:{letterSpacing:`0.08em`},className:`rounded-box px-2`,children:`DEPLOYMENT READY`})]}),code:`<div className="flex w-full flex-col gap-2 rounded-box bg-base-200/40 p-4">
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
</div>`});p(()=>l(e,u,q))});let J=r(`div`,u);i(u,J),n(J,`my-10`);let Y=r(`h2`,J);i(J,Y),i(Y,a(`API`));let X=r(`p`,J);i(J,X),n(X,`text-sm opacity-70 mt-2`),i(X,a(`新版 Divider 同时兼容 Rue 旧写法与更语义化的新 API，便于渐进迁移。`));let Z=e(`rue:component:anchor`);return i(J,Z),s(()=>{let e=f(j,{rows:N});p(()=>l(e,J,Z))}),c})}),d,m),d})};export{P as default};