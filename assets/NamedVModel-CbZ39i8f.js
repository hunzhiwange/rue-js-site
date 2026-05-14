import{F as e,G as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,_t as u,d,l as f,mt as p,ot as m,t as h,ut as g,z as _}from"./vapor-runtime-Dfq7aA8z.js";import{a as v}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as y}from"./createHomeSplitExamplePage-DJ9ZPmKq.js";var b=e=>d(o=>{let l=r(`label`,o);n(l,`flex items-center space-x-2`);let d=r(`input`,l);a(l,d),c(d,`type`,`checkbox`),n(d,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),u(()=>{t(d,!!e.enabled)}),i(d,`change`,t=>e[`onUpdate:enabled`]?.(t.target.checked));let f=r(`span`,l);return a(l,f),n(f,`text-sm font-medium text-gray-700`),a(f,s(`启用`)),l}),x=e=>d(t=>{let o=r(`div`,t);n(o,`grid gap-2`);let c=r(`div`,o);a(o,c),n(c,`flex gap-2 items-center`);let d=r(`span`,c);a(c,d),a(d,s(`默认`));let f=r(`input`,c);a(c,f),n(f,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),u(()=>{l(f,e.modelValue??``)}),i(f,`input`,t=>e[`onUpdate:modelValue`]?.(t.target.value));let p=r(`div`,o);a(o,p),n(p,`flex gap-2 items-center`);let m=r(`span`,p);a(p,m),a(m,s(`标题`));let h=r(`input`,p);a(p,h),n(h,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),u(()=>{l(h,e.title??``)}),i(h,`input`,t=>e[`onUpdate:title`]?.(t.target.value));let g=r(`div`,o);a(o,g),n(g,`flex gap-2 items-center`);let _=r(`span`,g);a(g,_),a(_,s(`内容`));let v=r(`textarea`,g);return a(g,v),n(v,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),u(()=>{l(v,e.content??``)}),i(v,`input`,t=>e[`onUpdate:content`]?.(t.target.value)),o}),S=v(`ref:1:0`,()=>m(`初始标题`)),C=v(`ref:1:1`,()=>m(!1)),w=v(`ref:1:2`,()=>m(`默认输入`)),T=v(`ref:1:3`,()=>m(`初始内容`)),E=y({title:`命名 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

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

export default NamedVModelDemo`,Demo:()=>{let{multiModelBindings:t,enabledBindings:i}=v(`useSetup:0:0`,()=>p(()=>({multiModelBindings:{modelValue:w.value,"onUpdate:modelValue":e=>{w.value=e},title:S.value,"onUpdate:title":e=>{S.value=e},content:T.value,"onUpdate:content":e=>{T.value=e}},enabledBindings:{enabled:C.value,"onUpdate:enabled":e=>{C.value=e}}})));return d(c=>{let l=r(`div`,c);n(l,`card bg-base-100 shadow`);let d=r(`div`,l);a(l,d),n(d,`card-body`);let p=r(`h2`,d);a(d,p),n(p,`text-2xl font-semibold mb-3`),a(p,s(`命名 vModel`));let m=e(`rue:component:anchor`);a(d,m),u(()=>{let e=h(x,{...t});g(()=>f(e,d,m))});let v=r(`p`,d);a(d,v),a(v,s(`默认 vModel：`));let y=_(v);a(v,y),u(()=>{o(y,w.value)});let E=r(`p`,d);a(d,E),a(E,s(`标题：`));let D=_(E);a(E,D),u(()=>{o(D,S.value)});let O=r(`p`,d);a(d,O),a(O,s(`内容：`));let k=_(O);a(O,k),u(()=>{o(k,T.value)});let A=e(`rue:component:anchor`);a(d,A),u(()=>{let e=h(b,{...i});g(()=>f(e,d,A))});let j=r(`p`,d);a(d,j),a(j,s(`启用状态：`));let M=_(j);return a(j,M),u(()=>{o(M,C.value?`是`:`否`)}),l})}});export{E as default};