import{m as e}from"./vapor-runtime-x7F5M-49.js";import{n as t,t as n}from"./src-Dlanwp1X.js";import{n as r,t as i}from"./DocCodeTabs-C7GfUP7J.js";function a(a){let o=Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`},a.components);return t(e,{children:[n(o.h1,{children:`工具链`}),`
`,n(o.h2,{children:`项目搭建`}),`
`,n(o.h3,{children:`Vite`}),`
`,t(o.p,{children:[n(o.a,{href:`https://vitejs.dev/`,children:`Vite`}),` 是轻量快速的构建与开发服务器，Rue 通过官方插件无缝集成，能在保存后立即反馈。`]}),`
`,n(o.p,{children:`使用 Vite 创建新项目，并接入 Rue：`}),`
`,t(r,{ariaLabel:`使用 Vite 创建 Rue 项目`,children:[n(i,{value:`npm`,label:`npm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ npm create vite@latest my-rue-app
$ cd my-rue-app
$ npm install @rue-js/runtime @rue-js/vite-plugin-rue
`})})}),n(i,{value:`pnpm`,label:`pnpm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ pnpm create vite@latest my-rue-app
$ cd my-rue-app
$ pnpm add @rue-js/runtime @rue-js/vite-plugin-rue
`})})}),n(i,{value:`yarn`,label:`yarn`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ yarn create vite my-rue-app
$ cd my-rue-app
$ yarn add @rue-js/runtime @rue-js/vite-plugin-rue
`})})}),n(i,{value:`bun`,label:`bun`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ bun create vite my-rue-app
$ cd my-rue-app
$ bun add @rue-js/runtime @rue-js/vite-plugin-rue
`})})})]}),`
`,t(o.p,{children:[`在 `,n(o.code,{children:`vite.config.ts`}),` 中启用 Rue 插件：`]}),`
`,n(o.pre,{children:n(o.code,{className:`language-ts`,children:`import { defineConfig } from 'vite'
import rue from '@rue-js/vite-plugin-rue'

export default defineConfig({
  plugins: [rue()],
})
`})}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:[`了解 Vite：参见 `,n(o.a,{href:`https://vitejs.dev`,children:`Vite 文档`})]}),`
`,t(o.li,{children:[`Rue 的编译与指令由 `,n(o.code,{children:`@rue-js/vite-plugin-rue`}),` 负责集成与优化`]}),`
`]}),`
`,n(o.p,{children:`在线沙盒通常支持将项目打包为 Vite 工程下载。`}),`
`,n(o.h2,{children:`IDE 支持`}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:[`推荐使用 `,n(o.a,{href:`https://code.visualstudio.com/`,children:`VS Code`}),`，配合 TypeScript 与 Vite 插件获得语法高亮与提示`]}),`
`,n(o.li,{children:`WebStorm、Neovim 等同样可通过 LSP 获得良好体验`}),`
`,n(o.li,{children:`Rue 不需要专用 Rue 扩展，采用常规 TS/JS 能力就可以满足开发需求`}),`
`]}),`
`,n(o.h2,{children:`浏览器调试`}),`
`,t(o.ul,{children:[`
`,n(o.li,{children:`使用浏览器 DevTools 观察组件更新的 DOM 变化与事件`}),`
`,n(o.li,{children:`借助 Performance 面板分析渲染时序与热区`}),`
`,n(o.li,{children:`配合覆盖率报告定位无效代码路径`}),`
`]}),`
`,n(o.h2,{children:`TypeScript`}),`
`,t(o.ul,{children:[`
`,n(o.li,{children:`Rue 原生支持 TS，推荐在 CI 中执行类型检查`}),`
`,t(o.li,{children:[`常见脚本命令如下；在本仓库开发时请优先使用 `,n(o.code,{children:`pnpm`})]}),`
`]}),`
`,t(r,{ariaLabel:`运行类型检查`,children:[n(i,{value:`npm`,label:`npm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ npm run check
`})})}),n(i,{value:`pnpm`,label:`pnpm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ pnpm run check
`})})}),n(i,{value:`yarn`,label:`yarn`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ yarn check
`})})}),n(i,{value:`bun`,label:`bun`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ bun run check
`})})})]}),`
`,n(o.h2,{children:`测试`}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:[`单元与组件测试使用 `,n(o.a,{href:`https://vitest.dev/`,children:`Vitest`}),`，与 Vite 深度整合`]}),`
`,n(o.li,{children:`常用测试脚本包括全部测试、单元测试与覆盖率`}),`
`]}),`
`,t(r,{ariaLabel:`运行测试脚本`,children:[n(i,{value:`npm`,label:`npm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ npm run test
$ npm run test-unit
$ npm run test-coverage
`})})}),n(i,{value:`pnpm`,label:`pnpm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ pnpm run test
$ pnpm run test-unit
$ pnpm run test-coverage
`})})}),n(i,{value:`yarn`,label:`yarn`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ yarn test
$ yarn test-unit
$ yarn test-coverage
`})})}),n(i,{value:`bun`,label:`bun`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ bun run test
$ bun run test-unit
$ bun run test-coverage
`})})})]}),`
`,n(o.p,{children:`如需端到端测试，可结合 Cypress；Rue 与 Vite 的构建产物便于在真实环境下验证。`}),`
`,n(o.h2,{children:`代码质量`}),`
`,n(o.p,{children:`Rue 推荐使用快速现代的静态检查工具：`}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:[`使用 `,n(o.code,{children:`oxlint`}),` 进行代码检查`]}),`
`,t(o.li,{children:[`配合 `,n(o.code,{children:`simple-git-hooks`}),` 与 `,n(o.code,{children:`lint-staged`}),` 在提交前自动处理改动`]}),`
`]}),`
`,n(o.p,{children:`在本仓库的相关脚本：`}),`
`,t(r,{ariaLabel:`运行代码质量脚本`,children:[n(i,{value:`npm`,label:`npm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ npm run oxlint
$ npm run oxlint-fix
`})})}),n(i,{value:`pnpm`,label:`pnpm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ pnpm run oxlint
$ pnpm run oxlint-fix
`})})}),n(i,{value:`yarn`,label:`yarn`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ yarn oxlint
$ yarn oxlint-fix
`})})}),n(i,{value:`bun`,label:`bun`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ bun run oxlint
$ bun run oxlint-fix
`})})})]}),`
`,n(o.p,{children:`如果团队有既定的检查与格式化方案，也可按规范自行接入。`}),`
`,n(o.h2,{children:`格式化`}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:[`推荐使用 `,n(o.code,{children:`oxfmt`}),` 对代码与文档进行统一格式化`]}),`
`,n(o.li,{children:`也可采用 Prettier 按需配置`}),`
`]}),`
`,n(o.p,{children:`相关脚本：`}),`
`,t(r,{ariaLabel:`运行格式化脚本`,children:[n(i,{value:`npm`,label:`npm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ npm run format
$ npm run format-check
`})})}),n(i,{value:`pnpm`,label:`pnpm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ pnpm run format
$ pnpm run format-check
`})})}),n(i,{value:`yarn`,label:`yarn`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ yarn format
$ yarn format-check
`})})}),n(i,{value:`bun`,label:`bun`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ bun run format
$ bun run format-check
`})})})]}),`
`,n(o.h2,{children:`底层包与生态`}),`
`,n(o.p,{children:`以下包在 Rue 项目中常用：`}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:[n(o.code,{children:`@rue-js/runtime`}),`：Rue 运行时核心`]}),`
`,t(o.li,{children:[n(o.code,{children:`@rue-js/shared`}),`：通用工具与类型`]}),`
`,t(o.li,{children:[n(o.code,{children:`@rue-js/vite-plugin-rue`}),`：Rue 与 Vite 集成的官方插件`]}),`
`,t(o.li,{children:[n(o.code,{children:`@rue-js/router`}),`：路由能力`]}),`
`,t(o.li,{children:[n(o.code,{children:`@rue-js/jsx-runtime`}),`：JSX 相关运行时支持`]}),`
`,t(o.li,{children:[n(o.code,{children:`@rue-js/runtime-vapor`}),`：针对特定运行模式的优化实现`]}),`
`]}),`
`,n(o.p,{children:`你可以在本仓库的脚本中查看它们的构建方式与使用姿势。`})]})}function o(e={}){let{wrapper:t}=e.components||{};return t?n(t,Object.assign({},e,{children:n(a,e)})):a(e)}export{o as t};