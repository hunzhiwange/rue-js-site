import{G as e,I as t,L as n,M as r,R as i,Z as a,_t as o,bt as s,j as c,lt as l,u,vt as d}from"./vapor-runtime-D3a-68js.js";import{a as f}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as p}from"./createHomeSplitExamplePage-CLNmVfsf.js";var m=()=>({count:f(`ref:1:0`,()=>l(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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

export default LocalCounterDemo`,Demo:()=>{let{state:l}=f(`useSetup:0:0`,()=>o(()=>{let[e]=f(`useState:1:1`,()=>d(m));return{state:e}}));return u(()=>{let o=t(`div`);e(o,`card bg-base-100 shadow`);let u=t(`div`);r(o,u),e(u,`card-body`);let d=t(`h2`);r(u,d),e(d,`text-2xl font-semibold mb-2`),r(d,n(`本地 ref 计数器`));let f=t(`div`);r(u,f),e(f,`text-4xl font-bold mb-3`);let p=i(f);r(f,p),s(()=>{a(p,l.count.value)});let m=t(`div`);r(u,m),e(m,`flex flex-wrap justify-center gap-2`);let h=t(`button`);r(m,h),e(h,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),c(h,`click`,()=>l.count.value++),r(h,n(`+1`));let g=t(`button`);r(m,g),e(g,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),c(g,`click`,()=>l.count.value--),r(g,n(`-1`));let _=t(`button`);return r(m,_),e(_,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),c(_,`click`,()=>{l.count.value=0}),r(_,n(`重置`)),o})}});export{h as default};