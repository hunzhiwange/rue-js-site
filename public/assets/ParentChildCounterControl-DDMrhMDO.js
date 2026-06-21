import{$t as e,Q as t,Z as n,an as r,dt as i,et as a,in as o,it as s,l as c,nt as l,o as u,rt as d,t as f,vt as p,zt as m}from"./vapor-runtime-DsQWl-IB.js";import{a as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as g}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var _=r=>c(o=>{let s=l(`div`,o);i(s,`flex gap-2 items-center`);let c=l(`span`,s);t(s,c),t(c,d(`子计数：`));let f=a(`rue:slot:anchor`);t(c,f),m(()=>{let t=r.count;e(()=>u(t,c,f))});let p=l(`button`,s);t(s,p),i(p,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(p,`click`,r.onInc),t(p,d(`子自增`));let h=l(`button`,s);return t(s,h),i(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(h,`click`,r.onReset),t(h,d(`子重置`)),s}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>o(()=>{let[e,t]=h(`useState:1:0`,()=>r(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return c(r=>{let o=l(`div`,r);i(o,`card bg-base-100 shadow`);let c=l(`div`,o);t(o,c),i(c,`card-body`);let h=l(`h2`,c);t(c,h),i(h,`text-2xl font-semibold text-sky-600 mb-3`),t(h,d(`父组件调用子组件`));let v=l(`div`,c);t(c,v),i(v,`flex items-center gap-2`);let x=l(`button`,v);t(v,x),i(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(x,`click`,y),t(x,d(`父触发子自增`));let S=l(`button`,v);t(v,S),i(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(S,`click`,b),t(S,d(`父触发子重置`));let C=l(`p`,c);t(c,C),i(C,`mt-2 text-gray-700`),t(C,d(`（父视图展示子计数）：`));let w=s(C);t(C,w),m(()=>{p(w,g.value)});let T=a(`rue:component:anchor`);return t(c,T),m(()=>{let t=f(_,{count:g.value,onInc:y,onReset:b});e(()=>u(t,c,T))}),o})}});export{v as default};