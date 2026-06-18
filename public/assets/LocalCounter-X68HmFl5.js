import{$ as e,J as t,Jt as n,Lt as r,Q as i,Xt as a,et as o,l as s,pt as c,q as l,qt as u,st as d}from"./vapor-runtime-iQZthBPQ.js";import{a as f}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as p}from"./createHomeSplitExamplePage-C98rg19g.js";var m=()=>({count:f(`ref:1:0`,()=>r(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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

export default LocalCounterDemo
`,Demo:()=>{let{state:r}=f(`useSetup:0:0`,()=>u(()=>{let[e]=f(`useState:1:1`,()=>n(m));return{state:e}}));return s(n=>{let s=i(`div`,n);d(s,`card bg-base-100 shadow`);let u=i(`div`,s);t(s,u),d(u,`card-body`);let f=i(`h2`,u);t(u,f),d(f,`text-2xl font-semibold mb-2`),t(f,e(`本地 ref 计数器`));let p=i(`div`,u);t(u,p),d(p,`text-4xl font-bold mb-3`);let m=o(p);t(p,m),a(()=>{c(m,r.count.value)});let h=i(`div`,u);t(u,h),d(h,`flex flex-wrap justify-center gap-2`);let g=i(`button`,h);t(h,g),d(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),l(g,`click`,()=>r.count.value++),t(g,e(`+1`));let _=i(`button`,h);t(h,_),d(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),l(_,`click`,()=>r.count.value--),t(_,e(`-1`));let v=i(`button`,h);return t(h,v),d(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),l(v,`click`,()=>{r.count.value=0}),t(v,e(`重置`)),s})}});export{h as default};