import{G as e,I as t,L as n,M as r,P as i,R as a,Z as o,_t as s,bt as c,c as l,j as u,pt as d,t as f,u as p,vt as m}from"./vapor-runtime-D3a-68js.js";import{a as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as g}from"./createHomeSplitExamplePage-CLNmVfsf.js";var _=a=>p(()=>{let o=t(`div`);e(o,`flex gap-2 items-center`);let s=t(`span`);r(o,s),r(s,n(`子计数：`));let f=i(`rue:slot:anchor`);r(s,f),c(()=>{let e=a.count;d(()=>l(e,s,f))});let p=t(`button`);r(o,p),e(p,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),u(p,`click`,a.onInc),r(p,n(`子自增`));let m=t(`button`);return r(o,m),e(m,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),u(m,`click`,a.onReset),r(m,n(`子重置`)),o}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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

export default ParentChildCounterControlDemo`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>s(()=>{let[e,t]=h(`useState:1:0`,()=>m(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return p(()=>{let s=t(`div`);e(s,`card bg-base-100 shadow`);let p=t(`div`);r(s,p),e(p,`card-body`);let m=t(`h2`);r(p,m),e(m,`text-2xl font-semibold text-sky-600 mb-3`),r(m,n(`父组件调用子组件`));let h=t(`div`);r(p,h),e(h,`flex items-center gap-2`);let v=t(`button`);r(h,v),e(v,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),u(v,`click`,y),r(v,n(`父触发子自增`));let x=t(`button`);r(h,x),e(x,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),u(x,`click`,b),r(x,n(`父触发子重置`));let S=t(`p`);r(p,S),e(S,`mt-2 text-gray-700`),r(S,n(`（父视图展示子计数）：`));let C=a(S);r(S,C),c(()=>{o(C,g.value)});let w=i(`rue:component:anchor`);return r(p,w),c(()=>{let e=f(_,{count:g.value,onInc:y,onReset:b});d(()=>l(e,p,w))}),s})}});export{v as default};