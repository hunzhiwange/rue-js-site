import{F as e,K as t,L as n,M as r,N as i,Q as a,R as o,_t as s,d as c,ht as l,l as u,mt as d,t as f,ut as p,z as m}from"./vapor-runtime-Dfq7aA8z.js";import{a as h}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as g}from"./createHomeSplitExamplePage-DJ9ZPmKq.js";var _=a=>c(c=>{let l=n(`div`,c);t(l,`flex gap-2 items-center`);let d=n(`span`,l);i(l,d),i(d,o(`子计数：`));let f=e(`rue:slot:anchor`);i(d,f),s(()=>{let e=a.count;p(()=>u(e,d,f))});let m=n(`button`,l);i(l,m),t(m,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),r(m,`click`,a.onInc),i(m,o(`子自增`));let h=n(`button`,l);return i(l,h),t(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),r(h,`click`,a.onReset),i(h,o(`子重置`)),l}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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

export default ParentChildCounterControlDemo`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>d(()=>{let[e,t]=h(`useState:1:0`,()=>l(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return c(c=>{let l=n(`div`,c);t(l,`card bg-base-100 shadow`);let d=n(`div`,l);i(l,d),t(d,`card-body`);let h=n(`h2`,d);i(d,h),t(h,`text-2xl font-semibold text-sky-600 mb-3`),i(h,o(`父组件调用子组件`));let v=n(`div`,d);i(d,v),t(v,`flex items-center gap-2`);let x=n(`button`,v);i(v,x),t(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),r(x,`click`,y),i(x,o(`父触发子自增`));let S=n(`button`,v);i(v,S),t(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),r(S,`click`,b),i(S,o(`父触发子重置`));let C=n(`p`,d);i(d,C),t(C,`mt-2 text-gray-700`),i(C,o(`（父视图展示子计数）：`));let w=m(C);i(C,w),s(()=>{a(w,g.value)});let T=e(`rue:component:anchor`);return i(d,T),s(()=>{let e=f(_,{count:g.value,onInc:y,onReset:b});p(()=>u(e,d,T))}),l})}});export{v as default};