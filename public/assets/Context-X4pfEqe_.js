import{At as e,Dn as t,E as n,M as r,Mt as i,Q as a,Vt as o,_n as s,_t as c,at as l,ct as u,et as d,gn as f,hn as p,j as m,kn as h,on as g,pn as _,qt as v,rt as y,sn as b,st as x,tn as S,ut as C,vn as w,wn as T}from"./rue-runtime-HIMg8Lz8.js";import{t as E}from"./createHomeSplitExamplePage-DNdswIPW.js";var D=w(`<div class="flex flex-wrap gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700">-1</button><button class="rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700">+1</button><button class="rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900">重置</button></div>`),O=w(`<div class="rounded-2xl bg-base-200 p-4"><div class="text-sm text-base-content/60">当前共享计数</div><div class="mt-2 text-5xl font-black tracking-tight"><!--rue:text-hole:0--></div><div class="mt-2 text-sm text-base-content/70">这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。</div></div>`),k=w(`<div class="rounded-xl border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-semibold">Deep Child</div><p class="mt-2 text-sm text-base-content/70">这里隔了多层包装组件，仍然能直接读取 Context。</p><div class="mt-3 text-lg font-semibold">深层读取结果：<!--rue:text-hole:0--></div></div>`),A=w(`<div class="rounded-2xl bg-base-200 p-4"><div class="mb-3 text-sm text-base-content/60">中间层组件不接收任何 count props</div><!--rue:opaque-hole:0--></div>`),j=w(`<div class="rounded-2xl bg-base-200 p-4"><div class="text-sm text-base-content/60">读取到的主题标签</div><div class="mt-3 flex flex-wrap items-center gap-3"><span><!--rue:text-hole:0--></span><span class="text-sm text-base-content/70"><!--rue:text-hole:1--></span></div></div>`),M=w(`<div class="space-y-6"><div class="card bg-base-100 shadow"><div class="card-body gap-3"><h2 class="text-2xl font-semibold">Context Demo</h2><p class="text-sm text-base-content/70">此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。</p></div></div><!--rue:opaque-hole:0--><div class="card bg-base-100 shadow"><div class="card-body gap-4"><h3 class="text-xl font-semibold">缺少 Provider 时回退默认值</h3><p class="text-sm text-base-content/70">这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。</p><div class="grid gap-4 lg:grid-cols-2"><div class="rounded-2xl border border-dashed border-base-300 p-4"><div class="mb-3 text-sm font-semibold">没有 Provider</div><!--rue:opaque-hole:1--></div><div class="rounded-2xl border border-dashed border-base-300 p-4"><div class="mb-3 text-sm font-semibold">有 Provider</div><!--rue:opaque-hole:2--></div></div></div></div></div>`),N=m({count:b(`ref:1:0`,()=>S(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),P=m({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),F=()=>r(N),I=e=>{let t=l(e.children),n=S(1),r=()=>{n.value+=1},a=()=>{--n.value},o=()=>{n.value=1};return v(()=>u(i(N.Provider,()=>({value:{count:n,increment:r,decrement:a,reset:o},children:t.get()})),e=>d(()=>{t.set(e.children)}),()=>e))},L=()=>{let{increment:e,decrement:n,reset:r}=F();return u(o(Object.assign(i=>{let a=D().content.cloneNode(!0).firstChild,o=a.childNodes[0],s=a.childNodes[1],c=a.childNodes[2];o.className=`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`;let l=e=>{let t=n;typeof t==`function`&&t(e)};o.addEventListener(`click`,l),t(()=>o.removeEventListener(`click`,l)),s.className=`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`;let u=t=>{let n=e;typeof n==`function`&&n(t)};s.addEventListener(`click`,u),t(()=>s.removeEventListener(`click`,u)),c.className=`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`;let d=e=>{let t=r;typeof t==`function`&&t(e)};return c.addEventListener(`click`,d),t(()=>c.removeEventListener(`click`,d)),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{}))},R=()=>{let{count:t}=F();return u(e(()=>{let e=c(),n=O().content.cloneNode(!0),r=n.firstChild.childNodes[1].childNodes[0],i=r.parentNode;return e.appendChild(n),T(()=>{let e=t.value;h(()=>C(e,i,r))}),e},!0),e=>d(()=>{}))},z=()=>{let{count:t}=F();return u(e(()=>{let e=c(),n=k().content.cloneNode(!0),r=n.firstChild.childNodes[2].childNodes[1],i=r.parentNode;return e.appendChild(n),T(()=>{let e=t.value;h(()=>C(e,i,r))}),e},!0),e=>d(()=>{}))},B=()=>u(y(z,()=>({})),e=>d(()=>{})),V=()=>u(o(Object.assign(e=>{let t=A().content.cloneNode(!0).firstChild,n=t.childNodes[1],r=n.parentNode,i=p(r);return x(i,B,()=>({})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{})),H=()=>{let t=r(P);return u(e(()=>{let e=c(),n=j().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[1].childNodes[0],o=r.childNodes[1].childNodes[0].childNodes[0],s=o.parentNode,l=r.childNodes[1].childNodes[1].childNodes[0],u=l.parentNode;return e.appendChild(n),T(()=>{a(i,t.toneClassName)}),T(()=>{let e=t.label;h(()=>C(e,s,o))}),T(()=>{let e=t.note;h(()=>C(e,u,l))}),e},!0),e=>d(()=>{}))},U=()=>u((()=>{let e=i(H,()=>({}));return i(P.Provider,()=>({value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:e}))})(),e=>d(()=>{})),W=()=>u(o(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,r=t.childNodes[1],i=r.parentNode,a=t.childNodes[2].childNodes[0].childNodes[2].childNodes[0].childNodes[1],l=a.parentNode,u=t.childNodes[2].childNodes[0].childNodes[2].childNodes[1].childNodes[1],d=u.parentNode,m=p(i);x(m,I,()=>({children:(e,t,r)=>n(e,r,()=>o(Object.assign(e=>{let t=c(),n=f(`div`,t);_(t,n),n.className=`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`;let r=f(`div`,n);_(n,r),r.className=`card bg-base-100 shadow`;let i=f(`div`,r);_(r,i),i.className=`card-body gap-4`,x(i,R,()=>({})),x(i,L,()=>({}));let a=f(`div`,n);_(n,a),a.className=`card bg-base-100 shadow`;let o=f(`div`,a);_(a,o),o.className=`card-body gap-4`;let l=f(`h3`,o);_(o,l),l.className=`text-xl font-semibold`,_(l,s(`深层消费`));let u=f(`p`,o);return _(o,u),u.className=`text-sm text-base-content/70`,_(u,s(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`)),x(o,V,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),i.insertBefore(m,r);let h=p(l);x(h,H,()=>({})),l.insertBefore(h,a);let g=p(d);return x(g,U,()=>({})),d.insertBefore(g,u),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>d(()=>{}));g(R),g(H),g(L),g(z);var G=E({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {props.children}
    </CounterContext.Provider>
  )
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
    <ThemeContext.Provider
      value={{
        label: '暖阳主题（来自 Provider）',
        toneClassName: 'badge badge-warning',
        note: '这里被 ThemeContext.Provider 显式包裹。',
      }}
    >
      <ThemeChip />
    </ThemeContext.Provider>
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
`,Demo:W,codeCardClassName:`h-[420px] md:h-[860px]`});export{G as default};