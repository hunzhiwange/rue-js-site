import{L as e,Lt as t,Mt as n,Qt as r,Vt as i,Y as a,_n as o,ht as s,kn as c,nt as l,q as u,wn as d,z as f}from"./rue-runtime-CwEGJ854.js";import{t as p}from"./createHomeSplitExamplePage-BwH-lO_t.js";var m=o(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">shallowRef 只追踪 .value</h2><p class="text-base-content/70 leading-7">直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。</p><div class="mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2"><div class="text-lg font-medium">当前渲染值：<!--rue:text-hole:0--></div><div>最近操作：<!--rue:text-hole:1--></div><div>内部对象 reactive：<!--rue:text-hole:2--></div></div><div class="mt-4 flex flex-wrap gap-2"><button class="rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200">仅修改内部对象</button><button class="rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200">整体替换 .value</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200">重置</button></div></div></div>`),h=p({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

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
`,Demo:()=>{let o=i({count:0,note:`等待操作`});return n(()=>u(s(()=>{let n=l(),i=m().content.cloneNode(!0),s=i.firstChild,u=s.childNodes[0].childNodes[3].childNodes[0],f=s.childNodes[0].childNodes[3].childNodes[1],p=s.childNodes[0].childNodes[3].childNodes[2],h=s.childNodes[0].childNodes[2].childNodes[0].childNodes[1],g=h.parentNode,_=s.childNodes[0].childNodes[2].childNodes[1].childNodes[1],v=_.parentNode,y=s.childNodes[0].childNodes[2].childNodes[2].childNodes[1],b=y.parentNode;n.appendChild(i),e(u,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`);let x=e=>{let t=()=>{o.value.count+=1,o.value.note=`仅修改内部对象`};typeof t==`function`&&t(e)};u.addEventListener(`click`,x),t(()=>u.removeEventListener(`click`,x)),e(f,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`);let S=e=>{let t=()=>{o.value={count:o.value.count+1,note:`整体替换 .value`}};typeof t==`function`&&t(e)};f.addEventListener(`click`,S),t(()=>f.removeEventListener(`click`,S)),e(p,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`);let C=e=>{let t=()=>{o.value={count:0,note:`已重置`}};typeof t==`function`&&t(e)};return p.addEventListener(`click`,C),t(()=>p.removeEventListener(`click`,C)),d(()=>{let e=o.value.count;c(()=>a(e,g,h))}),d(()=>{let e=o.value.note;c(()=>a(e,v,_))}),d(()=>{let e=String(r(o.value));c(()=>a(e,b,y))}),n},!0),e=>f(()=>{})))}});export{h as default};