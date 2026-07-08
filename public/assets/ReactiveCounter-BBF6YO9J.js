import{Bt as e,Q as t,Vt as n,Xt as r,Z as i,at as a,bt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,sn as m,t as h,tn as g,tt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./ExamplePlayground-CEVrpYcI.js";var b=()=>{let t=v(`ref:1:0`,()=>r(0));return v(`watch:1:1`,()=>e(t,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>n(()=>{console.info(`watchEffect计数发生了变化：${t.value}`)})),{count:t}},x=()=>{let{state:e}=v(`useSetup:0:0`,()=>d(()=>{let[e]=v(`useState:1:3`,()=>m(b));return{state:e}}));return c(r=>{let c=p(`div`,r);f(c,`card bg-base-100 shadow`);let l=p(`div`,c);t(c,l),f(l,`card-body`);let u=p(`h2`,l);t(l,u),f(u,`text-2xl font-semibold mb-2`),t(u,s(`计数器示例`));let d=p(`div`,l);t(l,d),f(d,`text-4xl font-bold mb-3`);let m=a(d);t(d,m),n(()=>{o(m,e.count.value)});let h=p(`div`,l);t(l,h),f(h,`flex flex-wrap justify-center gap-2`);let g=p(`button`,h);t(h,g),f(g,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),i(g,`click`,()=>e.count.value++),t(g,s(`+1`));let _=p(`button`,h);t(h,_),f(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),i(_,`click`,()=>e.count.value--),t(_,s(`-1`));let v=p(`button`,h);return t(h,v),f(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),i(v,`click`,()=>{e.count.value=0}),t(v,s(`重置`)),c})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,C=()=>c(e=>{let r=l(),i=_(`rue:component:anchor`);t(r,i);let a=h(x,{});return n(()=>{let e=h(y,{title:`基础计数器`,source:S,children:a});g(()=>u(e,r,i))}),r});export{C as default};