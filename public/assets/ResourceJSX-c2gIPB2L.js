import{Cn as e,Ct as t,Lt as n,Mt as r,Tt as i,dt as a,ft as o,hn as s,ht as c,mt as l,ot as u,pt as d,st as f,tn as p,vn as m,wt as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{t as y}from"./reactivity-CSawtrCc.js";import{a as b,n as x}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as S,t as C}from"./src-CCTNpCXV.js";import{t as w}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var T=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,E=[`main`,`beta`,`stable`],D=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},O=e=>e.replace(/T|Z/g,` `),k=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,A=r=>{let{error:o}=b(`useSetup:0:0`,()=>e(()=>({error:b(`computed:1:0`,()=>n(()=>r.resource.error.get()))})));if(o.get())return g(e=>{let n=d(`div`,e);t(n,`role`,`alert`),i(n,`alert alert-error alert-soft`);let r=d(`span`,n);f(n,r),f(r,l(`Error: `));let s=a(`rue:slot:anchor`);return f(r,s),p(()=>{let e=k(o.get());m(()=>_(e,r,s))}),n});let s=r.resource.data.get();return s?.length?C(`ul`,{className:`space-y-5`,children:s.map(e=>S(`li`,{className:`leading-7`,children:[C(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,className:`font-mono text-success hover:underline`,children:e.sha.slice(0,7)}),C(`span`,{children:` - `}),C(`span`,{className:`text-base-content`,children:D(e.commit.message)}),C(`br`,{}),C(`span`,{children:`by `}),C(`span`,{className:`font-semibold`,children:C(`a`,{href:e.author?.html_url||e.html_url,target:`_blank`,rel:`noreferrer`,className:`text-success hover:underline`,children:e.commit.author.name})}),C(`span`,{children:` at `}),C(`span`,{className:`font-semibold`,children:O(e.commit.author.date)})]},e.sha))}):C(`div`,{role:`status`,className:`alert alert-soft`,children:C(`span`,{children:`当前分支没有可显示的提交。`})})},j=w({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, type FC } from '@rue-js/rue'

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
`,Demo:()=>{let{currentBranch:S}=b(`useSetup:0:0:dup1`,()=>e(()=>({currentBranch:b(`signal:1:1`,()=>s(E[0]))}))),C=b(`computed:1:2`,()=>n(()=>y(S,async e=>{let t=await fetch(`${T}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]})));return g(e=>{let n=d(`div`,e);i(n,`card bg-base-100 shadow`);let s=d(`div`,n);f(n,s),i(s,`card-body gap-4`);let y=d(`h2`,s);f(s,y),i(y,`text-2xl font-semibold`),f(y,l(`Fetching data with createResource in JSX`));let b=d(`p`,s);f(s,b),i(b,`text-sm text-base-content/70`),f(b,l(`这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。`));let w=d(`p`,s);f(s,w),i(w,`text-sm text-base-content/70`),f(w,l(`数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。`));let T=d(`div`,s);f(s,T),i(T,`flex flex-wrap gap-4`);let D=a(`rue:list:start`),O=a(`rue:list:end`);f(T,D),f(T,O);let k=new Map;p(()=>{k=x({items:E||[],getKey:(e,t)=>e,elements:k,parent:T,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(e,n,a,s,l)=>{_(g(()=>{let n=o(),a=d(`label`,n);f(n,a),p(()=>{t(a,`key`,String(e))}),p(()=>{t(a,`htmlFor`,String(`resource-jsx-${e}`))}),i(a,`inline-flex items-center gap-2`);let s=d(`input`,a);f(a,s),p(()=>{t(s,`id`,String(`resource-jsx-${e}`))}),t(s,`type`,`radio`),t(s,`name`,`resource-jsx-branch`),i(s,`radio radio-sm radio-success`),p(()=>{h(s,S.get()===e)}),u(s,`change`,()=>{S.set(e)});let l=d(`span`,a);f(a,l),i(l,`font-medium`);let m=c(l);return f(l,m),p(()=>{r(m,e)}),n}),n,a)}})});let j=d(`p`,s);f(s,j),i(j,`text-sm text-base-content/70`),f(j,l(`rust@`));let M=a(`rue:slot:anchor`);f(j,M),p(()=>{let e=S.get();m(()=>_(e,j,M))});let N=d(`p`,s);f(s,N),i(N,`text-sm text-base-content/70`),f(N,l(`resource.loading = `));let P=c(N);f(N,P),p(()=>{r(P,String(C.get().loading.get()))});let F=a(`rue:slot:anchor`);f(s,F),p(()=>{let e=C.get().loading.get()?g(()=>{let e=o(),n=d(`div`,e);f(e,n),t(n,`role`,`status`),i(n,`alert alert-info alert-soft`);let r=d(`span`,n);return f(n,r),f(r,l(`Loading...`)),e}):``;m(()=>_(e,s,F))}),f(s,l(` `));let I=a(`rue:slot:anchor`);return f(s,I),p(()=>{let e=C.get().loading.get()?``:g(()=>{let e=o(),t=a(`rue:component:anchor`);return f(e,t),p(()=>{let n=v(A,{resource:C.get()});m(()=>_(n,e,t))}),e});m(()=>_(e,s,I))}),n})},codeCardClassName:`h-[420px] md:h-[900px]`});export{j as default};