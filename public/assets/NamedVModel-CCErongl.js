import{$t as e,Jt as t,Q as n,Z as r,_t as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as m,ut as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var b=e=>l(t=>{let i=d(`label`,t);a(i,`flex items-center space-x-2`);let o=d(`input`,i);n(i,o),u(o,`type`,`checkbox`),a(o,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),_(()=>{h(o,!!e.enabled)}),r(o,`change`,t=>e.onUpdateEnabled?.(t.target.checked));let s=d(`span`,i);return n(i,s),a(s,`text-sm font-medium text-gray-700`),n(s,p(`启用`)),i}),x=e=>{let{emitTitleUpdate:t}=v(`useSetup:0:0`,()=>s(()=>({emitTitleUpdate:t=>{let n=t.target.value;e.onUpdateTitle?.(e.titleModifiers?.trim?n.trim():n)}})));return l(o=>{let s=d(`div`,o);a(s,`grid gap-2`);let c=d(`div`,s);n(s,c),a(c,`flex gap-2 items-center`);let l=d(`span`,c);n(c,l),n(l,p(`默认`));let u=d(`input`,c);n(c,u),a(u,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),_(()=>{i(u,e.modelValue??``)}),r(u,`input`,t=>e.onUpdateModelValue?.(t.target.value));let f=d(`div`,s);n(s,f),a(f,`flex gap-2 items-center`);let m=d(`span`,f);n(f,m),n(m,p(`标题`));let h=d(`input`,f);n(f,h),a(h,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),_(()=>{i(h,e.title??``)}),r(h,`input`,t);let g=d(`div`,s);n(s,g),a(g,`flex gap-2 items-center`);let v=d(`span`,g);n(g,v),n(v,p(`内容`));let y=d(`textarea`,g);return n(g,y),a(y,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),_(()=>{i(y,e.content??``)}),r(y,`input`,t=>e.onUpdateContent?.(t.target.value)),s})},S=v(`ref:1:0`,()=>t(`初始标题`)),C=v(`ref:1:1`,()=>t(!1)),w=v(`ref:1:2`,()=>t(`默认输入`)),T=v(`ref:1:3`,()=>t(`初始内容`)),E=y({title:`命名 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>l(t=>{let r=d(`div`,t);a(r,`card bg-base-100 shadow`);let i=d(`div`,r);n(r,i),a(i,`card-body`);let s=d(`h2`,i);n(i,s),a(s,`text-2xl font-semibold mb-3`),n(s,p(`命名 v-model`));let l=o(`rue:component:anchor`);n(i,l),_(()=>{let t=m(x,{modelValue:w.value,onUpdateModelValue:e=>w.value=e,title:S.value,onUpdateTitle:e=>S.value=e,titleModifiers:{trim:!0},content:T.value,onUpdateContent:e=>T.value=e});e(()=>f(t,i,l))});let u=d(`p`,i);n(i,u),n(u,p(`默认 v-model：`));let h=c(u);n(u,h),_(()=>{g(h,w.value)});let v=d(`p`,i);n(i,v),n(v,p(`标题：`));let y=c(v);n(v,y),_(()=>{g(y,S.value)});let E=d(`p`,i);n(i,E),n(E,p(`内容：`));let D=c(E);n(E,D),_(()=>{g(D,T.value)});let O=o(`rue:component:anchor`);n(i,O),_(()=>{let t=m(b,{enabled:C.value,onUpdateEnabled:e=>C.value=e});e(()=>f(t,i,O))});let k=d(`p`,i);n(i,k),n(k,p(`启用状态：`));let A=c(k);return n(k,A),_(()=>{g(A,C.value?`是`:`否`)}),r})});export{E as default};