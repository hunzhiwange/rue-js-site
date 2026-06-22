import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,f as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,u as _}from"./vapor-runtime-x7F5M-49.js";import{a as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./createHomeSplitExamplePage-DbTgvnwJ.js";var b=_({count:v(`ref:1:0`,()=>n(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=_({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>o(b),C=r=>{let{count:i,increment:a,decrement:o,reset:s}=v(`useSetup:0:0`,()=>d(()=>{let e=v(`ref:1:1`,()=>n(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return c(n=>{let c=l(),d=g(`rue:component:anchor`);return e(c,d),t(()=>{let e=m(b.Provider,{value:{count:i,increment:a,decrement:o,reset:s},children:r.children});h(()=>u(e,c,d))}),c})},w=()=>{let{increment:t,decrement:n,reset:i}=v(`useSetup:0:0:dup1`,()=>d(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return c(a=>{let o=p(`div`,a);f(o,`flex flex-wrap gap-2`);let c=p(`button`,o);e(o,c),f(c,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),r(c,`click`,n),e(c,s(`-1`));let l=p(`button`,o);e(o,l),f(l,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),r(l,`click`,t),e(l,s(`+1`));let u=p(`button`,o);return e(o,u),f(u,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),r(u,`click`,i),e(u,s(`重置`)),o})},T=()=>{let{count:n}=v(`useSetup:0:0:dup2`,()=>d(()=>{let{count:e}=S();return{count:e}}));return c(r=>{let o=p(`div`,r);f(o,`rounded-2xl bg-base-200 p-4`);let c=p(`div`,o);e(o,c),f(c,`text-sm text-base-content/60`),e(c,s(`当前共享计数`));let l=p(`div`,o);e(o,l),f(l,`mt-2 text-5xl font-black tracking-tight`);let u=i(l);e(l,u),t(()=>{a(u,n.value)});let d=p(`div`,o);return e(o,d),f(d,`mt-2 text-sm text-base-content/70`),e(d,s(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),o})},E=()=>{let{count:n}=v(`useSetup:0:0:dup3`,()=>d(()=>{let{count:e}=S();return{count:e}}));return c(r=>{let o=p(`div`,r);f(o,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let c=p(`div`,o);e(o,c),f(c,`text-sm font-semibold`),e(c,s(`Deep Child`));let l=p(`p`,o);e(o,l),f(l,`mt-2 text-sm text-base-content/70`),e(l,s(`这里隔了多层包装组件，仍然能直接读取 Context。`));let u=p(`div`,o);e(o,u),f(u,`mt-3 text-lg font-semibold`),e(u,s(`深层读取结果：`));let d=i(u);return e(u,d),t(()=>{a(d,n.value)}),o})},D=()=>c(t=>{let n=l(),r=g(`rue:component:anchor`);return e(n,r),u(m(E,{}),n,r),n}),O=()=>c(t=>{let n=p(`div`,t);f(n,`rounded-2xl bg-base-200 p-4`);let r=p(`div`,n);e(n,r),f(r,`mb-3 text-sm text-base-content/60`),e(r,s(`中间层组件不接收任何 count props`));let i=g(`rue:component:anchor`);return e(n,i),u(m(D,{}),n,i),n}),k=()=>{let{theme:n}=v(`useSetup:0:0:dup4`,()=>d(()=>({theme:o(x)})));return c(r=>{let i=p(`div`,r);f(i,`rounded-2xl bg-base-200 p-4`);let a=p(`div`,i);e(i,a),f(a,`text-sm text-base-content/60`),e(a,s(`读取到的主题标签`));let o=p(`div`,i);e(i,o),f(o,`mt-3 flex flex-wrap items-center gap-3`);let c=p(`span`,o);e(o,c),t(()=>{f(c,n.toneClassName)});let l=g(`rue:slot:anchor`);e(c,l),t(()=>{let e=n.label;h(()=>u(e,c,l))});let d=p(`span`,o);e(o,d),f(d,`text-sm text-base-content/70`);let m=g(`rue:slot:anchor`);return e(d,m),t(()=>{let e=n.note;h(()=>u(e,d,m))}),i})},A=()=>c(n=>{let r=l(),i=g(`rue:component:anchor`);e(r,i);let a=m(k,{});return t(()=>{let e=m(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:a});h(()=>u(e,r,i))}),r}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>c(t=>{let n=p(`div`,t);f(n,`space-y-6`);let r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow`);let i=p(`div`,r);e(r,i),f(i,`card-body gap-3`);let a=p(`h2`,i);e(i,a),f(a,`text-2xl font-semibold`),e(a,s(`Context Demo`));let o=p(`p`,i);e(i,o),f(o,`text-sm text-base-content/70`),e(o,s(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let d=g(`rue:component:anchor`);e(n,d),u(m(C,{children:c(()=>{let t=l(),n=p(`div`,t);e(t,n),f(n,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow`);let i=p(`div`,r);e(r,i),f(i,`card-body gap-4`);let a=g(`rue:component:anchor`);e(i,a),u(m(T,{}),i,a);let o=g(`rue:component:anchor`);e(i,o),u(m(w,{}),i,o);let c=p(`div`,n);e(n,c),f(c,`card bg-base-100 shadow`);let d=p(`div`,c);e(c,d),f(d,`card-body gap-4`);let h=p(`h3`,d);e(d,h),f(h,`text-xl font-semibold`),e(h,s(`深层消费`));let _=p(`p`,d);e(d,_),f(_,`text-sm text-base-content/70`),e(_,s(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=g(`rue:component:anchor`);return e(d,v),u(m(O,{}),d,v),t})}),n,d);let h=p(`div`,n);e(n,h),f(h,`card bg-base-100 shadow`);let _=p(`div`,h);e(h,_),f(_,`card-body gap-4`);let v=p(`h3`,_);e(_,v),f(v,`text-xl font-semibold`),e(v,s(`缺少 Provider 时回退默认值`));let y=p(`p`,_);e(_,y),f(y,`text-sm text-base-content/70`),e(y,s(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=p(`div`,_);e(_,b),f(b,`grid gap-4 lg:grid-cols-2`);let x=p(`div`,b);e(b,x),f(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=p(`div`,x);e(x,S),f(S,`mb-3 text-sm font-semibold`),e(S,s(`没有 Provider`));let E=g(`rue:component:anchor`);e(x,E),u(m(k,{}),x,E);let D=p(`div`,b);e(b,D),f(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=p(`div`,D);e(D,j),f(j,`mb-3 text-sm font-semibold`),e(j,s(`有 Provider`));let M=g(`rue:component:anchor`);return e(D,M),u(m(A,{}),D,M),n}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};