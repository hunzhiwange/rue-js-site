import{G as e,I as t,L as n,M as r,P as i,R as a,U as o,X as s,Z as c,_t as l,bt as u,c as d,ct as f,j as p,pt as m,t as h,u as g,vt as _}from"./vapor-runtime-D3a-68js.js";import{a as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./createHomeSplitExamplePage-CLNmVfsf.js";var b=i=>g(()=>{let a=t(`div`);e(a,`flex items-center gap-2`);let c=t(`input`);r(a,c),e(c,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),u(()=>{s(c,i.value)}),p(c,`input`,e=>{i.onChange(e.target.value)}),o(c,`placeholder`,`输入消息`);let l=t(`button`);return r(a,l),e(l,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),p(l,`click`,()=>i.onNotify(i.value)),r(l,n(`子触发通知`)),a}),x=()=>v(`reactive:1:0`,()=>f({childInput:``,lastMessage:``})),S=y({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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

export default ChildToParentNotifyDemo`,Demo:()=>{let{state:o}=v(`useSetup:0:0`,()=>l(()=>{let[e]=v(`useState:1:1`,()=>_(x));return{state:e}}));return g(()=>{let s=t(`div`);e(s,`card bg-base-100 shadow`);let l=t(`div`);r(s,l),e(l,`card-body`);let f=t(`h2`);r(l,f),e(f,`text-2xl font-semibold text-teal-600 mb-3`),r(f,n(`子组件调用父组件的方法`));let p=i(`rue:component:anchor`);r(l,p),u(()=>{let e=h(b,{value:o.childInput,onChange:e=>{o.childInput=e},onNotify:e=>{o.lastMessage=e}});m(()=>d(e,l,p))});let g=t(`p`);r(l,g),e(g,`text-gray-700`),r(g,n(`父组件接收的消息：`));let _=a(g);return r(g,_),u(()=>{c(_,o.lastMessage||`（暂无）`)}),s})}});export{S as default};