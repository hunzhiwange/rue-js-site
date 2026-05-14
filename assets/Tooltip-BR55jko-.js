import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,_t as s,d as c,l,mt as u,ot as d,t as f,ut as p}from"./vapor-runtime-Dfq7aA8z.js";import{a as m,n as h}from"./vapor-helpers-vapor-CpxsbTjB.js";import{n as g,t as _}from"./src-BaNG2YQR.js";import{n as v}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as y}from"./tooltip-pTBbXz2i.js";import{t as b}from"./PreviewBlock-BK9yBzOD.js";var x=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并兼容旧的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保留包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],S=()=>{let{tabBasic:S,tabPlacements:C,tabContent:w,tabColors:T,tabTriggers:E,tabOpen:D,controlledOpen:O}=m(`useSetup:0:0`,()=>u(()=>({tabBasic:m(`ref:1:0`,()=>d(`preview`)),tabPlacements:m(`ref:1:1`,()=>d(`preview`)),tabContent:m(`ref:1:2`,()=>d(`preview`)),tabColors:m(`ref:1:3`,()=>d(`preview`)),tabTriggers:m(`ref:1:4`,()=>d(`preview`)),tabOpen:m(`ref:1:5`,()=>d(`preview`)),controlledOpen:m(`ref:1:6`,()=>d(!0))})));return c(u=>{let d=t(),m=e(`rue:component:anchor`);return i(d,m),l(f(v,{children:c(()=>{let u=t(),d=r(`div`,u);i(u,d),n(d,`max-w-none prose prose-sm md:prose-base`);let m=r(`h1`,d);i(d,m),i(m,a(`Tooltip 提示框`));let v=r(`p`,d);i(d,v),n(v,`text-sm mt-3 mb-3`),i(v,a(`Tooltip 现在既保留 Rue 原本轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以继续使用`));let k=r(`code`,v);i(v,k),i(k,a(`tip`)),i(v,a(`和`));let A=r(`code`,v);i(v,A),i(A,a(`Tooltip.Content`)),i(v,a(`，也可以切到`));let j=r(`code`,v);i(v,j),i(j,a(`title`)),i(v,a(`、`));let M=r(`code`,v);i(v,M),i(M,a(`overlay`)),i(v,a(`、受控显示、 自定义颜色和语义化样式扩展。`));let N=r(`div`,d);i(d,N),n(N,`text-sm`);let P=r(`a`,N);i(N,P),o(P,`href`,`https://daisyui.com/components/tooltip/`),o(P,`target`,`_blank`),i(P,a(`查看 Tooltip 静态样式`));let F=e(`rue:component:anchor`);i(d,F),s(()=>{let e=f(b,{title:`Tooltip`,tab:S,preview:()=>g(`div`,{className:`flex flex-wrap gap-4`,children:[_(y,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:_(`button`,{className:`btn`,children:`Hover me`})}),_(y,{title:()=>`函数内容也可以惰性返回`,children:_(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),_(y,{disabled:!0,title:`不会显示`,children:_(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`});p(()=>l(e,d,F))});let I=e(`rue:component:anchor`);i(d,I),s(()=>{let e=f(b,{title:`Tooltip placements`,tab:C,preview:()=>g(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[_(y,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Top`})}),_(y,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Bottom`})}),_(y,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Left`})}),_(y,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:_(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});p(()=>l(e,d,I))});let L=e(`rue:component:anchor`);i(d,L),s(()=>{let e=f(b,{title:`Rich content`,tab:w,preview:()=>g(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[_(y,{title:g(`div`,{className:`space-y-1 text-left`,children:[_(`div`,{className:`font-semibold`,children:`发布检查`}),_(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:_(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),g(y,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[_(y.Content,{children:g(`div`,{className:`space-y-2`,children:[_(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),_(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),_(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
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
</Tooltip>`});p(()=>l(e,d,L))});let R=e(`rue:component:anchor`);i(d,R),s(()=>{let e=f(b,{title:`Colors and semantic styling`,tab:T,preview:()=>g(`div`,{className:`flex flex-wrap gap-4`,children:[_(y,{title:`语义色`,color:`primary`,open:!0,children:_(`button`,{className:`btn btn-primary`,children:`Primary`})}),_(y,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:_(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),_(y,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:_(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`});p(()=>l(e,d,R))});let z=e(`rue:component:anchor`);i(d,z),s(()=>{let e=f(b,{title:`Trigger modes`,tab:E,preview:()=>g(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[_(y,{trigger:`click`,title:`Click again to close`,children:_(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),_(y,{trigger:`focus`,title:`聚焦输入框时显示`,children:g(`label`,{className:`input`,children:[_(`span`,{className:`label`,children:`Focus`}),_(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),_(y,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:_(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`});p(()=>l(e,d,z))});let B=e(`rue:component:anchor`);i(d,B),s(()=>{let e=f(b,{title:`Force open`,tab:D,preview:()=>g(`div`,{className:`flex flex-wrap items-center gap-4`,children:[_(y,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:_(`button`,{className:`btn btn-primary`,children:`Force open`})}),_(y,{title:O.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:O.value,children:_(`button`,{className:`btn btn-soft`,onClick:()=>O.value=!O.value,children:`Controlled tooltip`})}),_(`button`,{className:`btn btn-outline`,onClick:()=>O.value=!O.value,children:O.value?`Hide controlled tooltip`:`Show controlled tooltip`}),_(y,{title:`包一层 span 可兼容禁用按钮`,placement:`bottom`,children:_(`span`,{className:`inline-flex`,children:_(`button`,{className:`btn btn-disabled`,disabled:!0,children:`Disabled button`})})})]}),code:`const controlledOpen = ref(true)

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
</div>`});p(()=>l(e,d,B))});let V=r(`div`,d);i(d,V),n(V,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let H=r(`table`,V);i(V,H),n(H,`table table-zebra`);let U=r(`thead`,H);i(H,U);let W=r(`tr`,U);i(U,W);let G=r(`th`,W);i(W,G),i(G,a(`属性`));let K=r(`th`,W);i(W,K),i(K,a(`说明`));let q=r(`th`,W);i(W,q),i(q,a(`类型`));let J=r(`th`,W);i(W,J),i(J,a(`默认值`));let Y=r(`tbody`,H);i(H,Y);let X=e(`rue:list:start`),Z=e(`rue:list:end`);i(Y,X),i(Y,Z);let Q=new Map;return s(()=>{Q=h({items:x||[],getKey:(e,t)=>e.prop,elements:Q,parent:Y,before:Z,singleRoot:!0,trackIndex:!1,start:X,renderItem:(n,a,u,d,f)=>{l(c(()=>{let a=t(),c=r(`tr`,a);i(a,c),s(()=>{o(c,`key`,String(n.prop))});let u=r(`td`,c);i(c,u);let d=r(`code`,u);i(u,d);let f=e(`rue:slot:anchor`);i(d,f),s(()=>{let e=n.prop;p(()=>l(e,d,f))});let m=r(`td`,c);i(c,m);let h=e(`rue:slot:anchor`);i(m,h),s(()=>{let e=n.description;p(()=>l(e,m,h))});let g=r(`td`,c);i(c,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),s(()=>{let e=n.type;p(()=>l(e,_,v))});let y=r(`td`,c);i(c,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),s(()=>{let e=n.defaultValue;p(()=>l(e,b,x))}),a}),a,u)}})}),u})}),d,m),d})};export{S as default};