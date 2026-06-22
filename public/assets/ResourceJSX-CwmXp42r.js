import{Q as e,Qt as t,Vt as n,Z as r,at as i,bt as a,dt as o,ft as s,it as c,l,nt as u,o as d,on as f,p,pt as m,rt as h,t as g,tn as _,tt as v,wt as y}from"./vapor-runtime-x7F5M-49.js";import{a as b,n as x}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as S,o as C}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as w}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var T=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,E=[`main`,`beta`,`stable`],D=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},O=e=>e.replace(/T|Z/g,` `),k=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,A=t=>{let{error:r}=b(`useSetup:0:0`,()=>f(()=>({error:b(`computed:1:0`,()=>y(()=>t.resource.error.get()))})));if(r.get())return l(t=>{let i=h(`div`,t);o(i,`role`,`alert`),m(i,`alert alert-error alert-soft`);let a=h(`span`,i);e(i,a),e(a,c(`Error: `));let s=v(`rue:slot:anchor`);return e(a,s),n(()=>{let e=k(r.get());_(()=>d(e,a,s))}),i});let i=t.resource.data.get();return i?.length?S(`ul`,{className:`space-y-5`,children:i.map(e=>C(`li`,{className:`leading-7`,children:[S(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,className:`font-mono text-success hover:underline`,children:e.sha.slice(0,7)}),S(`span`,{children:` - `}),S(`span`,{className:`text-base-content`,children:D(e.commit.message)}),S(`br`,{}),S(`span`,{children:`by `}),S(`span`,{className:`font-semibold`,children:S(`a`,{href:e.author?.html_url||e.html_url,target:`_blank`,rel:`noreferrer`,className:`text-success hover:underline`,children:e.commit.author.name})}),S(`span`,{children:` at `}),S(`span`,{className:`font-semibold`,children:O(e.commit.author.date)})]},e.sha))}):S(`div`,{role:`status`,className:`alert alert-soft`,children:S(`span`,{children:`当前分支没有可显示的提交。`})})},j=w({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, type FC } from '@rue-js/rue'

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
`,Demo:()=>{let{currentBranch:S}=b(`useSetup:0:0:dup1`,()=>f(()=>({currentBranch:b(`signal:1:1`,()=>t(E[0]))}))),C=b(`computed:1:2`,()=>y(()=>p(S,async e=>{let t=await fetch(`${T}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]})));return l(t=>{let f=h(`div`,t);m(f,`card bg-base-100 shadow`);let p=h(`div`,f);e(f,p),m(p,`card-body gap-4`);let y=h(`h2`,p);e(p,y),m(y,`text-2xl font-semibold`),e(y,c(`Fetching data with createResource in JSX`));let b=h(`p`,p);e(p,b),m(b,`text-sm text-base-content/70`),e(b,c(`这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。`));let w=h(`p`,p);e(p,w),m(w,`text-sm text-base-content/70`),e(w,c(`数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。`));let T=h(`div`,p);e(p,T),m(T,`flex flex-wrap gap-4`);let D=v(`rue:list:start`),O=v(`rue:list:end`);e(T,D),e(T,O);let k=new Map;n(()=>{k=x({items:E||[],getKey:(e,t)=>e,elements:k,parent:T,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(t,c,f,p,g)=>{d(l(()=>{let c=u(),l=h(`label`,c);e(c,l),n(()=>{o(l,`key`,String(t))}),n(()=>{o(l,`htmlFor`,String(`resource-jsx-${t}`))}),m(l,`inline-flex items-center gap-2`);let d=h(`input`,l);e(l,d),n(()=>{o(d,`id`,String(`resource-jsx-${t}`))}),o(d,`type`,`radio`),o(d,`name`,`resource-jsx-branch`),m(d,`radio radio-sm radio-success`),n(()=>{s(d,S.get()===t)}),r(d,`change`,()=>{S.set(t)});let f=h(`span`,l);e(l,f),m(f,`font-medium`);let p=i(f);return e(f,p),n(()=>{a(p,t)}),c}),c,f)}})});let j=h(`p`,p);e(p,j),m(j,`text-sm text-base-content/70`),e(j,c(`rust@`));let M=v(`rue:slot:anchor`);e(j,M),n(()=>{let e=S.get();_(()=>d(e,j,M))});let N=h(`p`,p);e(p,N),m(N,`text-sm text-base-content/70`),e(N,c(`resource.loading = `));let P=i(N);e(N,P),n(()=>{a(P,String(C.get().loading.get()))});let F=v(`rue:slot:anchor`);e(p,F),n(()=>{let t=C.get().loading.get()?l(()=>{let t=u(),n=h(`div`,t);e(t,n),o(n,`role`,`status`),m(n,`alert alert-info alert-soft`);let r=h(`span`,n);return e(n,r),e(r,c(`Loading...`)),t}):``;_(()=>d(t,p,F))}),e(p,c(` `));let I=v(`rue:slot:anchor`);return e(p,I),n(()=>{let t=C.get().loading.get()?``:l(()=>{let t=u(),r=v(`rue:component:anchor`);return e(t,r),n(()=>{let e=g(A,{resource:C.get()});_(()=>d(e,t,r))}),t});_(()=>d(t,p,I))}),f})},codeCardClassName:`h-[420px] md:h-[900px]`});export{j as default};