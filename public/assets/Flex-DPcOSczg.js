import{Cn as e,Ct as t,Lt as n,Mt as r,Tt as i,dt as a,ft as o,ht as s,mt as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{n as b,t as x}from"./src-CCTNpCXV.js";import{t as S}from"./tabs-B1XdBEJF.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var w={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},T=(e,t)=>t?`${e} ${t}`:e,E=(e,t)=>e||(t?`vertical`:`horizontal`),D=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},O=e=>{if(!(e==null||e===``))return typeof e==`number`?`${e}px`:e in w?w[e]:e},k=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},A=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},j=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:s,__rue_rest_omit_3:c,__rue_rest_omit_4:l,__rue_rest_omit_5:u,__rue_rest_omit_6:v,__rue_rest_omit_7:y,__rue_rest_omit_8:b,__rue_rest_omit_9:x,__rue_rest_omit_10:S,__rue_rest_omit_11:C,__rue_rest_omit_12:w,rest:j,Component:M,resolvedOrientation:N,resolvedWrap:P,resolvedGap:F,mergedStyle:I}=_(`useSetup:0:0`,()=>e(()=>{let{as:e,component:r,vertical:i,orientation:a,inline:o,wrap:s,justify:c,align:l,flex:u,gap:d,className:f,style:p,children:m,...h}=t,g=t.component??t.as??`div`,v=_(`computed:1:0`,()=>n(()=>E(t.orientation,t.vertical))),y=v,b=_(`computed:1:1`,()=>n(()=>D(t.wrap))),x=b,S=_(`computed:1:2`,()=>n(()=>O(t.gap))),C=S,w={...t.style,display:t.inline?`inline-flex`:`flex`,flexDirection:y.get()===`vertical`?`column`:`row`,alignItems:A(t.align,y.get())};return x.get()!==void 0&&(w.flexWrap=x.get()),t.justify!==void 0&&(w.justifyContent=k(t.justify)),t.flex!==void 0&&t.flex!==null&&(w.flex=t.flex),C.get()!==void 0&&(w.gap=C.get()),{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,rest:h,Component:g,resolvedOrientation:v,resolvedWrap:b,resolvedGap:S,mergedStyle:w}}));return m(e=>{let n=o(),r=a(`rue:component:anchor`);return d(n,r),f(()=>{let e=g(M,{...j,className:T(`rue-flex`,t.className),style:I,"data-rue-orientation":N.get(),children:t.children});p(()=>h(e,n,r))}),n})},M=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],N=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],P=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],F=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
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
  </Flex>`}),K=e=>m(t=>{let n=u(`div`,t);i(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=u(`div`,n);d(n,r),i(r,`flex flex-wrap items-start justify-between gap-3`);let s=u(`div`,r);d(r,s);let l=u(`h2`,s);d(s,l),i(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(l,c(`# `));let _=a(`rue:slot:anchor`);d(l,_),f(()=>{let t=e.title;p(()=>h(t,l,_))});let v=a(`rue:slot:anchor`);d(s,v),f(()=>{let t=e.summary?m(()=>{let t=o(),n=u(`p`,t);d(t,n),i(n,`m-0 text-sm opacity-70`);let r=a(`rue:slot:anchor`);return d(n,r),f(()=>{let t=e.summary;p(()=>h(t,n,r))}),t}):``;p(()=>h(t,s,v))});let b=a(`rue:component:anchor`);d(n,b),f(()=>{let t=g(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>h(t,n,b))});let x=a(`rue:slot:anchor`);return d(n,x),f(()=>{let t=e.tab.value===`preview`?e.preview():m(()=>{let t=o(),n=a(`rue:component:anchor`);return d(t,n),f(()=>{let r=g(y,{className:`mt-2`,lang:`tsx`,code:e.code,title:`完整可复制示例`});p(()=>h(r,t,n))}),t});p(()=>h(t,n,x))}),n}),q=e=>m(n=>{let r=u(`div`,n);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,r);d(r,s),i(s,`table table-zebra`);let l=u(`thead`,s);d(s,l);let g=u(`tr`,l);d(l,g);let _=u(`th`,g);d(g,_),d(_,c(`属性`));let y=u(`th`,g);d(g,y),d(y,c(`说明`));let b=u(`th`,g);d(g,b),d(b,c(`类型`));let x=u(`th`,g);d(g,x),d(x,c(`默认值`));let S=u(`tbody`,s);d(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,s)=>{h(m(()=>{let n=o(),r=u(`tr`,n);d(n,r),f(()=>{t(r,`key`,String(e.prop))});let i=u(`td`,r);d(r,i);let s=u(`code`,i);d(i,s);let c=a(`rue:slot:anchor`);d(s,c),f(()=>{let t=e.prop;p(()=>h(t,s,c))});let l=u(`td`,r);d(r,l);let m=a(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>h(t,l,m))});let g=u(`td`,r);d(r,g);let _=u(`code`,g);d(g,_);let v=a(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>h(t,_,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=a(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>h(t,b,x))}),n}),n,r)}})}),r}),J=e=>m(t=>{let n=u(`div`,t);i(n,`min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let o=u(`div`,n);d(n,o),i(o,`text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let c=a(`rue:slot:anchor`);d(o,c),f(()=>{let t=e.eyebrow;p(()=>h(t,o,c))});let l=u(`div`,n);d(n,l),i(l,`mt-3 text-3xl font-semibold leading-none`);let m=s(l);d(l,m),f(()=>{r(m,e.value)});let g=u(`div`,n);d(n,g),i(g,`mt-2 text-sm leading-6 text-base-content/70`);let _=a(`rue:slot:anchor`);return d(g,_),f(()=>{let t=e.note;p(()=>h(t,g,_))}),n}),Y=()=>{let{tabs:n}=_(`useSetup:0:0`,()=>e(()=>({tabs:{basic:_(`ref:1:0`,()=>l(`preview`)),vertical:_(`ref:1:1`,()=>l(`preview`)),alignment:_(`ref:1:2`,()=>l(`preview`)),gap:_(`ref:1:3`,()=>l(`preview`)),wrap:_(`ref:1:4`,()=>l(`preview`)),dashboard:_(`ref:1:5`,()=>l(`preview`))}})));return m(e=>{let r=o(),s=a(`rue:component:anchor`);return d(r,s),h(g(C,{children:m(()=>{let e=o(),r=u(`div`,e);d(e,r),i(r,`max-w-none prose prose-sm md:prose-base`);let s=u(`h1`,r);d(r,s),d(s,c(`Flex 弹性布局`));let l=u(`p`,r);d(r,l),i(l,`text-sm mt-3 mb-3`),d(l,c(`Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，展示`));let m=u(`code`,l);d(l,m),d(m,c(`className`)),d(l,c(`与`));let _=u(`code`,l);d(l,_),d(_,c(`style`)),d(l,c(`的直接组合方式，同时补充更完整的 的方向、对齐、换行、间距与伸缩能力。`));let v=u(`p`,r);d(r,v),i(v,`text-sm mt-0 mb-4 text-base-content/70`),d(v,c(`JSX 代码标签现在展示完整示例 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。`));let y=u(`div`,r);d(r,y),i(y,`text-sm flex flex-wrap gap-4`);let S=u(`a`,y);d(y,S),t(S,`href`,`https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout`),t(S,`target`,`_blank`),d(S,c(`查看 Flexbox 规范`));let C=u(`h2`,r);d(r,C),d(C,c(`何时使用`));let w=u(`ul`,r);d(r,w);let T=u(`li`,w);d(w,T),d(T,c(`需要一组块级元素在横向、纵向、换行和间距之间快速切换。`));let E=u(`li`,w);d(w,E),d(E,c(`希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。`));let D=u(`li`,w);d(w,D),d(D,c(`需要使用 Rue 的轻量组合方式，同时使用更语义化的布局 API。`));let O=a(`rue:component:anchor`);d(r,O),f(()=>{let e=g(K,{title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:n.basic,preview:()=>x(`div`,{className:`card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm`,children:x(`div`,{className:`card-body gap-6`,children:b(j,{gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:[x(J,{eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`}),x(J,{eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`}),x(J,{eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`})]})})}),code:B});p(()=>h(e,r,O))});let k=a(`rue:component:anchor`);d(r,k),f(()=>{let e=g(K,{title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:n.vertical,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]`,children:[b(j,{vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:[x(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Release train`}),x(`div`,{className:`text-2xl font-semibold`,children:`v0.0.39`}),x(`div`,{className:`text-sm leading-6 text-base-content/70`,children:`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`}),b(j,{gap:10,wrap:!0,children:[x(`span`,{className:`badge badge-soft badge-success`,children:`build green`}),x(`span`,{className:`badge badge-soft badge-info`,children:`docs synced`}),x(`span`,{className:`badge badge-soft badge-warning`,children:`2 follow-ups`})]})]}),b(j,{as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:[x(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Preview`}),x(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Inspect`}),x(`button`,{className:`btn btn-primary btn-sm rounded-full`,children:`Publish`})]})]})}),code:V});p(()=>h(e,r,k))});let A=a(`rue:component:anchor`);d(r,A),f(()=>{let e=g(K,{title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也支持更贴近 CSS 的原生值。`,tab:n.alignment,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-4 lg:grid-cols-2`,children:M.map(e=>b(`div`,{className:`space-y-3`,children:[x(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:e.title}),b(j,{justify:e.justify,align:e.align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:[x(`div`,{className:`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`,children:`A`}),x(`div`,{className:`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`,children:`B`}),x(`div`,{className:`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`,children:`C`})]})]},e.key))})}),code:H});p(()=>h(e,r,A))});let F=a(`rue:component:anchor`);d(r,F),f(()=>{let e=g(K,{title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:n.gap,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body space-y-5`,children:[b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="small"`}),b(j,{gap:`small`,wrap:!0,children:[x(`span`,{className:`badge badge-soft badge-neutral`,children:`small`}),x(`span`,{className:`badge badge-soft badge-primary`,children:`compact`}),x(`span`,{className:`badge badge-soft badge-info`,children:`toolbar`}),x(`span`,{className:`badge badge-soft badge-success`,children:`token`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="middle"`}),b(j,{gap:`middle`,wrap:!0,children:[x(`span`,{className:`badge badge-outline`,children:`middle`}),x(`span`,{className:`badge badge-outline`,children:`roomy`}),x(`span`,{className:`badge badge-outline`,children:`default`}),x(`span`,{className:`badge badge-outline`,children:`balanced`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="large"`}),b(j,{gap:`large`,wrap:!0,children:[x(`span`,{className:`badge badge-soft badge-secondary`,children:`large`}),x(`span`,{className:`badge badge-soft badge-warning`,children:`editorial`}),x(`span`,{className:`badge badge-soft badge-accent`,children:`airy`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="12px 24px"`}),x(j,{gap:`12px 24px`,wrap:!0,children:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].map(e=>x(`div`,{className:`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`,children:e},e))})]})]})}),code:U});p(()=>h(e,r,F))});let I=a(`rue:component:anchor`);d(r,I),f(()=>{let e=g(K,{title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:n.wrap,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 xl:grid-cols-2`,children:[b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap`}),x(j,{wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:N.map(e=>x(`button`,{className:`btn btn-sm btn-ghost rounded-full border border-base-300/80`,children:e},e))})]}),b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap="wrap-reverse"`}),x(j,{wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:N.map(e=>x(`span`,{className:`badge badge-lg badge-soft badge-primary`,children:e},e+`-reverse`))})]})]})}),code:W});p(()=>h(e,r,I))});let L=a(`rue:component:anchor`);d(r,L),f(()=>{let e=g(K,{title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:n.dashboard,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(j,{gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:[b(`aside`,{className:`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`,children:[x(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Studio`}),x(j,{vertical:!0,gap:`small`,className:`mt-5`,children:[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`].map(e=>x(`button`,{className:`btn btn-sm justify-start ${e===`Signals`?`btn-primary`:`btn-ghost`}`,children:e},e))})]}),b(j,{vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:[b(j,{justify:`between`,align:`center`,wrap:!0,gap:`small`,children:[b(`div`,{children:[x(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`,children:`Live workspace`}),x(`div`,{className:`mt-2 text-2xl font-semibold`,children:`Signals board`})]}),b(j,{gap:`small`,wrap:!0,children:[x(`button`,{className:`btn btn-sm btn-ghost`,children:`History`}),x(`button`,{className:`btn btn-sm btn-ghost`,children:`Share`}),x(`button`,{className:`btn btn-sm btn-primary`,children:`Create signal`})]})]}),b(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Incident pulse`}),x(`div`,{className:`mt-4 text-4xl font-semibold`,children:`07`}),x(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`当前处于活跃处理状态的事故数，比昨天下降 3 起。`})]}),b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Response SLA`}),x(`div`,{className:`mt-4 text-4xl font-semibold`,children:`11m`}),x(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`过去 24 小时平均首次响应时间，已经回到目标区间内。`})]})]}),b(j,{justify:`end`,gap:`small`,wrap:!0,children:[x(`button`,{className:`btn btn-ghost btn-sm`,children:`Dismiss`}),x(`button`,{className:`btn btn-outline btn-sm`,children:`Save view`}),x(`button`,{className:`btn btn-primary btn-sm`,children:`Apply changes`})]})]})]})})}),code:G});p(()=>h(e,r,L))});let R=u(`h2`,r);d(r,R),d(R,c(`API`));let z=a(`rue:component:anchor`);return d(r,z),f(()=>{let e=g(q,{rows:P});p(()=>h(e,r,z))}),e})}),r,s),r})};export{Y as default};