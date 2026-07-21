import{Cn as e,Mt as t,Tt as n,ht as r,mt as i,ot as a,pn as o,pt as s,st as c,tn as l,wn as u}from"./context-8lXZvIn-.js";import{l as d}from"./vapor-runtime-ygJWVcNn.js";import{a as f}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as p}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var m=()=>({count:f(`ref:1:0`,()=>o(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:o}=f(`useSetup:0:0`,()=>e(()=>{let[e]=f(`useState:1:1`,()=>u(m));return{state:e}}));return d(e=>{let u=s(`div`,e);n(u,`card bg-base-100 shadow`);let d=s(`div`,u);c(u,d),n(d,`card-body`);let f=s(`h2`,d);c(d,f),n(f,`text-2xl font-semibold mb-2`),c(f,i(`本地 ref 计数器`));let p=s(`div`,d);c(d,p),n(p,`text-4xl font-bold mb-3`);let m=r(p);c(p,m),l(()=>{t(m,o.count.value)});let h=s(`div`,d);c(d,h),n(h,`flex flex-wrap justify-center gap-2`);let g=s(`button`,h);c(h,g),n(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),a(g,`click`,()=>o.count.value++),c(g,i(`+1`));let _=s(`button`,h);c(h,_),n(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),a(_,`click`,()=>o.count.value--),c(_,i(`-1`));let v=s(`button`,h);return c(h,v),n(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(v,`click`,()=>{o.count.value=0}),c(v,i(`重置`)),u})}});export{h as default};