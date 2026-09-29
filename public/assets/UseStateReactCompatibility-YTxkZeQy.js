import{Bt as e,Ct as t,F as n,G as r,Gt as i,Kt as a,P as o,Qt as s,Vt as c,Wt as l,ct as u,f as d,g as f,gn as p,m,mn as h,nt as g,pn as _,qt as v,sn as y,st as b,u as x,yn as S,zt as C}from"./rue-runtime-BWbIfNT8.js";import{t as w}from"./createHomeSplitExamplePage-DUBaJvM7.js";var T=i([`length`],[!1]),E=S(`<li>rue:direct-text</li>`),D=S(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><h2 class="text-2xl font-semibold">useState 与局部快照</h2><p>点击“添加一项”：普通局部变量保留首次计算的值；computed 派生值随状态更新。</p><button class="btn btn-primary self-start">添加一项</button><div class="grid gap-3 md:grid-cols-3"><section class="rounded-lg border p-3"><h3 class="font-semibold">① 直接 JSX 读取</h3><p>数量：<!--rue:text-hole:0--></p><ul class="list-disc pl-6"><!--rue:text-hole:1--></ul></section><section class="rounded-lg border p-3"><h3 class="font-semibold">② 局部变量（首次计算的快照）</h3><p>数量：<!--rue:text-hole:2--></p><ul class="list-disc pl-6"><!--rue:text-hole:3--></ul></section><section class="rounded-lg border p-3"><h3 class="font-semibold">③ 展开属性（首次计算的快照）</h3><p>rue:direct-text</p></section><section class="rounded-lg border p-3"><h3 class="font-semibold">④ computed 列表</h3><p>数量：<!--rue:text-hole:5--></p><ul class="list-disc pl-6"><!--rue:text-hole:6--></ul></section><section class="rounded-lg border p-3"><h3 class="font-semibold">⑤ computed 展开属性</h3><p>rue:direct-text</p></section></div><p class="text-sm opacity-70">Rue 不会在 setter 更新后重新执行组件函数；需要持续更新的局部派生值可以用 computed。</p></div></div>`),O=[{id:1,label:`第一项`}],k=(n,i,o)=>{let[c,h]=b(`UseStateReactCompatibilityDemo:hook:0`,O),w=c.get().map(t=>r(n=>{let r=E().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,o=_(`rue:text-hole:0`);return a.replaceChild(o,i),e({parent:a,before:o},()=>C(t.label),()=>({})),[r,r]})),k=a(c,T),A={title:`局部属性：${a(c,T)} 项`},j=u(()=>c.get().map(t=>r(n=>{let r=E().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,o=_(`rue:text-hole:0`);return a.replaceChild(o,i),e({parent:a,before:o},()=>C(t.label),()=>({})),[r,r]}))),M=u(()=>a(c,T)),N=u(()=>({title:`计算属性：${a(c,T)} 项`}));return g(()=>l(n=>{let r=D().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[2],o=r.childNodes[0].childNodes[3].childNodes[2].childNodes[1],l=r.childNodes[0].childNodes[3].childNodes[4].childNodes[1],u=r.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[1],g=u.parentNode,b=r.childNodes[0].childNodes[3].childNodes[0].childNodes[2].childNodes[0],E=b.parentNode,O=r.childNodes[0].childNodes[3].childNodes[1].childNodes[1].childNodes[1],P=O.parentNode,F=r.childNodes[0].childNodes[3].childNodes[1].childNodes[2].childNodes[0],I=F.parentNode,L=r.childNodes[0].childNodes[3].childNodes[2].childNodes[1].childNodes[0],R=L.parentNode,z=r.childNodes[0].childNodes[3].childNodes[3].childNodes[1].childNodes[1],B=z.parentNode,V=r.childNodes[0].childNodes[3].childNodes[3].childNodes[2].childNodes[0],H=V.parentNode,U=r.childNodes[0].childNodes[3].childNodes[4].childNodes[1].childNodes[0],W=U.parentNode,G=_(`rue:text-hole:4`);R.replaceChild(G,L);let K=_(`rue:text-hole:7`);W.replaceChild(K,U),i.setAttribute(`class`,`btn btn-primary self-start`),y(x(n,i,`click`,()=>()=>h(e=>[...e,{id:e.length+1,label:`第 ${e.length+1} 项`}]))),t(o,()=>A,[]),t(l,()=>N.value,[]);let q=p(``);g.insertBefore(q,u),g.removeChild(u),s(q,()=>a(c,T));let J=S(`<li>rue:row-text</li>`),Y=[];return v(()=>{let e=c.get()||[];Y=f(E,b,Y,e,(e,t)=>e.id,(e,t,n)=>{let r=e,i;return m(e=>{let t=J().content.cloneNode(!0).firstChild,n=t.childNodes[0];n.parentNode;let a=r.label==null||typeof r.label==`boolean`?``:String(r.label);return n.textContent=a,i=()=>{{let e=r.label==null||typeof r.label==`boolean`?``:String(r.label);Object.is(a,e)||(n.textContent=e,a=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),y(()=>d(Y)),e({parent:P,before:O},()=>C(k),()=>({})),e({parent:I,before:F},()=>C(w),()=>({})),e({parent:R,before:G},()=>C(A.title),()=>({})),e({parent:B,before:z},()=>C(M.value),()=>({})),e({parent:H,before:V},()=>C(j.value),()=>({})),e({parent:W,before:K},()=>C(N.value.title),()=>({})),[r,r]}))},A=`import { computed, type FC, useState } from '@rue-js/rue'

type Item = { id: number; label: string }

const initialItems: Item[] = [{ id: 1, label: '第一项' }]

const UseStateReactCompatibilityDemo: FC = () => {
  const [items, setItems] = useState<Item[]>(initialItems)
  const localRows = items.map(item => <li key={item.id}>{item.label}</li>)
  const localCount = items.length
  const localAttributes = { title: \`局部属性：\${items.length} 项\` }
  const computedRows = computed(() => items.map(item => <li key={item.id}>{item.label}</li>))
  const computedCount = computed(() => items.length)
  const computedAttributes = computed(() => ({ title: \`计算属性：\${items.length} 项\` }))

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-4">
        <h2 className="text-2xl font-semibold">useState 与局部快照</h2>
        <p>点击“添加一项”：普通局部变量保留首次计算的值；computed 派生值随状态更新。</p>
        <button
          className="btn btn-primary self-start"
          onClick={() =>
            setItems(previous => [
              ...previous,
              { id: previous.length + 1, label: \`第 \${previous.length + 1} 项\` },
            ])
          }
        >
          添加一项
        </button>

        <div className="grid gap-3 md:grid-cols-3">
          <section className="rounded-lg border p-3">
            <h3 className="font-semibold">① 直接 JSX 读取</h3>
            <p>数量：{items.length}</p>
            <ul className="list-disc pl-6">
              {items.map(item => (
                <li key={item.id}>{item.label}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-lg border p-3">
            <h3 className="font-semibold">② 局部变量（首次计算的快照）</h3>
            <p>数量：{localCount}</p>
            <ul className="list-disc pl-6">{localRows}</ul>
          </section>
          <section className="rounded-lg border p-3">
            <h3 className="font-semibold">③ 展开属性（首次计算的快照）</h3>
            <p {...localAttributes}>{localAttributes.title}</p>
          </section>
          <section className="rounded-lg border p-3">
            <h3 className="font-semibold">④ computed 列表</h3>
            <p>数量：{computedCount.value}</p>
            <ul className="list-disc pl-6">{computedRows.value}</ul>
          </section>
          <section className="rounded-lg border p-3">
            <h3 className="font-semibold">⑤ computed 展开属性</h3>
            <p {...computedAttributes.value}>{computedAttributes.value.title}</p>
          </section>
        </div>
        <p className="text-sm opacity-70">
          Rue 不会在 setter 更新后重新执行组件函数；需要持续更新的局部派生值可以用 computed。
        </p>
      </div>
    </div>
  )
}

export default UseStateReactCompatibilityDemo
`,j=(e,t,r)=>o(w,()=>({options:{title:`useState 与局部快照`,source:A},children:(e,t,r)=>{let i=()=>l(e=>{let t=h();n(t,k,()=>({}));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}}));export{j as default};