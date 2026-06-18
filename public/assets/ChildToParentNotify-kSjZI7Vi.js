import{$ as e,Ht as t,J as n,Jt as r,Q as i,X as a,Xt as o,at as s,ft as c,l,q as u,qt as d,s as f,st as p,t as m,wt as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as _}from"./createHomeSplitExamplePage-C98rg19g.js";var v=t=>l(r=>{let a=i(`div`,r);p(a,`flex items-center gap-2`);let l=i(`input`,a);n(a,l),p(l,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),o(()=>{c(l,t.value)}),u(l,`input`,e=>{t.onChange(e.target.value)}),s(l,`placeholder`,`输入消息`);let d=i(`button`,a);return n(a,d),p(d,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),u(d,`click`,()=>t.onNotify(t.value)),n(d,e(`子触发通知`)),a}),y=()=>g(`reactive:1:0`,()=>h({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:s}=g(`useSetup:0:0`,()=>d(()=>{let[e]=g(`useState:1:1`,()=>r(y));return{state:e}}));return l(r=>{let c=i(`div`,r);p(c,`card bg-base-100 shadow`);let l=i(`div`,c);n(c,l),p(l,`card-body`);let u=i(`h2`,l);n(l,u),p(u,`text-2xl font-semibold text-teal-600 mb-3`),n(u,e(`子组件调用父组件的方法`));let d=a(`rue:component:anchor`);n(l,d),o(()=>{let e=m(v,{value:s.childInput,onChange:e=>{s.childInput=e},onNotify:e=>{s.lastMessage=e}});t(()=>f(e,l,d))});let h=i(`p`,l);n(l,h),p(h,`text-gray-700`),n(h,e(`父组件接收的消息：`));let g=a(`rue:slot:anchor`);return n(h,g),o(()=>{let e=s.lastMessage||`（暂无）`;t(()=>f(e,h,g))}),c})}});export{b as default};