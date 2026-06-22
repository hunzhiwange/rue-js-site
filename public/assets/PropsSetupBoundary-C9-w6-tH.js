import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,ft as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _,wt as v,x as y,yt as ee}from"./vapor-runtime-x7F5M-49.js";import{a as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as x}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as te}from"./Code-C5NjdoiC.js";import{r as S}from"./SidebarPlaygroundExample-DpItFif-.js";var C=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,w=n=>l(r=>{let i=m(`section`,r);p(i,`card border border-base-300 bg-base-100 shadow-sm`);let a=m(`div`,i);e(i,a),p(a,`card-body gap-4`);let o=m(`div`,a);e(a,o),p(o,`space-y-1`);let s=m(`h2`,o);e(o,s),p(s,`text-lg font-semibold leading-tight`);let c=_(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.title;g(()=>d(e,s,c))});let l=m(`p`,o);e(o,l),p(l,`text-sm text-base-content/70 leading-6`);let u=_(`rue:slot:anchor`);e(l,u),t(()=>{let e=n.note;g(()=>d(e,l,u))});let f=m(`div`,a);e(a,f),p(f,`grid gap-2 text-sm text-base-content/85`);let h=_(`rue:children:anchor`);return e(f,h),t(()=>{let e=n.children;g(()=>d(e,f,h))}),i}),T=n=>{let{toneClassName:r}=b(`useSetup:0:0`,()=>f(()=>({toneClassName:b(`computed:1:0`,()=>v(()=>n.tone===`success`?`border-success/30 bg-success/10 text-success`:n.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return l(o=>{let s=m(`div`,o);p(s,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let c=m(`span`,s);e(s,c),p(c,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let l=_(`rue:slot:anchor`);e(c,l),t(()=>{let e=n.label;g(()=>d(e,c,l))});let u=m(`span`,s);e(s,u),t(()=>{p(u,`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${r.get()}`)});let f=i(u);return e(u,f),t(()=>{a(f,String(n.value))}),s})},ne=e=>{let{normalized:t,summary:n}=b(`useSetup:0:0:dup1`,()=>f(()=>{let t=b(`computed:1:1`,()=>v(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:b(`computed:1:2`,()=>v(()=>`${n.get()} x ${e.count}`))}}));return y(`div`,{className:`grid gap-2`},x(T,{label:`normalized`,value:t.get(),tone:`success`}),x(T,{label:`summary`,value:n.get(),tone:`success`}),x(T,{label:`mode`,value:`render 期直接读取解构 props`}))},re=r=>{let{setupState:i}=b(`useSetup:0:0:dup2`,()=>f(()=>({setupState:b(`useSetup:1:5`,()=>f(()=>{let e={defaultValue:r.query.trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:b(`ref:1:3`,()=>n(e.defaultValue)),pageRef:b(`ref:1:4`,()=>n(r.count))}}))})));return l(n=>{let r=m(`div`,n);p(r,`grid gap-2`);let a=_(`rue:component:anchor`);e(r,a),t(()=>{let e=h(T,{label:`searchConfig.defaultValue`,value:i.searchConfig.defaultValue,tone:`warning`});g(()=>d(e,r,a))});let o=_(`rue:component:anchor`);e(r,o),t(()=>{let e=h(T,{label:`searchValueRef.value`,value:i.searchValueRef.value,tone:`warning`});g(()=>d(e,r,o))});let s=_(`rue:component:anchor`);e(r,s),t(()=>{let e=h(T,{label:`pageRef.value`,value:i.pageRef.value,tone:`warning`});g(()=>d(e,r,s))});let c=_(`rue:component:anchor`);return e(r,c),d(h(T,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),r,c),r})},ie=n=>{let{setupState:r}=b(`useSetup:0:0:dup3`,()=>f(()=>({setupState:b(`useSetup:1:8`,()=>f(()=>({normalized:b(`computed:1:6`,()=>v(()=>n.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:7`,()=>v(()=>`${n.query.trim().toUpperCase()||`(empty)`} x ${n.count}`))})))})));return l(n=>{let i=m(`div`,n);p(i,`grid gap-2`);let a=_(`rue:component:anchor`);e(i,a),t(()=>{let e=h(T,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});g(()=>d(e,i,a))});let o=_(`rue:component:anchor`);e(i,o),t(()=>{let e=h(T,{label:`summary.get()`,value:r.summary.get(),tone:`success`});g(()=>d(e,i,o))});let s=_(`rue:component:anchor`);return e(i,s),d(h(T,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),i,s),i})},ae=n=>{let{setupState:r}=b(`useSetup:0:0:dup4`,()=>f(()=>({setupState:b(`useSetup:1:11`,()=>f(()=>({normalized:b(`computed:1:9`,()=>v(()=>n.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:10`,()=>v(()=>`${n.query.trim().toUpperCase()||`(empty)`} x ${n.count}`))})))})));return l(n=>{let i=m(`div`,n);p(i,`grid gap-2`);let a=_(`rue:component:anchor`);e(i,a),t(()=>{let e=h(T,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});g(()=>d(e,i,a))});let o=_(`rue:component:anchor`);e(i,o),t(()=>{let e=h(T,{label:`summary.get()`,value:r.summary.get(),tone:`success`});g(()=>d(e,i,o))});let s=_(`rue:component:anchor`);return e(i,s),d(h(T,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),i,s),i})},oe=n=>{let{setupState:r}=b(`useSetup:0:0:dup5`,()=>f(()=>({setupState:b(`useSetup:1:16`,()=>f(()=>({normalized:b(`computed:1:12`,()=>v(()=>((n.options===void 0?{}:n.options).query===void 0?` nested-default `:(n.options===void 0?{}:n.options).query).trim().toUpperCase()||`(empty)`)),total:b(`computed:1:13`,()=>v(()=>((n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0])+((n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]))),summary:b(`computed:1:14`,()=>v(()=>`${((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label===void 0?`fallback-label`:((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label}:${((n.options===void 0?{}:n.options).query===void 0?` nested-default `:(n.options===void 0?{}:n.options).query).trim().toUpperCase()||`(empty)`} x ${((n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0])+((n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1])}`)),tuple:b(`computed:1:15`,()=>v(()=>`${(n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0]}-${(n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]}`))})))})));return l(n=>{let i=m(`div`,n);p(i,`grid gap-2`);let a=_(`rue:component:anchor`);e(i,a),t(()=>{let e=h(T,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});g(()=>d(e,i,a))});let o=_(`rue:component:anchor`);e(i,o),t(()=>{let e=h(T,{label:`total.get()`,value:r.total.get(),tone:`success`});g(()=>d(e,i,o))});let s=_(`rue:component:anchor`);e(i,s),t(()=>{let e=h(T,{label:`summary.get()`,value:r.summary.get(),tone:`success`});g(()=>d(e,i,s))});let c=_(`rue:component:anchor`);e(i,c),t(()=>{let e=h(T,{label:`tuple.get()`,value:r.tuple.get(),tone:`success`});g(()=>d(e,i,c))});let l=_(`rue:component:anchor`);return e(i,l),d(h(T,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),i,l),i})},se=n=>{let{setupState:r}=b(`useSetup:0:0:dup6`,()=>f(()=>({setupState:b(`useSetup:1:17`,()=>f(()=>{let e=((n.options===void 0?{}:n.options).query===void 0?` nested-default `:(n.options===void 0?{}:n.options).query).trim().toUpperCase()||`(empty)`,t=((n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0])+((n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]);return{normalized:e,total:t,summary:`${((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label===void 0?`fallback-label`:((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label}:${e} x ${t}`,tuple:`${(n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0]}-${(n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]}`}}))})));return l(n=>{let i=m(`div`,n);p(i,`grid gap-2`);let a=_(`rue:component:anchor`);e(i,a),t(()=>{let e=h(T,{label:`normalized`,value:r.normalized,tone:`warning`});g(()=>d(e,i,a))});let o=_(`rue:component:anchor`);e(i,o),t(()=>{let e=h(T,{label:`total`,value:r.total,tone:`warning`});g(()=>d(e,i,o))});let s=_(`rue:component:anchor`);e(i,s),t(()=>{let e=h(T,{label:`summary`,value:r.summary,tone:`warning`});g(()=>d(e,i,s))});let c=_(`rue:component:anchor`);e(i,c),t(()=>{let e=h(T,{label:`tuple`,value:r.tuple,tone:`warning`});g(()=>d(e,i,c))});let l=_(`rue:component:anchor`);return e(i,l),d(h(T,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),i,l),i})},E=()=>{let{activeTab:i,query:a,count:v,nestedQuery:y,nestedLabel:x,nestedFirst:E,nestedSecond:D,passNestedOptions:O,passNestedMeta:k,passNestedCounts:A,presets:j,nextPreset:ce}=b(`useSetup:0:0:dup7`,()=>f(()=>{let e=b(`ref:1:18`,()=>n(`preview`)),t=b(`ref:1:19`,()=>n(` transfer `)),r=b(`ref:1:20`,()=>n(2)),i=b(`ref:1:21`,()=>n(` nested transfer `)),a=b(`ref:1:22`,()=>n(`deep-live`)),o=b(`ref:1:23`,()=>n(3)),s=b(`ref:1:24`,()=>n(5)),c=b(`ref:1:25`,()=>n(!0)),l=b(`ref:1:26`,()=>n(!0)),u=b(`ref:1:27`,()=>n(!0)),d=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:r,nestedQuery:i,nestedLabel:a,nestedFirst:o,nestedSecond:s,passNestedOptions:c,passNestedMeta:l,passNestedCounts:u,presets:d,nextPreset:()=>{let e=d.findIndex(e=>e===t.value);t.value=d[e<0?0:(e+1)%d.length]}}}));return l(n=>{let f=u(),b=_(`rue:component:anchor`);return e(f,b),d(h(S,{children:l(()=>{let n=u(),f=m(`div`,n);e(n,f),p(f,`space-y-4`);let b=m(`div`,f);e(f,b),p(b,`space-y-3`);let S=m(`h1`,b);e(b,S),p(S,`text-4xl font-semibold tracking-tight`),e(S,c(`Props 与 useSetup 边界`));let j=m(`p`,b);e(b,j),p(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),e(j,c(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let M=m(`p`,b);e(b,M),p(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),e(M,c(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let N=m(`div`,f);e(f,N),o(N,`role`,`tablist`),p(N,`tabs tabs-box`);let P=m(`button`,N);e(N,P),o(P,`role`,`tab`),t(()=>{p(P,`tab ${i.value===`preview`?`tab-active`:``}`)}),r(P,`click`,()=>{i.value=`preview`}),e(P,c(`效果`));let F=m(`button`,N);e(N,F),o(F,`role`,`tab`),t(()=>{p(F,`tab ${i.value===`code`?`tab-active`:``}`)}),r(F,`click`,()=>{i.value=`code`}),e(F,c(`代码`));let I=m(`div`,f);e(f,I),p(I,`mt-4 grid gap-6 items-start`);let L=_(`rue:slot:anchor`);e(I,L),t(()=>{let n=i.value===`preview`?l(()=>{let n=u();e(n,c(` `));let i=m(`section`,n);e(n,i),p(i,`card border border-base-300 bg-base-100 shadow-sm`);let l=m(`div`,i);e(i,l),p(l,`card-body gap-5`);let f=m(`div`,l);e(l,f),p(f,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=m(`label`,f);e(f,b),p(b,`form-control grid gap-2`);let te=m(`span`,b);e(b,te),p(te,`label-text font-medium`),e(te,c(`父组件 props.query`));let S=m(`input`,b);e(b,S),p(S,`input input-bordered`),t(()=>{ee(S,a.value)}),r(S,`input`,e=>{a.value=e.target.value});let C=m(`button`,f);e(f,C),p(C,`btn btn-outline`),r(C,`click`,ce),e(C,c(`切换预设 query`));let j=m(`div`,l);e(l,j),p(j,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let M=m(`span`,j);e(j,M),p(M,`text-sm font-medium`),e(M,c(`父组件 props.count`));let N=m(`div`,j);e(j,N),p(N,`join`);let P=m(`button`,N);e(N,P),p(P,`btn join-item btn-outline`),r(P,`click`,()=>{--v.value}),e(P,c(`-1`));let F=m(`button`,N);e(N,F),p(F,`btn join-item btn-outline`),r(F,`click`,()=>{v.value+=1}),e(F,c(`+1`));let I=m(`input`,j);e(j,I),p(I,`range range-primary`),o(I,`type`,`range`),o(I,`min`,`0`),o(I,`max`,`12`),o(I,`step`,`1`),t(()=>{ee(I,String(v.value))}),r(I,`input`,e=>{v.value=Number(e.target.value)});let L=m(`div`,l);e(l,L),p(L,`grid gap-3 md:grid-cols-3`);let le=_(`rue:component:anchor`);e(L,le),t(()=>{let e=h(T,{label:`当前 query`,value:a.value});g(()=>d(e,L,le))});let ue=_(`rue:component:anchor`);e(L,ue),t(()=>{let e=h(T,{label:`trim().toUpperCase()`,value:a.value.trim().toUpperCase()||`(empty)`});g(()=>d(e,L,ue))});let de=_(`rue:component:anchor`);e(L,de),t(()=>{let e=h(T,{label:`当前 count`,value:v.value});g(()=>d(e,L,de))}),e(n,c(` `));let R=m(`div`,n);e(n,R),p(R,`grid gap-4 xl:grid-cols-2`);let fe=_(`rue:component:anchor`);e(R,fe),d(h(w,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:h(ne,{query:a.value,count:v.value})}),R,fe);let pe=_(`rue:component:anchor`);e(R,pe),d(h(w,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:h(re,{query:a.value,count:v.value})}),R,pe);let me=_(`rue:component:anchor`);e(R,me),d(h(w,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:h(ie,{query:a.value,count:v.value})}),R,me);let he=_(`rue:component:anchor`);e(R,he),d(h(w,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:h(ae,{query:a.value,count:v.value})}),R,he),e(n,c(` `));let ge=m(`div`,n);e(n,ge),p(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),e(ge,c(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),e(n,c(` `));let _e=m(`section`,n);e(n,_e),p(_e,`card border border-base-300 bg-base-100 shadow-sm`);let z=m(`div`,_e);e(_e,z),p(z,`card-body gap-5`);let B=m(`div`,z);e(z,B),p(B,`space-y-1`);let ve=m(`h2`,B);e(B,ve),p(ve,`text-lg font-semibold leading-tight`),e(ve,c(`Nested 解构边界`));let ye=m(`p`,B);e(B,ye),p(ye,`text-sm text-base-content/70 leading-6`),e(ye,c(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let V=m(`div`,z);e(z,V),p(V,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let H=m(`label`,V);e(V,H),p(H,`form-control grid gap-2`);let be=m(`span`,H);e(H,be),p(be,`label-text font-medium`),e(be,c(`nested options.query`));let xe=m(`input`,H);e(H,xe),p(xe,`input input-bordered`),t(()=>{ee(xe,y.value)}),r(xe,`input`,e=>{y.value=e.target.value});let U=m(`label`,V);e(V,U),p(U,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let W=m(`input`,U);e(U,W),p(W,`checkbox checkbox-sm`),o(W,`type`,`checkbox`),t(()=>{s(W,!!O.value)}),r(W,`input`,e=>{O.value=!!e.target.checked});let Se=m(`span`,U);e(U,Se),p(Se,`label-text`),e(Se,c(`传入 options`));let G=m(`div`,z);e(z,G),p(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=m(`label`,G);e(G,K),p(K,`form-control grid gap-2`);let Ce=m(`span`,K);e(K,Ce),p(Ce,`label-text font-medium`),e(Ce,c(`nested options.meta.label`));let we=m(`input`,K);e(K,we),p(we,`input input-bordered`),t(()=>{ee(we,x.value)}),r(we,`input`,e=>{x.value=e.target.value});let q=m(`label`,G);e(G,q),p(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Te=m(`input`,q);e(q,Te),p(Te,`checkbox checkbox-sm`),o(Te,`type`,`checkbox`),t(()=>{s(Te,!!k.value)}),r(Te,`input`,e=>{k.value=!!e.target.checked});let Ee=m(`span`,q);e(q,Ee),p(Ee,`label-text`),e(Ee,c(`传入 meta`));let J=m(`div`,z);e(z,J),p(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=m(`span`,J);e(J,De),p(De,`text-sm font-medium`),e(De,c(`nested counts`));let Y=m(`div`,J);e(J,Y),p(Y,`join`);let Oe=m(`button`,Y);e(Y,Oe),p(Oe,`btn join-item btn-outline`),r(Oe,`click`,()=>{--E.value}),e(Oe,c(`first -1`));let ke=m(`button`,Y);e(Y,ke),p(ke,`btn join-item btn-outline`),r(ke,`click`,()=>{E.value+=1}),e(ke,c(`first +1`));let X=m(`input`,J);e(J,X),p(X,`range range-primary`),o(X,`type`,`range`),o(X,`min`,`0`),o(X,`max`,`12`),o(X,`step`,`1`),t(()=>{ee(X,String(D.value))}),r(X,`input`,e=>{D.value=Number(e.target.value)});let Z=m(`label`,J);e(J,Z),p(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=m(`input`,Z);e(Z,Ae),p(Ae,`checkbox checkbox-sm`),o(Ae,`type`,`checkbox`),t(()=>{s(Ae,!!A.value)}),r(Ae,`input`,e=>{A.value=!!e.target.checked});let je=m(`span`,Z);e(Z,je),p(je,`label-text`),e(je,c(`传入 counts`));let Q=m(`div`,z);e(z,Q),p(Q,`grid gap-3 md:grid-cols-4`);let Me=_(`rue:component:anchor`);e(Q,Me),t(()=>{let e=h(T,{label:`options.query`,value:O.value?y.value:`undefined`});g(()=>d(e,Q,Me))});let Ne=_(`rue:component:anchor`);e(Q,Ne),t(()=>{let e=h(T,{label:`options.meta.label`,value:O.value&&k.value?x.value:`undefined`});g(()=>d(e,Q,Ne))});let Pe=_(`rue:component:anchor`);e(Q,Pe),t(()=>{let e=h(T,{label:`counts[0]`,value:A.value?E.value:`undefined`});g(()=>d(e,Q,Pe))});let Fe=_(`rue:component:anchor`);e(Q,Fe),t(()=>{let e=h(T,{label:`counts[1]`,value:A.value?D.value:`undefined`});g(()=>d(e,Q,Fe))}),e(n,c(` `));let $=m(`div`,n);e(n,$),p($,`grid gap-4 xl:grid-cols-2`);let Ie=_(`rue:component:anchor`);e($,Ie),d(h(w,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:h(oe,{options:O.value?{query:y.value,meta:k.value?{label:x.value}:void 0}:void 0,counts:A.value?[E.value,D.value]:void 0})}),$,Ie);let Le=_(`rue:component:anchor`);e($,Le),d(h(w,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:h(se,{options:O.value?{query:y.value,meta:k.value?{label:x.value}:void 0}:void 0,counts:A.value?[E.value,D.value]:void 0})}),$,Le),e(n,c(` `));let Re=m(`div`,n);return e(n,Re),p(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),e(Re,c(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),e(n,c(` `)),n}):``;g(()=>d(n,I,L))}),e(I,c(` `));let le=_(`rue:slot:anchor`);return e(I,le),t(()=>{let n=i.value===`code`?l(()=>{let n=u(),r=m(`div`,n);e(n,r),p(r,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let i=m(`div`,r);e(r,i),p(i,`card-body p-0`);let a=_(`rue:component:anchor`);return e(i,a),t(()=>{let e=h(te,{className:`h-full`,lang:`tsx`,code:C});g(()=>d(e,i,a))}),n}):``;g(()=>d(n,I,le))}),n})}),f,b),f})};export{E as default};