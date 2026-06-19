import{$ as e,$t as t,Gt as n,Ht as r,X as i,Xt as a,Z as o,ct as s,et as c,f as l,gt as u,l as d,lt as f,nt as p,o as m,rt as h,t as g,tt as _,ut as v,yt as y}from"./vapor-runtime-CKrmRMZX.js";import{a as b,n as x}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as S,i as C}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as w}from"./createHomeSplitExamplePage-Q644r2Bq.js";var T=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,E=[`main`,`beta`,`stable`],D=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},O=e=>e.replace(/T|Z/g,` `),k=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,A=r=>{let{error:i}=b(`useSetup:0:0`,()=>a(()=>({error:b(`computed:1:0`,()=>y(()=>r.resource.error.get()))})));if(i.get())return d(r=>{let a=_(`div`,r);s(a,`role`,`alert`),v(a,`alert alert-error alert-soft`);let c=_(`span`,a);o(a,c),o(c,p(`Error: `));let l=e(`rue:slot:anchor`);return o(c,l),t(()=>{let e=k(i.get());n(()=>m(e,c,l))}),a});let c=r.resource.data.get();return c?.length?C(`ul`,{className:`space-y-5`,children:c.map(e=>S(`li`,{className:`leading-7`,children:[C(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,className:`font-mono text-success hover:underline`,children:e.sha.slice(0,7)}),C(`span`,{children:` - `}),C(`span`,{className:`text-base-content`,children:D(e.commit.message)}),C(`br`,{}),C(`span`,{children:`by `}),C(`span`,{className:`font-semibold`,children:C(`a`,{href:e.author?.html_url||e.html_url,target:`_blank`,rel:`noreferrer`,className:`text-success hover:underline`,children:e.commit.author.name})}),C(`span`,{children:` at `}),C(`span`,{className:`font-semibold`,children:O(e.commit.author.date)})]},e.sha))}):C(`div`,{role:`status`,className:`alert alert-soft`,children:C(`span`,{children:`当前分支没有可显示的提交。`})})},j=w({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, type FC } from '@rue-js/rue'

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
`,Demo:()=>{let{currentBranch:S}=b(`useSetup:0:0:dup1`,()=>a(()=>({currentBranch:b(`signal:1:1`,()=>r(E[0]))}))),C=b(`computed:1:2`,()=>y(()=>l(S,async e=>{let t=await fetch(`${T}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]})));return d(r=>{let a=_(`div`,r);v(a,`card bg-base-100 shadow`);let l=_(`div`,a);o(a,l),v(l,`card-body gap-4`);let y=_(`h2`,l);o(l,y),v(y,`text-2xl font-semibold`),o(y,p(`Fetching data with createResource in JSX`));let b=_(`p`,l);o(l,b),v(b,`text-sm text-base-content/70`),o(b,p(`这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。`));let w=_(`p`,l);o(l,w),v(w,`text-sm text-base-content/70`),o(w,p(`数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。`));let T=_(`div`,l);o(l,T),v(T,`flex flex-wrap gap-4`);let D=e(`rue:list:start`),O=e(`rue:list:end`);o(T,D),o(T,O);let k=new Map;t(()=>{k=x({items:E||[],getKey:(e,t)=>e,elements:k,parent:T,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(e,n,r,a,l)=>{m(d(()=>{let n=c(),r=_(`label`,n);o(n,r),t(()=>{s(r,`key`,String(e))}),t(()=>{s(r,`htmlFor`,String(`resource-jsx-${e}`))}),v(r,`inline-flex items-center gap-2`);let a=_(`input`,r);o(r,a),t(()=>{s(a,`id`,String(`resource-jsx-${e}`))}),s(a,`type`,`radio`),s(a,`name`,`resource-jsx-branch`),v(a,`radio radio-sm radio-success`),t(()=>{f(a,S.get()===e)}),i(a,`change`,()=>{S.set(e)});let l=_(`span`,r);o(r,l),v(l,`font-medium`);let d=h(l);return o(l,d),t(()=>{u(d,e)}),n}),n,r)}})});let j=_(`p`,l);o(l,j),v(j,`text-sm text-base-content/70`),o(j,p(`rust@`));let M=e(`rue:slot:anchor`);o(j,M),t(()=>{let e=S.get();n(()=>m(e,j,M))});let N=_(`p`,l);o(l,N),v(N,`text-sm text-base-content/70`),o(N,p(`resource.loading = `));let P=h(N);o(N,P),t(()=>{u(P,String(C.get().loading.get()))});let F=e(`rue:slot:anchor`);o(l,F),t(()=>{let e=C.get().loading.get()?d(()=>{let e=c(),t=_(`div`,e);o(e,t),s(t,`role`,`status`),v(t,`alert alert-info alert-soft`);let n=_(`span`,t);return o(t,n),o(n,p(`Loading...`)),e}):``;n(()=>m(e,l,F))}),o(l,p(` `));let I=e(`rue:slot:anchor`);return o(l,I),t(()=>{let r=C.get().loading.get()?``:d(()=>{let r=c(),i=e(`rue:component:anchor`);return o(r,i),t(()=>{let e=g(A,{resource:C.get()});n(()=>m(e,r,i))}),r});n(()=>m(r,l,I))}),a})},codeCardClassName:`h-[420px] md:h-[900px]`});export{j as default};