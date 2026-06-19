import{Q as e,Qt as t,Wt as n,X as r,Xt as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,t as p,tt as m}from"./vapor-runtime-CXIalONM.js";import{a as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as g}from"./createHomeSplitExamplePage-Br1mQ323.js";var _=i=>l(o=>{let c=s(`div`,o);u(c,`flex gap-2 items-center`);let l=s(`span`,c);r(c,l),r(l,m(`子计数：`));let d=e(`rue:slot:anchor`);r(l,d),t(()=>{let e=i.count;n(()=>f(e,l,d))});let p=s(`button`,c);r(c,p),u(p,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),a(p,`click`,i.onInc),r(p,m(`子自增`));let h=s(`button`,c);return r(c,h),u(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(h,`click`,i.onReset),r(h,m(`子重置`)),c}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>o(()=>{let[e,t]=h(`useState:1:0`,()=>i(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return l(i=>{let o=s(`div`,i);u(o,`card bg-base-100 shadow`);let l=s(`div`,o);r(o,l),u(l,`card-body`);let h=s(`h2`,l);r(l,h),u(h,`text-2xl font-semibold text-sky-600 mb-3`),r(h,m(`父组件调用子组件`));let v=s(`div`,l);r(l,v),u(v,`flex items-center gap-2`);let x=s(`button`,v);r(v,x),u(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),a(x,`click`,y),r(x,m(`父触发子自增`));let S=s(`button`,v);r(v,S),u(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(S,`click`,b),r(S,m(`父触发子重置`));let C=s(`p`,l);r(l,C),u(C,`mt-2 text-gray-700`),r(C,m(`（父视图展示子计数）：`));let w=d(C);r(C,w),t(()=>{c(w,g.value)});let T=e(`rue:component:anchor`);return r(l,T),t(()=>{let e=p(_,{count:g.value,onInc:y,onReset:b});n(()=>f(e,l,T))}),o})}});export{v as default};