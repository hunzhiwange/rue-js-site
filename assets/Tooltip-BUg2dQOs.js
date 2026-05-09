import{F as e,H as t,I as n,N as r,P as i,W as a,c as o,j as s,pt as c,rt as l,t as u,u as d,ut as f}from"./vapor-runtime-CKndxKFn.js";import{a as p,n as m}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as h,t as g}from"./src-CqIWk1va.js";import{n as _}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as v}from"./tooltip-Bj4cJBT4.js";import{t as y}from"./PreviewBlock-mLH0898c.js";var b=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并兼容旧的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保留包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和 ant-design 风格的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],x=()=>{let{tabBasic:x,tabPlacements:S,tabContent:C,tabColors:w,tabTriggers:T,tabOpen:E,controlledOpen:D}=p(`useSetup:0:0`,()=>f(()=>({tabBasic:p(`ref:1:0`,()=>l(`preview`)),tabPlacements:p(`ref:1:1`,()=>l(`preview`)),tabContent:p(`ref:1:2`,()=>l(`preview`)),tabColors:p(`ref:1:3`,()=>l(`preview`)),tabTriggers:p(`ref:1:4`,()=>l(`preview`)),tabOpen:p(`ref:1:5`,()=>l(`preview`)),controlledOpen:p(`ref:1:6`,()=>l(!0))})));return d(()=>{let l=i(),f=r(`rue:component:anchor`);return s(l,f),o(u(_,{children:d(()=>{let l=i(),f=e(`div`);s(l,f),a(f,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`);s(f,p),s(p,n(`Tooltip 提示框`));let _=e(`p`);s(f,_),a(_,`text-sm mt-3 mb-3`),s(_,n(`Tooltip 现在既保留 Rue 原本轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以继续使用`));let O=e(`code`);s(_,O),s(O,n(`tip`)),s(_,n(`和`));let k=e(`code`);s(_,k),s(k,n(`Tooltip.Content`)),s(_,n(`，也可以切到`));let A=e(`code`);s(_,A),s(A,n(`title`)),s(_,n(`、`));let j=e(`code`);s(_,j),s(j,n(`overlay`)),s(_,n(`、受控显示、 自定义颜色和语义化样式扩展。`));let M=e(`div`);s(f,M),a(M,`text-sm`);let N=e(`a`);s(M,N),t(N,`href`,`https://daisyui.com/components/tooltip/`),t(N,`target`,`_blank`),s(N,n(`查看 Tooltip 静态样式`));let P=r(`rue:component:anchor`);s(f,P),c(()=>{o(u(y,{title:`Tooltip`,tab:x,preview:()=>h(`div`,{className:`flex flex-wrap gap-4`,children:[g(v,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:g(`button`,{className:`btn`,children:`Hover me`})}),g(v,{title:()=>`函数内容也可以惰性返回`,children:g(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),g(v,{disabled:!0,title:`不会显示`,children:g(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`}),f,P)});let F=r(`rue:component:anchor`);s(f,F),c(()=>{o(u(y,{title:`Tooltip placements`,tab:S,preview:()=>h(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[g(v,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:g(`button`,{className:`btn`,children:`Top`})}),g(v,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:g(`button`,{className:`btn`,children:`Bottom`})}),g(v,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:g(`button`,{className:`btn`,children:`Left`})}),g(v,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:g(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`}),f,F)});let I=r(`rue:component:anchor`);s(f,I),c(()=>{o(u(y,{title:`Rich content`,tab:C,preview:()=>h(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[g(v,{title:h(`div`,{className:`space-y-1 text-left`,children:[g(`div`,{className:`font-semibold`,children:`发布检查`}),g(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:g(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),h(v,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[g(v.Content,{children:h(`div`,{className:`space-y-2`,children:[g(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),g(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),g(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
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
</Tooltip>`}),f,I)});let L=r(`rue:component:anchor`);s(f,L),c(()=>{o(u(y,{title:`Colors and semantic styling`,tab:w,preview:()=>h(`div`,{className:`flex flex-wrap gap-4`,children:[g(v,{title:`语义色`,color:`primary`,open:!0,children:g(`button`,{className:`btn btn-primary`,children:`Primary`})}),g(v,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:g(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),g(v,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:g(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`}),f,L)});let R=r(`rue:component:anchor`);s(f,R),c(()=>{o(u(y,{title:`Trigger modes`,tab:T,preview:()=>h(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[g(v,{trigger:`click`,title:`Click again to close`,children:g(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),g(v,{trigger:`focus`,title:`聚焦输入框时显示`,children:h(`label`,{className:`input`,children:[g(`span`,{className:`label`,children:`Focus`}),g(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),g(v,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:g(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`}),f,R)});let z=r(`rue:component:anchor`);s(f,z),c(()=>{o(u(y,{title:`Force open`,tab:E,preview:()=>h(`div`,{className:`flex flex-wrap items-center gap-4`,children:[g(v,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:g(`button`,{className:`btn btn-primary`,children:`Force open`})}),g(v,{title:D.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:D.value,children:g(`button`,{className:`btn btn-soft`,onClick:()=>D.value=!D.value,children:`Controlled tooltip`})}),g(`button`,{className:`btn btn-outline`,onClick:()=>D.value=!D.value,children:D.value?`Hide controlled tooltip`:`Show controlled tooltip`}),g(v,{title:`包一层 span 可兼容禁用按钮`,placement:`bottom`,children:g(`span`,{className:`inline-flex`,children:g(`button`,{className:`btn btn-disabled`,disabled:!0,children:`Disabled button`})})})]}),code:`const controlledOpen = ref(true)

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
</div>`}),f,z)});let B=e(`div`);s(f,B),a(B,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let V=e(`table`);s(B,V),a(V,`table table-zebra`);let H=e(`thead`);s(V,H);let U=e(`tr`);s(H,U);let W=e(`th`);s(U,W),s(W,n(`属性`));let G=e(`th`);s(U,G),s(G,n(`说明`));let K=e(`th`);s(U,K),s(K,n(`类型`));let q=e(`th`);s(U,q),s(q,n(`默认值`));let J=e(`tbody`);s(V,J);let Y=r(`rue:list:start`),X=r(`rue:list:end`);s(J,Y),s(J,X);let Z=new Map;return c(()=>{Z=m({items:b||[],getKey:(e,t)=>e.prop,elements:Z,parent:J,before:X,singleRoot:!0,start:Y,renderItem:(n,a,l,u,f)=>{o(d(()=>{let a=i(),l=e(`tr`);s(a,l),c(()=>{t(l,`key`,String(n.prop))});let u=e(`td`);s(l,u);let d=e(`code`);s(u,d);let f=r(`rue:slot:anchor`);s(d,f),c(()=>{let e=n.prop;o(e,d,f)});let p=e(`td`);s(l,p);let m=r(`rue:slot:anchor`);s(p,m),c(()=>{let e=n.description;o(e,p,m)});let h=e(`td`);s(l,h);let g=e(`code`);s(h,g);let _=r(`rue:slot:anchor`);s(g,_),c(()=>{let e=n.type;o(e,g,_)});let v=e(`td`);s(l,v);let y=e(`code`);s(v,y);let b=r(`rue:slot:anchor`);return s(y,b),c(()=>{let e=n.defaultValue;o(e,y,b)}),a}),a,l)}})}),l})}),l,f),l})};export{x as default};