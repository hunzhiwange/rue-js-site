import{Dt as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,d as c,gt as l,kt as u,l as d,q as f,st as p,tt as m,xt as h}from"./vapor-runtime-EUvELKQT.js";import{a as g}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as _}from"./createHomeSplitExamplePage-BuifU8mn.js";var v=()=>g(`reactive:1:0`,()=>l({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:l}=g(`useSetup:0:0`,()=>t(()=>{let[t]=g(`useState:1:1`,()=>e(v));return{state:t}}));return c(e=>{let t=a(`div`,e);m(t,`card bg-base-100 shadow`);let g=a(`div`,t);r(t,g),m(g,`card-body`);let _=a(`h2`,g);r(g,_),m(_,`text-2xl font-semibold text-purple-600 mb-3`),r(_,f(`React 风格条件渲染`));let v=a(`div`,g);r(g,v),m(v,`flex flex-wrap justify-center gap-2`);let y=a(`button`,v);r(v,y),m(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),o(y,`click`,()=>{l.show=!l.show});let b=i(y);r(y,b),u(()=>{p(b,l.show?`隐藏详情`:`显示详情`)});let x=a(`button`,v);r(v,x),m(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),o(x,`click`,()=>{l.level+=1}),r(x,f(`等级+1`));let S=a(`button`,v);r(v,S),m(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),o(S,`click`,()=>{l.message=l.message?``:`Hello`});let C=i(S);r(S,C),u(()=>{p(C,l.message?`清空消息`:`恢复消息`)});let w=s(`rue:slot:anchor`);r(g,w),u(()=>{let e=l.show?c(()=>{let e=n(),t=a(`div`,e);r(e,t),m(t,`mt-2`);let i=a(`p`,t);return r(t,i),m(i,`text-gray-700`),r(i,f(`详情区域：仅在 show 为 true 时显示`)),e}):``;h(()=>d(e,g,w))});let T=a(`p`,g);r(g,T),m(T,`text-gray-700`),r(T,f(`等级状态：`));let E=i(T);r(T,E),u(()=>{p(E,l.level>=3?`高级`:`普通`)});let D=s(`rue:slot:anchor`);return r(g,D),u(()=>{let e=l.message?c(()=>{let e=n(),t=a(`p`,e);r(e,t),m(t,`text-gray-700`),r(t,f(`消息：`));let i=s(`rue:slot:anchor`);return r(t,i),u(()=>{let e=l.message;h(()=>d(e,t,i))}),e}):``;h(()=>d(e,g,D))}),t})}});export{y as default};