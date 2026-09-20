import{Bt as e,Gt as t,H as n,Kt as r,Qt as i,U as a,V as o,Vt as s,Wt as c,Y as l,Yt as u,Zt as d,_t as f,en as p,et as m,gn as h,gt as g,in as _,mn as v,sn as y,u as b,vt as x,yn as S}from"./rue-runtime-Cv6BZekS.js";import{t as C}from"./createHomeSplitExamplePage-DqLcVC_n.js";var w=t([`childInput`],[!1]),T=t([`lastMessage`],[!1]),E=S(`<div class="flex items-center gap-2"><input class="rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200" placeholder="输入消息"><button class="rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200">子触发通知</button></div>`),D=S(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-teal-600 mb-3">子组件调用父组件的方法</h2><!--rue:opaque-hole:0--><p class="text-gray-700">父组件接收的消息：<!--rue:text-hole:1--></p></div></div>`),O=(e,t,n)=>{let r=x(g(e,`onChange`)),i=x(g(e,`onNotify`)),o=x(g(e,`value`));return a(c(e=>{let t=E().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=t.childNodes[1];n.setAttribute(`class`,`rounded-md border-gray-300 shadow-sm px-3 py-1 focus:border-violet-500 focus:ring focus:ring-violet-200`);let s;_(()=>{let e=o.get(),t=e==null?``:String(e);Object.is(s,t)||(s=t,n.value=t)});let c=e=>{let t=e=>{r.get()(e.target.value)};typeof t==`function`&&t(e)};return n.addEventListener(`input`,c),y(()=>n.removeEventListener(`input`,c)),n.setAttribute(`placeholder`,`输入消息`),a.setAttribute(`class`,`rounded-lg border border-violet-500 bg-violet-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200`),y(b(e,a,`click`,()=>()=>i.get()(o.get()))),[t,t]}),e=>p(()=>{r.set(e.onChange),i.set(e.onNotify),o.set(e.value)}),()=>f(e))},k=()=>({childInput:``,lastMessage:``}),A=(t,n,a)=>{let[f]=m(`ChildToParentNotifyDemo:hook:0`,k);return l(()=>c(t=>{let n=D().content.cloneNode(!0).firstChild,a=n.childNodes[0].childNodes[1],c=a.parentNode,l=n.childNodes[0].childNodes[2].childNodes[1],p=l.parentNode,m=(e,t,n)=>{let i=()=>o(O,()=>({value:r(f,w),onChange:e=>{u(d(f))(`childInput`).value=e},onNotify:e=>{u(d(f))(`lastMessage`).value=e}}));return e==null?i():s(e,n,i)},g=a.nextSibling;c.removeChild(a),e({parent:c,before:g},()=>m,()=>({}));let _=h(``);return p.insertBefore(_,l),p.removeChild(l),i(_,()=>r(f,T)||`（暂无）`),[n,n]}))},j=`import { type FC, useState } from '@rue-js/rue'

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
`,M=(e,t,r)=>o(C,()=>({options:{title:`子调父方法`,source:j},children:(e,t,r)=>{let i=()=>c(e=>{let t=v();n(t,A,()=>({}));let r=h(``),i=h(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():s(e,r,i)}}));export{M as default};