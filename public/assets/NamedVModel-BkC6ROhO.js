import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ht as a,jt as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p,wt as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var b=e=>h(n=>{let i=u(`label`,n);r(i,`flex items-center space-x-2`);let a=u(`input`,i);d(i,a),t(a,`type`,`checkbox`),r(a,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),f(()=>{m(a,!!e.enabled)}),c(a,`change`,t=>e.onUpdateEnabled?.(t.target.checked));let o=u(`span`,i);return d(i,o),r(o,`text-sm font-medium text-gray-700`),d(o,s(`启用`)),i}),x=t=>{let{emitTitleUpdate:n}=v(`useSetup:0:0`,()=>e(()=>({emitTitleUpdate:e=>{let n=e.target.value;t.onUpdateTitle?.(t.titleModifiers?.trim?n.trim():n)}})));return h(e=>{let i=u(`div`,e);r(i,`grid gap-2`);let a=u(`div`,i);d(i,a),r(a,`flex gap-2 items-center`);let l=u(`span`,a);d(a,l),d(l,s(`默认`));let p=u(`input`,a);d(a,p),r(p,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),f(()=>{o(p,t.modelValue??``)}),c(p,`input`,e=>t.onUpdateModelValue?.(e.target.value));let m=u(`div`,i);d(i,m),r(m,`flex gap-2 items-center`);let h=u(`span`,m);d(m,h),d(h,s(`标题`));let g=u(`input`,m);d(m,g),r(g,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),f(()=>{o(g,t.title??``)}),c(g,`input`,n);let _=u(`div`,i);d(i,_),r(_,`flex gap-2 items-center`);let v=u(`span`,_);d(_,v),d(v,s(`内容`));let y=u(`textarea`,_);return d(_,y),r(y,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),f(()=>{o(y,t.content??``)}),c(y,`input`,e=>t.onUpdateContent?.(e.target.value)),i})},S=v(`ref:1:0`,()=>l(`初始标题`)),C=v(`ref:1:1`,()=>l(!1)),w=v(`ref:1:2`,()=>l(`默认输入`)),T=v(`ref:1:3`,()=>l(`初始内容`)),E=y({title:`命名 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>h(e=>{let t=u(`div`,e);r(t,`card bg-base-100 shadow`);let o=u(`div`,t);d(t,o),r(o,`card-body`);let c=u(`h2`,o);d(o,c),r(c,`text-2xl font-semibold mb-3`),d(c,s(`命名 v-model`));let l=i(`rue:component:anchor`);d(o,l),f(()=>{let e=_(x,{modelValue:w.value,onUpdateModelValue:e=>w.value=e,title:S.value,onUpdateTitle:e=>S.value=e,titleModifiers:{trim:!0},content:T.value,onUpdateContent:e=>T.value=e});p(()=>g(e,o,l))});let m=u(`p`,o);d(o,m),d(m,s(`默认 v-model：`));let h=a(m);d(m,h),f(()=>{n(h,w.value)});let v=u(`p`,o);d(o,v),d(v,s(`标题：`));let y=a(v);d(v,y),f(()=>{n(y,S.value)});let E=u(`p`,o);d(o,E),d(E,s(`内容：`));let D=a(E);d(E,D),f(()=>{n(D,T.value)});let O=i(`rue:component:anchor`);d(o,O),f(()=>{let e=_(b,{enabled:C.value,onUpdateEnabled:e=>C.value=e});p(()=>g(e,o,O))});let k=u(`p`,o);d(o,k),d(k,s(`启用状态：`));let A=a(k);return d(k,A),f(()=>{n(A,C.value?`是`:`否`)}),t})});export{E as default};