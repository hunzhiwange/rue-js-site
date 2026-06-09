import{$ as e,Ht as t,Kt as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,c,ct as l,et as u,l as d,mt as f,ot as p,qt as m,r as h,s as g,t as _,tt as v}from"./vapor-runtime-aZAg0Qkw.js";import{a as y,n as b,t as x}from"./vapor-helpers-vapor-gtGwiIv0.js";import{n as S}from"./persistentSidebarPlayground-IkfbXpbu.js";import{r as C}from"./SidebarPlaygroundDesign-CS11MI8e.js";import{t as w}from"./PreviewBlock-Byu5jIqR.js";var T=n=>d(i=>{let c=e(`div`,i);l(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`,c);o(c,f),l(f,`table table-zebra`);let m=e(`thead`,f);o(f,m);let h=e(`tr`,m);o(m,h);let _=e(`th`,h);o(h,_),o(_,u(`属性`));let v=e(`th`,h);o(h,v),o(v,u(`说明`));let y=e(`th`,h);o(h,y),o(y,u(`类型`));let x=e(`th`,h);o(h,x),o(x,u(`默认值`));let S=e(`tbody`,f);o(f,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return a(()=>{T=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,u)=>{g(d(()=>{let i=r(),c=e(`tr`,i);o(i,c),a(()=>{p(c,`key`,String(n.prop))});let l=e(`td`,c);o(c,l);let u=e(`code`,l);o(l,u);let d=s(`rue:slot:anchor`);o(u,d),a(()=>{let e=n.prop;t(()=>g(e,u,d))});let f=e(`td`,c);o(c,f);let m=s(`rue:slot:anchor`);o(f,m),a(()=>{let e=n.description;t(()=>g(e,f,m))});let h=e(`td`,c);o(c,h);let _=e(`code`,h);o(h,_);let v=s(`rue:slot:anchor`);o(_,v),a(()=>{let e=n.type;t(()=>g(e,_,v))});let y=e(`td`,c);o(c,y);let b=e(`code`,y);o(y,b);let x=s(`rue:slot:anchor`);return o(b,x),a(()=>{let e=n.defaultValue;t(()=>g(e,b,x))}),i}),i,c)}})}),c}),E=n=>d(i=>{let c=e(`section`,i);a(()=>{p(c,`id`,String(n.section.id))}),a(()=>{l(c,String(`scroll-mt-28 rounded-[1.6rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)] ${n.dense?`p-5`:`p-6 md:p-7`}`))});let m=e(`div`,c);o(c,m),l(m,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,m);o(m,h);let _=e(`div`,h);o(h,_),l(_,`text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-base-content/45`);let y=s(`rue:slot:anchor`);o(_,y),a(()=>{let e=n.section.eyebrow;t(()=>g(e,_,y))});let x=e(`h3`,h);o(h,x),l(x,`mb-2 mt-2 text-xl font-semibold text-base-content`);let S=s(`rue:slot:anchor`);o(x,S),a(()=>{let e=n.section.title;t(()=>g(e,x,S))});let C=e(`p`,h);o(h,C),l(C,`m-0 max-w-2xl text-sm leading-6 text-base-content/72`);let w=s(`rue:slot:anchor`);o(C,w),a(()=>{let e=n.section.summary;t(()=>g(e,C,w))});let T=e(`div`,m);o(m,T),l(T,`rounded-2xl border border-base-300/70 bg-base-100/80 px-3 py-2 text-right shadow-sm`);let E=e(`div`,T);o(T,E),l(E,`text-[0.68rem] uppercase tracking-[0.18em] text-base-content/45`),o(E,u(`Signal`));let D=e(`div`,T);o(T,D),l(D,`mt-1 text-lg font-semibold text-base-content`);let O=s(`rue:slot:anchor`);o(D,O),a(()=>{let e=n.section.metric;t(()=>g(e,D,O))});let k=e(`div`,c);o(c,k),l(k,`mt-5 flex flex-wrap items-center gap-2`);let A=e(`span`,k);o(k,A),l(A,`badge badge-outline rounded-full`);let j=s(`rue:slot:anchor`);o(A,j),a(()=>{let e=n.section.tag;t(()=>g(e,A,j))});let M=e(`span`,k);o(k,M),l(M,`badge badge-ghost rounded-full`),o(M,u(`Anchor Section`));let N=e(`div`,c);o(c,N),l(N,`mt-5 grid gap-3 md:grid-cols-3`);let P=s(`rue:list:start`),F=s(`rue:list:end`);o(N,P),o(N,F);let I=new Map;return a(()=>{I=b({items:n.section.points||[],getKey:(e,t)=>e,elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,n,i,s,c)=>{g(d(()=>{let n=r(),i=e(`div`,n);o(n,i),a(()=>{p(i,`key`,String(t))}),l(i,`rounded-2xl border border-base-300/65 bg-base-100/75 px-4 py-3 text-sm leading-6 text-base-content/75`);let s=v(i);return o(i,s),a(()=>{f(s,t)}),n}),n,i)}})}),c}),D=[{id:`overview`,eyebrow:`Chapter 01`,title:`项目全景`,summary:`把长文档拆成可扫描的几段之后，Anchor 负责给读者一个稳定的阅读坐标。`,points:[`适合文档、报告、配置中心等长页面。`,`激活态跟随滚动同步更新。`,`保持 Rue 自己的卡片化导航外观。`],metric:`4 blocks`,tag:`Base`},{id:`rhythm`,eyebrow:`Chapter 02`,title:`内容节奏`,summary:`每段都带一组短卡片，方便在 demo 里快速看到滚动命中与视觉反馈。`,points:[`段落标题支持任意 renderable。`,`可以挂描述文字，适合多层说明。`,`active 状态不依赖外部状态管理。`],metric:`Sticky`,tag:`Scroll`},{id:`api`,eyebrow:`Chapter 03`,title:`能力边界`,summary:`Anchor 的核心能力集中在页内导航、滚动定位和高亮控制，避免越权成完整目录树。`,points:["支持 `items` 驱动和自定义容器。","支持 `getCurrentAnchor` 做分组高亮。","可通过 `classNames / styles` 继续定制。"],metric:`API-first`,tag:`Control`}],O=[{id:`brief`,eyebrow:`Module A`,title:`Brief Intake`,summary:`将阅读区域限制在一个滚动面板内，适合右侧固定大纲 + 左侧局部滚动的详情页。`,points:["`getContainer` 指向任意滚动容器。","`targetOffset` 可以和容器内头部高度对齐。",`不需要监听页面外层滚动。`],metric:`Local`,tag:`Container`},{id:`system`,eyebrow:`Module B`,title:`System Draft`,summary:`容器滚动的 active 计算独立于 window，适合 modal、drawer、侧栏等局部视图。`,points:[`点击导航后只滚动局部面板。`,`不会污染页面 hash 路由。`,`可关闭 affix，让导航留在布局流中。`],metric:`Panel`,tag:`Scoped`},{id:`delivery`,eyebrow:`Module C`,title:`Delivery Notes`,summary:`同一套 items 可以同时服务桌面右侧导航和移动端顶部锚点条。`,points:[`适合在复杂后台页中复用。`,`结构清晰时滚动命中更稳定。`,`推荐结合语义化 section id。`],metric:`Stable`,tag:`Reuse`}],k=[{id:`kickoff`,eyebrow:`Flow 01`,title:`Kickoff`,summary:`先建立整体范围，再决定哪些区块要合并成同一个高亮入口。`,points:[`横向模式更适合章节较少的页面。`,`适合和内容页头一起展示。`,`高亮映射可用于把多个子段落归并。`],metric:`Top Bar`,tag:`Horizontal`},{id:`schema`,eyebrow:`Flow 02`,title:`Schema`,summary:`这里开始进入实现细节，补充的 Schema Notes 小节不会单独占一个顶部入口。`,points:["`getCurrentAnchor` 接收滚动命中的原始 href。",`可以把多个实际 section 映射到同一个展示入口。`,`用于简化顶部导航颗粒度。`],metric:`Merged`,tag:`Mapping`},{id:`schema-notes`,eyebrow:`Flow 02B`,title:`Schema Notes`,summary:`这个补充段不出现在顶部导航里，但滚动进入它时仍然沿用 Schema 的高亮。`,points:[`适合把补充说明、FAQ、边界条件并回父级入口。`,`不会额外占一个横向导航位。`,`点击其他可见导航项时，active 仍然命中各自本身。`],metric:`Carry`,tag:`Alias`},{id:`adapter`,eyebrow:`Flow 03`,title:`Adapter`,summary:`第三项保持独立入口，点击后会命中自身，不再被错误归并到前一个导航项。`,points:[`适合承接真正需要独立定位的章节。`,`与上一个补充小节的高亮归并互不冲突。`,`更符合顶部导航的点击预期。`],metric:`Direct`,tag:`Stable`},{id:`handoff`,eyebrow:`Flow 04`,title:`Handoff`,summary:`尾段保持独立高亮，让读者知道自己已经进入交付与收口阶段。`,points:[`横向模式默认只展示单层 items。`,`点击后仍然走同一套滚动逻辑。`,`视觉上更接近标签导航而不是侧栏目录。`],metric:`Final`,tag:`Finish`}],A=[{id:`kickoff`,title:`Kickoff`},{id:`schema`,title:`Schema`},{id:`adapter`,title:`Adapter`},{id:`handoff`,title:`Handoff`}],j=y(`ref:1:0`,()=>i(`preview`)),M=y(`ref:1:1`,()=>i(`preview`)),N=y(`ref:1:2`,()=>i(`preview`)),P=`import { Anchor } from '@rue-js/design'

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
</div>`,L=[{prop:`items`,description:`主推荐入口。每项支持 href、title、description、disabled 与 children。`,type:`AnchorItem[]`,defaultValue:`[]`},{prop:`direction`,description:`导航方向，支持 vertical 与 horizontal。`,type:`'vertical' | 'horizontal'`,defaultValue:`vertical`},{prop:`affix / offsetTop`,description:`是否吸附以及吸附偏移，Rue 版本用 sticky 语义实现。`,type:`boolean / number`,defaultValue:`true / 0`},{prop:`getContainer / targetOffset`,description:`指定滚动容器，并控制点击滚动时的目标偏移。`,type:`() => HTMLElement | Window / number`,defaultValue:`window / offsetTop`},{prop:`bounds`,description:`滚动命中的容差，避免边界抖动。`,type:`number`,defaultValue:`5`},{prop:`getCurrentAnchor`,description:`将实际命中的 href 映射成展示高亮 href，适合章节归并。`,type:`(activeLink: string) => string`,defaultValue:`-`},{prop:`onChange / onClick`,description:`分别监听激活项变化和条目点击。`,type:`(href: string) => void / (event, link) => void`,defaultValue:`-`},{prop:`classNames / styles`,description:`对 root、list、item、link、title、description、indicator 进行语义化定制。`,type:`object`,defaultValue:`-`},{prop:`children / Anchor.Link`,description:`保留结构化 children 回退；在 Rue 编译参与模式下，增强滚动高亮请优先使用 items。`,type:`any`,defaultValue:`-`}],R=()=>d(n=>{let r=e(`div`,n);l(r,`grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]`);let i=e(`div`,r);o(r,i),l(i,`space-y-4`);let u=s(`rue:list:start`),d=s(`rue:list:end`);o(i,u),o(i,d);let f=new Map;a(()=>{f=b({items:D||[],getKey:(e,t)=>e.id,elements:f,parent:i,before:d,start:u,renderItem:(e,t,n,r,i)=>{c(_(E,{key:e.id,section:e}),t,n,r)}})});let p=e(`div`,r);o(r,p),l(p,`lg:pl-2`);let m=s(`rue:component:anchor`);return o(p,m),a(()=>{let e=_(S,{offsetTop:24,items:D.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.summary}))});t(()=>g(e,p,m))}),r}),z=()=>{let{panelRef:r}=y(`useSetup:0:0`,()=>m(()=>({panelRef:y(`useRef:1:3`,()=>n())})));return d(n=>{let i=e(`div`,n);l(i,`grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]`);let u=s(`rue:component:anchor`);o(i,u),a(()=>{let e=_(S,{affix:!1,targetOffset:20,getContainer:()=>r.current,items:O.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.tag}))});t(()=>g(e,i,u))});let d=e(`div`,i);o(i,d);let f=x(d,()=>r);h(()=>{f()}),l(d,`h-[30rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`);let p=e(`div`,d);o(d,p),l(p,`space-y-4 pr-1`);let m=s(`rue:list:start`),v=s(`rue:list:end`);o(p,m),o(p,v);let y=new Map;return a(()=>{y=b({items:O||[],getKey:(e,t)=>e.id,elements:y,parent:p,before:v,start:m,renderItem:(e,t,n,r,i)=>{c(_(E,{key:e.id,section:e,dense:!0}),t,n,r)}})}),i})},B=()=>{let{panelRef:r}=y(`useSetup:0:0:dup1`,()=>m(()=>({panelRef:y(`useRef:1:4`,()=>n())})));return d(n=>{let i=e(`div`,n);l(i,`space-y-4`);let u=s(`rue:component:anchor`);o(i,u),a(()=>{let e=_(S,{affix:!1,direction:`horizontal`,getContainer:()=>r.current,getCurrentAnchor:e=>e===`#schema-notes`?`#schema`:e,items:A.map(e=>({key:e.id,href:`#${e.id}`,title:e.title}))});t(()=>g(e,i,u))});let d=e(`div`,i);o(i,d);let f=x(d,()=>r);h(()=>{f()}),l(d,`h-[26rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`);let p=e(`div`,d);o(d,p),l(p,`space-y-4 pr-1`);let m=s(`rue:list:start`),v=s(`rue:list:end`);o(p,m),o(p,v);let y=new Map;return a(()=>{y=b({items:k||[],getKey:(e,t)=>e.id,elements:y,parent:p,before:v,start:m,renderItem:(e,t,n,r,i)=>{c(_(E,{key:e.id,section:e,dense:!0}),t,n,r)}})}),i})},V=()=>d(n=>{let i=r(),c=s(`rue:component:anchor`);return o(i,c),g(_(C,{children:d(()=>{let n=r(),i=e(`div`,n);o(n,i),l(i,`max-w-none prose prose-sm md:prose-base`);let c=e(`h1`,i);o(i,c),o(c,u(`Anchor 锚点导航`));let d=e(`p`,i);o(i,d),l(d,`text-sm mt-3 mb-3`),o(d,u(`Rue 版 Anchor 保留锚点导航的核心能力：items、滚动激活、局部容器、受控高亮与横向模式； 视觉上换成更适合 Rue 站点的卡片式导航，不直接复制细线目录样式。`));let f=e(`div`,i);o(i,f),p(f,`role`,`alert`),l(f,`alert alert-soft alert-info not-prose my-6`);let m=e(`span`,f);o(f,m),o(m,u("`items` 是完整增强路径。`Anchor.Link` children 仍然可用，但在 Rue 编译参与模式下会作为结构化回退渲染；需要完整滚动注册和高亮映射时，优先传 `items`。"));let h=s(`rue:component:anchor`);o(i,h),a(()=>{let e=_(w,{title:`基础吸顶导航`,summary:`默认是纵向吸顶模式，适合长文档、报告页和参数配置页。`,tab:j,preview:R,code:P});t(()=>g(e,i,h))});let v=s(`rue:component:anchor`);o(i,v),a(()=>{let e=_(w,{title:`局部滚动容器`,summary:`把 Anchor 绑定到自定义滚动面板，而不是整个 window。`,tab:M,preview:z,code:F});t(()=>g(e,i,v))});let y=s(`rue:component:anchor`);o(i,y),a(()=>{let e=_(w,{title:`横向模式与高亮映射`,summary:`顶部锚点条更适合章节较少的页面，同时可以用 getCurrentAnchor 归并多个小节。`,tab:N,preview:B,code:I});t(()=>g(e,i,y))});let b=e(`h2`,i);o(i,b),o(b,u(`API`));let x=s(`rue:component:anchor`);return o(i,x),a(()=>{let e=_(T,{rows:L});t(()=>g(e,i,x))}),n})}),i,c),i});export{V as default};