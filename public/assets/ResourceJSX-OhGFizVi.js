import{A as e,Bt as t,H as n,Ht as r,Qt as i,U as a,Ut as o,V as s,Vt as c,Wt as l,Y as u,_t as d,dn as f,en as p,f as m,fn as h,gn as g,gt as _,h as v,hn as y,in as b,mn as x,nn as S,p as C,pn as w,qt as T,sn as E,tt as D,u as O,un as k,vt as A,yn as j,yt as M,zt as N}from"./rue-runtime-Cv6BZekS.js";import{t as P}from"./createHomeSplitExamplePage-DqLcVC_n.js";var F=j(`<div role="alert" class="alert alert-error alert-soft"><span>Error: <!--rue:text-hole:0--></span></div>`),I=j(`<ul class="space-y-5"><!--rue:text-hole:0--></ul>`),L=j(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><h2 class="text-2xl font-semibold">Fetching data with createResource in JSX</h2><p class="text-sm text-base-content/70">这个版本只使用编译后的 JSX 组件树消费 createResource，不依赖命令式锚点或兼容渲染层。</p><p class="text-sm text-base-content/70">数据源复用获取数据示例里的 GitHub commits API，写法仍然保持 SolidJS createResource 示例的结构。</p><div class="flex flex-wrap gap-4"><!--rue:text-hole:0--></div><p class="text-sm text-base-content/70">rust@<!--rue:text-hole:1--></p><p class="text-sm text-base-content/70">resource.loading = <!--rue:text-hole:2--></p><!--rue:text-hole:3--><!--rue:text-hole:4--></div></div>`),R=`https://api.github.com/repos/rust-lang/rust/commits?per_page=3&sha=`,z=[`main`,`beta`,`stable`],B=e=>{let t=e.indexOf(`
`);return t>0?e.slice(0,t):e},V=e=>e.replace(/T|Z/g,` `),H=e=>e?e instanceof Error?e.message:typeof e==`string`?e:`请求失败`:``,U=(e,n,i)=>{let o=A(_(e,`resource`));return a(r(()=>{let e=D(()=>o.get().error.get());e.get();let n=e;if(n.get())return{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>l(e=>{let r=F().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=i.parentNode;return t({parent:a,before:i},()=>(e=>(t,n,r)=>N(H(e))(t,n,r))(n.get()),()=>({})),[r,r]})};let r=D(()=>o.get().data.get());return r.get(),r.get()?.length?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>l(e=>{let n=I().content.cloneNode(!0).firstChild,i=n.childNodes[0],a=i.parentNode,o=[];return T(()=>{let e=r.get()||[];o=v(a,i,o,e,(e,t)=>e.sha,(e,n)=>{let r=A(e);return C((e,n,i)=>{let a=()=>l(e=>{let n=y(`li`,e);n.setAttribute(`class`,`leading-7`);let i=y(`a`,n);h(n,i);let a;b(()=>{let e=r.get().html_url;Object.is(a,e)||(a=e,e==null||e===!1?i.removeAttribute(`href`):i.setAttribute(`href`,String(e)))}),i.setAttribute(`target`,`_blank`),i.setAttribute(`rel`,`noreferrer`),i.setAttribute(`class`,`font-mono text-success hover:underline`);let o=w(`rue:compiled-slot`);h(i,o),t({parent:i,before:o},()=>N(r.get().sha.slice(0,7)),()=>({}));let s=y(`span`,n);h(n,s),h(s,g(`-`));let c=y(`span`,n);h(n,c),c.setAttribute(`class`,`text-base-content`);let l=w(`rue:compiled-slot`);h(c,l),t({parent:c,before:l},()=>(e=>(t,n,r)=>N(B(e))(t,n,r))(r.get().commit.message),()=>({}));let u=y(`br`,n);h(n,u);let d=y(`span`,n);h(n,d),h(d,g(`by`));let f=y(`span`,n);h(n,f),f.setAttribute(`class`,`font-semibold`);let p=y(`a`,f);h(f,p);let m;b(()=>{let e=r.get().author?.html_url||r.get().html_url;Object.is(m,e)||(m=e,e==null||e===!1?p.removeAttribute(`href`):p.setAttribute(`href`,String(e)))}),p.setAttribute(`target`,`_blank`),p.setAttribute(`rel`,`noreferrer`),p.setAttribute(`class`,`text-success hover:underline`);let _=w(`rue:compiled-slot`);h(p,_),t({parent:p,before:_},()=>N(r.get().commit.author.name),()=>({}));let v=y(`span`,n);h(n,v),h(v,g(`at`));let x=y(`span`,n);h(n,x),x.setAttribute(`class`,`font-semibold`);let S=w(`rue:compiled-slot`);return h(x,S),t({parent:x,before:S},()=>(e=>(t,n,r)=>N(V(e))(t,n,r))(r.get().commit.author.date),()=>({})),[n,n]});return e==null?a():c(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),E(()=>m(o)),[n,n]})}:{__rue_compiled_branch_key:2,create:()=>M(e=>{let t=y(`div`,e);t.setAttribute(`role`,`status`),t.setAttribute(`class`,`alert alert-soft`);let n=y(`span`,t);return h(t,n),h(n,g(`当前分支没有可显示的提交。`)),[t,t]})}}),e=>p(()=>{o.set(e.resource)}),()=>d(e))},W=(n,r,a)=>{let d=k(z[0]),p=D(()=>e(d,async e=>{let t=await fetch(`${R}${e}`);if(!t.ok)throw Error(`请求失败：${t.status}`);let n=await t.json();return Array.isArray(n)?n:[]}));return f(()=>p.get()),u(()=>l(e=>{let n=L().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[3].childNodes[0],a=r.parentNode,u=n.childNodes[0].childNodes[4].childNodes[1],f=u.parentNode,_=n.childNodes[0].childNodes[5].childNodes[1],w=_.parentNode,D=n.childNodes[0].childNodes[6],k=D.parentNode,j=n.childNodes[0].childNodes[7],P=j.parentNode,F=S(()=>d.get()),I=[];T(()=>{I=v(a,r,I,z||[],(e,t)=>e,(e,t)=>{let n=A(e);return C((e,t,r)=>{let a=()=>l(e=>{let t=y(`label`,e),r;b(()=>{let e=`resource-jsx-${n.get()}`;Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`htmlFor`):t.setAttribute(`htmlFor`,String(e)))}),t.setAttribute(`class`,`inline-flex items-center gap-2`);let a=y(`input`,t);h(t,a);let o;b(()=>{let e=`resource-jsx-${n.get()}`;Object.is(o,e)||(o=e,e==null||e===!1?a.removeAttribute(`id`):a.setAttribute(`id`,String(e)))}),a.setAttribute(`type`,`radio`),a.setAttribute(`name`,`resource-jsx-branch`),a.setAttribute(`class`,`radio radio-sm radio-success`);let s;b(()=>{let e=!!F(n.get());Object.is(s,e)||(s=e,a.checked=e)}),E(O(e,a,`change`,()=>()=>{d.set(n.get())}));let c=y(`span`,t);h(t,c),c.setAttribute(`class`,`font-medium`);let l=g(``);return h(c,l),i(l,()=>n.get()),[t,t]});return e==null?a():c(e,r,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),E(()=>m(I));let R=g(``);return f.insertBefore(R,u),f.removeChild(u),i(R,()=>d.get()),t({parent:w,before:_},()=>N(p.get().loading.get()),()=>({})),o(k,D,()=>{let e=p.get().loading.get();return e?{__rue_compiled_branch_key:!0,create:()=>M(e=>{let t=y(`div`,e);t.setAttribute(`role`,`status`),t.setAttribute(`class`,`alert alert-info alert-soft`);let n=y(`span`,t);return h(t,n),h(n,g(`Loading...`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>M(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>M(e=>{let t=x();return[t.firstChild,t.lastChild]})}}),o(P,j,()=>{let e=!p.get().loading.get();return e?{__rue_compiled_branch_key:!0,create:()=>s(U,()=>({resource:p.get()}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>M(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>M(e=>{let t=x();return[t.firstChild,t.lastChild]})}}),[n,n]}))},G=`import { createResource, signal, type FC } from '@rue-js/rue'

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
`,K=(e,t,r)=>s(P,()=>({options:{title:`资源（纯 JSX，移植自 SolidJS）`,source:G,codeCardClassName:`h-[420px] md:h-[900px]`},children:(e,t,r)=>{let i=()=>l(e=>{let t=x();n(t,W,()=>({}));let r=g(``),i=g(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}}));export{K as default};