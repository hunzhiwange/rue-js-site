import{B as e,Bt as t,F as n,I as r,P as i,Qt as a,Vt as o,W as s,Wt as c,en as l,gn as u,in as d,mn as f,mt as p,sn as m,yn as h,z as g}from"./rue-runtime-BWbIfNT8.js";import{t as _}from"./createHomeSplitExamplePage-Cjn7V321.js";var v=h(`<input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2">`),y=h(`<label class="flex items-center space-x-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"><span class="text-sm font-medium text-gray-700">同意协议</span></label>`),b=h(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-emerald-600 mb-3">组件级 v-model</h2><!--rue:opaque-hole:0--><p class="text-gray-700">姓名：<!--rue:text-hole:1--></p><!--rue:opaque-hole:2--><p class="text-gray-700">同意状态：<!--rue:text-hole:3--></p></div></div>`),x=(t,n,i)=>{let a=s(g(t,`modelValue`)),o=s(g(t,`onUpdateModelValue`));return r(c(e=>{let t=v().content.cloneNode(!0).firstChild,n=t;n.setAttribute(`class`,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let r;d(()=>{let e=a.get()??``,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.value=t)});let i=e=>{let t=e=>o.get()?.(e.target.value);typeof t==`function`&&t(e)};return n.addEventListener(`input`,i),m(()=>n.removeEventListener(`input`,i)),[t,t]}),e=>l(()=>{a.set(e.modelValue),o.set(e.onUpdateModelValue)}),()=>e(t))},S=(t,n,i)=>{let a=s(g(t,`modelValue`)),o=s(g(t,`onUpdateModelValue`));return r(c(e=>{let t=y().content.cloneNode(!0).firstChild,n=t.childNodes[0];n.setAttribute(`type`,`checkbox`),n.setAttribute(`class`,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`);let r;d(()=>{let e=!!a.get();Object.is(r,e)||(r=e,n.checked=e)});let i=e=>{let t=e=>o.get()?.(e.target.checked);typeof t==`function`&&t(e)};return n.addEventListener(`change`,i),m(()=>n.removeEventListener(`change`,i)),[t,t]}),e=>l(()=>{a.set(e.modelValue),o.set(e.onUpdateModelValue)}),()=>e(t))},C=p(`小明`),w=p(!1),T=(e,n,r)=>c(e=>{let n=b().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],s=r.parentNode,c=n.childNodes[0].childNodes[2].childNodes[1],l=c.parentNode,d=n.childNodes[0].childNodes[3],f=d.parentNode,p=n.childNodes[0].childNodes[4].childNodes[1],m=p.parentNode,h=(e,t,n)=>{let r=()=>i(x,()=>({modelValue:C.value,onUpdateModelValue:e=>C.value=e}));return e==null?r():o(e,n,r)},g=r.nextSibling;s.removeChild(r),t({parent:s,before:g},()=>h,()=>({}));let _=u(``);l.insertBefore(_,c),l.removeChild(c),a(_,()=>C.value);let v=(e,t,n)=>{let r=()=>i(S,()=>({modelValue:w.value,onUpdateModelValue:e=>w.value=e}));return e==null?r():o(e,n,r)},y=d.nextSibling;f.removeChild(d),t({parent:f,before:y},()=>v,()=>({}));let T=u(``);return m.insertBefore(T,p),m.removeChild(p),a(T,()=>w.value?`是`:`否`),[n,n]}),E=`import { type FC, ref } from '@rue-js/rue'

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
`,D=(e,t,r)=>i(_,()=>({options:{title:`组件级 v-model`,source:E},children:(e,t,r)=>{let i=()=>c(e=>{let t=f();n(t,T,()=>({}));let r=u(``),i=u(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,r,i)}}));export{D as default};