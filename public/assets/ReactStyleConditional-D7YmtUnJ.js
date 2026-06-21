import{$t as e,Q as t,Z as n,an as r,dt as i,et as a,in as o,it as s,jt as c,l,nt as u,o as d,rt as f,tt as p,vt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as _}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var v=()=>g(`reactive:1:0`,()=>c({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:c}=g(`useSetup:0:0`,()=>o(()=>{let[e]=g(`useState:1:1`,()=>r(v));return{state:e}}));return l(r=>{let o=u(`div`,r);i(o,`card bg-base-100 shadow`);let g=u(`div`,o);t(o,g),i(g,`card-body`);let _=u(`h2`,g);t(g,_),i(_,`text-2xl font-semibold text-purple-600 mb-3`),t(_,f(`React 风格条件渲染`));let v=u(`div`,g);t(g,v),i(v,`flex flex-wrap justify-center gap-2`);let y=u(`button`,v);t(v,y),i(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),n(y,`click`,()=>{c.show=!c.show});let b=s(y);t(y,b),h(()=>{m(b,c.show?`隐藏详情`:`显示详情`)});let x=u(`button`,v);t(v,x),i(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),n(x,`click`,()=>{c.level+=1}),t(x,f(`等级+1`));let S=u(`button`,v);t(v,S),i(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),n(S,`click`,()=>{c.message=c.message?``:`Hello`});let C=s(S);t(S,C),h(()=>{m(C,c.message?`清空消息`:`恢复消息`)});let w=a(`rue:slot:anchor`);t(g,w),h(()=>{let n=c.show?l(()=>{let e=p(),n=u(`div`,e);t(e,n),i(n,`mt-2`);let r=u(`p`,n);return t(n,r),i(r,`text-gray-700`),t(r,f(`详情区域：仅在 show 为 true 时显示`)),e}):``;e(()=>d(n,g,w))});let T=u(`p`,g);t(g,T),i(T,`text-gray-700`),t(T,f(`等级状态：`));let E=s(T);t(T,E),h(()=>{m(E,c.level>=3?`高级`:`普通`)});let D=a(`rue:slot:anchor`);return t(g,D),h(()=>{let n=c.message?l(()=>{let n=p(),r=u(`p`,n);t(n,r),i(r,`text-gray-700`),t(r,f(`消息：`));let o=a(`rue:slot:anchor`);return t(r,o),h(()=>{let t=c.message;e(()=>d(t,r,o))}),n}):``;e(()=>d(n,g,D))}),o})}});export{y as default};