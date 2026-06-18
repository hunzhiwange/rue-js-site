import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,at as s,et as c,ft as l,l as u,ot as d,pt as f,q as p,qt as m,s as h,st as g,t as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./createHomeSplitExamplePage-C98rg19g.js";var b=t=>u(r=>{let a=i(`label`,r);g(a,`flex items-center space-x-2`);let c=i(`input`,a);n(a,c),s(c,`type`,`checkbox`),g(c,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),o(()=>{d(c,!!t.enabled)}),p(c,`change`,e=>t.onUpdateEnabled?.(e.target.checked));let l=i(`span`,a);return n(a,l),g(l,`text-sm font-medium text-gray-700`),n(l,e(`启用`)),a}),x=t=>{let{emitTitleUpdate:r}=v(`useSetup:0:0`,()=>m(()=>({emitTitleUpdate:e=>{let n=e.target.value;t.onUpdateTitle?.(t.titleModifiers?.trim?n.trim():n)}})));return u(a=>{let s=i(`div`,a);g(s,`grid gap-2`);let c=i(`div`,s);n(s,c),g(c,`flex gap-2 items-center`);let u=i(`span`,c);n(c,u),n(u,e(`默认`));let d=i(`input`,c);n(c,d),g(d,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),o(()=>{l(d,t.modelValue??``)}),p(d,`input`,e=>t.onUpdateModelValue?.(e.target.value));let f=i(`div`,s);n(s,f),g(f,`flex gap-2 items-center`);let m=i(`span`,f);n(f,m),n(m,e(`标题`));let h=i(`input`,f);n(f,h),g(h,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),o(()=>{l(h,t.title??``)}),p(h,`input`,r);let _=i(`div`,s);n(s,_),g(_,`flex gap-2 items-center`);let v=i(`span`,_);n(_,v),n(v,e(`内容`));let y=i(`textarea`,_);return n(_,y),g(y,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),o(()=>{l(y,t.content??``)}),p(y,`input`,e=>t.onUpdateContent?.(e.target.value)),s})},S=v(`ref:1:0`,()=>r(`初始标题`)),C=v(`ref:1:1`,()=>r(!1)),w=v(`ref:1:2`,()=>r(`默认输入`)),T=v(`ref:1:3`,()=>r(`初始内容`)),E=y({title:`命名 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

const EnabledToggleComp: FC<{
  enabled?: boolean
  onUpdateEnabled?: (value: boolean) => void
}> = props => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
        checked={!!props.enabled}
        onChange={(event: any) =>
          props.onUpdateEnabled?.((event.target as HTMLInputElement).checked)
        }
      />
      <span className="text-sm font-medium text-gray-700">启用</span>
    </label>
  )
}

const MultiModelComp: FC<{
  modelValue?: string
  onUpdateModelValue?: (value: string) => void
  title?: string
  titleModifiers?: { trim?: boolean }
  onUpdateTitle?: (value: string) => void
  content?: string
  onUpdateContent?: (value: string) => void
}> = props => {
  const emitTitleUpdate = (event: any) => {
    const rawValue = (event.target as HTMLInputElement).value
    props.onUpdateTitle?.(props.titleModifiers?.trim ? rawValue.trim() : rawValue)
  }

  return (
    <div className="grid gap-2">
      <div className="flex gap-2 items-center">
        <span>默认</span>
        <input
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
          value={props.modelValue ?? ''}
          onInput={(event: any) =>
            props.onUpdateModelValue?.((event.target as HTMLInputElement).value)
          }
        />
      </div>
      <div className="flex gap-2 items-center">
        <span>标题</span>
        <input
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
          value={props.title ?? ''}
          onInput={emitTitleUpdate}
        />
      </div>
      <div className="flex gap-2 items-center">
        <span>内容</span>
        <textarea
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2"
          value={props.content ?? ''}
          onInput={(event: any) =>
            props.onUpdateContent?.((event.target as HTMLTextAreaElement).value)
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
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-3">命名 v-model</h2>
        <MultiModelComp
          v-model={plain.value}
          v-model:trim-title={title.value}
          v-model:content={content.value}
        />
        <p>默认 v-model：{plain.value}</p>
        <p>标题：{title.value}</p>
        <p>内容：{content.value}</p>
        <EnabledToggleComp v-model:enabled={enabled.value} />
        <p>启用状态：{enabled.value ? '是' : '否'}</p>
      </div>
    </div>
  )
}

export default NamedVModelDemo
`,Demo:()=>u(r=>{let s=i(`div`,r);g(s,`card bg-base-100 shadow`);let l=i(`div`,s);n(s,l),g(l,`card-body`);let u=i(`h2`,l);n(l,u),g(u,`text-2xl font-semibold mb-3`),n(u,e(`命名 v-model`));let d=a(`rue:component:anchor`);n(l,d),o(()=>{let e=_(x,{modelValue:w.value,onUpdateModelValue:e=>w.value=e,title:S.value,onUpdateTitle:e=>S.value=e,titleModifiers:{trim:!0},content:T.value,onUpdateContent:e=>T.value=e});t(()=>h(e,l,d))});let p=i(`p`,l);n(l,p),n(p,e(`默认 v-model：`));let m=c(p);n(p,m),o(()=>{f(m,w.value)});let v=i(`p`,l);n(l,v),n(v,e(`标题：`));let y=c(v);n(v,y),o(()=>{f(y,S.value)});let E=i(`p`,l);n(l,E),n(E,e(`内容：`));let D=c(E);n(E,D),o(()=>{f(D,T.value)});let O=a(`rue:component:anchor`);n(l,O),o(()=>{let e=_(b,{enabled:C.value,onUpdateEnabled:e=>C.value=e});t(()=>h(e,l,O))});let k=i(`p`,l);n(l,k),n(k,e(`启用状态：`));let A=c(k);return n(k,A),o(()=>{f(A,C.value?`是`:`否`)}),s})});export{E as default};