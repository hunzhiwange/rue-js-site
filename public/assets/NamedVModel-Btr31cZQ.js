import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,gt as c,ht as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./createHomeSplitExamplePage-Q644r2Bq.js";var b=e=>u(n=>{let r=g(`label`,n);_(r,`flex items-center space-x-2`);let a=g(`input`,r);o(r,a),s(a,`type`,`checkbox`),_(a,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`),t(()=>{d(a,!!e.enabled)}),i(a,`change`,t=>e.onUpdateEnabled?.(t.target.checked));let c=g(`span`,r);return o(r,c),_(c,`text-sm font-medium text-gray-700`),o(c,f(`启用`)),r}),x=e=>{let{emitTitleUpdate:n}=v(`useSetup:0:0`,()=>a(()=>({emitTitleUpdate:t=>{let n=t.target.value;e.onUpdateTitle?.(e.titleModifiers?.trim?n.trim():n)}})));return u(r=>{let a=g(`div`,r);_(a,`grid gap-2`);let s=g(`div`,a);o(a,s),_(s,`flex gap-2 items-center`);let c=g(`span`,s);o(s,c),o(c,f(`默认`));let u=g(`input`,s);o(s,u),_(u,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),t(()=>{l(u,e.modelValue??``)}),i(u,`input`,t=>e.onUpdateModelValue?.(t.target.value));let d=g(`div`,a);o(a,d),_(d,`flex gap-2 items-center`);let p=g(`span`,d);o(d,p),o(p,f(`标题`));let m=g(`input`,d);o(d,m),_(m,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),t(()=>{l(m,e.title??``)}),i(m,`input`,n);let h=g(`div`,a);o(a,h),_(h,`flex gap-2 items-center`);let v=g(`span`,h);o(h,v),o(v,f(`内容`));let y=g(`textarea`,h);return o(h,y),_(y,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),t(()=>{l(y,e.content??``)}),i(y,`input`,t=>e.onUpdateContent?.(t.target.value)),a})},S=v(`ref:1:0`,()=>n(`初始标题`)),C=v(`ref:1:1`,()=>n(!1)),w=v(`ref:1:2`,()=>n(`默认输入`)),T=v(`ref:1:3`,()=>n(`初始内容`)),E=y({title:`命名 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>u(n=>{let i=g(`div`,n);_(i,`card bg-base-100 shadow`);let a=g(`div`,i);o(i,a),_(a,`card-body`);let s=g(`h2`,a);o(a,s),_(s,`text-2xl font-semibold mb-3`),o(s,f(`命名 v-model`));let l=e(`rue:component:anchor`);o(a,l),t(()=>{let e=h(x,{modelValue:w.value,onUpdateModelValue:e=>w.value=e,title:S.value,onUpdateTitle:e=>S.value=e,titleModifiers:{trim:!0},content:T.value,onUpdateContent:e=>T.value=e});r(()=>p(e,a,l))});let u=g(`p`,a);o(a,u),o(u,f(`默认 v-model：`));let d=m(u);o(u,d),t(()=>{c(d,w.value)});let v=g(`p`,a);o(a,v),o(v,f(`标题：`));let y=m(v);o(v,y),t(()=>{c(y,S.value)});let E=g(`p`,a);o(a,E),o(E,f(`内容：`));let D=m(E);o(E,D),t(()=>{c(D,T.value)});let O=e(`rue:component:anchor`);o(a,O),t(()=>{let e=h(b,{enabled:C.value,onUpdateEnabled:e=>C.value=e});r(()=>p(e,a,O))});let k=g(`p`,a);o(a,k),o(k,f(`启用状态：`));let A=m(k);return o(k,A),t(()=>{c(A,C.value?`是`:`否`)}),i})});export{E as default};