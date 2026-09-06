import{Dn as e,Kt as t,Vt as n,_n as r,at as i,ct as a,et as o,hn as s,qt as c,st as l,vn as u,xn as d}from"./rue-runtime-HIMg8Lz8.js";import{t as f}from"./createHomeSplitExamplePage-DNdswIPW.js";var p=u(`<div class="flex gap-2 items-center"><span>子计数：<!--rue:text-hole:0--></span><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">子自增</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">子重置</button></div>`),m=u(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-sky-600 mb-3">父组件调用子组件</h2><div class="flex items-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">父触发子自增</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">父触发子重置</button></div><p class="mt-2 text-gray-700">（父视图展示子计数）：<!--rue:text-hole:0--></p><!--rue:opaque-hole:1--></div></div>`),h=t=>{let s=i(t.count),c=i(t.onInc),l=i(t.onReset);return a(n(Object.assign(t=>{let n=p().content.cloneNode(!0).firstChild,i=n.childNodes[1],a=n.childNodes[2],o=n.childNodes[0].childNodes[1],u=o.parentNode;i.className=`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`;let f=e=>{let t=e=>c.get()(e);typeof t==`function`&&t(e)};i.addEventListener(`click`,f),e(()=>i.removeEventListener(`click`,f)),a.className=`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`;let m=e=>{let t=e=>l.get()(e);typeof t==`function`&&t(e)};a.addEventListener(`click`,m),e(()=>a.removeEventListener(`click`,m));let h=r(``);return u.insertBefore(h,o),u.removeChild(o),d(h,()=>s.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>o(()=>{s.set(e.count),c.set(e.onInc),l.set(e.onReset)}),()=>t)},g=f({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
    setParentCount(value => value + 1)
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
        <p className="mt-2 text-gray-700">（父视图展示子计数）：{parentCount}</p>
        <ChildCounter count={parentCount} onInc={increase} onReset={reset} />
      </div>
    </div>
  )
}

export default ParentChildCounterControlDemo
`,Demo:()=>{let[i,u]=t(`ParentChildCounterControlDemo:hook:0`,0),f=()=>{u(e=>e+1)},p=()=>{u(0)};return c(()=>a(n(Object.assign(t=>{let n=m().content.cloneNode(!0).firstChild,a=n.childNodes[0].childNodes[1].childNodes[0],o=n.childNodes[0].childNodes[1].childNodes[1],c=n.childNodes[0].childNodes[2].childNodes[1],u=c.parentNode,g=n.childNodes[0].childNodes[3],_=g.parentNode;a.className=`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`;let v=e=>{let t=f;typeof t==`function`&&t(e)};a.addEventListener(`click`,v),e(()=>a.removeEventListener(`click`,v)),o.className=`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`;let y=e=>{let t=p;typeof t==`function`&&t(e)};o.addEventListener(`click`,y),e(()=>o.removeEventListener(`click`,y));let b=r(``);u.insertBefore(b,c),u.removeChild(c),d(b,()=>i.get());let x=s(_);return l(x,h,()=>({count:i.get(),onInc:f,onReset:p})),_.insertBefore(x,g),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>o(()=>{})))}});export{g as default};