import{$ as e,J as t,Kt as n,Lt as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,ot as p,pt as m,st as h,t as g,tt as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v}from"./vapor-helpers-vapor-DkadWylb.js";import{t as y}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var b=n=>l(r=>{let i=e(`label`,r);c(i,`flex items-center space-x-2`);let s=e(`input`,i);a(i,s),p(s,`type`,`checkbox`),c(s,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),o(()=>{h(s,!!n.enabled)}),t(s,`change`,e=>n[`onUpdate:enabled`]?.(e.target.checked));let l=e(`span`,i);return a(i,l),c(l,`text-sm font-medium text-gray-700`),a(l,u(`启用`)),i}),x=n=>l(r=>{let i=e(`div`,r);c(i,`grid gap-2`);let s=e(`div`,i);a(i,s),c(s,`flex gap-2 items-center`);let l=e(`span`,s);a(s,l),a(l,u(`默认`));let d=e(`input`,s);a(s,d),c(d,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),o(()=>{m(d,n.modelValue??``)}),t(d,`input`,e=>n[`onUpdate:modelValue`]?.(e.target.value));let f=e(`div`,i);a(i,f),c(f,`flex gap-2 items-center`);let p=e(`span`,f);a(f,p),a(p,u(`标题`));let h=e(`input`,f);a(f,h),c(h,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),o(()=>{m(h,n.title??``)}),t(h,`input`,e=>n[`onUpdate:title`]?.(e.target.value));let g=e(`div`,i);a(i,g),c(g,`flex gap-2 items-center`);let _=e(`span`,g);a(g,_),a(_,u(`内容`));let v=e(`textarea`,g);return a(g,v),c(v,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),o(()=>{m(v,n.content??``)}),t(v,`input`,e=>n[`onUpdate:content`]?.(e.target.value)),i}),S=v(`ref:1:0`,()=>r(`初始标题`)),C=v(`ref:1:1`,()=>r(!1)),w=v(`ref:1:2`,()=>r(`默认输入`)),T=v(`ref:1:3`,()=>r(`初始内容`)),E=y({title:`命名 vModel`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>{let{multiModelBindings:t,enabledBindings:r}=v(`useSetup:0:0`,()=>n(()=>({multiModelBindings:{modelValue:w.value,"onUpdate:modelValue":e=>{w.value=e},title:S.value,"onUpdate:title":e=>{S.value=e},content:T.value,"onUpdate:content":e=>{T.value=e}},enabledBindings:{enabled:C.value,"onUpdate:enabled":e=>{C.value=e}}})));return l(n=>{let l=e(`div`,n);c(l,`card bg-base-100 shadow`);let p=e(`div`,l);a(l,p),c(p,`card-body`);let m=e(`h2`,p);a(p,m),c(m,`text-2xl font-semibold mb-3`),a(m,u(`命名 vModel`));let h=s(`rue:component:anchor`);a(p,h),o(()=>{let e=g(x,{...t});i(()=>d(e,p,h))});let v=e(`p`,p);a(p,v),a(v,u(`默认 vModel：`));let y=_(v);a(v,y),o(()=>{f(y,w.value)});let E=e(`p`,p);a(p,E),a(E,u(`标题：`));let D=_(E);a(E,D),o(()=>{f(D,S.value)});let O=e(`p`,p);a(p,O),a(O,u(`内容：`));let k=_(O);a(O,k),o(()=>{f(k,T.value)});let A=s(`rue:component:anchor`);a(p,A),o(()=>{let e=g(b,{...r});i(()=>d(e,p,A))});let j=e(`p`,p);a(p,j),a(j,u(`启用状态：`));let M=_(j);return a(j,M),o(()=>{f(M,C.value?`是`:`否`)}),l})}});export{E as default};