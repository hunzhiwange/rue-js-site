import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ht as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v,n as y}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as b,t as x}from"./src-Dlanwp1X.js";import{t as S}from"./tooltip-iAnk6pBi.js";import{r as C}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as w}from"./PreviewBlock-CCAV1yb7.js";var T=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并支持基础的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保持包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],E=()=>{let{controlledOpen:o}=v(`useSetup:0:0`,()=>f(()=>({controlledOpen:v(`ref:1:0`,()=>n(!0))})));return l(n=>{let f=m(`div`,n);p(f,`flex flex-wrap items-center gap-4`);let v=_(`rue:component:anchor`);e(f,v),d(h(S,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:l(()=>{let t=u(),n=m(`button`,t);return e(t,n),p(n,`btn btn-primary`),e(n,c(`Force open`)),t})}),f,v);let y=_(`rue:component:anchor`);e(f,y);let b=l(()=>{let t=u(),n=m(`button`,t);return e(t,n),p(n,`btn btn-soft`),r(n,`click`,()=>o.value=!o.value),e(n,c(`Controlled tooltip`)),t});t(()=>{let e=h(S,{title:o.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:o.value,children:b});g(()=>d(e,f,y))});let x=m(`button`,f);e(f,x),p(x,`btn btn-outline`),r(x,`click`,()=>o.value=!o.value);let C=i(x);e(x,C),t(()=>{a(C,o.value?`Hide controlled tooltip`:`Show controlled tooltip`)});let w=_(`rue:component:anchor`);return e(f,w),d(h(S,{title:`包一层 span 可支持禁用按钮`,placement:`bottom`,children:l(()=>{let t=u(),n=m(`span`,t);e(t,n),p(n,`inline-flex`);let r=m(`button`,n);return e(n,r),p(r,`btn btn-disabled`),s(r,!0),e(r,c(`Disabled button`)),t})}),f,w),f})},D=()=>{let{tabBasic:r,tabPlacements:i,tabContent:a,tabColors:s,tabTriggers:D,tabOpen:O}=v(`useSetup:0:0:dup1`,()=>f(()=>({tabBasic:v(`ref:1:1`,()=>n(`preview`)),tabPlacements:v(`ref:1:2`,()=>n(`preview`)),tabContent:v(`ref:1:3`,()=>n(`preview`)),tabColors:v(`ref:1:4`,()=>n(`preview`)),tabTriggers:v(`ref:1:5`,()=>n(`preview`)),tabOpen:v(`ref:1:6`,()=>n(`preview`))})));return l(n=>{let f=u(),v=_(`rue:component:anchor`);return e(f,v),d(h(C,{children:l(()=>{let n=u(),f=m(`div`,n);e(n,f),p(f,`max-w-none prose prose-sm md:prose-base`);let v=m(`h1`,f);e(f,v),e(v,c(`Tooltip 提示框`));let C=m(`p`,f);e(f,C),p(C,`text-sm mt-3 mb-3`),e(C,c(`Tooltip 现在既使用 Rue 基础轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以使用`));let k=m(`code`,C);e(C,k),e(k,c(`tip`)),e(C,c(`和`));let A=m(`code`,C);e(C,A),e(A,c(`Tooltip.Content`)),e(C,c(`，也可以切到`));let j=m(`code`,C);e(C,j),e(j,c(`title`)),e(C,c(`、`));let M=m(`code`,C);e(C,M),e(M,c(`overlay`)),e(C,c(`、受控显示、 自定义颜色和语义化样式扩展。`));let N=_(`rue:component:anchor`);e(f,N),t(()=>{let e=h(w,{title:`Tooltip`,tab:r,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:x(`button`,{className:`btn`,children:`Hover me`})}),x(S,{title:()=>`函数内容也可以惰性返回`,children:x(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),x(S,{disabled:!0,title:`不会显示`,children:x(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`});g(()=>d(e,f,N))});let P=_(`rue:component:anchor`);e(f,P),t(()=>{let e=h(w,{title:`Tooltip placements`,tab:i,preview:()=>b(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[x(S,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Top`})}),x(S,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Bottom`})}),x(S,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Left`})}),x(S,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});g(()=>d(e,f,P))});let F=_(`rue:component:anchor`);e(f,F),t(()=>{let e=h(w,{title:`Rich content`,tab:a,preview:()=>b(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[x(S,{title:b(`div`,{className:`space-y-1 text-left`,children:[x(`div`,{className:`font-semibold`,children:`发布检查`}),x(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:x(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),b(S,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[x(S.Content,{children:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),x(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),x(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
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
</Tooltip>`});g(()=>d(e,f,F))});let I=_(`rue:component:anchor`);e(f,I),t(()=>{let e=h(w,{title:`Colors and semantic styling`,tab:s,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{title:`语义色`,color:`primary`,open:!0,children:x(`button`,{className:`btn btn-primary`,children:`Primary`})}),x(S,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:x(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),x(S,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:x(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`});g(()=>d(e,f,I))});let L=_(`rue:component:anchor`);e(f,L),t(()=>{let e=h(w,{title:`Trigger modes`,tab:D,preview:()=>b(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[x(S,{trigger:`click`,title:`Click again to close`,children:x(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),x(S,{trigger:`focus`,title:`聚焦输入框时显示`,children:b(`label`,{className:`input`,children:[x(`span`,{className:`label`,children:`Focus`}),x(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),x(S,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:x(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`});g(()=>d(e,f,L))});let R=_(`rue:component:anchor`);e(f,R),t(()=>{let e=h(w,{title:`Force open`,tab:O,preview:E,code:`const controlledOpen = ref(true)

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
</div>`});g(()=>d(e,f,R))});let z=m(`div`,f);e(f,z),p(z,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let B=m(`table`,z);e(z,B),p(B,`table table-zebra`);let V=m(`thead`,B);e(B,V);let H=m(`tr`,V);e(V,H);let U=m(`th`,H);e(H,U),e(U,c(`属性`));let W=m(`th`,H);e(H,W),e(W,c(`说明`));let G=m(`th`,H);e(H,G),e(G,c(`类型`));let K=m(`th`,H);e(H,K),e(K,c(`默认值`));let q=m(`tbody`,B);e(B,q);let J=_(`rue:list:start`),Y=_(`rue:list:end`);e(q,J),e(q,Y);let X=new Map;return t(()=>{X=y({items:T||[],getKey:(e,t)=>e.prop,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(n,r,i,a,s)=>{d(l(()=>{let r=u(),i=m(`tr`,r);e(r,i),t(()=>{o(i,`key`,String(n.prop))});let a=m(`td`,i);e(i,a);let s=m(`code`,a);e(a,s);let c=_(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;g(()=>d(e,s,c))});let l=m(`td`,i);e(i,l);let f=_(`rue:slot:anchor`);e(l,f),t(()=>{let e=n.description;g(()=>d(e,l,f))});let p=m(`td`,i);e(i,p);let h=m(`code`,p);e(p,h);let v=_(`rue:slot:anchor`);e(h,v),t(()=>{let e=n.type;g(()=>d(e,h,v))});let y=m(`td`,i);e(i,y);let b=m(`code`,y);e(y,b);let x=_(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;g(()=>d(e,b,x))}),r}),r,i)}})}),n})}),f,v),f})};export{D as default};