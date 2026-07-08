import{Q as e,Vt as t,Z as n,at as r,bt as i,it as a,l as o,o as s,on as c,pt as l,rt as u,sn as d,t as f,tn as p,tt as m}from"./vapor-runtime-x7F5M-49.js";import{a as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as g}from"./createHomeSplitExamplePage-Da6pk2hb.js";var _=r=>o(i=>{let o=u(`div`,i);l(o,`flex gap-2 items-center`);let c=u(`span`,o);e(o,c),e(c,a(`子计数：`));let d=m(`rue:slot:anchor`);e(c,d),t(()=>{let e=r.count;p(()=>s(e,c,d))});let f=u(`button`,o);e(o,f),l(f,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(f,`click`,r.onInc),e(f,a(`子自增`));let h=u(`button`,o);return e(o,h),l(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(h,`click`,r.onReset),e(h,a(`子重置`)),o}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>c(()=>{let[e,t]=h(`useState:1:0`,()=>d(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return o(o=>{let c=u(`div`,o);l(c,`card bg-base-100 shadow`);let d=u(`div`,c);e(c,d),l(d,`card-body`);let h=u(`h2`,d);e(d,h),l(h,`text-2xl font-semibold text-sky-600 mb-3`),e(h,a(`父组件调用子组件`));let v=u(`div`,d);e(d,v),l(v,`flex items-center gap-2`);let x=u(`button`,v);e(v,x),l(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(x,`click`,y),e(x,a(`父触发子自增`));let S=u(`button`,v);e(v,S),l(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(S,`click`,b),e(S,a(`父触发子重置`));let C=u(`p`,d);e(d,C),l(C,`mt-2 text-gray-700`),e(C,a(`（父视图展示子计数）：`));let w=r(C);e(C,w),t(()=>{i(w,g.value)});let T=m(`rue:component:anchor`);return e(d,T),t(()=>{let e=f(_,{count:g.value,onInc:y,onReset:b});p(()=>s(e,d,T))}),c})}});export{v as default};