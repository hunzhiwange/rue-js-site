import{$ as e,B as t,Dt as n,Et as r,G as i,H as a,K as o,Tt as s,U as c,W as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./ExamplePlayground-CBXAZwhN.js";var b=()=>{let e=v(`ref:1:0`,()=>d(0));return v(`watch:1:1`,()=>r(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>n(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:r}=v(`useSetup:0:0`,()=>h(()=>{let[e]=v(`useState:1:3`,()=>s(b));return{state:e}}));return f(a=>{let s=l(`div`,a);e(s,`card bg-base-100 shadow`);let c=l(`div`,s);t(s,c),e(c,`card-body`);let d=l(`h2`,c);t(c,d),e(d,`text-2xl font-semibold mb-2`),t(d,i(`计数器示例`));let f=l(`div`,c);t(c,f),e(f,`text-4xl font-bold mb-3`);let p=o(f);t(f,p),n(()=>{u(p,r.count.value)});let m=l(`div`,c);t(c,m),e(m,`flex flex-wrap justify-center gap-2`);let h=l(`button`,m);t(m,h),e(h,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),_(h,`click`,()=>r.count.value++),t(h,i(`+1`));let g=l(`button`,m);t(m,g),e(g,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),_(g,`click`,()=>r.count.value--),t(g,i(`-1`));let v=l(`button`,m);return t(m,v),e(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),_(v,`click`,()=>{r.count.value=0}),t(v,i(`重置`)),s})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,C=()=>f(e=>{let r=c(),i=a(`rue:component:anchor`);t(r,i);let o=m(x,{});return n(()=>{let e=m(y,{title:`基础计数器`,source:S,children:o});g(()=>p(e,r,i))}),r});export{C as default};