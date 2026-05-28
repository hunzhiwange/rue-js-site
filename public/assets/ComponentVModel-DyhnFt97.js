import{$ as e,J as t,Kt as n,Lt as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,ot as p,pt as m,st as h,t as g,tt as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v}from"./vapor-helpers-vapor-DkadWylb.js";import{t as y}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var b=n=>l(r=>{let i=e(`input`,r);return c(i,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),o(()=>{m(i,n.modelValue??``)}),t(i,`input`,e=>n[`onUpdate:modelValue`]?.(e.target.value)),i}),x=n=>l(r=>{let i=e(`label`,r);c(i,`flex items-center space-x-2`);let s=e(`input`,i);a(i,s),p(s,`type`,`checkbox`),c(s,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),o(()=>{h(s,!!n.modelValue)}),t(s,`change`,e=>n[`onUpdate:modelValue`]?.(e.target.checked));let l=e(`span`,i);return a(i,l),c(l,`text-sm font-medium text-gray-700`),a(l,u(`同意协议`)),i}),S=v(`ref:1:0`,()=>r(`小明`)),C=v(`ref:1:1`,()=>r(!1)),w=y({title:`组件级 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>{let{inputBindings:t,checkboxBindings:r}=v(`useSetup:0:0`,()=>n(()=>({inputBindings:{modelValue:S.value,"onUpdate:modelValue":e=>{S.value=e}},checkboxBindings:{modelValue:C.value,"onUpdate:modelValue":e=>{C.value=e}}})));return l(n=>{let l=e(`div`,n);c(l,`card bg-base-100 shadow`);let p=e(`div`,l);a(l,p),c(p,`card-body`);let m=e(`h2`,p);a(p,m),c(m,`text-2xl font-semibold text-emerald-600 mb-3`),a(m,u(`组件级 vModel`));let h=s(`rue:component:anchor`);a(p,h),o(()=>{let e=g(b,{...t});i(()=>d(e,p,h))});let v=e(`p`,p);a(p,v),c(v,`text-gray-700`),a(v,u(`姓名：`));let y=_(v);a(v,y),o(()=>{f(y,S.value)});let w=s(`rue:component:anchor`);a(p,w),o(()=>{let e=g(x,{...r});i(()=>d(e,p,w))});let T=e(`p`,p);a(p,T),c(T,`text-gray-700`),a(T,u(`同意状态：`));let E=_(T);return a(T,E),o(()=>{f(E,C.value?`是`:`否`)}),l})}});export{w as default};