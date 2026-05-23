import{$ as e,Et as t,G as n,H as r,J as i,K as a,T as o,V as s,W as c,_t as l,d as u,dt as d,et as f,kt as p,l as m,ot as h,q as g,st as _,t as v,tt as y,xt as b}from"./vapor-runtime-EUvELKQT.js";import{a as x}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as S}from"./src-BI4ToZNE.js";import{t as ee}from"./Code-BdVklNCb.js";import{t as C}from"./SidebarPlaygroundExample-1AA0CIwm.js";var w=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,T=e=>u(t=>{let n=a(`section`,t);y(n,`card border border-base-300 bg-base-100 shadow-sm`);let i=a(`div`,n);r(n,i),y(i,`card-body gap-4`);let o=a(`div`,i);r(i,o),y(o,`space-y-1`);let s=a(`h2`,o);r(o,s),y(s,`text-lg font-semibold leading-tight`);let l=c(`rue:slot:anchor`);r(s,l),p(()=>{let t=e.title;b(()=>m(t,s,l))});let u=a(`p`,o);r(o,u),y(u,`text-sm text-base-content/70 leading-6`);let d=c(`rue:slot:anchor`);r(u,d),p(()=>{let t=e.note;b(()=>m(t,u,d))});let f=a(`div`,i);r(i,f),y(f,`grid gap-2 text-sm text-base-content/85`);let h=c(`rue:children:anchor`);return r(f,h),p(()=>{let t=e.children;b(()=>m(t,f,h))}),n}),E=e=>{let{toneClassName:n}=x(`useSetup:0:0`,()=>t(()=>({toneClassName:x(`computed:1:0`,()=>d(()=>e.tone===`success`?`border-success/30 bg-success/10 text-success`:e.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return u(t=>{let o=a(`div`,t);y(o,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let s=a(`span`,o);r(o,s),y(s,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let l=c(`rue:slot:anchor`);r(s,l),p(()=>{let t=e.label;b(()=>m(t,s,l))});let u=a(`span`,o);r(o,u),p(()=>{y(u,String(`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${n.get()}`))});let d=i(u);return r(u,d),p(()=>{_(d,String(e.value))}),o})},te=e=>{let{normalized:n,summary:r}=x(`useSetup:0:0:dup1`,()=>t(()=>{let t=x(`computed:1:1`,()=>d(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:x(`computed:1:2`,()=>d(()=>`${n.get()} x ${e.count}`))}}));return o(`div`,{className:`grid gap-2`},S(E,{label:`normalized`,value:n.get(),tone:`success`}),S(E,{label:`summary`,value:r.get(),tone:`success`}),S(E,{label:`mode`,value:`render 期直接读取解构 props`}))},ne=e=>{let{setupState:n}=x(`useSetup:0:0:dup2`,()=>t(()=>({setupState:x(`useSetup:1:5`,()=>t(()=>{let t={defaultValue:e.query.trim().toUpperCase()||`(empty)`};return{searchConfig:t,searchValueRef:x(`ref:1:3`,()=>l(t.defaultValue)),pageRef:x(`ref:1:4`,()=>l(e.count))}}))})));return u(e=>{let t=a(`div`,e);y(t,`grid gap-2`);let i=c(`rue:component:anchor`);r(t,i),p(()=>{let e=v(E,{label:`searchConfig.defaultValue`,value:n.searchConfig.defaultValue,tone:`warning`});b(()=>m(e,t,i))});let o=c(`rue:component:anchor`);r(t,o),p(()=>{let e=v(E,{label:`searchValueRef.value`,value:n.searchValueRef.value,tone:`warning`});b(()=>m(e,t,o))});let s=c(`rue:component:anchor`);r(t,s),p(()=>{let e=v(E,{label:`pageRef.value`,value:n.pageRef.value,tone:`warning`});b(()=>m(e,t,s))});let l=c(`rue:component:anchor`);return r(t,l),m(v(E,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),t,l),t})},re=e=>{let{setupState:n}=x(`useSetup:0:0:dup3`,()=>t(()=>({setupState:x(`useSetup:1:8`,()=>t(()=>({normalized:x(`computed:1:6`,()=>d(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:7`,()=>d(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))})))})));return u(e=>{let t=a(`div`,e);y(t,`grid gap-2`);let i=c(`rue:component:anchor`);r(t,i),p(()=>{let e=v(E,{label:`normalized.get()`,value:n.normalized.get(),tone:`success`});b(()=>m(e,t,i))});let o=c(`rue:component:anchor`);r(t,o),p(()=>{let e=v(E,{label:`summary.get()`,value:n.summary.get(),tone:`success`});b(()=>m(e,t,o))});let s=c(`rue:component:anchor`);return r(t,s),m(v(E,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),t,s),t})},ie=e=>{let{setupState:n}=x(`useSetup:0:0:dup4`,()=>t(()=>({setupState:x(`useSetup:1:11`,()=>t(()=>({normalized:x(`computed:1:9`,()=>d(()=>e.query.trim().toUpperCase()||`(empty)`)),summary:x(`computed:1:10`,()=>d(()=>`${e.query.trim().toUpperCase()||`(empty)`} x ${e.count}`))})))})));return u(e=>{let t=a(`div`,e);y(t,`grid gap-2`);let i=c(`rue:component:anchor`);r(t,i),p(()=>{let e=v(E,{label:`normalized.get()`,value:n.normalized.get(),tone:`success`});b(()=>m(e,t,i))});let o=c(`rue:component:anchor`);r(t,o),p(()=>{let e=v(E,{label:`summary.get()`,value:n.summary.get(),tone:`success`});b(()=>m(e,t,o))});let s=c(`rue:component:anchor`);return r(t,s),m(v(E,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),t,s),t})},ae=e=>{let{setupState:n}=x(`useSetup:0:0:dup5`,()=>t(()=>({setupState:x(`useSetup:1:16`,()=>t(()=>({normalized:x(`computed:1:12`,()=>d(()=>((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`)),total:x(`computed:1:13`,()=>d(()=>((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]))),summary:x(`computed:1:14`,()=>d(()=>`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`} x ${((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1])}`)),tuple:x(`computed:1:15`,()=>d(()=>`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`))})))})));return u(e=>{let t=a(`div`,e);y(t,`grid gap-2`);let i=c(`rue:component:anchor`);r(t,i),p(()=>{let e=v(E,{label:`normalized.get()`,value:n.normalized.get(),tone:`success`});b(()=>m(e,t,i))});let o=c(`rue:component:anchor`);r(t,o),p(()=>{let e=v(E,{label:`total.get()`,value:n.total.get(),tone:`success`});b(()=>m(e,t,o))});let s=c(`rue:component:anchor`);r(t,s),p(()=>{let e=v(E,{label:`summary.get()`,value:n.summary.get(),tone:`success`});b(()=>m(e,t,s))});let l=c(`rue:component:anchor`);r(t,l),p(()=>{let e=v(E,{label:`tuple.get()`,value:n.tuple.get(),tone:`success`});b(()=>m(e,t,l))});let u=c(`rue:component:anchor`);return r(t,u),m(v(E,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),t,u),t})},oe=e=>{let{setupState:n}=x(`useSetup:0:0:dup6`,()=>t(()=>({setupState:x(`useSetup:1:17`,()=>t(()=>{let t=((e.options===void 0?{}:e.options).query===void 0?` nested-default `:(e.options===void 0?{}:e.options).query).trim().toUpperCase()||`(empty)`,n=((e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0])+((e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]);return{normalized:t,total:n,summary:`${((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label===void 0?`fallback-label`:((e.options===void 0?{}:e.options).meta===void 0?{}:(e.options===void 0?{}:e.options).meta).label}:${t} x ${n}`,tuple:`${(e.counts===void 0?[]:e.counts)[0]===void 0?1:(e.counts===void 0?[]:e.counts)[0]}-${(e.counts===void 0?[]:e.counts)[1]===void 0?2:(e.counts===void 0?[]:e.counts)[1]}`}}))})));return u(e=>{let t=a(`div`,e);y(t,`grid gap-2`);let i=c(`rue:component:anchor`);r(t,i),p(()=>{let e=v(E,{label:`normalized`,value:n.normalized,tone:`warning`});b(()=>m(e,t,i))});let o=c(`rue:component:anchor`);r(t,o),p(()=>{let e=v(E,{label:`total`,value:n.total,tone:`warning`});b(()=>m(e,t,o))});let s=c(`rue:component:anchor`);r(t,s),p(()=>{let e=v(E,{label:`summary`,value:n.summary,tone:`warning`});b(()=>m(e,t,s))});let l=c(`rue:component:anchor`);r(t,l),p(()=>{let e=v(E,{label:`tuple`,value:n.tuple,tone:`warning`});b(()=>m(e,t,l))});let u=c(`rue:component:anchor`);return r(t,u),m(v(E,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),t,u),t})},D=()=>{let{activeTab:i,query:o,count:d,nestedQuery:_,nestedLabel:S,nestedFirst:D,nestedSecond:se,passNestedOptions:O,passNestedMeta:k,passNestedCounts:A,presets:j,nextPreset:ce}=x(`useSetup:0:0:dup7`,()=>t(()=>{let e=x(`ref:1:18`,()=>l(`preview`)),t=x(`ref:1:19`,()=>l(` transfer `)),n=x(`ref:1:20`,()=>l(2)),r=x(`ref:1:21`,()=>l(` nested transfer `)),i=x(`ref:1:22`,()=>l(`deep-live`)),a=x(`ref:1:23`,()=>l(3)),o=x(`ref:1:24`,()=>l(5)),s=x(`ref:1:25`,()=>l(!0)),c=x(`ref:1:26`,()=>l(!0)),u=x(`ref:1:27`,()=>l(!0)),d=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:t,count:n,nestedQuery:r,nestedLabel:i,nestedFirst:a,nestedSecond:o,passNestedOptions:s,passNestedMeta:c,passNestedCounts:u,presets:d,nextPreset:()=>{let e=d.findIndex(e=>e===t.value);t.value=d[e<0?0:(e+1)%d.length]}}}));return u(t=>{let l=n(),x=c(`rue:component:anchor`);return r(l,x),m(v(C,{children:u(()=>{let t=n(),l=a(`div`,t);r(t,l),y(l,`space-y-4`);let x=a(`div`,l);r(l,x),y(x,`space-y-3`);let C=a(`h1`,x);r(x,C),y(C,`text-4xl font-semibold tracking-tight`),r(C,g(`Props 与 useSetup 边界`));let j=a(`p`,x);r(x,j),y(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),r(j,g(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let M=a(`p`,x);r(x,M),y(M,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),r(M,g(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let N=a(`div`,l);r(l,N),e(N,`role`,`tablist`),y(N,`tabs tabs-box`);let P=a(`button`,N);r(N,P),e(P,`role`,`tab`),p(()=>{y(P,String(`tab ${i.value===`preview`?`tab-active`:``}`))}),s(P,`click`,()=>{i.value=`preview`}),r(P,g(`效果`));let F=a(`button`,N);r(N,F),e(F,`role`,`tab`),p(()=>{y(F,String(`tab ${i.value===`code`?`tab-active`:``}`))}),s(F,`click`,()=>{i.value=`code`}),r(F,g(`代码`));let I=a(`div`,l);r(l,I),y(I,`mt-4 grid gap-6 items-start`);let L=c(`rue:slot:anchor`);r(I,L),p(()=>{let t=i.value===`preview`?u(()=>{let t=n();r(t,g(` `));let i=a(`section`,t);r(t,i),y(i,`card border border-base-300 bg-base-100 shadow-sm`);let l=a(`div`,i);r(i,l),y(l,`card-body gap-5`);let u=a(`div`,l);r(l,u),y(u,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let x=a(`label`,u);r(u,x),y(x,`form-control grid gap-2`);let ee=a(`span`,x);r(x,ee),y(ee,`label-text font-medium`),r(ee,g(`父组件 props.query`));let C=a(`input`,x);r(x,C),y(C,`input input-bordered`),p(()=>{h(C,o.value)}),s(C,`input`,e=>{o.value=e.target.value});let w=a(`button`,u);r(u,w),y(w,`btn btn-outline`),s(w,`click`,ce),r(w,g(`切换预设 query`));let j=a(`div`,l);r(l,j),y(j,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let M=a(`span`,j);r(j,M),y(M,`text-sm font-medium`),r(M,g(`父组件 props.count`));let N=a(`div`,j);r(j,N),y(N,`join`);let P=a(`button`,N);r(N,P),y(P,`btn join-item btn-outline`),s(P,`click`,()=>{--d.value}),r(P,g(`-1`));let F=a(`button`,N);r(N,F),y(F,`btn join-item btn-outline`),s(F,`click`,()=>{d.value+=1}),r(F,g(`+1`));let I=a(`input`,j);r(j,I),y(I,`range range-primary`),e(I,`type`,`range`),e(I,`min`,`0`),e(I,`max`,`12`),e(I,`step`,`1`),p(()=>{h(I,String(d.value))}),s(I,`input`,e=>{d.value=Number(e.target.value)});let L=a(`div`,l);r(l,L),y(L,`grid gap-3 md:grid-cols-3`);let le=c(`rue:component:anchor`);r(L,le),p(()=>{let e=v(E,{label:`当前 query`,value:o.value});b(()=>m(e,L,le))});let ue=c(`rue:component:anchor`);r(L,ue),p(()=>{let e=v(E,{label:`trim().toUpperCase()`,value:o.value.trim().toUpperCase()||`(empty)`});b(()=>m(e,L,ue))});let de=c(`rue:component:anchor`);r(L,de),p(()=>{let e=v(E,{label:`当前 count`,value:d.value});b(()=>m(e,L,de))}),r(t,g(` `));let R=a(`div`,t);r(t,R),y(R,`grid gap-4 xl:grid-cols-2`);let fe=c(`rue:component:anchor`);r(R,fe),m(v(T,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:v(te,{query:o.value,count:d.value})}),R,fe);let pe=c(`rue:component:anchor`);r(R,pe),m(v(T,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:v(ne,{query:o.value,count:d.value})}),R,pe);let me=c(`rue:component:anchor`);r(R,me),m(v(T,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:v(re,{query:o.value,count:d.value})}),R,me);let he=c(`rue:component:anchor`);r(R,he),m(v(T,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:v(ie,{query:o.value,count:d.value})}),R,he),r(t,g(` `));let ge=a(`div`,t);r(t,ge),y(ge,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),r(ge,g(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),r(t,g(` `));let _e=a(`section`,t);r(t,_e),y(_e,`card border border-base-300 bg-base-100 shadow-sm`);let z=a(`div`,_e);r(_e,z),y(z,`card-body gap-5`);let B=a(`div`,z);r(z,B),y(B,`space-y-1`);let ve=a(`h2`,B);r(B,ve),y(ve,`text-lg font-semibold leading-tight`),r(ve,g(`Nested 解构边界`));let ye=a(`p`,B);r(B,ye),y(ye,`text-sm text-base-content/70 leading-6`),r(ye,g(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let V=a(`div`,z);r(z,V),y(V,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let H=a(`label`,V);r(V,H),y(H,`form-control grid gap-2`);let be=a(`span`,H);r(H,be),y(be,`label-text font-medium`),r(be,g(`nested options.query`));let xe=a(`input`,H);r(H,xe),y(xe,`input input-bordered`),p(()=>{h(xe,_.value)}),s(xe,`input`,e=>{_.value=e.target.value});let U=a(`label`,V);r(V,U),y(U,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let W=a(`input`,U);r(U,W),y(W,`checkbox checkbox-sm`),e(W,`type`,`checkbox`),p(()=>{f(W,!!O.value)}),s(W,`input`,e=>{O.value=!!e.target.checked});let Se=a(`span`,U);r(U,Se),y(Se,`label-text`),r(Se,g(`传入 options`));let G=a(`div`,z);r(z,G),y(G,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let K=a(`label`,G);r(G,K),y(K,`form-control grid gap-2`);let Ce=a(`span`,K);r(K,Ce),y(Ce,`label-text font-medium`),r(Ce,g(`nested options.meta.label`));let we=a(`input`,K);r(K,we),y(we,`input input-bordered`),p(()=>{h(we,S.value)}),s(we,`input`,e=>{S.value=e.target.value});let q=a(`label`,G);r(G,q),y(q,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Te=a(`input`,q);r(q,Te),y(Te,`checkbox checkbox-sm`),e(Te,`type`,`checkbox`),p(()=>{f(Te,!!k.value)}),s(Te,`input`,e=>{k.value=!!e.target.checked});let Ee=a(`span`,q);r(q,Ee),y(Ee,`label-text`),r(Ee,g(`传入 meta`));let J=a(`div`,z);r(z,J),y(J,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let De=a(`span`,J);r(J,De),y(De,`text-sm font-medium`),r(De,g(`nested counts`));let Y=a(`div`,J);r(J,Y),y(Y,`join`);let Oe=a(`button`,Y);r(Y,Oe),y(Oe,`btn join-item btn-outline`),s(Oe,`click`,()=>{--D.value}),r(Oe,g(`first -1`));let ke=a(`button`,Y);r(Y,ke),y(ke,`btn join-item btn-outline`),s(ke,`click`,()=>{D.value+=1}),r(ke,g(`first +1`));let X=a(`input`,J);r(J,X),y(X,`range range-primary`),e(X,`type`,`range`),e(X,`min`,`0`),e(X,`max`,`12`),e(X,`step`,`1`),p(()=>{h(X,String(se.value))}),s(X,`input`,e=>{se.value=Number(e.target.value)});let Z=a(`label`,J);r(J,Z),y(Z,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ae=a(`input`,Z);r(Z,Ae),y(Ae,`checkbox checkbox-sm`),e(Ae,`type`,`checkbox`),p(()=>{f(Ae,!!A.value)}),s(Ae,`input`,e=>{A.value=!!e.target.checked});let je=a(`span`,Z);r(Z,je),y(je,`label-text`),r(je,g(`传入 counts`));let Q=a(`div`,z);r(z,Q),y(Q,`grid gap-3 md:grid-cols-4`);let Me=c(`rue:component:anchor`);r(Q,Me),p(()=>{let e=v(E,{label:`options.query`,value:O.value?_.value:`undefined`});b(()=>m(e,Q,Me))});let Ne=c(`rue:component:anchor`);r(Q,Ne),p(()=>{let e=v(E,{label:`options.meta.label`,value:O.value&&k.value?S.value:`undefined`});b(()=>m(e,Q,Ne))});let Pe=c(`rue:component:anchor`);r(Q,Pe),p(()=>{let e=v(E,{label:`counts[0]`,value:A.value?D.value:`undefined`});b(()=>m(e,Q,Pe))});let Fe=c(`rue:component:anchor`);r(Q,Fe),p(()=>{let e=v(E,{label:`counts[1]`,value:A.value?se.value:`undefined`});b(()=>m(e,Q,Fe))}),r(t,g(` `));let $=a(`div`,t);r(t,$),y($,`grid gap-4 xl:grid-cols-2`);let Ie=c(`rue:component:anchor`);r($,Ie),m(v(T,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:v(ae,{options:O.value?{query:_.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Ie);let Le=c(`rue:component:anchor`);r($,Le),m(v(T,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:v(oe,{options:O.value?{query:_.value,meta:k.value?{label:S.value}:void 0}:void 0,counts:A.value?[D.value,se.value]:void 0})}),$,Le),r(t,g(` `));let Re=a(`div`,t);return r(t,Re),y(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),r(Re,g(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),r(t,g(` `)),t}):``;b(()=>m(t,I,L))}),r(I,g(` `));let le=c(`rue:slot:anchor`);return r(I,le),p(()=>{let e=i.value===`code`?u(()=>{let e=n(),t=a(`div`,e);r(e,t),y(t,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let i=a(`div`,t);r(t,i),y(i,`card-body p-0`);let o=c(`rue:component:anchor`);return r(i,o),p(()=>{let e=v(ee,{className:`h-full`,lang:`tsx`,code:w});b(()=>m(e,i,o))}),e}):``;b(()=>m(e,I,le))}),t})}),l,x),l})};export{D as default};