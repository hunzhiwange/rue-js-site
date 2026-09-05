import{Bt as e,Dn as t,Et as n,H as r,K as i,L as a,Mt as o,O as s,W as c,Y as l,_n as u,_t as d,fn as f,gn as p,hn as m,ht as h,k as g,kn as _,mn as v,nt as y,q as b,qt as x,wn as S,x as C,z as w}from"./rue-runtime-CwEGJ854.js";import{t as T}from"./createHomeSplitExamplePage-BwH-lO_t.js";var E=u(`<div class="flex flex-wrap gap-2"><button class="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700">-1</button><button class="rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700">+1</button><button class="rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900">重置</button></div>`),D=u(`<div class="rounded-2xl bg-base-200 p-4"><div class="text-sm text-base-content/60">当前共享计数</div><div class="mt-2 text-5xl font-black tracking-tight"><!--rue:text-hole:0--></div><div class="mt-2 text-sm text-base-content/70">这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。</div></div>`),O=u(`<div class="rounded-xl border border-dashed border-base-300 bg-base-100 p-4"><div class="text-sm font-semibold">Deep Child</div><p class="mt-2 text-sm text-base-content/70">这里隔了多层包装组件，仍然能直接读取 Context。</p><div class="mt-3 text-lg font-semibold">深层读取结果：<!--rue:text-hole:0--></div></div>`),k=u(`<div class="rounded-2xl bg-base-200 p-4"><div class="mb-3 text-sm text-base-content/60">中间层组件不接收任何 count props</div><!--rue:opaque-hole:0--></div>`),A=u(`<div class="rounded-2xl bg-base-200 p-4"><div class="text-sm text-base-content/60">读取到的主题标签</div><div class="mt-3 flex flex-wrap items-center gap-3"><span><!--rue:text-hole:0--></span><span class="text-sm text-base-content/70"><!--rue:text-hole:1--></span></div></div>`),j=u(`<div class="space-y-6"><div class="card bg-base-100 shadow"><div class="card-body gap-3"><h2 class="text-2xl font-semibold">Context Demo</h2><p class="text-sm text-base-content/70">此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。</p></div></div><!--rue:opaque-hole:0--><div class="card bg-base-100 shadow"><div class="card-body gap-4"><h3 class="text-xl font-semibold">缺少 Provider 时回退默认值</h3><p class="text-sm text-base-content/70">这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。</p><div class="grid gap-4 lg:grid-cols-2"><div class="rounded-2xl border border-dashed border-base-300 p-4"><div class="mb-3 text-sm font-semibold">没有 Provider</div><!--rue:opaque-hole:1--></div><div class="rounded-2xl border border-dashed border-base-300 p-4"><div class="mb-3 text-sm font-semibold">有 Provider</div><!--rue:opaque-hole:2--></div></div></div></div></div>`),M=s({count:x(`ref:1:0`,()=>e(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),N=s({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),P=()=>g(M),F=t=>{let n=c(t.children),r=e(1),i=()=>{r.value+=1},a=()=>{--r.value},s=()=>{r.value=1};return o(()=>b(d(M.Provider,()=>({value:{count:r,increment:i,decrement:a,reset:s},children:n.get()})),e=>w(()=>{n.set(e.children)}),()=>t))},I=()=>{let{increment:e,decrement:r,reset:i}=P();return b(n(Object.assign(n=>{let a=E().content.cloneNode(!0).firstChild,o=a.childNodes[0],s=a.childNodes[1],c=a.childNodes[2];o.className=`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`;let l=e=>{let t=r;typeof t==`function`&&t(e)};o.addEventListener(`click`,l),t(()=>o.removeEventListener(`click`,l)),s.className=`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`;let u=t=>{let n=e;typeof n==`function`&&n(t)};s.addEventListener(`click`,u),t(()=>s.removeEventListener(`click`,u)),c.className=`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`;let d=e=>{let t=i;typeof t==`function`&&t(e)};return c.addEventListener(`click`,d),t(()=>c.removeEventListener(`click`,d)),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{}))},L=()=>{let{count:e}=P();return b(h(()=>{let t=y(),n=D().content.cloneNode(!0),r=n.firstChild.childNodes[1].childNodes[0],i=r.parentNode;return t.appendChild(n),S(()=>{let t=e.value;_(()=>l(t,i,r))}),t},!0),e=>w(()=>{}))},R=()=>{let{count:e}=P();return b(h(()=>{let t=y(),n=O().content.cloneNode(!0),r=n.firstChild.childNodes[2].childNodes[1],i=r.parentNode;return t.appendChild(n),S(()=>{let t=e.value;_(()=>l(t,i,r))}),t},!0),e=>w(()=>{}))},z=()=>b(r(R,()=>({})),e=>w(()=>{})),B=()=>b(n(Object.assign(e=>{let t=k().content.cloneNode(!0).firstChild,n=t.childNodes[1],r=n.parentNode,a=v(r);return i(a,z,()=>({})),r.insertBefore(a,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{})),V=()=>{let e=g(N);return b(h(()=>{let t=y(),n=A().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[1].childNodes[0],o=r.childNodes[1].childNodes[0].childNodes[0],s=o.parentNode,c=r.childNodes[1].childNodes[1].childNodes[0],u=c.parentNode;return t.appendChild(n),S(()=>{a(i,e.toneClassName)}),S(()=>{let t=e.label;_(()=>l(t,s,o))}),S(()=>{let t=e.note;_(()=>l(t,u,c))}),t},!0),e=>w(()=>{}))},H=()=>b((()=>{let e=d(V,()=>({}));return d(N.Provider,()=>({value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:e}))})(),e=>w(()=>{})),U=T({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>b(n(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,r=t.childNodes[1],a=r.parentNode,o=t.childNodes[2].childNodes[0].childNodes[2].childNodes[0].childNodes[1],s=o.parentNode,c=t.childNodes[2].childNodes[0].childNodes[2].childNodes[1].childNodes[1],l=c.parentNode,u=v(a);i(u,F,()=>({children:(e,t,r)=>C(e,r,()=>n(Object.assign(e=>{let t=y(),n=m(`div`,t);f(t,n),n.className=`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`;let r=m(`div`,n);f(n,r),r.className=`card bg-base-100 shadow`;let a=m(`div`,r);f(r,a),a.className=`card-body gap-4`,i(a,L,()=>({})),i(a,I,()=>({}));let o=m(`div`,n);f(n,o),o.className=`card bg-base-100 shadow`;let s=m(`div`,o);f(o,s),s.className=`card-body gap-4`;let c=m(`h3`,s);f(s,c),c.className=`text-xl font-semibold`,f(c,p(`深层消费`));let l=m(`p`,s);return f(s,l),l.className=`text-sm text-base-content/70`,f(l,p(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`)),i(s,B,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(u,r);let d=v(s);i(d,V,()=>({})),s.insertBefore(d,o);let h=v(l);return i(h,H,()=>({})),l.insertBefore(h,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{})),codeCardClassName:`h-[420px] md:h-[860px]`});export{U as default};