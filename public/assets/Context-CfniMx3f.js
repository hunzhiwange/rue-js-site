import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,d as s,et as c,ht as l,l as u,lt as d,nt as f,o as p,t as m,tt as h,u as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./createHomeSplitExamplePage-Br1mQ323.js";var b=g({count:v(`ref:1:0`,()=>_(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=g({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>s(b),C=a=>{let{count:s,increment:c,decrement:l,reset:d}=v(`useSetup:0:0`,()=>o(()=>{let e=v(`ref:1:1`,()=>_(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return u(o=>{let u=e(),f=t(`rue:component:anchor`);return i(u,f),n(()=>{let e=m(b.Provider,{value:{count:s,increment:c,decrement:l,reset:d},children:a.children});r(()=>p(e,u,f))}),u})},w=()=>{let{increment:e,decrement:t,reset:n}=v(`useSetup:0:0:dup1`,()=>o(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return u(r=>{let o=c(`div`,r);d(o,`flex flex-wrap gap-2`);let s=c(`button`,o);i(o,s),d(s,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),a(s,`click`,t),i(s,h(`-1`));let l=c(`button`,o);i(o,l),d(l,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),a(l,`click`,e),i(l,h(`+1`));let u=c(`button`,o);return i(o,u),d(u,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),a(u,`click`,n),i(u,h(`重置`)),o})},T=()=>{let{count:e}=v(`useSetup:0:0:dup2`,()=>o(()=>{let{count:e}=S();return{count:e}}));return u(t=>{let r=c(`div`,t);d(r,`rounded-2xl bg-base-200 p-4`);let a=c(`div`,r);i(r,a),d(a,`text-sm text-base-content/60`),i(a,h(`当前共享计数`));let o=c(`div`,r);i(r,o),d(o,`mt-2 text-5xl font-black tracking-tight`);let s=f(o);i(o,s),n(()=>{l(s,e.value)});let u=c(`div`,r);return i(r,u),d(u,`mt-2 text-sm text-base-content/70`),i(u,h(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),r})},E=()=>{let{count:e}=v(`useSetup:0:0:dup3`,()=>o(()=>{let{count:e}=S();return{count:e}}));return u(t=>{let r=c(`div`,t);d(r,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let a=c(`div`,r);i(r,a),d(a,`text-sm font-semibold`),i(a,h(`Deep Child`));let o=c(`p`,r);i(r,o),d(o,`mt-2 text-sm text-base-content/70`),i(o,h(`这里隔了多层包装组件，仍然能直接读取 Context。`));let s=c(`div`,r);i(r,s),d(s,`mt-3 text-lg font-semibold`),i(s,h(`深层读取结果：`));let u=f(s);return i(s,u),n(()=>{l(u,e.value)}),r})},D=()=>u(n=>{let r=e(),a=t(`rue:component:anchor`);return i(r,a),p(m(E,{}),r,a),r}),O=()=>u(e=>{let n=c(`div`,e);d(n,`rounded-2xl bg-base-200 p-4`);let r=c(`div`,n);i(n,r),d(r,`mb-3 text-sm text-base-content/60`),i(r,h(`中间层组件不接收任何 count props`));let a=t(`rue:component:anchor`);return i(n,a),p(m(D,{}),n,a),n}),k=()=>{let{theme:e}=v(`useSetup:0:0:dup4`,()=>o(()=>({theme:s(x)})));return u(a=>{let o=c(`div`,a);d(o,`rounded-2xl bg-base-200 p-4`);let s=c(`div`,o);i(o,s),d(s,`text-sm text-base-content/60`),i(s,h(`读取到的主题标签`));let l=c(`div`,o);i(o,l),d(l,`mt-3 flex flex-wrap items-center gap-3`);let u=c(`span`,l);i(l,u),n(()=>{d(u,e.toneClassName)});let f=t(`rue:slot:anchor`);i(u,f),n(()=>{let t=e.label;r(()=>p(t,u,f))});let m=c(`span`,l);i(l,m),d(m,`text-sm text-base-content/70`);let g=t(`rue:slot:anchor`);return i(m,g),n(()=>{let t=e.note;r(()=>p(t,m,g))}),o})},A=()=>u(a=>{let o=e(),s=t(`rue:component:anchor`);i(o,s);let c=m(k,{});return n(()=>{let e=m(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:c});r(()=>p(e,o,s))}),o}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>u(n=>{let r=c(`div`,n);d(r,`space-y-6`);let a=c(`div`,r);i(r,a),d(a,`card bg-base-100 shadow`);let o=c(`div`,a);i(a,o),d(o,`card-body gap-3`);let s=c(`h2`,o);i(o,s),d(s,`text-2xl font-semibold`),i(s,h(`Context Demo`));let l=c(`p`,o);i(o,l),d(l,`text-sm text-base-content/70`),i(l,h(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let f=t(`rue:component:anchor`);i(r,f),p(m(C,{children:u(()=>{let n=e(),r=c(`div`,n);i(n,r),d(r,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let a=c(`div`,r);i(r,a),d(a,`card bg-base-100 shadow`);let o=c(`div`,a);i(a,o),d(o,`card-body gap-4`);let s=t(`rue:component:anchor`);i(o,s),p(m(T,{}),o,s);let l=t(`rue:component:anchor`);i(o,l),p(m(w,{}),o,l);let u=c(`div`,r);i(r,u),d(u,`card bg-base-100 shadow`);let f=c(`div`,u);i(u,f),d(f,`card-body gap-4`);let g=c(`h3`,f);i(f,g),d(g,`text-xl font-semibold`),i(g,h(`深层消费`));let _=c(`p`,f);i(f,_),d(_,`text-sm text-base-content/70`),i(_,h(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=t(`rue:component:anchor`);return i(f,v),p(m(O,{}),f,v),n})}),r,f);let g=c(`div`,r);i(r,g),d(g,`card bg-base-100 shadow`);let _=c(`div`,g);i(g,_),d(_,`card-body gap-4`);let v=c(`h3`,_);i(_,v),d(v,`text-xl font-semibold`),i(v,h(`缺少 Provider 时回退默认值`));let y=c(`p`,_);i(_,y),d(y,`text-sm text-base-content/70`),i(y,h(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=c(`div`,_);i(_,b),d(b,`grid gap-4 lg:grid-cols-2`);let x=c(`div`,b);i(b,x),d(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=c(`div`,x);i(x,S),d(S,`mb-3 text-sm font-semibold`),i(S,h(`没有 Provider`));let E=t(`rue:component:anchor`);i(x,E),p(m(k,{}),x,E);let D=c(`div`,b);i(b,D),d(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=c(`div`,D);i(D,j),d(j,`mb-3 text-sm font-semibold`),i(j,h(`有 Provider`));let M=t(`rue:component:anchor`);return i(D,M),p(m(A,{}),D,M),r}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};