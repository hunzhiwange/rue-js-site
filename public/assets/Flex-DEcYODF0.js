import{Bt as e,Ct as t,Dt as n,F as r,H as i,Ht as a,I as o,Qt as s,St as c,U as l,V as u,Vt as d,Wt as f,Y as p,_t as m,en as h,f as g,fn as _,g as v,gn as y,gt as b,h as x,hn as S,ht as C,in as w,m as T,mn as E,mt as D,p as O,pn as k,qt as A,sn as j,st as M,tt as N,vt as P,yn as F,yt as I,zt as L}from"./rue-runtime-Cv6BZekS.js";import{t as R}from"./Code-BzFVdc3U.js";import{t as z}from"./tabs-vLOp20OU.js";import{r as B}from"./SidebarPlaygroundDesign-CoDFHXQl.js";var V=F(`<section><!--rue:text-hole:0--></section>`),ee=F(`<div><!--rue:text-hole:0--></div>`),te=F(`<span><!--rue:text-hole:0--></span>`),H={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},U=(e,t)=>t?`${e} ${t}`:e,W=(e,t)=>e||(t?`vertical`:`horizontal`),G=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},K=e=>{if(e!=null&&e!==``)return typeof e==`number`?`${e}px`:e in H?H[e]:e},q=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},J=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},Y=(n,r,i)=>{let o=P(b(n,`align`)),s=P(b(n,`as`)),u=P(b(n,`children`)),d=P(b(n,`className`)),p=P(b(n,`component`)),g=P(b(n,`flex`)),_=P(b(n,`gap`)),v=P(b(n,`inline`)),y=P(b(n,`justify`)),x=P(b(n,`orientation`)),S=P(b(n,`style`)),C=P(b(n,`vertical`)),T=P(b(n,`wrap`)),O=P(D(m(n),[`align`,`as`,`children`,`className`,`component`,`flex`,`gap`,`inline`,`justify`,`orientation`,`style`,`vertical`,`wrap`]));return l(a(()=>{let n=N(()=>p.get()??s.get()??`div`);n.get();let r=N(()=>W(x.get(),C.get()));r.get();let i=r,a=N(()=>G(T.get()));a.get();let l=a,m=N(()=>K(_.get()));m.get();let h=m,b={...S.get(),display:v.get()?`inline-flex`:`flex`,flexDirection:i.get()===`vertical`?`column`:`row`,alignItems:J(o.get(),i.get())};return l.get()!==void 0&&(b.flexWrap=l.get()),y.get()!==void 0&&(b.justifyContent=q(y.get())),g.get()!==void 0&&g.get()!==null&&(b.flex=g.get()),h.get()!==void 0&&(b.gap=h.get()),n.get()===`section`?{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>f(n=>{let i=V().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],s=o.parentNode;t(a,()=>O.get(),[`className`,`style`,`data-rue-orientation`,`__rue_static_template_id__`]);let l;w(()=>{let e=U(`rue-flex`,d.get()),t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,a.setAttribute(`class`,t))});let f;w(()=>{let e=c(b);Object.is(f,e)||(f=e,a.style.cssText=e)});let p;return w(()=>{let e=r.get();Object.is(p,e)||(p=e,e==null?a.removeAttribute(`data-rue-orientation`):a.setAttribute(`data-rue-orientation`,String(e)))}),e({parent:s,before:o},()=>u.get(),()=>({})),[i,i]})}:{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>n.get()===`div`?f(n=>{let i=ee().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],s=o.parentNode;t(a,()=>O.get(),[`className`,`style`,`data-rue-orientation`,`__rue_static_template_id__`]);let l;w(()=>{let e=U(`rue-flex`,d.get()),t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,a.setAttribute(`class`,t))});let f;w(()=>{let e=c(b);Object.is(f,e)||(f=e,a.style.cssText=e)});let p;return w(()=>{let e=r.get();Object.is(p,e)||(p=e,e==null?a.removeAttribute(`data-rue-orientation`):a.setAttribute(`data-rue-orientation`,String(e)))}),e({parent:s,before:o},()=>u.get(),()=>({})),[i,i]}):n.get()===`span`?f(n=>{let i=te().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],s=o.parentNode;t(a,()=>O.get(),[`className`,`style`,`data-rue-orientation`,`__rue_static_template_id__`]);let l;w(()=>{let e=U(`rue-flex`,d.get()),t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,a.setAttribute(`class`,t))});let f;w(()=>{let e=c(b);Object.is(f,e)||(f=e,a.style.cssText=e)});let p;return w(()=>{let e=r.get();Object.is(p,e)||(p=e,e==null?a.removeAttribute(`data-rue-orientation`):a.setAttribute(`data-rue-orientation`,String(e)))}),e({parent:s,before:o},()=>u.get(),()=>({})),[i,i]}):I(e=>{let t=E();return[t.firstChild,t.lastChild]})}}),e=>h(()=>{o.set(e.align),s.set(e.as),u.set(e.children),d.set(e.className),p.set(e.component),g.set(e.flex),_.set(e.gap),v.set(e.inline),y.set(e.justify),x.set(e.orientation),S.set(e.style),C.set(e.vertical),T.set(e.wrap),O.set(D(e,[`align`,`as`,`children`,`className`,`component`,`flex`,`gap`,`inline`,`justify`,`orientation`,`style`,`vertical`,`wrap`]))}),()=>m(n))},ne=F(`<div class="card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm"><div class="card-body gap-6"><!--rue:opaque-hole:0--></div></div>`),re=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div>`),ie=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-4 lg:grid-cols-2"><!--rue:text-hole:0--></div></div>`),ae=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body space-y-5"><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="small"</div><!--rue:opaque-hole:0--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="middle"</div><!--rue:opaque-hole:1--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="large"</div><!--rue:opaque-hole:2--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="12px 24px"</div><!--rue:opaque-hole:3--></div></div></div>`),oe=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-6 xl:grid-cols-2"><div><div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">wrap</div><!--rue:opaque-hole:0--></div><div><div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">wrap="wrap-reverse"</div><!--rue:opaque-hole:1--></div></div></div>`),se=F(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),X=F(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),ce=F(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),le=F(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Flex 弹性布局</h1><p class="text-sm mt-3 mb-3">Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，展示 <code>className</code> 与 <code>style</code> 的直接组合方式，同时补充更完整的 的方向、对齐、换行、间距与伸缩能力。</p><p class="text-sm mt-0 mb-4 text-base-content/70">JSX 代码标签现在展示完整示例 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。</p><div class="text-sm flex flex-wrap gap-4"><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout" target="_blank">查看 Flexbox 规范</a></div><h2>何时使用</h2><ul><li>需要一组块级元素在横向、纵向、换行和间距之间快速切换。</li><li>希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。</li><li>需要使用 Rue 的轻量组合方式，同时使用更语义化的布局 API。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><h2>API</h2><!--rue:opaque-hole:6--></div>`),ue=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],de=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],fe=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],Z=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
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
  </Flex>`}),Q=(t,r,i)=>f(r=>{let i=X().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,s=i.childNodes[0].childNodes[0].childNodes[1],c=s.parentNode,l=i.childNodes[1],p=l.parentNode,m=i.childNodes[2],h=m.parentNode;e({parent:o,before:a},()=>L(b(t,`title`)),()=>({})),e({parent:c,before:s},()=>b(t,`summary`)?(r,i,a)=>d(r,a,()=>f(()=>{let r=E(),i=S(`p`,r);_(r,i),n(i,`m-0 text-sm opacity-70`);let a=k(`rue:slot:anchor`);_(i,a),e({parent:i,before:a},()=>L(b(t,`summary`)),()=>({}));let o=y(``),s=y(``);return r.insertBefore(o,r.firstChild),r.appendChild(s),[r.firstChild,r.lastChild]})):(e,t,n)=>{let r=()=>I(e=>{let t=y(``);return[t,t]});return e==null?r():d(e,n,r)},()=>({}));let g=(e,n,r)=>{let i=()=>u(z,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:b(t,`tab`).value,onChange:e=>b(t,`tab`).value=e,className:`mb-3 mt-4`}));return e==null?i():d(e,r,i)},v=l.nextSibling;return p.removeChild(l),e({parent:p,before:v},()=>g,()=>({})),e({parent:h,before:m},()=>b(t,`tab`).value===`preview`?L(C(b(t,`preview`),t,[])):(e,n,r)=>d(e,r,()=>u(R,()=>({className:`mt-2`,lang:`tsx`,code:b(t,`code`),title:`完整可复制示例`}))),()=>({})),[i,i]}),Ce=(e,t,n)=>{let r=P(b(e,`rows`));return l(f(e=>{let t=ce().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],i=n.parentNode,a=F(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return A(()=>{let e=r.get()||[];o=v(i,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return T(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=y(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=y(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=y(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),j(()=>g(o)),[t,t]}),e=>h(()=>{r.set(e.rows)}),()=>m(e))},$=(t,n,r)=>{let i=P(b(t,`eyebrow`)),a=P(b(t,`note`)),o=P(b(t,`value`));return l(f(t=>{let n=S(`div`,t);n.setAttribute(`class`,`min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let r=S(`div`,n);_(n,r),r.setAttribute(`class`,`text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let s=k(`rue:compiled-slot`);_(r,s),e({parent:r,before:s},()=>L(i.get()),()=>({}));let c=S(`div`,n);_(n,c),c.setAttribute(`class`,`mt-3 text-3xl font-semibold leading-none`);let l=k(`rue:compiled-slot`);_(c,l),e({parent:c,before:l},()=>L(o.get()),()=>({}));let u=S(`div`,n);_(n,u),u.setAttribute(`class`,`mt-2 text-sm leading-6 text-base-content/70`);let d=k(`rue:compiled-slot`);return _(u,d),e({parent:u,before:d},()=>L(a.get()),()=>({})),[n,n]}),e=>h(()=>{i.set(e.eyebrow),a.set(e.note),o.set(e.value)}),()=>m(t))},we=(t,n,a)=>{let c={basic:M(`preview`),vertical:M(`preview`),alignment:M(`preview`),gap:M(`preview`),wrap:M(`preview`),dashboard:M(`preview`)};return p(()=>u(B,()=>({children:(t,n,a)=>{let l=()=>f(t=>{let n=E(),a=le().content.cloneNode(!0),l=a.firstChild,p=l.childNodes[6],m=p.parentNode,h=l.childNodes[7],v=h.parentNode,b=l.childNodes[8],C=b.parentNode,T=l.childNodes[9],D=T.parentNode,M=l.childNodes[10],N=M.parentNode,F=l.childNodes[11],R=F.parentNode,z=l.childNodes[13],B=z.parentNode;n.appendChild(a);let V=(t,n,r)=>{let a=()=>u(Q,()=>({title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:c.basic,preview:()=>f(t=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=(e,t,n)=>{let r=()=>u(Y,()=>({gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:(e,t,n)=>{let r=()=>f(e=>{let t=E();i(t,$,()=>({eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`})),i(t,$,()=>({eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`})),i(t,$,()=>({eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`}));let n=y(``),r=y(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));return e==null?r():d(e,n,r)},s=r.nextSibling;return a.removeChild(r),e({parent:a,before:s},()=>o,()=>({})),[n,n]}),code:_e}));return t==null?a():d(t,r,a)},ee=p.nextSibling;m.removeChild(p),e({parent:m,before:ee},()=>V,()=>({}));let te=(t,n,r)=>{let a=()=>u(Q,()=>({title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:c.vertical,preview:()=>f(t=>{let n=re().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=n.childNodes[0].childNodes[1],s=o.parentNode,c=(e,t,n)=>{let r=()=>u(Y,()=>({vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:(e,t,n)=>{let r=()=>f(e=>{let t=E(),n=S(`div`,t);_(t,n),n.setAttribute(`class`,`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`),_(n,y(`Release train`));let r=S(`div`,t);_(t,r),r.setAttribute(`class`,`text-2xl font-semibold`),_(r,y(`v0.0.39`));let a=S(`div`,t);_(t,a),a.setAttribute(`class`,`text-sm leading-6 text-base-content/70`),_(a,y(`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`)),i(t,Y,()=>({gap:10,wrap:!0,children:(e,t,n)=>{let r=()=>I(e=>{let t=E(),n=S(`span`,t);_(t,n),n.setAttribute(`class`,`badge badge-soft badge-success`),_(n,y(`build green`));let r=S(`span`,t);_(t,r),r.setAttribute(`class`,`badge badge-soft badge-info`),_(r,y(`docs synced`));let i=S(`span`,t);_(t,i),i.setAttribute(`class`,`badge badge-soft badge-warning`),_(i,y(`2 follow-ups`));let a=y(``),o=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let o=y(``),s=y(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));return e==null?r():d(e,n,r)},l=r.nextSibling;a.removeChild(r),e({parent:a,before:l},()=>c,()=>({}));let p=(e,t,n)=>{let r=()=>u(Y,()=>({as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:(e,t,n)=>{let r=()=>I(e=>{let t=E(),n=S(`button`,t);_(t,n),n.setAttribute(`class`,`btn btn-ghost btn-sm rounded-full`),_(n,y(`Preview`));let r=S(`button`,t);_(t,r),r.setAttribute(`class`,`btn btn-ghost btn-sm rounded-full`),_(r,y(`Inspect`));let i=S(`button`,t);_(t,i),i.setAttribute(`class`,`btn btn-primary btn-sm rounded-full`),_(i,y(`Publish`));let a=y(``),o=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));return e==null?r():d(e,n,r)},m=o.nextSibling;return s.removeChild(o),e({parent:s,before:m},()=>p,()=>({})),[n,n]}),code:ve}));return t==null?a():d(t,r,a)},H=h.nextSibling;v.removeChild(h),e({parent:v,before:H},()=>te,()=>({}));let U=(t,n,r)=>{let a=()=>u(Q,()=>({title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也支持更贴近 CSS 的原生值。`,tab:c.alignment,preview:()=>f(t=>{let n=ie().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=[];return A(()=>{o=x(a,r,o,ue||[],(e,t)=>e.key,(t,n)=>{let r=P(t);return O((t,n,a)=>{let o=()=>f(t=>{let n=S(`div`,t);n.setAttribute(`class`,`space-y-3`);let a=S(`div`,n);_(n,a),a.setAttribute(`class`,`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`);let o=k(`rue:compiled-slot`);return _(a,o),e({parent:a,before:o},()=>L(r.get().title),()=>({})),i(n,Y,()=>({justify:r.get().justify,align:r.get().align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:(e,t,n)=>{let r=()=>I(e=>{let t=E(),n=S(`div`,t);_(t,n),n.setAttribute(`class`,`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`),_(n,y(`A`));let r=S(`div`,t);_(t,r),r.setAttribute(`class`,`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`),_(r,y(`B`));let i=S(`div`,t);_(t,i),i.setAttribute(`class`,`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`),_(i,y(`C`));let a=y(``),o=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}})),[n,n]});return t==null?o():d(t,a,o)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),j(()=>g(o)),[n,n]}),code:ye}));return t==null?a():d(t,r,a)},W=b.nextSibling;C.removeChild(b),e({parent:C,before:W},()=>U,()=>({}));let G=(t,n,i)=>{let a=()=>u(Q,()=>({title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:c.gap,preview:()=>f(t=>{let n=ae().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0].childNodes[1],a=i.parentNode,s=n.childNodes[0].childNodes[1].childNodes[1],c=s.parentNode,l=n.childNodes[0].childNodes[2].childNodes[1],p=l.parentNode,m=n.childNodes[0].childNodes[3].childNodes[1],h=m.parentNode,v=(e,t,n)=>{let r=()=>u(Y,()=>({gap:`small`,wrap:!0,children:(e,t,n)=>{let r=()=>I(e=>{let t=E(),n=S(`span`,t);_(t,n),n.setAttribute(`class`,`badge badge-soft badge-neutral`),_(n,y(`small`));let r=S(`span`,t);_(t,r),r.setAttribute(`class`,`badge badge-soft badge-primary`),_(r,y(`compact`));let i=S(`span`,t);_(t,i),i.setAttribute(`class`,`badge badge-soft badge-info`),_(i,y(`toolbar`));let a=S(`span`,t);_(t,a),a.setAttribute(`class`,`badge badge-soft badge-success`),_(a,y(`token`));let o=y(``),s=y(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));return e==null?r():d(e,n,r)},b=i.nextSibling;a.removeChild(i),e({parent:a,before:b},()=>v,()=>({}));let C=(e,t,n)=>{let r=()=>u(Y,()=>({gap:`middle`,wrap:!0,children:(e,t,n)=>{let r=()=>I(e=>{let t=E(),n=S(`span`,t);_(t,n),n.setAttribute(`class`,`badge badge-outline`),_(n,y(`middle`));let r=S(`span`,t);_(t,r),r.setAttribute(`class`,`badge badge-outline`),_(r,y(`roomy`));let i=S(`span`,t);_(t,i),i.setAttribute(`class`,`badge badge-outline`),_(i,y(`default`));let a=S(`span`,t);_(t,a),a.setAttribute(`class`,`badge badge-outline`),_(a,y(`balanced`));let o=y(``),s=y(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));return e==null?r():d(e,n,r)},w=s.nextSibling;c.removeChild(s),e({parent:c,before:w},()=>C,()=>({}));let T=(e,t,n)=>{let r=()=>u(Y,()=>({gap:`large`,wrap:!0,children:(e,t,n)=>{let r=()=>I(e=>{let t=E(),n=S(`span`,t);_(t,n),n.setAttribute(`class`,`badge badge-soft badge-secondary`),_(n,y(`large`));let r=S(`span`,t);_(t,r),r.setAttribute(`class`,`badge badge-soft badge-warning`),_(r,y(`editorial`));let i=S(`span`,t);_(t,i),i.setAttribute(`class`,`badge badge-soft badge-accent`),_(i,y(`airy`));let a=y(``),o=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));return e==null?r():d(e,n,r)},D=l.nextSibling;p.removeChild(l),e({parent:p,before:D},()=>T,()=>({}));let M=(e,t,n)=>{let i=()=>u(Y,()=>({gap:`12px 24px`,wrap:!0,children:(e,t,n)=>{let i=()=>f(e=>{let t=E(),n=k(`rue:list:end`);_(t,n);let i=[];A(()=>{i=x(n.parentNode,n,i,[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],(e,t)=>e,(e,t)=>{let n=P(e);return O((e,t,i)=>{let a=()=>r(e=>{let t=S(`div`,e);t.setAttribute(`class`,`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`);let r=y(``);return _(t,r),o(r,()=>n.get()),[t,t]});return e==null?a():d(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),j(()=>g(i));let a=y(``),s=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));return e==null?i():d(e,n,i)},N=m.nextSibling;return h.removeChild(m),e({parent:h,before:N},()=>M,()=>({})),[n,n]}),code:be}));return t==null?a():d(t,i,a)},K=T.nextSibling;D.removeChild(T),e({parent:D,before:K},()=>G,()=>({}));let q=(t,n,i)=>{let a=()=>u(Q,()=>({title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:c.wrap,preview:()=>f(t=>{let n=oe().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0].childNodes[1],a=i.parentNode,s=n.childNodes[0].childNodes[1].childNodes[1],c=s.parentNode,l=(e,t,n)=>{let i=()=>u(Y,()=>({wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:(e,t,n)=>{let i=()=>f(e=>{let t=E(),n=k(`rue:list:end`);_(t,n);let i=[];A(()=>{let e=de||[];i=x(n.parentNode,n,i,e,(e,t)=>e,(e,t)=>{let n=P(e);return O((e,t,i)=>{let a=()=>r(e=>{let t=S(`button`,e);t.setAttribute(`class`,`btn btn-sm btn-ghost rounded-full border border-base-300/80`);let r=y(``);return _(t,r),o(r,()=>n.get()),[t,t]});return e==null?a():d(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),j(()=>g(i));let a=y(``),s=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));return e==null?i():d(e,n,i)},p=i.nextSibling;a.removeChild(i),e({parent:a,before:p},()=>l,()=>({}));let m=(e,t,n)=>{let i=()=>u(Y,()=>({wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:(e,t,n)=>{let i=()=>f(e=>{let t=E(),n=k(`rue:list:end`);_(t,n);let i=[];A(()=>{let e=de||[];i=x(n.parentNode,n,i,e,(e,t)=>e+`-reverse`,(e,t)=>{let n=P(e);return O((e,t,i)=>{let a=()=>r(e=>{let t=S(`span`,e);t.setAttribute(`class`,`badge badge-lg badge-soft badge-primary`);let r=y(``);return _(t,r),o(r,()=>n.get()),[t,t]});return e==null?a():d(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),j(()=>g(i));let a=y(``),s=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));return e==null?i():d(e,n,i)},h=s.nextSibling;return c.removeChild(s),e({parent:c,before:h},()=>m,()=>({})),[n,n]}),code:xe}));return t==null?a():d(t,i,a)},J=M.nextSibling;N.removeChild(M),e({parent:N,before:J},()=>q,()=>({}));let X=(t,n,r)=>{let a=()=>u(Q,()=>({title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:c.dashboard,preview:()=>f(t=>{let n=se().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,o=(e,t,n)=>{let r=()=>u(Y,()=>({gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:(e,t,n)=>{let r=()=>f(e=>{let t=E(),n=S(`aside`,t);_(t,n),n.setAttribute(`class`,`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`);let r=S(`div`,n);_(n,r),r.setAttribute(`class`,`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`),_(r,y(`Studio`)),i(n,Y,()=>({vertical:!0,gap:`small`,className:`mt-5`,children:(e,t,n)=>{let r=()=>f(e=>{let t=E(),n=k(`rue:list:end`);_(t,n);let r=[];A(()=>{r=x(n.parentNode,n,r,[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`],(e,t)=>e,(e,t)=>{let n=P(e);return O((e,t,r)=>{let i=()=>f(e=>{let t=S(`button`,e),r;w(()=>{let e=`btn btn-sm justify-start ${n.get()===`Signals`?`btn-primary`:`btn-ghost`}`,i=e===!1||e==null?``:String(e);Object.is(r,i)||(r=i,t.setAttribute(`class`,i))});let i=y(``);return _(t,i),s(i,()=>n.get()),[t,t]});return e==null?i():d(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),j(()=>g(r));let i=y(``),a=y(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}})),i(t,Y,()=>({vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:(e,t,n)=>{let r=()=>f(e=>{let t=E();i(t,Y,()=>({justify:`between`,align:`center`,wrap:!0,gap:`small`,children:(e,t,n)=>{let r=()=>f(e=>{let t=E(),n=S(`div`,t);_(t,n);let r=S(`div`,n);_(n,r),r.setAttribute(`class`,`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`),_(r,y(`Live workspace`));let a=S(`div`,n);_(n,a),a.setAttribute(`class`,`mt-2 text-2xl font-semibold`),_(a,y(`Signals board`)),i(t,Y,()=>({gap:`small`,wrap:!0,children:(e,t,n)=>{let r=()=>I(e=>{let t=E(),n=S(`button`,t);_(t,n),n.setAttribute(`class`,`btn btn-sm btn-ghost`),_(n,y(`History`));let r=S(`button`,t);_(t,r),r.setAttribute(`class`,`btn btn-sm btn-ghost`),_(r,y(`Share`));let i=S(`button`,t);_(t,i),i.setAttribute(`class`,`btn btn-sm btn-primary`),_(i,y(`Create signal`));let a=y(``),o=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let o=y(``),s=y(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let n=S(`div`,t);_(t,n),n.setAttribute(`class`,`grid gap-4 md:grid-cols-2`);let r=S(`div`,n);_(n,r),r.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let a=S(`div`,r);_(r,a),a.setAttribute(`class`,`text-sm font-semibold`),_(a,y(`Incident pulse`));let o=S(`div`,r);_(r,o),o.setAttribute(`class`,`mt-4 text-4xl font-semibold`),_(o,y(`07`));let s=S(`div`,r);_(r,s),s.setAttribute(`class`,`mt-2 text-sm leading-6 text-base-content/70`),_(s,y(`当前处于活跃处理状态的事故数，比昨天下降 3 起。`));let c=S(`div`,n);_(n,c),c.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let l=S(`div`,c);_(c,l),l.setAttribute(`class`,`text-sm font-semibold`),_(l,y(`Response SLA`));let u=S(`div`,c);_(c,u),u.setAttribute(`class`,`mt-4 text-4xl font-semibold`),_(u,y(`11m`));let p=S(`div`,c);_(c,p),p.setAttribute(`class`,`mt-2 text-sm leading-6 text-base-content/70`),_(p,y(`过去 24 小时平均首次响应时间，已经回到目标区间内。`)),i(t,Y,()=>({justify:`end`,gap:`small`,wrap:!0,children:(e,t,n)=>{let r=()=>I(e=>{let t=E(),n=S(`button`,t);_(t,n),n.setAttribute(`class`,`btn btn-ghost btn-sm`),_(n,y(`Dismiss`));let r=S(`button`,t);_(t,r),r.setAttribute(`class`,`btn btn-outline btn-sm`),_(r,y(`Save view`));let i=S(`button`,t);_(t,i),i.setAttribute(`class`,`btn btn-primary btn-sm`),_(i,y(`Apply changes`));let a=y(``),o=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let m=y(``),h=y(``);return t.insertBefore(m,t.firstChild),t.appendChild(h),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let a=y(``),o=y(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));return e==null?r():d(e,n,r)},c=r.nextSibling;return a.removeChild(r),e({parent:a,before:c},()=>o,()=>({})),[n,n]}),code:Se}));return t==null?a():d(t,r,a)},ce=F.nextSibling;R.removeChild(F),e({parent:R,before:ce},()=>X,()=>({}));let Z=(e,t,n)=>{let r=()=>u(Ce,()=>({rows:fe}));return e==null?r():d(e,n,r)},pe=z.nextSibling;B.removeChild(z),e({parent:B,before:pe},()=>Z,()=>({}));let me=y(``),he=y(``);return n.insertBefore(me,n.firstChild),n.appendChild(he),[n.firstChild,n.lastChild]});return t==null?l():d(t,a,l)}})))};export{we as default};