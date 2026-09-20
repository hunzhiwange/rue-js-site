import{H as e,Qt as t,V as n,Vt as r,Wt as i,Y as a,et as o,gn as s,mn as c,sn as l,u,yn as d}from"./rue-runtime-Cv6BZekS.js";import{t as f}from"./createHomeSplitExamplePage-DqLcVC_n.js";var p=d(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">useState 计数器</h2><div class="text-4xl font-bold mb-3">rue:direct-text</div><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">+1</button><button class="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200">-1</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">重置</button></div></div></div>`),m=(e,n,r)=>{let[s,c]=o(`UseStateCounterDemo:hook:0`,0);return a(()=>i(e=>{let n=p().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[2].childNodes[0],i=n.childNodes[0].childNodes[2].childNodes[1],a=n.childNodes[0].childNodes[2].childNodes[2],o=n.childNodes[0].childNodes[1].childNodes[0];return o.parentNode,r.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),l(u(e,r,`click`,()=>()=>c(e=>e+1))),i.setAttribute(`class`,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),l(u(e,i,`click`,()=>()=>c(e=>e-1))),a.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),l(u(e,a,`click`,()=>()=>c(0))),t(o,()=>s.get()),[n,n]}))},h=`import { type FC, useState } from '@rue-js/rue'

const UseStateCounterDemo: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2">useState 计数器</h2>
        <div className="text-4xl font-bold mb-3">{count}</div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200"
            onClick={() => setCount(value => value + 1)}
          >
            +1
          </button>
          <button
            className="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200"
            onClick={() => setCount(value => value - 1)}
          >
            -1
          </button>
          <button
            className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"
            onClick={() => setCount(0)}
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseStateCounterDemo
`,g=(t,a,o)=>n(f,()=>({options:{title:`useState 计数器`,source:h},children:(t,n,a)=>{let o=()=>i(t=>{let n=c();e(n,m,()=>({}));let r=s(``),i=s(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return t==null?o():r(t,a,o)}}));export{g as default};