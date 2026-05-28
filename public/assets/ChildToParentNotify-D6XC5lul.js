import{$ as e,Ct as t,J as n,Kt as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,ot as f,pt as p,qt as m,t as h}from"./vapor-runtime-BR_2rwNk.js";import{a as g}from"./vapor-helpers-vapor-DkadWylb.js";import{t as _}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var v=t=>l(r=>{let i=e(`div`,r);c(i,`flex items-center gap-2`);let s=e(`input`,i);a(i,s),c(s,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),o(()=>{p(s,t.value)}),n(s,`input`,e=>{t.onChange(e.target.value)}),f(s,`placeholder`,`输入消息`);let l=e(`button`,i);return a(i,l),c(l,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),n(l,`click`,()=>t.onNotify(t.value)),a(l,u(`子触发通知`)),i}),y=()=>g(`reactive:1:0`,()=>t({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t}=g(`useSetup:0:0`,()=>r(()=>{let[e]=g(`useState:1:1`,()=>m(y));return{state:e}}));return l(n=>{let r=e(`div`,n);c(r,`card bg-base-100 shadow`);let l=e(`div`,r);a(r,l),c(l,`card-body`);let f=e(`h2`,l);a(l,f),c(f,`text-2xl font-semibold text-teal-600 mb-3`),a(f,u(`子组件调用父组件的方法`));let p=s(`rue:component:anchor`);a(l,p),o(()=>{let e=h(v,{value:t.childInput,onChange:e=>{t.childInput=e},onNotify:e=>{t.lastMessage=e}});i(()=>d(e,l,p))});let m=e(`p`,l);a(l,m),c(m,`text-gray-700`),a(m,u(`父组件接收的消息：`));let g=s(`rue:slot:anchor`);return a(m,g),o(()=>{let e=t.lastMessage||`（暂无）`;i(()=>d(e,m,g))}),r})}});export{b as default};