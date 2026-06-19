import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,gt as c,l,nt as u,o as d,rt as f,t as p,tt as m,ut as h,yt as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as y,i as b}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as x}from"./Code-D5UqTwV6.js";import{t as S}from"./tabs-DRfs918f.js";import{r as C}from"./SidebarPlaygroundDesign-CWudvLqE.js";var w={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},T=(e,t)=>t?`${e} ${t}`:e,E=(e,t)=>e||(t?`vertical`:`horizontal`),D=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},O=e=>{if(!(e==null||e===``))return typeof e==`number`?`${e}px`:e in w?w[e]:e},k=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},A=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},j=n=>{let{__rue_rest_omit_0:o,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:f,__rue_rest_omit_4:m,__rue_rest_omit_5:h,__rue_rest_omit_6:v,__rue_rest_omit_7:y,__rue_rest_omit_8:b,__rue_rest_omit_9:x,__rue_rest_omit_10:S,__rue_rest_omit_11:C,__rue_rest_omit_12:w,rest:j,Component:M,resolvedOrientation:N,resolvedWrap:P,resolvedGap:F,mergedStyle:I}=_(`useSetup:0:0`,()=>i(()=>{let{as:e,component:t,vertical:r,orientation:i,inline:a,wrap:o,justify:s,align:c,flex:l,gap:u,className:d,style:f,children:p,...m}=n,h=n.component??n.as??`div`,v=_(`computed:1:0`,()=>g(()=>E(n.orientation,n.vertical))),y=v,b=_(`computed:1:1`,()=>g(()=>D(n.wrap))),x=b,S=_(`computed:1:2`,()=>g(()=>O(n.gap))),C=S,w={...n.style,display:n.inline?`inline-flex`:`flex`,flexDirection:y.get()===`vertical`?`column`:`row`,alignItems:A(n.align,y.get())};return x.get()!==void 0&&(w.flexWrap=x.get()),n.justify!==void 0&&(w.justifyContent=k(n.justify)),n.flex!==void 0&&n.flex!==null&&(w.flex=n.flex),C.get()!==void 0&&(w.gap=C.get()),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,rest:m,Component:h,resolvedOrientation:v,resolvedWrap:b,resolvedGap:S,mergedStyle:w}}));return l(i=>{let o=s(),c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=p(M,{...j,className:T(`rue-flex`,n.className),style:I,"data-rue-orientation":N.get(),children:n.children});r(()=>d(e,o,c))}),o})},M=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],N=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],P=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],F=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
${i}
)`),a.push(`export default ${e}`),a.join(`

`)},I=`const MetricCard = ({ eyebrow, value, note }) => (
  <div className="min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5">
    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">
      {eyebrow}
    </div>
    <div className="mt-3 text-3xl font-semibold leading-none">{value}</div>
    <div className="mt-2 text-sm leading-6 text-base-content/70">{note}</div>
  </div>
)`,L=`const alignmentShowcases = [
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
]`,R=`const wrapTags = [
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
]`,z=`const workspaceNavItems = ['Overview', 'Deployments', 'Signals', 'Audit', 'Members']`,B=F({componentName:`FlexMetricsDemo`,helpers:[I],body:`  <Flex gap="middle" wrap>
    <MetricCard eyebrow="ARR" value="¥ 4.2M" note="较上周新增 11.8%，续费健康。" />
    <MetricCard eyebrow="Active Rooms" value="128" note="8 个房间处于重点观察，已自动提优先级。" />
    <MetricCard eyebrow="Feedback" value="94%" note="工单满意度稳定在 90% 以上，主要集中于移动端。" />
  </Flex>`}),V=F({componentName:`FlexVerticalDemo`,body:`  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
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
  </div>`}),H=F({componentName:`FlexAlignmentDemo`,helpers:[L],body:`  <div className="grid gap-4 lg:grid-cols-2">
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
  </div>`}),U=F({componentName:`FlexGapDemo`,body:`  <div className="space-y-5">
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
  </div>`}),W=F({componentName:`FlexWrapDemo`,helpers:[R],body:`  <div className="grid gap-6 xl:grid-cols-2">
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
  </div>`}),G=F({componentName:`FlexWorkspaceDemo`,helpers:[z],body:`  <Flex
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
  </Flex>`}),K=n=>l(i=>{let o=m(`div`,i);h(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=m(`div`,o);a(o,c),h(c,`flex flex-wrap items-start justify-between gap-3`);let f=m(`div`,c);a(c,f);let g=m(`h2`,f);a(f,g),h(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=e(`rue:slot:anchor`);a(g,_),t(()=>{let e=n.title;r(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);a(f,v),t(()=>{let i=n.summary?l(()=>{let i=s(),o=m(`p`,i);a(i,o),h(o,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return a(o,c),t(()=>{let e=n.summary;r(()=>d(e,o,c))}),i}):``;r(()=>d(i,f,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,o,y))});let b=e(`rue:slot:anchor`);return a(o,b),t(()=>{let i=n.tab.value===`preview`?n.preview():l(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:n.code,title:`完整可复制示例`});r(()=>d(e,i,o))}),i});r(()=>d(i,o,b))}),o}),q=n=>l(i=>{let c=m(`div`,i);h(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=m(`table`,c);a(c,f),h(f,`table table-zebra`);let p=m(`thead`,f);a(f,p);let g=m(`tr`,p);a(p,g);let _=m(`th`,g);a(g,_),a(_,u(`属性`));let y=m(`th`,g);a(g,y),a(y,u(`说明`));let b=m(`th`,g);a(g,b),a(b,u(`类型`));let x=m(`th`,g);a(g,x),a(x,u(`默认值`));let S=m(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,u,f)=>{d(l(()=>{let i=s(),c=m(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=m(`td`,c);a(c,l);let u=m(`code`,l);a(l,u);let f=e(`rue:slot:anchor`);a(u,f),t(()=>{let e=n.prop;r(()=>d(e,u,f))});let p=m(`td`,c);a(c,p);let h=e(`rue:slot:anchor`);a(p,h),t(()=>{let e=n.description;r(()=>d(e,p,h))});let g=m(`td`,c);a(c,g);let _=m(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>d(e,_,v))});let y=m(`td`,c);a(c,y);let b=m(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>d(e,b,x))}),i}),i,c)}})}),c}),J=n=>l(i=>{let o=m(`div`,i);h(o,`min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let s=m(`div`,o);a(o,s),h(s,`text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let l=e(`rue:slot:anchor`);a(s,l),t(()=>{let e=n.eyebrow;r(()=>d(e,s,l))});let u=m(`div`,o);a(o,u),h(u,`mt-3 text-3xl font-semibold leading-none`);let p=f(u);a(u,p),t(()=>{c(p,n.value)});let g=m(`div`,o);a(o,g),h(g,`mt-2 text-sm leading-6 text-base-content/70`);let _=e(`rue:slot:anchor`);return a(g,_),t(()=>{let e=n.note;r(()=>d(e,g,_))}),o}),Y=()=>{let{tabs:c}=_(`useSetup:0:0`,()=>i(()=>({tabs:{basic:_(`ref:1:0`,()=>n(`preview`)),vertical:_(`ref:1:1`,()=>n(`preview`)),alignment:_(`ref:1:2`,()=>n(`preview`)),gap:_(`ref:1:3`,()=>n(`preview`)),wrap:_(`ref:1:4`,()=>n(`preview`)),dashboard:_(`ref:1:5`,()=>n(`preview`))}})));return l(n=>{let i=s(),f=e(`rue:component:anchor`);return a(i,f),d(p(C,{children:l(()=>{let n=s(),i=m(`div`,n);a(n,i),h(i,`max-w-none prose prose-sm md:prose-base`);let l=m(`h1`,i);a(i,l),a(l,u(`Flex 弹性布局`));let f=m(`p`,i);a(i,f),h(f,`text-sm mt-3 mb-3`),a(f,u(`Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，继续保留`));let g=m(`code`,f);a(f,g),a(g,u(`className`)),a(f,u(`与`));let _=m(`code`,f);a(f,_),a(_,u(`style`)),a(f,u(`的直接组合方式，同时补齐更完整的 的方向、对齐、换行、间距与伸缩能力。`));let v=m(`p`,i);a(i,v),h(v,`text-sm mt-0 mb-4 text-base-content/70`),a(v,u(`JSX 代码标签现在展示完整 demo 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。`));let x=m(`div`,i);a(i,x),h(x,`text-sm flex flex-wrap gap-4`);let S=m(`a`,x);a(x,S),o(S,`href`,`https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout`),o(S,`target`,`_blank`),a(S,u(`查看 Flexbox 规范`));let C=m(`h2`,i);a(i,C),a(C,u(`何时使用`));let w=m(`ul`,i);a(i,w);let T=m(`li`,w);a(w,T),a(T,u(`需要一组块级元素在横向、纵向、换行和间距之间快速切换。`));let E=m(`li`,w);a(w,E),a(E,u(`希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。`));let D=m(`li`,w);a(w,D),a(D,u(`需要保留 Rue 的轻量组合方式，同时使用更语义化的布局 API。`));let O=e(`rue:component:anchor`);a(i,O),t(()=>{let e=p(K,{title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:c.basic,preview:()=>b(`div`,{className:`card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm`,children:b(`div`,{className:`card-body gap-6`,children:y(j,{gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:[b(J,{eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`}),b(J,{eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`}),b(J,{eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`})]})})}),code:B});r(()=>d(e,i,O))});let k=e(`rue:component:anchor`);a(i,k),t(()=>{let e=p(K,{title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:c.vertical,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]`,children:[y(j,{vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Release train`}),b(`div`,{className:`text-2xl font-semibold`,children:`v0.0.39`}),b(`div`,{className:`text-sm leading-6 text-base-content/70`,children:`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`}),y(j,{gap:10,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-success`,children:`build green`}),b(`span`,{className:`badge badge-soft badge-info`,children:`docs synced`}),b(`span`,{className:`badge badge-soft badge-warning`,children:`2 follow-ups`})]})]}),y(j,{as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:[b(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Preview`}),b(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Inspect`}),b(`button`,{className:`btn btn-primary btn-sm rounded-full`,children:`Publish`})]})]})}),code:V});r(()=>d(e,i,k))});let A=e(`rue:component:anchor`);a(i,A),t(()=>{let e=p(K,{title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也兼容更贴近 CSS 的原生值。`,tab:c.alignment,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4 lg:grid-cols-2`,children:M.map(e=>y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:e.title}),y(j,{justify:e.justify,align:e.align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:[b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`,children:`A`}),b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`,children:`B`}),b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`,children:`C`})]})]},e.key))})}),code:H});r(()=>d(e,i,A))});let F=e(`rue:component:anchor`);a(i,F),t(()=>{let e=p(K,{title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:c.gap,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body space-y-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="small"`}),y(j,{gap:`small`,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-neutral`,children:`small`}),b(`span`,{className:`badge badge-soft badge-primary`,children:`compact`}),b(`span`,{className:`badge badge-soft badge-info`,children:`toolbar`}),b(`span`,{className:`badge badge-soft badge-success`,children:`token`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="middle"`}),y(j,{gap:`middle`,wrap:!0,children:[b(`span`,{className:`badge badge-outline`,children:`middle`}),b(`span`,{className:`badge badge-outline`,children:`roomy`}),b(`span`,{className:`badge badge-outline`,children:`default`}),b(`span`,{className:`badge badge-outline`,children:`balanced`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="large"`}),y(j,{gap:`large`,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-secondary`,children:`large`}),b(`span`,{className:`badge badge-soft badge-warning`,children:`editorial`}),b(`span`,{className:`badge badge-soft badge-accent`,children:`airy`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="12px 24px"`}),b(j,{gap:`12px 24px`,wrap:!0,children:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].map(e=>b(`div`,{className:`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`,children:e},e))})]})]})}),code:U});r(()=>d(e,i,F))});let I=e(`rue:component:anchor`);a(i,I),t(()=>{let e=p(K,{title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:c.wrap,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 xl:grid-cols-2`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap`}),b(j,{wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:N.map(e=>b(`button`,{className:`btn btn-sm btn-ghost rounded-full border border-base-300/80`,children:e},e))})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap="wrap-reverse"`}),b(j,{wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:N.map(e=>b(`span`,{className:`badge badge-lg badge-soft badge-primary`,children:e},e+`-reverse`))})]})]})}),code:W});r(()=>d(e,i,I))});let L=e(`rue:component:anchor`);a(i,L),t(()=>{let e=p(K,{title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:c.dashboard,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(j,{gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:[y(`aside`,{className:`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Studio`}),b(j,{vertical:!0,gap:`small`,className:`mt-5`,children:[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`].map(e=>b(`button`,{className:`btn btn-sm justify-start ${e===`Signals`?`btn-primary`:`btn-ghost`}`,children:e},e))})]}),y(j,{vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:[y(j,{justify:`between`,align:`center`,wrap:!0,gap:`small`,children:[y(`div`,{children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`,children:`Live workspace`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`Signals board`})]}),y(j,{gap:`small`,wrap:!0,children:[b(`button`,{className:`btn btn-sm btn-ghost`,children:`History`}),b(`button`,{className:`btn btn-sm btn-ghost`,children:`Share`}),b(`button`,{className:`btn btn-sm btn-primary`,children:`Create signal`})]})]}),y(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Incident pulse`}),b(`div`,{className:`mt-4 text-4xl font-semibold`,children:`07`}),b(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`当前处于活跃处理状态的事故数，比昨天下降 3 起。`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Response SLA`}),b(`div`,{className:`mt-4 text-4xl font-semibold`,children:`11m`}),b(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`过去 24 小时平均首次响应时间，已经回到目标区间内。`})]})]}),y(j,{justify:`end`,gap:`small`,wrap:!0,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Dismiss`}),b(`button`,{className:`btn btn-outline btn-sm`,children:`Save view`}),b(`button`,{className:`btn btn-primary btn-sm`,children:`Apply changes`})]})]})]})})}),code:G});r(()=>d(e,i,L))});let R=m(`h2`,i);a(i,R),a(R,u(`API`));let z=e(`rue:component:anchor`);return a(i,z),t(()=>{let e=p(q,{rows:P});r(()=>d(e,i,z))}),n})}),i,f),i})};export{Y as default};