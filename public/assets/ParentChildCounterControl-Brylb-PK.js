import{$ as e,Ht as t,J as n,Jt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,mt as u,qt as d,s as f,t as p,tt as m}from"./vapor-runtime-aZAg0Qkw.js";import{a as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as g}from"./createHomeSplitExamplePage-CJbW_xoB.js";var _=r=>l(l=>{let u=e(`div`,l);s(u,`flex gap-2 items-center`);let d=e(`span`,u);a(u,d),a(d,c(`子计数：`));let p=o(`rue:slot:anchor`);a(d,p),i(()=>{let e=r.count;t(()=>f(e,d,p))});let m=e(`button`,u);a(u,m),s(m,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(m,`click`,r.onInc),a(m,c(`子自增`));let h=e(`button`,u);return a(u,h),s(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(h,`click`,r.onReset),a(h,c(`子重置`)),u}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>d(()=>{let[e,t]=h(`useState:1:0`,()=>r(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return l(r=>{let l=e(`div`,r);s(l,`card bg-base-100 shadow`);let d=e(`div`,l);a(l,d),s(d,`card-body`);let h=e(`h2`,d);a(d,h),s(h,`text-2xl font-semibold text-sky-600 mb-3`),a(h,c(`父组件调用子组件`));let v=e(`div`,d);a(d,v),s(v,`flex items-center gap-2`);let x=e(`button`,v);a(v,x),s(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(x,`click`,y),a(x,c(`父触发子自增`));let S=e(`button`,v);a(v,S),s(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(S,`click`,b),a(S,c(`父触发子重置`));let C=e(`p`,d);a(d,C),s(C,`mt-2 text-gray-700`),a(C,c(`（父视图展示子计数）：`));let w=m(C);a(C,w),i(()=>{u(w,g.value)});let T=o(`rue:component:anchor`);return a(d,T),i(()=>{let e=p(_,{count:g.value,onInc:y,onReset:b});t(()=>f(e,d,T))}),l})}});export{v as default};