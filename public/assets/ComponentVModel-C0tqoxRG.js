import{Bt as e,H as t,Qt as n,U as r,V as i,Vt as a,Wt as o,_t as s,en as c,gn as l,gt as u,in as d,mn as f,sn as p,st as m,vt as h,yn as g}from"./rue-runtime-Cv6BZekS.js";import{t as _}from"./createHomeSplitExamplePage-DqLcVC_n.js";var v=g(`<input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2">`),y=g(`<label class="flex items-center space-x-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"><span class="text-sm font-medium text-gray-700">同意协议</span></label>`),b=g(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-emerald-600 mb-3">组件级 v-model</h2><!--rue:opaque-hole:0--><p class="text-gray-700">姓名：<!--rue:text-hole:1--></p><!--rue:opaque-hole:2--><p class="text-gray-700">同意状态：<!--rue:text-hole:3--></p></div></div>`),x=(e,t,n)=>{let i=h(u(e,`modelValue`)),a=h(u(e,`onUpdateModelValue`));return r(o(e=>{let t=v().content.cloneNode(!0).firstChild,n=t;n.setAttribute(`class`,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let r;d(()=>{let e=i.get()??``,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.value=t)});let o=e=>{let t=e=>a.get()?.(e.target.value);typeof t==`function`&&t(e)};return n.addEventListener(`input`,o),p(()=>n.removeEventListener(`input`,o)),[t,t]}),e=>c(()=>{i.set(e.modelValue),a.set(e.onUpdateModelValue)}),()=>s(e))},S=(e,t,n)=>{let i=h(u(e,`modelValue`)),a=h(u(e,`onUpdateModelValue`));return r(o(e=>{let t=y().content.cloneNode(!0).firstChild,n=t.childNodes[0];n.setAttribute(`type`,`checkbox`),n.setAttribute(`class`,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`);let r;d(()=>{let e=!!i.get();Object.is(r,e)||(r=e,n.checked=e)});let o=e=>{let t=e=>a.get()?.(e.target.checked);typeof t==`function`&&t(e)};return n.addEventListener(`change`,o),p(()=>n.removeEventListener(`change`,o)),[t,t]}),e=>c(()=>{i.set(e.modelValue),a.set(e.onUpdateModelValue)}),()=>s(e))},C=m(`小明`),w=m(!1),T=(t,r,s)=>o(t=>{let r=b().content.cloneNode(!0).firstChild,o=r.childNodes[0].childNodes[1],s=o.parentNode,c=r.childNodes[0].childNodes[2].childNodes[1],u=c.parentNode,d=r.childNodes[0].childNodes[3],f=d.parentNode,p=r.childNodes[0].childNodes[4].childNodes[1],m=p.parentNode,h=(e,t,n)=>{let r=()=>i(x,()=>({modelValue:C.value,onUpdateModelValue:e=>C.value=e}));return e==null?r():a(e,n,r)},g=o.nextSibling;s.removeChild(o),e({parent:s,before:g},()=>h,()=>({}));let _=l(``);u.insertBefore(_,c),u.removeChild(c),n(_,()=>C.value);let v=(e,t,n)=>{let r=()=>i(S,()=>({modelValue:w.value,onUpdateModelValue:e=>w.value=e}));return e==null?r():a(e,n,r)},y=d.nextSibling;f.removeChild(d),e({parent:f,before:y},()=>v,()=>({}));let T=l(``);return m.insertBefore(T,p),m.removeChild(p),n(T,()=>w.value?`是`:`否`),[r,r]}),E=`import { type FC, ref } from '@rue-js/rue'

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
`,D=(e,n,r)=>i(_,()=>({options:{title:`组件级 v-model`,source:E},children:(e,n,r)=>{let i=()=>o(e=>{let n=f();t(n,T,()=>({}));let r=l(``),i=l(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():a(e,r,i)}}));export{D as default};