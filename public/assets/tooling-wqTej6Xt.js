import{B as e,F as t,I as n,V as r,Vt as i,W as a,Wt as o,en as s,fn as c,gn as l,hn as u,mn as d,z as f}from"./rue-runtime-BWbIfNT8.js";import{n as p,t as m}from"./DocCodeTabs-kPGn0kjo.js";function h(h,g,ee){let _=a(f(h,`components`));return Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`},_.get()),n(o(e=>{let n=d(),a=u(`h1`,n);c(n,a),c(a,l(`工具链`)),c(n,l(`
`));let s=u(`h2`,n);c(n,s),c(s,l(`项目搭建`)),c(n,l(`
`));let f=u(`h3`,n);c(n,f),c(f,l(`Vite`)),c(n,l(`
`));let h=u(`p`,n);c(n,h);let g=u(`a`,h);c(h,g),g.setAttribute(`href`,`https://vitejs.dev/`),c(g,l(`Vite`)),c(h,l(` 是轻量快速的构建与开发服务器，Rue 通过官方插件无缝集成，能在保存后立即反馈。`)),c(n,l(`
`));let ee=u(`p`,n);c(n,ee),c(ee,l(`使用 Vite 创建新项目，并接入 Rue：`)),c(n,l(`
`)),t(n,p,()=>({ariaLabel:`使用 Vite 创建 Rue 项目`,children:(e,n,a)=>{let s=()=>o(e=>{let n=d();t(n,m,()=>({value:`npm`,label:`npm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ npm create vite@latest my-rue-app
$ cd my-rue-app
$ npm install @rue-js/runtime @rue-js/vite-plugin-rue
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ pnpm create vite@latest my-rue-app
$ cd my-rue-app
$ pnpm add @rue-js/runtime @rue-js/vite-plugin-rue
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ yarn create vite my-rue-app
$ cd my-rue-app
$ yarn add @rue-js/runtime @rue-js/vite-plugin-rue
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`bun`,label:`bun`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ bun create vite my-rue-app
$ cd my-rue-app
$ bun add @rue-js/runtime @rue-js/vite-plugin-rue
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?s():i(e,a,s)}})),c(n,l(`
`));let _=u(`p`,n);c(n,_),c(_,l(`在 `));let v=u(`code`,_);c(_,v),c(v,l(`vite.config.ts`)),c(_,l(` 中启用 Rue 插件：`)),c(n,l(`
`));let y=u(`pre`,n);c(n,y);let b=u(`code`,y);c(y,b),b.setAttribute(`class`,`language-ts`),c(b,l(`import { defineConfig } from 'vite'
import rue from '@rue-js/vite-plugin-rue'

export default defineConfig({
  plugins: [rue()],
})
`)),c(n,l(`
`));let x=u(`ul`,n);c(n,x),c(x,l(`
`));let S=u(`li`,x);c(x,S),c(S,l(`了解 Vite：参见 `));let C=u(`a`,S);c(S,C),C.setAttribute(`href`,`https://vitejs.dev`),c(C,l(`Vite 文档`)),c(x,l(`
`));let w=u(`li`,x);c(x,w),c(w,l(`Rue 的编译与指令由 `));let T=u(`code`,w);c(w,T),c(T,l(`@rue-js/vite-plugin-rue`)),c(w,l(` 负责集成与优化`)),c(x,l(`
`)),c(n,l(`
`));let E=u(`p`,n);c(n,E),c(E,l(`在线沙盒通常支持将项目打包为 Vite 工程下载。`)),c(n,l(`
`));let D=u(`h2`,n);c(n,D),c(D,l(`IDE 支持`)),c(n,l(`
`));let O=u(`ul`,n);c(n,O),c(O,l(`
`));let k=u(`li`,O);c(O,k),c(k,l(`推荐使用 `));let A=u(`a`,k);c(k,A),A.setAttribute(`href`,`https://code.visualstudio.com/`),c(A,l(`VS Code`)),c(k,l(`，配合 TypeScript 与 Vite 插件获得语法高亮与提示`)),c(O,l(`
`));let te=u(`li`,O);c(O,te),c(te,l(`WebStorm、Neovim 等同样可通过 LSP 获得良好体验`)),c(O,l(`
`));let ne=u(`li`,O);c(O,ne),c(ne,l(`Rue 不需要专用 Rue 扩展，采用常规 TS/JS 能力就可以满足开发需求`)),c(O,l(`
`)),c(n,l(`
`));let re=u(`h2`,n);c(n,re),c(re,l(`浏览器调试`)),c(n,l(`
`));let j=u(`ul`,n);c(n,j),c(j,l(`
`));let ie=u(`li`,j);c(j,ie),c(ie,l(`使用浏览器 DevTools 观察组件更新的 DOM 变化与事件`)),c(j,l(`
`));let ae=u(`li`,j);c(j,ae),c(ae,l(`借助 Performance 面板分析渲染时序与热区`)),c(j,l(`
`));let oe=u(`li`,j);c(j,oe),c(oe,l(`配合覆盖率报告定位无效代码路径`)),c(j,l(`
`)),c(n,l(`
`));let se=u(`h2`,n);c(n,se),c(se,l(`TypeScript`)),c(n,l(`
`));let M=u(`ul`,n);c(n,M),c(M,l(`
`));let N=u(`li`,M);c(M,N),c(N,l(`Rue 原生支持 TS，推荐在 CI 中执行类型检查`)),c(M,l(`
`));let P=u(`li`,M);c(M,P),c(P,l(`常见脚本命令如下；在本仓库开发时请优先使用 `));let ce=u(`code`,P);c(P,ce),c(ce,l(`pnpm`)),c(M,l(`
`)),c(n,l(`
`)),t(n,p,()=>({ariaLabel:`运行类型检查`,children:(e,n,a)=>{let s=()=>o(e=>{let n=d();t(n,m,()=>({value:`npm`,label:`npm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ npm run check
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ pnpm run check
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ yarn check
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`bun`,label:`bun`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ bun run check
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?s():i(e,a,s)}})),c(n,l(`
`));let le=u(`h2`,n);c(n,le),c(le,l(`测试`)),c(n,l(`
`));let F=u(`ul`,n);c(n,F),c(F,l(`
`));let I=u(`li`,F);c(F,I),c(I,l(`单元与组件测试使用 `));let L=u(`a`,I);c(I,L),L.setAttribute(`href`,`https://vitest.dev/`),c(L,l(`Vitest`)),c(I,l(`，与 Vite 深度整合`)),c(F,l(`
`));let R=u(`li`,F);c(F,R),c(R,l(`常用测试脚本包括全部测试、单元测试与覆盖率`)),c(F,l(`
`)),c(n,l(`
`)),t(n,p,()=>({ariaLabel:`运行测试脚本`,children:(e,n,a)=>{let s=()=>o(e=>{let n=d();t(n,m,()=>({value:`npm`,label:`npm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ npm run test
$ npm run test-unit
$ npm run test-coverage
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ pnpm run test
$ pnpm run test-unit
$ pnpm run test-coverage
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ yarn test
$ yarn test-unit
$ yarn test-coverage
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`bun`,label:`bun`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ bun run test
$ bun run test-unit
$ bun run test-coverage
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?s():i(e,a,s)}})),c(n,l(`
`));let z=u(`p`,n);c(n,z),c(z,l(`如需端到端测试，可结合 Cypress；Rue 与 Vite 的构建产物便于在真实环境下验证。`)),c(n,l(`
`));let B=u(`h2`,n);c(n,B),c(B,l(`代码质量`)),c(n,l(`
`));let V=u(`p`,n);c(n,V),c(V,l(`Rue 推荐使用快速现代的静态检查工具：`)),c(n,l(`
`));let H=u(`ul`,n);c(n,H),c(H,l(`
`));let U=u(`li`,H);c(H,U),c(U,l(`使用 `));let W=u(`code`,U);c(U,W),c(W,l(`oxlint`)),c(U,l(` 进行代码检查`)),c(H,l(`
`));let G=u(`li`,H);c(H,G),c(G,l(`配合 `));let ue=u(`code`,G);c(G,ue),c(ue,l(`simple-git-hooks`)),c(G,l(` 与 `));let de=u(`code`,G);c(G,de),c(de,l(`lint-staged`)),c(G,l(` 在提交前自动处理改动`)),c(H,l(`
`)),c(n,l(`
`));let K=u(`p`,n);c(n,K),c(K,l(`在本仓库的相关脚本：`)),c(n,l(`
`)),t(n,p,()=>({ariaLabel:`运行代码质量脚本`,children:(e,n,a)=>{let s=()=>o(e=>{let n=d();t(n,m,()=>({value:`npm`,label:`npm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ npm run oxlint
$ npm run oxlint-fix
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ pnpm run oxlint
$ pnpm run oxlint-fix
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ yarn oxlint
$ yarn oxlint-fix
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`bun`,label:`bun`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ bun run oxlint
$ bun run oxlint-fix
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?s():i(e,a,s)}})),c(n,l(`
`));let fe=u(`p`,n);c(n,fe),c(fe,l(`如果团队有既定的检查与格式化方案，也可按规范自行接入。`)),c(n,l(`
`));let pe=u(`h2`,n);c(n,pe),c(pe,l(`格式化`)),c(n,l(`
`));let q=u(`ul`,n);c(n,q),c(q,l(`
`));let J=u(`li`,q);c(q,J),c(J,l(`推荐使用 `));let me=u(`code`,J);c(J,me),c(me,l(`oxfmt`)),c(J,l(` 对代码与文档进行统一格式化`)),c(q,l(`
`));let he=u(`li`,q);c(q,he),c(he,l(`也可采用 Prettier 按需配置`)),c(q,l(`
`)),c(n,l(`
`));let ge=u(`p`,n);c(n,ge),c(ge,l(`相关脚本：`)),c(n,l(`
`)),t(n,p,()=>({ariaLabel:`运行格式化脚本`,children:(e,n,a)=>{let s=()=>o(e=>{let n=d();t(n,m,()=>({value:`npm`,label:`npm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ npm run format
$ npm run format-check
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ pnpm run format
$ pnpm run format-check
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ yarn format
$ yarn format-check
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}})),t(n,m,()=>({value:`bun`,label:`bun`,children:(e,t,n)=>{let a=()=>r(e=>{let t=d(),n=u(`pre`,t);c(t,n);let r=u(`code`,n);c(n,r),r.setAttribute(`class`,`language-sh`),c(r,l(`$ bun run format
$ bun run format-check
`));let i=l(``),a=l(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?a():i(e,n,a)}}));let a=l(``),o=l(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]});return e==null?s():i(e,a,s)}})),c(n,l(`
`));let _e=u(`h2`,n);c(n,_e),c(_e,l(`底层包与生态`)),c(n,l(`
`));let ve=u(`p`,n);c(n,ve),c(ve,l(`以下包在 Rue 项目中常用：`)),c(n,l(`
`));let Y=u(`ul`,n);c(n,Y),c(Y,l(`
`));let X=u(`li`,Y);c(Y,X);let ye=u(`code`,X);c(X,ye),c(ye,l(`@rue-js/runtime`)),c(X,l(`：Rue 运行时核心`)),c(Y,l(`
`));let Z=u(`li`,Y);c(Y,Z);let be=u(`code`,Z);c(Z,be),c(be,l(`@rue-js/shared`)),c(Z,l(`：通用工具与类型`)),c(Y,l(`
`));let Q=u(`li`,Y);c(Y,Q);let xe=u(`code`,Q);c(Q,xe),c(xe,l(`@rue-js/vite-plugin-rue`)),c(Q,l(`：Rue 与 Vite 集成的官方插件`)),c(Y,l(`
`));let $=u(`li`,Y);c(Y,$);let Se=u(`code`,$);c($,Se),c(Se,l(`@rue-js/router`)),c($,l(`：路由能力`)),c(Y,l(`
`)),c(n,l(`
`));let Ce=u(`p`,n);c(n,Ce),c(Ce,l(`应用 JSX 必须经过 Rue 插件编译；工具链不需要安装额外的 JSX 运行时包。你可以在本仓库的脚本中查看这些包的构建方式与使用姿势。`));let we=l(``),Te=l(``);return n.insertBefore(we,n.firstChild),n.appendChild(Te),[n.firstChild,n.lastChild]}),e=>s(()=>{_.set(e.components)}),()=>e(h))}function g(e={}){return h(e)}export{g as t};