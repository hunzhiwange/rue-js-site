import{$ as e,J as t,Kt as n,Lt as r,Y as i,Yt as a,ct as o,d as s,et as c,mt as l,qt as u,tt as d}from"./vapor-runtime-BR_2rwNk.js";import{a as f}from"./vapor-helpers-vapor-DkadWylb.js";import{t as p}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var m=()=>({count:f(`ref:1:0`,()=>r(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:r}=f(`useSetup:0:0`,()=>n(()=>{let[e]=f(`useState:1:1`,()=>u(m));return{state:e}}));return s(n=>{let s=e(`div`,n);o(s,`card bg-base-100 shadow`);let u=e(`div`,s);i(s,u),o(u,`card-body`);let f=e(`h2`,u);i(u,f),o(f,`text-2xl font-semibold mb-2`),i(f,c(`本地 ref 计数器`));let p=e(`div`,u);i(u,p),o(p,`text-4xl font-bold mb-3`);let m=d(p);i(p,m),a(()=>{l(m,r.count.value)});let h=e(`div`,u);i(u,h),o(h,`flex flex-wrap justify-center gap-2`);let g=e(`button`,h);i(h,g),o(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),t(g,`click`,()=>r.count.value++),i(g,c(`+1`));let _=e(`button`,h);i(h,_),o(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),t(_,`click`,()=>r.count.value--),i(_,c(`-1`));let v=e(`button`,h);return i(h,v),o(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),t(v,`click`,()=>{r.count.value=0}),i(v,c(`重置`)),s})}});export{h as default};