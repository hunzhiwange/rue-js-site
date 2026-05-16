import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,_t as c,d as l,gt as u,ht as d,l as f,mt as p,ot as m,t as h,ut as g,z as _}from"./vapor-runtime-B3ypJaOM.js";import{a as v}from"./vapor-helpers-vapor-CER7Yupw.js";import{t as y}from"./ExamplePlayground-pv7Gcw27.js";var b=()=>{let e=v(`ref:1:0`,()=>m(0));return v(`watch:1:1`,()=>u(e,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),v(`watchEffect:1:2`,()=>c(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)})),{count:e}},x=()=>{let{state:e}=v(`useSetup:0:0`,()=>p(()=>{let[e]=v(`useState:1:3`,()=>d(b));return{state:e}}));return l(t=>{let l=r(`div`,t);n(l,`card bg-base-100 shadow`);let u=r(`div`,l);a(l,u),n(u,`card-body`);let d=r(`h2`,u);a(u,d),n(d,`text-2xl font-semibold mb-2`),a(d,s(`计数器示例`));let f=r(`div`,u);a(u,f),n(f,`text-4xl font-bold mb-3`);let p=_(f);a(f,p),c(()=>{o(p,e.count.value)});let m=r(`div`,u);a(u,m),n(m,`flex flex-wrap justify-center gap-2`);let h=r(`button`,m);a(m,h),n(h,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),i(h,`click`,()=>e.count.value++),a(h,s(`+1`));let g=r(`button`,m);a(m,g),n(g,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),i(g,`click`,()=>e.count.value--),a(g,s(`-1`));let v=r(`button`,m);return a(m,v),n(v,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),i(v,`click`,()=>{e.count.value=0}),a(v,s(`重置`)),l})},S=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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

export default ReactiveCounterDemo`,C=()=>l(n=>{let r=t(),i=e(`rue:component:anchor`);a(r,i);let o=h(x,{});return c(()=>{let e=h(y,{title:`基础计数器`,source:S,children:o});g(()=>f(e,r,i))}),r});export{C as default};