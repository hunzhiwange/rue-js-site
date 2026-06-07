import{$ as e,J as t,Q as ee,Vt as n,Y as r,Yt as i,Z as a,ct as o,et as s,l as c,mt as l,ot as u,s as d,t as f,tt as p}from"./vapor-runtime-DHPuOjqh.js";import{n as m}from"./vapor-helpers-vapor-CJFAWine.js";import{n as h}from"./src-BvOcZ6uC.js";import{t as g}from"./Code-Ds9lKLk6.js";var _=`// app/page.tsx
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
        <h1>A small blog running on text</h1>
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
pnpm --dir examples/text-static-export start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-static-export`,code:b}],w=()=>c(te=>{let b=e(`div`,te);o(b,`mx-auto max-w-[1180px]`);let w=e(`section`,b);r(b,w),o(w,`grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center`);let T=e(`div`,w);r(w,T);let E=e(`div`,T);r(T,E),o(E,`inline-flex items-center gap-2 rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-600`),r(E,s(`Rue ecosystem framework`));let re=e(`h1`,T);r(T,re),o(re,`mt-6 text-5xl font-black leading-tight text-base-content md:text-7xl`),r(re,s(`Text.js`));let ie=e(`p`,T);r(T,ie),o(ie,`mt-5 max-w-3xl text-lg leading-8 text-base-content/72 md:text-xl`),r(ie,s(`Text.js 是 Rue 生态中的全栈应用框架。它基于 Vite、Rue、RSC 与文件系统路由，把 App Router、Pages Router、SSR、API 路由和 Workers 部署整合成一条轻量开发路径。 设计上参考 Vercel 的 Next.js，并基于 Cloudflare 的 vinext 与 Workers 运行时继续演进。`));let D=e(`div`,T);r(T,D),o(D,`mt-8 flex flex-wrap gap-3`);let O=e(`a`,D);r(D,O),u(O,`href`,`https://www.npmjs.com/package/@rue-js/text`),u(O,`target`,`_blank`),u(O,`rel`,`noreferrer`),o(O,`btn btn-primary`),r(O,s(`安装 @rue-js/text`));let k=e(`a`,D);r(D,k),u(k,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),u(k,`target`,`_blank`),u(k,`rel`,`noreferrer`),o(k,`btn btn-outline`),r(k,s(`查看源码`));let A=e(`a`,D);r(D,A),i(()=>{u(A,`href`,String(h.__rueHref(`/guide/guide/scaling-up/tooling`)))}),t(A,`click`,e=>h.__rueOnClick(e,`/guide/guide/scaling-up/tooling`,!1)),o(A,`btn btn-ghost`),r(A,s(`工具链文档`));let j=e(`div`,w);r(w,j),o(j,`overflow-hidden rounded-lg border border-base-300 bg-slate-950 shadow-xl`);let M=e(`div`,j);r(j,M),o(M,`flex items-center justify-between border-b border-white/10 px-4 py-3`);let N=e(`div`,M);r(M,N),o(N,`flex gap-2`);let ae=e(`span`,N);r(N,ae),o(ae,`h-3 w-3 rounded-full bg-rose-400`);let oe=e(`span`,N);r(N,oe),o(oe,`h-3 w-3 rounded-full bg-amber-400`);let se=e(`span`,N);r(N,se),o(se,`h-3 w-3 rounded-full bg-emerald-400`);let ce=e(`span`,M);r(M,ce),o(ce,`text-xs text-white/45`),r(ce,s(`text app`));let le=a(`rue:component:anchor`);r(j,le),i(()=>{let e=f(g,{className:`h-[390px]`,lang:`tsx`,code:_});n(()=>d(e,j,le))});let P=e(`section`,b);r(b,P),o(P,`grid gap-4 md:grid-cols-3`);let ue=a(`rue:list:start`),de=a(`rue:list:end`);r(P,ue),r(P,de);let fe=new Map;i(()=>{fe=m({items:x||[],getKey:(e,t)=>e.label,elements:fe,parent:P,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(t,s,f,m,h)=>{d(c(()=>{let s=ee(),c=e(`div`,s);r(s,c),i(()=>{u(c,`key`,String(t.label))}),o(c,`rounded-lg border border-base-300 bg-base-100 p-5`);let f=e(`div`,c);r(c,f),o(f,`text-2xl font-black text-base-content`);let m=p(f);r(f,m),i(()=>{l(m,t.value)});let h=e(`div`,c);r(c,h),o(h,`mt-2 text-sm font-semibold text-primary`);let g=a(`rue:slot:anchor`);r(h,g),i(()=>{let e=t.label;n(()=>d(e,h,g))});let _=e(`p`,c);r(c,_),o(_,`mt-3 text-sm leading-6 text-base-content/68`);let v=a(`rue:slot:anchor`);return r(_,v),i(()=>{let e=t.description;n(()=>d(e,_,v))}),s}),s,f)}})});let F=e(`section`,b);r(b,F),o(F,`mt-14`);let I=e(`div`,F);r(F,I),o(I,`max-w-3xl`);let pe=e(`div`,I);r(I,pe),o(pe,`text-sm font-semibold text-primary`),r(pe,s(`Based on Vercel and Cloudflare`));let me=e(`h2`,I);r(I,me),o(me,`mt-3 text-3xl font-bold text-base-content`),r(me,s(`熟悉的应用模型，面向边缘运行时`));let he=e(`p`,I);r(I,he),o(he,`mt-4 text-base leading-7 text-base-content/70`),r(he,s(`Text.js 不是从零发明一套全栈约定，而是把 Vercel Next.js 的应用框架经验、Cloudflare vinext 的 Vite-first / Workers 部署路径，与 Rue 的 JSX / TSX 运行时组合到同一套工具链里。`));let L=e(`div`,F);r(F,L),o(L,`mt-6 grid gap-4 md:grid-cols-3`);let ge=a(`rue:list:start`),_e=a(`rue:list:end`);r(L,ge),r(L,_e);let ve=new Map;i(()=>{ve=m({items:S||[],getKey:(e,t)=>e.name,elements:ve,parent:L,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(t,s,l,f,p)=>{d(c(()=>{let s=ee(),c=e(`a`,s);r(s,c),i(()=>{u(c,`key`,String(t.name))}),i(()=>{u(c,`href`,String(t.href))}),u(c,`target`,`_blank`),u(c,`rel`,`noreferrer`),o(c,`rounded-lg border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let l=e(`h3`,c);r(c,l),o(l,`text-lg font-semibold text-base-content`);let f=a(`rue:slot:anchor`);r(l,f),i(()=>{let e=t.name;n(()=>d(e,l,f))});let p=e(`p`,c);r(c,p),o(p,`mt-3 text-sm leading-6 text-base-content/68`);let m=a(`rue:slot:anchor`);return r(p,m),i(()=>{let e=t.description;n(()=>d(e,p,m))}),s}),s,l)}})});let R=e(`section`,b);r(b,R),o(R,`mt-14 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]`);let z=e(`div`,R);r(R,z);let ye=e(`div`,z);r(z,ye),o(ye,`text-sm font-semibold text-primary`),r(ye,s(`Why Text.js`));let be=e(`h2`,z);r(z,be),o(be,`mt-3 text-3xl font-bold text-base-content`),r(be,s(`同一个 Rue 应用，扩展到全栈`));let xe=e(`p`,z);r(z,xe),o(xe,`mt-4 text-base leading-7 text-base-content/70`),r(xe,s(`参考 vinext 的 Vite-first 思路，Text.js 把熟悉的文件系统约定放到 Rue 运行时之上。保留简单组件开发体验，同时补齐服务端、路由和部署层。`));let B=e(`div`,R);r(R,B),o(B,`grid gap-4 md:grid-cols-2`);let Se=a(`rue:list:start`),Ce=a(`rue:list:end`);r(B,Se),r(B,Ce);let we=new Map;i(()=>{we=m({items:ne||[],getKey:(e,t)=>e.title,elements:we,parent:B,before:Ce,singleRoot:!0,trackIndex:!1,start:Se,renderItem:(t,s,l,f,p)=>{d(c(()=>{let s=ee(),c=e(`article`,s);r(s,c),i(()=>{u(c,`key`,String(t.title))}),o(c,`rounded-lg border border-base-300 bg-base-100 p-5`);let l=e(`h3`,c);r(c,l),o(l,`text-lg font-semibold text-base-content`);let f=a(`rue:slot:anchor`);r(l,f),i(()=>{let e=t.title;n(()=>d(e,l,f))});let p=e(`p`,c);r(c,p),o(p,`mt-3 text-sm leading-6 text-base-content/68`);let m=a(`rue:slot:anchor`);return r(p,m),i(()=>{let e=t.description;n(()=>d(e,p,m))}),s}),s,l)}})});let V=e(`section`,b);r(b,V),o(V,`mt-14 grid gap-6 lg:grid-cols-2`);let H=e(`div`,V);r(V,H),o(H,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let U=e(`div`,H);r(H,U),o(U,`border-b border-base-300 px-5 py-4`);let Te=e(`h2`,U);r(U,Te),o(Te,`text-xl font-semibold text-base-content`),r(Te,s(`路由与 API`));let Ee=e(`p`,U);r(U,Ee),o(Ee,`mt-2 text-sm text-base-content/65`),r(Ee,s(`从页面到接口都沿用 app 目录约定，动态参数和 route handler 放在同一套图谱里。`));let De=a(`rue:component:anchor`);r(H,De),i(()=>{let e=f(g,{className:`h-[300px]`,lang:`tsx`,code:y});n(()=>d(e,H,De))});let W=e(`div`,V);r(V,W),o(W,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let G=e(`div`,W);r(W,G),o(G,`border-b border-base-300 px-5 py-4`);let Oe=e(`h2`,G);r(G,Oe),o(Oe,`text-xl font-semibold text-base-content`),r(Oe,s(`CLI 与部署`));let ke=e(`p`,G);r(G,ke),o(ke,`mt-2 text-sm text-base-content/65`),r(ke,s(`ruetext 命令负责开发、构建、检查、类型生成和 Cloudflare Workers 部署。`));let Ae=a(`rue:component:anchor`);r(W,Ae),i(()=>{let e=f(g,{className:`h-[300px]`,lang:`sh`,code:v});n(()=>d(e,W,Ae))});let K=e(`section`,b);r(b,K),o(K,`mt-14`);let q=e(`div`,K);r(K,q),o(q,`flex flex-col gap-4 md:flex-row md:items-end md:justify-between`);let J=e(`div`,q);r(q,J);let je=e(`div`,J);r(J,je),o(je,`text-sm font-semibold text-primary`),r(je,s(`Demo source`));let Me=e(`h2`,J);r(J,Me),o(Me,`mt-3 text-3xl font-bold text-base-content`),r(Me,s(`可直接查看的 Text.js 示例源码`));let Ne=e(`p`,J);r(J,Ne),o(Ne,`mt-4 max-w-3xl text-base leading-7 text-base-content/70`),r(Ne,s(`仓库内提供了 SSR 博客和静态导出两个 demo，用同一套 App Router 约定覆盖服务端渲染、API 路由、客户端交互、动态路由预渲染和纯静态文件交付。`));let Y=e(`a`,q);r(q,Y),u(Y,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/examples`),u(Y,`target`,`_blank`),u(Y,`rel`,`noreferrer`),o(Y,`btn btn-outline`),r(Y,s(`查看全部 examples`));let X=e(`div`,K);r(K,X),o(X,`mt-6 grid gap-6 lg:grid-cols-2`);let Pe=a(`rue:list:start`),Fe=a(`rue:list:end`);r(X,Pe),r(X,Fe);let Ie=new Map;i(()=>{Ie=m({items:C||[],getKey:(e,t)=>e.label,elements:Ie,parent:X,before:Fe,singleRoot:!0,trackIndex:!1,start:Pe,renderItem:(t,l,p,m,h)=>{d(c(()=>{let c=ee(),l=e(`article`,c);r(c,l),i(()=>{u(l,`key`,String(t.label))}),o(l,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let p=e(`div`,l);r(l,p),o(p,`border-b border-base-300 px-5 py-4`);let m=e(`div`,p);r(p,m),o(m,`text-xs font-semibold uppercase tracking-wide text-primary`);let h=a(`rue:slot:anchor`);r(m,h),i(()=>{let e=t.label;n(()=>d(e,m,h))});let _=e(`h3`,p);r(p,_),o(_,`mt-2 text-xl font-semibold text-base-content`);let v=a(`rue:slot:anchor`);r(_,v),i(()=>{let e=t.title;n(()=>d(e,_,v))});let y=e(`p`,p);r(p,y),o(y,`mt-2 text-sm leading-6 text-base-content/65`);let te=a(`rue:slot:anchor`);r(y,te),i(()=>{let e=t.description;n(()=>d(e,y,te))});let b=e(`div`,p);r(p,b),o(b,`mt-4 flex flex-wrap gap-3`);let x=e(`a`,b);r(b,x),i(()=>{u(x,`href`,String(t.href))}),u(x,`target`,`_blank`),u(x,`rel`,`noreferrer`),o(x,`btn btn-sm btn-primary`),r(x,s(`查看源码`));let S=e(`div`,l);r(l,S),o(S,`border-b border-base-300 bg-base-200/60 px-5 py-4`);let ne=e(`div`,S);r(S,ne),o(ne,`text-xs font-semibold text-base-content/55`),r(ne,s(`运行命令`));let C=e(`pre`,S);r(S,C),o(C,`mt-3 overflow-x-auto rounded-lg bg-slate-950 px-4 py-3 text-xs leading-6 text-slate-100`);let w=e(`code`,C);r(C,w);let T=a(`rue:slot:anchor`);r(w,T),i(()=>{let e=t.commands;n(()=>d(e,w,T))});let E=a(`rue:component:anchor`);return r(l,E),i(()=>{let e=f(g,{className:`[&_pre]:pt-12 [&_.shiki]:pt-12`,lang:`tsx`,code:t.code});n(()=>d(e,l,E))}),c}),l,p)}})});let Z=e(`section`,b);r(b,Z),o(Z,`mt-14 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-6 md:flex md:items-center md:justify-between`);let Q=e(`div`,Z);r(Z,Q);let Le=e(`h2`,Q);r(Q,Le),o(Le,`text-2xl font-bold text-base-content`),r(Le,s(`从 Rue 组件到全栈应用`));let Re=e(`p`,Q);r(Q,Re),o(Re,`mt-3 max-w-2xl text-sm leading-6 text-base-content/70`),r(Re,s(`安装 @rue-js/text 后，创建 app/page.tsx 即可启动。多数项目不需要手动维护 Vite 配置，Text.js 会自动组织 Rue 插件与应用路由。`));let $=e(`a`,Z);return r(Z,$),u($,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),u($,`target`,`_blank`),u($,`rel`,`noreferrer`),o($,`btn btn-primary mt-5 md:mt-0`),r($,s(`开始了解 Text.js`)),b});export{w as default};