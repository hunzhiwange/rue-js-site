import{At as e,C as t,Cn as n,Dn as r,E as i,On as a,Vt as o,_n as s,_t as c,at as l,b as u,ct as d,et as f,gn as p,kn as m,ln as h,mn as g,nt as _,pn as v,qt as y,rt as b,tt as x,ut as S,vn as C,w,wn as T,xn as E}from"./rue-runtime-HIMg8Lz8.js";import{t as D}from"./createHomeSplitExamplePage-DNdswIPW.js";var O=C(`<div role="alert" class="alert alert-error alert-soft"><span>Error: <!--rue:text-hole:0--></span></div>`),k=C(`<ul class="space-y-5"><!--rue:text-hole:0--></ul>`),A=C(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><h2 class="text-2xl font-semibold">Fetching data with createResource in JSX</h2><p class="text-sm text-base-content/70">这个版本故意不使用 vapor 或 renderAnchor，直接在 JSX 组件树里消费 createResource。</p><p class="text-sm text-base-content/70">数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。</p><div class="flex flex-wrap gap-4"><!--rue:text-hole:0--></div><p class="text-sm text-base-content/70">rust@<!--rue:text-hole:1--></p><p class="text-sm text-base-content/70">resource.loading = <!--rue:text-hole:2--></p><!--rue:text-hole:3--><!--rue:text-hole:4--></div></div>`),j=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,M=[`main`,`beta`,`stable`],N=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},P=e=>e.replace(/T|Z/g,` `),F=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,I=n=>{let a=l(n.resource);return d(x(()=>{let n=a.get().error.get();if(n)return{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>e(e=>{let t=O().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1],i=r.parentNode;return T(()=>{let e=F(n);m(()=>S(e,i,r))}),t})};let c=a.get().data.get();return{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>c?.length?o(Object.assign(e=>{let n=k().content.cloneNode(!0).firstChild,a=n.childNodes[0],d=a.parentNode,f=[];return T(()=>{f=w(d,a,f,c||[],(e,t)=>e.sha,(e,n)=>{let r=l(e);return t((e,t,n)=>i(e,n,()=>o(Object.assign(e=>{let t=p(`li`,e);t.className=`leading-7`;let n=p(`a`,t);v(t,n);let i;T(()=>{let e=r.get().html_url;Object.is(i,e)||(i=e,e==null||e===!1?n.removeAttribute(`href`):n.setAttribute(`href`,String(e)))}),n.setAttribute(`target`,`_blank`),n.setAttribute(`rel`,`noreferrer`),n.className=`font-mono text-success hover:underline`;let a=g(`rue:compiled-slot`);v(n,a),T(()=>{let e=r.get().sha.slice(0,7);m(()=>S(e,n,a))});let o=p(`span`,t);v(t,o),v(o,s(`-`));let c=p(`span`,t);v(t,c),c.className=`text-base-content`;let l=g(`rue:compiled-slot`);v(c,l),T(()=>{let e=N(r.get().commit.message);m(()=>S(e,c,l))});let u=p(`br`,t);v(t,u);let d=p(`span`,t);v(t,d),v(d,s(`by`));let f=p(`span`,t);v(t,f),f.className=`font-semibold`;let h=p(`a`,f);v(f,h);let _;T(()=>{let e=r.get().author?.html_url||r.get().html_url;Object.is(_,e)||(_=e,e==null||e===!1?h.removeAttribute(`href`):h.setAttribute(`href`,String(e)))}),h.setAttribute(`target`,`_blank`),h.setAttribute(`rel`,`noreferrer`),h.className=`text-success hover:underline`;let y=s(``);v(h,y),E(y,()=>r.get().commit.author.name);let b=p(`span`,t);v(t,b),v(b,s(`at`));let x=p(`span`,t);v(t,x),x.className=`font-semibold`;let C=g(`rue:compiled-slot`);return v(x,C),T(()=>{let e=P(r.get().commit.author.date);m(()=>S(e,x,C))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),r(()=>u(f)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):o(Object.assign(e=>{let t=p(`div`,e);t.setAttribute(`role`,`status`),t.className=`alert alert-soft`;let n=p(`span`,t);return v(t,n),v(n,s(`当前分支没有可显示的提交。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),e=>f(()=>{a.set(e.resource)}),()=>n)},L=D({title:`资源（纯 JSX，移植自 SolidJS）`,source:`import { createResource, signal, type FC } from '@rue-js/rue'

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
`,Demo:()=>{let g=a(M[0]),x=h(g,async e=>{let t=await fetch(`${j}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]});return y(()=>d(e(()=>{let e=c(),a=A().content.cloneNode(!0),d=a.firstChild,f=d.childNodes[0].childNodes[3].childNodes[0],h=f.parentNode,y=d.childNodes[0].childNodes[4].childNodes[1],C=y.parentNode,D=d.childNodes[0].childNodes[5].childNodes[1],O=D.parentNode,k=d.childNodes[0].childNodes[6],j=k.parentNode,N=d.childNodes[0].childNodes[7],P=N.parentNode;e.appendChild(a);let F=n(()=>g.get()),L=[];return T(()=>{L=w(h,f,L,M||[],(e,t)=>e,(e,n)=>{let a=l(e);return t((e,t,n)=>i(e,n,()=>o(Object.assign(e=>{let t=p(`label`,e),n;T(()=>{let e=`resource-jsx-${a.get()}`;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`htmlFor`):t.setAttribute(`htmlFor`,String(e)))}),t.className=`inline-flex items-center gap-2`;let i=p(`input`,t);v(t,i);let o;T(()=>{let e=`resource-jsx-${a.get()}`;Object.is(o,e)||(o=e,e==null||e===!1?i.removeAttribute(`id`):i.setAttribute(`id`,String(e)))}),i.setAttribute(`type`,`radio`),i.setAttribute(`name`,`resource-jsx-branch`),i.className=`radio radio-sm radio-success`;let c;T(()=>{let e=!!F(a.get());Object.is(c,e)||(c=e,i.checked=e)});let l=e=>{let t=()=>{g.set(a.get())};typeof t==`function`&&t(e)};i.addEventListener(`change`,l),r(()=>i.removeEventListener(`change`,l));let u=p(`span`,t);v(t,u),u.className=`font-medium`;let d=s(``);return v(u,d),E(d,()=>a.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,a.set(t)})})}),r(()=>u(L)),T(()=>{let e=g.get();m(()=>S(e,C,y))}),T(()=>{let e=String(x.loading.get());m(()=>S(e,O,D))}),_(j,k,()=>{let e=x.loading.get();return e?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=p(`div`,e);t.setAttribute(`role`,`status`),t.className=`alert alert-info alert-soft`;let n=p(`span`,t);return v(t,n),v(n,s(`Loading...`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=s(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=c();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),_(P,N,()=>{let e=!x.loading.get();return e?{__rue_compiled_branch_key:!0,create:()=>b(I,()=>({resource:x}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=s(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=c();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),e},!0),e=>f(()=>{})))},codeCardClassName:`h-[420px] md:h-[900px]`});export{L as default};