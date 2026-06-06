import{Et as e,G as t,H as n,J as r,K as i,V as a,W as o,_t as s,d as c,f as l,kt as u,l as d,p as f,q as p,st as m,t as h,tt as g,xt as _}from"./vapor-runtime-ACs_OvwU.js";import{a as v}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as y}from"./createHomeSplitExamplePage-DOBN78Vl.js";var b=l({count:v(`ref:1:0`,()=>s(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=l({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>f(b),C=r=>{let{count:i,increment:a,decrement:l,reset:f}=v(`useSetup:0:0`,()=>e(()=>{let e=v(`ref:1:1`,()=>s(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return c(e=>{let s=t(),c=o(`rue:component:anchor`);return n(s,c),u(()=>{let e=h(b.Provider,{value:{count:i,increment:a,decrement:l,reset:f},children:r.children});_(()=>d(e,s,c))}),s})},w=()=>{let{increment:t,decrement:r,reset:o}=v(`useSetup:0:0:dup1`,()=>e(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return c(e=>{let s=i(`div`,e);g(s,`flex flex-wrap gap-2`);let c=i(`button`,s);n(s,c),g(c,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),a(c,`click`,r),n(c,p(`-1`));let l=i(`button`,s);n(s,l),g(l,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),a(l,`click`,t),n(l,p(`+1`));let u=i(`button`,s);return n(s,u),g(u,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),a(u,`click`,o),n(u,p(`重置`)),s})},T=()=>{let{count:t}=v(`useSetup:0:0:dup2`,()=>e(()=>{let{count:e}=S();return{count:e}}));return c(e=>{let a=i(`div`,e);g(a,`rounded-2xl bg-base-200 p-4`);let o=i(`div`,a);n(a,o),g(o,`text-sm text-base-content/60`),n(o,p(`当前共享计数`));let s=i(`div`,a);n(a,s),g(s,`mt-2 text-5xl font-black tracking-tight`);let c=r(s);n(s,c),u(()=>{m(c,t.value)});let l=i(`div`,a);return n(a,l),g(l,`mt-2 text-sm text-base-content/70`),n(l,p(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),a})},E=()=>{let{count:t}=v(`useSetup:0:0:dup3`,()=>e(()=>{let{count:e}=S();return{count:e}}));return c(e=>{let a=i(`div`,e);g(a,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let o=i(`div`,a);n(a,o),g(o,`text-sm font-semibold`),n(o,p(`Deep Child`));let s=i(`p`,a);n(a,s),g(s,`mt-2 text-sm text-base-content/70`),n(s,p(`这里隔了多层包装组件，仍然能直接读取 Context。`));let c=i(`div`,a);n(a,c),g(c,`mt-3 text-lg font-semibold`),n(c,p(`深层读取结果：`));let l=r(c);return n(c,l),u(()=>{m(l,t.value)}),a})},D=()=>c(e=>{let r=t(),i=o(`rue:component:anchor`);return n(r,i),d(h(E,{}),r,i),r}),O=()=>c(e=>{let t=i(`div`,e);g(t,`rounded-2xl bg-base-200 p-4`);let r=i(`div`,t);n(t,r),g(r,`mb-3 text-sm text-base-content/60`),n(r,p(`中间层组件不接收任何 count props`));let a=o(`rue:component:anchor`);return n(t,a),d(h(D,{}),t,a),t}),k=()=>{let{theme:t}=v(`useSetup:0:0:dup4`,()=>e(()=>({theme:f(x)})));return c(e=>{let r=i(`div`,e);g(r,`rounded-2xl bg-base-200 p-4`);let a=i(`div`,r);n(r,a),g(a,`text-sm text-base-content/60`),n(a,p(`读取到的主题标签`));let s=i(`div`,r);n(r,s),g(s,`mt-3 flex flex-wrap items-center gap-3`);let c=i(`span`,s);n(s,c),u(()=>{g(c,String(t.toneClassName))});let l=o(`rue:slot:anchor`);n(c,l),u(()=>{let e=t.label;_(()=>d(e,c,l))});let f=i(`span`,s);n(s,f),g(f,`text-sm text-base-content/70`);let m=o(`rue:slot:anchor`);return n(f,m),u(()=>{let e=t.note;_(()=>d(e,f,m))}),r})},A=()=>c(e=>{let r=t(),i=o(`rue:component:anchor`);n(r,i);let a=h(k,{});return u(()=>{let e=h(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:a});_(()=>d(e,r,i))}),r}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>c(e=>{let r=i(`div`,e);g(r,`space-y-6`);let a=i(`div`,r);n(r,a),g(a,`card bg-base-100 shadow`);let s=i(`div`,a);n(a,s),g(s,`card-body gap-3`);let l=i(`h2`,s);n(s,l),g(l,`text-2xl font-semibold`),n(l,p(`Context Demo`));let u=i(`p`,s);n(s,u),g(u,`text-sm text-base-content/70`),n(u,p(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let f=o(`rue:component:anchor`);n(r,f),d(h(C,{children:c(()=>{let e=t(),r=i(`div`,e);n(e,r),g(r,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let a=i(`div`,r);n(r,a),g(a,`card bg-base-100 shadow`);let s=i(`div`,a);n(a,s),g(s,`card-body gap-4`);let c=o(`rue:component:anchor`);n(s,c),d(h(T,{}),s,c);let l=o(`rue:component:anchor`);n(s,l),d(h(w,{}),s,l);let u=i(`div`,r);n(r,u),g(u,`card bg-base-100 shadow`);let f=i(`div`,u);n(u,f),g(f,`card-body gap-4`);let m=i(`h3`,f);n(f,m),g(m,`text-xl font-semibold`),n(m,p(`深层消费`));let _=i(`p`,f);n(f,_),g(_,`text-sm text-base-content/70`),n(_,p(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=o(`rue:component:anchor`);return n(f,v),d(h(O,{}),f,v),e})}),r,f);let m=i(`div`,r);n(r,m),g(m,`card bg-base-100 shadow`);let _=i(`div`,m);n(m,_),g(_,`card-body gap-4`);let v=i(`h3`,_);n(_,v),g(v,`text-xl font-semibold`),n(v,p(`缺少 Provider 时回退默认值`));let y=i(`p`,_);n(_,y),g(y,`text-sm text-base-content/70`),n(y,p(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=i(`div`,_);n(_,b),g(b,`grid gap-4 lg:grid-cols-2`);let x=i(`div`,b);n(b,x),g(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=i(`div`,x);n(x,S),g(S,`mb-3 text-sm font-semibold`),n(S,p(`没有 Provider`));let E=o(`rue:component:anchor`);n(x,E),d(h(k,{}),x,E);let D=i(`div`,b);n(b,D),g(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=i(`div`,D);n(D,j),g(j,`mb-3 text-sm font-semibold`),n(j,p(`有 Provider`));let M=o(`rue:component:anchor`);return n(D,M),d(h(A,{}),D,M),r}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};