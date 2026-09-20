import{Bt as e,H as t,J as n,U as r,V as i,Vt as a,Wt as o,Y as s,_t as c,en as l,ft as u,gn as d,gt as f,in as p,mn as m,pn as h,sn as g,st as _,u as v,vt as y,yn as b,zt as x}from"./rue-runtime-Cv6BZekS.js";import{t as S}from"./createHomeSplitExamplePage-DqLcVC_n.js";var C=b(`<div class="text-3xl font-bold mb-3">rue:direct-text</div>`),w=b(`<div class="card bg-base-100 shadow"><div class="card-body"><h2 class="text-2xl font-semibold mb-2">渲染函数计数器</h2><!--rue:opaque-hole:0--><div class="flex flex-wrap justify-center gap-2"><button>+1</button><button>-1</button><button>重置</button></div></div></div>`),T=`rounded-lg border px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all`,E=(t,n,i)=>{let a=y(f(t,`count`));return r(o(()=>{let t=m(),n=C().content.cloneNode(!0),r=n.firstChild.childNodes[0],i=r.parentNode,o=h(`rue:text-hole:0`);i.replaceChild(o,r),t.appendChild(n),e({parent:i,before:o},()=>x(a.get().value),()=>({}));let s=d(``),c=d(``);return t.insertBefore(s,t.firstChild),t.appendChild(c),[t.firstChild,t.lastChild]}),e=>l(()=>{a.set(e.count)}),()=>c(t))},D=(t,r,c)=>{let l=_(0);return n(`RenderCounterDemo:hook:0`,()=>{u(()=>{console.info(`watchEffect计数发生了变化：${l.value}`)})}),s(()=>o(t=>{let n=w().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[2].childNodes[0],o=n.childNodes[0].childNodes[2].childNodes[1],s=n.childNodes[0].childNodes[2].childNodes[2],c=n.childNodes[0].childNodes[1],u=c.parentNode,d;p(()=>{let e=`${T} border-blue-500 bg-blue-500 hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200`,t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,r.setAttribute(`class`,t))}),g(v(t,r,`click`,()=>()=>{l.value+=1}));let f;p(()=>{let e=`${T} border-yellow-500 bg-yellow-500 hover:border-yellow-700 hover:bg-yellow-700 focus:ring focus:ring-yellow-200`,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,o.setAttribute(`class`,t))}),g(v(t,o,`click`,()=>()=>{--l.value}));let m;p(()=>{let e=`${T} border-gray-700 bg-gray-700 hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200`,t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,s.setAttribute(`class`,t))}),g(v(t,s,`click`,()=>()=>{l.value=0}));let h=(e,t,n)=>{let r=()=>i(E,()=>({count:l}));return e==null?r():a(e,n,r)},_=c.nextSibling;return u.removeChild(c),e({parent:u,before:_},()=>h,()=>({})),[n,n]}))},O=`import { type FC, ref, useSetup, watchEffect } from '@rue-js/rue'

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
`,k=(e,n,r)=>i(S,()=>({options:{title:`渲染函数计数器`,source:O},children:(e,n,r)=>{let i=()=>o(e=>{let n=m();t(n,D,()=>({}));let r=d(``),i=d(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():a(e,r,i)}}));export{k as default};