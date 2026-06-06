import{Dt as e,Et as t,H as n,J as r,K as i,V as a,_t as o,d as s,kt as c,q as l,st as u,tt as d}from"./vapor-runtime-ACs_OvwU.js";import{a as f}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as p}from"./createHomeSplitExamplePage-DOBN78Vl.js";var m=()=>({count:f(`ref:1:0`,()=>o(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:o}=f(`useSetup:0:0`,()=>t(()=>{let[t]=f(`useState:1:1`,()=>e(m));return{state:t}}));return s(e=>{let t=i(`div`,e);d(t,`card bg-base-100 shadow`);let s=i(`div`,t);n(t,s),d(s,`card-body`);let f=i(`h2`,s);n(s,f),d(f,`text-2xl font-semibold mb-2`),n(f,l(`本地 ref 计数器`));let p=i(`div`,s);n(s,p),d(p,`text-4xl font-bold mb-3`);let m=r(p);n(p,m),c(()=>{u(m,o.count.value)});let h=i(`div`,s);n(s,h),d(h,`flex flex-wrap justify-center gap-2`);let g=i(`button`,h);n(h,g),d(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),a(g,`click`,()=>o.count.value++),n(g,l(`+1`));let _=i(`button`,h);n(h,_),d(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),a(_,`click`,()=>o.count.value--),n(_,l(`-1`));let v=i(`button`,h);return n(h,v),d(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(v,`click`,()=>{o.count.value=0}),n(v,l(`重置`)),t})}});export{h as default};