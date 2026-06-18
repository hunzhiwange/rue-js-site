import{$ as e,Ht as t,J as n,Q as r,X as i,Xt as a,Z as o,at as s,et as c,f as l,gt as u,l as d,ot as f,pt as p,q as m,qt as h,s as g,st as _,t as v,zt as y}from"./vapor-runtime-iQZthBPQ.js";import{a as b,n as x}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as S,i as C}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as w}from"./createHomeSplitExamplePage-C98rg19g.js";var T=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,E=[`main`,`beta`,`stable`],D=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},O=e=>e.replace(/T|Z/g,` `),k=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,A=o=>{let{error:c}=b(`useSetup:0:0`,()=>h(()=>({error:b(`computed:1:0`,()=>u(()=>o.resource.error.get()))})));if(c.get())return d(o=>{let l=r(`div`,o);s(l,`role`,`alert`),_(l,`alert alert-error alert-soft`);let u=r(`span`,l);n(l,u),n(u,e(`Error: `));let d=i(`rue:slot:anchor`);return n(u,d),a(()=>{let e=k(c.get());t(()=>g(e,u,d))}),l});let l=o.resource.data.get();return l?.length?C(`ul`,{className:`space-y-5`,children:l.map(e=>S(`li`,{className:`leading-7`,children:[C(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,className:`font-mono text-success hover:underline`,children:e.sha.slice(0,7)}),C(`span`,{children:` - `}),C(`span`,{className:`text-base-content`,children:D(e.commit.message)}),C(`br`,{}),C(`span`,{children:`by `}),C(`span`,{className:`font-semibold`,children:C(`a`,{href:e.author?.html_url||e.html_url,target:`_blank`,rel:`noreferrer`,className:`text-success hover:underline`,children:e.commit.author.name})}),C(`span`,{children:` at `}),C(`span`,{className:`font-semibold`,children:O(e.commit.author.date)})]},e.sha))}):C(`div`,{role:`status`,className:`alert alert-soft`,children:C(`span`,{children:`当前分支没有可显示的提交。`})})},j=w({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, type FC } from '@rue-js/rue'

const API_URL = 'https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha='
const BRANCHES = ['main', 'beta', 'stable'] as const

type Branch = (typeof BRANCHES)[number]

type CommitItem = {
  html_url: string
  sha: string
  author: {
    html_url: string
  } | null
  commit: {
    message: string
    author: {
      name: string
      date: string
    }
  }
}

type CommitResource = ReturnType<typeof createResource<Branch, CommitItem[]>>

const truncate = (value: string) => {
  const newline = value.indexOf('\\n')
  return newline > 0 ? value.slice(0, newline) : value
}

const formatDate = (value: string) => value.replace(/T|Z/g, ' ')

const formatError = (value: unknown) => {
  if (!value) return ''
  if (value instanceof Error) return value.message
  if (typeof value === 'string') return value
  return '请求失败'
}

const ResourceContent: FC<{ resource: CommitResource }> = props => {
  const error = props.resource.error.get()
  if (error) {
    return (
      <div role="alert" className="alert alert-error alert-soft">
        <span>Error: {formatError(error)}</span>
      </div>
    )
  }

  const commits = props.resource.data.get()
  return commits?.length ? (
    <ul className="space-y-5">
      {commits.map((item: CommitItem) => (
        <li key={item.sha} className="leading-7">
          <a
            href={item.html_url}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-success hover:underline"
          >
            {item.sha.slice(0, 7)}
          </a>
          <span> - </span>
          <span className="text-base-content">{truncate(item.commit.message)}</span>
          <br />
          <span>by </span>
          <span className="font-semibold">
            <a
              href={item.author?.html_url || item.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-success hover:underline"
            >
              {item.commit.author.name}
            </a>
          </span>
          <span> at </span>
          <span className="font-semibold">{formatDate(item.commit.author.date)}</span>
        </li>
      ))}
    </ul>
  ) : (
    <div role="status" className="alert alert-soft">
      <span>当前分支没有可显示的提交。</span>
    </div>
  )
}

const ResourceJSXDemo: FC = () => {
  const currentBranch = signal<Branch>(BRANCHES[0])
  const resource = createResource<Branch, CommitItem[]>(currentBranch, async branch => {
    const response = await fetch(\`\${API_URL}\${branch}\`)
    if (!response.ok) {
      throw new Error(\`请求失败：\${response.status}\`)
    }

    const data = (await response.json()) as CommitItem[]
    return Array.isArray(data) ? data : []
  })

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-4">
        <h2 className="text-2xl font-semibold">Fetching data with createResource in JSX</h2>
        <p className="text-sm text-base-content/70">
          这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。
        </p>
        <p className="text-sm text-base-content/70">
          数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource
          示例的结构。
        </p>

        <div className="flex flex-wrap gap-4">
          {BRANCHES.map(branch => (
            <label
              key={branch}
              htmlFor={\`resource-jsx-\${branch}\`}
              className="inline-flex items-center gap-2"
            >
              <input
                id={\`resource-jsx-\${branch}\`}
                type="radio"
                name="resource-jsx-branch"
                className="radio radio-sm radio-success"
                checked={currentBranch.get() === branch}
                onChange={() => {
                  currentBranch.set(branch)
                }}
              />
              <span className="font-medium">{branch}</span>
            </label>
          ))}
        </div>

        <p className="text-sm text-base-content/70">rust@{currentBranch.get()}</p>
        <p className="text-sm text-base-content/70">
          resource.loading = {String(resource.loading.get())}
        </p>

        {resource.loading.get() && (
          <div role="status" className="alert alert-info alert-soft">
            <span>Loading...</span>
          </div>
        )}

        {!resource.loading.get() && <ResourceContent resource={resource} />}
      </div>
    </div>
  )
}

export default ResourceJSXDemo
`,Demo:()=>{let{currentBranch:S}=b(`useSetup:0:0:dup1`,()=>h(()=>({currentBranch:b(`signal:1:1`,()=>y(E[0]))}))),C=b(`computed:1:2`,()=>u(()=>l(S,async e=>{let t=await fetch(`${T}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]})));return d(l=>{let u=r(`div`,l);_(u,`card bg-base-100 shadow`);let h=r(`div`,u);n(u,h),_(h,`card-body gap-4`);let y=r(`h2`,h);n(h,y),_(y,`text-2xl font-semibold`),n(y,e(`Fetching data with createResource in JSX`));let b=r(`p`,h);n(h,b),_(b,`text-sm text-base-content/70`),n(b,e(`这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。`));let w=r(`p`,h);n(h,w),_(w,`text-sm text-base-content/70`),n(w,e(`数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。`));let T=r(`div`,h);n(h,T),_(T,`flex flex-wrap gap-4`);let D=i(`rue:list:start`),O=i(`rue:list:end`);n(T,D),n(T,O);let k=new Map;a(()=>{k=x({items:E||[],getKey:(e,t)=>e,elements:k,parent:T,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(e,t,i,l,u)=>{g(d(()=>{let t=o(),i=r(`label`,t);n(t,i),a(()=>{s(i,`key`,String(e))}),a(()=>{s(i,`htmlFor`,String(`resource-jsx-${e}`))}),_(i,`inline-flex items-center gap-2`);let l=r(`input`,i);n(i,l),a(()=>{s(l,`id`,String(`resource-jsx-${e}`))}),s(l,`type`,`radio`),s(l,`name`,`resource-jsx-branch`),_(l,`radio radio-sm radio-success`),a(()=>{f(l,S.get()===e)}),m(l,`change`,()=>{S.set(e)});let u=r(`span`,i);n(i,u),_(u,`font-medium`);let d=c(u);return n(u,d),a(()=>{p(d,e)}),t}),t,i)}})});let j=r(`p`,h);n(h,j),_(j,`text-sm text-base-content/70`),n(j,e(`rust@`));let M=i(`rue:slot:anchor`);n(j,M),a(()=>{let e=S.get();t(()=>g(e,j,M))});let N=r(`p`,h);n(h,N),_(N,`text-sm text-base-content/70`),n(N,e(`resource.loading = `));let P=c(N);n(N,P),a(()=>{p(P,String(C.get().loading.get()))});let F=i(`rue:slot:anchor`);n(h,F),a(()=>{let i=C.get().loading.get()?d(()=>{let t=o(),i=r(`div`,t);n(t,i),s(i,`role`,`status`),_(i,`alert alert-info alert-soft`);let a=r(`span`,i);return n(i,a),n(a,e(`Loading...`)),t}):``;t(()=>g(i,h,F))}),n(h,e(` `));let I=i(`rue:slot:anchor`);return n(h,I),a(()=>{let e=C.get().loading.get()?``:d(()=>{let e=o(),r=i(`rue:component:anchor`);return n(e,r),a(()=>{let n=v(A,{resource:C.get()});t(()=>g(n,e,r))}),e});t(()=>g(e,h,I))}),u})},codeCardClassName:`h-[420px] md:h-[900px]`});export{j as default};