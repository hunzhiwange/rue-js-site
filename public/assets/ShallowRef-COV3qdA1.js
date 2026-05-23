import{Et as e,H as t,J as n,K as r,V as i,W as a,d as o,kt as s,l as c,lt as l,pt as u,q as d,st as f,tt as p,xt as m}from"./vapor-runtime-BAZOdMd8.js";import{a as h}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as g}from"./createHomeSplitExamplePage-BUuBaUet.js";var _=g({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

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
`,Demo:()=>{let{state:g}=h(`useSetup:0:0`,()=>e(()=>({state:l({count:0,note:`等待操作`})})));return o(e=>{let o=r(`div`,e);p(o,`card bg-base-100 shadow`);let l=r(`div`,o);t(o,l),p(l,`card-body`);let h=r(`h2`,l);t(l,h),p(h,`text-2xl font-semibold mb-2`),t(h,d(`shallowRef 只追踪 .value`));let _=r(`p`,l);t(l,_),p(_,`text-base-content/70 leading-7`),t(_,d(`直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。`));let v=r(`div`,l);t(l,v),p(v,`mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2`);let y=r(`div`,v);t(v,y),p(y,`text-lg font-medium`),t(y,d(`当前渲染值：`));let b=a(`rue:slot:anchor`);t(y,b),s(()=>{let e=g.value.count;m(()=>c(e,y,b))});let x=r(`div`,v);t(v,x),t(x,d(`最近操作：`));let S=a(`rue:slot:anchor`);t(x,S),s(()=>{let e=g.value.note;m(()=>c(e,x,S))});let C=r(`div`,v);t(v,C),t(C,d(`内部对象 reactive：`));let w=n(C);t(C,w),s(()=>{f(w,String(u(g.value)))});let T=r(`div`,l);t(l,T),p(T,`mt-4 flex flex-wrap gap-2`);let E=r(`button`,T);t(T,E),p(E,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`),i(E,`click`,()=>{g.value.count+=1,g.value.note=`仅修改内部对象`}),t(E,d(`仅修改内部对象`));let D=r(`button`,T);t(T,D),p(D,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`),i(D,`click`,()=>{g.value={count:g.value.count+1,note:`整体替换 .value`}}),t(D,d(`整体替换 .value`));let O=r(`button`,T);return t(T,O),p(O,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),i(O,`click`,()=>{g.value={count:0,note:`已重置`}}),t(O,d(`重置`)),o})}});export{_ as default};