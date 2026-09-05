import{Bt as e,Dn as t,Et as n,K as r,L as i,Lt as a,W as o,X as s,_n as c,bn as l,ft as u,gn as d,ht as f,mn as p,nt as m,q as h,qt as g,rt as _,wn as v,z as y}from"./rue-runtime-CwEGJ854.js";import{t as b}from"./createHomeSplitExamplePage-BwH-lO_t.js";var x=c(`<label class="flex items-center space-x-2"><input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"><span class="text-sm font-medium text-gray-700">启用</span></label>`),S=c(`<div class="grid gap-2"><div class="flex gap-2 items-center"><span>默认</span><input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"></div><div class="flex gap-2 items-center"><span>标题</span><input class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2"></div><div class="flex gap-2 items-center"><span>内容</span><!--rue:opaque-hole:0--></div></div>`),C=c(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-3">命名 v-model</h2><!--rue:opaque-hole:0--><p>默认 v-model：<!--rue:text-hole:1--></p><p>标题：<!--rue:text-hole:2--></p><p>内容：<!--rue:text-hole:3--></p><!--rue:opaque-hole:4--><p>启用状态：<!--rue:text-hole:5--></p></div></div>`),w=e=>{let r=o(e.enabled),i=o(e.onUpdateEnabled);return h(n(Object.assign(e=>{let n=x().content.cloneNode(!0).firstChild,a=n.childNodes[0];a.setAttribute(`type`,`checkbox`),a.className=`h-4 w-4 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400`;let o;v(()=>{let e=!!r.get();Object.is(o,e)||(o=e,a.checked=e)});let s=e=>{let t=e=>i.get()?.(e.target.checked);typeof t==`function`&&t(e)};return a.addEventListener(`change`,s),t(()=>a.removeEventListener(`change`,s)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>y(()=>{r.set(e.enabled),i.set(e.onUpdateEnabled)}),()=>e)},T=e=>{let t=o(e.content),n=o(e.modelValue),r=o(e.onUpdateContent),c=o(e.onUpdateModelValue),l=o(e.onUpdateTitle),d=o(e.title),p=o(e.titleModifiers),g=e=>{let t=e.target.value;l.get()?.(p.get()?.trim?t.trim():t)};return h(f(()=>{let e=m(),o=S().content.cloneNode(!0),l=o.firstChild,f=l.childNodes[0].childNodes[1],p=l.childNodes[1].childNodes[1],h=l.childNodes[2].childNodes[1],y=h.parentNode;e.appendChild(o),i(f,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),v(()=>{u(f,n.get()??``)});let b=e=>{let t=e=>c.get()?.(e.target.value);typeof t==`function`&&t(e)};f.addEventListener(`input`,b),a(()=>f.removeEventListener(`input`,b)),i(p,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 px-3 py-2`),v(()=>{u(p,d.get()??``)});let x=e=>{let t=g;typeof t==`function`&&t(e)};p.addEventListener(`input`,x),a(()=>p.removeEventListener(`input`,x));let C=_(`textarea`,y);s(y,C),y.insertBefore(C,h),i(C,`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 px-3 py-2`),v(()=>{u(C,t.get()??``)});let w=e=>{let t=e=>r.get()?.(e.target.value);typeof t==`function`&&t(e)};return C.addEventListener(`input`,w),a(()=>C.removeEventListener(`input`,w)),e},!0),e=>y(()=>{t.set(e.content),n.set(e.modelValue),r.set(e.onUpdateContent),c.set(e.onUpdateModelValue),l.set(e.onUpdateTitle),d.set(e.title),p.set(e.titleModifiers)}),()=>e)},E=g(`ref:1:0`,()=>e(`初始标题`)),D=g(`ref:1:1`,()=>e(!1)),O=g(`ref:1:2`,()=>e(`默认输入`)),k=g(`ref:1:3`,()=>e(`初始内容`)),A=b({title:`命名 v-model`,source:`import { type FC, ref } from '@rue-js/rue'

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
`,Demo:()=>h(n(Object.assign(e=>{let t=C().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1],i=n.parentNode,a=t.childNodes[0].childNodes[2].childNodes[1],o=a.parentNode,s=t.childNodes[0].childNodes[3].childNodes[1],c=s.parentNode,u=t.childNodes[0].childNodes[4].childNodes[1],f=u.parentNode,m=t.childNodes[0].childNodes[5],h=m.parentNode,g=t.childNodes[0].childNodes[6].childNodes[1],_=g.parentNode,v=p(i);r(v,T,()=>({modelValue:O.value,onUpdateModelValue:e=>O.value=e,title:E.value,onUpdateTitle:e=>E.value=e,titleModifiers:{trim:!0},content:k.value,onUpdateContent:e=>k.value=e})),i.insertBefore(v,n);let y=d(``);o.insertBefore(y,a),o.removeChild(a),l(y,()=>O.value);let b=d(``);c.insertBefore(b,s),c.removeChild(s),l(b,()=>E.value);let x=d(``);f.insertBefore(x,u),f.removeChild(u),l(x,()=>k.value);let S=p(h);r(S,w,()=>({enabled:D.value,onUpdateEnabled:e=>D.value=e})),h.insertBefore(S,m);let A=d(``);return _.insertBefore(A,g),_.removeChild(g),l(A,()=>D.value?`是`:`否`),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>y(()=>{}))});export{A as default};