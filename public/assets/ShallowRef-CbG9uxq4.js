import{Lt as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,kt as l,l as u,lt as d,nt as f,o as p,tt as m}from"./vapor-runtime-CXIalONM.js";import{a as h}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as g}from"./createHomeSplitExamplePage-Br1mQ323.js";var _=g({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

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
`,Demo:()=>{let{state:g}=h(`useSetup:0:0`,()=>o(()=>({state:l({count:0,note:`等待操作`})})));return u(o=>{let l=s(`div`,o);d(l,`card bg-base-100 shadow`);let u=s(`div`,l);i(l,u),d(u,`card-body`);let h=s(`h2`,u);i(u,h),d(h,`text-2xl font-semibold mb-2`),i(h,m(`shallowRef 只追踪 .value`));let _=s(`p`,u);i(u,_),d(_,`text-base-content/70 leading-7`),i(_,m(`直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。`));let v=s(`div`,u);i(u,v),d(v,`mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2`);let y=s(`div`,v);i(v,y),d(y,`text-lg font-medium`),i(y,m(`当前渲染值：`));let b=t(`rue:slot:anchor`);i(y,b),n(()=>{let e=g.value.count;r(()=>p(e,y,b))});let x=s(`div`,v);i(v,x),i(x,m(`最近操作：`));let S=t(`rue:slot:anchor`);i(x,S),n(()=>{let e=g.value.note;r(()=>p(e,x,S))});let C=s(`div`,v);i(v,C),i(C,m(`内部对象 reactive：`));let w=f(C);i(C,w),n(()=>{c(w,String(e(g.value)))});let T=s(`div`,u);i(u,T),d(T,`mt-4 flex flex-wrap gap-2`);let E=s(`button`,T);i(T,E),d(E,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`),a(E,`click`,()=>{g.value.count+=1,g.value.note=`仅修改内部对象`}),i(E,m(`仅修改内部对象`));let D=s(`button`,T);i(T,D),d(D,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`),a(D,`click`,()=>{g.value={count:g.value.count+1,note:`整体替换 .value`}}),i(D,m(`整体替换 .value`));let O=s(`button`,T);return i(T,O),d(O,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),a(O,`click`,()=>{g.value={count:0,note:`已重置`}}),i(O,m(`重置`)),l})}});export{_ as default};