import{$t as e,Kt as t,Pt as n,Q as r,Z as i,dt as a,et as o,in as s,it as c,l,nt as u,o as d,rt as f,vt as p,zt as m}from"./vapor-runtime-DsQWl-IB.js";import{a as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as g}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var _=g({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

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
`,Demo:()=>{let{state:g}=h(`useSetup:0:0`,()=>s(()=>({state:n({count:0,note:`等待操作`})})));return l(n=>{let s=u(`div`,n);a(s,`card bg-base-100 shadow`);let l=u(`div`,s);r(s,l),a(l,`card-body`);let h=u(`h2`,l);r(l,h),a(h,`text-2xl font-semibold mb-2`),r(h,f(`shallowRef 只追踪 .value`));let _=u(`p`,l);r(l,_),a(_,`text-base-content/70 leading-7`),r(_,f(`直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。`));let v=u(`div`,l);r(l,v),a(v,`mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2`);let y=u(`div`,v);r(v,y),a(y,`text-lg font-medium`),r(y,f(`当前渲染值：`));let b=o(`rue:slot:anchor`);r(y,b),m(()=>{let t=g.value.count;e(()=>d(t,y,b))});let x=u(`div`,v);r(v,x),r(x,f(`最近操作：`));let S=o(`rue:slot:anchor`);r(x,S),m(()=>{let t=g.value.note;e(()=>d(t,x,S))});let C=u(`div`,v);r(v,C),r(C,f(`内部对象 reactive：`));let w=c(C);r(C,w),m(()=>{p(w,String(t(g.value)))});let T=u(`div`,l);r(l,T),a(T,`mt-4 flex flex-wrap gap-2`);let E=u(`button`,T);r(T,E),a(E,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`),i(E,`click`,()=>{g.value.count+=1,g.value.note=`仅修改内部对象`}),r(E,f(`仅修改内部对象`));let D=u(`button`,T);r(T,D),a(D,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`),i(D,`click`,()=>{g.value={count:g.value.count+1,note:`整体替换 .value`}}),r(D,f(`整体替换 .value`));let O=u(`button`,T);return r(T,O),a(O,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),i(O,`click`,()=>{g.value={count:0,note:`已重置`}}),r(O,f(`重置`)),s})}});export{_ as default};