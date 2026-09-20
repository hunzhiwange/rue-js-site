import{Gt as e,H as t,Kt as n,Qt as r,V as i,Vt as a,Wt as o,Y as s,Yt as c,Zt as l,dt as u,et as d,ft as f,gn as p,mn as m,sn as h,st as g,u as _,yn as v}from"./rue-runtime-Cv6BZekS.js";import{t as y}from"./ExamplePlayground-C5_Cdpk2.js";var b=e([`count`,`value`],[!1,!1]),x=v(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">计数器示例</h2><div class="text-4xl font-bold mb-3"><!--rue:text-hole:0--></div><div class="flex flex-wrap justify-center gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300">+1</button><button class="rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300">-1</button><button class="rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300">重置</button></div></div></div>`),S=()=>{let e=g(0);return u(()=>e.value,(e,t)=>{console.info(`watch计数从 ${t} 变为 ${e}`)},{immediate:!0}),f(()=>{console.info(`watchEffect计数发生了变化：${e.value}`)}),{count:e}},C=(e,t,i)=>{let[a]=d(`ReactiveCounterDemo:hook:0`,S);return s(()=>o(e=>{let t=x().content.cloneNode(!0).firstChild,i=t.childNodes[0].childNodes[2].childNodes[0],o=t.childNodes[0].childNodes[2].childNodes[1],s=t.childNodes[0].childNodes[2].childNodes[2],u=t.childNodes[0].childNodes[1].childNodes[0],d=u.parentNode;i.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300`),h(_(e,i,`click`,()=>()=>c(c(l(a))(`count`))(`value`).value++)),o.setAttribute(`class`,`rounded-lg border border-yellow-500 bg-yellow-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200 disabled:cursor-not-allowed disabled:border-yellow-300 disabled:bg-yellow-300`),h(_(e,o,`click`,()=>()=>c(c(l(a))(`count`))(`value`).value--)),s.setAttribute(`class`,`rounded-lg border border-gray-700 bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300`),h(_(e,s,`click`,()=>()=>{c(c(l(a))(`count`))(`value`).value=0}));let f=p(``);return d.insertBefore(f,u),d.removeChild(u),r(f,()=>n(a,b)),[t,t]}))},w=`import { type FC, ref, useState, watch, watchEffect } from '@rue-js/rue'

type ReactiveCounterState = {
  count: ReturnType<typeof ref<number>>
}

const createReactiveCounterState = (): ReactiveCounterState => {
  const count = ref(0)

  watch(
    () => count.value,
    (newValue: number, oldValue: number | undefined) => {
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
`,T=(e,n,r)=>i(y,()=>({title:`基础计数器`,source:w,children:(e,n,r)=>{let i=()=>o(e=>{let n=m();t(n,C,()=>({}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():a(e,r,i)}}));export{T as default};