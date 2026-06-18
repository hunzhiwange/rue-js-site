import{$ as e,Dt as t,Ft as n,Ht as r,J as i,Q as a,X as o,Xt as s,et as c,l,pt as u,q as d,qt as f,s as p,st as m}from"./vapor-runtime-iQZthBPQ.js";import{a as h}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as g}from"./createHomeSplitExamplePage-C98rg19g.js";var _=g({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

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
`,Demo:()=>{let{state:g}=h(`useSetup:0:0`,()=>f(()=>({state:t({count:0,note:`等待操作`})})));return l(t=>{let l=a(`div`,t);m(l,`card bg-base-100 shadow`);let f=a(`div`,l);i(l,f),m(f,`card-body`);let h=a(`h2`,f);i(f,h),m(h,`text-2xl font-semibold mb-2`),i(h,e(`shallowRef 只追踪 .value`));let _=a(`p`,f);i(f,_),m(_,`text-base-content/70 leading-7`),i(_,e(`直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。`));let v=a(`div`,f);i(f,v),m(v,`mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2`);let y=a(`div`,v);i(v,y),m(y,`text-lg font-medium`),i(y,e(`当前渲染值：`));let b=o(`rue:slot:anchor`);i(y,b),s(()=>{let e=g.value.count;r(()=>p(e,y,b))});let x=a(`div`,v);i(v,x),i(x,e(`最近操作：`));let S=o(`rue:slot:anchor`);i(x,S),s(()=>{let e=g.value.note;r(()=>p(e,x,S))});let C=a(`div`,v);i(v,C),i(C,e(`内部对象 reactive：`));let w=c(C);i(C,w),s(()=>{u(w,String(n(g.value)))});let T=a(`div`,f);i(f,T),m(T,`mt-4 flex flex-wrap gap-2`);let E=a(`button`,T);i(T,E),m(E,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`),d(E,`click`,()=>{g.value.count+=1,g.value.note=`仅修改内部对象`}),i(E,e(`仅修改内部对象`));let D=a(`button`,T);i(T,D),m(D,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`),d(D,`click`,()=>{g.value={count:g.value.count+1,note:`整体替换 .value`}}),i(D,e(`整体替换 .value`));let O=a(`button`,T);return i(T,O),m(O,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),d(O,`click`,()=>{g.value={count:0,note:`已重置`}}),i(O,e(`重置`)),l})}});export{_ as default};