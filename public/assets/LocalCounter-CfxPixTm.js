import{Dn as e,Kt as t,Vt as n,_n as r,ct as i,et as a,qt as o,sn as s,tn as c,vn as l,xn as u}from"./rue-runtime-HIMg8Lz8.js";import{t as d}from"./createHomeSplitExamplePage-DNdswIPW.js";var f=l(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">本地 ref 计数器</h2><div class="text-4xl font-bold mb-3"><!--rue:text-hole:0--></div><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">+1</button><button class="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200">-1</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">重置</button></div></div></div>`),p=()=>({count:s(`ref:1:0`,()=>c(5))}),m=d({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[s]=t(`LocalCounterDemo:hook:0`,p);return o(()=>i(n(Object.assign(t=>{let n=f().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[2].childNodes[0],a=n.childNodes[0].childNodes[2].childNodes[1],o=n.childNodes[0].childNodes[2].childNodes[2],c=n.childNodes[0].childNodes[1].childNodes[0],l=c.parentNode;i.className=`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`;let d=e=>{let t=()=>s.get().count.value++;typeof t==`function`&&t(e)};i.addEventListener(`click`,d),e(()=>i.removeEventListener(`click`,d)),a.className=`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`;let p=e=>{let t=()=>s.get().count.value--;typeof t==`function`&&t(e)};a.addEventListener(`click`,p),e(()=>a.removeEventListener(`click`,p)),o.className=`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`;let m=e=>{let t=()=>{s.get().count.value=0};typeof t==`function`&&t(e)};o.addEventListener(`click`,m),e(()=>o.removeEventListener(`click`,m));let h=r(``);return l.insertBefore(h,c),l.removeChild(c),u(h,()=>s.get().count.value),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>a(()=>{})))}});export{m as default};