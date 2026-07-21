import{Cn as e,Ct as t,Mt as n,Sn as r,Tt as i,dt as a,ft as o,ht as s,mt as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,n as h,o as g,s as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b,t as x}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as S}from"./persistentSidebarPlayground-B3vwD8_y.js";import{r as C}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as w}from"./PreviewBlock-ARp---67.js";var T=e=>m(n=>{let r=u(`div`,n);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,r);d(r,s),i(s,`table table-zebra`);let l=u(`thead`,s);d(s,l);let h=u(`tr`,l);d(l,h);let _=u(`th`,h);d(h,_),d(_,c(`属性`));let v=u(`th`,h);d(h,v),d(v,c(`说明`));let y=u(`th`,h);d(h,y),d(y,c(`类型`));let x=u(`th`,h);d(h,x),d(x,c(`默认值`));let S=u(`tbody`,s);d(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,i,s)=>{g(m(()=>{let n=o(),r=u(`tr`,n);d(n,r),f(()=>{t(r,`key`,String(e.prop))});let i=u(`td`,r);d(r,i);let s=u(`code`,i);d(i,s);let c=a(`rue:slot:anchor`);d(s,c),f(()=>{let t=e.prop;p(()=>g(t,s,c))});let l=u(`td`,r);d(r,l);let m=a(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>g(t,l,m))});let h=u(`td`,r);d(r,h);let _=u(`code`,h);d(h,_);let v=a(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>g(t,_,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=a(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>g(t,b,x))}),n}),n,r)}})}),r}),E=e=>m(r=>{let l=u(`section`,r);f(()=>{t(l,`id`,String(e.section.id))}),f(()=>{i(l,`scroll-mt-28 rounded-[1.6rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)] ${e.dense?`p-5`:`p-6 md:p-7`}`)});let h=u(`div`,l);d(l,h),i(h,`flex flex-wrap items-start justify-between gap-3`);let _=u(`div`,h);d(h,_);let v=u(`div`,_);d(_,v),i(v,`text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-base-content/45`);let y=a(`rue:slot:anchor`);d(v,y),f(()=>{let t=e.section.eyebrow;p(()=>g(t,v,y))});let x=u(`h3`,_);d(_,x),i(x,`mb-2 mt-2 text-xl font-semibold text-base-content`);let S=a(`rue:slot:anchor`);d(x,S),f(()=>{let t=e.section.title;p(()=>g(t,x,S))});let C=u(`p`,_);d(_,C),i(C,`m-0 max-w-2xl text-sm leading-6 text-base-content/72`);let w=a(`rue:slot:anchor`);d(C,w),f(()=>{let t=e.section.summary;p(()=>g(t,C,w))});let T=u(`div`,h);d(h,T),i(T,`rounded-2xl border border-base-300/70 bg-base-100/80 px-3 py-2 text-right shadow-sm`);let E=u(`div`,T);d(T,E),i(E,`text-[0.68rem] uppercase tracking-[0.18em] text-base-content/45`),d(E,c(`Signal`));let D=u(`div`,T);d(T,D),i(D,`mt-1 text-lg font-semibold text-base-content`);let O=a(`rue:slot:anchor`);d(D,O),f(()=>{let t=e.section.metric;p(()=>g(t,D,O))});let k=u(`div`,l);d(l,k),i(k,`mt-5 flex flex-wrap items-center gap-2`);let A=u(`span`,k);d(k,A),i(A,`badge badge-outline rounded-full`);let j=a(`rue:slot:anchor`);d(A,j),f(()=>{let t=e.section.tag;p(()=>g(t,A,j))});let M=u(`span`,k);d(k,M),i(M,`badge badge-ghost rounded-full`),d(M,c(`Anchor Section`));let N=u(`div`,l);d(l,N),i(N,`mt-5 grid gap-3 md:grid-cols-3`);let P=a(`rue:list:start`),F=a(`rue:list:end`);d(N,P),d(N,F);let I=new Map;return f(()=>{I=b({items:e.section.points||[],getKey:(e,t)=>e,elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,r,a,c,l)=>{g(m(()=>{let r=o(),a=u(`div`,r);d(r,a),f(()=>{t(a,`key`,String(e))}),i(a,`rounded-2xl border border-base-300/65 bg-base-100/75 px-4 py-3 text-sm leading-6 text-base-content/75`);let c=s(a);return d(a,c),f(()=>{n(c,e)}),r}),r,a)}})}),l}),D=[{id:`overview`,eyebrow:`Chapter 01`,title:`项目全景`,summary:`把长文档拆成可扫描的几段之后，Anchor 负责给读者一个稳定的阅读坐标。`,points:[`适合文档、报告、配置中心等长页面。`,`激活态跟随滚动同步更新。`,`保持 Rue 自己的卡片化导航外观。`],metric:`4 blocks`,tag:`Base`},{id:`rhythm`,eyebrow:`Chapter 02`,title:`内容节奏`,summary:`每段都带一组短卡片，方便在示例 里快速看到滚动命中与视觉反馈。`,points:[`段落标题支持任意 renderable。`,`可以挂描述文字，适合多层说明。`,`active 状态不依赖外部状态管理。`],metric:`Sticky`,tag:`Scroll`},{id:`api`,eyebrow:`Chapter 03`,title:`能力边界`,summary:`Anchor 的核心能力集中在页内导航、滚动定位和高亮控制，避免越权成完整目录树。`,points:["支持 `items` 驱动和自定义容器。","支持 `getCurrentAnchor` 做分组高亮。","可通过 `classNames / styles` 继续定制。"],metric:`API-first`,tag:`Control`}],O=[{id:`brief`,eyebrow:`Module A`,title:`Brief Intake`,summary:`将阅读区域限制在一个滚动面板内，适合右侧固定大纲 + 左侧局部滚动的详情页。`,points:["`getContainer` 指向任意滚动容器。","`targetOffset` 可以和容器内头部高度对齐。",`不需要监听页面外层滚动。`],metric:`Local`,tag:`Container`},{id:`system`,eyebrow:`Module B`,title:`System Draft`,summary:`容器滚动的 active 计算独立于 window，适合 modal、drawer、侧栏等局部视图。`,points:[`点击导航后只滚动局部面板。`,`不会污染页面 hash 路由。`,`可关闭 affix，让导航留在布局流中。`],metric:`Panel`,tag:`Scoped`},{id:`delivery`,eyebrow:`Module C`,title:`Delivery Notes`,summary:`同一套 items 可以同时服务桌面右侧导航和移动端顶部锚点条。`,points:[`适合在复杂后台页中复用。`,`结构清晰时滚动命中更稳定。`,`推荐结合语义化 section id。`],metric:`Stable`,tag:`Reuse`}],k=[{id:`kickoff`,eyebrow:`Flow 01`,title:`Kickoff`,summary:`先建立整体范围，再决定哪些区块要合并成同一个高亮入口。`,points:[`横向模式更适合章节较少的页面。`,`适合和内容页头一起展示。`,`高亮映射可用于把多个子段落归并。`],metric:`Top Bar`,tag:`Horizontal`},{id:`schema`,eyebrow:`Flow 02`,title:`Schema`,summary:`这里开始进入实现细节，补充的 Schema Notes 小节不会单独占一个顶部入口。`,points:["`getCurrentAnchor` 接收滚动命中的基础 href。",`可以把多个实际 section 映射到同一个展示入口。`,`用于简化顶部导航颗粒度。`],metric:`Merged`,tag:`Mapping`},{id:`schema-notes`,eyebrow:`Flow 02B`,title:`Schema Notes`,summary:`这个补充段不出现在顶部导航里，但滚动进入它时仍然使用 Schema 的高亮。`,points:[`适合把补充说明、FAQ、边界条件并回父级入口。`,`不会额外占一个横向导航位。`,`点击其他可见导航项时，active 仍然命中各自本身。`],metric:`Carry`,tag:`Alias`},{id:`adapter`,eyebrow:`Flow 03`,title:`Adapter`,summary:`第三项保持独立入口，点击后会命中自身，不再被错误归并到前一个导航项。`,points:[`适合承接真正需要独立定位的章节。`,`与上一个补充小节的高亮归并互不冲突。`,`更符合顶部导航的点击预期。`],metric:`Direct`,tag:`Stable`},{id:`handoff`,eyebrow:`Flow 04`,title:`Handoff`,summary:`尾段保持独立高亮，让读者知道自己已经进入交付与收口阶段。`,points:[`横向模式默认只展示单层 items。`,`点击后仍然走同一套滚动逻辑。`,`视觉上更接近标签导航而不是侧栏目录。`],metric:`Final`,tag:`Finish`}],A=[{id:`kickoff`,title:`Kickoff`},{id:`schema`,title:`Schema`},{id:`adapter`,title:`Adapter`},{id:`handoff`,title:`Handoff`}],j=y(`ref:1:0`,()=>l(`preview`)),M=y(`ref:1:1`,()=>l(`preview`)),N=y(`ref:1:2`,()=>l(`preview`)),P=`import { Anchor } from '@rue-js/design'

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
</div>`,L=[{prop:`items`,description:`主推荐入口。每项支持 href、title、description、disabled 与 children。`,type:`AnchorItem[]`,defaultValue:`[]`},{prop:`direction`,description:`导航方向，支持 vertical 与 horizontal。`,type:`'vertical' | 'horizontal'`,defaultValue:`vertical`},{prop:`affix / offsetTop`,description:`是否吸附以及吸附偏移，Rue 实现用 sticky 语义实现。`,type:`boolean / number`,defaultValue:`true / 0`},{prop:`getContainer / targetOffset`,description:`指定滚动容器，并控制点击滚动时的目标偏移。`,type:`() => HTMLElement | Window / number`,defaultValue:`window / offsetTop`},{prop:`bounds`,description:`滚动命中的容差，避免边界抖动。`,type:`number`,defaultValue:`5`},{prop:`getCurrentAnchor`,description:`将实际命中的 href 映射成展示高亮 href，适合章节归并。`,type:`(activeLink: string) => string`,defaultValue:`-`},{prop:`onChange / onClick`,description:`分别监听激活项变化和条目点击。`,type:`(href: string) => void / (event, link) => void`,defaultValue:`-`},{prop:`classNames / styles`,description:`对 root、list、item、link、title、description、indicator 进行语义化定制。`,type:`object`,defaultValue:`-`},{prop:`children / Anchor.Link`,description:`提供结构化 children 回退；在 Rue 编译参与模式下，增强滚动高亮请优先使用 items。`,type:`any`,defaultValue:`-`}],R=()=>m(e=>{let t=u(`div`,e);i(t,`grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]`);let n=u(`div`,t);d(t,n),i(n,`space-y-4`);let r=a(`rue:list:start`),o=a(`rue:list:end`);d(n,r),d(n,o);let s=new Map;f(()=>{s=b({items:D||[],getKey:(e,t)=>e.id,elements:s,parent:n,before:o,start:r,renderItem:(e,t,n,r,i)=>{_(v(E,{key:e.id,section:e}),t,n,r)}})});let c=u(`div`,t);d(t,c),i(c,`lg:pl-2`);let l=a(`rue:component:anchor`);return d(c,l),f(()=>{let e=v(S,{offsetTop:24,items:D.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.summary}))});p(()=>g(e,c,l))}),t}),z=()=>{let{panelRef:t}=y(`useSetup:0:0`,()=>e(()=>({panelRef:y(`useRef:1:3`,()=>r())})));return m(e=>{let n=u(`div`,e);i(n,`grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]`);let r=a(`rue:component:anchor`);d(n,r),f(()=>{let e=v(S,{affix:!1,targetOffset:20,getContainer:()=>t.current,items:O.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.tag}))});p(()=>g(e,n,r))});let o=u(`div`,n);d(n,o);let s=x(o,()=>t);h(()=>{s()}),i(o,`h-[30rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`);let c=u(`div`,o);d(o,c),i(c,`space-y-4 pr-1`);let l=a(`rue:list:start`),m=a(`rue:list:end`);d(c,l),d(c,m);let y=new Map;return f(()=>{y=b({items:O||[],getKey:(e,t)=>e.id,elements:y,parent:c,before:m,start:l,renderItem:(e,t,n,r,i)=>{_(v(E,{key:e.id,section:e,dense:!0}),t,n,r)}})}),n})},B=()=>{let{panelRef:t}=y(`useSetup:0:0:dup1`,()=>e(()=>({panelRef:y(`useRef:1:4`,()=>r())})));return m(e=>{let n=u(`div`,e);i(n,`space-y-4`);let r=a(`rue:component:anchor`);d(n,r),f(()=>{let e=v(S,{affix:!1,direction:`horizontal`,getContainer:()=>t.current,getCurrentAnchor:e=>e===`#schema-notes`?`#schema`:e,items:A.map(e=>({key:e.id,href:`#${e.id}`,title:e.title}))});p(()=>g(e,n,r))});let o=u(`div`,n);d(n,o);let s=x(o,()=>t);h(()=>{s()}),i(o,`h-[26rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`);let c=u(`div`,o);d(o,c),i(c,`space-y-4 pr-1`);let l=a(`rue:list:start`),m=a(`rue:list:end`);d(c,l),d(c,m);let y=new Map;return f(()=>{y=b({items:k||[],getKey:(e,t)=>e.id,elements:y,parent:c,before:m,start:l,renderItem:(e,t,n,r,i)=>{_(v(E,{key:e.id,section:e,dense:!0}),t,n,r)}})}),n})},V=()=>m(e=>{let n=o(),r=a(`rue:component:anchor`);return d(n,r),g(v(C,{children:m(()=>{let e=o(),n=u(`div`,e);d(e,n),i(n,`max-w-none prose prose-sm md:prose-base`);let r=u(`h1`,n);d(n,r),d(r,c(`Anchor 锚点导航`));let s=u(`p`,n);d(n,s),i(s,`text-sm mt-3 mb-3`),d(s,c(`Rue 版 Anchor 保持锚点导航的核心能力：items、滚动激活、局部容器、受控高亮与横向模式； 视觉上换成更适合 Rue 站点的卡片式导航，不直接复制细线目录样式。`));let l=u(`div`,n);d(n,l),t(l,`role`,`alert`),i(l,`alert alert-soft alert-info not-prose my-6`);let m=u(`span`,l);d(l,m),d(m,c("`items` 是完整增强路径。`Anchor.Link` children 仍然可用，但在 Rue 编译参与模式下会作为结构化回退渲染；需要完整滚动注册和高亮映射时，优先传 `items`。"));let h=a(`rue:component:anchor`);d(n,h),f(()=>{let e=v(w,{title:`基础吸顶导航`,summary:`默认是纵向吸顶模式，适合长文档、报告页和参数配置页。`,tab:j,preview:R,code:P});p(()=>g(e,n,h))});let _=a(`rue:component:anchor`);d(n,_),f(()=>{let e=v(w,{title:`局部滚动容器`,summary:`把 Anchor 绑定到自定义滚动面板，而不是整个 window。`,tab:M,preview:z,code:F});p(()=>g(e,n,_))});let y=a(`rue:component:anchor`);d(n,y),f(()=>{let e=v(w,{title:`横向模式与高亮映射`,summary:`顶部锚点条更适合章节较少的页面，同时可以用 getCurrentAnchor 归并多个小节。`,tab:N,preview:B,code:I});p(()=>g(e,n,y))});let b=u(`h2`,n);d(n,b),d(b,c(`API`));let x=a(`rue:component:anchor`);return d(n,x),f(()=>{let e=v(T,{rows:L});p(()=>g(e,n,x))}),e})}),n,r),n});export{V as default};