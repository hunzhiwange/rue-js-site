import{Bt as e,H as t,Qt as n,U as r,V as i,Vt as a,Wt as o,Y as s,_t as c,en as l,et as u,fn as d,gn as f,gt as p,hn as m,mn as h,pn as g,sn as _,vt as v,yn as y,zt as b}from"./rue-runtime-Cv6BZekS.js";import{t as x}from"./createHomeSplitExamplePage-DqLcVC_n.js";var S=y(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-sky-600 mb-3">父组件调用子组件</h2><div class="flex items-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">父触发子自增</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">父触发子重置</button></div><p class="mt-2 text-gray-700">（父视图展示子计数）：<!--rue:text-hole:0--></p><!--rue:opaque-hole:1--></div></div>`),C=(t,n,i)=>{let a=v(p(t,`count`)),s=v(p(t,`onInc`)),u=v(p(t,`onReset`));return r(o(t=>{let n=m(`div`,t);n.setAttribute(`class`,`flex gap-2 items-center`);let r=m(`span`,n);d(n,r),d(r,f(`子计数：`));let i=g(`rue:compiled-slot`);d(r,i),e({parent:r,before:i},()=>b(a.get()),()=>({}));let o=m(`button`,n);d(n,o),o.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`);let c=e=>{let t=(...e)=>s.get()(...e);typeof t==`function`&&t(e)};o.addEventListener(`click`,c),_(()=>o.removeEventListener(`click`,c)),d(o,f(`子自增`));let l=m(`button`,n);d(n,l),l.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`);let p=e=>{let t=(...e)=>u.get()(...e);typeof t==`function`&&t(e)};return l.addEventListener(`click`,p),_(()=>l.removeEventListener(`click`,p)),d(l,f(`子重置`)),[n,n]}),e=>l(()=>{a.set(e.count),s.set(e.onInc),u.set(e.onReset)}),()=>c(t))},w=(t,r,c)=>{let[l,d]=u(`ParentChildCounterControlDemo:hook:0`,0),p=()=>{d(e=>e+1)},m=()=>{d(0)};return s(()=>o(t=>{let r=S().content.cloneNode(!0).firstChild,o=r.childNodes[0].childNodes[1].childNodes[0],s=r.childNodes[0].childNodes[1].childNodes[1],c=r.childNodes[0].childNodes[2].childNodes[1],u=c.parentNode,d=r.childNodes[0].childNodes[3],h=d.parentNode;o.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`);let g=e=>{let t=p;typeof t==`function`&&t(e)};o.addEventListener(`click`,g),_(()=>o.removeEventListener(`click`,g)),s.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`);let v=e=>{let t=m;typeof t==`function`&&t(e)};s.addEventListener(`click`,v),_(()=>s.removeEventListener(`click`,v));let y=f(``);u.insertBefore(y,c),u.removeChild(c),n(y,()=>l.get());let b=(e,t,n)=>{let r=()=>i(C,()=>({count:l.get(),onInc:p,onReset:m}));return e==null?r():a(e,n,r)},x=d.nextSibling;return h.removeChild(d),e({parent:h,before:x},()=>b,()=>({})),[r,r]}))},T=`import { type FC, useState } from '@rue-js/rue'

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
`,E=(e,n,r)=>i(x,()=>({options:{title:`父控子计数`,source:T},children:(e,n,r)=>{let i=()=>o(e=>{let n=h();t(n,w,()=>({}));let r=f(``),i=f(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():a(e,r,i)}}));export{E as default};