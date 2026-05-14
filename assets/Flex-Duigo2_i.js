import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m,v as h,z as g}from"./vapor-runtime-Dfq7aA8z.js";import{a as _,n as v}from"./vapor-helpers-vapor-CpxsbTjB.js";import{n as y,t as b}from"./src-BaNG2YQR.js";import{n as x}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as S}from"./Code-CLTo4rRM.js";import{t as C}from"./tabs-CxVJfyAw.js";var w={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},T=(e,t)=>t?`${e} ${t}`:e,E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):e==null?[]:[e],D=(e,t)=>e||(t?`vertical`:`horizontal`),O=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},k=e=>{if(!(e==null||e===``))return typeof e==`number`?`${e}px`:e in w?w[e]:e},A=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},j=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},M=({as:e,component:t,vertical:n,orientation:r,inline:i,wrap:a,justify:o,align:s,flex:c,gap:l,className:u,style:d,children:f,...p})=>{let m=t??e??`div`,g=D(r,n),_=O(a),v=k(l),y=E(f),b={...d??{},display:i?`inline-flex`:`flex`,flexDirection:g===`vertical`?`column`:`row`,alignItems:j(s,g)};return _!==void 0&&(b.flexWrap=_),o!==void 0&&(b.justifyContent=A(o)),c!=null&&(b.flex=c),v!==void 0&&(b.gap=v),h(m,{...p,className:T(`rue-flex`,u),style:b,"data-rue-orientation":g},...y)},N=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],P=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],F=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 antd Flex 对齐的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],I=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
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
  </Flex>`}),q=a=>l(s=>{let d=r(`div`,s);n(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,d);i(d,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,f);i(f,h);let g=r(`h2`,h);i(h,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,o(`# `));let _=e(`rue:slot:anchor`);i(g,_),c(()=>{let e=a.title;m(()=>u(e,g,_))});let v=e(`rue:slot:anchor`);i(h,v),c(()=>{let o=a.summary?l(()=>{let o=t(),s=r(`p`,o);i(o,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),c(()=>{let e=a.summary;m(()=>u(e,s,l))}),o}):``;m(()=>u(o,h,v))});let y=e(`rue:component:anchor`);i(d,y),c(()=>{let e=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});m(()=>u(e,d,y))});let b=e(`rue:slot:anchor`);return i(d,b),c(()=>{let n=a.tab.value===`preview`?a.preview():l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(S,{className:`mt-2`,lang:`tsx`,code:a.code,title:`完整可复制示例`});m(()=>u(e,n,r))}),n});m(()=>u(n,d,b))}),d}),J=a=>l(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let h=r(`thead`,p);i(p,h);let g=r(`tr`,h);i(h,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,d,f)=>{u(l(()=>{let a=t(),o=r(`tr`,a);i(a,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);i(o,l);let d=r(`code`,l);i(l,d);let f=e(`rue:slot:anchor`);i(d,f),c(()=>{let e=n.prop;m(()=>u(e,d,f))});let p=r(`td`,o);i(o,p);let h=e(`rue:slot:anchor`);i(p,h),c(()=>{let e=n.description;m(()=>u(e,p,h))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),c(()=>{let e=n.type;m(()=>u(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;m(()=>u(e,b,x))}),a}),a,o)}})}),f}),Y=t=>l(o=>{let s=r(`div`,o);n(s,`min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let l=r(`div`,s);i(s,l),n(l,`text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let d=e(`rue:slot:anchor`);i(l,d),c(()=>{let e=t.eyebrow;m(()=>u(e,l,d))});let f=r(`div`,s);i(s,f),n(f,`mt-3 text-3xl font-semibold leading-none`);let p=g(f);i(f,p),c(()=>{a(p,t.value)});let h=r(`div`,s);i(s,h),n(h,`mt-2 text-sm leading-6 text-base-content/70`);let _=e(`rue:slot:anchor`);return i(h,_),c(()=>{let e=t.note;m(()=>u(e,h,_))}),s}),X=()=>{let{tabs:a}=_(`useSetup:0:0`,()=>d(()=>({tabs:{basic:_(`ref:1:0`,()=>f(`preview`)),vertical:_(`ref:1:1`,()=>f(`preview`)),alignment:_(`ref:1:2`,()=>f(`preview`)),gap:_(`ref:1:3`,()=>f(`preview`)),wrap:_(`ref:1:4`,()=>f(`preview`)),dashboard:_(`ref:1:5`,()=>f(`preview`))}})));return l(d=>{let f=t(),h=e(`rue:component:anchor`);return i(f,h),u(p(x,{children:l(()=>{let l=t(),d=r(`div`,l);i(l,d),n(d,`max-w-none prose prose-sm md:prose-base`);let f=r(`h1`,d);i(d,f),i(f,o(`Flex 弹性布局`));let h=r(`p`,d);i(d,h),n(h,`text-sm mt-3 mb-3`),i(h,o(`Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，继续保留`));let g=r(`code`,h);i(h,g),i(g,o(`className`)),i(h,o(`与`));let _=r(`code`,h);i(h,_),i(_,o(`style`)),i(h,o(`的直接组合方式，同时补齐接近 antd Flex 的方向、对齐、换行、间距与伸缩能力。`));let v=r(`p`,d);i(d,v),n(v,`text-sm mt-0 mb-4 text-base-content/70`),i(v,o(`JSX 代码标签现在展示完整 demo 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。`));let x=r(`div`,d);i(d,x),n(x,`text-sm flex flex-wrap gap-4`);let S=r(`a`,x);i(x,S),s(S,`href`,`https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout`),s(S,`target`,`_blank`),i(S,o(`查看 Flexbox 规范`));let C=r(`h2`,d);i(d,C),i(C,o(`何时使用`));let w=r(`ul`,d);i(d,w);let T=r(`li`,w);i(w,T),i(T,o(`需要一组块级元素在横向、纵向、换行和间距之间快速切换。`));let E=r(`li`,w);i(w,E),i(E,o(`希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。`));let D=r(`li`,w);i(w,D),i(D,o(`需要保留 Rue 的轻量组合方式，同时使用更语义化的布局 API。`));let O=e(`rue:component:anchor`);i(d,O),c(()=>{let e=p(q,{title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:a.basic,preview:()=>b(`div`,{className:`card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm`,children:b(`div`,{className:`card-body gap-6`,children:y(M,{gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:[b(Y,{eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`}),b(Y,{eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`}),b(Y,{eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`})]})})}),code:V});m(()=>u(e,d,O))});let k=e(`rue:component:anchor`);i(d,k),c(()=>{let e=p(q,{title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:a.vertical,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]`,children:[y(M,{vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Release train`}),b(`div`,{className:`text-2xl font-semibold`,children:`v0.0.39`}),b(`div`,{className:`text-sm leading-6 text-base-content/70`,children:`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`}),y(M,{gap:10,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-success`,children:`build green`}),b(`span`,{className:`badge badge-soft badge-info`,children:`docs synced`}),b(`span`,{className:`badge badge-soft badge-warning`,children:`2 follow-ups`})]})]}),y(M,{as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:[b(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Preview`}),b(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Inspect`}),b(`button`,{className:`btn btn-primary btn-sm rounded-full`,children:`Publish`})]})]})}),code:H});m(()=>u(e,d,k))});let A=e(`rue:component:anchor`);i(d,A),c(()=>{let e=p(q,{title:`对齐方式组合`,summary:`justify 和 align 支持 antd 常用语义，也兼容更贴近 CSS 的原生值。`,tab:a.alignment,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-4 lg:grid-cols-2`,children:N.map(e=>y(`div`,{className:`space-y-3`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:e.title}),y(M,{justify:e.justify,align:e.align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:[b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`,children:`A`}),b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`,children:`B`}),b(`div`,{className:`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`,children:`C`})]})]},e.key))})}),code:U});m(()=>u(e,d,A))});let j=e(`rue:component:anchor`);i(d,j),c(()=>{let e=p(q,{title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:a.gap,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body space-y-5`,children:[y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="small"`}),y(M,{gap:`small`,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-neutral`,children:`small`}),b(`span`,{className:`badge badge-soft badge-primary`,children:`compact`}),b(`span`,{className:`badge badge-soft badge-info`,children:`toolbar`}),b(`span`,{className:`badge badge-soft badge-success`,children:`token`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="middle"`}),y(M,{gap:`middle`,wrap:!0,children:[b(`span`,{className:`badge badge-outline`,children:`middle`}),b(`span`,{className:`badge badge-outline`,children:`roomy`}),b(`span`,{className:`badge badge-outline`,children:`default`}),b(`span`,{className:`badge badge-outline`,children:`balanced`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="large"`}),y(M,{gap:`large`,wrap:!0,children:[b(`span`,{className:`badge badge-soft badge-secondary`,children:`large`}),b(`span`,{className:`badge badge-soft badge-warning`,children:`editorial`}),b(`span`,{className:`badge badge-soft badge-accent`,children:`airy`})]})]}),y(`div`,{children:[b(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="12px 24px"`}),b(M,{gap:`12px 24px`,wrap:!0,children:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].map(e=>b(`div`,{className:`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`,children:e},e))})]})]})}),code:W});m(()=>u(e,d,j))});let I=e(`rue:component:anchor`);i(d,I),c(()=>{let e=p(q,{title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:a.wrap,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-6 xl:grid-cols-2`,children:[y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap`}),b(M,{wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:P.map(e=>b(`button`,{className:`btn btn-sm btn-ghost rounded-full border border-base-300/80`,children:e},e))})]}),y(`div`,{children:[b(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap="wrap-reverse"`}),b(M,{wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:P.map(e=>b(`span`,{className:`badge badge-lg badge-soft badge-primary`,children:e},e+`-reverse`))})]})]})}),code:G});m(()=>u(e,d,I))});let L=e(`rue:component:anchor`);i(d,L),c(()=>{let e=p(q,{title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:a.dashboard,preview:()=>b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body`,children:y(M,{gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:[y(`aside`,{className:`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`,children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Studio`}),b(M,{vertical:!0,gap:`small`,className:`mt-5`,children:[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`].map(e=>b(`button`,{className:`btn btn-sm justify-start ${e===`Signals`?`btn-primary`:`btn-ghost`}`,children:e},e))})]}),y(M,{vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:[y(M,{justify:`between`,align:`center`,wrap:!0,gap:`small`,children:[y(`div`,{children:[b(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`,children:`Live workspace`}),b(`div`,{className:`mt-2 text-2xl font-semibold`,children:`Signals board`})]}),y(M,{gap:`small`,wrap:!0,children:[b(`button`,{className:`btn btn-sm btn-ghost`,children:`History`}),b(`button`,{className:`btn btn-sm btn-ghost`,children:`Share`}),b(`button`,{className:`btn btn-sm btn-primary`,children:`Create signal`})]})]}),y(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Incident pulse`}),b(`div`,{className:`mt-4 text-4xl font-semibold`,children:`07`}),b(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`当前处于活跃处理状态的事故数，比昨天下降 3 起。`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[b(`div`,{className:`text-sm font-semibold`,children:`Response SLA`}),b(`div`,{className:`mt-4 text-4xl font-semibold`,children:`11m`}),b(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`过去 24 小时平均首次响应时间，已经回到目标区间内。`})]})]}),y(M,{justify:`end`,gap:`small`,wrap:!0,children:[b(`button`,{className:`btn btn-ghost btn-sm`,children:`Dismiss`}),b(`button`,{className:`btn btn-outline btn-sm`,children:`Save view`}),b(`button`,{className:`btn btn-primary btn-sm`,children:`Apply changes`})]})]})]})})}),code:K});m(()=>u(e,d,L))});let R=r(`h2`,d);i(d,R),i(R,o(`API`));let z=e(`rue:component:anchor`);return i(d,z),c(()=>{let e=p(J,{rows:F});m(()=>u(e,d,z))}),l})}),f,h),f})};export{X as default};