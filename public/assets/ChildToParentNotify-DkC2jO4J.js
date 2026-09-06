import{Dn as e,Dt as t,Kt as n,Vt as r,_n as i,at as a,ct as o,et as s,hn as c,qt as l,sn as u,st as d,vn as f,wn as p,xn as m,z as h}from"./rue-runtime-HIMg8Lz8.js";import{t as g}from"./createHomeSplitExamplePage-DNdswIPW.js";var _=f(`<div class="flex items-center gap-2"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200" placeholder="输入消息"><button class="rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200">子触发通知</button></div>`),v=f(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-teal-600 mb-3">子组件调用父组件的方法</h2><!--rue:opaque-hole:0--><p class="text-gray-700">父组件接收的消息：<!--rue:text-hole:1--></p></div></div>`),y=n=>{let i=a(n.onChange),c=a(n.onNotify),l=a(n.value);return o(r(Object.assign(n=>{let r=_().content.cloneNode(!0).firstChild,a=r.childNodes[0],o=r.childNodes[1];a.className=`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`;let s;p(()=>{let e=l.get(),n=e==null?``:String(e);Object.is(s,n)||(s=n,t(a,n))});let u=e=>{let t=e=>{i.get()(e.target.value)};typeof t==`function`&&t(e)};a.addEventListener(`input`,u),e(()=>a.removeEventListener(`input`,u)),a.setAttribute(`placeholder`,`输入消息`),o.className=`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`;let d=e=>{let t=()=>c.get()(l.get());typeof t==`function`&&t(e)};return o.addEventListener(`click`,d),e(()=>o.removeEventListener(`click`,d)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{i.set(e.onChange),c.set(e.onNotify),l.set(e.value)}),()=>n)},b=()=>u(`reactive:1:0`,()=>h({childInput:``,lastMessage:``})),x=g({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let[e]=n(`ChildToParentNotifyDemo:hook:0`,b);return l(()=>o(r(Object.assign(t=>{let n=v().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],a=r.parentNode,o=n.childNodes[0].childNodes[2].childNodes[1],s=o.parentNode,l=c(a);d(l,y,()=>({value:e.get().childInput,onChange:t=>{e.get().childInput=t},onNotify:t=>{e.get().lastMessage=t}})),a.insertBefore(l,r);let u=i(``);return s.insertBefore(u,o),s.removeChild(o),m(u,()=>e.get().lastMessage||`（暂无）`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>s(()=>{})))}});export{x as default};