import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,Z as s,_t as c,bt as l,c as u,j as d,lt as f,pt as p,t as m,u as h,vt as g,yt as _}from"./vapor-runtime-D3a-68js.js";import{a as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./ExamplePlayground-CuoIEujL.js";var b=()=>{let e=v(`ref:1:0`,()=>f(0));return v(`watch:1:1`,()=>_(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>l(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:e}=v(`useSetup:0:0`,()=>c(()=>{let[e]=v(`useState:1:3`,()=>g(b));return{state:e}}));return h(()=>{let a=n(`div`);t(a,`card bg-base-100 shadow`);let c=n(`div`);i(a,c),t(c,`card-body`);let u=n(`h2`);i(c,u),t(u,`text-2xl font-semibold mb-2`),i(u,r(`计数器示例`));let f=n(`div`);i(c,f),t(f,`text-4xl font-bold mb-3`);let p=o(f);i(f,p),l(()=>{s(p,e.count.value)});let m=n(`div`);i(c,m),t(m,`flex flex-wrap justify-center gap-2`);let h=n(`button`);i(m,h),t(h,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),d(h,`click`,()=>e.count.value++),i(h,r(`+1`));let g=n(`button`);i(m,g),t(g,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),d(g,`click`,()=>e.count.value--),i(g,r(`-1`));let _=n(`button`);return i(m,_),t(_,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),d(_,`click`,()=>{e.count.value=0}),i(_,r(`重置`)),a})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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

export default ReactiveCounterDemo`,C=()=>h(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n);let r=m(x,{});return l(()=>{let e=m(y,{title:`基础计数器`,source:S,children:r});p(()=>u(e,t,n))}),t});export{C as default};