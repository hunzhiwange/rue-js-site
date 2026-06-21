import{Jt as e,Q as t,Z as n,an as r,dt as i,in as a,it as o,l as s,nt as c,rt as l,vt as u,zt as d}from"./vapor-runtime-DsQWl-IB.js";import{a as f}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as p}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var m=()=>({count:f(`ref:1:0`,()=>e(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:e}=f(`useSetup:0:0`,()=>a(()=>{let[e]=f(`useState:1:1`,()=>r(m));return{state:e}}));return s(r=>{let a=c(`div`,r);i(a,`card bg-base-100 shadow`);let s=c(`div`,a);t(a,s),i(s,`card-body`);let f=c(`h2`,s);t(s,f),i(f,`text-2xl font-semibold mb-2`),t(f,l(`本地 ref 计数器`));let p=c(`div`,s);t(s,p),i(p,`text-4xl font-bold mb-3`);let m=o(p);t(p,m),d(()=>{u(m,e.count.value)});let h=c(`div`,s);t(s,h),i(h,`flex flex-wrap justify-center gap-2`);let g=c(`button`,h);t(h,g),i(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(g,`click`,()=>e.count.value++),t(g,l(`+1`));let _=c(`button`,h);t(h,_),i(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),n(_,`click`,()=>e.count.value--),t(_,l(`-1`));let v=c(`button`,h);return t(h,v),i(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(v,`click`,()=>{e.count.value=0}),t(v,l(`重置`)),a})}});export{h as default};