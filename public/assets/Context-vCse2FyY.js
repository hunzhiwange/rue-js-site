import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,f as o,in as s,it as c,l,nt as u,o as d,rt as f,t as p,tt as m,u as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var b=h({count:v(`ref:1:0`,()=>t(1)),increment:()=>{},decrement:()=>{},reset:()=>{}}),x=h({label:`默认主题（来自 createContext 默认值）`,toneClassName:`badge badge-neutral`,note:`当前组件没有被任何 ThemeContext.Provider 包裹。`}),S=()=>o(b),C=r=>{let{count:i,increment:o,decrement:c,reset:u}=v(`useSetup:0:0`,()=>s(()=>{let e=v(`ref:1:1`,()=>t(1));return{count:e,increment:()=>{e.value+=1},decrement:()=>{--e.value},reset:()=>{e.value=1}}}));return l(t=>{let s=m(),l=a(`rue:component:anchor`);return n(s,l),_(()=>{let t=p(b.Provider,{value:{count:i,increment:o,decrement:c,reset:u},children:r.children});e(()=>d(t,s,l))}),s})},w=()=>{let{increment:e,decrement:t,reset:a}=v(`useSetup:0:0:dup1`,()=>s(()=>{let{increment:e,decrement:t,reset:n}=S();return{increment:e,decrement:t,reset:n}}));return l(o=>{let s=u(`div`,o);i(s,`flex flex-wrap gap-2`);let c=u(`button`,s);n(s,c),i(c,`rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700`),r(c,`click`,t),n(c,f(`-1`));let l=u(`button`,s);n(s,l),i(l,`rounded-lg border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-emerald-700 hover:bg-emerald-700`),r(l,`click`,e),n(l,f(`+1`));let d=u(`button`,s);return n(s,d),i(d,`rounded-lg border border-slate-700 bg-slate-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:border-slate-900 hover:bg-slate-900`),r(d,`click`,a),n(d,f(`重置`)),s})},T=()=>{let{count:e}=v(`useSetup:0:0:dup2`,()=>s(()=>{let{count:e}=S();return{count:e}}));return l(t=>{let r=u(`div`,t);i(r,`rounded-2xl bg-base-200 p-4`);let a=u(`div`,r);n(r,a),i(a,`text-sm text-base-content/60`),n(a,f(`当前共享计数`));let o=u(`div`,r);n(r,o),i(o,`mt-2 text-5xl font-black tracking-tight`);let s=c(o);n(o,s),_(()=>{g(s,e.value)});let l=u(`div`,r);return n(r,l),i(l,`mt-2 text-sm text-base-content/70`),n(l,f(`这个数字由多个后代组件共同消费，但没有经过逐层 props 透传。`)),r})},E=()=>{let{count:e}=v(`useSetup:0:0:dup3`,()=>s(()=>{let{count:e}=S();return{count:e}}));return l(t=>{let r=u(`div`,t);i(r,`rounded-xl border border-dashed border-base-300 bg-base-100 p-4`);let a=u(`div`,r);n(r,a),i(a,`text-sm font-semibold`),n(a,f(`Deep Child`));let o=u(`p`,r);n(r,o),i(o,`mt-2 text-sm text-base-content/70`),n(o,f(`这里隔了多层包装组件，仍然能直接读取 Context。`));let s=u(`div`,r);n(r,s),i(s,`mt-3 text-lg font-semibold`),n(s,f(`深层读取结果：`));let l=c(s);return n(s,l),_(()=>{g(l,e.value)}),r})},D=()=>l(e=>{let t=m(),r=a(`rue:component:anchor`);return n(t,r),d(p(E,{}),t,r),t}),O=()=>l(e=>{let t=u(`div`,e);i(t,`rounded-2xl bg-base-200 p-4`);let r=u(`div`,t);n(t,r),i(r,`mb-3 text-sm text-base-content/60`),n(r,f(`中间层组件不接收任何 count props`));let o=a(`rue:component:anchor`);return n(t,o),d(p(D,{}),t,o),t}),k=()=>{let{theme:t}=v(`useSetup:0:0:dup4`,()=>s(()=>({theme:o(x)})));return l(r=>{let o=u(`div`,r);i(o,`rounded-2xl bg-base-200 p-4`);let s=u(`div`,o);n(o,s),i(s,`text-sm text-base-content/60`),n(s,f(`读取到的主题标签`));let c=u(`div`,o);n(o,c),i(c,`mt-3 flex flex-wrap items-center gap-3`);let l=u(`span`,c);n(c,l),_(()=>{i(l,t.toneClassName)});let p=a(`rue:slot:anchor`);n(l,p),_(()=>{let n=t.label;e(()=>d(n,l,p))});let m=u(`span`,c);n(c,m),i(m,`text-sm text-base-content/70`);let h=a(`rue:slot:anchor`);return n(m,h),_(()=>{let n=t.note;e(()=>d(n,m,h))}),o})},A=()=>l(t=>{let r=m(),i=a(`rue:component:anchor`);n(r,i);let o=p(k,{});return _(()=>{let t=p(x.Provider,{value:{label:`暖阳主题（来自 Provider）`,toneClassName:`badge badge-warning`,note:`这里被 ThemeContext.Provider 显式包裹。`},children:o});e(()=>d(t,r,i))}),r}),j=y({title:`Context（移植自 SolidJS）`,source:`import { createContext, type FC, ref, useContext } from '@rue-js/rue'

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
`,Demo:()=>l(e=>{let t=u(`div`,e);i(t,`space-y-6`);let r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-3`);let s=u(`h2`,o);n(o,s),i(s,`text-2xl font-semibold`),n(s,f(`Context Demo`));let c=u(`p`,o);n(o,c),i(c,`text-sm text-base-content/70`),n(c,f(`此示例按 SolidJS 文档中的 Context Demo 移植到 Rue，展示如何用 createContext、Provider 和 useContext 避免 prop drilling。`));let h=a(`rue:component:anchor`);n(t,h),d(p(C,{children:l(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`grid gap-4 lg:grid-cols-[1.1fr_0.9fr]`);let r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-4`);let s=a(`rue:component:anchor`);n(o,s),d(p(T,{}),o,s);let c=a(`rue:component:anchor`);n(o,c),d(p(w,{}),o,c);let l=u(`div`,t);n(t,l),i(l,`card bg-base-100 shadow`);let h=u(`div`,l);n(l,h),i(h,`card-body gap-4`);let g=u(`h3`,h);n(h,g),i(g,`text-xl font-semibold`),n(g,f(`深层消费`));let _=u(`p`,h);n(h,_),i(_,`text-sm text-base-content/70`),n(_,f(`右侧这棵子树里没有任何组件接收 count 或操作函数作为 props。`));let v=a(`rue:component:anchor`);return n(h,v),d(p(O,{}),h,v),e})}),t,h);let g=u(`div`,t);n(t,g),i(g,`card bg-base-100 shadow`);let _=u(`div`,g);n(g,_),i(_,`card-body gap-4`);let v=u(`h3`,_);n(_,v),i(v,`text-xl font-semibold`),n(v,f(`缺少 Provider 时回退默认值`));let y=u(`p`,_);n(_,y),i(y,`text-sm text-base-content/70`),n(y,f(`这一段同样移植自 SolidJS Context 的常见用法：当组件没有被对应的 Provider 包裹时， useContext() 会回退到 createContext() 里声明的默认值。`));let b=u(`div`,_);n(_,b),i(b,`grid gap-4 lg:grid-cols-2`);let x=u(`div`,b);n(b,x),i(x,`rounded-2xl border border-dashed border-base-300 p-4`);let S=u(`div`,x);n(x,S),i(S,`mb-3 text-sm font-semibold`),n(S,f(`没有 Provider`));let E=a(`rue:component:anchor`);n(x,E),d(p(k,{}),x,E);let D=u(`div`,b);n(b,D),i(D,`rounded-2xl border border-dashed border-base-300 p-4`);let j=u(`div`,D);n(D,j),i(j,`mb-3 text-sm font-semibold`),n(j,f(`有 Provider`));let M=a(`rue:component:anchor`);return n(D,M),d(p(A,{}),D,M),t}),codeCardClassName:`h-[420px] md:h-[860px]`});export{j as default};