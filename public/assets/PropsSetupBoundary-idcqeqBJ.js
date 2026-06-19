import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,b as s,ct as c,et as l,gt as u,ht as d,l as f,lt as p,nt as m,o as h,rt as g,t as _,tt as v,ut as y,yt as b}from"./vapor-runtime-CKrmRMZX.js";import{a as x}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as ee}from"./Code-D5UqTwV6.js";import{r as C}from"./SidebarPlaygroundExample-D2vGHFCu.js";var w=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,T=n=>f(i=>{let a=v(`section`,i);y(a,`card border border-base-300 bg-base-100 shadow-sm`);let s=v(`div`,a);o(a,s),y(s,`card-body gap-4`);let c=v(`div`,s);o(s,c),y(c,`space-y-1`);let l=v(`h2`,c);o(c,l),y(l,`text-lg font-semibold leading-tight`);let u=e(`rue:slot:anchor`);o(l,u),t(()=>{let e=n.title;r(()=>h(e,l,u))});let d=v(`p`,c);o(c,d),y(d,`text-sm text-base-content/70 leading-6`);let f=e(`rue:slot:anchor`);o(d,f),t(()=>{let e=n.note;r(()=>h(e,d,f))});let p=v(`div`,s);o(s,p),y(p,`grid gap-2 text-sm text-base-content/85`);let m=e(`rue:children:anchor`);return o(p,m),t(()=>{let e=n.children;r(()=>h(e,p,m))}),a}),E=n=>{let{toneClassName:i}=x(`useSetup:0:0`,()=>a(()=>({toneClassName:x(`computed:1:0`,()=>b(()=>n.tone===`success`?`border-success/30 bg-success/10 text-success`:n.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return f(a=>{let s=v(`div`,a);y(s,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let c=v(`span`,s);o(s,c),y(c,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let l=e(`rue:slot:anchor`);o(c,l),t(()=>{let e=n.label;r(()=>h(e,c,l))});let d=v(`span`,s);o(s,d),t(()=>{y(d,`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${i.get()}`)});let f=g(d);return o(d,f),t(()=>{u(f,String(n.value))}),s})},te=e=>{let{normalized:t,summary:n}=x(`useSetup:0:0:dup1`,()=>a(()=>{let t=x(`computed:1:1`,()=>b(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:x(`computed:1:2`,()=>b(()=>`${n.get()} x ${e.count}`))}}));return s(`div`,{className:`grid gap-2`},S(E,{label:`normalized`,value:t.get(),tone:`success`}),S(E,{label:`summary`,value:n.get(),tone:`success`}),S(E,{label:`mode`,value:`render 期直接读取解构 props`}))},ne=i=>{let{setupState:s}=x(`useSetup:0:0:dup2`,()=>a(()=>({setupState:x(`useSetup:1:5`,()=>a(()=>{let e={defaultValue:i.query.trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:x(`ref:1:3`,()=>n(e.defaultValue)),pageRef:x(`ref:1:4`,()=>n(i.count))}}))})));return f(n=>{let i=v(`div`,n);y(i,`grid gap-2`);let a=e(`rue:component:anchor`);o(i,a),t(()=>{let e=_(E,{label:`searchConfig.defaultValue`,value:s.searchConfig.defaultValue,tone:`warning`});r(()=>h(e,i,a))});let c=e(`rue:component:anchor`);o(i,c),t(()=>{let e=_(E,{label:`searchValueRef.value`,value:s.searchValueRef.value,tone:`warning`});r(()=>h(e,i,c))});let l=e(`rue:component:anchor`);o(i,l),t(()=>{let e=_(E,{label:`pageRef.value`,value:s.pageRef.value,tone:`warning`});r(()=>h(e,i,l))});let u=e(`rue:component:anchor`);return o(i,u),h(_(E,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),i,u),i})},re=n=>{let{setupState:i}=x(`useSetup:0:0:dup3`,()=>a(()=>({setupState:x(`useSetup:1:8`,()=>a(()=>({normalized:x(`computed:1:6`,()=>b(()=>n.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:7`,()=>b(()=>`${n.query.trim().toUpperCase()||`(empty)`} x ${n.count}`))})))})));return f(n=>{let a=v(`div`,n);y(a,`grid gap-2`);let s=e(`rue:component:anchor`);o(a,s),t(()=>{let e=_(E,{label:`normalized.get()`,value:i.normalized.get(),tone:`success`});r(()=>h(e,a,s))});let c=e(`rue:component:anchor`);o(a,c),t(()=>{let e=_(E,{label:`summary.get()`,value:i.summary.get(),tone:`success`});r(()=>h(e,a,c))});let l=e(`rue:component:anchor`);return o(a,l),h(_(E,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),a,l),a})},ie=n=>{let{setupState:i}=x(`useSetup:0:0:dup4`,()=>a(()=>({setupState:x(`useSetup:1:11`,()=>a(()=>({normalized:x(`computed:1:9`,()=>b(()=>n.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:10`,()=>b(()=>`${n.query.trim().toUpperCase()||`(empty)`} x ${n.count}`))})))})));return f(n=>{let a=v(`div`,n);y(a,`grid gap-2`);let s=e(`rue:component:anchor`);o(a,s),t(()=>{let e=_(E,{label:`normalized.get()`,value:i.normalized.get(),tone:`success`});r(()=>h(e,a,s))});let c=e(`rue:component:anchor`);o(a,c),t(()=>{let e=_(E,{label:`summary.get()`,value:i.summary.get(),tone:`success`});r(()=>h(e,a,c))});let l=e(`rue:component:anchor`);return o(a,l),h(_(E,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),a,l),a})},ae=n=>{let{setupState:i}=x(`useSetup:0:0:dup5`,()=>a(()=>({setupState:x(`useSetup:1:16`,()=>a(()=>({normalized:x(`computed:1:12`,()=>b(()=>((n.options===void 0?{}:n.options).query===void 0?` nested-default `:(n.options===void 0?{}:n.options).query).trim().toUpperCase()||`(empty)`)),total:x(`computed:1:13`,()=>b(()=>((n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0])+((n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]))),summary:x(`computed:1:14`,()=>b(()=>`${((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label===void 0?`fallback-label`:((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label}:${((n.options===void 0?{}:n.options).query===void 0?` nested-default `:(n.options===void 0?{}:n.options).query).trim().toUpperCase()||`(empty)`} x ${((n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0])+((n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1])}`)),tuple:x(`computed:1:15`,()=>b(()=>`${(n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0]}-${(n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]}`))})))})));return f(n=>{let a=v(`div`,n);y(a,`grid gap-2`);let s=e(`rue:component:anchor`);o(a,s),t(()=>{let e=_(E,{label:`normalized.get()`,value:i.normalized.get(),tone:`success`});r(()=>h(e,a,s))});let c=e(`rue:component:anchor`);o(a,c),t(()=>{let e=_(E,{label:`total.get()`,value:i.total.get(),tone:`success`});r(()=>h(e,a,c))});let l=e(`rue:component:anchor`);o(a,l),t(()=>{let e=_(E,{label:`summary.get()`,value:i.summary.get(),tone:`success`});r(()=>h(e,a,l))});let u=e(`rue:component:anchor`);o(a,u),t(()=>{let e=_(E,{label:`tuple.get()`,value:i.tuple.get(),tone:`success`});r(()=>h(e,a,u))});let d=e(`rue:component:anchor`);return o(a,d),h(_(E,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),a,d),a})},oe=n=>{let{setupState:i}=x(`useSetup:0:0:dup6`,()=>a(()=>({setupState:x(`useSetup:1:17`,()=>a(()=>{let e=((n.options===void 0?{}:n.options).query===void 0?` nested-default `:(n.options===void 0?{}:n.options).query).trim().toUpperCase()||`(empty)`,t=((n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0])+((n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]);return{normalized:e,total:t,summary:`${((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label===void 0?`fallback-label`:((n.options===void 0?{}:n.options).meta===void 0?{}:(n.options===void 0?{}:n.options).meta).label}:${e} x ${t}`,tuple:`${(n.counts===void 0?[]:n.counts)[0]===void 0?1:(n.counts===void 0?[]:n.counts)[0]}-${(n.counts===void 0?[]:n.counts)[1]===void 0?2:(n.counts===void 0?[]:n.counts)[1]}`}}))})));return f(n=>{let a=v(`div`,n);y(a,`grid gap-2`);let s=e(`rue:component:anchor`);o(a,s),t(()=>{let e=_(E,{label:`normalized`,value:i.normalized,tone:`warning`});r(()=>h(e,a,s))});let c=e(`rue:component:anchor`);o(a,c),t(()=>{let e=_(E,{label:`total`,value:i.total,tone:`warning`});r(()=>h(e,a,c))});let l=e(`rue:component:anchor`);o(a,l),t(()=>{let e=_(E,{label:`summary`,value:i.summary,tone:`warning`});r(()=>h(e,a,l))});let u=e(`rue:component:anchor`);o(a,u),t(()=>{let e=_(E,{label:`tuple`,value:i.tuple,tone:`warning`});r(()=>h(e,a,u))});let d=e(`rue:component:anchor`);return o(a,d),h(_(E,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),a,d),a})},D=()=>{let{activeTab:s,query:u,count:g,nestedQuery:b,nestedLabel:S,nestedFirst:D,nestedSecond:se,passNestedOptions:O,passNestedMeta:k,passNestedCounts:A,presets:j,nextPreset:ce}=x(`useSetup:0:0:dup7`,()=>a(()=>{let e=x(`ref:1:18`,()=>n(`preview`)),t=x(`ref:1:19`,()=>n(` transfer `)),r=x(`ref:1:20`,()=>n(2)),i=x(`ref:1:21`,()=>n(` nested transfer `)),a=x(`ref:1:22`,()=>n(`deep-live`)),o=x(`ref:1:23`,()=>n(3)),s=x(`ref:1:24`,()=>n(5)),c=x(`ref:1:25`,()=>n(!0)),l=x(`ref:1:26`,()=>n(!0)),u=x(`ref:1:27`,()=>n(!0)),d=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:r,nestedQuery:i,nestedLabel:a,nestedFirst:o,nestedSecond:s,passNestedOptions:c,passNestedMeta:l,passNestedCounts:u,presets:d,nextPreset:()=>{let e=d.findIndex(e=>e===t.value);t.value=d[e<0?0:(e+1)%d.length]}}}));return f(n=>{let a=l(),x=e(`rue:component:anchor`);return o(a,x),h(_(C,{children:f(()=>{let n=l(),a=v(`div`,n);o(n,a),y(a,`space-y-4`);let x=v(`div`,a);o(a,x),y(x,`space-y-3`);let C=v(`h1`,x);o(x,C),y(C,`text-4xl font-semibold tracking-tight`),o(C,m(`Props 与 useSetup 边界`));let j=v(`p`,x);o(x,j),y(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),o(j,m(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let M=v(`p`,x);o(x,M),y(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),o(M,m(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let N=v(`div`,a);o(a,N),c(N,`role`,`tablist`),y(N,`tabs tabs-box`);let P=v(`button`,N);o(N,P),c(P,`role`,`tab`),t(()=>{y(P,`tab ${s.value===`preview`?`tab-active`:``}`)}),i(P,`click`,()=>{s.value=`preview`}),o(P,m(`效果`));let F=v(`button`,N);o(N,F),c(F,`role`,`tab`),t(()=>{y(F,`tab ${s.value===`code`?`tab-active`:``}`)}),i(F,`click`,()=>{s.value=`code`}),o(F,m(`代码`));let I=v(`div`,a);o(a,I),y(I,`mt-4 grid gap-6 items-start`);let L=e(`rue:slot:anchor`);o(I,L),t(()=>{let n=s.value===`preview`?f(()=>{let n=l();o(n,m(` `));let a=v(`section`,n);o(n,a),y(a,`card border border-base-300 bg-base-100 shadow-sm`);let s=v(`div`,a);o(a,s),y(s,`card-body gap-5`);let f=v(`div`,s);o(s,f),y(f,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let x=v(`label`,f);o(f,x),y(x,`form-control grid gap-2`);let ee=v(`span`,x);o(x,ee),y(ee,`label-text font-medium`),o(ee,m(`父组件 props.query`));let C=v(`input`,x);o(x,C),y(C,`input input-bordered`),t(()=>{d(C,u.value)}),i(C,`input`,e=>{u.value=e.target.value});let w=v(`button`,f);o(f,w),y(w,`btn btn-outline`),i(w,`click`,ce),o(w,m(`切换预设 query`));let j=v(`div`,s);o(s,j),y(j,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let M=v(`span`,j);o(j,M),y(M,`text-sm font-medium`),o(M,m(`父组件 props.count`));let N=v(`div`,j);o(j,N),y(N,`join`);let P=v(`button`,N);o(N,P),y(P,`btn join-item btn-outline`),i(P,`click`,()=>{--g.value}),o(P,m(`-1`));let F=v(`button`,N);o(N,F),y(F,`btn join-item btn-outline`),i(F,`click`,()=>{g.value+=1}),o(F,m(`+1`));let I=v(`input`,j);o(j,I),y(I,`range range-primary`),c(I,`type`,`range`),c(I,`min`,`0`),c(I,`max`,`12`),c(I,`step`,`1`),t(()=>{d(I,String(g.value))}),i(I,`input`,e=>{g.value=Number(e.target.value)});let L=v(`div`,s);o(s,L),y(L,`grid gap-3 md:grid-cols-3`);let le=e(`rue:component:anchor`);o(L,le),t(()=>{let e=_(E,{label:`当前 query`,value:u.value});r(()=>h(e,L,le))});let ue=e(`rue:component:anchor`);o(L,ue),t(()=>{let e=_(E,{label:`trim().toUpperCase()`,value:u.value.trim().toUpperCase()||`(empty)`});r(()=>h(e,L,ue))});let de=e(`rue:component:anchor`);o(L,de),t(()=>{let e=_(E,{label:`当前 count`,value:g.value});r(()=>h(e,L,de))}),o(n,m(` `));let R=v(`div`,n);o(n,R),y(R,`grid gap-4 xl:grid-cols-2`);let fe=e(`rue:component:anchor`);o(R,fe),h(_(T,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:_(te,{query:u.value,count:g.value})}),R,fe);let pe=e(`rue:component:anchor`);o(R,pe),h(_(T,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:_(ne,{query:u.value,count:g.value})}),R,pe);let me=e(`rue:component:anchor`);o(R,me),h(_(T,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:_(re,{query:u.value,count:g.value})}),R,me);let he=e(`rue:component:anchor`);o(R,he),h(_(T,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:_(ie,{query:u.value,count:g.value})}),R,he),o(n,m(` `));let ge=v(`div`,n);o(n,ge),y(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),o(ge,m(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),o(n,m(` `));let _e=v(`section`,n);o(n,_e),y(_e,`card border border-base-300 bg-base-100 shadow-sm`);let z=v(`div`,_e);o(_e,z),y(z,`card-body gap-5`);let B=v(`div`,z);o(z,B),y(B,`space-y-1`);let ve=v(`h2`,B);o(B,ve),y(ve,`text-lg font-semibold leading-tight`),o(ve,m(`Nested 解构边界`));let ye=v(`p`,B);o(B,ye),y(ye,`text-sm text-base-content/70 leading-6`),o(ye,m(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let V=v(`div`,z);o(z,V),y(V,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let H=v(`label`,V);o(V,H),y(H,`form-control grid gap-2`);let be=v(`span`,H);o(H,be),y(be,`label-text font-medium`),o(be,m(`nested options.query`));let xe=v(`input`,H);o(H,xe),y(xe,`input input-bordered`),t(()=>{d(xe,b.value)}),i(xe,`input`,e=>{b.value=e.target.value});let U=v(`label`,V);o(V,U),y(U,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let W=v(`input`,U);o(U,W),y(W,`checkbox checkbox-sm`),c(W,`type`,`checkbox`),t(()=>{p(W,!!O.value)}),i(W,`input`,e=>{O.value=!!e.target.checked});let Se=v(`span`,U);o(U,Se),y(Se,`label-text`),o(Se,m(`传入 options`));let G=v(`div`,z);o(z,G),y(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=v(`label`,G);o(G,K),y(K,`form-control grid gap-2`);let Ce=v(`span`,K);o(K,Ce),y(Ce,`label-text font-medium`),o(Ce,m(`nested options.meta.label`));let we=v(`input`,K);o(K,we),y(we,`input input-bordered`),t(()=>{d(we,S.value)}),i(we,`input`,e=>{S.value=e.target.value});let q=v(`label`,G);o(G,q),y(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Te=v(`input`,q);o(q,Te),y(Te,`checkbox checkbox-sm`),c(Te,`type`,`checkbox`),t(()=>{p(Te,!!k.value)}),i(Te,`input`,e=>{k.value=!!e.target.checked});let Ee=v(`span`,q);o(q,Ee),y(Ee,`label-text`),o(Ee,m(`传入 meta`));let J=v(`div`,z);o(z,J),y(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=v(`span`,J);o(J,De),y(De,`text-sm font-medium`),o(De,m(`nested counts`));let Y=v(`div`,J);o(J,Y),y(Y,`join`);let Oe=v(`button`,Y);o(Y,Oe),y(Oe,`btn join-item btn-outline`),i(Oe,`click`,()=>{--D.value}),o(Oe,m(`first -1`));let ke=v(`button`,Y);o(Y,ke),y(ke,`btn join-item btn-outline`),i(ke,`click`,()=>{D.value+=1}),o(ke,m(`first +1`));let X=v(`input`,J);o(J,X),y(X,`range range-primary`),c(X,`type`,`range`),c(X,`min`,`0`),c(X,`max`,`12`),c(X,`step`,`1`),t(()=>{d(X,String(se.value))}),i(X,`input`,e=>{se.value=Number(e.target.value)});let Z=v(`label`,J);o(J,Z),y(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=v(`input`,Z);o(Z,Ae),y(Ae,`checkbox checkbox-sm`),c(Ae,`type`,`checkbox`),t(()=>{p(Ae,!!A.value)}),i(Ae,`input`,e=>{A.value=!!e.target.checked});let je=v(`span`,Z);o(Z,je),y(je,`label-text`),o(je,m(`传入 counts`));let Q=v(`div`,z);o(z,Q),y(Q,`grid gap-3 md:grid-cols-4`);let Me=e(`rue:component:anchor`);o(Q,Me),t(()=>{let e=_(E,{label:`options.query`,value:O.value?b.value:`undefined`});r(()=>h(e,Q,Me))});let Ne=e(`rue:component:anchor`);o(Q,Ne),t(()=>{let e=_(E,{label:`options.meta.label`,value:O.value&&k.value?S.value:`undefined`});r(()=>h(e,Q,Ne))});let Pe=e(`rue:component:anchor`);o(Q,Pe),t(()=>{let e=_(E,{label:`counts[0]`,value:A.value?D.value:`undefined`});r(()=>h(e,Q,Pe))});let Fe=e(`rue:component:anchor`);o(Q,Fe),t(()=>{let e=_(E,{label:`counts[1]`,value:A.value?se.value:`undefined`});r(()=>h(e,Q,Fe))}),o(n,m(` `));let $=v(`div`,n);o(n,$),y($,`grid gap-4 xl:grid-cols-2`);let Ie=e(`rue:component:anchor`);o($,Ie),h(_(T,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:_(ae,{options:O.value?{query:b.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Ie);let Le=e(`rue:component:anchor`);o($,Le),h(_(T,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:_(oe,{options:O.value?{query:b.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Le),o(n,m(` `));let Re=v(`div`,n);return o(n,Re),y(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),o(Re,m(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),o(n,m(` `)),n}):``;r(()=>h(n,I,L))}),o(I,m(` `));let le=e(`rue:slot:anchor`);return o(I,le),t(()=>{let n=s.value===`code`?f(()=>{let n=l(),i=v(`div`,n);o(n,i),y(i,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let a=v(`div`,i);o(i,a),y(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:w});r(()=>h(e,a,s))}),n}):``;r(()=>h(n,I,le))}),n})}),a,x),a})};export{D as default};