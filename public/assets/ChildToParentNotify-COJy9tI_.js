import{Et as e,Q as t,Qt as n,Wt as r,X as i,Xt as a,Y as o,Yt as s,et as c,l,lt as u,mt as d,o as f,st as p,t as m,tt as h}from"./vapor-runtime-CXIalONM.js";import{a as g}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as _}from"./createHomeSplitExamplePage-Br1mQ323.js";var v=e=>l(t=>{let r=c(`div`,t);u(r,`flex items-center gap-2`);let a=c(`input`,r);i(r,a),u(a,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),n(()=>{d(a,e.value)}),o(a,`input`,t=>{e.onChange(t.target.value)}),p(a,`placeholder`,`输入消息`);let s=c(`button`,r);return i(r,s),u(s,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),o(s,`click`,()=>e.onNotify(e.value)),i(s,h(`子触发通知`)),r}),y=()=>g(`reactive:1:0`,()=>e({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:e}=g(`useSetup:0:0`,()=>s(()=>{let[e]=g(`useState:1:1`,()=>a(y));return{state:e}}));return l(a=>{let o=c(`div`,a);u(o,`card bg-base-100 shadow`);let s=c(`div`,o);i(o,s),u(s,`card-body`);let l=c(`h2`,s);i(s,l),u(l,`text-2xl font-semibold text-teal-600 mb-3`),i(l,h(`子组件调用父组件的方法`));let d=t(`rue:component:anchor`);i(s,d),n(()=>{let t=m(v,{value:e.childInput,onChange:t=>{e.childInput=t},onNotify:t=>{e.lastMessage=t}});r(()=>f(t,s,d))});let p=c(`p`,s);i(s,p),u(p,`text-gray-700`),i(p,h(`父组件接收的消息：`));let g=t(`rue:slot:anchor`);return i(p,g),n(()=>{let t=e.lastMessage||`（暂无）`;r(()=>f(t,p,g))}),o})}});export{b as default};