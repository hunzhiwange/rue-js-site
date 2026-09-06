import{Dn as e,Kt as t,Vt as n,_n as r,_t as i,ct as a,et as o,gn as s,nt as c,pn as l,qt as u,sn as d,vn as f,xn as p,z as m}from"./rue-runtime-HIMg8Lz8.js";import{t as h}from"./createHomeSplitExamplePage-DNdswIPW.js";var g=f(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-purple-600 mb-3">React 风格条件渲染</h2><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200"><!--rue:text-hole:0--></button><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200">等级+1</button><button class="rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200"><!--rue:text-hole:1--></button></div><!--rue:text-hole:2--><p class="text-gray-700">等级状态：<!--rue:text-hole:3--></p><!--rue:text-hole:4--></div></div>`),_=()=>d(`reactive:1:0`,()=>m({show:!0,level:1,message:`Hello`})),v=h({title:`条件渲染`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[d]=t(`ReactStyleConditionalDemo:hook:0`,_);return u(()=>a(n(Object.assign(t=>{let a=g().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[1].childNodes[0],u=a.childNodes[0].childNodes[1].childNodes[1],f=a.childNodes[0].childNodes[1].childNodes[2],m=a.childNodes[0].childNodes[1].childNodes[0].childNodes[0],h=m.parentNode,_=a.childNodes[0].childNodes[1].childNodes[2].childNodes[0],v=_.parentNode,y=a.childNodes[0].childNodes[2],b=y.parentNode,x=a.childNodes[0].childNodes[3].childNodes[1],S=x.parentNode,C=a.childNodes[0].childNodes[4],w=C.parentNode;o.className=`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`;let T=e=>{let t=()=>{d.get().show=!d.get().show};typeof t==`function`&&t(e)};o.addEventListener(`click`,T),e(()=>o.removeEventListener(`click`,T)),u.className=`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`;let E=e=>{let t=()=>{d.get().level+=1};typeof t==`function`&&t(e)};u.addEventListener(`click`,E),e(()=>u.removeEventListener(`click`,E)),f.className=`rounded-lg border border-gray-500 bg-gray-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-700 hover:bg-gray-700 focus:ring focus:ring-gray-200`;let D=e=>{let t=()=>{d.get().message=d.get().message?``:`Hello`};typeof t==`function`&&t(e)};f.addEventListener(`click`,D),e(()=>f.removeEventListener(`click`,D));let O=r(``);h.insertBefore(O,m),h.removeChild(m),p(O,()=>d.get().show?`隐藏详情`:`显示详情`);let k=r(``);v.insertBefore(k,_),v.removeChild(_),p(k,()=>d.get().message?`清空消息`:`恢复消息`),c(b,y,()=>d.get().show?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=s(`div`,e);t.className=`mt-2`;let n=s(`p`,t);return l(t,n),n.className=`text-gray-700`,l(n,r(`详情区域：仅在 show 为 true 时显示`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=i();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let A=r(``);return S.insertBefore(A,x),S.removeChild(x),p(A,()=>d.get().level>=3?`高级`:`普通`),c(w,C,()=>d.get().message?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=s(`p`,e);t.className=`text-gray-700`,l(t,r(`消息：`));let n=r(``);return l(t,n),p(n,()=>d.get().message),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=i();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>o(()=>{})))}});export{v as default};