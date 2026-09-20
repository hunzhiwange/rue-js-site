import{B as e,Bt as t,F as n,I as r,P as i,Vt as a,W as o,Wt as s,en as c,gn as l,in as u,mn as d,mt as f,nt as p,pn as m,sn as h,tt as g,u as _,yn as v,yt as y,z as b,zt as x}from"./rue-runtime-BWbIfNT8.js";import{t as S}from"./createHomeSplitExamplePage-Cjn7V321.js";var C=v(`<div class="text-3xl font-bold mb-3">rue:direct-text</div>`),w=v(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">渲染函数计数器</h2><!--rue:opaque-hole:0--><div class="flex flex-wrap justify-center gap-2"><button>+1</button><button>-1</button><button>重置</button></div></div></div>`),T=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,E=(n,i,a)=>{let u=o(b(n,`count`));return r(s(()=>{let e=d(),n=C().content.cloneNode(!0),r=n.firstChild.childNodes[0],i=r.parentNode,a=m(`rue:text-hole:0`);i.replaceChild(a,r),e.appendChild(n),t({parent:i,before:a},()=>x(u.get().value),()=>({}));let o=l(``),s=l(``);return e.insertBefore(o,e.firstChild),e.appendChild(s),[e.firstChild,e.lastChild]}),e=>c(()=>{u.set(e.count)}),()=>e(n))},D=(e,n,r)=>{let o=f(0);return g(`RenderCounterDemo:hook:0`,()=>{y(()=>{console.info(`watchEffect计数发生了变化：${o.value}`)})}),p(()=>s(e=>{let n=w().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[2].childNodes[0],s=n.childNodes[0].childNodes[2].childNodes[1],c=n.childNodes[0].childNodes[2].childNodes[2],l=n.childNodes[0].childNodes[1],d=l.parentNode,f;u(()=>{let e=`${T} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,r.setAttribute(`class`,t))}),h(_(e,r,`click`,()=>()=>{o.value+=1}));let p;u(()=>{let e=`${T} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,t=e===!1||e==null?``:String(e);Object.is(p,t)||(p=t,s.setAttribute(`class`,t))}),h(_(e,s,`click`,()=>()=>{--o.value}));let m;u(()=>{let e=`${T} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,c.setAttribute(`class`,t))}),h(_(e,c,`click`,()=>()=>{o.value=0}));let g=(e,t,n)=>{let r=()=>i(E,()=>({count:o}));return e==null?r():a(e,n,r)},v=l.nextSibling;return d.removeChild(l),t({parent:d,before:v},()=>g,()=>({})),[n,n]}))},O=`import { type FC, ref, useSetup, watchEffect } from '@rue-js/rue'

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
`,k=(e,t,r)=>i(S,()=>({options:{title:`渲染函数计数器`,source:O},children:(e,t,r)=>{let i=()=>s(e=>{let t=d();n(t,D,()=>({}));let r=l(``),i=l(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():a(e,r,i)}}));export{k as default};