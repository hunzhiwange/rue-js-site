import{Cn as e,Mt as t,Tt as n,dt as r,ht as i,mt as a,ot as o,pt as s,st as c,tn as l,vn as u,wn as d}from"./context-8lXZvIn-.js";import{l as f,o as p,t as m}from"./vapor-runtime-ygJWVcNn.js";import{a as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var _=e=>f(t=>{let i=s(`div`,t);n(i,`flex gap-2 items-center`);let d=s(`span`,i);c(i,d),c(d,a(`子计数：`));let f=r(`rue:slot:anchor`);c(d,f),l(()=>{let t=e.count;u(()=>p(t,d,f))});let m=s(`button`,i);c(i,m),n(m,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),o(m,`click`,e.onInc),c(m,a(`子自增`));let h=s(`button`,i);return c(i,h),n(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),o(h,`click`,e.onReset),c(h,a(`子重置`)),i}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

const ChildCounter: FC<{
  count: number
  onInc: () => void
  onReset: () => void
}> = props => {
  return (
    <div className="flex gap-2 items-center">
      <span>子计数：{props.count}</span>
      <button
        className="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200"
        onClick={props.onInc}
      >
        子自增
      </button>
      <button
        className="rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"
        onClick={props.onReset}
      >
        子重置
      </button>
    </div>
  )
}

const ParentChildCounterControlDemo: FC = () => {
  const [parentCount, setParentCount] = useState(0)

  const increase = () => {
    setParentCount(parentCount.value + 1)
  }

  const reset = () => {
    setParentCount(0)
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-sky-600 mb-3">父组件调用子组件</h2>
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200"
            onClick={increase}
          >
            父触发子自增
          </button>
          <button
            className="rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"
            onClick={reset}
          >
            父触发子重置
          </button>
        </div>
        <p className="mt-2 text-gray-700">（父视图展示子计数）：{parentCount.value}</p>
        <ChildCounter count={parentCount.value} onInc={increase} onReset={reset} />
      </div>
    </div>
  )
}

export default ParentChildCounterControlDemo
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>e(()=>{let[e,t]=h(`useState:1:0`,()=>d(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return f(e=>{let d=s(`div`,e);n(d,`card bg-base-100 shadow`);let f=s(`div`,d);c(d,f),n(f,`card-body`);let h=s(`h2`,f);c(f,h),n(h,`text-2xl font-semibold text-sky-600 mb-3`),c(h,a(`父组件调用子组件`));let v=s(`div`,f);c(f,v),n(v,`flex items-center gap-2`);let x=s(`button`,v);c(v,x),n(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),o(x,`click`,y),c(x,a(`父触发子自增`));let S=s(`button`,v);c(v,S),n(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),o(S,`click`,b),c(S,a(`父触发子重置`));let C=s(`p`,f);c(f,C),n(C,`mt-2 text-gray-700`),c(C,a(`（父视图展示子计数）：`));let w=i(C);c(C,w),l(()=>{t(w,g.value)});let T=r(`rue:component:anchor`);return c(f,T),l(()=>{let e=m(_,{count:g.value,onInc:y,onReset:b});u(()=>p(e,f,T))}),d})}});export{v as default};