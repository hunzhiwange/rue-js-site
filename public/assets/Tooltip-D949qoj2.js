import{Cn as e,Ct as t,Dt as n,Mt as r,Tt as i,dt as a,ft as o,ht as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v,n as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as b,t as x}from"./src-CCTNpCXV.js";import{t as S}from"./tooltip-B0P-stJp.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as w}from"./PreviewBlock-ARp---67.js";var T=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并支持基础的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保持包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],E=()=>{let{controlledOpen:t}=v(`useSetup:0:0`,()=>e(()=>({controlledOpen:v(`ref:1:0`,()=>u(!0))})));return h(e=>{let u=d(`div`,e);i(u,`flex flex-wrap items-center gap-4`);let v=a(`rue:component:anchor`);f(u,v),g(_(S,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:h(()=>{let e=o(),t=d(`button`,e);return f(e,t),i(t,`btn btn-primary`),f(t,c(`Force open`)),e})}),u,v);let y=a(`rue:component:anchor`);f(u,y);let b=h(()=>{let e=o(),n=d(`button`,e);return f(e,n),i(n,`btn btn-soft`),l(n,`click`,()=>t.value=!t.value),f(n,c(`Controlled tooltip`)),e});p(()=>{let e=_(S,{title:t.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:t.value,children:b});m(()=>g(e,u,y))});let x=d(`button`,u);f(u,x),i(x,`btn btn-outline`),l(x,`click`,()=>t.value=!t.value);let C=s(x);f(x,C),p(()=>{r(C,t.value?`Hide controlled tooltip`:`Show controlled tooltip`)});let w=a(`rue:component:anchor`);return f(u,w),g(_(S,{title:`包一层 span 可支持禁用按钮`,placement:`bottom`,children:h(()=>{let e=o(),t=d(`span`,e);f(e,t),i(t,`inline-flex`);let r=d(`button`,t);return f(t,r),i(r,`btn btn-disabled`),n(r,!0),f(r,c(`Disabled button`)),e})}),u,w),u})},D=()=>{let{tabBasic:n,tabPlacements:r,tabContent:s,tabColors:l,tabTriggers:D,tabOpen:O}=v(`useSetup:0:0:dup1`,()=>e(()=>({tabBasic:v(`ref:1:1`,()=>u(`preview`)),tabPlacements:v(`ref:1:2`,()=>u(`preview`)),tabContent:v(`ref:1:3`,()=>u(`preview`)),tabColors:v(`ref:1:4`,()=>u(`preview`)),tabTriggers:v(`ref:1:5`,()=>u(`preview`)),tabOpen:v(`ref:1:6`,()=>u(`preview`))})));return h(e=>{let u=o(),v=a(`rue:component:anchor`);return f(u,v),g(_(C,{children:h(()=>{let e=o(),u=d(`div`,e);f(e,u),i(u,`max-w-none prose prose-sm md:prose-base`);let v=d(`h1`,u);f(u,v),f(v,c(`Tooltip 提示框`));let C=d(`p`,u);f(u,C),i(C,`text-sm mt-3 mb-3`),f(C,c(`Tooltip 现在既使用 Rue 基础轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以使用`));let k=d(`code`,C);f(C,k),f(k,c(`tip`)),f(C,c(`和`));let A=d(`code`,C);f(C,A),f(A,c(`Tooltip.Content`)),f(C,c(`，也可以切到`));let j=d(`code`,C);f(C,j),f(j,c(`title`)),f(C,c(`、`));let M=d(`code`,C);f(C,M),f(M,c(`overlay`)),f(C,c(`、受控显示、 自定义颜色和语义化样式扩展。`));let N=a(`rue:component:anchor`);f(u,N),p(()=>{let e=_(w,{title:`Tooltip`,tab:n,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:x(`button`,{className:`btn`,children:`Hover me`})}),x(S,{title:()=>`函数内容也可以惰性返回`,children:x(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),x(S,{disabled:!0,title:`不会显示`,children:x(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`});m(()=>g(e,u,N))});let P=a(`rue:component:anchor`);f(u,P),p(()=>{let e=_(w,{title:`Tooltip placements`,tab:r,preview:()=>b(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[x(S,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Top`})}),x(S,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Bottom`})}),x(S,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Left`})}),x(S,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
  <Tooltip title="top / topLeft / topRight" open={true} placement="top" className="justify-self-start">
    <button className="btn">Top</button>
  </Tooltip>

  <Tooltip title="bottom / bottomLeft / bottomRight" open={true} placement="bottomRight" className="justify-self-start">
    <button className="btn">Bottom</button>
  </Tooltip>

  <Tooltip title="left / leftTop / leftBottom" open={true} placement="leftTop" className="justify-self-start">
    <button className="btn">Left</button>
  </Tooltip>

  <Tooltip title="right / rightTop / rightBottom" open={true} placement="rightBottom" className="justify-self-start">
    <button className="btn">Right</button>
  </Tooltip>
</div>`});m(()=>g(e,u,P))});let F=a(`rue:component:anchor`);f(u,F),p(()=>{let e=_(w,{title:`Rich content`,tab:s,preview:()=>b(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[x(S,{title:b(`div`,{className:`space-y-1 text-left`,children:[x(`div`,{className:`font-semibold`,children:`发布检查`}),x(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:x(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),b(S,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[x(S.Content,{children:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),x(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),x(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
  title={
    <div className="space-y-1 text-left">
      <div className="font-semibold">发布检查</div>
      <div className="text-xs opacity-80">包含静态资源、接口联调和埋点确认。</div>
    </div>
  }
  open={true}
  overlayClassName="max-w-56 border border-base-300 shadow-lg"
  overlayStyle={{ padding: '0.75rem', letterSpacing: '0.02em' }}
>
  <button className="btn btn-soft btn-primary">JSX title</button>
</Tooltip>

<Tooltip open={true} arrow={false} classNames={{ body: 'max-w-56 text-left' }} styles={{ body: { padding: '0.75rem' } }}>
  <Tooltip.Content>
    <div className="space-y-2">
      <div className="badge badge-primary badge-soft">Rue</div>
      <p className="m-0 text-xs leading-5">Tooltip.Content 适合承载更自由的结构化信息。</p>
    </div>
  </Tooltip.Content>
  <button className="btn btn-soft">Tooltip.Content</button>
</Tooltip>`});m(()=>g(e,u,F))});let I=a(`rue:component:anchor`);f(u,I),p(()=>{let e=_(w,{title:`Colors and semantic styling`,tab:l,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{title:`语义色`,color:`primary`,open:!0,children:x(`button`,{className:`btn btn-primary`,children:`Primary`})}),x(S,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:x(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),x(S,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:x(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
  <button className="btn btn-primary">Primary</button>
</Tooltip>

<Tooltip title="自定义颜色" color="#1d4ed8" open={true}>
  <button className="btn border-0 bg-[#1d4ed8] text-white">Custom blue</button>
</Tooltip>

<Tooltip
  title="可通过 classNames.root 和 styles.body 精细调节"
  open={true}
  classNames={{ root: 'inline-flex', body: 'max-w-52 rounded-2xl' }}
  styles={{ body: { padding: '0.875rem', boxShadow: '0 16px 40px rgba(15, 23, 42, 0.16)' } }}
>
  <button className="btn btn-accent btn-soft">Semantic slots</button>
</Tooltip>`});m(()=>g(e,u,I))});let L=a(`rue:component:anchor`);f(u,L),p(()=>{let e=_(w,{title:`Trigger modes`,tab:D,preview:()=>b(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[x(S,{trigger:`click`,title:`Click again to close`,children:x(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),x(S,{trigger:`focus`,title:`聚焦输入框时显示`,children:b(`label`,{className:`input`,children:[x(`span`,{className:`label`,children:`Focus`}),x(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),x(S,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:x(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
  <button className="btn btn-outline">Click trigger</button>
</Tooltip>

<Tooltip trigger="focus" title="聚焦输入框时显示">
  <label className="input">
    <span className="label">Focus</span>
    <input type="text" placeholder="Tab 到这里" />
  </label>
</Tooltip>

<Tooltip trigger="contextMenu" title="右键也可以作为触发手势">
  <div className="rounded-box border border-dashed border-base-300 px-4 py-3 text-sm">Right click me</div>
</Tooltip>`});m(()=>g(e,u,L))});let R=a(`rue:component:anchor`);f(u,R),p(()=>{let e=_(w,{title:`Force open`,tab:O,preview:E,code:`const controlledOpen = ref(true)

<div className="flex flex-wrap items-center gap-4">
  <Tooltip title="Always visible" open={true} color="primary">
    <button className="btn btn-primary">Force open</button>
  </Tooltip>

  <Tooltip
    title={controlledOpen.value ? '点击任一按钮都可以关闭' : '点击任一按钮都可以打开'}
    open={controlledOpen.value}
  >
    <button className="btn btn-soft" onClick={() => (controlledOpen.value = !controlledOpen.value)}>
      Controlled tooltip
    </button>
  </Tooltip>

  <button className="btn btn-outline" onClick={() => (controlledOpen.value = !controlledOpen.value)}>
    {controlledOpen.value ? 'Hide controlled tooltip' : 'Show controlled tooltip'}
  </button>

  <Tooltip title="包一层 span 可支持禁用按钮" placement="bottom">
    <span className="inline-flex">
      <button className="btn btn-disabled" disabled={true}>
        Disabled button
      </button>
    </span>
  </Tooltip>
</div>`});m(()=>g(e,u,R))});let z=d(`div`,u);f(u,z),i(z,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let B=d(`table`,z);f(z,B),i(B,`table table-zebra`);let V=d(`thead`,B);f(B,V);let H=d(`tr`,V);f(V,H);let U=d(`th`,H);f(H,U),f(U,c(`属性`));let W=d(`th`,H);f(H,W),f(W,c(`说明`));let G=d(`th`,H);f(H,G),f(G,c(`类型`));let K=d(`th`,H);f(H,K),f(K,c(`默认值`));let q=d(`tbody`,B);f(B,q);let J=a(`rue:list:start`),Y=a(`rue:list:end`);f(q,J),f(q,Y);let X=new Map;return p(()=>{X=y({items:T||[],getKey:(e,t)=>e.prop,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(e,n,r,i,s)=>{g(h(()=>{let n=o(),r=d(`tr`,n);f(n,r),p(()=>{t(r,`key`,String(e.prop))});let i=d(`td`,r);f(r,i);let s=d(`code`,i);f(i,s);let c=a(`rue:slot:anchor`);f(s,c),p(()=>{let t=e.prop;m(()=>g(t,s,c))});let l=d(`td`,r);f(r,l);let u=a(`rue:slot:anchor`);f(l,u),p(()=>{let t=e.description;m(()=>g(t,l,u))});let h=d(`td`,r);f(r,h);let _=d(`code`,h);f(h,_);let v=a(`rue:slot:anchor`);f(_,v),p(()=>{let t=e.type;m(()=>g(t,_,v))});let y=d(`td`,r);f(r,y);let b=d(`code`,y);f(y,b);let x=a(`rue:slot:anchor`);return f(b,x),p(()=>{let t=e.defaultValue;m(()=>g(t,b,x))}),n}),n,r)}})}),e})}),u,v),u})};export{D as default};