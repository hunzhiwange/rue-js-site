import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,d as c,dt as l,et as u,kt as d,l as f,m as p,q as m,st as h,t as g,tt as _,xt as v,yt as y}from"./vapor-runtime-ACs_OvwU.js";import{a as b,n as x}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as S}from"./Suspense-ClgoXqHD.js";import{n as C,t as w}from"./src-B0RvnZVV.js";import{t as T}from"./createHomeSplitExamplePage-DOBN78Vl.js";var E=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,D=[`main`,`beta`,`stable`],O=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},k=e=>e.replace(/T|Z/g,` `),A=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,j=e=>(e.resource.data.get(),null),M=n=>{let{error:i}=b(`useSetup:0:0`,()=>t(()=>({error:b(`computed:1:0`,()=>l(()=>n.resource.error.get()))})));if(i.get())return c(t=>{let n=a(`div`,t);e(n,`role`,`alert`),_(n,`alert alert-error alert-soft`);let o=a(`span`,n);r(n,o),r(o,m(`Error: `));let c=s(`rue:slot:anchor`);return r(o,c),d(()=>{let e=A(i.get());v(()=>f(e,o,c))}),n});let o=n.resource.data.get();return o?.length?w(`ul`,{className:`space-y-5`,children:o.map(e=>C(`li`,{className:`leading-7`,children:[w(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,className:`font-mono text-success hover:underline`,children:e.sha.slice(0,7)}),w(`span`,{children:` - `}),w(`span`,{className:`text-base-content`,children:O(e.commit.message)}),w(`br`,{}),w(`span`,{children:`by `}),w(`span`,{className:`font-semibold`,children:w(`a`,{href:e.author?.html_url||e.html_url,target:`_blank`,rel:`noreferrer`,className:`text-success hover:underline`,children:e.commit.author.name})}),w(`span`,{children:` at `}),w(`span`,{className:`font-semibold`,children:k(e.commit.author.date)})]},e.sha))}):w(`div`,{role:`status`,className:`alert alert-soft`,children:w(`span`,{children:`当前分支没有可显示的提交。`})})},N=T({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, Suspense, type FC } from '@rue-js/rue'

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
`,Demo:()=>{let{currentBranch:l,resource:C}=b(`useSetup:0:0:dup1`,()=>t(()=>{let e=b(`signal:1:1`,()=>y(D[0]));return{currentBranch:e,resource:p(e,async e=>{let t=await fetch(`${E}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]})}}));return c(t=>{let p=a(`div`,t);_(p,`card bg-base-100 shadow`);let y=a(`div`,p);r(p,y),_(y,`card-body gap-4`);let b=a(`h2`,y);r(y,b),_(b,`text-2xl font-semibold`),r(b,m(`Fetching data with createResource in JSX`));let T=a(`p`,y);r(y,T),_(T,`text-sm text-base-content/70`),r(T,m(`这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。`));let E=a(`p`,y);r(y,E),_(E,`text-sm text-base-content/70`),r(E,m(`数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。`));let O=a(`div`,y);r(y,O),_(O,`flex flex-wrap gap-4`);let k=s(`rue:list:start`),A=s(`rue:list:end`);r(O,k),r(O,A);let N=new Map;d(()=>{N=x({items:D||[],getKey:(e,t)=>e,elements:N,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(t,s,p,m,g)=>{f(c(()=>{let s=n(),c=a(`label`,s);r(s,c),d(()=>{e(c,`key`,String(t))}),d(()=>{e(c,`htmlFor`,String(`resource-jsx-${t}`))}),_(c,`inline-flex items-center gap-2`);let f=a(`input`,c);r(c,f),d(()=>{e(f,`id`,String(`resource-jsx-${t}`))}),e(f,`type`,`radio`),e(f,`name`,`resource-jsx-branch`),_(f,`radio radio-sm radio-success`),d(()=>{u(f,l.get()===t)}),o(f,`change`,()=>{l.set(t)});let p=a(`span`,c);r(c,p),_(p,`font-medium`);let m=i(p);return r(p,m),d(()=>{h(m,t)}),s}),s,p)}})});let P=a(`p`,y);r(y,P),_(P,`text-sm text-base-content/70`),r(P,m(`rust@`));let F=i(P);r(P,F),d(()=>{h(F,l.get())});let I=a(`p`,y);r(y,I),_(I,`text-sm text-base-content/70`),r(I,m(`resource.loading = `));let L=i(I);r(I,L),d(()=>{h(L,String(C.loading.get()))});let R=s(`rue:component:anchor`);r(y,R);let z=g(j,{resource:C});d(()=>{let e=g(S,{fallback:w(`div`,{role:`status`,className:`alert alert-info alert-soft`,children:w(`span`,{children:`Loading...`})}),children:z});v(()=>f(e,y,R))});let B=s(`rue:slot:anchor`);return r(y,B),d(()=>{let e=C.loading.get()?``:c(()=>{let e=n(),t=s(`rue:component:anchor`);return r(e,t),d(()=>{let n=g(M,{resource:C});v(()=>f(n,e,t))}),e});v(()=>f(e,y,B))}),p})},codeCardClassName:`h-[420px] md:h-[900px]`});export{N as default};