import{G as e,I as t,L as n,M as r,P as i,R as a,X as o,Z as s,_t as c,bt as l,c as u,j as d,lt as f,pt as p,t as m,u as h}from"./vapor-runtime-D3a-68js.js";import{a as g}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as _}from"./createHomeSplitExamplePage-CLNmVfsf.js";var v=i=>h(()=>{let a=t(`button`);return e(a,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),d(a,`click`,()=>i.onSave?.(`已保存的是数据是123456`)),r(a,n(`触发保存`)),a}),y=n=>h(()=>{let r=t(`input`);return e(r,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),l(()=>{o(r,n.modelValue??``)}),d(r,`input`,e=>n[`onUpdate:modelValue`]?.(e.target.value)),r}),b=g(`ref:1:0`,()=>f(``)),x=g(`ref:1:1`,()=>f(``)),S=_({title:`组件 emit`,source:`import { type FC, ref } from '@rue-js/rue'

const EmitChild: FC<{ onSave?: (message: string) => void }> = props => {
  return (
    <button
      className="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700"
      onClick={() => props.onSave?.('已保存的是数据是123456')}
    >
      触发保存
    </button>
  )
}

const EmitInputChild: FC<{
  modelValue?: string
  ['onUpdate:modelValue']?: (value: string) => void
  vModel?: { value: string }
}> = props => {
  return (
    <input
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
      value={props.modelValue ?? ''}
      onInput={(event: any) => props['onUpdate:modelValue']?.((event.target as HTMLInputElement).value)}
    />
  )
}

const savedMsg = ref('')
const emitName = ref('')

const ComponentEmitDemo: FC = () => {
  const emitInputBindings = {
    modelValue: emitName.value,
    'onUpdate:modelValue': (value: string) => {
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
        <EmitInputChild {...emitInputBindings} />
        <p className="text-gray-700">输入的名称：{emitName.value}</p>
      </div>
    </div>
  )
}

export default ComponentEmitDemo`,Demo:()=>{let{emitInputBindings:o}=g(`useSetup:0:0`,()=>c(()=>({emitInputBindings:{modelValue:x.value,"onUpdate:modelValue":e=>{x.value=e}}})));return h(()=>{let c=t(`div`);e(c,`card bg-base-100 shadow`);let d=t(`div`);r(c,d),e(d,`card-body`);let f=t(`h2`);r(d,f),e(f,`text-2xl font-semibold text-pink-600 mb-3`),r(f,n(`组件 emit`));let h=i(`rue:component:anchor`);r(d,h),u(m(v,{onSave:e=>{b.value=e}}),d,h);let g=t(`p`);r(d,g),e(g,`text-gray-700`),r(g,n(`保存消息：`));let _=a(g);r(g,_),l(()=>{s(_,b.value||`（暂无）`)});let S=i(`rue:component:anchor`);r(d,S),l(()=>{let e=m(y,{...o});p(()=>u(e,d,S))});let C=t(`p`);r(d,C),e(C,`text-gray-700`),r(C,n(`输入的名称：`));let w=a(C);return r(C,w),l(()=>{s(w,x.value)}),c})}});export{S as default};