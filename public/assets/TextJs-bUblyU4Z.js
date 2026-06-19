import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,et as o,ht as s,l as c,lt as l,nt as u,o as d,st as f,t as p,tt as m}from"./vapor-runtime-CXIalONM.js";import{n as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{n as g}from"./src-5SIVqI72.js";import{t as _}from"./Code-BIscIyEp.js";var v=`// app/page.tsx
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
}`,y=`ruetext dev       # 启动开发服务器
ruetext build     # 构建生产产物
ruetext start     # 启动生产服务器
ruetext preview   # ruetext start 的别名
ruetext deploy    # 部署到 Cloudflare Workers
ruetext typegen   # 生成 App Router 路由类型
ruetext lint      # 调用项目中的 eslint / oxlint
ruetext init      # 初始化部署相关配置
ruetext check     # 检查 Text.js 兼容性`,b=`// app/blog/[slug]/page.tsx
export default function BlogPage({ params }: { params: { slug: string } }) {
  return <article>{params.slug}</article>
}

// app/api/hello/route.ts
export function GET() {
  return Response.json({ message: 'Hello from Text.js' })
}`,ee=`// examples/text-blog-ssr/app/page.tsx
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
}`,x=`// examples/text-static-export/text.config.mjs
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
}`,S=[{value:`App + Pages`,label:`文件系统路由`,description:`同时覆盖 App Router 与 Pages Router，适合渐进迁移。`},{value:`Vite + Rue`,label:`默认构建基础`,description:`自动接入 Rue JSX / TSX、Vite 插件与开发服务器。`},{value:`Workers`,label:`边缘部署`,description:`通过 ruetext deploy 输出 Cloudflare Workers 应用。`}],C=[{name:`Vercel / Next.js`,description:`Text.js 的应用路由、layout、route handler、metadata、redirects 等能力参考 Vercel 的 Next.js 应用模型。`,href:`https://github.com/vercel/next.js`},{name:`Cloudflare / vinext`,description:`Text.js 基于 Cloudflare 的 vinext 思路继续演进，将 Vite-first 构建和 Workers 部署收束到 Rue 生态。`,href:`https://github.com/cloudflare/vinext`},{name:`Rue runtime`,description:`Rue 提供 JSX / TSX、响应式能力和渲染运行时，Text.js 负责服务端渲染、路由、构建编排与部署适配。`,href:`https://github.com/hunzhiwange/ruejs`}],te=[{title:`熟悉的全栈应用模型`,description:`以 Vercel Next.js 应用模型为参照，提供 layout、page、route handler、middleware、redirects、rewrites 和 headers 等能力。`},{title:`Rue 原生的 JSX / TSX 工作流`,description:`页面和组件继续使用 Rue 的响应式能力与 JSX 表达方式，Text.js 负责路由、渲染、构建编排和部署适配。`},{title:`面向 RSC 与服务端渲染`,description:`支持 React Server Components 风格的服务端组件工作流，并为 SSR、静态生成与客户端交互保留统一入口。`},{title:`兼容常见 text/* 入口`,description:`内置 text/navigation、text/link、text/image、text/headers、text/cache 等 shim，降低生态适配成本。`}],w=[{title:`Blog SSR Demo`,label:`examples/text-blog-ssr`,description:`一个 App Router 博客示例，首页与文章页走服务端渲染，同时包含 /api/posts route handler、客户端主题筛选和本地点赞组件。`,commands:`pnpm --dir examples/text-blog-ssr dev
pnpm --dir examples/text-blog-ssr build
pnpm --dir examples/text-blog-ssr start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-blog-ssr`,code:ee},{title:`Static Export Demo`,label:`examples/text-static-export`,description:`一个知识库静态导出示例，通过 output: "export" 在 ruetext build 时预渲染全部路由，包括动态 guide 页面。`,commands:`pnpm --dir examples/text-static-export dev
pnpm --dir examples/text-static-export build
pnpm --dir examples/text-static-export start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-static-export`,code:x}],T=()=>c(ee=>{let x=o(`div`,ee);l(x,`mx-auto max-w-[1180px]`);let T=o(`section`,x);i(x,T),l(T,`grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center`);let E=o(`div`,T);i(T,E);let D=o(`div`,E);i(E,D),l(D,`inline-flex items-center gap-2 rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-600`),i(D,m(`Rue ecosystem framework`));let ne=o(`h1`,E);i(E,ne),l(ne,`mt-6 text-5xl font-black leading-tight text-base-content md:text-7xl`),i(ne,m(`Text.js`));let re=o(`p`,E);i(E,re),l(re,`mt-5 max-w-3xl text-lg leading-8 text-base-content/72 md:text-xl`),i(re,m(`Text.js 是 Rue 生态中的全栈应用框架。它基于 Vite、Rue、RSC 与文件系统路由，把 App Router、Pages Router、SSR、API 路由和 Workers 部署整合成一条轻量开发路径。 设计上参考 Vercel 的 Next.js，并基于 Cloudflare 的 vinext 与 Workers 运行时继续演进。`));let O=o(`div`,E);i(E,O),l(O,`mt-8 flex flex-wrap gap-3`);let k=o(`a`,O);i(O,k),f(k,`href`,`https://www.npmjs.com/package/@rue-js/text`),f(k,`target`,`_blank`),f(k,`rel`,`noreferrer`),l(k,`btn btn-primary`),i(k,m(`安装 @rue-js/text`));let A=o(`a`,O);i(O,A),f(A,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),f(A,`target`,`_blank`),f(A,`rel`,`noreferrer`),l(A,`btn btn-outline`),i(A,m(`查看源码`));let j=o(`a`,O);i(O,j),n(()=>{f(j,`href`,String(g.__rueHref(`/guide/guide/scaling-up/tooling`)))}),a(j,`click`,e=>g.__rueOnClick(e,`/guide/guide/scaling-up/tooling`,!1)),l(j,`btn btn-ghost`),i(j,m(`工具链文档`));let M=o(`div`,T);i(T,M),l(M,`overflow-hidden rounded-lg border border-base-300 bg-slate-950 shadow-xl`);let N=o(`div`,M);i(M,N),l(N,`flex items-center justify-between border-b border-white/10 px-4 py-3`);let P=o(`div`,N);i(N,P),l(P,`flex gap-2`);let ie=o(`span`,P);i(P,ie),l(ie,`h-3 w-3 rounded-full bg-rose-400`);let ae=o(`span`,P);i(P,ae),l(ae,`h-3 w-3 rounded-full bg-amber-400`);let oe=o(`span`,P);i(P,oe),l(oe,`h-3 w-3 rounded-full bg-emerald-400`);let se=o(`span`,N);i(N,se),l(se,`text-xs text-white/45`),i(se,m(`text app`));let ce=t(`rue:component:anchor`);i(M,ce),n(()=>{let e=p(_,{className:`h-[390px]`,lang:`tsx`,code:v});r(()=>d(e,M,ce))});let le=o(`section`,x);i(x,le),l(le,`grid gap-4 md:grid-cols-3`);let ue=t(`rue:list:start`),de=t(`rue:list:end`);i(le,ue),i(le,de);let fe=new Map;n(()=>{fe=h({items:S||[],getKey:(e,t)=>e.label,elements:fe,parent:le,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(a,p,m,h,g)=>{d(c(()=>{let c=e(),p=o(`div`,c);i(c,p),n(()=>{f(p,`key`,String(a.label))}),l(p,`rounded-lg border border-base-300 bg-base-100 p-5`);let m=o(`div`,p);i(p,m),l(m,`text-2xl font-black text-base-content`);let h=u(m);i(m,h),n(()=>{s(h,a.value)});let g=o(`div`,p);i(p,g),l(g,`mt-2 text-sm font-semibold text-primary`);let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.label;r(()=>d(e,g,_))});let v=o(`p`,p);i(p,v),l(v,`mt-3 text-sm leading-6 text-base-content/68`);let y=t(`rue:slot:anchor`);return i(v,y),n(()=>{let e=a.description;r(()=>d(e,v,y))}),c}),p,m)}})});let F=o(`section`,x);i(x,F),l(F,`mt-14`);let I=o(`div`,F);i(F,I),l(I,`max-w-3xl`);let pe=o(`div`,I);i(I,pe),l(pe,`text-sm font-semibold text-primary`),i(pe,m(`Based on Vercel and Cloudflare`));let me=o(`h2`,I);i(I,me),l(me,`mt-3 text-3xl font-bold text-base-content`),i(me,m(`熟悉的应用模型，面向边缘运行时`));let he=o(`p`,I);i(I,he),l(he,`mt-4 text-base leading-7 text-base-content/70`),i(he,m(`Text.js 不是从零发明一套全栈约定，而是把 Vercel Next.js 的应用框架经验、Cloudflare vinext 的 Vite-first / Workers 部署路径，与 Rue 的 JSX / TSX 运行时组合到同一套工具链里。`));let L=o(`div`,F);i(F,L),l(L,`mt-6 grid gap-4 md:grid-cols-3`);let ge=t(`rue:list:start`),_e=t(`rue:list:end`);i(L,ge),i(L,_e);let ve=new Map;n(()=>{ve=h({items:C||[],getKey:(e,t)=>e.name,elements:ve,parent:L,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(a,s,u,p,m)=>{d(c(()=>{let s=e(),c=o(`a`,s);i(s,c),n(()=>{f(c,`key`,String(a.name))}),n(()=>{f(c,`href`,String(a.href))}),f(c,`target`,`_blank`),f(c,`rel`,`noreferrer`),l(c,`rounded-lg border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let u=o(`h3`,c);i(c,u),l(u,`text-lg font-semibold text-base-content`);let p=t(`rue:slot:anchor`);i(u,p),n(()=>{let e=a.name;r(()=>d(e,u,p))});let m=o(`p`,c);i(c,m),l(m,`mt-3 text-sm leading-6 text-base-content/68`);let h=t(`rue:slot:anchor`);return i(m,h),n(()=>{let e=a.description;r(()=>d(e,m,h))}),s}),s,u)}})});let R=o(`section`,x);i(x,R),l(R,`mt-14 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]`);let z=o(`div`,R);i(R,z);let ye=o(`div`,z);i(z,ye),l(ye,`text-sm font-semibold text-primary`),i(ye,m(`Why Text.js`));let be=o(`h2`,z);i(z,be),l(be,`mt-3 text-3xl font-bold text-base-content`),i(be,m(`同一个 Rue 应用，扩展到全栈`));let xe=o(`p`,z);i(z,xe),l(xe,`mt-4 text-base leading-7 text-base-content/70`),i(xe,m(`参考 vinext 的 Vite-first 思路，Text.js 把熟悉的文件系统约定放到 Rue 运行时之上。保留简单组件开发体验，同时补齐服务端、路由和部署层。`));let B=o(`div`,R);i(R,B),l(B,`grid gap-4 md:grid-cols-2`);let Se=t(`rue:list:start`),Ce=t(`rue:list:end`);i(B,Se),i(B,Ce);let we=new Map;n(()=>{we=h({items:te||[],getKey:(e,t)=>e.title,elements:we,parent:B,before:Ce,singleRoot:!0,trackIndex:!1,start:Se,renderItem:(a,s,u,p,m)=>{d(c(()=>{let s=e(),c=o(`article`,s);i(s,c),n(()=>{f(c,`key`,String(a.title))}),l(c,`rounded-lg border border-base-300 bg-base-100 p-5`);let u=o(`h3`,c);i(c,u),l(u,`text-lg font-semibold text-base-content`);let p=t(`rue:slot:anchor`);i(u,p),n(()=>{let e=a.title;r(()=>d(e,u,p))});let m=o(`p`,c);i(c,m),l(m,`mt-3 text-sm leading-6 text-base-content/68`);let h=t(`rue:slot:anchor`);return i(m,h),n(()=>{let e=a.description;r(()=>d(e,m,h))}),s}),s,u)}})});let V=o(`section`,x);i(x,V),l(V,`mt-14 grid gap-6 lg:grid-cols-2`);let H=o(`div`,V);i(V,H),l(H,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let U=o(`div`,H);i(H,U),l(U,`border-b border-base-300 px-5 py-4`);let Te=o(`h2`,U);i(U,Te),l(Te,`text-xl font-semibold text-base-content`),i(Te,m(`路由与 API`));let Ee=o(`p`,U);i(U,Ee),l(Ee,`mt-2 text-sm text-base-content/65`),i(Ee,m(`从页面到接口都沿用 app 目录约定，动态参数和 route handler 放在同一套图谱里。`));let De=t(`rue:component:anchor`);i(H,De),n(()=>{let e=p(_,{className:`h-[300px]`,lang:`tsx`,code:b});r(()=>d(e,H,De))});let W=o(`div`,V);i(V,W),l(W,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let G=o(`div`,W);i(W,G),l(G,`border-b border-base-300 px-5 py-4`);let Oe=o(`h2`,G);i(G,Oe),l(Oe,`text-xl font-semibold text-base-content`),i(Oe,m(`CLI 与部署`));let ke=o(`p`,G);i(G,ke),l(ke,`mt-2 text-sm text-base-content/65`),i(ke,m(`ruetext 命令负责开发、构建、检查、类型生成和 Cloudflare Workers 部署。`));let Ae=t(`rue:component:anchor`);i(W,Ae),n(()=>{let e=p(_,{className:`h-[300px]`,lang:`sh`,code:y});r(()=>d(e,W,Ae))});let K=o(`section`,x);i(x,K),l(K,`mt-14`);let q=o(`div`,K);i(K,q),l(q,`flex flex-col gap-4 md:flex-row md:items-end md:justify-between`);let J=o(`div`,q);i(q,J);let je=o(`div`,J);i(J,je),l(je,`text-sm font-semibold text-primary`),i(je,m(`Demo source`));let Me=o(`h2`,J);i(J,Me),l(Me,`mt-3 text-3xl font-bold text-base-content`),i(Me,m(`可直接查看的 Text.js 示例源码`));let Ne=o(`p`,J);i(J,Ne),l(Ne,`mt-4 max-w-3xl text-base leading-7 text-base-content/70`),i(Ne,m(`仓库内提供了 SSR 博客和静态导出两个 demo，用同一套 App Router 约定覆盖服务端渲染、API 路由、客户端交互、动态路由预渲染和纯静态文件交付。`));let Y=o(`a`,q);i(q,Y),f(Y,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/examples`),f(Y,`target`,`_blank`),f(Y,`rel`,`noreferrer`),l(Y,`btn btn-outline`),i(Y,m(`查看全部 examples`));let X=o(`div`,K);i(K,X),l(X,`mt-6 grid gap-6 lg:grid-cols-2`);let Pe=t(`rue:list:start`),Fe=t(`rue:list:end`);i(X,Pe),i(X,Fe);let Ie=new Map;n(()=>{Ie=h({items:w||[],getKey:(e,t)=>e.label,elements:Ie,parent:X,before:Fe,singleRoot:!0,trackIndex:!1,start:Pe,renderItem:(a,s,u,h,g)=>{d(c(()=>{let s=e(),c=o(`article`,s);i(s,c),n(()=>{f(c,`key`,String(a.label))}),l(c,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let u=o(`div`,c);i(c,u),l(u,`border-b border-base-300 px-5 py-4`);let h=o(`div`,u);i(u,h),l(h,`text-xs font-semibold uppercase tracking-wide text-primary`);let g=t(`rue:slot:anchor`);i(h,g),n(()=>{let e=a.label;r(()=>d(e,h,g))});let v=o(`h3`,u);i(u,v),l(v,`mt-2 text-xl font-semibold text-base-content`);let y=t(`rue:slot:anchor`);i(v,y),n(()=>{let e=a.title;r(()=>d(e,v,y))});let b=o(`p`,u);i(u,b),l(b,`mt-2 text-sm leading-6 text-base-content/65`);let ee=t(`rue:slot:anchor`);i(b,ee),n(()=>{let e=a.description;r(()=>d(e,b,ee))});let x=o(`div`,u);i(u,x),l(x,`mt-4 flex flex-wrap gap-3`);let S=o(`a`,x);i(x,S),n(()=>{f(S,`href`,String(a.href))}),f(S,`target`,`_blank`),f(S,`rel`,`noreferrer`),l(S,`btn btn-sm btn-primary`),i(S,m(`查看源码`));let C=o(`div`,c);i(c,C),l(C,`border-b border-base-300 bg-base-200/60 px-5 py-4`);let te=o(`div`,C);i(C,te),l(te,`text-xs font-semibold text-base-content/55`),i(te,m(`运行命令`));let w=o(`pre`,C);i(C,w),l(w,`mt-3 overflow-x-auto rounded-lg bg-slate-950 px-4 py-3 text-xs leading-6 text-slate-100`);let T=o(`code`,w);i(w,T);let E=t(`rue:slot:anchor`);i(T,E),n(()=>{let e=a.commands;r(()=>d(e,T,E))});let D=t(`rue:component:anchor`);return i(c,D),n(()=>{let e=p(_,{className:`[&_pre]:pt-12 [&_.shiki]:pt-12`,lang:`tsx`,code:a.code});r(()=>d(e,c,D))}),s}),s,u)}})});let Z=o(`section`,x);i(x,Z),l(Z,`mt-14 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-6 md:flex md:items-center md:justify-between`);let Q=o(`div`,Z);i(Z,Q);let Le=o(`h2`,Q);i(Q,Le),l(Le,`text-2xl font-bold text-base-content`),i(Le,m(`从 Rue 组件到全栈应用`));let Re=o(`p`,Q);i(Q,Re),l(Re,`mt-3 max-w-2xl text-sm leading-6 text-base-content/70`),i(Re,m(`安装 @rue-js/text 后，创建 app/page.tsx 即可启动。多数项目不需要手动维护 Vite 配置，Text.js 会自动组织 Rue 插件与应用路由。`));let $=o(`a`,Z);return i(Z,$),f($,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),f($,`target`,`_blank`),f($,`rel`,`noreferrer`),l($,`btn btn-primary mt-5 md:mt-0`),i($,m(`开始了解 Text.js`)),x});export{T as default};