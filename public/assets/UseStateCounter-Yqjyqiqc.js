import{Dt as e,Et as t,H as n,J as r,K as i,V as a,d as o,kt as s,q as c,st as l,tt as u}from"./vapor-runtime-EUvELKQT.js";import{a as d}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as f}from"./createHomeSplitExamplePage-BuifU8mn.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>t(()=>{let[t,n]=d(`useState:1:0`,()=>e(0));return{count:t,setCount:n}}));return o(e=>{let t=i(`div`,e);u(t,`card bg-base-100 shadow`);let o=i(`div`,t);n(t,o),u(o,`card-body`);let d=i(`h2`,o);n(o,d),u(d,`text-2xl font-semibold mb-2`),n(d,c(`useState 计数器`));let m=i(`div`,o);n(o,m),u(m,`text-4xl font-bold mb-3`);let h=r(m);n(m,h),s(()=>{l(h,f.value)});let g=i(`div`,o);n(o,g),u(g,`flex flex-wrap justify-center gap-2`);let _=i(`button`,g);n(g,_),u(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),a(_,`click`,()=>p(e=>{e.value+=1})),n(_,c(`+1`));let v=i(`button`,g);n(g,v),u(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),a(v,`click`,()=>p(e=>{--e.value})),n(v,c(`-1`));let y=i(`button`,g);return n(g,y),u(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(y,`click`,()=>p(0)),n(y,c(`重置`)),t})}});export{p as default};