import{$ as e,Ht as t,J as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,mt as u,ot as d,pt as f,qt as p,s as m,st as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as y}from"./createHomeSplitExamplePage-CJbW_xoB.js";var b=t=>l(r=>{let a=e(`input`,r);return s(a,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),i(()=>{f(a,t.modelValue??``)}),n(a,`input`,e=>t[`onUpdate:modelValue`]?.(e.target.value)),a}),x=t=>l(r=>{let o=e(`label`,r);s(o,`flex items-center space-x-2`);let l=e(`input`,o);a(o,l),d(l,`type`,`checkbox`),s(l,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),i(()=>{h(l,!!t.modelValue)}),n(l,`change`,e=>t[`onUpdate:modelValue`]?.(e.target.checked));let u=e(`span`,o);return a(o,u),s(u,`text-sm font-medium text-gray-700`),a(u,c(`同意协议`)),o}),S=v(`ref:1:0`,()=>r(`小明`)),C=v(`ref:1:1`,()=>r(!1)),w=y({title:`组件级 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

const ControlledInput: FC<{
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

export default ComponentVModelDemo
`,Demo:()=>{let{inputBindings:n,checkboxBindings:r}=v(`useSetup:0:0`,()=>p(()=>({inputBindings:{modelValue:S.value,"onUpdate:modelValue":e=>{S.value=e}},checkboxBindings:{modelValue:C.value,"onUpdate:modelValue":e=>{C.value=e}}})));return l(l=>{let d=e(`div`,l);s(d,`card bg-base-100 shadow`);let f=e(`div`,d);a(d,f),s(f,`card-body`);let p=e(`h2`,f);a(f,p),s(p,`text-2xl font-semibold text-emerald-600 mb-3`),a(p,c(`组件级 vModel`));let h=o(`rue:component:anchor`);a(f,h),i(()=>{let e=g(b,{...n});t(()=>m(e,f,h))});let v=e(`p`,f);a(f,v),s(v,`text-gray-700`),a(v,c(`姓名：`));let y=_(v);a(v,y),i(()=>{u(y,S.value)});let w=o(`rue:component:anchor`);a(f,w),i(()=>{let e=g(x,{...r});t(()=>m(e,f,w))});let T=e(`p`,f);a(f,T),s(T,`text-gray-700`),a(T,c(`同意状态：`));let E=_(T);return a(T,E),i(()=>{u(E,C.value?`是`:`否`)}),d})}});export{w as default};