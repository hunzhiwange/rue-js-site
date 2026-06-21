import{$t as e,Q as t,Z as n,_t as r,an as i,dt as a,et as o,in as s,jt as c,l,lt as u,nt as d,o as f,rt as p,t as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as _}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var v=e=>l(i=>{let o=d(`div`,i);a(o,`flex items-center gap-2`);let s=d(`input`,o);t(o,s),a(s,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`),h(()=>{r(s,e.value)}),n(s,`input`,t=>{e.onChange(t.target.value)}),u(s,`placeholder`,`输入消息`);let c=d(`button`,o);return t(o,c),a(c,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),n(c,`click`,()=>e.onNotify(e.value)),t(c,p(`子触发通知`)),o}),y=()=>g(`reactive:1:0`,()=>c({childInput:``,lastMessage:``})),b=_({title:`子调父方法`,source:`import { type FC, reactive, useState } from '@rue-js/rue'

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
`,Demo:()=>{let{state:n}=g(`useSetup:0:0`,()=>s(()=>{let[e]=g(`useState:1:1`,()=>i(y));return{state:e}}));return l(r=>{let i=d(`div`,r);a(i,`card bg-base-100 shadow`);let s=d(`div`,i);t(i,s),a(s,`card-body`);let c=d(`h2`,s);t(s,c),a(c,`text-2xl font-semibold text-teal-600 mb-3`),t(c,p(`子组件调用父组件的方法`));let l=o(`rue:component:anchor`);t(s,l),h(()=>{let t=m(v,{value:n.childInput,onChange:e=>{n.childInput=e},onNotify:e=>{n.lastMessage=e}});e(()=>f(t,s,l))});let u=d(`p`,s);t(s,u),a(u,`text-gray-700`),t(u,p(`父组件接收的消息：`));let g=o(`rue:slot:anchor`);return t(u,g),h(()=>{let t=n.lastMessage||`（暂无）`;e(()=>f(t,u,g))}),i})}});export{b as default};