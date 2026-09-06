import{C as e,Dn as t,E as n,Vt as r,Wt as i,_n as a,_t as o,at as s,b as c,ct as l,et as u,gn as d,hn as f,pn as p,qt as m,rt as h,sn as g,st as _,tn as v,vn as y,w as b,wn as x,x as S,xn as C}from"./rue-runtime-HIMg8Lz8.js";import{n as w}from"./persistentSidebarPlayground-Cxg462lX.js";import{r as T}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as E}from"./PreviewBlock-Dc0KnPUP.js";var D=y(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),O=y(`<section><div class="flex flex-wrap items-start justify-between gap-3"><div><div class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-base-content/45"><!--rue:text-hole:0--></div><h3 class="mb-2 mt-2 text-xl font-semibold text-base-content"><!--rue:text-hole:1--></h3><p class="m-0 max-w-2xl text-sm leading-6 text-base-content/72"><!--rue:text-hole:2--></p></div><div class="rounded-2xl border border-base-300/70 bg-base-100/80 px-3 py-2 text-right shadow-sm"><div class="text-[0.68rem] uppercase tracking-[0.18em] text-base-content/45">Signal</div><div class="mt-1 text-lg font-semibold text-base-content"><!--rue:text-hole:3--></div></div></div><div class="mt-5 flex flex-wrap items-center gap-2"><span class="badge badge-outline rounded-full"><!--rue:text-hole:4--></span><span class="badge badge-ghost rounded-full">Anchor Section</span></div><div class="mt-5 grid gap-3 md:grid-cols-3"><!--rue:text-hole:5--></div></section>`),k=y(`<div class="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]"><div class="space-y-4"><!--rue:text-hole:0--></div><div class="lg:pl-2"><!--rue:opaque-hole:1--></div></div>`),A=y(`<div class="grid gap-6 lg:grid-cols-[16rem_minmax(0,1fr)]"><!--rue:opaque-hole:0--><div class="h-[30rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]"><div class="space-y-4 pr-1"><!--rue:text-hole:1--></div></div></div>`),j=y(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="h-[26rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]"><div class="space-y-4 pr-1"><!--rue:text-hole:1--></div></div></div>`),M=y('<div class="max-w-none prose prose-sm md:prose-base"><h1>Anchor 锚点导航</h1><p class="text-sm mt-3 mb-3">Rue 版 Anchor 保持锚点导航的核心能力：items、滚动激活、局部容器、受控高亮与横向模式； 视觉上换成更适合 Rue 站点的卡片式导航，不直接复制细线目录样式。</p><div role="alert" class="alert alert-soft alert-info not-prose my-6"><span>`items` 是完整增强路径。`Anchor.Link` children 仍然可用，但在 Rue 编译参与模式下会作为结构化回退渲染；需要完整滚动注册和高亮映射时，优先传 `items`。</span></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><h2>API</h2><!--rue:opaque-hole:3--></div>'),N=e=>{let n=s(e.rows);return l(r(Object.assign(e=>{let r=D().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],o=i.parentNode,s=y(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),l=[];return x(()=>{let e=n.get()||[];l=b(o,i,l,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return S(e=>{let t=s().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,c=t.childNodes[1].childNodes[0];c.data=``,c.parentNode;let l=t.childNodes[2].childNodes[0].childNodes[0],u=l.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=a(``);o.insertBefore(p,n),o.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}let g=a(``);u.insertBefore(g,l),u.removeChild(l);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=a(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(c.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>c(l)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{n.set(e.rows)}),()=>e)},P=i=>{let o=s(i.dense),f=s(i.section);return l(r(Object.assign(i=>{let l=O().content.cloneNode(!0).firstChild,u=l,m=l.childNodes[0].childNodes[0].childNodes[0].childNodes[0],h=m.parentNode,g=l.childNodes[0].childNodes[0].childNodes[1].childNodes[0],_=g.parentNode,v=l.childNodes[0].childNodes[0].childNodes[2].childNodes[0],y=v.parentNode,S=l.childNodes[0].childNodes[1].childNodes[1].childNodes[0],w=S.parentNode,T=l.childNodes[1].childNodes[0].childNodes[0],E=T.parentNode,D=l.childNodes[2].childNodes[0],k=D.parentNode,A;x(()=>{let e=f.get().id;Object.is(A,e)||(A=e,e==null||e===!1?u.removeAttribute(`id`):u.setAttribute(`id`,String(e)))});let j;x(()=>{let e=`scroll-mt-28 rounded-[1.6rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)] ${o.get()?`p-5`:`p-6 md:p-7`}`,t=e==null?``:String(e);Object.is(j,t)||(j=t,u.className=t)});let M=a(``);h.insertBefore(M,m),h.removeChild(m),C(M,()=>f.get().eyebrow);let N=a(``);_.insertBefore(N,g),_.removeChild(g),C(N,()=>f.get().title);let P=a(``);y.insertBefore(P,v),y.removeChild(v),C(P,()=>f.get().summary);let F=a(``);w.insertBefore(F,S),w.removeChild(S),C(F,()=>f.get().metric);let I=a(``);E.insertBefore(I,T),E.removeChild(T),C(I,()=>f.get().tag);let L=[];return x(()=>{let t=f.get().points||[];L=b(k,D,L,t,(e,t)=>e,(t,i)=>{let o=s(t);return e((e,t,i)=>n(e,i,()=>r(Object.assign(e=>{let t=d(`div`,e);t.className=`rounded-2xl border border-base-300/65 bg-base-100/75 px-4 py-3 text-sm leading-6 text-base-content/75`;let n=a(``);return p(t,n),C(n,()=>o.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n)=>{t=e,i=n,o.set(e)})})}),t(()=>c(L)),{__rue_compiled_host:l,__rue_compiled_roots:[l]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{o.set(e.dense),f.set(e.section)}),()=>i)},F=[{id:`overview`,eyebrow:`Chapter 01`,title:`项目全景`,summary:`把长文档拆成可扫描的几段之后，Anchor 负责给读者一个稳定的阅读坐标。`,points:[`适合文档、报告、配置中心等长页面。`,`激活态跟随滚动同步更新。`,`保持 Rue 自己的卡片化导航外观。`],metric:`4 blocks`,tag:`Base`},{id:`rhythm`,eyebrow:`Chapter 02`,title:`内容节奏`,summary:`每段都带一组短卡片，方便在示例 里快速看到滚动命中与视觉反馈。`,points:[`段落标题支持任意 renderable。`,`可以挂描述文字，适合多层说明。`,`active 状态不依赖外部状态管理。`],metric:`Sticky`,tag:`Scroll`},{id:`api`,eyebrow:`Chapter 03`,title:`能力边界`,summary:`Anchor 的核心能力集中在页内导航、滚动定位和高亮控制，避免越权成完整目录树。`,points:["支持 `items` 驱动和自定义容器。","支持 `getCurrentAnchor` 做分组高亮。","可通过 `classNames / styles` 继续定制。"],metric:`API-first`,tag:`Control`}],I=[{id:`brief`,eyebrow:`Module A`,title:`Brief Intake`,summary:`将阅读区域限制在一个滚动面板内，适合右侧固定大纲 + 左侧局部滚动的详情页。`,points:["`getContainer` 指向任意滚动容器。","`targetOffset` 可以和容器内头部高度对齐。",`不需要监听页面外层滚动。`],metric:`Local`,tag:`Container`},{id:`system`,eyebrow:`Module B`,title:`System Draft`,summary:`容器滚动的 active 计算独立于 window，适合 modal、drawer、侧栏等局部视图。`,points:[`点击导航后只滚动局部面板。`,`不会污染页面 hash 路由。`,`可关闭 affix，让导航留在布局流中。`],metric:`Panel`,tag:`Scoped`},{id:`delivery`,eyebrow:`Module C`,title:`Delivery Notes`,summary:`同一套 items 可以同时服务桌面右侧导航和移动端顶部锚点条。`,points:[`适合在复杂后台页中复用。`,`结构清晰时滚动命中更稳定。`,`推荐结合语义化 section id。`],metric:`Stable`,tag:`Reuse`}],L=[{id:`kickoff`,eyebrow:`Flow 01`,title:`Kickoff`,summary:`先建立整体范围，再决定哪些区块要合并成同一个高亮入口。`,points:[`横向模式更适合章节较少的页面。`,`适合和内容页头一起展示。`,`高亮映射可用于把多个子段落归并。`],metric:`Top Bar`,tag:`Horizontal`},{id:`schema`,eyebrow:`Flow 02`,title:`Schema`,summary:`这里开始进入实现细节，补充的 Schema Notes 小节不会单独占一个顶部入口。`,points:["`getCurrentAnchor` 接收滚动命中的基础 href。",`可以把多个实际 section 映射到同一个展示入口。`,`用于简化顶部导航颗粒度。`],metric:`Merged`,tag:`Mapping`},{id:`schema-notes`,eyebrow:`Flow 02B`,title:`Schema Notes`,summary:`这个补充段不出现在顶部导航里，但滚动进入它时仍然使用 Schema 的高亮。`,points:[`适合把补充说明、FAQ、边界条件并回父级入口。`,`不会额外占一个横向导航位。`,`点击其他可见导航项时，active 仍然命中各自本身。`],metric:`Carry`,tag:`Alias`},{id:`adapter`,eyebrow:`Flow 03`,title:`Adapter`,summary:`第三项保持独立入口，点击后会命中自身，不再被错误归并到前一个导航项。`,points:[`适合承接真正需要独立定位的章节。`,`与上一个补充小节的高亮归并互不冲突。`,`更符合顶部导航的点击预期。`],metric:`Direct`,tag:`Stable`},{id:`handoff`,eyebrow:`Flow 04`,title:`Handoff`,summary:`尾段保持独立高亮，让读者知道自己已经进入交付与收口阶段。`,points:[`横向模式默认只展示单层 items。`,`点击后仍然走同一套滚动逻辑。`,`视觉上更接近标签导航而不是侧栏目录。`],metric:`Final`,tag:`Finish`}],R=[{id:`kickoff`,title:`Kickoff`},{id:`schema`,title:`Schema`},{id:`adapter`,title:`Adapter`},{id:`handoff`,title:`Handoff`}],z=g(`ref:1:0`,()=>v(`preview`)),B=g(`ref:1:1`,()=>v(`preview`)),V=g(`ref:1:2`,()=>v(`preview`)),H=`import { Anchor } from '@rue-js/design'

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
</div>`,U=`import { useRef } from '@rue-js/rue'
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
</div>`,W=`import { useRef } from '@rue-js/rue'
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
</div>`,G=[{prop:`items`,description:`主推荐入口。每项支持 href、title、description、disabled 与 children。`,type:`AnchorItem[]`,defaultValue:`[]`},{prop:`direction`,description:`导航方向，支持 vertical 与 horizontal。`,type:`'vertical' | 'horizontal'`,defaultValue:`vertical`},{prop:`affix / offsetTop`,description:`是否吸附以及吸附偏移，Rue 实现用 sticky 语义实现。`,type:`boolean / number`,defaultValue:`true / 0`},{prop:`getContainer / targetOffset`,description:`指定滚动容器，并控制点击滚动时的目标偏移。`,type:`() => HTMLElement | Window / number`,defaultValue:`window / offsetTop`},{prop:`bounds`,description:`滚动命中的容差，避免边界抖动。`,type:`number`,defaultValue:`5`},{prop:`getCurrentAnchor`,description:`将实际命中的 href 映射成展示高亮 href，适合章节归并。`,type:`(activeLink: string) => string`,defaultValue:`-`},{prop:`onChange / onClick`,description:`分别监听激活项变化和条目点击。`,type:`(href: string) => void / (event, link) => void`,defaultValue:`-`},{prop:`classNames / styles`,description:`对 root、list、item、link、title、description、indicator 进行语义化定制。`,type:`object`,defaultValue:`-`},{prop:`children / Anchor.Link`,description:`提供结构化 children 回退；在 Rue 编译参与模式下，增强滚动高亮请优先使用 items。`,type:`any`,defaultValue:`-`}],K=()=>l(r(Object.assign(r=>{let i=k().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],o=a.parentNode,l=i.childNodes[1].childNodes[0],u=l.parentNode,d=[];x(()=>{d=b(o,a,d,F||[],(e,t)=>e.id,(t,r)=>{let i=s(t);return e((e,t,r)=>n(e,r,()=>h(P,()=>({section:i.get()}))),(e,n)=>{t=e,r=n,i.set(e)})})}),t(()=>c(d));let p=f(u);return _(p,w,()=>({offsetTop:24,items:F.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.summary}))})),u.insertBefore(p,l),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{})),q=()=>{let a=i(`ContainerPreview:hook:0`);return m(()=>l(r(Object.assign(r=>{let i=A().content.cloneNode(!0).firstChild,o=i.childNodes[1],l=i.childNodes[0],u=l.parentNode,d=i.childNodes[1].childNodes[0].childNodes[0],p=d.parentNode,m=a;typeof m==`function`?m(o):m&&typeof m==`object`&&`current`in m&&(m.current=o),t(()=>{typeof m==`function`?m(null):m&&typeof m==`object`&&`current`in m&&(m.current=null)}),o.className=`h-[30rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`;let g=f(u);_(g,w,()=>({affix:!1,targetOffset:20,getContainer:()=>a.current,items:I.map(e=>({key:e.id,href:`#${e.id}`,title:e.title,description:e.tag}))})),u.insertBefore(g,l);let v=[];return x(()=>{v=b(p,d,v,I||[],(e,t)=>e.id,(t,r)=>{let i=s(t);return e((e,t,r)=>n(e,r,()=>h(P,()=>({section:i.get(),dense:!0}))),(e,n)=>{t=e,r=n,i.set(e)})})}),t(()=>c(v)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{})))},J=()=>{let a=i(`HorizontalPreview:hook:0`);return m(()=>l(r(Object.assign(r=>{let i=j().content.cloneNode(!0).firstChild,o=i.childNodes[1],l=i.childNodes[0],u=l.parentNode,d=i.childNodes[1].childNodes[0].childNodes[0],p=d.parentNode,m=a;typeof m==`function`?m(o):m&&typeof m==`object`&&`current`in m&&(m.current=o),t(()=>{typeof m==`function`?m(null):m&&typeof m==`object`&&`current`in m&&(m.current=null)}),o.className=`h-[26rem] overflow-auto rounded-[1.7rem] border border-base-300/75 bg-base-100/92 p-4 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.45)]`;let g=f(u);_(g,w,()=>({affix:!1,direction:`horizontal`,getContainer:()=>a.current,getCurrentAnchor:e=>e===`#schema-notes`?`#schema`:e,items:R.map(e=>({key:e.id,href:`#${e.id}`,title:e.title}))})),u.insertBefore(g,l);let v=[];return x(()=>{v=b(p,d,v,L||[],(e,t)=>e.id,(t,r)=>{let i=s(t);return e((e,t,r)=>n(e,r,()=>h(P,()=>({section:i.get(),dense:!0}))),(e,n)=>{t=e,r=n,i.set(e)})})}),t(()=>c(v)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{})))},Y=()=>l(h(T,()=>({children:(e,t,i)=>n(e,i,()=>r(Object.assign(e=>{let t=o(),n=M().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[3],a=i.parentNode,s=r.childNodes[4],c=s.parentNode,l=r.childNodes[5],u=l.parentNode,d=r.childNodes[7],p=d.parentNode;t.appendChild(n);let m=f(a);_(m,E,()=>({title:`基础吸顶导航`,summary:`默认是纵向吸顶模式，适合长文档、报告页和参数配置页。`,tab:z,preview:K,code:H})),a.insertBefore(m,i);let h=f(c);_(h,E,()=>({title:`局部滚动容器`,summary:`把 Anchor 绑定到自定义滚动面板，而不是整个 window。`,tab:B,preview:q,code:U})),c.insertBefore(h,s);let g=f(u);_(g,E,()=>({title:`横向模式与高亮映射`,summary:`顶部锚点条更适合章节较少的页面，同时可以用 getCurrentAnchor 归并多个小节。`,tab:V,preview:J,code:W})),u.insertBefore(g,l);let v=f(p);return _(v,N,()=>({rows:G})),p.insertBefore(v,d),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),e=>u(()=>{}));export{Y as default};