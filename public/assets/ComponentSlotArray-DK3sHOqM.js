import{B as e,Bt as t,F as n,Gt as r,I as i,Jt as a,Kt as o,M as s,P as c,Qt as l,Vt as u,W as d,Wt as f,Yt as p,Zt as m,en as h,fn as g,gn as _,hn as v,mn as y,pn as b,sn as x,st as S,u as C,yn as w,z as T,zt as E}from"./rue-runtime-BWbIfNT8.js";import{t as D}from"./createHomeSplitExamplePage-DUBaJvM7.js";var O=r([`count`],[!1]),k=w(`<div class="card bg-base-100 shadow"><div class="card-body gap-4"><h2 class="text-2xl font-semibold">组件插槽中的 JSX 数组</h2><p>数组作为 SlotBox 的 children 传入。两个节点都应显示，点击按钮后数字也应更新。</p><button class="btn btn-primary self-start">计数 +1</button><!--rue:opaque-hole:0--></div></div>`),A=(n,r,a)=>{let o=d(T(n,`children`)),s=d(T(n,`title`));return i(f(e=>{let n=v(`section`,e);n.setAttribute(`class`,`rounded-lg border p-4`);let r=v(`h3`,n);g(n,r),r.setAttribute(`class`,`mb-2 font-semibold`);let i=b(`rue:compiled-slot`);g(r,i),t({parent:r,before:i},()=>E(s.get()),()=>({}));let a=v(`div`,n);g(n,a),a.setAttribute(`class`,`flex gap-3`);let c=b(`rue:compiled-slot`);return g(a,c),t({parent:a,before:c},()=>o.get(),()=>({})),[n,n]}),e=>h(()=>{o.set(e.children),s.set(e.title)}),()=>e(n))},j=(e,n,r)=>{let{_$state:i}=a(`useSetup:0:0`,()=>{let[e]=S(`plan:310:hook:0`,()=>({count:0}));return{_$state:e}});return f(e=>{let n=k().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[2],a=n.childNodes[0].childNodes[3],c=a.parentNode;r.setAttribute(`class`,`btn btn-primary self-start`),x(C(e,r,`click`,()=>()=>{p(m(i))(`count`).value+=1}));let d=f(e=>{let n=y(),r=b(`rue:slot:anchor`);g(n,r),t({parent:n,before:r},()=>(e,t,n)=>u(e,n,()=>f(e=>{let t=v(`span`,e);g(t,_(`当前：`));let n=_(``);return g(t,n),l(n,()=>o(i,O)),[t,t]})),()=>({}));let a=b(`rue:slot:anchor`);g(n,a),t({parent:n,before:a},()=>(e,t,n)=>u(e,n,()=>f(e=>{let t=v(`strong`,e);g(t,_(`下一个：`));let n=_(``);return g(t,n),l(n,()=>o(i,O)+1),[t,t]})),()=>({}));let s=_(``),c=_(``);return n.insertBefore(s,n.firstChild),n.appendChild(c),[n.firstChild,n.lastChild]});return t({parent:c,before:a},()=>(e,t,n)=>u(e,n,()=>s(A,()=>({title:`数组传入组件 children`,children:d}))),()=>({})),[n,n]})},M=`import { type FC, useState } from '@rue-js/rue'

const SlotBox: FC<{ title: string }> = props => (
  <section className="rounded-lg border p-4">
    <h3 className="mb-2 font-semibold">{props.title}</h3>
    <div className="flex gap-3">{props.children}</div>
  </section>
)

const ComponentSlotArrayDemo: FC = () => {
  const [state] = useState(() => ({ count: 0 }))

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-4">
        <h2 className="text-2xl font-semibold">组件插槽中的 JSX 数组</h2>
        <p>数组作为 SlotBox 的 children 传入。两个节点都应显示，点击按钮后数字也应更新。</p>
        <button
          className="btn btn-primary self-start"
          onClick={() => {
            state.count += 1
          }}
        >
          计数 +1
        </button>
        <SlotBox title="数组传入组件 children">
          {[
            <span key="current">当前：{state.count}</span>,
            <strong key="next">下一个：{state.count + 1}</strong>,
          ]}
        </SlotBox>
      </div>
    </div>
  )
}

export default ComponentSlotArrayDemo
`,N=(e,t,r)=>c(D,()=>({options:{title:`组件插槽中的 JSX 数组`,source:M},children:(e,t,r)=>{let i=()=>f(e=>{let t=y();n(t,j,()=>({}));let r=_(``),i=_(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():u(e,r,i)}}));export{N as default};