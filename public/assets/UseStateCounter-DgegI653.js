import{$ as e,B as t,Dt as n,G as r,K as i,Tt as a,W as o,at as s,l as c,wt as l,z as u}from"./vapor-runtime-C1rlwc61.js";import{a as d}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as f}from"./createHomeSplitExamplePage-BftZ6-s2.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>l(()=>{let[e,t]=d(`useState:1:0`,()=>a(0));return{count:e,setCount:t}}));return c(a=>{let c=o(`div`,a);e(c,`card bg-base-100 shadow`);let l=o(`div`,c);t(c,l),e(l,`card-body`);let d=o(`h2`,l);t(l,d),e(d,`text-2xl font-semibold mb-2`),t(d,r(`useState 计数器`));let m=o(`div`,l);t(l,m),e(m,`text-4xl font-bold mb-3`);let h=i(m);t(m,h),n(()=>{s(h,f.value)});let g=o(`div`,l);t(l,g),e(g,`flex flex-wrap justify-center gap-2`);let _=o(`button`,g);t(g,_),e(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),u(_,`click`,()=>p(e=>{e.value+=1})),t(_,r(`+1`));let v=o(`button`,g);t(g,v),e(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),u(v,`click`,()=>p(e=>{--e.value})),t(v,r(`-1`));let y=o(`button`,g);return t(g,y),e(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),u(y,`click`,()=>p(0)),t(y,r(`重置`)),c})}});export{p as default};