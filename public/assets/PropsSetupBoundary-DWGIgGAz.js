import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,ft as u,gt as d,l as f,ot as p,pt as m,q as h,qt as g,s as _,st as v,t as y,x as b}from"./vapor-runtime-iQZthBPQ.js";import{a as x}from"./vapor-helpers-vapor-BjKHCvOa.js";import{i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as ee}from"./Code-CZqShVUj.js";import{r as C}from"./SidebarPlaygroundExample-5H7RL-T7.js";var w=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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

  return h(
    'div',
    { className: 'grid gap-2' },
    <FieldRow label="normalized" value={normalized} tone="success" />,
    <FieldRow label="summary" value={summary} tone="success" />,
    <FieldRow label="mode" value="render 期直接读取解构 props" />,
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
`,T=e=>f(r=>{let s=i(`section`,r);v(s,`card border border-base-300 bg-base-100 shadow-sm`);let c=i(`div`,s);n(s,c),v(c,`card-body gap-4`);let l=i(`div`,c);n(c,l),v(l,`space-y-1`);let u=i(`h2`,l);n(l,u),v(u,`text-lg font-semibold leading-tight`);let d=a(`rue:slot:anchor`);n(u,d),o(()=>{let n=e.title;t(()=>_(n,u,d))});let f=i(`p`,l);n(l,f),v(f,`text-sm text-base-content/70 leading-6`);let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let n=e.note;t(()=>_(n,f,p))});let m=i(`div`,c);n(c,m),v(m,`grid gap-2 text-sm text-base-content/85`);let h=a(`rue:children:anchor`);return n(m,h),o(()=>{let n=e.children;t(()=>_(n,m,h))}),s}),E=e=>{let{toneClassName:r}=x(`useSetup:0:0`,()=>g(()=>({toneClassName:x(`computed:1:0`,()=>d(()=>e.tone===`success`?`border-success/30 bg-success/10 text-success`:e.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return f(s=>{let c=i(`div`,s);v(c,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let u=i(`span`,c);n(c,u),v(u,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let d=a(`rue:slot:anchor`);n(u,d),o(()=>{let n=e.label;t(()=>_(n,u,d))});let f=i(`span`,c);n(c,f),o(()=>{v(f,`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${r.get()}`)});let p=l(f);return n(f,p),o(()=>{m(p,String(e.value))}),c})},te=e=>{let{normalized:t,summary:n}=x(`useSetup:0:0:dup1`,()=>g(()=>{let t=x(`computed:1:1`,()=>d(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:x(`computed:1:2`,()=>d(()=>`${n.get()} x ${e.count}`))}}));return b(`div`,{className:`grid gap-2`},S(E,{label:`normalized`,value:t.get(),tone:`success`}),S(E,{label:`summary`,value:n.get(),tone:`success`}),S(E,{label:`mode`,value:`render 期直接读取解构 props`}))},ne=e=>{let{setupState:s}=x(`useSetup:0:0:dup2`,()=>g(()=>({setupState:x(`useSetup:1:5`,()=>g(()=>{let t={defaultValue:e.query.trim().toUpperCase()||`(empty)`};return{searchConfig:t,searchValueRef:x(`ref:1:3`,()=>r(t.defaultValue)),pageRef:x(`ref:1:4`,()=>r(e.count))}}))})));return f(e=>{let r=i(`div`,e);v(r,`grid gap-2`);let c=a(`rue:component:anchor`);n(r,c),o(()=>{let e=y(E,{label:`searchConfig.defaultValue`,value:s.searchConfig.defaultValue,tone:`warning`});t(()=>_(e,r,c))});let l=a(`rue:component:anchor`);n(r,l),o(()=>{let e=y(E,{label:`searchValueRef.value`,value:s.searchValueRef.value,tone:`warning`});t(()=>_(e,r,l))});let u=a(`rue:component:anchor`);n(r,u),o(()=>{let e=y(E,{label:`pageRef.value`,value:s.pageRef.value,tone:`warning`});t(()=>_(e,r,u))});let d=a(`rue:component:anchor`);return n(r,d),_(y(E,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),r,d),r})},re=e=>{let{setupState:r}=x(`useSetup:0:0:dup3`,()=>g(()=>({setupState:x(`useSetup:1:8`,()=>g(()=>({normalized:x(`computed:1:6`,()=>d(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:7`,()=>d(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))})))})));return f(e=>{let s=i(`div`,e);v(s,`grid gap-2`);let c=a(`rue:component:anchor`);n(s,c),o(()=>{let e=y(E,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});t(()=>_(e,s,c))});let l=a(`rue:component:anchor`);n(s,l),o(()=>{let e=y(E,{label:`summary.get()`,value:r.summary.get(),tone:`success`});t(()=>_(e,s,l))});let u=a(`rue:component:anchor`);return n(s,u),_(y(E,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),s,u),s})},ie=e=>{let{setupState:r}=x(`useSetup:0:0:dup4`,()=>g(()=>({setupState:x(`useSetup:1:11`,()=>g(()=>({normalized:x(`computed:1:9`,()=>d(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:10`,()=>d(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))})))})));return f(e=>{let s=i(`div`,e);v(s,`grid gap-2`);let c=a(`rue:component:anchor`);n(s,c),o(()=>{let e=y(E,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});t(()=>_(e,s,c))});let l=a(`rue:component:anchor`);n(s,l),o(()=>{let e=y(E,{label:`summary.get()`,value:r.summary.get(),tone:`success`});t(()=>_(e,s,l))});let u=a(`rue:component:anchor`);return n(s,u),_(y(E,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),s,u),s})},ae=e=>{let{setupState:r}=x(`useSetup:0:0:dup5`,()=>g(()=>({setupState:x(`useSetup:1:16`,()=>g(()=>({normalized:x(`computed:1:12`,()=>d(()=>((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`)),total:x(`computed:1:13`,()=>d(()=>((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]))),summary:x(`computed:1:14`,()=>d(()=>`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`} x ${((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1])}`)),tuple:x(`computed:1:15`,()=>d(()=>`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`))})))})));return f(e=>{let s=i(`div`,e);v(s,`grid gap-2`);let c=a(`rue:component:anchor`);n(s,c),o(()=>{let e=y(E,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});t(()=>_(e,s,c))});let l=a(`rue:component:anchor`);n(s,l),o(()=>{let e=y(E,{label:`total.get()`,value:r.total.get(),tone:`success`});t(()=>_(e,s,l))});let u=a(`rue:component:anchor`);n(s,u),o(()=>{let e=y(E,{label:`summary.get()`,value:r.summary.get(),tone:`success`});t(()=>_(e,s,u))});let d=a(`rue:component:anchor`);n(s,d),o(()=>{let e=y(E,{label:`tuple.get()`,value:r.tuple.get(),tone:`success`});t(()=>_(e,s,d))});let f=a(`rue:component:anchor`);return n(s,f),_(y(E,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),s,f),s})},oe=e=>{let{setupState:r}=x(`useSetup:0:0:dup6`,()=>g(()=>({setupState:x(`useSetup:1:17`,()=>g(()=>{let t=((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`,n=((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]);return{normalized:t,total:n,summary:`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${t} x ${n}`,tuple:`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`}}))})));return f(e=>{let s=i(`div`,e);v(s,`grid gap-2`);let c=a(`rue:component:anchor`);n(s,c),o(()=>{let e=y(E,{label:`normalized`,value:r.normalized,tone:`warning`});t(()=>_(e,s,c))});let l=a(`rue:component:anchor`);n(s,l),o(()=>{let e=y(E,{label:`total`,value:r.total,tone:`warning`});t(()=>_(e,s,l))});let u=a(`rue:component:anchor`);n(s,u),o(()=>{let e=y(E,{label:`summary`,value:r.summary,tone:`warning`});t(()=>_(e,s,u))});let d=a(`rue:component:anchor`);n(s,d),o(()=>{let e=y(E,{label:`tuple`,value:r.tuple,tone:`warning`});t(()=>_(e,s,d))});let f=a(`rue:component:anchor`);return n(s,f),_(y(E,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),s,f),s})},D=()=>{let{activeTab:l,query:d,count:m,nestedQuery:b,nestedLabel:S,nestedFirst:D,nestedSecond:se,passNestedOptions:O,passNestedMeta:k,passNestedCounts:A,presets:j,nextPreset:ce}=x(`useSetup:0:0:dup7`,()=>g(()=>{let e=x(`ref:1:18`,()=>r(`preview`)),t=x(`ref:1:19`,()=>r(` transfer `)),n=x(`ref:1:20`,()=>r(2)),i=x(`ref:1:21`,()=>r(` nested transfer `)),a=x(`ref:1:22`,()=>r(`deep-live`)),o=x(`ref:1:23`,()=>r(3)),s=x(`ref:1:24`,()=>r(5)),c=x(`ref:1:25`,()=>r(!0)),l=x(`ref:1:26`,()=>r(!0)),u=x(`ref:1:27`,()=>r(!0)),d=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:n,nestedQuery:i,nestedLabel:a,nestedFirst:o,nestedSecond:s,passNestedOptions:c,passNestedMeta:l,passNestedCounts:u,presets:d,nextPreset:()=>{let e=d.findIndex(e=>e===t.value);t.value=d[e<0?0:(e+1)%d.length]}}}));return f(r=>{let g=s(),x=a(`rue:component:anchor`);return n(g,x),_(y(C,{children:f(()=>{let r=s(),g=i(`div`,r);n(r,g),v(g,`space-y-4`);let x=i(`div`,g);n(g,x),v(x,`space-y-3`);let C=i(`h1`,x);n(x,C),v(C,`text-4xl font-semibold tracking-tight`),n(C,e(`Props 与 useSetup 边界`));let j=i(`p`,x);n(x,j),v(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),n(j,e(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let M=i(`p`,x);n(x,M),v(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),n(M,e(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let N=i(`div`,g);n(g,N),c(N,`role`,`tablist`),v(N,`tabs tabs-box`);let P=i(`button`,N);n(N,P),c(P,`role`,`tab`),o(()=>{v(P,`tab ${l.value===`preview`?`tab-active`:``}`)}),h(P,`click`,()=>{l.value=`preview`}),n(P,e(`效果`));let F=i(`button`,N);n(N,F),c(F,`role`,`tab`),o(()=>{v(F,`tab ${l.value===`code`?`tab-active`:``}`)}),h(F,`click`,()=>{l.value=`code`}),n(F,e(`代码`));let I=i(`div`,g);n(g,I),v(I,`mt-4 grid gap-6 items-start`);let L=a(`rue:slot:anchor`);n(I,L),o(()=>{let r=l.value===`preview`?f(()=>{let r=s();n(r,e(` `));let l=i(`section`,r);n(r,l),v(l,`card border border-base-300 bg-base-100 shadow-sm`);let f=i(`div`,l);n(l,f),v(f,`card-body gap-5`);let g=i(`div`,f);n(f,g),v(g,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let x=i(`label`,g);n(g,x),v(x,`form-control grid gap-2`);let ee=i(`span`,x);n(x,ee),v(ee,`label-text font-medium`),n(ee,e(`父组件 props.query`));let C=i(`input`,x);n(x,C),v(C,`input input-bordered`),o(()=>{u(C,d.value)}),h(C,`input`,e=>{d.value=e.target.value});let w=i(`button`,g);n(g,w),v(w,`btn btn-outline`),h(w,`click`,ce),n(w,e(`切换预设 query`));let j=i(`div`,f);n(f,j),v(j,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let M=i(`span`,j);n(j,M),v(M,`text-sm font-medium`),n(M,e(`父组件 props.count`));let N=i(`div`,j);n(j,N),v(N,`join`);let P=i(`button`,N);n(N,P),v(P,`btn join-item btn-outline`),h(P,`click`,()=>{--m.value}),n(P,e(`-1`));let F=i(`button`,N);n(N,F),v(F,`btn join-item btn-outline`),h(F,`click`,()=>{m.value+=1}),n(F,e(`+1`));let I=i(`input`,j);n(j,I),v(I,`range range-primary`),c(I,`type`,`range`),c(I,`min`,`0`),c(I,`max`,`12`),c(I,`step`,`1`),o(()=>{u(I,String(m.value))}),h(I,`input`,e=>{m.value=Number(e.target.value)});let L=i(`div`,f);n(f,L),v(L,`grid gap-3 md:grid-cols-3`);let le=a(`rue:component:anchor`);n(L,le),o(()=>{let e=y(E,{label:`当前 query`,value:d.value});t(()=>_(e,L,le))});let ue=a(`rue:component:anchor`);n(L,ue),o(()=>{let e=y(E,{label:`trim().toUpperCase()`,value:d.value.trim().toUpperCase()||`(empty)`});t(()=>_(e,L,ue))});let de=a(`rue:component:anchor`);n(L,de),o(()=>{let e=y(E,{label:`当前 count`,value:m.value});t(()=>_(e,L,de))}),n(r,e(` `));let R=i(`div`,r);n(r,R),v(R,`grid gap-4 xl:grid-cols-2`);let fe=a(`rue:component:anchor`);n(R,fe),_(y(T,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:y(te,{query:d.value,count:m.value})}),R,fe);let pe=a(`rue:component:anchor`);n(R,pe),_(y(T,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:y(ne,{query:d.value,count:m.value})}),R,pe);let me=a(`rue:component:anchor`);n(R,me),_(y(T,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:y(re,{query:d.value,count:m.value})}),R,me);let he=a(`rue:component:anchor`);n(R,he),_(y(T,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:y(ie,{query:d.value,count:m.value})}),R,he),n(r,e(` `));let ge=i(`div`,r);n(r,ge),v(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),n(ge,e(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),n(r,e(` `));let _e=i(`section`,r);n(r,_e),v(_e,`card border border-base-300 bg-base-100 shadow-sm`);let z=i(`div`,_e);n(_e,z),v(z,`card-body gap-5`);let B=i(`div`,z);n(z,B),v(B,`space-y-1`);let ve=i(`h2`,B);n(B,ve),v(ve,`text-lg font-semibold leading-tight`),n(ve,e(`Nested 解构边界`));let ye=i(`p`,B);n(B,ye),v(ye,`text-sm text-base-content/70 leading-6`),n(ye,e(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let V=i(`div`,z);n(z,V),v(V,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let H=i(`label`,V);n(V,H),v(H,`form-control grid gap-2`);let be=i(`span`,H);n(H,be),v(be,`label-text font-medium`),n(be,e(`nested options.query`));let xe=i(`input`,H);n(H,xe),v(xe,`input input-bordered`),o(()=>{u(xe,b.value)}),h(xe,`input`,e=>{b.value=e.target.value});let U=i(`label`,V);n(V,U),v(U,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let W=i(`input`,U);n(U,W),v(W,`checkbox checkbox-sm`),c(W,`type`,`checkbox`),o(()=>{p(W,!!O.value)}),h(W,`input`,e=>{O.value=!!e.target.checked});let Se=i(`span`,U);n(U,Se),v(Se,`label-text`),n(Se,e(`传入 options`));let G=i(`div`,z);n(z,G),v(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=i(`label`,G);n(G,K),v(K,`form-control grid gap-2`);let Ce=i(`span`,K);n(K,Ce),v(Ce,`label-text font-medium`),n(Ce,e(`nested options.meta.label`));let we=i(`input`,K);n(K,we),v(we,`input input-bordered`),o(()=>{u(we,S.value)}),h(we,`input`,e=>{S.value=e.target.value});let q=i(`label`,G);n(G,q),v(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Te=i(`input`,q);n(q,Te),v(Te,`checkbox checkbox-sm`),c(Te,`type`,`checkbox`),o(()=>{p(Te,!!k.value)}),h(Te,`input`,e=>{k.value=!!e.target.checked});let Ee=i(`span`,q);n(q,Ee),v(Ee,`label-text`),n(Ee,e(`传入 meta`));let J=i(`div`,z);n(z,J),v(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=i(`span`,J);n(J,De),v(De,`text-sm font-medium`),n(De,e(`nested counts`));let Y=i(`div`,J);n(J,Y),v(Y,`join`);let Oe=i(`button`,Y);n(Y,Oe),v(Oe,`btn join-item btn-outline`),h(Oe,`click`,()=>{--D.value}),n(Oe,e(`first -1`));let ke=i(`button`,Y);n(Y,ke),v(ke,`btn join-item btn-outline`),h(ke,`click`,()=>{D.value+=1}),n(ke,e(`first +1`));let X=i(`input`,J);n(J,X),v(X,`range range-primary`),c(X,`type`,`range`),c(X,`min`,`0`),c(X,`max`,`12`),c(X,`step`,`1`),o(()=>{u(X,String(se.value))}),h(X,`input`,e=>{se.value=Number(e.target.value)});let Z=i(`label`,J);n(J,Z),v(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=i(`input`,Z);n(Z,Ae),v(Ae,`checkbox checkbox-sm`),c(Ae,`type`,`checkbox`),o(()=>{p(Ae,!!A.value)}),h(Ae,`input`,e=>{A.value=!!e.target.checked});let je=i(`span`,Z);n(Z,je),v(je,`label-text`),n(je,e(`传入 counts`));let Q=i(`div`,z);n(z,Q),v(Q,`grid gap-3 md:grid-cols-4`);let Me=a(`rue:component:anchor`);n(Q,Me),o(()=>{let e=y(E,{label:`options.query`,value:O.value?b.value:`undefined`});t(()=>_(e,Q,Me))});let Ne=a(`rue:component:anchor`);n(Q,Ne),o(()=>{let e=y(E,{label:`options.meta.label`,value:O.value&&k.value?S.value:`undefined`});t(()=>_(e,Q,Ne))});let Pe=a(`rue:component:anchor`);n(Q,Pe),o(()=>{let e=y(E,{label:`counts[0]`,value:A.value?D.value:`undefined`});t(()=>_(e,Q,Pe))});let Fe=a(`rue:component:anchor`);n(Q,Fe),o(()=>{let e=y(E,{label:`counts[1]`,value:A.value?se.value:`undefined`});t(()=>_(e,Q,Fe))}),n(r,e(` `));let $=i(`div`,r);n(r,$),v($,`grid gap-4 xl:grid-cols-2`);let Ie=a(`rue:component:anchor`);n($,Ie),_(y(T,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:y(ae,{options:O.value?{query:b.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Ie);let Le=a(`rue:component:anchor`);n($,Le),_(y(T,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:y(oe,{options:O.value?{query:b.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Le),n(r,e(` `));let Re=i(`div`,r);return n(r,Re),v(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),n(Re,e(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),n(r,e(` `)),r}):``;t(()=>_(r,I,L))}),n(I,e(` `));let le=a(`rue:slot:anchor`);return n(I,le),o(()=>{let e=l.value===`code`?f(()=>{let e=s(),r=i(`div`,e);n(e,r),v(r,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let c=i(`div`,r);n(r,c),v(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=y(ee,{className:`h-full`,lang:`tsx`,code:w});t(()=>_(e,c,l))}),e}):``;t(()=>_(e,I,le))}),r})}),g,x),g})};export{D as default};