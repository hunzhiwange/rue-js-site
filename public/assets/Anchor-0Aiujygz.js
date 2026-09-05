import{Bt as e,C as t,Dn as n,Et as r,H as i,K as a,Mt as o,S as s,W as c,_n as l,bn as u,fn as d,gn as f,hn as p,kt as m,mn as h,nt as g,q as _,qt as v,wn as y,x as b,z as x}from"./rue-runtime-CwEGJ854.js";import{n as S}from"./persistentSidebarPlayground-Sp6oVb4P.js";import{r as C}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as w}from"./PreviewBlock-Daz-jANt.js";var T=l(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),E=l(`<section><div class="flex flex-wrap items-start justify-between gap-3"><div><div class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-base-content/45"><!--rue:text-hole:0--></div><h3 class="mb-2 mt-2 text-xl font-semibold text-base-content"><!--rue:text-hole:1--></h3><p class="m-0 max-w-2xl text-sm leading-6 text-base-content/72"><!--rue:text-hole:2--></p></div><div class="rounded-2xl border border-base-300/70 bg-base-100/80 px-3 py-2 text-right shadow-sm"><div class="text-[0.68rem] uppercase tracking-[0.18em] text-base-content/45">Signal</div><div class="mt-1 text-lg font-semibold text-base-content"><!--rue:text-hole:3--></div></div></div><div class="mt-5 flex flex-wrap items-center gap-2"><span class="badge badge-outline rounded-full"><!--rue:text-hole:4--></span><span class="badge badge-ghost rounded-full">Anchor Section</span></div><div class="mt-5 grid gap-3 md:grid-cols-3"><!--rue:text-hole:5--></div></section>`),D=l(`<div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]"><div class="space-y-4"><!--rue:text-hole:0--></div><div class="lg:pl-2"><!--rue:opaque-hole:1--></div></div>`),O=l(`<div class="grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]"><!--rue:opaque-hole:0--><div class="h-[30rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]"><div class="space-y-4 pr-1"><!--rue:text-hole:1--></div></div></div>`),k=l(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="h-[26rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]"><div class="space-y-4 pr-1"><!--rue:text-hole:1--></div></div></div>`),A=l('<div class="max-w-none prose prose-sm md:prose-base"><h1>Anchor 锚点导航</h1><p class="text-sm mt-3 mb-3">Rue 版 Anchor 保持锚点导航的核心能力：items、滚动激活、局部容器、受控高亮与横向模式； 视觉上换成更适合 Rue 站点的卡片式导航，不直接复制细线目录样式。</p><div role="alert" class="alert alert-soft alert-info not-prose my-6"><span>`items` 是完整增强路径。`Anchor.Link` children 仍然可用，但在 Rue 编译参与模式下会作为结构化回退渲染；需要完整滚动注册和高亮映射时，优先传 `items`。</span></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><h2>API</h2><!--rue:opaque-hole:3--></div>'),j=e=>{let n=c(e.rows);return _(r(Object.assign(e=>{let i=T().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,l=[];return y(()=>{let e=n.get()||[];l=t(o,a,l,e,(e,t)=>e.prop,(e,t)=>{let n=c(e),i=c(t);return s((e,t,i)=>b(e,i,()=>r(Object.assign(e=>{let t=p(`tr`,e),r=p(`td`,t);d(t,r);let i=p(`code`,r);d(r,i);let a=f(``);d(i,a),u(a,()=>n.get().prop);let o=p(`td`,t);d(t,o);let s=f(``);d(o,s),u(s,()=>n.get().description);let c=p(`td`,t);d(t,c);let l=p(`code`,c);d(c,l);let m=f(``);d(l,m),u(m,()=>n.get().type);let h=p(`td`,t);d(t,h);let g=p(`code`,h);d(h,g);let _=f(``);return d(g,_),u(_,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{n.set(e.rows)}),()=>e)},M=e=>{let n=c(e.dense),i=c(e.section);return _(r(Object.assign(e=>{let a=E().content.cloneNode(!0).firstChild,o=a,l=a.childNodes[0].childNodes[0].childNodes[0].childNodes[0],m=l.parentNode,h=a.childNodes[0].childNodes[0].childNodes[1].childNodes[0],g=h.parentNode,_=a.childNodes[0].childNodes[0].childNodes[2].childNodes[0],v=_.parentNode,x=a.childNodes[0].childNodes[1].childNodes[1].childNodes[0],S=x.parentNode,C=a.childNodes[1].childNodes[0].childNodes[0],w=C.parentNode,T=a.childNodes[2].childNodes[0],D=T.parentNode,O;y(()=>{let e=i.get().id;Object.is(O,e)||(O=e,e==null||e===!1?o.removeAttribute(`id`):o.setAttribute(`id`,String(e)))});let k;y(()=>{let e=`scroll-mt-28 rounded-[1.6rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)] ${n.get()?`p-5`:`p-6 md:p-7`}`,t=e==null?``:String(e);Object.is(k,t)||(k=t,o.className=t)});let A=f(``);m.insertBefore(A,l),m.removeChild(l),u(A,()=>i.get().eyebrow);let j=f(``);g.insertBefore(j,h),g.removeChild(h),u(j,()=>i.get().title);let M=f(``);v.insertBefore(M,_),v.removeChild(_),u(M,()=>i.get().summary);let N=f(``);S.insertBefore(N,x),S.removeChild(x),u(N,()=>i.get().metric);let P=f(``);w.insertBefore(P,C),w.removeChild(C),u(P,()=>i.get().tag);let F=[];return y(()=>{let e=i.get().points||[];F=t(D,T,F,e,(e,t)=>e,(e,t)=>{let n=c(e),i=c(t);return s((e,t,i)=>b(e,i,()=>r(Object.assign(e=>{let t=p(`div`,e);t.className=`rounded-2xl border border-base-300/65 bg-base-100/75 px-4 py-3 text-sm leading-6 text-base-content/75`;let r=f(``);return d(t,r),u(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{n.set(e.dense),i.set(e.section)}),()=>e)},N=[{id:`overview`,eyebrow:`Chapter 01`,title:`项目全景`,summary:`把长文档拆成可扫描的几段之后，Anchor 负责给读者一个稳定的阅读坐标。`,points:[`适合文档、报告、配置中心等长页面。`,`激活态跟随滚动同步更新。`,`保持 Rue 自己的卡片化导航外观。`],metric:`4 blocks`,tag:`Base`},{id:`rhythm`,eyebrow:`Chapter 02`,title:`内容节奏`,summary:`每段都带一组短卡片，方便在示例 里快速看到滚动命中与视觉反馈。`,points:[`段落标题支持任意 renderable。`,`可以挂描述文字，适合多层说明。`,`active 状态不依赖外部状态管理。`],metric:`Sticky`,tag:`Scroll`},{id:`api`,eyebrow:`Chapter 03`,title:`能力边界`,summary:`Anchor 的核心能力集中在页内导航、滚动定位和高亮控制，避免越权成完整目录树。`,points:["支持 `items` 驱动和自定义容器。","支持 `getCurrentAnchor` 做分组高亮。","可通过 `classNames / styles` 继续定制。"],metric:`API-first`,tag:`Control`}],P=[{id:`brief`,eyebrow:`Module A`,title:`Brief Intake`,summary:`将阅读区域限制在一个滚动面板内，适合右侧固定大纲 + 左侧局部滚动的详情页。`,points:["`getContainer` 指向任意滚动容器。","`targetOffset` 可以和容器内头部高度对齐。",`不需要监听页面外层滚动。`],metric:`Local`,tag:`Container`},{id:`system`,eyebrow:`Module B`,title:`System Draft`,summary:`容器滚动的 active 计算独立于 window，适合 modal、drawer、侧栏等局部视图。`,points:[`点击导航后只滚动局部面板。`,`不会污染页面 hash 路由。`,`可关闭 affix，让导航留在布局流中。`],metric:`Panel`,tag:`Scoped`},{id:`delivery`,eyebrow:`Module C`,title:`Delivery Notes`,summary:`同一套 items 可以同时服务桌面右侧导航和移动端顶部锚点条。`,points:[`适合在复杂后台页中复用。`,`结构清晰时滚动命中更稳定。`,`推荐结合语义化 section id。`],metric:`Stable`,tag:`Reuse`}],F=[{id:`kickoff`,eyebrow:`Flow 01`,title:`Kickoff`,summary:`先建立整体范围，再决定哪些区块要合并成同一个高亮入口。`,points:[`横向模式更适合章节较少的页面。`,`适合和内容页头一起展示。`,`高亮映射可用于把多个子段落归并。`],metric:`Top Bar`,tag:`Horizontal`},{id:`schema`,eyebrow:`Flow 02`,title:`Schema`,summary:`这里开始进入实现细节，补充的 Schema Notes 小节不会单独占一个顶部入口。`,points:["`getCurrentAnchor` 接收滚动命中的基础 href。",`可以把多个实际 section 映射到同一个展示入口。`,`用于简化顶部导航颗粒度。`],metric:`Merged`,tag:`Mapping`},{id:`schema-notes`,eyebrow:`Flow 02B`,title:`Schema Notes`,summary:`这个补充段不出现在顶部导航里，但滚动进入它时仍然使用 Schema 的高亮。`,points:[`适合把补充说明、FAQ、边界条件并回父级入口。`,`不会额外占一个横向导航位。`,`点击其他可见导航项时，active 仍然命中各自本身。`],metric:`Carry`,tag:`Alias`},{id:`adapter`,eyebrow:`Flow 03`,title:`Adapter`,summary:`第三项保持独立入口，点击后会命中自身，不再被错误归并到前一个导航项。`,points:[`适合承接真正需要独立定位的章节。`,`与上一个补充小节的高亮归并互不冲突。`,`更符合顶部导航的点击预期。`],metric:`Direct`,tag:`Stable`},{id:`handoff`,eyebrow:`Flow 04`,title:`Handoff`,summary:`尾段保持独立高亮，让读者知道自己已经进入交付与收口阶段。`,points:[`横向模式默认只展示单层 items。`,`点击后仍然走同一套滚动逻辑。`,`视觉上更接近标签导航而不是侧栏目录。`],metric:`Final`,tag:`Finish`}],I=[{id:`kickoff`,title:`Kickoff`},{id:`schema`,title:`Schema`},{id:`adapter`,title:`Adapter`},{id:`handoff`,title:`Handoff`}],L=v(`ref:1:0`,()=>e(`preview`)),R=v(`ref:1:1`,()=>e(`preview`)),z=v(`ref:1:2`,()=>e(`preview`)),B=`import { Anchor } from '@rue-js/design'

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
</div>`,V=`import { useRef } from '@rue-js/rue'
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
</div>`,H=`import { useRef } from '@rue-js/rue'
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
</div>`,U=[{prop:`items`,description:`主推荐入口。每项支持 href、title、description、disabled 与 children。`,type:`AnchorItem[]`,defaultValue:`[]`},{prop:`direction`,description:`导航方向，支持 vertical 与 horizontal。`,type:`'vertical' | 'horizontal'`,defaultValue:`vertical`},{prop:`affix / offsetTop`,description:`是否吸附以及吸附偏移，Rue 实现用 sticky 语义实现。`,type:`boolean / number`,defaultValue:`true / 0`},{prop:`getContainer / targetOffset`,description:`指定滚动容器，并控制点击滚动时的目标偏移。`,type:`() => HTMLElement | Window / number`,defaultValue:`window / offsetTop`},{prop:`bounds`,description:`滚动命中的容差，避免边界抖动。`,type:`number`,defaultValue:`5`},{prop:`getCurrentAnchor`,description:`将实际命中的 href 映射成展示高亮 href，适合章节归并。`,type:`(activeLink: string) => string`,defaultValue:`-`},{prop:`onChange / onClick`,description:`分别监听激活项变化和条目点击。`,type:`(href: string) => void / (event, link) => void`,defaultValue:`-`},{prop:`classNames / styles`,description:`对 root、list、item、link、title、description、indicator 进行语义化定制。`,type:`object`,defaultValue:`-`},{prop:`children / Anchor.Link`,description:`提供结构化 children 回退；在 Rue 编译参与模式下，增强滚动高亮请优先使用 items。`,type:`any`,defaultValue:`-`}],W=()=>_(r(Object.assign(e=>{let n=D().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],o=r.parentNode,l=n.childNodes[1].childNodes[0],u=l.parentNode,d=[];y(()=>{d=t(o,r,d,N||[],(e,t)=>e.id,(e,t)=>{let n=c(e),r=c(t);return s((e,t,r)=>b(e,r,()=>i(M,()=>({section:n.get()}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let f=h(u);return a(f,S,()=>({offsetTop:24,items:N.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.summary}))})),u.insertBefore(f,l),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{})),G=()=>{let e=m(`ContainerPreview:hook:0`);return o(()=>_(r(Object.assign(r=>{let o=O().content.cloneNode(!0).firstChild,l=o.childNodes[1],u=o.childNodes[0],d=u.parentNode,f=o.childNodes[1].childNodes[0].childNodes[0],p=f.parentNode,m=e;typeof m==`function`?m(l):m&&typeof m==`object`&&`current`in m&&(m.current=l),n(()=>{typeof m==`function`?m(null):m&&typeof m==`object`&&`current`in m&&(m.current=null)}),l.className=`h-[30rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`;let g=h(d);a(g,S,()=>({affix:!1,targetOffset:20,getContainer:()=>e.current,items:P.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.tag}))})),d.insertBefore(g,u);let _=[];return y(()=>{_=t(p,f,_,P||[],(e,t)=>e.id,(e,t)=>{let n=c(e),r=c(t);return s((e,t,r)=>b(e,r,()=>i(M,()=>({section:n.get(),dense:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{})))},K=()=>{let e=m(`HorizontalPreview:hook:0`);return o(()=>_(r(Object.assign(r=>{let o=k().content.cloneNode(!0).firstChild,l=o.childNodes[1],u=o.childNodes[0],d=u.parentNode,f=o.childNodes[1].childNodes[0].childNodes[0],p=f.parentNode,m=e;typeof m==`function`?m(l):m&&typeof m==`object`&&`current`in m&&(m.current=l),n(()=>{typeof m==`function`?m(null):m&&typeof m==`object`&&`current`in m&&(m.current=null)}),l.className=`h-[26rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`;let g=h(d);a(g,S,()=>({affix:!1,direction:`horizontal`,getContainer:()=>e.current,getCurrentAnchor:e=>e===`#schema-notes`?`#schema`:e,items:I.map(e=>({key:e.id,href:`#${e.id}`,title:e.title}))})),d.insertBefore(g,u);let _=[];return y(()=>{_=t(p,f,_,F||[],(e,t)=>e.id,(e,t)=>{let n=c(e),r=c(t);return s((e,t,r)=>b(e,r,()=>i(M,()=>({section:n.get(),dense:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{})))},q=()=>_(i(C,()=>({children:(e,t,n)=>b(e,n,()=>r(Object.assign(e=>{let t=g(),n=A().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[3],o=i.parentNode,s=r.childNodes[4],c=s.parentNode,l=r.childNodes[5],u=l.parentNode,d=r.childNodes[7],f=d.parentNode;t.appendChild(n);let p=h(o);a(p,w,()=>({title:`基础吸顶导航`,summary:`默认是纵向吸顶模式，适合长文档、报告页和参数配置页。`,tab:L,preview:W,code:B})),o.insertBefore(p,i);let m=h(c);a(m,w,()=>({title:`局部滚动容器`,summary:`把 Anchor 绑定到自定义滚动面板，而不是整个 window。`,tab:R,preview:G,code:V})),c.insertBefore(m,s);let _=h(u);a(_,w,()=>({title:`横向模式与高亮映射`,summary:`顶部锚点条更适合章节较少的页面，同时可以用 getCurrentAnchor 归并多个小节。`,tab:z,preview:K,code:H})),u.insertBefore(_,l);let v=h(f);return a(v,j,()=>({rows:U})),f.insertBefore(v,d),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),e=>x(()=>{}));export{q as default};