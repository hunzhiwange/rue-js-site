import{B as e,F as t,I as n,V as r,Vt as i,W as a,Wt as o,en as s,fn as c,gn as l,hn as u,mn as d,z as f}from"./rue-runtime-BWbIfNT8.js";import{n as p,t as m}from"./DocCodeTabs-kPGn0kjo.js";function h(h,g,_){let v=a(f(h,`components`));return Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`},v.get()),n(o(e=>{let n=d(),a=u(`h1`,n);c(n,a),c(a,l(`快速开始 `)),c(n,l(`
`));let s=u(`h2`,n);c(n,s),c(s,l(`创建 Rue 应用 `)),c(n,l(`
`));let f=u(`div`,n);c(n,f),f.setAttribute(`class`,`tip`);let h=u(`p`,f);c(f,h);let g=u(`strong`,h);c(h,g),c(g,l(`前置条件`));let _=u(`ul`,f);c(f,_),c(_,l(`
`));let v=u(`li`,_);c(_,v),c(v,l(`熟悉命令行`)),c(_,l(`
`));let y=u(`li`,_);c(_,y),c(y,l(`安装 `));let b=u(`a`,y);c(y,b),b.setAttribute(`href`,`https://nodejs.org/`),c(b,l(`Node.js`)),c(y,l(` 版本 >=22.12.0`)),c(_,l(`
`)),c(n,l(`
`));let x=u(`p`,n);c(n,x),c(x,l(`在本节中，我们将介绍如何在本地机器上搭建一个 Rue `));let S=u(`a`,x);c(x,S),S.setAttribute(`href`,`/guide/guide/extras/ways-of-using-rue#single-page-application-spa`),c(S,l(`单页应用`)),c(x,l(`。创建的项目将使用基于 `));let C=u(`a`,x);c(x,C),C.setAttribute(`href`,`https://vitejs.dev`),c(C,l(`Vite`)),c(x,l(` 的构建设置，并允许我们使用 JSX/TSX 编写组件。`)),c(n,l(`
`));let w=u(`p`,n);c(n,w),c(w,l(`确保你已安装最新版本的 `));let T=u(`a`,w);c(w,T),T.setAttribute(`href`,`https://nodejs.org/`),c(T,l(`Node.js`)),c(w,l(`，并且当前工作目录是你打算创建项目的目录。在命令行中运行以下命令（不带 `));let ee=u(`code`,w);c(w,ee),c(ee,l(`$`)),c(w,l(` 符号）：`)),c(n,l(`
`)),t(n,p,()=>({ariaLabel:`创建 Rue 应用`,children:(e,n,a)=>{let s=()=>o(e=>{let n=d();t(n,m,()=>({value:`npm`,label:`npm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ npm create rue@latest
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ pnpm create rue@latest
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`# 对于 Yarn (v1+)
$ yarn create rue

# 对于 Yarn Modern (v2+)
$ yarn create rue@latest

# 对于 Yarn ^v4.11
$ yarn dlx create-rue@latest
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`bun`,label:`bun`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ bun create rue@latest
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?s():i(e,a,s)}})),c(n,l(`
`));let E=u(`p`,n);c(n,E),c(E,l(`此命令将安装并执行 `));let te=u(`code`,E);c(E,te),c(te,l(`create-rue`)),c(E,l(`，即官方的 Rue 项目脚手架工具。你将看到几个可选功能的提示，例如 TypeScript 和测试支持：`)),c(n,l(`
`));let D=u(`pre`,n);c(n,D);let O=u(`code`,D);c(D,O),O.setAttribute(`class`,`language-sh`),c(O,l(`✔ 项目名称: … <your-project-name>
正在 ./<your-project-name> 中搭建项目...
完成。
`)),c(n,l(`
`));let k=u(`p`,n);c(n,k),c(k,l(`如果你不确定某个选项，现在只需按回车选择 `));let ne=u(`code`,k);c(k,ne),c(ne,l(`No`)),c(k,l(`。项目创建完成后，按照说明安装依赖并启动开发服务器：`)),c(n,l(`
`)),t(n,p,()=>({ariaLabel:`安装依赖并启动开发服务器`,children:(e,n,a)=>{let s=()=>o(e=>{let n=d();t(n,m,()=>({value:`npm`,label:`npm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ cd <your-project-name>
$ npm install
$ npm run dev
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ cd <your-project-name>
$ pnpm install
$ pnpm run dev
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ cd <your-project-name>
$ yarn
$ yarn dev
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`bun`,label:`bun`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ cd <your-project-name>
$ bun install
$ bun run dev
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?s():i(e,a,s)}})),c(n,l(`
`));let re=u(`p`,n);c(n,re),c(re,l(`现在你应该已经运行了你的第一个 Rue 项目！请注意，生成项目中的示例组件是使用 JSX/TSX 编写的。以下是一些额外的提示：`)),c(n,l(`
`));let A=u(`ul`,n);c(n,A),c(A,l(`
`));let j=u(`li`,A);c(A,j),c(j,l(`推荐的 IDE 配置是 `));let ie=u(`a`,j);c(j,ie),ie.setAttribute(`href`,`https://code.visualstudio.com/`),c(ie,l(`Visual Studio Code`)),c(j,l(`。如果你使用其他编辑器，请查看 `));let M=u(`a`,j);c(j,M),M.setAttribute(`href`,`/guide/guide/scaling-up/tooling`),c(M,l(`IDE 支持部分`)),c(j,l(`。`)),c(A,l(`
`));let N=u(`li`,A);c(A,N),c(N,l(`更多工具细节，包括与后端框架的集成，在 `));let P=u(`a`,N);c(N,P),P.setAttribute(`href`,`/guide/guide/scaling-up/tooling`),c(P,l(`工具指南`)),c(N,l(` 中讨论。`)),c(A,l(`
`));let F=u(`li`,A);c(A,F),c(F,l(`要了解有关底层构建工具 Vite 的更多信息，请查看 `));let I=u(`a`,F);c(F,I),I.setAttribute(`href`,`https://vitejs.dev`),c(I,l(`Vite 文档`)),c(F,l(`。`)),c(A,l(`
`));let L=u(`li`,A);c(A,L),c(L,l(`如果你选择使用 TypeScript，请查看 `));let R=u(`a`,L);c(L,R),R.setAttribute(`href`,`/guide/guide/typescript/overview`),c(R,l(`TypeScript 使用指南`)),c(L,l(`。`)),c(A,l(`
`)),c(n,l(`
`));let ae=u(`p`,n);c(n,ae),c(ae,l(`当你准备将应用部署到生产环境时，运行以下命令：`)),c(n,l(`
`)),t(n,p,()=>({ariaLabel:`生产构建`,children:(e,n,a)=>{let s=()=>o(e=>{let n=d();t(n,m,()=>({value:`npm`,label:`npm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ npm run build
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ pnpm run build
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ yarn build
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`bun`,label:`bun`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ bun run build
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?s():i(e,a,s)}})),c(n,l(`
`));let z=u(`p`,n);c(n,z),c(z,l(`这将在项目的 `));let oe=u(`code`,z);c(z,oe),c(oe,l(`./dist`)),c(z,l(` 目录中创建你的应用的生产就绪构建。查看`));let B=u(`a`,z);c(z,B),B.setAttribute(`href`,`/guide/guide/best-practices/production-deployment`),c(B,l(`生产部署指南`)),c(z,l(`以了解有关将应用部署到生产环境的更多信息。`)),c(n,l(`
`));let V=u(`p`,n);c(n,V),c(V,l(`如果你直接在浏览器中打开上述 `));let se=u(`code`,V);c(V,se),c(se,l(`index.html`)),c(V,l(`，你会发现它会抛出错误，因为 ES 模块无法在 `));let ce=u(`code`,V);c(V,ce),c(ce,l(`file://`)),c(V,l(` 协议上工作，这是浏览器打开本地文件时使用的协议。`)),c(n,l(`
`));let H=u(`p`,n);c(n,H),c(H,l(`出于安全原因，ES 模块只能在 `));let le=u(`code`,H);c(H,le),c(le,l(`http://`)),c(H,l(` 协议上工作，这是浏览器打开网页时使用的协议。为了让 ES 模块在我们的本地机器上工作，我们需要通过本地 HTTP 服务器在 `));let ue=u(`code`,H);c(H,ue),c(ue,l(`http://`)),c(H,l(` 协议上提供 `));let de=u(`code`,H);c(H,de),c(de,l(`index.html`)),c(H,l(`。`)),c(n,l(`
`));let U=u(`p`,n);c(n,U),c(U,l(`要启动本地 HTTP 服务器，首先确保你已安装 `));let W=u(`a`,U);c(U,W),W.setAttribute(`href`,`https://nodejs.org/en/`),c(W,l(`Node.js`)),c(U,l(`，然后在 HTML 文件所在的目录中从命令行运行 `));let fe=u(`code`,U);c(U,fe),c(fe,l(`npx serve`)),c(U,l(`。你也可以使用任何其他能够提供具有正确 MIME 类型的静态文件的 HTTP 服务器。`)),c(n,l(`
`));let pe=u(`h2`,n);c(n,pe),c(pe,l(`下一步 `)),c(n,l(`
`));let G=u(`p`,n);c(n,G),c(G,l(`如果你跳过了`));let K=u(`a`,G);c(G,K),K.setAttribute(`href`,`/guide/guide/introduction`),c(K,l(`简介`)),c(G,l(`，我们强烈建议在继续阅读文档的其余部分之前先阅读它。`)),c(n,l(`
`));let q=u(`div`,n);c(n,q),q.setAttribute(`class`,`vt-box-container next-steps`);let J=u(`a`,q);c(q,J),J.setAttribute(`class`,`vt-box`),J.setAttribute(`href`,`/guide/guide/essentials/application`);let Y=u(`p`,J);c(J,Y),Y.setAttribute(`class`,`next-steps-link`),c(Y,l(`继续阅读指南`));let X=u(`p`,J);c(J,X),X.setAttribute(`class`,`next-steps-caption`),c(X,l(`指南详细讲解框架的每个方面。`));let Z=u(`a`,q);c(q,Z),Z.setAttribute(`class`,`vt-box`),Z.setAttribute(`href`,`/examples/hello-world`);let Q=u(`p`,Z);c(Z,Q),Q.setAttribute(`class`,`next-steps-link`),c(Q,l(`查看示例`));let $=u(`p`,Z);c(Z,$),$.setAttribute(`class`,`next-steps-caption`),c($,l(`探索核心功能和常见 UI 任务的示例。`));let me=l(``),he=l(``);return n.insertBefore(me,n.firstChild),n.appendChild(he),[n.firstChild,n.lastChild]}),e=>s(()=>{v.set(e.components)}),()=>e(h))}function g(e={}){return h(e)}export{g as t};