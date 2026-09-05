import{An as e,Bt as t,Et as n,H as r,K as i,L as a,Lt as o,Mt as s,Y as c,_n as l,dn as u,ht as d,jt as f,kn as p,nt as m,q as h,qt as g,wn as _,x as v,z as y}from"./rue-runtime-CwEGJ854.js";import{t as b}from"./ExamplePlayground-CgC9pzTk.js";var x=l(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">计数器示例</h2><div class="text-4xl font-bold mb-3"><!--rue:text-hole:0--></div><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300">+1</button><button class="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300">-1</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300">重置</button></div></div></div>`),S=()=>{let n=g(`ref:1:0`,()=>t(0));return g(`watch:1:1`,()=>u(n,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),g(`watchEffect:1:2`,()=>e(()=>{console.info(`watchEffect计数发生了变化：${n.value}`)})),{count:n}},C=()=>{let[e]=f(`ReactiveCounterDemo:hook:0`,S);return s(()=>h(d(()=>{let t=m(),n=x().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0].childNodes[2].childNodes[0],s=r.childNodes[0].childNodes[2].childNodes[1],l=r.childNodes[0].childNodes[2].childNodes[2],u=r.childNodes[0].childNodes[1].childNodes[0],d=u.parentNode;t.appendChild(n),a(i,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`);let f=t=>{let n=()=>e.count.value++;typeof n==`function`&&n(t)};i.addEventListener(`click`,f),o(()=>i.removeEventListener(`click`,f)),a(s,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`);let h=t=>{let n=()=>e.count.value--;typeof n==`function`&&n(t)};s.addEventListener(`click`,h),o(()=>s.removeEventListener(`click`,h)),a(l,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`);let g=t=>{let n=()=>{e.count.value=0};typeof n==`function`&&n(t)};return l.addEventListener(`click`,g),o(()=>l.removeEventListener(`click`,g)),_(()=>{let t=e.count.value;p(()=>c(t,d,u))}),t},!0),e=>y(()=>{})))},w=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,T=()=>h(r(b,()=>({title:`基础计数器`,source:w,children:(e,t,r)=>v(e,r,()=>n(Object.assign(e=>{let t=m();return i(t,C,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),e=>y(()=>{}));export{T as default};