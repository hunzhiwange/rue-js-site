import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,d as c,dt as l,gt as u,ht as d,l as f,ot as p,vt as m,z as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as _}from"./createHomeSplitExamplePage-2wtBgDCk.js";var v=()=>g(`reactive:1:0`,()=>p({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:p}=g(`useSetup:0:0`,()=>d(()=>{let[e]=g(`useState:1:1`,()=>u(v));return{state:e}}));return c(u=>{let d=r(`div`,u);n(d,`card bg-base-100 shadow`);let g=r(`div`,d);a(d,g),n(g,`card-body`);let _=r(`h2`,g);a(g,_),n(_,`text-2xl font-semibold text-purple-600 mb-3`),a(_,s(`React 风格条件渲染`));let v=r(`div`,g);a(g,v),n(v,`flex flex-wrap justify-center gap-2`);let y=r(`button`,v);a(v,y),n(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),i(y,`click`,()=>{p.show=!p.show});let b=h(y);a(y,b),m(()=>{o(b,p.show?`隐藏详情`:`显示详情`)});let x=r(`button`,v);a(v,x),n(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),i(x,`click`,()=>{p.level+=1}),a(x,s(`等级+1`));let S=r(`button`,v);a(v,S),n(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),i(S,`click`,()=>{p.message=p.message?``:`Hello`});let C=h(S);a(S,C),m(()=>{o(C,p.message?`清空消息`:`恢复消息`)});let w=e(`rue:slot:anchor`);a(g,w),m(()=>{let e=p.show?c(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`mt-2`);let o=r(`p`,i);return a(i,o),n(o,`text-gray-700`),a(o,s(`详情区域：仅在 show 为 true 时显示`)),e}):``;l(()=>f(e,g,w))});let T=r(`p`,g);a(g,T),n(T,`text-gray-700`),a(T,s(`等级状态：`));let E=h(T);a(T,E),m(()=>{o(E,p.level>=3?`高级`:`普通`)});let D=e(`rue:slot:anchor`);return a(g,D),m(()=>{let i=p.message?c(()=>{let i=t(),o=r(`p`,i);a(i,o),n(o,`text-gray-700`),a(o,s(`消息：`));let c=e(`rue:slot:anchor`);return a(o,c),m(()=>{let e=p.message;l(()=>f(e,o,c))}),i}):``;l(()=>f(i,g,D))}),d})}});export{y as default};