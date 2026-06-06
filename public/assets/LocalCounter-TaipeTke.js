import{$ as e,B as t,Dt as n,G as r,K as i,Tt as a,W as o,at as s,ht as c,l,wt as u,z as d}from"./vapor-runtime-C1rlwc61.js";import{a as f}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as p}from"./createHomeSplitExamplePage-BftZ6-s2.js";var m=()=>({count:f(`ref:1:0`,()=>c(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:c}=f(`useSetup:0:0`,()=>u(()=>{let[e]=f(`useState:1:1`,()=>a(m));return{state:e}}));return l(a=>{let l=o(`div`,a);e(l,`card bg-base-100 shadow`);let u=o(`div`,l);t(l,u),e(u,`card-body`);let f=o(`h2`,u);t(u,f),e(f,`text-2xl font-semibold mb-2`),t(f,r(`本地 ref 计数器`));let p=o(`div`,u);t(u,p),e(p,`text-4xl font-bold mb-3`);let m=i(p);t(p,m),n(()=>{s(m,c.count.value)});let h=o(`div`,u);t(u,h),e(h,`flex flex-wrap justify-center gap-2`);let g=o(`button`,h);t(h,g),e(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),d(g,`click`,()=>c.count.value++),t(g,r(`+1`));let _=o(`button`,h);t(h,_),e(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),d(_,`click`,()=>c.count.value--),t(_,r(`-1`));let v=o(`button`,h);return t(h,v),e(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),d(v,`click`,()=>{c.count.value=0}),t(v,r(`重置`)),l})}});export{h as default};