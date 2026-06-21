import{$t as e,Jt as t,Q as n,St as r,Z as i,_t as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,rt as m,t as h,tt as g,ut as ee,vt as _,x as v,zt as y}from"./vapor-runtime-DsQWl-IB.js";import{a as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{i as x}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as te}from"./Code-4SUSUwRg.js";import{r as S}from"./SidebarPlaygroundExample-BEWYUWOl.js";var C=`import { computed, h, ref, type FC, useSetup } from '@rue-js/rue'
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
`,w=t=>u(r=>{let i=f(`section`,r);o(i,`card border border-base-300 bg-base-100 shadow-sm`);let a=f(`div`,i);n(i,a),o(a,`card-body gap-4`);let c=f(`div`,a);n(a,c),o(c,`space-y-1`);let l=f(`h2`,c);n(c,l),o(l,`text-lg font-semibold leading-tight`);let u=s(`rue:slot:anchor`);n(l,u),y(()=>{let n=t.title;e(()=>p(n,l,u))});let d=f(`p`,c);n(c,d),o(d,`text-sm text-base-content/70 leading-6`);let m=s(`rue:slot:anchor`);n(d,m),y(()=>{let n=t.note;e(()=>p(n,d,m))});let h=f(`div`,a);n(a,h),o(h,`grid gap-2 text-sm text-base-content/85`);let g=s(`rue:children:anchor`);return n(h,g),y(()=>{let n=t.children;e(()=>p(n,h,g))}),i}),T=t=>{let{toneClassName:i}=b(`useSetup:0:0`,()=>c(()=>({toneClassName:b(`computed:1:0`,()=>r(()=>t.tone===`success`?`border-success/30 bg-success/10 text-success`:t.tone===`warning`?`border-warning/30 bg-warning/10 text-warning`:`border-base-300/70 bg-base-200/60 text-base-content/80`))})));return u(r=>{let a=f(`div`,r);o(a,`grid gap-1 rounded-xl border border-base-300/70 bg-base-200/40 px-3 py-2.5`);let c=f(`span`,a);n(a,c),o(c,`text-xs uppercase tracking-[0.18em] text-base-content/45`);let u=s(`rue:slot:anchor`);n(c,u),y(()=>{let n=t.label;e(()=>p(n,c,u))});let d=f(`span`,a);n(a,d),y(()=>{o(d,`rounded-lg border px-2.5 py-1.5 font-mono text-xs md:text-sm ${i.get()}`)});let m=l(d);return n(d,m),y(()=>{_(m,String(t.value))}),a})},ne=e=>{let{normalized:t,summary:n}=b(`useSetup:0:0:dup1`,()=>c(()=>{let t=b(`computed:1:1`,()=>r(()=>e.query.trim().toUpperCase()||`(empty)`)),n=t;return{normalized:t,summary:b(`computed:1:2`,()=>r(()=>`${n.get()} x ${e.count}`))}}));return v(`div`,{className:`grid gap-2`},x(T,{label:`normalized`,value:t.get(),tone:`success`}),x(T,{label:`summary`,value:n.get(),tone:`success`}),x(T,{label:`mode`,value:`render 期直接读取解构 props`}))},re=r=>{let{setupState:i}=b(`useSetup:0:0:dup2`,()=>c(()=>({setupState:b(`useSetup:1:5`,()=>c(()=>{let e={defaultValue:r.query.trim().toUpperCase()||`(empty)`};return{searchConfig:e,searchValueRef:b(`ref:1:3`,()=>t(e.defaultValue)),pageRef:b(`ref:1:4`,()=>t(r.count))}}))})));return u(t=>{let r=f(`div`,t);o(r,`grid gap-2`);let a=s(`rue:component:anchor`);n(r,a),y(()=>{let t=h(T,{label:`searchConfig.defaultValue`,value:i.searchConfig.defaultValue,tone:`warning`});e(()=>p(t,r,a))});let c=s(`rue:component:anchor`);n(r,c),y(()=>{let t=h(T,{label:`searchValueRef.value`,value:i.searchValueRef.value,tone:`warning`});e(()=>p(t,r,c))});let l=s(`rue:component:anchor`);n(r,l),y(()=>{let t=h(T,{label:`pageRef.value`,value:i.pageRef.value,tone:`warning`});e(()=>p(t,r,l))});let u=s(`rue:component:anchor`);return n(r,u),p(h(T,{label:`mode`,value:`手写 useSetup，一次性捕获解构 props`}),r,u),r})},ie=t=>{let{setupState:i}=b(`useSetup:0:0:dup3`,()=>c(()=>({setupState:b(`useSetup:1:8`,()=>c(()=>({normalized:b(`computed:1:6`,()=>r(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:7`,()=>r(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return u(t=>{let r=f(`div`,t);o(r,`grid gap-2`);let a=s(`rue:component:anchor`);n(r,a),y(()=>{let t=h(T,{label:`normalized.get()`,value:i.normalized.get(),tone:`success`});e(()=>p(t,r,a))});let c=s(`rue:component:anchor`);n(r,c),y(()=>{let t=h(T,{label:`summary.get()`,value:i.summary.get(),tone:`success`});e(()=>p(t,r,c))});let l=s(`rue:component:anchor`);return n(r,l),p(h(T,{label:`mode`,value:`useSetup 内改用 props 对象 + computed`}),r,l),r})},ae=t=>{let{setupState:i}=b(`useSetup:0:0:dup4`,()=>c(()=>({setupState:b(`useSetup:1:11`,()=>c(()=>({normalized:b(`computed:1:9`,()=>r(()=>t.query.trim().toUpperCase()||`(empty)`)),summary:b(`computed:1:10`,()=>r(()=>`${t.query.trim().toUpperCase()||`(empty)`} x ${t.count}`))})))})));return u(t=>{let r=f(`div`,t);o(r,`grid gap-2`);let a=s(`rue:component:anchor`);n(r,a),y(()=>{let t=h(T,{label:`normalized.get()`,value:i.normalized.get(),tone:`success`});e(()=>p(t,r,a))});let c=s(`rue:component:anchor`);n(r,c),y(()=>{let t=h(T,{label:`summary.get()`,value:i.summary.get(),tone:`success`});e(()=>p(t,r,c))});let l=s(`rue:component:anchor`);return n(r,l),p(h(T,{label:`mode`,value:`useSetup 内用解构 props + computed，编译器会改写为隐藏 props 读取`}),r,l),r})},oe=t=>{let{setupState:i}=b(`useSetup:0:0:dup5`,()=>c(()=>({setupState:b(`useSetup:1:16`,()=>c(()=>({normalized:b(`computed:1:12`,()=>r(()=>((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`)),total:b(`computed:1:13`,()=>r(()=>((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]))),summary:b(`computed:1:14`,()=>r(()=>`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`} x ${((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1])}`)),tuple:b(`computed:1:15`,()=>r(()=>`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`))})))})));return u(t=>{let r=f(`div`,t);o(r,`grid gap-2`);let a=s(`rue:component:anchor`);n(r,a),y(()=>{let t=h(T,{label:`normalized.get()`,value:i.normalized.get(),tone:`success`});e(()=>p(t,r,a))});let c=s(`rue:component:anchor`);n(r,c),y(()=>{let t=h(T,{label:`total.get()`,value:i.total.get(),tone:`success`});e(()=>p(t,r,c))});let l=s(`rue:component:anchor`);n(r,l),y(()=>{let t=h(T,{label:`summary.get()`,value:i.summary.get(),tone:`success`});e(()=>p(t,r,l))});let u=s(`rue:component:anchor`);n(r,u),y(()=>{let t=h(T,{label:`tuple.get()`,value:i.tuple.get(),tone:`success`});e(()=>p(t,r,u))});let d=s(`rue:component:anchor`);return n(r,d),p(h(T,{label:`mode`,value:`nested 解构 + 默认值/别名 + computed，仍然保持响应式`}),r,d),r})},se=t=>{let{setupState:r}=b(`useSetup:0:0:dup6`,()=>c(()=>({setupState:b(`useSetup:1:17`,()=>c(()=>{let e=((t.options===void 0?{}:t.options).query===void 0?` nested-default `:(t.options===void 0?{}:t.options).query).trim().toUpperCase()||`(empty)`,n=((t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0])+((t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]);return{normalized:e,total:n,summary:`${((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label===void 0?`fallback-label`:((t.options===void 0?{}:t.options).meta===void 0?{}:(t.options===void 0?{}:t.options).meta).label}:${e} x ${n}`,tuple:`${(t.counts===void 0?[]:t.counts)[0]===void 0?1:(t.counts===void 0?[]:t.counts)[0]}-${(t.counts===void 0?[]:t.counts)[1]===void 0?2:(t.counts===void 0?[]:t.counts)[1]}`}}))})));return u(t=>{let i=f(`div`,t);o(i,`grid gap-2`);let a=s(`rue:component:anchor`);n(i,a),y(()=>{let t=h(T,{label:`normalized`,value:r.normalized,tone:`warning`});e(()=>p(t,i,a))});let c=s(`rue:component:anchor`);n(i,c),y(()=>{let t=h(T,{label:`total`,value:r.total,tone:`warning`});e(()=>p(t,i,c))});let l=s(`rue:component:anchor`);n(i,l),y(()=>{let t=h(T,{label:`summary`,value:r.summary,tone:`warning`});e(()=>p(t,i,l))});let u=s(`rue:component:anchor`);n(i,u),y(()=>{let t=h(T,{label:`tuple`,value:r.tuple,tone:`warning`});e(()=>p(t,i,u))});let d=s(`rue:component:anchor`);return n(i,d),p(h(T,{label:`mode`,value:`nested 解构后如果先算成一次性快照，仍然只会取首帧`}),i,d),i})},E=()=>{let{activeTab:r,query:l,count:_,nestedQuery:v,nestedLabel:x,nestedFirst:E,nestedSecond:ce,passNestedOptions:D,passNestedMeta:O,passNestedCounts:k,presets:A,nextPreset:le}=b(`useSetup:0:0:dup7`,()=>c(()=>{let e=b(`ref:1:18`,()=>t(`preview`)),n=b(`ref:1:19`,()=>t(` transfer `)),r=b(`ref:1:20`,()=>t(2)),i=b(`ref:1:21`,()=>t(` nested transfer `)),a=b(`ref:1:22`,()=>t(`deep-live`)),o=b(`ref:1:23`,()=>t(3)),s=b(`ref:1:24`,()=>t(5)),c=b(`ref:1:25`,()=>t(!0)),l=b(`ref:1:26`,()=>t(!0)),u=b(`ref:1:27`,()=>t(!0)),d=[` transfer `,` rue `,` vapor `,` setup `];return{activeTab:e,query:n,count:r,nestedQuery:i,nestedLabel:a,nestedFirst:o,nestedSecond:s,passNestedOptions:c,passNestedMeta:l,passNestedCounts:u,presets:d,nextPreset:()=>{let e=d.findIndex(e=>e===n.value);n.value=d[e<0?0:(e+1)%d.length]}}}));return u(t=>{let c=g(),b=s(`rue:component:anchor`);return n(c,b),p(h(S,{children:u(()=>{let t=g(),c=f(`div`,t);n(t,c),o(c,`space-y-4`);let b=f(`div`,c);n(c,b),o(b,`space-y-3`);let S=f(`h1`,b);n(b,S),o(S,`text-4xl font-semibold tracking-tight`),n(S,m(`Props 与 useSetup 边界`));let A=f(`p`,b);n(b,A),o(A,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),n(A,m(`这个页专门验证一个问题：父组件修改 props 后，子组件里依赖 props 的局部值到底哪些还能动态变化。 如果把依赖解构 props 的局部直接搬进一次性的 useSetup，它会退化成首帧快照。`));let j=f(`p`,b);n(b,j),o(j,`max-w-4xl text-sm leading-7 text-base-content/72 md:text-base`),n(j,m(`还有一个容易混淆的点：useSetup 首次执行里创建的 watch、watchEffect、createEffect 不属于每轮 render 都会重建的 render-scope。它们会挂在组件实例的持久 hook scope 上，只在组件卸载时统一清理。`));let M=f(`div`,c);n(c,M),d(M,`role`,`tablist`),o(M,`tabs tabs-box`);let N=f(`button`,M);n(M,N),d(N,`role`,`tab`),y(()=>{o(N,`tab ${r.value===`preview`?`tab-active`:``}`)}),i(N,`click`,()=>{r.value=`preview`}),n(N,m(`效果`));let P=f(`button`,M);n(M,P),d(P,`role`,`tab`),y(()=>{o(P,`tab ${r.value===`code`?`tab-active`:``}`)}),i(P,`click`,()=>{r.value=`code`}),n(P,m(`代码`));let F=f(`div`,c);n(c,F),o(F,`mt-4 grid gap-6 items-start`);let I=s(`rue:slot:anchor`);n(F,I),y(()=>{let t=r.value===`preview`?u(()=>{let t=g();n(t,m(` `));let r=f(`section`,t);n(t,r),o(r,`card border border-base-300 bg-base-100 shadow-sm`);let c=f(`div`,r);n(r,c),o(c,`card-body gap-5`);let u=f(`div`,c);n(c,u),o(u,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let b=f(`label`,u);n(u,b),o(b,`form-control grid gap-2`);let te=f(`span`,b);n(b,te),o(te,`label-text font-medium`),n(te,m(`父组件 props.query`));let S=f(`input`,b);n(b,S),o(S,`input input-bordered`),y(()=>{a(S,l.value)}),i(S,`input`,e=>{l.value=e.target.value});let C=f(`button`,u);n(u,C),o(C,`btn btn-outline`),i(C,`click`,le),n(C,m(`切换预设 query`));let A=f(`div`,c);n(c,A),o(A,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center`);let j=f(`span`,A);n(A,j),o(j,`text-sm font-medium`),n(j,m(`父组件 props.count`));let M=f(`div`,A);n(A,M),o(M,`join`);let N=f(`button`,M);n(M,N),o(N,`btn join-item btn-outline`),i(N,`click`,()=>{--_.value}),n(N,m(`-1`));let P=f(`button`,M);n(M,P),o(P,`btn join-item btn-outline`),i(P,`click`,()=>{_.value+=1}),n(P,m(`+1`));let F=f(`input`,A);n(A,F),o(F,`range range-primary`),d(F,`type`,`range`),d(F,`min`,`0`),d(F,`max`,`12`),d(F,`step`,`1`),y(()=>{a(F,String(_.value))}),i(F,`input`,e=>{_.value=Number(e.target.value)});let I=f(`div`,c);n(c,I),o(I,`grid gap-3 md:grid-cols-3`);let ue=s(`rue:component:anchor`);n(I,ue),y(()=>{let t=h(T,{label:`当前 query`,value:l.value});e(()=>p(t,I,ue))});let de=s(`rue:component:anchor`);n(I,de),y(()=>{let t=h(T,{label:`trim().toUpperCase()`,value:l.value.trim().toUpperCase()||`(empty)`});e(()=>p(t,I,de))});let fe=s(`rue:component:anchor`);n(I,fe),y(()=>{let t=h(T,{label:`当前 count`,value:_.value});e(()=>p(t,I,fe))}),n(t,m(` `));let L=f(`div`,t);n(t,L),o(L,`grid gap-4 xl:grid-cols-2`);let pe=s(`rue:component:anchor`);n(L,pe),p(h(w,{title:`1. 当前安全行为：render 期直接读取解构 props`,note:`这个分支不进一次性 setup。父 props 改变时，组件重新求值，所以展示值会跟着变。`,children:h(ne,{query:l.value,count:_.value})}),L,pe);let me=s(`rue:component:anchor`);n(L,me),p(h(w,{title:`2. 假设把 Transfer 风格的 props 初始化整体搬进一次性 useSetup`,note:`这里手写 useSetup 模拟错误 hoist。searchConfig、searchValueRef、pageRef 都只取首帧。`,children:h(re,{query:l.value,count:_.value})}),L,me);let he=s(`rue:component:anchor`);n(L,he),p(h(w,{title:`3. 可以放进 useSetup 的安全写法：保留 props 对象，用 computed 读取`,note:`这更接近 Vue 3 setup + props 对象的模式。computed 依赖 props 对象本身，所以仍会动态更新。`,children:h(ie,{query:l.value,count:_.value})}),L,he);let ge=s(`rue:component:anchor`);n(L,ge),p(h(w,{title:`4. 新行为：放进 useSetup 后继续用解构 props，只要在 computed 里读取就还能保持响应`,note:`这一块现在依赖编译器改写。query 和 count 会被重写成隐藏 props 对象读取，所以 computed 仍会跟着父 props 变化。`,children:h(ae,{query:l.value,count:_.value})}),L,ge),n(t,m(` `));let _e=f(`div`,t);n(t,_e),o(_e,`rounded-2xl border border-info/25 bg-info/10 px-4 py-4 text-sm leading-7 text-base-content/80`),n(_e,m(`观察重点： 1. 第 1 块会随父 props 一直变化。 2. 第 2 块模拟“把 props 相关初始化错误放进 useSetup”的结果，会停在初始值。 3. 第 3 块说明 props 不是绝对不能进 setup，关键是要保留 reactive props 对象，并在 computed 或 watch 里读取。 4. 第 4 块说明现在顶层解构 props 也不是天然不安全，只要读取发生在 computed 里，编译器会把它改写回隐藏 props 访问。 5. setup 内创建的 watch、watchEffect、createEffect 会跟着组件实例一起存活；如果它们像 render-scope 一样在每次父组件更新后被销毁，后续 props 变化就会出现“第一次能跑，第二次失活”的假象。`)),n(t,m(` `));let ve=f(`section`,t);n(t,ve),o(ve,`card border border-base-300 bg-base-100 shadow-sm`);let R=f(`div`,ve);n(ve,R),o(R,`card-body gap-5`);let z=f(`div`,R);n(R,z),o(z,`space-y-1`);let ye=f(`h2`,z);n(z,ye),o(ye,`text-lg font-semibold leading-tight`),n(ye,m(`Nested 解构边界`));let be=f(`p`,z);n(z,be),o(be,`text-sm text-base-content/70 leading-6`),n(be,m(`这里专门验证更复杂的嵌套解构：对象里再套对象、数组项默认值、别名，以及整个参数默认值。`));let B=f(`div`,R);n(R,B),o(B,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let V=f(`label`,B);n(B,V),o(V,`form-control grid gap-2`);let xe=f(`span`,V);n(V,xe),o(xe,`label-text font-medium`),n(xe,m(`nested options.query`));let Se=f(`input`,V);n(V,Se),o(Se,`input input-bordered`),y(()=>{a(Se,v.value)}),i(Se,`input`,e=>{v.value=e.target.value});let H=f(`label`,B);n(B,H),o(H,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let U=f(`input`,H);n(H,U),o(U,`checkbox checkbox-sm`),d(U,`type`,`checkbox`),y(()=>{ee(U,!!D.value)}),i(U,`input`,e=>{D.value=!!e.target.checked});let Ce=f(`span`,H);n(H,Ce),o(Ce,`label-text`),n(Ce,m(`传入 options`));let W=f(`div`,R);n(R,W),o(W,`grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end`);let G=f(`label`,W);n(W,G),o(G,`form-control grid gap-2`);let we=f(`span`,G);n(G,we),o(we,`label-text font-medium`),n(we,m(`nested options.meta.label`));let Te=f(`input`,G);n(G,Te),o(Te,`input input-bordered`),y(()=>{a(Te,x.value)}),i(Te,`input`,e=>{x.value=e.target.value});let K=f(`label`,W);n(W,K),o(K,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Ee=f(`input`,K);n(K,Ee),o(Ee,`checkbox checkbox-sm`),d(Ee,`type`,`checkbox`),y(()=>{ee(Ee,!!O.value)}),i(Ee,`input`,e=>{O.value=!!e.target.checked});let De=f(`span`,K);n(K,De),o(De,`label-text`),n(De,m(`传入 meta`));let q=f(`div`,R);n(R,q),o(q,`grid gap-3 md:grid-cols-[auto_auto_minmax(0,1fr)_auto] md:items-center`);let Oe=f(`span`,q);n(q,Oe),o(Oe,`text-sm font-medium`),n(Oe,m(`nested counts`));let J=f(`div`,q);n(q,J),o(J,`join`);let ke=f(`button`,J);n(J,ke),o(ke,`btn join-item btn-outline`),i(ke,`click`,()=>{--E.value}),n(ke,m(`first -1`));let Ae=f(`button`,J);n(J,Ae),o(Ae,`btn join-item btn-outline`),i(Ae,`click`,()=>{E.value+=1}),n(Ae,m(`first +1`));let Y=f(`input`,q);n(q,Y),o(Y,`range range-primary`),d(Y,`type`,`range`),d(Y,`min`,`0`),d(Y,`max`,`12`),d(Y,`step`,`1`),y(()=>{a(Y,String(ce.value))}),i(Y,`input`,e=>{ce.value=Number(e.target.value)});let X=f(`label`,q);n(q,X),o(X,`label cursor-pointer justify-start gap-3 rounded-xl border border-base-300/70 px-3 py-2`);let Z=f(`input`,X);n(X,Z),o(Z,`checkbox checkbox-sm`),d(Z,`type`,`checkbox`),y(()=>{ee(Z,!!k.value)}),i(Z,`input`,e=>{k.value=!!e.target.checked});let je=f(`span`,X);n(X,je),o(je,`label-text`),n(je,m(`传入 counts`));let Q=f(`div`,R);n(R,Q),o(Q,`grid gap-3 md:grid-cols-4`);let Me=s(`rue:component:anchor`);n(Q,Me),y(()=>{let t=h(T,{label:`options.query`,value:D.value?v.value:`undefined`});e(()=>p(t,Q,Me))});let Ne=s(`rue:component:anchor`);n(Q,Ne),y(()=>{let t=h(T,{label:`options.meta.label`,value:D.value&&O.value?x.value:`undefined`});e(()=>p(t,Q,Ne))});let Pe=s(`rue:component:anchor`);n(Q,Pe),y(()=>{let t=h(T,{label:`counts[0]`,value:k.value?E.value:`undefined`});e(()=>p(t,Q,Pe))});let Fe=s(`rue:component:anchor`);n(Q,Fe),y(()=>{let t=h(T,{label:`counts[1]`,value:k.value?ce.value:`undefined`});e(()=>p(t,Q,Fe))}),n(t,m(` `));let $=f(`div`,t);n(t,$),o($,`grid gap-4 xl:grid-cols-2`);let Ie=s(`rue:component:anchor`);n($,Ie),p(h(w,{title:`5. Nested 解构 + computed：对象/数组/默认值/别名都会被改写成隐藏 props 读取`,note:`这里覆盖 options.query、options.meta.label、counts[0]、counts[1]，同时允许整个参数或子层级缺省。`,children:h(oe,{options:D.value?{query:v.value,meta:O.value?{label:x.value}:void 0}:void 0,counts:k.value?[E.value,ce.value]:void 0})}),$,Ie);let Le=s(`rue:component:anchor`);n($,Le),p(h(w,{title:`6. Nested 解构 + 一次性快照：即使编译器能改写读取，先算成普通值还是会冻结`,note:`边界没有消失。真正危险的是在 useSetup 首次执行时就把 nested 解构结果拍平成普通字符串或数字。`,children:h(se,{options:D.value?{query:v.value,meta:O.value?{label:x.value}:void 0}:void 0,counts:k.value?[E.value,ce.value]:void 0})}),$,Le),n(t,m(` `));let Re=f(`div`,t);return n(t,Re),o(Re,`rounded-2xl border border-success/25 bg-success/10 px-4 py-4 text-sm leading-7 text-base-content/80`),n(Re,m(`Nested 观察重点： 1. 第 5 块现在覆盖更复杂的解构：嵌套对象、数组项、默认值、别名、整个参数默认值。 2. 关闭 options、meta 或 counts 传入后，第 5 块会退回对应默认值，但仍然保持响应式。 3. 第 6 块说明编译器只保证“读取时”还能回到 reactive props；如果你在 useSetup 首次执行里先算出普通快照，动态性还是会丢。`)),n(t,m(` `)),t}):``;e(()=>p(t,F,I))}),n(F,m(` `));let ue=s(`rue:slot:anchor`);return n(F,ue),y(()=>{let t=r.value===`code`?u(()=>{let t=g(),r=f(`div`,t);n(t,r),o(r,`card border border-base-300 bg-base-100 shadow-sm overflow-auto max-h-[85vh]`);let i=f(`div`,r);n(r,i),o(i,`card-body p-0`);let a=s(`rue:component:anchor`);return n(i,a),y(()=>{let t=h(te,{className:`h-full`,lang:`tsx`,code:C});e(()=>p(t,i,a))}),t}):``;e(()=>p(t,F,ue))}),t})}),c,b),c})};export{E as default};