import{Cn as e,Mt as t,Tt as n,a as r,dt as i,ft as a,ht as o,mt as s,n as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var b=c({count:v(`ref:1:0`,()=>u(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=c({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>r(b),C=t=>{let{count:n,increment:r,decrement:o,reset:s}=v(`useSetup:0:0`,()=>e(()=>{let e=v(`ref:1:1`,()=>u(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return h(e=>{let c=a(),l=i(`rue:component:anchor`);return f(c,l),p(()=>{let e=_(b.Provider,{value:{count:n,increment:r,decrement:o,reset:s},children:t.children});m(()=>g(e,c,l))}),c})},w=()=>{let{increment:t,decrement:r,reset:i}=v(`useSetup:0:0:dup1`,()=>e(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return h(e=>{let a=d(`div`,e);n(a,`flex flex-wrap gap-2`);let o=d(`button`,a);f(a,o),n(o,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),l(o,`click`,r),f(o,s(`-1`));let c=d(`button`,a);f(a,c),n(c,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),l(c,`click`,t),f(c,s(`+1`));let u=d(`button`,a);return f(a,u),n(u,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),l(u,`click`,i),f(u,s(`重置`)),a})},T=()=>{let{count:r}=v(`useSetup:0:0:dup2`,()=>e(()=>{let{count:e}=S();return{count:e}}));return h(e=>{let i=d(`div`,e);n(i,`rounded-2xl bg-base-200 p-4`);let a=d(`div`,i);f(i,a),n(a,`text-sm text-base-content/60`),f(a,s(`当前共享计数`));let c=d(`div`,i);f(i,c),n(c,`mt-2 text-5xl font-black tracking-tight`);let l=o(c);f(c,l),p(()=>{t(l,r.value)});let u=d(`div`,i);return f(i,u),n(u,`mt-2 text-sm text-base-content/70`),f(u,s(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),i})},E=()=>{let{count:r}=v(`useSetup:0:0:dup3`,()=>e(()=>{let{count:e}=S();return{count:e}}));return h(e=>{let i=d(`div`,e);n(i,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let a=d(`div`,i);f(i,a),n(a,`text-sm font-semibold`),f(a,s(`Deep Child`));let c=d(`p`,i);f(i,c),n(c,`mt-2 text-sm text-base-content/70`),f(c,s(`这里隔了多层包装组件，仍然能直接读取 Context。`));let l=d(`div`,i);f(i,l),n(l,`mt-3 text-lg font-semibold`),f(l,s(`深层读取结果：`));let u=o(l);return f(l,u),p(()=>{t(u,r.value)}),i})},D=()=>h(e=>{let t=a(),n=i(`rue:component:anchor`);return f(t,n),g(_(E,{}),t,n),t}),O=()=>h(e=>{let t=d(`div`,e);n(t,`rounded-2xl bg-base-200 p-4`);let r=d(`div`,t);f(t,r),n(r,`mb-3 text-sm text-base-content/60`),f(r,s(`中间层组件不接收任何 count props`));let a=i(`rue:component:anchor`);return f(t,a),g(_(D,{}),t,a),t}),k=()=>{let{theme:t}=v(`useSetup:0:0:dup4`,()=>e(()=>({theme:r(x)})));return h(e=>{let r=d(`div`,e);n(r,`rounded-2xl bg-base-200 p-4`);let a=d(`div`,r);f(r,a),n(a,`text-sm text-base-content/60`),f(a,s(`读取到的主题标签`));let o=d(`div`,r);f(r,o),n(o,`mt-3 flex flex-wrap items-center gap-3`);let c=d(`span`,o);f(o,c),p(()=>{n(c,t.toneClassName)});let l=i(`rue:slot:anchor`);f(c,l),p(()=>{let e=t.label;m(()=>g(e,c,l))});let u=d(`span`,o);f(o,u),n(u,`text-sm text-base-content/70`);let h=i(`rue:slot:anchor`);return f(u,h),p(()=>{let e=t.note;m(()=>g(e,u,h))}),r})},A=()=>h(e=>{let t=a(),n=i(`rue:component:anchor`);f(t,n);let r=_(k,{});return p(()=>{let e=_(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:r});m(()=>g(e,t,n))}),t}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>h(e=>{let t=d(`div`,e);n(t,`space-y-6`);let r=d(`div`,t);f(t,r),n(r,`card bg-base-100 shadow`);let o=d(`div`,r);f(r,o),n(o,`card-body gap-3`);let c=d(`h2`,o);f(o,c),n(c,`text-2xl font-semibold`),f(c,s(`Context Demo`));let l=d(`p`,o);f(o,l),n(l,`text-sm text-base-content/70`),f(l,s(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let u=i(`rue:component:anchor`);f(t,u),g(_(C,{children:h(()=>{let e=a(),t=d(`div`,e);f(e,t),n(t,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let r=d(`div`,t);f(t,r),n(r,`card bg-base-100 shadow`);let o=d(`div`,r);f(r,o),n(o,`card-body gap-4`);let c=i(`rue:component:anchor`);f(o,c),g(_(T,{}),o,c);let l=i(`rue:component:anchor`);f(o,l),g(_(w,{}),o,l);let u=d(`div`,t);f(t,u),n(u,`card bg-base-100 shadow`);let p=d(`div`,u);f(u,p),n(p,`card-body gap-4`);let m=d(`h3`,p);f(p,m),n(m,`text-xl font-semibold`),f(m,s(`深层消费`));let h=d(`p`,p);f(p,h),n(h,`text-sm text-base-content/70`),f(h,s(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=i(`rue:component:anchor`);return f(p,v),g(_(O,{}),p,v),e})}),t,u);let p=d(`div`,t);f(t,p),n(p,`card bg-base-100 shadow`);let m=d(`div`,p);f(p,m),n(m,`card-body gap-4`);let v=d(`h3`,m);f(m,v),n(v,`text-xl font-semibold`),f(v,s(`缺少 Provider 时回退默认值`));let y=d(`p`,m);f(m,y),n(y,`text-sm text-base-content/70`),f(y,s(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=d(`div`,m);f(m,b),n(b,`grid gap-4 lg:grid-cols-2`);let x=d(`div`,b);f(b,x),n(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=d(`div`,x);f(x,S),n(S,`mb-3 text-sm font-semibold`),f(S,s(`没有 Provider`));let E=i(`rue:component:anchor`);f(x,E),g(_(k,{}),x,E);let D=d(`div`,b);f(b,D),n(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=d(`div`,D);f(D,j),n(j,`mb-3 text-sm font-semibold`),f(j,s(`有 Provider`));let M=i(`rue:component:anchor`);return f(D,M),g(_(A,{}),D,M),t}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};