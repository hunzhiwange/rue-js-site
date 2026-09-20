import{A as e,Bt as t,F as n,P as r,Qt as i,Vt as a,Wt as o,gn as s,in as c,mn as l,mt as u,sn as d,u as f,yn as p,z as m,zt as h}from"./rue-runtime-BWbIfNT8.js";import{t as g}from"./createHomeSplitExamplePage-Cjn7V321.js";var _=p(`<button class="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">触发保存</button>`),v=p(`<label class="block"><span class="mb-1.5 block text-sm font-medium text-gray-700"><!--rue:text-hole:0--></span><input class="block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200" placeholder="请输入名称"></label>`),y=p(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-pink-600 mb-3">组件 emit</h2><!--rue:opaque-hole:0--><p class="text-gray-700">保存消息：<!--rue:text-hole:1--></p><!--rue:opaque-hole:2--><p class="text-gray-700">输入的名称：<!--rue:text-hole:3--></p><!--rue:opaque-hole:4--><p class="text-gray-700">v-model 名称：<!--rue:text-hole:5--></p></div></div>`),b=(t,n,r)=>{let i=e(t);return o(e=>{let t=_().content.cloneNode(!0).firstChild,n=t;return n.setAttribute(`class`,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),d(f(e,n,`click`,()=>()=>i(`save`,`已保存的是数据是123456`))),[t,t]})},x=(n,r,i)=>{let a=e(n);return o(e=>{let r=v().content.cloneNode(!0).firstChild,i=r.childNodes[1],o=r.childNodes[0].childNodes[0],s=o.parentNode;i.setAttribute(`class`,`block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200`),i.setAttribute(`placeholder`,`请输入名称`);let l;c(()=>{let e=m(n,`modelValue`)??``,t=e==null?``:String(e);Object.is(l,t)||(l=t,i.value=t)});let u=e=>{let t=e=>a(`updateModelValue`,e.target.value);typeof t==`function`&&t(e)};return i.addEventListener(`input`,u),d(()=>i.removeEventListener(`input`,u)),t({parent:s,before:o},()=>h(m(n,`label`)??`输入名称`),()=>({})),[r,r]})},S=u(``),C=u(``),w=u(``),T=(e,n,c)=>{let l={modelValue:C.value,onUpdateModelValue:e=>{C.value=e}};return o(e=>{let n=y().content.cloneNode(!0).firstChild,o=n.childNodes[0].childNodes[1],c=o.parentNode,u=n.childNodes[0].childNodes[2].childNodes[1],d=u.parentNode,f=n.childNodes[0].childNodes[3],p=f.parentNode,m=n.childNodes[0].childNodes[4].childNodes[1],h=m.parentNode,g=n.childNodes[0].childNodes[5],_=g.parentNode,v=n.childNodes[0].childNodes[6].childNodes[1],T=v.parentNode,E=(e,t,n)=>{let i=()=>r(b,()=>({onSave:e=>{S.value=e}}));return e==null?i():a(e,n,i)},D=o.nextSibling;c.removeChild(o),t({parent:c,before:D},()=>E,()=>({}));let O=s(``);d.insertBefore(O,u),d.removeChild(u),i(O,()=>S.value||`（暂无）`);let k=(e,t,n)=>{let i=()=>r(x,()=>({label:`手写 modelValue / onUpdateModelValue`,...l}));return e==null?i():a(e,n,i)},A=f.nextSibling;p.removeChild(f),t({parent:p,before:A},()=>k,()=>({}));let j=s(``);h.insertBefore(j,m),h.removeChild(m),i(j,()=>C.value);let M=(e,t,n)=>{let i=()=>r(x,()=>({label:`v-model`,modelValue:w.value,onUpdateModelValue:e=>w.value=e}));return e==null?i():a(e,n,i)},N=g.nextSibling;_.removeChild(g),t({parent:_,before:N},()=>M,()=>({}));let P=s(``);return T.insertBefore(P,v),T.removeChild(v),i(P,()=>w.value),[n,n]})},E=`import { type FC, ref, useEmit } from '@rue-js/rue'

const EmitChild: FC<{ onSave?: (message: string) => void }> = props => {
  const emit = useEmit(props)

  return (
    <button
      className="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700"
      onClick={() => emit('save', '已保存的是数据是123456')}
    >
      触发保存
    </button>
  )
}

const EmitInputChild: FC<{
  label?: string
  modelValue?: string
  onUpdateModelValue?: (value: string) => void
}> = props => {
  const emit = useEmit(props)

  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {props.label ?? '输入名称'}
      </span>
      <input
        className="block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        placeholder="请输入名称"
        value={props.modelValue ?? ''}
        onInput={(event: Event) =>
          emit('updateModelValue', (event.target as HTMLInputElement).value)
        }
      />
    </label>
  )
}

const savedMsg = ref('')
const emitName = ref('')
const emitModelName = ref('')

const ComponentEmitDemo: FC = () => {
  const emitInputBindings = {
    modelValue: emitName.value,
    onUpdateModelValue: (value: string) => {
      emitName.value = value
    },
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-pink-600 mb-3">组件 emit</h2>
        <EmitChild
          onSave={message => {
            savedMsg.value = message
          }}
        />
        <p className="text-gray-700">保存消息：{savedMsg.value || '（暂无）'}</p>

        <EmitInputChild label="手写 modelValue / onUpdateModelValue" {...emitInputBindings} />
        <p className="text-gray-700">输入的名称：{emitName.value}</p>

        <EmitInputChild label="v-model" v-model={emitModelName.value} />
        <p className="text-gray-700">v-model 名称：{emitModelName.value}</p>
      </div>
    </div>
  )
}

export default ComponentEmitDemo
`,D=(e,t,i)=>r(g,()=>({options:{title:`组件 emit`,source:E},children:(e,t,r)=>{let i=()=>o(e=>{let t=l();n(t,T,()=>({}));let r=s(``),i=s(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}}));export{D as default};