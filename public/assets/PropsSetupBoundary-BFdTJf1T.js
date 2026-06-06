import{$ as e,B as t,C as n,Dt as r,G as i,H as a,K as o,Q as s,U as c,W as l,Z as u,at as d,ht as f,it as p,l as m,lt as h,s as g,t as _,wt as v,yt as y,z as b}from"./vapor-runtime-C1rlwc61.js";import{a as x}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as ee}from"./Code-BCLFq1E3.js";import{t as S}from"./src-BLzF0BqW.js";import{t as C}from"./SidebarPlaygroundExample-CdMvdgT7.js";var w=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,T=n=>m(i=>{let o=l(`section`,i);e(o,`card border border-base-300 bg-base-100 shadow-sm`);let s=l(`div`,o);t(o,s),e(s,`card-body gap-4`);let c=l(`div`,s);t(s,c),e(c,`space-y-1`);let u=l(`h2`,c);t(c,u),e(u,`text-lg font-semibold leading-tight`);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let e=n.title;y(()=>g(e,u,d))});let f=l(`p`,c);t(c,f),e(f,`text-sm text-base-content/70 leading-6`);let p=a(`rue:slot:anchor`);t(f,p),r(()=>{let e=n.note;y(()=>g(e,f,p))});let m=l(`div`,s);t(s,m),e(m,`grid gap-2 text-sm text-base-content/85`);let h=a(`rue:children:anchor`);return t(m,h),r(()=>{let e=n.children;y(()=>g(e,m,h))}),o}),E=n=>{let{toneClassName:i}=x(`useSetup:0:0`,()=>v(()=>({toneClassName:x(`computed:1:0`,()=>h(()=>n.tone===`success`?`border-success/30 bg-success/10 text-success`:n.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return m(s=>{let c=l(`div`,s);e(c,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let u=l(`span`,c);t(c,u),e(u,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let f=a(`rue:slot:anchor`);t(u,f),r(()=>{let e=n.label;y(()=>g(e,u,f))});let p=l(`span`,c);t(c,p),r(()=>{e(p,String(`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${i.get()}`))});let m=o(p);return t(p,m),r(()=>{d(m,String(n.value))}),c})},te=e=>{let{normalized:t,summary:r}=x(`useSetup:0:0:dup1`,()=>v(()=>{let t=x(`computed:1:1`,()=>h(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:x(`computed:1:2`,()=>h(()=>`${n.get()} x ${e.count}`))}}));return n(`div`,{className:`grid gap-2`},S(E,{label:`normalized`,value:t.get(),tone:`success`}),S(E,{label:`summary`,value:r.get(),tone:`success`}),S(E,{label:`mode`,value:`render 期直接读取解构 props`}))},ne=n=>{let{setupState:i}=x(`useSetup:0:0:dup2`,()=>v(()=>({setupState:x(`useSetup:1:5`,()=>v(()=>{let e={defaultValue:n.query.trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:x(`ref:1:3`,()=>f(e.defaultValue)),pageRef:x(`ref:1:4`,()=>f(n.count))}}))})));return m(n=>{let o=l(`div`,n);e(o,`grid gap-2`);let s=a(`rue:component:anchor`);t(o,s),r(()=>{let e=_(E,{label:`searchConfig.defaultValue`,value:i.searchConfig.defaultValue,tone:`warning`});y(()=>g(e,o,s))});let c=a(`rue:component:anchor`);t(o,c),r(()=>{let e=_(E,{label:`searchValueRef.value`,value:i.searchValueRef.value,tone:`warning`});y(()=>g(e,o,c))});let u=a(`rue:component:anchor`);t(o,u),r(()=>{let e=_(E,{label:`pageRef.value`,value:i.pageRef.value,tone:`warning`});y(()=>g(e,o,u))});let d=a(`rue:component:anchor`);return t(o,d),g(_(E,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),o,d),o})},re=n=>{let{setupState:i}=x(`useSetup:0:0:dup3`,()=>v(()=>({setupState:x(`useSetup:1:8`,()=>v(()=>({normalized:x(`computed:1:6`,()=>h(()=>n.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:7`,()=>h(()=>`${n.query.trim().toUpperCase()||`(empty)`} x ${n.count}`))})))})));return m(n=>{let o=l(`div`,n);e(o,`grid gap-2`);let s=a(`rue:component:anchor`);t(o,s),r(()=>{let e=_(E,{label:`normalized.get()`,value:i.normalized.get(),tone:`success`});y(()=>g(e,o,s))});let c=a(`rue:component:anchor`);t(o,c),r(()=>{let e=_(E,{label:`summary.get()`,value:i.summary.get(),tone:`success`});y(()=>g(e,o,c))});let u=a(`rue:component:anchor`);return t(o,u),g(_(E,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),o,u),o})},ie=n=>{let{setupState:i}=x(`useSetup:0:0:dup4`,()=>v(()=>({setupState:x(`useSetup:1:11`,()=>v(()=>({normalized:x(`computed:1:9`,()=>h(()=>n.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:10`,()=>h(()=>`${n.query.trim().toUpperCase()||`(empty)`} x ${n.count}`))})))})));return m(n=>{let o=l(`div`,n);e(o,`grid gap-2`);let s=a(`rue:component:anchor`);t(o,s),r(()=>{let e=_(E,{label:`normalized.get()`,value:i.normalized.get(),tone:`success`});y(()=>g(e,o,s))});let c=a(`rue:component:anchor`);t(o,c),r(()=>{let e=_(E,{label:`summary.get()`,value:i.summary.get(),tone:`success`});y(()=>g(e,o,c))});let u=a(`rue:component:anchor`);return t(o,u),g(_(E,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),o,u),o})},ae=n=>{let{setupState:i}=x(`useSetup:0:0:dup5`,()=>v(()=>({setupState:x(`useSetup:1:16`,()=>v(()=>({normalized:x(`computed:1:12`,()=>h(()=>((n.options===void 0?{}:n.options).query===void 0?` nested-default `:(n.options===void 0?{}:n.options).query).trim().toUpperCase()||`(empty)`)),total:x(`computed:1:13`,()=>h(()=>((n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0])+((n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]))),summary:x(`computed:1:14`,()=>h(()=>`${((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label===void 0?`fallback-label`:((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label}:${((n.options===void 0?{}:n.options).query===void 0?` nested-default `:(n.options===void 0?{}:n.options).query).trim().toUpperCase()||`(empty)`} x ${((n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0])+((n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1])}`)),tuple:x(`computed:1:15`,()=>h(()=>`${(n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0]}-${(n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]}`))})))})));return m(n=>{let o=l(`div`,n);e(o,`grid gap-2`);let s=a(`rue:component:anchor`);t(o,s),r(()=>{let e=_(E,{label:`normalized.get()`,value:i.normalized.get(),tone:`success`});y(()=>g(e,o,s))});let c=a(`rue:component:anchor`);t(o,c),r(()=>{let e=_(E,{label:`total.get()`,value:i.total.get(),tone:`success`});y(()=>g(e,o,c))});let u=a(`rue:component:anchor`);t(o,u),r(()=>{let e=_(E,{label:`summary.get()`,value:i.summary.get(),tone:`success`});y(()=>g(e,o,u))});let d=a(`rue:component:anchor`);t(o,d),r(()=>{let e=_(E,{label:`tuple.get()`,value:i.tuple.get(),tone:`success`});y(()=>g(e,o,d))});let f=a(`rue:component:anchor`);return t(o,f),g(_(E,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),o,f),o})},oe=n=>{let{setupState:i}=x(`useSetup:0:0:dup6`,()=>v(()=>({setupState:x(`useSetup:1:17`,()=>v(()=>{let e=((n.options===void 0?{}:n.options).query===void 0?` nested-default `:(n.options===void 0?{}:n.options).query).trim().toUpperCase()||`(empty)`,t=((n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0])+((n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]);return{normalized:e,total:t,summary:`${((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label===void 0?`fallback-label`:((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label}:${e} x ${t}`,tuple:`${(n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0]}-${(n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]}`}}))})));return m(n=>{let o=l(`div`,n);e(o,`grid gap-2`);let s=a(`rue:component:anchor`);t(o,s),r(()=>{let e=_(E,{label:`normalized`,value:i.normalized,tone:`warning`});y(()=>g(e,o,s))});let c=a(`rue:component:anchor`);t(o,c),r(()=>{let e=_(E,{label:`total`,value:i.total,tone:`warning`});y(()=>g(e,o,c))});let u=a(`rue:component:anchor`);t(o,u),r(()=>{let e=_(E,{label:`summary`,value:i.summary,tone:`warning`});y(()=>g(e,o,u))});let d=a(`rue:component:anchor`);t(o,d),r(()=>{let e=_(E,{label:`tuple`,value:i.tuple,tone:`warning`});y(()=>g(e,o,d))});let f=a(`rue:component:anchor`);return t(o,f),g(_(E,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),o,f),o})},D=()=>{let{activeTab:n,query:o,count:d,nestedQuery:h,nestedLabel:S,nestedFirst:D,nestedSecond:se,passNestedOptions:O,passNestedMeta:k,passNestedCounts:A,presets:j,nextPreset:ce}=x(`useSetup:0:0:dup7`,()=>v(()=>{let e=x(`ref:1:18`,()=>f(`preview`)),t=x(`ref:1:19`,()=>f(` transfer `)),n=x(`ref:1:20`,()=>f(2)),r=x(`ref:1:21`,()=>f(` nested transfer `)),i=x(`ref:1:22`,()=>f(`deep-live`)),a=x(`ref:1:23`,()=>f(3)),o=x(`ref:1:24`,()=>f(5)),s=x(`ref:1:25`,()=>f(!0)),c=x(`ref:1:26`,()=>f(!0)),l=x(`ref:1:27`,()=>f(!0)),u=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:n,nestedQuery:r,nestedLabel:i,nestedFirst:a,nestedSecond:o,passNestedOptions:s,passNestedMeta:c,passNestedCounts:l,presets:u,nextPreset:()=>{let e=u.findIndex(e=>e===t.value);t.value=u[e<0?0:(e+1)%u.length]}}}));return m(f=>{let v=c(),x=a(`rue:component:anchor`);return t(v,x),g(_(C,{children:m(()=>{let f=c(),v=l(`div`,f);t(f,v),e(v,`space-y-4`);let x=l(`div`,v);t(v,x),e(x,`space-y-3`);let C=l(`h1`,x);t(x,C),e(C,`text-4xl font-semibold tracking-tight`),t(C,i(`Props 与 useSetup 边界`));let j=l(`p`,x);t(x,j),e(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),t(j,i(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let M=l(`p`,x);t(x,M),e(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),t(M,i(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let N=l(`div`,v);t(v,N),u(N,`role`,`tablist`),e(N,`tabs tabs-box`);let P=l(`button`,N);t(N,P),u(P,`role`,`tab`),r(()=>{e(P,String(`tab ${n.value===`preview`?`tab-active`:``}`))}),b(P,`click`,()=>{n.value=`preview`}),t(P,i(`效果`));let F=l(`button`,N);t(N,F),u(F,`role`,`tab`),r(()=>{e(F,String(`tab ${n.value===`code`?`tab-active`:``}`))}),b(F,`click`,()=>{n.value=`code`}),t(F,i(`代码`));let I=l(`div`,v);t(v,I),e(I,`mt-4 grid gap-6 items-start`);let L=a(`rue:slot:anchor`);t(I,L),r(()=>{let f=n.value===`preview`?m(()=>{let n=c();t(n,i(` `));let f=l(`section`,n);t(n,f),e(f,`card border border-base-300 bg-base-100 shadow-sm`);let m=l(`div`,f);t(f,m),e(m,`card-body gap-5`);let v=l(`div`,m);t(m,v),e(v,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let x=l(`label`,v);t(v,x),e(x,`form-control grid gap-2`);let ee=l(`span`,x);t(x,ee),e(ee,`label-text font-medium`),t(ee,i(`父组件 props.query`));let C=l(`input`,x);t(x,C),e(C,`input input-bordered`),r(()=>{p(C,o.value)}),b(C,`input`,e=>{o.value=e.target.value});let w=l(`button`,v);t(v,w),e(w,`btn btn-outline`),b(w,`click`,ce),t(w,i(`切换预设 query`));let j=l(`div`,m);t(m,j),e(j,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let M=l(`span`,j);t(j,M),e(M,`text-sm font-medium`),t(M,i(`父组件 props.count`));let N=l(`div`,j);t(j,N),e(N,`join`);let P=l(`button`,N);t(N,P),e(P,`btn join-item btn-outline`),b(P,`click`,()=>{--d.value}),t(P,i(`-1`));let F=l(`button`,N);t(N,F),e(F,`btn join-item btn-outline`),b(F,`click`,()=>{d.value+=1}),t(F,i(`+1`));let I=l(`input`,j);t(j,I),e(I,`range range-primary`),u(I,`type`,`range`),u(I,`min`,`0`),u(I,`max`,`12`),u(I,`step`,`1`),r(()=>{p(I,String(d.value))}),b(I,`input`,e=>{d.value=Number(e.target.value)});let L=l(`div`,m);t(m,L),e(L,`grid gap-3 md:grid-cols-3`);let le=a(`rue:component:anchor`);t(L,le),r(()=>{let e=_(E,{label:`当前 query`,value:o.value});y(()=>g(e,L,le))});let ue=a(`rue:component:anchor`);t(L,ue),r(()=>{let e=_(E,{label:`trim().toUpperCase()`,value:o.value.trim().toUpperCase()||`(empty)`});y(()=>g(e,L,ue))});let de=a(`rue:component:anchor`);t(L,de),r(()=>{let e=_(E,{label:`当前 count`,value:d.value});y(()=>g(e,L,de))}),t(n,i(` `));let R=l(`div`,n);t(n,R),e(R,`grid gap-4 xl:grid-cols-2`);let fe=a(`rue:component:anchor`);t(R,fe),g(_(T,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:_(te,{query:o.value,count:d.value})}),R,fe);let pe=a(`rue:component:anchor`);t(R,pe),g(_(T,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:_(ne,{query:o.value,count:d.value})}),R,pe);let me=a(`rue:component:anchor`);t(R,me),g(_(T,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:_(re,{query:o.value,count:d.value})}),R,me);let he=a(`rue:component:anchor`);t(R,he),g(_(T,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:_(ie,{query:o.value,count:d.value})}),R,he),t(n,i(` `));let ge=l(`div`,n);t(n,ge),e(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),t(ge,i(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),t(n,i(` `));let _e=l(`section`,n);t(n,_e),e(_e,`card border border-base-300 bg-base-100 shadow-sm`);let z=l(`div`,_e);t(_e,z),e(z,`card-body gap-5`);let B=l(`div`,z);t(z,B),e(B,`space-y-1`);let ve=l(`h2`,B);t(B,ve),e(ve,`text-lg font-semibold leading-tight`),t(ve,i(`Nested 解构边界`));let ye=l(`p`,B);t(B,ye),e(ye,`text-sm text-base-content/70 leading-6`),t(ye,i(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let V=l(`div`,z);t(z,V),e(V,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let H=l(`label`,V);t(V,H),e(H,`form-control grid gap-2`);let be=l(`span`,H);t(H,be),e(be,`label-text font-medium`),t(be,i(`nested options.query`));let xe=l(`input`,H);t(H,xe),e(xe,`input input-bordered`),r(()=>{p(xe,h.value)}),b(xe,`input`,e=>{h.value=e.target.value});let U=l(`label`,V);t(V,U),e(U,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let W=l(`input`,U);t(U,W),e(W,`checkbox checkbox-sm`),u(W,`type`,`checkbox`),r(()=>{s(W,!!O.value)}),b(W,`input`,e=>{O.value=!!e.target.checked});let Se=l(`span`,U);t(U,Se),e(Se,`label-text`),t(Se,i(`传入 options`));let G=l(`div`,z);t(z,G),e(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=l(`label`,G);t(G,K),e(K,`form-control grid gap-2`);let Ce=l(`span`,K);t(K,Ce),e(Ce,`label-text font-medium`),t(Ce,i(`nested options.meta.label`));let we=l(`input`,K);t(K,we),e(we,`input input-bordered`),r(()=>{p(we,S.value)}),b(we,`input`,e=>{S.value=e.target.value});let q=l(`label`,G);t(G,q),e(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Te=l(`input`,q);t(q,Te),e(Te,`checkbox checkbox-sm`),u(Te,`type`,`checkbox`),r(()=>{s(Te,!!k.value)}),b(Te,`input`,e=>{k.value=!!e.target.checked});let Ee=l(`span`,q);t(q,Ee),e(Ee,`label-text`),t(Ee,i(`传入 meta`));let J=l(`div`,z);t(z,J),e(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=l(`span`,J);t(J,De),e(De,`text-sm font-medium`),t(De,i(`nested counts`));let Y=l(`div`,J);t(J,Y),e(Y,`join`);let Oe=l(`button`,Y);t(Y,Oe),e(Oe,`btn join-item btn-outline`),b(Oe,`click`,()=>{--D.value}),t(Oe,i(`first -1`));let ke=l(`button`,Y);t(Y,ke),e(ke,`btn join-item btn-outline`),b(ke,`click`,()=>{D.value+=1}),t(ke,i(`first +1`));let X=l(`input`,J);t(J,X),e(X,`range range-primary`),u(X,`type`,`range`),u(X,`min`,`0`),u(X,`max`,`12`),u(X,`step`,`1`),r(()=>{p(X,String(se.value))}),b(X,`input`,e=>{se.value=Number(e.target.value)});let Z=l(`label`,J);t(J,Z),e(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=l(`input`,Z);t(Z,Ae),e(Ae,`checkbox checkbox-sm`),u(Ae,`type`,`checkbox`),r(()=>{s(Ae,!!A.value)}),b(Ae,`input`,e=>{A.value=!!e.target.checked});let je=l(`span`,Z);t(Z,je),e(je,`label-text`),t(je,i(`传入 counts`));let Q=l(`div`,z);t(z,Q),e(Q,`grid gap-3 md:grid-cols-4`);let Me=a(`rue:component:anchor`);t(Q,Me),r(()=>{let e=_(E,{label:`options.query`,value:O.value?h.value:`undefined`});y(()=>g(e,Q,Me))});let Ne=a(`rue:component:anchor`);t(Q,Ne),r(()=>{let e=_(E,{label:`options.meta.label`,value:O.value&&k.value?S.value:`undefined`});y(()=>g(e,Q,Ne))});let Pe=a(`rue:component:anchor`);t(Q,Pe),r(()=>{let e=_(E,{label:`counts[0]`,value:A.value?D.value:`undefined`});y(()=>g(e,Q,Pe))});let Fe=a(`rue:component:anchor`);t(Q,Fe),r(()=>{let e=_(E,{label:`counts[1]`,value:A.value?se.value:`undefined`});y(()=>g(e,Q,Fe))}),t(n,i(` `));let $=l(`div`,n);t(n,$),e($,`grid gap-4 xl:grid-cols-2`);let Ie=a(`rue:component:anchor`);t($,Ie),g(_(T,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:_(ae,{options:O.value?{query:h.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Ie);let Le=a(`rue:component:anchor`);t($,Le),g(_(T,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:_(oe,{options:O.value?{query:h.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Le),t(n,i(` `));let Re=l(`div`,n);return t(n,Re),e(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),t(Re,i(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),t(n,i(` `)),n}):``;y(()=>g(f,I,L))}),t(I,i(` `));let le=a(`rue:slot:anchor`);return t(I,le),r(()=>{let i=n.value===`code`?m(()=>{let n=c(),i=l(`div`,n);t(n,i),e(i,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let o=l(`div`,i);t(i,o),e(o,`card-body p-0`);let s=a(`rue:component:anchor`);return t(o,s),r(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:w});y(()=>g(e,o,s))}),n}):``;y(()=>g(i,I,le))}),f})}),v,x),v})};export{D as default};