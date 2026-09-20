import{Bt as e,F as t,P as n,V as r,Vt as i,W as a,Wt as o,f as s,fn as c,g as l,gn as u,h as d,hn as f,in as p,m,mn as h,p as g,pn as _,qt as v,sn as y,yn as b,zt as x}from"./rue-runtime-BWbIfNT8.js";import{n as S}from"./rue-router-CYQ14Isv.js";import{t as C}from"./Code-C5ZhIIr9.js";var w=b(`<div class="mx-auto max-w-[1180px]"><section class="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center"><div><div class="inline-flex items-center gap-2 rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-600">Rue ecosystem framework</div><h1 class="mt-6 text-5xl font-black leading-tight text-base-content md:text-7xl">Text.js</h1><p class="mt-5 max-w-3xl text-lg leading-8 text-base-content/72 md:text-xl">Text.js 是 Rue 生态中的全栈应用框架。它基于 Vite、Rue、RSC 与文件系统路由，把 App Router、Pages Router、SSR、API 路由和 Workers 部署整合成一条轻量开发路径。 设计上参考 Vercel 的 Next.js，并基于 Cloudflare 的 vinext 与 Workers 运行时继续演进。</p><div class="mt-8 flex flex-wrap gap-3"><a href="https://www.npmjs.com/package/@rue-js/text" target="_blank" rel="noreferrer" class="btn btn-primary">安装 @rue-js/text</a><a href="https://github.com/hunzhiwange/ruejs/tree/main/packages/text" target="_blank" rel="noreferrer" class="btn btn-outline">查看源码</a><!--rue:opaque-hole:0--></div></div><div class="overflow-hidden rounded-lg border border-base-300 bg-slate-950 shadow-xl"><div class="flex items-center justify-between border-b border-white/10 px-4 py-3"><div class="flex gap-2"><span class="h-3 w-3 rounded-full bg-rose-400"></span><span class="h-3 w-3 rounded-full bg-amber-400"></span><span class="h-3 w-3 rounded-full bg-emerald-400"></span></div><span class="text-xs text-white/45">text app</span></div><!--rue:opaque-hole:1--></div></section><section class="grid gap-4 md:grid-cols-3"><!--rue:text-hole:2--></section><section class="mt-14"><div class="max-w-3xl"><div class="text-sm font-semibold text-primary">Based on Vercel and Cloudflare</div><h2 class="mt-3 text-3xl font-bold text-base-content">熟悉的应用模型，面向边缘运行时</h2><p class="mt-4 text-base leading-7 text-base-content/70">Text.js 不是从零发明一套全栈约定，而是把 Vercel Next.js 的应用框架经验、Cloudflare vinext 的 Vite-first / Workers 部署路径，与 Rue 的 JSX / TSX 运行时组合到同一套工具链里。</p></div><div class="mt-6 grid gap-4 md:grid-cols-3"><!--rue:text-hole:3--></div></section><section class="mt-14 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]"><div><div class="text-sm font-semibold text-primary">Why Text.js</div><h2 class="mt-3 text-3xl font-bold text-base-content">同一个 Rue 应用，扩展到全栈</h2><p class="mt-4 text-base leading-7 text-base-content/70">参考 vinext 的 Vite-first 思路，Text.js 把熟悉的文件系统约定放到 Rue 运行时之上。保留简单组件开发体验，同时补齐服务端、路由和部署层。</p></div><div class="grid gap-4 md:grid-cols-2"><!--rue:text-hole:4--></div></section><section class="mt-14 grid gap-6 lg:grid-cols-2"><div class="overflow-hidden rounded-lg border border-base-300 bg-base-100"><div class="border-b border-base-300 px-5 py-4"><h2 class="text-xl font-semibold text-base-content">路由与 API</h2><p class="mt-2 text-sm text-base-content/65">从页面到接口都沿用 app 目录约定，动态参数和 route handler 放在同一套图谱里。</p></div><!--rue:opaque-hole:5--></div><div class="overflow-hidden rounded-lg border border-base-300 bg-base-100"><div class="border-b border-base-300 px-5 py-4"><h2 class="text-xl font-semibold text-base-content">CLI 与部署</h2><p class="mt-2 text-sm text-base-content/65">text 命令负责开发、构建、检查、类型生成和 Cloudflare Workers 部署。</p></div><!--rue:opaque-hole:6--></div></section><section class="mt-14"><div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><div class="text-sm font-semibold text-primary">Demo source</div><h2 class="mt-3 text-3xl font-bold text-base-content">可直接查看的 Text.js 示例源码</h2><p class="mt-4 max-w-3xl text-base leading-7 text-base-content/70">仓库内提供了 SSR 博客和静态导出两个 demo，用同一套 App Router 约定覆盖服务端渲染、API 路由、客户端交互、动态路由预渲染和纯静态文件交付。</p></div><a href="https://github.com/hunzhiwange/ruejs/tree/main/examples" target="_blank" rel="noreferrer" class="btn btn-outline">查看全部 examples</a></div><div class="mt-6 grid gap-6 lg:grid-cols-2"><!--rue:text-hole:7--></div></section><section class="mt-14 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-6 md:flex md:items-center md:justify-between"><div><h2 class="text-2xl font-bold text-base-content">从 Rue 组件到全栈应用</h2><p class="mt-3 max-w-2xl text-sm leading-6 text-base-content/70">安装 @rue-js/text 后，创建 app/page.tsx 即可启动。多数项目不需要手动维护 Vite 配置，Text.js 会自动组织 Rue 插件与应用路由。</p></div><a href="https://github.com/hunzhiwange/ruejs/tree/main/packages/text" target="_blank" rel="noreferrer" class="btn btn-primary mt-5 md:mt-0">开始了解 Text.js</a></section></div>`),T=`// app/page.tsx
export default function Page() {
  return <main>Hello Text.js</main>
}

// package.json
{
  "scripts": {
    "dev": "text dev",
    "build": "text build",
    "start": "text start",
    "deploy": "text deploy"
  }
}`,E=`text dev       # 启动开发服务器
text build     # 构建生产产物
text start     # 启动生产服务器
text preview   # text start 的别名
text deploy    # 部署到 Cloudflare Workers
text typegen   # 生成 App Router 路由类型
text lint      # 调用项目中的 eslint / oxlint
text init      # 初始化部署相关配置
text check     # 检查 Text.js 兼容性`,D=`// app/blog/[slug]/page.tsx
export default function BlogPage({ params }: { params: { slug: string } }) {
  return <article>{params.slug}</article>
}

// app/api/hello/route.ts
export function GET() {
  return Response.json({ message: 'Hello from Text.js' })
}`,O=`// examples/text-blog-ssr/app/page.tsx
import TopicFilter from '../components/TopicFilter'
import { getTags, getTopics, posts } from '../lib/posts'

export default function HomePage() {
  const renderedAt = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return (
    <main>
      <section className="intro">
        <p className="eyebrow">Server-rendered demo</p>
        <h1>A small blog running on Text.js</h1>
        <a href="/blog/rendering-notes">Read the featured post</a>
        <a href="/blog">Browse all posts</a>
        <a href="/api/posts">View API response</a>
        <span>Rendered at {renderedAt}</span>
      </section>

      <TopicFilter posts={posts} topics={getTopics()} tags={getTags()} />
    </main>
  )
}

// examples/text-blog-ssr/app/api/posts/route.ts
export function GET() {
  return Response.json({ count: posts.length, posts })
}`,k=`// examples/text-static-export/text.config.mjs
export default {
  output: 'export',
}

// examples/text-static-export/app/guides/[slug]/page.tsx
export function generateStaticParams() {
  return guides.map(guide => ({ slug: guide.slug }))
}

export default async function GuidePage({ params }) {
  const guide = getGuide((await params).slug)
  if (!guide) notFound()

  return (
    <main className="narrow">
      <Link href="/">Back home</Link>
      <h1>{guide.title}</h1>
      <ol>{guide.steps.map(step => <li key={step}>{step}</li>)}</ol>
    </main>
  )
}`,A=[{value:`App + Pages`,label:`文件系统路由`,description:`同时覆盖 App Router 与 Pages Router，适合渐进迁移。`},{value:`Vite + Rue`,label:`默认构建基础`,description:`自动接入 Rue JSX / TSX、Vite 插件与开发服务器。`},{value:`Workers`,label:`边缘部署`,description:`通过 text deploy 输出 Cloudflare Workers 应用。`}],j=[{name:`Vercel / Next.js`,description:`Text.js 的应用路由、layout、route handler、metadata、redirects 等能力参考 Vercel 的 Next.js 应用模型。`,href:`https://github.com/vercel/next.js`},{name:`Cloudflare / vinext`,description:`Text.js 基于 Cloudflare 的 vinext 思路继续演进，将 Vite-first 构建和 Workers 部署收束到 Rue 生态。`,href:`https://github.com/cloudflare/vinext`},{name:`Rue runtime`,description:`Rue 提供 JSX / TSX、响应式能力和渲染运行时，Text.js 负责服务端渲染、路由、构建编排与部署适配。`,href:`https://github.com/hunzhiwange/ruejs`}],ee=[{title:`熟悉的全栈应用模型`,description:`以 Vercel Next.js 应用模型为参照，提供 layout、page、route handler、middleware、redirects、rewrites 和 headers 等能力。`},{title:`Rue 原生的 JSX / TSX 工作流`,description:`页面和组件继续使用 Rue 的响应式能力与 JSX 表达方式，Text.js 负责路由、渲染、构建编排和部署适配。`},{title:`面向 RSC 与服务端渲染`,description:`支持 React Server Components 风格的服务端组件工作流，并为 SSR、静态生成与客户端交互保留统一入口。`},{title:`兼容常见 text/* 入口`,description:`内置 text/navigation、text/link、text/image、text/headers、text/cache 等 shim，降低生态适配成本。`}],te=[{title:`Blog SSR Demo`,label:`examples/text-blog-ssr`,description:`一个 App Router 博客示例，首页与文章页走服务端渲染，同时包含 /api/posts route handler、客户端主题筛选和本地点赞组件。`,commands:`pnpm --dir examples/text-blog-ssr dev
pnpm --dir examples/text-blog-ssr build
pnpm --dir examples/text-blog-ssr start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-blog-ssr`,code:O},{title:`Static Export Demo`,label:`examples/text-static-export`,description:`一个知识库静态导出示例，通过 output: "export" 在 text build 时预渲染全部路由，包括动态 guide 页面。`,commands:`pnpm --dir examples/text-static-export dev
pnpm --dir examples/text-static-export build
pnpm --dir examples/text-static-export start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-static-export`,code:k}],M=(O,k,M)=>o(O=>{let k=w().content.cloneNode(!0).firstChild,M=k.childNodes[0].childNodes[0].childNodes[3].childNodes[2],N=M.parentNode,P=k.childNodes[0].childNodes[1].childNodes[1],F=P.parentNode,I=k.childNodes[1].childNodes[0],ne=I.parentNode,L=k.childNodes[2].childNodes[1].childNodes[0],re=L.parentNode,R=k.childNodes[3].childNodes[1].childNodes[0],ie=R.parentNode,z=k.childNodes[4].childNodes[0].childNodes[1],B=z.parentNode,V=k.childNodes[4].childNodes[1].childNodes[1],H=V.parentNode,U=k.childNodes[5].childNodes[1].childNodes[0],W=U.parentNode,G=(e,t,a)=>{let o=()=>n(S,()=>({to:`/guide/guide/scaling-up/tooling`,className:`btn btn-ghost`,children:(e,t,n)=>{let a=()=>r(e=>{let t=h();c(t,u(`工具链文档`));let n=u(``),r=u(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}}));return e==null?o():i(e,a,o)},K=M.nextSibling;N.removeChild(M),e({parent:N,before:K},()=>G,()=>({}));let q=(e,t,r)=>{let a=()=>n(C,()=>({className:`h-[390px]`,lang:`tsx`,code:T}));return e==null?a():i(e,r,a)},J=P.nextSibling;F.removeChild(P),e({parent:F,before:J},()=>q,()=>({}));let ae=b(`<div class="rounded-lg border border-base-300 bg-base-100 p-5"><div class="text-2xl font-black text-base-content">rue:row-text</div><div class="mt-2 text-sm font-semibold text-primary">rue:row-text</div><p class="mt-3 text-sm leading-6 text-base-content/68">rue:row-text</p></div>`),Y=[];v(()=>{Y=l(ne,I,Y,A||[],(e,t)=>e.label,(e,t,n)=>{let r=e,i;return m(e=>{let t=ae().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0];n.parentNode;let a=t.childNodes[1].childNodes[0];a.parentNode;let o=t.childNodes[2].childNodes[0];o.parentNode;let s=r.value==null||typeof r.value==`boolean`?``:String(r.value);n.textContent=s;let c=r.label==null||typeof r.label==`boolean`?``:String(r.label);a.textContent=c;let l=r.description==null||typeof r.description==`boolean`?``:String(r.description);return o.textContent=l,i=()=>{{let e=r.value==null||typeof r.value==`boolean`?``:String(r.value);Object.is(s,e)||(n.textContent=e,s=e)}{let e=r.label==null||typeof r.label==`boolean`?``:String(r.label);Object.is(c,e)||(a.textContent=e,c=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(l,e)||(o.textContent=e,l=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),y(()=>s(Y));let oe=b(`<a target="_blank" rel="noreferrer" class="rounded-lg border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"><h3 class="text-lg font-semibold text-base-content"><!--rue:text-hole:0--></h3><p class="mt-3 text-sm leading-6 text-base-content/68">rue:row-text</p></a>`),X=[];v(()=>{X=l(re,L,X,j||[],(e,t)=>e.name,(e,t,n)=>{let r=e,i;return m(e=>{let t=oe().content.cloneNode(!0).firstChild,n=t,a=t.childNodes[0].childNodes[0],o=a.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c;{let e=r.href;Object.is(c,e)||(c=e,e==null||e===!1?n.removeAttribute(`href`):n.setAttribute(`href`,String(e)))}n.setAttribute(`target`,`_blank`),n.setAttribute(`rel`,`noreferrer`),n.setAttribute(`class`,`rounded-lg border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let l=u(``);o.insertBefore(l,a),o.removeChild(a);let d=r.name==null||typeof r.name==`boolean`?``:String(r.name);l.textContent=d;let f=r.description==null||typeof r.description==`boolean`?``:String(r.description);return s.textContent=f,i=()=>{{let e=r.href;Object.is(c,e)||(c=e,e==null||e===!1?n.removeAttribute(`href`):n.setAttribute(`href`,String(e)))}{let e=r.name==null||typeof r.name==`boolean`?``:String(r.name);Object.is(d,e)||(l.textContent=e,d=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(f,e)||(s.textContent=e,f=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),y(()=>s(X));let se=b(`<article class="rounded-lg border border-base-300 bg-base-100 p-5"><h3 class="text-lg font-semibold text-base-content"><!--rue:text-hole:0--></h3><p class="mt-3 text-sm leading-6 text-base-content/68">rue:row-text</p></article>`),Z=[];v(()=>{Z=l(ie,R,Z,ee||[],(e,t)=>e.title,(e,t,n)=>{let r=e,i;return m(e=>{let t=se().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],a=n.parentNode,o=t.childNodes[1].childNodes[0];o.parentNode;let s=u(``);a.insertBefore(s,n),a.removeChild(n);let c=r.title==null||typeof r.title==`boolean`?``:String(r.title);s.textContent=c;let l=r.description==null||typeof r.description==`boolean`?``:String(r.description);return o.textContent=l,i=()=>{{let e=r.title==null||typeof r.title==`boolean`?``:String(r.title);Object.is(c,e)||(s.textContent=e,c=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(l,e)||(o.textContent=e,l=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),y(()=>s(Z));let Q=(e,t,r)=>{let a=()=>n(C,()=>({className:`h-[300px]`,lang:`tsx`,code:D}));return e==null?a():i(e,r,a)},ce=z.nextSibling;B.removeChild(z),e({parent:B,before:ce},()=>Q,()=>({}));let le=(e,t,r)=>{let a=()=>n(C,()=>({className:`h-[300px]`,lang:`sh`,code:E}));return e==null?a():i(e,r,a)},ue=V.nextSibling;H.removeChild(V),e({parent:H,before:ue},()=>le,()=>({}));let $=[];return v(()=>{$=d(W,U,$,te||[],(e,t)=>e.label,(n,r)=>{let s=a(n);return g((n,r,a)=>{let l=()=>o(n=>{let r=f(`article`,n);r.setAttribute(`class`,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let i=f(`div`,r);c(r,i),i.setAttribute(`class`,`border-b border-base-300 px-5 py-4`);let a=f(`div`,i);c(i,a),a.setAttribute(`class`,`text-xs font-semibold uppercase tracking-wide text-primary`);let o=_(`rue:compiled-slot`);c(a,o),e({parent:a,before:o},()=>x(s.get().label),()=>({}));let l=f(`h3`,i);c(i,l),l.setAttribute(`class`,`mt-2 text-xl font-semibold text-base-content`);let d=_(`rue:compiled-slot`);c(l,d),e({parent:l,before:d},()=>x(s.get().title),()=>({}));let m=f(`p`,i);c(i,m),m.setAttribute(`class`,`mt-2 text-sm leading-6 text-base-content/65`);let h=_(`rue:compiled-slot`);c(m,h),e({parent:m,before:h},()=>x(s.get().description),()=>({}));let g=f(`div`,i);c(i,g),g.setAttribute(`class`,`mt-4 flex flex-wrap gap-3`);let v=f(`a`,g);c(g,v);let y;p(()=>{let e=s.get().href;Object.is(y,e)||(y=e,e==null||e===!1?v.removeAttribute(`href`):v.setAttribute(`href`,String(e)))}),v.setAttribute(`target`,`_blank`),v.setAttribute(`rel`,`noreferrer`),v.setAttribute(`class`,`btn btn-sm btn-primary`),c(v,u(`查看源码`));let b=f(`div`,r);c(r,b),b.setAttribute(`class`,`border-b border-base-300 bg-base-200/60 px-5 py-4`);let S=f(`div`,b);c(b,S),S.setAttribute(`class`,`text-xs font-semibold text-base-content/55`),c(S,u(`运行命令`));let w=f(`pre`,b);c(b,w),w.setAttribute(`class`,`mt-3 overflow-x-auto rounded-lg bg-slate-950 px-4 py-3 text-xs leading-6 text-slate-100`);let T=f(`code`,w);c(w,T);let E=_(`rue:compiled-slot`);return c(T,E),e({parent:T,before:E},()=>x(s.get().commands),()=>({})),t(r,C,()=>({className:`[&_pre]:pt-12 [&_.shiki]:pt-12`,lang:`tsx`,code:s.get().code})),[r,r]});return n==null?l():i(n,a,l)},(e,t)=>{n=e,r=t,s.set(e)},void 0)},!1,!1)}),y(()=>s($)),[k,k]});export{M as default};