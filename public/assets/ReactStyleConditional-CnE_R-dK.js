import{$ as e,Ht as t,J as n,Jt as r,Q as i,X as a,Xt as o,Z as s,et as c,l,pt as u,q as d,qt as f,s as p,st as m,wt as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as _}from"./createHomeSplitExamplePage-C98rg19g.js";var v=()=>g(`reactive:1:0`,()=>h({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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

export default ReactStyleConditionalDemo
`,Demo:()=>{let{state:h}=g(`useSetup:0:0`,()=>f(()=>{let[e]=g(`useState:1:1`,()=>r(v));return{state:e}}));return l(r=>{let f=i(`div`,r);m(f,`card bg-base-100 shadow`);let g=i(`div`,f);n(f,g),m(g,`card-body`);let _=i(`h2`,g);n(g,_),m(_,`text-2xl font-semibold text-purple-600 mb-3`),n(_,e(`React 风格条件渲染`));let v=i(`div`,g);n(g,v),m(v,`flex flex-wrap justify-center gap-2`);let y=i(`button`,v);n(v,y),m(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),d(y,`click`,()=>{h.show=!h.show});let b=c(y);n(y,b),o(()=>{u(b,h.show?`隐藏详情`:`显示详情`)});let x=i(`button`,v);n(v,x),m(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),d(x,`click`,()=>{h.level+=1}),n(x,e(`等级+1`));let S=i(`button`,v);n(v,S),m(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),d(S,`click`,()=>{h.message=h.message?``:`Hello`});let C=c(S);n(S,C),o(()=>{u(C,h.message?`清空消息`:`恢复消息`)});let w=a(`rue:slot:anchor`);n(g,w),o(()=>{let r=h.show?l(()=>{let t=s(),r=i(`div`,t);n(t,r),m(r,`mt-2`);let a=i(`p`,r);return n(r,a),m(a,`text-gray-700`),n(a,e(`详情区域：仅在 show 为 true 时显示`)),t}):``;t(()=>p(r,g,w))});let T=i(`p`,g);n(g,T),m(T,`text-gray-700`),n(T,e(`等级状态：`));let E=c(T);n(T,E),o(()=>{u(E,h.level>=3?`高级`:`普通`)});let D=a(`rue:slot:anchor`);return n(g,D),o(()=>{let r=h.message?l(()=>{let r=s(),c=i(`p`,r);n(r,c),m(c,`text-gray-700`),n(c,e(`消息：`));let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=h.message;t(()=>p(e,c,l))}),r}):``;t(()=>p(r,g,D))}),f})}});export{y as default};