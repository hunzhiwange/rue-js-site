import{Cn as e,Mt as t,Tt as n,Xt as r,dn as i,dt as a,ht as o,mt as s,ot as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m}from"./vapor-runtime-ygJWVcNn.js";import{a as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as g}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var _=g({title:`shallowRef 浅层 ref`,source:`import { type FC, isReactive, shallowRef } from '@rue-js/rue'

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
`,Demo:()=>{let{state:g}=h(`useSetup:0:0`,()=>e(()=>({state:r({count:0,note:`等待操作`})})));return p(e=>{let r=l(`div`,e);n(r,`card bg-base-100 shadow`);let p=l(`div`,r);u(r,p),n(p,`card-body`);let h=l(`h2`,p);u(p,h),n(h,`text-2xl font-semibold mb-2`),u(h,s(`shallowRef 只追踪 .value`));let _=l(`p`,p);u(p,_),n(_,`text-base-content/70 leading-7`),u(_,s(`直接修改内部对象不会触发界面更新；只有整体替换 .value，依赖 shallowRef 的 effect 和视图才会重新运行。`));let v=l(`div`,p);u(p,v),n(v,`mt-4 rounded-box border border-base-300 bg-base-200/40 p-4 space-y-2`);let y=l(`div`,v);u(v,y),n(y,`text-lg font-medium`),u(y,s(`当前渲染值：`));let b=a(`rue:slot:anchor`);u(y,b),d(()=>{let e=g.value.count;f(()=>m(e,y,b))});let x=l(`div`,v);u(v,x),u(x,s(`最近操作：`));let S=a(`rue:slot:anchor`);u(x,S),d(()=>{let e=g.value.note;f(()=>m(e,x,S))});let C=l(`div`,v);u(v,C),u(C,s(`内部对象 reactive：`));let w=o(C);u(C,w),d(()=>{t(w,String(i(g.value)))});let T=l(`div`,p);u(p,T),n(T,`mt-4 flex flex-wrap gap-2`);let E=l(`button`,T);u(T,E),n(E,`rounded-lg border border-amber-500 bg-amber-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-amber-600 hover:bg-amber-600 focus:ring focus:ring-amber-200`),c(E,`click`,()=>{g.value.count+=1,g.value.note=`仅修改内部对象`}),u(E,s(`仅修改内部对象`));let D=l(`button`,T);u(T,D),n(D,`rounded-lg border border-emerald-600 bg-emerald-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700 focus:ring focus:ring-emerald-200`),c(D,`click`,()=>{g.value={count:g.value.count+1,note:`整体替换 .value`}}),u(D,s(`整体替换 .value`));let O=l(`button`,T);return u(T,O),n(O,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),c(O,`click`,()=>{g.value={count:0,note:`已重置`}}),u(O,s(`重置`)),r})}});export{_ as default};