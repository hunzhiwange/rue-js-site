import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,at as c,d as l,ht as u,l as d,s as f,t as p,u as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./createHomeSplitExamplePage-BftZ6-s2.js";var b=m({count:v(`ref:1:0`,()=>u(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=m({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>l(b),C=e=>{let{count:r,increment:a,decrement:s,reset:c}=v(`useSetup:0:0`,()=>h(()=>{let e=v(`ref:1:1`,()=>u(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return d(l=>{let u=o(),d=i(`rue:component:anchor`);return t(u,d),n(()=>{let t=p(b.Provider,{value:{count:r,increment:a,decrement:s,reset:c},children:e.children});g(()=>f(t,u,d))}),u})},w=()=>{let{increment:n,decrement:i,reset:a}=v(`useSetup:0:0:dup1`,()=>h(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return d(o=>{let c=s(`div`,o);e(c,`flex flex-wrap gap-2`);let l=s(`button`,c);t(c,l),e(l,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),_(l,`click`,i),t(l,r(`-1`));let u=s(`button`,c);t(c,u),e(u,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),_(u,`click`,n),t(u,r(`+1`));let d=s(`button`,c);return t(c,d),e(d,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),_(d,`click`,a),t(d,r(`重置`)),c})},T=()=>{let{count:i}=v(`useSetup:0:0:dup2`,()=>h(()=>{let{count:e}=S();return{count:e}}));return d(o=>{let l=s(`div`,o);e(l,`rounded-2xl bg-base-200 p-4`);let u=s(`div`,l);t(l,u),e(u,`text-sm text-base-content/60`),t(u,r(`当前共享计数`));let d=s(`div`,l);t(l,d),e(d,`mt-2 text-5xl font-black tracking-tight`);let f=a(d);t(d,f),n(()=>{c(f,i.value)});let p=s(`div`,l);return t(l,p),e(p,`mt-2 text-sm text-base-content/70`),t(p,r(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),l})},E=()=>{let{count:i}=v(`useSetup:0:0:dup3`,()=>h(()=>{let{count:e}=S();return{count:e}}));return d(o=>{let l=s(`div`,o);e(l,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let u=s(`div`,l);t(l,u),e(u,`text-sm font-semibold`),t(u,r(`Deep Child`));let d=s(`p`,l);t(l,d),e(d,`mt-2 text-sm text-base-content/70`),t(d,r(`这里隔了多层包装组件，仍然能直接读取 Context。`));let f=s(`div`,l);t(l,f),e(f,`mt-3 text-lg font-semibold`),t(f,r(`深层读取结果：`));let p=a(f);return t(f,p),n(()=>{c(p,i.value)}),l})},D=()=>d(e=>{let n=o(),r=i(`rue:component:anchor`);return t(n,r),f(p(E,{}),n,r),n}),O=()=>d(n=>{let a=s(`div`,n);e(a,`rounded-2xl bg-base-200 p-4`);let o=s(`div`,a);t(a,o),e(o,`mb-3 text-sm text-base-content/60`),t(o,r(`中间层组件不接收任何 count props`));let c=i(`rue:component:anchor`);return t(a,c),f(p(D,{}),a,c),a}),k=()=>{let{theme:a}=v(`useSetup:0:0:dup4`,()=>h(()=>({theme:l(x)})));return d(o=>{let c=s(`div`,o);e(c,`rounded-2xl bg-base-200 p-4`);let l=s(`div`,c);t(c,l),e(l,`text-sm text-base-content/60`),t(l,r(`读取到的主题标签`));let u=s(`div`,c);t(c,u),e(u,`mt-3 flex flex-wrap items-center gap-3`);let d=s(`span`,u);t(u,d),n(()=>{e(d,String(a.toneClassName))});let p=i(`rue:slot:anchor`);t(d,p),n(()=>{let e=a.label;g(()=>f(e,d,p))});let m=s(`span`,u);t(u,m),e(m,`text-sm text-base-content/70`);let h=i(`rue:slot:anchor`);return t(m,h),n(()=>{let e=a.note;g(()=>f(e,m,h))}),c})},A=()=>d(e=>{let r=o(),a=i(`rue:component:anchor`);t(r,a);let s=p(k,{});return n(()=>{let e=p(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:s});g(()=>f(e,r,a))}),r}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>d(n=>{let a=s(`div`,n);e(a,`space-y-6`);let c=s(`div`,a);t(a,c),e(c,`card bg-base-100 shadow`);let l=s(`div`,c);t(c,l),e(l,`card-body gap-3`);let u=s(`h2`,l);t(l,u),e(u,`text-2xl font-semibold`),t(u,r(`Context Demo`));let m=s(`p`,l);t(l,m),e(m,`text-sm text-base-content/70`),t(m,r(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let h=i(`rue:component:anchor`);t(a,h),f(p(C,{children:d(()=>{let n=o(),a=s(`div`,n);t(n,a),e(a,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let c=s(`div`,a);t(a,c),e(c,`card bg-base-100 shadow`);let l=s(`div`,c);t(c,l),e(l,`card-body gap-4`);let u=i(`rue:component:anchor`);t(l,u),f(p(T,{}),l,u);let d=i(`rue:component:anchor`);t(l,d),f(p(w,{}),l,d);let m=s(`div`,a);t(a,m),e(m,`card bg-base-100 shadow`);let h=s(`div`,m);t(m,h),e(h,`card-body gap-4`);let g=s(`h3`,h);t(h,g),e(g,`text-xl font-semibold`),t(g,r(`深层消费`));let _=s(`p`,h);t(h,_),e(_,`text-sm text-base-content/70`),t(_,r(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=i(`rue:component:anchor`);return t(h,v),f(p(O,{}),h,v),n})}),a,h);let g=s(`div`,a);t(a,g),e(g,`card bg-base-100 shadow`);let _=s(`div`,g);t(g,_),e(_,`card-body gap-4`);let v=s(`h3`,_);t(_,v),e(v,`text-xl font-semibold`),t(v,r(`缺少 Provider 时回退默认值`));let y=s(`p`,_);t(_,y),e(y,`text-sm text-base-content/70`),t(y,r(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=s(`div`,_);t(_,b),e(b,`grid gap-4 lg:grid-cols-2`);let x=s(`div`,b);t(b,x),e(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=s(`div`,x);t(x,S),e(S,`mb-3 text-sm font-semibold`),t(S,r(`没有 Provider`));let E=i(`rue:component:anchor`);t(x,E),f(p(k,{}),x,E);let D=s(`div`,b);t(b,D),e(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=s(`div`,D);t(D,j),e(j,`mb-3 text-sm font-semibold`),t(j,r(`有 Provider`));let M=i(`rue:component:anchor`);return t(D,M),f(p(A,{}),D,M),a}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};