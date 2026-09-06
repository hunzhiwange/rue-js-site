import{At as e,Mt as t,Ot as n,Q as r,_t as i,at as a,bn as o,bt as s,ct as c,dt as l,et as u,gt as d,kn as f,kt as p,on as m,ut as h,vn as g,vt as _,wn as v,xt as ee}from"./rue-runtime-HIMg8Lz8.js";import{n as y,t as b}from"./DocCodeTabs-DBd11kr9.js";var te=g(`<div class="tip"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`);function x(o){let p=a(o.components),m=Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`},p.get());return c(e(()=>{let e=i(),a=d(`rue:component:anchor`);l(e,a);let o=t(m.h1,()=>({children:`快速开始 `}));h(o,e,a);let c=d(`rue:slot:anchor`);l(e,c),v(()=>{f(()=>h(`
`,e,c))});let u=d(`rue:component:anchor`);l(e,u);let p=t(m.h2,()=>({children:`创建 Rue 应用 `}));h(p,e,u);let g=d(`rue:slot:anchor`);l(e,g),v(()=>{f(()=>h(`
`,e,g))});let x=te().content.cloneNode(!0),S=x.firstChild,ne=S.childNodes[0],re=ne.parentNode,ie=S.childNodes[1],ae=ie.parentNode;e.appendChild(x),v(()=>{let e=t(m.strong,()=>({children:`前置条件`})),n=t(m.p,()=>({children:e}));f(()=>h(n,re,ne))}),v(()=>{let e=t(m.li,()=>({children:`熟悉命令行`})),n=t(m.a,()=>({href:`https://nodejs.org/`,children:`Node.js`})),r=t(m.li,()=>({children:[`安装 `,n,` 版本 >=22.12.0`]})),i=t(m.ul,()=>({children:[`
`,e,`
`,r,`
`]}));f(()=>h(i,ae,ie))});let oe=d(`rue:slot:anchor`);l(e,oe),v(()=>{f(()=>h(`
`,e,oe))});let se=d(`rue:component:anchor`);l(e,se),v(()=>{let n=t(m.a,()=>({href:`/guide/guide/extras/ways-of-using-rue#single-page-application-spa`,children:`单页应用`})),r=t(m.a,()=>({href:`https://vitejs.dev`,children:`Vite`})),i=t(m.p,()=>({children:[`在本节中，我们将介绍如何在本地机器上搭建一个 Rue `,n,`。创建的项目将使用基于 `,r,` 的构建设置，并允许我们使用 JSX/TSX 编写组件。`]}));f(()=>h(i,e,se))});let C=d(`rue:slot:anchor`);l(e,C),v(()=>{f(()=>h(`
`,e,C))});let w=d(`rue:component:anchor`);l(e,w),v(()=>{let n=t(m.a,()=>({href:`https://nodejs.org/`,children:`Node.js`})),r=t(m.code,()=>({children:`$`})),i=t(m.p,()=>({children:[`确保你已安装最新版本的 `,n,`，并且当前工作目录是你打算创建项目的目录。在命令行中运行以下命令（不带 `,r,` 符号）：`]}));f(()=>h(i,e,w))});let T=d(`rue:slot:anchor`);l(e,T),v(()=>{f(()=>h(`
`,e,T))});let E=d(`rue:component:anchor`);l(e,E),v(()=>{let n=t(m.code,()=>({className:`language-sh`,children:`$ npm create rue@latest
`})),r=t(m.pre,()=>({children:n})),i=t(b,()=>({value:`npm`,label:`npm`,children:r})),a=t(m.code,()=>({className:`language-sh`,children:`$ pnpm create rue@latest
`})),o=t(m.pre,()=>({children:a})),s=t(b,()=>({value:`pnpm`,label:`pnpm`,children:o})),c=t(m.code,()=>({className:`language-sh`,children:`# 对于 Yarn (v1+)
$ yarn create rue

# 对于 Yarn Modern (v2+)
$ yarn create rue@latest

# 对于 Yarn ^v4.11
$ yarn dlx create-rue@latest
`})),l=t(m.pre,()=>({children:c})),u=t(b,()=>({value:`yarn`,label:`yarn`,children:l})),d=t(m.code,()=>({className:`language-sh`,children:`$ bun create rue@latest
`})),p=t(m.pre,()=>({children:d})),g=t(b,()=>({value:`bun`,label:`bun`,children:p})),_=t(y,()=>({ariaLabel:`创建 Rue 应用`,children:[i,s,u,g]}));f(()=>h(_,e,E))});let D=d(`rue:slot:anchor`);l(e,D),v(()=>{f(()=>h(`
`,e,D))});let O=d(`rue:component:anchor`);l(e,O),v(()=>{let n=t(m.code,()=>({children:`create-rue`})),r=t(m.p,()=>({children:[`此命令将安装并执行 `,n,`，即官方的 Rue 项目脚手架工具。你将看到几个可选功能的提示，例如 TypeScript 和测试支持：`]}));f(()=>h(r,e,O))});let k=d(`rue:slot:anchor`);l(e,k),v(()=>{f(()=>h(`
`,e,k))});let A=d(`rue:component:anchor`);l(e,A),v(()=>{let n=t(m.code,()=>({className:`language-sh`,children:`✔ 项目名称: … <your-project-name>
正在 ./<your-project-name> 中搭建项目...
完成。
`})),r=t(m.pre,()=>({children:n}));f(()=>h(r,e,A))});let j=d(`rue:slot:anchor`);l(e,j),v(()=>{f(()=>h(`
`,e,j))});let M=d(`rue:component:anchor`);l(e,M),v(()=>{let n=t(m.code,()=>({children:`No`})),r=t(m.p,()=>({children:[`如果你不确定某个选项，现在只需按回车选择 `,n,`。项目创建完成后，按照说明安装依赖并启动开发服务器：`]}));f(()=>h(r,e,M))});let N=d(`rue:slot:anchor`);l(e,N),v(()=>{f(()=>h(`
`,e,N))});let P=d(`rue:component:anchor`);l(e,P),v(()=>{let n=t(m.code,()=>({className:`language-sh`,children:`$ cd <your-project-name>
$ npm install
$ npm run dev
`})),r=t(m.pre,()=>({children:n})),i=t(b,()=>({value:`npm`,label:`npm`,children:r})),a=t(m.code,()=>({className:`language-sh`,children:`$ cd <your-project-name>
$ pnpm install
$ pnpm run dev
`})),o=t(m.pre,()=>({children:a})),s=t(b,()=>({value:`pnpm`,label:`pnpm`,children:o})),c=t(m.code,()=>({className:`language-sh`,children:`$ cd <your-project-name>
$ yarn
$ yarn dev
`})),l=t(m.pre,()=>({children:c})),u=t(b,()=>({value:`yarn`,label:`yarn`,children:l})),d=t(m.code,()=>({className:`language-sh`,children:`$ cd <your-project-name>
$ bun install
$ bun run dev
`})),p=t(m.pre,()=>({children:d})),g=t(b,()=>({value:`bun`,label:`bun`,children:p})),_=t(y,()=>({ariaLabel:`安装依赖并启动开发服务器`,children:[i,s,u,g]}));f(()=>h(_,e,P))});let F=d(`rue:slot:anchor`);l(e,F),v(()=>{f(()=>h(`
`,e,F))});let I=d(`rue:component:anchor`);l(e,I);let ce=t(m.p,()=>({children:`现在你应该已经运行了你的第一个 Rue 项目！请注意，生成项目中的示例组件是使用 JSX/TSX 编写的。以下是一些额外的提示：`}));h(ce,e,I);let L=d(`rue:slot:anchor`);l(e,L),v(()=>{f(()=>h(`
`,e,L))});let R=d(`rue:component:anchor`);l(e,R),v(()=>{let n=t(m.a,()=>({href:`https://code.visualstudio.com/`,children:`Visual Studio Code`})),r=t(m.a,()=>({href:`/guide/guide/scaling-up/tooling`,children:`IDE 支持部分`})),i=t(m.li,()=>({children:[`推荐的 IDE 配置是 `,n,`。如果你使用其他编辑器，请查看 `,r,`。`]})),a=t(m.a,()=>({href:`/guide/guide/scaling-up/tooling`,children:`工具指南`})),o=t(m.li,()=>({children:[`更多工具细节，包括与后端框架的集成，在 `,a,` 中讨论。`]})),s=t(m.a,()=>({href:`https://vitejs.dev`,children:`Vite 文档`})),c=t(m.li,()=>({children:[`要了解有关底层构建工具 Vite 的更多信息，请查看 `,s,`。`]})),l=t(m.a,()=>({href:`/guide/guide/typescript/overview`,children:`TypeScript 使用指南`})),u=t(m.li,()=>({children:[`如果你选择使用 TypeScript，请查看 `,l,`。`]})),d=t(m.ul,()=>({children:[`
`,i,`
`,o,`
`,c,`
`,u,`
`]}));f(()=>h(d,e,R))});let z=d(`rue:slot:anchor`);l(e,z),v(()=>{f(()=>h(`
`,e,z))});let B=d(`rue:component:anchor`);l(e,B);let le=t(m.p,()=>({children:`当你准备将应用部署到生产环境时，运行以下命令：`}));h(le,e,B);let ue=d(`rue:slot:anchor`);l(e,ue),v(()=>{f(()=>h(`
`,e,ue))});let V=d(`rue:component:anchor`);l(e,V),v(()=>{let n=t(m.code,()=>({className:`language-sh`,children:`$ npm run build
`})),r=t(m.pre,()=>({children:n})),i=t(b,()=>({value:`npm`,label:`npm`,children:r})),a=t(m.code,()=>({className:`language-sh`,children:`$ pnpm run build
`})),o=t(m.pre,()=>({children:a})),s=t(b,()=>({value:`pnpm`,label:`pnpm`,children:o})),c=t(m.code,()=>({className:`language-sh`,children:`$ yarn build
`})),l=t(m.pre,()=>({children:c})),u=t(b,()=>({value:`yarn`,label:`yarn`,children:l})),d=t(m.code,()=>({className:`language-sh`,children:`$ bun run build
`})),p=t(m.pre,()=>({children:d})),g=t(b,()=>({value:`bun`,label:`bun`,children:p})),_=t(y,()=>({ariaLabel:`生产构建`,children:[i,s,u,g]}));f(()=>h(_,e,V))});let H=d(`rue:slot:anchor`);l(e,H),v(()=>{f(()=>h(`
`,e,H))});let U=d(`rue:component:anchor`);l(e,U),v(()=>{let n=t(m.code,()=>({children:`./dist`})),r=t(m.a,()=>({href:`/guide/guide/best-practices/production-deployment`,children:`生产部署指南`})),i=t(m.p,()=>({children:[`这将在项目的 `,n,` 目录中创建你的应用的生产就绪构建。查看`,r,`以了解有关将应用部署到生产环境的更多信息。`]}));f(()=>h(i,e,U))});let W=d(`rue:slot:anchor`);l(e,W),v(()=>{f(()=>h(`
`,e,W))});let G=d(`rue:component:anchor`);l(e,G),v(()=>{let n=t(m.code,()=>({children:`index.html`})),r=t(m.code,()=>({children:`file://`})),i=t(m.p,()=>({children:[`如果你直接在浏览器中打开上述 `,n,`，你会发现它会抛出错误，因为 ES 模块无法在 `,r,` 协议上工作，这是浏览器打开本地文件时使用的协议。`]}));f(()=>h(i,e,G))});let de=d(`rue:slot:anchor`);l(e,de),v(()=>{f(()=>h(`
`,e,de))});let fe=d(`rue:component:anchor`);l(e,fe),v(()=>{let n=t(m.code,()=>({children:`http://`})),r=t(m.code,()=>({children:`http://`})),i=t(m.code,()=>({children:`index.html`})),a=t(m.p,()=>({children:[`出于安全原因，ES 模块只能在 `,n,` 协议上工作，这是浏览器打开网页时使用的协议。为了让 ES 模块在我们的本地机器上工作，我们需要通过本地 HTTP 服务器在 `,r,` 协议上提供 `,i,`。`]}));f(()=>h(a,e,fe))});let pe=d(`rue:slot:anchor`);l(e,pe),v(()=>{f(()=>h(`
`,e,pe))});let me=d(`rue:component:anchor`);l(e,me),v(()=>{let n=t(m.a,()=>({href:`https://nodejs.org/en/`,children:`Node.js`})),r=t(m.code,()=>({children:`npx serve`})),i=t(m.p,()=>({children:[`要启动本地 HTTP 服务器，首先确保你已安装 `,n,`，然后在 HTML 文件所在的目录中从命令行运行 `,r,`。你也可以使用任何其他能够提供具有正确 MIME 类型的静态文件的 HTTP 服务器。`]}));f(()=>h(i,e,me))});let he=d(`rue:slot:anchor`);l(e,he),v(()=>{f(()=>h(`
`,e,he))});let ge=d(`rue:component:anchor`);l(e,ge);let _e=t(m.h2,()=>({children:`下一步 `}));h(_e,e,ge);let ve=d(`rue:slot:anchor`);l(e,ve),v(()=>{f(()=>h(`
`,e,ve))});let ye=d(`rue:component:anchor`);l(e,ye),v(()=>{let n=t(m.a,()=>({href:`/guide/guide/introduction`,children:`简介`})),r=t(m.p,()=>({children:[`如果你跳过了`,n,`，我们强烈建议在继续阅读文档的其余部分之前先阅读它。`]}));f(()=>h(r,e,ye))});let be=d(`rue:slot:anchor`);l(e,be),v(()=>{f(()=>h(`
`,e,be))});let K=_(`div`,e);l(e,K),r(K,`vt-box-container next-steps`);let q=_(`a`,K);l(K,q),r(q,`vt-box`),ee(q,`href`,`/guide/guide/essentials/application`);let J=_(`p`,q);l(q,J),r(J,`next-steps-link`);let Y=s(J);l(J,Y),n(Y,`继续阅读指南`);let X=_(`p`,q);l(q,X),r(X,`next-steps-caption`);let xe=s(X);l(X,xe),n(xe,`指南详细讲解框架的每个方面。`);let Z=_(`a`,K);l(K,Z),r(Z,`vt-box`),ee(Z,`href`,`/examples/hello-world`);let Q=_(`p`,Z);l(Z,Q),r(Q,`next-steps-link`);let Se=s(Q);l(Q,Se),n(Se,`查看示例`);let $=_(`p`,Z);l(Z,$),r($,`next-steps-caption`);let Ce=s($);return l($,Ce),n(Ce,`探索核心功能和常见 UI 任务的示例。`),e},!0),e=>u(()=>{p.set(e.components)}),()=>o)}function S(n={}){m();let{MDXLayout:r}=o(`useSetup:0:0`,()=>{let{wrapper:e}=n.components||{};return{MDXLayout:e}});return r?(()=>{let a=e(()=>{let e=i(),t=_(`_createMdxContent`,e);return l(e,t),v(()=>{p(t,n,[])}),e});return t(r,()=>({...n,children:a}))})():x(n)}m(S);export{S as t};