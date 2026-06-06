import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Tt as o,U as s,W as c,at as l,l as u,mt as d,s as f,wt as p,yt as m,z as h}from"./vapor-runtime-C1rlwc61.js";import{a as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./createHomeSplitExamplePage-BftZ6-s2.js";var v=()=>g(`reactive:1:0`,()=>d({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:d}=g(`useSetup:0:0`,()=>p(()=>{let[e]=g(`useState:1:1`,()=>o(v));return{state:e}}));return u(o=>{let p=c(`div`,o);e(p,`card bg-base-100 shadow`);let g=c(`div`,p);t(p,g),e(g,`card-body`);let _=c(`h2`,g);t(g,_),e(_,`text-2xl font-semibold text-purple-600 mb-3`),t(_,r(`React 风格条件渲染`));let v=c(`div`,g);t(g,v),e(v,`flex flex-wrap justify-center gap-2`);let y=c(`button`,v);t(v,y),e(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),h(y,`click`,()=>{d.show=!d.show});let b=a(y);t(y,b),n(()=>{l(b,d.show?`隐藏详情`:`显示详情`)});let x=c(`button`,v);t(v,x),e(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),h(x,`click`,()=>{d.level+=1}),t(x,r(`等级+1`));let S=c(`button`,v);t(v,S),e(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),h(S,`click`,()=>{d.message=d.message?``:`Hello`});let C=a(S);t(S,C),n(()=>{l(C,d.message?`清空消息`:`恢复消息`)});let w=i(`rue:slot:anchor`);t(g,w),n(()=>{let n=d.show?u(()=>{let n=s(),i=c(`div`,n);t(n,i),e(i,`mt-2`);let a=c(`p`,i);return t(i,a),e(a,`text-gray-700`),t(a,r(`详情区域：仅在 show 为 true 时显示`)),n}):``;m(()=>f(n,g,w))});let T=c(`p`,g);t(g,T),e(T,`text-gray-700`),t(T,r(`等级状态：`));let E=a(T);t(T,E),n(()=>{l(E,d.level>=3?`高级`:`普通`)});let D=i(`rue:slot:anchor`);return t(g,D),n(()=>{let a=d.message?u(()=>{let a=s(),o=c(`p`,a);t(a,o),e(o,`text-gray-700`),t(o,r(`消息：`));let l=i(`rue:slot:anchor`);return t(o,l),n(()=>{let e=d.message;m(()=>f(e,o,l))}),a}):``;m(()=>f(a,g,D))}),p})}});export{y as default};