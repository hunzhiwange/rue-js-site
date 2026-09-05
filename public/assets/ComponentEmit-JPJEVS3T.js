import{Bt as e,D as t,Dn as n,Et as r,Y as i,_n as a,_t as o,bn as s,ft as c,gn as l,ht as u,kn as d,nt as f,q as p,qt as m,wn as h,z as g}from"./rue-runtime-CwEGJ854.js";import{t as _}from"./createHomeSplitExamplePage-DuLZTUZH.js";var v=a(`<button class="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">触发保存</button>`),y=a(`<label class="block"><span class="mb-1.5 block text-sm font-medium text-gray-700"><!--rue:text-hole:0--></span><input class="block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200" placeholder="请输入名称"></label>`),b=a(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-pink-600 mb-3">组件 emit</h2><!--rue:opaque-hole:0--><p class="text-gray-700">保存消息：<!--rue:text-hole:1--></p><!--rue:opaque-hole:2--><p class="text-gray-700">输入的名称：<!--rue:text-hole:3--></p><!--rue:opaque-hole:4--><p class="text-gray-700">v-model 名称：<!--rue:text-hole:5--></p></div></div>`),x=e=>{let i=t(e);return r(Object.assign(e=>{let t=v().content.cloneNode(!0).firstChild,r=t;r.className=`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`;let a=e=>{let t=()=>i(`save`,`已保存的是数据是123456`);typeof t==`function`&&t(e)};return r.addEventListener(`click`,a),n(()=>r.removeEventListener(`click`,a)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},S=e=>{let i=t(e);return r(Object.assign(t=>{let r=y().content.cloneNode(!0).firstChild,a=r.childNodes[1],o=r.childNodes[0].childNodes[0],u=o.parentNode;a.className=`block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200`,a.setAttribute(`placeholder`,`请输入名称`);let d;h(()=>{let t=e.modelValue??``,n=t==null?``:String(t);Object.is(d,n)||(d=n,c(a,n))});let f=e=>{let t=e=>i(`updateModelValue`,e.target.value);typeof t==`function`&&t(e)};a.addEventListener(`input`,f),n(()=>a.removeEventListener(`input`,f));let p=l(``);return u.insertBefore(p,o),u.removeChild(o),s(p,()=>e.label??`输入名称`),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))},C=m(`ref:1:0`,()=>e(``)),w=m(`ref:1:1`,()=>e(``)),T=m(`ref:1:2`,()=>e(``)),E=_({title:`组件 emit`,source:`import { type FC, ref, useEmit } from '@rue-js/rue'

const EmitChild: FC<{ onSave?: (message: string) => void }> = props => {
  const emit = useEmit(props)

  return (
    <button
      className="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700"
      onClick={() => emit('save', '已保存的是数据是123456')}
    >
      触发保存
    </button>
  )
}

const EmitInputChild: FC<{
  label?: string
  modelValue?: string
  onUpdateModelValue?: (value: string) => void
}> = props => {
  const emit = useEmit(props)

  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {props.label ?? '输入名称'}
      </span>
      <input
        className="block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        placeholder="请输入名称"
        value={props.modelValue ?? ''}
        onInput={(event: Event) =>
          emit('updateModelValue', (event.target as HTMLInputElement).value)
        }
      />
    </label>
  )
}

const savedMsg = ref('')
const emitName = ref('')
const emitModelName = ref('')

const ComponentEmitDemo: FC = () => {
  const emitInputBindings = {
    modelValue: emitName.value,
    onUpdateModelValue: (value: string) => {
      emitName.value = value
    },
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-pink-600 mb-3">组件 emit</h2>
        <EmitChild
          onSave={message => {
            savedMsg.value = message
          }}
        />
        <p className="text-gray-700">保存消息：{savedMsg.value || '（暂无）'}</p>

        <EmitInputChild label="手写 modelValue / onUpdateModelValue" {...emitInputBindings} />
        <p className="text-gray-700">输入的名称：{emitName.value}</p>

        <EmitInputChild label="v-model" v-model={emitModelName.value} />
        <p className="text-gray-700">v-model 名称：{emitModelName.value}</p>
      </div>
    </div>
  )
}

export default ComponentEmitDemo
`,Demo:()=>{let e={modelValue:w.value,onUpdateModelValue:e=>{w.value=e}};return p(u(()=>{let t=f(),n=b().content.cloneNode(!0),r=n.firstChild,a=r.childNodes[0].childNodes[1],s=a.parentNode,c=r.childNodes[0].childNodes[2].childNodes[1],l=c.parentNode,u=r.childNodes[0].childNodes[3],p=u.parentNode,m=r.childNodes[0].childNodes[4].childNodes[1],g=m.parentNode,_=r.childNodes[0].childNodes[5],v=_.parentNode,y=r.childNodes[0].childNodes[6].childNodes[1],E=y.parentNode;t.appendChild(n);let D=o(x,()=>({onSave:e=>{C.value=e}}));return i(D,s,a),h(()=>{let e=C.value||`（暂无）`;d(()=>i(e,l,c))}),h(()=>{let t=o(S,()=>({label:`手写 modelValue / onUpdateModelValue`,...e}));d(()=>i(t,p,u))}),h(()=>{let e=w.value;d(()=>i(e,g,m))}),h(()=>{let e=o(S,()=>({label:`v-model`,modelValue:T.value,onUpdateModelValue:e=>T.value=e}));d(()=>i(e,v,_))}),h(()=>{let e=T.value;d(()=>i(e,E,y))}),t},!0),e=>g(()=>{}))}});export{E as default};