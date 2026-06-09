import{$ as e,Ht as t,J as n,Jt as r,Tt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,ot as d,pt as f,qt as p,s as m,t as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as _}from"./createHomeSplitExamplePage-CJbW_xoB.js";var v=t=>u(r=>{let i=e(`div`,r);c(i,`flex items-center gap-2`);let s=e(`input`,i);o(i,s),c(s,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),a(()=>{f(s,t.value)}),n(s,`input`,e=>{t.onChange(e.target.value)}),d(s,`placeholder`,`输入消息`);let u=e(`button`,i);return o(i,u),c(u,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),n(u,`click`,()=>t.onNotify(t.value)),o(u,l(`子触发通知`)),i}),y=()=>g(`reactive:1:0`,()=>i({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:n}=g(`useSetup:0:0`,()=>p(()=>{let[e]=g(`useState:1:1`,()=>r(y));return{state:e}}));return u(r=>{let i=e(`div`,r);c(i,`card bg-base-100 shadow`);let u=e(`div`,i);o(i,u),c(u,`card-body`);let d=e(`h2`,u);o(u,d),c(d,`text-2xl font-semibold text-teal-600 mb-3`),o(d,l(`子组件调用父组件的方法`));let f=s(`rue:component:anchor`);o(u,f),a(()=>{let e=h(v,{value:n.childInput,onChange:e=>{n.childInput=e},onNotify:e=>{n.lastMessage=e}});t(()=>m(e,u,f))});let p=e(`p`,u);o(u,p),c(p,`text-gray-700`),o(p,l(`父组件接收的消息：`));let g=s(`rue:slot:anchor`);return o(p,g),a(()=>{let e=n.lastMessage||`（暂无）`;t(()=>m(e,p,g))}),i})}});export{b as default};