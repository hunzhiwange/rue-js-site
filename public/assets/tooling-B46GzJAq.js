import{At as e,Mt as t,_t as n,at as r,bn as i,ct as a,dt as o,et as s,gt as c,kn as l,kt as u,on as d,ut as f,vt as p,wn as m}from"./rue-runtime-HIMg8Lz8.js";import{n as h,t as g}from"./DocCodeTabs-DBd11kr9.js";function _(i){let u=r(i.components),d=Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`},u.get());return a(e(()=>{let e=n(),r=c(`rue:component:anchor`);o(e,r);let i=t(d.h1,()=>({children:`工具链`}));f(i,e,r);let a=c(`rue:slot:anchor`);o(e,a),m(()=>{l(()=>f(`
`,e,a))});let s=c(`rue:component:anchor`);o(e,s);let u=t(d.h2,()=>({children:`项目搭建`}));f(u,e,s);let p=c(`rue:slot:anchor`);o(e,p),m(()=>{l(()=>f(`
`,e,p))});let _=c(`rue:component:anchor`);o(e,_);let v=t(d.h3,()=>({children:`Vite`}));f(v,e,_);let y=c(`rue:slot:anchor`);o(e,y),m(()=>{l(()=>f(`
`,e,y))});let ee=c(`rue:component:anchor`);o(e,ee),m(()=>{let n=t(d.a,()=>({href:`https://vitejs.dev/`,children:`Vite`})),r=t(d.p,()=>({children:[n,` 是轻量快速的构建与开发服务器，Rue 通过官方插件无缝集成，能在保存后立即反馈。`]}));l(()=>f(r,e,ee))});let b=c(`rue:slot:anchor`);o(e,b),m(()=>{l(()=>f(`
`,e,b))});let x=c(`rue:component:anchor`);o(e,x);let te=t(d.p,()=>({children:`使用 Vite 创建新项目，并接入 Rue：`}));f(te,e,x);let S=c(`rue:slot:anchor`);o(e,S),m(()=>{l(()=>f(`
`,e,S))});let ne=c(`rue:component:anchor`);o(e,ne),m(()=>{let n=t(d.code,()=>({className:`language-sh`,children:`$ npm create vite@latest my-rue-app
$ cd my-rue-app
$ npm install @rue-js/runtime @rue-js/vite-plugin-rue
`})),r=t(d.pre,()=>({children:n})),i=t(g,()=>({value:`npm`,label:`npm`,children:r})),a=t(d.code,()=>({className:`language-sh`,children:`$ pnpm create vite@latest my-rue-app
$ cd my-rue-app
$ pnpm add @rue-js/runtime @rue-js/vite-plugin-rue
`})),o=t(d.pre,()=>({children:a})),s=t(g,()=>({value:`pnpm`,label:`pnpm`,children:o})),c=t(d.code,()=>({className:`language-sh`,children:`$ yarn create vite my-rue-app
$ cd my-rue-app
$ yarn add @rue-js/runtime @rue-js/vite-plugin-rue
`})),u=t(d.pre,()=>({children:c})),p=t(g,()=>({value:`yarn`,label:`yarn`,children:u})),m=t(d.code,()=>({className:`language-sh`,children:`$ bun create vite my-rue-app
$ cd my-rue-app
$ bun add @rue-js/runtime @rue-js/vite-plugin-rue
`})),_=t(d.pre,()=>({children:m})),v=t(g,()=>({value:`bun`,label:`bun`,children:_})),y=t(h,()=>({ariaLabel:`使用 Vite 创建 Rue 项目`,children:[i,s,p,v]}));l(()=>f(y,e,ne))});let C=c(`rue:slot:anchor`);o(e,C),m(()=>{l(()=>f(`
`,e,C))});let w=c(`rue:component:anchor`);o(e,w),m(()=>{let n=t(d.code,()=>({children:`vite.config.ts`})),r=t(d.p,()=>({children:[`在 `,n,` 中启用 Rue 插件：`]}));l(()=>f(r,e,w))});let T=c(`rue:slot:anchor`);o(e,T),m(()=>{l(()=>f(`
`,e,T))});let E=c(`rue:component:anchor`);o(e,E),m(()=>{let n=t(d.code,()=>({className:`language-ts`,children:`import { defineConfig } from 'vite'
import rue from '@rue-js/vite-plugin-rue'

export default defineConfig({
  plugins: [rue()],
})
`})),r=t(d.pre,()=>({children:n}));l(()=>f(r,e,E))});let D=c(`rue:slot:anchor`);o(e,D),m(()=>{l(()=>f(`
`,e,D))});let O=c(`rue:component:anchor`);o(e,O),m(()=>{let n=t(d.a,()=>({href:`https://vitejs.dev`,children:`Vite 文档`})),r=t(d.li,()=>({children:[`了解 Vite：参见 `,n]})),i=t(d.code,()=>({children:`@rue-js/vite-plugin-rue`})),a=t(d.li,()=>({children:[`Rue 的编译与指令由 `,i,` 负责集成与优化`]})),o=t(d.ul,()=>({children:[`
`,r,`
`,a,`
`]}));l(()=>f(o,e,O))});let k=c(`rue:slot:anchor`);o(e,k),m(()=>{l(()=>f(`
`,e,k))});let A=c(`rue:component:anchor`);o(e,A);let re=t(d.p,()=>({children:`在线沙盒通常支持将项目打包为 Vite 工程下载。`}));f(re,e,A);let j=c(`rue:slot:anchor`);o(e,j),m(()=>{l(()=>f(`
`,e,j))});let M=c(`rue:component:anchor`);o(e,M);let ie=t(d.h2,()=>({children:`IDE 支持`}));f(ie,e,M);let N=c(`rue:slot:anchor`);o(e,N),m(()=>{l(()=>f(`
`,e,N))});let P=c(`rue:component:anchor`);o(e,P),m(()=>{let n=t(d.a,()=>({href:`https://code.visualstudio.com/`,children:`VS Code`})),r=t(d.li,()=>({children:[`推荐使用 `,n,`，配合 TypeScript 与 Vite 插件获得语法高亮与提示`]})),i=t(d.li,()=>({children:`WebStorm、Neovim 等同样可通过 LSP 获得良好体验`})),a=t(d.li,()=>({children:`Rue 不需要专用 Rue 扩展，采用常规 TS/JS 能力就可以满足开发需求`})),o=t(d.ul,()=>({children:[`
`,r,`
`,i,`
`,a,`
`]}));l(()=>f(o,e,P))});let F=c(`rue:slot:anchor`);o(e,F),m(()=>{l(()=>f(`
`,e,F))});let I=c(`rue:component:anchor`);o(e,I);let ae=t(d.h2,()=>({children:`浏览器调试`}));f(ae,e,I);let L=c(`rue:slot:anchor`);o(e,L),m(()=>{l(()=>f(`
`,e,L))});let R=c(`rue:component:anchor`);o(e,R),m(()=>{let n=t(d.li,()=>({children:`使用浏览器 DevTools 观察组件更新的 DOM 变化与事件`})),r=t(d.li,()=>({children:`借助 Performance 面板分析渲染时序与热区`})),i=t(d.li,()=>({children:`配合覆盖率报告定位无效代码路径`})),a=t(d.ul,()=>({children:[`
`,n,`
`,r,`
`,i,`
`]}));l(()=>f(a,e,R))});let z=c(`rue:slot:anchor`);o(e,z),m(()=>{l(()=>f(`
`,e,z))});let B=c(`rue:component:anchor`);o(e,B);let oe=t(d.h2,()=>({children:`TypeScript`}));f(oe,e,B);let V=c(`rue:slot:anchor`);o(e,V),m(()=>{l(()=>f(`
`,e,V))});let H=c(`rue:component:anchor`);o(e,H),m(()=>{let n=t(d.li,()=>({children:`Rue 原生支持 TS，推荐在 CI 中执行类型检查`})),r=t(d.code,()=>({children:`pnpm`})),i=t(d.li,()=>({children:[`常见脚本命令如下；在本仓库开发时请优先使用 `,r]})),a=t(d.ul,()=>({children:[`
`,n,`
`,i,`
`]}));l(()=>f(a,e,H))});let U=c(`rue:slot:anchor`);o(e,U),m(()=>{l(()=>f(`
`,e,U))});let W=c(`rue:component:anchor`);o(e,W),m(()=>{let n=t(d.code,()=>({className:`language-sh`,children:`$ npm run check
`})),r=t(d.pre,()=>({children:n})),i=t(g,()=>({value:`npm`,label:`npm`,children:r})),a=t(d.code,()=>({className:`language-sh`,children:`$ pnpm run check
`})),o=t(d.pre,()=>({children:a})),s=t(g,()=>({value:`pnpm`,label:`pnpm`,children:o})),c=t(d.code,()=>({className:`language-sh`,children:`$ yarn check
`})),u=t(d.pre,()=>({children:c})),p=t(g,()=>({value:`yarn`,label:`yarn`,children:u})),m=t(d.code,()=>({className:`language-sh`,children:`$ bun run check
`})),_=t(d.pre,()=>({children:m})),v=t(g,()=>({value:`bun`,label:`bun`,children:_})),y=t(h,()=>({ariaLabel:`运行类型检查`,children:[i,s,p,v]}));l(()=>f(y,e,W))});let G=c(`rue:slot:anchor`);o(e,G),m(()=>{l(()=>f(`
`,e,G))});let K=c(`rue:component:anchor`);o(e,K);let se=t(d.h2,()=>({children:`测试`}));f(se,e,K);let q=c(`rue:slot:anchor`);o(e,q),m(()=>{l(()=>f(`
`,e,q))});let J=c(`rue:component:anchor`);o(e,J),m(()=>{let n=t(d.a,()=>({href:`https://vitest.dev/`,children:`Vitest`})),r=t(d.li,()=>({children:[`单元与组件测试使用 `,n,`，与 Vite 深度整合`]})),i=t(d.li,()=>({children:`常用测试脚本包括全部测试、单元测试与覆盖率`})),a=t(d.ul,()=>({children:[`
`,r,`
`,i,`
`]}));l(()=>f(a,e,J))});let Y=c(`rue:slot:anchor`);o(e,Y),m(()=>{l(()=>f(`
`,e,Y))});let X=c(`rue:component:anchor`);o(e,X),m(()=>{let n=t(d.code,()=>({className:`language-sh`,children:`$ npm run test
$ npm run test-unit
$ npm run test-coverage
`})),r=t(d.pre,()=>({children:n})),i=t(g,()=>({value:`npm`,label:`npm`,children:r})),a=t(d.code,()=>({className:`language-sh`,children:`$ pnpm run test
$ pnpm run test-unit
$ pnpm run test-coverage
`})),o=t(d.pre,()=>({children:a})),s=t(g,()=>({value:`pnpm`,label:`pnpm`,children:o})),c=t(d.code,()=>({className:`language-sh`,children:`$ yarn test
$ yarn test-unit
$ yarn test-coverage
`})),u=t(d.pre,()=>({children:c})),p=t(g,()=>({value:`yarn`,label:`yarn`,children:u})),m=t(d.code,()=>({className:`language-sh`,children:`$ bun run test
$ bun run test-unit
$ bun run test-coverage
`})),_=t(d.pre,()=>({children:m})),v=t(g,()=>({value:`bun`,label:`bun`,children:_})),y=t(h,()=>({ariaLabel:`运行测试脚本`,children:[i,s,p,v]}));l(()=>f(y,e,X))});let Z=c(`rue:slot:anchor`);o(e,Z),m(()=>{l(()=>f(`
`,e,Z))});let Q=c(`rue:component:anchor`);o(e,Q);let ce=t(d.p,()=>({children:`如需端到端测试，可结合 Cypress；Rue 与 Vite 的构建产物便于在真实环境下验证。`}));f(ce,e,Q);let le=c(`rue:slot:anchor`);o(e,le),m(()=>{l(()=>f(`
`,e,le))});let ue=c(`rue:component:anchor`);o(e,ue);let de=t(d.h2,()=>({children:`代码质量`}));f(de,e,ue);let fe=c(`rue:slot:anchor`);o(e,fe),m(()=>{l(()=>f(`
`,e,fe))});let pe=c(`rue:component:anchor`);o(e,pe);let me=t(d.p,()=>({children:`Rue 推荐使用快速现代的静态检查工具：`}));f(me,e,pe);let he=c(`rue:slot:anchor`);o(e,he),m(()=>{l(()=>f(`
`,e,he))});let ge=c(`rue:component:anchor`);o(e,ge),m(()=>{let n=t(d.code,()=>({children:`oxlint`})),r=t(d.li,()=>({children:[`使用 `,n,` 进行代码检查`]})),i=t(d.code,()=>({children:`simple-git-hooks`})),a=t(d.code,()=>({children:`lint-staged`})),o=t(d.li,()=>({children:[`配合 `,i,` 与 `,a,` 在提交前自动处理改动`]})),s=t(d.ul,()=>({children:[`
`,r,`
`,o,`
`]}));l(()=>f(s,e,ge))});let _e=c(`rue:slot:anchor`);o(e,_e),m(()=>{l(()=>f(`
`,e,_e))});let ve=c(`rue:component:anchor`);o(e,ve);let ye=t(d.p,()=>({children:`在本仓库的相关脚本：`}));f(ye,e,ve);let be=c(`rue:slot:anchor`);o(e,be),m(()=>{l(()=>f(`
`,e,be))});let xe=c(`rue:component:anchor`);o(e,xe),m(()=>{let n=t(d.code,()=>({className:`language-sh`,children:`$ npm run oxlint
$ npm run oxlint-fix
`})),r=t(d.pre,()=>({children:n})),i=t(g,()=>({value:`npm`,label:`npm`,children:r})),a=t(d.code,()=>({className:`language-sh`,children:`$ pnpm run oxlint
$ pnpm run oxlint-fix
`})),o=t(d.pre,()=>({children:a})),s=t(g,()=>({value:`pnpm`,label:`pnpm`,children:o})),c=t(d.code,()=>({className:`language-sh`,children:`$ yarn oxlint
$ yarn oxlint-fix
`})),u=t(d.pre,()=>({children:c})),p=t(g,()=>({value:`yarn`,label:`yarn`,children:u})),m=t(d.code,()=>({className:`language-sh`,children:`$ bun run oxlint
$ bun run oxlint-fix
`})),_=t(d.pre,()=>({children:m})),v=t(g,()=>({value:`bun`,label:`bun`,children:_})),y=t(h,()=>({ariaLabel:`运行代码质量脚本`,children:[i,s,p,v]}));l(()=>f(y,e,xe))});let Se=c(`rue:slot:anchor`);o(e,Se),m(()=>{l(()=>f(`
`,e,Se))});let Ce=c(`rue:component:anchor`);o(e,Ce);let we=t(d.p,()=>({children:`如果团队有既定的检查与格式化方案，也可按规范自行接入。`}));f(we,e,Ce);let Te=c(`rue:slot:anchor`);o(e,Te),m(()=>{l(()=>f(`
`,e,Te))});let Ee=c(`rue:component:anchor`);o(e,Ee);let De=t(d.h2,()=>({children:`格式化`}));f(De,e,Ee);let Oe=c(`rue:slot:anchor`);o(e,Oe),m(()=>{l(()=>f(`
`,e,Oe))});let ke=c(`rue:component:anchor`);o(e,ke),m(()=>{let n=t(d.code,()=>({children:`oxfmt`})),r=t(d.li,()=>({children:[`推荐使用 `,n,` 对代码与文档进行统一格式化`]})),i=t(d.li,()=>({children:`也可采用 Prettier 按需配置`})),a=t(d.ul,()=>({children:[`
`,r,`
`,i,`
`]}));l(()=>f(a,e,ke))});let Ae=c(`rue:slot:anchor`);o(e,Ae),m(()=>{l(()=>f(`
`,e,Ae))});let je=c(`rue:component:anchor`);o(e,je);let Me=t(d.p,()=>({children:`相关脚本：`}));f(Me,e,je);let Ne=c(`rue:slot:anchor`);o(e,Ne),m(()=>{l(()=>f(`
`,e,Ne))});let Pe=c(`rue:component:anchor`);o(e,Pe),m(()=>{let n=t(d.code,()=>({className:`language-sh`,children:`$ npm run format
$ npm run format-check
`})),r=t(d.pre,()=>({children:n})),i=t(g,()=>({value:`npm`,label:`npm`,children:r})),a=t(d.code,()=>({className:`language-sh`,children:`$ pnpm run format
$ pnpm run format-check
`})),o=t(d.pre,()=>({children:a})),s=t(g,()=>({value:`pnpm`,label:`pnpm`,children:o})),c=t(d.code,()=>({className:`language-sh`,children:`$ yarn format
$ yarn format-check
`})),u=t(d.pre,()=>({children:c})),p=t(g,()=>({value:`yarn`,label:`yarn`,children:u})),m=t(d.code,()=>({className:`language-sh`,children:`$ bun run format
$ bun run format-check
`})),_=t(d.pre,()=>({children:m})),v=t(g,()=>({value:`bun`,label:`bun`,children:_})),y=t(h,()=>({ariaLabel:`运行格式化脚本`,children:[i,s,p,v]}));l(()=>f(y,e,Pe))});let $=c(`rue:slot:anchor`);o(e,$),m(()=>{l(()=>f(`
`,e,$))});let Fe=c(`rue:component:anchor`);o(e,Fe);let Ie=t(d.h2,()=>({children:`底层包与生态`}));f(Ie,e,Fe);let Le=c(`rue:slot:anchor`);o(e,Le),m(()=>{l(()=>f(`
`,e,Le))});let Re=c(`rue:component:anchor`);o(e,Re);let ze=t(d.p,()=>({children:`以下包在 Rue 项目中常用：`}));f(ze,e,Re);let Be=c(`rue:slot:anchor`);o(e,Be),m(()=>{l(()=>f(`
`,e,Be))});let Ve=c(`rue:component:anchor`);o(e,Ve),m(()=>{let n=t(d.code,()=>({children:`@rue-js/runtime`})),r=t(d.li,()=>({children:[n,`：Rue 运行时核心`]})),i=t(d.code,()=>({children:`@rue-js/shared`})),a=t(d.li,()=>({children:[i,`：通用工具与类型`]})),o=t(d.code,()=>({children:`@rue-js/vite-plugin-rue`})),s=t(d.li,()=>({children:[o,`：Rue 与 Vite 集成的官方插件`]})),c=t(d.code,()=>({children:`@rue-js/router`})),u=t(d.li,()=>({children:[c,`：路由能力`]})),p=t(d.ul,()=>({children:[`
`,r,`
`,a,`
`,s,`
`,u,`
`]}));l(()=>f(p,e,Ve))});let He=c(`rue:slot:anchor`);o(e,He),m(()=>{l(()=>f(`
`,e,He))});let Ue=c(`rue:component:anchor`);o(e,Ue);let We=t(d.p,()=>({children:`应用 JSX 必须经过 Rue 插件编译；工具链不需要安装额外的 JSX 运行时包。你可以在本仓库的脚本中查看这些包的构建方式与使用姿势。`}));return f(We,e,Ue),e},!0),e=>s(()=>{u.set(e.components)}),()=>i)}function v(r={}){d();let{MDXLayout:a}=i(`useSetup:0:0`,()=>{let{wrapper:e}=r.components||{};return{MDXLayout:e}});return a?(()=>{let i=e(()=>{let e=n(),t=p(`_createMdxContent`,e);return o(e,t),m(()=>{u(t,r,[])}),e});return t(a,()=>({...r,children:i}))})():_(r)}d(v);export{v as t};