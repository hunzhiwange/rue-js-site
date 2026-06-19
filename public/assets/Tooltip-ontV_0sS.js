import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,ft as l,gt as u,l as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v,n as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as b,i as x}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as S}from"./tooltip-BDmOet0V.js";import{r as C}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as w}from"./PreviewBlock-xsXk-Jrr.js";var T=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并兼容旧的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保留包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],E=()=>{let{controlledOpen:s}=v(`useSetup:0:0`,()=>a(()=>({controlledOpen:v(`ref:1:0`,()=>n(!0))})));return d(n=>{let a=g(`div`,n);_(a,`flex flex-wrap items-center gap-4`);let v=e(`rue:component:anchor`);o(a,v),p(h(S,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:d(()=>{let e=c(),t=g(`button`,e);return o(e,t),_(t,`btn btn-primary`),o(t,f(`Force open`)),e})}),a,v);let y=e(`rue:component:anchor`);o(a,y);let b=d(()=>{let e=c(),t=g(`button`,e);return o(e,t),_(t,`btn btn-soft`),i(t,`click`,()=>s.value=!s.value),o(t,f(`Controlled tooltip`)),e});t(()=>{let e=h(S,{title:s.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:s.value,children:b});r(()=>p(e,a,y))});let x=g(`button`,a);o(a,x),_(x,`btn btn-outline`),i(x,`click`,()=>s.value=!s.value);let C=m(x);o(x,C),t(()=>{u(C,s.value?`Hide controlled tooltip`:`Show controlled tooltip`)});let w=e(`rue:component:anchor`);return o(a,w),p(h(S,{title:`包一层 span 可兼容禁用按钮`,placement:`bottom`,children:d(()=>{let e=c(),t=g(`span`,e);o(e,t),_(t,`inline-flex`);let n=g(`button`,t);return o(t,n),_(n,`btn btn-disabled`),l(n,!0),o(n,f(`Disabled button`)),e})}),a,w),a})},D=()=>{let{tabBasic:i,tabPlacements:l,tabContent:u,tabColors:m,tabTriggers:D,tabOpen:O}=v(`useSetup:0:0:dup1`,()=>a(()=>({tabBasic:v(`ref:1:1`,()=>n(`preview`)),tabPlacements:v(`ref:1:2`,()=>n(`preview`)),tabContent:v(`ref:1:3`,()=>n(`preview`)),tabColors:v(`ref:1:4`,()=>n(`preview`)),tabTriggers:v(`ref:1:5`,()=>n(`preview`)),tabOpen:v(`ref:1:6`,()=>n(`preview`))})));return d(n=>{let a=c(),v=e(`rue:component:anchor`);return o(a,v),p(h(C,{children:d(()=>{let n=c(),a=g(`div`,n);o(n,a),_(a,`max-w-none prose prose-sm md:prose-base`);let v=g(`h1`,a);o(a,v),o(v,f(`Tooltip 提示框`));let C=g(`p`,a);o(a,C),_(C,`text-sm mt-3 mb-3`),o(C,f(`Tooltip 现在既保留 Rue 原本轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以继续使用`));let k=g(`code`,C);o(C,k),o(k,f(`tip`)),o(C,f(`和`));let A=g(`code`,C);o(C,A),o(A,f(`Tooltip.Content`)),o(C,f(`，也可以切到`));let j=g(`code`,C);o(C,j),o(j,f(`title`)),o(C,f(`、`));let M=g(`code`,C);o(C,M),o(M,f(`overlay`)),o(C,f(`、受控显示、 自定义颜色和语义化样式扩展。`));let N=e(`rue:component:anchor`);o(a,N),t(()=>{let e=h(w,{title:`Tooltip`,tab:i,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:x(`button`,{className:`btn`,children:`Hover me`})}),x(S,{title:()=>`函数内容也可以惰性返回`,children:x(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),x(S,{disabled:!0,title:`不会显示`,children:x(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`});r(()=>p(e,a,N))});let P=e(`rue:component:anchor`);o(a,P),t(()=>{let e=h(w,{title:`Tooltip placements`,tab:l,preview:()=>b(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[x(S,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Top`})}),x(S,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Bottom`})}),x(S,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Left`})}),x(S,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});r(()=>p(e,a,P))});let F=e(`rue:component:anchor`);o(a,F),t(()=>{let e=h(w,{title:`Rich content`,tab:u,preview:()=>b(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[x(S,{title:b(`div`,{className:`space-y-1 text-left`,children:[x(`div`,{className:`font-semibold`,children:`发布检查`}),x(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:x(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),b(S,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[x(S.Content,{children:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),x(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),x(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
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
</Tooltip>`});r(()=>p(e,a,F))});let I=e(`rue:component:anchor`);o(a,I),t(()=>{let e=h(w,{title:`Colors and semantic styling`,tab:m,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{title:`语义色`,color:`primary`,open:!0,children:x(`button`,{className:`btn btn-primary`,children:`Primary`})}),x(S,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:x(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),x(S,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:x(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`});r(()=>p(e,a,I))});let L=e(`rue:component:anchor`);o(a,L),t(()=>{let e=h(w,{title:`Trigger modes`,tab:D,preview:()=>b(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[x(S,{trigger:`click`,title:`Click again to close`,children:x(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),x(S,{trigger:`focus`,title:`聚焦输入框时显示`,children:b(`label`,{className:`input`,children:[x(`span`,{className:`label`,children:`Focus`}),x(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),x(S,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:x(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`});r(()=>p(e,a,L))});let R=e(`rue:component:anchor`);o(a,R),t(()=>{let e=h(w,{title:`Force open`,tab:O,preview:E,code:`const controlledOpen = ref(true)

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

  <Tooltip title="包一层 span 可兼容禁用按钮" placement="bottom">
    <span className="inline-flex">
      <button className="btn btn-disabled" disabled={true}>
        Disabled button
      </button>
    </span>
  </Tooltip>
</div>`});r(()=>p(e,a,R))});let z=g(`div`,a);o(a,z),_(z,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let B=g(`table`,z);o(z,B),_(B,`table table-zebra`);let V=g(`thead`,B);o(B,V);let H=g(`tr`,V);o(V,H);let U=g(`th`,H);o(H,U),o(U,f(`属性`));let W=g(`th`,H);o(H,W),o(W,f(`说明`));let G=g(`th`,H);o(H,G),o(G,f(`类型`));let K=g(`th`,H);o(H,K),o(K,f(`默认值`));let q=g(`tbody`,B);o(B,q);let J=e(`rue:list:start`),Y=e(`rue:list:end`);o(q,J),o(q,Y);let X=new Map;return t(()=>{X=y({items:T||[],getKey:(e,t)=>e.prop,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(n,i,a,l,u)=>{p(d(()=>{let i=c(),a=g(`tr`,i);o(i,a),t(()=>{s(a,`key`,String(n.prop))});let l=g(`td`,a);o(a,l);let u=g(`code`,l);o(l,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>p(e,u,d))});let f=g(`td`,a);o(a,f);let m=e(`rue:slot:anchor`);o(f,m),t(()=>{let e=n.description;r(()=>p(e,f,m))});let h=g(`td`,a);o(a,h);let _=g(`code`,h);o(h,_);let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.type;r(()=>p(e,_,v))});let y=g(`td`,a);o(a,y);let b=g(`code`,y);o(y,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>p(e,b,x))}),i}),i,a)}})}),n})}),a,v),a})};export{D as default};