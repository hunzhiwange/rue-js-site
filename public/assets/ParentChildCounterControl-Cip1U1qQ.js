import{B as e,Bt as t,F as n,I as r,P as i,Qt as a,Vt as o,W as s,Wt as c,en as l,fn as u,gn as d,hn as f,mn as p,nt as m,pn as h,sn as g,st as _,yn as v,z as y,zt as b}from"./rue-runtime-BWbIfNT8.js";import{t as x}from"./createHomeSplitExamplePage-Cjn7V321.js";var S=v(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-sky-600 mb-3">父组件调用子组件</h2><div class="flex items-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">父触发子自增</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">父触发子重置</button></div><p class="mt-2 text-gray-700">（父视图展示子计数）：<!--rue:text-hole:0--></p><!--rue:opaque-hole:1--></div></div>`),C=(n,i,a)=>{let o=s(y(n,`count`)),p=s(y(n,`onInc`)),m=s(y(n,`onReset`));return r(c(e=>{let n=f(`div`,e);n.setAttribute(`class`,`flex gap-2 items-center`);let r=f(`span`,n);u(n,r),u(r,d(`子计数：`));let i=h(`rue:compiled-slot`);u(r,i),t({parent:r,before:i},()=>b(o.get()),()=>({}));let a=f(`button`,n);u(n,a),a.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`);let s=e=>{let t=(...e)=>p.get()(...e);typeof t==`function`&&t(e)};a.addEventListener(`click`,s),g(()=>a.removeEventListener(`click`,s)),u(a,d(`子自增`));let c=f(`button`,n);u(n,c),c.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`);let l=e=>{let t=(...e)=>m.get()(...e);typeof t==`function`&&t(e)};return c.addEventListener(`click`,l),g(()=>c.removeEventListener(`click`,l)),u(c,d(`子重置`)),[n,n]}),e=>l(()=>{o.set(e.count),p.set(e.onInc),m.set(e.onReset)}),()=>e(n))},w=(e,n,r)=>{let[s,l]=_(`ParentChildCounterControlDemo:hook:0`,0),u=()=>{l(e=>e+1)},f=()=>{l(0)};return m(()=>c(e=>{let n=S().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1].childNodes[0],c=n.childNodes[0].childNodes[1].childNodes[1],l=n.childNodes[0].childNodes[2].childNodes[1],p=l.parentNode,m=n.childNodes[0].childNodes[3],h=m.parentNode;r.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`);let _=e=>{let t=u;typeof t==`function`&&t(e)};r.addEventListener(`click`,_),g(()=>r.removeEventListener(`click`,_)),c.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`);let v=e=>{let t=f;typeof t==`function`&&t(e)};c.addEventListener(`click`,v),g(()=>c.removeEventListener(`click`,v));let y=d(``);p.insertBefore(y,l),p.removeChild(l),a(y,()=>s.get());let b=(e,t,n)=>{let r=()=>i(C,()=>({count:s.get(),onInc:u,onReset:f}));return e==null?r():o(e,n,r)},x=m.nextSibling;return h.removeChild(m),t({parent:h,before:x},()=>b,()=>({})),[n,n]}))},T=`import { type FC, useState } from '@rue-js/rue'

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
`,E=(e,t,r)=>i(x,()=>({options:{title:`父控子计数`,source:T},children:(e,t,r)=>{let i=()=>c(e=>{let t=p();n(t,w,()=>({}));let r=d(``),i=d(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));export{E as default};