import{Cn as e,Mt as t,Tt as n,dt as r,en as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p,wn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./ExamplePlayground-DYHfjLP8.js";var b=()=>{let e=v(`ref:1:0`,()=>l(0));return v(`watch:1:1`,()=>i(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>f(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:r}=v(`useSetup:0:0`,()=>e(()=>{let[e]=v(`useState:1:3`,()=>m(b));return{state:e}}));return h(e=>{let i=u(`div`,e);n(i,`card bg-base-100 shadow`);let a=u(`div`,i);d(i,a),n(a,`card-body`);let l=u(`h2`,a);d(a,l),n(l,`text-2xl font-semibold mb-2`),d(l,s(`计数器示例`));let p=u(`div`,a);d(a,p),n(p,`text-4xl font-bold mb-3`);let m=o(p);d(p,m),f(()=>{t(m,r.count.value)});let h=u(`div`,a);d(a,h),n(h,`flex flex-wrap justify-center gap-2`);let g=u(`button`,h);d(h,g),n(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),c(g,`click`,()=>r.count.value++),d(g,s(`+1`));let _=u(`button`,h);d(h,_),n(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),c(_,`click`,()=>r.count.value--),d(_,s(`-1`));let v=u(`button`,h);return d(h,v),n(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),c(v,`click`,()=>{r.count.value=0}),d(v,s(`重置`)),i})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,C=()=>h(e=>{let t=a(),n=r(`rue:component:anchor`);d(t,n);let i=_(x,{});return f(()=>{let e=_(y,{title:`基础计数器`,source:S,children:i});p(()=>g(e,t,n))}),t});export{C as default};