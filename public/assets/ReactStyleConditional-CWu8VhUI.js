import{$ as e,Et as t,Q as n,Qt as r,Wt as i,X as a,Xt as o,Y as s,Yt as c,et as l,ht as u,l as d,lt as f,nt as p,o as m,tt as h}from"./vapor-runtime-CXIalONM.js";import{a as g}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as _}from"./createHomeSplitExamplePage-Br1mQ323.js";var v=()=>g(`reactive:1:0`,()=>t({show:!0,level:1,message:`Hello`})),y=_({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t}=g(`useSetup:0:0`,()=>c(()=>{let[e]=g(`useState:1:1`,()=>o(v));return{state:e}}));return d(o=>{let c=l(`div`,o);f(c,`card bg-base-100 shadow`);let g=l(`div`,c);a(c,g),f(g,`card-body`);let _=l(`h2`,g);a(g,_),f(_,`text-2xl font-semibold text-purple-600 mb-3`),a(_,h(`React 风格条件渲染`));let v=l(`div`,g);a(g,v),f(v,`flex flex-wrap justify-center gap-2`);let y=l(`button`,v);a(v,y),f(y,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),s(y,`click`,()=>{t.show=!t.show});let b=p(y);a(y,b),r(()=>{u(b,t.show?`隐藏详情`:`显示详情`)});let x=l(`button`,v);a(v,x),f(x,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),s(x,`click`,()=>{t.level+=1}),a(x,h(`等级+1`));let S=l(`button`,v);a(v,S),f(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),s(S,`click`,()=>{t.message=t.message?``:`Hello`});let C=p(S);a(S,C),r(()=>{u(C,t.message?`清空消息`:`恢复消息`)});let w=n(`rue:slot:anchor`);a(g,w),r(()=>{let n=t.show?d(()=>{let t=e(),n=l(`div`,t);a(t,n),f(n,`mt-2`);let r=l(`p`,n);return a(n,r),f(r,`text-gray-700`),a(r,h(`详情区域：仅在 show 为 true 时显示`)),t}):``;i(()=>m(n,g,w))});let T=l(`p`,g);a(g,T),f(T,`text-gray-700`),a(T,h(`等级状态：`));let E=p(T);a(T,E),r(()=>{u(E,t.level>=3?`高级`:`普通`)});let D=n(`rue:slot:anchor`);return a(g,D),r(()=>{let o=t.message?d(()=>{let o=e(),s=l(`p`,o);a(o,s),f(s,`text-gray-700`),a(s,h(`消息：`));let c=n(`rue:slot:anchor`);return a(s,c),r(()=>{let e=t.message;i(()=>m(e,s,c))}),o}):``;i(()=>m(o,g,D))}),c})}});export{y as default};