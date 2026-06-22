import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ft as s,it as c,l,o as u,pt as d,rt as f,t as p,tn as m,tt as h,yt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var y=e=>l(n=>{let i=f(`input`,n);return d(i,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),t(()=>{g(i,e.modelValue??``)}),r(i,`input`,t=>e.onUpdateModelValue?.(t.target.value)),i}),b=n=>l(i=>{let a=f(`label`,i);d(a,`flex items-center space-x-2`);let l=f(`input`,a);e(a,l),o(l,`type`,`checkbox`),d(l,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),t(()=>{s(l,!!n.modelValue)}),r(l,`change`,e=>n.onUpdateModelValue?.(e.target.checked));let u=f(`span`,a);return e(a,u),d(u,`text-sm font-medium text-gray-700`),e(u,c(`同意协议`)),a}),x=_(`ref:1:0`,()=>n(`小明`)),S=_(`ref:1:1`,()=>n(!1)),C=v({title:`组件级 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>l(n=>{let r=f(`div`,n);d(r,`card bg-base-100 shadow`);let o=f(`div`,r);e(r,o),d(o,`card-body`);let s=f(`h2`,o);e(o,s),d(s,`text-2xl font-semibold text-emerald-600 mb-3`),e(s,c(`组件级 v-model`));let l=h(`rue:component:anchor`);e(o,l),t(()=>{let e=p(y,{modelValue:x.value,onUpdateModelValue:e=>x.value=e});m(()=>u(e,o,l))});let g=f(`p`,o);e(o,g),d(g,`text-gray-700`),e(g,c(`姓名：`));let _=i(g);e(g,_),t(()=>{a(_,x.value)});let v=h(`rue:component:anchor`);e(o,v),t(()=>{let e=p(b,{modelValue:S.value,onUpdateModelValue:e=>S.value=e});m(()=>u(e,o,v))});let C=f(`p`,o);e(o,C),d(C,`text-gray-700`),e(C,c(`同意状态：`));let w=i(C);return e(C,w),t(()=>{a(w,S.value?`是`:`否`)}),r})});export{C as default};