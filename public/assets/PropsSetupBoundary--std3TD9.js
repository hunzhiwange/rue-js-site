import{Cn as e,Ct as t,Lt as n,Mt as r,Tt as i,dt as a,ft as o,ht as s,jt as c,m as l,mt as u,ot as d,pn as f,pt as p,st as m,tn as h,vn as g,wt as ee}from"./context-8lXZvIn-.js";import{l as _,o as v,t as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as te}from"./Code-DhoWkRkB.js";import{t as x}from"./src-CCTNpCXV.js";import{r as S}from"./SidebarPlaygroundExample-B78jsvoF.js";var C=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,w=e=>_(t=>{let n=p(`section`,t);i(n,`card border border-base-300 bg-base-100 shadow-sm`);let r=p(`div`,n);m(n,r),i(r,`card-body gap-4`);let o=p(`div`,r);m(r,o),i(o,`space-y-1`);let s=p(`h2`,o);m(o,s),i(s,`text-lg font-semibold leading-tight`);let c=a(`rue:slot:anchor`);m(s,c),h(()=>{let t=e.title;g(()=>v(t,s,c))});let l=p(`p`,o);m(o,l),i(l,`text-sm text-base-content/70 leading-6`);let u=a(`rue:slot:anchor`);m(l,u),h(()=>{let t=e.note;g(()=>v(t,l,u))});let d=p(`div`,r);m(r,d),i(d,`grid gap-2 text-sm text-base-content/85`);let f=a(`rue:children:anchor`);return m(d,f),h(()=>{let t=e.children;g(()=>v(t,d,f))}),n}),T=t=>{let{toneClassName:o}=b(`useSetup:0:0`,()=>e(()=>({toneClassName:b(`computed:1:0`,()=>n(()=>t.tone===`success`?`border-success/30 bg-success/10 text-success`:t.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return _(e=>{let n=p(`div`,e);i(n,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let c=p(`span`,n);m(n,c),i(c,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let l=a(`rue:slot:anchor`);m(c,l),h(()=>{let e=t.label;g(()=>v(e,c,l))});let u=p(`span`,n);m(n,u),h(()=>{i(u,`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${o.get()}`)});let d=s(u);return m(u,d),h(()=>{r(d,String(t.value))}),n})},ne=t=>{let{normalized:r,summary:i}=b(`useSetup:0:0:dup1`,()=>e(()=>{let e=b(`computed:1:1`,()=>n(()=>t.query.trim().toUpperCase()||`(empty)`)),r=e;return{normalized:e,summary:b(`computed:1:2`,()=>n(()=>`${r.get()} x ${t.count}`))}}));return l(`div`,{className:`grid gap-2`},x(T,{label:`normalized`,value:r.get(),tone:`success`}),x(T,{label:`summary`,value:i.get(),tone:`success`}),x(T,{label:`mode`,value:`render 期直接读取解构 props`}))},re=t=>{let{setupState:n}=b(`useSetup:0:0:dup2`,()=>e(()=>({setupState:b(`useSetup:1:5`,()=>e(()=>{let e={defaultValue:t.query.trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:b(`ref:1:3`,()=>f(e.defaultValue)),pageRef:b(`ref:1:4`,()=>f(t.count))}}))})));return _(e=>{let t=p(`div`,e);i(t,`grid gap-2`);let r=a(`rue:component:anchor`);m(t,r),h(()=>{let e=y(T,{label:`searchConfig.defaultValue`,value:n.searchConfig.defaultValue,tone:`warning`});g(()=>v(e,t,r))});let o=a(`rue:component:anchor`);m(t,o),h(()=>{let e=y(T,{label:`searchValueRef.value`,value:n.searchValueRef.value,tone:`warning`});g(()=>v(e,t,o))});let s=a(`rue:component:anchor`);m(t,s),h(()=>{let e=y(T,{label:`pageRef.value`,value:n.pageRef.value,tone:`warning`});g(()=>v(e,t,s))});let c=a(`rue:component:anchor`);return m(t,c),v(y(T,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),t,c),t})},ie=t=>{let{setupState:r}=b(`useSetup:0:0:dup3`,()=>e(()=>({setupState:b(`useSetup:1:8`,()=>e(()=>({normalized:b(`computed:1:6`,()=>n(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:7`,()=>n(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return _(e=>{let t=p(`div`,e);i(t,`grid gap-2`);let n=a(`rue:component:anchor`);m(t,n),h(()=>{let e=y(T,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});g(()=>v(e,t,n))});let o=a(`rue:component:anchor`);m(t,o),h(()=>{let e=y(T,{label:`summary.get()`,value:r.summary.get(),tone:`success`});g(()=>v(e,t,o))});let s=a(`rue:component:anchor`);return m(t,s),v(y(T,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),t,s),t})},ae=t=>{let{setupState:r}=b(`useSetup:0:0:dup4`,()=>e(()=>({setupState:b(`useSetup:1:11`,()=>e(()=>({normalized:b(`computed:1:9`,()=>n(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:10`,()=>n(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return _(e=>{let t=p(`div`,e);i(t,`grid gap-2`);let n=a(`rue:component:anchor`);m(t,n),h(()=>{let e=y(T,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});g(()=>v(e,t,n))});let o=a(`rue:component:anchor`);m(t,o),h(()=>{let e=y(T,{label:`summary.get()`,value:r.summary.get(),tone:`success`});g(()=>v(e,t,o))});let s=a(`rue:component:anchor`);return m(t,s),v(y(T,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),t,s),t})},oe=t=>{let{setupState:r}=b(`useSetup:0:0:dup5`,()=>e(()=>({setupState:b(`useSetup:1:16`,()=>e(()=>({normalized:b(`computed:1:12`,()=>n(()=>((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`)),total:b(`computed:1:13`,()=>n(()=>((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]))),summary:b(`computed:1:14`,()=>n(()=>`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`} x ${((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1])}`)),tuple:b(`computed:1:15`,()=>n(()=>`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`))})))})));return _(e=>{let t=p(`div`,e);i(t,`grid gap-2`);let n=a(`rue:component:anchor`);m(t,n),h(()=>{let e=y(T,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});g(()=>v(e,t,n))});let o=a(`rue:component:anchor`);m(t,o),h(()=>{let e=y(T,{label:`total.get()`,value:r.total.get(),tone:`success`});g(()=>v(e,t,o))});let s=a(`rue:component:anchor`);m(t,s),h(()=>{let e=y(T,{label:`summary.get()`,value:r.summary.get(),tone:`success`});g(()=>v(e,t,s))});let c=a(`rue:component:anchor`);m(t,c),h(()=>{let e=y(T,{label:`tuple.get()`,value:r.tuple.get(),tone:`success`});g(()=>v(e,t,c))});let l=a(`rue:component:anchor`);return m(t,l),v(y(T,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),t,l),t})},se=t=>{let{setupState:n}=b(`useSetup:0:0:dup6`,()=>e(()=>({setupState:b(`useSetup:1:17`,()=>e(()=>{let e=((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`,n=((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]);return{normalized:e,total:n,summary:`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${e} x ${n}`,tuple:`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`}}))})));return _(e=>{let t=p(`div`,e);i(t,`grid gap-2`);let r=a(`rue:component:anchor`);m(t,r),h(()=>{let e=y(T,{label:`normalized`,value:n.normalized,tone:`warning`});g(()=>v(e,t,r))});let o=a(`rue:component:anchor`);m(t,o),h(()=>{let e=y(T,{label:`total`,value:n.total,tone:`warning`});g(()=>v(e,t,o))});let s=a(`rue:component:anchor`);m(t,s),h(()=>{let e=y(T,{label:`summary`,value:n.summary,tone:`warning`});g(()=>v(e,t,s))});let c=a(`rue:component:anchor`);m(t,c),h(()=>{let e=y(T,{label:`tuple`,value:n.tuple,tone:`warning`});g(()=>v(e,t,c))});let l=a(`rue:component:anchor`);return m(t,l),v(y(T,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),t,l),t})},E=()=>{let{activeTab:n,query:r,count:s,nestedQuery:l,nestedLabel:x,nestedFirst:E,nestedSecond:ce,passNestedOptions:D,passNestedMeta:O,passNestedCounts:k,presets:A,nextPreset:le}=b(`useSetup:0:0:dup7`,()=>e(()=>{let e=b(`ref:1:18`,()=>f(`preview`)),t=b(`ref:1:19`,()=>f(` transfer `)),n=b(`ref:1:20`,()=>f(2)),r=b(`ref:1:21`,()=>f(` nested transfer `)),i=b(`ref:1:22`,()=>f(`deep-live`)),a=b(`ref:1:23`,()=>f(3)),o=b(`ref:1:24`,()=>f(5)),s=b(`ref:1:25`,()=>f(!0)),c=b(`ref:1:26`,()=>f(!0)),l=b(`ref:1:27`,()=>f(!0)),u=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:n,nestedQuery:r,nestedLabel:i,nestedFirst:a,nestedSecond:o,passNestedOptions:s,passNestedMeta:c,passNestedCounts:l,presets:u,nextPreset:()=>{let e=u.findIndex(e=>e===t.value),n=e<0?0:(e+1)%u.length;t.value=u[n]}}}));return _(e=>{let f=o(),b=a(`rue:component:anchor`);return m(f,b),v(y(S,{children:_(()=>{let e=o(),f=p(`div`,e);m(e,f),i(f,`space-y-4`);let b=p(`div`,f);m(f,b),i(b,`space-y-3`);let S=p(`h1`,b);m(b,S),i(S,`text-4xl font-semibold tracking-tight`),m(S,u(`Props 与 useSetup 边界`));let A=p(`p`,b);m(b,A),i(A,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),m(A,u(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let j=p(`p`,b);m(b,j),i(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),m(j,u(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let M=p(`div`,f);m(f,M),t(M,`role`,`tablist`),i(M,`tabs tabs-box`);let N=p(`button`,M);m(M,N),t(N,`role`,`tab`),h(()=>{i(N,`tab ${n.value===`preview`?`tab-active`:``}`)}),d(N,`click`,()=>{n.value=`preview`}),m(N,u(`效果`));let P=p(`button`,M);m(M,P),t(P,`role`,`tab`),h(()=>{i(P,`tab ${n.value===`code`?`tab-active`:``}`)}),d(P,`click`,()=>{n.value=`code`}),m(P,u(`代码`));let F=p(`div`,f);m(f,F),i(F,`mt-4 grid gap-6 items-start`);let I=a(`rue:slot:anchor`);m(F,I),h(()=>{let e=n.value===`preview`?_(()=>{let e=o();m(e,u(` `));let n=p(`section`,e);m(e,n),i(n,`card border border-base-300 bg-base-100 shadow-sm`);let f=p(`div`,n);m(n,f),i(f,`card-body gap-5`);let _=p(`div`,f);m(f,_),i(_,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=p(`label`,_);m(_,b),i(b,`form-control grid gap-2`);let te=p(`span`,b);m(b,te),i(te,`label-text font-medium`),m(te,u(`父组件 props.query`));let S=p(`input`,b);m(b,S),i(S,`input input-bordered`),h(()=>{c(S,r.value)}),d(S,`input`,e=>{r.value=e.target.value});let C=p(`button`,_);m(_,C),i(C,`btn btn-outline`),d(C,`click`,le),m(C,u(`切换预设 query`));let A=p(`div`,f);m(f,A),i(A,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let j=p(`span`,A);m(A,j),i(j,`text-sm font-medium`),m(j,u(`父组件 props.count`));let M=p(`div`,A);m(A,M),i(M,`join`);let N=p(`button`,M);m(M,N),i(N,`btn join-item btn-outline`),d(N,`click`,()=>{--s.value}),m(N,u(`-1`));let P=p(`button`,M);m(M,P),i(P,`btn join-item btn-outline`),d(P,`click`,()=>{s.value+=1}),m(P,u(`+1`));let F=p(`input`,A);m(A,F),i(F,`range range-primary`),t(F,`type`,`range`),t(F,`min`,`0`),t(F,`max`,`12`),t(F,`step`,`1`),h(()=>{c(F,String(s.value))}),d(F,`input`,e=>{s.value=Number(e.target.value)});let I=p(`div`,f);m(f,I),i(I,`grid gap-3 md:grid-cols-3`);let ue=a(`rue:component:anchor`);m(I,ue),h(()=>{let e=y(T,{label:`当前 query`,value:r.value});g(()=>v(e,I,ue))});let de=a(`rue:component:anchor`);m(I,de),h(()=>{let e=y(T,{label:`trim().toUpperCase()`,value:r.value.trim().toUpperCase()||`(empty)`});g(()=>v(e,I,de))});let fe=a(`rue:component:anchor`);m(I,fe),h(()=>{let e=y(T,{label:`当前 count`,value:s.value});g(()=>v(e,I,fe))}),m(e,u(` `));let L=p(`div`,e);m(e,L),i(L,`grid gap-4 xl:grid-cols-2`);let pe=a(`rue:component:anchor`);m(L,pe),v(y(w,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:y(ne,{query:r.value,count:s.value})}),L,pe);let me=a(`rue:component:anchor`);m(L,me),v(y(w,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:y(re,{query:r.value,count:s.value})}),L,me);let he=a(`rue:component:anchor`);m(L,he),v(y(w,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:y(ie,{query:r.value,count:s.value})}),L,he);let ge=a(`rue:component:anchor`);m(L,ge),v(y(w,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:y(ae,{query:r.value,count:s.value})}),L,ge),m(e,u(` `));let _e=p(`div`,e);m(e,_e),i(_e,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),m(_e,u(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),m(e,u(` `));let ve=p(`section`,e);m(e,ve),i(ve,`card border border-base-300 bg-base-100 shadow-sm`);let R=p(`div`,ve);m(ve,R),i(R,`card-body gap-5`);let z=p(`div`,R);m(R,z),i(z,`space-y-1`);let ye=p(`h2`,z);m(z,ye),i(ye,`text-lg font-semibold leading-tight`),m(ye,u(`Nested 解构边界`));let be=p(`p`,z);m(z,be),i(be,`text-sm text-base-content/70 leading-6`),m(be,u(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let B=p(`div`,R);m(R,B),i(B,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let V=p(`label`,B);m(B,V),i(V,`form-control grid gap-2`);let xe=p(`span`,V);m(V,xe),i(xe,`label-text font-medium`),m(xe,u(`nested options.query`));let Se=p(`input`,V);m(V,Se),i(Se,`input input-bordered`),h(()=>{c(Se,l.value)}),d(Se,`input`,e=>{l.value=e.target.value});let H=p(`label`,B);m(B,H),i(H,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let U=p(`input`,H);m(H,U),i(U,`checkbox checkbox-sm`),t(U,`type`,`checkbox`),h(()=>{ee(U,!!D.value)}),d(U,`input`,e=>{D.value=!!e.target.checked});let Ce=p(`span`,H);m(H,Ce),i(Ce,`label-text`),m(Ce,u(`传入 options`));let W=p(`div`,R);m(R,W),i(W,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let G=p(`label`,W);m(W,G),i(G,`form-control grid gap-2`);let we=p(`span`,G);m(G,we),i(we,`label-text font-medium`),m(we,u(`nested options.meta.label`));let Te=p(`input`,G);m(G,Te),i(Te,`input input-bordered`),h(()=>{c(Te,x.value)}),d(Te,`input`,e=>{x.value=e.target.value});let K=p(`label`,W);m(W,K),i(K,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let q=p(`input`,K);m(K,q),i(q,`checkbox checkbox-sm`),t(q,`type`,`checkbox`),h(()=>{ee(q,!!O.value)}),d(q,`input`,e=>{O.value=!!e.target.checked});let Ee=p(`span`,K);m(K,Ee),i(Ee,`label-text`),m(Ee,u(`传入 meta`));let J=p(`div`,R);m(R,J),i(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=p(`span`,J);m(J,De),i(De,`text-sm font-medium`),m(De,u(`nested counts`));let Y=p(`div`,J);m(J,Y),i(Y,`join`);let Oe=p(`button`,Y);m(Y,Oe),i(Oe,`btn join-item btn-outline`),d(Oe,`click`,()=>{--E.value}),m(Oe,u(`first -1`));let ke=p(`button`,Y);m(Y,ke),i(ke,`btn join-item btn-outline`),d(ke,`click`,()=>{E.value+=1}),m(ke,u(`first +1`));let X=p(`input`,J);m(J,X),i(X,`range range-primary`),t(X,`type`,`range`),t(X,`min`,`0`),t(X,`max`,`12`),t(X,`step`,`1`),h(()=>{c(X,String(ce.value))}),d(X,`input`,e=>{ce.value=Number(e.target.value)});let Z=p(`label`,J);m(J,Z),i(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=p(`input`,Z);m(Z,Ae),i(Ae,`checkbox checkbox-sm`),t(Ae,`type`,`checkbox`),h(()=>{ee(Ae,!!k.value)}),d(Ae,`input`,e=>{k.value=!!e.target.checked});let je=p(`span`,Z);m(Z,je),i(je,`label-text`),m(je,u(`传入 counts`));let Q=p(`div`,R);m(R,Q),i(Q,`grid gap-3 md:grid-cols-4`);let Me=a(`rue:component:anchor`);m(Q,Me),h(()=>{let e=y(T,{label:`options.query`,value:D.value?l.value:`undefined`});g(()=>v(e,Q,Me))});let Ne=a(`rue:component:anchor`);m(Q,Ne),h(()=>{let e=y(T,{label:`options.meta.label`,value:D.value&&O.value?x.value:`undefined`});g(()=>v(e,Q,Ne))});let Pe=a(`rue:component:anchor`);m(Q,Pe),h(()=>{let e=y(T,{label:`counts[0]`,value:k.value?E.value:`undefined`});g(()=>v(e,Q,Pe))});let Fe=a(`rue:component:anchor`);m(Q,Fe),h(()=>{let e=y(T,{label:`counts[1]`,value:k.value?ce.value:`undefined`});g(()=>v(e,Q,Fe))}),m(e,u(` `));let $=p(`div`,e);m(e,$),i($,`grid gap-4 xl:grid-cols-2`);let Ie=a(`rue:component:anchor`);m($,Ie),v(y(w,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:y(oe,{options:D.value?{query:l.value,meta:O.value?{label:x.value}:void 0}:void 0,counts:k.value?[E.value,ce.value]:void 0})}),$,Ie);let Le=a(`rue:component:anchor`);m($,Le),v(y(w,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:y(se,{options:D.value?{query:l.value,meta:O.value?{label:x.value}:void 0}:void 0,counts:k.value?[E.value,ce.value]:void 0})}),$,Le),m(e,u(` `));let Re=p(`div`,e);return m(e,Re),i(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),m(Re,u(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),m(e,u(` `)),e}):``;g(()=>v(e,F,I))}),m(F,u(` `));let ue=a(`rue:slot:anchor`);return m(F,ue),h(()=>{let e=n.value===`code`?_(()=>{let e=o(),t=p(`div`,e);m(e,t),i(t,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let n=p(`div`,t);m(t,n),i(n,`card-body p-0`);let r=a(`rue:component:anchor`);return m(n,r),h(()=>{let e=y(te,{className:`h-full`,lang:`tsx`,code:C});g(()=>v(e,n,r))}),e}):``;g(()=>v(e,F,ue))}),e})}),f,b),f})};export{E as default};