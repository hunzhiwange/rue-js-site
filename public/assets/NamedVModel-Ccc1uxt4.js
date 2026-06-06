import{$ as e,B as t,Dt as n,G as r,H as i,K as a,Q as o,W as s,Z as c,at as l,ht as u,it as d,l as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./createHomeSplitExamplePage-BftZ6-s2.js";var b=i=>f(a=>{let l=s(`label`,a);e(l,`flex items-center space-x-2`);let u=s(`input`,l);t(l,u),c(u,`type`,`checkbox`),e(u,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),n(()=>{o(u,!!i.enabled)}),_(u,`change`,e=>i[`onUpdate:enabled`]?.(e.target.checked));let d=s(`span`,l);return t(l,d),e(d,`text-sm font-medium text-gray-700`),t(d,r(`启用`)),l}),x=i=>f(a=>{let o=s(`div`,a);e(o,`grid gap-2`);let c=s(`div`,o);t(o,c),e(c,`flex gap-2 items-center`);let l=s(`span`,c);t(c,l),t(l,r(`默认`));let u=s(`input`,c);t(c,u),e(u,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),n(()=>{d(u,i.modelValue??``)}),_(u,`input`,e=>i[`onUpdate:modelValue`]?.(e.target.value));let f=s(`div`,o);t(o,f),e(f,`flex gap-2 items-center`);let p=s(`span`,f);t(f,p),t(p,r(`标题`));let m=s(`input`,f);t(f,m),e(m,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),n(()=>{d(m,i.title??``)}),_(m,`input`,e=>i[`onUpdate:title`]?.(e.target.value));let h=s(`div`,o);t(o,h),e(h,`flex gap-2 items-center`);let g=s(`span`,h);t(h,g),t(g,r(`内容`));let v=s(`textarea`,h);return t(h,v),e(v,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),n(()=>{d(v,i.content??``)}),_(v,`input`,e=>i[`onUpdate:content`]?.(e.target.value)),o}),S=v(`ref:1:0`,()=>u(`初始标题`)),C=v(`ref:1:1`,()=>u(!1)),w=v(`ref:1:2`,()=>u(`默认输入`)),T=v(`ref:1:3`,()=>u(`初始内容`)),E=y({title:`命名 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>{let{multiModelBindings:o,enabledBindings:c}=v(`useSetup:0:0`,()=>h(()=>({multiModelBindings:{modelValue:w.value,"onUpdate:modelValue":e=>{w.value=e},title:S.value,"onUpdate:title":e=>{S.value=e},content:T.value,"onUpdate:content":e=>{T.value=e}},enabledBindings:{enabled:C.value,"onUpdate:enabled":e=>{C.value=e}}})));return f(u=>{let d=s(`div`,u);e(d,`card bg-base-100 shadow`);let f=s(`div`,d);t(d,f),e(f,`card-body`);let h=s(`h2`,f);t(f,h),e(h,`text-2xl font-semibold mb-3`),t(h,r(`命名 vModel`));let _=i(`rue:component:anchor`);t(f,_),n(()=>{let e=m(x,{...o});g(()=>p(e,f,_))});let v=s(`p`,f);t(f,v),t(v,r(`默认 vModel：`));let y=a(v);t(v,y),n(()=>{l(y,w.value)});let E=s(`p`,f);t(f,E),t(E,r(`标题：`));let D=a(E);t(E,D),n(()=>{l(D,S.value)});let O=s(`p`,f);t(f,O),t(O,r(`内容：`));let k=a(O);t(O,k),n(()=>{l(k,T.value)});let A=i(`rue:component:anchor`);t(f,A),n(()=>{let e=m(b,{...c});g(()=>p(e,f,A))});let j=s(`p`,f);t(f,j),t(j,r(`启用状态：`));let M=a(j);return t(j,M),n(()=>{l(M,C.value?`是`:`否`)}),d})}});export{E as default};