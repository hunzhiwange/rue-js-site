import{Bt as e,H as t,It as n,Lt as r,Rt as i,U as a,V as o,Vt as s,Wt as c,Y as l,_t as u,en as d,fn as f,gn as p,gt as m,hn as h,in as g,mn as _,pn as v,sn as y,st as b,vt as x,yn as S,zt as C}from"./rue-runtime-Cv6BZekS.js";import{t as w}from"./createHomeSplitExamplePage-DqLcVC_n.js";var T=S(`<div class="flex flex-wrap gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700">-1</button><button class="rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700">+1</button><button class="rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900">重置</button></div>`),E=S(`<div class="rounded-2xl bg-base-200 p-4"><div class="text-sm text-base-content/60">当前共享计数</div><div class="mt-2 text-5xl font-black tracking-tight">rue:direct-text</div><div class="mt-2 text-sm text-base-content/70">这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。</div></div>`),D=S(`<div class="rounded-xl border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-semibold">Deep Child</div><p class="mt-2 text-sm text-base-content/70">这里隔了多层包装组件，仍然能直接读取 Context。</p><div class="mt-3 text-lg font-semibold">深层读取结果：<!--rue:text-hole:0--></div></div>`),O=S(`<div class="rounded-2xl bg-base-200 p-4"><div class="mb-3 text-sm text-base-content/60">中间层组件不接收任何 count props</div><!--rue:opaque-hole:0--></div>`),k=S(`<div class="rounded-2xl bg-base-200 p-4"><div class="text-sm text-base-content/60">读取到的主题标签</div><div class="mt-3 flex flex-wrap items-center gap-3"><span>rue:direct-text</span><span class="text-sm text-base-content/70">rue:direct-text</span></div></div>`),A=S(`<div class="space-y-6"><div class="card bg-base-100 shadow"><div class="card-body gap-3"><h2 class="text-2xl font-semibold">Context Demo</h2><p class="text-sm text-base-content/70">此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。</p></div></div><!--rue:opaque-hole:0--><div class="card bg-base-100 shadow"><div class="card-body gap-4"><h3 class="text-xl font-semibold">缺少 Provider 时回退默认值</h3><p class="text-sm text-base-content/70">这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。</p><div class="grid gap-4 lg:grid-cols-2"><div class="rounded-2xl border border-dashed border-base-300 p-4"><div class="mb-3 text-sm font-semibold">没有 Provider</div><!--rue:opaque-hole:1--></div><div class="rounded-2xl border border-dashed border-base-300 p-4"><div class="mb-3 text-sm font-semibold">有 Provider</div><!--rue:opaque-hole:2--></div></div></div></div></div>`),j=n({count:b(1),increment:()=>{},decrement:()=>{},reset:()=>{}}),M=n({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),N=()=>i(j),P=(t,n,i)=>{let o=x(m(t,`children`)),s=b(1),h=()=>{s.value+=1},g=()=>{--s.value},y=()=>{s.value=1};return r(j,()=>({count:s,increment:h,decrement:g,reset:y})),l(()=>a(c(t=>{let n=_(),r=v(`rue:compiled-slot`);f(n,r),e({parent:n,before:r},()=>o.get(),()=>({}));let i=p(``),a=p(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]}),e=>d(()=>{o.set(e.children)}),()=>u(t)))},F=(t,n,i)=>{let o=x(m(t,`children`));return r(M,()=>({label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeProvider 显式包裹。`})),a(c(t=>{let n=_(),r=v(`rue:compiled-slot`);f(n,r),e({parent:n,before:r},()=>o.get(),()=>({}));let i=p(``),a=p(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]}),e=>d(()=>{o.set(e.children)}),()=>u(t))},I=(e,t,n)=>{let{increment:r,decrement:i,reset:a}=N();return c(e=>{let t=T().content.cloneNode(!0).firstChild,n=t.childNodes[0],o=t.childNodes[1],s=t.childNodes[2];n.setAttribute(`class`,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`);let c=e=>{let t=i;typeof t==`function`&&t(e)};n.addEventListener(`click`,c),y(()=>n.removeEventListener(`click`,c)),o.setAttribute(`class`,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`);let l=e=>{let t=r;typeof t==`function`&&t(e)};o.addEventListener(`click`,l),y(()=>o.removeEventListener(`click`,l)),s.setAttribute(`class`,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`);let u=e=>{let t=a;typeof t==`function`&&t(e)};return s.addEventListener(`click`,u),y(()=>s.removeEventListener(`click`,u)),[t,t]})},L=(t,n,r)=>{let{count:i}=N();return c(t=>{let n=E().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[0],a=r.parentNode,o=v(`rue:text-hole:0`);return a.replaceChild(o,r),e({parent:a,before:o},()=>C(i.value),()=>({})),[n,n]})},R=(t,n,r)=>{let{count:i}=N();return c(t=>{let n=D().content.cloneNode(!0).firstChild,r=n.childNodes[2].childNodes[1],a=r.parentNode;return e({parent:a,before:r},()=>C(i.value),()=>({})),[n,n]})},z=(e,t,n)=>o(R,()=>({})),B=(t,n,r)=>c(t=>{let n=O().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=r.parentNode,a=(e,t,n)=>{let r=()=>o(z,()=>({}));return e==null?r():s(e,n,r)},c=r.nextSibling;return i.removeChild(r),e({parent:i,before:c},()=>a,()=>({})),[n,n]}),V=(t,n,r)=>{let a=i(M);return c(t=>{let n=k().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[0],i=n.childNodes[1].childNodes[0].childNodes[0],o=i.parentNode,s=n.childNodes[1].childNodes[1].childNodes[0],c=s.parentNode,l=v(`rue:text-hole:0`);o.replaceChild(l,i);let u=v(`rue:text-hole:1`);c.replaceChild(u,s);let d;return g(()=>{let e=a.toneClassName,t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,r.setAttribute(`class`,t))}),e({parent:o,before:l},()=>C(a.label),()=>({})),e({parent:c,before:u},()=>C(a.note),()=>({})),[n,n]})},H=(e,n,r)=>o(F,()=>({children:(e,n,r)=>{let i=()=>c(e=>{let n=_();t(n,V,()=>({}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}})),U=(n,r,i)=>c(n=>{let r=A().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=i.parentNode,l=r.childNodes[2].childNodes[0].childNodes[2].childNodes[0].childNodes[1],u=l.parentNode,d=r.childNodes[2].childNodes[0].childNodes[2].childNodes[1].childNodes[1],m=d.parentNode,g=(e,n,r)=>{let i=()=>o(P,()=>({children:(e,n,r)=>{let i=()=>c(e=>{let n=_(),r=h(`div`,n);f(n,r),r.setAttribute(`class`,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let i=h(`div`,r);f(r,i),i.setAttribute(`class`,`card bg-base-100 shadow`);let a=h(`div`,i);f(i,a),a.setAttribute(`class`,`card-body gap-4`),t(a,L,()=>({})),t(a,I,()=>({}));let o=h(`div`,r);f(r,o),o.setAttribute(`class`,`card bg-base-100 shadow`);let s=h(`div`,o);f(o,s),s.setAttribute(`class`,`card-body gap-4`);let c=h(`h3`,s);f(s,c),c.setAttribute(`class`,`text-xl font-semibold`),f(c,p(`深层消费`));let l=h(`p`,s);f(s,l),l.setAttribute(`class`,`text-sm text-base-content/70`),f(l,p(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`)),t(s,B,()=>({}));let u=p(``),d=p(``);return n.insertBefore(u,n.firstChild),n.appendChild(d),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}}));return e==null?i():s(e,r,i)},v=i.nextSibling;a.removeChild(i),e({parent:a,before:v},()=>g,()=>({}));let y=(e,t,n)=>{let r=()=>o(V,()=>({}));return e==null?r():s(e,n,r)},b=l.nextSibling;u.removeChild(l),e({parent:u,before:b},()=>y,()=>({}));let x=(e,t,n)=>{let r=()=>o(H,()=>({}));return e==null?r():s(e,n,r)},S=d.nextSibling;return m.removeChild(d),e({parent:m,before:S},()=>x,()=>({})),[r,r]}),W=`import { createContext, type FC, ref, useContext } from '@rue-js/rue'
import { provideContext } from '@rue-js/rue/internal/app'

const CounterContext = createContext({
  count: ref(1),
  increment: () => {},
  decrement: () => {},
  reset: () => {},
})

const ThemeContext = createContext({
  label: '默认主题（来自 createContext 默认值）',
  toneClassName: 'badge badge-neutral',
  note: '当前组件没有被任何 ThemeContext.Provider 包裹。',
})

const useCounter = () => useContext(CounterContext)

const CounterProvider: FC<{ children?: any }> = props => {
  const count = ref(1)

  const increment = () => {
    count.value += 1
  }

  const decrement = () => {
    count.value -= 1
  }

  const reset = () => {
    count.value = 1
  }

  provideContext(CounterContext, () => ({ count, increment, decrement, reset }))

  return <>{props.children}</>
}

const ThemeProvider: FC<{ children?: any }> = props => {
  provideContext(ThemeContext, () => ({
    label: '暖阳主题（来自 Provider）',
    toneClassName: 'badge badge-warning',
    note: '这里被 ThemeProvider 显式包裹。',
  }))
  return <>{props.children}</>
}

const CounterActions: FC = () => {
  const { increment, decrement, reset } = useCounter()

  return (
    <div className="flex flex-wrap gap-2">
      <button
        className="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700"
        onClick={decrement}
      >
        -1
      </button>
      <button
        className="rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700"
        onClick={increment}
      >
        +1
      </button>
      <button
        className="rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900"
        onClick={reset}
      >
        重置
      </button>
    </div>
  )
}

const CounterSummary: FC = () => {
  const { count } = useCounter()

  return (
    <div className="rounded-2xl bg-base-200 p-4">
      <div className="text-sm text-base-content/60">当前共享计数</div>
      <div className="mt-2 text-5xl font-black tracking-tight">{count.value}</div>
      <div className="mt-2 text-sm text-base-content/70">
        这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。
      </div>
    </div>
  )
}

const DeepCounterReader: FC = () => {
  const { count } = useCounter()

  return (
    <div className="rounded-xl border border-dashed border-base-300 bg-base-100 p-4">
      <div className="text-sm font-semibold">Deep Child</div>
      <p className="mt-2 text-sm text-base-content/70">
        这里隔了多层包装组件，仍然能直接读取 Context。
      </p>
      <div className="mt-3 text-lg font-semibold">深层读取结果：{count.value}</div>
    </div>
  )
}

const LayerTwo: FC = () => {
  return <DeepCounterReader />
}

const LayerOne: FC = () => {
  return (
    <div className="rounded-2xl bg-base-200 p-4">
      <div className="mb-3 text-sm text-base-content/60">中间层组件不接收任何 count props</div>
      <LayerTwo />
    </div>
  )
}

const ThemeChip: FC = () => {
  const theme = useContext(ThemeContext)

  return (
    <div className="rounded-2xl bg-base-200 p-4">
      <div className="text-sm text-base-content/60">读取到的主题标签</div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className={theme.toneClassName}>{theme.label}</span>
        <span className="text-sm text-base-content/70">{theme.note}</span>
      </div>
    </div>
  )
}

const ProvidedThemePreview: FC = () => {
  return (
    <ThemeProvider>
      <ThemeChip />
    </ThemeProvider>
  )
}

const ContextDemo: FC = () => {
  return (
    <div className="space-y-6">
      <div className="card bg-base-100 shadow">
        <div className="card-body gap-3">
          <h2 className="text-2xl font-semibold">Context Demo</h2>
          <p className="text-sm text-base-content/70">
            此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和
            useContext 避免 prop drilling。
          </p>
        </div>
      </div>

      <CounterProvider>
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card bg-base-100 shadow">
            <div className="card-body gap-4">
              <CounterSummary />
              <CounterActions />
            </div>
          </div>

          <div className="card bg-base-100 shadow">
            <div className="card-body gap-4">
              <h3 className="text-xl font-semibold">深层消费</h3>
              <p className="text-sm text-base-content/70">
                右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。
              </p>
              <LayerOne />
            </div>
          </div>
        </div>
      </CounterProvider>

      <div className="card bg-base-100 shadow">
        <div className="card-body gap-4">
          <h3 className="text-xl font-semibold">缺少 Provider 时回退默认值</h3>
          <p className="text-sm text-base-content/70">
            这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时，
            useContext() 会回退到 createContext() 里声明的默认值。
          </p>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-base-300 p-4">
              <div className="mb-3 text-sm font-semibold">没有 Provider</div>
              <ThemeChip />
            </div>

            <div className="rounded-2xl border border-dashed border-base-300 p-4">
              <div className="mb-3 text-sm font-semibold">有 Provider</div>
              <ProvidedThemePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContextDemo
`,G=(e,n,r)=>o(w,()=>({options:{title:`Context（移植自 SolidJS）`,source:W,codeCardClassName:`h-[420px] md:h-[860px]`},children:(e,n,r)=>{let i=()=>c(e=>{let n=_();t(n,U,()=>({}));let r=p(``),i=p(``);return n.insertBefore(r,n.firstChild),n.appendChild(i),[n.firstChild,n.lastChild]});return e==null?i():s(e,r,i)}}));export{G as default};