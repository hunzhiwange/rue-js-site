import{H as e,U as t,Vt as n,Wt as r,_t as i,en as a,fn as o,gn as s,gt as c,hn as l,mn as u,vt as d,yt as f}from"./rue-runtime-Cv6BZekS.js";import{n as p,t as m}from"./DocCodeTabs-ev1ce6Fk.js";function h(h,g,_){let v=d(c(h,`components`));return Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`},v.get()),t(r(t=>{let i=u(),a=l(`h1`,i);o(i,a),o(a,s(`快速开始 `)),o(i,s(`
`));let c=l(`h2`,i);o(i,c),o(c,s(`创建 Rue 应用 `)),o(i,s(`
`));let d=l(`div`,i);o(i,d),d.setAttribute(`class`,`tip`);let h=l(`p`,d);o(d,h);let g=l(`strong`,h);o(h,g),o(g,s(`前置条件`));let _=l(`ul`,d);o(d,_),o(_,s(`
`));let v=l(`li`,_);o(_,v),o(v,s(`熟悉命令行`)),o(_,s(`
`));let y=l(`li`,_);o(_,y),o(y,s(`安装 `));let b=l(`a`,y);o(y,b),b.setAttribute(`href`,`https://nodejs.org/`),o(b,s(`Node.js`)),o(y,s(` 版本 >=22.12.0`)),o(_,s(`
`)),o(i,s(`
`));let x=l(`p`,i);o(i,x),o(x,s(`在本节中，我们将介绍如何在本地机器上搭建一个 Rue `));let S=l(`a`,x);o(x,S),S.setAttribute(`href`,`/guide/guide/extras/ways-of-using-rue#single-page-application-spa`),o(S,s(`单页应用`)),o(x,s(`。创建的项目将使用基于 `));let C=l(`a`,x);o(x,C),C.setAttribute(`href`,`https://vitejs.dev`),o(C,s(`Vite`)),o(x,s(` 的构建设置，并允许我们使用 JSX/TSX 编写组件。`)),o(i,s(`
`));let w=l(`p`,i);o(i,w),o(w,s(`确保你已安装最新版本的 `));let T=l(`a`,w);o(w,T),T.setAttribute(`href`,`https://nodejs.org/`),o(T,s(`Node.js`)),o(w,s(`，并且当前工作目录是你打算创建项目的目录。在命令行中运行以下命令（不带 `));let ee=l(`code`,w);o(w,ee),o(ee,s(`$`)),o(w,s(` 符号）：`)),o(i,s(`
`)),e(i,p,()=>({ariaLabel:`创建 Rue 应用`,children:(t,i,a)=>{let c=()=>r(t=>{let r=u();e(r,m,()=>({value:`npm`,label:`npm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ npm create rue@latest
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ pnpm create rue@latest
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`# 对于 Yarn (v1+)
$ yarn create rue

# 对于 Yarn Modern (v2+)
$ yarn create rue@latest

# 对于 Yarn ^v4.11
$ yarn dlx create-rue@latest
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`bun`,label:`bun`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ bun create rue@latest
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}}));let i=s(``),a=s(``);return r.insertBefore(i,r.firstChild),r.appendChild(a),[r.firstChild,r.lastChild]});return t==null?c():n(t,a,c)}})),o(i,s(`
`));let E=l(`p`,i);o(i,E),o(E,s(`此命令将安装并执行 `));let te=l(`code`,E);o(E,te),o(te,s(`create-rue`)),o(E,s(`，即官方的 Rue 项目脚手架工具。你将看到几个可选功能的提示，例如 TypeScript 和测试支持：`)),o(i,s(`
`));let D=l(`pre`,i);o(i,D);let O=l(`code`,D);o(D,O),O.setAttribute(`class`,`language-sh`),o(O,s(`✔ 项目名称: … <your-project-name>
正在 ./<your-project-name> 中搭建项目...
完成。
`)),o(i,s(`
`));let k=l(`p`,i);o(i,k),o(k,s(`如果你不确定某个选项，现在只需按回车选择 `));let ne=l(`code`,k);o(k,ne),o(ne,s(`No`)),o(k,s(`。项目创建完成后，按照说明安装依赖并启动开发服务器：`)),o(i,s(`
`)),e(i,p,()=>({ariaLabel:`安装依赖并启动开发服务器`,children:(t,i,a)=>{let c=()=>r(t=>{let r=u();e(r,m,()=>({value:`npm`,label:`npm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ cd <your-project-name>
$ npm install
$ npm run dev
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ cd <your-project-name>
$ pnpm install
$ pnpm run dev
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ cd <your-project-name>
$ yarn
$ yarn dev
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`bun`,label:`bun`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ cd <your-project-name>
$ bun install
$ bun run dev
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}}));let i=s(``),a=s(``);return r.insertBefore(i,r.firstChild),r.appendChild(a),[r.firstChild,r.lastChild]});return t==null?c():n(t,a,c)}})),o(i,s(`
`));let re=l(`p`,i);o(i,re),o(re,s(`现在你应该已经运行了你的第一个 Rue 项目！请注意，生成项目中的示例组件是使用 JSX/TSX 编写的。以下是一些额外的提示：`)),o(i,s(`
`));let A=l(`ul`,i);o(i,A),o(A,s(`
`));let j=l(`li`,A);o(A,j),o(j,s(`推荐的 IDE 配置是 `));let ie=l(`a`,j);o(j,ie),ie.setAttribute(`href`,`https://code.visualstudio.com/`),o(ie,s(`Visual Studio Code`)),o(j,s(`。如果你使用其他编辑器，请查看 `));let M=l(`a`,j);o(j,M),M.setAttribute(`href`,`/guide/guide/scaling-up/tooling`),o(M,s(`IDE 支持部分`)),o(j,s(`。`)),o(A,s(`
`));let N=l(`li`,A);o(A,N),o(N,s(`更多工具细节，包括与后端框架的集成，在 `));let P=l(`a`,N);o(N,P),P.setAttribute(`href`,`/guide/guide/scaling-up/tooling`),o(P,s(`工具指南`)),o(N,s(` 中讨论。`)),o(A,s(`
`));let F=l(`li`,A);o(A,F),o(F,s(`要了解有关底层构建工具 Vite 的更多信息，请查看 `));let I=l(`a`,F);o(F,I),I.setAttribute(`href`,`https://vitejs.dev`),o(I,s(`Vite 文档`)),o(F,s(`。`)),o(A,s(`
`));let L=l(`li`,A);o(A,L),o(L,s(`如果你选择使用 TypeScript，请查看 `));let R=l(`a`,L);o(L,R),R.setAttribute(`href`,`/guide/guide/typescript/overview`),o(R,s(`TypeScript 使用指南`)),o(L,s(`。`)),o(A,s(`
`)),o(i,s(`
`));let ae=l(`p`,i);o(i,ae),o(ae,s(`当你准备将应用部署到生产环境时，运行以下命令：`)),o(i,s(`
`)),e(i,p,()=>({ariaLabel:`生产构建`,children:(t,i,a)=>{let c=()=>r(t=>{let r=u();e(r,m,()=>({value:`npm`,label:`npm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ npm run build
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ pnpm run build
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ yarn build
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`bun`,label:`bun`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ bun run build
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}}));let i=s(``),a=s(``);return r.insertBefore(i,r.firstChild),r.appendChild(a),[r.firstChild,r.lastChild]});return t==null?c():n(t,a,c)}})),o(i,s(`
`));let z=l(`p`,i);o(i,z),o(z,s(`这将在项目的 `));let oe=l(`code`,z);o(z,oe),o(oe,s(`./dist`)),o(z,s(` 目录中创建你的应用的生产就绪构建。查看`));let B=l(`a`,z);o(z,B),B.setAttribute(`href`,`/guide/guide/best-practices/production-deployment`),o(B,s(`生产部署指南`)),o(z,s(`以了解有关将应用部署到生产环境的更多信息。`)),o(i,s(`
`));let V=l(`p`,i);o(i,V),o(V,s(`如果你直接在浏览器中打开上述 `));let se=l(`code`,V);o(V,se),o(se,s(`index.html`)),o(V,s(`，你会发现它会抛出错误，因为 ES 模块无法在 `));let ce=l(`code`,V);o(V,ce),o(ce,s(`file://`)),o(V,s(` 协议上工作，这是浏览器打开本地文件时使用的协议。`)),o(i,s(`
`));let H=l(`p`,i);o(i,H),o(H,s(`出于安全原因，ES 模块只能在 `));let le=l(`code`,H);o(H,le),o(le,s(`http://`)),o(H,s(` 协议上工作，这是浏览器打开网页时使用的协议。为了让 ES 模块在我们的本地机器上工作，我们需要通过本地 HTTP 服务器在 `));let ue=l(`code`,H);o(H,ue),o(ue,s(`http://`)),o(H,s(` 协议上提供 `));let de=l(`code`,H);o(H,de),o(de,s(`index.html`)),o(H,s(`。`)),o(i,s(`
`));let U=l(`p`,i);o(i,U),o(U,s(`要启动本地 HTTP 服务器，首先确保你已安装 `));let W=l(`a`,U);o(U,W),W.setAttribute(`href`,`https://nodejs.org/en/`),o(W,s(`Node.js`)),o(U,s(`，然后在 HTML 文件所在的目录中从命令行运行 `));let fe=l(`code`,U);o(U,fe),o(fe,s(`npx serve`)),o(U,s(`。你也可以使用任何其他能够提供具有正确 MIME 类型的静态文件的 HTTP 服务器。`)),o(i,s(`
`));let pe=l(`h2`,i);o(i,pe),o(pe,s(`下一步 `)),o(i,s(`
`));let G=l(`p`,i);o(i,G),o(G,s(`如果你跳过了`));let K=l(`a`,G);o(G,K),K.setAttribute(`href`,`/guide/guide/introduction`),o(K,s(`简介`)),o(G,s(`，我们强烈建议在继续阅读文档的其余部分之前先阅读它。`)),o(i,s(`
`));let q=l(`div`,i);o(i,q),q.setAttribute(`class`,`vt-box-container next-steps`);let J=l(`a`,q);o(q,J),J.setAttribute(`class`,`vt-box`),J.setAttribute(`href`,`/guide/guide/essentials/application`);let Y=l(`p`,J);o(J,Y),Y.setAttribute(`class`,`next-steps-link`),o(Y,s(`继续阅读指南`));let X=l(`p`,J);o(J,X),X.setAttribute(`class`,`next-steps-caption`),o(X,s(`指南详细讲解框架的每个方面。`));let Z=l(`a`,q);o(q,Z),Z.setAttribute(`class`,`vt-box`),Z.setAttribute(`href`,`/examples/hello-world`);let Q=l(`p`,Z);o(Z,Q),Q.setAttribute(`class`,`next-steps-link`),o(Q,s(`查看示例`));let $=l(`p`,Z);o(Z,$),$.setAttribute(`class`,`next-steps-caption`),o($,s(`探索核心功能和常见 UI 任务的示例。`));let me=s(``),he=s(``);return i.insertBefore(me,i.firstChild),i.appendChild(he),[i.firstChild,i.lastChild]}),e=>a(()=>{v.set(e.components)}),()=>i(h))}function g(e={}){return h(e)}export{g as t};