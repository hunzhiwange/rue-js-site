import{At as e,Dn as t,E as n,Mt as r,Q as i,Vt as a,_n as o,_t as s,b as c,ct as l,dt as u,et as d,gn as f,hn as p,kn as m,on as h,pn as g,qt as _,rt as v,st as y,tn as b,ut as x,vn as S,vt as C,w,wn as T,x as ee,xn as E,yt as D}from"./rue-runtime-HIMg8Lz8.js";import{t as O}from"./tooltip-Cl9oxskz.js";import{r as k}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as A}from"./PreviewBlock-Dc0KnPUP.js";var j=S(`<div class="flex flex-wrap gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),te=S(`<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),ne=S(`<div class="grid gap-5 lg:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),M=S(`<div class="grid gap-4 lg:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),N=S(`<div class="flex flex-wrap items-center gap-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><button class="btn btn-outline"><!--rue:text-hole:2--></button><!--rue:opaque-hole:3--></div>`),re=S(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Tooltip 提示框</h1><p class="text-sm mt-3 mb-3">Tooltip 现在既使用 Rue 基础轻量、包裹式的视觉习惯，也补上更完整的语义 API。你可以使用 <code>tip</code> 和 <code>Tooltip.Content</code>，也可以切到 <code>title</code>、 <code>overlay</code>、受控显示、 自定义颜色和语义化样式扩展。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><div class="not-prose mt-10 overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:6--></tbody></table></div></div>`),ie=[{prop:`arrow`,description:`是否显示箭头，适合在卡片式信息和标签式提示之间切换语气。`,type:`boolean`,defaultValue:`true`},{prop:`classNames`,description:`语义化类名扩展，支持分别定制根节点和提示内容。`,type:`{ root?: string; body?: string }`,defaultValue:`-`},{prop:`color`,description:`支持 daisyUI 语义色，也支持自定义颜色字符串。`,type:`'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error' | string`,defaultValue:`-`},{prop:`content / overlay / title / tip`,description:`提示内容入口，支持文本、JSX 节点、函数返回值，并支持基础的 tip 写法。`,type:`any`,defaultValue:`-`},{prop:`defaultOpen`,description:`非受控初始显示状态。`,type:`boolean`,defaultValue:`false`},{prop:`disabled`,description:`禁用 Tooltip，仅保持包裹结构，不显示提示内容。`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`受控显示状态，适合与外部按钮、校验状态或页面步骤联动。`,type:`boolean`,defaultValue:`-`},{prop:`onOpenChange`,description:`显示状态变化回调。`,type:`(open: boolean) => void`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle`,description:`提示内容层的类名和样式扩展。`,type:`string / Record<string, any>`,defaultValue:`-`},{prop:`placement`,description:`支持四个基础方向和常见浮层组件里的角落别名。`,type:`'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom'`,defaultValue:`'top'`},{prop:`styles`,description:`语义化样式扩展，支持根节点与提示内容。`,type:`{ root?: Record<string, any>; body?: Record<string, any> }`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单独或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`['hover', 'focus']`}],ae=()=>{let e=b(!0);return _(()=>l(a(Object.assign(r=>{let i=N().content.cloneNode(!0).firstChild,c=i.childNodes[2],l=i.childNodes[0],u=l.parentNode,d=i.childNodes[1],m=d.parentNode,h=i.childNodes[2].childNodes[0],_=h.parentNode,v=i.childNodes[3],b=v.parentNode;c.className=`btn btn-outline`;let x=t=>{let n=()=>e.value=!e.value;typeof n==`function`&&n(t)};c.addEventListener(`click`,x),t(()=>c.removeEventListener(`click`,x));let S=p(u);y(S,O,()=>({"data-testid":`tooltip-open`,title:`Always visible`,open:!0,color:`primary`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn btn-primary`,g(n,o(`Force open`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(S,l);let C=p(m);y(C,O,()=>({title:e.value?`点击任一按钮都可以关闭`:`点击任一按钮都可以打开`,open:e.value,children:(r,i,c)=>n(r,c,()=>a(Object.assign(n=>{let r=s(),i=f(`button`,r);g(r,i),i.className=`btn btn-soft`;let a=t=>{let n=()=>e.value=!e.value;typeof n==`function`&&n(t)};return i.addEventListener(`click`,a),t(()=>i.removeEventListener(`click`,a)),g(i,o(`Controlled tooltip`)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),m.insertBefore(C,d);let w=o(``);_.insertBefore(w,h),_.removeChild(h),E(w,()=>e.value?`Hide controlled tooltip`:`Show controlled tooltip`);let T=p(b);return y(T,O,()=>({title:`包一层 span 可支持禁用按钮`,placement:`bottom`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`span`,t);g(t,n),n.className=`inline-flex`;let r=f(`button`,n);return g(n,r),r.className=`btn btn-disabled`,r.disabled=!0,g(r,o(`Disabled button`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),b.insertBefore(T,v),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{})))},P=()=>{let E=b(`preview`),N=b(`preview`),P=b(`preview`),oe=b(`preview`),se=b(`preview`),F=b(`preview`);return _(()=>l(v(k,()=>({children:(l,d,_)=>n(l,_,()=>a(Object.assign(l=>{let d=s(),_=re().content.cloneNode(!0),v=_.firstChild,b=v.childNodes[2],k=b.parentNode,I=v.childNodes[3],L=I.parentNode,R=v.childNodes[4],z=R.parentNode,B=v.childNodes[5],V=B.parentNode,H=v.childNodes[6],U=H.parentNode,W=v.childNodes[7],G=W.parentNode,K=v.childNodes[8].childNodes[0].childNodes[1].childNodes[0],ce=K.parentNode;d.appendChild(_);let q=p(k);y(q,A,()=>({title:`Tooltip`,tab:E,preview:h(()=>a(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=r.parentNode,c=t.childNodes[1],l=c.parentNode,u=t.childNodes[2],d=u.parentNode,m=p(i);y(m,O,()=>({"data-testid":`tooltip-basic`,title:`用于解释按钮含义`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn`,g(n,o(`Hover me`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(m,r);let h=p(l);y(h,O,()=>({title:()=>`函数内容也可以惰性返回`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn btn-outline`,g(n,o(`Lazy title`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(h,c);let _=p(d);return y(_,O,()=>({disabled:!0,title:`不会显示`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn btn-ghost`,g(n,o(`Disabled tooltip`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(_,u),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Tooltip title="用于解释按钮含义">
  <button className="btn">Hover me</button>
</Tooltip>

<Tooltip title={() => '函数内容也可以惰性返回'}>
  <button className="btn btn-outline">Lazy title</button>
</Tooltip>

<Tooltip disabled={true} title="不会显示">
  <button className="btn btn-ghost">Disabled tooltip</button>
</Tooltip>`})),k.insertBefore(q,b);let J=p(L);y(J,A,()=>({title:`Tooltip placements`,tab:N,preview:h(()=>a(Object.assign(e=>{let t=te().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=r.parentNode,c=t.childNodes[1],l=c.parentNode,u=t.childNodes[2],d=u.parentNode,m=t.childNodes[3],h=m.parentNode,_=p(i);y(_,O,()=>({"data-testid":`tooltip-top`,title:`top / topLeft / topRight`,open:!0,placement:`top`,className:`justify-self-start`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn`,g(n,o(`Top`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(_,r);let v=p(l);y(v,O,()=>({"data-testid":`tooltip-bottom`,title:`bottom / bottomLeft / bottomRight`,open:!0,placement:`bottomRight`,className:`justify-self-start`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn`,g(n,o(`Bottom`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(v,c);let b=p(d);y(b,O,()=>({"data-testid":`tooltip-left`,title:`left / leftTop / leftBottom`,open:!0,placement:`leftTop`,className:`justify-self-start`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn`,g(n,o(`Left`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(b,u);let x=p(h);return y(x,O,()=>({"data-testid":`tooltip-right`,title:`right / rightTop / rightBottom`,open:!0,placement:`rightBottom`,className:`justify-self-start`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn`,g(n,o(`Right`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),h.insertBefore(x,m),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`})),L.insertBefore(J,I);let Y=p(z);y(Y,A,()=>({title:`Rich content`,tab:P,preview:h(()=>e(t=>{let c=ne().content.cloneNode(!0).firstChild,l=c.childNodes[0],d=l.parentNode,h=c.childNodes[1],_=h.parentNode,v=p(d);return y(v,O,()=>({title:a(Object.assign(e=>{let t=f(`div`,e);t.className=`space-y-1 text-left`;let n=f(`div`,t);g(t,n),n.className=`font-semibold`,g(n,o(`发布检查`));let r=f(`div`,t);return g(t,r),r.className=`text-xs opacity-80`,g(r,o(`包含静态资源、接口联调和埋点确认。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),open:!0,className:`justify-self-start`,overlayClassName:`max-w-56 border border-base-300 shadow-lg`,overlayStyle:{padding:`0.75rem`,letterSpacing:`0.02em`},children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn btn-soft btn-primary`,g(n,o(`JSX title`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(v,l),T(()=>{let t=e(()=>{let e=s(),t=C(`div`,e);u(e,t),i(t,`space-y-2`);let n=C(`div`,t);u(t,n),i(n,`badge badge-primary badge-soft`),u(n,D(`Rue`));let r=C(`p`,t);return u(t,r),i(r,`m-0 text-xs leading-5`),u(r,D(`Tooltip.Content 适合承载更自由的结构化信息。`)),e}),n=r(O.Content,()=>({children:t})),c=r(O,()=>({open:!0,arrow:!1,className:`justify-self-start`,classNames:{body:`max-w-56 text-left`},styles:{body:{padding:`0.75rem`}},children:[n,a(Object.assign(e=>{let t=f(`button`,e);return t.className=`btn btn-soft`,g(t,o(`Tooltip.Content`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]}));m(()=>x(c,_,h))}),c})),code:`<Tooltip
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
</Tooltip>`})),z.insertBefore(Y,R);let X=p(V);y(X,A,()=>({title:`Colors and semantic styling`,tab:oe,preview:h(()=>a(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=r.parentNode,c=t.childNodes[1],l=c.parentNode,u=t.childNodes[2],d=u.parentNode,m=p(i);y(m,O,()=>({title:`语义色`,color:`primary`,open:!0,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn btn-primary`,g(n,o(`Primary`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(m,r);let h=p(l);y(h,O,()=>({title:`自定义颜色`,color:`#1d4ed8`,open:!0,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn border-0 bg-[#1d4ed8] text-white`,g(n,o(`Custom blue`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(h,c);let _=p(d);return y(_,O,()=>({title:`可通过 classNames.root 和 styles.body 精细调节`,open:!0,classNames:{root:`inline-flex`,body:`max-w-52 rounded-2xl`},styles:{body:{padding:`0.875rem`,boxShadow:`0 16px 40px rgba(15, 23, 42, 0.16)`}},children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn btn-accent btn-soft`,g(n,o(`Semantic slots`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(_,u),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Tooltip title="语义色" color="primary" open={true}>
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
</Tooltip>`})),V.insertBefore(X,B);let Z=p(U);y(Z,A,()=>({title:`Trigger modes`,tab:se,preview:h(()=>a(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=r.parentNode,c=t.childNodes[1],l=c.parentNode,u=t.childNodes[2],d=u.parentNode,m=p(i);y(m,O,()=>({trigger:`click`,title:`Click again to close`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`button`,t);return g(t,n),n.className=`btn btn-outline`,g(n,o(`Click trigger`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(m,r);let h=p(l);y(h,O,()=>({trigger:`focus`,title:`聚焦输入框时显示`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`label`,t);g(t,n),n.className=`input`;let r=f(`span`,n);g(n,r),r.className=`label`,g(r,o(`Focus`));let i=f(`input`,n);return g(n,i),i.setAttribute(`type`,`text`),i.setAttribute(`placeholder`,`Tab 到这里`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(h,c);let _=p(d);return y(_,O,()=>({trigger:`contextMenu`,title:`右键也可以作为触发手势`,children:(e,t,r)=>n(e,r,()=>a(Object.assign(e=>{let t=s(),n=f(`div`,t);return g(t,n),n.className=`rounded-box border border-dashed border-base-300 px-4 py-3 text-sm`,g(n,o(`Right click me`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(_,u),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`<Tooltip trigger="click" title="Click again to close">
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
</Tooltip>`})),U.insertBefore(Z,H);let Q=p(G);y(Q,A,()=>({title:`Force open`,tab:F,preview:ae,code:`const controlledOpen = ref(true)

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
</div>`})),G.insertBefore(Q,W);let le=S(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),$=[];return T(()=>{$=w(ce,K,$,ie||[],(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return ee(e=>{let t=le().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=o(``);a.insertBefore(f,n),a.removeChild(n);let p;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}let m;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}let h=o(``);l.insertBefore(h,c),l.removeChild(c);let g;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}let _=o(``);d.insertBefore(_,u),d.removeChild(u);let v;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>c($)),{__rue_compiled_host:d,__rue_compiled_roots:[d]}},{__rue_compiled_explicit_roots:!0})))})),e=>d(()=>{})))};export{P as default};