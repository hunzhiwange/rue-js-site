import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,d as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,u as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./createHomeSplitExamplePage-Q644r2Bq.js";var b=g({count:v(`ref:1:0`,()=>n(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=g({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>s(b),C=i=>{let{count:s,increment:l,decrement:d,reset:p}=v(`useSetup:0:0`,()=>a(()=>{let e=v(`ref:1:1`,()=>n(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return u(n=>{let a=c(),u=e(`rue:component:anchor`);return o(a,u),t(()=>{let e=m(b.Provider,{value:{count:s,increment:l,decrement:d,reset:p},children:i.children});r(()=>f(e,a,u))}),a})},w=()=>{let{increment:e,decrement:t,reset:n}=v(`useSetup:0:0:dup1`,()=>a(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return u(r=>{let a=h(`div`,r);_(a,`flex flex-wrap gap-2`);let s=h(`button`,a);o(a,s),_(s,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),i(s,`click`,t),o(s,d(`-1`));let c=h(`button`,a);o(a,c),_(c,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),i(c,`click`,e),o(c,d(`+1`));let l=h(`button`,a);return o(a,l),_(l,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),i(l,`click`,n),o(l,d(`重置`)),a})},T=()=>{let{count:e}=v(`useSetup:0:0:dup2`,()=>a(()=>{let{count:e}=S();return{count:e}}));return u(n=>{let r=h(`div`,n);_(r,`rounded-2xl bg-base-200 p-4`);let i=h(`div`,r);o(r,i),_(i,`text-sm text-base-content/60`),o(i,d(`当前共享计数`));let a=h(`div`,r);o(r,a),_(a,`mt-2 text-5xl font-black tracking-tight`);let s=p(a);o(a,s),t(()=>{l(s,e.value)});let c=h(`div`,r);return o(r,c),_(c,`mt-2 text-sm text-base-content/70`),o(c,d(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),r})},E=()=>{let{count:e}=v(`useSetup:0:0:dup3`,()=>a(()=>{let{count:e}=S();return{count:e}}));return u(n=>{let r=h(`div`,n);_(r,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let i=h(`div`,r);o(r,i),_(i,`text-sm font-semibold`),o(i,d(`Deep Child`));let a=h(`p`,r);o(r,a),_(a,`mt-2 text-sm text-base-content/70`),o(a,d(`这里隔了多层包装组件，仍然能直接读取 Context。`));let s=h(`div`,r);o(r,s),_(s,`mt-3 text-lg font-semibold`),o(s,d(`深层读取结果：`));let c=p(s);return o(s,c),t(()=>{l(c,e.value)}),r})},D=()=>u(t=>{let n=c(),r=e(`rue:component:anchor`);return o(n,r),f(m(E,{}),n,r),n}),O=()=>u(t=>{let n=h(`div`,t);_(n,`rounded-2xl bg-base-200 p-4`);let r=h(`div`,n);o(n,r),_(r,`mb-3 text-sm text-base-content/60`),o(r,d(`中间层组件不接收任何 count props`));let i=e(`rue:component:anchor`);return o(n,i),f(m(D,{}),n,i),n}),k=()=>{let{theme:n}=v(`useSetup:0:0:dup4`,()=>a(()=>({theme:s(x)})));return u(i=>{let a=h(`div`,i);_(a,`rounded-2xl bg-base-200 p-4`);let s=h(`div`,a);o(a,s),_(s,`text-sm text-base-content/60`),o(s,d(`读取到的主题标签`));let c=h(`div`,a);o(a,c),_(c,`mt-3 flex flex-wrap items-center gap-3`);let l=h(`span`,c);o(c,l),t(()=>{_(l,n.toneClassName)});let u=e(`rue:slot:anchor`);o(l,u),t(()=>{let e=n.label;r(()=>f(e,l,u))});let p=h(`span`,c);o(c,p),_(p,`text-sm text-base-content/70`);let m=e(`rue:slot:anchor`);return o(p,m),t(()=>{let e=n.note;r(()=>f(e,p,m))}),a})},A=()=>u(n=>{let i=c(),a=e(`rue:component:anchor`);o(i,a);let s=m(k,{});return t(()=>{let e=m(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:s});r(()=>f(e,i,a))}),i}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>u(t=>{let n=h(`div`,t);_(n,`space-y-6`);let r=h(`div`,n);o(n,r),_(r,`card bg-base-100 shadow`);let i=h(`div`,r);o(r,i),_(i,`card-body gap-3`);let a=h(`h2`,i);o(i,a),_(a,`text-2xl font-semibold`),o(a,d(`Context Demo`));let s=h(`p`,i);o(i,s),_(s,`text-sm text-base-content/70`),o(s,d(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let l=e(`rue:component:anchor`);o(n,l),f(m(C,{children:u(()=>{let t=c(),n=h(`div`,t);o(t,n),_(n,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let r=h(`div`,n);o(n,r),_(r,`card bg-base-100 shadow`);let i=h(`div`,r);o(r,i),_(i,`card-body gap-4`);let a=e(`rue:component:anchor`);o(i,a),f(m(T,{}),i,a);let s=e(`rue:component:anchor`);o(i,s),f(m(w,{}),i,s);let l=h(`div`,n);o(n,l),_(l,`card bg-base-100 shadow`);let u=h(`div`,l);o(l,u),_(u,`card-body gap-4`);let p=h(`h3`,u);o(u,p),_(p,`text-xl font-semibold`),o(p,d(`深层消费`));let g=h(`p`,u);o(u,g),_(g,`text-sm text-base-content/70`),o(g,d(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=e(`rue:component:anchor`);return o(u,v),f(m(O,{}),u,v),t})}),n,l);let p=h(`div`,n);o(n,p),_(p,`card bg-base-100 shadow`);let g=h(`div`,p);o(p,g),_(g,`card-body gap-4`);let v=h(`h3`,g);o(g,v),_(v,`text-xl font-semibold`),o(v,d(`缺少 Provider 时回退默认值`));let y=h(`p`,g);o(g,y),_(y,`text-sm text-base-content/70`),o(y,d(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=h(`div`,g);o(g,b),_(b,`grid gap-4 lg:grid-cols-2`);let x=h(`div`,b);o(b,x),_(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=h(`div`,x);o(x,S),_(S,`mb-3 text-sm font-semibold`),o(S,d(`没有 Provider`));let E=e(`rue:component:anchor`);o(x,E),f(m(k,{}),x,E);let D=h(`div`,b);o(b,D),_(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=h(`div`,D);o(D,j),_(j,`mb-3 text-sm font-semibold`),o(j,d(`有 Provider`));let M=e(`rue:component:anchor`);return o(D,M),f(m(A,{}),D,M),n}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};