import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,f,l as p,mt as m,p as h,t as g,tt as _}from"./vapor-runtime-BR_2rwNk.js";import{a as v}from"./vapor-helpers-vapor-DkadWylb.js";import{t as y}from"./createHomeSplitExamplePage-CiJ5PqeY.js";var b=f({count:v(`ref:1:0`,()=>r(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=f({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>h(b),C=e=>{let{count:t,increment:l,decrement:d,reset:f}=v(`useSetup:0:0`,()=>n(()=>{let e=v(`ref:1:1`,()=>r(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return u(n=>{let r=i(),u=c(`rue:component:anchor`);return o(r,u),s(()=>{let n=g(b.Provider,{value:{count:t,increment:l,decrement:d,reset:f},children:e.children});a(()=>p(n,r,u))}),r})},w=()=>{let{increment:r,decrement:i,reset:a}=v(`useSetup:0:0:dup1`,()=>n(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return u(n=>{let s=e(`div`,n);l(s,`flex flex-wrap gap-2`);let c=e(`button`,s);o(s,c),l(c,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),t(c,`click`,i),o(c,d(`-1`));let u=e(`button`,s);o(s,u),l(u,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),t(u,`click`,r),o(u,d(`+1`));let f=e(`button`,s);return o(s,f),l(f,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),t(f,`click`,a),o(f,d(`重置`)),s})},T=()=>{let{count:t}=v(`useSetup:0:0:dup2`,()=>n(()=>{let{count:e}=S();return{count:e}}));return u(n=>{let r=e(`div`,n);l(r,`rounded-2xl bg-base-200 p-4`);let i=e(`div`,r);o(r,i),l(i,`text-sm text-base-content/60`),o(i,d(`当前共享计数`));let a=e(`div`,r);o(r,a),l(a,`mt-2 text-5xl font-black tracking-tight`);let c=_(a);o(a,c),s(()=>{m(c,t.value)});let u=e(`div`,r);return o(r,u),l(u,`mt-2 text-sm text-base-content/70`),o(u,d(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),r})},E=()=>{let{count:t}=v(`useSetup:0:0:dup3`,()=>n(()=>{let{count:e}=S();return{count:e}}));return u(n=>{let r=e(`div`,n);l(r,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let i=e(`div`,r);o(r,i),l(i,`text-sm font-semibold`),o(i,d(`Deep Child`));let a=e(`p`,r);o(r,a),l(a,`mt-2 text-sm text-base-content/70`),o(a,d(`这里隔了多层包装组件，仍然能直接读取 Context。`));let c=e(`div`,r);o(r,c),l(c,`mt-3 text-lg font-semibold`),o(c,d(`深层读取结果：`));let u=_(c);return o(c,u),s(()=>{m(u,t.value)}),r})},D=()=>u(e=>{let t=i(),n=c(`rue:component:anchor`);return o(t,n),p(g(E,{}),t,n),t}),O=()=>u(t=>{let n=e(`div`,t);l(n,`rounded-2xl bg-base-200 p-4`);let r=e(`div`,n);o(n,r),l(r,`mb-3 text-sm text-base-content/60`),o(r,d(`中间层组件不接收任何 count props`));let i=c(`rue:component:anchor`);return o(n,i),p(g(D,{}),n,i),n}),k=()=>{let{theme:t}=v(`useSetup:0:0:dup4`,()=>n(()=>({theme:h(x)})));return u(n=>{let r=e(`div`,n);l(r,`rounded-2xl bg-base-200 p-4`);let i=e(`div`,r);o(r,i),l(i,`text-sm text-base-content/60`),o(i,d(`读取到的主题标签`));let u=e(`div`,r);o(r,u),l(u,`mt-3 flex flex-wrap items-center gap-3`);let f=e(`span`,u);o(u,f),s(()=>{l(f,String(t.toneClassName))});let m=c(`rue:slot:anchor`);o(f,m),s(()=>{let e=t.label;a(()=>p(e,f,m))});let h=e(`span`,u);o(u,h),l(h,`text-sm text-base-content/70`);let g=c(`rue:slot:anchor`);return o(h,g),s(()=>{let e=t.note;a(()=>p(e,h,g))}),r})},A=()=>u(e=>{let t=i(),n=c(`rue:component:anchor`);o(t,n);let r=g(k,{});return s(()=>{let e=g(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:r});a(()=>p(e,t,n))}),t}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>u(t=>{let n=e(`div`,t);l(n,`space-y-6`);let r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body gap-3`);let s=e(`h2`,a);o(a,s),l(s,`text-2xl font-semibold`),o(s,d(`Context Demo`));let f=e(`p`,a);o(a,f),l(f,`text-sm text-base-content/70`),o(f,d(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let m=c(`rue:component:anchor`);o(n,m),p(g(C,{children:u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body gap-4`);let s=c(`rue:component:anchor`);o(a,s),p(g(T,{}),a,s);let u=c(`rue:component:anchor`);o(a,u),p(g(w,{}),a,u);let f=e(`div`,n);o(n,f),l(f,`card bg-base-100 shadow`);let m=e(`div`,f);o(f,m),l(m,`card-body gap-4`);let h=e(`h3`,m);o(m,h),l(h,`text-xl font-semibold`),o(h,d(`深层消费`));let _=e(`p`,m);o(m,_),l(_,`text-sm text-base-content/70`),o(_,d(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=c(`rue:component:anchor`);return o(m,v),p(g(O,{}),m,v),t})}),n,m);let h=e(`div`,n);o(n,h),l(h,`card bg-base-100 shadow`);let _=e(`div`,h);o(h,_),l(_,`card-body gap-4`);let v=e(`h3`,_);o(_,v),l(v,`text-xl font-semibold`),o(v,d(`缺少 Provider 时回退默认值`));let y=e(`p`,_);o(_,y),l(y,`text-sm text-base-content/70`),o(y,d(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=e(`div`,_);o(_,b),l(b,`grid gap-4 lg:grid-cols-2`);let x=e(`div`,b);o(b,x),l(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=e(`div`,x);o(x,S),l(S,`mb-3 text-sm font-semibold`),o(S,d(`没有 Provider`));let E=c(`rue:component:anchor`);o(x,E),p(g(k,{}),x,E);let D=e(`div`,b);o(b,D),l(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=e(`div`,D);o(D,j),l(j,`mb-3 text-sm font-semibold`),o(j,d(`有 Provider`));let M=c(`rue:component:anchor`);return o(D,M),p(g(A,{}),D,M),n}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};