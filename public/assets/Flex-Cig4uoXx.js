import{B as e,Bt as t,Ct as n,Dt as r,F as i,Ht as a,I as o,L as s,P as c,Qt as l,R as u,St as d,V as f,Vt as p,W as m,Wt as h,X as g,Y as _,ct as v,en as y,f as b,fn as x,g as S,gn as C,h as w,hn as T,in as E,m as D,mn as O,mt as k,nt as A,p as j,pn as M,qt as N,sn as P,yn as F,z as I,zt as L}from"./rue-runtime-BWbIfNT8.js";import{t as R}from"./Code-C5ZhIIr9.js";import{t as z}from"./tabs-BJAzN1Eb.js";import{r as B}from"./SidebarPlaygroundDesign-DS4naa5t.js";var V=F(`<section><!--rue:text-hole:0--></section>`),ee=F(`<div><!--rue:text-hole:0--></div>`),te=F(`<span><!--rue:text-hole:0--></span>`),H={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},U=(e,t)=>t?`${e} ${t}`:e,W=(e,t)=>e||(t?`vertical`:`horizontal`),G=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},K=e=>{if(e!=null&&e!==``)return typeof e==`number`?`${e}px`:e in H?H[e]:e},q=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},J=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},Y=(r,i,c)=>{let l=m(I(r,`align`)),u=m(I(r,`as`)),p=m(I(r,`children`)),g=m(I(r,`className`)),_=m(I(r,`component`)),b=m(I(r,`flex`)),x=m(I(r,`gap`)),S=m(I(r,`inline`)),C=m(I(r,`justify`)),w=m(I(r,`orientation`)),T=m(I(r,`style`)),D=m(I(r,`vertical`)),k=m(I(r,`wrap`)),A=m(s(e(r),[`align`,`as`,`children`,`className`,`component`,`flex`,`gap`,`inline`,`justify`,`orientation`,`style`,`vertical`,`wrap`]));return o(a(()=>{let e=v(()=>_.get()??u.get()??`div`);e.get();let r=v(()=>W(w.get(),D.get()));r.get();let i=r,a=v(()=>G(k.get()));a.get();let o=a,s=v(()=>K(x.get()));s.get();let c=s,m={...T.get(),display:S.get()?`inline-flex`:`flex`,flexDirection:i.get()===`vertical`?`column`:`row`,alignItems:J(l.get(),i.get())};return o.get()!==void 0&&(m.flexWrap=o.get()),C.get()!==void 0&&(m.justifyContent=q(C.get())),b.get()!==void 0&&b.get()!==null&&(m.flex=b.get()),c.get()!==void 0&&(m.gap=c.get()),e.get()===`section`?{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>h(e=>{let i=V().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],s=o.parentNode;n(a,()=>A.get(),[`className`,`style`,`data-rue-orientation`,`__rue_static_template_id__`]);let c;E(()=>{let e=U(`rue-flex`,g.get()),t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,a.setAttribute(`class`,t))});let l;E(()=>{let e=d(m);Object.is(l,e)||(l=e,a.style.cssText=e)});let u;return E(()=>{let e=r.get();Object.is(u,e)||(u=e,e==null?a.removeAttribute(`data-rue-orientation`):a.setAttribute(`data-rue-orientation`,String(e)))}),t({parent:s,before:o},()=>p.get(),()=>({})),[i,i]})}:{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>e.get()===`div`?h(e=>{let i=ee().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],s=o.parentNode;n(a,()=>A.get(),[`className`,`style`,`data-rue-orientation`,`__rue_static_template_id__`]);let c;E(()=>{let e=U(`rue-flex`,g.get()),t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,a.setAttribute(`class`,t))});let l;E(()=>{let e=d(m);Object.is(l,e)||(l=e,a.style.cssText=e)});let u;return E(()=>{let e=r.get();Object.is(u,e)||(u=e,e==null?a.removeAttribute(`data-rue-orientation`):a.setAttribute(`data-rue-orientation`,String(e)))}),t({parent:s,before:o},()=>p.get(),()=>({})),[i,i]}):e.get()===`span`?h(e=>{let i=te().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],s=o.parentNode;n(a,()=>A.get(),[`className`,`style`,`data-rue-orientation`,`__rue_static_template_id__`]);let c;E(()=>{let e=U(`rue-flex`,g.get()),t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,a.setAttribute(`class`,t))});let l;E(()=>{let e=d(m);Object.is(l,e)||(l=e,a.style.cssText=e)});let u;return E(()=>{let e=r.get();Object.is(u,e)||(u=e,e==null?a.removeAttribute(`data-rue-orientation`):a.setAttribute(`data-rue-orientation`,String(e)))}),t({parent:s,before:o},()=>p.get(),()=>({})),[i,i]}):f(e=>{let t=O();return[t.firstChild,t.lastChild]})}}),e=>y(()=>{l.set(e.align),u.set(e.as),p.set(e.children),g.set(e.className),_.set(e.component),b.set(e.flex),x.set(e.gap),S.set(e.inline),C.set(e.justify),w.set(e.orientation),T.set(e.style),D.set(e.vertical),k.set(e.wrap),A.set(s(e,[`align`,`as`,`children`,`className`,`component`,`flex`,`gap`,`inline`,`justify`,`orientation`,`style`,`vertical`,`wrap`]))}),()=>e(r))},ne=F(`<div class="card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm"><div class="card-body gap-6"><!--rue:opaque-hole:0--></div></div>`),re=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div>`),ie=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-4 lg:grid-cols-2"><!--rue:text-hole:0--></div></div>`),ae=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body space-y-5"><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="small"</div><!--rue:opaque-hole:0--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="middle"</div><!--rue:opaque-hole:1--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="large"</div><!--rue:opaque-hole:2--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="12px 24px"</div><!--rue:opaque-hole:3--></div></div></div>`),oe=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-6 xl:grid-cols-2"><div><div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">wrap</div><!--rue:opaque-hole:0--></div><div><div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">wrap="wrap-reverse"</div><!--rue:opaque-hole:1--></div></div></div>`),se=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),X=F(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),ce=F(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),le=F(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Flex 弹性布局</h1><p class="text-sm mt-3 mb-3">Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，展示 <code>className</code> 与 <code>style</code> 的直接组合方式，同时补充更完整的 的方向、对齐、换行、间距与伸缩能力。</p><p class="text-sm mt-0 mb-4 text-base-content/70">JSX 代码标签现在展示完整示例 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。</p><div class="text-sm flex flex-wrap gap-4"><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout" target="_blank">查看 Flexbox 规范</a></div><h2>何时使用</h2><ul><li>需要一组块级元素在横向、纵向、换行和间距之间快速切换。</li><li>希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。</li><li>需要使用 Rue 的轻量组合方式，同时使用更语义化的布局 API。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><h2>API</h2><!--rue:opaque-hole:6--></div>`),ue=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],de=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],fe=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],Z=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
${i}
)`),a.push(`export default ${e}`),a.join(`

`)},pe=`const MetricCard = ({ eyebrow, value, note }) => (
  <div className="min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5">
    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">
      {eyebrow}
    </div>
    <div className="mt-3 text-3xl font-semibold leading-none">{value}</div>
    <div className="mt-2 text-sm leading-6 text-base-content/70">{note}</div>
  </div>
)`,me=`const alignmentShowcases = [
  {
    key: 'between-center',
    title: 'justify="between" + align="center"',
    justify: 'between',
    align: 'center',
  },
  {
    key: 'around-top',
    title: 'justify="around" + align="top"',
    justify: 'around',
    align: 'top',
  },
  {
    key: 'evenly-bottom',
    title: 'justify="evenly" + align="bottom"',
    justify: 'evenly',
    align: 'bottom',
  },
  {
    key: 'center-stretch',
    title: 'justify="center" + align="stretch"',
    justify: 'center',
    align: 'stretch',
  },
]`,he=`const wrapTags = [
  'Realtime Ops',
  'Inbox Zero',
  'Streaming',
  'Design Review',
  'Release Notes',
  'Workspace AI',
  'Latency',
  'Pinned',
  'Experiment',
  'Billing',
  'Team Sync',
  'Roadmap',
]`,ge=`const workspaceNavItems = ['Overview', 'Deployments', 'Signals', 'Audit', 'Members']`,_e=Z({componentName:`FlexMetricsDemo`,helpers:[pe],body:`  <Flex gap="middle" wrap>
    <MetricCard eyebrow="ARR" value="¥ 4.2M" note="较上周新增 11.8%，续费健康。" />
    <MetricCard eyebrow="Active Rooms" value="128" note="8 个房间处于重点观察，已自动提优先级。" />
    <MetricCard eyebrow="Feedback" value="94%" note="工单满意度稳定在 90% 以上，主要集中于移动端。" />
  </Flex>`}),ve=Z({componentName:`FlexVerticalDemo`,body:`  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
    <Flex
      vertical
      gap="small"
      className="rounded-2xl border border-base-300 bg-base-200/60 p-5"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50">
        Release train
      </div>
      <div className="text-2xl font-semibold">v0.0.39</div>
      <div className="text-sm leading-6 text-base-content/70">
        回归通过 248 项，文档、组件库和运行时构建已全部排队完成。
      </div>
      <Flex gap={10} wrap>
        <span className="badge badge-soft badge-success">build green</span>
        <span className="badge badge-soft badge-info">docs synced</span>
        <span className="badge badge-soft badge-warning">2 follow-ups</span>
      </Flex>
    </Flex>

    <Flex
      as="nav"
      inline
      gap={10}
      align="center"
      className="rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm"
      aria-label="Editor quick actions"
    >
      <button className="btn btn-ghost btn-sm rounded-full">Preview</button>
      <button className="btn btn-ghost btn-sm rounded-full">Inspect</button>
      <button className="btn btn-primary btn-sm rounded-full">Publish</button>
    </Flex>
  </div>`}),ye=Z({componentName:`FlexAlignmentDemo`,helpers:[me],body:`  <div className="grid gap-4 lg:grid-cols-2">
    {alignmentShowcases.map(showcase => (
      <div key={showcase.key} className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
          {showcase.title}
        </div>
        <Flex
          justify={showcase.justify}
          align={showcase.align}
          gap="small"
          className="h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4"
        >
          <div className="grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm">
            A
          </div>
          <div className="grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm">
            B
          </div>
          <div className="grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm">
            C
          </div>
        </Flex>
      </div>
    ))}
  </div>`}),be=Z({componentName:`FlexGapDemo`,body:`  <div className="space-y-5">
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
        gap=&quot;small&quot;
      </div>
      <Flex gap="small" wrap>
        <span className="badge badge-soft badge-neutral">small</span>
        <span className="badge badge-soft badge-primary">compact</span>
        <span className="badge badge-soft badge-info">toolbar</span>
        <span className="badge badge-soft badge-success">token</span>
      </Flex>
    </div>

    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
        gap=&quot;middle&quot;
      </div>
      <Flex gap="middle" wrap>
        <span className="badge badge-outline">middle</span>
        <span className="badge badge-outline">roomy</span>
        <span className="badge badge-outline">default</span>
        <span className="badge badge-outline">balanced</span>
      </Flex>
    </div>

    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
        gap=&quot;large&quot;
      </div>
      <Flex gap="large" wrap>
        <span className="badge badge-soft badge-secondary">large</span>
        <span className="badge badge-soft badge-warning">editorial</span>
        <span className="badge badge-soft badge-accent">airy</span>
      </Flex>
    </div>

    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
        gap=&quot;12px 24px&quot;
      </div>
      <Flex gap="12px 24px" wrap>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div
            key={day}
            className="rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium"
          >
            {day}
          </div>
        ))}
      </Flex>
    </div>
  </div>`}),xe=Z({componentName:`FlexWrapDemo`,helpers:[he],body:`  <div className="grid gap-6 xl:grid-cols-2">
    <div>
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
        wrap
      </div>
      <Flex
        wrap
        gap="small"
        className="max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4"
      >
        {wrapTags.map(tag => (
          <button key={tag} className="btn btn-sm btn-ghost rounded-full border border-base-300/80">
            {tag}
          </button>
        ))}
      </Flex>
    </div>

    <div>
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">
        wrap=&quot;wrap-reverse&quot;
      </div>
      <Flex
        wrap="wrap-reverse"
        gap="small"
        className="max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4"
      >
        {wrapTags.map(tag => (
          <span key={tag + '-reverse'} className="badge badge-lg badge-soft badge-primary">
            {tag}
          </span>
        ))}
      </Flex>
    </div>
  </div>`}),Se=Z({componentName:`FlexWorkspaceDemo`,helpers:[ge],body:`  <Flex
    gap={0}
    align="stretch"
    className="overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80"
  >
    <aside className="w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5">
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50">
        Studio
      </div>
      <Flex vertical gap="small" className="mt-5">
        {workspaceNavItems.map(item => (
          <button
            key={item}
            className={'btn btn-sm justify-start ' + (item === 'Signals' ? 'btn-primary' : 'btn-ghost')}
          >
            {item}
          </button>
        ))}
      </Flex>
    </aside>

    <Flex vertical gap="middle" flex="1 1 0%" className="min-w-0 p-5">
      <Flex justify="between" align="center" wrap gap="small">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50">
            Live workspace
          </div>
          <div className="mt-2 text-2xl font-semibold">Signals board</div>
        </div>
        <Flex gap="small" wrap>
          <button className="btn btn-sm btn-ghost">History</button>
          <button className="btn btn-sm btn-ghost">Share</button>
          <button className="btn btn-sm btn-primary">Create signal</button>
        </Flex>
      </Flex>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5">
          <div className="text-sm font-semibold">Incident pulse</div>
          <div className="mt-4 text-4xl font-semibold">07</div>
          <div className="mt-2 text-sm leading-6 text-base-content/70">
            当前处于活跃处理状态的事故数，比昨天下降 3 起。
          </div>
        </div>
        <div className="rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5">
          <div className="text-sm font-semibold">Response SLA</div>
          <div className="mt-4 text-4xl font-semibold">11m</div>
          <div className="mt-2 text-sm leading-6 text-base-content/70">
            过去 24 小时平均首次响应时间，已经回到目标区间内。
          </div>
        </div>
      </div>

      <Flex justify="end" gap="small" wrap>
        <button className="btn btn-ghost btn-sm">Dismiss</button>
        <button className="btn btn-outline btn-sm">Save view</button>
        <button className="btn btn-primary btn-sm">Apply changes</button>
      </Flex>
    </Flex>
  </Flex>`}),Q=(e,n,i)=>h(n=>{let i=X().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,s=i.childNodes[0].childNodes[0].childNodes[1],l=s.parentNode,d=i.childNodes[1],m=d.parentNode,g=i.childNodes[2],_=g.parentNode;t({parent:o,before:a},()=>L(I(e,`title`)),()=>({})),t({parent:l,before:s},()=>I(e,`summary`)?(n,i,a)=>p(n,a,()=>h(()=>{let n=O(),i=T(`p`,n);x(n,i),r(i,`m-0 text-sm opacity-70`);let a=M(`rue:slot:anchor`);x(i,a),t({parent:i,before:a},()=>L(I(e,`summary`)),()=>({}));let o=C(``),s=C(``);return n.insertBefore(o,n.firstChild),n.appendChild(s),[n.firstChild,n.lastChild]})):(e,t,n)=>{let r=()=>f(e=>{let t=C(``);return[t,t]});return e==null?r():p(e,n,r)},()=>({}));let v=(t,n,r)=>{let i=()=>c(z,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:I(e,`tab`).value,onChange:t=>I(e,`tab`).value=t,className:`mb-3 mt-4`}));return t==null?i():p(t,r,i)},y=d.nextSibling;return m.removeChild(d),t({parent:m,before:y},()=>v,()=>({})),t({parent:_,before:g},()=>I(e,`tab`).value===`preview`?L(u(I(e,`preview`),e,[])):(t,n,r)=>p(t,r,()=>c(R,()=>({className:`mt-2`,lang:`tsx`,code:I(e,`code`),title:`完整可复制示例`}))),()=>({})),[i,i]}),Ce=(t,n,r)=>{let i=m(I(t,`rows`));return o(h(e=>{let t=ce().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,a=F(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return N(()=>{let e=i.get()||[];o=S(r,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return D(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=C(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=C(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=C(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),P(()=>b(o)),[t,t]}),e=>y(()=>{i.set(e.rows)}),()=>e(t))},$=(n,r,i)=>{let a=m(I(n,`eyebrow`)),s=m(I(n,`note`)),c=m(I(n,`value`));return o(h(e=>{let n=T(`div`,e);n.setAttribute(`class`,`min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let r=T(`div`,n);x(n,r),r.setAttribute(`class`,`text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let i=M(`rue:compiled-slot`);x(r,i),t({parent:r,before:i},()=>L(a.get()),()=>({}));let o=T(`div`,n);x(n,o),o.setAttribute(`class`,`mt-3 text-3xl font-semibold leading-none`);let l=M(`rue:compiled-slot`);x(o,l),t({parent:o,before:l},()=>L(c.get()),()=>({}));let u=T(`div`,n);x(n,u),u.setAttribute(`class`,`mt-2 text-sm leading-6 text-base-content/70`);let d=M(`rue:compiled-slot`);return x(u,d),t({parent:u,before:d},()=>L(s.get()),()=>({})),[n,n]}),e=>y(()=>{a.set(e.eyebrow),s.set(e.note),c.set(e.value)}),()=>e(n))},we=(e,n,r)=>{let a={basic:k(`preview`),vertical:k(`preview`),alignment:k(`preview`),gap:k(`preview`),wrap:k(`preview`),dashboard:k(`preview`)};return A(()=>c(B,()=>({children:(e,n,r)=>{let o=()=>h(e=>{let n=O(),r=le().content.cloneNode(!0),o=r.firstChild,s=o.childNodes[6],u=s.parentNode,d=o.childNodes[7],v=d.parentNode,y=o.childNodes[8],S=y.parentNode,D=o.childNodes[9],k=D.parentNode,A=o.childNodes[10],F=A.parentNode,I=o.childNodes[11],R=I.parentNode,z=o.childNodes[13],B=z.parentNode;n.appendChild(r);let V=(e,n,r)=>{let o=()=>c(Q,()=>({title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:a.basic,preview:()=>h(e=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=(e,t,n)=>{let r=()=>c(Y,()=>({gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:(e,t,n)=>{let r=()=>h(e=>{let t=O();i(t,$,()=>({eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`})),i(t,$,()=>({eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`})),i(t,$,()=>({eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`}));let n=C(``),r=C(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},s=r.nextSibling;return a.removeChild(r),t({parent:a,before:s},()=>o,()=>({})),[n,n]}),code:_e}));return e==null?o():p(e,r,o)},ee=s.nextSibling;u.removeChild(s),t({parent:u,before:ee},()=>V,()=>({}));let te=(e,n,r)=>{let o=()=>c(Q,()=>({title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:a.vertical,preview:()=>h(e=>{let n=re().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=n.childNodes[0].childNodes[1],s=o.parentNode,l=(e,t,n)=>{let r=()=>c(Y,()=>({vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:(e,t,n)=>{let r=()=>h(e=>{let t=O(),n=T(`div`,t);x(t,n),n.setAttribute(`class`,`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`),x(n,C(`Release train`));let r=T(`div`,t);x(t,r),r.setAttribute(`class`,`text-2xl font-semibold`),x(r,C(`v0.0.39`));let a=T(`div`,t);x(t,a),a.setAttribute(`class`,`text-sm leading-6 text-base-content/70`),x(a,C(`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`)),i(t,Y,()=>({gap:10,wrap:!0,children:(e,t,n)=>{let r=()=>f(e=>{let t=O(),n=T(`span`,t);x(t,n),n.setAttribute(`class`,`badge badge-soft badge-success`),x(n,C(`build green`));let r=T(`span`,t);x(t,r),r.setAttribute(`class`,`badge badge-soft badge-info`),x(r,C(`docs synced`));let i=T(`span`,t);x(t,i),i.setAttribute(`class`,`badge badge-soft badge-warning`),x(i,C(`2 follow-ups`));let a=C(``),o=C(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));let o=C(``),s=C(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},u=r.nextSibling;a.removeChild(r),t({parent:a,before:u},()=>l,()=>({}));let d=(e,t,n)=>{let r=()=>c(Y,()=>({as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:(e,t,n)=>{let r=()=>f(e=>{let t=O(),n=T(`button`,t);x(t,n),n.setAttribute(`class`,`btn btn-ghost btn-sm rounded-full`),x(n,C(`Preview`));let r=T(`button`,t);x(t,r),r.setAttribute(`class`,`btn btn-ghost btn-sm rounded-full`),x(r,C(`Inspect`));let i=T(`button`,t);x(t,i),i.setAttribute(`class`,`btn btn-primary btn-sm rounded-full`),x(i,C(`Publish`));let a=C(``),o=C(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},m=o.nextSibling;return s.removeChild(o),t({parent:s,before:m},()=>d,()=>({})),[n,n]}),code:ve}));return e==null?o():p(e,r,o)},H=d.nextSibling;v.removeChild(d),t({parent:v,before:H},()=>te,()=>({}));let U=(e,n,r)=>{let o=()=>c(Q,()=>({title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也支持更贴近 CSS 的原生值。`,tab:a.alignment,preview:()=>h(e=>{let n=ie().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=[];return N(()=>{o=w(a,r,o,ue||[],(e,t)=>e.key,(e,n)=>{let r=m(e);return j((e,n,a)=>{let o=()=>h(e=>{let n=T(`div`,e);n.setAttribute(`class`,`space-y-3`);let a=T(`div`,n);x(n,a),a.setAttribute(`class`,`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`);let o=M(`rue:compiled-slot`);return x(a,o),t({parent:a,before:o},()=>L(r.get().title),()=>({})),i(n,Y,()=>({justify:r.get().justify,align:r.get().align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:(e,t,n)=>{let r=()=>f(e=>{let t=O(),n=T(`div`,t);x(t,n),n.setAttribute(`class`,`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`),x(n,C(`A`));let r=T(`div`,t);x(t,r),r.setAttribute(`class`,`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`),x(r,C(`B`));let i=T(`div`,t);x(t,i),i.setAttribute(`class`,`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`),x(i,C(`C`));let a=C(``),o=C(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}})),[n,n]});return e==null?o():p(e,a,o)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),P(()=>b(o)),[n,n]}),code:ye}));return e==null?o():p(e,r,o)},W=y.nextSibling;S.removeChild(y),t({parent:S,before:W},()=>U,()=>({}));let G=(e,n,r)=>{let i=()=>c(Q,()=>({title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:a.gap,preview:()=>h(e=>{let n=ae().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[1].childNodes[1],o=a.parentNode,s=n.childNodes[0].childNodes[2].childNodes[1],l=s.parentNode,u=n.childNodes[0].childNodes[3].childNodes[1],d=u.parentNode,v=(e,t,n)=>{let r=()=>c(Y,()=>({gap:`small`,wrap:!0,children:(e,t,n)=>{let r=()=>f(e=>{let t=O(),n=T(`span`,t);x(t,n),n.setAttribute(`class`,`badge badge-soft badge-neutral`),x(n,C(`small`));let r=T(`span`,t);x(t,r),r.setAttribute(`class`,`badge badge-soft badge-primary`),x(r,C(`compact`));let i=T(`span`,t);x(t,i),i.setAttribute(`class`,`badge badge-soft badge-info`),x(i,C(`toolbar`));let a=T(`span`,t);x(t,a),a.setAttribute(`class`,`badge badge-soft badge-success`),x(a,C(`token`));let o=C(``),s=C(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},y=r.nextSibling;i.removeChild(r),t({parent:i,before:y},()=>v,()=>({}));let S=(e,t,n)=>{let r=()=>c(Y,()=>({gap:`middle`,wrap:!0,children:(e,t,n)=>{let r=()=>f(e=>{let t=O(),n=T(`span`,t);x(t,n),n.setAttribute(`class`,`badge badge-outline`),x(n,C(`middle`));let r=T(`span`,t);x(t,r),r.setAttribute(`class`,`badge badge-outline`),x(r,C(`roomy`));let i=T(`span`,t);x(t,i),i.setAttribute(`class`,`badge badge-outline`),x(i,C(`default`));let a=T(`span`,t);x(t,a),a.setAttribute(`class`,`badge badge-outline`),x(a,C(`balanced`));let o=C(``),s=C(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},E=a.nextSibling;o.removeChild(a),t({parent:o,before:E},()=>S,()=>({}));let D=(e,t,n)=>{let r=()=>c(Y,()=>({gap:`large`,wrap:!0,children:(e,t,n)=>{let r=()=>f(e=>{let t=O(),n=T(`span`,t);x(t,n),n.setAttribute(`class`,`badge badge-soft badge-secondary`),x(n,C(`large`));let r=T(`span`,t);x(t,r),r.setAttribute(`class`,`badge badge-soft badge-warning`),x(r,C(`editorial`));let i=T(`span`,t);x(t,i),i.setAttribute(`class`,`badge badge-soft badge-accent`),x(i,C(`airy`));let a=C(``),o=C(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},k=s.nextSibling;l.removeChild(s),t({parent:l,before:k},()=>D,()=>({}));let A=(e,t,n)=>{let r=()=>c(Y,()=>({gap:`12px 24px`,wrap:!0,children:(e,t,n)=>{let r=()=>h(e=>{let t=O(),n=M(`rue:list:end`);x(t,n);let r=[];N(()=>{r=w(n.parentNode,n,r,[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],(e,t)=>e,(e,t)=>{let n=m(e);return j((e,t,r)=>{let i=()=>_(e=>{let t=T(`div`,e);t.setAttribute(`class`,`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`);let r=C(``);return x(t,r),g(r,()=>n.get()),[t,t]});return e==null?i():p(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(r));let i=C(``),a=C(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},F=u.nextSibling;return d.removeChild(u),t({parent:d,before:F},()=>A,()=>({})),[n,n]}),code:be}));return e==null?i():p(e,r,i)},K=D.nextSibling;k.removeChild(D),t({parent:k,before:K},()=>G,()=>({}));let q=(e,n,r)=>{let i=()=>c(Q,()=>({title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:a.wrap,preview:()=>h(e=>{let n=oe().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[1].childNodes[1],o=a.parentNode,s=(e,t,n)=>{let r=()=>c(Y,()=>({wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:(e,t,n)=>{let r=()=>h(e=>{let t=O(),n=M(`rue:list:end`);x(t,n);let r=[];N(()=>{let e=de||[];r=w(n.parentNode,n,r,e,(e,t)=>e,(e,t)=>{let n=m(e);return j((e,t,r)=>{let i=()=>_(e=>{let t=T(`button`,e);t.setAttribute(`class`,`btn btn-sm btn-ghost rounded-full border border-base-300/80`);let r=C(``);return x(t,r),g(r,()=>n.get()),[t,t]});return e==null?i():p(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(r));let i=C(``),a=C(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},l=r.nextSibling;i.removeChild(r),t({parent:i,before:l},()=>s,()=>({}));let u=(e,t,n)=>{let r=()=>c(Y,()=>({wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:(e,t,n)=>{let r=()=>h(e=>{let t=O(),n=M(`rue:list:end`);x(t,n);let r=[];N(()=>{let e=de||[];r=w(n.parentNode,n,r,e,(e,t)=>e+`-reverse`,(e,t)=>{let n=m(e);return j((e,t,r)=>{let i=()=>_(e=>{let t=T(`span`,e);t.setAttribute(`class`,`badge badge-lg badge-soft badge-primary`);let r=C(``);return x(t,r),g(r,()=>n.get()),[t,t]});return e==null?i():p(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(r));let i=C(``),a=C(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},d=a.nextSibling;return o.removeChild(a),t({parent:o,before:d},()=>u,()=>({})),[n,n]}),code:xe}));return e==null?i():p(e,r,i)},J=A.nextSibling;F.removeChild(A),t({parent:F,before:J},()=>q,()=>({}));let X=(e,n,r)=>{let o=()=>c(Q,()=>({title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:a.dashboard,preview:()=>h(e=>{let n=se().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=(e,t,n)=>{let r=()=>c(Y,()=>({gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:(e,t,n)=>{let r=()=>h(e=>{let t=O(),n=T(`aside`,t);x(t,n),n.setAttribute(`class`,`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`);let r=T(`div`,n);x(n,r),r.setAttribute(`class`,`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`),x(r,C(`Studio`)),i(n,Y,()=>({vertical:!0,gap:`small`,className:`mt-5`,children:(e,t,n)=>{let r=()=>h(e=>{let t=O(),n=M(`rue:list:end`);x(t,n);let r=[];N(()=>{r=w(n.parentNode,n,r,[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`],(e,t)=>e,(e,t)=>{let n=m(e);return j((e,t,r)=>{let i=()=>h(e=>{let t=T(`button`,e),r;E(()=>{let e=`btn btn-sm justify-start ${n.get()===`Signals`?`btn-primary`:`btn-ghost`}`,i=e===!1||e==null?``:String(e);Object.is(r,i)||(r=i,t.setAttribute(`class`,i))});let i=C(``);return x(t,i),l(i,()=>n.get()),[t,t]});return e==null?i():p(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),P(()=>b(r));let i=C(``),a=C(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}})),i(t,Y,()=>({vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:(e,t,n)=>{let r=()=>h(e=>{let t=O();i(t,Y,()=>({justify:`between`,align:`center`,wrap:!0,gap:`small`,children:(e,t,n)=>{let r=()=>h(e=>{let t=O(),n=T(`div`,t);x(t,n);let r=T(`div`,n);x(n,r),r.setAttribute(`class`,`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`),x(r,C(`Live workspace`));let a=T(`div`,n);x(n,a),a.setAttribute(`class`,`mt-2 text-2xl font-semibold`),x(a,C(`Signals board`)),i(t,Y,()=>({gap:`small`,wrap:!0,children:(e,t,n)=>{let r=()=>f(e=>{let t=O(),n=T(`button`,t);x(t,n),n.setAttribute(`class`,`btn btn-sm btn-ghost`),x(n,C(`History`));let r=T(`button`,t);x(t,r),r.setAttribute(`class`,`btn btn-sm btn-ghost`),x(r,C(`Share`));let i=T(`button`,t);x(t,i),i.setAttribute(`class`,`btn btn-sm btn-primary`),x(i,C(`Create signal`));let a=C(``),o=C(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));let o=C(``),s=C(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));let n=T(`div`,t);x(t,n),n.setAttribute(`class`,`grid gap-4 md:grid-cols-2`);let r=T(`div`,n);x(n,r),r.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let a=T(`div`,r);x(r,a),a.setAttribute(`class`,`text-sm font-semibold`),x(a,C(`Incident pulse`));let o=T(`div`,r);x(r,o),o.setAttribute(`class`,`mt-4 text-4xl font-semibold`),x(o,C(`07`));let s=T(`div`,r);x(r,s),s.setAttribute(`class`,`mt-2 text-sm leading-6 text-base-content/70`),x(s,C(`当前处于活跃处理状态的事故数，比昨天下降 3 起。`));let c=T(`div`,n);x(n,c),c.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let l=T(`div`,c);x(c,l),l.setAttribute(`class`,`text-sm font-semibold`),x(l,C(`Response SLA`));let u=T(`div`,c);x(c,u),u.setAttribute(`class`,`mt-4 text-4xl font-semibold`),x(u,C(`11m`));let d=T(`div`,c);x(c,d),d.setAttribute(`class`,`mt-2 text-sm leading-6 text-base-content/70`),x(d,C(`过去 24 小时平均首次响应时间，已经回到目标区间内。`)),i(t,Y,()=>({justify:`end`,gap:`small`,wrap:!0,children:(e,t,n)=>{let r=()=>f(e=>{let t=O(),n=T(`button`,t);x(t,n),n.setAttribute(`class`,`btn btn-ghost btn-sm`),x(n,C(`Dismiss`));let r=T(`button`,t);x(t,r),r.setAttribute(`class`,`btn btn-outline btn-sm`),x(r,C(`Save view`));let i=T(`button`,t);x(t,i),i.setAttribute(`class`,`btn btn-primary btn-sm`),x(i,C(`Apply changes`));let a=C(``),o=C(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));let m=C(``),g=C(``);return t.insertBefore(m,t.firstChild),t.appendChild(g),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));let a=C(``),o=C(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():p(e,n,r)}}));return e==null?r():p(e,n,r)},s=r.nextSibling;return a.removeChild(r),t({parent:a,before:s},()=>o,()=>({})),[n,n]}),code:Se}));return e==null?o():p(e,r,o)},ce=I.nextSibling;R.removeChild(I),t({parent:R,before:ce},()=>X,()=>({}));let Z=(e,t,n)=>{let r=()=>c(Ce,()=>({rows:fe}));return e==null?r():p(e,n,r)},pe=z.nextSibling;B.removeChild(z),t({parent:B,before:pe},()=>Z,()=>({}));let me=C(``),he=C(``);return n.insertBefore(me,n.firstChild),n.appendChild(he),[n.firstChild,n.lastChild]});return e==null?o():p(e,r,o)}})))};export{we as default};