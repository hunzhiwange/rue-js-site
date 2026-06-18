import{$ as e,J as t,Jt as n,Q as r,Xt as i,et as a,l as o,pt as s,q as c,qt as l,st as u}from"./vapor-runtime-iQZthBPQ.js";import{a as d}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as f}from"./createHomeSplitExamplePage-C98rg19g.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>l(()=>{let[e,t]=d(`useState:1:0`,()=>n(0));return{count:e,setCount:t}}));return o(n=>{let o=r(`div`,n);u(o,`card bg-base-100 shadow`);let l=r(`div`,o);t(o,l),u(l,`card-body`);let d=r(`h2`,l);t(l,d),u(d,`text-2xl font-semibold mb-2`),t(d,e(`useState 计数器`));let m=r(`div`,l);t(l,m),u(m,`text-4xl font-bold mb-3`);let h=a(m);t(m,h),i(()=>{s(h,f.value)});let g=r(`div`,l);t(l,g),u(g,`flex flex-wrap justify-center gap-2`);let _=r(`button`,g);t(g,_),u(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),c(_,`click`,()=>p(e=>{e.value+=1})),t(_,e(`+1`));let v=r(`button`,g);t(g,v),u(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),c(v,`click`,()=>p(e=>{--e.value})),t(v,e(`-1`));let y=r(`button`,g);return t(g,y),u(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),c(y,`click`,()=>p(0)),t(y,e(`重置`)),o})}});export{p as default};