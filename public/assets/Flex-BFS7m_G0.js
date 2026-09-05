import{Bt as e,C as t,Et as n,H as r,K as i,Kt as a,Mt as o,S as s,Sn as c,V as l,W as u,Wt as d,Y as f,_n as p,_t as m,b as h,bn as g,fn as _,gn as v,hn as y,ht as b,kn as x,mn as S,nt as C,pn as w,q as T,qt as E,wn as D,x as O,z as k}from"./rue-runtime-CwEGJ854.js";import{t as A}from"./Code-DUvGro8N.js";import{t as j}from"./tabs-DUviBzjL.js";import{r as M}from"./SidebarPlaygroundDesign-CwCJwf8H.js";var N={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},P=(e,t)=>t?`${e} ${t}`:e,F=(e,t)=>e||(t?`vertical`:`horizontal`),I=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},ee=e=>{if(e!=null&&e!==``)return typeof e==`number`?`${e}px`:e in N?N[e]:e},L=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},te=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},R=a(e=>{let{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:f,__rue_rest_omit_10:p,__rue_rest_omit_11:h,__rue_rest_omit_12:g,rest:_,Component:v,resolvedOrientation:y,__rue_phase2_resolvedOrientation:b,resolvedWrap:x,__rue_phase2_resolvedWrap:S,resolvedGap:C,__rue_phase2_resolvedGap:w,mergedStyle:T}=E(`useSetup:0:0`,()=>d(()=>{let{as:t,component:n,vertical:r,orientation:i,inline:a,wrap:o,justify:s,align:l,flex:u,gap:d,className:f,style:p,children:m,...h}=e,g=e.component??e.as??`div`,_=c(()=>F(e.orientation,e.vertical));_.get();let v=_,y=c(()=>I(e.wrap));y.get();let b=y,x=c(()=>ee(e.gap));x.get();let S=x,C={...e.style,display:e.inline?`inline-flex`:`flex`,flexDirection:v.get()===`vertical`?`column`:`row`,alignItems:te(e.align,v.get())};return b.get()!==void 0&&(C.flexWrap=b.get()),e.justify!==void 0&&(C.justifyContent=L(e.justify)),e.flex!==void 0&&e.flex!==null&&(C.flex=e.flex),S.get()!==void 0&&(C.gap=S.get()),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,rest:h,Component:g,resolvedOrientation:_,__rue_phase2_resolvedOrientation:v,resolvedWrap:y,__rue_phase2_resolvedWrap:b,resolvedGap:x,__rue_phase2_resolvedGap:S,mergedStyle:C}}));return m(v,()=>({..._,className:P(`rue-flex`,e.className),style:T,"data-rue-orientation":y.get(),children:e.children}))}),ne=p(`<div class="card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm"><div class="card-body gap-6"><!--rue:opaque-hole:0--></div></div>`),re=p(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div>`),z=p(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-4 lg:grid-cols-2"><!--rue:text-hole:0--></div></div>`),B=p(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body space-y-5"><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="small"</div><!--rue:opaque-hole:0--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="middle"</div><!--rue:opaque-hole:1--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="large"</div><!--rue:opaque-hole:2--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="12px 24px"</div><!--rue:opaque-hole:3--></div></div></div>`),V=p(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-6 xl:grid-cols-2"><div><div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">wrap</div><!--rue:opaque-hole:0--></div><div><div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">wrap="wrap-reverse"</div><!--rue:opaque-hole:1--></div></div></div>`),H=p(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),U=p(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),W=p(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),G=p(`<div class="min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5"><div class="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45"><!--rue:text-hole:0--></div><div class="mt-3 text-3xl font-semibold leading-none"><!--rue:text-hole:1--></div><div class="mt-2 text-sm leading-6 text-base-content/70"><!--rue:text-hole:2--></div></div>`),K=p(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Flex 弹性布局</h1><p class="text-sm mt-3 mb-3">Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，展示 <code>className</code> 与 <code>style</code> 的直接组合方式，同时补充更完整的 的方向、对齐、换行、间距与伸缩能力。</p><p class="text-sm mt-0 mb-4 text-base-content/70">JSX 代码标签现在展示完整示例 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。</p><div class="text-sm flex flex-wrap gap-4"><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout" target="_blank">查看 Flexbox 规范</a></div><h2>何时使用</h2><ul><li>需要一组块级元素在横向、纵向、换行和间距之间快速切换。</li><li>希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。</li><li>需要使用 Rue 的轻量组合方式，同时使用更语义化的布局 API。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><h2>API</h2><!--rue:opaque-hole:6--></div>`),q=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],J=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],Y=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],X=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
${i}
)`),a.push(`export default ${e}`),a.join(`

`)},ie=`const MetricCard = ({ eyebrow, value, note }) => (
  <div className="min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5">
    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">
      {eyebrow}
    </div>
    <div className="mt-3 text-3xl font-semibold leading-none">{value}</div>
    <div className="mt-2 text-sm leading-6 text-base-content/70">{note}</div>
  </div>
)`,ae=`const alignmentShowcases = [
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
]`,oe=`const wrapTags = [
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
]`,se=`const workspaceNavItems = ['Overview', 'Deployments', 'Signals', 'Audit', 'Members']`,ce=X({componentName:`FlexMetricsDemo`,helpers:[ie],body:`  <Flex gap="middle" wrap>
    <MetricCard eyebrow="ARR" value="¥ 4.2M" note="较上周新增 11.8%，续费健康。" />
    <MetricCard eyebrow="Active Rooms" value="128" note="8 个房间处于重点观察，已自动提优先级。" />
    <MetricCard eyebrow="Feedback" value="94%" note="工单满意度稳定在 90% 以上，主要集中于移动端。" />
  </Flex>`}),le=X({componentName:`FlexVerticalDemo`,body:`  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
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
  </div>`}),Z=X({componentName:`FlexAlignmentDemo`,helpers:[ae],body:`  <div className="grid gap-4 lg:grid-cols-2">
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
  </div>`}),ue=X({componentName:`FlexGapDemo`,body:`  <div className="space-y-5">
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
  </div>`}),de=X({componentName:`FlexWrapDemo`,helpers:[oe],body:`  <div className="grid gap-6 xl:grid-cols-2">
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
  </div>`}),fe=X({componentName:`FlexWorkspaceDemo`,helpers:[se],body:`  <Flex
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
  </Flex>`}),Q=e=>b(t=>{let a=U().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,c=a.childNodes[0].childNodes[0].childNodes[1],u=c.parentNode,d=a.childNodes[1],p=d.parentNode,m=a.childNodes[2],g=m.parentNode;h({parent:s,before:o},()=>e.title,()=>({})),l(u,c,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(t=>{let n=y(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=w(`rue:compiled-slot`);return _(n,r),h({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=C();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let v=S(p);return i(v,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),p.insertBefore(v,d),D(()=>{let t=e.tab.value===`preview`?e.preview():r(A,()=>({className:`mt-2`,lang:`tsx`,code:e.code,title:`完整可复制示例`}));x(()=>f(t,g,m))}),a}),pe=e=>{let r=u(e.rows);return T(n(Object.assign(e=>{let i=W().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,c=[];return D(()=>{let e=r.get()||[];c=t(o,a,c,e,(e,t)=>e.prop,(e,t)=>{let r=u(e),i=u(t);return s((e,t,i)=>O(e,i,()=>n(Object.assign(e=>{let t=y(`tr`,e),n=y(`td`,t);_(t,n);let i=y(`code`,n);_(n,i);let a=v(``);_(i,a),g(a,()=>r.get().prop);let o=y(`td`,t);_(t,o);let s=v(``);_(o,s),g(s,()=>r.get().description);let c=y(`td`,t);_(t,c);let l=y(`code`,c);_(c,l);let u=v(``);_(l,u),g(u,()=>r.get().type);let d=y(`td`,t);_(t,d);let f=y(`code`,d);_(d,f);let p=v(``);return _(f,p),g(p,()=>r.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>k(()=>{r.set(e.rows)}),()=>e)},$=e=>{let t=u(e.eyebrow),r=u(e.note),i=u(e.value);return T(n(Object.assign(e=>{let n=G().content.cloneNode(!0).firstChild,a=n.childNodes[0].childNodes[0],o=a.parentNode,s=n.childNodes[1].childNodes[0],c=s.parentNode,l=n.childNodes[2].childNodes[0],u=l.parentNode,d=v(``);o.insertBefore(d,a),o.removeChild(a),g(d,()=>t.get());let f=v(``);c.insertBefore(f,s),c.removeChild(s),g(f,()=>i.get());let p=v(``);return u.insertBefore(p,l),u.removeChild(l),g(p,()=>r.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>k(()=>{t.set(e.eyebrow),r.set(e.note),i.set(e.value)}),()=>e)},me=()=>{let r={basic:e(`preview`),vertical:e(`preview`),alignment:e(`preview`),gap:e(`preview`),wrap:e(`preview`),dashboard:e(`preview`)};return o(()=>T((()=>{let e=b(()=>{let e=C(),o=K().content.cloneNode(!0),c=o.firstChild,l=c.childNodes[6],d=l.parentNode,p=c.childNodes[7],h=p.parentNode,b=c.childNodes[8],T=b.parentNode,E=c.childNodes[9],k=E.parentNode,A=c.childNodes[10],j=A.parentNode,M=c.childNodes[11],N=M.parentNode,P=c.childNodes[13],F=P.parentNode;e.appendChild(o),D(()=>{let e=m(Q,()=>({title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:r.basic,preview:a(()=>n(Object.assign(e=>{let t=ne().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0],a=r.parentNode,o=S(a);return i(o,R,()=>({gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C();return i(t,$,()=>({eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C();return i(t,$,()=>({eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C();return i(t,$,()=>({eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),a.insertBefore(o,r),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:ce}));x(()=>f(e,d,l))}),D(()=>{let e=m(Q,()=>({title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:r.vertical,preview:a(()=>n(Object.assign(e=>{let t=re().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0],a=r.parentNode,o=t.childNodes[0].childNodes[1],s=o.parentNode,c=S(a);i(c,R,()=>({vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`div`,t);return _(t,n),n.className=`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,_(n,v(`Release train`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`div`,t);return _(t,n),n.className=`text-2xl font-semibold`,_(n,v(`v0.0.39`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`div`,t);return _(t,n),n.className=`text-sm leading-6 text-base-content/70`,_(n,v(`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C();return i(t,R,()=>({gap:10,wrap:!0,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-success`,_(n,v(`build green`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-info`,_(n,v(`docs synced`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-warning`,_(n,v(`2 follow-ups`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),a.insertBefore(c,r);let l=S(s);return i(l,R,()=>({as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`button`,t);return _(t,n),n.className=`btn btn-ghost btn-sm rounded-full`,_(n,v(`Preview`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`button`,t);return _(t,n),n.className=`btn btn-ghost btn-sm rounded-full`,_(n,v(`Inspect`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`button`,t);return _(t,n),n.className=`btn btn-primary btn-sm rounded-full`,_(n,v(`Publish`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),s.insertBefore(l,o),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:le}));x(()=>f(e,h,p))}),D(()=>{let e=m(Q,()=>({title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也支持更贴近 CSS 的原生值。`,tab:r.alignment,preview:a(()=>n(Object.assign(e=>{let r=z().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[0],o=a.parentNode,c=[];return D(()=>{c=t(o,a,c,q||[],(e,t)=>e.key,(e,t)=>{let r=u(e),a=u(t);return s((e,t,a)=>O(e,a,()=>n(Object.assign(e=>{let t=y(`div`,e);t.className=`space-y-3`;let a=y(`div`,t);_(t,a),a.className=`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`;let o=v(``);return _(a,o),g(o,()=>r.get().title),i(t,R,()=>({justify:r.get().justify,align:r.get().align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`div`,t);return _(t,n),n.className=`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`,_(n,v(`A`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`div`,t);return _(t,n),n.className=`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`,_(n,v(`B`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`div`,t);return _(t,n),n.className=`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`,_(n,v(`C`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n),a.set(i)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),code:Z}));x(()=>f(e,T,b))}),D(()=>{let e=m(Q,()=>({title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:r.gap,preview:a(()=>n(Object.assign(e=>{let r=B().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,c=r.childNodes[0].childNodes[1].childNodes[1],l=c.parentNode,d=r.childNodes[0].childNodes[2].childNodes[1],f=d.parentNode,p=r.childNodes[0].childNodes[3].childNodes[1],m=p.parentNode,h=S(o);i(h,R,()=>({gap:`small`,wrap:!0,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-neutral`,_(n,v(`small`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-primary`,_(n,v(`compact`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-info`,_(n,v(`toolbar`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-success`,_(n,v(`token`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),o.insertBefore(h,a);let b=S(l);i(b,R,()=>({gap:`middle`,wrap:!0,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-outline`,_(n,v(`middle`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-outline`,_(n,v(`roomy`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-outline`,_(n,v(`default`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-outline`,_(n,v(`balanced`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),l.insertBefore(b,c);let x=S(f);i(x,R,()=>({gap:`large`,wrap:!0,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-secondary`,_(n,v(`large`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-warning`,_(n,v(`editorial`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`span`,t);return _(t,n),n.className=`badge badge-soft badge-accent`,_(n,v(`airy`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),f.insertBefore(x,d);let T=S(m);return i(T,R,()=>({gap:`12px 24px`,wrap:!0,children:(e,r,i)=>O(e,i,()=>n(Object.assign(e=>{let r=C(),i=w(`rue:list:end`);_(r,i);let a=[];return D(()=>{a=t(i.parentNode,i,a,[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],(e,t)=>e,(e,t)=>{let r=u(e),i=u(t);return s((e,t,i)=>O(e,i,()=>n(Object.assign(e=>{let t=y(`div`,e);t.className=`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`;let n=v(``);return _(t,n),g(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),m.insertBefore(T,p),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),code:ue}));x(()=>f(e,k,E))}),D(()=>{let e=m(Q,()=>({title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:r.wrap,preview:a(()=>n(Object.assign(e=>{let r=V().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,c=r.childNodes[0].childNodes[1].childNodes[1],l=c.parentNode,d=S(o);i(d,R,()=>({wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:(e,r,i)=>O(e,i,()=>n(Object.assign(e=>{let r=C(),i=w(`rue:list:end`);_(r,i);let a=[];return D(()=>{let e=J||[];a=t(i.parentNode,i,a,e,(e,t)=>e,(e,t)=>{let r=u(e),i=u(t);return s((e,t,i)=>O(e,i,()=>n(Object.assign(e=>{let t=y(`button`,e);t.className=`btn btn-sm btn-ghost rounded-full border border-base-300/80`;let n=v(``);return _(t,n),g(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(d,a);let f=S(l);return i(f,R,()=>({wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:(e,r,i)=>O(e,i,()=>n(Object.assign(e=>{let r=C(),i=w(`rue:list:end`);_(r,i);let a=[];return D(()=>{let e=J||[];a=t(i.parentNode,i,a,e,(e,t)=>e+`-reverse`,(e,t)=>{let r=u(e),i=u(t);return s((e,t,i)=>O(e,i,()=>n(Object.assign(e=>{let t=y(`span`,e);t.className=`badge badge-lg badge-soft badge-primary`;let n=v(``);return _(t,n),g(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(f,c),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),code:de}));x(()=>f(e,j,A))}),D(()=>{let e=m(Q,()=>({title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:r.dashboard,preview:a(()=>n(Object.assign(e=>{let r=H().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[0],o=a.parentNode,c=S(o);return i(c,R,()=>({gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:[(e,r,a)=>O(e,a,()=>n(Object.assign(e=>{let r=C(),a=y(`aside`,r);_(r,a),a.className=`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`;let o=y(`div`,a);return _(a,o),o.className=`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,_(o,v(`Studio`)),i(a,R,()=>({vertical:!0,gap:`small`,className:`mt-5`,children:(e,r,i)=>O(e,i,()=>n(Object.assign(e=>{let r=C(),i=w(`rue:list:end`);_(r,i);let a=[];return D(()=>{a=t(i.parentNode,i,a,[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`],(e,t)=>e,(e,t)=>{let r=u(e),i=u(t);return s((e,t,i)=>O(e,i,()=>n(Object.assign(e=>{let t=y(`button`,e),n;D(()=>{let e=`btn btn-sm justify-start ${r.get()===`Signals`?`btn-primary`:`btn-ghost`}`,i=e==null?``:String(e);Object.is(n,i)||(n=i,t.className=i)});let i=v(``);return _(t,i),g(i,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C();return i(t,R,()=>({vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C();return i(t,R,()=>({justify:`between`,align:`center`,wrap:!0,gap:`small`,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`div`,t);_(t,n);let r=y(`div`,n);_(n,r),r.className=`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`,_(r,v(`Live workspace`));let i=y(`div`,n);return _(n,i),i.className=`mt-2 text-2xl font-semibold`,_(i,v(`Signals board`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C();return i(t,R,()=>({gap:`small`,wrap:!0,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`button`,t);return _(t,n),n.className=`btn btn-sm btn-ghost`,_(n,v(`History`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`button`,t);return _(t,n),n.className=`btn btn-sm btn-ghost`,_(n,v(`Share`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`button`,t);return _(t,n),n.className=`btn btn-sm btn-primary`,_(n,v(`Create signal`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`div`,t);_(t,n),n.className=`grid gap-4 md:grid-cols-2`;let r=y(`div`,n);_(n,r),r.className=`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`;let i=y(`div`,r);_(r,i),i.className=`text-sm font-semibold`,_(i,v(`Incident pulse`));let a=y(`div`,r);_(r,a),a.className=`mt-4 text-4xl font-semibold`,_(a,v(`07`));let o=y(`div`,r);_(r,o),o.className=`mt-2 text-sm leading-6 text-base-content/70`,_(o,v(`当前处于活跃处理状态的事故数，比昨天下降 3 起。`));let s=y(`div`,n);_(n,s),s.className=`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`;let c=y(`div`,s);_(s,c),c.className=`text-sm font-semibold`,_(c,v(`Response SLA`));let l=y(`div`,s);_(s,l),l.className=`mt-4 text-4xl font-semibold`,_(l,v(`11m`));let u=y(`div`,s);return _(s,u),u.className=`mt-2 text-sm leading-6 text-base-content/70`,_(u,v(`过去 24 小时平均首次响应时间，已经回到目标区间内。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C();return i(t,R,()=>({justify:`end`,gap:`small`,wrap:!0,children:[(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`button`,t);return _(t,n),n.className=`btn btn-ghost btn-sm`,_(n,v(`Dismiss`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`button`,t);return _(t,n),n.className=`btn btn-outline btn-sm`,_(n,v(`Save view`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=C(),n=y(`button`,t);return _(t,n),n.className=`btn btn-primary btn-sm`,_(n,v(`Apply changes`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),o.insertBefore(c,a),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),code:fe}));x(()=>f(e,N,M))});let I=S(F);return i(I,pe,()=>({rows:Y})),F.insertBefore(I,P),e});return m(M,()=>({children:e}))})(),e=>k(()=>{})))};export{me as default};