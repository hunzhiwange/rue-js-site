import{B as e,Bt as t,Dt as n,F as r,I as i,Mt as a,P as o,Qt as s,Vt as c,W as l,Wt as u,en as d,fn as f,gn as p,hn as m,in as h,mn as g,mt as _,sn as v,yn as y,z as b}from"./rue-runtime-BWbIfNT8.js";import{t as x}from"./createHomeSplitExamplePage-Cjn7V321.js";var S=y(`<label class="flex items-center space-x-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"><span class="text-sm font-medium text-gray-700">启用</span></label>`),C=y(`<div class="grid gap-2"><div class="flex gap-2 items-center"><span>默认</span><input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"></div><div class="flex gap-2 items-center"><span>标题</span><input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"></div><div class="flex gap-2 items-center"><span>内容</span><!--rue:opaque-hole:0--></div></div>`),w=y(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">命名 v-model</h2><!--rue:opaque-hole:0--><p>默认 v-model：<!--rue:text-hole:1--></p><p>标题：<!--rue:text-hole:2--></p><p>内容：<!--rue:text-hole:3--></p><!--rue:opaque-hole:4--><p>启用状态：<!--rue:text-hole:5--></p></div></div>`),T=(t,n,r)=>{let a=l(b(t,`enabled`)),o=l(b(t,`onUpdateEnabled`));return i(u(e=>{let t=S().content.cloneNode(!0).firstChild,n=t.childNodes[0];n.setAttribute(`type`,`checkbox`),n.setAttribute(`class`,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`);let r;h(()=>{let e=!!a.get();Object.is(r,e)||(r=e,n.checked=e)});let i=e=>{let t=e=>o.get()?.(e.target.checked);typeof t==`function`&&t(e)};return n.addEventListener(`change`,i),v(()=>n.removeEventListener(`change`,i)),[t,t]}),e=>d(()=>{a.set(e.enabled),o.set(e.onUpdateEnabled)}),()=>e(t))},E=(t,r,o)=>{let s=l(b(t,`content`)),c=l(b(t,`modelValue`)),p=l(b(t,`onUpdateContent`)),g=l(b(t,`onUpdateModelValue`)),_=l(b(t,`onUpdateTitle`)),y=l(b(t,`title`)),x=l(b(t,`titleModifiers`)),S=e=>{let t=e.target.value;_.get()?.(x.get()?.trim?t.trim():t)};return i(u(e=>{let t=C().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[1],i=t.childNodes[1].childNodes[1],o=t.childNodes[2].childNodes[1],l=o.parentNode;r.setAttribute(`class`,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let u;h(()=>{let e=c.get()??``,t=e==null?``:String(e);Object.is(u,t)||(u=t,r.value=t)});let d=e=>{let t=e=>g.get()?.(e.target.value);typeof t==`function`&&t(e)};r.addEventListener(`input`,d),v(()=>r.removeEventListener(`input`,d)),i.setAttribute(`class`,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let _;h(()=>{let e=y.get()??``,t=e==null?``:String(e);Object.is(_,t)||(_=t,i.value=t)});let b=e=>{let t=S;typeof t==`function`&&t(e)};i.addEventListener(`input`,b),v(()=>i.removeEventListener(`input`,b));let x=m(`textarea`,l);f(l,x),l.insertBefore(x,o),n(x,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),h(()=>{a(x,s.get()??``)});let w=e=>{let t=e=>p.get()?.(e.target.value);typeof t==`function`&&t(e)};return x.addEventListener(`input`,w),v(()=>x.removeEventListener(`input`,w)),[t,t]}),e=>d(()=>{s.set(e.content),c.set(e.modelValue),p.set(e.onUpdateContent),g.set(e.onUpdateModelValue),_.set(e.onUpdateTitle),y.set(e.title),x.set(e.titleModifiers)}),()=>e(t))},D=_(`初始标题`),O=_(!1),k=_(`默认输入`),A=_(`初始内容`),j=(e,n,r)=>u(e=>{let n=w().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[2].childNodes[1],l=a.parentNode,u=n.childNodes[0].childNodes[3].childNodes[1],d=u.parentNode,f=n.childNodes[0].childNodes[4].childNodes[1],m=f.parentNode,h=n.childNodes[0].childNodes[5],g=h.parentNode,_=n.childNodes[0].childNodes[6].childNodes[1],v=_.parentNode,y=(e,t,n)=>{let r=()=>o(E,()=>({modelValue:k.value,onUpdateModelValue:e=>k.value=e,title:D.value,onUpdateTitle:e=>D.value=e,titleModifiers:{trim:!0},content:A.value,onUpdateContent:e=>A.value=e}));return e==null?r():c(e,n,r)},b=r.nextSibling;i.removeChild(r),t({parent:i,before:b},()=>y,()=>({}));let x=p(``);l.insertBefore(x,a),l.removeChild(a),s(x,()=>k.value);let S=p(``);d.insertBefore(S,u),d.removeChild(u),s(S,()=>D.value);let C=p(``);m.insertBefore(C,f),m.removeChild(f),s(C,()=>A.value);let j=(e,t,n)=>{let r=()=>o(T,()=>({enabled:O.value,onUpdateEnabled:e=>O.value=e}));return e==null?r():c(e,n,r)},M=h.nextSibling;g.removeChild(h),t({parent:g,before:M},()=>j,()=>({}));let N=p(``);return v.insertBefore(N,_),v.removeChild(_),s(N,()=>O.value?`是`:`否`),[n,n]}),M=`import { type FC, ref } from '@rue-js/rue'

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
`,N=(e,t,n)=>o(x,()=>({options:{title:`命名 v-model`,source:M},children:(e,t,n)=>{let i=()=>u(e=>{let t=g();r(t,j,()=>({}));let n=p(``),i=p(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,n,i)}}));export{N as default};