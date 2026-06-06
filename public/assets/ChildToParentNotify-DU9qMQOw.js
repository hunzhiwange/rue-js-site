import{$ as e,Ct as t,J as n,Kt as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,l as u,ot as d,pt as f,qt as p,s as m,t as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g}from"./vapor-helpers-vapor-CJFAWine.js";import{t as _}from"./createHomeSplitExamplePage-BB_cTfze.js";var v=t=>u(r=>{let i=e(`div`,r);c(i,`flex items-center gap-2`);let s=e(`input`,i);a(i,s),c(s,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),o(()=>{f(s,t.value)}),n(s,`input`,e=>{t.onChange(e.target.value)}),d(s,`placeholder`,`输入消息`);let u=e(`button`,i);return a(i,u),c(u,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),n(u,`click`,()=>t.onNotify(t.value)),a(u,l(`子触发通知`)),i}),y=()=>g(`reactive:1:0`,()=>t({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t}=g(`useSetup:0:0`,()=>r(()=>{let[e]=g(`useState:1:1`,()=>p(y));return{state:e}}));return u(n=>{let r=e(`div`,n);c(r,`card bg-base-100 shadow`);let u=e(`div`,r);a(r,u),c(u,`card-body`);let d=e(`h2`,u);a(u,d),c(d,`text-2xl font-semibold text-teal-600 mb-3`),a(d,l(`子组件调用父组件的方法`));let f=s(`rue:component:anchor`);a(u,f),o(()=>{let e=h(v,{value:t.childInput,onChange:e=>{t.childInput=e},onNotify:e=>{t.lastMessage=e}});i(()=>m(e,u,f))});let p=e(`p`,u);a(u,p),c(p,`text-gray-700`),a(p,l(`父组件接收的消息：`));let g=s(`rue:slot:anchor`);return a(p,g),o(()=>{let e=t.lastMessage||`（暂无）`;i(()=>m(e,p,g))}),r})}});export{b as default};