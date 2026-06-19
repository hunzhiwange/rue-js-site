import{$ as e,Q as t,Qt as n,Vt as r,Wt as i,X as a,Y as o,Yt as s,ct as c,et as l,f as u,ht as d,l as f,lt as p,nt as m,o as h,st as g,t as _,tt as v,vt as y}from"./vapor-runtime-CXIalONM.js";import{a as b,n as x}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as S,i as C}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as w}from"./createHomeSplitExamplePage-Br1mQ323.js";var T=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,E=[`main`,`beta`,`stable`],D=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},O=e=>e.replace(/T|Z/g,` `),k=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,A=e=>{let{error:r}=b(`useSetup:0:0`,()=>s(()=>({error:b(`computed:1:0`,()=>y(()=>e.resource.error.get()))})));if(r.get())return f(e=>{let o=l(`div`,e);g(o,`role`,`alert`),p(o,`alert alert-error alert-soft`);let s=l(`span`,o);a(o,s),a(s,v(`Error: `));let c=t(`rue:slot:anchor`);return a(s,c),n(()=>{let e=k(r.get());i(()=>h(e,s,c))}),o});let o=e.resource.data.get();return o?.length?C(`ul`,{className:`space-y-5`,children:o.map(e=>S(`li`,{className:`leading-7`,children:[C(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,className:`font-mono text-success hover:underline`,children:e.sha.slice(0,7)}),C(`span`,{children:` - `}),C(`span`,{className:`text-base-content`,children:D(e.commit.message)}),C(`br`,{}),C(`span`,{children:`by `}),C(`span`,{className:`font-semibold`,children:C(`a`,{href:e.author?.html_url||e.html_url,target:`_blank`,rel:`noreferrer`,className:`text-success hover:underline`,children:e.commit.author.name})}),C(`span`,{children:` at `}),C(`span`,{className:`font-semibold`,children:O(e.commit.author.date)})]},e.sha))}):C(`div`,{role:`status`,className:`alert alert-soft`,children:C(`span`,{children:`当前分支没有可显示的提交。`})})},j=w({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, type FC } from '@rue-js/rue'

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
`,Demo:()=>{let{currentBranch:S}=b(`useSetup:0:0:dup1`,()=>s(()=>({currentBranch:b(`signal:1:1`,()=>r(E[0]))}))),C=b(`computed:1:2`,()=>y(()=>u(S,async e=>{let t=await fetch(`${T}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]})));return f(r=>{let s=l(`div`,r);p(s,`card bg-base-100 shadow`);let u=l(`div`,s);a(s,u),p(u,`card-body gap-4`);let y=l(`h2`,u);a(u,y),p(y,`text-2xl font-semibold`),a(y,v(`Fetching data with createResource in JSX`));let b=l(`p`,u);a(u,b),p(b,`text-sm text-base-content/70`),a(b,v(`这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。`));let w=l(`p`,u);a(u,w),p(w,`text-sm text-base-content/70`),a(w,v(`数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。`));let T=l(`div`,u);a(u,T),p(T,`flex flex-wrap gap-4`);let D=t(`rue:list:start`),O=t(`rue:list:end`);a(T,D),a(T,O);let k=new Map;n(()=>{k=x({items:E||[],getKey:(e,t)=>e,elements:k,parent:T,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(t,r,i,s,u)=>{h(f(()=>{let r=e(),i=l(`label`,r);a(r,i),n(()=>{g(i,`key`,String(t))}),n(()=>{g(i,`htmlFor`,String(`resource-jsx-${t}`))}),p(i,`inline-flex items-center gap-2`);let s=l(`input`,i);a(i,s),n(()=>{g(s,`id`,String(`resource-jsx-${t}`))}),g(s,`type`,`radio`),g(s,`name`,`resource-jsx-branch`),p(s,`radio radio-sm radio-success`),n(()=>{c(s,S.get()===t)}),o(s,`change`,()=>{S.set(t)});let u=l(`span`,i);a(i,u),p(u,`font-medium`);let f=m(u);return a(u,f),n(()=>{d(f,t)}),r}),r,i)}})});let j=l(`p`,u);a(u,j),p(j,`text-sm text-base-content/70`),a(j,v(`rust@`));let M=t(`rue:slot:anchor`);a(j,M),n(()=>{let e=S.get();i(()=>h(e,j,M))});let N=l(`p`,u);a(u,N),p(N,`text-sm text-base-content/70`),a(N,v(`resource.loading = `));let P=m(N);a(N,P),n(()=>{d(P,String(C.get().loading.get()))});let F=t(`rue:slot:anchor`);a(u,F),n(()=>{let t=C.get().loading.get()?f(()=>{let t=e(),n=l(`div`,t);a(t,n),g(n,`role`,`status`),p(n,`alert alert-info alert-soft`);let r=l(`span`,n);return a(n,r),a(r,v(`Loading...`)),t}):``;i(()=>h(t,u,F))}),a(u,v(` `));let I=t(`rue:slot:anchor`);return a(u,I),n(()=>{let r=C.get().loading.get()?``:f(()=>{let r=e(),o=t(`rue:component:anchor`);return a(r,o),n(()=>{let e=_(A,{resource:C.get()});i(()=>h(e,r,o))}),r});i(()=>h(r,u,I))}),s})},codeCardClassName:`h-[420px] md:h-[900px]`});export{j as default};