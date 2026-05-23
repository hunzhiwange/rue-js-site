import{$ as e,Et as t,H as n,J as r,K as i,V as a,W as o,_t as s,d as c,et as l,kt as u,l as d,ot as f,q as p,st as m,t as h,tt as g,xt as _}from"./vapor-runtime-EUvELKQT.js";import{a as v}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as y}from"./createHomeSplitExamplePage-BuifU8mn.js";var b=t=>c(r=>{let o=i(`label`,r);g(o,`flex items-center space-x-2`);let s=i(`input`,o);n(o,s),e(s,`type`,`checkbox`),g(s,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),u(()=>{l(s,!!t.enabled)}),a(s,`change`,e=>t[`onUpdate:enabled`]?.(e.target.checked));let c=i(`span`,o);return n(o,c),g(c,`text-sm font-medium text-gray-700`),n(c,p(`启用`)),o}),x=e=>c(t=>{let r=i(`div`,t);g(r,`grid gap-2`);let o=i(`div`,r);n(r,o),g(o,`flex gap-2 items-center`);let s=i(`span`,o);n(o,s),n(s,p(`默认`));let c=i(`input`,o);n(o,c),g(c,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),u(()=>{f(c,e.modelValue??``)}),a(c,`input`,t=>e[`onUpdate:modelValue`]?.(t.target.value));let l=i(`div`,r);n(r,l),g(l,`flex gap-2 items-center`);let d=i(`span`,l);n(l,d),n(d,p(`标题`));let m=i(`input`,l);n(l,m),g(m,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),u(()=>{f(m,e.title??``)}),a(m,`input`,t=>e[`onUpdate:title`]?.(t.target.value));let h=i(`div`,r);n(r,h),g(h,`flex gap-2 items-center`);let _=i(`span`,h);n(h,_),n(_,p(`内容`));let v=i(`textarea`,h);return n(h,v),g(v,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),u(()=>{f(v,e.content??``)}),a(v,`input`,t=>e[`onUpdate:content`]?.(t.target.value)),r}),S=v(`ref:1:0`,()=>s(`初始标题`)),C=v(`ref:1:1`,()=>s(!1)),w=v(`ref:1:2`,()=>s(`默认输入`)),T=v(`ref:1:3`,()=>s(`初始内容`)),E=y({title:`命名 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>{let{multiModelBindings:e,enabledBindings:a}=v(`useSetup:0:0`,()=>t(()=>({multiModelBindings:{modelValue:w.value,"onUpdate:modelValue":e=>{w.value=e},title:S.value,"onUpdate:title":e=>{S.value=e},content:T.value,"onUpdate:content":e=>{T.value=e}},enabledBindings:{enabled:C.value,"onUpdate:enabled":e=>{C.value=e}}})));return c(t=>{let s=i(`div`,t);g(s,`card bg-base-100 shadow`);let c=i(`div`,s);n(s,c),g(c,`card-body`);let l=i(`h2`,c);n(c,l),g(l,`text-2xl font-semibold mb-3`),n(l,p(`命名 vModel`));let f=o(`rue:component:anchor`);n(c,f),u(()=>{let t=h(x,{...e});_(()=>d(t,c,f))});let v=i(`p`,c);n(c,v),n(v,p(`默认 vModel：`));let y=r(v);n(v,y),u(()=>{m(y,w.value)});let E=i(`p`,c);n(c,E),n(E,p(`标题：`));let D=r(E);n(E,D),u(()=>{m(D,S.value)});let O=i(`p`,c);n(c,O),n(O,p(`内容：`));let k=r(O);n(O,k),u(()=>{m(k,T.value)});let A=o(`rue:component:anchor`);n(c,A),u(()=>{let e=h(b,{...a});_(()=>d(e,c,A))});let j=i(`p`,c);n(c,j),n(j,p(`启用状态：`));let M=r(j);return n(j,M),u(()=>{m(M,C.value?`是`:`否`)}),s})}});export{E as default};