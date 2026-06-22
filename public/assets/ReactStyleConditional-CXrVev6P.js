import{Nt as e,Q as t,Vt as n,Z as r,at as i,bt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,sn as p,tn as m,tt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as _}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var v=()=>g(`reactive:1:0`,()=>e({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:e}=g(`useSetup:0:0`,()=>u(()=>{let[e]=g(`useState:1:1`,()=>p(v));return{state:e}}));return s(u=>{let p=f(`div`,u);d(p,`card bg-base-100 shadow`);let g=f(`div`,p);t(p,g),d(g,`card-body`);let _=f(`h2`,g);t(g,_),d(_,`text-2xl font-semibold text-purple-600 mb-3`),t(_,o(`React 风格条件渲染`));let v=f(`div`,g);t(g,v),d(v,`flex flex-wrap justify-center gap-2`);let y=f(`button`,v);t(v,y),d(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),r(y,`click`,()=>{e.show=!e.show});let b=i(y);t(y,b),n(()=>{a(b,e.show?`隐藏详情`:`显示详情`)});let x=f(`button`,v);t(v,x),d(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),r(x,`click`,()=>{e.level+=1}),t(x,o(`等级+1`));let S=f(`button`,v);t(v,S),d(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),r(S,`click`,()=>{e.message=e.message?``:`Hello`});let C=i(S);t(S,C),n(()=>{a(C,e.message?`清空消息`:`恢复消息`)});let w=h(`rue:slot:anchor`);t(g,w),n(()=>{let n=e.show?s(()=>{let e=c(),n=f(`div`,e);t(e,n),d(n,`mt-2`);let r=f(`p`,n);return t(n,r),d(r,`text-gray-700`),t(r,o(`详情区域：仅在 show 为 true 时显示`)),e}):``;m(()=>l(n,g,w))});let T=f(`p`,g);t(g,T),d(T,`text-gray-700`),t(T,o(`等级状态：`));let E=i(T);t(T,E),n(()=>{a(E,e.level>=3?`高级`:`普通`)});let D=h(`rue:slot:anchor`);return t(g,D),n(()=>{let r=e.message?s(()=>{let r=c(),i=f(`p`,r);t(r,i),d(i,`text-gray-700`),t(i,o(`消息：`));let a=h(`rue:slot:anchor`);return t(i,a),n(()=>{let t=e.message;m(()=>l(t,i,a))}),r}):``;m(()=>l(r,g,D))}),p})}});export{y as default};