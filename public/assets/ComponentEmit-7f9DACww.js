import{$ as e,$t as t,Bt as n,Gt as r,I as i,X as a,Xt as o,Z as s,ct as c,gt as l,ht as u,l as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as b}from"./createHomeSplitExamplePage-Q644r2Bq.js";var x=e=>{let{emit:t}=y(`useSetup:0:0`,()=>o(()=>({emit:y(`computed:1:0`,()=>v(()=>i(e)))})));return d(e=>{let n=g(`button`,e);return _(n,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),a(n,`click`,()=>t.get()(`save`,`已保存的是数据是123456`)),s(n,f(`触发保存`)),n})},S=n=>{let{emit:l}=y(`useSetup:0:0:dup1`,()=>o(()=>({emit:y(`computed:1:1`,()=>v(()=>i(n)))})));return d(i=>{let o=g(`label`,i);_(o,`block`);let d=g(`span`,o);s(o,d),_(d,`mb-1.5 block text-sm font-medium text-gray-700`);let f=e(`rue:slot:anchor`);s(d,f),t(()=>{let e=n.label??`输入名称`;r(()=>p(e,d,f))});let m=g(`input`,o);return s(o,m),_(m,`block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200`),c(m,`placeholder`,`请输入名称`),t(()=>{u(m,n.modelValue??``)}),a(m,`input`,e=>l.get()(`updateModelValue`,e.target.value)),o})},C=y(`ref:1:2`,()=>n(``)),w=y(`ref:1:3`,()=>n(``)),T=y(`ref:1:4`,()=>n(``)),E=b({title:`组件 emit`,source:`import { type FC, ref, useEmit } from '@rue-js/rue'

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
`,Demo:()=>{let{emitInputBindings:n}=y(`useSetup:0:0:dup2`,()=>o(()=>({emitInputBindings:{modelValue:w.value,onUpdateModelValue:e=>{w.value=e}}})));return d(i=>{let a=g(`div`,i);_(a,`card bg-base-100 shadow`);let o=g(`div`,a);s(a,o),_(o,`card-body`);let c=g(`h2`,o);s(o,c),_(c,`text-2xl font-semibold text-pink-600 mb-3`),s(c,f(`组件 emit`));let u=e(`rue:component:anchor`);s(o,u),p(h(x,{onSave:e=>{C.value=e}}),o,u);let d=g(`p`,o);s(o,d),_(d,`text-gray-700`),s(d,f(`保存消息：`));let v=m(d);s(d,v),t(()=>{l(v,C.value||`（暂无）`)});let y=e(`rue:component:anchor`);s(o,y),t(()=>{let e=h(S,{label:`手写 modelValue / onUpdateModelValue`,...n});r(()=>p(e,o,y))});let b=g(`p`,o);s(o,b),_(b,`text-gray-700`),s(b,f(`输入的名称：`));let E=m(b);s(b,E),t(()=>{l(E,w.value)});let D=e(`rue:component:anchor`);s(o,D),t(()=>{let e=h(S,{label:`v-model`,modelValue:T.value,onUpdateModelValue:e=>T.value=e});r(()=>p(e,o,D))});let O=g(`p`,o);s(o,O),_(O,`text-gray-700`),s(O,f(`v-model 名称：`));let k=m(O);return s(O,k),t(()=>{l(k,T.value)}),a})}});export{E as default};