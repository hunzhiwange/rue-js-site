import{$ as e,J as t,Kt as n,Lt as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,pt as p,t as m,tt as h}from"./vapor-runtime-BR_2rwNk.js";import{a as g}from"./vapor-helpers-vapor-DkadWylb.js";import{t as _}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var v=n=>l(r=>{let i=e(`button`,r);return c(i,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),t(i,`click`,()=>n.onSave?.(`已保存的是数据是123456`)),a(i,u(`触发保存`)),i}),y=n=>l(r=>{let i=e(`input`,r);return c(i,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),o(()=>{p(i,n.modelValue??``)}),t(i,`input`,e=>n[`onUpdate:modelValue`]?.(e.target.value)),i}),b=g(`ref:1:0`,()=>r(``)),x=g(`ref:1:1`,()=>r(``)),S=_({title:`组件 emit`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>{let{emitInputBindings:t}=g(`useSetup:0:0`,()=>n(()=>({emitInputBindings:{modelValue:x.value,"onUpdate:modelValue":e=>{x.value=e}}})));return l(n=>{let r=e(`div`,n);c(r,`card bg-base-100 shadow`);let l=e(`div`,r);a(r,l),c(l,`card-body`);let p=e(`h2`,l);a(l,p),c(p,`text-2xl font-semibold text-pink-600 mb-3`),a(p,u(`组件 emit`));let g=s(`rue:component:anchor`);a(l,g),d(m(v,{onSave:e=>{b.value=e}}),l,g);let _=e(`p`,l);a(l,_),c(_,`text-gray-700`),a(_,u(`保存消息：`));let S=h(_);a(_,S),o(()=>{f(S,b.value||`（暂无）`)});let C=s(`rue:component:anchor`);a(l,C),o(()=>{let e=m(y,{...t});i(()=>d(e,l,C))});let w=e(`p`,l);a(l,w),c(w,`text-gray-700`),a(w,u(`输入的名称：`));let T=h(w);return a(w,T),o(()=>{f(T,x.value)}),r})}});export{S as default};