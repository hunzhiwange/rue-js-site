import{Bt as e,Dn as t,Et as n,K as r,W as i,_n as a,bn as o,ft as s,gn as c,mn as l,q as u,qt as d,wn as f,z as p}from"./rue-runtime-CwEGJ854.js";import{t as m}from"./createHomeSplitExamplePage-BwH-lO_t.js";var h=a(`<input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2">`),g=a(`<label class="flex items-center space-x-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"><span class="text-sm font-medium text-gray-700">同意协议</span></label>`),_=a(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-emerald-600 mb-3">组件级 v-model</h2><!--rue:opaque-hole:0--><p class="text-gray-700">姓名：<!--rue:text-hole:1--></p><!--rue:opaque-hole:2--><p class="text-gray-700">同意状态：<!--rue:text-hole:3--></p></div></div>`),v=e=>{let r=i(e.modelValue),a=i(e.onUpdateModelValue);return u(n(Object.assign(e=>{let n=h().content.cloneNode(!0).firstChild,i=n;i.className=`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`;let o;f(()=>{let e=r.get()??``,t=e==null?``:String(e);Object.is(o,t)||(o=t,s(i,t))});let c=e=>{let t=e=>a.get()?.(e.target.value);typeof t==`function`&&t(e)};return i.addEventListener(`input`,c),t(()=>i.removeEventListener(`input`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{r.set(e.modelValue),a.set(e.onUpdateModelValue)}),()=>e)},y=e=>{let r=i(e.modelValue),a=i(e.onUpdateModelValue);return u(n(Object.assign(e=>{let n=g().content.cloneNode(!0).firstChild,i=n.childNodes[0];i.setAttribute(`type`,`checkbox`),i.className=`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`;let o;f(()=>{let e=!!r.get();Object.is(o,e)||(o=e,i.checked=e)});let s=e=>{let t=e=>a.get()?.(e.target.checked);typeof t==`function`&&t(e)};return i.addEventListener(`change`,s),t(()=>i.removeEventListener(`change`,s)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{r.set(e.modelValue),a.set(e.onUpdateModelValue)}),()=>e)},b=d(`ref:1:0`,()=>e(`小明`)),x=d(`ref:1:1`,()=>e(!1)),S=m({title:`组件级 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

const ControlledInput: FC<{
  modelValue?: string
  onUpdateModelValue?: (value: string) => void
}> = props => {
  return (
    <input
      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"
      value={props.modelValue ?? ''}
      onInput={(event: any) => props.onUpdateModelValue?.((event.target as HTMLInputElement).value)}
    />
  )
}

const ControlledCheckbox: FC<{
  modelValue?: boolean
  onUpdateModelValue?: (value: boolean) => void
}> = props => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
        checked={!!props.modelValue}
        onChange={(event: any) =>
          props.onUpdateModelValue?.((event.target as HTMLInputElement).checked)
        }
      />
      <span className="text-sm font-medium text-gray-700">同意协议</span>
    </label>
  )
}

const modelName = ref('小明')
const agree = ref(false)

const ComponentVModelDemo: FC = () => {
  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-emerald-600 mb-3">组件级 v-model</h2>
        <ControlledInput v-model={modelName.value} />
        <p className="text-gray-700">姓名：{modelName.value}</p>
        <ControlledCheckbox v-model={agree.value} />
        <p className="text-gray-700">同意状态：{agree.value ? '是' : '否'}</p>
      </div>
    </div>
  )
}

export default ComponentVModelDemo
`,Demo:()=>u(n(Object.assign(e=>{let t=_().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1],i=n.parentNode,a=t.childNodes[0].childNodes[2].childNodes[1],s=a.parentNode,u=t.childNodes[0].childNodes[3],d=u.parentNode,f=t.childNodes[0].childNodes[4].childNodes[1],p=f.parentNode,m=l(i);r(m,v,()=>({modelValue:b.value,onUpdateModelValue:e=>b.value=e})),i.insertBefore(m,n);let h=c(``);s.insertBefore(h,a),s.removeChild(a),o(h,()=>b.value);let g=l(d);r(g,y,()=>({modelValue:x.value,onUpdateModelValue:e=>x.value=e})),d.insertBefore(g,u);let S=c(``);return p.insertBefore(S,f),p.removeChild(f),o(S,()=>x.value?`是`:`否`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>p(()=>{}))});export{S as default};