import{$t as e,X as t,Xt as n,Z as r,Zt as i,gt as a,l as o,nt as s,rt as c,tt as l,ut as u}from"./vapor-runtime-CKrmRMZX.js";import{a as d}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as f}from"./createHomeSplitExamplePage-Q644r2Bq.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>n(()=>{let[e,t]=d(`useState:1:0`,()=>i(0));return{count:e,setCount:t}}));return o(n=>{let i=l(`div`,n);u(i,`card bg-base-100 shadow`);let o=l(`div`,i);r(i,o),u(o,`card-body`);let d=l(`h2`,o);r(o,d),u(d,`text-2xl font-semibold mb-2`),r(d,s(`useState 计数器`));let m=l(`div`,o);r(o,m),u(m,`text-4xl font-bold mb-3`);let h=c(m);r(m,h),e(()=>{a(h,f.value)});let g=l(`div`,o);r(o,g),u(g,`flex flex-wrap justify-center gap-2`);let _=l(`button`,g);r(g,_),u(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),t(_,`click`,()=>p(e=>{e.value+=1})),r(_,s(`+1`));let v=l(`button`,g);r(g,v),u(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),t(v,`click`,()=>p(e=>{--e.value})),r(v,s(`-1`));let y=l(`button`,g);return r(g,y),u(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),t(y,`click`,()=>p(0)),r(y,s(`重置`)),i})}});export{p as default};