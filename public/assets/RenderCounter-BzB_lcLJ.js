import{An as e,Dn as t,Et as n,Gt as r,K as i,W as a,Wt as o,_n as s,bn as c,gn as l,mn as u,q as d,qt as f,wn as p,z as m}from"./rue-runtime-CwEGJ854.js";import{t as h}from"./createHomeSplitExamplePage-BwH-lO_t.js";var g=s(`<div class="text-3xl font-bold mb-3"><!--rue:text-hole:0--></div>`),_=s(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">渲染函数计数器</h2><!--rue:opaque-hole:0--><div class="flex flex-wrap justify-center gap-2"><button>+1</button><button>-1</button><button>重置</button></div></div></div>`),v=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,y=e=>{let t=a(e.count);return d(n(Object.assign(e=>{let n=g().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=l(``);return i.insertBefore(a,r),i.removeChild(r),c(a,()=>t.get().value),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.count)}),()=>e)},b=h({title:`渲染函数计数器`,source:`import { type FC, useSetup, useState, watchEffect } from '@rue-js/rue'

const BUTTON_CLASS_NAME =
  'rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all'

const RenderCounterValue: FC<{ count: { value: number } }> = ({ count }) => (
  <div className="text-3xl font-bold mb-3">{count.value}</div>
)

const RenderCounterDemo: FC = () => {
  const [count, setCount] = useState(0, { kind: 'ref' })

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
            onClick={() =>
              setCount(value => {
                value.value += 1
              })
            }
          >
            +1
          </button>
          <button
            className={\`\${BUTTON_CLASS_NAME} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200\`}
            onClick={() =>
              setCount(value => {
                value.value -= 1
              })
            }
          >
            -1
          </button>
          <button
            className={\`\${BUTTON_CLASS_NAME} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200\`}
            onClick={() => setCount(0)}
          >
            重置
          </button>
        </div>
      </div>
    </div>
  )
}

export default RenderCounterDemo
`,Demo:()=>{let{count:a,setCount:s}=f(`useSetup:0:0`,()=>o(()=>{let[t,n]=r(0,{kind:`ref`});return o(()=>{f(`watchEffect:1:1`,()=>e(()=>{console.info(`watchEffect计数发生了变化：${t.value}`)}))}),{count:t,setCount:n}}));return n(Object.assign(e=>{let n=_().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[2].childNodes[0],o=n.childNodes[0].childNodes[2].childNodes[1],c=n.childNodes[0].childNodes[2].childNodes[2],l=n.childNodes[0].childNodes[1],d=l.parentNode,f;p(()=>{let e=`${v} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,t=e==null?``:String(e);Object.is(f,t)||(f=t,r.className=t)});let m=e=>{let t=()=>s(e=>{e.value+=1});typeof t==`function`&&t(e)};r.addEventListener(`click`,m),t(()=>r.removeEventListener(`click`,m));let h;p(()=>{let e=`${v} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,t=e==null?``:String(e);Object.is(h,t)||(h=t,o.className=t)});let g=e=>{let t=()=>s(e=>{--e.value});typeof t==`function`&&t(e)};o.addEventListener(`click`,g),t(()=>o.removeEventListener(`click`,g));let b;p(()=>{let e=`${v} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,t=e==null?``:String(e);Object.is(b,t)||(b=t,c.className=t)});let x=e=>{let t=()=>s(0);typeof t==`function`&&t(e)};c.addEventListener(`click`,x),t(()=>c.removeEventListener(`click`,x));let S=u(d);return i(S,y,()=>({count:a})),d.insertBefore(S,l),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}});export{b as default};