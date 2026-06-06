import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Tt as o,W as s,at as c,l,s as u,t as d,wt as f,yt as p,z as m}from"./vapor-runtime-C1rlwc61.js";import{a as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./createHomeSplitExamplePage-BftZ6-s2.js";var _=a=>l(o=>{let c=s(`div`,o);e(c,`flex gap-2 items-center`);let l=s(`span`,c);t(c,l),t(l,r(`子计数：`));let d=i(`rue:slot:anchor`);t(l,d),n(()=>{let e=a.count;p(()=>u(e,l,d))});let f=s(`button`,c);t(c,f),e(f,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),m(f,`click`,a.onInc),t(f,r(`子自增`));let h=s(`button`,c);return t(c,h),e(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),m(h,`click`,a.onReset),t(h,r(`子重置`)),c}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>f(()=>{let[e,t]=h(`useState:1:0`,()=>o(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return l(o=>{let l=s(`div`,o);e(l,`card bg-base-100 shadow`);let f=s(`div`,l);t(l,f),e(f,`card-body`);let h=s(`h2`,f);t(f,h),e(h,`text-2xl font-semibold text-sky-600 mb-3`),t(h,r(`父组件调用子组件`));let v=s(`div`,f);t(f,v),e(v,`flex items-center gap-2`);let x=s(`button`,v);t(v,x),e(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),m(x,`click`,y),t(x,r(`父触发子自增`));let S=s(`button`,v);t(v,S),e(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),m(S,`click`,b),t(S,r(`父触发子重置`));let C=s(`p`,f);t(f,C),e(C,`mt-2 text-gray-700`),t(C,r(`（父视图展示子计数）：`));let w=a(C);t(C,w),n(()=>{c(w,g.value)});let T=i(`rue:component:anchor`);return t(f,T),n(()=>{let e=d(_,{count:g.value,onInc:y,onReset:b});p(()=>u(e,f,T))}),l})}});export{v as default};