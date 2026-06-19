import{Qt as e,X as t,Xt as n,Y as r,Yt as i,et as a,ht as o,l as s,lt as c,nt as l,tt as u}from"./vapor-runtime-CXIalONM.js";import{a as d}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as f}from"./createHomeSplitExamplePage-Br1mQ323.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

const UseStateCounterDemo: FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2">useState 计数器</h2>
        <div className="text-4xl font-bold mb-3">{count.value}</div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200"
            onClick={() =>
              setCount(value => {
                value.value += 1
              })
            }
          >
            +1
          </button>
          <button
            className="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200"
            onClick={() =>
              setCount(value => {
                value.value -= 1
              })
            }
          >
            -1
          </button>
          <button
            className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"
            onClick={() => setCount(0)}
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default UseStateCounterDemo
`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>i(()=>{let[e,t]=d(`useState:1:0`,()=>n(0));return{count:e,setCount:t}}));return s(n=>{let i=a(`div`,n);c(i,`card bg-base-100 shadow`);let s=a(`div`,i);t(i,s),c(s,`card-body`);let d=a(`h2`,s);t(s,d),c(d,`text-2xl font-semibold mb-2`),t(d,u(`useState 计数器`));let m=a(`div`,s);t(s,m),c(m,`text-4xl font-bold mb-3`);let h=l(m);t(m,h),e(()=>{o(h,f.value)});let g=a(`div`,s);t(s,g),c(g,`flex flex-wrap justify-center gap-2`);let _=a(`button`,g);t(g,_),c(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),r(_,`click`,()=>p(e=>{e.value+=1})),t(_,u(`+1`));let v=a(`button`,g);t(g,v),c(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),r(v,`click`,()=>p(e=>{--e.value})),t(v,u(`-1`));let y=a(`button`,g);return t(g,y),c(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),r(y,`click`,()=>p(0)),t(y,u(`重置`)),i})}});export{p as default};