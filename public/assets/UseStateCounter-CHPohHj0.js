import{Q as e,Z as t,an as n,dt as r,in as i,it as a,l as o,nt as s,rt as c,vt as l,zt as u}from"./vapor-runtime-DsQWl-IB.js";import{a as d}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as f}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var p=f({title:`useState 计数器`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{count:f,setCount:p}=d(`useSetup:0:0`,()=>i(()=>{let[e,t]=d(`useState:1:0`,()=>n(0));return{count:e,setCount:t}}));return o(n=>{let i=s(`div`,n);r(i,`card bg-base-100 shadow`);let o=s(`div`,i);e(i,o),r(o,`card-body`);let d=s(`h2`,o);e(o,d),r(d,`text-2xl font-semibold mb-2`),e(d,c(`useState 计数器`));let m=s(`div`,o);e(o,m),r(m,`text-4xl font-bold mb-3`);let h=a(m);e(m,h),u(()=>{l(h,f.value)});let g=s(`div`,o);e(o,g),r(g,`flex flex-wrap justify-center gap-2`);let _=s(`button`,g);e(g,_),r(_,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),t(_,`click`,()=>p(e=>{e.value+=1})),e(_,c(`+1`));let v=s(`button`,g);e(g,v),r(v,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`),t(v,`click`,()=>p(e=>{--e.value})),e(v,c(`-1`));let y=s(`button`,g);return e(g,y),r(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),t(y,`click`,()=>p(0)),e(y,c(`重置`)),i})}});export{p as default};