import{$t as e,Q as t,St as n,Xt as r,Z as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,p,rt as m,t as h,tt as g,ut as _,vt as v,zt as y}from"./vapor-runtime-DsQWl-IB.js";import{a as b,n as x}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as S,i as C}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as w}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var T=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,E=[`main`,`beta`,`stable`],D=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},O=e=>e.replace(/T|Z/g,` `),k=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,A=r=>{let{error:i}=b(`useSetup:0:0`,()=>s(()=>({error:b(`computed:1:0`,()=>n(()=>r.resource.error.get()))})));if(i.get())return l(n=>{let r=d(`div`,n);u(r,`role`,`alert`),a(r,`alert alert-error alert-soft`);let s=d(`span`,r);t(r,s),t(s,m(`Error: `));let c=o(`rue:slot:anchor`);return t(s,c),y(()=>{let t=k(i.get());e(()=>f(t,s,c))}),r});let c=r.resource.data.get();return c?.length?C(`ul`,{className:`space-y-5`,children:c.map(e=>S(`li`,{className:`leading-7`,children:[C(`a`,{href:e.html_url,target:`_blank`,rel:`noreferrer`,className:`font-mono text-success hover:underline`,children:e.sha.slice(0,7)}),C(`span`,{children:` - `}),C(`span`,{className:`text-base-content`,children:D(e.commit.message)}),C(`br`,{}),C(`span`,{children:`by `}),C(`span`,{className:`font-semibold`,children:C(`a`,{href:e.author?.html_url||e.html_url,target:`_blank`,rel:`noreferrer`,className:`text-success hover:underline`,children:e.commit.author.name})}),C(`span`,{children:` at `}),C(`span`,{className:`font-semibold`,children:O(e.commit.author.date)})]},e.sha))}):C(`div`,{role:`status`,className:`alert alert-soft`,children:C(`span`,{children:`当前分支没有可显示的提交。`})})},j=w({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, type FC } from '@rue-js/rue'

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
`,Demo:()=>{let{currentBranch:S}=b(`useSetup:0:0:dup1`,()=>s(()=>({currentBranch:b(`signal:1:1`,()=>r(E[0]))}))),C=b(`computed:1:2`,()=>n(()=>p(S,async e=>{let t=await fetch(`${T}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]})));return l(n=>{let r=d(`div`,n);a(r,`card bg-base-100 shadow`);let s=d(`div`,r);t(r,s),a(s,`card-body gap-4`);let p=d(`h2`,s);t(s,p),a(p,`text-2xl font-semibold`),t(p,m(`Fetching data with createResource in JSX`));let b=d(`p`,s);t(s,b),a(b,`text-sm text-base-content/70`),t(b,m(`这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。`));let w=d(`p`,s);t(s,w),a(w,`text-sm text-base-content/70`),t(w,m(`数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。`));let T=d(`div`,s);t(s,T),a(T,`flex flex-wrap gap-4`);let D=o(`rue:list:start`),O=o(`rue:list:end`);t(T,D),t(T,O);let k=new Map;y(()=>{k=x({items:E||[],getKey:(e,t)=>e,elements:k,parent:T,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(e,n,r,o,s)=>{f(l(()=>{let n=g(),r=d(`label`,n);t(n,r),y(()=>{u(r,`key`,String(e))}),y(()=>{u(r,`htmlFor`,String(`resource-jsx-${e}`))}),a(r,`inline-flex items-center gap-2`);let o=d(`input`,r);t(r,o),y(()=>{u(o,`id`,String(`resource-jsx-${e}`))}),u(o,`type`,`radio`),u(o,`name`,`resource-jsx-branch`),a(o,`radio radio-sm radio-success`),y(()=>{_(o,S.get()===e)}),i(o,`change`,()=>{S.set(e)});let s=d(`span`,r);t(r,s),a(s,`font-medium`);let l=c(s);return t(s,l),y(()=>{v(l,e)}),n}),n,r)}})});let j=d(`p`,s);t(s,j),a(j,`text-sm text-base-content/70`),t(j,m(`rust@`));let M=o(`rue:slot:anchor`);t(j,M),y(()=>{let t=S.get();e(()=>f(t,j,M))});let N=d(`p`,s);t(s,N),a(N,`text-sm text-base-content/70`),t(N,m(`resource.loading = `));let P=c(N);t(N,P),y(()=>{v(P,String(C.get().loading.get()))});let F=o(`rue:slot:anchor`);t(s,F),y(()=>{let n=C.get().loading.get()?l(()=>{let e=g(),n=d(`div`,e);t(e,n),u(n,`role`,`status`),a(n,`alert alert-info alert-soft`);let r=d(`span`,n);return t(n,r),t(r,m(`Loading...`)),e}):``;e(()=>f(n,s,F))}),t(s,m(` `));let I=o(`rue:slot:anchor`);return t(s,I),y(()=>{let n=C.get().loading.get()?``:l(()=>{let n=g(),r=o(`rue:component:anchor`);return t(n,r),y(()=>{let t=h(A,{resource:C.get()});e(()=>f(t,n,r))}),n});e(()=>f(n,s,I))}),r})},codeCardClassName:`h-[420px] md:h-[900px]`});export{j as default};