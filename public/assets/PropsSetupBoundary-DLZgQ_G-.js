import{B as e,Bt as t,F as n,I as r,Jt as i,P as a,Ut as o,V as s,Vt as c,W as l,Wt as u,ct as d,en as f,fn as p,gn as m,hn as h,in as g,mn as _,mt as v,nt as y,pn as b,sn as x,tt as S,u as C,yn as w,z as T,zt as E}from"./rue-runtime-BWbIfNT8.js";import{t as ee}from"./Code-C5ZhIIr9.js";import{r as D}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var te=`import { computed, ref, type FC, useSetup } from '@rue-js/rue'
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
                不是绝对不能进 setup，关键是要保留 编译 props 对象，并在 computed 或 watch 里读取。
                4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed
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
                块说明编译器只保证“读取时”还能回到 编译 props；如果你在 useSetup
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
`,O=w(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div>`),k=w(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),ne=w(`<div class="grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--></div>`),re=w(`<div class="space-y-4"><div class="space-y-3"><h1 class="text-4xl font-semibold tracking-tight">Props 与 useSetup 边界</h1><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。</p><p class="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。</p></div><div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div><div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div></div>`),A=(n,i,a)=>{let o=l(T(n,`children`)),s=l(T(n,`note`)),c=l(T(n,`title`));return r(u(e=>{let n=h(`section`,e);n.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm`);let r=h(`div`,n);p(n,r),r.setAttribute(`class`,`card-body gap-4`);let i=h(`div`,r);p(r,i),i.setAttribute(`class`,`space-y-1`);let a=h(`h2`,i);p(i,a),a.setAttribute(`class`,`text-lg font-semibold leading-tight`);let l=b(`rue:compiled-slot`);p(a,l),t({parent:a,before:l},()=>E(c.get()),()=>({}));let u=h(`p`,i);p(i,u),u.setAttribute(`class`,`text-sm text-base-content/70 leading-6`);let d=b(`rue:compiled-slot`);p(u,d),t({parent:u,before:d},()=>E(s.get()),()=>({}));let f=h(`div`,r);p(r,f),f.setAttribute(`class`,`grid gap-2 text-sm text-base-content/85`);let m=b(`rue:compiled-slot`);return p(f,m),t({parent:f,before:m},()=>o.get(),()=>({})),[n,n]}),e=>f(()=>{o.set(e.children),s.set(e.note),c.set(e.title)}),()=>e(n))},j=(n,i,a)=>{let o=l(T(n,`label`)),s=l(T(n,`tone`)),c=l(T(n,`value`)),m=d(()=>s.get()===`success`?`border-success/30 bg-success/10 text-success`:s.get()===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`);return m.get(),r(u(e=>{let n=h(`div`,e);n.setAttribute(`class`,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let r=h(`span`,n);p(n,r),r.setAttribute(`class`,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let i=b(`rue:compiled-slot`);p(r,i),t({parent:r,before:i},()=>E(o.get()),()=>({}));let a=h(`span`,n);p(n,a);let s;g(()=>{let e=`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${m.get()}`,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,a.setAttribute(`class`,t))});let l=b(`rue:compiled-slot`);return p(a,l),t({parent:a,before:l},()=>E(c.get()),()=>({})),[n,n]}),e=>f(()=>{o.set(e.label),s.set(e.tone),c.set(e.value)}),()=>e(n))},ie=(n,i,o)=>{let s=l(T(n,`count`)),p=l(T(n,`query`)),m=d(()=>p.get().trim().toUpperCase()||`(empty)`);m.get();let h=m,g=d(()=>`${h.get()} x ${s.get()}`);return g.get(),r(u(e=>{let n=O().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,o=n.childNodes[1],s=o.parentNode,l=n.childNodes[2],u=l.parentNode,d=(e,t,n)=>{let r=()=>a(j,()=>({label:`normalized`,value:m.get(),tone:`success`}));return e==null?r():c(e,n,r)},f=r.nextSibling;i.removeChild(r),t({parent:i,before:f},()=>d,()=>({}));let p=(e,t,n)=>{let r=()=>a(j,()=>({label:`summary`,value:g.get(),tone:`success`}));return e==null?r():c(e,n,r)},h=o.nextSibling;s.removeChild(o),t({parent:s,before:h},()=>p,()=>({}));let _=(e,t,n)=>{let r=()=>a(j,()=>({label:`mode`,value:`render 期直接读取解构 props`}));return e==null?r():c(e,n,r)},v=l.nextSibling;return u.removeChild(l),t({parent:u,before:v},()=>_,()=>({})),[n,n]}),e=>f(()=>{s.set(e.count),p.set(e.query)}),()=>e(n))},ae=(n,i,o)=>{let s=l(T(n,`count`)),d=l(T(n,`query`)),p=S(`ManualOnceSetupChild:hook:0`,()=>{let e={defaultValue:d.get().trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:v(e.defaultValue),pageRef:v(s.get())}});return y(()=>r(u(e=>{let n=k().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,o=n.childNodes[1],s=o.parentNode,l=n.childNodes[2],u=l.parentNode,d=n.childNodes[3],f=d.parentNode,m=(e,t,n)=>{let r=()=>a(j,()=>({label:`searchConfig.defaultValue`,value:p.searchConfig.defaultValue,tone:`warning`}));return e==null?r():c(e,n,r)},h=r.nextSibling;i.removeChild(r),t({parent:i,before:h},()=>m,()=>({}));let g=(e,t,n)=>{let r=()=>a(j,()=>({label:`searchValueRef.value`,value:p.searchValueRef.value,tone:`warning`}));return e==null?r():c(e,n,r)},_=o.nextSibling;s.removeChild(o),t({parent:s,before:_},()=>g,()=>({}));let v=(e,t,n)=>{let r=()=>a(j,()=>({label:`pageRef.value`,value:p.pageRef.value,tone:`warning`}));return e==null?r():c(e,n,r)},y=l.nextSibling;u.removeChild(l),t({parent:u,before:y},()=>v,()=>({}));let b=(e,t,n)=>{let r=()=>a(j,()=>({label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}));return e==null?r():c(e,n,r)},x=d.nextSibling;return f.removeChild(d),t({parent:f,before:x},()=>b,()=>({})),[n,n]}),e=>f(()=>{s.set(e.count),d.set(e.query)}),()=>e(n)))},oe=(n,i,o)=>{let s=l(T(n,`count`)),p=l(T(n,`query`)),m=S(`ReactivePropsObjectSetupChild:hook:0`,()=>({normalized:d(()=>p.get().trim().toUpperCase()||`(empty)`),summary:d(()=>`${p.get().trim().toUpperCase()||`(empty)`} x ${s.get()}`)}));return y(()=>r(u(e=>{let n=O().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,o=n.childNodes[1],s=o.parentNode,l=n.childNodes[2],u=l.parentNode,d=(e,t,n)=>{let r=()=>a(j,()=>({label:`normalized.get()`,value:m.normalized.get(),tone:`success`}));return e==null?r():c(e,n,r)},f=r.nextSibling;i.removeChild(r),t({parent:i,before:f},()=>d,()=>({}));let p=(e,t,n)=>{let r=()=>a(j,()=>({label:`summary.get()`,value:m.summary.get(),tone:`success`}));return e==null?r():c(e,n,r)},h=o.nextSibling;s.removeChild(o),t({parent:s,before:h},()=>p,()=>({}));let g=(e,t,n)=>{let r=()=>a(j,()=>({label:`mode`,value:`useSetup 内改用 props 对象 + computed`}));return e==null?r():c(e,n,r)},_=l.nextSibling;return u.removeChild(l),t({parent:u,before:_},()=>g,()=>({})),[n,n]}),e=>f(()=>{s.set(e.count),p.set(e.query)}),()=>e(n)))},se=(n,i,o)=>{let s=l(T(n,`count`)),p=l(T(n,`query`)),m=S(`ReactiveDestructuredComputedSetupChild:hook:0`,()=>({normalized:d(()=>p.get().trim().toUpperCase()||`(empty)`),summary:d(()=>`${p.get().trim().toUpperCase()||`(empty)`} x ${s.get()}`)}));return y(()=>r(u(e=>{let n=O().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,o=n.childNodes[1],s=o.parentNode,l=n.childNodes[2],u=l.parentNode,d=(e,t,n)=>{let r=()=>a(j,()=>({label:`normalized.get()`,value:m.normalized.get(),tone:`success`}));return e==null?r():c(e,n,r)},f=r.nextSibling;i.removeChild(r),t({parent:i,before:f},()=>d,()=>({}));let p=(e,t,n)=>{let r=()=>a(j,()=>({label:`summary.get()`,value:m.summary.get(),tone:`success`}));return e==null?r():c(e,n,r)},h=o.nextSibling;s.removeChild(o),t({parent:s,before:h},()=>p,()=>({}));let g=(e,t,n)=>{let r=()=>a(j,()=>({label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}));return e==null?r():c(e,n,r)},_=l.nextSibling;return u.removeChild(l),t({parent:u,before:_},()=>g,()=>({})),[n,n]}),e=>f(()=>{s.set(e.count),p.set(e.query)}),()=>e(n)))},ce=(e,n,r)=>{let{setupState:o,__rue_phase2_setupState:s}=i(`useSetup:0:0`,()=>{let t=d(()=>S(`plan:4448:hook:0`,()=>({normalized:d(()=>((T(e,`options`)===void 0?{}:T(e,`options`)).query===void 0?` nested-default `:(T(e,`options`)===void 0?{}:T(e,`options`)).query).trim().toUpperCase()||`(empty)`),total:d(()=>((T(e,`counts`)===void 0?[]:T(e,`counts`))[0]===void 0?1:(T(e,`counts`)===void 0?[]:T(e,`counts`))[0])+((T(e,`counts`)===void 0?[]:T(e,`counts`))[1]===void 0?2:(T(e,`counts`)===void 0?[]:T(e,`counts`))[1])),summary:d(()=>`${((T(e,`options`)===void 0?{}:T(e,`options`)).meta===void 0?{}:(T(e,`options`)===void 0?{}:T(e,`options`)).meta).label===void 0?`fallback-label`:((T(e,`options`)===void 0?{}:T(e,`options`)).meta===void 0?{}:(T(e,`options`)===void 0?{}:T(e,`options`)).meta).label}:${((T(e,`options`)===void 0?{}:T(e,`options`)).query===void 0?` nested-default `:(T(e,`options`)===void 0?{}:T(e,`options`)).query).trim().toUpperCase()||`(empty)`} x ${((T(e,`counts`)===void 0?[]:T(e,`counts`))[0]===void 0?1:(T(e,`counts`)===void 0?[]:T(e,`counts`))[0])+((T(e,`counts`)===void 0?[]:T(e,`counts`))[1]===void 0?2:(T(e,`counts`)===void 0?[]:T(e,`counts`))[1])}`),tuple:d(()=>`${(T(e,`counts`)===void 0?[]:T(e,`counts`))[0]===void 0?1:(T(e,`counts`)===void 0?[]:T(e,`counts`))[0]}-${(T(e,`counts`)===void 0?[]:T(e,`counts`))[1]===void 0?2:(T(e,`counts`)===void 0?[]:T(e,`counts`))[1]}`)})));return t.get(),{setupState:t,__rue_phase2_setupState:t}});return u(e=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,s=n.childNodes[1],l=s.parentNode,u=n.childNodes[2],d=u.parentNode,f=n.childNodes[3],p=f.parentNode,m=n.childNodes[4],h=m.parentNode,g=(e,t,n)=>{let r=()=>a(j,()=>({label:`normalized.get()`,value:o.get().normalized.get(),tone:`success`}));return e==null?r():c(e,n,r)},_=r.nextSibling;i.removeChild(r),t({parent:i,before:_},()=>g,()=>({}));let v=(e,t,n)=>{let r=()=>a(j,()=>({label:`total.get()`,value:o.get().total.get(),tone:`success`}));return e==null?r():c(e,n,r)},y=s.nextSibling;l.removeChild(s),t({parent:l,before:y},()=>v,()=>({}));let b=(e,t,n)=>{let r=()=>a(j,()=>({label:`summary.get()`,value:o.get().summary.get(),tone:`success`}));return e==null?r():c(e,n,r)},x=u.nextSibling;d.removeChild(u),t({parent:d,before:x},()=>b,()=>({}));let S=(e,t,n)=>{let r=()=>a(j,()=>({label:`tuple.get()`,value:o.get().tuple.get(),tone:`success`}));return e==null?r():c(e,n,r)},C=f.nextSibling;p.removeChild(f),t({parent:p,before:C},()=>S,()=>({}));let w=(e,t,n)=>{let r=()=>a(j,()=>({label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}));return e==null?r():c(e,n,r)},T=m.nextSibling;return h.removeChild(m),t({parent:h,before:T},()=>w,()=>({})),[n,n]})},le=(e,n,r)=>{let{setupState:o,__rue_phase2_setupState:s}=i(`useSetup:0:0`,()=>{let t=d(()=>S(`plan:5499:hook:0`,()=>{let t=((T(e,`options`)===void 0?{}:T(e,`options`)).query===void 0?` nested-default `:(T(e,`options`)===void 0?{}:T(e,`options`)).query).trim().toUpperCase()||`(empty)`,n=((T(e,`counts`)===void 0?[]:T(e,`counts`))[0]===void 0?1:(T(e,`counts`)===void 0?[]:T(e,`counts`))[0])+((T(e,`counts`)===void 0?[]:T(e,`counts`))[1]===void 0?2:(T(e,`counts`)===void 0?[]:T(e,`counts`))[1]);return{normalized:t,total:n,summary:`${((T(e,`options`)===void 0?{}:T(e,`options`)).meta===void 0?{}:(T(e,`options`)===void 0?{}:T(e,`options`)).meta).label===void 0?`fallback-label`:((T(e,`options`)===void 0?{}:T(e,`options`)).meta===void 0?{}:(T(e,`options`)===void 0?{}:T(e,`options`)).meta).label}:${t} x ${n}`,tuple:`${(T(e,`counts`)===void 0?[]:T(e,`counts`))[0]===void 0?1:(T(e,`counts`)===void 0?[]:T(e,`counts`))[0]}-${(T(e,`counts`)===void 0?[]:T(e,`counts`))[1]===void 0?2:(T(e,`counts`)===void 0?[]:T(e,`counts`))[1]}`}}));return t.get(),{setupState:t,__rue_phase2_setupState:t}});return u(e=>{let n=ne().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,s=n.childNodes[1],l=s.parentNode,u=n.childNodes[2],d=u.parentNode,f=n.childNodes[3],p=f.parentNode,m=n.childNodes[4],h=m.parentNode,g=(e,t,n)=>{let r=()=>a(j,()=>({label:`normalized`,value:o.get().normalized,tone:`warning`}));return e==null?r():c(e,n,r)},_=r.nextSibling;i.removeChild(r),t({parent:i,before:_},()=>g,()=>({}));let v=(e,t,n)=>{let r=()=>a(j,()=>({label:`total`,value:o.get().total,tone:`warning`}));return e==null?r():c(e,n,r)},y=s.nextSibling;l.removeChild(s),t({parent:l,before:y},()=>v,()=>({}));let b=(e,t,n)=>{let r=()=>a(j,()=>({label:`summary`,value:o.get().summary,tone:`warning`}));return e==null?r():c(e,n,r)},x=u.nextSibling;d.removeChild(u),t({parent:d,before:x},()=>b,()=>({}));let S=(e,t,n)=>{let r=()=>a(j,()=>({label:`tuple`,value:o.get().tuple,tone:`warning`}));return e==null?r():c(e,n,r)},C=f.nextSibling;p.removeChild(f),t({parent:p,before:C},()=>S,()=>({}));let w=(e,t,n)=>{let r=()=>a(j,()=>({label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}));return e==null?r():c(e,n,r)},T=m.nextSibling;return h.removeChild(m),t({parent:h,before:T},()=>w,()=>({})),[n,n]})},M=(e,t,r)=>{let i=v(`preview`),l=v(` transfer `),d=v(2),f=v(` nested transfer `),b=v(`deep-live`),S=v(3),w=v(5),T=v(!0),E=v(!0),O=v(!0),k=[` transfer `,` rue `,` vapor `,` setup `],ne=()=>{let e=k.findIndex(e=>e===l.value),t=e<0?0:(e+1)%k.length;l.value=k[t]};return y(()=>a(D,()=>({children:(e,t,r)=>{let a=()=>u(e=>{let t=_(),r=re().content.cloneNode(!0),a=r.firstChild,v=a.childNodes[1].childNodes[0],y=a.childNodes[1].childNodes[1],D=a.childNodes[2].childNodes[0],k=D.parentNode,M=a.childNodes[2].childNodes[1],ue=M.parentNode;t.appendChild(r),v.setAttribute(`role`,`tab`);let N;g(()=>{let e=`tab ${i.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,v.setAttribute(`class`,t))}),x(C(e,v,`click`,()=>()=>{i.value=`preview`})),y.setAttribute(`role`,`tab`);let P;g(()=>{let e=`tab ${i.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(P,t)||(P=t,y.setAttribute(`class`,t))}),x(C(e,y,`click`,()=>()=>{i.value=`code`})),o(k,D,()=>{let e=i.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>u(e=>{let t=_(),r=h(`section`,t);p(t,r),r.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm`);let i=h(`div`,r);p(r,i),i.setAttribute(`class`,`card-body gap-5`);let a=h(`div`,i);p(i,a),a.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let o=h(`label`,a);p(a,o),o.setAttribute(`class`,`form-control grid gap-2`);let s=h(`span`,o);p(o,s),s.setAttribute(`class`,`label-text font-medium`),p(s,m(`父组件 props.query`));let v=h(`input`,o);p(o,v),v.setAttribute(`class`,`input input-bordered`);let y;g(()=>{let e=l.value,t=e==null?``:String(e);Object.is(y,t)||(y=t,v.value=t)});let ee=e=>{let t=e=>{l.value=e.target.value};typeof t==`function`&&t(e)};v.addEventListener(`input`,ee),x(()=>v.removeEventListener(`input`,ee));let D=h(`button`,a);p(a,D),D.setAttribute(`class`,`btn btn-outline`);let te=e=>{let t=ne;typeof t==`function`&&t(e)};D.addEventListener(`click`,te),x(()=>D.removeEventListener(`click`,te)),p(D,m(`切换预设 query`));let k=h(`div`,i);p(i,k),k.setAttribute(`class`,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let re=h(`span`,k);p(k,re),re.setAttribute(`class`,`text-sm font-medium`),p(re,m(`父组件 props.count`));let M=h(`div`,k);p(k,M),M.setAttribute(`class`,`join`);let ue=h(`button`,M);p(M,ue),ue.setAttribute(`class`,`btn join-item btn-outline`),x(C(e,ue,`click`,()=>()=>{--d.value})),p(ue,m(`-1`));let N=h(`button`,M);p(M,N),N.setAttribute(`class`,`btn join-item btn-outline`),x(C(e,N,`click`,()=>()=>{d.value+=1})),p(N,m(`+1`));let P=h(`input`,k);p(k,P),P.setAttribute(`class`,`range range-primary`),P.setAttribute(`type`,`range`),P.setAttribute(`min`,`0`),P.setAttribute(`max`,`12`),P.setAttribute(`step`,`1`);let de;g(()=>{let e=String(d.value),t=e==null?``:String(e);Object.is(de,t)||(de=t,P.value=t)});let fe=e=>{let t=e=>{d.value=Number(e.target.value)};typeof t==`function`&&t(e)};P.addEventListener(`input`,fe),x(()=>P.removeEventListener(`input`,fe));let F=h(`div`,i);p(i,F),F.setAttribute(`class`,`grid gap-3 md:grid-cols-3`),n(F,j,()=>({label:`当前 query`,value:l.value})),n(F,j,()=>({label:`trim().toUpperCase()`,value:l.value.trim().toUpperCase()||`(empty)`})),n(F,j,()=>({label:`当前 count`,value:d.value}));let I=h(`div`,t);p(t,I),I.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`),n(I,A,()=>({title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:(e,t,r)=>{let i=()=>u(e=>{let t=_();n(t,ie,()=>({query:l.value,count:d.value}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}})),n(I,A,()=>({title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:(e,t,r)=>{let i=()=>u(e=>{let t=_();n(t,ae,()=>({query:l.value,count:d.value}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}})),n(I,A,()=>({title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:(e,t,r)=>{let i=()=>u(e=>{let t=_();n(t,oe,()=>({query:l.value,count:d.value}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}})),n(I,A,()=>({title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:(e,t,r)=>{let i=()=>u(e=>{let t=_();n(t,se,()=>({query:l.value,count:d.value}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}}));let pe=h(`div`,t);p(t,pe),pe.setAttribute(`class`,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),p(pe,m(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 编译 props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`));let me=h(`section`,t);p(t,me),me.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm`);let L=h(`div`,me);p(me,L),L.setAttribute(`class`,`card-body gap-5`);let R=h(`div`,L);p(L,R),R.setAttribute(`class`,`space-y-1`);let he=h(`h2`,R);p(R,he),he.setAttribute(`class`,`text-lg font-semibold leading-tight`),p(he,m(`Nested 解构边界`));let ge=h(`p`,R);p(R,ge),ge.setAttribute(`class`,`text-sm text-base-content/70 leading-6`),p(ge,m(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let z=h(`div`,L);p(L,z),z.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let B=h(`label`,z);p(z,B),B.setAttribute(`class`,`form-control grid gap-2`);let _e=h(`span`,B);p(B,_e),_e.setAttribute(`class`,`label-text font-medium`),p(_e,m(`nested options.query`));let V=h(`input`,B);p(B,V),V.setAttribute(`class`,`input input-bordered`);let ve;g(()=>{let e=f.value,t=e==null?``:String(e);Object.is(ve,t)||(ve=t,V.value=t)});let ye=e=>{let t=e=>{f.value=e.target.value};typeof t==`function`&&t(e)};V.addEventListener(`input`,ye),x(()=>V.removeEventListener(`input`,ye));let H=h(`label`,z);p(z,H),H.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let U=h(`input`,H);p(H,U),U.setAttribute(`class`,`checkbox checkbox-sm`),U.setAttribute(`type`,`checkbox`);let be;g(()=>{let e=!!T.value;Object.is(be,e)||(be=e,U.checked=e)});let xe=e=>{let t=e=>{T.value=!!e.target.checked};typeof t==`function`&&t(e)};U.addEventListener(`input`,xe),x(()=>U.removeEventListener(`input`,xe));let Se=h(`span`,H);p(H,Se),Se.setAttribute(`class`,`label-text`),p(Se,m(`传入 options`));let W=h(`div`,L);p(L,W),W.setAttribute(`class`,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let G=h(`label`,W);p(W,G),G.setAttribute(`class`,`form-control grid gap-2`);let Ce=h(`span`,G);p(G,Ce),Ce.setAttribute(`class`,`label-text font-medium`),p(Ce,m(`nested options.meta.label`));let we=h(`input`,G);p(G,we),we.setAttribute(`class`,`input input-bordered`);let Te;g(()=>{let e=b.value,t=e==null?``:String(e);Object.is(Te,t)||(Te=t,we.value=t)});let Ee=e=>{let t=e=>{b.value=e.target.value};typeof t==`function`&&t(e)};we.addEventListener(`input`,Ee),x(()=>we.removeEventListener(`input`,Ee));let K=h(`label`,W);p(W,K),K.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let q=h(`input`,K);p(K,q),q.setAttribute(`class`,`checkbox checkbox-sm`),q.setAttribute(`type`,`checkbox`);let De;g(()=>{let e=!!E.value;Object.is(De,e)||(De=e,q.checked=e)});let Oe=e=>{let t=e=>{E.value=!!e.target.checked};typeof t==`function`&&t(e)};q.addEventListener(`input`,Oe),x(()=>q.removeEventListener(`input`,Oe));let ke=h(`span`,K);p(K,ke),ke.setAttribute(`class`,`label-text`),p(ke,m(`传入 meta`));let J=h(`div`,L);p(L,J),J.setAttribute(`class`,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let Ae=h(`span`,J);p(J,Ae),Ae.setAttribute(`class`,`text-sm font-medium`),p(Ae,m(`nested counts`));let Y=h(`div`,J);p(J,Y),Y.setAttribute(`class`,`join`);let je=h(`button`,Y);p(Y,je),je.setAttribute(`class`,`btn join-item btn-outline`),x(C(e,je,`click`,()=>()=>{--S.value})),p(je,m(`first -1`));let Me=h(`button`,Y);p(Y,Me),Me.setAttribute(`class`,`btn join-item btn-outline`),x(C(e,Me,`click`,()=>()=>{S.value+=1})),p(Me,m(`first +1`));let X=h(`input`,J);p(J,X),X.setAttribute(`class`,`range range-primary`),X.setAttribute(`type`,`range`),X.setAttribute(`min`,`0`),X.setAttribute(`max`,`12`),X.setAttribute(`step`,`1`);let Ne;g(()=>{let e=String(w.value),t=e==null?``:String(e);Object.is(Ne,t)||(Ne=t,X.value=t)});let Pe=e=>{let t=e=>{w.value=Number(e.target.value)};typeof t==`function`&&t(e)};X.addEventListener(`input`,Pe),x(()=>X.removeEventListener(`input`,Pe));let Z=h(`label`,J);p(J,Z),Z.setAttribute(`class`,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Q=h(`input`,Z);p(Z,Q),Q.setAttribute(`class`,`checkbox checkbox-sm`),Q.setAttribute(`type`,`checkbox`);let Fe;g(()=>{let e=!!O.value;Object.is(Fe,e)||(Fe=e,Q.checked=e)});let Ie=e=>{let t=e=>{O.value=!!e.target.checked};typeof t==`function`&&t(e)};Q.addEventListener(`input`,Ie),x(()=>Q.removeEventListener(`input`,Ie));let Le=h(`span`,Z);p(Z,Le),Le.setAttribute(`class`,`label-text`),p(Le,m(`传入 counts`));let $=h(`div`,L);p(L,$),$.setAttribute(`class`,`grid gap-3 md:grid-cols-4`),n($,j,()=>({label:`options.query`,value:T.value?f.value:`undefined`})),n($,j,()=>({label:`options.meta.label`,value:T.value&&E.value?b.value:`undefined`})),n($,j,()=>({label:`counts[0]`,value:O.value?S.value:`undefined`})),n($,j,()=>({label:`counts[1]`,value:O.value?w.value:`undefined`}));let Re=h(`div`,t);p(t,Re),Re.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`),n(Re,A,()=>({title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:(e,t,r)=>{let i=()=>u(e=>{let t=_();n(t,ce,()=>({options:T.value?{query:f.value,meta:E.value?{label:b.value}:void 0}:void 0,counts:O.value?[S.value,w.value]:void 0}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}})),n(Re,A,()=>({title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:(e,t,r)=>{let i=()=>u(e=>{let t=_();n(t,le,()=>({options:T.value?{query:f.value,meta:E.value?{label:b.value}:void 0}:void 0,counts:O.value?[S.value,w.value]:void 0}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,r,i)}}));let ze=h(`div`,t);p(t,ze),ze.setAttribute(`class`,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),p(ze,m(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 编译 props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`));let Be=m(``),Ve=m(``);return t.insertBefore(Be,t.firstChild),t.appendChild(Ve),[t.firstChild,t.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=_();return[t.firstChild,t.lastChild]})}}),o(ue,M,()=>{let e=i.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>u(e=>{let t=h(`div`,e);t.setAttribute(`class`,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let r=h(`div`,t);return p(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,ee,()=>({className:`h-full`,lang:`tsx`,code:te})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=_();return[t.firstChild,t.lastChild]})}});let de=m(``),fe=m(``);return t.insertBefore(de,t.firstChild),t.appendChild(fe),[t.firstChild,t.lastChild]});return e==null?a():c(e,r,a)}})))};export{M as default};