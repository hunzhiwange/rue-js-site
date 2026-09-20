import{B as e,Bt as t,F as n,Gt as r,I as i,Kt as a,P as o,Qt as s,Vt as c,W as l,Wt as u,Yt as d,Zt as f,en as p,gn as m,in as h,mn as g,nt as _,sn as v,st as y,u as b,yn as x,z as S}from"./rue-runtime-BWbIfNT8.js";import{t as C}from"./createHomeSplitExamplePage-Cjn7V321.js";var w=r([`childInput`],[!1]),T=r([`lastMessage`],[!1]),E=x(`<div class="flex items-center gap-2"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200" placeholder="输入消息"><button class="rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200">子触发通知</button></div>`),D=x(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-teal-600 mb-3">子组件调用父组件的方法</h2><!--rue:opaque-hole:0--><p class="text-gray-700">父组件接收的消息：<!--rue:text-hole:1--></p></div></div>`),O=(t,n,r)=>{let a=l(S(t,`onChange`)),o=l(S(t,`onNotify`)),s=l(S(t,`value`));return i(u(e=>{let t=E().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`class`,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`);let i;h(()=>{let e=s.get(),t=e==null?``:String(e);Object.is(i,t)||(i=t,n.value=t)});let c=e=>{let t=e=>{a.get()(e.target.value)};typeof t==`function`&&t(e)};return n.addEventListener(`input`,c),v(()=>n.removeEventListener(`input`,c)),n.setAttribute(`placeholder`,`输入消息`),r.setAttribute(`class`,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),v(b(e,r,`click`,()=>()=>o.get()(s.get()))),[t,t]}),e=>p(()=>{a.set(e.onChange),o.set(e.onNotify),s.set(e.value)}),()=>e(t))},k=()=>({childInput:``,lastMessage:``}),A=(e,n,r)=>{let[i]=y(`ChildToParentNotifyDemo:hook:0`,k);return _(()=>u(e=>{let n=D().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],l=r.parentNode,u=n.childNodes[0].childNodes[2].childNodes[1],p=u.parentNode,h=(e,t,n)=>{let r=()=>o(O,()=>({value:a(i,w),onChange:e=>{d(f(i))(`childInput`).value=e},onNotify:e=>{d(f(i))(`lastMessage`).value=e}}));return e==null?r():c(e,n,r)},g=r.nextSibling;l.removeChild(r),t({parent:l,before:g},()=>h,()=>({}));let _=m(``);return p.insertBefore(_,u),p.removeChild(u),s(_,()=>a(i,T)||`（暂无）`),[n,n]}))},j=`import { type FC, useState } from '@rue-js/rue'

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

const createNotifyState = () => ({
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
`,M=(e,t,r)=>o(C,()=>({options:{title:`子调父方法`,source:j},children:(e,t,r)=>{let i=()=>u(e=>{let t=g();n(t,A,()=>({}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}}));export{M as default};