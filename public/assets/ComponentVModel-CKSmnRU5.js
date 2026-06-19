import{Q as e,Qt as t,Wt as n,X as r,Y as i,ct as a,et as o,ht as s,l as c,lt as l,mt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./createHomeSplitExamplePage-Br1mQ323.js";var y=e=>c(n=>{let r=o(`input`,n);return l(r,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),t(()=>{u(r,e.modelValue??``)}),i(r,`input`,t=>e.onUpdateModelValue?.(t.target.value)),r}),b=e=>c(n=>{let s=o(`label`,n);l(s,`flex items-center space-x-2`);let c=o(`input`,s);r(s,c),p(c,`type`,`checkbox`),l(c,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),t(()=>{a(c,!!e.modelValue)}),i(c,`change`,t=>e.onUpdateModelValue?.(t.target.checked));let u=o(`span`,s);return r(s,u),l(u,`text-sm font-medium text-gray-700`),r(u,h(`同意协议`)),s}),x=_(`ref:1:0`,()=>g(`小明`)),S=_(`ref:1:1`,()=>g(!1)),C=v({title:`组件级 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>c(i=>{let a=o(`div`,i);l(a,`card bg-base-100 shadow`);let c=o(`div`,a);r(a,c),l(c,`card-body`);let u=o(`h2`,c);r(c,u),l(u,`text-2xl font-semibold text-emerald-600 mb-3`),r(u,h(`组件级 v-model`));let p=e(`rue:component:anchor`);r(c,p),t(()=>{let e=m(y,{modelValue:x.value,onUpdateModelValue:e=>x.value=e});n(()=>f(e,c,p))});let g=o(`p`,c);r(c,g),l(g,`text-gray-700`),r(g,h(`姓名：`));let _=d(g);r(g,_),t(()=>{s(_,x.value)});let v=e(`rue:component:anchor`);r(c,v),t(()=>{let e=m(b,{modelValue:S.value,onUpdateModelValue:e=>S.value=e});n(()=>f(e,c,v))});let C=o(`p`,c);r(c,C),l(C,`text-gray-700`),r(C,h(`同意状态：`));let w=d(C);return r(C,w),t(()=>{s(w,S.value?`是`:`否`)}),a})});export{C as default};