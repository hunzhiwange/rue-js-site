import{Dn as e,Kt as t,Vt as n,_n as r,ct as i,et as a,qt as o,vn as s,xn as c}from"./rue-runtime-HIMg8Lz8.js";import{t as l}from"./createHomeSplitExamplePage-DNdswIPW.js";var u=s(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">useState 计数器</h2><div class="text-4xl font-bold mb-3"><!--rue:text-hole:0--></div><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">+1</button><button class="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200">-1</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">重置</button></div></div></div>`),d=l({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[s,l]=t(`UseStateCounterDemo:hook:0`,0);return o(()=>i(n(Object.assign(t=>{let n=u().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[2].childNodes[0],a=n.childNodes[0].childNodes[2].childNodes[1],o=n.childNodes[0].childNodes[2].childNodes[2],d=n.childNodes[0].childNodes[1].childNodes[0],f=d.parentNode;i.className=`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`;let p=e=>{let t=()=>l(e=>e+1);typeof t==`function`&&t(e)};i.addEventListener(`click`,p),e(()=>i.removeEventListener(`click`,p)),a.className=`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`;let m=e=>{let t=()=>l(e=>e-1);typeof t==`function`&&t(e)};a.addEventListener(`click`,m),e(()=>a.removeEventListener(`click`,m)),o.className=`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`;let h=e=>{let t=()=>l(0);typeof t==`function`&&t(e)};o.addEventListener(`click`,h),e(()=>o.removeEventListener(`click`,h));let g=r(``);return f.insertBefore(g,d),f.removeChild(d),c(g,()=>s.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>a(()=>{})))}});export{d as default};