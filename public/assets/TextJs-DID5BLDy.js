import{$ as e,$t as t,Gt as n,X as r,Z as i,ct as a,et as ee,gt as o,l as s,nt as c,o as l,rt as u,t as d,tt as f,ut as p}from"./vapor-runtime-CKrmRMZX.js";import{n as m}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{n as h}from"./src-nCPlgyFh.js";import{t as g}from"./Code-D5UqTwV6.js";var _=`// app/page.tsx
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
pnpm --dir examples/text-static-export start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-static-export`,code:b}],w=()=>s(te=>{let b=f(`div`,te);p(b,`mx-auto max-w-[1180px]`);let w=f(`section`,b);i(b,w),p(w,`grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center`);let T=f(`div`,w);i(w,T);let E=f(`div`,T);i(T,E),p(E,`inline-flex items-center gap-2 rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-600`),i(E,c(`Rue ecosystem framework`));let re=f(`h1`,T);i(T,re),p(re,`mt-6 text-5xl font-black leading-tight text-base-content md:text-7xl`),i(re,c(`Text.js`));let ie=f(`p`,T);i(T,ie),p(ie,`mt-5 max-w-3xl text-lg leading-8 text-base-content/72 md:text-xl`),i(ie,c(`Text.js 是 Rue 生态中的全栈应用框架。它基于 Vite、Rue、RSC 与文件系统路由，把 App Router、Pages Router、SSR、API 路由和 Workers 部署整合成一条轻量开发路径。 设计上参考 Vercel 的 Next.js，并基于 Cloudflare 的 vinext 与 Workers 运行时继续演进。`));let D=f(`div`,T);i(T,D),p(D,`mt-8 flex flex-wrap gap-3`);let O=f(`a`,D);i(D,O),a(O,`href`,`https://www.npmjs.com/package/@rue-js/text`),a(O,`target`,`_blank`),a(O,`rel`,`noreferrer`),p(O,`btn btn-primary`),i(O,c(`安装 @rue-js/text`));let k=f(`a`,D);i(D,k),a(k,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),a(k,`target`,`_blank`),a(k,`rel`,`noreferrer`),p(k,`btn btn-outline`),i(k,c(`查看源码`));let A=f(`a`,D);i(D,A),t(()=>{a(A,`href`,String(h.__rueHref(`/guide/guide/scaling-up/tooling`)))}),r(A,`click`,e=>h.__rueOnClick(e,`/guide/guide/scaling-up/tooling`,!1)),p(A,`btn btn-ghost`),i(A,c(`工具链文档`));let j=f(`div`,w);i(w,j),p(j,`overflow-hidden rounded-lg border border-base-300 bg-slate-950 shadow-xl`);let M=f(`div`,j);i(j,M),p(M,`flex items-center justify-between border-b border-white/10 px-4 py-3`);let N=f(`div`,M);i(M,N),p(N,`flex gap-2`);let ae=f(`span`,N);i(N,ae),p(ae,`h-3 w-3 rounded-full bg-rose-400`);let oe=f(`span`,N);i(N,oe),p(oe,`h-3 w-3 rounded-full bg-amber-400`);let se=f(`span`,N);i(N,se),p(se,`h-3 w-3 rounded-full bg-emerald-400`);let ce=f(`span`,M);i(M,ce),p(ce,`text-xs text-white/45`),i(ce,c(`text app`));let le=e(`rue:component:anchor`);i(j,le),t(()=>{let e=d(g,{className:`h-[390px]`,lang:`tsx`,code:_});n(()=>l(e,j,le))});let P=f(`section`,b);i(b,P),p(P,`grid gap-4 md:grid-cols-3`);let ue=e(`rue:list:start`),de=e(`rue:list:end`);i(P,ue),i(P,de);let fe=new Map;t(()=>{fe=m({items:x||[],getKey:(e,t)=>e.label,elements:fe,parent:P,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(r,c,d,m,h)=>{l(s(()=>{let s=ee(),c=f(`div`,s);i(s,c),t(()=>{a(c,`key`,String(r.label))}),p(c,`rounded-lg border border-base-300 bg-base-100 p-5`);let d=f(`div`,c);i(c,d),p(d,`text-2xl font-black text-base-content`);let m=u(d);i(d,m),t(()=>{o(m,r.value)});let h=f(`div`,c);i(c,h),p(h,`mt-2 text-sm font-semibold text-primary`);let g=e(`rue:slot:anchor`);i(h,g),t(()=>{let e=r.label;n(()=>l(e,h,g))});let _=f(`p`,c);i(c,_),p(_,`mt-3 text-sm leading-6 text-base-content/68`);let v=e(`rue:slot:anchor`);return i(_,v),t(()=>{let e=r.description;n(()=>l(e,_,v))}),s}),c,d)}})});let F=f(`section`,b);i(b,F),p(F,`mt-14`);let I=f(`div`,F);i(F,I),p(I,`max-w-3xl`);let pe=f(`div`,I);i(I,pe),p(pe,`text-sm font-semibold text-primary`),i(pe,c(`Based on Vercel and Cloudflare`));let me=f(`h2`,I);i(I,me),p(me,`mt-3 text-3xl font-bold text-base-content`),i(me,c(`熟悉的应用模型，面向边缘运行时`));let he=f(`p`,I);i(I,he),p(he,`mt-4 text-base leading-7 text-base-content/70`),i(he,c(`Text.js 不是从零发明一套全栈约定，而是把 Vercel Next.js 的应用框架经验、Cloudflare vinext 的 Vite-first / Workers 部署路径，与 Rue 的 JSX / TSX 运行时组合到同一套工具链里。`));let L=f(`div`,F);i(F,L),p(L,`mt-6 grid gap-4 md:grid-cols-3`);let ge=e(`rue:list:start`),_e=e(`rue:list:end`);i(L,ge),i(L,_e);let ve=new Map;t(()=>{ve=m({items:S||[],getKey:(e,t)=>e.name,elements:ve,parent:L,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(r,o,c,u,d)=>{l(s(()=>{let o=ee(),s=f(`a`,o);i(o,s),t(()=>{a(s,`key`,String(r.name))}),t(()=>{a(s,`href`,String(r.href))}),a(s,`target`,`_blank`),a(s,`rel`,`noreferrer`),p(s,`rounded-lg border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let c=f(`h3`,s);i(s,c),p(c,`text-lg font-semibold text-base-content`);let u=e(`rue:slot:anchor`);i(c,u),t(()=>{let e=r.name;n(()=>l(e,c,u))});let d=f(`p`,s);i(s,d),p(d,`mt-3 text-sm leading-6 text-base-content/68`);let m=e(`rue:slot:anchor`);return i(d,m),t(()=>{let e=r.description;n(()=>l(e,d,m))}),o}),o,c)}})});let R=f(`section`,b);i(b,R),p(R,`mt-14 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]`);let z=f(`div`,R);i(R,z);let ye=f(`div`,z);i(z,ye),p(ye,`text-sm font-semibold text-primary`),i(ye,c(`Why Text.js`));let be=f(`h2`,z);i(z,be),p(be,`mt-3 text-3xl font-bold text-base-content`),i(be,c(`同一个 Rue 应用，扩展到全栈`));let xe=f(`p`,z);i(z,xe),p(xe,`mt-4 text-base leading-7 text-base-content/70`),i(xe,c(`参考 vinext 的 Vite-first 思路，Text.js 把熟悉的文件系统约定放到 Rue 运行时之上。保留简单组件开发体验，同时补齐服务端、路由和部署层。`));let B=f(`div`,R);i(R,B),p(B,`grid gap-4 md:grid-cols-2`);let Se=e(`rue:list:start`),Ce=e(`rue:list:end`);i(B,Se),i(B,Ce);let we=new Map;t(()=>{we=m({items:ne||[],getKey:(e,t)=>e.title,elements:we,parent:B,before:Ce,singleRoot:!0,trackIndex:!1,start:Se,renderItem:(r,o,c,u,d)=>{l(s(()=>{let o=ee(),s=f(`article`,o);i(o,s),t(()=>{a(s,`key`,String(r.title))}),p(s,`rounded-lg border border-base-300 bg-base-100 p-5`);let c=f(`h3`,s);i(s,c),p(c,`text-lg font-semibold text-base-content`);let u=e(`rue:slot:anchor`);i(c,u),t(()=>{let e=r.title;n(()=>l(e,c,u))});let d=f(`p`,s);i(s,d),p(d,`mt-3 text-sm leading-6 text-base-content/68`);let m=e(`rue:slot:anchor`);return i(d,m),t(()=>{let e=r.description;n(()=>l(e,d,m))}),o}),o,c)}})});let V=f(`section`,b);i(b,V),p(V,`mt-14 grid gap-6 lg:grid-cols-2`);let H=f(`div`,V);i(V,H),p(H,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let U=f(`div`,H);i(H,U),p(U,`border-b border-base-300 px-5 py-4`);let Te=f(`h2`,U);i(U,Te),p(Te,`text-xl font-semibold text-base-content`),i(Te,c(`路由与 API`));let Ee=f(`p`,U);i(U,Ee),p(Ee,`mt-2 text-sm text-base-content/65`),i(Ee,c(`从页面到接口都沿用 app 目录约定，动态参数和 route handler 放在同一套图谱里。`));let De=e(`rue:component:anchor`);i(H,De),t(()=>{let e=d(g,{className:`h-[300px]`,lang:`tsx`,code:y});n(()=>l(e,H,De))});let W=f(`div`,V);i(V,W),p(W,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let G=f(`div`,W);i(W,G),p(G,`border-b border-base-300 px-5 py-4`);let Oe=f(`h2`,G);i(G,Oe),p(Oe,`text-xl font-semibold text-base-content`),i(Oe,c(`CLI 与部署`));let ke=f(`p`,G);i(G,ke),p(ke,`mt-2 text-sm text-base-content/65`),i(ke,c(`ruetext 命令负责开发、构建、检查、类型生成和 Cloudflare Workers 部署。`));let Ae=e(`rue:component:anchor`);i(W,Ae),t(()=>{let e=d(g,{className:`h-[300px]`,lang:`sh`,code:v});n(()=>l(e,W,Ae))});let K=f(`section`,b);i(b,K),p(K,`mt-14`);let q=f(`div`,K);i(K,q),p(q,`flex flex-col gap-4 md:flex-row md:items-end md:justify-between`);let J=f(`div`,q);i(q,J);let je=f(`div`,J);i(J,je),p(je,`text-sm font-semibold text-primary`),i(je,c(`Demo source`));let Me=f(`h2`,J);i(J,Me),p(Me,`mt-3 text-3xl font-bold text-base-content`),i(Me,c(`可直接查看的 Text.js 示例源码`));let Ne=f(`p`,J);i(J,Ne),p(Ne,`mt-4 max-w-3xl text-base leading-7 text-base-content/70`),i(Ne,c(`仓库内提供了 SSR 博客和静态导出两个 demo，用同一套 App Router 约定覆盖服务端渲染、API 路由、客户端交互、动态路由预渲染和纯静态文件交付。`));let Y=f(`a`,q);i(q,Y),a(Y,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/examples`),a(Y,`target`,`_blank`),a(Y,`rel`,`noreferrer`),p(Y,`btn btn-outline`),i(Y,c(`查看全部 examples`));let X=f(`div`,K);i(K,X),p(X,`mt-6 grid gap-6 lg:grid-cols-2`);let Pe=e(`rue:list:start`),Fe=e(`rue:list:end`);i(X,Pe),i(X,Fe);let Ie=new Map;t(()=>{Ie=m({items:C||[],getKey:(e,t)=>e.label,elements:Ie,parent:X,before:Fe,singleRoot:!0,trackIndex:!1,start:Pe,renderItem:(r,o,u,m,h)=>{l(s(()=>{let o=ee(),s=f(`article`,o);i(o,s),t(()=>{a(s,`key`,String(r.label))}),p(s,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let u=f(`div`,s);i(s,u),p(u,`border-b border-base-300 px-5 py-4`);let m=f(`div`,u);i(u,m),p(m,`text-xs font-semibold uppercase tracking-wide text-primary`);let h=e(`rue:slot:anchor`);i(m,h),t(()=>{let e=r.label;n(()=>l(e,m,h))});let _=f(`h3`,u);i(u,_),p(_,`mt-2 text-xl font-semibold text-base-content`);let v=e(`rue:slot:anchor`);i(_,v),t(()=>{let e=r.title;n(()=>l(e,_,v))});let y=f(`p`,u);i(u,y),p(y,`mt-2 text-sm leading-6 text-base-content/65`);let te=e(`rue:slot:anchor`);i(y,te),t(()=>{let e=r.description;n(()=>l(e,y,te))});let b=f(`div`,u);i(u,b),p(b,`mt-4 flex flex-wrap gap-3`);let x=f(`a`,b);i(b,x),t(()=>{a(x,`href`,String(r.href))}),a(x,`target`,`_blank`),a(x,`rel`,`noreferrer`),p(x,`btn btn-sm btn-primary`),i(x,c(`查看源码`));let S=f(`div`,s);i(s,S),p(S,`border-b border-base-300 bg-base-200/60 px-5 py-4`);let ne=f(`div`,S);i(S,ne),p(ne,`text-xs font-semibold text-base-content/55`),i(ne,c(`运行命令`));let C=f(`pre`,S);i(S,C),p(C,`mt-3 overflow-x-auto rounded-lg bg-slate-950 px-4 py-3 text-xs leading-6 text-slate-100`);let w=f(`code`,C);i(C,w);let T=e(`rue:slot:anchor`);i(w,T),t(()=>{let e=r.commands;n(()=>l(e,w,T))});let E=e(`rue:component:anchor`);return i(s,E),t(()=>{let e=d(g,{className:`[&_pre]:pt-12 [&_.shiki]:pt-12`,lang:`tsx`,code:r.code});n(()=>l(e,s,E))}),o}),o,u)}})});let Z=f(`section`,b);i(b,Z),p(Z,`mt-14 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-6 md:flex md:items-center md:justify-between`);let Q=f(`div`,Z);i(Z,Q);let Le=f(`h2`,Q);i(Q,Le),p(Le,`text-2xl font-bold text-base-content`),i(Le,c(`从 Rue 组件到全栈应用`));let Re=f(`p`,Q);i(Q,Re),p(Re,`mt-3 max-w-2xl text-sm leading-6 text-base-content/70`),i(Re,c(`安装 @rue-js/text 后，创建 app/page.tsx 即可启动。多数项目不需要手动维护 Vite 配置，Text.js 会自动组织 Rue 插件与应用路由。`));let $=f(`a`,Z);return i(Z,$),a($,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),a($,`target`,`_blank`),a($,`rel`,`noreferrer`),p($,`btn btn-primary mt-5 md:mt-0`),i($,c(`开始了解 Text.js`)),b});export{w as default};