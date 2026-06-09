import{$ as e,Ht as t,J as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,mt as u,pt as d,qt as f,s as p,t as m,tt as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as _}from"./createHomeSplitExamplePage-CJbW_xoB.js";var v=t=>l(r=>{let i=e(`button`,r);return s(i,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),n(i,`click`,()=>t.onSave?.(`已保存的是数据是123456`)),a(i,c(`触发保存`)),i}),y=t=>l(r=>{let a=e(`input`,r);return s(a,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),i(()=>{d(a,t.modelValue??``)}),n(a,`input`,e=>t[`onUpdate:modelValue`]?.(e.target.value)),a}),b=g(`ref:1:0`,()=>r(``)),x=g(`ref:1:1`,()=>r(``)),S=_({title:`组件 emit`,source:`import { type FC, ref } from '@rue-js/rue'

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
      onInput={(event: any) =>
        props['onUpdate:modelValue']?.((event.target as HTMLInputElement).value)
      }
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

export default ComponentEmitDemo
`,Demo:()=>{let{emitInputBindings:n}=g(`useSetup:0:0`,()=>f(()=>({emitInputBindings:{modelValue:x.value,"onUpdate:modelValue":e=>{x.value=e}}})));return l(r=>{let l=e(`div`,r);s(l,`card bg-base-100 shadow`);let d=e(`div`,l);a(l,d),s(d,`card-body`);let f=e(`h2`,d);a(d,f),s(f,`text-2xl font-semibold text-pink-600 mb-3`),a(f,c(`组件 emit`));let g=o(`rue:component:anchor`);a(d,g),p(m(v,{onSave:e=>{b.value=e}}),d,g);let _=e(`p`,d);a(d,_),s(_,`text-gray-700`),a(_,c(`保存消息：`));let S=h(_);a(_,S),i(()=>{u(S,b.value||`（暂无）`)});let C=o(`rue:component:anchor`);a(d,C),i(()=>{let e=m(y,{...n});t(()=>p(e,d,C))});let w=e(`p`,d);a(d,w),s(w,`text-gray-700`),a(w,c(`输入的名称：`));let T=h(w);return a(w,T),i(()=>{u(T,x.value)}),l})}});export{S as default};