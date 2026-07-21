import{Cn as e,Mt as t,Tt as n,ht as r,mt as i,ot as a,pt as o,st as s,tn as c,wn as l}from"./context-8lXZvIn-.js";import{l as u}from"./vapor-runtime-ygJWVcNn.js";import{a as d}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as f}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>e(()=>{let[e,t]=d(`useState:1:0`,()=>l(0));return{count:e,setCount:t}}));return u(e=>{let l=o(`div`,e);n(l,`card bg-base-100 shadow`);let u=o(`div`,l);s(l,u),n(u,`card-body`);let d=o(`h2`,u);s(u,d),n(d,`text-2xl font-semibold mb-2`),s(d,i(`useState 计数器`));let m=o(`div`,u);s(u,m),n(m,`text-4xl font-bold mb-3`);let h=r(m);s(m,h),c(()=>{t(h,f.value)});let g=o(`div`,u);s(u,g),n(g,`flex flex-wrap justify-center gap-2`);let _=o(`button`,g);s(g,_),n(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),a(_,`click`,()=>p(e=>{e.value+=1})),s(_,i(`+1`));let v=o(`button`,g);s(g,v),n(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),a(v,`click`,()=>p(e=>{--e.value})),s(v,i(`-1`));let y=o(`button`,g);return s(g,y),n(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(y,`click`,()=>p(0)),s(y,i(`重置`)),l})}});export{p as default};