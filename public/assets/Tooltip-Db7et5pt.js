import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,pt as f,rt as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v,n as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as b,i as x}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as S}from"./tooltip-CYIAYVmq.js";import{r as C}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as w}from"./PreviewBlock-wHSyDiek.js";var T=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并支持基础的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保持包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],E=()=>{let{controlledOpen:l}=v(`useSetup:0:0`,()=>o(()=>({controlledOpen:v(`ref:1:0`,()=>t(!0))})));return c(t=>{let o=u(`div`,t);i(o,`flex flex-wrap items-center gap-4`);let v=a(`rue:component:anchor`);n(o,v),d(m(S,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:c(()=>{let e=h(),t=u(`button`,e);return n(e,t),i(t,`btn btn-primary`),n(t,p(`Force open`)),e})}),o,v);let y=a(`rue:component:anchor`);n(o,y);let b=c(()=>{let e=h(),t=u(`button`,e);return n(e,t),i(t,`btn btn-soft`),r(t,`click`,()=>l.value=!l.value),n(t,p(`Controlled tooltip`)),e});_(()=>{let t=m(S,{title:l.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:l.value,children:b});e(()=>d(t,o,y))});let x=u(`button`,o);n(o,x),i(x,`btn btn-outline`),r(x,`click`,()=>l.value=!l.value);let C=s(x);n(x,C),_(()=>{g(C,l.value?`Hide controlled tooltip`:`Show controlled tooltip`)});let w=a(`rue:component:anchor`);return n(o,w),d(m(S,{title:`包一层 span 可支持禁用按钮`,placement:`bottom`,children:c(()=>{let e=h(),t=u(`span`,e);n(e,t),i(t,`inline-flex`);let r=u(`button`,t);return n(t,r),i(r,`btn btn-disabled`),f(r,!0),n(r,p(`Disabled button`)),e})}),o,w),o})},D=()=>{let{tabBasic:r,tabPlacements:s,tabContent:f,tabColors:g,tabTriggers:D,tabOpen:O}=v(`useSetup:0:0:dup1`,()=>o(()=>({tabBasic:v(`ref:1:1`,()=>t(`preview`)),tabPlacements:v(`ref:1:2`,()=>t(`preview`)),tabContent:v(`ref:1:3`,()=>t(`preview`)),tabColors:v(`ref:1:4`,()=>t(`preview`)),tabTriggers:v(`ref:1:5`,()=>t(`preview`)),tabOpen:v(`ref:1:6`,()=>t(`preview`))})));return c(t=>{let o=h(),v=a(`rue:component:anchor`);return n(o,v),d(m(C,{children:c(()=>{let t=h(),o=u(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let v=u(`h1`,o);n(o,v),n(v,p(`Tooltip 提示框`));let C=u(`p`,o);n(o,C),i(C,`text-sm mt-3 mb-3`),n(C,p(`Tooltip 现在既使用 Rue 基础轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以使用`));let k=u(`code`,C);n(C,k),n(k,p(`tip`)),n(C,p(`和`));let A=u(`code`,C);n(C,A),n(A,p(`Tooltip.Content`)),n(C,p(`，也可以切到`));let j=u(`code`,C);n(C,j),n(j,p(`title`)),n(C,p(`、`));let M=u(`code`,C);n(C,M),n(M,p(`overlay`)),n(C,p(`、受控显示、 自定义颜色和语义化样式扩展。`));let N=a(`rue:component:anchor`);n(o,N),_(()=>{let t=m(w,{title:`Tooltip`,tab:r,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:x(`button`,{className:`btn`,children:`Hover me`})}),x(S,{title:()=>`函数内容也可以惰性返回`,children:x(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),x(S,{disabled:!0,title:`不会显示`,children:x(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`});e(()=>d(t,o,N))});let P=a(`rue:component:anchor`);n(o,P),_(()=>{let t=m(w,{title:`Tooltip placements`,tab:s,preview:()=>b(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[x(S,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Top`})}),x(S,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Bottom`})}),x(S,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Left`})}),x(S,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});e(()=>d(t,o,P))});let F=a(`rue:component:anchor`);n(o,F),_(()=>{let t=m(w,{title:`Rich content`,tab:f,preview:()=>b(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[x(S,{title:b(`div`,{className:`space-y-1 text-left`,children:[x(`div`,{className:`font-semibold`,children:`发布检查`}),x(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:x(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),b(S,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[x(S.Content,{children:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),x(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),x(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
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
</Tooltip>`});e(()=>d(t,o,F))});let I=a(`rue:component:anchor`);n(o,I),_(()=>{let t=m(w,{title:`Colors and semantic styling`,tab:g,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{title:`语义色`,color:`primary`,open:!0,children:x(`button`,{className:`btn btn-primary`,children:`Primary`})}),x(S,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:x(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),x(S,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:x(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`});e(()=>d(t,o,I))});let L=a(`rue:component:anchor`);n(o,L),_(()=>{let t=m(w,{title:`Trigger modes`,tab:D,preview:()=>b(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[x(S,{trigger:`click`,title:`Click again to close`,children:x(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),x(S,{trigger:`focus`,title:`聚焦输入框时显示`,children:b(`label`,{className:`input`,children:[x(`span`,{className:`label`,children:`Focus`}),x(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),x(S,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:x(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`});e(()=>d(t,o,L))});let R=a(`rue:component:anchor`);n(o,R),_(()=>{let t=m(w,{title:`Force open`,tab:O,preview:E,code:`const controlledOpen = ref(true)

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
</div>`});e(()=>d(t,o,R))});let z=u(`div`,o);n(o,z),i(z,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let B=u(`table`,z);n(z,B),i(B,`table table-zebra`);let V=u(`thead`,B);n(B,V);let H=u(`tr`,V);n(V,H);let U=u(`th`,H);n(H,U),n(U,p(`属性`));let W=u(`th`,H);n(H,W),n(W,p(`说明`));let G=u(`th`,H);n(H,G),n(G,p(`类型`));let K=u(`th`,H);n(H,K),n(K,p(`默认值`));let q=u(`tbody`,B);n(B,q);let J=a(`rue:list:start`),Y=a(`rue:list:end`);n(q,J),n(q,Y);let X=new Map;return _(()=>{X=y({items:T||[],getKey:(e,t)=>e.prop,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(t,r,i,o,s)=>{d(c(()=>{let r=h(),i=u(`tr`,r);n(r,i),_(()=>{l(i,`key`,String(t.prop))});let o=u(`td`,i);n(i,o);let s=u(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),_(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),_(()=>{let n=t.description;e(()=>d(n,f,p))});let m=u(`td`,i);n(i,m);let g=u(`code`,m);n(m,g);let v=a(`rue:slot:anchor`);n(g,v),_(()=>{let n=t.type;e(()=>d(n,g,v))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),_(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),t})}),o,v),o})};export{D as default};