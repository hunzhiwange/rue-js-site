import{$ as e,Ht as t,J as n,Jt as r,Q as i,Tt as a,Xt as o,Y as s,Z as c,ct as l,et as u,l as d,mt as f,qt as p,s as m,tt as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as _}from"./createHomeSplitExamplePage-CJbW_xoB.js";var v=()=>g(`reactive:1:0`,()=>a({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:a}=g(`useSetup:0:0`,()=>p(()=>{let[e]=g(`useState:1:1`,()=>r(v));return{state:e}}));return d(r=>{let p=e(`div`,r);l(p,`card bg-base-100 shadow`);let g=e(`div`,p);s(p,g),l(g,`card-body`);let _=e(`h2`,g);s(g,_),l(_,`text-2xl font-semibold text-purple-600 mb-3`),s(_,u(`React 风格条件渲染`));let v=e(`div`,g);s(g,v),l(v,`flex flex-wrap justify-center gap-2`);let y=e(`button`,v);s(v,y),l(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(y,`click`,()=>{a.show=!a.show});let b=h(y);s(y,b),o(()=>{f(b,a.show?`隐藏详情`:`显示详情`)});let x=e(`button`,v);s(v,x),l(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(x,`click`,()=>{a.level+=1}),s(x,u(`等级+1`));let S=e(`button`,v);s(v,S),l(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),n(S,`click`,()=>{a.message=a.message?``:`Hello`});let C=h(S);s(S,C),o(()=>{f(C,a.message?`清空消息`:`恢复消息`)});let w=c(`rue:slot:anchor`);s(g,w),o(()=>{let n=a.show?d(()=>{let t=i(),n=e(`div`,t);s(t,n),l(n,`mt-2`);let r=e(`p`,n);return s(n,r),l(r,`text-gray-700`),s(r,u(`详情区域：仅在 show 为 true 时显示`)),t}):``;t(()=>m(n,g,w))});let T=e(`p`,g);s(g,T),l(T,`text-gray-700`),s(T,u(`等级状态：`));let E=h(T);s(T,E),o(()=>{f(E,a.level>=3?`高级`:`普通`)});let D=c(`rue:slot:anchor`);return s(g,D),o(()=>{let n=a.message?d(()=>{let n=i(),r=e(`p`,n);s(n,r),l(r,`text-gray-700`),s(r,u(`消息：`));let d=c(`rue:slot:anchor`);return s(r,d),o(()=>{let e=a.message;t(()=>m(e,r,d))}),n}):``;t(()=>m(n,g,D))}),p})}});export{y as default};