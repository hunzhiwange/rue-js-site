import{Nt as e,Q as t,Vt as n,Z as r,dt as i,it as a,l as o,o as s,on as c,pt as l,rt as u,sn as d,t as f,tn as p,tt as m,yt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as _}from"./createHomeSplitExamplePage-Da6pk2hb.js";var v=e=>o(o=>{let s=u(`div`,o);l(s,`flex items-center gap-2`);let c=u(`input`,s);t(s,c),l(c,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),n(()=>{h(c,e.value)}),r(c,`input`,t=>{e.onChange(t.target.value)}),i(c,`placeholder`,`输入消息`);let d=u(`button`,s);return t(s,d),l(d,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),r(d,`click`,()=>e.onNotify(e.value)),t(d,a(`子触发通知`)),s}),y=()=>g(`reactive:1:0`,()=>e({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:e}=g(`useSetup:0:0`,()=>c(()=>{let[e]=g(`useState:1:1`,()=>d(y));return{state:e}}));return o(r=>{let i=u(`div`,r);l(i,`card bg-base-100 shadow`);let o=u(`div`,i);t(i,o),l(o,`card-body`);let c=u(`h2`,o);t(o,c),l(c,`text-2xl font-semibold text-teal-600 mb-3`),t(c,a(`子组件调用父组件的方法`));let d=m(`rue:component:anchor`);t(o,d),n(()=>{let t=f(v,{value:e.childInput,onChange:t=>{e.childInput=t},onNotify:t=>{e.lastMessage=t}});p(()=>s(t,o,d))});let h=u(`p`,o);t(o,h),l(h,`text-gray-700`),t(h,a(`父组件接收的消息：`));let g=m(`rue:slot:anchor`);return t(h,g),n(()=>{let t=e.lastMessage||`（暂无）`;p(()=>s(t,h,g))}),i})}});export{b as default};