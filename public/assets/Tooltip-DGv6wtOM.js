import{Bt as e,C as t,Dn as n,Et as r,H as i,K as a,Kt as o,L as s,Mt as c,S as l,W as u,X as d,Y as f,_n as p,_t as m,bn as h,fn as g,gn as _,hn as v,ht as y,it as b,kn as x,mn as S,nt as C,q as w,rt as T,wn as E,x as D,z as O}from"./rue-runtime-CwEGJ854.js";import{t as k}from"./tooltip-BU2Z9cyg.js";import{r as A}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as j}from"./PreviewBlock-B_EIWpIk.js";var M=p(`<div class="flex flex-wrap gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),N=p(`<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),ee=p(`<div class="grid gap-5 lg:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),te=p(`<div class="grid gap-4 lg:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),P=p(`<div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><button class="btn btn-outline"><!--rue:text-hole:2--></button><!--rue:opaque-hole:3--></div>`),ne=p(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Tooltip 提示框</h1><p class="text-sm mt-3 mb-3">Tooltip 现在既使用 Rue 基础轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以使用 <code>tip</code> 和 <code>Tooltip.Content</code>，也可以切到 <code>title</code>、 <code>overlay</code>、受控显示、 自定义颜色和语义化样式扩展。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><div class="not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:6--></tbody></table></div></div>`),re=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并支持基础的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保持包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],ie=()=>{let t=e(!0);return c(()=>w(r(Object.assign(e=>{let i=P().content.cloneNode(!0).firstChild,o=i.childNodes[2],s=i.childNodes[0],c=s.parentNode,l=i.childNodes[1],u=l.parentNode,d=i.childNodes[2].childNodes[0],f=d.parentNode,p=i.childNodes[3],m=p.parentNode;o.className=`btn btn-outline`;let y=e=>{let n=()=>t.value=!t.value;typeof n==`function`&&n(e)};o.addEventListener(`click`,y),n(()=>o.removeEventListener(`click`,y));let b=S(c);a(b,k,()=>({"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn btn-primary`,g(n,_(`Force open`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(b,s);let x=S(u);a(x,k,()=>({title:t.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:t.value,children:(e,i,a)=>D(e,a,()=>r(Object.assign(e=>{let r=C(),i=v(`button`,r);g(r,i),i.className=`btn btn-soft`;let a=e=>{let n=()=>t.value=!t.value;typeof n==`function`&&n(e)};return i.addEventListener(`click`,a),n(()=>i.removeEventListener(`click`,a)),g(i,_(`Controlled tooltip`)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(x,l);let w=_(``);f.insertBefore(w,d),f.removeChild(d),h(w,()=>t.value?`Hide controlled tooltip`:`Show controlled tooltip`);let T=S(m);return a(T,k,()=>({title:`包一层 span 可支持禁用按钮`,placement:`bottom`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`span`,t);g(t,n),n.className=`inline-flex`;let r=v(`button`,n);return g(n,r),r.className=`btn btn-disabled`,r.disabled=!0,g(r,_(`Disabled button`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),m.insertBefore(T,p),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>O(()=>{})))},F=()=>{let n=e(`preview`),p=e(`preview`),P=e(`preview`),F=e(`preview`),ae=e(`preview`),oe=e(`preview`);return c(()=>w(i(A,()=>({children:(e,i,c)=>D(e,c,()=>r(Object.assign(e=>{let i=C(),c=ne().content.cloneNode(!0),w=c.firstChild,O=w.childNodes[2],A=O.parentNode,I=w.childNodes[3],L=I.parentNode,R=w.childNodes[4],z=R.parentNode,B=w.childNodes[5],V=B.parentNode,H=w.childNodes[6],U=H.parentNode,W=w.childNodes[7],G=W.parentNode,K=w.childNodes[8].childNodes[0].childNodes[1].childNodes[0],se=K.parentNode;i.appendChild(c);let q=S(A);a(q,j,()=>({title:`Tooltip`,tab:n,preview:o(()=>r(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=S(i);a(u,k,()=>({"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn`,g(n,_(`Hover me`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(u,n);let d=S(s);a(d,k,()=>({title:()=>`函数内容也可以惰性返回`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn btn-outline`,g(n,_(`Lazy title`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(d,o);let f=S(l);return a(f,k,()=>({disabled:!0,title:`不会显示`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn btn-ghost`,g(n,_(`Disabled tooltip`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(f,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`})),A.insertBefore(q,O);let J=S(L);a(J,j,()=>({title:`Tooltip placements`,tab:p,preview:o(()=>r(Object.assign(e=>{let t=N().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=t.childNodes[3],d=u.parentNode,f=S(i);a(f,k,()=>({"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn`,g(n,_(`Top`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(f,n);let p=S(s);a(p,k,()=>({"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn`,g(n,_(`Bottom`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(p,o);let m=S(l);a(m,k,()=>({"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn`,g(n,_(`Left`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(m,c);let h=S(d);return a(h,k,()=>({"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn`,g(n,_(`Right`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(h,u),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`})),L.insertBefore(J,I);let Y=S(z);a(Y,j,()=>({title:`Rich content`,tab:P,preview:o(()=>y(e=>{let t=ee().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode,o=t.childNodes[1],c=o.parentNode,l=S(i);return a(l,k,()=>({title:r(Object.assign(e=>{let t=v(`div`,e);t.className=`space-y-1 text-left`;let n=v(`div`,t);g(t,n),n.className=`font-semibold`,g(n,_(`发布检查`));let r=v(`div`,t);return g(t,r),r.className=`text-xs opacity-80`,g(r,_(`包含静态资源、接口联调和埋点确认。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn btn-soft btn-primary`,g(n,_(`JSX title`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(l,n),E(()=>{let e=y(()=>{let e=C(),t=T(`div`,e);d(e,t),s(t,`space-y-2`);let n=T(`div`,t);d(t,n),s(n,`badge badge-primary badge-soft`),d(n,b(`Rue`));let r=T(`p`,t);return d(t,r),s(r,`m-0 text-xs leading-5`),d(r,b(`Tooltip.Content 适合承载更自由的结构化信息。`)),e}),t=m(k.Content,()=>({children:e})),n=m(k,()=>({open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[t,r(Object.assign(e=>{let t=v(`button`,e);return t.className=`btn btn-soft`,g(t,_(`Tooltip.Content`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]}));x(()=>f(n,c,o))}),t})),code:`<Tooltip
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
</Tooltip>`})),z.insertBefore(Y,R);let X=S(V);a(X,j,()=>({title:`Colors and semantic styling`,tab:F,preview:o(()=>r(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=S(i);a(u,k,()=>({title:`语义色`,color:`primary`,open:!0,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn btn-primary`,g(n,_(`Primary`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(u,n);let d=S(s);a(d,k,()=>({title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn border-0 bg-[#1d4ed8] text-white`,g(n,_(`Custom blue`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(d,o);let f=S(l);return a(f,k,()=>({title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn btn-accent btn-soft`,g(n,_(`Semantic slots`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(f,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`})),V.insertBefore(X,B);let Z=S(U);a(Z,j,()=>({title:`Trigger modes`,tab:ae,preview:o(()=>r(Object.assign(e=>{let t=te().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=S(i);a(u,k,()=>({trigger:`click`,title:`Click again to close`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`button`,t);return g(t,n),n.className=`btn btn-outline`,g(n,_(`Click trigger`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(u,n);let d=S(s);a(d,k,()=>({trigger:`focus`,title:`聚焦输入框时显示`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`label`,t);g(t,n),n.className=`input`;let r=v(`span`,n);g(n,r),r.className=`label`,g(r,_(`Focus`));let i=v(`input`,n);return g(n,i),i.setAttribute(`type`,`text`),i.setAttribute(`placeholder`,`Tab 到这里`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(d,o);let f=S(l);return a(f,k,()=>({trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:(e,t,n)=>D(e,n,()=>r(Object.assign(e=>{let t=C(),n=v(`div`,t);return g(t,n),n.className=`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,g(n,_(`Right click me`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(f,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`})),U.insertBefore(Z,H);let Q=S(G);a(Q,j,()=>({title:`Force open`,tab:oe,preview:ie,code:`const controlledOpen = ref(true)

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
</div>`})),G.insertBefore(Q,W);let $=[];return E(()=>{$=t(se,K,$,re||[],(e,t)=>e.prop,(e,t)=>{let n=u(e),i=u(t);return l((e,t,i)=>D(e,i,()=>r(Object.assign(e=>{let t=v(`tr`,e),r=v(`td`,t);g(t,r);let i=v(`code`,r);g(r,i);let a=_(``);g(i,a),h(a,()=>n.get().prop);let o=v(`td`,t);g(t,o);let s=_(``);g(o,s),h(s,()=>n.get().description);let c=v(`td`,t);g(t,c);let l=v(`code`,c);g(c,l);let u=_(``);g(l,u),h(u,()=>n.get().type);let d=v(`td`,t);g(t,d);let f=v(`code`,d);g(d,f);let p=_(``);return g(f,p),h(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),e=>O(()=>{})))};export{F as default};