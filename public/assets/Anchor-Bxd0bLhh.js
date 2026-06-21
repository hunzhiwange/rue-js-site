import{$t as e,Jt as t,Q as n,dt as r,et as i,in as a,it as o,l as s,lt as c,n as l,nt as u,o as d,rn as f,rt as p,s as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b,t as x}from"./vapor-helpers-vapor-Dg64FcpK.js";import{n as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{r as C}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as w}from"./PreviewBlock-wHSyDiek.js";var T=t=>s(a=>{let o=u(`div`,a);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=u(`table`,o);n(o,l),r(l,`table table-zebra`);let f=u(`thead`,l);n(l,f);let m=u(`tr`,f);n(f,m);let h=u(`th`,m);n(m,h),n(h,p(`属性`));let _=u(`th`,m);n(m,_),n(_,p(`说明`));let y=u(`th`,m);n(m,y),n(y,p(`类型`));let x=u(`th`,m);n(m,x),n(x,p(`默认值`));let S=u(`tbody`,l);n(l,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return v(()=>{T=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,a,o,l)=>{d(s(()=>{let r=g(),a=u(`tr`,r);n(r,a),v(()=>{c(a,`key`,String(t.prop))});let o=u(`td`,a);n(a,o);let s=u(`code`,o);n(o,s);let l=i(`rue:slot:anchor`);n(s,l),v(()=>{let n=t.prop;e(()=>d(n,s,l))});let f=u(`td`,a);n(a,f);let p=i(`rue:slot:anchor`);n(f,p),v(()=>{let n=t.description;e(()=>d(n,f,p))});let m=u(`td`,a);n(a,m);let h=u(`code`,m);n(m,h);let _=i(`rue:slot:anchor`);n(h,_),v(()=>{let n=t.type;e(()=>d(n,h,_))});let y=u(`td`,a);n(a,y);let b=u(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),v(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,a)}})}),o}),E=t=>s(a=>{let l=u(`section`,a);v(()=>{c(l,`id`,String(t.section.id))}),v(()=>{r(l,`scroll-mt-28 rounded-[1.6rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)] ${t.dense?`p-5`:`p-6 md:p-7`}`)});let f=u(`div`,l);n(l,f),r(f,`flex flex-wrap items-start justify-between gap-3`);let m=u(`div`,f);n(f,m);let h=u(`div`,m);n(m,h),r(h,`text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-base-content/45`);let y=i(`rue:slot:anchor`);n(h,y),v(()=>{let n=t.section.eyebrow;e(()=>d(n,h,y))});let x=u(`h3`,m);n(m,x),r(x,`mb-2 mt-2 text-xl font-semibold text-base-content`);let S=i(`rue:slot:anchor`);n(x,S),v(()=>{let n=t.section.title;e(()=>d(n,x,S))});let C=u(`p`,m);n(m,C),r(C,`m-0 max-w-2xl text-sm leading-6 text-base-content/72`);let w=i(`rue:slot:anchor`);n(C,w),v(()=>{let n=t.section.summary;e(()=>d(n,C,w))});let T=u(`div`,f);n(f,T),r(T,`rounded-2xl border border-base-300/70 bg-base-100/80 px-3 py-2 text-right shadow-sm`);let E=u(`div`,T);n(T,E),r(E,`text-[0.68rem] uppercase tracking-[0.18em] text-base-content/45`),n(E,p(`Signal`));let D=u(`div`,T);n(T,D),r(D,`mt-1 text-lg font-semibold text-base-content`);let O=i(`rue:slot:anchor`);n(D,O),v(()=>{let n=t.section.metric;e(()=>d(n,D,O))});let k=u(`div`,l);n(l,k),r(k,`mt-5 flex flex-wrap items-center gap-2`);let A=u(`span`,k);n(k,A),r(A,`badge badge-outline rounded-full`);let j=i(`rue:slot:anchor`);n(A,j),v(()=>{let n=t.section.tag;e(()=>d(n,A,j))});let M=u(`span`,k);n(k,M),r(M,`badge badge-ghost rounded-full`),n(M,p(`Anchor Section`));let N=u(`div`,l);n(l,N),r(N,`mt-5 grid gap-3 md:grid-cols-3`);let P=i(`rue:list:start`),F=i(`rue:list:end`);n(N,P),n(N,F);let I=new Map;return v(()=>{I=b({items:t.section.points||[],getKey:(e,t)=>e,elements:I,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,t,i,a,l)=>{d(s(()=>{let t=g(),i=u(`div`,t);n(t,i),v(()=>{c(i,`key`,String(e))}),r(i,`rounded-2xl border border-base-300/65 bg-base-100/75 px-4 py-3 text-sm leading-6 text-base-content/75`);let a=o(i);return n(i,a),v(()=>{_(a,e)}),t}),t,i)}})}),l}),D=[{id:`overview`,eyebrow:`Chapter 01`,title:`项目全景`,summary:`把长文档拆成可扫描的几段之后，Anchor 负责给读者一个稳定的阅读坐标。`,points:[`适合文档、报告、配置中心等长页面。`,`激活态跟随滚动同步更新。`,`保持 Rue 自己的卡片化导航外观。`],metric:`4 blocks`,tag:`Base`},{id:`rhythm`,eyebrow:`Chapter 02`,title:`内容节奏`,summary:`每段都带一组短卡片，方便在示例 里快速看到滚动命中与视觉反馈。`,points:[`段落标题支持任意 renderable。`,`可以挂描述文字，适合多层说明。`,`active 状态不依赖外部状态管理。`],metric:`Sticky`,tag:`Scroll`},{id:`api`,eyebrow:`Chapter 03`,title:`能力边界`,summary:`Anchor 的核心能力集中在页内导航、滚动定位和高亮控制，避免越权成完整目录树。`,points:["支持 `items` 驱动和自定义容器。","支持 `getCurrentAnchor` 做分组高亮。","可通过 `classNames / styles` 继续定制。"],metric:`API-first`,tag:`Control`}],O=[{id:`brief`,eyebrow:`Module A`,title:`Brief Intake`,summary:`将阅读区域限制在一个滚动面板内，适合右侧固定大纲 + 左侧局部滚动的详情页。`,points:["`getContainer` 指向任意滚动容器。","`targetOffset` 可以和容器内头部高度对齐。",`不需要监听页面外层滚动。`],metric:`Local`,tag:`Container`},{id:`system`,eyebrow:`Module B`,title:`System Draft`,summary:`容器滚动的 active 计算独立于 window，适合 modal、drawer、侧栏等局部视图。`,points:[`点击导航后只滚动局部面板。`,`不会污染页面 hash 路由。`,`可关闭 affix，让导航留在布局流中。`],metric:`Panel`,tag:`Scoped`},{id:`delivery`,eyebrow:`Module C`,title:`Delivery Notes`,summary:`同一套 items 可以同时服务桌面右侧导航和移动端顶部锚点条。`,points:[`适合在复杂后台页中复用。`,`结构清晰时滚动命中更稳定。`,`推荐结合语义化 section id。`],metric:`Stable`,tag:`Reuse`}],k=[{id:`kickoff`,eyebrow:`Flow 01`,title:`Kickoff`,summary:`先建立整体范围，再决定哪些区块要合并成同一个高亮入口。`,points:[`横向模式更适合章节较少的页面。`,`适合和内容页头一起展示。`,`高亮映射可用于把多个子段落归并。`],metric:`Top Bar`,tag:`Horizontal`},{id:`schema`,eyebrow:`Flow 02`,title:`Schema`,summary:`这里开始进入实现细节，补充的 Schema Notes 小节不会单独占一个顶部入口。`,points:["`getCurrentAnchor` 接收滚动命中的基础 href。",`可以把多个实际 section 映射到同一个展示入口。`,`用于简化顶部导航颗粒度。`],metric:`Merged`,tag:`Mapping`},{id:`schema-notes`,eyebrow:`Flow 02B`,title:`Schema Notes`,summary:`这个补充段不出现在顶部导航里，但滚动进入它时仍然使用 Schema 的高亮。`,points:[`适合把补充说明、FAQ、边界条件并回父级入口。`,`不会额外占一个横向导航位。`,`点击其他可见导航项时，active 仍然命中各自本身。`],metric:`Carry`,tag:`Alias`},{id:`adapter`,eyebrow:`Flow 03`,title:`Adapter`,summary:`第三项保持独立入口，点击后会命中自身，不再被错误归并到前一个导航项。`,points:[`适合承接真正需要独立定位的章节。`,`与上一个补充小节的高亮归并互不冲突。`,`更符合顶部导航的点击预期。`],metric:`Direct`,tag:`Stable`},{id:`handoff`,eyebrow:`Flow 04`,title:`Handoff`,summary:`尾段保持独立高亮，让读者知道自己已经进入交付与收口阶段。`,points:[`横向模式默认只展示单层 items。`,`点击后仍然走同一套滚动逻辑。`,`视觉上更接近标签导航而不是侧栏目录。`],metric:`Final`,tag:`Finish`}],A=[{id:`kickoff`,title:`Kickoff`},{id:`schema`,title:`Schema`},{id:`adapter`,title:`Adapter`},{id:`handoff`,title:`Handoff`}],j=y(`ref:1:0`,()=>t(`preview`)),M=y(`ref:1:1`,()=>t(`preview`)),N=y(`ref:1:2`,()=>t(`preview`)),P=`import { Anchor } from '@rue-js/design'

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
</div>`,L=[{prop:`items`,description:`主推荐入口。每项支持 href、title、description、disabled 与 children。`,type:`AnchorItem[]`,defaultValue:`[]`},{prop:`direction`,description:`导航方向，支持 vertical 与 horizontal。`,type:`'vertical' | 'horizontal'`,defaultValue:`vertical`},{prop:`affix / offsetTop`,description:`是否吸附以及吸附偏移，Rue 实现用 sticky 语义实现。`,type:`boolean / number`,defaultValue:`true / 0`},{prop:`getContainer / targetOffset`,description:`指定滚动容器，并控制点击滚动时的目标偏移。`,type:`() => HTMLElement | Window / number`,defaultValue:`window / offsetTop`},{prop:`bounds`,description:`滚动命中的容差，避免边界抖动。`,type:`number`,defaultValue:`5`},{prop:`getCurrentAnchor`,description:`将实际命中的 href 映射成展示高亮 href，适合章节归并。`,type:`(activeLink: string) => string`,defaultValue:`-`},{prop:`onChange / onClick`,description:`分别监听激活项变化和条目点击。`,type:`(href: string) => void / (event, link) => void`,defaultValue:`-`},{prop:`classNames / styles`,description:`对 root、list、item、link、title、description、indicator 进行语义化定制。`,type:`object`,defaultValue:`-`},{prop:`children / Anchor.Link`,description:`提供结构化 children 回退；在 Rue 编译参与模式下，增强滚动高亮请优先使用 items。`,type:`any`,defaultValue:`-`}],R=()=>s(t=>{let a=u(`div`,t);r(a,`grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]`);let o=u(`div`,a);n(a,o),r(o,`space-y-4`);let s=i(`rue:list:start`),c=i(`rue:list:end`);n(o,s),n(o,c);let l=new Map;v(()=>{l=b({items:D||[],getKey:(e,t)=>e.id,elements:l,parent:o,before:c,start:s,renderItem:(e,t,n,r,i)=>{m(h(E,{key:e.id,section:e}),t,n,r)}})});let f=u(`div`,a);n(a,f),r(f,`lg:pl-2`);let p=i(`rue:component:anchor`);return n(f,p),v(()=>{let t=h(S,{offsetTop:24,items:D.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.summary}))});e(()=>d(t,f,p))}),a}),z=()=>{let{panelRef:t}=y(`useSetup:0:0`,()=>a(()=>({panelRef:y(`useRef:1:3`,()=>f())})));return s(a=>{let o=u(`div`,a);r(o,`grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]`);let s=i(`rue:component:anchor`);n(o,s),v(()=>{let n=h(S,{affix:!1,targetOffset:20,getContainer:()=>t.current,items:O.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.tag}))});e(()=>d(n,o,s))});let c=u(`div`,o);n(o,c);let f=x(c,()=>t);l(()=>{f()}),r(c,`h-[30rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`);let p=u(`div`,c);n(c,p),r(p,`space-y-4 pr-1`);let g=i(`rue:list:start`),_=i(`rue:list:end`);n(p,g),n(p,_);let y=new Map;return v(()=>{y=b({items:O||[],getKey:(e,t)=>e.id,elements:y,parent:p,before:_,start:g,renderItem:(e,t,n,r,i)=>{m(h(E,{key:e.id,section:e,dense:!0}),t,n,r)}})}),o})},B=()=>{let{panelRef:t}=y(`useSetup:0:0:dup1`,()=>a(()=>({panelRef:y(`useRef:1:4`,()=>f())})));return s(a=>{let o=u(`div`,a);r(o,`space-y-4`);let s=i(`rue:component:anchor`);n(o,s),v(()=>{let n=h(S,{affix:!1,direction:`horizontal`,getContainer:()=>t.current,getCurrentAnchor:e=>e===`#schema-notes`?`#schema`:e,items:A.map(e=>({key:e.id,href:`#${e.id}`,title:e.title}))});e(()=>d(n,o,s))});let c=u(`div`,o);n(o,c);let f=x(c,()=>t);l(()=>{f()}),r(c,`h-[26rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`);let p=u(`div`,c);n(c,p),r(p,`space-y-4 pr-1`);let g=i(`rue:list:start`),_=i(`rue:list:end`);n(p,g),n(p,_);let y=new Map;return v(()=>{y=b({items:k||[],getKey:(e,t)=>e.id,elements:y,parent:p,before:_,start:g,renderItem:(e,t,n,r,i)=>{m(h(E,{key:e.id,section:e,dense:!0}),t,n,r)}})}),o})},V=()=>s(t=>{let a=g(),o=i(`rue:component:anchor`);return n(a,o),d(h(C,{children:s(()=>{let t=g(),a=u(`div`,t);n(t,a),r(a,`max-w-none prose prose-sm md:prose-base`);let o=u(`h1`,a);n(a,o),n(o,p(`Anchor 锚点导航`));let s=u(`p`,a);n(a,s),r(s,`text-sm mt-3 mb-3`),n(s,p(`Rue 版 Anchor 保持锚点导航的核心能力：items、滚动激活、局部容器、受控高亮与横向模式； 视觉上换成更适合 Rue 站点的卡片式导航，不直接复制细线目录样式。`));let l=u(`div`,a);n(a,l),c(l,`role`,`alert`),r(l,`alert alert-soft alert-info not-prose my-6`);let f=u(`span`,l);n(l,f),n(f,p("`items` 是完整增强路径。`Anchor.Link` children 仍然可用，但在 Rue 编译参与模式下会作为结构化回退渲染；需要完整滚动注册和高亮映射时，优先传 `items`。"));let m=i(`rue:component:anchor`);n(a,m),v(()=>{let t=h(w,{title:`基础吸顶导航`,summary:`默认是纵向吸顶模式，适合长文档、报告页和参数配置页。`,tab:j,preview:R,code:P});e(()=>d(t,a,m))});let _=i(`rue:component:anchor`);n(a,_),v(()=>{let t=h(w,{title:`局部滚动容器`,summary:`把 Anchor 绑定到自定义滚动面板，而不是整个 window。`,tab:M,preview:z,code:F});e(()=>d(t,a,_))});let y=i(`rue:component:anchor`);n(a,y),v(()=>{let t=h(w,{title:`横向模式与高亮映射`,summary:`顶部锚点条更适合章节较少的页面，同时可以用 getCurrentAnchor 归并多个小节。`,tab:N,preview:B,code:I});e(()=>d(t,a,y))});let b=u(`h2`,a);n(a,b),n(b,p(`API`));let x=i(`rue:component:anchor`);return n(a,x),v(()=>{let t=h(T,{rows:L});e(()=>d(t,a,x))}),t})}),a,o),a});export{V as default};