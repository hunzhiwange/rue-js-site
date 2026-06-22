import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,t as p,tn as m,tt as h,wt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as y,o as b}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as x}from"./Code-C5NjdoiC.js";import{t as S}from"./tabs-C4UF43sZ.js";import{r as C}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var w={small:`8px`,middle:`16px`,medium:`16px`,large:`24px`},T=(e,t)=>t?`${e} ${t}`:e,E=(e,t)=>e||(t?`vertical`:`horizontal`),D=e=>{if(e!==void 0)return e===!0?`wrap`:e===!1?`nowrap`:e},O=e=>{if(!(e==null||e===``))return typeof e==`number`?`${e}px`:e in w?w[e]:e},k=e=>{switch(e){case`start`:return`flex-start`;case`end`:return`flex-end`;case`between`:return`space-between`;case`around`:return`space-around`;case`evenly`:return`space-evenly`;default:return e}},A=(e,t)=>{if(e===void 0)return t===`vertical`?`stretch`:`flex-start`;switch(e){case`start`:case`top`:return`flex-start`;case`end`:case`bottom`:return`flex-end`;case`middle`:return`center`;default:return e}},j=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:o,__rue_rest_omit_4:d,__rue_rest_omit_5:f,__rue_rest_omit_6:v,__rue_rest_omit_7:y,__rue_rest_omit_8:b,__rue_rest_omit_9:x,__rue_rest_omit_10:S,__rue_rest_omit_11:C,__rue_rest_omit_12:w,rest:j,Component:M,resolvedOrientation:N,resolvedWrap:P,resolvedGap:F,mergedStyle:I}=_(`useSetup:0:0`,()=>u(()=>{let{as:e,component:t,vertical:r,orientation:i,inline:a,wrap:o,justify:s,align:c,flex:l,gap:u,className:d,style:f,children:p,...m}=n,h=n.component??n.as??`div`,v=_(`computed:1:0`,()=>g(()=>E(n.orientation,n.vertical))),y=v,b=_(`computed:1:1`,()=>g(()=>D(n.wrap))),x=b,S=_(`computed:1:2`,()=>g(()=>O(n.gap))),C=S,w={...n.style,display:n.inline?`inline-flex`:`flex`,flexDirection:y.get()===`vertical`?`column`:`row`,alignItems:A(n.align,y.get())};return x.get()!==void 0&&(w.flexWrap=x.get()),n.justify!==void 0&&(w.justifyContent=k(n.justify)),n.flex!==void 0&&n.flex!==null&&(w.flex=n.flex),C.get()!==void 0&&(w.gap=C.get()),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,rest:m,Component:h,resolvedOrientation:v,resolvedWrap:b,resolvedGap:S,mergedStyle:w}}));return s(r=>{let i=c(),a=h(`rue:component:anchor`);return e(i,a),t(()=>{let e=p(M,{...j,className:T(`rue-flex`,n.className),style:I,"data-rue-orientation":N.get(),children:n.children});m(()=>l(e,i,a))}),i})},M=[{key:`between-center`,title:`justify="between" + align="center"`,justify:`between`,align:`center`},{key:`around-top`,title:`justify="around" + align="top"`,justify:`around`,align:`top`},{key:`evenly-bottom`,title:`justify="evenly" + align="bottom"`,justify:`evenly`,align:`bottom`},{key:`center-stretch`,title:`justify="center" + align="stretch"`,justify:`center`,align:`stretch`}],N=[`Realtime Ops`,`Inbox Zero`,`Streaming`,`Design Review`,`Release Notes`,`Workspace AI`,`Latency`,`Pinned`,`Experiment`,`Billing`,`Team Sync`,`Roadmap`],P=[{prop:`as`,description:`Rue 风格的根节点别名，可直接声明 section、nav、ul 等语义容器。`,type:`any`,defaultValue:`'div'`},{prop:`component`,description:`与 as 类似的根节点声明方式；优先级高于 as。`,type:`any`,defaultValue:`-`},{prop:`vertical`,description:`是否切换为纵向主轴，相当于 flex-direction: column。`,type:`boolean`,defaultValue:`false`},{prop:`orientation`,description:`显式指定主轴方向；传入时会覆盖 vertical。`,type:`'horizontal' | 'vertical'`,defaultValue:`'horizontal'`},{prop:`inline`,description:`把容器切换为 inline-flex，适合行内工具条或标签组。`,type:`boolean`,defaultValue:`false`},{prop:`wrap`,description:`控制是否换行，也支持 wrap-reverse 等原生 CSS 值。`,type:`boolean | 'nowrap' | 'wrap' | 'wrap-reverse'`,defaultValue:`'nowrap'`},{prop:`justify`,description:`设置主轴对齐，支持 between/around/evenly 等语义别名。`,type:`string`,defaultValue:`-`},{prop:`align`,description:`设置交叉轴对齐，支持 top/middle/bottom 等语义别名。`,type:`string`,defaultValue:`horizontal: flex-start / vertical: stretch`},{prop:`gap`,description:`设置子元素间距，支持 small、middle、large 与 number/string。`,type:`'small' | 'middle' | 'medium' | 'large' | number | string`,defaultValue:`-`},{prop:`flex`,description:`设置当前 Flex 容器自身在父 Flex 中的伸缩规则。`,type:`number | string`,defaultValue:`-`},{prop:`className`,description:`继续叠加 Rue / Tailwind 的圆角、边框、背景、尺寸等样式。`,type:`string`,defaultValue:`-`},{prop:`style`,description:`补充原生样式；适合表达 minWidth、backdropFilter 等细节。`,type:`Record<string, any>`,defaultValue:`-`}],F=({componentName:e=`FlexDemo`,designImports:t=[`Flex`],rueImports:n=[],helpers:r=[],body:i})=>{let a=[];return n.length>0&&a.push(`import { ${n.join(`, `)} } from '@rue-js/rue'`),t.length>0&&a.push(`import { ${t.join(`, `)} } from '@rue-js/design'`),r.length>0&&a.push(...r),a.push(`const ${e} = () => (
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
  </Flex>`}),K=n=>s(r=>{let i=f(`div`,r);d(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=f(`div`,i);e(i,a),d(a,`flex flex-wrap items-start justify-between gap-3`);let u=f(`div`,a);e(a,u);let g=f(`h2`,u);e(u,g),d(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(g,o(`# `));let _=h(`rue:slot:anchor`);e(g,_),t(()=>{let e=n.title;m(()=>l(e,g,_))});let v=h(`rue:slot:anchor`);e(u,v),t(()=>{let r=n.summary?s(()=>{let r=c(),i=f(`p`,r);e(r,i),d(i,`m-0 text-sm opacity-70`);let a=h(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;m(()=>l(e,i,a))}),r}):``;m(()=>l(r,u,v))});let y=h(`rue:component:anchor`);e(i,y),t(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});m(()=>l(e,i,y))});let b=h(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.tab.value===`preview`?n.preview():s(()=>{let r=c(),i=h(`rue:component:anchor`);return e(r,i),t(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:n.code,title:`完整可复制示例`});m(()=>l(e,r,i))}),r});m(()=>l(r,i,b))}),i}),q=n=>s(r=>{let i=f(`div`,r);d(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=f(`table`,i);e(i,u),d(u,`table table-zebra`);let p=f(`thead`,u);e(u,p);let g=f(`tr`,p);e(p,g);let _=f(`th`,g);e(g,_),e(_,o(`属性`));let y=f(`th`,g);e(g,y),e(y,o(`说明`));let b=f(`th`,g);e(g,b),e(b,o(`类型`));let x=f(`th`,g);e(g,x),e(x,o(`默认值`));let S=f(`tbody`,u);e(u,S);let C=h(`rue:list:start`),w=h(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,u)=>{l(s(()=>{let r=c(),i=f(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=f(`td`,i);e(i,o);let s=f(`code`,o);e(o,s);let u=h(`rue:slot:anchor`);e(s,u),t(()=>{let e=n.prop;m(()=>l(e,s,u))});let d=f(`td`,i);e(i,d);let p=h(`rue:slot:anchor`);e(d,p),t(()=>{let e=n.description;m(()=>l(e,d,p))});let g=f(`td`,i);e(i,g);let _=f(`code`,g);e(g,_);let v=h(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;m(()=>l(e,_,v))});let y=f(`td`,i);e(i,y);let b=f(`code`,y);e(y,b);let x=h(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;m(()=>l(e,b,x))}),r}),r,i)}})}),i}),J=n=>s(a=>{let o=f(`div`,a);d(o,`min-w-[180px] flex-1 rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`);let s=f(`div`,o);e(o,s),d(s,`text-[11px] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let c=h(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.eyebrow;m(()=>l(e,s,c))});let u=f(`div`,o);e(o,u),d(u,`mt-3 text-3xl font-semibold leading-none`);let p=r(u);e(u,p),t(()=>{i(p,n.value)});let g=f(`div`,o);e(o,g),d(g,`mt-2 text-sm leading-6 text-base-content/70`);let _=h(`rue:slot:anchor`);return e(g,_),t(()=>{let e=n.note;m(()=>l(e,g,_))}),o}),Y=()=>{let{tabs:r}=_(`useSetup:0:0`,()=>u(()=>({tabs:{basic:_(`ref:1:0`,()=>n(`preview`)),vertical:_(`ref:1:1`,()=>n(`preview`)),alignment:_(`ref:1:2`,()=>n(`preview`)),gap:_(`ref:1:3`,()=>n(`preview`)),wrap:_(`ref:1:4`,()=>n(`preview`)),dashboard:_(`ref:1:5`,()=>n(`preview`))}})));return s(n=>{let i=c(),u=h(`rue:component:anchor`);return e(i,u),l(p(C,{children:s(()=>{let n=c(),i=f(`div`,n);e(n,i),d(i,`max-w-none prose prose-sm md:prose-base`);let s=f(`h1`,i);e(i,s),e(s,o(`Flex 弹性布局`));let u=f(`p`,i);e(i,u),d(u,`text-sm mt-3 mb-3`),e(u,o(`Flex 为 Rue Design 补上一层语义化的弹性布局容器。它不为子元素额外包裹节点，展示`));let g=f(`code`,u);e(u,g),e(g,o(`className`)),e(u,o(`与`));let _=f(`code`,u);e(u,_),e(_,o(`style`)),e(u,o(`的直接组合方式，同时补充更完整的 的方向、对齐、换行、间距与伸缩能力。`));let v=f(`p`,i);e(i,v),d(v,`text-sm mt-0 mb-4 text-base-content/70`),e(v,o(`JSX 代码标签现在展示完整示例 源码，去掉内部变换标记，复制后可以直接作为 Rue 组件起步。`));let x=f(`div`,i);e(i,x),d(x,`text-sm flex flex-wrap gap-4`);let S=f(`a`,x);e(x,S),a(S,`href`,`https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_flexible_box_layout`),a(S,`target`,`_blank`),e(S,o(`查看 Flexbox 规范`));let C=f(`h2`,i);e(i,C),e(C,o(`何时使用`));let w=f(`ul`,i);e(i,w);let T=f(`li`,w);e(w,T),e(T,o(`需要一组块级元素在横向、纵向、换行和间距之间快速切换。`));let E=f(`li`,w);e(w,E),e(E,o(`希望直接控制 justify、align 和 flex，而不是在业务里手写整串原子类。`));let D=f(`li`,w);e(w,D),e(D,o(`需要使用 Rue 的轻量组合方式，同时使用更语义化的布局 API。`));let O=h(`rue:component:anchor`);e(i,O),t(()=>{let e=p(K,{title:`基础横向布局`,summary:`默认是横向主轴和顶对齐，适合做概览卡片、摘要指标和信息排布。`,tab:r.basic,preview:()=>y(`div`,{className:`card overflow-hidden border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/70 shadow-sm`,children:y(`div`,{className:`card-body gap-6`,children:b(j,{gap:`middle`,wrap:!0,"data-testid":`flex-basic`,children:[y(J,{eyebrow:`ARR`,value:`¥ 4.2M`,note:`较上周新增 11.8%，续费健康。`}),y(J,{eyebrow:`Active Rooms`,value:`128`,note:`8 个房间处于重点观察，已自动提优先级。`}),y(J,{eyebrow:`Feedback`,value:`94%`,note:`工单满意度稳定在 90% 以上，主要集中于移动端。`})]})})}),code:B});m(()=>l(e,i,O))});let k=h(`rue:component:anchor`);e(i,k),t(()=>{let e=p(K,{title:`纵向布局、inline 与语义根节点`,summary:`vertical 负责切换主轴，inline 适合紧凑工具条，as / component 用于语义化容器。`,tab:r.vertical,preview:()=>y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]`,children:[b(j,{vertical:!0,gap:`small`,className:`rounded-2xl border border-base-300 bg-base-200/60 p-5`,"data-testid":`flex-vertical-stack`,children:[y(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Release train`}),y(`div`,{className:`text-2xl font-semibold`,children:`v0.0.39`}),y(`div`,{className:`text-sm leading-6 text-base-content/70`,children:`回归通过 248 项，文档、组件库和运行时构建已全部排队完成。`}),b(j,{gap:10,wrap:!0,children:[y(`span`,{className:`badge badge-soft badge-success`,children:`build green`}),y(`span`,{className:`badge badge-soft badge-info`,children:`docs synced`}),y(`span`,{className:`badge badge-soft badge-warning`,children:`2 follow-ups`})]})]}),b(j,{as:`nav`,inline:!0,gap:10,align:`center`,className:`rounded-full border border-base-300 bg-base-100 px-3 py-2 shadow-sm`,"aria-label":`Editor quick actions`,children:[y(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Preview`}),y(`button`,{className:`btn btn-ghost btn-sm rounded-full`,children:`Inspect`}),y(`button`,{className:`btn btn-primary btn-sm rounded-full`,children:`Publish`})]})]})}),code:V});m(()=>l(e,i,k))});let A=h(`rue:component:anchor`);e(i,A),t(()=>{let e=p(K,{title:`对齐方式组合`,summary:`justify 和 align 支持常用语义，也支持更贴近 CSS 的原生值。`,tab:r.alignment,preview:()=>y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body grid gap-4 lg:grid-cols-2`,children:M.map(e=>b(`div`,{className:`space-y-3`,children:[y(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:e.title}),b(j,{justify:e.justify,align:e.align,gap:`small`,className:`h-32 rounded-2xl border border-base-300 bg-gradient-to-br from-base-100 to-base-200/70 p-4`,children:[y(`div`,{className:`grid w-20 place-content-center rounded-xl bg-primary/90 px-4 py-2 text-primary-content shadow-sm`,children:`A`}),y(`div`,{className:`grid w-20 place-content-center rounded-xl bg-secondary/90 px-4 py-4 text-secondary-content shadow-sm`,children:`B`}),y(`div`,{className:`grid w-20 place-content-center rounded-xl bg-accent/90 px-4 py-3 text-accent-content shadow-sm`,children:`C`})]})]},e.key))})}),code:H});m(()=>l(e,i,A))});let F=h(`rue:component:anchor`);e(i,F),t(()=>{let e=p(K,{title:`间距预设与自定义 gap`,summary:`预设值适合组件库级别的一致节奏，自定义值适合更精细的密度控制。`,tab:r.gap,preview:()=>y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body space-y-5`,children:[b(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="small"`}),b(j,{gap:`small`,wrap:!0,children:[y(`span`,{className:`badge badge-soft badge-neutral`,children:`small`}),y(`span`,{className:`badge badge-soft badge-primary`,children:`compact`}),y(`span`,{className:`badge badge-soft badge-info`,children:`toolbar`}),y(`span`,{className:`badge badge-soft badge-success`,children:`token`})]})]}),b(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="middle"`}),b(j,{gap:`middle`,wrap:!0,children:[y(`span`,{className:`badge badge-outline`,children:`middle`}),y(`span`,{className:`badge badge-outline`,children:`roomy`}),y(`span`,{className:`badge badge-outline`,children:`default`}),y(`span`,{className:`badge badge-outline`,children:`balanced`})]})]}),b(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="large"`}),b(j,{gap:`large`,wrap:!0,children:[y(`span`,{className:`badge badge-soft badge-secondary`,children:`large`}),y(`span`,{className:`badge badge-soft badge-warning`,children:`editorial`}),y(`span`,{className:`badge badge-soft badge-accent`,children:`airy`})]})]}),b(`div`,{children:[y(`div`,{className:`mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`gap="12px 24px"`}),y(j,{gap:`12px 24px`,wrap:!0,children:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`].map(e=>y(`div`,{className:`rounded-xl border border-base-300 bg-base-200/70 px-4 py-2 text-sm font-medium`,children:e},e))})]})]})}),code:U});m(()=>l(e,i,F))});let I=h(`rue:component:anchor`);e(i,I),t(()=>{let e=p(K,{title:`自动换行与 wrap-reverse`,summary:`Flex 不额外包裹子项，适合标签墙、过滤器组和多操作按钮区。`,tab:r.wrap,preview:()=>y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:b(`div`,{className:`card-body grid gap-6 xl:grid-cols-2`,children:[b(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap`}),y(j,{wrap:!0,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:N.map(e=>y(`button`,{className:`btn btn-sm btn-ghost rounded-full border border-base-300/80`,children:e},e))})]}),b(`div`,{children:[y(`div`,{className:`mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-base-content/55`,children:`wrap="wrap-reverse"`}),y(j,{wrap:`wrap-reverse`,gap:`small`,className:`max-w-xl rounded-2xl border border-base-300 bg-base-200/60 p-4`,children:N.map(e=>y(`span`,{className:`badge badge-lg badge-soft badge-primary`,children:e},e+`-reverse`))})]})]})}),code:W});m(()=>l(e,i,I))});let L=h(`rue:component:anchor`);e(i,L),t(()=>{let e=p(K,{title:`组合布局`,summary:`Flex 适合做工作台框架、工具栏和内容区骨架；flex 属性让容器本身参与父级伸缩。`,tab:r.dashboard,preview:()=>y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:b(j,{gap:0,align:`stretch`,className:`overflow-hidden rounded-[28px] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/80`,children:[b(`aside`,{className:`w-60 shrink-0 border-r border-base-300 bg-base-200/70 p-5`,children:[y(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/50`,children:`Studio`}),y(j,{vertical:!0,gap:`small`,className:`mt-5`,children:[`Overview`,`Deployments`,`Signals`,`Audit`,`Members`].map(e=>y(`button`,{className:`btn btn-sm justify-start ${e===`Signals`?`btn-primary`:`btn-ghost`}`,children:e},e))})]}),b(j,{vertical:!0,gap:`middle`,flex:`1 1 0%`,className:`min-w-0 p-5`,children:[b(j,{justify:`between`,align:`center`,wrap:!0,gap:`small`,children:[b(`div`,{children:[y(`div`,{className:`text-xs font-semibold uppercase tracking-[0.2em] text-base-content/50`,children:`Live workspace`}),y(`div`,{className:`mt-2 text-2xl font-semibold`,children:`Signals board`})]}),b(j,{gap:`small`,wrap:!0,children:[y(`button`,{className:`btn btn-sm btn-ghost`,children:`History`}),y(`button`,{className:`btn btn-sm btn-ghost`,children:`Share`}),y(`button`,{className:`btn btn-sm btn-primary`,children:`Create signal`})]})]}),b(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[y(`div`,{className:`text-sm font-semibold`,children:`Incident pulse`}),y(`div`,{className:`mt-4 text-4xl font-semibold`,children:`07`}),y(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`当前处于活跃处理状态的事故数，比昨天下降 3 起。`})]}),b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100/90 p-5 shadow-sm shadow-base-content/5`,children:[y(`div`,{className:`text-sm font-semibold`,children:`Response SLA`}),y(`div`,{className:`mt-4 text-4xl font-semibold`,children:`11m`}),y(`div`,{className:`mt-2 text-sm leading-6 text-base-content/70`,children:`过去 24 小时平均首次响应时间，已经回到目标区间内。`})]})]}),b(j,{justify:`end`,gap:`small`,wrap:!0,children:[y(`button`,{className:`btn btn-ghost btn-sm`,children:`Dismiss`}),y(`button`,{className:`btn btn-outline btn-sm`,children:`Save view`}),y(`button`,{className:`btn btn-primary btn-sm`,children:`Apply changes`})]})]})]})})}),code:G});m(()=>l(e,i,L))});let R=f(`h2`,i);e(i,R),e(R,o(`API`));let z=h(`rue:component:anchor`);return e(i,z),t(()=>{let e=p(q,{rows:P});m(()=>l(e,i,z))}),n})}),i,u),i})};export{Y as default};