import{L as e,Q as t,Vt as n,Xt as r,Z as i,at as a,bt as o,dt as s,it as c,l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,wt as _,yt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as b}from"./createHomeSplitExamplePage-Da6pk2hb.js";var x=n=>{let{emit:r}=y(`useSetup:0:0`,()=>d(()=>({emit:y(`computed:1:0`,()=>_(()=>e(n)))})));return l(e=>{let n=p(`button`,e);return f(n,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),i(n,`click`,()=>r.get()(`save`,`已保存的是数据是123456`)),t(n,c(`触发保存`)),n})},S=r=>{let{emit:a}=y(`useSetup:0:0:dup1`,()=>d(()=>({emit:y(`computed:1:1`,()=>_(()=>e(r)))})));return l(e=>{let o=p(`label`,e);f(o,`block`);let c=p(`span`,o);t(o,c),f(c,`mb-1.5 block text-sm font-medium text-gray-700`);let l=g(`rue:slot:anchor`);t(c,l),n(()=>{let e=r.label??`输入名称`;h(()=>u(e,c,l))});let d=p(`input`,o);return t(o,d),f(d,`block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200`),s(d,`placeholder`,`请输入名称`),n(()=>{v(d,r.modelValue??``)}),i(d,`input`,e=>a.get()(`updateModelValue`,e.target.value)),o})},C=y(`ref:1:2`,()=>r(``)),w=y(`ref:1:3`,()=>r(``)),T=y(`ref:1:4`,()=>r(``)),E=b({title:`组件 emit`,source:`import { type FC, ref, useEmit } from '@rue-js/rue'

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
`,Demo:()=>{let{emitInputBindings:e}=y(`useSetup:0:0:dup2`,()=>d(()=>({emitInputBindings:{modelValue:w.value,onUpdateModelValue:e=>{w.value=e}}})));return l(r=>{let i=p(`div`,r);f(i,`card bg-base-100 shadow`);let s=p(`div`,i);t(i,s),f(s,`card-body`);let l=p(`h2`,s);t(s,l),f(l,`text-2xl font-semibold text-pink-600 mb-3`),t(l,c(`组件 emit`));let d=g(`rue:component:anchor`);t(s,d),u(m(x,{onSave:e=>{C.value=e}}),s,d);let _=p(`p`,s);t(s,_),f(_,`text-gray-700`),t(_,c(`保存消息：`));let v=a(_);t(_,v),n(()=>{o(v,C.value||`（暂无）`)});let y=g(`rue:component:anchor`);t(s,y),n(()=>{let t=m(S,{label:`手写 modelValue / onUpdateModelValue`,...e});h(()=>u(t,s,y))});let b=p(`p`,s);t(s,b),f(b,`text-gray-700`),t(b,c(`输入的名称：`));let E=a(b);t(b,E),n(()=>{o(E,w.value)});let D=g(`rue:component:anchor`);t(s,D),n(()=>{let e=m(S,{label:`v-model`,modelValue:T.value,onUpdateModelValue:e=>T.value=e});h(()=>u(e,s,D))});let O=p(`p`,s);t(s,O),f(O,`text-gray-700`),t(O,c(`v-model 名称：`));let k=a(O);return t(O,k),n(()=>{o(k,T.value)}),i})}});export{E as default};