import{A as e,Cn as t,Ct as n,Lt as r,Mt as i,Tt as a,dt as o,ht as s,jt as c,mt as l,ot as u,pn as d,pt as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as b}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var x=n=>{let{emit:i}=y(`useSetup:0:0`,()=>t(()=>({emit:y(`computed:1:0`,()=>r(()=>e(n)))})));return g(e=>{let t=f(`button`,e);return a(t,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),u(t,`click`,()=>i.get()(`save`,`已保存的是数据是123456`)),p(t,l(`触发保存`)),t})},S=i=>{let{emit:s}=y(`useSetup:0:0:dup1`,()=>t(()=>({emit:y(`computed:1:1`,()=>r(()=>e(i)))})));return g(e=>{let t=f(`label`,e);a(t,`block`);let r=f(`span`,t);p(t,r),a(r,`mb-1.5 block text-sm font-medium text-gray-700`);let l=o(`rue:slot:anchor`);p(r,l),m(()=>{let e=i.label??`输入名称`;h(()=>_(e,r,l))});let d=f(`input`,t);return p(t,d),a(d,`block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200`),n(d,`placeholder`,`请输入名称`),m(()=>{c(d,i.modelValue??``)}),u(d,`input`,e=>s.get()(`updateModelValue`,e.target.value)),t})},C=y(`ref:1:2`,()=>d(``)),w=y(`ref:1:3`,()=>d(``)),T=y(`ref:1:4`,()=>d(``)),E=b({title:`组件 emit`,source:`import { type FC, ref, useEmit } from '@rue-js/rue'

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
`,Demo:()=>{let{emitInputBindings:e}=y(`useSetup:0:0:dup2`,()=>t(()=>({emitInputBindings:{modelValue:w.value,onUpdateModelValue:e=>{w.value=e}}})));return g(t=>{let n=f(`div`,t);a(n,`card bg-base-100 shadow`);let r=f(`div`,n);p(n,r),a(r,`card-body`);let c=f(`h2`,r);p(r,c),a(c,`text-2xl font-semibold text-pink-600 mb-3`),p(c,l(`组件 emit`));let u=o(`rue:component:anchor`);p(r,u),_(v(x,{onSave:e=>{C.value=e}}),r,u);let d=f(`p`,r);p(r,d),a(d,`text-gray-700`),p(d,l(`保存消息：`));let g=s(d);p(d,g),m(()=>{i(g,C.value||`（暂无）`)});let y=o(`rue:component:anchor`);p(r,y),m(()=>{let t=v(S,{label:`手写 modelValue / onUpdateModelValue`,...e});h(()=>_(t,r,y))});let b=f(`p`,r);p(r,b),a(b,`text-gray-700`),p(b,l(`输入的名称：`));let E=s(b);p(b,E),m(()=>{i(E,w.value)});let D=o(`rue:component:anchor`);p(r,D),m(()=>{let e=v(S,{label:`v-model`,modelValue:T.value,onUpdateModelValue:e=>T.value=e});h(()=>_(e,r,D))});let O=f(`p`,r);p(r,O),a(O,`text-gray-700`),p(O,l(`v-model 名称：`));let k=s(O);return p(O,k),m(()=>{i(k,T.value)}),n})}});export{E as default};