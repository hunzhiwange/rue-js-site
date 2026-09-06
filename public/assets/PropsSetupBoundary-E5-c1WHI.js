import{At as e,Dt as t,E as n,Mt as r,P as i,Q as a,Qt as o,St as s,T as c,Vt as l,_n as u,_t as d,at as f,ct as p,dt as m,et as h,gn as g,gt as _,hn as v,in as y,kn as b,nt as x,pn as ee,qt as S,sn as C,st as w,tn as T,ut as te,vn as E,vt as D,wn as O,xn as k,xt as A,yt as j}from"./rue-runtime-HIMg8Lz8.js";import{t as M}from"./Code-DpH7u0gk.js";import{r as N}from"./SidebarPlaygroundExample-BCPRe0hA.js";var P=`import { computed, ref, type FC, useSetup } from '@rue-js/rue'
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
`,F=E(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="space-y-1"><h2 class="text-lg font-semibold leading-tight"><!--rue:text-hole:0--></h2><p class="text-sm text-base-content/70 leading-6"><!--rue:text-hole:1--></p></div><div class="grid gap-2 text-sm text-base-content/85"><!--rue:text-hole:2--></div></div></section>`),I=E(`<div class="grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5"><span class="text-xs uppercase tracking-[0.18em] text-base-content/45"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1--></span></div>`),L=E(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),ne=E(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),re=E(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--></div>`),ie=E(`<div class="space-y-4"><div class="space-y-3"><h1 class="text-4xl font-semibold tracking-tight">Props 与 useSetup 边界</h1><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。</p><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。</p></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div></div>`),R=e=>{let t=f(e.children),n=f(e.note),r=f(e.title);return p(l(Object.assign(e=>{let i=F().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=i.childNodes[0].childNodes[0].childNodes[1].childNodes[0],l=s.parentNode,d=i.childNodes[0].childNodes[1].childNodes[0],f=d.parentNode,p=u(``);o.insertBefore(p,a),o.removeChild(a),k(p,()=>r.get());let m=u(``);return l.insertBefore(m,s),l.removeChild(s),k(m,()=>n.get()),c({parent:f,before:d},()=>t.get(),()=>({})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>h(()=>{t.set(e.children),n.set(e.note),r.set(e.title)}),()=>e)},z=e=>{let t=f(e.label),n=f(e.tone),r=f(e.value),i=n.get()===`success`?`border-success/30 bg-success/10 text-success`:n.get()===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`;return p(l(Object.assign(e=>{let n=I().content.cloneNode(!0).firstChild,a=n.childNodes[1],o=n.childNodes[0].childNodes[0],s=o.parentNode,c=n.childNodes[1].childNodes[0],l=c.parentNode,d;O(()=>{let e=`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${i}`,t=e==null?``:String(e);Object.is(d,t)||(d=t,a.className=t)});let f=u(``);s.insertBefore(f,o),s.removeChild(o),k(f,()=>t.get());let p=u(``);return l.insertBefore(p,c),l.removeChild(c),k(p,()=>String(r.get())),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>h(()=>{t.set(e.label),n.set(e.tone),r.set(e.value)}),()=>e)},ae=e=>{let t=f(e.count),n=f(e.query),r=n.get().trim().toUpperCase()||`(empty)`,i=`${r} x ${t.get()}`;return p(l(Object.assign(e=>{let t=L().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=n.parentNode,o=t.childNodes[1],s=o.parentNode,c=t.childNodes[2],l=c.parentNode,u=v(a);w(u,z,()=>({label:`normalized`,value:r,tone:`success`})),a.insertBefore(u,n);let d=v(s);w(d,z,()=>({label:`summary`,value:i,tone:`success`})),s.insertBefore(d,o);let f=v(l);return w(f,z,()=>({label:`mode`,value:`render 期直接读取解构 props`})),l.insertBefore(f,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>h(()=>{t.set(e.count),n.set(e.query)}),()=>e)},oe=e=>{let{setupState:t}=C(`useSetup:0:0`,()=>y(()=>({setupState:y(()=>{let t={defaultValue:e.query.trim().toUpperCase()||`(empty)`};return{searchConfig:t,searchValueRef:C(`ref:1:0`,()=>T(t.defaultValue)),pageRef:C(`ref:1:1`,()=>T(e.count))}})})));return l(Object.assign(e=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],o=a.parentNode,s=n.childNodes[2],c=s.parentNode,l=n.childNodes[3],u=l.parentNode,d=v(i);w(d,z,()=>({label:`searchConfig.defaultValue`,value:t.searchConfig.defaultValue,tone:`warning`})),i.insertBefore(d,r);let f=v(o);w(f,z,()=>({label:`searchValueRef.value`,value:t.searchValueRef.value,tone:`warning`})),o.insertBefore(f,a);let p=v(c);w(p,z,()=>({label:`pageRef.value`,value:t.pageRef.value,tone:`warning`})),c.insertBefore(p,s);let m=v(u);return w(m,z,()=>({label:`mode`,value:`手写 useSetup，一次性捕获解构 props`})),u.insertBefore(m,l),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))},se=e=>{let{setupState:t}=C(`useSetup:0:0:dup1`,()=>y(()=>({setupState:y(()=>({normalized:C(`computed:1:3`,()=>i(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:C(`computed:1:4`,()=>i(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))}))})));return l(Object.assign(e=>{let n=L().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],o=a.parentNode,s=n.childNodes[2],c=s.parentNode,l=v(i);w(l,z,()=>({label:`normalized.get()`,value:t.normalized.get(),tone:`success`})),i.insertBefore(l,r);let u=v(o);w(u,z,()=>({label:`summary.get()`,value:t.summary.get(),tone:`success`})),o.insertBefore(u,a);let d=v(c);return w(d,z,()=>({label:`mode`,value:`useSetup 内改用 props 对象 + computed`})),c.insertBefore(d,s),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))},ce=e=>{let{setupState:t}=C(`useSetup:0:0:dup2`,()=>y(()=>({setupState:y(()=>({normalized:C(`computed:1:6`,()=>i(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:C(`computed:1:7`,()=>i(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))}))})));return l(Object.assign(e=>{let n=L().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],o=a.parentNode,s=n.childNodes[2],c=s.parentNode,l=v(i);w(l,z,()=>({label:`normalized.get()`,value:t.normalized.get(),tone:`success`})),i.insertBefore(l,r);let u=v(o);w(u,z,()=>({label:`summary.get()`,value:t.summary.get(),tone:`success`})),o.insertBefore(u,a);let d=v(c);return w(d,z,()=>({label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`})),c.insertBefore(d,s),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))},le=e=>{let{setupState:t}=C(`useSetup:0:0:dup3`,()=>y(()=>({setupState:y(()=>({normalized:C(`computed:1:9`,()=>i(()=>((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`)),total:C(`computed:1:10`,()=>i(()=>((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]))),summary:C(`computed:1:11`,()=>i(()=>`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`} x ${((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1])}`)),tuple:C(`computed:1:12`,()=>i(()=>`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`))}))})));return l(Object.assign(e=>{let n=re().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],o=a.parentNode,s=n.childNodes[2],c=s.parentNode,l=n.childNodes[3],u=l.parentNode,d=n.childNodes[4],f=d.parentNode,p=v(i);w(p,z,()=>({label:`normalized.get()`,value:t.normalized.get(),tone:`success`})),i.insertBefore(p,r);let m=v(o);w(m,z,()=>({label:`total.get()`,value:t.total.get(),tone:`success`})),o.insertBefore(m,a);let h=v(c);w(h,z,()=>({label:`summary.get()`,value:t.summary.get(),tone:`success`})),c.insertBefore(h,s);let g=v(u);w(g,z,()=>({label:`tuple.get()`,value:t.tuple.get(),tone:`success`})),u.insertBefore(g,l);let _=v(f);return w(_,z,()=>({label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`})),f.insertBefore(_,d),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))},ue=e=>{let{setupState:t}=C(`useSetup:0:0:dup4`,()=>y(()=>({setupState:y(()=>{let t=((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`,n=((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]);return{normalized:t,total:n,summary:`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${t} x ${n}`,tuple:`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`}})})));return l(Object.assign(e=>{let n=re().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=n.childNodes[1],o=a.parentNode,s=n.childNodes[2],c=s.parentNode,l=n.childNodes[3],u=l.parentNode,d=n.childNodes[4],f=d.parentNode,p=v(i);w(p,z,()=>({label:`normalized`,value:t.normalized,tone:`warning`})),i.insertBefore(p,r);let m=v(o);w(m,z,()=>({label:`total`,value:t.total,tone:`warning`})),o.insertBefore(m,a);let h=v(c);w(h,z,()=>({label:`summary`,value:t.summary,tone:`warning`})),c.insertBefore(h,s);let g=v(u);w(g,z,()=>({label:`tuple`,value:t.tuple,tone:`warning`})),u.insertBefore(g,l);let _=v(f);return w(_,z,()=>({label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`})),f.insertBefore(_,d),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))},de=()=>{let i=T(`preview`),c=T(` transfer `),f=T(2),v=T(` nested transfer `),y=T(`deep-live`),C=T(3),E=T(5),k=T(!0),F=T(!0),I=T(!0),L=[` transfer `,` rue `,` vapor `,` setup `],ne=()=>{let e=L.findIndex(e=>e===c.value),t=e<0?0:(e+1)%L.length;c.value=L[t]};return S(()=>p((()=>{let p=e(()=>{let p=d(),h=ie().content.cloneNode(!0),S=h.firstChild,T=S.childNodes[1].childNodes[0],N=S.childNodes[1].childNodes[1],L=S.childNodes[2].childNodes[0],re=L.parentNode,de=S.childNodes[2].childNodes[1],B=de.parentNode;p.appendChild(h),A(T,`role`,`tab`),O(()=>{a(T,`tab ${i.value===`preview`?`tab-active`:``}`)});let fe=e=>{let t=()=>{i.value=`preview`};typeof t==`function`&&t(e)};T.addEventListener(`click`,fe),o(()=>T.removeEventListener(`click`,fe)),A(N,`role`,`tab`),O(()=>{a(N,`tab ${i.value===`code`?`tab-active`:``}`)});let V=e=>{let t=()=>{i.value=`code`};typeof t==`function`&&t(e)};return N.addEventListener(`click`,V),o(()=>N.removeEventListener(`click`,V)),O(()=>{let u=i.value===`preview`?e(()=>{let e=d();m(e,j(` `));let i=D(`section`,e);m(e,i),a(i,`card border border-base-300 bg-base-100 shadow-sm`);let u=D(`div`,i);m(i,u),a(u,`card-body gap-5`);let p=D(`div`,u);m(u,p),a(p,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let h=D(`label`,p);m(p,h),a(h,`form-control grid gap-2`);let g=D(`span`,h);m(h,g),a(g,`label-text font-medium`),m(g,j(`父组件 props.query`));let x=D(`input`,h);m(h,x),a(x,`input input-bordered`),O(()=>{t(x,c.value)});let ee=e=>{let t=e=>{c.value=e.target.value};typeof t==`function`&&t(e)};x.addEventListener(`input`,ee),o(()=>x.removeEventListener(`input`,ee));let S=D(`button`,p);m(p,S),a(S,`btn btn-outline`);let T=e=>{let t=ne;typeof t==`function`&&t(e)};S.addEventListener(`click`,T),o(()=>S.removeEventListener(`click`,T)),m(S,j(`切换预设 query`));let M=D(`div`,u);m(u,M),a(M,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let N=D(`span`,M);m(M,N),a(N,`text-sm font-medium`),m(N,j(`父组件 props.count`));let P=D(`div`,M);m(M,P),a(P,`join`);let L=D(`button`,P);m(P,L),a(L,`btn join-item btn-outline`);let re=e=>{let t=()=>{--f.value};typeof t==`function`&&t(e)};L.addEventListener(`click`,re),o(()=>L.removeEventListener(`click`,re)),m(L,j(`-1`));let ie=D(`button`,P);m(P,ie),a(ie,`btn join-item btn-outline`);let de=e=>{let t=()=>{f.value+=1};typeof t==`function`&&t(e)};ie.addEventListener(`click`,de),o(()=>ie.removeEventListener(`click`,de)),m(ie,j(`+1`));let B=D(`input`,M);m(M,B),a(B,`range range-primary`),A(B,`type`,`range`),A(B,`min`,`0`),A(B,`max`,`12`),A(B,`step`,`1`),O(()=>{t(B,String(f.value))});let fe=e=>{let t=e=>{f.value=Number(e.target.value)};typeof t==`function`&&t(e)};B.addEventListener(`input`,fe),o(()=>B.removeEventListener(`input`,fe));let V=D(`div`,u);m(u,V),a(V,`grid gap-3 md:grid-cols-3`),w(V,z,()=>({label:`当前 query`,value:c.value})),w(V,z,()=>({label:`trim().toUpperCase()`,value:c.value.trim().toUpperCase()||`(empty)`})),w(V,z,()=>({label:`当前 count`,value:f.value})),m(e,j(` `));let H=D(`div`,e);m(e,H),a(H,`grid gap-4 xl:grid-cols-2`),w(H,R,()=>({title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:(e,t,r)=>n(e,r,()=>l(Object.assign(e=>{let t=d();return w(t,ae,()=>({query:c.value,count:f.value})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}));let pe=_(`rue:component:anchor`);m(H,pe),O(()=>{let e=r(oe,()=>({query:c.value,count:f.value})),t=r(R,()=>({title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:e}));b(()=>te(t,H,pe))});let me=_(`rue:component:anchor`);m(H,me),O(()=>{let e=r(se,()=>({query:c.value,count:f.value})),t=r(R,()=>({title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:e}));b(()=>te(t,H,me))});let he=_(`rue:component:anchor`);m(H,he),O(()=>{let e=r(ce,()=>({query:c.value,count:f.value})),t=r(R,()=>({title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:e}));b(()=>te(t,H,he))}),m(e,j(` `));let ge=D(`div`,e);m(e,ge),a(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),m(ge,j(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),m(e,j(` `));let _e=D(`section`,e);m(e,_e),a(_e,`card border border-base-300 bg-base-100 shadow-sm`);let U=D(`div`,_e);m(_e,U),a(U,`card-body gap-5`);let W=D(`div`,U);m(U,W),a(W,`space-y-1`);let ve=D(`h2`,W);m(W,ve),a(ve,`text-lg font-semibold leading-tight`),m(ve,j(`Nested 解构边界`));let ye=D(`p`,W);m(W,ye),a(ye,`text-sm text-base-content/70 leading-6`),m(ye,j(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let G=D(`div`,U);m(U,G),a(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=D(`label`,G);m(G,K),a(K,`form-control grid gap-2`);let be=D(`span`,K);m(K,be),a(be,`label-text font-medium`),m(be,j(`nested options.query`));let xe=D(`input`,K);m(K,xe),a(xe,`input input-bordered`),O(()=>{t(xe,v.value)});let Se=e=>{let t=e=>{v.value=e.target.value};typeof t==`function`&&t(e)};xe.addEventListener(`input`,Se),o(()=>xe.removeEventListener(`input`,Se));let q=D(`label`,G);m(G,q),a(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ce=D(`input`,q);m(q,Ce),a(Ce,`checkbox checkbox-sm`),A(Ce,`type`,`checkbox`),O(()=>{s(Ce,!!k.value)});let we=e=>{let t=e=>{k.value=!!e.target.checked};typeof t==`function`&&t(e)};Ce.addEventListener(`input`,we),o(()=>Ce.removeEventListener(`input`,we));let Te=D(`span`,q);m(q,Te),a(Te,`label-text`),m(Te,j(`传入 options`));let J=D(`div`,U);m(U,J),a(J,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let Y=D(`label`,J);m(J,Y),a(Y,`form-control grid gap-2`);let Ee=D(`span`,Y);m(Y,Ee),a(Ee,`label-text font-medium`),m(Ee,j(`nested options.meta.label`));let De=D(`input`,Y);m(Y,De),a(De,`input input-bordered`),O(()=>{t(De,y.value)});let Oe=e=>{let t=e=>{y.value=e.target.value};typeof t==`function`&&t(e)};De.addEventListener(`input`,Oe),o(()=>De.removeEventListener(`input`,Oe));let X=D(`label`,J);m(J,X),a(X,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let ke=D(`input`,X);m(X,ke),a(ke,`checkbox checkbox-sm`),A(ke,`type`,`checkbox`),O(()=>{s(ke,!!F.value)});let Ae=e=>{let t=e=>{F.value=!!e.target.checked};typeof t==`function`&&t(e)};ke.addEventListener(`input`,Ae),o(()=>ke.removeEventListener(`input`,Ae));let je=D(`span`,X);m(X,je),a(je,`label-text`),m(je,j(`传入 meta`));let Z=D(`div`,U);m(U,Z),a(Z,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let Me=D(`span`,Z);m(Z,Me),a(Me,`text-sm font-medium`),m(Me,j(`nested counts`));let Ne=D(`div`,Z);m(Z,Ne),a(Ne,`join`);let Pe=D(`button`,Ne);m(Ne,Pe),a(Pe,`btn join-item btn-outline`);let Fe=e=>{let t=()=>{--C.value};typeof t==`function`&&t(e)};Pe.addEventListener(`click`,Fe),o(()=>Pe.removeEventListener(`click`,Fe)),m(Pe,j(`first -1`));let Ie=D(`button`,Ne);m(Ne,Ie),a(Ie,`btn join-item btn-outline`);let Le=e=>{let t=()=>{C.value+=1};typeof t==`function`&&t(e)};Ie.addEventListener(`click`,Le),o(()=>Ie.removeEventListener(`click`,Le)),m(Ie,j(`first +1`));let Q=D(`input`,Z);m(Z,Q),a(Q,`range range-primary`),A(Q,`type`,`range`),A(Q,`min`,`0`),A(Q,`max`,`12`),A(Q,`step`,`1`),O(()=>{t(Q,String(E.value))});let Re=e=>{let t=e=>{E.value=Number(e.target.value)};typeof t==`function`&&t(e)};Q.addEventListener(`input`,Re),o(()=>Q.removeEventListener(`input`,Re));let ze=D(`label`,Z);m(Z,ze),a(ze,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Be=D(`input`,ze);m(ze,Be),a(Be,`checkbox checkbox-sm`),A(Be,`type`,`checkbox`),O(()=>{s(Be,!!I.value)});let Ve=e=>{let t=e=>{I.value=!!e.target.checked};typeof t==`function`&&t(e)};Be.addEventListener(`input`,Ve),o(()=>Be.removeEventListener(`input`,Ve));let He=D(`span`,ze);m(ze,He),a(He,`label-text`),m(He,j(`传入 counts`));let Ue=D(`div`,U);m(U,Ue),a(Ue,`grid gap-3 md:grid-cols-4`),w(Ue,z,()=>({label:`options.query`,value:k.value?v.value:`undefined`})),w(Ue,z,()=>({label:`options.meta.label`,value:k.value&&F.value?y.value:`undefined`})),w(Ue,z,()=>({label:`counts[0]`,value:I.value?C.value:`undefined`})),w(Ue,z,()=>({label:`counts[1]`,value:I.value?E.value:`undefined`})),m(e,j(` `));let $=D(`div`,e);m(e,$),a($,`grid gap-4 xl:grid-cols-2`);let We=_(`rue:component:anchor`);m($,We),O(()=>{let e=r(le,()=>({options:k.value?{query:v.value,meta:F.value?{label:y.value}:void 0}:void 0,counts:I.value?[C.value,E.value]:void 0})),t=r(R,()=>({title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:e}));b(()=>te(t,$,We))});let Ge=_(`rue:component:anchor`);m($,Ge),O(()=>{let e=r(ue,()=>({options:k.value?{query:v.value,meta:F.value?{label:y.value}:void 0}:void 0,counts:I.value?[C.value,E.value]:void 0})),t=r(R,()=>({title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:e}));b(()=>te(t,$,Ge))}),m(e,j(` `));let Ke=D(`div`,e);return m(e,Ke),a(Ke,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),m(Ke,j(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),m(e,j(` `)),e},!0):``;b(()=>te(u,re,L))}),x(B,de,()=>{let e=i.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=g(`div`,e);t.className=`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`;let n=g(`div`,t);return ee(t,n),n.className=`card-body p-0`,w(n,M,()=>({className:`h-full`,lang:`tsx`,code:P})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),p});return r(N,()=>({children:p}))})(),e=>h(()=>{})))};export{de as default};