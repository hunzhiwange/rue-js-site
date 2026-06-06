import{$ as e,B as t,Dt as n,G as r,H as i,K as a,W as o,at as s,ht as c,it as l,l as u,s as d,t as f,wt as p,yt as m,z as h}from"./vapor-runtime-C1rlwc61.js";import{a as g}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as _}from"./createHomeSplitExamplePage-BftZ6-s2.js";var v=n=>u(i=>{let a=o(`button`,i);return e(a,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),h(a,`click`,()=>n.onSave?.(`已保存的是数据是123456`)),t(a,r(`触发保存`)),a}),y=t=>u(r=>{let i=o(`input`,r);return e(i,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),n(()=>{l(i,t.modelValue??``)}),h(i,`input`,e=>t[`onUpdate:modelValue`]?.(e.target.value)),i}),b=g(`ref:1:0`,()=>c(``)),x=g(`ref:1:1`,()=>c(``)),S=_({title:`组件 emit`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>{let{emitInputBindings:c}=g(`useSetup:0:0`,()=>p(()=>({emitInputBindings:{modelValue:x.value,"onUpdate:modelValue":e=>{x.value=e}}})));return u(l=>{let u=o(`div`,l);e(u,`card bg-base-100 shadow`);let p=o(`div`,u);t(u,p),e(p,`card-body`);let h=o(`h2`,p);t(p,h),e(h,`text-2xl font-semibold text-pink-600 mb-3`),t(h,r(`组件 emit`));let g=i(`rue:component:anchor`);t(p,g),d(f(v,{onSave:e=>{b.value=e}}),p,g);let _=o(`p`,p);t(p,_),e(_,`text-gray-700`),t(_,r(`保存消息：`));let S=a(_);t(_,S),n(()=>{s(S,b.value||`（暂无）`)});let C=i(`rue:component:anchor`);t(p,C),n(()=>{let e=f(y,{...c});m(()=>d(e,p,C))});let w=o(`p`,p);t(p,w),e(w,`text-gray-700`),t(w,r(`输入的名称：`));let T=a(w);return t(w,T),n(()=>{s(T,x.value)}),u})}});export{S as default};