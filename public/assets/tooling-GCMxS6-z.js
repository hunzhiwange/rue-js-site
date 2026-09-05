import{Kt as e,W as t,X as n,Y as r,_t as i,ht as a,kn as o,mt as s,nt as c,q as l,rt as u,tt as d,wn as f,yn as p,z as m}from"./rue-runtime-CwEGJ854.js";import{n as h,t as g}from"./DocCodeTabs-DwkY6VmK.js";function _(e){let s=t(e.components),u=Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`},s.get());return l(a(()=>{let e=c(),t=d(`rue:component:anchor`);n(e,t);let a=i(u.h1,()=>({children:`工具链`}));r(a,e,t);let s=d(`rue:slot:anchor`);n(e,s),f(()=>{o(()=>r(`
`,e,s))});let l=d(`rue:component:anchor`);n(e,l);let p=i(u.h2,()=>({children:`项目搭建`}));r(p,e,l);let m=d(`rue:slot:anchor`);n(e,m),f(()=>{o(()=>r(`
`,e,m))});let _=d(`rue:component:anchor`);n(e,_);let v=i(u.h3,()=>({children:`Vite`}));r(v,e,_);let y=d(`rue:slot:anchor`);n(e,y),f(()=>{o(()=>r(`
`,e,y))});let ee=d(`rue:component:anchor`);n(e,ee),f(()=>{let t=i(u.a,()=>({href:`https://vitejs.dev/`,children:`Vite`})),n=i(u.p,()=>({children:[t,` 是轻量快速的构建与开发服务器，Rue 通过官方插件无缝集成，能在保存后立即反馈。`]}));o(()=>r(n,e,ee))});let b=d(`rue:slot:anchor`);n(e,b),f(()=>{o(()=>r(`
`,e,b))});let x=d(`rue:component:anchor`);n(e,x);let te=i(u.p,()=>({children:`使用 Vite 创建新项目，并接入 Rue：`}));r(te,e,x);let S=d(`rue:slot:anchor`);n(e,S),f(()=>{o(()=>r(`
`,e,S))});let ne=d(`rue:component:anchor`);n(e,ne),f(()=>{let t=i(u.code,()=>({className:`language-sh`,children:`$ npm create vite@latest my-rue-app
$ cd my-rue-app
$ npm install @rue-js/runtime @rue-js/vite-plugin-rue
`})),n=i(u.pre,()=>({children:t})),a=i(g,()=>({value:`npm`,label:`npm`,children:n})),s=i(u.code,()=>({className:`language-sh`,children:`$ pnpm create vite@latest my-rue-app
$ cd my-rue-app
$ pnpm add @rue-js/runtime @rue-js/vite-plugin-rue
`})),c=i(u.pre,()=>({children:s})),l=i(g,()=>({value:`pnpm`,label:`pnpm`,children:c})),d=i(u.code,()=>({className:`language-sh`,children:`$ yarn create vite my-rue-app
$ cd my-rue-app
$ yarn add @rue-js/runtime @rue-js/vite-plugin-rue
`})),f=i(u.pre,()=>({children:d})),p=i(g,()=>({value:`yarn`,label:`yarn`,children:f})),m=i(u.code,()=>({className:`language-sh`,children:`$ bun create vite my-rue-app
$ cd my-rue-app
$ bun add @rue-js/runtime @rue-js/vite-plugin-rue
`})),_=i(u.pre,()=>({children:m})),v=i(g,()=>({value:`bun`,label:`bun`,children:_})),y=i(h,()=>({ariaLabel:`使用 Vite 创建 Rue 项目`,children:[a,l,p,v]}));o(()=>r(y,e,ne))});let C=d(`rue:slot:anchor`);n(e,C),f(()=>{o(()=>r(`
`,e,C))});let w=d(`rue:component:anchor`);n(e,w),f(()=>{let t=i(u.code,()=>({children:`vite.config.ts`})),n=i(u.p,()=>({children:[`在 `,t,` 中启用 Rue 插件：`]}));o(()=>r(n,e,w))});let T=d(`rue:slot:anchor`);n(e,T),f(()=>{o(()=>r(`
`,e,T))});let E=d(`rue:component:anchor`);n(e,E),f(()=>{let t=i(u.code,()=>({className:`language-ts`,children:`import { defineConfig } from 'vite'
import rue from '@rue-js/vite-plugin-rue'

export default defineConfig({
  plugins: [rue()],
})
`})),n=i(u.pre,()=>({children:t}));o(()=>r(n,e,E))});let D=d(`rue:slot:anchor`);n(e,D),f(()=>{o(()=>r(`
`,e,D))});let O=d(`rue:component:anchor`);n(e,O),f(()=>{let t=i(u.a,()=>({href:`https://vitejs.dev`,children:`Vite 文档`})),n=i(u.li,()=>({children:[`了解 Vite：参见 `,t]})),a=i(u.code,()=>({children:`@rue-js/vite-plugin-rue`})),s=i(u.li,()=>({children:[`Rue 的编译与指令由 `,a,` 负责集成与优化`]})),c=i(u.ul,()=>({children:[`
`,n,`
`,s,`
`]}));o(()=>r(c,e,O))});let k=d(`rue:slot:anchor`);n(e,k),f(()=>{o(()=>r(`
`,e,k))});let A=d(`rue:component:anchor`);n(e,A);let re=i(u.p,()=>({children:`在线沙盒通常支持将项目打包为 Vite 工程下载。`}));r(re,e,A);let j=d(`rue:slot:anchor`);n(e,j),f(()=>{o(()=>r(`
`,e,j))});let M=d(`rue:component:anchor`);n(e,M);let ie=i(u.h2,()=>({children:`IDE 支持`}));r(ie,e,M);let N=d(`rue:slot:anchor`);n(e,N),f(()=>{o(()=>r(`
`,e,N))});let P=d(`rue:component:anchor`);n(e,P),f(()=>{let t=i(u.a,()=>({href:`https://code.visualstudio.com/`,children:`VS Code`})),n=i(u.li,()=>({children:[`推荐使用 `,t,`，配合 TypeScript 与 Vite 插件获得语法高亮与提示`]})),a=i(u.li,()=>({children:`WebStorm、Neovim 等同样可通过 LSP 获得良好体验`})),s=i(u.li,()=>({children:`Rue 不需要专用 Rue 扩展，采用常规 TS/JS 能力就可以满足开发需求`})),c=i(u.ul,()=>({children:[`
`,n,`
`,a,`
`,s,`
`]}));o(()=>r(c,e,P))});let F=d(`rue:slot:anchor`);n(e,F),f(()=>{o(()=>r(`
`,e,F))});let I=d(`rue:component:anchor`);n(e,I);let ae=i(u.h2,()=>({children:`浏览器调试`}));r(ae,e,I);let L=d(`rue:slot:anchor`);n(e,L),f(()=>{o(()=>r(`
`,e,L))});let R=d(`rue:component:anchor`);n(e,R),f(()=>{let t=i(u.li,()=>({children:`使用浏览器 DevTools 观察组件更新的 DOM 变化与事件`})),n=i(u.li,()=>({children:`借助 Performance 面板分析渲染时序与热区`})),a=i(u.li,()=>({children:`配合覆盖率报告定位无效代码路径`})),s=i(u.ul,()=>({children:[`
`,t,`
`,n,`
`,a,`
`]}));o(()=>r(s,e,R))});let z=d(`rue:slot:anchor`);n(e,z),f(()=>{o(()=>r(`
`,e,z))});let B=d(`rue:component:anchor`);n(e,B);let oe=i(u.h2,()=>({children:`TypeScript`}));r(oe,e,B);let V=d(`rue:slot:anchor`);n(e,V),f(()=>{o(()=>r(`
`,e,V))});let H=d(`rue:component:anchor`);n(e,H),f(()=>{let t=i(u.li,()=>({children:`Rue 原生支持 TS，推荐在 CI 中执行类型检查`})),n=i(u.code,()=>({children:`pnpm`})),a=i(u.li,()=>({children:[`常见脚本命令如下；在本仓库开发时请优先使用 `,n]})),s=i(u.ul,()=>({children:[`
`,t,`
`,a,`
`]}));o(()=>r(s,e,H))});let U=d(`rue:slot:anchor`);n(e,U),f(()=>{o(()=>r(`
`,e,U))});let W=d(`rue:component:anchor`);n(e,W),f(()=>{let t=i(u.code,()=>({className:`language-sh`,children:`$ npm run check
`})),n=i(u.pre,()=>({children:t})),a=i(g,()=>({value:`npm`,label:`npm`,children:n})),s=i(u.code,()=>({className:`language-sh`,children:`$ pnpm run check
`})),c=i(u.pre,()=>({children:s})),l=i(g,()=>({value:`pnpm`,label:`pnpm`,children:c})),d=i(u.code,()=>({className:`language-sh`,children:`$ yarn check
`})),f=i(u.pre,()=>({children:d})),p=i(g,()=>({value:`yarn`,label:`yarn`,children:f})),m=i(u.code,()=>({className:`language-sh`,children:`$ bun run check
`})),_=i(u.pre,()=>({children:m})),v=i(g,()=>({value:`bun`,label:`bun`,children:_})),y=i(h,()=>({ariaLabel:`运行类型检查`,children:[a,l,p,v]}));o(()=>r(y,e,W))});let G=d(`rue:slot:anchor`);n(e,G),f(()=>{o(()=>r(`
`,e,G))});let K=d(`rue:component:anchor`);n(e,K);let se=i(u.h2,()=>({children:`测试`}));r(se,e,K);let q=d(`rue:slot:anchor`);n(e,q),f(()=>{o(()=>r(`
`,e,q))});let J=d(`rue:component:anchor`);n(e,J),f(()=>{let t=i(u.a,()=>({href:`https://vitest.dev/`,children:`Vitest`})),n=i(u.li,()=>({children:[`单元与组件测试使用 `,t,`，与 Vite 深度整合`]})),a=i(u.li,()=>({children:`常用测试脚本包括全部测试、单元测试与覆盖率`})),s=i(u.ul,()=>({children:[`
`,n,`
`,a,`
`]}));o(()=>r(s,e,J))});let Y=d(`rue:slot:anchor`);n(e,Y),f(()=>{o(()=>r(`
`,e,Y))});let X=d(`rue:component:anchor`);n(e,X),f(()=>{let t=i(u.code,()=>({className:`language-sh`,children:`$ npm run test
$ npm run test-unit
$ npm run test-coverage
`})),n=i(u.pre,()=>({children:t})),a=i(g,()=>({value:`npm`,label:`npm`,children:n})),s=i(u.code,()=>({className:`language-sh`,children:`$ pnpm run test
$ pnpm run test-unit
$ pnpm run test-coverage
`})),c=i(u.pre,()=>({children:s})),l=i(g,()=>({value:`pnpm`,label:`pnpm`,children:c})),d=i(u.code,()=>({className:`language-sh`,children:`$ yarn test
$ yarn test-unit
$ yarn test-coverage
`})),f=i(u.pre,()=>({children:d})),p=i(g,()=>({value:`yarn`,label:`yarn`,children:f})),m=i(u.code,()=>({className:`language-sh`,children:`$ bun run test
$ bun run test-unit
$ bun run test-coverage
`})),_=i(u.pre,()=>({children:m})),v=i(g,()=>({value:`bun`,label:`bun`,children:_})),y=i(h,()=>({ariaLabel:`运行测试脚本`,children:[a,l,p,v]}));o(()=>r(y,e,X))});let Z=d(`rue:slot:anchor`);n(e,Z),f(()=>{o(()=>r(`
`,e,Z))});let Q=d(`rue:component:anchor`);n(e,Q);let ce=i(u.p,()=>({children:`如需端到端测试，可结合 Cypress；Rue 与 Vite 的构建产物便于在真实环境下验证。`}));r(ce,e,Q);let le=d(`rue:slot:anchor`);n(e,le),f(()=>{o(()=>r(`
`,e,le))});let ue=d(`rue:component:anchor`);n(e,ue);let de=i(u.h2,()=>({children:`代码质量`}));r(de,e,ue);let fe=d(`rue:slot:anchor`);n(e,fe),f(()=>{o(()=>r(`
`,e,fe))});let pe=d(`rue:component:anchor`);n(e,pe);let me=i(u.p,()=>({children:`Rue 推荐使用快速现代的静态检查工具：`}));r(me,e,pe);let he=d(`rue:slot:anchor`);n(e,he),f(()=>{o(()=>r(`
`,e,he))});let ge=d(`rue:component:anchor`);n(e,ge),f(()=>{let t=i(u.code,()=>({children:`oxlint`})),n=i(u.li,()=>({children:[`使用 `,t,` 进行代码检查`]})),a=i(u.code,()=>({children:`simple-git-hooks`})),s=i(u.code,()=>({children:`lint-staged`})),c=i(u.li,()=>({children:[`配合 `,a,` 与 `,s,` 在提交前自动处理改动`]})),l=i(u.ul,()=>({children:[`
`,n,`
`,c,`
`]}));o(()=>r(l,e,ge))});let _e=d(`rue:slot:anchor`);n(e,_e),f(()=>{o(()=>r(`
`,e,_e))});let ve=d(`rue:component:anchor`);n(e,ve);let ye=i(u.p,()=>({children:`在本仓库的相关脚本：`}));r(ye,e,ve);let be=d(`rue:slot:anchor`);n(e,be),f(()=>{o(()=>r(`
`,e,be))});let xe=d(`rue:component:anchor`);n(e,xe),f(()=>{let t=i(u.code,()=>({className:`language-sh`,children:`$ npm run oxlint
$ npm run oxlint-fix
`})),n=i(u.pre,()=>({children:t})),a=i(g,()=>({value:`npm`,label:`npm`,children:n})),s=i(u.code,()=>({className:`language-sh`,children:`$ pnpm run oxlint
$ pnpm run oxlint-fix
`})),c=i(u.pre,()=>({children:s})),l=i(g,()=>({value:`pnpm`,label:`pnpm`,children:c})),d=i(u.code,()=>({className:`language-sh`,children:`$ yarn oxlint
$ yarn oxlint-fix
`})),f=i(u.pre,()=>({children:d})),p=i(g,()=>({value:`yarn`,label:`yarn`,children:f})),m=i(u.code,()=>({className:`language-sh`,children:`$ bun run oxlint
$ bun run oxlint-fix
`})),_=i(u.pre,()=>({children:m})),v=i(g,()=>({value:`bun`,label:`bun`,children:_})),y=i(h,()=>({ariaLabel:`运行代码质量脚本`,children:[a,l,p,v]}));o(()=>r(y,e,xe))});let Se=d(`rue:slot:anchor`);n(e,Se),f(()=>{o(()=>r(`
`,e,Se))});let Ce=d(`rue:component:anchor`);n(e,Ce);let we=i(u.p,()=>({children:`如果团队有既定的检查与格式化方案，也可按规范自行接入。`}));r(we,e,Ce);let Te=d(`rue:slot:anchor`);n(e,Te),f(()=>{o(()=>r(`
`,e,Te))});let Ee=d(`rue:component:anchor`);n(e,Ee);let De=i(u.h2,()=>({children:`格式化`}));r(De,e,Ee);let Oe=d(`rue:slot:anchor`);n(e,Oe),f(()=>{o(()=>r(`
`,e,Oe))});let ke=d(`rue:component:anchor`);n(e,ke),f(()=>{let t=i(u.code,()=>({children:`oxfmt`})),n=i(u.li,()=>({children:[`推荐使用 `,t,` 对代码与文档进行统一格式化`]})),a=i(u.li,()=>({children:`也可采用 Prettier 按需配置`})),s=i(u.ul,()=>({children:[`
`,n,`
`,a,`
`]}));o(()=>r(s,e,ke))});let Ae=d(`rue:slot:anchor`);n(e,Ae),f(()=>{o(()=>r(`
`,e,Ae))});let je=d(`rue:component:anchor`);n(e,je);let Me=i(u.p,()=>({children:`相关脚本：`}));r(Me,e,je);let Ne=d(`rue:slot:anchor`);n(e,Ne),f(()=>{o(()=>r(`
`,e,Ne))});let Pe=d(`rue:component:anchor`);n(e,Pe),f(()=>{let t=i(u.code,()=>({className:`language-sh`,children:`$ npm run format
$ npm run format-check
`})),n=i(u.pre,()=>({children:t})),a=i(g,()=>({value:`npm`,label:`npm`,children:n})),s=i(u.code,()=>({className:`language-sh`,children:`$ pnpm run format
$ pnpm run format-check
`})),c=i(u.pre,()=>({children:s})),l=i(g,()=>({value:`pnpm`,label:`pnpm`,children:c})),d=i(u.code,()=>({className:`language-sh`,children:`$ yarn format
$ yarn format-check
`})),f=i(u.pre,()=>({children:d})),p=i(g,()=>({value:`yarn`,label:`yarn`,children:f})),m=i(u.code,()=>({className:`language-sh`,children:`$ bun run format
$ bun run format-check
`})),_=i(u.pre,()=>({children:m})),v=i(g,()=>({value:`bun`,label:`bun`,children:_})),y=i(h,()=>({ariaLabel:`运行格式化脚本`,children:[a,l,p,v]}));o(()=>r(y,e,Pe))});let $=d(`rue:slot:anchor`);n(e,$),f(()=>{o(()=>r(`
`,e,$))});let Fe=d(`rue:component:anchor`);n(e,Fe);let Ie=i(u.h2,()=>({children:`底层包与生态`}));r(Ie,e,Fe);let Le=d(`rue:slot:anchor`);n(e,Le),f(()=>{o(()=>r(`
`,e,Le))});let Re=d(`rue:component:anchor`);n(e,Re);let ze=i(u.p,()=>({children:`以下包在 Rue 项目中常用：`}));r(ze,e,Re);let Be=d(`rue:slot:anchor`);n(e,Be),f(()=>{o(()=>r(`
`,e,Be))});let Ve=d(`rue:component:anchor`);n(e,Ve),f(()=>{let t=i(u.code,()=>({children:`@rue-js/runtime`})),n=i(u.li,()=>({children:[t,`：Rue 运行时核心`]})),a=i(u.code,()=>({children:`@rue-js/shared`})),s=i(u.li,()=>({children:[a,`：通用工具与类型`]})),c=i(u.code,()=>({children:`@rue-js/vite-plugin-rue`})),l=i(u.li,()=>({children:[c,`：Rue 与 Vite 集成的官方插件`]})),d=i(u.code,()=>({children:`@rue-js/router`})),f=i(u.li,()=>({children:[d,`：路由能力`]})),p=i(u.ul,()=>({children:[`
`,n,`
`,s,`
`,l,`
`,f,`
`]}));o(()=>r(p,e,Ve))});let He=d(`rue:slot:anchor`);n(e,He),f(()=>{o(()=>r(`
`,e,He))});let Ue=d(`rue:component:anchor`);n(e,Ue);let We=i(u.p,()=>({children:`应用 JSX 必须经过 Rue 插件编译；工具链不需要安装额外的 JSX 运行时包。你可以在本仓库的脚本中查看这些包的构建方式与使用姿势。`}));return r(We,e,Ue),e},!0),e=>m(()=>{s.set(e.components)}),()=>e)}function v(t={}){e();let{MDXLayout:r}=p(`useSetup:0:0`,()=>{let{wrapper:e}=t.components||{};return{MDXLayout:e}});return r?(()=>{let e=a(()=>{let e=c(),r=u(`_createMdxContent`,e);return n(e,r),f(()=>{s(r,t,[])}),e});return i(r,()=>({...t,children:e}))})():_(t)}e(v);export{v as t};