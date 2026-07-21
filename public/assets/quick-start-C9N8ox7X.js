import{s as e}from"./context-8lXZvIn-.js";import{n as t,t as n}from"./src-CCTNpCXV.js";import{n as r,t as i}from"./DocCodeTabs-VoPt4Va0.js";function a(a){let o=Object.assign({a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`},a.components);return t(e,{children:[n(o.h1,{children:`快速开始 `}),`
`,n(o.h2,{children:`创建 Rue 应用 `}),`
`,t(`div`,{className:`tip`,children:[n(o.p,{children:n(o.strong,{children:`前置条件`})}),t(o.ul,{children:[`
`,n(o.li,{children:`熟悉命令行`}),`
`,t(o.li,{children:[`安装 `,n(o.a,{href:`https://nodejs.org/`,children:`Node.js`}),` 版本 >=22.12.0`]}),`
`]})]}),`
`,t(o.p,{children:[`在本节中，我们将介绍如何在本地机器上搭建一个 Rue `,n(o.a,{href:`/guide/guide/extras/ways-of-using-rue#single-page-application-spa`,children:`单页应用`}),`。创建的项目将使用基于 `,n(o.a,{href:`https://vitejs.dev`,children:`Vite`}),` 的构建设置，并允许我们使用 JSX/TSX 编写组件。`]}),`
`,t(o.p,{children:[`确保你已安装最新版本的 `,n(o.a,{href:`https://nodejs.org/`,children:`Node.js`}),`，并且当前工作目录是你打算创建项目的目录。在命令行中运行以下命令（不带 `,n(o.code,{children:`$`}),` 符号）：`]}),`
`,t(r,{ariaLabel:`创建 Rue 应用`,children:[n(i,{value:`npm`,label:`npm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ npm create rue@latest
`})})}),n(i,{value:`pnpm`,label:`pnpm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ pnpm create rue@latest
`})})}),n(i,{value:`yarn`,label:`yarn`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`# 对于 Yarn (v1+)
$ yarn create rue

# 对于 Yarn Modern (v2+)
$ yarn create rue@latest

# 对于 Yarn ^v4.11
$ yarn dlx create-rue@latest
`})})}),n(i,{value:`bun`,label:`bun`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ bun create rue@latest
`})})})]}),`
`,t(o.p,{children:[`此命令将安装并执行 `,n(o.code,{children:`create-rue`}),`，即官方的 Rue 项目脚手架工具。你将看到几个可选功能的提示，例如 TypeScript 和测试支持：`]}),`
`,n(o.pre,{children:n(o.code,{className:`language-sh`,children:`✔ 项目名称: … <your-project-name>
正在 ./<your-project-name> 中搭建项目...
完成。
`})}),`
`,t(o.p,{children:[`如果你不确定某个选项，现在只需按回车选择 `,n(o.code,{children:`No`}),`。项目创建完成后，按照说明安装依赖并启动开发服务器：`]}),`
`,t(r,{ariaLabel:`安装依赖并启动开发服务器`,children:[n(i,{value:`npm`,label:`npm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ cd <your-project-name>
$ npm install
$ npm run dev
`})})}),n(i,{value:`pnpm`,label:`pnpm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ cd <your-project-name>
$ pnpm install
$ pnpm run dev
`})})}),n(i,{value:`yarn`,label:`yarn`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ cd <your-project-name>
$ yarn
$ yarn dev
`})})}),n(i,{value:`bun`,label:`bun`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ cd <your-project-name>
$ bun install
$ bun run dev
`})})})]}),`
`,n(o.p,{children:`现在你应该已经运行了你的第一个 Rue 项目！请注意，生成项目中的示例组件是使用 JSX/TSX 编写的。以下是一些额外的提示：`}),`
`,t(o.ul,{children:[`
`,t(o.li,{children:[`推荐的 IDE 配置是 `,n(o.a,{href:`https://code.visualstudio.com/`,children:`Visual Studio Code`}),`。如果你使用其他编辑器，请查看 `,n(o.a,{href:`/guide/guide/scaling-up/tooling`,children:`IDE 支持部分`}),`。`]}),`
`,t(o.li,{children:[`更多工具细节，包括与后端框架的集成，在 `,n(o.a,{href:`/guide/guide/scaling-up/tooling`,children:`工具指南`}),` 中讨论。`]}),`
`,t(o.li,{children:[`要了解有关底层构建工具 Vite 的更多信息，请查看 `,n(o.a,{href:`https://vitejs.dev`,children:`Vite 文档`}),`。`]}),`
`,t(o.li,{children:[`如果你选择使用 TypeScript，请查看 `,n(o.a,{href:`/guide/guide/typescript/overview`,children:`TypeScript 使用指南`}),`。`]}),`
`]}),`
`,n(o.p,{children:`当你准备将应用部署到生产环境时，运行以下命令：`}),`
`,t(r,{ariaLabel:`生产构建`,children:[n(i,{value:`npm`,label:`npm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ npm run build
`})})}),n(i,{value:`pnpm`,label:`pnpm`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ pnpm run build
`})})}),n(i,{value:`yarn`,label:`yarn`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ yarn build
`})})}),n(i,{value:`bun`,label:`bun`,children:n(o.pre,{children:n(o.code,{className:`language-sh`,children:`$ bun run build
`})})})]}),`
`,t(o.p,{children:[`这将在项目的 `,n(o.code,{children:`./dist`}),` 目录中创建你的应用的生产就绪构建。查看`,n(o.a,{href:`/guide/guide/best-practices/production-deployment`,children:`生产部署指南`}),`以了解有关将应用部署到生产环境的更多信息。`]}),`
`,t(o.p,{children:[`如果你直接在浏览器中打开上述 `,n(o.code,{children:`index.html`}),`，你会发现它会抛出错误，因为 ES 模块无法在 `,n(o.code,{children:`file://`}),` 协议上工作，这是浏览器打开本地文件时使用的协议。`]}),`
`,t(o.p,{children:[`出于安全原因，ES 模块只能在 `,n(o.code,{children:`http://`}),` 协议上工作，这是浏览器打开网页时使用的协议。为了让 ES 模块在我们的本地机器上工作，我们需要通过本地 HTTP 服务器在 `,n(o.code,{children:`http://`}),` 协议上提供 `,n(o.code,{children:`index.html`}),`。`]}),`
`,t(o.p,{children:[`要启动本地 HTTP 服务器，首先确保你已安装 `,n(o.a,{href:`https://nodejs.org/en/`,children:`Node.js`}),`，然后在 HTML 文件所在的目录中从命令行运行 `,n(o.code,{children:`npx serve`}),`。你也可以使用任何其他能够提供具有正确 MIME 类型的静态文件的 HTTP 服务器。`]}),`
`,n(o.h2,{children:`下一步 `}),`
`,t(o.p,{children:[`如果你跳过了`,n(o.a,{href:`/guide/guide/introduction`,children:`简介`}),`，我们强烈建议在继续阅读文档的其余部分之前先阅读它。`]}),`
`,t(`div`,{className:`vt-box-container next-steps`,children:[t(`a`,{className:`vt-box`,href:`/guide/guide/essentials/application`,children:[n(`p`,{className:`next-steps-link`,children:`继续阅读指南`}),n(`p`,{className:`next-steps-caption`,children:`指南详细讲解框架的每个方面。`})]}),t(`a`,{className:`vt-box`,href:`/examples/hello-world`,children:[n(`p`,{className:`next-steps-link`,children:`查看示例`}),n(`p`,{className:`next-steps-caption`,children:`探索核心功能和常见 UI 任务的示例。`})]})]})]})}function o(e={}){let{wrapper:t}=e.components||{};return t?n(t,Object.assign({},e,{children:n(a,e)})):a(e)}export{o as t};