import{F as e,K as t,L as n,M as r,N as i,Q as a,R as o,Z as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,ut as m,z as h}from"./vapor-runtime-Bp8DIxJg.js";import{a as g}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as _}from"./createHomeSplitExamplePage-B5aM8M8p.js";var v=e=>l(a=>{let s=n(`button`,a);return t(s,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),r(s,`click`,()=>e.onSave?.(`已保存的是数据是123456`)),i(s,o(`触发保存`)),s}),y=e=>l(i=>{let a=n(`input`,i);return t(a,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),c(()=>{s(a,e.modelValue??``)}),r(a,`input`,t=>e[`onUpdate:modelValue`]?.(t.target.value)),a}),b=g(`ref:1:0`,()=>f(``)),x=g(`ref:1:1`,()=>f(``)),S=_({title:`组件 emit`,source:`import { type FC, ref } from '@rue-js/rue'

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

export default ComponentEmitDemo`,Demo:()=>{let{emitInputBindings:r}=g(`useSetup:0:0`,()=>d(()=>({emitInputBindings:{modelValue:x.value,"onUpdate:modelValue":e=>{x.value=e}}})));return l(s=>{let l=n(`div`,s);t(l,`card bg-base-100 shadow`);let d=n(`div`,l);i(l,d),t(d,`card-body`);let f=n(`h2`,d);i(d,f),t(f,`text-2xl font-semibold text-pink-600 mb-3`),i(f,o(`组件 emit`));let g=e(`rue:component:anchor`);i(d,g),u(p(v,{onSave:e=>{b.value=e}}),d,g);let _=n(`p`,d);i(d,_),t(_,`text-gray-700`),i(_,o(`保存消息：`));let S=h(_);i(_,S),c(()=>{a(S,b.value||`（暂无）`)});let C=e(`rue:component:anchor`);i(d,C),c(()=>{let e=p(y,{...r});m(()=>u(e,d,C))});let w=n(`p`,d);i(d,w),t(w,`text-gray-700`),i(w,o(`输入的名称：`));let T=h(w);return i(w,T),c(()=>{a(T,x.value)}),l})}});export{S as default};