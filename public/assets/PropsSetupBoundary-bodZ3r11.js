import{F as e,G as t,I as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,Z as u,d,dt as f,ht as p,l as m,rt as h,st as g,t as _,v,vt as y,z as b}from"./vapor-runtime-BuwLbCGk.js";import{a as x}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as S}from"./src-BQwLQD8R.js";import{t as ee}from"./Code-DQxnq0in.js";import{t as C}from"./SidebarPlaygroundExample-BwOo72z2.js";var w=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,T=t=>d(n=>{let a=i(`section`,n);r(a,`card border border-base-300 bg-base-100 shadow-sm`);let s=i(`div`,a);o(a,s),r(s,`card-body gap-4`);let c=i(`div`,s);o(s,c),r(c,`space-y-1`);let l=i(`h2`,c);o(c,l),r(l,`text-lg font-semibold leading-tight`);let u=e(`rue:slot:anchor`);o(l,u),y(()=>{let e=t.title;f(()=>m(e,l,u))});let d=i(`p`,c);o(c,d),r(d,`text-sm text-base-content/70 leading-6`);let p=e(`rue:slot:anchor`);o(d,p),y(()=>{let e=t.note;f(()=>m(e,d,p))});let h=i(`div`,s);o(s,h),r(h,`grid gap-2 text-sm text-base-content/85`);let g=e(`rue:children:anchor`);return o(h,g),y(()=>{let e=t.children;f(()=>m(e,h,g))}),a}),E=t=>{let{toneClassName:n}=x(`useSetup:0:0`,()=>p(()=>({toneClassName:x(`computed:1:0`,()=>h(()=>t.tone===`success`?`border-success/30 bg-success/10 text-success`:t.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return d(a=>{let c=i(`div`,a);r(c,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let l=i(`span`,c);o(c,l),r(l,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let u=e(`rue:slot:anchor`);o(l,u),y(()=>{let e=t.label;f(()=>m(e,l,u))});let d=i(`span`,c);o(c,d),y(()=>{r(d,String(`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${n.get()}`))});let p=b(d);return o(d,p),y(()=>{s(p,String(t.value))}),c})},te=e=>{let{normalized:t,summary:n}=x(`useSetup:0:0:dup1`,()=>p(()=>{let t=x(`computed:1:1`,()=>h(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:x(`computed:1:2`,()=>h(()=>`${n.get()} x ${e.count}`))}}));return v(`div`,{className:`grid gap-2`},S(E,{label:`normalized`,value:t.get(),tone:`success`}),S(E,{label:`summary`,value:n.get(),tone:`success`}),S(E,{label:`mode`,value:`render 期直接读取解构 props`}))},ne=t=>{let{setupState:n}=x(`useSetup:0:0:dup2`,()=>p(()=>({setupState:x(`useSetup:1:5`,()=>p(()=>{let e={defaultValue:t.query.trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:x(`ref:1:3`,()=>g(e.defaultValue)),pageRef:x(`ref:1:4`,()=>g(t.count))}}))})));return d(t=>{let a=i(`div`,t);r(a,`grid gap-2`);let s=e(`rue:component:anchor`);o(a,s),y(()=>{let e=_(E,{label:`searchConfig.defaultValue`,value:n.searchConfig.defaultValue,tone:`warning`});f(()=>m(e,a,s))});let c=e(`rue:component:anchor`);o(a,c),y(()=>{let e=_(E,{label:`searchValueRef.value`,value:n.searchValueRef.value,tone:`warning`});f(()=>m(e,a,c))});let l=e(`rue:component:anchor`);o(a,l),y(()=>{let e=_(E,{label:`pageRef.value`,value:n.pageRef.value,tone:`warning`});f(()=>m(e,a,l))});let u=e(`rue:component:anchor`);return o(a,u),m(_(E,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),a,u),a})},re=t=>{let{setupState:n}=x(`useSetup:0:0:dup3`,()=>p(()=>({setupState:x(`useSetup:1:8`,()=>p(()=>({normalized:x(`computed:1:6`,()=>h(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:7`,()=>h(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return d(t=>{let a=i(`div`,t);r(a,`grid gap-2`);let s=e(`rue:component:anchor`);o(a,s),y(()=>{let e=_(E,{label:`normalized.get()`,value:n.normalized.get(),tone:`success`});f(()=>m(e,a,s))});let c=e(`rue:component:anchor`);o(a,c),y(()=>{let e=_(E,{label:`summary.get()`,value:n.summary.get(),tone:`success`});f(()=>m(e,a,c))});let l=e(`rue:component:anchor`);return o(a,l),m(_(E,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),a,l),a})},ie=t=>{let{setupState:n}=x(`useSetup:0:0:dup4`,()=>p(()=>({setupState:x(`useSetup:1:11`,()=>p(()=>({normalized:x(`computed:1:9`,()=>h(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:10`,()=>h(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return d(t=>{let a=i(`div`,t);r(a,`grid gap-2`);let s=e(`rue:component:anchor`);o(a,s),y(()=>{let e=_(E,{label:`normalized.get()`,value:n.normalized.get(),tone:`success`});f(()=>m(e,a,s))});let c=e(`rue:component:anchor`);o(a,c),y(()=>{let e=_(E,{label:`summary.get()`,value:n.summary.get(),tone:`success`});f(()=>m(e,a,c))});let l=e(`rue:component:anchor`);return o(a,l),m(_(E,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),a,l),a})},ae=t=>{let{setupState:n}=x(`useSetup:0:0:dup5`,()=>p(()=>({setupState:x(`useSetup:1:16`,()=>p(()=>({normalized:x(`computed:1:12`,()=>h(()=>((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`)),total:x(`computed:1:13`,()=>h(()=>((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]))),summary:x(`computed:1:14`,()=>h(()=>`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`} x ${((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1])}`)),tuple:x(`computed:1:15`,()=>h(()=>`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`))})))})));return d(t=>{let a=i(`div`,t);r(a,`grid gap-2`);let s=e(`rue:component:anchor`);o(a,s),y(()=>{let e=_(E,{label:`normalized.get()`,value:n.normalized.get(),tone:`success`});f(()=>m(e,a,s))});let c=e(`rue:component:anchor`);o(a,c),y(()=>{let e=_(E,{label:`total.get()`,value:n.total.get(),tone:`success`});f(()=>m(e,a,c))});let l=e(`rue:component:anchor`);o(a,l),y(()=>{let e=_(E,{label:`summary.get()`,value:n.summary.get(),tone:`success`});f(()=>m(e,a,l))});let u=e(`rue:component:anchor`);o(a,u),y(()=>{let e=_(E,{label:`tuple.get()`,value:n.tuple.get(),tone:`success`});f(()=>m(e,a,u))});let d=e(`rue:component:anchor`);return o(a,d),m(_(E,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),a,d),a})},oe=t=>{let{setupState:n}=x(`useSetup:0:0:dup6`,()=>p(()=>({setupState:x(`useSetup:1:17`,()=>p(()=>{let e=((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`,n=((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]);return{normalized:e,total:n,summary:`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${e} x ${n}`,tuple:`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`}}))})));return d(t=>{let a=i(`div`,t);r(a,`grid gap-2`);let s=e(`rue:component:anchor`);o(a,s),y(()=>{let e=_(E,{label:`normalized`,value:n.normalized,tone:`warning`});f(()=>m(e,a,s))});let c=e(`rue:component:anchor`);o(a,c),y(()=>{let e=_(E,{label:`total`,value:n.total,tone:`warning`});f(()=>m(e,a,c))});let l=e(`rue:component:anchor`);o(a,l),y(()=>{let e=_(E,{label:`summary`,value:n.summary,tone:`warning`});f(()=>m(e,a,l))});let u=e(`rue:component:anchor`);o(a,u),y(()=>{let e=_(E,{label:`tuple`,value:n.tuple,tone:`warning`});f(()=>m(e,a,u))});let d=e(`rue:component:anchor`);return o(a,d),m(_(E,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),a,d),a})},D=()=>{let{activeTab:s,query:h,count:v,nestedQuery:b,nestedLabel:S,nestedFirst:D,nestedSecond:se,passNestedOptions:O,passNestedMeta:k,passNestedCounts:A,presets:j,nextPreset:ce}=x(`useSetup:0:0:dup7`,()=>p(()=>{let e=x(`ref:1:18`,()=>g(`preview`)),t=x(`ref:1:19`,()=>g(` transfer `)),n=x(`ref:1:20`,()=>g(2)),r=x(`ref:1:21`,()=>g(` nested transfer `)),i=x(`ref:1:22`,()=>g(`deep-live`)),a=x(`ref:1:23`,()=>g(3)),o=x(`ref:1:24`,()=>g(5)),s=x(`ref:1:25`,()=>g(!0)),c=x(`ref:1:26`,()=>g(!0)),l=x(`ref:1:27`,()=>g(!0)),u=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:n,nestedQuery:r,nestedLabel:i,nestedFirst:a,nestedSecond:o,passNestedOptions:s,passNestedMeta:c,passNestedCounts:l,presets:u,nextPreset:()=>{let e=u.findIndex(e=>e===t.value);t.value=u[e<0?0:(e+1)%u.length]}}}));return d(p=>{let g=n(),x=e(`rue:component:anchor`);return o(g,x),m(_(C,{children:d(()=>{let p=n(),g=i(`div`,p);o(p,g),r(g,`space-y-4`);let x=i(`div`,g);o(g,x),r(x,`space-y-3`);let C=i(`h1`,x);o(x,C),r(C,`text-4xl font-semibold tracking-tight`),o(C,c(`Props 与 useSetup 边界`));let j=i(`p`,x);o(x,j),r(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),o(j,c(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let M=i(`p`,x);o(x,M),r(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),o(M,c(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let N=i(`div`,g);o(g,N),l(N,`role`,`tablist`),r(N,`tabs tabs-box`);let P=i(`button`,N);o(N,P),l(P,`role`,`tab`),y(()=>{r(P,String(`tab ${s.value===`preview`?`tab-active`:``}`))}),a(P,`click`,()=>{s.value=`preview`}),o(P,c(`效果`));let F=i(`button`,N);o(N,F),l(F,`role`,`tab`),y(()=>{r(F,String(`tab ${s.value===`code`?`tab-active`:``}`))}),a(F,`click`,()=>{s.value=`code`}),o(F,c(`代码`));let I=i(`div`,g);o(g,I),r(I,`mt-4 grid gap-6 items-start`);let L=e(`rue:slot:anchor`);o(I,L),y(()=>{let p=s.value===`preview`?d(()=>{let s=n();o(s,c(` `));let d=i(`section`,s);o(s,d),r(d,`card border border-base-300 bg-base-100 shadow-sm`);let p=i(`div`,d);o(d,p),r(p,`card-body gap-5`);let g=i(`div`,p);o(p,g),r(g,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let x=i(`label`,g);o(g,x),r(x,`form-control grid gap-2`);let ee=i(`span`,x);o(x,ee),r(ee,`label-text font-medium`),o(ee,c(`父组件 props.query`));let C=i(`input`,x);o(x,C),r(C,`input input-bordered`),y(()=>{u(C,h.value)}),a(C,`input`,e=>{h.value=e.target.value});let w=i(`button`,g);o(g,w),r(w,`btn btn-outline`),a(w,`click`,ce),o(w,c(`切换预设 query`));let j=i(`div`,p);o(p,j),r(j,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let M=i(`span`,j);o(j,M),r(M,`text-sm font-medium`),o(M,c(`父组件 props.count`));let N=i(`div`,j);o(j,N),r(N,`join`);let P=i(`button`,N);o(N,P),r(P,`btn join-item btn-outline`),a(P,`click`,()=>{--v.value}),o(P,c(`-1`));let F=i(`button`,N);o(N,F),r(F,`btn join-item btn-outline`),a(F,`click`,()=>{v.value+=1}),o(F,c(`+1`));let I=i(`input`,j);o(j,I),r(I,`range range-primary`),l(I,`type`,`range`),l(I,`min`,`0`),l(I,`max`,`12`),l(I,`step`,`1`),y(()=>{u(I,String(v.value))}),a(I,`input`,e=>{v.value=Number(e.target.value)});let L=i(`div`,p);o(p,L),r(L,`grid gap-3 md:grid-cols-3`);let le=e(`rue:component:anchor`);o(L,le),y(()=>{let e=_(E,{label:`当前 query`,value:h.value});f(()=>m(e,L,le))});let ue=e(`rue:component:anchor`);o(L,ue),y(()=>{let e=_(E,{label:`trim().toUpperCase()`,value:h.value.trim().toUpperCase()||`(empty)`});f(()=>m(e,L,ue))});let de=e(`rue:component:anchor`);o(L,de),y(()=>{let e=_(E,{label:`当前 count`,value:v.value});f(()=>m(e,L,de))}),o(s,c(` `));let R=i(`div`,s);o(s,R),r(R,`grid gap-4 xl:grid-cols-2`);let fe=e(`rue:component:anchor`);o(R,fe),m(_(T,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:_(te,{query:h.value,count:v.value})}),R,fe);let pe=e(`rue:component:anchor`);o(R,pe),m(_(T,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:_(ne,{query:h.value,count:v.value})}),R,pe);let me=e(`rue:component:anchor`);o(R,me),m(_(T,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:_(re,{query:h.value,count:v.value})}),R,me);let he=e(`rue:component:anchor`);o(R,he),m(_(T,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:_(ie,{query:h.value,count:v.value})}),R,he),o(s,c(` `));let ge=i(`div`,s);o(s,ge),r(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),o(ge,c(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),o(s,c(` `));let _e=i(`section`,s);o(s,_e),r(_e,`card border border-base-300 bg-base-100 shadow-sm`);let z=i(`div`,_e);o(_e,z),r(z,`card-body gap-5`);let B=i(`div`,z);o(z,B),r(B,`space-y-1`);let ve=i(`h2`,B);o(B,ve),r(ve,`text-lg font-semibold leading-tight`),o(ve,c(`Nested 解构边界`));let ye=i(`p`,B);o(B,ye),r(ye,`text-sm text-base-content/70 leading-6`),o(ye,c(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let V=i(`div`,z);o(z,V),r(V,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let H=i(`label`,V);o(V,H),r(H,`form-control grid gap-2`);let be=i(`span`,H);o(H,be),r(be,`label-text font-medium`),o(be,c(`nested options.query`));let xe=i(`input`,H);o(H,xe),r(xe,`input input-bordered`),y(()=>{u(xe,b.value)}),a(xe,`input`,e=>{b.value=e.target.value});let U=i(`label`,V);o(V,U),r(U,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let W=i(`input`,U);o(U,W),r(W,`checkbox checkbox-sm`),l(W,`type`,`checkbox`),y(()=>{t(W,!!O.value)}),a(W,`input`,e=>{O.value=!!e.target.checked});let Se=i(`span`,U);o(U,Se),r(Se,`label-text`),o(Se,c(`传入 options`));let G=i(`div`,z);o(z,G),r(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=i(`label`,G);o(G,K),r(K,`form-control grid gap-2`);let Ce=i(`span`,K);o(K,Ce),r(Ce,`label-text font-medium`),o(Ce,c(`nested options.meta.label`));let we=i(`input`,K);o(K,we),r(we,`input input-bordered`),y(()=>{u(we,S.value)}),a(we,`input`,e=>{S.value=e.target.value});let q=i(`label`,G);o(G,q),r(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Te=i(`input`,q);o(q,Te),r(Te,`checkbox checkbox-sm`),l(Te,`type`,`checkbox`),y(()=>{t(Te,!!k.value)}),a(Te,`input`,e=>{k.value=!!e.target.checked});let Ee=i(`span`,q);o(q,Ee),r(Ee,`label-text`),o(Ee,c(`传入 meta`));let J=i(`div`,z);o(z,J),r(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=i(`span`,J);o(J,De),r(De,`text-sm font-medium`),o(De,c(`nested counts`));let Y=i(`div`,J);o(J,Y),r(Y,`join`);let Oe=i(`button`,Y);o(Y,Oe),r(Oe,`btn join-item btn-outline`),a(Oe,`click`,()=>{--D.value}),o(Oe,c(`first -1`));let ke=i(`button`,Y);o(Y,ke),r(ke,`btn join-item btn-outline`),a(ke,`click`,()=>{D.value+=1}),o(ke,c(`first +1`));let X=i(`input`,J);o(J,X),r(X,`range range-primary`),l(X,`type`,`range`),l(X,`min`,`0`),l(X,`max`,`12`),l(X,`step`,`1`),y(()=>{u(X,String(se.value))}),a(X,`input`,e=>{se.value=Number(e.target.value)});let Z=i(`label`,J);o(J,Z),r(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=i(`input`,Z);o(Z,Ae),r(Ae,`checkbox checkbox-sm`),l(Ae,`type`,`checkbox`),y(()=>{t(Ae,!!A.value)}),a(Ae,`input`,e=>{A.value=!!e.target.checked});let je=i(`span`,Z);o(Z,je),r(je,`label-text`),o(je,c(`传入 counts`));let Q=i(`div`,z);o(z,Q),r(Q,`grid gap-3 md:grid-cols-4`);let Me=e(`rue:component:anchor`);o(Q,Me),y(()=>{let e=_(E,{label:`options.query`,value:O.value?b.value:`undefined`});f(()=>m(e,Q,Me))});let Ne=e(`rue:component:anchor`);o(Q,Ne),y(()=>{let e=_(E,{label:`options.meta.label`,value:O.value&&k.value?S.value:`undefined`});f(()=>m(e,Q,Ne))});let Pe=e(`rue:component:anchor`);o(Q,Pe),y(()=>{let e=_(E,{label:`counts[0]`,value:A.value?D.value:`undefined`});f(()=>m(e,Q,Pe))});let Fe=e(`rue:component:anchor`);o(Q,Fe),y(()=>{let e=_(E,{label:`counts[1]`,value:A.value?se.value:`undefined`});f(()=>m(e,Q,Fe))}),o(s,c(` `));let $=i(`div`,s);o(s,$),r($,`grid gap-4 xl:grid-cols-2`);let Ie=e(`rue:component:anchor`);o($,Ie),m(_(T,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:_(ae,{options:O.value?{query:b.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Ie);let Le=e(`rue:component:anchor`);o($,Le),m(_(T,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:_(oe,{options:O.value?{query:b.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Le),o(s,c(` `));let Re=i(`div`,s);return o(s,Re),r(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),o(Re,c(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),o(s,c(` `)),s}):``;f(()=>m(p,I,L))}),o(I,c(` `));let le=e(`rue:slot:anchor`);return o(I,le),y(()=>{let t=s.value===`code`?d(()=>{let t=n(),a=i(`div`,t);o(t,a),r(a,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let s=i(`div`,a);o(a,s),r(s,`card-body p-0`);let c=e(`rue:component:anchor`);return o(s,c),y(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:w});f(()=>m(e,s,c))}),t}):``;f(()=>m(t,I,le))}),p})}),g,x),g})};export{D as default};