import{$ as e,Et as t,G as n,H as r,J as i,K as a,T as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-EUvELKQT.js";import{a as _,n as v}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as y,t as b}from"./src-BI4ToZNE.js";import{n as x}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as S}from"./Code-BdVklNCb.js";import{t as C}from"./tabs-Brdd3EMz.js";var w={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},T=(e,t)=>t?`${e} ${t}`:e,E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null?[]:[e],D=(e,t)=>e||(t?`vertical`:`horizontal`),O=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},k=e=>{if(!(e==null||e===``))return typeof e==`number`?`${e}px`:e in w?w[e]:e},A=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},j=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},M=({as:e,component:t,vertical:n,orientation:r,inline:i,wrap:a,justify:s,align:c,flex:l,gap:u,className:d,style:f,children:p,...m})=>{let h=t??e??`div`,g=D(r,n),_=O(a),v=k(u),y=E(p),b={...f,display:i?`inline-flex`:`flex`,flexDirection:g===`vertical`?`column`:`row`,alignItems:j(c,g)};return _!==void 0&&(b.flexWrap=_),s!==void 0&&(b.justifyContent=A(s)),l!=null&&(b.flex=l),v!==void 0&&(b.gap=v),o(h,{...m,className:T(`rue-flex`,d),style:b,"data-rue-orientation":g},...y)},N=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],P=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],F=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],I=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
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
  </Flex>`}),q=e=>l(t=>{let i=a(`div`,t);h(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=a(`div`,i);r(i,o),h(o,`flex flex-wrap items-start justify-between gap-3`);let c=a(`div`,o);r(o,c);let p=a(`h2`,c);r(c,p),h(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(p,f(`# `));let _=s(`rue:slot:anchor`);r(p,_),u(()=>{let t=e.title;g(()=>d(t,p,_))});let v=s(`rue:slot:anchor`);r(c,v),u(()=>{let t=e.summary?l(()=>{let t=n(),i=a(`p`,t);r(t,i),h(i,`m-0 text-sm opacity-70`);let o=s(`rue:slot:anchor`);return r(i,o),u(()=>{let t=e.summary;g(()=>d(t,i,o))}),t}):``;g(()=>d(t,c,v))});let y=s(`rue:component:anchor`);r(i,y),u(()=>{let t=m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});g(()=>d(t,i,y))});let b=s(`rue:slot:anchor`);return r(i,b),u(()=>{let t=e.tab.value===`preview`?e.preview():l(()=>{let t=n(),i=s(`rue:component:anchor`);return r(t,i),u(()=>{let n=m(S,{className:`mt-2`,lang:`tsx`,code:e.code,title:`完整可复制示例`});g(()=>d(n,t,i))}),t});g(()=>d(t,i,b))}),i}),J=t=>l(i=>{let o=a(`div`,i);h(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=a(`table`,o);r(o,c),h(c,`table table-zebra`);let p=a(`thead`,c);r(c,p);let m=a(`tr`,p);r(p,m);let _=a(`th`,m);r(m,_),r(_,f(`属性`));let y=a(`th`,m);r(m,y),r(y,f(`说明`));let b=a(`th`,m);r(m,b),r(b,f(`类型`));let x=a(`th`,m);r(m,x),r(x,f(`默认值`));let S=a(`tbody`,c);r(c,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return u(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,o,c,f)=>{d(l(()=>{let i=n(),o=a(`tr`,i);r(i,o),u(()=>{e(o,`key`,String(t.prop))});let c=a(`td`,o);r(o,c);let l=a(`code`,c);r(c,l);let f=s(`rue:slot:anchor`);r(l,f),u(()=>{let e=t.prop;g(()=>d(e,l,f))});let p=a(`td`,o);r(o,p);let m=s(`rue:slot:anchor`);r(p,m),u(()=>{let e=t.description;g(()=>d(e,p,m))});let h=a(`td`,o);r(o,h);let _=a(`code`,h);r(h,_);let v=s(`rue:slot:anchor`);r(_,v),u(()=>{let e=t.type;g(()=>d(e,_,v))});let y=a(`td`,o);r(o,y);let b=a(`code`,y);r(y,b);let x=s(`rue:slot:anchor`);return r(b,x),u(()=>{let e=t.defaultValue;g(()=>d(e,b,x))}),i}),i,o)}})}),o}),Y=e=>l(t=>{let n=a(`div`,t);h(n,`min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let o=a(`div`,n);r(n,o),h(o,`text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let c=s(`rue:slot:anchor`);r(o,c),u(()=>{let t=e.eyebrow;g(()=>d(t,o,c))});let l=a(`div`,n);r(n,l),h(l,`mt-3 text-3xl font-semibold leading-none`);let f=i(l);r(l,f),u(()=>{p(f,e.value)});let m=a(`div`,n);r(n,m),h(m,`mt-2 text-sm leading-6 text-base-content/70`);let _=s(`rue:slot:anchor`);return r(m,_),u(()=>{let t=e.note;g(()=>d(t,m,_))}),n}),X=()=>{let{tabs:i}=_(`useSetup:0:0`,()=>t(()=>({tabs:{basic:_(`ref:1:0`,()=>c(`preview`)),vertical:_(`ref:1:1`,()=>c(`preview`)),alignment:_(`ref:1:2`,()=>c(`preview`)),gap:_(`ref:1:3`,()=>c(`preview`)),wrap:_(`ref:1:4`,()=>c(`preview`)),dashboard:_(`ref:1:5`,()=>c(`preview`))}})));return l(t=>{let o=n(),c=s(`rue:component:anchor`);return r(o,c),d(m(x,{children:l(()=>{let t=n(),o=a(`div`,t);r(t,o),h(o,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,o);r(o,c),r(c,f(`Flex 弹性布局`));let l=a(`p`,o);r(o,l),h(l,`text-sm mt-3 mb-3`),r(l,f(`Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，继续保留`));let p=a(`code`,l);r(l,p),r(p,f(`className`)),r(l,f(`与`));let _=a(`code`,l);r(l,_),r(_,f(`style`)),r(l,f(`的直接组合方式，同时补齐更完整的 的方向、对齐、换行、间距与伸缩能力。`));let v=a(`p`,o);r(o,v),h(v,`text-sm mt-0 mb-4 text-base-content/70`),r(v,f(`JSX 代码标签现在展示完整 demo 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。`));let x=a(`div`,o);r(o,x),h(x,`text-sm flex flex-wrap gap-4`);let S=a(`a`,x);r(x,S),e(S,`href`,`https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout`),e(S,`target`,`_blank`),r(S,f(`查看 Flexbox 规范`));let C=a(`h2`,o);r(o,C),r(C,f(`何时使用`));let w=a(`ul`,o);r(o,w);let T=a(`li`,w);r(w,T),r(T,f(`需要一组块级元素在横向、纵向、换行和间距之间快速切换。`));let E=a(`li`,w);r(w,E),r(E,f(`希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。`));let D=a(`li`,w);r(w,D),r(D,f(`需要保留 Rue 的轻量组合方式，同时使用更语义化的布局 API。`));let O=s(`rue:component:anchor`);r(o,O),u(()=>{let e=m(q,{title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:i.basic,preview:()=>b(`div`,{className:`card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm`,children:b(`div`,{className:`card-body gap-6`,children:y(M,{gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:[b(Y,{eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`}),b(Y,{eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`}),b(Y,{eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`})]})})}),code:V});g(()=>d(e,o,O))});let k=s(`rue:component:anchor`);r(o,k),u(()=>{let e=m(q,{title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:i.vertical,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]`,children:[y(M,{vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Release train`}),b(`div`,{className:`text-2xl font-semibold`,children:`v0.0.39`}),b(`div`,{className:`text-sm leading-6 text-base-content/70`,children:`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`}),y(M,{gap:10,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-success`,children:`build green`}),b(`span`,{className:`badge badge-soft badge-info`,children:`docs synced`}),b(`span`,{className:`badge badge-soft badge-warning`,children:`2 follow-ups`})]})]}),y(M,{as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:[b(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Preview`}),b(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Inspect`}),b(`button`,{className:`btn btn-primary btn-sm rounded-full`,children:`Publish`})]})]})}),code:H});g(()=>d(e,o,k))});let A=s(`rue:component:anchor`);r(o,A),u(()=>{let e=m(q,{title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也兼容更贴近 CSS 的原生值。`,tab:i.alignment,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4 lg:grid-cols-2`,children:N.map(e=>y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:e.title}),y(M,{justify:e.justify,align:e.align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:[b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`,children:`A`}),b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`,children:`B`}),b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`,children:`C`})]})]},e.key))})}),code:U});g(()=>d(e,o,A))});let j=s(`rue:component:anchor`);r(o,j),u(()=>{let e=m(q,{title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:i.gap,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body space-y-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="small"`}),y(M,{gap:`small`,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-neutral`,children:`small`}),b(`span`,{className:`badge badge-soft badge-primary`,children:`compact`}),b(`span`,{className:`badge badge-soft badge-info`,children:`toolbar`}),b(`span`,{className:`badge badge-soft badge-success`,children:`token`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="middle"`}),y(M,{gap:`middle`,wrap:!0,children:[b(`span`,{className:`badge badge-outline`,children:`middle`}),b(`span`,{className:`badge badge-outline`,children:`roomy`}),b(`span`,{className:`badge badge-outline`,children:`default`}),b(`span`,{className:`badge badge-outline`,children:`balanced`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="large"`}),y(M,{gap:`large`,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-secondary`,children:`large`}),b(`span`,{className:`badge badge-soft badge-warning`,children:`editorial`}),b(`span`,{className:`badge badge-soft badge-accent`,children:`airy`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="12px 24px"`}),b(M,{gap:`12px 24px`,wrap:!0,children:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].map(e=>b(`div`,{className:`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`,children:e},e))})]})]})}),code:W});g(()=>d(e,o,j))});let I=s(`rue:component:anchor`);r(o,I),u(()=>{let e=m(q,{title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:i.wrap,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 xl:grid-cols-2`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap`}),b(M,{wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:P.map(e=>b(`button`,{className:`btn btn-sm btn-ghost rounded-full border border-base-300/80`,children:e},e))})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap="wrap-reverse"`}),b(M,{wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:P.map(e=>b(`span`,{className:`badge badge-lg badge-soft badge-primary`,children:e},e+`-reverse`))})]})]})}),code:G});g(()=>d(e,o,I))});let L=s(`rue:component:anchor`);r(o,L),u(()=>{let e=m(q,{title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:i.dashboard,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:[y(`aside`,{className:`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Studio`}),b(M,{vertical:!0,gap:`small`,className:`mt-5`,children:[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`].map(e=>b(`button`,{className:`btn btn-sm justify-start ${e===`Signals`?`btn-primary`:`btn-ghost`}`,children:e},e))})]}),y(M,{vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:[y(M,{justify:`between`,align:`center`,wrap:!0,gap:`small`,children:[y(`div`,{children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`,children:`Live workspace`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`Signals board`})]}),y(M,{gap:`small`,wrap:!0,children:[b(`button`,{className:`btn btn-sm btn-ghost`,children:`History`}),b(`button`,{className:`btn btn-sm btn-ghost`,children:`Share`}),b(`button`,{className:`btn btn-sm btn-primary`,children:`Create signal`})]})]}),y(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Incident pulse`}),b(`div`,{className:`mt-4 text-4xl font-semibold`,children:`07`}),b(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`当前处于活跃处理状态的事故数，比昨天下降 3 起。`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Response SLA`}),b(`div`,{className:`mt-4 text-4xl font-semibold`,children:`11m`}),b(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`过去 24 小时平均首次响应时间，已经回到目标区间内。`})]})]}),y(M,{justify:`end`,gap:`small`,wrap:!0,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Dismiss`}),b(`button`,{className:`btn btn-outline btn-sm`,children:`Save view`}),b(`button`,{className:`btn btn-primary btn-sm`,children:`Apply changes`})]})]})]})})}),code:K});g(()=>d(e,o,L))});let R=a(`h2`,o);r(o,R),r(R,f(`API`));let z=s(`rue:component:anchor`);return r(o,z),u(()=>{let e=m(J,{rows:F});g(()=>d(e,o,z))}),t})}),o,c),o})};export{X as default};