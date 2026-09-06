import{An as e,Dn as t,E as n,Kt as r,Vt as i,_n as a,_t as o,ct as s,et as c,fn as l,qt as u,rt as d,sn as f,st as p,tn as m,vn as h,xn as g}from"./rue-runtime-HIMg8Lz8.js";import{t as _}from"./ExamplePlayground-C6Q-WPon.js";var v=h(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">计数器示例</h2><div class="text-4xl font-bold mb-3"><!--rue:text-hole:0--></div><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300">+1</button><button class="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300">-1</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300">重置</button></div></div></div>`),y=()=>{let t=f(`ref:1:0`,()=>m(0));return f(`watch:1:1`,()=>l(t,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0})),f(`watchEffect:1:2`,()=>e(()=>{console.info(`watchEffect计数发生了变化：${t.value}`)})),{count:t}},b=()=>{let[e]=r(`ReactiveCounterDemo:hook:0`,y);return u(()=>s(i(Object.assign(n=>{let r=v().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[2].childNodes[0],o=r.childNodes[0].childNodes[2].childNodes[1],s=r.childNodes[0].childNodes[2].childNodes[2],c=r.childNodes[0].childNodes[1].childNodes[0],l=c.parentNode;i.className=`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`;let u=t=>{let n=()=>e.get().count.value++;typeof n==`function`&&n(t)};i.addEventListener(`click`,u),t(()=>i.removeEventListener(`click`,u)),o.className=`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`;let d=t=>{let n=()=>e.get().count.value--;typeof n==`function`&&n(t)};o.addEventListener(`click`,d),t(()=>o.removeEventListener(`click`,d)),s.className=`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`;let f=t=>{let n=()=>{e.get().count.value=0};typeof n==`function`&&n(t)};s.addEventListener(`click`,f),t(()=>s.removeEventListener(`click`,f));let p=a(``);return l.insertBefore(p,c),l.removeChild(c),g(p,()=>e.get().count.value),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>c(()=>{})))},x=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

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
`,S=()=>s(d(_,()=>({title:`基础计数器`,source:x,children:(e,t,r)=>n(e,r,()=>i(Object.assign(e=>{let t=o();return p(t,b,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),e=>c(()=>{}));export{S as default};