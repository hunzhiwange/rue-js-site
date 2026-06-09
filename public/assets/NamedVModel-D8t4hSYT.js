import{$ as e,Ht as t,J as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,mt as u,ot as d,pt as f,qt as p,s as m,st as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as y}from"./createHomeSplitExamplePage-CJbW_xoB.js";var b=t=>l(r=>{let o=e(`label`,r);s(o,`flex items-center space-x-2`);let l=e(`input`,o);a(o,l),d(l,`type`,`checkbox`),s(l,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),i(()=>{h(l,!!t.enabled)}),n(l,`change`,e=>t[`onUpdate:enabled`]?.(e.target.checked));let u=e(`span`,o);return a(o,u),s(u,`text-sm font-medium text-gray-700`),a(u,c(`启用`)),o}),x=t=>l(r=>{let o=e(`div`,r);s(o,`grid gap-2`);let l=e(`div`,o);a(o,l),s(l,`flex gap-2 items-center`);let u=e(`span`,l);a(l,u),a(u,c(`默认`));let d=e(`input`,l);a(l,d),s(d,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),i(()=>{f(d,t.modelValue??``)}),n(d,`input`,e=>t[`onUpdate:modelValue`]?.(e.target.value));let p=e(`div`,o);a(o,p),s(p,`flex gap-2 items-center`);let m=e(`span`,p);a(p,m),a(m,c(`标题`));let h=e(`input`,p);a(p,h),s(h,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),i(()=>{f(h,t.title??``)}),n(h,`input`,e=>t[`onUpdate:title`]?.(e.target.value));let g=e(`div`,o);a(o,g),s(g,`flex gap-2 items-center`);let _=e(`span`,g);a(g,_),a(_,c(`内容`));let v=e(`textarea`,g);return a(g,v),s(v,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),i(()=>{f(v,t.content??``)}),n(v,`input`,e=>t[`onUpdate:content`]?.(e.target.value)),o}),S=v(`ref:1:0`,()=>r(`初始标题`)),C=v(`ref:1:1`,()=>r(!1)),w=v(`ref:1:2`,()=>r(`默认输入`)),T=v(`ref:1:3`,()=>r(`初始内容`)),E=y({title:`命名 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>{let{multiModelBindings:n,enabledBindings:r}=v(`useSetup:0:0`,()=>p(()=>({multiModelBindings:{modelValue:w.value,"onUpdate:modelValue":e=>{w.value=e},title:S.value,"onUpdate:title":e=>{S.value=e},content:T.value,"onUpdate:content":e=>{T.value=e}},enabledBindings:{enabled:C.value,"onUpdate:enabled":e=>{C.value=e}}})));return l(l=>{let d=e(`div`,l);s(d,`card bg-base-100 shadow`);let f=e(`div`,d);a(d,f),s(f,`card-body`);let p=e(`h2`,f);a(f,p),s(p,`text-2xl font-semibold mb-3`),a(p,c(`命名 vModel`));let h=o(`rue:component:anchor`);a(f,h),i(()=>{let e=g(x,{...n});t(()=>m(e,f,h))});let v=e(`p`,f);a(f,v),a(v,c(`默认 vModel：`));let y=_(v);a(v,y),i(()=>{u(y,w.value)});let E=e(`p`,f);a(f,E),a(E,c(`标题：`));let D=_(E);a(E,D),i(()=>{u(D,S.value)});let O=e(`p`,f);a(f,O),a(O,c(`内容：`));let k=_(O);a(O,k),i(()=>{u(k,T.value)});let A=o(`rue:component:anchor`);a(f,A),i(()=>{let e=g(b,{...r});t(()=>m(e,f,A))});let j=e(`p`,f);a(f,j),a(j,c(`启用状态：`));let M=_(j);return a(j,M),i(()=>{u(M,C.value?`是`:`否`)}),d})}});export{E as default};