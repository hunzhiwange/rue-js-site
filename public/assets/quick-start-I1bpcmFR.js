import{Kt as e,L as t,W as n,X as r,Y as i,_n as a,_t as o,at as s,ht as c,kn as l,mt as u,nt as d,ot as f,pt as p,q as m,rt as h,tt as g,wn as _,yn as ee,z as v}from"./rue-runtime-CwEGJ854.js";import{n as y,t as b}from"./DocCodeTabs-DwkY6VmK.js";var te=a(`<div class="tip"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`);function x(e){let a=n(e.components),u=Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`},a.get());return m(c(()=>{let e=d(),n=g(`rue:component:anchor`);r(e,n);let a=o(u.h1,()=>({children:`快速开始 `}));i(a,e,n);let c=g(`rue:slot:anchor`);r(e,c),_(()=>{l(()=>i(`
`,e,c))});let m=g(`rue:component:anchor`);r(e,m);let ee=o(u.h2,()=>({children:`创建 Rue 应用 `}));i(ee,e,m);let v=g(`rue:slot:anchor`);r(e,v),_(()=>{l(()=>i(`
`,e,v))});let x=te().content.cloneNode(!0),S=x.firstChild,ne=S.childNodes[0],re=ne.parentNode,ie=S.childNodes[1],ae=ie.parentNode;e.appendChild(x),_(()=>{let e=o(u.strong,()=>({children:`前置条件`})),t=o(u.p,()=>({children:e}));l(()=>i(t,re,ne))}),_(()=>{let e=o(u.li,()=>({children:`熟悉命令行`})),t=o(u.a,()=>({href:`https://nodejs.org/`,children:`Node.js`})),n=o(u.li,()=>({children:[`安装 `,t,` 版本 >=22.12.0`]})),r=o(u.ul,()=>({children:[`
`,e,`
`,n,`
`]}));l(()=>i(r,ae,ie))});let oe=g(`rue:slot:anchor`);r(e,oe),_(()=>{l(()=>i(`
`,e,oe))});let se=g(`rue:component:anchor`);r(e,se),_(()=>{let t=o(u.a,()=>({href:`/guide/guide/extras/ways-of-using-rue#single-page-application-spa`,children:`单页应用`})),n=o(u.a,()=>({href:`https://vitejs.dev`,children:`Vite`})),r=o(u.p,()=>({children:[`在本节中，我们将介绍如何在本地机器上搭建一个 Rue `,t,`。创建的项目将使用基于 `,n,` 的构建设置，并允许我们使用 JSX/TSX 编写组件。`]}));l(()=>i(r,e,se))});let C=g(`rue:slot:anchor`);r(e,C),_(()=>{l(()=>i(`
`,e,C))});let w=g(`rue:component:anchor`);r(e,w),_(()=>{let t=o(u.a,()=>({href:`https://nodejs.org/`,children:`Node.js`})),n=o(u.code,()=>({children:`$`})),r=o(u.p,()=>({children:[`确保你已安装最新版本的 `,t,`，并且当前工作目录是你打算创建项目的目录。在命令行中运行以下命令（不带 `,n,` 符号）：`]}));l(()=>i(r,e,w))});let T=g(`rue:slot:anchor`);r(e,T),_(()=>{l(()=>i(`
`,e,T))});let E=g(`rue:component:anchor`);r(e,E),_(()=>{let t=o(u.code,()=>({className:`language-sh`,children:`$ npm create rue@latest
`})),n=o(u.pre,()=>({children:t})),r=o(b,()=>({value:`npm`,label:`npm`,children:n})),a=o(u.code,()=>({className:`language-sh`,children:`$ pnpm create rue@latest
`})),s=o(u.pre,()=>({children:a})),c=o(b,()=>({value:`pnpm`,label:`pnpm`,children:s})),d=o(u.code,()=>({className:`language-sh`,children:`# 对于 Yarn (v1+)
$ yarn create rue

# 对于 Yarn Modern (v2+)
$ yarn create rue@latest

# 对于 Yarn ^v4.11
$ yarn dlx create-rue@latest
`})),f=o(u.pre,()=>({children:d})),p=o(b,()=>({value:`yarn`,label:`yarn`,children:f})),m=o(u.code,()=>({className:`language-sh`,children:`$ bun create rue@latest
`})),h=o(u.pre,()=>({children:m})),g=o(b,()=>({value:`bun`,label:`bun`,children:h})),_=o(y,()=>({ariaLabel:`创建 Rue 应用`,children:[r,c,p,g]}));l(()=>i(_,e,E))});let D=g(`rue:slot:anchor`);r(e,D),_(()=>{l(()=>i(`
`,e,D))});let O=g(`rue:component:anchor`);r(e,O),_(()=>{let t=o(u.code,()=>({children:`create-rue`})),n=o(u.p,()=>({children:[`此命令将安装并执行 `,t,`，即官方的 Rue 项目脚手架工具。你将看到几个可选功能的提示，例如 TypeScript 和测试支持：`]}));l(()=>i(n,e,O))});let k=g(`rue:slot:anchor`);r(e,k),_(()=>{l(()=>i(`
`,e,k))});let A=g(`rue:component:anchor`);r(e,A),_(()=>{let t=o(u.code,()=>({className:`language-sh`,children:`✔ 项目名称: … <your-project-name>
正在 ./<your-project-name> 中搭建项目...
完成。
`})),n=o(u.pre,()=>({children:t}));l(()=>i(n,e,A))});let j=g(`rue:slot:anchor`);r(e,j),_(()=>{l(()=>i(`
`,e,j))});let M=g(`rue:component:anchor`);r(e,M),_(()=>{let t=o(u.code,()=>({children:`No`})),n=o(u.p,()=>({children:[`如果你不确定某个选项，现在只需按回车选择 `,t,`。项目创建完成后，按照说明安装依赖并启动开发服务器：`]}));l(()=>i(n,e,M))});let N=g(`rue:slot:anchor`);r(e,N),_(()=>{l(()=>i(`
`,e,N))});let P=g(`rue:component:anchor`);r(e,P),_(()=>{let t=o(u.code,()=>({className:`language-sh`,children:`$ cd <your-project-name>
$ npm install
$ npm run dev
`})),n=o(u.pre,()=>({children:t})),r=o(b,()=>({value:`npm`,label:`npm`,children:n})),a=o(u.code,()=>({className:`language-sh`,children:`$ cd <your-project-name>
$ pnpm install
$ pnpm run dev
`})),s=o(u.pre,()=>({children:a})),c=o(b,()=>({value:`pnpm`,label:`pnpm`,children:s})),d=o(u.code,()=>({className:`language-sh`,children:`$ cd <your-project-name>
$ yarn
$ yarn dev
`})),f=o(u.pre,()=>({children:d})),p=o(b,()=>({value:`yarn`,label:`yarn`,children:f})),m=o(u.code,()=>({className:`language-sh`,children:`$ cd <your-project-name>
$ bun install
$ bun run dev
`})),h=o(u.pre,()=>({children:m})),g=o(b,()=>({value:`bun`,label:`bun`,children:h})),_=o(y,()=>({ariaLabel:`安装依赖并启动开发服务器`,children:[r,c,p,g]}));l(()=>i(_,e,P))});let F=g(`rue:slot:anchor`);r(e,F),_(()=>{l(()=>i(`
`,e,F))});let I=g(`rue:component:anchor`);r(e,I);let ce=o(u.p,()=>({children:`现在你应该已经运行了你的第一个 Rue 项目！请注意，生成项目中的示例组件是使用 JSX/TSX 编写的。以下是一些额外的提示：`}));i(ce,e,I);let L=g(`rue:slot:anchor`);r(e,L),_(()=>{l(()=>i(`
`,e,L))});let R=g(`rue:component:anchor`);r(e,R),_(()=>{let t=o(u.a,()=>({href:`https://code.visualstudio.com/`,children:`Visual Studio Code`})),n=o(u.a,()=>({href:`/guide/guide/scaling-up/tooling`,children:`IDE 支持部分`})),r=o(u.li,()=>({children:[`推荐的 IDE 配置是 `,t,`。如果你使用其他编辑器，请查看 `,n,`。`]})),a=o(u.a,()=>({href:`/guide/guide/scaling-up/tooling`,children:`工具指南`})),s=o(u.li,()=>({children:[`更多工具细节，包括与后端框架的集成，在 `,a,` 中讨论。`]})),c=o(u.a,()=>({href:`https://vitejs.dev`,children:`Vite 文档`})),d=o(u.li,()=>({children:[`要了解有关底层构建工具 Vite 的更多信息，请查看 `,c,`。`]})),f=o(u.a,()=>({href:`/guide/guide/typescript/overview`,children:`TypeScript 使用指南`})),p=o(u.li,()=>({children:[`如果你选择使用 TypeScript，请查看 `,f,`。`]})),m=o(u.ul,()=>({children:[`
`,r,`
`,s,`
`,d,`
`,p,`
`]}));l(()=>i(m,e,R))});let z=g(`rue:slot:anchor`);r(e,z),_(()=>{l(()=>i(`
`,e,z))});let B=g(`rue:component:anchor`);r(e,B);let le=o(u.p,()=>({children:`当你准备将应用部署到生产环境时，运行以下命令：`}));i(le,e,B);let ue=g(`rue:slot:anchor`);r(e,ue),_(()=>{l(()=>i(`
`,e,ue))});let V=g(`rue:component:anchor`);r(e,V),_(()=>{let t=o(u.code,()=>({className:`language-sh`,children:`$ npm run build
`})),n=o(u.pre,()=>({children:t})),r=o(b,()=>({value:`npm`,label:`npm`,children:n})),a=o(u.code,()=>({className:`language-sh`,children:`$ pnpm run build
`})),s=o(u.pre,()=>({children:a})),c=o(b,()=>({value:`pnpm`,label:`pnpm`,children:s})),d=o(u.code,()=>({className:`language-sh`,children:`$ yarn build
`})),f=o(u.pre,()=>({children:d})),p=o(b,()=>({value:`yarn`,label:`yarn`,children:f})),m=o(u.code,()=>({className:`language-sh`,children:`$ bun run build
`})),h=o(u.pre,()=>({children:m})),g=o(b,()=>({value:`bun`,label:`bun`,children:h})),_=o(y,()=>({ariaLabel:`生产构建`,children:[r,c,p,g]}));l(()=>i(_,e,V))});let H=g(`rue:slot:anchor`);r(e,H),_(()=>{l(()=>i(`
`,e,H))});let U=g(`rue:component:anchor`);r(e,U),_(()=>{let t=o(u.code,()=>({children:`./dist`})),n=o(u.a,()=>({href:`/guide/guide/best-practices/production-deployment`,children:`生产部署指南`})),r=o(u.p,()=>({children:[`这将在项目的 `,t,` 目录中创建你的应用的生产就绪构建。查看`,n,`以了解有关将应用部署到生产环境的更多信息。`]}));l(()=>i(r,e,U))});let W=g(`rue:slot:anchor`);r(e,W),_(()=>{l(()=>i(`
`,e,W))});let G=g(`rue:component:anchor`);r(e,G),_(()=>{let t=o(u.code,()=>({children:`index.html`})),n=o(u.code,()=>({children:`file://`})),r=o(u.p,()=>({children:[`如果你直接在浏览器中打开上述 `,t,`，你会发现它会抛出错误，因为 ES 模块无法在 `,n,` 协议上工作，这是浏览器打开本地文件时使用的协议。`]}));l(()=>i(r,e,G))});let de=g(`rue:slot:anchor`);r(e,de),_(()=>{l(()=>i(`
`,e,de))});let fe=g(`rue:component:anchor`);r(e,fe),_(()=>{let t=o(u.code,()=>({children:`http://`})),n=o(u.code,()=>({children:`http://`})),r=o(u.code,()=>({children:`index.html`})),a=o(u.p,()=>({children:[`出于安全原因，ES 模块只能在 `,t,` 协议上工作，这是浏览器打开网页时使用的协议。为了让 ES 模块在我们的本地机器上工作，我们需要通过本地 HTTP 服务器在 `,n,` 协议上提供 `,r,`。`]}));l(()=>i(a,e,fe))});let pe=g(`rue:slot:anchor`);r(e,pe),_(()=>{l(()=>i(`
`,e,pe))});let me=g(`rue:component:anchor`);r(e,me),_(()=>{let t=o(u.a,()=>({href:`https://nodejs.org/en/`,children:`Node.js`})),n=o(u.code,()=>({children:`npx serve`})),r=o(u.p,()=>({children:[`要启动本地 HTTP 服务器，首先确保你已安装 `,t,`，然后在 HTML 文件所在的目录中从命令行运行 `,n,`。你也可以使用任何其他能够提供具有正确 MIME 类型的静态文件的 HTTP 服务器。`]}));l(()=>i(r,e,me))});let he=g(`rue:slot:anchor`);r(e,he),_(()=>{l(()=>i(`
`,e,he))});let ge=g(`rue:component:anchor`);r(e,ge);let _e=o(u.h2,()=>({children:`下一步 `}));i(_e,e,ge);let ve=g(`rue:slot:anchor`);r(e,ve),_(()=>{l(()=>i(`
`,e,ve))});let ye=g(`rue:component:anchor`);r(e,ye),_(()=>{let t=o(u.a,()=>({href:`/guide/guide/introduction`,children:`简介`})),n=o(u.p,()=>({children:[`如果你跳过了`,t,`，我们强烈建议在继续阅读文档的其余部分之前先阅读它。`]}));l(()=>i(n,e,ye))});let be=g(`rue:slot:anchor`);r(e,be),_(()=>{l(()=>i(`
`,e,be))});let K=h(`div`,e);r(e,K),t(K,`vt-box-container next-steps`);let q=h(`a`,K);r(K,q),t(q,`vt-box`),f(q,`href`,`/guide/guide/essentials/application`);let J=h(`p`,q);r(q,J),t(J,`next-steps-link`);let Y=s(J);r(J,Y),p(Y,`继续阅读指南`);let X=h(`p`,q);r(q,X),t(X,`next-steps-caption`);let xe=s(X);r(X,xe),p(xe,`指南详细讲解框架的每个方面。`);let Z=h(`a`,K);r(K,Z),t(Z,`vt-box`),f(Z,`href`,`/examples/hello-world`);let Q=h(`p`,Z);r(Z,Q),t(Q,`next-steps-link`);let Se=s(Q);r(Q,Se),p(Se,`查看示例`);let $=h(`p`,Z);r(Z,$),t($,`next-steps-caption`);let Ce=s($);return r($,Ce),p(Ce,`探索核心功能和常见 UI 任务的示例。`),e},!0),e=>v(()=>{a.set(e.components)}),()=>e)}function S(t={}){e();let{MDXLayout:n}=ee(`useSetup:0:0`,()=>{let{wrapper:e}=t.components||{};return{MDXLayout:e}});return n?(()=>{let e=c(()=>{let e=d(),n=h(`_createMdxContent`,e);return r(e,n),_(()=>{u(n,t,[])}),e});return o(n,()=>({...t,children:e}))})():x(t)}e(S);export{S as t};