import{$ as e,J as t,Jt as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,et as d,l as f,mt as p,qt as m,s as h,t as g,tt as _}from"./vapor-runtime-DHPuOjqh.js";import{a as v}from"./vapor-helpers-vapor-CJFAWine.js";import{t as y}from"./ExamplePlayground-DVlKF6tZ.js";var b=()=>{let e=v(`ref:1:0`,()=>i(0));return v(`watch:1:1`,()=>n(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>c(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:n}=v(`useSetup:0:0`,()=>r(()=>{let[e]=v(`useState:1:3`,()=>m(b));return{state:e}}));return f(r=>{let i=e(`div`,r);u(i,`card bg-base-100 shadow`);let a=e(`div`,i);s(i,a),u(a,`card-body`);let o=e(`h2`,a);s(a,o),u(o,`text-2xl font-semibold mb-2`),s(o,d(`计数器示例`));let l=e(`div`,a);s(a,l),u(l,`text-4xl font-bold mb-3`);let f=_(l);s(l,f),c(()=>{p(f,n.count.value)});let m=e(`div`,a);s(a,m),u(m,`flex flex-wrap justify-center gap-2`);let h=e(`button`,m);s(m,h),u(h,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),t(h,`click`,()=>n.count.value++),s(h,d(`+1`));let g=e(`button`,m);s(m,g),u(g,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),t(g,`click`,()=>n.count.value--),s(g,d(`-1`));let v=e(`button`,m);return s(m,v),u(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),t(v,`click`,()=>{n.count.value=0}),s(v,d(`重置`)),i})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,C=()=>f(e=>{let t=a(),n=l(`rue:component:anchor`);s(t,n);let r=g(x,{});return c(()=>{let e=g(y,{title:`基础计数器`,source:S,children:r});o(()=>h(e,t,n))}),t});export{C as default};