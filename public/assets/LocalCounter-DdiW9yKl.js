import{K as e,L as t,M as n,N as r,Q as i,R as a,d as o,gt as s,ht as c,st as l,vt as u,z as d}from"./vapor-runtime-BuwLbCGk.js";import{a as f}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as p}from"./createHomeSplitExamplePage-2wtBgDCk.js";var m=()=>({count:f(`ref:1:0`,()=>l(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:l}=f(`useSetup:0:0`,()=>c(()=>{let[e]=f(`useState:1:1`,()=>s(m));return{state:e}}));return o(o=>{let s=t(`div`,o);e(s,`card bg-base-100 shadow`);let c=t(`div`,s);r(s,c),e(c,`card-body`);let f=t(`h2`,c);r(c,f),e(f,`text-2xl font-semibold mb-2`),r(f,a(`本地 ref 计数器`));let p=t(`div`,c);r(c,p),e(p,`text-4xl font-bold mb-3`);let m=d(p);r(p,m),u(()=>{i(m,l.count.value)});let h=t(`div`,c);r(c,h),e(h,`flex flex-wrap justify-center gap-2`);let g=t(`button`,h);r(h,g),e(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(g,`click`,()=>l.count.value++),r(g,a(`+1`));let _=t(`button`,h);r(h,_),e(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),n(_,`click`,()=>l.count.value--),r(_,a(`-1`));let v=t(`button`,h);return r(h,v),e(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(v,`click`,()=>{l.count.value=0}),r(v,a(`重置`)),s})}});export{h as default};