import{Ct as e,Mt as t,Tt as n,dt as r,ft as ee,ht as i,mt as a,ot as o,pt as s,st as c,tn as l,vn as u}from"./context-8lXZvIn-.js";import{l as d,o as f,t as p}from"./vapor-runtime-ygJWVcNn.js";import{n as m}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as h}from"./src-DnK6Cdoa.js";import{t as g}from"./Code-DhoWkRkB.js";var _=`// app/page.tsx
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
pnpm --dir examples/text-static-export start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-static-export`,code:b}],w=()=>d(te=>{let b=s(`div`,te);n(b,`mx-auto max-w-[1180px]`);let w=s(`section`,b);c(b,w),n(w,`grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center`);let T=s(`div`,w);c(w,T);let E=s(`div`,T);c(T,E),n(E,`inline-flex items-center gap-2 rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-600`),c(E,a(`Rue ecosystem framework`));let re=s(`h1`,T);c(T,re),n(re,`mt-6 text-5xl font-black leading-tight text-base-content md:text-7xl`),c(re,a(`Text.js`));let ie=s(`p`,T);c(T,ie),n(ie,`mt-5 max-w-3xl text-lg leading-8 text-base-content/72 md:text-xl`),c(ie,a(`Text.js 是 Rue 生态中的全栈应用框架。它基于 Vite、Rue、RSC 与文件系统路由，把 App Router、Pages Router、SSR、API 路由和 Workers 部署整合成一条轻量开发路径。 设计上参考 Vercel 的 Next.js，并基于 Cloudflare 的 vinext 与 Workers 运行时继续演进。`));let D=s(`div`,T);c(T,D),n(D,`mt-8 flex flex-wrap gap-3`);let O=s(`a`,D);c(D,O),e(O,`href`,`https://www.npmjs.com/package/@rue-js/text`),e(O,`target`,`_blank`),e(O,`rel`,`noreferrer`),n(O,`btn btn-primary`),c(O,a(`安装 @rue-js/text`));let k=s(`a`,D);c(D,k),e(k,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),e(k,`target`,`_blank`),e(k,`rel`,`noreferrer`),n(k,`btn btn-outline`),c(k,a(`查看源码`));let A=s(`a`,D);c(D,A),l(()=>{e(A,`href`,String(h.__rueHref(`/guide/guide/scaling-up/tooling`)))}),o(A,`click`,e=>h.__rueOnClick(e,`/guide/guide/scaling-up/tooling`,!1)),o(A,`pointerenter`,e=>h.__rueOnPrefetch(e,`/guide/guide/scaling-up/tooling`,`hover`)),o(A,`focus`,e=>h.__rueOnPrefetch(e,`/guide/guide/scaling-up/tooling`,`hover`)),o(A,`pointerdown`,e=>h.__rueOnPrefetch(e,`/guide/guide/scaling-up/tooling`,`hover`)),o(A,`touchstart`,e=>h.__rueOnPrefetch(e,`/guide/guide/scaling-up/tooling`,`hover`)),n(A,`btn btn-ghost`),c(A,a(`工具链文档`));let j=s(`div`,w);c(w,j),n(j,`overflow-hidden rounded-lg border border-base-300 bg-slate-950 shadow-xl`);let M=s(`div`,j);c(j,M),n(M,`flex items-center justify-between border-b border-white/10 px-4 py-3`);let N=s(`div`,M);c(M,N),n(N,`flex gap-2`);let ae=s(`span`,N);c(N,ae),n(ae,`h-3 w-3 rounded-full bg-rose-400`);let oe=s(`span`,N);c(N,oe),n(oe,`h-3 w-3 rounded-full bg-amber-400`);let se=s(`span`,N);c(N,se),n(se,`h-3 w-3 rounded-full bg-emerald-400`);let ce=s(`span`,M);c(M,ce),n(ce,`text-xs text-white/45`),c(ce,a(`text app`));let le=r(`rue:component:anchor`);c(j,le),l(()=>{let e=p(g,{className:`h-[390px]`,lang:`tsx`,code:_});u(()=>f(e,j,le))});let P=s(`section`,b);c(b,P),n(P,`grid gap-4 md:grid-cols-3`);let ue=r(`rue:list:start`),de=r(`rue:list:end`);c(P,ue),c(P,de);let fe=new Map;l(()=>{fe=m({items:x||[],getKey:(e,t)=>e.label,elements:fe,parent:P,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(a,o,p,m,h)=>{f(d(()=>{let o=ee(),d=s(`div`,o);c(o,d),l(()=>{e(d,`key`,String(a.label))}),n(d,`rounded-lg border border-base-300 bg-base-100 p-5`);let p=s(`div`,d);c(d,p),n(p,`text-2xl font-black text-base-content`);let m=i(p);c(p,m),l(()=>{t(m,a.value)});let h=s(`div`,d);c(d,h),n(h,`mt-2 text-sm font-semibold text-primary`);let g=r(`rue:slot:anchor`);c(h,g),l(()=>{let e=a.label;u(()=>f(e,h,g))});let _=s(`p`,d);c(d,_),n(_,`mt-3 text-sm leading-6 text-base-content/68`);let v=r(`rue:slot:anchor`);return c(_,v),l(()=>{let e=a.description;u(()=>f(e,_,v))}),o}),o,p)}})});let F=s(`section`,b);c(b,F),n(F,`mt-14`);let I=s(`div`,F);c(F,I),n(I,`max-w-3xl`);let pe=s(`div`,I);c(I,pe),n(pe,`text-sm font-semibold text-primary`),c(pe,a(`Based on Vercel and Cloudflare`));let me=s(`h2`,I);c(I,me),n(me,`mt-3 text-3xl font-bold text-base-content`),c(me,a(`熟悉的应用模型，面向边缘运行时`));let he=s(`p`,I);c(I,he),n(he,`mt-4 text-base leading-7 text-base-content/70`),c(he,a(`Text.js 不是从零发明一套全栈约定，而是把 Vercel Next.js 的应用框架经验、Cloudflare vinext 的 Vite-first / Workers 部署路径，与 Rue 的 JSX / TSX 运行时组合到同一套工具链里。`));let L=s(`div`,F);c(F,L),n(L,`mt-6 grid gap-4 md:grid-cols-3`);let ge=r(`rue:list:start`),_e=r(`rue:list:end`);c(L,ge),c(L,_e);let ve=new Map;l(()=>{ve=m({items:S||[],getKey:(e,t)=>e.name,elements:ve,parent:L,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(t,i,a,o,p)=>{f(d(()=>{let i=ee(),a=s(`a`,i);c(i,a),l(()=>{e(a,`key`,String(t.name))}),l(()=>{e(a,`href`,String(t.href))}),e(a,`target`,`_blank`),e(a,`rel`,`noreferrer`),n(a,`rounded-lg border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let o=s(`h3`,a);c(a,o),n(o,`text-lg font-semibold text-base-content`);let d=r(`rue:slot:anchor`);c(o,d),l(()=>{let e=t.name;u(()=>f(e,o,d))});let p=s(`p`,a);c(a,p),n(p,`mt-3 text-sm leading-6 text-base-content/68`);let m=r(`rue:slot:anchor`);return c(p,m),l(()=>{let e=t.description;u(()=>f(e,p,m))}),i}),i,a)}})});let R=s(`section`,b);c(b,R),n(R,`mt-14 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]`);let z=s(`div`,R);c(R,z);let ye=s(`div`,z);c(z,ye),n(ye,`text-sm font-semibold text-primary`),c(ye,a(`Why Text.js`));let be=s(`h2`,z);c(z,be),n(be,`mt-3 text-3xl font-bold text-base-content`),c(be,a(`同一个 Rue 应用，扩展到全栈`));let xe=s(`p`,z);c(z,xe),n(xe,`mt-4 text-base leading-7 text-base-content/70`),c(xe,a(`参考 vinext 的 Vite-first 思路，Text.js 把熟悉的文件系统约定放到 Rue 运行时之上。保留简单组件开发体验，同时补齐服务端、路由和部署层。`));let B=s(`div`,R);c(R,B),n(B,`grid gap-4 md:grid-cols-2`);let Se=r(`rue:list:start`),Ce=r(`rue:list:end`);c(B,Se),c(B,Ce);let we=new Map;l(()=>{we=m({items:ne||[],getKey:(e,t)=>e.title,elements:we,parent:B,before:Ce,singleRoot:!0,trackIndex:!1,start:Se,renderItem:(t,i,a,o,p)=>{f(d(()=>{let i=ee(),a=s(`article`,i);c(i,a),l(()=>{e(a,`key`,String(t.title))}),n(a,`rounded-lg border border-base-300 bg-base-100 p-5`);let o=s(`h3`,a);c(a,o),n(o,`text-lg font-semibold text-base-content`);let d=r(`rue:slot:anchor`);c(o,d),l(()=>{let e=t.title;u(()=>f(e,o,d))});let p=s(`p`,a);c(a,p),n(p,`mt-3 text-sm leading-6 text-base-content/68`);let m=r(`rue:slot:anchor`);return c(p,m),l(()=>{let e=t.description;u(()=>f(e,p,m))}),i}),i,a)}})});let V=s(`section`,b);c(b,V),n(V,`mt-14 grid gap-6 lg:grid-cols-2`);let H=s(`div`,V);c(V,H),n(H,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let U=s(`div`,H);c(H,U),n(U,`border-b border-base-300 px-5 py-4`);let Te=s(`h2`,U);c(U,Te),n(Te,`text-xl font-semibold text-base-content`),c(Te,a(`路由与 API`));let Ee=s(`p`,U);c(U,Ee),n(Ee,`mt-2 text-sm text-base-content/65`),c(Ee,a(`从页面到接口都沿用 app 目录约定，动态参数和 route handler 放在同一套图谱里。`));let De=r(`rue:component:anchor`);c(H,De),l(()=>{let e=p(g,{className:`h-[300px]`,lang:`tsx`,code:y});u(()=>f(e,H,De))});let W=s(`div`,V);c(V,W),n(W,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let G=s(`div`,W);c(W,G),n(G,`border-b border-base-300 px-5 py-4`);let Oe=s(`h2`,G);c(G,Oe),n(Oe,`text-xl font-semibold text-base-content`),c(Oe,a(`CLI 与部署`));let ke=s(`p`,G);c(G,ke),n(ke,`mt-2 text-sm text-base-content/65`),c(ke,a(`text 命令负责开发、构建、检查、类型生成和 Cloudflare Workers 部署。`));let Ae=r(`rue:component:anchor`);c(W,Ae),l(()=>{let e=p(g,{className:`h-[300px]`,lang:`sh`,code:v});u(()=>f(e,W,Ae))});let K=s(`section`,b);c(b,K),n(K,`mt-14`);let q=s(`div`,K);c(K,q),n(q,`flex flex-col gap-4 md:flex-row md:items-end md:justify-between`);let J=s(`div`,q);c(q,J);let je=s(`div`,J);c(J,je),n(je,`text-sm font-semibold text-primary`),c(je,a(`Demo source`));let Me=s(`h2`,J);c(J,Me),n(Me,`mt-3 text-3xl font-bold text-base-content`),c(Me,a(`可直接查看的 Text.js 示例源码`));let Ne=s(`p`,J);c(J,Ne),n(Ne,`mt-4 max-w-3xl text-base leading-7 text-base-content/70`),c(Ne,a(`仓库内提供了 SSR 博客和静态导出两个 demo，用同一套 App Router 约定覆盖服务端渲染、API 路由、客户端交互、动态路由预渲染和纯静态文件交付。`));let Y=s(`a`,q);c(q,Y),e(Y,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/examples`),e(Y,`target`,`_blank`),e(Y,`rel`,`noreferrer`),n(Y,`btn btn-outline`),c(Y,a(`查看全部 examples`));let X=s(`div`,K);c(K,X),n(X,`mt-6 grid gap-6 lg:grid-cols-2`);let Pe=r(`rue:list:start`),Fe=r(`rue:list:end`);c(X,Pe),c(X,Fe);let Ie=new Map;l(()=>{Ie=m({items:C||[],getKey:(e,t)=>e.label,elements:Ie,parent:X,before:Fe,singleRoot:!0,trackIndex:!1,start:Pe,renderItem:(t,i,o,m,h)=>{f(d(()=>{let i=ee(),o=s(`article`,i);c(i,o),l(()=>{e(o,`key`,String(t.label))}),n(o,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let d=s(`div`,o);c(o,d),n(d,`border-b border-base-300 px-5 py-4`);let m=s(`div`,d);c(d,m),n(m,`text-xs font-semibold uppercase tracking-wide text-primary`);let h=r(`rue:slot:anchor`);c(m,h),l(()=>{let e=t.label;u(()=>f(e,m,h))});let _=s(`h3`,d);c(d,_),n(_,`mt-2 text-xl font-semibold text-base-content`);let v=r(`rue:slot:anchor`);c(_,v),l(()=>{let e=t.title;u(()=>f(e,_,v))});let y=s(`p`,d);c(d,y),n(y,`mt-2 text-sm leading-6 text-base-content/65`);let te=r(`rue:slot:anchor`);c(y,te),l(()=>{let e=t.description;u(()=>f(e,y,te))});let b=s(`div`,d);c(d,b),n(b,`mt-4 flex flex-wrap gap-3`);let x=s(`a`,b);c(b,x),l(()=>{e(x,`href`,String(t.href))}),e(x,`target`,`_blank`),e(x,`rel`,`noreferrer`),n(x,`btn btn-sm btn-primary`),c(x,a(`查看源码`));let S=s(`div`,o);c(o,S),n(S,`border-b border-base-300 bg-base-200/60 px-5 py-4`);let ne=s(`div`,S);c(S,ne),n(ne,`text-xs font-semibold text-base-content/55`),c(ne,a(`运行命令`));let C=s(`pre`,S);c(S,C),n(C,`mt-3 overflow-x-auto rounded-lg bg-slate-950 px-4 py-3 text-xs leading-6 text-slate-100`);let w=s(`code`,C);c(C,w);let T=r(`rue:slot:anchor`);c(w,T),l(()=>{let e=t.commands;u(()=>f(e,w,T))});let E=r(`rue:component:anchor`);return c(o,E),l(()=>{let e=p(g,{className:`[&_pre]:pt-12 [&_.shiki]:pt-12`,lang:`tsx`,code:t.code});u(()=>f(e,o,E))}),i}),i,o)}})});let Z=s(`section`,b);c(b,Z),n(Z,`mt-14 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-6 md:flex md:items-center md:justify-between`);let Q=s(`div`,Z);c(Z,Q);let Le=s(`h2`,Q);c(Q,Le),n(Le,`text-2xl font-bold text-base-content`),c(Le,a(`从 Rue 组件到全栈应用`));let Re=s(`p`,Q);c(Q,Re),n(Re,`mt-3 max-w-2xl text-sm leading-6 text-base-content/70`),c(Re,a(`安装 @rue-js/text 后，创建 app/page.tsx 即可启动。多数项目不需要手动维护 Vite 配置，Text.js 会自动组织 Rue 插件与应用路由。`));let $=s(`a`,Z);return c(Z,$),e($,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),e($,`target`,`_blank`),e($,`rel`,`noreferrer`),n($,`btn btn-primary mt-5 md:mt-0`),c($,a(`开始了解 Text.js`)),b});export{w as default};