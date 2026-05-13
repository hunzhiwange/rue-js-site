import{G as e,I as t,L as n,M as r,P as i,R as a,U as o,W as s,X as c,Z as l,_t as u,bt as d,c as f,j as p,lt as m,pt as h,t as g,u as _}from"./vapor-runtime-D3a-68js.js";import{a as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./createHomeSplitExamplePage-CLNmVfsf.js";var b=n=>_(()=>{let r=t(`input`);return e(r,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),d(()=>{c(r,n.modelValue??``)}),p(r,`input`,e=>n[`onUpdate:modelValue`]?.(e.target.value)),r}),x=i=>_(()=>{let a=t(`label`);e(a,`flex items-center space-x-2`);let c=t(`input`);r(a,c),o(c,`type`,`checkbox`),e(c,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),d(()=>{s(c,!!i.modelValue)}),p(c,`change`,e=>i[`onUpdate:modelValue`]?.(e.target.checked));let l=t(`span`);return r(a,l),e(l,`text-sm font-medium text-gray-700`),r(l,n(`同意协议`)),a}),S=v(`ref:1:0`,()=>m(`小明`)),C=v(`ref:1:1`,()=>m(!1)),w=y({title:`组件级 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

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

export default ComponentVModelDemo`,Demo:()=>{let{inputBindings:o,checkboxBindings:s}=v(`useSetup:0:0`,()=>u(()=>({inputBindings:{modelValue:S.value,"onUpdate:modelValue":e=>{S.value=e}},checkboxBindings:{modelValue:C.value,"onUpdate:modelValue":e=>{C.value=e}}})));return _(()=>{let c=t(`div`);e(c,`card bg-base-100 shadow`);let u=t(`div`);r(c,u),e(u,`card-body`);let p=t(`h2`);r(u,p),e(p,`text-2xl font-semibold text-emerald-600 mb-3`),r(p,n(`组件级 vModel`));let m=i(`rue:component:anchor`);r(u,m),d(()=>{let e=g(b,{...o});h(()=>f(e,u,m))});let _=t(`p`);r(u,_),e(_,`text-gray-700`),r(_,n(`姓名：`));let v=a(_);r(_,v),d(()=>{l(v,S.value)});let y=i(`rue:component:anchor`);r(u,y),d(()=>{let e=g(x,{...s});h(()=>f(e,u,y))});let w=t(`p`);r(u,w),e(w,`text-gray-700`),r(w,n(`同意状态：`));let T=a(w);return r(w,T),d(()=>{l(T,C.value?`是`:`否`)}),c})}});export{w as default};