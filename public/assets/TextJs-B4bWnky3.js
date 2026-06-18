import{$ as e,Ht as t,J as n,Q as r,X as i,Xt as a,Z as ee,at as o,et as s,l as c,pt as l,q as u,s as d,st as f,t as p}from"./vapor-runtime-iQZthBPQ.js";import{n as m}from"./vapor-helpers-vapor-BjKHCvOa.js";import{n as h}from"./src-BzozQvLy.js";import{t as g}from"./Code-CZqShVUj.js";var _=`// app/page.tsx
export default function Page() {
  return <main>Hello Text.js</main>
}

// package.json
{
  "scripts": {
    "dev": "ruetext dev",
    "build": "ruetext build",
    "start": "ruetext start",
    "deploy": "ruetext deploy"
  }
}`,v=`ruetext dev       # 启动开发服务器
ruetext build     # 构建生产产物
ruetext start     # 启动生产服务器
ruetext preview   # ruetext start 的别名
ruetext deploy    # 部署到 Cloudflare Workers
ruetext typegen   # 生成 App Router 路由类型
ruetext lint      # 调用项目中的 eslint / oxlint
ruetext init      # 初始化部署相关配置
ruetext check     # 检查 Text.js 兼容性`,y=`// app/blog/[slug]/page.tsx
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
}`,x=[{value:`App + Pages`,label:`文件系统路由`,description:`同时覆盖 App Router 与 Pages Router，适合渐进迁移。`},{value:`Vite + Rue`,label:`默认构建基础`,description:`自动接入 Rue JSX / TSX、Vite 插件与开发服务器。`},{value:`Workers`,label:`边缘部署`,description:`通过 ruetext deploy 输出 Cloudflare Workers 应用。`}],S=[{name:`Vercel / Next.js`,description:`Text.js 的应用路由、layout、route handler、metadata、redirects 等能力参考 Vercel 的 Next.js 应用模型。`,href:`https://github.com/vercel/next.js`},{name:`Cloudflare / vinext`,description:`Text.js 基于 Cloudflare 的 vinext 思路继续演进，将 Vite-first 构建和 Workers 部署收束到 Rue 生态。`,href:`https://github.com/cloudflare/vinext`},{name:`Rue runtime`,description:`Rue 提供 JSX / TSX、响应式能力和渲染运行时，Text.js 负责服务端渲染、路由、构建编排与部署适配。`,href:`https://github.com/hunzhiwange/ruejs`}],ne=[{title:`熟悉的全栈应用模型`,description:`以 Vercel Next.js 应用模型为参照，提供 layout、page、route handler、middleware、redirects、rewrites 和 headers 等能力。`},{title:`Rue 原生的 JSX / TSX 工作流`,description:`页面和组件继续使用 Rue 的响应式能力与 JSX 表达方式，Text.js 负责路由、渲染、构建编排和部署适配。`},{title:`面向 RSC 与服务端渲染`,description:`支持 React Server Components 风格的服务端组件工作流，并为 SSR、静态生成与客户端交互保留统一入口。`},{title:`兼容常见 text/* 入口`,description:`内置 text/navigation、text/link、text/image、text/headers、text/cache 等 shim，降低生态适配成本。`}],C=[{title:`Blog SSR Demo`,label:`examples/text-blog-ssr`,description:`一个 App Router 博客示例，首页与文章页走服务端渲染，同时包含 /api/posts route handler、客户端主题筛选和本地点赞组件。`,commands:`pnpm --dir examples/text-blog-ssr dev
pnpm --dir examples/text-blog-ssr build
pnpm --dir examples/text-blog-ssr start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-blog-ssr`,code:te},{title:`Static Export Demo`,label:`examples/text-static-export`,description:`一个知识库静态导出示例，通过 output: "export" 在 ruetext build 时预渲染全部路由，包括动态 guide 页面。`,commands:`pnpm --dir examples/text-static-export dev
pnpm --dir examples/text-static-export build
pnpm --dir examples/text-static-export start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-static-export`,code:b}],w=()=>c(te=>{let b=r(`div`,te);f(b,`mx-auto max-w-[1180px]`);let w=r(`section`,b);n(b,w),f(w,`grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center`);let T=r(`div`,w);n(w,T);let E=r(`div`,T);n(T,E),f(E,`inline-flex items-center gap-2 rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-600`),n(E,e(`Rue ecosystem framework`));let re=r(`h1`,T);n(T,re),f(re,`mt-6 text-5xl font-black leading-tight text-base-content md:text-7xl`),n(re,e(`Text.js`));let ie=r(`p`,T);n(T,ie),f(ie,`mt-5 max-w-3xl text-lg leading-8 text-base-content/72 md:text-xl`),n(ie,e(`Text.js 是 Rue 生态中的全栈应用框架。它基于 Vite、Rue、RSC 与文件系统路由，把 App Router、Pages Router、SSR、API 路由和 Workers 部署整合成一条轻量开发路径。 设计上参考 Vercel 的 Next.js，并基于 Cloudflare 的 vinext 与 Workers 运行时继续演进。`));let D=r(`div`,T);n(T,D),f(D,`mt-8 flex flex-wrap gap-3`);let O=r(`a`,D);n(D,O),o(O,`href`,`https://www.npmjs.com/package/@rue-js/text`),o(O,`target`,`_blank`),o(O,`rel`,`noreferrer`),f(O,`btn btn-primary`),n(O,e(`安装 @rue-js/text`));let k=r(`a`,D);n(D,k),o(k,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),o(k,`target`,`_blank`),o(k,`rel`,`noreferrer`),f(k,`btn btn-outline`),n(k,e(`查看源码`));let A=r(`a`,D);n(D,A),a(()=>{o(A,`href`,String(h.__rueHref(`/guide/guide/scaling-up/tooling`)))}),u(A,`click`,e=>h.__rueOnClick(e,`/guide/guide/scaling-up/tooling`,!1)),f(A,`btn btn-ghost`),n(A,e(`工具链文档`));let j=r(`div`,w);n(w,j),f(j,`overflow-hidden rounded-lg border border-base-300 bg-slate-950 shadow-xl`);let M=r(`div`,j);n(j,M),f(M,`flex items-center justify-between border-b border-white/10 px-4 py-3`);let N=r(`div`,M);n(M,N),f(N,`flex gap-2`);let ae=r(`span`,N);n(N,ae),f(ae,`h-3 w-3 rounded-full bg-rose-400`);let oe=r(`span`,N);n(N,oe),f(oe,`h-3 w-3 rounded-full bg-amber-400`);let se=r(`span`,N);n(N,se),f(se,`h-3 w-3 rounded-full bg-emerald-400`);let ce=r(`span`,M);n(M,ce),f(ce,`text-xs text-white/45`),n(ce,e(`text app`));let le=i(`rue:component:anchor`);n(j,le),a(()=>{let e=p(g,{className:`h-[390px]`,lang:`tsx`,code:_});t(()=>d(e,j,le))});let P=r(`section`,b);n(b,P),f(P,`grid gap-4 md:grid-cols-3`);let ue=i(`rue:list:start`),de=i(`rue:list:end`);n(P,ue),n(P,de);let fe=new Map;a(()=>{fe=m({items:x||[],getKey:(e,t)=>e.label,elements:fe,parent:P,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(e,u,p,m,h)=>{d(c(()=>{let c=ee(),u=r(`div`,c);n(c,u),a(()=>{o(u,`key`,String(e.label))}),f(u,`rounded-lg border border-base-300 bg-base-100 p-5`);let p=r(`div`,u);n(u,p),f(p,`text-2xl font-black text-base-content`);let m=s(p);n(p,m),a(()=>{l(m,e.value)});let h=r(`div`,u);n(u,h),f(h,`mt-2 text-sm font-semibold text-primary`);let g=i(`rue:slot:anchor`);n(h,g),a(()=>{let n=e.label;t(()=>d(n,h,g))});let _=r(`p`,u);n(u,_),f(_,`mt-3 text-sm leading-6 text-base-content/68`);let v=i(`rue:slot:anchor`);return n(_,v),a(()=>{let n=e.description;t(()=>d(n,_,v))}),c}),u,p)}})});let F=r(`section`,b);n(b,F),f(F,`mt-14`);let I=r(`div`,F);n(F,I),f(I,`max-w-3xl`);let pe=r(`div`,I);n(I,pe),f(pe,`text-sm font-semibold text-primary`),n(pe,e(`Based on Vercel and Cloudflare`));let me=r(`h2`,I);n(I,me),f(me,`mt-3 text-3xl font-bold text-base-content`),n(me,e(`熟悉的应用模型，面向边缘运行时`));let he=r(`p`,I);n(I,he),f(he,`mt-4 text-base leading-7 text-base-content/70`),n(he,e(`Text.js 不是从零发明一套全栈约定，而是把 Vercel Next.js 的应用框架经验、Cloudflare vinext 的 Vite-first / Workers 部署路径，与 Rue 的 JSX / TSX 运行时组合到同一套工具链里。`));let L=r(`div`,F);n(F,L),f(L,`mt-6 grid gap-4 md:grid-cols-3`);let ge=i(`rue:list:start`),_e=i(`rue:list:end`);n(L,ge),n(L,_e);let ve=new Map;a(()=>{ve=m({items:S||[],getKey:(e,t)=>e.name,elements:ve,parent:L,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(e,s,l,u,p)=>{d(c(()=>{let s=ee(),c=r(`a`,s);n(s,c),a(()=>{o(c,`key`,String(e.name))}),a(()=>{o(c,`href`,String(e.href))}),o(c,`target`,`_blank`),o(c,`rel`,`noreferrer`),f(c,`rounded-lg border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let l=r(`h3`,c);n(c,l),f(l,`text-lg font-semibold text-base-content`);let u=i(`rue:slot:anchor`);n(l,u),a(()=>{let n=e.name;t(()=>d(n,l,u))});let p=r(`p`,c);n(c,p),f(p,`mt-3 text-sm leading-6 text-base-content/68`);let m=i(`rue:slot:anchor`);return n(p,m),a(()=>{let n=e.description;t(()=>d(n,p,m))}),s}),s,l)}})});let R=r(`section`,b);n(b,R),f(R,`mt-14 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]`);let z=r(`div`,R);n(R,z);let ye=r(`div`,z);n(z,ye),f(ye,`text-sm font-semibold text-primary`),n(ye,e(`Why Text.js`));let be=r(`h2`,z);n(z,be),f(be,`mt-3 text-3xl font-bold text-base-content`),n(be,e(`同一个 Rue 应用，扩展到全栈`));let xe=r(`p`,z);n(z,xe),f(xe,`mt-4 text-base leading-7 text-base-content/70`),n(xe,e(`参考 vinext 的 Vite-first 思路，Text.js 把熟悉的文件系统约定放到 Rue 运行时之上。保留简单组件开发体验，同时补齐服务端、路由和部署层。`));let B=r(`div`,R);n(R,B),f(B,`grid gap-4 md:grid-cols-2`);let Se=i(`rue:list:start`),Ce=i(`rue:list:end`);n(B,Se),n(B,Ce);let we=new Map;a(()=>{we=m({items:ne||[],getKey:(e,t)=>e.title,elements:we,parent:B,before:Ce,singleRoot:!0,trackIndex:!1,start:Se,renderItem:(e,s,l,u,p)=>{d(c(()=>{let s=ee(),c=r(`article`,s);n(s,c),a(()=>{o(c,`key`,String(e.title))}),f(c,`rounded-lg border border-base-300 bg-base-100 p-5`);let l=r(`h3`,c);n(c,l),f(l,`text-lg font-semibold text-base-content`);let u=i(`rue:slot:anchor`);n(l,u),a(()=>{let n=e.title;t(()=>d(n,l,u))});let p=r(`p`,c);n(c,p),f(p,`mt-3 text-sm leading-6 text-base-content/68`);let m=i(`rue:slot:anchor`);return n(p,m),a(()=>{let n=e.description;t(()=>d(n,p,m))}),s}),s,l)}})});let V=r(`section`,b);n(b,V),f(V,`mt-14 grid gap-6 lg:grid-cols-2`);let H=r(`div`,V);n(V,H),f(H,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let U=r(`div`,H);n(H,U),f(U,`border-b border-base-300 px-5 py-4`);let Te=r(`h2`,U);n(U,Te),f(Te,`text-xl font-semibold text-base-content`),n(Te,e(`路由与 API`));let Ee=r(`p`,U);n(U,Ee),f(Ee,`mt-2 text-sm text-base-content/65`),n(Ee,e(`从页面到接口都沿用 app 目录约定，动态参数和 route handler 放在同一套图谱里。`));let De=i(`rue:component:anchor`);n(H,De),a(()=>{let e=p(g,{className:`h-[300px]`,lang:`tsx`,code:y});t(()=>d(e,H,De))});let W=r(`div`,V);n(V,W),f(W,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let G=r(`div`,W);n(W,G),f(G,`border-b border-base-300 px-5 py-4`);let Oe=r(`h2`,G);n(G,Oe),f(Oe,`text-xl font-semibold text-base-content`),n(Oe,e(`CLI 与部署`));let ke=r(`p`,G);n(G,ke),f(ke,`mt-2 text-sm text-base-content/65`),n(ke,e(`ruetext 命令负责开发、构建、检查、类型生成和 Cloudflare Workers 部署。`));let Ae=i(`rue:component:anchor`);n(W,Ae),a(()=>{let e=p(g,{className:`h-[300px]`,lang:`sh`,code:v});t(()=>d(e,W,Ae))});let K=r(`section`,b);n(b,K),f(K,`mt-14`);let q=r(`div`,K);n(K,q),f(q,`flex flex-col gap-4 md:flex-row md:items-end md:justify-between`);let J=r(`div`,q);n(q,J);let je=r(`div`,J);n(J,je),f(je,`text-sm font-semibold text-primary`),n(je,e(`Demo source`));let Me=r(`h2`,J);n(J,Me),f(Me,`mt-3 text-3xl font-bold text-base-content`),n(Me,e(`可直接查看的 Text.js 示例源码`));let Ne=r(`p`,J);n(J,Ne),f(Ne,`mt-4 max-w-3xl text-base leading-7 text-base-content/70`),n(Ne,e(`仓库内提供了 SSR 博客和静态导出两个 demo，用同一套 App Router 约定覆盖服务端渲染、API 路由、客户端交互、动态路由预渲染和纯静态文件交付。`));let Y=r(`a`,q);n(q,Y),o(Y,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/examples`),o(Y,`target`,`_blank`),o(Y,`rel`,`noreferrer`),f(Y,`btn btn-outline`),n(Y,e(`查看全部 examples`));let X=r(`div`,K);n(K,X),f(X,`mt-6 grid gap-6 lg:grid-cols-2`);let Pe=i(`rue:list:start`),Fe=i(`rue:list:end`);n(X,Pe),n(X,Fe);let Ie=new Map;a(()=>{Ie=m({items:C||[],getKey:(e,t)=>e.label,elements:Ie,parent:X,before:Fe,singleRoot:!0,trackIndex:!1,start:Pe,renderItem:(s,l,u,m,h)=>{d(c(()=>{let c=ee(),l=r(`article`,c);n(c,l),a(()=>{o(l,`key`,String(s.label))}),f(l,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let u=r(`div`,l);n(l,u),f(u,`border-b border-base-300 px-5 py-4`);let m=r(`div`,u);n(u,m),f(m,`text-xs font-semibold uppercase tracking-wide text-primary`);let h=i(`rue:slot:anchor`);n(m,h),a(()=>{let e=s.label;t(()=>d(e,m,h))});let _=r(`h3`,u);n(u,_),f(_,`mt-2 text-xl font-semibold text-base-content`);let v=i(`rue:slot:anchor`);n(_,v),a(()=>{let e=s.title;t(()=>d(e,_,v))});let y=r(`p`,u);n(u,y),f(y,`mt-2 text-sm leading-6 text-base-content/65`);let te=i(`rue:slot:anchor`);n(y,te),a(()=>{let e=s.description;t(()=>d(e,y,te))});let b=r(`div`,u);n(u,b),f(b,`mt-4 flex flex-wrap gap-3`);let x=r(`a`,b);n(b,x),a(()=>{o(x,`href`,String(s.href))}),o(x,`target`,`_blank`),o(x,`rel`,`noreferrer`),f(x,`btn btn-sm btn-primary`),n(x,e(`查看源码`));let S=r(`div`,l);n(l,S),f(S,`border-b border-base-300 bg-base-200/60 px-5 py-4`);let ne=r(`div`,S);n(S,ne),f(ne,`text-xs font-semibold text-base-content/55`),n(ne,e(`运行命令`));let C=r(`pre`,S);n(S,C),f(C,`mt-3 overflow-x-auto rounded-lg bg-slate-950 px-4 py-3 text-xs leading-6 text-slate-100`);let w=r(`code`,C);n(C,w);let T=i(`rue:slot:anchor`);n(w,T),a(()=>{let e=s.commands;t(()=>d(e,w,T))});let E=i(`rue:component:anchor`);return n(l,E),a(()=>{let e=p(g,{className:`[&_pre]:pt-12 [&_.shiki]:pt-12`,lang:`tsx`,code:s.code});t(()=>d(e,l,E))}),c}),l,u)}})});let Z=r(`section`,b);n(b,Z),f(Z,`mt-14 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-6 md:flex md:items-center md:justify-between`);let Q=r(`div`,Z);n(Z,Q);let Le=r(`h2`,Q);n(Q,Le),f(Le,`text-2xl font-bold text-base-content`),n(Le,e(`从 Rue 组件到全栈应用`));let Re=r(`p`,Q);n(Q,Re),f(Re,`mt-3 max-w-2xl text-sm leading-6 text-base-content/70`),n(Re,e(`安装 @rue-js/text 后，创建 app/page.tsx 即可启动。多数项目不需要手动维护 Vite 配置，Text.js 会自动组织 Rue 插件与应用路由。`));let $=r(`a`,Z);return n(Z,$),o($,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),o($,`target`,`_blank`),o($,`rel`,`noreferrer`),f($,`btn btn-primary mt-5 md:mt-0`),n($,e(`开始了解 Text.js`)),b});export{w as default};