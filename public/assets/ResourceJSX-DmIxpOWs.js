import{B as e,C as t,Cn as n,Dn as r,Et as i,H as a,Mt as o,On as s,S as c,V as l,W as u,Y as d,Yt as f,_n as p,bn as m,fn as h,gn as g,hn as _,ht as v,kn as y,nt as b,pn as x,q as S,wn as C,x as w,z as T}from"./rue-runtime-CwEGJ854.js";import{t as E}from"./createHomeSplitExamplePage-BwH-lO_t.js";var D=p(`<div role="alert" class="alert alert-error alert-soft"><span>Error: <!--rue:text-hole:0--></span></div>`),O=p(`<ul class="space-y-5"><!--rue:text-hole:0--></ul>`),k=p(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><h2 class="text-2xl font-semibold">Fetching data with createResource in JSX</h2><p class="text-sm text-base-content/70">这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。</p><p class="text-sm text-base-content/70">数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。</p><div class="flex flex-wrap gap-4"><!--rue:text-hole:0--></div><p class="text-sm text-base-content/70">rust@<!--rue:text-hole:1--></p><p class="text-sm text-base-content/70">resource.loading = <!--rue:text-hole:2--></p><!--rue:text-hole:3--><!--rue:text-hole:4--></div></div>`),A=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,j=[`main`,`beta`,`stable`],M=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},N=e=>e.replace(/T|Z/g,` `),P=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,F=n=>{let r=u(n.resource);return S(e(()=>{let e=r.get().error.get();if(e)return{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>v(t=>{let n=D().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=r.parentNode;return C(()=>{let t=P(e);y(()=>d(t,i,r))}),n})};let n=r.get().data.get();return{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>n?.length?i(Object.assign(e=>{let r=O().content.cloneNode(!0).firstChild,a=r.childNodes[0],o=a.parentNode,s=[];return C(()=>{s=t(o,a,s,n||[],(e,t)=>e.sha,(e,t)=>{let n=u(e),r=u(t);return c((e,t,r)=>w(e,r,()=>i(Object.assign(e=>{let t=_(`li`,e);t.className=`leading-7`;let r=_(`a`,t);h(t,r);let i;C(()=>{let e=n.get().html_url;Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`href`):r.setAttribute(`href`,String(e)))}),r.setAttribute(`target`,`_blank`),r.setAttribute(`rel`,`noreferrer`),r.className=`font-mono text-success hover:underline`;let a=x(`rue:compiled-slot`);h(r,a),C(()=>{let e=n.get().sha.slice(0,7);y(()=>d(e,r,a))});let o=_(`span`,t);h(t,o),h(o,g(`-`));let s=_(`span`,t);h(t,s),s.className=`text-base-content`;let c=x(`rue:compiled-slot`);h(s,c),C(()=>{let e=M(n.get().commit.message);y(()=>d(e,s,c))});let l=_(`br`,t);h(t,l);let u=_(`span`,t);h(t,u),h(u,g(`by`));let f=_(`span`,t);h(t,f),f.className=`font-semibold`;let p=_(`a`,f);h(f,p);let v;C(()=>{let e=n.get().author?.html_url||n.get().html_url;Object.is(v,e)||(v=e,e==null||e===!1?p.removeAttribute(`href`):p.setAttribute(`href`,String(e)))}),p.setAttribute(`target`,`_blank`),p.setAttribute(`rel`,`noreferrer`),p.className=`text-success hover:underline`;let b=g(``);h(p,b),m(b,()=>n.get().commit.author.name);let S=_(`span`,t);h(t,S),h(S,g(`at`));let w=_(`span`,t);h(t,w),w.className=`font-semibold`;let T=x(`rue:compiled-slot`);return h(w,T),C(()=>{let e=N(n.get().commit.author.date);y(()=>d(e,w,T))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})):i(Object.assign(e=>{let t=_(`div`,e);t.setAttribute(`role`,`status`),t.className=`alert alert-soft`;let n=_(`span`,t);return h(t,n),h(n,g(`当前分支没有可显示的提交。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),e=>T(()=>{r.set(e.resource)}),()=>n)},I=E({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, type FC } from '@rue-js/rue'

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
`,Demo:()=>{let e=s(j[0]),p=f(e,async e=>{let t=await fetch(`${A}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]});return o(()=>S(v(()=>{let o=b(),s=k().content.cloneNode(!0),f=s.firstChild,v=f.childNodes[0].childNodes[3].childNodes[0],x=v.parentNode,S=f.childNodes[0].childNodes[4].childNodes[1],T=S.parentNode,E=f.childNodes[0].childNodes[5].childNodes[1],D=E.parentNode,O=f.childNodes[0].childNodes[6],A=O.parentNode,M=f.childNodes[0].childNodes[7],N=M.parentNode;o.appendChild(s);let P=n(()=>e.get()),I=[];return C(()=>{I=t(x,v,I,j||[],(e,t)=>e,(t,n)=>{let a=u(t),o=u(n);return c((t,n,o)=>w(t,o,()=>i(Object.assign(t=>{let n=_(`label`,t),i;C(()=>{let e=`resource-jsx-${a.get()}`;Object.is(i,e)||(i=e,e==null||e===!1?n.removeAttribute(`htmlFor`):n.setAttribute(`htmlFor`,String(e)))}),n.className=`inline-flex items-center gap-2`;let o=_(`input`,n);h(n,o);let s;C(()=>{let e=`resource-jsx-${a.get()}`;Object.is(s,e)||(s=e,e==null||e===!1?o.removeAttribute(`id`):o.setAttribute(`id`,String(e)))}),o.setAttribute(`type`,`radio`),o.setAttribute(`name`,`resource-jsx-branch`),o.className=`radio radio-sm radio-success`;let c;C(()=>{let e=!!P(a.get());Object.is(c,e)||(c=e,o.checked=e)});let l=t=>{let n=()=>{e.set(a.get())};typeof n==`function`&&n(t)};o.addEventListener(`change`,l),r(()=>o.removeEventListener(`change`,l));let u=_(`span`,n);h(n,u),u.className=`font-medium`;let d=g(``);return h(u,d),m(d,()=>a.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,r)=>{t=e,n=r,a.set(e),o.set(r)})})}),C(()=>{let t=e.get();y(()=>d(t,T,S))}),C(()=>{let e=String(p.loading.get());y(()=>d(e,D,E))}),l(A,O,()=>{let e=p.loading.get();return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=_(`div`,e);t.setAttribute(`role`,`status`),t.className=`alert alert-info alert-soft`;let n=_(`span`,t);return h(t,n),h(n,g(`Loading...`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=b();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),l(N,M,()=>{let e=!p.loading.get();return e?{__rue_compiled_branch_key:!0,create:()=>a(F,()=>({resource:p}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=b();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),o},!0),e=>T(()=>{})))},codeCardClassName:`h-[420px] md:h-[900px]`});export{I as default};