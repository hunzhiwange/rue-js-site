import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as y,i as b}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as x}from"./Code-4SUSUwRg.js";import{t as S}from"./tabs-Duzh3URW.js";import{r as C}from"./SidebarPlaygroundDesign-EU389JDE.js";var w={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},T=(e,t)=>t?`${e} ${t}`:e,E=(e,t)=>e||(t?`vertical`:`horizontal`),D=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},O=e=>{if(!(e==null||e===``))return typeof e==`number`?`${e}px`:e in w?w[e]:e},k=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},A=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},j=t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:s,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:f,__rue_rest_omit_5:h,__rue_rest_omit_6:v,__rue_rest_omit_7:y,__rue_rest_omit_8:b,__rue_rest_omit_9:x,__rue_rest_omit_10:S,__rue_rest_omit_11:C,__rue_rest_omit_12:w,rest:j,Component:M,resolvedOrientation:N,resolvedWrap:P,resolvedGap:F,mergedStyle:I}=_(`useSetup:0:0`,()=>o(()=>{let{as:e,component:n,vertical:i,orientation:a,inline:o,wrap:s,justify:c,align:l,flex:u,gap:d,className:f,style:p,children:m,...h}=t,g=t.component??t.as??`div`,v=_(`computed:1:0`,()=>r(()=>E(t.orientation,t.vertical))),y=v,b=_(`computed:1:1`,()=>r(()=>D(t.wrap))),x=b,S=_(`computed:1:2`,()=>r(()=>O(t.gap))),C=S,w={...t.style,display:t.inline?`inline-flex`:`flex`,flexDirection:y.get()===`vertical`?`column`:`row`,alignItems:A(t.align,y.get())};return x.get()!==void 0&&(w.flexWrap=x.get()),t.justify!==void 0&&(w.justifyContent=k(t.justify)),t.flex!==void 0&&t.flex!==null&&(w.flex=t.flex),C.get()!==void 0&&(w.gap=C.get()),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,rest:h,Component:g,resolvedOrientation:v,resolvedWrap:b,resolvedGap:S,mergedStyle:w}}));return c(r=>{let i=m(),o=a(`rue:component:anchor`);return n(i,o),g(()=>{let n=p(M,{...j,className:T(`rue-flex`,t.className),style:I,"data-rue-orientation":N.get(),children:t.children});e(()=>d(n,i,o))}),i})},M=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],N=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],P=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],F=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
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
  </Flex>`}),K=t=>c(r=>{let o=u(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=u(`div`,o);n(o,s),i(s,`flex flex-wrap items-start justify-between gap-3`);let l=u(`div`,s);n(s,l);let h=u(`h2`,l);n(l,h),i(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(h,f(`# `));let _=a(`rue:slot:anchor`);n(h,_),g(()=>{let n=t.title;e(()=>d(n,h,_))});let v=a(`rue:slot:anchor`);n(l,v),g(()=>{let r=t.summary?c(()=>{let r=m(),o=u(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),g(()=>{let n=t.summary;e(()=>d(n,o,s))}),r}):``;e(()=>d(r,l,v))});let y=a(`rue:component:anchor`);n(o,y),g(()=>{let n=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>d(n,o,y))});let b=a(`rue:slot:anchor`);return n(o,b),g(()=>{let r=t.tab.value===`preview`?t.preview():c(()=>{let r=m(),i=a(`rue:component:anchor`);return n(r,i),g(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:t.code,title:`完整可复制示例`});e(()=>d(n,r,i))}),r});e(()=>d(r,o,b))}),o}),q=t=>c(r=>{let o=u(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,o);n(o,s),i(s,`table table-zebra`);let p=u(`thead`,s);n(s,p);let h=u(`tr`,p);n(p,h);let _=u(`th`,h);n(h,_),n(_,f(`属性`));let y=u(`th`,h);n(h,y),n(y,f(`说明`));let b=u(`th`,h);n(h,b),n(b,f(`类型`));let x=u(`th`,h);n(h,x),n(x,f(`默认值`));let S=u(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return g(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{d(c(()=>{let r=m(),i=u(`tr`,r);n(r,i),g(()=>{l(i,`key`,String(t.prop))});let o=u(`td`,i);n(i,o);let s=u(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),g(()=>{let n=t.description;e(()=>d(n,f,p))});let h=u(`td`,i);n(i,h);let _=u(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),g(()=>{let n=t.type;e(()=>d(n,_,v))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),g(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),o}),J=t=>c(r=>{let o=u(`div`,r);i(o,`min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let c=u(`div`,o);n(o,c),i(c,`text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let l=a(`rue:slot:anchor`);n(c,l),g(()=>{let n=t.eyebrow;e(()=>d(n,c,l))});let f=u(`div`,o);n(o,f),i(f,`mt-3 text-3xl font-semibold leading-none`);let p=s(f);n(f,p),g(()=>{h(p,t.value)});let m=u(`div`,o);n(o,m),i(m,`mt-2 text-sm leading-6 text-base-content/70`);let _=a(`rue:slot:anchor`);return n(m,_),g(()=>{let n=t.note;e(()=>d(n,m,_))}),o}),Y=()=>{let{tabs:r}=_(`useSetup:0:0`,()=>o(()=>({tabs:{basic:_(`ref:1:0`,()=>t(`preview`)),vertical:_(`ref:1:1`,()=>t(`preview`)),alignment:_(`ref:1:2`,()=>t(`preview`)),gap:_(`ref:1:3`,()=>t(`preview`)),wrap:_(`ref:1:4`,()=>t(`preview`)),dashboard:_(`ref:1:5`,()=>t(`preview`))}})));return c(t=>{let o=m(),s=a(`rue:component:anchor`);return n(o,s),d(p(C,{children:c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let s=u(`h1`,o);n(o,s),n(s,f(`Flex 弹性布局`));let c=u(`p`,o);n(o,c),i(c,`text-sm mt-3 mb-3`),n(c,f(`Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，展示`));let h=u(`code`,c);n(c,h),n(h,f(`className`)),n(c,f(`与`));let _=u(`code`,c);n(c,_),n(_,f(`style`)),n(c,f(`的直接组合方式，同时补充更完整的 的方向、对齐、换行、间距与伸缩能力。`));let v=u(`p`,o);n(o,v),i(v,`text-sm mt-0 mb-4 text-base-content/70`),n(v,f(`JSX 代码标签现在展示完整示例 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。`));let x=u(`div`,o);n(o,x),i(x,`text-sm flex flex-wrap gap-4`);let S=u(`a`,x);n(x,S),l(S,`href`,`https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout`),l(S,`target`,`_blank`),n(S,f(`查看 Flexbox 规范`));let C=u(`h2`,o);n(o,C),n(C,f(`何时使用`));let w=u(`ul`,o);n(o,w);let T=u(`li`,w);n(w,T),n(T,f(`需要一组块级元素在横向、纵向、换行和间距之间快速切换。`));let E=u(`li`,w);n(w,E),n(E,f(`希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。`));let D=u(`li`,w);n(w,D),n(D,f(`需要使用 Rue 的轻量组合方式，同时使用更语义化的布局 API。`));let O=a(`rue:component:anchor`);n(o,O),g(()=>{let t=p(K,{title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:r.basic,preview:()=>b(`div`,{className:`card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm`,children:b(`div`,{className:`card-body gap-6`,children:y(j,{gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:[b(J,{eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`}),b(J,{eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`}),b(J,{eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`})]})})}),code:B});e(()=>d(t,o,O))});let k=a(`rue:component:anchor`);n(o,k),g(()=>{let t=p(K,{title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:r.vertical,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]`,children:[y(j,{vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Release train`}),b(`div`,{className:`text-2xl font-semibold`,children:`v0.0.39`}),b(`div`,{className:`text-sm leading-6 text-base-content/70`,children:`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`}),y(j,{gap:10,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-success`,children:`build green`}),b(`span`,{className:`badge badge-soft badge-info`,children:`docs synced`}),b(`span`,{className:`badge badge-soft badge-warning`,children:`2 follow-ups`})]})]}),y(j,{as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:[b(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Preview`}),b(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Inspect`}),b(`button`,{className:`btn btn-primary btn-sm rounded-full`,children:`Publish`})]})]})}),code:V});e(()=>d(t,o,k))});let A=a(`rue:component:anchor`);n(o,A),g(()=>{let t=p(K,{title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也支持更贴近 CSS 的原生值。`,tab:r.alignment,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4 lg:grid-cols-2`,children:M.map(e=>y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:e.title}),y(j,{justify:e.justify,align:e.align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:[b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`,children:`A`}),b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`,children:`B`}),b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`,children:`C`})]})]},e.key))})}),code:H});e(()=>d(t,o,A))});let F=a(`rue:component:anchor`);n(o,F),g(()=>{let t=p(K,{title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:r.gap,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body space-y-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="small"`}),y(j,{gap:`small`,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-neutral`,children:`small`}),b(`span`,{className:`badge badge-soft badge-primary`,children:`compact`}),b(`span`,{className:`badge badge-soft badge-info`,children:`toolbar`}),b(`span`,{className:`badge badge-soft badge-success`,children:`token`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="middle"`}),y(j,{gap:`middle`,wrap:!0,children:[b(`span`,{className:`badge badge-outline`,children:`middle`}),b(`span`,{className:`badge badge-outline`,children:`roomy`}),b(`span`,{className:`badge badge-outline`,children:`default`}),b(`span`,{className:`badge badge-outline`,children:`balanced`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="large"`}),y(j,{gap:`large`,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-secondary`,children:`large`}),b(`span`,{className:`badge badge-soft badge-warning`,children:`editorial`}),b(`span`,{className:`badge badge-soft badge-accent`,children:`airy`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="12px 24px"`}),b(j,{gap:`12px 24px`,wrap:!0,children:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].map(e=>b(`div`,{className:`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`,children:e},e))})]})]})}),code:U});e(()=>d(t,o,F))});let I=a(`rue:component:anchor`);n(o,I),g(()=>{let t=p(K,{title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:r.wrap,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 xl:grid-cols-2`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap`}),b(j,{wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:N.map(e=>b(`button`,{className:`btn btn-sm btn-ghost rounded-full border border-base-300/80`,children:e},e))})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap="wrap-reverse"`}),b(j,{wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:N.map(e=>b(`span`,{className:`badge badge-lg badge-soft badge-primary`,children:e},e+`-reverse`))})]})]})}),code:W});e(()=>d(t,o,I))});let L=a(`rue:component:anchor`);n(o,L),g(()=>{let t=p(K,{title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:r.dashboard,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(j,{gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:[y(`aside`,{className:`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Studio`}),b(j,{vertical:!0,gap:`small`,className:`mt-5`,children:[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`].map(e=>b(`button`,{className:`btn btn-sm justify-start ${e===`Signals`?`btn-primary`:`btn-ghost`}`,children:e},e))})]}),y(j,{vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:[y(j,{justify:`between`,align:`center`,wrap:!0,gap:`small`,children:[y(`div`,{children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`,children:`Live workspace`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`Signals board`})]}),y(j,{gap:`small`,wrap:!0,children:[b(`button`,{className:`btn btn-sm btn-ghost`,children:`History`}),b(`button`,{className:`btn btn-sm btn-ghost`,children:`Share`}),b(`button`,{className:`btn btn-sm btn-primary`,children:`Create signal`})]})]}),y(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Incident pulse`}),b(`div`,{className:`mt-4 text-4xl font-semibold`,children:`07`}),b(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`当前处于活跃处理状态的事故数，比昨天下降 3 起。`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Response SLA`}),b(`div`,{className:`mt-4 text-4xl font-semibold`,children:`11m`}),b(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`过去 24 小时平均首次响应时间，已经回到目标区间内。`})]})]}),y(j,{justify:`end`,gap:`small`,wrap:!0,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Dismiss`}),b(`button`,{className:`btn btn-outline btn-sm`,children:`Save view`}),b(`button`,{className:`btn btn-primary btn-sm`,children:`Apply changes`})]})]})]})})}),code:G});e(()=>d(t,o,L))});let R=u(`h2`,o);n(o,R),n(R,f(`API`));let z=a(`rue:component:anchor`);return n(o,z),g(()=>{let t=p(q,{rows:P});e(()=>d(t,o,z))}),t})}),o,s),o})};export{Y as default};