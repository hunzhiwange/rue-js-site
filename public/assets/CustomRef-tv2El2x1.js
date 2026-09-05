import{An as e,Bt as t,C as n,Et as r,L as i,Lt as a,Mt as o,S as s,Sn as c,V as l,W as u,Xt as d,Y as f,_n as p,bn as m,dn as h,fn as g,ft as _,gn as v,hn as y,ht as b,jt as x,kn as S,nt as C,pn as w,q as T,qt as E,un as D,wn as O,x as k,z as A}from"./rue-runtime-CwEGJ854.js";import{t as j}from"./createHomeSplitExamplePage-DuLZTUZH.js";var M=p(`<li><span><!--rue:text-hole:0--></span></li>`),N=p(`<ul class="menu rounded-box bg-base-200/40"><!--rue:text-hole:0--></ul>`),ee=p(`<div class="card bg-base-100 shadow"><div class="card-body gap-6"><div class="rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80">这个页面把 customRef 拆成四个小实验：先看最常见的防抖输入，再看 setter 可以只改内部值、什么时候通知由 trigger 决定；后面两个实验展示 getter 可以决定是否收集依赖，以及 customRef 能作为 watch 的数据源。</div><section class="rounded-box border border-base-300 p-4"><div class="mb-3 flex flex-wrap items-start justify-between gap-2"><div><h2 class="text-lg font-semibold">防抖 setter</h2><p class="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">输入框的值会立刻变化，但 customRef 的 setter 会等 600ms 后才写入并调用 trigger，所以匹配结果只按防抖后的值更新。</p></div><button class="btn btn-sm">使用 customRef</button></div><div class="flex flex-col gap-2"><span class="text-sm font-medium text-base-content/70">搜索关键词</span><input class="input input-bordered w-full"></div><div class="mt-4 grid gap-3 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">输入值</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:0--></div></div><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">customRef 值</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">状态</div><div><!--rue:text-hole:2--></div></div></div><div class="mt-4"><h3 class="mb-2 text-sm font-medium text-base-content/70">匹配结果</h3><ul class="menu rounded-box bg-base-200/40"><!--rue:text-hole:3--></ul></div></section><section class="rounded-box border border-base-300 p-4"><div class="mb-3 flex flex-wrap items-start justify-between gap-2"><div><h2 class="text-lg font-semibold">手动 triggerRef</h2><p class="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">这里的 setter 只把新值暂存在闭包里，不会自动通知 effect。先点“仅运行 setter”会看到暂存值变了，但日志里的 effect 不会变；再点 triggerRef 才会发布。</p></div><div class="flex flex-wrap gap-2"><button class="btn btn-sm btn-outline">仅运行 setter</button><button class="btn btn-sm btn-primary">发布 triggerRef</button></div></div><div class="mb-3 rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">暂存值</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:4--></div></div><!--rue:text-hole:5--></section><section class="rounded-box border border-base-300 p-4"><div class="mb-3 flex flex-wrap items-start justify-between gap-2"><div><h2 class="text-lg font-semibold">条件 track</h2><p class="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">getter 可以自己决定是否调用 track。未开启 track 时，即使 setter 调用了 trigger，也没有订阅者会被唤醒；开启后，下一次写入才会触发 effect 日志。</p></div><div class="flex flex-wrap gap-2"><button class="btn btn-sm btn-outline"><!--rue:text-hole:6--></button><button class="btn btn-sm btn-primary">写入并 trigger</button></div></div><!--rue:text-hole:7--></section><section class="rounded-box border border-base-300 p-4"><div class="mb-3 flex flex-wrap items-start justify-between gap-2"><div><h2 class="text-lg font-semibold">watch source</h2><p class="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">customRef 带 ref 标记，所以可以直接作为 watch 的 source，也可以和普通 ref 一起放进数组 source。下面的日志会分别记录这两种 watch 的回调。</p></div><div class="flex flex-wrap gap-2"><button class="btn btn-sm btn-primary">更新 customRef</button><button class="btn btn-sm btn-outline">切换搭档 <!--rue:text-hole:8--></button></div></div><div class="mb-3 grid gap-3 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">customRef 数据源</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:9--></div></div><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">数组 source 搭档</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:10--></div></div></div><!--rue:text-hole:11--></section></div></div>`),P=[`customRef`,`debounced ref`,`manual trigger`,`vapor runtime`,`watchEffect`,`shallowRef`],F=(e,t=600)=>{let n=e,r;return d((e,i)=>({get(){return e(),n},set(e){r!==void 0&&clearTimeout(r),r=setTimeout(()=>{n=e,r=void 0,i()},t)}}))},I=(e,t,n)=>{t.unshift(n),e.value=t.slice(0,5)},L=()=>{let n=E(`ref:1:0`,()=>t(`vapor`)),r=F(`vapor`),i=E(`ref:1:1`,()=>t(!1));E(`watchEffect:1:2`,()=>e(()=>{i.value=n.value!==r.value}));let a=1,o=0,s=E(`ref:1:3`,()=>t(1)),c=E(`ref:1:4`,()=>t([])),l=[],u=d((e,t)=>({get(){return e(),a},set(e){a=e}}));E(`watchEffect:1:5`,()=>e(()=>{let e=u.value;o++,I(c,l,`effect #${o} 看到 value = ${e}`)}));let f=()=>{let e=s.value+1;s.value=e,I(c,l,`setter 暂存 ${e}，还没有通知 effect`),u.value=e},p=()=>{I(c,l,`调用 triggerRef(manual)，发布暂存值`),D(u)},m=1,g=0,_=E(`ref:1:6`,()=>t(!1)),v=E(`ref:1:7`,()=>t([])),y=[],b=d((e,t)=>({get(){return _.value&&e(),m},set(e){m=e,t()}}));E(`watchEffect:1:8`,()=>e(()=>{let e=b.value;g++,I(v,y,`effect #${g} 看到 ${e}（${_.value?`已 track`:`未 track`}）`)}));let x=()=>{let e=m+1;I(v,y,`写入 ${e}，并调用 trigger()`),b.value=e},S=()=>{_.value=!_.value,I(v,y,_.value?`track 已开启`:`track 已关闭`)},C=1,w=E(`ref:1:9`,()=>t(1)),T=E(`ref:1:10`,()=>t(`A`)),O=E(`ref:1:11`,()=>t([])),k=[],A=d((e,t)=>({get(){return e(),C},set(e){C=e,t()}}));return E(`watch:1:12`,()=>h(A,(e,t)=>{I(O,k,`watch(customRef) 收到：${t} -> ${e}`)})),E(`watch:1:13`,()=>h([A,T],(e,t)=>{I(O,k,`watch([customRef, ref]) 收到：[${t.join(`, `)}] -> [${e.join(`, `)}]`)})),{bumpWatchedValue:()=>{let e=C+1;w.value=e,A.value=e},conditionalLog:v,conditionalTracking:_,draft:n,flipWatchPartner:()=>{T.value=T.value===`A`?`B`:`A`},manualInput:s,manualLog:c,mutateConditionalValue:x,partner:T,pending:i,publishManualValue:p,query:r,stageManualValue:f,toggleConditionalTracking:S,watchLog:O,watchedDisplay:w}},R=e=>{let t=u(e.length),n=u(e.map);return T(b(()=>{let e=C(),i=N().content.cloneNode(!0),a=i.firstChild.childNodes[0],o=a.parentNode;return e.appendChild(i),O(()=>{let e=t.get()?n.get()(e=>b(t=>{let n=M().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode;return O(()=>{let t=e;S(()=>f(t,i,r))}),n})):r(Object.assign(e=>{let t=y(`li`,e),n=y(`span`,t);return g(t,n),g(n,v(`等待操作`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}));S(()=>f(e,o,a))}),e},!0),e=>A(()=>{t.set(e.length),n.set(e.map)}),()=>e)},z=j({title:`customRef 自定义 ref`,source:`import {
  computed,
  customRef,
  type FC,
  ref,
  triggerRef,
  useState,
  watch,
  watchEffect,
} from '@rue-js/rue'

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
  const matches = computed<string[]>(() => {
    const normalizedQuery = state.query.value.trim().toLowerCase()
    return normalizedQuery
      ? searchItems.filter(item => item.toLowerCase().includes(normalizedQuery))
      : searchItems
  })

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
              {matches.get().length ? (
                matches.get().map(item => (
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
`,Demo:()=>{let[e]=x(`CustomRefDemo:hook:0`,L),t=c(()=>{let t=e.query.value.trim().toLowerCase();return t?P.filter(e=>e.toLowerCase().includes(t)):P}),d=t=>{e.draft.value=t,e.query.value=t};return o(()=>T(b(()=>{let o=C(),c=ee().content.cloneNode(!0),p=c.firstChild,h=p.childNodes[0].childNodes[1].childNodes[0].childNodes[1],b=p.childNodes[0].childNodes[1].childNodes[1].childNodes[1],x=p.childNodes[0].childNodes[1].childNodes[2].childNodes[2].childNodes[1],T=p.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],E=p.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[1],D=p.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],A=p.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[1],j=p.childNodes[0].childNodes[4].childNodes[0].childNodes[1].childNodes[0],M=p.childNodes[0].childNodes[4].childNodes[0].childNodes[1].childNodes[1],N=p.childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],P=N.parentNode,F=p.childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],I=F.parentNode,L=p.childNodes[0].childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],z=L.parentNode,B=p.childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[0],te=B.parentNode,V=p.childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],ne=V.parentNode,H=p.childNodes[0].childNodes[2].childNodes[2],re=H.parentNode,U=p.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[0],ie=U.parentNode,W=p.childNodes[0].childNodes[3].childNodes[1],ae=W.parentNode,G=p.childNodes[0].childNodes[4].childNodes[0].childNodes[1].childNodes[1].childNodes[1],oe=G.parentNode,K=p.childNodes[0].childNodes[4].childNodes[1].childNodes[0].childNodes[1].childNodes[0],se=K.parentNode,q=p.childNodes[0].childNodes[4].childNodes[1].childNodes[1].childNodes[1].childNodes[0],ce=q.parentNode,J=p.childNodes[0].childNodes[4].childNodes[2],le=J.parentNode;o.appendChild(c),i(h,`btn btn-sm`);let Y=e=>{let t=()=>{d(`customRef`)};typeof t==`function`&&t(e)};h.addEventListener(`click`,Y),a(()=>h.removeEventListener(`click`,Y)),i(b,`input input-bordered w-full`),O(()=>{_(b,e.draft.value)});let X=e=>{let t=e=>{d(e.target.value)};typeof t==`function`&&t(e)};b.addEventListener(`input`,X),a(()=>b.removeEventListener(`input`,X)),O(()=>{i(x,`badge mt-2 ${e.pending.value?`badge-warning`:`badge-success`}`)}),i(T,`btn btn-sm btn-outline`);let Z=t=>{let n=e.stageManualValue;typeof n==`function`&&n(t)};T.addEventListener(`click`,Z),a(()=>T.removeEventListener(`click`,Z)),i(E,`btn btn-sm btn-primary`);let Q=t=>{let n=e.publishManualValue;typeof n==`function`&&n(t)};E.addEventListener(`click`,Q),a(()=>E.removeEventListener(`click`,Q)),i(D,`btn btn-sm btn-outline`);let $=t=>{let n=e.toggleConditionalTracking;typeof n==`function`&&n(t)};D.addEventListener(`click`,$),a(()=>D.removeEventListener(`click`,$)),i(A,`btn btn-sm btn-primary`);let ue=t=>{let n=e.mutateConditionalValue;typeof n==`function`&&n(t)};A.addEventListener(`click`,ue),a(()=>A.removeEventListener(`click`,ue)),i(j,`btn btn-sm btn-primary`);let de=t=>{let n=e.bumpWatchedValue;typeof n==`function`&&n(t)};j.addEventListener(`click`,de),a(()=>j.removeEventListener(`click`,de)),i(M,`btn btn-sm btn-outline`);let fe=t=>{let n=e.flipWatchPartner;typeof n==`function`&&n(t)};return M.addEventListener(`click`,fe),a(()=>M.removeEventListener(`click`,fe)),l(P,N,()=>{let t=e.draft.value;return t?{__rue_compiled_branch_key:t,create:()=>r(Object.assign(e=>{let n=v(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=v(`empty`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),l(I,F,()=>{let t=e.query.value;return t?{__rue_compiled_branch_key:t,create:()=>r(Object.assign(e=>{let n=v(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=v(`empty`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),l(z,L,()=>e.pending.value?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=v(`等待提交`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=v(`已同步`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),l(te,B,()=>t.get().length?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let i=C(),a=w(`rue:list:end`);g(i,a);let o=[];return O(()=>{let e=t.get()||[];o=n(a.parentNode,a,o,e,(e,t)=>e,(e,t)=>{let n=u(e),i=u(t);return s((e,t,i)=>k(e,i,()=>r(Object.assign(e=>{let t=y(`li`,e),r=y(`span`,t);g(t,r);let i=v(``);return g(r,i),m(i,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=y(`li`,e),n=y(`span`,t);return g(t,n),g(n,v(`没有匹配结果`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),O(()=>{let t=e.manualInput.value;S(()=>f(t,ne,V))}),O(()=>{let t=R(e.manualLog.value);S(()=>f(t,re,H))}),l(ie,U,()=>e.conditionalTracking.value?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=v(`关闭 track`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=v(`开启 track`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),O(()=>{let t=R(e.conditionalLog.value);S(()=>f(t,ae,W))}),O(()=>{let t=e.partner.value;S(()=>f(t,oe,G))}),O(()=>{let t=e.watchedDisplay.value;S(()=>f(t,se,K))}),O(()=>{let t=e.partner.value;S(()=>f(t,ce,q))}),O(()=>{let t=R(e.watchLog.value);S(()=>f(t,le,J))}),o},!0),e=>A(()=>{})))}});export{z as default};