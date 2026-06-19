import{$ as e,Q as t,Qt as n,Wt as r,X as i,Xt as a,Y as o,Yt as s,Zt as c,et as l,ht as u,l as d,lt as f,nt as p,o as m,t as h,tt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./ExamplePlayground-pZPoAT9o.js";var b=()=>{let e=v(`ref:1:0`,()=>_(0));return v(`watch:1:1`,()=>c(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>n(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:e}=v(`useSetup:0:0`,()=>s(()=>{let[e]=v(`useState:1:3`,()=>a(b));return{state:e}}));return d(t=>{let r=l(`div`,t);f(r,`card bg-base-100 shadow`);let a=l(`div`,r);i(r,a),f(a,`card-body`);let s=l(`h2`,a);i(a,s),f(s,`text-2xl font-semibold mb-2`),i(s,g(`计数器示例`));let c=l(`div`,a);i(a,c),f(c,`text-4xl font-bold mb-3`);let d=p(c);i(c,d),n(()=>{u(d,e.count.value)});let m=l(`div`,a);i(a,m),f(m,`flex flex-wrap justify-center gap-2`);let h=l(`button`,m);i(m,h),f(h,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),o(h,`click`,()=>e.count.value++),i(h,g(`+1`));let _=l(`button`,m);i(m,_),f(_,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),o(_,`click`,()=>e.count.value--),i(_,g(`-1`));let v=l(`button`,m);return i(m,v),f(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),o(v,`click`,()=>{e.count.value=0}),i(v,g(`重置`)),r})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,C=()=>d(a=>{let o=e(),s=t(`rue:component:anchor`);i(o,s);let c=h(x,{});return n(()=>{let e=h(y,{title:`基础计数器`,source:S,children:c});r(()=>m(e,o,s))}),o});export{C as default};