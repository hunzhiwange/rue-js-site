import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,dt as s,et as c,ht as l,l as u,lt as d,nt as f,o as p,st as m,t as h,tt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v,n as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as b,i as x}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as S}from"./tooltip-Bd1mPaf6.js";import{r as C}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as w}from"./PreviewBlock-RQJhyX9w.js";var T=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并兼容旧的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保留包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],E=()=>{let{controlledOpen:m}=v(`useSetup:0:0`,()=>o(()=>({controlledOpen:v(`ref:1:0`,()=>_(!0))})));return u(o=>{let _=c(`div`,o);d(_,`flex flex-wrap items-center gap-4`);let v=t(`rue:component:anchor`);i(_,v),p(h(S,{"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:u(()=>{let t=e(),n=c(`button`,t);return i(t,n),d(n,`btn btn-primary`),i(n,g(`Force open`)),t})}),_,v);let y=t(`rue:component:anchor`);i(_,y);let b=u(()=>{let t=e(),n=c(`button`,t);return i(t,n),d(n,`btn btn-soft`),a(n,`click`,()=>m.value=!m.value),i(n,g(`Controlled tooltip`)),t});n(()=>{let e=h(S,{title:m.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:m.value,children:b});r(()=>p(e,_,y))});let x=c(`button`,_);i(_,x),d(x,`btn btn-outline`),a(x,`click`,()=>m.value=!m.value);let C=f(x);i(x,C),n(()=>{l(C,m.value?`Hide controlled tooltip`:`Show controlled tooltip`)});let w=t(`rue:component:anchor`);return i(_,w),p(h(S,{title:`包一层 span 可兼容禁用按钮`,placement:`bottom`,children:u(()=>{let t=e(),n=c(`span`,t);i(t,n),d(n,`inline-flex`);let r=c(`button`,n);return i(n,r),d(r,`btn btn-disabled`),s(r,!0),i(r,g(`Disabled button`)),t})}),_,w),_})},D=()=>{let{tabBasic:a,tabPlacements:s,tabContent:l,tabColors:f,tabTriggers:D,tabOpen:O}=v(`useSetup:0:0:dup1`,()=>o(()=>({tabBasic:v(`ref:1:1`,()=>_(`preview`)),tabPlacements:v(`ref:1:2`,()=>_(`preview`)),tabContent:v(`ref:1:3`,()=>_(`preview`)),tabColors:v(`ref:1:4`,()=>_(`preview`)),tabTriggers:v(`ref:1:5`,()=>_(`preview`)),tabOpen:v(`ref:1:6`,()=>_(`preview`))})));return u(o=>{let _=e(),v=t(`rue:component:anchor`);return i(_,v),p(h(C,{children:u(()=>{let o=e(),_=c(`div`,o);i(o,_),d(_,`max-w-none prose prose-sm md:prose-base`);let v=c(`h1`,_);i(_,v),i(v,g(`Tooltip 提示框`));let C=c(`p`,_);i(_,C),d(C,`text-sm mt-3 mb-3`),i(C,g(`Tooltip 现在既保留 Rue 原本轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以继续使用`));let k=c(`code`,C);i(C,k),i(k,g(`tip`)),i(C,g(`和`));let A=c(`code`,C);i(C,A),i(A,g(`Tooltip.Content`)),i(C,g(`，也可以切到`));let j=c(`code`,C);i(C,j),i(j,g(`title`)),i(C,g(`、`));let M=c(`code`,C);i(C,M),i(M,g(`overlay`)),i(C,g(`、受控显示、 自定义颜色和语义化样式扩展。`));let N=t(`rue:component:anchor`);i(_,N),n(()=>{let e=h(w,{title:`Tooltip`,tab:a,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:x(`button`,{className:`btn`,children:`Hover me`})}),x(S,{title:()=>`函数内容也可以惰性返回`,children:x(`button`,{className:`btn btn-outline`,children:`Lazy title`})}),x(S,{disabled:!0,title:`不会显示`,children:x(`button`,{className:`btn btn-ghost`,children:`Disabled tooltip`})})]}),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`});r(()=>p(e,_,N))});let P=t(`rue:component:anchor`);i(_,P),n(()=>{let e=h(w,{title:`Tooltip placements`,tab:s,preview:()=>b(`div`,{className:`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`,children:[x(S,{"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Top`})}),x(S,{"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Bottom`})}),x(S,{"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Left`})}),x(S,{"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:x(`button`,{className:`btn`,children:`Right`})})]}),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});r(()=>p(e,_,P))});let F=t(`rue:component:anchor`);i(_,F),n(()=>{let e=h(w,{title:`Rich content`,tab:l,preview:()=>b(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[x(S,{title:b(`div`,{className:`space-y-1 text-left`,children:[x(`div`,{className:`font-semibold`,children:`发布检查`}),x(`div`,{className:`text-xs opacity-80`,children:`包含静态资源、接口联调和埋点确认。`})]}),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:x(`button`,{className:`btn btn-soft btn-primary`,children:`JSX title`})}),b(S,{open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[x(S.Content,{children:b(`div`,{className:`space-y-2`,children:[x(`div`,{className:`badge badge-primary badge-soft`,children:`Rue`}),x(`p`,{className:`m-0 text-xs leading-5`,children:`Tooltip.Content 适合承载更自由的结构化信息。`})]})}),x(`button`,{className:`btn btn-soft`,children:`Tooltip.Content`})]})]}),code:`<Tooltip
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
</Tooltip>`});r(()=>p(e,_,F))});let I=t(`rue:component:anchor`);i(_,I),n(()=>{let e=h(w,{title:`Colors and semantic styling`,tab:f,preview:()=>b(`div`,{className:`flex flex-wrap gap-4`,children:[x(S,{title:`语义色`,color:`primary`,open:!0,children:x(`button`,{className:`btn btn-primary`,children:`Primary`})}),x(S,{title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:x(`button`,{className:`btn border-0 bg-[#1d4ed8] text-white`,children:`Custom blue`})}),x(S,{title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:x(`button`,{className:`btn btn-accent btn-soft`,children:`Semantic slots`})})]}),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`});r(()=>p(e,_,I))});let L=t(`rue:component:anchor`);i(_,L),n(()=>{let e=h(w,{title:`Trigger modes`,tab:D,preview:()=>b(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[x(S,{trigger:`click`,title:`Click again to close`,children:x(`button`,{className:`btn btn-outline`,children:`Click trigger`})}),x(S,{trigger:`focus`,title:`聚焦输入框时显示`,children:b(`label`,{className:`input`,children:[x(`span`,{className:`label`,children:`Focus`}),x(`input`,{type:`text`,placeholder:`Tab 到这里`})]})}),x(S,{trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:x(`div`,{className:`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,children:`Right click me`})})]}),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`});r(()=>p(e,_,L))});let R=t(`rue:component:anchor`);i(_,R),n(()=>{let e=h(w,{title:`Force open`,tab:O,preview:E,code:`const controlledOpen = ref(true)

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
</div>`});r(()=>p(e,_,R))});let z=c(`div`,_);i(_,z),d(z,`not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100`);let B=c(`table`,z);i(z,B),d(B,`table table-zebra`);let V=c(`thead`,B);i(B,V);let H=c(`tr`,V);i(V,H);let U=c(`th`,H);i(H,U),i(U,g(`属性`));let W=c(`th`,H);i(H,W),i(W,g(`说明`));let G=c(`th`,H);i(H,G),i(G,g(`类型`));let K=c(`th`,H);i(H,K),i(K,g(`默认值`));let q=c(`tbody`,B);i(B,q);let J=t(`rue:list:start`),Y=t(`rue:list:end`);i(q,J),i(q,Y);let X=new Map;return n(()=>{X=y({items:T||[],getKey:(e,t)=>e.prop,elements:X,parent:q,before:Y,singleRoot:!0,trackIndex:!1,start:J,renderItem:(a,o,s,l,d)=>{p(u(()=>{let o=e(),s=c(`tr`,o);i(o,s),n(()=>{m(s,`key`,String(a.prop))});let l=c(`td`,s);i(s,l);let u=c(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>p(e,u,d))});let f=c(`td`,s);i(s,f);let h=t(`rue:slot:anchor`);i(f,h),n(()=>{let e=a.description;r(()=>p(e,f,h))});let g=c(`td`,s);i(s,g);let _=c(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>p(e,_,v))});let y=c(`td`,s);i(s,y);let b=c(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>p(e,b,x))}),o}),o,s)}})}),o})}),_,v),_})};export{D as default};