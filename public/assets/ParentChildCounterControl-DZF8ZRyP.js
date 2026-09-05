import{Dn as e,Et as t,K as n,Mt as r,W as i,_n as a,bn as o,gn as s,jt as c,mn as l,q as u,z as d}from"./rue-runtime-CwEGJ854.js";import{t as f}from"./createHomeSplitExamplePage-BwH-lO_t.js";var p=a(`<div class="flex gap-2 items-center"><span>子计数：<!--rue:text-hole:0--></span><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">子自增</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">子重置</button></div>`),m=a(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-sky-600 mb-3">父组件调用子组件</h2><div class="flex items-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">父触发子自增</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">父触发子重置</button></div><p class="mt-2 text-gray-700">（父视图展示子计数）：<!--rue:text-hole:0--></p><!--rue:opaque-hole:1--></div></div>`),h=n=>{let r=i(n.count),a=i(n.onInc),c=i(n.onReset);return u(t(Object.assign(t=>{let n=p().content.cloneNode(!0).firstChild,i=n.childNodes[1],l=n.childNodes[2],u=n.childNodes[0].childNodes[1],d=u.parentNode;i.className=`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`;let f=e=>{let t=e=>a.get()(e);typeof t==`function`&&t(e)};i.addEventListener(`click`,f),e(()=>i.removeEventListener(`click`,f)),l.className=`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`;let m=e=>{let t=e=>c.get()(e);typeof t==`function`&&t(e)};l.addEventListener(`click`,m),e(()=>l.removeEventListener(`click`,m));let h=s(``);return d.insertBefore(h,u),d.removeChild(u),o(h,()=>r.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{r.set(e.count),a.set(e.onInc),c.set(e.onReset)}),()=>n)},g=f({title:`父控子计数`,source:`import { type FC, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[i,a]=c(`ParentChildCounterControlDemo:hook:0`,0),f=()=>{a(i.value+1)},p=()=>{a(0)};return r(()=>u(t(Object.assign(t=>{let r=m().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[1].childNodes[0],c=r.childNodes[0].childNodes[1].childNodes[1],u=r.childNodes[0].childNodes[2].childNodes[1],d=u.parentNode,g=r.childNodes[0].childNodes[3],_=g.parentNode;a.className=`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`;let v=e=>{let t=f;typeof t==`function`&&t(e)};a.addEventListener(`click`,v),e(()=>a.removeEventListener(`click`,v)),c.className=`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`;let y=e=>{let t=p;typeof t==`function`&&t(e)};c.addEventListener(`click`,y),e(()=>c.removeEventListener(`click`,y));let b=s(``);d.insertBefore(b,u),d.removeChild(u),o(b,()=>i.value);let x=l(_);return n(x,h,()=>({count:i.value,onInc:f,onReset:p})),_.insertBefore(x,g),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{})))}});export{g as default};