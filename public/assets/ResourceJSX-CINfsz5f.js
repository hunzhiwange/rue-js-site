import{B as e,Bt as t,F as n,Ht as r,I as i,P as a,Qt as o,U as s,Ut as c,V as l,Vt as u,W as d,Wt as f,ct as p,dn as m,en as h,f as g,fn as _,gn as v,h as y,hn as b,in as x,mn as S,nn as C,nt as w,p as T,pn as E,qt as D,sn as O,u as k,un as A,yn as j,z as M,zt as N}from"./rue-runtime-BWbIfNT8.js";import{t as P}from"./createHomeSplitExamplePage-Cjn7V321.js";var F=j(`<div role="alert" class="alert alert-error alert-soft"><span>Error: <!--rue:text-hole:0--></span></div>`),I=j(`<ul class="space-y-5"><!--rue:text-hole:0--></ul>`),L=j(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><h2 class="text-2xl font-semibold">Fetching data with createResource in JSX</h2><p class="text-sm text-base-content/70">这个版本只使用编译后的 JSX 组件树消费 createResource，不依赖命令式锚点或兼容渲染层。</p><p class="text-sm text-base-content/70">数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。</p><div class="flex flex-wrap gap-4"><!--rue:text-hole:0--></div><p class="text-sm text-base-content/70">rust@<!--rue:text-hole:1--></p><p class="text-sm text-base-content/70">resource.loading = <!--rue:text-hole:2--></p><!--rue:text-hole:3--><!--rue:text-hole:4--></div></div>`),R=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,z=[`main`,`beta`,`stable`],B=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},V=e=>e.replace(/T|Z/g,` `),H=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,U=(n,a,o)=>{let s=d(M(n,`resource`));return i(r(()=>{let e=p(()=>s.get().error.get());e.get();let n=e;if(n.get())return{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>f(e=>{let r=F().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=i.parentNode;return t({parent:a,before:i},()=>(e=>(t,n,r)=>N(H(e))(t,n,r))(n.get()),()=>({})),[r,r]})};let r=p(()=>s.get().data.get());return r.get(),r.get()?.length?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>f(e=>{let n=I().content.cloneNode(!0).firstChild,i=n.childNodes[0],a=i.parentNode,o=[];return D(()=>{let e=r.get()||[];o=y(a,i,o,e,(e,t)=>e.sha,(e,n)=>{let r=d(e);return T((e,n,i)=>{let a=()=>f(e=>{let n=b(`li`,e);n.setAttribute(`class`,`leading-7`);let i=b(`a`,n);_(n,i);let a;x(()=>{let e=r.get().html_url;Object.is(a,e)||(a=e,e==null||e===!1?i.removeAttribute(`href`):i.setAttribute(`href`,String(e)))}),i.setAttribute(`target`,`_blank`),i.setAttribute(`rel`,`noreferrer`),i.setAttribute(`class`,`font-mono text-success hover:underline`);let o=E(`rue:compiled-slot`);_(i,o),t({parent:i,before:o},()=>N(r.get().sha.slice(0,7)),()=>({}));let s=b(`span`,n);_(n,s),_(s,v(`-`));let c=b(`span`,n);_(n,c),c.setAttribute(`class`,`text-base-content`);let l=E(`rue:compiled-slot`);_(c,l),t({parent:c,before:l},()=>(e=>(t,n,r)=>N(B(e))(t,n,r))(r.get().commit.message),()=>({}));let u=b(`br`,n);_(n,u);let d=b(`span`,n);_(n,d),_(d,v(`by`));let f=b(`span`,n);_(n,f),f.setAttribute(`class`,`font-semibold`);let p=b(`a`,f);_(f,p);let m;x(()=>{let e=r.get().author?.html_url||r.get().html_url;Object.is(m,e)||(m=e,e==null||e===!1?p.removeAttribute(`href`):p.setAttribute(`href`,String(e)))}),p.setAttribute(`target`,`_blank`),p.setAttribute(`rel`,`noreferrer`),p.setAttribute(`class`,`text-success hover:underline`);let h=E(`rue:compiled-slot`);_(p,h),t({parent:p,before:h},()=>N(r.get().commit.author.name),()=>({}));let g=b(`span`,n);_(n,g),_(g,v(`at`));let y=b(`span`,n);_(n,y),y.setAttribute(`class`,`font-semibold`);let S=E(`rue:compiled-slot`);return _(y,S),t({parent:y,before:S},()=>(e=>(t,n,r)=>N(V(e))(t,n,r))(r.get().commit.author.date),()=>({})),[n,n]});return e==null?a():u(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),O(()=>g(o)),[n,n]})}:{__rue_compiled_branch_key:2,create:()=>l(e=>{let t=b(`div`,e);t.setAttribute(`role`,`status`),t.setAttribute(`class`,`alert alert-soft`);let n=b(`span`,t);return _(t,n),_(n,v(`当前分支没有可显示的提交。`)),[t,t]})}}),e=>h(()=>{s.set(e.resource)}),()=>e(n))},W=(e,n,r)=>{let i=A(z[0]),h=p(()=>s(i,async e=>{let t=await fetch(`${R}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]}));return m(()=>h.get()),w(()=>f(e=>{let n=L().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[3].childNodes[0],s=r.parentNode,p=n.childNodes[0].childNodes[4].childNodes[1],m=p.parentNode,w=n.childNodes[0].childNodes[5].childNodes[1],E=w.parentNode,A=n.childNodes[0].childNodes[6],j=A.parentNode,M=n.childNodes[0].childNodes[7],P=M.parentNode,F=C(()=>i.get()),I=[];D(()=>{I=y(s,r,I,z||[],(e,t)=>e,(e,t)=>{let n=d(e);return T((e,t,r)=>{let a=()=>f(e=>{let t=b(`label`,e),r;x(()=>{let e=`resource-jsx-${n.get()}`;Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`htmlFor`):t.setAttribute(`htmlFor`,String(e)))}),t.setAttribute(`class`,`inline-flex items-center gap-2`);let a=b(`input`,t);_(t,a);let s;x(()=>{let e=`resource-jsx-${n.get()}`;Object.is(s,e)||(s=e,e==null||e===!1?a.removeAttribute(`id`):a.setAttribute(`id`,String(e)))}),a.setAttribute(`type`,`radio`),a.setAttribute(`name`,`resource-jsx-branch`),a.setAttribute(`class`,`radio radio-sm radio-success`);let c;x(()=>{let e=!!F(n.get());Object.is(c,e)||(c=e,a.checked=e)}),O(k(e,a,`change`,()=>()=>{i.set(n.get())}));let l=b(`span`,t);_(t,l),l.setAttribute(`class`,`font-medium`);let u=v(``);return _(l,u),o(u,()=>n.get()),[t,t]});return e==null?a():u(e,r,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),O(()=>g(I));let R=v(``);return m.insertBefore(R,p),m.removeChild(p),o(R,()=>i.get()),t({parent:E,before:w},()=>N(h.get().loading.get()),()=>({})),c(j,A,()=>{let e=h.get().loading.get();return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=b(`div`,e);t.setAttribute(`role`,`status`),t.setAttribute(`class`,`alert alert-info alert-soft`);let n=b(`span`,t);return _(t,n),_(n,v(`Loading...`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=v(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=S();return[t.firstChild,t.lastChild]})}}),c(P,M,()=>{let e=!h.get().loading.get();return e?{__rue_compiled_branch_key:!0,create:()=>a(U,()=>({resource:h.get()}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=v(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=S();return[t.firstChild,t.lastChild]})}}),[n,n]}))},G=`import { createResource, signal, type FC } from '@rue-js/rue'

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
          这个版本只使用编译后的 JSX 组件树消费 createResource，不依赖命令式锚点或兼容渲染层。
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
`,K=(e,t,r)=>a(P,()=>({options:{title:`资源（纯 JSX，移植自 SolidJS）`,source:G,codeCardClassName:`h-[420px] md:h-[900px]`},children:(e,t,r)=>{let i=()=>f(e=>{let t=S();n(t,W,()=>({}));let r=v(``),i=v(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():u(e,r,i)}}));export{K as default};