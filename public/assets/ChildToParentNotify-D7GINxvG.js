import{$ as e,Dt as t,Et as n,H as r,K as i,V as a,W as o,d as s,gt as c,kt as l,l as u,ot as d,q as f,t as p,tt as m,xt as h}from"./vapor-runtime-BAZOdMd8.js";import{a as g}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as _}from"./createHomeSplitExamplePage-BUuBaUet.js";var v=t=>s(n=>{let o=i(`div`,n);m(o,`flex items-center gap-2`);let s=i(`input`,o);r(o,s),m(s,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),l(()=>{d(s,t.value)}),a(s,`input`,e=>{t.onChange(e.target.value)}),e(s,`placeholder`,`输入消息`);let c=i(`button`,o);return r(o,c),m(c,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),a(c,`click`,()=>t.onNotify(t.value)),r(c,f(`子触发通知`)),o}),y=()=>g(`reactive:1:0`,()=>c({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:e}=g(`useSetup:0:0`,()=>n(()=>{let[e]=g(`useState:1:1`,()=>t(y));return{state:e}}));return s(t=>{let n=i(`div`,t);m(n,`card bg-base-100 shadow`);let a=i(`div`,n);r(n,a),m(a,`card-body`);let s=i(`h2`,a);r(a,s),m(s,`text-2xl font-semibold text-teal-600 mb-3`),r(s,f(`子组件调用父组件的方法`));let c=o(`rue:component:anchor`);r(a,c),l(()=>{let t=p(v,{value:e.childInput,onChange:t=>{e.childInput=t},onNotify:t=>{e.lastMessage=t}});h(()=>u(t,a,c))});let d=i(`p`,a);r(a,d),m(d,`text-gray-700`),r(d,f(`父组件接收的消息：`));let g=o(`rue:slot:anchor`);return r(d,g),l(()=>{let t=e.lastMessage||`（暂无）`;h(()=>u(t,d,g))}),n})}});export{b as default};