import{Bt as e,Et as t,K as n,L as r,Lt as i,Mt as a,Sn as o,V as s,W as c,Wt as l,X as u,Y as d,_n as f,_t as p,b as m,bn as h,fn as g,ft as _,gn as v,hn as y,ht as ee,it as b,kn as x,mn as S,nt as te,ot as C,q as w,qt as T,rt as E,st as ne,tt as re,wn as D,x as ie,z as O}from"./rue-runtime-CwEGJ854.js";import{t as k}from"./Code-DUvGro8N.js";import{r as A}from"./SidebarPlaygroundExample-EGR0CyDT.js";var j=`import { computed, ref, type FC, useSetup } from '@rue-js/rue'
import propsSetupBoundarySource from './PropsSetupBoundary.tsx?raw'
import SidebarPlayground from '../site/SidebarPlaygroundExample'
import Code from '../site/components/Code'

type DemoProps = {
  query: string
  count: number
}

type NestedDemoProps = {
  options?: {
    query?: string
    meta?: {
      label?: string
    }
  }
  counts?: [number?, number?]
}

const CaseCard: FC<{ title: string; note: string; children?: any }> = props => {
  return (
    <section className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold leading-tight">{props.title}</h2>
          <p className="text-sm text-base-content/70 leading-6">{props.note}</p>
        </div>
        <div className="grid gap-2 text-sm text-base-content/85">{props.children}</div>
      </div>
    </section>
  )
}

const FieldRow: FC<{
  label: string
  value: any
  tone?: 'default' | 'success' | 'warning'
}> = props => {
  const toneClassName =
    props.tone === 'success'
      ? 'border-success/30 bg-success/10 text-success'
      : props.tone === 'warning'
        ? 'border-warning/30 bg-warning/10 text-warning'
        : 'border-base-300/70 bg-base-200/60 text-base-content/80'

  return (
    <div className="grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5">
      <span className="text-xs uppercase tracking-[0.18em] text-base-content/45">
        {props.label}
      </span>
      <span
        className={\`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm \${toneClassName}\`}
      >
        {String(props.value)}
      </span>
    </div>
  )
}

const RenderPhaseChild: FC<DemoProps> = ({ query, count }) => {
  const normalized = query.trim().toUpperCase() || '(empty)'
  const summary = \`\${normalized} x \${count}\`

  return (
    <div className="grid gap-2">
      <FieldRow label="normalized" value={normalized} tone="success" />
      <FieldRow label="summary" value={summary} tone="success" />
      <FieldRow label="mode" value="render 期直接读取解构 props" />
    </div>
  )
}

const ManualOnceSetupChild: FC<DemoProps> = ({ query, count }) => {
  const setupState = useSetup(() => {
    const searchConfig = { defaultValue: query.trim().toUpperCase() || '(empty)' }
    const searchValueRef = ref(searchConfig.defaultValue)
    const pageRef = ref(count)

    return {
      searchConfig,
      searchValueRef,
      pageRef,
    }
  })

  return (
    <div className="grid gap-2">
      <FieldRow
        label="searchConfig.defaultValue"
        value={setupState.searchConfig.defaultValue}
        tone="warning"
      />
      <FieldRow
        label="searchValueRef.value"
        value={setupState.searchValueRef.value}
        tone="warning"
      />
      <FieldRow label="pageRef.value" value={setupState.pageRef.value} tone="warning" />
      <FieldRow label="mode" value="手写 useSetup，一次性捕获解构 props" />
    </div>
  )
}

const ReactivePropsObjectSetupChild: FC<DemoProps> = props => {
  const setupState = useSetup(() => ({
    normalized: computed(() => props.query.trim().toUpperCase() || '(empty)'),
    summary: computed(() => \`\${props.query.trim().toUpperCase() || '(empty)'} x \${props.count}\`),
  }))

  return (
    <div className="grid gap-2">
      <FieldRow label="normalized.get()" value={setupState.normalized.get()} tone="success" />
      <FieldRow label="summary.get()" value={setupState.summary.get()} tone="success" />
      <FieldRow label="mode" value="useSetup 内改用 props 对象 + computed" />
    </div>
  )
}

const ReactiveDestructuredComputedSetupChild: FC<DemoProps> = ({ query, count }) => {
  const setupState = useSetup(() => ({
    normalized: computed(() => query.trim().toUpperCase() || '(empty)'),
    summary: computed(() => \`\${query.trim().toUpperCase() || '(empty)'} x \${count}\`),
  }))

  return (
    <div className="grid gap-2">
      <FieldRow label="normalized.get()" value={setupState.normalized.get()} tone="success" />
      <FieldRow label="summary.get()" value={setupState.summary.get()} tone="success" />
      <FieldRow
        label="mode"
        value="useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取"
      />
    </div>
  )
}

const NestedReactiveDestructuredComputedSetupChild: FC<NestedDemoProps> = ({
  options: { query = ' nested-default ', meta: { label: text = 'fallback-label' } = {} } = {},
  counts: [first = 1, second = 2] = [],
}) => {
  const setupState = useSetup(() => ({
    normalized: computed(() => query.trim().toUpperCase() || '(empty)'),
    total: computed(() => first + second),
    summary: computed(
      () => \`\${text}:\${query.trim().toUpperCase() || '(empty)'} x \${first + second}\`,
    ),
    tuple: computed(() => \`\${first}-\${second}\`),
  }))

  return (
    <div className="grid gap-2">
      <FieldRow label="normalized.get()" value={setupState.normalized.get()} tone="success" />
      <FieldRow label="total.get()" value={setupState.total.get()} tone="success" />
      <FieldRow label="summary.get()" value={setupState.summary.get()} tone="success" />
      <FieldRow label="tuple.get()" value={setupState.tuple.get()} tone="success" />
      <FieldRow label="mode" value="nested 解构 + 默认值/别名 + computed，仍然保持响应式" />
    </div>
  )
}

const NestedSnapshotSetupChild: FC<NestedDemoProps> = ({
  options: { query = ' nested-default ', meta: { label: text = 'fallback-label' } = {} } = {},
  counts: [first = 1, second = 2] = [],
}) => {
  const setupState = useSetup(() => {
    const normalized = query.trim().toUpperCase() || '(empty)'
    const total = first + second
    const summary = \`\${text}:\${normalized} x \${total}\`
    const tuple = \`\${first}-\${second}\`

    return {
      normalized,
      total,
      summary,
      tuple,
    }
  })

  return (
    <div className="grid gap-2">
      <FieldRow label="normalized" value={setupState.normalized} tone="warning" />
      <FieldRow label="total" value={setupState.total} tone="warning" />
      <FieldRow label="summary" value={setupState.summary} tone="warning" />
      <FieldRow label="tuple" value={setupState.tuple} tone="warning" />
      <FieldRow label="mode" value="nested 解构后如果先算成一次性快照，仍然只会取首帧" />
    </div>
  )
}

const PropsSetupBoundary: FC = () => {
  const activeTab = ref<'preview' | 'code'>('preview')
  const query = ref(' transfer ')
  const count = ref(2)
  const nestedQuery = ref(' nested transfer ')
  const nestedLabel = ref('deep-live')
  const nestedFirst = ref(3)
  const nestedSecond = ref(5)
  const passNestedOptions = ref(true)
  const passNestedMeta = ref(true)
  const passNestedCounts = ref(true)
  const presets = [' transfer ', ' rue ', ' vapor ', ' setup '] as const

  const nextPreset = () => {
    const currentIndex = presets.findIndex(item => item === query.value)
    const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % presets.length
    query.value = presets[nextIndex]
  }

  return (
    <SidebarPlayground>
      <div className="space-y-4">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">Props 与 useSetup 边界</h1>
          <p className="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">
            这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props
            的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的
            useSetup，它会退化成首帧快照。
          </p>
          <p className="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">
            还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect
            不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope
            上，只在组件卸载时统一清理。
          </p>
        </div>

        <div role="tablist" className="tabs tabs-box">
          <button
            role="tab"
            className={\`tab \${activeTab.value === 'preview' ? 'tab-active' : ''}\`}
            onClick={() => {
              activeTab.value = 'preview'
            }}
          >
            效果
          </button>
          <button
            role="tab"
            className={\`tab \${activeTab.value === 'code' ? 'tab-active' : ''}\`}
            onClick={() => {
              activeTab.value = 'code'
            }}
          >
            代码
          </button>
        </div>

        <div className="mt-4 grid gap-6 items-start">
          {activeTab.value === 'preview' && (
            <>
              <section className="card border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body gap-5">
                  <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                    <label className="form-control grid gap-2">
                      <span className="label-text font-medium">父组件 props.query</span>
                      <input
                        className="input input-bordered"
                        value={query.value}
                        onInput={(event: Event) => {
                          query.value = (event.target as HTMLInputElement).value
                        }}
                      />
                    </label>
                    <button className="btn btn-outline" onClick={nextPreset}>
                      切换预设 query
                    </button>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center">
                    <span className="text-sm font-medium">父组件 props.count</span>
                    <div className="join">
                      <button
                        className="btn join-item btn-outline"
                        onClick={() => {
                          count.value -= 1
                        }}
                      >
                        -1
                      </button>
                      <button
                        className="btn join-item btn-outline"
                        onClick={() => {
                          count.value += 1
                        }}
                      >
                        +1
                      </button>
                    </div>
                    <input
                      className="range range-primary"
                      type="range"
                      min="0"
                      max="12"
                      step="1"
                      value={String(count.value)}
                      onInput={(event: Event) => {
                        count.value = Number((event.target as HTMLInputElement).value)
                      }}
                    />
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    <FieldRow label="当前 query" value={query.value} />
                    <FieldRow
                      label="trim().toUpperCase()"
                      value={query.value.trim().toUpperCase() || '(empty)'}
                    />
                    <FieldRow label="当前 count" value={count.value} />
                  </div>
                </div>
              </section>

              <div className="grid gap-4 xl:grid-cols-2">
                <CaseCard
                  title="1. 当前安全行为：render 期直接读取解构 props"
                  note="这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。"
                >
                  <RenderPhaseChild query={query.value} count={count.value} />
                </CaseCard>

                <CaseCard
                  title="2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup"
                  note="这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。"
                >
                  <ManualOnceSetupChild query={query.value} count={count.value} />
                </CaseCard>

                <CaseCard
                  title="3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取"
                  note="这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。"
                >
                  <ReactivePropsObjectSetupChild query={query.value} count={count.value} />
                </CaseCard>

                <CaseCard
                  title="4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应"
                  note="这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。"
                >
                  <ReactiveDestructuredComputedSetupChild query={query.value} count={count.value} />
                </CaseCard>
              </div>

              <div className="rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80">
                观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props
                相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props
                不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch
                里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed
                里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的
                watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope
                一样在每次父组件更新后被销毁，后续 props
                变化就会出现“第一次能跑，第二次失活”的假象。
              </div>

              <section className="card border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body gap-5">
                  <div className="space-y-1">
                    <h2 className="text-lg font-semibold leading-tight">Nested 解构边界</h2>
                    <p className="text-sm text-base-content/70 leading-6">
                      这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。
                    </p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                    <label className="form-control grid gap-2">
                      <span className="label-text font-medium">nested options.query</span>
                      <input
                        className="input input-bordered"
                        value={nestedQuery.value}
                        onInput={(event: Event) => {
                          nestedQuery.value = (event.target as HTMLInputElement).value
                        }}
                      />
                    </label>

                    <label className="label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2">
                      <input
                        className="checkbox checkbox-sm"
                        type="checkbox"
                        checked={passNestedOptions.value}
                        onInput={(event: Event) => {
                          passNestedOptions.value = !!(event.target as HTMLInputElement).checked
                        }}
                      />
                      <span className="label-text">传入 options</span>
                    </label>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                    <label className="form-control grid gap-2">
                      <span className="label-text font-medium">nested options.meta.label</span>
                      <input
                        className="input input-bordered"
                        value={nestedLabel.value}
                        onInput={(event: Event) => {
                          nestedLabel.value = (event.target as HTMLInputElement).value
                        }}
                      />
                    </label>

                    <label className="label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2">
                      <input
                        className="checkbox checkbox-sm"
                        type="checkbox"
                        checked={passNestedMeta.value}
                        onInput={(event: Event) => {
                          passNestedMeta.value = !!(event.target as HTMLInputElement).checked
                        }}
                      />
                      <span className="label-text">传入 meta</span>
                    </label>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center">
                    <span className="text-sm font-medium">nested counts</span>
                    <div className="join">
                      <button
                        className="btn join-item btn-outline"
                        onClick={() => {
                          nestedFirst.value -= 1
                        }}
                      >
                        first -1
                      </button>
                      <button
                        className="btn join-item btn-outline"
                        onClick={() => {
                          nestedFirst.value += 1
                        }}
                      >
                        first +1
                      </button>
                    </div>
                    <input
                      className="range range-primary"
                      type="range"
                      min="0"
                      max="12"
                      step="1"
                      value={String(nestedSecond.value)}
                      onInput={(event: Event) => {
                        nestedSecond.value = Number((event.target as HTMLInputElement).value)
                      }}
                    />
                    <label className="label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2">
                      <input
                        className="checkbox checkbox-sm"
                        type="checkbox"
                        checked={passNestedCounts.value}
                        onInput={(event: Event) => {
                          passNestedCounts.value = !!(event.target as HTMLInputElement).checked
                        }}
                      />
                      <span className="label-text">传入 counts</span>
                    </label>
                  </div>

                  <div className="grid gap-3 md:grid-cols-4">
                    <FieldRow
                      label="options.query"
                      value={passNestedOptions.value ? nestedQuery.value : 'undefined'}
                    />
                    <FieldRow
                      label="options.meta.label"
                      value={
                        passNestedOptions.value && passNestedMeta.value
                          ? nestedLabel.value
                          : 'undefined'
                      }
                    />
                    <FieldRow
                      label="counts[0]"
                      value={passNestedCounts.value ? nestedFirst.value : 'undefined'}
                    />
                    <FieldRow
                      label="counts[1]"
                      value={passNestedCounts.value ? nestedSecond.value : 'undefined'}
                    />
                  </div>
                </div>
              </section>

              <div className="grid gap-4 xl:grid-cols-2">
                <CaseCard
                  title="5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取"
                  note="这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。"
                >
                  <NestedReactiveDestructuredComputedSetupChild
                    options={
                      passNestedOptions.value
                        ? {
                            query: nestedQuery.value,
                            meta: passNestedMeta.value ? { label: nestedLabel.value } : undefined,
                          }
                        : undefined
                    }
                    counts={
                      passNestedCounts.value ? [nestedFirst.value, nestedSecond.value] : undefined
                    }
                  />
                </CaseCard>

                <CaseCard
                  title="6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结"
                  note="边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。"
                >
                  <NestedSnapshotSetupChild
                    options={
                      passNestedOptions.value
                        ? {
                            query: nestedQuery.value,
                            meta: passNestedMeta.value ? { label: nestedLabel.value } : undefined,
                          }
                        : undefined
                    }
                    counts={
                      passNestedCounts.value ? [nestedFirst.value, nestedSecond.value] : undefined
                    }
                  />
                </CaseCard>
              </div>

              <div className="rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80">
                Nested 观察重点： 1. 第 5
                块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭
                options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6
                块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup
                首次执行里先算出普通快照，动态性还是会丢。
              </div>
            </>
          )}

          {activeTab.value === 'code' && (
            <div className="card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]">
              <div className="card-body p-0">
                <Code className="h-full" lang="tsx" code={propsSetupBoundarySource} />
              </div>
            </div>
          )}
        </div>
      </div>
    </SidebarPlayground>
  )
}

export default PropsSetupBoundary
`,M=f(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="space-y-1"><h2 class="text-lg font-semibold leading-tight"><!--rue:text-hole:0--></h2><p class="text-sm text-base-content/70 leading-6"><!--rue:text-hole:1--></p></div><div class="grid gap-2 text-sm text-base-content/85"><!--rue:text-hole:2--></div></div></section>`),N=f(`<div class="grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5"><span class="text-xs uppercase tracking-[0.18em] text-base-content/45"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1--></span></div>`),P=f(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),ae=f(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),oe=f(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--></div>`),F=f(`<div class="space-y-4"><div class="space-y-3"><h1 class="text-4xl font-semibold tracking-tight">Props 与 useSetup 边界</h1><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。</p><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。</p></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div></div>`),I=e=>{let n=c(e.children),r=c(e.note),i=c(e.title);return w(t(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,a=t.childNodes[0].childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=t.childNodes[0].childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[0].childNodes[1].childNodes[0],u=l.parentNode,d=v(``);o.insertBefore(d,a),o.removeChild(a),h(d,()=>i.get());let f=v(``);return c.insertBefore(f,s),c.removeChild(s),h(f,()=>r.get()),m({parent:u,before:l},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>O(()=>{n.set(e.children),r.set(e.note),i.set(e.title)}),()=>e)},L=e=>{let n=c(e.label),r=c(e.tone),i=c(e.value),a=r.get()===`success`?`border-success/30 bg-success/10 text-success`:r.get()===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`;return w(t(Object.assign(e=>{let t=N().content.cloneNode(!0).firstChild,r=t.childNodes[1],o=t.childNodes[0].childNodes[0],s=o.parentNode,c=t.childNodes[1].childNodes[0],l=c.parentNode,u;D(()=>{let e=`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${a}`,t=e==null?``:String(e);Object.is(u,t)||(u=t,r.className=t)});let d=v(``);s.insertBefore(d,o),s.removeChild(o),h(d,()=>n.get());let f=v(``);return l.insertBefore(f,c),l.removeChild(c),h(f,()=>String(i.get())),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>O(()=>{n.set(e.label),r.set(e.tone),i.set(e.value)}),()=>e)},se=e=>{let r=c(e.count),i=c(e.query),a=i.get().trim().toUpperCase()||`(empty)`,o=`${a} x ${r.get()}`;return w(t(Object.assign(e=>{let t=P().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=r.parentNode,s=t.childNodes[1],c=s.parentNode,l=t.childNodes[2],u=l.parentNode,d=S(i);n(d,L,()=>({label:`normalized`,value:a,tone:`success`})),i.insertBefore(d,r);let f=S(c);n(f,L,()=>({label:`summary`,value:o,tone:`success`})),c.insertBefore(f,s);let p=S(u);return n(p,L,()=>({label:`mode`,value:`render 期直接读取解构 props`})),u.insertBefore(p,l),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>O(()=>{r.set(e.count),i.set(e.query)}),()=>e)},ce=r=>{let{setupState:i}=T(`useSetup:0:0`,()=>l(()=>({setupState:l(()=>{let t={defaultValue:r.query.trim().toUpperCase()||`(empty)`};return{searchConfig:t,searchValueRef:T(`ref:1:0`,()=>e(t.defaultValue)),pageRef:T(`ref:1:1`,()=>e(r.count))}})})));return t(Object.assign(e=>{let t=ae().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=t.childNodes[3],d=u.parentNode,f=S(a);n(f,L,()=>({label:`searchConfig.defaultValue`,value:i.searchConfig.defaultValue,tone:`warning`})),a.insertBefore(f,r);let p=S(s);n(p,L,()=>({label:`searchValueRef.value`,value:i.searchValueRef.value,tone:`warning`})),s.insertBefore(p,o);let m=S(l);n(m,L,()=>({label:`pageRef.value`,value:i.pageRef.value,tone:`warning`})),l.insertBefore(m,c);let h=S(d);return n(h,L,()=>({label:`mode`,value:`手写 useSetup，一次性捕获解构 props`})),d.insertBefore(h,u),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},le=e=>{let{setupState:r}=T(`useSetup:0:0:dup1`,()=>l(()=>({setupState:l(()=>({normalized:T(`computed:1:3`,()=>o(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:T(`computed:1:4`,()=>o(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))}))})));return t(Object.assign(e=>{let t=P().content.cloneNode(!0).firstChild,i=t.childNodes[0],a=i.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=S(a);n(u,L,()=>({label:`normalized.get()`,value:r.normalized.get(),tone:`success`})),a.insertBefore(u,i);let d=S(s);n(d,L,()=>({label:`summary.get()`,value:r.summary.get(),tone:`success`})),s.insertBefore(d,o);let f=S(l);return n(f,L,()=>({label:`mode`,value:`useSetup 内改用 props 对象 + computed`})),l.insertBefore(f,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},ue=e=>{let{setupState:r}=T(`useSetup:0:0:dup2`,()=>l(()=>({setupState:l(()=>({normalized:T(`computed:1:6`,()=>o(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:T(`computed:1:7`,()=>o(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))}))})));return t(Object.assign(e=>{let t=P().content.cloneNode(!0).firstChild,i=t.childNodes[0],a=i.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=S(a);n(u,L,()=>({label:`normalized.get()`,value:r.normalized.get(),tone:`success`})),a.insertBefore(u,i);let d=S(s);n(d,L,()=>({label:`summary.get()`,value:r.summary.get(),tone:`success`})),s.insertBefore(d,o);let f=S(l);return n(f,L,()=>({label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`})),l.insertBefore(f,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},de=e=>{let{setupState:r}=T(`useSetup:0:0:dup3`,()=>l(()=>({setupState:l(()=>({normalized:T(`computed:1:9`,()=>o(()=>((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`)),total:T(`computed:1:10`,()=>o(()=>((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]))),summary:T(`computed:1:11`,()=>o(()=>`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`} x ${((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1])}`)),tuple:T(`computed:1:12`,()=>o(()=>`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`))}))})));return t(Object.assign(e=>{let t=oe().content.cloneNode(!0).firstChild,i=t.childNodes[0],a=i.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=t.childNodes[3],d=u.parentNode,f=t.childNodes[4],p=f.parentNode,m=S(a);n(m,L,()=>({label:`normalized.get()`,value:r.normalized.get(),tone:`success`})),a.insertBefore(m,i);let h=S(s);n(h,L,()=>({label:`total.get()`,value:r.total.get(),tone:`success`})),s.insertBefore(h,o);let g=S(l);n(g,L,()=>({label:`summary.get()`,value:r.summary.get(),tone:`success`})),l.insertBefore(g,c);let _=S(d);n(_,L,()=>({label:`tuple.get()`,value:r.tuple.get(),tone:`success`})),d.insertBefore(_,u);let v=S(p);return n(v,L,()=>({label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`})),p.insertBefore(v,f),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},fe=e=>{let{setupState:r}=T(`useSetup:0:0:dup4`,()=>l(()=>({setupState:l(()=>{let t=((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`,n=((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]);return{normalized:t,total:n,summary:`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${t} x ${n}`,tuple:`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`}})})));return t(Object.assign(e=>{let t=oe().content.cloneNode(!0).firstChild,i=t.childNodes[0],a=i.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=t.childNodes[3],d=u.parentNode,f=t.childNodes[4],p=f.parentNode,m=S(a);n(m,L,()=>({label:`normalized`,value:r.normalized,tone:`warning`})),a.insertBefore(m,i);let h=S(s);n(h,L,()=>({label:`total`,value:r.total,tone:`warning`})),s.insertBefore(h,o);let g=S(l);n(g,L,()=>({label:`summary`,value:r.summary,tone:`warning`})),l.insertBefore(g,c);let _=S(d);n(_,L,()=>({label:`tuple`,value:r.tuple,tone:`warning`})),d.insertBefore(_,u);let v=S(p);return n(v,L,()=>({label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`})),p.insertBefore(v,f),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))},pe=()=>{let o=e(`preview`),c=e(` transfer `),l=e(2),f=e(` nested transfer `),m=e(`deep-live`),h=e(3),S=e(5),T=e(!0),M=e(!0),N=e(!0),P=[` transfer `,` rue `,` vapor `,` setup `],ae=()=>{let e=P.findIndex(e=>e===c.value),t=e<0?0:(e+1)%P.length;c.value=P[t]};return a(()=>w((()=>{let e=ee(()=>{let e=te(),a=F().content.cloneNode(!0),w=a.firstChild,O=w.childNodes[1].childNodes[0],A=w.childNodes[1].childNodes[1],P=w.childNodes[2].childNodes[0],oe=P.parentNode,pe=w.childNodes[2].childNodes[1],R=pe.parentNode;e.appendChild(a),C(O,`role`,`tab`),D(()=>{r(O,`tab ${o.value===`preview`?`tab-active`:``}`)});let me=e=>{let t=()=>{o.value=`preview`};typeof t==`function`&&t(e)};O.addEventListener(`click`,me),i(()=>O.removeEventListener(`click`,me)),C(A,`role`,`tab`),D(()=>{r(A,`tab ${o.value===`code`?`tab-active`:``}`)});let z=e=>{let t=()=>{o.value=`code`};typeof t==`function`&&t(e)};return A.addEventListener(`click`,z),i(()=>A.removeEventListener(`click`,z)),D(()=>{let e=o.value===`preview`?ee(()=>{let e=te();u(e,b(` `));let a=E(`section`,e);u(e,a),r(a,`card border border-base-300 bg-base-100 shadow-sm`);let o=E(`div`,a);u(a,o),r(o,`card-body gap-5`);let s=E(`div`,o);u(o,s),r(s,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let g=E(`label`,s);u(s,g),r(g,`form-control grid gap-2`);let v=E(`span`,g);u(g,v),r(v,`label-text font-medium`),u(v,b(`父组件 props.query`));let y=E(`input`,g);u(g,y),r(y,`input input-bordered`),D(()=>{_(y,c.value)});let ee=e=>{let t=e=>{c.value=e.target.value};typeof t==`function`&&t(e)};y.addEventListener(`input`,ee),i(()=>y.removeEventListener(`input`,ee));let w=E(`button`,s);u(s,w),r(w,`btn btn-outline`);let O=e=>{let t=ae;typeof t==`function`&&t(e)};w.addEventListener(`click`,O),i(()=>w.removeEventListener(`click`,O)),u(w,b(`切换预设 query`));let k=E(`div`,o);u(o,k),r(k,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let A=E(`span`,k);u(k,A),r(A,`text-sm font-medium`),u(A,b(`父组件 props.count`));let j=E(`div`,k);u(k,j),r(j,`join`);let P=E(`button`,j);u(j,P),r(P,`btn join-item btn-outline`);let oe=e=>{let t=()=>{--l.value};typeof t==`function`&&t(e)};P.addEventListener(`click`,oe),i(()=>P.removeEventListener(`click`,oe)),u(P,b(`-1`));let F=E(`button`,j);u(j,F),r(F,`btn join-item btn-outline`);let pe=e=>{let t=()=>{l.value+=1};typeof t==`function`&&t(e)};F.addEventListener(`click`,pe),i(()=>F.removeEventListener(`click`,pe)),u(F,b(`+1`));let R=E(`input`,k);u(k,R),r(R,`range range-primary`),C(R,`type`,`range`),C(R,`min`,`0`),C(R,`max`,`12`),C(R,`step`,`1`),D(()=>{_(R,String(l.value))});let me=e=>{let t=e=>{l.value=Number(e.target.value)};typeof t==`function`&&t(e)};R.addEventListener(`input`,me),i(()=>R.removeEventListener(`input`,me));let z=E(`div`,o);u(o,z),r(z,`grid gap-3 md:grid-cols-3`),n(z,L,()=>({label:`当前 query`,value:c.value})),n(z,L,()=>({label:`trim().toUpperCase()`,value:c.value.trim().toUpperCase()||`(empty)`})),n(z,L,()=>({label:`当前 count`,value:l.value})),u(e,b(` `));let B=E(`div`,e);u(e,B),r(B,`grid gap-4 xl:grid-cols-2`),n(B,I,()=>({title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:(e,r,i)=>ie(e,i,()=>t(Object.assign(e=>{let t=te();return n(t,se,()=>({query:c.value,count:l.value})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}));let he=re(`rue:component:anchor`);u(B,he),D(()=>{let e=p(ce,()=>({query:c.value,count:l.value})),t=p(I,()=>({title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:e}));x(()=>d(t,B,he))});let ge=re(`rue:component:anchor`);u(B,ge),D(()=>{let e=p(le,()=>({query:c.value,count:l.value})),t=p(I,()=>({title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:e}));x(()=>d(t,B,ge))});let _e=re(`rue:component:anchor`);u(B,_e),D(()=>{let e=p(ue,()=>({query:c.value,count:l.value})),t=p(I,()=>({title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:e}));x(()=>d(t,B,_e))}),u(e,b(` `));let ve=E(`div`,e);u(e,ve),r(ve,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),u(ve,b(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),u(e,b(` `));let ye=E(`section`,e);u(e,ye),r(ye,`card border border-base-300 bg-base-100 shadow-sm`);let V=E(`div`,ye);u(ye,V),r(V,`card-body gap-5`);let H=E(`div`,V);u(V,H),r(H,`space-y-1`);let be=E(`h2`,H);u(H,be),r(be,`text-lg font-semibold leading-tight`),u(be,b(`Nested 解构边界`));let xe=E(`p`,H);u(H,xe),r(xe,`text-sm text-base-content/70 leading-6`),u(xe,b(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let U=E(`div`,V);u(V,U),r(U,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let W=E(`label`,U);u(U,W),r(W,`form-control grid gap-2`);let Se=E(`span`,W);u(W,Se),r(Se,`label-text font-medium`),u(Se,b(`nested options.query`));let Ce=E(`input`,W);u(W,Ce),r(Ce,`input input-bordered`),D(()=>{_(Ce,f.value)});let we=e=>{let t=e=>{f.value=e.target.value};typeof t==`function`&&t(e)};Ce.addEventListener(`input`,we),i(()=>Ce.removeEventListener(`input`,we));let G=E(`label`,U);u(U,G),r(G,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let K=E(`input`,G);u(G,K),r(K,`checkbox checkbox-sm`),C(K,`type`,`checkbox`),D(()=>{ne(K,!!T.value)});let Te=e=>{let t=e=>{T.value=!!e.target.checked};typeof t==`function`&&t(e)};K.addEventListener(`input`,Te),i(()=>K.removeEventListener(`input`,Te));let Ee=E(`span`,G);u(G,Ee),r(Ee,`label-text`),u(Ee,b(`传入 options`));let q=E(`div`,V);u(V,q),r(q,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let J=E(`label`,q);u(q,J),r(J,`form-control grid gap-2`);let De=E(`span`,J);u(J,De),r(De,`label-text font-medium`),u(De,b(`nested options.meta.label`));let Oe=E(`input`,J);u(J,Oe),r(Oe,`input input-bordered`),D(()=>{_(Oe,m.value)});let ke=e=>{let t=e=>{m.value=e.target.value};typeof t==`function`&&t(e)};Oe.addEventListener(`input`,ke),i(()=>Oe.removeEventListener(`input`,ke));let Y=E(`label`,q);u(q,Y),r(Y,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let X=E(`input`,Y);u(Y,X),r(X,`checkbox checkbox-sm`),C(X,`type`,`checkbox`),D(()=>{ne(X,!!M.value)});let Ae=e=>{let t=e=>{M.value=!!e.target.checked};typeof t==`function`&&t(e)};X.addEventListener(`input`,Ae),i(()=>X.removeEventListener(`input`,Ae));let je=E(`span`,Y);u(Y,je),r(je,`label-text`),u(je,b(`传入 meta`));let Z=E(`div`,V);u(V,Z),r(Z,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let Me=E(`span`,Z);u(Z,Me),r(Me,`text-sm font-medium`),u(Me,b(`nested counts`));let Ne=E(`div`,Z);u(Z,Ne),r(Ne,`join`);let Pe=E(`button`,Ne);u(Ne,Pe),r(Pe,`btn join-item btn-outline`);let Fe=e=>{let t=()=>{--h.value};typeof t==`function`&&t(e)};Pe.addEventListener(`click`,Fe),i(()=>Pe.removeEventListener(`click`,Fe)),u(Pe,b(`first -1`));let Ie=E(`button`,Ne);u(Ne,Ie),r(Ie,`btn join-item btn-outline`);let Le=e=>{let t=()=>{h.value+=1};typeof t==`function`&&t(e)};Ie.addEventListener(`click`,Le),i(()=>Ie.removeEventListener(`click`,Le)),u(Ie,b(`first +1`));let Q=E(`input`,Z);u(Z,Q),r(Q,`range range-primary`),C(Q,`type`,`range`),C(Q,`min`,`0`),C(Q,`max`,`12`),C(Q,`step`,`1`),D(()=>{_(Q,String(S.value))});let Re=e=>{let t=e=>{S.value=Number(e.target.value)};typeof t==`function`&&t(e)};Q.addEventListener(`input`,Re),i(()=>Q.removeEventListener(`input`,Re));let ze=E(`label`,Z);u(Z,ze),r(ze,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Be=E(`input`,ze);u(ze,Be),r(Be,`checkbox checkbox-sm`),C(Be,`type`,`checkbox`),D(()=>{ne(Be,!!N.value)});let Ve=e=>{let t=e=>{N.value=!!e.target.checked};typeof t==`function`&&t(e)};Be.addEventListener(`input`,Ve),i(()=>Be.removeEventListener(`input`,Ve));let He=E(`span`,ze);u(ze,He),r(He,`label-text`),u(He,b(`传入 counts`));let Ue=E(`div`,V);u(V,Ue),r(Ue,`grid gap-3 md:grid-cols-4`),n(Ue,L,()=>({label:`options.query`,value:T.value?f.value:`undefined`})),n(Ue,L,()=>({label:`options.meta.label`,value:T.value&&M.value?m.value:`undefined`})),n(Ue,L,()=>({label:`counts[0]`,value:N.value?h.value:`undefined`})),n(Ue,L,()=>({label:`counts[1]`,value:N.value?S.value:`undefined`})),u(e,b(` `));let $=E(`div`,e);u(e,$),r($,`grid gap-4 xl:grid-cols-2`);let We=re(`rue:component:anchor`);u($,We),D(()=>{let e=p(de,()=>({options:T.value?{query:f.value,meta:M.value?{label:m.value}:void 0}:void 0,counts:N.value?[h.value,S.value]:void 0})),t=p(I,()=>({title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:e}));x(()=>d(t,$,We))});let Ge=re(`rue:component:anchor`);u($,Ge),D(()=>{let e=p(fe,()=>({options:T.value?{query:f.value,meta:M.value?{label:m.value}:void 0}:void 0,counts:N.value?[h.value,S.value]:void 0})),t=p(I,()=>({title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:e}));x(()=>d(t,$,Ge))}),u(e,b(` `));let Ke=E(`div`,e);return u(e,Ke),r(Ke,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),u(Ke,b(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),u(e,b(` `)),e},!0):``;x(()=>d(e,oe,P))}),s(R,pe,()=>{let e=o.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>t(Object.assign(e=>{let t=y(`div`,e);t.className=`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`;let r=y(`div`,t);return g(t,r),r.className=`card-body p-0`,n(r,k,()=>({className:`h-full`,lang:`tsx`,code:j})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>t(Object.assign(t=>{let n=v(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(Object.assign(e=>{let t=te();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),e});return p(A,()=>({children:e}))})(),e=>O(()=>{})))};export{pe as default};