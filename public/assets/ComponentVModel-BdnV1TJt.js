import{Dn as e,Dt as t,Vt as n,_n as r,at as i,ct as a,et as o,hn as s,sn as c,st as l,tn as u,vn as d,wn as f,xn as p}from"./rue-runtime-HIMg8Lz8.js";import{t as m}from"./createHomeSplitExamplePage-DNdswIPW.js";var h=d(`<input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2">`),g=d(`<label class="flex items-center space-x-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"><span class="text-sm font-medium text-gray-700">同意协议</span></label>`),_=d(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-emerald-600 mb-3">组件级 v-model</h2><!--rue:opaque-hole:0--><p class="text-gray-700">姓名：<!--rue:text-hole:1--></p><!--rue:opaque-hole:2--><p class="text-gray-700">同意状态：<!--rue:text-hole:3--></p></div></div>`),v=r=>{let s=i(r.modelValue),c=i(r.onUpdateModelValue);return a(n(Object.assign(n=>{let r=h().content.cloneNode(!0).firstChild,i=r;i.className=`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`;let a;f(()=>{let e=s.get()??``,n=e==null?``:String(e);Object.is(a,n)||(a=n,t(i,n))});let o=e=>{let t=e=>c.get()?.(e.target.value);typeof t==`function`&&t(e)};return i.addEventListener(`input`,o),e(()=>i.removeEventListener(`input`,o)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>o(()=>{s.set(e.modelValue),c.set(e.onUpdateModelValue)}),()=>r)},y=t=>{let r=i(t.modelValue),s=i(t.onUpdateModelValue);return a(n(Object.assign(t=>{let n=g().content.cloneNode(!0).firstChild,i=n.childNodes[0];i.setAttribute(`type`,`checkbox`),i.className=`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`;let a;f(()=>{let e=!!r.get();Object.is(a,e)||(a=e,i.checked=e)});let o=e=>{let t=e=>s.get()?.(e.target.checked);typeof t==`function`&&t(e)};return i.addEventListener(`change`,o),e(()=>i.removeEventListener(`change`,o)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>o(()=>{r.set(e.modelValue),s.set(e.onUpdateModelValue)}),()=>t)},b=c(`ref:1:0`,()=>u(`小明`)),x=c(`ref:1:1`,()=>u(!1)),S=m({title:`组件级 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>a(n(Object.assign(e=>{let t=_().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1],i=n.parentNode,a=t.childNodes[0].childNodes[2].childNodes[1],o=a.parentNode,c=t.childNodes[0].childNodes[3],u=c.parentNode,d=t.childNodes[0].childNodes[4].childNodes[1],f=d.parentNode,m=s(i);l(m,v,()=>({modelValue:b.value,onUpdateModelValue:e=>b.value=e})),i.insertBefore(m,n);let h=r(``);o.insertBefore(h,a),o.removeChild(a),p(h,()=>b.value);let g=s(u);l(g,y,()=>({modelValue:x.value,onUpdateModelValue:e=>x.value=e})),u.insertBefore(g,c);let S=r(``);return f.insertBefore(S,d),f.removeChild(d),p(S,()=>x.value?`是`:`否`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>o(()=>{}))});export{S as default};