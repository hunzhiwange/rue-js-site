import{$ as e,$t as t,Dt as n,Gt as r,X as i,Xt as a,Z as o,Zt as s,ct as c,ht as l,l as u,nt as d,o as f,t as p,tt as m,ut as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as _}from"./createHomeSplitExamplePage-Q644r2Bq.js";var v=e=>u(n=>{let r=m(`div`,n);h(r,`flex items-center gap-2`);let a=m(`input`,r);o(r,a),h(a,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),t(()=>{l(a,e.value)}),i(a,`input`,t=>{e.onChange(t.target.value)}),c(a,`placeholder`,`输入消息`);let s=m(`button`,r);return o(r,s),h(s,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),i(s,`click`,()=>e.onNotify(e.value)),o(s,d(`子触发通知`)),r}),y=()=>g(`reactive:1:0`,()=>n({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:n}=g(`useSetup:0:0`,()=>a(()=>{let[e]=g(`useState:1:1`,()=>s(y));return{state:e}}));return u(i=>{let a=m(`div`,i);h(a,`card bg-base-100 shadow`);let s=m(`div`,a);o(a,s),h(s,`card-body`);let c=m(`h2`,s);o(s,c),h(c,`text-2xl font-semibold text-teal-600 mb-3`),o(c,d(`子组件调用父组件的方法`));let l=e(`rue:component:anchor`);o(s,l),t(()=>{let e=p(v,{value:n.childInput,onChange:e=>{n.childInput=e},onNotify:e=>{n.lastMessage=e}});r(()=>f(e,s,l))});let u=m(`p`,s);o(s,u),h(u,`text-gray-700`),o(u,d(`父组件接收的消息：`));let g=e(`rue:slot:anchor`);return o(u,g),t(()=>{let e=n.lastMessage||`（暂无）`;r(()=>f(e,u,g))}),a})}});export{b as default};