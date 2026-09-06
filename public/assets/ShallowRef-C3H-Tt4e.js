import{At as e,L as t,Q as n,Qt as r,_t as i,ct as a,et as o,kn as s,nn as c,qt as l,ut as u,vn as d,wn as f}from"./rue-runtime-HIMg8Lz8.js";import{t as p}from"./createHomeSplitExamplePage-DNdswIPW.js";var m=d(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">shallowRef 只追踪 .value</h2><p class="text-base-content/70 leading-7">直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。</p><div class="mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2"><div class="text-lg font-medium">当前渲染值：<!--rue:text-hole:0--></div><div>最近操作：<!--rue:text-hole:1--></div><div>内部对象 reactive：<!--rue:text-hole:2--></div></div><div class="mt-4 flex flex-wrap gap-2"><button class="rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200">仅修改内部对象</button><button class="rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200">整体替换 .value</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">重置</button></div></div></div>`),h=p({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

const ShallowRefDemo: FC = () => {
  const state = shallowRef({ count: 0, note: '等待操作' })

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2">shallowRef 只追踪 .value</h2>
        <p className="text-base-content/70 leading-7">
          直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect
          和视图才会重新运行。
        </p>

        <div className="mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2">
          <div className="text-lg font-medium">当前渲染值：{state.value.count}</div>
          <div>最近操作：{state.value.note}</div>
          <div>内部对象 reactive：{String(isReactive(state.value))}</div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            className="rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200"
            onClick={() => {
              state.value.count += 1
              state.value.note = '仅修改内部对象'
            }}
          >
            仅修改内部对象
          </button>
          <button
            className="rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200"
            onClick={() => {
              state.value = {
                count: state.value.count + 1,
                note: '整体替换 .value',
              }
            }}
          >
            整体替换 .value
          </button>
          <button
            className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"
            onClick={() => {
              state.value = {
                count: 0,
                note: '已重置',
              }
            }}
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShallowRefDemo
`,Demo:()=>{let d=c({count:0,note:`等待操作`});return l(()=>a(e(()=>{let e=i(),a=m().content.cloneNode(!0),o=a.firstChild,c=o.childNodes[0].childNodes[3].childNodes[0],l=o.childNodes[0].childNodes[3].childNodes[1],p=o.childNodes[0].childNodes[3].childNodes[2],h=o.childNodes[0].childNodes[2].childNodes[0].childNodes[1],g=h.parentNode,_=o.childNodes[0].childNodes[2].childNodes[1].childNodes[1],v=_.parentNode,y=o.childNodes[0].childNodes[2].childNodes[2].childNodes[1],b=y.parentNode;e.appendChild(a),n(c,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`);let x=e=>{let t=()=>{d.value.count+=1,d.value.note=`仅修改内部对象`};typeof t==`function`&&t(e)};c.addEventListener(`click`,x),r(()=>c.removeEventListener(`click`,x)),n(l,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`);let S=e=>{let t=()=>{d.value={count:d.value.count+1,note:`整体替换 .value`}};typeof t==`function`&&t(e)};l.addEventListener(`click`,S),r(()=>l.removeEventListener(`click`,S)),n(p,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`);let C=e=>{let t=()=>{d.value={count:0,note:`已重置`}};typeof t==`function`&&t(e)};return p.addEventListener(`click`,C),r(()=>p.removeEventListener(`click`,C)),f(()=>{let e=d.value.count;s(()=>u(e,g,h))}),f(()=>{let e=d.value.note;s(()=>u(e,v,_))}),f(()=>{let e=String(t(d.value));s(()=>u(e,b,y))}),e},!0),e=>o(()=>{})))}});export{h as default};