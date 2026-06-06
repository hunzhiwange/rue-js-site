import{$ as e,J as t,Kt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,f as u,gt as d,l as f,mt as p,ot as m,s as h,st as g,t as _,tt as v,zt as y}from"./vapor-runtime-DHPuOjqh.js";import{a as b,n as x}from"./vapor-helpers-vapor-CJFAWine.js";import{a as S,i as C}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as w}from"./Suspense-C9hXiGR-.js";import{t as T}from"./createHomeSplitExamplePage-BB_cTfze.js";var E=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,D=[`main`,`beta`,`stable`],O=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},k=e=>e.replace(/T|Z/g,` `),A=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,j=e=>(e.resource.data.get(),null),M=t=>{let{error:r}=b(`useSetup:0:0`,()=>n(()=>({error:b(`computed:1:0`,()=>d(()=>t.resource.error.get()))})));if(r.get())return f(t=>{let n=e(`div`,t);m(n,`role`,`alert`),c(n,`alert alert-error alert-soft`);let u=e(`span`,n);a(n,u),a(u,l(`Error: `));let d=s(`rue:slot:anchor`);return a(u,d),o(()=>{let e=A(r.get());i(()=>h(e,u,d))}),n});let u=t.resource.data.get();return u?.length?C(`ul`,{className:`space-y-5`,children:u.map(e=>S(`li`,{className:`leading-7`,children:[C(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,className:`font-mono text-success hover:underline`,children:e.sha.slice(0,7)}),C(`span`,{children:` - `}),C(`span`,{className:`text-base-content`,children:O(e.commit.message)}),C(`br`,{}),C(`span`,{children:`by `}),C(`span`,{className:`font-semibold`,children:C(`a`,{href:e.author?.html_url||e.html_url,target:`_blank`,rel:`noreferrer`,className:`text-success hover:underline`,children:e.commit.author.name})}),C(`span`,{children:` at `}),C(`span`,{className:`font-semibold`,children:k(e.commit.author.date)})]},e.sha))}):C(`div`,{role:`status`,className:`alert alert-soft`,children:C(`span`,{children:`当前分支没有可显示的提交。`})})},N=T({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, Suspense, type FC } from '@rue-js/rue'

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

const ResourceSuspenseProbe: FC<{ resource: CommitResource }> = props => {
  props.resource.data.get()
  return null
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

        <Suspense
          fallback={
            <div role="status" className="alert alert-info alert-soft">
              <span>Loading...</span>
            </div>
          }
        >
          <ResourceSuspenseProbe resource={resource} />
        </Suspense>

        {!resource.loading.get() && <ResourceContent resource={resource} />}
      </div>
    </div>
  )
}

export default ResourceJSXDemo
`,Demo:()=>{let{currentBranch:d}=b(`useSetup:0:0:dup1`,()=>n(()=>({currentBranch:b(`signal:1:1`,()=>y(D[0]))}))),S=u(d,async e=>{let t=await fetch(`${E}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]});return f(n=>{let u=e(`div`,n);c(u,`card bg-base-100 shadow`);let y=e(`div`,u);a(u,y),c(y,`card-body gap-4`);let b=e(`h2`,y);a(y,b),c(b,`text-2xl font-semibold`),a(b,l(`Fetching data with createResource in JSX`));let T=e(`p`,y);a(y,T),c(T,`text-sm text-base-content/70`),a(T,l(`这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。`));let E=e(`p`,y);a(y,E),c(E,`text-sm text-base-content/70`),a(E,l(`数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。`));let O=e(`div`,y);a(y,O),c(O,`flex flex-wrap gap-4`);let k=s(`rue:list:start`),A=s(`rue:list:end`);a(O,k),a(O,A);let N=new Map;o(()=>{N=x({items:D||[],getKey:(e,t)=>e,elements:N,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(n,i,s,l,u)=>{h(f(()=>{let i=r(),s=e(`label`,i);a(i,s),o(()=>{m(s,`key`,String(n))}),o(()=>{m(s,`htmlFor`,String(`resource-jsx-${n}`))}),c(s,`inline-flex items-center gap-2`);let l=e(`input`,s);a(s,l),o(()=>{m(l,`id`,String(`resource-jsx-${n}`))}),m(l,`type`,`radio`),m(l,`name`,`resource-jsx-branch`),c(l,`radio radio-sm radio-success`),o(()=>{g(l,d.get()===n)}),t(l,`change`,()=>{d.set(n)});let u=e(`span`,s);a(s,u),c(u,`font-medium`);let f=v(u);return a(u,f),o(()=>{p(f,n)}),i}),i,s)}})});let P=e(`p`,y);a(y,P),c(P,`text-sm text-base-content/70`),a(P,l(`rust@`));let F=v(P);a(P,F),o(()=>{p(F,d.get())});let I=e(`p`,y);a(y,I),c(I,`text-sm text-base-content/70`),a(I,l(`resource.loading = `));let L=v(I);a(I,L),o(()=>{p(L,String(S.loading.get()))});let R=s(`rue:component:anchor`);a(y,R);let z=_(j,{resource:S});o(()=>{let e=_(w,{fallback:C(`div`,{role:`status`,className:`alert alert-info alert-soft`,children:C(`span`,{children:`Loading...`})}),children:z});i(()=>h(e,y,R))});let B=s(`rue:slot:anchor`);return a(y,B),o(()=>{let e=S.loading.get()?``:f(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=_(M,{resource:S});i(()=>h(n,e,t))}),e});i(()=>h(e,y,B))}),u})},codeCardClassName:`h-[420px] md:h-[900px]`});export{N as default};