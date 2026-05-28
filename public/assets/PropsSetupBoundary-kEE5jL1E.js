import{$ as e,D as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,d,et as f,gt as p,l as m,mt as h,ot as g,pt as _,st as ee,t as v,tt as y}from"./vapor-runtime-BR_2rwNk.js";import{a as b}from"./vapor-helpers-vapor-DkadWylb.js";import{r as x}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as te}from"./Code-B_4lzH85.js";import{t as S}from"./SidebarPlaygroundExample-CtM-WHq_.js";var C=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,w=t=>d(n=>{let r=e(`section`,n);u(r,`card border border-base-300 bg-base-100 shadow-sm`);let i=e(`div`,r);s(r,i),u(i,`card-body gap-4`);let a=e(`div`,i);s(i,a),u(a,`space-y-1`);let d=e(`h2`,a);s(a,d),u(d,`text-lg font-semibold leading-tight`);let f=l(`rue:slot:anchor`);s(d,f),c(()=>{let e=t.title;o(()=>m(e,d,f))});let p=e(`p`,a);s(a,p),u(p,`text-sm text-base-content/70 leading-6`);let h=l(`rue:slot:anchor`);s(p,h),c(()=>{let e=t.note;o(()=>m(e,p,h))});let g=e(`div`,i);s(i,g),u(g,`grid gap-2 text-sm text-base-content/85`);let _=l(`rue:children:anchor`);return s(g,_),c(()=>{let e=t.children;o(()=>m(e,g,_))}),r}),T=t=>{let{toneClassName:n}=b(`useSetup:0:0`,()=>r(()=>({toneClassName:b(`computed:1:0`,()=>p(()=>t.tone===`success`?`border-success/30 bg-success/10 text-success`:t.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return d(r=>{let i=e(`div`,r);u(i,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let a=e(`span`,i);s(i,a),u(a,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let d=l(`rue:slot:anchor`);s(a,d),c(()=>{let e=t.label;o(()=>m(e,a,d))});let f=e(`span`,i);s(i,f),c(()=>{u(f,String(`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${n.get()}`))});let p=y(f);return s(f,p),c(()=>{h(p,String(t.value))}),i})},ne=e=>{let{normalized:n,summary:i}=b(`useSetup:0:0:dup1`,()=>r(()=>{let t=b(`computed:1:1`,()=>p(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:b(`computed:1:2`,()=>p(()=>`${n.get()} x ${e.count}`))}}));return t(`div`,{className:`grid gap-2`},x(T,{label:`normalized`,value:n.get(),tone:`success`}),x(T,{label:`summary`,value:i.get(),tone:`success`}),x(T,{label:`mode`,value:`render 期直接读取解构 props`}))},re=t=>{let{setupState:n}=b(`useSetup:0:0:dup2`,()=>r(()=>({setupState:b(`useSetup:1:5`,()=>r(()=>{let e={defaultValue:t.query.trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:b(`ref:1:3`,()=>i(e.defaultValue)),pageRef:b(`ref:1:4`,()=>i(t.count))}}))})));return d(t=>{let r=e(`div`,t);u(r,`grid gap-2`);let i=l(`rue:component:anchor`);s(r,i),c(()=>{let e=v(T,{label:`searchConfig.defaultValue`,value:n.searchConfig.defaultValue,tone:`warning`});o(()=>m(e,r,i))});let a=l(`rue:component:anchor`);s(r,a),c(()=>{let e=v(T,{label:`searchValueRef.value`,value:n.searchValueRef.value,tone:`warning`});o(()=>m(e,r,a))});let d=l(`rue:component:anchor`);s(r,d),c(()=>{let e=v(T,{label:`pageRef.value`,value:n.pageRef.value,tone:`warning`});o(()=>m(e,r,d))});let f=l(`rue:component:anchor`);return s(r,f),m(v(T,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),r,f),r})},ie=t=>{let{setupState:n}=b(`useSetup:0:0:dup3`,()=>r(()=>({setupState:b(`useSetup:1:8`,()=>r(()=>({normalized:b(`computed:1:6`,()=>p(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:7`,()=>p(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return d(t=>{let r=e(`div`,t);u(r,`grid gap-2`);let i=l(`rue:component:anchor`);s(r,i),c(()=>{let e=v(T,{label:`normalized.get()`,value:n.normalized.get(),tone:`success`});o(()=>m(e,r,i))});let a=l(`rue:component:anchor`);s(r,a),c(()=>{let e=v(T,{label:`summary.get()`,value:n.summary.get(),tone:`success`});o(()=>m(e,r,a))});let d=l(`rue:component:anchor`);return s(r,d),m(v(T,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),r,d),r})},ae=t=>{let{setupState:n}=b(`useSetup:0:0:dup4`,()=>r(()=>({setupState:b(`useSetup:1:11`,()=>r(()=>({normalized:b(`computed:1:9`,()=>p(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:10`,()=>p(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return d(t=>{let r=e(`div`,t);u(r,`grid gap-2`);let i=l(`rue:component:anchor`);s(r,i),c(()=>{let e=v(T,{label:`normalized.get()`,value:n.normalized.get(),tone:`success`});o(()=>m(e,r,i))});let a=l(`rue:component:anchor`);s(r,a),c(()=>{let e=v(T,{label:`summary.get()`,value:n.summary.get(),tone:`success`});o(()=>m(e,r,a))});let d=l(`rue:component:anchor`);return s(r,d),m(v(T,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),r,d),r})},oe=t=>{let{setupState:n}=b(`useSetup:0:0:dup5`,()=>r(()=>({setupState:b(`useSetup:1:16`,()=>r(()=>({normalized:b(`computed:1:12`,()=>p(()=>((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`)),total:b(`computed:1:13`,()=>p(()=>((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]))),summary:b(`computed:1:14`,()=>p(()=>`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`} x ${((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1])}`)),tuple:b(`computed:1:15`,()=>p(()=>`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`))})))})));return d(t=>{let r=e(`div`,t);u(r,`grid gap-2`);let i=l(`rue:component:anchor`);s(r,i),c(()=>{let e=v(T,{label:`normalized.get()`,value:n.normalized.get(),tone:`success`});o(()=>m(e,r,i))});let a=l(`rue:component:anchor`);s(r,a),c(()=>{let e=v(T,{label:`total.get()`,value:n.total.get(),tone:`success`});o(()=>m(e,r,a))});let d=l(`rue:component:anchor`);s(r,d),c(()=>{let e=v(T,{label:`summary.get()`,value:n.summary.get(),tone:`success`});o(()=>m(e,r,d))});let f=l(`rue:component:anchor`);s(r,f),c(()=>{let e=v(T,{label:`tuple.get()`,value:n.tuple.get(),tone:`success`});o(()=>m(e,r,f))});let p=l(`rue:component:anchor`);return s(r,p),m(v(T,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),r,p),r})},se=t=>{let{setupState:n}=b(`useSetup:0:0:dup6`,()=>r(()=>({setupState:b(`useSetup:1:17`,()=>r(()=>{let e=((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`,n=((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]);return{normalized:e,total:n,summary:`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${e} x ${n}`,tuple:`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`}}))})));return d(t=>{let r=e(`div`,t);u(r,`grid gap-2`);let i=l(`rue:component:anchor`);s(r,i),c(()=>{let e=v(T,{label:`normalized`,value:n.normalized,tone:`warning`});o(()=>m(e,r,i))});let a=l(`rue:component:anchor`);s(r,a),c(()=>{let e=v(T,{label:`total`,value:n.total,tone:`warning`});o(()=>m(e,r,a))});let d=l(`rue:component:anchor`);s(r,d),c(()=>{let e=v(T,{label:`summary`,value:n.summary,tone:`warning`});o(()=>m(e,r,d))});let f=l(`rue:component:anchor`);s(r,f),c(()=>{let e=v(T,{label:`tuple`,value:n.tuple,tone:`warning`});o(()=>m(e,r,f))});let p=l(`rue:component:anchor`);return s(r,p),m(v(T,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),r,p),r})},E=()=>{let{activeTab:t,query:p,count:h,nestedQuery:y,nestedLabel:x,nestedFirst:E,nestedSecond:D,passNestedOptions:O,passNestedMeta:k,passNestedCounts:A,presets:j,nextPreset:ce}=b(`useSetup:0:0:dup7`,()=>r(()=>{let e=b(`ref:1:18`,()=>i(`preview`)),t=b(`ref:1:19`,()=>i(` transfer `)),n=b(`ref:1:20`,()=>i(2)),r=b(`ref:1:21`,()=>i(` nested transfer `)),a=b(`ref:1:22`,()=>i(`deep-live`)),o=b(`ref:1:23`,()=>i(3)),s=b(`ref:1:24`,()=>i(5)),c=b(`ref:1:25`,()=>i(!0)),l=b(`ref:1:26`,()=>i(!0)),u=b(`ref:1:27`,()=>i(!0)),d=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:n,nestedQuery:r,nestedLabel:a,nestedFirst:o,nestedSecond:s,passNestedOptions:c,passNestedMeta:l,passNestedCounts:u,presets:d,nextPreset:()=>{let e=d.findIndex(e=>e===t.value);t.value=d[e<0?0:(e+1)%d.length]}}}));return d(r=>{let i=a(),b=l(`rue:component:anchor`);return s(i,b),m(v(S,{children:d(()=>{let r=a(),i=e(`div`,r);s(r,i),u(i,`space-y-4`);let b=e(`div`,i);s(i,b),u(b,`space-y-3`);let S=e(`h1`,b);s(b,S),u(S,`text-4xl font-semibold tracking-tight`),s(S,f(`Props 与 useSetup 边界`));let j=e(`p`,b);s(b,j),u(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),s(j,f(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let M=e(`p`,b);s(b,M),u(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),s(M,f(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let N=e(`div`,i);s(i,N),g(N,`role`,`tablist`),u(N,`tabs tabs-box`);let P=e(`button`,N);s(N,P),g(P,`role`,`tab`),c(()=>{u(P,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),n(P,`click`,()=>{t.value=`preview`}),s(P,f(`效果`));let F=e(`button`,N);s(N,F),g(F,`role`,`tab`),c(()=>{u(F,String(`tab ${t.value===`code`?`tab-active`:``}`))}),n(F,`click`,()=>{t.value=`code`}),s(F,f(`代码`));let I=e(`div`,i);s(i,I),u(I,`mt-4 grid gap-6 items-start`);let L=l(`rue:slot:anchor`);s(I,L),c(()=>{let r=t.value===`preview`?d(()=>{let t=a();s(t,f(` `));let r=e(`section`,t);s(t,r),u(r,`card border border-base-300 bg-base-100 shadow-sm`);let i=e(`div`,r);s(r,i),u(i,`card-body gap-5`);let d=e(`div`,i);s(i,d),u(d,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=e(`label`,d);s(d,b),u(b,`form-control grid gap-2`);let te=e(`span`,b);s(b,te),u(te,`label-text font-medium`),s(te,f(`父组件 props.query`));let S=e(`input`,b);s(b,S),u(S,`input input-bordered`),c(()=>{_(S,p.value)}),n(S,`input`,e=>{p.value=e.target.value});let C=e(`button`,d);s(d,C),u(C,`btn btn-outline`),n(C,`click`,ce),s(C,f(`切换预设 query`));let j=e(`div`,i);s(i,j),u(j,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let M=e(`span`,j);s(j,M),u(M,`text-sm font-medium`),s(M,f(`父组件 props.count`));let N=e(`div`,j);s(j,N),u(N,`join`);let P=e(`button`,N);s(N,P),u(P,`btn join-item btn-outline`),n(P,`click`,()=>{--h.value}),s(P,f(`-1`));let F=e(`button`,N);s(N,F),u(F,`btn join-item btn-outline`),n(F,`click`,()=>{h.value+=1}),s(F,f(`+1`));let I=e(`input`,j);s(j,I),u(I,`range range-primary`),g(I,`type`,`range`),g(I,`min`,`0`),g(I,`max`,`12`),g(I,`step`,`1`),c(()=>{_(I,String(h.value))}),n(I,`input`,e=>{h.value=Number(e.target.value)});let L=e(`div`,i);s(i,L),u(L,`grid gap-3 md:grid-cols-3`);let le=l(`rue:component:anchor`);s(L,le),c(()=>{let e=v(T,{label:`当前 query`,value:p.value});o(()=>m(e,L,le))});let ue=l(`rue:component:anchor`);s(L,ue),c(()=>{let e=v(T,{label:`trim().toUpperCase()`,value:p.value.trim().toUpperCase()||`(empty)`});o(()=>m(e,L,ue))});let de=l(`rue:component:anchor`);s(L,de),c(()=>{let e=v(T,{label:`当前 count`,value:h.value});o(()=>m(e,L,de))}),s(t,f(` `));let R=e(`div`,t);s(t,R),u(R,`grid gap-4 xl:grid-cols-2`);let fe=l(`rue:component:anchor`);s(R,fe),m(v(w,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:v(ne,{query:p.value,count:h.value})}),R,fe);let pe=l(`rue:component:anchor`);s(R,pe),m(v(w,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:v(re,{query:p.value,count:h.value})}),R,pe);let me=l(`rue:component:anchor`);s(R,me),m(v(w,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:v(ie,{query:p.value,count:h.value})}),R,me);let he=l(`rue:component:anchor`);s(R,he),m(v(w,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:v(ae,{query:p.value,count:h.value})}),R,he),s(t,f(` `));let ge=e(`div`,t);s(t,ge),u(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),s(ge,f(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),s(t,f(` `));let _e=e(`section`,t);s(t,_e),u(_e,`card border border-base-300 bg-base-100 shadow-sm`);let z=e(`div`,_e);s(_e,z),u(z,`card-body gap-5`);let B=e(`div`,z);s(z,B),u(B,`space-y-1`);let ve=e(`h2`,B);s(B,ve),u(ve,`text-lg font-semibold leading-tight`),s(ve,f(`Nested 解构边界`));let ye=e(`p`,B);s(B,ye),u(ye,`text-sm text-base-content/70 leading-6`),s(ye,f(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let V=e(`div`,z);s(z,V),u(V,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let H=e(`label`,V);s(V,H),u(H,`form-control grid gap-2`);let be=e(`span`,H);s(H,be),u(be,`label-text font-medium`),s(be,f(`nested options.query`));let xe=e(`input`,H);s(H,xe),u(xe,`input input-bordered`),c(()=>{_(xe,y.value)}),n(xe,`input`,e=>{y.value=e.target.value});let U=e(`label`,V);s(V,U),u(U,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let W=e(`input`,U);s(U,W),u(W,`checkbox checkbox-sm`),g(W,`type`,`checkbox`),c(()=>{ee(W,!!O.value)}),n(W,`input`,e=>{O.value=!!e.target.checked});let Se=e(`span`,U);s(U,Se),u(Se,`label-text`),s(Se,f(`传入 options`));let G=e(`div`,z);s(z,G),u(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=e(`label`,G);s(G,K),u(K,`form-control grid gap-2`);let Ce=e(`span`,K);s(K,Ce),u(Ce,`label-text font-medium`),s(Ce,f(`nested options.meta.label`));let we=e(`input`,K);s(K,we),u(we,`input input-bordered`),c(()=>{_(we,x.value)}),n(we,`input`,e=>{x.value=e.target.value});let q=e(`label`,G);s(G,q),u(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Te=e(`input`,q);s(q,Te),u(Te,`checkbox checkbox-sm`),g(Te,`type`,`checkbox`),c(()=>{ee(Te,!!k.value)}),n(Te,`input`,e=>{k.value=!!e.target.checked});let Ee=e(`span`,q);s(q,Ee),u(Ee,`label-text`),s(Ee,f(`传入 meta`));let J=e(`div`,z);s(z,J),u(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=e(`span`,J);s(J,De),u(De,`text-sm font-medium`),s(De,f(`nested counts`));let Y=e(`div`,J);s(J,Y),u(Y,`join`);let Oe=e(`button`,Y);s(Y,Oe),u(Oe,`btn join-item btn-outline`),n(Oe,`click`,()=>{--E.value}),s(Oe,f(`first -1`));let ke=e(`button`,Y);s(Y,ke),u(ke,`btn join-item btn-outline`),n(ke,`click`,()=>{E.value+=1}),s(ke,f(`first +1`));let X=e(`input`,J);s(J,X),u(X,`range range-primary`),g(X,`type`,`range`),g(X,`min`,`0`),g(X,`max`,`12`),g(X,`step`,`1`),c(()=>{_(X,String(D.value))}),n(X,`input`,e=>{D.value=Number(e.target.value)});let Z=e(`label`,J);s(J,Z),u(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=e(`input`,Z);s(Z,Ae),u(Ae,`checkbox checkbox-sm`),g(Ae,`type`,`checkbox`),c(()=>{ee(Ae,!!A.value)}),n(Ae,`input`,e=>{A.value=!!e.target.checked});let je=e(`span`,Z);s(Z,je),u(je,`label-text`),s(je,f(`传入 counts`));let Q=e(`div`,z);s(z,Q),u(Q,`grid gap-3 md:grid-cols-4`);let Me=l(`rue:component:anchor`);s(Q,Me),c(()=>{let e=v(T,{label:`options.query`,value:O.value?y.value:`undefined`});o(()=>m(e,Q,Me))});let Ne=l(`rue:component:anchor`);s(Q,Ne),c(()=>{let e=v(T,{label:`options.meta.label`,value:O.value&&k.value?x.value:`undefined`});o(()=>m(e,Q,Ne))});let Pe=l(`rue:component:anchor`);s(Q,Pe),c(()=>{let e=v(T,{label:`counts[0]`,value:A.value?E.value:`undefined`});o(()=>m(e,Q,Pe))});let Fe=l(`rue:component:anchor`);s(Q,Fe),c(()=>{let e=v(T,{label:`counts[1]`,value:A.value?D.value:`undefined`});o(()=>m(e,Q,Fe))}),s(t,f(` `));let $=e(`div`,t);s(t,$),u($,`grid gap-4 xl:grid-cols-2`);let Ie=l(`rue:component:anchor`);s($,Ie),m(v(w,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:v(oe,{options:O.value?{query:y.value,meta:k.value?{label:x.value}:void 0}:void 0,counts:A.value?[E.value,D.value]:void 0})}),$,Ie);let Le=l(`rue:component:anchor`);s($,Le),m(v(w,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:v(se,{options:O.value?{query:y.value,meta:k.value?{label:x.value}:void 0}:void 0,counts:A.value?[E.value,D.value]:void 0})}),$,Le),s(t,f(` `));let Re=e(`div`,t);return s(t,Re),u(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),s(Re,f(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),s(t,f(` `)),t}):``;o(()=>m(r,I,L))}),s(I,f(` `));let le=l(`rue:slot:anchor`);return s(I,le),c(()=>{let n=t.value===`code`?d(()=>{let t=a(),n=e(`div`,t);s(t,n),u(n,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let r=e(`div`,n);s(n,r),u(r,`card-body p-0`);let i=l(`rue:component:anchor`);return s(r,i),c(()=>{let e=v(te,{className:`h-full`,lang:`tsx`,code:C});o(()=>m(e,r,i))}),t}):``;o(()=>m(n,I,le))}),r})}),i,b),i})};export{E as default};