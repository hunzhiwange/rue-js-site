import{Cn as e,Kt as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pt as l,st as u,tn as d,vn as f,wn as p}from"./context-8lXZvIn-.js";import{l as m,o as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as _}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var v=()=>g(`reactive:1:0`,()=>t({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t}=g(`useSetup:0:0`,()=>e(()=>{let[e]=g(`useState:1:1`,()=>p(v));return{state:e}}));return m(e=>{let p=l(`div`,e);r(p,`card bg-base-100 shadow`);let g=l(`div`,p);u(p,g),r(g,`card-body`);let _=l(`h2`,g);u(g,_),r(_,`text-2xl font-semibold text-purple-600 mb-3`),u(_,s(`React 风格条件渲染`));let v=l(`div`,g);u(g,v),r(v,`flex flex-wrap justify-center gap-2`);let y=l(`button`,v);u(v,y),r(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),c(y,`click`,()=>{t.show=!t.show});let b=o(y);u(y,b),d(()=>{n(b,t.show?`隐藏详情`:`显示详情`)});let x=l(`button`,v);u(v,x),r(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),c(x,`click`,()=>{t.level+=1}),u(x,s(`等级+1`));let S=l(`button`,v);u(v,S),r(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),c(S,`click`,()=>{t.message=t.message?``:`Hello`});let C=o(S);u(S,C),d(()=>{n(C,t.message?`清空消息`:`恢复消息`)});let w=i(`rue:slot:anchor`);u(g,w),d(()=>{let e=t.show?m(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`mt-2`);let n=l(`p`,t);return u(t,n),r(n,`text-gray-700`),u(n,s(`详情区域：仅在 show 为 true 时显示`)),e}):``;f(()=>h(e,g,w))});let T=l(`p`,g);u(g,T),r(T,`text-gray-700`),u(T,s(`等级状态：`));let E=o(T);u(T,E),d(()=>{n(E,t.level>=3?`高级`:`普通`)});let D=i(`rue:slot:anchor`);return u(g,D),d(()=>{let e=t.message?m(()=>{let e=a(),n=l(`p`,e);u(e,n),r(n,`text-gray-700`),u(n,s(`消息：`));let o=i(`rue:slot:anchor`);return u(n,o),d(()=>{let e=t.message;f(()=>h(e,n,o))}),e}):``;f(()=>h(e,g,D))}),p})}});export{y as default};