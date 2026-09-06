import{A as e,At as t,Dn as n,Dt as r,Mt as i,Vt as a,_n as o,_t as s,ct as c,et as l,kn as u,sn as d,tn as f,ut as p,vn as m,wn as h,xn as g}from"./rue-runtime-HIMg8Lz8.js";import{t as _}from"./createHomeSplitExamplePage-DNdswIPW.js";var v=m(`<button class="rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700">触发保存</button>`),y=m(`<label class="block"><span class="mb-1.5 block text-sm font-medium text-gray-700"><!--rue:text-hole:0--></span><input class="block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200" placeholder="请输入名称"></label>`),b=m(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold text-pink-600 mb-3">组件 emit</h2><!--rue:opaque-hole:0--><p class="text-gray-700">保存消息：<!--rue:text-hole:1--></p><!--rue:opaque-hole:2--><p class="text-gray-700">输入的名称：<!--rue:text-hole:3--></p><!--rue:opaque-hole:4--><p class="text-gray-700">v-model 名称：<!--rue:text-hole:5--></p></div></div>`),x=t=>{let r=e(t);return a(Object.assign(e=>{let t=v().content.cloneNode(!0).firstChild,i=t;i.className=`rounded-md bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700`;let a=e=>{let t=()=>r(`save`,`已保存的是数据是123456`);typeof t==`function`&&t(e)};return i.addEventListener(`click`,a),n(()=>i.removeEventListener(`click`,a)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},S=t=>{let i=e(t);return a(Object.assign(e=>{let a=y().content.cloneNode(!0).firstChild,s=a.childNodes[1],c=a.childNodes[0].childNodes[0],l=c.parentNode;s.className=`block w-full rounded-md border-2 border-blue-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200`,s.setAttribute(`placeholder`,`请输入名称`);let u;h(()=>{let e=t.modelValue??``,n=e==null?``:String(e);Object.is(u,n)||(u=n,r(s,n))});let d=e=>{let t=e=>i(`updateModelValue`,e.target.value);typeof t==`function`&&t(e)};s.addEventListener(`input`,d),n(()=>s.removeEventListener(`input`,d));let f=o(``);return l.insertBefore(f,c),l.removeChild(c),g(f,()=>t.label??`输入名称`),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))},C=d(`ref:1:0`,()=>f(``)),w=d(`ref:1:1`,()=>f(``)),T=d(`ref:1:2`,()=>f(``)),E=_({title:`组件 emit`,source:`import { type FC, ref, useEmit } from '@rue-js/rue'

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
`,Demo:()=>{let e={modelValue:w.value,onUpdateModelValue:e=>{w.value=e}};return c(t(()=>{let t=s(),n=b().content.cloneNode(!0),r=n.firstChild,a=r.childNodes[0].childNodes[1],o=a.parentNode,c=r.childNodes[0].childNodes[2].childNodes[1],l=c.parentNode,d=r.childNodes[0].childNodes[3],f=d.parentNode,m=r.childNodes[0].childNodes[4].childNodes[1],g=m.parentNode,_=r.childNodes[0].childNodes[5],v=_.parentNode,y=r.childNodes[0].childNodes[6].childNodes[1],E=y.parentNode;t.appendChild(n);let D=i(x,()=>({onSave:e=>{C.value=e}}));return p(D,o,a),h(()=>{let e=C.value||`（暂无）`;u(()=>p(e,l,c))}),h(()=>{let t=i(S,()=>({label:`手写 modelValue / onUpdateModelValue`,...e}));u(()=>p(t,f,d))}),h(()=>{let e=w.value;u(()=>p(e,g,m))}),h(()=>{let e=i(S,()=>({label:`v-model`,modelValue:T.value,onUpdateModelValue:e=>T.value=e}));u(()=>p(e,v,_))}),h(()=>{let e=T.value;u(()=>p(e,E,y))}),t},!0),e=>l(()=>{}))}});export{E as default};