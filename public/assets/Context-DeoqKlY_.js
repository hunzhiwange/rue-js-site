import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,qt as p,s as m,t as h,tt as g,u as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as y}from"./createHomeSplitExamplePage-CJbW_xoB.js";var b=_({count:v(`ref:1:0`,()=>i(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=_({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>l(b),C=e=>{let{count:n,increment:c,decrement:l,reset:u}=v(`useSetup:0:0`,()=>p(()=>{let e=v(`ref:1:1`,()=>i(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return d(i=>{let d=r(),f=s(`rue:component:anchor`);return o(d,f),a(()=>{let r=h(b.Provider,{value:{count:n,increment:c,decrement:l,reset:u},children:e.children});t(()=>m(r,d,f))}),d})},w=()=>{let{increment:t,decrement:r,reset:i}=v(`useSetup:0:0:dup1`,()=>p(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return d(a=>{let s=e(`div`,a);c(s,`flex flex-wrap gap-2`);let l=e(`button`,s);o(s,l),c(l,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),n(l,`click`,r),o(l,u(`-1`));let d=e(`button`,s);o(s,d),c(d,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),n(d,`click`,t),o(d,u(`+1`));let f=e(`button`,s);return o(s,f),c(f,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),n(f,`click`,i),o(f,u(`重置`)),s})},T=()=>{let{count:t}=v(`useSetup:0:0:dup2`,()=>p(()=>{let{count:e}=S();return{count:e}}));return d(n=>{let r=e(`div`,n);c(r,`rounded-2xl bg-base-200 p-4`);let i=e(`div`,r);o(r,i),c(i,`text-sm text-base-content/60`),o(i,u(`当前共享计数`));let s=e(`div`,r);o(r,s),c(s,`mt-2 text-5xl font-black tracking-tight`);let l=g(s);o(s,l),a(()=>{f(l,t.value)});let d=e(`div`,r);return o(r,d),c(d,`mt-2 text-sm text-base-content/70`),o(d,u(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),r})},E=()=>{let{count:t}=v(`useSetup:0:0:dup3`,()=>p(()=>{let{count:e}=S();return{count:e}}));return d(n=>{let r=e(`div`,n);c(r,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let i=e(`div`,r);o(r,i),c(i,`text-sm font-semibold`),o(i,u(`Deep Child`));let s=e(`p`,r);o(r,s),c(s,`mt-2 text-sm text-base-content/70`),o(s,u(`这里隔了多层包装组件，仍然能直接读取 Context。`));let l=e(`div`,r);o(r,l),c(l,`mt-3 text-lg font-semibold`),o(l,u(`深层读取结果：`));let d=g(l);return o(l,d),a(()=>{f(d,t.value)}),r})},D=()=>d(e=>{let t=r(),n=s(`rue:component:anchor`);return o(t,n),m(h(E,{}),t,n),t}),O=()=>d(t=>{let n=e(`div`,t);c(n,`rounded-2xl bg-base-200 p-4`);let r=e(`div`,n);o(n,r),c(r,`mb-3 text-sm text-base-content/60`),o(r,u(`中间层组件不接收任何 count props`));let i=s(`rue:component:anchor`);return o(n,i),m(h(D,{}),n,i),n}),k=()=>{let{theme:n}=v(`useSetup:0:0:dup4`,()=>p(()=>({theme:l(x)})));return d(r=>{let i=e(`div`,r);c(i,`rounded-2xl bg-base-200 p-4`);let l=e(`div`,i);o(i,l),c(l,`text-sm text-base-content/60`),o(l,u(`读取到的主题标签`));let d=e(`div`,i);o(i,d),c(d,`mt-3 flex flex-wrap items-center gap-3`);let f=e(`span`,d);o(d,f),a(()=>{c(f,String(n.toneClassName))});let p=s(`rue:slot:anchor`);o(f,p),a(()=>{let e=n.label;t(()=>m(e,f,p))});let h=e(`span`,d);o(d,h),c(h,`text-sm text-base-content/70`);let g=s(`rue:slot:anchor`);return o(h,g),a(()=>{let e=n.note;t(()=>m(e,h,g))}),i})},A=()=>d(e=>{let n=r(),i=s(`rue:component:anchor`);o(n,i);let c=h(k,{});return a(()=>{let e=h(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:c});t(()=>m(e,n,i))}),n}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>d(t=>{let n=e(`div`,t);c(n,`space-y-6`);let i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow`);let a=e(`div`,i);o(i,a),c(a,`card-body gap-3`);let l=e(`h2`,a);o(a,l),c(l,`text-2xl font-semibold`),o(l,u(`Context Demo`));let f=e(`p`,a);o(a,f),c(f,`text-sm text-base-content/70`),o(f,u(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let p=s(`rue:component:anchor`);o(n,p),m(h(C,{children:d(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow`);let a=e(`div`,i);o(i,a),c(a,`card-body gap-4`);let l=s(`rue:component:anchor`);o(a,l),m(h(T,{}),a,l);let d=s(`rue:component:anchor`);o(a,d),m(h(w,{}),a,d);let f=e(`div`,n);o(n,f),c(f,`card bg-base-100 shadow`);let p=e(`div`,f);o(f,p),c(p,`card-body gap-4`);let g=e(`h3`,p);o(p,g),c(g,`text-xl font-semibold`),o(g,u(`深层消费`));let _=e(`p`,p);o(p,_),c(_,`text-sm text-base-content/70`),o(_,u(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=s(`rue:component:anchor`);return o(p,v),m(h(O,{}),p,v),t})}),n,p);let g=e(`div`,n);o(n,g),c(g,`card bg-base-100 shadow`);let _=e(`div`,g);o(g,_),c(_,`card-body gap-4`);let v=e(`h3`,_);o(_,v),c(v,`text-xl font-semibold`),o(v,u(`缺少 Provider 时回退默认值`));let y=e(`p`,_);o(_,y),c(y,`text-sm text-base-content/70`),o(y,u(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=e(`div`,_);o(_,b),c(b,`grid gap-4 lg:grid-cols-2`);let x=e(`div`,b);o(b,x),c(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=e(`div`,x);o(x,S),c(S,`mb-3 text-sm font-semibold`),o(S,u(`没有 Provider`));let E=s(`rue:component:anchor`);o(x,E),m(h(k,{}),x,E);let D=e(`div`,b);o(b,D),c(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=e(`div`,D);o(D,j),c(j,`mb-3 text-sm font-semibold`),o(j,u(`有 Provider`));let M=s(`rue:component:anchor`);return o(D,M),m(h(A,{}),D,M),n}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};