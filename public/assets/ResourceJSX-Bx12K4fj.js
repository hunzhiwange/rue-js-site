import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Q as o,U as s,W as c,Z as l,_t as u,at as d,f,l as p,lt as m,s as h,t as g,wt as _,yt as v,z as y}from"./vapor-runtime-C1rlwc61.js";import{a as b,n as x}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as S}from"./Suspense-BszUSQSZ.js";import{n as C,t as w}from"./src-BLzF0BqW.js";import{t as T}from"./createHomeSplitExamplePage-BftZ6-s2.js";var E=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,D=[`main`,`beta`,`stable`],O=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},k=e=>e.replace(/T|Z/g,` `),A=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,j=e=>(e.resource.data.get(),null),M=a=>{let{error:o}=b(`useSetup:0:0`,()=>_(()=>({error:b(`computed:1:0`,()=>m(()=>a.resource.error.get()))})));if(o.get())return p(a=>{let s=c(`div`,a);l(s,`role`,`alert`),e(s,`alert alert-error alert-soft`);let u=c(`span`,s);t(s,u),t(u,r(`Error: `));let d=i(`rue:slot:anchor`);return t(u,d),n(()=>{let e=A(o.get());v(()=>h(e,u,d))}),s});let s=a.resource.data.get();return s?.length?w(`ul`,{className:`space-y-5`,children:s.map(e=>C(`li`,{className:`leading-7`,children:[w(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,className:`font-mono text-success hover:underline`,children:e.sha.slice(0,7)}),w(`span`,{children:` - `}),w(`span`,{className:`text-base-content`,children:O(e.commit.message)}),w(`br`,{}),w(`span`,{children:`by `}),w(`span`,{className:`font-semibold`,children:w(`a`,{href:e.author?.html_url||e.html_url,target:`_blank`,rel:`noreferrer`,className:`text-success hover:underline`,children:e.commit.author.name})}),w(`span`,{children:` at `}),w(`span`,{className:`font-semibold`,children:k(e.commit.author.date)})]},e.sha))}):w(`div`,{role:`status`,className:`alert alert-soft`,children:w(`span`,{children:`当前分支没有可显示的提交。`})})},N=T({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, Suspense, type FC } from '@rue-js/rue'

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
`,Demo:()=>{let{currentBranch:m,resource:C}=b(`useSetup:0:0:dup1`,()=>_(()=>{let e=b(`signal:1:1`,()=>u(D[0]));return{currentBranch:e,resource:f(e,async e=>{let t=await fetch(`${E}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]})}}));return p(u=>{let f=c(`div`,u);e(f,`card bg-base-100 shadow`);let _=c(`div`,f);t(f,_),e(_,`card-body gap-4`);let b=c(`h2`,_);t(_,b),e(b,`text-2xl font-semibold`),t(b,r(`Fetching data with createResource in JSX`));let T=c(`p`,_);t(_,T),e(T,`text-sm text-base-content/70`),t(T,r(`这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。`));let E=c(`p`,_);t(_,E),e(E,`text-sm text-base-content/70`),t(E,r(`数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。`));let O=c(`div`,_);t(_,O),e(O,`flex flex-wrap gap-4`);let k=i(`rue:list:start`),A=i(`rue:list:end`);t(O,k),t(O,A);let N=new Map;n(()=>{N=x({items:D||[],getKey:(e,t)=>e,elements:N,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(r,i,u,f,g)=>{h(p(()=>{let i=s(),u=c(`label`,i);t(i,u),n(()=>{l(u,`key`,String(r))}),n(()=>{l(u,`htmlFor`,String(`resource-jsx-${r}`))}),e(u,`inline-flex items-center gap-2`);let f=c(`input`,u);t(u,f),n(()=>{l(f,`id`,String(`resource-jsx-${r}`))}),l(f,`type`,`radio`),l(f,`name`,`resource-jsx-branch`),e(f,`radio radio-sm radio-success`),n(()=>{o(f,m.get()===r)}),y(f,`change`,()=>{m.set(r)});let p=c(`span`,u);t(u,p),e(p,`font-medium`);let h=a(p);return t(p,h),n(()=>{d(h,r)}),i}),i,u)}})});let P=c(`p`,_);t(_,P),e(P,`text-sm text-base-content/70`),t(P,r(`rust@`));let F=a(P);t(P,F),n(()=>{d(F,m.get())});let I=c(`p`,_);t(_,I),e(I,`text-sm text-base-content/70`),t(I,r(`resource.loading = `));let L=a(I);t(I,L),n(()=>{d(L,String(C.loading.get()))});let R=i(`rue:component:anchor`);t(_,R);let z=g(j,{resource:C});n(()=>{let e=g(S,{fallback:w(`div`,{role:`status`,className:`alert alert-info alert-soft`,children:w(`span`,{children:`Loading...`})}),children:z});v(()=>h(e,_,R))});let B=i(`rue:slot:anchor`);return t(_,B),n(()=>{let e=C.loading.get()?``:p(()=>{let e=s(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=g(M,{resource:C});v(()=>h(t,e,r))}),e});v(()=>h(e,_,B))}),f})},codeCardClassName:`h-[420px] md:h-[900px]`});export{N as default};