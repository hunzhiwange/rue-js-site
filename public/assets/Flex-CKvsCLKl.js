import{$ as e,B as t,C as n,Dt as r,G as i,H as a,K as o,U as s,W as c,Z as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{n as b,t as x}from"./src-BLzF0BqW.js";import{n as S}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as C}from"./tabs-BOxm6iIN.js";var w={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},T=(e,t)=>t?`${e} ${t}`:e,E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null?[]:[e],D=(e,t)=>e||(t?`vertical`:`horizontal`),O=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},k=e=>{if(!(e==null||e===``))return typeof e==`number`?`${e}px`:e in w?w[e]:e},A=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},j=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},M=({as:e,component:t,vertical:r,orientation:i,inline:a,wrap:o,justify:s,align:c,flex:l,gap:u,className:d,style:f,children:p,...m})=>{let h=t??e??`div`,g=D(i,r),_=O(o),v=k(u),y=E(p),b={...f,display:a?`inline-flex`:`flex`,flexDirection:g===`vertical`?`column`:`row`,alignItems:j(c,g)};return _!==void 0&&(b.flexWrap=_),s!==void 0&&(b.justifyContent=A(s)),l!=null&&(b.flex=l),v!==void 0&&(b.gap=v),n(h,{...m,className:T(`rue-flex`,d),style:b,"data-rue-orientation":g},...y)},N=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],P=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],F=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],I=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
${i}
)`),a.push(`export default ${e}`),a.join(`

`)},L=`const MetricCard = ({ eyebrow, value, note }) => (
  <div className="min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5">
    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45">
      {eyebrow}
    </div>
    <div className="mt-3 text-3xl font-semibold leading-none">{value}</div>
    <div className="mt-2 text-sm leading-6 text-base-content/70">{note}</div>
  </div>
)`,R=`const alignmentShowcases = [
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
]`,z=`const wrapTags = [
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
]`,B=`const workspaceNavItems = ['Overview', 'Deployments', 'Signals', 'Audit', 'Members']`,V=I({componentName:`FlexMetricsDemo`,helpers:[L],body:`  <Flex gap="middle" wrap>
    <MetricCard eyebrow="ARR" value="¥ 4.2M" note="较上周新增 11.8%，续费健康。" />
    <MetricCard eyebrow="Active Rooms" value="128" note="8 个房间处于重点观察，已自动提优先级。" />
    <MetricCard eyebrow="Feedback" value="94%" note="工单满意度稳定在 90% 以上，主要集中于移动端。" />
  </Flex>`}),H=I({componentName:`FlexVerticalDemo`,body:`  <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]">
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
  </div>`}),U=I({componentName:`FlexAlignmentDemo`,helpers:[R],body:`  <div className="grid gap-4 lg:grid-cols-2">
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
  </div>`}),W=I({componentName:`FlexGapDemo`,body:`  <div className="space-y-5">
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
  </div>`}),G=I({componentName:`FlexWrapDemo`,helpers:[z],body:`  <div className="grid gap-6 xl:grid-cols-2">
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
  </div>`}),K=I({componentName:`FlexWorkspaceDemo`,helpers:[B],body:`  <Flex
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
  </Flex>`}),q=n=>f(o=>{let l=c(`div`,o);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=c(`div`,l);t(l,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=c(`div`,u);t(u,d);let h=c(`h2`,d);t(d,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,i(`# `));let _=a(`rue:slot:anchor`);t(h,_),r(()=>{let e=n.title;g(()=>p(e,h,_))});let v=a(`rue:slot:anchor`);t(d,v),r(()=>{let i=n.summary?f(()=>{let i=s(),o=c(`p`,i);t(i,o),e(o,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return t(o,l),r(()=>{let e=n.summary;g(()=>p(e,o,l))}),i}):``;g(()=>p(i,d,v))});let b=a(`rue:component:anchor`);t(l,b),r(()=>{let e=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});g(()=>p(e,l,b))});let x=a(`rue:slot:anchor`);return t(l,x),r(()=>{let e=n.tab.value===`preview`?n.preview():f(()=>{let e=s(),i=a(`rue:component:anchor`);return t(e,i),r(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:n.code,title:`完整可复制示例`});g(()=>p(t,e,i))}),e});g(()=>p(e,l,x))}),l}),J=n=>f(o=>{let u=c(`div`,o);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=c(`table`,u);t(u,d),e(d,`table table-zebra`);let m=c(`thead`,d);t(d,m);let h=c(`tr`,m);t(m,h);let _=c(`th`,h);t(h,_),t(_,i(`属性`));let y=c(`th`,h);t(h,y),t(y,i(`说明`));let b=c(`th`,h);t(h,b),t(b,i(`类型`));let x=c(`th`,h);t(h,x),t(x,i(`默认值`));let S=c(`tbody`,d);t(d,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,o,u)=>{p(f(()=>{let n=s(),i=c(`tr`,n);t(n,i),r(()=>{l(i,`key`,String(e.prop))});let o=c(`td`,i);t(i,o);let u=c(`code`,o);t(o,u);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=c(`td`,i);t(i,f);let m=a(`rue:slot:anchor`);t(f,m),r(()=>{let t=e.description;g(()=>p(t,f,m))});let h=c(`td`,i);t(i,h);let _=c(`code`,h);t(h,_);let v=a(`rue:slot:anchor`);t(_,v),r(()=>{let t=e.type;g(()=>p(t,_,v))});let y=c(`td`,i);t(i,y);let b=c(`code`,y);t(y,b);let x=a(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),n}),n,i)}})}),u}),Y=n=>f(i=>{let s=c(`div`,i);e(s,`min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let l=c(`div`,s);t(s,l),e(l,`text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let d=a(`rue:slot:anchor`);t(l,d),r(()=>{let e=n.eyebrow;g(()=>p(e,l,d))});let f=c(`div`,s);t(s,f),e(f,`mt-3 text-3xl font-semibold leading-none`);let m=o(f);t(f,m),r(()=>{u(m,n.value)});let h=c(`div`,s);t(s,h),e(h,`mt-2 text-sm leading-6 text-base-content/70`);let _=a(`rue:slot:anchor`);return t(h,_),r(()=>{let e=n.note;g(()=>p(e,h,_))}),s}),X=()=>{let{tabs:n}=_(`useSetup:0:0`,()=>h(()=>({tabs:{basic:_(`ref:1:0`,()=>d(`preview`)),vertical:_(`ref:1:1`,()=>d(`preview`)),alignment:_(`ref:1:2`,()=>d(`preview`)),gap:_(`ref:1:3`,()=>d(`preview`)),wrap:_(`ref:1:4`,()=>d(`preview`)),dashboard:_(`ref:1:5`,()=>d(`preview`))}})));return f(o=>{let u=s(),d=a(`rue:component:anchor`);return t(u,d),p(m(S,{children:f(()=>{let o=s(),u=c(`div`,o);t(o,u),e(u,`max-w-none prose prose-sm md:prose-base`);let d=c(`h1`,u);t(u,d),t(d,i(`Flex 弹性布局`));let f=c(`p`,u);t(u,f),e(f,`text-sm mt-3 mb-3`),t(f,i(`Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，继续保留`));let h=c(`code`,f);t(f,h),t(h,i(`className`)),t(f,i(`与`));let _=c(`code`,f);t(f,_),t(_,i(`style`)),t(f,i(`的直接组合方式，同时补齐更完整的 的方向、对齐、换行、间距与伸缩能力。`));let v=c(`p`,u);t(u,v),e(v,`text-sm mt-0 mb-4 text-base-content/70`),t(v,i(`JSX 代码标签现在展示完整 demo 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。`));let y=c(`div`,u);t(u,y),e(y,`text-sm flex flex-wrap gap-4`);let S=c(`a`,y);t(y,S),l(S,`href`,`https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout`),l(S,`target`,`_blank`),t(S,i(`查看 Flexbox 规范`));let C=c(`h2`,u);t(u,C),t(C,i(`何时使用`));let w=c(`ul`,u);t(u,w);let T=c(`li`,w);t(w,T),t(T,i(`需要一组块级元素在横向、纵向、换行和间距之间快速切换。`));let E=c(`li`,w);t(w,E),t(E,i(`希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。`));let D=c(`li`,w);t(w,D),t(D,i(`需要保留 Rue 的轻量组合方式，同时使用更语义化的布局 API。`));let O=a(`rue:component:anchor`);t(u,O),r(()=>{let e=m(q,{title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:n.basic,preview:()=>x(`div`,{className:`card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm`,children:x(`div`,{className:`card-body gap-6`,children:b(M,{gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:[x(Y,{eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`}),x(Y,{eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`}),x(Y,{eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`})]})})}),code:V});g(()=>p(e,u,O))});let k=a(`rue:component:anchor`);t(u,k),r(()=>{let e=m(q,{title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:n.vertical,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]`,children:[b(M,{vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:[x(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Release train`}),x(`div`,{className:`text-2xl font-semibold`,children:`v0.0.39`}),x(`div`,{className:`text-sm leading-6 text-base-content/70`,children:`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`}),b(M,{gap:10,wrap:!0,children:[x(`span`,{className:`badge badge-soft badge-success`,children:`build green`}),x(`span`,{className:`badge badge-soft badge-info`,children:`docs synced`}),x(`span`,{className:`badge badge-soft badge-warning`,children:`2 follow-ups`})]})]}),b(M,{as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:[x(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Preview`}),x(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Inspect`}),x(`button`,{className:`btn btn-primary btn-sm rounded-full`,children:`Publish`})]})]})}),code:H});g(()=>p(e,u,k))});let A=a(`rue:component:anchor`);t(u,A),r(()=>{let e=m(q,{title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也兼容更贴近 CSS 的原生值。`,tab:n.alignment,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body grid gap-4 lg:grid-cols-2`,children:N.map(e=>b(`div`,{className:`space-y-3`,children:[x(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:e.title}),b(M,{justify:e.justify,align:e.align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:[x(`div`,{className:`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`,children:`A`}),x(`div`,{className:`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`,children:`B`}),x(`div`,{className:`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`,children:`C`})]})]},e.key))})}),code:U});g(()=>p(e,u,A))});let j=a(`rue:component:anchor`);t(u,j),r(()=>{let e=m(q,{title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:n.gap,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body space-y-5`,children:[b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="small"`}),b(M,{gap:`small`,wrap:!0,children:[x(`span`,{className:`badge badge-soft badge-neutral`,children:`small`}),x(`span`,{className:`badge badge-soft badge-primary`,children:`compact`}),x(`span`,{className:`badge badge-soft badge-info`,children:`toolbar`}),x(`span`,{className:`badge badge-soft badge-success`,children:`token`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="middle"`}),b(M,{gap:`middle`,wrap:!0,children:[x(`span`,{className:`badge badge-outline`,children:`middle`}),x(`span`,{className:`badge badge-outline`,children:`roomy`}),x(`span`,{className:`badge badge-outline`,children:`default`}),x(`span`,{className:`badge badge-outline`,children:`balanced`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="large"`}),b(M,{gap:`large`,wrap:!0,children:[x(`span`,{className:`badge badge-soft badge-secondary`,children:`large`}),x(`span`,{className:`badge badge-soft badge-warning`,children:`editorial`}),x(`span`,{className:`badge badge-soft badge-accent`,children:`airy`})]})]}),b(`div`,{children:[x(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="12px 24px"`}),x(M,{gap:`12px 24px`,wrap:!0,children:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].map(e=>x(`div`,{className:`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`,children:e},e))})]})]})}),code:W});g(()=>p(e,u,j))});let I=a(`rue:component:anchor`);t(u,I),r(()=>{let e=m(q,{title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:n.wrap,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 xl:grid-cols-2`,children:[b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap`}),x(M,{wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:P.map(e=>x(`button`,{className:`btn btn-sm btn-ghost rounded-full border border-base-300/80`,children:e},e))})]}),b(`div`,{children:[x(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap="wrap-reverse"`}),x(M,{wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:P.map(e=>x(`span`,{className:`badge badge-lg badge-soft badge-primary`,children:e},e+`-reverse`))})]})]})}),code:G});g(()=>p(e,u,I))});let L=a(`rue:component:anchor`);t(u,L),r(()=>{let e=m(q,{title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:n.dashboard,preview:()=>x(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:x(`div`,{className:`card-body`,children:b(M,{gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:[b(`aside`,{className:`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`,children:[x(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Studio`}),x(M,{vertical:!0,gap:`small`,className:`mt-5`,children:[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`].map(e=>x(`button`,{className:`btn btn-sm justify-start ${e===`Signals`?`btn-primary`:`btn-ghost`}`,children:e},e))})]}),b(M,{vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:[b(M,{justify:`between`,align:`center`,wrap:!0,gap:`small`,children:[b(`div`,{children:[x(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`,children:`Live workspace`}),x(`div`,{className:`mt-2 text-2xl font-semibold`,children:`Signals board`})]}),b(M,{gap:`small`,wrap:!0,children:[x(`button`,{className:`btn btn-sm btn-ghost`,children:`History`}),x(`button`,{className:`btn btn-sm btn-ghost`,children:`Share`}),x(`button`,{className:`btn btn-sm btn-primary`,children:`Create signal`})]})]}),b(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Incident pulse`}),x(`div`,{className:`mt-4 text-4xl font-semibold`,children:`07`}),x(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`当前处于活跃处理状态的事故数，比昨天下降 3 起。`})]}),b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[x(`div`,{className:`text-sm font-semibold`,children:`Response SLA`}),x(`div`,{className:`mt-4 text-4xl font-semibold`,children:`11m`}),x(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`过去 24 小时平均首次响应时间，已经回到目标区间内。`})]})]}),b(M,{justify:`end`,gap:`small`,wrap:!0,children:[x(`button`,{className:`btn btn-ghost btn-sm`,children:`Dismiss`}),x(`button`,{className:`btn btn-outline btn-sm`,children:`Save view`}),x(`button`,{className:`btn btn-primary btn-sm`,children:`Apply changes`})]})]})]})})}),code:K});g(()=>p(e,u,L))});let R=c(`h2`,u);t(u,R),t(R,i(`API`));let z=a(`rue:component:anchor`);return t(u,z),r(()=>{let e=m(J,{rows:F});g(()=>p(e,u,z))}),o})}),u,d),u})};export{X as default};