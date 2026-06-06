import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{a as m,n as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as g,t as _}from"./src-BLzF0BqW.js";import{n as v}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as y}from"./tooltip-CeiUPXC_.js";import{t as b}from"./PreviewBlock-CfdDuiov.js";var x=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并兼容旧的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保留包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],S=()=>{let{tabBasic:S,tabPlacements:C,tabContent:w,tabColors:T,tabTriggers:E,tabOpen:D,controlledOpen:O}=m(`useSetup:0:0`,()=>f(()=>({tabBasic:m(`ref:1:0`,()=>c(`preview`)),tabPlacements:m(`ref:1:1`,()=>c(`preview`)),tabContent:m(`ref:1:2`,()=>c(`preview`)),tabColors:m(`ref:1:3`,()=>c(`preview`)),tabTriggers:m(`ref:1:4`,()=>c(`preview`)),tabOpen:m(`ref:1:5`,()=>c(`preview`)),controlledOpen:m(`ref:1:6`,()=>c(!0))})));return l(c=>{let f=a(),m=i(`rue:component:anchor`);return t(f,m),u(d(v,{children:l(()=>{let c=a(),f=o(`div`,c);t(c,f),e(f,`max-w-none prose prose-sm md:prose-base`);let m=o(`h1`,f);t(f,m),t(m,r(`Tooltip 提示框`));let v=o(`p`,f);t(f,v),e(v,`text-sm mt-3 mb-3`),t(v,r(`Tooltip 现在既保留 Rue 原本轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以继续使用`));let k=o(`code`,v);t(v,k),t(k,r(`tip`)),t(v,r(`和`));let A=o(`code`,v);t(v,A),t(A,r(`Tooltip.Content`)),t(v,r(`，也可以切到`));let j=o(`code`,v);t(v,j),t(j,r(`title`)),t(v,r(`、`));let M=o(`code`,v);t(v,M),t(M,r(`overlay`)),t(v,r(`、受控显示、 自定义颜色和语义化样式扩展。`));let N=i(`rue:component:anchor`);t(f,N),n(()=>{let e=d(b,{title:`Tooltip`,tab:S,preview:()=>g(`div`,{className:`flex flex-wrap gap-4`,children:[_(y,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:_(`button`,{className:`btn`,children:`Hover me`})}),_(y,{title:()=>`函数内容也可以惰性返回`,children:_(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),_(y,{disabled:!0,title:`不会显示`,children:_(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`});p(()=>u(e,f,N))});let P=i(`rue:component:anchor`);t(f,P),n(()=>{let e=d(b,{title:`Tooltip placements`,tab:C,preview:()=>g(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[_(y,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Top`})}),_(y,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Bottom`})}),_(y,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Left`})}),_(y,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});p(()=>u(e,f,P))});let F=i(`rue:component:anchor`);t(f,F),n(()=>{let e=d(b,{title:`Rich content`,tab:w,preview:()=>g(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[_(y,{title:g(`div`,{className:`space-y-1 text-left`,children:[_(`div`,{className:`font-semibold`,children:`发布检查`}),_(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:_(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),g(y,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[_(y.Content,{children:g(`div`,{className:`space-y-2`,children:[_(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),_(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),_(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
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
</Tooltip>`});p(()=>u(e,f,F))});let I=i(`rue:component:anchor`);t(f,I),n(()=>{let e=d(b,{title:`Colors and semantic styling`,tab:T,preview:()=>g(`div`,{className:`flex flex-wrap gap-4`,children:[_(y,{title:`语义色`,color:`primary`,open:!0,children:_(`button`,{className:`btn btn-primary`,children:`Primary`})}),_(y,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:_(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),_(y,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:_(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`});p(()=>u(e,f,I))});let L=i(`rue:component:anchor`);t(f,L),n(()=>{let e=d(b,{title:`Trigger modes`,tab:E,preview:()=>g(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[_(y,{trigger:`click`,title:`Click again to close`,children:_(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),_(y,{trigger:`focus`,title:`聚焦输入框时显示`,children:g(`label`,{className:`input`,children:[_(`span`,{className:`label`,children:`Focus`}),_(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),_(y,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:_(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`});p(()=>u(e,f,L))});let R=i(`rue:component:anchor`);t(f,R),n(()=>{let e=d(b,{title:`Force open`,tab:D,preview:()=>g(`div`,{className:`flex flex-wrap items-center gap-4`,children:[_(y,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:_(`button`,{className:`btn btn-primary`,children:`Force open`})}),_(y,{title:O.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:O.value,children:_(`button`,{className:`btn btn-soft`,onClick:()=>O.value=!O.value,children:`Controlled tooltip`})}),_(`button`,{className:`btn btn-outline`,onClick:()=>O.value=!O.value,children:O.value?`Hide controlled tooltip`:`Show controlled tooltip`}),_(y,{title:`包一层 span 可兼容禁用按钮`,placement:`bottom`,children:_(`span`,{className:`inline-flex`,children:_(`button`,{className:`btn btn-disabled`,disabled:!0,children:`Disabled button`})})})]}),code:`const controlledOpen = ref(true)

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
</div>`});p(()=>u(e,f,R))});let z=o(`div`,f);t(f,z),e(z,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let B=o(`table`,z);t(z,B),e(B,`table table-zebra`);let V=o(`thead`,B);t(B,V);let H=o(`tr`,V);t(V,H);let U=o(`th`,H);t(H,U),t(U,r(`属性`));let W=o(`th`,H);t(H,W),t(W,r(`说明`));let G=o(`th`,H);t(H,G),t(G,r(`类型`));let K=o(`th`,H);t(H,K),t(K,r(`默认值`));let q=o(`tbody`,B);t(B,q);let J=i(`rue:list:start`),Y=i(`rue:list:end`);t(q,J),t(q,Y);let X=new Map;return n(()=>{X=h({items:x||[],getKey:(e,t)=>e.prop,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(e,r,c,d,f)=>{u(l(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let d=o(`code`,l);t(l,d);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.prop;p(()=>u(t,d,f))});let m=o(`td`,c);t(c,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let t=e.description;p(()=>u(t,m,h))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;p(()=>u(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;p(()=>u(t,b,x))}),r}),r,c)}})}),c})}),f,m),f})};export{S as default};