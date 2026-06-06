import{$ as e,Gt as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,c as l,ct as u,et as d,l as f,mt as p,ot as m,r as h,s as g,t as _,tt as v}from"./vapor-runtime-DHPuOjqh.js";import{a as y,n as b,t as x}from"./vapor-helpers-vapor-CJFAWine.js";import{n as S}from"./persistentSidebarPlayground-C_0jw6dq.js";import{n as C}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as w}from"./PreviewBlock-BYaG1RFO.js";var T=t=>f(n=>{let r=e(`div`,n);u(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`,r);o(r,l),u(l,`table table-zebra`);let p=e(`thead`,l);o(l,p);let h=e(`tr`,p);o(p,h);let _=e(`th`,h);o(h,_),o(_,d(`属性`));let v=e(`th`,h);o(h,v),o(v,d(`说明`));let y=e(`th`,h);o(h,y),o(y,d(`类型`));let x=e(`th`,h);o(h,x),o(x,d(`默认值`));let S=e(`tbody`,l);o(l,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return s(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,l,u)=>{g(f(()=>{let n=i(),r=e(`tr`,n);o(n,r),s(()=>{m(r,`key`,String(t.prop))});let l=e(`td`,r);o(r,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=t.prop;a(()=>g(e,u,d))});let f=e(`td`,r);o(r,f);let p=c(`rue:slot:anchor`);o(f,p),s(()=>{let e=t.description;a(()=>g(e,f,p))});let h=e(`td`,r);o(r,h);let _=e(`code`,h);o(h,_);let v=c(`rue:slot:anchor`);o(_,v),s(()=>{let e=t.type;a(()=>g(e,_,v))});let y=e(`td`,r);o(r,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),s(()=>{let e=t.defaultValue;a(()=>g(e,b,x))}),n}),n,r)}})}),r}),E=t=>f(n=>{let r=e(`section`,n);s(()=>{m(r,`id`,String(t.section.id))}),s(()=>{u(r,String(`scroll-mt-28 rounded-[1.6rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)] ${t.dense?`p-5`:`p-6 md:p-7`}`))});let l=e(`div`,r);o(r,l),u(l,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,l);o(l,h);let _=e(`div`,h);o(h,_),u(_,`text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-base-content/45`);let y=c(`rue:slot:anchor`);o(_,y),s(()=>{let e=t.section.eyebrow;a(()=>g(e,_,y))});let x=e(`h3`,h);o(h,x),u(x,`mb-2 mt-2 text-xl font-semibold text-base-content`);let S=c(`rue:slot:anchor`);o(x,S),s(()=>{let e=t.section.title;a(()=>g(e,x,S))});let C=e(`p`,h);o(h,C),u(C,`m-0 max-w-2xl text-sm leading-6 text-base-content/72`);let w=c(`rue:slot:anchor`);o(C,w),s(()=>{let e=t.section.summary;a(()=>g(e,C,w))});let T=e(`div`,l);o(l,T),u(T,`rounded-2xl border border-base-300/70 bg-base-100/80 px-3 py-2 text-right shadow-sm`);let E=e(`div`,T);o(T,E),u(E,`text-[0.68rem] uppercase tracking-[0.18em] text-base-content/45`),o(E,d(`Signal`));let D=e(`div`,T);o(T,D),u(D,`mt-1 text-lg font-semibold text-base-content`);let O=c(`rue:slot:anchor`);o(D,O),s(()=>{let e=t.section.metric;a(()=>g(e,D,O))});let k=e(`div`,r);o(r,k),u(k,`mt-5 flex flex-wrap items-center gap-2`);let A=e(`span`,k);o(k,A),u(A,`badge badge-outline rounded-full`);let j=c(`rue:slot:anchor`);o(A,j),s(()=>{let e=t.section.tag;a(()=>g(e,A,j))});let M=e(`span`,k);o(k,M),u(M,`badge badge-ghost rounded-full`),o(M,d(`Anchor Section`));let N=e(`div`,r);o(r,N),u(N,`mt-5 grid gap-3 md:grid-cols-3`);let P=c(`rue:list:start`),F=c(`rue:list:end`);o(N,P),o(N,F);let I=new Map;return s(()=>{I=b({items:t.section.points||[],getKey:(e,t)=>e,elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,n,r,a,c)=>{g(f(()=>{let n=i(),r=e(`div`,n);o(n,r),s(()=>{m(r,`key`,String(t))}),u(r,`rounded-2xl border border-base-300/65 bg-base-100/75 px-4 py-3 text-sm leading-6 text-base-content/75`);let a=v(r);return o(r,a),s(()=>{p(a,t)}),n}),n,r)}})}),r}),D=[{id:`overview`,eyebrow:`Chapter 01`,title:`项目全景`,summary:`把长文档拆成可扫描的几段之后，Anchor 负责给读者一个稳定的阅读坐标。`,points:[`适合文档、报告、配置中心等长页面。`,`激活态跟随滚动同步更新。`,`保持 Rue 自己的卡片化导航外观。`],metric:`4 blocks`,tag:`Base`},{id:`rhythm`,eyebrow:`Chapter 02`,title:`内容节奏`,summary:`每段都带一组短卡片，方便在 demo 里快速看到滚动命中与视觉反馈。`,points:[`段落标题支持任意 renderable。`,`可以挂描述文字，适合多层说明。`,`active 状态不依赖外部状态管理。`],metric:`Sticky`,tag:`Scroll`},{id:`api`,eyebrow:`Chapter 03`,title:`能力边界`,summary:`Anchor 的核心能力集中在页内导航、滚动定位和高亮控制，避免越权成完整目录树。`,points:["支持 `items` 驱动和自定义容器。","支持 `getCurrentAnchor` 做分组高亮。","可通过 `classNames / styles` 继续定制。"],metric:`API-first`,tag:`Control`}],O=[{id:`brief`,eyebrow:`Module A`,title:`Brief Intake`,summary:`将阅读区域限制在一个滚动面板内，适合右侧固定大纲 + 左侧局部滚动的详情页。`,points:["`getContainer` 指向任意滚动容器。","`targetOffset` 可以和容器内头部高度对齐。",`不需要监听页面外层滚动。`],metric:`Local`,tag:`Container`},{id:`system`,eyebrow:`Module B`,title:`System Draft`,summary:`容器滚动的 active 计算独立于 window，适合 modal、drawer、侧栏等局部视图。`,points:[`点击导航后只滚动局部面板。`,`不会污染页面 hash 路由。`,`可关闭 affix，让导航留在布局流中。`],metric:`Panel`,tag:`Scoped`},{id:`delivery`,eyebrow:`Module C`,title:`Delivery Notes`,summary:`同一套 items 可以同时服务桌面右侧导航和移动端顶部锚点条。`,points:[`适合在复杂后台页中复用。`,`结构清晰时滚动命中更稳定。`,`推荐结合语义化 section id。`],metric:`Stable`,tag:`Reuse`}],k=[{id:`kickoff`,eyebrow:`Flow 01`,title:`Kickoff`,summary:`先建立整体范围，再决定哪些区块要合并成同一个高亮入口。`,points:[`横向模式更适合章节较少的页面。`,`适合和内容页头一起展示。`,`高亮映射可用于把多个子段落归并。`],metric:`Top Bar`,tag:`Horizontal`},{id:`schema`,eyebrow:`Flow 02`,title:`Schema`,summary:`这里开始进入实现细节，补充的 Schema Notes 小节不会单独占一个顶部入口。`,points:["`getCurrentAnchor` 接收滚动命中的原始 href。",`可以把多个实际 section 映射到同一个展示入口。`,`用于简化顶部导航颗粒度。`],metric:`Merged`,tag:`Mapping`},{id:`schema-notes`,eyebrow:`Flow 02B`,title:`Schema Notes`,summary:`这个补充段不出现在顶部导航里，但滚动进入它时仍然沿用 Schema 的高亮。`,points:[`适合把补充说明、FAQ、边界条件并回父级入口。`,`不会额外占一个横向导航位。`,`点击其他可见导航项时，active 仍然命中各自本身。`],metric:`Carry`,tag:`Alias`},{id:`adapter`,eyebrow:`Flow 03`,title:`Adapter`,summary:`第三项保持独立入口，点击后会命中自身，不再被错误归并到前一个导航项。`,points:[`适合承接真正需要独立定位的章节。`,`与上一个补充小节的高亮归并互不冲突。`,`更符合顶部导航的点击预期。`],metric:`Direct`,tag:`Stable`},{id:`handoff`,eyebrow:`Flow 04`,title:`Handoff`,summary:`尾段保持独立高亮，让读者知道自己已经进入交付与收口阶段。`,points:[`横向模式默认只展示单层 items。`,`点击后仍然走同一套滚动逻辑。`,`视觉上更接近标签导航而不是侧栏目录。`],metric:`Final`,tag:`Finish`}],A=[{id:`kickoff`,title:`Kickoff`},{id:`schema`,title:`Schema`},{id:`adapter`,title:`Adapter`},{id:`handoff`,title:`Handoff`}],j=y(`ref:1:0`,()=>r(`preview`)),M=y(`ref:1:1`,()=>r(`preview`)),N=y(`ref:1:2`,()=>r(`preview`)),P=`import { Anchor } from '@rue-js/design'

const sections = [
  { id: 'overview', title: '项目全景', description: '长页面的起始说明' },
  { id: 'rhythm', title: '内容节奏', description: '内容组织与阅读路径' },
  { id: 'api', title: '能力边界', description: '对外 API 与接入建议' },
]

<div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
  <div className="space-y-4">
    {sections.map(section => (
      <section key={section.id} id={section.id} className="scroll-mt-28 rounded-[1.5rem] border border-base-300 bg-base-100 p-6">
        <h3>{section.title}</h3>
        <p>{section.description}</p>
      </section>
    ))}
  </div>

  <Anchor
    offsetTop={24}
    items={sections.map(section => ({
      key: section.id,
      href: '#' + section.id,
      title: section.title,
      description: section.description,
    }))}
  />
</div>`,F=`import { useRef } from '@rue-js/rue'
import { Anchor } from '@rue-js/design'

const panelRef = useRef<HTMLDivElement>()
const sections = [
  { id: 'brief', title: 'Brief Intake' },
  { id: 'system', title: 'System Draft' },
  { id: 'delivery', title: 'Delivery Notes' },
]

<div className="grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]">
  <Anchor
    affix={false}
    targetOffset={20}
    getContainer={() => panelRef.current}
    items={sections.map(section => ({
      key: section.id,
      href: '#' + section.id,
      title: section.title,
    }))}
  />

  <div ref={panelRef} className="h-[28rem] overflow-auto rounded-[1.5rem] border border-base-300 bg-base-100 p-4">
    {sections.map(section => (
      <section key={section.id} id={section.id} className="mb-4 rounded-2xl border border-base-300 bg-base-100 p-6">
        <h3>{section.title}</h3>
      </section>
    ))}
  </div>
</div>`,I=`import { useRef } from '@rue-js/rue'
import { Anchor } from '@rue-js/design'

const panelRef = useRef<HTMLDivElement>()
const navItems = [
  { id: 'kickoff', title: 'Kickoff' },
  { id: 'schema', title: 'Schema' },
  { id: 'adapter', title: 'Adapter' },
  { id: 'handoff', title: 'Handoff' },
]
const contentSections = [
  { id: 'kickoff', title: 'Kickoff' },
  { id: 'schema', title: 'Schema' },
  { id: 'schema-notes', title: 'Schema Notes' },
  { id: 'adapter', title: 'Adapter' },
  { id: 'handoff', title: 'Handoff' },
]

<div className="space-y-4">
  <Anchor
    affix={false}
    direction="horizontal"
    getContainer={() => panelRef.current}
    getCurrentAnchor={href => (href === '#schema-notes' ? '#schema' : href)}
    items={navItems.map(section => ({
      key: section.id,
      href: '#' + section.id,
      title: section.title,
    }))}
  />

  <div ref={panelRef} className="h-[24rem] overflow-auto rounded-[1.5rem] border border-base-300 bg-base-100 p-4">
    {contentSections.map(section => (
      <section key={section.id} id={section.id} className="mb-4 rounded-2xl border border-base-300 bg-base-100 p-6">
        <h3>{section.title}</h3>
      </section>
    ))}
  </div>
</div>`,L=[{prop:`items`,description:`主推荐入口。每项支持 href、title、description、disabled 与 children。`,type:`AnchorItem[]`,defaultValue:`[]`},{prop:`direction`,description:`导航方向，支持 vertical 与 horizontal。`,type:`'vertical' | 'horizontal'`,defaultValue:`vertical`},{prop:`affix / offsetTop`,description:`是否吸附以及吸附偏移，Rue 版本用 sticky 语义实现。`,type:`boolean / number`,defaultValue:`true / 0`},{prop:`getContainer / targetOffset`,description:`指定滚动容器，并控制点击滚动时的目标偏移。`,type:`() => HTMLElement | Window / number`,defaultValue:`window / offsetTop`},{prop:`bounds`,description:`滚动命中的容差，避免边界抖动。`,type:`number`,defaultValue:`5`},{prop:`getCurrentAnchor`,description:`将实际命中的 href 映射成展示高亮 href，适合章节归并。`,type:`(activeLink: string) => string`,defaultValue:`-`},{prop:`onChange / onClick`,description:`分别监听激活项变化和条目点击。`,type:`(href: string) => void / (event, link) => void`,defaultValue:`-`},{prop:`classNames / styles`,description:`对 root、list、item、link、title、description、indicator 进行语义化定制。`,type:`object`,defaultValue:`-`},{prop:`children / Anchor.Link`,description:`保留结构化 children 回退；在 Rue 编译参与模式下，增强滚动高亮请优先使用 items。`,type:`any`,defaultValue:`-`}],R=()=>f(t=>{let n=e(`div`,t);u(n,`grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]`);let r=e(`div`,n);o(n,r),u(r,`space-y-4`);let i=c(`rue:list:start`),d=c(`rue:list:end`);o(r,i),o(r,d);let f=new Map;s(()=>{f=b({items:D||[],getKey:(e,t)=>e.id,elements:f,parent:r,before:d,start:i,renderItem:(e,t,n,r,i)=>{l(_(E,{key:e.id,section:e}),t,n,r)}})});let p=e(`div`,n);o(n,p),u(p,`lg:pl-2`);let m=c(`rue:component:anchor`);return o(p,m),s(()=>{let e=_(S,{offsetTop:24,items:D.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.summary}))});a(()=>g(e,p,m))}),n}),z=()=>{let{panelRef:r}=y(`useSetup:0:0`,()=>n(()=>({panelRef:y(`useRef:1:3`,()=>t())})));return f(t=>{let n=e(`div`,t);u(n,`grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]`);let i=c(`rue:component:anchor`);o(n,i),s(()=>{let e=_(S,{affix:!1,targetOffset:20,getContainer:()=>r.current,items:O.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.tag}))});a(()=>g(e,n,i))});let d=e(`div`,n);o(n,d);let f=x(d,()=>r);h(()=>{f()}),u(d,`h-[30rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`);let p=e(`div`,d);o(d,p),u(p,`space-y-4 pr-1`);let m=c(`rue:list:start`),v=c(`rue:list:end`);o(p,m),o(p,v);let y=new Map;return s(()=>{y=b({items:O||[],getKey:(e,t)=>e.id,elements:y,parent:p,before:v,start:m,renderItem:(e,t,n,r,i)=>{l(_(E,{key:e.id,section:e,dense:!0}),t,n,r)}})}),n})},B=()=>{let{panelRef:r}=y(`useSetup:0:0:dup1`,()=>n(()=>({panelRef:y(`useRef:1:4`,()=>t())})));return f(t=>{let n=e(`div`,t);u(n,`space-y-4`);let i=c(`rue:component:anchor`);o(n,i),s(()=>{let e=_(S,{affix:!1,direction:`horizontal`,getContainer:()=>r.current,getCurrentAnchor:e=>e===`#schema-notes`?`#schema`:e,items:A.map(e=>({key:e.id,href:`#${e.id}`,title:e.title}))});a(()=>g(e,n,i))});let d=e(`div`,n);o(n,d);let f=x(d,()=>r);h(()=>{f()}),u(d,`h-[26rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`);let p=e(`div`,d);o(d,p),u(p,`space-y-4 pr-1`);let m=c(`rue:list:start`),v=c(`rue:list:end`);o(p,m),o(p,v);let y=new Map;return s(()=>{y=b({items:k||[],getKey:(e,t)=>e.id,elements:y,parent:p,before:v,start:m,renderItem:(e,t,n,r,i)=>{l(_(E,{key:e.id,section:e,dense:!0}),t,n,r)}})}),n})},V=()=>f(t=>{let n=i(),r=c(`rue:component:anchor`);return o(n,r),g(_(C,{children:f(()=>{let t=i(),n=e(`div`,t);o(t,n),u(n,`max-w-none prose prose-sm md:prose-base`);let r=e(`h1`,n);o(n,r),o(r,d(`Anchor 锚点导航`));let l=e(`p`,n);o(n,l),u(l,`text-sm mt-3 mb-3`),o(l,d(`Rue 版 Anchor 保留锚点导航的核心能力：items、滚动激活、局部容器、受控高亮与横向模式； 视觉上换成更适合 Rue 站点的卡片式导航，不直接复制细线目录样式。`));let f=e(`div`,n);o(n,f),m(f,`role`,`alert`),u(f,`alert alert-soft alert-info not-prose my-6`);let p=e(`span`,f);o(f,p),o(p,d("`items` 是完整增强路径。`Anchor.Link` children 仍然可用，但在 Rue 编译参与模式下会作为结构化回退渲染；需要完整滚动注册和高亮映射时，优先传 `items`。"));let h=c(`rue:component:anchor`);o(n,h),s(()=>{let e=_(w,{title:`基础吸顶导航`,summary:`默认是纵向吸顶模式，适合长文档、报告页和参数配置页。`,tab:j,preview:R,code:P});a(()=>g(e,n,h))});let v=c(`rue:component:anchor`);o(n,v),s(()=>{let e=_(w,{title:`局部滚动容器`,summary:`把 Anchor 绑定到自定义滚动面板，而不是整个 window。`,tab:M,preview:z,code:F});a(()=>g(e,n,v))});let y=c(`rue:component:anchor`);o(n,y),s(()=>{let e=_(w,{title:`横向模式与高亮映射`,summary:`顶部锚点条更适合章节较少的页面，同时可以用 getCurrentAnchor 归并多个小节。`,tab:N,preview:B,code:I});a(()=>g(e,n,y))});let b=e(`h2`,n);o(n,b),o(b,d(`API`));let x=c(`rue:component:anchor`);return o(n,x),s(()=>{let e=_(T,{rows:L});a(()=>g(e,n,x))}),t})}),n,r),n});export{V as default};