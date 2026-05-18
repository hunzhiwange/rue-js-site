import{F as e,G as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,d as u,dt as d,ht as f,l as p,st as m,t as h,vt as g,z as _}from"./vapor-runtime-BuwLbCGk.js";import{a as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as y}from"./createHomeSplitExamplePage-2wtBgDCk.js";var b=e=>u(o=>{let l=r(`label`,o);n(l,`flex items-center space-x-2`);let u=r(`input`,l);a(l,u),c(u,`type`,`checkbox`),n(u,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),g(()=>{t(u,!!e.enabled)}),i(u,`change`,t=>e[`onUpdate:enabled`]?.(t.target.checked));let d=r(`span`,l);return a(l,d),n(d,`text-sm font-medium text-gray-700`),a(d,s(`启用`)),l}),x=e=>u(t=>{let o=r(`div`,t);n(o,`grid gap-2`);let c=r(`div`,o);a(o,c),n(c,`flex gap-2 items-center`);let u=r(`span`,c);a(c,u),a(u,s(`默认`));let d=r(`input`,c);a(c,d),n(d,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),g(()=>{l(d,e.modelValue??``)}),i(d,`input`,t=>e[`onUpdate:modelValue`]?.(t.target.value));let f=r(`div`,o);a(o,f),n(f,`flex gap-2 items-center`);let p=r(`span`,f);a(f,p),a(p,s(`标题`));let m=r(`input`,f);a(f,m),n(m,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),g(()=>{l(m,e.title??``)}),i(m,`input`,t=>e[`onUpdate:title`]?.(t.target.value));let h=r(`div`,o);a(o,h),n(h,`flex gap-2 items-center`);let _=r(`span`,h);a(h,_),a(_,s(`内容`));let v=r(`textarea`,h);return a(h,v),n(v,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),g(()=>{l(v,e.content??``)}),i(v,`input`,t=>e[`onUpdate:content`]?.(t.target.value)),o}),S=v(`ref:1:0`,()=>m(`初始标题`)),C=v(`ref:1:1`,()=>m(!1)),w=v(`ref:1:2`,()=>m(`默认输入`)),T=v(`ref:1:3`,()=>m(`初始内容`)),E=y({title:`命名 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

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
        onChange={(event: any) =>
          props['onUpdate:enabled']?.((event.target as HTMLInputElement).checked)
        }
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
          onInput={(event: any) =>
            props['onUpdate:modelValue']?.((event.target as HTMLInputElement).value)
          }
        />
      </div>
      <div className="flex gap-2 items-center">
        <span>标题</span>
        <input
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
          value={props.title ?? ''}
          onInput={(event: any) =>
            props['onUpdate:title']?.((event.target as HTMLInputElement).value)
          }
        />
      </div>
      <div className="flex gap-2 items-center">
        <span>内容</span>
        <textarea
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2"
          value={props.content ?? ''}
          onInput={(event: any) =>
            props['onUpdate:content']?.((event.target as HTMLTextAreaElement).value)
          }
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

export default NamedVModelDemo
`,Demo:()=>{let{multiModelBindings:t,enabledBindings:i}=v(`useSetup:0:0`,()=>f(()=>({multiModelBindings:{modelValue:w.value,"onUpdate:modelValue":e=>{w.value=e},title:S.value,"onUpdate:title":e=>{S.value=e},content:T.value,"onUpdate:content":e=>{T.value=e}},enabledBindings:{enabled:C.value,"onUpdate:enabled":e=>{C.value=e}}})));return u(c=>{let l=r(`div`,c);n(l,`card bg-base-100 shadow`);let u=r(`div`,l);a(l,u),n(u,`card-body`);let f=r(`h2`,u);a(u,f),n(f,`text-2xl font-semibold mb-3`),a(f,s(`命名 vModel`));let m=e(`rue:component:anchor`);a(u,m),g(()=>{let e=h(x,{...t});d(()=>p(e,u,m))});let v=r(`p`,u);a(u,v),a(v,s(`默认 vModel：`));let y=_(v);a(v,y),g(()=>{o(y,w.value)});let E=r(`p`,u);a(u,E),a(E,s(`标题：`));let D=_(E);a(E,D),g(()=>{o(D,S.value)});let O=r(`p`,u);a(u,O),a(O,s(`内容：`));let k=_(O);a(O,k),g(()=>{o(k,T.value)});let A=e(`rue:component:anchor`);a(u,A),g(()=>{let e=h(b,{...i});d(()=>p(e,u,A))});let j=r(`p`,u);a(u,j),a(j,s(`启用状态：`));let M=_(j);return a(j,M),g(()=>{o(M,C.value?`是`:`否`)}),l})}});export{E as default};