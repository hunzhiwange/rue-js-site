import{Gt as e,H as t,Kt as n,Qt as r,Ut as i,V as a,Vt as o,Wt as s,Y as c,Yt as l,Zt as u,et as d,fn as f,gn as p,hn as m,mn as h,sn as g,u as _,yn as v,yt as y}from"./rue-runtime-Cv6BZekS.js";import{t as b}from"./createHomeSplitExamplePage-DqLcVC_n.js";var x=e([`show`],[!1]),S=e([`message`],[!1]),C=e([`level`],[!1]),w=v(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-purple-600 mb-3">React 风格条件渲染</h2><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"><!--rue:text-hole:0--></button><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">等级+1</button><button class="rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200"><!--rue:text-hole:1--></button></div><!--rue:text-hole:2--><p class="text-gray-700">等级状态：<!--rue:text-hole:3--></p><!--rue:text-hole:4--></div></div>`),T=()=>({show:!0,level:1,message:`Hello`}),E=(e,t,a)=>{let[o]=d(`ReactStyleConditionalDemo:hook:0`,T);return c(()=>s(e=>{let t=w().content.cloneNode(!0).firstChild,a=t.childNodes[0].childNodes[1].childNodes[0],c=t.childNodes[0].childNodes[1].childNodes[1],d=t.childNodes[0].childNodes[1].childNodes[2],v=t.childNodes[0].childNodes[1].childNodes[0].childNodes[0],b=v.parentNode,T=t.childNodes[0].childNodes[1].childNodes[2].childNodes[0],E=T.parentNode,D=t.childNodes[0].childNodes[2],O=D.parentNode,k=t.childNodes[0].childNodes[3].childNodes[1],A=k.parentNode,j=t.childNodes[0].childNodes[4],M=j.parentNode;a.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),g(_(e,a,`click`,()=>()=>{l(u(o))(`show`).value=!n(o,x)})),c.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),g(_(e,c,`click`,()=>()=>{l(u(o))(`level`).value+=1})),d.setAttribute(`class`,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),g(_(e,d,`click`,()=>()=>{l(u(o))(`message`).value=n(o,S)?``:`Hello`}));let N=p(``);b.insertBefore(N,v),b.removeChild(v),r(N,()=>n(o,x)?`隐藏详情`:`显示详情`);let P=p(``);E.insertBefore(P,T),E.removeChild(T),r(P,()=>n(o,S)?`清空消息`:`恢复消息`),i(O,D,()=>n(o,x)?{__rue_compiled_branch_key:!0,create:()=>y(e=>{let t=m(`div`,e);t.setAttribute(`class`,`mt-2`);let n=m(`p`,t);return f(t,n),n.setAttribute(`class`,`text-gray-700`),f(n,p(`详情区域：仅在 show 为 true 时显示`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>y(e=>{let t=h();return[t.firstChild,t.lastChild]})});let F=p(``);return A.insertBefore(F,k),A.removeChild(k),r(F,()=>n(o,C)>=3?`高级`:`普通`),i(M,j,()=>n(o,S)?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=m(`p`,e);t.setAttribute(`class`,`text-gray-700`),f(t,p(`消息：`));let i=p(``);return f(t,i),r(i,()=>n(o,S)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>y(e=>{let t=h();return[t.firstChild,t.lastChild]})}),[t,t]}))},D=`import { type FC, useState } from '@rue-js/rue'

const createConditionalState = () => ({
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
`,O=(e,n,r)=>a(b,()=>({options:{title:`条件渲染`,source:D},children:(e,n,r)=>{let i=()=>s(e=>{let n=h();t(n,E,()=>({}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():o(e,r,i)}}));export{O as default};