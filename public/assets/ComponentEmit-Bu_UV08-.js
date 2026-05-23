import{Et as e,H as t,J as n,K as r,V as i,W as a,_t as o,d as s,kt as c,l,ot as u,q as d,st as f,t as p,tt as m,xt as h}from"./vapor-runtime-EUvELKQT.js";import{a as g}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as _}from"./createHomeSplitExamplePage-BuifU8mn.js";var v=e=>s(n=>{let a=r(`button`,n);return m(a,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),i(a,`click`,()=>e.onSave?.(`已保存的是数据是123456`)),t(a,d(`触发保存`)),a}),y=e=>s(t=>{let n=r(`input`,t);return m(n,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),c(()=>{u(n,e.modelValue??``)}),i(n,`input`,t=>e[`onUpdate:modelValue`]?.(t.target.value)),n}),b=g(`ref:1:0`,()=>o(``)),x=g(`ref:1:1`,()=>o(``)),S=_({title:`组件 emit`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>{let{emitInputBindings:i}=g(`useSetup:0:0`,()=>e(()=>({emitInputBindings:{modelValue:x.value,"onUpdate:modelValue":e=>{x.value=e}}})));return s(e=>{let o=r(`div`,e);m(o,`card bg-base-100 shadow`);let s=r(`div`,o);t(o,s),m(s,`card-body`);let u=r(`h2`,s);t(s,u),m(u,`text-2xl font-semibold text-pink-600 mb-3`),t(u,d(`组件 emit`));let g=a(`rue:component:anchor`);t(s,g),l(p(v,{onSave:e=>{b.value=e}}),s,g);let _=r(`p`,s);t(s,_),m(_,`text-gray-700`),t(_,d(`保存消息：`));let S=n(_);t(_,S),c(()=>{f(S,b.value||`（暂无）`)});let C=a(`rue:component:anchor`);t(s,C),c(()=>{let e=p(y,{...i});h(()=>l(e,s,C))});let w=r(`p`,s);t(s,w),m(w,`text-gray-700`),t(w,d(`输入的名称：`));let T=n(w);return t(w,T),c(()=>{f(T,x.value)}),o})}});export{S as default};