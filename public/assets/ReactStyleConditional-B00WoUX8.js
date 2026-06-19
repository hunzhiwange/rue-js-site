import{$ as e,$t as t,Dt as n,Gt as r,X as i,Xt as a,Z as o,Zt as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as _}from"./createHomeSplitExamplePage-Q644r2Bq.js";var v=()=>g(`reactive:1:0`,()=>n({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:n}=g(`useSetup:0:0`,()=>a(()=>{let[e]=g(`useState:1:1`,()=>s(v));return{state:e}}));return u(a=>{let s=m(`div`,a);h(s,`card bg-base-100 shadow`);let g=m(`div`,s);o(s,g),h(g,`card-body`);let _=m(`h2`,g);o(g,_),h(_,`text-2xl font-semibold text-purple-600 mb-3`),o(_,d(`React 风格条件渲染`));let v=m(`div`,g);o(g,v),h(v,`flex flex-wrap justify-center gap-2`);let y=m(`button`,v);o(v,y),h(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),i(y,`click`,()=>{n.show=!n.show});let b=p(y);o(y,b),t(()=>{l(b,n.show?`隐藏详情`:`显示详情`)});let x=m(`button`,v);o(v,x),h(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),i(x,`click`,()=>{n.level+=1}),o(x,d(`等级+1`));let S=m(`button`,v);o(v,S),h(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),i(S,`click`,()=>{n.message=n.message?``:`Hello`});let C=p(S);o(S,C),t(()=>{l(C,n.message?`清空消息`:`恢复消息`)});let w=e(`rue:slot:anchor`);o(g,w),t(()=>{let e=n.show?u(()=>{let e=c(),t=m(`div`,e);o(e,t),h(t,`mt-2`);let n=m(`p`,t);return o(t,n),h(n,`text-gray-700`),o(n,d(`详情区域：仅在 show 为 true 时显示`)),e}):``;r(()=>f(e,g,w))});let T=m(`p`,g);o(g,T),h(T,`text-gray-700`),o(T,d(`等级状态：`));let E=p(T);o(T,E),t(()=>{l(E,n.level>=3?`高级`:`普通`)});let D=e(`rue:slot:anchor`);return o(g,D),t(()=>{let i=n.message?u(()=>{let i=c(),a=m(`p`,i);o(i,a),h(a,`text-gray-700`),o(a,d(`消息：`));let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.message;r(()=>f(e,a,s))}),i}):``;r(()=>f(i,g,D))}),s})}});export{y as default};