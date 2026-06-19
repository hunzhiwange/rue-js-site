import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,b as s,ct as c,et as l,ht as u,l as d,lt as f,mt as p,nt as m,o as h,st as g,t as _,tt as v,vt as y,zt as b}from"./vapor-runtime-CXIalONM.js";import{a as x}from"./vapor-helpers-vapor-CoXKrGmY.js";import{i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as ee}from"./Code-BIscIyEp.js";import{r as C}from"./SidebarPlaygroundExample-CEz1fABX.js";var w=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,T=e=>d(a=>{let o=l(`section`,a);f(o,`card border border-base-300 bg-base-100 shadow-sm`);let s=l(`div`,o);i(o,s),f(s,`card-body gap-4`);let c=l(`div`,s);i(s,c),f(c,`space-y-1`);let u=l(`h2`,c);i(c,u),f(u,`text-lg font-semibold leading-tight`);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let t=e.title;r(()=>h(t,u,d))});let p=l(`p`,c);i(c,p),f(p,`text-sm text-base-content/70 leading-6`);let m=t(`rue:slot:anchor`);i(p,m),n(()=>{let t=e.note;r(()=>h(t,p,m))});let g=l(`div`,s);i(s,g),f(g,`grid gap-2 text-sm text-base-content/85`);let _=t(`rue:children:anchor`);return i(g,_),n(()=>{let t=e.children;r(()=>h(t,g,_))}),o}),E=e=>{let{toneClassName:a}=x(`useSetup:0:0`,()=>o(()=>({toneClassName:x(`computed:1:0`,()=>y(()=>e.tone===`success`?`border-success/30 bg-success/10 text-success`:e.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return d(o=>{let s=l(`div`,o);f(s,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let c=l(`span`,s);i(s,c),f(c,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let d=t(`rue:slot:anchor`);i(c,d),n(()=>{let t=e.label;r(()=>h(t,c,d))});let p=l(`span`,s);i(s,p),n(()=>{f(p,`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${a.get()}`)});let g=m(p);return i(p,g),n(()=>{u(g,String(e.value))}),s})},te=e=>{let{normalized:t,summary:n}=x(`useSetup:0:0:dup1`,()=>o(()=>{let t=x(`computed:1:1`,()=>y(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:x(`computed:1:2`,()=>y(()=>`${n.get()} x ${e.count}`))}}));return s(`div`,{className:`grid gap-2`},S(E,{label:`normalized`,value:t.get(),tone:`success`}),S(E,{label:`summary`,value:n.get(),tone:`success`}),S(E,{label:`mode`,value:`render 期直接读取解构 props`}))},ne=e=>{let{setupState:a}=x(`useSetup:0:0:dup2`,()=>o(()=>({setupState:x(`useSetup:1:5`,()=>o(()=>{let t={defaultValue:e.query.trim().toUpperCase()||`(empty)`};return{searchConfig:t,searchValueRef:x(`ref:1:3`,()=>b(t.defaultValue)),pageRef:x(`ref:1:4`,()=>b(e.count))}}))})));return d(e=>{let o=l(`div`,e);f(o,`grid gap-2`);let s=t(`rue:component:anchor`);i(o,s),n(()=>{let e=_(E,{label:`searchConfig.defaultValue`,value:a.searchConfig.defaultValue,tone:`warning`});r(()=>h(e,o,s))});let c=t(`rue:component:anchor`);i(o,c),n(()=>{let e=_(E,{label:`searchValueRef.value`,value:a.searchValueRef.value,tone:`warning`});r(()=>h(e,o,c))});let u=t(`rue:component:anchor`);i(o,u),n(()=>{let e=_(E,{label:`pageRef.value`,value:a.pageRef.value,tone:`warning`});r(()=>h(e,o,u))});let d=t(`rue:component:anchor`);return i(o,d),h(_(E,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),o,d),o})},re=e=>{let{setupState:a}=x(`useSetup:0:0:dup3`,()=>o(()=>({setupState:x(`useSetup:1:8`,()=>o(()=>({normalized:x(`computed:1:6`,()=>y(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:7`,()=>y(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))})))})));return d(e=>{let o=l(`div`,e);f(o,`grid gap-2`);let s=t(`rue:component:anchor`);i(o,s),n(()=>{let e=_(E,{label:`normalized.get()`,value:a.normalized.get(),tone:`success`});r(()=>h(e,o,s))});let c=t(`rue:component:anchor`);i(o,c),n(()=>{let e=_(E,{label:`summary.get()`,value:a.summary.get(),tone:`success`});r(()=>h(e,o,c))});let u=t(`rue:component:anchor`);return i(o,u),h(_(E,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),o,u),o})},ie=e=>{let{setupState:a}=x(`useSetup:0:0:dup4`,()=>o(()=>({setupState:x(`useSetup:1:11`,()=>o(()=>({normalized:x(`computed:1:9`,()=>y(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:10`,()=>y(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))})))})));return d(e=>{let o=l(`div`,e);f(o,`grid gap-2`);let s=t(`rue:component:anchor`);i(o,s),n(()=>{let e=_(E,{label:`normalized.get()`,value:a.normalized.get(),tone:`success`});r(()=>h(e,o,s))});let c=t(`rue:component:anchor`);i(o,c),n(()=>{let e=_(E,{label:`summary.get()`,value:a.summary.get(),tone:`success`});r(()=>h(e,o,c))});let u=t(`rue:component:anchor`);return i(o,u),h(_(E,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),o,u),o})},ae=e=>{let{setupState:a}=x(`useSetup:0:0:dup5`,()=>o(()=>({setupState:x(`useSetup:1:16`,()=>o(()=>({normalized:x(`computed:1:12`,()=>y(()=>((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`)),total:x(`computed:1:13`,()=>y(()=>((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]))),summary:x(`computed:1:14`,()=>y(()=>`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`} x ${((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1])}`)),tuple:x(`computed:1:15`,()=>y(()=>`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`))})))})));return d(e=>{let o=l(`div`,e);f(o,`grid gap-2`);let s=t(`rue:component:anchor`);i(o,s),n(()=>{let e=_(E,{label:`normalized.get()`,value:a.normalized.get(),tone:`success`});r(()=>h(e,o,s))});let c=t(`rue:component:anchor`);i(o,c),n(()=>{let e=_(E,{label:`total.get()`,value:a.total.get(),tone:`success`});r(()=>h(e,o,c))});let u=t(`rue:component:anchor`);i(o,u),n(()=>{let e=_(E,{label:`summary.get()`,value:a.summary.get(),tone:`success`});r(()=>h(e,o,u))});let d=t(`rue:component:anchor`);i(o,d),n(()=>{let e=_(E,{label:`tuple.get()`,value:a.tuple.get(),tone:`success`});r(()=>h(e,o,d))});let p=t(`rue:component:anchor`);return i(o,p),h(_(E,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),o,p),o})},oe=e=>{let{setupState:a}=x(`useSetup:0:0:dup6`,()=>o(()=>({setupState:x(`useSetup:1:17`,()=>o(()=>{let t=((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`,n=((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]);return{normalized:t,total:n,summary:`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${t} x ${n}`,tuple:`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`}}))})));return d(e=>{let o=l(`div`,e);f(o,`grid gap-2`);let s=t(`rue:component:anchor`);i(o,s),n(()=>{let e=_(E,{label:`normalized`,value:a.normalized,tone:`warning`});r(()=>h(e,o,s))});let c=t(`rue:component:anchor`);i(o,c),n(()=>{let e=_(E,{label:`total`,value:a.total,tone:`warning`});r(()=>h(e,o,c))});let u=t(`rue:component:anchor`);i(o,u),n(()=>{let e=_(E,{label:`summary`,value:a.summary,tone:`warning`});r(()=>h(e,o,u))});let d=t(`rue:component:anchor`);i(o,d),n(()=>{let e=_(E,{label:`tuple`,value:a.tuple,tone:`warning`});r(()=>h(e,o,d))});let p=t(`rue:component:anchor`);return i(o,p),h(_(E,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),o,p),o})},D=()=>{let{activeTab:s,query:u,count:m,nestedQuery:y,nestedLabel:S,nestedFirst:D,nestedSecond:se,passNestedOptions:O,passNestedMeta:k,passNestedCounts:A,presets:j,nextPreset:ce}=x(`useSetup:0:0:dup7`,()=>o(()=>{let e=x(`ref:1:18`,()=>b(`preview`)),t=x(`ref:1:19`,()=>b(` transfer `)),n=x(`ref:1:20`,()=>b(2)),r=x(`ref:1:21`,()=>b(` nested transfer `)),i=x(`ref:1:22`,()=>b(`deep-live`)),a=x(`ref:1:23`,()=>b(3)),o=x(`ref:1:24`,()=>b(5)),s=x(`ref:1:25`,()=>b(!0)),c=x(`ref:1:26`,()=>b(!0)),l=x(`ref:1:27`,()=>b(!0)),u=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:n,nestedQuery:r,nestedLabel:i,nestedFirst:a,nestedSecond:o,passNestedOptions:s,passNestedMeta:c,passNestedCounts:l,presets:u,nextPreset:()=>{let e=u.findIndex(e=>e===t.value);t.value=u[e<0?0:(e+1)%u.length]}}}));return d(o=>{let b=e(),x=t(`rue:component:anchor`);return i(b,x),h(_(C,{children:d(()=>{let o=e(),b=l(`div`,o);i(o,b),f(b,`space-y-4`);let x=l(`div`,b);i(b,x),f(x,`space-y-3`);let C=l(`h1`,x);i(x,C),f(C,`text-4xl font-semibold tracking-tight`),i(C,v(`Props 与 useSetup 边界`));let j=l(`p`,x);i(x,j),f(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),i(j,v(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let M=l(`p`,x);i(x,M),f(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),i(M,v(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let N=l(`div`,b);i(b,N),g(N,`role`,`tablist`),f(N,`tabs tabs-box`);let P=l(`button`,N);i(N,P),g(P,`role`,`tab`),n(()=>{f(P,`tab ${s.value===`preview`?`tab-active`:``}`)}),a(P,`click`,()=>{s.value=`preview`}),i(P,v(`效果`));let F=l(`button`,N);i(N,F),g(F,`role`,`tab`),n(()=>{f(F,`tab ${s.value===`code`?`tab-active`:``}`)}),a(F,`click`,()=>{s.value=`code`}),i(F,v(`代码`));let I=l(`div`,b);i(b,I),f(I,`mt-4 grid gap-6 items-start`);let L=t(`rue:slot:anchor`);i(I,L),n(()=>{let o=s.value===`preview`?d(()=>{let o=e();i(o,v(` `));let s=l(`section`,o);i(o,s),f(s,`card border border-base-300 bg-base-100 shadow-sm`);let d=l(`div`,s);i(s,d),f(d,`card-body gap-5`);let b=l(`div`,d);i(d,b),f(b,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let x=l(`label`,b);i(b,x),f(x,`form-control grid gap-2`);let ee=l(`span`,x);i(x,ee),f(ee,`label-text font-medium`),i(ee,v(`父组件 props.query`));let C=l(`input`,x);i(x,C),f(C,`input input-bordered`),n(()=>{p(C,u.value)}),a(C,`input`,e=>{u.value=e.target.value});let w=l(`button`,b);i(b,w),f(w,`btn btn-outline`),a(w,`click`,ce),i(w,v(`切换预设 query`));let j=l(`div`,d);i(d,j),f(j,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let M=l(`span`,j);i(j,M),f(M,`text-sm font-medium`),i(M,v(`父组件 props.count`));let N=l(`div`,j);i(j,N),f(N,`join`);let P=l(`button`,N);i(N,P),f(P,`btn join-item btn-outline`),a(P,`click`,()=>{--m.value}),i(P,v(`-1`));let F=l(`button`,N);i(N,F),f(F,`btn join-item btn-outline`),a(F,`click`,()=>{m.value+=1}),i(F,v(`+1`));let I=l(`input`,j);i(j,I),f(I,`range range-primary`),g(I,`type`,`range`),g(I,`min`,`0`),g(I,`max`,`12`),g(I,`step`,`1`),n(()=>{p(I,String(m.value))}),a(I,`input`,e=>{m.value=Number(e.target.value)});let L=l(`div`,d);i(d,L),f(L,`grid gap-3 md:grid-cols-3`);let le=t(`rue:component:anchor`);i(L,le),n(()=>{let e=_(E,{label:`当前 query`,value:u.value});r(()=>h(e,L,le))});let ue=t(`rue:component:anchor`);i(L,ue),n(()=>{let e=_(E,{label:`trim().toUpperCase()`,value:u.value.trim().toUpperCase()||`(empty)`});r(()=>h(e,L,ue))});let de=t(`rue:component:anchor`);i(L,de),n(()=>{let e=_(E,{label:`当前 count`,value:m.value});r(()=>h(e,L,de))}),i(o,v(` `));let R=l(`div`,o);i(o,R),f(R,`grid gap-4 xl:grid-cols-2`);let fe=t(`rue:component:anchor`);i(R,fe),h(_(T,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:_(te,{query:u.value,count:m.value})}),R,fe);let pe=t(`rue:component:anchor`);i(R,pe),h(_(T,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:_(ne,{query:u.value,count:m.value})}),R,pe);let me=t(`rue:component:anchor`);i(R,me),h(_(T,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:_(re,{query:u.value,count:m.value})}),R,me);let he=t(`rue:component:anchor`);i(R,he),h(_(T,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:_(ie,{query:u.value,count:m.value})}),R,he),i(o,v(` `));let ge=l(`div`,o);i(o,ge),f(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),i(ge,v(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),i(o,v(` `));let _e=l(`section`,o);i(o,_e),f(_e,`card border border-base-300 bg-base-100 shadow-sm`);let z=l(`div`,_e);i(_e,z),f(z,`card-body gap-5`);let B=l(`div`,z);i(z,B),f(B,`space-y-1`);let ve=l(`h2`,B);i(B,ve),f(ve,`text-lg font-semibold leading-tight`),i(ve,v(`Nested 解构边界`));let ye=l(`p`,B);i(B,ye),f(ye,`text-sm text-base-content/70 leading-6`),i(ye,v(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let V=l(`div`,z);i(z,V),f(V,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let H=l(`label`,V);i(V,H),f(H,`form-control grid gap-2`);let be=l(`span`,H);i(H,be),f(be,`label-text font-medium`),i(be,v(`nested options.query`));let xe=l(`input`,H);i(H,xe),f(xe,`input input-bordered`),n(()=>{p(xe,y.value)}),a(xe,`input`,e=>{y.value=e.target.value});let U=l(`label`,V);i(V,U),f(U,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let W=l(`input`,U);i(U,W),f(W,`checkbox checkbox-sm`),g(W,`type`,`checkbox`),n(()=>{c(W,!!O.value)}),a(W,`input`,e=>{O.value=!!e.target.checked});let Se=l(`span`,U);i(U,Se),f(Se,`label-text`),i(Se,v(`传入 options`));let G=l(`div`,z);i(z,G),f(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=l(`label`,G);i(G,K),f(K,`form-control grid gap-2`);let Ce=l(`span`,K);i(K,Ce),f(Ce,`label-text font-medium`),i(Ce,v(`nested options.meta.label`));let we=l(`input`,K);i(K,we),f(we,`input input-bordered`),n(()=>{p(we,S.value)}),a(we,`input`,e=>{S.value=e.target.value});let q=l(`label`,G);i(G,q),f(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Te=l(`input`,q);i(q,Te),f(Te,`checkbox checkbox-sm`),g(Te,`type`,`checkbox`),n(()=>{c(Te,!!k.value)}),a(Te,`input`,e=>{k.value=!!e.target.checked});let Ee=l(`span`,q);i(q,Ee),f(Ee,`label-text`),i(Ee,v(`传入 meta`));let J=l(`div`,z);i(z,J),f(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=l(`span`,J);i(J,De),f(De,`text-sm font-medium`),i(De,v(`nested counts`));let Y=l(`div`,J);i(J,Y),f(Y,`join`);let Oe=l(`button`,Y);i(Y,Oe),f(Oe,`btn join-item btn-outline`),a(Oe,`click`,()=>{--D.value}),i(Oe,v(`first -1`));let ke=l(`button`,Y);i(Y,ke),f(ke,`btn join-item btn-outline`),a(ke,`click`,()=>{D.value+=1}),i(ke,v(`first +1`));let X=l(`input`,J);i(J,X),f(X,`range range-primary`),g(X,`type`,`range`),g(X,`min`,`0`),g(X,`max`,`12`),g(X,`step`,`1`),n(()=>{p(X,String(se.value))}),a(X,`input`,e=>{se.value=Number(e.target.value)});let Z=l(`label`,J);i(J,Z),f(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=l(`input`,Z);i(Z,Ae),f(Ae,`checkbox checkbox-sm`),g(Ae,`type`,`checkbox`),n(()=>{c(Ae,!!A.value)}),a(Ae,`input`,e=>{A.value=!!e.target.checked});let je=l(`span`,Z);i(Z,je),f(je,`label-text`),i(je,v(`传入 counts`));let Q=l(`div`,z);i(z,Q),f(Q,`grid gap-3 md:grid-cols-4`);let Me=t(`rue:component:anchor`);i(Q,Me),n(()=>{let e=_(E,{label:`options.query`,value:O.value?y.value:`undefined`});r(()=>h(e,Q,Me))});let Ne=t(`rue:component:anchor`);i(Q,Ne),n(()=>{let e=_(E,{label:`options.meta.label`,value:O.value&&k.value?S.value:`undefined`});r(()=>h(e,Q,Ne))});let Pe=t(`rue:component:anchor`);i(Q,Pe),n(()=>{let e=_(E,{label:`counts[0]`,value:A.value?D.value:`undefined`});r(()=>h(e,Q,Pe))});let Fe=t(`rue:component:anchor`);i(Q,Fe),n(()=>{let e=_(E,{label:`counts[1]`,value:A.value?se.value:`undefined`});r(()=>h(e,Q,Fe))}),i(o,v(` `));let $=l(`div`,o);i(o,$),f($,`grid gap-4 xl:grid-cols-2`);let Ie=t(`rue:component:anchor`);i($,Ie),h(_(T,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:_(ae,{options:O.value?{query:y.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Ie);let Le=t(`rue:component:anchor`);i($,Le),h(_(T,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:_(oe,{options:O.value?{query:y.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Le),i(o,v(` `));let Re=l(`div`,o);return i(o,Re),f(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),i(Re,v(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),i(o,v(` `)),o}):``;r(()=>h(o,I,L))}),i(I,v(` `));let le=t(`rue:slot:anchor`);return i(I,le),n(()=>{let a=s.value===`code`?d(()=>{let a=e(),o=l(`div`,a);i(a,o),f(o,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let s=l(`div`,o);i(o,s),f(s,`card-body p-0`);let c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:w});r(()=>h(e,s,c))}),a}):``;r(()=>h(a,I,le))}),o})}),b,x),b})};export{D as default};