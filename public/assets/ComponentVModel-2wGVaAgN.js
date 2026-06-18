import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,at as s,et as c,ft as l,l as u,ot as d,pt as f,q as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./createHomeSplitExamplePage-C98rg19g.js";var y=e=>u(t=>{let n=i(`input`,t);return h(n,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),o(()=>{l(n,e.modelValue??``)}),p(n,`input`,t=>e.onUpdateModelValue?.(t.target.value)),n}),b=t=>u(r=>{let a=i(`label`,r);h(a,`flex items-center space-x-2`);let c=i(`input`,a);n(a,c),s(c,`type`,`checkbox`),h(c,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),o(()=>{d(c,!!t.modelValue)}),p(c,`change`,e=>t.onUpdateModelValue?.(e.target.checked));let l=i(`span`,a);return n(a,l),h(l,`text-sm font-medium text-gray-700`),n(l,e(`同意协议`)),a}),x=_(`ref:1:0`,()=>r(`小明`)),S=_(`ref:1:1`,()=>r(!1)),C=v({title:`组件级 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

const ControlledInput: FC<{
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

const ControlledCheckbox: FC<{
  modelValue?: boolean
  onUpdateModelValue?: (value: boolean) => void
}> = props => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
        checked={!!props.modelValue}
        onChange={(event: any) =>
          props.onUpdateModelValue?.((event.target as HTMLInputElement).checked)
        }
      />
      <span className="text-sm font-medium text-gray-700">同意协议</span>
    </label>
  )
}

const modelName = ref('小明')
const agree = ref(false)

const ComponentVModelDemo: FC = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-emerald-600 mb-3">组件级 v-model</h2>
        <ControlledInput v-model={modelName.value} />
        <p className="text-gray-700">姓名：{modelName.value}</p>
        <ControlledCheckbox v-model={agree.value} />
        <p className="text-gray-700">同意状态：{agree.value ? '是' : '否'}</p>
      </div>
    </div>
  )
}

export default ComponentVModelDemo
`,Demo:()=>u(r=>{let s=i(`div`,r);h(s,`card bg-base-100 shadow`);let l=i(`div`,s);n(s,l),h(l,`card-body`);let u=i(`h2`,l);n(l,u),h(u,`text-2xl font-semibold text-emerald-600 mb-3`),n(u,e(`组件级 v-model`));let d=a(`rue:component:anchor`);n(l,d),o(()=>{let e=g(y,{modelValue:x.value,onUpdateModelValue:e=>x.value=e});t(()=>m(e,l,d))});let p=i(`p`,l);n(l,p),h(p,`text-gray-700`),n(p,e(`姓名：`));let _=c(p);n(p,_),o(()=>{f(_,x.value)});let v=a(`rue:component:anchor`);n(l,v),o(()=>{let e=g(b,{modelValue:S.value,onUpdateModelValue:e=>S.value=e});t(()=>m(e,l,v))});let C=i(`p`,l);n(l,C),h(C,`text-gray-700`),n(C,e(`同意状态：`));let w=c(C);return n(C,w),o(()=>{f(w,S.value?`是`:`否`)}),s})});export{C as default};