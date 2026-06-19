import{$t as e,Bt as t,X as n,Xt as r,Z as i,Zt as a,gt as o,l as s,nt as c,rt as l,tt as u,ut as d}from"./vapor-runtime-CKrmRMZX.js";import{a as f}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as p}from"./createHomeSplitExamplePage-Q644r2Bq.js";var m=()=>({count:f(`ref:1:0`,()=>t(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t}=f(`useSetup:0:0`,()=>r(()=>{let[e]=f(`useState:1:1`,()=>a(m));return{state:e}}));return s(r=>{let a=u(`div`,r);d(a,`card bg-base-100 shadow`);let s=u(`div`,a);i(a,s),d(s,`card-body`);let f=u(`h2`,s);i(s,f),d(f,`text-2xl font-semibold mb-2`),i(f,c(`本地 ref 计数器`));let p=u(`div`,s);i(s,p),d(p,`text-4xl font-bold mb-3`);let m=l(p);i(p,m),e(()=>{o(m,t.count.value)});let h=u(`div`,s);i(s,h),d(h,`flex flex-wrap justify-center gap-2`);let g=u(`button`,h);i(h,g),d(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(g,`click`,()=>t.count.value++),i(g,c(`+1`));let _=u(`button`,h);i(h,_),d(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),n(_,`click`,()=>t.count.value--),i(_,c(`-1`));let v=u(`button`,h);return i(h,v),d(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(v,`click`,()=>{t.count.value=0}),i(v,c(`重置`)),a})}});export{h as default};