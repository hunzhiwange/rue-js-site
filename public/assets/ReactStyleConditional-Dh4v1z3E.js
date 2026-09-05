import{Et as e,L as t,Lt as n,Mt as r,V as i,X as a,Y as o,_n as s,fn as c,gn as l,hn as u,ht as d,it as f,jt as p,kn as m,nn as h,nt as g,q as _,qt as v,rt as y,tt as b,wn as x,z as S}from"./rue-runtime-CwEGJ854.js";import{t as C}from"./createHomeSplitExamplePage-DuLZTUZH.js";var w=s(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-purple-600 mb-3">React 风格条件渲染</h2><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"><!--rue:text-hole:0--></button><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">等级+1</button><button class="rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200"><!--rue:text-hole:1--></button></div><!--rue:text-hole:2--><p class="text-gray-700">等级状态：<!--rue:text-hole:3--></p><!--rue:text-hole:4--></div></div>`),T=()=>v(`reactive:1:0`,()=>h({show:!0,level:1,message:`Hello`})),E=C({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[s]=p(`ReactStyleConditionalDemo:hook:0`,T);return r(()=>_(d(()=>{let r=g(),p=w().content.cloneNode(!0),h=p.firstChild,_=h.childNodes[0].childNodes[1].childNodes[0],v=h.childNodes[0].childNodes[1].childNodes[1],S=h.childNodes[0].childNodes[1].childNodes[2],C=h.childNodes[0].childNodes[1].childNodes[0].childNodes[0],T=C.parentNode,E=h.childNodes[0].childNodes[1].childNodes[2].childNodes[0],D=E.parentNode,O=h.childNodes[0].childNodes[2],k=O.parentNode,A=h.childNodes[0].childNodes[3].childNodes[1],j=A.parentNode,M=h.childNodes[0].childNodes[4],N=M.parentNode;r.appendChild(p),t(_,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`);let P=e=>{let t=()=>{s.show=!s.show};typeof t==`function`&&t(e)};_.addEventListener(`click`,P),n(()=>_.removeEventListener(`click`,P)),t(v,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`);let F=e=>{let t=()=>{s.level+=1};typeof t==`function`&&t(e)};v.addEventListener(`click`,F),n(()=>v.removeEventListener(`click`,F)),t(S,`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`);let I=e=>{let t=()=>{s.message=s.message?``:`Hello`};typeof t==`function`&&t(e)};return S.addEventListener(`click`,I),n(()=>S.removeEventListener(`click`,I)),i(T,C,()=>s.show?{__rue_compiled_branch_key:!0,create:()=>e(Object.assign(e=>{let t=l(`隐藏详情`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>e(Object.assign(e=>{let t=l(`显示详情`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),i(D,E,()=>s.message?{__rue_compiled_branch_key:!0,create:()=>e(Object.assign(e=>{let t=l(`清空消息`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>e(Object.assign(e=>{let t=l(`恢复消息`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),i(k,O,()=>s.show?{__rue_compiled_branch_key:!0,create:()=>e(Object.assign(e=>{let t=u(`div`,e);t.className=`mt-2`;let n=u(`p`,t);return c(t,n),n.className=`text-gray-700`,c(n,l(`详情区域：仅在 show 为 true 时显示`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>e(Object.assign(e=>{let t=g();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),i(j,A,()=>s.level>=3?{__rue_compiled_branch_key:!0,create:()=>e(Object.assign(e=>{let t=l(`高级`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>e(Object.assign(e=>{let t=l(`普通`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),x(()=>{let e=s.message?d(()=>{let e=g(),n=y(`p`,e);a(e,n),t(n,`text-gray-700`),a(n,f(`消息：`));let r=b(`rue:slot:anchor`);return a(n,r),x(()=>{let e=s.message;m(()=>o(e,n,r))}),e},!0):``;m(()=>o(e,N,M))}),r},!0),e=>S(()=>{})))}});export{E as default};