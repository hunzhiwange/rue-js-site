import{$ as e,Ht as t,J as n,Jt as r,Q as i,X as a,Xt as o,et as s,l as c,pt as l,q as u,qt as d,s as f,st as p,t as m}from"./vapor-runtime-iQZthBPQ.js";import{a as h}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as g}from"./createHomeSplitExamplePage-C98rg19g.js";var _=r=>c(s=>{let c=i(`div`,s);p(c,`flex gap-2 items-center`);let l=i(`span`,c);n(c,l),n(l,e(`子计数：`));let d=a(`rue:slot:anchor`);n(l,d),o(()=>{let e=r.count;t(()=>f(e,l,d))});let m=i(`button`,c);n(c,m),p(m,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),u(m,`click`,r.onInc),n(m,e(`子自增`));let h=i(`button`,c);return n(c,h),p(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),u(h,`click`,r.onReset),n(h,e(`子重置`)),c}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>d(()=>{let[e,t]=h(`useState:1:0`,()=>r(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return c(r=>{let c=i(`div`,r);p(c,`card bg-base-100 shadow`);let d=i(`div`,c);n(c,d),p(d,`card-body`);let h=i(`h2`,d);n(d,h),p(h,`text-2xl font-semibold text-sky-600 mb-3`),n(h,e(`父组件调用子组件`));let v=i(`div`,d);n(d,v),p(v,`flex items-center gap-2`);let x=i(`button`,v);n(v,x),p(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),u(x,`click`,y),n(x,e(`父触发子自增`));let S=i(`button`,v);n(v,S),p(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),u(S,`click`,b),n(S,e(`父触发子重置`));let C=i(`p`,d);n(d,C),p(C,`mt-2 text-gray-700`),n(C,e(`（父视图展示子计数）：`));let w=s(C);n(C,w),o(()=>{l(w,g.value)});let T=a(`rue:component:anchor`);return n(d,T),o(()=>{let e=m(_,{count:g.value,onInc:y,onReset:b});t(()=>f(e,d,T))}),c})}});export{v as default};