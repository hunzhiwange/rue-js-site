import{$ as e,$t as t,Gt as n,X as r,Xt as i,Z as a,Zt as o,gt as s,l as c,nt as l,o as u,rt as d,t as f,tt as p,ut as m}from"./vapor-runtime-CKrmRMZX.js";import{a as h}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as g}from"./createHomeSplitExamplePage-Q644r2Bq.js";var _=i=>c(o=>{let s=p(`div`,o);m(s,`flex gap-2 items-center`);let c=p(`span`,s);a(s,c),a(c,l(`子计数：`));let d=e(`rue:slot:anchor`);a(c,d),t(()=>{let e=i.count;n(()=>u(e,c,d))});let f=p(`button`,s);a(s,f),m(f,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),r(f,`click`,i.onInc),a(f,l(`子自增`));let h=p(`button`,s);return a(s,h),m(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),r(h,`click`,i.onReset),a(h,l(`子重置`)),s}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>i(()=>{let[e,t]=h(`useState:1:0`,()=>o(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return c(i=>{let o=p(`div`,i);m(o,`card bg-base-100 shadow`);let c=p(`div`,o);a(o,c),m(c,`card-body`);let h=p(`h2`,c);a(c,h),m(h,`text-2xl font-semibold text-sky-600 mb-3`),a(h,l(`父组件调用子组件`));let v=p(`div`,c);a(c,v),m(v,`flex items-center gap-2`);let x=p(`button`,v);a(v,x),m(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),r(x,`click`,y),a(x,l(`父触发子自增`));let S=p(`button`,v);a(v,S),m(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),r(S,`click`,b),a(S,l(`父触发子重置`));let C=p(`p`,c);a(c,C),m(C,`mt-2 text-gray-700`),a(C,l(`（父视图展示子计数）：`));let w=d(C);a(C,w),t(()=>{s(w,g.value)});let T=e(`rue:component:anchor`);return a(c,T),t(()=>{let e=f(_,{count:g.value,onInc:y,onReset:b});n(()=>u(e,c,T))}),o})}});export{v as default};