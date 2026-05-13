import{G as e,I as t,L as n,M as r,R as i,Z as a,_t as o,bt as s,j as c,u as l,vt as u}from"./vapor-runtime-D3a-68js.js";import{a as d}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as f}from"./createHomeSplitExamplePage-CLNmVfsf.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

const UseStateCounterDemo: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2">useState 计数器</h2>
        <div className="text-4xl font-bold mb-3">{count.value}</div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200"
            onClick={() =>
              setCount(value => {
                value.value += 1
              })
            }
          >
            +1
          </button>
          <button
            className="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200"
            onClick={() =>
              setCount(value => {
                value.value -= 1
              })
            }
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

export default UseStateCounterDemo`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>o(()=>{let[e,t]=d(`useState:1:0`,()=>u(0));return{count:e,setCount:t}}));return l(()=>{let o=t(`div`);e(o,`card bg-base-100 shadow`);let l=t(`div`);r(o,l),e(l,`card-body`);let u=t(`h2`);r(l,u),e(u,`text-2xl font-semibold mb-2`),r(u,n(`useState 计数器`));let d=t(`div`);r(l,d),e(d,`text-4xl font-bold mb-3`);let m=i(d);r(d,m),s(()=>{a(m,f.value)});let h=t(`div`);r(l,h),e(h,`flex flex-wrap justify-center gap-2`);let g=t(`button`);r(h,g),e(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),c(g,`click`,()=>p(e=>{e.value+=1})),r(g,n(`+1`));let _=t(`button`);r(h,_),e(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),c(_,`click`,()=>p(e=>{--e.value})),r(_,n(`-1`));let v=t(`button`);return r(h,v),e(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),c(v,`click`,()=>p(0)),r(v,n(`重置`)),o})}});export{p as default};