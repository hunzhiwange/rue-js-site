import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ft as s,it as c,l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,yt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./createHomeSplitExamplePage-Da6pk2hb.js";var b=n=>l(i=>{let a=p(`label`,i);f(a,`flex items-center space-x-2`);let l=p(`input`,a);e(a,l),o(l,`type`,`checkbox`),f(l,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),t(()=>{s(l,!!n.enabled)}),r(l,`change`,e=>n.onUpdateEnabled?.(e.target.checked));let u=p(`span`,a);return e(a,u),f(u,`text-sm font-medium text-gray-700`),e(u,c(`启用`)),a}),x=n=>{let{emitTitleUpdate:i}=v(`useSetup:0:0`,()=>d(()=>({emitTitleUpdate:e=>{let t=e.target.value;n.onUpdateTitle?.(n.titleModifiers?.trim?t.trim():t)}})));return l(a=>{let o=p(`div`,a);f(o,`grid gap-2`);let s=p(`div`,o);e(o,s),f(s,`flex gap-2 items-center`);let l=p(`span`,s);e(s,l),e(l,c(`默认`));let u=p(`input`,s);e(s,u),f(u,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),t(()=>{_(u,n.modelValue??``)}),r(u,`input`,e=>n.onUpdateModelValue?.(e.target.value));let d=p(`div`,o);e(o,d),f(d,`flex gap-2 items-center`);let m=p(`span`,d);e(d,m),e(m,c(`标题`));let h=p(`input`,d);e(d,h),f(h,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),t(()=>{_(h,n.title??``)}),r(h,`input`,i);let g=p(`div`,o);e(o,g),f(g,`flex gap-2 items-center`);let v=p(`span`,g);e(g,v),e(v,c(`内容`));let y=p(`textarea`,g);return e(g,y),f(y,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),t(()=>{_(y,n.content??``)}),r(y,`input`,e=>n.onUpdateContent?.(e.target.value)),o})},S=v(`ref:1:0`,()=>n(`初始标题`)),C=v(`ref:1:1`,()=>n(!1)),w=v(`ref:1:2`,()=>n(`默认输入`)),T=v(`ref:1:3`,()=>n(`初始内容`)),E=y({title:`命名 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>l(n=>{let r=p(`div`,n);f(r,`card bg-base-100 shadow`);let o=p(`div`,r);e(r,o),f(o,`card-body`);let s=p(`h2`,o);e(o,s),f(s,`text-2xl font-semibold mb-3`),e(s,c(`命名 v-model`));let l=g(`rue:component:anchor`);e(o,l),t(()=>{let e=m(x,{modelValue:w.value,onUpdateModelValue:e=>w.value=e,title:S.value,onUpdateTitle:e=>S.value=e,titleModifiers:{trim:!0},content:T.value,onUpdateContent:e=>T.value=e});h(()=>u(e,o,l))});let d=p(`p`,o);e(o,d),e(d,c(`默认 v-model：`));let _=i(d);e(d,_),t(()=>{a(_,w.value)});let v=p(`p`,o);e(o,v),e(v,c(`标题：`));let y=i(v);e(v,y),t(()=>{a(y,S.value)});let E=p(`p`,o);e(o,E),e(E,c(`内容：`));let D=i(E);e(E,D),t(()=>{a(D,T.value)});let O=g(`rue:component:anchor`);e(o,O),t(()=>{let e=m(b,{enabled:C.value,onUpdateEnabled:e=>C.value=e});h(()=>u(e,o,O))});let k=p(`p`,o);e(o,k),e(k,c(`启用状态：`));let A=i(k);return e(k,A),t(()=>{a(A,C.value?`是`:`否`)}),r})});export{E as default};