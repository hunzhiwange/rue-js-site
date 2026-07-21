import{$t as e,Cn as t,Ct as n,Mt as r,Tt as i,cn as a,dt as o,en as s,ft as c,ht as l,jt as ee,mt as u,ot as d,pn as f,pt as p,st as m,tn as h,vn as g,wn as _}from"./context-8lXZvIn-.js";import{l as v,o as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b,n as te}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./createHomeSplitExamplePage-BZ-QZsAd.js";var S=[`customRef`,`debounced ref`,`manual trigger`,`vapor runtime`,`watchEffect`,`shallowRef`],C=(e,t=600)=>{let n=e,r;return a((e,i)=>({get(){return e(),n},set(e){r!==void 0&&clearTimeout(r),r=setTimeout(()=>{n=e,r=void 0,i()},t)}}))},w=(e,t,n)=>{t.unshift(n),e.value=t.slice(0,5)},T=()=>{let t=b(`ref:1:0`,()=>f(`vapor`)),n=C(`vapor`),r=b(`ref:1:1`,()=>f(!1));b(`watchEffect:1:2`,()=>h(()=>{r.value=t.value!==n.value}));let i=1,o=0,c=b(`ref:1:3`,()=>f(1)),l=b(`ref:1:4`,()=>f([])),ee=[],u=a((e,t)=>({get(){return e(),i},set(e){i=e}}));b(`watchEffect:1:5`,()=>h(()=>{let e=u.value;o++,w(l,ee,`effect #${o} 看到 value = ${e}`)}));let d=()=>{let e=c.value+1;c.value=e,w(l,ee,`setter 暂存 ${e}，还没有通知 effect`),u.value=e},p=()=>{w(l,ee,`调用 triggerRef(manual)，发布暂存值`),e(u)},m=1,g=0,_=b(`ref:1:6`,()=>f(!1)),v=b(`ref:1:7`,()=>f([])),y=[],te=a((e,t)=>({get(){return _.value&&e(),m},set(e){m=e,t()}}));b(`watchEffect:1:8`,()=>h(()=>{let e=te.value;g++,w(v,y,`effect #${g} 看到 ${e}（${_.value?`已 track`:`未 track`}）`)}));let x=()=>{let e=m+1;w(v,y,`写入 ${e}，并调用 trigger()`),te.value=e},S=()=>{_.value=!_.value,w(v,y,_.value?`track 已开启`:`track 已关闭`)},T=1,E=b(`ref:1:9`,()=>f(1)),D=b(`ref:1:10`,()=>f(`A`)),O=b(`ref:1:11`,()=>f([])),k=[],A=a((e,t)=>({get(){return e(),T},set(e){T=e,t()}}));return b(`watch:1:12`,()=>s(A,(e,t)=>{w(O,k,`watch(customRef) 收到：${t} -> ${e}`)})),b(`watch:1:13`,()=>s([A,D],(e,t)=>{w(O,k,`watch([customRef, ref]) 收到：[${t.join(`, `)}] -> [${e.join(`, `)}]`)})),{bumpWatchedValue:()=>{let e=T+1;E.value=e,A.value=e},conditionalLog:v,conditionalTracking:_,draft:t,flipWatchPartner:()=>{D.value=D.value===`A`?`B`:`A`},manualInput:c,manualLog:l,mutateConditionalValue:x,partner:D,pending:r,publishManualValue:p,query:n,stageManualValue:d,toggleConditionalTracking:S,watchLog:O,watchedDisplay:E}},E=e=>v(t=>{let a=p(`ul`,t);i(a,`menu rounded-box bg-base-200/40`);let s=o(`rue:slot:anchor`);return m(a,s),h(()=>{let t=e.length?v(()=>{let t=c(),i=o(`rue:list:start`),a=o(`rue:list:end`);m(t,i),m(t,a);let s=new Map;return h(()=>{s=te({items:e||[],getKey:(e,t)=>e,elements:s,parent:i.parentNode,before:a,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,t,i,a,o)=>{y(v(()=>{let t=c(),i=p(`li`,t);m(t,i),h(()=>{n(i,`key`,String(e))});let a=p(`span`,i);m(i,a);let o=l(a);return m(a,o),h(()=>{r(o,e)}),t}),t,i)}})}),t}):v(()=>{let e=c(),t=p(`li`,e);m(e,t);let n=p(`span`,t);return m(t,n),m(n,u(`等待操作`)),e});g(()=>y(t,a,s))}),a}),D=x({title:`customRef 自定义 ref`,source:`import { customRef, type FC, ref, triggerRef, useState, watch, watchEffect } from '@rue-js/rue'

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
`,Demo:()=>{let{state:e,normalizedQuery:a,matches:s,updateDraft:f}=b(`useSetup:0:0`,()=>t(()=>{let[e]=b(`useState:1:14`,()=>_(T)),t=e.query.value.trim().toLowerCase();return{state:e,normalizedQuery:t,matches:t?S.filter(e=>e.toLowerCase().includes(t)):S,updateDraft:t=>{e.draft.value=t,e.query.value=t}}}));return v(t=>{let a=p(`div`,t);i(a,`card bg-base-100 shadow`);let _=p(`div`,a);m(a,_),i(_,`card-body gap-6`);let b=p(`div`,_);m(_,b),i(b,`rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80`),m(b,u(`这个页面把 customRef 拆成四个小实验：先看最常见的防抖输入，再看 setter 可以只改内部值、什么时候通知由 trigger 决定；后面两个实验展示 getter 可以决定是否收集依赖，以及 customRef 能作为 watch 的数据源。`));let x=p(`section`,_);m(_,x),i(x,`rounded-box border border-base-300 p-4`);let S=p(`div`,x);m(x,S),i(S,`mb-3 flex flex-wrap items-start justify-between gap-2`);let C=p(`div`,S);m(S,C);let w=p(`h2`,C);m(C,w),i(w,`text-lg font-semibold`),m(w,u(`防抖 setter`));let T=p(`p`,C);m(C,T),i(T,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),m(T,u(`输入框的值会立刻变化，但 customRef 的 setter 会等 600ms 后才写入并调用 trigger，所以匹配结果只按防抖后的值更新。`));let D=p(`button`,S);m(S,D),i(D,`btn btn-sm`),d(D,`click`,()=>{f(`customRef`)}),m(D,u(`使用 customRef`));let O=p(`div`,x);m(x,O),i(O,`flex flex-col gap-2`);let k=p(`span`,O);m(O,k),i(k,`text-sm font-medium text-base-content/70`),m(k,u(`搜索关键词`));let A=p(`input`,O);m(O,A),i(A,`input input-bordered w-full`),h(()=>{ee(A,e.draft.value)}),d(A,`input`,e=>{f(e.target.value)});let j=p(`div`,x);m(x,j),i(j,`mt-4 grid gap-3 md:grid-cols-3`);let M=p(`div`,j);m(j,M),i(M,`rounded-box border border-base-300 bg-base-200/40 p-4`);let ne=p(`div`,M);m(M,ne),i(ne,`text-sm text-base-content/60`),m(ne,u(`输入值`));let re=p(`div`,M);m(M,re),i(re,`mt-1 text-xl font-semibold`);let ie=l(re);m(re,ie),h(()=>{r(ie,e.draft.value||`empty`)});let N=p(`div`,j);m(j,N),i(N,`rounded-box border border-base-300 bg-base-200/40 p-4`);let ae=p(`div`,N);m(N,ae),i(ae,`text-sm text-base-content/60`),m(ae,u(`customRef 值`));let oe=p(`div`,N);m(N,oe),i(oe,`mt-1 text-xl font-semibold`);let se=l(oe);m(oe,se),h(()=>{r(se,e.query.value||`empty`)});let P=p(`div`,j);m(j,P),i(P,`rounded-box border border-base-300 bg-base-200/40 p-4`);let ce=p(`div`,P);m(P,ce),i(ce,`text-sm text-base-content/60`),m(ce,u(`状态`));let le=p(`div`,P);m(P,le),h(()=>{i(le,`badge mt-2 ${e.pending.value?`badge-warning`:`badge-success`}`)});let ue=l(le);m(le,ue),h(()=>{r(ue,e.pending.value?`等待提交`:`已同步`)});let F=p(`div`,x);m(x,F),i(F,`mt-4`);let de=p(`h3`,F);m(F,de),i(de,`mb-2 text-sm font-medium text-base-content/70`),m(de,u(`匹配结果`));let fe=p(`ul`,F);m(F,fe),i(fe,`menu rounded-box bg-base-200/40`);let pe=o(`rue:slot:anchor`);m(fe,pe),h(()=>{let e=s.length?v(()=>{let e=c(),t=o(`rue:list:start`),i=o(`rue:list:end`);m(e,t),m(e,i);let a=new Map;return h(()=>{a=te({items:s||[],getKey:(e,t)=>e,elements:a,parent:t.parentNode,before:i,singleRoot:!0,trackIndex:!1,start:t,renderItem:(e,t,i,a,o)=>{y(v(()=>{let t=c(),i=p(`li`,t);m(t,i),h(()=>{n(i,`key`,String(e))});let a=p(`span`,i);m(i,a);let o=l(a);return m(a,o),h(()=>{r(o,e)}),t}),t,i)}})}),e}):v(()=>{let e=c(),t=p(`li`,e);m(e,t);let n=p(`span`,t);return m(t,n),m(n,u(`没有匹配结果`)),e});g(()=>y(e,fe,pe))});let I=p(`section`,_);m(_,I),i(I,`rounded-box border border-base-300 p-4`);let L=p(`div`,I);m(I,L),i(L,`mb-3 flex flex-wrap items-start justify-between gap-2`);let R=p(`div`,L);m(L,R);let me=p(`h2`,R);m(R,me),i(me,`text-lg font-semibold`),m(me,u(`手动 triggerRef`));let he=p(`p`,R);m(R,he),i(he,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),m(he,u(`这里的 setter 只把新值暂存在闭包里，不会自动通知 effect。先点“仅运行 setter”会看到暂存值变了，但日志里的 effect 不会变；再点 triggerRef 才会发布。`));let z=p(`div`,L);m(L,z),i(z,`flex flex-wrap gap-2`);let ge=p(`button`,z);m(z,ge),i(ge,`btn btn-sm btn-outline`),d(ge,`click`,e.stageManualValue),m(ge,u(`仅运行 setter`));let _e=p(`button`,z);m(z,_e),i(_e,`btn btn-sm btn-primary`),d(_e,`click`,e.publishManualValue),m(_e,u(`发布 triggerRef`));let B=p(`div`,I);m(I,B),i(B,`mb-3 rounded-box border border-base-300 bg-base-200/40 p-4`);let ve=p(`div`,B);m(B,ve),i(ve,`text-sm text-base-content/60`),m(ve,u(`暂存值`));let ye=p(`div`,B);m(B,ye),i(ye,`mt-1 text-xl font-semibold`);let be=l(ye);m(ye,be),h(()=>{r(be,e.manualInput.value)});let xe=o(`rue:slot:anchor`);m(I,xe),h(()=>{let t=E(e.manualLog.value);g(()=>y(t,I,xe))});let V=p(`section`,_);m(_,V),i(V,`rounded-box border border-base-300 p-4`);let H=p(`div`,V);m(V,H),i(H,`mb-3 flex flex-wrap items-start justify-between gap-2`);let U=p(`div`,H);m(H,U);let Se=p(`h2`,U);m(U,Se),i(Se,`text-lg font-semibold`),m(Se,u(`条件 track`));let Ce=p(`p`,U);m(U,Ce),i(Ce,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),m(Ce,u(`getter 可以自己决定是否调用 track。未开启 track 时，即使 setter 调用了 trigger，也没有订阅者会被唤醒；开启后，下一次写入才会触发 effect 日志。`));let W=p(`div`,H);m(H,W),i(W,`flex flex-wrap gap-2`);let G=p(`button`,W);m(W,G),i(G,`btn btn-sm btn-outline`),d(G,`click`,e.toggleConditionalTracking);let we=l(G);m(G,we),h(()=>{r(we,e.conditionalTracking.value?`关闭 track`:`开启 track`)});let Te=p(`button`,W);m(W,Te),i(Te,`btn btn-sm btn-primary`),d(Te,`click`,e.mutateConditionalValue),m(Te,u(`写入并 trigger`));let Ee=o(`rue:slot:anchor`);m(V,Ee),h(()=>{let t=E(e.conditionalLog.value);g(()=>y(t,V,Ee))});let K=p(`section`,_);m(_,K),i(K,`rounded-box border border-base-300 p-4`);let q=p(`div`,K);m(K,q),i(q,`mb-3 flex flex-wrap items-start justify-between gap-2`);let J=p(`div`,q);m(q,J);let De=p(`h2`,J);m(J,De),i(De,`text-lg font-semibold`),m(De,u(`watch source`));let Oe=p(`p`,J);m(J,Oe),i(Oe,`mt-1 max-w-3xl text-sm leading-6 text-base-content/70`),m(Oe,u(`customRef 带 ref 标记，所以可以直接作为 watch 的 source，也可以和普通 ref 一起放进数组 source。下面的日志会分别记录这两种 watch 的回调。`));let Y=p(`div`,q);m(q,Y),i(Y,`flex flex-wrap gap-2`);let ke=p(`button`,Y);m(Y,ke),i(ke,`btn btn-sm btn-primary`),d(ke,`click`,e.bumpWatchedValue),m(ke,u(`更新 customRef`));let X=p(`button`,Y);m(Y,X),i(X,`btn btn-sm btn-outline`),d(X,`click`,e.flipWatchPartner),m(X,u(`切换搭档 `));let Ae=l(X);m(X,Ae),h(()=>{r(Ae,e.partner.value)});let Z=p(`div`,K);m(K,Z),i(Z,`mb-3 grid gap-3 md:grid-cols-2`);let Q=p(`div`,Z);m(Z,Q),i(Q,`rounded-box border border-base-300 bg-base-200/40 p-4`);let je=p(`div`,Q);m(Q,je),i(je,`text-sm text-base-content/60`),m(je,u(`customRef 数据源`));let Me=p(`div`,Q);m(Q,Me),i(Me,`mt-1 text-xl font-semibold`);let Ne=l(Me);m(Me,Ne),h(()=>{r(Ne,e.watchedDisplay.value)});let $=p(`div`,Z);m(Z,$),i($,`rounded-box border border-base-300 bg-base-200/40 p-4`);let Pe=p(`div`,$);m($,Pe),i(Pe,`text-sm text-base-content/60`),m(Pe,u(`数组 source 搭档`));let Fe=p(`div`,$);m($,Fe),i(Fe,`mt-1 text-xl font-semibold`);let Ie=l(Fe);m(Fe,Ie),h(()=>{r(Ie,e.partner.value)});let Le=o(`rue:slot:anchor`);return m(K,Le),h(()=>{let t=E(e.watchLog.value);g(()=>y(t,K,Le))}),a})}});export{D as default};