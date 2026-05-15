import{F as e,G as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,_t as u,d,l as f,mt as p,ot as m,t as h,ut as g,z as _}from"./vapor-runtime-Bp8DIxJg.js";import{a as v}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as y}from"./createHomeSplitExamplePage-B5aM8M8p.js";var b=e=>d(t=>{let a=r(`input`,t);return n(a,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),u(()=>{l(a,e.modelValue??``)}),i(a,`input`,t=>e[`onUpdate:modelValue`]?.(t.target.value)),a}),x=e=>d(o=>{let l=r(`label`,o);n(l,`flex items-center space-x-2`);let d=r(`input`,l);a(l,d),c(d,`type`,`checkbox`),n(d,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),u(()=>{t(d,!!e.modelValue)}),i(d,`change`,t=>e[`onUpdate:modelValue`]?.(t.target.checked));let f=r(`span`,l);return a(l,f),n(f,`text-sm font-medium text-gray-700`),a(f,s(`同意协议`)),l}),S=v(`ref:1:0`,()=>m(`小明`)),C=v(`ref:1:1`,()=>m(!1)),w=y({title:`组件级 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

const ControlledInput: FC<{
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

const ControlledCheckbox: FC<{
  modelValue?: boolean
  ['onUpdate:modelValue']?: (value: boolean) => void
  vModel?: { value: boolean }
}> = props => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
        checked={!!props.modelValue}
        onChange={(event: any) =>
          props['onUpdate:modelValue']?.((event.target as HTMLInputElement).checked)
        }
      />
      <span className="text-sm font-medium text-gray-700">同意协议</span>
    </label>
  )
}

const modelName = ref('小明')
const agree = ref(false)

const ComponentVModelDemo: FC = () => {
  const inputBindings = {
    modelValue: modelName.value,
    'onUpdate:modelValue': (value: string) => {
      modelName.value = value
    },
  }

  const checkboxBindings = {
    modelValue: agree.value,
    'onUpdate:modelValue': (value: boolean) => {
      agree.value = value
    },
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-emerald-600 mb-3">组件级 vModel</h2>
        <ControlledInput {...inputBindings} />
        <p className="text-gray-700">姓名：{modelName.value}</p>
        <ControlledCheckbox {...checkboxBindings} />
        <p className="text-gray-700">同意状态：{agree.value ? '是' : '否'}</p>
      </div>
    </div>
  )
}

export default ComponentVModelDemo`,Demo:()=>{let{inputBindings:t,checkboxBindings:i}=v(`useSetup:0:0`,()=>p(()=>({inputBindings:{modelValue:S.value,"onUpdate:modelValue":e=>{S.value=e}},checkboxBindings:{modelValue:C.value,"onUpdate:modelValue":e=>{C.value=e}}})));return d(c=>{let l=r(`div`,c);n(l,`card bg-base-100 shadow`);let d=r(`div`,l);a(l,d),n(d,`card-body`);let p=r(`h2`,d);a(d,p),n(p,`text-2xl font-semibold text-emerald-600 mb-3`),a(p,s(`组件级 vModel`));let m=e(`rue:component:anchor`);a(d,m),u(()=>{let e=h(b,{...t});g(()=>f(e,d,m))});let v=r(`p`,d);a(d,v),n(v,`text-gray-700`),a(v,s(`姓名：`));let y=_(v);a(v,y),u(()=>{o(y,S.value)});let w=e(`rue:component:anchor`);a(d,w),u(()=>{let e=h(x,{...i});g(()=>f(e,d,w))});let T=r(`p`,d);a(d,T),n(T,`text-gray-700`),a(T,s(`同意状态：`));let E=_(T);return a(T,E),u(()=>{o(E,C.value?`是`:`否`)}),l})}});export{w as default};