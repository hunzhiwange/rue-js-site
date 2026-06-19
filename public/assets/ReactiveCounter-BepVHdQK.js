import{$ as e,$t as t,Bt as n,Gt as r,Qt as i,X as a,Xt as o,Z as s,Zt as c,et as l,gt as u,l as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./ExamplePlayground-DM_o1yyo.js";var b=()=>{let e=v(`ref:1:0`,()=>n(0));return v(`watch:1:1`,()=>i(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>t(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:e}=v(`useSetup:0:0`,()=>o(()=>{let[e]=v(`useState:1:3`,()=>c(b));return{state:e}}));return d(n=>{let r=g(`div`,n);_(r,`card bg-base-100 shadow`);let i=g(`div`,r);s(r,i),_(i,`card-body`);let o=g(`h2`,i);s(i,o),_(o,`text-2xl font-semibold mb-2`),s(o,f(`计数器示例`));let c=g(`div`,i);s(i,c),_(c,`text-4xl font-bold mb-3`);let l=m(c);s(c,l),t(()=>{u(l,e.count.value)});let d=g(`div`,i);s(i,d),_(d,`flex flex-wrap justify-center gap-2`);let p=g(`button`,d);s(d,p),_(p,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),a(p,`click`,()=>e.count.value++),s(p,f(`+1`));let h=g(`button`,d);s(d,h),_(h,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),a(h,`click`,()=>e.count.value--),s(h,f(`-1`));let v=g(`button`,d);return s(d,v),_(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),a(v,`click`,()=>{e.count.value=0}),s(v,f(`重置`)),r})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

type ReactiveCounterState = {
  count: ReturnType<typeof ref<number>>
}

const createReactiveCounterState = (): ReactiveCounterState => {
  const count = ref(0)

  watch(
    count,
    (newValue: number, oldValue: number) => {
      console.info(\`watch计数从 \${oldValue} 变为 \${newValue}\`)
    },
    { immediate: true },
  )

  watchEffect(() => {
    console.info(\`watchEffect计数发生了变化：\${count.value}\`)
  })

  return { count }
}

const ReactiveCounterDemo: FC = () => {
  const [state] = useState(createReactiveCounterState)

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2">计数器示例</h2>
        <div className="text-4xl font-bold mb-3">{state.count.value}</div>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300"
            onClick={() => state.count.value++}
          >
            +1
          </button>
          <button
            className="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300"
            onClick={() => state.count.value--}
          >
            -1
          </button>
          <button
            className="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300"
            onClick={() => {
              state.count.value = 0
            }}
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReactiveCounterDemo
`,C=()=>d(n=>{let i=l(),a=e(`rue:component:anchor`);s(i,a);let o=h(x,{});return t(()=>{let e=h(y,{title:`基础计数器`,source:S,children:o});r(()=>p(e,i,a))}),i});export{C as default};