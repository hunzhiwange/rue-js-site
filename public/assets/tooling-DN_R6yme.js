import{H as e,U as t,Vt as n,Wt as r,_t as i,en as a,fn as o,gn as s,gt as c,hn as l,mn as u,vt as d,yt as f}from"./rue-runtime-Cv6BZekS.js";import{n as p,t as m}from"./DocCodeTabs-ev1ce6Fk.js";function h(h,g,ee){let _=d(c(h,`components`));return Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`},_.get()),t(r(t=>{let i=u(),a=l(`h1`,i);o(i,a),o(a,s(`工具链`)),o(i,s(`
`));let c=l(`h2`,i);o(i,c),o(c,s(`项目搭建`)),o(i,s(`
`));let d=l(`h3`,i);o(i,d),o(d,s(`Vite`)),o(i,s(`
`));let h=l(`p`,i);o(i,h);let g=l(`a`,h);o(h,g),g.setAttribute(`href`,`https://vitejs.dev/`),o(g,s(`Vite`)),o(h,s(` 是轻量快速的构建与开发服务器，Rue 通过官方插件无缝集成，能在保存后立即反馈。`)),o(i,s(`
`));let ee=l(`p`,i);o(i,ee),o(ee,s(`使用 Vite 创建新项目，并接入 Rue：`)),o(i,s(`
`)),e(i,p,()=>({ariaLabel:`使用 Vite 创建 Rue 项目`,children:(t,i,a)=>{let c=()=>r(t=>{let r=u();e(r,m,()=>({value:`npm`,label:`npm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ npm create vite@latest my-rue-app
$ cd my-rue-app
$ npm install @rue-js/runtime @rue-js/vite-plugin-rue
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ pnpm create vite@latest my-rue-app
$ cd my-rue-app
$ pnpm add @rue-js/runtime @rue-js/vite-plugin-rue
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ yarn create vite my-rue-app
$ cd my-rue-app
$ yarn add @rue-js/runtime @rue-js/vite-plugin-rue
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`bun`,label:`bun`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ bun create vite my-rue-app
$ cd my-rue-app
$ bun add @rue-js/runtime @rue-js/vite-plugin-rue
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}}));let i=s(``),a=s(``);return r.insertBefore(i,r.firstChild),r.appendChild(a),[r.firstChild,r.lastChild]});return t==null?c():n(t,a,c)}})),o(i,s(`
`));let _=l(`p`,i);o(i,_),o(_,s(`在 `));let v=l(`code`,_);o(_,v),o(v,s(`vite.config.ts`)),o(_,s(` 中启用 Rue 插件：`)),o(i,s(`
`));let y=l(`pre`,i);o(i,y);let b=l(`code`,y);o(y,b),b.setAttribute(`class`,`language-ts`),o(b,s(`import { defineConfig } from 'vite'
import rue from '@rue-js/vite-plugin-rue'

export default defineConfig({
  plugins: [rue()],
})
`)),o(i,s(`
`));let x=l(`ul`,i);o(i,x),o(x,s(`
`));let S=l(`li`,x);o(x,S),o(S,s(`了解 Vite：参见 `));let C=l(`a`,S);o(S,C),C.setAttribute(`href`,`https://vitejs.dev`),o(C,s(`Vite 文档`)),o(x,s(`
`));let w=l(`li`,x);o(x,w),o(w,s(`Rue 的编译与指令由 `));let T=l(`code`,w);o(w,T),o(T,s(`@rue-js/vite-plugin-rue`)),o(w,s(` 负责集成与优化`)),o(x,s(`
`)),o(i,s(`
`));let E=l(`p`,i);o(i,E),o(E,s(`在线沙盒通常支持将项目打包为 Vite 工程下载。`)),o(i,s(`
`));let D=l(`h2`,i);o(i,D),o(D,s(`IDE 支持`)),o(i,s(`
`));let O=l(`ul`,i);o(i,O),o(O,s(`
`));let k=l(`li`,O);o(O,k),o(k,s(`推荐使用 `));let A=l(`a`,k);o(k,A),A.setAttribute(`href`,`https://code.visualstudio.com/`),o(A,s(`VS Code`)),o(k,s(`，配合 TypeScript 与 Vite 插件获得语法高亮与提示`)),o(O,s(`
`));let te=l(`li`,O);o(O,te),o(te,s(`WebStorm、Neovim 等同样可通过 LSP 获得良好体验`)),o(O,s(`
`));let ne=l(`li`,O);o(O,ne),o(ne,s(`Rue 不需要专用 Rue 扩展，采用常规 TS/JS 能力就可以满足开发需求`)),o(O,s(`
`)),o(i,s(`
`));let re=l(`h2`,i);o(i,re),o(re,s(`浏览器调试`)),o(i,s(`
`));let j=l(`ul`,i);o(i,j),o(j,s(`
`));let ie=l(`li`,j);o(j,ie),o(ie,s(`使用浏览器 DevTools 观察组件更新的 DOM 变化与事件`)),o(j,s(`
`));let ae=l(`li`,j);o(j,ae),o(ae,s(`借助 Performance 面板分析渲染时序与热区`)),o(j,s(`
`));let oe=l(`li`,j);o(j,oe),o(oe,s(`配合覆盖率报告定位无效代码路径`)),o(j,s(`
`)),o(i,s(`
`));let se=l(`h2`,i);o(i,se),o(se,s(`TypeScript`)),o(i,s(`
`));let M=l(`ul`,i);o(i,M),o(M,s(`
`));let N=l(`li`,M);o(M,N),o(N,s(`Rue 原生支持 TS，推荐在 CI 中执行类型检查`)),o(M,s(`
`));let P=l(`li`,M);o(M,P),o(P,s(`常见脚本命令如下；在本仓库开发时请优先使用 `));let ce=l(`code`,P);o(P,ce),o(ce,s(`pnpm`)),o(M,s(`
`)),o(i,s(`
`)),e(i,p,()=>({ariaLabel:`运行类型检查`,children:(t,i,a)=>{let c=()=>r(t=>{let r=u();e(r,m,()=>({value:`npm`,label:`npm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ npm run check
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ pnpm run check
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ yarn check
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`bun`,label:`bun`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ bun run check
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}}));let i=s(``),a=s(``);return r.insertBefore(i,r.firstChild),r.appendChild(a),[r.firstChild,r.lastChild]});return t==null?c():n(t,a,c)}})),o(i,s(`
`));let le=l(`h2`,i);o(i,le),o(le,s(`测试`)),o(i,s(`
`));let F=l(`ul`,i);o(i,F),o(F,s(`
`));let I=l(`li`,F);o(F,I),o(I,s(`单元与组件测试使用 `));let L=l(`a`,I);o(I,L),L.setAttribute(`href`,`https://vitest.dev/`),o(L,s(`Vitest`)),o(I,s(`，与 Vite 深度整合`)),o(F,s(`
`));let R=l(`li`,F);o(F,R),o(R,s(`常用测试脚本包括全部测试、单元测试与覆盖率`)),o(F,s(`
`)),o(i,s(`
`)),e(i,p,()=>({ariaLabel:`运行测试脚本`,children:(t,i,a)=>{let c=()=>r(t=>{let r=u();e(r,m,()=>({value:`npm`,label:`npm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ npm run test
$ npm run test-unit
$ npm run test-coverage
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ pnpm run test
$ pnpm run test-unit
$ pnpm run test-coverage
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ yarn test
$ yarn test-unit
$ yarn test-coverage
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`bun`,label:`bun`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ bun run test
$ bun run test-unit
$ bun run test-coverage
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}}));let i=s(``),a=s(``);return r.insertBefore(i,r.firstChild),r.appendChild(a),[r.firstChild,r.lastChild]});return t==null?c():n(t,a,c)}})),o(i,s(`
`));let z=l(`p`,i);o(i,z),o(z,s(`如需端到端测试，可结合 Cypress；Rue 与 Vite 的构建产物便于在真实环境下验证。`)),o(i,s(`
`));let B=l(`h2`,i);o(i,B),o(B,s(`代码质量`)),o(i,s(`
`));let V=l(`p`,i);o(i,V),o(V,s(`Rue 推荐使用快速现代的静态检查工具：`)),o(i,s(`
`));let H=l(`ul`,i);o(i,H),o(H,s(`
`));let U=l(`li`,H);o(H,U),o(U,s(`使用 `));let W=l(`code`,U);o(U,W),o(W,s(`oxlint`)),o(U,s(` 进行代码检查`)),o(H,s(`
`));let G=l(`li`,H);o(H,G),o(G,s(`配合 `));let ue=l(`code`,G);o(G,ue),o(ue,s(`simple-git-hooks`)),o(G,s(` 与 `));let de=l(`code`,G);o(G,de),o(de,s(`lint-staged`)),o(G,s(` 在提交前自动处理改动`)),o(H,s(`
`)),o(i,s(`
`));let K=l(`p`,i);o(i,K),o(K,s(`在本仓库的相关脚本：`)),o(i,s(`
`)),e(i,p,()=>({ariaLabel:`运行代码质量脚本`,children:(t,i,a)=>{let c=()=>r(t=>{let r=u();e(r,m,()=>({value:`npm`,label:`npm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ npm run oxlint
$ npm run oxlint-fix
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ pnpm run oxlint
$ pnpm run oxlint-fix
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ yarn oxlint
$ yarn oxlint-fix
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`bun`,label:`bun`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ bun run oxlint
$ bun run oxlint-fix
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}}));let i=s(``),a=s(``);return r.insertBefore(i,r.firstChild),r.appendChild(a),[r.firstChild,r.lastChild]});return t==null?c():n(t,a,c)}})),o(i,s(`
`));let fe=l(`p`,i);o(i,fe),o(fe,s(`如果团队有既定的检查与格式化方案，也可按规范自行接入。`)),o(i,s(`
`));let pe=l(`h2`,i);o(i,pe),o(pe,s(`格式化`)),o(i,s(`
`));let q=l(`ul`,i);o(i,q),o(q,s(`
`));let J=l(`li`,q);o(q,J),o(J,s(`推荐使用 `));let me=l(`code`,J);o(J,me),o(me,s(`oxfmt`)),o(J,s(` 对代码与文档进行统一格式化`)),o(q,s(`
`));let he=l(`li`,q);o(q,he),o(he,s(`也可采用 Prettier 按需配置`)),o(q,s(`
`)),o(i,s(`
`));let ge=l(`p`,i);o(i,ge),o(ge,s(`相关脚本：`)),o(i,s(`
`)),e(i,p,()=>({ariaLabel:`运行格式化脚本`,children:(t,i,a)=>{let c=()=>r(t=>{let r=u();e(r,m,()=>({value:`npm`,label:`npm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ npm run format
$ npm run format-check
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`pnpm`,label:`pnpm`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ pnpm run format
$ pnpm run format-check
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`yarn`,label:`yarn`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ yarn format
$ yarn format-check
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}})),e(r,m,()=>({value:`bun`,label:`bun`,children:(e,t,r)=>{let i=()=>f(e=>{let t=u(),n=l(`pre`,t);o(t,n);let r=l(`code`,n);o(n,r),r.setAttribute(`class`,`language-sh`),o(r,s(`$ bun run format
$ bun run format-check
`));let i=s(``),a=s(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?i():n(e,r,i)}}));let i=s(``),a=s(``);return r.insertBefore(i,r.firstChild),r.appendChild(a),[r.firstChild,r.lastChild]});return t==null?c():n(t,a,c)}})),o(i,s(`
`));let _e=l(`h2`,i);o(i,_e),o(_e,s(`底层包与生态`)),o(i,s(`
`));let ve=l(`p`,i);o(i,ve),o(ve,s(`以下包在 Rue 项目中常用：`)),o(i,s(`
`));let Y=l(`ul`,i);o(i,Y),o(Y,s(`
`));let X=l(`li`,Y);o(Y,X);let ye=l(`code`,X);o(X,ye),o(ye,s(`@rue-js/runtime`)),o(X,s(`：Rue 运行时核心`)),o(Y,s(`
`));let Z=l(`li`,Y);o(Y,Z);let be=l(`code`,Z);o(Z,be),o(be,s(`@rue-js/shared`)),o(Z,s(`：通用工具与类型`)),o(Y,s(`
`));let Q=l(`li`,Y);o(Y,Q);let xe=l(`code`,Q);o(Q,xe),o(xe,s(`@rue-js/vite-plugin-rue`)),o(Q,s(`：Rue 与 Vite 集成的官方插件`)),o(Y,s(`
`));let $=l(`li`,Y);o(Y,$);let Se=l(`code`,$);o($,Se),o(Se,s(`@rue-js/router`)),o($,s(`：路由能力`)),o(Y,s(`
`)),o(i,s(`
`));let Ce=l(`p`,i);o(i,Ce),o(Ce,s(`应用 JSX 必须经过 Rue 插件编译；工具链不需要安装额外的 JSX 运行时包。你可以在本仓库的脚本中查看这些包的构建方式与使用姿势。`));let we=s(``),Te=s(``);return i.insertBefore(we,i.firstChild),i.appendChild(Te),[i.firstChild,i.lastChild]}),e=>a(()=>{_.set(e.components)}),()=>i(h))}function g(e={}){return h(e)}export{g as t};