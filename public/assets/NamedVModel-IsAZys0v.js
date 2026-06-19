import{Q as e,Qt as t,Wt as n,X as r,Y as i,Yt as a,ct as o,et as s,ht as c,l,lt as u,mt as d,nt as f,o as p,st as m,t as h,tt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./createHomeSplitExamplePage-Br1mQ323.js";var b=e=>l(n=>{let a=s(`label`,n);u(a,`flex items-center space-x-2`);let c=s(`input`,a);r(a,c),m(c,`type`,`checkbox`),u(c,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),t(()=>{o(c,!!e.enabled)}),i(c,`change`,t=>e.onUpdateEnabled?.(t.target.checked));let l=s(`span`,a);return r(a,l),u(l,`text-sm font-medium text-gray-700`),r(l,g(`启用`)),a}),x=e=>{let{emitTitleUpdate:n}=v(`useSetup:0:0`,()=>a(()=>({emitTitleUpdate:t=>{let n=t.target.value;e.onUpdateTitle?.(e.titleModifiers?.trim?n.trim():n)}})));return l(a=>{let o=s(`div`,a);u(o,`grid gap-2`);let c=s(`div`,o);r(o,c),u(c,`flex gap-2 items-center`);let l=s(`span`,c);r(c,l),r(l,g(`默认`));let f=s(`input`,c);r(c,f),u(f,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),t(()=>{d(f,e.modelValue??``)}),i(f,`input`,t=>e.onUpdateModelValue?.(t.target.value));let p=s(`div`,o);r(o,p),u(p,`flex gap-2 items-center`);let m=s(`span`,p);r(p,m),r(m,g(`标题`));let h=s(`input`,p);r(p,h),u(h,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),t(()=>{d(h,e.title??``)}),i(h,`input`,n);let _=s(`div`,o);r(o,_),u(_,`flex gap-2 items-center`);let v=s(`span`,_);r(_,v),r(v,g(`内容`));let y=s(`textarea`,_);return r(_,y),u(y,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),t(()=>{d(y,e.content??``)}),i(y,`input`,t=>e.onUpdateContent?.(t.target.value)),o})},S=v(`ref:1:0`,()=>_(`初始标题`)),C=v(`ref:1:1`,()=>_(!1)),w=v(`ref:1:2`,()=>_(`默认输入`)),T=v(`ref:1:3`,()=>_(`初始内容`)),E=y({title:`命名 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>l(i=>{let a=s(`div`,i);u(a,`card bg-base-100 shadow`);let o=s(`div`,a);r(a,o),u(o,`card-body`);let l=s(`h2`,o);r(o,l),u(l,`text-2xl font-semibold mb-3`),r(l,g(`命名 v-model`));let d=e(`rue:component:anchor`);r(o,d),t(()=>{let e=h(x,{modelValue:w.value,onUpdateModelValue:e=>w.value=e,title:S.value,onUpdateTitle:e=>S.value=e,titleModifiers:{trim:!0},content:T.value,onUpdateContent:e=>T.value=e});n(()=>p(e,o,d))});let m=s(`p`,o);r(o,m),r(m,g(`默认 v-model：`));let _=f(m);r(m,_),t(()=>{c(_,w.value)});let v=s(`p`,o);r(o,v),r(v,g(`标题：`));let y=f(v);r(v,y),t(()=>{c(y,S.value)});let E=s(`p`,o);r(o,E),r(E,g(`内容：`));let D=f(E);r(E,D),t(()=>{c(D,T.value)});let O=e(`rue:component:anchor`);r(o,O),t(()=>{let e=h(b,{enabled:C.value,onUpdateEnabled:e=>C.value=e});n(()=>p(e,o,O))});let k=s(`p`,o);r(o,k),r(k,g(`启用状态：`));let A=f(k);return r(k,A),t(()=>{c(A,C.value?`是`:`否`)}),a})});export{E as default};