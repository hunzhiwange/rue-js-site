import{G as e,I as t,L as n,M as r,P as i,R as a,U as o,W as s,X as c,Z as l,_t as u,bt as d,c as f,j as p,lt as m,pt as h,t as g,u as _}from"./vapor-runtime-D3a-68js.js";import{a as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./createHomeSplitExamplePage-CLNmVfsf.js";var b=i=>_(()=>{let a=t(`label`);e(a,`flex items-center space-x-2`);let c=t(`input`);r(a,c),o(c,`type`,`checkbox`),e(c,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),d(()=>{s(c,!!i.enabled)}),p(c,`change`,e=>i[`onUpdate:enabled`]?.(e.target.checked));let l=t(`span`);return r(a,l),e(l,`text-sm font-medium text-gray-700`),r(l,n(`启用`)),a}),x=i=>_(()=>{let a=t(`div`);e(a,`grid gap-2`);let o=t(`div`);r(a,o),e(o,`flex gap-2 items-center`);let s=t(`span`);r(o,s),r(s,n(`默认`));let l=t(`input`);r(o,l),e(l,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),d(()=>{c(l,i.modelValue??``)}),p(l,`input`,e=>i[`onUpdate:modelValue`]?.(e.target.value));let u=t(`div`);r(a,u),e(u,`flex gap-2 items-center`);let f=t(`span`);r(u,f),r(f,n(`标题`));let m=t(`input`);r(u,m),e(m,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),d(()=>{c(m,i.title??``)}),p(m,`input`,e=>i[`onUpdate:title`]?.(e.target.value));let h=t(`div`);r(a,h),e(h,`flex gap-2 items-center`);let g=t(`span`);r(h,g),r(g,n(`内容`));let _=t(`textarea`);return r(h,_),e(_,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),d(()=>{c(_,i.content??``)}),p(_,`input`,e=>i[`onUpdate:content`]?.(e.target.value)),a}),S=v(`ref:1:0`,()=>m(`初始标题`)),C=v(`ref:1:1`,()=>m(!1)),w=v(`ref:1:2`,()=>m(`默认输入`)),T=v(`ref:1:3`,()=>m(`初始内容`)),E=y({title:`命名 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

const EnabledToggleComp: FC<{
  enabled?: boolean
  ['onUpdate:enabled']?: (value: boolean) => void
  ['vModel:enabled']?: { value: boolean }
}> = props => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
        checked={!!props.enabled}
        onChange={(event: any) => props['onUpdate:enabled']?.((event.target as HTMLInputElement).checked)}
      />
      <span className="text-sm font-medium text-gray-700">启用</span>
    </label>
  )
}

const MultiModelComp: FC<{
  modelValue?: string
  ['onUpdate:modelValue']?: (value: string) => void
  title?: string
  ['onUpdate:title']?: (value: string) => void
  content?: string
  ['onUpdate:content']?: (value: string) => void
  vModel?: { value: string }
  ['vModel:title']?: { value: string }
  ['vModel:content']?: { value: string }
}> = props => {
  return (
    <div className="grid gap-2">
      <div className="flex gap-2 items-center">
        <span>默认</span>
        <input
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
          value={props.modelValue ?? ''}
          onInput={(event: any) => props['onUpdate:modelValue']?.((event.target as HTMLInputElement).value)}
        />
      </div>
      <div className="flex gap-2 items-center">
        <span>标题</span>
        <input
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
          value={props.title ?? ''}
          onInput={(event: any) => props['onUpdate:title']?.((event.target as HTMLInputElement).value)}
        />
      </div>
      <div className="flex gap-2 items-center">
        <span>内容</span>
        <textarea
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2"
          value={props.content ?? ''}
          onInput={(event: any) => props['onUpdate:content']?.((event.target as HTMLTextAreaElement).value)}
        />
      </div>
    </div>
  )
}

const title = ref('初始标题')
const enabled = ref(false)
const plain = ref('默认输入')
const content = ref('初始内容')

const NamedVModelDemo: FC = () => {
  const multiModelBindings = {
    modelValue: plain.value,
    'onUpdate:modelValue': (value: string) => {
      plain.value = value
    },
    title: title.value,
    'onUpdate:title': (value: string) => {
      title.value = value
    },
    content: content.value,
    'onUpdate:content': (value: string) => {
      content.value = value
    },
  }

  const enabledBindings = {
    enabled: enabled.value,
    'onUpdate:enabled': (value: boolean) => {
      enabled.value = value
    },
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-3">命名 vModel</h2>
        <MultiModelComp {...multiModelBindings} />
        <p>默认 vModel：{plain.value}</p>
        <p>标题：{title.value}</p>
        <p>内容：{content.value}</p>
        <EnabledToggleComp {...enabledBindings} />
        <p>启用状态：{enabled.value ? '是' : '否'}</p>
      </div>
    </div>
  )
}

export default NamedVModelDemo`,Demo:()=>{let{multiModelBindings:o,enabledBindings:s}=v(`useSetup:0:0`,()=>u(()=>({multiModelBindings:{modelValue:w.value,"onUpdate:modelValue":e=>{w.value=e},title:S.value,"onUpdate:title":e=>{S.value=e},content:T.value,"onUpdate:content":e=>{T.value=e}},enabledBindings:{enabled:C.value,"onUpdate:enabled":e=>{C.value=e}}})));return _(()=>{let c=t(`div`);e(c,`card bg-base-100 shadow`);let u=t(`div`);r(c,u),e(u,`card-body`);let p=t(`h2`);r(u,p),e(p,`text-2xl font-semibold mb-3`),r(p,n(`命名 vModel`));let m=i(`rue:component:anchor`);r(u,m),d(()=>{let e=g(x,{...o});h(()=>f(e,u,m))});let _=t(`p`);r(u,_),r(_,n(`默认 vModel：`));let v=a(_);r(_,v),d(()=>{l(v,w.value)});let y=t(`p`);r(u,y),r(y,n(`标题：`));let E=a(y);r(y,E),d(()=>{l(E,S.value)});let D=t(`p`);r(u,D),r(D,n(`内容：`));let O=a(D);r(D,O),d(()=>{l(O,T.value)});let k=i(`rue:component:anchor`);r(u,k),d(()=>{let e=g(b,{...s});h(()=>f(e,u,k))});let A=t(`p`);r(u,A),r(A,n(`启用状态：`));let j=a(A);return r(A,j),d(()=>{l(j,C.value?`是`:`否`)}),c})}});export{E as default};