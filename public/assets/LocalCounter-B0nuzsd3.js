import{Bt as e,L as t,Lt as n,Mt as r,Y as i,_n as a,ht as o,jt as s,kn as c,nt as l,q as u,qt as d,wn as f,z as p}from"./rue-runtime-CwEGJ854.js";import{t as m}from"./createHomeSplitExamplePage-DuLZTUZH.js";var h=a(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">本地 ref 计数器</h2><div class="text-4xl font-bold mb-3"><!--rue:text-hole:0--></div><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">+1</button><button class="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200">-1</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">重置</button></div></div></div>`),g=()=>({count:d(`ref:1:0`,()=>e(5))}),_=m({title:`本地 ref 计数器`,source:`import { type FC, ref, useState } from '@rue-js/rue'

const createLocalCounterState = () => ({
  count: ref(5),
})

const LocalCounterDemo: FC = () => {
  const [state] = useState(createLocalCounterState)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2">本地 ref 计数器</h2>
        <div className="text-4xl font-bold mb-3">{state.count.value}</div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200"
            onClick={() => state.count.value++}
          >
            +1
          </button>
          <button
            className="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200"
            onClick={() => state.count.value--}
          >
            -1
          </button>
          <button
            className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"
            onClick={() => {
              state.count.value = 0
            }}
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocalCounterDemo
`,Demo:()=>{let[e]=s(`LocalCounterDemo:hook:0`,g);return r(()=>u(o(()=>{let r=l(),a=h().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0].childNodes[2].childNodes[0],u=o.childNodes[0].childNodes[2].childNodes[1],d=o.childNodes[0].childNodes[2].childNodes[2],p=o.childNodes[0].childNodes[1].childNodes[0],m=p.parentNode;r.appendChild(a),t(s,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`);let g=t=>{let n=()=>e.count.value++;typeof n==`function`&&n(t)};s.addEventListener(`click`,g),n(()=>s.removeEventListener(`click`,g)),t(u,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`);let _=t=>{let n=()=>e.count.value--;typeof n==`function`&&n(t)};u.addEventListener(`click`,_),n(()=>u.removeEventListener(`click`,_)),t(d,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`);let v=t=>{let n=()=>{e.count.value=0};typeof n==`function`&&n(t)};return d.addEventListener(`click`,v),n(()=>d.removeEventListener(`click`,v)),f(()=>{let t=e.count.value;c(()=>i(t,m,p))}),r},!0),e=>p(()=>{})))}});export{_ as default};