import{$t as e,Q as t,Z as n,dt as r,et as i,it as a,l as o,lt as s,nt as c,o as l,rt as u,t as d,tt as ee,vt as f,zt as p}from"./vapor-runtime-DsQWl-IB.js";import{n as m}from"./vapor-helpers-vapor-Dg64FcpK.js";import{n as h}from"./src-BQmFTPN8.js";import{t as g}from"./Code-4SUSUwRg.js";var _=`// app/page.tsx
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
pnpm --dir examples/text-static-export start`,href:`https://github.com/hunzhiwange/ruejs/tree/main/examples/text-static-export`,code:b}],w=()=>o(te=>{let b=c(`div`,te);r(b,`mx-auto max-w-[1180px]`);let w=c(`section`,b);t(b,w),r(w,`grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center`);let T=c(`div`,w);t(w,T);let E=c(`div`,T);t(T,E),r(E,`inline-flex items-center gap-2 rounded-lg border border-sky-500/25 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-600`),t(E,u(`Rue ecosystem framework`));let re=c(`h1`,T);t(T,re),r(re,`mt-6 text-5xl font-black leading-tight text-base-content md:text-7xl`),t(re,u(`Text.js`));let ie=c(`p`,T);t(T,ie),r(ie,`mt-5 max-w-3xl text-lg leading-8 text-base-content/72 md:text-xl`),t(ie,u(`Text.js 是 Rue 生态中的全栈应用框架。它基于 Vite、Rue、RSC 与文件系统路由，把 App Router、Pages Router、SSR、API 路由和 Workers 部署整合成一条轻量开发路径。 设计上参考 Vercel 的 Next.js，并基于 Cloudflare 的 vinext 与 Workers 运行时继续演进。`));let D=c(`div`,T);t(T,D),r(D,`mt-8 flex flex-wrap gap-3`);let O=c(`a`,D);t(D,O),s(O,`href`,`https://www.npmjs.com/package/@rue-js/text`),s(O,`target`,`_blank`),s(O,`rel`,`noreferrer`),r(O,`btn btn-primary`),t(O,u(`安装 @rue-js/text`));let k=c(`a`,D);t(D,k),s(k,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),s(k,`target`,`_blank`),s(k,`rel`,`noreferrer`),r(k,`btn btn-outline`),t(k,u(`查看源码`));let A=c(`a`,D);t(D,A),p(()=>{s(A,`href`,String(h.__rueHref(`/guide/guide/scaling-up/tooling`)))}),n(A,`click`,e=>h.__rueOnClick(e,`/guide/guide/scaling-up/tooling`,!1)),r(A,`btn btn-ghost`),t(A,u(`工具链文档`));let j=c(`div`,w);t(w,j),r(j,`overflow-hidden rounded-lg border border-base-300 bg-slate-950 shadow-xl`);let M=c(`div`,j);t(j,M),r(M,`flex items-center justify-between border-b border-white/10 px-4 py-3`);let N=c(`div`,M);t(M,N),r(N,`flex gap-2`);let ae=c(`span`,N);t(N,ae),r(ae,`h-3 w-3 rounded-full bg-rose-400`);let oe=c(`span`,N);t(N,oe),r(oe,`h-3 w-3 rounded-full bg-amber-400`);let se=c(`span`,N);t(N,se),r(se,`h-3 w-3 rounded-full bg-emerald-400`);let ce=c(`span`,M);t(M,ce),r(ce,`text-xs text-white/45`),t(ce,u(`text app`));let le=i(`rue:component:anchor`);t(j,le),p(()=>{let t=d(g,{className:`h-[390px]`,lang:`tsx`,code:_});e(()=>l(t,j,le))});let P=c(`section`,b);t(b,P),r(P,`grid gap-4 md:grid-cols-3`);let ue=i(`rue:list:start`),de=i(`rue:list:end`);t(P,ue),t(P,de);let fe=new Map;p(()=>{fe=m({items:x||[],getKey:(e,t)=>e.label,elements:fe,parent:P,before:de,singleRoot:!0,trackIndex:!1,start:ue,renderItem:(n,u,d,m,h)=>{l(o(()=>{let o=ee(),u=c(`div`,o);t(o,u),p(()=>{s(u,`key`,String(n.label))}),r(u,`rounded-lg border border-base-300 bg-base-100 p-5`);let d=c(`div`,u);t(u,d),r(d,`text-2xl font-black text-base-content`);let m=a(d);t(d,m),p(()=>{f(m,n.value)});let h=c(`div`,u);t(u,h),r(h,`mt-2 text-sm font-semibold text-primary`);let g=i(`rue:slot:anchor`);t(h,g),p(()=>{let t=n.label;e(()=>l(t,h,g))});let _=c(`p`,u);t(u,_),r(_,`mt-3 text-sm leading-6 text-base-content/68`);let v=i(`rue:slot:anchor`);return t(_,v),p(()=>{let t=n.description;e(()=>l(t,_,v))}),o}),u,d)}})});let F=c(`section`,b);t(b,F),r(F,`mt-14`);let I=c(`div`,F);t(F,I),r(I,`max-w-3xl`);let pe=c(`div`,I);t(I,pe),r(pe,`text-sm font-semibold text-primary`),t(pe,u(`Based on Vercel and Cloudflare`));let me=c(`h2`,I);t(I,me),r(me,`mt-3 text-3xl font-bold text-base-content`),t(me,u(`熟悉的应用模型，面向边缘运行时`));let he=c(`p`,I);t(I,he),r(he,`mt-4 text-base leading-7 text-base-content/70`),t(he,u(`Text.js 不是从零发明一套全栈约定，而是把 Vercel Next.js 的应用框架经验、Cloudflare vinext 的 Vite-first / Workers 部署路径，与 Rue 的 JSX / TSX 运行时组合到同一套工具链里。`));let L=c(`div`,F);t(F,L),r(L,`mt-6 grid gap-4 md:grid-cols-3`);let ge=i(`rue:list:start`),_e=i(`rue:list:end`);t(L,ge),t(L,_e);let ve=new Map;p(()=>{ve=m({items:S||[],getKey:(e,t)=>e.name,elements:ve,parent:L,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(n,a,u,d,f)=>{l(o(()=>{let a=ee(),o=c(`a`,a);t(a,o),p(()=>{s(o,`key`,String(n.name))}),p(()=>{s(o,`href`,String(n.href))}),s(o,`target`,`_blank`),s(o,`rel`,`noreferrer`),r(o,`rounded-lg border border-base-300 bg-base-100 p-5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg`);let u=c(`h3`,o);t(o,u),r(u,`text-lg font-semibold text-base-content`);let d=i(`rue:slot:anchor`);t(u,d),p(()=>{let t=n.name;e(()=>l(t,u,d))});let f=c(`p`,o);t(o,f),r(f,`mt-3 text-sm leading-6 text-base-content/68`);let m=i(`rue:slot:anchor`);return t(f,m),p(()=>{let t=n.description;e(()=>l(t,f,m))}),a}),a,u)}})});let R=c(`section`,b);t(b,R),r(R,`mt-14 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]`);let z=c(`div`,R);t(R,z);let ye=c(`div`,z);t(z,ye),r(ye,`text-sm font-semibold text-primary`),t(ye,u(`Why Text.js`));let be=c(`h2`,z);t(z,be),r(be,`mt-3 text-3xl font-bold text-base-content`),t(be,u(`同一个 Rue 应用，扩展到全栈`));let xe=c(`p`,z);t(z,xe),r(xe,`mt-4 text-base leading-7 text-base-content/70`),t(xe,u(`参考 vinext 的 Vite-first 思路，Text.js 把熟悉的文件系统约定放到 Rue 运行时之上。保留简单组件开发体验，同时补齐服务端、路由和部署层。`));let B=c(`div`,R);t(R,B),r(B,`grid gap-4 md:grid-cols-2`);let Se=i(`rue:list:start`),Ce=i(`rue:list:end`);t(B,Se),t(B,Ce);let we=new Map;p(()=>{we=m({items:ne||[],getKey:(e,t)=>e.title,elements:we,parent:B,before:Ce,singleRoot:!0,trackIndex:!1,start:Se,renderItem:(n,a,u,d,f)=>{l(o(()=>{let a=ee(),o=c(`article`,a);t(a,o),p(()=>{s(o,`key`,String(n.title))}),r(o,`rounded-lg border border-base-300 bg-base-100 p-5`);let u=c(`h3`,o);t(o,u),r(u,`text-lg font-semibold text-base-content`);let d=i(`rue:slot:anchor`);t(u,d),p(()=>{let t=n.title;e(()=>l(t,u,d))});let f=c(`p`,o);t(o,f),r(f,`mt-3 text-sm leading-6 text-base-content/68`);let m=i(`rue:slot:anchor`);return t(f,m),p(()=>{let t=n.description;e(()=>l(t,f,m))}),a}),a,u)}})});let V=c(`section`,b);t(b,V),r(V,`mt-14 grid gap-6 lg:grid-cols-2`);let H=c(`div`,V);t(V,H),r(H,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let U=c(`div`,H);t(H,U),r(U,`border-b border-base-300 px-5 py-4`);let Te=c(`h2`,U);t(U,Te),r(Te,`text-xl font-semibold text-base-content`),t(Te,u(`路由与 API`));let Ee=c(`p`,U);t(U,Ee),r(Ee,`mt-2 text-sm text-base-content/65`),t(Ee,u(`从页面到接口都沿用 app 目录约定，动态参数和 route handler 放在同一套图谱里。`));let De=i(`rue:component:anchor`);t(H,De),p(()=>{let t=d(g,{className:`h-[300px]`,lang:`tsx`,code:y});e(()=>l(t,H,De))});let W=c(`div`,V);t(V,W),r(W,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let G=c(`div`,W);t(W,G),r(G,`border-b border-base-300 px-5 py-4`);let Oe=c(`h2`,G);t(G,Oe),r(Oe,`text-xl font-semibold text-base-content`),t(Oe,u(`CLI 与部署`));let ke=c(`p`,G);t(G,ke),r(ke,`mt-2 text-sm text-base-content/65`),t(ke,u(`ruetext 命令负责开发、构建、检查、类型生成和 Cloudflare Workers 部署。`));let Ae=i(`rue:component:anchor`);t(W,Ae),p(()=>{let t=d(g,{className:`h-[300px]`,lang:`sh`,code:v});e(()=>l(t,W,Ae))});let K=c(`section`,b);t(b,K),r(K,`mt-14`);let q=c(`div`,K);t(K,q),r(q,`flex flex-col gap-4 md:flex-row md:items-end md:justify-between`);let J=c(`div`,q);t(q,J);let je=c(`div`,J);t(J,je),r(je,`text-sm font-semibold text-primary`),t(je,u(`Demo source`));let Me=c(`h2`,J);t(J,Me),r(Me,`mt-3 text-3xl font-bold text-base-content`),t(Me,u(`可直接查看的 Text.js 示例源码`));let Ne=c(`p`,J);t(J,Ne),r(Ne,`mt-4 max-w-3xl text-base leading-7 text-base-content/70`),t(Ne,u(`仓库内提供了 SSR 博客和静态导出两个 demo，用同一套 App Router 约定覆盖服务端渲染、API 路由、客户端交互、动态路由预渲染和纯静态文件交付。`));let Y=c(`a`,q);t(q,Y),s(Y,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/examples`),s(Y,`target`,`_blank`),s(Y,`rel`,`noreferrer`),r(Y,`btn btn-outline`),t(Y,u(`查看全部 examples`));let X=c(`div`,K);t(K,X),r(X,`mt-6 grid gap-6 lg:grid-cols-2`);let Pe=i(`rue:list:start`),Fe=i(`rue:list:end`);t(X,Pe),t(X,Fe);let Ie=new Map;p(()=>{Ie=m({items:C||[],getKey:(e,t)=>e.label,elements:Ie,parent:X,before:Fe,singleRoot:!0,trackIndex:!1,start:Pe,renderItem:(n,a,f,m,h)=>{l(o(()=>{let a=ee(),o=c(`article`,a);t(a,o),p(()=>{s(o,`key`,String(n.label))}),r(o,`overflow-hidden rounded-lg border border-base-300 bg-base-100`);let f=c(`div`,o);t(o,f),r(f,`border-b border-base-300 px-5 py-4`);let m=c(`div`,f);t(f,m),r(m,`text-xs font-semibold uppercase tracking-wide text-primary`);let h=i(`rue:slot:anchor`);t(m,h),p(()=>{let t=n.label;e(()=>l(t,m,h))});let _=c(`h3`,f);t(f,_),r(_,`mt-2 text-xl font-semibold text-base-content`);let v=i(`rue:slot:anchor`);t(_,v),p(()=>{let t=n.title;e(()=>l(t,_,v))});let y=c(`p`,f);t(f,y),r(y,`mt-2 text-sm leading-6 text-base-content/65`);let te=i(`rue:slot:anchor`);t(y,te),p(()=>{let t=n.description;e(()=>l(t,y,te))});let b=c(`div`,f);t(f,b),r(b,`mt-4 flex flex-wrap gap-3`);let x=c(`a`,b);t(b,x),p(()=>{s(x,`href`,String(n.href))}),s(x,`target`,`_blank`),s(x,`rel`,`noreferrer`),r(x,`btn btn-sm btn-primary`),t(x,u(`查看源码`));let S=c(`div`,o);t(o,S),r(S,`border-b border-base-300 bg-base-200/60 px-5 py-4`);let ne=c(`div`,S);t(S,ne),r(ne,`text-xs font-semibold text-base-content/55`),t(ne,u(`运行命令`));let C=c(`pre`,S);t(S,C),r(C,`mt-3 overflow-x-auto rounded-lg bg-slate-950 px-4 py-3 text-xs leading-6 text-slate-100`);let w=c(`code`,C);t(C,w);let T=i(`rue:slot:anchor`);t(w,T),p(()=>{let t=n.commands;e(()=>l(t,w,T))});let E=i(`rue:component:anchor`);return t(o,E),p(()=>{let t=d(g,{className:`[&_pre]:pt-12 [&_.shiki]:pt-12`,lang:`tsx`,code:n.code});e(()=>l(t,o,E))}),a}),a,f)}})});let Z=c(`section`,b);t(b,Z),r(Z,`mt-14 rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-6 md:flex md:items-center md:justify-between`);let Q=c(`div`,Z);t(Z,Q);let Le=c(`h2`,Q);t(Q,Le),r(Le,`text-2xl font-bold text-base-content`),t(Le,u(`从 Rue 组件到全栈应用`));let Re=c(`p`,Q);t(Q,Re),r(Re,`mt-3 max-w-2xl text-sm leading-6 text-base-content/70`),t(Re,u(`安装 @rue-js/text 后，创建 app/page.tsx 即可启动。多数项目不需要手动维护 Vite 配置，Text.js 会自动组织 Rue 插件与应用路由。`));let $=c(`a`,Z);return t(Z,$),s($,`href`,`https://github.com/hunzhiwange/ruejs/tree/main/packages/text`),s($,`target`,`_blank`),s($,`rel`,`noreferrer`),r($,`btn btn-primary mt-5 md:mt-0`),t($,u(`开始了解 Text.js`)),b});export{w as default};