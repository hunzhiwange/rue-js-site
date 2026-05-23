import{Dt as e,Et as t,H as n,J as r,K as i,V as a,W as o,d as s,kt as c,l,q as u,st as d,t as f,tt as p,xt as m}from"./vapor-runtime-BAZOdMd8.js";import{a as h}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as g}from"./createHomeSplitExamplePage-BUuBaUet.js";var _=e=>s(t=>{let r=i(`div`,t);p(r,`flex gap-2 items-center`);let s=i(`span`,r);n(r,s),n(s,u(`子计数：`));let d=o(`rue:slot:anchor`);n(s,d),c(()=>{let t=e.count;m(()=>l(t,s,d))});let f=i(`button`,r);n(r,f),p(f,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),a(f,`click`,e.onInc),n(f,u(`子自增`));let h=i(`button`,r);return n(r,h),p(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(h,`click`,e.onReset),n(h,u(`子重置`)),r}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>t(()=>{let[t,n]=h(`useState:1:0`,()=>e(0));return{parentCount:t,setParentCount:n,increase:()=>{n(t.value+1)},reset:()=>{n(0)}}}));return s(e=>{let t=i(`div`,e);p(t,`card bg-base-100 shadow`);let s=i(`div`,t);n(t,s),p(s,`card-body`);let h=i(`h2`,s);n(s,h),p(h,`text-2xl font-semibold text-sky-600 mb-3`),n(h,u(`父组件调用子组件`));let v=i(`div`,s);n(s,v),p(v,`flex items-center gap-2`);let x=i(`button`,v);n(v,x),p(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),a(x,`click`,y),n(x,u(`父触发子自增`));let S=i(`button`,v);n(v,S),p(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(S,`click`,b),n(S,u(`父触发子重置`));let C=i(`p`,s);n(s,C),p(C,`mt-2 text-gray-700`),n(C,u(`（父视图展示子计数）：`));let w=r(C);n(C,w),c(()=>{d(w,g.value)});let T=o(`rue:component:anchor`);return n(s,T),c(()=>{let e=f(_,{count:g.value,onInc:y,onReset:b});m(()=>l(e,s,T))}),t})}});export{v as default};