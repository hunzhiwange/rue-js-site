import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,lt as u,pt as d,t as f,u as p}from"./vapor-runtime-D3a-68js.js";import{a as m,n as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as g,t as _}from"./src-BfQKH6_d.js";import{n as v}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as y}from"./tooltip-Bz5AhUn5.js";import{t as b}from"./PreviewBlock-DZ28sFI7.js";var x=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并兼容旧的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保留包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],S=()=>{let{tabBasic:S,tabPlacements:C,tabContent:w,tabColors:T,tabTriggers:E,tabOpen:D,controlledOpen:O}=m(`useSetup:0:0`,()=>s(()=>({tabBasic:m(`ref:1:0`,()=>u(`preview`)),tabPlacements:m(`ref:1:1`,()=>u(`preview`)),tabContent:m(`ref:1:2`,()=>u(`preview`)),tabColors:m(`ref:1:3`,()=>u(`preview`)),tabTriggers:m(`ref:1:4`,()=>u(`preview`)),tabOpen:m(`ref:1:5`,()=>u(`preview`)),controlledOpen:m(`ref:1:6`,()=>u(!0))})));return p(()=>{let s=e(),u=a(`rue:component:anchor`);return i(s,u),l(f(v,{children:p(()=>{let s=e(),u=n(`div`);i(s,u),t(u,`max-w-none prose prose-sm md:prose-base`);let m=n(`h1`);i(u,m),i(m,r(`Tooltip 提示框`));let v=n(`p`);i(u,v),t(v,`text-sm mt-3 mb-3`),i(v,r(`Tooltip 现在既保留 Rue 原本轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以继续使用`));let k=n(`code`);i(v,k),i(k,r(`tip`)),i(v,r(`和`));let A=n(`code`);i(v,A),i(A,r(`Tooltip.Content`)),i(v,r(`，也可以切到`));let j=n(`code`);i(v,j),i(j,r(`title`)),i(v,r(`、`));let M=n(`code`);i(v,M),i(M,r(`overlay`)),i(v,r(`、受控显示、 自定义颜色和语义化样式扩展。`));let N=n(`div`);i(u,N),t(N,`text-sm`);let P=n(`a`);i(N,P),o(P,`href`,`https://daisyui.com/components/tooltip/`),o(P,`target`,`_blank`),i(P,r(`查看 Tooltip 静态样式`));let F=a(`rue:component:anchor`);i(u,F),c(()=>{let e=f(b,{title:`Tooltip`,tab:S,preview:()=>g(`div`,{className:`flex flex-wrap gap-4`,children:[_(y,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:_(`button`,{className:`btn`,children:`Hover me`})}),_(y,{title:()=>`函数内容也可以惰性返回`,children:_(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),_(y,{disabled:!0,title:`不会显示`,children:_(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`});d(()=>l(e,u,F))});let I=a(`rue:component:anchor`);i(u,I),c(()=>{let e=f(b,{title:`Tooltip placements`,tab:C,preview:()=>g(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[_(y,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Top`})}),_(y,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Bottom`})}),_(y,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Left`})}),_(y,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});d(()=>l(e,u,I))});let L=a(`rue:component:anchor`);i(u,L),c(()=>{let e=f(b,{title:`Rich content`,tab:w,preview:()=>g(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[_(y,{title:g(`div`,{className:`space-y-1 text-left`,children:[_(`div`,{className:`font-semibold`,children:`发布检查`}),_(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:_(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),g(y,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[_(y.Content,{children:g(`div`,{className:`space-y-2`,children:[_(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),_(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),_(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
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
</Tooltip>`});d(()=>l(e,u,L))});let R=a(`rue:component:anchor`);i(u,R),c(()=>{let e=f(b,{title:`Colors and semantic styling`,tab:T,preview:()=>g(`div`,{className:`flex flex-wrap gap-4`,children:[_(y,{title:`语义色`,color:`primary`,open:!0,children:_(`button`,{className:`btn btn-primary`,children:`Primary`})}),_(y,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:_(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),_(y,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:_(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`});d(()=>l(e,u,R))});let z=a(`rue:component:anchor`);i(u,z),c(()=>{let e=f(b,{title:`Trigger modes`,tab:E,preview:()=>g(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[_(y,{trigger:`click`,title:`Click again to close`,children:_(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),_(y,{trigger:`focus`,title:`聚焦输入框时显示`,children:g(`label`,{className:`input`,children:[_(`span`,{className:`label`,children:`Focus`}),_(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),_(y,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:_(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`});d(()=>l(e,u,z))});let B=a(`rue:component:anchor`);i(u,B),c(()=>{let e=f(b,{title:`Force open`,tab:D,preview:()=>g(`div`,{className:`flex flex-wrap items-center gap-4`,children:[_(y,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:_(`button`,{className:`btn btn-primary`,children:`Force open`})}),_(y,{title:O.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:O.value,children:_(`button`,{className:`btn btn-soft`,onClick:()=>O.value=!O.value,children:`Controlled tooltip`})}),_(`button`,{className:`btn btn-outline`,onClick:()=>O.value=!O.value,children:O.value?`Hide controlled tooltip`:`Show controlled tooltip`}),_(y,{title:`包一层 span 可兼容禁用按钮`,placement:`bottom`,children:_(`span`,{className:`inline-flex`,children:_(`button`,{className:`btn btn-disabled`,disabled:!0,children:`Disabled button`})})})]}),code:`const controlledOpen = ref(true)

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
</div>`});d(()=>l(e,u,B))});let V=n(`div`);i(u,V),t(V,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let H=n(`table`);i(V,H),t(H,`table table-zebra`);let U=n(`thead`);i(H,U);let W=n(`tr`);i(U,W);let G=n(`th`);i(W,G),i(G,r(`属性`));let K=n(`th`);i(W,K),i(K,r(`说明`));let q=n(`th`);i(W,q),i(q,r(`类型`));let J=n(`th`);i(W,J),i(J,r(`默认值`));let Y=n(`tbody`);i(H,Y);let X=a(`rue:list:start`),Z=a(`rue:list:end`);i(Y,X),i(Y,Z);let Q=new Map;return c(()=>{Q=h({items:x||[],getKey:(e,t)=>e.prop,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(t,r,s,u,f)=>{l(p(()=>{let r=e(),s=n(`tr`);i(r,s),c(()=>{o(s,`key`,String(t.prop))});let u=n(`td`);i(s,u);let f=n(`code`);i(u,f);let p=a(`rue:slot:anchor`);i(f,p),c(()=>{let e=t.prop;d(()=>l(e,f,p))});let m=n(`td`);i(s,m);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=t.description;d(()=>l(e,m,h))});let g=n(`td`);i(s,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),c(()=>{let e=t.type;d(()=>l(e,_,v))});let y=n(`td`);i(s,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),c(()=>{let e=t.defaultValue;d(()=>l(e,b,x))}),r}),r,s)}})}),s})}),s,u),s})};export{S as default};