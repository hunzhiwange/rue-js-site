import{Dn as e,Et as t,K as n,Mt as r,V as i,W as a,_n as o,ft as s,gn as c,jt as l,mn as u,nn as d,q as f,qt as p,wn as m,z as h}from"./rue-runtime-CwEGJ854.js";import{t as g}from"./createHomeSplitExamplePage-BwH-lO_t.js";var _=o(`<div class="flex items-center gap-2"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200" placeholder="输入消息"><button class="rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200">子触发通知</button></div>`),v=o(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-teal-600 mb-3">子组件调用父组件的方法</h2><!--rue:opaque-hole:0--><p class="text-gray-700">父组件接收的消息：<!--rue:text-hole:1--></p></div></div>`),y=n=>{let r=a(n.onChange),i=a(n.onNotify),o=a(n.value);return f(t(Object.assign(t=>{let n=_().content.cloneNode(!0).firstChild,a=n.childNodes[0],c=n.childNodes[1];a.className=`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`;let l;m(()=>{let e=o.get(),t=e==null?``:String(e);Object.is(l,t)||(l=t,s(a,t))});let u=e=>{let t=e=>{r.get()(e.target.value)};typeof t==`function`&&t(e)};a.addEventListener(`input`,u),e(()=>a.removeEventListener(`input`,u)),a.setAttribute(`placeholder`,`输入消息`),c.className=`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`;let d=e=>{let t=()=>i.get()(o.get());typeof t==`function`&&t(e)};return c.addEventListener(`click`,d),e(()=>c.removeEventListener(`click`,d)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>h(()=>{r.set(e.onChange),i.set(e.onNotify),o.set(e.value)}),()=>n)},b=()=>p(`reactive:1:0`,()=>d({childInput:``,lastMessage:``})),x=g({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

const NotifierChild: FC<{
  value: string
  onChange: (value: string) => void
  onNotify: (message: string) => void
}> = props => {
  return (
    <div className="flex items-center gap-2">
      <input
        className="rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200"
        value={props.value}
        onInput={(event: any) => {
          props.onChange((event.target as HTMLInputElement).value)
        }}
        placeholder="输入消息"
      />
      <button
        className="rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200"
        onClick={() => props.onNotify(props.value)}
      >
        子触发通知
      </button>
    </div>
  )
}

const createNotifyState = () =>
  reactive({
    childInput: '',
    lastMessage: '',
  })

const ChildToParentNotifyDemo: FC = () => {
  const [state] = useState(createNotifyState)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-teal-600 mb-3">子组件调用父组件的方法</h2>
        <NotifierChild
          value={state.childInput}
          onChange={value => {
            state.childInput = value
          }}
          onNotify={message => {
            state.lastMessage = message
          }}
        />
        <p className="text-gray-700">父组件接收的消息：{state.lastMessage || '（暂无）'}</p>
      </div>
    </div>
  )
}

export default ChildToParentNotifyDemo
`,Demo:()=>{let[e]=l(`ChildToParentNotifyDemo:hook:0`,b);return r(()=>f(t(Object.assign(r=>{let a=v().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[1],s=o.parentNode,l=a.childNodes[0].childNodes[2].childNodes[1],d=l.parentNode,f=u(s);return n(f,y,()=>({value:e.childInput,onChange:t=>{e.childInput=t},onNotify:t=>{e.lastMessage=t}})),s.insertBefore(f,o),i(d,l,()=>{let n=e.lastMessage;return n?{__rue_compiled_branch_key:n,create:()=>t(Object.assign(e=>{let t=c(typeof n==`string`||typeof n==`number`||typeof n==`bigint`?n:``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(Object.assign(e=>{let t=c(`（暂无）`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>h(()=>{})))}});export{x as default};