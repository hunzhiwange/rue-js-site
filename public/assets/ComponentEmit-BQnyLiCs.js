import{$t as e,Jt as t,L as n,Q as r,St as i,Z as a,_t as o,dt as s,et as c,in as l,it as u,l as d,lt as f,nt as p,o as m,rt as h,t as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as b}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var x=e=>{let{emit:t}=y(`useSetup:0:0`,()=>l(()=>({emit:y(`computed:1:0`,()=>i(()=>n(e)))})));return d(e=>{let n=p(`button`,e);return s(n,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),a(n,`click`,()=>t.get()(`save`,`已保存的是数据是123456`)),r(n,h(`触发保存`)),n})},S=t=>{let{emit:u}=y(`useSetup:0:0:dup1`,()=>l(()=>({emit:y(`computed:1:1`,()=>i(()=>n(t)))})));return d(n=>{let i=p(`label`,n);s(i,`block`);let l=p(`span`,i);r(i,l),s(l,`mb-1.5 block text-sm font-medium text-gray-700`);let d=c(`rue:slot:anchor`);r(l,d),v(()=>{let n=t.label??`输入名称`;e(()=>m(n,l,d))});let h=p(`input`,i);return r(i,h),s(h,`block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200`),f(h,`placeholder`,`请输入名称`),v(()=>{o(h,t.modelValue??``)}),a(h,`input`,e=>u.get()(`updateModelValue`,e.target.value)),i})},C=y(`ref:1:2`,()=>t(``)),w=y(`ref:1:3`,()=>t(``)),T=y(`ref:1:4`,()=>t(``)),E=b({title:`组件 emit`,source:`import { type FC, ref, useEmit } from '@rue-js/rue'

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
`,Demo:()=>{let{emitInputBindings:t}=y(`useSetup:0:0:dup2`,()=>l(()=>({emitInputBindings:{modelValue:w.value,onUpdateModelValue:e=>{w.value=e}}})));return d(n=>{let i=p(`div`,n);s(i,`card bg-base-100 shadow`);let a=p(`div`,i);r(i,a),s(a,`card-body`);let o=p(`h2`,a);r(a,o),s(o,`text-2xl font-semibold text-pink-600 mb-3`),r(o,h(`组件 emit`));let l=c(`rue:component:anchor`);r(a,l),m(g(x,{onSave:e=>{C.value=e}}),a,l);let d=p(`p`,a);r(a,d),s(d,`text-gray-700`),r(d,h(`保存消息：`));let f=u(d);r(d,f),v(()=>{_(f,C.value||`（暂无）`)});let y=c(`rue:component:anchor`);r(a,y),v(()=>{let n=g(S,{label:`手写 modelValue / onUpdateModelValue`,...t});e(()=>m(n,a,y))});let b=p(`p`,a);r(a,b),s(b,`text-gray-700`),r(b,h(`输入的名称：`));let E=u(b);r(b,E),v(()=>{_(E,w.value)});let D=c(`rue:component:anchor`);r(a,D),v(()=>{let t=g(S,{label:`v-model`,modelValue:T.value,onUpdateModelValue:e=>T.value=e});e(()=>m(t,a,D))});let O=p(`p`,a);r(a,O),s(O,`text-gray-700`),r(O,h(`v-model 名称：`));let k=u(O);return r(O,k),v(()=>{_(k,T.value)}),i})}});export{E as default};