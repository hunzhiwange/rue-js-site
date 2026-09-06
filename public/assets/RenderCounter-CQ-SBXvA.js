import{An as e,Dn as t,Vt as n,_n as r,at as i,ct as a,et as o,hn as s,in as c,sn as l,st as u,tn as d,vn as f,wn as p,xn as m}from"./rue-runtime-HIMg8Lz8.js";import{t as h}from"./createHomeSplitExamplePage-DNdswIPW.js";var g=f(`<div class="text-3xl font-bold mb-3"><!--rue:text-hole:0--></div>`),_=f(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">渲染函数计数器</h2><!--rue:opaque-hole:0--><div class="flex flex-wrap justify-center gap-2"><button>+1</button><button>-1</button><button>重置</button></div></div></div>`),v=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,y=e=>{let t=i(e.count);return a(n(Object.assign(e=>{let n=g().content.cloneNode(!0).firstChild,i=n.childNodes[0],a=i.parentNode,o=r(``);return a.insertBefore(o,i),a.removeChild(i),m(o,()=>t.get().value),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>o(()=>{t.set(e.count)}),()=>e)},b=h({title:`渲染函数计数器`,source:`import { type FC, ref, useSetup, watchEffect } from '@rue-js/rue'

const BUTTON_CLASS_NAME =
  'rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all'

const RenderCounterValue: FC<{ count: { value: number } }> = ({ count }) => (
  <div className="text-3xl font-bold mb-3">{count.value}</div>
)

const RenderCounterDemo: FC = () => {
  const count = ref(0)

  useSetup(() => {
    watchEffect(() => {
      console.info(\`watchEffect计数发生了变化：\${count.value}\`)
    })
  })

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body">
        <h2 className="text-2xl font-semibold mb-2">渲染函数计数器</h2>
        <RenderCounterValue count={count} />
        <div className="flex flex-wrap justify-center gap-2">
          <button
            className={\`\${BUTTON_CLASS_NAME} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200\`}
            onClick={() => {
              count.value += 1
            }}
          >
            +1
          </button>
          <button
            className={\`\${BUTTON_CLASS_NAME} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200\`}
            onClick={() => {
              count.value -= 1
            }}
          >
            -1
          </button>
          <button
            className={\`\${BUTTON_CLASS_NAME} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200\`}
            onClick={() => {
              count.value = 0
            }}
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default RenderCounterDemo
`,Demo:()=>{let{count:r}=l(`useSetup:0:0`,()=>c(()=>{let t=d(0);return c(()=>{l(`watchEffect:1:1`,()=>e(()=>{console.info(`watchEffect计数发生了变化：${t.value}`)}))}),{count:t}}));return n(Object.assign(e=>{let n=_().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[2].childNodes[0],a=n.childNodes[0].childNodes[2].childNodes[1],o=n.childNodes[0].childNodes[2].childNodes[2],c=n.childNodes[0].childNodes[1],l=c.parentNode,d;p(()=>{let e=`${v} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,t=e==null?``:String(e);Object.is(d,t)||(d=t,i.className=t)});let f=e=>{let t=()=>{r.value+=1};typeof t==`function`&&t(e)};i.addEventListener(`click`,f),t(()=>i.removeEventListener(`click`,f));let m;p(()=>{let e=`${v} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,t=e==null?``:String(e);Object.is(m,t)||(m=t,a.className=t)});let h=e=>{let t=()=>{--r.value};typeof t==`function`&&t(e)};a.addEventListener(`click`,h),t(()=>a.removeEventListener(`click`,h));let g;p(()=>{let e=`${v} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,t=e==null?``:String(e);Object.is(g,t)||(g=t,o.className=t)});let b=e=>{let t=()=>{r.value=0};typeof t==`function`&&t(e)};o.addEventListener(`click`,b),t(()=>o.removeEventListener(`click`,b));let x=s(l);return u(x,y,()=>({count:r})),l.insertBefore(x,c),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}});export{b as default};