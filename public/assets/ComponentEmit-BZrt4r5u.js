import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,et as s,ft as c,l,pt as u,q as d,qt as f,s as p,st as m,t as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as _}from"./createHomeSplitExamplePage-C98rg19g.js";var v=t=>l(r=>{let a=i(`button`,r);return m(a,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),d(a,`click`,()=>t.onSave?.(`已保存的是数据是123456`)),n(a,e(`触发保存`)),a}),y=e=>l(t=>{let n=i(`input`,t);return m(n,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),o(()=>{c(n,e.modelValue??``)}),d(n,`input`,t=>e.onUpdateModelValue?.(t.target.value)),n}),b=g(`ref:1:0`,()=>r(``)),x=g(`ref:1:1`,()=>r(``)),S=_({title:`组件 emit`,source:`import { type FC, ref } from '@rue-js/rue'

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
  onUpdateModelValue?: (value: string) => void
}> = props => {
  return (
    <input
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
      value={props.modelValue ?? ''}
      onInput={(event: any) => props.onUpdateModelValue?.((event.target as HTMLInputElement).value)}
    />
  )
}

const savedMsg = ref('')
const emitName = ref('')

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
        <EmitInputChild {...emitInputBindings} />
        <p className="text-gray-700">输入的名称：{emitName.value}</p>
      </div>
    </div>
  )
}

export default ComponentEmitDemo
`,Demo:()=>{let{emitInputBindings:r}=g(`useSetup:0:0`,()=>f(()=>({emitInputBindings:{modelValue:x.value,onUpdateModelValue:e=>{x.value=e}}})));return l(c=>{let l=i(`div`,c);m(l,`card bg-base-100 shadow`);let d=i(`div`,l);n(l,d),m(d,`card-body`);let f=i(`h2`,d);n(d,f),m(f,`text-2xl font-semibold text-pink-600 mb-3`),n(f,e(`组件 emit`));let g=a(`rue:component:anchor`);n(d,g),p(h(v,{onSave:e=>{b.value=e}}),d,g);let _=i(`p`,d);n(d,_),m(_,`text-gray-700`),n(_,e(`保存消息：`));let S=s(_);n(_,S),o(()=>{u(S,b.value||`（暂无）`)});let C=a(`rue:component:anchor`);n(d,C),o(()=>{let e=h(y,{...r});t(()=>p(e,d,C))});let w=i(`p`,d);n(d,w),m(w,`text-gray-700`),n(w,e(`输入的名称：`));let T=s(w);return n(w,T),o(()=>{u(T,x.value)}),l})}});export{S as default};