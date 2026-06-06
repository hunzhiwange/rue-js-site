import{$ as e,Ct as t,J as n,Kt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,qt as p,s as m,tt as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g}from"./vapor-helpers-vapor-CJFAWine.js";import{t as _}from"./createHomeSplitExamplePage-BB_cTfze.js";var v=()=>g(`reactive:1:0`,()=>t({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t}=g(`useSetup:0:0`,()=>r(()=>{let[e]=g(`useState:1:1`,()=>p(v));return{state:e}}));return d(r=>{let p=e(`div`,r);l(p,`card bg-base-100 shadow`);let g=e(`div`,p);o(p,g),l(g,`card-body`);let _=e(`h2`,g);o(g,_),l(_,`text-2xl font-semibold text-purple-600 mb-3`),o(_,u(`React 风格条件渲染`));let v=e(`div`,g);o(g,v),l(v,`flex flex-wrap justify-center gap-2`);let y=e(`button`,v);o(v,y),l(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(y,`click`,()=>{t.show=!t.show});let b=h(y);o(y,b),s(()=>{f(b,t.show?`隐藏详情`:`显示详情`)});let x=e(`button`,v);o(v,x),l(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(x,`click`,()=>{t.level+=1}),o(x,u(`等级+1`));let S=e(`button`,v);o(v,S),l(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),n(S,`click`,()=>{t.message=t.message?``:`Hello`});let C=h(S);o(S,C),s(()=>{f(C,t.message?`清空消息`:`恢复消息`)});let w=c(`rue:slot:anchor`);o(g,w),s(()=>{let n=t.show?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`mt-2`);let r=e(`p`,n);return o(n,r),l(r,`text-gray-700`),o(r,u(`详情区域：仅在 show 为 true 时显示`)),t}):``;a(()=>m(n,g,w))});let T=e(`p`,g);o(g,T),l(T,`text-gray-700`),o(T,u(`等级状态：`));let E=h(T);o(T,E),s(()=>{f(E,t.level>=3?`高级`:`普通`)});let D=c(`rue:slot:anchor`);return o(g,D),s(()=>{let n=t.message?d(()=>{let n=i(),r=e(`p`,n);o(n,r),l(r,`text-gray-700`),o(r,u(`消息：`));let d=c(`rue:slot:anchor`);return o(r,d),s(()=>{let e=t.message;a(()=>m(e,r,d))}),n}):``;a(()=>m(n,g,D))}),p})}});export{y as default};