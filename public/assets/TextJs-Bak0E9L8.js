import{Q as e,Vt as t,Z as n,at as r,bt as i,dt as a,it as o,l as s,nt as ee,o as c,pt as l,rt as u,t as d,tn as f,tt as p}from"./vapor-runtime-x7F5M-49.js";import{n as m}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as h}from"./src-BEG41jq3.js";import{t as g}from"./Code-BoXKy3gJ.js";var _=`// app/page.tsx
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
}`,v=`text dev       # 启动开发服务器
text build     # 构建生产产物
text start     # 启动生产服务器
text preview   # text start 的别名
text deploy    # 部署到 Cloudflare Workers
text typegen   # 生成 App Router 路由类型
text lint      # 调用项目中的 eslint / oxlint
text init      # 初始化部署相关配置
text check     # 检查 Text.js 兼容性`,y=`// app/blog/[slug]/page.tsx
export default function BlogPage({ params }: { params: { slug: string } }) {
  return <article>{params.slug}</article>
}

// app/api/hello/route.ts
export function GET() {
  return Response.json({ message: 'Hello from Text.js' })
}`,te=`// examples/text-blog-ssr/app/page.tsx
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
}`,b=`// examples/text-static-export/text.config.mjs
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
}`,x=[{value:`App + Pages`,label:`文件系统路由`,description:`同时覆盖 App Router 与 Pages Router，适合渐进迁移。`},{value:`Vite + Rue`,label:`默认构建基础`,description:`自动接入 Rue JSX / TSX、Vite 插件与开发服务器。`},{value:`Workers`,label:`边缘部署`,description:`通过 text deploy 输出 Cloudflare Workers 应用。`}],S=[{name:`Vercel / Next.js`,description:`Text.js 的应用路由、layout、route handler、metadata、redirects 等能力参考 Vercel 的 Next.js 应用模型。`,href:`https://github.com/vercel/next.js`},{name:`Cloudflare / vinext`,description:`Text.js 基于 Cloudflare 的 vinext 思路继续演进，将 Vite-first 构建和 Workers 部署收束到 Rue 生态。`,href:`https://github.com/cloudflare/vinext`},{name:`Rue runtime`,description:`Rue 提供 JSX / TSX、响应式能力和渲染运行时，Text.js 负责服务端渲染、路由、构建编排与部署适配。`,href:`https://github.com/hunzhiwange/ruejs`}],ne=[{title:`熟悉的全栈应用模型`,description:`以 Vercel Next.js 应用模型为参照，提供 layout、page、route handler、middleware、redirects、rewrites 和 headers 等能力。`},{title:`Rue 原生的 JSX / TSX 工作流`,description:`页面和组件继续使用 Rue 的响应式能力与 JSX 表达方式，Text.js 负责路由、渲染、构建编排和部署适配。`},{title:`面向 RSC 与服务端渲染`,description:`支持 React Server Components 风格的服务端组件工作流，并为 SSR、静态生成与客户端交互保留统一入口。`},{title:`兼容常见 text/* 入口`,description:`内置 text/navigation、text/link、text/image、text/headers、text/cache 等 shim，降低生态适配成本。`}],C=[{title:`Blog SSR Demo`,label:`examples/text-blog-ssr`,description:`一个 App Router 博客示例，首页与文章页走服务端渲染，同时包含 /api/posts route handler、客户端主题筛选和本地点赞组件。`,commands:`pnpm --dir examples/text-blog-ssr dev
pnpm --dir examples/text-blog-ssr build
pnpm --dir examples/text-blog-ssr start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-blog-ssr`,code:te},{title:`Static Export Demo`,label:`examples/text-static-export`,description:`一个知识库静态导出示例，通过 output: "export" 在 text build 时预渲染全部路由，包括动态 guide 页面。`,commands:`pnpm --dir examples/text-static-export dev
pnpm --dir examples/text-static-export build
pnpm --dir examples/text-static-export start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-static-export`,code:b}],w=()=>s(te=>{let b=u(`div`,te);l(b,`mx-auto max-w-[1180px]`);let w=u(`section`,b);e(b,w),l(w,`grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center`);let T=u(`div`,w);e(w,T);let E=u(`div`,T);e(T,E),l(E,`inline-flex items-center gap-2 rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-600`),e(E,o(`Rue ecosystem framework`));let re=u(`h1`,T);e(T,re),l(re,`mt-6 text-5xl font-black leading-tight text-base-content md:text-7xl`),e(re,o(`Text.js`));let ie=u(`p`,T);e(T,ie),l(ie,`mt-5 max-w-3xl text-lg leading-8 text-base-content/72 md:text-xl`),e(ie,o(`Text.js 是 Rue 生态中的全栈应用框架。它基于 Vite、Rue、RSC 与文件系统路由，把 App Router、Pages Router、SSR、API 路由和 Workers 部署整合成一条轻量开发路径。 设计上参考 Vercel 的 Next.js，并基于 Cloudflare 的 vinext 与 Workers 运行时继续演进。`));let D=u(`div`,T);e(T,D),l(D,`mt-8 flex flex-wrap gap-3`);let O=u(`a`,D);e(D,O),a(O,`href`,`https://www.npmjs.com/package/@rue-js/text`),a(O,`target`,`_blank`),a(O,`rel`,`noreferrer`),l(O,`btn btn-primary`),e(O,o(`安装 @rue-js/text`));let k=u(`a`,D);e(D,k),a(k,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),a(k,`target`,`_blank`),a(k,`rel`,`noreferrer`),l(k,`btn btn-outline`),e(k,o(`查看源码`));let A=u(`a`,D);e(D,A),t(()=>{a(A,`href`,String(h.__rueHref(`/guide/guide/scaling-up/tooling`)))}),n(A,`click`,e=>h.__rueOnClick(e,`/guide/guide/scaling-up/tooling`,!1)),l(A,`btn btn-ghost`),e(A,o(`工具链文档`));let j=u(`div`,w);e(w,j),l(j,`overflow-hidden rounded-lg border border-base-300 bg-slate-950 shadow-xl`);let M=u(`div`,j);e(j,M),l(M,`flex items-center justify-between border-b border-white/10 px-4 py-3`);let N=u(`div`,M);e(M,N),l(N,`flex gap-2`);let ae=u(`span`,N);e(N,ae),l(ae,`h-3 w-3 rounded-full bg-rose-400`);let oe=u(`span`,N);e(N,oe),l(oe,`h-3 w-3 rounded-full bg-amber-400`);let se=u(`span`,N);e(N,se),l(se,`h-3 w-3 rounded-full bg-emerald-400`);let ce=u(`span`,M);e(M,ce),l(ce,`text-xs text-white/45`),e(ce,o(`text app`));let le=p(`rue:component:anchor`);e(j,le),t(()=>{let e=d(g,{className:`h-[390px]`,lang:`tsx`,code:_});f(()=>c(e,j,le))});let P=u(`section`,b);e(b,P),l(P,`grid gap-4 md:grid-cols-3`);let ue=p(`rue:list:start`),de=p(`rue:list:end`);e(P,ue),e(P,de);let fe=new Map;t(()=>{fe=m({items:x||[],getKey:(e,t)=>e.label,elements:fe,parent:P,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(n,o,d,m,h)=>{c(s(()=>{let o=ee(),s=u(`div`,o);e(o,s),t(()=>{a(s,`key`,String(n.label))}),l(s,`rounded-lg border border-base-300 bg-base-100 p-5`);let d=u(`div`,s);e(s,d),l(d,`text-2xl font-black text-base-content`);let m=r(d);e(d,m),t(()=>{i(m,n.value)});let h=u(`div`,s);e(s,h),l(h,`mt-2 text-sm font-semibold text-primary`);let g=p(`rue:slot:anchor`);e(h,g),t(()=>{let e=n.label;f(()=>c(e,h,g))});let _=u(`p`,s);e(s,_),l(_,`mt-3 text-sm leading-6 text-base-content/68`);let v=p(`rue:slot:anchor`);return e(_,v),t(()=>{let e=n.description;f(()=>c(e,_,v))}),o}),o,d)}})});let F=u(`section`,b);e(b,F),l(F,`mt-14`);let I=u(`div`,F);e(F,I),l(I,`max-w-3xl`);let pe=u(`div`,I);e(I,pe),l(pe,`text-sm font-semibold text-primary`),e(pe,o(`Based on Vercel and Cloudflare`));let me=u(`h2`,I);e(I,me),l(me,`mt-3 text-3xl font-bold text-base-content`),e(me,o(`熟悉的应用模型，面向边缘运行时`));let he=u(`p`,I);e(I,he),l(he,`mt-4 text-base leading-7 text-base-content/70`),e(he,o(`Text.js 不是从零发明一套全栈约定，而是把 Vercel Next.js 的应用框架经验、Cloudflare vinext 的 Vite-first / Workers 部署路径，与 Rue 的 JSX / TSX 运行时组合到同一套工具链里。`));let L=u(`div`,F);e(F,L),l(L,`mt-6 grid gap-4 md:grid-cols-3`);let ge=p(`rue:list:start`),_e=p(`rue:list:end`);e(L,ge),e(L,_e);let ve=new Map;t(()=>{ve=m({items:S||[],getKey:(e,t)=>e.name,elements:ve,parent:L,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(n,r,i,o,d)=>{c(s(()=>{let r=ee(),i=u(`a`,r);e(r,i),t(()=>{a(i,`key`,String(n.name))}),t(()=>{a(i,`href`,String(n.href))}),a(i,`target`,`_blank`),a(i,`rel`,`noreferrer`),l(i,`rounded-lg border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let o=u(`h3`,i);e(i,o),l(o,`text-lg font-semibold text-base-content`);let s=p(`rue:slot:anchor`);e(o,s),t(()=>{let e=n.name;f(()=>c(e,o,s))});let d=u(`p`,i);e(i,d),l(d,`mt-3 text-sm leading-6 text-base-content/68`);let m=p(`rue:slot:anchor`);return e(d,m),t(()=>{let e=n.description;f(()=>c(e,d,m))}),r}),r,i)}})});let R=u(`section`,b);e(b,R),l(R,`mt-14 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]`);let z=u(`div`,R);e(R,z);let ye=u(`div`,z);e(z,ye),l(ye,`text-sm font-semibold text-primary`),e(ye,o(`Why Text.js`));let be=u(`h2`,z);e(z,be),l(be,`mt-3 text-3xl font-bold text-base-content`),e(be,o(`同一个 Rue 应用，扩展到全栈`));let xe=u(`p`,z);e(z,xe),l(xe,`mt-4 text-base leading-7 text-base-content/70`),e(xe,o(`参考 vinext 的 Vite-first 思路，Text.js 把熟悉的文件系统约定放到 Rue 运行时之上。保留简单组件开发体验，同时补齐服务端、路由和部署层。`));let B=u(`div`,R);e(R,B),l(B,`grid gap-4 md:grid-cols-2`);let Se=p(`rue:list:start`),Ce=p(`rue:list:end`);e(B,Se),e(B,Ce);let we=new Map;t(()=>{we=m({items:ne||[],getKey:(e,t)=>e.title,elements:we,parent:B,before:Ce,singleRoot:!0,trackIndex:!1,start:Se,renderItem:(n,r,i,o,d)=>{c(s(()=>{let r=ee(),i=u(`article`,r);e(r,i),t(()=>{a(i,`key`,String(n.title))}),l(i,`rounded-lg border border-base-300 bg-base-100 p-5`);let o=u(`h3`,i);e(i,o),l(o,`text-lg font-semibold text-base-content`);let s=p(`rue:slot:anchor`);e(o,s),t(()=>{let e=n.title;f(()=>c(e,o,s))});let d=u(`p`,i);e(i,d),l(d,`mt-3 text-sm leading-6 text-base-content/68`);let m=p(`rue:slot:anchor`);return e(d,m),t(()=>{let e=n.description;f(()=>c(e,d,m))}),r}),r,i)}})});let V=u(`section`,b);e(b,V),l(V,`mt-14 grid gap-6 lg:grid-cols-2`);let H=u(`div`,V);e(V,H),l(H,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let U=u(`div`,H);e(H,U),l(U,`border-b border-base-300 px-5 py-4`);let Te=u(`h2`,U);e(U,Te),l(Te,`text-xl font-semibold text-base-content`),e(Te,o(`路由与 API`));let Ee=u(`p`,U);e(U,Ee),l(Ee,`mt-2 text-sm text-base-content/65`),e(Ee,o(`从页面到接口都沿用 app 目录约定，动态参数和 route handler 放在同一套图谱里。`));let De=p(`rue:component:anchor`);e(H,De),t(()=>{let e=d(g,{className:`h-[300px]`,lang:`tsx`,code:y});f(()=>c(e,H,De))});let W=u(`div`,V);e(V,W),l(W,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let G=u(`div`,W);e(W,G),l(G,`border-b border-base-300 px-5 py-4`);let Oe=u(`h2`,G);e(G,Oe),l(Oe,`text-xl font-semibold text-base-content`),e(Oe,o(`CLI 与部署`));let ke=u(`p`,G);e(G,ke),l(ke,`mt-2 text-sm text-base-content/65`),e(ke,o(`text 命令负责开发、构建、检查、类型生成和 Cloudflare Workers 部署。`));let Ae=p(`rue:component:anchor`);e(W,Ae),t(()=>{let e=d(g,{className:`h-[300px]`,lang:`sh`,code:v});f(()=>c(e,W,Ae))});let K=u(`section`,b);e(b,K),l(K,`mt-14`);let q=u(`div`,K);e(K,q),l(q,`flex flex-col gap-4 md:flex-row md:items-end md:justify-between`);let J=u(`div`,q);e(q,J);let je=u(`div`,J);e(J,je),l(je,`text-sm font-semibold text-primary`),e(je,o(`Demo source`));let Me=u(`h2`,J);e(J,Me),l(Me,`mt-3 text-3xl font-bold text-base-content`),e(Me,o(`可直接查看的 Text.js 示例源码`));let Ne=u(`p`,J);e(J,Ne),l(Ne,`mt-4 max-w-3xl text-base leading-7 text-base-content/70`),e(Ne,o(`仓库内提供了 SSR 博客和静态导出两个 demo，用同一套 App Router 约定覆盖服务端渲染、API 路由、客户端交互、动态路由预渲染和纯静态文件交付。`));let Y=u(`a`,q);e(q,Y),a(Y,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/examples`),a(Y,`target`,`_blank`),a(Y,`rel`,`noreferrer`),l(Y,`btn btn-outline`),e(Y,o(`查看全部 examples`));let X=u(`div`,K);e(K,X),l(X,`mt-6 grid gap-6 lg:grid-cols-2`);let Pe=p(`rue:list:start`),Fe=p(`rue:list:end`);e(X,Pe),e(X,Fe);let Ie=new Map;t(()=>{Ie=m({items:C||[],getKey:(e,t)=>e.label,elements:Ie,parent:X,before:Fe,singleRoot:!0,trackIndex:!1,start:Pe,renderItem:(n,r,i,m,h)=>{c(s(()=>{let r=ee(),i=u(`article`,r);e(r,i),t(()=>{a(i,`key`,String(n.label))}),l(i,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let s=u(`div`,i);e(i,s),l(s,`border-b border-base-300 px-5 py-4`);let m=u(`div`,s);e(s,m),l(m,`text-xs font-semibold uppercase tracking-wide text-primary`);let h=p(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.label;f(()=>c(e,m,h))});let _=u(`h3`,s);e(s,_),l(_,`mt-2 text-xl font-semibold text-base-content`);let v=p(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.title;f(()=>c(e,_,v))});let y=u(`p`,s);e(s,y),l(y,`mt-2 text-sm leading-6 text-base-content/65`);let te=p(`rue:slot:anchor`);e(y,te),t(()=>{let e=n.description;f(()=>c(e,y,te))});let b=u(`div`,s);e(s,b),l(b,`mt-4 flex flex-wrap gap-3`);let x=u(`a`,b);e(b,x),t(()=>{a(x,`href`,String(n.href))}),a(x,`target`,`_blank`),a(x,`rel`,`noreferrer`),l(x,`btn btn-sm btn-primary`),e(x,o(`查看源码`));let S=u(`div`,i);e(i,S),l(S,`border-b border-base-300 bg-base-200/60 px-5 py-4`);let ne=u(`div`,S);e(S,ne),l(ne,`text-xs font-semibold text-base-content/55`),e(ne,o(`运行命令`));let C=u(`pre`,S);e(S,C),l(C,`mt-3 overflow-x-auto rounded-lg bg-slate-950 px-4 py-3 text-xs leading-6 text-slate-100`);let w=u(`code`,C);e(C,w);let T=p(`rue:slot:anchor`);e(w,T),t(()=>{let e=n.commands;f(()=>c(e,w,T))});let E=p(`rue:component:anchor`);return e(i,E),t(()=>{let e=d(g,{className:`[&_pre]:pt-12 [&_.shiki]:pt-12`,lang:`tsx`,code:n.code});f(()=>c(e,i,E))}),r}),r,i)}})});let Z=u(`section`,b);e(b,Z),l(Z,`mt-14 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-6 md:flex md:items-center md:justify-between`);let Q=u(`div`,Z);e(Z,Q);let Le=u(`h2`,Q);e(Q,Le),l(Le,`text-2xl font-bold text-base-content`),e(Le,o(`从 Rue 组件到全栈应用`));let Re=u(`p`,Q);e(Q,Re),l(Re,`mt-3 max-w-2xl text-sm leading-6 text-base-content/70`),e(Re,o(`安装 @rue-js/text 后，创建 app/page.tsx 即可启动。多数项目不需要手动维护 Vite 配置，Text.js 会自动组织 Rue 插件与应用路由。`));let $=u(`a`,Z);return e(Z,$),a($,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),a($,`target`,`_blank`),a($,`rel`,`noreferrer`),l($,`btn btn-primary mt-5 md:mt-0`),e($,o(`开始了解 Text.js`)),b});export{w as default};