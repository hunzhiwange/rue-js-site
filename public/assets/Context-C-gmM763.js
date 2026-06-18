import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,d as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g,u as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./createHomeSplitExamplePage-C98rg19g.js";var b=_({count:v(`ref:1:0`,()=>r(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=_({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>c(b),C=e=>{let{count:i,increment:c,decrement:l,reset:d}=v(`useSetup:0:0`,()=>p(()=>{let e=v(`ref:1:1`,()=>r(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return u(r=>{let u=s(),f=a(`rue:component:anchor`);return n(u,f),o(()=>{let n=g(b.Provider,{value:{count:i,increment:c,decrement:l,reset:d},children:e.children});t(()=>m(n,u,f))}),u})},w=()=>{let{increment:t,decrement:r,reset:a}=v(`useSetup:0:0:dup1`,()=>p(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return u(o=>{let s=i(`div`,o);h(s,`flex flex-wrap gap-2`);let c=i(`button`,s);n(s,c),h(c,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),f(c,`click`,r),n(c,e(`-1`));let l=i(`button`,s);n(s,l),h(l,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),f(l,`click`,t),n(l,e(`+1`));let u=i(`button`,s);return n(s,u),h(u,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),f(u,`click`,a),n(u,e(`重置`)),s})},T=()=>{let{count:t}=v(`useSetup:0:0:dup2`,()=>p(()=>{let{count:e}=S();return{count:e}}));return u(r=>{let a=i(`div`,r);h(a,`rounded-2xl bg-base-200 p-4`);let s=i(`div`,a);n(a,s),h(s,`text-sm text-base-content/60`),n(s,e(`当前共享计数`));let c=i(`div`,a);n(a,c),h(c,`mt-2 text-5xl font-black tracking-tight`);let u=l(c);n(c,u),o(()=>{d(u,t.value)});let f=i(`div`,a);return n(a,f),h(f,`mt-2 text-sm text-base-content/70`),n(f,e(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),a})},E=()=>{let{count:t}=v(`useSetup:0:0:dup3`,()=>p(()=>{let{count:e}=S();return{count:e}}));return u(r=>{let a=i(`div`,r);h(a,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let s=i(`div`,a);n(a,s),h(s,`text-sm font-semibold`),n(s,e(`Deep Child`));let c=i(`p`,a);n(a,c),h(c,`mt-2 text-sm text-base-content/70`),n(c,e(`这里隔了多层包装组件，仍然能直接读取 Context。`));let u=i(`div`,a);n(a,u),h(u,`mt-3 text-lg font-semibold`),n(u,e(`深层读取结果：`));let f=l(u);return n(u,f),o(()=>{d(f,t.value)}),a})},D=()=>u(e=>{let t=s(),r=a(`rue:component:anchor`);return n(t,r),m(g(E,{}),t,r),t}),O=()=>u(t=>{let r=i(`div`,t);h(r,`rounded-2xl bg-base-200 p-4`);let o=i(`div`,r);n(r,o),h(o,`mb-3 text-sm text-base-content/60`),n(o,e(`中间层组件不接收任何 count props`));let s=a(`rue:component:anchor`);return n(r,s),m(g(D,{}),r,s),r}),k=()=>{let{theme:r}=v(`useSetup:0:0:dup4`,()=>p(()=>({theme:c(x)})));return u(s=>{let c=i(`div`,s);h(c,`rounded-2xl bg-base-200 p-4`);let l=i(`div`,c);n(c,l),h(l,`text-sm text-base-content/60`),n(l,e(`读取到的主题标签`));let u=i(`div`,c);n(c,u),h(u,`mt-3 flex flex-wrap items-center gap-3`);let d=i(`span`,u);n(u,d),o(()=>{h(d,r.toneClassName)});let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let e=r.label;t(()=>m(e,d,f))});let p=i(`span`,u);n(u,p),h(p,`text-sm text-base-content/70`);let g=a(`rue:slot:anchor`);return n(p,g),o(()=>{let e=r.note;t(()=>m(e,p,g))}),c})},A=()=>u(e=>{let r=s(),i=a(`rue:component:anchor`);n(r,i);let c=g(k,{});return o(()=>{let e=g(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:c});t(()=>m(e,r,i))}),r}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>u(t=>{let r=i(`div`,t);h(r,`space-y-6`);let o=i(`div`,r);n(r,o),h(o,`card bg-base-100 shadow`);let c=i(`div`,o);n(o,c),h(c,`card-body gap-3`);let l=i(`h2`,c);n(c,l),h(l,`text-2xl font-semibold`),n(l,e(`Context Demo`));let d=i(`p`,c);n(c,d),h(d,`text-sm text-base-content/70`),n(d,e(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let f=a(`rue:component:anchor`);n(r,f),m(g(C,{children:u(()=>{let t=s(),r=i(`div`,t);n(t,r),h(r,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let o=i(`div`,r);n(r,o),h(o,`card bg-base-100 shadow`);let c=i(`div`,o);n(o,c),h(c,`card-body gap-4`);let l=a(`rue:component:anchor`);n(c,l),m(g(T,{}),c,l);let u=a(`rue:component:anchor`);n(c,u),m(g(w,{}),c,u);let d=i(`div`,r);n(r,d),h(d,`card bg-base-100 shadow`);let f=i(`div`,d);n(d,f),h(f,`card-body gap-4`);let p=i(`h3`,f);n(f,p),h(p,`text-xl font-semibold`),n(p,e(`深层消费`));let _=i(`p`,f);n(f,_),h(_,`text-sm text-base-content/70`),n(_,e(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=a(`rue:component:anchor`);return n(f,v),m(g(O,{}),f,v),t})}),r,f);let p=i(`div`,r);n(r,p),h(p,`card bg-base-100 shadow`);let _=i(`div`,p);n(p,_),h(_,`card-body gap-4`);let v=i(`h3`,_);n(_,v),h(v,`text-xl font-semibold`),n(v,e(`缺少 Provider 时回退默认值`));let y=i(`p`,_);n(_,y),h(y,`text-sm text-base-content/70`),n(y,e(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=i(`div`,_);n(_,b),h(b,`grid gap-4 lg:grid-cols-2`);let x=i(`div`,b);n(b,x),h(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=i(`div`,x);n(x,S),h(S,`mb-3 text-sm font-semibold`),n(S,e(`没有 Provider`));let E=a(`rue:component:anchor`);n(x,E),m(g(k,{}),x,E);let D=i(`div`,b);n(b,D),h(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=i(`div`,D);n(D,j),h(j,`mb-3 text-sm font-semibold`),n(j,e(`有 Provider`));let M=a(`rue:component:anchor`);return n(D,M),m(g(A,{}),D,M),r}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};