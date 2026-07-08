import{Bt as e,Gt as t,Q as n,Vt as r,Xt as i,Z as a,at as o,bt as s,dt as ee,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,sn as h,tn as g,tt as _,yt as te,zt as ne}from"./vapor-runtime-x7F5M-49.js";import{a as v,n as re}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./createHomeSplitExamplePage-Da6pk2hb.js";var b=[`customRef`,`debounced ref`,`manual trigger`,`vapor runtime`,`watchEffect`,`shallowRef`],x=(e,n=600)=>{let r=e,i;return t((e,t)=>({get(){return e(),r},set(e){i!==void 0&&clearTimeout(i),i=setTimeout(()=>{r=e,i=void 0,t()},n)}}))},S=(e,t,n)=>{t.unshift(n),e.value=t.slice(0,5)},C=()=>{let n=v(`ref:1:0`,()=>i(`vapor`)),a=x(`vapor`),o=v(`ref:1:1`,()=>i(!1));v(`watchEffect:1:2`,()=>r(()=>{o.value=n.value!==a.value}));let s=1,ee=0,c=v(`ref:1:3`,()=>i(1)),l=v(`ref:1:4`,()=>i([])),u=[],d=t((e,t)=>({get(){return e(),s},set(e){s=e}}));v(`watchEffect:1:5`,()=>r(()=>{let e=d.value;ee++,S(l,u,`effect #${ee} 看到 value = ${e}`)}));let f=()=>{let e=c.value+1;c.value=e,S(l,u,`setter 暂存 ${e}，还没有通知 effect`),d.value=e},p=()=>{S(l,u,`调用 triggerRef(manual)，发布暂存值`),ne(d)},m=1,h=0,g=v(`ref:1:6`,()=>i(!1)),_=v(`ref:1:7`,()=>i([])),te=[],re=t((e,t)=>({get(){return g.value&&e(),m},set(e){m=e,t()}}));v(`watchEffect:1:8`,()=>r(()=>{let e=re.value;h++,S(_,te,`effect #${h} 看到 ${e}（${g.value?`已 track`:`未 track`}）`)}));let y=()=>{let e=m+1;S(_,te,`写入 ${e}，并调用 trigger()`),re.value=e},b=()=>{g.value=!g.value,S(_,te,g.value?`track 已开启`:`track 已关闭`)},C=1,w=v(`ref:1:9`,()=>i(1)),T=v(`ref:1:10`,()=>i(`A`)),E=v(`ref:1:11`,()=>i([])),D=[],O=t((e,t)=>({get(){return e(),C},set(e){C=e,t()}}));return v(`watch:1:12`,()=>e(O,(e,t)=>{S(E,D,`watch(customRef) 收到：${t} -> ${e}`)})),v(`watch:1:13`,()=>e([O,T],(e,t)=>{S(E,D,`watch([customRef, ref]) 收到：[${t.join(`, `)}] -> [${e.join(`, `)}]`)})),{bumpWatchedValue:()=>{let e=C+1;w.value=e,O.value=e},conditionalLog:_,conditionalTracking:g,draft:n,flipWatchPartner:()=>{T.value=T.value===`A`?`B`:`A`},manualInput:c,manualLog:l,mutateConditionalValue:y,partner:T,pending:o,publishManualValue:p,query:a,stageManualValue:f,toggleConditionalTracking:b,watchLog:E,watchedDisplay:w}},w=e=>l(t=>{let i=m(`ul`,t);p(i,`menu rounded-box bg-base-200/40`);let a=_(`rue:slot:anchor`);return n(i,a),r(()=>{let t=e.length?l(()=>{let t=u(),i=_(`rue:list:start`),a=_(`rue:list:end`);n(t,i),n(t,a);let c=new Map;return r(()=>{c=re({items:e||[],getKey:(e,t)=>e,elements:c,parent:i.parentNode,before:a,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,t,i,a,c)=>{d(l(()=>{let t=u(),i=m(`li`,t);n(t,i),r(()=>{ee(i,`key`,String(e))});let a=m(`span`,i);n(i,a);let c=o(a);return n(a,c),r(()=>{s(c,e)}),t}),t,i)}})}),t}):l(()=>{let e=u(),t=m(`li`,e);n(e,t);let r=m(`span`,t);return n(t,r),n(r,c(`等待操作`)),e});g(()=>d(t,i,a))}),i}),T=y({title:`customRef 自定义 ref`,source:`import { customRef, type FC, ref, triggerRef, useState, watch, watchEffect } from '@rue-js/rue'

const searchItems = [
  'customRef',
  'debounced ref',
  'manual trigger',
  'vapor runtime',
  'watchEffect',
  'shallowRef',
]

const createDebouncedRef = <T,>(initialValue: T, delay = 600) => {
  let value = initialValue
  let timer: ReturnType<typeof setTimeout> | undefined

  return customRef<T>((track, trigger) => ({
    get() {
      track()
      return value
    },
    set(nextValue) {
      if (timer !== undefined) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        value = nextValue
        timer = undefined
        trigger()
      }, delay)
    },
  }))
}

const pushLimitedLog = (
  target: ReturnType<typeof ref<string[]>>,
  buffer: string[],
  entry: string,
) => {
  buffer.unshift(entry)
  target.value = buffer.slice(0, 5)
}

const createCustomRefDemoState = () => {
  const draft = ref('vapor')
  const query = createDebouncedRef('vapor')
  const pending = ref(false)

  watchEffect(() => {
    pending.value = draft.value !== query.value
  })

  let manualValue = 1
  let manualRuns = 0
  const manualInput = ref(1)
  const manualLog = ref<string[]>([])
  const manualBuffer: string[] = []
  const manual = customRef<number>((track, _trigger) => ({
    get() {
      track()
      return manualValue
    },
    set(next) {
      manualValue = next
    },
  }))

  watchEffect(() => {
    const value = manual.value
    manualRuns++
    pushLimitedLog(manualLog, manualBuffer, \`effect #\${manualRuns} 看到 value = \${value}\`)
  })

  const stageManualValue = () => {
    const next = manualInput.value + 1
    manualInput.value = next
    pushLimitedLog(manualLog, manualBuffer, \`setter 暂存 \${next}，还没有通知 effect\`)
    manual.value = next
  }

  const publishManualValue = () => {
    pushLimitedLog(manualLog, manualBuffer, '调用 triggerRef(manual)，发布暂存值')
    triggerRef(manual)
  }

  let conditionalValue = 1
  let conditionalRuns = 0
  const conditionalTracking = ref(false)
  const conditionalLog = ref<string[]>([])
  const conditionalBuffer: string[] = []
  const conditional = customRef<number>((track, trigger) => ({
    get() {
      if (conditionalTracking.value) {
        track()
      }
      return conditionalValue
    },
    set(next) {
      conditionalValue = next
      trigger()
    },
  }))

  watchEffect(() => {
    const value = conditional.value
    conditionalRuns++
    pushLimitedLog(
      conditionalLog,
      conditionalBuffer,
      \`effect #\${conditionalRuns} 看到 \${value}（\${conditionalTracking.value ? '已 track' : '未 track'}）\`,
    )
  })

  const mutateConditionalValue = () => {
    const next = conditionalValue + 1
    pushLimitedLog(conditionalLog, conditionalBuffer, \`写入 \${next}，并调用 trigger()\`)
    conditional.value = next
  }

  const toggleConditionalTracking = () => {
    conditionalTracking.value = !conditionalTracking.value
    pushLimitedLog(
      conditionalLog,
      conditionalBuffer,
      conditionalTracking.value ? 'track 已开启' : 'track 已关闭',
    )
  }

  let watchedValue = 1
  const watchedDisplay = ref(1)
  const partner = ref('A')
  const watchLog = ref<string[]>([])
  const watchBuffer: string[] = []
  const watched = customRef<number>((track, trigger) => ({
    get() {
      track()
      return watchedValue
    },
    set(next) {
      watchedValue = next
      trigger()
    },
  }))

  watch(watched, (next: number, prev: number) => {
    pushLimitedLog(watchLog, watchBuffer, \`watch(customRef) 收到：\${prev} -> \${next}\`)
  })

  watch([watched, partner], (next: unknown[], prev: unknown[]) => {
    pushLimitedLog(
      watchLog,
      watchBuffer,
      \`watch([customRef, ref]) 收到：[\${prev.join(', ')}] -> [\${next.join(', ')}]\`,
    )
  })

  const bumpWatchedValue = () => {
    const next = watchedValue + 1
    watchedDisplay.value = next
    watched.value = next
  }

  const flipWatchPartner = () => {
    partner.value = partner.value === 'A' ? 'B' : 'A'
  }

  return {
    bumpWatchedValue,
    conditionalLog,
    conditionalTracking,
    draft,
    flipWatchPartner,
    manualInput,
    manualLog,
    mutateConditionalValue,
    partner,
    pending,
    publishManualValue,
    query,
    stageManualValue,
    toggleConditionalTracking,
    watchLog,
    watchedDisplay,
  }
}

const renderLog = (items: string[]) => (
  <ul className="menu rounded-box bg-base-200/40">
    {items.length ? (
      items.map(item => (
        <li key={item}>
          <span>{item}</span>
        </li>
      ))
    ) : (
      <li>
        <span>等待操作</span>
      </li>
    )}
  </ul>
)

const CustomRefDemo: FC = () => {
  const [state] = useState(createCustomRefDemoState)
  const normalizedQuery = state.query.value.trim().toLowerCase()
  const matches = normalizedQuery
    ? searchItems.filter(item => item.toLowerCase().includes(normalizedQuery))
    : searchItems

  const updateDraft = (nextValue: string) => {
    state.draft.value = nextValue
    state.query.value = nextValue
  }

  return (
    <div className="card bg-base-100 shadow">
      <div className="card-body gap-6">
        <div className="rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80">
          这个页面把 customRef 拆成四个小实验：先看最常见的防抖输入，再看 setter
          可以只改内部值、什么时候通知由 trigger 决定；后面两个实验展示 getter
          可以决定是否收集依赖，以及 customRef 能作为 watch 的数据源。
        </div>

        <section className="rounded-box border border-base-300 p-4">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold">防抖 setter</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">
                输入框的值会立刻变化，但 customRef 的 setter 会等 600ms 后才写入并调用
                trigger，所以匹配结果只按防抖后的值更新。
              </p>
            </div>
            <button
              className="btn btn-sm"
              onClick={() => {
                updateDraft('customRef')
              }}
            >
              使用 customRef
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-base-content/70">搜索关键词</span>
            <input
              className="input input-bordered w-full"
              value={state.draft.value}
              onInput={(event: Event) => {
                updateDraft((event.target as HTMLInputElement).value)
              }}
            />
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-box border border-base-300 bg-base-200/40 p-4">
              <div className="text-sm text-base-content/60">输入值</div>
              <div className="mt-1 text-xl font-semibold">{state.draft.value || 'empty'}</div>
            </div>
            <div className="rounded-box border border-base-300 bg-base-200/40 p-4">
              <div className="text-sm text-base-content/60">customRef 值</div>
              <div className="mt-1 text-xl font-semibold">{state.query.value || 'empty'}</div>
            </div>
            <div className="rounded-box border border-base-300 bg-base-200/40 p-4">
              <div className="text-sm text-base-content/60">状态</div>
              <div
                className={\`badge mt-2 \${state.pending.value ? 'badge-warning' : 'badge-success'}\`}
              >
                {state.pending.value ? '等待提交' : '已同步'}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="mb-2 text-sm font-medium text-base-content/70">匹配结果</h3>
            <ul className="menu rounded-box bg-base-200/40">
              {matches.length ? (
                matches.map(item => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))
              ) : (
                <li>
                  <span>没有匹配结果</span>
                </li>
              )}
            </ul>
          </div>
        </section>

        <section className="rounded-box border border-base-300 p-4">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold">手动 triggerRef</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">
                这里的 setter 只把新值暂存在闭包里，不会自动通知 effect。先点“仅运行
                setter”会看到暂存值变了，但日志里的 effect 不会变；再点 triggerRef 才会发布。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-sm btn-outline" onClick={state.stageManualValue}>
                仅运行 setter
              </button>
              <button className="btn btn-sm btn-primary" onClick={state.publishManualValue}>
                发布 triggerRef
              </button>
            </div>
          </div>

          <div className="mb-3 rounded-box border border-base-300 bg-base-200/40 p-4">
            <div className="text-sm text-base-content/60">暂存值</div>
            <div className="mt-1 text-xl font-semibold">{state.manualInput.value}</div>
          </div>
          {renderLog(state.manualLog.value)}
        </section>

        <section className="rounded-box border border-base-300 p-4">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold">条件 track</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">
                getter 可以自己决定是否调用 track。未开启 track 时，即使 setter 调用了
                trigger，也没有订阅者会被唤醒；开启后，下一次写入才会触发 effect 日志。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-sm btn-outline" onClick={state.toggleConditionalTracking}>
                {state.conditionalTracking.value ? '关闭 track' : '开启 track'}
              </button>
              <button className="btn btn-sm btn-primary" onClick={state.mutateConditionalValue}>
                写入并 trigger
              </button>
            </div>
          </div>
          {renderLog(state.conditionalLog.value)}
        </section>

        <section className="rounded-box border border-base-300 p-4">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h2 className="text-lg font-semibold">watch source</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">
                customRef 带 ref 标记，所以可以直接作为 watch 的 source，也可以和普通 ref
                一起放进数组 source。下面的日志会分别记录这两种 watch 的回调。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-sm btn-primary" onClick={state.bumpWatchedValue}>
                更新 customRef
              </button>
              <button className="btn btn-sm btn-outline" onClick={state.flipWatchPartner}>
                切换搭档 {state.partner.value}
              </button>
            </div>
          </div>

          <div className="mb-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-box border border-base-300 bg-base-200/40 p-4">
              <div className="text-sm text-base-content/60">customRef 数据源</div>
              <div className="mt-1 text-xl font-semibold">{state.watchedDisplay.value}</div>
            </div>
            <div className="rounded-box border border-base-300 bg-base-200/40 p-4">
              <div className="text-sm text-base-content/60">数组 source 搭档</div>
              <div className="mt-1 text-xl font-semibold">{state.partner.value}</div>
            </div>
          </div>
          {renderLog(state.watchLog.value)}
        </section>
      </div>
    </div>
  )
}

export default CustomRefDemo
`,Demo:()=>{let{state:e,normalizedQuery:t,matches:i,updateDraft:ne}=v(`useSetup:0:0`,()=>f(()=>{let[e]=v(`useState:1:14`,()=>h(C)),t=e.query.value.trim().toLowerCase();return{state:e,normalizedQuery:t,matches:t?b.filter(e=>e.toLowerCase().includes(t)):b,updateDraft:t=>{e.draft.value=t,e.query.value=t}}}));return l(t=>{let f=m(`div`,t);p(f,`card bg-base-100 shadow`);let h=m(`div`,f);n(f,h),p(h,`card-body gap-6`);let v=m(`div`,h);n(h,v),p(v,`rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80`),n(v,c(`这个页面把 customRef 拆成四个小实验：先看最常见的防抖输入，再看 setter 可以只改内部值、什么时候通知由 trigger 决定；后面两个实验展示 getter 可以决定是否收集依赖，以及 customRef 能作为 watch 的数据源。`));let y=m(`section`,h);n(h,y),p(y,`rounded-box border border-base-300 p-4`);let b=m(`div`,y);n(y,b),p(b,`mb-3 flex flex-wrap items-start justify-between gap-2`);let x=m(`div`,b);n(b,x);let S=m(`h2`,x);n(x,S),p(S,`text-lg font-semibold`),n(S,c(`防抖 setter`));let C=m(`p`,x);n(x,C),p(C,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),n(C,c(`输入框的值会立刻变化，但 customRef 的 setter 会等 600ms 后才写入并调用 trigger，所以匹配结果只按防抖后的值更新。`));let T=m(`button`,b);n(b,T),p(T,`btn btn-sm`),a(T,`click`,()=>{ne(`customRef`)}),n(T,c(`使用 customRef`));let E=m(`div`,y);n(y,E),p(E,`flex flex-col gap-2`);let D=m(`span`,E);n(E,D),p(D,`text-sm font-medium text-base-content/70`),n(D,c(`搜索关键词`));let O=m(`input`,E);n(E,O),p(O,`input input-bordered w-full`),r(()=>{te(O,e.draft.value)}),a(O,`input`,e=>{ne(e.target.value)});let k=m(`div`,y);n(y,k),p(k,`mt-4 grid gap-3 md:grid-cols-3`);let A=m(`div`,k);n(k,A),p(A,`rounded-box border border-base-300 bg-base-200/40 p-4`);let ie=m(`div`,A);n(A,ie),p(ie,`text-sm text-base-content/60`),n(ie,c(`输入值`));let ae=m(`div`,A);n(A,ae),p(ae,`mt-1 text-xl font-semibold`);let oe=o(ae);n(ae,oe),r(()=>{s(oe,e.draft.value||`empty`)});let j=m(`div`,k);n(k,j),p(j,`rounded-box border border-base-300 bg-base-200/40 p-4`);let se=m(`div`,j);n(j,se),p(se,`text-sm text-base-content/60`),n(se,c(`customRef 值`));let ce=m(`div`,j);n(j,ce),p(ce,`mt-1 text-xl font-semibold`);let le=o(ce);n(ce,le),r(()=>{s(le,e.query.value||`empty`)});let M=m(`div`,k);n(k,M),p(M,`rounded-box border border-base-300 bg-base-200/40 p-4`);let ue=m(`div`,M);n(M,ue),p(ue,`text-sm text-base-content/60`),n(ue,c(`状态`));let de=m(`div`,M);n(M,de),r(()=>{p(de,`badge mt-2 ${e.pending.value?`badge-warning`:`badge-success`}`)});let fe=o(de);n(de,fe),r(()=>{s(fe,e.pending.value?`等待提交`:`已同步`)});let N=m(`div`,y);n(y,N),p(N,`mt-4`);let pe=m(`h3`,N);n(N,pe),p(pe,`mb-2 text-sm font-medium text-base-content/70`),n(pe,c(`匹配结果`));let P=m(`ul`,N);n(N,P),p(P,`menu rounded-box bg-base-200/40`);let me=_(`rue:slot:anchor`);n(P,me),r(()=>{let e=i.length?l(()=>{let e=u(),t=_(`rue:list:start`),a=_(`rue:list:end`);n(e,t),n(e,a);let c=new Map;return r(()=>{c=re({items:i||[],getKey:(e,t)=>e,elements:c,parent:t.parentNode,before:a,singleRoot:!0,trackIndex:!1,start:t,renderItem:(e,t,i,a,c)=>{d(l(()=>{let t=u(),i=m(`li`,t);n(t,i),r(()=>{ee(i,`key`,String(e))});let a=m(`span`,i);n(i,a);let c=o(a);return n(a,c),r(()=>{s(c,e)}),t}),t,i)}})}),e}):l(()=>{let e=u(),t=m(`li`,e);n(e,t);let r=m(`span`,t);return n(t,r),n(r,c(`没有匹配结果`)),e});g(()=>d(e,P,me))});let F=m(`section`,h);n(h,F),p(F,`rounded-box border border-base-300 p-4`);let I=m(`div`,F);n(F,I),p(I,`mb-3 flex flex-wrap items-start justify-between gap-2`);let L=m(`div`,I);n(I,L);let he=m(`h2`,L);n(L,he),p(he,`text-lg font-semibold`),n(he,c(`手动 triggerRef`));let ge=m(`p`,L);n(L,ge),p(ge,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),n(ge,c(`这里的 setter 只把新值暂存在闭包里，不会自动通知 effect。先点“仅运行 setter”会看到暂存值变了，但日志里的 effect 不会变；再点 triggerRef 才会发布。`));let R=m(`div`,I);n(I,R),p(R,`flex flex-wrap gap-2`);let _e=m(`button`,R);n(R,_e),p(_e,`btn btn-sm btn-outline`),a(_e,`click`,e.stageManualValue),n(_e,c(`仅运行 setter`));let ve=m(`button`,R);n(R,ve),p(ve,`btn btn-sm btn-primary`),a(ve,`click`,e.publishManualValue),n(ve,c(`发布 triggerRef`));let z=m(`div`,F);n(F,z),p(z,`mb-3 rounded-box border border-base-300 bg-base-200/40 p-4`);let ye=m(`div`,z);n(z,ye),p(ye,`text-sm text-base-content/60`),n(ye,c(`暂存值`));let be=m(`div`,z);n(z,be),p(be,`mt-1 text-xl font-semibold`);let xe=o(be);n(be,xe),r(()=>{s(xe,e.manualInput.value)});let Se=_(`rue:slot:anchor`);n(F,Se),r(()=>{let t=w(e.manualLog.value);g(()=>d(t,F,Se))});let B=m(`section`,h);n(h,B),p(B,`rounded-box border border-base-300 p-4`);let V=m(`div`,B);n(B,V),p(V,`mb-3 flex flex-wrap items-start justify-between gap-2`);let H=m(`div`,V);n(V,H);let Ce=m(`h2`,H);n(H,Ce),p(Ce,`text-lg font-semibold`),n(Ce,c(`条件 track`));let we=m(`p`,H);n(H,we),p(we,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),n(we,c(`getter 可以自己决定是否调用 track。未开启 track 时，即使 setter 调用了 trigger，也没有订阅者会被唤醒；开启后，下一次写入才会触发 effect 日志。`));let U=m(`div`,V);n(V,U),p(U,`flex flex-wrap gap-2`);let W=m(`button`,U);n(U,W),p(W,`btn btn-sm btn-outline`),a(W,`click`,e.toggleConditionalTracking);let Te=o(W);n(W,Te),r(()=>{s(Te,e.conditionalTracking.value?`关闭 track`:`开启 track`)});let Ee=m(`button`,U);n(U,Ee),p(Ee,`btn btn-sm btn-primary`),a(Ee,`click`,e.mutateConditionalValue),n(Ee,c(`写入并 trigger`));let De=_(`rue:slot:anchor`);n(B,De),r(()=>{let t=w(e.conditionalLog.value);g(()=>d(t,B,De))});let G=m(`section`,h);n(h,G),p(G,`rounded-box border border-base-300 p-4`);let K=m(`div`,G);n(G,K),p(K,`mb-3 flex flex-wrap items-start justify-between gap-2`);let q=m(`div`,K);n(K,q);let Oe=m(`h2`,q);n(q,Oe),p(Oe,`text-lg font-semibold`),n(Oe,c(`watch source`));let ke=m(`p`,q);n(q,ke),p(ke,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),n(ke,c(`customRef 带 ref 标记，所以可以直接作为 watch 的 source，也可以和普通 ref 一起放进数组 source。下面的日志会分别记录这两种 watch 的回调。`));let J=m(`div`,K);n(K,J),p(J,`flex flex-wrap gap-2`);let Ae=m(`button`,J);n(J,Ae),p(Ae,`btn btn-sm btn-primary`),a(Ae,`click`,e.bumpWatchedValue),n(Ae,c(`更新 customRef`));let Y=m(`button`,J);n(J,Y),p(Y,`btn btn-sm btn-outline`),a(Y,`click`,e.flipWatchPartner),n(Y,c(`切换搭档 `));let je=o(Y);n(Y,je),r(()=>{s(je,e.partner.value)});let X=m(`div`,G);n(G,X),p(X,`mb-3 grid gap-3 md:grid-cols-2`);let Z=m(`div`,X);n(X,Z),p(Z,`rounded-box border border-base-300 bg-base-200/40 p-4`);let Me=m(`div`,Z);n(Z,Me),p(Me,`text-sm text-base-content/60`),n(Me,c(`customRef 数据源`));let Ne=m(`div`,Z);n(Z,Ne),p(Ne,`mt-1 text-xl font-semibold`);let Pe=o(Ne);n(Ne,Pe),r(()=>{s(Pe,e.watchedDisplay.value)});let Q=m(`div`,X);n(X,Q),p(Q,`rounded-box border border-base-300 bg-base-200/40 p-4`);let Fe=m(`div`,Q);n(Q,Fe),p(Fe,`text-sm text-base-content/60`),n(Fe,c(`数组 source 搭档`));let $=m(`div`,Q);n(Q,$),p($,`mt-1 text-xl font-semibold`);let Ie=o($);n($,Ie),r(()=>{s(Ie,e.partner.value)});let Le=_(`rue:slot:anchor`);return n(G,Le),r(()=>{let t=w(e.watchLog.value);g(()=>d(t,G,Le))}),f})}});export{T as default};