import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,it as o,l as s,on as c,pt as l,rt as u,sn as d}from"./vapor-runtime-x7F5M-49.js";import{a as f}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as p}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var m=()=>({count:f(`ref:1:0`,()=>n(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:n}=f(`useSetup:0:0`,()=>c(()=>{let[e]=f(`useState:1:1`,()=>d(m));return{state:e}}));return s(s=>{let c=u(`div`,s);l(c,`card bg-base-100 shadow`);let d=u(`div`,c);e(c,d),l(d,`card-body`);let f=u(`h2`,d);e(d,f),l(f,`text-2xl font-semibold mb-2`),e(f,o(`本地 ref 计数器`));let p=u(`div`,d);e(d,p),l(p,`text-4xl font-bold mb-3`);let m=i(p);e(p,m),t(()=>{a(m,n.count.value)});let h=u(`div`,d);e(d,h),l(h,`flex flex-wrap justify-center gap-2`);let g=u(`button`,h);e(h,g),l(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),r(g,`click`,()=>n.count.value++),e(g,o(`+1`));let _=u(`button`,h);e(h,_),l(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),r(_,`click`,()=>n.count.value--),e(_,o(`-1`));let v=u(`button`,h);return e(h,v),l(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),r(v,`click`,()=>{n.count.value=0}),e(v,o(`重置`)),c})}});export{h as default};