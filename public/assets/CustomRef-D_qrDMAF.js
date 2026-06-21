import{$t as e,Jt as t,Lt as n,Q as r,Rt as i,Ut as a,Z as o,_t as ee,an as s,dt as c,et as l,in as u,it as d,l as f,lt as te,nt as p,o as m,rt as h,tt as g,vt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as ne}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as b}from"./createHomeSplitExamplePage-DpsCt1Bb.js";var x=[`customRef`,`debounced ref`,`manual trigger`,`vapor runtime`,`watchEffect`,`shallowRef`],S=(e,t=600)=>{let n=e,r;return a((e,i)=>({get(){return e(),n},set(e){r!==void 0&&clearTimeout(r),r=setTimeout(()=>{n=e,r=void 0,i()},t)}}))},C=(e,t,n)=>{t.unshift(n),e.value=t.slice(0,5)},w=()=>{let e=y(`ref:1:0`,()=>t(`vapor`)),r=S(`vapor`),o=y(`ref:1:1`,()=>t(!1));y(`watchEffect:1:2`,()=>v(()=>{o.value=e.value!==r.value}));let ee=1,s=0,c=y(`ref:1:3`,()=>t(1)),l=y(`ref:1:4`,()=>t([])),u=[],d=a((e,t)=>({get(){return e(),ee},set(e){ee=e}}));y(`watchEffect:1:5`,()=>v(()=>{let e=d.value;s++,C(l,u,`effect #${s} 看到 value = ${e}`)}));let f=()=>{let e=c.value+1;c.value=e,C(l,u,`setter 暂存 ${e}，还没有通知 effect`),d.value=e},te=()=>{C(l,u,`调用 triggerRef(manual)，发布暂存值`),n(d)},p=1,m=0,h=y(`ref:1:6`,()=>t(!1)),g=y(`ref:1:7`,()=>t([])),_=[],ne=a((e,t)=>({get(){return h.value&&e(),p},set(e){p=e,t()}}));y(`watchEffect:1:8`,()=>v(()=>{let e=ne.value;m++,C(g,_,`effect #${m} 看到 ${e}（${h.value?`已 track`:`未 track`}）`)}));let b=()=>{let e=p+1;C(g,_,`写入 ${e}，并调用 trigger()`),ne.value=e},x=()=>{h.value=!h.value,C(g,_,h.value?`track 已开启`:`track 已关闭`)},w=1,T=y(`ref:1:9`,()=>t(1)),E=y(`ref:1:10`,()=>t(`A`)),D=y(`ref:1:11`,()=>t([])),O=[],k=a((e,t)=>({get(){return e(),w},set(e){w=e,t()}}));return y(`watch:1:12`,()=>i(k,(e,t)=>{C(D,O,`watch(customRef) 收到：${t} -> ${e}`)})),y(`watch:1:13`,()=>i([k,E],(e,t)=>{C(D,O,`watch([customRef, ref]) 收到：[${t.join(`, `)}] -> [${e.join(`, `)}]`)})),{bumpWatchedValue:()=>{let e=w+1;T.value=e,k.value=e},conditionalLog:g,conditionalTracking:h,draft:e,flipWatchPartner:()=>{E.value=E.value===`A`?`B`:`A`},manualInput:c,manualLog:l,mutateConditionalValue:b,partner:E,pending:o,publishManualValue:te,query:r,stageManualValue:f,toggleConditionalTracking:x,watchLog:D,watchedDisplay:T}},T=t=>f(n=>{let i=p(`ul`,n);c(i,`menu rounded-box bg-base-200/40`);let a=l(`rue:slot:anchor`);return r(i,a),v(()=>{let n=t.length?f(()=>{let e=g(),n=l(`rue:list:start`),i=l(`rue:list:end`);r(e,n),r(e,i);let a=new Map;return v(()=>{a=ne({items:t||[],getKey:(e,t)=>e,elements:a,parent:n.parentNode,before:i,singleRoot:!0,trackIndex:!1,start:n,renderItem:(e,t,n,i,a)=>{m(f(()=>{let t=g(),n=p(`li`,t);r(t,n),v(()=>{te(n,`key`,String(e))});let i=p(`span`,n);r(n,i);let a=d(i);return r(i,a),v(()=>{_(a,e)}),t}),t,n)}})}),e}):f(()=>{let e=g(),t=p(`li`,e);r(e,t);let n=p(`span`,t);return r(t,n),r(n,h(`等待操作`)),e});e(()=>m(n,i,a))}),i}),E=b({title:`customRef 自定义 ref`,source:`import { customRef, type FC, ref, triggerRef, useState, watch, watchEffect } from '@rue-js/rue'

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
`,Demo:()=>{let{state:t,normalizedQuery:n,matches:i,updateDraft:a}=y(`useSetup:0:0`,()=>u(()=>{let[e]=y(`useState:1:14`,()=>s(w)),t=e.query.value.trim().toLowerCase();return{state:e,normalizedQuery:t,matches:t?x.filter(e=>e.toLowerCase().includes(t)):x,updateDraft:t=>{e.draft.value=t,e.query.value=t}}}));return f(n=>{let s=p(`div`,n);c(s,`card bg-base-100 shadow`);let u=p(`div`,s);r(s,u),c(u,`card-body gap-6`);let y=p(`div`,u);r(u,y),c(y,`rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80`),r(y,h(`这个页面把 customRef 拆成四个小实验：先看最常见的防抖输入，再看 setter 可以只改内部值、什么时候通知由 trigger 决定；后面两个实验展示 getter 可以决定是否收集依赖，以及 customRef 能作为 watch 的数据源。`));let b=p(`section`,u);r(u,b),c(b,`rounded-box border border-base-300 p-4`);let x=p(`div`,b);r(b,x),c(x,`mb-3 flex flex-wrap items-start justify-between gap-2`);let S=p(`div`,x);r(x,S);let C=p(`h2`,S);r(S,C),c(C,`text-lg font-semibold`),r(C,h(`防抖 setter`));let w=p(`p`,S);r(S,w),c(w,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),r(w,h(`输入框的值会立刻变化，但 customRef 的 setter 会等 600ms 后才写入并调用 trigger，所以匹配结果只按防抖后的值更新。`));let E=p(`button`,x);r(x,E),c(E,`btn btn-sm`),o(E,`click`,()=>{a(`customRef`)}),r(E,h(`使用 customRef`));let D=p(`div`,b);r(b,D),c(D,`flex flex-col gap-2`);let O=p(`span`,D);r(D,O),c(O,`text-sm font-medium text-base-content/70`),r(O,h(`搜索关键词`));let k=p(`input`,D);r(D,k),c(k,`input input-bordered w-full`),v(()=>{ee(k,t.draft.value)}),o(k,`input`,e=>{a(e.target.value)});let A=p(`div`,b);r(b,A),c(A,`mt-4 grid gap-3 md:grid-cols-3`);let j=p(`div`,A);r(A,j),c(j,`rounded-box border border-base-300 bg-base-200/40 p-4`);let re=p(`div`,j);r(j,re),c(re,`text-sm text-base-content/60`),r(re,h(`输入值`));let ie=p(`div`,j);r(j,ie),c(ie,`mt-1 text-xl font-semibold`);let ae=d(ie);r(ie,ae),v(()=>{_(ae,t.draft.value||`empty`)});let M=p(`div`,A);r(A,M),c(M,`rounded-box border border-base-300 bg-base-200/40 p-4`);let oe=p(`div`,M);r(M,oe),c(oe,`text-sm text-base-content/60`),r(oe,h(`customRef 值`));let se=p(`div`,M);r(M,se),c(se,`mt-1 text-xl font-semibold`);let ce=d(se);r(se,ce),v(()=>{_(ce,t.query.value||`empty`)});let N=p(`div`,A);r(A,N),c(N,`rounded-box border border-base-300 bg-base-200/40 p-4`);let le=p(`div`,N);r(N,le),c(le,`text-sm text-base-content/60`),r(le,h(`状态`));let ue=p(`div`,N);r(N,ue),v(()=>{c(ue,`badge mt-2 ${t.pending.value?`badge-warning`:`badge-success`}`)});let de=d(ue);r(ue,de),v(()=>{_(de,t.pending.value?`等待提交`:`已同步`)});let P=p(`div`,b);r(b,P),c(P,`mt-4`);let fe=p(`h3`,P);r(P,fe),c(fe,`mb-2 text-sm font-medium text-base-content/70`),r(fe,h(`匹配结果`));let F=p(`ul`,P);r(P,F),c(F,`menu rounded-box bg-base-200/40`);let pe=l(`rue:slot:anchor`);r(F,pe),v(()=>{let t=i.length?f(()=>{let e=g(),t=l(`rue:list:start`),n=l(`rue:list:end`);r(e,t),r(e,n);let a=new Map;return v(()=>{a=ne({items:i||[],getKey:(e,t)=>e,elements:a,parent:t.parentNode,before:n,singleRoot:!0,trackIndex:!1,start:t,renderItem:(e,t,n,i,a)=>{m(f(()=>{let t=g(),n=p(`li`,t);r(t,n),v(()=>{te(n,`key`,String(e))});let i=p(`span`,n);r(n,i);let a=d(i);return r(i,a),v(()=>{_(a,e)}),t}),t,n)}})}),e}):f(()=>{let e=g(),t=p(`li`,e);r(e,t);let n=p(`span`,t);return r(t,n),r(n,h(`没有匹配结果`)),e});e(()=>m(t,F,pe))});let I=p(`section`,u);r(u,I),c(I,`rounded-box border border-base-300 p-4`);let L=p(`div`,I);r(I,L),c(L,`mb-3 flex flex-wrap items-start justify-between gap-2`);let R=p(`div`,L);r(L,R);let me=p(`h2`,R);r(R,me),c(me,`text-lg font-semibold`),r(me,h(`手动 triggerRef`));let he=p(`p`,R);r(R,he),c(he,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),r(he,h(`这里的 setter 只把新值暂存在闭包里，不会自动通知 effect。先点“仅运行 setter”会看到暂存值变了，但日志里的 effect 不会变；再点 triggerRef 才会发布。`));let z=p(`div`,L);r(L,z),c(z,`flex flex-wrap gap-2`);let ge=p(`button`,z);r(z,ge),c(ge,`btn btn-sm btn-outline`),o(ge,`click`,t.stageManualValue),r(ge,h(`仅运行 setter`));let _e=p(`button`,z);r(z,_e),c(_e,`btn btn-sm btn-primary`),o(_e,`click`,t.publishManualValue),r(_e,h(`发布 triggerRef`));let B=p(`div`,I);r(I,B),c(B,`mb-3 rounded-box border border-base-300 bg-base-200/40 p-4`);let ve=p(`div`,B);r(B,ve),c(ve,`text-sm text-base-content/60`),r(ve,h(`暂存值`));let ye=p(`div`,B);r(B,ye),c(ye,`mt-1 text-xl font-semibold`);let be=d(ye);r(ye,be),v(()=>{_(be,t.manualInput.value)});let xe=l(`rue:slot:anchor`);r(I,xe),v(()=>{let n=T(t.manualLog.value);e(()=>m(n,I,xe))});let V=p(`section`,u);r(u,V),c(V,`rounded-box border border-base-300 p-4`);let H=p(`div`,V);r(V,H),c(H,`mb-3 flex flex-wrap items-start justify-between gap-2`);let U=p(`div`,H);r(H,U);let Se=p(`h2`,U);r(U,Se),c(Se,`text-lg font-semibold`),r(Se,h(`条件 track`));let Ce=p(`p`,U);r(U,Ce),c(Ce,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),r(Ce,h(`getter 可以自己决定是否调用 track。未开启 track 时，即使 setter 调用了 trigger，也没有订阅者会被唤醒；开启后，下一次写入才会触发 effect 日志。`));let W=p(`div`,H);r(H,W),c(W,`flex flex-wrap gap-2`);let G=p(`button`,W);r(W,G),c(G,`btn btn-sm btn-outline`),o(G,`click`,t.toggleConditionalTracking);let we=d(G);r(G,we),v(()=>{_(we,t.conditionalTracking.value?`关闭 track`:`开启 track`)});let Te=p(`button`,W);r(W,Te),c(Te,`btn btn-sm btn-primary`),o(Te,`click`,t.mutateConditionalValue),r(Te,h(`写入并 trigger`));let Ee=l(`rue:slot:anchor`);r(V,Ee),v(()=>{let n=T(t.conditionalLog.value);e(()=>m(n,V,Ee))});let K=p(`section`,u);r(u,K),c(K,`rounded-box border border-base-300 p-4`);let q=p(`div`,K);r(K,q),c(q,`mb-3 flex flex-wrap items-start justify-between gap-2`);let J=p(`div`,q);r(q,J);let De=p(`h2`,J);r(J,De),c(De,`text-lg font-semibold`),r(De,h(`watch source`));let Oe=p(`p`,J);r(J,Oe),c(Oe,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),r(Oe,h(`customRef 带 ref 标记，所以可以直接作为 watch 的 source，也可以和普通 ref 一起放进数组 source。下面的日志会分别记录这两种 watch 的回调。`));let Y=p(`div`,q);r(q,Y),c(Y,`flex flex-wrap gap-2`);let ke=p(`button`,Y);r(Y,ke),c(ke,`btn btn-sm btn-primary`),o(ke,`click`,t.bumpWatchedValue),r(ke,h(`更新 customRef`));let X=p(`button`,Y);r(Y,X),c(X,`btn btn-sm btn-outline`),o(X,`click`,t.flipWatchPartner),r(X,h(`切换搭档 `));let Ae=d(X);r(X,Ae),v(()=>{_(Ae,t.partner.value)});let Z=p(`div`,K);r(K,Z),c(Z,`mb-3 grid gap-3 md:grid-cols-2`);let Q=p(`div`,Z);r(Z,Q),c(Q,`rounded-box border border-base-300 bg-base-200/40 p-4`);let je=p(`div`,Q);r(Q,je),c(je,`text-sm text-base-content/60`),r(je,h(`customRef 数据源`));let Me=p(`div`,Q);r(Q,Me),c(Me,`mt-1 text-xl font-semibold`);let Ne=d(Me);r(Me,Ne),v(()=>{_(Ne,t.watchedDisplay.value)});let $=p(`div`,Z);r(Z,$),c($,`rounded-box border border-base-300 bg-base-200/40 p-4`);let Pe=p(`div`,$);r($,Pe),c(Pe,`text-sm text-base-content/60`),r(Pe,h(`数组 source 搭档`));let Fe=p(`div`,$);r($,Fe),c(Fe,`mt-1 text-xl font-semibold`);let Ie=d(Fe);r(Fe,Ie),v(()=>{_(Ie,t.partner.value)});let Le=l(`rue:slot:anchor`);return r(K,Le),v(()=>{let n=T(t.watchLog.value);e(()=>m(n,K,Le))}),s})}});export{E as default};