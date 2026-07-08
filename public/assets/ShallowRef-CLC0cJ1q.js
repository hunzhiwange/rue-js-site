import{It as e,Jt as t,Q as n,Vt as r,Z as i,at as a,bt as o,it as s,l as c,o as l,on as u,pt as d,rt as f,tn as p,tt as m}from"./vapor-runtime-x7F5M-49.js";import{a as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as g}from"./createHomeSplitExamplePage-Da6pk2hb.js";var _=g({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

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
`,Demo:()=>{let{state:g}=h(`useSetup:0:0`,()=>u(()=>({state:e({count:0,note:`等待操作`})})));return c(e=>{let c=f(`div`,e);d(c,`card bg-base-100 shadow`);let u=f(`div`,c);n(c,u),d(u,`card-body`);let h=f(`h2`,u);n(u,h),d(h,`text-2xl font-semibold mb-2`),n(h,s(`shallowRef 只追踪 .value`));let _=f(`p`,u);n(u,_),d(_,`text-base-content/70 leading-7`),n(_,s(`直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。`));let v=f(`div`,u);n(u,v),d(v,`mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2`);let y=f(`div`,v);n(v,y),d(y,`text-lg font-medium`),n(y,s(`当前渲染值：`));let b=m(`rue:slot:anchor`);n(y,b),r(()=>{let e=g.value.count;p(()=>l(e,y,b))});let x=f(`div`,v);n(v,x),n(x,s(`最近操作：`));let S=m(`rue:slot:anchor`);n(x,S),r(()=>{let e=g.value.note;p(()=>l(e,x,S))});let C=f(`div`,v);n(v,C),n(C,s(`内部对象 reactive：`));let w=a(C);n(C,w),r(()=>{o(w,String(t(g.value)))});let T=f(`div`,u);n(u,T),d(T,`mt-4 flex flex-wrap gap-2`);let E=f(`button`,T);n(T,E),d(E,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`),i(E,`click`,()=>{g.value.count+=1,g.value.note=`仅修改内部对象`}),n(E,s(`仅修改内部对象`));let D=f(`button`,T);n(T,D),d(D,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`),i(D,`click`,()=>{g.value={count:g.value.count+1,note:`整体替换 .value`}}),n(D,s(`整体替换 .value`));let O=f(`button`,T);return n(T,O),d(O,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),i(O,`click`,()=>{g.value={count:0,note:`已重置`}}),n(O,s(`重置`)),c})}});export{_ as default};