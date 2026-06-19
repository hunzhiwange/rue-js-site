import{Qt as e,X as t,Xt as n,Y as r,Yt as i,et as a,ht as o,l as s,lt as c,nt as l,tt as u,zt as d}from"./vapor-runtime-CXIalONM.js";import{a as f}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as p}from"./createHomeSplitExamplePage-Br1mQ323.js";var m=()=>({count:f(`ref:1:0`,()=>d(5))}),h=p({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:d}=f(`useSetup:0:0`,()=>i(()=>{let[e]=f(`useState:1:1`,()=>n(m));return{state:e}}));return s(n=>{let i=a(`div`,n);c(i,`card bg-base-100 shadow`);let s=a(`div`,i);t(i,s),c(s,`card-body`);let f=a(`h2`,s);t(s,f),c(f,`text-2xl font-semibold mb-2`),t(f,u(`本地 ref 计数器`));let p=a(`div`,s);t(s,p),c(p,`text-4xl font-bold mb-3`);let m=l(p);t(p,m),e(()=>{o(m,d.count.value)});let h=a(`div`,s);t(s,h),c(h,`flex flex-wrap justify-center gap-2`);let g=a(`button`,h);t(h,g),c(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),r(g,`click`,()=>d.count.value++),t(g,u(`+1`));let _=a(`button`,h);t(h,_),c(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),r(_,`click`,()=>d.count.value--),t(_,u(`-1`));let v=a(`button`,h);return t(h,v),c(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),r(v,`click`,()=>{d.count.value=0}),t(v,u(`重置`)),i})}});export{h as default};