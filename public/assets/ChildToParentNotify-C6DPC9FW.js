import{F as e,K as t,L as n,M as r,N as i,R as a,W as o,Z as s,d as c,dt as l,gt as u,ht as d,l as f,ot as p,t as m,vt as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as _}from"./createHomeSplitExamplePage-2wtBgDCk.js";var v=e=>c(c=>{let l=n(`div`,c);t(l,`flex items-center gap-2`);let u=n(`input`,l);i(l,u),t(u,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),h(()=>{s(u,e.value)}),r(u,`input`,t=>{e.onChange(t.target.value)}),o(u,`placeholder`,`输入消息`);let d=n(`button`,l);return i(l,d),t(d,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),r(d,`click`,()=>e.onNotify(e.value)),i(d,a(`子触发通知`)),l}),y=()=>g(`reactive:1:0`,()=>p({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:r}=g(`useSetup:0:0`,()=>d(()=>{let[e]=g(`useState:1:1`,()=>u(y));return{state:e}}));return c(o=>{let s=n(`div`,o);t(s,`card bg-base-100 shadow`);let c=n(`div`,s);i(s,c),t(c,`card-body`);let u=n(`h2`,c);i(c,u),t(u,`text-2xl font-semibold text-teal-600 mb-3`),i(u,a(`子组件调用父组件的方法`));let d=e(`rue:component:anchor`);i(c,d),h(()=>{let e=m(v,{value:r.childInput,onChange:e=>{r.childInput=e},onNotify:e=>{r.lastMessage=e}});l(()=>f(e,c,d))});let p=n(`p`,c);i(c,p),t(p,`text-gray-700`),i(p,a(`父组件接收的消息：`));let g=e(`rue:slot:anchor`);return i(p,g),h(()=>{let e=r.lastMessage||`（暂无）`;l(()=>f(e,p,g))}),s})}});export{b as default};