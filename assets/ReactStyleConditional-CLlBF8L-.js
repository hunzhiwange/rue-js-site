import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,Z as s,_t as c,bt as l,c as u,ct as d,j as f,pt as p,u as m,vt as h}from"./vapor-runtime-D3a-68js.js";import{a as g}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as _}from"./createHomeSplitExamplePage-CLNmVfsf.js";var v=()=>g(`reactive:1:0`,()=>d({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

const createConditionalState = () =>
  reactive({
    show: true,
    level: 1,
    message: 'Hello',
  })

const ReactStyleConditionalDemo: FC = () => {
  const [state] = useState(createConditionalState)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-purple-600 mb-3">React 风格条件渲染</h2>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"
            onClick={() => {
              state.show = !state.show
            }}
          >
            {state.show ? '隐藏详情' : '显示详情'}
          </button>
          <button
            className="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200"
            onClick={() => {
              state.level += 1
            }}
          >
            等级+1
          </button>
          <button
            className="rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200"
            onClick={() => {
              state.message = state.message ? '' : 'Hello'
            }}
          >
            {state.message ? '清空消息' : '恢复消息'}
          </button>
        </div>

        {state.show ? (
          <div className="mt-2">
            <p className="text-gray-700">详情区域：仅在 show 为 true 时显示</p>
          </div>
        ) : null}

        <p className="text-gray-700">等级状态：{state.level >= 3 ? '高级' : '普通'}</p>
        {state.message ? <p className="text-gray-700">消息：{state.message}</p> : null}
      </div>
    </div>
  )
}

export default ReactStyleConditionalDemo`,Demo:()=>{let{state:d}=g(`useSetup:0:0`,()=>c(()=>{let[e]=g(`useState:1:1`,()=>h(v));return{state:e}}));return m(()=>{let c=n(`div`);t(c,`card bg-base-100 shadow`);let h=n(`div`);i(c,h),t(h,`card-body`);let g=n(`h2`);i(h,g),t(g,`text-2xl font-semibold text-purple-600 mb-3`),i(g,r(`React 风格条件渲染`));let _=n(`div`);i(h,_),t(_,`flex flex-wrap justify-center gap-2`);let v=n(`button`);i(_,v),t(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),f(v,`click`,()=>{d.show=!d.show});let y=o(v);i(v,y),l(()=>{s(y,d.show?`隐藏详情`:`显示详情`)});let b=n(`button`);i(_,b),t(b,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),f(b,`click`,()=>{d.level+=1}),i(b,r(`等级+1`));let x=n(`button`);i(_,x),t(x,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),f(x,`click`,()=>{d.message=d.message?``:`Hello`});let S=o(x);i(x,S),l(()=>{s(S,d.message?`清空消息`:`恢复消息`)});let C=a(`rue:slot:anchor`);i(h,C),l(()=>{let a=d.show?m(()=>{let a=e(),o=n(`div`);i(a,o),t(o,`mt-2`);let s=n(`p`);return i(o,s),t(s,`text-gray-700`),i(s,r(`详情区域：仅在 show 为 true 时显示`)),a}):``;p(()=>u(a,h,C))});let w=n(`p`);i(h,w),t(w,`text-gray-700`),i(w,r(`等级状态：`));let T=o(w);i(w,T),l(()=>{s(T,d.level>=3?`高级`:`普通`)});let E=a(`rue:slot:anchor`);return i(h,E),l(()=>{let o=d.message?m(()=>{let o=e(),s=n(`p`);i(o,s),t(s,`text-gray-700`),i(s,r(`消息：`));let c=a(`rue:slot:anchor`);return i(s,c),l(()=>{let e=d.message;p(()=>u(e,s,c))}),o}):``;p(()=>u(o,h,E))}),c})}});export{y as default};