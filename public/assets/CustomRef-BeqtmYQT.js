import{An as e,At as t,C as n,Dn as r,Dt as i,E as a,F as o,J as s,Kt as c,P as l,Q as u,Qt as d,Vt as f,Y as p,_n as m,_t as h,at as g,b as _,ct as v,et as y,gn as b,kn as x,mn as S,nt as C,pn as w,qt as T,sn as E,tn as D,ut as O,vn as k,w as A,wn as j,xn as ee}from"./rue-runtime-HIMg8Lz8.js";import{t as M}from"./createHomeSplitExamplePage-DNdswIPW.js";var N=k(`<li><span><!--rue:text-hole:0--></span></li>`),P=k(`<ul class="menu rounded-box bg-base-200/40"><!--rue:text-hole:0--></ul>`),te=k(`<div class="card bg-base-100 shadow"><div class="card-body gap-6"><div class="rounded-box border border-info/30 bg-info/10 p-4 text-sm leading-6 text-base-content/80">这个页面把 customRef 拆成四个小实验：先看最常见的防抖输入，再看 setter 可以只改内部值、什么时候通知由 trigger 决定；后面两个实验展示 getter 可以决定是否收集依赖，以及 customRef 能作为 watch 的数据源。</div><section class="rounded-box border border-base-300 p-4"><div class="mb-3 flex flex-wrap items-start justify-between gap-2"><div><h2 class="text-lg font-semibold">防抖 setter</h2><p class="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">输入框的值会立刻变化，但 customRef 的 setter 会等 600ms 后才写入并调用 trigger，所以匹配结果只按防抖后的值更新。</p></div><button class="btn btn-sm">使用 customRef</button></div><div class="flex flex-col gap-2"><span class="text-sm font-medium text-base-content/70">搜索关键词</span><input class="input input-bordered w-full"></div><div class="mt-4 grid gap-3 md:grid-cols-3"><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">输入值</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:0--></div></div><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">customRef 值</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:1--></div></div><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">状态</div><div><!--rue:text-hole:2--></div></div></div><div class="mt-4"><h3 class="mb-2 text-sm font-medium text-base-content/70">匹配结果</h3><ul class="menu rounded-box bg-base-200/40"><!--rue:text-hole:3--></ul></div></section><section class="rounded-box border border-base-300 p-4"><div class="mb-3 flex flex-wrap items-start justify-between gap-2"><div><h2 class="text-lg font-semibold">手动 triggerRef</h2><p class="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">这里的 setter 只把新值暂存在闭包里，不会自动通知 effect。先点“仅运行 setter”会看到暂存值变了，但日志里的 effect 不会变；再点 triggerRef 才会发布。</p></div><div class="flex flex-wrap gap-2"><button class="btn btn-sm btn-outline">仅运行 setter</button><button class="btn btn-sm btn-primary">发布 triggerRef</button></div></div><div class="mb-3 rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">暂存值</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:4--></div></div><!--rue:text-hole:5--></section><section class="rounded-box border border-base-300 p-4"><div class="mb-3 flex flex-wrap items-start justify-between gap-2"><div><h2 class="text-lg font-semibold">条件 track</h2><p class="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">getter 可以自己决定是否调用 track。未开启 track 时，即使 setter 调用了 trigger，也没有订阅者会被唤醒；开启后，下一次写入才会触发 effect 日志。</p></div><div class="flex flex-wrap gap-2"><button class="btn btn-sm btn-outline"><!--rue:text-hole:6--></button><button class="btn btn-sm btn-primary">写入并 trigger</button></div></div><!--rue:text-hole:7--></section><section class="rounded-box border border-base-300 p-4"><div class="mb-3 flex flex-wrap items-start justify-between gap-2"><div><h2 class="text-lg font-semibold">watch source</h2><p class="mt-1 max-w-3xl text-sm leading-6 text-base-content/70">customRef 带 ref 标记，所以可以直接作为 watch 的 source，也可以和普通 ref 一起放进数组 source。下面的日志会分别记录这两种 watch 的回调。</p></div><div class="flex flex-wrap gap-2"><button class="btn btn-sm btn-primary">更新 customRef</button><button class="btn btn-sm btn-outline">切换搭档 <!--rue:text-hole:8--></button></div></div><div class="mb-3 grid gap-3 md:grid-cols-2"><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">customRef 数据源</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:9--></div></div><div class="rounded-box border border-base-300 bg-base-200/40 p-4"><div class="text-sm text-base-content/60">数组 source 搭档</div><div class="mt-1 text-xl font-semibold"><!--rue:text-hole:10--></div></div></div><!--rue:text-hole:11--></section></div></div>`),F=[`customRef`,`debounced ref`,`manual trigger`,`vapor runtime`,`watchEffect`,`shallowRef`],I=(e,t=600)=>{let n=e,r;return o((e,i)=>({get(){return e(),n},set(e){r!==void 0&&clearTimeout(r),r=setTimeout(()=>{n=e,r=void 0,i()},t)}}))},L=(e,t,n)=>{t.unshift(n),e.value=t.slice(0,5)},R=()=>{let t=E(`ref:1:0`,()=>D(`vapor`)),n=I(`vapor`),r=E(`ref:1:1`,()=>D(!1));E(`watchEffect:1:2`,()=>e(()=>{r.value=t.value!==n.value}));let i=1,a=0,c=E(`ref:1:3`,()=>D(1)),l=E(`ref:1:4`,()=>D([])),u=[],d=o((e,t)=>({get(){return e(),i},set(e){i=e}}));E(`watchEffect:1:5`,()=>e(()=>{let e=d.value;a++,L(l,u,`effect #${a} 看到 value = ${e}`)}));let f=()=>{let e=c.value+1;c.value=e,L(l,u,`setter 暂存 ${e}，还没有通知 effect`),d.value=e},m=()=>{L(l,u,`调用 triggerRef(manual)，发布暂存值`),s(d)},h=1,g=0,_=E(`ref:1:6`,()=>D(!1)),v=E(`ref:1:7`,()=>D([])),y=[],b=o((e,t)=>({get(){return _.value&&e(),h},set(e){h=e,t()}}));E(`watchEffect:1:8`,()=>e(()=>{let e=b.value;g++,L(v,y,`effect #${g} 看到 ${e}（${_.value?`已 track`:`未 track`}）`)}));let x=()=>{let e=h+1;L(v,y,`写入 ${e}，并调用 trigger()`),b.value=e},S=()=>{_.value=!_.value,L(v,y,_.value?`track 已开启`:`track 已关闭`)},C=1,w=E(`ref:1:9`,()=>D(1)),T=E(`ref:1:10`,()=>D(`A`)),O=E(`ref:1:11`,()=>D([])),k=[],A=o((e,t)=>({get(){return e(),C},set(e){C=e,t()}}));return E(`watch:1:12`,()=>p(A,(e,t)=>{L(O,k,`watch(customRef) 收到：${t} -> ${e}`)})),E(`watch:1:13`,()=>p([A,T],(e,t)=>{L(O,k,`watch([customRef, ref]) 收到：[${t.join(`, `)}] -> [${e.join(`, `)}]`)})),{bumpWatchedValue:()=>{let e=C+1;w.value=e,A.value=e},conditionalLog:v,conditionalTracking:_,draft:t,flipWatchPartner:()=>{T.value=T.value===`A`?`B`:`A`},manualInput:c,manualLog:l,mutateConditionalValue:x,partner:T,pending:r,publishManualValue:m,query:n,stageManualValue:f,toggleConditionalTracking:S,watchLog:O,watchedDisplay:w}},z=e=>{let n=g(e.length),r=g(e.map);return v(t(()=>{let e=h(),i=P().content.cloneNode(!0),a=i.firstChild.childNodes[0],o=a.parentNode;return e.appendChild(i),j(()=>{let e=n.get()?r.get()(e=>t(t=>{let n=N().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],i=r.parentNode;return j(()=>{let t=e;x(()=>O(t,i,r))}),n})):f(Object.assign(e=>{let t=b(`li`,e),n=b(`span`,t);return w(t,n),w(n,m(`等待操作`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}));x(()=>O(e,o,a))}),e},!0),e=>y(()=>{n.set(e.length),r.set(e.map)}),()=>e)},B=M({title:`customRef 自定义 ref`,source:`import {
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
`,Demo:()=>{let[e]=c(`CustomRefDemo:hook:0`,R),o=l(()=>{let t=e.get().query.value.trim().toLowerCase();return t?F.filter(e=>e.toLowerCase().includes(t)):F}),s=t=>{e.get().draft.value=t,e.get().query.value=t};return T(()=>v(t(()=>{let t=h(),c=te().content.cloneNode(!0),l=c.firstChild,p=l.childNodes[0].childNodes[1].childNodes[0].childNodes[1],v=l.childNodes[0].childNodes[1].childNodes[1].childNodes[1],y=l.childNodes[0].childNodes[1].childNodes[2].childNodes[2].childNodes[1],T=l.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[0],E=l.childNodes[0].childNodes[2].childNodes[0].childNodes[1].childNodes[1],D=l.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0],k=l.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[1],M=l.childNodes[0].childNodes[4].childNodes[0].childNodes[1].childNodes[0],N=l.childNodes[0].childNodes[4].childNodes[0].childNodes[1].childNodes[1],P=l.childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],F=P.parentNode,I=l.childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],L=I.parentNode,R=l.childNodes[0].childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],B=R.parentNode,V=l.childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[0],ne=V.parentNode,H=l.childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[0],re=H.parentNode,U=l.childNodes[0].childNodes[2].childNodes[2],ie=U.parentNode,W=l.childNodes[0].childNodes[3].childNodes[0].childNodes[1].childNodes[0].childNodes[0],ae=W.parentNode,G=l.childNodes[0].childNodes[3].childNodes[1],oe=G.parentNode,K=l.childNodes[0].childNodes[4].childNodes[0].childNodes[1].childNodes[1].childNodes[1],se=K.parentNode,q=l.childNodes[0].childNodes[4].childNodes[1].childNodes[0].childNodes[1].childNodes[0],ce=q.parentNode,J=l.childNodes[0].childNodes[4].childNodes[1].childNodes[1].childNodes[1].childNodes[0],le=J.parentNode,Y=l.childNodes[0].childNodes[4].childNodes[2],ue=Y.parentNode;t.appendChild(c),u(p,`btn btn-sm`);let X=e=>{let t=()=>{s(`customRef`)};typeof t==`function`&&t(e)};p.addEventListener(`click`,X),d(()=>p.removeEventListener(`click`,X)),u(v,`input input-bordered w-full`),j(()=>{i(v,e.get().draft.value)});let Z=e=>{let t=e=>{s(e.target.value)};typeof t==`function`&&t(e)};v.addEventListener(`input`,Z),d(()=>v.removeEventListener(`input`,Z)),j(()=>{u(y,`badge mt-2 ${e.get().pending.value?`badge-warning`:`badge-success`}`)}),u(T,`btn btn-sm btn-outline`);let Q=t=>{let n=e.get().stageManualValue;typeof n==`function`&&n(t)};T.addEventListener(`click`,Q),d(()=>T.removeEventListener(`click`,Q)),u(E,`btn btn-sm btn-primary`);let $=t=>{let n=e.get().publishManualValue;typeof n==`function`&&n(t)};E.addEventListener(`click`,$),d(()=>E.removeEventListener(`click`,$)),u(D,`btn btn-sm btn-outline`);let de=t=>{let n=e.get().toggleConditionalTracking;typeof n==`function`&&n(t)};D.addEventListener(`click`,de),d(()=>D.removeEventListener(`click`,de)),u(k,`btn btn-sm btn-primary`);let fe=t=>{let n=e.get().mutateConditionalValue;typeof n==`function`&&n(t)};k.addEventListener(`click`,fe),d(()=>k.removeEventListener(`click`,fe)),u(M,`btn btn-sm btn-primary`);let pe=t=>{let n=e.get().bumpWatchedValue;typeof n==`function`&&n(t)};M.addEventListener(`click`,pe),d(()=>M.removeEventListener(`click`,pe)),u(N,`btn btn-sm btn-outline`);let me=t=>{let n=e.get().flipWatchPartner;typeof n==`function`&&n(t)};return N.addEventListener(`click`,me),d(()=>N.removeEventListener(`click`,me)),j(()=>{let t=e.get().draft.value||`empty`;x(()=>O(t,F,P))}),j(()=>{let t=e.get().query.value||`empty`;x(()=>O(t,L,I))}),j(()=>{let t=e.get().pending.value?`等待提交`:`已同步`;x(()=>O(t,B,R))}),C(ne,V,()=>o.get().length?{__rue_compiled_branch_key:!0,create:()=>f(Object.assign(e=>{let t=h(),i=S(`rue:list:end`);w(t,i);let s=[];return j(()=>{let e=o.get()||[];s=A(i.parentNode,i,s,e,(e,t)=>e,(e,t)=>{let r=g(e);return n((e,t,n)=>a(e,n,()=>f(Object.assign(e=>{let t=b(`li`,e),n=b(`span`,t);w(t,n);let i=m(``);return w(n,i),ee(i,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,i)=>{e=n,t=i,r.set(n)})})}),r(()=>_(s)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>f(Object.assign(e=>{let t=b(`li`,e),n=b(`span`,t);return w(t,n),w(n,m(`没有匹配结果`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),j(()=>{let t=e.get().manualInput.value;x(()=>O(t,re,H))}),j(()=>{let t=z(e.get().manualLog.value);x(()=>O(t,ie,U))}),j(()=>{let t=e.get().conditionalTracking.value?`关闭 track`:`开启 track`;x(()=>O(t,ae,W))}),j(()=>{let t=z(e.get().conditionalLog.value);x(()=>O(t,oe,G))}),j(()=>{let t=e.get().partner.value;x(()=>O(t,se,K))}),j(()=>{let t=e.get().watchedDisplay.value;x(()=>O(t,ce,q))}),j(()=>{let t=e.get().partner.value;x(()=>O(t,le,J))}),j(()=>{let t=z(e.get().watchLog.value);x(()=>O(t,ue,Y))}),t},!0),e=>y(()=>{})))}});export{B as default};