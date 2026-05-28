import{$ as e,J as t,Kt as n,Vt as r,Y as i,Yt as a,Z as o,ct as s,d as c,et as l,l as u,mt as d,qt as f,t as p,tt as m}from"./vapor-runtime-BR_2rwNk.js";import{a as h}from"./vapor-helpers-vapor-DkadWylb.js";import{t as g}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var _=n=>c(c=>{let d=e(`div`,c);s(d,`flex gap-2 items-center`);let f=e(`span`,d);i(d,f),i(f,l(`子计数：`));let p=o(`rue:slot:anchor`);i(f,p),a(()=>{let e=n.count;r(()=>u(e,f,p))});let m=e(`button`,d);i(d,m),s(m,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),t(m,`click`,n.onInc),i(m,l(`子自增`));let h=e(`button`,d);return i(d,h),s(h,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),t(h,`click`,n.onReset),i(h,l(`子重置`)),d}),v=g({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{parentCount:g,setParentCount:v,increase:y,reset:b}=h(`useSetup:0:0`,()=>n(()=>{let[e,t]=h(`useState:1:0`,()=>f(0));return{parentCount:e,setParentCount:t,increase:()=>{t(e.value+1)},reset:()=>{t(0)}}}));return c(n=>{let c=e(`div`,n);s(c,`card bg-base-100 shadow`);let f=e(`div`,c);i(c,f),s(f,`card-body`);let h=e(`h2`,f);i(f,h),s(h,`text-2xl font-semibold text-sky-600 mb-3`),i(h,l(`父组件调用子组件`));let v=e(`div`,f);i(f,v),s(v,`flex items-center gap-2`);let x=e(`button`,v);i(v,x),s(x,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),t(x,`click`,y),i(x,l(`父触发子自增`));let S=e(`button`,v);i(v,S),s(S,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),t(S,`click`,b),i(S,l(`父触发子重置`));let C=e(`p`,f);i(f,C),s(C,`mt-2 text-gray-700`),i(C,l(`（父视图展示子计数）：`));let w=m(C);i(C,w),a(()=>{d(w,g.value)});let T=o(`rue:component:anchor`);return i(f,T),a(()=>{let e=p(_,{count:g.value,onInc:y,onReset:b});r(()=>u(e,f,T))}),c})}});export{v as default};