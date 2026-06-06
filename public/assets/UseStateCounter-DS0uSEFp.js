import{$ as e,J as t,Kt as n,Y as r,Yt as i,ct as a,et as o,l as s,mt as c,qt as l,tt as u}from"./vapor-runtime-DHPuOjqh.js";import{a as d}from"./vapor-helpers-vapor-CJFAWine.js";import{t as f}from"./createHomeSplitExamplePage-BB_cTfze.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>n(()=>{let[e,t]=d(`useState:1:0`,()=>l(0));return{count:e,setCount:t}}));return s(n=>{let s=e(`div`,n);a(s,`card bg-base-100 shadow`);let l=e(`div`,s);r(s,l),a(l,`card-body`);let d=e(`h2`,l);r(l,d),a(d,`text-2xl font-semibold mb-2`),r(d,o(`useState 计数器`));let m=e(`div`,l);r(l,m),a(m,`text-4xl font-bold mb-3`);let h=u(m);r(m,h),i(()=>{c(h,f.value)});let g=e(`div`,l);r(l,g),a(g,`flex flex-wrap justify-center gap-2`);let _=e(`button`,g);r(g,_),a(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),t(_,`click`,()=>p(e=>{e.value+=1})),r(_,o(`+1`));let v=e(`button`,g);r(g,v),a(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),t(v,`click`,()=>p(e=>{--e.value})),r(v,o(`-1`));let y=e(`button`,g);return r(g,y),a(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),t(y,`click`,()=>p(0)),r(y,o(`重置`)),s})}});export{p as default};