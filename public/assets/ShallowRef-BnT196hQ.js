import{$ as e,Et as t,J as n,Kt as r,Pt as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,s as p,tt as m}from"./vapor-runtime-DHPuOjqh.js";import{a as h}from"./vapor-helpers-vapor-CJFAWine.js";import{t as g}from"./createHomeSplitExamplePage-BB_cTfze.js";var _=g({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

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
`,Demo:()=>{let{state:g}=h(`useSetup:0:0`,()=>r(()=>({state:t({count:0,note:`等待操作`})})));return d(t=>{let r=e(`div`,t);l(r,`card bg-base-100 shadow`);let d=e(`div`,r);o(r,d),l(d,`card-body`);let h=e(`h2`,d);o(d,h),l(h,`text-2xl font-semibold mb-2`),o(h,u(`shallowRef 只追踪 .value`));let _=e(`p`,d);o(d,_),l(_,`text-base-content/70 leading-7`),o(_,u(`直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。`));let v=e(`div`,d);o(d,v),l(v,`mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2`);let y=e(`div`,v);o(v,y),l(y,`text-lg font-medium`),o(y,u(`当前渲染值：`));let b=c(`rue:slot:anchor`);o(y,b),s(()=>{let e=g.value.count;a(()=>p(e,y,b))});let x=e(`div`,v);o(v,x),o(x,u(`最近操作：`));let S=c(`rue:slot:anchor`);o(x,S),s(()=>{let e=g.value.note;a(()=>p(e,x,S))});let C=e(`div`,v);o(v,C),o(C,u(`内部对象 reactive：`));let w=m(C);o(C,w),s(()=>{f(w,String(i(g.value)))});let T=e(`div`,d);o(d,T),l(T,`mt-4 flex flex-wrap gap-2`);let E=e(`button`,T);o(T,E),l(E,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`),n(E,`click`,()=>{g.value.count+=1,g.value.note=`仅修改内部对象`}),o(E,u(`仅修改内部对象`));let D=e(`button`,T);o(T,D),l(D,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`),n(D,`click`,()=>{g.value={count:g.value.count+1,note:`整体替换 .value`}}),o(D,u(`整体替换 .value`));let O=e(`button`,T);return o(T,O),l(O,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(O,`click`,()=>{g.value={count:0,note:`已重置`}}),o(O,u(`重置`)),r})}});export{_ as default};