import{$t as e,Jt as t,Q as n,Rt as r,Z as i,an as a,dt as o,et as s,in as c,it as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./ExamplePlayground-BpRRv8az.js";var b=()=>{let e=v(`ref:1:0`,()=>t(0));return v(`watch:1:1`,()=>r(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>_(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:e}=v(`useSetup:0:0`,()=>c(()=>{let[e]=v(`useState:1:3`,()=>a(b));return{state:e}}));return u(t=>{let r=d(`div`,t);o(r,`card bg-base-100 shadow`);let a=d(`div`,r);n(r,a),o(a,`card-body`);let s=d(`h2`,a);n(a,s),o(s,`text-2xl font-semibold mb-2`),n(s,p(`计数器示例`));let c=d(`div`,a);n(a,c),o(c,`text-4xl font-bold mb-3`);let u=l(c);n(c,u),_(()=>{g(u,e.count.value)});let f=d(`div`,a);n(a,f),o(f,`flex flex-wrap justify-center gap-2`);let m=d(`button`,f);n(f,m),o(m,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),i(m,`click`,()=>e.count.value++),n(m,p(`+1`));let h=d(`button`,f);n(f,h),o(h,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),i(h,`click`,()=>e.count.value--),n(h,p(`-1`));let v=d(`button`,f);return n(f,v),o(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),i(v,`click`,()=>{e.count.value=0}),n(v,p(`重置`)),r})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,C=()=>u(t=>{let r=h(),i=s(`rue:component:anchor`);n(r,i);let a=m(x,{});return _(()=>{let t=m(y,{title:`基础计数器`,source:S,children:a});e(()=>f(t,r,i))}),r});export{C as default};