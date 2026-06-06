import{Dt as e,Et as t,G as n,H as r,J as i,K as a,Ot as o,V as s,W as c,_t as l,d as u,kt as d,l as f,q as p,st as m,t as h,tt as g,xt as _}from"./vapor-runtime-ACs_OvwU.js";import{a as v}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as y}from"./ExamplePlayground-AnwlFxJs.js";var b=()=>{let e=v(`ref:1:0`,()=>l(0));return v(`watch:1:1`,()=>o(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>d(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:n}=v(`useSetup:0:0`,()=>t(()=>{let[t]=v(`useState:1:3`,()=>e(b));return{state:t}}));return u(e=>{let t=a(`div`,e);g(t,`card bg-base-100 shadow`);let o=a(`div`,t);r(t,o),g(o,`card-body`);let c=a(`h2`,o);r(o,c),g(c,`text-2xl font-semibold mb-2`),r(c,p(`计数器示例`));let l=a(`div`,o);r(o,l),g(l,`text-4xl font-bold mb-3`);let u=i(l);r(l,u),d(()=>{m(u,n.count.value)});let f=a(`div`,o);r(o,f),g(f,`flex flex-wrap justify-center gap-2`);let h=a(`button`,f);r(f,h),g(h,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),s(h,`click`,()=>n.count.value++),r(h,p(`+1`));let _=a(`button`,f);r(f,_),g(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),s(_,`click`,()=>n.count.value--),r(_,p(`-1`));let v=a(`button`,f);return r(f,v),g(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),s(v,`click`,()=>{n.count.value=0}),r(v,p(`重置`)),t})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,C=()=>u(e=>{let t=n(),i=c(`rue:component:anchor`);r(t,i);let a=h(x,{});return d(()=>{let e=h(y,{title:`基础计数器`,source:S,children:a});_(()=>f(e,t,i))}),t});export{C as default};