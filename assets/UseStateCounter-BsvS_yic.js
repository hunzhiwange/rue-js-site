import{K as e,L as t,M as n,N as r,Q as i,R as a,_t as o,d as s,ht as c,mt as l,z as u}from"./vapor-runtime-Dfq7aA8z.js";import{a as d}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as f}from"./createHomeSplitExamplePage-DJ9ZPmKq.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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

export default UseStateCounterDemo`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>l(()=>{let[e,t]=d(`useState:1:0`,()=>c(0));return{count:e,setCount:t}}));return s(s=>{let c=t(`div`,s);e(c,`card bg-base-100 shadow`);let l=t(`div`,c);r(c,l),e(l,`card-body`);let d=t(`h2`,l);r(l,d),e(d,`text-2xl font-semibold mb-2`),r(d,a(`useState 计数器`));let m=t(`div`,l);r(l,m),e(m,`text-4xl font-bold mb-3`);let h=u(m);r(m,h),o(()=>{i(h,f.value)});let g=t(`div`,l);r(l,g),e(g,`flex flex-wrap justify-center gap-2`);let _=t(`button`,g);r(g,_),e(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(_,`click`,()=>p(e=>{e.value+=1})),r(_,a(`+1`));let v=t(`button`,g);r(g,v),e(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),n(v,`click`,()=>p(e=>{--e.value})),r(v,a(`-1`));let y=t(`button`,g);return r(g,y),e(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(y,`click`,()=>p(0)),r(y,a(`重置`)),c})}});export{p as default};