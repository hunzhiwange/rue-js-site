import{At as e,C as t,Dn as n,E as r,Mt as i,P as a,T as o,Vt as s,_n as c,_t as l,at as u,b as d,ct as f,et as p,gn as m,hn as h,in as g,kn as _,mn as v,nt as y,on as b,pn as x,qt as S,rt as C,sn as w,st as T,tn as E,ut as D,vn as O,w as k,wn as A,x as j,xn as M}from"./rue-runtime-HIMg8Lz8.js";import{t as N}from"./Code-DpH7u0gk.js";import{t as P}from"./tabs-C020zIXs.js";import{r as F}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";var I={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},L=(e,t)=>t?`${e} ${t}`:e,R=(e,t)=>e||(t?`vertical`:`horizontal`),ee=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},te=e=>{if(e!=null&&e!==``)return typeof e==`number`?`${e}px`:e in I?I[e]:e},ne=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},re=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},z=b(e=>{let{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:o,__rue_rest_omit_4:s,__rue_rest_omit_5:c,__rue_rest_omit_6:l,__rue_rest_omit_7:u,__rue_rest_omit_8:d,__rue_rest_omit_9:f,__rue_rest_omit_10:p,__rue_rest_omit_11:m,__rue_rest_omit_12:h,rest:_,Component:v,resolvedOrientation:y,__rue_phase2_resolvedOrientation:b,resolvedWrap:x,__rue_phase2_resolvedWrap:S,resolvedGap:C,__rue_phase2_resolvedGap:T,mergedStyle:E}=w(`useSetup:0:0`,()=>g(()=>{let{as:t,component:n,vertical:r,orientation:i,inline:o,wrap:s,justify:c,align:l,flex:u,gap:d,className:f,style:p,children:m,...h}=e,g=e.component??e.as??`div`,_=a(()=>R(e.orientation,e.vertical));_.get();let v=_,y=a(()=>ee(e.wrap));y.get();let b=y,x=a(()=>te(e.gap));x.get();let S=x,C={...e.style,display:e.inline?`inline-flex`:`flex`,flexDirection:v.get()===`vertical`?`column`:`row`,alignItems:re(e.align,v.get())};return b.get()!==void 0&&(C.flexWrap=b.get()),e.justify!==void 0&&(C.justifyContent=ne(e.justify)),e.flex!==void 0&&e.flex!==null&&(C.flex=e.flex),S.get()!==void 0&&(C.gap=S.get()),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,rest:h,Component:g,resolvedOrientation:_,__rue_phase2_resolvedOrientation:v,resolvedWrap:y,__rue_phase2_resolvedWrap:b,resolvedGap:x,__rue_phase2_resolvedGap:S,mergedStyle:C}}));return i(v,()=>({..._,className:L(`rue-flex`,e.className),style:E,"data-rue-orientation":y.get(),children:e.children}))}),ie=O(`<div class="card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm"><div class="card-body gap-6"><!--rue:opaque-hole:0--></div></div>`),B=O(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div>`),V=O(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-4 lg:grid-cols-2"><!--rue:text-hole:0--></div></div>`),H=O(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body space-y-5"><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="small"</div><!--rue:opaque-hole:0--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="middle"</div><!--rue:opaque-hole:1--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="large"</div><!--rue:opaque-hole:2--></div><div><div class="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">gap="12px 24px"</div><!--rue:opaque-hole:3--></div></div></div>`),U=O(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body grid gap-6 xl:grid-cols-2"><div><div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">wrap</div><!--rue:opaque-hole:0--></div><div><div class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55">wrap="wrap-reverse"</div><!--rue:opaque-hole:1--></div></div></div>`),W=O(`<div class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body"><!--rue:opaque-hole:0--></div></div>`),G=O(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),K=O(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),q=O(`<div class="min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5"><div class="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45"><!--rue:text-hole:0--></div><div class="mt-3 text-3xl font-semibold leading-none"><!--rue:text-hole:1--></div><div class="mt-2 text-sm leading-6 text-base-content/70"><!--rue:text-hole:2--></div></div>`),J=O(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Flex 弹性布局</h1><p class="text-sm mt-3 mb-3">Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，展示 <code>className</code> 与 <code>style</code> 的直接组合方式，同时补充更完整的 的方向、对齐、换行、间距与伸缩能力。</p><p class="text-sm mt-0 mb-4 text-base-content/70">JSX 代码标签现在展示完整示例 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。</p><div class="text-sm flex flex-wrap gap-4"><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout" target="_blank">查看 Flexbox 规范</a></div><h2>何时使用</h2><ul><li>需要一组块级元素在横向、纵向、换行和间距之间快速切换。</li><li>希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。</li><li>需要使用 Rue 的轻量组合方式，同时使用更语义化的布局 API。</li></ul><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><h2>API</h2><!--rue:opaque-hole:6--></div>`),ae=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],Y=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],oe=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],X=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
${i}
)`),a.push(`export default ${e}`),a.join(`

`)},se=`const MetricCard = ({ eyebrow, value, note }) => (
  <div className="min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5">
    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">
      {eyebrow}
    </div>
    <div className="mt-3 text-3xl font-semibold leading-none">{value}</div>
    <div className="mt-2 text-sm leading-6 text-base-content/70">{note}</div>
  </div>
)`,ce=`const alignmentShowcases = [
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
]`,le=`const wrapTags = [
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
]`,ue=`const workspaceNavItems = ['Overview', 'Deployments', 'Signals', 'Audit', 'Members']`,de=X({componentName:`FlexMetricsDemo`,helpers:[se],body:`  <Flex gap="middle" wrap>
    <MetricCard eyebrow="ARR" value="¥ 4.2M" note="较上周新增 11.8%，续费健康。" />
    <MetricCard eyebrow="Active Rooms" value="128" note="8 个房间处于重点观察，已自动提优先级。" />
    <MetricCard eyebrow="Feedback" value="94%" note="工单满意度稳定在 90% 以上，主要集中于移动端。" />
  </Flex>`}),Z=X({componentName:`FlexVerticalDemo`,body:`  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
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
  </div>`}),fe=X({componentName:`FlexAlignmentDemo`,helpers:[ce],body:`  <div className="grid gap-4 lg:grid-cols-2">
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
  </div>`}),pe=X({componentName:`FlexGapDemo`,body:`  <div className="space-y-5">
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
  </div>`}),me=X({componentName:`FlexWrapDemo`,helpers:[le],body:`  <div className="grid gap-6 xl:grid-cols-2">
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
  </div>`}),he=X({componentName:`FlexWorkspaceDemo`,helpers:[ue],body:`  <Flex
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
  </Flex>`}),Q=t=>e(e=>{let n=G().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[0].childNodes[1],c=a.parentNode,u=n.childNodes[1],d=u.parentNode,f=n.childNodes[2],p=f.parentNode;o({parent:i,before:r},()=>t.title,()=>({})),y(c,a,()=>t.summary?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let n=m(`p`,e);n.className=`m-0 text-sm opacity-70`;let r=v(`rue:compiled-slot`);return x(n,r),o({parent:n,before:r},()=>t.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let g=h(d);return T(g,P,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`})),d.insertBefore(g,u),A(()=>{let e=t.tab.value===`preview`?t.preview():C(N,()=>({className:`mt-2`,lang:`tsx`,code:t.code,title:`完整可复制示例`}));_(()=>D(e,p,f))}),n}),ge=e=>{let t=u(e.rows);return f(s(Object.assign(e=>{let r=K().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=O(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return A(()=>{let e=t.get()||[];s=k(a,i,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return j(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let l=t.childNodes[2].childNodes[0].childNodes[0],u=l.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=c(``);a.insertBefore(p,n),a.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}let g=c(``);u.insertBefore(g,l),u.removeChild(l);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=c(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>d(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{t.set(e.rows)}),()=>e)},$=e=>{let t=u(e.eyebrow),n=u(e.note),r=u(e.value);return f(s(Object.assign(e=>{let i=q().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],o=a.parentNode,s=i.childNodes[1].childNodes[0],l=s.parentNode,u=i.childNodes[2].childNodes[0],d=u.parentNode,f=c(``);o.insertBefore(f,a),o.removeChild(a),M(f,()=>t.get());let p=c(``);l.insertBefore(p,s),l.removeChild(s),M(p,()=>r.get());let m=c(``);return d.insertBefore(m,u),d.removeChild(u),M(m,()=>n.get()),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{t.set(e.eyebrow),n.set(e.note),r.set(e.value)}),()=>e)},_e=()=>{let a={basic:E(`preview`),vertical:E(`preview`),alignment:E(`preview`),gap:E(`preview`),wrap:E(`preview`),dashboard:E(`preview`)};return S(()=>f((()=>{let o=e(()=>{let e=l(),o=J().content.cloneNode(!0),f=o.firstChild,p=f.childNodes[6],g=p.parentNode,y=f.childNodes[7],S=y.parentNode,C=f.childNodes[8],w=C.parentNode,E=f.childNodes[9],O=E.parentNode,j=f.childNodes[10],N=j.parentNode,P=f.childNodes[11],F=P.parentNode,I=f.childNodes[13],L=I.parentNode;e.appendChild(o),A(()=>{let e=i(Q,()=>({title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:a.basic,preview:b(()=>s(Object.assign(e=>{let t=ie().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],i=n.parentNode,a=h(i);return T(a,z,()=>({gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l();return T(t,$,()=>({eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l();return T(t,$,()=>({eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l();return T(t,$,()=>({eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),i.insertBefore(a,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:de}));_(()=>D(e,g,p))}),A(()=>{let e=i(Q,()=>({title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:a.vertical,preview:b(()=>s(Object.assign(e=>{let t=B().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],i=n.parentNode,a=t.childNodes[0].childNodes[1],o=a.parentNode,u=h(i);T(u,z,()=>({vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`div`,t);return x(t,n),n.className=`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,x(n,c(`Release train`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`div`,t);return x(t,n),n.className=`text-2xl font-semibold`,x(n,c(`v0.0.39`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`div`,t);return x(t,n),n.className=`text-sm leading-6 text-base-content/70`,x(n,c(`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l();return T(t,z,()=>({gap:10,wrap:!0,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-success`,x(n,c(`build green`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-info`,x(n,c(`docs synced`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-warning`,x(n,c(`2 follow-ups`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),i.insertBefore(u,n);let d=h(o);return T(d,z,()=>({as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`button`,t);return x(t,n),n.className=`btn btn-ghost btn-sm rounded-full`,x(n,c(`Preview`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`button`,t);return x(t,n),n.className=`btn btn-ghost btn-sm rounded-full`,x(n,c(`Inspect`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`button`,t);return x(t,n),n.className=`btn btn-primary btn-sm rounded-full`,x(n,c(`Publish`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),o.insertBefore(d,a),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:Z}));_(()=>D(e,S,y))}),A(()=>{let e=i(Q,()=>({title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也支持更贴近 CSS 的原生值。`,tab:a.alignment,preview:b(()=>s(Object.assign(e=>{let i=V().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],o=a.parentNode,f=[];return A(()=>{f=k(o,a,f,ae||[],(e,t)=>e.key,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=m(`div`,e);t.className=`space-y-3`;let n=m(`div`,t);x(t,n),n.className=`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`;let a=c(``);return x(n,a),M(a,()=>i.get().title),T(t,z,()=>({justify:i.get().justify,align:i.get().align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`div`,t);return x(t,n),n.className=`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`,x(n,c(`A`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`div`,t);return x(t,n),n.className=`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`,x(n,c(`B`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`div`,t);return x(t,n),n.className=`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`,x(n,c(`C`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(f)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),code:fe}));_(()=>D(e,w,C))}),A(()=>{let e=i(Q,()=>({title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:a.gap,preview:b(()=>s(Object.assign(e=>{let i=H().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,f=i.childNodes[0].childNodes[1].childNodes[1],p=f.parentNode,g=i.childNodes[0].childNodes[2].childNodes[1],_=g.parentNode,y=i.childNodes[0].childNodes[3].childNodes[1],b=y.parentNode,S=h(o);T(S,z,()=>({gap:`small`,wrap:!0,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-neutral`,x(n,c(`small`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-primary`,x(n,c(`compact`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-info`,x(n,c(`toolbar`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-success`,x(n,c(`token`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),o.insertBefore(S,a);let C=h(p);T(C,z,()=>({gap:`middle`,wrap:!0,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-outline`,x(n,c(`middle`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-outline`,x(n,c(`roomy`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-outline`,x(n,c(`default`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-outline`,x(n,c(`balanced`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),p.insertBefore(C,f);let w=h(_);T(w,z,()=>({gap:`large`,wrap:!0,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-secondary`,x(n,c(`large`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-warning`,x(n,c(`editorial`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`span`,t);return x(t,n),n.className=`badge badge-soft badge-accent`,x(n,c(`airy`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),_.insertBefore(w,g);let E=h(b);return T(E,z,()=>({gap:`12px 24px`,wrap:!0,children:(e,i,a)=>r(e,a,()=>s(Object.assign(e=>{let i=l(),a=v(`rue:list:end`);x(i,a);let o=[];return A(()=>{o=k(a.parentNode,a,o,[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],(e,t)=>e,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=m(`div`,e);t.className=`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`;let n=c(``);return x(t,n),M(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(o)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),b.insertBefore(E,y),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),code:pe}));_(()=>D(e,O,E))}),A(()=>{let e=i(Q,()=>({title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:a.wrap,preview:b(()=>s(Object.assign(e=>{let i=U().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,f=i.childNodes[0].childNodes[1].childNodes[1],p=f.parentNode,g=h(o);T(g,z,()=>({wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:(e,i,a)=>r(e,a,()=>s(Object.assign(e=>{let i=l(),a=v(`rue:list:end`);x(i,a);let o=[];return A(()=>{let e=Y||[];o=k(a.parentNode,a,o,e,(e,t)=>e,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=m(`button`,e);t.className=`btn btn-sm btn-ghost rounded-full border border-base-300/80`;let n=c(``);return x(t,n),M(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(o)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(g,a);let _=h(p);return T(_,z,()=>({wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:(e,i,a)=>r(e,a,()=>s(Object.assign(e=>{let i=l(),a=v(`rue:list:end`);x(i,a);let o=[];return A(()=>{let e=Y||[];o=k(a.parentNode,a,o,e,(e,t)=>e+`-reverse`,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=m(`span`,e);t.className=`badge badge-lg badge-soft badge-primary`;let n=c(``);return x(t,n),M(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(o)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),p.insertBefore(_,f),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),code:me}));_(()=>D(e,N,j))}),A(()=>{let e=i(Q,()=>({title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:a.dashboard,preview:b(()=>s(Object.assign(e=>{let i=W().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],o=a.parentNode,f=h(o);return T(f,z,()=>({gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:[(e,i,a)=>r(e,a,()=>s(Object.assign(e=>{let i=l(),a=m(`aside`,i);x(i,a),a.className=`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`;let o=m(`div`,a);return x(a,o),o.className=`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,x(o,c(`Studio`)),T(a,z,()=>({vertical:!0,gap:`small`,className:`mt-5`,children:(e,i,a)=>r(e,a,()=>s(Object.assign(e=>{let i=l(),a=v(`rue:list:end`);x(i,a);let o=[];return A(()=>{o=k(a.parentNode,a,o,[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`],(e,t)=>e,(e,n)=>{let i=u(e);return t((e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=m(`button`,e),n;A(()=>{let e=`btn btn-sm justify-start ${i.get()===`Signals`?`btn-primary`:`btn-ghost`}`,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let r=c(``);return x(t,r),M(r,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>d(o)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l();return T(t,z,()=>({vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l();return T(t,z,()=>({justify:`between`,align:`center`,wrap:!0,gap:`small`,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`div`,t);x(t,n);let r=m(`div`,n);x(n,r),r.className=`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`,x(r,c(`Live workspace`));let i=m(`div`,n);return x(n,i),i.className=`mt-2 text-2xl font-semibold`,x(i,c(`Signals board`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l();return T(t,z,()=>({gap:`small`,wrap:!0,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`button`,t);return x(t,n),n.className=`btn btn-sm btn-ghost`,x(n,c(`History`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`button`,t);return x(t,n),n.className=`btn btn-sm btn-ghost`,x(n,c(`Share`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`button`,t);return x(t,n),n.className=`btn btn-sm btn-primary`,x(n,c(`Create signal`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`div`,t);x(t,n),n.className=`grid gap-4 md:grid-cols-2`;let r=m(`div`,n);x(n,r),r.className=`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`;let i=m(`div`,r);x(r,i),i.className=`text-sm font-semibold`,x(i,c(`Incident pulse`));let a=m(`div`,r);x(r,a),a.className=`mt-4 text-4xl font-semibold`,x(a,c(`07`));let o=m(`div`,r);x(r,o),o.className=`mt-2 text-sm leading-6 text-base-content/70`,x(o,c(`当前处于活跃处理状态的事故数，比昨天下降 3 起。`));let s=m(`div`,n);x(n,s),s.className=`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`;let u=m(`div`,s);x(s,u),u.className=`text-sm font-semibold`,x(u,c(`Response SLA`));let d=m(`div`,s);x(s,d),d.className=`mt-4 text-4xl font-semibold`,x(d,c(`11m`));let f=m(`div`,s);return x(s,f),f.className=`mt-2 text-sm leading-6 text-base-content/70`,x(f,c(`过去 24 小时平均首次响应时间，已经回到目标区间内。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l();return T(t,z,()=>({justify:`end`,gap:`small`,wrap:!0,children:[(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`button`,t);return x(t,n),n.className=`btn btn-ghost btn-sm`,x(n,c(`Dismiss`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`button`,t);return x(t,n),n.className=`btn btn-outline btn-sm`,x(n,c(`Save view`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>s(Object.assign(e=>{let t=l(),n=m(`button`,t);return x(t,n),n.className=`btn btn-primary btn-sm`,x(n,c(`Apply changes`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),o.insertBefore(f,a),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),code:he}));_(()=>D(e,F,P))});let R=h(L);return T(R,ge,()=>({rows:oe})),L.insertBefore(R,I),e});return i(F,()=>({children:o}))})(),e=>p(()=>{})))};export{_e as default};