import{$ as e,$t as t,At as n,Gt as r,Rt as i,X as a,Xt as o,Z as s,gt as c,l,nt as u,o as d,rt as f,tt as p,ut as m}from"./vapor-runtime-CKrmRMZX.js";import{a as h}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as g}from"./createHomeSplitExamplePage-Q644r2Bq.js";var _=g({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

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
`,Demo:()=>{let{state:g}=h(`useSetup:0:0`,()=>o(()=>({state:n({count:0,note:`等待操作`})})));return l(n=>{let o=p(`div`,n);m(o,`card bg-base-100 shadow`);let l=p(`div`,o);s(o,l),m(l,`card-body`);let h=p(`h2`,l);s(l,h),m(h,`text-2xl font-semibold mb-2`),s(h,u(`shallowRef 只追踪 .value`));let _=p(`p`,l);s(l,_),m(_,`text-base-content/70 leading-7`),s(_,u(`直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。`));let v=p(`div`,l);s(l,v),m(v,`mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2`);let y=p(`div`,v);s(v,y),m(y,`text-lg font-medium`),s(y,u(`当前渲染值：`));let b=e(`rue:slot:anchor`);s(y,b),t(()=>{let e=g.value.count;r(()=>d(e,y,b))});let x=p(`div`,v);s(v,x),s(x,u(`最近操作：`));let S=e(`rue:slot:anchor`);s(x,S),t(()=>{let e=g.value.note;r(()=>d(e,x,S))});let C=p(`div`,v);s(v,C),s(C,u(`内部对象 reactive：`));let w=f(C);s(C,w),t(()=>{c(w,String(i(g.value)))});let T=p(`div`,l);s(l,T),m(T,`mt-4 flex flex-wrap gap-2`);let E=p(`button`,T);s(T,E),m(E,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`),a(E,`click`,()=>{g.value.count+=1,g.value.note=`仅修改内部对象`}),s(E,u(`仅修改内部对象`));let D=p(`button`,T);s(T,D),m(D,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`),a(D,`click`,()=>{g.value={count:g.value.count+1,note:`整体替换 .value`}}),s(D,u(`整体替换 .value`));let O=p(`button`,T);return s(T,O),m(O,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(O,`click`,()=>{g.value={count:0,note:`已重置`}}),s(O,u(`重置`)),o})}});export{_ as default};