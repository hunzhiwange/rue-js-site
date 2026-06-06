import{$ as e,B as t,Dt as n,G as r,H as i,Tt as a,W as o,Z as s,it as c,l,mt as u,s as d,t as f,wt as p,yt as m,z as h}from"./vapor-runtime-C1rlwc61.js";import{a as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./createHomeSplitExamplePage-BftZ6-s2.js";var v=i=>l(a=>{let l=o(`div`,a);e(l,`flex items-center gap-2`);let u=o(`input`,l);t(l,u),e(u,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),n(()=>{c(u,i.value)}),h(u,`input`,e=>{i.onChange(e.target.value)}),s(u,`placeholder`,`输入消息`);let d=o(`button`,l);return t(l,d),e(d,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),h(d,`click`,()=>i.onNotify(i.value)),t(d,r(`子触发通知`)),l}),y=()=>g(`reactive:1:0`,()=>u({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:s}=g(`useSetup:0:0`,()=>p(()=>{let[e]=g(`useState:1:1`,()=>a(y));return{state:e}}));return l(a=>{let c=o(`div`,a);e(c,`card bg-base-100 shadow`);let l=o(`div`,c);t(c,l),e(l,`card-body`);let u=o(`h2`,l);t(l,u),e(u,`text-2xl font-semibold text-teal-600 mb-3`),t(u,r(`子组件调用父组件的方法`));let p=i(`rue:component:anchor`);t(l,p),n(()=>{let e=f(v,{value:s.childInput,onChange:e=>{s.childInput=e},onNotify:e=>{s.lastMessage=e}});m(()=>d(e,l,p))});let h=o(`p`,l);t(l,h),e(h,`text-gray-700`),t(h,r(`父组件接收的消息：`));let g=i(`rue:slot:anchor`);return t(h,g),n(()=>{let e=s.lastMessage||`（暂无）`;m(()=>d(e,h,g))}),c})}});export{b as default};