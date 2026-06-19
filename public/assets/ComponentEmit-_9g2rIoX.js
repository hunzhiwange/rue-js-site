import{I as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,mt as d,nt as f,o as p,st as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as b}from"./createHomeSplitExamplePage-Br1mQ323.js";var x=t=>{let{emit:n}=y(`useSetup:0:0`,()=>o(()=>({emit:y(`computed:1:0`,()=>_(()=>e(t)))})));return l(e=>{let t=s(`button`,e);return u(t,`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`),a(t,`click`,()=>n.get()(`save`,`已保存的是数据是123456`)),i(t,g(`触发保存`)),t})},S=c=>{let{emit:f}=y(`useSetup:0:0:dup1`,()=>o(()=>({emit:y(`computed:1:1`,()=>_(()=>e(c)))})));return l(e=>{let o=s(`label`,e);u(o,`block`);let l=s(`span`,o);i(o,l),u(l,`mb-1.5 block text-sm font-medium text-gray-700`);let h=t(`rue:slot:anchor`);i(l,h),n(()=>{let e=c.label??`输入名称`;r(()=>p(e,l,h))});let g=s(`input`,o);return i(o,g),u(g,`block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200`),m(g,`placeholder`,`请输入名称`),n(()=>{d(g,c.modelValue??``)}),a(g,`input`,e=>f.get()(`updateModelValue`,e.target.value)),o})},C=y(`ref:1:2`,()=>v(``)),w=y(`ref:1:3`,()=>v(``)),T=y(`ref:1:4`,()=>v(``)),E=b({title:`组件 emit`,source:`import { type FC, ref, useEmit } from '@rue-js/rue'

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
`,Demo:()=>{let{emitInputBindings:e}=y(`useSetup:0:0:dup2`,()=>o(()=>({emitInputBindings:{modelValue:w.value,onUpdateModelValue:e=>{w.value=e}}})));return l(a=>{let o=s(`div`,a);u(o,`card bg-base-100 shadow`);let l=s(`div`,o);i(o,l),u(l,`card-body`);let d=s(`h2`,l);i(l,d),u(d,`text-2xl font-semibold text-pink-600 mb-3`),i(d,g(`组件 emit`));let m=t(`rue:component:anchor`);i(l,m),p(h(x,{onSave:e=>{C.value=e}}),l,m);let _=s(`p`,l);i(l,_),u(_,`text-gray-700`),i(_,g(`保存消息：`));let v=f(_);i(_,v),n(()=>{c(v,C.value||`（暂无）`)});let y=t(`rue:component:anchor`);i(l,y),n(()=>{let t=h(S,{label:`手写 modelValue / onUpdateModelValue`,...e});r(()=>p(t,l,y))});let b=s(`p`,l);i(l,b),u(b,`text-gray-700`),i(b,g(`输入的名称：`));let E=f(b);i(b,E),n(()=>{c(E,w.value)});let D=t(`rue:component:anchor`);i(l,D),n(()=>{let e=h(S,{label:`v-model`,modelValue:T.value,onUpdateModelValue:e=>T.value=e});r(()=>p(e,l,D))});let O=s(`p`,l);i(l,O),u(O,`text-gray-700`),i(O,g(`v-model 名称：`));let k=f(O);return i(O,k),n(()=>{c(k,T.value)}),o})}});export{E as default};