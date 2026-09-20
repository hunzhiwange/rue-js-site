import{F as e,Gt as t,Kt as n,P as r,Qt as i,Ut as a,V as o,Vt as s,Wt as c,Yt as l,Zt as u,fn as d,gn as f,hn as p,mn as m,nt as h,sn as g,st as _,u as v,yn as y}from"./rue-runtime-BWbIfNT8.js";import{t as b}from"./createHomeSplitExamplePage-Cjn7V321.js";var x=t([`show`],[!1]),S=t([`message`],[!1]),C=t([`level`],[!1]),w=y(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-purple-600 mb-3">React 风格条件渲染</h2><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"><!--rue:text-hole:0--></button><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">等级+1</button><button class="rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200"><!--rue:text-hole:1--></button></div><!--rue:text-hole:2--><p class="text-gray-700">等级状态：<!--rue:text-hole:3--></p><!--rue:text-hole:4--></div></div>`),T=()=>({show:!0,level:1,message:`Hello`}),E=(e,t,r)=>{let[s]=_(`ReactStyleConditionalDemo:hook:0`,T);return h(()=>c(e=>{let t=w().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1].childNodes[0],h=t.childNodes[0].childNodes[1].childNodes[1],_=t.childNodes[0].childNodes[1].childNodes[2],y=t.childNodes[0].childNodes[1].childNodes[0].childNodes[0],b=y.parentNode,T=t.childNodes[0].childNodes[1].childNodes[2].childNodes[0],E=T.parentNode,D=t.childNodes[0].childNodes[2],O=D.parentNode,k=t.childNodes[0].childNodes[3].childNodes[1],A=k.parentNode,j=t.childNodes[0].childNodes[4],M=j.parentNode;r.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`),g(v(e,r,`click`,()=>()=>{l(u(s))(`show`).value=!n(s,x)})),h.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`),g(v(e,h,`click`,()=>()=>{l(u(s))(`level`).value+=1})),_.setAttribute(`class`,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`),g(v(e,_,`click`,()=>()=>{l(u(s))(`message`).value=n(s,S)?``:`Hello`}));let N=f(``);b.insertBefore(N,y),b.removeChild(y),i(N,()=>n(s,x)?`隐藏详情`:`显示详情`);let P=f(``);E.insertBefore(P,T),E.removeChild(T),i(P,()=>n(s,S)?`清空消息`:`恢复消息`),a(O,D,()=>n(s,x)?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let t=p(`div`,e);t.setAttribute(`class`,`mt-2`);let n=p(`p`,t);return d(t,n),n.setAttribute(`class`,`text-gray-700`),d(n,f(`详情区域：仅在 show 为 true 时显示`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=m();return[t.firstChild,t.lastChild]})});let F=f(``);return A.insertBefore(F,k),A.removeChild(k),i(F,()=>n(s,C)>=3?`高级`:`普通`),a(M,j,()=>n(s,S)?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=p(`p`,e);t.setAttribute(`class`,`text-gray-700`),d(t,f(`消息：`));let r=f(``);return d(t,r),i(r,()=>n(s,S)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=m();return[t.firstChild,t.lastChild]})}),[t,t]}))},D=`import { type FC, useState } from '@rue-js/rue'

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
`,O=(t,n,i)=>r(b,()=>({options:{title:`条件渲染`,source:D},children:(t,n,r)=>{let i=()=>c(t=>{let n=m();e(n,E,()=>({}));let r=f(``),i=f(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return t==null?i():s(t,r,i)}}));export{O as default};