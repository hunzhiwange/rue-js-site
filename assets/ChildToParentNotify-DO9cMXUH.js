import{F as e,K as t,L as n,M as r,N as i,Q as a,R as o,W as s,Z as c,_t as l,at as u,d,ht as f,l as p,mt as m,t as h,ut as g,z as _}from"./vapor-runtime-Bp8DIxJg.js";import{a as v}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as y}from"./createHomeSplitExamplePage-B5aM8M8p.js";var b=e=>d(a=>{let u=n(`div`,a);t(u,`flex items-center gap-2`);let d=n(`input`,u);i(u,d),t(d,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),l(()=>{c(d,e.value)}),r(d,`input`,t=>{e.onChange(t.target.value)}),s(d,`placeholder`,`输入消息`);let f=n(`button`,u);return i(u,f),t(f,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),r(f,`click`,()=>e.onNotify(e.value)),i(f,o(`子触发通知`)),u}),x=()=>v(`reactive:1:0`,()=>u({childInput:``,lastMessage:``})),S=y({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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

export default ChildToParentNotifyDemo`,Demo:()=>{let{state:r}=v(`useSetup:0:0`,()=>m(()=>{let[e]=v(`useState:1:1`,()=>f(x));return{state:e}}));return d(s=>{let c=n(`div`,s);t(c,`card bg-base-100 shadow`);let u=n(`div`,c);i(c,u),t(u,`card-body`);let d=n(`h2`,u);i(u,d),t(d,`text-2xl font-semibold text-teal-600 mb-3`),i(d,o(`子组件调用父组件的方法`));let f=e(`rue:component:anchor`);i(u,f),l(()=>{let e=h(b,{value:r.childInput,onChange:e=>{r.childInput=e},onNotify:e=>{r.lastMessage=e}});g(()=>p(e,u,f))});let m=n(`p`,u);i(u,m),t(m,`text-gray-700`),i(m,o(`父组件接收的消息：`));let v=_(m);return i(m,v),l(()=>{a(v,r.lastMessage||`（暂无）`)}),c})}});export{S as default};