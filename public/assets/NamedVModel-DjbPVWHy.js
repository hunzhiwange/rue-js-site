import{Bt as e,Dt as t,H as n,Mt as r,Qt as i,U as a,V as o,Vt as s,Wt as c,_t as l,en as u,fn as d,gn as f,gt as p,hn as m,in as h,mn as g,sn as _,st as v,vt as y,yn as b}from"./rue-runtime-Cv6BZekS.js";import{t as x}from"./createHomeSplitExamplePage-DqLcVC_n.js";var S=b(`<label class="flex items-center space-x-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"><span class="text-sm font-medium text-gray-700">启用</span></label>`),C=b(`<div class="grid gap-2"><div class="flex gap-2 items-center"><span>默认</span><input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"></div><div class="flex gap-2 items-center"><span>标题</span><input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"></div><div class="flex gap-2 items-center"><span>内容</span><!--rue:opaque-hole:0--></div></div>`),w=b(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">命名 v-model</h2><!--rue:opaque-hole:0--><p>默认 v-model：<!--rue:text-hole:1--></p><p>标题：<!--rue:text-hole:2--></p><p>内容：<!--rue:text-hole:3--></p><!--rue:opaque-hole:4--><p>启用状态：<!--rue:text-hole:5--></p></div></div>`),T=(e,t,n)=>{let r=y(p(e,`enabled`)),i=y(p(e,`onUpdateEnabled`));return a(c(e=>{let t=S().content.cloneNode(!0).firstChild,n=t.childNodes[0];n.setAttribute(`type`,`checkbox`),n.setAttribute(`class`,`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`);let a;h(()=>{let e=!!r.get();Object.is(a,e)||(a=e,n.checked=e)});let o=e=>{let t=e=>i.get()?.(e.target.checked);typeof t==`function`&&t(e)};return n.addEventListener(`change`,o),_(()=>n.removeEventListener(`change`,o)),[t,t]}),e=>u(()=>{r.set(e.enabled),i.set(e.onUpdateEnabled)}),()=>l(e))},E=(e,n,i)=>{let o=y(p(e,`content`)),s=y(p(e,`modelValue`)),f=y(p(e,`onUpdateContent`)),g=y(p(e,`onUpdateModelValue`)),v=y(p(e,`onUpdateTitle`)),b=y(p(e,`title`)),x=y(p(e,`titleModifiers`)),S=e=>{let t=e.target.value;v.get()?.(x.get()?.trim?t.trim():t)};return a(c(e=>{let n=C().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[1],a=n.childNodes[1].childNodes[1],c=n.childNodes[2].childNodes[1],l=c.parentNode;i.setAttribute(`class`,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let u;h(()=>{let e=s.get()??``,t=e==null?``:String(e);Object.is(u,t)||(u=t,i.value=t)});let p=e=>{let t=e=>g.get()?.(e.target.value);typeof t==`function`&&t(e)};i.addEventListener(`input`,p),_(()=>i.removeEventListener(`input`,p)),a.setAttribute(`class`,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`);let v;h(()=>{let e=b.get()??``,t=e==null?``:String(e);Object.is(v,t)||(v=t,a.value=t)});let y=e=>{let t=S;typeof t==`function`&&t(e)};a.addEventListener(`input`,y),_(()=>a.removeEventListener(`input`,y));let x=m(`textarea`,l);d(l,x),l.insertBefore(x,c),t(x,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),h(()=>{r(x,o.get()??``)});let w=e=>{let t=e=>f.get()?.(e.target.value);typeof t==`function`&&t(e)};return x.addEventListener(`input`,w),_(()=>x.removeEventListener(`input`,w)),[n,n]}),e=>u(()=>{o.set(e.content),s.set(e.modelValue),f.set(e.onUpdateContent),g.set(e.onUpdateModelValue),v.set(e.onUpdateTitle),b.set(e.title),x.set(e.titleModifiers)}),()=>l(e))},D=v(`初始标题`),O=v(!1),k=v(`默认输入`),A=v(`初始内容`),j=(t,n,r)=>c(t=>{let n=w().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1],a=r.parentNode,c=n.childNodes[0].childNodes[2].childNodes[1],l=c.parentNode,u=n.childNodes[0].childNodes[3].childNodes[1],d=u.parentNode,p=n.childNodes[0].childNodes[4].childNodes[1],m=p.parentNode,h=n.childNodes[0].childNodes[5],g=h.parentNode,_=n.childNodes[0].childNodes[6].childNodes[1],v=_.parentNode,y=(e,t,n)=>{let r=()=>o(E,()=>({modelValue:k.value,onUpdateModelValue:e=>k.value=e,title:D.value,onUpdateTitle:e=>D.value=e,titleModifiers:{trim:!0},content:A.value,onUpdateContent:e=>A.value=e}));return e==null?r():s(e,n,r)},b=r.nextSibling;a.removeChild(r),e({parent:a,before:b},()=>y,()=>({}));let x=f(``);l.insertBefore(x,c),l.removeChild(c),i(x,()=>k.value);let S=f(``);d.insertBefore(S,u),d.removeChild(u),i(S,()=>D.value);let C=f(``);m.insertBefore(C,p),m.removeChild(p),i(C,()=>A.value);let j=(e,t,n)=>{let r=()=>o(T,()=>({enabled:O.value,onUpdateEnabled:e=>O.value=e}));return e==null?r():s(e,n,r)},M=h.nextSibling;g.removeChild(h),e({parent:g,before:M},()=>j,()=>({}));let N=f(``);return v.insertBefore(N,_),v.removeChild(_),i(N,()=>O.value?`是`:`否`),[n,n]}),M=`import { type FC, ref } from '@rue-js/rue'

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
`,N=(e,t,r)=>o(x,()=>({options:{title:`命名 v-model`,source:M},children:(e,t,r)=>{let i=()=>c(e=>{let t=g();n(t,j,()=>({}));let r=f(``),i=f(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():s(e,r,i)}}));export{N as default};