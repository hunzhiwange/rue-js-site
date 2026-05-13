import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,W as c,X as l,Z as u,_ as d,_t as f,at as p,bt as m,c as h,j as g,lt as _,pt as v,t as y,u as b}from"./vapor-runtime-D3a-68js.js";import{a as x}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as S}from"./src-BfQKH6_d.js";import{t as ee}from"./Code-2C2psoH3.js";import{t as C}from"./SidebarPlaygroundExample-DKa0aI1C.js";var w=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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

const FieldRow: FC<{ label: string; value: any; tone?: 'default' | 'success' | 'warning' }> = props => {
  const toneClassName =
    props.tone === 'success'
      ? 'border-success/30 bg-success/10 text-success'
      : props.tone === 'warning'
        ? 'border-warning/30 bg-warning/10 text-warning'
        : 'border-base-300/70 bg-base-200/60 text-base-content/80'

  return (
    <div className="grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5">
      <span className="text-xs uppercase tracking-[0.18em] text-base-content/45">{props.label}</span>
      <span className={\`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm \${toneClassName}\`}>
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
      <FieldRow label="searchConfig.defaultValue" value={setupState.searchConfig.defaultValue} tone="warning" />
      <FieldRow label="searchValueRef.value" value={setupState.searchValueRef.value} tone="warning" />
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
      <FieldRow label="mode" value="useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取" />
    </div>
  )
}

const NestedReactiveDestructuredComputedSetupChild: FC<NestedDemoProps> = ({
  options: {
    query = ' nested-default ',
    meta: { label: text = 'fallback-label' } = {},
  } = {},
  counts: [first = 1, second = 2] = [],
}) => {
  const setupState = useSetup(() => ({
    normalized: computed(() => query.trim().toUpperCase() || '(empty)'),
    total: computed(() => first + second),
    summary: computed(() => \`\${text}:\${query.trim().toUpperCase() || '(empty)'} x \${first + second}\`),
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
  options: {
    query = ' nested-default ',
    meta: { label: text = 'fallback-label' } = {},
  } = {},
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
            这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。
            如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。
          </p>
          <p className="max-w-4xl text-sm leading-7 text-base-content/72 md:text-base">
            还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect
            不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。
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
                    <FieldRow label="trim().toUpperCase()" value={query.value.trim().toUpperCase() || '(empty)'} />
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
                观察重点：
                1. 第 1 块会随父 props 一直变化。
                2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。
                3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。
                4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。
                5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。
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
                    <FieldRow label="options.query" value={passNestedOptions.value ? nestedQuery.value : 'undefined'} />
                    <FieldRow
                      label="options.meta.label"
                      value={passNestedOptions.value && passNestedMeta.value ? nestedLabel.value : 'undefined'}
                    />
                    <FieldRow label="counts[0]" value={passNestedCounts.value ? nestedFirst.value : 'undefined'} />
                    <FieldRow label="counts[1]" value={passNestedCounts.value ? nestedSecond.value : 'undefined'} />
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
                    counts={passNestedCounts.value ? [nestedFirst.value, nestedSecond.value] : undefined}
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
                    counts={passNestedCounts.value ? [nestedFirst.value, nestedSecond.value] : undefined}
                  />
                </CaseCard>
              </div>

              <div className="rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80">
                Nested 观察重点：
                1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。
                2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。
                3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。
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

export default PropsSetupBoundary`,T=e=>b(()=>{let r=n(`section`);t(r,`card border border-base-300 bg-base-100 shadow-sm`);let o=n(`div`);i(r,o),t(o,`card-body gap-4`);let s=n(`div`);i(o,s),t(s,`space-y-1`);let c=n(`h2`);i(s,c),t(c,`text-lg font-semibold leading-tight`);let l=a(`rue:slot:anchor`);i(c,l),m(()=>{let t=e.title;v(()=>h(t,c,l))});let u=n(`p`);i(s,u),t(u,`text-sm text-base-content/70 leading-6`);let d=a(`rue:slot:anchor`);i(u,d),m(()=>{let t=e.note;v(()=>h(t,u,d))});let f=n(`div`);i(o,f),t(f,`grid gap-2 text-sm text-base-content/85`);let p=a(`rue:children:anchor`);return i(f,p),m(()=>{let t=e.children;v(()=>h(t,f,p))}),r}),E=e=>{let{toneClassName:r}=x(`useSetup:0:0`,()=>f(()=>({toneClassName:x(`computed:1:0`,()=>p(()=>e.tone===`success`?`border-success/30 bg-success/10 text-success`:e.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return b(()=>{let s=n(`div`);t(s,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let c=n(`span`);i(s,c),t(c,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let l=a(`rue:slot:anchor`);i(c,l),m(()=>{let t=e.label;v(()=>h(t,c,l))});let d=n(`span`);i(s,d),m(()=>{t(d,String(`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${r.get()}`))});let f=o(d);return i(d,f),m(()=>{u(f,String(e.value))}),s})},te=e=>{let{normalized:t,summary:n}=x(`useSetup:0:0:dup1`,()=>f(()=>{let t=x(`computed:1:1`,()=>p(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:x(`computed:1:2`,()=>p(()=>`${n.get()} x ${e.count}`))}}));return d(`div`,{className:`grid gap-2`},S(E,{label:`normalized`,value:t.get(),tone:`success`}),S(E,{label:`summary`,value:n.get(),tone:`success`}),S(E,{label:`mode`,value:`render 期直接读取解构 props`}))},ne=e=>{let{setupState:r}=x(`useSetup:0:0:dup2`,()=>f(()=>({setupState:x(`useSetup:1:5`,()=>f(()=>{let t={defaultValue:e.query.trim().toUpperCase()||`(empty)`};return{searchConfig:t,searchValueRef:x(`ref:1:3`,()=>_(t.defaultValue)),pageRef:x(`ref:1:4`,()=>_(e.count))}}))})));return b(()=>{let e=n(`div`);t(e,`grid gap-2`);let o=a(`rue:component:anchor`);i(e,o),m(()=>{let t=y(E,{label:`searchConfig.defaultValue`,value:r.searchConfig.defaultValue,tone:`warning`});v(()=>h(t,e,o))});let s=a(`rue:component:anchor`);i(e,s),m(()=>{let t=y(E,{label:`searchValueRef.value`,value:r.searchValueRef.value,tone:`warning`});v(()=>h(t,e,s))});let c=a(`rue:component:anchor`);i(e,c),m(()=>{let t=y(E,{label:`pageRef.value`,value:r.pageRef.value,tone:`warning`});v(()=>h(t,e,c))});let l=a(`rue:component:anchor`);return i(e,l),h(y(E,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),e,l),e})},re=e=>{let{setupState:r}=x(`useSetup:0:0:dup3`,()=>f(()=>({setupState:x(`useSetup:1:8`,()=>f(()=>({normalized:x(`computed:1:6`,()=>p(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:7`,()=>p(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))})))})));return b(()=>{let e=n(`div`);t(e,`grid gap-2`);let o=a(`rue:component:anchor`);i(e,o),m(()=>{let t=y(E,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});v(()=>h(t,e,o))});let s=a(`rue:component:anchor`);i(e,s),m(()=>{let t=y(E,{label:`summary.get()`,value:r.summary.get(),tone:`success`});v(()=>h(t,e,s))});let c=a(`rue:component:anchor`);return i(e,c),h(y(E,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),e,c),e})},ie=e=>{let{setupState:r}=x(`useSetup:0:0:dup4`,()=>f(()=>({setupState:x(`useSetup:1:11`,()=>f(()=>({normalized:x(`computed:1:9`,()=>p(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:10`,()=>p(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))})))})));return b(()=>{let e=n(`div`);t(e,`grid gap-2`);let o=a(`rue:component:anchor`);i(e,o),m(()=>{let t=y(E,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});v(()=>h(t,e,o))});let s=a(`rue:component:anchor`);i(e,s),m(()=>{let t=y(E,{label:`summary.get()`,value:r.summary.get(),tone:`success`});v(()=>h(t,e,s))});let c=a(`rue:component:anchor`);return i(e,c),h(y(E,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),e,c),e})},ae=e=>{let{setupState:r}=x(`useSetup:0:0:dup5`,()=>f(()=>({setupState:x(`useSetup:1:16`,()=>f(()=>({normalized:x(`computed:1:12`,()=>p(()=>((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`)),total:x(`computed:1:13`,()=>p(()=>((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]))),summary:x(`computed:1:14`,()=>p(()=>`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`} x ${((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1])}`)),tuple:x(`computed:1:15`,()=>p(()=>`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`))})))})));return b(()=>{let e=n(`div`);t(e,`grid gap-2`);let o=a(`rue:component:anchor`);i(e,o),m(()=>{let t=y(E,{label:`normalized.get()`,value:r.normalized.get(),tone:`success`});v(()=>h(t,e,o))});let s=a(`rue:component:anchor`);i(e,s),m(()=>{let t=y(E,{label:`total.get()`,value:r.total.get(),tone:`success`});v(()=>h(t,e,s))});let c=a(`rue:component:anchor`);i(e,c),m(()=>{let t=y(E,{label:`summary.get()`,value:r.summary.get(),tone:`success`});v(()=>h(t,e,c))});let l=a(`rue:component:anchor`);i(e,l),m(()=>{let t=y(E,{label:`tuple.get()`,value:r.tuple.get(),tone:`success`});v(()=>h(t,e,l))});let u=a(`rue:component:anchor`);return i(e,u),h(y(E,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),e,u),e})},oe=e=>{let{setupState:r}=x(`useSetup:0:0:dup6`,()=>f(()=>({setupState:x(`useSetup:1:17`,()=>f(()=>{let t=((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`,n=((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]);return{normalized:t,total:n,summary:`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${t} x ${n}`,tuple:`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`}}))})));return b(()=>{let e=n(`div`);t(e,`grid gap-2`);let o=a(`rue:component:anchor`);i(e,o),m(()=>{let t=y(E,{label:`normalized`,value:r.normalized,tone:`warning`});v(()=>h(t,e,o))});let s=a(`rue:component:anchor`);i(e,s),m(()=>{let t=y(E,{label:`total`,value:r.total,tone:`warning`});v(()=>h(t,e,s))});let c=a(`rue:component:anchor`);i(e,c),m(()=>{let t=y(E,{label:`summary`,value:r.summary,tone:`warning`});v(()=>h(t,e,c))});let l=a(`rue:component:anchor`);i(e,l),m(()=>{let t=y(E,{label:`tuple`,value:r.tuple,tone:`warning`});v(()=>h(t,e,l))});let u=a(`rue:component:anchor`);return i(e,u),h(y(E,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),e,u),e})},D=()=>{let{activeTab:o,query:u,count:d,nestedQuery:p,nestedLabel:S,nestedFirst:D,nestedSecond:O,passNestedOptions:k,passNestedMeta:A,passNestedCounts:j,presets:M,nextPreset:se}=x(`useSetup:0:0:dup7`,()=>f(()=>{let e=x(`ref:1:18`,()=>_(`preview`)),t=x(`ref:1:19`,()=>_(` transfer `)),n=x(`ref:1:20`,()=>_(2)),r=x(`ref:1:21`,()=>_(` nested transfer `)),i=x(`ref:1:22`,()=>_(`deep-live`)),a=x(`ref:1:23`,()=>_(3)),o=x(`ref:1:24`,()=>_(5)),s=x(`ref:1:25`,()=>_(!0)),c=x(`ref:1:26`,()=>_(!0)),l=x(`ref:1:27`,()=>_(!0)),u=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:n,nestedQuery:r,nestedLabel:i,nestedFirst:a,nestedSecond:o,passNestedOptions:s,passNestedMeta:c,passNestedCounts:l,presets:u,nextPreset:()=>{let e=u.findIndex(e=>e===t.value);t.value=u[e<0?0:(e+1)%u.length]}}}));return b(()=>{let f=e(),_=a(`rue:component:anchor`);return i(f,_),h(y(C,{children:b(()=>{let f=e(),_=n(`div`);i(f,_),t(_,`space-y-4`);let x=n(`div`);i(_,x),t(x,`space-y-3`);let C=n(`h1`);i(x,C),t(C,`text-4xl font-semibold tracking-tight`),i(C,r(`Props 与 useSetup 边界`));let M=n(`p`);i(x,M),t(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),i(M,r(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let N=n(`p`);i(x,N),t(N,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),i(N,r(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let P=n(`div`);i(_,P),s(P,`role`,`tablist`),t(P,`tabs tabs-box`);let F=n(`button`);i(P,F),s(F,`role`,`tab`),m(()=>{t(F,String(`tab ${o.value===`preview`?`tab-active`:``}`))}),g(F,`click`,()=>{o.value=`preview`}),i(F,r(`效果`));let I=n(`button`);i(P,I),s(I,`role`,`tab`),m(()=>{t(I,String(`tab ${o.value===`code`?`tab-active`:``}`))}),g(I,`click`,()=>{o.value=`code`}),i(I,r(`代码`));let L=n(`div`);i(_,L),t(L,`mt-4 grid gap-6 items-start`);let R=a(`rue:slot:anchor`);i(L,R),m(()=>{let f=o.value===`preview`?b(()=>{let o=e();i(o,r(` `));let f=n(`section`);i(o,f),t(f,`card border border-base-300 bg-base-100 shadow-sm`);let _=n(`div`);i(f,_),t(_,`card-body gap-5`);let b=n(`div`);i(_,b),t(b,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let x=n(`label`);i(b,x),t(x,`form-control grid gap-2`);let ee=n(`span`);i(x,ee),t(ee,`label-text font-medium`),i(ee,r(`父组件 props.query`));let C=n(`input`);i(x,C),t(C,`input input-bordered`),m(()=>{l(C,u.value)}),g(C,`input`,e=>{u.value=e.target.value});let w=n(`button`);i(b,w),t(w,`btn btn-outline`),g(w,`click`,se),i(w,r(`切换预设 query`));let M=n(`div`);i(_,M),t(M,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let N=n(`span`);i(M,N),t(N,`text-sm font-medium`),i(N,r(`父组件 props.count`));let P=n(`div`);i(M,P),t(P,`join`);let F=n(`button`);i(P,F),t(F,`btn join-item btn-outline`),g(F,`click`,()=>{--d.value}),i(F,r(`-1`));let I=n(`button`);i(P,I),t(I,`btn join-item btn-outline`),g(I,`click`,()=>{d.value+=1}),i(I,r(`+1`));let L=n(`input`);i(M,L),t(L,`range range-primary`),s(L,`type`,`range`),s(L,`min`,`0`),s(L,`max`,`12`),s(L,`step`,`1`),m(()=>{l(L,String(d.value))}),g(L,`input`,e=>{d.value=Number(e.target.value)});let R=n(`div`);i(_,R),t(R,`grid gap-3 md:grid-cols-3`);let z=a(`rue:component:anchor`);i(R,z),m(()=>{let e=y(E,{label:`当前 query`,value:u.value});v(()=>h(e,R,z))});let ce=a(`rue:component:anchor`);i(R,ce),m(()=>{let e=y(E,{label:`trim().toUpperCase()`,value:u.value.trim().toUpperCase()||`(empty)`});v(()=>h(e,R,ce))});let le=a(`rue:component:anchor`);i(R,le),m(()=>{let e=y(E,{label:`当前 count`,value:d.value});v(()=>h(e,R,le))}),i(o,r(` `));let B=n(`div`);i(o,B),t(B,`grid gap-4 xl:grid-cols-2`);let ue=a(`rue:component:anchor`);i(B,ue),h(y(T,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:y(te,{query:u.value,count:d.value})}),B,ue);let de=a(`rue:component:anchor`);i(B,de),h(y(T,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:y(ne,{query:u.value,count:d.value})}),B,de);let fe=a(`rue:component:anchor`);i(B,fe),h(y(T,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:y(re,{query:u.value,count:d.value})}),B,fe);let pe=a(`rue:component:anchor`);i(B,pe),h(y(T,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:y(ie,{query:u.value,count:d.value})}),B,pe),i(o,r(` `));let me=n(`div`);i(o,me),t(me,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),i(me,r(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),i(o,r(` `));let he=n(`section`);i(o,he),t(he,`card border border-base-300 bg-base-100 shadow-sm`);let V=n(`div`);i(he,V),t(V,`card-body gap-5`);let H=n(`div`);i(V,H),t(H,`space-y-1`);let ge=n(`h2`);i(H,ge),t(ge,`text-lg font-semibold leading-tight`),i(ge,r(`Nested 解构边界`));let _e=n(`p`);i(H,_e),t(_e,`text-sm text-base-content/70 leading-6`),i(_e,r(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let U=n(`div`);i(V,U),t(U,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let W=n(`label`);i(U,W),t(W,`form-control grid gap-2`);let ve=n(`span`);i(W,ve),t(ve,`label-text font-medium`),i(ve,r(`nested options.query`));let G=n(`input`);i(W,G),t(G,`input input-bordered`),m(()=>{l(G,p.value)}),g(G,`input`,e=>{p.value=e.target.value});let ye=n(`label`);i(U,ye),t(ye,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let K=n(`input`);i(ye,K),t(K,`checkbox checkbox-sm`),s(K,`type`,`checkbox`),m(()=>{c(K,!!k.value)}),g(K,`input`,e=>{k.value=!!e.target.checked});let be=n(`span`);i(ye,be),t(be,`label-text`),i(be,r(`传入 options`));let xe=n(`div`);i(V,xe),t(xe,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let Se=n(`label`);i(xe,Se),t(Se,`form-control grid gap-2`);let Ce=n(`span`);i(Se,Ce),t(Ce,`label-text font-medium`),i(Ce,r(`nested options.meta.label`));let we=n(`input`);i(Se,we),t(we,`input input-bordered`),m(()=>{l(we,S.value)}),g(we,`input`,e=>{S.value=e.target.value});let Te=n(`label`);i(xe,Te),t(Te,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let q=n(`input`);i(Te,q),t(q,`checkbox checkbox-sm`),s(q,`type`,`checkbox`),m(()=>{c(q,!!A.value)}),g(q,`input`,e=>{A.value=!!e.target.checked});let Ee=n(`span`);i(Te,Ee),t(Ee,`label-text`),i(Ee,r(`传入 meta`));let J=n(`div`);i(V,J),t(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=n(`span`);i(J,De),t(De,`text-sm font-medium`),i(De,r(`nested counts`));let Oe=n(`div`);i(J,Oe),t(Oe,`join`);let ke=n(`button`);i(Oe,ke),t(ke,`btn join-item btn-outline`),g(ke,`click`,()=>{--D.value}),i(ke,r(`first -1`));let Ae=n(`button`);i(Oe,Ae),t(Ae,`btn join-item btn-outline`),g(Ae,`click`,()=>{D.value+=1}),i(Ae,r(`first +1`));let Y=n(`input`);i(J,Y),t(Y,`range range-primary`),s(Y,`type`,`range`),s(Y,`min`,`0`),s(Y,`max`,`12`),s(Y,`step`,`1`),m(()=>{l(Y,String(O.value))}),g(Y,`input`,e=>{O.value=Number(e.target.value)});let X=n(`label`);i(J,X),t(X,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Z=n(`input`);i(X,Z),t(Z,`checkbox checkbox-sm`),s(Z,`type`,`checkbox`),m(()=>{c(Z,!!j.value)}),g(Z,`input`,e=>{j.value=!!e.target.checked});let je=n(`span`);i(X,je),t(je,`label-text`),i(je,r(`传入 counts`));let Q=n(`div`);i(V,Q),t(Q,`grid gap-3 md:grid-cols-4`);let Me=a(`rue:component:anchor`);i(Q,Me),m(()=>{let e=y(E,{label:`options.query`,value:k.value?p.value:`undefined`});v(()=>h(e,Q,Me))});let Ne=a(`rue:component:anchor`);i(Q,Ne),m(()=>{let e=y(E,{label:`options.meta.label`,value:k.value&&A.value?S.value:`undefined`});v(()=>h(e,Q,Ne))});let Pe=a(`rue:component:anchor`);i(Q,Pe),m(()=>{let e=y(E,{label:`counts[0]`,value:j.value?D.value:`undefined`});v(()=>h(e,Q,Pe))});let Fe=a(`rue:component:anchor`);i(Q,Fe),m(()=>{let e=y(E,{label:`counts[1]`,value:j.value?O.value:`undefined`});v(()=>h(e,Q,Fe))}),i(o,r(` `));let $=n(`div`);i(o,$),t($,`grid gap-4 xl:grid-cols-2`);let Ie=a(`rue:component:anchor`);i($,Ie),h(y(T,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:y(ae,{options:k.value?{query:p.value,meta:A.value?{label:S.value}:void 0}:void 0,counts:j.value?[D.value,O.value]:void 0})}),$,Ie);let Le=a(`rue:component:anchor`);i($,Le),h(y(T,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:y(oe,{options:k.value?{query:p.value,meta:A.value?{label:S.value}:void 0}:void 0,counts:j.value?[D.value,O.value]:void 0})}),$,Le),i(o,r(` `));let Re=n(`div`);return i(o,Re),t(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),i(Re,r(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),i(o,r(` `)),o}):``;v(()=>h(f,L,R))}),i(L,r(` `));let z=a(`rue:slot:anchor`);return i(L,z),m(()=>{let r=o.value===`code`?b(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),m(()=>{let e=y(ee,{className:`h-full`,lang:`tsx`,code:w});v(()=>h(e,s,c))}),r}):``;v(()=>h(r,L,z))}),f})}),f,_),f})};export{D as default};