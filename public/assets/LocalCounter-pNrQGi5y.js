import{Gt as e,H as t,Kt as n,Qt as r,V as i,Vt as a,Wt as o,Y as s,Yt as c,Zt as l,et as u,gn as d,mn as f,sn as p,st as m,u as h,yn as g}from"./rue-runtime-Cv6BZekS.js";import{t as _}from"./createHomeSplitExamplePage-DqLcVC_n.js";var v=e([`count`,`value`],[!1,!1]),y=g(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">本地 ref 计数器</h2><div class="text-4xl font-bold mb-3"><!--rue:text-hole:0--></div><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">+1</button><button class="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200">-1</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">重置</button></div></div></div>`),b=()=>({count:m(5)}),x=(e,t,i)=>{let[a]=u(`LocalCounterDemo:hook:0`,b);return s(()=>o(e=>{let t=y().content.cloneNode(!0).firstChild,i=t.childNodes[0].childNodes[2].childNodes[0],o=t.childNodes[0].childNodes[2].childNodes[1],s=t.childNodes[0].childNodes[2].childNodes[2],u=t.childNodes[0].childNodes[1].childNodes[0],f=u.parentNode;i.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),p(h(e,i,`click`,()=>()=>c(c(l(a))(`count`))(`value`).value++)),o.setAttribute(`class`,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),p(h(e,o,`click`,()=>()=>c(c(l(a))(`count`))(`value`).value--)),s.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),p(h(e,s,`click`,()=>()=>{c(c(l(a))(`count`))(`value`).value=0}));let m=d(``);return f.insertBefore(m,u),f.removeChild(u),r(m,()=>n(a,v)),[t,t]}))},S=`import { type FC, ref, useState } from '@rue-js/rue'

const createLocalCounterState = () => ({
  count: ref(5),
})

const LocalCounterDemo: FC = () => {
  const [state] = useState(createLocalCounterState)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2">本地 ref 计数器</h2>
        <div className="text-4xl font-bold mb-3">{state.count.value}</div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200"
            onClick={() => state.count.value++}
          >
            +1
          </button>
          <button
            className="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200"
            onClick={() => state.count.value--}
          >
            -1
          </button>
          <button
            className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"
            onClick={() => {
              state.count.value = 0
            }}
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocalCounterDemo
`,C=(e,n,r)=>i(_,()=>({options:{title:`本地 ref 计数器`,source:S},children:(e,n,r)=>{let i=()=>o(e=>{let n=f();t(n,x,()=>({}));let r=d(``),i=d(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():a(e,r,i)}}));export{C as default};