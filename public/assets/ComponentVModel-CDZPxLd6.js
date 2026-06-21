import{$t as e,Jt as t,Q as n,Z as r,_t as i,dt as a,et as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,ut as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var y=e=>c(t=>{let n=u(`input`,t);return a(n,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),g(()=>{i(n,e.modelValue??``)}),r(n,`input`,t=>e.onUpdateModelValue?.(t.target.value)),n}),b=e=>c(t=>{let i=u(`label`,t);a(i,`flex items-center space-x-2`);let o=u(`input`,i);n(i,o),l(o,`type`,`checkbox`),a(o,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),g(()=>{m(o,!!e.modelValue)}),r(o,`change`,t=>e.onUpdateModelValue?.(t.target.checked));let s=u(`span`,i);return n(i,s),a(s,`text-sm font-medium text-gray-700`),n(s,f(`同意协议`)),i}),x=_(`ref:1:0`,()=>t(`小明`)),S=_(`ref:1:1`,()=>t(!1)),C=v({title:`组件级 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>c(t=>{let r=u(`div`,t);a(r,`card bg-base-100 shadow`);let i=u(`div`,r);n(r,i),a(i,`card-body`);let c=u(`h2`,i);n(i,c),a(c,`text-2xl font-semibold text-emerald-600 mb-3`),n(c,f(`组件级 v-model`));let l=o(`rue:component:anchor`);n(i,l),g(()=>{let t=p(y,{modelValue:x.value,onUpdateModelValue:e=>x.value=e});e(()=>d(t,i,l))});let m=u(`p`,i);n(i,m),a(m,`text-gray-700`),n(m,f(`姓名：`));let _=s(m);n(m,_),g(()=>{h(_,x.value)});let v=o(`rue:component:anchor`);n(i,v),g(()=>{let t=p(b,{modelValue:S.value,onUpdateModelValue:e=>S.value=e});e(()=>d(t,i,v))});let C=u(`p`,i);n(i,C),a(C,`text-gray-700`),n(C,f(`同意状态：`));let w=s(C);return n(C,w),g(()=>{h(w,S.value?`是`:`否`)}),r})});export{C as default};