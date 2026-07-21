import{Ct as e,Mt as t,Tt as n,dt as r,ht as i,jt as a,mt as o,ot as s,pn as c,pt as l,st as u,tn as d,vn as f,wt as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var y=e=>m(t=>{let r=l(`input`,t);return n(r,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),d(()=>{a(r,e.modelValue??``)}),s(r,`input`,t=>e.onUpdateModelValue?.(t.target.value)),r}),b=t=>m(r=>{let i=l(`label`,r);n(i,`flex items-center space-x-2`);let a=l(`input`,i);u(i,a),e(a,`type`,`checkbox`),n(a,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),d(()=>{p(a,!!t.modelValue)}),s(a,`change`,e=>t.onUpdateModelValue?.(e.target.checked));let c=l(`span`,i);return u(i,c),n(c,`text-sm font-medium text-gray-700`),u(c,o(`同意协议`)),i}),x=_(`ref:1:0`,()=>c(`小明`)),S=_(`ref:1:1`,()=>c(!1)),C=v({title:`组件级 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>m(e=>{let a=l(`div`,e);n(a,`card bg-base-100 shadow`);let s=l(`div`,a);u(a,s),n(s,`card-body`);let c=l(`h2`,s);u(s,c),n(c,`text-2xl font-semibold text-emerald-600 mb-3`),u(c,o(`组件级 v-model`));let p=r(`rue:component:anchor`);u(s,p),d(()=>{let e=g(y,{modelValue:x.value,onUpdateModelValue:e=>x.value=e});f(()=>h(e,s,p))});let m=l(`p`,s);u(s,m),n(m,`text-gray-700`),u(m,o(`姓名：`));let _=i(m);u(m,_),d(()=>{t(_,x.value)});let v=r(`rue:component:anchor`);u(s,v),d(()=>{let e=g(b,{modelValue:S.value,onUpdateModelValue:e=>S.value=e});f(()=>h(e,s,v))});let C=l(`p`,s);u(s,C),n(C,`text-gray-700`),u(C,o(`同意状态：`));let w=i(C);return u(C,w),d(()=>{t(w,S.value?`是`:`否`)}),a})});export{C as default};