import{$ as e,$t as t,Bt as n,Gt as r,X as i,Z as a,ct as o,gt as s,ht as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./createHomeSplitExamplePage-Q644r2Bq.js";var y=e=>l(n=>{let r=h(`input`,n);return g(r,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),t(()=>{c(r,e.modelValue??``)}),i(r,`input`,t=>e.onUpdateModelValue?.(t.target.value)),r}),b=e=>l(n=>{let r=h(`label`,n);g(r,`flex items-center space-x-2`);let s=h(`input`,r);a(r,s),o(s,`type`,`checkbox`),g(s,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),t(()=>{u(s,!!e.modelValue)}),i(s,`change`,t=>e.onUpdateModelValue?.(t.target.checked));let c=h(`span`,r);return a(r,c),g(c,`text-sm font-medium text-gray-700`),a(c,d(`同意协议`)),r}),x=_(`ref:1:0`,()=>n(`小明`)),S=_(`ref:1:1`,()=>n(!1)),C=v({title:`组件级 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>l(n=>{let i=h(`div`,n);g(i,`card bg-base-100 shadow`);let o=h(`div`,i);a(i,o),g(o,`card-body`);let c=h(`h2`,o);a(o,c),g(c,`text-2xl font-semibold text-emerald-600 mb-3`),a(c,d(`组件级 v-model`));let l=e(`rue:component:anchor`);a(o,l),t(()=>{let e=m(y,{modelValue:x.value,onUpdateModelValue:e=>x.value=e});r(()=>f(e,o,l))});let u=h(`p`,o);a(o,u),g(u,`text-gray-700`),a(u,d(`姓名：`));let _=p(u);a(u,_),t(()=>{s(_,x.value)});let v=e(`rue:component:anchor`);a(o,v),t(()=>{let e=m(b,{modelValue:S.value,onUpdateModelValue:e=>S.value=e});r(()=>f(e,o,v))});let C=h(`p`,o);a(o,C),g(C,`text-gray-700`),a(C,d(`同意状态：`));let w=p(C);return a(C,w),t(()=>{s(w,S.value?`是`:`否`)}),i})});export{C as default};