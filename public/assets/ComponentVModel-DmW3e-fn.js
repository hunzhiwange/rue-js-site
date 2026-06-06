import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Q as o,W as s,Z as c,at as l,ht as u,it as d,l as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./createHomeSplitExamplePage-BftZ6-s2.js";var b=t=>f(r=>{let i=s(`input`,r);return e(i,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),n(()=>{d(i,t.modelValue??``)}),_(i,`input`,e=>t[`onUpdate:modelValue`]?.(e.target.value)),i}),x=i=>f(a=>{let l=s(`label`,a);e(l,`flex items-center space-x-2`);let u=s(`input`,l);t(l,u),c(u,`type`,`checkbox`),e(u,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),n(()=>{o(u,!!i.modelValue)}),_(u,`change`,e=>i[`onUpdate:modelValue`]?.(e.target.checked));let d=s(`span`,l);return t(l,d),e(d,`text-sm font-medium text-gray-700`),t(d,r(`同意协议`)),l}),S=v(`ref:1:0`,()=>u(`小明`)),C=v(`ref:1:1`,()=>u(!1)),w=y({title:`组件级 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>{let{inputBindings:o,checkboxBindings:c}=v(`useSetup:0:0`,()=>h(()=>({inputBindings:{modelValue:S.value,"onUpdate:modelValue":e=>{S.value=e}},checkboxBindings:{modelValue:C.value,"onUpdate:modelValue":e=>{C.value=e}}})));return f(u=>{let d=s(`div`,u);e(d,`card bg-base-100 shadow`);let f=s(`div`,d);t(d,f),e(f,`card-body`);let h=s(`h2`,f);t(f,h),e(h,`text-2xl font-semibold text-emerald-600 mb-3`),t(h,r(`组件级 vModel`));let _=i(`rue:component:anchor`);t(f,_),n(()=>{let e=m(b,{...o});g(()=>p(e,f,_))});let v=s(`p`,f);t(f,v),e(v,`text-gray-700`),t(v,r(`姓名：`));let y=a(v);t(v,y),n(()=>{l(y,S.value)});let w=i(`rue:component:anchor`);t(f,w),n(()=>{let e=m(x,{...c});g(()=>p(e,f,w))});let T=s(`p`,f);t(f,T),e(T,`text-gray-700`),t(T,r(`同意状态：`));let E=a(T);return t(T,E),n(()=>{l(E,C.value?`是`:`否`)}),d})}});export{w as default};