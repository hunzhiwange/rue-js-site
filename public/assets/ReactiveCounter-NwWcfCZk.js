import{$ as e,Ht as t,J as n,Jt as r,Lt as i,Q as a,X as o,Xt as s,Yt as c,Z as l,et as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./ExamplePlayground-6EfWP7y3.js";var b=()=>{let e=v(`ref:1:0`,()=>i(0));return v(`watch:1:1`,()=>c(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>s(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:t}=v(`useSetup:0:0`,()=>m(()=>{let[e]=v(`useState:1:3`,()=>r(b));return{state:e}}));return d(r=>{let i=a(`div`,r);g(i,`card bg-base-100 shadow`);let o=a(`div`,i);n(i,o),g(o,`card-body`);let c=a(`h2`,o);n(o,c),g(c,`text-2xl font-semibold mb-2`),n(c,e(`计数器示例`));let l=a(`div`,o);n(o,l),g(l,`text-4xl font-bold mb-3`);let d=u(l);n(l,d),s(()=>{f(d,t.count.value)});let m=a(`div`,o);n(o,m),g(m,`flex flex-wrap justify-center gap-2`);let h=a(`button`,m);n(m,h),g(h,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),p(h,`click`,()=>t.count.value++),n(h,e(`+1`));let _=a(`button`,m);n(m,_),g(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),p(_,`click`,()=>t.count.value--),n(_,e(`-1`));let v=a(`button`,m);return n(m,v),g(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),p(v,`click`,()=>{t.count.value=0}),n(v,e(`重置`)),i})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,C=()=>d(e=>{let r=l(),i=o(`rue:component:anchor`);n(r,i);let a=_(x,{});return s(()=>{let e=_(y,{title:`基础计数器`,source:S,children:a});t(()=>h(e,r,i))}),r});export{C as default};