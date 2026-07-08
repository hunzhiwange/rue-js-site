import{Q as e,Vt as t,Z as n,at as r,bt as i,it as a,l as o,on as s,pt as c,rt as l,sn as u}from"./vapor-runtime-x7F5M-49.js";import{a as d}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as f}from"./createHomeSplitExamplePage-Da6pk2hb.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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

export default UseStateCounterDemo
`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>s(()=>{let[e,t]=d(`useState:1:0`,()=>u(0));return{count:e,setCount:t}}));return o(o=>{let s=l(`div`,o);c(s,`card bg-base-100 shadow`);let u=l(`div`,s);e(s,u),c(u,`card-body`);let d=l(`h2`,u);e(u,d),c(d,`text-2xl font-semibold mb-2`),e(d,a(`useState 计数器`));let m=l(`div`,u);e(u,m),c(m,`text-4xl font-bold mb-3`);let h=r(m);e(m,h),t(()=>{i(h,f.value)});let g=l(`div`,u);e(u,g),c(g,`flex flex-wrap justify-center gap-2`);let _=l(`button`,g);e(g,_),c(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(_,`click`,()=>p(e=>{e.value+=1})),e(_,a(`+1`));let v=l(`button`,g);e(g,v),c(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),n(v,`click`,()=>p(e=>{--e.value})),e(v,a(`-1`));let y=l(`button`,g);return e(g,y),c(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(y,`click`,()=>p(0)),e(y,a(`重置`)),s})}});export{p as default};