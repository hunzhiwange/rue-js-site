import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,l as u,ot as d,s as f,t as p}from"./vapor-runtime-DHPuOjqh.js";import{a as m,n as h}from"./vapor-helpers-vapor-CJFAWine.js";import{a as g,i as _}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as v}from"./tooltip-DEnxlpsL.js";import{n as y}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as b}from"./PreviewBlock-BYaG1RFO.js";var x=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并兼容旧的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保留包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],S=()=>{let{tabBasic:S,tabPlacements:C,tabContent:w,tabColors:T,tabTriggers:E,tabOpen:D,controlledOpen:O}=m(`useSetup:0:0`,()=>t(()=>({tabBasic:m(`ref:1:0`,()=>n(`preview`)),tabPlacements:m(`ref:1:1`,()=>n(`preview`)),tabContent:m(`ref:1:2`,()=>n(`preview`)),tabColors:m(`ref:1:3`,()=>n(`preview`)),tabTriggers:m(`ref:1:4`,()=>n(`preview`)),tabOpen:m(`ref:1:5`,()=>n(`preview`)),controlledOpen:m(`ref:1:6`,()=>n(!0))})));return u(t=>{let n=r(),m=s(`rue:component:anchor`);return a(n,m),f(p(y,{children:u(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`,n);a(n,m),a(m,l(`Tooltip 提示框`));let y=e(`p`,n);a(n,y),c(y,`text-sm mt-3 mb-3`),a(y,l(`Tooltip 现在既保留 Rue 原本轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以继续使用`));let k=e(`code`,y);a(y,k),a(k,l(`tip`)),a(y,l(`和`));let A=e(`code`,y);a(y,A),a(A,l(`Tooltip.Content`)),a(y,l(`，也可以切到`));let j=e(`code`,y);a(y,j),a(j,l(`title`)),a(y,l(`、`));let M=e(`code`,y);a(y,M),a(M,l(`overlay`)),a(y,l(`、受控显示、 自定义颜色和语义化样式扩展。`));let N=s(`rue:component:anchor`);a(n,N),o(()=>{let e=p(b,{title:`Tooltip`,tab:S,preview:()=>g(`div`,{className:`flex flex-wrap gap-4`,children:[_(v,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:_(`button`,{className:`btn`,children:`Hover me`})}),_(v,{title:()=>`函数内容也可以惰性返回`,children:_(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),_(v,{disabled:!0,title:`不会显示`,children:_(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`});i(()=>f(e,n,N))});let P=s(`rue:component:anchor`);a(n,P),o(()=>{let e=p(b,{title:`Tooltip placements`,tab:C,preview:()=>g(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[_(v,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Top`})}),_(v,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Bottom`})}),_(v,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Left`})}),_(v,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});i(()=>f(e,n,P))});let F=s(`rue:component:anchor`);a(n,F),o(()=>{let e=p(b,{title:`Rich content`,tab:w,preview:()=>g(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[_(v,{title:g(`div`,{className:`space-y-1 text-left`,children:[_(`div`,{className:`font-semibold`,children:`发布检查`}),_(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:_(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),g(v,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[_(v.Content,{children:g(`div`,{className:`space-y-2`,children:[_(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),_(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),_(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
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
</Tooltip>`});i(()=>f(e,n,F))});let I=s(`rue:component:anchor`);a(n,I),o(()=>{let e=p(b,{title:`Colors and semantic styling`,tab:T,preview:()=>g(`div`,{className:`flex flex-wrap gap-4`,children:[_(v,{title:`语义色`,color:`primary`,open:!0,children:_(`button`,{className:`btn btn-primary`,children:`Primary`})}),_(v,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:_(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),_(v,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:_(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`});i(()=>f(e,n,I))});let L=s(`rue:component:anchor`);a(n,L),o(()=>{let e=p(b,{title:`Trigger modes`,tab:E,preview:()=>g(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[_(v,{trigger:`click`,title:`Click again to close`,children:_(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),_(v,{trigger:`focus`,title:`聚焦输入框时显示`,children:g(`label`,{className:`input`,children:[_(`span`,{className:`label`,children:`Focus`}),_(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),_(v,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:_(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`});i(()=>f(e,n,L))});let R=s(`rue:component:anchor`);a(n,R),o(()=>{let e=p(b,{title:`Force open`,tab:D,preview:()=>g(`div`,{className:`flex flex-wrap items-center gap-4`,children:[_(v,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:_(`button`,{className:`btn btn-primary`,children:`Force open`})}),_(v,{title:O.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:O.value,children:_(`button`,{className:`btn btn-soft`,onClick:()=>O.value=!O.value,children:`Controlled tooltip`})}),_(`button`,{className:`btn btn-outline`,onClick:()=>O.value=!O.value,children:O.value?`Hide controlled tooltip`:`Show controlled tooltip`}),_(v,{title:`包一层 span 可兼容禁用按钮`,placement:`bottom`,children:_(`span`,{className:`inline-flex`,children:_(`button`,{className:`btn btn-disabled`,disabled:!0,children:`Disabled button`})})})]}),code:`const controlledOpen = ref(true)

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
</div>`});i(()=>f(e,n,R))});let z=e(`div`,n);a(n,z),c(z,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let B=e(`table`,z);a(z,B),c(B,`table table-zebra`);let V=e(`thead`,B);a(B,V);let H=e(`tr`,V);a(V,H);let U=e(`th`,H);a(H,U),a(U,l(`属性`));let W=e(`th`,H);a(H,W),a(W,l(`说明`));let G=e(`th`,H);a(H,G),a(G,l(`类型`));let K=e(`th`,H);a(H,K),a(K,l(`默认值`));let q=e(`tbody`,B);a(B,q);let J=s(`rue:list:start`),Y=s(`rue:list:end`);a(q,J),a(q,Y);let X=new Map;return o(()=>{X=h({items:x||[],getKey:(e,t)=>e.prop,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(t,n,c,l,p)=>{f(u(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{d(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let p=s(`rue:slot:anchor`);a(u,p),o(()=>{let e=t.prop;i(()=>f(e,u,p))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>f(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>f(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>f(e,b,x))}),n}),n,c)}})}),t})}),n,m),n})};export{S as default};