import{Cn as e,Ct as t,Kt as n,Tt as r,dt as i,jt as a,mt as o,ot as s,pt as c,st as l,tn as u,vn as d,wn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as _}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var v=e=>p(n=>{let i=c(`div`,n);r(i,`flex items-center gap-2`);let d=c(`input`,i);l(i,d),r(d,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),u(()=>{a(d,e.value)}),s(d,`input`,t=>{e.onChange(t.target.value)}),t(d,`placeholder`,`输入消息`);let f=c(`button`,i);return l(i,f),r(f,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),s(f,`click`,()=>e.onNotify(e.value)),l(f,o(`子触发通知`)),i}),y=()=>g(`reactive:1:0`,()=>n({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t}=g(`useSetup:0:0`,()=>e(()=>{let[e]=g(`useState:1:1`,()=>f(y));return{state:e}}));return p(e=>{let n=c(`div`,e);r(n,`card bg-base-100 shadow`);let a=c(`div`,n);l(n,a),r(a,`card-body`);let s=c(`h2`,a);l(a,s),r(s,`text-2xl font-semibold text-teal-600 mb-3`),l(s,o(`子组件调用父组件的方法`));let f=i(`rue:component:anchor`);l(a,f),u(()=>{let e=h(v,{value:t.childInput,onChange:e=>{t.childInput=e},onNotify:e=>{t.lastMessage=e}});d(()=>m(e,a,f))});let p=c(`p`,a);l(a,p),r(p,`text-gray-700`),l(p,o(`父组件接收的消息：`));let g=i(`rue:slot:anchor`);return l(p,g),u(()=>{let e=t.lastMessage||`（暂无）`;d(()=>m(e,p,g))}),n})}});export{b as default};