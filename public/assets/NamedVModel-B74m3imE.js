import{At as e,Dn as t,Dt as n,Q as r,Qt as i,Vt as a,_n as o,_t as s,at as c,ct as l,dt as u,et as d,hn as f,sn as p,st as m,tn as h,vn as g,vt as _,wn as v,xn as y}from"./rue-runtime-HIMg8Lz8.js";import{t as b}from"./createHomeSplitExamplePage-DNdswIPW.js";var x=g(`<label class="flex items-center space-x-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"><span class="text-sm font-medium text-gray-700">启用</span></label>`),S=g(`<div class="grid gap-2"><div class="flex gap-2 items-center"><span>默认</span><input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"></div><div class="flex gap-2 items-center"><span>标题</span><input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"></div><div class="flex gap-2 items-center"><span>内容</span><!--rue:opaque-hole:0--></div></div>`),C=g(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">命名 v-model</h2><!--rue:opaque-hole:0--><p>默认 v-model：<!--rue:text-hole:1--></p><p>标题：<!--rue:text-hole:2--></p><p>内容：<!--rue:text-hole:3--></p><!--rue:opaque-hole:4--><p>启用状态：<!--rue:text-hole:5--></p></div></div>`),w=e=>{let n=c(e.enabled),r=c(e.onUpdateEnabled);return l(a(Object.assign(e=>{let i=x().content.cloneNode(!0).firstChild,a=i.childNodes[0];a.setAttribute(`type`,`checkbox`),a.className=`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`;let o;v(()=>{let e=!!n.get();Object.is(o,e)||(o=e,a.checked=e)});let s=e=>{let t=e=>r.get()?.(e.target.checked);typeof t==`function`&&t(e)};return a.addEventListener(`change`,s),t(()=>a.removeEventListener(`change`,s)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{n.set(e.enabled),r.set(e.onUpdateEnabled)}),()=>e)},T=t=>{let a=c(t.content),o=c(t.modelValue),f=c(t.onUpdateContent),p=c(t.onUpdateModelValue),m=c(t.onUpdateTitle),h=c(t.title),g=c(t.titleModifiers),y=e=>{let t=e.target.value;m.get()?.(g.get()?.trim?t.trim():t)};return l(e(()=>{let e=s(),t=S().content.cloneNode(!0),c=t.firstChild,l=c.childNodes[0].childNodes[1],d=c.childNodes[1].childNodes[1],m=c.childNodes[2].childNodes[1],g=m.parentNode;e.appendChild(t),r(l,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),v(()=>{n(l,o.get()??``)});let b=e=>{let t=e=>p.get()?.(e.target.value);typeof t==`function`&&t(e)};l.addEventListener(`input`,b),i(()=>l.removeEventListener(`input`,b)),r(d,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),v(()=>{n(d,h.get()??``)});let x=e=>{let t=y;typeof t==`function`&&t(e)};d.addEventListener(`input`,x),i(()=>d.removeEventListener(`input`,x));let C=_(`textarea`,g);u(g,C),g.insertBefore(C,m),r(C,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),v(()=>{n(C,a.get()??``)});let w=e=>{let t=e=>f.get()?.(e.target.value);typeof t==`function`&&t(e)};return C.addEventListener(`input`,w),i(()=>C.removeEventListener(`input`,w)),e},!0),e=>d(()=>{a.set(e.content),o.set(e.modelValue),f.set(e.onUpdateContent),p.set(e.onUpdateModelValue),m.set(e.onUpdateTitle),h.set(e.title),g.set(e.titleModifiers)}),()=>t)},E=p(`ref:1:0`,()=>h(`初始标题`)),D=p(`ref:1:1`,()=>h(!1)),O=p(`ref:1:2`,()=>h(`默认输入`)),k=p(`ref:1:3`,()=>h(`初始内容`)),A=b({title:`命名 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>l(a(Object.assign(e=>{let t=C().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1],r=n.parentNode,i=t.childNodes[0].childNodes[2].childNodes[1],a=i.parentNode,s=t.childNodes[0].childNodes[3].childNodes[1],c=s.parentNode,l=t.childNodes[0].childNodes[4].childNodes[1],u=l.parentNode,d=t.childNodes[0].childNodes[5],p=d.parentNode,h=t.childNodes[0].childNodes[6].childNodes[1],g=h.parentNode,_=f(r);m(_,T,()=>({modelValue:O.value,onUpdateModelValue:e=>O.value=e,title:E.value,onUpdateTitle:e=>E.value=e,titleModifiers:{trim:!0},content:k.value,onUpdateContent:e=>k.value=e})),r.insertBefore(_,n);let v=o(``);a.insertBefore(v,i),a.removeChild(i),y(v,()=>O.value);let b=o(``);c.insertBefore(b,s),c.removeChild(s),y(b,()=>E.value);let x=o(``);u.insertBefore(x,l),u.removeChild(l),y(x,()=>k.value);let S=f(p);m(S,w,()=>({enabled:D.value,onUpdateEnabled:e=>D.value=e})),p.insertBefore(S,d);let A=o(``);return g.insertBefore(A,h),g.removeChild(h),y(A,()=>D.value?`是`:`否`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{}))});export{A as default};